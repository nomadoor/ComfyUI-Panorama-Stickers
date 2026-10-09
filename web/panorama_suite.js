import * as Is from "../../scripts/app.js";
import { app as Kn } from "../../scripts/app.js";
import { api as Xt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Jc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, Ii = [], nr = () => {
}, Dp = () => !1, Ta = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Da = (e) => e.startsWith("onUpdate:"), Qt = Object.assign, Zc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Iy = Object.prototype.hasOwnProperty, ft = (e, t) => Iy.call(e, t), Ze = Array.isArray, Ei = (e) => Zo(e) === "[object Map]", Lp = (e) => Zo(e) === "[object Set]", $d = (e) => Zo(e) === "[object Date]", rt = (e) => typeof e == "function", $t = (e) => typeof e == "string", or = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Rp = (e) => (vt(e) || rt(e)) && rt(e.then) && rt(e.catch), Vp = Object.prototype.toString, Zo = (e) => Vp.call(e), Ey = (e) => Zo(e).slice(8, -1), $p = (e) => Zo(e) === "[object Object]", Qc = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, go = /* @__PURE__ */ Jc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), La = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Oy = /-\w/g, an = La(
  (e) => e.replace(Oy, (t) => t.slice(1).toUpperCase())
), Fy = /\B([A-Z])/g, di = La(
  (e) => e.replace(Fy, "-$1").toLowerCase()
), Ra = La((e) => e.charAt(0).toUpperCase() + e.slice(1)), ul = La(
  (e) => e ? `on${Ra(e)}` : ""
), er = (e, t) => !Object.is(e, t), Es = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, zp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, eu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let zd;
const Va = () => zd || (zd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yt(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = $t(r) ? Ry(r) : yt(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if ($t(e) || vt(e))
    return e;
}
const Ty = /;(?![^(]*\))/g, Dy = /:([^]+)/, Ly = /\/\*[^]*?\*\//g;
function Ry(e) {
  const t = {};
  return e.replace(Ly, "").split(Ty).forEach((n) => {
    if (n) {
      const r = n.split(Dy);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if ($t(e))
    t = e;
  else if (Ze(e))
    for (let n = 0; n < e.length; n++) {
      const r = st(e[n]);
      r && (t += r + " ");
    }
  else if (vt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $y = /* @__PURE__ */ Jc(Vy);
function jp(e) {
  return !!e || e === "";
}
function zy(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = tu(e[r], t[r]);
  return n;
}
function tu(e, t) {
  if (e === t) return !0;
  let n = $d(e), r = $d(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = or(e), r = or(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? zy(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !tu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Hp = (e) => !!(e && e.__v_isRef === !0), Xe = (e) => $t(e) ? e : e == null ? "" : Ze(e) || vt(e) && (e.toString === Vp || !rt(e.toString)) ? Hp(e) ? Xe(e.value) : JSON.stringify(e, Kp, 2) : String(e), Kp = (e, t) => Hp(t) ? Kp(e, t.value) : Ei(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[dl(r, o) + " =>"] = i, n),
    {}
  )
} : Lp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => dl(n))
} : or(t) ? dl(t) : vt(t) && !Ze(t) && !$p(t) ? String(t) : t, dl = (e, t = "") => {
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
let pn;
class jy {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = pn, !t && pn && (this.index = (pn.scopes || (pn.scopes = [])).push(
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
      const n = pn;
      try {
        return pn = this, t();
      } finally {
        pn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pn, pn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (pn = this.prevScope, this.prevScope = void 0);
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
function Hy() {
  return pn;
}
let kt;
const fl = /* @__PURE__ */ new WeakSet();
class Gp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pn && pn.active && pn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fl.has(this) && (fl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Up(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jd(this), Bp(this);
    const t = kt, n = Gn;
    kt = this, Gn = !0;
    try {
      return this.fn();
    } finally {
      Yp(this), kt = t, Gn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        iu(t);
      this.deps = this.depsTail = void 0, jd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    rc(this) && this.run();
  }
  get dirty() {
    return rc(this);
  }
}
let Wp = 0, yo, bo;
function Up(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = bo, bo = e;
    return;
  }
  e.next = yo, yo = e;
}
function nu() {
  Wp++;
}
function ru() {
  if (--Wp > 0)
    return;
  if (bo) {
    let t = bo;
    for (bo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; yo; ) {
    let t = yo;
    for (yo = void 0; t; ) {
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
function Bp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), iu(r), Ky(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function rc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Oo) || (e.globalVersion = Oo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !rc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = kt, r = Gn;
  kt = e, Gn = !0;
  try {
    Bp(e);
    const i = e.fn(e._value);
    (t.version === 0 || er(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    kt = n, Gn = r, Yp(e), e.flags &= -3;
  }
}
function iu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      iu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ky(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Gn = !0;
const Xp = [];
function Sr() {
  Xp.push(Gn), Gn = !1;
}
function _r() {
  const e = Xp.pop();
  Gn = e === void 0 ? !0 : e;
}
function jd(e) {
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
let Oo = 0;
class Gy {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ou {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!kt || !Gn || kt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== kt)
      n = this.activeLink = new Gy(kt, this), kt.deps ? (n.prevDep = kt.depsTail, kt.depsTail.nextDep = n, kt.depsTail = n) : kt.deps = kt.depsTail = n, Jp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = kt.depsTail, n.nextDep = void 0, kt.depsTail.nextDep = n, kt.depsTail = n, kt.deps === n && (kt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Oo++, this.notify(t);
  }
  notify(t) {
    nu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ru();
    }
  }
}
function Jp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Jp(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ic = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ Symbol(
  ""
), oc = /* @__PURE__ */ Symbol(
  ""
), Fo = /* @__PURE__ */ Symbol(
  ""
);
function Yt(e, t, n) {
  if (Gn && kt) {
    let r = ic.get(e);
    r || ic.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new ou()), i.map = r, i.key = n), i.track();
  }
}
function mr(e, t, n, r, i, o) {
  const s = ic.get(e);
  if (!s) {
    Oo++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (nu(), t === "clear")
    s.forEach(a);
  else {
    const l = Ze(e), c = l && Qc(n);
    if (l && n === "length") {
      const d = Number(r);
      s.forEach((u, f) => {
        (f === "length" || f === Fo || !or(f) && f >= d) && a(u);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(Fo)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(ti)), Ei(e) && a(s.get(oc)));
          break;
        case "delete":
          l || (a(s.get(ti)), Ei(e) && a(s.get(oc)));
          break;
        case "set":
          Ei(e) && a(s.get(ti));
          break;
      }
  }
  ru();
}
function yi(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (Yt(t, "iterate", Fo), /* @__PURE__ */ On(e) ? t : t.map(Un));
}
function $a(e) {
  return Yt(e = /* @__PURE__ */ dt(e), "iterate", Fo), e;
}
function Jn(e, t) {
  return /* @__PURE__ */ wr(e) ? $i(/* @__PURE__ */ ni(e) ? Un(t) : t) : Un(t);
}
const Wy = {
  __proto__: null,
  [Symbol.iterator]() {
    return pl(this, Symbol.iterator, (e) => Jn(this, e));
  },
  concat(...e) {
    return yi(this).concat(
      ...e.map((t) => Ze(t) ? yi(t) : t)
    );
  },
  entries() {
    return pl(this, "entries", (e) => (e[1] = Jn(this, e[1]), e));
  },
  every(e, t) {
    return lr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Jn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return lr(
      this,
      "find",
      e,
      t,
      (n) => Jn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return lr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lr(
      this,
      "findLast",
      e,
      t,
      (n) => Jn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return lr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return lr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ml(this, "includes", e);
  },
  indexOf(...e) {
    return ml(this, "indexOf", e);
  },
  join(e) {
    return yi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ml(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xi(this, "pop");
  },
  push(...e) {
    return Xi(this, "push", e);
  },
  reduce(e, ...t) {
    return Hd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hd(this, "reduceRight", e, t);
  },
  shift() {
    return Xi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xi(this, "splice", e);
  },
  toReversed() {
    return yi(this).toReversed();
  },
  toSorted(e) {
    return yi(this).toSorted(e);
  },
  toSpliced(...e) {
    return yi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xi(this, "unshift", e);
  },
  values() {
    return pl(this, "values", (e) => Jn(this, e));
  }
};
function pl(e, t, n) {
  const r = $a(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ On(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Uy = Array.prototype;
function lr(e, t, n, r, i, o) {
  const s = $a(e), a = s !== e && !/* @__PURE__ */ On(e), l = s[t];
  if (l !== Uy[t]) {
    const u = l.apply(e, o);
    return a ? Un(u) : u;
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
function Hd(e, t, n, r) {
  const i = $a(e), o = i !== e && !/* @__PURE__ */ On(e);
  let s = n, a = !1;
  i !== e && (o ? (a = r.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = Jn(e, c)), n.call(this, c, Jn(e, d), u, e);
  }) : n.length > 3 && (s = function(c, d, u) {
    return n.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...r);
  return a ? Jn(e, l) : l;
}
function ml(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  Yt(r, "iterate", Fo);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ lu(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : i;
}
function Xi(e, t, n = []) {
  Sr(), nu();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return ru(), _r(), r;
}
const By = /* @__PURE__ */ Jc("__proto__,__v_isRef,__isVue"), Zp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(or)
);
function Yy(e) {
  or(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return Yt(t, "has", e), t.hasOwnProperty(e);
}
class Qp {
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
      return r === (i ? o ? ib : rm : o ? nm : tm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = Ze(t);
    if (!i) {
      let l;
      if (s && (l = Wy[n]))
        return l;
      if (n === "hasOwnProperty")
        return Yy;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Zt(t) ? t : r
    );
    if ((or(n) ? Zp.has(n) : By(n)) || (i || Yt(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Zt(a)) {
      const l = s && Qc(n) ? a : a.value;
      return i && vt(l) ? /* @__PURE__ */ ac(l) : l;
    }
    return vt(a) ? i ? /* @__PURE__ */ ac(a) : /* @__PURE__ */ Ui(a) : a;
  }
}
class em extends Qp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = Ze(t) && Qc(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ wr(o);
      if (!/* @__PURE__ */ On(r) && !/* @__PURE__ */ wr(r) && (o = /* @__PURE__ */ dt(o), r = /* @__PURE__ */ dt(r)), !s && /* @__PURE__ */ Zt(o) && !/* @__PURE__ */ Zt(r))
        return c || (o.value = r), !0;
    }
    const a = s ? Number(n) < t.length : ft(t, n), l = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Zt(t) ? t : i
    );
    return t === /* @__PURE__ */ dt(i) && (a ? er(r, o) && mr(t, "set", n, r) : mr(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = ft(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && mr(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!or(n) || !Zp.has(n)) && Yt(t, "has", n), r;
  }
  ownKeys(t) {
    return Yt(
      t,
      "iterate",
      Ze(t) ? "length" : ti
    ), Reflect.ownKeys(t);
  }
}
class qy extends Qp {
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
const Xy = /* @__PURE__ */ new em(), Jy = /* @__PURE__ */ new qy(), Zy = /* @__PURE__ */ new em(!0);
const sc = (e) => e, ms = (e) => Reflect.getPrototypeOf(e);
function Qy(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ dt(i), s = Ei(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...r), d = n ? sc : t ? $i : Un;
    return !t && Yt(
      o,
      "iterate",
      l ? oc : ti
    ), Qt(
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
function hs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function eb(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ dt(o), a = /* @__PURE__ */ dt(i);
      e || (er(i, a) && Yt(s, "get", i), Yt(s, "get", a));
      const { has: l } = ms(s), c = t ? sc : e ? $i : Un;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Yt(/* @__PURE__ */ dt(i), "iterate", ti), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ dt(o), a = /* @__PURE__ */ dt(i);
      return e || (er(i, a) && Yt(s, "has", i), Yt(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ dt(a), c = t ? sc : e ? $i : Un;
      return !e && Yt(l, "iterate", ti), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return Qt(
    n,
    e ? {
      add: hs("add"),
      set: hs("set"),
      delete: hs("delete"),
      clear: hs("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ dt(this), s = ms(o), a = /* @__PURE__ */ dt(i), l = !t && !/* @__PURE__ */ On(i) && !/* @__PURE__ */ wr(i) ? a : i;
        return s.has.call(o, l) || er(i, l) && s.has.call(o, i) || er(a, l) && s.has.call(o, a) || (o.add(l), mr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ On(o) && !/* @__PURE__ */ wr(o) && (o = /* @__PURE__ */ dt(o));
        const s = /* @__PURE__ */ dt(this), { has: a, get: l } = ms(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ dt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? er(o, d) && mr(s, "set", i, o) : mr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ dt(this), { has: s, get: a } = ms(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ dt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && mr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ dt(this), o = i.size !== 0, s = i.clear();
        return o && mr(
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
    n[i] = Qy(i, e, t);
  }), n;
}
function su(e, t) {
  const n = eb(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    ft(n, i) && i in r ? n : r,
    i,
    o
  );
}
const tb = {
  get: /* @__PURE__ */ su(!1, !1)
}, nb = {
  get: /* @__PURE__ */ su(!1, !0)
}, rb = {
  get: /* @__PURE__ */ su(!0, !1)
};
const tm = /* @__PURE__ */ new WeakMap(), nm = /* @__PURE__ */ new WeakMap(), rm = /* @__PURE__ */ new WeakMap(), ib = /* @__PURE__ */ new WeakMap();
function ob(e) {
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
function sb(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ob(Ey(e));
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  return /* @__PURE__ */ wr(e) ? e : au(
    e,
    !1,
    Xy,
    tb,
    tm
  );
}
// @__NO_SIDE_EFFECTS__
function ab(e) {
  return au(
    e,
    !1,
    Zy,
    nb,
    nm
  );
}
// @__NO_SIDE_EFFECTS__
function ac(e) {
  return au(
    e,
    !0,
    Jy,
    rb,
    rm
  );
}
function au(e, t, n, r, i) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = sb(e);
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
function ni(e) {
  return /* @__PURE__ */ wr(e) ? /* @__PURE__ */ ni(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function wr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function lu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function lb(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && zp(e, "__v_skip", !0), e;
}
const Un = (e) => vt(e) ? /* @__PURE__ */ Ui(e) : e, $i = (e) => vt(e) ? /* @__PURE__ */ ac(e) : e;
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return im(e, !1);
}
// @__NO_SIDE_EFFECTS__
function qs(e) {
  return im(e, !0);
}
function im(e, t) {
  return /* @__PURE__ */ Zt(e) ? e : new cb(e, t);
}
class cb {
  constructor(t, n) {
    this.dep = new ou(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : Un(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ On(t) || /* @__PURE__ */ wr(t);
    t = r ? t : /* @__PURE__ */ dt(t), er(t, n) && (this._rawValue = t, this._value = r ? t : Un(t), this.dep.trigger());
  }
}
function Je(e) {
  return /* @__PURE__ */ Zt(e) ? e.value : e;
}
const ub = {
  get: (e, t, n) => t === "__v_raw" ? e : Je(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Zt(i) && !/* @__PURE__ */ Zt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function om(e) {
  return /* @__PURE__ */ ni(e) ? e : new Proxy(e, ub);
}
class db {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ou(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Oo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    kt !== this)
      return Up(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function fb(e, t, n = !1) {
  let r, i;
  return rt(e) ? r = e : (r = e.get, i = e.set), new db(r, i, n);
}
const gs = {}, Xs = /* @__PURE__ */ new WeakMap();
let Xr;
function pb(e, t = !1, n = Xr) {
  if (n) {
    let r = Xs.get(n);
    r || Xs.set(n, r = []), r.push(e);
  }
}
function mb(e, t, n = _t) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = n, c = (F) => i ? F : /* @__PURE__ */ On(F) || i === !1 || i === 0 ? hr(F, 1) : hr(F);
  let d, u, f, m, S = !1, g = !1;
  if (/* @__PURE__ */ Zt(e) ? (u = () => e.value, S = /* @__PURE__ */ On(e)) : /* @__PURE__ */ ni(e) ? (u = () => c(e), S = !0) : Ze(e) ? (g = !0, S = e.some((F) => /* @__PURE__ */ ni(F) || /* @__PURE__ */ On(F)), u = () => e.map((F) => {
    if (/* @__PURE__ */ Zt(F))
      return F.value;
    if (/* @__PURE__ */ ni(F))
      return c(F);
    if (rt(F))
      return l ? l(F, 2) : F();
  })) : rt(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Sr();
      try {
        f();
      } finally {
        _r();
      }
    }
    const F = Xr;
    Xr = d;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Xr = F;
    }
  } : u = nr, t && i) {
    const F = u, M = i === !0 ? 1 / 0 : i;
    u = () => hr(F(), M);
  }
  const v = Hy(), y = () => {
    d.stop(), v && v.active && Zc(v.effects, d);
  };
  if (o && t) {
    const F = t;
    t = (...M) => {
      F(...M), y();
    };
  }
  let j = g ? new Array(e.length).fill(gs) : gs;
  const K = (F) => {
    if (!(!(d.flags & 1) || !d.dirty && !F))
      if (t) {
        const M = d.run();
        if (i || S || (g ? M.some((R, Z) => er(R, j[Z])) : er(M, j))) {
          f && f();
          const R = Xr;
          Xr = d;
          try {
            const Z = [
              M,
              // pass undefined as the old value when it's changed for the first time
              j === gs ? void 0 : g && j[0] === gs ? [] : j,
              m
            ];
            j = M, l ? l(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            Xr = R;
          }
        }
      } else
        d.run();
  };
  return a && a(K), d = new Gp(u), d.scheduler = s ? () => s(K, !1) : K, m = (F) => pb(F, !1, d), f = d.onStop = () => {
    const F = Xs.get(d);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const M of F) M();
      Xs.delete(d);
    }
  }, t ? r ? K(!0) : j = d.run() : s ? s(K.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function hr(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Zt(e))
    hr(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      hr(e[r], t, n);
  else if (Lp(e) || Ei(e))
    e.forEach((r) => {
      hr(r, t, n);
    });
  else if ($p(e)) {
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
function Qo(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    za(i, t, n);
  }
}
function sr(e, t, n, r) {
  if (rt(e)) {
    const i = Qo(e, t, n, r);
    return i && Rp(i) && i.catch((o) => {
      za(o, t, n);
    }), i;
  }
  if (Ze(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(sr(e[o], t, n, r));
    return i;
  }
}
function za(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || _t;
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
      Sr(), Qo(o, null, 10, [
        e,
        l,
        c
      ]), _r();
      return;
    }
  }
  hb(e, n, i, r, s);
}
function hb(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const rn = [];
let Xn = -1;
const Oi = [];
let Ar = null, Si = 0;
const sm = /* @__PURE__ */ Promise.resolve();
let Js = null;
function ja(e) {
  const t = Js || sm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gb(e) {
  let t = Xn + 1, n = rn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = rn[r], o = To(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function cu(e) {
  if (!(e.flags & 1)) {
    const t = To(e), n = rn[rn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= To(n) ? rn.push(e) : rn.splice(gb(t), 0, e), e.flags |= 1, am();
  }
}
function am() {
  Js || (Js = sm.then(cm));
}
function yb(e) {
  Ze(e) ? Oi.push(...e) : Ar && e.id === -1 ? Ar.splice(Si + 1, 0, e) : e.flags & 1 || (Oi.push(e), e.flags |= 1), am();
}
function Kd(e, t, n = Xn + 1) {
  for (; n < rn.length; n++) {
    const r = rn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      rn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function lm(e) {
  if (Oi.length) {
    const t = [...new Set(Oi)].sort(
      (n, r) => To(n) - To(r)
    );
    if (Oi.length = 0, Ar) {
      Ar.push(...t);
      return;
    }
    for (Ar = t, Si = 0; Si < Ar.length; Si++) {
      const n = Ar[Si];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ar = null, Si = 0;
  }
}
const To = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cm(e) {
  try {
    for (Xn = 0; Xn < rn.length; Xn++) {
      const t = rn[Xn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Xn < rn.length; Xn++) {
      const t = rn[Xn];
      t && (t.flags &= -2);
    }
    Xn = -1, rn.length = 0, lm(), Js = null, (rn.length || Oi.length) && cm();
  }
}
let kn = null, um = null;
function Zs(e) {
  const t = kn;
  return kn = e, um = e && e.type.__scopeId || null, t;
}
function dm(e, t = kn, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && tf(-1);
    const o = Zs(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Zs(o), r._d && tf(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function vr(e, t) {
  if (kn === null)
    return e;
  const n = Ua(kn), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = _t] = t[i];
    o && (rt(o) && (o = {
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
function Gr(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[r];
    l && (Sr(), sr(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), _r());
  }
}
function bb(e, t) {
  if (qt) {
    let n = qt.provides;
    const r = qt.parent && qt.parent.provides;
    r === n && (n = qt.provides = Object.create(r)), n[e] = t;
  }
}
function Os(e, t, n = !1) {
  const r = gv();
  if (r || Fi) {
    let i = Fi ? Fi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && rt(t) ? t.call(r && r.proxy) : t;
  }
}
const vb = /* @__PURE__ */ Symbol.for("v-scx"), Sb = () => Os(vb);
function ri(e, t, n) {
  return fm(e, t, n);
}
function fm(e, t, n = _t) {
  const { immediate: r, deep: i, flush: o, once: s } = n, a = Qt({}, n), l = t && r || !t && o !== "post";
  let c;
  if (Lo) {
    if (o === "sync") {
      const m = Sb();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = nr, m.resume = nr, m.pause = nr, m;
    }
  }
  const d = qt;
  a.call = (m, S, g) => sr(m, d, S, g);
  let u = !1;
  o === "post" ? a.scheduler = (m) => {
    fn(m, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (m, S) => {
    S ? m() : cu(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const f = mb(e, t, a);
  return Lo && (c ? c.push(f) : l && f()), f;
}
function _b(e, t, n) {
  const r = this.proxy, i = $t(e) ? e.includes(".") ? pm(r, e) : () => r[e] : e.bind(r, r);
  let o;
  rt(t) ? o = t : (o = t.handler, n = t);
  const s = ts(this), a = fm(i, o.bind(r), n);
  return s(), a;
}
function pm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const wb = /* @__PURE__ */ Symbol("_vte"), kb = (e) => e.__isTeleport, xb = /* @__PURE__ */ Symbol("_leaveCb");
function uu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, uu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Gd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Qs = /* @__PURE__ */ new WeakMap();
function vo(e, t, n, r, i = !1) {
  if (Ze(e)) {
    e.forEach(
      (g, v) => vo(
        g,
        t && (Ze(t) ? t[v] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (So(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && vo(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Ua(r.component) : r.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === _t ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ dt(u), m = u === _t ? Dp : (g) => Gd(d, g) ? !1 : ft(f, g), S = (g, v) => !(v && Gd(d, v));
  if (c != null && c !== l) {
    if (Wd(t), $t(c))
      d[c] = null, m(c) && (u[c] = null);
    else if (/* @__PURE__ */ Zt(c)) {
      const g = t;
      S(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (rt(l))
    Qo(l, a, 12, [s, d]);
  else {
    const g = $t(l), v = /* @__PURE__ */ Zt(l);
    if (g || v) {
      const y = () => {
        if (e.f) {
          const j = g ? m(l) ? u[l] : d[l] : S() || !e.k ? l.value : d[e.k];
          if (i)
            Ze(j) && Zc(j, o);
          else if (Ze(j))
            j.includes(o) || j.push(o);
          else if (g)
            d[l] = [o], m(l) && (u[l] = d[l]);
          else {
            const K = [o];
            S(l, e.k) && (l.value = K), e.k && (d[e.k] = K);
          }
        } else g ? (d[l] = s, m(l) && (u[l] = s)) : v && (S(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const j = () => {
          y(), Qs.delete(e);
        };
        j.id = -1, Qs.set(e, j), fn(j, n);
      } else
        Wd(e), y();
    }
  }
}
function Wd(e) {
  const t = Qs.get(e);
  t && (t.flags |= 8, Qs.delete(e));
}
Va().requestIdleCallback;
Va().cancelIdleCallback;
const So = (e) => !!e.type.__asyncLoader, hm = (e) => e.type.__isKeepAlive;
function Mb(e, t) {
  gm(e, "a", t);
}
function Pb(e, t) {
  gm(e, "da", t);
}
function gm(e, t, n = qt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ha(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      hm(i.parent.vnode) && Nb(r, t, n, i), i = i.parent;
  }
}
function Nb(e, t, n, r) {
  const i = Ha(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ym(() => {
    Zc(r[t], i);
  }, n);
}
function Ha(e, t, n = qt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Sr();
      const a = ts(n), l = sr(t, n, e, s);
      return a(), _r(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const xr = (e) => (t, n = qt) => {
  (!Lo || e === "sp") && Ha(e, (...r) => t(...r), n);
}, Ab = xr("bm"), Ka = xr("m"), Cb = xr(
  "bu"
), Ib = xr("u"), es = xr(
  "bum"
), ym = xr("um"), Eb = xr(
  "sp"
), Ob = xr("rtg"), Fb = xr("rtc");
function Tb(e, t = qt) {
  Ha("ec", e, t);
}
const Db = "components", bm = /* @__PURE__ */ Symbol.for("v-ndc");
function Lb(e) {
  return $t(e) ? Rb(Db, e, !1) || e : e || bm;
}
function Rb(e, t, n = !0, r = !1) {
  const i = kn || qt;
  if (i) {
    const o = i.type;
    {
      const a = _v(
        o,
        !1
      );
      if (a && (a === t || a === an(t) || a === Ra(an(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ud(i[e] || o[e], t) || // global registration
      Ud(i.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function Ud(e, t) {
  return e && (e[t] || e[an(t)] || e[Ra(an(t))]);
}
function mt(e, t, n, r) {
  let i;
  const o = n, s = Ze(e);
  if (s || $t(e)) {
    const a = s && /* @__PURE__ */ ni(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ On(e), c = /* @__PURE__ */ wr(e), e = $a(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? $i(Un(e[d])) : Un(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (vt(e))
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
const lc = (e) => e ? $m(e) ? Ua(e) : lc(e.parent) : null, _o = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => lc(e.parent),
    $root: (e) => lc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ja.bind(e.proxy)),
    $watch: (e) => _b.bind(e)
  })
), hl = (e, t) => e !== _t && !e.__isScriptSetup && ft(e, t), Vb = {
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
        if (hl(r, t))
          return s[t] = 1, r[t];
        if (i !== _t && ft(i, t))
          return s[t] = 2, i[t];
        if (ft(o, t))
          return s[t] = 3, o[t];
        if (n !== _t && ft(n, t))
          return s[t] = 4, n[t];
        cc && (s[t] = 0);
      }
    }
    const c = _o[t];
    let d, u;
    if (c)
      return t === "$attrs" && Yt(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== _t && ft(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      u = l.config.globalProperties, ft(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return hl(i, t) ? (i[t] = n, !0) : r !== _t && ft(r, t) ? (r[t] = n, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(n[a] || e !== _t && a[0] !== "$" && ft(e, a) || hl(t, a) || ft(o, a) || ft(r, a) || ft(_o, a) || ft(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ft(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Bd(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let cc = !0;
function $b(e) {
  const t = Sm(e), n = e.proxy, r = e.ctx;
  cc = !1, t.beforeCreate && Yd(t.beforeCreate, e, "bc");
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
    updated: S,
    activated: g,
    deactivated: v,
    beforeDestroy: y,
    beforeUnmount: j,
    destroyed: K,
    unmounted: F,
    render: M,
    renderTracked: R,
    renderTriggered: Z,
    errorCaptured: Y,
    serverPrefetch: ae,
    // public API
    expose: Se,
    inheritAttrs: ye,
    // assets
    components: q,
    directives: _e,
    filters: pe
  } = t;
  if (c && zb(c, r, null), s)
    for (const ge in s) {
      const oe = s[ge];
      rt(oe) && (r[ge] = oe.bind(n));
    }
  if (i) {
    const ge = i.call(n, n);
    vt(ge) && (e.data = /* @__PURE__ */ Ui(ge));
  }
  if (cc = !0, o)
    for (const ge in o) {
      const oe = o[ge], I = rt(oe) ? oe.bind(n, n) : rt(oe.get) ? oe.get.bind(n, n) : nr, V = !rt(oe) && rt(oe.set) ? oe.set.bind(n) : nr, N = nt({
        get: I,
        set: V
      });
      Object.defineProperty(r, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => N.value,
        set: (fe) => N.value = fe
      });
    }
  if (a)
    for (const ge in a)
      vm(a[ge], r, n, ge);
  if (l) {
    const ge = rt(l) ? l.call(n) : l;
    Reflect.ownKeys(ge).forEach((oe) => {
      bb(oe, ge[oe]);
    });
  }
  d && Yd(d, e, "c");
  function te(ge, oe) {
    Ze(oe) ? oe.forEach((I) => ge(I.bind(n))) : oe && ge(oe.bind(n));
  }
  if (te(Ab, u), te(Ka, f), te(Cb, m), te(Ib, S), te(Mb, g), te(Pb, v), te(Tb, Y), te(Fb, R), te(Ob, Z), te(es, j), te(ym, F), te(Eb, ae), Ze(Se))
    if (Se.length) {
      const ge = e.exposed || (e.exposed = {});
      Se.forEach((oe) => {
        Object.defineProperty(ge, oe, {
          get: () => n[oe],
          set: (I) => n[oe] = I,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === nr && (e.render = M), ye != null && (e.inheritAttrs = ye), q && (e.components = q), _e && (e.directives = _e), ae && mm(e);
}
function zb(e, t, n = nr) {
  Ze(e) && (e = uc(e));
  for (const r in e) {
    const i = e[r];
    let o;
    vt(i) ? "default" in i ? o = Os(
      i.from || r,
      i.default,
      !0
    ) : o = Os(i.from || r) : o = Os(i), /* @__PURE__ */ Zt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function Yd(e, t, n) {
  sr(
    Ze(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vm(e, t, n, r) {
  let i = r.includes(".") ? pm(n, r) : () => n[r];
  if ($t(e)) {
    const o = t[e];
    rt(o) && ri(i, o);
  } else if (rt(e))
    ri(i, e.bind(n));
  else if (vt(e))
    if (Ze(e))
      e.forEach((o) => vm(o, t, n, r));
    else {
      const o = rt(e.handler) ? e.handler.bind(n) : t[e.handler];
      rt(o) && ri(i, o, e);
    }
}
function Sm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (c) => ea(l, c, s, !0)
  ), ea(l, t, s)), vt(t) && o.set(t, l), l;
}
function ea(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && ea(e, o, n, !0), i && i.forEach(
    (s) => ea(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const a = jb[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const jb = {
  data: qd,
  props: Xd,
  emits: Xd,
  // objects
  methods: oo,
  computed: oo,
  // lifecycle
  beforeCreate: tn,
  created: tn,
  beforeMount: tn,
  mounted: tn,
  beforeUpdate: tn,
  updated: tn,
  beforeDestroy: tn,
  beforeUnmount: tn,
  destroyed: tn,
  unmounted: tn,
  activated: tn,
  deactivated: tn,
  errorCaptured: tn,
  serverPrefetch: tn,
  // assets
  components: oo,
  directives: oo,
  // watch
  watch: Kb,
  // provide / inject
  provide: qd,
  inject: Hb
};
function qd(e, t) {
  return t ? e ? function() {
    return Qt(
      rt(e) ? e.call(this, this) : e,
      rt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hb(e, t) {
  return oo(uc(e), uc(t));
}
function uc(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function tn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function oo(e, t) {
  return e ? Qt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xd(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qt(
    /* @__PURE__ */ Object.create(null),
    Bd(e),
    Bd(t ?? {})
  ) : t;
}
function Kb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Qt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = tn(e[r], t[r]);
  return n;
}
function _m() {
  return {
    app: null,
    config: {
      isNativeTag: Dp,
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
let Gb = 0;
function Wb(e, t) {
  return function(r, i = null) {
    rt(r) || (r = Qt({}, r)), i != null && !vt(i) && (i = null);
    const o = _m(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Gb++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: kv,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && rt(d.install) ? (s.add(d), d.install(c, ...u)) : rt(d) && (s.add(d), d(c, ...u))), c;
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
          const m = c._ceVNode || Be(r, i);
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, d, f), l = !0, c._container = d, d.__vue_app__ = c, Ua(m.component);
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
        const u = Fi;
        Fi = c;
        try {
          return d();
        } finally {
          Fi = u;
        }
      }
    };
    return c;
  };
}
let Fi = null;
const Ub = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${an(t)}Modifiers`] || e[`${di(t)}Modifiers`];
function Bb(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let i = n;
  const o = t.startsWith("update:"), s = o && Ub(r, t.slice(7));
  s && (s.trim && (i = n.map((d) => $t(d) ? d.trim() : d)), s.number && (i = n.map(eu)));
  let a, l = r[a = ul(t)] || // also try camelCase event handler (#2249)
  r[a = ul(an(t))];
  !l && o && (l = r[a = ul(di(t))]), l && sr(
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
const Yb = /* @__PURE__ */ new WeakMap();
function wm(e, t, n = !1) {
  const r = n ? Yb : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!rt(e)) {
    const l = (c) => {
      const d = wm(c, t, !0);
      d && (a = !0, Qt(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (vt(e) && r.set(e, null), null) : (Ze(o) ? o.forEach((l) => s[l] = null) : Qt(s, o), vt(e) && r.set(e, s), s);
}
function Ga(e, t) {
  return !e || !Ta(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, di(t)) || ft(e, t));
}
function Jd(e) {
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
    setupState: m,
    ctx: S,
    inheritAttrs: g
  } = e, v = Zs(e);
  let y, j;
  try {
    if (n.shapeFlag & 4) {
      const F = i || r, M = F;
      y = Zn(
        c.call(
          M,
          F,
          d,
          u,
          m,
          f,
          S
        )
      ), j = a;
    } else {
      const F = t;
      y = Zn(
        F.length > 1 ? F(
          u,
          { attrs: a, slots: s, emit: l }
        ) : F(
          u,
          null
        )
      ), j = t.props ? a : qb(a);
    }
  } catch (F) {
    wo.length = 0, za(F, e, 1), y = Be(Fr);
  }
  let K = y;
  if (j && g !== !1) {
    const F = Object.keys(j), { shapeFlag: M } = K;
    F.length && M & 7 && (o && F.some(Da) && (j = Xb(
      j,
      o
    )), K = zi(K, j, !1, !0));
  }
  return n.dirs && (K = zi(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition && uu(K, n.transition), y = K, Zs(v), y;
}
const qb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ta(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xb = (e, t) => {
  const n = {};
  for (const r in e)
    (!Da(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Jb(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Zd(r, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (km(s, r, f) && !Ga(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? Zd(r, s, c) : !0 : !!s;
  return !1;
}
function Zd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (km(t, e, o) && !Ga(n, o))
      return !0;
  }
  return !1;
}
function km(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && vt(r) && vt(i) ? !tu(r, i) : r !== i;
}
function Zb({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const xm = {}, Mm = () => Object.create(xm), Pm = (e) => Object.getPrototypeOf(e) === xm;
function Qb(e, t, n, r = !1) {
  const i = {}, o = Mm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nm(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ ab(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function ev(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ dt(i), [l] = e.propsOptions;
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
        if (Ga(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (ft(o, f))
            m !== o[f] && (o[f] = m, c = !0);
          else {
            const S = an(f);
            i[S] = dc(
              l,
              a,
              S,
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
    Nm(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !ft(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = di(u)) === u || !ft(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[u] = dc(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !ft(t, u)) && (delete o[u], c = !0);
  }
  c && mr(e.attrs, "set", "");
}
function Nm(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (go(l))
        continue;
      const c = t[l];
      let d;
      i && ft(i, d = an(l)) ? !o || !o.includes(d) ? n[d] = c : (a || (a = {}))[d] = c : Ga(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ dt(n), c = a || _t;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      n[u] = dc(
        i,
        l,
        u,
        c[u],
        e,
        !ft(c, u)
      );
    }
  }
  return s;
}
function dc(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const a = ft(s, "default");
    if (a && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && rt(l)) {
        const { propsDefaults: c } = i;
        if (n in c)
          r = c[n];
        else {
          const d = ts(i);
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
    ] && (r === "" || r === di(n)) && (r = !0));
  }
  return r;
}
const tv = /* @__PURE__ */ new WeakMap();
function Am(e, t, n = !1) {
  const r = n ? tv : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!rt(e)) {
    const d = (u) => {
      l = !0;
      const [f, m] = Am(u, t, !0);
      Qt(s, f), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return vt(e) && r.set(e, Ii), Ii;
  if (Ze(o))
    for (let d = 0; d < o.length; d++) {
      const u = an(o[d]);
      Qd(u) && (s[u] = _t);
    }
  else if (o)
    for (const d in o) {
      const u = an(d);
      if (Qd(u)) {
        const f = o[d], m = s[u] = Ze(f) || rt(f) ? { type: f } : Qt({}, f), S = m.type;
        let g = !1, v = !0;
        if (Ze(S))
          for (let y = 0; y < S.length; ++y) {
            const j = S[y], K = rt(j) && j.name;
            if (K === "Boolean") {
              g = !0;
              break;
            } else K === "String" && (v = !1);
          }
        else
          g = rt(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = v, (g || ft(m, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return vt(e) && r.set(e, c), c;
}
function Qd(e) {
  return e[0] !== "$" && !go(e);
}
const du = (e) => e === "_" || e === "_ctx" || e === "$stable", fu = (e) => Ze(e) ? e.map(Zn) : [Zn(e)], nv = (e, t, n) => {
  if (t._n)
    return t;
  const r = dm((...i) => fu(t(...i)), n);
  return r._c = !1, r;
}, Cm = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (du(i)) continue;
    const o = e[i];
    if (rt(o))
      t[i] = nv(i, o, r);
    else if (o != null) {
      const s = fu(o);
      t[i] = () => s;
    }
  }
}, Im = (e, t) => {
  const n = fu(t);
  e.slots.default = () => n;
}, Em = (e, t, n) => {
  for (const r in t)
    (n || !du(r)) && (e[r] = t[r]);
}, rv = (e, t, n) => {
  const r = e.slots = Mm();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Em(r, t, n), n && zp(r, "_", i, !0)) : Cm(t, r);
  } else t && Im(e, t);
}, iv = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, s = _t;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : Em(i, t, n) : (o = !t.$stable, Cm(t, i)), s = t;
  } else t && (Im(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !du(a) && s[a] == null && delete i[a];
}, fn = cv;
function ov(e) {
  return sv(e);
}
function sv(e, t) {
  const n = Va();
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
    setScopeId: m = nr,
    insertStaticContent: S
  } = e, g = (p, h, k, E = null, $ = null, X = null, le = void 0, L = null, re = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Ji(p, h) && (E = ce(p), fe(p, $, X, !0), p = null), h.patchFlag === -2 && (re = !1, h.dynamicChildren = null);
    const { type: x, ref: U, shapeFlag: ie } = h;
    switch (x) {
      case Wa:
        v(p, h, k, E);
        break;
      case Fr:
        y(p, h, k, E);
        break;
      case yl:
        p == null && j(h, k, E, le);
        break;
      case qe:
        q(
          p,
          h,
          k,
          E,
          $,
          X,
          le,
          L,
          re
        );
        break;
      default:
        ie & 1 ? M(
          p,
          h,
          k,
          E,
          $,
          X,
          le,
          L,
          re
        ) : ie & 6 ? _e(
          p,
          h,
          k,
          E,
          $,
          X,
          le,
          L,
          re
        ) : (ie & 64 || ie & 128) && x.process(
          p,
          h,
          k,
          E,
          $,
          X,
          le,
          L,
          re,
          b
        );
    }
    U != null && $ ? vo(U, p && p.ref, X, h || p, !h) : U == null && p && p.ref != null && vo(p.ref, null, X, p, !0);
  }, v = (p, h, k, E) => {
    if (p == null)
      r(
        h.el = a(h.children),
        k,
        E
      );
    else {
      const $ = h.el = p.el;
      h.children !== p.children && c($, h.children);
    }
  }, y = (p, h, k, E) => {
    p == null ? r(
      h.el = l(h.children || ""),
      k,
      E
    ) : h.el = p.el;
  }, j = (p, h, k, E) => {
    [p.el, p.anchor] = S(
      p.children,
      h,
      k,
      E,
      p.el,
      p.anchor
    );
  }, K = ({ el: p, anchor: h }, k, E) => {
    let $;
    for (; p && p !== h; )
      $ = f(p), r(p, k, E), p = $;
    r(h, k, E);
  }, F = ({ el: p, anchor: h }) => {
    let k;
    for (; p && p !== h; )
      k = f(p), i(p), p = k;
    i(h);
  }, M = (p, h, k, E, $, X, le, L, re) => {
    if (h.type === "svg" ? le = "svg" : h.type === "math" && (le = "mathml"), p == null)
      R(
        h,
        k,
        E,
        $,
        X,
        le,
        L,
        re
      );
    else {
      const x = p.el && p.el._isVueCE ? p.el : null;
      try {
        x && x._beginPatch(), ae(
          p,
          h,
          $,
          X,
          le,
          L,
          re
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, R = (p, h, k, E, $, X, le, L) => {
    let re, x;
    const { props: U, shapeFlag: ie, transition: we, dirs: Me } = p;
    if (re = p.el = s(
      p.type,
      X,
      U && U.is,
      U
    ), ie & 8 ? d(re, p.children) : ie & 16 && Y(
      p.children,
      re,
      null,
      E,
      $,
      gl(p, X),
      le,
      L
    ), Me && Gr(p, null, E, "created"), Z(re, p, p.scopeId, le, E), U) {
      for (const me in U)
        me !== "value" && !go(me) && o(re, me, null, U[me], X, E);
      "value" in U && o(re, "value", null, U.value, X), (x = U.onVnodeBeforeMount) && Yn(x, E, p);
    }
    Me && Gr(p, null, E, "beforeMount");
    const Ce = av($, we);
    Ce && we.beforeEnter(re), r(re, h, k), ((x = U && U.onVnodeMounted) || Ce || Me) && fn(() => {
      try {
        x && Yn(x, E, p), Ce && we.enter(re), Me && Gr(p, null, E, "mounted");
      } finally {
      }
    }, $);
  }, Z = (p, h, k, E, $) => {
    if (k && m(p, k), E)
      for (let X = 0; X < E.length; X++)
        m(p, E[X]);
    if ($) {
      let X = $.subTree;
      if (h === X || Dm(X.type) && (X.ssContent === h || X.ssFallback === h)) {
        const le = $.vnode;
        Z(
          p,
          le,
          le.scopeId,
          le.slotScopeIds,
          $.parent
        );
      }
    }
  }, Y = (p, h, k, E, $, X, le, L, re = 0) => {
    for (let x = re; x < p.length; x++) {
      const U = p[x] = L ? dr(p[x]) : Zn(p[x]);
      g(
        null,
        U,
        h,
        k,
        E,
        $,
        X,
        le,
        L
      );
    }
  }, ae = (p, h, k, E, $, X, le) => {
    const L = h.el = p.el;
    let { patchFlag: re, dynamicChildren: x, dirs: U } = h;
    re |= p.patchFlag & 16;
    const ie = p.props || _t, we = h.props || _t;
    let Me;
    if (k && Wr(k, !1), (Me = we.onVnodeBeforeUpdate) && Yn(Me, k, h, p), U && Gr(h, p, k, "beforeUpdate"), k && Wr(k, !0), (ie.innerHTML && we.innerHTML == null || ie.textContent && we.textContent == null) && d(L, ""), x ? Se(
      p.dynamicChildren,
      x,
      L,
      k,
      E,
      gl(h, $),
      X
    ) : le || oe(
      p,
      h,
      L,
      null,
      k,
      E,
      gl(h, $),
      X,
      !1
    ), re > 0) {
      if (re & 16)
        ye(L, ie, we, k, $);
      else if (re & 2 && ie.class !== we.class && o(L, "class", null, we.class, $), re & 4 && o(L, "style", ie.style, we.style, $), re & 8) {
        const Ce = h.dynamicProps;
        for (let me = 0; me < Ce.length; me++) {
          const ue = Ce[me], A = ie[ue], J = we[ue];
          (J !== A || ue === "value") && o(L, ue, A, J, $, k);
        }
      }
      re & 1 && p.children !== h.children && d(L, h.children);
    } else !le && x == null && ye(L, ie, we, k, $);
    ((Me = we.onVnodeUpdated) || U) && fn(() => {
      Me && Yn(Me, k, h, p), U && Gr(h, p, k, "updated");
    }, E);
  }, Se = (p, h, k, E, $, X, le) => {
    for (let L = 0; L < h.length; L++) {
      const re = p[L], x = h[L], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ji(re, x) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? u(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      g(
        re,
        x,
        U,
        null,
        E,
        $,
        X,
        le,
        !0
      );
    }
  }, ye = (p, h, k, E, $) => {
    if (h !== k) {
      if (h !== _t)
        for (const X in h)
          !go(X) && !(X in k) && o(
            p,
            X,
            h[X],
            null,
            $,
            E
          );
      for (const X in k) {
        if (go(X)) continue;
        const le = k[X], L = h[X];
        le !== L && X !== "value" && o(p, X, L, le, $, E);
      }
      "value" in k && o(p, "value", h.value, k.value, $);
    }
  }, q = (p, h, k, E, $, X, le, L, re) => {
    const x = h.el = p ? p.el : a(""), U = h.anchor = p ? p.anchor : a("");
    let { patchFlag: ie, dynamicChildren: we, slotScopeIds: Me } = h;
    Me && (L = L ? L.concat(Me) : Me), p == null ? (r(x, k, E), r(U, k, E), Y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      k,
      U,
      $,
      X,
      le,
      L,
      re
    )) : ie > 0 && ie & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === we.length ? (Se(
      p.dynamicChildren,
      we,
      k,
      $,
      X,
      le,
      L
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || $ && h === $.subTree) && Om(
      p,
      h,
      !0
      /* shallow */
    )) : oe(
      p,
      h,
      k,
      U,
      $,
      X,
      le,
      L,
      re
    );
  }, _e = (p, h, k, E, $, X, le, L, re) => {
    h.slotScopeIds = L, p == null ? h.shapeFlag & 512 ? $.ctx.activate(
      h,
      k,
      E,
      le,
      re
    ) : pe(
      h,
      k,
      E,
      $,
      X,
      le,
      re
    ) : de(p, h, re);
  }, pe = (p, h, k, E, $, X, le) => {
    const L = p.component = hv(
      p,
      E,
      $
    );
    if (hm(p) && (L.ctx.renderer = b), yv(L, !1, le), L.asyncDep) {
      if ($ && $.registerDep(L, te, le), !p.el) {
        const re = L.subTree = Be(Fr);
        y(null, re, h, k), p.placeholder = re.el;
      }
    } else
      te(
        L,
        p,
        h,
        k,
        $,
        X,
        le
      );
  }, de = (p, h, k) => {
    const E = h.component = p.component;
    if (Jb(p, h, k))
      if (E.asyncDep && !E.asyncResolved) {
        ge(E, h, k);
        return;
      } else
        E.next = h, E.update();
    else
      h.el = p.el, E.vnode = h;
  }, te = (p, h, k, E, $, X, le) => {
    const L = () => {
      if (p.isMounted) {
        let { next: ie, bu: we, u: Me, parent: Ce, vnode: me } = p;
        {
          const z = Fm(p);
          if (z) {
            ie && (ie.el = me.el, ge(p, ie, le)), z.asyncDep.then(() => {
              fn(() => {
                p.isUnmounted || x();
              }, $);
            });
            return;
          }
        }
        let ue = ie, A;
        Wr(p, !1), ie ? (ie.el = me.el, ge(p, ie, le)) : ie = me, we && Es(we), (A = ie.props && ie.props.onVnodeBeforeUpdate) && Yn(A, Ce, ie, me), Wr(p, !0);
        const J = Jd(p), H = p.subTree;
        p.subTree = J, g(
          H,
          J,
          // parent may have changed if it's in a teleport
          u(H.el),
          // anchor may have changed if it's in a fragment
          ce(H),
          p,
          $,
          X
        ), ie.el = J.el, ue === null && Zb(p, J.el), Me && fn(Me, $), (A = ie.props && ie.props.onVnodeUpdated) && fn(
          () => Yn(A, Ce, ie, me),
          $
        );
      } else {
        let ie;
        const { el: we, props: Me } = h, { bm: Ce, m: me, parent: ue, root: A, type: J } = p, H = So(h);
        Wr(p, !1), Ce && Es(Ce), !H && (ie = Me && Me.onVnodeBeforeMount) && Yn(ie, ue, h), Wr(p, !0);
        {
          A.ce && A.ce._hasShadowRoot() && A.ce._injectChildStyle(
            J,
            p.parent ? p.parent.type : void 0
          );
          const z = p.subTree = Jd(p);
          g(
            null,
            z,
            k,
            E,
            p,
            $,
            X
          ), h.el = z.el;
        }
        if (me && fn(me, $), !H && (ie = Me && Me.onVnodeMounted)) {
          const z = h;
          fn(
            () => Yn(ie, ue, z),
            $
          );
        }
        (h.shapeFlag & 256 || ue && So(ue.vnode) && ue.vnode.shapeFlag & 256) && p.a && fn(p.a, $), p.isMounted = !0, h = k = E = null;
      }
    };
    p.scope.on();
    const re = p.effect = new Gp(L);
    p.scope.off();
    const x = p.update = re.run.bind(re), U = p.job = re.runIfDirty.bind(re);
    U.i = p, U.id = p.uid, re.scheduler = () => cu(U), Wr(p, !0), x();
  }, ge = (p, h, k) => {
    h.component = p;
    const E = p.vnode.props;
    p.vnode = h, p.next = null, ev(p, h.props, E, k), iv(p, h.children, k), Sr(), Kd(p), _r();
  }, oe = (p, h, k, E, $, X, le, L, re = !1) => {
    const x = p && p.children, U = p ? p.shapeFlag : 0, ie = h.children, { patchFlag: we, shapeFlag: Me } = h;
    if (we > 0) {
      if (we & 128) {
        V(
          x,
          ie,
          k,
          E,
          $,
          X,
          le,
          L,
          re
        );
        return;
      } else if (we & 256) {
        I(
          x,
          ie,
          k,
          E,
          $,
          X,
          le,
          L,
          re
        );
        return;
      }
    }
    Me & 8 ? (U & 16 && P(x, $, X), ie !== x && d(k, ie)) : U & 16 ? Me & 16 ? V(
      x,
      ie,
      k,
      E,
      $,
      X,
      le,
      L,
      re
    ) : P(x, $, X, !0) : (U & 8 && d(k, ""), Me & 16 && Y(
      ie,
      k,
      E,
      $,
      X,
      le,
      L,
      re
    ));
  }, I = (p, h, k, E, $, X, le, L, re) => {
    p = p || Ii, h = h || Ii;
    const x = p.length, U = h.length, ie = Math.min(x, U);
    let we;
    for (we = 0; we < ie; we++) {
      const Me = h[we] = re ? dr(h[we]) : Zn(h[we]);
      g(
        p[we],
        Me,
        k,
        null,
        $,
        X,
        le,
        L,
        re
      );
    }
    x > U ? P(
      p,
      $,
      X,
      !0,
      !1,
      ie
    ) : Y(
      h,
      k,
      E,
      $,
      X,
      le,
      L,
      re,
      ie
    );
  }, V = (p, h, k, E, $, X, le, L, re) => {
    let x = 0;
    const U = h.length;
    let ie = p.length - 1, we = U - 1;
    for (; x <= ie && x <= we; ) {
      const Me = p[x], Ce = h[x] = re ? dr(h[x]) : Zn(h[x]);
      if (Ji(Me, Ce))
        g(
          Me,
          Ce,
          k,
          null,
          $,
          X,
          le,
          L,
          re
        );
      else
        break;
      x++;
    }
    for (; x <= ie && x <= we; ) {
      const Me = p[ie], Ce = h[we] = re ? dr(h[we]) : Zn(h[we]);
      if (Ji(Me, Ce))
        g(
          Me,
          Ce,
          k,
          null,
          $,
          X,
          le,
          L,
          re
        );
      else
        break;
      ie--, we--;
    }
    if (x > ie) {
      if (x <= we) {
        const Me = we + 1, Ce = Me < U ? h[Me].el : E;
        for (; x <= we; )
          g(
            null,
            h[x] = re ? dr(h[x]) : Zn(h[x]),
            k,
            Ce,
            $,
            X,
            le,
            L,
            re
          ), x++;
      }
    } else if (x > we)
      for (; x <= ie; )
        fe(p[x], $, X, !0), x++;
    else {
      const Me = x, Ce = x, me = /* @__PURE__ */ new Map();
      for (x = Ce; x <= we; x++) {
        const G = h[x] = re ? dr(h[x]) : Zn(h[x]);
        G.key != null && me.set(G.key, x);
      }
      let ue, A = 0;
      const J = we - Ce + 1;
      let H = !1, z = 0;
      const T = new Array(J);
      for (x = 0; x < J; x++) T[x] = 0;
      for (x = Me; x <= ie; x++) {
        const G = p[x];
        if (A >= J) {
          fe(G, $, X, !0);
          continue;
        }
        let w;
        if (G.key != null)
          w = me.get(G.key);
        else
          for (ue = Ce; ue <= we; ue++)
            if (T[ue - Ce] === 0 && Ji(G, h[ue])) {
              w = ue;
              break;
            }
        w === void 0 ? fe(G, $, X, !0) : (T[w - Ce] = x + 1, w >= z ? z = w : H = !0, g(
          G,
          h[w],
          k,
          null,
          $,
          X,
          le,
          L,
          re
        ), A++);
      }
      const B = H ? lv(T) : Ii;
      for (ue = B.length - 1, x = J - 1; x >= 0; x--) {
        const G = Ce + x, w = h[G], ne = h[G + 1], se = G + 1 < U ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ne.el || Tm(ne)
        ) : E;
        T[x] === 0 ? g(
          null,
          w,
          k,
          se,
          $,
          X,
          le,
          L,
          re
        ) : H && (ue < 0 || x !== B[ue] ? N(w, k, se, 2) : ue--);
      }
    }
  }, N = (p, h, k, E, $ = null) => {
    const { el: X, type: le, transition: L, children: re, shapeFlag: x } = p;
    if (x & 6) {
      N(p.component.subTree, h, k, E);
      return;
    }
    if (x & 128) {
      p.suspense.move(h, k, E);
      return;
    }
    if (x & 64) {
      le.move(p, h, k, b);
      return;
    }
    if (le === qe) {
      r(X, h, k);
      for (let ie = 0; ie < re.length; ie++)
        N(re[ie], h, k, E);
      r(p.anchor, h, k);
      return;
    }
    if (le === yl) {
      K(p, h, k);
      return;
    }
    if (E !== 2 && x & 1 && L)
      if (E === 0)
        L.beforeEnter(X), r(X, h, k), fn(() => L.enter(X), $);
      else {
        const { leave: ie, delayLeave: we, afterLeave: Me } = L, Ce = () => {
          p.ctx.isUnmounted ? i(X) : r(X, h, k);
        }, me = () => {
          X._isLeaving && X[xb](
            !0
            /* cancelled */
          ), ie(X, () => {
            Ce(), Me && Me();
          });
        };
        we ? we(X, Ce, me) : me();
      }
    else
      r(X, h, k);
  }, fe = (p, h, k, E = !1, $ = !1) => {
    const {
      type: X,
      props: le,
      ref: L,
      children: re,
      dynamicChildren: x,
      shapeFlag: U,
      patchFlag: ie,
      dirs: we,
      cacheIndex: Me,
      memo: Ce
    } = p;
    if (ie === -2 && ($ = !1), L != null && (Sr(), vo(L, null, k, p, !0), _r()), Me != null && (h.renderCache[Me] = void 0), U & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const me = U & 1 && we, ue = !So(p);
    let A;
    if (ue && (A = le && le.onVnodeBeforeUnmount) && Yn(A, h, p), U & 6)
      _(p.component, k, E);
    else {
      if (U & 128) {
        p.suspense.unmount(k, E);
        return;
      }
      me && Gr(p, null, h, "beforeUnmount"), U & 64 ? p.type.remove(
        p,
        h,
        k,
        b,
        E
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== qe || ie > 0 && ie & 64) ? P(
        x,
        h,
        k,
        !1,
        !0
      ) : (X === qe && ie & 384 || !$ && U & 16) && P(re, h, k), E && C(p);
    }
    const J = Ce != null && Me == null;
    (ue && (A = le && le.onVnodeUnmounted) || me || J) && fn(() => {
      A && Yn(A, h, p), me && Gr(p, null, h, "unmounted"), J && (p.el = null);
    }, k);
  }, C = (p) => {
    const { type: h, el: k, anchor: E, transition: $ } = p;
    if (h === qe) {
      O(k, E);
      return;
    }
    if (h === yl) {
      F(p);
      return;
    }
    const X = () => {
      i(k), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (p.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: le, delayLeave: L } = $, re = () => le(k, X);
      L ? L(p.el, X, re) : re();
    } else
      X();
  }, O = (p, h) => {
    let k;
    for (; p !== h; )
      k = f(p), i(p), p = k;
    i(h);
  }, _ = (p, h, k) => {
    const { bum: E, scope: $, job: X, subTree: le, um: L, m: re, a: x } = p;
    ef(re), ef(x), E && Es(E), $.stop(), X && (X.flags |= 8, fe(le, p, h, k)), L && fn(L, h), fn(() => {
      p.isUnmounted = !0;
    }, h);
  }, P = (p, h, k, E = !1, $ = !1, X = 0) => {
    for (let le = X; le < p.length; le++)
      fe(p[le], h, k, E, $);
  }, ce = (p) => {
    if (p.shapeFlag & 6)
      return ce(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), k = h && h[wb];
    return k ? f(k) : h;
  };
  let be = !1;
  const D = (p, h, k) => {
    let E;
    p == null ? h._vnode && (fe(h._vnode, null, null, !0), E = h._vnode.component) : g(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      k
    ), h._vnode = p, be || (be = !0, Kd(E), lm(), be = !1);
  }, b = {
    p: g,
    um: fe,
    m: N,
    r: C,
    mt: pe,
    mc: Y,
    pc: oe,
    pbc: Se,
    n: ce,
    o: e
  };
  return {
    render: D,
    hydrate: void 0,
    createApp: Wb(D)
  };
}
function gl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function av(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Om(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Ze(r) && Ze(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = dr(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && Om(s, a)), a.type === Wa && (a.patchFlag === -1 && (a = i[o] = dr(a)), a.el = s.el), a.type === Fr && !a.el && (a.el = s.el);
    }
}
function lv(e) {
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
function Fm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fm(t);
}
function ef(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Tm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Tm(t.subTree) : null;
}
const Dm = (e) => e.__isSuspense;
function cv(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : yb(e);
}
const qe = /* @__PURE__ */ Symbol.for("v-fgt"), Wa = /* @__PURE__ */ Symbol.for("v-txt"), Fr = /* @__PURE__ */ Symbol.for("v-cmt"), yl = /* @__PURE__ */ Symbol.for("v-stc"), wo = [];
let xn = null;
function Ee(e = !1) {
  wo.push(xn = e ? null : []);
}
function uv() {
  wo.pop(), xn = wo[wo.length - 1] || null;
}
let Do = 1;
function tf(e, t = !1) {
  Do += e, e < 0 && xn && t && (xn.hasOnce = !0);
}
function Lm(e) {
  return e.dynamicChildren = Do > 0 ? xn || Ii : null, uv(), Do > 0 && xn && xn.push(e), e;
}
function De(e, t, n, r, i, o) {
  return Lm(
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
function bn(e, t, n, r, i) {
  return Lm(
    Be(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function Rm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ji(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vm = ({ key: e }) => e ?? null, Fs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || /* @__PURE__ */ Zt(e) || rt(e) ? { i: kn, r: e, k: t, f: !!n } : e : null);
function Ne(e, t = null, n = null, r = 0, i = null, o = e === qe ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vm(t),
    ref: t && Fs(t),
    scopeId: um,
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
    ctx: kn
  };
  return a ? (pu(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= $t(n) ? 8 : 16), Do > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  xn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && xn.push(l), l;
}
const Be = dv;
function dv(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === bm) && (e = Fr), Rm(e)) {
    const a = zi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && pu(a, n), Do > 0 && !o && xn && (a.shapeFlag & 6 ? xn[xn.indexOf(e)] = a : xn.push(a)), a.patchFlag = -2, a;
  }
  if (wv(e) && (e = e.__vccOpts), t) {
    t = fv(t);
    let { class: a, style: l } = t;
    a && !$t(a) && (t.class = st(a)), vt(l) && (/* @__PURE__ */ lu(l) && !Ze(l) && (l = Qt({}, l)), t.style = yt(l));
  }
  const s = $t(e) ? 1 : Dm(e) ? 128 : kb(e) ? 64 : vt(e) ? 4 : rt(e) ? 2 : 0;
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
function fv(e) {
  return e ? /* @__PURE__ */ lu(e) || Pm(e) ? Qt({}, e) : e : null;
}
function zi(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? fr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Vm(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Ze(o) ? o.concat(Fs(t)) : [o, Fs(t)] : Fs(t)
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
    patchFlag: t && e.type !== qe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && zi(e.ssContent),
    ssFallback: e.ssFallback && zi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && uu(
    d,
    l.clone(d)
  ), d;
}
function so(e = " ", t = 0) {
  return Be(Wa, null, e, t);
}
function tt(e = "", t = !1) {
  return t ? (Ee(), bn(Fr, null, e)) : Be(Fr, null, e);
}
function Zn(e) {
  return e == null || typeof e == "boolean" ? Be(Fr) : Ze(e) ? Be(
    qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rm(e) ? dr(e) : Be(Wa, null, String(e));
}
function dr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zi(e);
}
function pu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), pu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Pm(t) ? t._ctx = kn : i === 3 && kn && (kn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else rt(t) ? (t = { default: t, _ctx: kn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [so(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = st([t.class, r.class]));
      else if (i === "style")
        t.style = yt([t.style, r.style]);
      else if (Ta(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(Ze(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Da(i) && (t[i] = s);
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
const pv = _m();
let mv = 0;
function hv(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || pv, o = {
    uid: mv++,
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
    scope: new jy(
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
    propsOptions: Am(r, i),
    emitsOptions: wm(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _t,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: _t,
    data: _t,
    props: _t,
    attrs: _t,
    slots: _t,
    refs: _t,
    setupState: _t,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Bb.bind(null, o), e.ce && e.ce(o), o;
}
let qt = null;
const gv = () => qt || kn;
let ta, fc;
{
  const e = Va(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  ta = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qt = n
  ), fc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Lo = n
  );
}
const ts = (e) => {
  const t = qt;
  return ta(e), e.scope.on(), () => {
    e.scope.off(), ta(t);
  };
}, nf = () => {
  qt && qt.scope.off(), ta(null);
};
function $m(e) {
  return e.vnode.shapeFlag & 4;
}
let Lo = !1;
function yv(e, t = !1, n = !1) {
  t && fc(t);
  const { props: r, children: i } = e.vnode, o = $m(e);
  Qb(e, r, o, t), rv(e, i, n || t);
  const s = o ? bv(e, t) : void 0;
  return t && fc(!1), s;
}
function bv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vb);
  const { setup: r } = n;
  if (r) {
    Sr();
    const i = e.setupContext = r.length > 1 ? Sv(e) : null, o = ts(e), s = Qo(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Rp(s);
    if (_r(), o(), (a || e.sp) && !So(e) && mm(e), a) {
      if (s.then(nf, nf), t)
        return s.then((l) => {
          rf(e, l);
        }).catch((l) => {
          za(l, e, 0);
        });
      e.asyncDep = s;
    } else
      rf(e, s);
  } else
    zm(e);
}
function rf(e, t, n) {
  rt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = om(t)), zm(e);
}
function zm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || nr);
  {
    const i = ts(e);
    Sr();
    try {
      $b(e);
    } finally {
      _r(), i();
    }
  }
}
const vv = {
  get(e, t) {
    return Yt(e, "get", ""), e[t];
  }
};
function Sv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ua(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(om(lb(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in _o)
        return _o[n](e);
    },
    has(t, n) {
      return n in t || n in _o;
    }
  })) : e.proxy;
}
function _v(e, t = !0) {
  return rt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wv(e) {
  return rt(e) && "__vccOpts" in e;
}
const nt = (e, t) => /* @__PURE__ */ fb(e, t, Lo), kv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pc;
const of = typeof window < "u" && window.trustedTypes;
if (of)
  try {
    pc = /* @__PURE__ */ of.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jm = pc ? (e) => pc.createHTML(e) : (e) => e, xv = "http://www.w3.org/2000/svg", Mv = "http://www.w3.org/1998/Math/MathML", ur = typeof document < "u" ? document : null, sf = ur && /* @__PURE__ */ ur.createElement("template"), Pv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? ur.createElementNS(xv, e) : t === "mathml" ? ur.createElementNS(Mv, e) : n ? ur.createElement(e, { is: n }) : ur.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => ur.createTextNode(e),
  createComment: (e) => ur.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ur.querySelector(e),
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
      sf.innerHTML = jm(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = sf.content;
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
}, Nv = /* @__PURE__ */ Symbol("_vtc");
function Av(e, t, n) {
  const r = e[Nv];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const na = /* @__PURE__ */ Symbol("_vod"), Hm = /* @__PURE__ */ Symbol("_vsh"), li = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[na] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zi(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Zi(e, !0), r.enter(e)) : r.leave(e, () => {
      Zi(e, !1);
    }) : Zi(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zi(e, t);
  }
};
function Zi(e, t) {
  e.style.display = t ? e[na] : "none", e[Hm] = !t;
}
const Cv = /* @__PURE__ */ Symbol(""), Iv = /(?:^|;)\s*display\s*:/;
function Ev(e, t, n) {
  const r = e.style, i = $t(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if ($t(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Ts(r, a, "");
        }
      else
        for (const s in t)
          n[s] == null && Ts(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), Ts(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[Cv];
      s && (n += ";" + s), r.cssText = n, o = Iv.test(n);
    }
  } else t && e.removeAttribute("style");
  na in e && (e[na] = o ? r.display : "", e[Hm] && (r.display = "none"));
}
const af = /\s*!important$/;
function Ts(e, t, n) {
  if (Ze(n))
    n.forEach((r) => Ts(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Ov(e, t);
    af.test(n) ? e.setProperty(
      di(r),
      n.replace(af, ""),
      "important"
    ) : e[r] = n;
  }
}
const lf = ["Webkit", "Moz", "ms"], bl = {};
function Ov(e, t) {
  const n = bl[t];
  if (n)
    return n;
  let r = an(t);
  if (r !== "filter" && r in e)
    return bl[t] = r;
  r = Ra(r);
  for (let i = 0; i < lf.length; i++) {
    const o = lf[i] + r;
    if (o in e)
      return bl[t] = o;
  }
  return t;
}
const cf = "http://www.w3.org/1999/xlink";
function uf(e, t, n, r, i, o = $y(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(cf, t.slice(6, t.length)) : e.setAttributeNS(cf, t, n) : n == null || o && !jp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : or(n) ? String(n) : n
  );
}
function df(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jm(n) : n);
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
    a === "boolean" ? n = jp(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function _i(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Fv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ff = /* @__PURE__ */ Symbol("_vei");
function Tv(e, t, n, r, i = null) {
  const o = e[ff] || (e[ff] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [a, l] = Dv(t);
    if (r) {
      const c = o[t] = Vv(
        r,
        i
      );
      _i(e, a, c, l);
    } else s && (Fv(e, a, s, l), o[t] = void 0);
  }
}
const pf = /(?:Once|Passive|Capture)$/;
function Dv(e) {
  let t;
  if (pf.test(e)) {
    t = {};
    let r;
    for (; r = e.match(pf); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : di(e.slice(2)), t];
}
let vl = 0;
const Lv = /* @__PURE__ */ Promise.resolve(), Rv = () => vl || (Lv.then(() => vl = 0), vl = Date.now());
function Vv(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    sr(
      $v(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Rv(), n;
}
function $v(e, t) {
  if (Ze(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const mf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, zv = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? Av(e, r, s) : t === "style" ? Ev(e, n, r) : Ta(t) ? Da(t) || Tv(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jv(e, t, r, s)) ? (df(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && uf(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Hv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !$t(r))) ? df(e, an(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), uf(e, t, r, s));
};
function jv(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mf(t) && rt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return mf(t) && $t(n) ? !1 : t in e;
}
function Hv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = an(t);
  return Array.isArray(n) ? n.some((i) => an(i) === r) : Object.keys(n).some((i) => an(i) === r);
}
const hf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => Es(t, n) : t;
};
function Kv(e) {
  e.target.composing = !0;
}
function gf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sl = /* @__PURE__ */ Symbol("_assign");
function yf(e, t, n) {
  return t && (e = e.trim()), n && (e = eu(e)), e;
}
const bf = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[Sl] = hf(i);
    const o = r || i.props && i.props.type === "number";
    _i(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Sl](yf(e.value, n, o));
    }), (n || o) && _i(e, "change", () => {
      e.value = yf(e.value, n, o);
    }), t || (_i(e, "compositionstart", Kv), _i(e, "compositionend", gf), _i(e, "change", gf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[Sl] = hf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? eu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, Gv = ["ctrl", "shift", "alt", "meta"], Wv = {
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
  exact: (e, t) => Gv.some((n) => e[`${n}Key`] && !t.includes(n))
}, pt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Wv[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Uv = /* @__PURE__ */ Qt({ patchProp: zv }, Pv);
let vf;
function Bv() {
  return vf || (vf = ov(Uv));
}
const mu = ((...e) => {
  const t = Bv().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = qv(r);
    if (!i) return;
    const o = t._component;
    !rt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Yv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Yv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qv(e) {
  return $t(e) ? document.querySelector(e) : e;
}
function Oe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function It(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function hu(e, t) {
  let n = It(t) - It(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const mc = 3;
function Qi(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function ra(e, t = 0) {
  const n = Qi(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Qi(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = Qi(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Qi(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Qi(t) || 0);
}
function Km(e) {
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
const Sf = Math.PI / 180, _f = 0.12, Xv = mc, Jv = 35, Zv = 140, ao = 100, Qv = 20, wf = 0.8;
function e1(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Oe(Number(e || ao), 1, 179) * Sf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / Sf;
}
function gu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ao })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(j, K = null) {
    a && a(j, K);
  }
  function d(j, K, F = null, M = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(j || 0), l.drag.lastY = Number(K || 0), l.drag.lastTs = Number(M || performance.now()), l.drag.pointerId = F, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: F }), !0;
  }
  function u(j, K, F = "pano", M = performance.now()) {
    if (!l.drag.active) return !1;
    const R = Number(M || performance.now()), Z = Number(j), Y = Number(K), ae = Z - l.drag.lastX, Se = Y - l.drag.lastY;
    l.drag.lastX = Z, l.drag.lastY = Y, l.drag.lastTs = R;
    const ye = r() || { x: 1, y: 1 }, q = Number(ye.x || 1), _e = Number(ye.y || 1), pe = { ...t() };
    let de = 0, te = 0;
    if (F === "unwrap") {
      const oe = i() || { w: 1, h: 1 }, I = Math.max(1, Number(oe.w || 1)), V = Math.max(1, Number(oe.h || 1)), N = ae / I, fe = Se / V;
      de = -N * 360 * q, te = fe * 180 * _e;
    } else {
      const oe = o() || { w: 0, h: 0 }, I = Math.max(1, Number(oe.w || 0)), V = Math.max(1, Number(oe.h || 0));
      if (I > 1 && V > 1) {
        const N = Oe(Number(pe.fov || ao), 1, 179), fe = Oe(e1(N, I, V), 0.1, 179);
        de = -(ae / I) * N * q, te = Se / V * fe * _e;
      } else
        de = -ae * _f * q, te = Se * _f * _e;
    }
    pe.yaw = It(Number(pe.yaw || 0) + de), pe.pitch = Oe(Number(pe.pitch || 0) + te, -89.9, 89.9), n(pe), l.velHistory.push({ ts: R, yaw: pe.yaw, pitch: pe.pitch });
    let ge = 0;
    for (; ge < l.velHistory.length - 1 && l.velHistory[ge].ts < R - 100; ) ge++;
    return ge > 0 && l.velHistory.splice(0, ge), l.inertia.active = !1, l.inertia.lastTs = R, s(), c("drag", { phase: "move", dx: ae, dy: Se, dYaw: de, dPitch: te }), !0;
  }
  function f(j = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const K = Number(j || performance.now());
    l.drag.lastTs = K;
    const F = l.velHistory.filter((R) => K - R.ts <= 80);
    if (F.length >= 2) {
      const R = F[0], Z = F.at(-1), Y = Math.max(1e-3, (Z.ts - R.ts) / 1e3);
      let ae = Z.yaw - R.yaw;
      ae > 180 && (ae -= 360), ae < -180 && (ae += 360), l.inertia.vx = ae / Y, l.inertia.vy = (Z.pitch - R.pitch) / Y;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const M = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = M > Qv, l.inertia.lastTs = K, c("drag", { phase: "end", speed: M, inertiaActive: l.inertia.active }), !0;
  }
  function m(j = performance.now()) {
    if (!l.inertia.active) return !1;
    const K = Number(j || performance.now()), F = Math.max(1e-3, (K - (l.inertia.lastTs || K)) / 1e3);
    l.inertia.lastTs = K;
    const M = { ...t() };
    M.yaw = It(Number(M.yaw || 0) + l.inertia.vx * F), M.pitch = Oe(Number(M.pitch || 0) + l.inertia.vy * F, -89.9, 89.9);
    const R = Math.exp(-5.5 * F);
    return l.inertia.vx *= R, l.inertia.vy *= R, Math.abs(l.inertia.vx) < wf && Math.abs(l.inertia.vy) < wf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), n(M), s(), l.inertia.active;
  }
  function S() {
    const j = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], j;
  }
  function g(j) {
    const K = Math.sign(Number(j || 0));
    if (!K) return !1;
    const F = { ...t() }, M = Number(F.fov || ao);
    return F.fov = Oe(M + K * Xv, Jv, Zv), n(F), s(), c("wheel", { deltaSign: K, fovBefore: M, fovAfter: F.fov }), !0;
  }
  function v(j, K = 0) {
    return g(ra(j, K));
  }
  function y() {
    n({ yaw: 0, pitch: 0, fov: ao }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: m,
    stopMotion: S,
    applyWheel: g,
    applyWheelEvent: v,
    resetView: y
  };
}
const t1 = "PanoramaSuite.Debug.Diagnostics", n1 = "PanoramaSuite.Debug.ExportDiagnostics", _l = "pano_suite.diagnostics.v1", kf = "pano_suite.diagnostics.previous.v1", r1 = 300, i1 = 2e5, o1 = 100, s1 = 20, a1 = 1e3, l1 = 2, ys = 1024 * 1024;
function Pr(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function c1() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function u1() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: c1,
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
function d1(e = {}) {
  const t = { ...u1(), ...e };
  let n = !1, r = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, m = { created: 0, collected: 0 }, S = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    d.delete(b), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    u.delete(b), m.collected += 1;
  }) : null, v = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, j = [], K = /* @__PURE__ */ new Map();
  let F = { count: 0, maxMs: 0 }, M = /* @__PURE__ */ new Map(), R = { count: 0, maxMs: 0 };
  const Z = [];
  function Y(b, W, p = void 0) {
    j.push(p === void 0 ? { t: t.clock(), type: b, label: W } : { t: t.clock(), type: b, label: W, detail: p }), j.length > o1 && j.shift();
  }
  function ae(b, W, p, h, k) {
    if (!n || !h || !t.WeakRef) return h;
    const E = { ref: new t.WeakRef(h), label: k };
    return b.add(E), W == null || W.register(h, E), p.created += 1, h;
  }
  function Se(b, W = "") {
    return ae(d, S, f, b, W);
  }
  function ye(b, W = "") {
    return ae(u, g, m, b, W);
  }
  function q({ label: b = "", width: W, height: p, offscreen: h = !1 } = {}) {
    const k = globalThis.OffscreenCanvas;
    let E;
    return h && typeof k < "u" ? E = new k(W, p) : (E = t.document().createElement("canvas"), W !== void 0 && p !== void 0 && (E.width = W, E.height = p)), Se(E, b);
  }
  function _e(b) {
    b.width = 0, b.height = 0, n && (f.released += 1);
  }
  function pe(b = t.document(), W = "") {
    var p;
    return ye(((p = b == null ? void 0 : b.createElement) == null ? void 0 : p.call(b, "video")) || null, W);
  }
  function de(b, W) {
    if (!n || !b) return () => {
    };
    const p = { label: W, lost: !1, disposed: !1 };
    v.add(p), y.created += 1, Y("webgl-created", W);
    const h = () => {
      p.disposed || (p.lost = !0, y.lost += 1, Y("webglcontextlost", W));
    }, k = () => {
      p.disposed || (p.lost = !1, y.restored += 1, Y("webglcontextrestored", W));
    };
    return b.addEventListener("webglcontextlost", h), b.addEventListener("webglcontextrestored", k), () => {
      p.disposed || (p.disposed = !0, v.delete(p), y.disposed += 1, Y("webgl-disposed", W));
    };
  }
  function te(b, W) {
    return K.set(b, W), () => {
      K.get(b) === W && K.delete(b);
    };
  }
  function ge() {
    return n ? t.now() : -1;
  }
  function oe(b) {
    if (b < 0 || !n) return;
    const W = t.now() - b;
    F.count += 1, F.maxMs = Math.max(F.maxMs, W);
  }
  function I(b, W) {
    if (W < 0 || !n) return;
    const p = t.now() - W, h = M.get(b) ?? { count: 0, maxMs: 0 };
    h.count += 1, h.maxMs = Math.max(h.maxMs, p), M.set(b, h);
  }
  function V() {
    let b = 0, W = 0, p = 0, h = [0, 0];
    const k = {};
    for (const E of d) {
      const $ = E.ref.deref();
      if (!$) continue;
      b += 1;
      const X = $.width * $.height;
      X > 0 && (W += 1), p += X, X > h[0] * h[1] && (h = [$.width, $.height]);
      const le = k[E.label] ?? (k[E.label] = [0, 0]);
      le[0] += 1, le[1] += X;
    }
    return { ...f, alive: b, sized: W, pixels: p, mb: Pr(p * 4 / ys, 1), largest: h, byLabel: k };
  }
  function N() {
    const b = [];
    let W = 0, p = 0, h = 0;
    for (const k of u) {
      const E = k.ref.deref();
      if (!E) continue;
      W += 1;
      const $ = !!(E.currentSrc || E.src);
      $ && (p += 1);
      const X = !E.paused && !E.ended;
      X && (h += 1), b.length < s1 && b.push({
        label: k.label,
        playing: X,
        src: $,
        size: [E.videoWidth || 0, E.videoHeight || 0],
        ready: E.readyState ?? 0,
        connected: !!E.isConnected
      });
    }
    return { ...m, alive: W, loaded: p, playing: h, list: b };
  }
  function fe() {
    const b = t.now(), W = t.memory(), p = {
      t: t.clock(),
      heap: W ? { used: Pr(W.usedJSHeapSize / ys, 1), total: Pr(W.totalJSHeapSize / ys, 1), limit: Pr(W.jsHeapSizeLimit / ys, 1) } : null,
      canvas: V(),
      webgl: { ...y, alive: [...v].filter((h) => !h.lost).length },
      video: N(),
      frame: { count: F.count, maxMs: Pr(F.maxMs), longTasks: R.count, longTaskMaxMs: Pr(R.maxMs) },
      renders: Object.fromEntries([...M].map(([h, k]) => [h, { count: k.count, maxMs: Pr(k.maxMs) }])),
      sources: Object.fromEntries([...K].map(([h, k]) => [h, k()])),
      costMs: Pr(c, 3)
    };
    return F = { count: 0, maxMs: 0 }, M = /* @__PURE__ */ new Map(), R = { count: 0, maxMs: 0 }, Z.push({ record: p, text: JSON.stringify(p) }), Z.length > r1 && Z.shift(), l += 1, l % l1 === 0 && O(), c = t.now() - b, p;
  }
  function C(b = i1) {
    const W = JSON.stringify({ ...o, events: j }).slice(0, -1);
    let p = b - W.length - 14, h = Z.length;
    for (; h > 0 && p - Z[h - 1].text.length - 1 >= 0; )
      h -= 1, p -= Z[h].text.length + 1;
    return `${W},"records":[${Z.slice(h).map((k) => k.text).join(",")}]}`;
  }
  function O() {
    if (!o) return;
    const b = t.storage();
    if (b) {
      o.savedAt = t.clock();
      try {
        b.setItem(_l, C());
      } catch {
      }
    }
  }
  function _() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", O();
  }
  function P() {
    var k;
    if (r) return i;
    r = !0;
    const b = t.storage();
    if (!b) return null;
    let W = null;
    try {
      if (W = b.getItem(_l), W === null) {
        const E = b.getItem(kf);
        return i = E === null ? null : JSON.parse(E), i;
      }
      b.setItem(kf, W), b.removeItem(_l), i = JSON.parse(W);
    } catch {
      return i;
    }
    const p = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], h = p.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${p.length} records kept. Its last records:`,
      JSON.stringify(h)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((k = p.at(-1)) == null ? void 0 : k.t) || 0).toISOString()}; ${p.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(h)
    ), i;
  }
  function ce(b) {
    const W = b === !0;
    if (P(), W !== n) {
      if (n = W, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, Z.length = 0, a = t.observeLongTasks((p) => {
          for (const h of p)
            R.count += 1, R.maxMs = Math.max(R.maxMs, h.duration);
        }), t.addUnload(_), s = t.setInterval(fe, a1), O();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(_), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", O();
    }
  }
  function be() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...j], records: Z.map((b) => b.record) } : null,
      previous: i
    };
  }
  function D() {
    const b = t.document(), W = new Blob([JSON.stringify(be(), null, 1)], { type: "application/json" }), p = URL.createObjectURL(W), h = b.createElement("a");
    h.href = p, h.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, h.click(), setTimeout(() => URL.revokeObjectURL(p), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: q,
    releaseCanvas: _e,
    trackCanvas: Se,
    createVideo: pe,
    trackVideo: ye,
    watchContext: de,
    addSource: te,
    frameStart: ge,
    frameEnd: oe,
    renderEnd: I,
    sample: fe,
    serialize: C,
    recoverPrevious: P,
    setEnabled: ce,
    exportData: be,
    download: D
  };
}
const yn = d1(), Kt = yn.createCanvas, Qr = yn.releaseCanvas, wl = yn.trackCanvas, ns = yn.createVideo, xf = yn.trackVideo, f1 = yn.addSource, p1 = yn.frameStart, m1 = yn.frameEnd;
function Gm(e, t) {
  const n = yn.watchContext(e.canvas, t), r = yn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = yn.frameStart(), l = o(s);
    return yn.renderEnd(t, a), l;
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
const h1 = {
  id: t1,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => yn.setEnabled(e === !0)
}, Mf = {
  id: n1,
  label: "Export Panorama Suite diagnostics",
  function: () => yn.download()
}, ct = Math.PI / 180, Ht = 180 / Math.PI;
function Fn(e, t, n) {
  return { x: e, y: t, z: n };
}
function ia(e, t) {
  return Fn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function oa(e, t) {
  return Fn(e.x * t, e.y * t, e.z * t);
}
function kl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function yu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Fn(e.x / t, e.y / t, e.z / t);
}
function gn(e, t) {
  const n = e * ct, r = t * ct, i = Math.cos(r);
  return Fn(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function Bi(e, t, n = 0) {
  const r = Number(e || 0) * ct, i = Number(t || 0) * ct, o = n * ct, s = Math.cos(r), a = Math.sin(r), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Fn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Fn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Fn(a * l, c, s * l)
  };
}
function sa(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function gt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function g1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function y1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const i = String(r.actionGroupId || r.id || "").trim();
    if (!i || n.has(i)) continue;
    n.add(i);
    const o = gt(r.z_index ?? r.zIndex, t.length);
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
function b1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function v1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = gt(e.t, 0), r = gt(e.widthScale, null), i = gt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = gt(e.u, null), s = gt(e.v, null);
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
    const o = gt(e.u, null), s = gt(e.v, null);
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
function bs(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = v1(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function S1(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const l = bs(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const o = bs(e.points, t, 1);
  if (!o) return null;
  const s = bs(e.rawPoints, t, 1), a = bs(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function _1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = b1(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = S1(e.geometry, n, r, t === "paint");
  if (!i) return null;
  const o = gt(e.size, null), s = gt(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = gt(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, gt(f.r, 0))),
      g: Math.max(0, Math.min(1, gt(f.g, 0))),
      b: Math.max(0, Math.min(1, gt(f.b, 0))),
      a: Math.max(0, Math.min(1, gt(f.a, 1)))
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
    hardness: gt(e.hardness, null),
    flow: gt(e.flow, null),
    spacing: gt(e.spacing, null),
    createdAt: Math.trunc(gt(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function Pf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = _1(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function w1(e) {
  if (!e || typeof e != "object") return null;
  const t = gt(e.u0, null), n = gt(e.v0, null), r = gt(e.u1, null), i = gt(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function k1(e) {
  const t = e || {};
  return {
    du: gt(t.du, 0) ?? 0,
    dv: gt(t.dv, 0) ?? 0,
    rot_deg: gt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, gt(t.scale, 1) ?? 1)
  };
}
function x1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = w1(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, gt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: k1(e.transform)
  } : null;
}
function M1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = x1(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function fi(e) {
  const t = g1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: y1(e.groups),
    paint: Pf(e.paint, "paint"),
    mask: Pf(e.mask, "mask"),
    raster_objects: M1(e.raster_objects)
  };
}
const Dn = 1, Ln = 179, hc = 85;
function Ba(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Wm(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Um(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * Ht;
  return n && (r = Math.round(r / 15) * 15), Ba(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Rr(e = {}) {
  const t = Oe(Qe(e.hFOV_deg || 90, 90), Dn, Ln), n = Oe(Qe(e.vFOV_deg || 60, 60), Dn, Ln), r = Math.tan(t * ct * 0.5), i = Math.tan(n * ct * 0.5);
  return {
    yawDeg: Qe(e.yaw_deg, 0),
    pitchDeg: Qe(e.pitch_deg, 0),
    rollDeg: Qe(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: i,
    aspect: r / Math.max(1e-12, i)
  };
}
function ci(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Rr(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function bu(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, Qe(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function vu(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Oe(2 * Math.atan(r / (2 * n)) * Ht, Dn, Ln), s = Oe(2 * Math.atan(i / (2 * n)) * Ht, Dn, Ln);
  return { hFOV_deg: o, vFOV_deg: s };
}
function P1(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), i = Qe(e == null ? void 0 : e.y, 0), o = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Rr(t), l = Math.max(1e-12, Qe(n, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: r + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function Su(e, t, n = hc) {
  const r = Math.max(1e-12, Qe(t, 1)), i = Oe(Qe(n, hc), 1, 89.999), o = r * Math.tan(i * ct), s = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Bm(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function N1(e, t) {
  const n = Oe(Qe(e, 90), Dn, Ln), r = Math.max(1e-6, Qe(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(n * ct * 0.5) / r) * Ht,
    Dn,
    Ln
  );
}
function Ds(e, t) {
  const n = Oe(Qe(e, 60), Dn, Ln), r = Math.max(1e-6, Qe(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(n * ct * 0.5) * r) * Ht,
    Dn,
    Ln
  );
}
function Nf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function A1(e, t) {
  const n = Nf(e, 1), r = Nf(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), s = Math.max(1, Math.round(r * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function pi(e) {
  const t = Oe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * ct, n = Oe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * ct;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function rs(e) {
  const t = pi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || A1(t, 1);
}
function _u(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = rs(t), t;
}
function Ym({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Oe(s, Dn, Ln) : Oe(Math.min(42, Qe(i, 100) * 0.42), 8, 96);
  return _u({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: Oe(Qe(n, 0), -89.9, 89.9),
    roll_deg: Ba(r),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function gr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : rs(e);
}
function qm(e, t) {
  const n = Rr(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * Ht, o = 2 * Math.atan(n.tanHalfY * r) * Ht;
  return i < Dn || i > Ln || o < Dn || o > Ln ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Xm(e, t, n = mc) {
  const r = Math.sign(Qe(t, 0)), i = Math.abs(Qe(n, mc));
  if (!r || !(i > 0)) return null;
  const o = Rr(e), s = o.hFovDeg + r * i;
  if (s < Dn || s > Ln) return null;
  const a = Math.tan(s * ct * 0.5);
  return qm(e, a / o.tanHalfX);
}
function Jm(e, t) {
  const n = Rr(e), r = Bi(n.yawDeg, n.pitchDeg, n.rollDeg), i = Qe(t == null ? void 0 : t.x, 0), o = Qe(t == null ? void 0 : t.y, 0);
  return yu(ia(ia(r.fwd, oa(r.right, i)), oa(r.up, o)));
}
function C1(e) {
  return Fn(e.x, e.y, -e.z);
}
function Ls(e) {
  return Fn(e.x, e.y, -e.z);
}
function ln(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = Bi(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function Zm(e) {
  const t = Ls(Fn(e[0][0], e[1][0], e[2][0])), n = Ls(Fn(e[0][1], e[1][1], e[2][1])), r = Ls(Fn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * n.z - s * n.x, s * t.x - a * t.z);
  return { yawDeg: i * Ht, pitchDeg: o * Ht, rollDeg: l * Ht };
}
function Ro(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function Vr(e) {
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
function vs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ei = 1e-6, gc = 1e-6, I1 = 1e-9;
function Vo(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function E1(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    Vo(0, n, i, 1, c) < t ? s = c : a = c;
  }
  return Vo(0, r, o, 1, 0.5 * (s + a));
}
function ji(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Hi(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = n.map((f) => -f / i), a = r.map((f) => f / o);
  if (s.reduce((f, m, S) => f + m * a[S], 0) < 0) return n.map(() => 0);
  const l = s.map((f, m) => (f * o + a[m] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((m, S) => m + S * S, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function Qm(e, t, n, r) {
  const i = n[r], o = n[r + 1], s = t[r + 1] - t[r], a = i.map((d, u) => o[u] - d);
  let l = a;
  ji(e, r) && (l = Hi(t, r, n[r - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return ji(e, r + 1) && (c = Hi(t, r + 1, a.map((d) => -d), n[r + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function eh(e, t, n, r, i) {
  const [[o], [s]] = Qm(e, t, n.map((a) => [a]), r);
  return Vo(n[r], n[r] + o, n[r + 1] + s, n[r + 1], i);
}
function O1(e, t, n, r) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = Qm(e, t, i, n);
  o = ((c = e[n].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[n + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[n], l = i[n + 1];
  return [0, 1, 2].map((u) => Vo(a[u], a[u] + o[u], l[u] + s[u], l[u], r));
}
function aa([e, t, n, r], [i, o, s, a]) {
  return [
    r * i + e * a + t * s - n * o,
    r * o - e * s + t * a + n * i,
    r * s + e * o - t * i + n * a,
    r * a - e * i - t * o - n * s
  ];
}
function F1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function xl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function T1([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function yc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Ai(e, t) {
  return T1(aa([-e[0], -e[1], -e[2], e[3]], t));
}
function Ml(e, t, n) {
  return aa(e, yc(Ai(e, t).map((r) => n * r)));
}
function Pl(e, t) {
  const n = F1(e, t);
  if (Math.abs(n) > gc) return n < 0;
  const [r, i, o] = Ai(e, t);
  for (const s of [-i, r, o])
    if (Math.abs(s) > gc) return s < 0;
  return !1;
}
function Ss(e) {
  const { x: t, y: n, z: r, w: i } = Vr(ln(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function bc(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function D1(e, t, n, r) {
  const i = Ss(e[n].value);
  let o = Ss(e[n + 1].value);
  Pl(i, o) && (o = xl(o));
  const s = t[n + 1] - t[n], a = Ai(i, o);
  let l = a;
  if (ji(e, n)) {
    let M = Ss(e[n - 1].value);
    Pl(M, i) && (M = xl(M)), l = Hi(t, n, Ai(i, M), a).map((R) => R * s);
  }
  let c = a;
  if (ji(e, n + 1)) {
    let M = Ss(e[n + 2].value);
    Pl(o, M) && (M = xl(M)), c = Hi(t, n + 1, Ai(o, i), Ai(o, M)).map((R) => R * s);
  }
  const d = aa(i, yc(l.map((M, R) => 0.5 * (M - a[R])))), u = aa(o, yc(a.map((M, R) => 0.5 * (M - c[R])))), [f, m, S, g] = Ml(Ml(i, o, r), Ml(d, u, r), 2 * r * (1 - r)), { yawDeg: v, pitchDeg: y, rollDeg: j } = Zm(Ro({ x: f, y: m, z: S, w: g })), K = e[n].value, F = e[n + 1].value;
  return {
    yaw_deg: bc(v, K.yaw_deg, F.yaw_deg, r),
    pitch_deg: y,
    roll_deg: bc(j, K.roll_deg, F.roll_deg, r)
  };
}
function $o(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function la(e) {
  return Math.sqrt($o(e, e));
}
function ca(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function th(e, t) {
  const n = $o(e, t), r = t.map((s, a) => s - n * e[a]), i = la(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((s) => s * o);
}
function wi(e, t) {
  const n = la(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function _s(e, t, n) {
  return wi(e, th(e, t).map((r) => n * r));
}
function Nl(e, t) {
  const n = ca(e[t].value), r = ca(e[t + 1].value), i = $o(n, r), o = i < 0 && la(r.map((l, c) => l - i * n[c])) <= gc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = th(n, r);
  const a = la(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * n[c]), o];
}
function L1(e, t, n, r) {
  const i = ca(e[n].value), o = ca(e[n + 1].value), [s, a, l] = Nl(e, n);
  let c = s, d = a;
  const u = t[n + 1] - t[n];
  ji(e, n) && (c = Hi(t, n, Nl(e, n - 1)[1].map((K) => -K), c).map((K) => K * u)), ji(e, n + 1) && (d = Hi(t, n + 1, d.map((K) => -K), Nl(e, n + 1)[0]).map((K) => K * u));
  let f, m, S;
  if (l) {
    const K = Math.PI, F = Vo(0, $o(c, s) / K / 3, K - $o(d, a) / K / 3, K, r);
    [f, m, S] = wi(i, s.map((M) => F * M / K));
  } else {
    const K = _s(wi(i, c.map((R) => R / 3)), wi(o, d.map((R) => -R / 3)), r), F = _s(wi(i, c.map((R) => r * R / 3)), K, r), M = _s(K, wi(o, d.map((R) => -(1 - r) * R / 3)), r);
    [f, m, S] = _s(F, M, r);
  }
  const g = Math.hypot(f, S), v = e[n].value.yaw_deg, y = e[n + 1].value.yaw_deg;
  return { yaw_deg: g <= I1 ? v + (y - v) * r : bc(Math.atan2(f, S) * 180 / Math.PI, v, y, r), pitch_deg: Math.atan2(m, g) * 180 / Math.PI };
}
function R1(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = eh(e, t, e.map((s) => s.value[o]), n, r);
  return i;
}
function V1(e, t, n, r) {
  return eh(e, t, e.map((i) => i.value), n, r);
}
const $1 = { position: O1, rotation: D1, direction: L1, size: R1 };
function At(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return vs(e[t].value);
  if (n <= r[0].frame + ei) return vs(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - ei) return vs(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + ei; ) o += 1;
  const s = r[o];
  if (Math.abs(n - s.frame) <= ei || s.easing === "hold") return vs(s.value);
  const a = r.map((c) => c.frame), l = E1(s.easing, (n - a[o]) / (a[o + 1] - a[o]));
  return ($1[t] ?? V1)(r, a, o, l);
}
function vc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function z1(e) {
  return Math.min(1, Math.max(0, e));
}
function nh(e) {
  return Math.max(1e-6, e);
}
function rh(e, t) {
  return t - (e.start - e.in);
}
function mi(e, t) {
  return t >= e.start - ei && (e.duration === null || t < e.start + e.duration - ei);
}
function Ya(e, t) {
  return {
    position: At(e, "position", t),
    ...At(e, "rotation", t),
    hFOV_deg: vc(At(e, "fov", t)),
    aspect: e.aspect
  };
}
function is(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = rh(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : Ya(r, n),
    scene: {
      active: i.visible && mi(i.clip, n),
      clip_frame: o,
      position: At(i, "position", o),
      ...At(i, "rotation", o),
      scale: nh(At(i, "scale", o))
    },
    stickers: e.stickers.map((s) => ar(s, n))
  };
}
function j1(e, t) {
  if (e.placement === "world")
    return {
      position: At(e, "position", t),
      ...At(e, "rotation", t),
      scale: nh(At(e, "scale", t))
    };
  const n = At(e, "size", t);
  return {
    ...At(e, "direction", t),
    roll_deg: At(e, "roll", t),
    hFOV_deg: vc(n.hFOV_deg),
    vFOV_deg: vc(n.vFOV_deg)
  };
}
function ar(e, t) {
  const n = rh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && mi(e.clip, t),
    clip_frame: n,
    ...j1(e, n),
    opacity: z1(At(e, "opacity", n))
  };
}
const H1 = 2, ih = ["sky", "world"], Sc = ["perspective", "erp"], K1 = ["input", "output", "temp"], oh = [0.42, 0, 0.58, 1], sh = 1, wu = 1e3, _c = 1e7, ku = _c, xu = Number.MAX_SAFE_INTEGER, G1 = /^sticker_([0-9]{1,16})$/;
function wt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Rt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Mu(e, t) {
  const n = Rt(e, t);
  return n !== null && n > 0 ? n : t;
}
function sn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Tr(e) {
  const t = Rt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Rs(e) {
  const t = Tr(e);
  return t === null ? null : sn(t, -_c, _c);
}
function $r(e) {
  const t = Mu(e, null);
  return t === null ? null : sn(t, sh, wu);
}
function ah(e) {
  const t = Tr(e);
  return t !== null && t >= 1 ? Math.min(t, ku) : null;
}
function zo(e, t) {
  return typeof e == "boolean" ? e : t;
}
function lh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Rt(n, null));
  return t.includes(null) ? null : t;
}
function ch(e) {
  return lh(e) || [0, 0, 0];
}
function uh(e) {
  const t = wt(e) ? e : {};
  return {
    yaw_deg: Rt(t.yaw_deg, 0),
    pitch_deg: sn(Rt(t.pitch_deg, 0), -90, 90),
    roll_deg: Rt(t.roll_deg, 0)
  };
}
function W1(e) {
  return sn(Rt(e, 90), 0.1, 179);
}
function U1(e) {
  return Mu(e, 1);
}
function B1(e) {
  const t = wt(e) ? e : {};
  return {
    yaw_deg: Rt(t.yaw_deg, 0),
    pitch_deg: sn(Rt(t.pitch_deg, 0), -90, 90)
  };
}
function Y1(e) {
  return Rt(e, 0);
}
function q1(e) {
  const t = wt(e) ? e : {};
  return {
    hFOV_deg: sn(Rt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: sn(Rt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function dh(e) {
  return sn(Rt(e, 1), 0, 1);
}
const Pu = [["position", ch], ["rotation", uh], ["fov", W1]], qa = [["position", ch], ["rotation", uh], ["scale", U1]], zr = [["direction", B1], ["roll", Y1], ["size", q1], ["opacity", dh]], jr = [...qa, ["opacity", dh]];
function X1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Rt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...oh];
}
function J1(e) {
  if (!wt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = lh(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Z1(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!wt(i)) continue;
    const o = Rs(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: X1(i.easing) }, a = n ? J1(i.handles) : null;
    a && (s.handles = a), r.set(o, s);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function Xa(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = wt(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: Z1(o.keyframes, i, r === "position") };
  }
  return n;
}
function os(e) {
  const t = wt(e) ? e : {}, n = Rs(t.start), r = Rs(t.in), i = Rs(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Ja(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function fh(e) {
  const t = wt(e) ? e : {}, n = sn(Rt(t.x0, 0), 0, 1), r = sn(Rt(t.y0, 0), 0, 1), i = sn(Rt(t.x1, 1), 0, 1), o = sn(Rt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function Q1(e) {
  if (!wt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: K1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
const ph = Object.freeze([".gltf", ".glb", ".obj", ".fbx", ".stl", ".spz", ".splat", ".ply", ".ksplat"]);
function mh(e) {
  const t = String(e ?? "").toLowerCase(), n = t.lastIndexOf(".");
  return n >= 0 && ph.includes(t.slice(n));
}
function ii(e) {
  return (e == null ? void 0 : e.kind) === "file" && typeof e.filename == "string" && mh(e.filename);
}
function eS(e) {
  const t = Q1(e.source);
  if (!t) return null;
  const n = ih.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: os(e.clip),
    visible: zo(e.visible, !0),
    locked: zo(e.locked, !1),
    crop: fh(e.crop),
    ...Xa(e, r ? jr : zr)
  };
  return r || (i.z_index = Tr(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = tS(e.handoff_overrides, n)), i;
}
function tS(e, t) {
  const n = Array.isArray(e) ? e : [];
  return (t === "world" ? jr : zr).map(([r]) => r).filter((r) => n.includes(r));
}
function nS(e, t) {
  const n = [];
  let r = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = wt(s) ? eS(s) : null;
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
  let o = iS(t, n);
  for (const s of n)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: n, next: Math.min(o, xu) };
}
function rS(e) {
  const t = typeof e == "string" ? G1.exec(e) : null, n = t ? Number(t[1]) : 0;
  return n < xu ? n : 0;
}
function hh(e) {
  return e.reduce((t, n) => Math.max(t, rS(n.id)), 0) + 1;
}
function iS(e, t) {
  const n = Tr(e), r = hh(t);
  return sn(n === null ? r : Math.max(n, r), 1, xu);
}
function oS(e) {
  if (!wt(e)) return null;
  const t = Sc.includes(e.projection) ? e.projection : Sc[0];
  return { aspect: Mu(e.aspect, 1), projection: t, visible: zo(e.visible, !0), ...Xa(e, Pu) };
}
function ua(e) {
  return typeof e == "string" && e ? e : null;
}
function gh(e, t) {
  const n = new Map(e.map((r, i) => [t(r), i]));
  return e.filter((r, i) => n.get(t(r)) === i);
}
function sS(e) {
  if (!wt(e) || ua(e.id) === null || !ih.includes(e.placement)) return null;
  const t = e.placement === "world", n = {};
  wt(e.clip) && (n.clip = os(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (n[i] = e[i]);
  wt(e.crop) && (n.crop = fh(e.crop)), Object.assign(n, Xa(e, (t ? jr : zr).filter(([i]) => wt(e[i]))));
  const r = t ? null : Tr(e.z_index);
  return r !== null && (n.z_index = r), Object.keys(n).length ? { id: e.id, placement: e.placement, ...n } : null;
}
function yh(e) {
  const t = wt(e) ? $r(e.fps) : null;
  if (t === null || ua(e.layer) === null) return null;
  const n = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => ua(c) !== null))] : [], r = (Array.isArray(e.stickers) ? e.stickers : []).map(sS).filter((c) => c !== null), i = gh(r, (c) => c.id).filter((c) => !n.includes(c.id)), o = wt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), wt(o.clip) && (s.clip = os(o.clip));
  const a = { layer: e.layer, fps: t, deleted: n, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !n.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function aS(e) {
  const t = (Array.isArray(e) ? e : []).map(yh).filter((n) => n !== null);
  return gh(t, (n) => n.layer);
}
function da(e) {
  const t = wt(e.timeline) ? e.timeline : {}, n = wt(e.scene) ? e.scene : {}, { stickers: r, next: i } = nS(e.stickers, e.next_sticker_id);
  return {
    version: H1,
    id: ua(e.id),
    timeline: {
      fps: $r(t.fps) ?? 24,
      length: ah(t.length)
    },
    camera: oS(e.camera),
    scene: { clip: os(n.clip), visible: zo(n.visible, !0), ...Xa(n, qa) },
    stickers: r,
    next_sticker_id: i,
    painting: fi(e.painting),
    painting_layer: wt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: zo(e.painting_visible, !0),
    upstream: aS(e.upstream),
    background: lS(e.background)
  };
}
function lS(e) {
  return { clip: os(wt(e) ? e.clip : void 0) };
}
function cS(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!wt(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function uS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!wt(t)) return null;
  const n = sn(Rt(t.hFOV_deg, 90), 1, 179), r = sn(Rt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function dS(e) {
  const t = wt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(wt) : [];
  return n.sort((r, i) => Rt(r.z_index, 0) - Rt(i.z_index, 0)), da({
    camera: uS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: cS(r, t),
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
function cn(e) {
  if (e == null || typeof e == "string" && !e.trim()) return da({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!wt(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? dS(t) : da(t);
}
const Al = {
  state: { painting_visible: !0 },
  camera: { projection: Sc[0], visible: !0 },
  scene: { visible: !0 }
};
function Cl(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function wc(e) {
  const t = Cl(e, Al.state);
  return t.id === null && delete t.id, t.next_sticker_id === hh(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, Ja(t.background.clip) && delete t.background, JSON.stringify({
    ...t,
    camera: e.camera && Cl(e.camera, Al.camera),
    scene: Cl(e.scene, Al.scene),
    stickers: e.stickers.map((n) => Object.fromEntries(Object.entries(n).filter(([r, i]) => r !== "handoff_overrides" || i.length)))
  });
}
function ko(e, t, n, r, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: n(r + a.frame) - i }))
    };
  return o;
}
function xo(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function Yi(e, t) {
  const n = $r(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (a) => Tr(a * r), { length: o } = e.timeline, s = xo(e.scene.clip, i);
  return da({
    id: e.id,
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...ko(e.camera, Pu, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...ko(e.scene, qa, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = xo(a.clip, i), u = a.placement === "world" ? jr : zr;
      return { ...a, clip: l, ...ko(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream,
    background: { clip: xo(e.background.clip, i).clip }
  });
}
function bh(e, t) {
  const { fps: n } = t.timeline, r = n / e.fps, i = (l) => Tr(l * r), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? jr : zr).filter(([m]) => Object.hasOwn(l, m));
    if (!Object.hasOwn(l, "clip")) {
      const m = o.get(l.id) ?? 0, S = Tr(m * (e.fps / n));
      return { ...l, ...ko(l, c, i, S, m) };
    }
    const { clip: d, anchor: u, newAnchor: f } = xo(l.clip, i);
    return { ...l, clip: d, ...ko(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: xo(e.scene.clip, i).clip } : e.scene;
  return yh({ ...e, fps: n, stickers: s, scene: a });
}
const fS = 1e-3;
function Nu(e, t, n, r) {
  if (!mi(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < r.frames ? (s + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(fS / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function Au(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function vh(e, t, n, r = !1) {
  return e.start - e.in + (n.video && r ? n.duration * t : n.frames);
}
function Sh(e, t, n) {
  const r = n / t;
  return { start: e.start * r, in: e.in * r, duration: e.duration === null ? null : e.duration * r };
}
function _h(e) {
  return Ja(e) ? null : { origin: e.start - e.in, start: e.start, end: e.duration === null ? 1 / 0 : e.start + e.duration };
}
function kc(e, t, n, r = null, i = !1) {
  return mi(e, t) ? !(r != null && r.video || (r == null ? void 0 : r.frames) > 1) || t < vh(e, n, r, i) : !1;
}
const eo = /* @__PURE__ */ new Map(), pS = 8;
function wh(e) {
  let t = eo.get(e);
  if (!t) {
    const n = Kt({ label: "background.color", width: 2, height: 1 }), r = n.getContext("2d");
    r.fillStyle = e, r.fillRect(0, 0, n.width, n.height), t = { media: n, revision: e, coverage: 360, source: `bg_color:${e}` }, eo.size >= pS && eo.delete(eo.keys().next().value), eo.set(e, t);
  }
  return t;
}
function jo(e) {
  const t = e("pano_sticker_input_video_meta")[0];
  if (t && typeof t == "object") return t;
  const n = e("pano_sticker_files").length;
  return n > 1 ? { kind: "IMAGE", frames: n } : null;
}
function mS(e, t) {
  return Math.floor(e * t.fps);
}
function Cu(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Af = 4;
function Iu({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return r.has(s) || r.set(s, e(n[s], t)), r.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== n.length || s.some((f, m) => f !== n[m])) && (n = s, r.clear(), i = null), a === null) return null;
      const d = mS(a, l);
      for (let f = d; f < Math.min(n.length, d + Af + 1); f += 1) o(f);
      for (const f of r.keys())
        (f < d || f > d + Af) && f !== i && r.delete(f);
      const u = r.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && r.delete(i), i = d), i === null ? c : r.get(i);
    }
  };
}
function Il(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function kh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function xh(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= ei);
}
function Mh(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? kh(e.keyframes[r - 1].easing) : [...oh];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function Jt(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Il(i.value, r);
    return;
  }
  const o = xh(i, n);
  o ? o.value = Il(o.value, r) : Mh(i, n, Il(At(e, t, n), r));
}
function qi(e) {
  return e.placement === "world" ? jr.map(([t]) => t) : e.placement === "sky" ? zr.map(([t]) => t) : e.clip && !e.position ? [] : (e.clip ? qa : Pu).map(([t]) => t);
}
function hS(e, t) {
  for (const n of qi(e))
    xh(e[n], t) || Mh(e[n], t, At(e, n, t));
}
function gS(e) {
  const t = qi(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function El(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function yS(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function bS(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = At(e, o, r);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function vS(e, t, n, r, i, o = 1 / 0) {
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
function Ph(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => n.length > 1 ? s.frame >= r && s.frame < i : s.frame === r));
}
function SS(e, t, n) {
  const r = Ph(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function _S(e, t, n, r) {
  for (const i of Ph(e, t, n)) i.easing = kh(r);
}
function Cf(e, t) {
  e.start = Math.max(0, e.start + t);
}
function wS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function kS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Nh(e) {
  return qi(e).map((t) => e[t]);
}
function fa(e) {
  return Nh(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Ja(e.clip);
}
function Ah(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.background, e.scene, ...e.stickers].some(fa);
}
const Ch = 1e5;
function Eu(e, t = {}) {
  const { length: n } = e.timeline, r = n ? Math.max(1, Math.round(n)) : xS(e, t);
  return Number.isFinite(r) ? r : Ch;
}
function xS(e, { bg: t = null, port: n = null, sceneItems: r = 0, upstream: i = null, openClip: o = null, camera: s = !1 } = {}) {
  const a = e.timeline.fps, l = (g) => g.duration === null || g === o, c = [e.scene.clip, ...e.stickers.map((g) => g.clip)].filter((g) => !l(g)).map((g) => g.start + g.duration), d = e.stickers.find((g) => g.source.kind === "port");
  n && d && l(d.clip) && c.push(Au({ ...d.clip, duration: null }, a, n));
  const u = e.scene.clip;
  r > 1 && l(u) && c.push(u.start - u.in + r);
  const f = e.background.clip;
  (t == null ? void 0 : t.frames) === 1 && !t.video && !l(f) && c.push(f.start + f.duration);
  const m = s && e.camera ? Nh(e.camera).flatMap((g) => g.keyframes.map((v) => v.frame)) : [];
  let S = 1;
  return t != null && t.video ? S = i ? Math.max(1, Math.round(t.duration * a)) : t.frames : (t == null ? void 0 : t.frames) > 1 ? S = t.frames : c.length ? S = Math.max(1, Math.round(Math.max(...c))) : m.length && (S = Math.max(1, Math.round(Math.max(...m)) + 1)), i && (S = Math.max(S, i.frames, ...i.ends.map(Math.round))), S;
}
function MS(e) {
  return e > 0 ? $r(Math.min(e, wu)) : null;
}
function PS(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : ah(Math.max(1, Math.min(e, ku)));
}
const Ol = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], NS = 2e3;
function AS(e, t, n = 56) {
  const r = Ol.find((o) => o * t >= n) || Ol[Ol.length - 1], i = [];
  for (let o = 0; o < e && i.length < NS; o += r) i.push(o);
  return i;
}
function CS(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let ws = { text: null, parsed: null };
function vn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function pa(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function IS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: vn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: fi(null),
    painting_layer: null,
    ui_settings: pa(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Ih(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function ES(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function OS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function FS(e) {
  return Array.isArray(e) ? e.map((t) => _u(t)) : [];
}
function TS(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((s) => String((s == null ? void 0 : s.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Eh(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = IS(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let o = null;
    if (ws.text === i ? o = ws.parsed : (o = JSON.parse(i), ws = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const s = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, a = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: ES(o.assets),
      stickers: OS(o.stickers),
      shots: FS(o.shots),
      painting: fi(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: pa(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return s && (a.ui_settings = pa({ ...a.ui_settings, ...s })), a.output_preset = Ih(
      n.outputPreset,
      Number(a.output_preset || r.output_preset)
    ), a.bg_color = String(n.backgroundColor || a.bg_color || r.bg_color), a.coverage = vn(n.coverage), delete a.editor_history, a;
  } catch {
    return ws = { text: i, parsed: null }, r;
  }
}
function DS(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function LS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), e.next_sticker_id > n.next_sticker_id && (n.next_sticker_id = e.next_sticker_id), e.id && !n.id && (n.id = e.id), { state: n, paintingChanged: r };
}
function RS(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Oh(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = $r(t.fps);
  let l;
  try {
    l = cn(e);
  } catch {
    l = cn(null);
  }
  return a && a !== l.timeline.fps && (l = Yi(l, a)), {
    ...l,
    coverage: vn(i),
    bg_color: r,
    output_preset: Ih(n),
    ui_settings: pa(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function VS(e, t) {
  const n = Yi(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.background, n.background], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of qi(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Fh(e, t, n) {
  if (e.source.kind !== "port" || !((n == null ? void 0 : n.width) > 0 && (n == null ? void 0 : n.height) > 0)) return t.vFOV_deg;
  const r = Math.min(179, Math.max(0.1, t.hFOV_deg)) * ct, i = 2 * Math.atan(Math.tan(r * 0.5) * (n.height / n.width)) / ct;
  return Math.min(179, Math.max(0.1, i));
}
function Ou(e, t, n = null) {
  const r = ar(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: Fh(e, r, n), rot_deg: r.roll_deg };
}
const $S = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function If(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function zS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[$S[n]].keyframes.length));
}
function Th(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = If(n, ["yaw_deg", "pitch_deg"]), o = If(n, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && Jt(e, "direction", r, i), n.rot_deg !== void 0 && Jt(e, "roll", r, n.rot_deg), Object.keys(o).length && Jt(e, "size", r, o);
}
const Za = ["position_x", "position_y", "position_z"], Fu = "camera";
function Dh(e, t) {
  const n = Ya(e, t);
  return _u({
    id: Fu,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: N1(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function jS(e) {
  return cn({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: It(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function HS(e) {
  return e - 360 * Math.round(e / 360);
}
function KS(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + HS(n[o] - r[o]));
  Object.keys(i).length && Jt(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && Jt(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * ct * 0.5) / Math.tan(n.vFOV_deg * ct * 0.5)), n.position.some((o, s) => o !== r.position[s]) && Jt(e, "position", t, [...n.position]);
}
function GS(e, t) {
  const n = At(e, "position", t), r = At(e, "rotation", t);
  return {
    ...Object.fromEntries(Za.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: At(e, "fov", t)
  };
}
function WS(e, t, n, r) {
  const i = Za.indexOf(n);
  if (i >= 0) {
    const o = At(e, "position", t);
    o[i] = r, Jt(e, "position", t, o);
  } else n === "hFOV_deg" ? Jt(e, "fov", t, r) : Jt(e, "rotation", t, { [n]: r });
}
function US(e, t, n) {
  Jt(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function BS(e, t) {
  const n = ar(e, t);
  return {
    ...Object.fromEntries(Za.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function YS(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = Za.indexOf(n);
  if (o >= 0) {
    const s = At(e, "position", i);
    s[o] = r, Jt(e, "position", i, s);
  } else n === "scale" ? Jt(e, "scale", i, r) : n === "opacity" ? Jt(e, "opacity", i, r / 100) : Jt(e, "rotation", i, { [n]: r });
}
function qS(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && Jt(e, i, r, n[i]);
}
function XS(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function Ef(e, t, n) {
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
function Mo(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ma(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ho(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Tu(e, t, n, r) {
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
function JS(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = It(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function Lh(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Rh(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Vh(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Of(e, t) {
  return e != null && e.__panoSceneStateV2 ? wc(cn(t)) : JSON.stringify(t);
}
const ZS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function QS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => ZS[e & 63]).join("");
}
function $h(e, t, n, r) {
  const i = Of(e, t);
  return e_(e, i, n, r) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = QS(), Of(e, t));
}
function e_(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = cn(n);
    if (wc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && wc(Yi(i, o)) === t;
  } catch {
    return !1;
  }
}
function ki(e, t) {
  const n = Kt({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function t_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ff(e, t = 8) {
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
function Du(e, t) {
  return Kt({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Cr(e, t, n) {
  if (!e) return ki(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Dt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Bt(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Fl = null, Tl = null, Tf = null, Df = null, Tt = null, to = null;
function n_() {
  if (Tl) return Tl;
  const e = 6, t = 17, n = Kt({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Tl = n, n;
}
function Dl(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Fl = Cr(Fl, n, r);
  const i = Fl;
  Dt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Df !== i.ctx && (Tf = i.ctx.createPattern(n_(), "repeat"), Df = i.ctx), i.ctx.fillStyle = Tf, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function r_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function i_(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function o_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function s_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Pt = /* @__PURE__ */ new Map(), Lu = 128;
function a_(e, t, n, r, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if (Pt.has(l)) {
    const j = Pt.get(l);
    return Pt.delete(l), Pt.set(l, j), j;
  }
  Pt.size >= Lu && Pt.delete(Pt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Du(c, c), f = u.getContext("2d"), m = a * s, S = s + 1, g = `rgba(${n},${r},${i},${o})`, v = `rgba(${n},${r},${i},0)`, y = f.createRadialGradient(d, d, m, d, d, S);
  return y.addColorStop(0, g), y.addColorStop(1, v), f.fillStyle = y, f.fillRect(0, 0, c, c), Pt.set(l, u), u;
}
function l_(e, t, n, r, i, o, s) {
  const { r: a, g: l, b: c, a: d } = r, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), m = Math.max(0, i), S = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), v = `chisel:${u}:${f}:${n.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${m.toFixed(2)}:${S.toFixed(2)}:${g.toFixed(2)}`;
  if (Pt.has(v)) {
    const Y = Pt.get(v);
    return Pt.delete(v), Pt.set(v, Y), Y;
  }
  Pt.size >= Lu && Pt.delete(Pt.keys().next().value);
  const y = Du(u, f), j = y.getContext("2d"), K = j.createImageData(u, f), F = K.data, M = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), Z = 1 + m;
  for (let Y = 0; Y < f; Y++)
    for (let ae = 0; ae < u; ae++) {
      const Se = ae + 0.5 - e, ye = Y + 0.5 - t, q = Math.max(Math.abs(Se) - M, 0), pe = Math.hypot(q, ye) / t;
      if (pe >= 1) continue;
      const de = pe <= R ? 1 : Math.max(0, (1 - pe) / Math.max(1e-4, 1 - R)), te = 1 - pe, ge = 1 + m * (1 - te) * (1 - te), oe = 1 - S * te * te, I = ge * oe / Z;
      let V = 1;
      if (g > 0) {
        const C = Math.floor((ye + t) / 1.5), O = Math.floor((Se + e) / 8), _ = oi(Ti(C * 41 + 500, O * 19 + 300));
        V = 1 - g * 0.42 * _;
      }
      const N = Math.round(255 * Math.min(1, d * de * I * V));
      if (N <= 0) continue;
      const fe = (Y * u + ae) * 4;
      F[fe] = a, F[fe + 1] = l, F[fe + 2] = c, F[fe + 3] = N;
    }
  return j.putImageData(K, 0, 0), Pt.set(v, y), y;
}
function Ti(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function oi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function c_(e, t, n, r, i, o, s) {
  const a = e + 0.5 - n, l = t + 0.5 - r, c = Math.max(0, n - r), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / r;
  if (u >= 1) return 0;
  const f = oi(Ti(e * 17 + 3, t * 13 + 7)), m = u + o * 0.22 * (f - 0.5);
  if (m >= 1) return 0;
  const S = m <= i ? 1 : Math.max(0, (1 - m) / Math.max(1e-4, 1 - i)), g = u_(e, t, a, l, n, r), v = o * 0.55;
  if (g < v) return 0;
  const j = 0.45 + 0.55 * ((g - v) / Math.max(1e-4, 1 - v));
  return Math.round(255 * Math.min(1, s * S * j));
}
function u_(e, t, n, r, i, o) {
  const s = Math.floor((n + i) / 3), a = Math.floor((r + o) / 2), l = oi(Ti(s * 13 + 700, a * 17 + 400)), c = Math.floor((n + i) / 1.5), d = Math.floor((r + o) / 1.5), u = oi(Ti(c * 23 + 800, d * 29 + 500)), f = oi(Ti(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function d_(e, t, n, r, i) {
  const { r: o, g: s, b: a, a: l } = r, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${n.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (Pt.has(f)) {
    const j = Pt.get(f);
    return Pt.delete(f), Pt.set(f, j), j;
  }
  Pt.size >= Lu && Pt.delete(Pt.keys().next().value);
  const m = Du(c, d), S = m.getContext("2d"), g = S.createImageData(c, d), v = g.data, y = Math.max(0, Math.min(1, n));
  for (let j = 0; j < d; j++)
    for (let K = 0; K < c; K++) {
      const F = c_(K, j, e, t, y, u, l);
      if (F <= 0) continue;
      const M = (j * c + K) * 4;
      v[M] = o, v[M + 1] = s, v[M + 2] = a, v[M + 3] = F;
    }
  return S.putImageData(g, 0, 0), Pt.set(f, m), m;
}
function zh(e, t, n) {
  var g, v;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = o_(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = f_(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = s_(t, i), d = String(((v = t == null ? void 0 : t.targetSpace) == null ? void 0 : v.viewMode) || ""), u = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, m = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const y = i * a, j = i, K = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), F = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), M = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = l_(y, j, o, s, K, F, M);
  } else if (r === "crayon") {
    const y = i * a, j = i, K = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = d_(y, j, o, s, K);
  } else
    S = a_(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: S, radiusPx: i, spacingPx: c, desc: n, aspect: a, angle: l, stampKind: r, scatter: m, latitudeCorrection: u };
}
function f_(e) {
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
function p_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function Lf(e, t, n, r, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  a(t, n);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, n), t + l > s && a(t - s, n);
}
function Ru(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = Ti(t, n);
    for (let m = 0; m < d; m++) {
      const S = oi(f + m * 2) * Math.PI * 2, g = Math.sqrt(oi(f + m * 2 + 1)) * u, v = t + Math.cos(S) * g, y = n + Math.sin(S) * g, j = Math.max(0.5, e.radiusPx * i * 0.48), K = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, F = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(K)) : 1, M = j * e.aspect * F;
      Lf(e, v, y, j, M);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Lf(e, t, n, o, l);
}
function Rf(e, t, n) {
  const r = i_(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, s = zh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < r.length; f++) {
    let m = Number(r[f].u || 0) * i;
    const S = Number(r[f].v || 0) * o;
    f > 0 && Math.abs(m - a[f - 1].x) > i * 0.5 && (m += m < a[f - 1].x ? i : -i), a.push({ x: m, y: S });
  }
  if (Ru(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const m = a[f], S = { x: (c.x + m.x) * 0.5, y: (c.y + m.y) * 0.5 };
    f === 1 ? u = Ko(s, d.x, d.y, S.x, S.y, u) : u = ha(s, l, d, S, m, u), l = c, c = m, d = S;
  }
  a.length === 2 ? Ko(s, d.x, d.y, c.x, c.y, u) : ha(s, l, d, c, c, u), e.restore();
}
function Vs(e, t, n) {
  var u;
  const r = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, s = p_(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < r.length; f++) {
    const m = r_(r[f]);
    let S = Number(m.x || 0) * i;
    f > 0 && Math.abs(S - a[f - 1].x) > i * 0.5 && (S += S < a[f - 1].x ? i : -i), a.push({ x: S, y: Number(m.y || 0) * o }), S < l && (l = S), S > c && (c = S);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let m = 1; m < a.length; m++) e.lineTo(a[m].x + f, a[m].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function ks(e, t, n) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    Vs(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Rf(e, t, n) : (to = Cr(to, n.width, n.height), Dt(to), Rf(to.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(to.canvas, 0, 0), e.restore());
}
function Ur(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ko(e, t, n, r, i, o) {
  const s = r - t, a = i - n, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Ru(e, t + s * d, n + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function ha(e, t, n, r, i, o) {
  const a = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, d = 0, u = a, f = u + l, m = f + c, S = f - u, g = 16;
  let v = o, y = n.x, j = n.y;
  for (let K = 1; K <= g; K++) {
    const F = u + S * K / g, M = ((u - F) * t.x + (F - d) * n.x) / (u - d), R = ((u - F) * t.y + (F - d) * n.y) / (u - d), Z = ((f - F) * n.x + (F - u) * r.x) / (f - u), Y = ((f - F) * n.y + (F - u) * r.y) / (f - u), ae = ((m - F) * r.x + (F - f) * i.x) / (m - f), Se = ((m - F) * r.y + (F - f) * i.y) / (m - f), ye = ((f - F) * M + (F - d) * Z) / (f - d), q = ((f - F) * R + (F - d) * Y) / (f - d), _e = ((m - F) * Z + (F - u) * ae) / (m - u), pe = ((m - F) * Y + (F - u) * Se) / (m - u), de = ((f - F) * ye + (F - u) * _e) / (f - u), te = ((f - F) * q + (F - u) * pe) / (f - u);
    v = Ko(e, y, j, de, te, v), y = de, j = te;
  }
  return v;
}
function m_(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = n * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const m = zh(i, r, o), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), g = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), v = String((r == null ? void 0 : r.toolKind) || "") === "eraser", y = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Ru(m, c, a, 1), e.activeStroke = {
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
      strokeOpacity: S,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: v,
      layerKind: y,
      pointCount: 1
    }, Bt(e);
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
  l.pointCount === 1 ? l.distSinceStamp = Ko(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = ha(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, Bt(e);
}
function Qa(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), o = ki(t, n), s = {
    descriptor: r,
    committedMask: ki(t, n),
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
    committedPaint: ki(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = ki(t, n);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let m = null;
  function S(q) {
    return {
      actionGroupId: q,
      descriptor: r,
      committedPaint: ki(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(q) {
    let _e = i.get(q);
    return _e || (_e = S(q), i.set(q, _e)), _e;
  }
  function v(q) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function y(q) {
    var oe;
    const _e = !u || u.length !== q.length || q.some((I, V) => I !== u[V]), pe = d === "paint" && ((oe = c ? i.get(c) : a) == null ? void 0 : oe.activeStroke) || null;
    let de = s.displayDirty || a.displayDirty || _e;
    for (const I of q) {
      const V = i.get(I);
      if (V != null && V.displayDirty) {
        de = !0;
        break;
      }
    }
    if (pe && (de = !0), !de) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const I of q) {
      const V = i.get(I);
      V && (V.displayDirty = !1);
    }
    u = [...q];
    const te = l.ctx;
    Dt(l);
    const ge = !!(pe != null && pe.isEraser);
    for (const I of q) {
      const V = i.get(I);
      if (!V) continue;
      const fe = c === V.actionGroupId && d === "paint" ? V.activeStroke : null;
      if (ge)
        Tt = Cr(Tt, t, n), Dt(Tt), Tt.ctx.drawImage(V.committedPaint.canvas, 0, 0), Ur(Tt.ctx, o.canvas), te.drawImage(Tt.canvas, 0, 0);
      else if (te.drawImage(V.committedPaint.canvas, 0, 0), fe) {
        const C = V.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, fe.strokeOpacity ?? 1));
        te.save(), te.globalAlpha = C, te.drawImage(o.canvas, 0, 0), te.restore();
      }
    }
  }
  function j(q) {
    var pe, de, te, ge, oe;
    for (const I of i.values())
      Dt(I.committedPaint), Dt(I.currentStroke), I.activeStroke = null, Bt(I);
    Dt(s.committedMask), Dt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), Bt(s), Bt(a), u = null;
    const _e = [
      ...Array.isArray((de = (pe = q == null ? void 0 : q.painting) == null ? void 0 : pe.paint) == null ? void 0 : de.strokes) ? q.painting.paint.strokes : [],
      ...Array.isArray((ge = (te = q == null ? void 0 : q.painting) == null ? void 0 : te.mask) == null ? void 0 : ge.strokes) ? q.painting.mask.strokes : []
    ];
    for (const I of _e) {
      if (((oe = I == null ? void 0 : I.targetSpace) == null ? void 0 : oe.kind) !== "ERP_GLOBAL") continue;
      const V = String((I == null ? void 0 : I.layerKind) || "paint"), fe = String((I == null ? void 0 : I.toolKind) || "pen") === "eraser";
      if (V === "mask") {
        const C = s.descriptor;
        fe ? (Tt = Cr(Tt, C.width, C.height), Dt(Tt), ks(Tt.ctx, I, C), Ur(s.committedMask.ctx, Tt.canvas)) : (ks(s.committedMask.ctx, I, C), s.painted = !0);
        continue;
      }
      if (fe) {
        Tt = Cr(Tt, r.width, r.height), Dt(Tt), ks(Tt.ctx, I, r);
        for (const C of i.values())
          Ur(C.committedPaint.ctx, Tt.canvas), Bt(C);
      } else {
        const C = String((I == null ? void 0 : I.actionGroupId) || "__default__"), O = g(C), _ = O.descriptor;
        ks(O.committedPaint.ctx, I, _), Bt(O);
      }
    }
    y([...i.keys()]);
  }
  function K(q, _e) {
    d = String((q == null ? void 0 : q.layerKind) || "");
    const pe = String((q == null ? void 0 : q.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Dt(s.currentStroke), s.activeStroke = null, Bt(s);
    else {
      const de = pe ? a : g(String((q == null ? void 0 : q.actionGroupId) || "__default__"));
      c = pe ? "" : String((q == null ? void 0 : q.actionGroupId) || "__default__"), Dt(de.currentStroke), de.activeStroke = null, Bt(de);
    }
  }
  function F(q, _e) {
    var V;
    const pe = String((q == null ? void 0 : q.layerKind) || "paint"), de = String((q == null ? void 0 : q.toolKind) || "") === "eraser", te = pe === "mask" ? s : de ? a : g(String((q == null ? void 0 : q.actionGroupId) || c || "__default__")), ge = te.activeStroke, oe = te.descriptor;
    if (ge && ge.pointCount > 1) {
      const N = te.currentStroke.ctx;
      N.globalCompositeOperation = "source-over";
      const fe = {
        ctx: N,
        stampTex: ge.stampTex,
        radiusPx: ge.radiusPx,
        spacingPx: ge.spacingPx,
        desc: oe,
        aspect: ge.aspect,
        angle: ge.angle,
        stampKind: ge.stampKind,
        scatter: ge.scatter,
        latitudeCorrection: ge.latitudeCorrection
      };
      ge.pointCount === 2 ? Ko(fe, ge.lastMidX, ge.lastMidY, ge.prev.x, ge.prev.y, ge.distSinceStamp) : ha(fe, ge.pprev, { x: ge.lastMidX, y: ge.lastMidY }, ge.prev, ge.prev, ge.distSinceStamp);
    }
    te.lassoPreviewActive && (Dt(te.currentStroke), Vs(te.currentStroke.ctx, q, oe), te.lassoPreviewActive = !1);
    const I = pe === "mask" ? s.committedMask : te.committedPaint;
    if (de && pe === "paint")
      for (const N of i.values())
        Ur(N.committedPaint.ctx, te.currentStroke.canvas), Bt(N);
    else if (de)
      Ur(I.ctx, te.currentStroke.canvas);
    else {
      pe === "mask" && (s.painted = !0);
      const N = Math.max(0, Math.min(1, (ge == null ? void 0 : ge.strokeOpacity) ?? 1));
      I.ctx.save(), I.ctx.globalAlpha = N, I.ctx.drawImage(te.currentStroke.canvas, 0, 0), I.ctx.restore();
    }
    t_() && (String((q == null ? void 0 : q.toolKind) || ""), String((oe == null ? void 0 : oe.kind) || ""), Number((oe == null ? void 0 : oe.width) || 0), Number((oe == null ? void 0 : oe.height) || 0), String(((V = q == null ? void 0 : q.targetSpace) == null ? void 0 : V.viewMode) || ""), Number((q == null ? void 0 : q.aspect) ?? 1), Ff(te.currentStroke.canvas), Ff(I.canvas), void 0), Dt(te.currentStroke), te.activeStroke = null, Bt(te), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function M(q) {
    if (d === "mask")
      Dt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, Bt(s);
    else if (d === "paint" && !c)
      Dt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, Bt(a);
    else if (c) {
      const _e = i.get(c);
      _e && (Dt(_e.currentStroke), _e.activeStroke = null, _e.lassoPreviewActive = !1, Bt(_e));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function R(q, _e) {
    var de;
    if (d = String((q == null ? void 0 : q.layerKind) || ""), String(((de = q == null ? void 0 : q.geometry) == null ? void 0 : de.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Dt(s.currentStroke), Vs(s.currentStroke.ctx, q, s.descriptor), s.lassoPreviewActive = !0, Bt(s);
      else {
        const te = String((q == null ? void 0 : q.toolKind) || "") === "eraser", ge = te ? a : g(String((q == null ? void 0 : q.actionGroupId) || c || "__default__"));
        c = te ? "" : String((q == null ? void 0 : q.actionGroupId) || c || "__default__"), Dt(ge.currentStroke), Vs(ge.currentStroke.ctx, q, ge.descriptor), ge.lassoPreviewActive = !0, Bt(ge);
      }
      y([...i.keys()]);
    }
  }
  function Z(q) {
    return y(q ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: r
    };
  }
  function Y(q) {
    return i.get(String(q)) ?? null;
  }
  function ae(q) {
    var N;
    const _e = i.get(String(q));
    if (!_e) return null;
    const pe = d === "paint" && c === _e.actionGroupId, de = d === "paint" && ((N = c ? i.get(c) : a) == null ? void 0 : N.activeStroke) || null, te = !!(de != null && de.isEraser), ge = pe ? _e.activeStroke : null;
    if (!te && !ge) return _e.committedPaint.canvas;
    const oe = `${_e.revision}:${a.revision}:${te}`, I = f.get(_e.actionGroupId);
    if ((I == null ? void 0 : I.key) === oe) return I.surface.canvas;
    const V = Cr((I == null ? void 0 : I.surface) ?? null, t, n);
    return Dt(V), V.ctx.drawImage(_e.committedPaint.canvas, 0, 0), te ? Ur(V.ctx, o.canvas) : (V.ctx.save(), V.ctx.globalAlpha = _e.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ge.strokeOpacity ?? 1)), V.ctx.drawImage(o.canvas, 0, 0), V.ctx.restore()), f.set(_e.actionGroupId, { key: oe, surface: V }), V.canvas;
  }
  function Se() {
    const q = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!q || q.isEraser) ? null : `${s.revision}:${!!q}`;
  }
  function ye() {
    const q = Se();
    if (q === null)
      return m = null, null;
    if ((m == null ? void 0 : m.key) === q) return m.surface.canvas;
    const _e = Cr((m == null ? void 0 : m.surface) ?? null, t, n);
    Dt(_e);
    const pe = d === "mask" ? s.activeStroke : null;
    return pe != null && pe.isEraser ? (Tt = Cr(Tt, t, n), Dt(Tt), Tt.ctx.drawImage(s.committedMask.canvas, 0, 0), Ur(Tt.ctx, o.canvas), Dl(_e.ctx, Tt.canvas)) : (Dl(_e.ctx, s.committedMask.canvas), pe && Dl(_e.ctx, o.canvas)), m = { key: q, surface: _e }, _e.canvas;
  }
  return {
    rebuildCommitted: j,
    beginStroke: K,
    appendStrokePoint: m_,
    updateActiveStroke: R,
    commitActiveStroke: F,
    cancelActiveStroke: M,
    getErpTarget: Z,
    ensureTarget: v,
    getGroupTarget: Y,
    getGroupDisplayCanvas: ae,
    getMaskDisplayCanvas: ye,
    getMaskDisplayRevision: Se
  };
}
function Vu(e, { group: t, raster: n, mask: r = () => null }) {
  if (e.painting_visible === !1) return [];
  const { groups: i, paint: o, raster_objects: s } = e.painting, a = new Set(i.map(Ll)), l = [
    ...i.map((m) => ({ id: `paint_group:${Ll(m)}`, zIndex: Rl(m), shown: () => t(Ll(m)) })),
    ...s.filter((m) => m.layerKind === "paint").map((m) => ({ id: `raster:${m.id}`, zIndex: Rl(m), shown: () => n(m) }))
  ].sort((m, S) => m.zIndex - S.zIndex), c = [], d = (m, S, g) => {
    g && c.push({ id: m, media: g.media, revision: g.revision, opacity: 1, zIndex: S });
  };
  for (const m of l) d(m.id, m.zIndex, m.shown());
  const u = Math.max(-1, ...c.map((m) => m.zIndex), ...e.stickers.map(Rl)) + 1, f = new Set(o.strokes.map((m) => m.actionGroupId).filter((m) => !a.has(m)));
  for (const m of f) d(`paint_group:${m}`, u, t(m));
  return d("mask_display", u, r()), c;
}
function jh(e) {
  const t = (e == null ? void 0 : e.getMaskDisplayCanvas()) ?? null;
  return t && { media: t, revision: `mask_display:${e.getMaskDisplayRevision()}` };
}
function Ll(e) {
  return String(e.actionGroupId || e.id || "");
}
function Rl(e) {
  return Math.trunc(Number(e.z_index) || 0);
}
function An(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function h_(e, t = 1024) {
  const n = Math.max(1, Math.round(An(e, 2048))), r = Math.min(n, Math.max(1, Math.round(An(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function g_(e, t, n) {
  const r = An(t), i = An(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || i < 1) return null;
  const s = An(o.u0), a = An(o.v0), l = An(o.u1), c = An(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + An(d.du)) * r,
    centerY: ((a + c) * 0.5 + An(d.dv)) * i,
    width: (l - s) * r,
    height: (c - a) * i,
    rotationRad: An(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, An(d.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function y_(e, t, n) {
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
function b_() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = g_(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = y_(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, m = t.get(f);
    if ((m == null ? void 0 : m.revision) === u) return { source: m.source, revision: u };
    const S = r(c, l), g = Number(S.naturalWidth || S.width || 0), v = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || g < 1 || v < 1) return null;
    const y = Kt({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const j = y.getContext("2d");
    return j ? (d.wrapOffsets.forEach((K) => {
      j.save(), j.translate(d.centerX + K, d.centerY), j.rotate(d.rotationRad), j.scale(d.scale, d.scale), j.drawImage(
        S,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), j.restore();
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
function v_(e, t, n = Qa) {
  var l;
  const r = { ...t, painting: S_(e, t.painting) }, i = h_(t.output_preset), o = [];
  let s = null;
  const a = Vu(r, {
    group: (c) => {
      s ?? (s = __(e, r, n));
      const d = s == null ? void 0 : s.getGroupDisplayCanvas(c);
      return d && { media: d, revision: `${e.paintRevisionKey}:${c}` };
    },
    raster: (c) => {
      e.rasterCache ?? (e.rasterCache = b_()), e.rasterReady ?? (e.rasterReady = () => {
        var u, f;
        return (f = (u = e.dom) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
      }), o.push(c.id);
      const d = e.rasterCache.get(c, i.width, i.height, e.rasterReady);
      return d && { media: d.source, revision: d.revision };
    }
  });
  return (l = e.rasterCache) == null || l.retain(o), a;
}
function S_(e, t) {
  return (!e.paintState || e.paintState.painting !== t) && (e.paintState = { painting: t, normalized: fi(t) }), e.paintState.normalized;
}
function __(e, t, n) {
  const { painting: r } = t;
  if (!r.paint.strokes.length && !r.mask.strokes.length) return null;
  const i = Math.max(1, Number(t.output_preset || 2048)), o = { kind: "ERP_GLOBAL", width: i, height: Math.max(1, Math.round(i * 0.5)) }, s = `${o.width}x${o.height}`;
  return (!e.paintEngine || e.paintDescriptorKey !== s) && (e.paintEngine = n(o), e.paintDescriptorKey = s, e.paintRevision = null), e.paintRevision !== r && (e.paintRevision = r, e.paintRevisionKey = String((Number(e.paintRevisionKey) || 0) + 1), e.paintEngine.rebuildCommitted(t)), e.paintEngine;
}
const Vl = 0.15, w_ = 0.01, k_ = 1e-3, x_ = 0.05, M_ = 4, Vf = 250, P_ = 16, Wn = 1, Hh = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Pn(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function rr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function el(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function hi(e, t, n = 0) {
  const r = ln(e, t, n), i = rr(r, 2);
  return { right: rr(r, 0), up: rr(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function N_(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function xc(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function A_(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : xc(e, "3dof", n);
}
function C_(e) {
  return hi(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function I_(e) {
  return Pn(e.position, hi(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Hr(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Po(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function $u(e, t) {
  return Po(Hr(t, e.position), hi(e.yaw_deg, e.pitch_deg).forward);
}
function zu(e) {
  return Math.max(e, 1e-6) * x_;
}
function Mc(e, t, n = null, r = Wn) {
  if (t) return t;
  const i = zu(r);
  if (n && $u(e, n) > 0) {
    const o = Hr(n, e.position), s = Math.hypot(...o);
    return s >= i ? n : Pn(e.position, o, i / s);
  }
  return Pn(e.position, hi(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Kh(e, t = Wn) {
  return Math.max(e.distance, zu(t));
}
function Gh(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > M_ ? !1 : t.time - e.time < Vf || e.cost > P_ && t.time - e.wheelTime < Vf;
}
function ju(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * ct);
  return { tanX: r, tanY: r * n / t };
}
function Wh(e, t, n, r, i = I_(e)) {
  const o = e.roll_deg ?? 0, [s, a] = E_(t, n, o), l = It(e.yaw_deg + s / r * 360), c = Oe(e.pitch_deg - a / r * 360, -89.9, 89.9), d = ln(e.yaw_deg, e.pitch_deg, o), u = ln(l, c, o), f = Hr(e.position, i), m = [0, 1, 2].map((g) => Po(rr(d, g), f)), S = { ...e, yaw_deg: l, pitch_deg: c, position: Pn(i, el(u, m)) };
  return { ...S, distance: $u(S, i) };
}
function E_(e, t, n) {
  const r = Math.cos(n * ct), i = Math.sin(n * ct);
  return [e * r + t * i, t * r - e * i];
}
function Uh(e, t, n, r, i, o = e.distance) {
  const { right: s, up: a } = C_(e), l = 2 * o * ju(e, r, i).tanY / i;
  return { ...e, position: Pn(Pn(e.position, s, -t * l), a, n * l), distance: o };
}
function Bh(e, t, n, r = Wn) {
  const i = Hr(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const s = Math.max(r, 1e-6), a = s * w_, l = n > 0 ? Math.min(Math.max(o * Vl, a), o - s * k_) : -Math.max(o * Vl / (1 - Vl), a);
  if (n > 0 && l <= 0) return e;
  const c = { ...e, position: Pn(e.position, i, l / o) };
  return { ...c, distance: Math.max($u(c, t), zu(r)) };
}
function O_(e, t, n, r) {
  const { tanX: i, tanY: o } = ju(e, n, r), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = hi(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Pn(t.center, l, -a), distance: a };
}
function Hu(e, t, n, r = null) {
  return Yh({
    quaternion: Vr(ln(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(ju(e, t, n).tanY) * Ht,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Yh(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: Wn }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Go(e, t, n, r) {
  const { right: i, up: o, forward: s } = qh(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * ct), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: n * 0.5 * (1 + u / l / d), y: r * 0.5 * (1 - f / l / c), z: l };
}
function qh(e) {
  const t = Ro(e.quaternion), n = rr(t, 2);
  return { right: rr(t, 0), up: rr(t, 1), forward: n.map((r) => -r) };
}
function ga(e, t, n) {
  var i;
  const r = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, unlit: r !== "mesh" || t[0].unlit !== !1, urls: e.map((o) => o ? n(o) : null) };
}
function F_({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Ku(e, t) {
  if (!e || !t.active) return null;
  const n = T_(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: ya(t),
    itemQuaternion: e.kind === "splat" ? Hh : { x: 0, y: 0, z: 0, w: 1 },
    unlit: e.unlit !== !1
  };
}
function Xh(e, t, n) {
  const r = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], s = Ku(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function Jh(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function Zh(e, t) {
  return `file3d:${t}:${e}`;
}
function Qh(e, t, n) {
  const r = [];
  return e.stickers.forEach((i, o) => {
    if (i.placement !== "world" || !ii(i.source)) return;
    const s = n(i);
    if (!s) return;
    const a = Zh(i.id, s.generation), l = t.stickers[o], c = l.active ? {
      kind: s.kind,
      unlit: s.unlit !== !1,
      url: a,
      urls: [a],
      prefetch: [],
      src: s.url,
      transform: ya(l),
      itemQuaternion: s.kind === "splat" ? Hh : { x: 0, y: 0, z: 0, w: 1 },
      id: i.id,
      opacity: l.opacity,
      value: l
    } : null;
    r.push({ id: i.id, key: a, request: c });
  }), r;
}
function T_(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function ya(e) {
  return {
    position: [...e.position],
    quaternion: Vr(ln(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Pc(e, t) {
  return Pn(e.position, el(ln(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function lo(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Nc({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function Ac(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), r = t.map((o, s) => (o + n[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function D_(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...Nc(t).map((o) => Pc(e.scene, o)));
  for (const o of n) i.push(...Gu(o));
  for (const { box: o, value: s } of r) i.push(...Nc(o).map((a) => Pc(s, a)));
  return i;
}
function L_(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: Vr(ln(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: ln(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Gu(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => Pn(e.position, el(e.rotation, [r, i, 0])));
}
function R_(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? Ac(Gu(i)) : o != null && o.box ? Ac(Nc(lo(o.kind, o.box)).map((s) => Pc(r, s))) : { center: [...r.position], radius: r.scale };
}
const V_ = 2, $_ = 0.5, z_ = 30;
function eg(e, t) {
  const n = Hr(t, e), r = Math.atan2(n[0], -n[2]) * Ht, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * Ht;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function tg(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * $_ : V_, o = t ? [...t] : Pn(e.position, hi(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...Hr(o, e.position)), a = s > 0 ? eg(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(z_ * 0.5 * ct);
  return { position: o, rotation: a, scale: l };
}
function j_(e, t, n = null) {
  const { position: r, rotation: i } = tg(e, t, n);
  return { position: r, rotation: { yaw_deg: i.yaw_deg, pitch_deg: 0, roll_deg: 0 }, scale: 1 };
}
function $f(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function H_(e) {
  return [0, 1, 2].map((t) => rr(e, t));
}
function zf(e, t, n, r) {
  if (e === "translate") return { position: Pn(t.position, Hr(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * B_(n.scale, r.scale) / n.scale };
  const i = $f(Ro(r.quaternion), H_(Ro(n.quaternion))), o = $f(i, ln(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = Zm(o);
  return Math.abs(a) <= K_ ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: G_(o, t.yaw_deg) } };
}
const K_ = 89.9;
function G_(e, t) {
  const n = rr(e, 0), r = rr(e, 1), i = Math.cos(t * ct), o = Math.sin(t * ct);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * Ht + 0;
}
const W_ = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function U_(e, t, n, r, i) {
  if (!Go(e, t, r, i)) return null;
  const { right: o, up: s, forward: a } = qh(e), l = Hr(t, e.position), c = Po(l, o), d = Po(l, s), u = Po(l, a), f = Math.tan(e.fovY_deg * 0.5 * ct), m = f * e.aspect, S = Math.hypot(c, d, u) * W_[n] * Math.min(1.9 * f, 7) / 4;
  if (!(u > S)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const g = (F) => {
    const M = S * Math.sqrt(F * F + u * u - S * S);
    return [(F * u - M) / (u * u - S * S), (F * u + M) / (u * u - S * S)];
  }, [v, y] = g(c), [j, K] = g(d);
  return {
    minX: r * 0.5 * (1 + v / m),
    maxX: r * 0.5 * (1 + y / m),
    minY: i * 0.5 * (1 - K / f),
    maxY: i * 0.5 * (1 - j / f)
  };
}
function B_(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function Y_(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function ng(e, t) {
  const n = ln(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * ct) * t, i = r / e.aspect, o = (c, d, u) => Pn(e.position, el(n, [c, d, u])), s = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function q_(e, t, n, r, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Go(e, s, r, i), c = Go(e, a, r, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Oe(((n.x - l.x) * d + (n.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - n.x, l.y + u * f - n.y) <= o;
  });
}
function X_(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function J_(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [At(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return At(r, "position", l);
  });
}
function Z_(e, t, n, r, i) {
  const o = Math.max(0, e) * n, s = Math.max(0, t) * n, a = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const rg = 0.28;
function ig(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * ct);
  return {
    quaternion: Vr(ln(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * Ht,
    aspect: r
  };
}
function No(e) {
  const t = Rr(e);
  return {
    quaternion: Vr(ln(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function og(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Su(n, r), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * Ht,
      vFOV_deg: 2 * Math.atan(o / r) * Ht
    }
  };
}
function sg(e, t, n) {
  const [[r, i, o], [s, a, l], [c, d, u]] = Ro(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * ct), m = f * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, g = 1e-4) {
      const v = C1(S), y = r * v.x + s * v.y + c * v.z, j = i * v.x + a * v.y + d * v.z, K = -(o * v.x + l * v.y + u * v.z), F = Math.max(K, g);
      return {
        x: t * 0.5 * (1 + y / F / m),
        y: n * 0.5 * (1 - j / F / f),
        z: K
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, g) {
      const v = (S / t * 2 - 1) * m, y = (1 - g / n * 2) * f;
      return yu(Ls({
        x: r * v + i * y - o,
        y: s * v + a * y - l,
        z: c * v + d * y - u
      }));
    }
  };
}
function ag(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = is(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky" || ii(a.source)) return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = n(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * ct), m = Math.tan(Fh(a, c, cg(u.media)) * 0.5 * ct), { crop: S } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? rg : c.opacity,
      zIndex: r(a),
      quaternion: Vr(ln(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * f,
        x1: (2 * S.x1 - 1) * f,
        y0: (1 - 2 * S.y1) * m,
        y1: (1 - 2 * S.y0) * m
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function lg(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return ag(e, t, {
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
function cg(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function ug(e, t, n, { media: r, evaluated: i = is(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active || ii(a.source)) return;
    const d = o.get(a.id), u = d ? r(d) : null;
    if (!u) return;
    const { width: f, height: m } = cg(u.media), S = L_(c, a.crop, f, m);
    S && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: S.position,
      quaternion: S.quaternion,
      rotation: S.rotation,
      width: S.width,
      height: S.height,
      crop: a.crop
    });
  }), s;
}
function Q_({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BQyb66i9.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Gm(a.createThreeView({ onUpdate: r, onSplats: i, createCanvas: () => e }), "editor");
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
    pick(g, v, y, j, K) {
      return l && !f.lost ? l.pick(g, v, y, j, K) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, v, y, j, K) {
      return l && !f.lost ? l.pickSurface(g, v, y, j, K) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, v, y, j, K) {
      return l && !f.lost ? l.pickSticker(g, v, y, j, K) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, v, y, j, K, F) {
      return l && !f.lost ? l.gizmoPointer(g, v, y, j, K, F) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", m), e.removeEventListener("webglcontextrestored", S), l == null || l.dispose(), l = null;
    }
  };
  function m(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function S() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", S), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, n();
  }), f;
}
const dg = "3D view unavailable. Check the browser console.";
function ba(e, t, n) {
  return ig({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function ew(e) {
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
const fg = ew(
  () => import("./.lazy/pano_three_view-BQyb66i9.js").then((e) => e.$).then((e) => Gm(e.createThreeView({ createCanvas: () => Kt({ label: "three.node" }) }), "node"))
), Tn = ["erp_image", "bg_erp", "bg_media"], Wu = ["sticker_image", "sticker"], pg = ["scene"], Uu = ["sticker", "sticker_state"], tw = {
  background: Tn,
  "external-sticker": Wu,
  scene: pg,
  "sticker-handoff": Uu
};
function mg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Di(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = mg(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function Ao(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function jf(e, t) {
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
function hg(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((a) => String(a == null ? void 0 : a.id) === n[o]);
    if (!s || o === n.length - 1) return { graph: r, entry: s };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function nw(e, t) {
  const { graph: n, entry: r } = hg(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const a = mg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const gg = [...Tn, ...Wu, ...pg, ...Uu], rw = 256, xi = /* @__PURE__ */ new Map(), $l = /* @__PURE__ */ new WeakMap();
let yg = () => null;
function bg(e) {
  return $l.has(e) || $l.set(e, JSON.stringify(e)), $l.get(e);
}
function iw(e) {
  yg = e;
}
function va(e, t) {
  const n = bg(e);
  xi.delete(n), xi.set(n, t), xi.size > rw && xi.delete(xi.keys().next().value);
}
function bt(e, t) {
  var o;
  const n = e ? yg(e) : null;
  if (!n) return !0;
  const r = Di(e);
  let i = xi.get(bg(n));
  if (i)
    va(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => gg.includes(s == null ? void 0 : s.name)))) return !0;
    va(n, r), i = r;
  }
  return tw[t].every((s) => i[s] === r[s]);
}
const Sa = /* @__PURE__ */ new WeakSet();
async function Cc(e, t) {
  if (Sa.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Sa.add(e), n.ok && r !== void 0 ? r : null;
}
function vg(e, t) {
  var o, s, a, l, c;
  const n = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: r } = hg(n, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = r == null ? void 0 : r.inputs) != null && c.some((d) => gg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: nw(n, t) };
}
const $s = /* @__PURE__ */ new Map();
function ow(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && $s.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await Cc(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = vg(i, o);
        s && va(s.output, s.inputs);
      }
    });
}
const sw = 5;
function aw(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${sw}`, r = Cc(e, `/jobs?${n}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, Cc(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: m } of await r) {
        if (!a()) return null;
        const S = await o(m);
        if ((c = S == null ? void 0 : S.outputs) != null && c[l])
          return ((f = (u = (d = S.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : vg(S, l);
      }
      return null;
    }
  };
}
function lw(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let bi = null;
async function cw(e, t, n) {
  var a;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || Sa.has(n) || (a = $s.get(i)) != null && a.has(r) || lw(t)) return null;
  (bi == null ? void 0 : bi.workflowId) !== i && (bi = { workflowId: i, history: aw(n, i) }, queueMicrotask(() => {
    bi = null;
  }));
  const s = await bi.history.lastNodeOutput(e, o);
  return o() ? s ? (va(s.output, s.inputs), t.nodeOutputs[r] = s.output, s.output) : (Sa.has(n) || $s.set(i, ($s.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Hf(e, t, n, r = Tn) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((s == null ? void 0 : s.name) || ""));
}
const Kf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function zs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Kf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Kf.test(String((e == null ? void 0 : e.filename) || ""));
}
const zl = /* @__PURE__ */ new WeakMap();
function uw(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Ic(e) {
  return uw(e) ? (zl.has(e) || zl.set(e, Math.random().toString(36).slice(2, 10)), zl.get(e)) : "run";
}
function Sg(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function dw(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = n(o, a);
      (l == null ? void 0 : l.id) == null || r.has(String(l.id)) || (r.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), r;
}
function Bu(e, t = [], n = null) {
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
function fw({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = ns(e, "looping-preview");
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
  let m = !1;
  const S = () => {
    m = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", c, { once: !0 }), r.addEventListener("loadeddata", c, { once: !0 }), a || r.addEventListener("timeupdate", d), r.addEventListener("play", u), r.addEventListener("pause", f), r.addEventListener("error", S), r.src = t, r.load();
  const g = () => {
    o || m || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, v = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var j, K;
      o || (o = !0, s && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(s), s = 0), r.removeEventListener("loadedmetadata", c), r.removeEventListener("loadeddata", c), r.removeEventListener("timeupdate", d), r.removeEventListener("play", u), r.removeEventListener("pause", f), r.removeEventListener("error", S), r.pause(), (j = r.removeAttribute) == null || j.call(r, "src"), (K = r.load) == null || K.call(r));
    },
    failed: () => m,
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
const Wo = /* @__PURE__ */ new WeakMap(), _g = {
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
function ss(e, t) {
  if (!e || typeof e != "object") return null;
  let n = Wo.get(e);
  return n || (n = {}, Wo.set(e, n)), n[t] ?? (n[t] = _g[t]());
}
function as(e, t) {
  var n;
  return e && typeof e == "object" && ((n = Wo.get(e)) == null ? void 0 : n[t]) || null;
}
const Uo = (e) => ss(e, "editorSession"), lt = (e) => ss(e, "nodeSurface"), yr = (e) => ss(e, "previewNode"), un = (e) => ss(e, "mediaCache"), Mn = (e) => ss(e, "stateSync"), pw = (e) => as(e, "editorSession"), Ec = (e) => as(e, "nodeSurface"), wg = (e) => as(e, "previewNode"), jl = (e) => {
  var t;
  return ((t = as(e, "editorSession")) == null ? void 0 : t.open) === !0;
};
function Hl(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const mw = {
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
      Hl(o == null ? void 0 : o.img), Hl(o == null ? void 0 : o.pendingImg);
    }), (r = (n = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : n.destroy) == null || r.call(n), Hl((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function hw(e, t) {
  const n = as(e, t);
  if (n)
    try {
      mw[t](n);
    } finally {
      delete Wo.get(e)[t];
    }
}
function gw(e) {
  for (const t of Object.keys(_g))
    try {
      hw(e, t);
    } catch (n) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, n);
    }
  e && typeof e == "object" && Wo.delete(e);
}
function Br(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function yw(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Gf(e, t, n = null) {
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
  return !r && n != null && (r = yw(e == null ? void 0 : e.graph, n)), r;
}
function bw(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function vw(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function Sw(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function kg({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (M) => {
    if (!M) return "";
    if (typeof M == "string") return String(M || "").trim();
    if (Array.isArray(M)) {
      if (M.length === 0) return "";
      if (M.length === 1) return i(M[0]);
      const R = String(M[0] || "").trim();
      if (R)
        return Br(t, {
          filename: R,
          subfolder: String(M[1] || "").trim(),
          type: String(M[2] || "output").trim() || "output"
        });
      for (const Z of M) {
        const Y = i(Z);
        if (Y) return Y;
      }
      return "";
    }
    return typeof (M == null ? void 0 : M.src) == "string" && M.src ? M.src : typeof (M == null ? void 0 : M.url) == "string" && M.url ? M.url : Br(t, M);
  }, o = (M) => {
    if (!M || typeof M != "object") return "";
    const R = String(M.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(M.value || "");
    if (R !== "comfy_image") return "";
    const Z = String(M.filename || "").trim();
    return Z ? Br(t, {
      filename: Z,
      subfolder: String(M.subfolder || ""),
      type: String(M.storage || "input")
    }) : "";
  }, s = (M) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || M == null) return null;
    const Z = String(M);
    return R instanceof Map ? R.get(M) || R.get(Z) || R.get(Number(Z)) || null : R[M] || R[Z] || null;
  }, a = (M, R) => {
    var Y;
    const Z = s(M == null ? void 0 : M.id);
    return Array.isArray((Y = Z == null ? void 0 : Z.ui) == null ? void 0 : Y[R]) ? Z.ui[R] : Array.isArray(Z == null ? void 0 : Z[R]) ? Z[R] : [];
  }, l = (M, R) => {
    const Z = s(M == null ? void 0 : M.id);
    return Z != null && Z.ui && Object.prototype.hasOwnProperty.call(Z.ui, R) ? Z.ui[R] : Z && Object.prototype.hasOwnProperty.call(Z, R) ? Z[R] : null;
  }, c = (M, R) => {
    const Z = l(M, "pano_sticker_input_state_hash"), Y = Array.isArray(Z) ? Z[0] : Z;
    return String(Y ?? "").trim() || Sw(R);
  }, d = (M) => {
    const R = [], Z = /* @__PURE__ */ new Set();
    for (const Y of M || []) {
      const ae = i(Y);
      !ae || Z.has(ae) || (Z.add(ae), R.push(ae));
    }
    return R;
  }, u = (M, R) => {
    var ae;
    const Z = [];
    Array.isArray(M == null ? void 0 : M.images) && M.images.length && Z.push(M.images), Array.isArray((ae = M == null ? void 0 : M.ui) == null ? void 0 : ae.images) && M.ui.images.length && Z.push(M.ui.images);
    const Y = [];
    for (const Se of Z)
      R >= 0 && R < Se.length && Y.push(Se[R]), Y.push(...Se);
    return Y;
  }, f = (M, R) => {
    var I;
    const Z = String(R || "").trim();
    if (!Z) return { src: "", sourceType: "", inputName: "" };
    const ae = (Array.isArray(M == null ? void 0 : M.inputs) ? M.inputs : []).findIndex((V) => String((V == null ? void 0 : V.name) || "") === Z);
    if (ae < 0) return { src: "", sourceType: "", inputName: Z };
    const Se = M.graph ? M.getInputLink(ae) : null;
    if ((Se == null ? void 0 : Se.origin_id) == null) return { src: "", sourceType: "", inputName: Z };
    const ye = Se.origin_id, q = Gf(M, ae, ye);
    if (!q) return { src: "", sourceType: "", inputName: Z };
    const _e = Number(Se.origin_slot ?? 0);
    let pe = [];
    try {
      pe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(q) || [] : [];
    } catch {
      pe = [];
    }
    if (Array.isArray(pe) && pe.length) {
      const V = [];
      _e >= 0 && _e < pe.length && V.push(pe[_e]), V.push(...pe);
      const N = d(V.filter((fe) => !zs(fe)));
      if (N.length)
        return { src: N[0], srcCandidates: N, sourceType: "appNodeImageUrls", inputName: Z };
    }
    const de = s((q == null ? void 0 : q.id) ?? ye), te = d(u(de, _e).filter((V) => !zs(V))).map((V) => `${V}&pano_src=${Ic(de)}`);
    if (te.length)
      return { src: te[0], srcCandidates: te, sourceType: "nodeOutputs", inputName: Z };
    const ge = Array.isArray(q == null ? void 0 : q.imgs) ? q.imgs : [];
    if (ge.length) {
      const V = [];
      _e >= 0 && _e < ge.length && V.push(ge[_e]), V.push(...ge);
      const N = d(V);
      if (N.length)
        return { src: N[0], srcCandidates: N, sourceType: "nodeImgs", inputName: Z };
    }
    const oe = (I = q == null ? void 0 : q.widgets) == null ? void 0 : I.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image");
    if (oe) {
      let V = i(oe.value);
      if (V && !V.includes("/") && !V.includes(":") && (q.comfyClass === "LoadImage" || q.type === "LoadImage") && (V = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(V)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(V)}&type=input&subfolder=`), V) return { src: V, sourceType: "widget", inputName: Z };
    }
    return { src: "", sourceType: "", inputName: Z };
  }, m = (M, R = []) => {
    var Y;
    const Z = Array.isArray(M == null ? void 0 : M.inputs) ? M.inputs : [];
    for (const ae of R) {
      const Se = Z.findIndex((pe) => String((pe == null ? void 0 : pe.name) || "") === ae), ye = Se >= 0 && M.graph ? M.getInputLink(Se) : null;
      if ((ye == null ? void 0 : ye.origin_id) == null) continue;
      const q = s(((Y = Gf(M, Se, ye.origin_id)) == null ? void 0 : Y.id) ?? ye.origin_id), _e = (Array.isArray(q == null ? void 0 : q.images) ? q.images : []).find(zs);
      return _e ? `${Br(t, _e)}&pano_src=${Ic(q)}` : "";
    }
    return "";
  }, S = (M, R = []) => {
    const Z = Array.isArray(R) ? R : [R];
    for (const Y of Z) {
      const ae = f(M, Y);
      if (String((ae == null ? void 0 : ae.src) || "").trim()) return ae;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (M) => {
    const R = String(M || "").trim();
    if (!R) return [];
    if (bw(R)) return [R];
    const { filename: Z, subfolder: Y } = vw(R);
    return Z ? d([
      Br(t, { filename: Z, subfolder: Y, type: "temp" }),
      Br(t, { filename: Z, subfolder: Y, type: "output" }),
      Br(t, { filename: Z, subfolder: Y, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (M) => {
      var R;
      try {
        (R = un(M)) == null || R.linkedImages.forEach((Z, Y, ae) => {
          var Se;
          Z != null && Z.img && ((Se = r == null ? void 0 : r.isImageLoadFailed) != null && Se.call(r, Z.img)) && ae.delete(Y);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (M, R) => {
      var Z;
      (Z = M == null ? void 0 : M.delete) == null || Z.call(M, `__ui__${String(R || "")}`);
    },
    linkedValue: (M, R) => {
      var ye, q, _e, pe;
      const Z = String(R || ""), Y = Array.isArray(M == null ? void 0 : M.inputs) ? M.inputs.findIndex((de) => String((de == null ? void 0 : de.name) || "") === Z) : -1, ae = Y >= 0 && M.graph ? M.getInputLink(Y) : null;
      if (ae) {
        const de = s(ae.origin_id), te = [
          de == null ? void 0 : de.output,
          de == null ? void 0 : de.result,
          (ye = de == null ? void 0 : de.data) == null ? void 0 : ye.output,
          (q = de == null ? void 0 : de.data) == null ? void 0 : q.result,
          (_e = de == null ? void 0 : de.ui) == null ? void 0 : _e.output,
          (pe = de == null ? void 0 : de.ui) == null ? void 0 : pe.result
        ];
        for (const ge of te) {
          if (!Array.isArray(ge)) continue;
          const oe = ge[Number(ae.origin_slot || 0)];
          if (typeof oe == "string" && oe.trim()) return oe;
        }
      }
      const Se = Array.isArray(M == null ? void 0 : M.widgets) ? M.widgets.find((de) => String((de == null ? void 0 : de.name) || "") === Z) : null;
      return String((Se == null ? void 0 : Se.value) || "");
    },
    linkedVideoFile: m,
    loadPreferredExactLinkedImage: (M, R = [], Z = null, Y = "") => {
      var O;
      const ae = Array.isArray(R) ? R : [R], Se = S(M, ae), q = (Array.isArray(Se == null ? void 0 : Se.srcCandidates) && Se.srcCandidates.length ? Se.srcCandidates : [Se == null ? void 0 : Se.src]).map((_) => String(_ || "").trim()).filter(Boolean);
      if (!q.length) return null;
      const _e = d(q.flatMap((_) => g(_)));
      if (!_e.length) return null;
      const pe = un(M).linkedImages, de = String(Y || ae.join("|") || "image_exact"), te = q.join(`
`), ge = pe.get(de);
      if (ge && ge.srcRaw === te && ge.img) return ge.img;
      const oe = n || globalThis.Image;
      if (typeof oe != "function") return null;
      const I = new oe();
      (O = r == null ? void 0 : r.markImageLoading) == null || O.call(r, I, te);
      const V = { srcRaw: te, resolvedSrc: "", img: I };
      pe.set(de, V);
      let N = -1;
      const fe = (_) => {
        var P, ce, be;
        _ === "ready" ? (P = r == null ? void 0 : r.markImageReady) == null || P.call(r, I, te) : (ce = r == null ? void 0 : r.markImageFailed) == null || ce.call(r, I, te), Z == null || Z(I), (be = M.setDirtyCanvas) == null || be.call(M, !0, !0);
      }, C = () => {
        if (N += 1, N >= _e.length) {
          fe("failed");
          return;
        }
        V.resolvedSrc = _e[N], I.src = V.resolvedSrc;
      };
      return I.onload = () => fe("ready"), I.onerror = () => {
        if (N + 1 < _e.length) {
          C();
          return;
        }
        fe("failed");
      }, C(), I;
    },
    output: s,
    resolvePreferredExactLinkedSource: S,
    source: i,
    uiImage: (M, R, Z, Y = null) => {
      var de, te, ge;
      const ae = a(M, R)[0] || null, Se = i(ae);
      if (!Se) return null;
      const ye = `__ui__${R}`, q = (de = Z == null ? void 0 : Z.get) == null ? void 0 : de.call(Z, ye);
      if (q && q.__panoSrc === Se) return q;
      const _e = n || globalThis.Image;
      if (typeof _e != "function") return null;
      const pe = new _e();
      return pe.__panoSrc = Se, (te = r == null ? void 0 : r.markImageLoading) == null || te.call(r, pe, Se), pe.onload = () => {
        var oe;
        (oe = r == null ? void 0 : r.markImageReady) == null || oe.call(r, pe, Se), Y == null || Y(pe);
      }, pe.onerror = () => {
        var oe;
        (oe = r == null ? void 0 : r.markImageFailed) == null || oe.call(r, pe, Se), Y == null || Y(pe);
      }, pe.src = Se, (ge = Z == null ? void 0 : Z.set) == null || ge.call(Z, ye, pe), pe;
    },
    uiList: a,
    uiValue: l
  };
}
function xg({
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
const Ki = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, _w = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Mg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !Ki[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: $r(t.fps) };
}
function Ir(e) {
  return structuredClone(e);
}
function ww(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function kw(e, t, n) {
  const r = e.fps ?? t;
  if (r === t) return e.lanes;
  const i = n.start - n.in, o = Math.floor(i * r / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / r + 0.5) - i }))
  }]));
}
function Yu(e, t, n) {
  const r = kw(n, e.timeline.fps, t.clip);
  let i;
  if (t.placement === n.placement) {
    i = { ...t };
    for (const o of Ki[n.placement]) t.handoff_overrides.includes(o) || (i[o] = r[o]);
  } else
    i = { ...Object.fromEntries(_w.map((o) => [o, t[o]])), placement: n.placement, ...r }, n.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return Ir(cn({ version: 2, stickers: [i] }).stickers[0]);
}
function xw(e, t) {
  const n = e.stickers.findIndex((r) => r.source.kind === "port");
  return !t || n < 0 ? e : { ...e, stickers: e.stickers.map((r, i) => i === n ? Yu(e, r, t) : r) };
}
function Mw(e, t) {
  const n = Ki[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const r = n.filter((i) => !ww(e[i], t[i]));
  if (r.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...r]);
    e.handoff_overrides = [...n, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function Pw(e, t) {
  if (!t || t.id !== e.id) return Ir(e);
  if (e.placement === t.placement) {
    const r = Ir(e);
    for (const i of Ki[e.placement]) e.handoff_overrides.includes(i) || (r[i] = Ir(t[i]));
    return r;
  }
  if (e.handoff_overrides.some((r) => Ki[e.placement].includes(r))) return Ir(e);
  const n = Ir(t);
  for (const r of ["clip", "visible", "locked", "crop", "opacity"]) n[r] = Ir(e[r]);
  return n;
}
function Nw(e, t, n, r) {
  return !t.handoff_overrides.includes(r) || t.placement !== n.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== r), t[r] = Ir(Yu(e, t, n)[r]), !0);
}
const js = "sticker_image_1", Pg = "external_image", Gi = 0;
function Hs(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Kl(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Dr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Oc(e, t = Gi) {
  return (e == null ? void 0 : e.version) !== 2 ? Dr(e) : Dr(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: ar(n, t).active,
    external: n.source.kind === "port",
    ...Ou(n, t)
  }));
}
function qu(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Dr(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Ng(e) {
  return String((e == null ? void 0 : e.id) || "") === js || String((e == null ? void 0 : e.source_kind) || "") === Pg;
}
function Xu(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Ng(t);
}
const Ag = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Cg(e) {
  return !Ng(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Ag.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function Ig(e) {
  const t = Cg(e);
  return t ? Ag.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Eg(e, t = {}) {
  var F, M, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((Z) => String((Z == null ? void 0 : Z.id) || "") === js);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const Z = String(((F = e.active) == null ? void 0 : F.selected_sticker_id) || "") === js;
    return {
      state: {
        ...e,
        stickers: n.filter((Y, ae) => ae !== r),
        active: Z ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = r >= 0 ? n[r] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), m = t.pose && typeof t.pose == "object" ? t.pose : {}, S = a ? m.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || m.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(S)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const Z = Hs(g, u, f), Y = Number(((M = s == null ? void 0 : s.initial_pose) == null ? void 0 : M.hFOV_deg) ?? g), ae = Hs(Y, u, f), Se = Number(((R = s == null ? void 0 : s.initial_pose) == null ? void 0 : R.vFOV_deg) ?? ae);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - Z) <= 1e-6 && Math.abs(Se - ae) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((ye, q) => q === r ? {
          ...ye,
          vFOV_deg: Z,
          initial_pose: ye.initial_pose && typeof ye.initial_pose == "object" ? { ...ye.initial_pose, vFOV_deg: ae } : ye.initial_pose
        } : ye)
      },
      changed: !0
    };
  }
  const v = n.reduce((Z, Y) => Math.max(Z, Number((Y == null ? void 0 : Y.z_index) || 0)), -1), y = {
    yaw_deg: Number(m.yaw_deg || 0),
    pitch_deg: Number(m.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Hs(g, u, f) : Number(m.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(m.rot_deg ?? m.roll_deg ?? 0)
  }, j = {
    ...s || {},
    id: js,
    source_kind: Pg,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: v + 1
  }, K = r >= 0 ? n.map((Z, Y) => Y === r ? j : Z) : [...n, j];
  return { state: { ...e, stickers: K }, changed: !0 };
}
function _a(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const Aw = ["IMAGE", "VIDEO"];
function Wf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => Aw.includes(n)) ? "2d" : null;
}
function Cw(e, t) {
  var i, o, s, a, l, c;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? Wf(r.type) ?? Wf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, r.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[r.origin_slot]) == null ? void 0 : c.type) : null;
}
function Og(e, { pose: t = null, handoff: n = null } = {}) {
  return {
    connected: _a(e, "sticker"),
    awaitingPose: !t && (_a(e, "sticker_state") || Cw(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!n
  };
}
function Fg(e) {
  return _a(e, "sticker") && _a(e, "sticker_state");
}
function Iw(e, t) {
  return Fg(e) ? Mg(t) : null;
}
function Ew(e, t, n) {
  return xw(Oh(e, t), Mg(n));
}
function Uf(e, t, n = {}) {
  const r = t.keyframes ?? {}, i = {
    ...n,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: r.position ?? [] },
    rotation: { value: t.rotation, keyframes: r.rotation ?? [] },
    scale: { value: t.scale, keyframes: r.scale ?? [] }
  };
  return cn({ version: 2, stickers: [i] }).stickers[0];
}
function Tg(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((m) => Xu(e, m)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const m = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((S, g) => g !== o),
        active: m ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (r == null ? void 0 : r.placement) === "world" && r.replace && s.placement === "sky" && !i) {
    const m = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), S = Uf(s.id, r, m);
    return { state: { ...e, stickers: e.stickers.map((g, v) => v === o ? S : g) }, changed: !0 };
  }
  if (s || n) return { state: e, changed: !1 };
  const a = { ...e }, l = Ho(a);
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, Uf(l, r)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), d = Tu(l, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, Dr(e).reduce((m, S) => Math.max(m, S.z_index), -1) + 1), u = (r == null ? void 0 : r.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((m) => ({ ...m, value: { ...m.value, vFOV_deg: m.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Ju(e) {
  const t = Dr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Kl(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Kl(o.z_index),
    item: o
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Kl(o.z_index),
    item: o
  }));
  return [...t, ...r, ...i].sort((o, s) => o.z_index - s.z_index);
}
function Dg(e) {
  const t = qu(e), n = Xu(e, t), r = Dr(e).some((a) => a && a.visible !== !1), i = Ju(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Ig(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function Ow(e) {
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
function Bf(e, t) {
  const n = qu(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Ow(e), i = String(n.id || ""), o = Ju(r), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: r, changed: !0 };
}
function Fw(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function Tw(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Eg(e, t.value);
  if (t.type === "sync-port") return Tg(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Ju(e).reduce((f, m) => Math.max(f, Number(m.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Hs(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, m = Ho(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Tu(m, Mo(i.asset), d, l + 1)],
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
    return !i || !Dr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = qu(e);
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
    const i = Cg(n);
    return !i || !Ig(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Bf(e, "front");
  if (t.type === "send-back") return Bf(e, "back");
  if (t.type === "delete-selected") {
    if (Xu(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === n ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== n), o = Dr({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = Fw(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Ou(n, Gi) : n, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = zS(n, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(n);
      return Th(c, Gi, l), { state: { ...e, stickers: e.stickers.map((d) => d === n ? c : d) }, changed: !0 };
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
function Dw(e = {}) {
  return xg({
    ...e,
    reduce: Tw,
    projectModel: Dg
  });
}
const Ks = 2;
function Jr(e, t) {
  return Math.floor(e * t + 0.5);
}
function Lw(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Lg({ video: e, clock: t, fps: n, span: r, loop: i, place: o = () => null, onFrame: s, onCapture: a, onChange: l }) {
  let c = 0, d = !1, u = !1, f = { name: "idle" }, m = [];
  const S = () => d && !u, g = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const C of m) C();
    m = [];
  }
  function y(C, O = {}) {
    return v(), f = { name: C, ...O }, l(), f;
  }
  function j(C, O, _) {
    const P = () => {
      f === C && _();
    };
    e.addEventListener(O, P), m.push(() => e.removeEventListener(O, P));
  }
  function K(C, O) {
    let _ = t.requestFrame(function P(ce) {
      f === C && (O(ce), f === C && (_ = t.requestFrame(P)));
    });
    m.push(() => t.cancelFrame(_));
  }
  function F(C) {
    c = C, s(c);
  }
  function M() {
    return y(u ? "error" : "idle");
  }
  const R = () => {
    var C;
    return ((C = o()) == null ? void 0 : C.origin) ?? 0;
  }, Z = (C) => (C - R()) / n();
  function Y(C) {
    const { start: O = 0, end: _ = 1 / 0 } = o() ?? {};
    return C >= O && C < _ && !(Z(C) >= Number(e.duration));
  }
  function ae() {
    u = !0, M();
  }
  function Se() {
    const { seekable: C } = e, O = C != null && C.length ? C.end(C.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(Z(c), Number.isFinite(O) ? O : 1 / 0));
  }
  function ye(C) {
    if (!S()) return C === "play" ? te() : M();
    if (e.readyState < Ks && !e.seeking) {
      const O = y("loading", { then: C });
      return j(O, "loadeddata", () => ye(O.then)), j(O, "error", ae), O;
    }
    return C === "play" && !Y(c) ? te() : o() && !Y(c) ? M() : q(C, !1);
  }
  function q(C, O) {
    const _ = Se(), P = Jr(Number(e.currentTime), n()) === Jr(_, n());
    if (!e.ended && !e.seeking && P) return _e(C);
    const ce = y("seeking", { then: C, target: _, retried: O });
    return j(ce, "seeked", () => {
      const be = Jr(Number(e.currentTime), n()) === Jr(Se(), n()), D = Se() === ce.target;
      be || D && ce.retried ? _e(ce.then) : q(ce.then, D);
    }), j(ce, "error", ae), e.seeking && P || (e.currentTime = _), ce;
  }
  function _e(C) {
    return C === "play" ? pe() : (a(), M());
  }
  function pe() {
    const C = y("playingVideo", { shown: !1 });
    if (j(C, "pause", () => e.ended ? de() : I()), j(C, "ended", de), j(C, "error", ae), i() && !o() && Jr(Number(e.duration), n()) >= r()) {
      const _ = e.loop;
      e.loop = !0, m.push(() => {
        e.loop = _;
      });
    }
    const O = (_, P) => {
      P && !C.shown && (C.shown = !0, l()), ge(Jr(_ + R() / n(), n()));
    };
    if (g()) {
      let _ = e.requestVideoFrameCallback(function P(ce, be) {
        f === C && (O(Number(be.mediaTime), !0), f === C && (_ = e.requestVideoFrameCallback(P)));
      });
      m.push(() => {
        var P;
        return (P = e.cancelVideoFrameCallback) == null ? void 0 : P.call(e, _);
      });
    } else
      K(C, () => O(Number(e.currentTime), e.readyState >= Ks));
    return Promise.resolve(e.play()).catch(() => {
      f === C && I();
    }), C;
  }
  function de() {
    a(), te();
  }
  function te() {
    var _;
    const C = y("playingClock", { startTs: t.now(), startFrame: c }), O = ((_ = o()) == null ? void 0 : _.start) ?? 0;
    return S() && c < O && e.readyState >= Ks && (e.currentTime = Math.max(0, Z(O))), K(C, (P) => ge(C.startFrame + Math.floor(Math.max(0, P - C.startTs) / 1e3 * n()))), C;
  }
  function ge(C) {
    if (C < r()) {
      if (o() && f.name === "playingVideo" && !Y(C)) {
        v(), e.pause(), F(C), te();
        return;
      }
      const O = o() && f.name === "playingClock" && S() && C > c && !Y(c) && Y(C);
      F(C), O && ye("play");
      return;
    }
    if (!i() || r() <= 1) {
      oe(r() - 1);
      return;
    }
    f.name === "playingVideo" && (v(), e.pause()), F(0), ye("play");
  }
  function oe(C) {
    f.name === "playingVideo" ? (v(), e.pause(), F(Math.max(0, C)), a()) : F(Math.max(0, C)), ye("still");
  }
  function I() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", l();
    else if (f.name === "playingVideo") {
      v(), e.pause();
      const C = Lw(Number(e.currentTime) + R() / n(), n());
      F(Math.min(C, r() - 1)), a(), c === C ? M() : ye("still");
    } else f.name === "playingClock" && oe(Math.min(c, r() - 1));
  }
  function V() {
    if (!(fe() || r() <= 1)) {
      if (c >= r() - 1 && F(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", l();
        return;
      }
      ye("play");
    }
  }
  function N(C) {
    const O = Math.max(0, Math.min(Math.round(C), r() - 1));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", F(O), l();
      return;
    }
    f.name === "playingVideo" && (v(), e.pause()), F(O), ye("still");
  }
  function fe() {
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
      return fe();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return f.name === "playingVideo" || f.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return f.name === "playingVideo" && f.shown;
    },
    play: V,
    stop: I,
    seek: N,
    toggle() {
      fe() ? I() : V();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(C) {
      v(), d = !!C, u = !1, ye("still");
    },
    dispose() {
      v(), d = !1, f = { name: "idle" };
    }
  };
}
function Zu({ video: e, onCapture: t, onChange: n }) {
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
    if (!r || i || e.readyState < Ks) return;
    const { time: g, playing: v, fps: y } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (v) {
      if (s !== null) return;
      const j = Number(e.duration), K = Number.isFinite(j) ? Math.min(g, j) : g, F = Math.abs(Number(e.currentTime) - K) > 1.5 / y;
      if (e.ended && !F) return;
      F && d(K), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
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
      !o.playing || l || (l = !0, n());
    },
    error: () => {
      r && (i = !0, n());
    }
  };
  e.muted = !0;
  for (const [g, v] of Object.entries(m)) e.addEventListener(g, v);
  function S(g) {
    r = g, i = !1, s = null, a = null, l = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: v = null, playing: y = !1, fps: j }) {
      g !== r && (S(g), n()), o = { time: v, playing: y, fps: j }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, v) {
      return !r || i ? v : o.time === null ? null : o.playing && l ? e : a === null ? v : g;
    },
    dispose() {
      for (const [g, v] of Object.entries(m)) e.removeEventListener(g, v);
      S("");
    }
  };
}
function Gs(e, t, n = !1) {
  return !t && !n && e.isConnected && e.clientWidth > 0;
}
function Rw({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const m = /* @__PURE__ */ new Set();
  let S = null, g = null, v = {};
  const y = () => i().timeline.fps, j = (pe) => pe.stickers.find((de) => de.source.kind === "port"), K = () => v.bg !== void 0 ? v.bg : d && f > 0 ? { video: !0, frames: Math.round(f * y()), duration: f } : null, F = () => v.bg === null ? v.upstreamClip ?? { start: 0, in: 0, duration: null } : i().background.clip, M = () => Eu(i(), {
    ...v,
    bg: K(),
    port: (S == null ? void 0 : S.meta) ?? v.port ?? null,
    camera: c
  }), R = Lg({
    video: e,
    clock: r,
    fps: y,
    span: M,
    loop: () => !0,
    place: () => {
      const pe = F();
      return pe ? _h(pe) : null;
    },
    onFrame: o,
    onCapture: s,
    onChange: l
  }), Z = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, Y = () => {
    u && (m.add(u), l());
  }, ae = Zu({ video: t, onCapture: a, onChange: l }), Se = Iu({ createImage: n, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", Z), e.addEventListener("error", Y);
  function ye(pe) {
    pe !== u && (u = pe, e.pause(), pe ? e.src = pe : e.removeAttribute("src"), e.load(), R.setSource(!!pe));
  }
  function q() {
    R.playing && R.stop();
  }
  function _e(pe) {
    const de = j(pe);
    g = S && de ? Nu(de.clip, R.frame, pe.timeline.fps, S.meta) : null, ae.follow({
      src: (S == null ? void 0 : S.src) || "",
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
      const pe = F();
      return v.bg === null ? !pe || kc(pe, R.frame, y(), v.upstreamMedia ?? null, !0) : !pe || kc(pe, R.frame, y(), K(), !!v.upstream);
    },
    pause: q,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return S;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(pe, de) {
      return S != null && S.frames ? Se.picture(S.frames, g, S.meta, de) : ae.picture(pe, de);
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
    follow({ shown: pe, sources: de, state: te, sticker: ge = null, media: oe = {} }) {
      if (S = pe ? ge : null, v = oe, !pe)
        return q(), ye(""), _e(te), !1;
      for (const C of m)
        de.includes(C) || m.delete(C);
      const I = de.find((C) => C && !m.has(C)) || "", V = I !== d;
      V && (d = I, f = 0), ye(d);
      const N = Ah(te, { camera: c }) || !!d && R.state !== "error" || !!S;
      return N || q(), (V || !N || !R.playing && R.frame >= M()) && R.frame !== Gi && R.seek(Gi), _e(te), N;
    },
    dispose() {
      R.dispose(), ae.dispose(), e.removeEventListener("loadedmetadata", Z), e.removeEventListener("error", Y), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
function Vw(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const n = t.fps === e.timeline.fps ? t : bh(t, e), r = new Set(n.deleted), i = new Map(n.stickers.map((a) => [a.id, a]));
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
const Rg = "PANO_SCENE";
function Vg(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: cn(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function Qu(e) {
  if (!e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length) return null;
  const t = e("pano_upstream_bg_color")[0], n = e("pano_upstream_bg_clip")[0], r = cn({ version: 2, background: { clip: n == null ? void 0 : n.clip } }).background.clip;
  return {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: vn(e("pano_upstream_coverage")[0]),
    color: Array.isArray(t) && t.length === 3 ? `#${t.map((i) => Math.round(Math.min(1, Math.max(0, Number(i) || 0)) * 255).toString(16).padStart(2, "0")).join("")}` : null,
    clip: Ja(r) || !(Number(n == null ? void 0 : n.fps) > 0) ? null : { clip: r, fps: Number(n.fps) }
  };
}
const $w = "bg_media is not used";
function zw(e, t) {
  return e === Rg && t === null;
}
function mn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function $g(e) {
  return e.map(({ sceneState: { id: t } }, n) => t && !e.slice(n + 1).some((r) => r.sceneState.id === t) ? t : `#${n}`);
}
function zg(e, t, n) {
  const r = $g(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && r[s] === i.id ? t.find((m) => m.layer === i.id) ?? null : null, c = Vw(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === n ? u : { ...Yi(u, n), painting: d };
    for (const m of f.stickers)
      m.origin = { layer: r[s], id: m.id }, m.id = ed(r[s], m.id);
    return { key: r[s], sceneState: f, ui: o, received: i };
  });
}
function ed(e, t) {
  return `upstream:${e}:${t}`;
}
function Fc(e, t) {
  return ed(e, t);
}
function Ct(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function wa(e) {
  return Bo(e.origin.layer);
}
function Bo(e) {
  return !e.startsWith("#");
}
function jg(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? jr : zr).map(([r]) => r), ...t ? [] : ["z_index"]];
}
function jw(e) {
  return Object.fromEntries(jg(e).map((t) => [t, JSON.stringify(e[t])]));
}
function Hg(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function td(e) {
  return `layer:${e}`;
}
function Yf(e) {
  return new Map(e.flatMap(({ key: t, sceneState: n }) => [
    [td(t), Hg(n)],
    ...n.stickers.map((r) => [r.id, jw(r)])
  ]));
}
function Hw(e, t, n, r, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = bh(o[d], u.timeline.fps === i ? u : Yi(u, i));
    }
    return d;
  };
  return n.forEach(({ key: l, sceneState: c }, d) => {
    if (!Bo(l)) return;
    const u = r.get(td(l));
    if (u) {
      const f = Hg(c), m = ["visible", "clip"].filter((S) => f[S] !== u[S]);
      if (m.length) {
        const S = a(l, d), g = { ...o[S].scene };
        for (const v of m) g[v] = structuredClone(c.scene[v]);
        o[S] = { ...o[S], scene: g };
      }
      if (f.painting_visible !== u.painting_visible) {
        const S = a(l, d);
        o[S] = { ...o[S], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const m = r.get(f.id);
      if (!m) continue;
      const S = jg(f).filter((F) => JSON.stringify(f[F]) !== m[F]);
      if (!S.length) continue;
      const g = a(l, d), { id: v } = f.origin, y = [...o[g].stickers], j = y.findIndex((F) => F.id === v), K = j >= 0 && y[j].placement === f.placement ? { ...y[j] } : { id: v, placement: f.placement };
      for (const F of S) K[F] = structuredClone(f[F]);
      j >= 0 ? y[j] = K : y.push(K), o[g] = { ...o[g], stickers: y };
    }
  }), s ? cn({ version: 2, upstream: o }).upstream : e;
}
function Kw(e, t, n) {
  const r = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!Bo(i)) return;
    const a = t.find((d) => d.layer === i), l = n.get(td(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && r.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((m) => m.id === d.origin.id && m.placement === d.placement && Object.hasOwn(m, "clip")), f = n.has(d.id) && n.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && r.push({ index: s, clip: d.clip, sticker: d });
    }
  }), r;
}
function Kg(e, t, n, r, i, o = null) {
  return Kw(e, t, n).flatMap(({ index: s, clip: a, sticker: l }) => {
    if (a.duration !== null && a !== o) return [a.start + a.duration];
    const c = (l == null ? void 0 : l.source.kind) === "port" ? r(s) : null;
    return c ? [Au({ ...a, duration: null }, i, c)] : [];
  });
}
function tl(e, t, n, r) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(r({ layer: t, fps: n, deleted: [], stickers: [], scene: {} })) : o[i] = r(o[i]), cn({ version: 2, upstream: o }).upstream;
}
function Gw(e, t, n) {
  return t.reduce((r, { layer: i, id: o }) => tl(r, i, n, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const Ww = new Set([...zr, ...jr].map(([e]) => e));
function Gg(e, { layer: t, id: n }) {
  var r;
  return ((r = e.find((i) => i.layer === t)) == null ? void 0 : r.stickers.find((i) => i.id === n)) ?? null;
}
function Uw(e, t, n = null) {
  const { origin: r } = t, i = Gg(e, r);
  return !i || n !== null && !(Ww.has(n) && i.placement === t.placement && Object.hasOwn(i, n)) ? e : tl(e, r.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== r.id) return [s];
      if (n === null) return [];
      const a = { ...s };
      return delete a[n], [a];
    })
  }));
}
function Bw(e, t) {
  var r;
  const n = new Set((r = e.find((i) => i.layer === t.key)) == null ? void 0 : r.deleted);
  return t.received.stickers.filter((i) => n.has(i.id)).length;
}
function Yw(e, t) {
  var n;
  return (n = e.find((r) => r.layer === t)) != null && n.deleted.length ? tl(e, t, null, (r) => ({ ...r, deleted: [] })) : e;
}
function Wg(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function qw(e, t) {
  return Wg(e.find((n) => n.layer === t)) ? tl(e, t, null, ({ painting_visible: n, ...r }) => ({ ...r, scene: {} })) : e;
}
function Xw(e, t) {
  const n = $g(t), r = new Map(t.flatMap(({ sceneState: s }, a) => n[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = r.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? cn({ version: 2, upstream: o }).upstream : e;
}
function Jw(e, t, n, { media: r, paintLayers: i, source: o, editorFile: s = null }) {
  const { sceneState: a, ui: l, received: c } = e, d = is(a, n), u = (y) => y.visible ? r(y) : null, f = ag(a, n, { media: u, zIndex: (y) => y.z_index, paintLayers: i, evaluated: d }).map((y) => y.kind === "erp" ? { ...y, id: ed(t, y.id) } : y), m = ug(a, n, a.stickers, { media: u, evaluated: d }), S = [], g = ga(mn(l, "pano_scene_files"), mn(l, "pano_scene_meta"), o);
  g && S.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: Ku(g, d.scene), value: d.scene, opacity: 1 });
  const v = ga(mn(l, "pano_sticker_files"), mn(l, "pano_sticker_meta"), o);
  if (v) {
    const y = Xh(v, a, d);
    S.push({ slot: `${t}:sticker`, urls: Jh(v, c), request: y, value: (y == null ? void 0 : y.value) ?? null, opacity: (y == null ? void 0 : y.opacity) ?? 1 });
  }
  for (const y of s ? Qh(a, d, s) : []) {
    const { request: j } = y, K = a.stickers.find((F) => F.id === y.id);
    S.push({ slot: `${t}:file:${y.id}`, urls: [y.key], request: j, value: (j == null ? void 0 : j.value) ?? null, opacity: (j == null ? void 0 : j.opacity) ?? 1, source: K.source });
  }
  return { evaluated: d, sky: f, stickers: m, items: S };
}
const ka = Math.PI / 180, tr = 180 / Math.PI, Zw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Qw = 260;
function qf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Ug(e, t) {
  return t ? Ug(t, e % t) : e;
}
function ek(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Ug(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function Yo(e, t) {
  const n = qf(e), r = qf(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: ek(n, r) };
}
function si(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function Bg(e) {
  const t = si(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? gr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function nd(e, t, n = Zw) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), a = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), c = (v, y, j) => {
    const K = v + y, F = Math.max(0, j - 1), M = K > F && K > 0 ? F / K : 1;
    return [v * M, y * M];
  }, [d, u] = c(l, s, r), [f, m] = c(o, a, i), S = {
    x: d,
    y: f,
    w: Math.max(1, r - d - u),
    h: Math.max(1, i - f - m)
  }, g = bu(S, t);
  return {
    x: S.x + (S.w - g.width) * 0.5,
    y: S.y + (S.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: S
  };
}
function tk(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = nd({ width: n, height: r }, 1), o = Oe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = n / (2 * Math.tan(o * ka * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Jm(l, Bm(
    { x: n * 0.5, y: r * 0.5 },
    s,
    a
  )), d = nk(c, Bi(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = vu({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Yg(e) {
  return {
    yaw: It(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * tr),
    pitch: Oe(Math.asin(Oe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * tr, -89.9, 89.9)
  };
}
function nk(e, t) {
  const n = Yg(e), r = Bi(n.yaw, n.pitch, 0), i = kl(t, e), o = {
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
    roll: Ba(Math.atan2(
      kl(a, r.up),
      kl(a, r.right)
    ) * tr)
  };
}
function qg(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = nd({ width: n, height: r }, pi(e)), o = ci(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Jm(e, Bm(
    s,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), l = Yg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Oe(2 * Math.atan(n / (2 * o)) * tr, 1, 179)
  };
}
function rk(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = ci(t, n), l = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = Su(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= r && u.y + u.h >= i, m = r / i, S = Math.tan(hc * ka), g = m >= 1 ? S : S * m, v = m >= 1 ? S / m : S;
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
function vi(e, t) {
  const n = si(e);
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
function ik(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const s = ci(n, e);
    return vu(bu(n, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Ds(o, t) };
}
function Xf(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = Yo(t, n);
  if (!o) return e;
  const s = pi(e) >= 1;
  r && o.ratio >= 1 !== s && (o = Yo(o.height, o.width));
  const a = ik(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Xg(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (si(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = Ym({
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
    const r = si(e);
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
    return vi(e, (r) => Xf(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return vi(e, (r) => {
      const o = String(gr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? Yo(o[1], o[2]) : Yo(pi(r), 1);
      return s ? Xf(r, s.height, s.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? vi(e, (i) => {
      const o = Ba(r), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? vi(e, (r) => {
    const i = qm(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? vi(e, (r) => {
    const i = Xm(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? vi(e, (r) => {
    const i = Qg(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Jg({
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
function Zg(e, t, n = {}) {
  var s, a;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Wm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: Um(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Qg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * ka, l = Math.cos(a), c = Math.sin(a), d = o / n, u = -s / n, f = d * l - u * c, m = d * c + u * l, S = Number(e.pitch_deg || 0) * ka, g = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: It(Number(e.yaw_deg || 0) - Math.atan(f) / g * tr),
    pitch_deg: Oe(Number(e.pitch_deg || 0) - Math.atan(m) * tr, -90, 90)
  };
}
function ok({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return xg({
    readState: e,
    reduce: Xg,
    projectModel: Bg,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const je = Object.freeze({
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
}), sk = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, ak = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: sk(t[2])
})), lk = {
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
}, Jf = Object.fromEntries(
  Object.entries(lk).map(([e, t]) => [e, {
    name: t.name,
    elements: ak(t.body)
  }])
), xt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = nt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Jf, r) ? Jf[r] : null;
    });
    return (r, i) => n.value ? (Ee(), De("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: st(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Ee(!0), De(qe, null, mt(n.value.elements, (o, s) => (Ee(), De(qe, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Ee(), De("path", fr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Ee(), De("circle", fr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Ee(), De("rect", fr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Ee(), De("line", fr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Ee(), De("polyline", fr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Ee(), De("polygon", fr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : tt("", !0)
      ], 64))), 128))
    ], 2)) : tt("", !0);
  }
}, jt = {
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
    const t = e, n = nt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, i) => (Ee(), bn(Lb(e.tag), fr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: dm(() => [
        Be(xt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, ck = ["aria-expanded", "disabled"], uk = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, dk = ["data-aspect", "disabled", "onClick"], fk = { class: "pano-cutout-aspect-custom" }, pk = ["disabled"], mk = ["disabled"], hk = ["data-custom-width", "data-custom-height", "disabled"], e0 = {
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
    ]), o = /* @__PURE__ */ Lt("1"), s = /* @__PURE__ */ Lt("1"), a = /* @__PURE__ */ Lt(null), l = nt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), c = nt(() => {
      const g = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], v = String(n.model.aspectLabel || "");
      return g.length ? g.map((y) => {
        const j = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), K = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || j);
        return {
          ...typeof y == "object" && y ? y : {},
          value: j,
          label: K,
          active: v ? j === v : (y == null ? void 0 : y.active) === !0
        };
      }) : i.map((y) => ({
        ...y,
        active: y.value === v
      }));
    }), d = nt(() => {
      var v;
      const g = String(n.model.aspectLabel || "").trim();
      return g || String(((v = c.value.find((y) => y.active === !0)) == null ? void 0 : v.label) || "Aspect");
    });
    ri(d, (g) => {
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
    Ka(() => {
      document.addEventListener("pointerdown", f, !0);
    }), es(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function m(g) {
      const [v, y] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: v,
        height: y,
        preserveOrientation: !0
      });
    }
    function S() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (g, v) => (Ee(), De("div", {
      ref_key: "rootElement",
      ref: a,
      class: st(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Ee(), bn(jt, {
        key: 0,
        icon: e.model.aspectIcon || Je(je).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: v[0] || (v[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Ee(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: v[1] || (v[1] = (y) => u({ type: "toggle-aspect" }))
      }, [
        Be(xt, {
          icon: e.model.aspectIcon || Je(je).aspect
        }, null, 8, ["icon"]),
        Ne("span", null, Xe(d.value), 1),
        Be(xt, {
          icon: Je(je).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, ck)),
      vr(Ne("div", uk, [
        (Ee(!0), De(qe, null, mt(c.value, (y) => (Ee(), De("button", {
          key: y.value,
          class: st(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (j) => m(y)
        }, Xe(y.label), 11, dk))), 128)),
        Ne("div", fk, [
          vr(Ne("input", {
            "onUpdate:modelValue": v[2] || (v[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, pk), [
            [bf, o.value]
          ]),
          v[4] || (v[4] = Ne("span", { "aria-hidden": "true" }, ":", -1)),
          vr(Ne("input", {
            "onUpdate:modelValue": v[3] || (v[3] = (y) => s.value = y),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, mk), [
            [bf, s.value]
          ]),
          Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: S
          }, "Apply", 8, hk)
        ])
      ], 512), [
        [li, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, gk = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, yk = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Lt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (Ee(), De("div", {
      class: st(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = pt(() => {
      }, ["stop"]))
    }, [
      Be(jt, {
        icon: Je(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", gk, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Ee(!0), De(qe, null, mt(Je(n), (o) => (Ee(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ne("kbd", null, Xe(o[0]), 1),
          Ne("span", null, Xe(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, bk = {
  class: "pano-view-unavailable",
  role: "status"
}, nl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (Ee(), De("div", bk, Xe(Je(dg)), 1));
  }
}, vk = { class: "pano-cutout-node-surface" }, Sk = ["title", "disabled"], _k = { class: "value" }, wk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, kk = {
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
    return (r, i) => (Ee(), De("div", vk, [
      Ne("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = pt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = pt(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => n({ type: "open-editor" }))
        }, [
          Be(xt, {
            icon: Je(je).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(jt, {
          icon: e.model.hasShot ? Je(je).delete : Je(je).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(e0, {
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
          onDblclick: i[2] || (i[2] = pt((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be(xt, {
            icon: Je(je).roll
          }, null, 8, ["icon"]),
          Ne("span", _k, Xe(e.model.rollLabel || "0.0°"), 1)
        ], 40, Sk),
        Be(jt, {
          icon: Je(je).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(yk)
      ], 32),
      e.model.hasShot === !1 ? (Ee(), De("div", wk, " Choose a view · + Add Frame ")) : tt("", !0),
      e.model.viewUnavailable ? (Ee(), bn(nl, { key: 1 })) : tt("", !0)
    ]));
  }
}, t0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ Lt(null);
    let o, s = !1;
    function a() {
      if (!s) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, s = !1, { active: !0, intent: u };
    }
    function l(u, f = "image/*") {
      const m = i.value;
      return m instanceof HTMLInputElement ? (o = u, s = !0, m.accept = f, m.value = "", m.click(), !0) : !1;
    }
    function c(u) {
      var g, v;
      const { active: f, intent: m } = a();
      if (!f) return;
      const S = ((v = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : v[0]) || null;
      if (S) {
        r("file-selected", { intent: m, file: S });
        return;
      }
      r("file-cancelled", { intent: m });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && r("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Ee(), De("input", {
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
}, xk = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Mk = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Lt(!1), n = Object.freeze([
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
    return (r, i) => (Ee(), De("div", {
      class: st(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = pt(() => {
      }, ["stop"]))
    }, [
      Be(jt, {
        icon: Je(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", xk, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Ee(!0), De(qe, null, mt(Je(n), (o) => (Ee(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ne("kbd", null, Xe(o[0]), 1),
          Ne("span", null, Xe(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Pk = { class: "pano-stickers-node-surface" }, Nk = ["disabled"], Ak = ["aria-label", "data-tip"], Ck = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Ik = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, Ek = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Lt(null);
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
    return (s, a) => (Ee(), De("div", Pk, [
      Ne("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = pt(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = pt(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => r({ type: "open-editor" }))
        }, [
          Be(xt, {
            icon: Je(je).fullscreen
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
          Be(xt, {
            icon: Je(je).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Ne("span", { class: "label" }, "Add Image", -1))
        ], 8, Nk),
        Be(jt, {
          icon: e.model.locked ? Je(je).lock_closed : Je(je).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(jt, {
          icon: Je(je).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(jt, {
          icon: Je(je).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(jt, {
          icon: e.model.isExternalSelection ? Je(je).back_initial : Je(je).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Mk)
      ], 32),
      e.model.playable === !0 ? (Ee(), De("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = pt(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = pt(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => r({ type: "toggle-playback" }))
      }, [
        Be(xt, {
          icon: e.model.playing ? Je(je).pause : Je(je).play
        }, null, 8, ["icon"])
      ], 40, Ak)) : tt("", !0),
      e.model.hasStickers === !1 ? (Ee(), De("div", Ck, " Add Image to place a sticker ")) : tt("", !0),
      e.model.dropActive === !0 ? (Ee(), De("div", Ik, "Drop image to add")) : tt("", !0),
      Be(t0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Ee(), bn(nl, { key: 3 })) : tt("", !0)
    ]));
  }
}, Ok = { class: "pano-studio-node-surface" }, Fk = {
  class: "pano-studio-node-status",
  role: "status"
}, Tk = { class: "pano-studio-node-shot" }, Dk = { class: "pano-studio-node-size" }, Lk = { class: "pano-studio-node-note" }, Rk = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Ee(), De("div", Ok, [
      Ne("div", {
        class: "pano-studio-node-bar",
        onPointerdown: r[1] || (r[1] = pt(() => {
        }, ["stop"])),
        onWheel: r[2] || (r[2] = pt(() => {
        }, ["stop"]))
      }, [
        Ne("div", Fk, [
          Ne("span", Tk, Xe(e.model.status.shot), 1),
          Ne("span", Dk, Xe(e.model.status.size), 1),
          Ne("span", Lk, Xe(e.model.status.note), 1)
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
          Be(xt, {
            icon: Je(je).fullscreen
          }, null, 8, ["icon"]),
          r[3] || (r[3] = Ne("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Ee(), bn(nl, { key: 0 })) : tt("", !0)
    ]));
  }
}, Vk = 2048, Tc = 4096, $k = (e) => Math.floor(e + 0.5), xs = (e) => Math.max(2, 2 * $k(e / 2));
function n0(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function zk(e) {
  const t = Eu(e, { camera: !0 });
  return t === Ch ? [] : Array.from({ length: t }, (n, r) => r);
}
function jk(e, t, n, r, i) {
  const o = n === "auto" && i == null;
  let s;
  n !== "auto" ? s = Number(n) : o ? s = Vk : s = Math.floor(i * 360 / r);
  const a = n0(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * r / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((m) => Ya(a, m).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [xs(c), xs(d)];
  if (Math.max(...u) <= Tc) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Tc / Math.max(c, d);
  return { width: xs(c * f), height: xs(d * f), reducedFrom: u, defaulted: o };
}
function r0(e, t, n, r) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${n}\0${r}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function Hk({ stateText: e = "", outputSize: t, coverage: n, bgColor: r = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === r0(e, t, String(n), r) } : null;
}
function Kk(e) {
  return e ? Vr(ln(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Gl = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Gk(e, { stateText: t = "", outputSize: n, coverage: r, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = n0(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${r}°` : "Camera · Perspective");
  let d;
  if (s && s.key === r0(t, n, String(r), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: n === "auto" && o === null };
  else {
    if (n === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Gl[a] };
    d = jk(e, zk(e), n, r, o);
  }
  const u = Gl[a] ? [Gl[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Tc} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function Wk() {
  let e = null;
  return (t, n) => {
    const r = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", r === void 0 ? "pending" : r, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Gk(n(), { ...t, bgWidth: r }));
  };
}
const Zf = 24;
function Uk(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Co(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function i0(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Dc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Co(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Co(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : i0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Bk(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => Co(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = r ? e.corners.findIndex((s) => Co(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Co(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : i0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function rd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function o0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function no(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Oe(n.x, -r, t.width + r),
    y: Oe(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function Yk(e) {
  const t = Bi(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * ct * 0.5),
    tanY: Math.tan(Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * ct * 0.5)
  };
}
function Yr(e, t, n) {
  return yu(ia(
    ia(e.centerDir, oa(e.right, t)),
    oa(e.up, n)
  ));
}
function id(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = Yk(e), r = no(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    Yr(n, -n.tanX, n.tanY),
    Yr(n, n.tanX, n.tanY),
    Yr(n, n.tanX, -n.tanY),
    Yr(n, -n.tanX, -n.tanY)
  ].map((f) => no(f, t)), o = Array.from({ length: 4 }, (f, m) => {
    const S = [];
    for (let g = 0; g <= 28; g += 1) {
      const v = g / 28;
      let y, j;
      m === 0 ? (y = -n.tanX + 2 * n.tanX * v, j = n.tanY) : m === 1 ? (y = n.tanX, j = n.tanY - 2 * n.tanY * v) : m === 2 ? (y = n.tanX - 2 * n.tanX * v, j = -n.tanY) : (y = -n.tanX, j = -n.tanY + 2 * n.tanY * v);
      const K = no(Yr(n, y, j), t);
      K && S.push({ x: K.x, y: K.y });
    }
    return S;
  }), s = no(Yr(n, 0, n.tanY), t), a = no(
    Yr(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * Zf,
      y: s.y + d / u * Zf
    },
    visible: !0
  };
}
function Qf(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: id(s, r) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = Dc(o.geometry, n);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = Dc(s.geometry, n);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function qk(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: It(Math.atan2(r.x, r.z) * Ht),
    pitch_deg: Math.asin(Oe(r.y, -1, 1)) * Ht
  };
}
function Xk(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function Jk(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * Ht;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Ms = null;
function od() {
  return Ms || (Ms = new Promise((e) => {
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
  }), Ms);
}
function Zk(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function Qk(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function ex({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = r.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, m, S) {
    if (!u || typeof S != "function" || m.settled) return;
    let g = r.get(u);
    g || (g = /* @__PURE__ */ new Map(), r.set(u, g));
    const v = g.get(f);
    if ((v == null ? void 0 : v.entry) === m) {
      v.callback = S;
      return;
    }
    o(v);
    const y = { owner: u, key: f, entry: m, callback: S };
    g.set(f, y), m.listeners.add(y);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && n.get(u.key) === u && n.delete(u.key), [...u.listeners].forEach((m) => {
      o(m);
      try {
        m.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(n.size <= u))
      for (const [f, m] of n) {
        if (n.size <= u) break;
        !m.settled || m.listeners.size > 0 || (m.image.onload = null, m.image.onerror = null, n.delete(f));
      }
  }
  function c(u, f, m, S = null) {
    const g = String(f || ""), v = String(m || "");
    if (!g || !v) return null;
    let y = n.get(g);
    if (y)
      n.delete(g), n.set(g, y);
    else {
      l(i - 1);
      const K = e || globalThis.Image;
      if (typeof K != "function") return null;
      const F = new K();
      y = { key: g, image: F, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(g, y), F.onload = () => a(y, !0), F.onerror = () => a(y, !1), F.src = v;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, g, y, S), y.image;
  }
  function d(u) {
    const f = r.get(u);
    f && ([...f.values()].forEach(o), r.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const co = /* @__PURE__ */ new WeakMap();
function s0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = co.get(e);
  r || (r = [], co.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = co.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && co.delete(e);
  };
}
function Or(e, ...t) {
  const n = co.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Ws = Object.freeze({
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
}), a0 = "PanoramaSuite.Editor.ViewControls", tx = {
  id: a0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Ws).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function nx(e) {
  return Object.hasOwn(Ws, e) ? Ws[e] : Ws.default;
}
function rx(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === n && !!a.alt === r);
  return (s == null ? void 0 : s.action) ?? null;
}
function ix(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const xa = "state_json";
function br(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function ox(e) {
  var s, a;
  const t = br(e, xa);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Eh(n, {
    coverage: (s = br(e, "coverage")) == null ? void 0 : s.value
  }), i = Xg(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function sd(e, t) {
  if (!e || Mn(e).coverageSyncInstalled) return;
  const n = br(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var a, l, c, d, u, f, m, S, g;
    const o = r ? r(...i) : void 0, s = Mn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = yr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = lt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (m = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || m.call(f, !0, !0), (g = (S = t == null ? void 0 : t.canvas) == null ? void 0 : S.setDirty) == null || g.call(S, !0, !0), o;
  }, Mn(e).coverageSyncInstalled = !0;
}
function sx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function ep(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function ax(e) {
  var d, u, f, m, S, g;
  if (!e) return;
  const t = br(e, "coverage"), n = br(e, "bg_color"), r = br(e, xa), i = br(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), s = String(n.value ?? "").trim(), a = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && sx(o) && (ep(s) || s === ""))) return;
  let c = "360";
  if (ep(s))
    try {
      c = String(vn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), n.value = o, (f = n.callback) == null || f.call(n, o), r.value = s, (m = r.callback) == null || m.call(r, s), i && (i.value = a, (S = i.callback) == null || S.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Us(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, s;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (s = r.parentEl) != null && s.style && (r.parentEl.style.display = "none")));
  });
}
function Lc(e, t, n) {
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
async function lx(e, { tolerateOperationFailure: t = !1 } = {}) {
  var r;
  const n = (r = Mn(e)) == null ? void 0 : r.pendingStickerUploads;
  if (n)
    for (; n.size > 0; ) {
      const i = Array.from(n.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        n.get(o) === s && n.delete(o);
      });
    }
}
function Mi(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const r = Mn(e), i = r.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
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
async function l0(e, t = {}) {
  var r, i, o;
  await lx(e, t);
  const n = Array.from(((r = Mn(e)) == null ? void 0 : r.flushers) ?? []);
  for (const s of n) await s();
  await ((o = (i = Uo(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function cx(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await l0(e), n ? n.apply(this, r) : this.value;
  };
}
function ux(e) {
  var n;
  const t = lt(e);
  try {
    (n = t.restore) == null || n.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function c0(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return gw(this), n;
  };
}
function dx(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Wl(e, {
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
    const f = `editor_btn|${n}`, m = lt(u);
    if (m.attached === !0 && m.mountKey === f) return;
    ux(u), sd(u, t), Us(u, xa);
    const S = br(u, xa);
    if (cx(u, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const v = S.callback;
      S.callback = (y) => {
        var K;
        const j = v ? v(y) : void 0;
        return (K = u.setDirtyCanvas) == null || K.call(u, !0, !1), j;
      };
    }
    if (n === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const v = br(u, "bg_color");
      !l && v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (g = v.callback) == null || g.call(v, "#00ff00")), Lc(u, r, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(u, "stickers")
      }), m.stickers && Us(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), m.attached = !0, m.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, Lc(u, r, () => i(u, "cutout")), s(u, {
      buttonText: r,
      onOpen: () => i(u, "cutout")
    }), m.cutout && Us(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), m.attached = !0, m.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const m = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && n === "PanoramaCutout" && ox(this), u === "onConfigure" && n === "PanoramaStickers" && !l && this.widgets && ax(this);
      const S = lt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && S && Or(this, "attach"), m;
    };
  }
  c0(e);
}
function fx(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return dx(this), r;
  }, c0(e);
}
function px(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: i
}) {
  const o = yr(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if (yr(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    sd(e, t);
    const c = (d = e) => n(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Lc(e, "Open Preview", () => c(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Us(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function mx({
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
    settings: [tx, h1],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Mf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Mf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Wl(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Wl(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Wl(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), sa(d) && fx(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      lt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      sd(l, e), sa(c) && px(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const hx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function En(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : hx.test(String(e.name || "")) : !1;
}
function ad(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => En(n)) : !1;
}
function gx(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (ad(l == null ? void 0 : l.dataTransfer)) {
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
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => En(u));
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
async function uo(e, t = {}) {
  var s, a, l, c;
  if (!En(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const d = await new Promise((u, f) => {
      const m = new n();
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
async function Zr(e, { fetchApi: t } = {}) {
  if (!En(e)) throw new TypeError("A supported image file is required.");
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
const tp = 100 * 1024 * 1024, yx = ["image/*", ...ph].join(",");
function Ma(e) {
  return !!e && mh(e.name);
}
function bx(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r.startsWith("model/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => En(n) || Ma(n)) : !1;
}
function u0(e) {
  const t = Number((e == null ? void 0 : e.size) || 0);
  return t <= tp ? null : `${e.name} is too large (${(t / 1024 / 1024).toFixed(1)} MB). The largest 3D file is ${tp / 1024 / 1024} MB.`;
}
async function vx(e, { fetchApi: t } = {}) {
  if (!Ma(e)) throw new TypeError("A 3D file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = u0(e);
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
  return Mo({ filename: s, subfolder: String((o == null ? void 0 : o.subfolder) ?? "3d"), storage: String((o == null ? void 0 : o.type) || "input") });
}
const np = /* @__PURE__ */ new WeakSet(), rp = /* @__PURE__ */ new WeakSet();
let ip = 0;
function Rc(e) {
  if (!e || typeof e != "object" || rp.has(e)) return e;
  const t = String(e.type || "preview");
  return ip += 1, e.type = `${t}:pano-${ip}`, rp.add(e), e;
}
function Pa(e) {
  if (!e || typeof e != "object" || np.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, np.add(e), e;
}
function d0(e, t) {
  var r, i;
  if (!t || ((i = (r = Pa(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Sx({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (l) => o || r || typeof e != "function" ? !1 : (i = l, r = e(() => {
    r = 0;
    const c = i;
    i = null, o || n == null || n(c);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: Nt } = Is;
iw((e) => kr(e.id));
ow(Xt);
const ld = ex(), { linkedVideoFile: f0 } = kg({ app: Nt, api: Xt });
function Vc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Is == null ? void 0 : Is.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const _x = "pano_suite.ui_settings.v1", wx = 120, kx = 2048;
function op() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(_x)) || "").trim();
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
function xx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ro(e) {
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
function Mx() {
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
function $c(e) {
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
function p0(e) {
  const t = $c(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Px(e, t, n) {
  p0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function zc(e) {
  var t, n;
  return (n = (t = lt(e)) == null ? void 0 : t.dom) != null && n.widget ? "dom" : "none";
}
function cd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function m0(e) {
  return sa(cd(e));
}
function sp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Nt == null ? void 0 : Nt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, r, n, i].join("|");
}
function h0(e) {
  const t = lt(e);
  if (t.controller) return t.controller;
  const n = {
    activeBackend: "none",
    attach(r = {}) {
      const i = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = zc(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = r.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof r.onOpen == "function" ? r.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Ul(e), bM(e, { ...r, mode: i }), this.activeBackend = zc(e);
    },
    rebind(r = {}) {
      const i = String(r.mode || lt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Ul(e), this.activeBackend = "none", this.attach({ ...r, mode: i });
    },
    teardown() {
      Ul(e), this.activeBackend = "none";
    }
  };
  return t.controller = n, n;
}
function Ul(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  jc.unregister(e);
  const n = lt(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = Vc();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Ux(e, c));
  } catch {
  }
  n.dom = null, n.noPreview = !1, n.bootMinHeightTimer && (clearTimeout(n.bootMinHeightTimer), n.bootMinHeightTimer = null), n.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function Nx(e, t = "#00ff00") {
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
function Ax(e) {
  var n, r;
  const t = (n = Mn(e)) == null ? void 0 : n.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = jn(e, "state_json")) == null ? void 0 : r.value) || "");
}
function nn(e) {
  var d, u;
  const t = Mn(e), n = Ax(e), r = t.liveStateVersion, i = String(((d = jn(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = jn(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof n == "string", a = s && Fg(e) && bt(e, "sticker-handoff") ? Hn(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === n && l.liveVersion === r && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? Ew(n, { backgroundColor: i, coverage: o, active: Rh(e) }, a) : Nx(n, i);
  return c.coverage = o, t.parsedState = { source: n, liveVersion: r, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function jn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Cx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function g0(e, t, n = null) {
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
  return !r && n != null && (r = Cx(e == null ? void 0 : e.graph, n)), r;
}
function Ix(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function y0(e, t = []) {
  const n = Ix(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    Tn.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function ap(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Na(e, t) {
  const n = ap(e), r = ap(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ex(e, t) {
  var n;
  return g0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function Ox(e, t = Tn) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = y0(e, t).map((a) => n.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = n.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return dw(e, s, Ex);
}
const jc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Xt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, m, S;
        if (!o) return;
        const s = Na(r, o == null ? void 0 : o.id);
        String(lt(o).mode || "") === "cutout" && !s || !s && ![...Ox(o)].some((g) => Na(r, g)) || (s && (dd(o), (c = (l = lt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !Sg(un(o).executedOutputs, r, n.output) && (v0(o), (u = (d = lt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (S = (m = o.graph) == null ? void 0 : m.setDirtyCanvas) == null || S.call(m, !0, !0), String(lt(o).mode || ""), String(lt(o).mode || ""), void 0));
      });
    }, Xt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Xt) != null && e.removeEventListener) || (Xt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Aa(e) {
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
  return typeof ((o = Xt) == null ? void 0 : o.apiURL) == "function" ? Xt.apiURL(i) : i;
}
function Fx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Tx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function Dx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function Lx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Fx(t)) return [t];
  const { filename: n, subfolder: r } = Tx(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => Aa({
    filename: n,
    subfolder: r,
    type: o
  }));
  return Dx([...i, t]);
}
function Rx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Aa({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function kr(e) {
  const t = Nt == null ? void 0 : Nt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Na(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (Na(s, i)) return t[s];
  }
  return null;
}
function Hn(e, t, n = null) {
  const r = n || kr(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
}
function on(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return on(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Aa({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = on(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Aa(e);
}
function qo(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Bs(e) {
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
function Vx(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function $x(e, t) {
  try {
    const n = un(e);
    n.ownOutputRev = Zk(n.ownOutputRev);
    const r = Vx(t);
    let i = "";
    for (const o of r)
      if (i = on(o), i) break;
    i ? (ud(String(i || ""), n.ownOutputRev), n.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Li(e) {
  var n;
  const t = un(e);
  t && ((n = t.ownOutputVideo) == null || n.player.destroy(), t.ownOutputVideo = null);
}
function zx(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!bt(e, "background"))
    return Li(e), null;
  const i = kr(r), o = Bu(i, t, on);
  if (!o)
    return Li(e), null;
  const s = un(e), a = ud(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Li(e);
  const d = fw({
    documentRef: document,
    src: a,
    onFrame: n
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function jx(e, t = []) {
  var c, d;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = y0(e, t).map((u) => n.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = n.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = n[u], m = e.graph ? e.getInputLink(u) : null;
    if ((m == null ? void 0 : m.origin_id) == null) continue;
    const S = m.origin_id, g = g0(e, u, S);
    if (!g) continue;
    const v = Number(m.origin_slot ?? 0), y = kr((g == null ? void 0 : g.id) ?? S), j = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (j.length) {
      const R = [];
      v >= 0 && v < j.length && R.push(j[v]), R.push(...j);
      for (const Z of R.filter((Y) => !zs(Y))) {
        const Y = on(Z);
        if (Y)
          return String((f == null ? void 0 : f.name) || ""), { src: `${Y}&pano_src=${Ic(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let K = [];
    try {
      K = typeof (Nt == null ? void 0 : Nt.getNodeImageUrls) == "function" ? Nt.getNodeImageUrls(g) || [] : [];
    } catch {
      K = [];
    }
    if (Array.isArray(K) && K.length) {
      const R = [];
      v >= 0 && v < K.length && R.push(K[v]), R.push(...K);
      for (const Z of R) {
        const Y = on(Z);
        if (Y)
          return String((f == null ? void 0 : f.name) || ""), { src: Y, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const F = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (F.length) {
      const R = [];
      v >= 0 && v < F.length && R.push(F[v]), R.push(...F);
      for (const Z of R) {
        const Y = on(Z);
        if (Y)
          return String((f == null ? void 0 : f.name) || ""), { src: Y, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const M = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (M) {
      let R = on(M.value);
      if (R && !R.includes("/") && !R.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (R = Xt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((f == null ? void 0 : f.name) || ""), { src: R, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = bt(e, "background") ? kr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = on(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Hx(e, t = [], n = {}) {
  const r = jx(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = Lx(i);
  if (!o.length) return null;
  const s = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1, a = un(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const m = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const S = o[f];
    u.pendingResolvedSrc = S, d.src = S;
  };
  return d.onload = () => {
    var S;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, d.onerror = (S) => {
    if (f + 1 < o.length) {
      m();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((S == null ? void 0 : S.type) || "error");
  }, m(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function b0(e, t = [], n = null, r = {}) {
  const i = Hx(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function v0(e) {
  e && (ld.disposeOwner(e), un(e).linkedImages.clear(), Li(e));
}
function Kx(e) {
  e && (un(e).linkedImages.clear(), Li(e));
}
function S0(e, t) {
  const n = lt(e);
  n.renderCache ?? (n.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = n.renderCache, i = String(t || "");
  return r.mode !== i && (r.mode = i, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function io(e, t, n = "") {
  var s;
  const r = S0(e, ((s = lt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < wx ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function lp(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), s = n / i, a = r / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Gx(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * n)), l = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), c = Math.max(Math.round(34 * n), a + Math.round(14 * n)), d = r + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Bl(e, t) {
  var r, i;
  const n = (i = (r = lt(e)) == null ? void 0 : r.dom) == null ? void 0 : i.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function Wx(e) {
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
function Ux(e, t) {
  return d0(e, t);
}
function Ca(e, t, n, r = null) {
  var f;
  if (!String(t || "")) return null;
  let o = Rx(n);
  if (!o && (r != null && r.external)) {
    if (!bt(e, "external-sticker")) return null;
    const m = kr(e == null ? void 0 : e.id), S = ((f = m == null ? void 0 : m.ui) == null ? void 0 : f.pano_sticker_input_images) || (m == null ? void 0 : m.pano_sticker_input_images) || [];
    for (const g of Array.isArray(S) ? S : [S])
      if (o = on(g), o) break;
  }
  if (!o) return null;
  const s = Hn(e, "pano_sticker_input_state_hash"), a = r != null && r.external ? String(s ?? "") : "", l = r != null && r.external ? un(e).ownOutputRev : 0, c = r != null && r.external ? ud(o, l) : o, d = Qk(o, a, l);
  return ld.get(e, d, c, (m, S) => {
    var g, v;
    S && (r != null && r.external && un(e).outputFromRun && Or(e, "image-loaded"), (v = (g = lt(e).dom) == null ? void 0 : g.requestDraw) == null || v.call(g));
  }) || null;
}
function Bx(e, t, n, r) {
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
  const i = qx(e, t, r);
  return i || null;
}
function Yx(e, t) {
  var u, f;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Nt == null ? void 0 : Nt.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (n - Number(o.left || 0)) / a - Number(l[0] || 0), d = (r - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function qx(e, t, n) {
  var i, o;
  const r = Yx(t, n || (Nt == null ? void 0 : Nt.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function cp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Xx(e, t, n) {
  const r = id(t, n);
  r.visible && rd(e, r.boundaryEdges, { selected: !1 });
}
function Jx(e, t, n) {
  const r = id(t, n);
  r.visible && (e.save(), rd(e, r.boundaryEdges, { selected: !0 }), o0(e, r, { accent: Uk(t) }), e.restore());
}
function Hc(e, t, n) {
  return sg(ba(lt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Ia(e) {
  var t;
  return ((t = lt(e).playback) == null ? void 0 : t.playback.frame) ?? Gi;
}
function Zx(e) {
  return [bt(e, "background") ? Bu(kr(e.id), ["pano_input_videos"], on) : "", f0(e, Tn)];
}
function Qx(e) {
  var o;
  if (!bt(e, "external-sticker")) return null;
  const t = kr(e.id), n = Hn(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(on), meta: n };
  const i = Bu(t, ["pano_sticker_input_videos"], on);
  return i ? { src: i, meta: n } : null;
}
function _0(e, t) {
  const n = kr(e.id), r = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(r) ? r : [];
}
function eM(e, t) {
  var a;
  const n = {}, r = (l) => _0(e, l), i = bt(e, "scene"), o = i ? r("pano_upstream_layers") : [], s = i ? Qu(r) : null;
  if (s) {
    n.bg = null;
    const { clip: l } = s;
    n.upstreamClip = l && Sh(l.clip, l.fps, t.timeline.fps);
    const c = r(s.metaKey)[0];
    c && typeof c == "object" && (n.upstreamMedia = { video: !0, frames: Number(c.frames), duration: Number(c.duration) });
  } else if (bt(e, "background")) {
    const l = r("pano_input_video_meta")[0];
    l && typeof l == "object" && (n.bg = { video: Ao(e, Tn), frames: Number(l.frames), duration: Number(l.duration) });
  }
  if (bt(e, "external-sticker") && (n.port = jo(r)), o.length) {
    const l = lt(e);
    if (((a = l.upstreamLength) == null ? void 0 : a.layers) !== o || l.upstreamLength.state !== t) {
      const d = Vg(o), u = zg(d, t.upstream, t.timeline.fps), f = (m) => jo((S) => mn(d[m].ui, S));
      l.upstreamLength = { layers: o, state: t, ends: Kg(u, t.upstream, /* @__PURE__ */ new Map(), f, t.timeline.fps) };
    }
    const [c] = r("pano_upstream_frames").length ? r("pano_upstream_frames") : r("pano_timeline_frames");
    n.upstream = { frames: Number(c) > 0 ? Number(c) : 0, ends: l.upstreamLength.ends };
  } else i && (n.sceneItems = r("pano_scene_files").length);
  return n;
}
function tM({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function w0(e, t) {
  var r;
  const n = lt(e);
  return ((r = n.scene) == null ? void 0 : r.state) !== t && (n.scene = { state: t, sceneState: cn({ ...t, painting: null }) }), n.scene.sceneState;
}
function nM(e, t) {
  const n = Di(e), r = !!n.bg_media;
  if (!r && !n.scene) return null;
  if (bt(e, "background")) {
    const o = Hn(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!r) return;
  if (Ao(e, Tn)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === f0(e, Tn) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = b0(e, Tn, null, { preserveReadyWhilePending: !1 });
  return qo(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function rM(e, t) {
  var i, o, s;
  const n = String(((i = jn(e, "output_size")) == null ? void 0 : i.value) ?? ""), r = ["background", "external-sticker", "scene"].every((a) => bt(e, a));
  return {
    stateText: String(((o = jn(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: n,
    coverage: nn(e).coverage,
    bgColor: String(((s = jn(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: n === "auto" ? nM(e, t) : null,
    run: r && Hn(e, "pano_output_size") || null,
    erp: Hn(e, "pano_output_erp") || null,
    frame: Hn(e, "pano_output_frame") || null
  };
}
const iM = 38;
function dd(e) {
  const t = un(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function oM(e, t) {
  const n = un(e).studioRunImage;
  return t && (n == null ? void 0 : n.src) === on(t.entry) ? n : null;
}
function sM(e, t) {
  const n = un(e), r = lt(e), i = t ? on(t.entry) : "";
  if (n.studioRunImage && n.studioRunImage.src !== i && dd(e), !i) return null;
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
      revision: Bs(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: Kk(t.entry.rotation)
    }
  } : null;
}
function aM(e, t) {
  var n;
  return t ? (n = oM(e, t)) != null && n.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function lM(e, t, n) {
  var l, c, d;
  const r = w0(e, t), i = (u) => {
    var m;
    if (u.visible === !1) return null;
    let f;
    if (t.version === 2) {
      f = Ca(e, u.id, ma(u.source), { external: u.source.kind === "port" });
      const S = lt(e).playback;
      if (u.source.kind === "port" && S) {
        const g = S.playback.stickerPicture(S.stickerStill, f), v = Cu(S.playback.stickerMedia, f);
        return g ? { media: g, revision: Bs(g), source: v } : null;
      }
    } else {
      const S = u.type === "external_image" || u.source_kind === "external_image", g = String(u.asset_id || "") || (S ? String(u.id || "") : "");
      f = Ca(e, g, (m = t.assets) == null ? void 0 : m[u.asset_id], { external: S });
    }
    return qo(f) ? { media: f, revision: Bs(f) } : null;
  }, o = v_(lt(e), t), s = bt(e, "scene") ? (l = Qu((u) => _0(e, u))) == null ? void 0 : l.color : null;
  return {
    background: ((c = lt(e).playback) == null ? void 0 : c.playback.backgroundShows) === !1 ? wh(s || String(((d = jn(e, "bg_color")) == null ? void 0 : d.value) || "#000000")) : qo(n) ? { media: n, revision: Bs(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: lg(r, Ia(e), t.stickers, { media: i, paintLayers: o })
  };
}
function cM(e, t, n, r = null) {
  var Y, ae, Se, ye, q, _e, pe;
  const i = lt(e), o = String(i.mode || "stickers");
  S0(e, o);
  const s = nn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (Se = (ae = (Y = i.cutout) == null ? void 0 : Y.session) == null ? void 0 : ae.refresh) == null || Se.call(ae)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (_e = (q = (ye = i.stickers) == null ? void 0 : ye.session) == null ? void 0 : q.refresh) == null || _e.call(q));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), r != null && r.frame) {
    n.release(), io(e, !1, "");
    const { width: de, height: te } = cp(r.frame), ge = iM, oe = Math.min(l / de, (c - ge) / te);
    d.drawImage(r.frame, (l - de * oe) / 2, ge + (c - ge - te * oe) / 2, de * oe, te * oe);
    return;
  }
  const f = (r == null ? void 0 : r.background) || null, m = (f == null ? void 0 : f.media) || (i.playback ? tM(i.playback) : zx(e, ["pano_input_videos"], () => {
    var de, te;
    return (te = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : te.call(de);
  })) || b0(
    e,
    Tn,
    () => {
      var de, te;
      return (te = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : te.call(de);
    },
    { preserveReadyWhilePending: !1 }
  ), S = qo(m);
  let g = null;
  const v = () => f ? { background: f, layers: [] } : lM(e, s, m), y = (de, te) => {
    g || (g = v());
    const ge = n.render({ width: de.w, height: de.h, camera: te, ...g });
    return ge && d.drawImage(ge.canvas, ge.x, ge.y, ge.width, ge.height, de.x, de.y, de.w, de.h), !!ge;
  };
  if (o === "cutout") {
    const de = Wx(s), te = cp(m), ge = de ? Oe(Rr(de).aspect, 0.1, 10) : S ? Oe(Number(te.width / te.height), 0.05, 20) : 1, oe = nd(u, ge);
    i.cutoutFrame = oe;
    let I = "none";
    const V = String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "");
    if (de)
      if (m && !S)
        I = "loading";
      else if (S) {
        const N = rk({ width: l, height: c }, oe, de);
        [
          !N.fallback || y(N.fallback.rect, No(N.fallback.shot)),
          y(N.rect, No(N.shot)),
          !N.fallback || y(oe, No(de))
        ].every(Boolean) || (I = "loading");
      } else
        I = "empty";
    else {
      const N = i.lastCutoutShot;
      N ? (i.view = qg(N, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), S ? y(u, ba(i.view, l, c)) || (I = "loading") : m ? I = "loading" : I = "empty";
    }
    S || n.release(), n.failed && I === "loading" && (I = "none"), de && (i.lastCutoutShot = { ...de }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(oe.x, oe.y, oe.w, oe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(oe.x + 0.5, oe.y + 0.5, Math.max(0, oe.w - 1), Math.max(0, oe.h - 1)), d.restore()), I === "loading" ? (Bl(e, !1), io(e, !0, V)) : I === "empty" ? (Bl(e, !0), io(e, !1, "")) : (Bl(e, !1), io(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let j = !1;
  (!m || S) && (g = v(), !g.background && !g.layers.length ? (n.release(), j = !0) : j = y(u, ba(i.view, l, c)));
  const K = !j && !n.failed;
  io(e, K, K ? String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "") : ""), K && Gx(d, u, lp(t, u));
  const F = Hc(e, l, c);
  !m && j && uM(d, F, lp(t, u));
  const M = String(((pe = s == null ? void 0 : s.active) == null ? void 0 : pe.selected_sticker_id) || ""), R = Oc(s, Ia(e)), Z = j && e.__panoStudio !== !0 ? R.find((de) => String((de == null ? void 0 : de.id) || "") === M && (de == null ? void 0 : de.visible) !== !1) : null;
  j && !f && R.filter((de) => de !== Z && (de == null ? void 0 : de.visible) !== !1 && (de.external || de.source_kind === "external_image")).filter((de) => !qo(Ca(e, de.id, null, { external: !0 }))).forEach((de) => Xx(d, de, F)), Z && Jx(d, Z, F);
}
function up(e, t, n, r, i = 1) {
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
function uM(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(gn(c, a));
    up(e, l, t, a === 0 ? i : r, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(gn(a, c));
    up(e, l, t, r, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: gn(0, 0) },
    { name: "Right", dir: gn(90, 0) },
    { name: "Back", dir: gn(180, 0) },
    { name: "Left", dir: gn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * n));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * n);
  }), e.restore();
}
function Kc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function dM(e, t, n = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function Nn(e, t) {
  return dM(e, t) ? !1 : (Kc(e), !0);
}
function dp() {
  var n;
  const e = (n = Nt == null ? void 0 : Nt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function fM(e) {
  var n;
  if (!e) return;
  const t = (n = Nt == null ? void 0 : Nt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function pM(e, t = 360, n = 260) {
  const r = lt(e);
  if (!r || r.userResized === !0 || r.standaloneBootSized === !0 || !p0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, r.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function mM(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0)), o = lt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, n == null || n(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function fp(e, t = null, n = 0, r = 0, i = !0) {
  const o = Math.max(0, Number(r || 0)), s = lt(e);
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
      s.userResized = !0, t == null || t(), i && hM(e, 180, t);
    }
  };
}
function hM(e, t = 180, n = null) {
  if (!e) return;
  const r = lt(e);
  r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.resizeSettleTimer = setTimeout(() => {
    var i;
    r.resizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function fo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const gM = /* @__PURE__ */ new WeakMap();
function k0(e, t) {
  return Sg(gM, e, t) ? !1 : ($x(e, t), v0(e), fo(e), !0);
}
async function yM(e) {
  var n, r;
  const t = await cw(e, Nt, Xt);
  t && (k0(e, t), (r = (n = lt(e).dom) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function bM(e, t = {}) {
  var Pe;
  const n = t.__allowStandalone === !0, r = lt(e), i = un(e), o = Mn(e), s = m0(e);
  if (s && !n) {
    cd(e);
    return;
  }
  s && pM(e), r.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = r.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = r.mode !== "cutout";
  if (r.noPreview = t.noPreview === !0, r.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: sp(e)
  }.signature || sp(e), zc(e), e == null || e.id, r.mode, e.addDOMWidget, $c(e), (Pe = r.dom) != null && Pe.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, m = f ? 0 : 56, S = f ? 0 : Qw, g = document.createElement("div");
  if (Mx(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    S > 0 ? `min-height:${S}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const ee = Pa(Rc(
      e.addDOMWidget(Vc(), "preview", g, fp(e, null))
    ));
    fo(e), r.dom = { widget: ee, root: g, requestDraw: () => {
    } };
    return;
  }
  const v = document.createElement("div");
  v.className = "pano-node-frame", v.style.cssText = [
    "position:absolute",
    "inset:0",
    "overflow:hidden"
  ].join(";");
  const y = Kt({ label: "node.surface" });
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
  const j = document.createElement("div");
  j.style.cssText = [
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
  ].join(";"), j.textContent = "Connect ERP image", v.appendChild(y), v.appendChild(j), g.appendChild(v);
  const K = Km(g), F = document.createElement("div");
  F && (F.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", F.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(F)), Px(e, 120, 120), fo(e);
  let M = null;
  try {
    mM(e, m, () => {
      var ee, ke;
      return (ke = (ee = r.dom) == null ? void 0 : ee.requestDraw) == null ? void 0 : ke.call(ee);
    }), M = Pa(Rc(e.addDOMWidget(
      Vc(),
      "preview",
      g,
      fp(
        e,
        () => {
          var ee, ke;
          return (ke = (ee = r.dom) == null ? void 0 : ee.requestDraw) == null ? void 0 : ke.call(ee);
        },
        m,
        S,
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
  }, Z = Wk(), Y = () => {
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(p)));
  }, ae = fg(Y), Se = /* @__PURE__ */ Ui(a ? {
    ...Dg(nn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Bg(nn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ee) => ({ value: ee, label: ee }))
  });
  let ye = null;
  if (a && e.__panoSceneStateV2) {
    const [ee, ke] = [0, 1].map(() => {
      const $e = ns(document, "node.playback");
      return $e.playsInline = !0, $e.preload = "auto", $e.crossOrigin = "anonymous", $e.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", v.appendChild($e), $e;
    }), Ae = Kt({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Ie = Kt({ label: "node.port-still" });
    Ie.__panoFrameIdx = 0;
    const Te = Rw({
      video: ee,
      stickerVideo: ke,
      createImage: ($e, Ue) => {
        const it = new Image();
        return it.onload = Ue, it.onerror = Ue, it.src = $e, it;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: ($e) => requestAnimationFrame($e),
        cancelFrame: ($e) => cancelAnimationFrame($e)
      },
      readState: () => nn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: Y,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(ee.videoWidth > 0 && ee.videoHeight > 0)) return;
        const $e = Math.min(1, kx / ee.videoWidth);
        Ae.width = Math.round(ee.videoWidth * $e), Ae.height = Math.round(ee.videoHeight * $e), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(ee, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, Y();
      },
      onStickerCapture: () => {
        var $e;
        ke.videoWidth > 0 && ke.videoHeight > 0 && (Ie.width = ke.videoWidth, Ie.height = ke.videoHeight, ($e = Ie.getContext("2d")) == null || $e.drawImage(ke, 0, 0), Ie.__panoFrameIdx += 1, Y());
      },
      onChange: () => {
        Se.playing = Te.playing, Y();
      }
    });
    ye = { playback: Te, video: ee, still: Ae, stickerVideo: ke, stickerStill: Ie, stickerSource: "" }, r.playback = ye;
  }
  const q = () => {
    var at;
    const { playback: ee, still: ke, stickerStill: Ae } = ye, Ie = Gs(v, !!((at = e.flags) != null && at.collapsed), jl(e)), Te = ee.source, $e = Ie ? Qx(e) : null, Ue = nn(e), it = ee.follow({
      shown: Ie,
      sources: Ie ? Zx(e) : [],
      state: Ue,
      sticker: $e,
      media: Ie ? eM(e, Ue) : {}
    });
    (($e == null ? void 0 : $e.src) || "") !== ye.stickerSource && (ye.stickerSource = ($e == null ? void 0 : $e.src) || "", Qr(Ae)), ee.source !== Te && (Qr(ke), ke.__panoFrameIdx = 0), Se.playable = it, Se.playing = ee.playing;
  }, _e = () => {
    var ke, Ae;
    const ee = ((ke = i.ownOutputVideo) == null ? void 0 : ke.player) ?? null;
    ee && !Gs(v, !!((Ae = e.flags) != null && Ae.collapsed)) && ee.pause(), a && (Se.playable = !!ee && !ee.failed(), Se.playing = !!(ee != null && ee.playing));
  }, pe = () => {
    var ee;
    ye == null || ye.playback.pause(), (ee = i.ownOutputVideo) == null || ee.player.pause();
  };
  let de = null;
  const te = (a ? Dw : ok)({
    readState: () => nn(e),
    publishLiveState: (ee) => {
      ee ? (de = ee, o.liveState = ee) : (o.liveState === de && (o.liveState = null), de = null), o.liveStateVersion += 1, o.parsedState = null, Y();
    },
    commitState: (ee) => {
      var Ie, Te, $e, Ue;
      const ke = jn(e, "state_json");
      if (!ke) return;
      Vh(e, ee.active);
      const Ae = $h(e, ee, String(ke.value ?? ""));
      Ae !== null && (ke.value = Ae, (Ie = ke.callback) == null || Ie.call(ke, Ae), o.parsedState = null, (Te = e.setDirtyCanvas) == null || Te.call(e, !0, !0), (Ue = ($e = e.graph) == null ? void 0 : $e.setDirtyCanvas) == null || Ue.call($e, !0, !0));
    },
    onChange: (ee) => Object.assign(Se, ee)
  }), oe = a ? s0(e, (ee = "sync", ke = null) => {
    var Vt;
    if (!a || !e.graph || !te || te.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const zt = bt(e, "external-sticker");
      return te.apply({
        type: "sync-port",
        value: Og(e, {
          pose: zt ? Hn(e, "pano_sticker_input_pose", ke) : null,
          handoff: bt(e, "sticker-handoff") ? Hn(e, "pano_sticker_handoff", ke) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((zt) => String((zt == null ? void 0 : zt.name) || "") === "sticker_image") : -1, Ie = Ae >= 0 ? ((Vt = e.getInputLink(Ae)) == null ? void 0 : Vt.id) ?? null : null;
    if (Ie == null)
      return te.apply({ type: "sync-external", value: { connected: !1 } });
    if (!bt(e, "external-sticker")) return !1;
    const Te = Hn(e, "pano_sticker_input_pose", ke), $e = Array.isArray(Te) ? Te[0] : Te, Ue = String(Hn(e, "pano_sticker_input_state_hash", ke) ?? ""), it = r.view || { yaw: 0, pitch: 0 }, at = nn(e), St = (Array.isArray(at == null ? void 0 : at.stickers) ? at.stickers : []).find((zt) => String((zt == null ? void 0 : zt.id) || "") === "sticker_image_1"), ut = Ca(e, "sticker_image_1", null, { external: !0 }), Et = $e && typeof $e == "object" ? $e : St || { yaw_deg: it.yaw, pitch_deg: it.pitch, hFOV_deg: 30, rot_deg: 0 };
    return te.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ie,
        stateHash: Ue,
        pose: Et,
        imageWidth: Number((ut == null ? void 0 : ut.naturalWidth) || (ut == null ? void 0 : ut.width) || 0),
        imageHeight: Number((ut == null ? void 0 : ut.naturalHeight) || (ut == null ? void 0 : ut.height) || 0)
      }
    });
  }) : () => {
  };
  let I = 0;
  const V = async (ee) => {
    if (!a || !te || !En(ee)) return !1;
    pe();
    const ke = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Ie = { ...r.view || { yaw: 0, pitch: 0 } };
    I += 1, Se.importing = !0;
    const Te = Mi(e, `add:${ke}`, async () => {
      const $e = await uo(ee), Ue = await Zr(ee, {
        fetchApi: (it, at) => Xt.fetchApi(it, at)
      });
      return P(), te.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: ke,
          asset: Ue,
          imageWidth: $e.width,
          imageHeight: $e.height,
          yaw_deg: Number(Ie.yaw || 0),
          pitch_deg: Number(Ie.pitch || 0)
        }
      });
    });
    try {
      return await Te;
    } catch {
      return !1;
    } finally {
      I = Math.max(0, I - 1), Se.importing = I > 0, Y();
    }
  };
  let N = null, fe = null, C = null, O = !1;
  const _ = () => {
    var ee;
    return C && (clearTimeout(C), C = null), O ? (O = !1, ((ee = te == null ? void 0 : te.commitGesture) == null ? void 0 : ee.call(te)) ?? !1) : !1;
  }, P = () => {
    var Ie, Te, $e;
    const ee = _(), ke = (N == null ? void 0 : N.pointerId) ?? (fe == null ? void 0 : fe.pointerId);
    if (N = null, fe = null, ke != null) {
      try {
        (Ie = y.hasPointerCapture) != null && Ie.call(y, ke) && ((Te = y.releasePointerCapture) == null || Te.call(y, ke));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = (($e = te == null ? void 0 : te.commitGesture) == null ? void 0 : $e.call(te)) ?? !1;
    return ee || Ae;
  }, ce = () => {
    var Ie, Te, $e;
    const ee = _(), ke = N == null ? void 0 : N.pointerId;
    if (N = null, ke != null) {
      try {
        (Ie = y.hasPointerCapture) != null && Ie.call(y, ke) && ((Te = y.releasePointerCapture) == null || Te.call(y, ke));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = (($e = te == null ? void 0 : te.cancelGesture) == null ? void 0 : $e.call(te)) ?? !1;
    return ee || Ae;
  }, be = () => P();
  te && o.flushers.add(be);
  let D = null, b = !1;
  if (F && te)
    try {
      od(), D = mu(l ? Rk : a ? Ek : kk, {
        model: Se,
        onAction: (ee) => {
          var Ie, Te, $e;
          if ((ee == null ? void 0 : ee.type) === "toggle-playback") {
            P(), ye ? ye.playback.toggle() : (Ie = i.ownOutputVideo) == null || Ie.player.toggle(), Y();
            return;
          }
          if (pe(), (ee == null ? void 0 : ee.type) === "open-editor") {
            P(), a || (Se.aspectOpen = !1), (Te = r.openEditor) == null || Te.call(r);
            return;
          }
          if (a) {
            if ((ee == null ? void 0 : ee.type) === "add-image-file") {
              V(ee.file);
              return;
            }
            te.apply(ee) && Y();
            return;
          }
          if ((ee == null ? void 0 : ee.type) === "toggle-aspect") {
            Se.aspectOpen = !Se.aspectOpen;
            return;
          }
          if ((ee == null ? void 0 : ee.type) === "close-aspect") {
            Se.aspectOpen = !1;
            return;
          }
          let ke = ee;
          if ((ee == null ? void 0 : ee.type) === "add-frame") {
            const Ue = r.view || { yaw: 0, pitch: 0, fov: 100 };
            ke = {
              ...ee,
              ...tk(Ue, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((ee == null ? void 0 : ee.type) === "delete-frame") {
            const Ue = si(nn(e));
            Ue && (r.view = qg(Ue, {
              width: y.width,
              height: y.height
            }));
          }
          const Ae = (($e = r.cutoutFrame) == null ? void 0 : $e.safeRect) || null;
          Se.aspectOpen = !1, te.apply({ ...ke, safeRect: Ae }) && Y();
        }
      }), D.mount(F), b = !0;
    } catch {
      D = null, b = !1;
    }
  const W = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ye && q(), Y();
  }) : null;
  W == null || W.observe(v);
  const p = (ee) => {
    var Ae, Ie, Te;
    R.raf = 0, R.inTick = !0;
    let ke = !1;
    try {
      if (ke = h.stepInertia(ee), R.needsDraw || ke) {
        R.needsDraw = !1, ye ? q() : _e();
        const $e = l ? rM(e, ye) : null, Ue = $e ? Hk($e) : null, it = () => w0(e, nn(e)), at = $e && Gs(v, !!((Ae = e.flags) != null && Ae.collapsed), jl(e)) ? sM(e, Ue) : null;
        if (!((Ie = e.flags) != null && Ie.collapsed) && !jl(e) ? cM(e, y, ae, at) : ae.release(), Se.viewUnavailable = ae.failed, l) {
          const St = Z({ ...$e, display: aM(e, Ue) }, it);
          St && (Se.status = St);
        }
      }
    } finally {
      R.inTick = !1;
    }
    (ke || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(p)), xx() && (!r.debugLastTs || ee - r.debugLastTs > 1200) && (r.debugLastTs = ee, r.mode, $c(e), ro(g), ro(v), ro(y), ro(g.parentElement), ro((Te = g.parentElement) == null ? void 0 : Te.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, h = gu({
    getView: () => (r.view || (r.view = { yaw: 0, pitch: 0, fov: 100 }), r.view),
    setView: (ee) => {
      r.view = ee;
    },
    getViewportSize: () => {
      const ee = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(ee.width || y.clientWidth || 0)),
        h: Math.max(1, Number(ee.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const ee = op();
      return {
        x: ee.invert_view_x ? -1 : 1,
        y: ee.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      Y();
    }
  }), k = a ? v : g, E = (ee) => {
    const ke = y.getBoundingClientRect();
    return {
      x: (Number(ee.clientX) - ke.left) * (y.width / Math.max(1, ke.width)),
      y: (Number(ee.clientY) - ke.top) * (y.height / Math.max(1, ke.height))
    };
  }, $ = (ee) => {
    var Ie, Te;
    if (!a || l || !d) return;
    const ke = nn(e), Ae = Qf(
      Oc(ke, Ia(e)),
      String(((Ie = ke == null ? void 0 : ke.active) == null ? void 0 : Ie.selected_sticker_id) || ""),
      E(ee),
      Hc(e, y.width, y.height)
    );
    if (!Ae) {
      y.style.cursor = "grab";
      return;
    }
    if (((Te = Ae.item) == null ? void 0 : Te.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Ae.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (ee) => {
    var it, at, St, ut, Et, Ye, Vt, zt, en, Sn, Gt;
    if (!Nn(ee, k) || ee.button !== 0) return;
    if (!a) {
      const Ot = si(nn(e)), Re = r.cutoutFrame;
      if (!Ot) {
        (it = g.focus) == null || it.call(g, { preventScroll: !0 }), (at = y.setPointerCapture) == null || at.call(y, ee.pointerId), y.style.cursor = "grabbing", h.startDrag(ee.clientX, ee.clientY, ee.pointerId);
        return;
      }
      if (Ot.locked === !0 || !Re || !te) return;
      const He = E(ee);
      let Ke;
      if (ee.shiftKey) {
        const Mt = Jg({
          frame: Re,
          point: He,
          startRollDeg: Number(Ot.roll_deg ?? Ot.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Mt) return;
        Ke = { kind: "roll", pointerId: ee.pointerId, rollGesture: Mt };
      } else {
        const Mt = ((St = nn(e)) == null ? void 0 : St.ui_settings) || op();
        Ke = {
          kind: "pan",
          pointerId: ee.pointerId,
          startPoint: He,
          startShot: { ...Ot },
          focalPx: ci(Re, Ot),
          invertX: Mt.invert_view_x === !0,
          invertY: Mt.invert_view_y === !0
        };
      }
      P(), (ut = g.focus) == null || ut.call(g, { preventScroll: !0 }), (Et = y.setPointerCapture) == null || Et.call(y, ee.pointerId), y.style.cursor = "grabbing", te.beginGesture(), N = Ke;
      return;
    }
    if (!d) return;
    const ke = E(ee), Ae = nn(e), Ie = String(((Ye = Ae == null ? void 0 : Ae.active) == null ? void 0 : Ye.selected_sticker_id) || ""), Te = Hc(e, y.width, y.height);
    (Vt = g.focus) == null || Vt.call(g, { preventScroll: !0 });
    const $e = () => Qf(Oc(Ae, Ia(e)), Ie, ke, Te);
    let Ue = l ? null : $e();
    if (Ue && (ye != null && ye.playback.playing) && (pe(), Ue = $e()), Ue && te) {
      if (h.stopMotion(), P(), String(((zt = Ue.item) == null ? void 0 : zt.id) || "") !== Ie && te.apply({ type: "select-sticker", id: Ue.item.id }), ((en = Ue.item) == null ? void 0 : en.locked) === !0) {
        Y();
        return;
      }
      const Ot = ke, Re = Ue.geometry.center;
      fe = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: ee.pointerId,
        startPoint: Ot,
        startCenter: { ...Re },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(Ot.x - Re.x, Ot.y - Re.y)),
        startAngle: Math.atan2(Ot.y - Re.y, Ot.x - Re.x),
        projection: Te
      }, te.beginGesture(), (Sn = y.setPointerCapture) == null || Sn.call(y, ee.pointerId), y.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, Y();
      return;
    }
    (Gt = y.setPointerCapture) == null || Gt.call(y, ee.pointerId), y.style.cursor = "grabbing", h.startDrag(ee.clientX, ee.clientY, ee.pointerId);
  }), y.addEventListener("pointermove", (ee) => {
    if (!a) {
      if (!N) {
        if (!h.state.drag.active) return;
        Nn(ee, k), h.moveDrag(ee.clientX, ee.clientY, "pano");
        return;
      }
      if (N.pointerId !== ee.pointerId || !te) return;
      if (Nn(ee, k), N.kind === "pan") {
        const Ae = E(ee);
        te.updateGesture({
          type: "pan-camera",
          startShot: N.startShot,
          dx: Ae.x - N.startPoint.x,
          dy: Ae.y - N.startPoint.y,
          focalPx: N.focalPx,
          invertX: N.invertX,
          invertY: N.invertY
        });
        return;
      }
      const ke = Zg(N.rollGesture, E(ee), ee);
      if (!ke) return;
      N.rollGesture = ke.gesture, te.updateGesture({ type: "set-roll", value: ke.rollDeg });
      return;
    }
    if (!fe && !h.state.drag.active) {
      $(ee);
      return;
    }
    if (fe) {
      if (fe.pointerId !== ee.pointerId || !te) return;
      Nn(ee, k);
      const ke = E(ee);
      let Ae = fe.startSticker;
      if (fe.kind === "move")
        Ae = qk(
          fe.startSticker,
          {
            x: fe.startCenter.x + ke.x - fe.startPoint.x,
            y: fe.startCenter.y + ke.y - fe.startPoint.y
          },
          fe.projection
        );
      else if (fe.kind === "scale") {
        const Ie = Math.hypot(ke.x - fe.startCenter.x, ke.y - fe.startCenter.y);
        Ae = Xk(fe.startSticker, fe.startDistance, Ie);
      } else if (fe.kind === "rotate") {
        const Ie = Math.atan2(ke.y - fe.startCenter.y, ke.x - fe.startCenter.x);
        Ae = Jk(fe.startSticker, fe.startAngle, Ie, ee.shiftKey === !0);
      }
      te.updateGesture({ type: "set-transform", value: Ae }), Y();
      return;
    }
    !d || !h.state.drag.active || (Nn(ee, k), h.moveDrag(ee.clientX, ee.clientY, "pano"));
  });
  const X = () => {
    var ke, Ae;
    if (!N && !fe) {
      if (!h.state.drag.active) return;
      h.endDrag(), y.style.cursor = "grab", Y();
      return;
    }
    if (!te) return;
    const ee = (N == null ? void 0 : N.pointerId) ?? (fe == null ? void 0 : fe.pointerId);
    N = null, fe = null;
    try {
      (ke = y.hasPointerCapture) != null && ke.call(y, ee) && ((Ae = y.releasePointerCapture) == null || Ae.call(y, ee));
    } catch {
    }
    te.cancelGesture(), y.style.cursor = "grab", Y();
  }, le = (ee, ke = !1) => {
    var Ae, Ie, Te, $e;
    if (!a) {
      if (!N) {
        if (!h.state.drag.active) return;
        Nn(ee, k), (Ae = y.releasePointerCapture) == null || Ae.call(y, ee.pointerId), y.style.cursor = "grab", h.endDrag(), Y();
        return;
      }
      if (N.pointerId !== ee.pointerId || !te) return;
      Nn(ee, k), N = null, (Ie = y.releasePointerCapture) == null || Ie.call(y, ee.pointerId), y.style.cursor = "grab", ke ? te.cancelGesture() : te.commitGesture(), $(ee), Y();
      return;
    }
    if (fe) {
      if (fe.pointerId !== ee.pointerId || !te) return;
      Nn(ee, k), fe = null, (Te = y.releasePointerCapture) == null || Te.call(y, ee.pointerId), y.style.cursor = "grab", ke ? te.cancelGesture() : te.commitGesture(), Y();
      return;
    }
    !d || !h.state.drag.active || (Nn(ee, k), ($e = y.releasePointerCapture) == null || $e.call(y, ee.pointerId), y.style.cursor = "grab", h.endDrag(), Y());
  };
  y.addEventListener("pointerup", le), y.addEventListener("pointercancel", (ee) => le(ee, !0)), y.addEventListener("lostpointercapture", X), y.addEventListener("pointerleave", (ee) => {
    !a && N || fe || h.state.drag.active && le(ee);
  });
  const L = (ee) => {
    const ke = document.activeElement;
    if (ke !== g && !g.contains(ke)) return;
    if (ee.key === "Escape" && (N || fe) && te) {
      X(), Kc(ee);
      return;
    }
    if (!a || l || ee.key !== "Delete" && ee.key !== "Backspace" || !te) return;
    const Ae = ee.target, Ie = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Ie === "INPUT" || Ie === "TEXTAREA" || Ae != null && Ae.isContentEditable || Se.canDelete === !0 && (pe(), P(), te.apply({ type: "delete-selected" }) && Y(), Kc(ee));
  };
  window.addEventListener("keydown", L, !0);
  const re = Sx({
    requestFrame: (ee) => requestAnimationFrame(ee),
    cancelFrame: (ee) => cancelAnimationFrame(ee),
    restore: (ee) => fM(ee)
  }), x = (ee) => {
    var Ae, Ie, Te, $e, Ue, it;
    if (!Nn(ee, k)) return;
    if (!a) {
      const at = si(nn(e));
      if (at && at.locked !== !0 && te) {
        const St = ra(ee);
        St !== 0 && (O || (P(), te.beginGesture(), O = !0), te.updateGesture({
          type: "step-fov",
          direction: St
        }) ? (C && clearTimeout(C), C = setTimeout(_, 180), Y()) : te.hasGestureChanges() || (te.cancelGesture(), O = !1));
      } else if (!at) {
        const St = dp();
        h.applyWheelEvent(ee) && Y(), re.schedule(St);
      }
      (Ae = ee.preventDefault) == null || Ae.call(ee), (Ie = ee.stopPropagation) == null || Ie.call(ee), (Te = ee.stopImmediatePropagation) == null || Te.call(ee);
      return;
    }
    if (!d) return;
    const ke = dp();
    h.applyWheelEvent(ee) && Y(), ($e = ee.preventDefault) == null || $e.call(ee), (Ue = ee.stopPropagation) == null || Ue.call(ee), (it = ee.stopImmediatePropagation) == null || it.call(ee), re.schedule(ke);
  }, U = a ? [v, y] : [v];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ee) => {
    U.forEach((ke) => ke.addEventListener(ee, x, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ee) => {
    y.addEventListener(ee, (ke) => Nn(ke, k)), v.addEventListener(ee, (ke) => Nn(ke, k));
  });
  const ie = jn(e, "state_json");
  let we = null, Me = null;
  ie && !ie.__panoPreviewPatchedCb && (we = ie.callback, Me = (ee) => {
    const ke = we ? we(ee) : void 0;
    return Y(), ke;
  }, ie.callback = Me, ie.__panoPreviewPatchedCb = Me);
  const Ce = jn(e, "bg_color");
  let me = null, ue = null;
  Ce && !Ce.__panoPreviewPatchedCb && (me = Ce.callback, ue = (ee) => {
    const ke = me ? me(ee) : void 0;
    return Y(), ke;
  }, Ce.callback = ue, Ce.__panoPreviewPatchedCb = ue);
  const A = l ? jn(e, "output_size") : null, J = A == null ? void 0 : A.callback, H = A ? (ee) => {
    const ke = J ? J(ee) : void 0;
    return Y(), ke;
  } : null;
  A && (A.callback = H);
  const z = e.onRemoved, T = e.onResize, B = e.onExecuted, G = e.onDragOver, w = e.onDragDrop;
  let ne = null;
  const se = () => {
    a && (Se.dropActive = !0, ne && clearTimeout(ne), ne = setTimeout(() => {
      ne = null, Se.dropActive = !1;
    }, 140));
  }, ve = c ? function(ee) {
    return (G ? G.apply(this, arguments) : !1) === !0 ? !0 : ad(ee == null ? void 0 : ee.dataTransfer) ? (se(), !0) : !1;
  } : null, he = c ? function(ee) {
    var Ie;
    if ((w ? w.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Ie = ee == null ? void 0 : ee.dataTransfer) == null ? void 0 : Ie.files) || []).find((Te) => En(Te));
    return Ae ? (ne && clearTimeout(ne), ne = null, Se.dropActive = !1, V(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = ve, e.onDragDrop = he);
  const xe = c ? gx(g, {
    onActive: (ee) => {
      if (ee) {
        se();
        return;
      }
      ne && clearTimeout(ne), ne = null, Se.dropActive = !1;
    },
    onDrop: (ee) => {
      V(ee);
    }
  }) : () => {
  }, Fe = function(ee) {
    i.outputFromRun = !0;
    const ke = k0(e, ee);
    Or(e, ke ? "executed" : "sync", ee), Y();
    const Ae = B ? B.apply(this, arguments) : void 0;
    return fo(e), Ae;
  };
  e.onExecuted = Fe;
  const Le = e.onConnectionsChange, ze = function(ee, ke) {
    const Ae = Hf(e, ee, ke, [...Wu, ...Uu]), Ie = Hf(e, ee, ke, Tn), Te = arguments, $e = Le ? Le.apply(this, Te) : void 0, Ue = () => {
      R.destroyed || (Ie && Kx(e), Ae && Or(e, "connection-change"), fo(e), Y());
    };
    return Ue(), queueMicrotask(Ue), $e;
  };
  e.onConnectionsChange = ze;
  const We = function() {
    const ee = T ? T.apply(this, arguments) : void 0;
    return lt(this).userResized = !0, Y(), ee;
  };
  e.onResize = We;
  const Ge = function() {
    return Q(), jc.unregister(this), z ? z.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ge;
  const Q = () => {
    var ee, ke, Ae, Ie, Te, $e, Ue;
    R.destroyed = !0, (ee = W == null ? void 0 : W.disconnect) == null || ee.call(W), a ? P() : ce(), y.removeEventListener("lostpointercapture", X), xe(), K(), window.removeEventListener("keydown", L, !0), o.flushers.delete(be), (ke = te == null ? void 0 : te.destroy) == null || ke.call(te), (Ae = D == null ? void 0 : D.unmount) == null || Ae.call(D), ye && (ye.playback.dispose(), ye.video.remove(), ye.stickerVideo.remove(), Qr(ye.still), Qr(ye.stickerStill), r.playback === ye && (r.playback = null)), ae.dispose(), r.scene = null, (Te = (Ie = r.rasterCache) == null ? void 0 : Ie.dispose) == null || Te.call(Ie), r.rasterCache = null, r.rasterReady = null, r.paintEngine = null, r.paintState = null, r.paintRevision = null, oe(), re.dispose(), ne && clearTimeout(ne), ne = null, ld.disposeOwner(e), Li(e), dd(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, (($e = r.cutout) == null ? void 0 : $e.session) === te && (r.cutout = null), ((Ue = r.stickers) == null ? void 0 : Ue.session) === te && (r.stickers = null), r.cutoutState = null, r.stickersState = null, r.cutoutFrame = null, r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.dom = null, r.restore = null, e.onResize === We && (e.onResize = T), e.onExecuted === Fe && (e.onExecuted = B), e.onConnectionsChange === ze && (e.onConnectionsChange = Le), Me && (ie == null ? void 0 : ie.callback) === Me && (ie.callback = we), Me && (ie == null ? void 0 : ie.__panoPreviewPatchedCb) === Me && delete ie.__panoPreviewPatchedCb, ue && (Ce == null ? void 0 : Ce.callback) === ue && (Ce.callback = me), ue && (Ce == null ? void 0 : Ce.__panoPreviewPatchedCb) === ue && delete Ce.__panoPreviewPatchedCb, H && A.callback === H && (A.callback = J), e.onDragOver === ve && (e.onDragOver = G), e.onDragDrop === he && (e.onDragDrop = w), e.onRemoved === Ge && (e.onRemoved = z);
  };
  r.restore = Q, r.cutout = te && b && !a ? { session: te, model: Se } : null, r.stickers = te && b && a ? { session: te, model: Se } : null, r.dom = {
    widget: M,
    root: g,
    canvas: y,
    requestDraw: Y,
    state: R,
    emptyHintEl: j,
    nodeSurface: r.cutout
  }, jc.register(e), e.graph && Or(e, "attach"), Y();
}
function pp(e, t = {}) {
  h0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function mp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (m0(e) && !n) {
    cd(e);
    return;
  }
  h0(e).attach(t);
}
function vM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function SM(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(n), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let m = f > 0 ? Math.min(1, u / f) : 1;
  return r && l > 0 && c > 0 && (m = Math.min(m, r.width * o / l, r.height * o / c)), {
    width: Math.max(1, Math.round(l * m)),
    height: Math.max(1, Math.round(c * m))
  };
}
function _M({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var m;
  const i = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const S = l();
    return S === a || (a = S, i(S)), S;
  }, d = () => c();
  return (m = t == null ? void 0 : t.addEventListener) == null || m.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var S;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
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
    var S, g, v;
    if (!s) {
      if (s = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", d), l())
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
const wM = { class: "pano-preview-node-surface" }, kM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Ee(), De("div", wM, [
      Be(jt, {
        icon: e.model.fullscreen ? Je(je).fullscreen_close : Je(je).fullscreen,
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
      e.model.viewUnavailable ? (Ee(), bn(nl, { key: 0 })) : tt("", !0)
    ]));
  }
}, Ps = 140, xM = 180, hp = 40, Yl = 10;
function gp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function yp(e, t) {
  const n = gp(e), r = gp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function bp(e) {
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
  return typeof ((o = Xt) == null ? void 0 : o.apiURL) == "function" ? Xt.apiURL(i) : i;
}
function Ri(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ri(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return bp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Ri(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : bp(e);
}
function x0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function MM(e) {
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
function Gc(e) {
  var i;
  const t = (i = Kn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (yp(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (yp(o, n)) return t[o];
  return null;
}
function PM(e) {
  var r, i;
  const t = Gc(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const s of o) {
        const a = Ri(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function NM(e, t = "erp_image") {
  var m, S, g, v, y, j, K;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((F) => String((F == null ? void 0 : F.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((F, M) => String((F == null ? void 0 : F.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(M))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (S = (m = Kn) == null ? void 0 : m.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : g.call(S, o), a = Gc(o), l = Gc(e == null ? void 0 : e.id), c = [
    (v = l == null ? void 0 : l.ui) == null ? void 0 : v.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const F of c)
    if (Array.isArray(F))
      for (const M of F) {
        const R = Ri(M);
        if (R) return R;
      }
  let d = [];
  try {
    d = typeof ((j = Kn) == null ? void 0 : j.getNodeImageUrls) == "function" ? Kn.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const F of d) {
      const M = Ri(F);
      if (M) return M;
    }
  if (s) {
    const F = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const M of F) {
      const R = Ri(M);
      if (R) return R;
    }
  }
  const u = (K = s == null ? void 0 : s.widgets) == null ? void 0 : K.find((F) => String((F == null ? void 0 : F.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? Xt.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function ql(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function vp(e, t, n, r, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !x0(o) || n <= 1 || r <= 1) {
    ql(t, n, r);
    return;
  }
  if (s.failed) {
    ql(t, n, r);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: n,
    height: r,
    camera: ba(i, n, r),
    background: { media: o, revision: MM(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, n, r) : ql(t, n, r);
}
function Sp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class AM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = fg(() => this.requestDraw()), this.controller = gu({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: It(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Oe(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Oe(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${Ps}px`,
        "position:relative",
        "display:block",
        "overflow:hidden"
      ].join(";"), this.canvas = Kt({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Ps;
        },
        getHeight() {
          return Ps;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Pa(Rc(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Ps, Number(o.minHeight || 0)),
            minWidth: Math.max(xM, Number(o.minWidth || 0))
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
      return od(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Ui({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = _M({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = mu(kM, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), yr(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, yr(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Km(n), t.addEventListener("pointerdown", (o) => {
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
      vM(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !x0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Gs(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = Kn.canvas) != null && r.graph) || this.node.graph === Kn.canvas.graph);
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
      return Sp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, c, d, u, f, m;
      const o = Bx(this, n, r, i), s = t.getLegacyPreviewRect();
      if (!o || !Sp(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = n == null ? void 0 : n.preventDefault) == null || u.call(n), (f = n == null ? void 0 : n.stopPropagation) == null || f.call(n), (m = n == null ? void 0 : n.stopImmediatePropagation) == null || m.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, i, o, s;
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - Yl * 2), n = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - hp - Yl);
    return { x: Yl, y: hp, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), vp(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? dg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = SM(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = PM(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = ns(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const n = NM(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), vp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, s, a, l, c, d, u, f, m, S, g, v, y;
    if (((n = wg(this.node)) == null ? void 0 : n.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, yr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (m = this.root) == null ? void 0 : m.remove) == null || S.call(m);
    } catch {
    }
    try {
      d0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (v = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : v.find) == null ? void 0 : y.call(v, (j) => (j == null ? void 0 : j.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), yr(this.node).runtime = null;
  }
}
function CM(e, t = {}) {
  if (!e || yr(e).runtime) return;
  const n = new AM(e, t);
  yr(e).runtime = n, n.attach();
}
function M0(e, t, n) {
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
function fd(e) {
  return !!(e != null && e.prototype);
}
function Xo(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function IM(e, t = {}) {
  fd(e) || CM(e, {
    ...t,
    onOpen: Xo(e, t.onOpen)
  });
}
function EM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!fd(e)) {
    mp(e, {
      ...r,
      onOpen: Xo(e, t.onOpen)
    });
    return;
  }
  M0(e, "stickers_node_preview", (i) => {
    mp(i, {
      ...r,
      onOpen: Xo(i, t.onOpen)
    });
  });
}
function OM(e, t = {}) {
  if (!fd(e)) {
    pp(e, {
      ...t,
      onOpen: Xo(e, t.onOpen)
    });
    return;
  }
  M0(e, "cutout_preview", (n) => {
    pp(n, {
      ...t,
      onOpen: Xo(n, t.onOpen)
    });
  });
}
const hn = {
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
}, pr = "pen";
function _p(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function FM({ requestFrame: e, cancelFrame: t, tasks: n }) {
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
}), TM = new Set(Object.values(ot));
function DM({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (v) {
      i(v);
    }
  }
  function m() {
    !o && !s && !a && (o = e(S));
  }
  function S(g) {
    o = 0, s = !0;
    try {
      const v = c;
      c = /* @__PURE__ */ new Map();
      for (const j of v.values()) f(() => j(g));
      if (a) return;
      const y = l;
      l = /* @__PURE__ */ new Set(), (y.size || r()) && f(() => n(g, y));
    } finally {
      s = !1;
    }
    (l.size || c.size || r()) && m();
  }
  return {
    requestDraw(g) {
      if (!TM.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === ot.STATE && (u += 1), l.add(g), m();
    },
    requestFrame(g) {
      const v = d++;
      return c.set(v, g), m(), v;
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
const LM = { class: "pano-floating-right" }, RM = {
  key: 0,
  class: "pano-floating-space"
}, VM = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, $M = ["data-settled"], zM = ["data-ready", "data-settled"], jM = ["aria-label", "data-tip"], HM = {
  key: 1,
  class: "pano-camera-preview-label"
}, KM = {
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
    return (t, n) => (Ee(), De(qe, null, [
      Ne("div", LM, [
        e.space ? vr((Ee(), De("div", RM, [
          Ne("div", VM, [
            (Ee(!0), De(qe, null, mt(e.space.modes, (r) => (Ee(), bn(jt, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(jt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [li, e.space.visible]
        ]) : tt("", !0),
        (Ee(!0), De(qe, null, mt(e.buttons, (r) => (Ee(), bn(jt, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      vr(Ne("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Ne("div", {
          class: st(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: yt({
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
          e.previewToggle.visible ? (Ee(), De("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Be(xt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, jM)) : tt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ee(), De("div", HM, Xe(e.preview.label || "Preview unavailable"), 1)) : tt("", !0)
        ], 14, zM)
      ], 8, $M), [
        [li, e.preview.visible]
      ])
    ], 64));
  }
}, GM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, WM = ["y2", "transform"], UM = ["transform"], BM = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = nt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => vr((Ee(), De("div", {
      class: st(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Ee(), De("svg", GM, [
        o[1] || (o[1] = Ne("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Ee(!0), De(qe, null, mt(Je(n), (s) => (Ee(), De("line", {
          key: s,
          class: st(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, WM))), 128)),
        Ne("g", { transform: r.value }, [...o[0] || (o[0] = [
          Ne("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, UM),
        o[2] || (o[2] = Ne("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [li, e.model.visible === !0]
    ]);
  }
}, YM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ee(), De("div", {
      class: st(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(e0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(jt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(BM, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, qM = ["aria-label"], XM = { class: "pano-canvas-confirm-title" }, JM = { class: "pano-canvas-confirm-text" }, ZM = { class: "pano-canvas-confirm-actions" }, QM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, eP = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Lt(null), r = /* @__PURE__ */ Lt(null);
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
      const m = f.querySelector(`[data-action='${u}']`);
      m instanceof HTMLButtonElement && m.click();
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
      const S = o()[0] || u;
      (g = S == null ? void 0 : S.focus) == null || g.call(S);
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
      const f = o(), m = r.value;
      if (!f.length) {
        u.preventDefault(), (y = m == null ? void 0 : m.focus) == null || y.call(m);
        return;
      }
      const S = f[0], g = f[f.length - 1], v = document.activeElement;
      if (u.shiftKey) {
        (v === S || v === m || !(m != null && m.contains(v))) && (u.preventDefault(), g.focus());
        return;
      }
      (v === g || !(m != null && m.contains(v))) && (u.preventDefault(), S.focus());
    }
    function d(u) {
      u.target === n.value && s("confirm-cancel");
    }
    return ri(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, ja(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), es(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Ee(), De("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: pt(d, ["self"])
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
        Ne("div", XM, Xe(e.model.title), 1),
        Ne("div", JM, Xe(e.model.text), 1),
        Ne("div", ZM, [
          f[0] || (f[0] = Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ne("button", QM, Xe(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, qM)
    ], 512)) : tt("", !0);
  }
}, tP = ["data-paint-pane"], nP = ["hidden"], rP = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], iP = ["aria-pressed", "disabled"], oP = ["hidden"], sP = { class: "pano-paint-color-pop-head" }, aP = { class: "pano-paint-color-field" }, lP = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, cP = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, uP = { class: "pano-paint-color-field" }, dP = { class: "pano-paint-alpha-wrap" }, fP = ["value"], pP = { "data-paint-alpha-value": "" }, mP = ["hidden"], hP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, gP = ["data-paint-history-index", "aria-label", "disabled"], yP = ["data-paint-footer"], bP = ["data-paint-group"], vP = ["hidden"], SP = ["value", "disabled"], _P = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, wP = ["hidden"], kP = {
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
    return (r, i) => (Ee(), De("div", {
      class: st(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ee(!0), De(qe, null, mt(e.panes, (o) => {
        var s;
        return Ee(), De("div", {
          key: o.key,
          class: st(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Ee(), De("div", {
            key: 0,
            class: st(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ee(!0), De(qe, null, mt(e.paintSwatches, (a) => (Ee(), De("button", {
              key: a.id,
              class: st(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: yt(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, rP))), 128)),
            Ne("button", {
              class: st(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: yt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, iP),
            Ne("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: yt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Ne("div", sP, [
                Ne("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: yt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", aP, [
                Ne("div", lP, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: yt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", cP, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: yt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ne("label", uP, [
                i[1] || (i[1] = Ne("span", null, "Opacity", -1)),
                Ne("div", dP, [
                  Ne("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, fP),
                  Ne("span", pP, Xe(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ne("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ne("div", hP, [
                  (Ee(!0), De(qe, null, mt(e.state.historyEntries || [], (a) => (Ee(), De("button", {
                    key: a.index,
                    class: st(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: yt(n(a.color))
                  }, null, 14, gP))), 128))
                ])
              ], 8, mP)
            ], 12, oP)
          ], 10, nP)) : tt("", !0),
          Ne("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ne("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Ee(!0), De(qe, null, mt(o.tools, (a) => {
                var l;
                return Ee(), bn(jt, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, bP),
            Ne("div", {
              class: st(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: yt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, SP),
              Ne("span", _P, Xe(e.state.sizeText || "10"), 1)
            ], 10, vP),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(jt, {
                icon: Je(je).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, wP)
          ], 8, yP)
        ], 10, tP);
      }), 128))
    ], 2));
  }
}, xP = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Lt(null), r = /* @__PURE__ */ Lt(null), i = /* @__PURE__ */ Lt(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Ee(), De(qe, null, [
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
}, MP = ["aria-label"], PP = ["data-tip", "aria-pressed"], NP = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = nt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => (Ee(), De("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: yt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (Ee(!0), De(qe, null, mt(e.buttons, (o) => (Ee(), De("button", fr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), Xe(o.label), 17, PP))), 128))
    ], 12, MP));
  }
}, AP = {
  key: 0,
  class: "pano-cutout-menu"
}, CP = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, IP = ["data-aspect"], EP = ["data-action", "aria-label", "data-tip", "disabled"], OP = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ee(), De("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: yt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ee(!0), De(qe, null, mt(e.model.items || [], (r) => (Ee(), De(qe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Ee(), De("div", AP, [
          Ne("button", CP, [
            Be(xt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: st(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ee(!0), De(qe, null, mt(r.choices || [], (i) => (Ee(), De("button", {
              key: i.value,
              class: st(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, Xe(i.label), 11, IP))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (Ee(), bn(NP, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (Ee(), De("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Be(xt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, EP))
      ], 64))), 128))
    ], 4));
  }
}, FP = {
  key: 0,
  class: "pano-easing"
}, TP = { class: "pano-section-title" }, DP = { class: "pano-easing-range" }, LP = { class: "pano-easing-modes" }, RP = ["aria-pressed", "onClick"], VP = ["viewBox"], $P = ["x", "y"], zP = ["x1", "y1", "x2", "y2"], jP = ["d"], HP = ["x1", "y1", "x2", "y2"], KP = ["x1", "y1", "x2", "y2"], GP = ["cx", "cy"], WP = ["cx", "cy"], UP = { class: "pano-easing-note" }, cr = 132, qr = 14, BP = {
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
    ], o = /* @__PURE__ */ Lt(null), s = nt(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), a = (S) => qr + S * cr, l = (S) => qr + (1 - S) * cr, c = nt(() => {
      var j;
      if (((j = n.model) == null ? void 0 : j.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [S, g, v, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(S)} ${l(g)} ${a(v)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = nt(() => s.value ? s.value.map((S) => S.toFixed(2)).join(", ") : "");
    function u(S) {
      var g;
      return JSON.stringify(S.easing) === JSON.stringify((g = n.model) == null ? void 0 : g.easing);
    }
    function f(S, g) {
      r("timeline", { type: "easing", easing: S, commit: g });
    }
    function m(S, g) {
      var F;
      if (S.button !== 0 || !s.value) return;
      const v = S.currentTarget;
      (F = v.setPointerCapture) == null || F.call(v, S.pointerId);
      let y = null;
      const j = (M) => {
        const R = o.value.getBoundingClientRect(), Z = R.width / (cr + qr * 2), Y = ((M.clientX - R.left) / Z - qr) / cr, ae = 1 - ((M.clientY - R.top) / Z - qr) / cr;
        y = [...y || s.value], y[g] = Math.round(Math.min(1, Math.max(0, Y)) * 100) / 100, y[g + 1] = Math.round(Math.min(1, Math.max(0, ae)) * 100) / 100, f(y, !1);
      }, K = () => {
        v.removeEventListener("pointermove", j), v.removeEventListener("pointerup", K), v.removeEventListener("pointercancel", K), y && f(y, !0);
      };
      v.addEventListener("pointermove", j), v.addEventListener("pointerup", K), v.addEventListener("pointercancel", K);
    }
    return (S, g) => e.model ? (Ee(), De("div", FP, [
      Ne("div", TP, [
        g[2] || (g[2] = Ne("span", null, "Easing", -1)),
        Ne("span", DP, Xe(e.model.label), 1)
      ]),
      Ne("div", LP, [
        (Ee(), De(qe, null, mt(i, (v) => Ne("button", {
          key: v.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(v) ? "true" : "false",
          onClick: (y) => f(v.easing, !0)
        }, Xe(v.label), 9, RP)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Ee(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${cr + qr * 2} ${cr + qr * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ne("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: cr,
          height: cr
        }, null, 8, $P),
        Ne("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, zP),
        Ne("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, jP),
        s.value ? (Ee(), De(qe, { key: 0 }, [
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, HP),
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, KP),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (v) => m(v, 0))
          }, null, 40, GP),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (v) => m(v, 2))
          }, null, 40, WP)
        ], 64)) : tt("", !0)
      ], 8, VP)) : tt("", !0),
      Ne("div", UP, [
        e.model.mixed ? (Ee(), De(qe, { key: 0 }, [
          so("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Ee(), De(qe, { key: 1 }, [
          so("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Ee(), De(qe, { key: 2 }, [
          so("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Ee(), De(qe, { key: 3 }, [
          so("cubic-bezier(" + Xe(d.value) + ")", 1)
        ], 64)) : tt("", !0)
      ])
    ])) : tt("", !0);
  }
}, YP = ["title"], qP = { class: "pano-ui-row" }, XP = ["disabled"], JP = { class: "pano-upstream-lanes" }, ZP = ["data-action", "data-lane", "disabled", "title"], QP = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, n) => e.model ? (Ee(), De("div", {
      key: 0,
      class: "pano-upstream-origin",
      title: e.model.note || null
    }, [
      Ne("div", qP, [
        n[0] || (n[0] = Ne("label", null, "Revert to upstream", -1)),
        Ne("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, XP)
      ]),
      Ne("div", JP, [
        (Ee(!0), De(qe, null, mt(e.model.lanes, (r) => (Ee(), De("button", {
          key: r.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": r.action,
          "data-lane": r.name,
          disabled: r.disabled,
          title: `Revert ${r.label} to upstream`
        }, Xe(r.label), 9, ZP))), 128))
      ])
    ], 8, YP)) : tt("", !0);
  }
}, eN = {
  class: "pano-side",
  "data-side": ""
}, tN = { class: "pano-side-head" }, nN = { class: "pano-side-title" }, rN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, iN = {
  key: 0,
  class: "pano-side-scroll"
}, oN = { class: "pano-inspector" }, sN = { class: "pano-ui-row pano-coverage-row" }, aN = ["data-selected"], lN = ["aria-pressed", "disabled"], cN = ["aria-pressed", "disabled"], uN = {
  key: 0,
  class: "pano-section-title"
}, dN = { class: "meta" }, fN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, pN = {
  class: "pano-picker",
  "data-picker": "selection"
}, mN = ["disabled"], hN = { class: "pano-picker-label" }, gN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, yN = ["hidden"], bN = ["data-selection-id"], vN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, SN = {
  key: 2,
  class: "pano-state-actions"
}, _N = ["disabled"], wN = ["data-key"], kN = { class: "pano-field-group-values" }, xN = ["title", "onPointerdown"], MN = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], PN = ["data-key"], NN = ["min", "max", "step", "value", "disabled", "data-param-key"], AN = ["min", "max", "step", "value", "disabled", "data-param-key"], CN = ["open"], IN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, EN = { class: "pano-ui-settings-body" }, ON = { class: "pano-ui-row" }, FN = ["data-selected"], TN = ["aria-pressed"], DN = ["aria-pressed"], LN = { class: "pano-ui-row" }, RN = ["data-selected"], VN = ["aria-pressed"], $N = ["aria-pressed"], zN = {
  key: 1,
  class: "pano-side-footer"
}, jN = ["data-action"], HN = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = nt(() => {
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
      const f = c.currentTarget, m = c.clientX, S = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const v = (j) => {
        if (!g && Math.abs(j.clientX - m) < 3) return;
        g = !0;
        const K = S + (j.clientX - m) * d.drag * (j.shiftKey ? 0.1 : 1);
        u.value = String(Number(K.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", v), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", v), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, m, S, g, v;
      return Ee(), De("div", eN, [
        Ne("div", tN, [
          Ne("div", nN, [
            Ne("span", rN, [
              Be(xt, {
                icon: Je(je).globe
              }, null, 8, ["icon"])
            ]),
            Ne("span", null, Xe(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Ne("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Ne("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Ee(), De("div", iN, [
          Ne("div", oN, [
            d[9] || (d[9] = Ne("div", { class: "pano-section-title" }, [
              Ne("span", null, "Scene")
            ], -1)),
            Ne("div", sN, [
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
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "360", 8, lN),
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, cN)
              ], 8, aN)
            ]),
            e.model.transformTitle !== !1 ? (Ee(), De("div", uN, [
              d[3] || (d[3] = Ne("span", null, "Transform", -1)),
              Ne("span", dN, Xe(((v = e.model.upstream) == null ? void 0 : v.origin) || ""), 1)
            ])) : tt("", !0),
            e.model.selectionPicker ? (Ee(), De("div", fN, [
              Ne("label", null, Xe(e.model.selectionPicker.label), 1),
              Ne("div", pN, [
                Ne("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ne("span", hN, [
                    e.model.selectionPicker.currentIcon ? (Ee(), De("span", gN, [
                      Be(xt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : tt("", !0),
                    Ne("span", null, Xe(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Ne("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, mN),
                Ne("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ee(!0), De(qe, null, mt(e.model.selectionPicker.items || [], (y) => (Ee(), De("button", {
                    key: y.id,
                    type: "button",
                    class: st(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Ee(), De("span", vN, [
                      Be(xt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : tt("", !0),
                    Ne("span", null, Xe(y.label), 1)
                  ], 10, bN))), 128))
                ], 8, yN)
              ])
            ])) : tt("", !0),
            e.model.copyStateButton ? (Ee(), De("div", SN, [
              Ne("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(xt, {
                  icon: Je(je).copy
                }, null, 8, ["icon"]),
                Ne("span", null, Xe(e.model.copyStateButton.label), 1)
              ], 8, _N)
            ])) : tt("", !0),
            Ne("div", {
              class: st(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ee(!0), De(qe, { key: 0 }, mt(e.model.notes, (y) => (Ee(), De("div", {
                key: y,
                class: "pano-param-note"
              }, Xe(y), 1))), 128)) : (Ee(!0), De(qe, { key: 1 }, mt(e.model.rows || [], (y) => (Ee(), De(qe, {
                key: y.key
              }, [
                y.grouped ? (Ee(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Ne("label", null, Xe(y.label), 1),
                  Ne("div", kN, [
                    (Ee(!0), De(qe, null, mt(y.fields, (j) => (Ee(), De("div", {
                      key: j.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: st(["pano-axis", { disabled: s(j, e.model) }]),
                        title: j.label,
                        onPointerdown: (K) => l(K, j)
                      }, Xe(j.short), 43, xN),
                      Ne("input", {
                        ref_for: !0,
                        ref: (K) => {
                          a[j.key] = K;
                        },
                        type: "number",
                        min: j.min,
                        max: j.max,
                        step: j.step,
                        value: j.displayValue,
                        disabled: s(j, e.model),
                        "aria-label": `${y.label} ${j.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": j.key
                      }, null, 8, MN)
                    ]))), 128))
                  ])
                ], 8, wN)) : (Ee(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Ne("label", null, Xe(y.label), 1),
                  Ne("input", {
                    type: "range",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].value,
                    disabled: s(y.fields[0], e.model),
                    style: yt(o(y.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": y.fields[0].key
                  }, null, 12, NN),
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
                  }, null, 8, AN)
                ], 8, PN))
              ], 64))), 128))
            ], 2),
            Be(QP, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Be(BP, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => r("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Ee(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                d[5] || (d[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", IN, [
                  Be(xt, {
                    icon: Je(je).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ne("div", EN, [
                Ne("div", ON, [
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
                    }, "Normal", 8, TN),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, DN)
                  ], 8, FN)
                ]),
                Ne("div", LN, [
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
                    }, "Normal", 8, VN),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, $N)
                  ], 8, RN)
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
            ], 8, CN)) : tt("", !0)
          ])
        ])) : tt("", !0),
        (e.model.footerButtons || []).length ? (Ee(), De("div", zN, [
          (Ee(!0), De(qe, null, mt(e.model.footerButtons, (y) => (Ee(), De("button", {
            key: y.action,
            class: st(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, Xe(y.label), 11, jN))), 128))
        ])) : tt("", !0)
      ]);
    };
  }
}, KN = { class: "pano-timeline-group" }, GN = ["title"], WN = ["disabled"], UN = ["disabled"], BN = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, i) => (Ee(), De("div", KN, [
      Ne("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, Xe(e.group.label), 9, GN),
      Ne("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = pt((o) => n("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, WN),
      Ne("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = pt((o) => n("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, Xe(e.group.restore.label), 9, UN)
    ]));
  }
}, YN = { class: "pano-timeline-bar" }, qN = ["disabled", "aria-label", "data-tip"], XN = ["aria-label", "data-tip"], JN = { class: "pano-timeline-time" }, ZN = ["data-tip"], QN = { key: 0 }, e2 = ["min", "max", "value"], t2 = {
  class: "pano-timeline-setting pano-timeline-length",
  "data-tip": "Output length in frames"
}, n2 = ["max", "value"], r2 = ["disabled"], i2 = ["aria-expanded"], o2 = ["inert"], s2 = { class: "pano-timeline-name" }, a2 = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], l2 = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, c2 = ["disabled", "aria-expanded", "aria-label", "onClick"], u2 = ["title", "aria-current", "onClick"], d2 = ["role", "aria-label", "data-tip"], f2 = ["disabled", "data-keyed", "aria-label", "onClick"], p2 = ["onPointerdown"], m2 = ["onPointerdown"], h2 = ["onPointerdown"], g2 = ["onPointerdown"], y2 = ["aria-label", "data-tip", "onPointerdown"], b2 = { key: 0 }, v2 = ["onPointerdown"], S2 = ["aria-label", "data-tip", "onPointerdown"], _2 = { key: 0 }, w2 = 10, k2 = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ qs(0), playing: /* @__PURE__ */ qs(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ Lt(null), o = /* @__PURE__ */ Lt(null), s = /* @__PURE__ */ Lt(1), a = /* @__PURE__ */ Lt(0), l = /* @__PURE__ */ Lt(!1);
    let c = null, d = null, u = null;
    Ka(() => {
      c = new ResizeObserver(([oe]) => {
        s.value = Math.max(1, oe.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([oe]) => {
        a.value = oe.contentRect.height;
      }), o.value && d.observe(o.value);
    }), es(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = nt(() => Math.max(1, Number(n.model.span || 1))), m = nt(() => n.playhead.frame.value), S = nt(() => n.playhead.playing.value), g = nt(() => yS(m.value, Number(n.model.fps || 1))), v = nt(() => s.value / f.value), y = (oe) => `${oe / f.value * 100}%`, j = nt(() => AS(f.value, v.value));
    function K(oe) {
      const I = i.value.getBoundingClientRect(), V = Math.floor((oe - I.left) / Math.max(1, I.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, V));
    }
    function F(oe, I, V) {
      const N = Math.ceil(w2 / Math.max(1e-6, v.value)), fe = I.filter((O) => O.frame < f.value), C = new Map(fe.map((O) => [O.frame, O.full]));
      return CS(fe.map((O) => O.frame), N).map((O, _) => ({
        ...O,
        key: `${oe}:${_}`,
        partial: O.frames.some((P) => !C.get(P)),
        selected: O.frames.some((P) => V.includes(P))
      }));
    }
    const M = nt(() => [
      ...(n.model.rows || []).map((oe) => ({ key: oe.id, row: oe })),
      ...(n.model.groups || []).flatMap((oe) => [
        { key: `group:${oe.key}`, group: oe },
        ...oe.rows.map((I) => ({ key: I.id, row: I }))
      ])
    ]), R = nt(() => {
      const oe = /* @__PURE__ */ new Map();
      for (const { row: I } of M.value)
        if (I) {
          oe.set(I.id, F(I.id, I.keys, I.selectedFrames));
          for (const V of I.lanes) oe.set(V.key, F(V.key, V.frames.map((N) => ({ frame: N, full: !0 })), V.selectedFrames));
        }
      return oe;
    });
    function Z(oe) {
      const I = oe.end === null ? f.value : Math.min(oe.end, f.value);
      return { left: y(oe.start), width: y(Math.max(0, I - oe.start)) };
    }
    function Y(oe, I) {
      const V = oe.clientX, N = Math.max(1e-6, v.value);
      let fe = 0;
      I("start", 0, oe);
      const C = (_) => {
        if (_.pointerId !== oe.pointerId) return;
        const P = Math.round((_.clientX - V) / N);
        P !== fe && (fe = P, I("move", fe, _));
      }, O = (_) => {
        _.pointerId === oe.pointerId && (u(), I("end", fe, _));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", O), u = null;
      }, window.addEventListener("pointermove", C), window.addEventListener("pointerup", O), window.addEventListener("pointercancel", O);
    }
    function ae(oe) {
      oe.button === 0 && Y(oe, (I, V, N) => r("action", { type: "seek", frame: K(N.clientX), phase: I }));
    }
    function Se(oe, I, V) {
      oe.button === 0 && (r("action", { type: "select-row", id: I.id }), Y(oe, (N, fe) => r("action", { type: "clip", id: I.id, mode: V, delta: fe, phase: N })));
    }
    function ye(oe, I, V, N, fe) {
      if (oe.button === 0) {
        if (oe.shiftKey) {
          r("action", { type: "select-keys", owner: I.id, lane: V, frames: N.frames, additive: !0 });
          return;
        }
        N.frames.every((C) => fe.includes(C)) || r("action", { type: "select-keys", owner: I.id, lane: V, frames: N.frames, additive: !1 }), Y(oe, (C, O) => r("action", { type: "move-keys", delta: O, phase: C }));
      }
    }
    const q = nt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function _e(oe, I, V) {
      r("action", I), await ja(), oe.target.value = V();
    }
    function pe(oe) {
      _e(oe, { type: "fps", fps: Number(oe.target.value) }, () => q.value);
    }
    const de = nt(() => String(n.model.length ?? f.value));
    function te(oe) {
      const I = oe.target.value.trim();
      if (!I) {
        oe.target.value = de.value;
        return;
      }
      _e(oe, { type: "length", length: Number(I) }, () => de.value);
    }
    function ge(oe, I, V) {
      oe.button !== 0 || oe.target !== oe.currentTarget || r("action", { type: "select-keys", owner: I.id, lane: V, frames: [], additive: !1 });
    }
    return (oe, I) => vr((Ee(), De("section", {
      class: st(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", YN, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          disabled: !e.model.playable,
          "aria-label": S.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": S.value ? "Pause (Space)" : "Play (Space)",
          onClick: I[0] || (I[0] = (V) => r("action", { type: "play" }))
        }, [
          Be(xt, {
            icon: S.value ? Je(je).pause : Je(je).play
          }, null, 8, ["icon"])
        ], 8, qN),
        e.model.hasAudio ? (Ee(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: I[1] || (I[1] = (V) => r("action", { type: "mute" }))
        }, [
          Be(xt, {
            icon: e.model.muted ? Je(je).volume_muted : Je(je).volume2
          }, null, 8, ["icon"])
        ], 8, XN)) : tt("", !0),
        Ne("span", JN, Xe(g.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Ee(), De("span", QN, Xe(q.value), 1)) : (Ee(), De("input", {
            key: 1,
            type: "number",
            min: Je(sh),
            max: Je(wu),
            step: "any",
            value: q.value,
            "aria-label": "Timeline fps",
            onChange: pe
          }, null, 40, e2)),
          I[8] || (I[8] = Ne("span", null, "fps", -1))
        ], 8, ZN),
        Ne("label", t2, [
          I[9] || (I[9] = Ne("span", null, "Length", -1)),
          Ne("input", {
            type: "number",
            min: "1",
            max: Je(ku),
            step: "1",
            value: de.value,
            "aria-label": "Output length in frames",
            onChange: te
          }, null, 40, n2)
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-length-reset",
          type: "button",
          disabled: e.model.length == null,
          "aria-label": "Reset length to the inputs",
          "data-tip": "Reset length to the inputs",
          onClick: I[2] || (I[2] = (V) => r("action", { type: "length", length: null }))
        }, [
          Be(xt, {
            icon: Je(je).reset
          }, null, 8, ["icon"])
        ], 8, r2),
        Ne("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: I[3] || (I[3] = (V) => r("action", { type: "toggle-expanded" }))
        }, [
          I[10] || (I[10] = Ne("span", null, "Timeline", -1)),
          Be(xt, {
            icon: Je(je).chevron
          }, null, 8, ["icon"])
        ], 8, i2)
      ]),
      Ne("div", {
        class: st(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: yt({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: I[5] || (I[5] = pt((V) => l.value = !0, ["self"])),
        onTransitionend: I[6] || (I[6] = pt((V) => l.value = !1, ["self"])),
        onTransitioncancel: I[7] || (I[7] = pt((V) => l.value = !1, ["self"]))
      }, [
        Ne("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          I[11] || (I[11] = Ne("div", { class: "pano-timeline-corner" }, null, -1)),
          Ne("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ae
          }, [
            (Ee(!0), De(qe, null, mt(j.value, (V) => (Ee(), De("span", {
              key: V,
              class: "pano-timeline-tick",
              style: yt({ left: y(V) })
            }, Xe(V), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: yt({ left: y(m.value + 0.5) })
            }, null, 4)
          ], 544),
          (Ee(!0), De(qe, null, mt(M.value, ({ key: V, row: N, group: fe }) => (Ee(), De(qe, { key: V }, [
            fe ? (Ee(), bn(BN, {
              key: 0,
              group: fe,
              onAction: I[4] || (I[4] = (C) => r("action", C))
            }, null, 8, ["group"])) : tt("", !0),
            N ? (Ee(), De("div", {
              key: 1,
              class: st(["pano-timeline-head", { selected: N.selected, "is-hidden": !N.visible }])
            }, [
              Ne("div", s2, [
                N.hideable ? (Ee(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": N.visible ? "true" : "false",
                  disabled: !N.editable,
                  "aria-label": `${N.label} visible`,
                  "data-tip": N.editable ? N.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: pt((C) => r("action", { type: "toggle-visible", id: N.id }), ["stop"])
                }, [
                  Be(xt, {
                    icon: N.visible ? Je(je).eye : Je(je).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, a2)) : (Ee(), De("span", l2)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !N.keyable,
                  "aria-expanded": N.open ? "true" : "false",
                  "aria-label": N.open ? `Hide ${N.label} parameters` : `Show ${N.label} parameters`,
                  onClick: pt((C) => r("action", { type: "toggle-row", id: N.id }), ["stop"])
                }, [
                  Be(xt, {
                    icon: Je(je).chevron
                  }, null, 8, ["icon"])
                ], 8, c2),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: N.label,
                  "aria-current": N.selected ? "true" : void 0,
                  onClick: (C) => r("action", { type: "select-row", id: N.id })
                }, [
                  Be(xt, {
                    icon: N.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, Xe(N.label), 1)
                ], 8, u2),
                N.upstream ? (Ee(), De("span", {
                  key: 2,
                  class: st(["pano-timeline-override", { on: N.overridden }]),
                  role: N.overridden ? "img" : void 0,
                  "aria-label": N.overridden ? "Overridden in this node" : void 0,
                  "data-tip": N.overridden ? "Overridden in this node" : null
                }, null, 10, d2)) : tt("", !0),
                N.keyable ? (Ee(), De("button", {
                  key: 3,
                  class: st(["pano-timeline-key", { keyed: Je(El)(N.keys, m.value) }]),
                  type: "button",
                  disabled: !N.editable,
                  "data-keyed": Je(El)(N.keys, m.value) ? "true" : "false",
                  "aria-label": Je(El)(N.keys, m.value) ? `Every ${N.label} parameter has a keyframe here; update them` : `Add keyframes for every ${N.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: pt((C) => r("action", { type: "key-row", owner: N.id }), ["stop"])
                }, [
                  Be(xt, {
                    icon: Je(je).keyframe
                  }, null, 8, ["icon"])
                ], 10, f2)) : tt("", !0)
              ]),
              N.open ? (Ee(!0), De(qe, { key: 0 }, mt(N.lanes, (C) => (Ee(), De("div", {
                key: C.key,
                class: "pano-timeline-lane-head"
              }, Xe(C.label), 1))), 128)) : tt("", !0)
            ], 2)) : tt("", !0),
            N ? (Ee(), De("div", {
              key: 2,
              class: st(["pano-timeline-track", { selected: N.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (C) => ge(C, N, null)
              }, [
                N.clip && N.clip.start < f.value ? (Ee(), De("div", {
                  key: 0,
                  class: st(["pano-timeline-clip", { open: N.clip.end === null }]),
                  style: yt(Z(N.clip)),
                  onPointerdown: pt((C) => Se(C, N, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: pt((C) => Se(C, N, "start"), ["stop"])
                  }, null, 40, h2),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: pt((C) => Se(C, N, "end"), ["stop"])
                  }, null, 40, g2)
                ], 46, m2)) : tt("", !0),
                (Ee(!0), De(qe, null, mt(R.value.get(N.id), (C) => (Ee(), De("button", {
                  key: C.key,
                  type: "button",
                  class: st(["pano-timeline-pin", { selected: C.selected, cluster: C.frames.length > 1, partial: C.partial }]),
                  style: yt({ left: y(C.frame + 0.5) }),
                  "aria-label": `${N.label}: ${C.frames.length > 1 ? `${C.frames.length} keyframes` : `keyframe at frame ${C.frames[0]}`}`,
                  "data-tip": C.frames.length > 1 ? `${C.frames.length} keyframes` : `Frame ${C.frames[0]}`,
                  onPointerdown: pt((O) => ye(O, N, null, C, N.selectedFrames), ["stop"])
                }, [
                  C.frames.length > 1 ? (Ee(), De("span", b2, Xe(C.frames.length), 1)) : tt("", !0)
                ], 46, y2))), 128))
              ], 40, p2),
              N.open ? (Ee(!0), De(qe, { key: 0 }, mt(N.lanes, (C) => (Ee(), De("div", {
                key: C.key,
                class: "pano-timeline-lane",
                onPointerdown: (O) => ge(O, N, C.lane)
              }, [
                (Ee(!0), De(qe, null, mt(R.value.get(C.key), (O) => (Ee(), De("button", {
                  key: O.key,
                  type: "button",
                  class: st(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1 }]),
                  style: yt({ left: y(O.frame + 0.5) }),
                  "aria-label": `${C.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: pt((_) => ye(_, N, C.lane, O, C.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (Ee(), De("span", _2, Xe(O.frames.length), 1)) : tt("", !0)
                ], 46, S2))), 128))
              ], 40, v2))), 128)) : tt("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: yt({ left: y(m.value + 0.5) })
              }, null, 4)
            ], 2)) : tt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, o2)
    ], 2)), [
      [li, e.model.visible]
    ]);
  }
}, x2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ee(), De("div", {
      class: st(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: yt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, Xe(e.model.text || ""), 7));
  }
}, M2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, P2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ee(), De("div", M2, [
      (Ee(!0), De(qe, null, mt(e.buttons, (r) => vr((Ee(), bn(jt, {
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
        [li, r.visible !== !1]
      ])), 128))
    ]));
  }
}, N2 = ["data-video-ready"], A2 = { class: "pano-video-transport-shell" }, C2 = { class: "pano-video-controls-left" }, I2 = { class: "pano-video-filmstrip" }, E2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, O2 = ["src", "onLoad"], F2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, T2 = ["max", "value", "disabled"], D2 = { class: "pano-video-controls-right" }, L2 = ["data-has-audio"], R2 = { class: "pano-video-volume-pop" }, V2 = ["value", "disabled"], $2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = nt(() => {
      var M;
      return ((M = t.state) == null ? void 0 : M.playing) === !0 ? "Pause" : "Play";
    }), r = nt(() => {
      var M;
      return ((M = t.state) == null ? void 0 : M.playing) === !0 ? "Pause video" : "Play video";
    }), i = nt(() => {
      var M;
      return ((M = t.state) == null ? void 0 : M.playing) === !0 ? je.pause : je.play;
    }), o = nt(() => {
      var M;
      return ((M = t.state) == null ? void 0 : M.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = nt(() => {
      var M;
      return ((M = t.state) == null ? void 0 : M.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = nt(() => {
      var M;
      return ((M = t.state) == null ? void 0 : M.loop) === !1 ? je.loop_off : je.loop;
    }), l = nt(() => {
      var M, R;
      return ((M = t.state) == null ? void 0 : M.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = nt(() => {
      var M, R, Z;
      return ((M = t.state) == null ? void 0 : M.hasAudio) !== !0 ? je.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((Z = t.state) == null ? void 0 : Z.volume) ?? 1) <= 0 ? je.volume_muted : je.volume2;
    }), d = nt(() => {
      var M;
      return Math.max(0, Math.min(100, Number(((M = t.state) == null ? void 0 : M.progressPct) || 0)));
    }), u = nt(() => ({ left: `${d.value}%` })), f = nt(() => {
      var Y, ae;
      const M = (Y = t.state) == null ? void 0 : Y.volumePct, R = Number(((ae = t.state) == null ? void 0 : ae.volume) ?? 1) * 100, Z = Number(M ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, Z))}%`
      };
    }), m = nt(() => {
      var Z, Y;
      const R = [
        String(((Z = t.state) == null ? void 0 : Z.currentTimeLabel) || "0:00"),
        String(((Y = t.state) == null ? void 0 : Y.durationLabel) || "0:00")
      ].reduce((ae, Se) => Math.max(ae, Se.length), 4);
      return `${Math.max(4, R)}ch`;
    }), S = nt(() => ({ "--pano-video-time-ch": m.value })), g = nt(() => {
      var Z, Y;
      const M = Array.isArray((Z = t.state) == null ? void 0 : Z.thumbnails) ? t.state.thumbnails : [];
      if (M.length) return M;
      const R = Math.max(7, Number(((Y = t.state) == null ? void 0 : Y.thumbnailCount) || 9));
      return Array.from({ length: R }, (ae, Se) => ({
        id: `placeholder-${Se}`,
        src: "",
        label: ""
      }));
    }), v = /* @__PURE__ */ Lt(/* @__PURE__ */ new Set()), y = (M) => String((M == null ? void 0 : M.id) || (M == null ? void 0 : M.src) || (M == null ? void 0 : M.label) || ""), j = (M) => v.value.has(y(M)), K = (M) => {
      const R = new Set(v.value);
      R.add(y(M)), v.value = R;
    };
    ri(g, (M) => {
      const R = new Set(M.map(y)), Z = /* @__PURE__ */ new Set();
      for (const Y of v.value)
        R.has(Y) && Z.add(Y);
      v.value = Z;
    }, { immediate: !0 });
    const F = nt(() => {
      var M;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((M = t.state) == null ? void 0 : M.shellMaxWidthPx) || 640))}px`
      };
    });
    return (M, R) => (Ee(), De("div", {
      class: st(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: yt(F.value)
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
      Ne("div", A2, [
        Ne("div", C2, [
          Be(jt, {
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
            style: yt(S.value)
          }, Xe(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", I2, [
          Ne("div", E2, [
            (Ee(!0), De(qe, null, mt(g.value, (Z) => (Ee(), De("div", {
              key: y(Z),
              class: st(["pano-video-thumb", {
                "is-placeholder": !Z.src,
                "is-loaded": Z.src && j(Z)
              }])
            }, [
              Z.src ? (Ee(), De("img", {
                key: 0,
                src: Z.src,
                alt: "",
                draggable: "false",
                onLoad: (Y) => K(Z)
              }, null, 40, O2)) : (Ee(), De("span", F2))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: yt(u.value),
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
          }, null, 8, T2)
        ]),
        Ne("div", D2, [
          Ne("div", {
            class: "pano-video-time pano-video-time-end",
            style: yt(S.value)
          }, Xe(e.state.durationLabel || "0:00"), 5),
          Be(jt, {
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
            Ne("div", R2, [
              Ne("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: yt(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, V2)
            ]),
            Be(jt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, L2)
        ])
      ])
    ], 14, N2));
  }
}, z2 = { class: "pano-floating-top" }, j2 = ["data-selected", "data-view-count"], H2 = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], K2 = { class: "label" }, G2 = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Ee(), De("div", z2, [
        Ne("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ee(!0), De(qe, null, mt(e.buttons, (i) => vr((Ee(), De("button", {
            key: i.key,
            class: st(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Be(xt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ne("span", K2, Xe(i.label), 1)
          ], 10, H2)), [
            [li, i.visible !== !1]
          ])), 128))
        ], 8, j2)
      ]);
    };
  }
};
function P0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: je.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: je.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: je.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: je.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: je.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: je.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: je.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: je.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: je.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: je.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: je.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: je.image, pressed: null },
        // Panorama Studio only (#72): an image or a 3D file placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add to World", tip: "Add an image or 3D model in space", active: !1, accent: !1, icon: je.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: je.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: je.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: je.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: je.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: je.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: je.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: je.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: je.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: je.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: je.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: je.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: je.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: je.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: je.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: je.lasso_tool }
        ]
      }
    ]
  };
}
const W2 = ["aria-label"], U2 = { class: "pano-stage-column" }, B2 = { class: "pano-stage-wrap" }, Y2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, q2 = {
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
    const l = /* @__PURE__ */ Lt(null), c = /* @__PURE__ */ Lt(null), d = /* @__PURE__ */ Lt(null);
    function u() {
      var ye, q;
      return ((q = (ye = d.value) == null ? void 0 : ye.getRefs) == null ? void 0 : q.call(ye)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(ye, q) {
      var _e, pe;
      return ((pe = (_e = c.value) == null ? void 0 : _e.open) == null ? void 0 : pe.call(_e, ye, q)) === !0;
    }
    function m(ye) {
      i("image-file-selected", ye);
    }
    function S(ye) {
      i("image-file-cancelled", ye);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = nt(() => r.readOnly === !0), v = nt(() => r.shellPreset || P0(r.type)), y = nt(() => {
      var q, _e, pe;
      const ye = String((((q = r.uiState) == null ? void 0 : q.stageStatus) === "failed" ? (_e = r.uiState) == null ? void 0 : _e.stageStatusDetail : (pe = r.uiState) == null ? void 0 : pe.stageWarningDetail) ?? "");
      return ye === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : ye === "stickers" ? "One or more sticker previews are unavailable." : ye === "frame" ? "The editor hit a rendering error. Check the browser console for details." : ye === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : ye.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), j = nt(() => {
      var ye, q, _e;
      return ((ye = r.uiState) == null ? void 0 : ye.stageStatus) === "failed" || (q = r.uiState) != null && q.stageWarningDetail ? y.value : (_e = r.uiState) == null ? void 0 : _e.stageNotice;
    }), K = nt(() => {
      var q;
      const ye = Array.isArray((q = v.value) == null ? void 0 : q.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return g.value && ye.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: je.fullscreen
      }), ye;
    });
    function F() {
      const ye = l.value;
      return ye ? Array.from(ye.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((q) => q instanceof HTMLElement ? !q.hidden && q.tabIndex >= 0 && q.offsetParent !== null : !1) : [];
    }
    function M() {
      var _e;
      const q = F()[0] || l.value;
      (_e = q == null ? void 0 : q.focus) == null || _e.call(q);
    }
    function R() {
      var ye;
      a != null && a.isConnected && ((ye = a.focus) == null || ye.call(a)), a = null;
    }
    function Z(ye) {
      var q, _e, pe, de;
      if (!ye.defaultPrevented) {
        if (ye.key === "Tab") {
          const te = F();
          if (!te.length) {
            ye.preventDefault(), (_e = (q = l.value) == null ? void 0 : q.focus) == null || _e.call(q);
            return;
          }
          const ge = te[0], oe = te[te.length - 1], I = document.activeElement;
          if (ye.shiftKey) {
            (I === ge || I === l.value || !((pe = l.value) != null && pe.contains(I))) && (ye.preventDefault(), oe.focus());
            return;
          }
          (I === oe || !((de = l.value) != null && de.contains(I))) && (ye.preventDefault(), ge.focus());
          return;
        }
        ye.key === "Escape" && i("close");
      }
    }
    function Y() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ae() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function Se(ye) {
      document.removeEventListener("keydown", Z), ye ? (a || (a = document.activeElement), Y(), document.addEventListener("keydown", Z), ja(() => {
        M();
      })) : (ae(), R());
    }
    return Ka(() => {
      Se(r.open);
    }), es(() => {
      ae(), document.removeEventListener("keydown", Z), R();
    }), ri(() => r.open, (ye) => {
      Se(ye);
    }), (ye, q) => e.open ? (Ee(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: q[2] || (q[2] = pt((_e) => i("close"), ["self"]))
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
        Ne("div", U2, [
          Ne("div", B2, [
            q[3] || (q[3] = Ne("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            q[4] || (q[4] = Ne("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            q[5] || (q[5] = Ne("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Ee(), De("div", Y2, Xe(j.value), 1)) : tt("", !0),
            q[6] || (q[6] = Ne("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ne("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(xP, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(t0, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: m,
              onFileCancelled: S
            }, null, 512),
            g.value ? tt("", !0) : (Ee(), De(qe, { key: 1 }, [
              Be(P2, {
                buttons: e.uiState.toolButtons || v.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(YM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(kP, {
                "paint-swatches": e.paintSwatches,
                panes: v.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be($2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(G2, {
              buttons: e.uiState.viewButtons || v.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(KM, {
              buttons: e.uiState.floatingButtons || K.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(OP, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(x2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(eP, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(k2, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: q[0] || (q[0] = (_e) => i("timeline", _e))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? tt("", !0) : (Ee(), bn(HN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: q[1] || (q[1] = (_e) => i("timeline", _e))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, W2)
    ])) : tt("", !0);
  }
}, zn = "loading", Jo = "ready", In = "failed";
function N0(e, t = "") {
  return e && (e.__panoLoadState = zn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function A0(e, t = "") {
  return e && (e.__panoLoadState = Jo, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function C0(e, t = "") {
  return e && (e.__panoLoadState = In, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Wc(e, t) {
  return e ? e.__panoLoadState === In ? In : typeof t == "function" && t(e) ? Jo : zn : Jo;
}
function Uc(e) {
  return Wc(e) === In;
}
function X2({ presented: e, background: t = Jo, stickers: n = [] } = {}) {
  if (!e) return { status: zn, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === zn, o = r.includes(zn);
  if (i && o) return { status: zn, detail: "mixed" };
  if (i) return { status: zn, detail: "background" };
  if (o) return { status: zn, detail: "stickers" };
  const s = t === In, a = r.includes(In);
  return s && a ? { status: In, detail: "mixed" } : s ? { status: In, detail: "background" } : a ? { status: In, detail: "stickers" } : { status: Jo, detail: "" };
}
const J2 = "state_json", Z2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), pd = "sticker_image_1", Q2 = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), I0 = 0.01, eA = "external_image", ai = "pano_sticker_input_images", E0 = "pano_sticker_input_videos", O0 = "pano_sticker_input_frames", F0 = "pano_sticker_input_video_meta", tA = !0, rl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], ir = Math.PI / 180, ui = 180 / Math.PI, Bc = 1, T0 = "rgb(255, 221, 87)", nA = "rgb(228, 228, 231)", rA = "rgb(180, 150, 60)", iA = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, oA = 64, wp = 40, Xl = 16, sA = 0.45, kp = 180, aA = 160, Ea = 24, lA = 4, cA = 4;
function Jl(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function uA(e) {
  return 1 - Math.pow(1 - e, 3);
}
function dA(e, t, n) {
  const r = Oe((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function fA(e) {
  return e * e * e;
}
function il(e, t, n) {
  return { x: e, y: t, z: n };
}
function xp(e, t) {
  return il(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Mp(e, t) {
  return il(e.x * t, e.y * t, e.z * t);
}
function Zl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function pA(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return il(e.x / t, e.y / t, e.z / t);
}
function Pp(e) {
  return {
    yaw: It(Math.atan2(e.x, e.z) * ui),
    pitch: Oe(Math.asin(Oe(e.y, -1, 1)) * ui, -90, 90)
  };
}
function Nr(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, s = t[r].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (n = !n);
  }
  return n;
}
function po(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Ql(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = r * r + i * i;
  if (a <= 1e-6) return po(e, t);
  const l = Oe((o * r + s * i) / a, 0, 1), c = Number(t.x || 0) + r * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Cn(e, t, n) {
  return e + (t - e) * n;
}
function Qn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Oe(n, 0, 1)})`;
}
function mA(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ns = { fillStyle: "", url: "" };
function hA(e, t, n) {
  if (Ns.url && Ns.fillStyle === String(e || ""))
    return Ns.url;
  const r = mA(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Ea}" height="${Ea}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ns = { fillStyle: String(e || ""), url: r }, r;
}
function Oa(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function wn(e) {
  return {
    r: Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Oe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Io(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function gA(e) {
  return rl.some((t) => Oa(e, t.color));
}
function Yc(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = Oe(Number(t), 0, 1), o = Oe(Number(n), 0, 1);
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
function qc(e) {
  const t = Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((n - r) / s + (n < r ? 6 : 0)) / 6 : i === n ? a = ((r - t) / s + 2) / 6 : a = ((t - n) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function Vi(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function yA(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Np(e) {
  const { paintCount: t, maskCount: n } = yA(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function D0(e, t, n, r, i) {
  const o = n.bbox, s = n.transform || {}, a = Number(o.u0 || 0) * r, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * r), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * r, f = l + d * 0.5 + Number(s.dv || 0) * i, m = Number(s.rot_deg || 0) * ir, S = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-r, 0, r])
    e.save(), e.translate(u + g, f), e.rotate(m), e.scale(S, S), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Ci(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function As(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function bA(e, t) {
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
function mo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function vA(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function SA(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function _A(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const L0 = "pano_suite.ui_settings.v1", R0 = "pano_suite.node_grid_visibility.v1";
let Pi = null, qn = null;
function Ys(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function wA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(L0)) || "").trim();
    if (!t) return Pi ? Ys(Pi) : null;
    const n = JSON.parse(t), r = Ys(n);
    return Pi = r, r;
  } catch {
    return Pi ? Ys(Pi) : null;
  }
}
function kA(e) {
  var n;
  const t = Ys(e);
  Pi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(L0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function V0() {
  var e;
  if (qn && typeof qn == "object")
    return qn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(R0)) || "").trim();
    if (!t)
      return qn = {}, qn;
    const n = JSON.parse(t);
    return qn = n && typeof n == "object" ? n : {}, qn;
  } catch {
    return qn = {}, qn;
  }
}
function xA(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = V0()[n];
  return typeof i == "boolean" ? i : !!t;
}
function MA(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = V0();
  r[n] = !!t, qn = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(R0, JSON.stringify(r));
  } catch {
  }
}
function PA(e, t) {
  const n = { ...e }, r = t.map((i) => i(ec(e, i.name)));
  for (const { connect: i, ...o } of r) {
    for (const s of Object.keys(o))
      if (s in n) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(n, o);
  }
  return r.forEach((i, o) => i.connect(ec(n, t[o].name))), ec(n, "showEditor");
}
function ec(e, t) {
  return new Proxy(e, {
    get(n, r) {
      if (!(r in n)) throw new Error(`Panorama editor: ${t} takes ${String(r)}, which nothing provides`);
      return n[r];
    }
  });
}
const NA = "/panorama_suite/file_3d", AA = 3;
function md(e) {
  return {
    filename: String((e == null ? void 0 : e.filename) ?? ""),
    subfolder: String((e == null ? void 0 : e.subfolder) ?? ""),
    storage: String((e == null ? void 0 : e.storage) ?? "input")
  };
}
function CA({ filename: e, subfolder: t }) {
  return t ? `${t}/${e}` : e;
}
function tc(e, t) {
  return { ok: !1, error: `Could not read the 3D file ${CA(e)}: ${t}` };
}
async function IA(e, { fetchApi: t }) {
  const n = md(e);
  let r;
  try {
    r = await t(NA, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n)
    });
  } catch (s) {
    return tc(n, `${(s == null ? void 0 : s.message) || s}.`);
  }
  let i = null;
  try {
    i = await r.json();
  } catch {
    i = null;
  }
  if (r.status !== 200)
    return typeof (i == null ? void 0 : i.error) == "string" && i.error ? { ok: !1, error: i.error } : tc(n, `the server answered ${r.status}.`);
  const o = i == null ? void 0 : i.kind;
  return o !== "mesh" && o !== "splat" || !i.file || typeof i.file != "object" ? tc(n, "the server's reply was not understood.") : { ok: !0, kind: o, unlit: o !== "mesh" || i.unlit !== !1, file: i.file };
}
function Ap(e) {
  const { storage: t, subfolder: n, filename: r } = md(e);
  return JSON.stringify([t, n, r]);
}
function EA({ fetchApi: e, onUpdate: t = () => {
} }) {
  const n = /* @__PURE__ */ new Map();
  let r = !1;
  function i(s, a, l, c) {
    const d = { state: "pending", kind: null, unlit: !0, file: null, error: null, generation: l }, u = IA(a, { fetchApi: e }).then((f) => {
      var m;
      return ((m = n.get(s)) == null ? void 0 : m.entry) !== d || (Object.assign(d, f.ok ? { state: "ready", kind: f.kind, unlit: f.unlit, file: f.file } : { state: "failed", error: f.error }), r || t()), d;
    });
    return n.set(s, { entry: d, pending: u, values: a, refreshes: c }), d;
  }
  function o(s) {
    const a = Ap(s);
    return n.has(a) || i(a, md(s), 0, 0), n.get(a);
  }
  return {
    get(s) {
      return o(s).entry;
    },
    request(s) {
      return o(s).pending;
    },
    refresh(s) {
      const a = Ap(s), l = n.get(a);
      if (!l) {
        o(s);
        return;
      }
      l.entry.state === "pending" || l.refreshes >= AA || i(a, l.values, l.entry.generation + 1, l.refreshes + 1);
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
const Er = /* @__PURE__ */ new Map(), OA = 12;
function FA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Er.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Er.delete(t), Er.set(t, n), n);
}
function TA(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Er.delete(n), Er.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Er.size > OA; ) {
      const i = Er.keys().next().value;
      if (!i) break;
      Er.delete(i);
    }
}
function DA(e) {
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
    portVideoEl: m,
    readOnly: S,
    runtime: g,
    scheduler: v,
    stageWrap: y,
    state: j,
    stateV2: K,
    stillCanvas: F,
    studio: M,
    timelinePlayhead: R,
    type: Z,
    uiState: Y,
    videoEl: ae
  } = e;
  let Se, ye, q, _e, pe, de, te, ge;
  const oe = K ? EA({ fetchApi: (Q, Pe) => t.fetchApi(Q, Pe), onUpdate: () => q() }) : null, I = {
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
  }, V = 9, N = [];
  let fe = 0;
  const C = () => {
    var it, at;
    const Q = (it = y == null ? void 0 : y.getBoundingClientRect) == null ? void 0 : it.call(y), Pe = (at = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : at.call(o), ee = Math.max(0, Number((Q == null ? void 0 : Q.width) || 0)), ke = Pe ? Math.max(0, Number(Pe.width || 0)) : 0, Te = ke > 0 ? ke + 14 + 12 : 72, $e = Math.max(280, Math.floor(ee - Te * 2)), Ue = r.fullscreen ? Math.min(1200, $e) : $e;
    Y.videoTransport.shellMaxWidthPx = Ue;
  }, O = () => {
    fe || (fe = v.requestFrame(() => {
      fe = 0, C();
    }));
  }, _ = (Q) => {
    if (!(Q instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(Q.audioTracks) && Q.audioTracks.length > 0 || Q.audioTracks && typeof Q.audioTracks.length == "number" && Q.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof Q.mozHasAudio == "boolean") return Q.mozHasAudio;
    } catch {
    }
    try {
      if (Number(Q.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!Y.videoTransport.hasAudio;
  }, P = typeof ResizeObserver < "u" ? new ResizeObserver(() => O()) : null;
  P == null || P.observe(y), o && (P == null || P.observe(o)), N.push(() => {
    var Q;
    fe && (v.cancelFrame(fe), fe = 0), (Q = P == null ? void 0 : P.disconnect) == null || Q.call(P);
  }), O();
  const ce = () => {
    I.thumbnailJobId += 1, I.thumbnailSrc = "", Y.videoTransport.thumbnails = [], Y.videoTransport.thumbnailCount = V;
  }, be = async (Q, Pe, ee) => {
    const ke = String(Q || "").trim();
    if (!ke) {
      ce();
      return;
    }
    const Ae = FA(ke);
    if (Ae) {
      I.thumbnailSrc = ke, Y.videoTransport.thumbnails = Ae.thumbnails, Y.videoTransport.thumbnailCount = Ae.thumbnailCount;
      return;
    }
    const Ie = ++I.thumbnailJobId;
    I.thumbnailSrc = ke, Y.videoTransport.thumbnails = [], Y.videoTransport.thumbnailCount = V;
    const Te = ns(document, "editor.thumbnails");
    Te.preload = "auto", Te.muted = !0, Te.playsInline = !0, Te.crossOrigin = "anonymous";
    const $e = Kt({ label: "editor.thumbnail" });
    try {
      const Ue = await new Promise((en) => {
        let Sn = !1;
        const Gt = (Ot) => {
          Sn || (Sn = !0, en(Ot));
        };
        Te.addEventListener("loadedmetadata", () => Gt(!0), { once: !0 }), Te.addEventListener("canplay", () => Gt(!0), { once: !0 }), Te.addEventListener("error", () => Gt(!1), { once: !0 }), Te.src = ke, Te.load();
      });
      if (I.thumbnailJobId !== Ie) return;
      const it = Number(Te.videoWidth || 0), at = Number(Te.videoHeight || 0);
      if (!Ue || it < 1 || at < 1) {
        I.thumbnailFailedSrcs.add(ke);
        return;
      }
      const St = Math.max(0, Number(Te.duration || Pe || 0)), ut = 46, Et = Math.max(72, Math.round(it / at * ut));
      $e.width = Et, $e.height = ut;
      const Ye = $e.getContext("2d");
      if (!Ye) return;
      const Vt = [], zt = (en) => new Promise((Sn) => {
        let Gt = !1;
        const Ot = () => {
          Gt || (Gt = !0, Sn());
        };
        Te.addEventListener("seeked", Ot, { once: !0 }), Te.addEventListener("error", Ot, { once: !0 });
        try {
          Te.currentTime = en;
        } catch {
          Ot();
        }
      });
      for (let en = 0; en < V; en += 1) {
        if (I.thumbnailJobId !== Ie) return;
        const Sn = V <= 1 ? 0 : en / (V - 1), Gt = St > 0 ? Math.max(0, Math.min(St - Math.max(1e-3, 0.5 / Math.max(1, Number(ee || 24))), St * Sn)) : 0;
        if (await zt(Gt), I.thumbnailJobId !== Ie) return;
        Ye.clearRect(0, 0, Et, ut), Ye.drawImage(Te, 0, 0, Et, ut), Vt.push({
          id: `thumb-${en}`,
          src: $e.toDataURL("image/jpeg", 0.72),
          time: Gt,
          label: X(Gt)
        });
      }
      if (I.thumbnailJobId !== Ie) return;
      Y.videoTransport.thumbnails = Vt, Y.videoTransport.thumbnailCount = Vt.length || V, TA(ke, {
        thumbnails: Vt,
        thumbnailCount: Vt.length || V,
        duration: St,
        fps: ee
      });
    } finally {
      Te.removeAttribute("src"), Te.load(), Qr($e);
    }
  };
  N.push(() => {
    ce();
  });
  const D = Lg({
    video: ae instanceof HTMLVideoElement ? ae : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (Q) => v.requestFrame(Q),
      cancelFrame: (Q) => v.cancelFrame(Q)
    },
    fps: le,
    span: () => {
      if (K) return te();
      const Q = Math.round(Number(Y.videoTransport.duration || 0) * le());
      return ae.loop || !(Q > 0) ? 1 / 0 : Q;
    },
    loop: () => K,
    // Panorama Studio's background VIDEO is where its Clip range puts it (state.background).
    place: () => Se(),
    onFrame: (Q) => {
      K ? _e(Q) : L(), q({ cause: "frame_view", localOnly: !0, reason: ot.PLAYHEAD });
    },
    onCapture: () => {
      ie() && (g.backgroundDirty = !0);
    },
    onChange: () => {
      L(), R.playing.value = D.playing, de(), q({ cause: "frame_view", localOnly: !0, reason: ot.PLAYHEAD });
    }
  });
  N.push(() => D.dispose());
  const b = K && m instanceof HTMLVideoElement ? Zu({
    video: m,
    onCapture: () => {
      var ee;
      const Q = Number(m.videoWidth || 0), Pe = Number(m.videoHeight || 0);
      Q < 1 || Pe < 1 || (f.width = Q, f.height = Pe, (ee = f.getContext("2d")) == null || ee.drawImage(m, 0, 0), f.__panoFrameIdx += 1, q({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA }));
    },
    onChange: () => q({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA })
  }) : null;
  b && N.push(() => b.dispose());
  const W = K ? Iu({
    createImage: (Q, Pe) => {
      const ee = new Image();
      return ee.onload = Pe, ee.onerror = Pe, ee.src = Q, ee;
    },
    onLoad: () => q({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA })
  }) : null;
  if (ae instanceof HTMLVideoElement) {
    const Q = () => {
      Ce(), q({ cause: "frame_view", localOnly: !0 });
    }, Pe = () => {
      L({
        hasAudio: Y.videoTransport.hasAudio,
        muted: ae.muted,
        volume: Number(ae.volume ?? Y.videoTransport.volume ?? 1)
      });
    }, ee = () => {
      const ke = ae.dataset.panoSrc;
      ke && (I.failedSrcs.add(ke), Ce(), q());
    };
    for (const [ke, Ae] of [
      ["loadedmetadata", Q],
      ["loadeddata", Q],
      ["canplay", Q],
      ["volumechange", Pe],
      ["error", ee]
    ])
      ae.addEventListener(ke, Ae), N.push(() => ae.removeEventListener(ke, Ae));
  }
  function p(Q) {
    return n.uiList(u, Q);
  }
  function h(Q) {
    return n.uiValue(u, Q);
  }
  function k() {
    const Q = String((u == null ? void 0 : u.comfyClass) || (u == null ? void 0 : u.type) || (u == null ? void 0 : u.title) || "");
    if (sa(Q))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const Pe = xe();
    return Pe ? { videoKey: Pe.videoKey, metaKey: Pe.metaKey } : Z === "stickers" || Z === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function E() {
    const { metaKey: Q } = k(), Pe = h(Q);
    return Array.isArray(Pe) && Pe.length > 0 && Pe[0] && typeof Pe[0] == "object" ? Pe[0] : Pe && typeof Pe == "object" ? Pe : null;
  }
  function $(Q) {
    return Q ? Q instanceof HTMLVideoElement ? [
      String(Q.currentSrc || Q.src || ""),
      Number(Q.videoWidth || 0),
      Number(Q.videoHeight || 0)
    ].join("|") : Q instanceof HTMLCanvasElement ? [
      "canvas",
      Number(Q.width || 0),
      Number(Q.height || 0),
      String(Q.__panoFrameIdx || 0)
    ].join("|") : [
      String(Q.currentSrc || Q.src || ""),
      Number(Q.naturalWidth || Q.width || 0),
      Number(Q.naturalHeight || Q.height || 0)
    ].join("|") : "none";
  }
  function X(Q) {
    const Pe = Math.max(0, Math.floor(Number(Q || 0))), ee = Math.floor(Pe / 60), ke = Pe % 60;
    return `${ee}:${String(ke).padStart(2, "0")}`;
  }
  function le() {
    return K ? j.timeline.fps : I.metaFps || 1e3;
  }
  function L(Q = {}) {
    const Pe = Number(Q.duration ?? Y.videoTransport.duration ?? 0), ee = Math.max(1, Number(Q.fps ?? Y.videoTransport.fps ?? 24)), ke = D.frame / le(), Ae = Object.prototype.hasOwnProperty.call(Q, "ready") ? !!Q.ready : !!Y.videoTransport.ready, Ie = D.playing, Te = Object.prototype.hasOwnProperty.call(Q, "visible") ? !!Q.visible : !!Y.videoTransport.visible, $e = Object.prototype.hasOwnProperty.call(Q, "muted") ? !!Q.muted : !!(ae instanceof HTMLVideoElement ? ae.muted : Y.videoTransport.muted), Ue = Number(
      Object.prototype.hasOwnProperty.call(Q, "volume") ? Q.volume : ae instanceof HTMLVideoElement ? ae.volume : Y.videoTransport.volume
    ), it = Object.prototype.hasOwnProperty.call(Q, "hasAudio") ? !!Q.hasAudio : _(ae), at = Object.prototype.hasOwnProperty.call(Q, "loop") ? !!Q.loop : !!Y.videoTransport.loop;
    Object.assign(Y.videoTransport, {
      ready: Ae,
      playing: Ie,
      visible: Te,
      loop: at,
      currentTime: Number.isFinite(ke) ? ke : 0,
      duration: Number.isFinite(Pe) ? Pe : 0,
      progressPct: Pe > 1e-6 ? Math.max(0, Math.min(100, ke / Pe * 100)) : 0,
      currentTimeLabel: X(ke),
      durationLabel: X(Pe),
      frameCount: Math.max(0, Number(Q.frameCount ?? Y.videoTransport.frameCount ?? 0)),
      fps: ee,
      hasAudio: it,
      muted: $e,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ue) ? Ue : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ue) ? Ue : 1)) * 100),
      thumbnails: Array.isArray(Q.thumbnails) ? Q.thumbnails : Y.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(Q.thumbnailCount ?? Y.videoTransport.thumbnailCount ?? V))
    });
  }
  function re() {
    return !!(ae instanceof HTMLVideoElement && !K && ae.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function x() {
    if (!(ae instanceof HTMLVideoElement) || !Y.videoTransport.hasAudio) return;
    const Q = !ae.muted;
    ae.muted = Q, !Q && Number(ae.volume || 0) <= 0 && (ae.volume = Math.max(0.01, Number(Y.videoTransport.volume || 1))), L({
      hasAudio: Y.videoTransport.hasAudio,
      muted: ae.muted,
      volume: Number(ae.volume ?? Y.videoTransport.volume ?? 1)
    });
  }
  function U() {
    L({
      visible: re()
    });
  }
  function ie() {
    if (!(ae instanceof HTMLVideoElement) || Number(ae.videoWidth || 0) < 1 || Number(ae.videoHeight || 0) < 1) return !1;
    const Q = Number(ae.videoWidth || 0), Pe = Number(ae.videoHeight || 0);
    (F.width !== Q || F.height !== Pe) && (F.width = Q, F.height = Pe);
    const ee = F.getContext("2d");
    return ee ? (ee.clearRect(0, 0, Q, Pe), ee.drawImage(ae, 0, 0, Q, Pe), F.__panoFrameIdx = Number(F.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function we() {
    return !D.showsVideo && Number(F.width || 0) > 0 && Number(F.height || 0) > 0 && Number(F.__panoFrameIdx || 0) > 0 ? F : ae instanceof HTMLVideoElement && Number(ae.videoWidth || 0) > 0 && Number(ae.videoHeight || 0) > 0 && Number(ae.readyState || 0) >= 2 ? ae : null;
  }
  function Me() {
    F.__panoFrameIdx = 0, g.backgroundDirty = !0;
  }
  function Ce() {
    if (!(ae instanceof HTMLVideoElement)) return null;
    const { videoKey: Q } = k(), Pe = (xe() || bt(u, "background")) && p(Q)[0] || null, ee = c(Pe), ke = [ee, n.linkedVideoFile(u, Le())].filter(Boolean), Ae = ke.find((St) => !I.failedSrcs.has(St)) || "";
    I.videoFailed = !Ae && ke.length > 0;
    const Ie = Ae && Ae === ee ? E() : null;
    I.metaFps = Number(Ie == null ? void 0 : Ie.fps) > 0 ? Number(Ie.fps) : 0;
    const Te = Math.max(1, Number((Ie == null ? void 0 : Ie.fps) || (K ? j.timeline.fps : 24))), $e = ae.dataset.panoSrc === Ae && Number.isFinite(ae.duration) ? ae.duration : 0, Ue = Number((Ie == null ? void 0 : Ie.duration) || ((Ie == null ? void 0 : Ie.frames) > 0 ? Ie.frames / Te : $e)), it = Math.max(0, Number((Ie == null ? void 0 : Ie.frames) || Math.round(Ue * Te))), at = !!(Ie != null && Ie.has_audio) || _(ae);
    return Ae && ae.dataset.panoSrc !== Ae ? (ae.pause(), Me(), ae.dataset.panoSrc = Ae, ae.loop = !K && !!Y.videoTransport.loop, ae.muted = !!Y.videoTransport.muted, ae.volume = Math.max(0, Math.min(1, Number(Y.videoTransport.volume ?? 1))), ae.src = Ae, ae.load(), D.setSource(!0), K || D.seek(0)) : !Ae && ae.getAttribute("src") && (ae.pause(), ae.removeAttribute("src"), delete ae.dataset.panoSrc, ae.load(), Me(), ce(), D.setSource(!1)), K || (ae.loop = !!Y.videoTransport.loop), Ae && !K && I.thumbnailSrc !== Ae && !I.thumbnailFailedSrcs.has(Ae) && be(Ae, Ue, Te), Ae || ce(), L({
      ready: !!Ae,
      visible: !!Ae && re(),
      duration: Ue,
      frameCount: it,
      fps: Te,
      hasAudio: at,
      loop: !!ae.loop,
      muted: !!ae.muted,
      volume: Number(ae.volume ?? Y.videoTransport.volume ?? 1),
      thumbnailCount: Y.videoTransport.thumbnailCount
    }), Ae || null;
  }
  function me(Q, Pe = null) {
    return d(u, Q, s, Pe || (() => q()));
  }
  function ue(Q = null) {
    return bt(u, "external-sticker") ? me(ai, Q) : null;
  }
  function A() {
    if (!bt(u, "external-sticker")) return null;
    const Q = p(F0)[0];
    if (!Q || typeof Q != "object") return null;
    const Pe = p(O0).map(c).filter(Boolean);
    if (Pe.length) return { frames: Pe, meta: Q };
    const ee = c(p(E0)[0] || null);
    return ee ? { src: ee, meta: Q } : null;
  }
  function J() {
    return bt(u, "external-sticker") ? jo(p) : null;
  }
  function H() {
    const Q = j.stickers.find(ye), Pe = Q ? A() : null, ee = Pe ? Nu(Q.clip, r.frame, j.timeline.fps, Pe.meta) : null;
    b.follow({ src: (Pe == null ? void 0 : Pe.src) || "", time: ee, playing: D.advancing, fps: j.timeline.fps });
    const ke = Q ? se(Q) : null, Ae = Pe != null && Pe.frames ? W.picture(Pe.frames, ee, Pe.meta, ke) : b.picture(f, ke);
    return Ae ? { media: Ae, revision: $(Ae), source: Cu(Pe, ke) } : null;
  }
  function z() {
    return !K || !bt(u, "scene") ? null : ga(p("pano_scene_files"), p("pano_scene_meta"), c);
  }
  function T() {
    return !K || !bt(u, "external-sticker") ? null : ga(p("pano_sticker_files"), p("pano_sticker_meta"), c);
  }
  function B(Q) {
    if (!oe || !ii(Q == null ? void 0 : Q.source)) return null;
    const Pe = oe.get(Q.source), ee = Pe.state === "ready" ? c(Pe.file) : null;
    return ee ? { kind: Pe.kind, unlit: Pe.unlit, url: ee, generation: Pe.generation } : null;
  }
  function G(Q) {
    return oe.request(Q);
  }
  function w(Q) {
    oe == null || oe.refresh(Q);
  }
  function ne() {
    var ke;
    if (!oe) return "";
    const Q = oe.failures();
    if (!Q.length) return "";
    const Pe = [...j.stickers, ...ge()].map((Ae) => Ae.source).filter(ii), ee = (Ae, Ie) => Ae.filename === Ie.filename && (Ae.subfolder ?? "") === Ie.subfolder && (Ae.storage ?? "input") === Ie.storage;
    return ((ke = Q.find((Ae) => Pe.some((Ie) => ee(Ie, Ae.source)))) == null ? void 0 : ke.error) ?? "";
  }
  function se(Q) {
    var Te;
    if (K && ii(Q == null ? void 0 : Q.source)) return null;
    if (Q && typeof Q == "object" && (ye(Q) || Q.external === !0))
      return ue(() => {
        Or(u, "image-loaded");
      });
    const Pe = K ? ve(Q) : String(Q && typeof Q == "object" ? Q.asset_id || Q.assetId || "" : Q || "");
    if (!Pe) return null;
    const ee = s.get(Pe);
    if (ee) return ee;
    const ke = K ? ma(Q.source) : (Te = j.assets) == null ? void 0 : Te[Pe], Ae = l(ke);
    if (!Ae) return null;
    const Ie = new Image();
    return N0(Ie, Ae), Ie.onload = () => {
      A0(Ie, Ae), q();
    }, Ie.onerror = () => {
      C0(Ie, Ae), q();
    }, Ie.src = Ae, s.set(Pe, Ie), Ie;
  }
  function ve(Q) {
    const { source: Pe } = Q;
    return Pe.filename ? `file:${Pe.storage}:${Pe.subfolder}:${Pe.filename}` : `sticker:${Q.id}`;
  }
  function he() {
    if (Z === "cutout") {
      const Ie = we();
      if (Ie) return Ie;
      const Te = a(
        u,
        ["erp_image", "bg_erp"],
        () => q(),
        "background:cutout:erp_image|bg_erp"
      );
      return Te && !Uc(Te) ? Te : d(u, "pano_input_images", s, () => q()) || Te || null;
    }
    const Q = we();
    if (Q) return Q;
    const Pe = xe(), ee = Pe || bt(u, "background") ? d(u, (Pe == null ? void 0 : Pe.imageKey) ?? "pano_input_images", s, () => q()) : null;
    if (ee && !Uc(ee)) return ee;
    if (ae instanceof HTMLVideoElement && ae.dataset.panoSrc) return ae;
    if (Pe) return ee;
    const ke = Le();
    return a(u, ke, () => q(), `background:${ke.join("|")}`) || ee || null;
  }
  function xe() {
    return !M || !bt(u, "scene") ? null : Qu(p);
  }
  function Fe() {
    var Q;
    return ((Q = xe()) == null ? void 0 : Q.coverage) ?? vn(j.coverage);
  }
  function Le() {
    if (xe()) return [];
    if (Z === "cutout") return ["erp_image", "bg_erp"];
    const Q = Array.isArray(u == null ? void 0 : u.inputs) ? u.inputs.map((ke) => String((ke == null ? void 0 : ke.name) || "")) : [], Pe = Q.includes("erp_image"), ee = Q.includes("bg_erp");
    return S && (Pe || ee) ? Pe ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : Z === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function ze(Q) {
    return Q ? Q instanceof HTMLImageElement ? !!Q.complete && Number(Q.naturalWidth || Q.width || 0) > 0 && Number(Q.naturalHeight || Q.height || 0) > 0 : Q instanceof HTMLVideoElement ? Number(Q.videoWidth || 0) > 0 && Number(Q.videoHeight || 0) > 0 && Number(Q.readyState || 0) >= 2 : Number(Q.width || Q.naturalWidth || 0) > 0 && Number(Q.height || Q.naturalHeight || 0) > 0 : !1;
  }
  function We() {
    if (i.failed) return { status: In, detail: "renderer" };
    if (!i.ready) return { status: zn, detail: "boot" };
    const Q = he(), Pe = I.videoFailed ? In : Wc(Q, ze), ee = [];
    for (const ke of pe()) {
      if ((ke == null ? void 0 : ke.visible) === !1) continue;
      const Ae = se(ke);
      ee.push(Wc(Ae, ze));
    }
    return X2({
      presented: g.hasPresentedFrame,
      background: Pe,
      stickers: ee
    });
  }
  function Ge() {
    oe == null || oe.close(), ae instanceof HTMLVideoElement && ae.pause(), N.forEach((Q) => {
      try {
        Q();
      } catch {
      }
    });
  }
  return {
    connect(Q) {
      ({
        backgroundVideoPlace: Se,
        isExternalSticker: ye,
        requestDraw: q,
        setTimelineFrame: _e,
        skyStickers: pe,
        syncTimeline: de,
        timelineSpanFrames: te,
        upstreamStickers: ge
      } = Q);
    },
    videoState: I,
    queueVideoTransportLayout: O,
    playback: D,
    portVideo: b,
    getNodeUiValue: h,
    getMediaRevisionToken: $,
    playbackFps: le,
    syncVideoTransportState: L,
    toggleVideoMuted: x,
    syncVideoTransportVisibility: U,
    refreshModalVideoSource: Ce,
    getStickerUiImage: me,
    getExternalStickerPreviewImage: ue,
    getPortMediaMeta: J,
    followPortSticker: H,
    getStickerImage: se,
    stickerImageKey: ve,
    getConnectedErpImage: he,
    backgroundCoverage: Fe,
    upstreamBackground: xe,
    isDecodedImageReady: ze,
    getStageImageStatus: We,
    sceneFiles: z,
    stickerFiles: T,
    file3dEditorFile: B,
    requestFile3d: G,
    refreshFile3d: w,
    file3dNotice: ne,
    disposeMediaSession: Ge
  };
}
function LA(e = 80, t = null, n = 8) {
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
      const c = r.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = r.slice(u, u + s), m = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: m
      };
    },
    hydrate: a
  };
}
const RA = 80;
function $0(e) {
  return JSON.stringify(DS(e));
}
function VA(e) {
  return LA(RA, { entries: [$0(e)], index: 0 });
}
function z0(e, t) {
  var n, r;
  return (e === "stickers" ? (n = t.active) == null ? void 0 : n.selected_sticker_id : (r = t.active) == null ? void 0 : r.selected_shot_id) ?? null;
}
function $A(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se;
  function ye({ initial: pe = !1 } = {}) {
    n || (M(), Z(), ae(), pe || g(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup($0(F())), Y()));
  }
  function q(pe) {
    var I, V, N;
    if (n) return;
    K();
    const de = pe < 0 ? t.historyController.undo() : t.historyController.redo();
    if (Y(), !de) return;
    const te = LS(i, de), ge = (I = i.timeline) == null ? void 0 : I.fps, oe = JSON.stringify((V = i.background) == null ? void 0 : V.clip);
    Object.keys(i).forEach((fe) => delete i[fe]), Object.assign(i, te.state), M(!1), Z({ restored: !0 }), o && v(), o && i.timeline.fps !== ge ? S.seek(Math.round(t.frame * i.timeline.fps / ge)) : o && JSON.stringify(i.background.clip) !== oe && S.seek(t.frame), t.selectedId = z0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((N = d()) == null ? void 0 : N.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), r.backgroundDirty = !0, te.paintingChanged ? m() : f(), R(), Se(), c(), j({ cause: "cutout_frame" });
  }
  function _e() {
    var te, ge;
    const pe = Array.isArray((te = t.historyController) == null ? void 0 : te.entries) ? t.historyController.entries : [], de = Number((ge = t.historyController) == null ? void 0 : ge.index);
    return {
      canUndo: !n && pe.length > 1 && de > 0,
      canRedo: !n && pe.length > 1 && de >= 0 && de < pe.length - 1
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
        markPaintStrokeVisualsDirty: m,
        playback: S,
        pruneUpstreamRecords: g,
        rebuildUpstreamWorking: v,
        releaseHiddenSelection: y,
        requestDraw: j,
        stopTimelinePlayback: K,
        storedEditorState: F,
        syncCutoutShot: M,
        syncPaintUi: R,
        syncPortHandoff: Z,
        syncUndoRedoButtons: Y,
        syncUpstreamEdits: ae,
        updateSidePanel: Se
      } = pe);
    },
    pushHistory: ye,
    restoreHistory: q,
    getHistoryCapabilities: _e
  };
}
function zA(e) {
  const {
    canvas: t,
    editor: n,
    sceneV2: r,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, S, g, v;
  function y() {
    return s !== "stickers" ? i.shots : r ? [...j(), ...K()] : j();
  }
  function j() {
    return r ? i.stickers.filter((w) => w.placement === "sky") : i.stickers;
  }
  function K() {
    if (!r) return [];
    const w = v(), ne = [...new Set(w.map((se) => se.origin.layer))];
    return w.filter((se) => se.placement === "sky").sort((se, ve) => ne.indexOf(se.origin.layer) - ne.indexOf(ve.origin.layer) || se.z_index - ve.z_index);
  }
  function F(w) {
    return i.stickers.find((ne) => ne.id === w) || v().find((ne) => ne.id === w) || null;
  }
  function M(w) {
    return r && b(w);
  }
  function R(w) {
    return w.source.kind === "file" && !w.source.filename && !w.source.data_url;
  }
  function Z(w) {
    if (!M(w)) return w;
    const ne = me(w) ? Ct(w) ? g(w) : m(w) : null;
    return Ou(w, n.frame, ne && { width: ne.naturalWidth || ne.width, height: ne.naturalHeight || ne.height });
  }
  function Y(w, ne) {
    M(w) ? Th(w, n.frame, ne) : Object.assign(w, ne);
  }
  function ae() {
    const w = i.painting || (i.painting = fi(null));
    return Array.isArray(w.groups) || (w.groups = []), w.groups;
  }
  function Se(w = "paint") {
    var he, xe;
    const ne = Array.isArray((xe = (he = i.painting) == null ? void 0 : he[w]) == null ? void 0 : xe.strokes) ? i.painting[w].strokes : [], se = [], ve = /* @__PURE__ */ new Set();
    for (const Fe of ne) {
      const Le = String((Fe == null ? void 0 : Fe.actionGroupId) || "").trim();
      !Le || ve.has(Le) || (ve.add(Le), se.push(Le));
    }
    return se;
  }
  function ye() {
    return Se("paint");
  }
  function q(w, ne) {
    const se = String(ne || "").trim();
    return se ? `${w === "mask" ? "mask" : "paint"}:${se}` : "";
  }
  function _e(w) {
    const ne = String(w || "").trim();
    return ne ? `raster:${ne}` : "";
  }
  function pe(w) {
    const ne = String(w || "").trim();
    if (!ne) return "";
    const se = ne.match(/^raster:(.*)$/);
    return String(se ? se[1] || "" : ne).trim();
  }
  function de(w, ne = null) {
    const se = String(w || "").trim();
    if (!se) return { layerKind: "paint", actionGroupId: "" };
    const ve = se.match(/^(paint|mask):(.*)$/);
    return ve ? { layerKind: ve[1] === "mask" ? "mask" : "paint", actionGroupId: String(ve[2] || "").trim() } : { layerKind: ne === "mask" ? "mask" : "paint", actionGroupId: se };
  }
  function te() {
    var ne;
    let w = -1;
    for (const se of j())
      w = Math.max(w, Number((se == null ? void 0 : se.z_index) || 0));
    for (const se of ae())
      w = Math.max(w, Number((se == null ? void 0 : se.z_index) || 0));
    for (const se of Array.isArray((ne = i.painting) == null ? void 0 : ne.raster_objects) ? i.painting.raster_objects : [])
      String((se == null ? void 0 : se.layerKind) || "paint") === "paint" && (w = Math.max(w, Number((se == null ? void 0 : se.z_index) || 0)));
    return w + 1;
  }
  function ge(w, ne = null) {
    const se = String(w || "").trim();
    if (!se) return null;
    const ve = ae();
    let he = ve.find((xe) => String((xe == null ? void 0 : xe.actionGroupId) || "") === se);
    return he ? ne != null && (he.z_index = Math.max(0, Number(ne || 0))) : (he = {
      id: se,
      type: "strokeGroup",
      actionGroupId: se,
      z_index: ne == null ? te() : Math.max(0, Number(ne || 0)),
      locked: !1,
      frame: null
    }, ve.push(he)), he;
  }
  function oe(w) {
    if (!(w != null && w.centerUv)) return [];
    const ne = Number(w.centerUv.u || 0), se = Number(w.centerUv.v || 0), ve = Number(w.halfW || 0), he = Number(w.halfH || 0);
    return [
      {
        u: ((ne - ve) % 1 + 1) % 1,
        v: Oe(se - he, 0, 1)
      },
      {
        u: ((ne + ve) % 1 + 1) % 1,
        v: Oe(se - he, 0, 1)
      },
      {
        u: ((ne + ve) % 1 + 1) % 1,
        v: Oe(se + he, 0, 1)
      },
      {
        u: ((ne - ve) % 1 + 1) % 1,
        v: Oe(se + he, 0, 1)
      }
    ];
  }
  function I() {
    const w = new Set(ye()), se = ae().filter((ve) => w.has(String((ve == null ? void 0 : ve.actionGroupId) || "")));
    return w.forEach((ve) => {
      se.some((he) => String((he == null ? void 0 : he.actionGroupId) || "") === ve) || se.push({
        id: ve,
        type: "strokeGroup",
        actionGroupId: ve,
        z_index: te(),
        locked: !1,
        frame: null
      });
    }), se.sort((ve, he) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((he == null ? void 0 : he.z_index) || 0)), i.painting.groups = se, se;
  }
  function V(w, ne, se) {
    var Ae;
    const ve = (Ie) => (Number(Ie || 0) % 1 + 1) % 1, he = [];
    for (const Ie of se) {
      const Te = Ie == null ? void 0 : Ie.geometry, $e = (Te == null ? void 0 : Te.geometryKind) === "lasso_fill" ? Te == null ? void 0 : Te.points : (Te == null ? void 0 : Te.processedPoints) || (Te == null ? void 0 : Te.rawPoints) || (Te == null ? void 0 : Te.points) || [];
      Array.isArray($e) && he.push(...$e);
    }
    if (!he.length) return null;
    const xe = ve(((Ae = he[0]) == null ? void 0 : Ae.u) || 0);
    let Fe = 0, Le = 0;
    he.forEach((Ie) => {
      const Te = ve((Ie == null ? void 0 : Ie.u) || 0);
      Fe += xe + L(Te, xe), Le += Number((Ie == null ? void 0 : Ie.v) || 0);
    });
    const ze = (Fe / he.length % 1 + 1) % 1;
    let We = 1 / 0, Ge = -1 / 0, Q = 1 / 0, Pe = -1 / 0;
    he.forEach((Ie) => {
      const Te = ve((Ie == null ? void 0 : Ie.u) || 0), $e = L(Te, ze);
      We = Math.min(We, $e), Ge = Math.max(Ge, $e);
      const Ue = Number((Ie == null ? void 0 : Ie.v) || 0);
      Q = Math.min(Q, Ue), Pe = Math.max(Pe, Ue);
    });
    const ee = se.reduce((Ie, Te) => {
      const $e = l(String((Te == null ? void 0 : Te.toolKind) || "pen")), Ue = hn[$e] || hn[pr], it = Math.max(1, Number((Te == null ? void 0 : Te.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Ie, it);
    }, 0), ke = Math.max(35e-4, ee / 2048);
    return {
      centerUv: { u: ((ze + (We + Ge) * 0.5) % 1 + 1) % 1, v: Oe((Q + Pe) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Ge - We) * 0.5 + ke,
      halfH: (Pe - Q) * 0.5 + ke,
      uvPad: ke
    };
  }
  function N(w, ne, se) {
    const ve = String(w || "").trim();
    if (!ve) return null;
    const he = ae().find((Fe) => String((Fe == null ? void 0 : Fe.actionGroupId) || "") === ve);
    if (!he) return null;
    const xe = se || $(ve, ne);
    return he.frame = V(ve, ne, xe), he.frame;
  }
  function fe() {
    var ve;
    const w = j().map((he) => ({
      type: "sticker",
      id: String((he == null ? void 0 : he.id) || ""),
      z_index: Number((he == null ? void 0 : he.z_index) || 0),
      item: he
    })), ne = I().map((he) => ({
      type: "strokeGroup",
      id: String((he == null ? void 0 : he.id) || (he == null ? void 0 : he.actionGroupId) || ""),
      actionGroupId: String((he == null ? void 0 : he.actionGroupId) || ""),
      z_index: Number((he == null ? void 0 : he.z_index) || 0),
      item: he
    })), se = (Array.isArray((ve = i.painting) == null ? void 0 : ve.raster_objects) ? i.painting.raster_objects : []).filter((he) => String((he == null ? void 0 : he.layerKind) || "paint") === "paint").map((he) => ({
      type: "rasterObject",
      id: String((he == null ? void 0 : he.id) || ""),
      z_index: Number((he == null ? void 0 : he.z_index) || 0),
      item: he
    }));
    return [...w, ...ne, ...se].sort((he, xe) => Number(he.z_index || 0) - Number(xe.z_index || 0));
  }
  function C(w = !0) {
    var se, ve, he, xe, Fe, Le;
    const ne = fe().filter((ze) => ze.type === "strokeGroup").map((ze) => String(ze.actionGroupId || "")).filter((ze) => !!ze);
    if (w) {
      const ze = String(((ve = (se = n.interaction) == null ? void 0 : se.stroke) == null ? void 0 : ve.actionGroupId) || "").trim(), We = String(((xe = (he = n.interaction) == null ? void 0 : he.stroke) == null ? void 0 : xe.layerKind) || "").trim(), Ge = String(((Le = (Fe = n.interaction) == null ? void 0 : Fe.stroke) == null ? void 0 : Le.toolKind) || "").trim();
      ze && We === "paint" && Ge !== "eraser" && !ne.includes(ze) && ne.push(ze);
    }
    return ne;
  }
  function O(w = !0) {
    var Le, ze, We, Ge, Q, Pe;
    const ne = fe();
    if (!w) return ne;
    const se = String(((ze = (Le = n.interaction) == null ? void 0 : Le.stroke) == null ? void 0 : ze.actionGroupId) || "").trim(), ve = String(((Ge = (We = n.interaction) == null ? void 0 : We.stroke) == null ? void 0 : Ge.layerKind) || "").trim(), he = String(((Pe = (Q = n.interaction) == null ? void 0 : Q.stroke) == null ? void 0 : Pe.toolKind) || "").trim();
    if (!se || ve !== "paint" || he === "eraser" || ne.some((ee) => ee.type === "strokeGroup" && String(ee.actionGroupId || "") === se))
      return ne;
    const xe = f();
    let Fe = ne.reduce((ee, ke) => Math.max(ee, Number((ke == null ? void 0 : ke.z_index) || 0)), -1) + 1;
    return xe && E(xe) && String(xe.actionGroupId || "") === se && (Fe = Number(xe.z_index || 0)), [
      ...ne,
      {
        type: "strokeGroup",
        id: se,
        actionGroupId: se,
        z_index: Fe,
        item: null
      }
    ].sort((ee, ke) => Number((ee == null ? void 0 : ee.z_index) || 0) - Number((ke == null ? void 0 : ke.z_index) || 0));
  }
  function _() {
    return ae().slice().sort((w, ne) => Number((w == null ? void 0 : w.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0)).map((w) => k(q("paint", (w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || ""))).filter(Boolean);
  }
  function P() {
    var w;
    return (Array.isArray((w = i.painting) == null ? void 0 : w.raster_objects) ? i.painting.raster_objects : []).filter((ne) => String((ne == null ? void 0 : ne.layerKind) || "paint") === "paint").slice().sort((ne, se) => Number((ne == null ? void 0 : ne.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)).map((ne) => p(_e((ne == null ? void 0 : ne.id) || ""))).filter(Boolean);
  }
  function ce() {
    return Array.isArray(i.stickers) ? j() : [];
  }
  function be() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ce(), ...K()];
  }
  function D(w) {
    return !!w && Array.isArray(i.shots) && i.shots.includes(w);
  }
  function b(w) {
    return !!w && (Array.isArray(i.stickers) && i.stickers.includes(w) || Ct(w));
  }
  function W() {
    var w;
    return Array.isArray((w = i.painting) == null ? void 0 : w.raster_objects) ? i.painting.raster_objects : [];
  }
  function p(w) {
    const ne = pe(w);
    if (!ne) return null;
    const se = W().find((ve) => String((ve == null ? void 0 : ve.id) || "").trim() === ne);
    return !se || String((se == null ? void 0 : se.layerKind) || "paint") !== "paint" ? null : {
      ...se,
      id: _e(ne),
      type: "rasterObject",
      rasterObjectId: ne
    };
  }
  function h(w) {
    if (!w || typeof w != "object" || String(w.type || "") !== "rasterObject") return !1;
    const ne = pe(w.rasterObjectId || w.id || "");
    return !!ne && !!p(_e(ne));
  }
  function k(w) {
    const ne = de(w), se = String(ne.actionGroupId || "").trim();
    if (!se) return null;
    const ve = ae().find((he) => String((he == null ? void 0 : he.id) || (he == null ? void 0 : he.actionGroupId) || "") === se || String((he == null ? void 0 : he.actionGroupId) || "") === se);
    return ve ? {
      ...ve,
      id: q("paint", se),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: se
    } : null;
  }
  function E(w) {
    if (!w || typeof w != "object" || String(w.type || "") !== "strokeGroup") return !1;
    const ne = String(w.actionGroupId || "").trim(), se = String(w.layerKind || "paint").trim() || "paint";
    return !!ne && !!k(q(se, ne));
  }
  function $(w, ne = null) {
    const se = de(w, ne), ve = String(se.actionGroupId || "").trim();
    return ve ? d(se.layerKind).filter((he) => String((he == null ? void 0 : he.actionGroupId) || "").trim() === ve) : [];
  }
  function X(w, ne = "paint") {
    const se = String(w || "").trim(), he = `geomv5:${String(ne || "paint").trim() || "paint"}:${se}:${n.mode}:${u()}`;
    if (n.mode === "frame") {
      const xe = a(), Fe = String((xe == null ? void 0 : xe.id) || ""), Le = xe ? c(xe) : null;
      return `${he}:frame:${Fe}:${Math.round(Number((xe == null ? void 0 : xe.yaw_deg) || 0) * 1e3)}:${Math.round(Number((xe == null ? void 0 : xe.pitch_deg) || 0) * 1e3)}:${Math.round(Number((xe == null ? void 0 : xe.roll_deg) ?? (xe == null ? void 0 : xe.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((xe == null ? void 0 : xe.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((xe == null ? void 0 : xe.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Le == null ? void 0 : Le.x) || 0))}:${Math.round(Number((Le == null ? void 0 : Le.y) || 0))}:${Math.round(Number((Le == null ? void 0 : Le.w) || 0))}:${Math.round(Number((Le == null ? void 0 : Le.h) || 0))}`;
    }
    return `${he}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function le(w, ne, se) {
    return !w || typeof w != "object" ? w : {
      ...w,
      u: ((Number(w.u || 0) + Number(ne || 0)) % 1 + 1) % 1,
      v: Oe(Number(w.v || 0) + Number(se || 0), 0, 1)
    };
  }
  function L(w, ne) {
    let se = Number(w || 0) - Number(ne || 0);
    for (; se > 0.5; ) se -= 1;
    for (; se < -0.5; ) se += 1;
    return se;
  }
  function re(w, ne = null, se = null) {
    var We;
    const ve = de(w, ne), he = Array.isArray(se) ? se : $(ve.actionGroupId, ve.layerKind), xe = [];
    if (he.forEach((Ge) => {
      const Q = (Ge == null ? void 0 : Ge.geometry) || null, Pe = (Q == null ? void 0 : Q.geometryKind) === "lasso_fill" ? Q == null ? void 0 : Q.points : (Q == null ? void 0 : Q.processedPoints) || (Q == null ? void 0 : Q.rawPoints) || (Q == null ? void 0 : Q.points) || [];
      Array.isArray(Pe) && xe.push(...Pe);
    }), !xe.length) return { u: 0.5, v: 0.5 };
    const Fe = Number(((We = xe[0]) == null ? void 0 : We.u) || 0);
    let Le = 0, ze = 0;
    return xe.forEach((Ge) => {
      Le += Fe + L(Number((Ge == null ? void 0 : Ge.u) || 0), Fe), ze += Number((Ge == null ? void 0 : Ge.v) || 0);
    }), {
      u: (Le / xe.length % 1 + 1) % 1,
      v: Oe(ze / xe.length, 0, 1)
    };
  }
  function x(w, ne, se = 1, ve = 0) {
    if (!w || typeof w != "object") return w;
    const he = Number((ne == null ? void 0 : ne.u) || 0), xe = Number((ne == null ? void 0 : ne.v) || 0), Fe = L(Number(w.u || 0), he), Le = Number(w.v || 0) - xe, ze = Number(ve || 0) * ir, We = Math.cos(ze), Ge = Math.sin(ze), Q = Math.max(0.02, Number(se || 1)), Pe = (Fe * We - Le * Ge) * Q, ee = (Fe * Ge + Le * We) * Q;
    return {
      ...w,
      u: ((he + Pe) % 1 + 1) % 1,
      v: Oe(xe + ee, 0, 1)
    };
  }
  function U(w, ne, se, ve = null, he = null, xe = null) {
    const Fe = de(w, he), Le = String(Fe.actionGroupId || "").trim();
    if (!Le) return !1;
    const ze = d(Fe.layerKind), We = Array.isArray(ve) ? new Map(ve.map((Q) => [String((Q == null ? void 0 : Q.id) || ""), Q])) : null;
    let Ge = !1;
    if (ze.forEach((Q) => {
      if (String((Q == null ? void 0 : Q.actionGroupId) || "").trim() !== Le) return;
      const Pe = (We == null ? void 0 : We.get(String((Q == null ? void 0 : Q.id) || ""))) || Q, ee = Q == null ? void 0 : Q.geometry, ke = Pe == null ? void 0 : Pe.geometry;
      !ee || !ke || (Array.isArray(ke.points) && (ee.points = ke.points.map((Ae) => le(Ae, ne, se)), Ge = !0), Array.isArray(ke.rawPoints) && (ee.rawPoints = ke.rawPoints.map((Ae) => le(Ae, ne, se)), Ge = !0), Array.isArray(ke.processedPoints) && (ee.processedPoints = ke.processedPoints.map((Ae) => le(Ae, ne, se)), Ge = !0));
    }), Ge && xe) {
      const Q = ae().find((Pe) => String((Pe == null ? void 0 : Pe.actionGroupId) || "") === Le);
      Q && (Q.frame = null);
    }
    return Ge;
  }
  function ie(w, ne = 1, se = 0, ve = null, he = null, xe = null) {
    const Fe = de(w, he), Le = String(Fe.actionGroupId || "").trim();
    if (!Le) return !1;
    const ze = d(Fe.layerKind), We = Array.isArray(ve) ? ve : $(Le, Fe.layerKind), Ge = Array.isArray(We) ? new Map(We.map((ee) => [String((ee == null ? void 0 : ee.id) || ""), ee])) : null, Q = (xe == null ? void 0 : xe.centerUv) ?? re(Le, Fe.layerKind, We);
    let Pe = !1;
    if (ze.forEach((ee) => {
      if (String((ee == null ? void 0 : ee.actionGroupId) || "").trim() !== Le) return;
      const ke = (Ge == null ? void 0 : Ge.get(String((ee == null ? void 0 : ee.id) || ""))) || ee, Ae = ee == null ? void 0 : ee.geometry, Ie = ke == null ? void 0 : ke.geometry;
      !Ae || !Ie || (Array.isArray(Ie.points) && (Ae.points = Ie.points.map((Te) => x(Te, Q, ne, se)), Pe = !0), Array.isArray(Ie.rawPoints) && (Ae.rawPoints = Ie.rawPoints.map((Te) => x(Te, Q, ne, se)), Pe = !0), Array.isArray(Ie.processedPoints) && (Ae.processedPoints = Ie.processedPoints.map((Te) => x(Te, Q, ne, se)), Pe = !0));
    }), Pe && xe) {
      const ee = ae().find((ke) => String((ke == null ? void 0 : ke.actionGroupId) || "") === Le);
      ee && (ee.frame = null);
    }
    return Pe;
  }
  function we(w, ne, se, ve = null) {
    const he = pe(w);
    if (!he) return !1;
    const xe = W().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "").trim() === he);
    if (!xe) return !1;
    const Fe = ve && typeof ve == "object" ? ve : xe, Le = (Fe == null ? void 0 : Fe.transform) || {}, ze = Number(Le.du || 0) + Number(ne || 0), We = Oe(Number(Le.dv || 0) + Number(se || 0), -1, 1);
    return xe.transform || (xe.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), xe.transform.du = ze, xe.transform.dv = We, !0;
  }
  function Me(w, ne = 1, se = null) {
    const ve = pe(w);
    if (!ve) return !1;
    const he = W().find((We) => String((We == null ? void 0 : We.id) || "").trim() === ve);
    if (!he) return !1;
    const xe = se && typeof se == "object" ? se : he, Fe = (xe == null ? void 0 : xe.transform) || {}, Le = Math.max(0.01, Number(Fe.scale || 1)), ze = Oe(Le * Math.max(0.01, Number(ne || 1)), 0.01, 100);
    return he.transform || (he.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), he.transform.scale = ze, !0;
  }
  function Ce() {
    return te();
  }
  function me(w) {
    var ne;
    return !w || typeof w != "object" ? !1 : o ? ((ne = w.source) == null ? void 0 : ne.kind) === "port" : String(w.id || "") === pd || String(w.source_kind || "") === eA;
  }
  function ue(w) {
    return !!(w && typeof w == "object" && w.visible === !1);
  }
  function A(w) {
    return me(w) && ue(w) ? rg : 1;
  }
  function J(w, ne, se = 1, ve = 0) {
    if (!w || typeof w != "object") return w;
    const he = Number((ne == null ? void 0 : ne.u) || 0), xe = Number((ne == null ? void 0 : ne.v) || 0), Fe = L(Number(w.u || 0), he), Le = Number(w.v || 0) - xe, ze = Math.max(0.02, Number(se || 1)), We = Number(ve || 0) * ir, Ge = Math.cos(We), Q = Math.sin(We), Pe = Fe / ze, ee = Le / ze, ke = Pe * Ge + ee * Q, Ae = -Pe * Q + ee * Ge;
    return {
      ...w,
      u: ((he + ke) % 1 + 1) % 1,
      v: xe + Ae
    };
  }
  function H(w) {
    const ne = (w == null ? void 0 : w.bbox) || null, se = (w == null ? void 0 : w.transform) || {};
    return ne ? {
      u: (((Number(ne.u0 || 0) + Number(ne.u1 || 0)) * 0.5 + Number(se.du || 0)) % 1 + 1) % 1,
      v: Oe((Number(ne.v0 || 0) + Number(ne.v1 || 0)) * 0.5 + Number(se.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function z(w) {
    var ze, We, Ge, Q;
    const ne = (w == null ? void 0 : w.bbox) || null;
    if (!ne) return [];
    const se = {
      u: (Number(ne.u0 || 0) + Number(ne.u1 || 0)) * 0.5,
      v: (Number(ne.v0 || 0) + Number(ne.v1 || 0)) * 0.5
    }, ve = Math.max(0.01, Number(((ze = w == null ? void 0 : w.transform) == null ? void 0 : ze.scale) || 1)), he = Number(((We = w == null ? void 0 : w.transform) == null ? void 0 : We.rot_deg) || 0), xe = Number(((Ge = w == null ? void 0 : w.transform) == null ? void 0 : Ge.du) || 0), Fe = Number(((Q = w == null ? void 0 : w.transform) == null ? void 0 : Q.dv) || 0);
    return [
      { u: Number(ne.u0 || 0), v: Number(ne.v0 || 0) },
      { u: Number(ne.u1 || 0), v: Number(ne.v0 || 0) },
      { u: Number(ne.u1 || 0), v: Number(ne.v1 || 0) },
      { u: Number(ne.u0 || 0), v: Number(ne.v1 || 0) }
    ].map((Pe) => le(x(Pe, se, ve, he), xe, Fe));
  }
  function T(w) {
    const ne = pe((w == null ? void 0 : w.rasterObjectId) || (w == null ? void 0 : w.id) || ""), se = (w == null ? void 0 : w.transform) || {}, ve = (w == null ? void 0 : w.bbox) || {}, he = `${ne}:${n.mode}:${u()}:${ve.u0}:${ve.v0}:${ve.u1}:${ve.v1}:${se.du}:${se.dv}:${se.rot_deg}:${se.scale}`;
    if (n.mode === "frame") {
      const xe = a(), Fe = xe ? c(xe) : null;
      return `${he}:frame:${String((xe == null ? void 0 : xe.id) || "")}:${Math.round(Number((Fe == null ? void 0 : Fe.x) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.y) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.w) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.h) || 0))}`;
    }
    return `${he}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function B(w) {
    const ne = String((w == null ? void 0 : w.id) || ""), se = D(w) ? "frame" : b(w) ? "sticker" : "item", ve = Z(w), he = [
      se,
      ne,
      n.mode,
      Number((ve == null ? void 0 : ve.yaw_deg) || 0).toFixed(4),
      Number((ve == null ? void 0 : ve.pitch_deg) || 0).toFixed(4),
      Number((ve == null ? void 0 : ve.hFOV_deg) || 0).toFixed(4),
      Number((ve == null ? void 0 : ve.vFOV_deg) || 0).toFixed(4),
      Number((ve == null ? void 0 : ve.rot_deg) || 0).toFixed(4),
      Number((ve == null ? void 0 : ve.roll_deg) || 0).toFixed(4),
      gr(ve),
      M(w) && S(w)
    ].join(":");
    if (n.mode === "frame") {
      const xe = a(), Fe = xe ? c(xe) : null;
      return `${he}:frame:${String((xe == null ? void 0 : xe.id) || "")}:${Math.round(Number((Fe == null ? void 0 : Fe.x) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.y) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.w) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.h) || 0))}`;
    }
    return `${he}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function G() {
    fe().forEach((ne, se) => {
      ne.type === "sticker" && ne.item && (ne.item.z_index = se), ne.type === "strokeGroup" && ne.item && (ne.item.z_index = se), ne.type === "rasterObject" && ne.item && (ne.item.z_index = se);
    });
  }
  return {
    connect(w) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: m,
        sceneStickerShown: S,
        upstreamStickerImage: g,
        upstreamStickers: v
      } = w);
    },
    getList: y,
    skyStickers: j,
    upstreamSkyStickers: K,
    stickerById: F,
    isSceneSticker: M,
    isUploadingSticker: R,
    poseOf: Z,
    writePose: Y,
    getPaintingGroupList: ae,
    makeStrokeGroupSelectionId: q,
    makeRasterObjectSelectionId: _e,
    parseRasterObjectSelectionId: pe,
    ensurePaintingGroupEntry: ge,
    getFrameCornersUv: oe,
    ensureGroupFrame: N,
    getDisplayListObjects: fe,
    getOrderedPaintGroupIds: C,
    getOrderedDisplayListObjects: O,
    getSelectableStrokeGroupItems: _,
    getSelectableRasterObjectItems: P,
    cutoutStickers: ce,
    getCutoutSelectableItems: be,
    isShotItem: D,
    isStickerItem: b,
    getRasterObjectList: W,
    getRasterObjectItem: p,
    isRasterObjectItem: h,
    getStrokeGroupItem: k,
    isStrokeGroupItem: E,
    getStrokeGroupStrokes: $,
    getStrokeGeomCacheKey: X,
    shortestWrappedDelta: L,
    getStrokeGroupCenterUv: re,
    applyStrokeGroupOffset: U,
    applyStrokeGroupTransform: ie,
    applyRasterObjectOffset: we,
    applyRasterObjectTransform: Me,
    getNextStickerZIndex: Ce,
    isExternalSticker: me,
    isStickerHidden: ue,
    getStickerDisplayAlpha: A,
    inverseTransformErpPointAround: J,
    getRasterObjectCenterUv: H,
    getRasterObjectTransformedErpPoints: z,
    getRasterObjectGeomCacheKey: T,
    getSceneItemGeomCacheKey: B,
    normalizeDisplayZIndices: G
  };
}
function jA(e) {
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
  let c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _;
  function P() {
    const T = String(t.selectedId || "");
    if (!T) return null;
    const B = M(T);
    if (B) return B;
    const G = j(T);
    return G || (o ? S().find((w) => String((w == null ? void 0 : w.id) || "") === T) || null : v().find((w) => String((w == null ? void 0 : w.id) || "") === T) || null);
  }
  function ce() {
    const T = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], B = [], G = /* @__PURE__ */ new Set();
    return T.forEach((w) => {
      const ne = String(w || "").trim();
      if (!ne || G.has(ne)) return;
      G.add(ne);
      const se = ne === String(t.selectedId || "") ? P() : M(ne) || j(ne) || (o ? S().find((ve) => String((ve == null ? void 0 : ve.id) || "") === ne) : v().find((ve) => String((ve == null ? void 0 : ve.id) || "") === ne));
      se && B.push(se);
    }), B;
  }
  function be(T = null) {
    const B = Array.isArray(T) ? T : ce();
    if (!B || B.length < 2) return null;
    const G = B.map((Fe) => te(Fe)).filter((Fe) => (Fe == null ? void 0 : Fe.visible) && Array.isArray(Fe.corners) && Fe.corners.length);
    if (!G.length) return null;
    const w = G.flatMap((Fe) => Fe.corners.map((Le) => Number((Le == null ? void 0 : Le.x) || 0))), ne = G.flatMap((Fe) => Fe.corners.map((Le) => Number((Le == null ? void 0 : Le.y) || 0))), se = Math.min(...w), ve = Math.max(...w), he = Math.min(...ne), xe = Math.max(...ne);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (se + ve) * 0.5, y: (he + xe) * 0.5 },
      corners: [
        { x: se, y: he },
        { x: ve, y: he },
        { x: ve, y: xe },
        { x: se, y: xe }
      ],
      edgeMidpoints: [
        { edge: "top", x: (se + ve) * 0.5, y: he, a: { x: se, y: he }, b: { x: ve, y: he } },
        { edge: "right", x: ve, y: (he + xe) * 0.5, a: { x: ve, y: he }, b: { x: ve, y: xe } },
        { edge: "bottom", x: (se + ve) * 0.5, y: xe, a: { x: ve, y: xe }, b: { x: se, y: xe } },
        { edge: "left", x: se, y: (he + xe) * 0.5, a: { x: se, y: xe }, b: { x: se, y: he } }
      ],
      rotateStemBase: { x: (se + ve) * 0.5, y: he },
      rotateHandle: { x: (se + ve) * 0.5, y: he - 30 }
    };
  }
  function D(T) {
    const B = String((T == null ? void 0 : T.id) || "").trim();
    return !!B && Array.isArray(t.selectedIds) && t.selectedIds.includes(B);
  }
  function b() {
    const T = P();
    return T ? _e(T) || Y(T) ? "stroke" : Se(T) ? "frame" : "image" : null;
  }
  function W(T) {
    if (!T || typeof T != "object") return !1;
    if (_e(T)) {
      const B = String(T.actionGroupId || T.id || "").trim(), G = y().find((w) => String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim() === B);
      return (G == null ? void 0 : G.locked) === !0;
    }
    if (Y(T)) {
      const B = oe(T.rasterObjectId || T.id || ""), G = K().find((w) => String((w == null ? void 0 : w.id) || "").trim() === B);
      return (G == null ? void 0 : G.locked) === !0;
    }
    return Ct(T) && !wa(T) ? !0 : T.locked === !0;
  }
  function p(T = null) {
    const B = Array.isArray(T) ? T : ce();
    return B.length > 0 && B.every((G) => W(G));
  }
  function h(T, B) {
    const G = B === !0;
    if (!T || typeof T != "object") return !1;
    if (_e(T)) {
      const w = String(T.actionGroupId || T.id || "").trim(), ne = y().find((se) => String((se == null ? void 0 : se.actionGroupId) || (se == null ? void 0 : se.id) || "").trim() === w);
      return !ne || ne.locked === G ? !1 : (ne.locked = G, !0);
    }
    if (Y(T)) {
      const w = oe(T.rasterObjectId || T.id || ""), ne = K().find((se) => String((se == null ? void 0 : se.id) || "").trim() === w);
      return !ne || ne.locked === G ? !1 : (ne.locked = G, !0);
    }
    return T.locked === G || Ct(T) && !wa(T) ? !1 : (T.locked = G, !0);
  }
  function k() {
    if (n) return;
    const T = ce();
    if (!T.length) return;
    const B = !p(T);
    let G = !1;
    T.forEach((w) => {
      h(w, B) && (G = !0);
    }), G && (V(), d(), O(), _(), N());
  }
  function E(T) {
    me(), a.selection = null, t.selectedId = (T == null ? void 0 : T.id) || null, t.selectedIds = T != null && T.id ? [T.id] : [], T && q(T) && !Ct(T) ? s.active.selected_sticker_id = T.id || null : s.active.selected_sticker_id = null, T && Se(T) ? s.active.selected_shot_id = T.id || null : T ? Se(T) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function $(T, B = null) {
    const G = [], w = /* @__PURE__ */ new Set();
    (Array.isArray(T) ? T : []).forEach((ve) => {
      const he = String((ve == null ? void 0 : ve.id) || "").trim();
      !he || w.has(he) || (w.add(he), G.push(he));
    }), t.selectedIds = G, me(), a.selection = null;
    const ne = String(B || "").trim();
    t.selectedId = ne && G.includes(ne) ? ne : G[G.length - 1] || null;
    const se = P();
    s.active.selected_sticker_id = se && q(se) && !Ct(se) && se.id || null, se && Se(se) ? s.active.selected_shot_id = se.id || null : G.length || (s.active.selected_shot_id = null);
  }
  function X() {
    const T = (Array.isArray(s.shots) ? s.shots : []).map((G, w) => ({
      kind: "frame",
      item: G,
      label: String((G == null ? void 0 : G.label) || `Frame ${w + 1}`)
    })), B = f().map((G, w) => {
      var se, ve;
      const ne = Z(G) ? String(G.id || pd) : String(((ve = (se = s.assets) == null ? void 0 : se[G.asset_id]) == null ? void 0 : ve.name) || G.asset_id || G.id || `Image ${w + 1}`);
      return {
        kind: "image",
        item: G,
        label: ne
      };
    });
    return [...T, ...B];
  }
  function le(T) {
    return T === "frame" ? je.camera : T === "stroke" ? je.paintbrush_vertical_tool : je.image;
  }
  function L(T) {
    return !T || !T.item ? {
      label: String((T == null ? void 0 : T.label) || ""),
      icon: null
    } : {
      label: String(T.label || ""),
      icon: le(T.kind)
    };
  }
  function re() {
    if (n) return;
    const T = P();
    !T || !Z(T) || (T.visible = ye(T), J(), pe(), V(), d(), _(), O(), N());
  }
  function x() {
    if (n || l !== "stickers") return;
    const T = P();
    if (!T || !Z(T)) return;
    const B = T.initial_pose;
    if (!B || typeof B != "object") return;
    T.yaw_deg = Number(B.yaw_deg ?? T.yaw_deg ?? 0), T.pitch_deg = Number(B.pitch_deg ?? T.pitch_deg ?? 0), T.hFOV_deg = Number(B.hFOV_deg ?? T.hFOV_deg ?? 30);
    const G = F(ai, () => {
      N();
    });
    G && (G.complete || G.naturalWidth || G.width) ? T.vFOV_deg = u(
      Number(B.hFOV_deg ?? T.hFOV_deg ?? 30),
      Number(G.naturalWidth || G.width || 1),
      Number(G.naturalHeight || G.height || 1)
    ) : T.vFOV_deg = Number(B.vFOV_deg ?? T.vFOV_deg ?? 30), T.rot_deg = Number(B.rot_deg ?? T.rot_deg ?? 0), V(), d(), _(), O(), N();
  }
  function U(T) {
    if (!T || !Z(T)) return null;
    const B = T.initial_pose;
    if (!B || typeof B != "object") return null;
    const G = {
      yaw_deg: Number(B.yaw_deg ?? T.yaw_deg ?? 0),
      pitch_deg: Number(B.pitch_deg ?? T.pitch_deg ?? 0),
      hFOV_deg: Number(B.hFOV_deg ?? T.hFOV_deg ?? 30),
      vFOV_deg: Number(B.vFOV_deg ?? T.vFOV_deg ?? 30),
      rot_deg: Number(B.rot_deg ?? T.rot_deg ?? 0)
    }, w = F(ai, () => {
      N();
    });
    return w && (w.complete || w.naturalWidth || w.width) && (G.vFOV_deg = u(
      G.hFOV_deg,
      Number(w.naturalWidth || w.width || 1),
      Number(w.naturalHeight || w.height || 1)
    )), G;
  }
  function ie() {
    const T = P();
    if (!T || !Z(T)) return !1;
    const B = U(T);
    if (!B) return !1;
    const G = (w, ne) => Math.abs(Number(w || 0) - Number(ne || 0)) <= 1e-4;
    return !(G(T.yaw_deg, B.yaw_deg) && G(T.pitch_deg, B.pitch_deg) && G(T.hFOV_deg, B.hFOV_deg) && G(T.vFOV_deg, B.vFOV_deg) && G(T.rot_deg, B.rot_deg));
  }
  function we(T = {}) {
    const G = T.preservePanelValues !== !1 ? I(P()) : null;
    G && (t.panelLastValues = {
      yaw_deg: Number(G.yaw_deg || 0),
      pitch_deg: Number(G.pitch_deg || 0),
      hFOV_deg: Number(G.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(G.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(G.rot_deg || 0),
      roll_deg: Number(G.roll_deg || 0),
      aspect_id: gr(G)
    }), t.selectedId = null, t.selectedIds = [], me(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function Me() {
    if (!i || !t.worldSelectedId) return null;
    const T = C(t.worldSelectedId);
    return (T == null ? void 0 : T.placement) === "world" ? T : null;
  }
  function Ce(T) {
    E(null), t.worldSelectedId = T, r.backgroundDirty = !0;
  }
  function me() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function ue(T) {
    return !!T && !n && !W(T);
  }
  function A() {
    if (l !== "cutout") return;
    const T = m();
    T && (t.selectedId = String(T.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function J() {
    var B;
    const T = P();
    (ae(T) && !fe(T) || t.selectedId === Fu && R() && !c() || b() === "stroke" && !ge()) && E(null), ((B = Me()) == null ? void 0 : B.visible) === !1 && me();
  }
  function H() {
    if (n) return;
    const T = ce();
    if (!P() || T.length === 0 || T.some(Ct) || T.some((he) => W(he))) return;
    de();
    const G = g(), w = new Set(T.map((he) => q(he) ? `sticker:${String(he.id || "")}` : Y(he) ? `rasterObject:${oe(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), ne = [], se = [];
    if (G.forEach((he) => {
      var Fe, Le;
      const xe = he.type === "sticker" ? `sticker:${String(((Fe = he.item) == null ? void 0 : Fe.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((Le = he.item) == null ? void 0 : Le.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      w.has(xe) ? ne.push(he) : se.push(he);
    }), !ne.length || ne[ne.length - 1] === G[G.length - 1]) return;
    [...se, ...ne].forEach((he, xe) => {
      he.type === "sticker" && he.item && (he.item.z_index = xe), he.type === "strokeGroup" && he.item && (he.item.z_index = xe), he.type === "rasterObject" && he.item && (he.item.z_index = xe);
    }), pe(), V(), d(), O(), N();
  }
  function z() {
    if (n) return;
    const T = ce();
    if (!P() || T.length === 0 || T.some(Ct) || T.some((he) => W(he))) return;
    de();
    const G = g(), w = new Set(T.map((he) => q(he) ? `sticker:${String(he.id || "")}` : Y(he) ? `rasterObject:${oe(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), ne = [], se = [];
    if (G.forEach((he) => {
      var Fe, Le;
      const xe = he.type === "sticker" ? `sticker:${String(((Fe = he.item) == null ? void 0 : Fe.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((Le = he.item) == null ? void 0 : Le.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      w.has(xe) ? ne.push(he) : se.push(he);
    }), !ne.length || ne[0] === G[0]) return;
    [...ne, ...se].forEach((he, xe) => {
      he.type === "sticker" && he.item && (he.item.z_index = xe), he.type === "strokeGroup" && he.item && (he.item.z_index = xe), he.type === "rasterObject" && he.item && (he.item.z_index = xe);
    }), pe(), V(), d(), O(), N();
  }
  return {
    connect(T) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: m,
        getCutoutSelectableItems: S,
        getDisplayListObjects: g,
        getList: v,
        getPaintingGroupList: y,
        getRasterObjectItem: j,
        getRasterObjectList: K,
        getStickerUiImage: F,
        getStrokeGroupItem: M,
        hasCamera: R,
        isExternalSticker: Z,
        isRasterObjectItem: Y,
        isSceneSticker: ae,
        isShotItem: Se,
        isStickerHidden: ye,
        isStickerItem: q,
        isStrokeGroupItem: _e,
        markObjectVisualsDirty: pe,
        normalizeDisplayZIndices: de,
        objectGeom: te,
        paintingShown: ge,
        parseRasterObjectSelectionId: oe,
        poseOf: I,
        pushHistory: V,
        requestDraw: N,
        sceneStickerShown: fe,
        stickerById: C,
        updateSelectionMenu: O,
        updateSidePanel: _
      } = T);
    },
    getSelected: P,
    getSelectedItems: ce,
    getMultiSelectionGeom: be,
    isItemSelected: D,
    getSelectedKind: b,
    isItemLocked: W,
    areAllSelectedItemsLocked: p,
    toggleSelectedLock: k,
    setSelectedItem: E,
    setSelectedItems: $,
    getCutoutInspectorItems: X,
    getSelectionItemIcon: le,
    getSelectionItemLabelData: L,
    toggleSelectedExternalStickerVisibility: re,
    restoreSelectedToInitialPose: x,
    canRestoreSelectedToInitial: ie,
    clearSelection: we,
    selectedWorldSticker: Me,
    selectWorldSticker: Ce,
    clearWorldSelection: me,
    worldStickerEditable: ue,
    applyInitialCutoutFocus: A,
    releaseHiddenSelection: J,
    bringSelectedToFront: H,
    sendSelectedToBack: z
  };
}
function HA(e) {
  const {
    backgroundCanvas: t,
    canvas: n,
    editor: r,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function m() {
    return o && s() && i.camera.projection === "erp";
  }
  function S() {
    const P = Y({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !P || P.length !== 4 ? !1 : P[0].y >= P[3].y;
  }
  function g() {
    return ig({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function v() {
    const _ = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return _.some((P, ce) => P !== f.key[ce]) && (f = { key: _, projection: sg(g(), n.width, n.height) }), f.projection;
  }
  function y(_) {
    const P = v().project(_);
    return P.z > 1e-4 ? P : null;
  }
  function j(_, P) {
    return v().ray(_, P);
  }
  function K() {
    const _ = n.width, P = n.height, ce = 2;
    if (_ / Math.max(P, 1) >= ce) {
      const p = P, h = p * ce;
      return { x: (_ - h) * 0.5, y: 0, w: h, h: p };
    }
    const D = _, b = D / ce;
    return { x: 0, y: (P - b) * 0.5, w: D, h: b };
  }
  function F(_) {
    return {
      lon: Math.atan2(_.x, _.z),
      lat: Math.asin(Oe(_.y, -1, 1))
    };
  }
  function M(_, P = null) {
    const { lon: ce, lat: be } = F(_), D = K();
    let b = D.x + (ce / (2 * Math.PI) + 0.5) * D.w;
    const W = D.y + (0.5 - be / Math.PI) * D.h;
    if (P !== null) {
      for (; b - P > D.w / 2; ) b -= D.w;
      for (; b - P < -D.w / 2; ) b += D.w;
    }
    return { x: b, y: W, z: 1 };
  }
  function R(_) {
    const P = c(_), ce = Bi(
      Number(P.yaw_deg || 0),
      Number(P.pitch_deg || 0),
      Number(P.rot_deg || P.roll_deg || 0)
    ), be = Math.tan(Oe(Number(P.hFOV_deg || 20), 0.1, 179) * 0.5 * ir), D = Math.tan(Oe(Number(P.vFOV_deg || 20), 0.1, 179) * 0.5 * ir);
    return {
      centerDir: ce.fwd,
      right: ce.right,
      up: ce.up,
      tanX: be,
      tanY: D
    };
  }
  function Z(_, P, ce) {
    return pA(xp(xp(_.centerDir, Mp(_.right, P)), Mp(_.up, ce)));
  }
  function Y(_) {
    const P = R(_);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: be, v: D }) => Z(P, be * P.tanX, D * P.tanY));
  }
  function ae(_, P, ce) {
    const be = R(_), D = (P * 2 - 1) * be.tanX, b = (1 - ce * 2) * be.tanY;
    return Z(be, D, b);
  }
  function Se(_) {
    const P = t.width / Math.max(1, n.width), ce = t.height / Math.max(1, n.height);
    return { x: _.x * P, y: _.y * ce, w: _.w * P, h: _.h * ce };
  }
  function ye(_, P = null, ce = null, be = null) {
    if (r.mode === "frame") {
      const D = P || a();
      if (!D) return [];
      const b = ce || l(D);
      return V(_, D, b);
    }
    return ge(_, be);
  }
  function q(_, P = null, ce = null, be = null, D = null) {
    if (!_) return null;
    if (r.mode === "unwrap") {
      const W = ge([_], D);
      return W[0] ? { x: W[0].x, y: W[0].y, z: 1 } : null;
    }
    const b = pe(_);
    return b ? d(b, P, ce, be) : null;
  }
  function _e(_, P) {
    if (!_ || !P) return null;
    const ce = Number(P.x || 0), be = Number(P.y || 0);
    return ae(_, ce, be);
  }
  function pe(_) {
    if (!_) return null;
    const P = (Number(_.u || 0) - 0.5) * (2 * Math.PI), ce = (0.5 - Number(_.v || 0)) * Math.PI, be = Math.cos(ce);
    return il(be * Math.sin(P), Math.sin(ce), be * Math.cos(P));
  }
  function de(_, P) {
    if (!_ || !P) return null;
    const ce = R(_), be = Zl(P, ce.centerDir);
    if (!Number.isFinite(be) || be <= 1e-6) return null;
    const D = Zl(P, ce.right) / be, b = Zl(P, ce.up) / be;
    return {
      x: (D / Math.max(1e-6, ce.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, ce.tanY)) * 0.5
    };
  }
  function te(_) {
    if (!Array.isArray(_) || _.length < 3) return [];
    if (r.mode === "unwrap") {
      const ce = K();
      return _.map((be) => ({
        x: ce.x + Number(be.u || 0) * ce.w,
        y: ce.y + Number(be.v || 0) * ce.h
      }));
    }
    const P = _.map((ce) => y(pe(ce))).filter(Boolean);
    return P.every((ce) => Number(ce.z || 0) > 0) ? P.map((ce) => ({ x: Number(ce.x || 0), y: Number(ce.y || 0) })) : [];
  }
  function ge(_, P = null) {
    if (!Array.isArray(_) || _.length < 1) return [];
    if (r.mode === "unwrap") {
      const be = K();
      return _.map((D) => {
        const b = (Number(D.u || 0) % 1 + 1) % 1, W = P == null ? b : Number(P || 0) + u(b, P);
        return {
          x: be.x + W * be.w,
          y: be.y + Number(D.v || 0) * be.h
        };
      });
    }
    const ce = _.map((be) => y(pe(be))).filter(Boolean);
    return ce.every((be) => Number(be.z || 0) > 0) ? ce.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function oe(_, P = 160) {
    if (!Array.isArray(_) || _.length < 3) return !1;
    for (let ce = 0; ce < _.length; ce += 1) {
      const be = _[ce], D = _[(ce + 1) % _.length];
      if (!be || !D || !Number.isFinite(be.x) || !Number.isFinite(be.y) || !Number.isFinite(D.x) || !Number.isFinite(D.y) || Math.hypot(Number(D.x) - Number(be.x), Number(D.y) - Number(be.y)) > P) return !1;
    }
    return !0;
  }
  function I(_, P, ce) {
    if (!Array.isArray(_) || _.length < 3 || !P || !ce) return [];
    const be = [];
    for (const D of _) {
      const b = pe(D), W = de(P, b);
      if (!W) return [];
      be.push({
        x: Number(ce.x || 0) + Number(W.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(W.y || 0) * Number(ce.h || 0)
      });
    }
    return oe(be, Math.max(80, Math.max(ce.w, ce.h) * 0.75)) ? be : [];
  }
  function V(_, P, ce) {
    if (!Array.isArray(_) || _.length < 1 || !P || !ce) return [];
    const be = [];
    for (const D of _) {
      const b = pe(D), W = de(P, b);
      W && be.push({
        x: Number(ce.x || 0) + Number(W.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(W.y || 0) * Number(ce.h || 0)
      });
    }
    return be;
  }
  function N(_) {
    const P = n.getBoundingClientRect();
    return {
      x: (_.clientX - P.left) / P.width * n.width,
      y: (_.clientY - P.top) / P.height * n.height
    };
  }
  function fe(_) {
    const P = n.getBoundingClientRect();
    return {
      x: Number(_.clientX) - Number(P.left || 0),
      y: Number(_.clientY) - Number(P.top || 0)
    };
  }
  function C(_, P = performance.now()) {
    if (r.mode === "unwrap") {
      const b = K(), W = (_.x - b.x) / Math.max(1, b.w), p = (_.y - b.y) / Math.max(1, b.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (W % 1 + 1) % 1,
        v: Oe(p, 0, 1),
        t: Number(P || 0)
      };
    }
    const ce = j(_.x, _.y), { lon: be, lat: D } = F(ce);
    return {
      targetKind: "ERP_GLOBAL",
      u: (be / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - D / Math.PI, 0, 1),
      t: Number(P || 0)
    };
  }
  function O(_, P, ce = performance.now()) {
    const be = l(P);
    if (!be) return null;
    const D = {
      x: (Number(_.x) - be.x) / Math.max(1, be.w),
      y: (Number(_.y) - be.y) / Math.max(1, be.h)
    };
    if (D.x < 0 || D.x > 1 || D.y < 0 || D.y > 1) return null;
    const b = _e(P, D);
    if (!b) return null;
    const { lon: W, lat: p } = F(b);
    return {
      targetKind: "ERP_GLOBAL",
      u: (W / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - p / Math.PI, 0, 1),
      t: Number(ce || 0)
    };
  }
  return {
    connect(_) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = _);
    },
    isErpCamera: m,
    currentViewCamera: g,
    currentViewProjection: v,
    projectDir: y,
    screenToWorldDir: j,
    getUnwrapRect: K,
    projectDirUnwrap: M,
    getStickerFrame: R,
    stickerDirFromFrame: Z,
    stickerCornersDir: Y,
    stickerSampleDir: ae,
    stickerCornerOrderSanity: S,
    projectEditorPoints: ye,
    projectErpPointToEditor: q,
    frameLocalPointToWorldDir: _e,
    erpPointToWorldDir: pe,
    worldDirToFrameLocalPoint: de,
    projectLassoPointsToCurrentView: te,
    projectErpLassoPointsToFrameRect: I,
    screenPos: N,
    screenPosCss: fe,
    screenPosToErpPoint: C,
    screenPosToFrameAsErpPoint: O,
    deviceRect: Se
  };
}
function KA(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V;
  function N(b, W) {
    const p = String(b.actionGroupId || b.id || "").trim(), h = K(p, b.layerKind), k = a(p, b.layerKind, h), E = (k == null ? void 0 : k.centerUv) || j(p, b.layerKind, h), $ = r.mode === "unwrap" ? Number((E == null ? void 0 : E.u) || 0) : null, X = [], le = r.mode === "frame" ? l() : null, L = le ? u(le) : null;
    for (const A of h) {
      const J = (A == null ? void 0 : A.geometry) || null, H = (J == null ? void 0 : J.geometryKind) === "lasso_fill" ? J == null ? void 0 : J.points : (J == null ? void 0 : J.processedPoints) || (J == null ? void 0 : J.rawPoints) || (J == null ? void 0 : J.points) || [], z = pe(H, le, L, $).filter((G) => Number.isFinite(G == null ? void 0 : G.x) && Number.isFinite(G == null ? void 0 : G.y));
      if (!z.length) continue;
      const T = c(String((A == null ? void 0 : A.toolKind) || "pen")), B = hn[T] || hn[pr];
      X.push({
        points: z,
        closed: String((J == null ? void 0 : J.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((A == null ? void 0 : A.size) || 10) * Math.max(0.1, Number((B == null ? void 0 : B.sizeScale) ?? 1)) + 10),
        layerKind: String((A == null ? void 0 : A.layerKind) || b.layerKind || "paint")
      });
    }
    const re = de(E, null, le, L, $);
    if (!re) {
      const A = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(W, A), A;
    }
    const U = d(k).map((A) => de(A, re.x, le, L, $)).filter((A) => Number.isFinite(A == null ? void 0 : A.x) && Number.isFinite(A == null ? void 0 : A.y)).map((A) => ({ x: Number(A.x || 0), y: Number(A.y || 0) }));
    if (U.length < 4) {
      const A = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(W, A), A;
    }
    const ie = (A, J) => ({
      x: (Number((A == null ? void 0 : A.x) || 0) + Number((J == null ? void 0 : J.x) || 0)) * 0.5,
      y: (Number((A == null ? void 0 : A.y) || 0) + Number((J == null ? void 0 : J.y) || 0)) * 0.5,
      a: A,
      b: J
    }), we = ie(U[0], U[1]), Me = ie(U[1], U[2]), Ce = ie(U[2], U[3]), me = ie(U[3], U[0]), ue = {
      kind: "strokeGroup",
      center: { x: Number(re.x || 0), y: Number(re.y || 0) },
      corners: U,
      edgeMidpoints: [
        { edge: "top", ...we },
        { edge: "right", ...Me },
        { edge: "bottom", ...Ce },
        { edge: "left", ...me }
      ],
      rotateStemBase: { x: we.x, y: we.y },
      rotateHandle: { x: we.x, y: we.y - 30 },
      strokePaths: X,
      visible: !0
    };
    return r._strokeGeomCache.set(W, ue), ue;
  }
  function fe(b, W) {
    const p = r.mode === "frame" ? l() : null, h = p ? u(p) : null, k = f(b), E = r.mode === "unwrap" ? Number((k == null ? void 0 : k.u) || 0) : null, $ = de(k, null, p, h, E), le = S(b).map((U) => de(U, ($ == null ? void 0 : $.x) ?? null, p, h, E)).filter((U) => Number.isFinite(U == null ? void 0 : U.x) && Number.isFinite(U == null ? void 0 : U.y));
    if (!Array.isArray(le) || le.length < 4) {
      const U = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(W, U), U;
    }
    const L = le.slice(0, 4).map((U) => ({ x: Number((U == null ? void 0 : U.x) || 0), y: Number((U == null ? void 0 : U.y) || 0) })), x = {
      kind: "rasterObject",
      center: {
        x: L.reduce((U, ie) => U + Number(ie.x || 0), 0) / L.length,
        y: L.reduce((U, ie) => U + Number(ie.y || 0), 0) / L.length
      },
      corners: L,
      visible: !0
    };
    return r._strokeGeomCache.set(W, x), x;
  }
  function C(b, W = null, p = null, h = null, k = {}) {
    if (r.mode === "frame") {
      const re = p || l(), x = h || u(re);
      if (!re || !x) return null;
      const U = re ? V(re, b) : null;
      return U ? {
        x: Number(x.x || 0) + Number(U.x || 0) * Number(x.w || 0),
        y: Number(x.y || 0) + Number(U.y || 0) * Number(x.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return _e(b, W);
    const E = 1e-4, $ = o().project(b, E);
    if (!Number.isFinite($.z) || $.z <= E && !(k != null && k.clipBehind)) return null;
    const X = n.width, le = n.height, L = Math.max(X, le) * 2;
    return {
      x: Oe($.x, -L, X + L),
      y: Oe($.y, -L, le + L),
      z: Math.max($.z, E),
      rawZ: $.z,
      clipped: $.z <= E
    };
  }
  function O(b, W = []) {
    if (r.mode !== "pano" || Y(b)) return 1;
    const p = W.map((h) => Number((h == null ? void 0 : h.rawZ) ?? (h == null ? void 0 : h.z))).filter((h) => Number.isFinite(h));
    return p.length ? dA(0.035, 0.2, Math.min(...p)) : 1;
  }
  function _(b) {
    if (R(b) && !te(b)) return { visible: !1 };
    const W = ye(b), p = gn(Number(W.yaw_deg || 0), Number(W.pitch_deg || 0)), h = r.mode === "frame" ? l() : null, k = h ? u(h) : null, E = r.mode === "pano" && (Y(b) || Z(b)), $ = E ? { clipBehind: !0 } : null, X = C(p, null, h, k, $);
    if (!X) return { visible: !1 };
    const le = v(b), re = ge(b).map((w) => C(w, X.x, h, k, $)).filter((w) => Number.isFinite(w == null ? void 0 : w.x) && Number.isFinite(w == null ? void 0 : w.y));
    if (re.length < 4) return { visible: !1 };
    const x = oe(le, 0, le.tanY), U = oe(le, 0, le.tanY + Math.max(le.tanY * 0.43, 0.053)), ie = C(x, X.x, h, k, $);
    if (!ie) return { visible: !1 };
    const we = C(U, (ie == null ? void 0 : ie.x) ?? X.x, h, k, $), Me = ((we == null ? void 0 : we.x) ?? ie.x) - ie.x, Ce = ((we == null ? void 0 : we.y) ?? ie.y) - ie.y, me = Math.hypot(Me, Ce) || 1, ue = {
      x: ie.x + Me / me * 30,
      y: ie.y + Ce / me * 30
    }, A = C(oe(le, 0, le.tanY), X.x, h, k, $), J = C(oe(le, le.tanX, 0), X.x, h, k, $), H = C(oe(le, 0, -le.tanY), X.x, h, k, $), z = C(oe(le, -le.tanX, 0), X.x, h, k, $);
    if (!A || !J || !H || !z) return { visible: !1 };
    const T = [
      X,
      ...re,
      ie,
      we,
      A,
      J,
      H,
      z
    ];
    if (E && !T.some((w) => Number((w == null ? void 0 : w.rawZ) ?? (w == null ? void 0 : w.z)) > 1e-4)) return { visible: !1 };
    const B = O(b, T), G = [
      {
        edge: "top",
        x: A.x,
        y: A.y,
        a: { x: re[0].x, y: re[0].y },
        b: { x: re[1].x, y: re[1].y }
      },
      {
        edge: "right",
        x: J.x,
        y: J.y,
        a: { x: re[1].x, y: re[1].y },
        b: { x: re[2].x, y: re[2].y }
      },
      {
        edge: "bottom",
        x: H.x,
        y: H.y,
        a: { x: re[2].x, y: re[2].y },
        b: { x: re[3].x, y: re[3].y }
      },
      {
        edge: "left",
        x: z.x,
        y: z.y,
        a: { x: re[3].x, y: re[3].y },
        b: { x: re[0].x, y: re[0].y }
      }
    ];
    return {
      center: { x: X.x, y: X.y },
      corners: re.map((w) => ({ x: w.x, y: w.y })),
      edgeMidpoints: G,
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: ue,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: B,
      visible: !0
    };
  }
  function P(b) {
    if (t && Z(b) && F()) return { visible: !1 };
    if (!Se() && (ae(b) || M(b))) return { visible: !1 };
    if (ae(b)) {
      const k = String(b.actionGroupId || b.id || "").trim(), E = y(k, b.layerKind), $ = r._strokeGeomCache.get(E);
      return $ || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), N(b, E));
    }
    if (M(b)) {
      const k = m(b), E = r._strokeGeomCache.get(k);
      return E || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), fe(b, k));
    }
    const W = g(b), p = r._strokeGeomCache.get(W);
    if (p) return p;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const h = _(b);
    return r._strokeGeomCache.set(W, h), h;
  }
  function ce(b, W, p, h = null) {
    const k = [];
    for (let E = 0; E <= p; E += 1) {
      const $ = E / p;
      let X = 0, le = 0;
      W === 0 ? (X = $, le = 0) : W === 1 ? (X = 1, le = $) : W === 2 ? (X = 1 - $, le = 1) : (X = 0, le = 1 - $);
      const L = I(b, X, le), re = r.mode === "unwrap" ? _e(L, h) : q(L);
      re && k.push(re);
    }
    return k;
  }
  function be() {
    const b = [...Array.isArray(i.shots) ? i.shots : []], W = [...s()].sort((p, h) => Number(p.z_index || 0) - Number(h.z_index || 0));
    return [...b, ...W];
  }
  function D() {
    const b = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((p, h) => Number(h.z_index || 0) - Number(p.z_index || 0)), ...b];
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
        getRasterObjectGeomCacheKey: m,
        getRasterObjectTransformedErpPoints: S,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: v,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: j,
        getStrokeGroupStrokes: K,
        isFreeSpaceView: F,
        isRasterObjectItem: M,
        isSceneSticker: R,
        isShotItem: Z,
        isStickerItem: Y,
        isStrokeGroupItem: ae,
        paintingShown: Se,
        poseOf: ye,
        projectDir: q,
        projectDirUnwrap: _e,
        projectEditorPoints: pe,
        projectErpPointToEditor: de,
        sceneStickerShown: te,
        stickerCornersDir: ge,
        stickerDirFromFrame: oe,
        stickerSampleDir: I,
        worldDirToFrameLocalPoint: V
      } = b);
    },
    projectSceneItemDir: C,
    objectGeom: P,
    sampleStickerEdge: ce,
    getCutoutSelectableItemsForDisplay: be,
    getCutoutSelectableItemsForHit: D
  };
}
const Cs = /* @__PURE__ */ new Map();
function GA(e) {
  const {
    api: t,
    editor: n,
    node: r,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se;
  function ye(p = n.interaction) {
    const h = String((p == null ? void 0 : p.kind) || "");
    if (h === "paint_stroke" || h === "paint_lasso_fill" || h === "move_stroke_group" || h === "scale_stroke_group" || h === "rotate_stroke_group" || h === "move_raster_object" || h === "scale_raster_object") return !0;
    if (h === "move_multi") {
      const k = Array.isArray(p == null ? void 0 : p.strokeSnapshots) && p.strokeSnapshots.length > 0, E = Array.isArray(p == null ? void 0 : p.rasterSnapshots) && p.rasterSnapshots.length > 0;
      return k || E;
    }
    return !1;
  }
  function q() {
    var h, k, E, $;
    let p = null;
    try {
      const X = g(), le = (($ = (E = (k = (h = n.paintEngine) == null ? void 0 : h.getErpTarget) == null ? void 0 : k.call(h, X)) == null ? void 0 : E.displayPaint) == null ? void 0 : $.canvas) || null;
      le && (p = {
        source: le,
        revision: `${v()}:${_e()}`
      });
    } catch {
      p = null;
    }
    return p;
  }
  function _e() {
    var $, X, le, L, re, x, U;
    const p = n.interaction, h = String((p == null ? void 0 : p.kind) || "");
    if (!ye(p)) return "";
    if (h === "paint_stroke" || h === "paint_lasso_fill") {
      const ie = (($ = p == null ? void 0 : p.stroke) == null ? void 0 : $.geometry) || null, we = String(((X = p == null ? void 0 : p.stroke) == null ? void 0 : X.layerKind) || ""), Me = ((le = ie == null ? void 0 : ie.rawPoints) == null ? void 0 : le.length) ?? ((L = ie == null ? void 0 : ie.points) == null ? void 0 : L.length) ?? 0, Ce = String((p == null ? void 0 : p._livePreviewToken) || "");
      return `_${we || "paint"}_${h}_live${Ce}_${Me}_${n.livePaintInteractionRevision}`;
    }
    const k = String(((re = p == null ? void 0 : p.item) == null ? void 0 : re.actionGroupId) || ""), E = String(((x = p == null ? void 0 : p.item) == null ? void 0 : x.rasterObjectId) || ((U = p == null ? void 0 : p.item) == null ? void 0 : U.id) || "");
    return `_${h}_${k || E || "active"}_${n.livePaintInteractionRevision}`;
  }
  function pe(p, h = null) {
    const k = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!k) return null;
    const E = s.get(k);
    if (E)
      return E.complete || E.width || E.naturalWidth, E;
    const $ = new Image();
    return $.onload = () => {
      typeof h == "function" && h();
    }, $.src = k, s.set(k, $), $;
  }
  function de(p) {
    const h = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!h) return null;
    const k = o.get(h);
    if (k) return k.ready ? k : null;
    const E = pe(p, () => {
      const U = o.get(h);
      U && (U.ready = !1), Y({ localOnly: !0 });
    });
    if (!E || !(E.complete || E.width || E.naturalWidth)) return null;
    const $ = Number(E.naturalWidth || E.width || 0), X = Number(E.naturalHeight || E.height || 0);
    if ($ < 1 || X < 1) return null;
    const le = Kt({ label: "editor.image-pixels" });
    le.width = $, le.height = X;
    const L = le.getContext("2d", { willReadFrequently: !0 });
    if (!L) return null;
    L.clearRect(0, 0, $, X), L.drawImage(E, 0, 0, $, X);
    const re = L.getImageData(0, 0, $, X).data, x = { canvas: le, width: $, height: X, alpha: re, ready: !0 };
    return o.set(h, x), x;
  }
  function te(p, h) {
    if (!p || !h) return null;
    const k = (p == null ? void 0 : p.bbox) || null;
    if (!k) return null;
    const E = (p == null ? void 0 : p.transform) || {}, $ = {
      u: (Number(k.u0 || 0) + Number(k.u1 || 0)) * 0.5,
      v: (Number(k.v0 || 0) + Number(k.v1 || 0)) * 0.5
    }, X = {
      u: ((Number(h.u || 0) - Number(E.du || 0)) % 1 + 1) % 1,
      v: Number(h.v || 0) - Number(E.dv || 0)
    }, le = K(
      X,
      $,
      Number(E.scale || 1),
      Number(E.rot_deg || 0)
    ), L = Number(k.u1 || 0) - Number(k.u0 || 0), re = Number(k.v1 || 0) - Number(k.v0 || 0);
    if (!(L > 1e-6) || !(re > 1e-6)) return null;
    const x = Se(Number(le.u || 0), Number(k.u0 || 0)) / L, U = (Number(le.v || 0) - Number(k.v0 || 0)) / re;
    if (x < 0 || x > 1 || U < 0 || U > 1) return 0;
    const ie = de(p);
    if (!ie) return null;
    const we = Oe(Math.floor(x * ie.width), 0, ie.width - 1), Me = Oe(Math.floor(U * ie.height), 0, ie.height - 1);
    return Number(ie.alpha[(Me * ie.width + we) * 4 + 3] || 0);
  }
  function ge(p, h, k, E = null) {
    if (!(h != null && h.visible) || !Nr(k, h.corners)) return !1;
    const $ = E || ae(k, performance.now()), X = te(p, $);
    return X === null ? !0 : X > 8;
  }
  function oe() {
    var E, $, X, le, L, re, x, U;
    const p = (($ = (E = n.paintEngine) == null ? void 0 : E.getErpTarget) == null ? void 0 : $.call(E, g(!1))) || null, h = Math.max(1, Number(((X = p == null ? void 0 : p.descriptor) == null ? void 0 : X.width) || ((L = (le = p == null ? void 0 : p.displayPaint) == null ? void 0 : le.canvas) == null ? void 0 : L.width) || 2048)), k = Math.max(1, Number(((re = p == null ? void 0 : p.descriptor) == null ? void 0 : re.height) || ((U = (x = p == null ? void 0 : p.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : U.height) || 1024));
    return { width: h, height: k };
  }
  function I() {
    var Me, Ce, me;
    const p = n.interaction;
    if ((p == null ? void 0 : p.kind) !== "paint_stroke") return null;
    const h = (p == null ? void 0 : p.stroke) || null;
    if (!h || String((h == null ? void 0 : h.layerKind) || "") !== "paint" || String((h == null ? void 0 : h.toolKind) || "") !== "eraser") return null;
    const k = u(), E = `${_e()}:${k.width}:${k.height}`;
    if (((Me = n._activePaintEraserPreviewInfo) == null ? void 0 : Me.cacheKey) === E)
      return n._activePaintEraserPreviewInfo.value || null;
    const $ = Io(h), X = ($ == null ? void 0 : $.geometry) || null;
    if (X && String(X.geometryKind || "") !== "lasso_fill") {
      const ue = Array.isArray(X.rawPoints) && X.rawPoints.length ? X.rawPoints : Array.isArray(X.points) ? X.points : [];
      X.processedPoints = M(ue, $.targetSpace, !0);
    }
    const le = c(k.width, k.height, { readback: !0 });
    if (!R(le, $, { w: k.width, h: k.height })) return null;
    const L = ((me = (Ce = le.ctx) == null ? void 0 : Ce.getImageData(0, 0, k.width, k.height)) == null ? void 0 : me.data) || null;
    if (!L) return null;
    let re = k.width, x = k.height, U = -1, ie = -1;
    for (let ue = 0; ue < k.height; ue += 1)
      for (let A = 0; A < k.width; A += 1)
        L[(ue * k.width + A) * 4 + 3] <= 8 || (A < re && (re = A), ue < x && (x = ue), A > U && (U = A), ue > ie && (ie = ue));
    if (U < re || ie < x)
      return n._activePaintEraserPreviewInfo = { cacheKey: E, value: null }, null;
    const we = {
      surface: le,
      bounds: { minX: re, minY: x, maxX: U, maxY: ie },
      key: `${E}:${re}:${x}:${U}:${ie}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: E, value: we }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), we;
  }
  function V() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function N(p, h, k) {
    var E, $;
    if (!p) return null;
    if ((E = p.item) != null && E.bbox) {
      const X = p.item.bbox, le = (($ = p.item) == null ? void 0 : $.transform) || {}, L = Number(X.u0 || 0) + Number(le.du || 0), re = Number(X.u1 || 0) + Number(le.du || 0), x = Number(X.v0 || 0) + Number(le.dv || 0), U = Number(X.v1 || 0) + Number(le.dv || 0);
      return {
        minX: Math.floor((L % 1 + 1) % 1 * h),
        maxX: Math.ceil((re % 1 + 1) % 1 * h),
        minY: Math.floor(Oe(x, 0, 1) * k),
        maxY: Math.ceil(Oe(U, 0, 1) * k),
        wraps: re - L >= 1 || L < 0 || re > 1
      };
    }
    return null;
  }
  function fe(p, h, k) {
    if (!p || !h) return !1;
    const E = (le) => le.wraps ? [
      { minX: 0, maxX: le.maxX, minY: le.minY, maxY: le.maxY, wraps: !1 },
      { minX: le.minX, maxX: k - 1, minY: le.minY, maxY: le.maxY, wraps: !1 }
    ] : [le], $ = E(p), X = E(h);
    return $.some((le) => X.some((L) => !(le.maxX < L.minX || L.maxX < le.minX || le.maxY < L.minY || L.maxY < le.minY)));
  }
  function C(p, h, k) {
    var z, T, B, G, w, ne, se;
    if (!p || !h || !((z = k == null ? void 0 : k.surface) != null && z.canvas)) return p;
    const E = Number(p.width || k.surface.canvas.width || 0), $ = Number(p.height || k.surface.canvas.height || 0);
    if (E < 1 || $ < 1) return p;
    const X = N(h, E, $);
    if (X && !fe(X, k.bounds, E)) return p;
    const le = String(((T = h.item) == null ? void 0 : T.id) || h.id || ""), L = ((B = h.item) == null ? void 0 : B.transform) || {}, re = `${k.key}:${le}:${E}:${$}:${Number(L.du || 0).toFixed(6)}:${Number(L.dv || 0).toFixed(6)}:${Number(L.rot_deg || 0).toFixed(3)}:${Number(L.scale || 1).toFixed(4)}`, x = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (x.has(re)) return x.get(re);
    const U = Oe(Math.floor(Number(((G = k.bounds) == null ? void 0 : G.minX) || 0)), 0, Math.max(0, E - 1)), ie = Oe(Math.floor(Number(((w = k.bounds) == null ? void 0 : w.minY) || 0)), 0, Math.max(0, $ - 1)), we = Oe(Math.ceil(Number(((ne = k.bounds) == null ? void 0 : ne.maxX) || 0)), U, Math.max(0, E - 1)), Me = Oe(Math.ceil(Number(((se = k.bounds) == null ? void 0 : se.maxY) || 0)), ie, Math.max(0, $ - 1)), Ce = Math.max(1, we - U + 1), me = Math.max(1, Me - ie + 1), ue = c(E, $, { readback: !0 });
    ue.ctx.clearRect(0, 0, E, $), ue.ctx.drawImage(p, 0, 0);
    const A = ue.ctx.getImageData(U, ie, Ce, me);
    ue.ctx.save(), ue.ctx.globalCompositeOperation = "destination-out", ue.ctx.drawImage(k.surface.canvas, 0, 0), ue.ctx.restore();
    const J = ue.ctx.getImageData(U, ie, Ce, me);
    let H = !1;
    for (let ve = 0; ve < Ce * me; ve += 1) {
      const he = A.data[ve * 4 + 3], xe = J.data[ve * 4 + 3];
      if (he > xe) {
        H = !0;
        break;
      }
    }
    return H ? (x.size > 64 && x.clear(), x.set(re, ue.canvas), ue.canvas) : (x.set(re, p), p);
  }
  function O(p, h = null) {
    const k = F((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), E = (p == null ? void 0 : p.bbox) || null;
    if (!k || !E) return null;
    const $ = pe(p, h);
    if (!$ || !($.complete || $.width || $.naturalWidth)) return null;
    const { width: X, height: le } = oe(), L = (p == null ? void 0 : p.transform) || {}, re = [
      k,
      X,
      le,
      E.u0,
      E.v0,
      E.u1,
      E.v1,
      L.du,
      L.dv,
      L.rot_deg,
      L.scale,
      y()
    ].join(":"), x = i.get(re);
    if (x) return x;
    i.size > 64 && i.clear();
    const U = Kt({ label: "editor.raster-erp" });
    U.width = X, U.height = le;
    const ie = U.getContext("2d");
    return ie ? (D0(ie, $, p, X, le), i.set(re, U), U) : null;
  }
  async function _(p, h) {
    const k = await new Promise((L) => p.toBlob(L, "image/png")), E = new FormData();
    E.append("image", k, h), E.append("type", "input"), E.append("subfolder", "panorama_stickers"), E.append("overwrite", "1");
    const $ = await t.fetchApi("/upload/image", { method: "POST", body: E });
    if (!$ || $.status !== 200) throw new Error(`upload failed (${$ == null ? void 0 : $.status})`);
    const X = await $.json(), le = String((X == null ? void 0 : X.name) || "").trim();
    if (!le) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: le,
      subfolder: String((X == null ? void 0 : X.subfolder) || "panorama_stickers"),
      storage: String((X == null ? void 0 : X.type) || "input")
    };
  }
  let P = null, ce = !1;
  function be() {
    const p = Np(a.painting), { width: h, height: k } = f();
    return RS(a.painting_layer, { paintCount: p.totalPaintCount, maskCount: p.totalMaskCount, width: h, height: k, nodeId: String(r.id ?? "0") });
  }
  function D() {
    const p = String(r.id ?? "0"), h = Cs.get(p);
    if (ce && h) return h;
    const k = (async () => {
      var X, le, L, re, x, U, ie, we, Me, Ce, me, ue;
      const E = v(), $ = Np(a.painting);
      if ($.totalPaintCount <= 0 && $.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, P = E, l());
        return;
      }
      if (P !== E && !ce) {
        ce = !0;
        try {
          Z();
          const A = g(!1), J = ((le = (X = n.paintEngine) == null ? void 0 : X.getErpTarget) == null ? void 0 : le.call(X, A)) || null, H = ((L = J == null ? void 0 : J.displayPaint) == null ? void 0 : L.canvas) || null, z = ((re = J == null ? void 0 : J.committedMask) == null ? void 0 : re.canvas) || null, T = Math.max(1, Number(((x = J == null ? void 0 : J.descriptor) == null ? void 0 : x.width) || (H == null ? void 0 : H.width) || (z == null ? void 0 : z.width) || 2048)), B = Math.max(1, Number(((U = J == null ? void 0 : J.descriptor) == null ? void 0 : U.height) || (H == null ? void 0 : H.height) || (z == null ? void 0 : z.height) || 1024));
          (!H && $.totalPaintCount > 0 || !z && $.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((ie = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ie.width) || 0) !== T || Number(((we = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : we.height) || 0) !== B) && (n._paintLayerSyncBlankSurface = c(T, B)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, T, B));
          const G = H || $.totalPaintCount > 0 && ((Me = n._paintLayerSyncBlankSurface) == null ? void 0 : Me.canvas) || null, w = z || $.totalMaskCount > 0 && ((Ce = n._paintLayerSyncBlankSurface) == null ? void 0 : Ce.canvas) || null;
          if (!G && !w) return;
          let ne = null, se = null;
          const ve = [];
          if ($.totalPaintCount > 0) {
            ne = await _(G, `pano_paint_${p}.png`);
            for (const he of A) {
              const xe = String(he || "").trim();
              if (!xe) continue;
              const Fe = ((ue = (me = n.paintEngine) == null ? void 0 : me.getGroupDisplayCanvas) == null ? void 0 : ue.call(me, xe)) || null;
              if (!Fe) continue;
              const Le = xe.replace(/[^a-zA-Z0-9_-]+/g, "_"), ze = await _(Fe, `pano_group_${p}_${Le}.png`);
              ze && ve.push({
                id: xe,
                actionGroupId: xe,
                image: ze
              });
            }
          }
          $.totalMaskCount > 0 && (se = await _(w, `pano_mask_${p}.png`)), E === v() && (a.painting_layer = {
            paint: ne,
            mask: se,
            groups: ve,
            revision: E
          }, P = E, l());
        } catch (A) {
          throw A;
        } finally {
          ce = !1;
        }
      }
    })();
    return Cs.set(p, k), k.finally(() => {
      Cs.get(p) === k && Cs.delete(p);
    }), k;
  }
  function b() {
    const p = S(!0).filter(($) => $.type === "strokeGroup").map(($) => ({ actionGroupId: $.actionGroupId, z_index: $.z_index })), h = n.paintEngine, k = m(), E = I();
    return Vu({ ...a, painting: { ...a.painting, groups: p } }, {
      group: ($) => {
        const X = h == null ? void 0 : h.getGroupDisplayCanvas($);
        return X && { media: X, revision: `${k}:${$}` };
      },
      raster: ($) => {
        const X = O($, () => Y());
        if (!X) return null;
        const le = $.transform || {};
        return {
          media: C(X, { item: $ }, E),
          revision: [
            v(),
            (E == null ? void 0 : E.key) || "",
            $.id,
            Number(le.du || 0).toFixed(6),
            Number(le.dv || 0).toFixed(6),
            Number(le.rot_deg || 0).toFixed(3),
            Number(le.scale || 1).toFixed(4)
          ].join(":")
        };
      },
      mask: () => jh(h)
    });
  }
  function W() {
    a.painting_layer !== null && (a.painting_layer = null), P = "";
  }
  return {
    connect(p) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: m,
        getOrderedDisplayListObjects: S,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: v,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: j,
        inverseTransformErpPointAround: K,
        parseRasterObjectSelectionId: F,
        processFreehandPoints: M,
        rasterizeStrokeToSurface: R,
        rebuildPaintEngineIfNeeded: Z,
        requestDraw: Y,
        screenPosToErpPoint: ae,
        shortestWrappedDelta: Se
      } = p);
    },
    getSharedLivePaintSurface: q,
    getLivePaintRevisionSuffix: _e,
    isPaintCompositeInteraction: ye,
    hitRasterObjectAt: ge,
    invalidateLivePaintPreviewCaches: V,
    buildRasterObjectEditCanvas: O,
    needsPaintingLayerSync: be,
    syncPaintingLayerAsync: D,
    invalidatePaintingLayerState: W,
    buildEditorViewPaintLayers: b
  };
}
function WA(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, s, a;
  function l(O) {
    return !O || typeof O != "object" ? { x: 0, y: 0 } : { x: Number((O == null ? void 0 : O.u) || 0), y: Number((O == null ? void 0 : O.v) || 0) };
  }
  function c(O, _, P, ce = {}) {
    return { ...{
      ...O,
      t: Number((O == null ? void 0 : O.t) || 0),
      widthScale: f(O, "widthScale", 1),
      pressureLike: f(O, "pressureLike", 1)
    }, ...ce, u: _, v: P };
  }
  function d(O, _ = !1) {
    return _ ? 12e-4 : 18e-4;
  }
  function u(O, _, P = !1) {
    if (!Array.isArray(O) || !O.length) return [];
    const ce = String((_ == null ? void 0 : _.kind) || "") === "ERP_GLOBAL", be = /* @__PURE__ */ new WeakMap();
    if (ce) {
      let L = null;
      O.forEach((re) => {
        const x = Number((re == null ? void 0 : re.u) || 0), U = Number((re == null ? void 0 : re.v) || 0), ie = (x % 1 + 1) % 1, we = L == null ? ie : L + a(ie, (L % 1 + 1) % 1);
        be.set(re, { x: we, y: U }), L = we;
      });
    }
    const D = (L) => !L || typeof L != "object" ? { x: 0, y: 0 } : be.get(L) || l(L), b = (L, re, x, U = {}) => {
      const ie = ce ? (Number(re) % 1 + 1) % 1 : Number(re), we = c(L, ie, x, U);
      return be.set(we, { x: Number(re), y: Number(x) }), we;
    }, W = (L, re, x) => {
      const U = D(L), ie = D(re);
      return b(L, Cn(U.x, ie.x, x), Cn(U.y, ie.y, x), {
        t: Cn(Number((L == null ? void 0 : L.t) || 0), Number((re == null ? void 0 : re.t) || 0), x),
        widthScale: Cn(f(L, "widthScale", 1), f(re, "widthScale", 1), x),
        pressureLike: Cn(f(L, "pressureLike", 1), f(re, "pressureLike", 1), x)
      });
    };
    if (O.length === 1) {
      const L = D(O[0]);
      return [b(O[0], L.x, L.y)];
    }
    const p = d(_, P), h = (L, re) => {
      const x = [0];
      for (let A = 1; A < L.length; A += 1) {
        const J = D(L[A - 1]), H = D(L[A]);
        x.push(x[A - 1] + Math.hypot(H.x - J.x, H.y - J.y));
      }
      const U = x[x.length - 1] || 0;
      if (U <= 1e-8) {
        const A = L[0], J = D(A);
        return [b(A, J.x, J.y)];
      }
      const ie = [];
      let we = 0;
      for (let A = 0; A <= U + 1e-9; A += re) {
        for (; we < x.length - 2 && x[we + 1] < A; ) we += 1;
        const J = x[we], H = x[we + 1], z = Math.max(1e-8, H - J);
        ie.push(W(L[we], L[we + 1], Oe((A - J) / z, 0, 1)));
      }
      const Me = L[L.length - 1], Ce = D(Me), me = ie[ie.length - 1], ue = me ? D(me) : null;
      return (!ue || Math.hypot(ue.x - Ce.x, ue.y - Ce.y) > re * 0.35) && ie.push(b(Me, Ce.x, Ce.y)), ie;
    }, k = (L) => {
      if (!Array.isArray(L) || L.length < 3) return L ? L.slice() : [];
      const re = D(L[0]), x = [b(L[0], re.x, re.y)];
      for (let we = 0; we < L.length - 1; we += 1) {
        const Me = L[we], Ce = L[we + 1], me = D(Me), ue = D(Ce), A = b(
          Me,
          me.x * 0.75 + ue.x * 0.25,
          me.y * 0.75 + ue.y * 0.25,
          {
            t: Number(Me.t || 0) * 0.75 + Number(Ce.t || 0) * 0.25,
            widthScale: f(Me, "widthScale", 1) * 0.75 + f(Ce, "widthScale", 1) * 0.25,
            pressureLike: f(Me, "pressureLike", 1) * 0.75 + f(Ce, "pressureLike", 1) * 0.25
          }
        ), J = b(
          Me,
          me.x * 0.25 + ue.x * 0.75,
          me.y * 0.25 + ue.y * 0.75,
          {
            t: Number(Me.t || 0) * 0.25 + Number(Ce.t || 0) * 0.75,
            widthScale: f(Me, "widthScale", 1) * 0.25 + f(Ce, "widthScale", 1) * 0.75,
            pressureLike: f(Me, "pressureLike", 1) * 0.25 + f(Ce, "pressureLike", 1) * 0.75
          }
        );
        x.push(A, J);
      }
      const U = L[L.length - 1], ie = D(U);
      return x.push(b(U, ie.x, ie.y)), x;
    }, E = h(O, p);
    if (E.length < 3) return E;
    const $ = P ? 2 : 1;
    let X = E.slice();
    for (let L = 0; L < $; L += 1) X = k(X);
    return h(X, Math.max(p * 0.75, 55e-5));
  }
  function f(O, _, P = 1) {
    const ce = Number(O == null ? void 0 : O[_]);
    return Number.isFinite(ce) ? Math.max(0, ce) : P;
  }
  function m(O) {
    const _ = Number(O == null ? void 0 : O.radiusValue);
    if (Number.isFinite(_) && _ > 0) {
      const P = String((O == null ? void 0 : O.radiusModel) || "").trim() || "erp_uv_norm";
      return P === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
      } : {
        model: P,
        value: _
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
    };
  }
  function S(O, _, P = {}) {
    const ce = Kt({ label: "editor.raster-surface" });
    ce.width = Math.max(1, Math.round(O)), ce.height = Math.max(1, Math.round(_));
    const be = ce.getContext("2d", P.readback ? { willReadFrequently: !0 } : void 0);
    return be && (be.clearRect(0, 0, ce.width, ce.height), be.imageSmoothingEnabled = !0), { canvas: ce, ctx: be };
  }
  function g() {
    const O = Se();
    return `${String(t.paintStrokeRevision)}:${O.width}x${O.height}`;
  }
  function v() {
    const O = Se();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${O.width}x${O.height}`;
  }
  function y() {
    const O = i(), _ = v();
    return O ? `${_}:${O}` : _;
  }
  function j() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function K() {
    t.paintCompositeRevision += 1;
  }
  function F() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function M() {
    var O, _;
    t.paintEngineRevisionKey = null, (_ = (O = t.paintEngine) == null ? void 0 : O.rebuildCommitted) == null || _.call(O, r), t.paintEngineRevisionKey = g();
  }
  function R() {
    F(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function Z({ rebuildPaintEngine: O = !1 } = {}) {
    o(), j(), R(), O && M();
  }
  function Y() {
    o(), K(), R();
  }
  function ae() {
    var ce;
    const O = Se(), _ = `${O.width}x${O.height}`;
    t.paintEngineDescriptorKey !== _ && (t.paintEngine = Qa(O), t.paintEngineDescriptorKey = _, t.paintEngineRevisionKey = "");
    const P = g();
    t.paintEngineRevisionKey !== P && (t.paintEngineRevisionKey = P, (ce = t.paintEngine) == null || ce.rebuildCommitted(r));
  }
  function Se() {
    const O = Math.max(1, s(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: O,
      height: Math.max(1, Math.round(O * 0.5))
    };
  }
  function ye() {
    return Se();
  }
  function q(O, _, P, ce, be = null) {
    const D = m(O), b = f(_, "widthScale", 1) * f(_, "pressureLike", 1);
    return D.model === "erp_uv_norm" ? Math.max(0.5, D.value * P * b) : D.model === "world_angle" ? be ? Math.max(0.5, D.value / Math.max(1e-6, Number(be.hFOV_deg || 90) * ir) * P * b) : Math.max(0.5, D.value / (2 * Math.PI) * P * b) : Math.max(0.5, Number((O == null ? void 0 : O.size) || 10) * 0.5 * b);
  }
  function _e(O, _, P = {}) {
    const ce = String((_ == null ? void 0 : _.layerKind) || "paint"), be = String((_ == null ? void 0 : _.toolKind) || "pen"), D = P.preview === !0, b = D ? 0.78 : 1;
    if (O.globalAlpha = be === "marker" ? 0.7 * b : 1, ce === "mask") {
      O.fillStyle = D ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (be === "eraser") {
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const W = String((_ == null ? void 0 : _.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (_ == null ? void 0 : _.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, p = D ? Math.max(0.28, Number(W.a ?? 1) * 0.88) : Math.max(0.12, Number(W.a ?? 1));
    O.fillStyle = `rgba(${Math.round(Number(W.r || 0) * 255)}, ${Math.round(Number(W.g || 0) * 255)}, ${Math.round(Number(W.b || 0) * 255)}, ${p})`;
  }
  function pe(O, _, P) {
    const ce = Math.max(0.5, Math.min(P, Number((_ == null ? void 0 : _.radiusPx) || 0.5)));
    !Number.isFinite(_ == null ? void 0 : _.x) || !Number.isFinite(_ == null ? void 0 : _.y) || !Number.isFinite(ce) || (O.beginPath(), O.arc(Number(_.x || 0), Number(_.y || 0), ce, 0, Math.PI * 2), O.fill());
  }
  function de(O, _, P, ce, be = {}) {
    if (!O || !Array.isArray(_) || !_.length) return;
    const D = Math.max(ce.w, ce.h) * 0.25;
    O.save(), _e(O, P, be);
    const b = (W) => pe(O, W, D);
    if (_.length === 1) {
      b(_[0]), O.restore();
      return;
    }
    for (let W = 0; W < _.length - 1; W += 1) {
      const p = _[W], h = _[W + 1];
      if (!p || !h) continue;
      const k = Number(p.x || 0), E = Number(p.y || 0), $ = Number(h.x || 0), X = Number(h.y || 0), le = Math.max(0.5, Math.min(D, Number(p.radiusPx || 0.5))), L = Math.max(0.5, Math.min(D, Number(h.radiusPx || 0.5)));
      if (!Number.isFinite(k) || !Number.isFinite(E) || !Number.isFinite($) || !Number.isFinite(X) || !Number.isFinite(le) || !Number.isFinite(L)) continue;
      const re = $ - k, x = X - E, U = Math.hypot(re, x);
      if (!Number.isFinite(U) || U < 1e-6) {
        b(p);
        continue;
      }
      if (U > Math.max(ce.w, ce.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(le, L)), we = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Me = Math.max(1, Math.ceil(U / we));
      for (let Ce = 0; Ce <= Me; Ce += 1) {
        const me = Ce / Me;
        b({
          x: Cn(k, $, me),
          y: Cn(E, X, me),
          radiusPx: Cn(le, L, me)
        });
      }
    }
    b(_[_.length - 1]), O.restore();
  }
  function te(O, _, P, ce) {
    de(O, _, P, ce, { preview: !1 });
  }
  function ge(O, _, P, ce, be) {
    var W, p, h, k;
    if (!O || !Array.isArray(_) || _.length < 3) return;
    const D = "u", b = "v";
    if (O.save(), String((P == null ? void 0 : P.layerKind) || "") === "mask")
      O.fillStyle = "rgba(255,255,255,1)";
    else if (String((P == null ? void 0 : P.toolKind) || "") === "eraser")
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
    else {
      const E = (P == null ? void 0 : P.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      O.fillStyle = `rgba(${Math.round(Number(E.r || 0) * 255)}, ${Math.round(Number(E.g || 0) * 255)}, ${Math.round(Number(E.b || 0) * 255)}, ${Number(E.a ?? 1)})`;
    }
    O.beginPath(), O.moveTo(Number(((W = _[0]) == null ? void 0 : W[D]) || 0) * ce.w, Number(((p = _[0]) == null ? void 0 : p[b]) || 0) * ce.h);
    for (let E = 1; E < _.length; E += 1)
      O.lineTo(Number(((h = _[E]) == null ? void 0 : h[D]) || 0) * ce.w, Number(((k = _[E]) == null ? void 0 : k[b]) || 0) * ce.h);
    O.closePath(), O.fill(), O.restore();
  }
  function oe(O) {
    const _ = (O == null ? void 0 : O.geometry) || null;
    return _ ? String(_.geometryKind || "") === "lasso_fill" ? Array.isArray(_.points) ? _.points : [] : Array.isArray(_.processedPoints) && _.processedPoints.length ? _.processedPoints : Array.isArray(_.rawPoints) && _.rawPoints.length ? _.rawPoints : Array.isArray(_.points) ? _.points : [] : [];
  }
  function I(O, _) {
    const P = oe(O);
    return !Array.isArray(P) || !P.length ? [] : P.map((ce) => ({
      x: Number((ce == null ? void 0 : ce.u) || 0) * Number((_ == null ? void 0 : _.w) || 1),
      y: Number((ce == null ? void 0 : ce.v) || 0) * Number((_ == null ? void 0 : _.h) || 1),
      radiusPx: q(O, ce, Number((_ == null ? void 0 : _.w) || 1), Number((_ == null ? void 0 : _.h) || 1))
    }));
  }
  function V(O, _, P = null) {
    var W, p, h, k;
    if (!(O != null && O.ctx) || !_) return !1;
    const ce = P || { w: Number(((W = O.canvas) == null ? void 0 : W.width) || 0), h: Number(((p = O.canvas) == null ? void 0 : p.height) || 0) }, be = String((_ == null ? void 0 : _.toolKind) || "") === "eraser" ? {
      ..._,
      layerKind: "mask",
      toolKind: String(((h = _ == null ? void 0 : _.geometry) == null ? void 0 : h.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : _;
    if (String(((k = _ == null ? void 0 : _.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill")
      return ge(O.ctx, oe(be), be, ce), !0;
    const b = I(be, ce);
    return b.length ? (te(O.ctx, b, be, ce), !0) : !1;
  }
  function N(O, _, P, ce = 8) {
    const be = new Uint8Array(_ * P), D = [], b = new Int32Array(_ * P), W = new Int32Array(_ * P);
    for (let p = 0; p < P; p += 1)
      for (let h = 0; h < _; h += 1) {
        const k = p * _ + h;
        if (be[k] || O[k] <= ce) continue;
        let E = 0, $ = 0;
        b[$] = h, W[$] = p, $ += 1, be[k] = 1;
        const X = [];
        let le = h, L = p, re = h, x = p;
        for (; E < $; ) {
          const U = b[E], ie = W[E];
          E += 1, X.push({ x: U, y: ie }), U < le && (le = U), ie < L && (L = ie), U > re && (re = U), ie > x && (x = ie);
          const we = [
            [(U - 1 + _) % _, ie],
            [(U + 1) % _, ie],
            [U, ie - 1],
            [U, ie + 1]
          ];
          for (const [Me, Ce] of we) {
            if (Ce < 0 || Ce >= P) continue;
            const me = Ce * _ + Me;
            be[me] || O[me] <= ce || (be[me] = 1, b[$] = Me, W[$] = Ce, $ += 1);
          }
        }
        D.push({ pixels: X, minX: le, minY: L, maxX: re, maxY: x });
      }
    return D;
  }
  function fe(O, _) {
    const P = [...new Set((Array.isArray(O == null ? void 0 : O.pixels) ? O.pixels : []).map((p) => Number((p == null ? void 0 : p.x) || 0)).filter((p) => Number.isFinite(p)))].sort((p, h) => p - h);
    if (!P.length) return null;
    if (P.length === 1)
      return { startX: P[0], widthPx: 1 };
    let ce = -1, be = 0;
    for (let p = 0; p < P.length; p += 1) {
      const h = P[p], E = (p === P.length - 1 ? P[0] + _ : P[p + 1]) - h - 1;
      E > ce && (ce = E, be = p);
    }
    const D = (P[(be + 1) % P.length] + _) % _;
    let b = 1 / 0, W = -1 / 0;
    for (const p of P) {
      const h = (p - D + _) % _;
      b = Math.min(b, h), W = Math.max(W, h);
    }
    return {
      startX: D,
      widthPx: Math.max(1, W - b + 1)
    };
  }
  function C(O, _, P = {}) {
    var h;
    const ce = Number((O == null ? void 0 : O.width) || 0), be = Number((O == null ? void 0 : O.height) || 0), D = (h = O == null ? void 0 : O.getContext) == null ? void 0 : h.call(O, "2d");
    if (!D || ce < 1 || be < 1) return [];
    const b = D.getImageData(0, 0, ce, be), W = new Uint8Array(ce * be);
    for (let k = 0; k < W.length; k += 1) W[k] = b.data[k * 4 + 3];
    return N(W, ce, be, 8).map((k, E) => {
      const $ = fe(k, ce);
      if (!$) return null;
      const X = Number($.widthPx || 0), le = k.maxY - k.minY + 1, L = Number($.startX || 0), re = Kt({ label: "editor.lasso-fill" });
      re.width = X, re.height = le;
      const x = re.getContext("2d");
      if (!x) return null;
      const U = x.createImageData(X, le);
      return k.pixels.forEach(({ x: ie, y: we }) => {
        const Me = (we * ce + ie) * 4, Ce = (Number(ie || 0) - L + ce) % ce, me = ((we - k.minY) * X + Ce) * 4;
        U.data[me + 0] = b.data[Me + 0], U.data[me + 1] = b.data[Me + 1], U.data[me + 2] = b.data[Me + 2], U.data[me + 3] = b.data[Me + 3];
      }), x.putImageData(U, 0, 0), {
        id: Ci("raster"),
        type: "raster_frozen",
        layerKind: _ === "mask" ? "mask" : "paint",
        z_index: Number((P == null ? void 0 : P.z_index) || 0) + E * 1e-3,
        locked: (P == null ? void 0 : P.locked) === !0,
        bbox: {
          u0: 0,
          v0: k.minY / be,
          u1: X / ce,
          v1: (k.maxY + 1) / be
        },
        rasterDataUrl: re.toDataURL("image/png"),
        transform: {
          du: L / ce,
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
    createRasterSurface: S,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: v,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: M,
    markObjectVisualsDirty: R,
    markPaintStrokeVisualsDirty: Z,
    markPaintCompositeVisualsDirty: Y,
    rebuildPaintEngineIfNeeded: ae,
    getDesiredPaintTargetDescriptor: Se,
    getActivePaintTargetDescriptor: ye,
    rasterizeStrokeToSurface: V,
    createRasterFrozenObjectsFromCanvas: C
  };
}
function UA(e) {
  const {
    comfyMedia: t,
    editor: n,
    node: r,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, S, g, v = { stored: null, shown: null, handoff: null, fps: null };
  function y(I, V = null) {
    var N;
    if (I && typeof I == "object" && !Array.isArray(I)) return I;
    if (Array.isArray(I) && I.length > 0) {
      const fe = I[0];
      if (fe && typeof fe == "object" && !Array.isArray(fe)) return fe;
    }
    if (Array.isArray(V) && V.length > 0) {
      const fe = (N = V[0]) == null ? void 0 : N.parsed_state;
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
  function j(I, V, N) {
    const fe = Math.max(1, Number(V || 1)), C = Math.max(1, Number(N || 1)), O = Oe(Number(I || 30), 0.1, 179) * ir, _ = 2 * Math.atan(Math.tan(O * 0.5) * (C / fe));
    return Oe(_ * ui, 0.1, 179);
  }
  function K(I) {
    const V = String(I || "").trim();
    if (!V) return null;
    try {
      const N = JSON.parse(V);
      if (!N || typeof N != "object" || String(N.kind || "") !== "pano_sticker_state") return null;
      const fe = N.version;
      let C = null;
      if (typeof fe == "number" && Number.isInteger(fe) ? C = fe : typeof fe == "string" && /^\d+$/.test(fe) && (C = Number.parseInt(fe, 10)), C !== 1) return null;
      const O = N.pose;
      if (!O || typeof O != "object") return null;
      const _ = Number(O.yaw_deg), P = Number(O.pitch_deg), ce = Number(O.roll_deg), be = Number(O.hFOV_deg);
      if (![_, P, ce, be].every((p) => Number.isFinite(p))) return null;
      let D = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(D, -0) && (D = 0);
      const b = {
        yaw_deg: D,
        pitch_deg: Oe(P, -89.9, 89.9),
        roll_deg: ce,
        hFOV_deg: Oe(be, 0.1, 179)
      }, W = Number(N.source_aspect);
      return Number.isFinite(W) && W > 0 && (b.source_aspect = W), b;
    } catch {
      return null;
    }
  }
  function F(I) {
    const V = Number(I == null ? void 0 : I.yaw_deg), N = Number(I == null ? void 0 : I.pitch_deg), fe = Number((I == null ? void 0 : I.roll_deg) ?? (I == null ? void 0 : I.rot_deg)), C = Number(I == null ? void 0 : I.hFOV_deg), O = pi(I);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: It(Number.isFinite(V) ? V : 0),
        pitch_deg: Oe(Number.isFinite(N) ? N : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(fe) ? fe : 0,
        hFOV_deg: Oe(Number.isFinite(C) ? C : 90, 0.1, 179)
      },
      source_aspect: O
    };
  }
  function M(I) {
    var P;
    if (!I || typeof I != "object") return F(null);
    const V = Number(I == null ? void 0 : I.yaw_deg), N = Number(I == null ? void 0 : I.pitch_deg), fe = Number((I == null ? void 0 : I.roll_deg) ?? (I == null ? void 0 : I.rot_deg)), C = Number(I == null ? void 0 : I.hFOV_deg), O = Number(I == null ? void 0 : I.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(C) && Number.isFinite(O)) {
      const ce = Oe(C, 0.1, 179) * ir, be = Oe(O, 0.1, 179) * ir, D = Math.tan(be * 0.5);
      if (Math.abs(D) > 1e-6) {
        const b = Math.tan(ce * 0.5) / D;
        Number.isFinite(b) && b > 0 && (_ = b);
      }
    }
    if (I != null && I.asset_id && ((P = o == null ? void 0 : o.assets) != null && P[I.asset_id])) {
      const ce = o.assets[I.asset_id], be = Number((ce == null ? void 0 : ce.w) || 0), D = Number((ce == null ? void 0 : ce.h) || 0);
      be > 0 && D > 0 && (_ = be / D);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: It(Number.isFinite(V) ? V : 0),
        pitch_deg: Oe(Number.isFinite(N) ? N : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(fe) ? fe : 0,
        hFOV_deg: Oe(Number.isFinite(C) ? C : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function R(I) {
    return t.linkedValue(r, I);
  }
  function Z(I, V, N) {
    const fe = I && typeof I == "object" ? {
      yaw_deg: Number(I.yaw_deg || 0),
      pitch_deg: Number(I.pitch_deg || 0),
      roll_deg: Number(I.rot_deg ?? I.roll_deg ?? 0),
      hFOV_deg: Number(I.hFOV_deg || 30)
    } : K(V);
    if (fe) {
      const _ = Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || fe.source_aspect || 1), P = Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 1);
      return {
        yaw_deg: Number(fe.yaw_deg || 0),
        pitch_deg: Number(fe.pitch_deg || 0),
        hFOV_deg: Number(fe.hFOV_deg || 30),
        vFOV_deg: j(fe.hFOV_deg, _, P),
        rot_deg: Number(fe.roll_deg || 0)
      };
    }
    const C = Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || 1), O = Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 1);
    return {
      yaw_deg: Number(n.viewYaw || 0),
      pitch_deg: Number(n.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: j(30, C, O),
      rot_deg: 0
    };
  }
  function Y() {
    const I = bt(r, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return Tg(o, Og(r, { pose: I, handoff: ae() }));
  }
  function ae() {
    return bt(r, "sticker-handoff") ? Iw(r, c("pano_sticker_handoff")) : null;
  }
  function Se() {
    return s === "stickers" && !i && r.__panoSceneStateV2 === !0;
  }
  function ye(I, V, N) {
    return structuredClone(Yi(cn({ version: 2, timeline: { fps: V }, stickers: [I] }), N).stickers[0]);
  }
  function q({ record: I = !0, restored: V = !1 } = {}) {
    var ce;
    if (!Se()) return !1;
    const N = o.stickers.find((be) => {
      var D;
      return ((D = be.source) == null ? void 0 : D.kind) === "port";
    });
    if (!N)
      return v = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: fe } = o.timeline;
    let C;
    if (V || !v.handoff || ((ce = v.stored) == null ? void 0 : ce.id) !== N.id)
      C = structuredClone(N);
    else {
      const be = (D) => v.fps === fe ? D : ye(D, v.fps, fe);
      I && Mw(N, be(v.shown)), C = Pw(N, be(v.stored));
    }
    const O = ae(), _ = O ? Yu(o, C, O) : structuredClone(C), P = JSON.stringify(_) !== JSON.stringify(N);
    if (P) {
      for (const be of Object.keys(N)) delete N[be];
      Object.assign(N, _);
    }
    return v = { stored: C, shown: structuredClone(_), handoff: O, fps: fe }, P;
  }
  function _e() {
    return v.handoff ? { ...o, stickers: o.stickers.map((I) => {
      var V;
      return ((V = I.source) == null ? void 0 : V.kind) === "port" ? v.stored : I;
    }) } : o;
  }
  function pe(I) {
    var fe;
    if (!Se() || ((fe = I == null ? void 0 : I.source) == null ? void 0 : fe.kind) !== "port") return null;
    const { handoff: V } = v, N = !!V && V.placement === I.placement;
    return Ki[I.placement].map((C) => ({ name: C, overridden: N && I.handoff_overrides.includes(C) }));
  }
  function de(I) {
    q();
    const V = o.stickers.find((N) => {
      var fe;
      return ((fe = N.source) == null ? void 0 : fe.kind) === "port";
    });
    !V || V.locked || !v.handoff || !Nw(o, V, v.handoff, I) || (v.shown = structuredClone(V), v.stored[I] = structuredClone(V[I]), f(), a(), u(), g(), m());
  }
  function te() {
    var P;
    const I = Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs.findIndex((ce) => String((ce == null ? void 0 : ce.name) || "") === "sticker_image") : -1, V = I >= 0 ? ((P = r.getInputLink(I)) == null ? void 0 : P.id) ?? null : null, N = l(() => {
      Or(r, "image-loaded");
    }), fe = y(c("pano_sticker_input_pose"), null), C = R("sticker_state"), O = t.externalStateHash(r, C), _ = V == null ? null : Z(fe, C, N);
    return Eg(o, {
      connected: V != null,
      linkId: V,
      stateHash: O,
      pose: _,
      imageWidth: Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || 0),
      imageHeight: Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 0)
    });
  }
  function ge(I = "sync") {
    if (s !== "stickers" || i) return;
    const V = r.__panoSceneStateV2 ? Y() : te();
    if (V.changed) {
      const N = o.stickers.find(d);
      o.stickers = V.state.stickers, o.active = V.state.active, N && n.selectedId === N.id && !o.stickers.some((fe) => fe.id === N.id) && (n.selectedId = null, n.selectedIds = []), a(), g(), S();
    } else q({ restored: I === "open" }) ? (u(), g()) : I === "image-loaded" && g();
    m();
  }
  function oe() {
    const I = Array.isArray(o.stickers) ? o.stickers : [], V = [];
    for (const N of I)
      d(N) && (N.visible = !1, V.push(N));
    return V;
  }
  return {
    connect(I) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: m,
        updateSelectionMenu: S,
        updateSidePanel: g
      } = I);
    },
    computeStickerVFov: j,
    buildCanonicalCutoutStickerState: F,
    buildCanonicalSelectedStickerState: M,
    reconcileExternalStickerFromInputs: ge,
    collectExternalStickersForClearAll: oe,
    syncPortHandoff: q,
    storedEditorState: _e,
    portHandoffLanes: pe,
    revertPortHandoffLane: de
  };
}
function Ni(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function BA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function YA({
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
  var K, F;
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
    historyEntries: Array.from({ length: 8 }, (M, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((K = t.find((M) => i(e.paintColor, M.color))) == null ? void 0 : K.id) || "", f = !u, m = o(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((F = e.customPaintColor) == null ? void 0 : F.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), v = e.brushSizes[g] ?? 10, y = l(), j = Array.from({ length: 8 }, (M, R) => e.customPaintHistory[R] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...s(m.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, m.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, m.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, m.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, m.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, m.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, m.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: j.map((M, R) => ({
      index: R,
      color: M ? { cssColor: r(M, 1) } : null
    })),
    sizeValue: v,
    sizeText: String(v),
    sizeFill: `${Math.max(0, Math.min(100, (v - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function qA({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const XA = {
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
function JA(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = XA[n.key] || [], s = t[t.length - 1];
    r && (s != null && s.grouped) && s.label === r ? s.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function nc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function ZA({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
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
        icon: o ? je.eye : je.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function j0({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function QA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function eC(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const Wi = "erp", tC = ["1:1", "4:3", "3:2", "16:9"];
function H0(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...tC.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: Wi, label: Number(n) === 180 ? "180°" : "360°", active: e === Wi }] : []
  ];
}
const nC = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, rC = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, iC = { ...nC, opacity: "Opacity" };
function hd(e) {
  return `Upstream · ${e}`;
}
function oC({ layer: e, editable: t, locked: n, readOnly: r, placement: i, override: o = null, handoff: s = null }) {
  const a = e !== null && !t, l = e !== null && !r && t && !n && !!o, c = (d) => !r && !n && !!(s != null && s.some((u) => u.name === d && u.overridden));
  return {
    origin: e === null ? "" : `${hd(e)}${a ? " · inherited only" : ""}`,
    note: a ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !l },
    lanes: rC[i].map((d) => ({
      name: d,
      label: iC[d],
      action: e === null && s ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !c(d) : !l || o.placement !== i || !Object.hasOwn(o, d)
    }))
  };
}
function sC({
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
    rows: JA(s),
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
function aC({
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
  iconSet: m,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: S = !1,
  coverage: g = 360,
  // Upstream elements in the selection (ADR 0030): null, or { editable }. Only Lock and Delete act on them,
  // while their layers keep overrides; the other buttons stay in place, disabled.
  upstream: v = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let y = [];
  if (n.length > 1)
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!s }
    ];
  else if (r === "stroke")
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    ];
  else if (r === "image") {
    if (y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!a }
    ], d(t) || (y.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: m.duplicate }), y.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: m.replace_image })), d(t)) {
      const j = f(), K = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: j ? "Back to initial position" : "Already at initial position",
        icon: m.back_initial,
        disabled: !j
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: K ? "Show" : "Hide",
        tip: K ? "Show input image" : "Hide input image",
        icon: K ? m.eye : m.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed }), (!d(t) || v) && y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: m.aspect,
        open: !!c,
        choices: H0(l, { erp: S, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: m.rotate_90, disabled: l === Wi }
    ], S ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    );
  return v && (y = y.map((j) => ({
    ...j,
    disabled: j.key === "toggle-lock" ? !v.editable : j.key === "delete" ? !v.editable || !!j.disabled : !0
  }))), K0(i.corners, y);
}
const Cp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function lC({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = r ? Cp.filter((s) => s.cameraTip) : Cp;
  return K0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: r ? c : l, pressed: s === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...r ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: je.delete }] : []
  ]);
}
function cC(e, t, n, r, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), f = Math.max(14, i - n - 14), m = d + 18, S = c - 18 - n;
  let g;
  return m <= f ? g = Math.max(m, 14) : S >= 14 ? g = Math.min(S, f) : g = Math.min(Math.max(m, 14), f), { left: u, top: g };
}
function K0(e, t) {
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
const G0 = "painting", Eo = "background";
function uC(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const dC = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function fC(e, { span: t, portBarEnd: n = () => null, selection: r, selectedId: i, expanded: o, openRows: s, audio: a = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: d = !1, scene: u = !1, upstream: f = [], background: m = null, loading3d: S = /* @__PURE__ */ new Set() }) {
  const g = (j, K, F, M, R, Z, { keyable: Y = !0, hideable: ae = !0, origin: Se = null } = {}) => {
    const ye = (q) => (r == null ? void 0 : r.owner) === j && r.lane === q ? r.frames.map((_e) => _e + Z) : [];
    return {
      id: j,
      label: F,
      icon: M,
      clip: R,
      selected: j === i,
      hideable: ae,
      // The background has no eye and always shows.
      visible: K.visible !== !1,
      ...Ip(Se),
      keyable: Y,
      open: Y && s.has(j),
      keys: gS(K).map((q) => ({ frame: q.frame + Z, full: q.full })),
      selectedFrames: ye(null),
      lanes: (Y ? qi(K) : []).map((q) => ({
        key: `${j}:${q}`,
        lane: q,
        label: dC[q],
        frames: K[q].keyframes.map((_e) => _e.frame + Z),
        selectedFrames: ye(q)
      }))
    };
  }, v = ({ start: j, in: K, duration: F }, M = null) => ({ clip: { start: j, end: F === null ? M : j + F }, offset: j - K }), y = (j, { idOf: K = (R) => R, sceneRow: F, origin: M = null }) => {
    const R = j.stickers.filter((Y) => Y.placement === "sky").sort((Y, ae) => ae.z_index - Y.z_index), Z = j.stickers.filter((Y) => Y.placement === "world");
    return [
      ...[...R, ...Z].map((Y) => {
        const { clip: ae, offset: Se } = v(Y.clip, n(Y)), ye = Lh(M ? { ...Y, id: Y.origin.id } : Y), q = Y.placement === "world" && (Y.source.kind === "port" || ii(Y.source) || S.has(Y.id));
        return g(Y.id, Y, ye, q ? je.box : je.image, ae, Se, { origin: M && { ...M, overridden: M.stickerOverridden(Y) } });
      }),
      ...uC(j.painting) || !j.painting_visible ? [{
        id: K(G0),
        label: "Paint",
        icon: je.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: j.painting_visible,
        ...Ip(M && { ...M, overridden: M.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...F || fa(j.scene) ? [(() => {
        const { clip: Y, offset: ae } = v(j.scene.clip);
        return g(K("scene"), j.scene, "Scene", je.box, Y, ae, {
          keyable: !1,
          origin: M && { ...M, overridden: M.sceneOverridden }
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
      ...m ? [(() => {
        const { clip: j, offset: K } = v(e.background.clip, m.end);
        return g(Eo, e.background, "Background", je.unwrap, j, K, { keyable: !1, hideable: !1 });
      })()] : [],
      ...c ? [g("camera", e.camera, "Camera", je.camera, null, 0, { hideable: d })] : [],
      ...y(e, { sceneRow: u })
    ],
    groups: f.map(({ key: j, sceneState: K, editable: F, record: M, scene: R, deleted: Z }) => ({
      key: j,
      label: `${hd(j)}${F ? "" : " · inherited only"}`,
      revert: { disabled: !F || !Wg(M) },
      restore: { label: `Restore deleted (${Z})`, disabled: !F || Z === 0 },
      rows: y(K, {
        idOf: (Y) => Fc(j, Y),
        sceneRow: R || !K.scene.visible,
        origin: {
          editable: F,
          stickerOverridden: (Y) => !!(M != null && M.stickers.some((ae) => ae.id === Y.origin.id && ae.placement === Y.placement)),
          paintingOverridden: !!M && Object.hasOwn(M, "painting_visible"),
          sceneOverridden: !!M && Object.keys(M.scene).length > 0
        }
      })
    }))
  };
}
function Ip(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function pC(e, t, n, r) {
  const i = SS(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, s = Math.max(...n) + r;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const mC = 4, hC = 0.25, W0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function U0(e) {
  return Object.hasOwn(W0, e);
}
function B0(e, t, n) {
  const { forward: r, right: i } = hi(e.yaw_deg, 0), o = [0, 1, 2].map((a) => r[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(n > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * n / s) };
}
function gC() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = !1, r = 0;
  function i() {
    e.clear(), t = !1, n = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return U0(o) ? (e.size || (r = s), e.add(o), !0) : !1;
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
        const [a, l] = W0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? mC : 1) * (n ? hC : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - r) / 1e3;
      return r = Math.max(r, o), s;
    }
  };
}
const yC = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), bC = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function vC(e) {
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
function Ep(e, t, n) {
  return Number.isFinite(e) && e >= t && e <= n;
}
function SC(e, { frame: t }) {
  if (!e) return null;
  const { mode: n, spaceMode: r, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return yC.has(n) && (n !== "frame" || t) && bC.has(r) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Ep(s, -89.9, 89.9) && Ep(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const _C = 250, wC = 600, kC = 180, xC = 2;
function MC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function ho(e, t, n) {
  return e + (t - e) * n;
}
function PC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(hu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(n, 1e-6), o = Math.min(1, r / kC + i / xC);
  return Math.round(ho(_C, wC, o));
}
function NC(e, t, n) {
  const r = MC(Oe(n, 0, 1));
  return {
    position: e.position.map((i, o) => ho(i, t.position[o], r)),
    yaw_deg: It(e.yaw_deg + hu(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: ho(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: ho(e.hFOV_deg, t.hFOV_deg, r),
    distance: ho(e.distance, t.distance, r)
  };
}
function AC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(hu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function CC(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return AC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: PC(e, t, r), end: i };
}
function IC(e, t) {
  const n = Oe((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: NC(e.from, e.to, n), done: !1 };
}
function Fa(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function EC(e, t, n) {
  const r = Fa(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function OC(e) {
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
    viewController: m
  } = e;
  let S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q = null;
  function _e(A, J = null) {
    const H = _();
    Y(() => {
      i.viewTransition = CC(H, A, performance.now(), { scale: k(), end: J });
    }), !i.viewTransition && J && pe(J), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0, Se(), R({ localOnly: !0, reason: ot.VIEW });
  }
  function pe(A) {
    C(xc({ ...fe(), moved: A.moved }, A.mode, P())), a.backgroundDirty = !0;
  }
  function de() {
    i.viewTransition && (i.viewTransition = null, Se());
  }
  function te(A, J) {
    _e({ ..._(), yaw_deg: A, pitch_deg: J });
  }
  function ge() {
    return !f || be() && !j();
  }
  function oe() {
    return i.mode === "pano" && I();
  }
  function I() {
    return u && F_({ sceneLinked: l && !!Di(s).scene, files: Z(), stickers: d.stickers });
  }
  function V() {
    return i.spaceMode === "6dof" && oe();
  }
  function N() {
    var A, J, H;
    return nx((H = (J = (A = t.ui) == null ? void 0 : A.settings) == null ? void 0 : J.getSettingValue) == null ? void 0 : H.call(J, a0));
  }
  function fe() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function C(A) {
    i.spaceMode = A.mode, i.viewPosition = A.position, i.viewMoved = A.moved;
  }
  function O(A) {
    var H;
    const J = EC(i.spaceMode, i.viewTransition, A);
    if (J !== "keep") {
      if (J === "return") {
        _e({ ..._(), position: P(), distance: ((H = p()) == null ? void 0 : H.radius) || Wn }, { mode: A, moved: !1 });
        return;
      }
      de(), C(xc({ ...fe(), position: _().position }, A, P())), a.backgroundDirty = !0, Se(), R({ localOnly: !0, reason: ot.VIEW });
    }
  }
  function _() {
    var H;
    const A = i.viewMoved ? i.viewDistance : ((H = p()) == null ? void 0 : H.radius) || Wn, J = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: A };
    return N_(i.spaceMode, J, P());
  }
  function P() {
    return be() ? W().position : [0, 0, 0];
  }
  function ce() {
    return n && d.camera !== null;
  }
  function be() {
    return ce() && d.camera.visible;
  }
  function D() {
    return d.painting_visible !== !1;
  }
  function b(A) {
    return A.visible && mi(A.clip, i.frame);
  }
  function W() {
    return Ya(d.camera, i.frame);
  }
  function p() {
    var J;
    const A = S();
    return ((J = A.space ?? A.content) == null ? void 0 : J.sphere) ?? null;
  }
  function h(A) {
    i.viewPosition = A.position, i.viewYaw = A.yaw_deg, i.viewPitch = A.pitch_deg, i.viewDistance = A.distance, i.viewMoved = !0, a.backgroundDirty = !0, R({ localOnly: !0, reason: ot.VIEW });
  }
  function k() {
    var A;
    return ((A = p()) == null ? void 0 : A.radius) || Wn;
  }
  function E() {
    var se;
    const A = S().space, J = g(), H = i.worldSelectedId || i.selectedId, z = J.stickers.findIndex((ve) => ve.id === H), T = z < 0 ? ae(H) : null, B = z < 0 ? (se = A.upstreamItems.find((ve) => {
      var he;
      return ((he = ve.request) == null ? void 0 : he.id) === H;
    })) == null ? void 0 : se.request : [A.sticker, ...A.fileStickers ?? []].find((ve) => (ve == null ? void 0 : ve.id) === H), G = z < 0 && !Ct(T) ? null : {
      sticker: T ?? J.stickers[z],
      value: T ? ar(T, i.frame) : is(J, i.frame).stickers[z],
      plane: [...A.stickers, ...A.upstreamStickers].find((ve) => ve.id === H) ?? null,
      item: (B == null ? void 0 : B.id) === H && B.url ? { kind: B.kind, box: o.sceneBox(B.url) } : null
    }, w = y() ? Ce() : R_(p(), G);
    if (!w) return;
    const ne = _();
    i.viewDistance = ne.distance, i.viewMoved = !0, _e(O_(ne, w, r.width, r.height));
  }
  function $(A) {
    return o.pickSurface(ue(), A.x, A.y, r.width, r.height);
  }
  function X(A, J) {
    var H;
    return Mc(A, J, i.viewMoved ? null : (H = p()) == null ? void 0 : H.center, k());
  }
  function le() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function L(A, J) {
    const H = performance.now(), z = { x: A.x, y: A.y, time: H, key: o.contentRevision(), view: le() };
    if (!Gh(q, z)) {
      const B = $(A);
      q = { ...z, cost: performance.now() - H, hit: B };
    }
    const T = _();
    h(Bh(T, X(T, q.hit), J, k())), q.view = le(), q.wheelTime = H;
  }
  function re(A, J, H) {
    const z = _();
    i.interaction = A === "orbit" ? { kind: "space_orbit", last: J, pivot: X(z, $(J)) } : { kind: "space_pan", last: J, depth: Kh(z, k()) }, ye(J), r.setPointerCapture(H);
  }
  function x() {
    return V() || K();
  }
  function U(A) {
    const J = M.elapsed(A);
    if (!J || i.viewTransition) return !1;
    const H = M.speed(k()) * J;
    if (K()) return F(M.direction(), H);
    if (!V()) return !1;
    const z = _(), T = B0(z, M.direction(), H);
    return T === z ? !1 : (i.viewPosition = T.position, i.viewDistance = z.distance, i.viewMoved = !0, !0);
  }
  function ie() {
    Uo(s).view = vC(i);
  }
  function we() {
    const A = c && !j0({ hasShot: !!v(), erp: j() }).disabled, J = SC(Uo(s).view, { frame: A });
    J && Object.assign(i, J);
  }
  function Me(A) {
    return A * 0.2;
  }
  function Ce() {
    return { center: W().position, radius: Me(k()) };
  }
  function me(A, J) {
    const { yaw_deg: H, pitch_deg: z } = eg(A.position, J);
    return { ...A, yaw_deg: H, pitch_deg: z };
  }
  function ue() {
    return Hu(_(), r.width, r.height, p());
  }
  return {
    connect(A) {
      ({
        editorViewInput: S,
        editorViewSceneState: g,
        getActiveCutoutShot: v,
        isCameraSelected: y,
        isErpCamera: j,
        isFreeFrameView: K,
        moveFrameByKeys: F,
        moveKeys: M,
        requestDraw: R,
        sceneFiles: Z,
        startAnimation: Y,
        stickerById: ae,
        syncFloatingViewButtonState: Se,
        updateCursor: ye
      } = A);
    },
    transitionView: _e,
    applyViewTransitionEnd: pe,
    cancelViewTransition: de,
    turnViewTo: te,
    cameraPreviewShown: ge,
    isSpaceView: oe,
    hasSpaceContent: I,
    isFreeSpaceView: V,
    viewControls: N,
    spaceModeState: fe,
    applySpaceMode: C,
    setSpaceMode: O,
    spaceViewState: _,
    spaceOrigin: P,
    hasCamera: ce,
    cameraShoots: be,
    paintingShown: D,
    sceneStickerShown: b,
    cutoutCamera: W,
    contentSphere: p,
    setSpaceView: h,
    spaceScale: k,
    frameSpaceContent: E,
    zoomSpaceAt: L,
    startSpaceDrag: re,
    canKeyMove: x,
    stepKeyMove: U,
    saveView: ie,
    restoreView: we,
    currentSpaceCamera: ue,
    cameraFrustumLength: Me,
    cameraSphere: Ce,
    lookingAt: me
  };
}
function FC(e) {
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
  let u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D, b, W, p, h = { revision: -1, sceneState: null }, k = null;
  function E() {
    return k || (k = le()), k;
  }
  function $() {
    k = null;
  }
  function X() {
    return h.sceneState;
  }
  function le() {
    const z = ae(), T = g(), B = { ...a.assets };
    for (const Q of l ? [] : a.stickers) {
      const Pe = String((Q == null ? void 0 : Q.asset_id) || "");
      Pe && !B[Pe] && i.has(Pe) && (B[Pe] = { type: "comfy_image", filename: Pe });
    }
    const G = l ? a.stickers.map((Q) => ge(Q) ? { ...Q, source: { kind: "file", filename: ce(Q) } } : Q) : a.stickers;
    h.revision !== s.stateRevision && (h = { revision: s.stateRevision, sceneState: cn({ ...a, stickers: G, assets: B, painting: null }) }), l && L(h.sceneState);
    const w = is(h.sceneState, n.frame), ne = I ? Z() : null, se = (Q) => {
      if (l && !Q.visible) return null;
      if (I && pe(Q)) return ne;
      const Pe = ye(Q);
      return Pe ? { media: Pe, revision: Se(Pe) } : null;
    }, ve = W(), he = [...ve.sky, ...lg(h.sceneState, n.frame, a.stickers, { media: se, paintLayers: T, evaluated: w })], xe = z && (z === d || z === c) ? d.dataset.panoSrc : z;
    let Fe = _e(z) ? { media: z, revision: Se(z), coverage: m(), source: xe } : null;
    S(n.frame) || (Fe = wh(f()));
    const Le = q(), ze = A_(C(), Le, O());
    ze.mode !== n.spaceMode && j(), u(ze);
    const We = Le ? re(h.sceneState, w, se, ve) : null, Ge = te() ? { ...We, ...U(We) } : null;
    return { background: Fe, layers: he, space: Ge, content: We };
  }
  function L(z) {
    const T = new Map(a.stickers.map((B) => [B.id, B.clip]));
    z.scene.clip = { ...a.scene.clip };
    for (const B of z.stickers) {
      const G = T.get(B.id);
      G && (B.clip = { ...G });
    }
  }
  function re(z, T, B, G) {
    const w = N(), ne = Ku(w, T.scene), se = ne != null && ne.url ? r.sceneBox(ne.url) : null, ve = se && lo(ne.kind, se), he = P(), xe = Xh(he, z, T), Fe = xe != null && xe.url ? r.sceneBox(xe.url) : null, Le = Fe ? [{ box: lo(xe.kind, Fe), value: xe.value }] : [], ze = Qh(z, T, R);
    for (const { request: Q } of ze) {
      const Pe = Q ? r.sceneBox(Q.url) : null;
      Pe && Le.push({ box: lo(Q.kind, Pe), value: Q.value });
    }
    x(z, ze, G.items);
    const We = ug(z, n.frame, a.stickers, { media: B, evaluated: T });
    for (const { request: Q, value: Pe } of G.items) {
      const ee = Q != null && Q.url ? r.sceneBox(Q.url) : null;
      ee && Le.push({ box: lo(Q.kind, ee), value: Pe });
    }
    const Ge = Ac(D_(T, ve, [...We, ...G.stickers], Le));
    return {
      evaluated: T,
      sceneUrls: w ? w.urls.filter(Boolean) : [],
      scene: ne,
      stickerUrls: Jh(he, z),
      sticker: xe,
      fileStickers: ze.map((Q) => Q.request).filter(Boolean),
      fileStickerKeys: ze.map((Q) => Q.key),
      stickers: We,
      upstreamStickers: G.stickers,
      upstreamItems: G.items,
      sphere: Ge
    };
  }
  function x(z, T, B) {
    const G = (w) => /\b404\b/.test(r.sceneItemError(w) ?? "");
    for (const { id: w, key: ne } of T) {
      const se = G(ne) ? z.stickers.find((ve) => ve.id === w) : null;
      se && V(se.source);
    }
    for (const w of B)
      w.source && G(w.urls[0]) && V(w.source);
  }
  function U(z) {
    var B;
    const T = ((B = z.sphere) == null ? void 0 : B.radius) || Wn;
    return {
      gizmo: we() ? me() : ie(z.evaluated),
      grid: n.showGrid && !n.fullscreen ? Y_(T) : null,
      lines: y() ? Ce(T) : []
    };
  }
  function ie(z) {
    const T = fe(), B = Ct(T) ? ar(T, n.frame) : z.stickers.find((G) => G.id === (T == null ? void 0 : T.id));
    return !p(T) || !(B != null && B.active) ? null : { mode: n.gizmoMode, transform: ya(B) };
  }
  function we() {
    return y() && n.selectedId === Fu;
  }
  let Me = { revision: -1, span: -1, segments: [] };
  function Ce(z) {
    const T = D();
    (Me.revision !== s.stateRevision || Me.span !== T) && (Me = { revision: s.stateRevision, span: T, segments: X_(J_(a, T)) });
    const { segments: B } = Me, G = B.length ? [{ segments: B, color: rA }] : [];
    if (!de()) return G;
    const w = we() ? T0 : nA;
    return [...G, { segments: ng(F(), v(z)), color: w }];
  }
  function me() {
    return !de() || !we() || o ? null : { mode: n.gizmoMode === "rotate" ? "rotate" : "translate", transform: ya({ ...F(), scale: 1 }) };
  }
  function ue() {
    const { background: z, layers: T, space: B } = E(), G = t.width, w = t.height, ne = M({ x: 0, y: 0, w: G, h: w });
    let se = !1;
    return !z && !T.length && !B ? (r.clear(460551), se = r.ready) : (r.clear(), se = !!r.render({
      rect: ne,
      camera: B ? Hu(_(), G, w, B.sphere) : K(),
      background: z,
      layers: T,
      space: B
    })), be(), (n.worldSelectedId || we() || oe()) && b(), se;
  }
  function A(z) {
    const { content: T } = E();
    return !T || !z.position ? No(z) : Yh(No(z), z.position, Y(), T.sphere);
  }
  function J(z, T, B, G = null) {
    const { background: w, layers: ne, content: se } = E();
    if (!w && !ne.length && !se) return null;
    const ve = se && T.position ? se : null;
    return r.render({ rect: z, camera: A(T), background: w, layers: ne, space: ve, owner: B, clearColor: G });
  }
  function H(z) {
    return r.clear(460551), !!r.renderUnwrap({ rect: M(z), ...E() });
  }
  return {
    connect(z) {
      ({
        applySpaceMode: u,
        backgroundColor: f,
        backgroundCoverage: m,
        backgroundShowsAt: S,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: v,
        cameraShoots: y,
        cancelViewTransition: j,
        currentViewCamera: K,
        cutoutCamera: F,
        deviceRect: M,
        file3dEditorFile: R,
        followPortSticker: Z,
        frameViewDistance: Y,
        getConnectedErpImage: ae,
        getMediaRevisionToken: Se,
        getStickerImage: ye,
        hasSpaceContent: q,
        isDecodedImageReady: _e,
        isExternalSticker: pe,
        isFreeSpaceView: de,
        isSpaceView: te,
        isUploadingSticker: ge,
        isWorldMenuShown: oe,
        portVideo: I,
        refreshFile3d: V,
        sceneFiles: N,
        selectedWorldSticker: fe,
        spaceModeState: C,
        spaceOrigin: O,
        spaceViewState: _,
        stickerFiles: P,
        stickerImageKey: ce,
        syncFloatingViewButtonState: be,
        timelineSpanFrames: D,
        updateSelectionMenu: b,
        upstreamViewInput: W,
        worldStickerEditable: p
      } = z);
    },
    editorViewInput: E,
    endEditorViewFrame: $,
    editorViewSceneState: X,
    isCameraSelected: we,
    renderEditorView: ue,
    shotViewCamera: A,
    drawEditorViewShot: J,
    renderEditorViewUnwrap: H
  };
}
function TC(e) {
  const {
    comfyMedia: t,
    editor: n,
    mediaAssetSource: r,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f, m = { list: null, entries: [], fps: null }, S = /* @__PURE__ */ new Map();
  const g = /* @__PURE__ */ new Map(), v = () => f({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA });
  function y(D) {
    if (!D) return null;
    let b = g.get(D);
    return b || (b = new Image(), b.onload = v, b.onerror = v, b.src = D, g.set(D, b)), b;
  }
  function j({ sceneState: D, ui: b }) {
    return [
      ...D.stickers.filter((W) => W.source.kind !== "port").map((W) => r(ma(W.source))),
      i(mn(b, ai)[0] || null),
      ...D.painting.raster_objects.map((W) => W.rasterDataUrl)
    ].filter(Boolean);
  }
  function K() {
    return a && (jf(o, "scene") === Rg || !!F());
  }
  function F() {
    const D = a && bt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, b = Array.isArray(D) ? D : null;
    if (m.list !== b) {
      m.entries.forEach(ce), m = { list: b, entries: b ? Vg(b).map((p) => ({ layer: p })) : [], fps: null };
      const W = new Set(m.entries.flatMap((p) => j(p.layer)));
      for (const p of [...g.keys()]) W.has(p) || g.delete(p);
    }
    return b && m.fps !== s.timeline.fps && M(), b && m.entries;
  }
  function M() {
    if (!m.list) return;
    const D = zg(m.entries.map((b) => b.layer), s.upstream, s.timeline.fps);
    m.entries.forEach((b, W) => {
      b.working = D[W];
    }), m.fps = s.timeline.fps, S = Yf(D);
  }
  function R() {
    if (!m.list) return;
    const D = m.entries.map((W) => W.working), b = Hw(s.upstream, m.entries.map((W) => W.layer), D, S, m.fps);
    b !== s.upstream && (s.upstream = b, S = Yf(D));
  }
  function Z() {
    const D = F();
    D && (s.upstream = Xw(s.upstream, D.map((b) => b.layer)));
  }
  function Y(D) {
    R();
    const b = D(s.upstream);
    return b === s.upstream ? !1 : (s.upstream = b, M(), !0);
  }
  function ae(D) {
    const b = D.map((W) => W.origin);
    return Y((W) => Gw(W, b, s.timeline.fps));
  }
  function Se(D, b = null) {
    return Y((W) => Uw(W, D, b));
  }
  function ye(D) {
    return Y((b) => qw(b, D));
  }
  function q(D) {
    return Y((b) => Yw(b, D));
  }
  function _e() {
    return (F() ?? []).flatMap((D) => D.working.sceneState.stickers);
  }
  function pe(D) {
    const b = m.entries.find((W) => {
      var p;
      return ((p = W.working) == null ? void 0 : p.key) === D.origin.layer;
    });
    return b ? y(i(mn(b.layer.ui, ai)[0] || null)) : null;
  }
  function de(D = null) {
    const b = F();
    if (!b) return null;
    const [W] = t.uiValue(o, "pano_upstream_frames") || t.uiValue(o, "pano_timeline_frames") || [], p = b.map((k) => k.working), h = (k) => jo((E) => mn(b[k].layer.ui, E));
    return {
      frames: Number(W) > 0 ? Number(W) : 0,
      ends: Kg(p, s.upstream, S, h, s.timeline.fps, D)
    };
  }
  function te(D) {
    const b = m.entries.find((W) => {
      var p;
      return ((p = W.working) == null ? void 0 : p.key) === D.origin.layer;
    });
    return b ? jo((W) => mn(b.layer.ui, W)) : null;
  }
  function ge() {
    return (F() ?? []).map(({ layer: D, working: b }) => {
      const W = Bo(b.key);
      return {
        key: b.key,
        sceneState: b.sceneState,
        editable: W,
        record: W ? s.upstream.find((p) => p.layer === b.key) ?? null : null,
        scene: mn(D.ui, "pano_scene_files").length > 0,
        deleted: W ? Bw(s.upstream, b) : 0
      };
    });
  }
  function oe(D) {
    for (const { working: b } of F() ?? []) {
      const { key: W, sceneState: p } = b, h = Bo(W);
      if (D === Fc(W, "scene")) return { editable: h, part: "scene", owner: p.scene, sceneState: p };
      if (D === Fc(W, "painting")) return { editable: h, part: "painting", owner: null, sceneState: p };
      const k = p.stickers.find((E) => E.id === D);
      if (k) return { editable: h, part: "sticker", owner: k, sceneState: p };
    }
    return null;
  }
  function I() {
    if (!a) return "";
    const D = F();
    if (zw(jf(o, "scene"), D)) return "Run the workflow to show the upstream scene.";
    if (!D) return "";
    const b = t.uiList(o, "pano_sticker_warnings");
    return String(b.find((W) => String(W).startsWith($w)) ?? "");
  }
  function V(D, b, W) {
    const { ui: p } = D.layer, h = s.timeline.fps, k = mn(p, F0)[0], E = mn(p, O0).map(i).filter(Boolean), $ = i(mn(p, E0)[0] || null), X = k && typeof k == "object" ? E.length ? { frames: E, meta: k } : $ ? { src: $, meta: k } : null : null, le = y(i(mn(p, ai)[0] || null)), L = X ? Nu(b.clip, W, h, X.meta) : null;
    let re = le;
    if (X != null && X.frames)
      D.frames || (D.frames = Iu({
        createImage: (x, U) => {
          const ie = new Image();
          return ie.onload = U, ie.onerror = U, ie.src = x, ie;
        },
        onLoad: v
      })), re = D.frames.picture(X.frames, L, X.meta, le);
    else if (X != null && X.src) {
      const x = N(D);
      x.follow({ src: X.src, time: L, playing: u.advancing, fps: h }), re = x.picture(D.still, le);
    }
    return re ? { media: re, revision: d(re), source: Cu(X, le) } : null;
  }
  function N(D) {
    if (D.follower) return D.follower;
    const b = ns(document, "editor.upstream-port-video");
    b.playsInline = !0, b.preload = "auto";
    const W = Kt({ label: "editor.upstream-port-still" });
    return W.__panoFrameIdx = 0, D.video = b, D.still = W, D.follower = Zu({
      video: b,
      onCapture: () => {
        var k;
        const p = Number(b.videoWidth || 0), h = Number(b.videoHeight || 0);
        p < 1 || h < 1 || (W.width = p, W.height = h, (k = W.getContext("2d")) == null || k.drawImage(b, 0, 0), W.__panoFrameIdx += 1, v());
      },
      onChange: v
    }), D.follower;
  }
  function fe(D, b, W) {
    if (b.source.kind === "port") return V(D, b, W);
    const p = y(r(ma(b.source)));
    return p ? { media: p, revision: d(p) } : null;
  }
  function C(D) {
    var $;
    const { sceneState: b } = D.working, { painting: W } = b, p = W.paint.strokes.length + W.mask.strokes.length;
    if (!b.painting_visible || !p && !W.raster_objects.length) return [];
    const h = c(), k = `${h.width}x${h.height}`;
    D.paintSize !== k && (_(D), D.paintSize = k, D.paintEngine = p ? Qa(h) : null, ($ = D.paintEngine) == null || $.rebuildCommitted({ painting: W }), D.rasters = /* @__PURE__ */ new Map());
    const E = D.paintEngine;
    return Vu(b, {
      // A painting with groups but no strokes has no engine, and its groups show nothing.
      group: (X) => {
        const le = E == null ? void 0 : E.getGroupDisplayCanvas(X);
        return le && { media: le, revision: k };
      },
      raster: (X) => {
        const le = O(D, X, h);
        return le && { media: le, revision: k };
      },
      mask: () => jh(E)
    });
  }
  function O(D, b, { width: W, height: p }) {
    if (D.rasters.has(b.id)) return D.rasters.get(b.id);
    const h = y(b.rasterDataUrl);
    if (!h.complete || !h.naturalWidth) return null;
    const k = Kt({ label: "editor.upstream-raster-erp", width: W, height: p }), E = k.getContext("2d");
    return E ? (D0(E, h, b, W, p), D.rasters.set(b.id, k), k) : null;
  }
  function _(D) {
    var b;
    (b = D.rasters) == null || b.forEach((W) => Qr(W)), D.rasters = null, D.paintEngine = null, D.paintSize = null;
  }
  function P() {
    const D = F() ?? [], b = { sky: [], stickers: [], items: [] }, W = n.frame;
    return D.forEach((p) => {
      const h = Jw(p.working, p.working.key, W, {
        media: (k) => fe(p, k, W),
        paintLayers: C(p),
        source: i,
        editorFile: l
      });
      b.sky.push(...h.sky), b.stickers.push(...h.stickers), b.items.push(...h.items);
    }), b;
  }
  function ce(D) {
    var b;
    (b = D.follower) == null || b.dispose(), D.still && Qr(D.still), _(D);
  }
  function be() {
    m.entries.forEach(ce), m = { list: null, entries: [], fps: null }, S = /* @__PURE__ */ new Map(), g.clear();
  }
  return {
    connect(D) {
      ({ file3dEditorFile: l, getDesiredPaintTargetDescriptor: c, getMediaRevisionToken: d, playback: u, requestDraw: f } = D);
    },
    upstreamEntries: F,
    upstreamLinked: K,
    upstreamNotice: I,
    upstreamOutput: de,
    upstreamPortMeta: te,
    upstreamViewInput: P,
    rebuildUpstreamWorking: M,
    syncUpstreamEdits: R,
    pruneUpstreamRecords: Z,
    deleteUpstreamStickers: ae,
    revertUpstreamSticker: Se,
    revertUpstreamLayer: ye,
    restoreUpstreamDeleted: q,
    upstreamStickers: _e,
    upstreamStickerImage: pe,
    upstreamTimelineLayers: ge,
    upstreamRow: oe,
    disposeUpstream: be
  };
}
const Xc = "camera_preview";
function DC(e) {
  return e === Xc ? ot.SPLAT_PREVIEW : ot.SPLAT_STAGE;
}
function LC(e) {
  return [...e].some((t) => t !== ot.VIEW && t !== ot.OVERLAY && t !== ot.SPLAT_STAGE);
}
function Y0(e, t = !1) {
  const n = Oe(pi(e), 0.05, 20), r = t ? 320 : 220;
  return n >= 1 ? { width: r, height: Math.max(1, Math.round(r / n)) } : { width: Math.max(1, Math.round(r * n)), height: r };
}
function RC(e) {
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
  let d, u, f, m, S = null, g = !1, v = !1;
  function y() {
    g && (g = !1, o.releaseSplats(Xc));
  }
  function j() {
    S = null, v = !1, y();
  }
  function K(ae) {
    if (!r || !ae) return !1;
    const Se = r.closest(".pano-camera-preview");
    if (!Se) return !1;
    const ye = Math.round(Number(Se.clientWidth || r.clientWidth || 0)), q = Math.round(Number(Se.clientHeight || r.clientHeight || 0));
    return Math.abs(ye - Number(ae.width || 0)) <= 1 && Math.abs(q - Number(ae.height || 0)) <= 1;
  }
  function F(ae, Se) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, j();
      return;
    }
    const ye = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !ye || !n) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = ye ? "Preview unavailable" : "Add Frame to preview", j();
      return;
    }
    const q = Y0(ye, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = q.width, c.cameraPreview.height = q.height, v) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const _e = window.devicePixelRatio || 1, pe = Math.max(1, q.width * _e), de = Math.max(1, q.height * _e), te = Math.min(1, t.width / pe, t.height / de), ge = { width: Math.max(1, Math.floor(pe * te)), height: Math.max(1, Math.floor(de * te)) }, oe = !S || S.width !== ge.width || S.height !== ge.height || LC(Se);
    if (ae && oe) {
      g = !0;
      const V = u({ x: 0, y: t.height - ge.height, w: ge.width, h: ge.height }, ye, Xc);
      S = V ? ge : null, V && Y(V);
    }
    if (!S) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const I = K(q);
    c.cameraPreview.ready = !0, c.cameraPreview.label = I ? "" : "Loading preview", c.cameraPreview.settled = I && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function M() {
    S = null, v = !1;
  }
  let R = 0, Z = !1;
  function Y(ae) {
    const Se = ++R;
    createImageBitmap(ae.canvas, ae.x, ae.y, ae.width, ae.height).then((ye) => {
      var q;
      if (Se !== R || !s.running) {
        ye.close();
        return;
      }
      (q = n.getContext("bitmaprenderer")) == null || q.transferFromImageBitmap(ye);
    }).catch((ye) => {
      Se !== R || !s.running || (v = !0, S = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !Z && (Z = !0, console.error("[PanoramaStickers] camera preview frame failed", ye)));
    });
  }
  return {
    connect(ae) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: m
      } = ae);
    },
    drawCutoutOutputPreview: F,
    forgetCameraPreviewFrame: M
  };
}
function VC(e) {
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
  let u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D, b, W, p;
  function h(A) {
    const J = n.width, H = n.height, z = Y();
    if (r.globalAlpha = 1, r.lineWidth = 1, r.clearRect(0, 0, J, H), P(), A && (a.backgroundDirty = !D(z)), i.showGrid && !i.fullscreen) {
      r.strokeStyle = "#3f3f46";
      for (let B = 0; B <= 16; B += 1) {
        const G = z.x + z.w * B / 16;
        r.beginPath(), r.moveTo(G, z.y), r.lineTo(G, z.y + z.h), r.stroke();
      }
      for (let B = 0; B <= 8; B += 1) {
        const G = z.y + z.h * B / 8;
        r.beginPath(), r.moveTo(z.x, G), r.lineTo(z.x + z.w, G), r.stroke();
      }
      r.strokeStyle = "rgba(250, 250, 250, 0.86)", r.lineWidth = 1.2, r.beginPath(), r.moveTo(z.x, z.y + z.h / 2), r.lineTo(z.x + z.w, z.y + z.h / 2), r.stroke(), r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center";
      const T = z.y + z.h * 0.57;
      r.fillText("Left", z.x + z.w * 0.25, T), r.fillText("Front", z.x + z.w * 0.5, T), r.fillText("Right", z.x + z.w * 0.75, T), r.fillText("Back", z.x + 38, T), r.fillText("Back", z.x + z.w - 38, T);
    }
  }
  function k(A, J, H = 1) {
    let z = !1;
    r.strokeStyle = J, r.lineWidth = H, r.beginPath();
    for (const T of A) {
      const B = fe(T);
      if (!B) {
        z = !1;
        continue;
      }
      z ? r.lineTo(B.x, B.y) : (r.moveTo(B.x, B.y), z = !0);
    }
    r.stroke();
  }
  function E(A) {
    const J = n.width, H = n.height;
    if (r.clearRect(0, 0, J, H), P(), A && (a.backgroundDirty = !be()), i.showGrid && !i.fullscreen && g().space)
      $();
    else if (i.showGrid && !i.fullscreen) {
      for (let T = -180; T <= 180; T += 15) {
        const B = [];
        for (let G = -89; G <= 89; G += 4) B.push(gn(T, G));
        k(B, "#3f3f46", T % 90 === 0 ? 1.3 : 1);
      }
      for (let T = -75; T <= 75; T += 15) {
        const B = [];
        for (let G = -180; G <= 180; G += 4) B.push(gn(G, T));
        k(B, T === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", T === 0 ? 1.5 : 1);
      }
      const z = [
        { name: "Left", dir: gn(-90, 0) },
        { name: "Front", dir: gn(0, 0) },
        { name: "Right", dir: gn(90, 0) },
        { name: "Back", dir: gn(180, 0) }
      ];
      r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", z.forEach((T) => {
        const B = fe(T.dir);
        B && r.fillText(T.name, B.x, B.y + 24);
      });
    }
  }
  function $() {
    const A = Hu(p(), n.width, n.height, f()), J = Go(A, [0, 0, 0], n.width, n.height);
    J && (r.fillStyle = "rgba(255, 221, 87, 0.9)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", r.fillText("ERP origin", J.x, J.y - 12));
  }
  function X(A, J) {
    const H = N(A), z = gn(Number(H.yaw_deg || 0), Number(H.pitch_deg || 0)), T = i.mode === "unwrap" ? C(z) : null, B = T ? T.x : null, G = i.mode === "pano" ? 28 : 20, w = [
      b(A, 0, G, B),
      b(A, 1, G, B),
      b(A, 2, G, B),
      b(A, 3, G, B)
    ];
    rd(r, w, { selected: J });
  }
  function le(A, J = []) {
    if (!(!A || !Array.isArray(J) || J.length < 4)) {
      A.beginPath(), A.moveTo(J[0].x, J[0].y);
      for (let H = 1; H < 4; H += 1) A.lineTo(J[H].x, J[H].y);
      A.closePath();
    }
  }
  function L(A, J, H) {
    const z = Array.isArray(A == null ? void 0 : A.corners) ? A.corners : [];
    if (z.length < 4) return;
    const T = Oe(Number((A == null ? void 0 : A.visibilityAlpha) ?? 1), 0, 1);
    if (T <= 0.01) return;
    const B = r.globalAlpha;
    r.globalAlpha = B * T;
    const G = H ? "rgba(255, 116, 116, 0.96)" : J ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = H ? "rgba(255, 89, 89, 0.08)" : J ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ne = J ? 3.2 : 2.6;
    le(r, z), r.fillStyle = w, r.fill(), r.strokeStyle = G, r.lineWidth = ne, r.stroke(), r.save(), r.strokeStyle = G, r.lineWidth = J ? 3.2 : 2.6, r.lineCap = "round";
    const se = Array.isArray(A == null ? void 0 : A.edgeMidpoints) && A.edgeMidpoints.length >= 4 ? A.edgeMidpoints : [
      { edge: "top", x: (z[0].x + z[1].x) * 0.5, y: (z[0].y + z[1].y) * 0.5 },
      { edge: "right", x: (z[1].x + z[2].x) * 0.5, y: (z[1].y + z[2].y) * 0.5 },
      { edge: "bottom", x: (z[2].x + z[3].x) * 0.5, y: (z[2].y + z[3].y) * 0.5 },
      { edge: "left", x: (z[3].x + z[0].x) * 0.5, y: (z[3].y + z[0].y) * 0.5 }
    ], ve = { top: "bottom", right: "left", bottom: "top", left: "right" }, he = J ? 12 : 9;
    se.forEach((xe) => {
      const Le = se.find((Q) => (Q == null ? void 0 : Q.edge) === ve[xe == null ? void 0 : xe.edge]) || {
        x: (z[0].x + z[1].x + z[2].x + z[3].x) * 0.25,
        y: (z[0].y + z[1].y + z[2].y + z[3].y) * 0.25
      }, ze = Le.x - xe.x, We = Le.y - xe.y, Ge = Math.hypot(ze, We) || 1;
      r.beginPath(), r.moveTo(xe.x, xe.y), r.lineTo(xe.x + ze / Ge * he, xe.y + We / Ge * he), r.stroke();
    }), r.restore(), r.globalAlpha = B;
  }
  function re(A, J, H, z) {
    const T = Oe(Number((J == null ? void 0 : J.visibilityAlpha) ?? 1), 0, 1);
    if (T <= 0.01) return;
    if (ge(A)) {
      L(J, H, z);
      return;
    }
    if (oe(A)) {
      const G = r.globalAlpha;
      r.globalAlpha = G * Z(A) * T, i.mode === "frame" ? (r.strokeStyle = H ? "rgba(250, 250, 250, 0.9)" : z ? "rgba(255, 89, 89, 0.72)" : "#71717a", r.lineWidth = H ? 2 : 1, le(r, J.corners), r.stroke()) : X(A, H), r.globalAlpha = G;
      return;
    }
    const B = r.globalAlpha;
    r.globalAlpha = B * T, r.fillStyle = H ? "rgba(0, 112, 243, 0.24)" : z ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", le(r, J.corners), r.fill(), r.strokeStyle = H ? "rgba(255, 255, 255, 1)" : z ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", r.lineWidth = H ? 2.8 : 1.9, le(r, J.corners), r.stroke(), r.globalAlpha = B;
  }
  function x(A, J, H) {
    if (oe(A)) {
      o0(r, J, { accent: H });
      return;
    }
    const z = !(ge(A) && Se());
    r.fillStyle = H, z && J.corners.forEach((T) => {
      r.beginPath(), r.arc(T.x, T.y, 6.5, 0, Math.PI * 2), r.fill();
    }), z && ge(A) && (r.strokeStyle = H, r.lineCap = "round", r.lineWidth = 4, J.edgeMidpoints.forEach((T) => {
      var he, xe, Fe, Le;
      const B = (((he = T.b) == null ? void 0 : he.x) ?? T.x) - (((xe = T.a) == null ? void 0 : xe.x) ?? T.x), G = (((Fe = T.b) == null ? void 0 : Fe.y) ?? T.y) - (((Le = T.a) == null ? void 0 : Le.y) ?? T.y), w = Math.hypot(B, G) || 1, ne = B / w, se = G / w, ve = 10;
      r.beginPath(), r.moveTo(T.x - ne * ve, T.y - se * ve), r.lineTo(T.x + ne * ve, T.y + se * ve), r.stroke();
    }), r.lineCap = "butt"), I(A) || (r.strokeStyle = "rgba(250, 250, 250, 0.9)", r.lineWidth = 1.8, r.beginPath(), r.moveTo(J.rotateStemBase.x, J.rotateStemBase.y), r.lineTo(J.rotateHandle.x, J.rotateHandle.y), r.stroke(), r.fillStyle = H, r.beginPath(), r.arc(J.rotateHandle.x, J.rotateHandle.y, 10, 0, Math.PI * 2), r.fill());
  }
  function U() {
    var B;
    const A = i.mode === "frame" ? [] : R(), J = A.length > 1, H = l ? y() : F(), z = H.map((G) => `${String((G == null ? void 0 : G.id) || "")}:${ge(G) ? "frame" : Number((G == null ? void 0 : G.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== H || i._sortedItemsCache.orderKey !== z) && (i._sortedItemsCache = {
      src: H,
      orderKey: z,
      sorted: [...H]
    });
    const T = [...A.filter(Ct), ...i._sortedItemsCache.sorted];
    for (const G of T) {
      const w = i.mode !== "frame" && !J && pe(G);
      if (i.mode === "frame" && !w) continue;
      const ne = oe(G), se = ge(G), ve = _e(G);
      if (!ne && !se || te(G) && !W(G)) continue;
      const he = V(G);
      if (d !== "stickers" && !he.visible)
        continue;
      const xe = Oe(Number((he == null ? void 0 : he.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const Fe = se && l && i.mode === "pano" ? Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (r.save(), r.globalAlpha *= Fe, re(G, he, w, ve), w && he.visible) {
        const Le = ve ? "#ff4d4f" : ne && ye(G) ? "#f59e0b" : "#0070f3", ze = r.globalAlpha;
        r.globalAlpha = ze * xe, x(G, he, Le), r.globalAlpha = ze;
      }
      r.restore();
    }
    if (l && i.mode === "pano" && !v() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const G = i.cutoutPanoFrameVisual, w = Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      r.save(), r.globalAlpha *= w, L(G.geom, G.selected, G.locked), G.selected && x(
        G.item,
        G.geom,
        G.locked ? "#ff4d4f" : "#0070f3"
      ), r.restore();
    }
    if (J) {
      const G = M(A);
      if (G != null && G.visible) {
        const w = u(A) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(G.corners[0].x, G.corners[0].y);
        for (let ne = 1; ne < G.corners.length; ne += 1) r.lineTo(G.corners[ne].x, G.corners[ne].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = w, G.corners.forEach((ne) => {
          r.beginPath(), r.arc(ne.x, ne.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      }
    } else
      A.forEach((G) => {
        if (!I(G) && !de(G)) return;
        const w = V(G);
        if (!(w != null && w.visible)) return;
        const ne = _e(G) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(w.corners[0].x, w.corners[0].y);
        for (let se = 1; se < w.corners.length; se += 1) r.lineTo(w.corners[se].x, w.corners[se].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = ne, w.corners.forEach((se) => {
          r.beginPath(), r.arc(se.x, se.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      });
    if (((B = i.interaction) == null ? void 0 : B.kind) === "marquee_select") {
      const G = ce(i.interaction.start, i.interaction.current);
      r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.9)", r.fillStyle = "rgba(255, 255, 255, 0.08)", r.lineWidth = 1, r.setLineDash([5, 4]), r.beginPath(), r.rect(G.x0, G.y0, G.x1 - G.x0, G.y1 - G.y0), r.fill(), r.stroke(), r.restore();
    }
  }
  function ie(A) {
    const J = v(), H = j(J);
    if (!J || !H)
      return r.clearRect(0, 0, n.width, n.height), A && o.clear(657930), !1;
    const z = { x: H.x, y: H.y, w: H.w, h: H.h }, { rect: T, shot: B } = og(J, H, { width: n.width, height: n.height }), G = we(z);
    if (r.clearRect(0, 0, n.width, n.height), A) {
      o.clear(657930);
      const w = m(T), ne = !!S(w, B, void 0, 657930);
      ne || o.clear(1118481, w), a.backgroundDirty = !ne;
    }
    return r.save(), r.fillStyle = "rgba(0, 0, 0, 0.58)", r.beginPath(), r.rect(0, 0, n.width, n.height), r.roundRect(z.x, z.y, z.w, z.h, G), r.fill("evenodd"), r.restore(), r.save(), r.strokeStyle = T0, r.globalAlpha = 0.62, r.lineWidth = 2, r.beginPath(), r.roundRect(z.x + 1, z.y + 1, z.w - 2, z.h - 2, Math.max(0, G - 1)), r.stroke(), r.restore(), !0;
  }
  function we(A) {
    const J = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * J, Number((A == null ? void 0 : A.w) || 0) * 0.5, Number((A == null ? void 0 : A.h) || 0) * 0.5);
  }
  function Me() {
    var ne, se;
    if (((ne = i.interaction) == null ? void 0 : ne.kind) !== "paint_lasso_fill") return;
    const A = i.interaction.stroke, J = (se = A == null ? void 0 : A.geometry) == null ? void 0 : se.points;
    let H;
    if (i.mode === "frame") {
      const ve = v(), he = K(ve);
      H = O(J, ve, he);
    } else
      H = _(J);
    if (!Array.isArray(H) || H.length < 3) return;
    const z = String((A == null ? void 0 : A.layerKind) || "") === "mask", T = (A == null ? void 0 : A.color) || { r: 1, g: 0.25, b: 0.25 }, B = Math.round(Number(T.r || 0) * 255), G = Math.round(Number(T.g || 0) * 255), w = Math.round(Number(T.b || 0) * 255);
    r.save(), r.beginPath(), r.moveTo(Number(H[0].x || 0), Number(H[0].y || 0));
    for (let ve = 1; ve < H.length; ve++) r.lineTo(Number(H[ve].x || 0), Number(H[ve].y || 0));
    r.closePath(), z ? (r.lineWidth = 2, r.setLineDash([6, 6]), r.lineDashOffset = 0, r.strokeStyle = "rgba(0,0,0,0.96)", r.stroke(), r.lineDashOffset = -6, r.strokeStyle = "rgba(255,255,255,0.96)", r.stroke(), r.setLineDash([]), r.lineDashOffset = 0) : (r.lineWidth = 1.5, r.setLineDash([6, 4]), r.strokeStyle = `rgba(${B},${G},${w},1)`, r.stroke(), r.setLineDash([])), r.restore();
  }
  function Ce() {
    const A = i.frameRollOverlayVisual, J = Oe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(A != null && A.shot) || J <= 1e-4) return;
    const H = K(A.shot);
    if (!H) return;
    const z = { x: H.x + H.w * 0.5, y: H.y + H.h * 0.5 }, T = Number(A.shot.roll_deg ?? A.shot.rot_deg ?? 0) * ir, B = Math.hypot(H.w, H.h) * 0.55, G = Math.cos(T) * B, w = Math.sin(T) * B;
    r.save(), r.globalAlpha *= J, r.beginPath(), r.rect(H.x, H.y, H.w, H.h), r.clip(), r.translate(z.x, z.y), r.rotate(T);
    const ne = Math.max(12, Math.min(H.w, H.h) / 6);
    r.beginPath();
    for (let se = -B; se <= B; se += ne)
      r.moveTo(se, -B), r.lineTo(se, B);
    for (let se = -B; se <= B; se += ne)
      r.moveTo(-B, se), r.lineTo(B, se);
    r.lineWidth = 1, r.strokeStyle = "rgba(255, 255, 255, 0.22)", r.stroke(), r.setTransform(1, 0, 0, 1, 0, 0), r.beginPath(), r.moveTo(z.x - G, z.y - w), r.lineTo(z.x + G, z.y + w), r.lineWidth = 1.5, r.setLineDash([8, 6]), r.strokeStyle = "rgba(255, 255, 255, 0.92)", r.shadowColor = "rgba(0, 0, 0, 0.8)", r.shadowBlur = 3, r.stroke(), r.setLineDash([]), r.restore();
  }
  function me() {
    return !l || !v() || t && q() || c && !ae() ? 0 : sA;
  }
  function ue() {
    const A = Oe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (A <= 1e-4 || !l || i.mode !== "pano") return;
    const J = v(), H = J ? V(J) : null, z = Array.isArray(H == null ? void 0 : H.corners) && H.corners.length >= 4 ? H.corners.map((G) => ({ x: Number(G.x || 0), y: Number(G.y || 0) })) : null;
    H != null && H.visible && z && (i.cutoutPanoDimCorners = z), J && (H != null && H.visible) && z && (i.cutoutPanoFrameVisual = {
      item: J,
      geom: H,
      selected: pe(J),
      locked: _e(J)
    });
    const T = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, B = H != null && H.visible ? z : T ? i.cutoutPanoDimCorners || [] : [];
    if (r.save(), r.fillStyle = `rgba(0, 0, 0, ${A})`, r.beginPath(), r.rect(0, 0, n.width, n.height), B.length >= 4) {
      r.moveTo(B[0].x, B[0].y);
      for (let G = 1; G < 4; G += 1) r.lineTo(B[G].x, B[G].y);
      r.closePath();
    }
    r.fill("evenodd"), r.restore();
  }
  return {
    connect(A) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: m,
        drawEditorViewShot: S,
        editorViewInput: g,
        getActiveCutoutShot: v,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: j,
        getFrameViewRect: K,
        getList: F,
        getMultiSelectionGeom: M,
        getSelectedItems: R,
        getStickerDisplayAlpha: Z,
        getUnwrapRect: Y,
        isCameraSelected: ae,
        isErpCamera: Se,
        isExternalSticker: ye,
        isFreeSpaceView: q,
        isItemLocked: _e,
        isItemSelected: pe,
        isRasterObjectItem: de,
        isSceneSticker: te,
        isShotItem: ge,
        isStickerItem: oe,
        isStrokeGroupItem: I,
        objectGeom: V,
        poseOf: N,
        projectDir: fe,
        projectDirUnwrap: C,
        projectErpLassoPointsToFrameRect: O,
        projectLassoPointsToCurrentView: _,
        rebuildPaintEngineIfNeeded: P,
        rectFromPoints: ce,
        renderEditorView: be,
        renderEditorViewUnwrap: D,
        sampleStickerEdge: b,
        sceneStickerShown: W,
        spaceViewState: p
      } = A);
    },
    drawGridUnwrap: h,
    drawGridPano: E,
    drawObjects: U,
    drawFrameViewBackground: ie,
    drawLassoOutlineOverlay: Me,
    drawFrameRollOverlay: Ce,
    getCutoutPanoDimTarget: me,
    drawCutoutPanoPassepartout: ue
  };
}
function $C(e) {
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
    timeline: m,
    type: S,
    uiState: g,
    viewController: v
  } = e;
  let y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D, b = () => {
  };
  function W(A = /* @__PURE__ */ new Set()) {
    Se();
    const J = l.backgroundDirty;
    d && (I(), j(J, A)), i.mode === "frame" ? (l.frameSafeRect = te(), M(J)) : i.mode === "unwrap" ? Z(J) : R(J), K(), ae(), C(), Y(), F(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && P(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, n.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const H = pe();
    g.stageStatus = H.status, g.stageStatusDetail = H.detail, g.stageNotice = be() || D() || ce(), H.status === zn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", H.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function p(A = i.interaction) {
    if (S !== "stickers" || i.mode !== "pano") return !1;
    const J = String((A == null ? void 0 : A.kind) || "");
    return J === "move" || J === "scale" || J === "scale_x" || J === "scale_y" || J === "rotate" ? !0 : J === "move_multi" ? Array.isArray(A == null ? void 0 : A.stickerSnapshots) && A.stickerSnapshots.length > 0 : !1;
  }
  function h() {
    return !!i.interaction || !!m.drag;
  }
  function k() {
    l.nodePreviewPending = !1;
    const A = Mn(s);
    A.liveState = f, A.liveStateVersion += 1, _e();
  }
  function E(A = {}) {
    var ne, se, ve, he, xe, Fe, Le, ze;
    const J = A.reason ?? ot.STATE, H = !!A.localOnly, z = A.externalSync === !0, T = String(A.cause || ""), B = String(((ne = i.interaction) == null ? void 0 : ne.kind) || "");
    (!H || B === "view" || B === "pan_frame" || p() || !!i.viewTransition || T === "mode" || T === "frame_view" || T === "cutout_frame") && (l.backgroundDirty = !0), H && de() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!H || T === "selection" || T === "mode" || T === "cutout_frame") && (O(), _()), h() ? l.nodePreviewPending = !0 : k(), z && ((ve = (se = lt(s).dom) == null ? void 0 : se.requestDraw) == null || ve.call(se), (he = s.setDirtyCanvas) == null || he.call(s, !0, !1)), z && !H && ((Fe = (xe = s.graph) == null ? void 0 : xe.setDirtyCanvas) == null || Fe.call(xe, !0, !0), (ze = (Le = t == null ? void 0 : t.canvas) == null ? void 0 : Le.setDirty) == null || ze.call(Le, !0, !0)), c.requestDraw(J);
  }
  function $() {
    const A = r.getBoundingClientRect(), J = Math.max(2, Math.round(A.width)), H = Math.max(2, Math.round(A.height)), z = window.devicePixelRatio || 1, T = [r.width, r.height, n.width, n.height].join("x");
    (r.width !== J || r.height !== H) && (r.width = J, r.height = H);
    const B = Z_(A.width || J, A.height || H, z, window.innerWidth || A.width, window.innerHeight || A.height);
    return o.resize(B.width, B.height), [r.width, r.height, n.width, n.height].join("x") === T ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && X(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function X(A) {
    A(), c.wake();
  }
  function le() {
    return !!i.viewTransition || ge.held || !!v.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || h();
  }
  function L(A = performance.now(), J = /* @__PURE__ */ new Set()) {
    var G;
    l.nodePreviewPending && !h() && k(), J.forEach((w) => l.reasons.add(w)), J.size && (l.dirty = !0), [...J].some((w) => w !== ot.OVERLAY) && (l.backgroundDirty = !0), N(), l.lastTickTs > 0 ? Math.max(1e-3, (A - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = A;
    const H = i.mode === "frame" && ((G = i.interaction) == null ? void 0 : G.kind) === "roll_frame" ? i.interaction : null;
    H != null && H.shot && (i.frameRollOverlayVisual = { shot: H.shot });
    const z = H ? 1 : 0;
    if (Math.abs(z - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = z, i.frameRollOverlayStartTs = A), Math.abs(Number(i.frameRollOverlayAlpha || 0) - z) > 1e-6) {
      const w = Oe(
        (A - Number(i.frameRollOverlayStartTs || A)) / aA,
        0,
        1
      );
      i.frameRollOverlayAlpha = Cn(
        Number(i.frameRollOverlayFrom || 0),
        z,
        Jl(w)
      ), w >= 1 && (i.frameRollOverlayAlpha = z, z === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const T = q();
    if (Math.abs(T - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = T, i.cutoutPanoDimStartTs = A), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - T) > 1e-6) {
      const w = Oe(
        (A - Number(i.cutoutPanoDimStartTs || A)) / kp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Cn(
        Number(i.cutoutPanoDimFrom || 0),
        T,
        Jl(w)
      ), w >= 1 && (i.cutoutPanoDimAlpha = T), w >= 1 && T === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const B = d && ye() ? 1 : 0;
    if (Math.abs(B - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = B, i.cutoutPanoFrameStartTs = A), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - B) > 1e-6) {
      const w = Oe(
        (A - Number(i.cutoutPanoFrameStartTs || A)) / kp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Cn(
        Number(i.cutoutPanoFrameFrom || 0),
        B,
        Jl(w)
      ), w >= 1 && (i.cutoutPanoFrameAlpha = B, B === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const w = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), ne = Oe((A - Number(i.outputPreviewAnimStartTs || 0)) / w, 0, 1), ve = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? uA(ne) : fA(ne);
      i.outputPreviewAnim = Cn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, ve), l.dirty = !0, ne >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: w, done: ne } = IC(i.viewTransition, A);
      if (i.viewPosition = w.position, i.viewYaw = w.yaw_deg, i.viewPitch = w.pitch_deg, i.viewFov = w.hFOV_deg, i.viewDistance = w.distance, ne) {
        const { end: se } = i.viewTransition;
        i.viewTransition = null, se && y(se), fe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (V(A) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, v.stepInertia(A) && (i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const w = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), W(w);
    }
  }
  function re(A) {
    try {
      A();
    } catch (J) {
      const H = String((J == null ? void 0 : J.stack) || (J == null ? void 0 : J.message) || J || "unknown editor frame error");
      l.tickErrorSignature !== H && (l.tickErrorSignature = H, console.error("[PanoramaStickers] editor frame failed", J)), g.stageStatus = In, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function x(A = performance.now(), J = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const H = p1();
    re(() => L(A, J)), m1(H);
  }
  function U() {
    !l.running || !$() || re(() => {
      l.dirty = !1, W(/* @__PURE__ */ new Set([ot.RESIZE]));
    });
  }
  const ie = new ResizeObserver(U);
  let we = null;
  function Me() {
    we == null || we.removeEventListener("change", Ce), we = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), we.addEventListener("change", Ce);
  }
  function Ce() {
    Me(), U();
  }
  function me() {
    b = f1("editor", () => {
      var A;
      return {
        type: S,
        readOnly: a,
        mode: i.mode,
        interaction: ((A = i.interaction) == null ? void 0 : A.kind) ?? null,
        timelineDrag: !!m.drag,
        playing: !!oe.playing
      };
    });
  }
  function ue() {
    b(), l.running = !1, c.stop(), ie.disconnect(), we.removeEventListener("change", Ce);
  }
  return {
    connect(A) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: j,
        drawCutoutPanoPassepartout: K,
        drawFrameRollOverlay: F,
        drawFrameViewBackground: M,
        drawGridPano: R,
        drawGridUnwrap: Z,
        drawLassoOutlineOverlay: Y,
        drawObjects: ae,
        endEditorViewFrame: Se,
        getActiveCutoutShot: ye,
        getCutoutPanoDimTarget: q,
        getSharedLivePaintSurface: _e,
        getStageImageStatus: pe,
        isPaintCompositeInteraction: de,
        measureFrameSafeRect: te,
        moveKeys: ge,
        playback: oe,
        rebuildPaintEngineIfNeeded: I,
        stepKeyMove: V,
        syncCutoutShot: N,
        syncFloatingViewButtonState: fe,
        syncFrameRollKnob: C,
        syncLookAtFrameButtonState: O,
        syncViewToggleState: _,
        updateSelectionMenu: P,
        upstreamNotice: ce,
        file3dImportNotice: be,
        file3dNotice: D
      } = A);
    },
    requestDraw: E,
    syncCanvasSize: $,
    startAnimation: X,
    editorAnimating: le,
    tick: x,
    stageResizeObserver: ie,
    watchPixelRatio: Me,
    sampleEditorDiagnostics: me,
    stopRenderLoop: ue
  };
}
function zC(e) {
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
    state: m,
    studio: S,
    type: g,
    uiState: v
  } = e;
  let y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D, b, W, p, h, k = 0;
  function E() {
    v.toolButtons.forEach((me) => {
      const ue = me.attr === "data-tool-mode", A = me.attr === "data-paint-tool", J = me.attr === "data-mask-tool";
      me.active = ue ? me.value === n.primaryTool : A ? me.key === n.paintTool : J ? me.key === n.maskTool : !1, me.pressed = me.active ? "true" : me.pressed == null ? null : "false";
    });
  }
  function $() {
    if (S && Ni(v.toolButtons, "value", "add-camera", { disabled: _e() }), g !== "cutout") return;
    const me = K();
    Ni(v.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: me ? "Look At Frame" : "Add Frame",
      tip: me ? "Look at frame" : "Add frame",
      icon: me ? je.camera : je.plus_circle
    });
  }
  function X() {
    const me = ZA({
      spaceView: fe(),
      spaceMode: Fa(n.spaceMode, n.viewTransition),
      readOnly: c,
      frameMode: f && n.mode === "frame",
      showGrid: n.showGrid
    });
    v.space && Object.assign(v.space, me.space);
    for (const [ue, A] of Object.entries(me.buttons)) Ni(v.floatingButtons, "action", ue, A);
  }
  function le() {
    var A;
    const me = j0({ hasShot: !!K(), erp: te(), hidden: _e() && !j(), studio: S });
    n.mode === "frame" && me.disabled && (S ? O(K()) : n.mode = "pano"), n.outputPreviewRect = null, v.viewButtons.forEach((J) => {
      const H = J.key === n.mode;
      J.pressed = H ? "true" : "false", J.visible = !(J.key === "frame" && !f), J.key === "frame" ? Object.assign(J, me) : J.disabled = !1;
    });
    const ue = f && n.mode === "frame" ? K() : null;
    v.frameRail.visible = !!ue, v.frameRail.disabled = c || (ue == null ? void 0 : ue.locked) === !0, v.frameRollKnob.visible = !!ue && !c && ue.locked !== !0, v.frameRollKnob.disabled = c || (ue == null ? void 0 : ue.locked) === !0, v.frameRollKnob.rollDeg = Number((ue == null ? void 0 : ue.roll_deg) ?? (ue == null ? void 0 : ue.rot_deg) ?? 0), v.frameRollKnob.displayValue = Vi(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((A = n.interaction) == null ? void 0 : A.kind) === "roll_frame", v.frameRollKnob.armed = !!ue && n.altModifier === !0, v.frameRail.rollKnob = v.frameRollKnob, v.frameRail.aspectLabel = ue ? gr(ue) : "", v.frameRail.aspectChoices = H0(ue ? String(gr(ue)) : null, { erp: S, coverage: m.coverage }), ue || (v.frameRail.aspectOpen = !1), v.outputPreviewToggle.visible = g === "cutout" && n.mode !== "frame" && !!K(), f && v.cameraPreview && (v.cameraPreview.visible = n.mode !== "frame" && y(), v.cameraPreview.expanded = !!n.outputPreviewExpanded, v.cameraPreview.settled = v.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), X(), I() ? p(n.pointerPos) : be(n.mode === "pano" ? "grab" : "default");
  }
  function L() {
    var ue;
    const me = n.mode === "frame" ? K() : null;
    v.frameRollKnob.visible = !!me && !c && me.locked !== !0, v.frameRollKnob.rollDeg = Number((me == null ? void 0 : me.roll_deg) ?? (me == null ? void 0 : me.rot_deg) ?? 0), v.frameRollKnob.displayValue = Vi(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((ue = n.interaction) == null ? void 0 : ue.kind) === "roll_frame", v.frameRollKnob.armed = !!me && n.altModifier === !0;
  }
  function re() {
    E();
    const me = YA({
      editor: n,
      swatches: rl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: Qn,
      colorsApproximatelyEqual: Oa,
      rgb01ToHsv: qc,
      hsv01ToRgb: Yc,
      getBrushPresetIdForTool: F,
      isActiveLassoTool: de
    });
    if (Object.assign(v.paintDock, me), W(), !me.visible) {
      i && (i.hidden = !0);
      return;
    }
    k && (clearTimeout(k), k = 0), o && (!me.colorEnabled && i && !i.hidden && (k = window.setTimeout(() => {
      i.hidden = !0, v.paintDock.colorPopOpen = !1, k = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", me.pickerHueColor), i.style.setProperty("--picker-sat", me.pickerSat), i.style.setProperty("--picker-val", me.pickerVal), i.style.setProperty("--picker-hue", me.pickerHue)), s && (s.style.left = me.pickerSvLeft, s.style.top = me.pickerSvTop), a && (a.style.left = me.pickerHueLeft));
  }
  function x() {
    const me = P(f && n.mode === "frame" ? K() : Y());
    me && (n.panelLastValues = {
      yaw_deg: Number(me.yaw_deg || 0),
      pitch_deg: Number(me.pitch_deg || 0),
      hFOV_deg: Number(me.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(me.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(me.rot_deg || 0),
      roll_deg: Number(me.roll_deg || 0),
      aspect_id: gr(me)
    }, U());
  }
  function U() {
    D(), b(), we();
  }
  function ie() {
    const me = f && n.mode === "frame" ? K() : null;
    return [...ae(), ce(), me].some((ue) => V(ue) ? fa(ue) : N(ue) && _e() && fa(m.camera));
  }
  function we() {
    if (r) return;
    m.ui_settings = m.ui_settings || {};
    const me = BA(m.ui_settings);
    if (l) {
      v.sidePanel = qA({
        coverage: m.coverage,
        uiSettings: me,
        normalizeCoverageValue: vn
      });
      return;
    }
    const ue = Y(), A = f && n.mode === "frame" ? K() : null, J = A || ue, H = A ? [A] : ae(), z = A ? "shot" : Se();
    if (H.length > 1 && (n.panelLastValues = n.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), J && z !== "stroke") {
      const ze = P(J);
      n.panelLastValues = {
        yaw_deg: Number(ze.yaw_deg || 0),
        pitch_deg: Number(ze.pitch_deg || 0),
        hFOV_deg: Number(ze.hFOV_deg || (z === "image" ? 30 : 90)),
        vFOV_deg: Number(ze.vFOV_deg || (z === "image" ? 30 : 60)),
        rot_deg: Number(ze.rot_deg || 0),
        roll_deg: Number(ze.roll_deg || 0),
        aspect_id: gr(ze)
      }, V(J) && (n.panelLastValues.opacity = ar(J, n.frame).opacity * 100);
    }
    const T = n.panelLastValues || (g === "stickers" || z === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), B = z === "stroke" ? null : J, G = ce(), w = t && (z === "shot" || z === "frame") && pe(), ne = G ? BS(G, n.frame) : w ? { ...B, ...GS(m.camera, n.frame), vFOV_deg: B.vFOV_deg } : V(B) ? n.panelLastValues : B || T, se = G ? h(G) : !!B && !oe(B);
    n.panelWasEnabled = se, $();
    let ve = null;
    if (A) {
      const ze = q({ item: A, kind: "shot", label: "Frame" });
      ve = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ze.label,
        currentIcon: ze.icon || null,
        items: [{
          id: String(A.id || ""),
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
        const Q = K();
        Q && ze.push({ id: Q.id, label: "Camera", icon: ye("frame"), item: Q, kind: "frame" }), Z().forEach((Pe, ee) => {
          var Te, $e;
          if (!Pe || V(Pe) && !Pe.visible) return;
          const ke = u ? Me(Pe) : ge(Pe) ? String(Pe.id || pd) : String((($e = (Te = m.assets) == null ? void 0 : Te[Pe.asset_id]) == null ? void 0 : $e.name) || Pe.asset_id || Pe.id), Ae = `${ee + 1}. ${ke}${ge(Pe) && C(Pe) ? " (hidden)" : ""}`, Ie = q({ item: Pe, label: Ae, kind: "image" });
          ze.push({ id: Pe.id, label: Ie.label, icon: Ie.icon, item: Pe, kind: "image" });
        });
      } else
        M().forEach((Q) => {
          if (!(Q != null && Q.item)) return;
          const Pe = q(Q);
          ze.push({ id: Q.item.id, label: Pe.label, icon: Pe.icon, item: Q.item, kind: Q.kind });
        });
      const We = (B == null ? void 0 : B.id) || "", Ge = G ? { label: Me(G), icon: je.globe } : ze.find((Q) => Q.id === We) || ze[0];
      ve = {
        label: "Selection",
        open: !1,
        disabled: ze.length <= 1,
        currentLabel: Ge.label,
        currentIcon: Ge.icon || null,
        items: ze.map((Q) => ({
          id: Q.id,
          label: Q.label,
          icon: Q.icon || null,
          active: Q.id === We
        }))
      };
    }
    const he = [], xe = (ze, We, Ge, Q, Pe) => {
      const ee = Oe(Number(ne[ze] || 0), Ge, Q);
      he.push({
        key: ze,
        label: We,
        min: Ge,
        max: Q,
        step: Pe,
        value: ee,
        displayValue: Vi(ee),
        fillPct: Oe((ee - Ge) / Math.max(1e-6, Q - Ge) * 100, 0, 100),
        enabled: se && !c
      });
    }, Fe = [];
    if (G) {
      for (const [ze, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ge = nc(ne[ze]);
        xe(ze, We, -Ge, Ge, 0.01);
      }
      xe("yaw_deg", "Yaw", -180, 180, 0.1), xe("pitch_deg", "Pitch", -90, 90, 0.1), xe("roll_deg", "Roll", -180, 180, 0.1), xe("scale", "Scale", I0, nc(ne.scale), 0.01), xe("opacity", "Opacity", 0, 100, 1);
    } else if (H.length > 1)
      Fe.push(`Selected objects: ${H.length}`), Fe.push("Multi-selection supports z-order and delete.");
    else {
      const ze = z === "shot" || z === "frame";
      if (w)
        for (const [We, Ge] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Q = nc(ne[We]);
          xe(We, Ge, -Q, Q, 0.01);
        }
      xe("yaw_deg", "Yaw", -180, 180, 0.1), xe("pitch_deg", "Pitch", -90, 90, 0.1), xe(z === "image" || g === "stickers" && !ze ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), xe("hFOV_deg", "H FOV", 1, 179, 0.1), xe("vFOV_deg", "V FOV", 1, 179, 0.1), ze && he.forEach((We) => {
        We.enabled = We.enabled && QA(We.key, { erp: te() });
      }), V(B) && !ze && he.forEach((We) => {
        We.enabled = We.enabled && eC(We.key, { port: ge(B) });
      }), u && !ze && xe("opacity", "Opacity", 0, 100, 1);
    }
    const Le = H.length > 1 ? null : G || B;
    v.sidePanel = sC({
      coverage: m.coverage,
      readOnly: c,
      selectionPicker: ve,
      enabled: se,
      selectedKind: G ? "world" : z,
      selectedItems: H,
      params: he,
      notes: Fe,
      uiSettings: me,
      normalizeCoverageValue: vn,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: S && Le && (Le === G || V(Le)) ? oC({
        layer: Ct(Le) ? Le.origin.layer : null,
        editable: Ct(Le) && wa(Le),
        locked: Le.locked === !0,
        readOnly: c,
        placement: Le.placement,
        override: Ct(Le) ? Gg(m.upstream, Le.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: Ct(Le) ? null : _(Le)
      }) : null
    });
  }
  function Me(me) {
    const ue = Lh(me);
    return Ct(me) ? `${hd(me.origin.layer)} · ${ue}` : ue;
  }
  function Ce() {
    const { canUndo: me, canRedo: ue } = R();
    Ni(v.toolButtons, "value", "undo", { disabled: !me }), Ni(v.toolButtons, "value", "redo", { disabled: !ue });
  }
  return {
    connect(me) {
      ({
        cameraPreviewShown: y,
        cameraShoots: j,
        getActiveCutoutShot: K,
        getBrushPresetIdForTool: F,
        getCutoutInspectorItems: M,
        getHistoryCapabilities: R,
        getList: Z,
        getSelected: Y,
        getSelectedItems: ae,
        getSelectedKind: Se,
        getSelectionItemIcon: ye,
        getSelectionItemLabelData: q,
        hasCamera: _e,
        hasSpaceContent: pe,
        isActiveLassoTool: de,
        isErpCamera: te,
        isExternalSticker: ge,
        isItemLocked: oe,
        isPaintCursorEnabled: I,
        isSceneSticker: V,
        isShotItem: N,
        isSpaceView: fe,
        isStickerHidden: C,
        leaveFrameView: O,
        portHandoffLanes: _,
        poseOf: P,
        selectedWorldSticker: ce,
        setCanvasCursor: be,
        syncCutoutShot: D,
        syncTimeline: b,
        syncVideoTransportVisibility: W,
        updateCursor: p,
        worldStickerEditable: h
      } = me);
    },
    syncLookAtFrameButtonState: $,
    syncFloatingViewButtonState: X,
    syncViewToggleState: le,
    syncFrameRollKnob: L,
    syncPaintUi: re,
    syncSidePanelControls: x,
    updateSidePanel: U,
    inspectorTimed: ie,
    syncSidePanelModel: we,
    syncUndoRedoButtons: Ce
  };
}
function jC(e) {
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
  let m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V;
  function N() {
    var H;
    if (!s || r) return;
    const ue = ((H = l.drag) == null ? void 0 : H.limit) ?? C();
    !l.drag && F.frame > ue - 1 && F.seek(ue - 1);
    const A = l.selection, J = A && p(A.owner);
    if (A) {
      const z = J ? k(A) : [], T = E(A.owner);
      A.frames = A.frames.filter((B) => B + T < ue && z.some((G) => J[G].keyframes.some((w) => w.frame === B))), A.frames.length || (l.selection = null);
    }
    d.timeline = fC(o, {
      span: ue,
      portBarEnd: W,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? fe(),
      openRows: l.openRows,
      audio: L() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(n) !== null || Ao(n, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!Di(n).scene && !te(),
      upstream: V(),
      background: P() ? { end: W(o.background) } : null,
      // A 3D file still uploading is a 3D Sticker before its Source names it.
      loading3d: j()
    }), d.easing = l.selection && X(l.selection.owner) ? pC(J, k(l.selection), l.selection.frames, E(l.selection.owner)) : null;
  }
  function fe() {
    return Ah(o, { camera: a });
  }
  function C(ue = null) {
    var A;
    return Eu(o, {
      bg: O(),
      port: S(),
      sceneItems: te() ? 0 : ((A = ae()) == null ? void 0 : A.urls.length) ?? 0,
      upstream: ge(ue),
      openClip: ue,
      camera: a
    });
  }
  function O() {
    return de() ? null : _() ?? (Di(n).bg_media && !Ao(n, ["bg_media"]) ? { frames: 1 } : null);
  }
  function _() {
    const ue = d.videoTransport;
    return ue.ready && ue.frameCount > 0 ? { video: !!de() || Ao(n, ["bg_media"]), frames: ue.frameCount, duration: Number(ue.duration || 0) } : null;
  }
  function P() {
    return i && !!Di(n).bg_media && !de();
  }
  function ce() {
    const ue = de();
    return ue ? ue.clip ? Sh(ue.clip.clip, ue.clip.fps, o.timeline.fps) : { start: 0, in: 0, duration: null } : P() ? o.background.clip : null;
  }
  function be() {
    const ue = ce();
    return ue ? _h(ue) : null;
  }
  function D(ue) {
    const A = ce();
    if (!A) return !0;
    const J = !!de();
    return kc(A, ue, o.timeline.fps, J ? _() : O(), J || te());
  }
  function b() {
    var ue;
    return ((ue = de()) == null ? void 0 : ue.color) ?? o.bg_color;
  }
  function W(ue) {
    var J;
    if (ue === o.background) {
      const H = ue.clip.duration === null ? O() : null;
      return H != null && H.video || (H == null ? void 0 : H.frames) > 1 ? vh(ue.clip, o.timeline.fps, H, te()) : null;
    }
    if (((J = ue.source) == null ? void 0 : J.kind) !== "port" || ue.clip.duration !== null) return null;
    const A = ue.origin ? oe(ue) : y(ue) ? S() : null;
    return A ? Au(ue.clip, o.timeline.fps, A) : null;
  }
  function p(ue) {
    if (ue === "camera") return g() ? o.camera : null;
    if (ue === "scene") return i ? o.scene : null;
    if (ue === Eo) return P() ? o.background : null;
    const A = I(ue);
    return A ? A.owner : ye(ue);
  }
  function h(ue) {
    var A;
    return ((A = I(ue)) == null ? void 0 : A.editable) ?? !0;
  }
  function k(ue) {
    return ue.lane ? [ue.lane] : qi(p(ue.owner));
  }
  function E(ue) {
    var J;
    if (ue === "camera") return 0;
    const A = (J = p(ue)) == null ? void 0 : J.clip;
    return A ? A.start - A.in : 0;
  }
  function $(ue) {
    return `${mi(ue, t.frame)}:${ue.start - ue.in}`;
  }
  function X(ue) {
    var J;
    const A = p(ue);
    return !!A && A.locked !== !0 && h(ue) && ((J = I(ue)) == null ? void 0 : J.part) !== "scene";
  }
  function le(ue) {
    const A = Math.max(0, Math.round(ue));
    if (A === t.frame) return;
    Se(), t.frame = A, c.frame.value = A, Se();
    const J = [t.selectedId, t.worldSelectedId];
    Z(), K(), J[0] !== t.selectedId || J[1] !== t.worldSelectedId ? pe() : v() && q(), _e(), Y({ reason: ot.PLAYHEAD });
  }
  function L() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function re(ue) {
    R(), F.seek(ue);
  }
  function x() {
    s && F.stop();
  }
  function U() {
    R(), F.toggle();
  }
  function ie() {
    Se(), K(), pe(), _e(), Y();
  }
  function we() {
    M(), m(), ie();
  }
  function Me() {
    const { selection: ue } = l;
    X(ue.owner) && (x(), bS(p(ue.owner), k(ue), ue.frames, t.frame - E(ue.owner)), l.selection = null, we());
  }
  function Ce(ue) {
    const A = $r(ue);
    if (A === null || A === o.timeline.fps) return;
    x();
    const J = Math.round(t.frame * A / o.timeline.fps);
    VS(o, A), l.selection = null, F.seek(J), we();
  }
  function me() {
    const ue = f(n);
    ue !== null && ue !== o.timeline.fps && Ce(ue);
  }
  return {
    connect(ue) {
      ({
        commitAndRefreshNode: m,
        getPortMediaMeta: S,
        hasCamera: g,
        inspectorTimed: v,
        isExternalSticker: y,
        loading3dIds: j,
        markObjectVisualsDirty: K,
        playback: F,
        pushHistory: M,
        refreshModalVideoSource: R,
        releaseHiddenSelection: Z,
        requestDraw: Y,
        sceneFiles: ae,
        syncCutoutShot: Se,
        stickerById: ye,
        syncSidePanelModel: q,
        updateSelectionMenu: _e,
        updateSidePanel: pe,
        upstreamBackground: de,
        upstreamLinked: te,
        upstreamOutput: ge,
        upstreamPortMeta: oe,
        upstreamRow: I,
        upstreamTimelineLayers: V
      } = ue);
    },
    syncTimeline: N,
    timelineTimed: fe,
    timelineSpanFrames: C,
    backgroundShown: P,
    backgroundShowsAt: D,
    backgroundVideoPlace: be,
    backgroundColor: b,
    portBarEnd: W,
    timelineOwner: p,
    selectedLanes: k,
    timelineOffset: E,
    clipView: $,
    timelineEditable: X,
    rowEditable: h,
    setTimelineFrame: le,
    jumpTimelineTo: re,
    stopTimelinePlayback: x,
    togglePlayback: U,
    refreshTimelineEdit: ie,
    commitTimelineEdit: we,
    deleteSelectedKeyframes: Me,
    changeTimelineFps: Ce,
    applyVideoTimelineFps: me
  };
}
function HC(e) {
  const {
    dragFrames: t,
    editor: n,
    readOnly: r,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O;
  function _(P) {
    var ce, be;
    if (!(r || !o)) {
      if (P.type === "seek") {
        if (P.phase === "move") {
          s.scrubFrame = P.frame, t.request("seek");
          return;
        }
        t.cancel(), P.phase === "start" && y(), g.seek(P.frame);
        return;
      }
      if (P.type === "play") {
        V();
        return;
      }
      if (P.type === "mute") {
        N(), pe();
        return;
      }
      if (P.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? I()), s.selection = null, pe();
        return;
      }
      if (P.type === "restore-upstream-deleted" || P.type === "revert-upstream-layer") {
        const D = (be = (ce = a.timeline) == null ? void 0 : ce.groups) == null ? void 0 : be.find((W) => W.key === P.key), b = P.type === "restore-upstream-deleted" ? D == null ? void 0 : D.restore : D == null ? void 0 : D.revert;
        if (!b || b.disabled) return;
        P.type === "restore-upstream-deleted" ? M(P.key) : R(P.key), pe();
        return;
      }
      if (P.type === "toggle-row") {
        s.openRows.has(P.id) ? s.openRows.delete(P.id) : s.openRows.add(P.id), pe();
        return;
      }
      if (P.type === "toggle-visible") {
        if (!Z(P.id)) return;
        const D = O(P.id);
        if (P.id === G0) i.painting_visible = !i.painting_visible;
        else if ((D == null ? void 0 : D.part) === "painting") D.sceneState.painting_visible = !D.sceneState.painting_visible;
        else {
          const b = ge(P.id);
          if (!b) return;
          b.visible = !b.visible;
        }
        K(), u();
        return;
      }
      if (P.type === "select-row") {
        const D = ye(P.id);
        if (D && !D.visible || P.id === "camera" && !l()) return;
        D && !mi(D.clip, n.frame) && S(D.clip.start), (D == null ? void 0 : D.placement) === "world" ? Y(D.id) : P.id === "camera" ? Se(f()) : Se(m().find((b) => b.id === P.id) || null), _e(), s.selection = null, C(), fe(), F();
        return;
      }
      if (P.type === "select-keys") {
        const D = te(P.owner), b = P.frames.map((h) => h - D), W = s.selection, p = (W == null ? void 0 : W.owner) === P.owner && W.lane === P.lane;
        if (P.additive && p) {
          const h = new Set(W.frames);
          for (const k of b)
            h.has(k) ? h.delete(k) : h.add(k);
          W.frames = [...h].sort((k, E) => k - E);
        } else
          s.selection = b.length ? { owner: P.owner, lane: P.lane, frames: b } : null;
        pe();
        return;
      }
      if (P.type === "move-keys") {
        const D = s.selection;
        if (!D || !de(D.owner)) return;
        const b = ge(D.owner), W = ae(D);
        if (P.phase === "start") {
          q(), s.drag = { keyframes: W.map((E) => structuredClone(b[E].keyframes)), frames: D.frames, limit: oe() };
          return;
        }
        const { drag: p } = s;
        if (!(p != null && p.keyframes)) return;
        W.forEach((E, $) => {
          b[E].keyframes = structuredClone(p.keyframes[$]);
        });
        const h = te(D.owner), k = vS(b, W, p.frames, P.delta, -h, p.limit - 1 - h);
        if (D.frames = p.frames.map((E) => E + k), P.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, k ? u() : j();
        return;
      }
      if (P.type === "clip") {
        const D = ge(P.id);
        if (!(D != null && D.clip) || D.locked || !Z(P.id)) return;
        if (P.phase === "start") {
          q();
          const { clip: k } = D, E = oe(), $ = k.duration === null ? v(D) ?? E : k.start + k.duration;
          s.drag = { clip: { ...k }, span: oe(k), limit: E, end: $ };
          return;
        }
        const { drag: b } = s;
        if (!(b != null && b.clip)) return;
        const W = b.clip, p = d(D.clip);
        if (D.clip = { ...W }, P.delta && P.mode === "move") {
          Cf(D.clip, Math.min(P.delta, Math.max(0, b.limit - 1 - W.start)));
          const k = oe() - b.limit;
          k > 0 && Cf(D.clip, -k);
        } else P.delta && P.mode === "start" ? wS(D.clip, Math.min(W.start + P.delta, Math.max(b.limit - 1, W.start))) : P.delta && kS(D.clip, Math.min(b.end + P.delta, Math.max(b.limit, b.end)), b.span);
        if (P.phase !== "end") {
          t.request("timeline"), d(D.clip) !== p && (t.request("view"), P.id === Eo && t.request("background"));
          return;
        }
        t.cancel(), s.drag = null, K();
        const h = JSON.stringify(D.clip) !== JSON.stringify(W);
        h && P.id === Eo && g.seek(n.frame), h ? u() : j();
        return;
      }
      if (P.type === "key-row") {
        if (P.owner === "scene" || P.owner === Eo || !de(P.owner)) return;
        q(), hS(ge(P.owner), n.frame - te(P.owner)), u();
        return;
      }
      if (P.type === "fps") {
        const D = MS(P.fps);
        if (D === null || D === i.timeline.fps || a.timeline.fpsLocked) {
          pe();
          return;
        }
        c(D);
        return;
      }
      if (P.type === "length") {
        const D = PS(P.length);
        if (D === void 0 || D === i.timeline.length) {
          pe();
          return;
        }
        q(), i.timeline.length = D, u();
        return;
      }
      if (P.type === "easing") {
        const D = s.selection;
        if (!D || !de(D.owner)) return;
        q(), _S(ge(D.owner), ae(D), D.frames, P.easing), P.commit ? u() : j();
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
        getList: m,
        jumpTimelineTo: S,
        playback: g,
        portBarEnd: v,
        refreshModalVideoSource: y,
        refreshTimelineEdit: j,
        releaseHiddenSelection: K,
        requestDraw: F,
        restoreUpstreamDeletedCommand: M,
        revertUpstreamLayerCommand: R,
        rowEditable: Z,
        selectWorldSticker: Y,
        selectedLanes: ae,
        setSelectedItem: Se,
        stickerById: ye,
        stopTimelinePlayback: q,
        syncFloatingViewButtonState: _e,
        syncTimeline: pe,
        timelineEditable: de,
        timelineOffset: te,
        timelineOwner: ge,
        timelineSpanFrames: oe,
        timelineTimed: I,
        togglePlayback: V,
        toggleVideoMuted: N,
        updateSelectionMenu: fe,
        updateSidePanel: C,
        upstreamRow: O
      } = P);
    },
    onTimelineAction: _
  };
}
function KC(e) {
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
  let d, u, f, m, S, g, v;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = vn(i.value)), n && (l.bg_color = String(n.value || l.bg_color || "#00ff00")), j(), o.setDirtyCanvas(!0, !0));
  }
  function j() {
    var ae;
    if (a || (m(), g(), v(), l.coverage = vn(l.coverage), Vh(o, l.active), !c)) return;
    const Z = f(), Y = $h(o, Z, String(c.value ?? ""), { rebased: r });
    Y !== null && (Z !== l && (l.id = Z.id), c.value = Y, (ae = c.callback) == null || ae.call(c, Y));
  }
  function K() {
    l.ui_settings = kA(l.ui_settings), a || j();
  }
  function F() {
    var Z;
    a || (j(), (Z = o.setDirtyCanvas) == null || Z.call(o, !0, !0));
  }
  function M() {
    a || d() && S().catch((Z) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", Z);
    });
  }
  function R(Z = {}) {
    var Se, ye, q, _e, pe, de, te, ge, oe, I, V;
    const Y = Z.syncPreview !== !1, ae = Z.syncGraph !== !1;
    Y && ((q = (ye = (Se = wg(o)) == null ? void 0 : Se.runtime) == null ? void 0 : ye.requestDraw) == null || q.call(ye), (de = (pe = (_e = Ec(o)) == null ? void 0 : _e.dom) == null ? void 0 : pe.requestDraw) == null || de.call(pe), (te = o.setDirtyCanvas) == null || te.call(o, !0, !1)), ae && ((oe = (ge = o.graph) == null ? void 0 : ge.setDirtyCanvas) == null || oe.call(ge, !0, !0), (V = (I = t == null ? void 0 : t.canvas) == null ? void 0 : I.setDirty) == null || V.call(I, !0, !0));
  }
  return {
    connect(Z) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: m,
        syncPaintingLayerAsync: S,
        syncPortHandoff: g,
        syncUpstreamEdits: v
      } = Z);
    },
    apply: y,
    commitState: j,
    persistUiSettings: K,
    commitAndRefreshNode: F,
    triggerBackgroundPersistenceOnClose: M,
    syncCoverageChangeToNodePreviews: R
  };
}
function GC(e) {
  const {
    editor: t,
    readOnly: n,
    sceneV2: r,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D, b;
  function W(x, U, ie = "Clear") {
    return new Promise((we) => {
      a.confirmDialog = {
        visible: !0,
        title: String(x || ""),
        text: String(U || ""),
        confirmLabel: String(ie || "Confirm"),
        resolve: we
      };
    });
  }
  async function p() {
    var ie, we;
    if (n || !await W(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = fi(null), te();
    const U = d();
    if (s === "stickers")
      i.stickers = r ? i.stickers.filter((Me) => Me.placement === "world" || U.includes(Me)) : U, r || (i.assets = {}), t.selectedId = ((ie = U[0]) == null ? void 0 : ie.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((we = U[0]) == null ? void 0 : we.id) || null, oe();
    else {
      const Me = TS(i.shots, i.active.selected_shot_id);
      i.stickers = U, i.assets = {}, i.shots = Me.shots, t.selectedId = Me.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = Me.selectedShotId, !Me.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, oe();
    }
    I(), u(), D(), be(), N();
  }
  async function h(x) {
    var Ce, me, ue, A;
    if (n) return;
    const U = x === "mask" ? "mask" : "paint", ie = U === "mask" ? "Mask" : "Paint", we = j(U);
    if (!(!we.length && !(((Ce = t.interaction) == null ? void 0 : Ce.kind) === "draw" && ((me = t.interaction) == null ? void 0 : me.layerKind) === U) || !await W(
      `Clear ${ie}`,
      `This will remove all ${U} strokes in the current node.`,
      `Clear ${ie}`
    ))) {
      if (((ue = t.interaction) == null ? void 0 : ue.kind) === "draw" && ((A = t.interaction) == null ? void 0 : A.layerKind) === U) {
        const J = S(t.interaction);
        J && t.paintEngine.cancelActiveStroke(J), t.interaction = null;
      }
      we.length = 0, i.painting.raster_objects = K().filter((J) => String((J == null ? void 0 : J.layerKind) || "paint") !== U), U === "paint" && (y().length = 0), te(), I(), u(), D(), be(), ce(), N();
    }
  }
  function k() {
    if (n) return;
    const x = F();
    if (!x || !ye(x) || R(x) || Ct(x) || r && _e(x)) return;
    let U;
    r ? U = JS(x, Ho(i), v()) : (U = JSON.parse(JSON.stringify(x)), U.id = mo("st"), U.yaw_deg = It((U.yaw_deg || 0) + 8), U.z_index = v()), i.stickers.push(U), i.active.selected_sticker_id = U.id, t.selectedId = U.id, t.selectedIds = [U.id], pe(), I(), u(), be(), D(), N();
  }
  function E() {
    const x = O();
    return x ? (b(x) && (_(), Ct(x) ? m([x]) : XS(i, x.id), c(), pe(), I(), u(), D(), be(), P(), N()), !0) : !1;
  }
  function $() {
    var we, Me, Ce, me, ue;
    if (n) return;
    const x = M(), U = F();
    if (!U && x.length === 0 || x.some((A) => Z(A))) return;
    _();
    const ie = x.filter(Ct);
    if (ie.length && (m(ie), pe()), x.length > 1 || ie.length) {
      const A = new Set(x.filter((z) => q(z)).map((z) => String(z.actionGroupId || z.id || ""))), J = new Set(x.filter((z) => Y(z)).map((z) => ge(z.rasterObjectId || z.id || ""))), H = new Set(x.filter(ye).map((z) => String(z.id || "")));
      A.size > 0 && (i.painting.paint.strokes = (Array.isArray((Me = (we = i.painting) == null ? void 0 : we.paint) == null ? void 0 : Me.strokes) ? i.painting.paint.strokes : []).filter((z) => !A.has(String((z == null ? void 0 : z.actionGroupId) || ""))), i.painting.groups = y().filter((z) => !A.has(String((z == null ? void 0 : z.actionGroupId) || (z == null ? void 0 : z.id) || ""))), te()), J.size > 0 && (i.painting.raster_objects = K().filter((z) => !J.has(String((z == null ? void 0 : z.id) || ""))), de()), H.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((z) => H.has(String((z == null ? void 0 : z.id) || "")) ? R(z) ? (Se(z) || (z.visible = !1), !0) : !1 : !0), oe(), pe()), t.selectedId = null, t.selectedIds = [], I(), u(), D(), be(), N();
      return;
    }
    if (q(U)) {
      const A = String(U.actionGroupId || U.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((me = (Ce = i.painting) == null ? void 0 : Ce.paint) == null ? void 0 : me.strokes) ? i.painting.paint.strokes : []).filter((J) => String((J == null ? void 0 : J.actionGroupId) || "").trim() !== A), i.painting.groups = y().filter((J) => String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim() !== A), te(), t.selectedId = null, t.selectedIds = [], I(), u(), D(), be(), N();
      return;
    }
    if (Y(U)) {
      const A = ge(U.rasterObjectId || U.id || "");
      i.painting.raster_objects = K().filter((J) => String((J == null ? void 0 : J.id) || "").trim() !== A), de(), t.selectedId = null, t.selectedIds = [], I(), u(), D(), be(), N();
      return;
    }
    if (o && ae(U)) {
      f();
      return;
    }
    if (s === "stickers" || ye(U)) {
      if (R(U)) {
        if (Se(U)) return;
        U.visible = !1, pe(), I(), u(), D(), be(), N();
        return;
      }
      i.stickers = i.stickers.filter((A) => A.id !== U.id), oe(), pe(), t.selectedId = ((ue = g()[0]) == null ? void 0 : ue.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, I(), u(), D(), be(), N();
      return;
    }
    l();
  }
  function X(x, U) {
    n || (_(), x(U) && (V(), pe(), I(), u(), D(), be(), N()));
  }
  function le(x) {
    X(fe, x);
  }
  function L(x) {
    X(C, x);
  }
  function re() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", ce(), D());
  }
  return {
    connect(x) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: m,
        getActivePaintTargetDescriptor: S,
        getList: g,
        getNextStickerZIndex: v,
        getPaintingGroupList: y,
        getPaintingLayerList: j,
        getRasterObjectList: K,
        getSelected: F,
        getSelectedItems: M,
        isExternalSticker: R,
        isItemLocked: Z,
        isRasterObjectItem: Y,
        isShotItem: ae,
        isStickerHidden: Se,
        isStickerItem: ye,
        isStrokeGroupItem: q,
        isUploadingSticker: _e,
        markObjectVisualsDirty: pe,
        markPaintCompositeVisualsDirty: de,
        markPaintStrokeVisualsDirty: te,
        parseRasterObjectSelectionId: ge,
        pruneUnusedAssets: oe,
        pushHistory: I,
        releaseHiddenSelection: V,
        requestDraw: N,
        restoreUpstreamDeleted: fe,
        revertUpstreamLayer: C,
        selectedWorldSticker: O,
        stopTimelinePlayback: _,
        syncFloatingViewButtonState: P,
        syncPaintUi: ce,
        updateSelectionMenu: be,
        updateSidePanel: D,
        worldStickerEditable: b
      } = x);
    },
    clearAll: p,
    clearPaintingLayer: h,
    duplicateSelected: k,
    deleteSelectedWorldSticker: E,
    deleteSelected: $,
    restoreUpstreamDeletedCommand: le,
    revertUpstreamLayerCommand: L,
    forceCursorTool: re
  };
}
function WC(e) {
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
    vueModal: m
  } = e;
  let S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N;
  const fe = /* @__PURE__ */ new Set();
  let C = "";
  function O(me) {
    return c ? bx(me == null ? void 0 : me.dataTransfer) : ad(me == null ? void 0 : me.dataTransfer);
  }
  function _(me) {
    const ue = !!me;
    r.active !== ue && (r.active = ue, d.classList.toggle("drop-active", ue));
  }
  function P() {
    const me = new Set(
      (u.stickers || []).map((ue) => String((ue == null ? void 0 : ue.asset_id) || "")).filter((ue) => !!ue)
    );
    Object.keys(u.assets || {}).forEach((ue) => {
      me.has(ue) || (delete u.assets[ue], s.delete(ue));
    });
  }
  async function ce(me) {
    if (l || f !== "stickers" && f !== "cutout" || !En(me)) return;
    if (c) {
      oe(), await E(me);
      return;
    }
    const ue = mo("asset"), A = Mi(a, `add:${ue}`, async () => {
      try {
        const { image: J } = await uo(me);
        s.set(ue, J);
        const H = mo("st");
        u.stickers.push({
          id: H,
          asset_id: ue,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: v(30, Number(J.naturalWidth || J.width || 1), Number(J.naturalHeight || J.height || 1)),
          rot_deg: 0,
          z_index: M()
        }), de(u.stickers[u.stickers.length - 1]), F(), N(), V(), q();
        const z = await Zr(me, {
          fetchApi: (G, w) => t.fetchApi(G, w)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((G) => String((G == null ? void 0 : G.asset_id) || "") === ue).length) return;
        u.assets[ue] = z, P(), ye(), g(), N(), V(), q();
      } catch (J) {
        delete u.assets[ue], s.delete(ue);
        const H = Array.isArray(u.stickers) ? u.stickers : [], z = H.filter((T) => String((T == null ? void 0 : T.asset_id) || "") === ue);
        throw z.length && (u.stickers = H.filter((T) => String((T == null ? void 0 : T.asset_id) || "") !== ue), z.some((T) => String((T == null ? void 0 : T.id) || "") === String(i.selectedId || "")) && de(null), N(), V(), q(), g()), J;
      }
    });
    try {
      await A;
    } catch {
    }
  }
  function be() {
    var me;
    l || f !== "stickers" && f !== "cutout" || (me = m == null ? void 0 : m.openImagePicker) == null || me.call(m, "add");
  }
  function D() {
    var me;
    l || !c || (me = m == null ? void 0 : m.openImagePicker) == null || me.call(m, "add-world", yx);
  }
  async function b(me) {
    l || !c || (En(me) ? (oe(), await E(me, "world")) : Ma(me) && (oe(), await W(me)));
  }
  async function W(me) {
    C = "";
    const ue = u0(me);
    if (ue) {
      C = ue, q();
      return;
    }
    const A = Ho(u);
    u.stickers.push(Ef(A, { kind: "file", filename: "" }, k(j_))), fe.add(A), pe(A), F(), N(), V(), I(), q();
    const J = Mi(a, `add:${A}`, async () => {
      try {
        const H = await vx(me, {
          fetchApi: (B, G) => t.fetchApi(B, G)
        }), z = await _e(H);
        if (z.state !== "ready") throw new Error(z.error);
        const T = u.stickers.find((B) => B.id === A);
        if (!T) {
          fe.delete(A);
          return;
        }
        T.source = H, ye(), g();
      } catch (H) {
        throw fe.delete(A), C = String((H == null ? void 0 : H.message) || H), u.stickers = u.stickers.filter((z) => z.id !== A), i.selectedId === A && de(null), i.worldSelectedId === A && S(), ye(), g(), H;
      } finally {
        N(), V(), I(), q();
      }
    });
    try {
      await J;
    } catch {
    }
  }
  function p() {
    for (const me of [...fe]) {
      const ue = u.stickers.find((H) => H.id === me), A = ue != null && ue.source.filename ? K(ue) : null, J = A && Zh(me, A.generation);
      !ue || J && o.sceneBox(J) || !ar(ue, i.frame).active ? fe.delete(me) : J && o.sceneItemError(J) && !/\b404\b/.test(o.sceneItemError(J)) && (fe.delete(me), C = `Could not show ${ue.source.filename}: ${o.sceneItemError(J)}`);
    }
    return C || (fe.size ? "Loading 3D model…" : "");
  }
  function h() {
    return fe;
  }
  function k(me = tg) {
    const ue = { x: n.width / 2, y: n.height / 2 }, A = Y() ? o.pick(j(), ue.x, ue.y, n.width, n.height) : null;
    return me(te(), A, y());
  }
  async function E(me, ue = "sky") {
    C = "";
    const A = Ho(u), J = Mi(a, `add:${A}`, async () => {
      const { image: H } = await uo(me), z = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: v(30, Number(H.naturalWidth || H.width || 1), Number(H.naturalHeight || H.height || 1)),
        rot_deg: 0
      }, T = { kind: "file", filename: "" }, B = ue === "world" ? Ef(A, T, k()) : Tu(A, T, z, M());
      s.set(ge(B), H), u.stickers.push(B), ue === "world" ? pe(A) : de(B), F(), N(), V(), q();
      try {
        const G = await Zr(me, {
          fetchApi: (ne, se) => t.fetchApi(ne, se)
        }), w = u.stickers.find((ne) => ne.id === A);
        if (!w) return;
        w.source = Mo(G), s.set(ge(w), H), ye(), g();
      } catch (G) {
        throw u.stickers = u.stickers.filter((w) => w.id !== A), i.selectedId === A && de(null), i.worldSelectedId === A && S(), ye(), g(), G;
      } finally {
        N(), V(), q();
      }
    });
    try {
      await J;
    } catch {
    }
  }
  async function $(me, ue) {
    const A = Mi(a, `replace:${ue}:${mo("asset")}`, async () => {
      const { image: J } = await uo(me), H = await Zr(me, {
        fetchApi: (T, B) => t.fetchApi(T, B)
      }), z = u.stickers.find((T) => T.id === ue);
      if (z) {
        z.source = Mo(H), z.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const T of [z.size.value, ...z.size.keyframes.map((B) => B.value)])
          T.vFOV_deg = v(T.hFOV_deg, Number(J.naturalWidth || J.width || 1), Number(J.naturalHeight || J.height || 1));
        s.set(ge(z), J), Se(), ye(), g(), N(), V(), q();
      }
    });
    try {
      await A;
    } catch {
    }
  }
  async function X(me) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const ue = R();
    if (!ue || !ae(ue) || Z(ue) || Ct(ue) || !En(me)) return;
    if (c) {
      await $(me, ue.id);
      return;
    }
    const A = String(ue.id || ""), J = mo("asset"), H = Mi(a, `replace:${A}:${J}`, async () => {
      var ne;
      const z = (Array.isArray(u.stickers) ? u.stickers : []).find((se) => String((se == null ? void 0 : se.id) || "") === A) || null;
      if (!z || !ae(z) || Z(z)) return;
      const T = String(z.asset_id || ""), B = T ? Io(((ne = u.assets) == null ? void 0 : ne[T]) || null) : null, G = Number(z.vFOV_deg || 0), w = z.crop && typeof z.crop == "object" ? { ...z.crop } : null;
      try {
        const { image: se } = await uo(me);
        s.set(J, se), z.asset_id = J, z.vFOV_deg = v(
          Number(z.hFOV_deg || 30),
          Number(se.naturalWidth || se.width || 1),
          Number(se.naturalHeight || se.height || 1)
        ), z.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Se(), N(), V(), q();
        const ve = await Zr(me, {
          fetchApi: (xe, Fe) => t.fetchApi(xe, Fe)
        }), he = (Array.isArray(u.stickers) ? u.stickers : []).find((xe) => String((xe == null ? void 0 : xe.id) || "") === A) || null;
        if (!he || String(he.asset_id || "") !== J) return;
        u.assets[J] = ve, P(), ye(), g(), N(), V(), q();
      } catch (se) {
        delete u.assets[J], s.delete(J);
        const ve = (Array.isArray(u.stickers) ? u.stickers : []).find((he) => String((he == null ? void 0 : he.id) || "") === A) || null;
        throw ve && String(ve.asset_id || "") === J && (T && B && (u.assets[T] = B), ve.asset_id = T, ve.vFOV_deg = G, ve.crop = w ? { ...w } : null), Se(), g(), N(), V(), q(), se;
      }
    });
    try {
      await H;
    } catch {
    }
  }
  function le() {
    var ue;
    if (l) return;
    const me = R();
    !me || !ae(me) || Z(me) || Ct(me) || (ue = m == null ? void 0 : m.openImagePicker) == null || ue.call(m, "replace");
  }
  async function L() {
    if (l || f !== "stickers") return;
    if (c) {
      await re();
      return;
    }
    const me = u.assets && typeof u.assets == "object" ? u.assets : {}, ue = Object.entries(me).filter(([, J]) => {
      const H = String((J == null ? void 0 : J.type) || "").toLowerCase(), z = String((J == null ? void 0 : J.value) || "");
      return H === "dataurl" && z.startsWith("data:image");
    });
    if (!ue.length) return;
    let A = !1;
    for (const [J, H] of ue)
      try {
        const z = String((H == null ? void 0 : H.value) || "");
        if (!z) continue;
        const T = await fetch(z).then((se) => se.blob()), B = String(T.type || "image/png").split("/")[1] || "png", G = String((H == null ? void 0 : H.name) || `${J}.${B}`), w = new File([T], G, { type: T.type || "image/png" }), ne = await Zr(w, {
          fetchApi: (se, ve) => t.fetchApi(se, ve)
        });
        u.assets[J] = {
          ...ne,
          w: Number((H == null ? void 0 : H.w) || 0),
          h: Number((H == null ? void 0 : H.h) || 0)
        }, A = !0;
      } catch {
      }
    A && (g(), q());
  }
  async function re() {
    let me = !1;
    for (const ue of u.stickers) {
      const A = ue.source.data_url;
      if (A)
        try {
          const J = await fetch(A).then((B) => B.blob()), H = String(J.type || "image/png").split("/")[1] || "png", z = new File([J], `${ue.id}.${H}`, { type: J.type || "image/png" }), T = await Zr(z, {
            fetchApi: (B, G) => t.fetchApi(B, G)
          });
          ue.source = Mo(T), me = !0;
        } catch {
        }
    }
    me && (g(), q());
  }
  function x(me) {
    f !== "stickers" && f !== "cutout" || l || (me.preventDefault(), _(!0));
  }
  function U(me) {
    var H;
    if (f !== "stickers" && f !== "cutout" || l) return;
    me.preventDefault(), me.stopPropagation(), r.depth = 0, _(!1);
    const ue = Array.from(((H = me.dataTransfer) == null ? void 0 : H.files) || []), A = ue.find((z) => En(z));
    if (A) {
      ce(A);
      return;
    }
    const J = c ? ue.find((z) => Ma(z)) : null;
    J && b(J);
  }
  function ie(me) {
    f !== "stickers" && f !== "cutout" || l || O(me) && (r.depth += 1, _(!0), me.preventDefault());
  }
  function we(me) {
    f !== "stickers" && f !== "cutout" || l || (!r.active && O(me) && _(!0), r.active && me.preventDefault());
  }
  function Me(me) {
    if (f !== "stickers" && f !== "cutout" || l || !r.active) return;
    r.depth = Math.max(0, r.depth - 1);
    const ue = Number(me.clientX) <= 0 && Number(me.clientY) <= 0;
    (r.depth === 0 || ue) && _(!1);
  }
  function Ce(me) {
    f !== "stickers" && f !== "cutout" || l || (r.depth = 0, _(!1), O(me) && me.preventDefault());
  }
  return {
    connect(me) {
      ({
        clearWorldSelection: S,
        commitAndRefreshNode: g,
        computeStickerVFov: v,
        contentSphere: y,
        currentSpaceCamera: j,
        file3dEditorFile: K,
        forceCursorTool: F,
        getNextStickerZIndex: M,
        getSelected: R,
        isExternalSticker: Z,
        isSpaceView: Y,
        isStickerItem: ae,
        markObjectVisualsDirty: Se,
        pushHistory: ye,
        requestDraw: q,
        requestFile3d: _e,
        selectWorldSticker: pe,
        setSelectedItem: de,
        spaceViewState: te,
        stickerImageKey: ge,
        stopTimelinePlayback: oe,
        syncTimeline: I,
        updateSelectionMenu: V,
        updateSidePanel: N
      } = me);
    },
    addImageStickerFromFile: ce,
    addImageSticker: be,
    addToWorld: D,
    addWorldStickerFromFile: b,
    file3dImportNotice: p,
    loading3dIds: h,
    replaceSelectedImageFromFile: X,
    replaceSelectedImage: le,
    migrateLegacyEmbeddedAssets: L,
    pruneUnusedAssets: P,
    setDropCue: _,
    onCanvasDragOver: x,
    onCanvasDrop: U,
    onWindowDragEnter: ie,
    onWindowDragOver: we,
    onWindowDragLeave: Me,
    onWindowDrop: Ce
  };
}
function UC(e) {
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
    type: m,
    uiState: S
  } = e;
  let g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D = o;
  function b(H, z) {
    var G;
    const T = (G = M().space) == null ? void 0 : G.gizmo;
    if (ye() && T && be("hover", z) !== null && be("down", z))
      return r.interaction = { kind: "world_gizmo", camera: !0, mode: T.mode, start: T.transform, base: F(), changed: !1 }, n.setPointerCapture(H.pointerId), _(z), !0;
    const B = ng(F(), v(oe()));
    return q_(K(), B, z, n.width, n.height) ? (ye() || (ge(U()), ce(), P(), de()), r.interaction = { kind: "world_select" }, n.setPointerCapture(H.pointerId), !0) : !1;
  }
  function W() {
    if (s || m !== "cutout") return;
    const H = U();
    if (H) {
      ge(H), r.mode = "pano", O(It(Number(H.yaw_deg || 0)), Oe(Number(H.pitch_deg || 0), -89.9, 89.9)), ce(), P(), de({ cause: "cutout_frame" });
      return;
    }
    const z = Ym({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: It(Number(r.viewYaw || 0)),
      pitchDeg: Number(r.viewPitch || 0),
      viewFovDeg: Number(r.viewFov || 90)
    });
    d.shots = [z], ge(z), R(), r.mode = "pano", pe(), j(), ce(), P(), de({ cause: "cutout_frame" });
  }
  function p() {
    s || !u || Y() || (V(), d.camera = jS(I()), re(), ge(U()), R(), pe(), j(), ce(), P(), de({ cause: "cutout_frame" }));
  }
  function h() {
    V(), d.camera = null, ge(null), re(), pe(), j(), ce(), P(), de({ cause: "cutout_frame" });
  }
  function k(H, z) {
    u && q(H) && (d.camera.projection = z === Wi ? "erp" : "perspective", z === Wi) || X(H, z);
  }
  function E() {
    s || m !== "cutout" || (d.shots = [], r.selectedId = null, r.selectedIds = [], r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, d.active.selected_shot_id = null, pe(), j(), ce(), P(), de());
  }
  function $(H, z) {
    const T = a.frameSafeRect;
    if (!H || !T || r.mode !== "frame") return !1;
    const B = Bc * ci(T, H), G = vu(bu(T, z), B);
    return H.hFOV_deg = G.hFOV_deg, H.vFOV_deg = G.vFOV_deg, !0;
  }
  function X(H, z) {
    if (!H || H.locked === !0) return;
    const T = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, B = (() => {
      const se = String(H.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(se)) {
        const [xe, Fe] = se.split(":").map((Le) => Number(Le));
        if (Number.isFinite(xe) && Number.isFinite(Fe)) return xe >= Fe;
      }
      const ve = Number(H.hFOV_deg || 64), he = Number(H.vFOV_deg || 40);
      return Math.abs(ve - he) > 1e-6 ? ve >= he : pi(H) >= 1;
    })();
    let [G, w] = T[String(z)] || T["1:1"];
    G >= w !== B && ([G, w] = [w, G]);
    const ne = G / w;
    if (!$(H, ne)) {
      const se = Oe(Number(H.vFOV_deg || 40), 1, 179);
      H.vFOV_deg = se, H.hFOV_deg = Ds(se, ne);
    }
    H.aspect_id = `${G}:${w}`;
  }
  function le(H, z, T) {
    if (!H || H.locked === !0) return !1;
    const B = Yo(z, T);
    if (!B) return !1;
    const G = B.ratio;
    if (!$(H, G)) {
      const w = Oe(Number(H.vFOV_deg || 40), 1, 179);
      H.vFOV_deg = w, H.hFOV_deg = Ds(w, G);
    }
    return H.aspect_id = B.label, !0;
  }
  function L(H) {
    if (!H || H.locked === !0) return;
    const z = String(H.aspect_id || "").trim(), T = Rr(H), B = T.tanHalfX / Math.max(1e-12, T.tanHalfY), G = 1 / Math.max(1e-12, B);
    if (!$(H, G)) {
      const w = Oe(Number(H.vFOV_deg || 60), 1, 179);
      H.vFOV_deg = w, H.hFOV_deg = Ds(w, G);
    }
    if (/^\d+:\d+$/.test(z)) {
      const [w, ne] = z.split(":");
      H.aspect_id = `${ne}:${w}`;
    } else
      H.aspect_id = rs(H);
  }
  function re(H = !0) {
    var B, G;
    if (!t) return;
    const z = D;
    if (!y()) {
      D = null, (B = d.shots) != null && B.length && (d.shots = []), z && x(z, null);
      return;
    }
    const T = (G = d.shots) == null ? void 0 : G[0];
    H && T && D && KS(d.camera, r.frame, T, D), D = Dh(d.camera, r.frame), T ? Object.assign(T, D, { position: [...D.position] }) : d.shots = [{ ...D, position: [...D.position] }], z || x(null, D);
  }
  function x(H, z) {
    var w, ne;
    !z && r.mode === "frame" && _e(H);
    const T = (z == null ? void 0 : z.position) ?? [0, 0, 0];
    if (((ne = (w = r.viewTransition) == null ? void 0 : w.end) == null ? void 0 : ne.mode) === "3dof") {
      C({ ...I(), position: T }, r.viewTransition.end);
      return;
    }
    if (r.mode !== "pano" || r.spaceMode !== "3dof" || !ae()) return;
    const B = (H == null ? void 0 : H.position) ?? [0, 0, 0];
    if (B.every((se, ve) => se === T[ve])) return;
    const G = { ...I(), position: B };
    g({ mode: "6dof", position: B, moved: !0 }), r.viewDistance = G.distance, C({ ...G, position: T }, { mode: "3dof", moved: !1 });
  }
  function U() {
    if (!l) return null;
    const H = Array.isArray(d.shots) ? d.shots : [];
    if (!H.length) return null;
    const z = String(d.active.selected_shot_id || "");
    return H.find((T) => String((T == null ? void 0 : T.id) || "") === z) || H[0] || null;
  }
  function ie(H, z, T = {}) {
    var w;
    if ((H == null ? void 0 : H.kind) !== "roll_frame" || !H.shot) return;
    H.accumulatedRad += Wm(z, H.lastAngle), H.lastAngle = z;
    const B = Um(H.start.roll_deg, H.accumulatedRad, {
      shiftKey: T.shiftKey,
      altKey: H.altStarted ? !1 : T.altKey
    });
    H.shot.roll_deg = B, H.changed = H.changed || Math.abs(H.accumulatedRad) > 1e-9;
    const G = (((w = S.sidePanel) == null ? void 0 : w.params) || []).find((ne) => ne.key === "roll_deg");
    G && (G.value = B, G.displayValue = Vi(B), G.fillPct = (B + 180) / 360 * 100), N(), Ce(H), de({ localOnly: !0 });
  }
  function we(H, z, T = {}) {
    var w;
    if ((H == null ? void 0 : H.kind) !== "roll_frame" || !H.shot || !H.rollGesture) return;
    const B = Zg(H.rollGesture, z, T);
    if (!B) return;
    H.rollGesture = B.gesture, H.center = B.gesture.center, H.lastAngle = B.gesture.lastAngle, H.accumulatedRad = B.gesture.accumulatedRad, H.shot.roll_deg = B.rollDeg, H.changed = H.changed || Math.abs(B.gesture.accumulatedRad) > 1e-9;
    const G = (((w = S.sidePanel) == null ? void 0 : w.params) || []).find((ne) => ne.key === "roll_deg");
    G && (G.value = B.rollDeg, G.displayValue = Vi(B.rollDeg), G.fillPct = (B.rollDeg + 180) / 360 * 100), N(), Ce(H), de({ localOnly: !0 });
  }
  function Me(H, z) {
    const T = te(H);
    return Math.atan2(T.y - z.y, T.x - z.x);
  }
  function Ce(H) {
    var ne, se;
    if ((H == null ? void 0 : H.kind) !== "roll_frame" || !H.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const z = Z(H.shot), T = (ne = n.getBoundingClientRect) == null ? void 0 : ne.call(n), B = (se = c.getBoundingClientRect) == null ? void 0 : se.call(c);
    if (!z || !T || !B || n.width <= 0 || n.height <= 0) return;
    const G = T.width / n.width, w = T.height / n.height;
    S.tooltip.text = `${Vi(H.shot.roll_deg)}°`, S.tooltip.left = T.left - B.left + (z.x + z.w * 0.5) * G, S.tooltip.top = T.top - B.top + (z.y + z.h * 0.5) * w + 12, S.tooltip.variant = "roll", S.tooltip.visible = !0;
  }
  function me(H) {
    var w;
    if (H.button !== 0 || s || r.mode !== "frame") return;
    const z = U();
    if (!z || z.locked === !0) return;
    const T = Z(z);
    if (!T) return;
    const B = { x: T.x + T.w * 0.5, y: T.y + T.h * 0.5 }, G = Me(H, B);
    r.interaction = {
      kind: "roll_frame",
      shot: z,
      center: B,
      lastAngle: G,
      accumulatedRad: 0,
      start: { roll_deg: Number(z.roll_deg ?? z.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (w = i.setPointerCapture) == null || w.call(i, H.pointerId), H.preventDefault(), N(), Ce(r.interaction), de({ localOnly: !0 });
  }
  function ue(H) {
    var z;
    ((z = r.interaction) == null ? void 0 : z.kind) !== "roll_frame" || r.interaction.source !== "knob" || ie(
      r.interaction,
      Me(H, r.interaction.center),
      H
    );
  }
  function A() {
    const H = r.interaction;
    (H == null ? void 0 : H.kind) !== "roll_frame" || H.source !== "knob" || (H.changed && (pe(), j(), ce()), r.interaction = null, Se(), fe(), N(), de());
  }
  function J(H) {
    const z = r.mode === "frame" && !s ? U() : null;
    !z || z.locked === !0 || Math.abs(Number(z.roll_deg ?? z.rot_deg ?? 0)) <= 1e-9 || (z.roll_deg = 0, pe(), j(), ce(), N(), de(), H.preventDefault());
  }
  return {
    connect(H) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: v,
        cameraShoots: y,
        commitAndRefreshNode: j,
        currentSpaceCamera: K,
        cutoutCamera: F,
        editorViewInput: M,
        forceCursorTool: R,
        getFrameViewRect: Z,
        hasCamera: Y,
        hasSpaceContent: ae,
        hideTooltip: Se,
        isCameraSelected: ye,
        isShotItem: q,
        leaveFrameView: _e,
        pushHistory: pe,
        requestDraw: de,
        screenPos: te,
        setSelectedItem: ge,
        spaceScale: oe,
        spaceViewState: I,
        stopTimelinePlayback: V,
        syncFrameRollKnob: N,
        syncViewToggleState: fe,
        transitionView: C,
        turnViewTo: O,
        updateCursor: _,
        updateSelectionMenu: P,
        updateSidePanel: ce,
        worldGizmoPointer: be
      } = H);
    },
    addCutoutFrame: W,
    addStudioCamera: p,
    deleteStudioCamera: h,
    setShotAspect: k,
    clearCutoutFrame: E,
    applyCutoutAspectCustom: le,
    rotateCutoutAspect90: L,
    syncCutoutShot: re,
    getActiveCutoutShot: U,
    startCameraPress: b,
    applySharedRollInteractionPoint: we,
    onFrameRollKnobPointerDown: me,
    onFrameRollKnobPointerMove: ue,
    finishKnobRoll: A,
    onFrameRollKnobDoubleClick: J
  };
}
function BC(e) {
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
    uiState: m,
    videoTransportEl: S
  } = e;
  let g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te = null, ge = !1;
  function oe(x) {
    if (r.mode = "pano", !x) return;
    v();
    const U = ye().distance;
    r.viewYaw = It(x.yaw_deg), r.viewPitch = Oe(x.pitch_deg, -89.9, 89.9), r.viewFov = Oe(x.hFOV_deg, 35, 140), r.spaceMode === "6dof" && g({ mode: "6dof", position: [...x.position], moved: !0 }), r.viewDistance = U, d.backgroundDirty = !0;
  }
  function I() {
    var B, G, w, ne, se;
    if (!n) return null;
    const x = (B = n.getBoundingClientRect) == null ? void 0 : B.call(n), U = Number((x == null ? void 0 : x.width) || 0) > 0 ? n.width / x.width : 1, ie = Number((x == null ? void 0 : x.height) || 0) > 0 ? n.height / x.height : 1;
    d.frameCanvasScale = Math.min(U, ie);
    let we = 24, Me = 24;
    const Ce = Math.max(we + 1, n.width - 24);
    let me = Math.max(Me + 1, n.height - 24);
    const ue = (G = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : G.call(f), A = (w = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : w.call(a);
    let J = 24;
    ue && x && ue.width > 0 && ue.height > 0 && (J = Math.max(J, (ue.right - x.left) * U + wp)), A && x && A.width > 0 && A.height > 0 && ((ne = m.frameRail) == null ? void 0 : ne.visible) === !0 && (J = Math.max(J, (x.right - A.left) * U + wp)), we = Math.max(we, J);
    const H = Math.min(Ce, n.width - J);
    let z = 24;
    const T = (se = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : se.call(s);
    if (T && x && T.width > 0 && T.height > 0 && (z = Math.max(z, (T.bottom - x.top) * ie + Xl)), [l, S].forEach((ve) => {
      var Fe;
      if (!ve || !x) return;
      const he = getComputedStyle(ve);
      if (he.display === "none" || he.visibility === "hidden" || Number(he.opacity) <= 0) return;
      const xe = (Fe = ve.getBoundingClientRect) == null ? void 0 : Fe.call(ve);
      !xe || xe.width <= 0 || xe.height <= 0 || (z = Math.max(z, (x.bottom - xe.top) * ie + Xl));
    }), o && x) {
      const ve = getComputedStyle(o);
      ve.display !== "none" && ve.visibility !== "hidden" && Number(ve.opacity) > 0 && (z = Math.max(z, (oA + Xl) * ie));
    }
    return Me = Math.max(Me, z), me = Math.max(Me + 1, Math.min(me, n.height - z)), {
      x: we,
      y: Me,
      w: Math.max(1, H - we),
      h: Math.max(1, me - Me)
    };
  }
  function V(x = K()) {
    if (!x || !n) return null;
    const U = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, n.width - 48),
      h: Math.max(1, n.height - 48)
    };
    return P1(U, x, Bc * ci(U, x));
  }
  function N(x = K()) {
    const U = V(x);
    return U ? { x: U.x, y: U.y, w: U.w, h: U.h } : null;
  }
  function fe() {
    return u && !!K();
  }
  function C(x, U) {
    const ie = K();
    if (!ie || ie.locked === !0) return !1;
    const we = Number(U) > 0, Me = Xm(ie, U);
    if (!Me) return !1;
    if (we) {
      const Ce = Bc * ci(
        d.frameSafeRect || { w: n.width, h: n.height },
        Me
      ), me = Su({ width: n.width, height: n.height }, Ce);
      if (me.halfW < n.width * 0.5 - 1e-6 || me.halfH < n.height * 0.5 - 1e-6) return !1;
    }
    return ie.hFOV_deg = Me.hFOV_deg, ie.vFOV_deg = Me.vFOV_deg, O(), de(), !0;
  }
  function O() {
    r.frameWheelChanged = !0, r.frameWheelCommitTimer && window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = window.setTimeout(() => {
      r.frameWheelCommitTimer = 0, r.frameWheelChanged && (r.frameWheelChanged = !1, Z(), y(), de());
    }, 180);
  }
  function _() {
    return t && r.mode === "frame" && F();
  }
  function P() {
    const x = K(), U = V(x);
    return x && U ? og(x, U, { width: n.width, height: n.height }) : null;
  }
  function ce() {
    var x;
    return ((x = j()) == null ? void 0 : x.radius) || Wn;
  }
  function be(x) {
    const { position: U, yaw_deg: ie, pitch_deg: we, roll_deg: Me, hFOV_deg: Ce } = x.shot;
    return { position: U, yaw_deg: ie, pitch_deg: we, roll_deg: Me, hFOV_deg: Ce, distance: ce() };
  }
  function D(x, U) {
    const { rect: ie } = x;
    return i.pickSurface(ae(x.shot), U.x - ie.x, U.y - ie.y, ie.w, ie.h);
  }
  function b(x, U, ie) {
    return Mc(U, D(x, ie), null, Se());
  }
  function W(x) {
    return JSON.stringify([be(x), x.rect]);
  }
  function p(x) {
    const U = K();
    U.position = [...x.position], U.yaw_deg = x.yaw_deg, U.pitch_deg = x.pitch_deg;
  }
  function h(x, U) {
    const ie = K();
    !ie || c || ie.locked === !0 || (r.interaction = {
      kind: "pan_frame",
      shot: ie,
      last: x,
      start: { yaw_deg: Number(ie.yaw_deg || 0), pitch_deg: Number(ie.pitch_deg || 0) },
      changed: !1
    }, pe(x), n.setPointerCapture(U));
  }
  function k(x, U, ie) {
    const we = P();
    if (!we || c) return;
    const Me = be(we);
    r.interaction = x === "orbit" ? { kind: "frame_orbit", last: U, pivot: b(we, Me, U), changed: !1 } : { kind: "frame_pan", last: U, depth: Kh(Me, Se()), changed: !1 }, pe(U), n.setPointerCapture(ie);
  }
  function E(x, U) {
    const ie = P();
    if (!ie) return;
    const we = be(ie), Me = U.x - x.last.x, Ce = U.y - x.last.y;
    p(x.kind === "frame_pan" ? Uh(we, Me, Ce, ie.rect.w, ie.rect.h, x.depth) : Wh(we, Me, Ce, n.height, x.pivot)), x.changed = x.changed || Me !== 0 || Ce !== 0, x.last = U, Y({ localOnly: !0, cause: "frame_view" });
  }
  function $(x, U) {
    const ie = P();
    if (!ie || c) return;
    const we = be(ie), Me = performance.now(), Ce = { x: x.x, y: x.y, time: Me, key: i.contentRevision(), view: W(ie) };
    if (!Gh(te, Ce)) {
      const me = D(ie, x);
      te = { ...Ce, cost: performance.now() - Me, hit: me };
    }
    p(Bh(we, Mc(we, te.hit, null, Se()), U, Se())), te.view = W(P() ?? ie), te.wheelTime = Me, O(), de(), Y({ localOnly: !0, cause: "frame_view" });
  }
  function X(x, U) {
    const ie = K();
    if (!ie || c || ie.locked === !0) return !1;
    const we = B0(ie, x, U);
    return we === ie ? !1 : (q(), ie.position = we.position, ge = !0, !0);
  }
  function le() {
    return ge ? (ge = !1, Z(), y(), de(), !0) : !1;
  }
  function L() {
    return r.frameWheelCommitTimer && (window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = 0), r.frameWheelChanged ? (r.frameWheelChanged = !1, Z(), y(), de(), !0) : !1;
  }
  function re() {
    const x = r.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const U = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, U && M(), r.interaction = null, R(), _e(), de(), pe(r.pointerPos), Y({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: g,
        cancelViewTransition: v,
        commitAndRefreshNode: y,
        contentSphere: j,
        getActiveCutoutShot: K,
        hasSpaceContent: F,
        hideTooltip: M,
        invalidateLivePaintPreviewCaches: R,
        pushHistory: Z,
        requestDraw: Y,
        shotViewCamera: ae,
        spaceScale: Se,
        spaceViewState: ye,
        stopTimelinePlayback: q,
        syncViewToggleState: _e,
        updateCursor: pe,
        updateSidePanel: de
      } = x);
    },
    leaveFrameView: oe,
    measureFrameSafeRect: I,
    getFrameViewLayout: V,
    getFrameViewRect: N,
    supportsFramePainting: fe,
    zoomFrameViewAt: C,
    isFreeFrameView: _,
    frameContext: P,
    frameViewDistance: ce,
    frameSpaceView: be,
    frameTarget: b,
    startPanFrame: h,
    startFrameDrag: k,
    dragFrame: E,
    zoomFrameAt: $,
    flushFrameWheelCommit: L,
    cancelFrameCameraGesture: re,
    moveFrameByKeys: X,
    endFrameKeyMove: le
  };
}
function YC(e) {
  const {
    editor: t,
    paintCursorEl: n,
    paintSizePreviewEl: r,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y = 0;
  function ae() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function Se() {
    return String(ae() || "") === "lasso_fill";
  }
  function ye() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function q(b, W) {
    const p = Number(W || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, p / 2048)
    };
  }
  function _e(b) {
    const W = String(b || "").trim();
    return W === "eraser" ? pr : hn[W] ? W : t.activeBrushPresetId || pr;
  }
  function pe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (ye() || Z());
  }
  function de() {
    var b;
    return pe() && ((b = t.pointerPos) == null ? void 0 : b.inside) === !0;
  }
  function te(b, W = !0) {
    const p = Number((b == null ? void 0 : b.x) || 0), h = Number((b == null ? void 0 : b.y) || 0), k = W !== !1, E = t.pointerPos || { x: 0, y: 0, inside: !1 }, $ = E.inside !== k || Math.abs(E.x - p) > 0.01 || Math.abs(E.y - h) > 0.01;
    return t.pointerPos = { x: p, y: h, inside: k }, $;
  }
  function ge() {
    var re, x;
    if (!de()) return null;
    const b = t.primaryTool === "mask" ? "mask" : "paint", W = b === "mask" ? t.maskTool : t.paintTool, p = _e(W), h = hn[p] || hn[pr], k = Number(t.brushSizes[p] ?? 10), E = Math.max(1, k) * Math.max(0.1, Number(h.sizeScale ?? 1)), $ = Math.max(3, E * 0.5), X = b === "mask" ? W === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : W === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : wn(t.paintColor), le = b === "mask" ? W === "lasso_fill" ? 0.18 : 0.2 : W === "eraser" ? 0.06 : Oe(Math.max(0.16, Number(X.a ?? 1) * 0.3), 0.16, 0.52), L = b === "mask" ? 0.95 : W === "eraser" ? 0.75 : Oe(Math.max(0.46, Number(X.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: b,
      toolKind: W,
      preset: h,
      radius: $,
      fillStyle: Qn(X, le),
      strokeStyle: Qn(X, L),
      x: Number(((re = t.pointerPos) == null ? void 0 : re.x) || 0),
      y: Number(((x = t.pointerPos) == null ? void 0 : x.y) || 0),
      hotspotX: $,
      hotspotY: $
    };
  }
  function oe() {
    var U, ie, we;
    const b = ge();
    if (!n) return;
    if (!b) {
      n.style.display = "none";
      return;
    }
    let W = b.radius * 2, p = b.radius * 2, h = "999px", k = 0, E = b.fillStyle, $ = "1px solid rgba(222, 222, 222, 0.72)", X = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const le = "rgba(222, 222, 222, 0.72)", L = "rgba(52, 52, 52, 0.72)";
    let re = Number(b.hotspotX ?? W * 0.5), x = Number(b.hotspotY ?? p * 0.5);
    if (b.toolKind === "lasso_fill")
      W = Ea, p = Ea, h = "0", $ = "0", X = "none", re = lA, x = cA, E = hA(b.fillStyle, L, le);
    else if (b.layerKind === "mask")
      E = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (b.toolKind === "marker") {
      const Me = Math.max(1, Number(((U = b.preset) == null ? void 0 : U.aspect) ?? 1));
      W = Math.max(10, b.radius * 2 * Me), p = Math.max(6, b.radius * 2), h = `${Math.min(6, p * 0.42)}px`, k = Number(((we = (ie = b.preset) == null ? void 0 : ie.angle) == null ? void 0 : we.value) || 0) * ui;
    } else b.toolKind === "brush" ? E = `radial-gradient(circle at 50% 50%, ${b.strokeStyle} 0%, ${b.fillStyle} 45%, rgba(0,0,0,0) 100%)` : b.toolKind === "eraser" && (E = "rgba(255,255,255,0.14)");
    n.style.display = "block", n.style.width = `${Math.round(W)}px`, n.style.height = `${Math.round(p)}px`, n.style.borderRadius = h, n.style.border = $, n.style.boxShadow = X, n.style.background = E, n.style.backgroundRepeat = "no-repeat", n.style.backgroundPosition = "center", n.style.backgroundSize = "contain", n.style.transform = `translate(${Math.round(b.x - re)}px, ${Math.round(b.y - x)}px) rotate(${k}deg)`;
  }
  function I() {
    var ue;
    if (!r || !i) return;
    const b = t.primaryTool === "mask" ? "mask" : "paint", W = b === "mask" ? t.maskTool : t.paintTool;
    if (W === "lasso_fill") return;
    const p = _e(W), h = hn[p] || hn[pr], k = Number(t.brushSizes[p] ?? 10), E = Math.max(1, k) * Math.max(0.1, Number(h.sizeScale ?? 1)), $ = Math.max(6, E * 0.5), X = W === "eraser", le = b === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : X ? { r: 1, g: 1, b: 1, a: 0.22 } : wn(t.paintColor), L = b === "mask" ? Qn(le, 0.22) : X ? "rgba(255,255,255,0.14)" : Qn(le, Oe(Math.max(0.18, Number(le.a ?? 1) * 0.34), 0.18, 0.56)), re = b === "mask" ? Qn(le, 0.96) : X ? "rgba(255,255,255,0.72)" : Qn(le, Oe(Math.max(0.56, Number(le.a ?? 1) * 0.96), 0.56, 1));
    let x = $ * 2, U = $ * 2, ie = "999px", we = 0, Me = L;
    const Ce = "rgba(222, 222, 222, 0.72)", me = "rgba(52, 52, 52, 0.72)";
    if (b === "mask")
      Me = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (W === "marker") {
      const A = Math.max(1, Number((h == null ? void 0 : h.aspect) ?? 1));
      x = Math.max(16, $ * 2 * A), U = Math.max(10, $ * 2), ie = `${Math.min(8, U * 0.42)}px`, we = Number(((ue = h == null ? void 0 : h.angle) == null ? void 0 : ue.value) || 0) * ui;
    } else W === "brush" ? Me = `radial-gradient(circle at 50% 50%, ${re} 0%, ${L} 48%, rgba(0,0,0,0) 100%)` : W === "lasso_fill" ? (x = Math.max(18, $ * 1.8), U = x, Me = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${re} 43%, ${re} 58%, rgba(0,0,0,0) 59%)`) : X && (Me = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(x)}px`, i.style.height = `${Math.round(U)}px`, i.style.borderRadius = ie, i.style.background = Me, i.style.border = `1px solid ${Ce}`, i.style.boxShadow = `0 0 0 1px ${me}`, i.style.transform = `rotate(${we}deg)`, Y && (clearTimeout(Y), Y = 0), r.classList.remove("fade-out"), r.classList.add("show");
  }
  function V() {
    !r || !r.classList.contains("show") || (r.classList.add("fade-out"), Y && clearTimeout(Y), Y = window.setTimeout(() => {
      r.classList.remove("show", "fade-out"), Y = 0;
    }, 180));
  }
  function N(b, W, p, h) {
    const k = _e(W), E = hn[k] || hn[pr], $ = t.brushSizes[k] ?? 10, X = Math.max(1, $) * Math.max(0.1, E.sizeScale ?? 1), le = q(h, X), L = p.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), re = {
      id: Ci(b),
      actionGroupId: Ci("ag"),
      targetSpace: h && typeof h == "object" ? { ...h, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: W,
      size: X,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: le.radiusModel,
      radiusValue: le.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: L.map((x) => ({ ...x })),
        points: L.map((x) => ({ ...x }))
      }
    };
    return _p(re, E), t.mode, Number(E.aspect ?? 1), Number(re.aspect ?? 1), String(re.stampKind || ""), Number(re.size || 0), String(re.radiusModel || ""), Number(re.radiusValue || 0), { ...re.targetSpace }, re;
  }
  function fe(b, W, p, h) {
    const k = p.map((le) => ({
      ...le,
      t: Number((le == null ? void 0 : le.t) || 0),
      widthScale: Number.isFinite(Number(le == null ? void 0 : le.widthScale)) ? Math.max(0, Number(le.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(le == null ? void 0 : le.pressureLike)) ? Math.max(0, Number(le.pressureLike)) : 1
    })), E = _e(W), $ = hn[E] || hn[pr], X = {
      id: Ci(b),
      actionGroupId: Ci("ag"),
      targetSpace: h && typeof h == "object" ? { ...h, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: W,
      size: 10,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: k.map((le) => ({ ...le }))
      }
    };
    return _p(X, $), t.mode, Number($.aspect ?? 1), Number(X.aspect ?? 1), String(X.stampKind || ""), { ...X.targetSpace }, X;
  }
  function C(b) {
    const W = o.painting || (o.painting = fi(null)), p = W[b] || (W[b] = { strokes: [] });
    return Array.isArray(p.strokes) || (p.strokes = []), p.strokes;
  }
  function O(b, W, p = performance.now()) {
    let h;
    if (t.mode === "frame") {
      const L = f();
      if (!L || (h = R(W, L, p), !h)) return !1;
    } else
      h = M(W, p);
    if (!h) return !1;
    const k = b.stroke.geometry.rawPoints || b.stroke.geometry.points, E = b.stroke.geometry.points, $ = k[k.length - 1];
    if ($) {
      const L = Math.abs(Number(h.u ?? h.x ?? 0) - Number($.u ?? $.x ?? 0)), re = Math.abs(Number(h.v ?? h.y ?? 0) - Number($.v ?? $.y ?? 0));
      if (L < 15e-4 && re < 15e-4) return !1;
    }
    const X = {
      ...h,
      t: Number((h == null ? void 0 : h.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    k.push({ ...X }), E.push({ ...X });
    const le = m(b);
    if (le) {
      const L = t.paintEngine.ensureTarget(le);
      t.paintEngine.appendStrokePoint(L, Number(X.u ?? 0), Number(X.v ?? 0), b.stroke);
    }
    return !0;
  }
  function _(b, W, p = performance.now()) {
    var $, X;
    let h;
    if (t.mode === "frame") {
      const le = f();
      if (!le) return !1;
      h = R(W, le, p);
    } else
      h = M(W, p);
    const k = (X = ($ = b == null ? void 0 : b.stroke) == null ? void 0 : $.geometry) == null ? void 0 : X.points;
    if (!h || !Array.isArray(k)) return !1;
    const E = k[k.length - 1];
    if (E) {
      const le = Math.abs(Number(h.u ?? h.x ?? 0) - Number(E.u ?? E.x ?? 0)), L = Math.abs(Number(h.v ?? h.y ?? 0) - Number(E.v ?? E.y ?? 0));
      if (le < 15e-4 && L < 15e-4) return !1;
    }
    return k.push({
      ...h,
      t: Number((h == null ? void 0 : h.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function P(b) {
    var A, J, H, z, T;
    const W = (b == null ? void 0 : b.stroke) || null;
    if (!W || (b == null ? void 0 : b.layerKind) !== "paint" || String((W == null ? void 0 : W.toolKind) || "") !== "eraser") return !1;
    F();
    const p = m(), h = c(p.width, p.height);
    if (!K(h, W, { w: p.width, h: p.height })) return !1;
    const k = ((J = (A = h.ctx) == null ? void 0 : A.getImageData(0, 0, p.width, p.height)) == null ? void 0 : J.data) || null;
    if (!k) return !1;
    const E = new Map(g().map((B) => [String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim(), B ? { ...B } : null])), $ = [], X = [], le = [...v().filter((B) => String((B == null ? void 0 : B.layerKind) || "paint") !== "paint")];
    let L = !1, re = S().reduce((B, G) => Math.max(B, Number((G == null ? void 0 : G.z_index) || 0)), -1) + 1;
    function x(B, G, w, ne = 8) {
      let se = G, ve = w, he = -1, xe = -1;
      for (let Fe = 0; Fe < w; Fe += 1)
        for (let Le = 0; Le < G; Le += 1)
          B[(Fe * G + Le) * 4 + 3] <= ne || (Le < se && (se = Le), Fe < ve && (ve = Fe), Le > he && (he = Le), Fe > xe && (xe = Fe));
      return he < se || xe < ve ? null : { minX: se, minY: ve, maxX: he, maxY: xe };
    }
    const U = x(k, p.width, p.height, 8);
    if (!U) return !1;
    function ie(B, G) {
      return !B || !G ? !1 : !(B.maxX < G.minX || G.maxX < B.minX || B.maxY < G.minY || G.maxY < B.minY);
    }
    function we(B, G) {
      const w = d((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "", "paint", G);
      if (!w) return null;
      const ne = w.centerUv.u - w.halfW, se = w.centerUv.u + w.halfW, ve = w.centerUv.v - w.halfH, he = w.centerUv.v + w.halfH, xe = p.width, Fe = p.height;
      return {
        minX: Math.floor((ne % 1 + 1) % 1 * xe),
        maxX: Math.ceil((se % 1 + 1) % 1 * xe),
        minY: Math.floor(Oe(ve, 0, 1) * Fe),
        maxY: Math.ceil(Oe(he, 0, 1) * Fe),
        wraps: se - ne >= 1 || ne < 0 || se > 1
      };
    }
    function Me(B) {
      const G = (B == null ? void 0 : B.bbox) || null;
      if (!G) return null;
      const w = (B == null ? void 0 : B.transform) || {}, ne = p.width, se = p.height, ve = Number(G.u0 || 0) + Number(w.du || 0), he = Number(G.u1 || 0) + Number(w.du || 0), xe = Number(G.v0 || 0) + Number(w.dv || 0), Fe = Number(G.v1 || 0) + Number(w.dv || 0);
      return {
        minX: Math.floor((ve % 1 + 1) % 1 * ne),
        maxX: Math.ceil((he % 1 + 1) % 1 * ne),
        minY: Math.floor(Oe(xe, 0, 1) * se),
        maxY: Math.ceil(Oe(Fe, 0, 1) * se),
        wraps: he - ve >= 1 || ve < 0 || he > 1
      };
    }
    function Ce(B) {
      return B ? B.wraps ? ie(U, { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY }) || ie(U, { minX: B.minX, maxX: p.width - 1, minY: B.minY, maxY: B.maxY }) : ie(U, B) : !0;
    }
    function me(B) {
      if (!B) return { touched: !1, canvas: null };
      const G = c(p.width, p.height, { readback: !0 });
      G.ctx.drawImage(B, 0, 0);
      const w = G.ctx.getImageData(0, 0, p.width, p.height);
      G.ctx.save(), G.ctx.globalCompositeOperation = "destination-out", G.ctx.drawImage(h.canvas, 0, 0), G.ctx.restore();
      const ne = G.ctx.getImageData(0, 0, p.width, p.height);
      for (let se = 0; se < p.width * p.height; se += 1) {
        if (k[se * 4 + 3] <= 8) continue;
        const he = w.data[se * 4 + 3], xe = ne.data[se * 4 + 3];
        if (he > xe)
          return { touched: !0, canvas: G.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ue(B, G, w) {
      const ne = Number(w == null ? void 0 : w.z_index), se = l(B, G, w).map((ve, he) => ({
        ...ve,
        z_index: Number.isFinite(ne) ? ne + he * 1e-3 : re + he * 1e-3
      }));
      return se.length && (re = Math.max(re, ...se.map((ve) => Number((ve == null ? void 0 : ve.z_index) || 0))) + 1), se;
    }
    for (const B of g()) {
      const G = String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim();
      if (!G) continue;
      const w = y(G, "paint");
      if (!Ce(we(B, w))) {
        X.push(B), $.push(...w);
        continue;
      }
      const ne = ((z = (H = t.paintEngine) == null ? void 0 : H.getGroupTarget) == null ? void 0 : z.call(H, G)) || null, se = ((T = ne == null ? void 0 : ne.committedPaint) == null ? void 0 : T.canvas) || null;
      if (!se) {
        X.push(B), $.push(...w);
        continue;
      }
      const ve = me(se);
      if (!ve.touched || !ve.canvas) {
        X.push(B), $.push(...w);
        continue;
      }
      L = !0;
      const he = ue(ve.canvas, "paint", E.get(G) || B || {});
      le.push(...he);
    }
    for (const B of v().filter((G) => String((G == null ? void 0 : G.layerKind) || "paint") === "paint")) {
      if (!Ce(Me(B))) {
        le.push(B);
        continue;
      }
      const G = s(B, null);
      if (!G) {
        le.push(B);
        continue;
      }
      const w = me(G);
      if (!w.touched || !w.canvas) {
        le.push(B);
        continue;
      }
      L = !0;
      const ne = ue(w.canvas, "paint", B);
      le.push(...ne);
    }
    return L ? (o.painting.paint.strokes = $, o.painting.groups = X.sort((B, G) => Number((B == null ? void 0 : B.z_index) || 0) - Number((G == null ? void 0 : G.z_index) || 0)), o.painting.raster_objects = le.sort((B, G) => Number((B == null ? void 0 : B.z_index) || 0) - Number((G == null ? void 0 : G.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ce(b) {
    var $, X, le, L, re;
    if ((((X = ($ = b.stroke) == null ? void 0 : $.geometry) == null ? void 0 : X.rawPoints) || ((L = (le = b.stroke) == null ? void 0 : le.geometry) == null ? void 0 : L.points) || []).length >= 1) {
      D(b);
      const x = m(b);
      x && (String(((re = b.stroke) == null ? void 0 : re.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(x) : t.paintEngine.commitActiveStroke(b.stroke, x)), b._hasCommittedSegments = !0;
    }
    const p = b.stroke, h = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, k = N(b.layerKind, p.toolKind, [], h);
    k.actionGroupId = p.actionGroupId, b.stroke = k;
    const E = m(b);
    E && t.paintEngine.beginStroke(k, E);
  }
  function be(b) {
    var $, X;
    if ((((X = ($ = b.stroke) == null ? void 0 : $.geometry) == null ? void 0 : X.points) || []).length >= 3) {
      D(b);
      const le = m(b);
      le && t.paintEngine.commitActiveStroke(b.stroke, le), b._hasCommittedSegments = !0;
    }
    const p = b.stroke, h = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, k = fe(b.layerKind, p.toolKind, [], h);
    k.actionGroupId = p.actionGroupId, b.stroke = k;
    const E = m(b);
    E && t.paintEngine.beginStroke(k, E);
  }
  function D(b) {
    var E, $, X, le;
    const W = ((E = b == null ? void 0 : b.stroke) == null ? void 0 : E.geometry) || null;
    if (!W) return !1;
    const p = String((($ = b == null ? void 0 : b.stroke) == null ? void 0 : $.toolKind) || "pen");
    if (b.layerKind === "paint" && p === "eraser")
      return W.geometryKind !== "lasso_fill" && (W.processedPoints = j(W.rawPoints || W.points || [], b.stroke.targetSpace, !0)), P(b);
    const h = b.layerKind === "paint" && p !== "eraser";
    if (W.geometryKind === "lasso_fill")
      return (Array.isArray(W.points) ? W.points : []).length < 3 ? !1 : (h && u((X = b.stroke) == null ? void 0 : X.actionGroupId), C(b.layerKind).push(b.stroke), !0);
    const k = W.rawPoints || W.points || [];
    return k.length < 1 ? !1 : (W.processedPoints = j(k, b.stroke.targetSpace, !0), h && u((le = b.stroke) == null ? void 0 : le.actionGroupId), C(b.layerKind).push(b.stroke), !0);
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
        getActivePaintTargetDescriptor: m,
        getDisplayListObjects: S,
        getPaintingGroupList: g,
        getRasterObjectList: v,
        getStrokeGroupStrokes: y,
        processFreehandPoints: j,
        rasterizeStrokeToSurface: K,
        rebuildPaintEngineIfNeeded: F,
        screenPosToErpPoint: M,
        screenPosToFrameAsErpPoint: R,
        supportsFramePainting: Z
      } = b);
    },
    isActiveLassoTool: Se,
    supportsErpPainting: ye,
    getBrushPresetIdForTool: _e,
    isPaintCursorEnabled: pe,
    isActivePaintCursorVisible: de,
    setPointerPos: te,
    syncPaintCursorElement: oe,
    showPaintSizePreview: I,
    hidePaintSizePreview: V,
    buildFreehandStrokeRecord: N,
    buildLassoFillStrokeRecord: fe,
    getPaintingLayerList: C,
    appendPaintPoint: O,
    appendLassoPoint: _,
    _segmentFrameStroke: ce,
    _segmentFrameLassoFill: be,
    commitPaintInteraction: D
  };
}
function qC(e) {
  const {
    editor: t,
    readOnly: n,
    shotEditor: r,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q;
  function _e() {
    return ye().reverse();
  }
  function pe(V) {
    var fe;
    if (r && t.mode === "frame") {
      const C = s(), O = l(C);
      if (!C || !O || !(Number((V == null ? void 0 : V.x) || 0) >= Number(O.x || 0) && Number((V == null ? void 0 : V.x) || 0) <= Number(O.x || 0) + Number(O.w || 0) && Number((V == null ? void 0 : V.y) || 0) >= Number(O.y || 0) && Number((V == null ? void 0 : V.y) || 0) <= Number(O.y || 0) + Number(O.h || 0))) return null;
      const P = Y(V, C, performance.now()), ce = P ? o(P) : null;
      if (ce)
        for (const D of a()) {
          if (!K(D)) continue;
          const b = q(D, ce);
          if (b && Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1) {
            const W = Z(D);
            if (W != null && W.visible) return { item: D, geom: W };
          }
        }
      const be = c(!1).slice().sort((D, b) => Number((b == null ? void 0 : b.z_index) || 0) - Number((D == null ? void 0 : D.z_index) || 0));
      for (const D of be) {
        if (D.type === "strokeGroup") {
          const p = f(R("paint", D.actionGroupId || D.id || ""));
          if (!p) continue;
          const h = Z(p);
          if (!(h != null && h.visible)) continue;
          const k = Array.isArray(h.strokePaths) ? h.strokePaths : [];
          for (const E of k) {
            const $ = Array.isArray(E == null ? void 0 : E.points) ? E.points : [];
            if (!$.length) continue;
            if (E.closed && $.length >= 3 && Nr(V, $)) return { item: p, geom: h };
            const X = Math.max(8, Number((E == null ? void 0 : E.lineWidth) || 0) * 0.5 + 6);
            for (let le = 0; le < $.length - 1; le += 1)
              if (Ql(V, $[le], $[le + 1]) <= X * X) return { item: p, geom: h };
            if ($.length === 1 && po(V, $[0]) <= X * X) return { item: p, geom: h };
          }
          continue;
        }
        if (D.type === "rasterObject") {
          const p = d(M(((fe = D.item) == null ? void 0 : fe.id) || D.id || ""));
          if (!p) continue;
          const h = Z(p);
          if (m(p, h, V, P)) return { item: p, geom: h };
          continue;
        }
        const b = D.item;
        if (!b || !K(b) || !ce) continue;
        const W = q(b, ce);
        if (W && Number(W.x) >= 0 && Number(W.x) <= 1 && Number(W.y) >= 0 && Number(W.y) <= 1) {
          const p = Z(b);
          if (p != null && p.visible) return { item: b, geom: p };
        }
      }
      if (!ce) return null;
      for (const D of _e()) {
        const b = q(D, ce);
        if (!b || !(Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1)) continue;
        const W = Z(D);
        if (W != null && W.visible) return { item: D, geom: W };
      }
      return null;
    }
    const N = [
      ...c(!1).slice().sort((C, O) => Number((O == null ? void 0 : O.z_index) || 0) - Number((C == null ? void 0 : C.z_index) || 0)).map((C) => {
        var O;
        return C.type === "strokeGroup" ? f(R("paint", C.actionGroupId || C.id || "")) : C.type === "rasterObject" ? d(M(((O = C.item) == null ? void 0 : O.id) || C.id || "")) : C.item;
      }).filter(Boolean),
      ..._e(),
      ...r ? a().filter((C) => j(C)) : []
    ];
    for (const C of N) {
      if (F(C)) {
        const _ = Z(C);
        if (!(_ != null && _.visible)) continue;
        const P = Array.isArray(_.strokePaths) ? _.strokePaths : [];
        for (const ce of P) {
          const be = Array.isArray(ce == null ? void 0 : ce.points) ? ce.points : [];
          if (!be.length) continue;
          if (ce.closed && be.length >= 3 && Nr(V, be)) return { item: C, geom: _ };
          const D = Math.max(8, Number((ce == null ? void 0 : ce.lineWidth) || 0) * 0.5 + 6);
          for (let b = 0; b < be.length - 1; b += 1)
            if (Ql(V, be[b], be[b + 1]) <= D * D) return { item: C, geom: _ };
          if (be.length === 1 && po(V, be[0]) <= D * D) return { item: C, geom: _ };
        }
        continue;
      }
      if (y(C)) {
        const _ = Z(C);
        if (!(_ != null && _.visible)) continue;
        if (m(C, _, V)) return { item: C, geom: _ };
        continue;
      }
      const O = Z(C);
      if (O.visible && Nr(V, O.corners))
        return { item: C, geom: O };
    }
    return null;
  }
  function de(V, N, fe = null) {
    if (!V || !V.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (K(fe)) return Dc(V, N);
    if (V.kind === "strokeGroup") {
      const C = V.corners.findIndex((_) => po(_, N) <= 121);
      if (C >= 0) {
        const _ = V.corners[C], P = _.x - V.center.x, ce = _.y - V.center.y, be = P * ce >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: C, cursor: be };
      }
      const O = Array.isArray(V.strokePaths) ? V.strokePaths : [];
      for (const _ of O) {
        const P = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
        if (_.closed && P.length >= 3 && Nr(N, P)) return { kind: "move", cursor: "default" };
        const ce = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
        for (let be = 0; be < P.length - 1; be += 1)
          if (Ql(N, P[be], P[be + 1]) <= ce * ce) return { kind: "move", cursor: "default" };
      }
      return Nr(N, V.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (V.kind === "rasterObject") {
      const C = V.corners.findIndex((O) => po(O, N) <= 121);
      if (C >= 0) {
        const O = V.corners[C], _ = O.x - V.center.x, P = O.y - V.center.y, ce = _ * P >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: C, cursor: ce };
      }
      return Nr(N, V.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return Bk(V, N, {
      edges: i === "cutout" || j(fe),
      resize: !(j(fe) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function te(V, N) {
    return {
      x0: Math.min(Number((V == null ? void 0 : V.x) || 0), Number((N == null ? void 0 : N.x) || 0)),
      y0: Math.min(Number((V == null ? void 0 : V.y) || 0), Number((N == null ? void 0 : N.y) || 0)),
      x1: Math.max(Number((V == null ? void 0 : V.x) || 0), Number((N == null ? void 0 : N.x) || 0)),
      y1: Math.max(Number((V == null ? void 0 : V.y) || 0), Number((N == null ? void 0 : N.y) || 0))
    };
  }
  function ge(V, N) {
    return !!V && !!N && Number(N.x) >= Number(V.x0) && Number(N.x) <= Number(V.x1) && Number(N.y) >= Number(V.y0) && Number(N.y) <= Number(V.y1);
  }
  function oe(V, N) {
    if (!V || !(N != null && N.visible) || !Array.isArray(N.corners)) return !1;
    if (N.corners.some((O) => ge(V, O))) return !0;
    const fe = (Number(V.x0) + Number(V.x1)) * 0.5, C = (Number(V.y0) + Number(V.y1)) * 0.5;
    return !!Nr({ x: fe, y: C }, N.corners);
  }
  function I(V) {
    if (Se(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ae("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ae("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ae("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ae("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ae("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ae(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ae("grabbing") : ae("default");
      return;
    }
    if (S()) {
      ae("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !n) {
        ae(iA);
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
    const N = u(), fe = N ? Z(N) : null, C = N ? v(N) : !1, O = C ? { kind: "none", cursor: "default" } : de(fe, V, N);
    if (!C && O.kind !== "none") {
      ae(O.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && pe(V)) {
      ae("default");
      return;
    }
    ae(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(V) {
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
        isActivePaintCursorVisible: S,
        isErpCamera: g,
        isItemLocked: v,
        isRasterObjectItem: y,
        isShotItem: j,
        isStickerItem: K,
        isStrokeGroupItem: F,
        makeRasterObjectSelectionId: M,
        makeStrokeGroupSelectionId: R,
        objectGeom: Z,
        screenPosToFrameAsErpPoint: Y,
        setCanvasCursor: ae,
        syncPaintCursorElement: Se,
        upstreamSkyStickers: ye,
        worldDirToFrameLocalPoint: q
      } = V);
    },
    hitObjectAt: pe,
    handleHit: de,
    rectFromPoints: te,
    rectIntersectsGeom: oe,
    updateCursor: I
  };
}
function XC(e) {
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
  let f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e = !1;
  function pe() {
    return _e;
  }
  function de() {
    if (!o) return;
    if (_e = !1, r.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (r.worldSelectedId || F() && Z()) {
      const _ = ge();
      _e = _.visible, oe(_);
      return;
    }
    const N = y(), fe = j();
    if (!N && fe.length === 0 || r.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const C = K(), O = aC({
      type: d,
      selected: N,
      selectedItems: fe,
      selectedKind: C,
      geom: fe.length > 1 ? v(fe) : q(N),
      allLocked: f(fe),
      anyLocked: fe.some((_) => Y(_)),
      selectedLocked: Y(N),
      activeAspect: ae(N) && M() ? Wi : gr(N),
      cutoutAspectOpen: r.cutoutAspectOpen,
      isExternalSticker: R,
      isStickerHidden: ye,
      canRestoreSelectedToInitial: m,
      iconSet: je,
      cameraShot: t,
      coverage: a.coverage,
      upstream: te(fe)
    });
    oe(O);
  }
  function te(N) {
    const fe = N.filter(Ct);
    return fe.length ? { editable: fe.every(wa) } : null;
  }
  function ge() {
    const N = Se() && !r.interaction ? g().space : null;
    if (!(N != null && N.gizmo)) return { visible: !1 };
    const fe = S(), C = [...N.stickers, ...N.upstreamStickers].find((ce) => ce.id === r.worldSelectedId), _ = (C ? Gu(C) : [N.gizmo.transform.position]).map((ce) => Go(fe, ce, n.width, n.height)).filter(Boolean), P = U_(fe, N.gizmo.transform.position, N.gizmo.mode, n.width, n.height);
    return lC({ corners: _, gizmoBox: P, gizmoMode: N.gizmo.mode, camera: F() });
  }
  function oe(N) {
    var P, ce;
    if (!N.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const fe = (be, D) => cC(N.anchor, be, D, n.width, n.height), C = Math.max(1, Number(((P = r.menuSize) == null ? void 0 : P.w) || 220)), O = Math.max(1, Number(((ce = r.menuSize) == null ? void 0 : ce.h) || 40)), _ = fe(C, O);
    if (!_) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: _.left,
      top: _.top,
      items: N.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const be = o.getBoundingClientRect(), D = Math.round(Number((be == null ? void 0 : be.width) || 0)) || 220, b = Math.round(Number((be == null ? void 0 : be.height) || 0)) || 40;
      r.menuSize = { w: D, h: b, measured: !0 };
      const W = fe(D, b);
      W && (u.selectionMenu.left = W.left, u.selectionMenu.top = W.top);
    });
  }
  function I() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function V(N) {
    if (!c || !N || !N.isConnected) return;
    const fe = String(N.getAttribute("data-tip") || "").trim();
    if (!fe) return;
    u.tooltip.text = fe, u.tooltip.visible = !0;
    const C = N;
    i.requestFrame(() => {
      var $, X;
      if (l.target !== C || !c || !(C != null && C.isConnected)) return;
      const O = s.getBoundingClientRect(), _ = C.getBoundingClientRect(), P = 8, ce = 12, be = Math.round(Number((($ = c.getBoundingClientRect()) == null ? void 0 : $.width) || 0)) || 100, D = Math.round(Number(((X = c.getBoundingClientRect()) == null ? void 0 : X.height) || 0)) || 24, b = !!C.closest(".pano-floating-left"), W = !!C.closest(".pano-frame-rail"), p = !!C.closest(".pano-paint-footer") || !!C.closest(".pano-paint-color-float");
      let h = "", k = _.left - O.left + _.width * 0.5 - be * 0.5, E = _.top - O.top - D - ce;
      if (C.closest(".pano-floating-top") && (E = _.bottom - O.top + ce), b)
        h = "tool-rail", k = _.right - O.left + 10, E = _.top - O.top + _.height * 0.5 - D * 0.5, k = Oe(k, P, Math.max(P, O.width - be - P)), E = Oe(E, P, Math.max(P, O.height - D - P));
      else if (W)
        h = "frame-rail", k = _.left - O.left - be - 10, E = _.top - O.top + _.height * 0.5 - D * 0.5, k = Oe(k, P, Math.max(P, O.width - be - P)), E = Oe(E, P, Math.max(P, O.height - D - P));
      else if (p) {
        h = "footer";
        const le = C.closest(".pano-paint-footer"), L = le ? le.getBoundingClientRect() : _;
        k = L.left - O.left + L.width * 0.5 - be * 0.5, E = L.bottom - O.top + 5, k = Oe(k, P, Math.max(P, O.width - be - P)), E = Math.max(P, E);
      }
      k = Oe(k, P, Math.max(P, O.width - be - P)), E = Math.max(P, E), u.tooltip.left = k, u.tooltip.top = E, u.tooltip.variant = h, u.tooltip.visible = !0;
    });
  }
  return {
    connect(N) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: m,
        currentSpaceCamera: S,
        editorViewInput: g,
        getMultiSelectionGeom: v,
        getSelected: y,
        getSelectedItems: j,
        getSelectedKind: K,
        isCameraSelected: F,
        isErpCamera: M,
        isExternalSticker: R,
        isFreeSpaceView: Z,
        isItemLocked: Y,
        isShotItem: ae,
        isSpaceView: Se,
        isStickerHidden: ye,
        objectGeom: q
      } = N);
    },
    isWorldMenuShown: pe,
    updateSelectionMenu: de,
    hideTooltip: I,
    showTooltipFor: V
  };
}
function JC(e) {
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
  let d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D, b, W, p, h, k, E, $, X, le, L, re, x, U, ie, we, Me, Ce, me, ue, A, J, H, z, T, B, G, w, ne, se, ve, he, xe, Fe, Le, ze, We, Ge, Q, Pe, ee, ke, Ae, Ie, Te, $e, Ue, it, at, St, ut, Et = null;
  function Ye(Re) {
    l.selection && (l.selection = null, Ae());
    const He = me(Re);
    Et = He, A(He, !0), m(), c.state.inertia.active = !1, c.state.inertia.vx = 0, c.state.inertia.vy = 0;
    const Ke = fe(), Mt = N(), ht = Ke || Mt ? rx(it(), Re) : null;
    if (Mt && ht) {
      Re.preventDefault(), ht === "look" ? Fe(He, Re.pointerId) : B(ht, He, Re.pointerId);
      return;
    }
    if (ht === "look") {
      Re.preventDefault(), ne(Re, He, ue(Re));
      return;
    }
    if (ht) {
      Re.preventDefault(), We(ht, He, Re.pointerId);
      return;
    }
    if ((Ke || Mt) && Re.button !== 0) {
      Re.preventDefault();
      return;
    }
    if (Re.button === 1) {
      Re.preventDefault(), n.mode === "frame" ? se(Re, He) : ne(Re, He, n.mode === "unwrap" ? He : ue(Re));
      return;
    }
    if (Re.button !== 0) return;
    if (n.mode === "frame" && (Re.altKey || Re.shiftKey) && !i) {
      G(Re, He);
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      Fe(He, Re.pointerId), Re.preventDefault();
      return;
    }
    if (i) {
      n.mode === "pano" && T(Re, He);
      return;
    }
    if (r && !r.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ee() || ke())) {
      if (!X()) return;
      Pe(), xe(Re, He);
      return;
    }
    const _n = de(), Wt = pe(), Ft = _n.length > 1 ? _e(_n) : Wt ? $(Wt) : null;
    if (n.primaryTool === "cursor" && (Re.ctrlKey || Re.metaKey)) {
      n.interaction = { kind: "marquee_select", start: He, current: He }, Te(He), t.setPointerCapture(Re.pointerId), x({ localOnly: !0, reason: ot.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && d() && fe() && z(Re, He) || n.primaryTool === "cursor" && o && O() && Ge(Re, He)) return;
    if (_n.length > 1 && (Ft != null && Ft.visible)) {
      if ((_n.some((cs) => C(cs)) ? { kind: "none" } : te(Ft, He)).kind === "move") {
        he(Re, He, _n, Ft);
        return;
      }
    } else if (Wt && (Ft != null && Ft.visible)) {
      const dn = C(Wt) ? { kind: "none" } : te(Ft, He, Wt);
      if (dn.kind === "scale") {
        ze(Re, He, Wt, Ft, dn);
        return;
      }
      if (dn.kind === "scale_x" || dn.kind === "scale_y") {
        H(Re, He, Wt, Ft, dn);
        return;
      }
      if (dn.kind === "rotate") {
        Le(Re, He, Wt, Ft);
        return;
      }
      if (dn.kind === "move") {
        ve(Re, He, Wt, Ft);
        return;
      }
    }
    const Rn = oe(He);
    if (Rn) {
      const dn = n.selectedId !== Rn.item.id;
      if (dn && n.selectedId && (re(), g()), J(Rn.item), s && dn && (n.cutoutAspectOpen = !1), dn && Ue(), $e(), x(), C(Rn.item)) {
        Te(He);
        return;
      }
      w(Re, He, Rn);
      return;
    }
    const ls = !!n.selectedId;
    ls && (re(), g()), S(), ls && Ue(), $e(), x(), n.mode === "pano" && T(Re, He);
  }
  function Vt(Re, He) {
    if (!a || !le.playing || (le.stop(), Re.kind === "frame_pan")) return;
    if (Re.kind === "frame_orbit") {
      const ht = Se();
      ht && (Re.pivot = q(ht, ye(ht), He));
      return;
    }
    if (Re.kind === "world_gizmo") {
      const ht = Q(Re.id);
      Re.camera ? Re.base = v() : ht && (Re.base = ar(ht, n.frame));
      return;
    }
    if (Re.kind === "move_multi") {
      const ht = _e(Re.items);
      if (!(ht != null && ht.visible)) return;
      Re.offset = { x: He.x - ht.center.x, y: He.y - ht.center.y }, Re.startCenter = { x: ht.center.x, y: ht.center.y };
      for (const _n of Re.stickerSnapshots) {
        const Wt = Re.items.find((Rn) => String((Rn == null ? void 0 : Rn.id) || "") === _n.id), Ft = Wt ? $(Wt) : null;
        Ft != null && Ft.visible && (_n.yaw_deg = Number(L(Wt).yaw_deg || 0), _n.pitch_deg = Number(L(Wt).pitch_deg || 0), _n.center = { x: Ft.center.x, y: Ft.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Re.kind)) return;
    const Ke = $(Re.item);
    if (!(Ke != null && Ke.visible)) return;
    const Mt = L(Re.item);
    if (Re.kind === "move") {
      Re.offset = { x: He.x - Ke.center.x, y: He.y - Ke.center.y };
      return;
    }
    if (Re.center = Ke.center, Re.kind === "rotate") {
      Re.startRot = Number(Mt.rot_deg || Mt.roll_deg || 0), Re.startAng = Math.atan2(He.y - Ke.center.y, He.x - Ke.center.x);
      return;
    }
    Re.startDist = Math.max(1, Math.hypot(He.x - Ke.center.x, He.y - Ke.center.y)), Re.startHFOV = Number(Mt.hFOV_deg || 20), Re.startVFOV = Number(Mt.vFOV_deg || 20);
  }
  function zt(Re) {
    const He = me(Re);
    if (A(He, !0), !n.interaction) {
      I(He), Te(He);
      return;
    }
    Te(He);
    const Ke = n.interaction;
    if (Et && (He.x !== Et.x || He.y !== Et.y)) {
      const Mt = Et;
      Et = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Ke.kind) || Vt(Ke, Mt);
    }
    if (Ke.kind !== "world_select") {
      if (Ke.kind === "world_gizmo") {
        j(Ke, He);
        return;
      }
      if (Ke.kind === "paint_stroke") {
        D(Ke, Re);
        return;
      }
      if (Ke.kind === "paint_lasso_fill") {
        _(Ke, Re);
        return;
      }
      if (Ke.kind === "view") {
        P(Ke, He, Re);
        return;
      }
      if (Ke.kind === "frame_pan" || Ke.kind === "frame_orbit") {
        y(Ke, He);
        return;
      }
      if (Ke.kind === "space_pan" || Ke.kind === "space_orbit") {
        h(Ke, He);
        return;
      }
      if (Ke.kind === "pan_frame") {
        b(Ke, He);
        return;
      }
      if (Ke.kind === "roll_frame") {
        p(Ke, He, Re);
        return;
      }
      if (Ke.kind === "move") {
        E(Ke, He);
        return;
      }
      if (Ke.kind === "move_stroke_group") {
        k(Ke, He);
        return;
      }
      if (Ke.kind === "move_raster_object") {
        W(Ke, He);
        return;
      }
      if (Ke.kind === "scale_raster_object") {
        Me(Ke, He);
        return;
      }
      if (Ke.kind === "move_multi") {
        be(Ke, He);
        return;
      }
      if (Ke.kind === "scale_stroke_group") {
        Ce(Ke, He);
        return;
      }
      if (Ke.kind === "rotate_stroke_group") {
        ie(Ke, He, Re);
        return;
      }
      if (Ke.kind === "marquee_select") {
        ce(Ke, He);
        return;
      }
      if (Ke.kind === "scale" || Ke.kind === "scale_x" || Ke.kind === "scale_y") {
        we(Ke, He);
        return;
      }
      if (Ke.kind === "rotate") {
        U(Ke, He, Re);
        return;
      }
    }
  }
  function en() {
    var He, Ke, Mt, ht;
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
      ((He = n.interaction) == null ? void 0 : He.kind) === "paint_stroke" || ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "paint_lasso_fill" ? R() : ((Mt = n.interaction) == null ? void 0 : Mt.kind) === "marquee_select" ? M() : ["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((ht = n.interaction) == null ? void 0 : ht.kind) ? K() : n.interaction && n.interaction.kind !== "view" && Y(), n.interaction = null, (Re == null ? void 0 : Re.kind) === "roll_frame" && ge(), V(), Re && Re.kind === "view" && F(), Ie(), $e(), Te(n.pointerPos), x();
    }
  }
  function Sn() {
    var Re, He, Ke, Mt, ht;
    if (!u()) {
      if (((Re = n.interaction) == null ? void 0 : Re.kind) === "world_select" || ((He = n.interaction) == null ? void 0 : He.kind) === "world_gizmo") {
        ae(n.interaction);
        return;
      }
      ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "view" && F(), (((Mt = n.interaction) == null ? void 0 : Mt.kind) === "paint_stroke" || ((ht = n.interaction) == null ? void 0 : ht.kind) === "paint_lasso_fill") && f(), n.interaction = null, V(), Ie(), Te(n.pointerPos), x({ localOnly: !0 });
    }
  }
  function Gt(Re) {
    const He = me(Re), Ke = A(He, !0);
    n.interaction || (Te(He), Ke && n.mode === "frame" && n.primaryTool === "cursor" && x({ localOnly: !0, reason: ot.OVERLAY }));
  }
  function Ot(Re) {
    if (n.mode === "frame") {
      const He = me(Re), Ke = ra(Re);
      Ke && Pe(), Ke && N() ? at(He, -Ke) : Ke && St(He, Ke) && x({ localOnly: !0 }), Re.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (m(), fe()) {
        const He = ra(Re);
        He && ut(me(Re), -He);
      } else c.applyWheelEvent(Re) && x({ localOnly: !0, reason: ot.VIEW });
      Re.preventDefault();
    }
  }
  return {
    connect(Re) {
      ({
        cameraShoots: d,
        cancelFrameCameraGesture: u,
        cancelPaintStroke: f,
        cancelViewTransition: m,
        clearSelection: S,
        commitState: g,
        cutoutCamera: v,
        dragFrame: y,
        dragWorldGizmo: j,
        endFrameGesture: K,
        endLookDrag: F,
        endMarquee: M,
        endPaintStroke: R,
        endSpaceDrag: Z,
        endTransform: Y,
        endWorldStickerPress: ae,
        frameContext: Se,
        frameSpaceView: ye,
        frameTarget: q,
        getMultiSelectionGeom: _e,
        getSelected: pe,
        getSelectedItems: de,
        handleHit: te,
        hideTooltip: ge,
        hitObjectAt: oe,
        hoverWorldGizmo: I,
        invalidateLivePaintPreviewCaches: V,
        isFreeFrameView: N,
        isFreeSpaceView: fe,
        isItemLocked: C,
        isSpaceView: O,
        moveLassoFill: _,
        moveLookDrag: P,
        moveMarquee: ce,
        moveMulti: be,
        movePaintStroke: D,
        movePanFrame: b,
        moveRasterObject: W,
        moveRollFrame: p,
        moveSpaceDrag: h,
        moveStrokeGroup: k,
        moveItem: E,
        objectGeom: $,
        paintingShown: X,
        playback: le,
        poseOf: L,
        pushHistory: re,
        requestDraw: x,
        rotateItem: U,
        rotateStrokeGroup: ie,
        scaleItem: we,
        scaleRasterObject: Me,
        scaleStrokeGroup: Ce,
        screenPos: me,
        screenPosCss: ue,
        setPointerPos: A,
        setSelectedItem: J,
        startAxisScale: H,
        startCameraPress: z,
        startEmptyDrag: T,
        startFrameDrag: B,
        startFrameRoll: G,
        startHitMove: w,
        startLookDrag: ne,
        startMiddlePanFrame: se,
        startMove: ve,
        startMultiMove: he,
        startPaintStroke: xe,
        startPanFrame: Fe,
        startRotate: Le,
        startScale: ze,
        startSpaceDrag: We,
        startWorldStickerPress: Ge,
        stickerById: Q,
        stopTimelinePlayback: Pe,
        supportsErpPainting: ee,
        supportsFramePainting: ke,
        syncTimeline: Ae,
        syncViewToggleState: Ie,
        updateCursor: Te,
        updateSelectionMenu: $e,
        updateSidePanel: Ue,
        viewControls: it,
        zoomFrameAt: at,
        zoomFrameViewAt: St,
        zoomSpaceAt: ut
      } = Re);
    },
    onCanvasPointerDown: Ye,
    onCanvasPointerMove: zt,
    onCanvasPointerUp: en,
    onCanvasPointerCancel: Sn,
    onCanvasMouseMove: Gt,
    onCanvasWheel: Ot
  };
}
function ZC(e) {
  const { canvas: t, editor: n, viewController: r } = e;
  let i, o, s, a, l, c, d, u, f, m;
  function S(F, M, R) {
    n.interaction = { kind: "view", last: R, lastTs: performance.now() }, r.startDrag(R.x, R.y, F.pointerId, performance.now()), u(M), t.setPointerCapture(F.pointerId);
  }
  function g(F, M) {
    if (i()) {
      const R = m().emptyLeft;
      R && d(R, M, F.pointerId);
      return;
    }
    S(F, M, s(F));
  }
  function v(F, M, R) {
    const Z = performance.now(), Y = n.mode === "unwrap" ? M : s(R);
    r.moveDrag(Y.x, Y.y, n.mode === "unwrap" ? "unwrap" : "pano", Z), F.lastTs = Z, F.last = Y, o({ localOnly: !0, reason: ot.VIEW });
  }
  function y() {
    c(() => r.endDrag(performance.now()));
  }
  function j(F, M) {
    const R = l();
    a(F.kind === "space_pan" ? Uh(R, M.x - F.last.x, M.y - F.last.y, t.width, t.height, F.depth) : Wh(R, M.x - F.last.x, M.y - F.last.y, t.height, F.pivot)), F.last = M;
  }
  function K() {
    n.interaction = null, u(n.pointerPos), f();
  }
  return {
    connect(F) {
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
        viewControls: m
      } = F);
    },
    startLookDrag: S,
    startEmptyDrag: g,
    moveLookDrag: v,
    endLookDrag: y,
    moveSpaceDrag: j,
    endSpaceDrag: K
  };
}
function QC(e) {
  const { canvas: t, editor: n, readOnly: r, state: i } = e;
  let o, s, a, l, c, d, u, f, m, S;
  function g(F, M) {
    const R = a();
    !R || r || R.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: R,
      last: M,
      start: {
        yaw_deg: Number(R.yaw_deg || 0),
        pitch_deg: Number(R.pitch_deg || 0)
      },
      changed: !1
    }, m(M), t.setPointerCapture(F.pointerId));
  }
  function v(F, M) {
    const R = a(), Z = c(R);
    if (!R || R.locked === !0 || !Z) return;
    const Y = Jg({
      frame: Z,
      point: M,
      startRollDeg: Number(R.roll_deg ?? R.rot_deg ?? 0),
      shiftKey: F.shiftKey,
      altKey: F.altKey,
      allowAlt: !0
    });
    Y && (n.interaction = {
      kind: "roll_frame",
      shot: R,
      center: Y.center,
      lastAngle: Y.lastAngle,
      accumulatedRad: Y.accumulatedRad,
      rollGesture: Y,
      start: { roll_deg: Number(R.roll_deg ?? R.rot_deg ?? 0) },
      changed: !1,
      altStarted: Y.source === "alt",
      source: Y.source
    }, t.setPointerCapture(F.pointerId), F.preventDefault(), f(), u({ localOnly: !0 }));
  }
  function y(F, M) {
    var Se, ye;
    const R = l(F.shot);
    if (!R || !F.shot) return;
    const Z = M.x - F.last.x, Y = M.y - F.last.y, ae = Qg(F.shot, {
      dx: Z,
      dy: Y,
      focalPx: R.focalPx,
      invertX: ((Se = i.ui_settings) == null ? void 0 : Se.invert_view_x) === !0,
      invertY: ((ye = i.ui_settings) == null ? void 0 : ye.invert_view_y) === !0
    });
    F.shot.yaw_deg = ae.yaw_deg, F.shot.pitch_deg = ae.pitch_deg, F.changed = F.changed || Math.abs(Z) > 0 || Math.abs(Y) > 0, F.last = M, u({ localOnly: !0 });
  }
  function j(F, M, R) {
    F.source !== "knob" && o(F, M, R);
  }
  function K() {
    n.interaction.changed && (d(), s(), S());
  }
  return {
    connect(F) {
      ({
        applySharedRollInteractionPoint: o,
        commitAndRefreshNode: s,
        getActiveCutoutShot: a,
        getFrameViewLayout: l,
        getFrameViewRect: c,
        pushHistory: d,
        requestDraw: u,
        syncFrameRollKnob: f,
        updateCursor: m,
        updateSidePanel: S
      } = F);
    },
    startMiddlePanFrame: g,
    startFrameRoll: v,
    movePanFrame: y,
    moveRollFrame: j,
    endFrameGesture: K
  };
}
function eI(e) {
  const { canvas: t, editor: n, node: r } = e;
  let i, o, s, a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye;
  function q(oe, I) {
    const V = n.primaryTool === "mask" ? "mask" : "paint", N = n.primaryTool === "mask" ? n.maskTool : n.paintTool, fe = n.mode === "frame" && Y() ? f() : null, C = { kind: "ERP_GLOBAL" }, O = fe ? Z(I, fe, performance.now()) : R(I, performance.now());
    if (!O) {
      ae(I);
      return;
    }
    n.interaction = {
      kind: N === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
      layerKind: V,
      _livePreviewToken: Ci("live"),
      stroke: N === "lasso_fill" ? c(V, N, [O], C) : l(V, N, [O], C)
    }, v();
    const _ = m(n.interaction);
    if (_)
      if (n.paintEngine.beginStroke(n.interaction.stroke, _), n.interaction.kind === "paint_stroke") {
        const P = n.paintEngine.ensureTarget(_), ce = Number((O == null ? void 0 : O.u) ?? (O == null ? void 0 : O.x) ?? 0), be = Number((O == null ? void 0 : O.v) ?? (O == null ? void 0 : O.y) ?? 0);
        n.paintEngine.appendStrokePoint(P, ce, be, n.interaction.stroke);
      } else
        n.paintEngine.updateActiveStroke(n.interaction.stroke, _);
    ae(I), t.setPointerCapture(oe.pointerId), F();
  }
  function _e(oe, I, V, N) {
    const fe = typeof I.getCoalescedEvents == "function" ? I.getCoalescedEvents() : [I];
    let C = !1;
    return fe.forEach((O) => {
      const _ = M(O);
      if (n.mode === "frame") {
        const P = f(), ce = P ? S(P) : null;
        if (ce) {
          const be = (_.x - ce.x) / Math.max(1, ce.w), D = (_.y - ce.y) / Math.max(1, ce.h);
          if (!(be >= 0 && be <= 1 && D >= 0 && D <= 1)) {
            oe._outOfFrame = !0;
            return;
          }
          oe._outOfFrame && (oe._outOfFrame = !1, V(oe));
        }
      }
      N(oe, _, performance.now()) && (C = !0);
    }), C;
  }
  function pe(oe, I) {
    _e(oe, I, o, a) && F({ localOnly: !0, reason: ot.PAINT });
  }
  function de(oe, I) {
    if (_e(oe, I, i, s)) {
      const V = m(oe);
      V && n.paintEngine.updateActiveStroke(oe.stroke, V), F({ localOnly: !0, reason: ot.PAINT });
    }
  }
  function te() {
    var V, N;
    v();
    const oe = d(n.interaction), I = !!n.interaction._hasCommittedSegments;
    if (oe || I) {
      y();
      const fe = String(((V = n.interaction.stroke) == null ? void 0 : V.actionGroupId) || "").trim();
      if (fe) {
        const O = g().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === fe);
        O && (O.frame = null);
      }
      const C = m(n.interaction);
      C && (oe ? String(((N = n.interaction.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(C), K()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, C) : n.paintEngine.cancelActiveStroke(C)), j(), u(), ye(), Se(), r.setDirtyCanvas(!0, !0), F();
    } else {
      const fe = m(n.interaction);
      fe && n.paintEngine.cancelActiveStroke(fe);
    }
  }
  function ge() {
    v();
    const oe = m(n.interaction);
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
        getActivePaintTargetDescriptor: m,
        getFrameViewRect: S,
        getPaintingGroupList: g,
        invalidateLivePaintPreviewCaches: v,
        markPaintStrokeVisualsDirty: y,
        pushHistory: j,
        refreshPaintEngineRevisionCache: K,
        requestDraw: F,
        screenPos: M,
        screenPosToErpPoint: R,
        screenPosToFrameAsErpPoint: Z,
        supportsFramePainting: Y,
        updateCursor: ae,
        updateSelectionMenu: Se,
        updateSidePanel: ye
      } = oe);
    },
    startPaintStroke: q,
    movePaintStroke: pe,
    moveLassoFill: de,
    endPaintStroke: te,
    cancelPaintStroke: ge
  };
}
function tI(e) {
  const { canvas: t, dragFrames: n, editor: r, editorView: i, runtime: o, state: s } = e;
  let a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e;
  function pe(I, V) {
    return i.gizmoPointer(I, c(), V.x, V.y, t.width, t.height);
  }
  function de(I, V) {
    var P, ce;
    const N = (P = d().space) == null ? void 0 : P.gizmo;
    if (N && pe("hover", V) !== null && pe("down", V))
      return r.interaction = {
        kind: "world_gizmo",
        id: r.worldSelectedId,
        mode: N.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: N.transform,
        base: ar(Z(), r.frame),
        changed: !1
      }, t.setPointerCapture(I.pointerId), ye(V), !0;
    const fe = m(), C = f(), O = fe.length > 1 ? fe.some((be) => v(be)) ? "none" : S(u(fe), V).kind : C && !v(C) ? S(K(C), V, C).kind : "none";
    if (O !== "none" && O !== "move") return !1;
    const _ = i.pickSticker(c(), V.x, V.y, t.width, t.height);
    return ((ce = Y(_)) == null ? void 0 : ce.placement) !== "world" ? !1 : (r.worldSelectedId !== _ && (r.selectedId && (F(), l()), R(_), _e(), q(), Se(), M()), r.interaction = { kind: "world_select" }, t.setPointerCapture(I.pointerId), !0);
  }
  function te(I) {
    var fe;
    const N = !!(r.worldSelectedId || g()) && r.primaryTool === "cursor" && y() && !!((fe = d().space) != null && fe.gizmo) ? pe("hover", I) : null;
    N !== r.gizmoAxis && (r.gizmoAxis = N, o.backgroundDirty = !0, M({ localOnly: !0, reason: ot.VIEW }));
  }
  function ge(I, V) {
    const N = pe("move", V);
    if (N && I.camera) {
      for (const [C, O] of Object.entries(zf(I.mode, I.base, I.start, N))) Jt(s.camera, C, r.frame, O);
      ae(), I.changed = !0, n.request("sidePanel"), M({ localOnly: !0 });
      return;
    }
    const fe = Y(I.id);
    !N || !fe || (qS(fe, r.frame, zf(I.mode, I.base, I.start, N)), I.changed = !0, j(), n.request("sidePanel"), M({ localOnly: !0 }));
  }
  function oe(I) {
    r.interaction = null, r.gizmoAxis = null, I.kind === "world_gizmo" && (pe("up", r.pointerPos), o.backgroundDirty = !0, I.changed && (F(), a(), _e())), ye(r.pointerPos), M();
  }
  return {
    connect(I) {
      ({
        commitAndRefreshNode: a,
        commitState: l,
        currentSpaceCamera: c,
        editorViewInput: d,
        getMultiSelectionGeom: u,
        getSelected: f,
        getSelectedItems: m,
        handleHit: S,
        isCameraSelected: g,
        isItemLocked: v,
        isSpaceView: y,
        markObjectVisualsDirty: j,
        objectGeom: K,
        pushHistory: F,
        requestDraw: M,
        selectWorldSticker: R,
        selectedWorldSticker: Z,
        stickerById: Y,
        syncCutoutShot: ae,
        syncFloatingViewButtonState: Se,
        updateCursor: ye,
        updateSelectionMenu: q,
        updateSidePanel: _e
      } = I);
    },
    worldGizmoPointer: pe,
    startWorldStickerPress: de,
    hoverWorldGizmo: te,
    dragWorldGizmo: ge,
    endWorldStickerPress: oe
  };
}
function nI(e) {
  const { editor: t, shotEditor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, m, S, g;
  function v(j, K) {
    j.current = K, f({ localOnly: !0, reason: ot.OVERLAY });
  }
  function y() {
    var M;
    const j = d(t.interaction.start, t.interaction.current), F = [
      ...r === "cutout" ? i().filter((R) => !l(R)) : [...o()],
      ...a(),
      ...s()
    ].filter((R) => u(j, c(R)));
    m(F, ((M = F[F.length - 1]) == null ? void 0 : M.id) || null), n && F.length && (t.cutoutAspectOpen = !1), g(), S(), f();
  }
  return {
    connect(j) {
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
        setSelectedItems: m,
        updateSelectionMenu: S,
        updateSidePanel: g
      } = j);
    },
    moveMarquee: v,
    endMarquee: y
  };
}
function rI(e) {
  const { canvas: t, editor: n, node: r, shotEditor: i } = e;
  let o, s, a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I;
  function V(L) {
    return n.mode === "frame" ? (() => {
      const re = f();
      return re ? _e(L, re, performance.now()) : null;
    })() : q(L, performance.now());
  }
  function N(L) {
    return Io(g(L.actionGroupId, L.layerKind));
  }
  function fe(L) {
    return Io(d(L.actionGroupId, L.layerKind));
  }
  function C(L) {
    return Io(S().find((re) => String((re == null ? void 0 : re.id) || "") === Y(L.rasterObjectId || L.id || "")));
  }
  function O(L, re, x) {
    if (n.mode === "frame" && i) {
      const U = f(), ie = m(U);
      if (!U || !ie) return !1;
      const we = {
        x: Oe((re - ie.x) / Math.max(1, ie.w), 0, 1),
        y: Oe((x - ie.y) / Math.max(1, ie.h), 0, 1)
      }, Me = u(U, we);
      if (!Me) return !1;
      const Ce = Pp(Me);
      I(L, { yaw_deg: Ce.yaw, pitch_deg: Ce.pitch });
    } else if (n.mode === "unwrap") {
      const U = v(), ie = Oe((re - U.x) / Math.max(U.w, 1), 0, 1), we = Oe((x - U.y) / Math.max(U.h, 1), 0, 1);
      I(L, { yaw_deg: It(ie * 360 - 180), pitch_deg: Oe(90 - we * 180, -90, 90) });
    } else {
      const U = pe(re, x), ie = Pp(U);
      I(L, { yaw_deg: ie.yaw, pitch_deg: ie.pitch });
    }
    return !0;
  }
  function _(L, re, x, U, ie) {
    n.interaction = F(x) ? {
      kind: "scale_stroke_group",
      item: x,
      center: U.center,
      startDist: Math.max(1, Math.hypot(re.x - U.center.x, re.y - U.center.y)),
      snapshot: N(x),
      frameSnapshot: fe(x),
      cursor: ie.cursor
    } : y(x) ? {
      kind: "scale_raster_object",
      item: x,
      center: U.center,
      startDist: Math.max(1, Math.hypot(re.x - U.center.x, re.y - U.center.y)),
      snapshot: C(x),
      cursor: ie.cursor
    } : {
      kind: "scale",
      item: x,
      center: U.center,
      startDist: Math.max(1, Math.hypot(re.x - U.center.x, re.y - U.center.y)),
      startHFOV: Number(ae(x).hFOV_deg || 20),
      startVFOV: Number(ae(x).vFOV_deg || 20),
      cursor: ie.cursor
    }, ge(re), t.setPointerCapture(L.pointerId);
  }
  function P(L, re, x, U, ie) {
    n.interaction = {
      kind: ie.kind,
      item: x,
      center: U.center,
      startDist: Math.max(1, Math.hypot(re.x - U.center.x, re.y - U.center.y)),
      startHFOV: Number(ae(x).hFOV_deg || 20),
      startVFOV: Number(ae(x).vFOV_deg || 20),
      cursor: ie.cursor,
      edge: ie.edge
    }, ge(re), t.setPointerCapture(L.pointerId);
  }
  function ce(L, re, x, U) {
    n.interaction = F(x) ? {
      kind: "rotate_stroke_group",
      item: x,
      center: U.center,
      startAng: Math.atan2(re.y - U.center.y, re.x - U.center.x),
      snapshot: N(x),
      frameSnapshot: fe(x)
    } : {
      kind: "rotate",
      item: x,
      center: U.center,
      startRot: Number(ae(x).rot_deg || ae(x).roll_deg || 0),
      startAng: Math.atan2(re.y - U.center.y, re.x - U.center.x)
    }, ge(re), t.setPointerCapture(L.pointerId);
  }
  function be(L, re, x, U) {
    if (F(x)) {
      const ie = V(re);
      n.interaction = {
        kind: "move_stroke_group",
        item: x,
        startUv: ie,
        snapshot: N(x),
        frameSnapshot: fe(x)
      }, ge(re), t.setPointerCapture(L.pointerId);
      return;
    }
    if (y(x)) {
      const ie = V(re);
      n.interaction = {
        kind: "move_raster_object",
        item: x,
        startUv: ie,
        snapshot: C(x)
      }, ge(re), t.setPointerCapture(L.pointerId);
      return;
    }
    n.interaction = {
      kind: "move",
      item: x,
      offset: { x: re.x - U.center.x, y: re.y - U.center.y }
    }, ge(re), t.setPointerCapture(L.pointerId);
  }
  function D(L, re, x) {
    n.interaction = {
      kind: F(x.item) ? "move_stroke_group" : y(x.item) ? "move_raster_object" : "move",
      item: x.item,
      offset: { x: re.x - x.geom.center.x, y: re.y - x.geom.center.y },
      startUv: F(x.item) || y(x.item) ? V(re) : null,
      snapshot: F(x.item) ? N(x.item) : y(x.item) ? C(x.item) : null,
      frameSnapshot: F(x.item) ? fe(x.item) : null
    }, ge(re), t.setPointerCapture(L.pointerId);
  }
  function b(L, re) {
    const x = re.x - L.offset.x, U = re.y - L.offset.y;
    O(L.item, x, U) && (K(L.item) && M(), ye({ localOnly: !0 }));
  }
  function W(L, re) {
    var we, Me;
    const x = V(re);
    if (!x || !L.startUv) return;
    const U = de(Number(x.u || 0), Number(L.startUv.u || 0)), ie = Number(x.v || 0) - Number(L.startUv.v || 0);
    a((we = L.item) == null ? void 0 : we.actionGroupId, U, ie, L.snapshot, (Me = L.item) == null ? void 0 : Me.layerKind, L.frameSnapshot) && (Z({ rebuildPaintEngine: !1 }), ye({ localOnly: !0, reason: ot.PAINT }));
  }
  function p(L, re) {
    var we, Me;
    const x = V(re);
    if (!x || !L.startUv) return;
    const U = de(Number(x.u || 0), Number(L.startUv.u || 0)), ie = Number(x.v || 0) - Number(L.startUv.v || 0);
    o(((we = L.item) == null ? void 0 : we.rasterObjectId) || ((Me = L.item) == null ? void 0 : Me.id) || "", U, ie, L.snapshot) && (R(), ye({ localOnly: !0, reason: ot.PAINT }));
  }
  function h(L, re) {
    var ie, we;
    const U = Math.max(1, Math.hypot(re.x - L.center.x, re.y - L.center.y)) / Math.max(1, Number(L.startDist || 1));
    s(((ie = L.item) == null ? void 0 : ie.rasterObjectId) || ((we = L.item) == null ? void 0 : we.id) || "", U, L.snapshot) && (R(), ye({ localOnly: !0, reason: ot.PAINT }));
  }
  function k(L, re) {
    var ie, we;
    const U = Math.max(1, Math.hypot(re.x - L.center.x, re.y - L.center.y)) / Math.max(1, Number(L.startDist || 1));
    l((ie = L.item) == null ? void 0 : ie.actionGroupId, U, 0, L.snapshot, (we = L.item) == null ? void 0 : we.layerKind, L.frameSnapshot) && (Z({ rebuildPaintEngine: !1 }), ye({ localOnly: !0, reason: ot.PAINT }));
  }
  function E(L, re, x) {
    var ie, we;
    let U = (Math.atan2(re.y - L.center.y, re.x - L.center.x) - Number(L.startAng || 0)) * ui;
    x.shiftKey && (U = Math.round(U / 45) * 45), l((ie = L.item) == null ? void 0 : ie.actionGroupId, 1, U, L.snapshot, (we = L.item) == null ? void 0 : we.layerKind, L.frameSnapshot) && (Z({ rebuildPaintEngine: !1 }), ye({ localOnly: !0, reason: ot.PAINT }));
  }
  function $(L, re) {
    const U = Math.max(1, Math.hypot(re.x - L.center.x, re.y - L.center.y)) / L.startDist;
    L.kind === "scale" ? I(L.item, { hFOV_deg: Oe(L.startHFOV * U, 1, 179), vFOV_deg: Oe(L.startVFOV * U, 1, 179) }) : L.kind === "scale_x" ? I(L.item, { hFOV_deg: Oe(L.startHFOV * U, 1, 179) }) : I(L.item, { vFOV_deg: Oe(L.startVFOV * U, 1, 179) }), j(L.item) || (L.item.aspect_id = rs(L.item)), K(L.item) && M(), ye({ localOnly: !0 });
  }
  function X(L, re, x) {
    let ie = (Math.atan2(re.y - L.center.y, re.x - L.center.x) - L.startAng) * ui, we = L.startRot - ie;
    x.shiftKey && (we = Math.round(we / 45) * 45), I(L.item, { [K(L.item) ? "rot_deg" : "roll_deg"]: we }), K(L.item) && M(), ye({ localOnly: !0 });
  }
  function le() {
    let L = !1;
    (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (L = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (L = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (L = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (L = !0), L && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? Z({ rebuildPaintEngine: !0 }) : R()), Se(), c(), r.setDirtyCanvas(!0, !0), te(), oe(), ye();
  }
  return {
    connect(L) {
      ({
        applyRasterObjectOffset: o,
        applyRasterObjectTransform: s,
        applyStrokeGroupOffset: a,
        applyStrokeGroupTransform: l,
        commitState: c,
        ensureGroupFrame: d,
        frameLocalPointToWorldDir: u,
        getActiveCutoutShot: f,
        getFrameViewRect: m,
        getRasterObjectList: S,
        getStrokeGroupStrokes: g,
        getUnwrapRect: v,
        isRasterObjectItem: y,
        isSceneSticker: j,
        isStickerItem: K,
        isStrokeGroupItem: F,
        markObjectVisualsDirty: M,
        markPaintCompositeVisualsDirty: R,
        markPaintStrokeVisualsDirty: Z,
        parseRasterObjectSelectionId: Y,
        poseOf: ae,
        pushHistory: Se,
        requestDraw: ye,
        screenPosToErpPoint: q,
        screenPosToFrameAsErpPoint: _e,
        screenToWorldDir: pe,
        shortestWrappedDelta: de,
        syncSidePanelControls: te,
        updateCursor: ge,
        updateSelectionMenu: oe,
        writePose: I
      } = L);
    },
    editUvAt: V,
    strokeGroupSnapshot: N,
    strokeGroupFrameSnapshot: fe,
    rasterObjectSnapshot: C,
    writePoseAtScreenPoint: O,
    startScale: _,
    startAxisScale: P,
    startRotate: ce,
    startMove: be,
    startHitMove: D,
    moveItem: b,
    moveStrokeGroup: W,
    moveRasterObject: p,
    scaleRasterObject: h,
    scaleStrokeGroup: k,
    rotateStrokeGroup: E,
    scaleItem: $,
    rotateItem: X,
    endTransform: le
  };
}
function iI(e) {
  const { canvas: t, editor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se;
  function ye(pe, de) {
    var ge, oe;
    const te = y(pe);
    return te != null && te.visible ? { x: Number(((ge = te.center) == null ? void 0 : ge.x) || 0), y: Number(((oe = te.center) == null ? void 0 : oe.y) || 0) } : { x: de.x, y: de.y };
  }
  function q(pe, de, te, ge) {
    n.interaction = {
      kind: "move_multi",
      items: te.map((oe) => oe),
      offset: { x: de.x - ge.center.x, y: de.y - ge.center.y },
      startCenter: { x: ge.center.x, y: ge.center.y },
      stickerSnapshots: te.filter((oe) => f(oe)).map((oe) => ({
        id: String(oe.id || ""),
        yaw_deg: Number(K(oe).yaw_deg || 0),
        pitch_deg: Number(K(oe).pitch_deg || 0),
        center: ye(oe, de)
      })),
      strokeSnapshots: te.filter((oe) => m(oe)).map((oe) => ({
        id: String(oe.actionGroupId || oe.id || ""),
        layerKind: String(oe.layerKind || "paint"),
        snapshot: Y(oe),
        frameSnapshot: Z(oe),
        center: ye(oe, de),
        centerUv: d(oe.actionGroupId, oe.layerKind)
      })),
      rasterSnapshots: te.filter((oe) => u(oe)).map((oe) => ({
        id: j(oe.rasterObjectId || oe.id || ""),
        snapshot: F(oe),
        center: ye(oe, de),
        centerUv: c(oe)
      }))
    }, ae(de), t.setPointerCapture(pe.pointerId);
  }
  function _e(pe, de) {
    var C, O, _, P, ce, be, D, b, W, p;
    const te = de.x - Number(((C = pe.offset) == null ? void 0 : C.x) || 0), ge = de.y - Number(((O = pe.offset) == null ? void 0 : O.y) || 0);
    let oe = !1, I = !1, V = !1;
    const N = te - Number(((_ = pe.startCenter) == null ? void 0 : _.x) || te), fe = ge - Number(((P = pe.startCenter) == null ? void 0 : P.y) || ge);
    for (const h of Array.isArray(pe.stickerSnapshots) ? pe.stickerSnapshots : []) {
      const k = (r === "cutout" ? a() : l()).find(($) => String(($ == null ? void 0 : $.id) || "") === String(h.id || ""));
      if (!k || !f(k)) continue;
      const E = {
        x: Number(((ce = h.center) == null ? void 0 : ce.x) || 0) + N,
        y: Number(((be = h.center) == null ? void 0 : be.y) || 0) + fe
      };
      Se(k, E.x, E.y) && (oe = !0);
    }
    for (const h of Array.isArray(pe.strokeSnapshots) ? pe.strokeSnapshots : []) {
      const k = {
        x: Number(((D = h.center) == null ? void 0 : D.x) || 0) + N,
        y: Number(((b = h.center) == null ? void 0 : b.y) || 0) + fe
      }, E = s(k), $ = h.centerUv || null;
      if (E && $) {
        const X = R(Number(E.u || 0), Number($.u || 0)), le = Number(E.v || 0) - Number($.v || 0);
        o(h.id, X, le, h.snapshot, h.layerKind, h.frameSnapshot) && (oe = !0, I = !0);
      }
    }
    for (const h of Array.isArray(pe.rasterSnapshots) ? pe.rasterSnapshots : []) {
      const k = {
        x: Number(((W = h.center) == null ? void 0 : W.x) || 0) + N,
        y: Number(((p = h.center) == null ? void 0 : p.y) || 0) + fe
      }, E = s(k), $ = h.centerUv || null;
      if (E && $) {
        const X = R(Number(E.u || 0), Number($.u || 0)), le = Number(E.v || 0) - Number($.v || 0);
        i(h.id, X, le, h.snapshot) && (oe = !0, V = !0);
      }
    }
    oe && (I ? v({ rebuildPaintEngine: !1 }) : V ? g() : S(), M({ localOnly: !0 }));
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
        isStrokeGroupItem: m,
        markObjectVisualsDirty: S,
        markPaintCompositeVisualsDirty: g,
        markPaintStrokeVisualsDirty: v,
        objectGeom: y,
        parseRasterObjectSelectionId: j,
        poseOf: K,
        rasterObjectSnapshot: F,
        requestDraw: M,
        shortestWrappedDelta: R,
        strokeGroupFrameSnapshot: Z,
        strokeGroupSnapshot: Y,
        updateCursor: ae,
        writePoseAtScreenPoint: Se
      } = pe);
    },
    startMultiMove: q,
    moveMulti: _e
  };
}
function oI(e) {
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
  let f, m, S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be;
  function D(E, $, X = !1) {
    var we;
    N();
    const le = a && r.mode === "frame" ? j() : null, L = le || M(), re = le ? "shot" : Z(), x = I();
    if (x && !ce(x) || !x && (!L || re === "stroke" || Y(L))) return;
    const U = (((we = u.sidePanel) == null ? void 0 : we.params) || []).find((Me) => Me.key === E);
    if (!U || U.enabled === !1) return;
    let ie = Number($);
    if (Number.isNaN(ie) && (ie = 0), (x || t) && Q2.has(E) ? ie = E === "scale" ? Math.max(ie, I0) : ie : ie = Oe(ie, Number(U.min), Number(U.max)), E === "yaw_deg" && (ie = It(ie)), !x && t && E.startsWith("position_")) {
      C(), WS(l.camera, r.frame, E, ie), P(), te(), X && pe();
      return;
    }
    if (x) {
      YS(x, r.frame, E, ie), ye(), P(), te(), X && pe();
      return;
    }
    E === "opacity" ? US(L, r.frame, ie / 100) : be(L, { [E]: ie }), a && !ae(L) && (E === "hFOV_deg" || E === "vFOV_deg") && (L.aspect_id = rs(L)), P(), te(), X && pe();
  }
  function b(E, $) {
    var L;
    const X = (L = u.sidePanel) == null ? void 0 : L.upstream;
    if (!X) return !1;
    const le = $ ? X.lanes.find((re) => re.name === $ && re.action === E) : E === "revert-upstream" ? X.revertAll : null;
    return !!le && !le.disabled;
  }
  function W(E) {
    const $ = I() || M();
    Ct($) && (N(), oe($, E) && (de(), ye(), pe(), v(), P(), _(), te()));
  }
  async function p(E) {
    var le, L, re, x, U, ie, we;
    const $ = E.target.closest("[data-action]");
    if (!$) return;
    const X = String($.getAttribute("data-action") || "");
    if (X === "coverage-set") {
      const Me = vn($.getAttribute("data-coverage"));
      if (Me === vn(l.coverage)) return;
      l.coverage = Me, r.coverage = Me, n && (n.value = String(Me)), o ? s.backgroundDirty = !0 : (y(), fe({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), P(), _(), te();
      return;
    }
    if (X === "revert-handoff-lane" || X === "revert-upstream") {
      const Me = $.getAttribute("data-lane") || null;
      if (!b(X, Me)) return;
      X === "revert-handoff-lane" ? (N(), ge(Me)) : W(Me);
      return;
    }
    if (X === "toggle-selection-picker") {
      if ((L = (le = u.sidePanel) == null ? void 0 : le.selectionPicker) != null && L.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (X === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const Me = String($.getAttribute("data-selection-id") || "");
      let Ce = null;
      if (Me && (d === "stickers" ? Ce = [...F(), ...c ? l.shots : []].find((me) => String((me == null ? void 0 : me.id) || "") === Me) || null : Ce = ((re = K().find((me) => {
        var ue;
        return String(((ue = me == null ? void 0 : me.item) == null ? void 0 : ue.id) || "") === Me;
      })) == null ? void 0 : re.item) || null), V(Ce || null), Ce && !Se(Ce)) {
        const me = _e(Ce);
        O(It(Number(me.yaw_deg || 0)), Oe(Number(me.pitch_deg || 0), -89.9, 89.9));
      }
      P(), _(), te();
      return;
    }
    if (X === "copy-state-inline") {
      const Me = M(), Ce = Z();
      if (!Me || Ce === "stroke" || R().length > 1) return;
      const me = JSON.stringify(a && Ce !== "image" ? m(Me) : S(_e(Me)));
      try {
        await navigator.clipboard.writeText(me), (x = u.sidePanel) != null && x.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ue;
          (ue = u.sidePanel) != null && ue.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (X === "set-invert-x") {
      l.ui_settings.invert_view_x = $.getAttribute("data-value") === "1", q(), P(), (U = i.setDirtyCanvas) == null || U.call(i, !0, !0), te();
      return;
    }
    if (X === "set-invert-y") {
      l.ui_settings.invert_view_y = $.getAttribute("data-value") === "1", q(), P(), (ie = i.setDirtyCanvas) == null || ie.call(i, !0, !0), te();
      return;
    }
    if (X === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, q(), P(), (we = i.setDirtyCanvas) == null || we.call(i, !0, !0), te();
      return;
    }
    if (X === "close-preview") {
      g();
      return;
    }
    if (X === "cancel-close") {
      g();
      return;
    }
    X === "save-close" && (f(), g());
  }
  function h(E) {
    const $ = E.target.closest("[data-action='param-input']");
    $ && D(String($.getAttribute("data-param-key") || ""), $.value, !1);
  }
  function k(E) {
    const $ = E.target.closest("[data-action='param-input']");
    $ && D(String($.getAttribute("data-param-key") || ""), $.value, !0);
  }
  return {
    connect(E) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: m,
        buildCanonicalSelectedStickerState: S,
        closeEditor: g,
        commitAndRefreshNode: v,
        commitState: y,
        getActiveCutoutShot: j,
        getCutoutInspectorItems: K,
        getList: F,
        getSelected: M,
        getSelectedItems: R,
        getSelectedKind: Z,
        isItemLocked: Y,
        isSceneSticker: ae,
        isStrokeGroupItem: Se,
        markObjectVisualsDirty: ye,
        persistUiSettings: q,
        poseOf: _e,
        pushHistory: pe,
        releaseHiddenSelection: de,
        requestDraw: te,
        revertPortHandoffLane: ge,
        revertUpstreamSticker: oe,
        selectedWorldSticker: I,
        setSelectedItem: V,
        stopTimelinePlayback: N,
        syncCoverageChangeToNodePreviews: fe,
        syncCutoutShot: C,
        turnViewTo: O,
        updateSelectionMenu: _,
        updateSidePanel: P,
        worldStickerEditable: ce,
        writePose: be
      } = E);
    },
    onSidePanelClick: p,
    onSidePanelInput: h,
    onSidePanelChange: k
  };
}
function sI(e) {
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
    videoEl: m
  } = e;
  let S, g, v, y, j, K, F, M, R, Z, Y, ae, Se, ye, q, _e, pe, de, te, ge, oe, I, V, N, fe, C, O, _, P, ce, be, D, b, W, p, h, k, E, $, X, le, L, re, x, U, ie, we, Me, Ce, me, ue;
  const A = () => {
    if (!t.customPaintSessionStart) return;
    if (Oa(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (gA(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Q = [
      wn(t.customPaintColor),
      ...t.customPaintHistory.filter((Pe) => !Oa(Pe, t.customPaintColor))
    ];
    t.customPaintHistory = Q.slice(0, 8), t.customPaintSessionStart = null;
  }, J = (Q = !1) => {
    !i || i.hidden || (Q ? A() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, H = () => {
    i && (i.hidden && (t.customPaintSessionStart = wn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function z() {
    $();
  }
  function T(Q) {
    var it, at, St, ut, Et;
    if ((at = (it = Q.target) == null ? void 0 : it.matches) != null && at.call(it, "[data-confirm-overlay]")) {
      const Ye = (St = f.confirmDialog) == null ? void 0 : St.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ye == null || Ye(!1);
      return;
    }
    const Pe = Q.target.closest("[data-space-mode]");
    if (Pe) {
      W(Pe.getAttribute("data-space-mode"));
      return;
    }
    const ee = Q.target.closest("[data-gizmo-mode]");
    if (ee) {
      t.gizmoMode = ee.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, Ce(), _({ localOnly: !0, reason: ot.VIEW });
      return;
    }
    const ke = Q.target.closest("[data-view]");
    if (ke) {
      if (ke.getAttribute("aria-disabled") === "true") return;
      const Ye = t.mode;
      t.mode = String(ke.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (Ye !== "frame" && (c.frameSafeRect = null), me(), Ce()), ye(), re(), _();
      return;
    }
    const Ae = Q.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const Ye = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ye, (Ye === "paint" || Ye === "mask") && R({ preservePanelValues: !0 }), X(), me(), Ce(), _();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const Ye = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((Ye === "undo" || Ye === "redo") && Ae.disabled) return;
        Ye === "undo" ? P(-1) : Ye === "redo" ? P(1) : Ye === "clear" ? F() : Ye === "add" || Ye === "add-image" ? g() : Ye === "add-world" ? y() : Ye === "add-or-look" ? S() : Ye === "add-camera" && v();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ye = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ye, R({ preservePanelValues: !0 }), hn[Ye] && (t.activeBrushPresetId = Ye), X(), me(), Ce(), _();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), R({ preservePanelValues: !0 }), X(), me(), Ce(), _();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const Ye = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        M(Ye);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const Ye = rl.find((Vt) => Vt.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!Ye) return;
        t.paintColor = wn(Ye.color), J(!0), X();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Q.preventDefault(), Q.stopPropagation(), i && !i.hidden ? J(!0) : H(), X();
        return;
      }
    }
    const Ie = String(((ut = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : ut.call(Ae, "data-action")) || "");
    if (Ie === "video-play-toggle") {
      if (Q.preventDefault(), Q.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      ue.resumeAfterScrub = !1, x();
      return;
    }
    if (Ie === "video-audio-toggle") {
      Q.preventDefault(), Q.stopPropagation(), we(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Ie === "video-loop-toggle") {
      if (Q.preventDefault(), Q.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      const Ye = !f.videoTransport.loop;
      f.videoTransport.loop = Ye, m.loop = Ye, L({
        hasAudio: f.videoTransport.hasAudio,
        loop: Ye,
        muted: m.muted,
        volume: Number(m.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Ie === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Ie === "frame-aspect-set") {
        const Ye = t.mode === "frame" ? _e() : null;
        if (!Ye || Ye.locked === !0) return;
        b(Ye, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, le(), fe(), Z(), re(), me(), Ce(), _();
        return;
      }
      if (Ie === "frame-aspect-custom") {
        const Ye = t.mode === "frame" ? _e() : null, Vt = Ae.getAttribute("data-custom-width"), zt = Ae.getAttribute("data-custom-height");
        if (!Ye || !j(Ye, Vt, zt)) return;
        f.frameRail.aspectOpen = !1, le(), fe(), Z(), re(), _();
        return;
      }
      if (Ie === "frame-rotate-90") {
        const Ye = t.mode === "frame" ? _e() : null;
        if (!Ye || Ye.locked === !0) return;
        be(Ye), f.frameRail.aspectOpen = !1, le(), fe(), Z(), re(), _();
        return;
      }
      if (Ie === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, Ce(), _();
        return;
      }
      if (Ie === "aspect-set") {
        const Ye = de();
        if (!Ye) return;
        const Vt = String(Ae.getAttribute("data-aspect") || "1:1");
        b(Ye, Vt), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, le(), fe(), Z(), Ce(), _();
        return;
      }
      if (Ie === "rotate-90") {
        const Ye = de();
        if (!Ye || oe()) return;
        be(Ye), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, le(), fe(), Z(), Ce(), _();
        return;
      }
      if (Ie === "bring-front") {
        K();
        return;
      }
      if (Ie === "send-back") {
        D();
        return;
      }
      if (Ie === "duplicate") {
        Se();
        return;
      }
      if (Ie === "replace-image") {
        O();
        return;
      }
      if (Ie === "toggle-lock") {
        ie();
        return;
      }
      if (Ie === "back-initial") {
        ce();
        return;
      }
      if (Ie === "toggle-visible") {
        U();
        return;
      }
      if (Ie === "delete") {
        ae();
        return;
      }
    }
    if (Ie === "reset-view") {
      if (t.mode === "frame") return;
      Me(
        { position: k(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Et = Y()) == null ? void 0 : Et.radius) || Wn },
        { mode: Fa(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Ie === "frame-view") {
      if (!I() || Fa(t.spaceMode, t.viewTransition) !== "6dof") return;
      q();
      return;
    }
    if (Ie === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, MA(n == null ? void 0 : n.id, t.showGrid), z(), _();
      return;
    }
    if (Ie === "toggle-fullscreen") {
      Q.preventDefault(), Q.stopPropagation(), ze();
      return;
    }
    if (Ie === "toggle-output-preview-size") {
      Q.preventDefault(), Q.stopPropagation();
      const Ye = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ye, E(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ye ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ge(), _();
      return;
    }
    const Te = Q.target.closest("[data-paint-history-index]");
    if (!Te) return;
    const $e = Number(Te.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[$e];
    Ue && (t.customPaintColor = wn(Ue), t.paintColor = wn(Ue), X());
  }
  function B(Q) {
    const Pe = Q.target.closest("[data-video-seek]");
    if (Pe) {
      if (!(m instanceof HTMLVideoElement)) return;
      V.playing && (ue.resumeAfterScrub = !0), V.seek(Jr(Number(Pe.value || 0), N()));
      return;
    }
    const ee = Q.target.closest("[data-video-volume]");
    if (ee) {
      if (!(m instanceof HTMLVideoElement)) return;
      const Ie = Oe(Number(ee.value || 0), 0, 1);
      m.volume = Ie, m.muted = Ie <= 1e-4, L({
        hasAudio: f.videoTransport.hasAudio,
        muted: m.muted,
        volume: Ie
      });
      return;
    }
    const ke = Q.target.closest("[data-paint-size-slider]");
    if (ke) {
      if (ke.disabled) return;
      const Ie = Math.max(1, Math.min(120, Math.round(Number(ke.value)))), Te = pe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Te] = Ie, X(), p();
      return;
    }
    const Ae = Q.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Ie = { ...t.customPaintColor, a: Oe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = wn(Ie), t.paintColor = wn(Ie), X();
    }
  }
  function G(Q) {
    var Pe;
    if (Q.target.closest("[data-video-seek]")) {
      if (!(m instanceof HTMLVideoElement)) return;
      ue.resumeAfterScrub && V.play(), ue.resumeAfterScrub = !1;
      return;
    }
    if (Q.target.closest("[data-video-volume]")) {
      typeof ((Pe = Q.target) == null ? void 0 : Pe.blur) == "function" && Q.target.blur();
      return;
    }
    Q.target.closest("[data-paint-size-slider]") && te();
  }
  function w(Q) {
    const Pe = Q.target.closest("[data-tip]");
    !Pe || !l.contains(Pe) || u.target !== Pe && (u.target = Pe, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === Pe && h(Pe);
    }, 220));
  }
  function ne(Q) {
    var ke, Ae;
    const Pe = Q.target.closest("[data-tip]");
    !Pe || u.target !== Pe || (Q.relatedTarget instanceof Element ? (Ae = (ke = Q.relatedTarget).closest) == null ? void 0 : Ae.call(ke, "[data-tip]") : null) === Pe || ge();
  }
  function se(Q, Pe) {
    var $e;
    if (!o) return;
    const ee = o.getBoundingClientRect(), ke = Oe((Q - ee.left) / Math.max(1, ee.width), 0, 1), Ae = 1 - Oe((Pe - ee.top) / Math.max(1, ee.height), 0, 1), Ie = qc(t.customPaintColor), Te = { ...Yc(Ie.h, ke, Ae), a: Number((($e = t.customPaintColor) == null ? void 0 : $e.a) ?? 1) };
    t.customPaintColor = wn(Te), t.paintColor = wn(Te), X();
  }
  function ve(Q) {
    var Ie;
    if (!s) return;
    const Pe = s.getBoundingClientRect(), ee = Oe((Q - Pe.left) / Math.max(1, Pe.width), 0, 1), ke = qc(t.customPaintColor), Ae = { ...Yc(ee, ke.s, ke.v), a: Number(((Ie = t.customPaintColor) == null ? void 0 : Ie.a) ?? 1) };
    t.customPaintColor = wn(Ae), t.paintColor = wn(Ae), X();
  }
  function he(Q, Pe) {
    const ee = Q.pointerId;
    Pe(Q);
    const ke = (Ie) => {
      Ie.pointerId === ee && Pe(Ie);
    }, Ae = (Ie) => {
      Ie.pointerId === ee && (window.removeEventListener("pointermove", ke), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", ke), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function xe() {
    const Q = !!t.fullscreen;
    Ni(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Q ? je.fullscreen_close : je.fullscreen,
      label: Q ? "Exit Fullscreen" : "Fullscreen",
      tip: Q ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Fe(Q) {
    const Pe = !!Q;
    t.fullscreen !== Pe && (t.fullscreen = Pe, l.classList.toggle("pano-modal-fullscreen", Pe), Pe ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), z(), xe(), C(), _());
  }
  function Le() {
    return document.fullscreenElement === r;
  }
  async function ze() {
    var Q, Pe;
    try {
      if (!document.fullscreenEnabled) {
        Fe(!t.fullscreen);
        return;
      }
      Le() ? await ((Pe = document.exitFullscreen) == null ? void 0 : Pe.call(document)) : await ((Q = r.requestFullscreen) == null ? void 0 : Q.call(r));
    } catch {
      Fe(!t.fullscreen);
    }
  }
  function We() {
    document.fullscreenEnabled && Fe(Le());
  }
  function Ge() {
    const Q = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Q ? je.fullscreen_close : je.fullscreen, f.outputPreviewToggle.label = Q ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Q ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Q) {
      ({
        addCutoutFrame: S,
        addImageSticker: g,
        addStudioCamera: v,
        addToWorld: y,
        applyCutoutAspectCustom: j,
        bringSelectedToFront: K,
        clearAll: F,
        clearPaintingLayer: M,
        clearSelection: R,
        commitAndRefreshNode: Z,
        contentSphere: Y,
        deleteSelected: ae,
        duplicateSelected: Se,
        forceCursorTool: ye,
        frameSpaceContent: q,
        getActiveCutoutShot: _e,
        getBrushPresetIdForTool: pe,
        getSelected: de,
        hidePaintSizePreview: te,
        hideTooltip: ge,
        isErpCamera: oe,
        isFreeSpaceView: I,
        playback: V,
        playbackFps: N,
        pushHistory: fe,
        queueVideoTransportLayout: C,
        replaceSelectedImage: O,
        requestDraw: _,
        restoreHistory: P,
        restoreSelectedToInitialPose: ce,
        rotateCutoutAspect90: be,
        sendSelectedToBack: D,
        setShotAspect: b,
        setSpaceMode: W,
        showPaintSizePreview: p,
        showTooltipFor: h,
        spaceOrigin: k,
        startAnimation: E,
        syncFloatingViewButtonState: $,
        syncPaintUi: X,
        syncSidePanelControls: le,
        syncVideoTransportState: L,
        syncViewToggleState: re,
        togglePlayback: x,
        toggleSelectedExternalStickerVisibility: U,
        toggleSelectedLock: ie,
        toggleVideoMuted: we,
        transitionView: Me,
        updateSelectionMenu: Ce,
        updateSidePanel: me,
        videoState: ue
      } = Q);
    },
    closePaintColorPop: J,
    syncGridToggleButton: z,
    onRootClick: T,
    onRootInput: B,
    onRootChange: G,
    onRootPointerOver: w,
    onRootPointerOut: ne,
    updatePaintColorFromSv: se,
    updatePaintColorFromHue: ve,
    bindDrag: he,
    syncFullscreenButton: xe,
    setFullscreenState: Fe,
    onFullscreenChange: We,
    syncOutputPreviewToggleButton: Ge
  };
}
function aI(e) {
  const {
    editor: t,
    overlay: n,
    readOnly: r,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, m, S, g, v, y, j, K, F, M, R;
  const Z = gC();
  function Y(C) {
    var O, _, P, ce, be;
    if (C.key === "Escape") {
      if (l()) {
        C.preventDefault(), C.stopPropagation(), (O = C.stopImmediatePropagation) == null || O.call(C);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === n) {
        C.preventDefault(), C.stopPropagation(), (_ = C.stopImmediatePropagation) == null || _.call(C), (P = document.exitFullscreen) == null || P.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        C.preventDefault(), C.stopPropagation(), (ce = C.stopImmediatePropagation) == null || ce.call(C), j(!1);
        return;
      }
      C.preventDefault(), C.stopPropagation(), (be = C.stopImmediatePropagation) == null || be.call(C), d();
    }
  }
  function ae(C) {
    const O = String(C.key || ""), _ = String(C.code || ""), P = Number(C.keyCode || 0);
    if (!(O === "Delete" || _ === "Delete" || P === 46) && !(O === "Backspace" || _ === "Backspace" || P === 8)) return;
    const D = C.target, b = ((D == null ? void 0 : D.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || D != null && D.isContentEditable) return;
    if (o.selection) {
      f(), C.preventDefault(), C.stopPropagation();
      return;
    }
    if (m()) {
      C.preventDefault(), C.stopPropagation();
      return;
    }
    v() && (u(), C.preventDefault(), C.stopPropagation());
  }
  function Se(C) {
    if (s.confirmDialog.visible) return !1;
    const O = C.composedPath()[0];
    if (O !== document.body && O !== document.documentElement && !n.contains(O)) return !1;
    const _ = ((O == null ? void 0 : O.tagName) || "").toUpperCase();
    return _ === "INPUT" ? !Z2.has(String(O.type || "text").toLowerCase()) : _ !== "TEXTAREA" && _ !== "SELECT" && !(O != null && O.isContentEditable);
  }
  function ye(C) {
    return C.code !== "Space" || C.ctrlKey || C.metaKey || C.altKey || r || !i || !s.timeline.visible ? !1 : Se(C);
  }
  function q(C) {
    ye(C) && (C.preventDefault(), C.stopPropagation(), C.repeat || M());
  }
  function _e(C) {
    ye(C) && (C.preventDefault(), C.stopPropagation());
  }
  function pe(C) {
    if (Z.modifiers(C), !!U0(C.code)) {
      if (!Se(C)) {
        te(C.code);
        return;
      }
      C.ctrlKey || C.metaKey || (C.preventDefault(), C.stopPropagation(), a() && (Z.press(C.code, C.timeStamp), C.repeat || c(), K(() => {
      })));
    }
  }
  function de(C) {
    Z.modifiers(C), C.key === "Meta" && ge(), te(C.code) && (C.preventDefault(), C.stopPropagation());
  }
  function te(C) {
    return Z.release(C) ? (Z.held || S(), !0) : !1;
  }
  function ge() {
    Z.held && (Z.releaseAll(), S());
  }
  function oe() {
    document.hidden && ge();
  }
  function I() {
    ge();
  }
  function V(C) {
    const O = !!(C.ctrlKey || C.metaKey), _ = !!C.altKey;
    t.marqueeModifier === O && t.altModifier === _ || (t.marqueeModifier = O, t.altModifier = _, F(), R(t.pointerPos));
  }
  function N() {
    ge(), t.marqueeModifier = !1, t.altModifier = !1, F(), R(t.pointerPos);
  }
  function fe(C) {
    if (r || !C.ctrlKey && !C.metaKey) return;
    const O = String(C.key || "").toLowerCase(), _ = String(C.code || "");
    if (O !== "z" && _ !== "KeyZ") return;
    const P = C.target, ce = ((P == null ? void 0 : P.tagName) || "").toUpperCase();
    if (ce === "INPUT" || ce === "TEXTAREA" || P != null && P.isContentEditable) return;
    const { canUndo: be, canRedo: D } = g();
    C.shiftKey && !D || !C.shiftKey && !be || (y(C.shiftKey ? 1 : -1), C.preventDefault(), C.stopPropagation());
  }
  return {
    connect(C) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: m,
        endFrameKeyMove: S,
        getHistoryCapabilities: g,
        getSelected: v,
        restoreHistory: y,
        setFullscreenState: j,
        startAnimation: K,
        syncFrameRollKnob: F,
        togglePlayback: M,
        updateCursor: R
      } = C);
    },
    moveKeys: Z,
    onEscClose: Y,
    onDeleteKey: ae,
    onSpaceKey: q,
    onSpaceKeyUp: _e,
    onMoveKeyDown: pe,
    onMoveKeyUp: de,
    onVisibilityChange: oe,
    onContextMenu: I,
    onModifierKeyChange: V,
    onWindowBlur: N,
    onUndoRedoKey: fe
  };
}
const Op = /* @__PURE__ */ new Map(), Lr = kg({
  app: Kn,
  api: Xt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Uc,
    markImageFailed: C0,
    markImageLoading: N0,
    markImageReady: A0
  }
});
function Fp(e) {
  if (!bt(e, "background") || !bt(e, "external-sticker")) return null;
  const t = Lr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? $r(t[0]) : null;
}
const lI = Lr.assetSource, cI = Lr.source, uI = Lr.uiImage, dI = Lr.invalidateUiImage, Tp = Lr.loadPreferredExactLinkedImage;
async function fI(e, t, n = {}) {
  var Fd, Td, Dd, ds, Ld;
  await l0(e, { tolerateOperationFailure: !0 }), Lr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, s = bA(e, t);
  await od();
  const a = As(e, "output_preset"), l = As(e, "coverage"), c = As(e, "bg_color"), d = As(e, J2), u = () => {
    const Ve = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Tp(
      e,
      Ve,
      () => Bn(),
      `background:size:${Ve.join("|")}`
    );
  }, f = () => {
    const Ve = u();
    return _A(Ve);
  }, m = (Ve = 2048) => {
    const et = a == null ? void 0 : a.value;
    return SA(et) ? f() || Math.max(1, Math.round(Number(Ve || 2048))) : vA(et, Ve);
  }, S = e.__panoSceneStateV2 === !0, g = t === "stickers" && S, v = g && e.__panoStudio === !0, y = v, j = t === "cutout" || v, K = (S ? Oh : Eh)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: m(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: vn(l == null ? void 0 : l.value),
    sharedUiSettings: wA(),
    active: Rh(e),
    fps: S ? Fp(e) : null
  });
  Mn(e).liveState = K, Mn(e).liveStateVersion = 0;
  let F = null;
  y ? (F = K.camera && K.camera.visible !== !1 ? Dh(K.camera, 0) : null, K.shots = F ? [{ ...F, position: [...F.position] }] : [], K.active.selected_shot_id = null) : t === "cutout" && (K.shots = Array.isArray(K.shots) ? K.shots.slice(0, 1) : [], K.shots.length || (K.active.selected_shot_id = null));
  const M = t === "cutout" ? (() => {
    var $n;
    const Ve = Array.isArray(K.shots) ? K.shots : [], et = String((($n = K == null ? void 0 : K.active) == null ? void 0 : $n.selected_shot_id) || "");
    return Ve.find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === et) || Ve[0] || null;
  })() : null, R = M ? Y0(M, !1) : { width: 220, height: 132 }, Z = P0(v ? "studio" : t), Y = /* @__PURE__ */ Ui({
    stageStatus: zn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (Z.viewButtons || []).map((Ve) => ({ ...Ve, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Fd = Z.spaceButtons) != null && Fd.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: Z.spaceButtons, frame: Z.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (Z.toolButtons || []).map((Ve) => ({
      ...Ve,
      disabled: !1,
      ...Ve.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(Z.floatingButtons || []).map((Ve) => ({ ...Ve, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: je.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: je.aspect,
      rotateIcon: je.rotate_90,
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
      icon: je.fullscreen,
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
      historyEntries: Array.from({ length: 8 }, (Ve, et) => ({ index: et, color: null })),
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
      label: M ? "Loading preview" : "Add Frame to preview"
    }
  }), ae = { frame: /* @__PURE__ */ qs(0), playing: /* @__PURE__ */ qs(!1) }, Se = document.createElement("div");
  document.body.appendChild(Se);
  const ye = ({ intent: Ve, file: et } = {}) => {
    if (Ve === "add-world") {
      ze(et);
      return;
    }
    if (En(et)) {
      if (Ve === "add") {
        Le(et);
        return;
      }
      Ve === "replace" && oy(et);
    }
  }, q = ({ intent: Ve } = {}) => {
  }, _e = mu(q2, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: Z,
    paintSwatches: rl.map((Ve) => ({
      id: Ve.id,
      label: Ve.label,
      cssColor: Qn(Ve.color, 1)
    })),
    uiState: Y,
    playhead: ae,
    onClose: () => {
      cl();
    },
    onTimeline: (Ve) => ry(Ve),
    onImageFileSelected: ye,
    onImageFileCancelled: q
  });
  let pe = null;
  try {
    pe = _e.mount(Se);
  } catch (Ve) {
    try {
      _e.unmount();
    } catch {
    }
    throw Se.remove(), Ve;
  }
  const de = Se.querySelector(".pano-modal-overlay"), te = Se.querySelector(".pano-modal"), ge = te == null ? void 0 : te.querySelector("[data-stage-overlay]"), oe = te == null ? void 0 : te.querySelector("[data-stage-background]"), I = te == null ? void 0 : te.querySelector(".pano-stage-wrap"), V = ((Td = pe == null ? void 0 : pe.getPaintOverlayRefs) == null ? void 0 : Td.call(pe)) || {}, N = V.cursor || null, fe = V.sizePreview || null, C = V.sizeSample || null;
  if (!de || !te || !ge || !oe || !I || !N || !fe || !C)
    throw _e.unmount(), Se.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const O = ge.getContext("2d"), _ = te.querySelector("[data-side]"), P = te.querySelector("[data-video-element]"), ce = te.querySelector("[data-port-video-element]");
  wl(ge, "editor.stage-overlay"), wl(oe, "editor.stage-background"), xf(P, "editor.video"), xf(ce, "editor.port-video");
  const be = te.querySelector(".pano-floating-right"), D = te.querySelector(".pano-floating-top"), b = te.querySelector("[data-tool-rail]"), W = te.querySelector("[data-frame-rail]"), p = te.querySelector("[data-frame-roll-knob]"), h = te.querySelector("[data-paint-dock]"), k = te.querySelector(".pano-video-transport"), E = te.querySelector("[data-selection-menu]"), $ = te.querySelector("[data-tooltip]"), X = te.querySelector("[data-camera-preview-host]"), le = te.querySelector("[data-camera-preview-canvas]");
  wl(le, "editor.camera-preview");
  const L = te.querySelector("[data-paint-color-row]"), re = te.querySelector("[data-paint-color-pop]"), x = te.querySelector("[data-paint-color-sv]"), U = te.querySelector("[data-paint-color-sv-cursor]"), ie = te.querySelector("[data-paint-hue-strip]"), we = te.querySelector("[data-paint-hue-handle]");
  I == null || I.removeAttribute("data-stage-ready"), I == null || I.setAttribute("data-stage-loading-kind", "boot"), ge.style.opacity = "1", oe.style.opacity = "0", i && (_ == null || _.remove(), te.classList.add("pano-modal-readonly")), te.addEventListener("pointerdown", () => G.wake(), !0), te.addEventListener("pointerdown", (Ve) => {
    var et;
    Ve.target.closest("[data-frame-roll-knob]") || Et(), !Ve.target.closest(".pano-picker") && (Ve.target.closest("[data-paint-color-row]") || (te.querySelectorAll(".pano-picker-pop").forEach(($n) => {
      $n.hidden = !0;
    }), ee(!0), j && Ce.cutoutAspectOpen && !Ve.target.closest(".pano-aspect-popover") && !Ve.target.closest("[data-action='aspect']") && (Ce.cutoutAspectOpen = !1, Ce.menuMode = "", Ce.menuSize.measured = !1, Ny(), Bn()), (et = Y.frameRail) != null && et.aspectOpen && !Ve.target.closest(".pano-frame-aspect-control") && (Y.frameRail.aspectOpen = !1)));
  });
  const Ce = {
    mode: "pano",
    selectedId: z0(t, K),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Wn,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: vn(K.coverage),
    historyController: VA(K),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: pr,
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
    showGrid: xA(e == null ? void 0 : e.id, !0),
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
    paintEngine: Qa(),
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
  }, me = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (Ce.selectedId = null, K.active.selected_sticker_id = null), Ce.selectedIds = Ce.selectedId ? [Ce.selectedId] : [];
  const ue = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), z = Kt({ label: "editor.still" });
  z.__panoFrameIdx = 0;
  const T = Kt({ label: "editor.port-still" });
  T.__panoFrameIdx = 0;
  const B = {
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
  }, G = DM({
    requestAnimationFrame: (Ve) => requestAnimationFrame(Ve),
    cancelAnimationFrame: (Ve) => cancelAnimationFrame(Ve),
    draw: (Ve, et) => ky(Ve, et),
    animating: () => Te()
  }), w = FM({
    requestFrame: (Ve) => G.requestFrame(Ve),
    cancelFrame: (Ve) => G.cancelFrame(Ve),
    tasks: {
      seek: () => Nd.seek(me.scrubFrame),
      // A drag of the background's Clip range seeks its VIDEO to the time it puts at the playhead.
      background: () => Nd.seek(Ce.frame),
      timeline: () => _y(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        my(), Bn({ localOnly: !0, reason: ot.STATE });
      },
      sidePanel: () => Id()
    }
  }), ne = Q_({
    canvas: oe,
    onReady: () => {
      sl(), Bn({ reason: ot.CONTEXT });
    },
    onFailed: () => Bn(),
    onUpdate: () => Bn({ localOnly: !0, reason: ot.MEDIA }),
    onSplats: (Ve) => Bn({ localOnly: !0, reason: DC(Ve) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      at(), sl(), Bn({ reason: ot.CONTEXT });
    }
  }), se = Number.parseFloat(
    getComputedStyle(te).getPropertyValue("--pano-float-radius")
  ) || 10, ve = (Ve) => {
    const et = String(Ve || "default");
    ge.style.cursor !== et && (ge.style.cursor = et);
  }, he = {
    timer: 0,
    target: null
  }, xe = {
    active: !1,
    depth: 0
  }, Fe = gu({
    getView: () => ({ yaw: Ce.viewYaw, pitch: Ce.viewPitch, fov: Ce.viewFov }),
    setView: (Ve) => {
      Ce.viewYaw = It(Number(Ve.yaw || 0)), Ce.viewPitch = Oe(Number(Ve.pitch || 0), -89.9, 89.9), Ce.viewFov = Oe(Number(Ve.fov || Ce.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Ve = ge.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Ve.width || ge.clientWidth || 0)),
        h: Math.max(1, Number(Ve.height || ge.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Ve, et;
      return {
        x: (Ve = K.ui_settings) != null && Ve.invert_view_x ? -1 : 1,
        y: (et = K.ui_settings) != null && et.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => St(),
    onInteraction: () => G.requestDraw(ot.VIEW)
  }), {
    addImageStickerFromFile: Le,
    addWorldStickerFromFile: ze,
    applyInitialCutoutFocus: We,
    applyVideoTimelineFps: Ge,
    bindDrag: Q,
    cancelFrameCameraGesture: Pe,
    closePaintColorPop: ee,
    commitState: ke,
    disposeMediaSession: Ae,
    disposeUpstream: Ie,
    editorAnimating: Te,
    endFrameKeyMove: $e,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: it,
    forgetCameraPreviewFrame: at,
    getUnwrapRect: St,
    hidePaintSizePreview: ut,
    hideTooltip: Et,
    hoverWorldGizmo: Ye,
    isFreeFrameView: Vt,
    isFreeSpaceView: zt,
    migrateLegacyEmbeddedAssets: en,
    onCanvasDragOver: Sn,
    onCanvasDrop: Gt,
    onCanvasMouseMove: Ot,
    onCanvasPointerCancel: Re,
    onCanvasPointerDown: He,
    onCanvasPointerMove: Ke,
    onCanvasPointerUp: Mt,
    onCanvasWheel: ht,
    onContextMenu: _n,
    onDeleteKey: Wt,
    onEscClose: Ft,
    onFrameRollKnobDoubleClick: Rn,
    onFrameRollKnobPointerDown: ls,
    onFrameRollKnobPointerMove: dn,
    onFullscreenChange: cs,
    onModifierKeyChange: us,
    onMoveKeyDown: gd,
    onMoveKeyUp: yd,
    onRootChange: q0,
    onRootClick: X0,
    onRootInput: J0,
    onRootPointerOut: Z0,
    onRootPointerOver: Q0,
    onSidePanelChange: ey,
    onSidePanelClick: ty,
    onSidePanelInput: ny,
    onSpaceKey: bd,
    onSpaceKeyUp: vd,
    onTimelineAction: ry,
    onUndoRedoKey: Sd,
    onVisibilityChange: _d,
    onWindowBlur: wd,
    onWindowDragEnter: kd,
    onWindowDragLeave: xd,
    onWindowDragOver: Md,
    onWindowDrop: Pd,
    playback: Nd,
    pushHistory: iy,
    reconcileExternalStickerFromInputs: Ad,
    refreshModalVideoSource: ol,
    replaceSelectedImageFromFile: oy,
    requestDraw: Bn,
    restoreView: sy,
    sampleEditorDiagnostics: ay,
    saveView: ly,
    setDropCue: cy,
    setPointerPos: uy,
    stageResizeObserver: dy,
    stickerCornerOrderSanity: fy,
    stopRenderLoop: py,
    syncCanvasSize: sl,
    syncCutoutShot: my,
    syncFullscreenButton: hy,
    syncGridToggleButton: gy,
    syncLookAtFrameButtonState: yy,
    syncOutputPreviewToggleButton: by,
    syncPaintUi: vy,
    syncPaintingLayerAsync: Sy,
    syncTimeline: _y,
    syncUndoRedoButtons: wy,
    tick: ky,
    triggerBackgroundPersistenceOnClose: xy,
    updateCursor: Cd,
    updatePaintColorFromHue: My,
    updatePaintColorFromSv: Py,
    updateSelectionMenu: Ny,
    updateSidePanel: Id,
    viewControls: Ay,
    watchPixelRatio: Cy
  } = PA({
    api: Xt,
    app: Kn,
    backgroundCanvas: oe,
    bgWidget: c,
    cameraV2: y,
    canvas: ge,
    closeEditor: cl,
    comfyMedia: Lr,
    coverageWidget: l,
    ctx: O,
    cutoutPreviewCanvas: le,
    cutoutPreviewHost: X,
    dragCue: xe,
    dragFrames: w,
    editor: Ce,
    editorView: ne,
    floatingRightEl: be,
    floatingTopEl: D,
    frameGateCssRadius: se,
    frameRailEl: W,
    frameRollKnobEl: p,
    hideSidebar: i,
    imageCache: ue,
    initialShotBase: F,
    loadPreferredExactLinkedImage: Tp,
    mediaAssetSource: lI,
    mediaSource: cI,
    mediaUiImage: uI,
    node: e,
    overlay: de,
    paintColorPop: re,
    paintColorRow: L,
    paintColorSv: x,
    paintColorSvCursor: U,
    paintCursorEl: N,
    paintDockEl: h,
    paintHueHandle: we,
    paintHueStrip: ie,
    paintSizePreviewEl: fe,
    paintSizePreviewSampleEl: C,
    portStillCanvas: T,
    portVideoEl: ce,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: H,
    rasterImageAlphaCache: J,
    rasterImageCache: A,
    readOnly: r,
    resolveEditorOutputPresetWidth: m,
    root: te,
    runtime: B,
    sceneV2: g,
    scheduler: G,
    selectionMenu: E,
    setCanvasCursor: ve,
    shotEditor: j,
    stageWrap: I,
    state: K,
    stateV2: S,
    stateWidget: d,
    stillCanvas: z,
    studio: v,
    timeline: me,
    timelinePlayhead: ae,
    toolRailEl: b,
    tooltip: he,
    tooltipEl: $,
    type: t,
    uiState: Y,
    videoEl: P,
    videoTimelineFps: Fp,
    videoTransportEl: k,
    viewController: Fe,
    vueModal: pe
  }, [
    DA,
    $A,
    zA,
    jA,
    HA,
    KA,
    GA,
    WA,
    UA,
    OC,
    FC,
    TC,
    RC,
    VC,
    $C,
    zC,
    jC,
    HC,
    KC,
    GC,
    WC,
    UC,
    BC,
    YC,
    qC,
    XC,
    JC,
    ZC,
    QC,
    eI,
    tI,
    nI,
    rI,
    iI,
    oI,
    sI,
    aI
  ]);
  fy(), dy.observe(ge), Cy();
  const Ed = () => ke();
  r || (Uo(e).flushBeforeQueue = Ed), p == null || p.addEventListener("pointerdown", ls), p == null || p.addEventListener("pointermove", dn), p == null || p.addEventListener("pointerup", Ue), p == null || p.addEventListener("pointercancel", () => Pe()), p == null || p.addEventListener("lostpointercapture", () => {
    var Ve;
    ((Ve = Ce.interaction) == null ? void 0 : Ve.source) === "knob" && Pe();
  }), p == null || p.addEventListener("dblclick", Rn), ge.onpointerdown = He, ge.onpointermove = Ke, ge.onpointerup = Mt, ge.onpointercancel = Re, ge.onlostpointercapture = () => {
    Pe();
  }, ge.onauxclick = (Ve) => {
    Ve.button === 1 && Ve.preventDefault();
  }, ge.oncontextmenu = (Ve) => {
    (zt() || Vt()) && ix(Ay(), 2) && Ve.preventDefault();
  }, ge.onmousemove = Ot, ge.onpointerleave = () => {
    Ce.interaction || Ye({ x: -1e6, y: -1e6 });
  }, ge.onmouseleave = () => {
    uy(Ce.pointerPos, !1), Cd(Ce.pointerPos), Ce.mode === "frame" && Ce.primaryTool === "cursor" && Bn({ localOnly: !0, reason: ot.OVERLAY });
  }, ge.onwheel = ht, ge.ondragover = Sn, ge.ondrop = Gt, window.addEventListener("dragenter", kd, !0), window.addEventListener("dragover", Md, !0), window.addEventListener("dragleave", xd, !0), window.addEventListener("drop", Pd, !0), _ == null || _.addEventListener("click", ty), _ == null || _.addEventListener("input", ny), _ == null || _.addEventListener("change", ey), gy(), te.addEventListener("click", X0), te.addEventListener("input", J0), te.addEventListener("change", q0), te.addEventListener("pointerup", (Ve) => {
    var et;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((et = Ve.target) == null ? void 0 : et.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && ut();
  }), te.addEventListener("pointercancel", (Ve) => {
    var et;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((et = Ve.target) == null ? void 0 : et.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && ut();
  }), te.addEventListener("focusout", (Ve) => {
    Ve.target.closest("[data-paint-size-slider]") && ut();
  }), te.addEventListener("pointerover", Q0), te.addEventListener("pointerout", Z0), te.addEventListener("pointerdown", (Ve) => {
    Ve.target.closest("[data-frame-roll-knob]") || Et();
  }), x && (x.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), Q(Ve, (et) => Py(et.clientX, et.clientY));
  }), ie && (ie.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), Q(Ve, (et) => My(et.clientX));
  }), te.addEventListener("click", (Ve) => {
    var Kr;
    const et = Ve.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!et) return;
    const $n = et.getAttribute("data-action") === "confirm-accept", Ut = (Kr = Y.confirmDialog) == null ? void 0 : Kr.resolve;
    Y.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ut == null || Ut($n);
  }), document.addEventListener("fullscreenchange", cs), hy(), by();
  const al = e.onConnectionsChange;
  let ll = null, Od = () => {
  };
  !r && t === "stickers" && (Od = s0(e, (Ve = "sync") => {
    Ve === "executed" && (dI(ue, ai), ol(), g && Ge()), Ad(Ve);
  }, { editor: !0 }), ll = function(...et) {
    typeof al == "function" && al.apply(this, et), ol(), Or(this, "connections");
  }, e.onConnectionsChange = ll), r || Op.set(String(e.id ?? "0"), () => Sy());
  let gi = null;
  async function cl() {
    return gi || (gi = (async () => {
      var et, $n, Ut, Kr, Mr, fs, Rd, ps, Vd;
      const Ve = pw(e);
      return Ve && (Ve.open = !1), Op.delete(String(e.id ?? "0")), it(), $e(), r || ke(), ly(), document.fullscreenElement === de && ((et = document.exitFullscreen) == null || et.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", cs), Mn(e).liveState = null, (Ve == null ? void 0 : Ve.flushBeforeQueue) === Ed && (Ve.flushBeforeQueue = null), (Kr = (Ut = ($n = Ec(e)) == null ? void 0 : $n.dom) == null ? void 0 : Ut.requestDraw) == null || Kr.call(Ut), (fs = (Mr = e.graph) == null ? void 0 : Mr.setDirtyCanvas) == null || fs.call(Mr, !0, !0), (Vd = (ps = (Rd = Kn) == null ? void 0 : Rd.canvas) == null ? void 0 : ps.setDirty) == null || Vd.call(ps, !0, !0), Et(), w.cancel(), py(), Ae(), Ie(), ne.dispose(), cy(!1), window.removeEventListener("keydown", Ft, !0), window.removeEventListener("keydown", Wt, !0), window.removeEventListener("keydown", bd, !0), window.removeEventListener("keyup", vd, !0), window.removeEventListener("keydown", gd, !0), window.removeEventListener("keyup", yd, !0), document.removeEventListener("visibilitychange", _d), window.removeEventListener("contextmenu", _n, !0), window.removeEventListener("keydown", us, !0), window.removeEventListener("keyup", us, !0), window.removeEventListener("blur", wd), window.removeEventListener("keydown", Sd, !0), window.removeEventListener("dragenter", kd, !0), window.removeEventListener("dragover", Md, !0), window.removeEventListener("dragleave", xd, !0), window.removeEventListener("drop", Pd, !0), !r && t === "stickers" && (e.onConnectionsChange === ll && (e.onConnectionsChange = al), Od()), _e.unmount(), Se.remove(), xy(), gi = null, !0;
    })().catch((Ve) => (console.error("[PanoramaCutoutSync] closeEditor failed", Ve), gi = null, !1)), gi);
  }
  window.addEventListener("keydown", Ft, !0), window.addEventListener("keydown", Wt, !0), window.addEventListener("keydown", bd, !0), window.addEventListener("keyup", vd, !0), window.addEventListener("keydown", gd, !0), window.addEventListener("keyup", yd, !0), document.addEventListener("visibilitychange", _d), window.addEventListener("contextmenu", _n, !0), window.addEventListener("keydown", us, !0), window.addEventListener("keyup", us, !0), window.addEventListener("blur", wd), window.addEventListener("keydown", Sd, !0), de.addEventListener("pointerdown", (Ve) => {
    Ve.target === de && cl();
  });
  function Vn(Ve, et, { rollbackState: $n = !1 } = {}) {
    let Ut = "";
    try {
      $n && (Ut = JSON.stringify(K)), et();
    } catch (Kr) {
      if (Ut)
        try {
          const Mr = JSON.parse(Ut);
          Object.keys(K).forEach((fs) => delete K[fs]), Object.assign(K, Mr), r || ke();
        } catch (Mr) {
          console.error(`[PanoramaStickers] editor boot step "${Ve}" rollback failed`, Mr);
        }
      Y.stageWarningDetail = `boot:${Ve}`, console.error(`[PanoramaStickers] editor boot step "${Ve}" failed`, Kr);
    }
  }
  Vn("view", sy), Vn("cutout-focus", We), !r && t === "stickers" && Vn("external-sticker-sync", () => Ad("open"), { rollbackState: !0 }), en().catch((Ve) => {
    Y.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Ve);
  }), Vn("history", () => iy({ initial: !0 })), Vn("undo-redo", wy), Vn("paint-ui", vy), Vn("side-panel", Id), Vn("look-at-frame", yy), Vn("video-source", ol), Vn("canvas-size", sl), Vn("cursor", () => Cd(Ce.pointerPos)), Uo(e).open = !0, (Ld = (ds = (Dd = Ec(e)) == null ? void 0 : Dd.dom) == null ? void 0 : ds.requestDraw) == null || Ld.call(ds), Bn(), ay();
}
Kn.registerExtension(mx({
  app: Kn,
  openEditor: fI,
  attachStickers: EM,
  attachCutout: OM,
  attachPreview: IM,
  restoreOutput: yM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: tA
}));
