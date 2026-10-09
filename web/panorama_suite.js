import * as Os from "../../scripts/app.js";
import { app as Gn } from "../../scripts/app.js";
import { api as Xt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Zc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, Ei = [], rr = () => {
}, Rp = () => !1, La = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ra = (e) => e.startsWith("onUpdate:"), Qt = Object.assign, Qc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dy = Object.prototype.hasOwnProperty, ft = (e, t) => Dy.call(e, t), Ze = Array.isArray, Oi = (e) => Qo(e) === "[object Map]", Vp = (e) => Qo(e) === "[object Set]", jd = (e) => Qo(e) === "[object Date]", rt = (e) => typeof e == "function", zt = (e) => typeof e == "string", sr = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", $p = (e) => (vt(e) || rt(e)) && rt(e.then) && rt(e.catch), zp = Object.prototype.toString, Qo = (e) => zp.call(e), Ly = (e) => Qo(e).slice(8, -1), jp = (e) => Qo(e) === "[object Object]", eu = (e) => zt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yo = /* @__PURE__ */ Zc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Va = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ry = /-\w/g, ln = Va(
  (e) => e.replace(Ry, (t) => t.slice(1).toUpperCase())
), Vy = /\B([A-Z])/g, fi = Va(
  (e) => e.replace(Vy, "-$1").toLowerCase()
), $a = Va((e) => e.charAt(0).toUpperCase() + e.slice(1)), dl = Va(
  (e) => e ? `on${$a(e)}` : ""
), tr = (e, t) => !Object.is(e, t), Fs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Hp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, tu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Hd;
const za = () => Hd || (Hd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yt(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = zt(r) ? Hy(r) : yt(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (zt(e) || vt(e))
    return e;
}
const $y = /;(?![^(]*\))/g, zy = /:([^]+)/, jy = /\/\*[^]*?\*\//g;
function Hy(e) {
  const t = {};
  return e.replace(jy, "").split($y).forEach((n) => {
    if (n) {
      const r = n.split(zy);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (zt(e))
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
const Gy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ky = /* @__PURE__ */ Zc(Gy);
function Gp(e) {
  return !!e || e === "";
}
function Wy(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = nu(e[r], t[r]);
  return n;
}
function nu(e, t) {
  if (e === t) return !0;
  let n = jd(e), r = jd(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = sr(e), r = sr(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? Wy(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !nu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Kp = (e) => !!(e && e.__v_isRef === !0), Xe = (e) => zt(e) ? e : e == null ? "" : Ze(e) || vt(e) && (e.toString === zp || !rt(e.toString)) ? Kp(e) ? Xe(e.value) : JSON.stringify(e, Wp, 2) : String(e), Wp = (e, t) => Kp(t) ? Wp(e, t.value) : Oi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[fl(r, o) + " =>"] = i, n),
    {}
  )
} : Vp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fl(n))
} : sr(t) ? fl(t) : vt(t) && !Ze(t) && !jp(t) ? String(t) : t, fl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    sr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pn;
class Uy {
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
function By() {
  return pn;
}
let kt;
const pl = /* @__PURE__ */ new WeakSet();
class Up {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pn && pn.active && pn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pl.has(this) && (pl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Gd(this), qp(this);
    const t = kt, n = Kn;
    kt = this, Kn = !0;
    try {
      return this.fn();
    } finally {
      Xp(this), kt = t, Kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ou(t);
      this.deps = this.depsTail = void 0, Gd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ic(this) && this.run();
  }
  get dirty() {
    return ic(this);
  }
}
let Bp = 0, bo, vo;
function Yp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = vo, vo = e;
    return;
  }
  e.next = bo, bo = e;
}
function ru() {
  Bp++;
}
function iu() {
  if (--Bp > 0)
    return;
  if (vo) {
    let t = vo;
    for (vo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; bo; ) {
    let t = bo;
    for (bo = void 0; t; ) {
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
function qp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), ou(r), Yy(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function ic(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Fo) || (e.globalVersion = Fo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ic(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = kt, r = Kn;
  kt = e, Kn = !0;
  try {
    qp(e);
    const i = e.fn(e._value);
    (t.version === 0 || tr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    kt = n, Kn = r, Xp(e), e.flags &= -3;
  }
}
function ou(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ou(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Kn = !0;
const Zp = [];
function Sr() {
  Zp.push(Kn), Kn = !1;
}
function _r() {
  const e = Zp.pop();
  Kn = e === void 0 ? !0 : e;
}
function Gd(e) {
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
let Fo = 0;
class qy {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class su {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!kt || !Kn || kt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== kt)
      n = this.activeLink = new qy(kt, this), kt.deps ? (n.prevDep = kt.depsTail, kt.depsTail.nextDep = n, kt.depsTail = n) : kt.deps = kt.depsTail = n, Qp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = kt.depsTail, n.nextDep = void 0, kt.depsTail.nextDep = n, kt.depsTail = n, kt.deps === n && (kt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Fo++, this.notify(t);
  }
  notify(t) {
    ru();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      iu();
    }
  }
}
function Qp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Qp(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const oc = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ Symbol(
  ""
), sc = /* @__PURE__ */ Symbol(
  ""
), To = /* @__PURE__ */ Symbol(
  ""
);
function Yt(e, t, n) {
  if (Kn && kt) {
    let r = oc.get(e);
    r || oc.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new su()), i.map = r, i.key = n), i.track();
  }
}
function mr(e, t, n, r, i, o) {
  const s = oc.get(e);
  if (!s) {
    Fo++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ru(), t === "clear")
    s.forEach(a);
  else {
    const l = Ze(e), c = l && eu(n);
    if (l && n === "length") {
      const d = Number(r);
      s.forEach((u, f) => {
        (f === "length" || f === To || !sr(f) && f >= d) && a(u);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(To)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(ni)), Oi(e) && a(s.get(sc)));
          break;
        case "delete":
          l || (a(s.get(ni)), Oi(e) && a(s.get(sc)));
          break;
        case "set":
          Oi(e) && a(s.get(ni));
          break;
      }
  }
  iu();
}
function bi(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (Yt(t, "iterate", To), /* @__PURE__ */ On(e) ? t : t.map(Un));
}
function ja(e) {
  return Yt(e = /* @__PURE__ */ dt(e), "iterate", To), e;
}
function Zn(e, t) {
  return /* @__PURE__ */ wr(e) ? zi(/* @__PURE__ */ ri(e) ? Un(t) : t) : Un(t);
}
const Xy = {
  __proto__: null,
  [Symbol.iterator]() {
    return ml(this, Symbol.iterator, (e) => Zn(this, e));
  },
  concat(...e) {
    return bi(this).concat(
      ...e.map((t) => Ze(t) ? bi(t) : t)
    );
  },
  entries() {
    return ml(this, "entries", (e) => (e[1] = Zn(this, e[1]), e));
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
      (n) => n.map((r) => Zn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return lr(
      this,
      "find",
      e,
      t,
      (n) => Zn(this, n),
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
      (n) => Zn(this, n),
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
    return hl(this, "includes", e);
  },
  indexOf(...e) {
    return hl(this, "indexOf", e);
  },
  join(e) {
    return bi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return hl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ji(this, "pop");
  },
  push(...e) {
    return Ji(this, "push", e);
  },
  reduce(e, ...t) {
    return Kd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Kd(this, "reduceRight", e, t);
  },
  shift() {
    return Ji(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ji(this, "splice", e);
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
    return Ji(this, "unshift", e);
  },
  values() {
    return ml(this, "values", (e) => Zn(this, e));
  }
};
function ml(e, t, n) {
  const r = ja(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ On(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Jy = Array.prototype;
function lr(e, t, n, r, i, o) {
  const s = ja(e), a = s !== e && !/* @__PURE__ */ On(e), l = s[t];
  if (l !== Jy[t]) {
    const u = l.apply(e, o);
    return a ? Un(u) : u;
  }
  let c = n;
  s !== e && (a ? c = function(u, f) {
    return n.call(this, Zn(e, u), f, e);
  } : n.length > 2 && (c = function(u, f) {
    return n.call(this, u, f, e);
  }));
  const d = l.call(s, c, r);
  return a && i ? i(d) : d;
}
function Kd(e, t, n, r) {
  const i = ja(e), o = i !== e && !/* @__PURE__ */ On(e);
  let s = n, a = !1;
  i !== e && (o ? (a = r.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = Zn(e, c)), n.call(this, c, Zn(e, d), u, e);
  }) : n.length > 3 && (s = function(c, d, u) {
    return n.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...r);
  return a ? Zn(e, l) : l;
}
function hl(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  Yt(r, "iterate", To);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ cu(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : i;
}
function Ji(e, t, n = []) {
  Sr(), ru();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return iu(), _r(), r;
}
const Zy = /* @__PURE__ */ Zc("__proto__,__v_isRef,__isVue"), em = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(sr)
);
function Qy(e) {
  sr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return Yt(t, "has", e), t.hasOwnProperty(e);
}
class tm {
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
      return r === (i ? o ? cb : om : o ? im : rm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = Ze(t);
    if (!i) {
      let l;
      if (s && (l = Xy[n]))
        return l;
      if (n === "hasOwnProperty")
        return Qy;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Zt(t) ? t : r
    );
    if ((sr(n) ? em.has(n) : Zy(n)) || (i || Yt(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Zt(a)) {
      const l = s && eu(n) ? a : a.value;
      return i && vt(l) ? /* @__PURE__ */ lc(l) : l;
    }
    return vt(a) ? i ? /* @__PURE__ */ lc(a) : /* @__PURE__ */ Bi(a) : a;
  }
}
class nm extends tm {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = Ze(t) && eu(n);
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
    return t === /* @__PURE__ */ dt(i) && (a ? tr(r, o) && mr(t, "set", n, r) : mr(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = ft(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && mr(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!sr(n) || !em.has(n)) && Yt(t, "has", n), r;
  }
  ownKeys(t) {
    return Yt(
      t,
      "iterate",
      Ze(t) ? "length" : ni
    ), Reflect.ownKeys(t);
  }
}
class eb extends tm {
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
const tb = /* @__PURE__ */ new nm(), nb = /* @__PURE__ */ new eb(), rb = /* @__PURE__ */ new nm(!0);
const ac = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
function ib(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ dt(i), s = Oi(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...r), d = n ? ac : t ? zi : Un;
    return !t && Yt(
      o,
      "iterate",
      l ? sc : ni
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
function ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ob(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ dt(o), a = /* @__PURE__ */ dt(i);
      e || (tr(i, a) && Yt(s, "get", i), Yt(s, "get", a));
      const { has: l } = gs(s), c = t ? ac : e ? zi : Un;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Yt(/* @__PURE__ */ dt(i), "iterate", ni), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ dt(o), a = /* @__PURE__ */ dt(i);
      return e || (tr(i, a) && Yt(s, "has", i), Yt(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ dt(a), c = t ? ac : e ? zi : Un;
      return !e && Yt(l, "iterate", ni), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return Qt(
    n,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ dt(this), s = gs(o), a = /* @__PURE__ */ dt(i), l = !t && !/* @__PURE__ */ On(i) && !/* @__PURE__ */ wr(i) ? a : i;
        return s.has.call(o, l) || tr(i, l) && s.has.call(o, i) || tr(a, l) && s.has.call(o, a) || (o.add(l), mr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ On(o) && !/* @__PURE__ */ wr(o) && (o = /* @__PURE__ */ dt(o));
        const s = /* @__PURE__ */ dt(this), { has: a, get: l } = gs(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ dt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? tr(o, d) && mr(s, "set", i, o) : mr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ dt(this), { has: s, get: a } = gs(o);
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
    n[i] = ib(i, e, t);
  }), n;
}
function au(e, t) {
  const n = ob(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    ft(n, i) && i in r ? n : r,
    i,
    o
  );
}
const sb = {
  get: /* @__PURE__ */ au(!1, !1)
}, ab = {
  get: /* @__PURE__ */ au(!1, !0)
}, lb = {
  get: /* @__PURE__ */ au(!0, !1)
};
const rm = /* @__PURE__ */ new WeakMap(), im = /* @__PURE__ */ new WeakMap(), om = /* @__PURE__ */ new WeakMap(), cb = /* @__PURE__ */ new WeakMap();
function ub(e) {
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
function db(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ub(Ly(e));
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  return /* @__PURE__ */ wr(e) ? e : lu(
    e,
    !1,
    tb,
    sb,
    rm
  );
}
// @__NO_SIDE_EFFECTS__
function fb(e) {
  return lu(
    e,
    !1,
    rb,
    ab,
    im
  );
}
// @__NO_SIDE_EFFECTS__
function lc(e) {
  return lu(
    e,
    !0,
    nb,
    lb,
    om
  );
}
function lu(e, t, n, r, i) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = db(e);
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
  return /* @__PURE__ */ wr(e) ? /* @__PURE__ */ ri(e.__v_raw) : !!(e && e.__v_isReactive);
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
function cu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function pb(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Hp(e, "__v_skip", !0), e;
}
const Un = (e) => vt(e) ? /* @__PURE__ */ Bi(e) : e, zi = (e) => vt(e) ? /* @__PURE__ */ lc(e) : e;
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  return sm(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return sm(e, !0);
}
function sm(e, t) {
  return /* @__PURE__ */ Zt(e) ? e : new mb(e, t);
}
class mb {
  constructor(t, n) {
    this.dep = new su(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : Un(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ On(t) || /* @__PURE__ */ wr(t);
    t = r ? t : /* @__PURE__ */ dt(t), tr(t, n) && (this._rawValue = t, this._value = r ? t : Un(t), this.dep.trigger());
  }
}
function Je(e) {
  return /* @__PURE__ */ Zt(e) ? e.value : e;
}
const hb = {
  get: (e, t, n) => t === "__v_raw" ? e : Je(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Zt(i) && !/* @__PURE__ */ Zt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function am(e) {
  return /* @__PURE__ */ ri(e) ? e : new Proxy(e, hb);
}
class gb {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new su(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    kt !== this)
      return Yp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Jp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function yb(e, t, n = !1) {
  let r, i;
  return rt(e) ? r = e : (r = e.get, i = e.set), new gb(r, i, n);
}
const bs = {}, Zs = /* @__PURE__ */ new WeakMap();
let Jr;
function bb(e, t = !1, n = Jr) {
  if (n) {
    let r = Zs.get(n);
    r || Zs.set(n, r = []), r.push(e);
  }
}
function vb(e, t, n = _t) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = n, c = (F) => i ? F : /* @__PURE__ */ On(F) || i === !1 || i === 0 ? hr(F, 1) : hr(F);
  let d, u, f, m, _ = !1, g = !1;
  if (/* @__PURE__ */ Zt(e) ? (u = () => e.value, _ = /* @__PURE__ */ On(e)) : /* @__PURE__ */ ri(e) ? (u = () => c(e), _ = !0) : Ze(e) ? (g = !0, _ = e.some((F) => /* @__PURE__ */ ri(F) || /* @__PURE__ */ On(F)), u = () => e.map((F) => {
    if (/* @__PURE__ */ Zt(F))
      return F.value;
    if (/* @__PURE__ */ ri(F))
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
    const F = Jr;
    Jr = d;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Jr = F;
    }
  } : u = rr, t && i) {
    const F = u, P = i === !0 ? 1 / 0 : i;
    u = () => hr(F(), P);
  }
  const v = By(), y = () => {
    d.stop(), v && v.active && Qc(v.effects, d);
  };
  if (o && t) {
    const F = t;
    t = (...P) => {
      F(...P), y();
    };
  }
  let G = g ? new Array(e.length).fill(bs) : bs;
  const U = (F) => {
    if (!(!(d.flags & 1) || !d.dirty && !F))
      if (t) {
        const P = d.run();
        if (i || _ || (g ? P.some(($, Q) => tr($, G[Q])) : tr(P, G))) {
          f && f();
          const $ = Jr;
          Jr = d;
          try {
            const Q = [
              P,
              // pass undefined as the old value when it's changed for the first time
              G === bs ? void 0 : g && G[0] === bs ? [] : G,
              m
            ];
            G = P, l ? l(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            Jr = $;
          }
        }
      } else
        d.run();
  };
  return a && a(U), d = new Up(u), d.scheduler = s ? () => s(U, !1) : U, m = (F) => bb(F, !1, d), f = d.onStop = () => {
    const F = Zs.get(d);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const P of F) P();
      Zs.delete(d);
    }
  }, t ? r ? U(!0) : G = d.run() : s ? s(U.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function hr(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Zt(e))
    hr(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      hr(e[r], t, n);
  else if (Vp(e) || Oi(e))
    e.forEach((r) => {
      hr(r, t, n);
    });
  else if (jp(e)) {
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
function es(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Ha(i, t, n);
  }
}
function ar(e, t, n, r) {
  if (rt(e)) {
    const i = es(e, t, n, r);
    return i && $p(i) && i.catch((o) => {
      Ha(o, t, n);
    }), i;
  }
  if (Ze(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(ar(e[o], t, n, r));
    return i;
  }
}
function Ha(e, t, n, r = !0) {
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
      Sr(), es(o, null, 10, [
        e,
        l,
        c
      ]), _r();
      return;
    }
  }
  Sb(e, n, i, r, s);
}
function Sb(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const on = [];
let Jn = -1;
const Fi = [];
let Cr = null, _i = 0;
const lm = /* @__PURE__ */ Promise.resolve();
let Qs = null;
function Ga(e) {
  const t = Qs || lm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _b(e) {
  let t = Jn + 1, n = on.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = on[r], o = Do(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function uu(e) {
  if (!(e.flags & 1)) {
    const t = Do(e), n = on[on.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Do(n) ? on.push(e) : on.splice(_b(t), 0, e), e.flags |= 1, cm();
  }
}
function cm() {
  Qs || (Qs = lm.then(dm));
}
function wb(e) {
  Ze(e) ? Fi.push(...e) : Cr && e.id === -1 ? Cr.splice(_i + 1, 0, e) : e.flags & 1 || (Fi.push(e), e.flags |= 1), cm();
}
function Wd(e, t, n = Jn + 1) {
  for (; n < on.length; n++) {
    const r = on[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      on.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function um(e) {
  if (Fi.length) {
    const t = [...new Set(Fi)].sort(
      (n, r) => Do(n) - Do(r)
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
const Do = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function dm(e) {
  try {
    for (Jn = 0; Jn < on.length; Jn++) {
      const t = on[Jn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), es(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Jn < on.length; Jn++) {
      const t = on[Jn];
      t && (t.flags &= -2);
    }
    Jn = -1, on.length = 0, um(), Qs = null, (on.length || Fi.length) && dm();
  }
}
let xn = null, fm = null;
function ea(e) {
  const t = xn;
  return xn = e, fm = e && e.type.__scopeId || null, t;
}
function pm(e, t = xn, n) {
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
function vr(e, t) {
  if (xn === null)
    return e;
  const n = Ya(xn), r = e.dirs || (e.dirs = []);
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
function Wr(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[r];
    l && (Sr(), ar(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), _r());
  }
}
function kb(e, t) {
  if (qt) {
    let n = qt.provides;
    const r = qt.parent && qt.parent.provides;
    r === n && (n = qt.provides = Object.create(r)), n[e] = t;
  }
}
function Ts(e, t, n = !1) {
  const r = _v();
  if (r || Ti) {
    let i = Ti ? Ti._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && rt(t) ? t.call(r && r.proxy) : t;
  }
}
const xb = /* @__PURE__ */ Symbol.for("v-scx"), Mb = () => Ts(xb);
function ii(e, t, n) {
  return mm(e, t, n);
}
function mm(e, t, n = _t) {
  const { immediate: r, deep: i, flush: o, once: s } = n, a = Qt({}, n), l = t && r || !t && o !== "post";
  let c;
  if (Ro) {
    if (o === "sync") {
      const m = Mb();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = rr, m.resume = rr, m.pause = rr, m;
    }
  }
  const d = qt;
  a.call = (m, _, g) => ar(m, d, _, g);
  let u = !1;
  o === "post" ? a.scheduler = (m) => {
    fn(m, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (m, _) => {
    _ ? m() : uu(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const f = vb(e, t, a);
  return Ro && (c ? c.push(f) : l && f()), f;
}
function Pb(e, t, n) {
  const r = this.proxy, i = zt(e) ? e.includes(".") ? hm(r, e) : () => r[e] : e.bind(r, r);
  let o;
  rt(t) ? o = t : (o = t.handler, n = t);
  const s = ns(this), a = mm(i, o.bind(r), n);
  return s(), a;
}
function hm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Nb = /* @__PURE__ */ Symbol("_vte"), Ab = (e) => e.__isTeleport, Cb = /* @__PURE__ */ Symbol("_leaveCb");
function du(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, du(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function gm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ud(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ta = /* @__PURE__ */ new WeakMap();
function So(e, t, n, r, i = !1) {
  if (Ze(e)) {
    e.forEach(
      (g, v) => So(
        g,
        t && (Ze(t) ? t[v] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (_o(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && So(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Ya(r.component) : r.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === _t ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ dt(u), m = u === _t ? Rp : (g) => Ud(d, g) ? !1 : ft(f, g), _ = (g, v) => !(v && Ud(d, v));
  if (c != null && c !== l) {
    if (Bd(t), zt(c))
      d[c] = null, m(c) && (u[c] = null);
    else if (/* @__PURE__ */ Zt(c)) {
      const g = t;
      _(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (rt(l))
    es(l, a, 12, [s, d]);
  else {
    const g = zt(l), v = /* @__PURE__ */ Zt(l);
    if (g || v) {
      const y = () => {
        if (e.f) {
          const G = g ? m(l) ? u[l] : d[l] : _() || !e.k ? l.value : d[e.k];
          if (i)
            Ze(G) && Qc(G, o);
          else if (Ze(G))
            G.includes(o) || G.push(o);
          else if (g)
            d[l] = [o], m(l) && (u[l] = d[l]);
          else {
            const U = [o];
            _(l, e.k) && (l.value = U), e.k && (d[e.k] = U);
          }
        } else g ? (d[l] = s, m(l) && (u[l] = s)) : v && (_(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const G = () => {
          y(), ta.delete(e);
        };
        G.id = -1, ta.set(e, G), fn(G, n);
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
const _o = (e) => !!e.type.__asyncLoader, ym = (e) => e.type.__isKeepAlive;
function Ib(e, t) {
  bm(e, "a", t);
}
function Eb(e, t) {
  bm(e, "da", t);
}
function bm(e, t, n = qt) {
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
      ym(i.parent.vnode) && Ob(r, t, n, i), i = i.parent;
  }
}
function Ob(e, t, n, r) {
  const i = Ka(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  vm(() => {
    Qc(r[t], i);
  }, n);
}
function Ka(e, t, n = qt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Sr();
      const a = ns(n), l = ar(t, n, e, s);
      return a(), _r(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Mr = (e) => (t, n = qt) => {
  (!Ro || e === "sp") && Ka(e, (...r) => t(...r), n);
}, Fb = Mr("bm"), Wa = Mr("m"), Tb = Mr(
  "bu"
), Db = Mr("u"), ts = Mr(
  "bum"
), vm = Mr("um"), Lb = Mr(
  "sp"
), Rb = Mr("rtg"), Vb = Mr("rtc");
function $b(e, t = qt) {
  Ka("ec", e, t);
}
const zb = "components", Sm = /* @__PURE__ */ Symbol.for("v-ndc");
function jb(e) {
  return zt(e) ? Hb(zb, e, !1) || e : e || Sm;
}
function Hb(e, t, n = !0, r = !1) {
  const i = xn || qt;
  if (i) {
    const o = i.type;
    {
      const a = Pv(
        o,
        !1
      );
      if (a && (a === t || a === ln(t) || a === $a(ln(t))))
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
  return e && (e[t] || e[ln(t)] || e[$a(ln(t))]);
}
function mt(e, t, n, r) {
  let i;
  const o = n, s = Ze(e);
  if (s || zt(e)) {
    const a = s && /* @__PURE__ */ ri(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ On(e), c = /* @__PURE__ */ wr(e), e = ja(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? zi(Un(e[d])) : Un(e[d]) : e[d],
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
const cc = (e) => e ? jm(e) ? Ya(e) : cc(e.parent) : null, wo = (
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
    $parent: (e) => cc(e.parent),
    $root: (e) => cc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      uu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ga.bind(e.proxy)),
    $watch: (e) => Pb.bind(e)
  })
), gl = (e, t) => e !== _t && !e.__isScriptSetup && ft(e, t), Gb = {
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
        if (gl(r, t))
          return s[t] = 1, r[t];
        if (i !== _t && ft(i, t))
          return s[t] = 2, i[t];
        if (ft(o, t))
          return s[t] = 3, o[t];
        if (n !== _t && ft(n, t))
          return s[t] = 4, n[t];
        uc && (s[t] = 0);
      }
    }
    const c = wo[t];
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
    return gl(i, t) ? (i[t] = n, !0) : r !== _t && ft(r, t) ? (r[t] = n, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(n[a] || e !== _t && a[0] !== "$" && ft(e, a) || gl(t, a) || ft(o, a) || ft(r, a) || ft(wo, a) || ft(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ft(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qd(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let uc = !0;
function Kb(e) {
  const t = wm(e), n = e.proxy, r = e.ctx;
  uc = !1, t.beforeCreate && Xd(t.beforeCreate, e, "bc");
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
    updated: _,
    activated: g,
    deactivated: v,
    beforeDestroy: y,
    beforeUnmount: G,
    destroyed: U,
    unmounted: F,
    render: P,
    renderTracked: $,
    renderTriggered: Q,
    errorCaptured: q,
    serverPrefetch: le,
    // public API
    expose: ve,
    inheritAttrs: he,
    // assets
    components: X,
    directives: Se,
    filters: fe
  } = t;
  if (c && Wb(c, r, null), s)
    for (const me in s) {
      const oe = s[me];
      rt(oe) && (r[me] = oe.bind(n));
    }
  if (i) {
    const me = i.call(n, n);
    vt(me) && (e.data = /* @__PURE__ */ Bi(me));
  }
  if (uc = !0, o)
    for (const me in o) {
      const oe = o[me], I = rt(oe) ? oe.bind(n, n) : rt(oe.get) ? oe.get.bind(n, n) : rr, W = !rt(oe) && rt(oe.set) ? oe.set.bind(n) : rr, N = nt({
        get: I,
        set: W
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
      _m(a[me], r, n, me);
  if (l) {
    const me = rt(l) ? l.call(n) : l;
    Reflect.ownKeys(me).forEach((oe) => {
      kb(oe, me[oe]);
    });
  }
  d && Xd(d, e, "c");
  function te(me, oe) {
    Ze(oe) ? oe.forEach((I) => me(I.bind(n))) : oe && me(oe.bind(n));
  }
  if (te(Fb, u), te(Wa, f), te(Tb, m), te(Db, _), te(Ib, g), te(Eb, v), te($b, q), te(Vb, $), te(Rb, Q), te(ts, G), te(vm, F), te(Lb, le), Ze(ve))
    if (ve.length) {
      const me = e.exposed || (e.exposed = {});
      ve.forEach((oe) => {
        Object.defineProperty(me, oe, {
          get: () => n[oe],
          set: (I) => n[oe] = I,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === rr && (e.render = P), he != null && (e.inheritAttrs = he), X && (e.components = X), Se && (e.directives = Se), le && gm(e);
}
function Wb(e, t, n = rr) {
  Ze(e) && (e = dc(e));
  for (const r in e) {
    const i = e[r];
    let o;
    vt(i) ? "default" in i ? o = Ts(
      i.from || r,
      i.default,
      !0
    ) : o = Ts(i.from || r) : o = Ts(i), /* @__PURE__ */ Zt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function Xd(e, t, n) {
  ar(
    Ze(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function _m(e, t, n, r) {
  let i = r.includes(".") ? hm(n, r) : () => n[r];
  if (zt(e)) {
    const o = t[e];
    rt(o) && ii(i, o);
  } else if (rt(e))
    ii(i, e.bind(n));
  else if (vt(e))
    if (Ze(e))
      e.forEach((o) => _m(o, t, n, r));
    else {
      const o = rt(e.handler) ? e.handler.bind(n) : t[e.handler];
      rt(o) && ii(i, o, e);
    }
}
function wm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (c) => na(l, c, s, !0)
  ), na(l, t, s)), vt(t) && o.set(t, l), l;
}
function na(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && na(e, o, n, !0), i && i.forEach(
    (s) => na(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const a = Ub[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Ub = {
  data: Jd,
  props: Zd,
  emits: Zd,
  // objects
  methods: so,
  computed: so,
  // lifecycle
  beforeCreate: nn,
  created: nn,
  beforeMount: nn,
  mounted: nn,
  beforeUpdate: nn,
  updated: nn,
  beforeDestroy: nn,
  beforeUnmount: nn,
  destroyed: nn,
  unmounted: nn,
  activated: nn,
  deactivated: nn,
  errorCaptured: nn,
  serverPrefetch: nn,
  // assets
  components: so,
  directives: so,
  // watch
  watch: Yb,
  // provide / inject
  provide: Jd,
  inject: Bb
};
function Jd(e, t) {
  return t ? e ? function() {
    return Qt(
      rt(e) ? e.call(this, this) : e,
      rt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bb(e, t) {
  return so(dc(e), dc(t));
}
function dc(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function nn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function so(e, t) {
  return e ? Qt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zd(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qt(
    /* @__PURE__ */ Object.create(null),
    qd(e),
    qd(t ?? {})
  ) : t;
}
function Yb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Qt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = nn(e[r], t[r]);
  return n;
}
function km() {
  return {
    app: null,
    config: {
      isNativeTag: Rp,
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
let qb = 0;
function Xb(e, t) {
  return function(r, i = null) {
    rt(r) || (r = Qt({}, r)), i != null && !vt(i) && (i = null);
    const o = km(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: qb++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Av,
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
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, d, f), l = !0, c._container = d, d.__vue_app__ = c, Ya(m.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (ar(
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
const Jb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ln(t)}Modifiers`] || e[`${fi(t)}Modifiers`];
function Zb(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let i = n;
  const o = t.startsWith("update:"), s = o && Jb(r, t.slice(7));
  s && (s.trim && (i = n.map((d) => zt(d) ? d.trim() : d)), s.number && (i = n.map(tu)));
  let a, l = r[a = dl(t)] || // also try camelCase event handler (#2249)
  r[a = dl(ln(t))];
  !l && o && (l = r[a = dl(fi(t))]), l && ar(
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
    e.emitted[a] = !0, ar(
      c,
      e,
      6,
      i
    );
  }
}
const Qb = /* @__PURE__ */ new WeakMap();
function xm(e, t, n = !1) {
  const r = n ? Qb : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!rt(e)) {
    const l = (c) => {
      const d = xm(c, t, !0);
      d && (a = !0, Qt(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (vt(e) && r.set(e, null), null) : (Ze(o) ? o.forEach((l) => s[l] = null) : Qt(s, o), vt(e) && r.set(e, s), s);
}
function Ua(e, t) {
  return !e || !La(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, fi(t)) || ft(e, t));
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
    setupState: m,
    ctx: _,
    inheritAttrs: g
  } = e, v = ea(e);
  let y, G;
  try {
    if (n.shapeFlag & 4) {
      const F = i || r, P = F;
      y = Qn(
        c.call(
          P,
          F,
          d,
          u,
          m,
          f,
          _
        )
      ), G = a;
    } else {
      const F = t;
      y = Qn(
        F.length > 1 ? F(
          u,
          { attrs: a, slots: s, emit: l }
        ) : F(
          u,
          null
        )
      ), G = t.props ? a : ev(a);
    }
  } catch (F) {
    ko.length = 0, Ha(F, e, 1), y = Be(Tr);
  }
  let U = y;
  if (G && g !== !1) {
    const F = Object.keys(G), { shapeFlag: P } = U;
    F.length && P & 7 && (o && F.some(Ra) && (G = tv(
      G,
      o
    )), U = ji(U, G, !1, !0));
  }
  return n.dirs && (U = ji(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && du(U, n.transition), y = U, ea(v), y;
}
const ev = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || La(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tv = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ra(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function nv(e, t, n) {
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
        if (Mm(s, r, f) && !Ua(c, f))
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
    if (Mm(t, e, o) && !Ua(n, o))
      return !0;
  }
  return !1;
}
function Mm(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && vt(r) && vt(i) ? !nu(r, i) : r !== i;
}
function rv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Pm = {}, Nm = () => Object.create(Pm), Am = (e) => Object.getPrototypeOf(e) === Pm;
function iv(e, t, n, r = !1) {
  const i = {}, o = Nm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cm(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ fb(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function ov(e, t, n, r) {
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
        if (Ua(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (ft(o, f))
            m !== o[f] && (o[f] = m, c = !0);
          else {
            const _ = ln(f);
            i[_] = fc(
              l,
              a,
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
    Cm(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !ft(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = fi(u)) === u || !ft(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[u] = fc(
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
function Cm(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (yo(l))
        continue;
      const c = t[l];
      let d;
      i && ft(i, d = ln(l)) ? !o || !o.includes(d) ? n[d] = c : (a || (a = {}))[d] = c : Ua(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ dt(n), c = a || _t;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      n[u] = fc(
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
function fc(e, t, n, r, i, o) {
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
          const d = ns(i);
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
const sv = /* @__PURE__ */ new WeakMap();
function Im(e, t, n = !1) {
  const r = n ? sv : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!rt(e)) {
    const d = (u) => {
      l = !0;
      const [f, m] = Im(u, t, !0);
      Qt(s, f), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return vt(e) && r.set(e, Ei), Ei;
  if (Ze(o))
    for (let d = 0; d < o.length; d++) {
      const u = ln(o[d]);
      tf(u) && (s[u] = _t);
    }
  else if (o)
    for (const d in o) {
      const u = ln(d);
      if (tf(u)) {
        const f = o[d], m = s[u] = Ze(f) || rt(f) ? { type: f } : Qt({}, f), _ = m.type;
        let g = !1, v = !0;
        if (Ze(_))
          for (let y = 0; y < _.length; ++y) {
            const G = _[y], U = rt(G) && G.name;
            if (U === "Boolean") {
              g = !0;
              break;
            } else U === "String" && (v = !1);
          }
        else
          g = rt(_) && _.name === "Boolean";
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
function tf(e) {
  return e[0] !== "$" && !yo(e);
}
const fu = (e) => e === "_" || e === "_ctx" || e === "$stable", pu = (e) => Ze(e) ? e.map(Qn) : [Qn(e)], av = (e, t, n) => {
  if (t._n)
    return t;
  const r = pm((...i) => pu(t(...i)), n);
  return r._c = !1, r;
}, Em = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (fu(i)) continue;
    const o = e[i];
    if (rt(o))
      t[i] = av(i, o, r);
    else if (o != null) {
      const s = pu(o);
      t[i] = () => s;
    }
  }
}, Om = (e, t) => {
  const n = pu(t);
  e.slots.default = () => n;
}, Fm = (e, t, n) => {
  for (const r in t)
    (n || !fu(r)) && (e[r] = t[r]);
}, lv = (e, t, n) => {
  const r = e.slots = Nm();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Fm(r, t, n), n && Hp(r, "_", i, !0)) : Em(t, r);
  } else t && Om(e, t);
}, cv = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, s = _t;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : Fm(i, t, n) : (o = !t.$stable, Em(t, i)), s = t;
  } else t && (Om(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !fu(a) && s[a] == null && delete i[a];
}, fn = mv;
function uv(e) {
  return dv(e);
}
function dv(e, t) {
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
    setScopeId: m = rr,
    insertStaticContent: _
  } = e, g = (p, h, x, E = null, j = null, J = null, ae = void 0, V = null, re = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Zi(p, h) && (E = ce(p), ue(p, j, J, !0), p = null), h.patchFlag === -2 && (re = !1, h.dynamicChildren = null);
    const { type: k, ref: Y, shapeFlag: ie } = h;
    switch (k) {
      case Ba:
        v(p, h, x, E);
        break;
      case Tr:
        y(p, h, x, E);
        break;
      case bl:
        p == null && G(h, x, E, ae);
        break;
      case qe:
        X(
          p,
          h,
          x,
          E,
          j,
          J,
          ae,
          V,
          re
        );
        break;
      default:
        ie & 1 ? P(
          p,
          h,
          x,
          E,
          j,
          J,
          ae,
          V,
          re
        ) : ie & 6 ? Se(
          p,
          h,
          x,
          E,
          j,
          J,
          ae,
          V,
          re
        ) : (ie & 64 || ie & 128) && k.process(
          p,
          h,
          x,
          E,
          j,
          J,
          ae,
          V,
          re,
          b
        );
    }
    Y != null && j ? So(Y, p && p.ref, J, h || p, !h) : Y == null && p && p.ref != null && So(p.ref, null, J, p, !0);
  }, v = (p, h, x, E) => {
    if (p == null)
      r(
        h.el = a(h.children),
        x,
        E
      );
    else {
      const j = h.el = p.el;
      h.children !== p.children && c(j, h.children);
    }
  }, y = (p, h, x, E) => {
    p == null ? r(
      h.el = l(h.children || ""),
      x,
      E
    ) : h.el = p.el;
  }, G = (p, h, x, E) => {
    [p.el, p.anchor] = _(
      p.children,
      h,
      x,
      E,
      p.el,
      p.anchor
    );
  }, U = ({ el: p, anchor: h }, x, E) => {
    let j;
    for (; p && p !== h; )
      j = f(p), r(p, x, E), p = j;
    r(h, x, E);
  }, F = ({ el: p, anchor: h }) => {
    let x;
    for (; p && p !== h; )
      x = f(p), i(p), p = x;
    i(h);
  }, P = (p, h, x, E, j, J, ae, V, re) => {
    if (h.type === "svg" ? ae = "svg" : h.type === "math" && (ae = "mathml"), p == null)
      $(
        h,
        x,
        E,
        j,
        J,
        ae,
        V,
        re
      );
    else {
      const k = p.el && p.el._isVueCE ? p.el : null;
      try {
        k && k._beginPatch(), le(
          p,
          h,
          j,
          J,
          ae,
          V,
          re
        );
      } finally {
        k && k._endPatch();
      }
    }
  }, $ = (p, h, x, E, j, J, ae, V) => {
    let re, k;
    const { props: Y, shapeFlag: ie, transition: _e, dirs: Me } = p;
    if (re = p.el = s(
      p.type,
      J,
      Y && Y.is,
      Y
    ), ie & 8 ? d(re, p.children) : ie & 16 && q(
      p.children,
      re,
      null,
      E,
      j,
      yl(p, J),
      ae,
      V
    ), Me && Wr(p, null, E, "created"), Q(re, p, p.scopeId, ae, E), Y) {
      for (const xe in Y)
        xe !== "value" && !yo(xe) && o(re, xe, null, Y[xe], J, E);
      "value" in Y && o(re, "value", null, Y.value, J), (k = Y.onVnodeBeforeMount) && qn(k, E, p);
    }
    Me && Wr(p, null, E, "beforeMount");
    const Ce = fv(j, _e);
    Ce && _e.beforeEnter(re), r(re, h, x), ((k = Y && Y.onVnodeMounted) || Ce || Me) && fn(() => {
      try {
        k && qn(k, E, p), Ce && _e.enter(re), Me && Wr(p, null, E, "mounted");
      } finally {
      }
    }, j);
  }, Q = (p, h, x, E, j) => {
    if (x && m(p, x), E)
      for (let J = 0; J < E.length; J++)
        m(p, E[J]);
    if (j) {
      let J = j.subTree;
      if (h === J || Rm(J.type) && (J.ssContent === h || J.ssFallback === h)) {
        const ae = j.vnode;
        Q(
          p,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          j.parent
        );
      }
    }
  }, q = (p, h, x, E, j, J, ae, V, re = 0) => {
    for (let k = re; k < p.length; k++) {
      const Y = p[k] = V ? dr(p[k]) : Qn(p[k]);
      g(
        null,
        Y,
        h,
        x,
        E,
        j,
        J,
        ae,
        V
      );
    }
  }, le = (p, h, x, E, j, J, ae) => {
    const V = h.el = p.el;
    let { patchFlag: re, dynamicChildren: k, dirs: Y } = h;
    re |= p.patchFlag & 16;
    const ie = p.props || _t, _e = h.props || _t;
    let Me;
    if (x && Ur(x, !1), (Me = _e.onVnodeBeforeUpdate) && qn(Me, x, h, p), Y && Wr(h, p, x, "beforeUpdate"), x && Ur(x, !0), (ie.innerHTML && _e.innerHTML == null || ie.textContent && _e.textContent == null) && d(V, ""), k ? ve(
      p.dynamicChildren,
      k,
      V,
      x,
      E,
      yl(h, j),
      J
    ) : ae || oe(
      p,
      h,
      V,
      null,
      x,
      E,
      yl(h, j),
      J,
      !1
    ), re > 0) {
      if (re & 16)
        he(V, ie, _e, x, j);
      else if (re & 2 && ie.class !== _e.class && o(V, "class", null, _e.class, j), re & 4 && o(V, "style", ie.style, _e.style, j), re & 8) {
        const Ce = h.dynamicProps;
        for (let xe = 0; xe < Ce.length; xe++) {
          const be = Ce[xe], R = ie[be], z = _e[be];
          (z !== R || be === "value") && o(V, be, R, z, j, x);
        }
      }
      re & 1 && p.children !== h.children && d(V, h.children);
    } else !ae && k == null && he(V, ie, _e, x, j);
    ((Me = _e.onVnodeUpdated) || Y) && fn(() => {
      Me && qn(Me, x, h, p), Y && Wr(h, p, x, "updated");
    }, E);
  }, ve = (p, h, x, E, j, J, ae) => {
    for (let V = 0; V < h.length; V++) {
      const re = p[V], k = h[V], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zi(re, k) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? u(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      g(
        re,
        k,
        Y,
        null,
        E,
        j,
        J,
        ae,
        !0
      );
    }
  }, he = (p, h, x, E, j) => {
    if (h !== x) {
      if (h !== _t)
        for (const J in h)
          !yo(J) && !(J in x) && o(
            p,
            J,
            h[J],
            null,
            j,
            E
          );
      for (const J in x) {
        if (yo(J)) continue;
        const ae = x[J], V = h[J];
        ae !== V && J !== "value" && o(p, J, V, ae, j, E);
      }
      "value" in x && o(p, "value", h.value, x.value, j);
    }
  }, X = (p, h, x, E, j, J, ae, V, re) => {
    const k = h.el = p ? p.el : a(""), Y = h.anchor = p ? p.anchor : a("");
    let { patchFlag: ie, dynamicChildren: _e, slotScopeIds: Me } = h;
    Me && (V = V ? V.concat(Me) : Me), p == null ? (r(k, x, E), r(Y, x, E), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      x,
      Y,
      j,
      J,
      ae,
      V,
      re
    )) : ie > 0 && ie & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === _e.length ? (ve(
      p.dynamicChildren,
      _e,
      x,
      j,
      J,
      ae,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || j && h === j.subTree) && Tm(
      p,
      h,
      !0
      /* shallow */
    )) : oe(
      p,
      h,
      x,
      Y,
      j,
      J,
      ae,
      V,
      re
    );
  }, Se = (p, h, x, E, j, J, ae, V, re) => {
    h.slotScopeIds = V, p == null ? h.shapeFlag & 512 ? j.ctx.activate(
      h,
      x,
      E,
      ae,
      re
    ) : fe(
      h,
      x,
      E,
      j,
      J,
      ae,
      re
    ) : de(p, h, re);
  }, fe = (p, h, x, E, j, J, ae) => {
    const V = p.component = Sv(
      p,
      E,
      j
    );
    if (ym(p) && (V.ctx.renderer = b), wv(V, !1, ae), V.asyncDep) {
      if (j && j.registerDep(V, te, ae), !p.el) {
        const re = V.subTree = Be(Tr);
        y(null, re, h, x), p.placeholder = re.el;
      }
    } else
      te(
        V,
        p,
        h,
        x,
        j,
        J,
        ae
      );
  }, de = (p, h, x) => {
    const E = h.component = p.component;
    if (nv(p, h, x))
      if (E.asyncDep && !E.asyncResolved) {
        me(E, h, x);
        return;
      } else
        E.next = h, E.update();
    else
      h.el = p.el, E.vnode = h;
  }, te = (p, h, x, E, j, J, ae) => {
    const V = () => {
      if (p.isMounted) {
        let { next: ie, bu: _e, u: Me, parent: Ce, vnode: xe } = p;
        {
          const K = Dm(p);
          if (K) {
            ie && (ie.el = xe.el, me(p, ie, ae)), K.asyncDep.then(() => {
              fn(() => {
                p.isUnmounted || k();
              }, j);
            });
            return;
          }
        }
        let be = ie, R;
        Ur(p, !1), ie ? (ie.el = xe.el, me(p, ie, ae)) : ie = xe, _e && Fs(_e), (R = ie.props && ie.props.onVnodeBeforeUpdate) && qn(R, Ce, ie, xe), Ur(p, !0);
        const z = Qd(p), T = p.subTree;
        p.subTree = z, g(
          T,
          z,
          // parent may have changed if it's in a teleport
          u(T.el),
          // anchor may have changed if it's in a fragment
          ce(T),
          p,
          j,
          J
        ), ie.el = z.el, be === null && rv(p, z.el), Me && fn(Me, j), (R = ie.props && ie.props.onVnodeUpdated) && fn(
          () => qn(R, Ce, ie, xe),
          j
        );
      } else {
        let ie;
        const { el: _e, props: Me } = h, { bm: Ce, m: xe, parent: be, root: R, type: z } = p, T = _o(h);
        Ur(p, !1), Ce && Fs(Ce), !T && (ie = Me && Me.onVnodeBeforeMount) && qn(ie, be, h), Ur(p, !0);
        {
          R.ce && R.ce._hasShadowRoot() && R.ce._injectChildStyle(
            z,
            p.parent ? p.parent.type : void 0
          );
          const K = p.subTree = Qd(p);
          g(
            null,
            K,
            x,
            E,
            p,
            j,
            J
          ), h.el = K.el;
        }
        if (xe && fn(xe, j), !T && (ie = Me && Me.onVnodeMounted)) {
          const K = h;
          fn(
            () => qn(ie, be, K),
            j
          );
        }
        (h.shapeFlag & 256 || be && _o(be.vnode) && be.vnode.shapeFlag & 256) && p.a && fn(p.a, j), p.isMounted = !0, h = x = E = null;
      }
    };
    p.scope.on();
    const re = p.effect = new Up(V);
    p.scope.off();
    const k = p.update = re.run.bind(re), Y = p.job = re.runIfDirty.bind(re);
    Y.i = p, Y.id = p.uid, re.scheduler = () => uu(Y), Ur(p, !0), k();
  }, me = (p, h, x) => {
    h.component = p;
    const E = p.vnode.props;
    p.vnode = h, p.next = null, ov(p, h.props, E, x), cv(p, h.children, x), Sr(), Wd(p), _r();
  }, oe = (p, h, x, E, j, J, ae, V, re = !1) => {
    const k = p && p.children, Y = p ? p.shapeFlag : 0, ie = h.children, { patchFlag: _e, shapeFlag: Me } = h;
    if (_e > 0) {
      if (_e & 128) {
        W(
          k,
          ie,
          x,
          E,
          j,
          J,
          ae,
          V,
          re
        );
        return;
      } else if (_e & 256) {
        I(
          k,
          ie,
          x,
          E,
          j,
          J,
          ae,
          V,
          re
        );
        return;
      }
    }
    Me & 8 ? (Y & 16 && M(k, j, J), ie !== k && d(x, ie)) : Y & 16 ? Me & 16 ? W(
      k,
      ie,
      x,
      E,
      j,
      J,
      ae,
      V,
      re
    ) : M(k, j, J, !0) : (Y & 8 && d(x, ""), Me & 16 && q(
      ie,
      x,
      E,
      j,
      J,
      ae,
      V,
      re
    ));
  }, I = (p, h, x, E, j, J, ae, V, re) => {
    p = p || Ei, h = h || Ei;
    const k = p.length, Y = h.length, ie = Math.min(k, Y);
    let _e;
    for (_e = 0; _e < ie; _e++) {
      const Me = h[_e] = re ? dr(h[_e]) : Qn(h[_e]);
      g(
        p[_e],
        Me,
        x,
        null,
        j,
        J,
        ae,
        V,
        re
      );
    }
    k > Y ? M(
      p,
      j,
      J,
      !0,
      !1,
      ie
    ) : q(
      h,
      x,
      E,
      j,
      J,
      ae,
      V,
      re,
      ie
    );
  }, W = (p, h, x, E, j, J, ae, V, re) => {
    let k = 0;
    const Y = h.length;
    let ie = p.length - 1, _e = Y - 1;
    for (; k <= ie && k <= _e; ) {
      const Me = p[k], Ce = h[k] = re ? dr(h[k]) : Qn(h[k]);
      if (Zi(Me, Ce))
        g(
          Me,
          Ce,
          x,
          null,
          j,
          J,
          ae,
          V,
          re
        );
      else
        break;
      k++;
    }
    for (; k <= ie && k <= _e; ) {
      const Me = p[ie], Ce = h[_e] = re ? dr(h[_e]) : Qn(h[_e]);
      if (Zi(Me, Ce))
        g(
          Me,
          Ce,
          x,
          null,
          j,
          J,
          ae,
          V,
          re
        );
      else
        break;
      ie--, _e--;
    }
    if (k > ie) {
      if (k <= _e) {
        const Me = _e + 1, Ce = Me < Y ? h[Me].el : E;
        for (; k <= _e; )
          g(
            null,
            h[k] = re ? dr(h[k]) : Qn(h[k]),
            x,
            Ce,
            j,
            J,
            ae,
            V,
            re
          ), k++;
      }
    } else if (k > _e)
      for (; k <= ie; )
        ue(p[k], j, J, !0), k++;
    else {
      const Me = k, Ce = k, xe = /* @__PURE__ */ new Map();
      for (k = Ce; k <= _e; k++) {
        const L = h[k] = re ? dr(h[k]) : Qn(h[k]);
        L.key != null && xe.set(L.key, k);
      }
      let be, R = 0;
      const z = _e - Ce + 1;
      let T = !1, K = 0;
      const C = new Array(z);
      for (k = 0; k < z; k++) C[k] = 0;
      for (k = Me; k <= ie; k++) {
        const L = p[k];
        if (R >= z) {
          ue(L, j, J, !0);
          continue;
        }
        let S;
        if (L.key != null)
          S = xe.get(L.key);
        else
          for (be = Ce; be <= _e; be++)
            if (C[be - Ce] === 0 && Zi(L, h[be])) {
              S = be;
              break;
            }
        S === void 0 ? ue(L, j, J, !0) : (C[S - Ce] = k + 1, S >= K ? K = S : T = !0, g(
          L,
          h[S],
          x,
          null,
          j,
          J,
          ae,
          V,
          re
        ), R++);
      }
      const H = T ? pv(C) : Ei;
      for (be = H.length - 1, k = z - 1; k >= 0; k--) {
        const L = Ce + k, S = h[L], Z = h[L + 1], se = L + 1 < Y ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Z.el || Lm(Z)
        ) : E;
        C[k] === 0 ? g(
          null,
          S,
          x,
          se,
          j,
          J,
          ae,
          V,
          re
        ) : T && (be < 0 || k !== H[be] ? N(S, x, se, 2) : be--);
      }
    }
  }, N = (p, h, x, E, j = null) => {
    const { el: J, type: ae, transition: V, children: re, shapeFlag: k } = p;
    if (k & 6) {
      N(p.component.subTree, h, x, E);
      return;
    }
    if (k & 128) {
      p.suspense.move(h, x, E);
      return;
    }
    if (k & 64) {
      ae.move(p, h, x, b);
      return;
    }
    if (ae === qe) {
      r(J, h, x);
      for (let ie = 0; ie < re.length; ie++)
        N(re[ie], h, x, E);
      r(p.anchor, h, x);
      return;
    }
    if (ae === bl) {
      U(p, h, x);
      return;
    }
    if (E !== 2 && k & 1 && V)
      if (E === 0)
        V.beforeEnter(J), r(J, h, x), fn(() => V.enter(J), j);
      else {
        const { leave: ie, delayLeave: _e, afterLeave: Me } = V, Ce = () => {
          p.ctx.isUnmounted ? i(J) : r(J, h, x);
        }, xe = () => {
          J._isLeaving && J[Cb](
            !0
            /* cancelled */
          ), ie(J, () => {
            Ce(), Me && Me();
          });
        };
        _e ? _e(J, Ce, xe) : xe();
      }
    else
      r(J, h, x);
  }, ue = (p, h, x, E = !1, j = !1) => {
    const {
      type: J,
      props: ae,
      ref: V,
      children: re,
      dynamicChildren: k,
      shapeFlag: Y,
      patchFlag: ie,
      dirs: _e,
      cacheIndex: Me,
      memo: Ce
    } = p;
    if (ie === -2 && (j = !1), V != null && (Sr(), So(V, null, x, p, !0), _r()), Me != null && (h.renderCache[Me] = void 0), Y & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const xe = Y & 1 && _e, be = !_o(p);
    let R;
    if (be && (R = ae && ae.onVnodeBeforeUnmount) && qn(R, h, p), Y & 6)
      w(p.component, x, E);
    else {
      if (Y & 128) {
        p.suspense.unmount(x, E);
        return;
      }
      xe && Wr(p, null, h, "beforeUnmount"), Y & 64 ? p.type.remove(
        p,
        h,
        x,
        b,
        E
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (J !== qe || ie > 0 && ie & 64) ? M(
        k,
        h,
        x,
        !1,
        !0
      ) : (J === qe && ie & 384 || !j && Y & 16) && M(re, h, x), E && A(p);
    }
    const z = Ce != null && Me == null;
    (be && (R = ae && ae.onVnodeUnmounted) || xe || z) && fn(() => {
      R && qn(R, h, p), xe && Wr(p, null, h, "unmounted"), z && (p.el = null);
    }, x);
  }, A = (p) => {
    const { type: h, el: x, anchor: E, transition: j } = p;
    if (h === qe) {
      O(x, E);
      return;
    }
    if (h === bl) {
      F(p);
      return;
    }
    const J = () => {
      i(x), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (p.shapeFlag & 1 && j && !j.persisted) {
      const { leave: ae, delayLeave: V } = j, re = () => ae(x, J);
      V ? V(p.el, J, re) : re();
    } else
      J();
  }, O = (p, h) => {
    let x;
    for (; p !== h; )
      x = f(p), i(p), p = x;
    i(h);
  }, w = (p, h, x) => {
    const { bum: E, scope: j, job: J, subTree: ae, um: V, m: re, a: k } = p;
    nf(re), nf(k), E && Fs(E), j.stop(), J && (J.flags |= 8, ue(ae, p, h, x)), V && fn(V, h), fn(() => {
      p.isUnmounted = !0;
    }, h);
  }, M = (p, h, x, E = !1, j = !1, J = 0) => {
    for (let ae = J; ae < p.length; ae++)
      ue(p[ae], h, x, E, j);
  }, ce = (p) => {
    if (p.shapeFlag & 6)
      return ce(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), x = h && h[Nb];
    return x ? f(x) : h;
  };
  let ye = !1;
  const D = (p, h, x) => {
    let E;
    p == null ? h._vnode && (ue(h._vnode, null, null, !0), E = h._vnode.component) : g(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      x
    ), h._vnode = p, ye || (ye = !0, Wd(E), um(), ye = !1);
  }, b = {
    p: g,
    um: ue,
    m: N,
    r: A,
    mt: fe,
    mc: q,
    pc: oe,
    pbc: ve,
    n: ce,
    o: e
  };
  return {
    render: D,
    hydrate: void 0,
    createApp: Xb(D)
  };
}
function yl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ur({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Tm(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Ze(r) && Ze(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = dr(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && Tm(s, a)), a.type === Ba && (a.patchFlag === -1 && (a = i[o] = dr(a)), a.el = s.el), a.type === Tr && !a.el && (a.el = s.el);
    }
}
function pv(e) {
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
function Dm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dm(t);
}
function nf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Lm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Lm(t.subTree) : null;
}
const Rm = (e) => e.__isSuspense;
function mv(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : wb(e);
}
const qe = /* @__PURE__ */ Symbol.for("v-fgt"), Ba = /* @__PURE__ */ Symbol.for("v-txt"), Tr = /* @__PURE__ */ Symbol.for("v-cmt"), bl = /* @__PURE__ */ Symbol.for("v-stc"), ko = [];
let Mn = null;
function Oe(e = !1) {
  ko.push(Mn = e ? null : []);
}
function hv() {
  ko.pop(), Mn = ko[ko.length - 1] || null;
}
let Lo = 1;
function rf(e, t = !1) {
  Lo += e, e < 0 && Mn && t && (Mn.hasOnce = !0);
}
function Vm(e) {
  return e.dynamicChildren = Lo > 0 ? Mn || Ei : null, hv(), Lo > 0 && Mn && Mn.push(e), e;
}
function De(e, t, n, r, i, o) {
  return Vm(
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
  return Vm(
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
function $m(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zm = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? zt(e) || /* @__PURE__ */ Zt(e) || rt(e) ? { i: xn, r: e, k: t, f: !!n } : e : null);
function Ne(e, t = null, n = null, r = 0, i = null, o = e === qe ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zm(t),
    ref: t && Ds(t),
    scopeId: fm,
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
    ctx: xn
  };
  return a ? (mu(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= zt(n) ? 8 : 16), Lo > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Mn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Mn.push(l), l;
}
const Be = gv;
function gv(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === Sm) && (e = Tr), $m(e)) {
    const a = ji(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && mu(a, n), Lo > 0 && !o && Mn && (a.shapeFlag & 6 ? Mn[Mn.indexOf(e)] = a : Mn.push(a)), a.patchFlag = -2, a;
  }
  if (Nv(e) && (e = e.__vccOpts), t) {
    t = yv(t);
    let { class: a, style: l } = t;
    a && !zt(a) && (t.class = st(a)), vt(l) && (/* @__PURE__ */ cu(l) && !Ze(l) && (l = Qt({}, l)), t.style = yt(l));
  }
  const s = zt(e) ? 1 : Rm(e) ? 128 : Ab(e) ? 64 : vt(e) ? 4 : rt(e) ? 2 : 0;
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
function yv(e) {
  return e ? /* @__PURE__ */ cu(e) || Am(e) ? Qt({}, e) : e : null;
}
function ji(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? fr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && zm(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Ze(o) ? o.concat(Ds(t)) : [o, Ds(t)] : Ds(t)
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
    ssContent: e.ssContent && ji(e.ssContent),
    ssFallback: e.ssFallback && ji(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && du(
    d,
    l.clone(d)
  ), d;
}
function ao(e = " ", t = 0) {
  return Be(Ba, null, e, t);
}
function tt(e = "", t = !1) {
  return t ? (Oe(), bn(Tr, null, e)) : Be(Tr, null, e);
}
function Qn(e) {
  return e == null || typeof e == "boolean" ? Be(Tr) : Ze(e) ? Be(
    qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : $m(e) ? dr(e) : Be(Ba, null, String(e));
}
function dr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ji(e);
}
function mu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), mu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Am(t) ? t._ctx = xn : i === 3 && xn && (xn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else rt(t) ? (t = { default: t, _ctx: xn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ao(t)]) : n = 8);
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
      else if (La(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(Ze(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ra(i) && (t[i] = s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function qn(e, t, n, r = null) {
  ar(e, t, 7, [
    n,
    r
  ]);
}
const bv = km();
let vv = 0;
function Sv(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || bv, o = {
    uid: vv++,
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
    scope: new Uy(
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
    propsOptions: Im(r, i),
    emitsOptions: xm(r, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Zb.bind(null, o), e.ce && e.ce(o), o;
}
let qt = null;
const _v = () => qt || xn;
let ra, pc;
{
  const e = za(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  ra = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qt = n
  ), pc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ro = n
  );
}
const ns = (e) => {
  const t = qt;
  return ra(e), e.scope.on(), () => {
    e.scope.off(), ra(t);
  };
}, of = () => {
  qt && qt.scope.off(), ra(null);
};
function jm(e) {
  return e.vnode.shapeFlag & 4;
}
let Ro = !1;
function wv(e, t = !1, n = !1) {
  t && pc(t);
  const { props: r, children: i } = e.vnode, o = jm(e);
  iv(e, r, o, t), lv(e, i, n || t);
  const s = o ? kv(e, t) : void 0;
  return t && pc(!1), s;
}
function kv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gb);
  const { setup: r } = n;
  if (r) {
    Sr();
    const i = e.setupContext = r.length > 1 ? Mv(e) : null, o = ns(e), s = es(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = $p(s);
    if (_r(), o(), (a || e.sp) && !_o(e) && gm(e), a) {
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
    Hm(e);
}
function sf(e, t, n) {
  rt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = am(t)), Hm(e);
}
function Hm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || rr);
  {
    const i = ns(e);
    Sr();
    try {
      Kb(e);
    } finally {
      _r(), i();
    }
  }
}
const xv = {
  get(e, t) {
    return Yt(e, "get", ""), e[t];
  }
};
function Mv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, xv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(am(pb(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in wo)
        return wo[n](e);
    },
    has(t, n) {
      return n in t || n in wo;
    }
  })) : e.proxy;
}
function Pv(e, t = !0) {
  return rt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Nv(e) {
  return rt(e) && "__vccOpts" in e;
}
const nt = (e, t) => /* @__PURE__ */ yb(e, t, Ro), Av = "3.5.32";
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
const Gm = mc ? (e) => mc.createHTML(e) : (e) => e, Cv = "http://www.w3.org/2000/svg", Iv = "http://www.w3.org/1998/Math/MathML", ur = typeof document < "u" ? document : null, lf = ur && /* @__PURE__ */ ur.createElement("template"), Ev = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? ur.createElementNS(Cv, e) : t === "mathml" ? ur.createElementNS(Iv, e) : n ? ur.createElement(e, { is: n }) : ur.createElement(e);
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
      lf.innerHTML = Gm(
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
}, Ov = /* @__PURE__ */ Symbol("_vtc");
function Fv(e, t, n) {
  const r = e[Ov];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ia = /* @__PURE__ */ Symbol("_vod"), Km = /* @__PURE__ */ Symbol("_vsh"), ci = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ia] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Qi(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Qi(e, !0), r.enter(e)) : r.leave(e, () => {
      Qi(e, !1);
    }) : Qi(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Qi(e, t);
  }
};
function Qi(e, t) {
  e.style.display = t ? e[ia] : "none", e[Km] = !t;
}
const Tv = /* @__PURE__ */ Symbol(""), Dv = /(?:^|;)\s*display\s*:/;
function Lv(e, t, n) {
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
      const s = r[Tv];
      s && (n += ";" + s), r.cssText = n, o = Dv.test(n);
    }
  } else t && e.removeAttribute("style");
  ia in e && (e[ia] = o ? r.display : "", e[Km] && (r.display = "none"));
}
const cf = /\s*!important$/;
function Ls(e, t, n) {
  if (Ze(n))
    n.forEach((r) => Ls(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Rv(e, t);
    cf.test(n) ? e.setProperty(
      fi(r),
      n.replace(cf, ""),
      "important"
    ) : e[r] = n;
  }
}
const uf = ["Webkit", "Moz", "ms"], vl = {};
function Rv(e, t) {
  const n = vl[t];
  if (n)
    return n;
  let r = ln(t);
  if (r !== "filter" && r in e)
    return vl[t] = r;
  r = $a(r);
  for (let i = 0; i < uf.length; i++) {
    const o = uf[i] + r;
    if (o in e)
      return vl[t] = o;
  }
  return t;
}
const df = "http://www.w3.org/1999/xlink";
function ff(e, t, n, r, i, o = Ky(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(df, t.slice(6, t.length)) : e.setAttributeNS(df, t, n) : n == null || o && !Gp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : sr(n) ? String(n) : n
  );
}
function pf(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Gm(n) : n);
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
    a === "boolean" ? n = Gp(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
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
function Vv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const mf = /* @__PURE__ */ Symbol("_vei");
function $v(e, t, n, r, i = null) {
  const o = e[mf] || (e[mf] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [a, l] = zv(t);
    if (r) {
      const c = o[t] = Gv(
        r,
        i
      );
      wi(e, a, c, l);
    } else s && (Vv(e, a, s, l), o[t] = void 0);
  }
}
const hf = /(?:Once|Passive|Capture)$/;
function zv(e) {
  let t;
  if (hf.test(e)) {
    t = {};
    let r;
    for (; r = e.match(hf); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : fi(e.slice(2)), t];
}
let Sl = 0;
const jv = /* @__PURE__ */ Promise.resolve(), Hv = () => Sl || (jv.then(() => Sl = 0), Sl = Date.now());
function Gv(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ar(
      Kv(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Hv(), n;
}
function Kv(e, t) {
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
const gf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wv = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? Fv(e, r, s) : t === "style" ? Lv(e, n, r) : La(t) ? Ra(t) || $v(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Uv(e, t, r, s)) ? (pf(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ff(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Bv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !zt(r))) ? pf(e, ln(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ff(e, t, r, s));
};
function Uv(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gf(t) && rt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return gf(t) && zt(n) ? !1 : t in e;
}
function Bv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = ln(t);
  return Array.isArray(n) ? n.some((i) => ln(i) === r) : Object.keys(n).some((i) => ln(i) === r);
}
const yf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => Fs(t, n) : t;
};
function Yv(e) {
  e.target.composing = !0;
}
function bf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _l = /* @__PURE__ */ Symbol("_assign");
function vf(e, t, n) {
  return t && (e = e.trim()), n && (e = tu(e)), e;
}
const Sf = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[_l] = yf(i);
    const o = r || i.props && i.props.type === "number";
    wi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[_l](vf(e.value, n, o));
    }), (n || o) && wi(e, "change", () => {
      e.value = vf(e.value, n, o);
    }), t || (wi(e, "compositionstart", Yv), wi(e, "compositionend", bf), wi(e, "change", bf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[_l] = yf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? tu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, qv = ["ctrl", "shift", "alt", "meta"], Xv = {
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
  exact: (e, t) => qv.some((n) => e[`${n}Key`] && !t.includes(n))
}, pt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Xv[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Jv = /* @__PURE__ */ Qt({ patchProp: Wv }, Ev);
let _f;
function Zv() {
  return _f || (_f = uv(Jv));
}
const hu = ((...e) => {
  const t = Zv().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = e1(r);
    if (!i) return;
    const o = t._component;
    !rt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Qv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Qv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function e1(e) {
  return zt(e) ? document.querySelector(e) : e;
}
function Fe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Et(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function gu(e, t) {
  let n = Et(t) - Et(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const hc = 3;
function eo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function oa(e, t = 0) {
  const n = eo(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = eo(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = eo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = eo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(eo(t) || 0);
}
function Wm(e) {
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
const wf = Math.PI / 180, kf = 0.12, t1 = hc, n1 = 35, r1 = 140, lo = 100, i1 = 20, xf = 0.8;
function o1(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Fe(Number(e || lo), 1, 179) * wf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / wf;
}
function yu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: lo })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(G, U = null) {
    a && a(G, U);
  }
  function d(G, U, F = null, P = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(G || 0), l.drag.lastY = Number(U || 0), l.drag.lastTs = Number(P || performance.now()), l.drag.pointerId = F, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: F }), !0;
  }
  function u(G, U, F = "pano", P = performance.now()) {
    if (!l.drag.active) return !1;
    const $ = Number(P || performance.now()), Q = Number(G), q = Number(U), le = Q - l.drag.lastX, ve = q - l.drag.lastY;
    l.drag.lastX = Q, l.drag.lastY = q, l.drag.lastTs = $;
    const he = r() || { x: 1, y: 1 }, X = Number(he.x || 1), Se = Number(he.y || 1), fe = { ...t() };
    let de = 0, te = 0;
    if (F === "unwrap") {
      const oe = i() || { w: 1, h: 1 }, I = Math.max(1, Number(oe.w || 1)), W = Math.max(1, Number(oe.h || 1)), N = le / I, ue = ve / W;
      de = -N * 360 * X, te = ue * 180 * Se;
    } else {
      const oe = o() || { w: 0, h: 0 }, I = Math.max(1, Number(oe.w || 0)), W = Math.max(1, Number(oe.h || 0));
      if (I > 1 && W > 1) {
        const N = Fe(Number(fe.fov || lo), 1, 179), ue = Fe(o1(N, I, W), 0.1, 179);
        de = -(le / I) * N * X, te = ve / W * ue * Se;
      } else
        de = -le * kf * X, te = ve * kf * Se;
    }
    fe.yaw = Et(Number(fe.yaw || 0) + de), fe.pitch = Fe(Number(fe.pitch || 0) + te, -89.9, 89.9), n(fe), l.velHistory.push({ ts: $, yaw: fe.yaw, pitch: fe.pitch });
    let me = 0;
    for (; me < l.velHistory.length - 1 && l.velHistory[me].ts < $ - 100; ) me++;
    return me > 0 && l.velHistory.splice(0, me), l.inertia.active = !1, l.inertia.lastTs = $, s(), c("drag", { phase: "move", dx: le, dy: ve, dYaw: de, dPitch: te }), !0;
  }
  function f(G = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const U = Number(G || performance.now());
    l.drag.lastTs = U;
    const F = l.velHistory.filter(($) => U - $.ts <= 80);
    if (F.length >= 2) {
      const $ = F[0], Q = F.at(-1), q = Math.max(1e-3, (Q.ts - $.ts) / 1e3);
      let le = Q.yaw - $.yaw;
      le > 180 && (le -= 360), le < -180 && (le += 360), l.inertia.vx = le / q, l.inertia.vy = (Q.pitch - $.pitch) / q;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const P = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = P > i1, l.inertia.lastTs = U, c("drag", { phase: "end", speed: P, inertiaActive: l.inertia.active }), !0;
  }
  function m(G = performance.now()) {
    if (!l.inertia.active) return !1;
    const U = Number(G || performance.now()), F = Math.max(1e-3, (U - (l.inertia.lastTs || U)) / 1e3);
    l.inertia.lastTs = U;
    const P = { ...t() };
    P.yaw = Et(Number(P.yaw || 0) + l.inertia.vx * F), P.pitch = Fe(Number(P.pitch || 0) + l.inertia.vy * F, -89.9, 89.9);
    const $ = Math.exp(-5.5 * F);
    return l.inertia.vx *= $, l.inertia.vy *= $, Math.abs(l.inertia.vx) < xf && Math.abs(l.inertia.vy) < xf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), n(P), s(), l.inertia.active;
  }
  function _() {
    const G = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], G;
  }
  function g(G) {
    const U = Math.sign(Number(G || 0));
    if (!U) return !1;
    const F = { ...t() }, P = Number(F.fov || lo);
    return F.fov = Fe(P + U * t1, n1, r1), n(F), s(), c("wheel", { deltaSign: U, fovBefore: P, fovAfter: F.fov }), !0;
  }
  function v(G, U = 0) {
    return g(oa(G, U));
  }
  function y() {
    n({ yaw: 0, pitch: 0, fov: lo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: m,
    stopMotion: _,
    applyWheel: g,
    applyWheelEvent: v,
    resetView: y
  };
}
const s1 = "PanoramaSuite.Debug.Diagnostics", a1 = "PanoramaSuite.Debug.ExportDiagnostics", wl = "pano_suite.diagnostics.v1", Mf = "pano_suite.diagnostics.previous.v1", l1 = 300, c1 = 2e5, u1 = 100, d1 = 20, f1 = 1e3, p1 = 2, vs = 1024 * 1024;
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
function h1() {
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
function g1(e = {}) {
  const t = { ...h1(), ...e };
  let n = !1, r = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, m = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    d.delete(b), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    u.delete(b), m.collected += 1;
  }) : null, v = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, G = [], U = /* @__PURE__ */ new Map();
  let F = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 };
  const Q = [];
  function q(b, B, p = void 0) {
    G.push(p === void 0 ? { t: t.clock(), type: b, label: B } : { t: t.clock(), type: b, label: B, detail: p }), G.length > u1 && G.shift();
  }
  function le(b, B, p, h, x) {
    if (!n || !h || !t.WeakRef) return h;
    const E = { ref: new t.WeakRef(h), label: x };
    return b.add(E), B == null || B.register(h, E), p.created += 1, h;
  }
  function ve(b, B = "") {
    return le(d, _, f, b, B);
  }
  function he(b, B = "") {
    return le(u, g, m, b, B);
  }
  function X({ label: b = "", width: B, height: p, offscreen: h = !1 } = {}) {
    const x = globalThis.OffscreenCanvas;
    let E;
    return h && typeof x < "u" ? E = new x(B, p) : (E = t.document().createElement("canvas"), B !== void 0 && p !== void 0 && (E.width = B, E.height = p)), ve(E, b);
  }
  function Se(b) {
    b.width = 0, b.height = 0, n && (f.released += 1);
  }
  function fe(b = t.document(), B = "") {
    var p;
    return he(((p = b == null ? void 0 : b.createElement) == null ? void 0 : p.call(b, "video")) || null, B);
  }
  function de(b, B) {
    if (!n || !b) return () => {
    };
    const p = { label: B, lost: !1, disposed: !1 };
    v.add(p), y.created += 1, q("webgl-created", B);
    const h = () => {
      p.disposed || (p.lost = !0, y.lost += 1, q("webglcontextlost", B));
    }, x = () => {
      p.disposed || (p.lost = !1, y.restored += 1, q("webglcontextrestored", B));
    };
    return b.addEventListener("webglcontextlost", h), b.addEventListener("webglcontextrestored", x), () => {
      p.disposed || (p.disposed = !0, v.delete(p), y.disposed += 1, q("webgl-disposed", B));
    };
  }
  function te(b, B) {
    return U.set(b, B), () => {
      U.get(b) === B && U.delete(b);
    };
  }
  function me() {
    return n ? t.now() : -1;
  }
  function oe(b) {
    if (b < 0 || !n) return;
    const B = t.now() - b;
    F.count += 1, F.maxMs = Math.max(F.maxMs, B);
  }
  function I(b, B) {
    if (B < 0 || !n) return;
    const p = t.now() - B, h = P.get(b) ?? { count: 0, maxMs: 0 };
    h.count += 1, h.maxMs = Math.max(h.maxMs, p), P.set(b, h);
  }
  function W() {
    let b = 0, B = 0, p = 0, h = [0, 0];
    const x = {};
    for (const E of d) {
      const j = E.ref.deref();
      if (!j) continue;
      b += 1;
      const J = j.width * j.height;
      J > 0 && (B += 1), p += J, J > h[0] * h[1] && (h = [j.width, j.height]);
      const ae = x[E.label] ?? (x[E.label] = [0, 0]);
      ae[0] += 1, ae[1] += J;
    }
    return { ...f, alive: b, sized: B, pixels: p, mb: Nr(p * 4 / vs, 1), largest: h, byLabel: x };
  }
  function N() {
    const b = [];
    let B = 0, p = 0, h = 0;
    for (const x of u) {
      const E = x.ref.deref();
      if (!E) continue;
      B += 1;
      const j = !!(E.currentSrc || E.src);
      j && (p += 1);
      const J = !E.paused && !E.ended;
      J && (h += 1), b.length < d1 && b.push({
        label: x.label,
        playing: J,
        src: j,
        size: [E.videoWidth || 0, E.videoHeight || 0],
        ready: E.readyState ?? 0,
        connected: !!E.isConnected
      });
    }
    return { ...m, alive: B, loaded: p, playing: h, list: b };
  }
  function ue() {
    const b = t.now(), B = t.memory(), p = {
      t: t.clock(),
      heap: B ? { used: Nr(B.usedJSHeapSize / vs, 1), total: Nr(B.totalJSHeapSize / vs, 1), limit: Nr(B.jsHeapSizeLimit / vs, 1) } : null,
      canvas: W(),
      webgl: { ...y, alive: [...v].filter((h) => !h.lost).length },
      video: N(),
      frame: { count: F.count, maxMs: Nr(F.maxMs), longTasks: $.count, longTaskMaxMs: Nr($.maxMs) },
      renders: Object.fromEntries([...P].map(([h, x]) => [h, { count: x.count, maxMs: Nr(x.maxMs) }])),
      sources: Object.fromEntries([...U].map(([h, x]) => [h, x()])),
      costMs: Nr(c, 3)
    };
    return F = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 }, Q.push({ record: p, text: JSON.stringify(p) }), Q.length > l1 && Q.shift(), l += 1, l % p1 === 0 && O(), c = t.now() - b, p;
  }
  function A(b = c1) {
    const B = JSON.stringify({ ...o, events: G }).slice(0, -1);
    let p = b - B.length - 14, h = Q.length;
    for (; h > 0 && p - Q[h - 1].text.length - 1 >= 0; )
      h -= 1, p -= Q[h].text.length + 1;
    return `${B},"records":[${Q.slice(h).map((x) => x.text).join(",")}]}`;
  }
  function O() {
    if (!o) return;
    const b = t.storage();
    if (b) {
      o.savedAt = t.clock();
      try {
        b.setItem(wl, A());
      } catch {
      }
    }
  }
  function w() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", O();
  }
  function M() {
    var x;
    if (r) return i;
    r = !0;
    const b = t.storage();
    if (!b) return null;
    let B = null;
    try {
      if (B = b.getItem(wl), B === null) {
        const E = b.getItem(Mf);
        return i = E === null ? null : JSON.parse(E), i;
      }
      b.setItem(Mf, B), b.removeItem(wl), i = JSON.parse(B);
    } catch {
      return i;
    }
    const p = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], h = p.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${p.length} records kept. Its last records:`,
      JSON.stringify(h)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((x = p.at(-1)) == null ? void 0 : x.t) || 0).toISOString()}; ${p.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(h)
    ), i;
  }
  function ce(b) {
    const B = b === !0;
    if (M(), B !== n) {
      if (n = B, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, Q.length = 0, a = t.observeLongTasks((p) => {
          for (const h of p)
            $.count += 1, $.maxMs = Math.max($.maxMs, h.duration);
        }), t.addUnload(w), s = t.setInterval(ue, f1), O();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(w), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", O();
    }
  }
  function ye() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...G], records: Q.map((b) => b.record) } : null,
      previous: i
    };
  }
  function D() {
    const b = t.document(), B = new Blob([JSON.stringify(ye(), null, 1)], { type: "application/json" }), p = URL.createObjectURL(B), h = b.createElement("a");
    h.href = p, h.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, h.click(), setTimeout(() => URL.revokeObjectURL(p), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: X,
    releaseCanvas: Se,
    trackCanvas: ve,
    createVideo: fe,
    trackVideo: he,
    watchContext: de,
    addSource: te,
    frameStart: me,
    frameEnd: oe,
    renderEnd: I,
    sample: ue,
    serialize: A,
    recoverPrevious: M,
    setEnabled: ce,
    exportData: ye,
    download: D
  };
}
const yn = g1(), Gt = yn.createCanvas, ei = yn.releaseCanvas, kl = yn.trackCanvas, rs = yn.createVideo, Pf = yn.trackVideo, y1 = yn.addSource, b1 = yn.frameStart, v1 = yn.frameEnd;
function Um(e, t) {
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
const S1 = {
  id: s1,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => yn.setEnabled(e === !0)
}, Nf = {
  id: a1,
  label: "Export Panorama Suite diagnostics",
  function: () => yn.download()
}, ct = Math.PI / 180, It = 180 / Math.PI;
function Fn(e, t, n) {
  return { x: e, y: t, z: n };
}
function sa(e, t) {
  return Fn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function aa(e, t) {
  return Fn(e.x * t, e.y * t, e.z * t);
}
function xl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function bu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Fn(e.x / t, e.y / t, e.z / t);
}
function gn(e, t) {
  const n = e * ct, r = t * ct, i = Math.cos(r);
  return Fn(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function Yi(e, t, n = 0) {
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
function la(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function gt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function _1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function w1(e) {
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
function k1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function x1(e, t) {
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
function Ss(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = x1(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function M1(e, t, n, r) {
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
function P1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = k1(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = M1(e.geometry, n, r, t === "paint");
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
function Af(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = P1(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function N1(e) {
  if (!e || typeof e != "object") return null;
  const t = gt(e.u0, null), n = gt(e.v0, null), r = gt(e.u1, null), i = gt(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function A1(e) {
  const t = e || {};
  return {
    du: gt(t.du, 0) ?? 0,
    dv: gt(t.dv, 0) ?? 0,
    rot_deg: gt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, gt(t.scale, 1) ?? 1)
  };
}
function C1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = N1(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, gt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: A1(e.transform)
  } : null;
}
function I1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = C1(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function pi(e) {
  const t = _1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: w1(e.groups),
    paint: Af(e.paint, "paint"),
    mask: Af(e.mask, "mask"),
    raster_objects: I1(e.raster_objects)
  };
}
const Dn = 1, Ln = 179, gc = 85;
function qa(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Bm(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Ym(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * It;
  return n && (r = Math.round(r / 15) * 15), qa(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Vr(e = {}) {
  const t = Fe(Qe(e.hFOV_deg || 90, 90), Dn, Ln), n = Fe(Qe(e.vFOV_deg || 60, 60), Dn, Ln), r = Math.tan(t * ct * 0.5), i = Math.tan(n * ct * 0.5);
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
function ui(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Vr(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function vu(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, Qe(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function Su(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Fe(2 * Math.atan(r / (2 * n)) * It, Dn, Ln), s = Fe(2 * Math.atan(i / (2 * n)) * It, Dn, Ln);
  return { hFOV_deg: o, vFOV_deg: s };
}
function E1(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), i = Qe(e == null ? void 0 : e.y, 0), o = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Vr(t), l = Math.max(1e-12, Qe(n, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: r + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function _u(e, t, n = gc) {
  const r = Math.max(1e-12, Qe(t, 1)), i = Fe(Qe(n, gc), 1, 89.999), o = r * Math.tan(i * ct), s = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function qm(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function O1(e, t) {
  const n = Fe(Qe(e, 90), Dn, Ln), r = Math.max(1e-6, Qe(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * ct * 0.5) / r) * It,
    Dn,
    Ln
  );
}
function Rs(e, t) {
  const n = Fe(Qe(e, 60), Dn, Ln), r = Math.max(1e-6, Qe(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * ct * 0.5) * r) * It,
    Dn,
    Ln
  );
}
function Cf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function F1(e, t) {
  const n = Cf(e, 1), r = Cf(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), s = Math.max(1, Math.round(r * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function mi(e) {
  const t = Fe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * ct, n = Fe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * ct;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function is(e) {
  const t = mi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || F1(t, 1);
}
function wu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = is(t), t;
}
function Xm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Fe(s, Dn, Ln) : Fe(Math.min(42, Qe(i, 100) * 0.42), 8, 96);
  return wu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: Fe(Qe(n, 0), -89.9, 89.9),
    roll_deg: qa(r),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function gr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : is(e);
}
function Jm(e, t) {
  const n = Vr(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * It, o = 2 * Math.atan(n.tanHalfY * r) * It;
  return i < Dn || i > Ln || o < Dn || o > Ln ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Zm(e, t, n = hc) {
  const r = Math.sign(Qe(t, 0)), i = Math.abs(Qe(n, hc));
  if (!r || !(i > 0)) return null;
  const o = Vr(e), s = o.hFovDeg + r * i;
  if (s < Dn || s > Ln) return null;
  const a = Math.tan(s * ct * 0.5);
  return Jm(e, a / o.tanHalfX);
}
function Qm(e, t) {
  const n = Vr(e), r = Yi(n.yawDeg, n.pitchDeg, n.rollDeg), i = Qe(t == null ? void 0 : t.x, 0), o = Qe(t == null ? void 0 : t.y, 0);
  return bu(sa(sa(r.fwd, aa(r.right, i)), aa(r.up, o)));
}
function eh(e) {
  return Fn(e.x, e.y, -e.z);
}
function Vs(e) {
  return Fn(e.x, e.y, -e.z);
}
function en(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = Yi(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function th(e) {
  const t = Vs(Fn(e[0][0], e[1][0], e[2][0])), n = Vs(Fn(e[0][1], e[1][1], e[2][1])), r = Vs(Fn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * n.z - s * n.x, s * t.x - a * t.z);
  return { yawDeg: i * It, pitchDeg: o * It, rollDeg: l * It };
}
function Vo(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function $r(e) {
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
const ti = 1e-6, yc = 1e-6, T1 = 1e-9;
function $o(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function D1(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    $o(0, n, i, 1, c) < t ? s = c : a = c;
  }
  return $o(0, r, o, 1, 0.5 * (s + a));
}
function Hi(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Gi(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = n.map((f) => -f / i), a = r.map((f) => f / o);
  if (s.reduce((f, m, _) => f + m * a[_], 0) < 0) return n.map(() => 0);
  const l = s.map((f, m) => (f * o + a[m] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((m, _) => m + _ * _, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function nh(e, t, n, r) {
  const i = n[r], o = n[r + 1], s = t[r + 1] - t[r], a = i.map((d, u) => o[u] - d);
  let l = a;
  Hi(e, r) && (l = Gi(t, r, n[r - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return Hi(e, r + 1) && (c = Gi(t, r + 1, a.map((d) => -d), n[r + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function rh(e, t, n, r, i) {
  const [[o], [s]] = nh(e, t, n.map((a) => [a]), r);
  return $o(n[r], n[r] + o, n[r + 1] + s, n[r + 1], i);
}
function L1(e, t, n, r) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = nh(e, t, i, n);
  o = ((c = e[n].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[n + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[n], l = i[n + 1];
  return [0, 1, 2].map((u) => $o(a[u], a[u] + o[u], l[u] + s[u], l[u], r));
}
function ca([e, t, n, r], [i, o, s, a]) {
  return [
    r * i + e * a + t * s - n * o,
    r * o - e * s + t * a + n * i,
    r * s + e * o - t * i + n * a,
    r * a - e * i - t * o - n * s
  ];
}
function R1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Ml(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function V1([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function bc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Ci(e, t) {
  return V1(ca([-e[0], -e[1], -e[2], e[3]], t));
}
function Pl(e, t, n) {
  return ca(e, bc(Ci(e, t).map((r) => n * r)));
}
function Nl(e, t) {
  const n = R1(e, t);
  if (Math.abs(n) > yc) return n < 0;
  const [r, i, o] = Ci(e, t);
  for (const s of [-i, r, o])
    if (Math.abs(s) > yc) return s < 0;
  return !1;
}
function ws(e) {
  const { x: t, y: n, z: r, w: i } = $r(en(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function vc(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function $1(e, t, n, r) {
  const i = ws(e[n].value);
  let o = ws(e[n + 1].value);
  Nl(i, o) && (o = Ml(o));
  const s = t[n + 1] - t[n], a = Ci(i, o);
  let l = a;
  if (Hi(e, n)) {
    let P = ws(e[n - 1].value);
    Nl(P, i) && (P = Ml(P)), l = Gi(t, n, Ci(i, P), a).map(($) => $ * s);
  }
  let c = a;
  if (Hi(e, n + 1)) {
    let P = ws(e[n + 2].value);
    Nl(o, P) && (P = Ml(P)), c = Gi(t, n + 1, Ci(o, i), Ci(o, P)).map(($) => $ * s);
  }
  const d = ca(i, bc(l.map((P, $) => 0.5 * (P - a[$])))), u = ca(o, bc(a.map((P, $) => 0.5 * (P - c[$])))), [f, m, _, g] = Pl(Pl(i, o, r), Pl(d, u, r), 2 * r * (1 - r)), { yawDeg: v, pitchDeg: y, rollDeg: G } = th(Vo({ x: f, y: m, z: _, w: g })), U = e[n].value, F = e[n + 1].value;
  return {
    yaw_deg: vc(v, U.yaw_deg, F.yaw_deg, r),
    pitch_deg: y,
    roll_deg: vc(G, U.roll_deg, F.roll_deg, r)
  };
}
function zo(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function ua(e) {
  return Math.sqrt(zo(e, e));
}
function da(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function ih(e, t) {
  const n = zo(e, t), r = t.map((s, a) => s - n * e[a]), i = ua(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((s) => s * o);
}
function ki(e, t) {
  const n = ua(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function ks(e, t, n) {
  return ki(e, ih(e, t).map((r) => n * r));
}
function Al(e, t) {
  const n = da(e[t].value), r = da(e[t + 1].value), i = zo(n, r), o = i < 0 && ua(r.map((l, c) => l - i * n[c])) <= yc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = ih(n, r);
  const a = ua(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * n[c]), o];
}
function z1(e, t, n, r) {
  const i = da(e[n].value), o = da(e[n + 1].value), [s, a, l] = Al(e, n);
  let c = s, d = a;
  const u = t[n + 1] - t[n];
  Hi(e, n) && (c = Gi(t, n, Al(e, n - 1)[1].map((U) => -U), c).map((U) => U * u)), Hi(e, n + 1) && (d = Gi(t, n + 1, d.map((U) => -U), Al(e, n + 1)[0]).map((U) => U * u));
  let f, m, _;
  if (l) {
    const U = Math.PI, F = $o(0, zo(c, s) / U / 3, U - zo(d, a) / U / 3, U, r);
    [f, m, _] = ki(i, s.map((P) => F * P / U));
  } else {
    const U = ks(ki(i, c.map(($) => $ / 3)), ki(o, d.map(($) => -$ / 3)), r), F = ks(ki(i, c.map(($) => r * $ / 3)), U, r), P = ks(U, ki(o, d.map(($) => -(1 - r) * $ / 3)), r);
    [f, m, _] = ks(F, P, r);
  }
  const g = Math.hypot(f, _), v = e[n].value.yaw_deg, y = e[n + 1].value.yaw_deg;
  return { yaw_deg: g <= T1 ? v + (y - v) * r : vc(Math.atan2(f, _) * 180 / Math.PI, v, y, r), pitch_deg: Math.atan2(m, g) * 180 / Math.PI };
}
function j1(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = rh(e, t, e.map((s) => s.value[o]), n, r);
  return i;
}
function H1(e, t, n, r) {
  return rh(e, t, e.map((i) => i.value), n, r);
}
const G1 = { position: L1, rotation: $1, direction: z1, size: j1 };
function At(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return _s(e[t].value);
  if (n <= r[0].frame + ti) return _s(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - ti) return _s(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + ti; ) o += 1;
  const s = r[o];
  if (Math.abs(n - s.frame) <= ti || s.easing === "hold") return _s(s.value);
  const a = r.map((c) => c.frame), l = D1(s.easing, (n - a[o]) / (a[o + 1] - a[o]));
  return (G1[t] ?? H1)(r, a, o, l);
}
function Sc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function K1(e) {
  return Math.min(1, Math.max(0, e));
}
function oh(e) {
  return Math.max(1e-6, e);
}
function sh(e, t) {
  return t - (e.start - e.in);
}
function hi(e, t) {
  return t >= e.start - ti && (e.duration === null || t < e.start + e.duration - ti);
}
function Xa(e, t) {
  return {
    position: At(e, "position", t),
    ...At(e, "rotation", t),
    hFOV_deg: Sc(At(e, "fov", t)),
    aspect: e.aspect
  };
}
function os(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = sh(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : Xa(r, n),
    scene: {
      active: i.visible && hi(i.clip, n),
      clip_frame: o,
      position: At(i, "position", o),
      ...At(i, "rotation", o),
      scale: oh(At(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Bn(s, n))
  };
}
function W1(e, t) {
  if (e.placement === "world")
    return {
      position: At(e, "position", t),
      ...At(e, "rotation", t),
      scale: oh(At(e, "scale", t))
    };
  const n = At(e, "size", t);
  return {
    ...At(e, "direction", t),
    roll_deg: At(e, "roll", t),
    hFOV_deg: Sc(n.hFOV_deg),
    vFOV_deg: Sc(n.vFOV_deg)
  };
}
function Bn(e, t) {
  const n = sh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && hi(e.clip, t),
    clip_frame: n,
    ...W1(e, n),
    opacity: K1(At(e, "opacity", n))
  };
}
const U1 = 2, ah = ["sky", "world"], _c = ["perspective", "erp"], B1 = ["input", "output", "temp"], lh = [0.42, 0, 0.58, 1], ch = 1, ku = 1e3, wc = 1e7, xu = wc, Mu = Number.MAX_SAFE_INTEGER, Y1 = /^sticker_([0-9]{1,16})$/;
function wt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Vt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Pu(e, t) {
  const n = Vt(e, t);
  return n !== null && n > 0 ? n : t;
}
function an(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Dr(e) {
  const t = Vt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function $s(e) {
  const t = Dr(e);
  return t === null ? null : an(t, -wc, wc);
}
function zr(e) {
  const t = Pu(e, null);
  return t === null ? null : an(t, ch, ku);
}
function uh(e) {
  const t = Dr(e);
  return t !== null && t >= 1 ? Math.min(t, xu) : null;
}
function jo(e, t) {
  return typeof e == "boolean" ? e : t;
}
function dh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Vt(n, null));
  return t.includes(null) ? null : t;
}
function fh(e) {
  return dh(e) || [0, 0, 0];
}
function ph(e) {
  const t = wt(e) ? e : {};
  return {
    yaw_deg: Vt(t.yaw_deg, 0),
    pitch_deg: an(Vt(t.pitch_deg, 0), -90, 90),
    roll_deg: Vt(t.roll_deg, 0)
  };
}
function q1(e) {
  return an(Vt(e, 90), 0.1, 179);
}
function X1(e) {
  return Pu(e, 1);
}
function J1(e) {
  const t = wt(e) ? e : {};
  return {
    yaw_deg: Vt(t.yaw_deg, 0),
    pitch_deg: an(Vt(t.pitch_deg, 0), -90, 90)
  };
}
function Z1(e) {
  return Vt(e, 0);
}
function Q1(e) {
  const t = wt(e) ? e : {};
  return {
    hFOV_deg: an(Vt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: an(Vt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function mh(e) {
  return an(Vt(e, 1), 0, 1);
}
const Nu = [["position", fh], ["rotation", ph], ["fov", q1]], Ja = [["position", fh], ["rotation", ph], ["scale", X1]], jr = [["direction", J1], ["roll", Z1], ["size", Q1], ["opacity", mh]], Hr = [...Ja, ["opacity", mh]];
function eS(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Vt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...lh];
}
function tS(e) {
  if (!wt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = dh(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function nS(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!wt(i)) continue;
    const o = $s(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: eS(i.easing) }, a = n ? tS(i.handles) : null;
    a && (s.handles = a), r.set(o, s);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function Za(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = wt(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: nS(o.keyframes, i, r === "position") };
  }
  return n;
}
function ss(e) {
  const t = wt(e) ? e : {}, n = $s(t.start), r = $s(t.in), i = $s(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Qa(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function hh(e) {
  const t = wt(e) ? e : {}, n = an(Vt(t.x0, 0), 0, 1), r = an(Vt(t.y0, 0), 0, 1), i = an(Vt(t.x1, 1), 0, 1), o = an(Vt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function rS(e) {
  if (!wt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: B1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
const gh = Object.freeze([".gltf", ".glb", ".obj", ".fbx", ".stl", ".spz", ".splat", ".ply", ".ksplat"]);
function yh(e) {
  const t = String(e ?? "").toLowerCase(), n = t.lastIndexOf(".");
  return n >= 0 && gh.includes(t.slice(n));
}
function oi(e) {
  return (e == null ? void 0 : e.kind) === "file" && typeof e.filename == "string" && yh(e.filename);
}
function iS(e) {
  const t = rS(e.source);
  if (!t) return null;
  const n = ah.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: ss(e.clip),
    visible: jo(e.visible, !0),
    locked: jo(e.locked, !1),
    crop: hh(e.crop),
    ...Za(e, r ? Hr : jr)
  };
  return r || (i.z_index = Dr(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = oS(e.handoff_overrides, n)), i;
}
function oS(e, t) {
  const n = Array.isArray(e) ? e : [];
  return (t === "world" ? Hr : jr).map(([r]) => r).filter((r) => n.includes(r));
}
function sS(e, t) {
  const n = [];
  let r = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = wt(s) ? iS(s) : null;
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
  let o = lS(t, n);
  for (const s of n)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: n, next: Math.min(o, Mu) };
}
function aS(e) {
  const t = typeof e == "string" ? Y1.exec(e) : null, n = t ? Number(t[1]) : 0;
  return n < Mu ? n : 0;
}
function bh(e) {
  return e.reduce((t, n) => Math.max(t, aS(n.id)), 0) + 1;
}
function lS(e, t) {
  const n = Dr(e), r = bh(t);
  return an(n === null ? r : Math.max(n, r), 1, Mu);
}
function cS(e) {
  if (!wt(e)) return null;
  const t = _c.includes(e.projection) ? e.projection : _c[0];
  return { aspect: Pu(e.aspect, 1), projection: t, visible: jo(e.visible, !0), ...Za(e, Nu) };
}
function fa(e) {
  return typeof e == "string" && e ? e : null;
}
function vh(e, t) {
  const n = new Map(e.map((r, i) => [t(r), i]));
  return e.filter((r, i) => n.get(t(r)) === i);
}
function uS(e) {
  if (!wt(e) || fa(e.id) === null || !ah.includes(e.placement)) return null;
  const t = e.placement === "world", n = {};
  wt(e.clip) && (n.clip = ss(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (n[i] = e[i]);
  wt(e.crop) && (n.crop = hh(e.crop)), Object.assign(n, Za(e, (t ? Hr : jr).filter(([i]) => wt(e[i]))));
  const r = t ? null : Dr(e.z_index);
  return r !== null && (n.z_index = r), Object.keys(n).length ? { id: e.id, placement: e.placement, ...n } : null;
}
function Sh(e) {
  const t = wt(e) ? zr(e.fps) : null;
  if (t === null || fa(e.layer) === null) return null;
  const n = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => fa(c) !== null))] : [], r = (Array.isArray(e.stickers) ? e.stickers : []).map(uS).filter((c) => c !== null), i = vh(r, (c) => c.id).filter((c) => !n.includes(c.id)), o = wt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), wt(o.clip) && (s.clip = ss(o.clip));
  const a = { layer: e.layer, fps: t, deleted: n, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !n.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function dS(e) {
  const t = (Array.isArray(e) ? e : []).map(Sh).filter((n) => n !== null);
  return vh(t, (n) => n.layer);
}
function pa(e) {
  const t = wt(e.timeline) ? e.timeline : {}, n = wt(e.scene) ? e.scene : {}, { stickers: r, next: i } = sS(e.stickers, e.next_sticker_id);
  return {
    version: U1,
    id: fa(e.id),
    timeline: {
      fps: zr(t.fps) ?? 24,
      length: uh(t.length)
    },
    camera: cS(e.camera),
    scene: { clip: ss(n.clip), visible: jo(n.visible, !0), ...Za(n, Ja) },
    stickers: r,
    next_sticker_id: i,
    painting: pi(e.painting),
    painting_layer: wt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: jo(e.painting_visible, !0),
    upstream: dS(e.upstream),
    background: fS(e.background)
  };
}
function fS(e) {
  return { clip: ss(wt(e) ? e.clip : void 0) };
}
function pS(e, t) {
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
function mS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!wt(t)) return null;
  const n = an(Vt(t.hFOV_deg, 90), 1, 179), r = an(Vt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function hS(e) {
  const t = wt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(wt) : [];
  return n.sort((r, i) => Vt(r.z_index, 0) - Vt(i.z_index, 0)), pa({
    camera: mS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: pS(r, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return pa({});
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
  return n === 1 ? hS(t) : pa(t);
}
const Cl = {
  state: { painting_visible: !0 },
  camera: { projection: _c[0], visible: !0 },
  scene: { visible: !0 }
};
function Il(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function kc(e) {
  const t = Il(e, Cl.state);
  return t.id === null && delete t.id, t.next_sticker_id === bh(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, Qa(t.background.clip) && delete t.background, JSON.stringify({
    ...t,
    camera: e.camera && Il(e.camera, Cl.camera),
    scene: Il(e.scene, Cl.scene),
    stickers: e.stickers.map((n) => Object.fromEntries(Object.entries(n).filter(([r, i]) => r !== "handoff_overrides" || i.length)))
  });
}
function xo(e, t, n, r, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: n(r + a.frame) - i }))
    };
  return o;
}
function Mo(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function qi(e, t) {
  const n = zr(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (a) => Dr(a * r), { length: o } = e.timeline, s = Mo(e.scene.clip, i);
  return pa({
    id: e.id,
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...xo(e.camera, Nu, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...xo(e.scene, Ja, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = Mo(a.clip, i), u = a.placement === "world" ? Hr : jr;
      return { ...a, clip: l, ...xo(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream,
    background: { clip: Mo(e.background.clip, i).clip }
  });
}
function _h(e, t) {
  const { fps: n } = t.timeline, r = n / e.fps, i = (l) => Dr(l * r), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? Hr : jr).filter(([m]) => Object.hasOwn(l, m));
    if (!Object.hasOwn(l, "clip")) {
      const m = o.get(l.id) ?? 0, _ = Dr(m * (e.fps / n));
      return { ...l, ...xo(l, c, i, _, m) };
    }
    const { clip: d, anchor: u, newAnchor: f } = Mo(l.clip, i);
    return { ...l, clip: d, ...xo(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: Mo(e.scene.clip, i).clip } : e.scene;
  return Sh({ ...e, fps: n, stickers: s, scene: a });
}
const gS = 1e-3;
function Au(e, t, n, r) {
  if (!hi(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < r.frames ? (s + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(gS / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function Cu(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function wh(e, t, n, r = !1) {
  return e.start - e.in + (n.video && r ? n.duration * t : n.frames);
}
function kh(e, t, n) {
  const r = n / t;
  return { start: e.start * r, in: e.in * r, duration: e.duration === null ? null : e.duration * r };
}
function xh(e) {
  return Qa(e) ? null : { origin: e.start - e.in, start: e.start, end: e.duration === null ? 1 / 0 : e.start + e.duration };
}
function xc(e, t, n, r = null, i = !1) {
  return hi(e, t) ? !(r != null && r.video || (r == null ? void 0 : r.frames) > 1) || t < wh(e, n, r, i) : !1;
}
const to = /* @__PURE__ */ new Map(), yS = 8;
function Mh(e) {
  let t = to.get(e);
  if (!t) {
    const n = Gt({ label: "background.color", width: 2, height: 1 }), r = n.getContext("2d");
    r.fillStyle = e, r.fillRect(0, 0, n.width, n.height), t = { media: n, revision: e, coverage: 360, source: `bg_color:${e}` }, to.size >= yS && to.delete(to.keys().next().value), to.set(e, t);
  }
  return t;
}
function Ho(e) {
  const t = e("pano_sticker_input_video_meta")[0];
  if (t && typeof t == "object") return t;
  const n = e("pano_sticker_files").length;
  return n > 1 ? { kind: "IMAGE", frames: n } : null;
}
function bS(e, t) {
  return Math.floor(e * t.fps);
}
function Iu(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const If = 4;
function Eu({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return r.has(s) || r.set(s, e(n[s], t)), r.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== n.length || s.some((f, m) => f !== n[m])) && (n = s, r.clear(), i = null), a === null) return null;
      const d = bS(a, l);
      for (let f = d; f < Math.min(n.length, d + If + 1); f += 1) o(f);
      for (const f of r.keys())
        (f < d || f > d + If) && f !== i && r.delete(f);
      const u = r.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && r.delete(i), i = d), i === null ? c : r.get(i);
    }
  };
}
function El(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Ph(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Nh(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= ti);
}
function Ah(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? Ph(e.keyframes[r - 1].easing) : [...lh];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function Jt(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = El(i.value, r);
    return;
  }
  const o = Nh(i, n);
  o ? o.value = El(o.value, r) : Ah(i, n, El(At(e, t, n), r));
}
function Xi(e) {
  return e.placement === "world" ? Hr.map(([t]) => t) : e.placement === "sky" ? jr.map(([t]) => t) : e.clip && !e.position ? [] : (e.clip ? Ja : Nu).map(([t]) => t);
}
function vS(e, t) {
  for (const n of Xi(e))
    Nh(e[n], t) || Ah(e[n], t, At(e, n, t));
}
function SS(e) {
  const t = Xi(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function Ol(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function _S(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function wS(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = At(e, o, r);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function kS(e, t, n, r, i, o = 1 / 0) {
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
function Ch(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => n.length > 1 ? s.frame >= r && s.frame < i : s.frame === r));
}
function xS(e, t, n) {
  const r = Ch(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function MS(e, t, n, r) {
  for (const i of Ch(e, t, n)) i.easing = Ph(r);
}
function Ef(e, t) {
  e.start = Math.max(0, e.start + t);
}
function PS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function NS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Ih(e) {
  return Xi(e).map((t) => e[t]);
}
function ma(e) {
  return Ih(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Qa(e.clip);
}
function Eh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.background, e.scene, ...e.stickers].some(ma);
}
const Oh = 1e5;
function Ou(e, t = {}) {
  const { length: n } = e.timeline, r = n ? Math.max(1, Math.round(n)) : AS(e, t);
  return Number.isFinite(r) ? r : Oh;
}
function AS(e, { bg: t = null, port: n = null, sceneItems: r = 0, upstream: i = null, openClip: o = null, camera: s = !1 } = {}) {
  const a = e.timeline.fps, l = (g) => g.duration === null || g === o, c = [e.scene.clip, ...e.stickers.map((g) => g.clip)].filter((g) => !l(g)).map((g) => g.start + g.duration), d = e.stickers.find((g) => g.source.kind === "port");
  n && d && l(d.clip) && c.push(Cu({ ...d.clip, duration: null }, a, n));
  const u = e.scene.clip;
  r > 1 && l(u) && c.push(u.start - u.in + r);
  const f = e.background.clip;
  (t == null ? void 0 : t.frames) === 1 && !t.video && !l(f) && c.push(f.start + f.duration);
  const m = s && e.camera ? Ih(e.camera).flatMap((g) => g.keyframes.map((v) => v.frame)) : [];
  let _ = 1;
  return t != null && t.video ? _ = i ? Math.max(1, Math.round(t.duration * a)) : t.frames : (t == null ? void 0 : t.frames) > 1 ? _ = t.frames : c.length ? _ = Math.max(1, Math.round(Math.max(...c))) : m.length && (_ = Math.max(1, Math.round(Math.max(...m)) + 1)), i && (_ = Math.max(_, i.frames, ...i.ends.map(Math.round))), _;
}
function CS(e) {
  return e > 0 ? zr(Math.min(e, ku)) : null;
}
function IS(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : uh(Math.max(1, Math.min(e, xu)));
}
const Fl = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], ES = 2e3;
function OS(e, t, n = 56) {
  const r = Fl.find((o) => o * t >= n) || Fl[Fl.length - 1], i = [];
  for (let o = 0; o < e && i.length < ES; o += r) i.push(o);
  return i;
}
function FS(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let xs = { text: null, parsed: null };
function vn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ha(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function TS({
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
    painting: pi(null),
    painting_layer: null,
    ui_settings: ha(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Fh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function DS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function LS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function RS(e) {
  return Array.isArray(e) ? e.map((t) => wu(t)) : [];
}
function VS(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((s) => String((s == null ? void 0 : s.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Th(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = TS(n), i = String(e || "").trim();
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
      assets: DS(o.assets),
      stickers: LS(o.stickers),
      shots: RS(o.shots),
      painting: pi(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: ha(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return s && (a.ui_settings = ha({ ...a.ui_settings, ...s })), a.output_preset = Fh(
      n.outputPreset,
      Number(a.output_preset || r.output_preset)
    ), a.bg_color = String(n.backgroundColor || a.bg_color || r.bg_color), a.coverage = vn(n.coverage), delete a.editor_history, a;
  } catch {
    return xs = { text: i, parsed: null }, r;
  }
}
function $S(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function zS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), e.next_sticker_id > n.next_sticker_id && (n.next_sticker_id = e.next_sticker_id), e.id && !n.id && (n.id = e.id), { state: n, paintingChanged: r };
}
function jS(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Dh(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = zr(t.fps);
  let l;
  try {
    l = cn(e);
  } catch {
    l = cn(null);
  }
  return a && a !== l.timeline.fps && (l = qi(l, a)), {
    ...l,
    coverage: vn(i),
    bg_color: r,
    output_preset: Fh(n),
    ui_settings: ha(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function HS(e, t) {
  const n = qi(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.background, n.background], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of Xi(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Lh(e, t, n) {
  if (e.source.kind !== "port" || !((n == null ? void 0 : n.width) > 0 && (n == null ? void 0 : n.height) > 0)) return t.vFOV_deg;
  const r = Math.min(179, Math.max(0.1, t.hFOV_deg)) * ct, i = 2 * Math.atan(Math.tan(r * 0.5) * (n.height / n.width)) / ct;
  return Math.min(179, Math.max(0.1, i));
}
function Fu(e, t, n = null) {
  const r = Bn(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: Lh(e, r, n), rot_deg: r.roll_deg };
}
const GS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Of(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function KS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[GS[n]].keyframes.length));
}
function Rh(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = Of(n, ["yaw_deg", "pitch_deg"]), o = Of(n, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && Jt(e, "direction", r, i), n.rot_deg !== void 0 && Jt(e, "roll", r, n.rot_deg), Object.keys(o).length && Jt(e, "size", r, o);
}
const el = ["position_x", "position_y", "position_z"], Tu = "camera";
function Vh(e, t) {
  const n = Xa(e, t);
  return wu({
    id: Tu,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: O1(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function WS(e) {
  return cn({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Et(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function US(e) {
  return e - 360 * Math.round(e / 360);
}
function BS(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + US(n[o] - r[o]));
  Object.keys(i).length && Jt(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && Jt(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * ct * 0.5) / Math.tan(n.vFOV_deg * ct * 0.5)), n.position.some((o, s) => o !== r.position[s]) && Jt(e, "position", t, [...n.position]);
}
function YS(e, t) {
  const n = At(e, "position", t), r = At(e, "rotation", t);
  return {
    ...Object.fromEntries(el.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: At(e, "fov", t)
  };
}
function qS(e, t, n, r) {
  const i = el.indexOf(n);
  if (i >= 0) {
    const o = At(e, "position", t);
    o[i] = r, Jt(e, "position", t, o);
  } else n === "hFOV_deg" ? Jt(e, "fov", t, r) : Jt(e, "rotation", t, { [n]: r });
}
function XS(e, t, n) {
  Jt(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function JS(e, t) {
  const n = Bn(e, t);
  return {
    ...Object.fromEntries(el.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function ZS(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = el.indexOf(n);
  if (o >= 0) {
    const s = At(e, "position", i);
    s[o] = r, Jt(e, "position", i, s);
  } else n === "scale" ? Jt(e, "scale", i, r) : n === "opacity" ? Jt(e, "opacity", i, r / 100) : Jt(e, "rotation", i, { [n]: r });
}
function QS(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && Jt(e, i, r, n[i]);
}
function e_(e, t) {
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
function Po(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ga(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Go(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Du(e, t, n, r) {
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
function t_(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Et(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function $h(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function zh(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function jh(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Tf(e, t) {
  return e != null && e.__panoSceneStateV2 ? kc(cn(t)) : JSON.stringify(t);
}
const n_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function r_() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => n_[e & 63]).join("");
}
function Hh(e, t, n, r) {
  const i = Tf(e, t);
  return i_(e, i, n, r) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = r_(), Tf(e, t));
}
function i_(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = cn(n);
    if (kc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && kc(qi(i, o)) === t;
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
function o_() {
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
function Lu(e, t) {
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
function Lt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Bt(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Tl = null, Dl = null, Lf = null, Rf = null, Dt = null, no = null;
function s_() {
  if (Dl) return Dl;
  const e = 6, t = 17, n = Gt({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Dl = n, n;
}
function Ll(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Tl = Ir(Tl, n, r);
  const i = Tl;
  Lt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Rf !== i.ctx && (Lf = i.ctx.createPattern(s_(), "repeat"), Rf = i.ctx), i.ctx.fillStyle = Lf, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function a_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function l_(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function c_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function u_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Pt = /* @__PURE__ */ new Map(), Ru = 128;
function d_(e, t, n, r, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if (Pt.has(l)) {
    const G = Pt.get(l);
    return Pt.delete(l), Pt.set(l, G), G;
  }
  Pt.size >= Ru && Pt.delete(Pt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Lu(c, c), f = u.getContext("2d"), m = a * s, _ = s + 1, g = `rgba(${n},${r},${i},${o})`, v = `rgba(${n},${r},${i},0)`, y = f.createRadialGradient(d, d, m, d, d, _);
  return y.addColorStop(0, g), y.addColorStop(1, v), f.fillStyle = y, f.fillRect(0, 0, c, c), Pt.set(l, u), u;
}
function f_(e, t, n, r, i, o, s) {
  const { r: a, g: l, b: c, a: d } = r, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), m = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), v = `chisel:${u}:${f}:${n.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${m.toFixed(2)}:${_.toFixed(2)}:${g.toFixed(2)}`;
  if (Pt.has(v)) {
    const q = Pt.get(v);
    return Pt.delete(v), Pt.set(v, q), q;
  }
  Pt.size >= Ru && Pt.delete(Pt.keys().next().value);
  const y = Lu(u, f), G = y.getContext("2d"), U = G.createImageData(u, f), F = U.data, P = Math.max(0, e - t), $ = Math.max(0, Math.min(1, n)), Q = 1 + m;
  for (let q = 0; q < f; q++)
    for (let le = 0; le < u; le++) {
      const ve = le + 0.5 - e, he = q + 0.5 - t, X = Math.max(Math.abs(ve) - P, 0), fe = Math.hypot(X, he) / t;
      if (fe >= 1) continue;
      const de = fe <= $ ? 1 : Math.max(0, (1 - fe) / Math.max(1e-4, 1 - $)), te = 1 - fe, me = 1 + m * (1 - te) * (1 - te), oe = 1 - _ * te * te, I = me * oe / Q;
      let W = 1;
      if (g > 0) {
        const A = Math.floor((he + t) / 1.5), O = Math.floor((ve + e) / 8), w = si(Di(A * 41 + 500, O * 19 + 300));
        W = 1 - g * 0.42 * w;
      }
      const N = Math.round(255 * Math.min(1, d * de * I * W));
      if (N <= 0) continue;
      const ue = (q * u + le) * 4;
      F[ue] = a, F[ue + 1] = l, F[ue + 2] = c, F[ue + 3] = N;
    }
  return G.putImageData(U, 0, 0), Pt.set(v, y), y;
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
function p_(e, t, n, r, i, o, s) {
  const a = e + 0.5 - n, l = t + 0.5 - r, c = Math.max(0, n - r), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / r;
  if (u >= 1) return 0;
  const f = si(Di(e * 17 + 3, t * 13 + 7)), m = u + o * 0.22 * (f - 0.5);
  if (m >= 1) return 0;
  const _ = m <= i ? 1 : Math.max(0, (1 - m) / Math.max(1e-4, 1 - i)), g = m_(e, t, a, l, n, r), v = o * 0.55;
  if (g < v) return 0;
  const G = 0.45 + 0.55 * ((g - v) / Math.max(1e-4, 1 - v));
  return Math.round(255 * Math.min(1, s * _ * G));
}
function m_(e, t, n, r, i, o) {
  const s = Math.floor((n + i) / 3), a = Math.floor((r + o) / 2), l = si(Di(s * 13 + 700, a * 17 + 400)), c = Math.floor((n + i) / 1.5), d = Math.floor((r + o) / 1.5), u = si(Di(c * 23 + 800, d * 29 + 500)), f = si(Di(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function h_(e, t, n, r, i) {
  const { r: o, g: s, b: a, a: l } = r, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${n.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (Pt.has(f)) {
    const G = Pt.get(f);
    return Pt.delete(f), Pt.set(f, G), G;
  }
  Pt.size >= Ru && Pt.delete(Pt.keys().next().value);
  const m = Lu(c, d), _ = m.getContext("2d"), g = _.createImageData(c, d), v = g.data, y = Math.max(0, Math.min(1, n));
  for (let G = 0; G < d; G++)
    for (let U = 0; U < c; U++) {
      const F = p_(U, G, e, t, y, u, l);
      if (F <= 0) continue;
      const P = (G * c + U) * 4;
      v[P] = o, v[P + 1] = s, v[P + 2] = a, v[P + 3] = F;
    }
  return _.putImageData(g, 0, 0), Pt.set(f, m), m;
}
function Gh(e, t, n) {
  var g, v;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = c_(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = g_(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = u_(t, i), d = String(((v = t == null ? void 0 : t.targetSpace) == null ? void 0 : v.viewMode) || ""), u = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, m = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (r === "chisel") {
    const y = i * a, G = i, U = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), F = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), P = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = f_(y, G, o, s, U, F, P);
  } else if (r === "crayon") {
    const y = i * a, G = i, U = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = h_(y, G, o, s, U);
  } else
    _ = d_(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: n, aspect: a, angle: l, stampKind: r, scatter: m, latitudeCorrection: u };
}
function g_(e) {
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
function y_(e) {
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
function Vu(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = Di(t, n);
    for (let m = 0; m < d; m++) {
      const _ = si(f + m * 2) * Math.PI * 2, g = Math.sqrt(si(f + m * 2 + 1)) * u, v = t + Math.cos(_) * g, y = n + Math.sin(_) * g, G = Math.max(0.5, e.radiusPx * i * 0.48), U = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, F = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(U)) : 1, P = G * e.aspect * F;
      Vf(e, v, y, G, P);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Vf(e, t, n, o, l);
}
function $f(e, t, n) {
  const r = l_(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, s = Gh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < r.length; f++) {
    let m = Number(r[f].u || 0) * i;
    const _ = Number(r[f].v || 0) * o;
    f > 0 && Math.abs(m - a[f - 1].x) > i * 0.5 && (m += m < a[f - 1].x ? i : -i), a.push({ x: m, y: _ });
  }
  if (Vu(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const m = a[f], _ = { x: (c.x + m.x) * 0.5, y: (c.y + m.y) * 0.5 };
    f === 1 ? u = Ko(s, d.x, d.y, _.x, _.y, u) : u = ya(s, l, d, _, m, u), l = c, c = m, d = _;
  }
  a.length === 2 ? Ko(s, d.x, d.y, c.x, c.y, u) : ya(s, l, d, c, c, u), e.restore();
}
function zs(e, t, n) {
  var u;
  const r = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, s = y_(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < r.length; f++) {
    const m = a_(r[f]);
    let _ = Number(m.x || 0) * i;
    f > 0 && Math.abs(_ - a[f - 1].x) > i * 0.5 && (_ += _ < a[f - 1].x ? i : -i), a.push({ x: _, y: Number(m.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let m = 1; m < a.length; m++) e.lineTo(a[m].x + f, a[m].y);
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
  o >= 0.999 ? $f(e, t, n) : (no = Ir(no, n.width, n.height), Lt(no), $f(no.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(no.canvas, 0, 0), e.restore());
}
function Br(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ko(e, t, n, r, i, o) {
  const s = r - t, a = i - n, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Vu(e, t + s * d, n + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function ya(e, t, n, r, i, o) {
  const a = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, d = 0, u = a, f = u + l, m = f + c, _ = f - u, g = 16;
  let v = o, y = n.x, G = n.y;
  for (let U = 1; U <= g; U++) {
    const F = u + _ * U / g, P = ((u - F) * t.x + (F - d) * n.x) / (u - d), $ = ((u - F) * t.y + (F - d) * n.y) / (u - d), Q = ((f - F) * n.x + (F - u) * r.x) / (f - u), q = ((f - F) * n.y + (F - u) * r.y) / (f - u), le = ((m - F) * r.x + (F - f) * i.x) / (m - f), ve = ((m - F) * r.y + (F - f) * i.y) / (m - f), he = ((f - F) * P + (F - d) * Q) / (f - d), X = ((f - F) * $ + (F - d) * q) / (f - d), Se = ((m - F) * Q + (F - u) * le) / (m - u), fe = ((m - F) * q + (F - u) * ve) / (m - u), de = ((f - F) * he + (F - u) * Se) / (f - u), te = ((f - F) * X + (F - u) * fe) / (f - u);
    v = Ko(e, y, G, de, te, v), y = de, G = te;
  }
  return v;
}
function b_(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = n * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const m = Gh(i, r, o), _ = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), g = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), v = String((r == null ? void 0 : r.toolKind) || "") === "eraser", y = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Vu(m, c, a, 1), e.activeStroke = {
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
      strokeOpacity: _,
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
  l.pointCount === 1 ? l.distSinceStamp = Ko(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = ya(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, Bt(e);
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
  let m = null;
  function _(X) {
    return {
      actionGroupId: X,
      descriptor: r,
      committedPaint: xi(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(X) {
    let Se = i.get(X);
    return Se || (Se = _(X), i.set(X, Se)), Se;
  }
  function v(X) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function y(X) {
    var oe;
    const Se = !u || u.length !== X.length || X.some((I, W) => I !== u[W]), fe = d === "paint" && ((oe = c ? i.get(c) : a) == null ? void 0 : oe.activeStroke) || null;
    let de = s.displayDirty || a.displayDirty || Se;
    for (const I of X) {
      const W = i.get(I);
      if (W != null && W.displayDirty) {
        de = !0;
        break;
      }
    }
    if (fe && (de = !0), !de) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const I of X) {
      const W = i.get(I);
      W && (W.displayDirty = !1);
    }
    u = [...X];
    const te = l.ctx;
    Lt(l);
    const me = !!(fe != null && fe.isEraser);
    for (const I of X) {
      const W = i.get(I);
      if (!W) continue;
      const ue = c === W.actionGroupId && d === "paint" ? W.activeStroke : null;
      if (me)
        Dt = Ir(Dt, t, n), Lt(Dt), Dt.ctx.drawImage(W.committedPaint.canvas, 0, 0), Br(Dt.ctx, o.canvas), te.drawImage(Dt.canvas, 0, 0);
      else if (te.drawImage(W.committedPaint.canvas, 0, 0), ue) {
        const A = W.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ue.strokeOpacity ?? 1));
        te.save(), te.globalAlpha = A, te.drawImage(o.canvas, 0, 0), te.restore();
      }
    }
  }
  function G(X) {
    var fe, de, te, me, oe;
    for (const I of i.values())
      Lt(I.committedPaint), Lt(I.currentStroke), I.activeStroke = null, Bt(I);
    Lt(s.committedMask), Lt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), Bt(s), Bt(a), u = null;
    const Se = [
      ...Array.isArray((de = (fe = X == null ? void 0 : X.painting) == null ? void 0 : fe.paint) == null ? void 0 : de.strokes) ? X.painting.paint.strokes : [],
      ...Array.isArray((me = (te = X == null ? void 0 : X.painting) == null ? void 0 : te.mask) == null ? void 0 : me.strokes) ? X.painting.mask.strokes : []
    ];
    for (const I of Se) {
      if (((oe = I == null ? void 0 : I.targetSpace) == null ? void 0 : oe.kind) !== "ERP_GLOBAL") continue;
      const W = String((I == null ? void 0 : I.layerKind) || "paint"), ue = String((I == null ? void 0 : I.toolKind) || "pen") === "eraser";
      if (W === "mask") {
        const A = s.descriptor;
        ue ? (Dt = Ir(Dt, A.width, A.height), Lt(Dt), Ms(Dt.ctx, I, A), Br(s.committedMask.ctx, Dt.canvas)) : (Ms(s.committedMask.ctx, I, A), s.painted = !0);
        continue;
      }
      if (ue) {
        Dt = Ir(Dt, r.width, r.height), Lt(Dt), Ms(Dt.ctx, I, r);
        for (const A of i.values())
          Br(A.committedPaint.ctx, Dt.canvas), Bt(A);
      } else {
        const A = String((I == null ? void 0 : I.actionGroupId) || "__default__"), O = g(A), w = O.descriptor;
        Ms(O.committedPaint.ctx, I, w), Bt(O);
      }
    }
    y([...i.keys()]);
  }
  function U(X, Se) {
    d = String((X == null ? void 0 : X.layerKind) || "");
    const fe = String((X == null ? void 0 : X.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Lt(s.currentStroke), s.activeStroke = null, Bt(s);
    else {
      const de = fe ? a : g(String((X == null ? void 0 : X.actionGroupId) || "__default__"));
      c = fe ? "" : String((X == null ? void 0 : X.actionGroupId) || "__default__"), Lt(de.currentStroke), de.activeStroke = null, Bt(de);
    }
  }
  function F(X, Se) {
    var W;
    const fe = String((X == null ? void 0 : X.layerKind) || "paint"), de = String((X == null ? void 0 : X.toolKind) || "") === "eraser", te = fe === "mask" ? s : de ? a : g(String((X == null ? void 0 : X.actionGroupId) || c || "__default__")), me = te.activeStroke, oe = te.descriptor;
    if (me && me.pointCount > 1) {
      const N = te.currentStroke.ctx;
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
      me.pointCount === 2 ? Ko(ue, me.lastMidX, me.lastMidY, me.prev.x, me.prev.y, me.distSinceStamp) : ya(ue, me.pprev, { x: me.lastMidX, y: me.lastMidY }, me.prev, me.prev, me.distSinceStamp);
    }
    te.lassoPreviewActive && (Lt(te.currentStroke), zs(te.currentStroke.ctx, X, oe), te.lassoPreviewActive = !1);
    const I = fe === "mask" ? s.committedMask : te.committedPaint;
    if (de && fe === "paint")
      for (const N of i.values())
        Br(N.committedPaint.ctx, te.currentStroke.canvas), Bt(N);
    else if (de)
      Br(I.ctx, te.currentStroke.canvas);
    else {
      fe === "mask" && (s.painted = !0);
      const N = Math.max(0, Math.min(1, (me == null ? void 0 : me.strokeOpacity) ?? 1));
      I.ctx.save(), I.ctx.globalAlpha = N, I.ctx.drawImage(te.currentStroke.canvas, 0, 0), I.ctx.restore();
    }
    o_() && (String((X == null ? void 0 : X.toolKind) || ""), String((oe == null ? void 0 : oe.kind) || ""), Number((oe == null ? void 0 : oe.width) || 0), Number((oe == null ? void 0 : oe.height) || 0), String(((W = X == null ? void 0 : X.targetSpace) == null ? void 0 : W.viewMode) || ""), Number((X == null ? void 0 : X.aspect) ?? 1), Df(te.currentStroke.canvas), Df(I.canvas), void 0), Lt(te.currentStroke), te.activeStroke = null, Bt(te), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function P(X) {
    if (d === "mask")
      Lt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, Bt(s);
    else if (d === "paint" && !c)
      Lt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, Bt(a);
    else if (c) {
      const Se = i.get(c);
      Se && (Lt(Se.currentStroke), Se.activeStroke = null, Se.lassoPreviewActive = !1, Bt(Se));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function $(X, Se) {
    var de;
    if (d = String((X == null ? void 0 : X.layerKind) || ""), String(((de = X == null ? void 0 : X.geometry) == null ? void 0 : de.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Lt(s.currentStroke), zs(s.currentStroke.ctx, X, s.descriptor), s.lassoPreviewActive = !0, Bt(s);
      else {
        const te = String((X == null ? void 0 : X.toolKind) || "") === "eraser", me = te ? a : g(String((X == null ? void 0 : X.actionGroupId) || c || "__default__"));
        c = te ? "" : String((X == null ? void 0 : X.actionGroupId) || c || "__default__"), Lt(me.currentStroke), zs(me.currentStroke.ctx, X, me.descriptor), me.lassoPreviewActive = !0, Bt(me);
      }
      y([...i.keys()]);
    }
  }
  function Q(X) {
    return y(X ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: r
    };
  }
  function q(X) {
    return i.get(String(X)) ?? null;
  }
  function le(X) {
    var N;
    const Se = i.get(String(X));
    if (!Se) return null;
    const fe = d === "paint" && c === Se.actionGroupId, de = d === "paint" && ((N = c ? i.get(c) : a) == null ? void 0 : N.activeStroke) || null, te = !!(de != null && de.isEraser), me = fe ? Se.activeStroke : null;
    if (!te && !me) return Se.committedPaint.canvas;
    const oe = `${Se.revision}:${a.revision}:${te}`, I = f.get(Se.actionGroupId);
    if ((I == null ? void 0 : I.key) === oe) return I.surface.canvas;
    const W = Ir((I == null ? void 0 : I.surface) ?? null, t, n);
    return Lt(W), W.ctx.drawImage(Se.committedPaint.canvas, 0, 0), te ? Br(W.ctx, o.canvas) : (W.ctx.save(), W.ctx.globalAlpha = Se.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, me.strokeOpacity ?? 1)), W.ctx.drawImage(o.canvas, 0, 0), W.ctx.restore()), f.set(Se.actionGroupId, { key: oe, surface: W }), W.canvas;
  }
  function ve() {
    const X = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!X || X.isEraser) ? null : `${s.revision}:${!!X}`;
  }
  function he() {
    const X = ve();
    if (X === null)
      return m = null, null;
    if ((m == null ? void 0 : m.key) === X) return m.surface.canvas;
    const Se = Ir((m == null ? void 0 : m.surface) ?? null, t, n);
    Lt(Se);
    const fe = d === "mask" ? s.activeStroke : null;
    return fe != null && fe.isEraser ? (Dt = Ir(Dt, t, n), Lt(Dt), Dt.ctx.drawImage(s.committedMask.canvas, 0, 0), Br(Dt.ctx, o.canvas), Ll(Se.ctx, Dt.canvas)) : (Ll(Se.ctx, s.committedMask.canvas), fe && Ll(Se.ctx, o.canvas)), m = { key: X, surface: Se }, Se.canvas;
  }
  return {
    rebuildCommitted: G,
    beginStroke: U,
    appendStrokePoint: b_,
    updateActiveStroke: $,
    commitActiveStroke: F,
    cancelActiveStroke: P,
    getErpTarget: Q,
    ensureTarget: v,
    getGroupTarget: q,
    getGroupDisplayCanvas: le,
    getMaskDisplayCanvas: he,
    getMaskDisplayRevision: ve
  };
}
function $u(e, { group: t, raster: n, mask: r = () => null }) {
  if (e.painting_visible === !1) return [];
  const { groups: i, paint: o, raster_objects: s } = e.painting, a = new Set(i.map(Rl)), l = [
    ...i.map((m) => ({ id: `paint_group:${Rl(m)}`, zIndex: Vl(m), shown: () => t(Rl(m)) })),
    ...s.filter((m) => m.layerKind === "paint").map((m) => ({ id: `raster:${m.id}`, zIndex: Vl(m), shown: () => n(m) }))
  ].sort((m, _) => m.zIndex - _.zIndex), c = [], d = (m, _, g) => {
    g && c.push({ id: m, media: g.media, revision: g.revision, opacity: 1, zIndex: _ });
  };
  for (const m of l) d(m.id, m.zIndex, m.shown());
  const u = Math.max(-1, ...c.map((m) => m.zIndex), ...e.stickers.map(Vl)) + 1, f = new Set(o.strokes.map((m) => m.actionGroupId).filter((m) => !a.has(m)));
  for (const m of f) d(`paint_group:${m}`, u, t(m));
  return d("mask_display", u, r()), c;
}
function Kh(e) {
  const t = (e == null ? void 0 : e.getMaskDisplayCanvas()) ?? null;
  return t && { media: t, revision: `mask_display:${e.getMaskDisplayRevision()}` };
}
function Rl(e) {
  return String(e.actionGroupId || e.id || "");
}
function Vl(e) {
  return Math.trunc(Number(e.z_index) || 0);
}
function An(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function v_(e, t = 1024) {
  const n = Math.max(1, Math.round(An(e, 2048))), r = Math.min(n, Math.max(1, Math.round(An(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function S_(e, t, n) {
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
function __(e, t, n) {
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
function w_() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = S_(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = __(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, m = t.get(f);
    if ((m == null ? void 0 : m.revision) === u) return { source: m.source, revision: u };
    const _ = r(c, l), g = Number(_.naturalWidth || _.width || 0), v = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || g < 1 || v < 1) return null;
    const y = Gt({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const G = y.getContext("2d");
    return G ? (d.wrapOffsets.forEach((U) => {
      G.save(), G.translate(d.centerX + U, d.centerY), G.rotate(d.rotationRad), G.scale(d.scale, d.scale), G.drawImage(
        _,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), G.restore();
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
function k_(e, t, n = tl) {
  var l;
  const r = { ...t, painting: x_(e, t.painting) }, i = v_(t.output_preset), o = [];
  let s = null;
  const a = $u(r, {
    group: (c) => {
      s ?? (s = M_(e, r, n));
      const d = s == null ? void 0 : s.getGroupDisplayCanvas(c);
      return d && { media: d, revision: `${e.paintRevisionKey}:${c}` };
    },
    raster: (c) => {
      e.rasterCache ?? (e.rasterCache = w_()), e.rasterReady ?? (e.rasterReady = () => {
        var u, f;
        return (f = (u = e.dom) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
      }), o.push(c.id);
      const d = e.rasterCache.get(c, i.width, i.height, e.rasterReady);
      return d && { media: d.source, revision: d.revision };
    }
  });
  return (l = e.rasterCache) == null || l.retain(o), a;
}
function x_(e, t) {
  return (!e.paintState || e.paintState.painting !== t) && (e.paintState = { painting: t, normalized: pi(t) }), e.paintState.normalized;
}
function M_(e, t, n) {
  const { painting: r } = t;
  if (!r.paint.strokes.length && !r.mask.strokes.length) return null;
  const i = Math.max(1, Number(t.output_preset || 2048)), o = { kind: "ERP_GLOBAL", width: i, height: Math.max(1, Math.round(i * 0.5)) }, s = `${o.width}x${o.height}`;
  return (!e.paintEngine || e.paintDescriptorKey !== s) && (e.paintEngine = n(o), e.paintDescriptorKey = s, e.paintRevision = null), e.paintRevision !== r && (e.paintRevision = r, e.paintRevisionKey = String((Number(e.paintRevisionKey) || 0) + 1), e.paintEngine.rebuildCommitted(t)), e.paintEngine;
}
const $l = 0.15, P_ = 0.01, N_ = 1e-3, A_ = 0.05, C_ = 4, zf = 250, I_ = 16, Wn = 1, Wh = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Sn(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function ir(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function as(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function gi(e, t, n = 0) {
  const r = en(e, t, n), i = ir(r, 2);
  return { right: ir(r, 0), up: ir(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function E_(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function Mc(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function O_(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Mc(e, "3dof", n);
}
function F_(e) {
  return gi(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function T_(e) {
  return Sn(e.position, gi(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Gr(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function No(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function zu(e, t) {
  return No(Gr(t, e.position), gi(e.yaw_deg, e.pitch_deg).forward);
}
function ju(e) {
  return Math.max(e, 1e-6) * A_;
}
function Pc(e, t, n = null, r = Wn) {
  if (t) return t;
  const i = ju(r);
  if (n && zu(e, n) > 0) {
    const o = Gr(n, e.position), s = Math.hypot(...o);
    return s >= i ? n : Sn(e.position, o, i / s);
  }
  return Sn(e.position, gi(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Uh(e, t = Wn) {
  return Math.max(e.distance, ju(t));
}
function Bh(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > C_ ? !1 : t.time - e.time < zf || e.cost > I_ && t.time - e.wheelTime < zf;
}
function Hu(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * ct);
  return { tanX: r, tanY: r * n / t };
}
function Yh(e, t, n) {
  const { tanX: r, tanY: i } = Hu(e, t, n);
  return 2 * Math.atan(Math.min(r, i)) * It;
}
const kr = 100, D_ = 1.1, L_ = 0.1, R_ = 2 * Math.atan(Math.tan(kr * 0.5 * ct) * 9 / 16) * It;
function V_(e) {
  return Number.isFinite(e) && e > 0 ? e : R_;
}
function qh(e, t) {
  return e / Math.sin(V_(t) * 0.5 * ct) * D_;
}
function $_(e) {
  const t = (i) => Array.isArray(i) && i.length === 3 && i.every((o) => typeof o == "number" && Number.isFinite(o));
  if (!e || typeof e != "object" || !t(e.min) || !t(e.max) || e.min.some((i, o) => i > e.max[o])) return null;
  const n = e.min.map((i, o) => (i + e.max[o]) / 2), r = Math.hypot(...e.max.map((i, o) => i - e.min[o])) / 2;
  return { center: n, radius: r };
}
function Xh(e, t, n, r, i, o) {
  const s = Math.hypot(...t), a = t.map((f) => f / s), l = n && n.center.every(Number.isFinite) && Number.isFinite(n.radius) && n.radius >= 0, c = l ? n.center : [0, 0, 0], d = l ? Math.max(qh(n.radius, i), o) : sg, u = as(en(r.yaw_deg, r.pitch_deg, r.roll_deg), c);
  return Sn(e, a, d).map((f, m) => f - u[m]);
}
function Jh(e, t, n, r, i = T_(e)) {
  const o = e.roll_deg ?? 0, [s, a] = z_(t, n, o), l = Et(e.yaw_deg + s / r * 360), c = Fe(e.pitch_deg - a / r * 360, -89.9, 89.9), d = en(e.yaw_deg, e.pitch_deg, o), u = en(l, c, o), f = Gr(e.position, i), m = [0, 1, 2].map((g) => No(ir(d, g), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: Sn(i, as(u, m)) };
  return { ..._, distance: zu(_, i) };
}
function z_(e, t, n) {
  const r = Math.cos(n * ct), i = Math.sin(n * ct);
  return [e * r + t * i, t * r - e * i];
}
function Zh(e, t, n, r, i, o = e.distance) {
  const { right: s, up: a } = F_(e), l = 2 * o * Hu(e, r, i).tanY / i;
  return { ...e, position: Sn(Sn(e.position, s, -t * l), a, n * l), distance: o };
}
function Qh(e, t, n, r = Wn) {
  const i = Gr(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const s = Math.max(r, 1e-6), a = s * P_, l = n > 0 ? Math.min(Math.max(o * $l, a), o - s * N_) : -Math.max(o * $l / (1 - $l), a);
  if (n > 0 && l <= 0) return e;
  const c = { ...e, position: Sn(e.position, i, l / o) };
  return { ...c, distance: Math.max(zu(c, t), ju(r)) };
}
function j_(e, t, n, r) {
  const i = qh(Math.max(t.radius, 1e-6), Yh(e, n, r)), { forward: o } = gi(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Sn(t.center, o, -i), distance: i };
}
function Gu(e, t, n, r = null) {
  return eg({
    quaternion: $r(en(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Hu(e, t, n).tanY) * It,
    aspect: t / n
  }, e.position, e.distance, r);
}
function eg(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: Wn }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Wo(e, t, n, r) {
  const { right: i, up: o, forward: s } = tg(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * ct), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: n * 0.5 * (1 + u / l / d), y: r * 0.5 * (1 - f / l / c), z: l };
}
function tg(e) {
  const t = Vo(e.quaternion), n = ir(t, 2);
  return { right: ir(t, 0), up: ir(t, 1), forward: n.map((r) => -r) };
}
function H_(e) {
  return `views:${JSON.stringify(e)}`;
}
function ba(e, t, n) {
  var s;
  const r = (s = t[0]) == null ? void 0 : s.kind;
  if (!e.length || r !== "splat" && r !== "mesh") return null;
  const i = {}, o = e.map((a) => {
    if (!Array.isArray(a)) return a ? n(a) : null;
    const l = a.filter(Boolean).map(n);
    if (!l.length) return null;
    const c = H_(l);
    return i[c] = l, c;
  });
  return { kind: r, unlit: r !== "mesh" || t[0].unlit !== !1, urls: o, sources: i };
}
function G_({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Ku(e, t) {
  if (!e || !t.active) return null;
  const n = K_(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: va(t),
    itemQuaternion: e.kind === "splat" ? Wh : { x: 0, y: 0, z: 0, w: 1 },
    unlit: e.unlit !== !1,
    // Where an item of several views loads from (sceneFilesOf).
    sources: e.sources ?? {}
  };
}
function ng(e, t, n) {
  const r = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], s = Ku(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function rg(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function ig(e, t) {
  return `file3d:${t}:${e}`;
}
function og(e, t, n) {
  const r = [];
  return e.stickers.forEach((i, o) => {
    if (i.placement !== "world" || !oi(i.source)) return;
    const s = n(i);
    if (!s) return;
    const a = ig(i.id, s.generation), l = t.stickers[o], c = l.active ? {
      kind: s.kind,
      unlit: s.unlit !== !1,
      url: a,
      urls: [a],
      prefetch: [],
      src: s.url,
      transform: va(l),
      itemQuaternion: s.kind === "splat" ? Wh : { x: 0, y: 0, z: 0, w: 1 },
      id: i.id,
      opacity: l.opacity,
      value: l
    } : null;
    r.push({ id: i.id, key: a, request: c });
  }), r;
}
function K_(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function va(e) {
  return {
    position: [...e.position],
    quaternion: $r(en(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Nc(e, t) {
  return Sn(e.position, as(en(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function co(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Ac({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function Cc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), r = t.map((o, s) => (o + n[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function W_(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...Ac(t).map((o) => Nc(e.scene, o)));
  for (const o of n) i.push(...Wu(o));
  for (const { box: o, value: s } of r) i.push(...Ac(o).map((a) => Nc(s, a)));
  return i;
}
function U_(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: $r(en(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: en(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Wu(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => Sn(e.position, as(e.rotation, [r, i, 0])));
}
function B_(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? Cc(Wu(i)) : o != null && o.box ? Cc(Ac(co(o.kind, o.box)).map((s) => Nc(r, s))) : { center: [...r.position], radius: r.scale };
}
const sg = 2, Y_ = 0.5, q_ = 30;
function ag(e, t) {
  const n = Gr(t, e), r = Math.atan2(n[0], -n[2]) * It, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * It;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function X_(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * Y_ : sg, o = t ? [...t] : Sn(e.position, gi(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...Gr(o, e.position)), a = s > 0 ? ag(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(q_ * 0.5 * ct);
  return { position: o, rotation: a, scale: l };
}
function J_(e, t) {
  const r = Math.hypot(t[0], t[2]) > 1e-9 ? Math.atan2(t[0], -t[2]) * It + 0 : e.yaw_deg;
  return { position: Xh(e.position, t, null, { yaw_deg: r, pitch_deg: 0, roll_deg: 0 }, 0, 0), rotation: { yaw_deg: r, pitch_deg: 0, roll_deg: 0 }, scale: 1 };
}
function jf(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function Z_(e) {
  return [0, 1, 2].map((t) => ir(e, t));
}
function Hf(e, t, n, r) {
  if (e === "translate") return { position: Sn(t.position, Gr(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * rw(n.scale, r.scale) / n.scale };
  const i = jf(Vo(r.quaternion), Z_(Vo(n.quaternion))), o = jf(i, en(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = th(o);
  return Math.abs(a) <= Q_ ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: ew(o, t.yaw_deg) } };
}
const Q_ = 89.9;
function ew(e, t) {
  const n = ir(e, 0), r = ir(e, 1), i = Math.cos(t * ct), o = Math.sin(t * ct);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * It + 0;
}
const tw = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function nw(e, t, n, r, i) {
  if (!Wo(e, t, r, i)) return null;
  const { right: o, up: s, forward: a } = tg(e), l = Gr(t, e.position), c = No(l, o), d = No(l, s), u = No(l, a), f = Math.tan(e.fovY_deg * 0.5 * ct), m = f * e.aspect, _ = Math.hypot(c, d, u) * tw[n] * Math.min(1.9 * f, 7) / 4;
  if (!(u > _)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const g = (F) => {
    const P = _ * Math.sqrt(F * F + u * u - _ * _);
    return [(F * u - P) / (u * u - _ * _), (F * u + P) / (u * u - _ * _)];
  }, [v, y] = g(c), [G, U] = g(d);
  return {
    minX: r * 0.5 * (1 + v / m),
    maxX: r * 0.5 * (1 + y / m),
    minY: i * 0.5 * (1 - U / f),
    maxY: i * 0.5 * (1 - G / f)
  };
}
function rw(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function iw(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function lg(e, t) {
  const n = en(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * ct) * t, i = r / e.aspect, o = (c, d, u) => Sn(e.position, as(n, [c, d, u])), s = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function ow(e, t, n, r, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Wo(e, s, r, i), c = Wo(e, a, r, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Fe(((n.x - l.x) * d + (n.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - n.x, l.y + u * f - n.y) <= o;
  });
}
function sw(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function aw(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [At(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return At(r, "position", l);
  });
}
function lw(e, t, n, r, i) {
  const o = Math.max(0, e) * n, s = Math.max(0, t) * n, a = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const cg = 0.28;
function ug(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * ct);
  return {
    quaternion: $r(en(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * It,
    aspect: r
  };
}
function Ao(e) {
  const t = Vr(e);
  return {
    quaternion: $r(en(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function dg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = _u(n, r), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * It,
      vFOV_deg: 2 * Math.atan(o / r) * It
    }
  };
}
function cw(e, t, n, r) {
  const i = t ?? { x: n / 2, y: r / 2 }, { x: o, y: s, z: a } = eh(Uu(e, n, r).ray(i.x, i.y));
  return [o, s, a];
}
function Uu(e, t, n) {
  const [[r, i, o], [s, a, l], [c, d, u]] = Vo(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * ct), m = f * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, g = 1e-4) {
      const v = eh(_), y = r * v.x + s * v.y + c * v.z, G = i * v.x + a * v.y + d * v.z, U = -(o * v.x + l * v.y + u * v.z), F = Math.max(U, g);
      return {
        x: t * 0.5 * (1 + y / F / m),
        y: n * 0.5 * (1 - G / F / f),
        z: U
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, g) {
      const v = (_ / t * 2 - 1) * m, y = (1 - g / n * 2) * f;
      return bu(Vs({
        x: r * v + i * y - o,
        y: s * v + a * y - l,
        z: c * v + d * y - u
      }));
    }
  };
}
function fg(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = os(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky" || oi(a.source)) return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = n(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * ct), m = Math.tan(Lh(a, c, mg(u.media)) * 0.5 * ct), { crop: _ } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? cg : c.opacity,
      zIndex: r(a),
      quaternion: $r(en(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * f,
        x1: (2 * _.x1 - 1) * f,
        y0: (1 - 2 * _.y1) * m,
        y1: (1 - 2 * _.y0) * m
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function pg(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return fg(e, t, {
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
function hg(e, t, n, { media: r, evaluated: i = os(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active || oi(a.source)) return;
    const d = o.get(a.id), u = d ? r(d) : null;
    if (!u) return;
    const { width: f, height: m } = mg(u.media), _ = U_(c, a.crop, f, m);
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
function uw({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-CbsvJvY9.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Um(a.createThreeView({ onUpdate: r, onSplats: i, createCanvas: () => e }), "editor");
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
    pick(g, v, y, G, U) {
      return l && !f.lost ? l.pick(g, v, y, G, U) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, v, y, G, U) {
      return l && !f.lost ? l.pickSurface(g, v, y, G, U) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, v, y, G, U) {
      return l && !f.lost ? l.pickSticker(g, v, y, G, U) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, v, y, G, U, F) {
      return l && !f.lost ? l.gizmoPointer(g, v, y, G, U, F) : null;
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
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", _), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, n();
  }), f;
}
const gg = "3D view unavailable. Check the browser console.";
function Sa(e, t, n) {
  return ug({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function dw(e) {
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
const yg = dw(
  () => import("./.lazy/pano_three_view-CbsvJvY9.js").then((e) => e.$).then((e) => Um(e.createThreeView({ createCanvas: () => Gt({ label: "three.node" }) }), "node"))
), Tn = ["erp_image", "bg_erp", "bg_media"], Bu = ["sticker_image", "sticker"], bg = ["scene"], Yu = ["sticker", "sticker_state"], fw = {
  background: Tn,
  "external-sticker": Bu,
  scene: bg,
  "sticker-handoff": Yu
};
function vg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Li(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = vg(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function Co(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Gf(e, t) {
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
function Sg(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((a) => String(a == null ? void 0 : a.id) === n[o]);
    if (!s || o === n.length - 1) return { graph: r, entry: s };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function pw(e, t) {
  const { graph: n, entry: r } = Sg(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const a = vg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const _g = [...Tn, ...Bu, ...bg, ...Yu], mw = 256, Mi = /* @__PURE__ */ new Map(), zl = /* @__PURE__ */ new WeakMap();
let wg = () => null;
function kg(e) {
  return zl.has(e) || zl.set(e, JSON.stringify(e)), zl.get(e);
}
function hw(e) {
  wg = e;
}
function _a(e, t) {
  const n = kg(e);
  Mi.delete(n), Mi.set(n, t), Mi.size > mw && Mi.delete(Mi.keys().next().value);
}
function bt(e, t) {
  var o;
  const n = e ? wg(e) : null;
  if (!n) return !0;
  const r = Li(e);
  let i = Mi.get(kg(n));
  if (i)
    _a(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => _g.includes(s == null ? void 0 : s.name)))) return !0;
    _a(n, r), i = r;
  }
  return fw[t].every((s) => i[s] === r[s]);
}
const wa = /* @__PURE__ */ new WeakSet();
async function Ic(e, t) {
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
function xg(e, t) {
  var o, s, a, l, c;
  const n = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: r } = Sg(n, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = r == null ? void 0 : r.inputs) != null && c.some((d) => _g.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: pw(n, t) };
}
const js = /* @__PURE__ */ new Map();
function gw(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && js.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await Ic(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = xg(i, o);
        s && _a(s.output, s.inputs);
      }
    });
}
const yw = 5;
function bw(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${yw}`, r = Ic(e, `/jobs?${n}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, Ic(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: m } of await r) {
        if (!a()) return null;
        const _ = await o(m);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (u = (d = _.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : xg(_, l);
      }
      return null;
    }
  };
}
function vw(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let vi = null;
async function Sw(e, t, n) {
  var a;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || wa.has(n) || (a = js.get(i)) != null && a.has(r) || vw(t)) return null;
  (vi == null ? void 0 : vi.workflowId) !== i && (vi = { workflowId: i, history: bw(n, i) }, queueMicrotask(() => {
    vi = null;
  }));
  const s = await vi.history.lastNodeOutput(e, o);
  return o() ? s ? (_a(s.output, s.inputs), t.nodeOutputs[r] = s.output, s.output) : (wa.has(n) || js.set(i, (js.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Kf(e, t, n, r = Tn) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((s == null ? void 0 : s.name) || ""));
}
const Wf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Hs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Wf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Wf.test(String((e == null ? void 0 : e.filename) || ""));
}
const jl = /* @__PURE__ */ new WeakMap();
function _w(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Ec(e) {
  return _w(e) ? (jl.has(e) || jl.set(e, Math.random().toString(36).slice(2, 10)), jl.get(e)) : "run";
}
function Mg(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function ww(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = n(o, a);
      (l == null ? void 0 : l.id) == null || r.has(String(l.id)) || (r.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), r;
}
function qu(e, t = [], n = null) {
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
function kw({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = rs(e, "looping-preview");
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
  const _ = () => {
    m = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", c, { once: !0 }), r.addEventListener("loadeddata", c, { once: !0 }), a || r.addEventListener("timeupdate", d), r.addEventListener("play", u), r.addEventListener("pause", f), r.addEventListener("error", _), r.src = t, r.load();
  const g = () => {
    o || m || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, v = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var G, U;
      o || (o = !0, s && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(s), s = 0), r.removeEventListener("loadedmetadata", c), r.removeEventListener("loadeddata", c), r.removeEventListener("timeupdate", d), r.removeEventListener("play", u), r.removeEventListener("pause", f), r.removeEventListener("error", _), r.pause(), (G = r.removeAttribute) == null || G.call(r, "src"), (U = r.load) == null || U.call(r));
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
const Uo = /* @__PURE__ */ new WeakMap(), Pg = {
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
  let n = Uo.get(e);
  return n || (n = {}, Uo.set(e, n)), n[t] ?? (n[t] = Pg[t]());
}
function cs(e, t) {
  var n;
  return e && typeof e == "object" && ((n = Uo.get(e)) == null ? void 0 : n[t]) || null;
}
const Bo = (e) => ls(e, "editorSession"), lt = (e) => ls(e, "nodeSurface"), yr = (e) => ls(e, "previewNode"), un = (e) => ls(e, "mediaCache"), Pn = (e) => ls(e, "stateSync"), xw = (e) => cs(e, "editorSession"), Oc = (e) => cs(e, "nodeSurface"), Ng = (e) => cs(e, "previewNode"), Hl = (e) => {
  var t;
  return ((t = cs(e, "editorSession")) == null ? void 0 : t.open) === !0;
};
function Gl(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const Mw = {
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
      Gl(o == null ? void 0 : o.img), Gl(o == null ? void 0 : o.pendingImg);
    }), (r = (n = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : n.destroy) == null || r.call(n), Gl((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function Pw(e, t) {
  const n = cs(e, t);
  if (n)
    try {
      Mw[t](n);
    } finally {
      delete Uo.get(e)[t];
    }
}
function Nw(e) {
  for (const t of Object.keys(Pg))
    try {
      Pw(e, t);
    } catch (n) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, n);
    }
  e && typeof e == "object" && Uo.delete(e);
}
function Yr(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function Aw(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Uf(e, t, n = null) {
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
  return !r && n != null && (r = Aw(e == null ? void 0 : e.graph, n)), r;
}
function Cw(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Iw(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function Ew(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Ag({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (P) => {
    if (!P) return "";
    if (typeof P == "string") return String(P || "").trim();
    if (Array.isArray(P)) {
      if (P.length === 0) return "";
      if (P.length === 1) return i(P[0]);
      const $ = String(P[0] || "").trim();
      if ($)
        return Yr(t, {
          filename: $,
          subfolder: String(P[1] || "").trim(),
          type: String(P[2] || "output").trim() || "output"
        });
      for (const Q of P) {
        const q = i(Q);
        if (q) return q;
      }
      return "";
    }
    return typeof (P == null ? void 0 : P.src) == "string" && P.src ? P.src : typeof (P == null ? void 0 : P.url) == "string" && P.url ? P.url : Yr(t, P);
  }, o = (P) => {
    if (!P || typeof P != "object") return "";
    const $ = String(P.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(P.value || "");
    if ($ !== "comfy_image") return "";
    const Q = String(P.filename || "").trim();
    return Q ? Yr(t, {
      filename: Q,
      subfolder: String(P.subfolder || ""),
      type: String(P.storage || "input")
    }) : "";
  }, s = (P) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || P == null) return null;
    const Q = String(P);
    return $ instanceof Map ? $.get(P) || $.get(Q) || $.get(Number(Q)) || null : $[P] || $[Q] || null;
  }, a = (P, $) => {
    var q;
    const Q = s(P == null ? void 0 : P.id);
    return Array.isArray((q = Q == null ? void 0 : Q.ui) == null ? void 0 : q[$]) ? Q.ui[$] : Array.isArray(Q == null ? void 0 : Q[$]) ? Q[$] : [];
  }, l = (P, $) => {
    const Q = s(P == null ? void 0 : P.id);
    return Q != null && Q.ui && Object.prototype.hasOwnProperty.call(Q.ui, $) ? Q.ui[$] : Q && Object.prototype.hasOwnProperty.call(Q, $) ? Q[$] : null;
  }, c = (P, $) => {
    const Q = l(P, "pano_sticker_input_state_hash"), q = Array.isArray(Q) ? Q[0] : Q;
    return String(q ?? "").trim() || Ew($);
  }, d = (P) => {
    const $ = [], Q = /* @__PURE__ */ new Set();
    for (const q of P || []) {
      const le = i(q);
      !le || Q.has(le) || (Q.add(le), $.push(le));
    }
    return $;
  }, u = (P, $) => {
    var le;
    const Q = [];
    Array.isArray(P == null ? void 0 : P.images) && P.images.length && Q.push(P.images), Array.isArray((le = P == null ? void 0 : P.ui) == null ? void 0 : le.images) && P.ui.images.length && Q.push(P.ui.images);
    const q = [];
    for (const ve of Q)
      $ >= 0 && $ < ve.length && q.push(ve[$]), q.push(...ve);
    return q;
  }, f = (P, $) => {
    var I;
    const Q = String($ || "").trim();
    if (!Q) return { src: "", sourceType: "", inputName: "" };
    const le = (Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : []).findIndex((W) => String((W == null ? void 0 : W.name) || "") === Q);
    if (le < 0) return { src: "", sourceType: "", inputName: Q };
    const ve = P.graph ? P.getInputLink(le) : null;
    if ((ve == null ? void 0 : ve.origin_id) == null) return { src: "", sourceType: "", inputName: Q };
    const he = ve.origin_id, X = Uf(P, le, he);
    if (!X) return { src: "", sourceType: "", inputName: Q };
    const Se = Number(ve.origin_slot ?? 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(X) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const W = [];
      Se >= 0 && Se < fe.length && W.push(fe[Se]), W.push(...fe);
      const N = d(W.filter((ue) => !Hs(ue)));
      if (N.length)
        return { src: N[0], srcCandidates: N, sourceType: "appNodeImageUrls", inputName: Q };
    }
    const de = s((X == null ? void 0 : X.id) ?? he), te = d(u(de, Se).filter((W) => !Hs(W))).map((W) => `${W}&pano_src=${Ec(de)}`);
    if (te.length)
      return { src: te[0], srcCandidates: te, sourceType: "nodeOutputs", inputName: Q };
    const me = Array.isArray(X == null ? void 0 : X.imgs) ? X.imgs : [];
    if (me.length) {
      const W = [];
      Se >= 0 && Se < me.length && W.push(me[Se]), W.push(...me);
      const N = d(W);
      if (N.length)
        return { src: N[0], srcCandidates: N, sourceType: "nodeImgs", inputName: Q };
    }
    const oe = (I = X == null ? void 0 : X.widgets) == null ? void 0 : I.find((W) => String((W == null ? void 0 : W.name) || "").toLowerCase() === "image");
    if (oe) {
      let W = i(oe.value);
      if (W && !W.includes("/") && !W.includes(":") && (X.comfyClass === "LoadImage" || X.type === "LoadImage") && (W = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`), W) return { src: W, sourceType: "widget", inputName: Q };
    }
    return { src: "", sourceType: "", inputName: Q };
  }, m = (P, $ = []) => {
    var q;
    const Q = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : [];
    for (const le of $) {
      const ve = Q.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === le), he = ve >= 0 && P.graph ? P.getInputLink(ve) : null;
      if ((he == null ? void 0 : he.origin_id) == null) continue;
      const X = s(((q = Uf(P, ve, he.origin_id)) == null ? void 0 : q.id) ?? he.origin_id), Se = (Array.isArray(X == null ? void 0 : X.images) ? X.images : []).find(Hs);
      return Se ? `${Yr(t, Se)}&pano_src=${Ec(X)}` : "";
    }
    return "";
  }, _ = (P, $ = []) => {
    const Q = Array.isArray($) ? $ : [$];
    for (const q of Q) {
      const le = f(P, q);
      if (String((le == null ? void 0 : le.src) || "").trim()) return le;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (P) => {
    const $ = String(P || "").trim();
    if (!$) return [];
    if (Cw($)) return [$];
    const { filename: Q, subfolder: q } = Iw($);
    return Q ? d([
      Yr(t, { filename: Q, subfolder: q, type: "temp" }),
      Yr(t, { filename: Q, subfolder: q, type: "output" }),
      Yr(t, { filename: Q, subfolder: q, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (P) => {
      var $;
      try {
        ($ = un(P)) == null || $.linkedImages.forEach((Q, q, le) => {
          var ve;
          Q != null && Q.img && ((ve = r == null ? void 0 : r.isImageLoadFailed) != null && ve.call(r, Q.img)) && le.delete(q);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (P, $) => {
      var Q;
      (Q = P == null ? void 0 : P.delete) == null || Q.call(P, `__ui__${String($ || "")}`);
    },
    linkedValue: (P, $) => {
      var he, X, Se, fe;
      const Q = String($ || ""), q = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs.findIndex((de) => String((de == null ? void 0 : de.name) || "") === Q) : -1, le = q >= 0 && P.graph ? P.getInputLink(q) : null;
      if (le) {
        const de = s(le.origin_id), te = [
          de == null ? void 0 : de.output,
          de == null ? void 0 : de.result,
          (he = de == null ? void 0 : de.data) == null ? void 0 : he.output,
          (X = de == null ? void 0 : de.data) == null ? void 0 : X.result,
          (Se = de == null ? void 0 : de.ui) == null ? void 0 : Se.output,
          (fe = de == null ? void 0 : de.ui) == null ? void 0 : fe.result
        ];
        for (const me of te) {
          if (!Array.isArray(me)) continue;
          const oe = me[Number(le.origin_slot || 0)];
          if (typeof oe == "string" && oe.trim()) return oe;
        }
      }
      const ve = Array.isArray(P == null ? void 0 : P.widgets) ? P.widgets.find((de) => String((de == null ? void 0 : de.name) || "") === Q) : null;
      return String((ve == null ? void 0 : ve.value) || "");
    },
    linkedVideoFile: m,
    loadPreferredExactLinkedImage: (P, $ = [], Q = null, q = "") => {
      var O;
      const le = Array.isArray($) ? $ : [$], ve = _(P, le), X = (Array.isArray(ve == null ? void 0 : ve.srcCandidates) && ve.srcCandidates.length ? ve.srcCandidates : [ve == null ? void 0 : ve.src]).map((w) => String(w || "").trim()).filter(Boolean);
      if (!X.length) return null;
      const Se = d(X.flatMap((w) => g(w)));
      if (!Se.length) return null;
      const fe = un(P).linkedImages, de = String(q || le.join("|") || "image_exact"), te = X.join(`
`), me = fe.get(de);
      if (me && me.srcRaw === te && me.img) return me.img;
      const oe = n || globalThis.Image;
      if (typeof oe != "function") return null;
      const I = new oe();
      (O = r == null ? void 0 : r.markImageLoading) == null || O.call(r, I, te);
      const W = { srcRaw: te, resolvedSrc: "", img: I };
      fe.set(de, W);
      let N = -1;
      const ue = (w) => {
        var M, ce, ye;
        w === "ready" ? (M = r == null ? void 0 : r.markImageReady) == null || M.call(r, I, te) : (ce = r == null ? void 0 : r.markImageFailed) == null || ce.call(r, I, te), Q == null || Q(I), (ye = P.setDirtyCanvas) == null || ye.call(P, !0, !0);
      }, A = () => {
        if (N += 1, N >= Se.length) {
          ue("failed");
          return;
        }
        W.resolvedSrc = Se[N], I.src = W.resolvedSrc;
      };
      return I.onload = () => ue("ready"), I.onerror = () => {
        if (N + 1 < Se.length) {
          A();
          return;
        }
        ue("failed");
      }, A(), I;
    },
    output: s,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (P, $, Q, q = null) => {
      var de, te, me;
      const le = a(P, $)[0] || null, ve = i(le);
      if (!ve) return null;
      const he = `__ui__${$}`, X = (de = Q == null ? void 0 : Q.get) == null ? void 0 : de.call(Q, he);
      if (X && X.__panoSrc === ve) return X;
      const Se = n || globalThis.Image;
      if (typeof Se != "function") return null;
      const fe = new Se();
      return fe.__panoSrc = ve, (te = r == null ? void 0 : r.markImageLoading) == null || te.call(r, fe, ve), fe.onload = () => {
        var oe;
        (oe = r == null ? void 0 : r.markImageReady) == null || oe.call(r, fe, ve), q == null || q(fe);
      }, fe.onerror = () => {
        var oe;
        (oe = r == null ? void 0 : r.markImageFailed) == null || oe.call(r, fe, ve), q == null || q(fe);
      }, fe.src = ve, (me = Q == null ? void 0 : Q.set) == null || me.call(Q, he, fe), fe;
    },
    uiList: a,
    uiValue: l
  };
}
function Cg({
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
const Ki = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, Ow = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Ig(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !Ki[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: zr(t.fps) };
}
function Er(e) {
  return structuredClone(e);
}
function Fw(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function Tw(e, t, n) {
  const r = e.fps ?? t;
  if (r === t) return e.lanes;
  const i = n.start - n.in, o = Math.floor(i * r / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / r + 0.5) - i }))
  }]));
}
function Xu(e, t, n) {
  const r = Tw(n, e.timeline.fps, t.clip);
  let i;
  if (t.placement === n.placement) {
    i = { ...t };
    for (const o of Ki[n.placement]) t.handoff_overrides.includes(o) || (i[o] = r[o]);
  } else
    i = { ...Object.fromEntries(Ow.map((o) => [o, t[o]])), placement: n.placement, ...r }, n.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return Er(cn({ version: 2, stickers: [i] }).stickers[0]);
}
function Dw(e, t) {
  const n = e.stickers.findIndex((r) => r.source.kind === "port");
  return !t || n < 0 ? e : { ...e, stickers: e.stickers.map((r, i) => i === n ? Xu(e, r, t) : r) };
}
function Lw(e, t) {
  const n = Ki[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const r = n.filter((i) => !Fw(e[i], t[i]));
  if (r.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...r]);
    e.handoff_overrides = [...n, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function Rw(e, t) {
  if (!t || t.id !== e.id) return Er(e);
  if (e.placement === t.placement) {
    const r = Er(e);
    for (const i of Ki[e.placement]) e.handoff_overrides.includes(i) || (r[i] = Er(t[i]));
    return r;
  }
  if (e.handoff_overrides.some((r) => Ki[e.placement].includes(r))) return Er(e);
  const n = Er(t);
  for (const r of ["clip", "visible", "locked", "crop", "opacity"]) n[r] = Er(e[r]);
  return n;
}
function Vw(e, t, n, r) {
  return !t.handoff_overrides.includes(r) || t.placement !== n.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== r), t[r] = Er(Xu(e, t, n)[r]), !0);
}
const Gs = "sticker_image_1", Eg = "external_image", Wi = 0;
function Ks(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Kl(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Lr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Fc(e, t = Wi) {
  return (e == null ? void 0 : e.version) !== 2 ? Lr(e) : Lr(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Bn(n, t).active,
    external: n.source.kind === "port",
    ...Fu(n, t)
  }));
}
function Ju(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Lr(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Og(e) {
  return String((e == null ? void 0 : e.id) || "") === Gs || String((e == null ? void 0 : e.source_kind) || "") === Eg;
}
function Zu(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Og(t);
}
const Fg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Tg(e) {
  return !Og(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Fg.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function Dg(e) {
  const t = Tg(e);
  return t ? Fg.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Lg(e, t = {}) {
  var F, P, $;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((Q) => String((Q == null ? void 0 : Q.id) || "") === Gs);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const Q = String(((F = e.active) == null ? void 0 : F.selected_sticker_id) || "") === Gs;
    return {
      state: {
        ...e,
        stickers: n.filter((q, le) => le !== r),
        active: Q ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = r >= 0 ? n[r] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), m = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = a ? m.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || m.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(_)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const Q = Ks(g, u, f), q = Number(((P = s == null ? void 0 : s.initial_pose) == null ? void 0 : P.hFOV_deg) ?? g), le = Ks(q, u, f), ve = Number((($ = s == null ? void 0 : s.initial_pose) == null ? void 0 : $.vFOV_deg) ?? le);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - Q) <= 1e-6 && Math.abs(ve - le) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((he, X) => X === r ? {
          ...he,
          vFOV_deg: Q,
          initial_pose: he.initial_pose && typeof he.initial_pose == "object" ? { ...he.initial_pose, vFOV_deg: le } : he.initial_pose
        } : he)
      },
      changed: !0
    };
  }
  const v = n.reduce((Q, q) => Math.max(Q, Number((q == null ? void 0 : q.z_index) || 0)), -1), y = {
    yaw_deg: Number(m.yaw_deg || 0),
    pitch_deg: Number(m.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Ks(g, u, f) : Number(m.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(m.rot_deg ?? m.roll_deg ?? 0)
  }, G = {
    ...s || {},
    id: Gs,
    source_kind: Eg,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: v + 1
  }, U = r >= 0 ? n.map((Q, q) => q === r ? G : Q) : [...n, G];
  return { state: { ...e, stickers: U }, changed: !0 };
}
function ka(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const $w = ["IMAGE", "VIDEO"], zw = ["MESH", "SPLAT", "MOGE_GEOMETRY", "DA3_GEOMETRY"];
function Bf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => zw.includes(n) || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => $w.includes(n)) ? "2d" : null;
}
function jw(e, t) {
  var i, o, s, a, l, c;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? Bf(r.type) ?? Bf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, r.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[r.origin_slot]) == null ? void 0 : c.type) : null;
}
function Rg(e, { pose: t = null, handoff: n = null } = {}) {
  return {
    connected: ka(e, "sticker"),
    awaitingPose: !t && (ka(e, "sticker_state") || jw(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!n
  };
}
function Vg(e) {
  return ka(e, "sticker") && ka(e, "sticker_state");
}
function Hw(e, t) {
  return Vg(e) ? Ig(t) : null;
}
function Gw(e, t, n) {
  return Dw(Dh(e, t), Ig(n));
}
function Yf(e, t, n = {}) {
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
function $g(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((m) => Zu(e, m)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const m = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((_, g) => g !== o),
        active: m ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (r == null ? void 0 : r.placement) === "world" && r.replace && s.placement === "sky" && !i) {
    const m = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), _ = Yf(s.id, r, m);
    return { state: { ...e, stickers: e.stickers.map((g, v) => v === o ? _ : g) }, changed: !0 };
  }
  if (s || n) return { state: e, changed: !1 };
  const a = { ...e }, l = Go(a);
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, Yf(l, r)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), d = Du(l, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, Lr(e).reduce((m, _) => Math.max(m, _.z_index), -1) + 1), u = (r == null ? void 0 : r.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((m) => ({ ...m, value: { ...m.value, vFOV_deg: m.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Qu(e) {
  const t = Lr(e).filter((o) => o && typeof o == "object").map((o) => ({
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
function zg(e) {
  const t = Ju(e), n = Zu(e, t), r = Lr(e).some((a) => a && a.visible !== !1), i = Qu(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Dg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function Kw(e) {
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
function qf(e, t) {
  const n = Ju(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Kw(e), i = String(n.id || ""), o = Qu(r), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: r, changed: !0 };
}
function Ww(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function Uw(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Lg(e, t.value);
  if (t.type === "sync-port") return $g(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Qu(e).reduce((f, m) => Math.max(f, Number(m.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Ks(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, m = Go(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Du(m, Po(i.asset), d, l + 1)],
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
    return !i || !Lr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Ju(e);
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
    const i = Tg(n);
    return !i || !Dg(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return qf(e, "front");
  if (t.type === "send-back") return qf(e, "back");
  if (t.type === "delete-selected") {
    if (Zu(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === n ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== n), o = Lr({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = Ww(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Fu(n, Wi) : n, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = KS(n, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(n);
      return Rh(c, Wi, l), { state: { ...e, stickers: e.stickers.map((d) => d === n ? c : d) }, changed: !0 };
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
function Bw(e = {}) {
  return Cg({
    ...e,
    reduce: Uw,
    projectModel: zg
  });
}
const Ws = 2;
function Zr(e, t) {
  return Math.floor(e * t + 0.5);
}
function Yw(e, t) {
  return Math.floor(e * t + 1e-3);
}
function jg({ video: e, clock: t, fps: n, span: r, loop: i, place: o = () => null, onFrame: s, onCapture: a, onChange: l }) {
  let c = 0, d = !1, u = !1, f = { name: "idle" }, m = [];
  const _ = () => d && !u, g = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const A of m) A();
    m = [];
  }
  function y(A, O = {}) {
    return v(), f = { name: A, ...O }, l(), f;
  }
  function G(A, O, w) {
    const M = () => {
      f === A && w();
    };
    e.addEventListener(O, M), m.push(() => e.removeEventListener(O, M));
  }
  function U(A, O) {
    let w = t.requestFrame(function M(ce) {
      f === A && (O(ce), f === A && (w = t.requestFrame(M)));
    });
    m.push(() => t.cancelFrame(w));
  }
  function F(A) {
    c = A, s(c);
  }
  function P() {
    return y(u ? "error" : "idle");
  }
  const $ = () => {
    var A;
    return ((A = o()) == null ? void 0 : A.origin) ?? 0;
  }, Q = (A) => (A - $()) / n();
  function q(A) {
    const { start: O = 0, end: w = 1 / 0 } = o() ?? {};
    return A >= O && A < w && !(Q(A) >= Number(e.duration));
  }
  function le() {
    u = !0, P();
  }
  function ve() {
    const { seekable: A } = e, O = A != null && A.length ? A.end(A.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(Q(c), Number.isFinite(O) ? O : 1 / 0));
  }
  function he(A) {
    if (!_()) return A === "play" ? te() : P();
    if (e.readyState < Ws && !e.seeking) {
      const O = y("loading", { then: A });
      return G(O, "loadeddata", () => he(O.then)), G(O, "error", le), O;
    }
    return A === "play" && !q(c) ? te() : o() && !q(c) ? P() : X(A, !1);
  }
  function X(A, O) {
    const w = ve(), M = Zr(Number(e.currentTime), n()) === Zr(w, n());
    if (!e.ended && !e.seeking && M) return Se(A);
    const ce = y("seeking", { then: A, target: w, retried: O });
    return G(ce, "seeked", () => {
      const ye = Zr(Number(e.currentTime), n()) === Zr(ve(), n()), D = ve() === ce.target;
      ye || D && ce.retried ? Se(ce.then) : X(ce.then, D);
    }), G(ce, "error", le), e.seeking && M || (e.currentTime = w), ce;
  }
  function Se(A) {
    return A === "play" ? fe() : (a(), P());
  }
  function fe() {
    const A = y("playingVideo", { shown: !1 });
    if (G(A, "pause", () => e.ended ? de() : I()), G(A, "ended", de), G(A, "error", le), i() && !o() && Zr(Number(e.duration), n()) >= r()) {
      const w = e.loop;
      e.loop = !0, m.push(() => {
        e.loop = w;
      });
    }
    const O = (w, M) => {
      M && !A.shown && (A.shown = !0, l()), me(Zr(w + $() / n(), n()));
    };
    if (g()) {
      let w = e.requestVideoFrameCallback(function M(ce, ye) {
        f === A && (O(Number(ye.mediaTime), !0), f === A && (w = e.requestVideoFrameCallback(M)));
      });
      m.push(() => {
        var M;
        return (M = e.cancelVideoFrameCallback) == null ? void 0 : M.call(e, w);
      });
    } else
      U(A, () => O(Number(e.currentTime), e.readyState >= Ws));
    return Promise.resolve(e.play()).catch(() => {
      f === A && I();
    }), A;
  }
  function de() {
    a(), te();
  }
  function te() {
    var w;
    const A = y("playingClock", { startTs: t.now(), startFrame: c }), O = ((w = o()) == null ? void 0 : w.start) ?? 0;
    return _() && c < O && e.readyState >= Ws && (e.currentTime = Math.max(0, Q(O))), U(A, (M) => me(A.startFrame + Math.floor(Math.max(0, M - A.startTs) / 1e3 * n()))), A;
  }
  function me(A) {
    if (A < r()) {
      if (o() && f.name === "playingVideo" && !q(A)) {
        v(), e.pause(), F(A), te();
        return;
      }
      const O = o() && f.name === "playingClock" && _() && A > c && !q(c) && q(A);
      F(A), O && he("play");
      return;
    }
    if (!i() || r() <= 1) {
      oe(r() - 1);
      return;
    }
    f.name === "playingVideo" && (v(), e.pause()), F(0), he("play");
  }
  function oe(A) {
    f.name === "playingVideo" ? (v(), e.pause(), F(Math.max(0, A)), a()) : F(Math.max(0, A)), he("still");
  }
  function I() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", l();
    else if (f.name === "playingVideo") {
      v(), e.pause();
      const A = Yw(Number(e.currentTime) + $() / n(), n());
      F(Math.min(A, r() - 1)), a(), c === A ? P() : he("still");
    } else f.name === "playingClock" && oe(Math.min(c, r() - 1));
  }
  function W() {
    if (!(ue() || r() <= 1)) {
      if (c >= r() - 1 && F(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", l();
        return;
      }
      he("play");
    }
  }
  function N(A) {
    const O = Math.max(0, Math.min(Math.round(A), r() - 1));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", F(O), l();
      return;
    }
    f.name === "playingVideo" && (v(), e.pause()), F(O), he("still");
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
    play: W,
    stop: I,
    seek: N,
    toggle() {
      ue() ? I() : W();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(A) {
      v(), d = !!A, u = !1, he("still");
    },
    dispose() {
      v(), d = !1, f = { name: "idle" };
    }
  };
}
function ed({ video: e, onCapture: t, onChange: n }) {
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
      const G = Number(e.duration), U = Number.isFinite(G) ? Math.min(g, G) : g, F = Math.abs(Number(e.currentTime) - U) > 1.5 / y;
      if (e.ended && !F) return;
      F && d(U), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
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
  function _(g) {
    r = g, i = !1, s = null, a = null, l = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: v = null, playing: y = !1, fps: G }) {
      g !== r && (_(g), n()), o = { time: v, playing: y, fps: G }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, v) {
      return !r || i ? v : o.time === null ? null : o.playing && l ? e : a === null ? v : g;
    },
    dispose() {
      for (const [g, v] of Object.entries(m)) e.removeEventListener(g, v);
      _("");
    }
  };
}
function Us(e, t, n = !1) {
  return !t && !n && e.isConnected && e.clientWidth > 0;
}
function qw({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const m = /* @__PURE__ */ new Set();
  let _ = null, g = null, v = {};
  const y = () => i().timeline.fps, G = (fe) => fe.stickers.find((de) => de.source.kind === "port"), U = () => v.bg !== void 0 ? v.bg : d && f > 0 ? { video: !0, frames: Math.round(f * y()), duration: f } : null, F = () => v.bg === null ? v.upstreamClip ?? { start: 0, in: 0, duration: null } : i().background.clip, P = () => Ou(i(), {
    ...v,
    bg: U(),
    port: (_ == null ? void 0 : _.meta) ?? v.port ?? null,
    camera: c
  }), $ = jg({
    video: e,
    clock: r,
    fps: y,
    span: P,
    loop: () => !0,
    place: () => {
      const fe = F();
      return fe ? xh(fe) : null;
    },
    onFrame: o,
    onCapture: s,
    onChange: l
  }), Q = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, q = () => {
    u && (m.add(u), l());
  }, le = ed({ video: t, onCapture: a, onChange: l }), ve = Eu({ createImage: n, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", Q), e.addEventListener("error", q);
  function he(fe) {
    fe !== u && (u = fe, e.pause(), fe ? e.src = fe : e.removeAttribute("src"), e.load(), $.setSource(!!fe));
  }
  function X() {
    $.playing && $.stop();
  }
  function Se(fe) {
    const de = G(fe);
    g = _ && de ? Au(de.clip, $.frame, fe.timeline.fps, _.meta) : null, le.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: g,
      playing: $.advancing,
      fps: fe.timeline.fps
    });
  }
  return {
    get frame() {
      return $.frame;
    },
    get playing() {
      return $.playing;
    },
    get showsVideo() {
      return $.showsVideo;
    },
    get source() {
      return u;
    },
    // Whether the background shows at the playhead (backgroundShownAt); where it does not, the surface shows
    // bg_color, as the node's output does.
    get backgroundShows() {
      const fe = F();
      return v.bg === null ? !fe || xc(fe, $.frame, y(), v.upstreamMedia ?? null, !0) : !fe || xc(fe, $.frame, y(), U(), !!v.upstream);
    },
    pause: X,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(fe, de) {
      return _ != null && _.frames ? ve.picture(_.frames, g, _.meta, de) : le.picture(fe, de);
    },
    toggle() {
      $.playing ? $.stop() : $.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. `media` is
    // what the node's result gives autoTimelineLength of its inputs ({ bg, port, sceneItems, upstream }; `bg`
    // left out while no result gives it, null when an upstream background stands in, which `upstreamClip`
    // places and `upstreamMedia` ({ video, frames, duration } of its MP4) ends). Out of sight, the node pauses and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: fe, sources: de, state: te, sticker: me = null, media: oe = {} }) {
      if (_ = fe ? me : null, v = oe, !fe)
        return X(), he(""), Se(te), !1;
      for (const A of m)
        de.includes(A) || m.delete(A);
      const I = de.find((A) => A && !m.has(A)) || "", W = I !== d;
      W && (d = I, f = 0), he(d);
      const N = Eh(te, { camera: c }) || !!d && $.state !== "error" || !!_;
      return N || X(), (W || !N || !$.playing && $.frame >= P()) && $.frame !== Wi && $.seek(Wi), Se(te), N;
    },
    dispose() {
      $.dispose(), le.dispose(), e.removeEventListener("loadedmetadata", Q), e.removeEventListener("error", q), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
function Xw(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const n = t.fps === e.timeline.fps ? t : _h(t, e), r = new Set(n.deleted), i = new Map(n.stickers.map((a) => [a.id, a]));
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
const Hg = "PANO_SCENE";
function Gg(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: cn(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function td(e) {
  if (!e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length) return null;
  const t = e("pano_upstream_bg_color")[0], n = e("pano_upstream_bg_clip")[0], r = cn({ version: 2, background: { clip: n == null ? void 0 : n.clip } }).background.clip;
  return {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: vn(e("pano_upstream_coverage")[0]),
    color: Array.isArray(t) && t.length === 3 ? `#${t.map((i) => Math.round(Math.min(1, Math.max(0, Number(i) || 0)) * 255).toString(16).padStart(2, "0")).join("")}` : null,
    clip: Qa(r) || !(Number(n == null ? void 0 : n.fps) > 0) ? null : { clip: r, fps: Number(n.fps) }
  };
}
const Jw = "bg_media is not used";
function Zw(e, t) {
  return e === Hg && t === null;
}
function mn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function Kg(e) {
  return e.map(({ sceneState: { id: t } }, n) => t && !e.slice(n + 1).some((r) => r.sceneState.id === t) ? t : `#${n}`);
}
function Wg(e, t, n) {
  const r = Kg(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && r[s] === i.id ? t.find((m) => m.layer === i.id) ?? null : null, c = Xw(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === n ? u : { ...qi(u, n), painting: d };
    for (const m of f.stickers)
      m.origin = { layer: r[s], id: m.id }, m.id = nd(r[s], m.id);
    return { key: r[s], sceneState: f, ui: o, received: i };
  });
}
function nd(e, t) {
  return `upstream:${e}:${t}`;
}
function Tc(e, t) {
  return nd(e, t);
}
function Ct(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function xa(e) {
  return Yo(e.origin.layer);
}
function Yo(e) {
  return !e.startsWith("#");
}
function Ug(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? Hr : jr).map(([r]) => r), ...t ? [] : ["z_index"]];
}
function Qw(e) {
  return Object.fromEntries(Ug(e).map((t) => [t, JSON.stringify(e[t])]));
}
function Bg(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function rd(e) {
  return `layer:${e}`;
}
function Xf(e) {
  return new Map(e.flatMap(({ key: t, sceneState: n }) => [
    [rd(t), Bg(n)],
    ...n.stickers.map((r) => [r.id, Qw(r)])
  ]));
}
function ek(e, t, n, r, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = _h(o[d], u.timeline.fps === i ? u : qi(u, i));
    }
    return d;
  };
  return n.forEach(({ key: l, sceneState: c }, d) => {
    if (!Yo(l)) return;
    const u = r.get(rd(l));
    if (u) {
      const f = Bg(c), m = ["visible", "clip"].filter((_) => f[_] !== u[_]);
      if (m.length) {
        const _ = a(l, d), g = { ...o[_].scene };
        for (const v of m) g[v] = structuredClone(c.scene[v]);
        o[_] = { ...o[_], scene: g };
      }
      if (f.painting_visible !== u.painting_visible) {
        const _ = a(l, d);
        o[_] = { ...o[_], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const m = r.get(f.id);
      if (!m) continue;
      const _ = Ug(f).filter((F) => JSON.stringify(f[F]) !== m[F]);
      if (!_.length) continue;
      const g = a(l, d), { id: v } = f.origin, y = [...o[g].stickers], G = y.findIndex((F) => F.id === v), U = G >= 0 && y[G].placement === f.placement ? { ...y[G] } : { id: v, placement: f.placement };
      for (const F of _) U[F] = structuredClone(f[F]);
      G >= 0 ? y[G] = U : y.push(U), o[g] = { ...o[g], stickers: y };
    }
  }), s ? cn({ version: 2, upstream: o }).upstream : e;
}
function tk(e, t, n) {
  const r = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!Yo(i)) return;
    const a = t.find((d) => d.layer === i), l = n.get(rd(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && r.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((m) => m.id === d.origin.id && m.placement === d.placement && Object.hasOwn(m, "clip")), f = n.has(d.id) && n.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && r.push({ index: s, clip: d.clip, sticker: d });
    }
  }), r;
}
function Yg(e, t, n, r, i, o = null) {
  return tk(e, t, n).flatMap(({ index: s, clip: a, sticker: l }) => {
    if (a.duration !== null && a !== o) return [a.start + a.duration];
    const c = (l == null ? void 0 : l.source.kind) === "port" ? r(s) : null;
    return c ? [Cu({ ...a, duration: null }, i, c)] : [];
  });
}
function nl(e, t, n, r) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(r({ layer: t, fps: n, deleted: [], stickers: [], scene: {} })) : o[i] = r(o[i]), cn({ version: 2, upstream: o }).upstream;
}
function nk(e, t, n) {
  return t.reduce((r, { layer: i, id: o }) => nl(r, i, n, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const rk = new Set([...jr, ...Hr].map(([e]) => e));
function qg(e, { layer: t, id: n }) {
  var r;
  return ((r = e.find((i) => i.layer === t)) == null ? void 0 : r.stickers.find((i) => i.id === n)) ?? null;
}
function ik(e, t, n = null) {
  const { origin: r } = t, i = qg(e, r);
  return !i || n !== null && !(rk.has(n) && i.placement === t.placement && Object.hasOwn(i, n)) ? e : nl(e, r.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== r.id) return [s];
      if (n === null) return [];
      const a = { ...s };
      return delete a[n], [a];
    })
  }));
}
function ok(e, t) {
  var r;
  const n = new Set((r = e.find((i) => i.layer === t.key)) == null ? void 0 : r.deleted);
  return t.received.stickers.filter((i) => n.has(i.id)).length;
}
function sk(e, t) {
  var n;
  return (n = e.find((r) => r.layer === t)) != null && n.deleted.length ? nl(e, t, null, (r) => ({ ...r, deleted: [] })) : e;
}
function Xg(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function ak(e, t) {
  return Xg(e.find((n) => n.layer === t)) ? nl(e, t, null, ({ painting_visible: n, ...r }) => ({ ...r, scene: {} })) : e;
}
function lk(e, t) {
  const n = Kg(t), r = new Map(t.flatMap(({ sceneState: s }, a) => n[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = r.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? cn({ version: 2, upstream: o }).upstream : e;
}
function ck(e, t, n, { media: r, paintLayers: i, source: o, editorFile: s = null }) {
  const { sceneState: a, ui: l, received: c } = e, d = os(a, n), u = (y) => y.visible ? r(y) : null, f = fg(a, n, { media: u, zIndex: (y) => y.z_index, paintLayers: i, evaluated: d }).map((y) => y.kind === "erp" ? { ...y, id: nd(t, y.id) } : y), m = hg(a, n, a.stickers, { media: u, evaluated: d }), _ = [], g = ba(mn(l, "pano_scene_files"), mn(l, "pano_scene_meta"), o);
  g && _.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: Ku(g, d.scene), value: d.scene, opacity: 1 });
  const v = ba(mn(l, "pano_sticker_files"), mn(l, "pano_sticker_meta"), o);
  if (v) {
    const y = ng(v, a, d);
    _.push({ slot: `${t}:sticker`, urls: rg(v, c), request: y, value: (y == null ? void 0 : y.value) ?? null, opacity: (y == null ? void 0 : y.opacity) ?? 1 });
  }
  for (const y of s ? og(a, d, s) : []) {
    const { request: G } = y, U = a.stickers.find((F) => F.id === y.id);
    _.push({ slot: `${t}:file:${y.id}`, urls: [y.key], request: G, value: (G == null ? void 0 : G.value) ?? null, opacity: (G == null ? void 0 : G.opacity) ?? 1, source: U.source });
  }
  return { evaluated: d, sky: f, stickers: m, items: _ };
}
const Ma = Math.PI / 180, nr = 180 / Math.PI, uk = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), dk = 260;
function Jf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Jg(e, t) {
  return t ? Jg(t, e % t) : e;
}
function fk(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Jg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function qo(e, t) {
  const n = Jf(e), r = Jf(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: fk(n, r) };
}
function ai(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function Zg(e) {
  const t = ai(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? gr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function id(e, t, n = uk) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), a = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), c = (v, y, G) => {
    const U = v + y, F = Math.max(0, G - 1), P = U > F && U > 0 ? F / U : 1;
    return [v * P, y * P];
  }, [d, u] = c(l, s, r), [f, m] = c(o, a, i), _ = {
    x: d,
    y: f,
    w: Math.max(1, r - d - u),
    h: Math.max(1, i - f - m)
  }, g = vu(_, t);
  return {
    x: _.x + (_.w - g.width) * 0.5,
    y: _.y + (_.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: _
  };
}
function pk(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = id({ width: n, height: r }, 1), o = Fe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = n / (2 * Math.tan(o * Ma * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Qm(l, qm(
    { x: n * 0.5, y: r * 0.5 },
    s,
    a
  )), d = mk(c, Yi(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = Su({ width: i.w, height: i.h }, s);
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
    yaw: Et(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * nr),
    pitch: Fe(Math.asin(Fe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * nr, -89.9, 89.9)
  };
}
function mk(e, t) {
  const n = Qg(e), r = Yi(n.yaw, n.pitch, 0), i = xl(t, e), o = {
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
      xl(a, r.up),
      xl(a, r.right)
    ) * nr)
  };
}
function e0(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = id({ width: n, height: r }, mi(e)), o = ui(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Qm(e, qm(
    s,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), l = Qg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Fe(2 * Math.atan(n / (2 * o)) * nr, 1, 179)
  };
}
function hk(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = ui(t, n), l = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = _u(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= r && u.y + u.h >= i, m = r / i, _ = Math.tan(gc * Ma), g = m >= 1 ? _ : _ * m, v = m >= 1 ? _ / m : _;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(c / a) * nr,
      vFOV_deg: 2 * Math.atan(d / a) * nr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(g) * nr,
        vFOV_deg: 2 * Math.atan(v) * nr
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
function gk(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const s = ui(n, e);
    return Su(vu(n, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Rs(o, t) };
}
function Zf(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = qo(t, n);
  if (!o) return e;
  const s = mi(e) >= 1;
  r && o.ratio >= 1 !== s && (o = qo(o.height, o.width));
  const a = gk(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function t0(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ai(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = Xm({
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
    return Si(e, (r) => Zf(
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
      const o = String(gr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? qo(o[1], o[2]) : qo(mi(r), 1);
      return s ? Zf(r, s.height, s.width, { safeRect: t.safeRect }) : r;
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
    const i = Jm(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? Si(e, (r) => {
    const i = Zm(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? Si(e, (r) => {
    const i = i0(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function n0({
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
function r0(e, t, n = {}) {
  var s, a;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Bm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: Ym(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function i0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ma, l = Math.cos(a), c = Math.sin(a), d = o / n, u = -s / n, f = d * l - u * c, m = d * c + u * l, _ = Number(e.pitch_deg || 0) * Ma, g = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: Et(Number(e.yaw_deg || 0) - Math.atan(f) / g * nr),
    pitch_deg: Fe(Number(e.pitch_deg || 0) - Math.atan(m) * nr, -90, 90)
  };
}
function yk({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Cg({
    readState: e,
    reduce: t0,
    projectModel: Zg,
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
}), bk = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, vk = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: bk(t[2])
})), Sk = {
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
}, Qf = Object.fromEntries(
  Object.entries(Sk).map(([e, t]) => [e, {
    name: t.name,
    elements: vk(t.body)
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
      return Object.prototype.hasOwnProperty.call(Qf, r) ? Qf[r] : null;
    });
    return (r, i) => n.value ? (Oe(), De("svg", {
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
      (Oe(!0), De(qe, null, mt(n.value.elements, (o, s) => (Oe(), De(qe, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Oe(), De("path", fr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Oe(), De("circle", fr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Oe(), De("rect", fr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Oe(), De("line", fr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Oe(), De("polyline", fr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Oe(), De("polygon", fr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : tt("", !0)
      ], 64))), 128))
    ], 2)) : tt("", !0);
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
    const t = e, n = nt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, i) => (Oe(), bn(jb(e.tag), fr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: pm(() => [
        Be(xt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, _k = ["aria-expanded", "disabled"], wk = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, kk = ["data-aspect", "disabled", "onClick"], xk = { class: "pano-cutout-aspect-custom" }, Mk = ["disabled"], Pk = ["disabled"], Nk = ["data-custom-width", "data-custom-height", "disabled"], o0 = {
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
    ]), o = /* @__PURE__ */ Rt("1"), s = /* @__PURE__ */ Rt("1"), a = /* @__PURE__ */ Rt(null), l = nt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), c = nt(() => {
      const g = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], v = String(n.model.aspectLabel || "");
      return g.length ? g.map((y) => {
        const G = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), U = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || G);
        return {
          ...typeof y == "object" && y ? y : {},
          value: G,
          label: U,
          active: v ? G === v : (y == null ? void 0 : y.active) === !0
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
    }), ts(() => {
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
    function _() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (g, v) => (Oe(), De("div", {
      ref_key: "rootElement",
      ref: a,
      class: st(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Oe(), bn(Ht, {
        key: 0,
        icon: e.model.aspectIcon || Je(je).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: v[0] || (v[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Oe(), De("button", {
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
      ], 8, _k)),
      vr(Ne("div", wk, [
        (Oe(!0), De(qe, null, mt(c.value, (y) => (Oe(), De("button", {
          key: y.value,
          class: st(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (G) => m(y)
        }, Xe(y.label), 11, kk))), 128)),
        Ne("div", xk, [
          vr(Ne("input", {
            "onUpdate:modelValue": v[2] || (v[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, Mk), [
            [Sf, o.value]
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
          }, null, 8, Pk), [
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
          }, "Apply", 8, Nk)
        ])
      ], 512), [
        [ci, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Ak = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Ck = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Rt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (Oe(), De("div", {
      class: st(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = pt(() => {
      }, ["stop"]))
    }, [
      Be(Ht, {
        icon: Je(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Ak, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Oe(!0), De(qe, null, mt(Je(n), (o) => (Oe(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ne("kbd", null, Xe(o[0]), 1),
          Ne("span", null, Xe(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Ik = {
  class: "pano-view-unavailable",
  role: "status"
}, rl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (Oe(), De("div", Ik, Xe(Je(gg)), 1));
  }
}, Ek = { class: "pano-cutout-node-surface" }, Ok = ["title", "disabled"], Fk = { class: "value" }, Tk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Dk = {
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
    return (r, i) => (Oe(), De("div", Ek, [
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
        Be(Ht, {
          icon: e.model.hasShot ? Je(je).delete : Je(je).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(o0, {
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
          Ne("span", Fk, Xe(e.model.rollLabel || "0.0°"), 1)
        ], 40, Ok),
        Be(Ht, {
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
        Be(Ck)
      ], 32),
      e.model.hasShot === !1 ? (Oe(), De("div", Tk, " Choose a view · + Add Frame ")) : tt("", !0),
      e.model.viewUnavailable ? (Oe(), bn(rl, { key: 1 })) : tt("", !0)
    ]));
  }
}, s0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ Rt(null);
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
      const _ = ((v = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : v[0]) || null;
      if (_) {
        r("file-selected", { intent: m, file: _ });
        return;
      }
      r("file-cancelled", { intent: m });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && r("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Oe(), De("input", {
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
}, Lk = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Rk = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Rt(!1), n = Object.freeze([
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
    return (r, i) => (Oe(), De("div", {
      class: st(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = pt(() => {
      }, ["stop"]))
    }, [
      Be(Ht, {
        icon: Je(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Lk, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Oe(!0), De(qe, null, mt(Je(n), (o) => (Oe(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ne("kbd", null, Xe(o[0]), 1),
          Ne("span", null, Xe(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Vk = { class: "pano-stickers-node-surface" }, $k = ["disabled"], zk = ["aria-label", "data-tip"], jk = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Hk = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, Gk = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Rt(null);
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
    return (s, a) => (Oe(), De("div", Vk, [
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
        ], 8, $k),
        Be(Ht, {
          icon: e.model.locked ? Je(je).lock_closed : Je(je).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(Ht, {
          icon: Je(je).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Ht, {
          icon: Je(je).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Ht, {
          icon: e.model.isExternalSelection ? Je(je).back_initial : Je(je).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Rk)
      ], 32),
      e.model.playable === !0 ? (Oe(), De("button", {
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
      ], 40, zk)) : tt("", !0),
      e.model.hasStickers === !1 ? (Oe(), De("div", jk, " Add Image to place a sticker ")) : tt("", !0),
      e.model.dropActive === !0 ? (Oe(), De("div", Hk, "Drop image to add")) : tt("", !0),
      Be(s0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Oe(), bn(rl, { key: 3 })) : tt("", !0)
    ]));
  }
}, Kk = { class: "pano-studio-node-surface" }, Wk = {
  class: "pano-studio-node-status",
  role: "status"
}, Uk = { class: "pano-studio-node-shot" }, Bk = { class: "pano-studio-node-size" }, Yk = { class: "pano-studio-node-note" }, qk = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Oe(), De("div", Kk, [
      Ne("div", {
        class: "pano-studio-node-bar",
        onPointerdown: r[1] || (r[1] = pt(() => {
        }, ["stop"])),
        onWheel: r[2] || (r[2] = pt(() => {
        }, ["stop"]))
      }, [
        Ne("div", Wk, [
          Ne("span", Uk, Xe(e.model.status.shot), 1),
          Ne("span", Bk, Xe(e.model.status.size), 1),
          Ne("span", Yk, Xe(e.model.status.note), 1)
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
      e.model.viewUnavailable ? (Oe(), bn(rl, { key: 0 })) : tt("", !0)
    ]));
  }
}, Xk = 2048, Dc = 4096, Jk = (e) => Math.floor(e + 0.5), Ps = (e) => Math.max(2, 2 * Jk(e / 2));
function a0(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function Zk(e) {
  const t = Ou(e, { camera: !0 });
  return t === Oh ? [] : Array.from({ length: t }, (n, r) => r);
}
function Qk(e, t, n, r, i) {
  const o = n === "auto" && i == null;
  let s;
  n !== "auto" ? s = Number(n) : o ? s = Xk : s = Math.floor(i * 360 / r);
  const a = a0(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * r / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((m) => Xa(a, m).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [Ps(c), Ps(d)];
  if (Math.max(...u) <= Dc) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Dc / Math.max(c, d);
  return { width: Ps(c * f), height: Ps(d * f), reducedFrom: u, defaulted: o };
}
function l0(e, t, n, r) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${n}\0${r}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function ex({ stateText: e = "", outputSize: t, coverage: n, bgColor: r = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === l0(e, t, String(n), r) } : null;
}
function tx(e) {
  return e ? $r(en(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Wl = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function nx(e, { stateText: t = "", outputSize: n, coverage: r, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = a0(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${r}°` : "Camera · Perspective");
  let d;
  if (s && s.key === l0(t, n, String(r), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: n === "auto" && o === null };
  else {
    if (n === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Wl[a] };
    d = Qk(e, Zk(e), n, r, o);
  }
  const u = Wl[a] ? [Wl[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Dc} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function rx() {
  let e = null;
  return (t, n) => {
    const r = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", r === void 0 ? "pending" : r, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, nx(n(), { ...t, bgWidth: r }));
  };
}
const ep = 24;
function ix(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Io(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function c0(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Lc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Io(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Io(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : c0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function ox(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => Io(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = r ? e.corners.findIndex((s) => Io(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Io(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : c0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function od(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function u0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ro(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Fe(n.x, -r, t.width + r),
    y: Fe(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function sx(e) {
  const t = Yi(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * ct * 0.5),
    tanY: Math.tan(Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * ct * 0.5)
  };
}
function qr(e, t, n) {
  return bu(sa(
    sa(e.centerDir, aa(e.right, t)),
    aa(e.up, n)
  ));
}
function sd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = sx(e), r = ro(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    qr(n, -n.tanX, n.tanY),
    qr(n, n.tanX, n.tanY),
    qr(n, n.tanX, -n.tanY),
    qr(n, -n.tanX, -n.tanY)
  ].map((f) => ro(f, t)), o = Array.from({ length: 4 }, (f, m) => {
    const _ = [];
    for (let g = 0; g <= 28; g += 1) {
      const v = g / 28;
      let y, G;
      m === 0 ? (y = -n.tanX + 2 * n.tanX * v, G = n.tanY) : m === 1 ? (y = n.tanX, G = n.tanY - 2 * n.tanY * v) : m === 2 ? (y = n.tanX - 2 * n.tanX * v, G = -n.tanY) : (y = -n.tanX, G = -n.tanY + 2 * n.tanY * v);
      const U = ro(qr(n, y, G), t);
      U && _.push({ x: U.x, y: U.y });
    }
    return _;
  }), s = ro(qr(n, 0, n.tanY), t), a = ro(
    qr(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * ep,
      y: s.y + d / u * ep
    },
    visible: !0
  };
}
function tp(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: sd(s, r) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = Lc(o.geometry, n);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = Lc(s.geometry, n);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function ax(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Et(Math.atan2(r.x, r.z) * It),
    pitch_deg: Math.asin(Fe(r.y, -1, 1)) * It
  };
}
function lx(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function cx(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * It;
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
function ux(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function dx(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function fx({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = r.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, m, _) {
    if (!u || typeof _ != "function" || m.settled) return;
    let g = r.get(u);
    g || (g = /* @__PURE__ */ new Map(), r.set(u, g));
    const v = g.get(f);
    if ((v == null ? void 0 : v.entry) === m) {
      v.callback = _;
      return;
    }
    o(v);
    const y = { owner: u, key: f, entry: m, callback: _ };
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
  function c(u, f, m, _ = null) {
    const g = String(f || ""), v = String(m || "");
    if (!g || !v) return null;
    let y = n.get(g);
    if (y)
      n.delete(g), n.set(g, y);
    else {
      l(i - 1);
      const U = e || globalThis.Image;
      if (typeof U != "function") return null;
      const F = new U();
      y = { key: g, image: F, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(g, y), F.onload = () => a(y, !0), F.onerror = () => a(y, !1), F.src = v;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, g, y, _), y.image;
  }
  function d(u) {
    const f = r.get(u);
    f && ([...f.values()].forEach(o), r.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const uo = /* @__PURE__ */ new WeakMap();
function d0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = uo.get(e);
  r || (r = [], uo.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = uo.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && uo.delete(e);
  };
}
function Fr(e, ...t) {
  const n = uo.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
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
}), f0 = "PanoramaSuite.Editor.ViewControls", px = {
  id: f0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Bs).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function mx(e) {
  return Object.hasOwn(Bs, e) ? Bs[e] : Bs.default;
}
function hx(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === n && !!a.alt === r);
  return (s == null ? void 0 : s.action) ?? null;
}
function gx(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Pa = "state_json";
function br(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function yx(e) {
  var s, a;
  const t = br(e, Pa);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Th(n, {
    coverage: (s = br(e, "coverage")) == null ? void 0 : s.value
  }), i = t0(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function ld(e, t) {
  if (!e || Pn(e).coverageSyncInstalled) return;
  const n = br(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var a, l, c, d, u, f, m, _, g;
    const o = r ? r(...i) : void 0, s = Pn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = yr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = lt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (m = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || m.call(f, !0, !0), (g = (_ = t == null ? void 0 : t.canvas) == null ? void 0 : _.setDirty) == null || g.call(_, !0, !0), o;
  }, Pn(e).coverageSyncInstalled = !0;
}
function bx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function np(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function vx(e) {
  var d, u, f, m, _, g;
  if (!e) return;
  const t = br(e, "coverage"), n = br(e, "bg_color"), r = br(e, Pa), i = br(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), s = String(n.value ?? "").trim(), a = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && bx(o) && (np(s) || s === ""))) return;
  let c = "360";
  if (np(s))
    try {
      c = String(vn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), n.value = o, (f = n.callback) == null || f.call(n, o), r.value = s, (m = r.callback) == null || m.call(r, s), i && (i.value = a, (_ = i.callback) == null || _.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Ys(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, s;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (s = r.parentEl) != null && s.style && (r.parentEl.style.display = "none")));
  });
}
function Rc(e, t, n) {
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
async function Sx(e, { tolerateOperationFailure: t = !1 } = {}) {
  var r;
  const n = (r = Pn(e)) == null ? void 0 : r.pendingStickerUploads;
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
  const r = Pn(e), i = r.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
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
async function p0(e, t = {}) {
  var r, i, o;
  await Sx(e, t);
  const n = Array.from(((r = Pn(e)) == null ? void 0 : r.flushers) ?? []);
  for (const s of n) await s();
  await ((o = (i = Bo(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function _x(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await p0(e), n ? n.apply(this, r) : this.value;
  };
}
function wx(e) {
  var n;
  const t = lt(e);
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
    return Nw(this), n;
  };
}
function kx(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Ul(e, {
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
    wx(u), ld(u, t), Ys(u, Pa);
    const _ = br(u, Pa);
    if (_x(u, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const v = _.callback;
      _.callback = (y) => {
        var U;
        const G = v ? v(y) : void 0;
        return (U = u.setDirtyCanvas) == null || U.call(u, !0, !1), G;
      };
    }
    if (n === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const v = br(u, "bg_color");
      !l && v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (g = v.callback) == null || g.call(v, "#00ff00")), Rc(u, r, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(u, "stickers")
      }), m.stickers && Ys(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), m.attached = !0, m.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, Rc(u, r, () => i(u, "cutout")), s(u, {
      buttonText: r,
      onOpen: () => i(u, "cutout")
    }), m.cutout && Ys(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), m.attached = !0, m.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const m = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && n === "PanoramaCutout" && yx(this), u === "onConfigure" && n === "PanoramaStickers" && !l && this.widgets && vx(this);
      const _ = lt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && _ && Fr(this, "attach"), m;
    };
  }
  m0(e);
}
function xx(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return kx(this), r;
  }, m0(e);
}
function Mx(e, {
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
    ld(e, t);
    const c = (d = e) => n(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Rc(e, "Open Preview", () => c(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ys(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function Px({
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
    settings: [px, S1],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Nf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Nf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Ul(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Ul(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Ul(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), la(d) && xx(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      lt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      ld(l, e), la(c) && Mx(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const Nx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function En(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : Nx.test(String(e.name || "")) : !1;
}
function cd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => En(n)) : !1;
}
function Ax(e, t = {}) {
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
async function fo(e, t = {}) {
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
async function Qr(e, { fetchApi: t } = {}) {
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
const rp = 100 * 1024 * 1024, Cx = ["image/*", ...gh].join(",");
function Na(e) {
  return !!e && yh(e.name);
}
function Ix(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r.startsWith("model/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => En(n) || Na(n)) : !1;
}
function h0(e) {
  const t = Number((e == null ? void 0 : e.size) || 0);
  return t <= rp ? null : `${e.name} is too large (${(t / 1024 / 1024).toFixed(1)} MB). The largest 3D file is ${rp / 1024 / 1024} MB.`;
}
async function Ex(e, { fetchApi: t } = {}) {
  if (!Na(e)) throw new TypeError("A 3D file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = h0(e);
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
  return Po({ filename: s, subfolder: String((o == null ? void 0 : o.subfolder) ?? "3d"), storage: String((o == null ? void 0 : o.type) || "input") });
}
const ip = /* @__PURE__ */ new WeakSet(), op = /* @__PURE__ */ new WeakSet();
let sp = 0;
function Vc(e) {
  if (!e || typeof e != "object" || op.has(e)) return e;
  const t = String(e.type || "preview");
  return sp += 1, e.type = `${t}:pano-${sp}`, op.add(e), e;
}
function Aa(e) {
  if (!e || typeof e != "object" || ip.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, ip.add(e), e;
}
function g0(e, t) {
  var r, i;
  if (!t || ((i = (r = Aa(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Ox({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (l) => o || r || typeof e != "function" ? !1 : (i = l, r = e(() => {
    r = 0;
    const c = i;
    i = null, o || n == null || n(c);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: Nt } = Os;
hw((e) => xr(e.id));
gw(Xt);
const ud = fx(), { linkedVideoFile: y0 } = Ag({ app: Nt, api: Xt });
function $c() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Os == null ? void 0 : Os.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Fx = "pano_suite.ui_settings.v1", Tx = 120, Dx = 2048;
function ap() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Fx)) || "").trim();
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
function Lx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function io(e) {
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
function Rx() {
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
function zc(e) {
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
function b0(e) {
  const t = zc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Vx(e, t, n) {
  b0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function jc(e) {
  var t, n;
  return (n = (t = lt(e)) == null ? void 0 : t.dom) != null && n.widget ? "dom" : "none";
}
function dd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function v0(e) {
  return la(dd(e));
}
function lp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Nt == null ? void 0 : Nt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, r, n, i].join("|");
}
function S0(e) {
  const t = lt(e);
  if (t.controller) return t.controller;
  const n = {
    activeBackend: "none",
    attach(r = {}) {
      const i = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = jc(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = r.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof r.onOpen == "function" ? r.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Bl(e), IM(e, { ...r, mode: i }), this.activeBackend = jc(e);
    },
    rebind(r = {}) {
      const i = String(r.mode || lt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Bl(e), this.activeBackend = "none", this.attach({ ...r, mode: i });
    },
    teardown() {
      Bl(e), this.activeBackend = "none";
    }
  };
  return t.controller = n, n;
}
function Bl(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Hc.unregister(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = $c();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => iM(e, c));
  } catch {
  }
  n.dom = null, n.noPreview = !1, n.bootMinHeightTimer && (clearTimeout(n.bootMinHeightTimer), n.bootMinHeightTimer = null), n.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function $x(e, t = "#00ff00") {
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
function zx(e) {
  var n, r;
  const t = (n = Pn(e)) == null ? void 0 : n.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = jn(e, "state_json")) == null ? void 0 : r.value) || "");
}
function rn(e) {
  var d, u;
  const t = Pn(e), n = zx(e), r = t.liveStateVersion, i = String(((d = jn(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = jn(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof n == "string", a = s && Vg(e) && bt(e, "sticker-handoff") ? Hn(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === n && l.liveVersion === r && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? Gw(n, { backgroundColor: i, coverage: o, active: zh(e) }, a) : $x(n, i);
  return c.coverage = o, t.parsedState = { source: n, liveVersion: r, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function jn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function jx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function _0(e, t, n = null) {
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
  return !r && n != null && (r = jx(e == null ? void 0 : e.graph, n)), r;
}
function Hx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function w0(e, t = []) {
  const n = Hx(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    Tn.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function cp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Ca(e, t) {
  const n = cp(e), r = cp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Gx(e, t) {
  var n;
  return _0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function Kx(e, t = Tn) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = w0(e, t).map((a) => n.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = n.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return ww(e, s, Gx);
}
const Hc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Xt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, m, _;
        if (!o) return;
        const s = Ca(r, o == null ? void 0 : o.id);
        String(lt(o).mode || "") === "cutout" && !s || !s && ![...Kx(o)].some((g) => Ca(r, g)) || (s && (pd(o), (c = (l = lt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !Mg(un(o).executedOutputs, r, n.output) && (x0(o), (u = (d = lt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (_ = (m = o.graph) == null ? void 0 : m.setDirtyCanvas) == null || _.call(m, !0, !0), String(lt(o).mode || ""), String(lt(o).mode || ""), void 0));
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
  return typeof ((o = Xt) == null ? void 0 : o.apiURL) == "function" ? Xt.apiURL(i) : i;
}
function Wx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Ux(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function Bx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function Yx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Wx(t)) return [t];
  const { filename: n, subfolder: r } = Ux(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => Ia({
    filename: n,
    subfolder: r,
    type: o
  }));
  return Bx([...i, t]);
}
function qx(e) {
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
function xr(e) {
  const t = Nt == null ? void 0 : Nt.nodeOutputs;
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
function Hn(e, t, n = null) {
  const r = n || xr(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
}
function sn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return sn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Ia({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = sn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ia(e);
}
function Xo(e) {
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
function Xx(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function Jx(e, t) {
  try {
    const n = un(e);
    n.ownOutputRev = ux(n.ownOutputRev);
    const r = Xx(t);
    let i = "";
    for (const o of r)
      if (i = sn(o), i) break;
    i ? (fd(String(i || ""), n.ownOutputRev), n.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ri(e) {
  var n;
  const t = un(e);
  t && ((n = t.ownOutputVideo) == null || n.player.destroy(), t.ownOutputVideo = null);
}
function Zx(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!bt(e, "background"))
    return Ri(e), null;
  const i = xr(r), o = qu(i, t, sn);
  if (!o)
    return Ri(e), null;
  const s = un(e), a = fd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Ri(e);
  const d = kw({
    documentRef: document,
    src: a,
    onFrame: n
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Qx(e, t = []) {
  var c, d;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = w0(e, t).map((u) => n.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = n.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = n[u], m = e.graph ? e.getInputLink(u) : null;
    if ((m == null ? void 0 : m.origin_id) == null) continue;
    const _ = m.origin_id, g = _0(e, u, _);
    if (!g) continue;
    const v = Number(m.origin_slot ?? 0), y = xr((g == null ? void 0 : g.id) ?? _), G = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (G.length) {
      const $ = [];
      v >= 0 && v < G.length && $.push(G[v]), $.push(...G);
      for (const Q of $.filter((q) => !Hs(q))) {
        const q = sn(Q);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: `${q}&pano_src=${Ec(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let U = [];
    try {
      U = typeof (Nt == null ? void 0 : Nt.getNodeImageUrls) == "function" ? Nt.getNodeImageUrls(g) || [] : [];
    } catch {
      U = [];
    }
    if (Array.isArray(U) && U.length) {
      const $ = [];
      v >= 0 && v < U.length && $.push(U[v]), $.push(...U);
      for (const Q of $) {
        const q = sn(Q);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: q, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const F = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (F.length) {
      const $ = [];
      v >= 0 && v < F.length && $.push(F[v]), $.push(...F);
      for (const Q of $) {
        const q = sn(Q);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: q, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const P = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image");
    if (P) {
      let $ = sn(P.value);
      if ($ && !$.includes("/") && !$.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && ($ = Xt.apiURL(`/view?filename=${encodeURIComponent($)}&type=input&subfolder=`)), $)
        return String((f == null ? void 0 : f.name) || ""), { src: $, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = bt(e, "background") ? xr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = sn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function eM(e, t = [], n = {}) {
  const r = Qx(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = Yx(i);
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
    const _ = o[f];
    u.pendingResolvedSrc = _, d.src = _;
  };
  return d.onload = () => {
    var _;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, d.onerror = (_) => {
    if (f + 1 < o.length) {
      m();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((_ == null ? void 0 : _.type) || "error");
  }, m(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function k0(e, t = [], n = null, r = {}) {
  const i = eM(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function x0(e) {
  e && (ud.disposeOwner(e), un(e).linkedImages.clear(), Ri(e));
}
function tM(e) {
  e && (un(e).linkedImages.clear(), Ri(e));
}
function M0(e, t) {
  const n = lt(e);
  n.renderCache ?? (n.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = n.renderCache, i = String(t || "");
  return r.mode !== i && (r.mode = i, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function oo(e, t, n = "") {
  var s;
  const r = M0(e, ((s = lt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < Tx ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function up(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), s = n / i, a = r / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function nM(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * n)), l = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), c = Math.max(Math.round(34 * n), a + Math.round(14 * n)), d = r + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Yl(e, t) {
  var r, i;
  const n = (i = (r = lt(e)) == null ? void 0 : r.dom) == null ? void 0 : i.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function rM(e) {
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
function iM(e, t) {
  return g0(e, t);
}
function Ea(e, t, n, r = null) {
  var f;
  if (!String(t || "")) return null;
  let o = qx(n);
  if (!o && (r != null && r.external)) {
    if (!bt(e, "external-sticker")) return null;
    const m = xr(e == null ? void 0 : e.id), _ = ((f = m == null ? void 0 : m.ui) == null ? void 0 : f.pano_sticker_input_images) || (m == null ? void 0 : m.pano_sticker_input_images) || [];
    for (const g of Array.isArray(_) ? _ : [_])
      if (o = sn(g), o) break;
  }
  if (!o) return null;
  const s = Hn(e, "pano_sticker_input_state_hash"), a = r != null && r.external ? String(s ?? "") : "", l = r != null && r.external ? un(e).ownOutputRev : 0, c = r != null && r.external ? fd(o, l) : o, d = dx(o, a, l);
  return ud.get(e, d, c, (m, _) => {
    var g, v;
    _ && (r != null && r.external && un(e).outputFromRun && Fr(e, "image-loaded"), (v = (g = lt(e).dom) == null ? void 0 : g.requestDraw) == null || v.call(g));
  }) || null;
}
function oM(e, t, n, r) {
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
  const i = aM(e, t, r);
  return i || null;
}
function sM(e, t) {
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
function aM(e, t, n) {
  var i, o;
  const r = sM(t, n || (Nt == null ? void 0 : Nt.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function dp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function lM(e, t, n) {
  const r = sd(t, n);
  r.visible && od(e, r.boundaryEdges, { selected: !1 });
}
function cM(e, t, n) {
  const r = sd(t, n);
  r.visible && (e.save(), od(e, r.boundaryEdges, { selected: !0 }), u0(e, r, { accent: ix(t) }), e.restore());
}
function Gc(e, t, n) {
  return Uu(Sa(lt(e).view || { yaw: 0, pitch: 0, fov: kr }, t, n), t, n);
}
function Oa(e) {
  var t;
  return ((t = lt(e).playback) == null ? void 0 : t.playback.frame) ?? Wi;
}
function uM(e) {
  return [bt(e, "background") ? qu(xr(e.id), ["pano_input_videos"], sn) : "", y0(e, Tn)];
}
function dM(e) {
  var o;
  if (!bt(e, "external-sticker")) return null;
  const t = xr(e.id), n = Hn(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(sn), meta: n };
  const i = qu(t, ["pano_sticker_input_videos"], sn);
  return i ? { src: i, meta: n } : null;
}
function P0(e, t) {
  const n = xr(e.id), r = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(r) ? r : [];
}
function fM(e, t) {
  var a;
  const n = {}, r = (l) => P0(e, l), i = bt(e, "scene"), o = i ? r("pano_upstream_layers") : [], s = i ? td(r) : null;
  if (s) {
    n.bg = null;
    const { clip: l } = s;
    n.upstreamClip = l && kh(l.clip, l.fps, t.timeline.fps);
    const c = r(s.metaKey)[0];
    c && typeof c == "object" && (n.upstreamMedia = { video: !0, frames: Number(c.frames), duration: Number(c.duration) });
  } else if (bt(e, "background")) {
    const l = r("pano_input_video_meta")[0];
    l && typeof l == "object" && (n.bg = { video: Co(e, Tn), frames: Number(l.frames), duration: Number(l.duration) });
  }
  if (bt(e, "external-sticker") && (n.port = Ho(r)), o.length) {
    const l = lt(e);
    if (((a = l.upstreamLength) == null ? void 0 : a.layers) !== o || l.upstreamLength.state !== t) {
      const d = Gg(o), u = Wg(d, t.upstream, t.timeline.fps), f = (m) => Ho((_) => mn(d[m].ui, _));
      l.upstreamLength = { layers: o, state: t, ends: Yg(u, t.upstream, /* @__PURE__ */ new Map(), f, t.timeline.fps) };
    }
    const [c] = r("pano_upstream_frames").length ? r("pano_upstream_frames") : r("pano_timeline_frames");
    n.upstream = { frames: Number(c) > 0 ? Number(c) : 0, ends: l.upstreamLength.ends };
  } else i && (n.sceneItems = r("pano_scene_files").length);
  return n;
}
function pM({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function N0(e, t) {
  var r;
  const n = lt(e);
  return ((r = n.scene) == null ? void 0 : r.state) !== t && (n.scene = { state: t, sceneState: cn({ ...t, painting: null }) }), n.scene.sceneState;
}
function mM(e, t) {
  const n = Li(e), r = !!n.bg_media;
  if (!r && !n.scene) return null;
  if (bt(e, "background")) {
    const o = Hn(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!r) return;
  if (Co(e, Tn)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === y0(e, Tn) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = k0(e, Tn, null, { preserveReadyWhilePending: !1 });
  return Xo(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function hM(e, t) {
  var i, o, s;
  const n = String(((i = jn(e, "output_size")) == null ? void 0 : i.value) ?? ""), r = ["background", "external-sticker", "scene"].every((a) => bt(e, a));
  return {
    stateText: String(((o = jn(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: n,
    coverage: rn(e).coverage,
    bgColor: String(((s = jn(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: n === "auto" ? mM(e, t) : null,
    run: r && Hn(e, "pano_output_size") || null,
    erp: Hn(e, "pano_output_erp") || null,
    frame: Hn(e, "pano_output_frame") || null
  };
}
const gM = 38;
function pd(e) {
  const t = un(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function yM(e, t) {
  const n = un(e).studioRunImage;
  return t && (n == null ? void 0 : n.src) === sn(t.entry) ? n : null;
}
function bM(e, t) {
  const n = un(e), r = lt(e), i = t ? sn(t.entry) : "";
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
      quaternion: tx(t.entry.rotation)
    }
  } : null;
}
function vM(e, t) {
  var n;
  return t ? (n = yM(e, t)) != null && n.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function SM(e, t, n) {
  var l, c, d;
  const r = N0(e, t), i = (u) => {
    var m;
    if (u.visible === !1) return null;
    let f;
    if (t.version === 2) {
      f = Ea(e, u.id, ga(u.source), { external: u.source.kind === "port" });
      const _ = lt(e).playback;
      if (u.source.kind === "port" && _) {
        const g = _.playback.stickerPicture(_.stickerStill, f), v = Iu(_.playback.stickerMedia, f);
        return g ? { media: g, revision: qs(g), source: v } : null;
      }
    } else {
      const _ = u.type === "external_image" || u.source_kind === "external_image", g = String(u.asset_id || "") || (_ ? String(u.id || "") : "");
      f = Ea(e, g, (m = t.assets) == null ? void 0 : m[u.asset_id], { external: _ });
    }
    return Xo(f) ? { media: f, revision: qs(f) } : null;
  }, o = k_(lt(e), t), s = bt(e, "scene") ? (l = td((u) => P0(e, u))) == null ? void 0 : l.color : null;
  return {
    background: ((c = lt(e).playback) == null ? void 0 : c.playback.backgroundShows) === !1 ? Mh(s || String(((d = jn(e, "bg_color")) == null ? void 0 : d.value) || "#000000")) : Xo(n) ? { media: n, revision: qs(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: pg(r, Oa(e), t.stickers, { media: i, paintLayers: o })
  };
}
function _M(e, t, n, r = null) {
  var q, le, ve, he, X, Se, fe;
  const i = lt(e), o = String(i.mode || "stickers");
  M0(e, o);
  const s = rn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (ve = (le = (q = i.cutout) == null ? void 0 : q.session) == null ? void 0 : le.refresh) == null || ve.call(le)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (Se = (X = (he = i.stickers) == null ? void 0 : he.session) == null ? void 0 : X.refresh) == null || Se.call(X));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), r != null && r.frame) {
    n.release(), oo(e, !1, "");
    const { width: de, height: te } = dp(r.frame), me = gM, oe = Math.min(l / de, (c - me) / te);
    d.drawImage(r.frame, (l - de * oe) / 2, me + (c - me - te * oe) / 2, de * oe, te * oe);
    return;
  }
  const f = (r == null ? void 0 : r.background) || null, m = (f == null ? void 0 : f.media) || (i.playback ? pM(i.playback) : Zx(e, ["pano_input_videos"], () => {
    var de, te;
    return (te = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : te.call(de);
  })) || k0(
    e,
    Tn,
    () => {
      var de, te;
      return (te = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : te.call(de);
    },
    { preserveReadyWhilePending: !1 }
  ), _ = Xo(m);
  let g = null;
  const v = () => f ? { background: f, layers: [] } : SM(e, s, m), y = (de, te) => {
    g || (g = v());
    const me = n.render({ width: de.w, height: de.h, camera: te, ...g });
    return me && d.drawImage(me.canvas, me.x, me.y, me.width, me.height, de.x, de.y, de.w, de.h), !!me;
  };
  if (o === "cutout") {
    const de = rM(s), te = dp(m), me = de ? Fe(Vr(de).aspect, 0.1, 10) : _ ? Fe(Number(te.width / te.height), 0.05, 20) : 1, oe = id(u, me);
    i.cutoutFrame = oe;
    let I = "none";
    const W = String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "");
    if (de)
      if (m && !_)
        I = "loading";
      else if (_) {
        const N = hk({ width: l, height: c }, oe, de);
        [
          !N.fallback || y(N.fallback.rect, Ao(N.fallback.shot)),
          y(N.rect, Ao(N.shot)),
          !N.fallback || y(oe, Ao(de))
        ].every(Boolean) || (I = "loading");
      } else
        I = "empty";
    else {
      const N = i.lastCutoutShot;
      N ? (i.view = e0(N, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: kr }), _ ? y(u, Sa(i.view, l, c)) || (I = "loading") : m ? I = "loading" : I = "empty";
    }
    _ || n.release(), n.failed && I === "loading" && (I = "none"), de && (i.lastCutoutShot = { ...de }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(oe.x, oe.y, oe.w, oe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(oe.x + 0.5, oe.y + 0.5, Math.max(0, oe.w - 1), Math.max(0, oe.h - 1)), d.restore()), I === "loading" ? (Yl(e, !1), oo(e, !0, W)) : I === "empty" ? (Yl(e, !0), oo(e, !1, "")) : (Yl(e, !1), oo(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: kr });
  let G = !1;
  (!m || _) && (g = v(), !g.background && !g.layers.length ? (n.release(), G = !0) : G = y(u, Sa(i.view, l, c)));
  const U = !G && !n.failed;
  oo(e, U, U ? String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "") : ""), U && nM(d, u, up(t, u));
  const F = Gc(e, l, c);
  !m && G && wM(d, F, up(t, u));
  const P = String(((fe = s == null ? void 0 : s.active) == null ? void 0 : fe.selected_sticker_id) || ""), $ = Fc(s, Oa(e)), Q = G && e.__panoStudio !== !0 ? $.find((de) => String((de == null ? void 0 : de.id) || "") === P && (de == null ? void 0 : de.visible) !== !1) : null;
  G && !f && $.filter((de) => de !== Q && (de == null ? void 0 : de.visible) !== !1 && (de.external || de.source_kind === "external_image")).filter((de) => !Xo(Ea(e, de.id, null, { external: !0 }))).forEach((de) => lM(d, de, F)), Q && cM(d, Q, F);
}
function fp(e, t, n, r, i = 1) {
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
function wM(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(gn(c, a));
    fp(e, l, t, a === 0 ? i : r, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(gn(a, c));
    fp(e, l, t, r, a % 90 === 0 ? 1.3 : 1);
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
function kM(e, t, n = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function Nn(e, t) {
  return kM(e, t) ? !1 : (Kc(e), !0);
}
function pp() {
  var n;
  const e = (n = Nt == null ? void 0 : Nt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function xM(e) {
  var n;
  if (!e) return;
  const t = (n = Nt == null ? void 0 : Nt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function MM(e, t = 360, n = 260) {
  const r = lt(e);
  if (!r || r.userResized === !0 || r.standaloneBootSized === !0 || !b0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, r.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function PM(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0)), o = lt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, n == null || n(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function mp(e, t = null, n = 0, r = 0, i = !0) {
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
      s.userResized = !0, t == null || t(), i && NM(e, 180, t);
    }
  };
}
function NM(e, t = 180, n = null) {
  if (!e) return;
  const r = lt(e);
  r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.resizeSettleTimer = setTimeout(() => {
    var i;
    r.resizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function po(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const AM = /* @__PURE__ */ new WeakMap();
function A0(e, t) {
  return Mg(AM, e, t) ? !1 : (Jx(e, t), x0(e), po(e), !0);
}
async function CM(e) {
  var n, r;
  const t = await Sw(e, Nt, Xt);
  t && (A0(e, t), (r = (n = lt(e).dom) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function IM(e, t = {}) {
  var Pe;
  const n = t.__allowStandalone === !0, r = lt(e), i = un(e), o = Pn(e), s = v0(e);
  if (s && !n) {
    dd(e);
    return;
  }
  s && MM(e), r.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = r.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = r.mode !== "cutout";
  if (r.noPreview = t.noPreview === !0, r.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: lp(e)
  }.signature || lp(e), jc(e), e == null || e.id, r.mode, e.addDOMWidget, zc(e), (Pe = r.dom) != null && Pe.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, m = f ? 0 : 56, _ = f ? 0 : dk, g = document.createElement("div");
  if (Rx(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
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
    const ne = Aa(Vc(
      e.addDOMWidget($c(), "preview", g, mp(e, null))
    ));
    po(e), r.dom = { widget: ne, root: g, requestDraw: () => {
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
  const G = document.createElement("div");
  G.style.cssText = [
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
  ].join(";"), G.textContent = "Connect ERP image", v.appendChild(y), v.appendChild(G), g.appendChild(v);
  const U = Wm(g), F = document.createElement("div");
  F && (F.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", F.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(F)), Vx(e, 120, 120), po(e);
  let P = null;
  try {
    PM(e, m, () => {
      var ne, ke;
      return (ke = (ne = r.dom) == null ? void 0 : ne.requestDraw) == null ? void 0 : ke.call(ne);
    }), P = Aa(Vc(e.addDOMWidget(
      $c(),
      "preview",
      g,
      mp(
        e,
        () => {
          var ne, ke;
          return (ke = (ne = r.dom) == null ? void 0 : ne.requestDraw) == null ? void 0 : ke.call(ne);
        },
        m,
        _,
        !1
      )
    )));
  } catch {
    return;
  }
  const $ = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, Q = rx(), q = () => {
    $.destroyed || ($.needsDraw = !0, !$.inTick && !$.raf && ($.raf = requestAnimationFrame(p)));
  }, le = yg(q), ve = /* @__PURE__ */ Bi(a ? {
    ...zg(rn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Zg(rn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ne) => ({ value: ne, label: ne }))
  });
  let he = null;
  if (a && e.__panoSceneStateV2) {
    const [ne, ke] = [0, 1].map(() => {
      const ze = rs(document, "node.playback");
      return ze.playsInline = !0, ze.preload = "auto", ze.crossOrigin = "anonymous", ze.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", v.appendChild(ze), ze;
    }), Ae = Gt({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Ie = Gt({ label: "node.port-still" });
    Ie.__panoFrameIdx = 0;
    const Te = qw({
      video: ne,
      stickerVideo: ke,
      createImage: (ze, Ue) => {
        const it = new Image();
        return it.onload = Ue, it.onerror = Ue, it.src = ze, it;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (ze) => requestAnimationFrame(ze),
        cancelFrame: (ze) => cancelAnimationFrame(ze)
      },
      readState: () => rn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: q,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(ne.videoWidth > 0 && ne.videoHeight > 0)) return;
        const ze = Math.min(1, Dx / ne.videoWidth);
        Ae.width = Math.round(ne.videoWidth * ze), Ae.height = Math.round(ne.videoHeight * ze), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(ne, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, q();
      },
      onStickerCapture: () => {
        var ze;
        ke.videoWidth > 0 && ke.videoHeight > 0 && (Ie.width = ke.videoWidth, Ie.height = ke.videoHeight, (ze = Ie.getContext("2d")) == null || ze.drawImage(ke, 0, 0), Ie.__panoFrameIdx += 1, q());
      },
      onChange: () => {
        ve.playing = Te.playing, q();
      }
    });
    he = { playback: Te, video: ne, still: Ae, stickerVideo: ke, stickerStill: Ie, stickerSource: "" }, r.playback = he;
  }
  const X = () => {
    var at;
    const { playback: ne, still: ke, stickerStill: Ae } = he, Ie = Us(v, !!((at = e.flags) != null && at.collapsed), Hl(e)), Te = ne.source, ze = Ie ? dM(e) : null, Ue = rn(e), it = ne.follow({
      shown: Ie,
      sources: Ie ? uM(e) : [],
      state: Ue,
      sticker: ze,
      media: Ie ? fM(e, Ue) : {}
    });
    ((ze == null ? void 0 : ze.src) || "") !== he.stickerSource && (he.stickerSource = (ze == null ? void 0 : ze.src) || "", ei(Ae)), ne.source !== Te && (ei(ke), ke.__panoFrameIdx = 0), ve.playable = it, ve.playing = ne.playing;
  }, Se = () => {
    var ke, Ae;
    const ne = ((ke = i.ownOutputVideo) == null ? void 0 : ke.player) ?? null;
    ne && !Us(v, !!((Ae = e.flags) != null && Ae.collapsed)) && ne.pause(), a && (ve.playable = !!ne && !ne.failed(), ve.playing = !!(ne != null && ne.playing));
  }, fe = () => {
    var ne;
    he == null || he.playback.pause(), (ne = i.ownOutputVideo) == null || ne.player.pause();
  };
  let de = null;
  const te = (a ? Bw : yk)({
    readState: () => rn(e),
    publishLiveState: (ne) => {
      ne ? (de = ne, o.liveState = ne) : (o.liveState === de && (o.liveState = null), de = null), o.liveStateVersion += 1, o.parsedState = null, q();
    },
    commitState: (ne) => {
      var Ie, Te, ze, Ue;
      const ke = jn(e, "state_json");
      if (!ke) return;
      jh(e, ne.active);
      const Ae = Hh(e, ne, String(ke.value ?? ""));
      Ae !== null && (ke.value = Ae, (Ie = ke.callback) == null || Ie.call(ke, Ae), o.parsedState = null, (Te = e.setDirtyCanvas) == null || Te.call(e, !0, !0), (Ue = (ze = e.graph) == null ? void 0 : ze.setDirtyCanvas) == null || Ue.call(ze, !0, !0));
    },
    onChange: (ne) => Object.assign(ve, ne)
  }), oe = a ? d0(e, (ne = "sync", ke = null) => {
    var $t;
    if (!a || !e.graph || !te || te.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const jt = bt(e, "external-sticker");
      return te.apply({
        type: "sync-port",
        value: Rg(e, {
          pose: jt ? Hn(e, "pano_sticker_input_pose", ke) : null,
          handoff: bt(e, "sticker-handoff") ? Hn(e, "pano_sticker_handoff", ke) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((jt) => String((jt == null ? void 0 : jt.name) || "") === "sticker_image") : -1, Ie = Ae >= 0 ? (($t = e.getInputLink(Ae)) == null ? void 0 : $t.id) ?? null : null;
    if (Ie == null)
      return te.apply({ type: "sync-external", value: { connected: !1 } });
    if (!bt(e, "external-sticker")) return !1;
    const Te = Hn(e, "pano_sticker_input_pose", ke), ze = Array.isArray(Te) ? Te[0] : Te, Ue = String(Hn(e, "pano_sticker_input_state_hash", ke) ?? ""), it = r.view || { yaw: 0, pitch: 0 }, at = rn(e), St = (Array.isArray(at == null ? void 0 : at.stickers) ? at.stickers : []).find((jt) => String((jt == null ? void 0 : jt.id) || "") === "sticker_image_1"), ut = Ea(e, "sticker_image_1", null, { external: !0 }), Ot = ze && typeof ze == "object" ? ze : St || { yaw_deg: it.yaw, pitch_deg: it.pitch, hFOV_deg: 30, rot_deg: 0 };
    return te.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ie,
        stateHash: Ue,
        pose: Ot,
        imageWidth: Number((ut == null ? void 0 : ut.naturalWidth) || (ut == null ? void 0 : ut.width) || 0),
        imageHeight: Number((ut == null ? void 0 : ut.naturalHeight) || (ut == null ? void 0 : ut.height) || 0)
      }
    });
  }) : () => {
  };
  let I = 0;
  const W = async (ne) => {
    if (!a || !te || !En(ne)) return !1;
    fe();
    const ke = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Ie = { ...r.view || { yaw: 0, pitch: 0 } };
    I += 1, ve.importing = !0;
    const Te = Pi(e, `add:${ke}`, async () => {
      const ze = await fo(ne), Ue = await Qr(ne, {
        fetchApi: (it, at) => Xt.fetchApi(it, at)
      });
      return M(), te.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: ke,
          asset: Ue,
          imageWidth: ze.width,
          imageHeight: ze.height,
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
      I = Math.max(0, I - 1), ve.importing = I > 0, q();
    }
  };
  let N = null, ue = null, A = null, O = !1;
  const w = () => {
    var ne;
    return A && (clearTimeout(A), A = null), O ? (O = !1, ((ne = te == null ? void 0 : te.commitGesture) == null ? void 0 : ne.call(te)) ?? !1) : !1;
  }, M = () => {
    var Ie, Te, ze;
    const ne = w(), ke = (N == null ? void 0 : N.pointerId) ?? (ue == null ? void 0 : ue.pointerId);
    if (N = null, ue = null, ke != null) {
      try {
        (Ie = y.hasPointerCapture) != null && Ie.call(y, ke) && ((Te = y.releasePointerCapture) == null || Te.call(y, ke));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((ze = te == null ? void 0 : te.commitGesture) == null ? void 0 : ze.call(te)) ?? !1;
    return ne || Ae;
  }, ce = () => {
    var Ie, Te, ze;
    const ne = w(), ke = N == null ? void 0 : N.pointerId;
    if (N = null, ke != null) {
      try {
        (Ie = y.hasPointerCapture) != null && Ie.call(y, ke) && ((Te = y.releasePointerCapture) == null || Te.call(y, ke));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((ze = te == null ? void 0 : te.cancelGesture) == null ? void 0 : ze.call(te)) ?? !1;
    return ne || Ae;
  }, ye = () => M();
  te && o.flushers.add(ye);
  let D = null, b = !1;
  if (F && te)
    try {
      ad(), D = hu(l ? qk : a ? Gk : Dk, {
        model: ve,
        onAction: (ne) => {
          var Ie, Te, ze;
          if ((ne == null ? void 0 : ne.type) === "toggle-playback") {
            M(), he ? he.playback.toggle() : (Ie = i.ownOutputVideo) == null || Ie.player.toggle(), q();
            return;
          }
          if (fe(), (ne == null ? void 0 : ne.type) === "open-editor") {
            M(), a || (ve.aspectOpen = !1), (Te = r.openEditor) == null || Te.call(r);
            return;
          }
          if (a) {
            if ((ne == null ? void 0 : ne.type) === "add-image-file") {
              W(ne.file);
              return;
            }
            te.apply(ne) && q();
            return;
          }
          if ((ne == null ? void 0 : ne.type) === "toggle-aspect") {
            ve.aspectOpen = !ve.aspectOpen;
            return;
          }
          if ((ne == null ? void 0 : ne.type) === "close-aspect") {
            ve.aspectOpen = !1;
            return;
          }
          let ke = ne;
          if ((ne == null ? void 0 : ne.type) === "add-frame") {
            const Ue = r.view || { yaw: 0, pitch: 0, fov: kr };
            ke = {
              ...ne,
              ...pk(Ue, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((ne == null ? void 0 : ne.type) === "delete-frame") {
            const Ue = ai(rn(e));
            Ue && (r.view = e0(Ue, {
              width: y.width,
              height: y.height
            }));
          }
          const Ae = ((ze = r.cutoutFrame) == null ? void 0 : ze.safeRect) || null;
          ve.aspectOpen = !1, te.apply({ ...ke, safeRect: Ae }) && q();
        }
      }), D.mount(F), b = !0;
    } catch {
      D = null, b = !1;
    }
  const B = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    he && X(), q();
  }) : null;
  B == null || B.observe(v);
  const p = (ne) => {
    var Ae, Ie, Te;
    $.raf = 0, $.inTick = !0;
    let ke = !1;
    try {
      if (ke = h.stepInertia(ne), $.needsDraw || ke) {
        $.needsDraw = !1, he ? X() : Se();
        const ze = l ? hM(e, he) : null, Ue = ze ? ex(ze) : null, it = () => N0(e, rn(e)), at = ze && Us(v, !!((Ae = e.flags) != null && Ae.collapsed), Hl(e)) ? bM(e, Ue) : null;
        if (!((Ie = e.flags) != null && Ie.collapsed) && !Hl(e) ? _M(e, y, le, at) : le.release(), ve.viewUnavailable = le.failed, l) {
          const St = Q({ ...ze, display: vM(e, Ue) }, it);
          St && (ve.status = St);
        }
      }
    } finally {
      $.inTick = !1;
    }
    (ke || $.needsDraw) && !$.raf && ($.raf = requestAnimationFrame(p)), Lx() && (!r.debugLastTs || ne - r.debugLastTs > 1200) && (r.debugLastTs = ne, r.mode, zc(e), io(g), io(v), io(y), io(g.parentElement), io((Te = g.parentElement) == null ? void 0 : Te.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, h = yu({
    getView: () => (r.view || (r.view = { yaw: 0, pitch: 0, fov: kr }), r.view),
    setView: (ne) => {
      r.view = ne;
    },
    getViewportSize: () => {
      const ne = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(ne.width || y.clientWidth || 0)),
        h: Math.max(1, Number(ne.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const ne = ap();
      return {
        x: ne.invert_view_x ? -1 : 1,
        y: ne.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      q();
    }
  }), x = a ? v : g, E = (ne) => {
    const ke = y.getBoundingClientRect();
    return {
      x: (Number(ne.clientX) - ke.left) * (y.width / Math.max(1, ke.width)),
      y: (Number(ne.clientY) - ke.top) * (y.height / Math.max(1, ke.height))
    };
  }, j = (ne) => {
    var Ie, Te;
    if (!a || l || !d) return;
    const ke = rn(e), Ae = tp(
      Fc(ke, Oa(e)),
      String(((Ie = ke == null ? void 0 : ke.active) == null ? void 0 : Ie.selected_sticker_id) || ""),
      E(ne),
      Gc(e, y.width, y.height)
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
  y.addEventListener("pointerdown", (ne) => {
    var it, at, St, ut, Ot, Ye, $t, jt, tn, _n, Kt;
    if (!Nn(ne, x) || ne.button !== 0) return;
    if (!a) {
      const Ft = ai(rn(e)), Re = r.cutoutFrame;
      if (!Ft) {
        (it = g.focus) == null || it.call(g, { preventScroll: !0 }), (at = y.setPointerCapture) == null || at.call(y, ne.pointerId), y.style.cursor = "grabbing", h.startDrag(ne.clientX, ne.clientY, ne.pointerId);
        return;
      }
      if (Ft.locked === !0 || !Re || !te) return;
      const He = E(ne);
      let Ke;
      if (ne.shiftKey) {
        const Mt = n0({
          frame: Re,
          point: He,
          startRollDeg: Number(Ft.roll_deg ?? Ft.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Mt) return;
        Ke = { kind: "roll", pointerId: ne.pointerId, rollGesture: Mt };
      } else {
        const Mt = ((St = rn(e)) == null ? void 0 : St.ui_settings) || ap();
        Ke = {
          kind: "pan",
          pointerId: ne.pointerId,
          startPoint: He,
          startShot: { ...Ft },
          focalPx: ui(Re, Ft),
          invertX: Mt.invert_view_x === !0,
          invertY: Mt.invert_view_y === !0
        };
      }
      M(), (ut = g.focus) == null || ut.call(g, { preventScroll: !0 }), (Ot = y.setPointerCapture) == null || Ot.call(y, ne.pointerId), y.style.cursor = "grabbing", te.beginGesture(), N = Ke;
      return;
    }
    if (!d) return;
    const ke = E(ne), Ae = rn(e), Ie = String(((Ye = Ae == null ? void 0 : Ae.active) == null ? void 0 : Ye.selected_sticker_id) || ""), Te = Gc(e, y.width, y.height);
    ($t = g.focus) == null || $t.call(g, { preventScroll: !0 });
    const ze = () => tp(Fc(Ae, Oa(e)), Ie, ke, Te);
    let Ue = l ? null : ze();
    if (Ue && (he != null && he.playback.playing) && (fe(), Ue = ze()), Ue && te) {
      if (h.stopMotion(), M(), String(((jt = Ue.item) == null ? void 0 : jt.id) || "") !== Ie && te.apply({ type: "select-sticker", id: Ue.item.id }), ((tn = Ue.item) == null ? void 0 : tn.locked) === !0) {
        q();
        return;
      }
      const Ft = ke, Re = Ue.geometry.center;
      ue = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: ne.pointerId,
        startPoint: Ft,
        startCenter: { ...Re },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(Ft.x - Re.x, Ft.y - Re.y)),
        startAngle: Math.atan2(Ft.y - Re.y, Ft.x - Re.x),
        projection: Te
      }, te.beginGesture(), (_n = y.setPointerCapture) == null || _n.call(y, ne.pointerId), y.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, q();
      return;
    }
    (Kt = y.setPointerCapture) == null || Kt.call(y, ne.pointerId), y.style.cursor = "grabbing", h.startDrag(ne.clientX, ne.clientY, ne.pointerId);
  }), y.addEventListener("pointermove", (ne) => {
    if (!a) {
      if (!N) {
        if (!h.state.drag.active) return;
        Nn(ne, x), h.moveDrag(ne.clientX, ne.clientY, "pano");
        return;
      }
      if (N.pointerId !== ne.pointerId || !te) return;
      if (Nn(ne, x), N.kind === "pan") {
        const Ae = E(ne);
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
      const ke = r0(N.rollGesture, E(ne), ne);
      if (!ke) return;
      N.rollGesture = ke.gesture, te.updateGesture({ type: "set-roll", value: ke.rollDeg });
      return;
    }
    if (!ue && !h.state.drag.active) {
      j(ne);
      return;
    }
    if (ue) {
      if (ue.pointerId !== ne.pointerId || !te) return;
      Nn(ne, x);
      const ke = E(ne);
      let Ae = ue.startSticker;
      if (ue.kind === "move")
        Ae = ax(
          ue.startSticker,
          {
            x: ue.startCenter.x + ke.x - ue.startPoint.x,
            y: ue.startCenter.y + ke.y - ue.startPoint.y
          },
          ue.projection
        );
      else if (ue.kind === "scale") {
        const Ie = Math.hypot(ke.x - ue.startCenter.x, ke.y - ue.startCenter.y);
        Ae = lx(ue.startSticker, ue.startDistance, Ie);
      } else if (ue.kind === "rotate") {
        const Ie = Math.atan2(ke.y - ue.startCenter.y, ke.x - ue.startCenter.x);
        Ae = cx(ue.startSticker, ue.startAngle, Ie, ne.shiftKey === !0);
      }
      te.updateGesture({ type: "set-transform", value: Ae }), q();
      return;
    }
    !d || !h.state.drag.active || (Nn(ne, x), h.moveDrag(ne.clientX, ne.clientY, "pano"));
  });
  const J = () => {
    var ke, Ae;
    if (!N && !ue) {
      if (!h.state.drag.active) return;
      h.endDrag(), y.style.cursor = "grab", q();
      return;
    }
    if (!te) return;
    const ne = (N == null ? void 0 : N.pointerId) ?? (ue == null ? void 0 : ue.pointerId);
    N = null, ue = null;
    try {
      (ke = y.hasPointerCapture) != null && ke.call(y, ne) && ((Ae = y.releasePointerCapture) == null || Ae.call(y, ne));
    } catch {
    }
    te.cancelGesture(), y.style.cursor = "grab", q();
  }, ae = (ne, ke = !1) => {
    var Ae, Ie, Te, ze;
    if (!a) {
      if (!N) {
        if (!h.state.drag.active) return;
        Nn(ne, x), (Ae = y.releasePointerCapture) == null || Ae.call(y, ne.pointerId), y.style.cursor = "grab", h.endDrag(), q();
        return;
      }
      if (N.pointerId !== ne.pointerId || !te) return;
      Nn(ne, x), N = null, (Ie = y.releasePointerCapture) == null || Ie.call(y, ne.pointerId), y.style.cursor = "grab", ke ? te.cancelGesture() : te.commitGesture(), j(ne), q();
      return;
    }
    if (ue) {
      if (ue.pointerId !== ne.pointerId || !te) return;
      Nn(ne, x), ue = null, (Te = y.releasePointerCapture) == null || Te.call(y, ne.pointerId), y.style.cursor = "grab", ke ? te.cancelGesture() : te.commitGesture(), q();
      return;
    }
    !d || !h.state.drag.active || (Nn(ne, x), (ze = y.releasePointerCapture) == null || ze.call(y, ne.pointerId), y.style.cursor = "grab", h.endDrag(), q());
  };
  y.addEventListener("pointerup", ae), y.addEventListener("pointercancel", (ne) => ae(ne, !0)), y.addEventListener("lostpointercapture", J), y.addEventListener("pointerleave", (ne) => {
    !a && N || ue || h.state.drag.active && ae(ne);
  });
  const V = (ne) => {
    const ke = document.activeElement;
    if (ke !== g && !g.contains(ke)) return;
    if (ne.key === "Escape" && (N || ue) && te) {
      J(), Kc(ne);
      return;
    }
    if (!a || l || ne.key !== "Delete" && ne.key !== "Backspace" || !te) return;
    const Ae = ne.target, Ie = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Ie === "INPUT" || Ie === "TEXTAREA" || Ae != null && Ae.isContentEditable || ve.canDelete === !0 && (fe(), M(), te.apply({ type: "delete-selected" }) && q(), Kc(ne));
  };
  window.addEventListener("keydown", V, !0);
  const re = Ox({
    requestFrame: (ne) => requestAnimationFrame(ne),
    cancelFrame: (ne) => cancelAnimationFrame(ne),
    restore: (ne) => xM(ne)
  }), k = (ne) => {
    var Ae, Ie, Te, ze, Ue, it;
    if (!Nn(ne, x)) return;
    if (!a) {
      const at = ai(rn(e));
      if (at && at.locked !== !0 && te) {
        const St = oa(ne);
        St !== 0 && (O || (M(), te.beginGesture(), O = !0), te.updateGesture({
          type: "step-fov",
          direction: St
        }) ? (A && clearTimeout(A), A = setTimeout(w, 180), q()) : te.hasGestureChanges() || (te.cancelGesture(), O = !1));
      } else if (!at) {
        const St = pp();
        h.applyWheelEvent(ne) && q(), re.schedule(St);
      }
      (Ae = ne.preventDefault) == null || Ae.call(ne), (Ie = ne.stopPropagation) == null || Ie.call(ne), (Te = ne.stopImmediatePropagation) == null || Te.call(ne);
      return;
    }
    if (!d) return;
    const ke = pp();
    h.applyWheelEvent(ne) && q(), (ze = ne.preventDefault) == null || ze.call(ne), (Ue = ne.stopPropagation) == null || Ue.call(ne), (it = ne.stopImmediatePropagation) == null || it.call(ne), re.schedule(ke);
  }, Y = a ? [v, y] : [v];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ne) => {
    Y.forEach((ke) => ke.addEventListener(ne, k, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ne) => {
    y.addEventListener(ne, (ke) => Nn(ke, x)), v.addEventListener(ne, (ke) => Nn(ke, x));
  });
  const ie = jn(e, "state_json");
  let _e = null, Me = null;
  ie && !ie.__panoPreviewPatchedCb && (_e = ie.callback, Me = (ne) => {
    const ke = _e ? _e(ne) : void 0;
    return q(), ke;
  }, ie.callback = Me, ie.__panoPreviewPatchedCb = Me);
  const Ce = jn(e, "bg_color");
  let xe = null, be = null;
  Ce && !Ce.__panoPreviewPatchedCb && (xe = Ce.callback, be = (ne) => {
    const ke = xe ? xe(ne) : void 0;
    return q(), ke;
  }, Ce.callback = be, Ce.__panoPreviewPatchedCb = be);
  const R = l ? jn(e, "output_size") : null, z = R == null ? void 0 : R.callback, T = R ? (ne) => {
    const ke = z ? z(ne) : void 0;
    return q(), ke;
  } : null;
  R && (R.callback = T);
  const K = e.onRemoved, C = e.onResize, H = e.onExecuted, L = e.onDragOver, S = e.onDragDrop;
  let Z = null;
  const se = () => {
    a && (ve.dropActive = !0, Z && clearTimeout(Z), Z = setTimeout(() => {
      Z = null, ve.dropActive = !1;
    }, 140));
  }, ge = c ? function(ne) {
    return (L ? L.apply(this, arguments) : !1) === !0 ? !0 : cd(ne == null ? void 0 : ne.dataTransfer) ? (se(), !0) : !1;
  } : null, pe = c ? function(ne) {
    var Ie;
    if ((S ? S.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Ie = ne == null ? void 0 : ne.dataTransfer) == null ? void 0 : Ie.files) || []).find((Te) => En(Te));
    return Ae ? (Z && clearTimeout(Z), Z = null, ve.dropActive = !1, W(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = ge, e.onDragDrop = pe);
  const we = c ? Ax(g, {
    onActive: (ne) => {
      if (ne) {
        se();
        return;
      }
      Z && clearTimeout(Z), Z = null, ve.dropActive = !1;
    },
    onDrop: (ne) => {
      W(ne);
    }
  }) : () => {
  }, Ee = function(ne) {
    i.outputFromRun = !0;
    const ke = A0(e, ne);
    Fr(e, ke ? "executed" : "sync", ne), q();
    const Ae = H ? H.apply(this, arguments) : void 0;
    return po(e), Ae;
  };
  e.onExecuted = Ee;
  const Le = e.onConnectionsChange, $e = function(ne, ke) {
    const Ae = Kf(e, ne, ke, [...Bu, ...Yu]), Ie = Kf(e, ne, ke, Tn), Te = arguments, ze = Le ? Le.apply(this, Te) : void 0, Ue = () => {
      $.destroyed || (Ie && tM(e), Ae && Fr(e, "connection-change"), po(e), q());
    };
    return Ue(), queueMicrotask(Ue), ze;
  };
  e.onConnectionsChange = $e;
  const Ge = function() {
    const ne = C ? C.apply(this, arguments) : void 0;
    return lt(this).userResized = !0, q(), ne;
  };
  e.onResize = Ge;
  const We = function() {
    return ee(), Hc.unregister(this), K ? K.apply(this, arguments) : void 0;
  };
  e.onRemoved = We;
  const ee = () => {
    var ne, ke, Ae, Ie, Te, ze, Ue;
    $.destroyed = !0, (ne = B == null ? void 0 : B.disconnect) == null || ne.call(B), a ? M() : ce(), y.removeEventListener("lostpointercapture", J), we(), U(), window.removeEventListener("keydown", V, !0), o.flushers.delete(ye), (ke = te == null ? void 0 : te.destroy) == null || ke.call(te), (Ae = D == null ? void 0 : D.unmount) == null || Ae.call(D), he && (he.playback.dispose(), he.video.remove(), he.stickerVideo.remove(), ei(he.still), ei(he.stickerStill), r.playback === he && (r.playback = null)), le.dispose(), r.scene = null, (Te = (Ie = r.rasterCache) == null ? void 0 : Ie.dispose) == null || Te.call(Ie), r.rasterCache = null, r.rasterReady = null, r.paintEngine = null, r.paintState = null, r.paintRevision = null, oe(), re.dispose(), Z && clearTimeout(Z), Z = null, ud.disposeOwner(e), Ri(e), pd(e), $.raf && cancelAnimationFrame($.raf), $.raf = 0, ((ze = r.cutout) == null ? void 0 : ze.session) === te && (r.cutout = null), ((Ue = r.stickers) == null ? void 0 : Ue.session) === te && (r.stickers = null), r.cutoutState = null, r.stickersState = null, r.cutoutFrame = null, r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.dom = null, r.restore = null, e.onResize === Ge && (e.onResize = C), e.onExecuted === Ee && (e.onExecuted = H), e.onConnectionsChange === $e && (e.onConnectionsChange = Le), Me && (ie == null ? void 0 : ie.callback) === Me && (ie.callback = _e), Me && (ie == null ? void 0 : ie.__panoPreviewPatchedCb) === Me && delete ie.__panoPreviewPatchedCb, be && (Ce == null ? void 0 : Ce.callback) === be && (Ce.callback = xe), be && (Ce == null ? void 0 : Ce.__panoPreviewPatchedCb) === be && delete Ce.__panoPreviewPatchedCb, T && R.callback === T && (R.callback = z), e.onDragOver === ge && (e.onDragOver = L), e.onDragDrop === pe && (e.onDragDrop = S), e.onRemoved === We && (e.onRemoved = K);
  };
  r.restore = ee, r.cutout = te && b && !a ? { session: te, model: ve } : null, r.stickers = te && b && a ? { session: te, model: ve } : null, r.dom = {
    widget: P,
    root: g,
    canvas: y,
    requestDraw: q,
    state: $,
    emptyHintEl: G,
    nodeSurface: r.cutout
  }, Hc.register(e), e.graph && Fr(e, "attach"), q();
}
function hp(e, t = {}) {
  S0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function gp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (v0(e) && !n) {
    dd(e);
    return;
  }
  S0(e).attach(t);
}
function EM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function OM(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(n), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let m = f > 0 ? Math.min(1, u / f) : 1;
  return r && l > 0 && c > 0 && (m = Math.min(m, r.width * o / l, r.height * o / c)), {
    width: Math.max(1, Math.round(l * m)),
    height: Math.max(1, Math.round(c * m))
  };
}
function FM({
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
    const _ = l();
    return _ === a || (a = _, i(_)), _;
  }, d = () => c();
  return (m = t == null ? void 0 : t.addEventListener) == null || m.call(t, "fullscreenchange", d), c(), { toggle: async () => {
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
const TM = { class: "pano-preview-node-surface" }, DM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Oe(), De("div", TM, [
      Be(Ht, {
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
      e.model.viewUnavailable ? (Oe(), bn(rl, { key: 0 })) : tt("", !0)
    ]));
  }
}, As = 140, LM = 180, yp = 40, ql = 10;
function bp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function vp(e, t) {
  const n = bp(e), r = bp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Sp(e) {
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
function Vi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Vi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Sp({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Sp(e);
}
function C0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function RM(e) {
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
function Wc(e) {
  var i;
  const t = (i = Gn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (vp(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (vp(o, n)) return t[o];
  return null;
}
function VM(e) {
  var r, i;
  const t = Wc(e == null ? void 0 : e.id), n = [
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
function $M(e, t = "erp_image") {
  var m, _, g, v, y, G, U;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((F) => String((F == null ? void 0 : F.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((F, P) => String((F == null ? void 0 : F.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(P))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (_ = (m = Gn) == null ? void 0 : m.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : g.call(_, o), a = Wc(o), l = Wc(e == null ? void 0 : e.id), c = [
    (v = l == null ? void 0 : l.ui) == null ? void 0 : v.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const F of c)
    if (Array.isArray(F))
      for (const P of F) {
        const $ = Vi(P);
        if ($) return $;
      }
  let d = [];
  try {
    d = typeof ((G = Gn) == null ? void 0 : G.getNodeImageUrls) == "function" ? Gn.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const F of d) {
      const P = Vi(F);
      if (P) return P;
    }
  if (s) {
    const F = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const P of F) {
      const $ = Vi(P);
      if ($) return $;
    }
  }
  const u = (U = s == null ? void 0 : s.widgets) == null ? void 0 : U.find((F) => String((F == null ? void 0 : F.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? Xt.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Xl(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function _p(e, t, n, r, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !C0(o) || n <= 1 || r <= 1) {
    Xl(t, n, r);
    return;
  }
  if (s.failed) {
    Xl(t, n, r);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: n,
    height: r,
    camera: Sa(i, n, r),
    background: { media: o, revision: RM(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, n, r) : Xl(t, n, r);
}
function wp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class zM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = yg(() => this.requestDraw()), this.controller = yu({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Et(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Fe(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Fe(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
      if (this.widget = Aa(Vc(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(As, Number(o.minHeight || 0)),
            minWidth: Math.max(LM, Number(o.minWidth || 0))
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
      return ad(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Bi({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = FM({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = hu(DM, {
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Wm(n), t.addEventListener("pointerdown", (o) => {
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
      EM(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !C0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Us(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = Gn.canvas) != null && r.graph) || this.node.graph === Gn.canvas.graph);
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
      return wp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const o = oM(this, n, r, i), s = t.getLegacyPreviewRect();
      if (!o || !wp(o.x, o.y, s))
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
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - ql * 2), n = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - yp - ql);
    return { x: ql, y: yp, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), _p(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? gg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = OM(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = VM(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = rs(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const n = $M(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), _p(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, s, a, l, c, d, u, f, m, _, g, v, y;
    if (((n = Ng(this.node)) == null ? void 0 : n.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, yr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (m = this.root) == null ? void 0 : m.remove) == null || _.call(m);
    } catch {
    }
    try {
      g0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (v = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : v.find) == null ? void 0 : y.call(v, (G) => (G == null ? void 0 : G.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), yr(this.node).runtime = null;
  }
}
function jM(e, t = {}) {
  if (!e || yr(e).runtime) return;
  const n = new zM(e, t);
  yr(e).runtime = n, n.attach();
}
function I0(e, t, n) {
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
function md(e) {
  return !!(e != null && e.prototype);
}
function Jo(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function HM(e, t = {}) {
  md(e) || jM(e, {
    ...t,
    onOpen: Jo(e, t.onOpen)
  });
}
function GM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!md(e)) {
    gp(e, {
      ...r,
      onOpen: Jo(e, t.onOpen)
    });
    return;
  }
  I0(e, "stickers_node_preview", (i) => {
    gp(i, {
      ...r,
      onOpen: Jo(i, t.onOpen)
    });
  });
}
function KM(e, t = {}) {
  if (!md(e)) {
    hp(e, {
      ...t,
      onOpen: Jo(e, t.onOpen)
    });
    return;
  }
  I0(e, "cutout_preview", (n) => {
    hp(n, {
      ...t,
      onOpen: Jo(n, t.onOpen)
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
function kp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function WM({ requestFrame: e, cancelFrame: t, tasks: n }) {
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
}), UM = new Set(Object.values(ot));
function BM({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (v) {
      i(v);
    }
  }
  function m() {
    !o && !s && !a && (o = e(_));
  }
  function _(g) {
    o = 0, s = !0;
    try {
      const v = c;
      c = /* @__PURE__ */ new Map();
      for (const G of v.values()) f(() => G(g));
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
      if (!UM.has(g)) throw new Error(`Unknown draw reason: ${g}`);
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
const YM = { class: "pano-floating-right" }, qM = {
  key: 0,
  class: "pano-floating-space"
}, XM = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, JM = ["data-settled"], ZM = ["data-ready", "data-settled"], QM = ["aria-label", "data-tip"], eP = {
  key: 1,
  class: "pano-camera-preview-label"
}, tP = {
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
    return (t, n) => (Oe(), De(qe, null, [
      Ne("div", YM, [
        e.space ? vr((Oe(), De("div", qM, [
          Ne("div", XM, [
            (Oe(!0), De(qe, null, mt(e.space.modes, (r) => (Oe(), bn(Ht, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(Ht, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [ci, e.space.visible]
        ]) : tt("", !0),
        (Oe(!0), De(qe, null, mt(e.buttons, (r) => (Oe(), bn(Ht, {
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
          e.previewToggle.visible ? (Oe(), De("button", {
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
          ], 8, QM)) : tt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Oe(), De("div", eP, Xe(e.preview.label || "Preview unavailable"), 1)) : tt("", !0)
        ], 14, ZM)
      ], 8, JM), [
        [ci, e.preview.visible]
      ])
    ], 64));
  }
}, nP = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, rP = ["y2", "transform"], iP = ["transform"], oP = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = nt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => vr((Oe(), De("div", {
      class: st(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Oe(), De("svg", nP, [
        o[1] || (o[1] = Ne("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Oe(!0), De(qe, null, mt(Je(n), (s) => (Oe(), De("line", {
          key: s,
          class: st(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, rP))), 128)),
        Ne("g", { transform: r.value }, [...o[0] || (o[0] = [
          Ne("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, iP),
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
}, sP = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Oe(), De("div", {
      class: st(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(o0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(Ht, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(oP, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, aP = ["aria-label"], lP = { class: "pano-canvas-confirm-title" }, cP = { class: "pano-canvas-confirm-text" }, uP = { class: "pano-canvas-confirm-actions" }, dP = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, fP = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Rt(null), r = /* @__PURE__ */ Rt(null);
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
      const f = o(), m = r.value;
      if (!f.length) {
        u.preventDefault(), (y = m == null ? void 0 : m.focus) == null || y.call(m);
        return;
      }
      const _ = f[0], g = f[f.length - 1], v = document.activeElement;
      if (u.shiftKey) {
        (v === _ || v === m || !(m != null && m.contains(v))) && (u.preventDefault(), g.focus());
        return;
      }
      (v === g || !(m != null && m.contains(v))) && (u.preventDefault(), _.focus());
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
    }, { immediate: !0 }), ts(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Oe(), De("div", {
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
        Ne("div", lP, Xe(e.model.title), 1),
        Ne("div", cP, Xe(e.model.text), 1),
        Ne("div", uP, [
          f[0] || (f[0] = Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ne("button", dP, Xe(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, aP)
    ], 512)) : tt("", !0);
  }
}, pP = ["data-paint-pane"], mP = ["hidden"], hP = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], gP = ["aria-pressed", "disabled"], yP = ["hidden"], bP = { class: "pano-paint-color-pop-head" }, vP = { class: "pano-paint-color-field" }, SP = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, _P = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, wP = { class: "pano-paint-color-field" }, kP = { class: "pano-paint-alpha-wrap" }, xP = ["value"], MP = { "data-paint-alpha-value": "" }, PP = ["hidden"], NP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, AP = ["data-paint-history-index", "aria-label", "disabled"], CP = ["data-paint-footer"], IP = ["data-paint-group"], EP = ["hidden"], OP = ["value", "disabled"], FP = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, TP = ["hidden"], DP = {
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
    return (r, i) => (Oe(), De("div", {
      class: st(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Oe(!0), De(qe, null, mt(e.panes, (o) => {
        var s;
        return Oe(), De("div", {
          key: o.key,
          class: st(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Oe(), De("div", {
            key: 0,
            class: st(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Oe(!0), De(qe, null, mt(e.paintSwatches, (a) => (Oe(), De("button", {
              key: a.id,
              class: st(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: yt(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, hP))), 128)),
            Ne("button", {
              class: st(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: yt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, gP),
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
              Ne("div", bP, [
                Ne("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: yt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", vP, [
                Ne("div", SP, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: yt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", _P, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: yt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ne("label", wP, [
                i[1] || (i[1] = Ne("span", null, "Opacity", -1)),
                Ne("div", kP, [
                  Ne("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, xP),
                  Ne("span", MP, Xe(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ne("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ne("div", NP, [
                  (Oe(!0), De(qe, null, mt(e.state.historyEntries || [], (a) => (Oe(), De("button", {
                    key: a.index,
                    class: st(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: yt(n(a.color))
                  }, null, 14, AP))), 128))
                ])
              ], 8, PP)
            ], 12, yP)
          ], 10, mP)) : tt("", !0),
          Ne("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ne("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Oe(!0), De(qe, null, mt(o.tools, (a) => {
                var l;
                return Oe(), bn(Ht, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, IP),
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
              }, null, 12, OP),
              Ne("span", FP, Xe(e.state.sizeText || "10"), 1)
            ], 10, EP),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(Ht, {
                icon: Je(je).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, TP)
          ], 8, CP)
        ], 10, pP);
      }), 128))
    ], 2));
  }
}, LP = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Rt(null), r = /* @__PURE__ */ Rt(null), i = /* @__PURE__ */ Rt(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Oe(), De(qe, null, [
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
}, RP = ["aria-label"], VP = ["data-tip", "aria-pressed"], $P = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = nt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => (Oe(), De("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: yt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (Oe(!0), De(qe, null, mt(e.buttons, (o) => (Oe(), De("button", fr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), Xe(o.label), 17, VP))), 128))
    ], 12, RP));
  }
}, zP = {
  key: 0,
  class: "pano-cutout-menu"
}, jP = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, HP = ["data-aspect"], GP = ["data-action", "aria-label", "data-tip", "disabled"], KP = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Oe(), De("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: yt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Oe(!0), De(qe, null, mt(e.model.items || [], (r) => (Oe(), De(qe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Oe(), De("div", zP, [
          Ne("button", jP, [
            Be(xt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: st(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Oe(!0), De(qe, null, mt(r.choices || [], (i) => (Oe(), De("button", {
              key: i.value,
              class: st(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, Xe(i.label), 11, HP))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (Oe(), bn($P, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (Oe(), De("button", {
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
        ], 8, GP))
      ], 64))), 128))
    ], 4));
  }
}, WP = {
  key: 0,
  class: "pano-easing"
}, UP = { class: "pano-section-title" }, BP = { class: "pano-easing-range" }, YP = { class: "pano-easing-modes" }, qP = ["aria-pressed", "onClick"], XP = ["viewBox"], JP = ["x", "y"], ZP = ["x1", "y1", "x2", "y2"], QP = ["d"], eN = ["x1", "y1", "x2", "y2"], tN = ["x1", "y1", "x2", "y2"], nN = ["cx", "cy"], rN = ["cx", "cy"], iN = { class: "pano-easing-note" }, cr = 132, Xr = 14, oN = {
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
    ], o = /* @__PURE__ */ Rt(null), s = nt(() => {
      var _;
      return Array.isArray((_ = n.model) == null ? void 0 : _.easing) ? n.model.easing : null;
    }), a = (_) => Xr + _ * cr, l = (_) => Xr + (1 - _) * cr, c = nt(() => {
      var G;
      if (((G = n.model) == null ? void 0 : G.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [_, g, v, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(_)} ${l(g)} ${a(v)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = nt(() => s.value ? s.value.map((_) => _.toFixed(2)).join(", ") : "");
    function u(_) {
      var g;
      return JSON.stringify(_.easing) === JSON.stringify((g = n.model) == null ? void 0 : g.easing);
    }
    function f(_, g) {
      r("timeline", { type: "easing", easing: _, commit: g });
    }
    function m(_, g) {
      var F;
      if (_.button !== 0 || !s.value) return;
      const v = _.currentTarget;
      (F = v.setPointerCapture) == null || F.call(v, _.pointerId);
      let y = null;
      const G = (P) => {
        const $ = o.value.getBoundingClientRect(), Q = $.width / (cr + Xr * 2), q = ((P.clientX - $.left) / Q - Xr) / cr, le = 1 - ((P.clientY - $.top) / Q - Xr) / cr;
        y = [...y || s.value], y[g] = Math.round(Math.min(1, Math.max(0, q)) * 100) / 100, y[g + 1] = Math.round(Math.min(1, Math.max(0, le)) * 100) / 100, f(y, !1);
      }, U = () => {
        v.removeEventListener("pointermove", G), v.removeEventListener("pointerup", U), v.removeEventListener("pointercancel", U), y && f(y, !0);
      };
      v.addEventListener("pointermove", G), v.addEventListener("pointerup", U), v.addEventListener("pointercancel", U);
    }
    return (_, g) => e.model ? (Oe(), De("div", WP, [
      Ne("div", UP, [
        g[2] || (g[2] = Ne("span", null, "Easing", -1)),
        Ne("span", BP, Xe(e.model.label), 1)
      ]),
      Ne("div", YP, [
        (Oe(), De(qe, null, mt(i, (v) => Ne("button", {
          key: v.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(v) ? "true" : "false",
          onClick: (y) => f(v.easing, !0)
        }, Xe(v.label), 9, qP)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Oe(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${cr + Xr * 2} ${cr + Xr * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ne("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: cr,
          height: cr
        }, null, 8, JP),
        Ne("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, ZP),
        Ne("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, QP),
        s.value ? (Oe(), De(qe, { key: 0 }, [
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, eN),
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, tN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (v) => m(v, 0))
          }, null, 40, nN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (v) => m(v, 2))
          }, null, 40, rN)
        ], 64)) : tt("", !0)
      ], 8, XP)) : tt("", !0),
      Ne("div", iN, [
        e.model.mixed ? (Oe(), De(qe, { key: 0 }, [
          ao("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Oe(), De(qe, { key: 1 }, [
          ao("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Oe(), De(qe, { key: 2 }, [
          ao("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Oe(), De(qe, { key: 3 }, [
          ao("cubic-bezier(" + Xe(d.value) + ")", 1)
        ], 64)) : tt("", !0)
      ])
    ])) : tt("", !0);
  }
}, sN = ["title"], aN = { class: "pano-ui-row" }, lN = ["disabled"], cN = { class: "pano-upstream-lanes" }, uN = ["data-action", "data-lane", "disabled", "title"], dN = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, n) => e.model ? (Oe(), De("div", {
      key: 0,
      class: "pano-upstream-origin",
      title: e.model.note || null
    }, [
      Ne("div", aN, [
        n[0] || (n[0] = Ne("label", null, "Revert to upstream", -1)),
        Ne("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, lN)
      ]),
      Ne("div", cN, [
        (Oe(!0), De(qe, null, mt(e.model.lanes, (r) => (Oe(), De("button", {
          key: r.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": r.action,
          "data-lane": r.name,
          disabled: r.disabled,
          title: `Revert ${r.label} to upstream`
        }, Xe(r.label), 9, uN))), 128))
      ])
    ], 8, sN)) : tt("", !0);
  }
}, fN = {
  class: "pano-side",
  "data-side": ""
}, pN = { class: "pano-side-head" }, mN = { class: "pano-side-title" }, hN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, gN = {
  key: 0,
  class: "pano-side-scroll"
}, yN = { class: "pano-inspector" }, bN = { class: "pano-ui-row pano-coverage-row" }, vN = ["data-selected"], SN = ["aria-pressed", "disabled"], _N = ["aria-pressed", "disabled"], wN = {
  key: 0,
  class: "pano-section-title"
}, kN = { class: "meta" }, xN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, MN = {
  class: "pano-picker",
  "data-picker": "selection"
}, PN = ["disabled"], NN = { class: "pano-picker-label" }, AN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, CN = ["hidden"], IN = ["data-selection-id"], EN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, ON = {
  key: 2,
  class: "pano-state-actions"
}, FN = ["disabled"], TN = ["data-key"], DN = { class: "pano-field-group-values" }, LN = ["title", "onPointerdown"], RN = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], VN = ["data-key"], $N = ["min", "max", "step", "value", "disabled", "data-param-key"], zN = ["min", "max", "step", "value", "disabled", "data-param-key"], jN = ["open"], HN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, GN = { class: "pano-ui-settings-body" }, KN = { class: "pano-ui-row" }, WN = ["data-selected"], UN = ["aria-pressed"], BN = ["aria-pressed"], YN = { class: "pano-ui-row" }, qN = ["data-selected"], XN = ["aria-pressed"], JN = ["aria-pressed"], ZN = {
  key: 1,
  class: "pano-side-footer"
}, QN = ["data-action"], e2 = {
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
      const f = c.currentTarget, m = c.clientX, _ = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const v = (G) => {
        if (!g && Math.abs(G.clientX - m) < 3) return;
        g = !0;
        const U = _ + (G.clientX - m) * d.drag * (G.shiftKey ? 0.1 : 1);
        u.value = String(Number(U.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", v), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", v), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, m, _, g, v;
      return Oe(), De("div", fN, [
        Ne("div", pN, [
          Ne("div", mN, [
            Ne("span", hN, [
              Be(xt, {
                icon: Je(je).globe
              }, null, 8, ["icon"])
            ]),
            Ne("span", null, Xe(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Ne("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Ne("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Oe(), De("div", gN, [
          Ne("div", yN, [
            d[9] || (d[9] = Ne("div", { class: "pano-section-title" }, [
              Ne("span", null, "Scene")
            ], -1)),
            Ne("div", bN, [
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
                }, "360", 8, SN),
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, _N)
              ], 8, vN)
            ]),
            e.model.transformTitle !== !1 ? (Oe(), De("div", wN, [
              d[3] || (d[3] = Ne("span", null, "Transform", -1)),
              Ne("span", kN, Xe(((v = e.model.upstream) == null ? void 0 : v.origin) || ""), 1)
            ])) : tt("", !0),
            e.model.selectionPicker ? (Oe(), De("div", xN, [
              Ne("label", null, Xe(e.model.selectionPicker.label), 1),
              Ne("div", MN, [
                Ne("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ne("span", NN, [
                    e.model.selectionPicker.currentIcon ? (Oe(), De("span", AN, [
                      Be(xt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : tt("", !0),
                    Ne("span", null, Xe(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Ne("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, PN),
                Ne("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Oe(!0), De(qe, null, mt(e.model.selectionPicker.items || [], (y) => (Oe(), De("button", {
                    key: y.id,
                    type: "button",
                    class: st(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Oe(), De("span", EN, [
                      Be(xt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : tt("", !0),
                    Ne("span", null, Xe(y.label), 1)
                  ], 10, IN))), 128))
                ], 8, CN)
              ])
            ])) : tt("", !0),
            e.model.copyStateButton ? (Oe(), De("div", ON, [
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
              ], 8, FN)
            ])) : tt("", !0),
            Ne("div", {
              class: st(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Oe(!0), De(qe, { key: 0 }, mt(e.model.notes, (y) => (Oe(), De("div", {
                key: y,
                class: "pano-param-note"
              }, Xe(y), 1))), 128)) : (Oe(!0), De(qe, { key: 1 }, mt(e.model.rows || [], (y) => (Oe(), De(qe, {
                key: y.key
              }, [
                y.grouped ? (Oe(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Ne("label", null, Xe(y.label), 1),
                  Ne("div", DN, [
                    (Oe(!0), De(qe, null, mt(y.fields, (G) => (Oe(), De("div", {
                      key: G.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: st(["pano-axis", { disabled: s(G, e.model) }]),
                        title: G.label,
                        onPointerdown: (U) => l(U, G)
                      }, Xe(G.short), 43, LN),
                      Ne("input", {
                        ref_for: !0,
                        ref: (U) => {
                          a[G.key] = U;
                        },
                        type: "number",
                        min: G.min,
                        max: G.max,
                        step: G.step,
                        value: G.displayValue,
                        disabled: s(G, e.model),
                        "aria-label": `${y.label} ${G.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": G.key
                      }, null, 8, RN)
                    ]))), 128))
                  ])
                ], 8, TN)) : (Oe(), De("div", {
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
                  }, null, 12, $N),
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
                  }, null, 8, zN)
                ], 8, VN))
              ], 64))), 128))
            ], 2),
            Be(dN, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Be(oN, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => r("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Oe(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                d[5] || (d[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", HN, [
                  Be(xt, {
                    icon: Je(je).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ne("div", GN, [
                Ne("div", KN, [
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
                    }, "Normal", 8, UN),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, BN)
                  ], 8, WN)
                ]),
                Ne("div", YN, [
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
                    }, "Normal", 8, XN),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, JN)
                  ], 8, qN)
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
            ], 8, jN)) : tt("", !0)
          ])
        ])) : tt("", !0),
        (e.model.footerButtons || []).length ? (Oe(), De("div", ZN, [
          (Oe(!0), De(qe, null, mt(e.model.footerButtons, (y) => (Oe(), De("button", {
            key: y.action,
            class: st(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, Xe(y.label), 11, QN))), 128))
        ])) : tt("", !0)
      ]);
    };
  }
}, t2 = { class: "pano-timeline-group" }, n2 = ["title"], r2 = ["disabled"], i2 = ["disabled"], o2 = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, i) => (Oe(), De("div", t2, [
      Ne("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, Xe(e.group.label), 9, n2),
      Ne("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = pt((o) => n("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, r2),
      Ne("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = pt((o) => n("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, Xe(e.group.restore.label), 9, i2)
    ]));
  }
}, s2 = { class: "pano-timeline-bar" }, a2 = ["disabled", "aria-label", "data-tip"], l2 = ["aria-label", "data-tip"], c2 = { class: "pano-timeline-time" }, u2 = ["data-tip"], d2 = { key: 0 }, f2 = ["min", "max", "value"], p2 = {
  class: "pano-timeline-setting pano-timeline-length",
  "data-tip": "Output length in frames"
}, m2 = ["max", "value"], h2 = ["disabled"], g2 = ["aria-expanded"], y2 = ["inert"], b2 = { class: "pano-timeline-name" }, v2 = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], S2 = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, _2 = ["disabled", "aria-expanded", "aria-label", "onClick"], w2 = ["title", "aria-current", "onClick"], k2 = ["role", "aria-label", "data-tip"], x2 = ["disabled", "data-keyed", "aria-label", "onClick"], M2 = ["onPointerdown"], P2 = ["onPointerdown"], N2 = ["onPointerdown"], A2 = ["onPointerdown"], C2 = ["aria-label", "data-tip", "onPointerdown"], I2 = { key: 0 }, E2 = ["onPointerdown"], O2 = ["aria-label", "data-tip", "onPointerdown"], F2 = { key: 0 }, T2 = 10, D2 = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Js(0), playing: /* @__PURE__ */ Js(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ Rt(null), o = /* @__PURE__ */ Rt(null), s = /* @__PURE__ */ Rt(1), a = /* @__PURE__ */ Rt(0), l = /* @__PURE__ */ Rt(!1);
    let c = null, d = null, u = null;
    Wa(() => {
      c = new ResizeObserver(([oe]) => {
        s.value = Math.max(1, oe.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([oe]) => {
        a.value = oe.contentRect.height;
      }), o.value && d.observe(o.value);
    }), ts(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = nt(() => Math.max(1, Number(n.model.span || 1))), m = nt(() => n.playhead.frame.value), _ = nt(() => n.playhead.playing.value), g = nt(() => _S(m.value, Number(n.model.fps || 1))), v = nt(() => s.value / f.value), y = (oe) => `${oe / f.value * 100}%`, G = nt(() => OS(f.value, v.value));
    function U(oe) {
      const I = i.value.getBoundingClientRect(), W = Math.floor((oe - I.left) / Math.max(1, I.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, W));
    }
    function F(oe, I, W) {
      const N = Math.ceil(T2 / Math.max(1e-6, v.value)), ue = I.filter((O) => O.frame < f.value), A = new Map(ue.map((O) => [O.frame, O.full]));
      return FS(ue.map((O) => O.frame), N).map((O, w) => ({
        ...O,
        key: `${oe}:${w}`,
        partial: O.frames.some((M) => !A.get(M)),
        selected: O.frames.some((M) => W.includes(M))
      }));
    }
    const P = nt(() => [
      ...(n.model.rows || []).map((oe) => ({ key: oe.id, row: oe })),
      ...(n.model.groups || []).flatMap((oe) => [
        { key: `group:${oe.key}`, group: oe },
        ...oe.rows.map((I) => ({ key: I.id, row: I }))
      ])
    ]), $ = nt(() => {
      const oe = /* @__PURE__ */ new Map();
      for (const { row: I } of P.value)
        if (I) {
          oe.set(I.id, F(I.id, I.keys, I.selectedFrames));
          for (const W of I.lanes) oe.set(W.key, F(W.key, W.frames.map((N) => ({ frame: N, full: !0 })), W.selectedFrames));
        }
      return oe;
    });
    function Q(oe) {
      const I = oe.end === null ? f.value : Math.min(oe.end, f.value);
      return { left: y(oe.start), width: y(Math.max(0, I - oe.start)) };
    }
    function q(oe, I) {
      const W = oe.clientX, N = Math.max(1e-6, v.value);
      let ue = 0;
      I("start", 0, oe);
      const A = (w) => {
        if (w.pointerId !== oe.pointerId) return;
        const M = Math.round((w.clientX - W) / N);
        M !== ue && (ue = M, I("move", ue, w));
      }, O = (w) => {
        w.pointerId === oe.pointerId && (u(), I("end", ue, w));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", A), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", O), u = null;
      }, window.addEventListener("pointermove", A), window.addEventListener("pointerup", O), window.addEventListener("pointercancel", O);
    }
    function le(oe) {
      oe.button === 0 && q(oe, (I, W, N) => r("action", { type: "seek", frame: U(N.clientX), phase: I }));
    }
    function ve(oe, I, W) {
      oe.button === 0 && (r("action", { type: "select-row", id: I.id }), q(oe, (N, ue) => r("action", { type: "clip", id: I.id, mode: W, delta: ue, phase: N })));
    }
    function he(oe, I, W, N, ue) {
      if (oe.button === 0) {
        if (oe.shiftKey) {
          r("action", { type: "select-keys", owner: I.id, lane: W, frames: N.frames, additive: !0 });
          return;
        }
        N.frames.every((A) => ue.includes(A)) || r("action", { type: "select-keys", owner: I.id, lane: W, frames: N.frames, additive: !1 }), q(oe, (A, O) => r("action", { type: "move-keys", delta: O, phase: A }));
      }
    }
    const X = nt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function Se(oe, I, W) {
      r("action", I), await Ga(), oe.target.value = W();
    }
    function fe(oe) {
      Se(oe, { type: "fps", fps: Number(oe.target.value) }, () => X.value);
    }
    const de = nt(() => String(n.model.length ?? f.value));
    function te(oe) {
      const I = oe.target.value.trim();
      if (!I) {
        oe.target.value = de.value;
        return;
      }
      Se(oe, { type: "length", length: Number(I) }, () => de.value);
    }
    function me(oe, I, W) {
      oe.button !== 0 || oe.target !== oe.currentTarget || r("action", { type: "select-keys", owner: I.id, lane: W, frames: [], additive: !1 });
    }
    return (oe, I) => vr((Oe(), De("section", {
      class: st(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", s2, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          disabled: !e.model.playable,
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: I[0] || (I[0] = (W) => r("action", { type: "play" }))
        }, [
          Be(xt, {
            icon: _.value ? Je(je).pause : Je(je).play
          }, null, 8, ["icon"])
        ], 8, a2),
        e.model.hasAudio ? (Oe(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: I[1] || (I[1] = (W) => r("action", { type: "mute" }))
        }, [
          Be(xt, {
            icon: e.model.muted ? Je(je).volume_muted : Je(je).volume2
          }, null, 8, ["icon"])
        ], 8, l2)) : tt("", !0),
        Ne("span", c2, Xe(g.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Oe(), De("span", d2, Xe(X.value), 1)) : (Oe(), De("input", {
            key: 1,
            type: "number",
            min: Je(ch),
            max: Je(ku),
            step: "any",
            value: X.value,
            "aria-label": "Timeline fps",
            onChange: fe
          }, null, 40, f2)),
          I[8] || (I[8] = Ne("span", null, "fps", -1))
        ], 8, u2),
        Ne("label", p2, [
          I[9] || (I[9] = Ne("span", null, "Length", -1)),
          Ne("input", {
            type: "number",
            min: "1",
            max: Je(xu),
            step: "1",
            value: de.value,
            "aria-label": "Output length in frames",
            onChange: te
          }, null, 40, m2)
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-length-reset",
          type: "button",
          disabled: e.model.length == null,
          "aria-label": "Reset length to the inputs",
          "data-tip": "Reset length to the inputs",
          onClick: I[2] || (I[2] = (W) => r("action", { type: "length", length: null }))
        }, [
          Be(xt, {
            icon: Je(je).reset
          }, null, 8, ["icon"])
        ], 8, h2),
        Ne("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: I[3] || (I[3] = (W) => r("action", { type: "toggle-expanded" }))
        }, [
          I[10] || (I[10] = Ne("span", null, "Timeline", -1)),
          Be(xt, {
            icon: Je(je).chevron
          }, null, 8, ["icon"])
        ], 8, g2)
      ]),
      Ne("div", {
        class: st(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: yt({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: I[5] || (I[5] = pt((W) => l.value = !0, ["self"])),
        onTransitionend: I[6] || (I[6] = pt((W) => l.value = !1, ["self"])),
        onTransitioncancel: I[7] || (I[7] = pt((W) => l.value = !1, ["self"]))
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
            onPointerdown: le
          }, [
            (Oe(!0), De(qe, null, mt(G.value, (W) => (Oe(), De("span", {
              key: W,
              class: "pano-timeline-tick",
              style: yt({ left: y(W) })
            }, Xe(W), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: yt({ left: y(m.value + 0.5) })
            }, null, 4)
          ], 544),
          (Oe(!0), De(qe, null, mt(P.value, ({ key: W, row: N, group: ue }) => (Oe(), De(qe, { key: W }, [
            ue ? (Oe(), bn(o2, {
              key: 0,
              group: ue,
              onAction: I[4] || (I[4] = (A) => r("action", A))
            }, null, 8, ["group"])) : tt("", !0),
            N ? (Oe(), De("div", {
              key: 1,
              class: st(["pano-timeline-head", { selected: N.selected, "is-hidden": !N.visible }])
            }, [
              Ne("div", b2, [
                N.hideable ? (Oe(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": N.visible ? "true" : "false",
                  disabled: !N.editable,
                  "aria-label": `${N.label} visible`,
                  "data-tip": N.editable ? N.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: pt((A) => r("action", { type: "toggle-visible", id: N.id }), ["stop"])
                }, [
                  Be(xt, {
                    icon: N.visible ? Je(je).eye : Je(je).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, v2)) : (Oe(), De("span", S2)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !N.keyable,
                  "aria-expanded": N.open ? "true" : "false",
                  "aria-label": N.open ? `Hide ${N.label} parameters` : `Show ${N.label} parameters`,
                  onClick: pt((A) => r("action", { type: "toggle-row", id: N.id }), ["stop"])
                }, [
                  Be(xt, {
                    icon: Je(je).chevron
                  }, null, 8, ["icon"])
                ], 8, _2),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: N.label,
                  "aria-current": N.selected ? "true" : void 0,
                  onClick: (A) => r("action", { type: "select-row", id: N.id })
                }, [
                  Be(xt, {
                    icon: N.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, Xe(N.label), 1)
                ], 8, w2),
                N.upstream ? (Oe(), De("span", {
                  key: 2,
                  class: st(["pano-timeline-override", { on: N.overridden }]),
                  role: N.overridden ? "img" : void 0,
                  "aria-label": N.overridden ? "Overridden in this node" : void 0,
                  "data-tip": N.overridden ? "Overridden in this node" : null
                }, null, 10, k2)) : tt("", !0),
                N.keyable ? (Oe(), De("button", {
                  key: 3,
                  class: st(["pano-timeline-key", { keyed: Je(Ol)(N.keys, m.value) }]),
                  type: "button",
                  disabled: !N.editable,
                  "data-keyed": Je(Ol)(N.keys, m.value) ? "true" : "false",
                  "aria-label": Je(Ol)(N.keys, m.value) ? `Every ${N.label} parameter has a keyframe here; update them` : `Add keyframes for every ${N.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: pt((A) => r("action", { type: "key-row", owner: N.id }), ["stop"])
                }, [
                  Be(xt, {
                    icon: Je(je).keyframe
                  }, null, 8, ["icon"])
                ], 10, x2)) : tt("", !0)
              ]),
              N.open ? (Oe(!0), De(qe, { key: 0 }, mt(N.lanes, (A) => (Oe(), De("div", {
                key: A.key,
                class: "pano-timeline-lane-head"
              }, Xe(A.label), 1))), 128)) : tt("", !0)
            ], 2)) : tt("", !0),
            N ? (Oe(), De("div", {
              key: 2,
              class: st(["pano-timeline-track", { selected: N.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (A) => me(A, N, null)
              }, [
                N.clip && N.clip.start < f.value ? (Oe(), De("div", {
                  key: 0,
                  class: st(["pano-timeline-clip", { open: N.clip.end === null }]),
                  style: yt(Q(N.clip)),
                  onPointerdown: pt((A) => ve(A, N, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: pt((A) => ve(A, N, "start"), ["stop"])
                  }, null, 40, N2),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: pt((A) => ve(A, N, "end"), ["stop"])
                  }, null, 40, A2)
                ], 46, P2)) : tt("", !0),
                (Oe(!0), De(qe, null, mt($.value.get(N.id), (A) => (Oe(), De("button", {
                  key: A.key,
                  type: "button",
                  class: st(["pano-timeline-pin", { selected: A.selected, cluster: A.frames.length > 1, partial: A.partial }]),
                  style: yt({ left: y(A.frame + 0.5) }),
                  "aria-label": `${N.label}: ${A.frames.length > 1 ? `${A.frames.length} keyframes` : `keyframe at frame ${A.frames[0]}`}`,
                  "data-tip": A.frames.length > 1 ? `${A.frames.length} keyframes` : `Frame ${A.frames[0]}`,
                  onPointerdown: pt((O) => he(O, N, null, A, N.selectedFrames), ["stop"])
                }, [
                  A.frames.length > 1 ? (Oe(), De("span", I2, Xe(A.frames.length), 1)) : tt("", !0)
                ], 46, C2))), 128))
              ], 40, M2),
              N.open ? (Oe(!0), De(qe, { key: 0 }, mt(N.lanes, (A) => (Oe(), De("div", {
                key: A.key,
                class: "pano-timeline-lane",
                onPointerdown: (O) => me(O, N, A.lane)
              }, [
                (Oe(!0), De(qe, null, mt($.value.get(A.key), (O) => (Oe(), De("button", {
                  key: O.key,
                  type: "button",
                  class: st(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1 }]),
                  style: yt({ left: y(O.frame + 0.5) }),
                  "aria-label": `${A.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: pt((w) => he(w, N, A.lane, O, A.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (Oe(), De("span", F2, Xe(O.frames.length), 1)) : tt("", !0)
                ], 46, O2))), 128))
              ], 40, E2))), 128)) : tt("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: yt({ left: y(m.value + 0.5) })
              }, null, 4)
            ], 2)) : tt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, y2)
    ], 2)), [
      [ci, e.model.visible]
    ]);
  }
}, L2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Oe(), De("div", {
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
}, R2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, V2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Oe(), De("div", R2, [
      (Oe(!0), De(qe, null, mt(e.buttons, (r) => vr((Oe(), bn(Ht, {
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
}, $2 = ["data-video-ready"], z2 = { class: "pano-video-transport-shell" }, j2 = { class: "pano-video-controls-left" }, H2 = { class: "pano-video-filmstrip" }, G2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, K2 = ["src", "onLoad"], W2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, U2 = ["max", "value", "disabled"], B2 = { class: "pano-video-controls-right" }, Y2 = ["data-has-audio"], q2 = { class: "pano-video-volume-pop" }, X2 = ["value", "disabled"], J2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = nt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause" : "Play";
    }), r = nt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause video" : "Play video";
    }), i = nt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? je.pause : je.play;
    }), o = nt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = nt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = nt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? je.loop_off : je.loop;
    }), l = nt(() => {
      var P, $;
      return ((P = t.state) == null ? void 0 : P.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = nt(() => {
      var P, $, Q;
      return ((P = t.state) == null ? void 0 : P.hasAudio) !== !0 ? je.volume : (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((Q = t.state) == null ? void 0 : Q.volume) ?? 1) <= 0 ? je.volume_muted : je.volume2;
    }), d = nt(() => {
      var P;
      return Math.max(0, Math.min(100, Number(((P = t.state) == null ? void 0 : P.progressPct) || 0)));
    }), u = nt(() => ({ left: `${d.value}%` })), f = nt(() => {
      var q, le;
      const P = (q = t.state) == null ? void 0 : q.volumePct, $ = Number(((le = t.state) == null ? void 0 : le.volume) ?? 1) * 100, Q = Number(P ?? $ ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, Q))}%`
      };
    }), m = nt(() => {
      var Q, q;
      const $ = [
        String(((Q = t.state) == null ? void 0 : Q.currentTimeLabel) || "0:00"),
        String(((q = t.state) == null ? void 0 : q.durationLabel) || "0:00")
      ].reduce((le, ve) => Math.max(le, ve.length), 4);
      return `${Math.max(4, $)}ch`;
    }), _ = nt(() => ({ "--pano-video-time-ch": m.value })), g = nt(() => {
      var Q, q;
      const P = Array.isArray((Q = t.state) == null ? void 0 : Q.thumbnails) ? t.state.thumbnails : [];
      if (P.length) return P;
      const $ = Math.max(7, Number(((q = t.state) == null ? void 0 : q.thumbnailCount) || 9));
      return Array.from({ length: $ }, (le, ve) => ({
        id: `placeholder-${ve}`,
        src: "",
        label: ""
      }));
    }), v = /* @__PURE__ */ Rt(/* @__PURE__ */ new Set()), y = (P) => String((P == null ? void 0 : P.id) || (P == null ? void 0 : P.src) || (P == null ? void 0 : P.label) || ""), G = (P) => v.value.has(y(P)), U = (P) => {
      const $ = new Set(v.value);
      $.add(y(P)), v.value = $;
    };
    ii(g, (P) => {
      const $ = new Set(P.map(y)), Q = /* @__PURE__ */ new Set();
      for (const q of v.value)
        $.has(q) && Q.add(q);
      v.value = Q;
    }, { immediate: !0 });
    const F = nt(() => {
      var P;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((P = t.state) == null ? void 0 : P.shellMaxWidthPx) || 640))}px`
      };
    });
    return (P, $) => (Oe(), De("div", {
      class: st(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: yt(F.value)
    }, [
      $[1] || ($[1] = Ne("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      $[2] || ($[2] = Ne("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Ne("div", z2, [
        Ne("div", j2, [
          Be(Ht, {
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
            style: yt(_.value)
          }, Xe(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", H2, [
          Ne("div", G2, [
            (Oe(!0), De(qe, null, mt(g.value, (Q) => (Oe(), De("div", {
              key: y(Q),
              class: st(["pano-video-thumb", {
                "is-placeholder": !Q.src,
                "is-loaded": Q.src && G(Q)
              }])
            }, [
              Q.src ? (Oe(), De("img", {
                key: 0,
                src: Q.src,
                alt: "",
                draggable: "false",
                onLoad: (q) => U(Q)
              }, null, 40, K2)) : (Oe(), De("span", W2))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: yt(u.value),
            "aria-hidden": "true"
          }, [...$[0] || ($[0] = [
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
          }, null, 8, U2)
        ]),
        Ne("div", B2, [
          Ne("div", {
            class: "pano-video-time pano-video-time-end",
            style: yt(_.value)
          }, Xe(e.state.durationLabel || "0:00"), 5),
          Be(Ht, {
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
            Ne("div", q2, [
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
              }, null, 12, X2)
            ]),
            Be(Ht, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, Y2)
        ])
      ])
    ], 14, $2));
  }
}, Z2 = { class: "pano-floating-top" }, Q2 = ["data-selected", "data-view-count"], eA = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], tA = { class: "label" }, nA = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Oe(), De("div", Z2, [
        Ne("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Oe(!0), De(qe, null, mt(e.buttons, (i) => vr((Oe(), De("button", {
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
            Ne("span", tA, Xe(i.label), 1)
          ], 10, eA)), [
            [ci, i.visible !== !1]
          ])), 128))
        ], 8, Q2)
      ]);
    };
  }
};
function E0(e = "stickers") {
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
const rA = ["aria-label"], iA = { class: "pano-stage-column" }, oA = { class: "pano-stage-wrap" }, sA = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, aA = {
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
    const l = /* @__PURE__ */ Rt(null), c = /* @__PURE__ */ Rt(null), d = /* @__PURE__ */ Rt(null);
    function u() {
      var he, X;
      return ((X = (he = d.value) == null ? void 0 : he.getRefs) == null ? void 0 : X.call(he)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(he, X) {
      var Se, fe;
      return ((fe = (Se = c.value) == null ? void 0 : Se.open) == null ? void 0 : fe.call(Se, he, X)) === !0;
    }
    function m(he) {
      i("image-file-selected", he);
    }
    function _(he) {
      i("image-file-cancelled", he);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = nt(() => r.readOnly === !0), v = nt(() => r.shellPreset || E0(r.type)), y = nt(() => {
      var X, Se, fe;
      const he = String((((X = r.uiState) == null ? void 0 : X.stageStatus) === "failed" ? (Se = r.uiState) == null ? void 0 : Se.stageStatusDetail : (fe = r.uiState) == null ? void 0 : fe.stageWarningDetail) ?? "");
      return he === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : he === "stickers" ? "One or more sticker previews are unavailable." : he === "frame" ? "The editor hit a rendering error. Check the browser console for details." : he === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : he.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), G = nt(() => {
      var he, X, Se;
      return ((he = r.uiState) == null ? void 0 : he.stageStatus) === "failed" || (X = r.uiState) != null && X.stageWarningDetail ? y.value : (Se = r.uiState) == null ? void 0 : Se.stageNotice;
    }), U = nt(() => {
      var X;
      const he = Array.isArray((X = v.value) == null ? void 0 : X.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return g.value && he.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: je.fullscreen
      }), he;
    });
    function F() {
      const he = l.value;
      return he ? Array.from(he.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((X) => X instanceof HTMLElement ? !X.hidden && X.tabIndex >= 0 && X.offsetParent !== null : !1) : [];
    }
    function P() {
      var Se;
      const X = F()[0] || l.value;
      (Se = X == null ? void 0 : X.focus) == null || Se.call(X);
    }
    function $() {
      var he;
      a != null && a.isConnected && ((he = a.focus) == null || he.call(a)), a = null;
    }
    function Q(he) {
      var X, Se, fe, de;
      if (!he.defaultPrevented) {
        if (he.key === "Tab") {
          const te = F();
          if (!te.length) {
            he.preventDefault(), (Se = (X = l.value) == null ? void 0 : X.focus) == null || Se.call(X);
            return;
          }
          const me = te[0], oe = te[te.length - 1], I = document.activeElement;
          if (he.shiftKey) {
            (I === me || I === l.value || !((fe = l.value) != null && fe.contains(I))) && (he.preventDefault(), oe.focus());
            return;
          }
          (I === oe || !((de = l.value) != null && de.contains(I))) && (he.preventDefault(), me.focus());
          return;
        }
        he.key === "Escape" && i("close");
      }
    }
    function q() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function le() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function ve(he) {
      document.removeEventListener("keydown", Q), he ? (a || (a = document.activeElement), q(), document.addEventListener("keydown", Q), Ga(() => {
        P();
      })) : (le(), $());
    }
    return Wa(() => {
      ve(r.open);
    }), ts(() => {
      le(), document.removeEventListener("keydown", Q), $();
    }), ii(() => r.open, (he) => {
      ve(he);
    }), (he, X) => e.open ? (Oe(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: X[2] || (X[2] = pt((Se) => i("close"), ["self"]))
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
        Ne("div", iA, [
          Ne("div", oA, [
            X[3] || (X[3] = Ne("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            X[4] || (X[4] = Ne("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            X[5] || (X[5] = Ne("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Oe(), De("div", sA, Xe(G.value), 1)) : tt("", !0),
            X[6] || (X[6] = Ne("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ne("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(LP, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(s0, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: m,
              onFileCancelled: _
            }, null, 512),
            g.value ? tt("", !0) : (Oe(), De(qe, { key: 1 }, [
              Be(V2, {
                buttons: e.uiState.toolButtons || v.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(sP, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(DP, {
                "paint-swatches": e.paintSwatches,
                panes: v.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(J2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(nA, {
              buttons: e.uiState.viewButtons || v.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(tP, {
              buttons: e.uiState.floatingButtons || U.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(KP, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(L2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(fP, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(D2, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: X[0] || (X[0] = (Se) => i("timeline", Se))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? tt("", !0) : (Oe(), bn(e2, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: X[1] || (X[1] = (Se) => i("timeline", Se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, rA)
    ])) : tt("", !0);
  }
}, zn = "loading", Zo = "ready", In = "failed";
function O0(e, t = "") {
  return e && (e.__panoLoadState = zn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function F0(e, t = "") {
  return e && (e.__panoLoadState = Zo, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function T0(e, t = "") {
  return e && (e.__panoLoadState = In, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Uc(e, t) {
  return e ? e.__panoLoadState === In ? In : typeof t == "function" && t(e) ? Zo : zn : Zo;
}
function Bc(e) {
  return Uc(e) === In;
}
function lA({ presented: e, background: t = Zo, stickers: n = [] } = {}) {
  if (!e) return { status: zn, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === zn, o = r.includes(zn);
  if (i && o) return { status: zn, detail: "mixed" };
  if (i) return { status: zn, detail: "background" };
  if (o) return { status: zn, detail: "stickers" };
  const s = t === In, a = r.includes(In);
  return s && a ? { status: In, detail: "mixed" } : s ? { status: In, detail: "background" } : a ? { status: In, detail: "stickers" } : { status: Zo, detail: "" };
}
const cA = "state_json", uA = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), hd = "sticker_image_1", dA = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), D0 = 0.01, fA = "external_image", li = "pano_sticker_input_images", L0 = "pano_sticker_input_videos", R0 = "pano_sticker_input_frames", V0 = "pano_sticker_input_video_meta", pA = !0, il = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], or = Math.PI / 180, di = 180 / Math.PI, Yc = 1, $0 = "rgb(255, 221, 87)", mA = "rgb(228, 228, 231)", hA = "rgb(180, 150, 60)", gA = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, yA = 64, xp = 40, Jl = 16, bA = 0.45, Mp = 180, vA = 160, Fa = 24, SA = 4, _A = 4;
function Zl(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function wA(e) {
  return 1 - Math.pow(1 - e, 3);
}
function kA(e, t, n) {
  const r = Fe((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function xA(e) {
  return e * e * e;
}
function ol(e, t, n) {
  return { x: e, y: t, z: n };
}
function Pp(e, t) {
  return ol(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Np(e, t) {
  return ol(e.x * t, e.y * t, e.z * t);
}
function Ql(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function MA(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ol(e.x / t, e.y / t, e.z / t);
}
function Ap(e) {
  return {
    yaw: Et(Math.atan2(e.x, e.z) * di),
    pitch: Fe(Math.asin(Fe(e.y, -1, 1)) * di, -90, 90)
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
function ec(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = r * r + i * i;
  if (a <= 1e-6) return mo(e, t);
  const l = Fe((o * r + s * i) / a, 0, 1), c = Number(t.x || 0) + r * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Cn(e, t, n) {
  return e + (t - e) * n;
}
function er(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Fe(n, 0, 1)})`;
}
function PA(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Cs = { fillStyle: "", url: "" };
function NA(e, t, n) {
  if (Cs.url && Cs.fillStyle === String(e || ""))
    return Cs.url;
  const r = PA(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Fa}" height="${Fa}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Cs = { fillStyle: String(e || ""), url: r }, r;
}
function Ta(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function kn(e) {
  return {
    r: Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Fe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Eo(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function AA(e) {
  return il.some((t) => Ta(e, t.color));
}
function qc(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = Fe(Number(t), 0, 1), o = Fe(Number(n), 0, 1);
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
function Xc(e) {
  const t = Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((n - r) / s + (n < r ? 6 : 0)) / 6 : i === n ? a = ((r - t) / s + 2) / 6 : a = ((t - n) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function $i(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function CA(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Cp(e) {
  const { paintCount: t, maskCount: n } = CA(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function z0(e, t, n, r, i) {
  const o = n.bbox, s = n.transform || {}, a = Number(o.u0 || 0) * r, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * r), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * r, f = l + d * 0.5 + Number(s.dv || 0) * i, m = Number(s.rot_deg || 0) * or, _ = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-r, 0, r])
    e.save(), e.translate(u + g, f), e.rotate(m), e.scale(_, _), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Ii(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Is(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function IA(e, t) {
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
function ho(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function EA(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function OA(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function FA(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const j0 = "pano_suite.ui_settings.v1", H0 = "pano_suite.node_grid_visibility.v1";
let Ni = null, Xn = null;
function Xs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function TA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(j0)) || "").trim();
    if (!t) return Ni ? Xs(Ni) : null;
    const n = JSON.parse(t), r = Xs(n);
    return Ni = r, r;
  } catch {
    return Ni ? Xs(Ni) : null;
  }
}
function DA(e) {
  var n;
  const t = Xs(e);
  Ni = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(j0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function G0() {
  var e;
  if (Xn && typeof Xn == "object")
    return Xn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(H0)) || "").trim();
    if (!t)
      return Xn = {}, Xn;
    const n = JSON.parse(t);
    return Xn = n && typeof n == "object" ? n : {}, Xn;
  } catch {
    return Xn = {}, Xn;
  }
}
function LA(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = G0()[n];
  return typeof i == "boolean" ? i : !!t;
}
function RA(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = G0();
  r[n] = !!t, Xn = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(H0, JSON.stringify(r));
  } catch {
  }
}
function VA(e, t) {
  const n = { ...e }, r = t.map((i) => i(tc(e, i.name)));
  for (const { connect: i, ...o } of r) {
    for (const s of Object.keys(o))
      if (s in n) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(n, o);
  }
  return r.forEach((i, o) => i.connect(tc(n, t[o].name))), tc(n, "showEditor");
}
function tc(e, t) {
  return new Proxy(e, {
    get(n, r) {
      if (!(r in n)) throw new Error(`Panorama editor: ${t} takes ${String(r)}, which nothing provides`);
      return n[r];
    }
  });
}
const $A = "/panorama_suite/file_3d", zA = 3;
function gd(e) {
  return {
    filename: String((e == null ? void 0 : e.filename) ?? ""),
    subfolder: String((e == null ? void 0 : e.subfolder) ?? ""),
    storage: String((e == null ? void 0 : e.storage) ?? "input")
  };
}
function jA({ filename: e, subfolder: t }) {
  return t ? `${t}/${e}` : e;
}
function nc(e, t) {
  return { ok: !1, error: `Could not read the 3D file ${jA(e)}: ${t}` };
}
async function HA(e, { fetchApi: t }) {
  const n = gd(e);
  let r;
  try {
    r = await t($A, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n)
    });
  } catch (s) {
    return nc(n, `${(s == null ? void 0 : s.message) || s}.`);
  }
  let i = null;
  try {
    i = await r.json();
  } catch {
    i = null;
  }
  if (r.status !== 200)
    return typeof (i == null ? void 0 : i.error) == "string" && i.error ? { ok: !1, error: i.error } : nc(n, `the server answered ${r.status}.`);
  const o = i == null ? void 0 : i.kind;
  return o !== "mesh" && o !== "splat" || !i.file || typeof i.file != "object" ? nc(n, "the server's reply was not understood.") : { ok: !0, kind: o, unlit: o !== "mesh" || i.unlit !== !1, file: i.file, box: i.box ?? null };
}
function Ip(e) {
  const { storage: t, subfolder: n, filename: r } = gd(e);
  return JSON.stringify([t, n, r]);
}
function GA({ fetchApi: e, onUpdate: t = () => {
} }) {
  const n = /* @__PURE__ */ new Map();
  let r = !1;
  function i(s, a, l, c) {
    const d = { state: "pending", kind: null, unlit: !0, file: null, box: null, error: null, generation: l }, u = HA(a, { fetchApi: e }).then((f) => {
      var m;
      return ((m = n.get(s)) == null ? void 0 : m.entry) !== d || (Object.assign(d, f.ok ? { state: "ready", kind: f.kind, unlit: f.unlit, file: f.file, box: f.box } : { state: "failed", error: f.error }), r || t()), d;
    });
    return n.set(s, { entry: d, pending: u, values: a, refreshes: c }), d;
  }
  function o(s) {
    const a = Ip(s);
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
      const a = Ip(s), l = n.get(a);
      if (!l) {
        o(s);
        return;
      }
      l.entry.state === "pending" || l.refreshes >= zA || i(a, l.values, l.entry.generation + 1, l.refreshes + 1);
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
const Or = /* @__PURE__ */ new Map(), KA = 12;
function WA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Or.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Or.delete(t), Or.set(t, n), n);
}
function UA(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Or.delete(n), Or.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Or.size > KA; ) {
      const i = Or.keys().next().value;
      if (!i) break;
      Or.delete(i);
    }
}
function BA(e) {
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
    readOnly: _,
    runtime: g,
    scheduler: v,
    stageWrap: y,
    state: G,
    stateV2: U,
    stillCanvas: F,
    studio: P,
    timelinePlayhead: $,
    type: Q,
    uiState: q,
    videoEl: le
  } = e;
  let ve, he, X, Se, fe, de, te, me;
  const oe = U ? GA({ fetchApi: (ee, Pe) => t.fetchApi(ee, Pe), onUpdate: () => X() }) : null, I = {
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
  }, W = 9, N = [];
  let ue = 0;
  const A = () => {
    var it, at;
    const ee = (it = y == null ? void 0 : y.getBoundingClientRect) == null ? void 0 : it.call(y), Pe = (at = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : at.call(o), ne = Math.max(0, Number((ee == null ? void 0 : ee.width) || 0)), ke = Pe ? Math.max(0, Number(Pe.width || 0)) : 0, Te = ke > 0 ? ke + 14 + 12 : 72, ze = Math.max(280, Math.floor(ne - Te * 2)), Ue = r.fullscreen ? Math.min(1200, ze) : ze;
    q.videoTransport.shellMaxWidthPx = Ue;
  }, O = () => {
    ue || (ue = v.requestFrame(() => {
      ue = 0, A();
    }));
  }, w = (ee) => {
    if (!(ee instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(ee.audioTracks) && ee.audioTracks.length > 0 || ee.audioTracks && typeof ee.audioTracks.length == "number" && ee.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof ee.mozHasAudio == "boolean") return ee.mozHasAudio;
    } catch {
    }
    try {
      if (Number(ee.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!q.videoTransport.hasAudio;
  }, M = typeof ResizeObserver < "u" ? new ResizeObserver(() => O()) : null;
  M == null || M.observe(y), o && (M == null || M.observe(o)), N.push(() => {
    var ee;
    ue && (v.cancelFrame(ue), ue = 0), (ee = M == null ? void 0 : M.disconnect) == null || ee.call(M);
  }), O();
  const ce = () => {
    I.thumbnailJobId += 1, I.thumbnailSrc = "", q.videoTransport.thumbnails = [], q.videoTransport.thumbnailCount = W;
  }, ye = async (ee, Pe, ne) => {
    const ke = String(ee || "").trim();
    if (!ke) {
      ce();
      return;
    }
    const Ae = WA(ke);
    if (Ae) {
      I.thumbnailSrc = ke, q.videoTransport.thumbnails = Ae.thumbnails, q.videoTransport.thumbnailCount = Ae.thumbnailCount;
      return;
    }
    const Ie = ++I.thumbnailJobId;
    I.thumbnailSrc = ke, q.videoTransport.thumbnails = [], q.videoTransport.thumbnailCount = W;
    const Te = rs(document, "editor.thumbnails");
    Te.preload = "auto", Te.muted = !0, Te.playsInline = !0, Te.crossOrigin = "anonymous";
    const ze = Gt({ label: "editor.thumbnail" });
    try {
      const Ue = await new Promise((tn) => {
        let _n = !1;
        const Kt = (Ft) => {
          _n || (_n = !0, tn(Ft));
        };
        Te.addEventListener("loadedmetadata", () => Kt(!0), { once: !0 }), Te.addEventListener("canplay", () => Kt(!0), { once: !0 }), Te.addEventListener("error", () => Kt(!1), { once: !0 }), Te.src = ke, Te.load();
      });
      if (I.thumbnailJobId !== Ie) return;
      const it = Number(Te.videoWidth || 0), at = Number(Te.videoHeight || 0);
      if (!Ue || it < 1 || at < 1) {
        I.thumbnailFailedSrcs.add(ke);
        return;
      }
      const St = Math.max(0, Number(Te.duration || Pe || 0)), ut = 46, Ot = Math.max(72, Math.round(it / at * ut));
      ze.width = Ot, ze.height = ut;
      const Ye = ze.getContext("2d");
      if (!Ye) return;
      const $t = [], jt = (tn) => new Promise((_n) => {
        let Kt = !1;
        const Ft = () => {
          Kt || (Kt = !0, _n());
        };
        Te.addEventListener("seeked", Ft, { once: !0 }), Te.addEventListener("error", Ft, { once: !0 });
        try {
          Te.currentTime = tn;
        } catch {
          Ft();
        }
      });
      for (let tn = 0; tn < W; tn += 1) {
        if (I.thumbnailJobId !== Ie) return;
        const _n = W <= 1 ? 0 : tn / (W - 1), Kt = St > 0 ? Math.max(0, Math.min(St - Math.max(1e-3, 0.5 / Math.max(1, Number(ne || 24))), St * _n)) : 0;
        if (await jt(Kt), I.thumbnailJobId !== Ie) return;
        Ye.clearRect(0, 0, Ot, ut), Ye.drawImage(Te, 0, 0, Ot, ut), $t.push({
          id: `thumb-${tn}`,
          src: ze.toDataURL("image/jpeg", 0.72),
          time: Kt,
          label: J(Kt)
        });
      }
      if (I.thumbnailJobId !== Ie) return;
      q.videoTransport.thumbnails = $t, q.videoTransport.thumbnailCount = $t.length || W, UA(ke, {
        thumbnails: $t,
        thumbnailCount: $t.length || W,
        duration: St,
        fps: ne
      });
    } finally {
      Te.removeAttribute("src"), Te.load(), ei(ze);
    }
  };
  N.push(() => {
    ce();
  });
  const D = jg({
    video: le instanceof HTMLVideoElement ? le : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (ee) => v.requestFrame(ee),
      cancelFrame: (ee) => v.cancelFrame(ee)
    },
    fps: ae,
    span: () => {
      if (U) return te();
      const ee = Math.round(Number(q.videoTransport.duration || 0) * ae());
      return le.loop || !(ee > 0) ? 1 / 0 : ee;
    },
    loop: () => U,
    // Panorama Studio's background VIDEO is where its Clip range puts it (state.background).
    place: () => ve(),
    onFrame: (ee) => {
      U ? Se(ee) : V(), X({ cause: "frame_view", localOnly: !0, reason: ot.PLAYHEAD });
    },
    onCapture: () => {
      ie() && (g.backgroundDirty = !0);
    },
    onChange: () => {
      V(), $.playing.value = D.playing, de(), X({ cause: "frame_view", localOnly: !0, reason: ot.PLAYHEAD });
    }
  });
  N.push(() => D.dispose());
  const b = U && m instanceof HTMLVideoElement ? ed({
    video: m,
    onCapture: () => {
      var ne;
      const ee = Number(m.videoWidth || 0), Pe = Number(m.videoHeight || 0);
      ee < 1 || Pe < 1 || (f.width = ee, f.height = Pe, (ne = f.getContext("2d")) == null || ne.drawImage(m, 0, 0), f.__panoFrameIdx += 1, X({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA }));
    },
    onChange: () => X({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA })
  }) : null;
  b && N.push(() => b.dispose());
  const B = U ? Eu({
    createImage: (ee, Pe) => {
      const ne = new Image();
      return ne.onload = Pe, ne.onerror = Pe, ne.src = ee, ne;
    },
    onLoad: () => X({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA })
  }) : null;
  if (le instanceof HTMLVideoElement) {
    const ee = () => {
      Ce(), X({ cause: "frame_view", localOnly: !0 });
    }, Pe = () => {
      V({
        hasAudio: q.videoTransport.hasAudio,
        muted: le.muted,
        volume: Number(le.volume ?? q.videoTransport.volume ?? 1)
      });
    }, ne = () => {
      const ke = le.dataset.panoSrc;
      ke && (I.failedSrcs.add(ke), Ce(), X());
    };
    for (const [ke, Ae] of [
      ["loadedmetadata", ee],
      ["loadeddata", ee],
      ["canplay", ee],
      ["volumechange", Pe],
      ["error", ne]
    ])
      le.addEventListener(ke, Ae), N.push(() => le.removeEventListener(ke, Ae));
  }
  function p(ee) {
    return n.uiList(u, ee);
  }
  function h(ee) {
    return n.uiValue(u, ee);
  }
  function x() {
    const ee = String((u == null ? void 0 : u.comfyClass) || (u == null ? void 0 : u.type) || (u == null ? void 0 : u.title) || "");
    if (la(ee))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const Pe = we();
    return Pe ? { videoKey: Pe.videoKey, metaKey: Pe.metaKey } : Q === "stickers" || Q === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function E() {
    const { metaKey: ee } = x(), Pe = h(ee);
    return Array.isArray(Pe) && Pe.length > 0 && Pe[0] && typeof Pe[0] == "object" ? Pe[0] : Pe && typeof Pe == "object" ? Pe : null;
  }
  function j(ee) {
    return ee ? ee instanceof HTMLVideoElement ? [
      String(ee.currentSrc || ee.src || ""),
      Number(ee.videoWidth || 0),
      Number(ee.videoHeight || 0)
    ].join("|") : ee instanceof HTMLCanvasElement ? [
      "canvas",
      Number(ee.width || 0),
      Number(ee.height || 0),
      String(ee.__panoFrameIdx || 0)
    ].join("|") : [
      String(ee.currentSrc || ee.src || ""),
      Number(ee.naturalWidth || ee.width || 0),
      Number(ee.naturalHeight || ee.height || 0)
    ].join("|") : "none";
  }
  function J(ee) {
    const Pe = Math.max(0, Math.floor(Number(ee || 0))), ne = Math.floor(Pe / 60), ke = Pe % 60;
    return `${ne}:${String(ke).padStart(2, "0")}`;
  }
  function ae() {
    return U ? G.timeline.fps : I.metaFps || 1e3;
  }
  function V(ee = {}) {
    const Pe = Number(ee.duration ?? q.videoTransport.duration ?? 0), ne = Math.max(1, Number(ee.fps ?? q.videoTransport.fps ?? 24)), ke = D.frame / ae(), Ae = Object.prototype.hasOwnProperty.call(ee, "ready") ? !!ee.ready : !!q.videoTransport.ready, Ie = D.playing, Te = Object.prototype.hasOwnProperty.call(ee, "visible") ? !!ee.visible : !!q.videoTransport.visible, ze = Object.prototype.hasOwnProperty.call(ee, "muted") ? !!ee.muted : !!(le instanceof HTMLVideoElement ? le.muted : q.videoTransport.muted), Ue = Number(
      Object.prototype.hasOwnProperty.call(ee, "volume") ? ee.volume : le instanceof HTMLVideoElement ? le.volume : q.videoTransport.volume
    ), it = Object.prototype.hasOwnProperty.call(ee, "hasAudio") ? !!ee.hasAudio : w(le), at = Object.prototype.hasOwnProperty.call(ee, "loop") ? !!ee.loop : !!q.videoTransport.loop;
    Object.assign(q.videoTransport, {
      ready: Ae,
      playing: Ie,
      visible: Te,
      loop: at,
      currentTime: Number.isFinite(ke) ? ke : 0,
      duration: Number.isFinite(Pe) ? Pe : 0,
      progressPct: Pe > 1e-6 ? Math.max(0, Math.min(100, ke / Pe * 100)) : 0,
      currentTimeLabel: J(ke),
      durationLabel: J(Pe),
      frameCount: Math.max(0, Number(ee.frameCount ?? q.videoTransport.frameCount ?? 0)),
      fps: ne,
      hasAudio: it,
      muted: ze,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ue) ? Ue : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ue) ? Ue : 1)) * 100),
      thumbnails: Array.isArray(ee.thumbnails) ? ee.thumbnails : q.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(ee.thumbnailCount ?? q.videoTransport.thumbnailCount ?? W))
    });
  }
  function re() {
    return !!(le instanceof HTMLVideoElement && !U && le.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function k() {
    if (!(le instanceof HTMLVideoElement) || !q.videoTransport.hasAudio) return;
    const ee = !le.muted;
    le.muted = ee, !ee && Number(le.volume || 0) <= 0 && (le.volume = Math.max(0.01, Number(q.videoTransport.volume || 1))), V({
      hasAudio: q.videoTransport.hasAudio,
      muted: le.muted,
      volume: Number(le.volume ?? q.videoTransport.volume ?? 1)
    });
  }
  function Y() {
    V({
      visible: re()
    });
  }
  function ie() {
    if (!(le instanceof HTMLVideoElement) || Number(le.videoWidth || 0) < 1 || Number(le.videoHeight || 0) < 1) return !1;
    const ee = Number(le.videoWidth || 0), Pe = Number(le.videoHeight || 0);
    (F.width !== ee || F.height !== Pe) && (F.width = ee, F.height = Pe);
    const ne = F.getContext("2d");
    return ne ? (ne.clearRect(0, 0, ee, Pe), ne.drawImage(le, 0, 0, ee, Pe), F.__panoFrameIdx = Number(F.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function _e() {
    return !D.showsVideo && Number(F.width || 0) > 0 && Number(F.height || 0) > 0 && Number(F.__panoFrameIdx || 0) > 0 ? F : le instanceof HTMLVideoElement && Number(le.videoWidth || 0) > 0 && Number(le.videoHeight || 0) > 0 && Number(le.readyState || 0) >= 2 ? le : null;
  }
  function Me() {
    F.__panoFrameIdx = 0, g.backgroundDirty = !0;
  }
  function Ce() {
    if (!(le instanceof HTMLVideoElement)) return null;
    const { videoKey: ee } = x(), Pe = (we() || bt(u, "background")) && p(ee)[0] || null, ne = c(Pe), ke = [ne, n.linkedVideoFile(u, Le())].filter(Boolean), Ae = ke.find((St) => !I.failedSrcs.has(St)) || "";
    I.videoFailed = !Ae && ke.length > 0;
    const Ie = Ae && Ae === ne ? E() : null;
    I.metaFps = Number(Ie == null ? void 0 : Ie.fps) > 0 ? Number(Ie.fps) : 0;
    const Te = Math.max(1, Number((Ie == null ? void 0 : Ie.fps) || (U ? G.timeline.fps : 24))), ze = le.dataset.panoSrc === Ae && Number.isFinite(le.duration) ? le.duration : 0, Ue = Number((Ie == null ? void 0 : Ie.duration) || ((Ie == null ? void 0 : Ie.frames) > 0 ? Ie.frames / Te : ze)), it = Math.max(0, Number((Ie == null ? void 0 : Ie.frames) || Math.round(Ue * Te))), at = !!(Ie != null && Ie.has_audio) || w(le);
    return Ae && le.dataset.panoSrc !== Ae ? (le.pause(), Me(), le.dataset.panoSrc = Ae, le.loop = !U && !!q.videoTransport.loop, le.muted = !!q.videoTransport.muted, le.volume = Math.max(0, Math.min(1, Number(q.videoTransport.volume ?? 1))), le.src = Ae, le.load(), D.setSource(!0), U || D.seek(0)) : !Ae && le.getAttribute("src") && (le.pause(), le.removeAttribute("src"), delete le.dataset.panoSrc, le.load(), Me(), ce(), D.setSource(!1)), U || (le.loop = !!q.videoTransport.loop), Ae && !U && I.thumbnailSrc !== Ae && !I.thumbnailFailedSrcs.has(Ae) && ye(Ae, Ue, Te), Ae || ce(), V({
      ready: !!Ae,
      visible: !!Ae && re(),
      duration: Ue,
      frameCount: it,
      fps: Te,
      hasAudio: at,
      loop: !!le.loop,
      muted: !!le.muted,
      volume: Number(le.volume ?? q.videoTransport.volume ?? 1),
      thumbnailCount: q.videoTransport.thumbnailCount
    }), Ae || null;
  }
  function xe(ee, Pe = null) {
    return d(u, ee, s, Pe || (() => X()));
  }
  function be(ee = null) {
    return bt(u, "external-sticker") ? xe(li, ee) : null;
  }
  function R() {
    if (!bt(u, "external-sticker")) return null;
    const ee = p(V0)[0];
    if (!ee || typeof ee != "object") return null;
    const Pe = p(R0).map(c).filter(Boolean);
    if (Pe.length) return { frames: Pe, meta: ee };
    const ne = c(p(L0)[0] || null);
    return ne ? { src: ne, meta: ee } : null;
  }
  function z() {
    return bt(u, "external-sticker") ? Ho(p) : null;
  }
  function T() {
    const ee = G.stickers.find(he), Pe = ee ? R() : null, ne = Pe ? Au(ee.clip, r.frame, G.timeline.fps, Pe.meta) : null;
    b.follow({ src: (Pe == null ? void 0 : Pe.src) || "", time: ne, playing: D.advancing, fps: G.timeline.fps });
    const ke = ee ? se(ee) : null, Ae = Pe != null && Pe.frames ? B.picture(Pe.frames, ne, Pe.meta, ke) : b.picture(f, ke);
    return Ae ? { media: Ae, revision: j(Ae), source: Iu(Pe, ke) } : null;
  }
  function K() {
    return !U || !bt(u, "scene") ? null : ba(p("pano_scene_files"), p("pano_scene_meta"), c);
  }
  function C() {
    return !U || !bt(u, "external-sticker") ? null : ba(p("pano_sticker_files"), p("pano_sticker_meta"), c);
  }
  function H(ee) {
    if (!oe || !oi(ee == null ? void 0 : ee.source)) return null;
    const Pe = oe.get(ee.source), ne = Pe.state === "ready" ? c(Pe.file) : null;
    return ne ? { kind: Pe.kind, unlit: Pe.unlit, url: ne, generation: Pe.generation } : null;
  }
  function L(ee) {
    return oe.request(ee);
  }
  function S(ee) {
    oe == null || oe.refresh(ee);
  }
  function Z() {
    var ke;
    if (!oe) return "";
    const ee = oe.failures();
    if (!ee.length) return "";
    const Pe = [...G.stickers, ...me()].map((Ae) => Ae.source).filter(oi), ne = (Ae, Ie) => Ae.filename === Ie.filename && (Ae.subfolder ?? "") === Ie.subfolder && (Ae.storage ?? "input") === Ie.storage;
    return ((ke = ee.find((Ae) => Pe.some((Ie) => ne(Ie, Ae.source)))) == null ? void 0 : ke.error) ?? "";
  }
  function se(ee) {
    var Te;
    if (U && oi(ee == null ? void 0 : ee.source)) return null;
    if (ee && typeof ee == "object" && (he(ee) || ee.external === !0))
      return be(() => {
        Fr(u, "image-loaded");
      });
    const Pe = U ? ge(ee) : String(ee && typeof ee == "object" ? ee.asset_id || ee.assetId || "" : ee || "");
    if (!Pe) return null;
    const ne = s.get(Pe);
    if (ne) return ne;
    const ke = U ? ga(ee.source) : (Te = G.assets) == null ? void 0 : Te[Pe], Ae = l(ke);
    if (!Ae) return null;
    const Ie = new Image();
    return O0(Ie, Ae), Ie.onload = () => {
      F0(Ie, Ae), X();
    }, Ie.onerror = () => {
      T0(Ie, Ae), X();
    }, Ie.src = Ae, s.set(Pe, Ie), Ie;
  }
  function ge(ee) {
    const { source: Pe } = ee;
    return Pe.filename ? `file:${Pe.storage}:${Pe.subfolder}:${Pe.filename}` : `sticker:${ee.id}`;
  }
  function pe() {
    if (Q === "cutout") {
      const Ie = _e();
      if (Ie) return Ie;
      const Te = a(
        u,
        ["erp_image", "bg_erp"],
        () => X(),
        "background:cutout:erp_image|bg_erp"
      );
      return Te && !Bc(Te) ? Te : d(u, "pano_input_images", s, () => X()) || Te || null;
    }
    const ee = _e();
    if (ee) return ee;
    const Pe = we(), ne = Pe || bt(u, "background") ? d(u, (Pe == null ? void 0 : Pe.imageKey) ?? "pano_input_images", s, () => X()) : null;
    if (ne && !Bc(ne)) return ne;
    if (le instanceof HTMLVideoElement && le.dataset.panoSrc) return le;
    if (Pe) return ne;
    const ke = Le();
    return a(u, ke, () => X(), `background:${ke.join("|")}`) || ne || null;
  }
  function we() {
    return !P || !bt(u, "scene") ? null : td(p);
  }
  function Ee() {
    var ee;
    return ((ee = we()) == null ? void 0 : ee.coverage) ?? vn(G.coverage);
  }
  function Le() {
    if (we()) return [];
    if (Q === "cutout") return ["erp_image", "bg_erp"];
    const ee = Array.isArray(u == null ? void 0 : u.inputs) ? u.inputs.map((ke) => String((ke == null ? void 0 : ke.name) || "")) : [], Pe = ee.includes("erp_image"), ne = ee.includes("bg_erp");
    return _ && (Pe || ne) ? Pe ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : Q === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function $e(ee) {
    return ee ? ee instanceof HTMLImageElement ? !!ee.complete && Number(ee.naturalWidth || ee.width || 0) > 0 && Number(ee.naturalHeight || ee.height || 0) > 0 : ee instanceof HTMLVideoElement ? Number(ee.videoWidth || 0) > 0 && Number(ee.videoHeight || 0) > 0 && Number(ee.readyState || 0) >= 2 : Number(ee.width || ee.naturalWidth || 0) > 0 && Number(ee.height || ee.naturalHeight || 0) > 0 : !1;
  }
  function Ge() {
    if (i.failed) return { status: In, detail: "renderer" };
    if (!i.ready) return { status: zn, detail: "boot" };
    const ee = pe(), Pe = I.videoFailed ? In : Uc(ee, $e), ne = [];
    for (const ke of fe()) {
      if ((ke == null ? void 0 : ke.visible) === !1) continue;
      const Ae = se(ke);
      ne.push(Uc(Ae, $e));
    }
    return lA({
      presented: g.hasPresentedFrame,
      background: Pe,
      stickers: ne
    });
  }
  function We() {
    oe == null || oe.close(), le instanceof HTMLVideoElement && le.pause(), N.forEach((ee) => {
      try {
        ee();
      } catch {
      }
    });
  }
  return {
    connect(ee) {
      ({
        backgroundVideoPlace: ve,
        isExternalSticker: he,
        requestDraw: X,
        setTimelineFrame: Se,
        skyStickers: fe,
        syncTimeline: de,
        timelineSpanFrames: te,
        upstreamStickers: me
      } = ee);
    },
    videoState: I,
    queueVideoTransportLayout: O,
    playback: D,
    portVideo: b,
    getNodeUiValue: h,
    getMediaRevisionToken: j,
    playbackFps: ae,
    syncVideoTransportState: V,
    toggleVideoMuted: k,
    syncVideoTransportVisibility: Y,
    refreshModalVideoSource: Ce,
    getStickerUiImage: xe,
    getExternalStickerPreviewImage: be,
    getPortMediaMeta: z,
    followPortSticker: T,
    getStickerImage: se,
    stickerImageKey: ge,
    getConnectedErpImage: pe,
    backgroundCoverage: Ee,
    upstreamBackground: we,
    isDecodedImageReady: $e,
    getStageImageStatus: Ge,
    sceneFiles: K,
    stickerFiles: C,
    file3dEditorFile: H,
    requestFile3d: L,
    refreshFile3d: S,
    file3dNotice: Z,
    disposeMediaSession: We
  };
}
function YA(e = 80, t = null, n = 8) {
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
const qA = 80;
function K0(e) {
  return JSON.stringify($S(e));
}
function XA(e) {
  return YA(qA, { entries: [K0(e)], index: 0 });
}
function W0(e, t) {
  var n, r;
  return (e === "stickers" ? (n = t.active) == null ? void 0 : n.selected_sticker_id : (r = t.active) == null ? void 0 : r.selected_shot_id) ?? null;
}
function JA(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve;
  function he({ initial: fe = !1 } = {}) {
    n || (P(), Q(), le(), fe || g(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(K0(F())), q()));
  }
  function X(fe) {
    var I, W, N;
    if (n) return;
    U();
    const de = fe < 0 ? t.historyController.undo() : t.historyController.redo();
    if (q(), !de) return;
    const te = zS(i, de), me = (I = i.timeline) == null ? void 0 : I.fps, oe = JSON.stringify((W = i.background) == null ? void 0 : W.clip);
    Object.keys(i).forEach((ue) => delete i[ue]), Object.assign(i, te.state), P(!1), Q({ restored: !0 }), o && v(), o && i.timeline.fps !== me ? _.seek(Math.round(t.frame * i.timeline.fps / me)) : o && JSON.stringify(i.background.clip) !== oe && _.seek(t.frame), t.selectedId = W0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((N = d()) == null ? void 0 : N.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), r.backgroundDirty = !0, te.paintingChanged ? m() : f(), $(), ve(), c(), G({ cause: "cutout_frame" });
  }
  function Se() {
    var te, me;
    const fe = Array.isArray((te = t.historyController) == null ? void 0 : te.entries) ? t.historyController.entries : [], de = Number((me = t.historyController) == null ? void 0 : me.index);
    return {
      canUndo: !n && fe.length > 1 && de > 0,
      canRedo: !n && fe.length > 1 && de >= 0 && de < fe.length - 1
    };
  }
  return {
    connect(fe) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: m,
        playback: _,
        pruneUpstreamRecords: g,
        rebuildUpstreamWorking: v,
        releaseHiddenSelection: y,
        requestDraw: G,
        stopTimelinePlayback: U,
        storedEditorState: F,
        syncCutoutShot: P,
        syncPaintUi: $,
        syncPortHandoff: Q,
        syncUndoRedoButtons: q,
        syncUpstreamEdits: le,
        updateSidePanel: ve
      } = fe);
    },
    pushHistory: he,
    restoreHistory: X,
    getHistoryCapabilities: Se
  };
}
function ZA(e) {
  const {
    canvas: t,
    editor: n,
    sceneV2: r,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, _, g, v;
  function y() {
    return s !== "stickers" ? i.shots : r ? [...G(), ...U()] : G();
  }
  function G() {
    return r ? i.stickers.filter((S) => S.placement === "sky") : i.stickers;
  }
  function U() {
    if (!r) return [];
    const S = v(), Z = [...new Set(S.map((se) => se.origin.layer))];
    return S.filter((se) => se.placement === "sky").sort((se, ge) => Z.indexOf(se.origin.layer) - Z.indexOf(ge.origin.layer) || se.z_index - ge.z_index);
  }
  function F(S) {
    return i.stickers.find((Z) => Z.id === S) || v().find((Z) => Z.id === S) || null;
  }
  function P(S) {
    return r && b(S);
  }
  function $(S) {
    return S.source.kind === "file" && !S.source.filename && !S.source.data_url;
  }
  function Q(S) {
    if (!P(S)) return S;
    const Z = xe(S) ? Ct(S) ? g(S) : m(S) : null;
    return Fu(S, n.frame, Z && { width: Z.naturalWidth || Z.width, height: Z.naturalHeight || Z.height });
  }
  function q(S, Z) {
    P(S) ? Rh(S, n.frame, Z) : Object.assign(S, Z);
  }
  function le() {
    const S = i.painting || (i.painting = pi(null));
    return Array.isArray(S.groups) || (S.groups = []), S.groups;
  }
  function ve(S = "paint") {
    var pe, we;
    const Z = Array.isArray((we = (pe = i.painting) == null ? void 0 : pe[S]) == null ? void 0 : we.strokes) ? i.painting[S].strokes : [], se = [], ge = /* @__PURE__ */ new Set();
    for (const Ee of Z) {
      const Le = String((Ee == null ? void 0 : Ee.actionGroupId) || "").trim();
      !Le || ge.has(Le) || (ge.add(Le), se.push(Le));
    }
    return se;
  }
  function he() {
    return ve("paint");
  }
  function X(S, Z) {
    const se = String(Z || "").trim();
    return se ? `${S === "mask" ? "mask" : "paint"}:${se}` : "";
  }
  function Se(S) {
    const Z = String(S || "").trim();
    return Z ? `raster:${Z}` : "";
  }
  function fe(S) {
    const Z = String(S || "").trim();
    if (!Z) return "";
    const se = Z.match(/^raster:(.*)$/);
    return String(se ? se[1] || "" : Z).trim();
  }
  function de(S, Z = null) {
    const se = String(S || "").trim();
    if (!se) return { layerKind: "paint", actionGroupId: "" };
    const ge = se.match(/^(paint|mask):(.*)$/);
    return ge ? { layerKind: ge[1] === "mask" ? "mask" : "paint", actionGroupId: String(ge[2] || "").trim() } : { layerKind: Z === "mask" ? "mask" : "paint", actionGroupId: se };
  }
  function te() {
    var Z;
    let S = -1;
    for (const se of G())
      S = Math.max(S, Number((se == null ? void 0 : se.z_index) || 0));
    for (const se of le())
      S = Math.max(S, Number((se == null ? void 0 : se.z_index) || 0));
    for (const se of Array.isArray((Z = i.painting) == null ? void 0 : Z.raster_objects) ? i.painting.raster_objects : [])
      String((se == null ? void 0 : se.layerKind) || "paint") === "paint" && (S = Math.max(S, Number((se == null ? void 0 : se.z_index) || 0)));
    return S + 1;
  }
  function me(S, Z = null) {
    const se = String(S || "").trim();
    if (!se) return null;
    const ge = le();
    let pe = ge.find((we) => String((we == null ? void 0 : we.actionGroupId) || "") === se);
    return pe ? Z != null && (pe.z_index = Math.max(0, Number(Z || 0))) : (pe = {
      id: se,
      type: "strokeGroup",
      actionGroupId: se,
      z_index: Z == null ? te() : Math.max(0, Number(Z || 0)),
      locked: !1,
      frame: null
    }, ge.push(pe)), pe;
  }
  function oe(S) {
    if (!(S != null && S.centerUv)) return [];
    const Z = Number(S.centerUv.u || 0), se = Number(S.centerUv.v || 0), ge = Number(S.halfW || 0), pe = Number(S.halfH || 0);
    return [
      {
        u: ((Z - ge) % 1 + 1) % 1,
        v: Fe(se - pe, 0, 1)
      },
      {
        u: ((Z + ge) % 1 + 1) % 1,
        v: Fe(se - pe, 0, 1)
      },
      {
        u: ((Z + ge) % 1 + 1) % 1,
        v: Fe(se + pe, 0, 1)
      },
      {
        u: ((Z - ge) % 1 + 1) % 1,
        v: Fe(se + pe, 0, 1)
      }
    ];
  }
  function I() {
    const S = new Set(he()), se = le().filter((ge) => S.has(String((ge == null ? void 0 : ge.actionGroupId) || "")));
    return S.forEach((ge) => {
      se.some((pe) => String((pe == null ? void 0 : pe.actionGroupId) || "") === ge) || se.push({
        id: ge,
        type: "strokeGroup",
        actionGroupId: ge,
        z_index: te(),
        locked: !1,
        frame: null
      });
    }), se.sort((ge, pe) => Number((ge == null ? void 0 : ge.z_index) || 0) - Number((pe == null ? void 0 : pe.z_index) || 0)), i.painting.groups = se, se;
  }
  function W(S, Z, se) {
    var Ae;
    const ge = (Ie) => (Number(Ie || 0) % 1 + 1) % 1, pe = [];
    for (const Ie of se) {
      const Te = Ie == null ? void 0 : Ie.geometry, ze = (Te == null ? void 0 : Te.geometryKind) === "lasso_fill" ? Te == null ? void 0 : Te.points : (Te == null ? void 0 : Te.processedPoints) || (Te == null ? void 0 : Te.rawPoints) || (Te == null ? void 0 : Te.points) || [];
      Array.isArray(ze) && pe.push(...ze);
    }
    if (!pe.length) return null;
    const we = ge(((Ae = pe[0]) == null ? void 0 : Ae.u) || 0);
    let Ee = 0, Le = 0;
    pe.forEach((Ie) => {
      const Te = ge((Ie == null ? void 0 : Ie.u) || 0);
      Ee += we + V(Te, we), Le += Number((Ie == null ? void 0 : Ie.v) || 0);
    });
    const $e = (Ee / pe.length % 1 + 1) % 1;
    let Ge = 1 / 0, We = -1 / 0, ee = 1 / 0, Pe = -1 / 0;
    pe.forEach((Ie) => {
      const Te = ge((Ie == null ? void 0 : Ie.u) || 0), ze = V(Te, $e);
      Ge = Math.min(Ge, ze), We = Math.max(We, ze);
      const Ue = Number((Ie == null ? void 0 : Ie.v) || 0);
      ee = Math.min(ee, Ue), Pe = Math.max(Pe, Ue);
    });
    const ne = se.reduce((Ie, Te) => {
      const ze = l(String((Te == null ? void 0 : Te.toolKind) || "pen")), Ue = hn[ze] || hn[pr], it = Math.max(1, Number((Te == null ? void 0 : Te.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Ie, it);
    }, 0), ke = Math.max(35e-4, ne / 2048);
    return {
      centerUv: { u: (($e + (Ge + We) * 0.5) % 1 + 1) % 1, v: Fe((ee + Pe) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (We - Ge) * 0.5 + ke,
      halfH: (Pe - ee) * 0.5 + ke,
      uvPad: ke
    };
  }
  function N(S, Z, se) {
    const ge = String(S || "").trim();
    if (!ge) return null;
    const pe = le().find((Ee) => String((Ee == null ? void 0 : Ee.actionGroupId) || "") === ge);
    if (!pe) return null;
    const we = se || j(ge, Z);
    return pe.frame = W(ge, Z, we), pe.frame;
  }
  function ue() {
    var ge;
    const S = G().map((pe) => ({
      type: "sticker",
      id: String((pe == null ? void 0 : pe.id) || ""),
      z_index: Number((pe == null ? void 0 : pe.z_index) || 0),
      item: pe
    })), Z = I().map((pe) => ({
      type: "strokeGroup",
      id: String((pe == null ? void 0 : pe.id) || (pe == null ? void 0 : pe.actionGroupId) || ""),
      actionGroupId: String((pe == null ? void 0 : pe.actionGroupId) || ""),
      z_index: Number((pe == null ? void 0 : pe.z_index) || 0),
      item: pe
    })), se = (Array.isArray((ge = i.painting) == null ? void 0 : ge.raster_objects) ? i.painting.raster_objects : []).filter((pe) => String((pe == null ? void 0 : pe.layerKind) || "paint") === "paint").map((pe) => ({
      type: "rasterObject",
      id: String((pe == null ? void 0 : pe.id) || ""),
      z_index: Number((pe == null ? void 0 : pe.z_index) || 0),
      item: pe
    }));
    return [...S, ...Z, ...se].sort((pe, we) => Number(pe.z_index || 0) - Number(we.z_index || 0));
  }
  function A(S = !0) {
    var se, ge, pe, we, Ee, Le;
    const Z = ue().filter(($e) => $e.type === "strokeGroup").map(($e) => String($e.actionGroupId || "")).filter(($e) => !!$e);
    if (S) {
      const $e = String(((ge = (se = n.interaction) == null ? void 0 : se.stroke) == null ? void 0 : ge.actionGroupId) || "").trim(), Ge = String(((we = (pe = n.interaction) == null ? void 0 : pe.stroke) == null ? void 0 : we.layerKind) || "").trim(), We = String(((Le = (Ee = n.interaction) == null ? void 0 : Ee.stroke) == null ? void 0 : Le.toolKind) || "").trim();
      $e && Ge === "paint" && We !== "eraser" && !Z.includes($e) && Z.push($e);
    }
    return Z;
  }
  function O(S = !0) {
    var Le, $e, Ge, We, ee, Pe;
    const Z = ue();
    if (!S) return Z;
    const se = String((($e = (Le = n.interaction) == null ? void 0 : Le.stroke) == null ? void 0 : $e.actionGroupId) || "").trim(), ge = String(((We = (Ge = n.interaction) == null ? void 0 : Ge.stroke) == null ? void 0 : We.layerKind) || "").trim(), pe = String(((Pe = (ee = n.interaction) == null ? void 0 : ee.stroke) == null ? void 0 : Pe.toolKind) || "").trim();
    if (!se || ge !== "paint" || pe === "eraser" || Z.some((ne) => ne.type === "strokeGroup" && String(ne.actionGroupId || "") === se))
      return Z;
    const we = f();
    let Ee = Z.reduce((ne, ke) => Math.max(ne, Number((ke == null ? void 0 : ke.z_index) || 0)), -1) + 1;
    return we && E(we) && String(we.actionGroupId || "") === se && (Ee = Number(we.z_index || 0)), [
      ...Z,
      {
        type: "strokeGroup",
        id: se,
        actionGroupId: se,
        z_index: Ee,
        item: null
      }
    ].sort((ne, ke) => Number((ne == null ? void 0 : ne.z_index) || 0) - Number((ke == null ? void 0 : ke.z_index) || 0));
  }
  function w() {
    return le().slice().sort((S, Z) => Number((S == null ? void 0 : S.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0)).map((S) => x(X("paint", (S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || ""))).filter(Boolean);
  }
  function M() {
    var S;
    return (Array.isArray((S = i.painting) == null ? void 0 : S.raster_objects) ? i.painting.raster_objects : []).filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") === "paint").slice().sort((Z, se) => Number((Z == null ? void 0 : Z.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)).map((Z) => p(Se((Z == null ? void 0 : Z.id) || ""))).filter(Boolean);
  }
  function ce() {
    return Array.isArray(i.stickers) ? G() : [];
  }
  function ye() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ce(), ...U()];
  }
  function D(S) {
    return !!S && Array.isArray(i.shots) && i.shots.includes(S);
  }
  function b(S) {
    return !!S && (Array.isArray(i.stickers) && i.stickers.includes(S) || Ct(S));
  }
  function B() {
    var S;
    return Array.isArray((S = i.painting) == null ? void 0 : S.raster_objects) ? i.painting.raster_objects : [];
  }
  function p(S) {
    const Z = fe(S);
    if (!Z) return null;
    const se = B().find((ge) => String((ge == null ? void 0 : ge.id) || "").trim() === Z);
    return !se || String((se == null ? void 0 : se.layerKind) || "paint") !== "paint" ? null : {
      ...se,
      id: Se(Z),
      type: "rasterObject",
      rasterObjectId: Z
    };
  }
  function h(S) {
    if (!S || typeof S != "object" || String(S.type || "") !== "rasterObject") return !1;
    const Z = fe(S.rasterObjectId || S.id || "");
    return !!Z && !!p(Se(Z));
  }
  function x(S) {
    const Z = de(S), se = String(Z.actionGroupId || "").trim();
    if (!se) return null;
    const ge = le().find((pe) => String((pe == null ? void 0 : pe.id) || (pe == null ? void 0 : pe.actionGroupId) || "") === se || String((pe == null ? void 0 : pe.actionGroupId) || "") === se);
    return ge ? {
      ...ge,
      id: X("paint", se),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: se
    } : null;
  }
  function E(S) {
    if (!S || typeof S != "object" || String(S.type || "") !== "strokeGroup") return !1;
    const Z = String(S.actionGroupId || "").trim(), se = String(S.layerKind || "paint").trim() || "paint";
    return !!Z && !!x(X(se, Z));
  }
  function j(S, Z = null) {
    const se = de(S, Z), ge = String(se.actionGroupId || "").trim();
    return ge ? d(se.layerKind).filter((pe) => String((pe == null ? void 0 : pe.actionGroupId) || "").trim() === ge) : [];
  }
  function J(S, Z = "paint") {
    const se = String(S || "").trim(), pe = `geomv5:${String(Z || "paint").trim() || "paint"}:${se}:${n.mode}:${u()}`;
    if (n.mode === "frame") {
      const we = a(), Ee = String((we == null ? void 0 : we.id) || ""), Le = we ? c(we) : null;
      return `${pe}:frame:${Ee}:${Math.round(Number((we == null ? void 0 : we.yaw_deg) || 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.pitch_deg) || 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.roll_deg) ?? (we == null ? void 0 : we.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Le == null ? void 0 : Le.x) || 0))}:${Math.round(Number((Le == null ? void 0 : Le.y) || 0))}:${Math.round(Number((Le == null ? void 0 : Le.w) || 0))}:${Math.round(Number((Le == null ? void 0 : Le.h) || 0))}`;
    }
    return `${pe}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ae(S, Z, se) {
    return !S || typeof S != "object" ? S : {
      ...S,
      u: ((Number(S.u || 0) + Number(Z || 0)) % 1 + 1) % 1,
      v: Fe(Number(S.v || 0) + Number(se || 0), 0, 1)
    };
  }
  function V(S, Z) {
    let se = Number(S || 0) - Number(Z || 0);
    for (; se > 0.5; ) se -= 1;
    for (; se < -0.5; ) se += 1;
    return se;
  }
  function re(S, Z = null, se = null) {
    var Ge;
    const ge = de(S, Z), pe = Array.isArray(se) ? se : j(ge.actionGroupId, ge.layerKind), we = [];
    if (pe.forEach((We) => {
      const ee = (We == null ? void 0 : We.geometry) || null, Pe = (ee == null ? void 0 : ee.geometryKind) === "lasso_fill" ? ee == null ? void 0 : ee.points : (ee == null ? void 0 : ee.processedPoints) || (ee == null ? void 0 : ee.rawPoints) || (ee == null ? void 0 : ee.points) || [];
      Array.isArray(Pe) && we.push(...Pe);
    }), !we.length) return { u: 0.5, v: 0.5 };
    const Ee = Number(((Ge = we[0]) == null ? void 0 : Ge.u) || 0);
    let Le = 0, $e = 0;
    return we.forEach((We) => {
      Le += Ee + V(Number((We == null ? void 0 : We.u) || 0), Ee), $e += Number((We == null ? void 0 : We.v) || 0);
    }), {
      u: (Le / we.length % 1 + 1) % 1,
      v: Fe($e / we.length, 0, 1)
    };
  }
  function k(S, Z, se = 1, ge = 0) {
    if (!S || typeof S != "object") return S;
    const pe = Number((Z == null ? void 0 : Z.u) || 0), we = Number((Z == null ? void 0 : Z.v) || 0), Ee = V(Number(S.u || 0), pe), Le = Number(S.v || 0) - we, $e = Number(ge || 0) * or, Ge = Math.cos($e), We = Math.sin($e), ee = Math.max(0.02, Number(se || 1)), Pe = (Ee * Ge - Le * We) * ee, ne = (Ee * We + Le * Ge) * ee;
    return {
      ...S,
      u: ((pe + Pe) % 1 + 1) % 1,
      v: Fe(we + ne, 0, 1)
    };
  }
  function Y(S, Z, se, ge = null, pe = null, we = null) {
    const Ee = de(S, pe), Le = String(Ee.actionGroupId || "").trim();
    if (!Le) return !1;
    const $e = d(Ee.layerKind), Ge = Array.isArray(ge) ? new Map(ge.map((ee) => [String((ee == null ? void 0 : ee.id) || ""), ee])) : null;
    let We = !1;
    if ($e.forEach((ee) => {
      if (String((ee == null ? void 0 : ee.actionGroupId) || "").trim() !== Le) return;
      const Pe = (Ge == null ? void 0 : Ge.get(String((ee == null ? void 0 : ee.id) || ""))) || ee, ne = ee == null ? void 0 : ee.geometry, ke = Pe == null ? void 0 : Pe.geometry;
      !ne || !ke || (Array.isArray(ke.points) && (ne.points = ke.points.map((Ae) => ae(Ae, Z, se)), We = !0), Array.isArray(ke.rawPoints) && (ne.rawPoints = ke.rawPoints.map((Ae) => ae(Ae, Z, se)), We = !0), Array.isArray(ke.processedPoints) && (ne.processedPoints = ke.processedPoints.map((Ae) => ae(Ae, Z, se)), We = !0));
    }), We && we) {
      const ee = le().find((Pe) => String((Pe == null ? void 0 : Pe.actionGroupId) || "") === Le);
      ee && (ee.frame = null);
    }
    return We;
  }
  function ie(S, Z = 1, se = 0, ge = null, pe = null, we = null) {
    const Ee = de(S, pe), Le = String(Ee.actionGroupId || "").trim();
    if (!Le) return !1;
    const $e = d(Ee.layerKind), Ge = Array.isArray(ge) ? ge : j(Le, Ee.layerKind), We = Array.isArray(Ge) ? new Map(Ge.map((ne) => [String((ne == null ? void 0 : ne.id) || ""), ne])) : null, ee = (we == null ? void 0 : we.centerUv) ?? re(Le, Ee.layerKind, Ge);
    let Pe = !1;
    if ($e.forEach((ne) => {
      if (String((ne == null ? void 0 : ne.actionGroupId) || "").trim() !== Le) return;
      const ke = (We == null ? void 0 : We.get(String((ne == null ? void 0 : ne.id) || ""))) || ne, Ae = ne == null ? void 0 : ne.geometry, Ie = ke == null ? void 0 : ke.geometry;
      !Ae || !Ie || (Array.isArray(Ie.points) && (Ae.points = Ie.points.map((Te) => k(Te, ee, Z, se)), Pe = !0), Array.isArray(Ie.rawPoints) && (Ae.rawPoints = Ie.rawPoints.map((Te) => k(Te, ee, Z, se)), Pe = !0), Array.isArray(Ie.processedPoints) && (Ae.processedPoints = Ie.processedPoints.map((Te) => k(Te, ee, Z, se)), Pe = !0));
    }), Pe && we) {
      const ne = le().find((ke) => String((ke == null ? void 0 : ke.actionGroupId) || "") === Le);
      ne && (ne.frame = null);
    }
    return Pe;
  }
  function _e(S, Z, se, ge = null) {
    const pe = fe(S);
    if (!pe) return !1;
    const we = B().find((We) => String((We == null ? void 0 : We.id) || "").trim() === pe);
    if (!we) return !1;
    const Ee = ge && typeof ge == "object" ? ge : we, Le = (Ee == null ? void 0 : Ee.transform) || {}, $e = Number(Le.du || 0) + Number(Z || 0), Ge = Fe(Number(Le.dv || 0) + Number(se || 0), -1, 1);
    return we.transform || (we.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), we.transform.du = $e, we.transform.dv = Ge, !0;
  }
  function Me(S, Z = 1, se = null) {
    const ge = fe(S);
    if (!ge) return !1;
    const pe = B().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "").trim() === ge);
    if (!pe) return !1;
    const we = se && typeof se == "object" ? se : pe, Ee = (we == null ? void 0 : we.transform) || {}, Le = Math.max(0.01, Number(Ee.scale || 1)), $e = Fe(Le * Math.max(0.01, Number(Z || 1)), 0.01, 100);
    return pe.transform || (pe.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), pe.transform.scale = $e, !0;
  }
  function Ce() {
    return te();
  }
  function xe(S) {
    var Z;
    return !S || typeof S != "object" ? !1 : o ? ((Z = S.source) == null ? void 0 : Z.kind) === "port" : String(S.id || "") === hd || String(S.source_kind || "") === fA;
  }
  function be(S) {
    return !!(S && typeof S == "object" && S.visible === !1);
  }
  function R(S) {
    return xe(S) && be(S) ? cg : 1;
  }
  function z(S, Z, se = 1, ge = 0) {
    if (!S || typeof S != "object") return S;
    const pe = Number((Z == null ? void 0 : Z.u) || 0), we = Number((Z == null ? void 0 : Z.v) || 0), Ee = V(Number(S.u || 0), pe), Le = Number(S.v || 0) - we, $e = Math.max(0.02, Number(se || 1)), Ge = Number(ge || 0) * or, We = Math.cos(Ge), ee = Math.sin(Ge), Pe = Ee / $e, ne = Le / $e, ke = Pe * We + ne * ee, Ae = -Pe * ee + ne * We;
    return {
      ...S,
      u: ((pe + ke) % 1 + 1) % 1,
      v: we + Ae
    };
  }
  function T(S) {
    const Z = (S == null ? void 0 : S.bbox) || null, se = (S == null ? void 0 : S.transform) || {};
    return Z ? {
      u: (((Number(Z.u0 || 0) + Number(Z.u1 || 0)) * 0.5 + Number(se.du || 0)) % 1 + 1) % 1,
      v: Fe((Number(Z.v0 || 0) + Number(Z.v1 || 0)) * 0.5 + Number(se.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function K(S) {
    var $e, Ge, We, ee;
    const Z = (S == null ? void 0 : S.bbox) || null;
    if (!Z) return [];
    const se = {
      u: (Number(Z.u0 || 0) + Number(Z.u1 || 0)) * 0.5,
      v: (Number(Z.v0 || 0) + Number(Z.v1 || 0)) * 0.5
    }, ge = Math.max(0.01, Number((($e = S == null ? void 0 : S.transform) == null ? void 0 : $e.scale) || 1)), pe = Number(((Ge = S == null ? void 0 : S.transform) == null ? void 0 : Ge.rot_deg) || 0), we = Number(((We = S == null ? void 0 : S.transform) == null ? void 0 : We.du) || 0), Ee = Number(((ee = S == null ? void 0 : S.transform) == null ? void 0 : ee.dv) || 0);
    return [
      { u: Number(Z.u0 || 0), v: Number(Z.v0 || 0) },
      { u: Number(Z.u1 || 0), v: Number(Z.v0 || 0) },
      { u: Number(Z.u1 || 0), v: Number(Z.v1 || 0) },
      { u: Number(Z.u0 || 0), v: Number(Z.v1 || 0) }
    ].map((Pe) => ae(k(Pe, se, ge, pe), we, Ee));
  }
  function C(S) {
    const Z = fe((S == null ? void 0 : S.rasterObjectId) || (S == null ? void 0 : S.id) || ""), se = (S == null ? void 0 : S.transform) || {}, ge = (S == null ? void 0 : S.bbox) || {}, pe = `${Z}:${n.mode}:${u()}:${ge.u0}:${ge.v0}:${ge.u1}:${ge.v1}:${se.du}:${se.dv}:${se.rot_deg}:${se.scale}`;
    if (n.mode === "frame") {
      const we = a(), Ee = we ? c(we) : null;
      return `${pe}:frame:${String((we == null ? void 0 : we.id) || "")}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${pe}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function H(S) {
    const Z = String((S == null ? void 0 : S.id) || ""), se = D(S) ? "frame" : b(S) ? "sticker" : "item", ge = Q(S), pe = [
      se,
      Z,
      n.mode,
      Number((ge == null ? void 0 : ge.yaw_deg) || 0).toFixed(4),
      Number((ge == null ? void 0 : ge.pitch_deg) || 0).toFixed(4),
      Number((ge == null ? void 0 : ge.hFOV_deg) || 0).toFixed(4),
      Number((ge == null ? void 0 : ge.vFOV_deg) || 0).toFixed(4),
      Number((ge == null ? void 0 : ge.rot_deg) || 0).toFixed(4),
      Number((ge == null ? void 0 : ge.roll_deg) || 0).toFixed(4),
      gr(ge),
      P(S) && _(S)
    ].join(":");
    if (n.mode === "frame") {
      const we = a(), Ee = we ? c(we) : null;
      return `${pe}:frame:${String((we == null ? void 0 : we.id) || "")}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${pe}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function L() {
    ue().forEach((Z, se) => {
      Z.type === "sticker" && Z.item && (Z.item.z_index = se), Z.type === "strokeGroup" && Z.item && (Z.item.z_index = se), Z.type === "rasterObject" && Z.item && (Z.item.z_index = se);
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
        getStickerImage: m,
        sceneStickerShown: _,
        upstreamStickerImage: g,
        upstreamStickers: v
      } = S);
    },
    getList: y,
    skyStickers: G,
    upstreamSkyStickers: U,
    stickerById: F,
    isSceneSticker: P,
    isUploadingSticker: $,
    poseOf: Q,
    writePose: q,
    getPaintingGroupList: le,
    makeStrokeGroupSelectionId: X,
    makeRasterObjectSelectionId: Se,
    parseRasterObjectSelectionId: fe,
    ensurePaintingGroupEntry: me,
    getFrameCornersUv: oe,
    ensureGroupFrame: N,
    getDisplayListObjects: ue,
    getOrderedPaintGroupIds: A,
    getOrderedDisplayListObjects: O,
    getSelectableStrokeGroupItems: w,
    getSelectableRasterObjectItems: M,
    cutoutStickers: ce,
    getCutoutSelectableItems: ye,
    isShotItem: D,
    isStickerItem: b,
    getRasterObjectList: B,
    getRasterObjectItem: p,
    isRasterObjectItem: h,
    getStrokeGroupItem: x,
    isStrokeGroupItem: E,
    getStrokeGroupStrokes: j,
    getStrokeGeomCacheKey: J,
    shortestWrappedDelta: V,
    getStrokeGroupCenterUv: re,
    applyStrokeGroupOffset: Y,
    applyStrokeGroupTransform: ie,
    applyRasterObjectOffset: _e,
    applyRasterObjectTransform: Me,
    getNextStickerZIndex: Ce,
    isExternalSticker: xe,
    isStickerHidden: be,
    getStickerDisplayAlpha: R,
    inverseTransformErpPointAround: z,
    getRasterObjectCenterUv: T,
    getRasterObjectTransformedErpPoints: K,
    getRasterObjectGeomCacheKey: C,
    getSceneItemGeomCacheKey: H,
    normalizeDisplayZIndices: L
  };
}
function QA(e) {
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
  let c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w;
  function M() {
    const C = String(t.selectedId || "");
    if (!C) return null;
    const H = P(C);
    if (H) return H;
    const L = G(C);
    return L || (o ? _().find((S) => String((S == null ? void 0 : S.id) || "") === C) || null : v().find((S) => String((S == null ? void 0 : S.id) || "") === C) || null);
  }
  function ce() {
    const C = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], H = [], L = /* @__PURE__ */ new Set();
    return C.forEach((S) => {
      const Z = String(S || "").trim();
      if (!Z || L.has(Z)) return;
      L.add(Z);
      const se = Z === String(t.selectedId || "") ? M() : P(Z) || G(Z) || (o ? _().find((ge) => String((ge == null ? void 0 : ge.id) || "") === Z) : v().find((ge) => String((ge == null ? void 0 : ge.id) || "") === Z));
      se && H.push(se);
    }), H;
  }
  function ye(C = null) {
    const H = Array.isArray(C) ? C : ce();
    if (!H || H.length < 2) return null;
    const L = H.map((Ee) => te(Ee)).filter((Ee) => (Ee == null ? void 0 : Ee.visible) && Array.isArray(Ee.corners) && Ee.corners.length);
    if (!L.length) return null;
    const S = L.flatMap((Ee) => Ee.corners.map((Le) => Number((Le == null ? void 0 : Le.x) || 0))), Z = L.flatMap((Ee) => Ee.corners.map((Le) => Number((Le == null ? void 0 : Le.y) || 0))), se = Math.min(...S), ge = Math.max(...S), pe = Math.min(...Z), we = Math.max(...Z);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (se + ge) * 0.5, y: (pe + we) * 0.5 },
      corners: [
        { x: se, y: pe },
        { x: ge, y: pe },
        { x: ge, y: we },
        { x: se, y: we }
      ],
      edgeMidpoints: [
        { edge: "top", x: (se + ge) * 0.5, y: pe, a: { x: se, y: pe }, b: { x: ge, y: pe } },
        { edge: "right", x: ge, y: (pe + we) * 0.5, a: { x: ge, y: pe }, b: { x: ge, y: we } },
        { edge: "bottom", x: (se + ge) * 0.5, y: we, a: { x: ge, y: we }, b: { x: se, y: we } },
        { edge: "left", x: se, y: (pe + we) * 0.5, a: { x: se, y: we }, b: { x: se, y: pe } }
      ],
      rotateStemBase: { x: (se + ge) * 0.5, y: pe },
      rotateHandle: { x: (se + ge) * 0.5, y: pe - 30 }
    };
  }
  function D(C) {
    const H = String((C == null ? void 0 : C.id) || "").trim();
    return !!H && Array.isArray(t.selectedIds) && t.selectedIds.includes(H);
  }
  function b() {
    const C = M();
    return C ? Se(C) || q(C) ? "stroke" : ve(C) ? "frame" : "image" : null;
  }
  function B(C) {
    if (!C || typeof C != "object") return !1;
    if (Se(C)) {
      const H = String(C.actionGroupId || C.id || "").trim(), L = y().find((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() === H);
      return (L == null ? void 0 : L.locked) === !0;
    }
    if (q(C)) {
      const H = oe(C.rasterObjectId || C.id || ""), L = U().find((S) => String((S == null ? void 0 : S.id) || "").trim() === H);
      return (L == null ? void 0 : L.locked) === !0;
    }
    return Ct(C) && !xa(C) ? !0 : C.locked === !0;
  }
  function p(C = null) {
    const H = Array.isArray(C) ? C : ce();
    return H.length > 0 && H.every((L) => B(L));
  }
  function h(C, H) {
    const L = H === !0;
    if (!C || typeof C != "object") return !1;
    if (Se(C)) {
      const S = String(C.actionGroupId || C.id || "").trim(), Z = y().find((se) => String((se == null ? void 0 : se.actionGroupId) || (se == null ? void 0 : se.id) || "").trim() === S);
      return !Z || Z.locked === L ? !1 : (Z.locked = L, !0);
    }
    if (q(C)) {
      const S = oe(C.rasterObjectId || C.id || ""), Z = U().find((se) => String((se == null ? void 0 : se.id) || "").trim() === S);
      return !Z || Z.locked === L ? !1 : (Z.locked = L, !0);
    }
    return C.locked === L || Ct(C) && !xa(C) ? !1 : (C.locked = L, !0);
  }
  function x() {
    if (n) return;
    const C = ce();
    if (!C.length) return;
    const H = !p(C);
    let L = !1;
    C.forEach((S) => {
      h(S, H) && (L = !0);
    }), L && (W(), d(), O(), w(), N());
  }
  function E(C) {
    xe(), a.selection = null, t.selectedId = (C == null ? void 0 : C.id) || null, t.selectedIds = C != null && C.id ? [C.id] : [], C && X(C) && !Ct(C) ? s.active.selected_sticker_id = C.id || null : s.active.selected_sticker_id = null, C && ve(C) ? s.active.selected_shot_id = C.id || null : C ? ve(C) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function j(C, H = null) {
    const L = [], S = /* @__PURE__ */ new Set();
    (Array.isArray(C) ? C : []).forEach((ge) => {
      const pe = String((ge == null ? void 0 : ge.id) || "").trim();
      !pe || S.has(pe) || (S.add(pe), L.push(pe));
    }), t.selectedIds = L, xe(), a.selection = null;
    const Z = String(H || "").trim();
    t.selectedId = Z && L.includes(Z) ? Z : L[L.length - 1] || null;
    const se = M();
    s.active.selected_sticker_id = se && X(se) && !Ct(se) && se.id || null, se && ve(se) ? s.active.selected_shot_id = se.id || null : L.length || (s.active.selected_shot_id = null);
  }
  function J() {
    const C = (Array.isArray(s.shots) ? s.shots : []).map((L, S) => ({
      kind: "frame",
      item: L,
      label: String((L == null ? void 0 : L.label) || `Frame ${S + 1}`)
    })), H = f().map((L, S) => {
      var se, ge;
      const Z = Q(L) ? String(L.id || hd) : String(((ge = (se = s.assets) == null ? void 0 : se[L.asset_id]) == null ? void 0 : ge.name) || L.asset_id || L.id || `Image ${S + 1}`);
      return {
        kind: "image",
        item: L,
        label: Z
      };
    });
    return [...C, ...H];
  }
  function ae(C) {
    return C === "frame" ? je.camera : C === "stroke" ? je.paintbrush_vertical_tool : je.image;
  }
  function V(C) {
    return !C || !C.item ? {
      label: String((C == null ? void 0 : C.label) || ""),
      icon: null
    } : {
      label: String(C.label || ""),
      icon: ae(C.kind)
    };
  }
  function re() {
    if (n) return;
    const C = M();
    !C || !Q(C) || (C.visible = he(C), z(), fe(), W(), d(), w(), O(), N());
  }
  function k() {
    if (n || l !== "stickers") return;
    const C = M();
    if (!C || !Q(C)) return;
    const H = C.initial_pose;
    if (!H || typeof H != "object") return;
    C.yaw_deg = Number(H.yaw_deg ?? C.yaw_deg ?? 0), C.pitch_deg = Number(H.pitch_deg ?? C.pitch_deg ?? 0), C.hFOV_deg = Number(H.hFOV_deg ?? C.hFOV_deg ?? 30);
    const L = F(li, () => {
      N();
    });
    L && (L.complete || L.naturalWidth || L.width) ? C.vFOV_deg = u(
      Number(H.hFOV_deg ?? C.hFOV_deg ?? 30),
      Number(L.naturalWidth || L.width || 1),
      Number(L.naturalHeight || L.height || 1)
    ) : C.vFOV_deg = Number(H.vFOV_deg ?? C.vFOV_deg ?? 30), C.rot_deg = Number(H.rot_deg ?? C.rot_deg ?? 0), W(), d(), w(), O(), N();
  }
  function Y(C) {
    if (!C || !Q(C)) return null;
    const H = C.initial_pose;
    if (!H || typeof H != "object") return null;
    const L = {
      yaw_deg: Number(H.yaw_deg ?? C.yaw_deg ?? 0),
      pitch_deg: Number(H.pitch_deg ?? C.pitch_deg ?? 0),
      hFOV_deg: Number(H.hFOV_deg ?? C.hFOV_deg ?? 30),
      vFOV_deg: Number(H.vFOV_deg ?? C.vFOV_deg ?? 30),
      rot_deg: Number(H.rot_deg ?? C.rot_deg ?? 0)
    }, S = F(li, () => {
      N();
    });
    return S && (S.complete || S.naturalWidth || S.width) && (L.vFOV_deg = u(
      L.hFOV_deg,
      Number(S.naturalWidth || S.width || 1),
      Number(S.naturalHeight || S.height || 1)
    )), L;
  }
  function ie() {
    const C = M();
    if (!C || !Q(C)) return !1;
    const H = Y(C);
    if (!H) return !1;
    const L = (S, Z) => Math.abs(Number(S || 0) - Number(Z || 0)) <= 1e-4;
    return !(L(C.yaw_deg, H.yaw_deg) && L(C.pitch_deg, H.pitch_deg) && L(C.hFOV_deg, H.hFOV_deg) && L(C.vFOV_deg, H.vFOV_deg) && L(C.rot_deg, H.rot_deg));
  }
  function _e(C = {}) {
    const L = C.preservePanelValues !== !1 ? I(M()) : null;
    L && (t.panelLastValues = {
      yaw_deg: Number(L.yaw_deg || 0),
      pitch_deg: Number(L.pitch_deg || 0),
      hFOV_deg: Number(L.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(L.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(L.rot_deg || 0),
      roll_deg: Number(L.roll_deg || 0),
      aspect_id: gr(L)
    }), t.selectedId = null, t.selectedIds = [], xe(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function Me() {
    if (!i || !t.worldSelectedId) return null;
    const C = A(t.worldSelectedId);
    return (C == null ? void 0 : C.placement) === "world" ? C : null;
  }
  function Ce(C) {
    E(null), t.worldSelectedId = C, r.backgroundDirty = !0;
  }
  function xe() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function be(C) {
    return !!C && !n && !B(C);
  }
  function R() {
    if (l !== "cutout") return;
    const C = m();
    C && (t.selectedId = String(C.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function z() {
    var H;
    const C = M();
    (le(C) && !ue(C) || t.selectedId === Tu && $() && !c() || b() === "stroke" && !me()) && E(null), ((H = Me()) == null ? void 0 : H.visible) === !1 && xe();
  }
  function T() {
    if (n) return;
    const C = ce();
    if (!M() || C.length === 0 || C.some(Ct) || C.some((pe) => B(pe))) return;
    de();
    const L = g(), S = new Set(C.map((pe) => X(pe) ? `sticker:${String(pe.id || "")}` : q(pe) ? `rasterObject:${oe(pe.rasterObjectId || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || pe.id || "")}`)), Z = [], se = [];
    if (L.forEach((pe) => {
      var Ee, Le;
      const we = pe.type === "sticker" ? `sticker:${String(((Ee = pe.item) == null ? void 0 : Ee.id) || "")}` : pe.type === "rasterObject" ? `rasterObject:${String(((Le = pe.item) == null ? void 0 : Le.id) || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || "")}`;
      S.has(we) ? Z.push(pe) : se.push(pe);
    }), !Z.length || Z[Z.length - 1] === L[L.length - 1]) return;
    [...se, ...Z].forEach((pe, we) => {
      pe.type === "sticker" && pe.item && (pe.item.z_index = we), pe.type === "strokeGroup" && pe.item && (pe.item.z_index = we), pe.type === "rasterObject" && pe.item && (pe.item.z_index = we);
    }), fe(), W(), d(), O(), N();
  }
  function K() {
    if (n) return;
    const C = ce();
    if (!M() || C.length === 0 || C.some(Ct) || C.some((pe) => B(pe))) return;
    de();
    const L = g(), S = new Set(C.map((pe) => X(pe) ? `sticker:${String(pe.id || "")}` : q(pe) ? `rasterObject:${oe(pe.rasterObjectId || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || pe.id || "")}`)), Z = [], se = [];
    if (L.forEach((pe) => {
      var Ee, Le;
      const we = pe.type === "sticker" ? `sticker:${String(((Ee = pe.item) == null ? void 0 : Ee.id) || "")}` : pe.type === "rasterObject" ? `rasterObject:${String(((Le = pe.item) == null ? void 0 : Le.id) || pe.id || "")}` : `strokeGroup:${String(pe.actionGroupId || "")}`;
      S.has(we) ? Z.push(pe) : se.push(pe);
    }), !Z.length || Z[0] === L[0]) return;
    [...Z, ...se].forEach((pe, we) => {
      pe.type === "sticker" && pe.item && (pe.item.z_index = we), pe.type === "strokeGroup" && pe.item && (pe.item.z_index = we), pe.type === "rasterObject" && pe.item && (pe.item.z_index = we);
    }), fe(), W(), d(), O(), N();
  }
  return {
    connect(C) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: m,
        getCutoutSelectableItems: _,
        getDisplayListObjects: g,
        getList: v,
        getPaintingGroupList: y,
        getRasterObjectItem: G,
        getRasterObjectList: U,
        getStickerUiImage: F,
        getStrokeGroupItem: P,
        hasCamera: $,
        isExternalSticker: Q,
        isRasterObjectItem: q,
        isSceneSticker: le,
        isShotItem: ve,
        isStickerHidden: he,
        isStickerItem: X,
        isStrokeGroupItem: Se,
        markObjectVisualsDirty: fe,
        normalizeDisplayZIndices: de,
        objectGeom: te,
        paintingShown: me,
        parseRasterObjectSelectionId: oe,
        poseOf: I,
        pushHistory: W,
        requestDraw: N,
        sceneStickerShown: ue,
        stickerById: A,
        updateSelectionMenu: O,
        updateSidePanel: w
      } = C);
    },
    getSelected: M,
    getSelectedItems: ce,
    getMultiSelectionGeom: ye,
    isItemSelected: D,
    getSelectedKind: b,
    isItemLocked: B,
    areAllSelectedItemsLocked: p,
    toggleSelectedLock: x,
    setSelectedItem: E,
    setSelectedItems: j,
    getCutoutInspectorItems: J,
    getSelectionItemIcon: ae,
    getSelectionItemLabelData: V,
    toggleSelectedExternalStickerVisibility: re,
    restoreSelectedToInitialPose: k,
    canRestoreSelectedToInitial: ie,
    clearSelection: _e,
    selectedWorldSticker: Me,
    selectWorldSticker: Ce,
    clearWorldSelection: xe,
    worldStickerEditable: be,
    applyInitialCutoutFocus: R,
    releaseHiddenSelection: z,
    bringSelectedToFront: T,
    sendSelectedToBack: K
  };
}
function eC(e) {
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
    return ug({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function v() {
    const w = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return w.some((M, ce) => M !== f.key[ce]) && (f = { key: w, projection: Uu(g(), n.width, n.height) }), f.projection;
  }
  function y(w) {
    const M = v().project(w);
    return M.z > 1e-4 ? M : null;
  }
  function G(w, M) {
    return v().ray(w, M);
  }
  function U() {
    const w = n.width, M = n.height, ce = 2;
    if (w / Math.max(M, 1) >= ce) {
      const p = M, h = p * ce;
      return { x: (w - h) * 0.5, y: 0, w: h, h: p };
    }
    const D = w, b = D / ce;
    return { x: 0, y: (M - b) * 0.5, w: D, h: b };
  }
  function F(w) {
    return {
      lon: Math.atan2(w.x, w.z),
      lat: Math.asin(Fe(w.y, -1, 1))
    };
  }
  function P(w, M = null) {
    const { lon: ce, lat: ye } = F(w), D = U();
    let b = D.x + (ce / (2 * Math.PI) + 0.5) * D.w;
    const B = D.y + (0.5 - ye / Math.PI) * D.h;
    if (M !== null) {
      for (; b - M > D.w / 2; ) b -= D.w;
      for (; b - M < -D.w / 2; ) b += D.w;
    }
    return { x: b, y: B, z: 1 };
  }
  function $(w) {
    const M = c(w), ce = Yi(
      Number(M.yaw_deg || 0),
      Number(M.pitch_deg || 0),
      Number(M.rot_deg || M.roll_deg || 0)
    ), ye = Math.tan(Fe(Number(M.hFOV_deg || 20), 0.1, 179) * 0.5 * or), D = Math.tan(Fe(Number(M.vFOV_deg || 20), 0.1, 179) * 0.5 * or);
    return {
      centerDir: ce.fwd,
      right: ce.right,
      up: ce.up,
      tanX: ye,
      tanY: D
    };
  }
  function Q(w, M, ce) {
    return MA(Pp(Pp(w.centerDir, Np(w.right, M)), Np(w.up, ce)));
  }
  function q(w) {
    const M = $(w);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: ye, v: D }) => Q(M, ye * M.tanX, D * M.tanY));
  }
  function le(w, M, ce) {
    const ye = $(w), D = (M * 2 - 1) * ye.tanX, b = (1 - ce * 2) * ye.tanY;
    return Q(ye, D, b);
  }
  function ve(w) {
    const M = t.width / Math.max(1, n.width), ce = t.height / Math.max(1, n.height);
    return { x: w.x * M, y: w.y * ce, w: w.w * M, h: w.h * ce };
  }
  function he(w, M = null, ce = null, ye = null) {
    if (r.mode === "frame") {
      const D = M || a();
      if (!D) return [];
      const b = ce || l(D);
      return W(w, D, b);
    }
    return me(w, ye);
  }
  function X(w, M = null, ce = null, ye = null, D = null) {
    if (!w) return null;
    if (r.mode === "unwrap") {
      const B = me([w], D);
      return B[0] ? { x: B[0].x, y: B[0].y, z: 1 } : null;
    }
    const b = fe(w);
    return b ? d(b, M, ce, ye) : null;
  }
  function Se(w, M) {
    if (!w || !M) return null;
    const ce = Number(M.x || 0), ye = Number(M.y || 0);
    return le(w, ce, ye);
  }
  function fe(w) {
    if (!w) return null;
    const M = (Number(w.u || 0) - 0.5) * (2 * Math.PI), ce = (0.5 - Number(w.v || 0)) * Math.PI, ye = Math.cos(ce);
    return ol(ye * Math.sin(M), Math.sin(ce), ye * Math.cos(M));
  }
  function de(w, M) {
    if (!w || !M) return null;
    const ce = $(w), ye = Ql(M, ce.centerDir);
    if (!Number.isFinite(ye) || ye <= 1e-6) return null;
    const D = Ql(M, ce.right) / ye, b = Ql(M, ce.up) / ye;
    return {
      x: (D / Math.max(1e-6, ce.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, ce.tanY)) * 0.5
    };
  }
  function te(w) {
    if (!Array.isArray(w) || w.length < 3) return [];
    if (r.mode === "unwrap") {
      const ce = U();
      return w.map((ye) => ({
        x: ce.x + Number(ye.u || 0) * ce.w,
        y: ce.y + Number(ye.v || 0) * ce.h
      }));
    }
    const M = w.map((ce) => y(fe(ce))).filter(Boolean);
    return M.every((ce) => Number(ce.z || 0) > 0) ? M.map((ce) => ({ x: Number(ce.x || 0), y: Number(ce.y || 0) })) : [];
  }
  function me(w, M = null) {
    if (!Array.isArray(w) || w.length < 1) return [];
    if (r.mode === "unwrap") {
      const ye = U();
      return w.map((D) => {
        const b = (Number(D.u || 0) % 1 + 1) % 1, B = M == null ? b : Number(M || 0) + u(b, M);
        return {
          x: ye.x + B * ye.w,
          y: ye.y + Number(D.v || 0) * ye.h
        };
      });
    }
    const ce = w.map((ye) => y(fe(ye))).filter(Boolean);
    return ce.every((ye) => Number(ye.z || 0) > 0) ? ce.map((ye) => ({ x: Number(ye.x || 0), y: Number(ye.y || 0) })) : [];
  }
  function oe(w, M = 160) {
    if (!Array.isArray(w) || w.length < 3) return !1;
    for (let ce = 0; ce < w.length; ce += 1) {
      const ye = w[ce], D = w[(ce + 1) % w.length];
      if (!ye || !D || !Number.isFinite(ye.x) || !Number.isFinite(ye.y) || !Number.isFinite(D.x) || !Number.isFinite(D.y) || Math.hypot(Number(D.x) - Number(ye.x), Number(D.y) - Number(ye.y)) > M) return !1;
    }
    return !0;
  }
  function I(w, M, ce) {
    if (!Array.isArray(w) || w.length < 3 || !M || !ce) return [];
    const ye = [];
    for (const D of w) {
      const b = fe(D), B = de(M, b);
      if (!B) return [];
      ye.push({
        x: Number(ce.x || 0) + Number(B.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(B.y || 0) * Number(ce.h || 0)
      });
    }
    return oe(ye, Math.max(80, Math.max(ce.w, ce.h) * 0.75)) ? ye : [];
  }
  function W(w, M, ce) {
    if (!Array.isArray(w) || w.length < 1 || !M || !ce) return [];
    const ye = [];
    for (const D of w) {
      const b = fe(D), B = de(M, b);
      B && ye.push({
        x: Number(ce.x || 0) + Number(B.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(B.y || 0) * Number(ce.h || 0)
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
      const b = U(), B = (w.x - b.x) / Math.max(1, b.w), p = (w.y - b.y) / Math.max(1, b.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (B % 1 + 1) % 1,
        v: Fe(p, 0, 1),
        t: Number(M || 0)
      };
    }
    const ce = G(w.x, w.y), { lon: ye, lat: D } = F(ce);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ye / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - D / Math.PI, 0, 1),
      t: Number(M || 0)
    };
  }
  function O(w, M, ce = performance.now()) {
    const ye = l(M);
    if (!ye) return null;
    const D = {
      x: (Number(w.x) - ye.x) / Math.max(1, ye.w),
      y: (Number(w.y) - ye.y) / Math.max(1, ye.h)
    };
    if (D.x < 0 || D.x > 1 || D.y < 0 || D.y > 1) return null;
    const b = Se(M, D);
    if (!b) return null;
    const { lon: B, lat: p } = F(b);
    return {
      targetKind: "ERP_GLOBAL",
      u: (B / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - p / Math.PI, 0, 1),
      t: Number(ce || 0)
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
    isErpCamera: m,
    currentViewCamera: g,
    currentViewProjection: v,
    projectDir: y,
    screenToWorldDir: G,
    getUnwrapRect: U,
    projectDirUnwrap: P,
    getStickerFrame: $,
    stickerDirFromFrame: Q,
    stickerCornersDir: q,
    stickerSampleDir: le,
    stickerCornerOrderSanity: _,
    projectEditorPoints: he,
    projectErpPointToEditor: X,
    frameLocalPointToWorldDir: Se,
    erpPointToWorldDir: fe,
    worldDirToFrameLocalPoint: de,
    projectLassoPointsToCurrentView: te,
    projectErpLassoPointsToFrameRect: I,
    screenPos: N,
    screenPosCss: ue,
    screenPosToErpPoint: A,
    screenPosToFrameAsErpPoint: O,
    deviceRect: ve
  };
}
function tC(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W;
  function N(b, B) {
    const p = String(b.actionGroupId || b.id || "").trim(), h = U(p, b.layerKind), x = a(p, b.layerKind, h), E = (x == null ? void 0 : x.centerUv) || G(p, b.layerKind, h), j = r.mode === "unwrap" ? Number((E == null ? void 0 : E.u) || 0) : null, J = [], ae = r.mode === "frame" ? l() : null, V = ae ? u(ae) : null;
    for (const R of h) {
      const z = (R == null ? void 0 : R.geometry) || null, T = (z == null ? void 0 : z.geometryKind) === "lasso_fill" ? z == null ? void 0 : z.points : (z == null ? void 0 : z.processedPoints) || (z == null ? void 0 : z.rawPoints) || (z == null ? void 0 : z.points) || [], K = fe(T, ae, V, j).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
      if (!K.length) continue;
      const C = c(String((R == null ? void 0 : R.toolKind) || "pen")), H = hn[C] || hn[pr];
      J.push({
        points: K,
        closed: String((z == null ? void 0 : z.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((R == null ? void 0 : R.size) || 10) * Math.max(0.1, Number((H == null ? void 0 : H.sizeScale) ?? 1)) + 10),
        layerKind: String((R == null ? void 0 : R.layerKind) || b.layerKind || "paint")
      });
    }
    const re = de(E, null, ae, V, j);
    if (!re) {
      const R = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(B, R), R;
    }
    const Y = d(x).map((R) => de(R, re.x, ae, V, j)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y)).map((R) => ({ x: Number(R.x || 0), y: Number(R.y || 0) }));
    if (Y.length < 4) {
      const R = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(B, R), R;
    }
    const ie = (R, z) => ({
      x: (Number((R == null ? void 0 : R.x) || 0) + Number((z == null ? void 0 : z.x) || 0)) * 0.5,
      y: (Number((R == null ? void 0 : R.y) || 0) + Number((z == null ? void 0 : z.y) || 0)) * 0.5,
      a: R,
      b: z
    }), _e = ie(Y[0], Y[1]), Me = ie(Y[1], Y[2]), Ce = ie(Y[2], Y[3]), xe = ie(Y[3], Y[0]), be = {
      kind: "strokeGroup",
      center: { x: Number(re.x || 0), y: Number(re.y || 0) },
      corners: Y,
      edgeMidpoints: [
        { edge: "top", ..._e },
        { edge: "right", ...Me },
        { edge: "bottom", ...Ce },
        { edge: "left", ...xe }
      ],
      rotateStemBase: { x: _e.x, y: _e.y },
      rotateHandle: { x: _e.x, y: _e.y - 30 },
      strokePaths: J,
      visible: !0
    };
    return r._strokeGeomCache.set(B, be), be;
  }
  function ue(b, B) {
    const p = r.mode === "frame" ? l() : null, h = p ? u(p) : null, x = f(b), E = r.mode === "unwrap" ? Number((x == null ? void 0 : x.u) || 0) : null, j = de(x, null, p, h, E), ae = _(b).map((Y) => de(Y, (j == null ? void 0 : j.x) ?? null, p, h, E)).filter((Y) => Number.isFinite(Y == null ? void 0 : Y.x) && Number.isFinite(Y == null ? void 0 : Y.y));
    if (!Array.isArray(ae) || ae.length < 4) {
      const Y = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(B, Y), Y;
    }
    const V = ae.slice(0, 4).map((Y) => ({ x: Number((Y == null ? void 0 : Y.x) || 0), y: Number((Y == null ? void 0 : Y.y) || 0) })), k = {
      kind: "rasterObject",
      center: {
        x: V.reduce((Y, ie) => Y + Number(ie.x || 0), 0) / V.length,
        y: V.reduce((Y, ie) => Y + Number(ie.y || 0), 0) / V.length
      },
      corners: V,
      visible: !0
    };
    return r._strokeGeomCache.set(B, k), k;
  }
  function A(b, B = null, p = null, h = null, x = {}) {
    if (r.mode === "frame") {
      const re = p || l(), k = h || u(re);
      if (!re || !k) return null;
      const Y = re ? W(re, b) : null;
      return Y ? {
        x: Number(k.x || 0) + Number(Y.x || 0) * Number(k.w || 0),
        y: Number(k.y || 0) + Number(Y.y || 0) * Number(k.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return Se(b, B);
    const E = 1e-4, j = o().project(b, E);
    if (!Number.isFinite(j.z) || j.z <= E && !(x != null && x.clipBehind)) return null;
    const J = n.width, ae = n.height, V = Math.max(J, ae) * 2;
    return {
      x: Fe(j.x, -V, J + V),
      y: Fe(j.y, -V, ae + V),
      z: Math.max(j.z, E),
      rawZ: j.z,
      clipped: j.z <= E
    };
  }
  function O(b, B = []) {
    if (r.mode !== "pano" || q(b)) return 1;
    const p = B.map((h) => Number((h == null ? void 0 : h.rawZ) ?? (h == null ? void 0 : h.z))).filter((h) => Number.isFinite(h));
    return p.length ? kA(0.035, 0.2, Math.min(...p)) : 1;
  }
  function w(b) {
    if ($(b) && !te(b)) return { visible: !1 };
    const B = he(b), p = gn(Number(B.yaw_deg || 0), Number(B.pitch_deg || 0)), h = r.mode === "frame" ? l() : null, x = h ? u(h) : null, E = r.mode === "pano" && (q(b) || Q(b)), j = E ? { clipBehind: !0 } : null, J = A(p, null, h, x, j);
    if (!J) return { visible: !1 };
    const ae = v(b), re = me(b).map((S) => A(S, J.x, h, x, j)).filter((S) => Number.isFinite(S == null ? void 0 : S.x) && Number.isFinite(S == null ? void 0 : S.y));
    if (re.length < 4) return { visible: !1 };
    const k = oe(ae, 0, ae.tanY), Y = oe(ae, 0, ae.tanY + Math.max(ae.tanY * 0.43, 0.053)), ie = A(k, J.x, h, x, j);
    if (!ie) return { visible: !1 };
    const _e = A(Y, (ie == null ? void 0 : ie.x) ?? J.x, h, x, j), Me = ((_e == null ? void 0 : _e.x) ?? ie.x) - ie.x, Ce = ((_e == null ? void 0 : _e.y) ?? ie.y) - ie.y, xe = Math.hypot(Me, Ce) || 1, be = {
      x: ie.x + Me / xe * 30,
      y: ie.y + Ce / xe * 30
    }, R = A(oe(ae, 0, ae.tanY), J.x, h, x, j), z = A(oe(ae, ae.tanX, 0), J.x, h, x, j), T = A(oe(ae, 0, -ae.tanY), J.x, h, x, j), K = A(oe(ae, -ae.tanX, 0), J.x, h, x, j);
    if (!R || !z || !T || !K) return { visible: !1 };
    const C = [
      J,
      ...re,
      ie,
      _e,
      R,
      z,
      T,
      K
    ];
    if (E && !C.some((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z)) > 1e-4)) return { visible: !1 };
    const H = O(b, C), L = [
      {
        edge: "top",
        x: R.x,
        y: R.y,
        a: { x: re[0].x, y: re[0].y },
        b: { x: re[1].x, y: re[1].y }
      },
      {
        edge: "right",
        x: z.x,
        y: z.y,
        a: { x: re[1].x, y: re[1].y },
        b: { x: re[2].x, y: re[2].y }
      },
      {
        edge: "bottom",
        x: T.x,
        y: T.y,
        a: { x: re[2].x, y: re[2].y },
        b: { x: re[3].x, y: re[3].y }
      },
      {
        edge: "left",
        x: K.x,
        y: K.y,
        a: { x: re[3].x, y: re[3].y },
        b: { x: re[0].x, y: re[0].y }
      }
    ];
    return {
      center: { x: J.x, y: J.y },
      corners: re.map((S) => ({ x: S.x, y: S.y })),
      edgeMidpoints: L,
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: be,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: H,
      visible: !0
    };
  }
  function M(b) {
    if (t && Q(b) && F()) return { visible: !1 };
    if (!ve() && (le(b) || P(b))) return { visible: !1 };
    if (le(b)) {
      const x = String(b.actionGroupId || b.id || "").trim(), E = y(x, b.layerKind), j = r._strokeGeomCache.get(E);
      return j || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), N(b, E));
    }
    if (P(b)) {
      const x = m(b), E = r._strokeGeomCache.get(x);
      return E || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), ue(b, x));
    }
    const B = g(b), p = r._strokeGeomCache.get(B);
    if (p) return p;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const h = w(b);
    return r._strokeGeomCache.set(B, h), h;
  }
  function ce(b, B, p, h = null) {
    const x = [];
    for (let E = 0; E <= p; E += 1) {
      const j = E / p;
      let J = 0, ae = 0;
      B === 0 ? (J = j, ae = 0) : B === 1 ? (J = 1, ae = j) : B === 2 ? (J = 1 - j, ae = 1) : (J = 0, ae = 1 - j);
      const V = I(b, J, ae), re = r.mode === "unwrap" ? Se(V, h) : X(V);
      re && x.push(re);
    }
    return x;
  }
  function ye() {
    const b = [...Array.isArray(i.shots) ? i.shots : []], B = [...s()].sort((p, h) => Number(p.z_index || 0) - Number(h.z_index || 0));
    return [...b, ...B];
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
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: v,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: G,
        getStrokeGroupStrokes: U,
        isFreeSpaceView: F,
        isRasterObjectItem: P,
        isSceneSticker: $,
        isShotItem: Q,
        isStickerItem: q,
        isStrokeGroupItem: le,
        paintingShown: ve,
        poseOf: he,
        projectDir: X,
        projectDirUnwrap: Se,
        projectEditorPoints: fe,
        projectErpPointToEditor: de,
        sceneStickerShown: te,
        stickerCornersDir: me,
        stickerDirFromFrame: oe,
        stickerSampleDir: I,
        worldDirToFrameLocalPoint: W
      } = b);
    },
    projectSceneItemDir: A,
    objectGeom: M,
    sampleStickerEdge: ce,
    getCutoutSelectableItemsForDisplay: ye,
    getCutoutSelectableItemsForHit: D
  };
}
const Es = /* @__PURE__ */ new Map();
function nC(e) {
  const {
    api: t,
    editor: n,
    node: r,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve;
  function he(p = n.interaction) {
    const h = String((p == null ? void 0 : p.kind) || "");
    if (h === "paint_stroke" || h === "paint_lasso_fill" || h === "move_stroke_group" || h === "scale_stroke_group" || h === "rotate_stroke_group" || h === "move_raster_object" || h === "scale_raster_object") return !0;
    if (h === "move_multi") {
      const x = Array.isArray(p == null ? void 0 : p.strokeSnapshots) && p.strokeSnapshots.length > 0, E = Array.isArray(p == null ? void 0 : p.rasterSnapshots) && p.rasterSnapshots.length > 0;
      return x || E;
    }
    return !1;
  }
  function X() {
    var h, x, E, j;
    let p = null;
    try {
      const J = g(), ae = ((j = (E = (x = (h = n.paintEngine) == null ? void 0 : h.getErpTarget) == null ? void 0 : x.call(h, J)) == null ? void 0 : E.displayPaint) == null ? void 0 : j.canvas) || null;
      ae && (p = {
        source: ae,
        revision: `${v()}:${Se()}`
      });
    } catch {
      p = null;
    }
    return p;
  }
  function Se() {
    var j, J, ae, V, re, k, Y;
    const p = n.interaction, h = String((p == null ? void 0 : p.kind) || "");
    if (!he(p)) return "";
    if (h === "paint_stroke" || h === "paint_lasso_fill") {
      const ie = ((j = p == null ? void 0 : p.stroke) == null ? void 0 : j.geometry) || null, _e = String(((J = p == null ? void 0 : p.stroke) == null ? void 0 : J.layerKind) || ""), Me = ((ae = ie == null ? void 0 : ie.rawPoints) == null ? void 0 : ae.length) ?? ((V = ie == null ? void 0 : ie.points) == null ? void 0 : V.length) ?? 0, Ce = String((p == null ? void 0 : p._livePreviewToken) || "");
      return `_${_e || "paint"}_${h}_live${Ce}_${Me}_${n.livePaintInteractionRevision}`;
    }
    const x = String(((re = p == null ? void 0 : p.item) == null ? void 0 : re.actionGroupId) || ""), E = String(((k = p == null ? void 0 : p.item) == null ? void 0 : k.rasterObjectId) || ((Y = p == null ? void 0 : p.item) == null ? void 0 : Y.id) || "");
    return `_${h}_${x || E || "active"}_${n.livePaintInteractionRevision}`;
  }
  function fe(p, h = null) {
    const x = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!x) return null;
    const E = s.get(x);
    if (E)
      return E.complete || E.width || E.naturalWidth, E;
    const j = new Image();
    return j.onload = () => {
      typeof h == "function" && h();
    }, j.src = x, s.set(x, j), j;
  }
  function de(p) {
    const h = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!h) return null;
    const x = o.get(h);
    if (x) return x.ready ? x : null;
    const E = fe(p, () => {
      const Y = o.get(h);
      Y && (Y.ready = !1), q({ localOnly: !0 });
    });
    if (!E || !(E.complete || E.width || E.naturalWidth)) return null;
    const j = Number(E.naturalWidth || E.width || 0), J = Number(E.naturalHeight || E.height || 0);
    if (j < 1 || J < 1) return null;
    const ae = Gt({ label: "editor.image-pixels" });
    ae.width = j, ae.height = J;
    const V = ae.getContext("2d", { willReadFrequently: !0 });
    if (!V) return null;
    V.clearRect(0, 0, j, J), V.drawImage(E, 0, 0, j, J);
    const re = V.getImageData(0, 0, j, J).data, k = { canvas: ae, width: j, height: J, alpha: re, ready: !0 };
    return o.set(h, k), k;
  }
  function te(p, h) {
    if (!p || !h) return null;
    const x = (p == null ? void 0 : p.bbox) || null;
    if (!x) return null;
    const E = (p == null ? void 0 : p.transform) || {}, j = {
      u: (Number(x.u0 || 0) + Number(x.u1 || 0)) * 0.5,
      v: (Number(x.v0 || 0) + Number(x.v1 || 0)) * 0.5
    }, J = {
      u: ((Number(h.u || 0) - Number(E.du || 0)) % 1 + 1) % 1,
      v: Number(h.v || 0) - Number(E.dv || 0)
    }, ae = U(
      J,
      j,
      Number(E.scale || 1),
      Number(E.rot_deg || 0)
    ), V = Number(x.u1 || 0) - Number(x.u0 || 0), re = Number(x.v1 || 0) - Number(x.v0 || 0);
    if (!(V > 1e-6) || !(re > 1e-6)) return null;
    const k = ve(Number(ae.u || 0), Number(x.u0 || 0)) / V, Y = (Number(ae.v || 0) - Number(x.v0 || 0)) / re;
    if (k < 0 || k > 1 || Y < 0 || Y > 1) return 0;
    const ie = de(p);
    if (!ie) return null;
    const _e = Fe(Math.floor(k * ie.width), 0, ie.width - 1), Me = Fe(Math.floor(Y * ie.height), 0, ie.height - 1);
    return Number(ie.alpha[(Me * ie.width + _e) * 4 + 3] || 0);
  }
  function me(p, h, x, E = null) {
    if (!(h != null && h.visible) || !Ar(x, h.corners)) return !1;
    const j = E || le(x, performance.now()), J = te(p, j);
    return J === null ? !0 : J > 8;
  }
  function oe() {
    var E, j, J, ae, V, re, k, Y;
    const p = ((j = (E = n.paintEngine) == null ? void 0 : E.getErpTarget) == null ? void 0 : j.call(E, g(!1))) || null, h = Math.max(1, Number(((J = p == null ? void 0 : p.descriptor) == null ? void 0 : J.width) || ((V = (ae = p == null ? void 0 : p.displayPaint) == null ? void 0 : ae.canvas) == null ? void 0 : V.width) || 2048)), x = Math.max(1, Number(((re = p == null ? void 0 : p.descriptor) == null ? void 0 : re.height) || ((Y = (k = p == null ? void 0 : p.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : Y.height) || 1024));
    return { width: h, height: x };
  }
  function I() {
    var Me, Ce, xe;
    const p = n.interaction;
    if ((p == null ? void 0 : p.kind) !== "paint_stroke") return null;
    const h = (p == null ? void 0 : p.stroke) || null;
    if (!h || String((h == null ? void 0 : h.layerKind) || "") !== "paint" || String((h == null ? void 0 : h.toolKind) || "") !== "eraser") return null;
    const x = u(), E = `${Se()}:${x.width}:${x.height}`;
    if (((Me = n._activePaintEraserPreviewInfo) == null ? void 0 : Me.cacheKey) === E)
      return n._activePaintEraserPreviewInfo.value || null;
    const j = Eo(h), J = (j == null ? void 0 : j.geometry) || null;
    if (J && String(J.geometryKind || "") !== "lasso_fill") {
      const be = Array.isArray(J.rawPoints) && J.rawPoints.length ? J.rawPoints : Array.isArray(J.points) ? J.points : [];
      J.processedPoints = P(be, j.targetSpace, !0);
    }
    const ae = c(x.width, x.height, { readback: !0 });
    if (!$(ae, j, { w: x.width, h: x.height })) return null;
    const V = ((xe = (Ce = ae.ctx) == null ? void 0 : Ce.getImageData(0, 0, x.width, x.height)) == null ? void 0 : xe.data) || null;
    if (!V) return null;
    let re = x.width, k = x.height, Y = -1, ie = -1;
    for (let be = 0; be < x.height; be += 1)
      for (let R = 0; R < x.width; R += 1)
        V[(be * x.width + R) * 4 + 3] <= 8 || (R < re && (re = R), be < k && (k = be), R > Y && (Y = R), be > ie && (ie = be));
    if (Y < re || ie < k)
      return n._activePaintEraserPreviewInfo = { cacheKey: E, value: null }, null;
    const _e = {
      surface: ae,
      bounds: { minX: re, minY: k, maxX: Y, maxY: ie },
      key: `${E}:${re}:${k}:${Y}:${ie}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: E, value: _e }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), _e;
  }
  function W() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function N(p, h, x) {
    var E, j;
    if (!p) return null;
    if ((E = p.item) != null && E.bbox) {
      const J = p.item.bbox, ae = ((j = p.item) == null ? void 0 : j.transform) || {}, V = Number(J.u0 || 0) + Number(ae.du || 0), re = Number(J.u1 || 0) + Number(ae.du || 0), k = Number(J.v0 || 0) + Number(ae.dv || 0), Y = Number(J.v1 || 0) + Number(ae.dv || 0);
      return {
        minX: Math.floor((V % 1 + 1) % 1 * h),
        maxX: Math.ceil((re % 1 + 1) % 1 * h),
        minY: Math.floor(Fe(k, 0, 1) * x),
        maxY: Math.ceil(Fe(Y, 0, 1) * x),
        wraps: re - V >= 1 || V < 0 || re > 1
      };
    }
    return null;
  }
  function ue(p, h, x) {
    if (!p || !h) return !1;
    const E = (ae) => ae.wraps ? [
      { minX: 0, maxX: ae.maxX, minY: ae.minY, maxY: ae.maxY, wraps: !1 },
      { minX: ae.minX, maxX: x - 1, minY: ae.minY, maxY: ae.maxY, wraps: !1 }
    ] : [ae], j = E(p), J = E(h);
    return j.some((ae) => J.some((V) => !(ae.maxX < V.minX || V.maxX < ae.minX || ae.maxY < V.minY || V.maxY < ae.minY)));
  }
  function A(p, h, x) {
    var K, C, H, L, S, Z, se;
    if (!p || !h || !((K = x == null ? void 0 : x.surface) != null && K.canvas)) return p;
    const E = Number(p.width || x.surface.canvas.width || 0), j = Number(p.height || x.surface.canvas.height || 0);
    if (E < 1 || j < 1) return p;
    const J = N(h, E, j);
    if (J && !ue(J, x.bounds, E)) return p;
    const ae = String(((C = h.item) == null ? void 0 : C.id) || h.id || ""), V = ((H = h.item) == null ? void 0 : H.transform) || {}, re = `${x.key}:${ae}:${E}:${j}:${Number(V.du || 0).toFixed(6)}:${Number(V.dv || 0).toFixed(6)}:${Number(V.rot_deg || 0).toFixed(3)}:${Number(V.scale || 1).toFixed(4)}`, k = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(re)) return k.get(re);
    const Y = Fe(Math.floor(Number(((L = x.bounds) == null ? void 0 : L.minX) || 0)), 0, Math.max(0, E - 1)), ie = Fe(Math.floor(Number(((S = x.bounds) == null ? void 0 : S.minY) || 0)), 0, Math.max(0, j - 1)), _e = Fe(Math.ceil(Number(((Z = x.bounds) == null ? void 0 : Z.maxX) || 0)), Y, Math.max(0, E - 1)), Me = Fe(Math.ceil(Number(((se = x.bounds) == null ? void 0 : se.maxY) || 0)), ie, Math.max(0, j - 1)), Ce = Math.max(1, _e - Y + 1), xe = Math.max(1, Me - ie + 1), be = c(E, j, { readback: !0 });
    be.ctx.clearRect(0, 0, E, j), be.ctx.drawImage(p, 0, 0);
    const R = be.ctx.getImageData(Y, ie, Ce, xe);
    be.ctx.save(), be.ctx.globalCompositeOperation = "destination-out", be.ctx.drawImage(x.surface.canvas, 0, 0), be.ctx.restore();
    const z = be.ctx.getImageData(Y, ie, Ce, xe);
    let T = !1;
    for (let ge = 0; ge < Ce * xe; ge += 1) {
      const pe = R.data[ge * 4 + 3], we = z.data[ge * 4 + 3];
      if (pe > we) {
        T = !0;
        break;
      }
    }
    return T ? (k.size > 64 && k.clear(), k.set(re, be.canvas), be.canvas) : (k.set(re, p), p);
  }
  function O(p, h = null) {
    const x = F((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), E = (p == null ? void 0 : p.bbox) || null;
    if (!x || !E) return null;
    const j = fe(p, h);
    if (!j || !(j.complete || j.width || j.naturalWidth)) return null;
    const { width: J, height: ae } = oe(), V = (p == null ? void 0 : p.transform) || {}, re = [
      x,
      J,
      ae,
      E.u0,
      E.v0,
      E.u1,
      E.v1,
      V.du,
      V.dv,
      V.rot_deg,
      V.scale,
      y()
    ].join(":"), k = i.get(re);
    if (k) return k;
    i.size > 64 && i.clear();
    const Y = Gt({ label: "editor.raster-erp" });
    Y.width = J, Y.height = ae;
    const ie = Y.getContext("2d");
    return ie ? (z0(ie, j, p, J, ae), i.set(re, Y), Y) : null;
  }
  async function w(p, h) {
    const x = await new Promise((V) => p.toBlob(V, "image/png")), E = new FormData();
    E.append("image", x, h), E.append("type", "input"), E.append("subfolder", "panorama_stickers"), E.append("overwrite", "1");
    const j = await t.fetchApi("/upload/image", { method: "POST", body: E });
    if (!j || j.status !== 200) throw new Error(`upload failed (${j == null ? void 0 : j.status})`);
    const J = await j.json(), ae = String((J == null ? void 0 : J.name) || "").trim();
    if (!ae) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: ae,
      subfolder: String((J == null ? void 0 : J.subfolder) || "panorama_stickers"),
      storage: String((J == null ? void 0 : J.type) || "input")
    };
  }
  let M = null, ce = !1;
  function ye() {
    const p = Cp(a.painting), { width: h, height: x } = f();
    return jS(a.painting_layer, { paintCount: p.totalPaintCount, maskCount: p.totalMaskCount, width: h, height: x, nodeId: String(r.id ?? "0") });
  }
  function D() {
    const p = String(r.id ?? "0"), h = Es.get(p);
    if (ce && h) return h;
    const x = (async () => {
      var J, ae, V, re, k, Y, ie, _e, Me, Ce, xe, be;
      const E = v(), j = Cp(a.painting);
      if (j.totalPaintCount <= 0 && j.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, M = E, l());
        return;
      }
      if (M !== E && !ce) {
        ce = !0;
        try {
          Q();
          const R = g(!1), z = ((ae = (J = n.paintEngine) == null ? void 0 : J.getErpTarget) == null ? void 0 : ae.call(J, R)) || null, T = ((V = z == null ? void 0 : z.displayPaint) == null ? void 0 : V.canvas) || null, K = ((re = z == null ? void 0 : z.committedMask) == null ? void 0 : re.canvas) || null, C = Math.max(1, Number(((k = z == null ? void 0 : z.descriptor) == null ? void 0 : k.width) || (T == null ? void 0 : T.width) || (K == null ? void 0 : K.width) || 2048)), H = Math.max(1, Number(((Y = z == null ? void 0 : z.descriptor) == null ? void 0 : Y.height) || (T == null ? void 0 : T.height) || (K == null ? void 0 : K.height) || 1024));
          (!T && j.totalPaintCount > 0 || !K && j.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((ie = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ie.width) || 0) !== C || Number(((_e = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : _e.height) || 0) !== H) && (n._paintLayerSyncBlankSurface = c(C, H)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, C, H));
          const L = T || j.totalPaintCount > 0 && ((Me = n._paintLayerSyncBlankSurface) == null ? void 0 : Me.canvas) || null, S = K || j.totalMaskCount > 0 && ((Ce = n._paintLayerSyncBlankSurface) == null ? void 0 : Ce.canvas) || null;
          if (!L && !S) return;
          let Z = null, se = null;
          const ge = [];
          if (j.totalPaintCount > 0) {
            Z = await w(L, `pano_paint_${p}.png`);
            for (const pe of R) {
              const we = String(pe || "").trim();
              if (!we) continue;
              const Ee = ((be = (xe = n.paintEngine) == null ? void 0 : xe.getGroupDisplayCanvas) == null ? void 0 : be.call(xe, we)) || null;
              if (!Ee) continue;
              const Le = we.replace(/[^a-zA-Z0-9_-]+/g, "_"), $e = await w(Ee, `pano_group_${p}_${Le}.png`);
              $e && ge.push({
                id: we,
                actionGroupId: we,
                image: $e
              });
            }
          }
          j.totalMaskCount > 0 && (se = await w(S, `pano_mask_${p}.png`)), E === v() && (a.painting_layer = {
            paint: Z,
            mask: se,
            groups: ge,
            revision: E
          }, M = E, l());
        } catch (R) {
          throw R;
        } finally {
          ce = !1;
        }
      }
    })();
    return Es.set(p, x), x.finally(() => {
      Es.get(p) === x && Es.delete(p);
    }), x;
  }
  function b() {
    const p = _(!0).filter((j) => j.type === "strokeGroup").map((j) => ({ actionGroupId: j.actionGroupId, z_index: j.z_index })), h = n.paintEngine, x = m(), E = I();
    return $u({ ...a, painting: { ...a.painting, groups: p } }, {
      group: (j) => {
        const J = h == null ? void 0 : h.getGroupDisplayCanvas(j);
        return J && { media: J, revision: `${x}:${j}` };
      },
      raster: (j) => {
        const J = O(j, () => q());
        if (!J) return null;
        const ae = j.transform || {};
        return {
          media: A(J, { item: j }, E),
          revision: [
            v(),
            (E == null ? void 0 : E.key) || "",
            j.id,
            Number(ae.du || 0).toFixed(6),
            Number(ae.dv || 0).toFixed(6),
            Number(ae.rot_deg || 0).toFixed(3),
            Number(ae.scale || 1).toFixed(4)
          ].join(":")
        };
      },
      mask: () => Kh(h)
    });
  }
  function B() {
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
        getDisplayPaintRevisionKey: m,
        getOrderedDisplayListObjects: _,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: v,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: G,
        inverseTransformErpPointAround: U,
        parseRasterObjectSelectionId: F,
        processFreehandPoints: P,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: Q,
        requestDraw: q,
        screenPosToErpPoint: le,
        shortestWrappedDelta: ve
      } = p);
    },
    getSharedLivePaintSurface: X,
    getLivePaintRevisionSuffix: Se,
    isPaintCompositeInteraction: he,
    hitRasterObjectAt: me,
    invalidateLivePaintPreviewCaches: W,
    buildRasterObjectEditCanvas: O,
    needsPaintingLayerSync: ye,
    syncPaintingLayerAsync: D,
    invalidatePaintingLayerState: B,
    buildEditorViewPaintLayers: b
  };
}
function rC(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, s, a;
  function l(O) {
    return !O || typeof O != "object" ? { x: 0, y: 0 } : { x: Number((O == null ? void 0 : O.u) || 0), y: Number((O == null ? void 0 : O.v) || 0) };
  }
  function c(O, w, M, ce = {}) {
    return { ...{
      ...O,
      t: Number((O == null ? void 0 : O.t) || 0),
      widthScale: f(O, "widthScale", 1),
      pressureLike: f(O, "pressureLike", 1)
    }, ...ce, u: w, v: M };
  }
  function d(O, w = !1) {
    return w ? 12e-4 : 18e-4;
  }
  function u(O, w, M = !1) {
    if (!Array.isArray(O) || !O.length) return [];
    const ce = String((w == null ? void 0 : w.kind) || "") === "ERP_GLOBAL", ye = /* @__PURE__ */ new WeakMap();
    if (ce) {
      let V = null;
      O.forEach((re) => {
        const k = Number((re == null ? void 0 : re.u) || 0), Y = Number((re == null ? void 0 : re.v) || 0), ie = (k % 1 + 1) % 1, _e = V == null ? ie : V + a(ie, (V % 1 + 1) % 1);
        ye.set(re, { x: _e, y: Y }), V = _e;
      });
    }
    const D = (V) => !V || typeof V != "object" ? { x: 0, y: 0 } : ye.get(V) || l(V), b = (V, re, k, Y = {}) => {
      const ie = ce ? (Number(re) % 1 + 1) % 1 : Number(re), _e = c(V, ie, k, Y);
      return ye.set(_e, { x: Number(re), y: Number(k) }), _e;
    }, B = (V, re, k) => {
      const Y = D(V), ie = D(re);
      return b(V, Cn(Y.x, ie.x, k), Cn(Y.y, ie.y, k), {
        t: Cn(Number((V == null ? void 0 : V.t) || 0), Number((re == null ? void 0 : re.t) || 0), k),
        widthScale: Cn(f(V, "widthScale", 1), f(re, "widthScale", 1), k),
        pressureLike: Cn(f(V, "pressureLike", 1), f(re, "pressureLike", 1), k)
      });
    };
    if (O.length === 1) {
      const V = D(O[0]);
      return [b(O[0], V.x, V.y)];
    }
    const p = d(w, M), h = (V, re) => {
      const k = [0];
      for (let R = 1; R < V.length; R += 1) {
        const z = D(V[R - 1]), T = D(V[R]);
        k.push(k[R - 1] + Math.hypot(T.x - z.x, T.y - z.y));
      }
      const Y = k[k.length - 1] || 0;
      if (Y <= 1e-8) {
        const R = V[0], z = D(R);
        return [b(R, z.x, z.y)];
      }
      const ie = [];
      let _e = 0;
      for (let R = 0; R <= Y + 1e-9; R += re) {
        for (; _e < k.length - 2 && k[_e + 1] < R; ) _e += 1;
        const z = k[_e], T = k[_e + 1], K = Math.max(1e-8, T - z);
        ie.push(B(V[_e], V[_e + 1], Fe((R - z) / K, 0, 1)));
      }
      const Me = V[V.length - 1], Ce = D(Me), xe = ie[ie.length - 1], be = xe ? D(xe) : null;
      return (!be || Math.hypot(be.x - Ce.x, be.y - Ce.y) > re * 0.35) && ie.push(b(Me, Ce.x, Ce.y)), ie;
    }, x = (V) => {
      if (!Array.isArray(V) || V.length < 3) return V ? V.slice() : [];
      const re = D(V[0]), k = [b(V[0], re.x, re.y)];
      for (let _e = 0; _e < V.length - 1; _e += 1) {
        const Me = V[_e], Ce = V[_e + 1], xe = D(Me), be = D(Ce), R = b(
          Me,
          xe.x * 0.75 + be.x * 0.25,
          xe.y * 0.75 + be.y * 0.25,
          {
            t: Number(Me.t || 0) * 0.75 + Number(Ce.t || 0) * 0.25,
            widthScale: f(Me, "widthScale", 1) * 0.75 + f(Ce, "widthScale", 1) * 0.25,
            pressureLike: f(Me, "pressureLike", 1) * 0.75 + f(Ce, "pressureLike", 1) * 0.25
          }
        ), z = b(
          Me,
          xe.x * 0.25 + be.x * 0.75,
          xe.y * 0.25 + be.y * 0.75,
          {
            t: Number(Me.t || 0) * 0.25 + Number(Ce.t || 0) * 0.75,
            widthScale: f(Me, "widthScale", 1) * 0.25 + f(Ce, "widthScale", 1) * 0.75,
            pressureLike: f(Me, "pressureLike", 1) * 0.25 + f(Ce, "pressureLike", 1) * 0.75
          }
        );
        k.push(R, z);
      }
      const Y = V[V.length - 1], ie = D(Y);
      return k.push(b(Y, ie.x, ie.y)), k;
    }, E = h(O, p);
    if (E.length < 3) return E;
    const j = M ? 2 : 1;
    let J = E.slice();
    for (let V = 0; V < j; V += 1) J = x(J);
    return h(J, Math.max(p * 0.75, 55e-5));
  }
  function f(O, w, M = 1) {
    const ce = Number(O == null ? void 0 : O[w]);
    return Number.isFinite(ce) ? Math.max(0, ce) : M;
  }
  function m(O) {
    const w = Number(O == null ? void 0 : O.radiusValue);
    if (Number.isFinite(w) && w > 0) {
      const M = String((O == null ? void 0 : O.radiusModel) || "").trim() || "erp_uv_norm";
      return M === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
      } : {
        model: M,
        value: w
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
    };
  }
  function _(O, w, M = {}) {
    const ce = Gt({ label: "editor.raster-surface" });
    ce.width = Math.max(1, Math.round(O)), ce.height = Math.max(1, Math.round(w));
    const ye = ce.getContext("2d", M.readback ? { willReadFrequently: !0 } : void 0);
    return ye && (ye.clearRect(0, 0, ce.width, ce.height), ye.imageSmoothingEnabled = !0), { canvas: ce, ctx: ye };
  }
  function g() {
    const O = ve();
    return `${String(t.paintStrokeRevision)}:${O.width}x${O.height}`;
  }
  function v() {
    const O = ve();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${O.width}x${O.height}`;
  }
  function y() {
    const O = i(), w = v();
    return O ? `${w}:${O}` : w;
  }
  function G() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function U() {
    t.paintCompositeRevision += 1;
  }
  function F() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function P() {
    var O, w;
    t.paintEngineRevisionKey = null, (w = (O = t.paintEngine) == null ? void 0 : O.rebuildCommitted) == null || w.call(O, r), t.paintEngineRevisionKey = g();
  }
  function $() {
    F(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function Q({ rebuildPaintEngine: O = !1 } = {}) {
    o(), G(), $(), O && P();
  }
  function q() {
    o(), U(), $();
  }
  function le() {
    var ce;
    const O = ve(), w = `${O.width}x${O.height}`;
    t.paintEngineDescriptorKey !== w && (t.paintEngine = tl(O), t.paintEngineDescriptorKey = w, t.paintEngineRevisionKey = "");
    const M = g();
    t.paintEngineRevisionKey !== M && (t.paintEngineRevisionKey = M, (ce = t.paintEngine) == null || ce.rebuildCommitted(r));
  }
  function ve() {
    const O = Math.max(1, s(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: O,
      height: Math.max(1, Math.round(O * 0.5))
    };
  }
  function he() {
    return ve();
  }
  function X(O, w, M, ce, ye = null) {
    const D = m(O), b = f(w, "widthScale", 1) * f(w, "pressureLike", 1);
    return D.model === "erp_uv_norm" ? Math.max(0.5, D.value * M * b) : D.model === "world_angle" ? ye ? Math.max(0.5, D.value / Math.max(1e-6, Number(ye.hFOV_deg || 90) * or) * M * b) : Math.max(0.5, D.value / (2 * Math.PI) * M * b) : Math.max(0.5, Number((O == null ? void 0 : O.size) || 10) * 0.5 * b);
  }
  function Se(O, w, M = {}) {
    const ce = String((w == null ? void 0 : w.layerKind) || "paint"), ye = String((w == null ? void 0 : w.toolKind) || "pen"), D = M.preview === !0, b = D ? 0.78 : 1;
    if (O.globalAlpha = ye === "marker" ? 0.7 * b : 1, ce === "mask") {
      O.fillStyle = D ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (ye === "eraser") {
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const B = String((w == null ? void 0 : w.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (w == null ? void 0 : w.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, p = D ? Math.max(0.28, Number(B.a ?? 1) * 0.88) : Math.max(0.12, Number(B.a ?? 1));
    O.fillStyle = `rgba(${Math.round(Number(B.r || 0) * 255)}, ${Math.round(Number(B.g || 0) * 255)}, ${Math.round(Number(B.b || 0) * 255)}, ${p})`;
  }
  function fe(O, w, M) {
    const ce = Math.max(0.5, Math.min(M, Number((w == null ? void 0 : w.radiusPx) || 0.5)));
    !Number.isFinite(w == null ? void 0 : w.x) || !Number.isFinite(w == null ? void 0 : w.y) || !Number.isFinite(ce) || (O.beginPath(), O.arc(Number(w.x || 0), Number(w.y || 0), ce, 0, Math.PI * 2), O.fill());
  }
  function de(O, w, M, ce, ye = {}) {
    if (!O || !Array.isArray(w) || !w.length) return;
    const D = Math.max(ce.w, ce.h) * 0.25;
    O.save(), Se(O, M, ye);
    const b = (B) => fe(O, B, D);
    if (w.length === 1) {
      b(w[0]), O.restore();
      return;
    }
    for (let B = 0; B < w.length - 1; B += 1) {
      const p = w[B], h = w[B + 1];
      if (!p || !h) continue;
      const x = Number(p.x || 0), E = Number(p.y || 0), j = Number(h.x || 0), J = Number(h.y || 0), ae = Math.max(0.5, Math.min(D, Number(p.radiusPx || 0.5))), V = Math.max(0.5, Math.min(D, Number(h.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(E) || !Number.isFinite(j) || !Number.isFinite(J) || !Number.isFinite(ae) || !Number.isFinite(V)) continue;
      const re = j - x, k = J - E, Y = Math.hypot(re, k);
      if (!Number.isFinite(Y) || Y < 1e-6) {
        b(p);
        continue;
      }
      if (Y > Math.max(ce.w, ce.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(ae, V)), _e = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Me = Math.max(1, Math.ceil(Y / _e));
      for (let Ce = 0; Ce <= Me; Ce += 1) {
        const xe = Ce / Me;
        b({
          x: Cn(x, j, xe),
          y: Cn(E, J, xe),
          radiusPx: Cn(ae, V, xe)
        });
      }
    }
    b(w[w.length - 1]), O.restore();
  }
  function te(O, w, M, ce) {
    de(O, w, M, ce, { preview: !1 });
  }
  function me(O, w, M, ce, ye) {
    var B, p, h, x;
    if (!O || !Array.isArray(w) || w.length < 3) return;
    const D = "u", b = "v";
    if (O.save(), String((M == null ? void 0 : M.layerKind) || "") === "mask")
      O.fillStyle = "rgba(255,255,255,1)";
    else if (String((M == null ? void 0 : M.toolKind) || "") === "eraser")
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
    else {
      const E = (M == null ? void 0 : M.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      O.fillStyle = `rgba(${Math.round(Number(E.r || 0) * 255)}, ${Math.round(Number(E.g || 0) * 255)}, ${Math.round(Number(E.b || 0) * 255)}, ${Number(E.a ?? 1)})`;
    }
    O.beginPath(), O.moveTo(Number(((B = w[0]) == null ? void 0 : B[D]) || 0) * ce.w, Number(((p = w[0]) == null ? void 0 : p[b]) || 0) * ce.h);
    for (let E = 1; E < w.length; E += 1)
      O.lineTo(Number(((h = w[E]) == null ? void 0 : h[D]) || 0) * ce.w, Number(((x = w[E]) == null ? void 0 : x[b]) || 0) * ce.h);
    O.closePath(), O.fill(), O.restore();
  }
  function oe(O) {
    const w = (O == null ? void 0 : O.geometry) || null;
    return w ? String(w.geometryKind || "") === "lasso_fill" ? Array.isArray(w.points) ? w.points : [] : Array.isArray(w.processedPoints) && w.processedPoints.length ? w.processedPoints : Array.isArray(w.rawPoints) && w.rawPoints.length ? w.rawPoints : Array.isArray(w.points) ? w.points : [] : [];
  }
  function I(O, w) {
    const M = oe(O);
    return !Array.isArray(M) || !M.length ? [] : M.map((ce) => ({
      x: Number((ce == null ? void 0 : ce.u) || 0) * Number((w == null ? void 0 : w.w) || 1),
      y: Number((ce == null ? void 0 : ce.v) || 0) * Number((w == null ? void 0 : w.h) || 1),
      radiusPx: X(O, ce, Number((w == null ? void 0 : w.w) || 1), Number((w == null ? void 0 : w.h) || 1))
    }));
  }
  function W(O, w, M = null) {
    var B, p, h, x;
    if (!(O != null && O.ctx) || !w) return !1;
    const ce = M || { w: Number(((B = O.canvas) == null ? void 0 : B.width) || 0), h: Number(((p = O.canvas) == null ? void 0 : p.height) || 0) }, ye = String((w == null ? void 0 : w.toolKind) || "") === "eraser" ? {
      ...w,
      layerKind: "mask",
      toolKind: String(((h = w == null ? void 0 : w.geometry) == null ? void 0 : h.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : w;
    if (String(((x = w == null ? void 0 : w.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return me(O.ctx, oe(ye), ye, ce), !0;
    const b = I(ye, ce);
    return b.length ? (te(O.ctx, b, ye, ce), !0) : !1;
  }
  function N(O, w, M, ce = 8) {
    const ye = new Uint8Array(w * M), D = [], b = new Int32Array(w * M), B = new Int32Array(w * M);
    for (let p = 0; p < M; p += 1)
      for (let h = 0; h < w; h += 1) {
        const x = p * w + h;
        if (ye[x] || O[x] <= ce) continue;
        let E = 0, j = 0;
        b[j] = h, B[j] = p, j += 1, ye[x] = 1;
        const J = [];
        let ae = h, V = p, re = h, k = p;
        for (; E < j; ) {
          const Y = b[E], ie = B[E];
          E += 1, J.push({ x: Y, y: ie }), Y < ae && (ae = Y), ie < V && (V = ie), Y > re && (re = Y), ie > k && (k = ie);
          const _e = [
            [(Y - 1 + w) % w, ie],
            [(Y + 1) % w, ie],
            [Y, ie - 1],
            [Y, ie + 1]
          ];
          for (const [Me, Ce] of _e) {
            if (Ce < 0 || Ce >= M) continue;
            const xe = Ce * w + Me;
            ye[xe] || O[xe] <= ce || (ye[xe] = 1, b[j] = Me, B[j] = Ce, j += 1);
          }
        }
        D.push({ pixels: J, minX: ae, minY: V, maxX: re, maxY: k });
      }
    return D;
  }
  function ue(O, w) {
    const M = [...new Set((Array.isArray(O == null ? void 0 : O.pixels) ? O.pixels : []).map((p) => Number((p == null ? void 0 : p.x) || 0)).filter((p) => Number.isFinite(p)))].sort((p, h) => p - h);
    if (!M.length) return null;
    if (M.length === 1)
      return { startX: M[0], widthPx: 1 };
    let ce = -1, ye = 0;
    for (let p = 0; p < M.length; p += 1) {
      const h = M[p], E = (p === M.length - 1 ? M[0] + w : M[p + 1]) - h - 1;
      E > ce && (ce = E, ye = p);
    }
    const D = (M[(ye + 1) % M.length] + w) % w;
    let b = 1 / 0, B = -1 / 0;
    for (const p of M) {
      const h = (p - D + w) % w;
      b = Math.min(b, h), B = Math.max(B, h);
    }
    return {
      startX: D,
      widthPx: Math.max(1, B - b + 1)
    };
  }
  function A(O, w, M = {}) {
    var h;
    const ce = Number((O == null ? void 0 : O.width) || 0), ye = Number((O == null ? void 0 : O.height) || 0), D = (h = O == null ? void 0 : O.getContext) == null ? void 0 : h.call(O, "2d");
    if (!D || ce < 1 || ye < 1) return [];
    const b = D.getImageData(0, 0, ce, ye), B = new Uint8Array(ce * ye);
    for (let x = 0; x < B.length; x += 1) B[x] = b.data[x * 4 + 3];
    return N(B, ce, ye, 8).map((x, E) => {
      const j = ue(x, ce);
      if (!j) return null;
      const J = Number(j.widthPx || 0), ae = x.maxY - x.minY + 1, V = Number(j.startX || 0), re = Gt({ label: "editor.lasso-fill" });
      re.width = J, re.height = ae;
      const k = re.getContext("2d");
      if (!k) return null;
      const Y = k.createImageData(J, ae);
      return x.pixels.forEach(({ x: ie, y: _e }) => {
        const Me = (_e * ce + ie) * 4, Ce = (Number(ie || 0) - V + ce) % ce, xe = ((_e - x.minY) * J + Ce) * 4;
        Y.data[xe + 0] = b.data[Me + 0], Y.data[xe + 1] = b.data[Me + 1], Y.data[xe + 2] = b.data[Me + 2], Y.data[xe + 3] = b.data[Me + 3];
      }), k.putImageData(Y, 0, 0), {
        id: Ii("raster"),
        type: "raster_frozen",
        layerKind: w === "mask" ? "mask" : "paint",
        z_index: Number((M == null ? void 0 : M.z_index) || 0) + E * 1e-3,
        locked: (M == null ? void 0 : M.locked) === !0,
        bbox: {
          u0: 0,
          v0: x.minY / ye,
          u1: J / ce,
          v1: (x.maxY + 1) / ye
        },
        rasterDataUrl: re.toDataURL("image/png"),
        transform: {
          du: V / ce,
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
    createRasterSurface: _,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: v,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: P,
    markObjectVisualsDirty: $,
    markPaintStrokeVisualsDirty: Q,
    markPaintCompositeVisualsDirty: q,
    rebuildPaintEngineIfNeeded: le,
    getDesiredPaintTargetDescriptor: ve,
    getActivePaintTargetDescriptor: he,
    rasterizeStrokeToSurface: W,
    createRasterFrozenObjectsFromCanvas: A
  };
}
function iC(e) {
  const {
    comfyMedia: t,
    editor: n,
    node: r,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, _, g, v = { stored: null, shown: null, handoff: null, fps: null };
  function y(I, W = null) {
    var N;
    if (I && typeof I == "object" && !Array.isArray(I)) return I;
    if (Array.isArray(I) && I.length > 0) {
      const ue = I[0];
      if (ue && typeof ue == "object" && !Array.isArray(ue)) return ue;
    }
    if (Array.isArray(W) && W.length > 0) {
      const ue = (N = W[0]) == null ? void 0 : N.parsed_state;
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
  function G(I, W, N) {
    const ue = Math.max(1, Number(W || 1)), A = Math.max(1, Number(N || 1)), O = Fe(Number(I || 30), 0.1, 179) * or, w = 2 * Math.atan(Math.tan(O * 0.5) * (A / ue));
    return Fe(w * di, 0.1, 179);
  }
  function U(I) {
    const W = String(I || "").trim();
    if (!W) return null;
    try {
      const N = JSON.parse(W);
      if (!N || typeof N != "object" || String(N.kind || "") !== "pano_sticker_state") return null;
      const ue = N.version;
      let A = null;
      if (typeof ue == "number" && Number.isInteger(ue) ? A = ue : typeof ue == "string" && /^\d+$/.test(ue) && (A = Number.parseInt(ue, 10)), A !== 1) return null;
      const O = N.pose;
      if (!O || typeof O != "object") return null;
      const w = Number(O.yaw_deg), M = Number(O.pitch_deg), ce = Number(O.roll_deg), ye = Number(O.hFOV_deg);
      if (![w, M, ce, ye].every((p) => Number.isFinite(p))) return null;
      let D = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(D, -0) && (D = 0);
      const b = {
        yaw_deg: D,
        pitch_deg: Fe(M, -89.9, 89.9),
        roll_deg: ce,
        hFOV_deg: Fe(ye, 0.1, 179)
      }, B = Number(N.source_aspect);
      return Number.isFinite(B) && B > 0 && (b.source_aspect = B), b;
    } catch {
      return null;
    }
  }
  function F(I) {
    const W = Number(I == null ? void 0 : I.yaw_deg), N = Number(I == null ? void 0 : I.pitch_deg), ue = Number((I == null ? void 0 : I.roll_deg) ?? (I == null ? void 0 : I.rot_deg)), A = Number(I == null ? void 0 : I.hFOV_deg), O = mi(I);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Et(Number.isFinite(W) ? W : 0),
        pitch_deg: Fe(Number.isFinite(N) ? N : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ue) ? ue : 0,
        hFOV_deg: Fe(Number.isFinite(A) ? A : 90, 0.1, 179)
      },
      source_aspect: O
    };
  }
  function P(I) {
    var M;
    if (!I || typeof I != "object") return F(null);
    const W = Number(I == null ? void 0 : I.yaw_deg), N = Number(I == null ? void 0 : I.pitch_deg), ue = Number((I == null ? void 0 : I.roll_deg) ?? (I == null ? void 0 : I.rot_deg)), A = Number(I == null ? void 0 : I.hFOV_deg), O = Number(I == null ? void 0 : I.vFOV_deg);
    let w = 1;
    if (Number.isFinite(A) && Number.isFinite(O)) {
      const ce = Fe(A, 0.1, 179) * or, ye = Fe(O, 0.1, 179) * or, D = Math.tan(ye * 0.5);
      if (Math.abs(D) > 1e-6) {
        const b = Math.tan(ce * 0.5) / D;
        Number.isFinite(b) && b > 0 && (w = b);
      }
    }
    if (I != null && I.asset_id && ((M = o == null ? void 0 : o.assets) != null && M[I.asset_id])) {
      const ce = o.assets[I.asset_id], ye = Number((ce == null ? void 0 : ce.w) || 0), D = Number((ce == null ? void 0 : ce.h) || 0);
      ye > 0 && D > 0 && (w = ye / D);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Et(Number.isFinite(W) ? W : 0),
        pitch_deg: Fe(Number.isFinite(N) ? N : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ue) ? ue : 0,
        hFOV_deg: Fe(Number.isFinite(A) ? A : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function $(I) {
    return t.linkedValue(r, I);
  }
  function Q(I, W, N) {
    const ue = I && typeof I == "object" ? {
      yaw_deg: Number(I.yaw_deg || 0),
      pitch_deg: Number(I.pitch_deg || 0),
      roll_deg: Number(I.rot_deg ?? I.roll_deg ?? 0),
      hFOV_deg: Number(I.hFOV_deg || 30)
    } : U(W);
    if (ue) {
      const w = Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || ue.source_aspect || 1), M = Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 1);
      return {
        yaw_deg: Number(ue.yaw_deg || 0),
        pitch_deg: Number(ue.pitch_deg || 0),
        hFOV_deg: Number(ue.hFOV_deg || 30),
        vFOV_deg: G(ue.hFOV_deg, w, M),
        rot_deg: Number(ue.roll_deg || 0)
      };
    }
    const A = Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || 1), O = Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 1);
    return {
      yaw_deg: Number(n.viewYaw || 0),
      pitch_deg: Number(n.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: G(30, A, O),
      rot_deg: 0
    };
  }
  function q() {
    const I = bt(r, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return $g(o, Rg(r, { pose: I, handoff: le() }));
  }
  function le() {
    return bt(r, "sticker-handoff") ? Hw(r, c("pano_sticker_handoff")) : null;
  }
  function ve() {
    return s === "stickers" && !i && r.__panoSceneStateV2 === !0;
  }
  function he(I, W, N) {
    return structuredClone(qi(cn({ version: 2, timeline: { fps: W }, stickers: [I] }), N).stickers[0]);
  }
  function X({ record: I = !0, restored: W = !1 } = {}) {
    var ce;
    if (!ve()) return !1;
    const N = o.stickers.find((ye) => {
      var D;
      return ((D = ye.source) == null ? void 0 : D.kind) === "port";
    });
    if (!N)
      return v = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: ue } = o.timeline;
    let A;
    if (W || !v.handoff || ((ce = v.stored) == null ? void 0 : ce.id) !== N.id)
      A = structuredClone(N);
    else {
      const ye = (D) => v.fps === ue ? D : he(D, v.fps, ue);
      I && Lw(N, ye(v.shown)), A = Rw(N, ye(v.stored));
    }
    const O = le(), w = O ? Xu(o, A, O) : structuredClone(A), M = JSON.stringify(w) !== JSON.stringify(N);
    if (M) {
      for (const ye of Object.keys(N)) delete N[ye];
      Object.assign(N, w);
    }
    return v = { stored: A, shown: structuredClone(w), handoff: O, fps: ue }, M;
  }
  function Se() {
    return v.handoff ? { ...o, stickers: o.stickers.map((I) => {
      var W;
      return ((W = I.source) == null ? void 0 : W.kind) === "port" ? v.stored : I;
    }) } : o;
  }
  function fe(I) {
    var ue;
    if (!ve() || ((ue = I == null ? void 0 : I.source) == null ? void 0 : ue.kind) !== "port") return null;
    const { handoff: W } = v, N = !!W && W.placement === I.placement;
    return Ki[I.placement].map((A) => ({ name: A, overridden: N && I.handoff_overrides.includes(A) }));
  }
  function de(I) {
    X();
    const W = o.stickers.find((N) => {
      var ue;
      return ((ue = N.source) == null ? void 0 : ue.kind) === "port";
    });
    !W || W.locked || !v.handoff || !Vw(o, W, v.handoff, I) || (v.shown = structuredClone(W), v.stored[I] = structuredClone(W[I]), f(), a(), u(), g(), m());
  }
  function te() {
    var M;
    const I = Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs.findIndex((ce) => String((ce == null ? void 0 : ce.name) || "") === "sticker_image") : -1, W = I >= 0 ? ((M = r.getInputLink(I)) == null ? void 0 : M.id) ?? null : null, N = l(() => {
      Fr(r, "image-loaded");
    }), ue = y(c("pano_sticker_input_pose"), null), A = $("sticker_state"), O = t.externalStateHash(r, A), w = W == null ? null : Q(ue, A, N);
    return Lg(o, {
      connected: W != null,
      linkId: W,
      stateHash: O,
      pose: w,
      imageWidth: Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || 0),
      imageHeight: Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 0)
    });
  }
  function me(I = "sync") {
    if (s !== "stickers" || i) return;
    const W = r.__panoSceneStateV2 ? q() : te();
    if (W.changed) {
      const N = o.stickers.find(d);
      o.stickers = W.state.stickers, o.active = W.state.active, N && n.selectedId === N.id && !o.stickers.some((ue) => ue.id === N.id) && (n.selectedId = null, n.selectedIds = []), a(), g(), _();
    } else X({ restored: I === "open" }) ? (u(), g()) : I === "image-loaded" && g();
    m();
  }
  function oe() {
    const I = Array.isArray(o.stickers) ? o.stickers : [], W = [];
    for (const N of I)
      d(N) && (N.visible = !1, W.push(N));
    return W;
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
        updateSelectionMenu: _,
        updateSidePanel: g
      } = I);
    },
    computeStickerVFov: G,
    buildCanonicalCutoutStickerState: F,
    buildCanonicalSelectedStickerState: P,
    reconcileExternalStickerFromInputs: me,
    collectExternalStickersForClearAll: oe,
    syncPortHandoff: X,
    storedEditorState: Se,
    portHandoffLanes: fe,
    revertPortHandoffLane: de
  };
}
function Ai(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function oC(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function sC({
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
  var U, F;
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
    historyEntries: Array.from({ length: 8 }, (P, $) => ({ index: $, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((U = t.find((P) => i(e.paintColor, P.color))) == null ? void 0 : U.id) || "", f = !u, m = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((F = e.customPaintColor) == null ? void 0 : F.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), v = e.brushSizes[g] ?? 10, y = l(), G = Array.from({ length: 8 }, (P, $) => e.customPaintHistory[$] || null);
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
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: G.map((P, $) => ({
      index: $,
      color: P ? { cssColor: r(P, 1) } : null
    })),
    sizeValue: v,
    sizeText: String(v),
    sizeFill: `${Math.max(0, Math.min(100, (v - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function aC({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const lC = {
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
function cC(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = lC[n.key] || [], s = t[t.length - 1];
    r && (s != null && s.grouped) && s.label === r ? s.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function rc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function uC({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
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
function U0({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function dC(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function fC(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const Ui = "erp", pC = ["1:1", "4:3", "3:2", "16:9"];
function B0(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...pC.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: Ui, label: Number(n) === 180 ? "180°" : "360°", active: e === Ui }] : []
  ];
}
const mC = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, hC = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, gC = { ...mC, opacity: "Opacity" };
function yd(e) {
  return `Upstream · ${e}`;
}
function yC({ layer: e, editable: t, locked: n, readOnly: r, placement: i, override: o = null, handoff: s = null }) {
  const a = e !== null && !t, l = e !== null && !r && t && !n && !!o, c = (d) => !r && !n && !!(s != null && s.some((u) => u.name === d && u.overridden));
  return {
    origin: e === null ? "" : `${yd(e)}${a ? " · inherited only" : ""}`,
    note: a ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !l },
    lanes: hC[i].map((d) => ({
      name: d,
      label: gC[d],
      action: e === null && s ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !c(d) : !l || o.placement !== i || !Object.hasOwn(o, d)
    }))
  };
}
function bC({
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
    rows: cC(s),
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
function vC({
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
      const G = f(), U = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: G ? "Back to initial position" : "Already at initial position",
        icon: m.back_initial,
        disabled: !G
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: U ? "Show" : "Hide",
        tip: U ? "Show input image" : "Hide input image",
        icon: U ? m.eye : m.eye_dashed
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
        choices: B0(l, { erp: _, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: m.rotate_90, disabled: l === Ui }
    ], _ ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    );
  return v && (y = y.map((G) => ({
    ...G,
    disabled: G.key === "toggle-lock" ? !v.editable : G.key === "delete" ? !v.editable || !!G.disabled : !0
  }))), Y0(i.corners, y);
}
const Ep = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function SC({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = r ? Ep.filter((s) => s.cameraTip) : Ep;
  return Y0([...e, ...i], [
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
function _C(e, t, n, r, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), f = Math.max(14, i - n - 14), m = d + 18, _ = c - 18 - n;
  let g;
  return m <= f ? g = Math.max(m, 14) : _ >= 14 ? g = Math.min(_, f) : g = Math.min(Math.max(m, 14), f), { left: u, top: g };
}
function Y0(e, t) {
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
const q0 = "painting", Oo = "background";
function wC(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const kC = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function xC(e, { span: t, portBarEnd: n = () => null, selection: r, selectedId: i, expanded: o, openRows: s, audio: a = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: d = !1, scene: u = !1, upstream: f = [], background: m = null, loading3d: _ = /* @__PURE__ */ new Set() }) {
  const g = (G, U, F, P, $, Q, { keyable: q = !0, hideable: le = !0, origin: ve = null } = {}) => {
    const he = (X) => (r == null ? void 0 : r.owner) === G && r.lane === X ? r.frames.map((Se) => Se + Q) : [];
    return {
      id: G,
      label: F,
      icon: P,
      clip: $,
      selected: G === i,
      hideable: le,
      // The background has no eye and always shows.
      visible: U.visible !== !1,
      ...Op(ve),
      keyable: q,
      open: q && s.has(G),
      keys: SS(U).map((X) => ({ frame: X.frame + Q, full: X.full })),
      selectedFrames: he(null),
      lanes: (q ? Xi(U) : []).map((X) => ({
        key: `${G}:${X}`,
        lane: X,
        label: kC[X],
        frames: U[X].keyframes.map((Se) => Se.frame + Q),
        selectedFrames: he(X)
      }))
    };
  }, v = ({ start: G, in: U, duration: F }, P = null) => ({ clip: { start: G, end: F === null ? P : G + F }, offset: G - U }), y = (G, { idOf: U = ($) => $, sceneRow: F, origin: P = null }) => {
    const $ = G.stickers.filter((q) => q.placement === "sky").sort((q, le) => le.z_index - q.z_index), Q = G.stickers.filter((q) => q.placement === "world");
    return [
      ...[...$, ...Q].map((q) => {
        const { clip: le, offset: ve } = v(q.clip, n(q)), he = $h(P ? { ...q, id: q.origin.id } : q), X = q.placement === "world" && (q.source.kind === "port" || oi(q.source) || _.has(q.id));
        return g(q.id, q, he, X ? je.box : je.image, le, ve, { origin: P && { ...P, overridden: P.stickerOverridden(q) } });
      }),
      ...wC(G.painting) || !G.painting_visible ? [{
        id: U(q0),
        label: "Paint",
        icon: je.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: G.painting_visible,
        ...Op(P && { ...P, overridden: P.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...F || ma(G.scene) ? [(() => {
        const { clip: q, offset: le } = v(G.scene.clip);
        return g(U("scene"), G.scene, "Scene", je.box, q, le, {
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
      ...m ? [(() => {
        const { clip: G, offset: U } = v(e.background.clip, m.end);
        return g(Oo, e.background, "Background", je.unwrap, G, U, { keyable: !1, hideable: !1 });
      })()] : [],
      ...c ? [g("camera", e.camera, "Camera", je.camera, null, 0, { hideable: d })] : [],
      ...y(e, { sceneRow: u })
    ],
    groups: f.map(({ key: G, sceneState: U, editable: F, record: P, scene: $, deleted: Q }) => ({
      key: G,
      label: `${yd(G)}${F ? "" : " · inherited only"}`,
      revert: { disabled: !F || !Xg(P) },
      restore: { label: `Restore deleted (${Q})`, disabled: !F || Q === 0 },
      rows: y(U, {
        idOf: (q) => Tc(G, q),
        sceneRow: $ || !U.scene.visible,
        origin: {
          editable: F,
          stickerOverridden: (q) => !!(P != null && P.stickers.some((le) => le.id === q.origin.id && le.placement === q.placement)),
          paintingOverridden: !!P && Object.hasOwn(P, "painting_visible"),
          sceneOverridden: !!P && Object.keys(P.scene).length > 0
        }
      })
    }))
  };
}
function Op(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function MC(e, t, n, r) {
  const i = xS(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, s = Math.max(...n) + r;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const PC = 4, NC = 0.25, X0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function J0(e) {
  return Object.hasOwn(X0, e);
}
function Z0(e, t, n) {
  const { forward: r, right: i } = gi(e.yaw_deg, 0), o = [0, 1, 2].map((a) => r[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(n > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * n / s) };
}
function AC() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = !1, r = 0;
  function i() {
    e.clear(), t = !1, n = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return J0(o) ? (e.size || (r = s), e.add(o), !0) : !1;
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
        const [a, l] = X0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? PC : 1) * (n ? NC : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - r) / 1e3;
      return r = Math.max(r, o), s;
    }
  };
}
const CC = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), IC = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function EC(e) {
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
function Fp(e, t, n) {
  return Number.isFinite(e) && e >= t && e <= n;
}
function OC(e, { frame: t }) {
  if (!e) return null;
  const { mode: n, spaceMode: r, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return CC.has(n) && (n !== "frame" || t) && IC.has(r) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Fp(s, -89.9, 89.9) && Fp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const FC = 250, TC = 600, DC = 180, LC = 2;
function RC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function go(e, t, n) {
  return e + (t - e) * n;
}
function VC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(gu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(n, 1e-6), o = Math.min(1, r / DC + i / LC);
  return Math.round(go(FC, TC, o));
}
function $C(e, t, n) {
  const r = RC(Fe(n, 0, 1));
  return {
    position: e.position.map((i, o) => go(i, t.position[o], r)),
    yaw_deg: Et(e.yaw_deg + gu(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: go(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: go(e.hFOV_deg, t.hFOV_deg, r),
    distance: go(e.distance, t.distance, r)
  };
}
function zC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(gu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function jC(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return zC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: VC(e, t, r), end: i };
}
function HC(e, t) {
  const n = Fe((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: $C(e.from, e.to, n), done: !1 };
}
function Da(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function GC(e, t, n) {
  const r = Da(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function KC(e) {
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
  let _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X = null;
  function Se(R, z = null) {
    const T = w();
    q(() => {
      i.viewTransition = jC(T, R, performance.now(), { scale: x(), end: z });
    }), !i.viewTransition && z && fe(z), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0, ve(), $({ localOnly: !0, reason: ot.VIEW });
  }
  function fe(R) {
    A(Mc({ ...ue(), moved: R.moved }, R.mode, M())), a.backgroundDirty = !0;
  }
  function de() {
    i.viewTransition && (i.viewTransition = null, ve());
  }
  function te(R, z) {
    Se({ ...w(), yaw_deg: R, pitch_deg: z });
  }
  function me() {
    return !f || ye() && !G();
  }
  function oe() {
    return i.mode === "pano" && I();
  }
  function I() {
    return u && G_({ sceneLinked: l && !!Li(s).scene, files: Q(), stickers: d.stickers });
  }
  function W() {
    return i.spaceMode === "6dof" && oe();
  }
  function N() {
    var R, z, T;
    return mx((T = (z = (R = t.ui) == null ? void 0 : R.settings) == null ? void 0 : z.getSettingValue) == null ? void 0 : T.call(z, f0));
  }
  function ue() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function A(R) {
    i.spaceMode = R.mode, i.viewPosition = R.position, i.viewMoved = R.moved;
  }
  function O(R) {
    var T;
    const z = GC(i.spaceMode, i.viewTransition, R);
    if (z !== "keep") {
      if (z === "return") {
        Se({ ...w(), position: M(), distance: ((T = p()) == null ? void 0 : T.radius) || Wn }, { mode: R, moved: !1 });
        return;
      }
      de(), A(Mc({ ...ue(), position: w().position }, R, M())), a.backgroundDirty = !0, ve(), $({ localOnly: !0, reason: ot.VIEW });
    }
  }
  function w() {
    var T;
    const R = i.viewMoved ? i.viewDistance : ((T = p()) == null ? void 0 : T.radius) || Wn, z = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: R };
    return E_(i.spaceMode, z, M());
  }
  function M() {
    return ye() ? B().position : [0, 0, 0];
  }
  function ce() {
    return n && d.camera !== null;
  }
  function ye() {
    return ce() && d.camera.visible;
  }
  function D() {
    return d.painting_visible !== !1;
  }
  function b(R) {
    return R.visible && hi(R.clip, i.frame);
  }
  function B() {
    return Xa(d.camera, i.frame);
  }
  function p() {
    var z;
    const R = _();
    return ((z = R.space ?? R.content) == null ? void 0 : z.sphere) ?? null;
  }
  function h(R) {
    i.viewPosition = R.position, i.viewYaw = R.yaw_deg, i.viewPitch = R.pitch_deg, i.viewDistance = R.distance, i.viewMoved = !0, a.backgroundDirty = !0, $({ localOnly: !0, reason: ot.VIEW });
  }
  function x() {
    var R;
    return ((R = p()) == null ? void 0 : R.radius) || Wn;
  }
  function E() {
    var se;
    const R = _().space, z = g(), T = i.worldSelectedId || i.selectedId, K = z.stickers.findIndex((ge) => ge.id === T), C = K < 0 ? le(T) : null, H = K < 0 ? (se = R.upstreamItems.find((ge) => {
      var pe;
      return ((pe = ge.request) == null ? void 0 : pe.id) === T;
    })) == null ? void 0 : se.request : [R.sticker, ...R.fileStickers ?? []].find((ge) => (ge == null ? void 0 : ge.id) === T), L = K < 0 && !Ct(C) ? null : {
      sticker: C ?? z.stickers[K],
      value: C ? Bn(C, i.frame) : os(z, i.frame).stickers[K],
      plane: [...R.stickers, ...R.upstreamStickers].find((ge) => ge.id === T) ?? null,
      item: (H == null ? void 0 : H.id) === T && H.url ? { kind: H.kind, box: o.sceneBox(H.url) } : null
    }, S = y() ? Ce() : B_(p(), L);
    if (!S) return;
    const Z = w();
    i.viewDistance = Z.distance, i.viewMoved = !0, Se(j_(Z, S, r.width, r.height));
  }
  function j(R) {
    return o.pickSurface(be(), R.x, R.y, r.width, r.height);
  }
  function J(R, z) {
    var T;
    return Pc(R, z, i.viewMoved ? null : (T = p()) == null ? void 0 : T.center, x());
  }
  function ae() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function V(R, z) {
    const T = performance.now(), K = { x: R.x, y: R.y, time: T, key: o.contentRevision(), view: ae() };
    if (!Bh(X, K)) {
      const H = j(R);
      X = { ...K, cost: performance.now() - T, hit: H };
    }
    const C = w();
    h(Qh(C, J(C, X.hit), z, x())), X.view = ae(), X.wheelTime = T;
  }
  function re(R, z, T) {
    const K = w();
    i.interaction = R === "orbit" ? { kind: "space_orbit", last: z, pivot: J(K, j(z)) } : { kind: "space_pan", last: z, depth: Uh(K, x()) }, he(z), r.setPointerCapture(T);
  }
  function k() {
    return W() || U();
  }
  function Y(R) {
    const z = P.elapsed(R);
    if (!z || i.viewTransition) return !1;
    const T = P.speed(x()) * z;
    if (U()) return F(P.direction(), T);
    if (!W()) return !1;
    const K = w(), C = Z0(K, P.direction(), T);
    return C === K ? !1 : (i.viewPosition = C.position, i.viewDistance = K.distance, i.viewMoved = !0, !0);
  }
  function ie() {
    Bo(s).view = EC(i);
  }
  function _e() {
    const R = c && !U0({ hasShot: !!v(), erp: G() }).disabled, z = OC(Bo(s).view, { frame: R });
    z && Object.assign(i, z);
  }
  function Me(R) {
    return R * 0.2;
  }
  function Ce() {
    return { center: B().position, radius: Me(x()) };
  }
  function xe(R, z) {
    const { yaw_deg: T, pitch_deg: K } = ag(R.position, z);
    return { ...R, yaw_deg: T, pitch_deg: K };
  }
  function be() {
    return Gu(w(), r.width, r.height, p());
  }
  return {
    connect(R) {
      ({
        editorViewInput: _,
        editorViewSceneState: g,
        getActiveCutoutShot: v,
        isCameraSelected: y,
        isErpCamera: G,
        isFreeFrameView: U,
        moveFrameByKeys: F,
        moveKeys: P,
        requestDraw: $,
        sceneFiles: Q,
        startAnimation: q,
        stickerById: le,
        syncFloatingViewButtonState: ve,
        updateCursor: he
      } = R);
    },
    transitionView: Se,
    applyViewTransitionEnd: fe,
    cancelViewTransition: de,
    turnViewTo: te,
    cameraPreviewShown: me,
    isSpaceView: oe,
    hasSpaceContent: I,
    isFreeSpaceView: W,
    viewControls: N,
    spaceModeState: ue,
    applySpaceMode: A,
    setSpaceMode: O,
    spaceViewState: w,
    spaceOrigin: M,
    hasCamera: ce,
    cameraShoots: ye,
    paintingShown: D,
    sceneStickerShown: b,
    cutoutCamera: B,
    contentSphere: p,
    setSpaceView: h,
    spaceScale: x,
    frameSpaceContent: E,
    zoomSpaceAt: V,
    startSpaceDrag: re,
    canKeyMove: k,
    stepKeyMove: Y,
    saveView: ie,
    restoreView: _e,
    currentSpaceCamera: be,
    cameraFrustumLength: Me,
    cameraSphere: Ce,
    lookingAt: xe
  };
}
function WC(e) {
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
  let u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D, b, B, p, h = { revision: -1, sceneState: null }, x = null;
  function E() {
    return x || (x = ae()), x;
  }
  function j() {
    x = null;
  }
  function J() {
    return h.sceneState;
  }
  function ae() {
    const K = le(), C = g(), H = { ...a.assets };
    for (const ee of l ? [] : a.stickers) {
      const Pe = String((ee == null ? void 0 : ee.asset_id) || "");
      Pe && !H[Pe] && i.has(Pe) && (H[Pe] = { type: "comfy_image", filename: Pe });
    }
    const L = l ? a.stickers.map((ee) => me(ee) ? { ...ee, source: { kind: "file", filename: ce(ee) } } : ee) : a.stickers;
    h.revision !== s.stateRevision && (h = { revision: s.stateRevision, sceneState: cn({ ...a, stickers: L, assets: H, painting: null }) }), l && V(h.sceneState);
    const S = os(h.sceneState, n.frame), Z = I ? Q() : null, se = (ee) => {
      if (l && !ee.visible) return null;
      if (I && fe(ee)) return Z;
      const Pe = he(ee);
      return Pe ? { media: Pe, revision: ve(Pe) } : null;
    }, ge = B(), pe = [...ge.sky, ...pg(h.sceneState, n.frame, a.stickers, { media: se, paintLayers: C, evaluated: S })], we = K && (K === d || K === c) ? d.dataset.panoSrc : K;
    let Ee = Se(K) ? { media: K, revision: ve(K), coverage: m(), source: we } : null;
    _(n.frame) || (Ee = Mh(f()));
    const Le = X(), $e = O_(A(), Le, O());
    $e.mode !== n.spaceMode && G(), u($e);
    const Ge = Le ? re(h.sceneState, S, se, ge) : null, We = te() ? { ...Ge, ...Y(Ge) } : null;
    return { background: Ee, layers: pe, space: We, content: Ge };
  }
  function V(K) {
    const C = new Map(a.stickers.map((H) => [H.id, H.clip]));
    K.scene.clip = { ...a.scene.clip };
    for (const H of K.stickers) {
      const L = C.get(H.id);
      L && (H.clip = { ...L });
    }
  }
  function re(K, C, H, L) {
    const S = N(), Z = Ku(S, C.scene), se = Z != null && Z.url ? r.sceneBox(Z.url) : null, ge = se && co(Z.kind, se), pe = M(), we = ng(pe, K, C), Ee = we != null && we.url ? r.sceneBox(we.url) : null, Le = Ee ? [{ box: co(we.kind, Ee), value: we.value }] : [], $e = og(K, C, $);
    for (const { request: ee } of $e) {
      const Pe = ee ? r.sceneBox(ee.url) : null;
      Pe && Le.push({ box: co(ee.kind, Pe), value: ee.value });
    }
    k(K, $e, L.items);
    const Ge = hg(K, n.frame, a.stickers, { media: H, evaluated: C });
    for (const { request: ee, value: Pe } of L.items) {
      const ne = ee != null && ee.url ? r.sceneBox(ee.url) : null;
      ne && Le.push({ box: co(ee.kind, ne), value: Pe });
    }
    const We = Cc(W_(C, ge, [...Ge, ...L.stickers], Le));
    return {
      evaluated: C,
      sceneUrls: S ? S.urls.filter(Boolean) : [],
      scene: Z,
      stickerUrls: rg(pe, K),
      sticker: we,
      fileStickers: $e.map((ee) => ee.request).filter(Boolean),
      fileStickerKeys: $e.map((ee) => ee.key),
      stickers: Ge,
      upstreamStickers: L.stickers,
      upstreamItems: L.items,
      sphere: We
    };
  }
  function k(K, C, H) {
    const L = (S) => /\b404\b/.test(r.sceneItemError(S) ?? "");
    for (const { id: S, key: Z } of C) {
      const se = L(Z) ? K.stickers.find((ge) => ge.id === S) : null;
      se && W(se.source);
    }
    for (const S of H)
      S.source && L(S.urls[0]) && W(S.source);
  }
  function Y(K) {
    var H;
    const C = ((H = K.sphere) == null ? void 0 : H.radius) || Wn;
    return {
      gizmo: _e() ? xe() : ie(K.evaluated),
      grid: n.showGrid && !n.fullscreen ? iw(C) : null,
      lines: y() ? Ce(C) : []
    };
  }
  function ie(K) {
    const C = ue(), H = Ct(C) ? Bn(C, n.frame) : K.stickers.find((L) => L.id === (C == null ? void 0 : C.id));
    return !p(C) || !(H != null && H.active) ? null : { mode: n.gizmoMode, transform: va(H) };
  }
  function _e() {
    return y() && n.selectedId === Tu;
  }
  let Me = { revision: -1, span: -1, segments: [] };
  function Ce(K) {
    const C = D();
    (Me.revision !== s.stateRevision || Me.span !== C) && (Me = { revision: s.stateRevision, span: C, segments: sw(aw(a, C)) });
    const { segments: H } = Me, L = H.length ? [{ segments: H, color: hA }] : [];
    if (!de()) return L;
    const S = _e() ? $0 : mA;
    return [...L, { segments: lg(F(), v(K)), color: S }];
  }
  function xe() {
    return !de() || !_e() || o ? null : { mode: n.gizmoMode === "rotate" ? "rotate" : "translate", transform: va({ ...F(), scale: 1 }) };
  }
  function be() {
    const { background: K, layers: C, space: H } = E(), L = t.width, S = t.height, Z = P({ x: 0, y: 0, w: L, h: S });
    let se = !1;
    return !K && !C.length && !H ? (r.clear(460551), se = r.ready) : (r.clear(), se = !!r.render({
      rect: Z,
      camera: H ? Gu(w(), L, S, H.sphere) : U(),
      background: K,
      layers: C,
      space: H
    })), ye(), (n.worldSelectedId || _e() || oe()) && b(), se;
  }
  function R(K) {
    const { content: C } = E();
    return !C || !K.position ? Ao(K) : eg(Ao(K), K.position, q(), C.sphere);
  }
  function z(K, C, H, L = null) {
    const { background: S, layers: Z, content: se } = E();
    if (!S && !Z.length && !se) return null;
    const ge = se && C.position ? se : null;
    return r.render({ rect: K, camera: R(C), background: S, layers: Z, space: ge, owner: H, clearColor: L });
  }
  function T(K) {
    return r.clear(460551), !!r.renderUnwrap({ rect: P(K), ...E() });
  }
  return {
    connect(K) {
      ({
        applySpaceMode: u,
        backgroundColor: f,
        backgroundCoverage: m,
        backgroundShowsAt: _,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: v,
        cameraShoots: y,
        cancelViewTransition: G,
        currentViewCamera: U,
        cutoutCamera: F,
        deviceRect: P,
        file3dEditorFile: $,
        followPortSticker: Q,
        frameViewDistance: q,
        getConnectedErpImage: le,
        getMediaRevisionToken: ve,
        getStickerImage: he,
        hasSpaceContent: X,
        isDecodedImageReady: Se,
        isExternalSticker: fe,
        isFreeSpaceView: de,
        isSpaceView: te,
        isUploadingSticker: me,
        isWorldMenuShown: oe,
        portVideo: I,
        refreshFile3d: W,
        sceneFiles: N,
        selectedWorldSticker: ue,
        spaceModeState: A,
        spaceOrigin: O,
        spaceViewState: w,
        stickerFiles: M,
        stickerImageKey: ce,
        syncFloatingViewButtonState: ye,
        timelineSpanFrames: D,
        updateSelectionMenu: b,
        upstreamViewInput: B,
        worldStickerEditable: p
      } = K);
    },
    editorViewInput: E,
    endEditorViewFrame: j,
    editorViewSceneState: J,
    isCameraSelected: _e,
    renderEditorView: be,
    shotViewCamera: R,
    drawEditorViewShot: z,
    renderEditorViewUnwrap: T
  };
}
function UC(e) {
  const {
    comfyMedia: t,
    editor: n,
    mediaAssetSource: r,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f, m = { list: null, entries: [], fps: null }, _ = /* @__PURE__ */ new Map();
  const g = /* @__PURE__ */ new Map(), v = () => f({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA });
  function y(D) {
    if (!D) return null;
    let b = g.get(D);
    return b || (b = new Image(), b.onload = v, b.onerror = v, b.src = D, g.set(D, b)), b;
  }
  function G({ sceneState: D, ui: b }) {
    return [
      ...D.stickers.filter((B) => B.source.kind !== "port").map((B) => r(ga(B.source))),
      i(mn(b, li)[0] || null),
      ...D.painting.raster_objects.map((B) => B.rasterDataUrl)
    ].filter(Boolean);
  }
  function U() {
    return a && (Gf(o, "scene") === Hg || !!F());
  }
  function F() {
    const D = a && bt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, b = Array.isArray(D) ? D : null;
    if (m.list !== b) {
      m.entries.forEach(ce), m = { list: b, entries: b ? Gg(b).map((p) => ({ layer: p })) : [], fps: null };
      const B = new Set(m.entries.flatMap((p) => G(p.layer)));
      for (const p of [...g.keys()]) B.has(p) || g.delete(p);
    }
    return b && m.fps !== s.timeline.fps && P(), b && m.entries;
  }
  function P() {
    if (!m.list) return;
    const D = Wg(m.entries.map((b) => b.layer), s.upstream, s.timeline.fps);
    m.entries.forEach((b, B) => {
      b.working = D[B];
    }), m.fps = s.timeline.fps, _ = Xf(D);
  }
  function $() {
    if (!m.list) return;
    const D = m.entries.map((B) => B.working), b = ek(s.upstream, m.entries.map((B) => B.layer), D, _, m.fps);
    b !== s.upstream && (s.upstream = b, _ = Xf(D));
  }
  function Q() {
    const D = F();
    D && (s.upstream = lk(s.upstream, D.map((b) => b.layer)));
  }
  function q(D) {
    $();
    const b = D(s.upstream);
    return b === s.upstream ? !1 : (s.upstream = b, P(), !0);
  }
  function le(D) {
    const b = D.map((B) => B.origin);
    return q((B) => nk(B, b, s.timeline.fps));
  }
  function ve(D, b = null) {
    return q((B) => ik(B, D, b));
  }
  function he(D) {
    return q((b) => ak(b, D));
  }
  function X(D) {
    return q((b) => sk(b, D));
  }
  function Se() {
    return (F() ?? []).flatMap((D) => D.working.sceneState.stickers);
  }
  function fe(D) {
    const b = m.entries.find((B) => {
      var p;
      return ((p = B.working) == null ? void 0 : p.key) === D.origin.layer;
    });
    return b ? y(i(mn(b.layer.ui, li)[0] || null)) : null;
  }
  function de(D = null) {
    const b = F();
    if (!b) return null;
    const [B] = t.uiValue(o, "pano_upstream_frames") || t.uiValue(o, "pano_timeline_frames") || [], p = b.map((x) => x.working), h = (x) => Ho((E) => mn(b[x].layer.ui, E));
    return {
      frames: Number(B) > 0 ? Number(B) : 0,
      ends: Yg(p, s.upstream, _, h, s.timeline.fps, D)
    };
  }
  function te(D) {
    const b = m.entries.find((B) => {
      var p;
      return ((p = B.working) == null ? void 0 : p.key) === D.origin.layer;
    });
    return b ? Ho((B) => mn(b.layer.ui, B)) : null;
  }
  function me() {
    return (F() ?? []).map(({ layer: D, working: b }) => {
      const B = Yo(b.key);
      return {
        key: b.key,
        sceneState: b.sceneState,
        editable: B,
        record: B ? s.upstream.find((p) => p.layer === b.key) ?? null : null,
        scene: mn(D.ui, "pano_scene_files").length > 0,
        deleted: B ? ok(s.upstream, b) : 0
      };
    });
  }
  function oe(D) {
    for (const { working: b } of F() ?? []) {
      const { key: B, sceneState: p } = b, h = Yo(B);
      if (D === Tc(B, "scene")) return { editable: h, part: "scene", owner: p.scene, sceneState: p };
      if (D === Tc(B, "painting")) return { editable: h, part: "painting", owner: null, sceneState: p };
      const x = p.stickers.find((E) => E.id === D);
      if (x) return { editable: h, part: "sticker", owner: x, sceneState: p };
    }
    return null;
  }
  function I() {
    if (!a) return "";
    const D = F();
    if (Zw(Gf(o, "scene"), D)) return "Run the workflow to show the upstream scene.";
    if (!D) return "";
    const b = t.uiList(o, "pano_sticker_warnings");
    return String(b.find((B) => String(B).startsWith(Jw)) ?? "");
  }
  function W(D, b, B) {
    const { ui: p } = D.layer, h = s.timeline.fps, x = mn(p, V0)[0], E = mn(p, R0).map(i).filter(Boolean), j = i(mn(p, L0)[0] || null), J = x && typeof x == "object" ? E.length ? { frames: E, meta: x } : j ? { src: j, meta: x } : null : null, ae = y(i(mn(p, li)[0] || null)), V = J ? Au(b.clip, B, h, J.meta) : null;
    let re = ae;
    if (J != null && J.frames)
      D.frames || (D.frames = Eu({
        createImage: (k, Y) => {
          const ie = new Image();
          return ie.onload = Y, ie.onerror = Y, ie.src = k, ie;
        },
        onLoad: v
      })), re = D.frames.picture(J.frames, V, J.meta, ae);
    else if (J != null && J.src) {
      const k = N(D);
      k.follow({ src: J.src, time: V, playing: u.advancing, fps: h }), re = k.picture(D.still, ae);
    }
    return re ? { media: re, revision: d(re), source: Iu(J, ae) } : null;
  }
  function N(D) {
    if (D.follower) return D.follower;
    const b = rs(document, "editor.upstream-port-video");
    b.playsInline = !0, b.preload = "auto";
    const B = Gt({ label: "editor.upstream-port-still" });
    return B.__panoFrameIdx = 0, D.video = b, D.still = B, D.follower = ed({
      video: b,
      onCapture: () => {
        var x;
        const p = Number(b.videoWidth || 0), h = Number(b.videoHeight || 0);
        p < 1 || h < 1 || (B.width = p, B.height = h, (x = B.getContext("2d")) == null || x.drawImage(b, 0, 0), B.__panoFrameIdx += 1, v());
      },
      onChange: v
    }), D.follower;
  }
  function ue(D, b, B) {
    if (b.source.kind === "port") return W(D, b, B);
    const p = y(r(ga(b.source)));
    return p ? { media: p, revision: d(p) } : null;
  }
  function A(D) {
    var j;
    const { sceneState: b } = D.working, { painting: B } = b, p = B.paint.strokes.length + B.mask.strokes.length;
    if (!b.painting_visible || !p && !B.raster_objects.length) return [];
    const h = c(), x = `${h.width}x${h.height}`;
    D.paintSize !== x && (w(D), D.paintSize = x, D.paintEngine = p ? tl(h) : null, (j = D.paintEngine) == null || j.rebuildCommitted({ painting: B }), D.rasters = /* @__PURE__ */ new Map());
    const E = D.paintEngine;
    return $u(b, {
      // A painting with groups but no strokes has no engine, and its groups show nothing.
      group: (J) => {
        const ae = E == null ? void 0 : E.getGroupDisplayCanvas(J);
        return ae && { media: ae, revision: x };
      },
      raster: (J) => {
        const ae = O(D, J, h);
        return ae && { media: ae, revision: x };
      },
      mask: () => Kh(E)
    });
  }
  function O(D, b, { width: B, height: p }) {
    if (D.rasters.has(b.id)) return D.rasters.get(b.id);
    const h = y(b.rasterDataUrl);
    if (!h.complete || !h.naturalWidth) return null;
    const x = Gt({ label: "editor.upstream-raster-erp", width: B, height: p }), E = x.getContext("2d");
    return E ? (z0(E, h, b, B, p), D.rasters.set(b.id, x), x) : null;
  }
  function w(D) {
    var b;
    (b = D.rasters) == null || b.forEach((B) => ei(B)), D.rasters = null, D.paintEngine = null, D.paintSize = null;
  }
  function M() {
    const D = F() ?? [], b = { sky: [], stickers: [], items: [] }, B = n.frame;
    return D.forEach((p) => {
      const h = ck(p.working, p.working.key, B, {
        media: (x) => ue(p, x, B),
        paintLayers: A(p),
        source: i,
        editorFile: l
      });
      b.sky.push(...h.sky), b.stickers.push(...h.stickers), b.items.push(...h.items);
    }), b;
  }
  function ce(D) {
    var b;
    (b = D.follower) == null || b.dispose(), D.still && ei(D.still), w(D);
  }
  function ye() {
    m.entries.forEach(ce), m = { list: null, entries: [], fps: null }, _ = /* @__PURE__ */ new Map(), g.clear();
  }
  return {
    connect(D) {
      ({ file3dEditorFile: l, getDesiredPaintTargetDescriptor: c, getMediaRevisionToken: d, playback: u, requestDraw: f } = D);
    },
    upstreamEntries: F,
    upstreamLinked: U,
    upstreamNotice: I,
    upstreamOutput: de,
    upstreamPortMeta: te,
    upstreamViewInput: M,
    rebuildUpstreamWorking: P,
    syncUpstreamEdits: $,
    pruneUpstreamRecords: Q,
    deleteUpstreamStickers: le,
    revertUpstreamSticker: ve,
    revertUpstreamLayer: he,
    restoreUpstreamDeleted: X,
    upstreamStickers: Se,
    upstreamStickerImage: fe,
    upstreamTimelineLayers: me,
    upstreamRow: oe,
    disposeUpstream: ye
  };
}
const Jc = "camera_preview";
function BC(e) {
  return e === Jc ? ot.SPLAT_PREVIEW : ot.SPLAT_STAGE;
}
function YC(e) {
  return [...e].some((t) => t !== ot.VIEW && t !== ot.OVERLAY && t !== ot.SPLAT_STAGE);
}
function Q0(e, t = !1) {
  const n = Fe(mi(e), 0.05, 20), r = t ? 320 : 220;
  return n >= 1 ? { width: r, height: Math.max(1, Math.round(r / n)) } : { width: Math.max(1, Math.round(r * n)), height: r };
}
function qC(e) {
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
  let d, u, f, m, _ = null, g = !1, v = !1;
  function y() {
    g && (g = !1, o.releaseSplats(Jc));
  }
  function G() {
    _ = null, v = !1, y();
  }
  function U(le) {
    if (!r || !le) return !1;
    const ve = r.closest(".pano-camera-preview");
    if (!ve) return !1;
    const he = Math.round(Number(ve.clientWidth || r.clientWidth || 0)), X = Math.round(Number(ve.clientHeight || r.clientHeight || 0));
    return Math.abs(he - Number(le.width || 0)) <= 1 && Math.abs(X - Number(le.height || 0)) <= 1;
  }
  function F(le, ve) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, G();
      return;
    }
    const he = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !he || !n) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = he ? "Preview unavailable" : "Add Frame to preview", G();
      return;
    }
    const X = Q0(he, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = X.width, c.cameraPreview.height = X.height, v) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const Se = window.devicePixelRatio || 1, fe = Math.max(1, X.width * Se), de = Math.max(1, X.height * Se), te = Math.min(1, t.width / fe, t.height / de), me = { width: Math.max(1, Math.floor(fe * te)), height: Math.max(1, Math.floor(de * te)) }, oe = !_ || _.width !== me.width || _.height !== me.height || YC(ve);
    if (le && oe) {
      g = !0;
      const W = u({ x: 0, y: t.height - me.height, w: me.width, h: me.height }, he, Jc);
      _ = W ? me : null, W && q(W);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const I = U(X);
    c.cameraPreview.ready = !0, c.cameraPreview.label = I ? "" : "Loading preview", c.cameraPreview.settled = I && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function P() {
    _ = null, v = !1;
  }
  let $ = 0, Q = !1;
  function q(le) {
    const ve = ++$;
    createImageBitmap(le.canvas, le.x, le.y, le.width, le.height).then((he) => {
      var X;
      if (ve !== $ || !s.running) {
        he.close();
        return;
      }
      (X = n.getContext("bitmaprenderer")) == null || X.transferFromImageBitmap(he);
    }).catch((he) => {
      ve !== $ || !s.running || (v = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !Q && (Q = !0, console.error("[PanoramaStickers] camera preview frame failed", he)));
    });
  }
  return {
    connect(le) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: m
      } = le);
    },
    drawCutoutOutputPreview: F,
    forgetCameraPreviewFrame: P
  };
}
function XC(e) {
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
  let u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D, b, B, p;
  function h(R) {
    const z = n.width, T = n.height, K = q();
    if (r.globalAlpha = 1, r.lineWidth = 1, r.clearRect(0, 0, z, T), M(), R && (a.backgroundDirty = !D(K)), i.showGrid && !i.fullscreen) {
      r.strokeStyle = "#3f3f46";
      for (let H = 0; H <= 16; H += 1) {
        const L = K.x + K.w * H / 16;
        r.beginPath(), r.moveTo(L, K.y), r.lineTo(L, K.y + K.h), r.stroke();
      }
      for (let H = 0; H <= 8; H += 1) {
        const L = K.y + K.h * H / 8;
        r.beginPath(), r.moveTo(K.x, L), r.lineTo(K.x + K.w, L), r.stroke();
      }
      r.strokeStyle = "rgba(250, 250, 250, 0.86)", r.lineWidth = 1.2, r.beginPath(), r.moveTo(K.x, K.y + K.h / 2), r.lineTo(K.x + K.w, K.y + K.h / 2), r.stroke(), r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center";
      const C = K.y + K.h * 0.57;
      r.fillText("Left", K.x + K.w * 0.25, C), r.fillText("Front", K.x + K.w * 0.5, C), r.fillText("Right", K.x + K.w * 0.75, C), r.fillText("Back", K.x + 38, C), r.fillText("Back", K.x + K.w - 38, C);
    }
  }
  function x(R, z, T = 1) {
    let K = !1;
    r.strokeStyle = z, r.lineWidth = T, r.beginPath();
    for (const C of R) {
      const H = ue(C);
      if (!H) {
        K = !1;
        continue;
      }
      K ? r.lineTo(H.x, H.y) : (r.moveTo(H.x, H.y), K = !0);
    }
    r.stroke();
  }
  function E(R) {
    const z = n.width, T = n.height;
    if (r.clearRect(0, 0, z, T), M(), R && (a.backgroundDirty = !ye()), i.showGrid && !i.fullscreen && g().space)
      j();
    else if (i.showGrid && !i.fullscreen) {
      for (let C = -180; C <= 180; C += 15) {
        const H = [];
        for (let L = -89; L <= 89; L += 4) H.push(gn(C, L));
        x(H, "#3f3f46", C % 90 === 0 ? 1.3 : 1);
      }
      for (let C = -75; C <= 75; C += 15) {
        const H = [];
        for (let L = -180; L <= 180; L += 4) H.push(gn(L, C));
        x(H, C === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", C === 0 ? 1.5 : 1);
      }
      const K = [
        { name: "Left", dir: gn(-90, 0) },
        { name: "Front", dir: gn(0, 0) },
        { name: "Right", dir: gn(90, 0) },
        { name: "Back", dir: gn(180, 0) }
      ];
      r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", K.forEach((C) => {
        const H = ue(C.dir);
        H && r.fillText(C.name, H.x, H.y + 24);
      });
    }
  }
  function j() {
    const R = Gu(p(), n.width, n.height, f()), z = Wo(R, [0, 0, 0], n.width, n.height);
    z && (r.fillStyle = "rgba(255, 221, 87, 0.9)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", r.fillText("ERP origin", z.x, z.y - 12));
  }
  function J(R, z) {
    const T = N(R), K = gn(Number(T.yaw_deg || 0), Number(T.pitch_deg || 0)), C = i.mode === "unwrap" ? A(K) : null, H = C ? C.x : null, L = i.mode === "pano" ? 28 : 20, S = [
      b(R, 0, L, H),
      b(R, 1, L, H),
      b(R, 2, L, H),
      b(R, 3, L, H)
    ];
    od(r, S, { selected: z });
  }
  function ae(R, z = []) {
    if (!(!R || !Array.isArray(z) || z.length < 4)) {
      R.beginPath(), R.moveTo(z[0].x, z[0].y);
      for (let T = 1; T < 4; T += 1) R.lineTo(z[T].x, z[T].y);
      R.closePath();
    }
  }
  function V(R, z, T) {
    const K = Array.isArray(R == null ? void 0 : R.corners) ? R.corners : [];
    if (K.length < 4) return;
    const C = Fe(Number((R == null ? void 0 : R.visibilityAlpha) ?? 1), 0, 1);
    if (C <= 0.01) return;
    const H = r.globalAlpha;
    r.globalAlpha = H * C;
    const L = T ? "rgba(255, 116, 116, 0.96)" : z ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", S = T ? "rgba(255, 89, 89, 0.08)" : z ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", Z = z ? 3.2 : 2.6;
    ae(r, K), r.fillStyle = S, r.fill(), r.strokeStyle = L, r.lineWidth = Z, r.stroke(), r.save(), r.strokeStyle = L, r.lineWidth = z ? 3.2 : 2.6, r.lineCap = "round";
    const se = Array.isArray(R == null ? void 0 : R.edgeMidpoints) && R.edgeMidpoints.length >= 4 ? R.edgeMidpoints : [
      { edge: "top", x: (K[0].x + K[1].x) * 0.5, y: (K[0].y + K[1].y) * 0.5 },
      { edge: "right", x: (K[1].x + K[2].x) * 0.5, y: (K[1].y + K[2].y) * 0.5 },
      { edge: "bottom", x: (K[2].x + K[3].x) * 0.5, y: (K[2].y + K[3].y) * 0.5 },
      { edge: "left", x: (K[3].x + K[0].x) * 0.5, y: (K[3].y + K[0].y) * 0.5 }
    ], ge = { top: "bottom", right: "left", bottom: "top", left: "right" }, pe = z ? 12 : 9;
    se.forEach((we) => {
      const Le = se.find((ee) => (ee == null ? void 0 : ee.edge) === ge[we == null ? void 0 : we.edge]) || {
        x: (K[0].x + K[1].x + K[2].x + K[3].x) * 0.25,
        y: (K[0].y + K[1].y + K[2].y + K[3].y) * 0.25
      }, $e = Le.x - we.x, Ge = Le.y - we.y, We = Math.hypot($e, Ge) || 1;
      r.beginPath(), r.moveTo(we.x, we.y), r.lineTo(we.x + $e / We * pe, we.y + Ge / We * pe), r.stroke();
    }), r.restore(), r.globalAlpha = H;
  }
  function re(R, z, T, K) {
    const C = Fe(Number((z == null ? void 0 : z.visibilityAlpha) ?? 1), 0, 1);
    if (C <= 0.01) return;
    if (me(R)) {
      V(z, T, K);
      return;
    }
    if (oe(R)) {
      const L = r.globalAlpha;
      r.globalAlpha = L * Q(R) * C, i.mode === "frame" ? (r.strokeStyle = T ? "rgba(250, 250, 250, 0.9)" : K ? "rgba(255, 89, 89, 0.72)" : "#71717a", r.lineWidth = T ? 2 : 1, ae(r, z.corners), r.stroke()) : J(R, T), r.globalAlpha = L;
      return;
    }
    const H = r.globalAlpha;
    r.globalAlpha = H * C, r.fillStyle = T ? "rgba(0, 112, 243, 0.24)" : K ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ae(r, z.corners), r.fill(), r.strokeStyle = T ? "rgba(255, 255, 255, 1)" : K ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", r.lineWidth = T ? 2.8 : 1.9, ae(r, z.corners), r.stroke(), r.globalAlpha = H;
  }
  function k(R, z, T) {
    if (oe(R)) {
      u0(r, z, { accent: T });
      return;
    }
    const K = !(me(R) && ve());
    r.fillStyle = T, K && z.corners.forEach((C) => {
      r.beginPath(), r.arc(C.x, C.y, 6.5, 0, Math.PI * 2), r.fill();
    }), K && me(R) && (r.strokeStyle = T, r.lineCap = "round", r.lineWidth = 4, z.edgeMidpoints.forEach((C) => {
      var pe, we, Ee, Le;
      const H = (((pe = C.b) == null ? void 0 : pe.x) ?? C.x) - (((we = C.a) == null ? void 0 : we.x) ?? C.x), L = (((Ee = C.b) == null ? void 0 : Ee.y) ?? C.y) - (((Le = C.a) == null ? void 0 : Le.y) ?? C.y), S = Math.hypot(H, L) || 1, Z = H / S, se = L / S, ge = 10;
      r.beginPath(), r.moveTo(C.x - Z * ge, C.y - se * ge), r.lineTo(C.x + Z * ge, C.y + se * ge), r.stroke();
    }), r.lineCap = "butt"), I(R) || (r.strokeStyle = "rgba(250, 250, 250, 0.9)", r.lineWidth = 1.8, r.beginPath(), r.moveTo(z.rotateStemBase.x, z.rotateStemBase.y), r.lineTo(z.rotateHandle.x, z.rotateHandle.y), r.stroke(), r.fillStyle = T, r.beginPath(), r.arc(z.rotateHandle.x, z.rotateHandle.y, 10, 0, Math.PI * 2), r.fill());
  }
  function Y() {
    var H;
    const R = i.mode === "frame" ? [] : $(), z = R.length > 1, T = l ? y() : F(), K = T.map((L) => `${String((L == null ? void 0 : L.id) || "")}:${me(L) ? "frame" : Number((L == null ? void 0 : L.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== T || i._sortedItemsCache.orderKey !== K) && (i._sortedItemsCache = {
      src: T,
      orderKey: K,
      sorted: [...T]
    });
    const C = [...R.filter(Ct), ...i._sortedItemsCache.sorted];
    for (const L of C) {
      const S = i.mode !== "frame" && !z && fe(L);
      if (i.mode === "frame" && !S) continue;
      const Z = oe(L), se = me(L), ge = Se(L);
      if (!Z && !se || te(L) && !B(L)) continue;
      const pe = W(L);
      if (d !== "stickers" && !pe.visible)
        continue;
      const we = Fe(Number((pe == null ? void 0 : pe.visibilityAlpha) ?? 1), 0, 1);
      if (we <= 0.01) continue;
      const Ee = se && l && i.mode === "pano" ? Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (r.save(), r.globalAlpha *= Ee, re(L, pe, S, ge), S && pe.visible) {
        const Le = ge ? "#ff4d4f" : Z && he(L) ? "#f59e0b" : "#0070f3", $e = r.globalAlpha;
        r.globalAlpha = $e * we, k(L, pe, Le), r.globalAlpha = $e;
      }
      r.restore();
    }
    if (l && i.mode === "pano" && !v() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const L = i.cutoutPanoFrameVisual, S = Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      r.save(), r.globalAlpha *= S, V(L.geom, L.selected, L.locked), L.selected && k(
        L.item,
        L.geom,
        L.locked ? "#ff4d4f" : "#0070f3"
      ), r.restore();
    }
    if (z) {
      const L = P(R);
      if (L != null && L.visible) {
        const S = u(R) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(L.corners[0].x, L.corners[0].y);
        for (let Z = 1; Z < L.corners.length; Z += 1) r.lineTo(L.corners[Z].x, L.corners[Z].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = S, L.corners.forEach((Z) => {
          r.beginPath(), r.arc(Z.x, Z.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      }
    } else
      R.forEach((L) => {
        if (!I(L) && !de(L)) return;
        const S = W(L);
        if (!(S != null && S.visible)) return;
        const Z = Se(L) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(S.corners[0].x, S.corners[0].y);
        for (let se = 1; se < S.corners.length; se += 1) r.lineTo(S.corners[se].x, S.corners[se].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = Z, S.corners.forEach((se) => {
          r.beginPath(), r.arc(se.x, se.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      });
    if (((H = i.interaction) == null ? void 0 : H.kind) === "marquee_select") {
      const L = ce(i.interaction.start, i.interaction.current);
      r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.9)", r.fillStyle = "rgba(255, 255, 255, 0.08)", r.lineWidth = 1, r.setLineDash([5, 4]), r.beginPath(), r.rect(L.x0, L.y0, L.x1 - L.x0, L.y1 - L.y0), r.fill(), r.stroke(), r.restore();
    }
  }
  function ie(R) {
    const z = v(), T = G(z);
    if (!z || !T)
      return r.clearRect(0, 0, n.width, n.height), R && o.clear(657930), !1;
    const K = { x: T.x, y: T.y, w: T.w, h: T.h }, { rect: C, shot: H } = dg(z, T, { width: n.width, height: n.height }), L = _e(K);
    if (r.clearRect(0, 0, n.width, n.height), R) {
      o.clear(657930);
      const S = m(C), Z = !!_(S, H, void 0, 657930);
      Z || o.clear(1118481, S), a.backgroundDirty = !Z;
    }
    return r.save(), r.fillStyle = "rgba(0, 0, 0, 0.58)", r.beginPath(), r.rect(0, 0, n.width, n.height), r.roundRect(K.x, K.y, K.w, K.h, L), r.fill("evenodd"), r.restore(), r.save(), r.strokeStyle = $0, r.globalAlpha = 0.62, r.lineWidth = 2, r.beginPath(), r.roundRect(K.x + 1, K.y + 1, K.w - 2, K.h - 2, Math.max(0, L - 1)), r.stroke(), r.restore(), !0;
  }
  function _e(R) {
    const z = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * z, Number((R == null ? void 0 : R.w) || 0) * 0.5, Number((R == null ? void 0 : R.h) || 0) * 0.5);
  }
  function Me() {
    var Z, se;
    if (((Z = i.interaction) == null ? void 0 : Z.kind) !== "paint_lasso_fill") return;
    const R = i.interaction.stroke, z = (se = R == null ? void 0 : R.geometry) == null ? void 0 : se.points;
    let T;
    if (i.mode === "frame") {
      const ge = v(), pe = U(ge);
      T = O(z, ge, pe);
    } else
      T = w(z);
    if (!Array.isArray(T) || T.length < 3) return;
    const K = String((R == null ? void 0 : R.layerKind) || "") === "mask", C = (R == null ? void 0 : R.color) || { r: 1, g: 0.25, b: 0.25 }, H = Math.round(Number(C.r || 0) * 255), L = Math.round(Number(C.g || 0) * 255), S = Math.round(Number(C.b || 0) * 255);
    r.save(), r.beginPath(), r.moveTo(Number(T[0].x || 0), Number(T[0].y || 0));
    for (let ge = 1; ge < T.length; ge++) r.lineTo(Number(T[ge].x || 0), Number(T[ge].y || 0));
    r.closePath(), K ? (r.lineWidth = 2, r.setLineDash([6, 6]), r.lineDashOffset = 0, r.strokeStyle = "rgba(0,0,0,0.96)", r.stroke(), r.lineDashOffset = -6, r.strokeStyle = "rgba(255,255,255,0.96)", r.stroke(), r.setLineDash([]), r.lineDashOffset = 0) : (r.lineWidth = 1.5, r.setLineDash([6, 4]), r.strokeStyle = `rgba(${H},${L},${S},1)`, r.stroke(), r.setLineDash([])), r.restore();
  }
  function Ce() {
    const R = i.frameRollOverlayVisual, z = Fe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(R != null && R.shot) || z <= 1e-4) return;
    const T = U(R.shot);
    if (!T) return;
    const K = { x: T.x + T.w * 0.5, y: T.y + T.h * 0.5 }, C = Number(R.shot.roll_deg ?? R.shot.rot_deg ?? 0) * or, H = Math.hypot(T.w, T.h) * 0.55, L = Math.cos(C) * H, S = Math.sin(C) * H;
    r.save(), r.globalAlpha *= z, r.beginPath(), r.rect(T.x, T.y, T.w, T.h), r.clip(), r.translate(K.x, K.y), r.rotate(C);
    const Z = Math.max(12, Math.min(T.w, T.h) / 6);
    r.beginPath();
    for (let se = -H; se <= H; se += Z)
      r.moveTo(se, -H), r.lineTo(se, H);
    for (let se = -H; se <= H; se += Z)
      r.moveTo(-H, se), r.lineTo(H, se);
    r.lineWidth = 1, r.strokeStyle = "rgba(255, 255, 255, 0.22)", r.stroke(), r.setTransform(1, 0, 0, 1, 0, 0), r.beginPath(), r.moveTo(K.x - L, K.y - S), r.lineTo(K.x + L, K.y + S), r.lineWidth = 1.5, r.setLineDash([8, 6]), r.strokeStyle = "rgba(255, 255, 255, 0.92)", r.shadowColor = "rgba(0, 0, 0, 0.8)", r.shadowBlur = 3, r.stroke(), r.setLineDash([]), r.restore();
  }
  function xe() {
    return !l || !v() || t && X() || c && !le() ? 0 : bA;
  }
  function be() {
    const R = Fe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (R <= 1e-4 || !l || i.mode !== "pano") return;
    const z = v(), T = z ? W(z) : null, K = Array.isArray(T == null ? void 0 : T.corners) && T.corners.length >= 4 ? T.corners.map((L) => ({ x: Number(L.x || 0), y: Number(L.y || 0) })) : null;
    T != null && T.visible && K && (i.cutoutPanoDimCorners = K), z && (T != null && T.visible) && K && (i.cutoutPanoFrameVisual = {
      item: z,
      geom: T,
      selected: fe(z),
      locked: Se(z)
    });
    const C = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, H = T != null && T.visible ? K : C ? i.cutoutPanoDimCorners || [] : [];
    if (r.save(), r.fillStyle = `rgba(0, 0, 0, ${R})`, r.beginPath(), r.rect(0, 0, n.width, n.height), H.length >= 4) {
      r.moveTo(H[0].x, H[0].y);
      for (let L = 1; L < 4; L += 1) r.lineTo(H[L].x, H[L].y);
      r.closePath();
    }
    r.fill("evenodd"), r.restore();
  }
  return {
    connect(R) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: m,
        drawEditorViewShot: _,
        editorViewInput: g,
        getActiveCutoutShot: v,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: G,
        getFrameViewRect: U,
        getList: F,
        getMultiSelectionGeom: P,
        getSelectedItems: $,
        getStickerDisplayAlpha: Q,
        getUnwrapRect: q,
        isCameraSelected: le,
        isErpCamera: ve,
        isExternalSticker: he,
        isFreeSpaceView: X,
        isItemLocked: Se,
        isItemSelected: fe,
        isRasterObjectItem: de,
        isSceneSticker: te,
        isShotItem: me,
        isStickerItem: oe,
        isStrokeGroupItem: I,
        objectGeom: W,
        poseOf: N,
        projectDir: ue,
        projectDirUnwrap: A,
        projectErpLassoPointsToFrameRect: O,
        projectLassoPointsToCurrentView: w,
        rebuildPaintEngineIfNeeded: M,
        rectFromPoints: ce,
        renderEditorView: ye,
        renderEditorViewUnwrap: D,
        sampleStickerEdge: b,
        sceneStickerShown: B,
        spaceViewState: p
      } = R);
    },
    drawGridUnwrap: h,
    drawGridPano: E,
    drawObjects: Y,
    drawFrameViewBackground: ie,
    drawLassoOutlineOverlay: Me,
    drawFrameRollOverlay: Ce,
    getCutoutPanoDimTarget: xe,
    drawCutoutPanoPassepartout: be
  };
}
function JC(e) {
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
    type: _,
    uiState: g,
    viewController: v
  } = e;
  let y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D, b = () => {
  };
  function B(R = /* @__PURE__ */ new Set()) {
    ve();
    const z = l.backgroundDirty;
    d && (I(), G(z, R)), i.mode === "frame" ? (l.frameSafeRect = te(), P(z)) : i.mode === "unwrap" ? Q(z) : $(z), U(), le(), A(), q(), F(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && M(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, n.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const T = fe();
    g.stageStatus = T.status, g.stageStatusDetail = T.detail, g.stageNotice = ye() || D() || ce(), T.status === zn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", T.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function p(R = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const z = String((R == null ? void 0 : R.kind) || "");
    return z === "move" || z === "scale" || z === "scale_x" || z === "scale_y" || z === "rotate" ? !0 : z === "move_multi" ? Array.isArray(R == null ? void 0 : R.stickerSnapshots) && R.stickerSnapshots.length > 0 : !1;
  }
  function h() {
    return !!i.interaction || !!m.drag;
  }
  function x() {
    l.nodePreviewPending = !1;
    const R = Pn(s);
    R.liveState = f, R.liveStateVersion += 1, Se();
  }
  function E(R = {}) {
    var Z, se, ge, pe, we, Ee, Le, $e;
    const z = R.reason ?? ot.STATE, T = !!R.localOnly, K = R.externalSync === !0, C = String(R.cause || ""), H = String(((Z = i.interaction) == null ? void 0 : Z.kind) || "");
    (!T || H === "view" || H === "pan_frame" || p() || !!i.viewTransition || C === "mode" || C === "frame_view" || C === "cutout_frame") && (l.backgroundDirty = !0), T && de() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!T || C === "selection" || C === "mode" || C === "cutout_frame") && (O(), w()), h() ? l.nodePreviewPending = !0 : x(), K && ((ge = (se = lt(s).dom) == null ? void 0 : se.requestDraw) == null || ge.call(se), (pe = s.setDirtyCanvas) == null || pe.call(s, !0, !1)), K && !T && ((Ee = (we = s.graph) == null ? void 0 : we.setDirtyCanvas) == null || Ee.call(we, !0, !0), ($e = (Le = t == null ? void 0 : t.canvas) == null ? void 0 : Le.setDirty) == null || $e.call(Le, !0, !0)), c.requestDraw(z);
  }
  function j() {
    const R = r.getBoundingClientRect(), z = Math.max(2, Math.round(R.width)), T = Math.max(2, Math.round(R.height)), K = window.devicePixelRatio || 1, C = [r.width, r.height, n.width, n.height].join("x");
    (r.width !== z || r.height !== T) && (r.width = z, r.height = T);
    const H = lw(R.width || z, R.height || T, K, window.innerWidth || R.width, window.innerHeight || R.height);
    return o.resize(H.width, H.height), [r.width, r.height, n.width, n.height].join("x") === C ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && J(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function J(R) {
    R(), c.wake();
  }
  function ae() {
    return !!i.viewTransition || me.held || !!v.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || h();
  }
  function V(R = performance.now(), z = /* @__PURE__ */ new Set()) {
    var L;
    l.nodePreviewPending && !h() && x(), z.forEach((S) => l.reasons.add(S)), z.size && (l.dirty = !0), [...z].some((S) => S !== ot.OVERLAY) && (l.backgroundDirty = !0), N(), l.lastTickTs > 0 ? Math.max(1e-3, (R - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = R;
    const T = i.mode === "frame" && ((L = i.interaction) == null ? void 0 : L.kind) === "roll_frame" ? i.interaction : null;
    T != null && T.shot && (i.frameRollOverlayVisual = { shot: T.shot });
    const K = T ? 1 : 0;
    if (Math.abs(K - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = K, i.frameRollOverlayStartTs = R), Math.abs(Number(i.frameRollOverlayAlpha || 0) - K) > 1e-6) {
      const S = Fe(
        (R - Number(i.frameRollOverlayStartTs || R)) / vA,
        0,
        1
      );
      i.frameRollOverlayAlpha = Cn(
        Number(i.frameRollOverlayFrom || 0),
        K,
        Zl(S)
      ), S >= 1 && (i.frameRollOverlayAlpha = K, K === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const C = X();
    if (Math.abs(C - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = C, i.cutoutPanoDimStartTs = R), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - C) > 1e-6) {
      const S = Fe(
        (R - Number(i.cutoutPanoDimStartTs || R)) / Mp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Cn(
        Number(i.cutoutPanoDimFrom || 0),
        C,
        Zl(S)
      ), S >= 1 && (i.cutoutPanoDimAlpha = C), S >= 1 && C === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const H = d && he() ? 1 : 0;
    if (Math.abs(H - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = H, i.cutoutPanoFrameStartTs = R), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - H) > 1e-6) {
      const S = Fe(
        (R - Number(i.cutoutPanoFrameStartTs || R)) / Mp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Cn(
        Number(i.cutoutPanoFrameFrom || 0),
        H,
        Zl(S)
      ), S >= 1 && (i.cutoutPanoFrameAlpha = H, H === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const S = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), Z = Fe((R - Number(i.outputPreviewAnimStartTs || 0)) / S, 0, 1), ge = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? wA(Z) : xA(Z);
      i.outputPreviewAnim = Cn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, ge), l.dirty = !0, Z >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: S, done: Z } = HC(i.viewTransition, R);
      if (i.viewPosition = S.position, i.viewYaw = S.yaw_deg, i.viewPitch = S.pitch_deg, i.viewFov = S.hFOV_deg, i.viewDistance = S.distance, Z) {
        const { end: se } = i.viewTransition;
        i.viewTransition = null, se && y(se), ue();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (W(R) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, v.stepInertia(R) && (i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const S = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), B(S);
    }
  }
  function re(R) {
    try {
      R();
    } catch (z) {
      const T = String((z == null ? void 0 : z.stack) || (z == null ? void 0 : z.message) || z || "unknown editor frame error");
      l.tickErrorSignature !== T && (l.tickErrorSignature = T, console.error("[PanoramaStickers] editor frame failed", z)), g.stageStatus = In, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function k(R = performance.now(), z = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const T = b1();
    re(() => V(R, z)), v1(T);
  }
  function Y() {
    !l.running || !j() || re(() => {
      l.dirty = !1, B(/* @__PURE__ */ new Set([ot.RESIZE]));
    });
  }
  const ie = new ResizeObserver(Y);
  let _e = null;
  function Me() {
    _e == null || _e.removeEventListener("change", Ce), _e = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), _e.addEventListener("change", Ce);
  }
  function Ce() {
    Me(), Y();
  }
  function xe() {
    b = y1("editor", () => {
      var R;
      return {
        type: _,
        readOnly: a,
        mode: i.mode,
        interaction: ((R = i.interaction) == null ? void 0 : R.kind) ?? null,
        timelineDrag: !!m.drag,
        playing: !!oe.playing
      };
    });
  }
  function be() {
    b(), l.running = !1, c.stop(), ie.disconnect(), _e.removeEventListener("change", Ce);
  }
  return {
    connect(R) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: G,
        drawCutoutPanoPassepartout: U,
        drawFrameRollOverlay: F,
        drawFrameViewBackground: P,
        drawGridPano: $,
        drawGridUnwrap: Q,
        drawLassoOutlineOverlay: q,
        drawObjects: le,
        endEditorViewFrame: ve,
        getActiveCutoutShot: he,
        getCutoutPanoDimTarget: X,
        getSharedLivePaintSurface: Se,
        getStageImageStatus: fe,
        isPaintCompositeInteraction: de,
        measureFrameSafeRect: te,
        moveKeys: me,
        playback: oe,
        rebuildPaintEngineIfNeeded: I,
        stepKeyMove: W,
        syncCutoutShot: N,
        syncFloatingViewButtonState: ue,
        syncFrameRollKnob: A,
        syncLookAtFrameButtonState: O,
        syncViewToggleState: w,
        updateSelectionMenu: M,
        upstreamNotice: ce,
        file3dImportNotice: ye,
        file3dNotice: D
      } = R);
    },
    requestDraw: E,
    syncCanvasSize: j,
    startAnimation: J,
    editorAnimating: ae,
    tick: k,
    stageResizeObserver: ie,
    watchPixelRatio: Me,
    sampleEditorDiagnostics: xe,
    stopRenderLoop: be
  };
}
function ZC(e) {
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
    studio: _,
    type: g,
    uiState: v
  } = e;
  let y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D, b, B, p, h, x = 0;
  function E() {
    v.toolButtons.forEach((xe) => {
      const be = xe.attr === "data-tool-mode", R = xe.attr === "data-paint-tool", z = xe.attr === "data-mask-tool";
      xe.active = be ? xe.value === n.primaryTool : R ? xe.key === n.paintTool : z ? xe.key === n.maskTool : !1, xe.pressed = xe.active ? "true" : xe.pressed == null ? null : "false";
    });
  }
  function j() {
    if (_ && Ai(v.toolButtons, "value", "add-camera", { disabled: Se() }), g !== "cutout") return;
    const xe = U();
    Ai(v.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: xe ? "Look At Frame" : "Add Frame",
      tip: xe ? "Look at frame" : "Add frame",
      icon: xe ? je.camera : je.plus_circle
    });
  }
  function J() {
    const xe = uC({
      spaceView: ue(),
      spaceMode: Da(n.spaceMode, n.viewTransition),
      readOnly: c,
      frameMode: f && n.mode === "frame",
      showGrid: n.showGrid
    });
    v.space && Object.assign(v.space, xe.space);
    for (const [be, R] of Object.entries(xe.buttons)) Ai(v.floatingButtons, "action", be, R);
  }
  function ae() {
    var R;
    const xe = U0({ hasShot: !!U(), erp: te(), hidden: Se() && !G(), studio: _ });
    n.mode === "frame" && xe.disabled && (_ ? O(U()) : n.mode = "pano"), n.outputPreviewRect = null, v.viewButtons.forEach((z) => {
      const T = z.key === n.mode;
      z.pressed = T ? "true" : "false", z.visible = !(z.key === "frame" && !f), z.key === "frame" ? Object.assign(z, xe) : z.disabled = !1;
    });
    const be = f && n.mode === "frame" ? U() : null;
    v.frameRail.visible = !!be, v.frameRail.disabled = c || (be == null ? void 0 : be.locked) === !0, v.frameRollKnob.visible = !!be && !c && be.locked !== !0, v.frameRollKnob.disabled = c || (be == null ? void 0 : be.locked) === !0, v.frameRollKnob.rollDeg = Number((be == null ? void 0 : be.roll_deg) ?? (be == null ? void 0 : be.rot_deg) ?? 0), v.frameRollKnob.displayValue = $i(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((R = n.interaction) == null ? void 0 : R.kind) === "roll_frame", v.frameRollKnob.armed = !!be && n.altModifier === !0, v.frameRail.rollKnob = v.frameRollKnob, v.frameRail.aspectLabel = be ? gr(be) : "", v.frameRail.aspectChoices = B0(be ? String(gr(be)) : null, { erp: _, coverage: m.coverage }), be || (v.frameRail.aspectOpen = !1), v.outputPreviewToggle.visible = g === "cutout" && n.mode !== "frame" && !!U(), f && v.cameraPreview && (v.cameraPreview.visible = n.mode !== "frame" && y(), v.cameraPreview.expanded = !!n.outputPreviewExpanded, v.cameraPreview.settled = v.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), J(), I() ? p(n.pointerPos) : ye(n.mode === "pano" ? "grab" : "default");
  }
  function V() {
    var be;
    const xe = n.mode === "frame" ? U() : null;
    v.frameRollKnob.visible = !!xe && !c && xe.locked !== !0, v.frameRollKnob.rollDeg = Number((xe == null ? void 0 : xe.roll_deg) ?? (xe == null ? void 0 : xe.rot_deg) ?? 0), v.frameRollKnob.displayValue = $i(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((be = n.interaction) == null ? void 0 : be.kind) === "roll_frame", v.frameRollKnob.armed = !!xe && n.altModifier === !0;
  }
  function re() {
    E();
    const xe = sC({
      editor: n,
      swatches: il,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: er,
      colorsApproximatelyEqual: Ta,
      rgb01ToHsv: Xc,
      hsv01ToRgb: qc,
      getBrushPresetIdForTool: F,
      isActiveLassoTool: de
    });
    if (Object.assign(v.paintDock, xe), B(), !xe.visible) {
      i && (i.hidden = !0);
      return;
    }
    x && (clearTimeout(x), x = 0), o && (!xe.colorEnabled && i && !i.hidden && (x = window.setTimeout(() => {
      i.hidden = !0, v.paintDock.colorPopOpen = !1, x = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", xe.pickerHueColor), i.style.setProperty("--picker-sat", xe.pickerSat), i.style.setProperty("--picker-val", xe.pickerVal), i.style.setProperty("--picker-hue", xe.pickerHue)), s && (s.style.left = xe.pickerSvLeft, s.style.top = xe.pickerSvTop), a && (a.style.left = xe.pickerHueLeft));
  }
  function k() {
    const xe = M(f && n.mode === "frame" ? U() : q());
    xe && (n.panelLastValues = {
      yaw_deg: Number(xe.yaw_deg || 0),
      pitch_deg: Number(xe.pitch_deg || 0),
      hFOV_deg: Number(xe.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(xe.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(xe.rot_deg || 0),
      roll_deg: Number(xe.roll_deg || 0),
      aspect_id: gr(xe)
    }, Y());
  }
  function Y() {
    D(), b(), _e();
  }
  function ie() {
    const xe = f && n.mode === "frame" ? U() : null;
    return [...le(), ce(), xe].some((be) => W(be) ? ma(be) : N(be) && Se() && ma(m.camera));
  }
  function _e() {
    if (r) return;
    m.ui_settings = m.ui_settings || {};
    const xe = oC(m.ui_settings);
    if (l) {
      v.sidePanel = aC({
        coverage: m.coverage,
        uiSettings: xe,
        normalizeCoverageValue: vn
      });
      return;
    }
    const be = q(), R = f && n.mode === "frame" ? U() : null, z = R || be, T = R ? [R] : le(), K = R ? "shot" : ve();
    if (T.length > 1 && (n.panelLastValues = n.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), z && K !== "stroke") {
      const $e = M(z);
      n.panelLastValues = {
        yaw_deg: Number($e.yaw_deg || 0),
        pitch_deg: Number($e.pitch_deg || 0),
        hFOV_deg: Number($e.hFOV_deg || (K === "image" ? 30 : 90)),
        vFOV_deg: Number($e.vFOV_deg || (K === "image" ? 30 : 60)),
        rot_deg: Number($e.rot_deg || 0),
        roll_deg: Number($e.roll_deg || 0),
        aspect_id: gr($e)
      }, W(z) && (n.panelLastValues.opacity = Bn(z, n.frame).opacity * 100);
    }
    const C = n.panelLastValues || (g === "stickers" || K === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), H = K === "stroke" ? null : z, L = ce(), S = t && (K === "shot" || K === "frame") && fe(), Z = L ? JS(L, n.frame) : S ? { ...H, ...YS(m.camera, n.frame), vFOV_deg: H.vFOV_deg } : W(H) ? n.panelLastValues : H || C, se = L ? h(L) : !!H && !oe(H);
    n.panelWasEnabled = se, j();
    let ge = null;
    if (R) {
      const $e = X({ item: R, kind: "shot", label: "Frame" });
      ge = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: $e.label,
        currentIcon: $e.icon || null,
        items: [{
          id: String(R.id || ""),
          label: $e.label,
          icon: $e.icon || null,
          active: !0
        }]
      };
    } else if (g === "stickers" || g === "cutout") {
      const $e = [{
        id: "",
        label: g === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (g === "stickers") {
        const ee = U();
        ee && $e.push({ id: ee.id, label: "Camera", icon: he("frame"), item: ee, kind: "frame" }), Q().forEach((Pe, ne) => {
          var Te, ze;
          if (!Pe || W(Pe) && !Pe.visible) return;
          const ke = u ? Me(Pe) : me(Pe) ? String(Pe.id || hd) : String(((ze = (Te = m.assets) == null ? void 0 : Te[Pe.asset_id]) == null ? void 0 : ze.name) || Pe.asset_id || Pe.id), Ae = `${ne + 1}. ${ke}${me(Pe) && A(Pe) ? " (hidden)" : ""}`, Ie = X({ item: Pe, label: Ae, kind: "image" });
          $e.push({ id: Pe.id, label: Ie.label, icon: Ie.icon, item: Pe, kind: "image" });
        });
      } else
        P().forEach((ee) => {
          if (!(ee != null && ee.item)) return;
          const Pe = X(ee);
          $e.push({ id: ee.item.id, label: Pe.label, icon: Pe.icon, item: ee.item, kind: ee.kind });
        });
      const Ge = (H == null ? void 0 : H.id) || "", We = L ? { label: Me(L), icon: je.globe } : $e.find((ee) => ee.id === Ge) || $e[0];
      ge = {
        label: "Selection",
        open: !1,
        disabled: $e.length <= 1,
        currentLabel: We.label,
        currentIcon: We.icon || null,
        items: $e.map((ee) => ({
          id: ee.id,
          label: ee.label,
          icon: ee.icon || null,
          active: ee.id === Ge
        }))
      };
    }
    const pe = [], we = ($e, Ge, We, ee, Pe) => {
      const ne = Fe(Number(Z[$e] || 0), We, ee);
      pe.push({
        key: $e,
        label: Ge,
        min: We,
        max: ee,
        step: Pe,
        value: ne,
        displayValue: $i(ne),
        fillPct: Fe((ne - We) / Math.max(1e-6, ee - We) * 100, 0, 100),
        enabled: se && !c
      });
    }, Ee = [];
    if (L) {
      for (const [$e, Ge] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const We = rc(Z[$e]);
        we($e, Ge, -We, We, 0.01);
      }
      we("yaw_deg", "Yaw", -180, 180, 0.1), we("pitch_deg", "Pitch", -90, 90, 0.1), we("roll_deg", "Roll", -180, 180, 0.1), we("scale", "Scale", D0, rc(Z.scale), 0.01), we("opacity", "Opacity", 0, 100, 1);
    } else if (T.length > 1)
      Ee.push(`Selected objects: ${T.length}`), Ee.push("Multi-selection supports z-order and delete.");
    else {
      const $e = K === "shot" || K === "frame";
      if (S)
        for (const [Ge, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const ee = rc(Z[Ge]);
          we(Ge, We, -ee, ee, 0.01);
        }
      we("yaw_deg", "Yaw", -180, 180, 0.1), we("pitch_deg", "Pitch", -90, 90, 0.1), we(K === "image" || g === "stickers" && !$e ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), we("hFOV_deg", "H FOV", 1, 179, 0.1), we("vFOV_deg", "V FOV", 1, 179, 0.1), $e && pe.forEach((Ge) => {
        Ge.enabled = Ge.enabled && dC(Ge.key, { erp: te() });
      }), W(H) && !$e && pe.forEach((Ge) => {
        Ge.enabled = Ge.enabled && fC(Ge.key, { port: me(H) });
      }), u && !$e && we("opacity", "Opacity", 0, 100, 1);
    }
    const Le = T.length > 1 ? null : L || H;
    v.sidePanel = bC({
      coverage: m.coverage,
      readOnly: c,
      selectionPicker: ge,
      enabled: se,
      selectedKind: L ? "world" : K,
      selectedItems: T,
      params: pe,
      notes: Ee,
      uiSettings: xe,
      normalizeCoverageValue: vn,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: _ && Le && (Le === L || W(Le)) ? yC({
        layer: Ct(Le) ? Le.origin.layer : null,
        editable: Ct(Le) && xa(Le),
        locked: Le.locked === !0,
        readOnly: c,
        placement: Le.placement,
        override: Ct(Le) ? qg(m.upstream, Le.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: Ct(Le) ? null : w(Le)
      }) : null
    });
  }
  function Me(xe) {
    const be = $h(xe);
    return Ct(xe) ? `${yd(xe.origin.layer)} · ${be}` : be;
  }
  function Ce() {
    const { canUndo: xe, canRedo: be } = $();
    Ai(v.toolButtons, "value", "undo", { disabled: !xe }), Ai(v.toolButtons, "value", "redo", { disabled: !be });
  }
  return {
    connect(xe) {
      ({
        cameraPreviewShown: y,
        cameraShoots: G,
        getActiveCutoutShot: U,
        getBrushPresetIdForTool: F,
        getCutoutInspectorItems: P,
        getHistoryCapabilities: $,
        getList: Q,
        getSelected: q,
        getSelectedItems: le,
        getSelectedKind: ve,
        getSelectionItemIcon: he,
        getSelectionItemLabelData: X,
        hasCamera: Se,
        hasSpaceContent: fe,
        isActiveLassoTool: de,
        isErpCamera: te,
        isExternalSticker: me,
        isItemLocked: oe,
        isPaintCursorEnabled: I,
        isSceneSticker: W,
        isShotItem: N,
        isSpaceView: ue,
        isStickerHidden: A,
        leaveFrameView: O,
        portHandoffLanes: w,
        poseOf: M,
        selectedWorldSticker: ce,
        setCanvasCursor: ye,
        syncCutoutShot: D,
        syncTimeline: b,
        syncVideoTransportVisibility: B,
        updateCursor: p,
        worldStickerEditable: h
      } = xe);
    },
    syncLookAtFrameButtonState: j,
    syncFloatingViewButtonState: J,
    syncViewToggleState: ae,
    syncFrameRollKnob: V,
    syncPaintUi: re,
    syncSidePanelControls: k,
    updateSidePanel: Y,
    inspectorTimed: ie,
    syncSidePanelModel: _e,
    syncUndoRedoButtons: Ce
  };
}
function QC(e) {
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
  let m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W;
  function N() {
    var T;
    if (!s || r) return;
    const be = ((T = l.drag) == null ? void 0 : T.limit) ?? A();
    !l.drag && F.frame > be - 1 && F.seek(be - 1);
    const R = l.selection, z = R && p(R.owner);
    if (R) {
      const K = z ? x(R) : [], C = E(R.owner);
      R.frames = R.frames.filter((H) => H + C < be && K.some((L) => z[L].keyframes.some((S) => S.frame === H))), R.frames.length || (l.selection = null);
    }
    d.timeline = xC(o, {
      span: be,
      portBarEnd: B,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? ue(),
      openRows: l.openRows,
      audio: V() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(n) !== null || Co(n, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!Li(n).scene && !te(),
      upstream: W(),
      background: M() ? { end: B(o.background) } : null,
      // A 3D file still uploading is a 3D Sticker before its Source names it.
      loading3d: G()
    }), d.easing = l.selection && J(l.selection.owner) ? MC(z, x(l.selection), l.selection.frames, E(l.selection.owner)) : null;
  }
  function ue() {
    return Eh(o, { camera: a });
  }
  function A(be = null) {
    var R;
    return Ou(o, {
      bg: O(),
      port: _(),
      sceneItems: te() ? 0 : ((R = le()) == null ? void 0 : R.urls.length) ?? 0,
      upstream: me(be),
      openClip: be,
      camera: a
    });
  }
  function O() {
    return de() ? null : w() ?? (Li(n).bg_media && !Co(n, ["bg_media"]) ? { frames: 1 } : null);
  }
  function w() {
    const be = d.videoTransport;
    return be.ready && be.frameCount > 0 ? { video: !!de() || Co(n, ["bg_media"]), frames: be.frameCount, duration: Number(be.duration || 0) } : null;
  }
  function M() {
    return i && !!Li(n).bg_media && !de();
  }
  function ce() {
    const be = de();
    return be ? be.clip ? kh(be.clip.clip, be.clip.fps, o.timeline.fps) : { start: 0, in: 0, duration: null } : M() ? o.background.clip : null;
  }
  function ye() {
    const be = ce();
    return be ? xh(be) : null;
  }
  function D(be) {
    const R = ce();
    if (!R) return !0;
    const z = !!de();
    return xc(R, be, o.timeline.fps, z ? w() : O(), z || te());
  }
  function b() {
    var be;
    return ((be = de()) == null ? void 0 : be.color) ?? o.bg_color;
  }
  function B(be) {
    var z;
    if (be === o.background) {
      const T = be.clip.duration === null ? O() : null;
      return T != null && T.video || (T == null ? void 0 : T.frames) > 1 ? wh(be.clip, o.timeline.fps, T, te()) : null;
    }
    if (((z = be.source) == null ? void 0 : z.kind) !== "port" || be.clip.duration !== null) return null;
    const R = be.origin ? oe(be) : y(be) ? _() : null;
    return R ? Cu(be.clip, o.timeline.fps, R) : null;
  }
  function p(be) {
    if (be === "camera") return g() ? o.camera : null;
    if (be === "scene") return i ? o.scene : null;
    if (be === Oo) return M() ? o.background : null;
    const R = I(be);
    return R ? R.owner : he(be);
  }
  function h(be) {
    var R;
    return ((R = I(be)) == null ? void 0 : R.editable) ?? !0;
  }
  function x(be) {
    return be.lane ? [be.lane] : Xi(p(be.owner));
  }
  function E(be) {
    var z;
    if (be === "camera") return 0;
    const R = (z = p(be)) == null ? void 0 : z.clip;
    return R ? R.start - R.in : 0;
  }
  function j(be) {
    return `${hi(be, t.frame)}:${be.start - be.in}`;
  }
  function J(be) {
    var z;
    const R = p(be);
    return !!R && R.locked !== !0 && h(be) && ((z = I(be)) == null ? void 0 : z.part) !== "scene";
  }
  function ae(be) {
    const R = Math.max(0, Math.round(be));
    if (R === t.frame) return;
    ve(), t.frame = R, c.frame.value = R, ve();
    const z = [t.selectedId, t.worldSelectedId];
    Q(), U(), z[0] !== t.selectedId || z[1] !== t.worldSelectedId ? fe() : v() && X(), Se(), q({ reason: ot.PLAYHEAD });
  }
  function V() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function re(be) {
    $(), F.seek(be);
  }
  function k() {
    s && F.stop();
  }
  function Y() {
    $(), F.toggle();
  }
  function ie() {
    ve(), U(), fe(), Se(), q();
  }
  function _e() {
    P(), m(), ie();
  }
  function Me() {
    const { selection: be } = l;
    J(be.owner) && (k(), wS(p(be.owner), x(be), be.frames, t.frame - E(be.owner)), l.selection = null, _e());
  }
  function Ce(be) {
    const R = zr(be);
    if (R === null || R === o.timeline.fps) return;
    k();
    const z = Math.round(t.frame * R / o.timeline.fps);
    HS(o, R), l.selection = null, F.seek(z), _e();
  }
  function xe() {
    const be = f(n);
    be !== null && be !== o.timeline.fps && Ce(be);
  }
  return {
    connect(be) {
      ({
        commitAndRefreshNode: m,
        getPortMediaMeta: _,
        hasCamera: g,
        inspectorTimed: v,
        isExternalSticker: y,
        loading3dIds: G,
        markObjectVisualsDirty: U,
        playback: F,
        pushHistory: P,
        refreshModalVideoSource: $,
        releaseHiddenSelection: Q,
        requestDraw: q,
        sceneFiles: le,
        syncCutoutShot: ve,
        stickerById: he,
        syncSidePanelModel: X,
        updateSelectionMenu: Se,
        updateSidePanel: fe,
        upstreamBackground: de,
        upstreamLinked: te,
        upstreamOutput: me,
        upstreamPortMeta: oe,
        upstreamRow: I,
        upstreamTimelineLayers: W
      } = be);
    },
    syncTimeline: N,
    timelineTimed: ue,
    timelineSpanFrames: A,
    backgroundShown: M,
    backgroundShowsAt: D,
    backgroundVideoPlace: ye,
    backgroundColor: b,
    portBarEnd: B,
    timelineOwner: p,
    selectedLanes: x,
    timelineOffset: E,
    clipView: j,
    timelineEditable: J,
    rowEditable: h,
    setTimelineFrame: ae,
    jumpTimelineTo: re,
    stopTimelinePlayback: k,
    togglePlayback: Y,
    refreshTimelineEdit: ie,
    commitTimelineEdit: _e,
    deleteSelectedKeyframes: Me,
    changeTimelineFps: Ce,
    applyVideoTimelineFps: xe
  };
}
function eI(e) {
  const {
    dragFrames: t,
    editor: n,
    readOnly: r,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O;
  function w(M) {
    var ce, ye;
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
        W();
        return;
      }
      if (M.type === "mute") {
        N(), fe();
        return;
      }
      if (M.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? I()), s.selection = null, fe();
        return;
      }
      if (M.type === "restore-upstream-deleted" || M.type === "revert-upstream-layer") {
        const D = (ye = (ce = a.timeline) == null ? void 0 : ce.groups) == null ? void 0 : ye.find((B) => B.key === M.key), b = M.type === "restore-upstream-deleted" ? D == null ? void 0 : D.restore : D == null ? void 0 : D.revert;
        if (!b || b.disabled) return;
        M.type === "restore-upstream-deleted" ? P(M.key) : $(M.key), fe();
        return;
      }
      if (M.type === "toggle-row") {
        s.openRows.has(M.id) ? s.openRows.delete(M.id) : s.openRows.add(M.id), fe();
        return;
      }
      if (M.type === "toggle-visible") {
        if (!Q(M.id)) return;
        const D = O(M.id);
        if (M.id === q0) i.painting_visible = !i.painting_visible;
        else if ((D == null ? void 0 : D.part) === "painting") D.sceneState.painting_visible = !D.sceneState.painting_visible;
        else {
          const b = me(M.id);
          if (!b) return;
          b.visible = !b.visible;
        }
        U(), u();
        return;
      }
      if (M.type === "select-row") {
        const D = he(M.id);
        if (D && !D.visible || M.id === "camera" && !l()) return;
        D && !hi(D.clip, n.frame) && _(D.clip.start), (D == null ? void 0 : D.placement) === "world" ? q(D.id) : M.id === "camera" ? ve(f()) : ve(m().find((b) => b.id === M.id) || null), Se(), s.selection = null, A(), ue(), F();
        return;
      }
      if (M.type === "select-keys") {
        const D = te(M.owner), b = M.frames.map((h) => h - D), B = s.selection, p = (B == null ? void 0 : B.owner) === M.owner && B.lane === M.lane;
        if (M.additive && p) {
          const h = new Set(B.frames);
          for (const x of b)
            h.has(x) ? h.delete(x) : h.add(x);
          B.frames = [...h].sort((x, E) => x - E);
        } else
          s.selection = b.length ? { owner: M.owner, lane: M.lane, frames: b } : null;
        fe();
        return;
      }
      if (M.type === "move-keys") {
        const D = s.selection;
        if (!D || !de(D.owner)) return;
        const b = me(D.owner), B = le(D);
        if (M.phase === "start") {
          X(), s.drag = { keyframes: B.map((E) => structuredClone(b[E].keyframes)), frames: D.frames, limit: oe() };
          return;
        }
        const { drag: p } = s;
        if (!(p != null && p.keyframes)) return;
        B.forEach((E, j) => {
          b[E].keyframes = structuredClone(p.keyframes[j]);
        });
        const h = te(D.owner), x = kS(b, B, p.frames, M.delta, -h, p.limit - 1 - h);
        if (D.frames = p.frames.map((E) => E + x), M.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, x ? u() : G();
        return;
      }
      if (M.type === "clip") {
        const D = me(M.id);
        if (!(D != null && D.clip) || D.locked || !Q(M.id)) return;
        if (M.phase === "start") {
          X();
          const { clip: x } = D, E = oe(), j = x.duration === null ? v(D) ?? E : x.start + x.duration;
          s.drag = { clip: { ...x }, span: oe(x), limit: E, end: j };
          return;
        }
        const { drag: b } = s;
        if (!(b != null && b.clip)) return;
        const B = b.clip, p = d(D.clip);
        if (D.clip = { ...B }, M.delta && M.mode === "move") {
          Ef(D.clip, Math.min(M.delta, Math.max(0, b.limit - 1 - B.start)));
          const x = oe() - b.limit;
          x > 0 && Ef(D.clip, -x);
        } else M.delta && M.mode === "start" ? PS(D.clip, Math.min(B.start + M.delta, Math.max(b.limit - 1, B.start))) : M.delta && NS(D.clip, Math.min(b.end + M.delta, Math.max(b.limit, b.end)), b.span);
        if (M.phase !== "end") {
          t.request("timeline"), d(D.clip) !== p && (t.request("view"), M.id === Oo && t.request("background"));
          return;
        }
        t.cancel(), s.drag = null, U();
        const h = JSON.stringify(D.clip) !== JSON.stringify(B);
        h && M.id === Oo && g.seek(n.frame), h ? u() : G();
        return;
      }
      if (M.type === "key-row") {
        if (M.owner === "scene" || M.owner === Oo || !de(M.owner)) return;
        X(), vS(me(M.owner), n.frame - te(M.owner)), u();
        return;
      }
      if (M.type === "fps") {
        const D = CS(M.fps);
        if (D === null || D === i.timeline.fps || a.timeline.fpsLocked) {
          fe();
          return;
        }
        c(D);
        return;
      }
      if (M.type === "length") {
        const D = IS(M.length);
        if (D === void 0 || D === i.timeline.length) {
          fe();
          return;
        }
        X(), i.timeline.length = D, u();
        return;
      }
      if (M.type === "easing") {
        const D = s.selection;
        if (!D || !de(D.owner)) return;
        X(), MS(me(D.owner), le(D), D.frames, M.easing), M.commit ? u() : G();
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
        getList: m,
        jumpTimelineTo: _,
        playback: g,
        portBarEnd: v,
        refreshModalVideoSource: y,
        refreshTimelineEdit: G,
        releaseHiddenSelection: U,
        requestDraw: F,
        restoreUpstreamDeletedCommand: P,
        revertUpstreamLayerCommand: $,
        rowEditable: Q,
        selectWorldSticker: q,
        selectedLanes: le,
        setSelectedItem: ve,
        stickerById: he,
        stopTimelinePlayback: X,
        syncFloatingViewButtonState: Se,
        syncTimeline: fe,
        timelineEditable: de,
        timelineOffset: te,
        timelineOwner: me,
        timelineSpanFrames: oe,
        timelineTimed: I,
        togglePlayback: W,
        toggleVideoMuted: N,
        updateSelectionMenu: ue,
        updateSidePanel: A,
        upstreamRow: O
      } = M);
    },
    onTimelineAction: w
  };
}
function tI(e) {
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
  let d, u, f, m, _, g, v;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = vn(i.value)), n && (l.bg_color = String(n.value || l.bg_color || "#00ff00")), G(), o.setDirtyCanvas(!0, !0));
  }
  function G() {
    var le;
    if (a || (m(), g(), v(), l.coverage = vn(l.coverage), jh(o, l.active), !c)) return;
    const Q = f(), q = Hh(o, Q, String(c.value ?? ""), { rebased: r });
    q !== null && (Q !== l && (l.id = Q.id), c.value = q, (le = c.callback) == null || le.call(c, q));
  }
  function U() {
    l.ui_settings = DA(l.ui_settings), a || G();
  }
  function F() {
    var Q;
    a || (G(), (Q = o.setDirtyCanvas) == null || Q.call(o, !0, !0));
  }
  function P() {
    a || d() && _().catch((Q) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", Q);
    });
  }
  function $(Q = {}) {
    var ve, he, X, Se, fe, de, te, me, oe, I, W;
    const q = Q.syncPreview !== !1, le = Q.syncGraph !== !1;
    q && ((X = (he = (ve = Ng(o)) == null ? void 0 : ve.runtime) == null ? void 0 : he.requestDraw) == null || X.call(he), (de = (fe = (Se = Oc(o)) == null ? void 0 : Se.dom) == null ? void 0 : fe.requestDraw) == null || de.call(fe), (te = o.setDirtyCanvas) == null || te.call(o, !0, !1)), le && ((oe = (me = o.graph) == null ? void 0 : me.setDirtyCanvas) == null || oe.call(me, !0, !0), (W = (I = t == null ? void 0 : t.canvas) == null ? void 0 : I.setDirty) == null || W.call(I, !0, !0));
  }
  return {
    connect(Q) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: m,
        syncPaintingLayerAsync: _,
        syncPortHandoff: g,
        syncUpstreamEdits: v
      } = Q);
    },
    apply: y,
    commitState: G,
    persistUiSettings: U,
    commitAndRefreshNode: F,
    triggerBackgroundPersistenceOnClose: P,
    syncCoverageChangeToNodePreviews: $
  };
}
function nI(e) {
  const {
    editor: t,
    readOnly: n,
    sceneV2: r,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D, b;
  function B(k, Y, ie = "Clear") {
    return new Promise((_e) => {
      a.confirmDialog = {
        visible: !0,
        title: String(k || ""),
        text: String(Y || ""),
        confirmLabel: String(ie || "Confirm"),
        resolve: _e
      };
    });
  }
  async function p() {
    var ie, _e;
    if (n || !await B(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = pi(null), te();
    const Y = d();
    if (s === "stickers")
      i.stickers = r ? i.stickers.filter((Me) => Me.placement === "world" || Y.includes(Me)) : Y, r || (i.assets = {}), t.selectedId = ((ie = Y[0]) == null ? void 0 : ie.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((_e = Y[0]) == null ? void 0 : _e.id) || null, oe();
    else {
      const Me = VS(i.shots, i.active.selected_shot_id);
      i.stickers = Y, i.assets = {}, i.shots = Me.shots, t.selectedId = Me.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = Me.selectedShotId, !Me.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, oe();
    }
    I(), u(), D(), ye(), N();
  }
  async function h(k) {
    var Ce, xe, be, R;
    if (n) return;
    const Y = k === "mask" ? "mask" : "paint", ie = Y === "mask" ? "Mask" : "Paint", _e = G(Y);
    if (!(!_e.length && !(((Ce = t.interaction) == null ? void 0 : Ce.kind) === "draw" && ((xe = t.interaction) == null ? void 0 : xe.layerKind) === Y) || !await B(
      `Clear ${ie}`,
      `This will remove all ${Y} strokes in the current node.`,
      `Clear ${ie}`
    ))) {
      if (((be = t.interaction) == null ? void 0 : be.kind) === "draw" && ((R = t.interaction) == null ? void 0 : R.layerKind) === Y) {
        const z = _(t.interaction);
        z && t.paintEngine.cancelActiveStroke(z), t.interaction = null;
      }
      _e.length = 0, i.painting.raster_objects = U().filter((z) => String((z == null ? void 0 : z.layerKind) || "paint") !== Y), Y === "paint" && (y().length = 0), te(), I(), u(), D(), ye(), ce(), N();
    }
  }
  function x() {
    if (n) return;
    const k = F();
    if (!k || !he(k) || $(k) || Ct(k) || r && Se(k)) return;
    let Y;
    r ? Y = t_(k, Go(i), v()) : (Y = JSON.parse(JSON.stringify(k)), Y.id = ho("st"), Y.yaw_deg = Et((Y.yaw_deg || 0) + 8), Y.z_index = v()), i.stickers.push(Y), i.active.selected_sticker_id = Y.id, t.selectedId = Y.id, t.selectedIds = [Y.id], fe(), I(), u(), ye(), D(), N();
  }
  function E() {
    const k = O();
    return k ? (b(k) && (w(), Ct(k) ? m([k]) : e_(i, k.id), c(), fe(), I(), u(), D(), ye(), M(), N()), !0) : !1;
  }
  function j() {
    var _e, Me, Ce, xe, be;
    if (n) return;
    const k = P(), Y = F();
    if (!Y && k.length === 0 || k.some((R) => Q(R))) return;
    w();
    const ie = k.filter(Ct);
    if (ie.length && (m(ie), fe()), k.length > 1 || ie.length) {
      const R = new Set(k.filter((K) => X(K)).map((K) => String(K.actionGroupId || K.id || ""))), z = new Set(k.filter((K) => q(K)).map((K) => me(K.rasterObjectId || K.id || ""))), T = new Set(k.filter(he).map((K) => String(K.id || "")));
      R.size > 0 && (i.painting.paint.strokes = (Array.isArray((Me = (_e = i.painting) == null ? void 0 : _e.paint) == null ? void 0 : Me.strokes) ? i.painting.paint.strokes : []).filter((K) => !R.has(String((K == null ? void 0 : K.actionGroupId) || ""))), i.painting.groups = y().filter((K) => !R.has(String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || ""))), te()), z.size > 0 && (i.painting.raster_objects = U().filter((K) => !z.has(String((K == null ? void 0 : K.id) || ""))), de()), T.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((K) => T.has(String((K == null ? void 0 : K.id) || "")) ? $(K) ? (ve(K) || (K.visible = !1), !0) : !1 : !0), oe(), fe()), t.selectedId = null, t.selectedIds = [], I(), u(), D(), ye(), N();
      return;
    }
    if (X(Y)) {
      const R = String(Y.actionGroupId || Y.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((xe = (Ce = i.painting) == null ? void 0 : Ce.paint) == null ? void 0 : xe.strokes) ? i.painting.paint.strokes : []).filter((z) => String((z == null ? void 0 : z.actionGroupId) || "").trim() !== R), i.painting.groups = y().filter((z) => String((z == null ? void 0 : z.actionGroupId) || (z == null ? void 0 : z.id) || "").trim() !== R), te(), t.selectedId = null, t.selectedIds = [], I(), u(), D(), ye(), N();
      return;
    }
    if (q(Y)) {
      const R = me(Y.rasterObjectId || Y.id || "");
      i.painting.raster_objects = U().filter((z) => String((z == null ? void 0 : z.id) || "").trim() !== R), de(), t.selectedId = null, t.selectedIds = [], I(), u(), D(), ye(), N();
      return;
    }
    if (o && le(Y)) {
      f();
      return;
    }
    if (s === "stickers" || he(Y)) {
      if ($(Y)) {
        if (ve(Y)) return;
        Y.visible = !1, fe(), I(), u(), D(), ye(), N();
        return;
      }
      i.stickers = i.stickers.filter((R) => R.id !== Y.id), oe(), fe(), t.selectedId = ((be = g()[0]) == null ? void 0 : be.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, I(), u(), D(), ye(), N();
      return;
    }
    l();
  }
  function J(k, Y) {
    n || (w(), k(Y) && (W(), fe(), I(), u(), D(), ye(), N()));
  }
  function ae(k) {
    J(ue, k);
  }
  function V(k) {
    J(A, k);
  }
  function re() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", ce(), D());
  }
  return {
    connect(k) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: m,
        getActivePaintTargetDescriptor: _,
        getList: g,
        getNextStickerZIndex: v,
        getPaintingGroupList: y,
        getPaintingLayerList: G,
        getRasterObjectList: U,
        getSelected: F,
        getSelectedItems: P,
        isExternalSticker: $,
        isItemLocked: Q,
        isRasterObjectItem: q,
        isShotItem: le,
        isStickerHidden: ve,
        isStickerItem: he,
        isStrokeGroupItem: X,
        isUploadingSticker: Se,
        markObjectVisualsDirty: fe,
        markPaintCompositeVisualsDirty: de,
        markPaintStrokeVisualsDirty: te,
        parseRasterObjectSelectionId: me,
        pruneUnusedAssets: oe,
        pushHistory: I,
        releaseHiddenSelection: W,
        requestDraw: N,
        restoreUpstreamDeleted: ue,
        revertUpstreamLayer: A,
        selectedWorldSticker: O,
        stopTimelinePlayback: w,
        syncFloatingViewButtonState: M,
        syncPaintUi: ce,
        updateSelectionMenu: ye,
        updateSidePanel: D,
        worldStickerEditable: b
      } = k);
    },
    clearAll: p,
    clearPaintingLayer: h,
    duplicateSelected: x,
    deleteSelectedWorldSticker: E,
    deleteSelected: j,
    restoreUpstreamDeletedCommand: ae,
    revertUpstreamLayerCommand: V,
    forceCursorTool: re
  };
}
function rI(e) {
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
  let _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue;
  const A = /* @__PURE__ */ new Set();
  let O = "";
  function w(z) {
    return c ? Ix(z == null ? void 0 : z.dataTransfer) : cd(z == null ? void 0 : z.dataTransfer);
  }
  function M(z) {
    const T = !!z;
    r.active !== T && (r.active = T, d.classList.toggle("drop-active", T));
  }
  function ce() {
    const z = new Set(
      (u.stickers || []).map((T) => String((T == null ? void 0 : T.asset_id) || "")).filter((T) => !!T)
    );
    Object.keys(u.assets || {}).forEach((T) => {
      z.has(T) || (delete u.assets[T], s.delete(T));
    });
  }
  async function ye(z) {
    if (l || f !== "stickers" && f !== "cutout" || !En(z)) return;
    if (c) {
      I(), await ae(z);
      return;
    }
    const T = ho("asset"), K = Pi(a, `add:${T}`, async () => {
      try {
        const { image: C } = await fo(z);
        s.set(T, C);
        const H = ho("st");
        u.stickers.push({
          id: H,
          asset_id: T,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: v(30, Number(C.naturalWidth || C.width || 1), Number(C.naturalHeight || C.height || 1)),
          rot_deg: 0,
          z_index: P()
        }), te(u.stickers[u.stickers.length - 1]), F(), ue(), N(), X();
        const L = await Qr(z, {
          fetchApi: (se, ge) => t.fetchApi(se, ge)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((se) => String((se == null ? void 0 : se.asset_id) || "") === T).length) return;
        u.assets[T] = L, ce(), he(), g(), ue(), N(), X();
      } catch (C) {
        delete u.assets[T], s.delete(T);
        const H = Array.isArray(u.stickers) ? u.stickers : [], L = H.filter((S) => String((S == null ? void 0 : S.asset_id) || "") === T);
        throw L.length && (u.stickers = H.filter((S) => String((S == null ? void 0 : S.asset_id) || "") !== T), L.some((S) => String((S == null ? void 0 : S.id) || "") === String(i.selectedId || "")) && te(null), ue(), N(), X(), g()), C;
      }
    });
    try {
      await K;
    } catch {
    }
  }
  function D() {
    var z;
    l || f !== "stickers" && f !== "cutout" || (z = m == null ? void 0 : m.openImagePicker) == null || z.call(m, "add");
  }
  function b() {
    var z;
    l || !c || (z = m == null ? void 0 : m.openImagePicker) == null || z.call(m, "add-world", Cx);
  }
  async function B(z, T = null) {
    l || !c || (En(z) ? (I(), await ae(z, "world")) : Na(z) && (I(), await h(z, p(T))));
  }
  function p(z) {
    const T = me(), K = G(), C = z && i.mode === "pano" ? z : null;
    return {
      view: T,
      eye: [...T.position],
      dir: cw(K, C, n.width, n.height),
      fovDeg: Yh(T, n.width, n.height),
      minDistance: Math.max(L_, K.near * 2)
    };
  }
  async function h(z, T) {
    O = "";
    const K = h0(z);
    if (K) {
      O = K, X();
      return;
    }
    const C = Go(u), H = J_(T.view, T.dir);
    u.stickers.push(Ff(C, { kind: "file", filename: "" }, H)), A.add(C), de(C), F(), ue(), N(), W(), X();
    const L = Pi(a, `add:${C}`, async () => {
      try {
        const S = await Ex(z, {
          fetchApi: (ge, pe) => t.fetchApi(ge, pe)
        }), Z = await Se(S);
        if (Z.state !== "ready") throw new Error(Z.error);
        const se = u.stickers.find((ge) => ge.id === C);
        if (!se) {
          A.delete(C);
          return;
        }
        se.source = S, x(se, H.position, T, Z.box), he(), g();
      } catch (S) {
        throw A.delete(C), O = String((S == null ? void 0 : S.message) || S), u.stickers = u.stickers.filter((Z) => Z.id !== C), i.selectedId === C && te(null), i.worldSelectedId === C && _(), he(), g(), S;
      } finally {
        ue(), N(), W(), X();
      }
    });
    try {
      await L;
    } catch {
    }
  }
  function x(z, T, K, C) {
    const H = z.position, L = !H.keyframes.length && H.value.every((se, ge) => se === T[ge]), S = $_(C);
    if (!L || !S) return;
    const Z = Bn(z, i.frame);
    H.value = Xh(K.eye, K.dir, S, Z, K.fovDeg, K.minDistance);
  }
  function E() {
    for (const z of [...A]) {
      const T = u.stickers.find((H) => H.id === z), K = T != null && T.source.filename ? U(T) : null, C = K && ig(z, K.generation);
      !T || C && o.sceneBox(C) || !Bn(T, i.frame).active ? A.delete(z) : C && o.sceneItemError(C) && !/\b404\b/.test(o.sceneItemError(C)) && (A.delete(z), O = `Could not show ${T.source.filename}: ${o.sceneItemError(C)}`);
    }
    return O || (A.size ? "Loading 3D model…" : "");
  }
  function j() {
    return A;
  }
  function J() {
    const z = { x: n.width / 2, y: n.height / 2 }, T = q() ? o.pick(G(), z.x, z.y, n.width, n.height) : null;
    return X_(me(), T, y());
  }
  async function ae(z, T = "sky") {
    O = "";
    const K = Go(u), C = Pi(a, `add:${K}`, async () => {
      const { image: H } = await fo(z), L = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: v(30, Number(H.naturalWidth || H.width || 1), Number(H.naturalHeight || H.height || 1)),
        rot_deg: 0
      }, S = { kind: "file", filename: "" }, Z = T === "world" ? Ff(K, S, J()) : Du(K, S, L, P());
      s.set(oe(Z), H), u.stickers.push(Z), T === "world" ? de(K) : te(Z), F(), ue(), N(), X();
      try {
        const se = await Qr(z, {
          fetchApi: (pe, we) => t.fetchApi(pe, we)
        }), ge = u.stickers.find((pe) => pe.id === K);
        if (!ge) return;
        ge.source = Po(se), s.set(oe(ge), H), he(), g();
      } catch (se) {
        throw u.stickers = u.stickers.filter((ge) => ge.id !== K), i.selectedId === K && te(null), i.worldSelectedId === K && _(), he(), g(), se;
      } finally {
        ue(), N(), X();
      }
    });
    try {
      await C;
    } catch {
    }
  }
  async function V(z, T) {
    const K = Pi(a, `replace:${T}:${ho("asset")}`, async () => {
      const { image: C } = await fo(z), H = await Qr(z, {
        fetchApi: (S, Z) => t.fetchApi(S, Z)
      }), L = u.stickers.find((S) => S.id === T);
      if (L) {
        L.source = Po(H), L.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const S of [L.size.value, ...L.size.keyframes.map((Z) => Z.value)])
          S.vFOV_deg = v(S.hFOV_deg, Number(C.naturalWidth || C.width || 1), Number(C.naturalHeight || C.height || 1));
        s.set(oe(L), C), ve(), he(), g(), ue(), N(), X();
      }
    });
    try {
      await K;
    } catch {
    }
  }
  async function re(z) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const T = $();
    if (!T || !le(T) || Q(T) || Ct(T) || !En(z)) return;
    if (c) {
      await V(z, T.id);
      return;
    }
    const K = String(T.id || ""), C = ho("asset"), H = Pi(a, `replace:${K}:${C}`, async () => {
      var pe;
      const L = (Array.isArray(u.stickers) ? u.stickers : []).find((we) => String((we == null ? void 0 : we.id) || "") === K) || null;
      if (!L || !le(L) || Q(L)) return;
      const S = String(L.asset_id || ""), Z = S ? Eo(((pe = u.assets) == null ? void 0 : pe[S]) || null) : null, se = Number(L.vFOV_deg || 0), ge = L.crop && typeof L.crop == "object" ? { ...L.crop } : null;
      try {
        const { image: we } = await fo(z);
        s.set(C, we), L.asset_id = C, L.vFOV_deg = v(
          Number(L.hFOV_deg || 30),
          Number(we.naturalWidth || we.width || 1),
          Number(we.naturalHeight || we.height || 1)
        ), L.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ve(), ue(), N(), X();
        const Ee = await Qr(z, {
          fetchApi: ($e, Ge) => t.fetchApi($e, Ge)
        }), Le = (Array.isArray(u.stickers) ? u.stickers : []).find(($e) => String(($e == null ? void 0 : $e.id) || "") === K) || null;
        if (!Le || String(Le.asset_id || "") !== C) return;
        u.assets[C] = Ee, ce(), he(), g(), ue(), N(), X();
      } catch (we) {
        delete u.assets[C], s.delete(C);
        const Ee = (Array.isArray(u.stickers) ? u.stickers : []).find((Le) => String((Le == null ? void 0 : Le.id) || "") === K) || null;
        throw Ee && String(Ee.asset_id || "") === C && (S && Z && (u.assets[S] = Z), Ee.asset_id = S, Ee.vFOV_deg = se, Ee.crop = ge ? { ...ge } : null), ve(), g(), ue(), N(), X(), we;
      }
    });
    try {
      await H;
    } catch {
    }
  }
  function k() {
    var T;
    if (l) return;
    const z = $();
    !z || !le(z) || Q(z) || Ct(z) || (T = m == null ? void 0 : m.openImagePicker) == null || T.call(m, "replace");
  }
  async function Y() {
    if (l || f !== "stickers") return;
    if (c) {
      await ie();
      return;
    }
    const z = u.assets && typeof u.assets == "object" ? u.assets : {}, T = Object.entries(z).filter(([, C]) => {
      const H = String((C == null ? void 0 : C.type) || "").toLowerCase(), L = String((C == null ? void 0 : C.value) || "");
      return H === "dataurl" && L.startsWith("data:image");
    });
    if (!T.length) return;
    let K = !1;
    for (const [C, H] of T)
      try {
        const L = String((H == null ? void 0 : H.value) || "");
        if (!L) continue;
        const S = await fetch(L).then((we) => we.blob()), Z = String(S.type || "image/png").split("/")[1] || "png", se = String((H == null ? void 0 : H.name) || `${C}.${Z}`), ge = new File([S], se, { type: S.type || "image/png" }), pe = await Qr(ge, {
          fetchApi: (we, Ee) => t.fetchApi(we, Ee)
        });
        u.assets[C] = {
          ...pe,
          w: Number((H == null ? void 0 : H.w) || 0),
          h: Number((H == null ? void 0 : H.h) || 0)
        }, K = !0;
      } catch {
      }
    K && (g(), X());
  }
  async function ie() {
    let z = !1;
    for (const T of u.stickers) {
      const K = T.source.data_url;
      if (K)
        try {
          const C = await fetch(K).then((Z) => Z.blob()), H = String(C.type || "image/png").split("/")[1] || "png", L = new File([C], `${T.id}.${H}`, { type: C.type || "image/png" }), S = await Qr(L, {
            fetchApi: (Z, se) => t.fetchApi(Z, se)
          });
          T.source = Po(S), z = !0;
        } catch {
        }
    }
    z && (g(), X());
  }
  function _e(z) {
    f !== "stickers" && f !== "cutout" || l || (z.preventDefault(), M(!0));
  }
  function Me(z) {
    var H;
    if (f !== "stickers" && f !== "cutout" || l) return;
    z.preventDefault(), z.stopPropagation(), r.depth = 0, M(!1);
    const T = Array.from(((H = z.dataTransfer) == null ? void 0 : H.files) || []), K = T.find((L) => En(L));
    if (K) {
      ye(K);
      return;
    }
    const C = c ? T.find((L) => Na(L)) : null;
    C && B(C, fe(z));
  }
  function Ce(z) {
    f !== "stickers" && f !== "cutout" || l || w(z) && (r.depth += 1, M(!0), z.preventDefault());
  }
  function xe(z) {
    f !== "stickers" && f !== "cutout" || l || (!r.active && w(z) && M(!0), r.active && z.preventDefault());
  }
  function be(z) {
    if (f !== "stickers" && f !== "cutout" || l || !r.active) return;
    r.depth = Math.max(0, r.depth - 1);
    const T = Number(z.clientX) <= 0 && Number(z.clientY) <= 0;
    (r.depth === 0 || T) && M(!1);
  }
  function R(z) {
    f !== "stickers" && f !== "cutout" || l || (r.depth = 0, M(!1), w(z) && z.preventDefault());
  }
  return {
    connect(z) {
      ({
        clearWorldSelection: _,
        commitAndRefreshNode: g,
        computeStickerVFov: v,
        contentSphere: y,
        currentSpaceCamera: G,
        file3dEditorFile: U,
        forceCursorTool: F,
        getNextStickerZIndex: P,
        getSelected: $,
        isExternalSticker: Q,
        isSpaceView: q,
        isStickerItem: le,
        markObjectVisualsDirty: ve,
        pushHistory: he,
        requestDraw: X,
        requestFile3d: Se,
        screenPos: fe,
        selectWorldSticker: de,
        setSelectedItem: te,
        spaceViewState: me,
        stickerImageKey: oe,
        stopTimelinePlayback: I,
        syncTimeline: W,
        updateSelectionMenu: N,
        updateSidePanel: ue
      } = z);
    },
    addImageStickerFromFile: ye,
    addImageSticker: D,
    addToWorld: b,
    addWorldStickerFromFile: B,
    file3dImportNotice: E,
    loading3dIds: j,
    replaceSelectedImageFromFile: re,
    replaceSelectedImage: k,
    migrateLegacyEmbeddedAssets: Y,
    pruneUnusedAssets: ce,
    setDropCue: M,
    onCanvasDragOver: _e,
    onCanvasDrop: Me,
    onWindowDragEnter: Ce,
    onWindowDragOver: xe,
    onWindowDragLeave: be,
    onWindowDrop: R
  };
}
function iI(e) {
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
    uiState: _
  } = e;
  let g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D = o;
  function b(T, K) {
    var L;
    const C = (L = P().space) == null ? void 0 : L.gizmo;
    if (he() && C && ye("hover", K) !== null && ye("down", K))
      return r.interaction = { kind: "world_gizmo", camera: !0, mode: C.mode, start: C.transform, base: F(), changed: !1 }, n.setPointerCapture(T.pointerId), w(K), !0;
    const H = lg(F(), v(oe()));
    return ow(U(), H, K, n.width, n.height) ? (he() || (me(Y()), ce(), M(), de()), r.interaction = { kind: "world_select" }, n.setPointerCapture(T.pointerId), !0) : !1;
  }
  function B() {
    if (s || m !== "cutout") return;
    const T = Y();
    if (T) {
      me(T), r.mode = "pano", O(Et(Number(T.yaw_deg || 0)), Fe(Number(T.pitch_deg || 0), -89.9, 89.9)), ce(), M(), de({ cause: "cutout_frame" });
      return;
    }
    const K = Xm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Et(Number(r.viewYaw || 0)),
      pitchDeg: Number(r.viewPitch || 0),
      viewFovDeg: Number(r.viewFov || 90)
    });
    d.shots = [K], me(K), $(), r.mode = "pano", fe(), G(), ce(), M(), de({ cause: "cutout_frame" });
  }
  function p() {
    s || !u || q() || (W(), d.camera = WS(I()), re(), me(Y()), $(), fe(), G(), ce(), M(), de({ cause: "cutout_frame" }));
  }
  function h() {
    W(), d.camera = null, me(null), re(), fe(), G(), ce(), M(), de({ cause: "cutout_frame" });
  }
  function x(T, K) {
    u && X(T) && (d.camera.projection = K === Ui ? "erp" : "perspective", K === Ui) || J(T, K);
  }
  function E() {
    s || m !== "cutout" || (d.shots = [], r.selectedId = null, r.selectedIds = [], r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, d.active.selected_shot_id = null, fe(), G(), ce(), M(), de());
  }
  function j(T, K) {
    const C = a.frameSafeRect;
    if (!T || !C || r.mode !== "frame") return !1;
    const H = Yc * ui(C, T), L = Su(vu(C, K), H);
    return T.hFOV_deg = L.hFOV_deg, T.vFOV_deg = L.vFOV_deg, !0;
  }
  function J(T, K) {
    if (!T || T.locked === !0) return;
    const C = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, H = (() => {
      const se = String(T.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(se)) {
        const [we, Ee] = se.split(":").map((Le) => Number(Le));
        if (Number.isFinite(we) && Number.isFinite(Ee)) return we >= Ee;
      }
      const ge = Number(T.hFOV_deg || 64), pe = Number(T.vFOV_deg || 40);
      return Math.abs(ge - pe) > 1e-6 ? ge >= pe : mi(T) >= 1;
    })();
    let [L, S] = C[String(K)] || C["1:1"];
    L >= S !== H && ([L, S] = [S, L]);
    const Z = L / S;
    if (!j(T, Z)) {
      const se = Fe(Number(T.vFOV_deg || 40), 1, 179);
      T.vFOV_deg = se, T.hFOV_deg = Rs(se, Z);
    }
    T.aspect_id = `${L}:${S}`;
  }
  function ae(T, K, C) {
    if (!T || T.locked === !0) return !1;
    const H = qo(K, C);
    if (!H) return !1;
    const L = H.ratio;
    if (!j(T, L)) {
      const S = Fe(Number(T.vFOV_deg || 40), 1, 179);
      T.vFOV_deg = S, T.hFOV_deg = Rs(S, L);
    }
    return T.aspect_id = H.label, !0;
  }
  function V(T) {
    if (!T || T.locked === !0) return;
    const K = String(T.aspect_id || "").trim(), C = Vr(T), H = C.tanHalfX / Math.max(1e-12, C.tanHalfY), L = 1 / Math.max(1e-12, H);
    if (!j(T, L)) {
      const S = Fe(Number(T.vFOV_deg || 60), 1, 179);
      T.vFOV_deg = S, T.hFOV_deg = Rs(S, L);
    }
    if (/^\d+:\d+$/.test(K)) {
      const [S, Z] = K.split(":");
      T.aspect_id = `${Z}:${S}`;
    } else
      T.aspect_id = is(T);
  }
  function re(T = !0) {
    var H, L;
    if (!t) return;
    const K = D;
    if (!y()) {
      D = null, (H = d.shots) != null && H.length && (d.shots = []), K && k(K, null);
      return;
    }
    const C = (L = d.shots) == null ? void 0 : L[0];
    T && C && D && BS(d.camera, r.frame, C, D), D = Vh(d.camera, r.frame), C ? Object.assign(C, D, { position: [...D.position] }) : d.shots = [{ ...D, position: [...D.position] }], K || k(null, D);
  }
  function k(T, K) {
    var S, Z;
    !K && r.mode === "frame" && Se(T);
    const C = (K == null ? void 0 : K.position) ?? [0, 0, 0];
    if (((Z = (S = r.viewTransition) == null ? void 0 : S.end) == null ? void 0 : Z.mode) === "3dof") {
      A({ ...I(), position: C }, r.viewTransition.end);
      return;
    }
    if (r.mode !== "pano" || r.spaceMode !== "3dof" || !le()) return;
    const H = (T == null ? void 0 : T.position) ?? [0, 0, 0];
    if (H.every((se, ge) => se === C[ge])) return;
    const L = { ...I(), position: H };
    g({ mode: "6dof", position: H, moved: !0 }), r.viewDistance = L.distance, A({ ...L, position: C }, { mode: "3dof", moved: !1 });
  }
  function Y() {
    if (!l) return null;
    const T = Array.isArray(d.shots) ? d.shots : [];
    if (!T.length) return null;
    const K = String(d.active.selected_shot_id || "");
    return T.find((C) => String((C == null ? void 0 : C.id) || "") === K) || T[0] || null;
  }
  function ie(T, K, C = {}) {
    var S;
    if ((T == null ? void 0 : T.kind) !== "roll_frame" || !T.shot) return;
    T.accumulatedRad += Bm(K, T.lastAngle), T.lastAngle = K;
    const H = Ym(T.start.roll_deg, T.accumulatedRad, {
      shiftKey: C.shiftKey,
      altKey: T.altStarted ? !1 : C.altKey
    });
    T.shot.roll_deg = H, T.changed = T.changed || Math.abs(T.accumulatedRad) > 1e-9;
    const L = (((S = _.sidePanel) == null ? void 0 : S.params) || []).find((Z) => Z.key === "roll_deg");
    L && (L.value = H, L.displayValue = $i(H), L.fillPct = (H + 180) / 360 * 100), N(), Ce(T), de({ localOnly: !0 });
  }
  function _e(T, K, C = {}) {
    var S;
    if ((T == null ? void 0 : T.kind) !== "roll_frame" || !T.shot || !T.rollGesture) return;
    const H = r0(T.rollGesture, K, C);
    if (!H) return;
    T.rollGesture = H.gesture, T.center = H.gesture.center, T.lastAngle = H.gesture.lastAngle, T.accumulatedRad = H.gesture.accumulatedRad, T.shot.roll_deg = H.rollDeg, T.changed = T.changed || Math.abs(H.gesture.accumulatedRad) > 1e-9;
    const L = (((S = _.sidePanel) == null ? void 0 : S.params) || []).find((Z) => Z.key === "roll_deg");
    L && (L.value = H.rollDeg, L.displayValue = $i(H.rollDeg), L.fillPct = (H.rollDeg + 180) / 360 * 100), N(), Ce(T), de({ localOnly: !0 });
  }
  function Me(T, K) {
    const C = te(T);
    return Math.atan2(C.y - K.y, C.x - K.x);
  }
  function Ce(T) {
    var Z, se;
    if ((T == null ? void 0 : T.kind) !== "roll_frame" || !T.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const K = Q(T.shot), C = (Z = n.getBoundingClientRect) == null ? void 0 : Z.call(n), H = (se = c.getBoundingClientRect) == null ? void 0 : se.call(c);
    if (!K || !C || !H || n.width <= 0 || n.height <= 0) return;
    const L = C.width / n.width, S = C.height / n.height;
    _.tooltip.text = `${$i(T.shot.roll_deg)}°`, _.tooltip.left = C.left - H.left + (K.x + K.w * 0.5) * L, _.tooltip.top = C.top - H.top + (K.y + K.h * 0.5) * S + 12, _.tooltip.variant = "roll", _.tooltip.visible = !0;
  }
  function xe(T) {
    var S;
    if (T.button !== 0 || s || r.mode !== "frame") return;
    const K = Y();
    if (!K || K.locked === !0) return;
    const C = Q(K);
    if (!C) return;
    const H = { x: C.x + C.w * 0.5, y: C.y + C.h * 0.5 }, L = Me(T, H);
    r.interaction = {
      kind: "roll_frame",
      shot: K,
      center: H,
      lastAngle: L,
      accumulatedRad: 0,
      start: { roll_deg: Number(K.roll_deg ?? K.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (S = i.setPointerCapture) == null || S.call(i, T.pointerId), T.preventDefault(), N(), Ce(r.interaction), de({ localOnly: !0 });
  }
  function be(T) {
    var K;
    ((K = r.interaction) == null ? void 0 : K.kind) !== "roll_frame" || r.interaction.source !== "knob" || ie(
      r.interaction,
      Me(T, r.interaction.center),
      T
    );
  }
  function R() {
    const T = r.interaction;
    (T == null ? void 0 : T.kind) !== "roll_frame" || T.source !== "knob" || (T.changed && (fe(), G(), ce()), r.interaction = null, ve(), ue(), N(), de());
  }
  function z(T) {
    const K = r.mode === "frame" && !s ? Y() : null;
    !K || K.locked === !0 || Math.abs(Number(K.roll_deg ?? K.rot_deg ?? 0)) <= 1e-9 || (K.roll_deg = 0, fe(), G(), ce(), N(), de(), T.preventDefault());
  }
  return {
    connect(T) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: v,
        cameraShoots: y,
        commitAndRefreshNode: G,
        currentSpaceCamera: U,
        cutoutCamera: F,
        editorViewInput: P,
        forceCursorTool: $,
        getFrameViewRect: Q,
        hasCamera: q,
        hasSpaceContent: le,
        hideTooltip: ve,
        isCameraSelected: he,
        isShotItem: X,
        leaveFrameView: Se,
        pushHistory: fe,
        requestDraw: de,
        screenPos: te,
        setSelectedItem: me,
        spaceScale: oe,
        spaceViewState: I,
        stopTimelinePlayback: W,
        syncFrameRollKnob: N,
        syncViewToggleState: ue,
        transitionView: A,
        turnViewTo: O,
        updateCursor: w,
        updateSelectionMenu: M,
        updateSidePanel: ce,
        worldGizmoPointer: ye
      } = T);
    },
    addCutoutFrame: B,
    addStudioCamera: p,
    deleteStudioCamera: h,
    setShotAspect: x,
    clearCutoutFrame: E,
    applyCutoutAspectCustom: ae,
    rotateCutoutAspect90: V,
    syncCutoutShot: re,
    getActiveCutoutShot: Y,
    startCameraPress: b,
    applySharedRollInteractionPoint: _e,
    onFrameRollKnobPointerDown: xe,
    onFrameRollKnobPointerMove: be,
    finishKnobRoll: R,
    onFrameRollKnobDoubleClick: z
  };
}
function oI(e) {
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
    videoTransportEl: _
  } = e;
  let g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te = null, me = !1;
  function oe(k) {
    if (r.mode = "pano", !k) return;
    v();
    const Y = he().distance;
    r.viewYaw = Et(k.yaw_deg), r.viewPitch = Fe(k.pitch_deg, -89.9, 89.9), r.viewFov = Fe(k.hFOV_deg, 35, 140), r.spaceMode === "6dof" && g({ mode: "6dof", position: [...k.position], moved: !0 }), r.viewDistance = Y, d.backgroundDirty = !0;
  }
  function I() {
    var H, L, S, Z, se;
    if (!n) return null;
    const k = (H = n.getBoundingClientRect) == null ? void 0 : H.call(n), Y = Number((k == null ? void 0 : k.width) || 0) > 0 ? n.width / k.width : 1, ie = Number((k == null ? void 0 : k.height) || 0) > 0 ? n.height / k.height : 1;
    d.frameCanvasScale = Math.min(Y, ie);
    let _e = 24, Me = 24;
    const Ce = Math.max(_e + 1, n.width - 24);
    let xe = Math.max(Me + 1, n.height - 24);
    const be = (L = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : L.call(f), R = (S = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : S.call(a);
    let z = 24;
    be && k && be.width > 0 && be.height > 0 && (z = Math.max(z, (be.right - k.left) * Y + xp)), R && k && R.width > 0 && R.height > 0 && ((Z = m.frameRail) == null ? void 0 : Z.visible) === !0 && (z = Math.max(z, (k.right - R.left) * Y + xp)), _e = Math.max(_e, z);
    const T = Math.min(Ce, n.width - z);
    let K = 24;
    const C = (se = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : se.call(s);
    if (C && k && C.width > 0 && C.height > 0 && (K = Math.max(K, (C.bottom - k.top) * ie + Jl)), [l, _].forEach((ge) => {
      var Ee;
      if (!ge || !k) return;
      const pe = getComputedStyle(ge);
      if (pe.display === "none" || pe.visibility === "hidden" || Number(pe.opacity) <= 0) return;
      const we = (Ee = ge.getBoundingClientRect) == null ? void 0 : Ee.call(ge);
      !we || we.width <= 0 || we.height <= 0 || (K = Math.max(K, (k.bottom - we.top) * ie + Jl));
    }), o && k) {
      const ge = getComputedStyle(o);
      ge.display !== "none" && ge.visibility !== "hidden" && Number(ge.opacity) > 0 && (K = Math.max(K, (yA + Jl) * ie));
    }
    return Me = Math.max(Me, K), xe = Math.max(Me + 1, Math.min(xe, n.height - K)), {
      x: _e,
      y: Me,
      w: Math.max(1, T - _e),
      h: Math.max(1, xe - Me)
    };
  }
  function W(k = U()) {
    if (!k || !n) return null;
    const Y = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, n.width - 48),
      h: Math.max(1, n.height - 48)
    };
    return E1(Y, k, Yc * ui(Y, k));
  }
  function N(k = U()) {
    const Y = W(k);
    return Y ? { x: Y.x, y: Y.y, w: Y.w, h: Y.h } : null;
  }
  function ue() {
    return u && !!U();
  }
  function A(k, Y) {
    const ie = U();
    if (!ie || ie.locked === !0) return !1;
    const _e = Number(Y) > 0, Me = Zm(ie, Y);
    if (!Me) return !1;
    if (_e) {
      const Ce = Yc * ui(
        d.frameSafeRect || { w: n.width, h: n.height },
        Me
      ), xe = _u({ width: n.width, height: n.height }, Ce);
      if (xe.halfW < n.width * 0.5 - 1e-6 || xe.halfH < n.height * 0.5 - 1e-6) return !1;
    }
    return ie.hFOV_deg = Me.hFOV_deg, ie.vFOV_deg = Me.vFOV_deg, O(), de(), !0;
  }
  function O() {
    r.frameWheelChanged = !0, r.frameWheelCommitTimer && window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = window.setTimeout(() => {
      r.frameWheelCommitTimer = 0, r.frameWheelChanged && (r.frameWheelChanged = !1, Q(), y(), de());
    }, 180);
  }
  function w() {
    return t && r.mode === "frame" && F();
  }
  function M() {
    const k = U(), Y = W(k);
    return k && Y ? dg(k, Y, { width: n.width, height: n.height }) : null;
  }
  function ce() {
    var k;
    return ((k = G()) == null ? void 0 : k.radius) || Wn;
  }
  function ye(k) {
    const { position: Y, yaw_deg: ie, pitch_deg: _e, roll_deg: Me, hFOV_deg: Ce } = k.shot;
    return { position: Y, yaw_deg: ie, pitch_deg: _e, roll_deg: Me, hFOV_deg: Ce, distance: ce() };
  }
  function D(k, Y) {
    const { rect: ie } = k;
    return i.pickSurface(le(k.shot), Y.x - ie.x, Y.y - ie.y, ie.w, ie.h);
  }
  function b(k, Y, ie) {
    return Pc(Y, D(k, ie), null, ve());
  }
  function B(k) {
    return JSON.stringify([ye(k), k.rect]);
  }
  function p(k) {
    const Y = U();
    Y.position = [...k.position], Y.yaw_deg = k.yaw_deg, Y.pitch_deg = k.pitch_deg;
  }
  function h(k, Y) {
    const ie = U();
    !ie || c || ie.locked === !0 || (r.interaction = {
      kind: "pan_frame",
      shot: ie,
      last: k,
      start: { yaw_deg: Number(ie.yaw_deg || 0), pitch_deg: Number(ie.pitch_deg || 0) },
      changed: !1
    }, fe(k), n.setPointerCapture(Y));
  }
  function x(k, Y, ie) {
    const _e = M();
    if (!_e || c) return;
    const Me = ye(_e);
    r.interaction = k === "orbit" ? { kind: "frame_orbit", last: Y, pivot: b(_e, Me, Y), changed: !1 } : { kind: "frame_pan", last: Y, depth: Uh(Me, ve()), changed: !1 }, fe(Y), n.setPointerCapture(ie);
  }
  function E(k, Y) {
    const ie = M();
    if (!ie) return;
    const _e = ye(ie), Me = Y.x - k.last.x, Ce = Y.y - k.last.y;
    p(k.kind === "frame_pan" ? Zh(_e, Me, Ce, ie.rect.w, ie.rect.h, k.depth) : Jh(_e, Me, Ce, n.height, k.pivot)), k.changed = k.changed || Me !== 0 || Ce !== 0, k.last = Y, q({ localOnly: !0, cause: "frame_view" });
  }
  function j(k, Y) {
    const ie = M();
    if (!ie || c) return;
    const _e = ye(ie), Me = performance.now(), Ce = { x: k.x, y: k.y, time: Me, key: i.contentRevision(), view: B(ie) };
    if (!Bh(te, Ce)) {
      const xe = D(ie, k);
      te = { ...Ce, cost: performance.now() - Me, hit: xe };
    }
    p(Qh(_e, Pc(_e, te.hit, null, ve()), Y, ve())), te.view = B(M() ?? ie), te.wheelTime = Me, O(), de(), q({ localOnly: !0, cause: "frame_view" });
  }
  function J(k, Y) {
    const ie = U();
    if (!ie || c || ie.locked === !0) return !1;
    const _e = Z0(ie, k, Y);
    return _e === ie ? !1 : (X(), ie.position = _e.position, me = !0, !0);
  }
  function ae() {
    return me ? (me = !1, Q(), y(), de(), !0) : !1;
  }
  function V() {
    return r.frameWheelCommitTimer && (window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = 0), r.frameWheelChanged ? (r.frameWheelChanged = !1, Q(), y(), de(), !0) : !1;
  }
  function re() {
    const k = r.interaction;
    if (!(k != null && k.shot) || !k.start || k.kind !== "pan_frame" && k.kind !== "roll_frame") return !1;
    const Y = k.kind === "roll_frame";
    return k.kind === "pan_frame" ? (k.shot.yaw_deg = k.start.yaw_deg, k.shot.pitch_deg = k.start.pitch_deg) : k.shot.roll_deg = k.start.roll_deg, Y && P(), r.interaction = null, $(), Se(), de(), fe(r.pointerPos), q({ localOnly: !0 }), !0;
  }
  return {
    connect(k) {
      ({
        applySpaceMode: g,
        cancelViewTransition: v,
        commitAndRefreshNode: y,
        contentSphere: G,
        getActiveCutoutShot: U,
        hasSpaceContent: F,
        hideTooltip: P,
        invalidateLivePaintPreviewCaches: $,
        pushHistory: Q,
        requestDraw: q,
        shotViewCamera: le,
        spaceScale: ve,
        spaceViewState: he,
        stopTimelinePlayback: X,
        syncViewToggleState: Se,
        updateCursor: fe,
        updateSidePanel: de
      } = k);
    },
    leaveFrameView: oe,
    measureFrameSafeRect: I,
    getFrameViewLayout: W,
    getFrameViewRect: N,
    supportsFramePainting: ue,
    zoomFrameViewAt: A,
    isFreeFrameView: w,
    frameContext: M,
    frameViewDistance: ce,
    frameSpaceView: ye,
    frameTarget: b,
    startPanFrame: h,
    startFrameDrag: x,
    dragFrame: E,
    zoomFrameAt: j,
    flushFrameWheelCommit: V,
    cancelFrameCameraGesture: re,
    moveFrameByKeys: J,
    endFrameKeyMove: ae
  };
}
function sI(e) {
  const {
    editor: t,
    paintCursorEl: n,
    paintSizePreviewEl: r,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q = 0;
  function le() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function ve() {
    return String(le() || "") === "lasso_fill";
  }
  function he() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function X(b, B) {
    const p = Number(B || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, p / 2048)
    };
  }
  function Se(b) {
    const B = String(b || "").trim();
    return B === "eraser" ? pr : hn[B] ? B : t.activeBrushPresetId || pr;
  }
  function fe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (he() || Q());
  }
  function de() {
    var b;
    return fe() && ((b = t.pointerPos) == null ? void 0 : b.inside) === !0;
  }
  function te(b, B = !0) {
    const p = Number((b == null ? void 0 : b.x) || 0), h = Number((b == null ? void 0 : b.y) || 0), x = B !== !1, E = t.pointerPos || { x: 0, y: 0, inside: !1 }, j = E.inside !== x || Math.abs(E.x - p) > 0.01 || Math.abs(E.y - h) > 0.01;
    return t.pointerPos = { x: p, y: h, inside: x }, j;
  }
  function me() {
    var re, k;
    if (!de()) return null;
    const b = t.primaryTool === "mask" ? "mask" : "paint", B = b === "mask" ? t.maskTool : t.paintTool, p = Se(B), h = hn[p] || hn[pr], x = Number(t.brushSizes[p] ?? 10), E = Math.max(1, x) * Math.max(0.1, Number(h.sizeScale ?? 1)), j = Math.max(3, E * 0.5), J = b === "mask" ? B === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : B === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : kn(t.paintColor), ae = b === "mask" ? B === "lasso_fill" ? 0.18 : 0.2 : B === "eraser" ? 0.06 : Fe(Math.max(0.16, Number(J.a ?? 1) * 0.3), 0.16, 0.52), V = b === "mask" ? 0.95 : B === "eraser" ? 0.75 : Fe(Math.max(0.46, Number(J.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: b,
      toolKind: B,
      preset: h,
      radius: j,
      fillStyle: er(J, ae),
      strokeStyle: er(J, V),
      x: Number(((re = t.pointerPos) == null ? void 0 : re.x) || 0),
      y: Number(((k = t.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: j,
      hotspotY: j
    };
  }
  function oe() {
    var Y, ie, _e;
    const b = me();
    if (!n) return;
    if (!b) {
      n.style.display = "none";
      return;
    }
    let B = b.radius * 2, p = b.radius * 2, h = "999px", x = 0, E = b.fillStyle, j = "1px solid rgba(222, 222, 222, 0.72)", J = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const ae = "rgba(222, 222, 222, 0.72)", V = "rgba(52, 52, 52, 0.72)";
    let re = Number(b.hotspotX ?? B * 0.5), k = Number(b.hotspotY ?? p * 0.5);
    if (b.toolKind === "lasso_fill")
      B = Fa, p = Fa, h = "0", j = "0", J = "none", re = SA, k = _A, E = NA(b.fillStyle, V, ae);
    else if (b.layerKind === "mask")
      E = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (b.toolKind === "marker") {
      const Me = Math.max(1, Number(((Y = b.preset) == null ? void 0 : Y.aspect) ?? 1));
      B = Math.max(10, b.radius * 2 * Me), p = Math.max(6, b.radius * 2), h = `${Math.min(6, p * 0.42)}px`, x = Number(((_e = (ie = b.preset) == null ? void 0 : ie.angle) == null ? void 0 : _e.value) || 0) * di;
    } else b.toolKind === "brush" ? E = `radial-gradient(circle at 50% 50%, ${b.strokeStyle} 0%, ${b.fillStyle} 45%, rgba(0,0,0,0) 100%)` : b.toolKind === "eraser" && (E = "rgba(255,255,255,0.14)");
    n.style.display = "block", n.style.width = `${Math.round(B)}px`, n.style.height = `${Math.round(p)}px`, n.style.borderRadius = h, n.style.border = j, n.style.boxShadow = J, n.style.background = E, n.style.backgroundRepeat = "no-repeat", n.style.backgroundPosition = "center", n.style.backgroundSize = "contain", n.style.transform = `translate(${Math.round(b.x - re)}px, ${Math.round(b.y - k)}px) rotate(${x}deg)`;
  }
  function I() {
    var be;
    if (!r || !i) return;
    const b = t.primaryTool === "mask" ? "mask" : "paint", B = b === "mask" ? t.maskTool : t.paintTool;
    if (B === "lasso_fill") return;
    const p = Se(B), h = hn[p] || hn[pr], x = Number(t.brushSizes[p] ?? 10), E = Math.max(1, x) * Math.max(0.1, Number(h.sizeScale ?? 1)), j = Math.max(6, E * 0.5), J = B === "eraser", ae = b === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : J ? { r: 1, g: 1, b: 1, a: 0.22 } : kn(t.paintColor), V = b === "mask" ? er(ae, 0.22) : J ? "rgba(255,255,255,0.14)" : er(ae, Fe(Math.max(0.18, Number(ae.a ?? 1) * 0.34), 0.18, 0.56)), re = b === "mask" ? er(ae, 0.96) : J ? "rgba(255,255,255,0.72)" : er(ae, Fe(Math.max(0.56, Number(ae.a ?? 1) * 0.96), 0.56, 1));
    let k = j * 2, Y = j * 2, ie = "999px", _e = 0, Me = V;
    const Ce = "rgba(222, 222, 222, 0.72)", xe = "rgba(52, 52, 52, 0.72)";
    if (b === "mask")
      Me = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (B === "marker") {
      const R = Math.max(1, Number((h == null ? void 0 : h.aspect) ?? 1));
      k = Math.max(16, j * 2 * R), Y = Math.max(10, j * 2), ie = `${Math.min(8, Y * 0.42)}px`, _e = Number(((be = h == null ? void 0 : h.angle) == null ? void 0 : be.value) || 0) * di;
    } else B === "brush" ? Me = `radial-gradient(circle at 50% 50%, ${re} 0%, ${V} 48%, rgba(0,0,0,0) 100%)` : B === "lasso_fill" ? (k = Math.max(18, j * 1.8), Y = k, Me = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${re} 43%, ${re} 58%, rgba(0,0,0,0) 59%)`) : J && (Me = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(k)}px`, i.style.height = `${Math.round(Y)}px`, i.style.borderRadius = ie, i.style.background = Me, i.style.border = `1px solid ${Ce}`, i.style.boxShadow = `0 0 0 1px ${xe}`, i.style.transform = `rotate(${_e}deg)`, q && (clearTimeout(q), q = 0), r.classList.remove("fade-out"), r.classList.add("show");
  }
  function W() {
    !r || !r.classList.contains("show") || (r.classList.add("fade-out"), q && clearTimeout(q), q = window.setTimeout(() => {
      r.classList.remove("show", "fade-out"), q = 0;
    }, 180));
  }
  function N(b, B, p, h) {
    const x = Se(B), E = hn[x] || hn[pr], j = t.brushSizes[x] ?? 10, J = Math.max(1, j) * Math.max(0.1, E.sizeScale ?? 1), ae = X(h, J), V = p.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), re = {
      id: Ii(b),
      actionGroupId: Ii("ag"),
      targetSpace: h && typeof h == "object" ? { ...h, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: B,
      size: J,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: ae.radiusModel,
      radiusValue: ae.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: V.map((k) => ({ ...k })),
        points: V.map((k) => ({ ...k }))
      }
    };
    return kp(re, E), t.mode, Number(E.aspect ?? 1), Number(re.aspect ?? 1), String(re.stampKind || ""), Number(re.size || 0), String(re.radiusModel || ""), Number(re.radiusValue || 0), { ...re.targetSpace }, re;
  }
  function ue(b, B, p, h) {
    const x = p.map((ae) => ({
      ...ae,
      t: Number((ae == null ? void 0 : ae.t) || 0),
      widthScale: Number.isFinite(Number(ae == null ? void 0 : ae.widthScale)) ? Math.max(0, Number(ae.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(ae == null ? void 0 : ae.pressureLike)) ? Math.max(0, Number(ae.pressureLike)) : 1
    })), E = Se(B), j = hn[E] || hn[pr], J = {
      id: Ii(b),
      actionGroupId: Ii("ag"),
      targetSpace: h && typeof h == "object" ? { ...h, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: B,
      size: 10,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: x.map((ae) => ({ ...ae }))
      }
    };
    return kp(J, j), t.mode, Number(j.aspect ?? 1), Number(J.aspect ?? 1), String(J.stampKind || ""), { ...J.targetSpace }, J;
  }
  function A(b) {
    const B = o.painting || (o.painting = pi(null)), p = B[b] || (B[b] = { strokes: [] });
    return Array.isArray(p.strokes) || (p.strokes = []), p.strokes;
  }
  function O(b, B, p = performance.now()) {
    let h;
    if (t.mode === "frame") {
      const V = f();
      if (!V || (h = $(B, V, p), !h)) return !1;
    } else
      h = P(B, p);
    if (!h) return !1;
    const x = b.stroke.geometry.rawPoints || b.stroke.geometry.points, E = b.stroke.geometry.points, j = x[x.length - 1];
    if (j) {
      const V = Math.abs(Number(h.u ?? h.x ?? 0) - Number(j.u ?? j.x ?? 0)), re = Math.abs(Number(h.v ?? h.y ?? 0) - Number(j.v ?? j.y ?? 0));
      if (V < 15e-4 && re < 15e-4) return !1;
    }
    const J = {
      ...h,
      t: Number((h == null ? void 0 : h.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    x.push({ ...J }), E.push({ ...J });
    const ae = m(b);
    if (ae) {
      const V = t.paintEngine.ensureTarget(ae);
      t.paintEngine.appendStrokePoint(V, Number(J.u ?? 0), Number(J.v ?? 0), b.stroke);
    }
    return !0;
  }
  function w(b, B, p = performance.now()) {
    var j, J;
    let h;
    if (t.mode === "frame") {
      const ae = f();
      if (!ae) return !1;
      h = $(B, ae, p);
    } else
      h = P(B, p);
    const x = (J = (j = b == null ? void 0 : b.stroke) == null ? void 0 : j.geometry) == null ? void 0 : J.points;
    if (!h || !Array.isArray(x)) return !1;
    const E = x[x.length - 1];
    if (E) {
      const ae = Math.abs(Number(h.u ?? h.x ?? 0) - Number(E.u ?? E.x ?? 0)), V = Math.abs(Number(h.v ?? h.y ?? 0) - Number(E.v ?? E.y ?? 0));
      if (ae < 15e-4 && V < 15e-4) return !1;
    }
    return x.push({
      ...h,
      t: Number((h == null ? void 0 : h.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function M(b) {
    var R, z, T, K, C;
    const B = (b == null ? void 0 : b.stroke) || null;
    if (!B || (b == null ? void 0 : b.layerKind) !== "paint" || String((B == null ? void 0 : B.toolKind) || "") !== "eraser") return !1;
    F();
    const p = m(), h = c(p.width, p.height);
    if (!U(h, B, { w: p.width, h: p.height })) return !1;
    const x = ((z = (R = h.ctx) == null ? void 0 : R.getImageData(0, 0, p.width, p.height)) == null ? void 0 : z.data) || null;
    if (!x) return !1;
    const E = new Map(g().map((H) => [String((H == null ? void 0 : H.actionGroupId) || (H == null ? void 0 : H.id) || "").trim(), H ? { ...H } : null])), j = [], J = [], ae = [...v().filter((H) => String((H == null ? void 0 : H.layerKind) || "paint") !== "paint")];
    let V = !1, re = _().reduce((H, L) => Math.max(H, Number((L == null ? void 0 : L.z_index) || 0)), -1) + 1;
    function k(H, L, S, Z = 8) {
      let se = L, ge = S, pe = -1, we = -1;
      for (let Ee = 0; Ee < S; Ee += 1)
        for (let Le = 0; Le < L; Le += 1)
          H[(Ee * L + Le) * 4 + 3] <= Z || (Le < se && (se = Le), Ee < ge && (ge = Ee), Le > pe && (pe = Le), Ee > we && (we = Ee));
      return pe < se || we < ge ? null : { minX: se, minY: ge, maxX: pe, maxY: we };
    }
    const Y = k(x, p.width, p.height, 8);
    if (!Y) return !1;
    function ie(H, L) {
      return !H || !L ? !1 : !(H.maxX < L.minX || L.maxX < H.minX || H.maxY < L.minY || L.maxY < H.minY);
    }
    function _e(H, L) {
      const S = d((H == null ? void 0 : H.actionGroupId) || (H == null ? void 0 : H.id) || "", "paint", L);
      if (!S) return null;
      const Z = S.centerUv.u - S.halfW, se = S.centerUv.u + S.halfW, ge = S.centerUv.v - S.halfH, pe = S.centerUv.v + S.halfH, we = p.width, Ee = p.height;
      return {
        minX: Math.floor((Z % 1 + 1) % 1 * we),
        maxX: Math.ceil((se % 1 + 1) % 1 * we),
        minY: Math.floor(Fe(ge, 0, 1) * Ee),
        maxY: Math.ceil(Fe(pe, 0, 1) * Ee),
        wraps: se - Z >= 1 || Z < 0 || se > 1
      };
    }
    function Me(H) {
      const L = (H == null ? void 0 : H.bbox) || null;
      if (!L) return null;
      const S = (H == null ? void 0 : H.transform) || {}, Z = p.width, se = p.height, ge = Number(L.u0 || 0) + Number(S.du || 0), pe = Number(L.u1 || 0) + Number(S.du || 0), we = Number(L.v0 || 0) + Number(S.dv || 0), Ee = Number(L.v1 || 0) + Number(S.dv || 0);
      return {
        minX: Math.floor((ge % 1 + 1) % 1 * Z),
        maxX: Math.ceil((pe % 1 + 1) % 1 * Z),
        minY: Math.floor(Fe(we, 0, 1) * se),
        maxY: Math.ceil(Fe(Ee, 0, 1) * se),
        wraps: pe - ge >= 1 || ge < 0 || pe > 1
      };
    }
    function Ce(H) {
      return H ? H.wraps ? ie(Y, { minX: 0, maxX: H.maxX, minY: H.minY, maxY: H.maxY }) || ie(Y, { minX: H.minX, maxX: p.width - 1, minY: H.minY, maxY: H.maxY }) : ie(Y, H) : !0;
    }
    function xe(H) {
      if (!H) return { touched: !1, canvas: null };
      const L = c(p.width, p.height, { readback: !0 });
      L.ctx.drawImage(H, 0, 0);
      const S = L.ctx.getImageData(0, 0, p.width, p.height);
      L.ctx.save(), L.ctx.globalCompositeOperation = "destination-out", L.ctx.drawImage(h.canvas, 0, 0), L.ctx.restore();
      const Z = L.ctx.getImageData(0, 0, p.width, p.height);
      for (let se = 0; se < p.width * p.height; se += 1) {
        if (x[se * 4 + 3] <= 8) continue;
        const pe = S.data[se * 4 + 3], we = Z.data[se * 4 + 3];
        if (pe > we)
          return { touched: !0, canvas: L.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function be(H, L, S) {
      const Z = Number(S == null ? void 0 : S.z_index), se = l(H, L, S).map((ge, pe) => ({
        ...ge,
        z_index: Number.isFinite(Z) ? Z + pe * 1e-3 : re + pe * 1e-3
      }));
      return se.length && (re = Math.max(re, ...se.map((ge) => Number((ge == null ? void 0 : ge.z_index) || 0))) + 1), se;
    }
    for (const H of g()) {
      const L = String((H == null ? void 0 : H.actionGroupId) || (H == null ? void 0 : H.id) || "").trim();
      if (!L) continue;
      const S = y(L, "paint");
      if (!Ce(_e(H, S))) {
        J.push(H), j.push(...S);
        continue;
      }
      const Z = ((K = (T = t.paintEngine) == null ? void 0 : T.getGroupTarget) == null ? void 0 : K.call(T, L)) || null, se = ((C = Z == null ? void 0 : Z.committedPaint) == null ? void 0 : C.canvas) || null;
      if (!se) {
        J.push(H), j.push(...S);
        continue;
      }
      const ge = xe(se);
      if (!ge.touched || !ge.canvas) {
        J.push(H), j.push(...S);
        continue;
      }
      V = !0;
      const pe = be(ge.canvas, "paint", E.get(L) || H || {});
      ae.push(...pe);
    }
    for (const H of v().filter((L) => String((L == null ? void 0 : L.layerKind) || "paint") === "paint")) {
      if (!Ce(Me(H))) {
        ae.push(H);
        continue;
      }
      const L = s(H, null);
      if (!L) {
        ae.push(H);
        continue;
      }
      const S = xe(L);
      if (!S.touched || !S.canvas) {
        ae.push(H);
        continue;
      }
      V = !0;
      const Z = be(S.canvas, "paint", H);
      ae.push(...Z);
    }
    return V ? (o.painting.paint.strokes = j, o.painting.groups = J.sort((H, L) => Number((H == null ? void 0 : H.z_index) || 0) - Number((L == null ? void 0 : L.z_index) || 0)), o.painting.raster_objects = ae.sort((H, L) => Number((H == null ? void 0 : H.z_index) || 0) - Number((L == null ? void 0 : L.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ce(b) {
    var j, J, ae, V, re;
    if ((((J = (j = b.stroke) == null ? void 0 : j.geometry) == null ? void 0 : J.rawPoints) || ((V = (ae = b.stroke) == null ? void 0 : ae.geometry) == null ? void 0 : V.points) || []).length >= 1) {
      D(b);
      const k = m(b);
      k && (String(((re = b.stroke) == null ? void 0 : re.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(k) : t.paintEngine.commitActiveStroke(b.stroke, k)), b._hasCommittedSegments = !0;
    }
    const p = b.stroke, h = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, x = N(b.layerKind, p.toolKind, [], h);
    x.actionGroupId = p.actionGroupId, b.stroke = x;
    const E = m(b);
    E && t.paintEngine.beginStroke(x, E);
  }
  function ye(b) {
    var j, J;
    if ((((J = (j = b.stroke) == null ? void 0 : j.geometry) == null ? void 0 : J.points) || []).length >= 3) {
      D(b);
      const ae = m(b);
      ae && t.paintEngine.commitActiveStroke(b.stroke, ae), b._hasCommittedSegments = !0;
    }
    const p = b.stroke, h = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, x = ue(b.layerKind, p.toolKind, [], h);
    x.actionGroupId = p.actionGroupId, b.stroke = x;
    const E = m(b);
    E && t.paintEngine.beginStroke(x, E);
  }
  function D(b) {
    var E, j, J, ae;
    const B = ((E = b == null ? void 0 : b.stroke) == null ? void 0 : E.geometry) || null;
    if (!B) return !1;
    const p = String(((j = b == null ? void 0 : b.stroke) == null ? void 0 : j.toolKind) || "pen");
    if (b.layerKind === "paint" && p === "eraser")
      return B.geometryKind !== "lasso_fill" && (B.processedPoints = G(B.rawPoints || B.points || [], b.stroke.targetSpace, !0)), M(b);
    const h = b.layerKind === "paint" && p !== "eraser";
    if (B.geometryKind === "lasso_fill")
      return (Array.isArray(B.points) ? B.points : []).length < 3 ? !1 : (h && u((J = b.stroke) == null ? void 0 : J.actionGroupId), A(b.layerKind).push(b.stroke), !0);
    const x = B.rawPoints || B.points || [];
    return x.length < 1 ? !1 : (B.processedPoints = G(x, b.stroke.targetSpace, !0), h && u((ae = b.stroke) == null ? void 0 : ae.actionGroupId), A(b.layerKind).push(b.stroke), !0);
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
        getDisplayListObjects: _,
        getPaintingGroupList: g,
        getRasterObjectList: v,
        getStrokeGroupStrokes: y,
        processFreehandPoints: G,
        rasterizeStrokeToSurface: U,
        rebuildPaintEngineIfNeeded: F,
        screenPosToErpPoint: P,
        screenPosToFrameAsErpPoint: $,
        supportsFramePainting: Q
      } = b);
    },
    isActiveLassoTool: ve,
    supportsErpPainting: he,
    getBrushPresetIdForTool: Se,
    isPaintCursorEnabled: fe,
    isActivePaintCursorVisible: de,
    setPointerPos: te,
    syncPaintCursorElement: oe,
    showPaintSizePreview: I,
    hidePaintSizePreview: W,
    buildFreehandStrokeRecord: N,
    buildLassoFillStrokeRecord: ue,
    getPaintingLayerList: A,
    appendPaintPoint: O,
    appendLassoPoint: w,
    _segmentFrameStroke: ce,
    _segmentFrameLassoFill: ye,
    commitPaintInteraction: D
  };
}
function aI(e) {
  const {
    editor: t,
    readOnly: n,
    shotEditor: r,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X;
  function Se() {
    return he().reverse();
  }
  function fe(W) {
    var ue;
    if (r && t.mode === "frame") {
      const A = s(), O = l(A);
      if (!A || !O || !(Number((W == null ? void 0 : W.x) || 0) >= Number(O.x || 0) && Number((W == null ? void 0 : W.x) || 0) <= Number(O.x || 0) + Number(O.w || 0) && Number((W == null ? void 0 : W.y) || 0) >= Number(O.y || 0) && Number((W == null ? void 0 : W.y) || 0) <= Number(O.y || 0) + Number(O.h || 0))) return null;
      const M = q(W, A, performance.now()), ce = M ? o(M) : null;
      if (ce)
        for (const D of a()) {
          if (!U(D)) continue;
          const b = X(D, ce);
          if (b && Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1) {
            const B = Q(D);
            if (B != null && B.visible) return { item: D, geom: B };
          }
        }
      const ye = c(!1).slice().sort((D, b) => Number((b == null ? void 0 : b.z_index) || 0) - Number((D == null ? void 0 : D.z_index) || 0));
      for (const D of ye) {
        if (D.type === "strokeGroup") {
          const p = f($("paint", D.actionGroupId || D.id || ""));
          if (!p) continue;
          const h = Q(p);
          if (!(h != null && h.visible)) continue;
          const x = Array.isArray(h.strokePaths) ? h.strokePaths : [];
          for (const E of x) {
            const j = Array.isArray(E == null ? void 0 : E.points) ? E.points : [];
            if (!j.length) continue;
            if (E.closed && j.length >= 3 && Ar(W, j)) return { item: p, geom: h };
            const J = Math.max(8, Number((E == null ? void 0 : E.lineWidth) || 0) * 0.5 + 6);
            for (let ae = 0; ae < j.length - 1; ae += 1)
              if (ec(W, j[ae], j[ae + 1]) <= J * J) return { item: p, geom: h };
            if (j.length === 1 && mo(W, j[0]) <= J * J) return { item: p, geom: h };
          }
          continue;
        }
        if (D.type === "rasterObject") {
          const p = d(P(((ue = D.item) == null ? void 0 : ue.id) || D.id || ""));
          if (!p) continue;
          const h = Q(p);
          if (m(p, h, W, M)) return { item: p, geom: h };
          continue;
        }
        const b = D.item;
        if (!b || !U(b) || !ce) continue;
        const B = X(b, ce);
        if (B && Number(B.x) >= 0 && Number(B.x) <= 1 && Number(B.y) >= 0 && Number(B.y) <= 1) {
          const p = Q(b);
          if (p != null && p.visible) return { item: b, geom: p };
        }
      }
      if (!ce) return null;
      for (const D of Se()) {
        const b = X(D, ce);
        if (!b || !(Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1)) continue;
        const B = Q(D);
        if (B != null && B.visible) return { item: D, geom: B };
      }
      return null;
    }
    const N = [
      ...c(!1).slice().sort((A, O) => Number((O == null ? void 0 : O.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0)).map((A) => {
        var O;
        return A.type === "strokeGroup" ? f($("paint", A.actionGroupId || A.id || "")) : A.type === "rasterObject" ? d(P(((O = A.item) == null ? void 0 : O.id) || A.id || "")) : A.item;
      }).filter(Boolean),
      ...Se(),
      ...r ? a().filter((A) => G(A)) : []
    ];
    for (const A of N) {
      if (F(A)) {
        const w = Q(A);
        if (!(w != null && w.visible)) continue;
        const M = Array.isArray(w.strokePaths) ? w.strokePaths : [];
        for (const ce of M) {
          const ye = Array.isArray(ce == null ? void 0 : ce.points) ? ce.points : [];
          if (!ye.length) continue;
          if (ce.closed && ye.length >= 3 && Ar(W, ye)) return { item: A, geom: w };
          const D = Math.max(8, Number((ce == null ? void 0 : ce.lineWidth) || 0) * 0.5 + 6);
          for (let b = 0; b < ye.length - 1; b += 1)
            if (ec(W, ye[b], ye[b + 1]) <= D * D) return { item: A, geom: w };
          if (ye.length === 1 && mo(W, ye[0]) <= D * D) return { item: A, geom: w };
        }
        continue;
      }
      if (y(A)) {
        const w = Q(A);
        if (!(w != null && w.visible)) continue;
        if (m(A, w, W)) return { item: A, geom: w };
        continue;
      }
      const O = Q(A);
      if (O.visible && Ar(W, O.corners))
        return { item: A, geom: O };
    }
    return null;
  }
  function de(W, N, ue = null) {
    if (!W || !W.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (U(ue)) return Lc(W, N);
    if (W.kind === "strokeGroup") {
      const A = W.corners.findIndex((w) => mo(w, N) <= 121);
      if (A >= 0) {
        const w = W.corners[A], M = w.x - W.center.x, ce = w.y - W.center.y, ye = M * ce >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: A, cursor: ye };
      }
      const O = Array.isArray(W.strokePaths) ? W.strokePaths : [];
      for (const w of O) {
        const M = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
        if (w.closed && M.length >= 3 && Ar(N, M)) return { kind: "move", cursor: "default" };
        const ce = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
        for (let ye = 0; ye < M.length - 1; ye += 1)
          if (ec(N, M[ye], M[ye + 1]) <= ce * ce) return { kind: "move", cursor: "default" };
      }
      return Ar(N, W.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (W.kind === "rasterObject") {
      const A = W.corners.findIndex((O) => mo(O, N) <= 121);
      if (A >= 0) {
        const O = W.corners[A], w = O.x - W.center.x, M = O.y - W.center.y, ce = w * M >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: A, cursor: ce };
      }
      return Ar(N, W.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return ox(W, N, {
      edges: i === "cutout" || G(ue),
      resize: !(G(ue) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function te(W, N) {
    return {
      x0: Math.min(Number((W == null ? void 0 : W.x) || 0), Number((N == null ? void 0 : N.x) || 0)),
      y0: Math.min(Number((W == null ? void 0 : W.y) || 0), Number((N == null ? void 0 : N.y) || 0)),
      x1: Math.max(Number((W == null ? void 0 : W.x) || 0), Number((N == null ? void 0 : N.x) || 0)),
      y1: Math.max(Number((W == null ? void 0 : W.y) || 0), Number((N == null ? void 0 : N.y) || 0))
    };
  }
  function me(W, N) {
    return !!W && !!N && Number(N.x) >= Number(W.x0) && Number(N.x) <= Number(W.x1) && Number(N.y) >= Number(W.y0) && Number(N.y) <= Number(W.y1);
  }
  function oe(W, N) {
    if (!W || !(N != null && N.visible) || !Array.isArray(N.corners)) return !1;
    if (N.corners.some((O) => me(W, O))) return !0;
    const ue = (Number(W.x0) + Number(W.x1)) * 0.5, A = (Number(W.y0) + Number(W.y1)) * 0.5;
    return !!Ar({ x: ue, y: A }, N.corners);
  }
  function I(W) {
    if (ve(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? le("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? le("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? le("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? le("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? le("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? le(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? le("grabbing") : le("default");
      return;
    }
    if (_()) {
      le("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !n) {
        le(gA);
        return;
      }
      if (t.primaryTool !== "cursor") {
        le("default");
        return;
      }
      le("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      le("default");
      return;
    }
    if (t.gizmoAxis) {
      le("grab");
      return;
    }
    const N = u(), ue = N ? Q(N) : null, A = N ? v(N) : !1, O = A ? { kind: "none", cursor: "default" } : de(ue, W, N);
    if (!A && O.kind !== "none") {
      le(O.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && fe(W)) {
      le("default");
      return;
    }
    le(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(W) {
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
        isActivePaintCursorVisible: _,
        isErpCamera: g,
        isItemLocked: v,
        isRasterObjectItem: y,
        isShotItem: G,
        isStickerItem: U,
        isStrokeGroupItem: F,
        makeRasterObjectSelectionId: P,
        makeStrokeGroupSelectionId: $,
        objectGeom: Q,
        screenPosToFrameAsErpPoint: q,
        setCanvasCursor: le,
        syncPaintCursorElement: ve,
        upstreamSkyStickers: he,
        worldDirToFrameLocalPoint: X
      } = W);
    },
    hitObjectAt: fe,
    handleHit: de,
    rectFromPoints: te,
    rectIntersectsGeom: oe,
    updateCursor: I
  };
}
function lI(e) {
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
  let f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se = !1;
  function fe() {
    return Se;
  }
  function de() {
    if (!o) return;
    if (Se = !1, r.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (r.worldSelectedId || F() && Q()) {
      const w = me();
      Se = w.visible, oe(w);
      return;
    }
    const N = y(), ue = G();
    if (!N && ue.length === 0 || r.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const A = U(), O = vC({
      type: d,
      selected: N,
      selectedItems: ue,
      selectedKind: A,
      geom: ue.length > 1 ? v(ue) : X(N),
      allLocked: f(ue),
      anyLocked: ue.some((w) => q(w)),
      selectedLocked: q(N),
      activeAspect: le(N) && P() ? Ui : gr(N),
      cutoutAspectOpen: r.cutoutAspectOpen,
      isExternalSticker: $,
      isStickerHidden: he,
      canRestoreSelectedToInitial: m,
      iconSet: je,
      cameraShot: t,
      coverage: a.coverage,
      upstream: te(ue)
    });
    oe(O);
  }
  function te(N) {
    const ue = N.filter(Ct);
    return ue.length ? { editable: ue.every(xa) } : null;
  }
  function me() {
    const N = ve() && !r.interaction ? g().space : null;
    if (!(N != null && N.gizmo)) return { visible: !1 };
    const ue = _(), A = [...N.stickers, ...N.upstreamStickers].find((ce) => ce.id === r.worldSelectedId), w = (A ? Wu(A) : [N.gizmo.transform.position]).map((ce) => Wo(ue, ce, n.width, n.height)).filter(Boolean), M = nw(ue, N.gizmo.transform.position, N.gizmo.mode, n.width, n.height);
    return SC({ corners: w, gizmoBox: M, gizmoMode: N.gizmo.mode, camera: F() });
  }
  function oe(N) {
    var M, ce;
    if (!N.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ue = (ye, D) => _C(N.anchor, ye, D, n.width, n.height), A = Math.max(1, Number(((M = r.menuSize) == null ? void 0 : M.w) || 220)), O = Math.max(1, Number(((ce = r.menuSize) == null ? void 0 : ce.h) || 40)), w = ue(A, O);
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
      const B = ue(D, b);
      B && (u.selectionMenu.left = B.left, u.selectionMenu.top = B.top);
    });
  }
  function I() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function W(N) {
    if (!c || !N || !N.isConnected) return;
    const ue = String(N.getAttribute("data-tip") || "").trim();
    if (!ue) return;
    u.tooltip.text = ue, u.tooltip.visible = !0;
    const A = N;
    i.requestFrame(() => {
      var j, J;
      if (l.target !== A || !c || !(A != null && A.isConnected)) return;
      const O = s.getBoundingClientRect(), w = A.getBoundingClientRect(), M = 8, ce = 12, ye = Math.round(Number(((j = c.getBoundingClientRect()) == null ? void 0 : j.width) || 0)) || 100, D = Math.round(Number(((J = c.getBoundingClientRect()) == null ? void 0 : J.height) || 0)) || 24, b = !!A.closest(".pano-floating-left"), B = !!A.closest(".pano-frame-rail"), p = !!A.closest(".pano-paint-footer") || !!A.closest(".pano-paint-color-float");
      let h = "", x = w.left - O.left + w.width * 0.5 - ye * 0.5, E = w.top - O.top - D - ce;
      if (A.closest(".pano-floating-top") && (E = w.bottom - O.top + ce), b)
        h = "tool-rail", x = w.right - O.left + 10, E = w.top - O.top + w.height * 0.5 - D * 0.5, x = Fe(x, M, Math.max(M, O.width - ye - M)), E = Fe(E, M, Math.max(M, O.height - D - M));
      else if (B)
        h = "frame-rail", x = w.left - O.left - ye - 10, E = w.top - O.top + w.height * 0.5 - D * 0.5, x = Fe(x, M, Math.max(M, O.width - ye - M)), E = Fe(E, M, Math.max(M, O.height - D - M));
      else if (p) {
        h = "footer";
        const ae = A.closest(".pano-paint-footer"), V = ae ? ae.getBoundingClientRect() : w;
        x = V.left - O.left + V.width * 0.5 - ye * 0.5, E = V.bottom - O.top + 5, x = Fe(x, M, Math.max(M, O.width - ye - M)), E = Math.max(M, E);
      }
      x = Fe(x, M, Math.max(M, O.width - ye - M)), E = Math.max(M, E), u.tooltip.left = x, u.tooltip.top = E, u.tooltip.variant = h, u.tooltip.visible = !0;
    });
  }
  return {
    connect(N) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: m,
        currentSpaceCamera: _,
        editorViewInput: g,
        getMultiSelectionGeom: v,
        getSelected: y,
        getSelectedItems: G,
        getSelectedKind: U,
        isCameraSelected: F,
        isErpCamera: P,
        isExternalSticker: $,
        isFreeSpaceView: Q,
        isItemLocked: q,
        isShotItem: le,
        isSpaceView: ve,
        isStickerHidden: he,
        objectGeom: X
      } = N);
    },
    isWorldMenuShown: fe,
    updateSelectionMenu: de,
    hideTooltip: I,
    showTooltipFor: W
  };
}
function cI(e) {
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
  let d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D, b, B, p, h, x, E, j, J, ae, V, re, k, Y, ie, _e, Me, Ce, xe, be, R, z, T, K, C, H, L, S, Z, se, ge, pe, we, Ee, Le, $e, Ge, We, ee, Pe, ne, ke, Ae, Ie, Te, ze, Ue, it, at, St, ut, Ot = null;
  function Ye(Re) {
    l.selection && (l.selection = null, Ae());
    const He = xe(Re);
    Ot = He, R(He, !0), m(), c.state.inertia.active = !1, c.state.inertia.vx = 0, c.state.inertia.vy = 0;
    const Ke = ue(), Mt = N(), ht = Ke || Mt ? hx(it(), Re) : null;
    if (Mt && ht) {
      Re.preventDefault(), ht === "look" ? Ee(He, Re.pointerId) : H(ht, He, Re.pointerId);
      return;
    }
    if (ht === "look") {
      Re.preventDefault(), Z(Re, He, be(Re));
      return;
    }
    if (ht) {
      Re.preventDefault(), Ge(ht, He, Re.pointerId);
      return;
    }
    if ((Ke || Mt) && Re.button !== 0) {
      Re.preventDefault();
      return;
    }
    if (Re.button === 1) {
      Re.preventDefault(), n.mode === "frame" ? se(Re, He) : Z(Re, He, n.mode === "unwrap" ? He : be(Re));
      return;
    }
    if (Re.button !== 0) return;
    if (n.mode === "frame" && (Re.altKey || Re.shiftKey) && !i) {
      L(Re, He);
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      Ee(He, Re.pointerId), Re.preventDefault();
      return;
    }
    if (i) {
      n.mode === "pano" && C(Re, He);
      return;
    }
    if (r && !r.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ne() || ke())) {
      if (!J()) return;
      Pe(), we(Re, He);
      return;
    }
    const wn = de(), Wt = fe(), Tt = wn.length > 1 ? Se(wn) : Wt ? j(Wt) : null;
    if (n.primaryTool === "cursor" && (Re.ctrlKey || Re.metaKey)) {
      n.interaction = { kind: "marquee_select", start: He, current: He }, Te(He), t.setPointerCapture(Re.pointerId), k({ localOnly: !0, reason: ot.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && d() && ue() && K(Re, He) || n.primaryTool === "cursor" && o && O() && We(Re, He)) return;
    if (wn.length > 1 && (Tt != null && Tt.visible)) {
      if ((wn.some((ds) => A(ds)) ? { kind: "none" } : te(Tt, He)).kind === "move") {
        pe(Re, He, wn, Tt);
        return;
      }
    } else if (Wt && (Tt != null && Tt.visible)) {
      const dn = A(Wt) ? { kind: "none" } : te(Tt, He, Wt);
      if (dn.kind === "scale") {
        $e(Re, He, Wt, Tt, dn);
        return;
      }
      if (dn.kind === "scale_x" || dn.kind === "scale_y") {
        T(Re, He, Wt, Tt, dn);
        return;
      }
      if (dn.kind === "rotate") {
        Le(Re, He, Wt, Tt);
        return;
      }
      if (dn.kind === "move") {
        ge(Re, He, Wt, Tt);
        return;
      }
    }
    const Rn = oe(He);
    if (Rn) {
      const dn = n.selectedId !== Rn.item.id;
      if (dn && n.selectedId && (re(), g()), z(Rn.item), s && dn && (n.cutoutAspectOpen = !1), dn && Ue(), ze(), k(), A(Rn.item)) {
        Te(He);
        return;
      }
      S(Re, He, Rn);
      return;
    }
    const us = !!n.selectedId;
    us && (re(), g()), _(), us && Ue(), ze(), k(), n.mode === "pano" && C(Re, He);
  }
  function $t(Re, He) {
    if (!a || !ae.playing || (ae.stop(), Re.kind === "frame_pan")) return;
    if (Re.kind === "frame_orbit") {
      const ht = ve();
      ht && (Re.pivot = X(ht, he(ht), He));
      return;
    }
    if (Re.kind === "world_gizmo") {
      const ht = ee(Re.id);
      Re.camera ? Re.base = v() : ht && (Re.base = Bn(ht, n.frame));
      return;
    }
    if (Re.kind === "move_multi") {
      const ht = Se(Re.items);
      if (!(ht != null && ht.visible)) return;
      Re.offset = { x: He.x - ht.center.x, y: He.y - ht.center.y }, Re.startCenter = { x: ht.center.x, y: ht.center.y };
      for (const wn of Re.stickerSnapshots) {
        const Wt = Re.items.find((Rn) => String((Rn == null ? void 0 : Rn.id) || "") === wn.id), Tt = Wt ? j(Wt) : null;
        Tt != null && Tt.visible && (wn.yaw_deg = Number(V(Wt).yaw_deg || 0), wn.pitch_deg = Number(V(Wt).pitch_deg || 0), wn.center = { x: Tt.center.x, y: Tt.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Re.kind)) return;
    const Ke = j(Re.item);
    if (!(Ke != null && Ke.visible)) return;
    const Mt = V(Re.item);
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
  function jt(Re) {
    const He = xe(Re);
    if (R(He, !0), !n.interaction) {
      I(He), Te(He);
      return;
    }
    Te(He);
    const Ke = n.interaction;
    if (Ot && (He.x !== Ot.x || He.y !== Ot.y)) {
      const Mt = Ot;
      Ot = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Ke.kind) || $t(Ke, Mt);
    }
    if (Ke.kind !== "world_select") {
      if (Ke.kind === "world_gizmo") {
        G(Ke, He);
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
        M(Ke, He, Re);
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
        x(Ke, He);
        return;
      }
      if (Ke.kind === "move_raster_object") {
        B(Ke, He);
        return;
      }
      if (Ke.kind === "scale_raster_object") {
        Me(Ke, He);
        return;
      }
      if (Ke.kind === "move_multi") {
        ye(Ke, He);
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
        _e(Ke, He);
        return;
      }
      if (Ke.kind === "rotate") {
        Y(Ke, He, Re);
        return;
      }
    }
  }
  function tn() {
    var He, Ke, Mt, ht;
    const Re = n.interaction;
    if (!((Re == null ? void 0 : Re.kind) === "roll_frame" && Re.source === "knob")) {
      if ((Re == null ? void 0 : Re.kind) === "space_pan" || (Re == null ? void 0 : Re.kind) === "space_orbit") {
        Q();
        return;
      }
      if ((Re == null ? void 0 : Re.kind) === "world_select" || (Re == null ? void 0 : Re.kind) === "world_gizmo") {
        le(Re);
        return;
      }
      ((He = n.interaction) == null ? void 0 : He.kind) === "paint_stroke" || ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "paint_lasso_fill" ? $() : ((Mt = n.interaction) == null ? void 0 : Mt.kind) === "marquee_select" ? P() : ["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((ht = n.interaction) == null ? void 0 : ht.kind) ? U() : n.interaction && n.interaction.kind !== "view" && q(), n.interaction = null, (Re == null ? void 0 : Re.kind) === "roll_frame" && me(), W(), Re && Re.kind === "view" && F(), Ie(), ze(), Te(n.pointerPos), k();
    }
  }
  function _n() {
    var Re, He, Ke, Mt, ht;
    if (!u()) {
      if (((Re = n.interaction) == null ? void 0 : Re.kind) === "world_select" || ((He = n.interaction) == null ? void 0 : He.kind) === "world_gizmo") {
        le(n.interaction);
        return;
      }
      ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "view" && F(), (((Mt = n.interaction) == null ? void 0 : Mt.kind) === "paint_stroke" || ((ht = n.interaction) == null ? void 0 : ht.kind) === "paint_lasso_fill") && f(), n.interaction = null, W(), Ie(), Te(n.pointerPos), k({ localOnly: !0 });
    }
  }
  function Kt(Re) {
    const He = xe(Re), Ke = R(He, !0);
    n.interaction || (Te(He), Ke && n.mode === "frame" && n.primaryTool === "cursor" && k({ localOnly: !0, reason: ot.OVERLAY }));
  }
  function Ft(Re) {
    if (n.mode === "frame") {
      const He = xe(Re), Ke = oa(Re);
      Ke && Pe(), Ke && N() ? at(He, -Ke) : Ke && St(He, Ke) && k({ localOnly: !0 }), Re.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (m(), ue()) {
        const He = oa(Re);
        He && ut(xe(Re), -He);
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
        cancelViewTransition: m,
        clearSelection: _,
        commitState: g,
        cutoutCamera: v,
        dragFrame: y,
        dragWorldGizmo: G,
        endFrameGesture: U,
        endLookDrag: F,
        endMarquee: P,
        endPaintStroke: $,
        endSpaceDrag: Q,
        endTransform: q,
        endWorldStickerPress: le,
        frameContext: ve,
        frameSpaceView: he,
        frameTarget: X,
        getMultiSelectionGeom: Se,
        getSelected: fe,
        getSelectedItems: de,
        handleHit: te,
        hideTooltip: me,
        hitObjectAt: oe,
        hoverWorldGizmo: I,
        invalidateLivePaintPreviewCaches: W,
        isFreeFrameView: N,
        isFreeSpaceView: ue,
        isItemLocked: A,
        isSpaceView: O,
        moveLassoFill: w,
        moveLookDrag: M,
        moveMarquee: ce,
        moveMulti: ye,
        movePaintStroke: D,
        movePanFrame: b,
        moveRasterObject: B,
        moveRollFrame: p,
        moveSpaceDrag: h,
        moveStrokeGroup: x,
        moveItem: E,
        objectGeom: j,
        paintingShown: J,
        playback: ae,
        poseOf: V,
        pushHistory: re,
        requestDraw: k,
        rotateItem: Y,
        rotateStrokeGroup: ie,
        scaleItem: _e,
        scaleRasterObject: Me,
        scaleStrokeGroup: Ce,
        screenPos: xe,
        screenPosCss: be,
        setPointerPos: R,
        setSelectedItem: z,
        startAxisScale: T,
        startCameraPress: K,
        startEmptyDrag: C,
        startFrameDrag: H,
        startFrameRoll: L,
        startHitMove: S,
        startLookDrag: Z,
        startMiddlePanFrame: se,
        startMove: ge,
        startMultiMove: pe,
        startPaintStroke: we,
        startPanFrame: Ee,
        startRotate: Le,
        startScale: $e,
        startSpaceDrag: Ge,
        startWorldStickerPress: We,
        stickerById: ee,
        stopTimelinePlayback: Pe,
        supportsErpPainting: ne,
        supportsFramePainting: ke,
        syncTimeline: Ae,
        syncViewToggleState: Ie,
        updateCursor: Te,
        updateSelectionMenu: ze,
        updateSidePanel: Ue,
        viewControls: it,
        zoomFrameAt: at,
        zoomFrameViewAt: St,
        zoomSpaceAt: ut
      } = Re);
    },
    onCanvasPointerDown: Ye,
    onCanvasPointerMove: jt,
    onCanvasPointerUp: tn,
    onCanvasPointerCancel: _n,
    onCanvasMouseMove: Kt,
    onCanvasWheel: Ft
  };
}
function uI(e) {
  const { canvas: t, editor: n, viewController: r } = e;
  let i, o, s, a, l, c, d, u, f, m;
  function _(F, P, $) {
    n.interaction = { kind: "view", last: $, lastTs: performance.now() }, r.startDrag($.x, $.y, F.pointerId, performance.now()), u(P), t.setPointerCapture(F.pointerId);
  }
  function g(F, P) {
    if (i()) {
      const $ = m().emptyLeft;
      $ && d($, P, F.pointerId);
      return;
    }
    _(F, P, s(F));
  }
  function v(F, P, $) {
    const Q = performance.now(), q = n.mode === "unwrap" ? P : s($);
    r.moveDrag(q.x, q.y, n.mode === "unwrap" ? "unwrap" : "pano", Q), F.lastTs = Q, F.last = q, o({ localOnly: !0, reason: ot.VIEW });
  }
  function y() {
    c(() => r.endDrag(performance.now()));
  }
  function G(F, P) {
    const $ = l();
    a(F.kind === "space_pan" ? Zh($, P.x - F.last.x, P.y - F.last.y, t.width, t.height, F.depth) : Jh($, P.x - F.last.x, P.y - F.last.y, t.height, F.pivot)), F.last = P;
  }
  function U() {
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
    startLookDrag: _,
    startEmptyDrag: g,
    moveLookDrag: v,
    endLookDrag: y,
    moveSpaceDrag: G,
    endSpaceDrag: U
  };
}
function dI(e) {
  const { canvas: t, editor: n, readOnly: r, state: i } = e;
  let o, s, a, l, c, d, u, f, m, _;
  function g(F, P) {
    const $ = a();
    !$ || r || $.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: $,
      last: P,
      start: {
        yaw_deg: Number($.yaw_deg || 0),
        pitch_deg: Number($.pitch_deg || 0)
      },
      changed: !1
    }, m(P), t.setPointerCapture(F.pointerId));
  }
  function v(F, P) {
    const $ = a(), Q = c($);
    if (!$ || $.locked === !0 || !Q) return;
    const q = n0({
      frame: Q,
      point: P,
      startRollDeg: Number($.roll_deg ?? $.rot_deg ?? 0),
      shiftKey: F.shiftKey,
      altKey: F.altKey,
      allowAlt: !0
    });
    q && (n.interaction = {
      kind: "roll_frame",
      shot: $,
      center: q.center,
      lastAngle: q.lastAngle,
      accumulatedRad: q.accumulatedRad,
      rollGesture: q,
      start: { roll_deg: Number($.roll_deg ?? $.rot_deg ?? 0) },
      changed: !1,
      altStarted: q.source === "alt",
      source: q.source
    }, t.setPointerCapture(F.pointerId), F.preventDefault(), f(), u({ localOnly: !0 }));
  }
  function y(F, P) {
    var ve, he;
    const $ = l(F.shot);
    if (!$ || !F.shot) return;
    const Q = P.x - F.last.x, q = P.y - F.last.y, le = i0(F.shot, {
      dx: Q,
      dy: q,
      focalPx: $.focalPx,
      invertX: ((ve = i.ui_settings) == null ? void 0 : ve.invert_view_x) === !0,
      invertY: ((he = i.ui_settings) == null ? void 0 : he.invert_view_y) === !0
    });
    F.shot.yaw_deg = le.yaw_deg, F.shot.pitch_deg = le.pitch_deg, F.changed = F.changed || Math.abs(Q) > 0 || Math.abs(q) > 0, F.last = P, u({ localOnly: !0 });
  }
  function G(F, P, $) {
    F.source !== "knob" && o(F, P, $);
  }
  function U() {
    n.interaction.changed && (d(), s(), _());
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
        updateSidePanel: _
      } = F);
    },
    startMiddlePanFrame: g,
    startFrameRoll: v,
    movePanFrame: y,
    moveRollFrame: G,
    endFrameGesture: U
  };
}
function fI(e) {
  const { canvas: t, editor: n, node: r } = e;
  let i, o, s, a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he;
  function X(oe, I) {
    const W = n.primaryTool === "mask" ? "mask" : "paint", N = n.primaryTool === "mask" ? n.maskTool : n.paintTool, ue = n.mode === "frame" && q() ? f() : null, A = { kind: "ERP_GLOBAL" }, O = ue ? Q(I, ue, performance.now()) : $(I, performance.now());
    if (!O) {
      le(I);
      return;
    }
    n.interaction = {
      kind: N === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
      layerKind: W,
      _livePreviewToken: Ii("live"),
      stroke: N === "lasso_fill" ? c(W, N, [O], A) : l(W, N, [O], A)
    }, v();
    const w = m(n.interaction);
    if (w)
      if (n.paintEngine.beginStroke(n.interaction.stroke, w), n.interaction.kind === "paint_stroke") {
        const M = n.paintEngine.ensureTarget(w), ce = Number((O == null ? void 0 : O.u) ?? (O == null ? void 0 : O.x) ?? 0), ye = Number((O == null ? void 0 : O.v) ?? (O == null ? void 0 : O.y) ?? 0);
        n.paintEngine.appendStrokePoint(M, ce, ye, n.interaction.stroke);
      } else
        n.paintEngine.updateActiveStroke(n.interaction.stroke, w);
    le(I), t.setPointerCapture(oe.pointerId), F();
  }
  function Se(oe, I, W, N) {
    const ue = typeof I.getCoalescedEvents == "function" ? I.getCoalescedEvents() : [I];
    let A = !1;
    return ue.forEach((O) => {
      const w = P(O);
      if (n.mode === "frame") {
        const M = f(), ce = M ? _(M) : null;
        if (ce) {
          const ye = (w.x - ce.x) / Math.max(1, ce.w), D = (w.y - ce.y) / Math.max(1, ce.h);
          if (!(ye >= 0 && ye <= 1 && D >= 0 && D <= 1)) {
            oe._outOfFrame = !0;
            return;
          }
          oe._outOfFrame && (oe._outOfFrame = !1, W(oe));
        }
      }
      N(oe, w, performance.now()) && (A = !0);
    }), A;
  }
  function fe(oe, I) {
    Se(oe, I, o, a) && F({ localOnly: !0, reason: ot.PAINT });
  }
  function de(oe, I) {
    if (Se(oe, I, i, s)) {
      const W = m(oe);
      W && n.paintEngine.updateActiveStroke(oe.stroke, W), F({ localOnly: !0, reason: ot.PAINT });
    }
  }
  function te() {
    var W, N;
    v();
    const oe = d(n.interaction), I = !!n.interaction._hasCommittedSegments;
    if (oe || I) {
      y();
      const ue = String(((W = n.interaction.stroke) == null ? void 0 : W.actionGroupId) || "").trim();
      if (ue) {
        const O = g().find((w) => String((w == null ? void 0 : w.actionGroupId) || "") === ue);
        O && (O.frame = null);
      }
      const A = m(n.interaction);
      A && (oe ? String(((N = n.interaction.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(A), U()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, A) : n.paintEngine.cancelActiveStroke(A)), G(), u(), he(), ve(), r.setDirtyCanvas(!0, !0), F();
    } else {
      const ue = m(n.interaction);
      ue && n.paintEngine.cancelActiveStroke(ue);
    }
  }
  function me() {
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
        getFrameViewRect: _,
        getPaintingGroupList: g,
        invalidateLivePaintPreviewCaches: v,
        markPaintStrokeVisualsDirty: y,
        pushHistory: G,
        refreshPaintEngineRevisionCache: U,
        requestDraw: F,
        screenPos: P,
        screenPosToErpPoint: $,
        screenPosToFrameAsErpPoint: Q,
        supportsFramePainting: q,
        updateCursor: le,
        updateSelectionMenu: ve,
        updateSidePanel: he
      } = oe);
    },
    startPaintStroke: X,
    movePaintStroke: fe,
    moveLassoFill: de,
    endPaintStroke: te,
    cancelPaintStroke: me
  };
}
function pI(e) {
  const { canvas: t, dragFrames: n, editor: r, editorView: i, runtime: o, state: s } = e;
  let a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se;
  function fe(I, W) {
    return i.gizmoPointer(I, c(), W.x, W.y, t.width, t.height);
  }
  function de(I, W) {
    var M, ce;
    const N = (M = d().space) == null ? void 0 : M.gizmo;
    if (N && fe("hover", W) !== null && fe("down", W))
      return r.interaction = {
        kind: "world_gizmo",
        id: r.worldSelectedId,
        mode: N.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: N.transform,
        base: Bn(Q(), r.frame),
        changed: !1
      }, t.setPointerCapture(I.pointerId), he(W), !0;
    const ue = m(), A = f(), O = ue.length > 1 ? ue.some((ye) => v(ye)) ? "none" : _(u(ue), W).kind : A && !v(A) ? _(U(A), W, A).kind : "none";
    if (O !== "none" && O !== "move") return !1;
    const w = i.pickSticker(c(), W.x, W.y, t.width, t.height);
    return ((ce = q(w)) == null ? void 0 : ce.placement) !== "world" ? !1 : (r.worldSelectedId !== w && (r.selectedId && (F(), l()), $(w), Se(), X(), ve(), P()), r.interaction = { kind: "world_select" }, t.setPointerCapture(I.pointerId), !0);
  }
  function te(I) {
    var ue;
    const N = !!(r.worldSelectedId || g()) && r.primaryTool === "cursor" && y() && !!((ue = d().space) != null && ue.gizmo) ? fe("hover", I) : null;
    N !== r.gizmoAxis && (r.gizmoAxis = N, o.backgroundDirty = !0, P({ localOnly: !0, reason: ot.VIEW }));
  }
  function me(I, W) {
    const N = fe("move", W);
    if (N && I.camera) {
      for (const [A, O] of Object.entries(Hf(I.mode, I.base, I.start, N))) Jt(s.camera, A, r.frame, O);
      le(), I.changed = !0, n.request("sidePanel"), P({ localOnly: !0 });
      return;
    }
    const ue = q(I.id);
    !N || !ue || (QS(ue, r.frame, Hf(I.mode, I.base, I.start, N)), I.changed = !0, G(), n.request("sidePanel"), P({ localOnly: !0 }));
  }
  function oe(I) {
    r.interaction = null, r.gizmoAxis = null, I.kind === "world_gizmo" && (fe("up", r.pointerPos), o.backgroundDirty = !0, I.changed && (F(), a(), Se())), he(r.pointerPos), P();
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
        handleHit: _,
        isCameraSelected: g,
        isItemLocked: v,
        isSpaceView: y,
        markObjectVisualsDirty: G,
        objectGeom: U,
        pushHistory: F,
        requestDraw: P,
        selectWorldSticker: $,
        selectedWorldSticker: Q,
        stickerById: q,
        syncCutoutShot: le,
        syncFloatingViewButtonState: ve,
        updateCursor: he,
        updateSelectionMenu: X,
        updateSidePanel: Se
      } = I);
    },
    worldGizmoPointer: fe,
    startWorldStickerPress: de,
    hoverWorldGizmo: te,
    dragWorldGizmo: me,
    endWorldStickerPress: oe
  };
}
function mI(e) {
  const { editor: t, shotEditor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, m, _, g;
  function v(G, U) {
    G.current = U, f({ localOnly: !0, reason: ot.OVERLAY });
  }
  function y() {
    var P;
    const G = d(t.interaction.start, t.interaction.current), F = [
      ...r === "cutout" ? i().filter(($) => !l($)) : [...o()],
      ...a(),
      ...s()
    ].filter(($) => u(G, c($)));
    m(F, ((P = F[F.length - 1]) == null ? void 0 : P.id) || null), n && F.length && (t.cutoutAspectOpen = !1), g(), _(), f();
  }
  return {
    connect(G) {
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
        updateSelectionMenu: _,
        updateSidePanel: g
      } = G);
    },
    moveMarquee: v,
    endMarquee: y
  };
}
function hI(e) {
  const { canvas: t, editor: n, node: r, shotEditor: i } = e;
  let o, s, a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I;
  function W(V) {
    return n.mode === "frame" ? (() => {
      const re = f();
      return re ? Se(V, re, performance.now()) : null;
    })() : X(V, performance.now());
  }
  function N(V) {
    return Eo(g(V.actionGroupId, V.layerKind));
  }
  function ue(V) {
    return Eo(d(V.actionGroupId, V.layerKind));
  }
  function A(V) {
    return Eo(_().find((re) => String((re == null ? void 0 : re.id) || "") === q(V.rasterObjectId || V.id || "")));
  }
  function O(V, re, k) {
    if (n.mode === "frame" && i) {
      const Y = f(), ie = m(Y);
      if (!Y || !ie) return !1;
      const _e = {
        x: Fe((re - ie.x) / Math.max(1, ie.w), 0, 1),
        y: Fe((k - ie.y) / Math.max(1, ie.h), 0, 1)
      }, Me = u(Y, _e);
      if (!Me) return !1;
      const Ce = Ap(Me);
      I(V, { yaw_deg: Ce.yaw, pitch_deg: Ce.pitch });
    } else if (n.mode === "unwrap") {
      const Y = v(), ie = Fe((re - Y.x) / Math.max(Y.w, 1), 0, 1), _e = Fe((k - Y.y) / Math.max(Y.h, 1), 0, 1);
      I(V, { yaw_deg: Et(ie * 360 - 180), pitch_deg: Fe(90 - _e * 180, -90, 90) });
    } else {
      const Y = fe(re, k), ie = Ap(Y);
      I(V, { yaw_deg: ie.yaw, pitch_deg: ie.pitch });
    }
    return !0;
  }
  function w(V, re, k, Y, ie) {
    n.interaction = F(k) ? {
      kind: "scale_stroke_group",
      item: k,
      center: Y.center,
      startDist: Math.max(1, Math.hypot(re.x - Y.center.x, re.y - Y.center.y)),
      snapshot: N(k),
      frameSnapshot: ue(k),
      cursor: ie.cursor
    } : y(k) ? {
      kind: "scale_raster_object",
      item: k,
      center: Y.center,
      startDist: Math.max(1, Math.hypot(re.x - Y.center.x, re.y - Y.center.y)),
      snapshot: A(k),
      cursor: ie.cursor
    } : {
      kind: "scale",
      item: k,
      center: Y.center,
      startDist: Math.max(1, Math.hypot(re.x - Y.center.x, re.y - Y.center.y)),
      startHFOV: Number(le(k).hFOV_deg || 20),
      startVFOV: Number(le(k).vFOV_deg || 20),
      cursor: ie.cursor
    }, me(re), t.setPointerCapture(V.pointerId);
  }
  function M(V, re, k, Y, ie) {
    n.interaction = {
      kind: ie.kind,
      item: k,
      center: Y.center,
      startDist: Math.max(1, Math.hypot(re.x - Y.center.x, re.y - Y.center.y)),
      startHFOV: Number(le(k).hFOV_deg || 20),
      startVFOV: Number(le(k).vFOV_deg || 20),
      cursor: ie.cursor,
      edge: ie.edge
    }, me(re), t.setPointerCapture(V.pointerId);
  }
  function ce(V, re, k, Y) {
    n.interaction = F(k) ? {
      kind: "rotate_stroke_group",
      item: k,
      center: Y.center,
      startAng: Math.atan2(re.y - Y.center.y, re.x - Y.center.x),
      snapshot: N(k),
      frameSnapshot: ue(k)
    } : {
      kind: "rotate",
      item: k,
      center: Y.center,
      startRot: Number(le(k).rot_deg || le(k).roll_deg || 0),
      startAng: Math.atan2(re.y - Y.center.y, re.x - Y.center.x)
    }, me(re), t.setPointerCapture(V.pointerId);
  }
  function ye(V, re, k, Y) {
    if (F(k)) {
      const ie = W(re);
      n.interaction = {
        kind: "move_stroke_group",
        item: k,
        startUv: ie,
        snapshot: N(k),
        frameSnapshot: ue(k)
      }, me(re), t.setPointerCapture(V.pointerId);
      return;
    }
    if (y(k)) {
      const ie = W(re);
      n.interaction = {
        kind: "move_raster_object",
        item: k,
        startUv: ie,
        snapshot: A(k)
      }, me(re), t.setPointerCapture(V.pointerId);
      return;
    }
    n.interaction = {
      kind: "move",
      item: k,
      offset: { x: re.x - Y.center.x, y: re.y - Y.center.y }
    }, me(re), t.setPointerCapture(V.pointerId);
  }
  function D(V, re, k) {
    n.interaction = {
      kind: F(k.item) ? "move_stroke_group" : y(k.item) ? "move_raster_object" : "move",
      item: k.item,
      offset: { x: re.x - k.geom.center.x, y: re.y - k.geom.center.y },
      startUv: F(k.item) || y(k.item) ? W(re) : null,
      snapshot: F(k.item) ? N(k.item) : y(k.item) ? A(k.item) : null,
      frameSnapshot: F(k.item) ? ue(k.item) : null
    }, me(re), t.setPointerCapture(V.pointerId);
  }
  function b(V, re) {
    const k = re.x - V.offset.x, Y = re.y - V.offset.y;
    O(V.item, k, Y) && (U(V.item) && P(), he({ localOnly: !0 }));
  }
  function B(V, re) {
    var _e, Me;
    const k = W(re);
    if (!k || !V.startUv) return;
    const Y = de(Number(k.u || 0), Number(V.startUv.u || 0)), ie = Number(k.v || 0) - Number(V.startUv.v || 0);
    a((_e = V.item) == null ? void 0 : _e.actionGroupId, Y, ie, V.snapshot, (Me = V.item) == null ? void 0 : Me.layerKind, V.frameSnapshot) && (Q({ rebuildPaintEngine: !1 }), he({ localOnly: !0, reason: ot.PAINT }));
  }
  function p(V, re) {
    var _e, Me;
    const k = W(re);
    if (!k || !V.startUv) return;
    const Y = de(Number(k.u || 0), Number(V.startUv.u || 0)), ie = Number(k.v || 0) - Number(V.startUv.v || 0);
    o(((_e = V.item) == null ? void 0 : _e.rasterObjectId) || ((Me = V.item) == null ? void 0 : Me.id) || "", Y, ie, V.snapshot) && ($(), he({ localOnly: !0, reason: ot.PAINT }));
  }
  function h(V, re) {
    var ie, _e;
    const Y = Math.max(1, Math.hypot(re.x - V.center.x, re.y - V.center.y)) / Math.max(1, Number(V.startDist || 1));
    s(((ie = V.item) == null ? void 0 : ie.rasterObjectId) || ((_e = V.item) == null ? void 0 : _e.id) || "", Y, V.snapshot) && ($(), he({ localOnly: !0, reason: ot.PAINT }));
  }
  function x(V, re) {
    var ie, _e;
    const Y = Math.max(1, Math.hypot(re.x - V.center.x, re.y - V.center.y)) / Math.max(1, Number(V.startDist || 1));
    l((ie = V.item) == null ? void 0 : ie.actionGroupId, Y, 0, V.snapshot, (_e = V.item) == null ? void 0 : _e.layerKind, V.frameSnapshot) && (Q({ rebuildPaintEngine: !1 }), he({ localOnly: !0, reason: ot.PAINT }));
  }
  function E(V, re, k) {
    var ie, _e;
    let Y = (Math.atan2(re.y - V.center.y, re.x - V.center.x) - Number(V.startAng || 0)) * di;
    k.shiftKey && (Y = Math.round(Y / 45) * 45), l((ie = V.item) == null ? void 0 : ie.actionGroupId, 1, Y, V.snapshot, (_e = V.item) == null ? void 0 : _e.layerKind, V.frameSnapshot) && (Q({ rebuildPaintEngine: !1 }), he({ localOnly: !0, reason: ot.PAINT }));
  }
  function j(V, re) {
    const Y = Math.max(1, Math.hypot(re.x - V.center.x, re.y - V.center.y)) / V.startDist;
    V.kind === "scale" ? I(V.item, { hFOV_deg: Fe(V.startHFOV * Y, 1, 179), vFOV_deg: Fe(V.startVFOV * Y, 1, 179) }) : V.kind === "scale_x" ? I(V.item, { hFOV_deg: Fe(V.startHFOV * Y, 1, 179) }) : I(V.item, { vFOV_deg: Fe(V.startVFOV * Y, 1, 179) }), G(V.item) || (V.item.aspect_id = is(V.item)), U(V.item) && P(), he({ localOnly: !0 });
  }
  function J(V, re, k) {
    let ie = (Math.atan2(re.y - V.center.y, re.x - V.center.x) - V.startAng) * di, _e = V.startRot - ie;
    k.shiftKey && (_e = Math.round(_e / 45) * 45), I(V.item, { [U(V.item) ? "rot_deg" : "roll_deg"]: _e }), U(V.item) && P(), he({ localOnly: !0 });
  }
  function ae() {
    let V = !1;
    (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (V = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (V = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (V = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (V = !0), V && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? Q({ rebuildPaintEngine: !0 }) : $()), ve(), c(), r.setDirtyCanvas(!0, !0), te(), oe(), he();
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
        getFrameViewRect: m,
        getRasterObjectList: _,
        getStrokeGroupStrokes: g,
        getUnwrapRect: v,
        isRasterObjectItem: y,
        isSceneSticker: G,
        isStickerItem: U,
        isStrokeGroupItem: F,
        markObjectVisualsDirty: P,
        markPaintCompositeVisualsDirty: $,
        markPaintStrokeVisualsDirty: Q,
        parseRasterObjectSelectionId: q,
        poseOf: le,
        pushHistory: ve,
        requestDraw: he,
        screenPosToErpPoint: X,
        screenPosToFrameAsErpPoint: Se,
        screenToWorldDir: fe,
        shortestWrappedDelta: de,
        syncSidePanelControls: te,
        updateCursor: me,
        updateSelectionMenu: oe,
        writePose: I
      } = V);
    },
    editUvAt: W,
    strokeGroupSnapshot: N,
    strokeGroupFrameSnapshot: ue,
    rasterObjectSnapshot: A,
    writePoseAtScreenPoint: O,
    startScale: w,
    startAxisScale: M,
    startRotate: ce,
    startMove: ye,
    startHitMove: D,
    moveItem: b,
    moveStrokeGroup: B,
    moveRasterObject: p,
    scaleRasterObject: h,
    scaleStrokeGroup: x,
    rotateStrokeGroup: E,
    scaleItem: j,
    rotateItem: J,
    endTransform: ae
  };
}
function gI(e) {
  const { canvas: t, editor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve;
  function he(fe, de) {
    var me, oe;
    const te = y(fe);
    return te != null && te.visible ? { x: Number(((me = te.center) == null ? void 0 : me.x) || 0), y: Number(((oe = te.center) == null ? void 0 : oe.y) || 0) } : { x: de.x, y: de.y };
  }
  function X(fe, de, te, me) {
    n.interaction = {
      kind: "move_multi",
      items: te.map((oe) => oe),
      offset: { x: de.x - me.center.x, y: de.y - me.center.y },
      startCenter: { x: me.center.x, y: me.center.y },
      stickerSnapshots: te.filter((oe) => f(oe)).map((oe) => ({
        id: String(oe.id || ""),
        yaw_deg: Number(U(oe).yaw_deg || 0),
        pitch_deg: Number(U(oe).pitch_deg || 0),
        center: he(oe, de)
      })),
      strokeSnapshots: te.filter((oe) => m(oe)).map((oe) => ({
        id: String(oe.actionGroupId || oe.id || ""),
        layerKind: String(oe.layerKind || "paint"),
        snapshot: q(oe),
        frameSnapshot: Q(oe),
        center: he(oe, de),
        centerUv: d(oe.actionGroupId, oe.layerKind)
      })),
      rasterSnapshots: te.filter((oe) => u(oe)).map((oe) => ({
        id: G(oe.rasterObjectId || oe.id || ""),
        snapshot: F(oe),
        center: he(oe, de),
        centerUv: c(oe)
      }))
    }, le(de), t.setPointerCapture(fe.pointerId);
  }
  function Se(fe, de) {
    var A, O, w, M, ce, ye, D, b, B, p;
    const te = de.x - Number(((A = fe.offset) == null ? void 0 : A.x) || 0), me = de.y - Number(((O = fe.offset) == null ? void 0 : O.y) || 0);
    let oe = !1, I = !1, W = !1;
    const N = te - Number(((w = fe.startCenter) == null ? void 0 : w.x) || te), ue = me - Number(((M = fe.startCenter) == null ? void 0 : M.y) || me);
    for (const h of Array.isArray(fe.stickerSnapshots) ? fe.stickerSnapshots : []) {
      const x = (r === "cutout" ? a() : l()).find((j) => String((j == null ? void 0 : j.id) || "") === String(h.id || ""));
      if (!x || !f(x)) continue;
      const E = {
        x: Number(((ce = h.center) == null ? void 0 : ce.x) || 0) + N,
        y: Number(((ye = h.center) == null ? void 0 : ye.y) || 0) + ue
      };
      ve(x, E.x, E.y) && (oe = !0);
    }
    for (const h of Array.isArray(fe.strokeSnapshots) ? fe.strokeSnapshots : []) {
      const x = {
        x: Number(((D = h.center) == null ? void 0 : D.x) || 0) + N,
        y: Number(((b = h.center) == null ? void 0 : b.y) || 0) + ue
      }, E = s(x), j = h.centerUv || null;
      if (E && j) {
        const J = $(Number(E.u || 0), Number(j.u || 0)), ae = Number(E.v || 0) - Number(j.v || 0);
        o(h.id, J, ae, h.snapshot, h.layerKind, h.frameSnapshot) && (oe = !0, I = !0);
      }
    }
    for (const h of Array.isArray(fe.rasterSnapshots) ? fe.rasterSnapshots : []) {
      const x = {
        x: Number(((B = h.center) == null ? void 0 : B.x) || 0) + N,
        y: Number(((p = h.center) == null ? void 0 : p.y) || 0) + ue
      }, E = s(x), j = h.centerUv || null;
      if (E && j) {
        const J = $(Number(E.u || 0), Number(j.u || 0)), ae = Number(E.v || 0) - Number(j.v || 0);
        i(h.id, J, ae, h.snapshot) && (oe = !0, W = !0);
      }
    }
    oe && (I ? v({ rebuildPaintEngine: !1 }) : W ? g() : _(), P({ localOnly: !0 }));
  }
  return {
    connect(fe) {
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
        markObjectVisualsDirty: _,
        markPaintCompositeVisualsDirty: g,
        markPaintStrokeVisualsDirty: v,
        objectGeom: y,
        parseRasterObjectSelectionId: G,
        poseOf: U,
        rasterObjectSnapshot: F,
        requestDraw: P,
        shortestWrappedDelta: $,
        strokeGroupFrameSnapshot: Q,
        strokeGroupSnapshot: q,
        updateCursor: le,
        writePoseAtScreenPoint: ve
      } = fe);
    },
    startMultiMove: X,
    moveMulti: Se
  };
}
function yI(e) {
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
  let f, m, _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye;
  function D(E, j, J = !1) {
    var _e;
    N();
    const ae = a && r.mode === "frame" ? G() : null, V = ae || P(), re = ae ? "shot" : Q(), k = I();
    if (k && !ce(k) || !k && (!V || re === "stroke" || q(V))) return;
    const Y = (((_e = u.sidePanel) == null ? void 0 : _e.params) || []).find((Me) => Me.key === E);
    if (!Y || Y.enabled === !1) return;
    let ie = Number(j);
    if (Number.isNaN(ie) && (ie = 0), (k || t) && dA.has(E) ? ie = E === "scale" ? Math.max(ie, D0) : ie : ie = Fe(ie, Number(Y.min), Number(Y.max)), E === "yaw_deg" && (ie = Et(ie)), !k && t && E.startsWith("position_")) {
      A(), qS(l.camera, r.frame, E, ie), M(), te(), J && fe();
      return;
    }
    if (k) {
      ZS(k, r.frame, E, ie), he(), M(), te(), J && fe();
      return;
    }
    E === "opacity" ? XS(V, r.frame, ie / 100) : ye(V, { [E]: ie }), a && !le(V) && (E === "hFOV_deg" || E === "vFOV_deg") && (V.aspect_id = is(V)), M(), te(), J && fe();
  }
  function b(E, j) {
    var V;
    const J = (V = u.sidePanel) == null ? void 0 : V.upstream;
    if (!J) return !1;
    const ae = j ? J.lanes.find((re) => re.name === j && re.action === E) : E === "revert-upstream" ? J.revertAll : null;
    return !!ae && !ae.disabled;
  }
  function B(E) {
    const j = I() || P();
    Ct(j) && (N(), oe(j, E) && (de(), he(), fe(), v(), M(), w(), te()));
  }
  async function p(E) {
    var ae, V, re, k, Y, ie, _e;
    const j = E.target.closest("[data-action]");
    if (!j) return;
    const J = String(j.getAttribute("data-action") || "");
    if (J === "coverage-set") {
      const Me = vn(j.getAttribute("data-coverage"));
      if (Me === vn(l.coverage)) return;
      l.coverage = Me, r.coverage = Me, n && (n.value = String(Me)), o ? s.backgroundDirty = !0 : (y(), ue({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), M(), w(), te();
      return;
    }
    if (J === "revert-handoff-lane" || J === "revert-upstream") {
      const Me = j.getAttribute("data-lane") || null;
      if (!b(J, Me)) return;
      J === "revert-handoff-lane" ? (N(), me(Me)) : B(Me);
      return;
    }
    if (J === "toggle-selection-picker") {
      if ((V = (ae = u.sidePanel) == null ? void 0 : ae.selectionPicker) != null && V.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (J === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const Me = String(j.getAttribute("data-selection-id") || "");
      let Ce = null;
      if (Me && (d === "stickers" ? Ce = [...F(), ...c ? l.shots : []].find((xe) => String((xe == null ? void 0 : xe.id) || "") === Me) || null : Ce = ((re = U().find((xe) => {
        var be;
        return String(((be = xe == null ? void 0 : xe.item) == null ? void 0 : be.id) || "") === Me;
      })) == null ? void 0 : re.item) || null), W(Ce || null), Ce && !ve(Ce)) {
        const xe = Se(Ce);
        O(Et(Number(xe.yaw_deg || 0)), Fe(Number(xe.pitch_deg || 0), -89.9, 89.9));
      }
      M(), w(), te();
      return;
    }
    if (J === "copy-state-inline") {
      const Me = P(), Ce = Q();
      if (!Me || Ce === "stroke" || $().length > 1) return;
      const xe = JSON.stringify(a && Ce !== "image" ? m(Me) : _(Se(Me)));
      try {
        await navigator.clipboard.writeText(xe), (k = u.sidePanel) != null && k.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var be;
          (be = u.sidePanel) != null && be.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (J === "set-invert-x") {
      l.ui_settings.invert_view_x = j.getAttribute("data-value") === "1", X(), M(), (Y = i.setDirtyCanvas) == null || Y.call(i, !0, !0), te();
      return;
    }
    if (J === "set-invert-y") {
      l.ui_settings.invert_view_y = j.getAttribute("data-value") === "1", X(), M(), (ie = i.setDirtyCanvas) == null || ie.call(i, !0, !0), te();
      return;
    }
    if (J === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, X(), M(), (_e = i.setDirtyCanvas) == null || _e.call(i, !0, !0), te();
      return;
    }
    if (J === "close-preview") {
      g();
      return;
    }
    if (J === "cancel-close") {
      g();
      return;
    }
    J === "save-close" && (f(), g());
  }
  function h(E) {
    const j = E.target.closest("[data-action='param-input']");
    j && D(String(j.getAttribute("data-param-key") || ""), j.value, !1);
  }
  function x(E) {
    const j = E.target.closest("[data-action='param-input']");
    j && D(String(j.getAttribute("data-param-key") || ""), j.value, !0);
  }
  return {
    connect(E) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: m,
        buildCanonicalSelectedStickerState: _,
        closeEditor: g,
        commitAndRefreshNode: v,
        commitState: y,
        getActiveCutoutShot: G,
        getCutoutInspectorItems: U,
        getList: F,
        getSelected: P,
        getSelectedItems: $,
        getSelectedKind: Q,
        isItemLocked: q,
        isSceneSticker: le,
        isStrokeGroupItem: ve,
        markObjectVisualsDirty: he,
        persistUiSettings: X,
        poseOf: Se,
        pushHistory: fe,
        releaseHiddenSelection: de,
        requestDraw: te,
        revertPortHandoffLane: me,
        revertUpstreamSticker: oe,
        selectedWorldSticker: I,
        setSelectedItem: W,
        stopTimelinePlayback: N,
        syncCoverageChangeToNodePreviews: ue,
        syncCutoutShot: A,
        turnViewTo: O,
        updateSelectionMenu: w,
        updateSidePanel: M,
        worldStickerEditable: ce,
        writePose: ye
      } = E);
    },
    onSidePanelClick: p,
    onSidePanelInput: h,
    onSidePanelChange: x
  };
}
function bI(e) {
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
  let _, g, v, y, G, U, F, P, $, Q, q, le, ve, he, X, Se, fe, de, te, me, oe, I, W, N, ue, A, O, w, M, ce, ye, D, b, B, p, h, x, E, j, J, ae, V, re, k, Y, ie, _e, Me, Ce, xe, be;
  const R = () => {
    if (!t.customPaintSessionStart) return;
    if (Ta(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (AA(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const ee = [
      kn(t.customPaintColor),
      ...t.customPaintHistory.filter((Pe) => !Ta(Pe, t.customPaintColor))
    ];
    t.customPaintHistory = ee.slice(0, 8), t.customPaintSessionStart = null;
  }, z = (ee = !1) => {
    !i || i.hidden || (ee ? R() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, T = () => {
    i && (i.hidden && (t.customPaintSessionStart = kn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function K() {
    j();
  }
  function C(ee) {
    var it, at, St, ut, Ot;
    if ((at = (it = ee.target) == null ? void 0 : it.matches) != null && at.call(it, "[data-confirm-overlay]")) {
      const Ye = (St = f.confirmDialog) == null ? void 0 : St.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ye == null || Ye(!1);
      return;
    }
    const Pe = ee.target.closest("[data-space-mode]");
    if (Pe) {
      B(Pe.getAttribute("data-space-mode"));
      return;
    }
    const ne = ee.target.closest("[data-gizmo-mode]");
    if (ne) {
      t.gizmoMode = ne.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, Ce(), w({ localOnly: !0, reason: ot.VIEW });
      return;
    }
    const ke = ee.target.closest("[data-view]");
    if (ke) {
      if (ke.getAttribute("aria-disabled") === "true") return;
      const Ye = t.mode;
      t.mode = String(ke.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (Ye !== "frame" && (c.frameSafeRect = null), xe(), Ce()), he(), re(), w();
      return;
    }
    const Ae = ee.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const Ye = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ye, (Ye === "paint" || Ye === "mask") && $({ preservePanelValues: !0 }), J(), xe(), Ce(), w();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const Ye = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((Ye === "undo" || Ye === "redo") && Ae.disabled) return;
        Ye === "undo" ? M(-1) : Ye === "redo" ? M(1) : Ye === "clear" ? F() : Ye === "add" || Ye === "add-image" ? g() : Ye === "add-world" ? y() : Ye === "add-or-look" ? _() : Ye === "add-camera" && v();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ye = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ye, $({ preservePanelValues: !0 }), hn[Ye] && (t.activeBrushPresetId = Ye), J(), xe(), Ce(), w();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), $({ preservePanelValues: !0 }), J(), xe(), Ce(), w();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const Ye = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        P(Ye);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const Ye = il.find(($t) => $t.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!Ye) return;
        t.paintColor = kn(Ye.color), z(!0), J();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        ee.preventDefault(), ee.stopPropagation(), i && !i.hidden ? z(!0) : T(), J();
        return;
      }
    }
    const Ie = String(((ut = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : ut.call(Ae, "data-action")) || "");
    if (Ie === "video-play-toggle") {
      if (ee.preventDefault(), ee.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub = !1, k();
      return;
    }
    if (Ie === "video-audio-toggle") {
      ee.preventDefault(), ee.stopPropagation(), _e(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Ie === "video-loop-toggle") {
      if (ee.preventDefault(), ee.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      const Ye = !f.videoTransport.loop;
      f.videoTransport.loop = Ye, m.loop = Ye, V({
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
        const Ye = t.mode === "frame" ? Se() : null;
        if (!Ye || Ye.locked === !0) return;
        b(Ye, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, ae(), ue(), Q(), re(), xe(), Ce(), w();
        return;
      }
      if (Ie === "frame-aspect-custom") {
        const Ye = t.mode === "frame" ? Se() : null, $t = Ae.getAttribute("data-custom-width"), jt = Ae.getAttribute("data-custom-height");
        if (!Ye || !G(Ye, $t, jt)) return;
        f.frameRail.aspectOpen = !1, ae(), ue(), Q(), re(), w();
        return;
      }
      if (Ie === "frame-rotate-90") {
        const Ye = t.mode === "frame" ? Se() : null;
        if (!Ye || Ye.locked === !0) return;
        ye(Ye), f.frameRail.aspectOpen = !1, ae(), ue(), Q(), re(), w();
        return;
      }
      if (Ie === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, Ce(), w();
        return;
      }
      if (Ie === "aspect-set") {
        const Ye = de();
        if (!Ye) return;
        const $t = String(Ae.getAttribute("data-aspect") || "1:1");
        b(Ye, $t), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, ae(), ue(), Q(), Ce(), w();
        return;
      }
      if (Ie === "rotate-90") {
        const Ye = de();
        if (!Ye || oe()) return;
        ye(Ye), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, ae(), ue(), Q(), Ce(), w();
        return;
      }
      if (Ie === "bring-front") {
        U();
        return;
      }
      if (Ie === "send-back") {
        D();
        return;
      }
      if (Ie === "duplicate") {
        ve();
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
        Y();
        return;
      }
      if (Ie === "delete") {
        le();
        return;
      }
    }
    if (Ie === "reset-view") {
      if (t.mode === "frame") return;
      Me(
        { position: x(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: kr, distance: ((Ot = q()) == null ? void 0 : Ot.radius) || Wn },
        { mode: Da(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Ie === "frame-view") {
      if (!I() || Da(t.spaceMode, t.viewTransition) !== "6dof") return;
      X();
      return;
    }
    if (Ie === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, RA(n == null ? void 0 : n.id, t.showGrid), K(), w();
      return;
    }
    if (Ie === "toggle-fullscreen") {
      ee.preventDefault(), ee.stopPropagation(), $e();
      return;
    }
    if (Ie === "toggle-output-preview-size") {
      ee.preventDefault(), ee.stopPropagation();
      const Ye = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ye, E(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ye ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), We(), w();
      return;
    }
    const Te = ee.target.closest("[data-paint-history-index]");
    if (!Te) return;
    const ze = Number(Te.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[ze];
    Ue && (t.customPaintColor = kn(Ue), t.paintColor = kn(Ue), J());
  }
  function H(ee) {
    const Pe = ee.target.closest("[data-video-seek]");
    if (Pe) {
      if (!(m instanceof HTMLVideoElement)) return;
      W.playing && (be.resumeAfterScrub = !0), W.seek(Zr(Number(Pe.value || 0), N()));
      return;
    }
    const ne = ee.target.closest("[data-video-volume]");
    if (ne) {
      if (!(m instanceof HTMLVideoElement)) return;
      const Ie = Fe(Number(ne.value || 0), 0, 1);
      m.volume = Ie, m.muted = Ie <= 1e-4, V({
        hasAudio: f.videoTransport.hasAudio,
        muted: m.muted,
        volume: Ie
      });
      return;
    }
    const ke = ee.target.closest("[data-paint-size-slider]");
    if (ke) {
      if (ke.disabled) return;
      const Ie = Math.max(1, Math.min(120, Math.round(Number(ke.value)))), Te = fe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Te] = Ie, J(), p();
      return;
    }
    const Ae = ee.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Ie = { ...t.customPaintColor, a: Fe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = kn(Ie), t.paintColor = kn(Ie), J();
    }
  }
  function L(ee) {
    var Pe;
    if (ee.target.closest("[data-video-seek]")) {
      if (!(m instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub && W.play(), be.resumeAfterScrub = !1;
      return;
    }
    if (ee.target.closest("[data-video-volume]")) {
      typeof ((Pe = ee.target) == null ? void 0 : Pe.blur) == "function" && ee.target.blur();
      return;
    }
    ee.target.closest("[data-paint-size-slider]") && te();
  }
  function S(ee) {
    const Pe = ee.target.closest("[data-tip]");
    !Pe || !l.contains(Pe) || u.target !== Pe && (u.target = Pe, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === Pe && h(Pe);
    }, 220));
  }
  function Z(ee) {
    var ke, Ae;
    const Pe = ee.target.closest("[data-tip]");
    !Pe || u.target !== Pe || (ee.relatedTarget instanceof Element ? (Ae = (ke = ee.relatedTarget).closest) == null ? void 0 : Ae.call(ke, "[data-tip]") : null) === Pe || me();
  }
  function se(ee, Pe) {
    var ze;
    if (!o) return;
    const ne = o.getBoundingClientRect(), ke = Fe((ee - ne.left) / Math.max(1, ne.width), 0, 1), Ae = 1 - Fe((Pe - ne.top) / Math.max(1, ne.height), 0, 1), Ie = Xc(t.customPaintColor), Te = { ...qc(Ie.h, ke, Ae), a: Number(((ze = t.customPaintColor) == null ? void 0 : ze.a) ?? 1) };
    t.customPaintColor = kn(Te), t.paintColor = kn(Te), J();
  }
  function ge(ee) {
    var Ie;
    if (!s) return;
    const Pe = s.getBoundingClientRect(), ne = Fe((ee - Pe.left) / Math.max(1, Pe.width), 0, 1), ke = Xc(t.customPaintColor), Ae = { ...qc(ne, ke.s, ke.v), a: Number(((Ie = t.customPaintColor) == null ? void 0 : Ie.a) ?? 1) };
    t.customPaintColor = kn(Ae), t.paintColor = kn(Ae), J();
  }
  function pe(ee, Pe) {
    const ne = ee.pointerId;
    Pe(ee);
    const ke = (Ie) => {
      Ie.pointerId === ne && Pe(Ie);
    }, Ae = (Ie) => {
      Ie.pointerId === ne && (window.removeEventListener("pointermove", ke), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", ke), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function we() {
    const ee = !!t.fullscreen;
    Ai(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: ee ? je.fullscreen_close : je.fullscreen,
      label: ee ? "Exit Fullscreen" : "Fullscreen",
      tip: ee ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Ee(ee) {
    const Pe = !!ee;
    t.fullscreen !== Pe && (t.fullscreen = Pe, l.classList.toggle("pano-modal-fullscreen", Pe), Pe ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), K(), we(), A(), w());
  }
  function Le() {
    return document.fullscreenElement === r;
  }
  async function $e() {
    var ee, Pe;
    try {
      if (!document.fullscreenEnabled) {
        Ee(!t.fullscreen);
        return;
      }
      Le() ? await ((Pe = document.exitFullscreen) == null ? void 0 : Pe.call(document)) : await ((ee = r.requestFullscreen) == null ? void 0 : ee.call(r));
    } catch {
      Ee(!t.fullscreen);
    }
  }
  function Ge() {
    document.fullscreenEnabled && Ee(Le());
  }
  function We() {
    const ee = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = ee ? je.fullscreen_close : je.fullscreen, f.outputPreviewToggle.label = ee ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = ee ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(ee) {
      ({
        addCutoutFrame: _,
        addImageSticker: g,
        addStudioCamera: v,
        addToWorld: y,
        applyCutoutAspectCustom: G,
        bringSelectedToFront: U,
        clearAll: F,
        clearPaintingLayer: P,
        clearSelection: $,
        commitAndRefreshNode: Q,
        contentSphere: q,
        deleteSelected: le,
        duplicateSelected: ve,
        forceCursorTool: he,
        frameSpaceContent: X,
        getActiveCutoutShot: Se,
        getBrushPresetIdForTool: fe,
        getSelected: de,
        hidePaintSizePreview: te,
        hideTooltip: me,
        isErpCamera: oe,
        isFreeSpaceView: I,
        playback: W,
        playbackFps: N,
        pushHistory: ue,
        queueVideoTransportLayout: A,
        replaceSelectedImage: O,
        requestDraw: w,
        restoreHistory: M,
        restoreSelectedToInitialPose: ce,
        rotateCutoutAspect90: ye,
        sendSelectedToBack: D,
        setShotAspect: b,
        setSpaceMode: B,
        showPaintSizePreview: p,
        showTooltipFor: h,
        spaceOrigin: x,
        startAnimation: E,
        syncFloatingViewButtonState: j,
        syncPaintUi: J,
        syncSidePanelControls: ae,
        syncVideoTransportState: V,
        syncViewToggleState: re,
        togglePlayback: k,
        toggleSelectedExternalStickerVisibility: Y,
        toggleSelectedLock: ie,
        toggleVideoMuted: _e,
        transitionView: Me,
        updateSelectionMenu: Ce,
        updateSidePanel: xe,
        videoState: be
      } = ee);
    },
    closePaintColorPop: z,
    syncGridToggleButton: K,
    onRootClick: C,
    onRootInput: H,
    onRootChange: L,
    onRootPointerOver: S,
    onRootPointerOut: Z,
    updatePaintColorFromSv: se,
    updatePaintColorFromHue: ge,
    bindDrag: pe,
    syncFullscreenButton: we,
    setFullscreenState: Ee,
    onFullscreenChange: Ge,
    syncOutputPreviewToggleButton: We
  };
}
function vI(e) {
  const {
    editor: t,
    overlay: n,
    readOnly: r,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, m, _, g, v, y, G, U, F, P, $;
  const Q = AC();
  function q(A) {
    var O, w, M, ce, ye;
    if (A.key === "Escape") {
      if (l()) {
        A.preventDefault(), A.stopPropagation(), (O = A.stopImmediatePropagation) == null || O.call(A);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === n) {
        A.preventDefault(), A.stopPropagation(), (w = A.stopImmediatePropagation) == null || w.call(A), (M = document.exitFullscreen) == null || M.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        A.preventDefault(), A.stopPropagation(), (ce = A.stopImmediatePropagation) == null || ce.call(A), G(!1);
        return;
      }
      A.preventDefault(), A.stopPropagation(), (ye = A.stopImmediatePropagation) == null || ye.call(A), d();
    }
  }
  function le(A) {
    const O = String(A.key || ""), w = String(A.code || ""), M = Number(A.keyCode || 0);
    if (!(O === "Delete" || w === "Delete" || M === 46) && !(O === "Backspace" || w === "Backspace" || M === 8)) return;
    const D = A.target, b = ((D == null ? void 0 : D.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || D != null && D.isContentEditable) return;
    if (o.selection) {
      f(), A.preventDefault(), A.stopPropagation();
      return;
    }
    if (m()) {
      A.preventDefault(), A.stopPropagation();
      return;
    }
    v() && (u(), A.preventDefault(), A.stopPropagation());
  }
  function ve(A) {
    if (s.confirmDialog.visible) return !1;
    const O = A.composedPath()[0];
    if (O !== document.body && O !== document.documentElement && !n.contains(O)) return !1;
    const w = ((O == null ? void 0 : O.tagName) || "").toUpperCase();
    return w === "INPUT" ? !uA.has(String(O.type || "text").toLowerCase()) : w !== "TEXTAREA" && w !== "SELECT" && !(O != null && O.isContentEditable);
  }
  function he(A) {
    return A.code !== "Space" || A.ctrlKey || A.metaKey || A.altKey || r || !i || !s.timeline.visible ? !1 : ve(A);
  }
  function X(A) {
    he(A) && (A.preventDefault(), A.stopPropagation(), A.repeat || P());
  }
  function Se(A) {
    he(A) && (A.preventDefault(), A.stopPropagation());
  }
  function fe(A) {
    if (Q.modifiers(A), !!J0(A.code)) {
      if (!ve(A)) {
        te(A.code);
        return;
      }
      A.ctrlKey || A.metaKey || (A.preventDefault(), A.stopPropagation(), a() && (Q.press(A.code, A.timeStamp), A.repeat || c(), U(() => {
      })));
    }
  }
  function de(A) {
    Q.modifiers(A), A.key === "Meta" && me(), te(A.code) && (A.preventDefault(), A.stopPropagation());
  }
  function te(A) {
    return Q.release(A) ? (Q.held || _(), !0) : !1;
  }
  function me() {
    Q.held && (Q.releaseAll(), _());
  }
  function oe() {
    document.hidden && me();
  }
  function I() {
    me();
  }
  function W(A) {
    const O = !!(A.ctrlKey || A.metaKey), w = !!A.altKey;
    t.marqueeModifier === O && t.altModifier === w || (t.marqueeModifier = O, t.altModifier = w, F(), $(t.pointerPos));
  }
  function N() {
    me(), t.marqueeModifier = !1, t.altModifier = !1, F(), $(t.pointerPos);
  }
  function ue(A) {
    if (r || !A.ctrlKey && !A.metaKey) return;
    const O = String(A.key || "").toLowerCase(), w = String(A.code || "");
    if (O !== "z" && w !== "KeyZ") return;
    const M = A.target, ce = ((M == null ? void 0 : M.tagName) || "").toUpperCase();
    if (ce === "INPUT" || ce === "TEXTAREA" || M != null && M.isContentEditable) return;
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
        deleteSelectedWorldSticker: m,
        endFrameKeyMove: _,
        getHistoryCapabilities: g,
        getSelected: v,
        restoreHistory: y,
        setFullscreenState: G,
        startAnimation: U,
        syncFrameRollKnob: F,
        togglePlayback: P,
        updateCursor: $
      } = A);
    },
    moveKeys: Q,
    onEscClose: q,
    onDeleteKey: le,
    onSpaceKey: X,
    onSpaceKeyUp: Se,
    onMoveKeyDown: fe,
    onMoveKeyUp: de,
    onVisibilityChange: oe,
    onContextMenu: I,
    onModifierKeyChange: W,
    onWindowBlur: N,
    onUndoRedoKey: ue
  };
}
const Tp = /* @__PURE__ */ new Map(), Rr = Ag({
  app: Gn,
  api: Xt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Bc,
    markImageFailed: T0,
    markImageLoading: O0,
    markImageReady: F0
  }
});
function Dp(e) {
  if (!bt(e, "background") || !bt(e, "external-sticker")) return null;
  const t = Rr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? zr(t[0]) : null;
}
const SI = Rr.assetSource, _I = Rr.source, wI = Rr.uiImage, kI = Rr.invalidateUiImage, Lp = Rr.loadPreferredExactLinkedImage;
async function xI(e, t, n = {}) {
  var Dd, Ld, Rd, ps, Vd;
  await p0(e, { tolerateOperationFailure: !0 }), Rr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, s = IA(e, t);
  await ad();
  const a = Is(e, "output_preset"), l = Is(e, "coverage"), c = Is(e, "bg_color"), d = Is(e, cA), u = () => {
    const Ve = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Lp(
      e,
      Ve,
      () => Yn(),
      `background:size:${Ve.join("|")}`
    );
  }, f = () => {
    const Ve = u();
    return FA(Ve);
  }, m = (Ve = 2048) => {
    const et = a == null ? void 0 : a.value;
    return OA(et) ? f() || Math.max(1, Math.round(Number(Ve || 2048))) : EA(et, Ve);
  }, _ = e.__panoSceneStateV2 === !0, g = t === "stickers" && _, v = g && e.__panoStudio === !0, y = v, G = t === "cutout" || v, U = (_ ? Dh : Th)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: m(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: vn(l == null ? void 0 : l.value),
    sharedUiSettings: TA(),
    active: zh(e),
    fps: _ ? Dp(e) : null
  });
  Pn(e).liveState = U, Pn(e).liveStateVersion = 0;
  let F = null;
  y ? (F = U.camera && U.camera.visible !== !1 ? Vh(U.camera, 0) : null, U.shots = F ? [{ ...F, position: [...F.position] }] : [], U.active.selected_shot_id = null) : t === "cutout" && (U.shots = Array.isArray(U.shots) ? U.shots.slice(0, 1) : [], U.shots.length || (U.active.selected_shot_id = null));
  const P = t === "cutout" ? (() => {
    var $n;
    const Ve = Array.isArray(U.shots) ? U.shots : [], et = String((($n = U == null ? void 0 : U.active) == null ? void 0 : $n.selected_shot_id) || "");
    return Ve.find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === et) || Ve[0] || null;
  })() : null, $ = P ? Q0(P, !1) : { width: 220, height: 132 }, Q = E0(v ? "studio" : t), q = /* @__PURE__ */ Bi({
    stageStatus: zn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (Q.viewButtons || []).map((Ve) => ({ ...Ve, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Dd = Q.spaceButtons) != null && Dd.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: Q.spaceButtons, frame: Q.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (Q.toolButtons || []).map((Ve) => ({
      ...Ve,
      disabled: !1,
      ...Ve.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(Q.floatingButtons || []).map((Ve) => ({ ...Ve, disabled: !1 })),
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
      customColorCss: er({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: er({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: $.width,
      height: $.height,
      label: P ? "Loading preview" : "Add Frame to preview"
    }
  }), le = { frame: /* @__PURE__ */ Js(0), playing: /* @__PURE__ */ Js(!1) }, ve = document.createElement("div");
  document.body.appendChild(ve);
  const he = ({ intent: Ve, file: et } = {}) => {
    if (Ve === "add-world") {
      $e(et);
      return;
    }
    if (En(et)) {
      if (Ve === "add") {
        Le(et);
        return;
      }
      Ve === "replace" && uy(et);
    }
  }, X = ({ intent: Ve } = {}) => {
  }, Se = hu(aA, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: Q,
    paintSwatches: il.map((Ve) => ({
      id: Ve.id,
      label: Ve.label,
      cssColor: er(Ve.color, 1)
    })),
    uiState: q,
    playhead: le,
    onClose: () => {
      ul();
    },
    onTimeline: (Ve) => ly(Ve),
    onImageFileSelected: he,
    onImageFileCancelled: X
  });
  let fe = null;
  try {
    fe = Se.mount(ve);
  } catch (Ve) {
    try {
      Se.unmount();
    } catch {
    }
    throw ve.remove(), Ve;
  }
  const de = ve.querySelector(".pano-modal-overlay"), te = ve.querySelector(".pano-modal"), me = te == null ? void 0 : te.querySelector("[data-stage-overlay]"), oe = te == null ? void 0 : te.querySelector("[data-stage-background]"), I = te == null ? void 0 : te.querySelector(".pano-stage-wrap"), W = ((Ld = fe == null ? void 0 : fe.getPaintOverlayRefs) == null ? void 0 : Ld.call(fe)) || {}, N = W.cursor || null, ue = W.sizePreview || null, A = W.sizeSample || null;
  if (!de || !te || !me || !oe || !I || !N || !ue || !A)
    throw Se.unmount(), ve.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const O = me.getContext("2d"), w = te.querySelector("[data-side]"), M = te.querySelector("[data-video-element]"), ce = te.querySelector("[data-port-video-element]");
  kl(me, "editor.stage-overlay"), kl(oe, "editor.stage-background"), Pf(M, "editor.video"), Pf(ce, "editor.port-video");
  const ye = te.querySelector(".pano-floating-right"), D = te.querySelector(".pano-floating-top"), b = te.querySelector("[data-tool-rail]"), B = te.querySelector("[data-frame-rail]"), p = te.querySelector("[data-frame-roll-knob]"), h = te.querySelector("[data-paint-dock]"), x = te.querySelector(".pano-video-transport"), E = te.querySelector("[data-selection-menu]"), j = te.querySelector("[data-tooltip]"), J = te.querySelector("[data-camera-preview-host]"), ae = te.querySelector("[data-camera-preview-canvas]");
  kl(ae, "editor.camera-preview");
  const V = te.querySelector("[data-paint-color-row]"), re = te.querySelector("[data-paint-color-pop]"), k = te.querySelector("[data-paint-color-sv]"), Y = te.querySelector("[data-paint-color-sv-cursor]"), ie = te.querySelector("[data-paint-hue-strip]"), _e = te.querySelector("[data-paint-hue-handle]");
  I == null || I.removeAttribute("data-stage-ready"), I == null || I.setAttribute("data-stage-loading-kind", "boot"), me.style.opacity = "1", oe.style.opacity = "0", i && (w == null || w.remove(), te.classList.add("pano-modal-readonly")), te.addEventListener("pointerdown", () => L.wake(), !0), te.addEventListener("pointerdown", (Ve) => {
    var et;
    Ve.target.closest("[data-frame-roll-knob]") || Ot(), !Ve.target.closest(".pano-picker") && (Ve.target.closest("[data-paint-color-row]") || (te.querySelectorAll(".pano-picker-pop").forEach(($n) => {
      $n.hidden = !0;
    }), ne(!0), G && Ce.cutoutAspectOpen && !Ve.target.closest(".pano-aspect-popover") && !Ve.target.closest("[data-action='aspect']") && (Ce.cutoutAspectOpen = !1, Ce.menuMode = "", Ce.menuSize.measured = !1, Oy(), Yn()), (et = q.frameRail) != null && et.aspectOpen && !Ve.target.closest(".pano-frame-aspect-control") && (q.frameRail.aspectOpen = !1)));
  });
  const Ce = {
    mode: "pano",
    selectedId: W0(t, U),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: kr,
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
    coverage: vn(U.coverage),
    historyController: XA(U),
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
    showGrid: LA(e == null ? void 0 : e.id, !0),
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
  t === "stickers" && (Ce.selectedId = null, U.active.selected_sticker_id = null), Ce.selectedIds = Ce.selectedId ? [Ce.selectedId] : [];
  const be = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), K = Gt({ label: "editor.still" });
  K.__panoFrameIdx = 0;
  const C = Gt({ label: "editor.port-still" });
  C.__panoFrameIdx = 0;
  const H = {
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
  }, L = BM({
    requestAnimationFrame: (Ve) => requestAnimationFrame(Ve),
    cancelAnimationFrame: (Ve) => cancelAnimationFrame(Ve),
    draw: (Ve, et) => Ay(Ve, et),
    animating: () => Te()
  }), S = WM({
    requestFrame: (Ve) => L.requestFrame(Ve),
    cancelFrame: (Ve) => L.cancelFrame(Ve),
    tasks: {
      seek: () => Cd.seek(xe.scrubFrame),
      // A drag of the background's Clip range seeks its VIDEO to the time it puts at the playhead.
      background: () => Cd.seek(Ce.frame),
      timeline: () => Py(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        vy(), Yn({ localOnly: !0, reason: ot.STATE });
      },
      sidePanel: () => Od()
    }
  }), Z = uw({
    canvas: oe,
    onReady: () => {
      al(), Yn({ reason: ot.CONTEXT });
    },
    onFailed: () => Yn(),
    onUpdate: () => Yn({ localOnly: !0, reason: ot.MEDIA }),
    onSplats: (Ve) => Yn({ localOnly: !0, reason: BC(Ve) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      at(), al(), Yn({ reason: ot.CONTEXT });
    }
  }), se = Number.parseFloat(
    getComputedStyle(te).getPropertyValue("--pano-float-radius")
  ) || 10, ge = (Ve) => {
    const et = String(Ve || "default");
    me.style.cursor !== et && (me.style.cursor = et);
  }, pe = {
    timer: 0,
    target: null
  }, we = {
    active: !1,
    depth: 0
  }, Ee = yu({
    getView: () => ({ yaw: Ce.viewYaw, pitch: Ce.viewPitch, fov: Ce.viewFov }),
    setView: (Ve) => {
      Ce.viewYaw = Et(Number(Ve.yaw || 0)), Ce.viewPitch = Fe(Number(Ve.pitch || 0), -89.9, 89.9), Ce.viewFov = Fe(Number(Ve.fov || Ce.viewFov || kr), 35, 140);
    },
    getViewportSize: () => {
      const Ve = me.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Ve.width || me.clientWidth || 0)),
        h: Math.max(1, Number(Ve.height || me.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Ve, et;
      return {
        x: (Ve = U.ui_settings) != null && Ve.invert_view_x ? -1 : 1,
        y: (et = U.ui_settings) != null && et.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => St(),
    onInteraction: () => L.requestDraw(ot.VIEW)
  }), {
    addImageStickerFromFile: Le,
    addWorldStickerFromFile: $e,
    applyInitialCutoutFocus: Ge,
    applyVideoTimelineFps: We,
    bindDrag: ee,
    cancelFrameCameraGesture: Pe,
    closePaintColorPop: ne,
    commitState: ke,
    disposeMediaSession: Ae,
    disposeUpstream: Ie,
    editorAnimating: Te,
    endFrameKeyMove: ze,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: it,
    forgetCameraPreviewFrame: at,
    getUnwrapRect: St,
    hidePaintSizePreview: ut,
    hideTooltip: Ot,
    hoverWorldGizmo: Ye,
    isFreeFrameView: $t,
    isFreeSpaceView: jt,
    migrateLegacyEmbeddedAssets: tn,
    onCanvasDragOver: _n,
    onCanvasDrop: Kt,
    onCanvasMouseMove: Ft,
    onCanvasPointerCancel: Re,
    onCanvasPointerDown: He,
    onCanvasPointerMove: Ke,
    onCanvasPointerUp: Mt,
    onCanvasWheel: ht,
    onContextMenu: wn,
    onDeleteKey: Wt,
    onEscClose: Tt,
    onFrameRollKnobDoubleClick: Rn,
    onFrameRollKnobPointerDown: us,
    onFrameRollKnobPointerMove: dn,
    onFullscreenChange: ds,
    onModifierKeyChange: fs,
    onMoveKeyDown: bd,
    onMoveKeyUp: vd,
    onRootChange: ey,
    onRootClick: ty,
    onRootInput: ny,
    onRootPointerOut: ry,
    onRootPointerOver: iy,
    onSidePanelChange: oy,
    onSidePanelClick: sy,
    onSidePanelInput: ay,
    onSpaceKey: Sd,
    onSpaceKeyUp: _d,
    onTimelineAction: ly,
    onUndoRedoKey: wd,
    onVisibilityChange: kd,
    onWindowBlur: xd,
    onWindowDragEnter: Md,
    onWindowDragLeave: Pd,
    onWindowDragOver: Nd,
    onWindowDrop: Ad,
    playback: Cd,
    pushHistory: cy,
    reconcileExternalStickerFromInputs: Id,
    refreshModalVideoSource: sl,
    replaceSelectedImageFromFile: uy,
    requestDraw: Yn,
    restoreView: dy,
    sampleEditorDiagnostics: fy,
    saveView: py,
    setDropCue: my,
    setPointerPos: hy,
    stageResizeObserver: gy,
    stickerCornerOrderSanity: yy,
    stopRenderLoop: by,
    syncCanvasSize: al,
    syncCutoutShot: vy,
    syncFullscreenButton: Sy,
    syncGridToggleButton: _y,
    syncLookAtFrameButtonState: wy,
    syncOutputPreviewToggleButton: ky,
    syncPaintUi: xy,
    syncPaintingLayerAsync: My,
    syncTimeline: Py,
    syncUndoRedoButtons: Ny,
    tick: Ay,
    triggerBackgroundPersistenceOnClose: Cy,
    updateCursor: Ed,
    updatePaintColorFromHue: Iy,
    updatePaintColorFromSv: Ey,
    updateSelectionMenu: Oy,
    updateSidePanel: Od,
    viewControls: Fy,
    watchPixelRatio: Ty
  } = VA({
    api: Xt,
    app: Gn,
    backgroundCanvas: oe,
    bgWidget: c,
    cameraV2: y,
    canvas: me,
    closeEditor: ul,
    comfyMedia: Rr,
    coverageWidget: l,
    ctx: O,
    cutoutPreviewCanvas: ae,
    cutoutPreviewHost: J,
    dragCue: we,
    dragFrames: S,
    editor: Ce,
    editorView: Z,
    floatingRightEl: ye,
    floatingTopEl: D,
    frameGateCssRadius: se,
    frameRailEl: B,
    frameRollKnobEl: p,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: F,
    loadPreferredExactLinkedImage: Lp,
    mediaAssetSource: SI,
    mediaSource: _I,
    mediaUiImage: wI,
    node: e,
    overlay: de,
    paintColorPop: re,
    paintColorRow: V,
    paintColorSv: k,
    paintColorSvCursor: Y,
    paintCursorEl: N,
    paintDockEl: h,
    paintHueHandle: _e,
    paintHueStrip: ie,
    paintSizePreviewEl: ue,
    paintSizePreviewSampleEl: A,
    portStillCanvas: C,
    portVideoEl: ce,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: T,
    rasterImageAlphaCache: z,
    rasterImageCache: R,
    readOnly: r,
    resolveEditorOutputPresetWidth: m,
    root: te,
    runtime: H,
    sceneV2: g,
    scheduler: L,
    selectionMenu: E,
    setCanvasCursor: ge,
    shotEditor: G,
    stageWrap: I,
    state: U,
    stateV2: _,
    stateWidget: d,
    stillCanvas: K,
    studio: v,
    timeline: xe,
    timelinePlayhead: le,
    toolRailEl: b,
    tooltip: pe,
    tooltipEl: j,
    type: t,
    uiState: q,
    videoEl: M,
    videoTimelineFps: Dp,
    videoTransportEl: x,
    viewController: Ee,
    vueModal: fe
  }, [
    BA,
    JA,
    ZA,
    QA,
    eC,
    tC,
    nC,
    rC,
    iC,
    KC,
    WC,
    UC,
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
    aI,
    lI,
    cI,
    uI,
    dI,
    fI,
    pI,
    mI,
    hI,
    gI,
    yI,
    bI,
    vI
  ]);
  yy(), gy.observe(me), Ty();
  const Fd = () => ke();
  r || (Bo(e).flushBeforeQueue = Fd), p == null || p.addEventListener("pointerdown", us), p == null || p.addEventListener("pointermove", dn), p == null || p.addEventListener("pointerup", Ue), p == null || p.addEventListener("pointercancel", () => Pe()), p == null || p.addEventListener("lostpointercapture", () => {
    var Ve;
    ((Ve = Ce.interaction) == null ? void 0 : Ve.source) === "knob" && Pe();
  }), p == null || p.addEventListener("dblclick", Rn), me.onpointerdown = He, me.onpointermove = Ke, me.onpointerup = Mt, me.onpointercancel = Re, me.onlostpointercapture = () => {
    Pe();
  }, me.onauxclick = (Ve) => {
    Ve.button === 1 && Ve.preventDefault();
  }, me.oncontextmenu = (Ve) => {
    (jt() || $t()) && gx(Fy(), 2) && Ve.preventDefault();
  }, me.onmousemove = Ft, me.onpointerleave = () => {
    Ce.interaction || Ye({ x: -1e6, y: -1e6 });
  }, me.onmouseleave = () => {
    hy(Ce.pointerPos, !1), Ed(Ce.pointerPos), Ce.mode === "frame" && Ce.primaryTool === "cursor" && Yn({ localOnly: !0, reason: ot.OVERLAY });
  }, me.onwheel = ht, me.ondragover = _n, me.ondrop = Kt, window.addEventListener("dragenter", Md, !0), window.addEventListener("dragover", Nd, !0), window.addEventListener("dragleave", Pd, !0), window.addEventListener("drop", Ad, !0), w == null || w.addEventListener("click", sy), w == null || w.addEventListener("input", ay), w == null || w.addEventListener("change", oy), _y(), te.addEventListener("click", ty), te.addEventListener("input", ny), te.addEventListener("change", ey), te.addEventListener("pointerup", (Ve) => {
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
  }), te.addEventListener("pointerover", iy), te.addEventListener("pointerout", ry), te.addEventListener("pointerdown", (Ve) => {
    Ve.target.closest("[data-frame-roll-knob]") || Ot();
  }), k && (k.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), ee(Ve, (et) => Ey(et.clientX, et.clientY));
  }), ie && (ie.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), ee(Ve, (et) => Iy(et.clientX));
  }), te.addEventListener("click", (Ve) => {
    var Kr;
    const et = Ve.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!et) return;
    const $n = et.getAttribute("data-action") === "confirm-accept", Ut = (Kr = q.confirmDialog) == null ? void 0 : Kr.resolve;
    q.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ut == null || Ut($n);
  }), document.addEventListener("fullscreenchange", ds), Sy(), ky();
  const ll = e.onConnectionsChange;
  let cl = null, Td = () => {
  };
  !r && t === "stickers" && (Td = d0(e, (Ve = "sync") => {
    Ve === "executed" && (kI(be, li), sl(), g && We()), Id(Ve);
  }, { editor: !0 }), cl = function(...et) {
    typeof ll == "function" && ll.apply(this, et), sl(), Fr(this, "connections");
  }, e.onConnectionsChange = cl), r || Tp.set(String(e.id ?? "0"), () => My());
  let yi = null;
  async function ul() {
    return yi || (yi = (async () => {
      var et, $n, Ut, Kr, Pr, ms, $d, hs, zd;
      const Ve = xw(e);
      return Ve && (Ve.open = !1), Tp.delete(String(e.id ?? "0")), it(), ze(), r || ke(), py(), document.fullscreenElement === de && ((et = document.exitFullscreen) == null || et.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", ds), Pn(e).liveState = null, (Ve == null ? void 0 : Ve.flushBeforeQueue) === Fd && (Ve.flushBeforeQueue = null), (Kr = (Ut = ($n = Oc(e)) == null ? void 0 : $n.dom) == null ? void 0 : Ut.requestDraw) == null || Kr.call(Ut), (ms = (Pr = e.graph) == null ? void 0 : Pr.setDirtyCanvas) == null || ms.call(Pr, !0, !0), (zd = (hs = ($d = Gn) == null ? void 0 : $d.canvas) == null ? void 0 : hs.setDirty) == null || zd.call(hs, !0, !0), Ot(), S.cancel(), by(), Ae(), Ie(), Z.dispose(), my(!1), window.removeEventListener("keydown", Tt, !0), window.removeEventListener("keydown", Wt, !0), window.removeEventListener("keydown", Sd, !0), window.removeEventListener("keyup", _d, !0), window.removeEventListener("keydown", bd, !0), window.removeEventListener("keyup", vd, !0), document.removeEventListener("visibilitychange", kd), window.removeEventListener("contextmenu", wn, !0), window.removeEventListener("keydown", fs, !0), window.removeEventListener("keyup", fs, !0), window.removeEventListener("blur", xd), window.removeEventListener("keydown", wd, !0), window.removeEventListener("dragenter", Md, !0), window.removeEventListener("dragover", Nd, !0), window.removeEventListener("dragleave", Pd, !0), window.removeEventListener("drop", Ad, !0), !r && t === "stickers" && (e.onConnectionsChange === cl && (e.onConnectionsChange = ll), Td()), Se.unmount(), ve.remove(), Cy(), yi = null, !0;
    })().catch((Ve) => (console.error("[PanoramaCutoutSync] closeEditor failed", Ve), yi = null, !1)), yi);
  }
  window.addEventListener("keydown", Tt, !0), window.addEventListener("keydown", Wt, !0), window.addEventListener("keydown", Sd, !0), window.addEventListener("keyup", _d, !0), window.addEventListener("keydown", bd, !0), window.addEventListener("keyup", vd, !0), document.addEventListener("visibilitychange", kd), window.addEventListener("contextmenu", wn, !0), window.addEventListener("keydown", fs, !0), window.addEventListener("keyup", fs, !0), window.addEventListener("blur", xd), window.addEventListener("keydown", wd, !0), de.addEventListener("pointerdown", (Ve) => {
    Ve.target === de && ul();
  });
  function Vn(Ve, et, { rollbackState: $n = !1 } = {}) {
    let Ut = "";
    try {
      $n && (Ut = JSON.stringify(U)), et();
    } catch (Kr) {
      if (Ut)
        try {
          const Pr = JSON.parse(Ut);
          Object.keys(U).forEach((ms) => delete U[ms]), Object.assign(U, Pr), r || ke();
        } catch (Pr) {
          console.error(`[PanoramaStickers] editor boot step "${Ve}" rollback failed`, Pr);
        }
      q.stageWarningDetail = `boot:${Ve}`, console.error(`[PanoramaStickers] editor boot step "${Ve}" failed`, Kr);
    }
  }
  Vn("view", dy), Vn("cutout-focus", Ge), !r && t === "stickers" && Vn("external-sticker-sync", () => Id("open"), { rollbackState: !0 }), tn().catch((Ve) => {
    q.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Ve);
  }), Vn("history", () => cy({ initial: !0 })), Vn("undo-redo", Ny), Vn("paint-ui", xy), Vn("side-panel", Od), Vn("look-at-frame", wy), Vn("video-source", sl), Vn("canvas-size", al), Vn("cursor", () => Ed(Ce.pointerPos)), Bo(e).open = !0, (Vd = (ps = (Rd = Oc(e)) == null ? void 0 : Rd.dom) == null ? void 0 : ps.requestDraw) == null || Vd.call(ps), Yn(), fy();
}
Gn.registerExtension(Px({
  app: Gn,
  openEditor: xI,
  attachStickers: GM,
  attachCutout: KM,
  attachPreview: HM,
  restoreOutput: CM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: pA
}));
