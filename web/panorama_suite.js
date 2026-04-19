import * as ho from "../../scripts/app.js";
import { app as br } from "../../scripts/app.js";
import { api as bn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function jc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ct = {}, pi = [], zn = () => {
}, Of = () => !1, Wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yo = (e) => e.startsWith("onUpdate:"), Wt = Object.assign, zc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, nm = Object.prototype.hasOwnProperty, Qe = (e, t) => nm.call(e, t), Re = Array.isArray, gi = (e) => ba(e) === "[object Map]", Ff = (e) => ba(e) === "[object Set]", ku = (e) => ba(e) === "[object Date]", He = (e) => typeof e == "function", Nt = (e) => typeof e == "string", $n = (e) => typeof e == "symbol", it = (e) => e !== null && typeof e == "object", Vf = (e) => (it(e) || He(e)) && He(e.then) && He(e.catch), Hf = Object.prototype.toString, ba = (e) => Hf.call(e), rm = (e) => ba(e).slice(8, -1), jf = (e) => ba(e) === "[object Object]", $c = (e) => Nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wi = /* @__PURE__ */ jc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, im = /-\w/g, Jt = qo(
  (e) => e.replace(im, (t) => t.slice(1).toUpperCase())
), am = /\B([A-Z])/g, $r = qo(
  (e) => e.replace(am, "-$1").toLowerCase()
), Xo = qo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gs = qo(
  (e) => e ? `on${Xo(e)}` : ""
), Vn = (e, t) => !Object.is(e, t), Ws = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, zf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, om = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Pu;
const Zo = () => Pu || (Pu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Nt(i) ? um(i) : Vt(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (Nt(e) || it(e))
    return e;
}
const sm = /;(?![^(]*\))/g, cm = /:([^]+)/, lm = /\/\*[^]*?\*\//g;
function um(e) {
  const t = {};
  return e.replace(lm, "").split(sm).forEach((n) => {
    if (n) {
      const i = n.split(cm);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function wt(e) {
  let t = "";
  if (Nt(e))
    t = e;
  else if (Re(e))
    for (let n = 0; n < e.length; n++) {
      const i = wt(e[n]);
      i && (t += i + " ");
    }
  else if (it(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dm = /* @__PURE__ */ jc(fm);
function $f(e) {
  return !!e || e === "";
}
function hm(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Bc(e[i], t[i]);
  return n;
}
function Bc(e, t) {
  if (e === t) return !0;
  let n = ku(e), i = ku(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = $n(e), i = $n(t), n || i)
    return e === t;
  if (n = Re(e), i = Re(t), n || i)
    return n && i ? hm(e, t) : !1;
  if (n = it(e), i = it(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const u in e) {
      const d = e.hasOwnProperty(u), f = t.hasOwnProperty(u);
      if (d && !f || !d && f || !Bc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Bf = (e) => !!(e && e.__v_isRef === !0), St = (e) => Nt(e) ? e : e == null ? "" : Re(e) || it(e) && (e.toString === Hf || !He(e.toString)) ? Bf(e) ? St(e.value) : JSON.stringify(e, Uf, 2) : String(e), Uf = (e, t) => Bf(t) ? Uf(e, t.value) : gi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[Ys(i, l) + " =>"] = a, n),
    {}
  )
} : Ff(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ys(n))
} : $n(t) ? Ys(t) : it(t) && !Re(t) && !jf(t) ? String(t) : t, Ys = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $n(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let rn;
class pm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = rn, !t && rn && (this.index = (rn.scopes || (rn.scopes = [])).push(
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
      const n = rn;
      try {
        return rn = this, t();
      } finally {
        rn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = rn, rn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (rn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function gm() {
  return rn;
}
let ft;
const qs = /* @__PURE__ */ new WeakSet();
class Kf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, rn && rn.active && rn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qs.has(this) && (qs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cu(this), Yf(this);
    const t = ft, n = Cn;
    ft = this, Cn = !0;
    try {
      return this.fn();
    } finally {
      qf(this), ft = t, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Gc(t);
      this.deps = this.depsTail = void 0, Cu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    vc(this) && this.run();
  }
  get dirty() {
    return vc(this);
  }
}
let Gf = 0, Yi, qi;
function Wf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qi, qi = e;
    return;
  }
  e.next = Yi, Yi = e;
}
function Uc() {
  Gf++;
}
function Kc() {
  if (--Gf > 0)
    return;
  if (qi) {
    let t = qi;
    for (qi = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Yi; ) {
    let t = Yi;
    for (Yi = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Yf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Gc(i), mm(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function vc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sa) || (e.globalVersion = sa, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !vc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ft, i = Cn;
  ft = e, Cn = !0;
  try {
    Yf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Vn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ft = n, Cn = i, qf(e), e.flags &= -3;
  }
}
function Gc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Gc(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function mm(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Cn = !0;
const Zf = [];
function tr() {
  Zf.push(Cn), Cn = !1;
}
function nr() {
  const e = Zf.pop();
  Cn = e === void 0 ? !0 : e;
}
function Cu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ft;
    ft = void 0;
    try {
      t();
    } finally {
      ft = n;
    }
  }
}
let sa = 0;
class vm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ft || !Cn || ft === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ft)
      n = this.activeLink = new vm(ft, this), ft.deps ? (n.prevDep = ft.depsTail, ft.depsTail.nextDep = n, ft.depsTail = n) : ft.deps = ft.depsTail = n, Jf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ft.depsTail, n.nextDep = void 0, ft.depsTail.nextDep = n, ft.depsTail = n, ft.deps === n && (ft.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, sa++, this.notify(t);
  }
  notify(t) {
    Uc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Kc();
    }
  }
}
function Jf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Jf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const bc = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ Symbol(
  ""
), yc = /* @__PURE__ */ Symbol(
  ""
), ca = /* @__PURE__ */ Symbol(
  ""
);
function Ut(e, t, n) {
  if (Cn && ft) {
    let i = bc.get(e);
    i || bc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Wc()), a.map = i, a.key = n), a.track();
  }
}
function Qn(e, t, n, i, a, l) {
  const u = bc.get(e);
  if (!u) {
    sa++;
    return;
  }
  const d = (f) => {
    f && f.trigger();
  };
  if (Uc(), t === "clear")
    u.forEach(d);
  else {
    const f = Re(e), v = f && $c(n);
    if (f && n === "length") {
      const b = Number(i);
      u.forEach((h, w) => {
        (w === "length" || w === ca || !$n(w) && w >= b) && d(h);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && d(u.get(n)), v && d(u.get(ca)), t) {
        case "add":
          f ? v && d(u.get("length")) : (d(u.get(Rr)), gi(e) && d(u.get(yc)));
          break;
        case "delete":
          f || (d(u.get(Rr)), gi(e) && d(u.get(yc)));
          break;
        case "set":
          gi(e) && d(u.get(Rr));
          break;
      }
  }
  Kc();
}
function oi(e) {
  const t = /* @__PURE__ */ Je(e);
  return t === e ? t : (Ut(t, "iterate", ca), /* @__PURE__ */ yn(e) ? t : t.map(An));
}
function Jo(e) {
  return Ut(e = /* @__PURE__ */ Je(e), "iterate", ca), e;
}
function Rn(e, t) {
  return /* @__PURE__ */ rr(e) ? yi(/* @__PURE__ */ Or(e) ? An(t) : t) : An(t);
}
const bm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xs(this, Symbol.iterator, (e) => Rn(this, e));
  },
  concat(...e) {
    return oi(this).concat(
      ...e.map((t) => Re(t) ? oi(t) : t)
    );
  },
  entries() {
    return Xs(this, "entries", (e) => (e[1] = Rn(this, e[1]), e));
  },
  every(e, t) {
    return Gn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Rn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Gn(
      this,
      "find",
      e,
      t,
      (n) => Rn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Gn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gn(
      this,
      "findLast",
      e,
      t,
      (n) => Rn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Gn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zs(this, "includes", e);
  },
  indexOf(...e) {
    return Zs(this, "indexOf", e);
  },
  join(e) {
    return oi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Di(this, "pop");
  },
  push(...e) {
    return Di(this, "push", e);
  },
  reduce(e, ...t) {
    return Au(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Au(this, "reduceRight", e, t);
  },
  shift() {
    return Di(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Di(this, "splice", e);
  },
  toReversed() {
    return oi(this).toReversed();
  },
  toSorted(e) {
    return oi(this).toSorted(e);
  },
  toSpliced(...e) {
    return oi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Di(this, "unshift", e);
  },
  values() {
    return Xs(this, "values", (e) => Rn(this, e));
  }
};
function Xs(e, t, n) {
  const i = Jo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const ym = Array.prototype;
function Gn(e, t, n, i, a, l) {
  const u = Jo(e), d = u !== e && !/* @__PURE__ */ yn(e), f = u[t];
  if (f !== ym[t]) {
    const h = f.apply(e, l);
    return d ? An(h) : h;
  }
  let v = n;
  u !== e && (d ? v = function(h, w) {
    return n.call(this, Rn(e, h), w, e);
  } : n.length > 2 && (v = function(h, w) {
    return n.call(this, h, w, e);
  }));
  const b = f.call(u, v, i);
  return d && a ? a(b) : b;
}
function Au(e, t, n, i) {
  const a = Jo(e), l = a !== e && !/* @__PURE__ */ yn(e);
  let u = n, d = !1;
  a !== e && (l ? (d = i.length === 0, u = function(v, b, h) {
    return d && (d = !1, v = Rn(e, v)), n.call(this, v, Rn(e, b), h, e);
  }) : n.length > 3 && (u = function(v, b, h) {
    return n.call(this, v, b, h, e);
  }));
  const f = a[t](u, ...i);
  return d ? Rn(e, f) : f;
}
function Zs(e, t, n) {
  const i = /* @__PURE__ */ Je(e);
  Ut(i, "iterate", ca);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Xc(n[0]) ? (n[0] = /* @__PURE__ */ Je(n[0]), i[t](...n)) : a;
}
function Di(e, t, n = []) {
  tr(), Uc();
  const i = (/* @__PURE__ */ Je(e))[t].apply(e, n);
  return Kc(), nr(), i;
}
const _m = /* @__PURE__ */ jc("__proto__,__v_isRef,__isVue"), Qf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($n)
);
function xm(e) {
  $n(e) || (e = String(e));
  const t = /* @__PURE__ */ Je(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class ed {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return i === (a ? l ? Tm : id : l ? rd : nd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = Re(t);
    if (!a) {
      let f;
      if (u && (f = bm[n]))
        return f;
      if (n === "hasOwnProperty")
        return xm;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Gt(t) ? t : i
    );
    if (($n(n) ? Qf.has(n) : _m(n)) || (a || Ut(t, "get", n), l))
      return d;
    if (/* @__PURE__ */ Gt(d)) {
      const f = u && $c(n) ? d : d.value;
      return a && it(f) ? /* @__PURE__ */ xc(f) : f;
    }
    return it(d) ? a ? /* @__PURE__ */ xc(d) : /* @__PURE__ */ Qo(d) : d;
  }
}
class td extends ed {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const u = Re(t) && $c(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ rr(l);
      if (!/* @__PURE__ */ yn(i) && !/* @__PURE__ */ rr(i) && (l = /* @__PURE__ */ Je(l), i = /* @__PURE__ */ Je(i)), !u && /* @__PURE__ */ Gt(l) && !/* @__PURE__ */ Gt(i))
        return v || (l.value = i), !0;
    }
    const d = u ? Number(n) < t.length : Qe(t, n), f = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Gt(t) ? t : a
    );
    return t === /* @__PURE__ */ Je(a) && (d ? Vn(i, l) && Qn(t, "set", n, i) : Qn(t, "add", n, i)), f;
  }
  deleteProperty(t, n) {
    const i = Qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && Qn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!$n(n) || !Qf.has(n)) && Ut(t, "has", n), i;
  }
  ownKeys(t) {
    return Ut(
      t,
      "iterate",
      Re(t) ? "length" : Rr
    ), Reflect.ownKeys(t);
  }
}
class wm extends ed {
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
const Sm = /* @__PURE__ */ new td(), Nm = /* @__PURE__ */ new wm(), Mm = /* @__PURE__ */ new td(!0);
const _c = (e) => e, Ga = (e) => Reflect.getPrototypeOf(e);
function km(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ Je(a), u = gi(l), d = e === "entries" || e === Symbol.iterator && u, f = e === "keys" && u, v = a[e](...i), b = n ? _c : t ? yi : An;
    return !t && Ut(
      l,
      "iterate",
      f ? yc : Rr
    ), Wt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: h, done: w } = v.next();
          return w ? { value: h, done: w } : {
            value: d ? [b(h[0]), b(h[1])] : b(h),
            done: w
          };
        }
      }
    );
  };
}
function Wa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pm(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ Je(l), d = /* @__PURE__ */ Je(a);
      e || (Vn(a, d) && Ut(u, "get", a), Ut(u, "get", d));
      const { has: f } = Ga(u), v = t ? _c : e ? yi : An;
      if (f.call(u, a))
        return v(l.get(a));
      if (f.call(u, d))
        return v(l.get(d));
      l !== u && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ut(/* @__PURE__ */ Je(a), "iterate", Rr), a.size;
    },
    has(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ Je(l), d = /* @__PURE__ */ Je(a);
      return e || (Vn(a, d) && Ut(u, "has", a), Ut(u, "has", d)), a === d ? l.has(a) : l.has(a) || l.has(d);
    },
    forEach(a, l) {
      const u = this, d = u.__v_raw, f = /* @__PURE__ */ Je(d), v = t ? _c : e ? yi : An;
      return !e && Ut(f, "iterate", Rr), d.forEach((b, h) => a.call(l, v(b), v(h), u));
    }
  };
  return Wt(
    n,
    e ? {
      add: Wa("add"),
      set: Wa("set"),
      delete: Wa("delete"),
      clear: Wa("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ Je(this), u = Ga(l), d = /* @__PURE__ */ Je(a), f = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ rr(a) ? d : a;
        return u.has.call(l, f) || Vn(a, f) && u.has.call(l, a) || Vn(d, f) && u.has.call(l, d) || (l.add(f), Qn(l, "add", f, f)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ yn(l) && !/* @__PURE__ */ rr(l) && (l = /* @__PURE__ */ Je(l));
        const u = /* @__PURE__ */ Je(this), { has: d, get: f } = Ga(u);
        let v = d.call(u, a);
        v || (a = /* @__PURE__ */ Je(a), v = d.call(u, a));
        const b = f.call(u, a);
        return u.set(a, l), v ? Vn(l, b) && Qn(u, "set", a, l) : Qn(u, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ Je(this), { has: u, get: d } = Ga(l);
        let f = u.call(l, a);
        f || (a = /* @__PURE__ */ Je(a), f = u.call(l, a)), d && d.call(l, a);
        const v = l.delete(a);
        return f && Qn(l, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Je(this), l = a.size !== 0, u = a.clear();
        return l && Qn(
          a,
          "clear",
          void 0,
          void 0
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = km(a, e, t);
  }), n;
}
function Yc(e, t) {
  const n = Pm(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Qe(n, a) && a in i ? n : i,
    a,
    l
  );
}
const Cm = {
  get: /* @__PURE__ */ Yc(!1, !1)
}, Am = {
  get: /* @__PURE__ */ Yc(!1, !0)
}, Im = {
  get: /* @__PURE__ */ Yc(!0, !1)
};
const nd = /* @__PURE__ */ new WeakMap(), rd = /* @__PURE__ */ new WeakMap(), id = /* @__PURE__ */ new WeakMap(), Tm = /* @__PURE__ */ new WeakMap();
function Em(e) {
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
function Dm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Em(rm(e));
}
// @__NO_SIDE_EFFECTS__
function Qo(e) {
  return /* @__PURE__ */ rr(e) ? e : qc(
    e,
    !1,
    Sm,
    Cm,
    nd
  );
}
// @__NO_SIDE_EFFECTS__
function Lm(e) {
  return qc(
    e,
    !1,
    Mm,
    Am,
    rd
  );
}
// @__NO_SIDE_EFFECTS__
function xc(e) {
  return qc(
    e,
    !0,
    Nm,
    Im,
    id
  );
}
function qc(e, t, n, i, a) {
  if (!it(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = Dm(e);
  if (l === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const d = new Proxy(
    e,
    l === 2 ? i : n
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  return /* @__PURE__ */ rr(e) ? /* @__PURE__ */ Or(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Je(t) : e;
}
function Rm(e) {
  return !Qe(e, "__v_skip") && Object.isExtensible(e) && zf(e, "__v_skip", !0), e;
}
const An = (e) => it(e) ? /* @__PURE__ */ Qo(e) : e, yi = (e) => it(e) ? /* @__PURE__ */ xc(e) : e;
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function wc(e) {
  return Om(e, !1);
}
function Om(e, t) {
  return /* @__PURE__ */ Gt(e) ? e : new Fm(e, t);
}
class Fm {
  constructor(t, n) {
    this.dep = new Wc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Je(t), this._value = n ? t : An(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ rr(t);
    t = i ? t : /* @__PURE__ */ Je(t), Vn(t, n) && (this._rawValue = t, this._value = i ? t : An(t), this.dep.trigger());
  }
}
function Lr(e) {
  return /* @__PURE__ */ Gt(e) ? e.value : e;
}
const Vm = {
  get: (e, t, n) => t === "__v_raw" ? e : Lr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Gt(a) && !/* @__PURE__ */ Gt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function ad(e) {
  return /* @__PURE__ */ Or(e) ? e : new Proxy(e, Vm);
}
class Hm {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Wc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ft !== this)
      return Wf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function jm(e, t, n = !1) {
  let i, a;
  return He(e) ? i = e : (i = e.get, a = e.set), new Hm(i, a, n);
}
const Ya = {}, No = /* @__PURE__ */ new WeakMap();
let Tr;
function zm(e, t = !1, n = Tr) {
  if (n) {
    let i = No.get(n);
    i || No.set(n, i = []), i.push(e);
  }
}
function $m(e, t, n = ct) {
  const { immediate: i, deep: a, once: l, scheduler: u, augmentJob: d, call: f } = n, v = (I) => a ? I : /* @__PURE__ */ yn(I) || a === !1 || a === 0 ? er(I, 1) : er(I);
  let b, h, w, S, P = !1, k = !1;
  if (/* @__PURE__ */ Gt(e) ? (h = () => e.value, P = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ Or(e) ? (h = () => v(e), P = !0) : Re(e) ? (k = !0, P = e.some((I) => /* @__PURE__ */ Or(I) || /* @__PURE__ */ yn(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ Gt(I))
      return I.value;
    if (/* @__PURE__ */ Or(I))
      return v(I);
    if (He(I))
      return f ? f(I, 2) : I();
  })) : He(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (w) {
      tr();
      try {
        w();
      } finally {
        nr();
      }
    }
    const I = Tr;
    Tr = b;
    try {
      return f ? f(e, 3, [S]) : e(S);
    } finally {
      Tr = I;
    }
  } : h = zn, t && a) {
    const I = h, G = a === !0 ? 1 / 0 : a;
    h = () => er(I(), G);
  }
  const V = gm(), R = () => {
    b.stop(), V && V.active && zc(V.effects, b);
  };
  if (l && t) {
    const I = t;
    t = (...G) => {
      I(...G), R();
    };
  }
  let O = k ? new Array(e.length).fill(Ya) : Ya;
  const T = (I) => {
    if (!(!(b.flags & 1) || !b.dirty && !I))
      if (t) {
        const G = b.run();
        if (a || P || (k ? G.some((J, ae) => Vn(J, O[ae])) : Vn(G, O))) {
          w && w();
          const J = Tr;
          Tr = b;
          try {
            const ae = [
              G,
              // pass undefined as the old value when it's changed for the first time
              O === Ya ? void 0 : k && O[0] === Ya ? [] : O,
              S
            ];
            O = G, f ? f(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            Tr = J;
          }
        }
      } else
        b.run();
  };
  return d && d(T), b = new Kf(h), b.scheduler = u ? () => u(T, !1) : T, S = (I) => zm(I, !1, b), w = b.onStop = () => {
    const I = No.get(b);
    if (I) {
      if (f)
        f(I, 4);
      else
        for (const G of I) G();
      No.delete(b);
    }
  }, t ? i ? T(!0) : O = b.run() : u ? u(T.bind(null, !0), !0) : b.run(), R.pause = b.pause.bind(b), R.resume = b.resume.bind(b), R.stop = R, R;
}
function er(e, t = 1 / 0, n) {
  if (t <= 0 || !it(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Gt(e))
    er(e.value, t, n);
  else if (Re(e))
    for (let i = 0; i < e.length; i++)
      er(e[i], t, n);
  else if (Ff(e) || gi(e))
    e.forEach((i) => {
      er(i, t, n);
    });
  else if (jf(e)) {
    for (const i in e)
      er(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && er(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ya(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    es(a, t, n);
  }
}
function Bn(e, t, n, i) {
  if (He(e)) {
    const a = ya(e, t, n, i);
    return a && Vf(a) && a.catch((l) => {
      es(l, t, n);
    }), a;
  }
  if (Re(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Bn(e[l], t, n, i));
    return a;
  }
}
function es(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: u } = t && t.appContext.config || ct;
  if (t) {
    let d = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const b = d.ec;
      if (b) {
        for (let h = 0; h < b.length; h++)
          if (b[h](e, f, v) === !1)
            return;
      }
      d = d.parent;
    }
    if (l) {
      tr(), ya(l, null, 10, [
        e,
        f,
        v
      ]), nr();
      return;
    }
  }
  Bm(e, n, a, i, u);
}
function Bm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Xt = [];
let Ln = -1;
const mi = [];
let gr = null, li = 0;
const od = /* @__PURE__ */ Promise.resolve();
let Mo = null;
function Zc(e) {
  const t = Mo || od;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Um(e) {
  let t = Ln + 1, n = Xt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Xt[i], l = la(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Jc(e) {
  if (!(e.flags & 1)) {
    const t = la(e), n = Xt[Xt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= la(n) ? Xt.push(e) : Xt.splice(Um(t), 0, e), e.flags |= 1, sd();
  }
}
function sd() {
  Mo || (Mo = od.then(ld));
}
function Km(e) {
  Re(e) ? mi.push(...e) : gr && e.id === -1 ? gr.splice(li + 1, 0, e) : e.flags & 1 || (mi.push(e), e.flags |= 1), sd();
}
function Iu(e, t, n = Ln + 1) {
  for (; n < Xt.length; n++) {
    const i = Xt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Xt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function cd(e) {
  if (mi.length) {
    const t = [...new Set(mi)].sort(
      (n, i) => la(n) - la(i)
    );
    if (mi.length = 0, gr) {
      gr.push(...t);
      return;
    }
    for (gr = t, li = 0; li < gr.length; li++) {
      const n = gr[li];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    gr = null, li = 0;
  }
}
const la = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ld(e) {
  try {
    for (Ln = 0; Ln < Xt.length; Ln++) {
      const t = Xt[Ln];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ya(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ln < Xt.length; Ln++) {
      const t = Xt[Ln];
      t && (t.flags &= -2);
    }
    Ln = -1, Xt.length = 0, cd(), Mo = null, (Xt.length || mi.length) && ld();
  }
}
let un = null, ud = null;
function ko(e) {
  const t = un;
  return un = e, ud = e && e.type.__scopeId || null, t;
}
function Gm(e, t = un, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && $u(-1);
    const l = ko(t);
    let u;
    try {
      u = e(...a);
    } finally {
      ko(l), i._d && $u(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Qc(e, t) {
  if (un === null)
    return e;
  const n = is(un), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, u, d, f = ct] = t[a];
    l && (He(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && er(u), i.push({
      dir: l,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: d,
      modifiers: f
    }));
  }
  return e;
}
function Pr(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    l && (d.oldValue = l[u].value);
    let f = d.dir[i];
    f && (tr(), Bn(f, n, 8, [
      e.el,
      d,
      e,
      t
    ]), nr());
  }
}
function Wm(e, t) {
  if (Kt) {
    let n = Kt.provides;
    const i = Kt.parent && Kt.parent.provides;
    i === n && (n = Kt.provides = Object.create(i)), n[e] = t;
  }
}
function po(e, t, n = !1) {
  const i = W0();
  if (i || vi) {
    let a = vi ? vi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && He(t) ? t.call(i && i.proxy) : t;
  }
}
const Ym = /* @__PURE__ */ Symbol.for("v-scx"), qm = () => po(Ym);
function Xi(e, t, n) {
  return fd(e, t, n);
}
function fd(e, t, n = ct) {
  const { immediate: i, deep: a, flush: l, once: u } = n, d = Wt({}, n), f = t && i || !t && l !== "post";
  let v;
  if (fa) {
    if (l === "sync") {
      const S = qm();
      v = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!f) {
      const S = () => {
      };
      return S.stop = zn, S.resume = zn, S.pause = zn, S;
    }
  }
  const b = Kt;
  d.call = (S, P, k) => Bn(S, b, P, k);
  let h = !1;
  l === "post" ? d.scheduler = (S) => {
    nn(S, b && b.suspense);
  } : l !== "sync" && (h = !0, d.scheduler = (S, P) => {
    P ? S() : Jc(S);
  }), d.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, b && (S.id = b.uid, S.i = b));
  };
  const w = $m(e, t, d);
  return fa && (v ? v.push(w) : f && w()), w;
}
function Xm(e, t, n) {
  const i = this.proxy, a = Nt(e) ? e.includes(".") ? dd(i, e) : () => i[e] : e.bind(i, i);
  let l;
  He(t) ? l = t : (l = t.handler, n = t);
  const u = _a(this), d = fd(a, l.bind(i), n);
  return u(), d;
}
function dd(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Zm = /* @__PURE__ */ Symbol("_vte"), Jm = (e) => e.__isTeleport, Qm = /* @__PURE__ */ Symbol("_leaveCb");
function el(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, el(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Tu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Po = /* @__PURE__ */ new WeakMap();
function Zi(e, t, n, i, a = !1) {
  if (Re(e)) {
    e.forEach(
      (k, V) => Zi(
        k,
        t && (Re(t) ? t[V] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ji(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Zi(e, t, n, i.component.subTree);
    return;
  }
  const l = i.shapeFlag & 4 ? is(i.component) : i.el, u = a ? null : l, { i: d, r: f } = e, v = t && t.r, b = d.refs === ct ? d.refs = {} : d.refs, h = d.setupState, w = /* @__PURE__ */ Je(h), S = h === ct ? Of : (k) => Tu(b, k) ? !1 : Qe(w, k), P = (k, V) => !(V && Tu(b, V));
  if (v != null && v !== f) {
    if (Eu(t), Nt(v))
      b[v] = null, S(v) && (h[v] = null);
    else if (/* @__PURE__ */ Gt(v)) {
      const k = t;
      P(v, k.k) && (v.value = null), k.k && (b[k.k] = null);
    }
  }
  if (He(f))
    ya(f, d, 12, [u, b]);
  else {
    const k = Nt(f), V = /* @__PURE__ */ Gt(f);
    if (k || V) {
      const R = () => {
        if (e.f) {
          const O = k ? S(f) ? h[f] : b[f] : P() || !e.k ? f.value : b[e.k];
          if (a)
            Re(O) && zc(O, l);
          else if (Re(O))
            O.includes(l) || O.push(l);
          else if (k)
            b[f] = [l], S(f) && (h[f] = b[f]);
          else {
            const T = [l];
            P(f, e.k) && (f.value = T), e.k && (b[e.k] = T);
          }
        } else k ? (b[f] = u, S(f) && (h[f] = u)) : V && (P(f, e.k) && (f.value = u), e.k && (b[e.k] = u));
      };
      if (u) {
        const O = () => {
          R(), Po.delete(e);
        };
        O.id = -1, Po.set(e, O), nn(O, n);
      } else
        Eu(e), R();
    }
  }
}
function Eu(e) {
  const t = Po.get(e);
  t && (t.flags |= 8, Po.delete(e));
}
Zo().requestIdleCallback;
Zo().cancelIdleCallback;
const Ji = (e) => !!e.type.__asyncLoader, pd = (e) => e.type.__isKeepAlive;
function e0(e, t) {
  gd(e, "a", t);
}
function t0(e, t) {
  gd(e, "da", t);
}
function gd(e, t, n = Kt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ts(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      pd(a.parent.vnode) && n0(i, t, n, a), a = a.parent;
  }
}
function n0(e, t, n, i) {
  const a = ts(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  vd(() => {
    zc(i[t], a);
  }, n);
}
function ts(e, t, n = Kt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...u) => {
      tr();
      const d = _a(n), f = Bn(t, n, e, u);
      return d(), nr(), f;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const ir = (e) => (t, n = Kt) => {
  (!fa || e === "sp") && ts(e, (...i) => t(...i), n);
}, r0 = ir("bm"), md = ir("m"), i0 = ir(
  "bu"
), a0 = ir("u"), tl = ir(
  "bum"
), vd = ir("um"), o0 = ir(
  "sp"
), s0 = ir("rtg"), c0 = ir("rtc");
function l0(e, t = Kt) {
  ts("ec", e, t);
}
const u0 = "components", bd = /* @__PURE__ */ Symbol.for("v-ndc");
function f0(e) {
  return Nt(e) ? d0(u0, e, !1) || e : e || bd;
}
function d0(e, t, n = !0, i = !1) {
  const a = un || Kt;
  if (a) {
    const l = a.type;
    {
      const d = J0(
        l,
        !1
      );
      if (d && (d === t || d === Jt(t) || d === Xo(Jt(t))))
        return l;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Du(a[e] || l[e], t) || // global registration
      Du(a.appContext[e], t)
    );
    return !u && i ? l : u;
  }
}
function Du(e, t) {
  return e && (e[t] || e[Jt(t)] || e[Xo(Jt(t))]);
}
function Zt(e, t, n, i) {
  let a;
  const l = n, u = Re(e);
  if (u || Nt(e)) {
    const d = u && /* @__PURE__ */ Or(e);
    let f = !1, v = !1;
    d && (f = !/* @__PURE__ */ yn(e), v = /* @__PURE__ */ rr(e), e = Jo(e)), a = new Array(e.length);
    for (let b = 0, h = e.length; b < h; b++)
      a[b] = t(
        f ? v ? yi(An(e[b])) : An(e[b]) : e[b],
        b,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, l);
  } else if (it(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, f) => t(d, f, void 0, l)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let f = 0, v = d.length; f < v; f++) {
        const b = d[f];
        a[f] = t(e[b], b, f, l);
      }
    }
  else
    a = [];
  return a;
}
const Sc = (e) => e ? jd(e) ? is(e) : Sc(e.parent) : null, Qi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Wt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Sc(e.parent),
    $root: (e) => Sc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => _d(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Jc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zc.bind(e.proxy)),
    $watch: (e) => Xm.bind(e)
  })
), Js = (e, t) => e !== ct && !e.__isScriptSetup && Qe(e, t), h0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: u, type: d, appContext: f } = e;
    if (t[0] !== "$") {
      const w = u[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (Js(i, t))
          return u[t] = 1, i[t];
        if (a !== ct && Qe(a, t))
          return u[t] = 2, a[t];
        if (Qe(l, t))
          return u[t] = 3, l[t];
        if (n !== ct && Qe(n, t))
          return u[t] = 4, n[t];
        Nc && (u[t] = 0);
      }
    }
    const v = Qi[t];
    let b, h;
    if (v)
      return t === "$attrs" && Ut(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (b = d.__cssModules) && (b = b[t])
    )
      return b;
    if (n !== ct && Qe(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      h = f.config.globalProperties, Qe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return Js(a, t) ? (a[t] = n, !0) : i !== ct && Qe(i, t) ? (i[t] = n, !0) : Qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: u }
  }, d) {
    let f;
    return !!(n[d] || e !== ct && d[0] !== "$" && Qe(e, d) || Js(t, d) || Qe(l, d) || Qe(i, d) || Qe(Qi, d) || Qe(a.config.globalProperties, d) || (f = u.__cssModules) && f[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Lu(e) {
  return Re(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Nc = !0;
function p0(e) {
  const t = _d(e), n = e.proxy, i = e.ctx;
  Nc = !1, t.beforeCreate && Ru(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: u,
    watch: d,
    provide: f,
    inject: v,
    // lifecycle
    created: b,
    beforeMount: h,
    mounted: w,
    beforeUpdate: S,
    updated: P,
    activated: k,
    deactivated: V,
    beforeDestroy: R,
    beforeUnmount: O,
    destroyed: T,
    unmounted: I,
    render: G,
    renderTracked: J,
    renderTriggered: ae,
    errorCaptured: re,
    serverPrefetch: we,
    // public API
    expose: A,
    inheritAttrs: ve,
    // assets
    components: pe,
    directives: fe,
    filters: z
  } = t;
  if (v && g0(v, i, null), u)
    for (const ee in u) {
      const W = u[ee];
      He(W) && (i[ee] = W.bind(n));
    }
  if (a) {
    const ee = a.call(n, n);
    it(ee) && (e.data = /* @__PURE__ */ Qo(ee));
  }
  if (Nc = !0, l)
    for (const ee in l) {
      const W = l[ee], Z = He(W) ? W.bind(n, n) : He(W.get) ? W.get.bind(n, n) : zn, Ae = !He(W) && He(W.set) ? W.set.bind(n) : zn, Ie = ln({
        get: Z,
        set: Ae
      });
      Object.defineProperty(i, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Le) => Ie.value = Le
      });
    }
  if (d)
    for (const ee in d)
      yd(d[ee], i, n, ee);
  if (f) {
    const ee = He(f) ? f.call(n) : f;
    Reflect.ownKeys(ee).forEach((W) => {
      Wm(W, ee[W]);
    });
  }
  b && Ru(b, e, "c");
  function B(ee, W) {
    Re(W) ? W.forEach((Z) => ee(Z.bind(n))) : W && ee(W.bind(n));
  }
  if (B(r0, h), B(md, w), B(i0, S), B(a0, P), B(e0, k), B(t0, V), B(l0, re), B(c0, J), B(s0, ae), B(tl, O), B(vd, I), B(o0, we), Re(A))
    if (A.length) {
      const ee = e.exposed || (e.exposed = {});
      A.forEach((W) => {
        Object.defineProperty(ee, W, {
          get: () => n[W],
          set: (Z) => n[W] = Z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === zn && (e.render = G), ve != null && (e.inheritAttrs = ve), pe && (e.components = pe), fe && (e.directives = fe), we && hd(e);
}
function g0(e, t, n = zn) {
  Re(e) && (e = Mc(e));
  for (const i in e) {
    const a = e[i];
    let l;
    it(a) ? "default" in a ? l = po(
      a.from || i,
      a.default,
      !0
    ) : l = po(a.from || i) : l = po(a), /* @__PURE__ */ Gt(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (u) => l.value = u
    }) : t[i] = l;
  }
}
function Ru(e, t, n) {
  Bn(
    Re(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function yd(e, t, n, i) {
  let a = i.includes(".") ? dd(n, i) : () => n[i];
  if (Nt(e)) {
    const l = t[e];
    He(l) && Xi(a, l);
  } else if (He(e))
    Xi(a, e.bind(n));
  else if (it(e))
    if (Re(e))
      e.forEach((l) => yd(l, t, n, i));
    else {
      const l = He(e.handler) ? e.handler.bind(n) : t[e.handler];
      He(l) && Xi(a, l, e);
    }
}
function _d(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: u }
  } = e.appContext, d = l.get(t);
  let f;
  return d ? f = d : !a.length && !n && !i ? f = t : (f = {}, a.length && a.forEach(
    (v) => Co(f, v, u, !0)
  ), Co(f, t, u)), it(t) && l.set(t, f), f;
}
function Co(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && Co(e, l, n, !0), a && a.forEach(
    (u) => Co(e, u, n, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const d = m0[u] || n && n[u];
      e[u] = d ? d(e[u], t[u]) : t[u];
    }
  return e;
}
const m0 = {
  data: Ou,
  props: Fu,
  emits: Fu,
  // objects
  methods: $i,
  computed: $i,
  // lifecycle
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  // assets
  components: $i,
  directives: $i,
  // watch
  watch: b0,
  // provide / inject
  provide: Ou,
  inject: v0
};
function Ou(e, t) {
  return t ? e ? function() {
    return Wt(
      He(e) ? e.call(this, this) : e,
      He(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function v0(e, t) {
  return $i(Mc(e), Mc(t));
}
function Mc(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $i(e, t) {
  return e ? Wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fu(e, t) {
  return e ? Re(e) && Re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Wt(
    /* @__PURE__ */ Object.create(null),
    Lu(e),
    Lu(t ?? {})
  ) : t;
}
function b0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Wt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = qt(e[i], t[i]);
  return n;
}
function xd() {
  return {
    app: null,
    config: {
      isNativeTag: Of,
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
let y0 = 0;
function _0(e, t) {
  return function(i, a = null) {
    He(i) || (i = Wt({}, i)), a != null && !it(a) && (a = null);
    const l = xd(), u = /* @__PURE__ */ new WeakSet(), d = [];
    let f = !1;
    const v = l.app = {
      _uid: y0++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: e1,
      get config() {
        return l.config;
      },
      set config(b) {
      },
      use(b, ...h) {
        return u.has(b) || (b && He(b.install) ? (u.add(b), b.install(v, ...h)) : He(b) && (u.add(b), b(v, ...h))), v;
      },
      mixin(b) {
        return l.mixins.includes(b) || l.mixins.push(b), v;
      },
      component(b, h) {
        return h ? (l.components[b] = h, v) : l.components[b];
      },
      directive(b, h) {
        return h ? (l.directives[b] = h, v) : l.directives[b];
      },
      mount(b, h, w) {
        if (!f) {
          const S = v._ceVNode || Pt(i, a);
          return S.appContext = l, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(S, b, w), f = !0, v._container = b, b.__vue_app__ = v, is(S.component);
        }
      },
      onUnmount(b) {
        d.push(b);
      },
      unmount() {
        f && (Bn(
          d,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(b, h) {
        return l.provides[b] = h, v;
      },
      runWithContext(b) {
        const h = vi;
        vi = v;
        try {
          return b();
        } finally {
          vi = h;
        }
      }
    };
    return v;
  };
}
let vi = null;
const x0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Jt(t)}Modifiers`] || e[`${$r(t)}Modifiers`];
function w0(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ct;
  let a = n;
  const l = t.startsWith("update:"), u = l && x0(i, t.slice(7));
  u && (u.trim && (a = n.map((b) => Nt(b) ? b.trim() : b)), u.number && (a = n.map(om)));
  let d, f = i[d = Gs(t)] || // also try camelCase event handler (#2249)
  i[d = Gs(Jt(t))];
  !f && l && (f = i[d = Gs($r(t))]), f && Bn(
    f,
    e,
    6,
    a
  );
  const v = i[d + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Bn(
      v,
      e,
      6,
      a
    );
  }
}
const S0 = /* @__PURE__ */ new WeakMap();
function wd(e, t, n = !1) {
  const i = n ? S0 : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let u = {}, d = !1;
  if (!He(e)) {
    const f = (v) => {
      const b = wd(v, t, !0);
      b && (d = !0, Wt(u, b));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !l && !d ? (it(e) && i.set(e, null), null) : (Re(l) ? l.forEach((f) => u[f] = null) : Wt(u, l), it(e) && i.set(e, u), u);
}
function ns(e, t) {
  return !e || !Wo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, $r(t)) || Qe(e, t));
}
function Vu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: u,
    attrs: d,
    emit: f,
    render: v,
    renderCache: b,
    props: h,
    data: w,
    setupState: S,
    ctx: P,
    inheritAttrs: k
  } = e, V = ko(e);
  let R, O;
  try {
    if (n.shapeFlag & 4) {
      const I = a || i, G = I;
      R = On(
        v.call(
          G,
          I,
          b,
          h,
          S,
          w,
          P
        )
      ), O = d;
    } else {
      const I = t;
      R = On(
        I.length > 1 ? I(
          h,
          { attrs: d, slots: u, emit: f }
        ) : I(
          h,
          null
        )
      ), O = t.props ? d : N0(d);
    }
  } catch (I) {
    ea.length = 0, es(I, e, 1), R = Pt(xr);
  }
  let T = R;
  if (O && k !== !1) {
    const I = Object.keys(O), { shapeFlag: G } = T;
    I.length && G & 7 && (l && I.some(Yo) && (O = M0(
      O,
      l
    )), T = _i(T, O, !1, !0));
  }
  return n.dirs && (T = _i(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && el(T, n.transition), R = T, ko(V), R;
}
const N0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, M0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!Yo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function k0(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: u, children: d, patchFlag: f } = t, v = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return i ? Hu(i, u, v) : !!u;
    if (f & 8) {
      const b = t.dynamicProps;
      for (let h = 0; h < b.length; h++) {
        const w = b[h];
        if (Sd(u, i, w) && !ns(v, w))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === u ? !1 : i ? u ? Hu(i, u, v) : !0 : !!u;
  return !1;
}
function Hu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (Sd(t, e, l) && !ns(n, l))
      return !0;
  }
  return !1;
}
function Sd(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && it(i) && it(a) ? !Bc(i, a) : i !== a;
}
function P0({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Nd = {}, Md = () => Object.create(Nd), kd = (e) => Object.getPrototypeOf(e) === Nd;
function C0(e, t, n, i = !1) {
  const a = {}, l = Md();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pd(e, t, a, l);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Lm(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function A0(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: u }
  } = e, d = /* @__PURE__ */ Je(a), [f] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const b = e.vnode.dynamicProps;
      for (let h = 0; h < b.length; h++) {
        let w = b[h];
        if (ns(e.emitsOptions, w))
          continue;
        const S = t[w];
        if (f)
          if (Qe(l, w))
            S !== l[w] && (l[w] = S, v = !0);
          else {
            const P = Jt(w);
            a[P] = kc(
              f,
              d,
              P,
              S,
              e,
              !1
            );
          }
        else
          S !== l[w] && (l[w] = S, v = !0);
      }
    }
  } else {
    Pd(e, t, a, l) && (v = !0);
    let b;
    for (const h in d)
      (!t || // for camelCase
      !Qe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = $r(h)) === h || !Qe(t, b))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[b] !== void 0) && (a[h] = kc(
        f,
        d,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (l !== d)
      for (const h in l)
        (!t || !Qe(t, h)) && (delete l[h], v = !0);
  }
  v && Qn(e.attrs, "set", "");
}
function Pd(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let u = !1, d;
  if (t)
    for (let f in t) {
      if (Wi(f))
        continue;
      const v = t[f];
      let b;
      a && Qe(a, b = Jt(f)) ? !l || !l.includes(b) ? n[b] = v : (d || (d = {}))[b] = v : ns(e.emitsOptions, f) || (!(f in i) || v !== i[f]) && (i[f] = v, u = !0);
    }
  if (l) {
    const f = /* @__PURE__ */ Je(n), v = d || ct;
    for (let b = 0; b < l.length; b++) {
      const h = l[b];
      n[h] = kc(
        a,
        f,
        h,
        v[h],
        e,
        !Qe(v, h)
      );
    }
  }
  return u;
}
function kc(e, t, n, i, a, l) {
  const u = e[n];
  if (u != null) {
    const d = Qe(u, "default");
    if (d && i === void 0) {
      const f = u.default;
      if (u.type !== Function && !u.skipFactory && He(f)) {
        const { propsDefaults: v } = a;
        if (n in v)
          i = v[n];
        else {
          const b = _a(a);
          i = v[n] = f.call(
            null,
            t
          ), b();
        }
      } else
        i = f;
      a.ce && a.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (l && !d ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === $r(n)) && (i = !0));
  }
  return i;
}
const I0 = /* @__PURE__ */ new WeakMap();
function Cd(e, t, n = !1) {
  const i = n ? I0 : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, u = {}, d = [];
  let f = !1;
  if (!He(e)) {
    const b = (h) => {
      f = !0;
      const [w, S] = Cd(h, t, !0);
      Wt(u, w), S && d.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!l && !f)
    return it(e) && i.set(e, pi), pi;
  if (Re(l))
    for (let b = 0; b < l.length; b++) {
      const h = Jt(l[b]);
      ju(h) && (u[h] = ct);
    }
  else if (l)
    for (const b in l) {
      const h = Jt(b);
      if (ju(h)) {
        const w = l[b], S = u[h] = Re(w) || He(w) ? { type: w } : Wt({}, w), P = S.type;
        let k = !1, V = !0;
        if (Re(P))
          for (let R = 0; R < P.length; ++R) {
            const O = P[R], T = He(O) && O.name;
            if (T === "Boolean") {
              k = !0;
              break;
            } else T === "String" && (V = !1);
          }
        else
          k = He(P) && P.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = k, S[
          1
          /* shouldCastTrue */
        ] = V, (k || Qe(S, "default")) && d.push(h);
      }
    }
  const v = [u, d];
  return it(e) && i.set(e, v), v;
}
function ju(e) {
  return e[0] !== "$" && !Wi(e);
}
const nl = (e) => e === "_" || e === "_ctx" || e === "$stable", rl = (e) => Re(e) ? e.map(On) : [On(e)], T0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = Gm((...a) => rl(t(...a)), n);
  return i._c = !1, i;
}, Ad = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (nl(a)) continue;
    const l = e[a];
    if (He(l))
      t[a] = T0(a, l, i);
    else if (l != null) {
      const u = rl(l);
      t[a] = () => u;
    }
  }
}, Id = (e, t) => {
  const n = rl(t);
  e.slots.default = () => n;
}, Td = (e, t, n) => {
  for (const i in t)
    (n || !nl(i)) && (e[i] = t[i]);
}, E0 = (e, t, n) => {
  const i = e.slots = Md();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Td(i, t, n), n && zf(i, "_", a, !0)) : Ad(t, i);
  } else t && Id(e, t);
}, D0 = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, u = ct;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? l = !1 : Td(a, t, n) : (l = !t.$stable, Ad(t, a)), u = t;
  } else t && (Id(e, t), u = { default: 1 });
  if (l)
    for (const d in a)
      !nl(d) && u[d] == null && delete a[d];
}, nn = V0;
function L0(e) {
  return R0(e);
}
function R0(e, t) {
  const n = Zo();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: u,
    createText: d,
    createComment: f,
    setText: v,
    setElementText: b,
    parentNode: h,
    nextSibling: w,
    setScopeId: S = zn,
    insertStaticContent: P
  } = e, k = (D, j, te, de = null, E = null, U = null, $ = void 0, ie = null, ne = !!j.dynamicChildren) => {
    if (D === j)
      return;
    D && !Li(D, j) && (de = Ct(D), Le(D, E, U, !0), D = null), j.patchFlag === -2 && (ne = !1, j.dynamicChildren = null);
    const { type: F, ref: ye, shapeFlag: he } = j;
    switch (F) {
      case rs:
        V(D, j, te, de);
        break;
      case xr:
        R(D, j, te, de);
        break;
      case go:
        D == null && O(j, te, de, $);
        break;
      case nt:
        pe(
          D,
          j,
          te,
          de,
          E,
          U,
          $,
          ie,
          ne
        );
        break;
      default:
        he & 1 ? G(
          D,
          j,
          te,
          de,
          E,
          U,
          $,
          ie,
          ne
        ) : he & 6 ? fe(
          D,
          j,
          te,
          de,
          E,
          U,
          $,
          ie,
          ne
        ) : (he & 64 || he & 128) && F.process(
          D,
          j,
          te,
          de,
          E,
          U,
          $,
          ie,
          ne,
          on
        );
    }
    ye != null && E ? Zi(ye, D && D.ref, U, j || D, !j) : ye == null && D && D.ref != null && Zi(D.ref, null, U, D, !0);
  }, V = (D, j, te, de) => {
    if (D == null)
      i(
        j.el = d(j.children),
        te,
        de
      );
    else {
      const E = j.el = D.el;
      j.children !== D.children && v(E, j.children);
    }
  }, R = (D, j, te, de) => {
    D == null ? i(
      j.el = f(j.children || ""),
      te,
      de
    ) : j.el = D.el;
  }, O = (D, j, te, de) => {
    [D.el, D.anchor] = P(
      D.children,
      j,
      te,
      de,
      D.el,
      D.anchor
    );
  }, T = ({ el: D, anchor: j }, te, de) => {
    let E;
    for (; D && D !== j; )
      E = w(D), i(D, te, de), D = E;
    i(j, te, de);
  }, I = ({ el: D, anchor: j }) => {
    let te;
    for (; D && D !== j; )
      te = w(D), a(D), D = te;
    a(j);
  }, G = (D, j, te, de, E, U, $, ie, ne) => {
    if (j.type === "svg" ? $ = "svg" : j.type === "math" && ($ = "mathml"), D == null)
      J(
        j,
        te,
        de,
        E,
        U,
        $,
        ie,
        ne
      );
    else {
      const F = D.el && D.el._isVueCE ? D.el : null;
      try {
        F && F._beginPatch(), we(
          D,
          j,
          E,
          U,
          $,
          ie,
          ne
        );
      } finally {
        F && F._endPatch();
      }
    }
  }, J = (D, j, te, de, E, U, $, ie) => {
    let ne, F;
    const { props: ye, shapeFlag: he, transition: xe, dirs: Me } = D;
    if (ne = D.el = u(
      D.type,
      U,
      ye && ye.is,
      ye
    ), he & 8 ? b(ne, D.children) : he & 16 && re(
      D.children,
      ne,
      null,
      de,
      E,
      Qs(D, U),
      $,
      ie
    ), Me && Pr(D, null, de, "created"), ae(ne, D, D.scopeId, $, de), ye) {
      for (const Ee in ye)
        Ee !== "value" && !Wi(Ee) && l(ne, Ee, null, ye[Ee], U, de);
      "value" in ye && l(ne, "value", null, ye.value, U), (F = ye.onVnodeBeforeMount) && In(F, de, D);
    }
    Me && Pr(D, null, de, "beforeMount");
    const Te = O0(E, xe);
    Te && xe.beforeEnter(ne), i(ne, j, te), ((F = ye && ye.onVnodeMounted) || Te || Me) && nn(() => {
      try {
        F && In(F, de, D), Te && xe.enter(ne), Me && Pr(D, null, de, "mounted");
      } finally {
      }
    }, E);
  }, ae = (D, j, te, de, E) => {
    if (te && S(D, te), de)
      for (let U = 0; U < de.length; U++)
        S(D, de[U]);
    if (E) {
      let U = E.subTree;
      if (j === U || Rd(U.type) && (U.ssContent === j || U.ssFallback === j)) {
        const $ = E.vnode;
        ae(
          D,
          $,
          $.scopeId,
          $.slotScopeIds,
          E.parent
        );
      }
    }
  }, re = (D, j, te, de, E, U, $, ie, ne = 0) => {
    for (let F = ne; F < D.length; F++) {
      const ye = D[F] = ie ? Jn(D[F]) : On(D[F]);
      k(
        null,
        ye,
        j,
        te,
        de,
        E,
        U,
        $,
        ie
      );
    }
  }, we = (D, j, te, de, E, U, $) => {
    const ie = j.el = D.el;
    let { patchFlag: ne, dynamicChildren: F, dirs: ye } = j;
    ne |= D.patchFlag & 16;
    const he = D.props || ct, xe = j.props || ct;
    let Me;
    if (te && Cr(te, !1), (Me = xe.onVnodeBeforeUpdate) && In(Me, te, j, D), ye && Pr(j, D, te, "beforeUpdate"), te && Cr(te, !0), (he.innerHTML && xe.innerHTML == null || he.textContent && xe.textContent == null) && b(ie, ""), F ? A(
      D.dynamicChildren,
      F,
      ie,
      te,
      de,
      Qs(j, E),
      U
    ) : $ || W(
      D,
      j,
      ie,
      null,
      te,
      de,
      Qs(j, E),
      U,
      !1
    ), ne > 0) {
      if (ne & 16)
        ve(ie, he, xe, te, E);
      else if (ne & 2 && he.class !== xe.class && l(ie, "class", null, xe.class, E), ne & 4 && l(ie, "style", he.style, xe.style, E), ne & 8) {
        const Te = j.dynamicProps;
        for (let Ee = 0; Ee < Te.length; Ee++) {
          const Oe = Te[Ee], ot = he[Oe], bt = xe[Oe];
          (bt !== ot || Oe === "value") && l(ie, Oe, ot, bt, E, te);
        }
      }
      ne & 1 && D.children !== j.children && b(ie, j.children);
    } else !$ && F == null && ve(ie, he, xe, te, E);
    ((Me = xe.onVnodeUpdated) || ye) && nn(() => {
      Me && In(Me, te, j, D), ye && Pr(j, D, te, "updated");
    }, de);
  }, A = (D, j, te, de, E, U, $) => {
    for (let ie = 0; ie < j.length; ie++) {
      const ne = D[ie], F = j[ie], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === nt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Li(ne, F) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? h(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      k(
        ne,
        F,
        ye,
        null,
        de,
        E,
        U,
        $,
        !0
      );
    }
  }, ve = (D, j, te, de, E) => {
    if (j !== te) {
      if (j !== ct)
        for (const U in j)
          !Wi(U) && !(U in te) && l(
            D,
            U,
            j[U],
            null,
            E,
            de
          );
      for (const U in te) {
        if (Wi(U)) continue;
        const $ = te[U], ie = j[U];
        $ !== ie && U !== "value" && l(D, U, ie, $, E, de);
      }
      "value" in te && l(D, "value", j.value, te.value, E);
    }
  }, pe = (D, j, te, de, E, U, $, ie, ne) => {
    const F = j.el = D ? D.el : d(""), ye = j.anchor = D ? D.anchor : d("");
    let { patchFlag: he, dynamicChildren: xe, slotScopeIds: Me } = j;
    Me && (ie = ie ? ie.concat(Me) : Me), D == null ? (i(F, te, de), i(ye, te, de), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      te,
      ye,
      E,
      U,
      $,
      ie,
      ne
    )) : he > 0 && he & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren && D.dynamicChildren.length === xe.length ? (A(
      D.dynamicChildren,
      xe,
      te,
      E,
      U,
      $,
      ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || E && j === E.subTree) && Ed(
      D,
      j,
      !0
      /* shallow */
    )) : W(
      D,
      j,
      te,
      ye,
      E,
      U,
      $,
      ie,
      ne
    );
  }, fe = (D, j, te, de, E, U, $, ie, ne) => {
    j.slotScopeIds = ie, D == null ? j.shapeFlag & 512 ? E.ctx.activate(
      j,
      te,
      de,
      $,
      ne
    ) : z(
      j,
      te,
      de,
      E,
      U,
      $,
      ne
    ) : ce(D, j, ne);
  }, z = (D, j, te, de, E, U, $) => {
    const ie = D.component = G0(
      D,
      de,
      E
    );
    if (pd(D) && (ie.ctx.renderer = on), Y0(ie, !1, $), ie.asyncDep) {
      if (E && E.registerDep(ie, B, $), !D.el) {
        const ne = ie.subTree = Pt(xr);
        R(null, ne, j, te), D.placeholder = ne.el;
      }
    } else
      B(
        ie,
        D,
        j,
        te,
        E,
        U,
        $
      );
  }, ce = (D, j, te) => {
    const de = j.component = D.component;
    if (k0(D, j, te))
      if (de.asyncDep && !de.asyncResolved) {
        ee(de, j, te);
        return;
      } else
        de.next = j, de.update();
    else
      j.el = D.el, de.vnode = j;
  }, B = (D, j, te, de, E, U, $) => {
    const ie = () => {
      if (D.isMounted) {
        let { next: he, bu: xe, u: Me, parent: Te, vnode: Ee } = D;
        {
          const lt = Dd(D);
          if (lt) {
            he && (he.el = Ee.el, ee(D, he, $)), lt.asyncDep.then(() => {
              nn(() => {
                D.isUnmounted || F();
              }, E);
            });
            return;
          }
        }
        let Oe = he, ot;
        Cr(D, !1), he ? (he.el = Ee.el, ee(D, he, $)) : he = Ee, xe && Ws(xe), (ot = he.props && he.props.onVnodeBeforeUpdate) && In(ot, Te, he, Ee), Cr(D, !0);
        const bt = Vu(D), ke = D.subTree;
        D.subTree = bt, k(
          ke,
          bt,
          // parent may have changed if it's in a teleport
          h(ke.el),
          // anchor may have changed if it's in a fragment
          Ct(ke),
          D,
          E,
          U
        ), he.el = bt.el, Oe === null && P0(D, bt.el), Me && nn(Me, E), (ot = he.props && he.props.onVnodeUpdated) && nn(
          () => In(ot, Te, he, Ee),
          E
        );
      } else {
        let he;
        const { el: xe, props: Me } = j, { bm: Te, m: Ee, parent: Oe, root: ot, type: bt } = D, ke = Ji(j);
        Cr(D, !1), Te && Ws(Te), !ke && (he = Me && Me.onVnodeBeforeMount) && In(he, Oe, j), Cr(D, !0);
        {
          ot.ce && ot.ce._hasShadowRoot() && ot.ce._injectChildStyle(
            bt,
            D.parent ? D.parent.type : void 0
          );
          const lt = D.subTree = Vu(D);
          k(
            null,
            lt,
            te,
            de,
            D,
            E,
            U
          ), j.el = lt.el;
        }
        if (Ee && nn(Ee, E), !ke && (he = Me && Me.onVnodeMounted)) {
          const lt = j;
          nn(
            () => In(he, Oe, lt),
            E
          );
        }
        (j.shapeFlag & 256 || Oe && Ji(Oe.vnode) && Oe.vnode.shapeFlag & 256) && D.a && nn(D.a, E), D.isMounted = !0, j = te = de = null;
      }
    };
    D.scope.on();
    const ne = D.effect = new Kf(ie);
    D.scope.off();
    const F = D.update = ne.run.bind(ne), ye = D.job = ne.runIfDirty.bind(ne);
    ye.i = D, ye.id = D.uid, ne.scheduler = () => Jc(ye), Cr(D, !0), F();
  }, ee = (D, j, te) => {
    j.component = D;
    const de = D.vnode.props;
    D.vnode = j, D.next = null, A0(D, j.props, de, te), D0(D, j.children, te), tr(), Iu(D), nr();
  }, W = (D, j, te, de, E, U, $, ie, ne = !1) => {
    const F = D && D.children, ye = D ? D.shapeFlag : 0, he = j.children, { patchFlag: xe, shapeFlag: Me } = j;
    if (xe > 0) {
      if (xe & 128) {
        Ae(
          F,
          he,
          te,
          de,
          E,
          U,
          $,
          ie,
          ne
        );
        return;
      } else if (xe & 256) {
        Z(
          F,
          he,
          te,
          de,
          E,
          U,
          $,
          ie,
          ne
        );
        return;
      }
    }
    Me & 8 ? (ye & 16 && gt(F, E, U), he !== F && b(te, he)) : ye & 16 ? Me & 16 ? Ae(
      F,
      he,
      te,
      de,
      E,
      U,
      $,
      ie,
      ne
    ) : gt(F, E, U, !0) : (ye & 8 && b(te, ""), Me & 16 && re(
      he,
      te,
      de,
      E,
      U,
      $,
      ie,
      ne
    ));
  }, Z = (D, j, te, de, E, U, $, ie, ne) => {
    D = D || pi, j = j || pi;
    const F = D.length, ye = j.length, he = Math.min(F, ye);
    let xe;
    for (xe = 0; xe < he; xe++) {
      const Me = j[xe] = ne ? Jn(j[xe]) : On(j[xe]);
      k(
        D[xe],
        Me,
        te,
        null,
        E,
        U,
        $,
        ie,
        ne
      );
    }
    F > ye ? gt(
      D,
      E,
      U,
      !0,
      !1,
      he
    ) : re(
      j,
      te,
      de,
      E,
      U,
      $,
      ie,
      ne,
      he
    );
  }, Ae = (D, j, te, de, E, U, $, ie, ne) => {
    let F = 0;
    const ye = j.length;
    let he = D.length - 1, xe = ye - 1;
    for (; F <= he && F <= xe; ) {
      const Me = D[F], Te = j[F] = ne ? Jn(j[F]) : On(j[F]);
      if (Li(Me, Te))
        k(
          Me,
          Te,
          te,
          null,
          E,
          U,
          $,
          ie,
          ne
        );
      else
        break;
      F++;
    }
    for (; F <= he && F <= xe; ) {
      const Me = D[he], Te = j[xe] = ne ? Jn(j[xe]) : On(j[xe]);
      if (Li(Me, Te))
        k(
          Me,
          Te,
          te,
          null,
          E,
          U,
          $,
          ie,
          ne
        );
      else
        break;
      he--, xe--;
    }
    if (F > he) {
      if (F <= xe) {
        const Me = xe + 1, Te = Me < ye ? j[Me].el : de;
        for (; F <= xe; )
          k(
            null,
            j[F] = ne ? Jn(j[F]) : On(j[F]),
            te,
            Te,
            E,
            U,
            $,
            ie,
            ne
          ), F++;
      }
    } else if (F > xe)
      for (; F <= he; )
        Le(D[F], E, U, !0), F++;
    else {
      const Me = F, Te = F, Ee = /* @__PURE__ */ new Map();
      for (F = Te; F <= xe; F++) {
        const Xe = j[F] = ne ? Jn(j[F]) : On(j[F]);
        Xe.key != null && Ee.set(Xe.key, F);
      }
      let Oe, ot = 0;
      const bt = xe - Te + 1;
      let ke = !1, lt = 0;
      const hn = new Array(bt);
      for (F = 0; F < bt; F++) hn[F] = 0;
      for (F = Me; F <= he; F++) {
        const Xe = D[F];
        if (ot >= bt) {
          Le(Xe, E, U, !0);
          continue;
        }
        let pn;
        if (Xe.key != null)
          pn = Ee.get(Xe.key);
        else
          for (Oe = Te; Oe <= xe; Oe++)
            if (hn[Oe - Te] === 0 && Li(Xe, j[Oe])) {
              pn = Oe;
              break;
            }
        pn === void 0 ? Le(Xe, E, U, !0) : (hn[pn - Te] = F + 1, pn >= lt ? lt = pn : ke = !0, k(
          Xe,
          j[pn],
          te,
          null,
          E,
          U,
          $,
          ie,
          ne
        ), ot++);
      }
      const et = ke ? F0(hn) : pi;
      for (Oe = et.length - 1, F = bt - 1; F >= 0; F--) {
        const Xe = Te + F, pn = j[Xe], xa = j[Xe + 1], ar = Xe + 1 < ye ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xa.el || Ld(xa)
        ) : de;
        hn[F] === 0 ? k(
          null,
          pn,
          te,
          ar,
          E,
          U,
          $,
          ie,
          ne
        ) : ke && (Oe < 0 || F !== et[Oe] ? Ie(pn, te, ar, 2) : Oe--);
      }
    }
  }, Ie = (D, j, te, de, E = null) => {
    const { el: U, type: $, transition: ie, children: ne, shapeFlag: F } = D;
    if (F & 6) {
      Ie(D.component.subTree, j, te, de);
      return;
    }
    if (F & 128) {
      D.suspense.move(j, te, de);
      return;
    }
    if (F & 64) {
      $.move(D, j, te, on);
      return;
    }
    if ($ === nt) {
      i(U, j, te);
      for (let he = 0; he < ne.length; he++)
        Ie(ne[he], j, te, de);
      i(D.anchor, j, te);
      return;
    }
    if ($ === go) {
      T(D, j, te);
      return;
    }
    if (de !== 2 && F & 1 && ie)
      if (de === 0)
        ie.beforeEnter(U), i(U, j, te), nn(() => ie.enter(U), E);
      else {
        const { leave: he, delayLeave: xe, afterLeave: Me } = ie, Te = () => {
          D.ctx.isUnmounted ? a(U) : i(U, j, te);
        }, Ee = () => {
          U._isLeaving && U[Qm](
            !0
            /* cancelled */
          ), he(U, () => {
            Te(), Me && Me();
          });
        };
        xe ? xe(U, Te, Ee) : Ee();
      }
    else
      i(U, j, te);
  }, Le = (D, j, te, de = !1, E = !1) => {
    const {
      type: U,
      props: $,
      ref: ie,
      children: ne,
      dynamicChildren: F,
      shapeFlag: ye,
      patchFlag: he,
      dirs: xe,
      cacheIndex: Me,
      memo: Te
    } = D;
    if (he === -2 && (E = !1), ie != null && (tr(), Zi(ie, null, te, D, !0), nr()), Me != null && (j.renderCache[Me] = void 0), ye & 256) {
      j.ctx.deactivate(D);
      return;
    }
    const Ee = ye & 1 && xe, Oe = !Ji(D);
    let ot;
    if (Oe && (ot = $ && $.onVnodeBeforeUnmount) && In(ot, j, D), ye & 6)
      at(D.component, te, de);
    else {
      if (ye & 128) {
        D.suspense.unmount(te, de);
        return;
      }
      Ee && Pr(D, null, j, "beforeUnmount"), ye & 64 ? D.type.remove(
        D,
        j,
        te,
        on,
        de
      ) : F && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !F.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== nt || he > 0 && he & 64) ? gt(
        F,
        j,
        te,
        !1,
        !0
      ) : (U === nt && he & 384 || !E && ye & 16) && gt(ne, j, te), de && Ye(D);
    }
    const bt = Te != null && Me == null;
    (Oe && (ot = $ && $.onVnodeUnmounted) || Ee || bt) && nn(() => {
      ot && In(ot, j, D), Ee && Pr(D, null, j, "unmounted"), bt && (D.el = null);
    }, te);
  }, Ye = (D) => {
    const { type: j, el: te, anchor: de, transition: E } = D;
    if (j === nt) {
      Ue(te, de);
      return;
    }
    if (j === go) {
      I(D);
      return;
    }
    const U = () => {
      a(te), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (D.shapeFlag & 1 && E && !E.persisted) {
      const { leave: $, delayLeave: ie } = E, ne = () => $(te, U);
      ie ? ie(D.el, U, ne) : ne();
    } else
      U();
  }, Ue = (D, j) => {
    let te;
    for (; D !== j; )
      te = w(D), a(D), D = te;
    a(j);
  }, at = (D, j, te) => {
    const { bum: de, scope: E, job: U, subTree: $, um: ie, m: ne, a: F } = D;
    zu(ne), zu(F), de && Ws(de), E.stop(), U && (U.flags |= 8, Le($, D, j, te)), ie && nn(ie, j), nn(() => {
      D.isUnmounted = !0;
    }, j);
  }, gt = (D, j, te, de = !1, E = !1, U = 0) => {
    for (let $ = U; $ < D.length; $++)
      Le(D[$], j, te, de, E);
  }, Ct = (D) => {
    if (D.shapeFlag & 6)
      return Ct(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const j = w(D.anchor || D.el), te = j && j[Zm];
    return te ? w(te) : j;
  };
  let Ht = !1;
  const dn = (D, j, te) => {
    let de;
    D == null ? j._vnode && (Le(j._vnode, null, null, !0), de = j._vnode.component) : k(
      j._vnode || null,
      D,
      j,
      null,
      null,
      null,
      te
    ), j._vnode = D, Ht || (Ht = !0, Iu(de), cd(), Ht = !1);
  }, on = {
    p: k,
    um: Le,
    m: Ie,
    r: Ye,
    mt: z,
    mc: re,
    pc: W,
    pbc: A,
    n: Ct,
    o: e
  };
  return {
    render: dn,
    hydrate: void 0,
    createApp: _0(dn)
  };
}
function Qs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Cr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function O0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ed(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Re(i) && Re(a))
    for (let l = 0; l < i.length; l++) {
      const u = i[l];
      let d = a[l];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[l] = Jn(a[l]), d.el = u.el), !n && d.patchFlag !== -2 && Ed(u, d)), d.type === rs && (d.patchFlag === -1 && (d = a[l] = Jn(d)), d.el = u.el), d.type === xr && !d.el && (d.el = u.el);
    }
}
function F0(e) {
  const t = e.slice(), n = [0];
  let i, a, l, u, d;
  const f = e.length;
  for (i = 0; i < f; i++) {
    const v = e[i];
    if (v !== 0) {
      if (a = n[n.length - 1], e[a] < v) {
        t[i] = a, n.push(i);
        continue;
      }
      for (l = 0, u = n.length - 1; l < u; )
        d = l + u >> 1, e[n[d]] < v ? l = d + 1 : u = d;
      v < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
    }
  }
  for (l = n.length, u = n[l - 1]; l-- > 0; )
    n[l] = u, u = t[u];
  return n;
}
function Dd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dd(t);
}
function zu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ld(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ld(t.subTree) : null;
}
const Rd = (e) => e.__isSuspense;
function V0(e, t) {
  t && t.pendingBranch ? Re(e) ? t.effects.push(...e) : t.effects.push(e) : Km(e);
}
const nt = /* @__PURE__ */ Symbol.for("v-fgt"), rs = /* @__PURE__ */ Symbol.for("v-txt"), xr = /* @__PURE__ */ Symbol.for("v-cmt"), go = /* @__PURE__ */ Symbol.for("v-stc"), ea = [];
let fn = null;
function Ce(e = !1) {
  ea.push(fn = e ? null : []);
}
function H0() {
  ea.pop(), fn = ea[ea.length - 1] || null;
}
let ua = 1;
function $u(e, t = !1) {
  ua += e, e < 0 && fn && t && (fn.hasOnce = !0);
}
function Od(e) {
  return e.dynamicChildren = ua > 0 ? fn || pi : null, H0(), ua > 0 && fn && fn.push(e), e;
}
function De(e, t, n, i, a, l) {
  return Od(
    ue(
      e,
      t,
      n,
      i,
      a,
      l,
      !0
    )
  );
}
function Ni(e, t, n, i, a) {
  return Od(
    Pt(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Fd(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Li(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vd = ({ key: e }) => e ?? null, mo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Nt(e) || /* @__PURE__ */ Gt(e) || He(e) ? { i: un, r: e, k: t, f: !!n } : e : null);
function ue(e, t = null, n = null, i = 0, a = null, l = e === nt ? 0 : 1, u = !1, d = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vd(t),
    ref: t && mo(t),
    scopeId: ud,
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
    shapeFlag: l,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: un
  };
  return d ? (il(f, n), l & 128 && e.normalize(f)) : n && (f.shapeFlag |= Nt(n) ? 8 : 16), ua > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  fn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && fn.push(f), f;
}
const Pt = j0;
function j0(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === bd) && (e = xr), Fd(e)) {
    const d = _i(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && il(d, n), ua > 0 && !l && fn && (d.shapeFlag & 6 ? fn[fn.indexOf(e)] = d : fn.push(d)), d.patchFlag = -2, d;
  }
  if (Q0(e) && (e = e.__vccOpts), t) {
    t = z0(t);
    let { class: d, style: f } = t;
    d && !Nt(d) && (t.class = wt(d)), it(f) && (/* @__PURE__ */ Xc(f) && !Re(f) && (f = Wt({}, f)), t.style = Vt(f));
  }
  const u = Nt(e) ? 1 : Rd(e) ? 128 : Jm(e) ? 64 : it(e) ? 4 : He(e) ? 2 : 0;
  return ue(
    e,
    t,
    n,
    i,
    a,
    u,
    l,
    !0
  );
}
function z0(e) {
  return e ? /* @__PURE__ */ Xc(e) || kd(e) ? Wt({}, e) : e : null;
}
function _i(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: u, children: d, transition: f } = e, v = t ? Hd(a || {}, t) : a, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Vd(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Re(l) ? l.concat(mo(t)) : [l, mo(t)] : mo(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== nt ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _i(e.ssContent),
    ssFallback: e.ssFallback && _i(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && i && el(
    b,
    f.clone(b)
  ), b;
}
function $0(e = " ", t = 0) {
  return Pt(rs, null, e, t);
}
function B0(e, t) {
  const n = Pt(go, null, e);
  return n.staticCount = t, n;
}
function an(e = "", t = !1) {
  return t ? (Ce(), Ni(xr, null, e)) : Pt(xr, null, e);
}
function On(e) {
  return e == null || typeof e == "boolean" ? Pt(xr) : Re(e) ? Pt(
    nt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Fd(e) ? Jn(e) : Pt(rs, null, String(e));
}
function Jn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _i(e);
}
function il(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Re(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), il(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !kd(t) ? t._ctx = un : a === 3 && un && (un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else He(t) ? (t = { default: t, _ctx: un }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [$0(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = wt([t.class, i.class]));
      else if (a === "style")
        t.style = Vt([t.style, i.style]);
      else if (Wo(a)) {
        const l = t[a], u = i[a];
        u && l !== u && !(Re(l) && l.includes(u)) ? t[a] = l ? [].concat(l, u) : u : u == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Yo(a) && (t[a] = u);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function In(e, t, n, i = null) {
  Bn(e, t, 7, [
    n,
    i
  ]);
}
const U0 = xd();
let K0 = 0;
function G0(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || U0, l = {
    uid: K0++,
    vnode: e,
    type: i,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new pm(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Cd(i, a),
    emitsOptions: wd(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ct,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ct,
    data: ct,
    props: ct,
    attrs: ct,
    slots: ct,
    refs: ct,
    setupState: ct,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = w0.bind(null, l), e.ce && e.ce(l), l;
}
let Kt = null;
const W0 = () => Kt || un;
let Ao, Pc;
{
  const e = Zo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((u) => u(l)) : a[0](l);
    };
  };
  Ao = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Kt = n
  ), Pc = t(
    "__VUE_SSR_SETTERS__",
    (n) => fa = n
  );
}
const _a = (e) => {
  const t = Kt;
  return Ao(e), e.scope.on(), () => {
    e.scope.off(), Ao(t);
  };
}, Bu = () => {
  Kt && Kt.scope.off(), Ao(null);
};
function jd(e) {
  return e.vnode.shapeFlag & 4;
}
let fa = !1;
function Y0(e, t = !1, n = !1) {
  t && Pc(t);
  const { props: i, children: a } = e.vnode, l = jd(e);
  C0(e, i, l, t), E0(e, a, n || t);
  const u = l ? q0(e, t) : void 0;
  return t && Pc(!1), u;
}
function q0(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, h0);
  const { setup: i } = n;
  if (i) {
    tr();
    const a = e.setupContext = i.length > 1 ? Z0(e) : null, l = _a(e), u = ya(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Vf(u);
    if (nr(), l(), (d || e.sp) && !Ji(e) && hd(e), d) {
      if (u.then(Bu, Bu), t)
        return u.then((f) => {
          Uu(e, f);
        }).catch((f) => {
          es(f, e, 0);
        });
      e.asyncDep = u;
    } else
      Uu(e, u);
  } else
    zd(e);
}
function Uu(e, t, n) {
  He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : it(t) && (e.setupState = ad(t)), zd(e);
}
function zd(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || zn);
  {
    const a = _a(e);
    tr();
    try {
      p0(e);
    } finally {
      nr(), a();
    }
  }
}
const X0 = {
  get(e, t) {
    return Ut(e, "get", ""), e[t];
  }
};
function Z0(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, X0),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ad(Rm(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qi)
        return Qi[n](e);
    },
    has(t, n) {
      return n in t || n in Qi;
    }
  })) : e.proxy;
}
function J0(e, t = !0) {
  return He(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Q0(e) {
  return He(e) && "__vccOpts" in e;
}
const ln = (e, t) => /* @__PURE__ */ jm(e, t, fa), e1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Cc;
const Ku = typeof window < "u" && window.trustedTypes;
if (Ku)
  try {
    Cc = /* @__PURE__ */ Ku.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const $d = Cc ? (e) => Cc.createHTML(e) : (e) => e, t1 = "http://www.w3.org/2000/svg", n1 = "http://www.w3.org/1998/Math/MathML", Xn = typeof document < "u" ? document : null, Gu = Xn && /* @__PURE__ */ Xn.createElement("template"), r1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Xn.createElementNS(t1, e) : t === "mathml" ? Xn.createElementNS(n1, e) : n ? Xn.createElement(e, { is: n }) : Xn.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => Xn.createTextNode(e),
  createComment: (e) => Xn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, l) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      Gu.innerHTML = $d(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Gu.content;
      if (i === "svg" || i === "mathml") {
        const f = d.firstChild;
        for (; f.firstChild; )
          d.appendChild(f.firstChild);
        d.removeChild(f);
      }
      t.insertBefore(d, n);
    }
    return [
      // first
      u ? u.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, i1 = /* @__PURE__ */ Symbol("_vtc");
function a1(e, t, n) {
  const i = e[i1];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Io = /* @__PURE__ */ Symbol("_vod"), Bd = /* @__PURE__ */ Symbol("_vsh"), al = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Io] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ri(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Ri(e, !0), i.enter(e)) : i.leave(e, () => {
      Ri(e, !1);
    }) : Ri(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ri(e, t);
  }
};
function Ri(e, t) {
  e.style.display = t ? e[Io] : "none", e[Bd] = !t;
}
const o1 = /* @__PURE__ */ Symbol(""), s1 = /(?:^|;)\s*display\s*:/;
function c1(e, t, n) {
  const i = e.style, a = Nt(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (Nt(t))
        for (const u of t.split(";")) {
          const d = u.slice(0, u.indexOf(":")).trim();
          n[d] == null && vo(i, d, "");
        }
      else
        for (const u in t)
          n[u] == null && vo(i, u, "");
    for (const u in n)
      u === "display" && (l = !0), vo(i, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = i[o1];
      u && (n += ";" + u), i.cssText = n, l = s1.test(n);
    }
  } else t && e.removeAttribute("style");
  Io in e && (e[Io] = l ? i.display : "", e[Bd] && (i.display = "none"));
}
const Wu = /\s*!important$/;
function vo(e, t, n) {
  if (Re(n))
    n.forEach((i) => vo(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = l1(e, t);
    Wu.test(n) ? e.setProperty(
      $r(i),
      n.replace(Wu, ""),
      "important"
    ) : e[i] = n;
  }
}
const Yu = ["Webkit", "Moz", "ms"], ec = {};
function l1(e, t) {
  const n = ec[t];
  if (n)
    return n;
  let i = Jt(t);
  if (i !== "filter" && i in e)
    return ec[t] = i;
  i = Xo(i);
  for (let a = 0; a < Yu.length; a++) {
    const l = Yu[a] + i;
    if (l in e)
      return ec[t] = l;
  }
  return t;
}
const qu = "http://www.w3.org/1999/xlink";
function Xu(e, t, n, i, a, l = dm(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qu, t.slice(6, t.length)) : e.setAttributeNS(qu, t, n) : n == null || l && !$f(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : $n(n) ? String(n) : n
  );
}
function Zu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $d(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const d = l === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = $f(n) : n == null && d === "string" ? (n = "", u = !0) : d === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function u1(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function f1(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Ju = /* @__PURE__ */ Symbol("_vei");
function d1(e, t, n, i, a = null) {
  const l = e[Ju] || (e[Ju] = {}), u = l[t];
  if (i && u)
    u.value = i;
  else {
    const [d, f] = h1(t);
    if (i) {
      const v = l[t] = m1(
        i,
        a
      );
      u1(e, d, v, f);
    } else u && (f1(e, d, u, f), l[t] = void 0);
  }
}
const Qu = /(?:Once|Passive|Capture)$/;
function h1(e) {
  let t;
  if (Qu.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Qu); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $r(e.slice(2)), t];
}
let tc = 0;
const p1 = /* @__PURE__ */ Promise.resolve(), g1 = () => tc || (p1.then(() => tc = 0), tc = Date.now());
function m1(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Bn(
      v1(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = g1(), n;
}
function v1(e, t) {
  if (Re(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const ef = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, b1 = (e, t, n, i, a, l) => {
  const u = a === "svg";
  t === "class" ? a1(e, i, u) : t === "style" ? c1(e, n, i) : Wo(t) ? Yo(t) || d1(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : y1(e, t, i, u)) ? (Zu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xu(e, t, i, u, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Nt(i))) ? Zu(e, Jt(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Xu(e, t, i, u));
};
function y1(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ef(t) && He(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return ef(t) && Nt(n) ? !1 : t in e;
}
function _1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Jt(t);
  return Array.isArray(n) ? n.some((a) => Jt(a) === i) : Object.keys(n).some((a) => Jt(a) === i);
}
const x1 = ["ctrl", "shift", "alt", "meta"], w1 = {
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
  exact: (e, t) => x1.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ud = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let u = 0; u < t.length; u++) {
      const d = w1[t[u]];
      if (d && d(a, t)) return;
    }
    return e(a, ...l);
  }));
}, S1 = /* @__PURE__ */ Wt({ patchProp: b1 }, r1);
let tf;
function N1() {
  return tf || (tf = L0(S1));
}
const M1 = ((...e) => {
  const t = N1().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = P1(i);
    if (!a) return;
    const l = t._component;
    !He(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, k1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function k1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function P1(e) {
  return Nt(e) ? document.querySelector(e) : e;
}
const vt = Math.PI / 180, Kd = Math.PI * 2, C1 = 2048;
function st(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function wr(e, t, n) {
  return { x: e, y: t, z: n };
}
function To(e, t) {
  return wr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function di(e, t) {
  return wr(e.x * t, e.y * t, e.z * t);
}
function bo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function nf(e, t) {
  return wr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Bi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return wr(e.x / t, e.y / t, e.z / t);
}
function A1(e, t) {
  const n = Number(e || 0) * vt, i = Number(t || 0) * vt, a = Math.cos(i);
  return wr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function yo(e, t, n = 0) {
  const i = A1(e, t);
  let a = wr(0, 1, 0);
  Math.abs(bo(i, a)) > 0.999 && (a = wr(0, 0, 1));
  let l = Bi(nf(a, i)), u = Bi(nf(i, l));
  const d = Number(n || 0) * vt, f = Math.cos(d), v = Math.sin(d), b = To(di(l, f), di(u, v)), h = To(di(l, -v), di(u, f));
  return l = Bi(b), u = Bi(h), { fwd: i, right: l, up: u };
}
function I1(e, t) {
  const n = (Number(e || 0) - 0.5) * Kd, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return wr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function rf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), u = Math.max(512, C1), d = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function af(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function nc(e, t, n) {
  const i = af(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = af(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(i), u;
  }
  const l = e.createProgram();
  if (e.attachShader(l, i), e.attachShader(l, a), e.linkProgram(l), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(l, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(l) || "program link failed";
    throw e.deleteProgram(l), new Error(u);
  }
  return l;
}
const rc = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, T1 = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_background;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform vec2 u_viewport;
uniform float u_opacity;
uniform int u_coverage;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectCameraUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  if (u_coverage == 180) {
    if (abs(lon) > PI * 0.5) return vec2(-1.0, -1.0);
    float localU = clamp(lon / PI + 0.5, 0.0, 1.0);
    return vec2(localU, clamp(0.5 - lat / PI, 0.0, 1.0));
  }
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 sampleUv = unwrapUv();
  bool bgVisible = true;
  if (u_mode == 1 || u_mode == 2) {
    sampleUv = projectCameraUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  if (sampleUv.x < 0.0 || sampleUv.y < 0.0) {
    bgVisible = false;
    sampleUv = vec2(0.5, 0.5);
  }
  vec4 bg = bgVisible ? texture(u_background, sampleUv) : vec4(0.0);

  float bgAlpha = clamp(bg.a * u_opacity, 0.0, 1.0);
  vec3 premul = bg.rgb * u_opacity;
  float alpha = bgAlpha;
  outColor = vec4(premul, alpha);
}`, E1 = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_paint;
uniform sampler2D u_mask;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform float u_paintOpacity;
uniform float u_maskOpacity;
uniform int u_hasPaint;
uniform int u_hasMask;
uniform int u_showMaskTint;
uniform vec3 u_maskTint;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectLayerUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 layerUv = unwrapUv();
  if (u_mode == 1 || u_mode == 2) {
    layerUv = projectLayerUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  vec4 paint = u_hasPaint == 1 ? texture(u_paint, layerUv) : vec4(0.0);
  vec4 mask = u_hasMask == 1 ? texture(u_mask, layerUv) : vec4(0.0);
  vec3 premul = vec3(0.0);
  float alpha = 0.0;
  if (u_hasPaint == 1) {
    float paintAlpha = clamp(paint.a * u_paintOpacity, 0.0, 1.0);
    premul = paint.rgb * u_paintOpacity + premul * (1.0 - paintAlpha);
    alpha = paintAlpha + alpha * (1.0 - paintAlpha);
  }
  if (u_hasMask == 1 && u_showMaskTint == 1) {
    float maskAlpha = clamp(mask.a * u_maskOpacity, 0.0, 1.0);
    premul = u_maskTint * maskAlpha + premul * (1.0 - maskAlpha);
    alpha = maskAlpha + alpha * (1.0 - maskAlpha);
  }
  outColor = vec4(premul, alpha);
}`, D1 = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_texture;
uniform int u_mode;

uniform vec3 u_viewRight;
uniform vec3 u_viewUp;
uniform vec3 u_viewFwd;
uniform float u_viewHfov;
uniform float u_viewVfov;

uniform vec3 u_stickerRight;
uniform vec3 u_stickerUp;
uniform vec3 u_stickerFwd;
uniform float u_stickerTanX;
uniform float u_stickerTanY;
uniform vec4 u_crop;
uniform float u_opacity;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 dirFromUnwrapUv(vec2 uv) {
  float lon = (uv.x - 0.5) * TWO_PI;
  float lat = (0.5 - uv.y) * PI;
  float cp = cos(lat);
  return vec3(cp * sin(lon), sin(lat), cp * cos(lon));
}

vec3 dirFromProjectedView(vec2 uv) {
  float nx = (uv.x * 2.0 - 1.0) * tan(u_viewHfov * 0.5);
  float ny = (1.0 - uv.y * 2.0) * tan(u_viewVfov * 0.5);
  return normalize(u_viewFwd + u_viewRight * nx + u_viewUp * ny);
}

void main() {
  vec3 dir = (u_mode == 0) ? dirFromUnwrapUv(v_uv) : dirFromProjectedView(v_uv);
  float dz = dot(dir, u_stickerFwd);
  if (dz <= 1e-5) discard;

  float px = dot(dir, u_stickerRight) / dz;
  float py = dot(dir, u_stickerUp) / dz;
  float fullU = px / max(u_stickerTanX, 1e-6) * 0.5 + 0.5;
  float fullV = 0.5 - py / max(u_stickerTanY, 1e-6) * 0.5;

  if (fullU < u_crop.x || fullU > u_crop.z || fullV < u_crop.y || fullV > u_crop.w) discard;

  vec2 cropSize = max(u_crop.zw - u_crop.xy, vec2(1e-4));
  vec2 texUv = vec2((fullU - u_crop.x) / cropSize.x, (fullV - u_crop.y) / cropSize.y);
  vec4 texel = texture(u_texture, texUv);
  float alpha = clamp(texel.a * u_opacity, 0.0, 1.0);
  outColor = vec4(texel.rgb * u_opacity, alpha);
}`;
function Oi(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(st(i, 1, 179) * vt * 0.5) * (n / Math.max(t, 1))) / vt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: st(i, 1, 179),
    vFovDeg: st(a, 0.1, 179)
  };
}
function L1(e) {
  const t = yo(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(st(Number(e.hFovDeg), 0.1, 179) * 0.5 * vt),
    tanY: Math.tan(st(Number(e.vFovDeg), 0.1, 179) * 0.5 * vt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: st(Number(e.opacity ?? 1), 0, 1)
  };
}
function R1(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, u = null, d = null, f = null, v = null, b = null, h = null, w = null, S = !1, P = rf(1, 1, 1), k = null, V = null, R = null, O = null, T = null;
  const I = /* @__PURE__ */ new Map();
  let G = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, J = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, ae = {
    paint: !1,
    mask: !1
  };
  function re(E = null, U = null) {
    const $ = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, $), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, E ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, U ?? n.CLAMP_TO_EDGE), $;
  }
  function we() {
    if (S) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = nc(n, rc, T1), a = nc(n, rc, E1), l = nc(n, rc, D1), k = {
        mode: n.getUniformLocation(i, "u_mode"),
        yaw: n.getUniformLocation(i, "u_yaw"),
        pitch: n.getUniformLocation(i, "u_pitch"),
        roll: n.getUniformLocation(i, "u_roll"),
        hFov: n.getUniformLocation(i, "u_hfov"),
        vFov: n.getUniformLocation(i, "u_vfov"),
        viewport: n.getUniformLocation(i, "u_viewport"),
        opacity: n.getUniformLocation(i, "u_opacity"),
        coverage: n.getUniformLocation(i, "u_coverage"),
        background: n.getUniformLocation(i, "u_background")
      }, V = {
        mode: n.getUniformLocation(a, "u_mode"),
        yaw: n.getUniformLocation(a, "u_yaw"),
        pitch: n.getUniformLocation(a, "u_pitch"),
        roll: n.getUniformLocation(a, "u_roll"),
        hFov: n.getUniformLocation(a, "u_hfov"),
        vFov: n.getUniformLocation(a, "u_vfov"),
        paintOpacity: n.getUniformLocation(a, "u_paintOpacity"),
        maskOpacity: n.getUniformLocation(a, "u_maskOpacity"),
        hasPaint: n.getUniformLocation(a, "u_hasPaint"),
        hasMask: n.getUniformLocation(a, "u_hasMask"),
        showMaskTint: n.getUniformLocation(a, "u_showMaskTint"),
        maskTint: n.getUniformLocation(a, "u_maskTint"),
        paint: n.getUniformLocation(a, "u_paint"),
        mask: n.getUniformLocation(a, "u_mask")
      }, R = {
        texture: n.getUniformLocation(l, "u_texture"),
        mode: n.getUniformLocation(l, "u_mode"),
        viewRight: n.getUniformLocation(l, "u_viewRight"),
        viewUp: n.getUniformLocation(l, "u_viewUp"),
        viewFwd: n.getUniformLocation(l, "u_viewFwd"),
        viewHfov: n.getUniformLocation(l, "u_viewHfov"),
        viewVfov: n.getUniformLocation(l, "u_viewVfov"),
        stickerRight: n.getUniformLocation(l, "u_stickerRight"),
        stickerUp: n.getUniformLocation(l, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(l, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(l, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(l, "u_stickerTanY"),
        crop: n.getUniformLocation(l, "u_crop"),
        opacity: n.getUniformLocation(l, "u_opacity")
      }, u = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, u), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        1
      ]), n.STATIC_DRAW), d = re(n.REPEAT, n.CLAMP_TO_EDGE), f = re(n.REPEAT, n.CLAMP_TO_EDGE), v = re(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), S = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function A() {
    var E;
    if (n) {
      try {
        u && n.deleteBuffer(u), d && n.deleteTexture(d), f && n.deleteTexture(f), v && n.deleteTexture(v), I.forEach((U) => {
          Ae(U);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (E = n.getExtension("WEBGL_lose_context")) == null || E.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, u = null, d = null, f = null, v = null, I.clear(), b = null, h = null, w = null, J = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, ae = {
        paint: !1,
        mask: !1
      }, O = null, T = null, S = !1;
    }
  }
  function ve(E, U, $ = 1) {
    P = rf(E, U, $), (t.width !== P.width || t.height !== P.height) && (t.width = P.width, t.height = P.height);
  }
  function pe(E) {
    E === "background" ? b = null : E === "paint" ? h = null : w = null, J[E] && (J[E].width = 0, J[E].height = 0);
  }
  function fe() {
    ae.paint = !1, ae.mask = !1;
  }
  function z(E) {
    fe(), E === "paint" ? ae.paint = !0 : E === "mask" && (ae.mask = !0);
  }
  function ce(E, U, $ = [], ie = { width: 0, height: 0 }, ne = !1) {
    if (!n || !E || !U) return !1;
    const F = Number(U.width || U.videoWidth || U.naturalWidth || 0), ye = Number(U.height || U.videoHeight || U.naturalHeight || 0);
    if (!(F > 1) || !(ye > 1)) return !1;
    const he = Array.isArray($) ? $.filter((xe) => xe && xe.w > 0 && xe.h > 0) : [];
    if (!he.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ne ? 1 : 0), ie.width !== F || ie.height !== ye)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, U), ie.width = F, ie.height = ye, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (O || (O = document.createElement("canvas"), T = O.getContext("2d")), !T)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, U), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const xe of he) {
      const Me = Math.max(0, Math.floor(Number(xe.x || 0))), Te = Math.max(0, Math.floor(Number(xe.y || 0))), Ee = Math.min(F - Me, Math.ceil(Number(xe.w || 0))), Oe = Math.min(ye - Te, Math.ceil(Number(xe.h || 0)));
      if (!(Ee <= 0 || Oe <= 0)) {
        if (O.width !== Ee || O.height !== Oe) {
          if (O.width = Ee, O.height = Oe, T = O.getContext("2d"), !T)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, U), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          T.clearRect(0, 0, Ee, Oe);
        T.drawImage(U, Me, Te, Ee, Oe, 0, 0, Ee, Oe), n.texSubImage2D(n.TEXTURE_2D, 0, Me, Te, n.RGBA, n.UNSIGNED_BYTE, O);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function B(E, U, $, ie, ne = null, F = !1) {
    if (!we()) return !1;
    if (!$)
      return pe(E), !1;
    const ye = String(ie ?? ""), he = E === "background" ? b : E === "paint" ? h : w, xe = J[E], Me = Number($.width || $.videoWidth || $.naturalWidth || 0), Te = Number($.height || $.videoHeight || $.naturalHeight || 0), Ee = xe.width !== Me || xe.height !== Te;
    if (he === ye && !Ee && !(Array.isArray(ne) && ne.length)) return !0;
    if (!(Me > 0) || !(Te > 0))
      return pe(E), !1;
    if (n.bindTexture(n.TEXTURE_2D, U), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F ? 1 : 0), !(Array.isArray(ne) && ne.length ? ce(U, $, ne, xe, F) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, $), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pe(E), !1;
      xe.width = Me, xe.height = Te;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), E === "background" ? b = ye : E === "paint" ? h = ye : w = ye, !0;
  }
  function ee(E, U) {
    return B("background", d, E, U, null, !0);
  }
  function W(E, U, $ = null) {
    return B("paint", f, E, U, $, !0);
  }
  function Z(E, U, $ = null) {
    return B("mask", v, E, U, $, !0);
  }
  function Ae(E) {
    E != null && E.texture && n && n.deleteTexture(E.texture);
  }
  function Ie(E = /* @__PURE__ */ new Set()) {
    I.forEach((U, $) => {
      E.has($) || (Ae(U), I.delete($));
    });
  }
  function Le(E) {
    if (!n || !(E != null && E.assetId) || !(E != null && E.source)) return null;
    const U = String(E.assetId), $ = String(E.revision ?? ""), ie = E.source, ne = Number(ie.width || ie.naturalWidth || ie.videoWidth || 0), F = Number(ie.height || ie.naturalHeight || ie.videoHeight || 0);
    if (ne <= 0 || F <= 0) return null;
    let ye = I.get(U);
    if (ye || (ye = {
      texture: re(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, I.set(U, ye)), ye.revision !== $ || ye.width !== ne || ye.height !== F) {
      if (n.bindTexture(n.TEXTURE_2D, ye.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ie), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ye.revision = $, ye.width = ne, ye.height = F;
    }
    return ye.texture;
  }
  function Ye(E = []) {
    if (!we()) return !1;
    const U = /* @__PURE__ */ new Set();
    return E.forEach(($) => {
      !($ != null && $.assetId) || !($ != null && $.source) || (U.add(String($.assetId)), Le($));
    }), Ie(U), !0;
  }
  function Ue() {
    return we() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function at(E) {
    n.useProgram(E), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function gt(E, U = {}) {
    if (!b) return null;
    n.disable(n.BLEND), at(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(k.background, 0), n.uniform2f(k.viewport, Math.max(1, P.width), Math.max(1, P.height)), n.uniform1i(k.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const $ = Oi(E, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(k.yaw, Number($.yawDeg || 0) * vt), n.uniform1f(k.pitch, Number($.pitchDeg || 0) * vt), n.uniform1f(k.roll, Number($.rollDeg || 0) * vt), n.uniform1f(k.hFov, st(Number($.hFovDeg || 90), 0.1, 179) * vt), n.uniform1f(k.vFov, st(Number($.vFovDeg || 60), 0.1, 179) * vt), n.uniform1f(k.opacity, st(Number(U.backgroundOpacity ?? 1), 0, 1));
    const ie = Number((E == null ? void 0 : E.coverageDeg) || (U == null ? void 0 : U.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(k.coverage, ie), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Ct(E, U = {}) {
    const $ = ae.paint && h != null, ie = ae.mask && w != null;
    if (!$ && !ie) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), at(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, v), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const ne = Oi(E, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(ne.yawDeg || 0) * vt), n.uniform1f(V.pitch, Number(ne.pitchDeg || 0) * vt), n.uniform1f(V.roll, Number(ne.rollDeg || 0) * vt), n.uniform1f(V.hFov, st(Number(ne.hFovDeg || 90), 0.1, 179) * vt), n.uniform1f(V.vFov, st(Number(ne.vFovDeg || 60), 0.1, 179) * vt), n.uniform1f(V.paintOpacity, st(Number(U.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, st(Number(U.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, $ ? 1 : 0), n.uniform1i(V.hasMask, ie ? 1 : 0), n.uniform1i(V.showMaskTint, U.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function Ht(E, U) {
    var xe, Me, Te, Ee, Oe, ot, bt;
    const $ = Array.isArray(E == null ? void 0 : E.objects) ? E.objects : [];
    if (!$.length) {
      fe(), Ie(/* @__PURE__ */ new Set());
      return;
    }
    const ie = (U == null ? void 0 : U.mode) === "unwrap" ? 0 : (U == null ? void 0 : U.mode) === "cutout" ? 2 : 1, ne = Oi(U, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, F = yo(ne.yawDeg, ne.pitchDeg, ne.rollDeg), ye = $.slice().sort((ke, lt) => Number((ke == null ? void 0 : ke.zIndex) || 0) - Number((lt == null ? void 0 : lt.zIndex) || 0)), he = /* @__PURE__ */ new Set();
    fe();
    for (const ke of ye)
      if (!(!ke || ke.visible === !1)) {
        if (ke.type === "sticker") {
          const lt = String(((xe = ke == null ? void 0 : ke.params) == null ? void 0 : xe.assetId) || (ke == null ? void 0 : ke.id) || "");
          if (!lt) continue;
          he.add(lt);
          const hn = Le({
            assetId: lt,
            source: ke.source,
            revision: ke.revision
          });
          if (!hn) continue;
          const et = L1({
            yawDeg: ((Me = ke == null ? void 0 : ke.transform) == null ? void 0 : Me.yawDeg) || 0,
            pitchDeg: ((Te = ke == null ? void 0 : ke.transform) == null ? void 0 : Te.pitchDeg) || 0,
            rollDeg: ((Ee = ke == null ? void 0 : ke.transform) == null ? void 0 : Ee.rollDeg) || 0,
            hFovDeg: ((Oe = ke == null ? void 0 : ke.transform) == null ? void 0 : Oe.hFovDeg) || 30,
            vFovDeg: ((ot = ke == null ? void 0 : ke.transform) == null ? void 0 : ot.vFovDeg) || 30,
            crop: ((bt = ke == null ? void 0 : ke.params) == null ? void 0 : bt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ke == null ? void 0 : ke.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), at(l), n.uniform1i(R.texture, 0), n.uniform1i(R.mode, ie), n.uniform3f(R.viewRight, F.right.x, F.right.y, F.right.z), n.uniform3f(R.viewUp, F.up.x, F.up.y, F.up.z), n.uniform3f(R.viewFwd, F.fwd.x, F.fwd.y, F.fwd.z), n.uniform1f(R.viewHfov, st(Number(ne.hFovDeg || 90), 0.1, 179) * vt), n.uniform1f(R.viewVfov, st(Number(ne.vFovDeg || 60), 0.1, 179) * vt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, hn), n.uniform3f(R.stickerRight, et.right.x, et.right.y, et.right.z), n.uniform3f(R.stickerUp, et.up.x, et.up.y, et.up.z), n.uniform3f(R.stickerFwd, et.fwd.x, et.fwd.y, et.fwd.z), n.uniform1f(R.stickerTanX, Math.max(1e-6, et.tanX)), n.uniform1f(R.stickerTanY, Math.max(1e-6, et.tanY)), n.uniform4f(
            R.crop,
            st(Number(et.crop.x0 ?? 0), 0, 1),
            st(Number(et.crop.y0 ?? 0), 0, 1),
            st(Number(et.crop.x1 ?? 1), 0, 1),
            st(Number(et.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(R.opacity, et.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (ke.type === "paint" || ke.type === "raster") {
          if (!W(ke.source, ke.revision ?? "")) continue;
          z("paint"), Ct(U, {
            paintOpacity: Number(ke.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ke.type === "mask") {
          if (!Z(ke.source, ke.revision ?? "")) continue;
          z("mask"), Ct(U, {
            paintOpacity: 0,
            maskOpacity: Number(ke.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Ie(he), fe();
  }
  function dn(E) {
    return !Ue() || !b ? null : (gt({
      mode: "panorama",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      fovDeg: (E == null ? void 0 : E.fovDeg) || 100
    }, E), t);
  }
  function on(E) {
    return !Ue() || !b ? null : (gt({ mode: "unwrap" }, E), t);
  }
  function m(E) {
    return !Ue() || !b ? null : (gt({
      mode: "cutout",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      rollDeg: (E == null ? void 0 : E.rollDeg) || 0,
      hFovDeg: (E == null ? void 0 : E.hFovDeg) || 90,
      vFovDeg: (E == null ? void 0 : E.vFovDeg) || 60
    }, E), t);
  }
  function D(E = {}) {
    if (!we() || (ve(E.width, E.height, E.dpr || 1), !Ue())) return null;
    const U = Object.prototype.hasOwnProperty.call(E, "backgroundSource"), $ = Object.prototype.hasOwnProperty.call(E, "paintSource"), ie = Object.prototype.hasOwnProperty.call(E, "maskSource"), ne = Object.prototype.hasOwnProperty.call(E, "textures"), F = Object.prototype.hasOwnProperty.call(E, "scene");
    return U && ee(E.backgroundSource, E.backgroundRevision ?? ""), $ && W(E.paintSource, E.paintRevision ?? ""), ie && Z(E.maskSource, E.maskRevision ?? ""), ne && (Ye(E.textures || []), G.textures = E.textures || []), F && (G.scene = E.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "objectPass") && (G.objectPass = E.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "backgroundOpacity") && (G.backgroundOpacity = Number(E.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(E, "showMaskTint") && (G.showMaskTint = E.showMaskTint === !0), Object.prototype.hasOwnProperty.call(E, "coverageDeg") && (G.coverageDeg = Number(E.coverageDeg || 360) === 180 ? 180 : 360), b && gt(E.view, {
      ...E,
      backgroundOpacity: Number(E.backgroundOpacity ?? G.backgroundOpacity ?? 1),
      coverageDeg: Number(E.coverageDeg || G.coverageDeg || 360) === 180 ? 180 : 360
    }), Ht(
      G.objectPass || { objects: [] },
      E.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function j(E = {}) {
    return we() ? !!D({
      ...E,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(E.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function te(E, U, $) {
    const ie = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || P.sourceWidth || P.width || 1)), ne = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || P.sourceHeight || P.height || 1)), F = Number(U), ye = Number($);
    if (!Number.isFinite(F) || !Number.isFinite(ye)) return null;
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return { u: (F / ie % 1 + 1) % 1, v: st(ye / ne, 0, 1) };
    const he = Oi(E, ie, ne);
    if (!he) return null;
    const xe = yo(he.yawDeg, he.pitchDeg, he.rollDeg), Me = (F - ie * 0.5) / (ie * 0.5) * Math.tan(st(he.hFovDeg, 1, 179) * vt * 0.5), Te = (ne * 0.5 - ye) / (ne * 0.5) * Math.tan(st(he.vFovDeg, 0.1, 179) * vt * 0.5), Ee = Bi(To(To(di(xe.right, Me), di(xe.up, Te)), xe.fwd));
    return {
      u: (Math.atan2(Ee.x, Ee.z) / Kd + 0.5 + 1) % 1,
      v: st(0.5 - Math.asin(st(Ee.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function de(E, U, $) {
    const ie = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || P.sourceWidth || P.width || 1)), ne = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || P.sourceHeight || P.height || 1));
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return {
        x: (Number(U || 0) % 1 + 1) % 1 * ie,
        y: st(Number($ || 0), 0, 1) * ne,
        visible: !0
      };
    const F = Oi(E, ie, ne);
    if (!F)
      return { x: ie * 0.5, y: ne * 0.5, visible: !1 };
    const ye = yo(F.yawDeg, F.pitchDeg, F.rollDeg), he = I1(U, $), xe = bo(he, ye.right), Me = bo(he, ye.up), Te = bo(he, ye.fwd);
    if (Te <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ee = ie * 0.5 + xe / Te * (ie * 0.5 / Math.tan(st(F.hFovDeg, 1, 179) * vt * 0.5)), Oe = ne * 0.5 - Me / Te * (ne * 0.5 / Math.tan(st(F.vFovDeg, 0.1, 179) * vt * 0.5));
    return { x: Ee, y: Oe, visible: Ee >= 0 && Ee <= ie && Oe >= 0 && Oe <= ne };
  }
  return {
    init: we,
    dispose: A,
    setViewport: ve,
    setBackgroundErp: ee,
    setPaintErp: W,
    setMaskErp: Z,
    renderPanorama: dn,
    renderUnwrap: on,
    renderCutout: m,
    renderScene: D,
    syncState: j,
    screenToErpUv: te,
    erpUvToScreen: de,
    getCanvas() {
      return t;
    },
    isSupported() {
      return we();
    },
    getViewport() {
      return { ...P };
    }
  };
}
function of(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function O1() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, d, f) {
    const v = t(u);
    let b = e.get(v) || null;
    if (!b) {
      const S = document.createElement("canvas"), P = S.getContext("2d");
      if (!P) return null;
      b = {
        id: v,
        canvas: S,
        ctx: P,
        width: 0,
        height: 0
      }, e.set(v, b);
    }
    const h = of(d), w = of(f);
    return b.width !== h && (b.canvas.width = h, b.width = h), b.height !== w && (b.canvas.height = w, b.height = w), b;
  }
  function i(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const d = i(u);
    d && d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height);
  }
  function l() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: i,
    clearTarget: a,
    dispose: l
  };
}
const F1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), V1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Gd(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function H1(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function j1(e = {}) {
  const t = V1.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Gd(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function z1(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!F1.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Gd(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: H1(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function $1(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => z1(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== u ? l - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function xi(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: j1((e == null ? void 0 : e.background) || {}),
    objectPass: $1((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function B1(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ol(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? B1(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function U1(e, t, n = {}) {
  return e ? ol({
    id: String((n == null ? void 0 : n.id) || "paint_layer"),
    type: "paint",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 100),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "paint") : null;
}
function K1(e, t, n = {}) {
  return e ? ol({
    id: String((n == null ? void 0 : n.id) || "mask_layer"),
    type: "mask",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 110),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "mask") : null;
}
function G1(e, t, n = {}) {
  return e ? ol({
    id: String((n == null ? void 0 : n.id) || "raster_layer"),
    type: "raster",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 90),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    transform: (n == null ? void 0 : n.transform) || null,
    params: (n == null ? void 0 : n.params) || {}
  }, "raster") : null;
}
function Wd(e = {}) {
  const t = [], n = U1(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = K1(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, u) => {
    const d = G1(
      (l == null ? void 0 : l.source) || null,
      (l == null ? void 0 : l.revision) || "",
      {
        id: String((l == null ? void 0 : l.id) || `raster_layer_${u}`),
        zIndex: Number((l == null ? void 0 : l.zIndex) ?? (l == null ? void 0 : l.z_index) ?? 90),
        opacity: Number((l == null ? void 0 : l.opacity) ?? 1),
        visible: (l == null ? void 0 : l.visible) !== !1,
        transform: (l == null ? void 0 : l.transform) || null,
        params: (l == null ? void 0 : l.params) || {}
      }
    );
    d && t.push(d);
  }), t.sort((l, u) => {
    const d = Number((l == null ? void 0 : l.zIndex) || 0), f = Number((u == null ? void 0 : u.zIndex) || 0);
    return d !== f ? d - f : String((l == null ? void 0 : l.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function sl(e, t) {
  const n = new Map(
    (Array.isArray(t) ? t : []).map((i) => [String((i == null ? void 0 : i.assetId) || ""), i]).filter(([i, a]) => i && (a == null ? void 0 : a.source))
  );
  return Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers.map((i) => {
    const a = n.get(String((i == null ? void 0 : i.assetId) || ""));
    return a ? {
      id: String((i == null ? void 0 : i.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((i == null ? void 0 : i.zIndex) || 0),
      opacity: Number((i == null ? void 0 : i.opacity) ?? 1),
      visible: (i == null ? void 0 : i.visible) !== !1,
      transform: {
        yawDeg: Number((i == null ? void 0 : i.yawDeg) || 0),
        pitchDeg: Number((i == null ? void 0 : i.pitchDeg) || 0),
        rollDeg: Number((i == null ? void 0 : i.rollDeg) || 0),
        hFovDeg: Number((i == null ? void 0 : i.hFovDeg) || 30),
        vFovDeg: Number((i == null ? void 0 : i.vFovDeg) || 30)
      },
      params: {
        assetId: String((i == null ? void 0 : i.assetId) || ""),
        crop: (i == null ? void 0 : i.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function as(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return xi({
    stateRevision: i,
    background: {
      type: "erp_image",
      source: t,
      revision: u,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: sl(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Ui(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = sl(t, n), a = Wd({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return xi({
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: {
      type: "erp_image",
      source: (e == null ? void 0 : e.backgroundSource) || null,
      revision: String((e == null ? void 0 : e.backgroundRevision) || ""),
      coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [...i, ...a]
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function W1(e = {}) {
  var l, u, d, f, v, b, h, w;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const S = xi(e), P = Array.isArray((l = S.objectPass) == null ? void 0 : l.objects) ? S.objectPass.objects : [], k = {
      stickers: P.filter((T) => T.type === "sticker").map((T) => {
        var I, G, J, ae, re, we, A, ve, pe, fe, z, ce, B;
        return {
          id: T.id,
          assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((G = T == null ? void 0 : T.params) == null ? void 0 : G.asset_id) || (T == null ? void 0 : T.id) || ""),
          yawDeg: Number(((J = T == null ? void 0 : T.transform) == null ? void 0 : J.yawDeg) ?? ((ae = T == null ? void 0 : T.params) == null ? void 0 : ae.yawDeg) ?? 0),
          pitchDeg: Number(((re = T == null ? void 0 : T.transform) == null ? void 0 : re.pitchDeg) ?? ((we = T == null ? void 0 : T.params) == null ? void 0 : we.pitchDeg) ?? 0),
          rollDeg: Number(((A = T == null ? void 0 : T.transform) == null ? void 0 : A.rollDeg) ?? ((ve = T == null ? void 0 : T.params) == null ? void 0 : ve.rollDeg) ?? 0),
          hFovDeg: Number(((pe = T == null ? void 0 : T.transform) == null ? void 0 : pe.hFovDeg) ?? ((fe = T == null ? void 0 : T.params) == null ? void 0 : fe.hFovDeg) ?? 30),
          vFovDeg: Number(((z = T == null ? void 0 : T.transform) == null ? void 0 : z.vFovDeg) ?? ((ce = T == null ? void 0 : T.params) == null ? void 0 : ce.vFovDeg) ?? 30),
          crop: ((B = T == null ? void 0 : T.params) == null ? void 0 : B.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((T == null ? void 0 : T.opacity) ?? 1),
          visible: (T == null ? void 0 : T.visible) !== !1,
          zIndex: Number((T == null ? void 0 : T.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = S.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((d = S.objectPass) == null ? void 0 : d.hoveredId) ?? null
    }, V = P.filter((T) => T.type === "sticker").map((T) => {
      var I, G;
      return {
        assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((G = T == null ? void 0 : T.params) == null ? void 0 : G.asset_id) || (T == null ? void 0 : T.id) || ""),
        source: T.source || null,
        revision: String((T == null ? void 0 : T.revision) || "")
      };
    }).filter((T) => T.assetId && T.source), R = P.find((T) => T.type === "paint") || null, O = P.find((T) => T.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((f = S.background) == null ? void 0 : f.source) || null,
      backgroundRevision: String(((v = S.background) == null ? void 0 : v.revision) || ""),
      coverageDeg: Number(((b = S.background) == null ? void 0 : b.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (R == null ? void 0 : R.source) || null,
      paintRevision: String((R == null ? void 0 : R.revision) || ""),
      maskSource: (O == null ? void 0 : O.source) || null,
      maskRevision: String((O == null ? void 0 : O.revision) || ""),
      textures: V,
      scene: k,
      objectPass: S.objectPass,
      backgroundOpacity: Number(((h = S.background) == null ? void 0 : h.opacity) ?? 1),
      showMaskTint: ((w = e == null ? void 0 : e.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = xi({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...sl(t, n),
        ...Wd({
          paintSource: e.paintSource || i.paintSource || null,
          paintRevision: e.paintRevision || i.paintRevision || "",
          paintOptions: e.paintOptions || null,
          maskSource: e.maskSource || i.maskSource || null,
          maskRevision: e.maskRevision || i.maskRevision || "",
          maskOptions: e.maskOptions || null,
          rasterEntries: e.rasterEntries || []
        })
      ]
    }
  }).objectPass;
  return {
    stateRevision: String(e.stateRevision || ""),
    backgroundSource: e.backgroundSource || null,
    backgroundRevision: String(e.backgroundRevision || ""),
    coverageDeg: Number(e.coverageDeg || 360) === 180 ? 180 : 360,
    paintSource: i.paintSource || null,
    paintRevision: String(i.paintRevision || ""),
    maskSource: i.maskSource || null,
    maskRevision: String(i.maskRevision || ""),
    textures: n,
    scene: t,
    objectPass: a,
    backgroundOpacity: Number(e.backgroundOpacity ?? 1),
    showMaskTint: e.showMaskTint === !0
  };
}
function Y1(e) {
  let t = null;
  function n(l = {}) {
    const u = W1(l);
    return e.syncState({
      stateRevision: u.stateRevision,
      backgroundSource: u.backgroundSource,
      backgroundRevision: u.backgroundRevision,
      coverageDeg: u.coverageDeg,
      paintSource: u.paintSource,
      paintRevision: u.paintRevision,
      maskSource: u.maskSource,
      maskRevision: u.maskRevision,
      textures: u.textures,
      scene: u.scene,
      objectPass: u.objectPass,
      backgroundOpacity: u.backgroundOpacity,
      showMaskTint: u.showMaskTint
    }) ? (t = u, !0) : !1;
  }
  function i() {
    return t;
  }
  function a() {
    t = null;
  }
  return {
    sync: n,
    snapshot: i,
    clear: a
  };
}
function Hr(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => R1(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => O1(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => Y1(V), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let d = null;
  const f = i({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const R = { ...V }, O = a.syncState(R);
        return O && (d = R, O);
      }
      return d = { ...V }, !0;
    }
  });
  function v(V = {}) {
    return f.sync(V);
  }
  function b(V = {}, R = {}) {
    return d ? a.renderScene({
      ...d,
      view: V,
      width: R.width,
      height: R.height,
      dpr: R.dpr,
      backgroundOpacity: R.backgroundOpacity ?? d.backgroundOpacity ?? 1,
      showMaskTint: R.showMaskTint ?? d.showMaskTint ?? !1
    }) : null;
  }
  function h(V, R, O = {}, T = {}) {
    if (!R) return !1;
    const I = b(O, {
      ...T,
      width: R.w,
      height: R.h
    });
    return I ? V ? (V.canvas && I === V.canvas || V.drawImage(I, R.x, R.y, R.w, R.h), !0) : !!l && I === l : !1;
  }
  function w(V, R = {}, O = {}) {
    const T = Number(O.width || 0), I = Number(O.height || 0);
    if (!(T > 0) || !(I > 0)) return null;
    const G = u.ensureTarget(V, T, I);
    if (!G) return null;
    const J = b(R, {
      ...O,
      width: T,
      height: I
    });
    return J ? (G.ctx.clearRect(0, 0, G.canvas.width, G.canvas.height), G.ctx.drawImage(J, 0, 0, G.canvas.width, G.canvas.height), G.canvas) : null;
  }
  function S(V) {
    u.clearTarget(V);
  }
  function P() {
    var V;
    u.dispose(), (V = a.dispose) == null || V.call(a), d = null;
  }
  function k() {
    d = null, f.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: v,
    renderView: b,
    renderToContext: h,
    renderToTarget: w,
    clearTarget: S,
    snapshotState: f.snapshot,
    clearState: k,
    dispose: P
  };
}
function ui(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function q1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function sf(e, t = 8) {
  var b;
  const n = (b = e == null ? void 0 : e.getContext) == null ? void 0 : b.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let u = i, d = a, f = -1, v = -1;
  for (let h = 0; h < a; h += 1)
    for (let w = 0; w < i; w += 1)
      l[(h * i + w) * 4 + 3] <= t || (w < u && (u = w), h < d && (d = h), w > f && (f = w), h > v && (v = h));
  return f < u || v < d ? null : {
    minX: u,
    minY: d,
    maxX: f,
    maxY: v,
    width: f - u + 1,
    height: v - d + 1,
    aspect: Number(((f - u + 1) / Math.max(1, v - d + 1)).toFixed(4))
  };
}
function cl(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function Zn(e, t, n) {
  if (!e) return ui(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function ht(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let ic = null, ac = null, cf = null, lf = null, xt = null, Fi = null, Yt = null, dr = null;
function X1() {
  if (ac) return ac;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), ac = n, n;
}
function oc(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  ic = Zn(ic, n, i);
  const a = ic;
  ht(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", lf !== a.ctx && (cf = a.ctx.createPattern(X1(), "repeat"), lf = a.ctx), a.ctx.fillStyle = cf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function Z1(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function J1(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Q1(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function ev(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const pt = /* @__PURE__ */ new Map(), ll = 128;
function tv(e, t, n, i, a, l) {
  const u = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), f = `${u}:${d.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (pt.has(f)) {
    const O = pt.get(f);
    return pt.delete(f), pt.set(f, O), O;
  }
  pt.size >= ll && pt.delete(pt.keys().next().value);
  const v = u * 2 + 2, b = u + 1, h = cl(v, v), w = h.getContext("2d"), S = d * u, P = u + 1, k = `rgba(${n},${i},${a},${l})`, V = `rgba(${n},${i},${a},0)`, R = w.createRadialGradient(b, b, S, b, b, P);
  return R.addColorStop(0, k), R.addColorStop(1, V), w.fillStyle = R, w.fillRect(0, 0, v, v), pt.set(f, h), h;
}
function nv(e, t, n, i, a, l, u) {
  const { r: d, g: f, b: v, a: b } = i, h = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), S = Math.max(0, a), P = Math.max(0, Math.min(0.99, l)), k = Math.max(0, Math.min(1, u ?? 0)), V = `chisel:${h}:${w}:${n.toFixed(2)}:${d}:${f}:${v}:${b.toFixed(3)}:${S.toFixed(2)}:${P.toFixed(2)}:${k.toFixed(2)}`;
  if (pt.has(V)) {
    const re = pt.get(V);
    return pt.delete(V), pt.set(V, re), re;
  }
  pt.size >= ll && pt.delete(pt.keys().next().value);
  const R = cl(h, w), O = R.getContext("2d"), T = O.createImageData(h, w), I = T.data, G = Math.max(0, e - t), J = Math.max(0, Math.min(1, n)), ae = 1 + S;
  for (let re = 0; re < w; re++)
    for (let we = 0; we < h; we++) {
      const A = we + 0.5 - e, ve = re + 0.5 - t, pe = Math.max(Math.abs(A) - G, 0), z = Math.hypot(pe, ve) / t;
      if (z >= 1) continue;
      const ce = z <= J ? 1 : Math.max(0, (1 - z) / Math.max(1e-4, 1 - J)), B = 1 - z, ee = 1 + S * (1 - B) * (1 - B), W = 1 - P * B * B, Z = ee * W / ae;
      let Ae = 1;
      if (k > 0) {
        const Ye = Math.floor((ve + t) / 1.5), Ue = Math.floor((A + e) / 8), at = Fr(bi(Ye * 41 + 500, Ue * 19 + 300));
        Ae = 1 - k * 0.42 * at;
      }
      const Ie = Math.round(255 * Math.min(1, b * ce * Z * Ae));
      if (Ie <= 0) continue;
      const Le = (re * h + we) * 4;
      I[Le] = d, I[Le + 1] = f, I[Le + 2] = v, I[Le + 3] = Ie;
    }
  return O.putImageData(T, 0, 0), pt.set(V, R), R;
}
function bi(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function Fr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function rv(e, t, n, i, a, l, u) {
  const d = e + 0.5 - n, f = t + 0.5 - i, v = Math.max(0, n - i), b = Math.max(Math.abs(d) - v, 0), h = Math.hypot(b, f) / i;
  if (h >= 1) return 0;
  const w = Fr(bi(e * 17 + 3, t * 13 + 7)), S = h + l * 0.22 * (w - 0.5);
  if (S >= 1) return 0;
  const P = S <= a ? 1 : Math.max(0, (1 - S) / Math.max(1e-4, 1 - a)), k = iv(e, t, d, f, n, i), V = l * 0.55;
  if (k < V) return 0;
  const O = 0.45 + 0.55 * ((k - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, u * P * O));
}
function iv(e, t, n, i, a, l) {
  const u = Math.floor((n + a) / 3), d = Math.floor((i + l) / 2), f = Fr(bi(u * 13 + 700, d * 17 + 400)), v = Math.floor((n + a) / 1.5), b = Math.floor((i + l) / 1.5), h = Fr(bi(v * 23 + 800, b * 29 + 500)), w = Fr(bi(e * 3 + 100, t * 5 + 200));
  return f * 0.55 + h * 0.3 + w * 0.15;
}
function av(e, t, n, i, a) {
  const { r: l, g: u, b: d, a: f } = i, v = Math.max(2, Math.ceil(e) * 2), b = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, Math.min(1, a)), w = `crayon:${v}:${b}:${n.toFixed(2)}:${l}:${u}:${d}:${f.toFixed(3)}:${h.toFixed(2)}`;
  if (pt.has(w)) {
    const O = pt.get(w);
    return pt.delete(w), pt.set(w, O), O;
  }
  pt.size >= ll && pt.delete(pt.keys().next().value);
  const S = cl(v, b), P = S.getContext("2d"), k = P.createImageData(v, b), V = k.data, R = Math.max(0, Math.min(1, n));
  for (let O = 0; O < b; O++)
    for (let T = 0; T < v; T++) {
      const I = rv(T, O, e, t, R, h, f);
      if (I <= 0) continue;
      const G = (O * v + T) * 4;
      V[G] = l, V[G + 1] = u, V[G + 2] = d, V[G + 3] = I;
    }
  return P.putImageData(k, 0, 0), pt.set(w, S), S;
}
function Yd(e, t, n) {
  var k, V;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = Q1(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = ov(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), f = Number(((k = t == null ? void 0 : t.angle) == null ? void 0 : k.value) ?? 0), v = ev(t, a), b = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), h = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && b !== "unwrap", w = t == null ? void 0 : t.scatter, S = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let P;
  if (i === "chisel") {
    const R = a * d, O = a, T = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), I = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), G = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    P = nv(R, O, l, u, T, I, G);
  } else if (i === "crayon") {
    const R = a * d, O = a, T = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    P = av(R, O, l, u, T);
  } else
    P = tv(a, l, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: P, radiusPx: a, spacingPx: v, desc: n, aspect: d, angle: f, stampKind: i, scatter: S, latitudeCorrection: h };
}
function ov(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), l = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: l
  };
}
function sv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function uf(e, t, n, i, a) {
  const l = e.angle, u = e.desc.width;
  function d(v, b) {
    l === 0 ? e.ctx.drawImage(e.stampTex, v - a, b - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(v, b), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const f = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - f < 0 && d(t + u, n), t + f > u && d(t - u, n);
}
function ul(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: v, count: b } = e.scatter, h = v * e.radiusPx * a, w = bi(t, n);
    for (let S = 0; S < b; S++) {
      const P = Fr(w + S * 2) * Math.PI * 2, k = Math.sqrt(Fr(w + S * 2 + 1)) * h, V = t + Math.cos(P) * k, R = n + Math.sin(P) * k, O = Math.max(0.5, e.radiusPx * a * 0.48), T = (0.5 - R / Math.max(1, e.desc.height)) * Math.PI, I = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(T)) : 1, G = O * e.aspect * I;
      uf(e, V, R, O, G);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, f = l * e.aspect * d;
  uf(e, t, n, l, f);
}
function ff(e, t, n) {
  const i = J1(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, u = Yd(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let w = 0; w < i.length; w++) {
    let S = Number(i[w].u || 0) * a;
    const P = Number(i[w].v || 0) * l;
    w > 0 && Math.abs(S - d[w - 1].x) > a * 0.5 && (S += S < d[w - 1].x ? a : -a), d.push({ x: S, y: P });
  }
  if (ul(u, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let f = d[0], v = d[0], b = d[0], h = 0;
  for (let w = 1; w < d.length; w++) {
    const S = d[w], P = { x: (v.x + S.x) * 0.5, y: (v.y + S.y) * 0.5 };
    w === 1 ? h = da(u, b.x, b.y, P.x, P.y, h) : h = Eo(u, f, b, P, S, h), f = v, v = S, b = P;
  }
  d.length === 2 ? da(u, b.x, b.y, v.x, v.y, h) : Eo(u, f, b, v, v, h), e.restore();
}
function _o(e, t, n) {
  var h;
  const i = Array.isArray((h = t == null ? void 0 : t.geometry) == null ? void 0 : h.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, u = sv(t), d = [];
  let f = 1 / 0, v = -1 / 0;
  for (let w = 0; w < i.length; w++) {
    const S = Z1(i[w]);
    let P = Number(S.x || 0) * a;
    w > 0 && Math.abs(P - d[w - 1].x) > a * 0.5 && (P += P < d[w - 1].x ? a : -a), d.push({ x: P, y: Number(S.y || 0) * l }), P < f && (f = P), P > v && (v = P);
  }
  function b(w) {
    e.beginPath(), e.moveTo(d[0].x + w, d[0].y);
    for (let S = 1; S < d.length; S++) e.lineTo(d[S].x + w, d[S].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, b(0), f < 0 && b(a), v > a && b(-a), e.restore();
}
function qa(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    _o(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? ff(e, t, n) : (Fi = Zn(Fi, n.width, n.height), ht(Fi), ff(Fi.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(Fi.canvas, 0, 0), e.restore());
}
function Ar(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function da(e, t, n, i, a, l) {
  const u = i - t, d = a - n, f = Math.hypot(u, d);
  if (f < 1e-9) return l;
  let v = e.spacingPx - l;
  for (; v <= f; ) {
    const b = v / f;
    ul(e, t + u * b, n + d * b, 1), v += e.spacingPx;
  }
  return f - v + e.spacingPx;
}
function Eo(e, t, n, i, a, l) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, f = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, v = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, b = 0, h = d, w = h + f, S = w + v, P = w - h, k = 16;
  let V = l, R = n.x, O = n.y;
  for (let T = 1; T <= k; T++) {
    const I = h + P * T / k, G = ((h - I) * t.x + (I - b) * n.x) / (h - b), J = ((h - I) * t.y + (I - b) * n.y) / (h - b), ae = ((w - I) * n.x + (I - h) * i.x) / (w - h), re = ((w - I) * n.y + (I - h) * i.y) / (w - h), we = ((S - I) * i.x + (I - w) * a.x) / (S - w), A = ((S - I) * i.y + (I - w) * a.y) / (S - w), ve = ((w - I) * G + (I - b) * ae) / (w - b), pe = ((w - I) * J + (I - b) * re) / (w - b), fe = ((S - I) * ae + (I - h) * we) / (S - h), z = ((S - I) * re + (I - h) * A) / (S - h), ce = ((w - I) * ve + (I - h) * fe) / (w - h), B = ((w - I) * pe + (I - h) * z) / (w - h);
    V = da(e, R, O, ce, B, V), R = ce, O = B;
  }
  return V;
}
function cv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, u = l.width, d = n * l.height, f = e.activeStroke;
  let v = t * u;
  if (f && Math.abs(v - f.prev.x) > u * 0.5 && (v += v < f.prev.x ? u : -u), !f) {
    const S = Yd(a, i, l), P = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), k = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), V = String((i == null ? void 0 : i.toolKind) || "") === "eraser", R = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", ul(S, v, d, 1), e.activeStroke = {
      pprev: { x: v, y: d },
      prev: { x: v, y: d },
      lastMidX: v,
      lastMidY: d,
      stampTex: S.stampTex,
      radiusPx: S.radiusPx,
      spacingPx: S.spacingPx,
      aspect: S.aspect,
      angle: S.angle,
      stampKind: S.stampKind,
      scatter: S.scatter,
      latitudeCorrection: S.latitudeCorrection,
      strokeOpacity: P,
      velocityWidthFactor: k,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: R,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const b = (f.prev.x + v) * 0.5, h = (f.prev.y + d) * 0.5;
  a.globalCompositeOperation = "source-over";
  const w = {
    ctx: a,
    stampTex: f.stampTex,
    radiusPx: f.radiusPx,
    spacingPx: f.spacingPx,
    desc: l,
    aspect: f.aspect,
    angle: f.angle,
    stampKind: f.stampKind,
    scatter: f.scatter,
    latitudeCorrection: f.latitudeCorrection
  };
  f.pointCount === 1 ? f.distSinceStamp = da(w, f.lastMidX, f.lastMidY, b, h, f.distSinceStamp) : f.distSinceStamp = Eo(
    w,
    f.pprev,
    { x: f.lastMidX, y: f.lastMidY },
    { x: b, y: h },
    { x: v, y: d },
    f.distSinceStamp
  ), f.pprev = f.prev, f.prev = { x: v, y: d }, f.lastMidX = b, f.lastMidY = h, f.pointCount++, e.displayDirty = !0;
}
function Ac(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = ui(t, n), u = {
    descriptor: i,
    committedMask: ui(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: ui(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = ui(t, n);
  let v = null, b = "", h = null;
  function w(A) {
    return {
      actionGroupId: A,
      descriptor: i,
      committedPaint: ui(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function S(A) {
    let ve = a.get(A);
    return ve || (ve = w(A), a.set(A, ve)), ve;
  }
  function P(A) {
    return b === "mask" ? u : v ? S(v) : d;
  }
  function k(A) {
    var B;
    const ve = !h || h.length !== A.length || A.some((ee, W) => ee !== h[W]), pe = b === "paint" && ((B = v ? a.get(v) : d) == null ? void 0 : B.activeStroke) || null;
    let fe = u.displayDirty || d.displayDirty || ve;
    for (const ee of A) {
      const W = a.get(ee);
      if (W != null && W.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (pe && (fe = !0), !fe) return;
    u.displayDirty = !1, d.displayDirty = !1;
    for (const ee of A) {
      const W = a.get(ee);
      W && (W.displayDirty = !1);
    }
    h = [...A];
    const z = f.ctx;
    ht(f);
    const ce = !!(pe != null && pe.isEraser);
    for (const ee of A) {
      const W = a.get(ee);
      if (!W) continue;
      const Ae = v === W.actionGroupId && b === "paint" ? W.activeStroke : null;
      if (ce)
        xt = Zn(xt, t, n), ht(xt), xt.ctx.drawImage(W.committedPaint.canvas, 0, 0), Ar(xt.ctx, l.canvas), z.drawImage(xt.canvas, 0, 0);
      else if (z.drawImage(W.committedPaint.canvas, 0, 0), Ae) {
        const Ie = W.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Ae.strokeOpacity ?? 1));
        z.save(), z.globalAlpha = Ie, z.drawImage(l.canvas, 0, 0), z.restore();
      }
    }
  }
  function V(A) {
    var pe, fe, z, ce, B;
    for (const ee of a.values())
      ht(ee.committedPaint), ht(ee.currentStroke), ee.activeStroke = null, ee.displayDirty = !0;
    ht(u.committedMask), ht(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, d.displayDirty = !0, h = null;
    const ve = [
      ...Array.isArray((fe = (pe = A == null ? void 0 : A.painting) == null ? void 0 : pe.paint) == null ? void 0 : fe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((ce = (z = A == null ? void 0 : A.painting) == null ? void 0 : z.mask) == null ? void 0 : ce.strokes) ? A.painting.mask.strokes : []
    ];
    for (const ee of ve) {
      if (((B = ee == null ? void 0 : ee.targetSpace) == null ? void 0 : B.kind) !== "ERP_GLOBAL") continue;
      const W = String((ee == null ? void 0 : ee.layerKind) || "paint"), Ae = String((ee == null ? void 0 : ee.toolKind) || "pen") === "eraser";
      if (W === "mask") {
        const Ie = u.descriptor;
        Ae ? (xt = Zn(xt, Ie.width, Ie.height), ht(xt), qa(xt.ctx, ee, Ie), Ar(u.committedMask.ctx, xt.canvas)) : qa(u.committedMask.ctx, ee, Ie);
        continue;
      }
      if (Ae) {
        xt = Zn(xt, i.width, i.height), ht(xt), qa(xt.ctx, ee, i);
        for (const Ie of a.values())
          Ar(Ie.committedPaint.ctx, xt.canvas), Ie.displayDirty = !0;
      } else {
        const Ie = String((ee == null ? void 0 : ee.actionGroupId) || "__default__"), Le = S(Ie), Ye = Le.descriptor;
        qa(Le.committedPaint.ctx, ee, Ye), Le.displayDirty = !0;
      }
    }
    k([...a.keys()]);
  }
  function R(A, ve) {
    b = String((A == null ? void 0 : A.layerKind) || "");
    const pe = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (b === "mask")
      v = null, ht(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const fe = pe ? d : S(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      v = pe ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), ht(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0;
    }
  }
  function O(A, ve) {
    var W;
    const pe = String((A == null ? void 0 : A.layerKind) || "paint"), fe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", z = pe === "mask" ? u : fe ? d : S(String((A == null ? void 0 : A.actionGroupId) || v || "__default__")), ce = z.activeStroke, B = z.descriptor;
    if (ce && ce.pointCount > 1) {
      const Z = z.currentStroke.ctx;
      Z.globalCompositeOperation = "source-over";
      const Ae = {
        ctx: Z,
        stampTex: ce.stampTex,
        radiusPx: ce.radiusPx,
        spacingPx: ce.spacingPx,
        desc: B,
        aspect: ce.aspect,
        angle: ce.angle,
        stampKind: ce.stampKind,
        scatter: ce.scatter,
        latitudeCorrection: ce.latitudeCorrection
      };
      ce.pointCount === 2 ? da(Ae, ce.lastMidX, ce.lastMidY, ce.prev.x, ce.prev.y, ce.distSinceStamp) : Eo(Ae, ce.pprev, { x: ce.lastMidX, y: ce.lastMidY }, ce.prev, ce.prev, ce.distSinceStamp);
    }
    z.lassoPreviewActive && (ht(z.currentStroke), _o(z.currentStroke.ctx, A, B), z.lassoPreviewActive = !1);
    const ee = pe === "mask" ? u.committedMask : z.committedPaint;
    if (fe && pe === "paint")
      for (const Z of a.values())
        Ar(Z.committedPaint.ctx, z.currentStroke.canvas), Z.displayDirty = !0;
    else if (fe)
      Ar(ee.ctx, z.currentStroke.canvas);
    else {
      const Z = Math.max(0, Math.min(1, (ce == null ? void 0 : ce.strokeOpacity) ?? 1));
      ee.ctx.save(), ee.ctx.globalAlpha = Z, ee.ctx.drawImage(z.currentStroke.canvas, 0, 0), ee.ctx.restore();
    }
    q1() && (String((A == null ? void 0 : A.toolKind) || ""), String((B == null ? void 0 : B.kind) || ""), Number((B == null ? void 0 : B.width) || 0), Number((B == null ? void 0 : B.height) || 0), String(((W = A == null ? void 0 : A.targetSpace) == null ? void 0 : W.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), sf(z.currentStroke.canvas), sf(ee.canvas), void 0), ht(z.currentStroke), z.activeStroke = null, z.displayDirty = !0, v = null, b = "", k([...a.keys()]);
  }
  function T(A) {
    if (b === "mask")
      ht(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b === "paint" && !v)
      ht(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (v) {
      const ve = a.get(v);
      ve && (ht(ve.currentStroke), ve.activeStroke = null, ve.lassoPreviewActive = !1, ve.displayDirty = !0);
    }
    v = null, b = "", k([...a.keys()]);
  }
  function I(A, ve) {
    var fe;
    if (b = String((A == null ? void 0 : A.layerKind) || ""), String(((fe = A == null ? void 0 : A.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (b === "mask")
        ht(u.currentStroke), _o(u.currentStroke.ctx, A, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const z = String((A == null ? void 0 : A.toolKind) || "") === "eraser", ce = z ? d : S(String((A == null ? void 0 : A.actionGroupId) || v || "__default__"));
        v = z ? "" : String((A == null ? void 0 : A.actionGroupId) || v || "__default__"), ht(ce.currentStroke), _o(ce.currentStroke.ctx, A, ce.descriptor), ce.lassoPreviewActive = !0, ce.displayDirty = !0;
      }
      k([...a.keys()]);
    }
  }
  function G(A) {
    return k(A ?? [...a.keys()]), {
      displayPaint: f,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function J(A) {
    return a.get(String(A)) ?? null;
  }
  function ae() {
    return [...a.keys()];
  }
  function re(A) {
    var B;
    const ve = a.get(String(A));
    if (!ve) return null;
    const pe = b === "paint" && v === ve.actionGroupId, fe = b === "paint" && ((B = v ? a.get(v) : d) == null ? void 0 : B.activeStroke) || null;
    if (fe != null && fe.isEraser)
      return Yt = Zn(Yt, t, n), ht(Yt), Yt.ctx.drawImage(ve.committedPaint.canvas, 0, 0), Ar(Yt.ctx, l.canvas), Yt.canvas;
    const z = pe ? ve.activeStroke : null;
    if (!z) return ve.committedPaint.canvas;
    Yt = Zn(Yt, t, n), ht(Yt), Yt.ctx.drawImage(ve.committedPaint.canvas, 0, 0);
    const ce = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, z.strokeOpacity ?? 1));
    return Yt.ctx.save(), Yt.ctx.globalAlpha = ce, Yt.ctx.drawImage(l.canvas, 0, 0), Yt.ctx.restore(), Yt.canvas;
  }
  function we() {
    return dr = Zn(dr, t, n), ht(dr), oc(dr.ctx, u.committedMask.canvas), b === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (xt = Zn(xt, t, n), ht(xt), xt.ctx.drawImage(u.committedMask.canvas, 0, 0), Ar(xt.ctx, l.canvas), ht(dr), oc(dr.ctx, xt.canvas)) : oc(dr.ctx, l.canvas)), dr.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: R,
    appendStrokePoint: cv,
    updateActiveStroke: I,
    commitActiveStroke: O,
    cancelActiveStroke: T,
    getErpTarget: G,
    ensureTarget: P,
    getGroupTarget: J,
    getGroupDisplayCanvas: re,
    getMaskDisplayCanvas: we,
    getAllGroupIds: ae
  };
}
function Y(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function sc(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Ft(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function lv(e, t) {
  let n = Ft(t) - Ft(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Ic = Math.PI / 180, Tc = 0.12, qd = 3, fl = 35, dl = 140, hi = 100, uv = 0.4, fv = 0.6, Xd = 5.5, Zd = 20, Ec = 0.8;
function dv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = Y(Number(e || hi), 1, 179) * Ic;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / Ic;
}
function hv(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function os(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: hi })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, f = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function v(R, O = null) {
    d && d(R, O);
  }
  function b(R, O, T = null, I = performance.now()) {
    return f.drag.active = !0, f.drag.lastX = Number(R || 0), f.drag.lastY = Number(O || 0), f.drag.lastTs = Number(I || performance.now()), f.drag.pointerId = T, f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.lastTs = f.drag.lastTs, f.velHistory = [], v("drag", { phase: "start", x: f.drag.lastX, y: f.drag.lastY, pointerId: T }), !0;
  }
  function h(R, O, T = "pano", I = performance.now()) {
    if (!f.drag.active) return !1;
    const G = Number(I || performance.now()), J = Number(R), ae = Number(O), re = J - f.drag.lastX, we = ae - f.drag.lastY;
    f.drag.lastX = J, f.drag.lastY = ae, f.drag.lastTs = G;
    const A = i() || { x: 1, y: 1 }, ve = Number(A.x || 1), pe = Number(A.y || 1), fe = { ...t() };
    let z = 0, ce = 0;
    if (T === "unwrap") {
      const ee = a() || { w: 1, h: 1 }, W = Math.max(1, Number(ee.w || 1)), Z = Math.max(1, Number(ee.h || 1)), Ae = re / W, Ie = we / Z;
      z = -Ae * 360 * ve, ce = Ie * 180 * pe;
    } else {
      const ee = l() || { w: 0, h: 0 }, W = Math.max(1, Number(ee.w || 0)), Z = Math.max(1, Number(ee.h || 0));
      if (W > 1 && Z > 1) {
        const Ae = Y(Number(fe.fov || hi), 1, 179), Ie = Y(dv(Ae, W, Z), 0.1, 179);
        z = -(re / W) * Ae * ve, ce = we / Z * Ie * pe;
      } else
        z = -re * Tc * ve, ce = we * Tc * pe;
    }
    fe.yaw = Ft(Number(fe.yaw || 0) + z), fe.pitch = Y(Number(fe.pitch || 0) + ce, -89.9, 89.9), n(fe), f.velHistory.push({ ts: G, yaw: fe.yaw, pitch: fe.pitch });
    let B = 0;
    for (; B < f.velHistory.length - 1 && f.velHistory[B].ts < G - 100; ) B++;
    return B > 0 && f.velHistory.splice(0, B), f.inertia.active = !1, f.inertia.lastTs = G, u(), v("drag", { phase: "move", dx: re, dy: we, dYaw: z, dPitch: ce }), !0;
  }
  function w(R = performance.now()) {
    if (!f.drag.active) return !1;
    f.drag.active = !1;
    const O = Number(R || performance.now());
    f.drag.lastTs = O;
    const T = f.velHistory.filter((G) => O - G.ts <= 80);
    if (T.length >= 2) {
      const G = T[0], J = T.at(-1), ae = Math.max(1e-3, (J.ts - G.ts) / 1e3);
      let re = J.yaw - G.yaw;
      re > 180 && (re -= 360), re < -180 && (re += 360), f.inertia.vx = re / ae, f.inertia.vy = (J.pitch - G.pitch) / ae;
    } else
      f.inertia.vx = 0, f.inertia.vy = 0;
    f.velHistory = [];
    const I = Math.hypot(f.inertia.vx, f.inertia.vy);
    return f.inertia.active = I > Zd, f.inertia.lastTs = O, v("drag", { phase: "end", speed: I, inertiaActive: f.inertia.active }), !0;
  }
  function S(R = performance.now()) {
    if (!f.inertia.active) return !1;
    const O = Number(R || performance.now()), T = Math.max(1e-3, (O - (f.inertia.lastTs || O)) / 1e3);
    f.inertia.lastTs = O;
    const I = { ...t() };
    I.yaw = Ft(Number(I.yaw || 0) + f.inertia.vx * T), I.pitch = Y(Number(I.pitch || 0) + f.inertia.vy * T, -89.9, 89.9);
    const G = Math.exp(-Xd * T);
    return f.inertia.vx *= G, f.inertia.vy *= G, Math.abs(f.inertia.vx) < Ec && Math.abs(f.inertia.vy) < Ec && (f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.active = !1), n(I), u(), f.inertia.active;
  }
  function P(R) {
    const O = Math.sign(Number(R || 0));
    if (!O) return !1;
    const T = { ...t() }, I = Number(T.fov || hi);
    return T.fov = Y(I + O * qd, fl, dl), n(T), u(), v("wheel", { deltaSign: O, fovBefore: I, fovAfter: T.fov }), !0;
  }
  function k(R) {
    return P(Math.sign(hv(R)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: hi }), f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, u();
  }
  return {
    state: f,
    startDrag: b,
    moveDrag: h,
    endDrag: w,
    stepInertia: S,
    applyWheel: P,
    applyWheelEvent: k,
    resetView: V
  };
}
const pv = {
  dragSensitivity: Tc,
  wheelStep: qd,
  fovMin: fl,
  fovMax: dl,
  initialFov: hi,
  inertiaBlendOld: uv,
  inertiaBlendInst: fv,
  inertiaDamping: Xd,
  inertiaStartSpeed: Zd,
  inertiaStopSpeed: Ec,
  rad2deg: 1 / Ic
};
function Do(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const df = Math.PI / 180;
function Vi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function gv(e) {
  const t = e || {}, n = Vi(t.yaw_deg, 0), i = Vi(t.pitch_deg, 0), a = Vi(t.roll_deg ?? t.rot_deg, 0), l = sc(Vi(t.hFOV_deg, 90), 1, 179), u = sc(Vi(t.vFOV_deg, 60), 1, 179), d = Math.tan(l * df * 0.5) / Math.max(1e-6, Math.tan(u * df * 0.5)), f = sc(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: u,
    aspect: f
  };
}
const Jd = 0.28;
function mv(e) {
  const t = e && typeof e == "object" ? e : {}, n = Y(Number(t.x0 ?? 0), 0, 1), i = Y(Number(t.y0 ?? 0), 0, 1), a = Y(Number(t.x1 ?? 1), 0, 1), l = Y(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function vv(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), l = t.includeHidden === !0, u = e.visible === !1, d = l && i && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: Y(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: Y(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: mv(e.crop),
    opacity: d ? Jd : Y(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function ss(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((u) => vv(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, d) => Number(u.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function Qd(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || ss(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var P;
    const f = String((d == null ? void 0 : d.assetId) || "").trim(), v = f || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!v || u.has(v)) return;
    const b = f ? a[f] : null, h = t(v, b, d);
    if (h instanceof HTMLImageElement && !h.complete) return;
    const w = Number((h == null ? void 0 : h.naturalWidth) || (h == null ? void 0 : h.videoWidth) || (h == null ? void 0 : h.width) || 0), S = Number((h == null ? void 0 : h.naturalHeight) || (h == null ? void 0 : h.videoHeight) || (h == null ? void 0 : h.height) || 0);
    !h || w <= 0 || S <= 0 || (u.add(v), l.push({
      assetId: v,
      source: h,
      revision: String(((P = n.revisionFor) == null ? void 0 : P.call(n, v, b, h)) ?? [
        v,
        Number(h.naturalWidth || h.videoWidth || h.width || 0),
        Number(h.naturalHeight || h.videoHeight || h.height || 0),
        String(h.currentSrc || h.src || "")
      ].join("|"))
    }));
  }), l;
}
function hl(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: Y(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function bv(e, t = 360) {
  return hl(e, t);
}
function vr(e) {
  const t = gv(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: Y(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: Y(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: rt } = ho;
function Lo() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ho == null ? void 0 : ho.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Sr = Math.PI / 180, yv = fl, _v = dl, ha = { Nu: 14, Nv: 9 }, xv = { Nu: 24, Nv: 14 }, wv = 10, hf = 0.16, Sv = 3, Nv = 220, Mv = "pano_suite.ui_settings.v1", kv = 120;
function Pv() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Mv)) || "").trim();
    if (!n) return e;
    const i = JSON.parse(n), a = String((i == null ? void 0 : i.preview_quality) || "balanced");
    return {
      invert_view_x: !!(i != null && i.invert_view_x),
      invert_view_y: !!(i != null && i.invert_view_y),
      preview_quality: a === "draft" || a === "high" ? a : "balanced"
    };
  } catch {
    return e;
  }
}
function eh() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Hi(e) {
  var n, i, a, l, u;
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
    styleHeight: String(((i = e.style) == null ? void 0 : i.height) || ""),
    styleWidth: String(((a = e.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((l = e.style) == null ? void 0 : l.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function th() {
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
    .pano-node-preview-dom button:active {
      background: rgba(28,28,30,1) !important;
      transform: translateY(1px);
    }
  `, document.head.appendChild(e);
}
function Xa(e, t, n = {}) {
  var h;
  if (!eh()) return;
  const i = e.__panoDomPreview, a = i == null ? void 0 : i.widget, l = i == null ? void 0 : i.root, u = (h = l == null ? void 0 : l.querySelector) == null ? void 0 : h.call(l, "div"), d = i == null ? void 0 : i.canvas, f = l == null ? void 0 : l.parentElement, v = f == null ? void 0 : f.parentElement, b = (w) => {
    var P;
    if (!w) return null;
    const S = (P = w.getBoundingClientRect) == null ? void 0 : P.call(w);
    return {
      tag: w.tagName.toLowerCase(),
      cw: w.clientWidth,
      ch: w.clientHeight,
      ow: w.offsetWidth,
      oh: w.offsetHeight,
      rect: S ? { w: Math.round(S.width), h: Math.round(S.height), top: Math.round(S.top) } : null,
      styleH: w.style.height,
      styleW: w.style.width
    };
  };
  d && (d.width, d.height), _n(e), `${t}`, {
    ...n,
    widgetCompute: a != null && a.__lastComputeSize,
    dom: (b(l), b(u), b(d), b(f), b(v))
  };
}
function _n(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (i, a) => {
    const l = Number(i), u = Number(a);
    return !Number.isFinite(l) || !Number.isFinite(u) ? null : [l, u];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const i = n(t[0], t[1]);
      if (i) return i;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const i = n(t.width, t.height);
      if (i) return i;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const i = n(t.w, t.h);
      if (i) return i;
    }
  }
  return null;
}
function Cv(e) {
  const t = _n(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function nh(e, t, n) {
  Cv(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function Dc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function yr(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function rh(e) {
  return Do(yr(e));
}
function Vr(e = null) {
  var l, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (l = rt == null ? void 0 : rt.canvas) == null ? void 0 : l.constructor) == null ? void 0 : u.name) || "");
  return [t, i, n, a].join("|");
}
function ih(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Vr(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Vr(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Vr(t)
  };
}
const ta = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Vr(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Vr(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, ah(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function ah(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : ih(i, e).chosenPath, l = Dc(e);
      this.activeBackend = l;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, f = n.noPreview === !0;
      if (l === a && l !== "none" && u === i && d === f) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = f, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && _r(e, { keepMonitor: i === "stickers" }), ub(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Dc(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      _r(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      _r(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Ro(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function _r(e, t = {}) {
  var i, a, l, u, d;
  if (!e) return;
  wi.unregister(e), Ro(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  try {
    (i = e.__panoDomRestore) == null || i.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (a = e.__panoLegacyRestore) == null || a.call(e);
  } catch {
  }
  e.__panoLegacyRestore = null;
  const n = e.__panoDomPreview;
  if (n) {
    try {
      (l = n.state) != null && l.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (d = (u = n.root) == null ? void 0 : u.remove) == null || d.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((f) => {
      if (f === (n == null ? void 0 : n.widget)) return !1;
      const v = String((f == null ? void 0 : f.name) || ""), b = String((f == null ? void 0 : f.type) || ""), h = Lo();
      return !(v === h || b === h || v === "pano_preview" || b === "pano_preview" || v === "preview" && b === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || ta.unregister(e);
}
function jr(e, t, n) {
  return { x: e, y: t, z: n };
}
function pf(e, t) {
  return jr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Za(e, t) {
  return jr(e.x * t, e.y * t, e.z * t);
}
function cc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function gf(e, t) {
  return jr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ja(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return jr(e.x / t, e.y / t, e.z / t);
}
function Er(e, t) {
  const n = e * Sr, i = t * Sr, a = Math.cos(i);
  return jr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function cs(e, t, n = 0) {
  const i = Er(e, t), a = jr(0, 1, 0);
  let l = gf(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = jr(1, 0, 0)), l = Ja(l);
  let u = Ja(gf(i, l));
  const d = n * Sr, f = Math.cos(d), v = Math.sin(d), b = pf(Za(l, f), Za(u, v)), h = pf(Za(l, -v), Za(u, f));
  return { fwd: i, right: Ja(b), up: Ja(h) };
}
function Av(e, t = "#00ff00") {
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
  let i = null;
  if (e && typeof e == "object")
    i = e;
  else if (typeof e == "string") {
    const a = e.trim();
    if (!a) return n;
    try {
      i = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = i;
    return !a || typeof a != "object" || Array.isArray(a) ? n : {
      ...n,
      ...a,
      coverage: Number(a.coverage) === 180 ? 180 : 360,
      assets: a.assets && typeof a.assets == "object" ? a.assets : {},
      stickers: Array.isArray(a.stickers) ? a.stickers : [],
      shots: Array.isArray(a.shots) ? a.shots : [],
      active: a.active && typeof a.active == "object" ? a.active : n.active
    };
  } catch {
    return n;
  }
}
function Iv(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = pa(e, "state_json")) == null ? void 0 : n.value) || "");
}
function pl(e) {
  var d, f;
  const t = Iv(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = pa(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((f = pa(e, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const u = Av(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: u }, u;
}
function pa(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function mf(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function oh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Tv(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function sh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function ch(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = Tv(e == null ? void 0 : e.graph, n)), i;
}
function Ev(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function ls(e, t = []) {
  const n = Ev(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function vf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Oo(e, t) {
  const n = vf(e), i = vf(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Dv(e, t = ["erp_image", "bg_erp"]) {
  var f;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = ls(e, t).map((v) => n.findIndex((b) => String((b == null ? void 0 : b.name) || "") === String(v))).filter((v) => v >= 0), l = n.map((v, b) => ({ input: v, idx: b })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), u = [.../* @__PURE__ */ new Set([...a, ...l])], d = [];
  for (const v of u) {
    const b = ch(e, v);
    if ((b == null ? void 0 : b.id) != null) {
      d.push(String(b.id));
      continue;
    }
    const h = (f = n[v]) == null ? void 0 : f.link;
    if (h == null) continue;
    const w = oh(e == null ? void 0 : e.graph, h), { originId: S } = sh(w);
    S != null && d.push(String(S));
  }
  return [...new Set(d)];
}
const wi = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = bn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var v, b, h, w, S;
        if (!l) return;
        const u = Oo(i, l == null ? void 0 : l.id);
        Dv(l, ["erp_image", "bg_erp"]).some((P) => Oo(i, P)), !(String(l.__panoPreviewMode || "") === "cutout" && !u) && (ga(l), (b = (v = l.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || b.call(v), (h = l.setDirtyCanvas) == null || h.call(l, !0, !0), (S = (w = l.graph) == null ? void 0 : w.setDirtyCanvas) == null || S.call(w, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
      });
    }, bn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = bn) != null && e.removeEventListener) || (bn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Fo(e) {
  var l;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", i), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((l = bn) == null ? void 0 : l.apiURL) == "function" ? bn.apiURL(a) : a;
}
function Lv(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Rv(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Ov(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function lh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Lv(t)) return [t];
  const { filename: n, subfolder: i } = Rv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => Fo({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Ov([...a, t]);
}
function Fv(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Fo({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Vo(e) {
  const t = rt == null ? void 0 : rt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Oo(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const u of l)
      if (Oo(u, a)) return t[u];
  }
  return null;
}
function Pn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Pn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Fo({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Pn(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Fo(e);
}
function Vv(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function uh(e) {
  return e ? e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : [
    String(e.currentSrc || e.src || ""),
    Number(e.naturalWidth || e.width || 0),
    Number(e.naturalHeight || e.height || 0)
  ].join("|") : "";
}
function gl(e, t) {
  var i;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", l = new URL(n, a);
    return t > 0 && l.searchParams.set("pano_rev", String(t)), l.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function Hv(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((u) => t.push(u));
  }, a = (l, u = 0) => {
    !l || u > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, u + 1), a(l.ui, u + 1), a(l.data, u + 1), a(l.result, u + 1));
  };
  return a(e, 0), t;
}
function fh(e, t) {
  try {
    const n = Hv(t);
    let i = "";
    for (const a of n)
      if (i = Pn(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), gl(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function jv(e, t = null) {
  var R, O;
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = Vo(n), a = [
    (R = i == null ? void 0 : i.ui) == null ? void 0 : R.pano_videos,
    i == null ? void 0 : i.pano_videos,
    (O = i == null ? void 0 : i.ui) == null ? void 0 : O.images,
    i == null ? void 0 : i.images
  ];
  let l = "";
  for (const T of a)
    if (Array.isArray(T)) {
      for (const I of T) {
        const G = Pn(I);
        if (G && (/\.mp4(\?|$)/i.test(G) || String((I == null ? void 0 : I.format) || "").toLowerCase() === "video/mp4")) {
          l = G;
          break;
        }
      }
      if (l) break;
    }
  if (!l) return null;
  const u = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), d = gl(l, u);
  e.__panoOwnOutputVideoCache || (e.__panoOwnOutputVideoCache = { src: "", video: null });
  const f = e.__panoOwnOutputVideoCache;
  if (f.video && f.src === d) return f.video;
  const v = document.createElement("video");
  v.muted = !0, v.loop = !0, v.playsInline = !0, v.crossOrigin = "anonymous";
  let b = 0;
  const h = typeof v.requestVideoFrameCallback == "function", w = () => {
    !h || b || v.paused || v.ended || (b = v.requestVideoFrameCallback(() => {
      b = 0, t == null || t(), w();
    }));
  }, S = () => {
    t == null || t(), v.play().then(() => {
      w();
    }).catch(() => {
    });
  }, P = () => t == null ? void 0 : t(), k = () => {
    t == null || t(), w();
  }, V = () => {
    t == null || t();
  };
  return v.addEventListener("loadedmetadata", S, { once: !0 }), v.addEventListener("canplay", S, { once: !0 }), h || v.addEventListener("timeupdate", P), v.addEventListener("play", k), v.addEventListener("pause", V), v.src = d, v.load(), f.src = d, f.video = v, v;
}
function zv(e, t = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = String((e == null ? void 0 : e.__panoOwnOutputSrc) || "").trim(), a = Vo(n), l = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(e == null ? void 0 : e.imgs) ? e.imgs : [], d = i ? [i, ...l, ...u] : [...l, ...u];
  let f = "";
  for (const R of d)
    if (f = Pn(R), f) break;
  if (!f) return null;
  const v = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), h = lh(f).map((R) => gl(R, v));
  if (!h.length) return null;
  const w = `${f}|rev:${v}`;
  e.__panoOwnOutputImageCache || (e.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const S = e.__panoOwnOutputImageCache;
  if (S.img && S.src === w) return S.img;
  if (S.pendingImg && S.pendingSrc === w)
    return S.img && (S.img.complete || S.img.naturalWidth || S.img.width) ? S.img : S.pendingImg;
  const P = new Image();
  let k = -1;
  const V = () => {
    if (k += 1, k >= h.length) {
      e.__panoOwnOutputImageCache === S && (S.pendingSrc = "", S.pendingImg = null);
      return;
    }
    P.src = h[k];
  };
  return P.onload = () => {
    var R;
    e.__panoOwnOutputImageCache === S && S.pendingImg === P && S.pendingSrc === w && (S.src = w, S.img = P, S.pendingSrc = "", S.pendingImg = null), t == null || t(), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
  }, P.onerror = () => {
    if (k + 1 >= h.length) {
      e.__panoOwnOutputImageCache === S && S.pendingImg === P && (S.pendingSrc = "", S.pendingImg = null);
      return;
    }
    V();
  }, S.pendingSrc = w, S.pendingImg = P, V(), S.img && (S.img.complete || S.img.naturalWidth || S.img.width) ? S.img : P;
}
function $v(e, t = []) {
  var v, b;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = ls(e, t).map((h) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(h))).filter((h) => h >= 0), l = n.map((h, w) => ({ input: h, idx: w })).filter(({ input: h }) => String((h == null ? void 0 : h.type) || "").toUpperCase() === "IMAGE").map(({ idx: h }) => h), u = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const h of u) {
    const w = n[h], S = w == null ? void 0 : w.link;
    if (S == null) continue;
    const P = oh(e.graph, S), { originId: k, originSlot: V } = sh(P);
    if (k == null) continue;
    const R = ch(e, h, k);
    if (!R) continue;
    const O = Number(V || 0), T = Vo((R == null ? void 0 : R.id) ?? k), I = Array.isArray(T == null ? void 0 : T.images) ? T.images : [];
    if (I.length) {
      const re = [];
      O >= 0 && O < I.length && re.push(I[O]), re.push(...I);
      for (const we of re) {
        const A = Pn(we);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let G = [];
    try {
      G = typeof (rt == null ? void 0 : rt.getNodeImageUrls) == "function" ? rt.getNodeImageUrls(R) || [] : [];
    } catch {
      G = [];
    }
    if (Array.isArray(G) && G.length) {
      const re = [];
      O >= 0 && O < G.length && re.push(G[O]), re.push(...G);
      for (const we of re) {
        const A = Pn(we);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const J = Array.isArray(R == null ? void 0 : R.imgs) ? R.imgs : [];
    if (J.length) {
      const re = [];
      O >= 0 && O < J.length && re.push(J[O]), re.push(...J);
      for (const we of re) {
        const A = Pn(we);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const ae = (v = R == null ? void 0 : R.widgets) == null ? void 0 : v.find((re) => String((re == null ? void 0 : re.name) || "").toLowerCase() === "image");
    if (ae) {
      let re = Pn(ae.value);
      if (re && !re.includes("/") && !re.includes(":") && (R.comfyClass === "LoadImage" || R.type === "LoadImage") && (re = bn.apiURL(`/view?filename=${encodeURIComponent(re)}&type=input&subfolder=`)), re)
        return String((w == null ? void 0 : w.name) || ""), { src: re, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const d = Vo(e == null ? void 0 : e.id), f = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && f.push(...d.pano_input_images), Array.isArray((b = d == null ? void 0 : d.ui) == null ? void 0 : b.pano_input_images) && f.push(...d.ui.pano_input_images), f.length > 0)
    for (const h of f) {
      const w = Pn(h);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Bv(e, t = [], n = {}) {
  const i = $v(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = lh(a);
  if (!l.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", f = e.__panoLinkedInputImageCache.get(d);
  if (f && f.srcRaw === a && f.img) return f.img;
  if (f && f.pendingSrcRaw === a && f.pendingImg)
    return u && f.img && (f.img.complete || f.img.naturalWidth || f.img.width) ? f.img : f.pendingImg;
  const v = new Image(), b = f || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  b.pendingSrcRaw = a, b.pendingResolvedSrc = "", b.pendingImg = v, e.__panoLinkedInputImageCache.set(d, b);
  let h = -1;
  const w = () => {
    var P, k, V, R;
    if (h += 1, h >= l.length) {
      if (((k = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : k.call(P, d)) === b && b.pendingImg === v && (b.pendingSrcRaw = "", b.pendingResolvedSrc = "", b.pendingImg = null, !b.img))
        try {
          (R = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || R.call(V, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const S = l[h];
    b.pendingResolvedSrc = S, v.src = S;
  };
  return v.onload = () => {
    var S, P, k;
    ((P = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : P.call(S, d)) === b && b.pendingImg === v && (b.srcRaw = a, b.resolvedSrc = String(b.pendingResolvedSrc || v.src || ""), b.img = v, b.pendingSrcRaw = "", b.pendingResolvedSrc = "", b.pendingImg = null), String(b.pendingResolvedSrc || b.resolvedSrc || v.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0);
  }, v.onerror = (S) => {
    var P, k, V, R;
    if (h + 1 < l.length) {
      w();
      return;
    }
    if (((k = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : k.call(P, d)) === b && b.pendingImg === v && (b.pendingSrcRaw = "", b.pendingResolvedSrc = "", b.pendingImg = null, !b.img))
      try {
        (R = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || R.call(V, d);
      } catch {
      }
    String(b.pendingResolvedSrc || b.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((S == null ? void 0 : S.type) || "error");
  }, w(), u && b.img && (b.img.complete || b.img.naturalWidth || b.img.width) ? b.img : v;
}
function Ho(e, t = [], n = null, i = {}) {
  const a = Bv(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function ga(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function ml(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function hr(e, t, n = "") {
  const i = ml(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < kv ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function jo(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = n / a, d = i / l, f = Math.min(u, d);
  return Number.isFinite(f) && f > 0 ? f : 1;
}
function dh(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || u <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), f = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), v = Math.max(Math.round(34 * n), d + Math.round(14 * n)), b = i + (l - f) * 0.5, h = a + (u - v) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(b, h, f, v, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", b + f * 0.5, h + v * 0.5 + 0.5), e.restore();
}
function Qa(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function Uv(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  if (n) {
    const a = t.find((l) => String((l == null ? void 0 : l.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function hh(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), l = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let d = a, f = a / u;
  return f > l && (f = l, d = l * u), {
    x: n + (a - d) * 0.5,
    y: i + (l - f) * 0.5,
    w: d,
    h: f
  };
}
function Kv(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || l <= 1) return !1;
  const u = hh(n, a / l);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function Gv(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var d;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let u = 22;
    try {
      const f = typeof l.computeSize == "function" ? l.computeSize(((d = _n(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(f) && Number.isFinite(Number(f[1])) && (u = Number(f[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function bf(e, t) {
  if (!e || !t || !Array.isArray(e.widgets)) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function xo(e) {
  const n = Gv(e) + 2, i = 8, a = _n(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || l < 80 ? null : { x: i, y: n, w: l, h: u };
}
function ph(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Fv(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const d = new Image();
  return d.src = a, d.onload = () => {
    var f, v, b;
    (v = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || v.call(f), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: d }), e.__panoPreviewImageCache.set(i, { src: a, img: d }), d;
}
function Wv(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, u) => Number((l == null ? void 0 : l.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Lc(e, t) {
  return ss(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Rc(e, t, n) {
  return Qd(t, (i, a) => ph(e, i, a), { scene: n });
}
function Yv(e, t) {
  var u;
  const n = vh(e, t);
  if (!n) return [];
  const i = bh(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], l = new Map(
    a.filter((d) => d && typeof d == "object").map((d) => [String((d == null ? void 0 : d.actionGroupId) || (d == null ? void 0 : d.id) || "").trim(), Number((d == null ? void 0 : d.z_index) || 0)])
  );
  return i.map((d) => {
    const f = n.getGroupDisplayCanvas(d);
    return f ? {
      id: `paint_group:${d}`,
      source: f,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${d}`,
      zIndex: Number(l.get(d) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function qv(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, u = (d) => {
    const f = d.x - a, v = d.y - l, b = Math.hypot(f, v) || 1;
    return { x: d.x + f / b * i, y: d.y + v / b * i };
  };
  return [u(e), u(t), u(n)];
}
function yf(e, t, n, i, a, l, u, d) {
  const f = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(f) < 1e-6) return;
  const [v, b, h] = qv(l, u, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(v.x, v.y), e.lineTo(b.x, b.y), e.lineTo(h.x, h.y), e.closePath(), e.clip();
  const w = (l.x * (i.y - a.y) + u.x * (a.y - n.y) + d.x * (n.y - i.y)) / f, S = (l.x * (a.x - i.x) + u.x * (n.x - a.x) + d.x * (i.x - n.x)) / f, P = (l.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / f, k = (l.y * (i.y - a.y) + u.y * (a.y - n.y) + d.y * (n.y - i.y)) / f, V = (l.y * (a.x - i.x) + u.y * (n.x - a.x) + d.y * (i.x - n.x)) / f, R = (l.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / f;
  e.transform(w, k, S, V, P, R), e.drawImage(t, 0, 0), e.restore();
}
function gh(e, t, n, i) {
  const a = cc(e, t.right), l = cc(e, t.up), u = cc(e, t.fwd);
  if (u <= 1e-4) return null;
  const d = l / u / i, f = a / u / i;
  return { x: n.x + n.w * 0.5 + f * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function mh(e, t, n, i, a, l, u, d = 12, f = 9) {
  var z;
  const v = Y(Number(u.hFOV_deg || 30), 1, 179) * Sr, b = Y(Number(u.vFOV_deg || 30), 1, 179) * Sr, h = Math.tan(v * 0.5), w = Math.tan(b * 0.5), S = u.crop || {}, P = Y(Number(S.x0 ?? 0), 0, 1), k = Y(Number(S.y0 ?? 0), 0, 1), V = Y(Number(S.x1 ?? 1), 0, 1), R = Y(Number(S.y1 ?? 1), 0, 1), O = Math.max(1e-4, V - P), T = Math.max(1e-4, R - k), I = cs(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), G = [], J = [], ae = [], re = [];
  for (let ce = 0; ce <= f; ce++) {
    const B = ce / f, W = (1 - (k + B * T) * 2) * w;
    for (let Z = 0; Z <= d; Z++) {
      const Ae = Z / d, Le = ((P + Ae * O) * 2 - 1) * h, Ye = I.fwd.x + I.right.x * Le + I.up.x * W, Ue = I.fwd.y + I.right.y * Le + I.up.y * W, at = I.fwd.z + I.right.z * Le + I.up.z * W, gt = Math.hypot(Ye, Ue, at) || 1e-8, Ct = Ye / gt, Ht = Ue / gt, dn = at / gt, on = Ct * i.right.x + Ht * i.right.y + dn * i.right.z, m = Ct * i.up.x + Ht * i.up.y + dn * i.up.z, D = Ct * i.fwd.x + Ht * i.fwd.y + dn * i.fwd.z;
      if (D <= 1e-4)
        G[ce] || (G[ce] = []), J[ce] || (J[ce] = []), G[ce][Z] = null, J[ce][Z] = null;
      else {
        const j = m / D / a, te = on / D / a;
        G[ce] || (G[ce] = []), J[ce] || (J[ce] = []), G[ce][Z] = n.x + n.w * 0.5 + te * n.h * 0.5, J[ce][Z] = n.y + n.h * 0.5 - j * n.h * 0.5;
      }
      ae[ce] || (ae[ce] = []), re[ce] || (re[ce] = []), ae[ce][Z] = Ae, re[ce][Z] = B;
    }
  }
  const we = (z = l.assets) == null ? void 0 : z[u.asset_id], A = ph(t, u.asset_id, we);
  if (!A || !A.complete || !A.naturalWidth) return;
  const ve = Number(A.naturalWidth || A.width || 1), pe = Number(A.naturalHeight || A.height || 1), fe = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = fe;
  for (let ce = 0; ce < f; ce++)
    for (let B = 0; B < d; B++) {
      const ee = G[ce][B], W = J[ce][B], Z = G[ce][B + 1], Ae = J[ce][B + 1], Ie = G[ce + 1][B], Le = J[ce + 1][B], Ye = G[ce + 1][B + 1], Ue = J[ce + 1][B + 1];
      if (ee === null || Z === null || Ie === null || Ye === null) continue;
      const at = ae[ce][B] * ve, gt = re[ce][B] * pe, Ct = ae[ce][B + 1] * ve, Ht = re[ce][B + 1] * pe, dn = ae[ce + 1][B] * ve, on = re[ce + 1][B] * pe, m = ae[ce + 1][B + 1] * ve, D = re[ce + 1][B + 1] * pe;
      yf(e, A, { x: at, y: gt }, { x: Ct, y: Ht }, { x: m, y: D }, { x: ee, y: W }, { x: Z, y: Ae }, { x: Ye, y: Ue }), yf(e, A, { x: at, y: gt }, { x: m, y: D }, { x: dn, y: on }, { x: ee, y: W }, { x: Ye, y: Ue }, { x: Ie, y: Le });
    }
}
function Xv(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = pl(e), a = xo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = cs(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * Sr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = Ho(
    e,
    ls(e, ["erp_image", "bg_erp"]),
    () => {
      var I, G, J;
      (G = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null || G.call(I), (J = e.setDirtyCanvas) == null || J.call(e, !0, !1);
    }
  ), f = !!(d && d.complete && (d.naturalWidth || d.width)), v = bl(e), b = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, h = v || b, w = ha, S = Lc(e, i), P = Rc(e, i, S), k = hl(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let V = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Hr()), f) {
    const I = as({
      stateRevision: [
        "runtime_panorama_scene",
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(P) ? P.map((ae) => `${String((ae == null ? void 0 : ae.assetId) || "")}:${String((ae == null ? void 0 : ae.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: d,
      backgroundRevision: [
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: S,
      textures: P,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), J = e.__panoRuntimeCore.syncState(I) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", k, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    V = !!J, J && t.drawImage(J, a.x, a.y, a.w, a.h);
  }
  const R = h ? 8 : 12, O = h ? 6 : 9, T = Wv(e, i);
  if (!f || T.length === 0) {
    const I = jo(t == null ? void 0 : t.canvas, a);
    _h(t, a, l, u, I);
  }
  !V && f && zo(e, t, a, l, u, d, w), !V && T.length > 0 && T.forEach((I) => mh(t, e, a, l, u, i, I, R, O)), t.restore();
}
function Zv(e, t, n, i, a = "preview_scene", l = "") {
  const u = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return as({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((d) => `${String((d == null ? void 0 : d.assetId) || "")}:${String((d == null ? void 0 : d.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: u,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function lc(e, t, n, i) {
  var l, u, d, f, v, b;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const h = i.convertEventToCanvasOffset(t);
      if (Array.isArray(h) && h.length >= 2)
        return {
          x: Number(h[0]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
          y: Number(h[1]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[0]) || 0),
      y: Number(t.canvasY) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[1]) || 0)
    };
  const a = Qv(e, t, i);
  return a || null;
}
function Jv(e, t) {
  var h, w;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (h = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : h.call(a), u = (t == null ? void 0 : t.ds) || ((w = rt == null ? void 0 : rt.canvas) == null ? void 0 : w.ds);
  if (!l || !u) return null;
  const d = Number(u.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const f = Array.isArray(u.offset) ? u.offset : [0, 0], v = (n - Number(l.left || 0)) / d - Number(f[0] || 0), b = (i - Number(l.top || 0)) / d - Number(f[1] || 0);
  return !Number.isFinite(v) || !Number.isFinite(b) ? null : { x: v, y: b };
}
function Qv(e, t, n) {
  var a, l;
  const i = Jv(t, n || (rt == null ? void 0 : rt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function _f(e) {
  return Number(e == null ? void 0 : e.button) === 0 && String((e == null ? void 0 : e.type) || "").toLowerCase().includes("down") ? !0 : String((e == null ? void 0 : e.type) || "").toLowerCase() === "mouseup" ? !1 : typeof (e == null ? void 0 : e.buttons) == "number" ? (e.buttons & 1) === 1 : typeof (e == null ? void 0 : e.which) == "number" ? e.which === 1 : typeof (e == null ? void 0 : e.button) == "number" ? e.button === 0 : !1;
}
function eo(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), _n(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", nh(e, 320, 180), Hn(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var w, S;
    const h = t ? t.apply(this, arguments) : void 0;
    try {
      const P = arguments[0];
      P && !((w = this.flags) != null && w.collapsed) && (i.stepInertia(performance.now()) && ((S = this.setDirtyCanvas) == null || S.call(this, !0, !1)), Xv(this, P, i));
    } catch {
    }
    return h;
  }, e.onResize = function() {
    var w;
    const h = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Si(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), kh(this, 220, null), h;
  };
  const i = os({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (h) => {
      e.__panoPreviewView = h;
    },
    getViewportSize: () => {
      const h = xo(e);
      return {
        w: Math.max(1, Number((h == null ? void 0 : h.w) || 0)),
        h: Math.max(1, Number((h == null ? void 0 : h.h) || 0))
      };
    },
    onInteraction: () => {
      var h;
      vl(e), (h = e.setDirtyCanvas) == null || h.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(h, w, S) {
    var P;
    try {
      if (!((P = this.flags) != null && P.collapsed)) {
        const k = lc(this, h, w, S) || { x: 0, y: 0 }, V = _n(this), R = Number((V == null ? void 0 : V[0]) || 0), O = Number((V == null ? void 0 : V[1]) || 0);
        if (k.x >= R - 20 && k.y >= O - 20)
          return a ? a.apply(this, arguments) : void 0;
        const I = xo(this);
        if (mf(k.x, k.y, I))
          return (h == null ? void 0 : h.button) === 0 && i.startDrag(k.x, k.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(h, w, S) {
    try {
      const P = lc(this, h, w, S);
      if (i.state.drag.active) {
        if (typeof (h == null ? void 0 : h.buttons) == "number" && (h.buttons & 1) === 0)
          return i.endDrag(), !0;
        const k = P || i.state.drag;
        return i.moveDrag(k.x, k.y, "pano"), !0;
      }
    } catch {
    }
    return l ? l.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const d = e.onMouseLeave;
  e.onMouseLeave = function() {
    const h = d ? d.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), h;
  };
  const f = e.onMouseWheel;
  e.onMouseWheel = function(h, w, S) {
    var P, k;
    try {
      if ((P = this.flags) != null && P.collapsed) return f ? f.apply(this, arguments) : void 0;
      const V = lc(this, h, w, S), R = xo(this);
      if (!V || !mf(V.x, V.y, R)) return f ? f.apply(this, arguments) : void 0;
      const O = Number((h == null ? void 0 : h.deltaY) ?? (h == null ? void 0 : h.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return i.applyWheel(Math.sign(O)) && ((k = this.setDirtyCanvas) == null || k.call(this, !0, !1)), typeof (h == null ? void 0 : h.preventDefault) == "function" && h.preventDefault(), typeof (h == null ? void 0 : h.stopPropagation) == "function" && h.stopPropagation(), !0;
    } catch {
      return f ? f.apply(this, arguments) : void 0;
    }
  };
  const v = e.onRemoved, b = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = u, e.onMouseLeave = d, e.onMouseWheel = f, e.onRemoved = v, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = b, e.onRemoved = function() {
    return b(), ta.unregister(this), wi.unregister(this), v ? v.apply(this, arguments) : void 0;
  };
}
function eb(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function vh(e, t) {
  var v, b, h, w, S, P, k, V, R, O, T, I;
  const n = (b = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.paint) == null ? void 0 : b.strokes, i = (w = (h = t == null ? void 0 : t.painting) == null ? void 0 : h.mask) == null ? void 0 : w.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const u = eb(e, t), d = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = Ac(u), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const f = {
    paint: n || null,
    mask: i || null,
    groups: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.groups) || null,
    rasterObjects: ((P = t == null ? void 0 : t.painting) == null ? void 0 : P.raster_objects) || null
  };
  return (((k = e.__panoPreviewPaintRevision) == null ? void 0 : k.paint) !== f.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== f.mask || ((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.groups) !== f.groups || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.rasterObjects) !== f.rasterObjects) && (e.__panoPreviewPaintRevision = f, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function bh(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function tb(e, t) {
  const n = vh(e, t);
  if (!n) return null;
  const i = bh(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function nb(e, t, n = null) {
  var d;
  const i = (d = t == null ? void 0 : t.painting_layer) == null ? void 0 : d.paint, a = Pn(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const u = new Image();
  return u.onload = () => {
    var f;
    n == null || n(), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0);
  }, u.onerror = () => {
    var f;
    ((f = e.__panoPaintingLayerImageCache) == null ? void 0 : f.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function xf(e, t) {
  var l, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const d = nb(e, t, () => {
      var f, v;
      return (v = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null ? void 0 : v.call(f);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || d.currentSrc || d.src || "")
      };
  }
  const a = tb(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function rb(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function yh(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function ib(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const u = rb(n);
  if (u.width === i && u.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const f = yh(e, l, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!f) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    f.clearRect(0, 0, u.width, u.height), f.drawImage(n, 0, 0, u.width, u.height);
    const v = f.getImageData(0, 0, u.width, u.height).data, b = t.getImageData(0, 0, i, a), h = b.data, w = Math.max(0, u.width - 1), S = Math.max(0, u.height - 1);
    for (let P = 0; P < a; P += 1) {
      const k = (P + 0.5) * u.height / a - 0.5, V = Y(Math.floor(k), 0, S), R = Y(V + 1, 0, S), O = Y(k - V, 0, 1);
      for (let T = 0; T < i; T += 1) {
        const I = (T + 0.5) * u.width / i - 0.5, G = Y(Math.floor(I), 0, w), J = Y(G + 1, 0, w), ae = Y(I - G, 0, 1);
        let re = 0, we = 0, A = 0, ve = 0;
        const pe = (ce, B, ee) => {
          const W = (B * u.width + ce) * 4, Z = (v[W + 3] || 0) / 255;
          re += Z * ee, we += (v[W] || 0) / 255 * Z * ee, A += (v[W + 1] || 0) / 255 * Z * ee, ve += (v[W + 2] || 0) / 255 * Z * ee;
        };
        if (pe(G, V, (1 - ae) * (1 - O)), pe(J, V, ae * (1 - O)), pe(G, R, (1 - ae) * O), pe(J, R, ae * O), re <= 1e-6) continue;
        const fe = (P * i + T) * 4, z = 1 - re;
        h[fe] = Math.round(Y((we + h[fe] / 255 * z) * 255, 0, 255)), h[fe + 1] = Math.round(Y((A + h[fe + 1] / 255 * z) * 255, 0, 255)), h[fe + 2] = Math.round(Y((ve + h[fe + 2] / 255 * z) * 255, 0, 255)), h[fe + 3] = 255;
      }
    }
    t.putImageData(b, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function wf(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let f = e.__panoPreviewBgPaint;
  if (!f || f.__revKey !== d || f.width !== a || f.height !== l) {
    (!f || f.width !== a || f.height !== l) && (f = document.createElement("canvas"), f.width = a, f.height = l, e.__panoPreviewBgPaint = f);
    const v = f.getContext("2d");
    v.clearRect(0, 0, a, l), v.drawImage(t, 0, 0, a, l), ib(e, v, n, a, l, "__panoPreviewOverlayScratch"), f.__revKey = d;
  }
  return f;
}
function ab(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  ml(e, a);
  const l = pl(e), u = t.parentElement, d = 1, f = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), v = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), b = Math.max(64, Math.round(f * d)), h = Math.max(64, Math.round(v * d)), w = t.getContext("2d");
  if (w)
    if (a === "cutout") {
      const S = Uv(l), P = Ho(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var re, we;
          return (we = (re = e.__panoDomPreview) == null ? void 0 : re.requestDraw) == null ? void 0 : we.call(re);
        },
        { preserveReadyWhilePending: !1 }
      ), k = !!(P && P.complete && (P.naturalWidth || P.width));
      (t.width !== b || t.height !== h) && (t.width = b, t.height = h);
      const V = { x: 0, y: 0, w: b, h }, R = k ? Y(Number((P.naturalWidth || P.width) / Math.max(1, Number(P.naturalHeight || P.height || 1))), 0.05, 20) : 1, O = S ? vr(S) : null, T = Y(Number((O == null ? void 0 : O.aspect) || R || 1), 0.05, 20), I = hh(V, T);
      jo(t, V), w.setTransform(1, 0, 0, 1, 0, 0), w.fillStyle = "#070707", w.fillRect(0, 0, b, h);
      let G = "none", J = "Open editor and add frame", ae = "";
      if (ae = String((P == null ? void 0 : P.src) || ""), S)
        if (P && !k)
          G = "loading";
        else if (k) {
          const re = Lc(e, l), we = Rc(e, l, re), A = Yv(e, l), ve = Ui({
            stateRevision: [
              "runtime_cutout_scene",
              String(P.currentSrc || P.src || ""),
              Number(P.naturalWidth || P.width || 0),
              Number(P.naturalHeight || P.height || 0),
              Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
              String((S == null ? void 0 : S.id) || ""),
              Array.isArray(we) ? we.map((fe) => `${String((fe == null ? void 0 : fe.assetId) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}`).join(",") : "",
              Array.isArray(A) ? A.map((fe) => `${String((fe == null ? void 0 : fe.id) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}:${Number((fe == null ? void 0 : fe.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: P,
            backgroundRevision: String(P.currentSrc || P.src || ""),
            coverageDeg: Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
            scene: re,
            textures: we,
            rasterEntries: A,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Hr()), e.__panoRuntimeCore.syncState(ve), e.__panoRuntimeCore.renderToContext(
            w,
            I,
            vr(S),
            { width: I.w, height: I.h, dpr: 1 }
          ) || (G = "empty", J = "Open editor or run node");
        } else
          G = "empty", J = "Connect ERP image";
      else {
        if (k) {
          const re = xf(e, l), we = re != null && re.source ? wf(e, P, re.source, re.revision || "") : P;
          Kv(w, we, V, 0.44);
        }
        G = "empty", J = "Open editor and add frame";
      }
      G === "loading" ? (Qa(e, !1), hr(e, !0, ae)) : G === "empty" ? (Qa(e, !0, J), hr(e, !1, "")) : (Qa(e, !1), hr(e, !1, ""));
    } else {
      Qa(e, !1), (t.width !== b || t.height !== h) && (t.width = b, t.height = h);
      const S = { x: 0, y: 0, w: b, h }, P = jo(t, S);
      w.setTransform(1, 0, 0, 1, 0, 0), w.clearRect(0, 0, b, h), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const k = cs(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * Sr * 0.5), R = Ho(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var pe, fe;
          return (fe = (pe = e.__panoDomPreview) == null ? void 0 : pe.requestDraw) == null ? void 0 : fe.call(pe);
        }
      ), O = !!(R && R.complete && (R.naturalWidth || R.width));
      w.fillStyle = "#1a1a1e", w.fillRect(0, 0, b, h);
      const T = Lc(e, l), I = Rc(e, l, T), G = hl(e.__panoPreviewView, l == null ? void 0 : l.coverage), J = xf(e, l), ae = (J == null ? void 0 : J.source) || null, re = O && ae ? wf(e, R, ae, (J == null ? void 0 : J.revision) || "") : R, we = re !== R ? String(re.__revKey || "") : R ? [
        String(R.currentSrc || R.src || ""),
        Number(R.naturalWidth || R.width || 0),
        Number(R.naturalHeight || R.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Hr());
      let A = !1;
      if (O) {
        const fe = e.__panoDomRuntimeCore.syncState(
          Zv(re, l, T, I, "runtime_dom_scene", we)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", G, {
          width: S.w,
          height: S.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        fe && (w.drawImage(fe, S.x, S.y, S.w, S.h), A = !0);
      }
      const ve = T.stickers;
      if (O && A)
        hr(e, !1, "");
      else if (O)
        zo(e, w, S, k, V, re, ha), hr(e, !1, "");
      else if (ae)
        zo(e, w, S, k, V, ae, ha), hr(e, !!R && !O, String((R == null ? void 0 : R.src) || ""));
      else {
        const pe = !!R && !O;
        hr(e, pe, String((R == null ? void 0 : R.src) || "")), pe && dh(w, S, P);
      }
      if ((!O || ve.length === 0) && _h(w, S, k, V, P), !A && ve.length > 0) {
        const pe = bl(e), fe = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, z = pe || fe, ce = z ? 8 : 12, B = z ? 6 : 9;
        ve.forEach((ee) => mh(w, e, S, k, V, l, ee, ce, B));
      } else if (!R || !O) {
        const pe = Math.max(14, Math.round(16 * P));
        w.fillStyle = "rgba(212,212,216,0.85)", w.font = `600 ${pe}px Plus Jakarta Sans, Geist, sans-serif`, w.textAlign = "center", w.fillText("Open editor to add stickers", b * 0.5, h * 0.5 + 24 * P);
      }
    }
}
function zo(e, t, n, i, a, l, u = xv) {
  const d = pl(e), f = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Hr());
  const v = uh(l), b = as({
    stateRevision: [
      "runtime_bg_only",
      v,
      Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: v,
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(b)) return;
  const w = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(f.yaw || 0),
    pitchDeg: Number(f.pitch || 0),
    fovDeg: Number(f.fov || 100),
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  w && t.drawImage(w, n.x, n.y, n.w, n.h);
}
function Sf(e, t, n, i, a, l, u = 1) {
  let d = !1;
  e.strokeStyle = l, e.lineWidth = u, e.beginPath();
  for (const f of t) {
    const v = gh(f, n, i, a);
    if (!v) {
      d = !1;
      continue;
    }
    d ? e.lineTo(v.x, v.y) : (e.moveTo(v.x, v.y), d = !0);
  }
  e.stroke();
}
function _h(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let v = -75; v <= 75; v += 15) {
    const b = [];
    for (let h = -180; h <= 180; h += 15) b.push(Er(h, v));
    Sf(e, b, n, t, i, v === 0 ? u : l, v === 0 ? 1.5 : 1);
  }
  for (let v = -180; v <= 180; v += 45) {
    const b = [];
    for (let h = -89; h <= 89; h += 15) b.push(Er(v, h));
    Sf(e, b, n, t, i, v % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, v % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: Er(0, 0) },
    { name: "Right", dir: Er(90, 0) },
    { name: "Back", dir: Er(180, 0) },
    { name: "Left", dir: Er(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const f = Math.max(9, Math.round(11 * a));
  e.font = `500 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", d.forEach((v) => {
    const b = gh(v.dir, n, t, i);
    b && e.fillText(v.name, b.x, b.y + 20 * a);
  }), e.restore();
}
function xh(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function vl(e) {
  const t = xh(e);
  t.dragging = !1, t.hqFrames = wv;
}
function Si(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function bl(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function ob(e, t = performance.now()) {
  const n = xh(e);
  if (n.lastFrameTs > 0) {
    const i = Math.max(1, t - n.lastFrameTs);
    n.frameEmaMs <= 0 ? n.frameEmaMs = i : n.frameEmaMs = n.frameEmaMs * (1 - hf) + i * hf;
  }
  return n.lastFrameTs = t, n.frameEmaMs;
}
function sb(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function cb(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function Fn(e, t) {
  return cb(e, t) ? !1 : (sb(e), !0);
}
function wh() {
  var n;
  const e = (n = rt == null ? void 0 : rt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Sh(e) {
  var n;
  if (!e) return;
  const t = (n = rt == null ? void 0 : rt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Nh(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0) return;
  const i = _n(e), a = Number((i == null ? void 0 : i[0]) || 0), l = Number((i == null ? void 0 : i[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(l) || a >= t && l >= n) return;
  const u = [Math.max(t, a), Math.max(n, l)];
  try {
    typeof e.setSize == "function" ? e.setSize(u) : e.size = u, e.__panoStandaloneBootSized = !0;
  } catch (d) {
    String((d == null ? void 0 : d.message) || d || "unknown");
  }
}
function Mh(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, u;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Oc(e, t = null, n = 0) {
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, Si(e, 150), t == null || t(), kh(e, 180, t);
    }
  };
}
function kh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Hn(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function Ki(e) {
  return e.__panoStandaloneView || (e.__panoStandaloneView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoStandaloneView;
}
function na(e) {
  if (e) {
    if (typeof e.__panoStandaloneUnavailableRestore == "function")
      try {
        e.__panoStandaloneUnavailableRestore();
      } catch {
      }
    e.__panoStandaloneUnavailableRestore = null, e.__panoStandaloneUnavailable = !1;
  }
}
function $o(e, t = "Node 2.0 preview unavailable") {
  var i;
  if (!e || e.__panoStandaloneUnavailable) return;
  const n = e.onDrawForeground;
  e.onDrawForeground = function(a) {
    var b, h, w;
    const l = n ? n.apply(this, arguments) : void 0;
    if (!a || (b = this.flags) != null && b.collapsed) return l;
    const u = 8, d = 44, f = Math.max(120, Number(((h = this.size) == null ? void 0 : h[0]) || 320) - 16), v = Math.max(70, Number(((w = this.size) == null ? void 0 : w[1]) || 240) - 52);
    return a.save(), a.fillStyle = "rgba(20,20,24,0.94)", a.strokeStyle = "rgba(78,78,86,0.95)", a.lineWidth = 1, a.beginPath(), a.roundRect(u, d, f, v, 8), a.fill(), a.stroke(), a.fillStyle = "rgba(236,236,242,0.92)", a.font = "600 12px Plus Jakarta Sans, Geist, sans-serif", a.textAlign = "center", a.textBaseline = "middle", a.fillText(String(t), u + f * 0.5, d + v * 0.5), a.restore(), l;
  }, e.__panoStandaloneUnavailableRestore = () => {
    e.onDrawForeground = n, e.__panoStandaloneUnavailableRestore = null, e.__panoStandaloneUnavailable = !1;
  }, e.__panoStandaloneUnavailable = !0, (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
}
function lb(e, t, n, i = "erp_image", a = ha) {
  var T, I, G;
  ml(e, "standalone");
  const l = jo(t == null ? void 0 : t.canvas, n), u = Ki(e), d = cs(Number(u.yaw || 0), Number(u.pitch || 0), 0), f = Math.tan(Number(u.fov || 100) * Sr * 0.5), v = ls(e, [i, "erp_image", "bg_erp"]), h = rh(e) ? jv(e, () => {
    var J, ae;
    return (ae = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : ae.call(J);
  }) || zv(e, () => {
    var J, ae;
    return (ae = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : ae.call(J);
  }) : Ho(
    e,
    v,
    () => {
      var J, ae;
      return (ae = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : ae.call(J);
    }
  ), w = Vv(h), S = String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || ""), P = Number(((G = (I = (T = e == null ? void 0 : e.widgets) == null ? void 0 : T.find) == null ? void 0 : I.call(T, (J) => (J == null ? void 0 : J.name) === "coverage")) == null ? void 0 : G.value) || 360) === 180 ? 180 : 360, k = uh(h), V = String(e.__panoStandaloneLastFrameSrc || ""), R = !!e.__panoStandaloneLastFrameCanvas && !!S && S === V;
  if (e.__panoStandaloneCore || (e.__panoStandaloneCore = Hr()), w) {
    const J = as({
      stateRevision: [
        "standalone_preview_scene",
        k,
        P
      ].join("|"),
      backgroundSource: h,
      backgroundRevision: k,
      coverageDeg: P,
      scene: ss(null, {}),
      textures: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), re = e.__panoStandaloneCore.syncState(J) ? e.__panoStandaloneCore.renderToTarget("preview_node", bv(u, P), {
      width: n.w,
      height: n.h,
      dpr: window.devicePixelRatio || 1
    }) : null, we = !!re;
    if (re) {
      t.drawImage(re, n.x, n.y, n.w, n.h);
      const ve = yh(e, "__panoStandaloneLastFrameCanvas", n.w, n.h).getContext("2d");
      ve && (ve.clearRect(0, 0, n.w, n.h), ve.drawImage(re, 0, 0, n.w, n.h), e.__panoStandaloneLastFrameSrc = S);
    }
    we || (R ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h), zo(e, t, n, d, f, h, a)));
  } else
    R ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h));
  hr(e, !!h && !w, S) && dh(t, n, l);
}
function ub(e, t = {}) {
  var ee;
  const n = t.__allowStandalone === !0, i = rh(e);
  if (i && !n) {
    yr(e);
    return;
  }
  i && Nh(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", wi.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ta.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), f = a ? ih(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Vr(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (f.chosenPath = d, f.reason = "controller_target_backend");
  const v = a ? f.chosenPath : "dom", b = f.signature || Vr(e);
  if (Number(e.__panoRebindGeneration || 0), Dc(e), e == null || e.id, e.__panoPreviewMode, f.reason, f.frontendVersionRaw, e.addDOMWidget, _n(e), e.__panoFrontendSig = b, e.__panoStickersPath = v, a && ta.register(e), a && v === "legacy_draw") {
    if (l) return;
    _r(e, { keepMonitor: !0 }), eo(e);
    return;
  }
  if ((ee = e.__panoDomPreview) != null && ee.widget) return;
  if (e.__panoLegacyPreviewHooked && _r(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && eo(e);
    return;
  }
  const h = t.noPreview === !0, w = a || h ? 0 : 56, S = document.createElement("div");
  if (th(), S.className = "pano-node-preview-dom", S.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), h && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.setAttribute("tabindex", "-1"), S.style.cssText = [
    "width:100%",
    h ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), h) {
    const W = e.addDOMWidget(Lo(), "preview", S, Oc(e, null));
    Hn(e), e.__panoDomPreview = { widget: W, root: S, requestDraw: () => {
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
  const k = document.createElement("canvas");
  k.style.cssText = [
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
  const V = document.createElement("div");
  V.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", P.appendChild(k), P.appendChild(V), S.appendChild(P), nh(e, 120, 120), Hn(e);
  let R = null;
  try {
    Mh(e, w, () => {
      var W, Z;
      return (Z = (W = e.__panoDomPreview) == null ? void 0 : W.requestDraw) == null ? void 0 : Z.call(W);
    }), R = e.addDOMWidget(
      Lo(),
      "preview",
      S,
      Oc(e, () => {
        var W, Z;
        return (Z = (W = e.__panoDomPreview) == null ? void 0 : W.requestDraw) == null ? void 0 : Z.call(W);
      }, w)
    );
  } catch {
    a && eo(e);
    return;
  }
  const O = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    O.needsDraw = !0, O.raf || (O.raf = requestAnimationFrame(J));
  }, I = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Si(e, 150), T();
  }) : null;
  I == null || I.observe(P);
  const G = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const W = 3, Z = (Ae) => {
      requestAnimationFrame(() => {
        var Le;
        const Ie = !!(S != null && S.isConnected && (P != null && P.isConnected) && (k != null && k.isConnected) && Number(P.clientHeight || 0) > 0 && Number(k.clientHeight || 0) > 0);
        if (!Ie && Ae < W) {
          Z(Ae + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((P == null ? void 0 : P.clientHeight) || 0), Number((k == null ? void 0 : k.clientHeight) || 0), !Ie) {
          if (l) {
            e.__panoPreviewMode, Number((P == null ? void 0 : P.clientHeight) || 0), Number((k == null ? void 0 : k.clientHeight) || 0);
            return;
          }
          _r(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", eo(e), (Le = e.setDirtyCanvas) == null || Le.call(e, !0, !0);
        }
      });
    };
    Z(1);
  }, J = (W) => {
    var Ae, Ie, Le;
    O.raf = 0;
    const Z = ae.stepInertia(W);
    (O.needsDraw || Z) && (O.needsDraw = !1, (Ae = e.flags) != null && Ae.collapsed || ab(e, k, null, ae), (Ie = e.setDirtyCanvas) == null || Ie.call(e, !0, !1)), (Z || O.needsDraw) && (O.raf = requestAnimationFrame(J)), eh() && (!e.__panoDebugLastTs || W - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = W, e.__panoPreviewMode, _n(e), Hi(S), Hi(P), Hi(k), Hi(S.parentElement), Hi((Le = S.parentElement) == null ? void 0 : Le.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, ae = os({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (W) => {
      e.__panoPreviewView = W;
    },
    onInteraction: () => {
      T();
    }
  });
  k.addEventListener("pointerdown", (W) => {
    var Z, Ae;
    Fn(W, P) && u && W.button === 0 && ((Z = S.focus) == null || Z.call(S), (Ae = k.setPointerCapture) == null || Ae.call(k, W.pointerId), k.style.cursor = "grabbing", ae.startDrag(W.clientX, W.clientY, W.pointerId));
  }), k.addEventListener("pointermove", (W) => {
    !u || !ae.state.drag.active || (Fn(W, P), ae.moveDrag(W.clientX, W.clientY, "pano"));
  });
  const re = (W) => {
    var Z;
    !u || !ae.state.drag.active || (Fn(W, P), (Z = k.releasePointerCapture) == null || Z.call(k, W.pointerId), k.style.cursor = "grab", ae.endDrag(), vl(e), T());
  };
  k.addEventListener("pointerup", re), k.addEventListener("pointercancel", re), k.addEventListener("pointerleave", (W) => {
    ae.state.drag.active && re(W);
  });
  const we = (W) => {
    var Ae, Ie, Le;
    if (!Fn(W, P) || !u) return;
    const Z = wh();
    ae.applyWheelEvent(W) && T(), (Ae = W.preventDefault) == null || Ae.call(W), (Ie = W.stopPropagation) == null || Ie.call(W), (Le = W.stopImmediatePropagation) == null || Le.call(W), requestAnimationFrame(() => {
      var Ye, Ue;
      Sh(Z), (Ue = (Ye = rt == null ? void 0 : rt.canvas) == null ? void 0 : Ye.setDirty) == null || Ue.call(Ye, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((W) => {
    P.addEventListener(W, we, { passive: !1, capture: !0 }), k.addEventListener(W, we, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((W) => {
    k.addEventListener(W, (Z) => Fn(Z, P)), P.addEventListener(W, (Z) => Fn(Z, P));
  });
  const A = pa(e, "state_json");
  if (A && !A.__panoPreviewPatchedCb) {
    A.__panoPreviewPatchedCb = !0;
    const W = A.callback;
    A.callback = (Z) => {
      const Ae = W ? W(Z) : void 0;
      return T(), Ae;
    };
  }
  const ve = pa(e, "bg_color");
  if (ve && !ve.__panoPreviewPatchedCb) {
    ve.__panoPreviewPatchedCb = !0;
    const W = ve.callback;
    ve.callback = (Z) => {
      const Ae = W ? W(Z) : void 0;
      return T(), Ae;
    };
  }
  const pe = e.onRemoved, fe = e.onResize, z = e.onExecuted;
  e.onExecuted = function(W) {
    fh(e, W), ga(e), Hn(e), T();
    const Z = z ? z.apply(this, arguments) : void 0;
    return Hn(e), Z;
  };
  const ce = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return ga(e), Hn(e), T(), ce ? ce.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var Z;
    const W = fe ? fe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Si(this, 150), T(), (Z = this.setDirtyCanvas) == null || Z.call(this, !0, !1), W;
  }, e.onRemoved = function() {
    return B(), ta.unregister(this), wi.unregister(this), pe ? pe.apply(this, arguments) : void 0;
  };
  const B = () => {
    var W;
    O.raf && cancelAnimationFrame(O.raf), (W = I == null ? void 0 : I.disconnect) == null || W.call(I), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = fe, e.onExecuted = z, e.onConnectionsChange = ce, e.onRemoved = pe;
  };
  e.__panoDomRestore = B, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: R, root: S, canvas: k, requestDraw: T, state: O, emptyHintEl: V }, G(), T();
}
function Nf(e, t = {}) {
  ah(e).attach({
    ...t,
    mode: "cutout"
  });
}
function fb(e) {
  var f;
  const t = e == null ? void 0 : e.root, n = (f = t == null ? void 0 : t.querySelector) == null ? void 0 : f.call(t, "div"), i = e == null ? void 0 : e.canvas;
  if (!t || !i || !t.isConnected || !i.isConnected) return !1;
  const a = Number(i.clientWidth || 0), l = Number(i.clientHeight || 0);
  if (a > 0 && l > 0) return !0;
  const u = Number(t.clientWidth || 0), d = Number(t.clientHeight || 0);
  if (u > 0 && d > 0) return !0;
  if (n) {
    const v = Number(n.clientWidth || 0), b = Number(n.clientHeight || 0);
    if (v > 0 && b > 0) return !0;
  }
  return !1;
}
function db(e, t = {}, n = null) {
  var d;
  let i = !1;
  try {
    i = pb(e, {
      ...t,
      __noAutoFallback: !0,
      __skipRouteLog: !0
    }) === !0;
  } catch {
    i = !1;
  }
  if (!i || !((d = e.__panoDomPreview) != null && d.widget))
    return $o(e, "Preview mount failed"), yr(e), !0;
  Ro(e);
  const a = { cancelled: !1, frame: 0, timeoutId: 0 };
  e.__panoDomMountProbe = a;
  const l = (f) => {
    var v, b, h;
    a.cancelled || (a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, $o(e, "Preview mount failed"), (b = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || b.call(v), (h = e.setDirtyCanvas) == null || h.call(e, !0, !0), n && (e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n), yr(e), void 0);
  }, u = () => {
    var b, h, w, S, P, k, V, R, O, T;
    if (a.cancelled) return;
    const f = e.__panoDomPreview;
    Number(((b = f == null ? void 0 : f.root) == null ? void 0 : b.clientWidth) || 0), Number(((h = f == null ? void 0 : f.root) == null ? void 0 : h.clientHeight) || 0);
    const v = (S = (w = f == null ? void 0 : f.root) == null ? void 0 : w.querySelector) == null ? void 0 : S.call(w, "div");
    if (Number((v == null ? void 0 : v.clientWidth) || 0), Number((v == null ? void 0 : v.clientHeight) || 0), Number(((P = f == null ? void 0 : f.canvas) == null ? void 0 : P.clientWidth) || 0), Number(((k = f == null ? void 0 : f.canvas) == null ? void 0 : k.clientHeight) || 0), a.frame, f != null && f.widget, (V = f == null ? void 0 : f.root) != null && V.isConnected && ((R = f == null ? void 0 : f.canvas) != null && R.isConnected), !(f != null && f.widget) || !((O = f.root) != null && O.isConnected) || !((T = f.canvas) != null && T.isConnected)) {
      l();
      return;
    }
    if (fb(f)) {
      a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, na(e), yr(e);
      return;
    }
    if (a.frame += 1, a.frame >= Sv) {
      l();
      return;
    }
    requestAnimationFrame(u);
  };
  return a.timeoutId = setTimeout(() => {
    l();
  }, Nv), requestAnimationFrame(u), !0;
}
function hb(e, t = {}) {
  var i, a;
  Nh(e);
  const n = `standalone_unified|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (!(e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n)) {
    if (yr(e), e == null || e.id, _n(e), Number(((i = _n(e)) == null ? void 0 : i[0]) || 0), Number(((a = _n(e)) == null ? void 0 : a[1]) || 0), e == null || e.addDOMWidget, _r(e, { keepMonitor: !1, reason: "attach_standalone_unified_begin" }), na(e), typeof (e == null ? void 0 : e.addDOMWidget) == "function" && db(e, t, n)) {
      e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n;
      return;
    }
    $o(e, "Preview mount failed"), e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, yr(e);
  }
}
function pb(e, t = {}) {
  var a, l;
  const n = `standalone_dom|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n && ((a = e.__panoDomPreview) != null && a.widget)) return !0;
  _r(e, { keepMonitor: !1, reason: "attach_standalone_dom_begin" }), na(e), e.__panoPreviewMode = "standalone_dom", e.__panoPreviewButtonText = String(t.buttonText || "Open Preview"), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, wi.register(e), t.__skipRouteLog !== !0 && (yr(e), void 0);
  const i = String(t.imageInputName || "erp_image");
  th();
  try {
    if (typeof e.addDOMWidget != "function") throw new Error("addDOMWidget unavailable");
    if ((l = e.__panoDomPreview) != null && l.widget) return !0;
    const u = document.createElement("div");
    u.className = "pano-node-preview-dom pano-node-preview--stickers", u.style.cssText = "width:100%;height:100%;position:relative;display:block;min-height:56px;overflow:hidden;", u.setAttribute("data-capture-wheel", "true"), u.setAttribute("tabindex", "-1");
    const d = document.createElement("div");
    d.style.cssText = "position:absolute;inset:0;min-height:56px;border-radius:8px;overflow:hidden;border:1px solid rgba(63,63,70,1);background:#070707;";
    const f = document.createElement("canvas");
    f.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;touch-action:none;cursor:grab;", d.appendChild(f), u.appendChild(d), Mh(e, 56, () => {
      var B, ee;
      return (ee = (B = e.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : ee.call(B);
    });
    const v = e.addDOMWidget(
      Lo(),
      "preview",
      u,
      Oc(e, () => {
        var B, ee;
        return (ee = (B = e.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : ee.call(B);
      }, 56)
    );
    v && (v.serialize = !1), Hn(e), e.__panoBindSeq = Number(e.__panoBindSeq || 0) + 1;
    const b = e.__panoBindSeq;
    e == null || e.id;
    const h = { raf: 0, needsDraw: !0, dragging: !1, pointerId: null }, w = { listeners: 0, raf: 0, widget: 0 }, S = os({
      getView: () => Ki(e),
      setView: (B) => {
        const ee = Ki(e);
        ee.yaw = Ft(Number(B.yaw || 0)), ee.pitch = Y(Number(B.pitch || 0), -89.9, 89.9), ee.fov = Y(Number(B.fov || 100), yv, _v);
      },
      getViewportSize: () => {
        const B = f.getBoundingClientRect();
        return {
          w: Math.max(1, Number(B.width || f.clientWidth || 0)),
          h: Math.max(1, Number(B.height || f.clientHeight || 0))
        };
      },
      getInvert: () => {
        const B = Pv();
        return {
          x: B.invert_view_x ? -1 : 1,
          y: B.invert_view_y ? -1 : 1
        };
      },
      onInteraction: () => {
        vl(e);
      },
      onDebug: (B, ee) => {
      }
    });
    e.__panoStandaloneController = S;
    let P = null;
    const k = (B) => {
      var ee, W, Z;
      (ee = B.preventDefault) == null || ee.call(B), (W = B.stopPropagation) == null || W.call(B), (Z = B.stopImmediatePropagation) == null || Z.call(B);
    }, V = () => {
      P && P();
      const B = (Z) => {
        if (h.dragging) {
          if (!_f(Z)) {
            ae(Z, (Z == null ? void 0 : Z.type) || "pointermove_buttons_released");
            return;
          }
          S.moveDrag(Z.clientX, Z.clientY, "pano", performance.now()), R(), k(Z);
        }
      }, ee = (Z) => {
        h.dragging && (ae(Z, (Z == null ? void 0 : Z.type) || "pointerup"), k(Z));
      }, W = (Z) => {
        h.dragging && (ae(Z, (Z == null ? void 0 : Z.type) || "pointercancel"), k(Z));
      };
      window.addEventListener("pointermove", B, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", W, !0), w.listeners += 3, P = () => {
        window.removeEventListener("pointermove", B, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", W, !0), w.listeners = Math.max(0, w.listeners - 3), P = null;
      };
    }, R = () => {
      h.needsDraw = !0, h.raf || (h.raf = requestAnimationFrame(I));
    }, O = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
      Si(e, 150), R();
    }) : null;
    O == null || O.observe(d);
    let T = 0;
    const I = (B = performance.now()) => {
      var Ht;
      h.raf = 0, T++, T <= 20 && Xa(e, `tick.${T}`);
      const ee = S.stepInertia(B), W = bl(e, B), Z = ee || W;
      if (ob(e, B), !h.needsDraw && !Z && T > 20) return;
      h.needsDraw = !1;
      const Ae = 1, Ie = Number(f.clientWidth || 0), Le = Number(f.clientHeight || 0);
      e.__panoBootMinHeightActive && Ie > 0 && Le > 0 && (e.__panoBootMinHeightActive = !1);
      const Ye = Math.max(64, Math.round(Ie * Ae)), Ue = Math.max(64, Math.round(Le * Ae));
      (T <= 20 || Ye !== f.width || Ue !== f.height) && Xa(e, "tick.resize", { w: Ye, h: Ue, cw: f.clientWidth, ch: f.clientHeight }), (f.width !== Ye || f.height !== Ue) && (f.width = Ye, f.height = Ue);
      const at = f.getContext("2d");
      if (!at) return;
      lb(e, at, { x: 0, y: 0, w: Ye, h: Ue }, i, ha), (Ht = e.setDirtyCanvas) == null || Ht.call(e, !0, !1), (h.needsDraw || Z) && (h.raf = requestAnimationFrame(I));
    }, G = (B) => {
      var ee, W, Z;
      Fn(B, d) && B.button === 0 && ((ee = u.focus) == null || ee.call(u), (W = f.setPointerCapture) == null || W.call(f, B.pointerId), h.pointerId = B.pointerId, h.dragging = !0, f.style.cursor = "grabbing", S.startDrag(B.clientX, B.clientY, B.pointerId, performance.now()), (Z = f.hasPointerCapture) == null || Z.call(f, B.pointerId), V(), R());
    }, J = (B) => {
      if (h.dragging) {
        if (Fn(B, d), !_f(B)) {
          ae(B);
          return;
        }
        S.moveDrag(B.clientX, B.clientY, "pano", performance.now()), R();
      }
    }, ae = (B, ee = "pointerup") => {
      h.dragging && (Fn(B, d), h.dragging = !1, h.pointerId = null, f.style.cursor = "grab", S.endDrag(performance.now()), P == null || P(), R());
    }, re = (B) => ae(B, (B == null ? void 0 : B.type) || "pointerup"), we = () => {
      h.dragging && (h.dragging = !1, h.pointerId = null, f.style.cursor = "grab", S.endDrag(performance.now()), P == null || P(), R());
    }, A = (B) => {
      var Le, Ye, Ue;
      if (!Fn(B, d)) return;
      const ee = wh(), W = document.activeElement, Z = Number(Ki(e).fov || 100), Ae = S.applyWheelEvent(B), Ie = Number(Ki(e).fov || 100);
      Number(B.deltaY || 0), Ae && R(), (Le = B.preventDefault) == null || Le.call(B), (Ye = B.stopPropagation) == null || Ye.call(B), (Ue = B.stopImmediatePropagation) == null || Ue.call(B), requestAnimationFrame(() => {
        var at, gt;
        Sh(ee), (gt = (at = rt == null ? void 0 : rt.canvas) == null ? void 0 : at.setDirty) == null || gt.call(at, !0, !0);
      });
    };
    f.addEventListener("pointerdown", G), f.addEventListener("pointermove", J), f.addEventListener("pointerup", re), f.addEventListener("pointercancel", re), f.addEventListener("lostpointercapture", we), f.addEventListener("wheel", A, { passive: !1, capture: !0 }), d.addEventListener("wheel", A, { passive: !1, capture: !0 }), w.listeners += 7;
    const ve = ["contextmenu", "click", "dblclick"];
    ve.forEach((B) => {
      d.addEventListener(B, k, { capture: !0 }), f.addEventListener(B, k, { capture: !0 }), w.listeners += 2;
    });
    const pe = e.onRemoved, fe = e.onResize, z = e.onExecuted, ce = e.onConnectionsChange;
    return e.onExecuted = function(B) {
      Xa(e, "onExecuted"), fh(e, B), ga(e), Hn(e), R();
      const ee = z ? z.apply(this, arguments) : void 0;
      return Hn(e), ee;
    }, e.onConnectionsChange = function() {
      return Xa(e, "onConnectionsChange"), ga(e), Hn(e), R(), ce ? ce.apply(this, arguments) : void 0;
    }, e.onResize = function() {
      var ee;
      const B = fe ? fe.apply(this, arguments) : void 0;
      return this.__panoUserResized = !0, Si(this, 150), R(), (ee = this.setDirtyCanvas) == null || ee.call(this, !0, !1), B;
    }, e.onRemoved = function() {
      var B, ee, W;
      return (ee = (B = e.__panoStandaloneModal) == null ? void 0 : B.dispose) == null || ee.call(B), e.__panoStandaloneModal = null, Ro(e), h.raf && (cancelAnimationFrame(h.raf), w.raf += 1), P == null || P(), f.removeEventListener("pointerdown", G), f.removeEventListener("pointermove", J), f.removeEventListener("pointerup", re), f.removeEventListener("pointercancel", re), f.removeEventListener("lostpointercapture", we), f.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), w.listeners = Math.max(0, w.listeners - 7), ve.forEach((Z) => {
        d.removeEventListener(Z, k, !0), f.removeEventListener(Z, k, !0), w.listeners = Math.max(0, w.listeners - 2);
      }), bf(e, v) && (w.widget += 1), (W = O == null ? void 0 : O.disconnect) == null || W.call(O), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = z, e.onConnectionsChange = ce, wi.unregister(e), { ...w }, e.onRemoved = pe, pe ? pe.apply(this, arguments) : void 0;
    }, e.__panoDomRestore = () => {
      var B, ee;
      (ee = (B = e.__panoStandaloneModal) == null ? void 0 : B.dispose) == null || ee.call(B), e.__panoStandaloneModal = null, Ro(e), h.raf && (cancelAnimationFrame(h.raf), w.raf += 1), P == null || P(), f.removeEventListener("pointerdown", G), f.removeEventListener("pointermove", J), f.removeEventListener("pointerup", re), f.removeEventListener("pointercancel", re), f.removeEventListener("lostpointercapture", we), f.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), w.listeners = Math.max(0, w.listeners - 7), ve.forEach((W) => {
        d.removeEventListener(W, k, !0), f.removeEventListener(W, k, !0), w.listeners = Math.max(0, w.listeners - 2);
      }), bf(e, v) && (w.widget += 1), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = z, e.onConnectionsChange = ce, e.onRemoved = pe, { ...w }, na(e);
    }, e.__panoPreviewHooked = !0, e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, e.__panoDomPreview = { widget: v, root: u, canvas: f, requestDraw: R, state: h }, R(), !0;
  } catch {
    return t.__noAutoFallback === !0 ? ($o(e, "Node 2.0 preview unavailable"), !1) : (na(e), !1);
  }
}
function gb(e, t = {}) {
  hb(e, t);
}
function mb(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(t)}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const d = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const l = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const d = l ? l.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const u = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const d = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
}
function Ph(e) {
  return !!(e != null && e.prototype);
}
function Fc(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function vb(e, t = {}) {
  Ph(e) || gb(e, {
    ...t,
    onOpen: Fc(e, t.onOpen)
  });
}
function bb(e, t = {}) {
  if (!Ph(e)) {
    Nf(e, {
      ...t,
      onOpen: Fc(e, t.onOpen)
    });
    return;
  }
  mb(e, "cutout_preview", (n) => {
    Nf(n, {
      ...t,
      onOpen: Fc(n, t.onOpen)
    });
  });
}
const tn = {
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
}, Wn = "pen";
function Mf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function yb(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function d(v) {
    if (i.splice(0, i.length), a = -1, !v || typeof v != "object" || !Array.isArray(v.entries) || (v.entries.forEach((h) => {
      i.push(String(h || ""));
    }), !i.length)) return;
    const b = Number(v.index);
    Number.isInteger(b) ? b === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, b)) : a = i.length - 1;
  }
  function f(v) {
    i[a] !== v && (i.splice(a + 1), i.push(v), i.length > l && i.shift(), a = i.length - 1);
  }
  return d(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(v) {
      f(String(v || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const v = a - 1;
      return v < 0 || v >= i.length ? null : (a = v, i[a]);
    },
    redo() {
      const v = a + 1;
      return v < 0 || v >= i.length ? null : (a = v, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const v = i.length, b = Math.max(0, v - u), h = a >= 0 ? Math.max(0, Math.min(a, b)) : b, w = i.slice(h, h + u), S = a < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, a - h));
      return {
        version: 1,
        entries: w,
        index: S
      };
    },
    hydrate: d
  };
}
function tt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function _b() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function xb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const l = tt(i.z_index ?? i.zIndex, t.length);
    t.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(l ?? t.length)),
      locked: i.locked === !0
    });
  }
  return t;
}
function wb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Sb(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = tt(e.t, 0), i = tt(e.widthScale, null), a = tt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const l = tt(e.u, null), u = tt(e.v, null);
    if (l == null || u == null) return null;
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (l % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  if (t.kind === "FRAME_LOCAL") {
    const l = tt(e.u, null), u = tt(e.v, null);
    if (l == null || u == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: l,
      v: u,
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  return null;
}
function to(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = Sb(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function Nb(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const f = to(e.points, t, 3);
    return f ? { geometryKind: a, points: f } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = to(e.points, t, 1);
  if (!l) return null;
  const u = to(e.rawPoints, t, 1), d = to(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: u || l.map((f) => ({ ...f })),
    processedPoints: d || l.map((f) => ({ ...f }))
  };
}
function Mb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = wb(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = Nb(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = tt(e.size, null), u = tt(e.opacity, null);
  if (l == null || u == null) return null;
  const d = String(e.id || "").trim(), f = String(e.actionGroupId || "").trim();
  if (!d || !f) return null;
  const v = tt(e.radiusValue, null), b = String(e.radiusModel || "").trim() || null;
  let h = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    h = {
      r: Math.max(0, Math.min(1, tt(w.r, 0))),
      g: Math.max(0, Math.min(1, tt(w.g, 0))),
      b: Math.max(0, Math.min(1, tt(w.b, 0))),
      a: Math.max(0, Math.min(1, tt(w.a, 1)))
    };
  }
  return {
    id: d,
    actionGroupId: f,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, l),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: tt(e.hardness, null),
    flow: tt(e.flow, null),
    spacing: tt(e.spacing, null),
    createdAt: Math.trunc(tt(e.createdAt, 0)),
    color: h,
    radiusModel: b,
    radiusValue: v == null ? null : Math.max(0, v),
    geometry: a
  };
}
function kf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = Mb(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function kb(e) {
  if (!e || typeof e != "object") return null;
  const t = tt(e.u0, null), n = tt(e.v0, null), i = tt(e.u1, null), a = tt(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (d) => Math.max(0, Math.min(1, d)), u = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Pb(e) {
  const t = e || {};
  return {
    du: tt(t.du, 0) ?? 0,
    dv: tt(t.dv, 0) ?? 0,
    rot_deg: tt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, tt(t.scale, 1) ?? 1)
  };
}
function Cb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = kb(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, tt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: Pb(e.transform)
  } : null;
}
function Ab(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = Cb(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ra(e) {
  const t = _b();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: xb(e.groups),
    paint: kf(e.paint, "paint"),
    mask: kf(e.mask, "mask"),
    raster_objects: Ab(e.raster_objects)
  };
}
function Pf(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Ib(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: Y(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: Y(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Cf(e = {}, t = 0) {
  var a;
  const n = String((e == null ? void 0 : e.type) || "");
  if (!n) return null;
  const i = {
    id: String((e == null ? void 0 : e.id) || `${n}_${t}`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    zIndex: Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? t)
  };
  return n === "sticker" ? (i.transform = Ib((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Tb(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return xi({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Pf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, u) => Cf(l, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Pf((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, u) => Cf(l, u)).filter(Boolean);
  return xi({
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: t,
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: n
    },
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  });
}
function ma(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: Y(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: Y(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: Y(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: Y(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Bo(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Eb(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Hr((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function l(h) {
    var w;
    return JSON.stringify({
      stateRevision: (h == null ? void 0 : h.stateRevision) || "",
      background: (h == null ? void 0 : h.background) || null,
      objects: Array.isArray((w = h == null ? void 0 : h.objectPass) == null ? void 0 : w.objects) ? h.objectPass.objects.map((S) => ({
        id: (S == null ? void 0 : S.id) || "",
        type: (S == null ? void 0 : S.type) || "",
        revision: (S == null ? void 0 : S.revision) || "",
        visible: (S == null ? void 0 : S.visible) !== !1,
        opacity: Number((S == null ? void 0 : S.opacity) ?? 1),
        zIndex: Number((S == null ? void 0 : S.zIndex) ?? 0),
        transform: (S == null ? void 0 : S.transform) || null,
        params: (S == null ? void 0 : S.params) || null
      })) : [],
      overlay: (h == null ? void 0 : h.overlay) || {}
    });
  }
  function u(h = {}) {
    const w = Tb(h), S = l(w);
    return a === S || !n.syncState(w) ? !1 : (i = w, a = S, !0);
  }
  function d(h = {}, w = {}) {
    if (!i) return null;
    const S = ma(h), P = Bo(w);
    return n.renderToTarget(t, S, P);
  }
  function f(h, w, S = {}, P = {}) {
    if (!h || !w || !i) return !1;
    const k = ma(S), V = Bo({
      ...P,
      width: Number((w == null ? void 0 : w.w) || (P == null ? void 0 : P.width) || 1),
      height: Number((w == null ? void 0 : w.h) || (P == null ? void 0 : P.height) || 1)
    });
    return n.renderToContext(h, w, k, V);
  }
  function v() {
    var h;
    i = null, a = "", (h = n.clearState) == null || h.call(n);
  }
  function b() {
    var h;
    v(), (h = n.dispose) == null || h.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: d,
    renderToContext: f,
    snapshotScene: () => i,
    clearScene: v,
    dispose: b
  };
}
function Db(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function Lb(e, t = {}) {
  var f, v;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = ma((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((f = t == null ? void 0 : t.camera) == null ? void 0 : f.output) || ((v = t == null ? void 0 : t.view) == null ? void 0 : v.output) || null, a = Bo(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Db(l, u, d);
}
function Rb(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = ma((n == null ? void 0 : n.view) || {}), u = !1, d = 0;
  function f() {
    const w = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), S = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), P = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), k = Bo({ width: w, height: S, dpr: P });
    return i.width = Math.max(1, Math.round(k.width * k.dpr)), i.height = Math.max(1, Math.round(k.height * k.dpr)), i.style.width = `${k.width}px`, i.style.height = `${k.height}px`, k;
  }
  function v() {
    if (u || !a) return !1;
    const w = f();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...w, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function b() {
    u || d || (d = requestAnimationFrame(() => {
      d = 0, v();
    }));
  }
  const h = typeof ResizeObserver == "function" ? new ResizeObserver(() => b()) : null;
  return h == null || h.observe(t), b(), {
    canvas: i,
    setView(w) {
      l = ma(w || {}), b();
    },
    getView() {
      return { ...l };
    },
    present: v,
    requestRender: b,
    unmount() {
      u = !0, d && cancelAnimationFrame(d), h == null || h.disconnect(), i.remove();
    }
  };
}
function Ob(e = {}) {
  const t = Eb({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(vr(n), i);
    },
    renderShotToContext(n, i, a, l = {}) {
      return t.renderToContext(n, i, vr(a), l);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? vr(i.shot) : i == null ? void 0 : i.view;
      return Rb(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: vr(n.shot) } : n;
      return Lb(t, i);
    }
  };
}
function ji(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function Fb(e = {}) {
  const t = String(e.preview_quality || "balanced"), n = [
    { value: "draft", label: "Draft" },
    { value: "balanced", label: "Balanced" },
    { value: "high", label: "High" }
  ];
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y,
    qualityOpen: !1,
    qualityLabel: (n.find((i) => i.value === t) || n[1]).label,
    qualityOptions: n.map((i) => ({ ...i, active: i.value === t }))
  };
}
function Vb({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: d,
  isActiveLassoTool: f
}) {
  var T, I;
  const v = e.primaryTool === "paint" || e.primaryTool === "mask", b = {
    visible: v,
    activePane: v ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: v ? !!n : !1,
    pickerHueColor: i({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (G, J) => ({ index: J, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!v) return b;
  const h = ((T = t.find((G) => a(e.paintColor, G.color))) == null ? void 0 : T.id) || "", w = !h, S = l(e.customPaintColor), P = Math.round(Math.max(0, Math.min(1, Number(((I = e.customPaintColor) == null ? void 0 : I.a) ?? 1))) * 100), k = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[k] ?? 10, R = f(), O = Array.from({ length: 8 }, (G, J) => e.customPaintHistory[J] || null);
  return {
    ...b,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: h,
    customColorActive: w,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...u(S.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, S.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, S.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, S.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, S.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, S.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, S.h)) * 100}%`,
    alphaValue: P,
    alphaText: `${P}%`,
    historyEntries: O.map((G, J) => ({
      index: J,
      color: G ? { cssColor: i(G, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: R,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Hb({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function jb({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: u,
  notes: d,
  visibilityRows: f,
  uiSettings: v,
  normalizeCoverageValue: b
}) {
  return {
    coverage: { value: b(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || l.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: d,
    paramsDisabled: !i,
    visibilityRows: f,
    uiSettings: t ? null : v,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function zb({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: u,
  activeAspect: d,
  cutoutAspectOpen: f,
  isExternalSticker: v,
  isStickerHidden: b,
  canRestoreSelectedToInitial: h,
  iconSet: w
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let S = [];
  if (n.length > 1)
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (i === "stroke")
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back }
    ], v(t) || (S.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: w.duplicate }), S.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: w.replace_image })), v(t)) {
      const T = h(), I = b(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: T ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !T
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: I ? "Show" : "Hide",
        tip: I ? "Show input image" : "Hide input image",
        icon: I ? w.eye : w.eye_dashed
      });
    }
    S.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed }), v(t) || S.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete });
  } else
    S = [
      {
        key: "aspect",
        kind: "aspect",
        icon: w.aspect,
        open: !!f,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((T) => ({ value: T, label: T, active: d === T }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const P = a.corners.map((T) => T.x), k = a.corners.map((T) => T.y), V = Math.min(...P), R = Math.max(...P), O = Math.max(...k);
  return {
    visible: !0,
    left: (V + R) * 0.5,
    top: O + 18,
    items: S,
    anchor: { minX: V, maxX: R, maxY: O }
  };
}
const We = {
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  // View toggle
  pano: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M1.5 8.2c1.9-2.2 4.1-3.3 6.5-3.3s4.6 1.1 6.5 3.3'/><path d='M2.6 10.9c1.5-1.5 3.3-2.3 5.4-2.3s3.9.8 5.4 2.3'/><circle cx='8' cy='12.2' r='1' fill='currentColor' stroke='none'/></svg>",
  unwrap: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='1.75' y='3' width='12.5' height='10' rx='2'/><path d='M5.9 3v10M10.1 3v10'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  play: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M5.25 3.58c0-.79.86-1.27 1.52-.86l5.17 3.17a1 1 0 0 1 0 1.7L6.77 10.76c-.66.4-1.52-.07-1.52-.86V3.58Z' fill='currentColor'/></svg>",
  pause: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 3.25v9.5M10.5 3.25v9.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-width='1.8'/></svg>",
  volume: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.5 6.25h2.3L8 3.75v8.5L4.8 9.75H2.5z'/><path d='M10.25 6a2.75 2.75 0 0 1 0 4'/><path d='M11.9 4.5a4.9 4.9 0 0 1 0 7'/></svg>",
  loop: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M12.25 5.25h-6a2.5 2.5 0 0 0-2.5 2.5v.25'/><path d='m10.5 3.5 1.75 1.75L10.5 7'/><path d='M3.75 10.75h6a2.5 2.5 0 0 0 2.5-2.5V8'/><path d='m5.5 12.5-1.75-1.75L5.5 9'/></svg>",
  // Left toolbar
  cursor_tool: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 2.5 12.2 8l-4 1.2 1.8 4.3-1.8.8-1.9-4.3-2.6 2.2z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  palette_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z'/><path d='M7 13.5a2.5 2.5 0 0 0 2.5 2.5H11a2 2 0 0 1 0 4h-1'/><circle cx='7.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/><circle cx='12' cy='6.5' r='.9' fill='currentColor' stroke='none'/><circle cx='16.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  clear: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  undo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 4.3 2.8 7l2.7 2.7'/><path d='M3.1 7h5.3a3.7 3.7 0 1 1 0 7.4'/></svg>",
  redo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m10.5 4.3 2.7 2.7-2.7 2.7'/><path d='M12.9 7H7.6a3.7 3.7 0 1 0 0 7.4'/></svg>",
  // Floating right
  reset: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.2a4.8 4.8 0 1 1-4.8 4.8'/><path d='M3.2 3.2v3.6h3.6'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  // Paint dock
  pencil_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m3 21 3.8-1 10-10a2.1 2.1 0 0 0-3-3L3.8 17z'/><path d='m14.5 6.5 3 3'/></svg>",
  spray_can_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 6h6'/><path d='M12 3h2a2 2 0 0 1 2 2v1'/><path d='M9 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z'/><path d='M5 10h.01'/><path d='M3 14h.01'/><path d='M5 18h.01'/></svg>",
  highlighter_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m14 4 6 6'/><path d='m4 20 4.5-1 9-9-3.5-3.5-9 9z'/><path d='M13 7 17 11'/><path d='M3 21h7'/></svg>",
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  eraser_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m7 13.5 6.8-6.8a2.2 2.2 0 0 1 3.1 0l2.4 2.4a2.2 2.2 0 0 1 0 3.1l-6.8 6.8a2.2 2.2 0 0 1-1.5.6H7.8a2.2 2.2 0 0 1-1.6-.6l-1.5-1.5a2.2 2.2 0 0 1 0-3.1L7 13.5Z'/><path d='M13.5 19.5H21'/></svg>",
  lasso_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M7.2 18.8C4.6 18 3 16.2 3 14c0-3.9 4-7 9-7s9 3.1 9 7-4 7-9 7c-1.1 0-2.2-.1-3.1-.4'/><path d='M7 17c1 0 1.8.8 1.8 1.8S8 20.6 7 20.6s-1.8-.8-1.8-1.8S6 17 7 17Z'/></svg>"
}, Uo = {
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
    const t = e, n = ln(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Ce(), Ni(f0(e.tag), Hd({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value, { innerHTML: e.icon }), null, 16, ["class", "innerHTML"]));
  }
}, $b = { class: "pano-floating-right" }, Bb = {
  class: "pano-fov-value",
  "data-fov-value": "",
  "aria-label": "Field of view"
}, Ub = ["data-settled"], Kb = ["data-ready", "data-settled"], Gb = ["aria-label", "data-tip", "innerHTML"], Wb = {
  key: 1,
  class: "pano-camera-preview-label"
}, Yb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    fovValue: { type: String, default: "100°" },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ce(), De(nt, null, [
      ue("div", $b, [
        ue("span", Bb, St(e.fovValue), 1),
        (Ce(!0), De(nt, null, Zt(e.buttons, (i) => (Ce(), Ni(Uo, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Qc(ue("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ue("div", {
          class: wt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Vt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ue("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Ce(), De("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview",
            innerHTML: e.previewToggle.icon
          }, null, 8, Gb)) : an("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ce(), De("div", Wb, St(e.preview.label || "Preview unavailable"), 1)) : an("", !0)
        ], 14, Kb)
      ], 8, Ub), [
        [al, e.preview.visible]
      ])
    ], 64));
  }
}, qb = ["aria-label"], Xb = { class: "pano-canvas-confirm-title" }, Zb = { class: "pano-canvas-confirm-text" }, Jb = { class: "pano-canvas-confirm-actions" }, Qb = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, ey = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ wc(null), i = /* @__PURE__ */ wc(null);
    let a = null;
    function l() {
      const h = i.value;
      return h ? Array.from(h.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function u(h) {
      const w = i.value;
      if (!w) return;
      const S = w.querySelector(`[data-action='${h}']`);
      S instanceof HTMLButtonElement && S.click();
    }
    function d() {
      var k;
      const h = i.value;
      if (!h) return;
      const w = h.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const P = l()[0] || h;
      (k = P == null ? void 0 : P.focus) == null || k.call(P);
    }
    function f() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function v(h) {
      var R;
      if (h.defaultPrevented) return;
      if (h.key === "Escape") {
        h.preventDefault(), h.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (h.key !== "Tab") return;
      const w = l(), S = i.value;
      if (!w.length) {
        h.preventDefault(), (R = S == null ? void 0 : S.focus) == null || R.call(S);
        return;
      }
      const P = w[0], k = w[w.length - 1], V = document.activeElement;
      if (h.shiftKey) {
        (V === P || V === S || !(S != null && S.contains(V))) && (h.preventDefault(), k.focus());
        return;
      }
      (V === k || !(S != null && S.contains(V))) && (h.preventDefault(), P.focus());
    }
    function b(h) {
      h.target === n.value && u("confirm-cancel");
    }
    return Xi(() => t.model.visible, (h, w) => {
      if (h) {
        a = document.activeElement, Zc(() => {
          d();
        });
        return;
      }
      w && f();
    }, { immediate: !0 }), tl(() => {
      f();
    }), (h, w) => e.model.visible === !0 ? (Ce(), De("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ud(b, ["self"])
    }, [
      ue("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: v
      }, [
        ue("div", Xb, St(e.model.title), 1),
        ue("div", Zb, St(e.model.text), 1),
        ue("div", Jb, [
          w[0] || (w[0] = ue("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ue("button", Qb, St(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, qb)
    ], 512)) : an("", !0);
  }
}, ty = ["data-paint-pane"], ny = ["hidden"], ry = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], iy = ["aria-pressed", "disabled"], ay = ["hidden"], oy = { class: "pano-paint-color-pop-head" }, sy = { class: "pano-paint-color-field" }, cy = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, ly = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, uy = { class: "pano-paint-color-field" }, fy = { class: "pano-paint-alpha-wrap" }, dy = ["value"], hy = { "data-paint-alpha-value": "" }, py = ["hidden"], gy = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, my = ["data-paint-history-index", "aria-label", "disabled"], vy = ["data-paint-footer"], by = ["data-paint-group"], yy = ["hidden"], _y = ["value", "disabled"], xy = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, wy = ["hidden"], Sy = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(i) {
      return { "--swatch": String((i == null ? void 0 : i.cssColor) || "") };
    }
    function n(i) {
      return i ? { "--swatch": String(i.cssColor || "") } : {};
    }
    return (i, a) => (Ce(), De("div", {
      class: wt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ce(!0), De(nt, null, Zt(e.panes, (l) => {
        var u;
        return Ce(), De("div", {
          key: l.key,
          class: wt(["pano-paint-pane", { "is-active": e.state.activePane === l.key }]),
          "data-paint-pane": l.key
        }, [
          l.showColorFloat ? (Ce(), De("div", {
            key: 0,
            class: wt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ce(!0), De(nt, null, Zt(e.paintSwatches, (d) => (Ce(), De("button", {
              key: d.id,
              class: wt(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: Vt(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, ry))), 128)),
            ue("button", {
              class: wt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Vt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, iy),
            ue("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Vt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              ue("div", oy, [
                ue("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Vt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ue("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ue("div", sy, [
                ue("div", cy, [
                  ue("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Vt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ue("div", ly, [
                  ue("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Vt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ue("label", uy, [
                a[1] || (a[1] = ue("span", null, "Opacity", -1)),
                ue("div", fy, [
                  ue("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, dy),
                  ue("span", hy, St(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ue("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ue("div", gy, [
                  (Ce(!0), De(nt, null, Zt(e.state.historyEntries || [], (d) => (Ce(), De("button", {
                    key: d.index,
                    class: wt(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: Vt(n(d.color))
                  }, null, 14, my))), 128))
                ])
              ], 8, py)
            ], 12, ay)
          ], 10, ny)) : an("", !0),
          ue("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            ue("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Ce(!0), De(nt, null, Zt(l.tools, (d) => {
                var f;
                return Ce(), Ni(Uo, {
                  key: `${l.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((f = e.state.activeTools) == null ? void 0 : f[l.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, by),
            ue("div", {
              class: wt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ue("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Vt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, _y),
              ue("span", xy, St(e.state.sizeText || "10"), 1)
            ], 10, yy),
            ue("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[l.key]) ?? !l.clearHidden)
            }, [
              Pt(Uo, {
                icon: Lr(We).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, wy)
          ], 8, vy)
        ], 10, ty);
      }), 128))
    ], 2));
  }
}, Ny = {
  key: 0,
  class: "pano-cutout-menu"
}, My = ["innerHTML"], ky = ["data-aspect"], Py = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], Cy = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ce(), De("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Vt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ce(!0), De(nt, null, Zt(e.model.items || [], (i) => (Ce(), De(nt, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Ce(), De("div", Ny, [
          ue("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: i.icon
          }, null, 8, My),
          ue("div", {
            class: wt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ce(!0), De(nt, null, Zt(i.choices || [], (a) => (Ce(), De("button", {
              key: a.value,
              class: wt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, St(a.label), 11, ky))), 128))
          ], 2)
        ])) : (Ce(), De("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0,
          innerHTML: i.icon
        }, null, 8, Py))
      ], 64))), 128))
    ], 4));
  }
}, Ay = {
  class: "pano-side",
  "data-side": ""
}, Iy = { class: "pano-side-head" }, Ty = ["innerHTML"], Ey = {
  key: 0,
  class: "pano-side-scroll"
}, Dy = { class: "pano-inspector" }, Ly = { class: "pano-ui-row pano-coverage-row" }, Ry = ["data-selected"], Oy = ["aria-pressed", "disabled"], Fy = ["aria-pressed", "disabled"], Vy = {
  key: 0,
  class: "pano-section-title"
}, Hy = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, jy = {
  class: "pano-picker",
  "data-picker": "selection"
}, zy = ["disabled"], $y = ["innerHTML"], By = ["hidden"], Uy = ["data-selection-id", "innerHTML"], Ky = {
  key: 2,
  class: "pano-state-actions"
}, Gy = ["disabled"], Wy = ["innerHTML"], Yy = ["data-key"], qy = ["min", "max", "step", "value", "disabled", "data-param-key"], Xy = ["min", "max", "step", "value", "disabled", "data-param-key"], Zy = { class: "pano-visibility-section" }, Jy = { class: "pano-visibility-stack" }, Qy = ["data-visibility-row"], e_ = { class: "pano-visibility-name" }, t_ = ["innerHTML"], n_ = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled", "innerHTML"], r_ = ["open"], i_ = ["innerHTML"], a_ = { class: "pano-ui-settings-body" }, o_ = { class: "pano-ui-row" }, s_ = ["data-selected"], c_ = ["aria-pressed"], l_ = ["aria-pressed"], u_ = { class: "pano-ui-row" }, f_ = ["data-selected"], d_ = ["aria-pressed"], h_ = ["aria-pressed"], p_ = { class: "pano-ui-row" }, g_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, m_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, v_ = { class: "pano-picker-label" }, b_ = ["hidden"], y_ = ["data-quality"], __ = {
  key: 1,
  class: "pano-side-footer"
}, x_ = ["data-action"], w_ = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e;
    function n(d) {
      return String(d || "").replace(/[&<>"']/g, (f) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[f]);
    }
    const i = ln(() => `<span class="pano-side-title-icon" aria-hidden="true">${We.globe}</span><span>${n(t.nodeTitle)}</span>`), a = ln(() => {
      const d = t.model;
      return !d || typeof d != "object" ? !1 : Object.keys(d).length > 0 && !!d.coverage;
    });
    function l(d) {
      return { "--v": `${Number((d == null ? void 0 : d.fillPct) || 0)}%` };
    }
    function u(d, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (d == null ? void 0 : d.enabled) === !1;
    }
    return (d, f) => {
      var v, b, h, w, S;
      return Ce(), De("div", Ay, [
        ue("div", Iy, [
          ue("div", {
            class: "pano-side-title",
            innerHTML: i.value
          }, null, 8, Ty),
          f[0] || (f[0] = ue("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[13] || (f[13] = ue("div", { class: "pano-divider" }, null, -1)),
        a.value ? (Ce(), De("div", Ey, [
          ue("div", Dy, [
            f[12] || (f[12] = ue("div", { class: "pano-section-title" }, [
              ue("span", null, "Scene")
            ], -1)),
            ue("div", Ly, [
              f[1] || (f[1] = ue("label", null, "Coverage", -1)),
              ue("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                ue("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((b = e.model.coverage) == null ? void 0 : b.value) === 360 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "360", 8, Oy),
                ue("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((S = e.model.coverage) == null ? void 0 : S.disabled) === !0
                }, "180", 8, Fy)
              ], 8, Ry)
            ]),
            e.model.transformTitle !== !1 ? (Ce(), De("div", Vy, [...f[2] || (f[2] = [
              ue("span", null, "Transform", -1)
            ])])) : an("", !0),
            e.model.selectionPicker ? (Ce(), De("div", Hy, [
              ue("label", null, St(e.model.selectionPicker.label), 1),
              ue("div", jy, [
                ue("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ue("span", {
                    class: "pano-picker-label",
                    innerHTML: e.model.selectionPicker.currentLabelHtml
                  }, null, 8, $y),
                  f[3] || (f[3] = ue("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, zy),
                ue("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ce(!0), De(nt, null, Zt(e.model.selectionPicker.items || [], (P) => (Ce(), De("button", {
                    key: P.id,
                    type: "button",
                    class: wt(["pano-picker-item", { active: P.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": P.id,
                    innerHTML: P.labelHtml
                  }, null, 10, Uy))), 128))
                ], 8, By)
              ])
            ])) : an("", !0),
            e.model.copyStateButton ? (Ce(), De("div", Ky, [
              ue("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                ue("span", {
                  innerHTML: Lr(We).copy
                }, null, 8, Wy),
                ue("span", null, St(e.model.copyStateButton.label), 1)
              ], 8, Gy)
            ])) : an("", !0),
            ue("div", {
              class: wt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ce(!0), De(nt, { key: 0 }, Zt(e.model.notes, (P) => (Ce(), De("div", {
                key: P,
                class: "pano-param-note"
              }, St(P), 1))), 128)) : (Ce(!0), De(nt, { key: 1 }, Zt(e.model.params || [], (P) => (Ce(), De("div", {
                key: P.key,
                class: "pano-field",
                "data-key": P.key
              }, [
                ue("label", null, St(P.label), 1),
                ue("input", {
                  type: "range",
                  min: P.min,
                  max: P.max,
                  step: P.step,
                  value: P.value,
                  disabled: u(P, e.model),
                  style: Vt(l(P)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": P.key
                }, null, 12, qy),
                ue("input", {
                  type: "number",
                  min: P.min,
                  max: P.max,
                  step: P.step,
                  value: P.displayValue,
                  disabled: u(P, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": P.key
                }, null, 8, Xy)
              ], 8, Yy))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Ce(), De(nt, { key: 3 }, [
              f[5] || (f[5] = ue("div", { class: "pano-divider" }, null, -1)),
              ue("div", Zy, [
                f[4] || (f[4] = ue("div", { class: "pano-section-title" }, [
                  ue("span", null, "Layers")
                ], -1)),
                ue("div", Jy, [
                  (Ce(!0), De(nt, null, Zt(e.model.visibilityRows, (P) => (Ce(), De("div", {
                    key: P.key,
                    class: wt(["pano-visibility-row", { "is-hidden": P.visible === !1, "is-disabled": P.enabled === !1 }]),
                    "data-visibility-row": P.key
                  }, [
                    ue("span", e_, [
                      ue("span", {
                        class: "pano-visibility-name-icon",
                        "aria-hidden": "true",
                        innerHTML: P.icon
                      }, null, 8, t_),
                      ue("span", null, St(P.label), 1)
                    ]),
                    ue("button", {
                      class: wt(["pano-visibility-toggle", { active: P.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": P.key,
                      "aria-label": P.ariaLabel,
                      "aria-pressed": P.visible === !0 ? "true" : "false",
                      "data-tip": P.tip,
                      disabled: P.enabled === !1,
                      innerHTML: P.visible === !0 ? Lr(We).eye : Lr(We).eye_dashed
                    }, null, 10, n_)
                  ], 10, Qy))), 128))
                ])
              ])
            ], 64)) : an("", !0),
            e.model.uiSettings ? (Ce(), De("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ue("summary", null, [
                f[6] || (f[6] = ue("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ue("span", {
                  class: "pano-ui-caret",
                  "aria-hidden": "true",
                  innerHTML: Lr(We).chevron
                }, null, 8, i_)
              ]),
              ue("div", a_, [
                ue("div", o_, [
                  f[7] || (f[7] = ue("label", null, "Drag X", -1)),
                  ue("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, c_),
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, l_)
                  ], 8, s_)
                ]),
                ue("div", u_, [
                  f[8] || (f[8] = ue("label", null, "Drag Y", -1)),
                  ue("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, d_),
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, h_)
                  ], 8, f_)
                ]),
                ue("div", p_, [
                  f[10] || (f[10] = ue("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ue("div", g_, [
                    ue("button", m_, [
                      ue("span", v_, St(e.model.uiSettings.qualityLabel), 1),
                      f[9] || (f[9] = ue("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ue("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Ce(!0), De(nt, null, Zt(e.model.uiSettings.qualityOptions || [], (P) => (Ce(), De("button", {
                        key: P.value,
                        type: "button",
                        class: wt(["pano-picker-item", { active: P.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": P.value
                      }, St(P.label), 11, y_))), 128))
                    ], 8, b_)
                  ])
                ]),
                f[11] || (f[11] = ue("div", { class: "pano-ui-row" }, [
                  ue("span"),
                  ue("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, r_)) : an("", !0)
          ])
        ])) : an("", !0),
        (e.model.footerButtons || []).length ? (Ce(), De("div", __, [
          (Ce(!0), De(nt, null, Zt(e.model.footerButtons, (P) => (Ce(), De("button", {
            key: P.action,
            class: wt(["pano-btn", { "pano-btn-primary": P.primary === !0 }]),
            type: "button",
            "data-action": P.action
          }, St(P.label), 11, x_))), 128))
        ])) : an("", !0)
      ]);
    };
  }
}, S_ = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ce(), De("div", {
      class: wt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: Vt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, St(e.model.text || ""), 7));
  }
}, N_ = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, M_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ce(), De("div", N_, [
      (Ce(!0), De(nt, null, Zt(e.buttons, (i) => Qc((Ce(), Ni(Uo, {
        key: i.key,
        "extra-class": {
          active: i.active,
          "pano-btn-icon-accent": i.accent
        },
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { [i.attr]: i.value, disabled: i.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [al, i.visible !== !1]
      ])), 128))
    ]));
  }
}, k_ = ["data-video-ready"], P_ = { class: "pano-video-transport-bar" }, C_ = ["aria-label", "data-tip", "disabled", "innerHTML"], A_ = { class: "pano-video-track-wrap" }, I_ = { class: "pano-video-time" }, T_ = ["max", "value", "disabled"], E_ = { class: "pano-video-time" }, D_ = { class: "pano-video-audio-wrap" }, L_ = ["aria-label", "data-tip", "disabled", "innerHTML"], R_ = ["value", "disabled"], O_ = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ln(() => {
      var f;
      return ((f = t.state) == null ? void 0 : f.playing) === !0 ? "Pause" : "Play";
    }), i = ln(() => {
      var f;
      return ((f = t.state) == null ? void 0 : f.playing) === !0 ? "Pause video" : "Play video";
    }), a = ln(() => {
      var f;
      return ((f = t.state) == null ? void 0 : f.playing) === !0 ? We.pause : We.play;
    }), l = ln(() => {
      var f;
      return `${Math.max(0, Math.min(100, Number(((f = t.state) == null ? void 0 : f.progressPct) || 0)))}%`;
    }), u = ln(() => {
      var f;
      return `${Math.max(0, Math.min(100, Number(((f = t.state) == null ? void 0 : f.volumePct) ?? 100)))}%`;
    }), d = ln(() => {
      var f, v;
      return ((f = t.state) == null ? void 0 : f.muted) === !0 || Number(((v = t.state) == null ? void 0 : v.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    });
    return (f, v) => (Ce(), De("div", {
      class: wt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false"
    }, [
      v[0] || (v[0] = ue("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ue("div", P_, [
        ue("button", {
          class: "pano-btn pano-btn-icon pano-video-control",
          type: "button",
          "data-action": "video-play-toggle",
          "aria-label": n.value,
          "data-tip": i.value,
          disabled: e.state.ready !== !0,
          innerHTML: a.value
        }, null, 8, C_),
        ue("div", A_, [
          ue("div", I_, St(e.state.currentTimeLabel || "0:00"), 1),
          ue("input", {
            class: "pano-video-slider",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            style: Vt({ "--v": l.value })
          }, null, 12, T_),
          ue("div", E_, St(e.state.durationLabel || "0:00"), 1)
        ]),
        ue("div", D_, [
          ue("button", {
            class: "pano-btn pano-btn-icon pano-video-control",
            type: "button",
            "data-action": "video-audio-toggle",
            "aria-label": d.value,
            "data-tip": d.value,
            disabled: e.state.ready !== !0,
            innerHTML: Lr(We).volume
          }, null, 8, L_),
          ue("input", {
            class: "pano-video-slider pano-video-volume-slider",
            "data-video-volume": "",
            type: "range",
            min: "0",
            max: "1",
            step: "0.01",
            value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
            disabled: e.state.ready !== !0,
            style: Vt({ "--v": u.value })
          }, null, 12, R_)
        ])
      ])
    ], 10, k_));
  }
}, F_ = { class: "pano-floating-top" }, V_ = ["data-selected", "data-view-count"], H_ = ["data-view", "aria-pressed", "aria-label", "disabled"], j_ = ["innerHTML"], z_ = { class: "label" }, $_ = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Ce(), De("div", F_, [
        ue("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ce(!0), De(nt, null, Zt(e.buttons, (a) => Qc((Ce(), De("button", {
            key: a.key,
            class: wt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            ue("span", {
              innerHTML: a.icon
            }, null, 8, j_),
            ue("span", z_, St(a.label), 1)
          ], 10, H_)), [
            [al, a.visible !== !1]
          ])), 128))
        ], 8, V_)
      ]);
    };
  }
};
function Ch(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: We.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: We.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: We.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: We.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: We.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: We.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: We.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: We.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: We.image, pressed: null }
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
const B_ = ["aria-label"], U_ = { class: "pano-stage-wrap" }, K_ = {
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
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, i = t;
    let a = "", l = !1, u = null;
    const d = /* @__PURE__ */ wc(null), f = ln(() => n.readOnly === !0), v = ln(() => n.shellPreset || Ch(n.type)), b = ln(() => {
      var T;
      const O = Array.isArray((T = v.value) == null ? void 0 : T.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return f.value && O.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: We.fullscreen
      }), O;
    });
    function h() {
      const O = d.value;
      return O ? Array.from(O.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((T) => T instanceof HTMLElement ? !T.hidden && T.tabIndex >= 0 && T.offsetParent !== null : !1) : [];
    }
    function w() {
      var I;
      const T = h()[0] || d.value;
      (I = T == null ? void 0 : T.focus) == null || I.call(T);
    }
    function S() {
      var O;
      u != null && u.isConnected && ((O = u.focus) == null || O.call(u)), u = null;
    }
    function P(O) {
      var T, I, G, J;
      if (!O.defaultPrevented) {
        if (O.key === "Tab") {
          const ae = h();
          if (!ae.length) {
            O.preventDefault(), (I = (T = d.value) == null ? void 0 : T.focus) == null || I.call(T);
            return;
          }
          const re = ae[0], we = ae[ae.length - 1], A = document.activeElement;
          if (O.shiftKey) {
            (A === re || A === d.value || !((G = d.value) != null && G.contains(A))) && (O.preventDefault(), we.focus());
            return;
          }
          (A === we || !((J = d.value) != null && J.contains(A))) && (O.preventDefault(), re.focus());
          return;
        }
        O.key === "Escape" && i("close");
      }
    }
    function k() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function V() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function R(O) {
      document.removeEventListener("keydown", P), O ? (u || (u = document.activeElement), k(), document.addEventListener("keydown", P), Zc(() => {
        w();
      })) : (V(), S());
    }
    return md(() => {
      R(n.open);
    }), tl(() => {
      V(), document.removeEventListener("keydown", P), S();
    }), Xi(() => n.open, (O) => {
      R(O);
    }), (O, T) => e.open ? (Ce(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: T[0] || (T[0] = Ud((I) => i("close"), ["self"]))
    }, [
      ue("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ue("div", U_, [
          T[1] || (T[1] = B0('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          f.value ? an("", !0) : (Ce(), De(nt, { key: 0 }, [
            Pt(M_, {
              buttons: e.uiState.toolButtons || v.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Pt(Sy, {
              "paint-swatches": e.paintSwatches,
              panes: v.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Pt(O_, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Pt($_, {
            buttons: e.uiState.viewButtons || v.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Pt(Yb, {
            buttons: e.uiState.floatingButtons || b.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Pt(Cy, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Pt(S_, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Pt(ey, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? an("", !0) : (Ce(), Ni(w_, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, B_)
    ])) : an("", !0);
  }
}, Ko = "state_json", Ir = "sticker_image_1", uc = "external_image", fc = "pano_sticker_input_images", wo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], It = Math.PI / 180, mr = 180 / Math.PI, Go = 24, G_ = 4, W_ = 4, no = /* @__PURE__ */ new Map(), Af = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Map(), Rt = {
  // Source: @geist-ui/icons globe.js (v1.0.2)
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Source: vercel.com/geist/icons
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function Ot(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Y_(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function q_(e) {
  return 1 - Math.pow(1 - e, 3);
}
function X_(e) {
  return e * e * e;
}
function jn(e, t, n) {
  return { x: e, y: t, z: n };
}
function io(e, t) {
  return jn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ao(e, t) {
  return jn(e.x * t, e.y * t, e.z * t);
}
function kn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function oo(e, t) {
  return jn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function si(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return jn(e.x / t, e.y / t, e.z / t);
}
function Tn(e, t) {
  const n = e * It, i = t * It, a = Math.cos(i);
  return jn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function so(e) {
  return {
    yaw: Ft(Math.atan2(e.x, e.z) * mr),
    pitch: Y(Math.asin(Y(e.y, -1, 1)) * mr, -90, 90)
  };
}
function Yn(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, u = t[i].y, d = t[a].x, f = t[a].y;
    u > e.y != f > e.y && e.x < (d - l) * (e.y - u) / (f - u || 1e-6) + l && (n = !n);
  }
  return n;
}
function pr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function dc(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return pr(e, t);
  const f = Y((l * i + u * a) / d, 0, 1), v = Number(t.x || 0) + i * f, b = Number(t.y || 0) + a * f, h = Number(e.x || 0) - v, w = Number(e.y || 0) - b;
  return h * h + w * w;
}
function qn(e, t, n) {
  return e + (t - e) * n;
}
function En(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Y(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Y(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Y(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Y(n, 0, 1)})`;
}
function Z_(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let co = { fillStyle: "", url: "" };
function J_(e, t, n) {
  if (co.url && co.fillStyle === String(e || ""))
    return co.url;
  const i = Z_(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Go}" height="${Go}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return co = { fillStyle: String(e || ""), url: i }, i;
}
function So(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function cn(e) {
  return {
    r: Y(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Y(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Y(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Y(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Bt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Q_(e) {
  return wo.some((t) => So(e, t.color));
}
function hc(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = Y(Number(t), 0, 1), l = Y(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const u = Math.floor(i * 6), d = i * 6 - u, f = l * (1 - a), v = l * (1 - d * a), b = l * (1 - (1 - d) * a);
  switch (u % 6) {
    case 0:
      return { r: l, g: b, b: f };
    case 1:
      return { r: v, g: l, b: f };
    case 2:
      return { r: f, g: l, b };
    case 3:
      return { r: f, g: v, b: l };
    case 4:
      return { r: b, g: f, b: l };
    default:
      return { r: l, g: f, b: v };
  }
}
function pc(e) {
  const t = Y(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Y(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = Y(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), u = a - l;
  let d = 0;
  u > 1e-6 && (a === t ? d = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / u + 2) / 6 : d = ((t - n) / u + 4) / 6);
  const f = a <= 1e-6 ? 0 : u / a;
  return { h: d, s: f, v: a };
}
function ex(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function If(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function tx(e, t) {
  const n = If(e, 1), i = If(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), d = (h, w) => w ? d(w, h % w) : h, f = d(l, u) || 1, v = Math.max(1, Math.round(l / f)), b = Math.max(1, Math.round(u / f));
  return `${v}:${b}`;
}
function Gi(e) {
  const t = Y(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * It, n = Y(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * It;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function nx(e) {
  const t = Number(e);
  if (!Number.isFinite(t) || t <= 0) return "1:1";
  const n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ], i = 0.015;
  for (const [a, l] of n)
    if (Math.abs(t - l) <= i) return a;
  return "";
}
function Dr(e) {
  const t = Gi(e);
  return nx(t) || tx(t, 1);
}
function Ah(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Dr(t), t;
}
function zi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Dr(e);
}
let lo = null;
function rx() {
  return lo || (lo = new Promise((e) => {
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
  }), lo);
}
const Ih = "pano_suite.ui_settings.v1", Th = "pano_suite.node_grid_visibility.v1";
let fi = null, Dn = null, uo = { text: null, parsed: null };
function ia(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function ix() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ih)) || "").trim();
    if (!t) return fi ? ia(fi) : null;
    const n = JSON.parse(t), i = ia(n);
    return fi = i, i;
  } catch {
    return fi ? ia(fi) : null;
  }
}
function ax(e) {
  var n;
  const t = ia(e);
  fi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Ih, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Eh() {
  var e;
  if (Dn && typeof Dn == "object")
    return Dn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Th)) || "").trim();
    if (!t)
      return Dn = {}, Dn;
    const n = JSON.parse(t);
    return Dn = n && typeof n == "object" ? n : {}, Dn;
  } catch {
    return Dn = {}, Dn;
  }
}
function ox(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Eh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function sx(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Eh();
  i[n] = !!t, Dn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Th, JSON.stringify(i));
  } catch {
  }
}
function cx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function lx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function ux(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Tf(e) {
  const { paintCount: t, maskCount: n } = ux(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, l = 0;
  return i.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? l += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: l,
    totalPaintCount: t + a,
    totalMaskCount: n + l
  };
}
function ci(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ef(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function fx(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Ah(t)) : [];
}
function dx(e, t = 2048, n = "#00ff00", i = 360) {
  const a = ix(), l = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Ot(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: ra(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(e || "").trim();
  if (!u) return l;
  try {
    let d = null;
    if (uo.text === u ? d = uo.parsed : (d = JSON.parse(u), uo = { text: u, parsed: d }), !d || typeof d != "object" || Array.isArray(d)) return l;
    const f = {
      ...l,
      ...d,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: cx(d.assets),
      stickers: lx(d.stickers),
      shots: fx(d.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ra(d.painting),
      painting_layer: d.painting_layer && typeof d.painting_layer == "object" ? d.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(d.ui_settings && d.ui_settings.invert_view_x),
        invert_view_y: !!(d.ui_settings && d.ui_settings.invert_view_y),
        preview_quality: (() => {
          var b;
          const v = String(((b = d.ui_settings) == null ? void 0 : b.preview_quality) || "balanced");
          return v === "draft" || v === "balanced" || v === "high" ? v : "balanced";
        })()
      },
      active: d.active && typeof d.active == "object" ? { ...d.active } : { ...l.active }
    };
    return a && (f.ui_settings = ia({ ...f.ui_settings, ...a })), f.output_preset = Hc(t, Number(f.output_preset || l.output_preset)), f.bg_color = String(n || f.bg_color || l.bg_color), f.coverage = Ot(i), delete f.editor_history, f;
  } catch {
    return uo = { text: u, parsed: null }, l;
  }
}
function vn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function yl(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = vn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var l, u, d, f, v, b, h, w, S, P;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (f = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || f.call(d), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), (h = (b = e.graph) == null ? void 0 : b.setDirtyCanvas) == null || h.call(b, !0, !0), (P = (S = (w = br) == null ? void 0 : w.canvas) == null ? void 0 : S.setDirty) == null || P.call(S, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function hx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Df(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function px(e) {
  var S, P, k, V, R;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = vn(e, "coverage"), n = vn(e, "bg_color"), i = vn(e, Ko), a = vn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const l = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && hx(l) && (Df(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let v = "360";
  if (Df(u))
    try {
      const O = JSON.parse(u);
      v = String(Ot(O == null ? void 0 : O.coverage));
    } catch {
      v = "360";
    }
  const b = l, h = u, w = d;
  t.value = v, (S = t.callback) == null || S.call(t, v), n.value = b, (P = n.callback) == null || P.call(n, b), i.value = h, (k = i.callback) == null || k.call(i, h), a && (a.value = w, (V = a.callback) == null || V.call(a, w)), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function gc(e) {
  return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function gx(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), i = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return i[n] ? i[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function mx(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Vc(e, t, n) {
  var l, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (l = a.element) != null && l.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function fo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Hc(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function Dh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function vx(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Lh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function bx(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = vx(e == null ? void 0 : e.graph, n)), i;
}
function va(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = bn) == null ? void 0 : a.apiURL) == "function" ? bn.apiURL(i) : i;
}
function yx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function _x(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function xx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Rh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (yx(t)) return [t];
  const { filename: n, subfolder: i } = _x(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => va({
    filename: n,
    subfolder: i,
    type: l
  }));
  return xx([...a, t]);
}
function wx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? va({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function aa(e) {
  var i;
  const t = (i = br) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function zr(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return zr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return va({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = zr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : va(e);
}
function Sx(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const l of n)
    !Array.isArray(l) || !l.length || (t >= 0 && t < l.length && i.push(l[t]), i.push(...l));
  return i;
}
function mc(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = zr(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function Nx(e, t, n, i = null) {
  var h;
  const a = aa(e == null ? void 0 : e.id), l = Array.isArray((h = a == null ? void 0 : a.ui) == null ? void 0 : h[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(l) && l.length ? l[0] : null, d = zr(u);
  if (!d) return null;
  const f = `__ui__${t}`, v = n.get(f);
  if (v && v.__panoSrc === d) return v;
  const b = new Image();
  return b.__panoSrc = d, b.onload = () => {
    typeof i == "function" && i(b);
  }, b.src = d, n.set(f, b), b;
}
function Mx(e, t) {
  var O, T;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((I) => String((I == null ? void 0 : I.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const l = i[a], u = l == null ? void 0 : l.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const d = Dh(e.graph, u), { originId: f, originSlot: v } = Lh(d);
  if (f == null) return { src: "", sourceType: "", inputName: n };
  const b = bx(e, a, f), h = Number(v || 0);
  if (!b) return { src: "", sourceType: "", inputName: n };
  let w = [];
  try {
    w = typeof ((O = br) == null ? void 0 : O.getNodeImageUrls) == "function" ? br.getNodeImageUrls(b) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const I = [];
    h >= 0 && h < w.length && I.push(w[h]), I.push(...w);
    const G = mc(I);
    if (G.length) return { src: G[0], srcCandidates: G, sourceType: "appNodeImageUrls", inputName: n };
  }
  const S = aa((b == null ? void 0 : b.id) ?? f), P = Sx(S, h), k = mc(P);
  if (k.length) return { src: k[0], srcCandidates: k, sourceType: "nodeOutputs", inputName: n };
  const V = Array.isArray(b == null ? void 0 : b.imgs) ? b.imgs : [];
  if (V.length) {
    const I = [];
    h >= 0 && h < V.length && I.push(V[h]), I.push(...V);
    const G = mc(I);
    if (G.length) return { src: G[0], srcCandidates: G, sourceType: "nodeImgs", inputName: n };
  }
  const R = (T = b == null ? void 0 : b.widgets) == null ? void 0 : T.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image");
  if (R) {
    let I = zr(R.value);
    if (I && !I.includes("/") && !I.includes(":") && (b.comfyClass === "LoadImage" || b.type === "LoadImage") && (I = bn.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`)), I) return { src: I, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function kx(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const l = Rh(a);
  if (!l.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === a && d.img) return d.img;
  const f = new Image(), v = { srcRaw: a, resolvedSrc: "", img: f };
  e.__panoLinkedInputImageCache.set(u, v);
  let b = -1;
  const h = () => {
    var S, P;
    if (b += 1, b >= l.length) {
      try {
        (P = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.delete) == null || P.call(S, u);
      } catch {
      }
      return;
    }
    const w = l[b];
    v.resolvedSrc = w, f.src = w;
  };
  return f.onload = () => {
    var w;
    i == null || i(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, f.onerror = () => {
    var w, S;
    if (b + 1 < l.length) {
      h();
      return;
    }
    try {
      (S = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || S.call(w, u);
    } catch {
    }
  }, h(), f;
}
function Px(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((P) => String(P || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = String(t || "image"), u = a.join(`
`), d = e.__panoLinkedInputImageCache.get(l);
  if (d && d.srcRaw === u && d.img) return d.img;
  const f = [], v = /* @__PURE__ */ new Set();
  if (a.forEach((P) => {
    Rh(P).forEach((k) => {
      const V = String(k || "").trim();
      !V || v.has(V) || (v.add(V), f.push(V));
    });
  }), !f.length) return null;
  const b = new Image(), h = { srcRaw: u, resolvedSrc: "", img: b };
  e.__panoLinkedInputImageCache.set(l, h);
  let w = -1;
  const S = () => {
    var k, V;
    if (w += 1, w >= f.length) {
      try {
        (V = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.delete) == null || V.call(k, l);
      } catch {
      }
      return;
    }
    const P = f[w];
    h.resolvedSrc = P, b.src = P;
  };
  return b.onload = () => {
    var P;
    i == null || i(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
  }, b.onerror = () => {
    var P, k;
    if (w + 1 < f.length) {
      S();
      return;
    }
    try {
      (k = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || k.call(P, l);
    } catch {
    }
  }, S(), b;
}
function Oh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = Mx(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Lf(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], l = Oh(e, a), u = String(i || a.join("|") || "image_exact"), d = Array.isArray(l == null ? void 0 : l.srcCandidates) ? l.srcCandidates : [];
  if (d.length) return Px(e, u, d, n);
  const f = String((l == null ? void 0 : l.src) || "").trim();
  return f ? kx(e, u, f, n) : null;
}
async function oa(e, t, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, u = gx(e, t);
  await rx();
  const d = vn(e, "output_preset"), f = vn(e, "coverage"), v = vn(e, "bg_color"), b = vn(e, Ko), h = dx(
    String((b == null ? void 0 : b.value) || ""),
    Hc(d == null ? void 0 : d.value, 2048),
    String((v == null ? void 0 : v.value) || "#00ff00"),
    Ot(f == null ? void 0 : f.value)
  );
  e.__panoLiveStateOverride = h, e.__panoLiveStateVersion = 0, t === "cutout" && (h.shots = Array.isArray(h.shots) ? h.shots.slice(0, 1) : [], h.shots.length || (h.active.selected_shot_id = null));
  const w = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(h.shots) ? h.shots : [], o = String(((s = h == null ? void 0 : h.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((c) => String((c == null ? void 0 : c.id) || "") === o) || r[0] || null;
  })() : null, S = w ? Yl(w, !1) : { width: 220, height: 132 }, P = Ch(t), k = /* @__PURE__ */ Qo({
    viewButtons: (P.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (P.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(P.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...l ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Rt.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Rt.fullscreen,
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
      customColorCss: En({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: En({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (r, o) => ({ index: o, color: null })),
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
      duration: 0,
      currentTime: 0,
      progressPct: 0,
      currentTimeLabel: "0:00",
      durationLabel: "0:00",
      frameCount: 0,
      fps: 24,
      mode: "playback",
      hasAudio: !1,
      muted: !1,
      volume: 1,
      volumePct: 100
    },
    sidePanel: {},
    selectionMenu: { visible: !1, left: 0, top: 0, items: [] },
    tooltip: { visible: !1, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: t === "cutout",
      ready: !1,
      settled: !1,
      expanded: !1,
      width: S.width,
      height: S.height,
      label: w ? "Loading preview" : "Add Frame to preview"
    }
  }), V = document.createElement("div");
  document.body.appendChild(V);
  const R = M1(K_, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: P,
    paintSwatches: wo.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: En(r.color, 1)
    })),
    uiState: k,
    onClose: () => {
      ai();
    }
  });
  try {
    R.mount(V);
  } catch (r) {
    try {
      R.unmount();
    } catch {
    }
    throw V.remove(), r;
  }
  const O = V.querySelector(".pano-modal-overlay"), T = V.querySelector(".pano-modal"), I = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), G = T == null ? void 0 : T.querySelector("[data-stage-background]"), J = T == null ? void 0 : T.querySelector(".pano-stage-wrap");
  if (!O || !T || !I || !G || !J)
    throw R.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ae = document.createElement("div");
  ae.setAttribute("aria-hidden", "true"), ae.style.position = "absolute", ae.style.left = "0", ae.style.top = "0", ae.style.pointerEvents = "none", ae.style.zIndex = "12", ae.style.display = "none", ae.style.willChange = "transform,width,height,background,border-radius", J == null || J.appendChild(ae);
  const re = document.createElement("div");
  re.className = "pano-paint-size-preview", re.setAttribute("aria-hidden", "true");
  const we = document.createElement("div");
  we.className = "pano-paint-size-preview-sample", re.appendChild(we), J == null || J.appendChild(re);
  const A = I.getContext("2d"), ve = Hr(), pe = t === "cutout" ? Ob({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, fe = T.querySelector("[data-side]"), z = T.querySelector("[data-video-element]"), ce = T.querySelector("[data-selection-menu]"), B = T.querySelector("[data-tooltip]"), ee = T.querySelector("[data-camera-preview-host]"), W = T.querySelector("[data-paint-color-row]"), Z = T.querySelector("[data-paint-color-pop]"), Ae = T.querySelector("[data-paint-color-sv]"), Ie = T.querySelector("[data-paint-color-sv-cursor]"), Le = T.querySelector("[data-paint-hue-strip]"), Ye = T.querySelector("[data-paint-hue-handle]");
  let Ue = 0, at = 0;
  J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", G.style.opacity = "0", a && (fe == null || fe.remove(), T.classList.add("pano-modal-readonly"));
  const gt = () => {
    if (!m.customPaintSessionStart) return;
    if (So(m.customPaintSessionStart, m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    if (Q_(m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    const r = [
      cn(m.customPaintColor),
      ...m.customPaintHistory.filter((o) => !So(o, m.customPaintColor))
    ];
    m.customPaintHistory = r.slice(0, 8), m.customPaintSessionStart = null;
  }, Ct = (r = !1) => {
    !Z || Z.hidden || (r ? gt() : m.customPaintSessionStart = null, Z.hidden = !0, k.paintDock.colorPopOpen = !1);
  }, Ht = () => {
    Z && (Z.hidden && (m.customPaintSessionStart = cn(m.customPaintColor)), Z.hidden = !1, k.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (r) => {
    Ba(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), Ct(!0), t === "cutout" && m.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (m.cutoutAspectOpen = !1, m.menuMode = "", m.menuSize.measured = !1, $e(), ge())));
  });
  const dn = t === "stickers" ? h.active.selected_sticker_id : h.active.selected_shot_id, on = JSON.stringify(Ef(h)), m = {
    mode: "pano",
    selectedId: dn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Ot(h.coverage),
    historyController: yb(80, { entries: [on], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Wn,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: !1 },
    interaction: null,
    hqFrames: 0,
    viewInertia: { vx: 0, vy: 0, active: !1 },
    menuSize: { w: 220, h: 40, measured: !1 },
    menuMode: "",
    cutoutAspectOpen: !1,
    showGrid: ox(e == null ? void 0 : e.id, !0),
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
    frameView: { zoom: 1, panX: 0, panY: 0 },
    paintEngine: Ac(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    objectVisualRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: /* @__PURE__ */ new Map(),
    marqueeModifier: !1,
    panelLastValues: null,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  }, D = pe && ee ? pe.mount(ee, { shot: null }) : null;
  t === "stickers" && (m.selectedId = null, h.active.selected_sticker_id = null), m.selectedIds = m.selectedId ? [m.selectedId] : [];
  const j = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), U = document.createElement("canvas");
  U.__panoFrameIdx = 0;
  const $ = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, ie = {
    timer: 0,
    target: null
  }, ne = {
    active: !1,
    depth: 0
  }, F = {
    mode: "playback",
    editorTime: 0,
    requestedTime: null,
    presentedTime: 0,
    seeking: !1,
    resumeAfterScrub: !1,
    pendingPlaybackResume: !1,
    frameCounter: 0,
    frameCache: /* @__PURE__ */ new Map(),
    frameCacheOrder: [],
    currentFrameNumber: 0
  }, ye = 4, he = [], xe = () => {
    const r = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Me = (r) => {
    if (!(r instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(r.audioTracks) && r.audioTracks.length > 0 || r.audioTracks && typeof r.audioTracks.length == "number" && r.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof r.mozHasAudio == "boolean") return r.mozHasAudio;
    } catch {
    }
    try {
      if (Number(r.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!k.videoTransport.hasAudio;
  }, Te = (r) => {
    const o = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, Ee = (r) => {
    if (!(z instanceof HTMLVideoElement) || Number(z.videoWidth || 0) < 1 || Number(z.videoHeight || 0) < 1) return null;
    const o = Number(z.videoWidth || 0), s = Number(z.videoHeight || 0), c = document.createElement("canvas");
    c.width = o, c.height = s, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const p = c.getContext("2d");
    if (!p) return null;
    for (p.drawImage(z, 0, 0, o, s), F.frameCache.set(r, c), F.frameCacheOrder = F.frameCacheOrder.filter((g) => g !== r), F.frameCacheOrder.push(r); F.frameCacheOrder.length > ye; ) {
      const g = F.frameCacheOrder.shift();
      g != null && F.frameCache.delete(g);
    }
    return c;
  }, Oe = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), c = Number(r.height || 0);
    if (s < 1 || c < 1) return !1;
    (U.width !== s || U.height !== c) && (U.width = s, U.height = c);
    const p = U.getContext("2d");
    return p ? (p.clearRect(0, 0, s, c), p.drawImage(r, 0, 0, s, c), U.__panoFrameIdx = Number(U.__panoFrameIdx || 0) + 1, o != null && (F.presentedTime = Number(o || 0)), !0) : !1;
  }, ot = (r) => {
    const o = Te(r), s = F.frameCache.get(o) || null;
    return s ? (F.currentFrameNumber = o, Oe(s, r)) : !1;
  };
  if (z instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof z.requestVideoFrameCallback != "function" || z.__panoFramePumpActive) return;
      z.__panoFramePumpActive = !0;
      const y = (x, N) => {
        z.__panoFramePumpActive = !1;
        const C = Number((N == null ? void 0 : N.mediaTime) ?? z.currentTime ?? 0), M = Te(C), L = xe();
        F.mode === "scrub" ? Math.abs(C - Number(F.editorTime || 0)) <= L && (Ee(M), ot(F.editorTime), $.backgroundDirty = !0, $.dirty = !0, cr({
          ready: !0,
          playing: !1,
          visible: m.primaryTool !== "paint" && m.primaryTool !== "mask",
          currentTime: F.editorTime,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "scrub"
        }), ge({ cause: "frame_view" })) : (F.editorTime = C, F.presentedTime = C, F.requestedTime = null, F.currentFrameNumber = M, Ee(M), F.frameCounter += 1, z.dataset.panoFrameIdx = String(F.frameCounter), $.backgroundDirty = !0, $.dirty = !0, cr({
          ready: !0,
          playing: !z.paused && !z.ended,
          visible: m.primaryTool !== "paint" && m.primaryTool !== "mask",
          currentTime: C,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "playback"
        }), ge({ cause: "frame_view" })), $.running && (!z.paused || F.mode === "scrub") && r();
      };
      try {
        z.requestVideoFrameCallback(y);
      } catch {
        z.__panoFramePumpActive = !1;
      }
    }, o = () => {
      F.pendingPlaybackResume && (F.pendingPlaybackResume = !1, F.mode = "playback", F.requestedTime = null, Wr() && ($.backgroundDirty = !0, $.dirty = !0), z.play().catch(() => {
      }));
    }, s = () => {
      F.editorTime = Number(z.currentTime || 0), Number(z.readyState || 0) >= 2 && Wr() && ($.backgroundDirty = !0, $.dirty = !0), Yr(), r(), ge({ cause: "frame_view" });
    }, c = () => {
      F.mode = "playback", F.seeking = !1, F.requestedTime = null, Yr(), r(), ge({ cause: "frame_view" });
    }, p = () => {
      F.mode === "playback" && Wr() && ($.backgroundDirty = !0, $.dirty = !0), Yr(), ge({ cause: "frame_view" });
    }, g = () => {
      cr({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: !!z.getAttribute("src") && m.primaryTool !== "paint" && m.primaryTool !== "mask",
        currentTime: F.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: F.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: z.muted,
        volume: Number(z.volume ?? k.videoTransport.volume ?? 1)
      });
    }, _ = () => {
      const y = F.seeking || F.pendingPlaybackResume || F.mode === "scrub";
      if (F.seeking = !1, !y) {
        F.requestedTime = null, r();
        return;
      }
      const x = Number(F.requestedTime ?? F.editorTime ?? 0), N = Number(z.currentTime || 0);
      if (Math.abs(N - x) > xe()) {
        bs(x);
        return;
      }
      F.mode === "scrub" && (Wr(), $.backgroundDirty = !0, $.dirty = !0, ge({ cause: "frame_view" })), F.requestedTime = null, o(), r();
    };
    z.addEventListener("loadedmetadata", s), z.addEventListener("loadeddata", s), z.addEventListener("canplay", s), z.addEventListener("play", c), z.addEventListener("pause", p), z.addEventListener("volumechange", g), z.addEventListener("seeked", _), he.push(() => z.removeEventListener("loadedmetadata", s)), he.push(() => z.removeEventListener("loadeddata", s)), he.push(() => z.removeEventListener("canplay", s)), he.push(() => z.removeEventListener("play", c)), he.push(() => z.removeEventListener("pause", p)), he.push(() => z.removeEventListener("volumechange", g)), he.push(() => z.removeEventListener("seeked", _));
  }
  function bt() {
    k.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", c = r.attr === "data-mask-tool";
      r.active = o ? r.value === m.primaryTool : s ? r.key === m.paintTool : c ? r.key === m.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function ke(r) {
    const o = r == null ? void 0 : r.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const s of o.items) {
        if (!s || s.kind !== "file") continue;
        const c = String(s.type || "").toLowerCase();
        if (!c || c.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((s) => Va(s)) : !1;
  }
  function lt(r) {
    const o = !!r;
    ne.active !== o && (ne.active = o, J.classList.toggle("drop-active", o));
  }
  function hn(r, o, s = m.viewFov, c = 140, p = 620) {
    const g = lv(m.viewYaw, r), _ = o - m.viewPitch, y = s - m.viewFov, x = Math.hypot(g, _) + Math.abs(y) * 0.6, N = Math.round(Y(c + x * 2.2, c, p));
    m.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: m.viewYaw,
      startPitch: m.viewPitch,
      startFov: m.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: g
    }, m.viewInertia.active = !1, m.viewInertia.vx = 0, m.viewInertia.vy = 0, ge();
  }
  fp();
  function et() {
    return t === "stickers" ? h.stickers : h.shots;
  }
  function Xe() {
    const r = h.painting || (h.painting = ra(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function pn(r = "paint") {
    var p, g;
    const o = Array.isArray((g = (p = h.painting) == null ? void 0 : p[r]) == null ? void 0 : g.strokes) ? h.painting[r].strokes : [], s = [], c = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const y = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !y || c.has(y) || (c.add(y), s.push(y));
    }
    return s;
  }
  function xa() {
    return pn("paint");
  }
  function ar(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Mi(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function At(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function ki(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const c = s.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function us() {
    var o;
    let r = -1;
    for (const s of Array.isArray(h.stickers) ? h.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Xe())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = h.painting) == null ? void 0 : o.raster_objects) ? h.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function _l(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const c = Xe();
    let p = c.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return p ? o != null && (p.z_index = Math.max(0, Number(o || 0))) : (p = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? us() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, c.push(p)), p;
  }
  function Fh(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), c = Number(r.halfW || 0), p = Number(r.halfH || 0);
    return [
      {
        u: ((o - c) % 1 + 1) % 1,
        v: Y(s - p, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: Y(s - p, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: Y(s + p, 0, 1)
      },
      {
        u: ((o - c) % 1 + 1) % 1,
        v: Y(s + p, 0, 1)
      }
    ];
  }
  function Vh() {
    const r = new Set(xa()), s = Xe().filter((c) => r.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return r.forEach((c) => {
      s.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === c) || s.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: us(),
        locked: !1,
        frame: null
      });
    }), s.sort((c, p) => Number((c == null ? void 0 : c.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), h.painting.groups = s, s;
  }
  function Hh(r, o, s) {
    var K;
    const c = (q) => (Number(q || 0) % 1 + 1) % 1, p = [];
    for (const q of s) {
      const oe = q == null ? void 0 : q.geometry, me = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(me) && p.push(...me);
    }
    if (!p.length) return null;
    const g = c(((K = p[0]) == null ? void 0 : K.u) || 0);
    let _ = 0, y = 0;
    p.forEach((q) => {
      const oe = c((q == null ? void 0 : q.u) || 0);
      _ += g + gn(oe, g), y += Number((q == null ? void 0 : q.v) || 0);
    });
    const x = (_ / p.length % 1 + 1) % 1;
    let N = 1 / 0, C = -1 / 0, M = 1 / 0, L = -1 / 0;
    p.forEach((q) => {
      const oe = c((q == null ? void 0 : q.u) || 0), me = gn(oe, x);
      N = Math.min(N, me), C = Math.max(C, me);
      const le = Number((q == null ? void 0 : q.v) || 0);
      M = Math.min(M, le), L = Math.max(L, le);
    });
    const H = s.reduce((q, oe) => {
      const me = fr(String((oe == null ? void 0 : oe.toolKind) || "pen")), le = tn[me] || tn[Wn], be = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((le == null ? void 0 : le.sizeScale) ?? 1));
      return Math.max(q, be);
    }, 0), Q = Math.max(35e-4, H / 2048);
    return {
      centerUv: { u: ((x + (N + C) * 0.5) % 1 + 1) % 1, v: Y((M + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - N) * 0.5 + Q,
      halfH: (L - M) * 0.5 + Q,
      uvPad: Q
    };
  }
  function or(r, o, s) {
    const c = String(r || "").trim();
    if (!c) return null;
    const p = Xe().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === c);
    if (!p) return null;
    const g = s || xn(c, o);
    return p.frame = Hh(c, o, g), p.frame;
  }
  function Br() {
    var c;
    const r = (Array.isArray(h.stickers) ? h.stickers : []).map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), o = Vh().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = (Array.isArray((c = h.painting) == null ? void 0 : c.raster_objects) ? h.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...r, ...o, ...s].sort((p, g) => Number(p.z_index || 0) - Number(g.z_index || 0));
  }
  function fs(r = !0) {
    var s, c, p, g, _, y;
    const o = Br().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((c = (s = m.interaction) == null ? void 0 : s.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), N = String(((g = (p = m.interaction) == null ? void 0 : p.stroke) == null ? void 0 : g.layerKind) || "").trim(), C = String(((y = (_ = m.interaction) == null ? void 0 : _.stroke) == null ? void 0 : y.toolKind) || "").trim();
      x && N === "paint" && C !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function ds(r = !0) {
    var y, x, N, C, M, L;
    const o = Br();
    if (!r) return o;
    const s = String(((x = (y = m.interaction) == null ? void 0 : y.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), c = String(((C = (N = m.interaction) == null ? void 0 : N.stroke) == null ? void 0 : C.layerKind) || "").trim(), p = String(((L = (M = m.interaction) == null ? void 0 : M.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!s || c !== "paint" || p === "eraser" || o.some((H) => H.type === "strokeGroup" && String(H.actionGroupId || "") === s))
      return o;
    const g = ut();
    let _ = o.reduce((H, Q) => Math.max(H, Number((Q == null ? void 0 : Q.z_index) || 0)), -1) + 1;
    return g && kt(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((H, Q) => Number((H == null ? void 0 : H.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0));
  }
  function jh() {
    return Xe().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => Kr(ar("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function zh() {
    var r;
    return (Array.isArray((r = h.painting) == null ? void 0 : r.raster_objects) ? h.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => Ur(Mi((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function xl(r = m.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, c = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || c;
    }
    return !1;
  }
  function $h() {
    var o, s, c, p;
    let r = null;
    try {
      const g = fs(), _ = ((p = (c = (s = (o = m.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, g)) == null ? void 0 : c.displayPaint) == null ? void 0 : p.canvas) || null;
      _ && (r = {
        source: _,
        revision: `${ei()}:${wa()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function wa() {
    var p, g, _, y, x, N, C;
    const r = m.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!xl(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const M = ((p = r == null ? void 0 : r.stroke) == null ? void 0 : p.geometry) || null, L = String(((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.layerKind) || ""), H = ((_ = M == null ? void 0 : M.rawPoints) == null ? void 0 : _.length) ?? ((y = M == null ? void 0 : M.points) == null ? void 0 : y.length) ?? 0, Q = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${L || "paint"}_${o}_live${Q}_${H}_${m.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), c = String(((N = r == null ? void 0 : r.item) == null ? void 0 : N.rasterObjectId) || ((C = r == null ? void 0 : r.item) == null ? void 0 : C.id) || "");
    return `_${o}_${s || c || "active"}_${m.livePaintInteractionRevision}`;
  }
  function hs() {
    const r = Array.isArray(h.shots) ? h.shots : [], o = Array.isArray(h.stickers) ? h.stickers : [];
    return [...r, ...o];
  }
  function sn(r) {
    return !!r && Array.isArray(h.shots) && h.shots.includes(r);
  }
  function yt(r) {
    return !!r && Array.isArray(h.stickers) && h.stickers.includes(r);
  }
  function Qt() {
    var r;
    return Array.isArray((r = h.painting) == null ? void 0 : r.raster_objects) ? h.painting.raster_objects : [];
  }
  function Ur(r) {
    const o = At(r);
    if (!o) return null;
    const s = Qt().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Mi(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function jt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = At(r.rasterObjectId || r.id || "");
    return !!o && !!Ur(Mi(o));
  }
  function Kr(r) {
    const o = ki(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const c = Xe().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === s || String((p == null ? void 0 : p.actionGroupId) || "") === s);
    return c ? {
      ...c,
      id: ar("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function kt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!Kr(ar(s, o));
  }
  function xn(r, o = null) {
    const s = ki(r, o), c = String(s.actionGroupId || "").trim();
    return c ? ri(s.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === c) : [];
  }
  function Bh(r, o = "paint") {
    var g, _, y;
    const s = String(r || "").trim(), p = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${m.mode}:${Ti()}`;
    if (m.mode === "frame") {
      const x = Ke(), N = String((x == null ? void 0 : x.id) || ""), C = x ? $t(x) : null;
      return `${p}:frame:${N}:${Math.round(Number((C == null ? void 0 : C.x) || 0))}:${Math.round(Number((C == null ? void 0 : C.y) || 0))}:${Math.round(Number((C == null ? void 0 : C.w) || 0))}:${Math.round(Number((C == null ? void 0 : C.h) || 0))}:${Math.round(Number(((g = m.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = m.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((y = m.frameView) == null ? void 0 : y.panY) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Sa(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: Y(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function gn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function ps(r, o = null, s = null) {
    var N;
    const c = ki(r, o), p = Array.isArray(s) ? s : xn(c.actionGroupId, c.layerKind), g = [];
    if (p.forEach((C) => {
      const M = (C == null ? void 0 : C.geometry) || null, L = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(L) && g.push(...L);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((N = g[0]) == null ? void 0 : N.u) || 0);
    let y = 0, x = 0;
    return g.forEach((C) => {
      y += _ + gn(Number((C == null ? void 0 : C.u) || 0), _), x += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (y / g.length % 1 + 1) % 1,
      v: Y(x / g.length, 0, 1)
    };
  }
  function Na(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const p = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = gn(Number(r.u || 0), p), y = Number(r.v || 0) - g, x = Number(c || 0) * It, N = Math.cos(x), C = Math.sin(x), M = Math.max(0.02, Number(s || 1)), L = (_ * N - y * C) * M, H = (_ * C + y * N) * M;
    return {
      ...r,
      u: ((p + L) % 1 + 1) % 1,
      v: Y(g + H, 0, 1)
    };
  }
  function wl(r, o, s, c = null, p = null, g = null) {
    const _ = ki(r, p), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const x = ri(_.layerKind), N = Array.isArray(c) ? new Map(c.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let C = !1;
    if (x.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== y) return;
      const L = (N == null ? void 0 : N.get(String((M == null ? void 0 : M.id) || ""))) || M, H = M == null ? void 0 : M.geometry, Q = L == null ? void 0 : L.geometry;
      !H || !Q || (Array.isArray(Q.points) && (H.points = Q.points.map((K) => Sa(K, o, s)), C = !0), Array.isArray(Q.rawPoints) && (H.rawPoints = Q.rawPoints.map((K) => Sa(K, o, s)), C = !0), Array.isArray(Q.processedPoints) && (H.processedPoints = Q.processedPoints.map((K) => Sa(K, o, s)), C = !0));
    }), C && g) {
      const M = Xe().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === y);
      M && (M.frame = null);
    }
    return C;
  }
  function Sl(r, o = 1, s = 0, c = null, p = null, g = null) {
    const _ = ki(r, p), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const x = ri(_.layerKind), N = Array.isArray(c) ? c : xn(y, _.layerKind), C = Array.isArray(N) ? new Map(N.map((H) => [String((H == null ? void 0 : H.id) || ""), H])) : null, M = (g == null ? void 0 : g.centerUv) ?? ps(y, _.layerKind, N);
    let L = !1;
    if (x.forEach((H) => {
      if (String((H == null ? void 0 : H.actionGroupId) || "").trim() !== y) return;
      const Q = (C == null ? void 0 : C.get(String((H == null ? void 0 : H.id) || ""))) || H, K = H == null ? void 0 : H.geometry, q = Q == null ? void 0 : Q.geometry;
      !K || !q || (Array.isArray(q.points) && (K.points = q.points.map((oe) => Na(oe, M, o, s)), L = !0), Array.isArray(q.rawPoints) && (K.rawPoints = q.rawPoints.map((oe) => Na(oe, M, o, s)), L = !0), Array.isArray(q.processedPoints) && (K.processedPoints = q.processedPoints.map((oe) => Na(oe, M, o, s)), L = !0));
    }), L && g) {
      const H = Xe().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === y);
      H && (H.frame = null);
    }
    return L;
  }
  function Nl(r, o, s, c = null) {
    const p = At(r);
    if (!p) return !1;
    const g = Qt().find((C) => String((C == null ? void 0 : C.id) || "").trim() === p);
    if (!g) return !1;
    const _ = c && typeof c == "object" ? c : g, y = (_ == null ? void 0 : _.transform) || {}, x = Number(y.du || 0) + Number(o || 0), N = Y(Number(y.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = x, g.transform.dv = N, !0;
  }
  function Uh(r, o = 1, s = null) {
    const c = At(r);
    if (!c) return !1;
    const p = Qt().find((N) => String((N == null ? void 0 : N.id) || "").trim() === c);
    if (!p) return !1;
    const g = s && typeof s == "object" ? s : p, _ = (g == null ? void 0 : g.transform) || {}, y = Math.max(0.01, Number(_.scale || 1)), x = Y(y * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = x, !0;
  }
  function ut() {
    const r = String(m.selectedId || "");
    if (!r) return null;
    const o = Kr(r);
    if (o) return o;
    const s = Ur(r);
    return s || (t === "cutout" ? hs().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null : et().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null);
  }
  function wn() {
    const r = Array.isArray(m.selectedIds) && m.selectedIds.length ? m.selectedIds : m.selectedId ? [m.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((c) => {
      const p = String(c || "").trim();
      if (!p || s.has(p)) return;
      s.add(p);
      const g = p === String(m.selectedId || "") ? ut() : Kr(p) || Ur(p) || (t === "cutout" ? hs().find((_) => String((_ == null ? void 0 : _.id) || "") === p) : et().find((_) => String((_ == null ? void 0 : _.id) || "") === p));
      g && o.push(g);
    }), o;
  }
  function gs(r = null) {
    const o = Array.isArray(r) ? r : wn();
    if (!o || o.length < 2) return null;
    const s = o.map((N) => Et(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!s.length) return null;
    const c = s.flatMap((N) => N.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), p = s.flatMap((N) => N.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), g = Math.min(...c), _ = Math.max(...c), y = Math.min(...p), x = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (g + _) * 0.5, y: (y + x) * 0.5 },
      corners: [
        { x: g, y },
        { x: _, y },
        { x: _, y: x },
        { x: g, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (g + _) * 0.5, y, a: { x: g, y }, b: { x: _, y } },
        { edge: "right", x: _, y: (y + x) * 0.5, a: { x: _, y }, b: { x: _, y: x } },
        { edge: "bottom", x: (g + _) * 0.5, y: x, a: { x: _, y: x }, b: { x: g, y: x } },
        { edge: "left", x: g, y: (y + x) * 0.5, a: { x: g, y: x }, b: { x: g, y } }
      ],
      rotateStemBase: { x: (g + _) * 0.5, y },
      rotateHandle: { x: (g + _) * 0.5, y: y - 30 }
    };
  }
  function Kh(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(m.selectedIds) && m.selectedIds.includes(o);
  }
  function Ma() {
    const r = ut();
    return r ? kt(r) || jt(r) ? "stroke" : sn(r) ? "frame" : "image" : null;
  }
  function sr(r) {
    if (!r || typeof r != "object") return !1;
    if (kt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Xe().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (jt(r)) {
      const o = At(r.rasterObjectId || r.id || ""), s = Qt().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function ms(r = null) {
    const o = Array.isArray(r) ? r : wn();
    return o.length > 0 && o.every((s) => sr(s));
  }
  function Gh(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (kt(r)) {
      const c = String(r.actionGroupId || r.id || "").trim(), p = Xe().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === c);
      return !p || p.locked === s ? !1 : (p.locked = s, !0);
    }
    if (jt(r)) {
      const c = At(r.rasterObjectId || r.id || ""), p = Qt().find((g) => String((g == null ? void 0 : g.id) || "").trim() === c);
      return !p || p.locked === s ? !1 : (p.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function Wh() {
    if (i) return;
    const r = wn();
    if (!r.length) return;
    const o = !ms(r);
    let s = !1;
    r.forEach((c) => {
      Gh(c, o) && (s = !0);
    }), s && (dt(), _t(), $e(), ge());
  }
  function Nr(r) {
    m.selectedId = (r == null ? void 0 : r.id) || null, m.selectedIds = r != null && r.id ? [r.id] : [], r && yt(r) ? h.active.selected_sticker_id = r.id || null : h.active.selected_sticker_id = null, r && sn(r) ? h.active.selected_shot_id = r.id || null : r ? sn(r) || (h.active.selected_shot_id = h.active.selected_shot_id) : h.active.selected_shot_id = null;
  }
  function Yh(r, o = null) {
    const s = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((_) => {
      const y = String((_ == null ? void 0 : _.id) || "").trim();
      !y || c.has(y) || (c.add(y), s.push(y));
    }), m.selectedIds = s;
    const p = String(o || "").trim();
    m.selectedId = p && s.includes(p) ? p : s[s.length - 1] || null;
    const g = ut();
    h.active.selected_sticker_id = g && yt(g) && g.id || null, g && sn(g) ? h.active.selected_shot_id = g.id || null : s.length || (h.active.selected_shot_id = null);
  }
  function Ml() {
    const r = (Array.isArray(h.shots) ? h.shots : []).map((s, c) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${c + 1}`)
    })), o = (Array.isArray(h.stickers) ? h.stickers : []).map((s, c) => {
      var g, _;
      const p = Tt(s) ? String(s.id || Ir) : String(((_ = (g = h.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: s,
        label: p
      };
    });
    return [...r, ...o];
  }
  function qh(r) {
    return r === "frame" ? Rt.camera : r === "stroke" ? Rt.paintbrush_vertical_tool : Rt.image;
  }
  function kl(r) {
    return !r || !r.item ? gc(String((r == null ? void 0 : r.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${qh(r.kind)}</span><span>${gc(String(r.label || ""))}</span>`;
  }
  function Pl() {
    return us();
  }
  function Tt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Ir || String(r.source_kind || "") === uc;
  }
  function Gr(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function Xh(r) {
    return Tt(r) && Gr(r) ? Jd : 1;
  }
  function Zh() {
    return m.primaryTool === "mask" ? m.maskTool : m.paintTool;
  }
  function Jh() {
    return String(Zh() || "") === "lasso_fill";
  }
  function Qh() {
    if (i) return;
    const r = ut();
    !r || !Tt(r) || (r.visible = Gr(r), Dt(), dt(), _t(), je(), $e(), ge());
  }
  function ep() {
    if (i || t !== "stickers") return;
    const r = ut();
    if (!r || !Tt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = ys(fc, () => {
      ge();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Mr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), dt(), _t(), je(), $e(), ge();
  }
  function tp(r) {
    if (!r || !Tt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, c = ys(fc, () => {
      ge();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (s.vFOV_deg = Mr(
      s.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), s;
  }
  function np() {
    const r = ut();
    if (!r || !Tt(r)) return !1;
    const o = tp(r);
    if (!o) return !1;
    const s = (c, p) => Math.abs(Number(c || 0) - Number(p || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function vs(r) {
    var s;
    const o = aa(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function Cl(r) {
    const o = aa(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function Al() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Do(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function rp() {
    const { metaKey: r } = Al(), o = Cl(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function ka(r) {
    var o;
    return r ? r instanceof HTMLVideoElement ? [
      String(r.currentSrc || r.src || ""),
      Number(r.videoWidth || 0),
      Number(r.videoHeight || 0),
      String(((o = r.dataset) == null ? void 0 : o.panoFrameIdx) || "0")
    ].join("|") : r instanceof HTMLCanvasElement ? [
      "canvas",
      Number(r.width || 0),
      Number(r.height || 0),
      String(r.__panoFrameIdx || 0)
    ].join("|") : [
      String(r.currentSrc || r.src || ""),
      Number(r.naturalWidth || r.width || 0),
      Number(r.naturalHeight || r.height || 0)
    ].join("|") : "none";
  }
  function Il(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), c = o % 60;
    return `${s}:${String(c).padStart(2, "0")}`;
  }
  function cr(r = {}) {
    const o = Number(r.currentTime ?? F.editorTime ?? 0), s = Number(r.duration ?? k.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(z instanceof HTMLVideoElement ? z.muted : k.videoTransport.muted), p = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : z instanceof HTMLVideoElement ? z.volume : k.videoTransport.volume
    ), g = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Me(z);
    Object.assign(k.videoTransport, {
      ready: !!r.ready,
      playing: !!r.playing,
      visible: !!r.visible,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Il(o),
      durationLabel: Il(s),
      frameCount: Math.max(0, Number(r.frameCount ?? k.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? k.videoTransport.fps ?? 24)),
      mode: String(r.mode || F.mode || "playback"),
      hasAudio: g,
      muted: c,
      volume: Math.max(0, Math.min(1, Number.isFinite(p) ? p : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(p) ? p : 1)) * 100)
    });
  }
  function Wr() {
    if (!(z instanceof HTMLVideoElement) || Number(z.videoWidth || 0) < 1 || Number(z.videoHeight || 0) < 1) return !1;
    const r = Number(z.videoWidth || 0), o = Number(z.videoHeight || 0);
    (U.width !== r || U.height !== o) && (U.width = r, U.height = o);
    const s = U.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(z, 0, 0, r, o), U.__panoFrameIdx = Number(U.__panoFrameIdx || 0) + 1, F.presentedTime = Number(F.editorTime || z.currentTime || 0), !0) : !1;
  }
  function ip() {
    return F.mode === "scrub" && Number(U.width || 0) > 0 && Number(U.height || 0) > 0 && Number(U.__panoFrameIdx || 0) > 0 ? U : z instanceof HTMLVideoElement && Number(z.videoWidth || 0) > 0 && Number(z.videoHeight || 0) > 0 && Number(z.readyState || 0) >= 2 ? z : null;
  }
  function bs(r) {
    if (!(z instanceof HTMLVideoElement) || Number(z.videoWidth || 0) < 1 || Number(z.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (F.requestedTime = o, !F.seeking && !(Math.abs(Number(z.currentTime || 0) - o) <= 5e-4)) {
      F.seeking = !0;
      try {
        z.currentTime = o;
      } catch {
        F.seeking = !1;
      }
    }
  }
  function Yr() {
    if (!(z instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = Al(), o = vs(r)[0] || null, s = o && typeof o == "object" ? va(o) : zr(o), c = rp(), p = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), g = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), _ = Number((c == null ? void 0 : c.duration) || (p > 0 ? p / g : 0)), y = !!(c != null && c.has_audio) || Me(z);
    return s && z.dataset.panoSrc !== s ? (z.pause(), z.dataset.panoSrc = s, z.dataset.panoFrameIdx = "0", z.loop = !0, z.muted = !!k.videoTransport.muted, z.volume = Math.max(0, Math.min(1, Number(k.videoTransport.volume ?? 1))), z.src = s, z.load()) : !s && z.getAttribute("src") && (z.pause(), z.removeAttribute("src"), z.load()), cr({
      ready: !!s,
      playing: !z.paused && !z.ended,
      visible: !!s && m.primaryTool !== "paint" && m.primaryTool !== "mask",
      currentTime: F.editorTime,
      duration: _,
      frameCount: p,
      fps: g,
      mode: F.mode,
      hasAudio: y,
      muted: !!z.muted,
      volume: Number(z.volume ?? k.videoTransport.volume ?? 1)
    }), s || null;
  }
  function ap(r, o = null) {
    var s;
    if (r && typeof r == "object" && !Array.isArray(r)) return r;
    if (Array.isArray(r) && r.length > 0) {
      const c = r[0];
      if (c && typeof c == "object" && !Array.isArray(c)) return c;
    }
    if (Array.isArray(o) && o.length > 0) {
      const c = (s = o[0]) == null ? void 0 : s.parsed_state;
      if (c && typeof c == "object" && !Array.isArray(c))
        return {
          yaw_deg: Number(c.yaw_deg || 0),
          pitch_deg: Number(c.pitch_deg || 0),
          hFOV_deg: Number(c.hFOV_deg || 30),
          rot_deg: Number(c.roll_deg || 0)
        };
    }
    return null;
  }
  function ys(r, o = null) {
    const s = vs(r), c = Array.isArray(s) && s.length ? s[0] : null, p = zr(c);
    if (!p) return null;
    const g = `__ui__${r}`, _ = j.get(g);
    if (_ && _.__panoSrc === p) return _;
    const y = new Image();
    return y.__panoSrc = p, y.onload = () => {
      typeof o == "function" ? o(y) : ge();
    }, y.src = p, j.set(g, y), y;
  }
  function Tl(r = null) {
    const o = Lf(e, ["sticker_image"], r, "sticker_image_exact");
    return o || ys(fc, r);
  }
  function El(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let c = 0; c < o.length; c += 1)
      s ^= o.charCodeAt(c), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Mr(r, o, s) {
    const c = Math.max(1, Number(o || 1)), p = Math.max(1, Number(s || 1)), g = Y(Number(r || 30), 0.1, 179) * It, _ = 2 * Math.atan(Math.tan(g * 0.5) * (p / c));
    return Y(_ * mr, 0.1, 179);
  }
  function op(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const c = s.version;
      let p = null;
      if (typeof c == "number" && Number.isInteger(c) ? p = c : typeof c == "string" && /^\d+$/.test(c) && (p = Number.parseInt(c, 10)), p !== 1) return null;
      const g = s.pose;
      if (!g || typeof g != "object") return null;
      const _ = Number(g.yaw_deg), y = Number(g.pitch_deg), x = Number(g.roll_deg), N = Number(g.hFOV_deg);
      if (![_, y, x, N].every((H) => Number.isFinite(H))) return null;
      let C = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const M = {
        yaw_deg: C,
        pitch_deg: Y(y, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: Y(N, 0.1, 179)
      }, L = Number(s.source_aspect);
      return Number.isFinite(L) && L > 0 && (M.source_aspect = L), M;
    } catch {
      return null;
    }
  }
  function Dl(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), p = Number(r == null ? void 0 : r.hFOV_deg), g = Gi(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: Y(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: Y(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function sp(r) {
    var y;
    if (!r || typeof r != "object") return Dl(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), p = Number(r == null ? void 0 : r.hFOV_deg), g = Number(r == null ? void 0 : r.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(p) && Number.isFinite(g)) {
      const x = Y(p, 0.1, 179) * It, N = Y(g, 0.1, 179) * It, C = Math.tan(N * 0.5);
      if (Math.abs(C) > 1e-6) {
        const M = Math.tan(x * 0.5) / C;
        Number.isFinite(M) && M > 0 && (_ = M);
      }
    }
    if (r != null && r.asset_id && ((y = h == null ? void 0 : h.assets) != null && y[r.asset_id])) {
      const x = h.assets[r.asset_id], N = Number((x == null ? void 0 : x.w) || 0), C = Number((x == null ? void 0 : x.h) || 0);
      N > 0 && C > 0 && (_ = N / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: Y(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: Y(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function cp(r) {
    var c, p, g, _, y;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = Dh(e.graph, s), { originId: N, originSlot: C } = Lh(x), M = aa(N), L = [
        M == null ? void 0 : M.output,
        M == null ? void 0 : M.result,
        (c = M == null ? void 0 : M.data) == null ? void 0 : c.output,
        (p = M == null ? void 0 : M.data) == null ? void 0 : p.result,
        (g = M == null ? void 0 : M.ui) == null ? void 0 : g.output,
        (_ = M == null ? void 0 : M.ui) == null ? void 0 : _.result
      ];
      for (const H of L) {
        if (!Array.isArray(H)) continue;
        const Q = Number(C || 0), K = H[Q];
        if (typeof K == "string" && K.trim()) return K;
      }
    }
    return String(((y = vn(e, r)) == null ? void 0 : y.value) || "");
  }
  function lp(r, o, s) {
    const c = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : op(o);
    if (c) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || c.source_aspect || 1), y = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: Mr(c.hFOV_deg, _, y),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const p = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(m.viewYaw || 0),
      pitch_deg: Number(m.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Mr(30, p, g),
      rot_deg: 0
    };
  }
  function Ll(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((H) => String((H == null ? void 0 : H.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, c = Tl(() => {
      var H;
      (H = e.__panoExternalStickerSync) == null || H.call(e, "image-loaded");
    }), p = ap(Cl("pano_sticker_input_pose"), null), g = cp("sticker_state"), _ = El(p && typeof p == "object" ? JSON.stringify(p) : g), y = Array.isArray(h.stickers) ? h.stickers : h.stickers = [], x = y.findIndex((H) => String((H == null ? void 0 : H.id) || "") === Ir);
    if (s == null) {
      x >= 0 && (y.splice(x, 1), m.selectedId === Ir && (m.selectedId = null, m.selectedIds = [], h.active.selected_sticker_id = null), _t(), je(), $e(), ge());
      return;
    }
    const N = y.reduce((H, Q) => Math.max(H, Number((Q == null ? void 0 : Q.z_index) || 0)), -1);
    let C = x >= 0 ? y[x] : null;
    const M = !C || Number(C.source_link_id ?? -1) !== Number(s) || String(C.source_state_hash || "") !== _;
    C || (C = {
      id: Ir,
      source_kind: uc
    }, y.push(C)), C.id = Ir, C.source_kind = uc, C.source_link_id = Number(s), C.source_state_hash = _, C.visible = C.visible !== !1;
    let L = !1;
    if (M) {
      const H = lp(p, g, c);
      Object.assign(C, H, {
        initial_pose: { ...H },
        visible: !0,
        z_index: N + 1
      }), L = !0;
    } else if (c && (c.complete || c.naturalWidth || c.width)) {
      const H = Mr(
        Number(C.hFOV_deg || 30),
        Number(c.naturalWidth || c.width || 1),
        Number(c.naturalHeight || c.height || 1)
      );
      Math.abs(Number(C.vFOV_deg || 0) - H) > 1e-6 && (C.vFOV_deg = H, L = !0);
    }
    L && (_t(), je(), $e()), ge();
  }
  function qr(r = {}) {
    const s = r.preservePanelValues !== !1 ? ut() : null;
    s && (m.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: zi(s)
    }), m.selectedId = null, m.selectedIds = [], m.cutoutAspectOpen = !1, h.active.selected_sticker_id = null, h.active.selected_shot_id = null;
  }
  function up() {
    if (t !== "cutout") return;
    const r = Ke();
    r && Nr(r);
  }
  function _s() {
    if (t !== "cutout") return;
    const r = Ke();
    ji(k.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Rt.camera : Rt.plus_circle
    });
  }
  function Pa() {
    const r = !!Ke();
    m.mode === "frame" && !r && (m.mode = "pano"), m.outputPreviewRect = null, k.viewButtons.forEach((o) => {
      const s = o.key === m.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !r : !1;
    }), k.outputPreviewToggle.visible = t === "cutout" && !!Ke(), t === "cutout" && k.cameraPreview && (k.cameraPreview.visible = !0, k.cameraPreview.expanded = !!m.outputPreviewExpanded, k.cameraPreview.settled = k.cameraPreview.settled === !0 && $.pendingStableLayoutFrames <= 0 && $.hasPresentedFrame), su() ? mt(m.pointerPos) : I.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function fp() {
    const o = zl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function xs() {
    const r = Tn(m.viewYaw, m.viewPitch);
    let o = jn(0, 1, 0);
    Math.abs(kn(r, o)) > 0.999 && (o = jn(0, 0, 1));
    const s = si(oo(o, r)), c = si(oo(r, s));
    return { right: s, up: c, fwd: r };
  }
  function Pi(r) {
    const { right: o, up: s, fwd: c } = xs(), p = kn(r, o), g = kn(r, s), _ = kn(r, c);
    if (_ <= 1e-5) return null;
    const y = I.width, x = I.height, N = m.viewFov * It, C = 2 * Math.atan(Math.tan(N / 2) * (x / y)), M = y / 2 / Math.tan(N / 2), L = x / 2 / Math.tan(C / 2);
    return {
      x: y / 2 + p / _ * M,
      y: x / 2 - g / _ * L,
      z: _
    };
  }
  function ws(r, o) {
    const { right: s, up: c, fwd: p } = xs(), g = I.width, _ = I.height, y = m.viewFov * It, x = 2 * Math.atan(Math.tan(y / 2) * (_ / g)), N = (r - g / 2) / (g / 2) * Math.tan(y / 2), C = (_ / 2 - o) / (_ / 2) * Math.tan(x / 2), M = io(io(ao(s, N), ao(c, C)), p);
    return si(M);
  }
  function lr() {
    const r = I.width, o = I.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const y = o, x = y * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: y };
    }
    const p = r, g = p / s;
    return { x: 0, y: (o - g) * 0.5, w: p, h: g };
  }
  function Rl(r) {
    var _;
    if (r && typeof r == "object" && (Tt(r) || r.external === !0))
      return Tl(() => {
        var y;
        (y = e.__panoExternalStickerSync) == null || y.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = j.get(o);
    if (s) return s;
    const c = (_ = h.assets) == null ? void 0 : _[o], p = wx(c);
    if (!p) return null;
    const g = new Image();
    return g.onload = () => ge(), g.src = p, j.set(o, g), g;
  }
  function Ol(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = te.get(s);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const p = new Image();
    return p.onload = () => {
      typeof o == "function" && o();
    }, p.src = s, te.set(s, p), p;
  }
  function dp(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = de.get(o);
    if (s) return s.ready ? s : null;
    const c = Ol(r, () => {
      const C = de.get(o);
      C && (C.ready = !1), ge({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const p = Number(c.naturalWidth || c.width || 0), g = Number(c.naturalHeight || c.height || 0);
    if (p < 1 || g < 1) return null;
    const _ = document.createElement("canvas");
    _.width = p, _.height = g;
    const y = _.getContext("2d", { willReadFrequently: !0 });
    if (!y) return null;
    y.clearRect(0, 0, p, g), y.drawImage(c, 0, 0, p, g);
    const x = y.getImageData(0, 0, p, g).data, N = { canvas: _, width: p, height: g, alpha: x, ready: !0 };
    return de.set(o, N), N;
  }
  function hp(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const p = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = gn(Number(r.u || 0), p), y = Number(r.v || 0) - g, x = Math.max(0.02, Number(s || 1)), N = Number(c || 0) * It, C = Math.cos(N), M = Math.sin(N), L = _ / x, H = y / x, Q = L * C + H * M, K = -L * M + H * C;
    return {
      ...r,
      u: ((p + Q) % 1 + 1) % 1,
      v: g + K
    };
  }
  function pp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const c = (r == null ? void 0 : r.transform) || {}, p = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(o.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(c.dv || 0)
    }, _ = hp(
      g,
      p,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), y = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(y > 1e-6) || !(x > 1e-6)) return null;
    const N = gn(Number(_.u || 0), Number(s.u0 || 0)) / y, C = (Number(_.v || 0) - Number(s.v0 || 0)) / x;
    if (N < 0 || N > 1 || C < 0 || C > 1) return 0;
    const M = dp(r);
    if (!M) return null;
    const L = Y(Math.floor(N * M.width), 0, M.width - 1), H = Y(Math.floor(C * M.height), 0, M.height - 1);
    return Number(M.alpha[(H * M.width + L) * 4 + 3] || 0);
  }
  function Fl(r, o, s, c = null) {
    if (!(o != null && o.visible) || !Yn(s, o.corners)) return !1;
    const p = c || Nn(s, performance.now()), g = pp(r, p);
    return g === null ? !0 : g > 8;
  }
  function gp() {
    var c, p, g, _, y, x, N, C;
    const r = ((p = (c = m.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : p.call(c, fs(!1))) || null, o = Math.max(1, Number(((g = r == null ? void 0 : r.descriptor) == null ? void 0 : g.width) || ((y = (_ = r == null ? void 0 : r.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : y.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((C = (N = r == null ? void 0 : r.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : C.height) || 1024));
    return { width: o, height: s };
  }
  function mp() {
    var H, Q, K;
    const r = m.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = Kn(), c = `${wa()}:${s.width}:${s.height}`;
    if (((H = m._activePaintEraserPreviewInfo) == null ? void 0 : H.cacheKey) === c)
      return m._activePaintEraserPreviewInfo.value || null;
    const p = Bt(o), g = (p == null ? void 0 : p.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const q = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = Ts(q, p.targetSpace, !0);
    }
    const _ = Ii(s.width, s.height, { readback: !0 });
    if (!Zl(_, p, { w: s.width, h: s.height })) return null;
    const y = ((K = (Q = _.ctx) == null ? void 0 : Q.getImageData(0, 0, s.width, s.height)) == null ? void 0 : K.data) || null;
    if (!y) return null;
    let x = s.width, N = s.height, C = -1, M = -1;
    for (let q = 0; q < s.height; q += 1)
      for (let oe = 0; oe < s.width; oe += 1)
        y[(q * s.width + oe) * 4 + 3] <= 8 || (oe < x && (x = oe), q < N && (N = q), oe > C && (C = oe), q > M && (M = q));
    if (C < x || M < N)
      return m._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const L = {
      surface: _,
      bounds: { minX: x, minY: N, maxX: C, maxY: M },
      key: `${c}:${x}:${N}:${C}:${M}`
    };
    return m._activePaintEraserPreviewInfo = { cacheKey: c, value: L }, m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function Ci() {
    m._activePaintEraserPreviewInfo = null, m._liveEraserPreviewCanvasCache = null;
  }
  function vp(r, o, s) {
    var c, p;
    if (!r) return null;
    if (r.type === "rasterObject" && ((c = r.item) != null && c.bbox)) {
      const g = r.item.bbox, _ = ((p = r.item) == null ? void 0 : p.transform) || {}, y = Number(g.u0 || 0) + Number(_.du || 0), x = Number(g.u1 || 0) + Number(_.du || 0), N = Number(g.v0 || 0) + Number(_.dv || 0), C = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((y % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(Y(N, 0, 1) * s),
        maxY: Math.ceil(Y(C, 0, 1) * s),
        wraps: x - y >= 1 || y < 0 || x > 1
      };
    }
    if (r.type === "strokeGroup") {
      const g = xn(r.actionGroupId, "paint"), _ = or(r.actionGroupId, "paint", g);
      if (!_) return null;
      const y = _.centerUv.u - _.halfW, x = _.centerUv.u + _.halfW, N = _.centerUv.v - _.halfH, C = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((y % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(Y(N, 0, 1) * s),
        maxY: Math.ceil(Y(C, 0, 1) * s),
        wraps: x - y >= 1 || y < 0 || x > 1
      };
    }
    return null;
  }
  function bp(r, o, s) {
    if (!r || !o) return !1;
    const c = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], p = c(r), g = c(o);
    return p.some((_) => g.some((y) => !(_.maxX < y.minX || y.maxX < _.minX || _.maxY < y.minY || y.maxY < _.minY)));
  }
  function yp(r, o, s) {
    var be, Pe, Fe, Se, X, se, _e;
    if (!r || !o || !((be = s == null ? void 0 : s.surface) != null && be.canvas) || o.type !== "rasterObject") return r;
    const c = Number(r.width || s.surface.canvas.width || 0), p = Number(r.height || s.surface.canvas.height || 0);
    if (c < 1 || p < 1) return r;
    const g = vp(o, c, p);
    if (g && !bp(g, s.bounds, c)) return r;
    const _ = String(((Pe = o.item) == null ? void 0 : Pe.id) || o.id || ""), y = ((Fe = o.item) == null ? void 0 : Fe.transform) || {}, x = `${s.key}:${_}:${c}:${p}:${Number(y.du || 0).toFixed(6)}:${Number(y.dv || 0).toFixed(6)}:${Number(y.rot_deg || 0).toFixed(3)}:${Number(y.scale || 1).toFixed(4)}`, N = m._liveEraserPreviewCanvasCache instanceof Map ? m._liveEraserPreviewCanvasCache : m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(x)) return N.get(x);
    const C = Y(Math.floor(Number(((Se = s.bounds) == null ? void 0 : Se.minX) || 0)), 0, Math.max(0, c - 1)), M = Y(Math.floor(Number(((X = s.bounds) == null ? void 0 : X.minY) || 0)), 0, Math.max(0, p - 1)), L = Y(Math.ceil(Number(((se = s.bounds) == null ? void 0 : se.maxX) || 0)), C, Math.max(0, c - 1)), H = Y(Math.ceil(Number(((_e = s.bounds) == null ? void 0 : _e.maxY) || 0)), M, Math.max(0, p - 1)), Q = Math.max(1, L - C + 1), K = Math.max(1, H - M + 1), q = Ii(c, p, { readback: !0 });
    q.ctx.clearRect(0, 0, c, p), q.ctx.drawImage(r, 0, 0);
    const oe = q.ctx.getImageData(C, M, Q, K);
    q.ctx.save(), q.ctx.globalCompositeOperation = "destination-out", q.ctx.drawImage(s.surface.canvas, 0, 0), q.ctx.restore();
    const me = q.ctx.getImageData(C, M, Q, K);
    let le = !1;
    for (let Ne = 0; Ne < Q * K; Ne += 1) {
      const ze = oe.data[Ne * 4 + 3], Ve = me.data[Ne * 4 + 3];
      if (ze > Ve) {
        le = !0;
        break;
      }
    }
    return le ? (N.size > 64 && N.clear(), N.set(x, q.canvas), q.canvas) : (N.set(x, r), r);
  }
  function Vl(r, o = null) {
    const s = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), c = (r == null ? void 0 : r.bbox) || null;
    if (!s || !c) return null;
    const p = Ol(r, o);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: g, height: _ } = gp(), y = (r == null ? void 0 : r.transform) || {}, x = [
      s,
      g,
      _,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      y.du,
      y.dv,
      y.rot_deg,
      y.scale,
      Ti()
    ].join(":"), N = E.get(x);
    if (N) return N;
    E.size > 64 && E.clear();
    const C = document.createElement("canvas");
    C.width = g, C.height = _;
    const M = C.getContext("2d");
    if (!M) return null;
    const L = Number(c.u0 || 0) * g, H = Number(c.v0 || 0) * _, Q = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * g), K = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * _), q = L + Q * 0.5 + Number(y.du || 0) * g, oe = H + K * 0.5 + Number(y.dv || 0) * _, me = Number(y.rot_deg || 0) * It, le = Math.max(0.01, Number(y.scale || 1));
    for (const be of [-g, 0, g])
      M.save(), M.translate(q + be, oe), M.rotate(me), M.scale(le, le), M.drawImage(p, -Q * 0.5, -K * 0.5, Q, K), M.restore();
    return E.set(x, C), C;
  }
  function _p() {
    return ss(h, {
      selectedId: m.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function xp(r) {
    return Qd(
      h,
      (o, s, c) => Rl(c || o),
      { scene: r }
    );
  }
  function Hl(r, o, s, c, p = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const g = Zr(c);
    if (Kl(o, s))
      return Ip(
        o,
        s,
        g && m.showPanorama ? c : null,
        `${p}_bg_gl`
      );
    const y = Ia(), x = Ta(y), N = m.showObjects ? Ea() : Ai([]), M = Ui({
      stateRevision: [
        p,
        g ? ka(c) : "no_bg",
        Array.isArray(x) ? x.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        N.length ? N.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: g && m.showPanorama ? c : null,
      backgroundRevision: g ? `${p}:${ka(c)}` : "",
      coverageDeg: Ot(h.coverage),
      scene: y,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: N,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), L = ve;
    if (!L.syncState(M)) return !1;
    const Q = L.renderToTarget(`${p}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Q ? (r.drawImage(Q, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Ss(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const c = await bn.fetchApi("/upload/image", { method: "POST", body: s });
    if (!c || c.status !== 200)
      throw new Error(`upload failed (${(c == null ? void 0 : c.status) || "no-response"})`);
    const p = await c.json(), g = String((p == null ? void 0 : p.name) || "").trim();
    if (!g)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((p == null ? void 0 : p.subfolder) || "panorama_stickers"),
      storage: String((p == null ? void 0 : p.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function Ns(r, o) {
    const s = await new Promise((y) => r.toBlob(y, "image/png")), c = new FormData();
    c.append("image", s, o), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const p = await bn.fetchApi("/upload/image", { method: "POST", body: c });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const g = await p.json(), _ = String((g == null ? void 0 : g.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((g == null ? void 0 : g.subfolder) || "panorama_stickers"),
      storage: String((g == null ? void 0 : g.type) || "input")
    };
  }
  let Ms = null, Ca = !1;
  function wp() {
    const r = Tf(h.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = h.painting_layer, s = ei();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function jl() {
    const r = String(e.id ?? "0"), o = no.get(r);
    if (Ca && o) return o;
    const s = (async () => {
      var g, _, y, x, N, C, M, L, H, Q, K, q;
      const c = ei(), p = Tf(h.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        h.painting_layer !== null && (h.painting_layer = null, Ms = c, mn());
        return;
      }
      if (Ms !== c && !Ca) {
        Ca = !0;
        try {
          Oa();
          const oe = fs(!1), me = ((_ = (g = m.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, oe)) || null, le = ((y = me == null ? void 0 : me.displayPaint) == null ? void 0 : y.canvas) || null, be = ((x = me == null ? void 0 : me.committedMask) == null ? void 0 : x.canvas) || null, Pe = Math.max(1, Number(((N = me == null ? void 0 : me.descriptor) == null ? void 0 : N.width) || (le == null ? void 0 : le.width) || (be == null ? void 0 : be.width) || 2048)), Fe = Math.max(1, Number(((C = me == null ? void 0 : me.descriptor) == null ? void 0 : C.height) || (le == null ? void 0 : le.height) || (be == null ? void 0 : be.height) || 1024));
          (!le && p.totalPaintCount > 0 || !be && p.totalMaskCount > 0) && ((!m._paintLayerSyncBlankSurface || Number(((M = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : M.width) || 0) !== Pe || Number(((L = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Fe) && (m._paintLayerSyncBlankSurface = Ii(Pe, Fe)), m._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Pe, Fe));
          const Se = le || p.totalPaintCount > 0 && ((H = m._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null, X = be || p.totalMaskCount > 0 && ((Q = m._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!Se && !X) return;
          let se = null, _e = null;
          const Ne = [];
          if (p.totalPaintCount > 0) {
            se = await Ns(Se, `pano_paint_${r}.png`);
            for (const ze of oe) {
              const Ve = String(ze || "").trim();
              if (!Ve) continue;
              const Be = ((q = (K = m.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : q.call(K, Ve)) || null;
              if (!Be) continue;
              const qe = Ve.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ge = await Ns(Be, `pano_group_${r}_${qe}.png`);
              Ge && Ne.push({
                id: Ve,
                actionGroupId: Ve,
                image: Ge
              });
            }
          }
          p.totalMaskCount > 0 && (_e = await Ns(X, `pano_mask_${r}.png`)), c === ei() && (h.painting_layer = {
            paint: se,
            mask: _e,
            groups: Ne,
            revision: c
          }, Ms = c, mn());
        } catch (oe) {
          throw oe;
        } finally {
          Ca = !1;
        }
      }
    })();
    return no.set(r, s), s.finally(() => {
      no.get(r) === s && no.delete(r);
    }), s;
  }
  function Xr() {
    const r = ip();
    if (r) return r;
    const o = Nx(e, "pano_input_images", j, () => ge());
    if (o) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((y) => String((y == null ? void 0 : y.name) || "")) : [], c = s.includes("erp_image"), p = s.includes("bg_erp");
    let g = [];
    return i && (c || p) ? g = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : g = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Lf(e, g, () => ge(), `background:${g.join("|")}`);
  }
  function Zr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Sp() {
    if (!$.hasPresentedFrame) return "boot";
    let r = !1, o = !1;
    if (m.showPanorama) {
      const s = Xr();
      r = !!s && !Zr(s);
    }
    if (m.showObjects) {
      const s = Array.isArray(h.stickers) ? h.stickers : [];
      for (const c of s) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const p = Rl(c);
        if (p && !Zr(p)) {
          o = !0;
          break;
        }
      }
    }
    return r && o ? "mixed" : r ? "background" : o ? "stickers" : "";
  }
  function Jr() {
    const r = new Set(
      (h.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(h.assets || {}).forEach((o) => {
      r.has(o) || (delete h.assets[o], j.delete(o));
    });
  }
  function ks(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(Y(r.y, -1, 1))
    };
  }
  function Ps(r, o = null) {
    const { lon: s, lat: c } = ks(r), p = lr();
    let g = p.x + (s / (2 * Math.PI) + 0.5) * p.w;
    const _ = p.y + (0.5 - c / Math.PI) * p.h;
    if (o !== null) {
      for (; g - o > p.w / 2; ) g -= p.w;
      for (; g - o < -p.w / 2; ) g += p.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function Aa(r) {
    const o = Tn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = jn(0, 1, 0);
    Math.abs(kn(o, s)) > 0.999 && (s = jn(0, 0, 1));
    const c = si(oo(s, o)), p = si(oo(o, c)), g = Math.tan(Y(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * It), _ = Math.tan(Y(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * It), y = Number(r.rot_deg || r.roll_deg || 0) * It, x = Math.cos(y), N = Math.sin(y);
    return {
      centerDir: o,
      right: c,
      up: p,
      tanX: g,
      tanY: _,
      cr: x,
      sr: N
    };
  }
  function ur(r, o, s) {
    const c = o * r.cr - s * r.sr, p = o * r.sr + s * r.cr;
    return si(io(io(r.centerDir, ao(r.right, c)), ao(r.up, p)));
  }
  function zl(r) {
    const o = Aa(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: p }) => ur(o, c * o.tanX, p * o.tanY));
  }
  function $l(r, o, s) {
    const c = Aa(r), p = (o * 2 - 1) * c.tanX, g = (1 - s * 2) * c.tanY;
    return ur(c, p, g);
  }
  function Bl(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: Y((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Np(r) {
    var x, N, C, M;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), p = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.rot_deg) || 0), g = Number(((C = r == null ? void 0 : r.transform) == null ? void 0 : C.du) || 0), _ = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((L) => Sa(Na(L, s, c, p), g, _));
  }
  function Mp(r) {
    const o = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, c = (r == null ? void 0 : r.bbox) || {}, p = `${o}:${m.mode}:${Ti()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (m.mode === "frame") {
      const g = Ke(), _ = g ? $t(g) : null;
      return `${p}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function kp(r) {
    const o = String((r == null ? void 0 : r.id) || ""), c = [
      sn(r) ? "frame" : yt(r) ? "sticker" : "item",
      o,
      m.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      zi(r)
    ].join(":");
    if (m.mode === "frame") {
      const p = Ke(), g = p ? $t(p) : null;
      return `${c}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Pp() {
    var o;
    const r = String(((o = h.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? m.hqFrames && m.hqFrames > 0 ? [28, 20] : m.interaction ? [12, 9] : [20, 14] : r === "high" ? m.hqFrames && m.hqFrames > 0 ? [48, 36] : m.interaction ? [20, 14] : [36, 26] : m.hqFrames && m.hqFrames > 0 ? [40, 30] : m.interaction ? [16, 12] : [28, 20];
  }
  function Ul() {
    var r;
    return !!G && !!((r = ve == null ? void 0 : ve.isSupported) != null && r.call(ve));
  }
  function Kl(r, o) {
    return !Ul() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function Ia() {
    return m.showObjects ? _p() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ta(r) {
    return !m.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : xp(r);
  }
  function Gl() {
    var r, o;
    return ((o = (r = m.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Cp() {
    return Gl() ? `${Es()}:mask_display` : "";
  }
  function Ai(r) {
    if (!m.showMask) return r;
    const o = Gl();
    if (!o) return r;
    const s = Cp(), c = r.reduce((_, y) => Math.max(_, Number((y == null ? void 0 : y.zIndex) || 0)), -1), p = (Array.isArray(h.stickers) ? h.stickers : []).reduce((_, y) => Math.max(_, Number((y == null ? void 0 : y.z_index) || 0)), -1), g = Math.max(c, p);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: g + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function Ea() {
    var c, p;
    const r = ds(!0), o = mp(), s = [];
    for (const g of r) {
      if ((g == null ? void 0 : g.type) === "strokeGroup") {
        const _ = String(g.actionGroupId || g.id || "");
        if (!_) continue;
        const y = ((p = (c = m.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : p.call(c, _)) || null;
        if (!y) continue;
        s.push({
          id: `paint_group:${_}`,
          source: y,
          revision: `${Es()}:${_}`,
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((g == null ? void 0 : g.type) === "rasterObject") {
        const _ = g.item || null, y = At((_ == null ? void 0 : _.id) || g.id || "");
        if (!y) continue;
        const x = Vl(_, () => ge());
        if (!x) continue;
        const N = yp(x, g, o), C = (_ == null ? void 0 : _.transform) || {};
        s.push({
          id: `raster:${y}`,
          source: N,
          revision: [
            ei(),
            (o == null ? void 0 : o.key) || "",
            y,
            Number(C.du || 0).toFixed(6),
            Number(C.dv || 0).toFixed(6),
            Number(C.rot_deg || 0).toFixed(3),
            Number(C.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return Ai(s);
  }
  function Ap(r, o = "modal_bg_gl") {
    const s = Ia(), c = Ta(s), p = Zr(r), g = p ? ka(r) : "none", _ = m.showObjects ? Ea() : Ai([]), y = null, x = [
      o,
      g,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      _.length ? _.map((N) => `${String((N == null ? void 0 : N.id) || "")}:${String((N == null ? void 0 : N.revision) || "")}:${Number((N == null ? void 0 : N.zIndex) || 0)}`).join(",") : "paint:none",
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Ui({
        stateRevision: x,
        backgroundSource: p ? r : null,
        backgroundRevision: p ? `${o}:${g}` : "",
        coverageDeg: Ot(h.coverage),
        scene: s,
        textures: c,
        paintSource: y,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: p || c.length > 0 || _.length > 0
    };
  }
  function Cs() {
    if (!G) return;
    const r = G.getContext("webgl2");
    if (r)
      r.viewport(0, 0, G.width, G.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = G.getContext("2d");
      o && (o.clearRect(0, 0, G.width, G.height), o.fillStyle = "#070707", o.fillRect(0, 0, G.width, G.height));
    }
    $.backgroundWasVisible = !1, $.backgroundDirty = !1;
  }
  function Ip(r, o, s, c = "modal_bg_gl") {
    var N;
    if (!Kl(r, o)) return !1;
    if (!$.backgroundDirty && $.backgroundWasVisible) return !0;
    const { descriptor: p, hasContent: g } = Ap(s, c);
    if (!g || !ve.syncState(p))
      return Cs(), !1;
    const y = ve.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (N = G == null ? void 0 : G.getContext) == null ? void 0 : N.call(G, "2d");
    return !y || !x ? (Cs(), !1) : (x.clearRect(0, 0, G.width, G.height), x.drawImage(y, 0, 0, G.width, G.height), $.backgroundWasVisible = !0, $.backgroundDirty = !1, !0);
  }
  function Tp(r = !1) {
    const o = I.width, s = I.height, c = lr();
    if (A.globalAlpha = 1, A.lineWidth = 1, r || (A.fillStyle = "#070707", A.fillRect(0, 0, o, s), A.fillStyle = "#070707", A.fillRect(c.x, c.y, c.w, c.h)), Oa(), Hl(
      A,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      Xr(),
      "modal_unwrap"
    ), m.showGrid && !m.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let g = 0; g <= 16; g += 1) {
        const _ = c.x + c.w * g / 16;
        A.beginPath(), A.moveTo(_, c.y), A.lineTo(_, c.y + c.h), A.stroke();
      }
      for (let g = 0; g <= 8; g += 1) {
        const _ = c.y + c.h * g / 8;
        A.beginPath(), A.moveTo(c.x, _), A.lineTo(c.x + c.w, _), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(c.x, c.y + c.h / 2), A.lineTo(c.x + c.w, c.y + c.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const p = c.y + c.h * 0.57;
      A.fillText("Left", c.x + c.w * 0.25, p), A.fillText("Front", c.x + c.w * 0.5, p), A.fillText("Right", c.x + c.w * 0.75, p), A.fillText("Back", c.x + 38, p), A.fillText("Back", c.x + c.w - 38, p);
    }
  }
  function Wl(r, o, s = 1) {
    let c = !1;
    A.strokeStyle = o, A.lineWidth = s, A.beginPath();
    for (const p of r) {
      const g = Pi(p);
      if (!g) {
        c = !1;
        continue;
      }
      c ? A.lineTo(g.x, g.y) : (A.moveTo(g.x, g.y), c = !0);
    }
    A.stroke();
  }
  function Ep(r = !1) {
    const o = I.width, s = I.height;
    if (r || (Ul() ? A.clearRect(0, 0, o, s) : (A.fillStyle = "#070707", A.fillRect(0, 0, o, s))), Oa(), Hl(
      A,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: m.viewYaw,
        pitchDeg: m.viewPitch,
        fovDeg: m.viewFov,
        coverageDeg: Ot(h.coverage)
      },
      Xr(),
      "modal_pano"
    ), m.showGrid && !m.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push(Tn(p, _));
        Wl(g, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push(Tn(_, p));
        Wl(g, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: Tn(-90, 0) },
        { name: "Front", dir: Tn(0, 0) },
        { name: "Right", dir: Tn(90, 0) },
        { name: "Back", dir: Tn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", c.forEach((p) => {
        const g = Pi(p.dir);
        g && A.fillText(p.name, g.x, g.y + 24);
      });
    }
  }
  function Dp(r, o = null, s = null, c = null) {
    if (m.mode === "frame") {
      const p = o || Ke();
      if (!p) return [];
      const g = s || $t(p);
      return gg(r, p, g);
    }
    return Jl(r, c);
  }
  function Da(r, o = null, s = null, c = null, p = null) {
    if (!r) return null;
    if (m.mode === "unwrap") {
      const _ = Jl([r], p);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const g = Qr(r);
    return g ? Un(g, o, s, c) : null;
  }
  function Lp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), c = xn(s, r.layerKind), p = or(s, r.layerKind, c), g = (p == null ? void 0 : p.centerUv) || ps(s, r.layerKind, c), _ = m.mode === "unwrap" ? Number((g == null ? void 0 : g.u) || 0) : null, y = [], x = m.mode === "frame" ? Ke() : null, N = x ? $t(x) : null;
    for (const le of c) {
      const be = (le == null ? void 0 : le.geometry) || null, Pe = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], Fe = Dp(Pe, x, N, _).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
      if (!Fe.length) continue;
      const Se = fr(String((le == null ? void 0 : le.toolKind) || "pen")), X = tn[Se] || tn[Wn];
      y.push({
        points: Fe,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((X == null ? void 0 : X.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || r.layerKind || "paint")
      });
    }
    const C = Da(g, null, x, N, _);
    if (!C) {
      const le = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, le), le;
    }
    const L = Fh(p).map((le) => Da(le, C.x, x, N, _)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (L.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, le), le;
    }
    const H = (le, be) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: le,
      b: be
    }), Q = H(L[0], L[1]), K = H(L[1], L[2]), q = H(L[2], L[3]), oe = H(L[3], L[0]), me = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...K },
        { edge: "bottom", ...q },
        { edge: "left", ...oe }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: y,
      visible: !0
    };
    return m._strokeGeomCache.set(o, me), me;
  }
  function Rp(r, o) {
    const s = m.mode === "frame" ? Ke() : null, c = s ? $t(s) : null, p = Bl(r), g = m.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, _ = Da(p, null, s, c, g), x = Np(r).map((L) => Da(L, (_ == null ? void 0 : _.x) ?? null, s, c, g)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(x) || x.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return m._strokeGeomCache.set(o, L), L;
    }
    const N = x.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), M = {
      kind: "rasterObject",
      center: {
        x: N.reduce((L, H) => L + Number(H.x || 0), 0) / N.length,
        y: N.reduce((L, H) => L + Number(H.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return m._strokeGeomCache.set(o, M), M;
  }
  function Un(r, o = null, s = null, c = null) {
    if (m.mode === "frame") {
      const me = s || Ke(), le = c || $t(me);
      if (!me || !le) return null;
      const be = me ? Ei(me, r) : null;
      return be ? {
        x: Number(le.x || 0) + Number(be.x || 0) * Number(le.w || 0),
        y: Number(le.y || 0) + Number(be.y || 0) * Number(le.h || 0),
        z: 1
      } : null;
    }
    if (m.mode === "unwrap") return Ps(r, o);
    const { right: p, up: g, fwd: _ } = xs(), y = kn(r, p), x = kn(r, g), N = kn(r, _), C = I.width, M = I.height, L = m.viewFov * It, H = 2 * Math.atan(Math.tan(L / 2) * (M / Math.max(C, 1))), Q = C / 2 / Math.tan(L / 2), K = M / 2 / Math.tan(H / 2), q = Math.max(N, 1e-4), oe = Math.max(C, M) * 2;
    return {
      x: Y(C / 2 + y / q * Q, -oe, C + oe),
      y: Y(M / 2 - x / q * K, -oe, M + oe),
      z: q
    };
  }
  function Op(r) {
    const o = Tn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = m.mode === "frame" ? Ke() : null, c = s ? $t(s) : null, p = Un(o, null, s, c);
    if (!p) return { visible: !1 };
    const g = Aa(r), y = zl(r).map((Pe) => Un(Pe, p.x, s, c)).filter((Pe) => Number.isFinite(Pe == null ? void 0 : Pe.x) && Number.isFinite(Pe == null ? void 0 : Pe.y));
    if (y.length < 4) return { visible: !1 };
    const x = ur(g, 0, g.tanY), N = ur(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), C = Un(x, p.x, s, c);
    if (!C) return { visible: !1 };
    const M = Un(N, (C == null ? void 0 : C.x) ?? p.x, s, c), L = ((M == null ? void 0 : M.x) ?? C.x) - C.x, H = ((M == null ? void 0 : M.y) ?? C.y) - C.y, Q = Math.hypot(L, H) || 1, K = {
      x: C.x + L / Q * 30,
      y: C.y + H / Q * 30
    }, q = Un(ur(g, 0, g.tanY), p.x, s, c), oe = Un(ur(g, g.tanX, 0), p.x, s, c), me = Un(ur(g, 0, -g.tanY), p.x, s, c), le = Un(ur(g, -g.tanX, 0), p.x, s, c);
    if (!q || !oe || !me || !le) return { visible: !1 };
    const be = [
      {
        edge: "top",
        x: q.x,
        y: q.y,
        a: { x: y[0].x, y: y[0].y },
        b: { x: y[1].x, y: y[1].y }
      },
      {
        edge: "right",
        x: oe.x,
        y: oe.y,
        a: { x: y[1].x, y: y[1].y },
        b: { x: y[2].x, y: y[2].y }
      },
      {
        edge: "bottom",
        x: me.x,
        y: me.y,
        a: { x: y[2].x, y: y[2].y },
        b: { x: y[3].x, y: y[3].y }
      },
      {
        edge: "left",
        x: le.x,
        y: le.y,
        a: { x: y[3].x, y: y[3].y },
        b: { x: y[0].x, y: y[0].y }
      }
    ];
    return {
      center: { x: p.x, y: p.y },
      corners: y.map((Pe) => ({ x: Pe.x, y: Pe.y })),
      edgeMidpoints: be,
      rotateStemBase: { x: C.x, y: C.y },
      rotateHandle: K,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Et(r) {
    if (kt(r)) {
      const p = String(r.actionGroupId || r.id || "").trim(), g = Bh(p, r.layerKind), _ = m._strokeGeomCache.get(g);
      return _ || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), Lp(r, g));
    }
    if (jt(r)) {
      const p = Mp(r), g = m._strokeGeomCache.get(p);
      return g || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), Rp(r, p));
    }
    const o = kp(r), s = m._strokeGeomCache.get(o);
    if (s) return s;
    m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear();
    const c = Op(r);
    return m._strokeGeomCache.set(o, c), c;
  }
  function La(r, o, s, c = null) {
    const p = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let y = 0, x = 0;
      o === 0 ? (y = _, x = 0) : o === 1 ? (y = 1, x = _) : o === 2 ? (y = 1 - _, x = 1) : (y = 0, x = 1 - _);
      const N = $l(r, y, x), C = m.mode === "unwrap" ? Ps(N, c) : Pi(N);
      C && p.push(C);
    }
    return p;
  }
  function Fp(r, o) {
    const s = Tn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), c = m.mode === "unwrap" ? Ps(s) : null, p = c ? c.x : null, g = m.mode === "pano" ? 28 : 20, _ = [
      La(r, 0, g, p),
      La(r, 1, g, p),
      La(r, 2, g, p),
      La(r, 3, g, p)
    ];
    A.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", A.lineWidth = o ? 2 : 1, A.beginPath();
    let y = !1;
    for (const x of _)
      for (const N of x)
        y ? A.lineTo(N.x, N.y) : (A.moveTo(N.x, N.y), y = !0);
    A.closePath(), A.stroke();
  }
  function Vp() {
    const r = [...Array.isArray(h.shots) ? h.shots : []], o = [...Array.isArray(h.stickers) ? h.stickers : []].sort((s, c) => Number(s.z_index || 0) - Number(c.z_index || 0));
    return [...r, ...o];
  }
  function As() {
    const r = [...Array.isArray(h.shots) ? h.shots : []];
    return [...[...Array.isArray(h.stickers) ? h.stickers : []].sort((s, c) => Number(c.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function Ra(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Hp(r, o, s) {
    const c = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (c.length < 4) return;
    const p = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", _ = o ? 3.2 : 2.6, y = o ? 4.4 : 3.4, x = o ? 24 : 20;
    Ra(A, c), A.fillStyle = g, A.fill(), A.strokeStyle = p, A.lineWidth = _, A.stroke(), A.save(), A.strokeStyle = p, A.lineWidth = y, A.lineCap = "round";
    for (let L = 0; L < 4; L += 1) {
      const H = c[L], Q = c[(L + 3) % 4], K = c[(L + 1) % 4], q = H.x - Q.x, oe = H.y - Q.y, me = Math.hypot(q, oe) || 1, le = K.x - H.x, be = K.y - H.y, Pe = Math.hypot(le, be) || 1;
      A.beginPath(), A.moveTo(H.x, H.y), A.lineTo(H.x - q / me * x, H.y - oe / me * x), A.moveTo(H.x, H.y), A.lineTo(H.x + le / Pe * x, H.y + be / Pe * x), A.stroke();
    }
    const N = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], C = {
      x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
      y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
    }, M = o ? 12 : 9;
    N.forEach((L) => {
      const H = C.x - L.x, Q = C.y - L.y, K = Math.hypot(H, Q) || 1;
      A.beginPath(), A.moveTo(L.x, L.y), A.lineTo(L.x + H / K * M, L.y + Q / K * M), A.stroke();
    }), A.restore();
  }
  function jp(r, o, s, c) {
    if (sn(r)) {
      Hp(o, s, c);
      return;
    }
    if (yt(r)) {
      const p = A.globalAlpha;
      A.globalAlpha = Xh(r), m.mode === "frame" ? (A.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = s ? 2 : 1, Ra(A, o.corners), A.stroke()) : Fp(r, s), A.globalAlpha = p;
      return;
    }
    A.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Ra(A, o.corners), A.fill(), A.strokeStyle = s ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = s ? 2.8 : 1.9, Ra(A, o.corners), A.stroke();
  }
  function zp(r, o, s) {
    A.fillStyle = s, o.corners.forEach((c) => {
      A.beginPath(), A.arc(c.x, c.y, 6.5, 0, Math.PI * 2), A.fill();
    }), sn(r) && (A.strokeStyle = s, A.lineCap = "round", A.lineWidth = 4, o.edgeMidpoints.forEach((c) => {
      var C, M, L, H;
      const p = (((C = c.b) == null ? void 0 : C.x) ?? c.x) - (((M = c.a) == null ? void 0 : M.x) ?? c.x), g = (((L = c.b) == null ? void 0 : L.y) ?? c.y) - (((H = c.a) == null ? void 0 : H.y) ?? c.y), _ = Math.hypot(p, g) || 1, y = p / _, x = g / _, N = 10;
      A.beginPath(), A.moveTo(c.x - y * N, c.y - x * N), A.lineTo(c.x + y * N, c.y + x * N), A.stroke();
    }), A.lineCap = "butt"), kt(r) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), A.lineTo(o.rotateHandle.x, o.rotateHandle.y), A.stroke(), A.fillStyle = s, A.beginPath(), A.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function $p() {
    var y;
    const [r, o] = Pp(), s = wn(), c = s.length > 1, p = t === "cutout" ? Vp() : et(), g = p.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${sn(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!m._sortedItemsCache || m._sortedItemsCache.src !== p || m._sortedItemsCache.orderKey !== g) && (m._sortedItemsCache = {
      src: p,
      orderKey: g,
      sorted: [...p]
    });
    const _ = m._sortedItemsCache.sorted;
    for (const x of _) {
      const N = !c && Kh(x);
      if (m.mode === "frame" && !N || !m.showObjects && !sn(x)) continue;
      const C = yt(x), M = sn(x), L = sr(x);
      if (!C && !M)
        continue;
      const H = Et(x);
      if (!(t !== "stickers" && !H.visible) && (jp(x, H, N, L), N && H.visible)) {
        const Q = L ? "#ff4d4f" : C && Tt(x) ? "#f59e0b" : "#0070f3";
        zp(x, H, Q);
      }
    }
    if (c) {
      const x = gs(s);
      if (x != null && x.visible) {
        const N = ms(s) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(x.corners[0].x, x.corners[0].y);
        for (let C = 1; C < x.corners.length; C += 1) A.lineTo(x.corners[C].x, x.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = N, x.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      s.forEach((x) => {
        if (!kt(x) && !jt(x)) return;
        const N = Et(x);
        if (!(N != null && N.visible)) return;
        const C = sr(x) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(N.corners[0].x, N.corners[0].y);
        for (let M = 1; M < N.corners.length; M += 1) A.lineTo(N.corners[M].x, N.corners[M].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, N.corners.forEach((M) => {
          A.beginPath(), A.arc(M.x, M.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((y = m.interaction) == null ? void 0 : y.kind) === "marquee_select") {
      const x = uu(m.interaction.start, m.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), A.fill(), A.stroke(), A.restore();
    }
    m.hqFrames && r >= 40 && o >= 30 && (m.hqFrames -= 1, m.hqFrames > 0 && ge());
  }
  function Bp(r) {
    const o = vr(r), s = Y(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), c = 320;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function Yl(r, o = !1) {
    const s = Y(Gi(r), 0.05, 20), c = o ? 320 : 220;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function Up(r) {
    if (!ee || !r) return !1;
    const o = ee.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || ee.clientWidth || 0)), c = Math.round(Number(o.clientHeight || ee.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(c - Number(r.height || 0)) <= 1;
  }
  function Kp() {
    var s;
    const r = Array.isArray(h.stickers) ? h.stickers : [], o = Array.isArray((s = h.painting) == null ? void 0 : s.raster_objects) ? h.painting.raster_objects : [];
    return JSON.stringify({
      stickers: r.map((c) => ({
        id: String((c == null ? void 0 : c.id) || ""),
        asset_id: String((c == null ? void 0 : c.asset_id) || (c == null ? void 0 : c.assetId) || ""),
        source_kind: String((c == null ? void 0 : c.source_kind) || ""),
        source_link_id: Number((c == null ? void 0 : c.source_link_id) ?? -1),
        source_state_hash: String((c == null ? void 0 : c.source_state_hash) || ""),
        visible: (c == null ? void 0 : c.visible) !== !1,
        z_index: Number((c == null ? void 0 : c.z_index) || 0),
        yaw_deg: Number((c == null ? void 0 : c.yaw_deg) || 0),
        pitch_deg: Number((c == null ? void 0 : c.pitch_deg) || 0),
        hFOV_deg: Number((c == null ? void 0 : c.hFOV_deg) || 0),
        vFOV_deg: Number((c == null ? void 0 : c.vFOV_deg) || 0),
        rot_deg: Number((c == null ? void 0 : c.rot_deg) || 0),
        roll_deg: Number((c == null ? void 0 : c.roll_deg) || 0),
        crop: (c == null ? void 0 : c.crop) || null
      })),
      rasters: o.filter((c) => String((c == null ? void 0 : c.layerKind) || "paint") === "paint").map((c) => ({
        id: String((c == null ? void 0 : c.id) || ""),
        visible: (c == null ? void 0 : c.visible) !== !1,
        z_index: Number((c == null ? void 0 : c.z_index) || 0),
        transform: (c == null ? void 0 : c.transform) || null,
        bbox: (c == null ? void 0 : c.bbox) || null
      }))
    });
  }
  function Gp(r, o = {}) {
    if (!r) return "";
    const s = Xr(), c = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", p = Bp(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      Es(),
      Kp(),
      wa(),
      c,
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "mask:1" : "mask:0",
      `${p.width}x${p.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Wp() {
    var L, H, Q, K;
    if (m.outputPreviewRect = null, k.outputPreviewToggle.visible = m.mode !== "frame" && !!Ke(), t !== "cutout" || !k.cameraPreview) return;
    if (m.mode === "frame") {
      k.cameraPreview.visible = !1, k.cameraPreview.settled = !1;
      return;
    }
    const r = Ke();
    if (!r) {
      k.cameraPreview.visible = !0, k.cameraPreview.ready = !1, k.cameraPreview.settled = !1, k.cameraPreview.expanded = !!m.outputPreviewExpanded, k.cameraPreview.width = 220, k.cameraPreview.height = 132, k.cameraPreview.label = "Add Frame to preview", (L = pe == null ? void 0 : pe.clearScene) == null || L.call(pe), (H = D == null ? void 0 : D.requestRender) == null || H.call(D);
      return;
    }
    k.cameraPreview.visible = !0;
    const o = Xr();
    if (!r || !pe || !D) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", k.cameraPreview.expanded = !!m.outputPreviewExpanded, k.cameraPreview.settled = !1, k.cameraPreview.width = 220, k.cameraPreview.height = 132, (Q = pe == null ? void 0 : pe.clearScene) == null || Q.call(pe), (K = D == null ? void 0 : D.requestRender) == null || K.call(D);
      return;
    }
    const s = Yl(r, !!m.outputPreviewExpanded);
    k.cameraPreview.width = s.width, k.cameraPreview.height = s.height, k.cameraPreview.expanded = !!m.outputPreviewExpanded;
    const c = Ia(), p = Ta(c), g = Zr(o), _ = g ? ka(o) : "none", y = m.showObjects ? Ea() : Ai([]), x = Ui({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((q) => String((q == null ? void 0 : q.id) || "")).join(",") : "none",
        Array.isArray(p) ? p.map((q) => `${String((q == null ? void 0 : q.assetId) || "")}:${String((q == null ? void 0 : q.revision) || "")}`).join(",") : "none",
        y.length ? y.map((q) => `${String((q == null ? void 0 : q.id) || "")}:${String((q == null ? void 0 : q.revision) || "")}:${Number((q == null ? void 0 : q.zIndex) || 0)}`).join(",") : "paint:none",
        m.showPanorama ? "panorama:1" : "panorama:0",
        m.showObjects ? "objects:1" : "objects:0",
        m.showMask ? "showMask:1" : "showMask:0",
        Ot(h.coverage)
      ].join("|"),
      backgroundSource: g && m.showPanorama ? o : null,
      backgroundRevision: g ? `cutout_preview:${_}` : "",
      coverageDeg: Ot(h.coverage),
      scene: c,
      textures: p,
      rasterEntries: y,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(g || p.length > 0 || y.length > 0)) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = "Connect ERP image", k.cameraPreview.settled = !1, pe.clearScene(), D.requestRender();
      return;
    }
    if (m.showPanorama && !g && p.length === 0 && y.length === 0) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", k.cameraPreview.settled = !1, pe.clearScene(), D.requestRender();
      return;
    }
    pe.syncScene(x), D.setView(vr(r));
    const C = Up(s), M = C ? D.present() : !1;
    C || D.requestRender(), k.cameraPreview.ready = !0, k.cameraPreview.label = C && M ? "" : "Loading preview", k.cameraPreview.settled = C && M && $.pendingStableLayoutFrames <= 0 && $.hasPresentedFrame;
  }
  function Yp(r, o, s, c = {}) {
    if (!pe || !s) return !1;
    const p = Xr(), g = Ia(), _ = Ta(g), y = Zr(p), x = m.showObjects ? Ea() : Ai([]);
    return y || _.length > 0 || x.length > 0 ? (pe.syncScene(Ui({
      stateRevision: Gp(s, c),
      backgroundSource: y && m.showPanorama ? p : null,
      backgroundRevision: y ? String(p.currentSrc || p.src || "") : "",
      coverageDeg: Ot(h.coverage),
      scene: g,
      textures: _,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), pe.renderShotToContext(r, o, s, c)) : !1;
  }
  function Is(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), c = Number(o.y || 0);
    return $l(r, s, c);
  }
  function Qr(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, c = Math.cos(s);
    return jn(c * Math.sin(o), Math.sin(s), c * Math.cos(o));
  }
  function qp(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function Xp(r, o, s, c = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: zt(r, "widthScale", 1),
      pressureLike: zt(r, "pressureLike", 1)
    }, ...c, u: o, v: s };
  }
  function Zp(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Ts(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const c = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (c) {
      let K = null;
      r.forEach((q) => {
        const oe = Number((q == null ? void 0 : q.u) || 0), me = Number((q == null ? void 0 : q.v) || 0), le = (oe % 1 + 1) % 1, be = K == null ? le : K + gn(le, (K % 1 + 1) % 1);
        p.set(q, { x: be, y: me }), K = be;
      });
    }
    const g = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : p.get(K) || qp(K), _ = (K, q, oe, me = {}) => {
      const le = c ? (Number(q) % 1 + 1) % 1 : Number(q), be = Xp(K, le, oe, me);
      return p.set(be, { x: Number(q), y: Number(oe) }), be;
    }, y = (K, q, oe) => {
      const me = g(K), le = g(q);
      return _(K, qn(me.x, le.x, oe), qn(me.y, le.y, oe), {
        t: qn(Number((K == null ? void 0 : K.t) || 0), Number((q == null ? void 0 : q.t) || 0), oe),
        widthScale: qn(zt(K, "widthScale", 1), zt(q, "widthScale", 1), oe),
        pressureLike: qn(zt(K, "pressureLike", 1), zt(q, "pressureLike", 1), oe)
      });
    };
    if (r.length === 1) {
      const K = g(r[0]);
      return [_(r[0], K.x, K.y)];
    }
    const x = Zp(o, s), N = (K, q) => {
      const oe = [0];
      for (let se = 1; se < K.length; se += 1) {
        const _e = g(K[se - 1]), Ne = g(K[se]);
        oe.push(oe[se - 1] + Math.hypot(Ne.x - _e.x, Ne.y - _e.y));
      }
      const me = oe[oe.length - 1] || 0;
      if (me <= 1e-8) {
        const se = K[0], _e = g(se);
        return [_(se, _e.x, _e.y)];
      }
      const le = [];
      let be = 0;
      for (let se = 0; se <= me + 1e-9; se += q) {
        for (; be < oe.length - 2 && oe[be + 1] < se; ) be += 1;
        const _e = oe[be], Ne = oe[be + 1], ze = Math.max(1e-8, Ne - _e);
        le.push(y(K[be], K[be + 1], Y((se - _e) / ze, 0, 1)));
      }
      const Pe = K[K.length - 1], Fe = g(Pe), Se = le[le.length - 1], X = Se ? g(Se) : null;
      return (!X || Math.hypot(X.x - Fe.x, X.y - Fe.y) > q * 0.35) && le.push(_(Pe, Fe.x, Fe.y)), le;
    }, C = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const q = g(K[0]), oe = [_(K[0], q.x, q.y)];
      for (let be = 0; be < K.length - 1; be += 1) {
        const Pe = K[be], Fe = K[be + 1], Se = g(Pe), X = g(Fe), se = _(
          Pe,
          Se.x * 0.75 + X.x * 0.25,
          Se.y * 0.75 + X.y * 0.25,
          {
            t: Number(Pe.t || 0) * 0.75 + Number(Fe.t || 0) * 0.25,
            widthScale: zt(Pe, "widthScale", 1) * 0.75 + zt(Fe, "widthScale", 1) * 0.25,
            pressureLike: zt(Pe, "pressureLike", 1) * 0.75 + zt(Fe, "pressureLike", 1) * 0.25
          }
        ), _e = _(
          Pe,
          Se.x * 0.25 + X.x * 0.75,
          Se.y * 0.25 + X.y * 0.75,
          {
            t: Number(Pe.t || 0) * 0.25 + Number(Fe.t || 0) * 0.75,
            widthScale: zt(Pe, "widthScale", 1) * 0.25 + zt(Fe, "widthScale", 1) * 0.75,
            pressureLike: zt(Pe, "pressureLike", 1) * 0.25 + zt(Fe, "pressureLike", 1) * 0.75
          }
        );
        oe.push(se, _e);
      }
      const me = K[K.length - 1], le = g(me);
      return oe.push(_(me, le.x, le.y)), oe;
    }, M = N(r, x);
    if (M.length < 3) return M;
    const L = s ? 2 : 1;
    let H = M.slice();
    for (let K = 0; K < L; K += 1) H = C(H);
    return N(H, Math.max(x * 0.75, 55e-5));
  }
  function zt(r, o, s = 1) {
    const c = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(c) ? Math.max(0, c) : s;
  }
  function Jp(r) {
    const o = Number(r == null ? void 0 : r.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const s = String((r == null ? void 0 : r.radiusModel) || "").trim() || "erp_uv_norm";
      return s === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
      } : {
        model: s,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
    };
  }
  function Ii(r, o, s = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(r)), c.height = Math.max(1, Math.round(o));
    const p = c.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, c.width, c.height), p.imageSmoothingEnabled = !0), { canvas: c, ctx: p };
  }
  function Ti() {
    const r = Fa();
    return `${String(m.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function ei() {
    const r = Fa();
    return `${String(m.paintStrokeRevision)}:${String(m.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function Es() {
    const r = wa(), o = ei();
    return r ? `${o}:${r}` : o;
  }
  function Qp() {
    m.paintStrokeRevision += 1, m.paintCompositeRevision += 1;
  }
  function eg() {
    m.paintCompositeRevision += 1;
  }
  function tg() {
    m._sortedItemsCache = null, m._strokeGeomCache.clear();
  }
  function ql() {
    var r, o;
    m.paintEngineRevisionKey = null, (o = (r = m.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, h), m.paintEngineRevisionKey = Ti();
  }
  function Dt() {
    m.objectVisualRevision = Number(m.objectVisualRevision || 0) + 1, tg(), $.backgroundDirty = !0, $.dirty = !0;
  }
  function Sn({ rebuildPaintEngine: r = !1 } = {}) {
    Qp(), Dt(), r && ql();
  }
  function ti() {
    eg(), Dt();
  }
  function Oa() {
    var c;
    const r = Fa(), o = `${r.width}x${r.height}`;
    m.paintEngineDescriptorKey !== o && (m.paintEngine = Ac(r), m.paintEngineDescriptorKey = o, m.paintEngineRevisionKey = "");
    const s = Ti();
    m.paintEngineRevisionKey !== s && (m.paintEngineRevisionKey = s, (c = m.paintEngine) == null || c.rebuildCommitted(h));
  }
  function Fa() {
    const r = Math.max(1, Number((h == null ? void 0 : h.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function Kn() {
    return Fa();
  }
  function ng(r, o, s, c, p = null) {
    const g = Jp(r), _ = zt(o, "widthScale", 1) * zt(o, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? p ? Math.max(0.5, g.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * It) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * _);
  }
  function rg(r, o, s = {}) {
    const c = String((o == null ? void 0 : o.layerKind) || "paint"), p = String((o == null ? void 0 : o.toolKind) || "pen"), g = s.preview === !0, _ = g ? 0.78 : 1;
    if (r.globalAlpha = p === "marker" ? 0.7 * _ : 1, c === "mask") {
      r.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const y = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = g ? Math.max(0.28, Number(y.a ?? 1) * 0.88) : Math.max(0.12, Number(y.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(y.r || 0) * 255)}, ${Math.round(Number(y.g || 0) * 255)}, ${Math.round(Number(y.b || 0) * 255)}, ${x})`;
  }
  function ig(r, o, s) {
    const c = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(c) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), c, 0, Math.PI * 2), r.fill());
  }
  function ag(r, o, s, c, p = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const g = Math.max(c.w, c.h) * 0.25;
    r.save(), rg(r, s, p);
    const _ = (y) => ig(r, y, g);
    if (o.length === 1) {
      _(o[0]), r.restore();
      return;
    }
    for (let y = 0; y < o.length - 1; y += 1) {
      const x = o[y], N = o[y + 1];
      if (!x || !N) continue;
      const C = Number(x.x || 0), M = Number(x.y || 0), L = Number(N.x || 0), H = Number(N.y || 0), Q = Math.max(0.5, Math.min(g, Number(x.radiusPx || 0.5))), K = Math.max(0.5, Math.min(g, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(M) || !Number.isFinite(L) || !Number.isFinite(H) || !Number.isFinite(Q) || !Number.isFinite(K)) continue;
      const q = L - C, oe = H - M, me = Math.hypot(q, oe);
      if (!Number.isFinite(me) || me < 1e-6) {
        _(x);
        continue;
      }
      if (me > Math.max(c.w, c.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(Q, K)), be = Math.max(0.35, Math.min(le * 0.4, 2.25)), Pe = Math.max(1, Math.ceil(me / be));
      for (let Fe = 0; Fe <= Pe; Fe += 1) {
        const Se = Fe / Pe;
        _({
          x: qn(C, L, Se),
          y: qn(M, H, Se),
          radiusPx: qn(Q, K, Se)
        });
      }
    }
    _(o[o.length - 1]), r.restore();
  }
  function og(r, o, s, c) {
    ag(r, o, s, c, { preview: !1 });
  }
  function sg(r, o, s, c, p) {
    var y, x, N, C;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const g = "u", _ = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((y = o[0]) == null ? void 0 : y[g]) || 0) * c.w, Number(((x = o[0]) == null ? void 0 : x[_]) || 0) * c.h);
    for (let M = 1; M < o.length; M += 1)
      r.lineTo(Number(((N = o[M]) == null ? void 0 : N[g]) || 0) * c.w, Number(((C = o[M]) == null ? void 0 : C[_]) || 0) * c.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Xl(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function cg(r, o) {
    const s = Xl(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: ng(r, c, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function Zl(r, o, s = null) {
    var y, x, N, C;
    if (!(r != null && r.ctx) || !o) return !1;
    const c = s || { w: Number(((y = r.canvas) == null ? void 0 : y.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, p = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((C = o == null ? void 0 : o.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return sg(r.ctx, Xl(p), p, c), !0;
    const _ = cg(p, c);
    return _.length ? (og(r.ctx, _, p, c), !0) : !1;
  }
  function lg(r, o, s, c = 8) {
    const p = new Uint8Array(o * s), g = [], _ = new Int32Array(o * s), y = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let N = 0; N < o; N += 1) {
        const C = x * o + N;
        if (p[C] || r[C] <= c) continue;
        let M = 0, L = 0;
        _[L] = N, y[L] = x, L += 1, p[C] = 1;
        const H = [];
        let Q = N, K = x, q = N, oe = x;
        for (; M < L; ) {
          const me = _[M], le = y[M];
          M += 1, H.push({ x: me, y: le }), me < Q && (Q = me), le < K && (K = le), me > q && (q = me), le > oe && (oe = le);
          const be = [
            [(me - 1 + o) % o, le],
            [(me + 1) % o, le],
            [me, le - 1],
            [me, le + 1]
          ];
          for (const [Pe, Fe] of be) {
            if (Fe < 0 || Fe >= s) continue;
            const Se = Fe * o + Pe;
            p[Se] || r[Se] <= c || (p[Se] = 1, _[L] = Pe, y[L] = Fe, L += 1);
          }
        }
        g.push({ pixels: H, minX: Q, minY: K, maxX: q, maxY: oe });
      }
    return g;
  }
  function ug(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, N) => x - N);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let c = -1, p = 0;
    for (let x = 0; x < s.length; x += 1) {
      const N = s[x], M = (x === s.length - 1 ? s[0] + o : s[x + 1]) - N - 1;
      M > c && (c = M, p = x);
    }
    const g = (s[(p + 1) % s.length] + o) % o;
    let _ = 1 / 0, y = -1 / 0;
    for (const x of s) {
      const N = (x - g + o) % o;
      _ = Math.min(_, N), y = Math.max(y, N);
    }
    return {
      startX: g,
      widthPx: Math.max(1, y - _ + 1)
    };
  }
  function fg(r, o, s = {}) {
    var N;
    const c = Number((r == null ? void 0 : r.width) || 0), p = Number((r == null ? void 0 : r.height) || 0), g = (N = r == null ? void 0 : r.getContext) == null ? void 0 : N.call(r, "2d");
    if (!g || c < 1 || p < 1) return [];
    const _ = g.getImageData(0, 0, c, p), y = new Uint8Array(c * p);
    for (let C = 0; C < y.length; C += 1) y[C] = _.data[C * 4 + 3];
    return lg(y, c, p, 8).map((C, M) => {
      const L = ug(C, c);
      if (!L) return null;
      const H = Number(L.widthPx || 0), Q = C.maxY - C.minY + 1, K = Number(L.startX || 0), q = document.createElement("canvas");
      q.width = H, q.height = Q;
      const oe = q.getContext("2d");
      if (!oe) return null;
      const me = oe.createImageData(H, Q);
      return C.pixels.forEach(({ x: le, y: be }) => {
        const Pe = (be * c + le) * 4, Fe = (Number(le || 0) - K + c) % c, Se = ((be - C.minY) * H + Fe) * 4;
        me.data[Se + 0] = _.data[Pe + 0], me.data[Se + 1] = _.data[Pe + 1], me.data[Se + 2] = _.data[Pe + 2], me.data[Se + 3] = _.data[Pe + 3];
      }), oe.putImageData(me, 0, 0), {
        id: ci("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + M * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / p,
          u1: H / c,
          v1: (C.maxY + 1) / p
        },
        rasterDataUrl: q.toDataURL("image/png"),
        transform: {
          du: K / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ei(r, o) {
    if (!r || !o) return null;
    const s = Aa(r), c = kn(o, s.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const p = kn(o, s.right) / c, g = kn(o, s.up) / c, _ = p * s.cr + g * s.sr, y = -p * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - y / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function dg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (m.mode === "unwrap") {
      const s = lr();
      return r.map((c) => ({
        x: s.x + Number(c.u || 0) * s.w,
        y: s.y + Number(c.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Pi(Qr(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function Jl(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (m.mode === "unwrap") {
      const c = lr();
      return r.map((p) => {
        const g = (Number(p.u || 0) % 1 + 1) % 1, _ = o == null ? g : Number(o || 0) + gn(g, o);
        return {
          x: c.x + _ * c.w,
          y: c.y + Number(p.v || 0) * c.h
        };
      });
    }
    const s = r.map((c) => Pi(Qr(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function hg(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const c = r[s], p = r[(s + 1) % r.length];
      if (!c || !p || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(c.x), Number(p.y) - Number(c.y)) > o) return !1;
    }
    return !0;
  }
  function pg(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const c = [];
    for (const p of r) {
      const g = Qr(p), _ = Ei(o, g);
      if (!_) return [];
      c.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return hg(c, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? c : [];
  }
  function gg(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const c = [];
    for (const p of r) {
      const g = Qr(p), _ = Ei(o, g);
      _ && c.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return c;
  }
  function mg() {
    var p;
    const r = Ke(), o = $t(r);
    if (!r || !o) return !1;
    A.save(), A.fillStyle = "#050505", A.fillRect(0, 0, I.width, I.height), A.shadowColor = "rgba(0, 0, 0, 0.45)", A.shadowBlur = 24, A.shadowOffsetX = 0, A.shadowOffsetY = 10, A.fillStyle = "rgba(14, 14, 14, 1)", A.fillRect(o.x, o.y, o.w, o.h), A.restore(), A.save(), A.beginPath(), A.rect(o.x, o.y, o.w, o.h), A.clip();
    const s = m.interaction ? "draft" : String(((p = h.ui_settings) == null ? void 0 : p.preview_quality) || "balanced");
    return Yp(A, o, r, { quality: s }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(o.x, o.y, o.w, o.h)), A.restore(), A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.12)", A.lineWidth = 1, A.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), A.restore(), !0;
  }
  function vg() {
    var x, N;
    if (((x = m.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = m.interaction.stroke, o = (N = r == null ? void 0 : r.geometry) == null ? void 0 : N.points;
    let s;
    if (m.mode === "frame") {
      const C = Ke(), M = $t(C);
      s = pg(o, C, M);
    } else
      s = dg(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const c = String((r == null ? void 0 : r.layerKind) || "") === "mask", p = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(p.r || 0) * 255), _ = Math.round(Number(p.g || 0) * 255), y = Math.round(Number(p.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let C = 1; C < s.length; C++) A.lineTo(Number(s[C].x || 0), Number(s[C].y || 0));
    A.closePath(), c ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${g},${_},${y},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function bg() {
    m.mode === "frame" ? mg() : m.mode === "unwrap" ? Tp(!1) : Ep(!1), t === "cutout" && Wp(), $p(), vg(), k.fovValue = `${Math.round(m.viewFov)}°`, Math.abs(Number(m.outputPreviewAnim || 0) - Number(m.outputPreviewAnimTo || 0)) < 1e-6 && $e(), $.hasPresentedFrame || ($.hasPresentedFrame = !0, G.style.opacity = "1"), t === "cutout" && k.cameraPreview && (k.cameraPreview.settled = $.pendingStableLayoutFrames <= 0 && $.hasPresentedFrame && m.mode !== "frame");
    const r = Sp();
    r ? (J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", r)) : (J == null || J.setAttribute("data-stage-ready", ""), J == null || J.removeAttribute("data-stage-loading-kind"));
  }
  function yg(r = m.interaction) {
    if (t !== "stickers" || m.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function _g() {
    e.__panoLiveStateOverride = h, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = $h();
  }
  function ge(r = {}) {
    var y, x, N, C, M, L, H, Q, K, q;
    const o = !!r.localOnly, s = r.externalSync === !0, c = String(r.cause || ""), p = String(((y = m.interaction) == null ? void 0 : y.kind) || "");
    (!o || p === "view" || p === "pan_frame" || yg() || !!((x = m.viewTween) != null && x.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && ($.backgroundDirty = !0), o && xl() && (m.livePaintInteractionRevision += 1, $.backgroundDirty = !0), (!o || c === "selection" || c === "mode" || c === "cutout_frame") && (_s(), Pa()), _g(), s && ((C = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || C.call(N), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), s && !o && ((H = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || H.call(L, !0, !0), (q = (K = (Q = br) == null ? void 0 : Q.canvas) == null ? void 0 : K.setDirty) == null || q.call(K, !0, !0)), $.dirty = !0;
  }
  function Ql() {
    const r = I.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return I.width !== o || I.height !== s || G.width !== o || G.height !== s ? (I.width = o, I.height = s, G.width = o, G.height = s, $.backgroundDirty = !0, $.dirty = !0, t === "cutout" && ($.pendingStableLayoutFrames = Math.max(Number($.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Ds(r = performance.now()) {
    var o;
    if ($.running) {
      if ($.lastTickTs = r, m.outputPreviewAnim !== m.outputPreviewAnimTo) {
        const s = Math.max(1, Number(m.outputPreviewAnimDurationMs)), c = Y((r - Number(m.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = m.outputPreviewAnimTo > m.outputPreviewAnimFrom ? q_(c) : X_(c);
        m.outputPreviewAnim = qn(m.outputPreviewAnimFrom, m.outputPreviewAnimTo, g), $.dirty = !0, c >= 1 && (m.outputPreviewAnim = m.outputPreviewAnimTo);
      }
      if ((o = m.viewTween) != null && o.active) {
        const s = m.viewTween, c = Y((r - s.startTs) / s.durationMs, 0, 1), p = Y_(c);
        m.viewYaw = Ft(s.startYaw + s.deltaYaw * p), m.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * p, m.viewFov = s.startFov + (s.targetFov - s.startFov) * p, $.backgroundDirty = !0, $.dirty = !0, c >= 1 && (m.viewTween = null);
      }
      if (m.viewInertia.vx = Number(Lt.state.inertia.vx || 0), m.viewInertia.vy = Number(Lt.state.inertia.vy || 0), m.viewInertia.active = !!Lt.state.inertia.active, Lt.stepInertia(r) && (m.viewInertia.vx = Number(Lt.state.inertia.vx || 0), m.viewInertia.vy = Number(Lt.state.inertia.vy || 0), m.viewInertia.active = !!Lt.state.inertia.active, $.backgroundDirty = !0, $.dirty = !0), ($.dirty || r - $.lastSizeCheckTs >= 220) && (Ql(), $.lastSizeCheckTs = r), $.pendingStableLayoutFrames > 0 && ($.pendingStableLayoutFrames -= 1, $.dirty = !0), $.dirty) {
        if ($.pendingStableLayoutFrames > 0) {
          $.rafId = requestAnimationFrame(Ds);
          return;
        }
        $.dirty = !1, bg();
      }
      $.rafId = requestAnimationFrame(Ds);
    }
  }
  function xg() {
    $.running = !1, $.rafId && cancelAnimationFrame($.rafId), $.rafId = 0;
  }
  function dt() {
    i || (m.historyController.commitActionGroup(JSON.stringify(Ef(h))), Hs());
  }
  function Ls(r) {
    if (i) return;
    const o = r < 0 ? m.historyController.undo() : m.historyController.redo();
    if (Hs(), !o) return;
    const s = JSON.parse(o);
    Object.keys(h).forEach((c) => delete h[c]), Object.assign(h, s), m.selectedId = t === "stickers" || t === "cutout" ? h.active.selected_sticker_id : h.active.selected_shot_id, m.selectedIds = m.selectedId ? [m.selectedId] : [], Sn(), en(), je(), mn(), ge({ cause: "cutout_frame" });
  }
  function eu() {
    var s, c;
    const r = Array.isArray((s = m.historyController) == null ? void 0 : s.entries) ? m.historyController.entries : [], o = Number((c = m.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function en() {
    bt();
    const r = Vb({
      editor: m,
      swatches: wo,
      paintColorPopOpen: Z ? !Z.hidden : !1,
      colorToCss: En,
      colorsApproximatelyEqual: So,
      rgb01ToHsv: pc,
      hsv01ToRgb: hc,
      getBrushPresetIdForTool: fr,
      isActiveLassoTool: Jh
    });
    if (Object.assign(k.paintDock, r), !r.visible) {
      Z && (Z.hidden = !0);
      return;
    }
    at && (clearTimeout(at), at = 0), W && (!r.colorEnabled && Z && !Z.hidden && (at = window.setTimeout(() => {
      Z.hidden = !0, k.paintDock.colorPopOpen = !1, at = 0;
    }, 170)), Z && (Z.style.setProperty("--picker-hue-color", r.pickerHueColor), Z.style.setProperty("--picker-sat", r.pickerSat), Z.style.setProperty("--picker-val", r.pickerVal), Z.style.setProperty("--picker-hue", r.pickerHue)), Ie && (Ie.style.left = r.pickerSvLeft, Ie.style.top = r.pickerSvTop), Ye && (Ye.style.left = r.pickerHueLeft));
  }
  function Rs() {
    const r = ut();
    r && (m.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: zi(r)
    }, je());
  }
  function je() {
    var be, Pe, Fe, Se;
    if (a) return;
    h.ui_settings = h.ui_settings || {};
    const r = Fb(h.ui_settings);
    if (l) {
      k.sidePanel = Hb({
        coverage: h.coverage,
        uiSettings: r,
        normalizeCoverageValue: Ot
      });
      return;
    }
    const o = ut(), s = wn(), c = Ma();
    s.length > 1 && (m.panelLastValues = m.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && c !== "stroke" && (m.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (c === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (c === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: zi(o)
    });
    const p = m.panelLastValues || (t === "stickers" || c === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = c === "stroke" ? null : o, _ = g || p, y = !!g;
    m.panelWasEnabled = y, _s();
    let x = null;
    if (t === "stickers" || t === "cutout") {
      const X = [{ id: "", labelHtml: gc(t === "stickers" ? "No image" : "Nothing selected"), item: null }];
      t === "stickers" ? et().forEach((Ne, ze) => {
        var qe, Ge;
        const Ve = Tt(Ne) ? String(Ne.id || Ir) : String(((Ge = (qe = h.assets) == null ? void 0 : qe[Ne.asset_id]) == null ? void 0 : Ge.name) || Ne.asset_id || Ne.id), Be = `${ze + 1}. ${Ve}${Tt(Ne) && Gr(Ne) ? " (hidden)" : ""}`;
        X.push({ id: Ne.id, labelHtml: kl({ item: Ne, label: Be, kind: "image" }), item: Ne, kind: "image" });
      }) : Ml().forEach((Ne) => {
        X.push({ id: Ne.item.id, labelHtml: kl(Ne), item: Ne.item, kind: Ne.kind });
      });
      const se = (g == null ? void 0 : g.id) || "", _e = X.find((Ne) => Ne.id === se) || X[0];
      x = {
        label: "Selection",
        open: !1,
        disabled: X.length <= 1,
        currentLabelHtml: _e.labelHtml,
        items: X.map((Ne) => ({ id: Ne.id, labelHtml: Ne.labelHtml, active: Ne.id === se }))
      };
    }
    const N = [], C = (X, se, _e, Ne, ze) => {
      const Ve = Y(Number(_[X] || 0), _e, Ne);
      N.push({
        key: X,
        label: se,
        min: _e,
        max: Ne,
        step: ze,
        value: Ve,
        displayValue: ex(Ve),
        fillPct: Y((Ve - _e) / Math.max(1e-6, Ne - _e) * 100, 0, 100),
        enabled: y && !i
      });
    }, M = [];
    s.length > 1 ? (M.push(`Selected objects: ${s.length}`), M.push("Multi-selection supports z-order and delete.")) : (C("yaw_deg", "Yaw", -180, 180, 0.1), C("pitch_deg", "Pitch", -90, 90, 0.1), C("hFOV_deg", "H FOV", 1, 179, 0.1), C("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || c === "image" ? C("rot_deg", "Rotation", -180, 180, 0.1) : C("roll_deg", "Roll", -180, 180, 0.1));
    const L = Array.isArray((Pe = (be = h == null ? void 0 : h.painting) == null ? void 0 : be.paint) == null ? void 0 : Pe.strokes) ? h.painting.paint.strokes.length : 0, H = Array.isArray((Se = (Fe = h == null ? void 0 : h.painting) == null ? void 0 : Fe.mask) == null ? void 0 : Se.strokes) ? h.painting.mask.strokes.length : 0, Q = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((X) => String((X == null ? void 0 : X.name) || "")) : [], K = Oh(
      e,
      Q.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), q = !!String((K == null ? void 0 : K.src) || "").trim() || vs("pano_input_images").length > 0, oe = Array.isArray(et()) && et().length > 0 || L > 0, me = H > 0, le = [
      { key: "mask", label: "Mask", icon: Rt.circle_dashed_tool, visible: !!m.showMask, enabled: me },
      { key: "objects", label: "Paint / Images", icon: Rt.image, visible: !!m.showObjects, enabled: oe },
      { key: "panorama", label: "Panorama", icon: Rt.globe, visible: !!m.showPanorama, enabled: q }
    ].map((X) => ({
      ...X,
      ariaLabel: `Toggle ${X.label.toLowerCase()}`,
      tip: X.visible ? "Hide" : "Show"
    }));
    k.sidePanel = jb({
      coverage: h.coverage,
      readOnly: i,
      selectionPicker: x,
      enabled: y,
      selectedKind: c,
      selectedItems: s,
      params: N,
      notes: M,
      visibilityRows: le,
      uiSettings: r,
      normalizeCoverageValue: Ot
    });
  }
  function Va(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function tu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !Va(r)) return;
    const o = fo("asset"), s = URL.createObjectURL(r);
    try {
      const c = await new Promise((_, y) => {
        const x = new Image();
        x.onload = () => _(x), x.onerror = () => y(new Error("image load failed")), x.src = s;
      });
      j.set(o, c);
      const p = fo("st");
      h.stickers.push({
        id: p,
        asset_id: o,
        yaw_deg: m.viewYaw,
        pitch_deg: m.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Mr(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0,
        z_index: Pl()
      }), Nr(h.stickers[h.stickers.length - 1]), Os(), dt(), je(), $e(), ge();
      const g = (async () => {
        const _ = await Ss(r, String(r.name || o));
        (Array.isArray(h.stickers) ? h.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length && (h.assets[o] = _, Jr(), _t(), je(), $e(), ge());
      })();
      ro.set(o, g);
      try {
        await g;
      } finally {
        ro.delete(o);
      }
    } catch {
      delete h.assets[o], j.delete(o);
      const c = Array.isArray(h.stickers) ? h.stickers : [], p = c.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
      p.length && (h.stickers = c.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), p.some((g) => {
        var _;
        return String((g == null ? void 0 : g.id) || "") === String(((_ = m.selection) == null ? void 0 : _.id) || "");
      }) && Nr(null), je(), $e(), ge());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function nu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var c;
      const s = (c = o.files) == null ? void 0 : c[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function wg() {
    i || t !== "stickers" && t !== "cutout" || nu((r) => {
      tu(r);
    });
  }
  async function Sg(r) {
    var N;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = ut();
    if (!o || !yt(o) || Tt(o) || !Va(r)) return;
    const s = String(o.id || ""), c = String(o.asset_id || ""), p = c ? Bt(((N = h.assets) == null ? void 0 : N[c]) || null) : null, g = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, y = fo("asset"), x = URL.createObjectURL(r);
    try {
      const C = await new Promise((L, H) => {
        const Q = new Image();
        Q.onload = () => L(Q), Q.onerror = () => H(new Error("image load failed")), Q.src = x;
      });
      j.set(y, C), o.asset_id = y, o.vFOV_deg = Mr(
        Number(o.hFOV_deg || 30),
        Number(C.naturalWidth || C.width || 1),
        Number(C.naturalHeight || C.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Dt(), dt(), je(), $e(), ge();
      const M = (async () => {
        const L = await Ss(r, String(r.name || y));
        (Array.isArray(h.stickers) ? h.stickers : []).some((K) => String((K == null ? void 0 : K.id) || "") === s && String((K == null ? void 0 : K.asset_id) || "") === y) && (h.assets[y] = L, Jr(), _t(), je(), $e(), ge());
      })();
      ro.set(y, M);
      try {
        await M;
      } finally {
        ro.delete(y);
      }
    } catch {
      delete h.assets[y], j.delete(y);
      const C = (Array.isArray(h.stickers) ? h.stickers : []).find((M) => String((M == null ? void 0 : M.id) || "") === s) || null;
      C && String(C.asset_id || "") === y && (c && p && (h.assets[c] = p), C.asset_id = c, C.vFOV_deg = g, C.crop = _ ? { ..._ } : null), Dt(), je(), $e(), ge();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function Ng() {
    if (i) return;
    const r = ut();
    !r || !yt(r) || Tt(r) || nu((o) => {
      Sg(o);
    });
  }
  async function Mg() {
    if (i || t !== "stickers") return;
    const r = h.assets && typeof h.assets == "object" ? h.assets : {}, o = Object.entries(r).filter(([, c]) => {
      const p = String((c == null ? void 0 : c.type) || "").toLowerCase(), g = String((c == null ? void 0 : c.value) || "");
      return p === "dataurl" && g.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [c, p] of o)
      try {
        const g = String((p == null ? void 0 : p.value) || "");
        if (!g) continue;
        const _ = await fetch(g).then((M) => M.blob()), y = String(_.type || "image/png").split("/")[1] || "png", x = String((p == null ? void 0 : p.name) || `${c}.${y}`), N = new File([_], x, { type: _.type || "image/png" }), C = await Ss(N, x);
        h.assets[c] = {
          ...C,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (_t(), ge());
  }
  function kg() {
    if (i || t !== "cutout") return;
    const r = Ke();
    if (r) {
      Nr(r), m.mode = "pano", hn(
        Ft(Number(r.yaw_deg || 0)),
        Y(Number(r.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), je(), $e(), ge({ cause: "cutout_frame" });
      return;
    }
    const o = Math.max(0.1, Number((I == null ? void 0 : I.width) || 1) / Math.max(1, Number((I == null ? void 0 : I.height) || 1))), s = Y(Number(m.viewFov || 90), 1, 179), c = Y(Math.min(42, s * 0.42), 8, 96), p = Y(mr * (2 * Math.atan(Math.tan(c * It * 0.5) / Math.max(0.1, o))), 6, 72), g = Ah({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Ft(Number(m.viewYaw || 0)),
      pitch_deg: Y(Number(m.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: c,
      vFOV_deg: p,
      locked: !1
    });
    h.shots = [g], Nr(g), Os(), m.mode = "pano", dt(), _t(), je(), $e(), ge({ cause: "cutout_frame" });
  }
  function Pg() {
    i || t === "cutout" && (h.shots = [], m.selectedId = null, m.selectedIds = [], m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, h.active.selected_shot_id = null, dt(), _t(), je(), ge());
  }
  function Cg() {
    const r = Array.isArray(h.stickers) ? h.stickers : [], o = [];
    for (const s of r)
      Tt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function ru(r, o, s = "Clear") {
    return new Promise((c) => {
      k.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: c
      };
    });
  }
  async function Ag() {
    var s, c;
    if (i || !await ru(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    h.painting = ra(null), Sn();
    const o = Cg();
    t === "stickers" ? (h.stickers = o, h.assets = {}, m.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], h.active.selected_sticker_id = ((c = o[0]) == null ? void 0 : c.id) || null, Jr()) : (h.stickers = o, h.assets = {}, h.shots = [], m.selectedId = null, m.selectedIds = [], h.active.selected_sticker_id = null, h.active.selected_shot_id = null, m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, Jr()), dt(), _t(), je(), $e(), ge();
  }
  async function Ig(r) {
    var g, _, y, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", c = ri(o);
    if (!(!c.length && !(((g = m.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = m.interaction) == null ? void 0 : _.layerKind) === o) || !await ru(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((y = m.interaction) == null ? void 0 : y.kind) === "draw" && ((x = m.interaction) == null ? void 0 : x.layerKind) === o) {
        const N = Kn();
        N && m.paintEngine.cancelActiveStroke(N), m.interaction = null;
      }
      c.length = 0, h.painting.raster_objects = Qt().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (Xe().length = 0), Sn(), dt(), _t(), je(), $e(), en(), ge();
    }
  }
  function Tg() {
    if (i) return;
    const r = ut();
    if (!r || !yt(r) || Tt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = fo("st"), o.yaw_deg = Ft((o.yaw_deg || 0) + 8), o.z_index = Pl(), h.stickers.push(o), h.active.selected_sticker_id = o.id, m.selectedId = o.id, m.selectedIds = [o.id], Dt(), dt(), _t(), $e(), je(), ge();
  }
  function iu() {
    var s, c, p, g, _, y;
    if (i) return;
    const r = wn(), o = ut();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((M) => kt(M)).map((M) => String(M.actionGroupId || M.id || ""))), N = new Set(r.filter((M) => jt(M)).map((M) => At(M.rasterObjectId || M.id || ""))), C = new Set(r.filter(yt).map((M) => String(M.id || "")));
        x.size > 0 && (h.painting.paint.strokes = (Array.isArray((c = (s = h.painting) == null ? void 0 : s.paint) == null ? void 0 : c.strokes) ? h.painting.paint.strokes : []).filter((M) => !x.has(String((M == null ? void 0 : M.actionGroupId) || ""))), h.painting.groups = Xe().filter((M) => !x.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Sn()), N.size > 0 && (h.painting.raster_objects = Qt().filter((M) => !N.has(String((M == null ? void 0 : M.id) || ""))), ti()), C.size > 0 && (h.stickers = (Array.isArray(h.stickers) ? h.stickers : []).filter((M) => C.has(String((M == null ? void 0 : M.id) || "")) ? Tt(M) ? (Gr(M) || (M.visible = !1), !0) : !1 : !0), Jr(), Dt()), m.selectedId = null, m.selectedIds = [], dt(), _t(), je(), $e(), ge();
        return;
      }
      if (kt(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        h.painting.paint.strokes = (Array.isArray((g = (p = h.painting) == null ? void 0 : p.paint) == null ? void 0 : g.strokes) ? h.painting.paint.strokes : []).filter((N) => String((N == null ? void 0 : N.actionGroupId) || "").trim() !== x), h.painting.groups = Xe().filter((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() !== x), Sn(), m.selectedId = null, m.selectedIds = [], dt(), _t(), je(), $e(), ge();
        return;
      }
      if (jt(o)) {
        const x = At(o.rasterObjectId || o.id || "");
        h.painting.raster_objects = Qt().filter((N) => String((N == null ? void 0 : N.id) || "").trim() !== x), ti(), m.selectedId = null, m.selectedIds = [], dt(), _t(), je(), $e(), ge();
        return;
      }
      if (t === "stickers" || yt(o)) {
        if (Tt(o)) {
          if (Gr(o)) return;
          o.visible = !1, Dt(), dt(), _t(), je(), $e(), ge();
          return;
        }
        h.stickers = h.stickers.filter((x) => x.id !== o.id), Jr(), Dt(), m.selectedId = ((_ = h.stickers[0]) == null ? void 0 : _.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], h.active.selected_sticker_id = ((y = h.stickers[0]) == null ? void 0 : y.id) || null, dt(), _t(), je(), $e(), ge();
        return;
      }
      Pg();
    }
  }
  function Eg(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const L = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(L)) {
        const [K, q] = L.split(":").map((oe) => Number(oe));
        if (Number.isFinite(K) && Number.isFinite(q)) return K >= q;
      }
      const H = Number(r.hFOV_deg || 64), Q = Number(r.vFOV_deg || 40);
      return Math.abs(H - Q) > 1e-6 ? H >= Q : Gi(r) >= 1;
    })();
    let [p, g] = s[String(o)] || s["1:1"];
    p >= g !== c && ([p, g] = [g, p]);
    const _ = p / g, y = Y(Number(r.hFOV_deg || 64), 1, 179), x = Y(Number(r.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, y * x)), C = Y(N * Math.sqrt(_), 1, 179), M = Y(N / Math.sqrt(_), 1, 179);
    r.hFOV_deg = C, r.vFOV_deg = M, r.aspect_id = String(o);
  }
  function Dg(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = o, r.aspect_id = Dr(r);
  }
  function au() {
    Br().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Lg() {
    if (i) return;
    const r = wn();
    if (!ut() || r.length === 0) return;
    au();
    const s = Br(), c = new Set(r.map((y) => yt(y) ? `sticker:${String(y.id || "")}` : jt(y) ? `rasterObject:${At(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), p = [], g = [];
    if (s.forEach((y) => {
      var N, C;
      const x = y.type === "sticker" ? `sticker:${String(((N = y.item) == null ? void 0 : N.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((C = y.item) == null ? void 0 : C.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      c.has(x) ? p.push(y) : g.push(y);
    }), !p.length || p[p.length - 1] === s[s.length - 1]) return;
    [...g, ...p].forEach((y, x) => {
      y.type === "sticker" && y.item && (y.item.z_index = x), y.type === "strokeGroup" && y.item && (y.item.z_index = x), y.type === "rasterObject" && y.item && (y.item.z_index = x);
    }), Dt(), dt(), _t(), $e(), ge();
  }
  function Rg() {
    if (i) return;
    const r = wn();
    if (!ut() || r.length === 0) return;
    au();
    const s = Br(), c = new Set(r.map((y) => yt(y) ? `sticker:${String(y.id || "")}` : jt(y) ? `rasterObject:${At(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), p = [], g = [];
    if (s.forEach((y) => {
      var N, C;
      const x = y.type === "sticker" ? `sticker:${String(((N = y.item) == null ? void 0 : N.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((C = y.item) == null ? void 0 : C.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      c.has(x) ? p.push(y) : g.push(y);
    }), !p.length || p[0] === s[0]) return;
    [...p, ...g].forEach((y, x) => {
      y.type === "sticker" && y.item && (y.item.z_index = x), y.type === "strokeGroup" && y.item && (y.item.z_index = x), y.type === "rasterObject" && y.item && (y.item.z_index = x);
    }), Dt(), dt(), _t(), $e(), ge();
  }
  function Og() {
    i || (h.projection_model = "pinhole_rectilinear", h.alpha_mode = "straight", d && (h.output_preset = Hc(d.value, Number(h.output_preset || 2048))), f && (h.coverage = Ot(f.value)), v && (h.bg_color = String(v.value || h.bg_color || "#00ff00")), mn(), e.setDirtyCanvas(!0, !0));
  }
  function mn() {
    var o;
    if (i) return;
    h.coverage = Ot(h.coverage);
    const r = JSON.stringify(h);
    b && (b.value = r, (o = b.callback) == null || o.call(b, r));
  }
  function Ha() {
    h.ui_settings = ax(h.ui_settings), i || mn();
  }
  function _t() {
    var r;
    i || (mn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Fg() {
    i || wp() && jl().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Vg(r = {}) {
    var c, p, g, _, y, x, N, C, M, L;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((p = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || p.call(c), (_ = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || _.call(g), (y = e.setDirtyCanvas) == null || y.call(e, !0, !1)), s && ((N = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || N.call(x, !0, !0), (L = (M = (C = br) == null ? void 0 : C.canvas) == null ? void 0 : M.setDirty) == null || L.call(M, !0, !0));
  }
  function Os() {
    m.primaryTool !== "cursor" && (m.primaryTool = "cursor", en(), je());
  }
  function ni(r) {
    const o = I.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * I.width,
      y: (r.clientY - o.top) / o.height * I.height
    };
  }
  function ja(r) {
    const o = I.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function ou() {
    return m.mode === "pano" || m.mode === "unwrap";
  }
  function Ke() {
    if (t !== "cutout") return null;
    const r = Array.isArray(h.shots) ? h.shots : [];
    if (!r.length) return null;
    const o = String(h.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function $t(r = Ke()) {
    var _, y, x;
    if (!r || !I) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(I.width || 0) - 48),
      h: Math.max(1, Number(I.height || 0) - 48)
    }, s = Y(Gi(r), 0.1, 10);
    let c = o.w, p = Math.max(1, Math.round(c / s));
    p > o.h && (p = o.h, c = Math.max(1, Math.round(p * s)));
    const g = Math.max(0.1, Number(((_ = m.frameView) == null ? void 0 : _.zoom) || 1));
    return c *= g, p *= g, {
      x: Math.round(o.x + (o.w - c) * 0.5 + Number(((y = m.frameView) == null ? void 0 : y.panX) || 0)),
      y: Math.round(o.y + (o.h - p) * 0.5 + Number(((x = m.frameView) == null ? void 0 : x.panY) || 0)),
      w: Math.max(1, Math.round(c)),
      h: Math.max(1, Math.round(p))
    };
  }
  function Fs() {
    return t === "cutout" && !!Ke();
  }
  function Nn(r, o = performance.now()) {
    if (m.mode === "unwrap") {
      const g = lr(), _ = (r.x - g.x) / Math.max(1, g.w), y = (r.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: Y(y, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = ws(r.x, r.y), { lon: c, lat: p } = ks(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Y(0.5 - p / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Mn(r, o, s = performance.now()) {
    const c = $t(o);
    if (!c) return null;
    const p = {
      x: (Number(r.x) - c.x) / Math.max(1, c.w),
      y: (Number(r.y) - c.y) / Math.max(1, c.h)
    }, g = Is(o, p);
    if (!g) return null;
    const { lon: _, lat: y } = ks(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Y(0.5 - y / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Hg(r, o) {
    var N;
    const s = Ke(), c = $t(s);
    if (!s || !c) return !1;
    const p = Math.max(0.1, Number(((N = m.frameView) == null ? void 0 : N.zoom) || 1)), g = Y(p * Number(o), 0.25, 12);
    if (Math.abs(g - p) < 1e-6) return !1;
    const _ = (Number(r.x) - c.x) / Math.max(1e-6, c.w), y = (Number(r.y) - c.y) / Math.max(1e-6, c.h);
    m.frameView.zoom = g;
    const x = $t(s);
    return x ? (m.frameView.panX += Number(r.x) - (x.x + x.w * _), m.frameView.panY += Number(r.y) - (x.y + x.h * y), !0) : !1;
  }
  function jg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function fr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? Wn : tn[o] ? o : m.activeBrushPresetId || Wn;
  }
  function su() {
    return (m.primaryTool === "paint" || m.primaryTool === "mask") && (ou() || Fs());
  }
  function cu() {
    var r;
    return su() && ((r = m.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function za(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), c = Number((r == null ? void 0 : r.y) || 0), p = o !== !1, g = m.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== p || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - c) > 0.01;
    return m.pointerPos = { x: s, y: c, inside: p }, _;
  }
  function zg() {
    var C, M;
    if (!cu()) return null;
    const r = m.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? m.maskTool : m.paintTool, s = fr(o), c = tn[s] || tn[Wn], p = Number(m.brushSizes[s] ?? 10), g = Math.max(1, p) * Math.max(0.1, Number(c.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), y = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : cn(m.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : Y(Math.max(0.16, Number(y.a ?? 1) * 0.3), 0.16, 0.52), N = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : Y(Math.max(0.46, Number(y.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: c,
      radius: _,
      fillStyle: En(y, x),
      strokeStyle: En(y, N),
      x: Number(((C = m.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((M = m.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function $g() {
    var L, H, Q;
    const r = zg();
    if (!ae) return;
    if (!r) {
      ae.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, c = "999px", p = 0, g = r.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", y = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let C = Number(r.hotspotX ?? o * 0.5), M = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = Go, s = Go, c = "0", _ = "0", y = "none", C = G_, M = W_, g = J_(r.fillStyle, N, x);
    else if (r.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const K = Math.max(1, Number(((L = r.preset) == null ? void 0 : L.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * K), s = Math.max(6, r.radius * 2), c = `${Math.min(6, s * 0.42)}px`, p = Number(((Q = (H = r.preset) == null ? void 0 : H.angle) == null ? void 0 : Q.value) || 0) * mr;
    } else r.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    ae.style.display = "block", ae.style.width = `${Math.round(o)}px`, ae.style.height = `${Math.round(s)}px`, ae.style.borderRadius = c, ae.style.border = _, ae.style.boxShadow = y, ae.style.background = g, ae.style.backgroundRepeat = "no-repeat", ae.style.backgroundPosition = "center", ae.style.backgroundSize = "contain", ae.style.transform = `translate(${Math.round(r.x - C)}px, ${Math.round(r.y - M)}px) rotate(${p}deg)`;
  }
  function Bg() {
    var me;
    if (!re || !we) return;
    const r = m.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? m.maskTool : m.paintTool;
    if (o === "lasso_fill") return;
    const s = fr(o), c = tn[s] || tn[Wn], p = Number(m.brushSizes[s] ?? 10), g = Math.max(1, p) * Math.max(0.1, Number(c.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), y = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : y ? { r: 1, g: 1, b: 1, a: 0.22 } : cn(m.paintColor), N = r === "mask" ? En(x, 0.22) : y ? "rgba(255,255,255,0.14)" : En(x, Y(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), C = r === "mask" ? En(x, 0.96) : y ? "rgba(255,255,255,0.72)" : En(x, Y(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let M = _ * 2, L = _ * 2, H = "999px", Q = 0, K = N;
    const q = "rgba(222, 222, 222, 0.72)", oe = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const le = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      M = Math.max(16, _ * 2 * le), L = Math.max(10, _ * 2), H = `${Math.min(8, L * 0.42)}px`, Q = Number(((me = c == null ? void 0 : c.angle) == null ? void 0 : me.value) || 0) * mr;
    } else o === "brush" ? K = `radial-gradient(circle at 50% 50%, ${C} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (M = Math.max(18, _ * 1.8), L = M, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : y && (K = "rgba(255,255,255,0.12)");
    we.style.width = `${Math.round(M)}px`, we.style.height = `${Math.round(L)}px`, we.style.borderRadius = H, we.style.background = K, we.style.border = `1px solid ${q}`, we.style.boxShadow = `0 0 0 1px ${oe}`, we.style.transform = `rotate(${Q}deg)`, Ue && (clearTimeout(Ue), Ue = 0), re.classList.remove("fade-out"), re.classList.add("show");
  }
  function $a() {
    !re || !re.classList.contains("show") || (re.classList.add("fade-out"), Ue && clearTimeout(Ue), Ue = window.setTimeout(() => {
      re.classList.remove("show", "fade-out"), Ue = 0;
    }, 180));
  }
  function Ug(r, o, s, c) {
    const p = fr(o), g = tn[p] || tn[Wn], _ = m.brushSizes[p] ?? 10, y = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), x = jg(c, y), N = s.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), C = {
      id: ci(r),
      actionGroupId: ci("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: y,
      createdAt: Date.now(),
      color: r === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((M) => ({ ...M })),
        points: N.map((M) => ({ ...M }))
      }
    };
    return Mf(C, g), Number(g.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function Kg(r, o, s, c) {
    const p = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), g = fr(o), _ = tn[g] || tn[Wn], y = {
      id: ci(r),
      actionGroupId: ci("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: p.map((x) => ({ ...x }))
      }
    };
    return Mf(y, _), Number(_.aspect ?? 1), Number(y.aspect ?? 1), String(y.stampKind || ""), { ...y.targetSpace }, y;
  }
  function ri(r) {
    const o = h.painting || (h.painting = ra(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function Gg(r, o, s = performance.now()) {
    let c;
    if (m.mode === "frame") {
      const N = Ke();
      if (!N) return !1;
      c = Mn(o, N, s);
    } else
      c = Nn(o, s);
    const p = r.stroke.geometry.rawPoints || r.stroke.geometry.points, g = r.stroke.geometry.points, _ = p[p.length - 1];
    if (_) {
      const N = Math.abs(Number(c.u ?? c.x ?? 0) - Number(_.u ?? _.x ?? 0)), C = Math.abs(Number(c.v ?? c.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (N < 15e-4 && C < 15e-4) return !1;
    }
    const y = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...y }), g.push({ ...y });
    const x = Kn();
    if (x) {
      const N = m.paintEngine.ensureTarget(x);
      m.paintEngine.appendStrokePoint(N, Number(y.u ?? 0), Number(y.v ?? 0), r.stroke);
    }
    return !0;
  }
  function Wg(r, o, s = performance.now()) {
    var _, y;
    let c;
    if (m.mode === "frame") {
      const x = Ke();
      if (!x) return !1;
      c = Mn(o, x, s);
    } else
      c = Nn(o, s);
    const p = (y = (_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.points;
    if (!c || !Array.isArray(p)) return !1;
    const g = p[p.length - 1];
    if (g) {
      const x = Math.abs(Number(c.u ?? c.x ?? 0) - Number(g.u ?? g.x ?? 0)), N = Math.abs(Number(c.v ?? c.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (x < 15e-4 && N < 15e-4) return !1;
    }
    return p.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Yg(r) {
    var le, be, Pe, Fe, Se;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Oa();
    const s = Kn(), c = Ii(s.width, s.height);
    if (!Zl(c, o, { w: s.width, h: s.height })) return !1;
    const p = ((be = (le = c.ctx) == null ? void 0 : le.getImageData(0, 0, s.width, s.height)) == null ? void 0 : be.data) || null;
    if (!p) return !1;
    const g = new Map(Xe().map((X) => [String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim(), X ? { ...X } : null])), _ = [], y = [], x = [...Qt().filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") !== "paint")];
    let N = !1, C = Br().reduce((X, se) => Math.max(X, Number((se == null ? void 0 : se.z_index) || 0)), -1) + 1;
    function M(X, se, _e, Ne = 8) {
      let ze = se, Ve = _e, Be = -1, qe = -1;
      for (let Ge = 0; Ge < _e; Ge += 1)
        for (let Ze = 0; Ze < se; Ze += 1)
          X[(Ge * se + Ze) * 4 + 3] <= Ne || (Ze < ze && (ze = Ze), Ge < Ve && (Ve = Ge), Ze > Be && (Be = Ze), Ge > qe && (qe = Ge));
      return Be < ze || qe < Ve ? null : { minX: ze, minY: Ve, maxX: Be, maxY: qe };
    }
    const L = M(p, s.width, s.height, 8);
    if (!L) return !1;
    function H(X, se) {
      return !X || !se ? !1 : !(X.maxX < se.minX || se.maxX < X.minX || X.maxY < se.minY || se.maxY < X.minY);
    }
    function Q(X, se) {
      const _e = or((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "", "paint", se);
      if (!_e) return null;
      const Ne = _e.centerUv.u - _e.halfW, ze = _e.centerUv.u + _e.halfW, Ve = _e.centerUv.v - _e.halfH, Be = _e.centerUv.v + _e.halfH, qe = s.width, Ge = s.height;
      return {
        minX: Math.floor((Ne % 1 + 1) % 1 * qe),
        maxX: Math.ceil((ze % 1 + 1) % 1 * qe),
        minY: Math.floor(Y(Ve, 0, 1) * Ge),
        maxY: Math.ceil(Y(Be, 0, 1) * Ge),
        wraps: ze - Ne >= 1 || Ne < 0 || ze > 1
      };
    }
    function K(X) {
      const se = (X == null ? void 0 : X.bbox) || null;
      if (!se) return null;
      const _e = (X == null ? void 0 : X.transform) || {}, Ne = s.width, ze = s.height, Ve = Number(se.u0 || 0) + Number(_e.du || 0), Be = Number(se.u1 || 0) + Number(_e.du || 0), qe = Number(se.v0 || 0) + Number(_e.dv || 0), Ge = Number(se.v1 || 0) + Number(_e.dv || 0);
      return {
        minX: Math.floor((Ve % 1 + 1) % 1 * Ne),
        maxX: Math.ceil((Be % 1 + 1) % 1 * Ne),
        minY: Math.floor(Y(qe, 0, 1) * ze),
        maxY: Math.ceil(Y(Ge, 0, 1) * ze),
        wraps: Be - Ve >= 1 || Ve < 0 || Be > 1
      };
    }
    function q(X) {
      return X ? X.wraps ? H(L, { minX: 0, maxX: X.maxX, minY: X.minY, maxY: X.maxY }) || H(L, { minX: X.minX, maxX: s.width - 1, minY: X.minY, maxY: X.maxY }) : H(L, X) : !0;
    }
    function oe(X) {
      if (!X) return { touched: !1, canvas: null };
      const se = Ii(s.width, s.height, { readback: !0 });
      se.ctx.drawImage(X, 0, 0);
      const _e = se.ctx.getImageData(0, 0, s.width, s.height);
      se.ctx.save(), se.ctx.globalCompositeOperation = "destination-out", se.ctx.drawImage(c.canvas, 0, 0), se.ctx.restore();
      const Ne = se.ctx.getImageData(0, 0, s.width, s.height);
      for (let ze = 0; ze < s.width * s.height; ze += 1) {
        if (p[ze * 4 + 3] <= 8) continue;
        const Be = _e.data[ze * 4 + 3], qe = Ne.data[ze * 4 + 3];
        if (Be > qe)
          return { touched: !0, canvas: se.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function me(X, se, _e) {
      const Ne = Number(_e == null ? void 0 : _e.z_index), ze = fg(X, se, _e).map((Ve, Be) => ({
        ...Ve,
        z_index: Number.isFinite(Ne) ? Ne + Be * 1e-3 : C + Be * 1e-3
      }));
      return ze.length && (C = Math.max(C, ...ze.map((Ve) => Number((Ve == null ? void 0 : Ve.z_index) || 0))) + 1), ze;
    }
    for (const X of Xe()) {
      const se = String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim();
      if (!se) continue;
      const _e = xn(se, "paint");
      if (!q(Q(X, _e))) {
        y.push(X), _.push(..._e);
        continue;
      }
      const Ne = ((Fe = (Pe = m.paintEngine) == null ? void 0 : Pe.getGroupTarget) == null ? void 0 : Fe.call(Pe, se)) || null, ze = ((Se = Ne == null ? void 0 : Ne.committedPaint) == null ? void 0 : Se.canvas) || null;
      if (!ze) {
        y.push(X), _.push(..._e);
        continue;
      }
      const Ve = oe(ze);
      if (!Ve.touched || !Ve.canvas) {
        y.push(X), _.push(..._e);
        continue;
      }
      N = !0;
      const Be = me(Ve.canvas, "paint", g.get(se) || X || {});
      x.push(...Be);
    }
    for (const X of Qt().filter((se) => String((se == null ? void 0 : se.layerKind) || "paint") === "paint")) {
      if (!q(K(X))) {
        x.push(X);
        continue;
      }
      const se = Vl(X, null);
      if (!se) {
        x.push(X);
        continue;
      }
      const _e = oe(se);
      if (!_e.touched || !_e.canvas) {
        x.push(X);
        continue;
      }
      N = !0;
      const Ne = me(_e.canvas, "paint", X);
      x.push(...Ne);
    }
    return N ? (h.painting.paint.strokes = _, h.painting.groups = y.sort((X, se) => Number((X == null ? void 0 : X.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), h.painting.raster_objects = x.sort((X, se) => Number((X == null ? void 0 : X.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), qr({ preservePanelValues: !1 }), !0) : !1;
  }
  function qg(r) {
    var g, _, y, x;
    const o = ((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.geometry) || null;
    if (!o) return !1;
    const s = String(((_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Ts(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), Yg(r);
    const c = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (c && _l((y = r.stroke) == null ? void 0 : y.actionGroupId), ri(r.layerKind).push(r.stroke), !0);
    const p = o.rawPoints || o.points || [];
    return p.length < 1 ? !1 : (o.processedPoints = Ts(p, r.stroke.targetSpace, !0), c && _l((x = r.stroke) == null ? void 0 : x.actionGroupId), ri(r.layerKind).push(r.stroke), !0);
  }
  function lu(r) {
    var s;
    if (t === "cutout" && m.mode === "frame") {
      const c = Ke(), p = $t(c);
      if (!c || !p || !(Number((r == null ? void 0 : r.x) || 0) >= Number(p.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(p.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const _ = Mn(r, c, performance.now()), y = _ ? Qr(_) : null;
      if (y)
        for (const N of As()) {
          if (!yt(N)) continue;
          const C = Ei(N, y);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const M = Et(N);
            if (M != null && M.visible) return { item: N, geom: M };
          }
        }
      const x = ds(!1).slice().sort((N, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of x) {
        if (N.type === "strokeGroup") {
          const L = Kr(ar("paint", N.actionGroupId || N.id || ""));
          if (!L) continue;
          const H = Et(L);
          if (!(H != null && H.visible)) continue;
          const Q = Array.isArray(H.strokePaths) ? H.strokePaths : [];
          for (const K of Q) {
            const q = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!q.length) continue;
            if (K.closed && q.length >= 3 && Yn(r, q)) return { item: L, geom: H };
            const oe = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let me = 0; me < q.length - 1; me += 1)
              if (dc(r, q[me], q[me + 1]) <= oe * oe) return { item: L, geom: H };
            if (q.length === 1 && pr(r, q[0]) <= oe * oe) return { item: L, geom: H };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const L = Ur(Mi(((s = N.item) == null ? void 0 : s.id) || N.id || ""));
          if (!L) continue;
          const H = Et(L);
          if (Fl(L, H, r, _)) return { item: L, geom: H };
          continue;
        }
        const C = N.item;
        if (!C || !yt(C) || !y) continue;
        const M = Ei(C, y);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const L = Et(C);
          if (L != null && L.visible) return { item: C, geom: L };
        }
      }
      return null;
    }
    const o = [
      ...ds(!1).slice().sort((c, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var p;
        return c.type === "strokeGroup" ? Kr(ar("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Ur(Mi(((p = c.item) == null ? void 0 : p.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? As().filter((c) => sn(c)) : []
    ];
    for (const c of o) {
      if (kt(c)) {
        const g = Et(c);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const y of _) {
          const x = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
          if (!x.length) continue;
          if (y.closed && x.length >= 3 && Yn(r, x)) return { item: c, geom: g };
          const N = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < x.length - 1; C += 1)
            if (dc(r, x[C], x[C + 1]) <= N * N) return { item: c, geom: g };
          if (x.length === 1 && pr(r, x[0]) <= N * N) return { item: c, geom: g };
        }
        continue;
      }
      if (jt(c)) {
        const g = Et(c);
        if (!(g != null && g.visible)) continue;
        if (Fl(c, g, r)) return { item: c, geom: g };
        continue;
      }
      const p = Et(c);
      if (p.visible && Yn(r, p.corners))
        return { item: c, geom: p };
    }
    return null;
  }
  function Vs(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const c = r.corners.findIndex((g) => pr(g, o) <= 121);
      if (c >= 0) {
        const g = r.corners[c], _ = g.x - r.center.x, y = g.y - r.center.y, x = _ * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: x };
      }
      const p = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const g of p) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && Yn(o, _)) return { kind: "move", cursor: "default" };
        const y = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < _.length - 1; x += 1)
          if (dc(o, _[x], _[x + 1]) <= y * y) return { kind: "move", cursor: "default" };
      }
      return Yn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const c = r.corners.findIndex((p) => pr(p, o) <= 121);
      if (c >= 0) {
        const p = r.corners[c], g = p.x - r.center.x, _ = p.y - r.center.y, y = g * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: y };
      }
      return Yn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const c = r.edgeMidpoints.find((p) => pr(p, o) <= 169);
      if (c) {
        const p = c.edge === "left" || c.edge === "right";
        return { kind: p ? "scale_x" : "scale_y", cursor: p ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
      }
    }
    const s = r.corners.findIndex((c) => pr(c, o) <= 121);
    if (s >= 0) {
      const c = r.corners[s], p = c.x - r.center.x, g = c.y - r.center.y, _ = p * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return pr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Yn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
  }
  function uu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Xg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function Zg(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((p) => Xg(r, p))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, c = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!Yn({ x: s, y: c }, o.corners);
  }
  function mt(r) {
    if ($g(), m.interaction) {
      m.interaction.kind === "paint_stroke" || m.interaction.kind === "paint_lasso_fill" ? I.style.cursor = "none" : m.interaction.kind === "view" || m.interaction.kind === "pan_frame" ? I.style.cursor = "grabbing" : m.interaction.kind === "move" || m.interaction.kind === "move_multi" || m.interaction.kind === "move_stroke_group" || m.interaction.kind === "move_raster_object" ? I.style.cursor = "move" : m.interaction.kind === "scale" || m.interaction.kind === "scale_x" || m.interaction.kind === "scale_y" || m.interaction.kind === "scale_raster_object" ? I.style.cursor = m.interaction.cursor || "nwse-resize" : m.interaction.kind === "rotate" ? I.style.cursor = "grabbing" : I.style.cursor = "default";
      return;
    }
    if (cu()) {
      I.style.cursor = "none";
      return;
    }
    if (m.mode === "frame" && m.primaryTool !== "cursor") {
      I.style.cursor = "default";
      return;
    }
    if (m.primaryTool === "cursor" && m.marqueeModifier) {
      I.style.cursor = "default";
      return;
    }
    const o = ut(), s = o ? Et(o) : null, c = o ? sr(o) : !1, p = c ? { kind: "none", cursor: "default" } : Vs(s, r);
    if (!c && p.kind !== "none") {
      I.style.cursor = p.cursor;
      return;
    }
    if (m.primaryTool === "cursor" && lu(r)) {
      I.style.cursor = "default";
      return;
    }
    I.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function $e() {
    var p, g;
    if (!ce) return;
    const r = ut(), o = wn();
    if (!r && o.length === 0 || m.interaction) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Ma(), c = zb({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? gs(o) : Et(r),
      allLocked: ms(o),
      selectedLocked: sr(r),
      activeAspect: zi(r),
      cutoutAspectOpen: m.cutoutAspectOpen,
      isExternalSticker: Tt,
      isStickerHidden: Gr,
      canRestoreSelectedToInitial: np,
      iconSet: Rt
    });
    if (!c.visible) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    k.selectionMenu = {
      visible: !0,
      left: ((p = k.selectionMenu) == null ? void 0 : p.left) ?? c.left ?? 0,
      top: ((g = k.selectionMenu) == null ? void 0 : g.top) ?? c.top ?? 0,
      items: c.items
    }, requestAnimationFrame(() => {
      var L, H, Q;
      if (!ce || k.selectionMenu.visible !== !0) return;
      const _ = ce.getBoundingClientRect(), y = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, x = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40, N = 14;
      let C = Y((Number(((L = c.anchor) == null ? void 0 : L.minX) || 0) + Number(((H = c.anchor) == null ? void 0 : H.maxX) || 0)) * 0.5 - y * 0.5, N, I.width - y - N), M = Number(((Q = c.anchor) == null ? void 0 : Q.maxY) || 0) + 18;
      if (!Number.isFinite(C) || !Number.isFinite(M) || M + x > I.height - N) {
        k.selectionMenu.visible = !1;
        return;
      }
      k.selectionMenu.left = C, k.selectionMenu.top = M;
    });
  }
  function Ba() {
    ie.timer && (clearTimeout(ie.timer), ie.timer = 0), ie.target = null, k.tooltip.visible = !1, k.tooltip.text = "", k.tooltip.variant = "";
  }
  function Jg(r) {
    if (!B || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    k.tooltip.text = o, k.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var Q, K;
      if (ie.target !== s || !B || !(s != null && s.isConnected)) return;
      const c = J.getBoundingClientRect(), p = s.getBoundingClientRect(), g = 8, _ = 12, y = Math.round(Number(((Q = B.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, x = Math.round(Number(((K = B.getBoundingClientRect()) == null ? void 0 : K.height) || 0)) || 24, N = !!s.closest(".pano-floating-left"), C = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let M = "", L = p.left - c.left + p.width * 0.5 - y * 0.5, H = p.top - c.top - x - _;
      if (N)
        M = "tool-rail", L = p.right - c.left + 10, H = p.top - c.top + p.height * 0.5 - x * 0.5, L = Y(L, g, Math.max(g, c.width - y - g)), H = Y(H, g, Math.max(g, c.height - x - g));
      else if (C) {
        M = "footer";
        const q = s.closest(".pano-paint-footer"), oe = q ? q.getBoundingClientRect() : p;
        L = oe.left - c.left + oe.width * 0.5 - y * 0.5, H = oe.bottom - c.top + 5, L = Y(L, g, Math.max(g, c.width - y - g)), H = Math.max(g, H);
      }
      L = Y(L, g, Math.max(g, c.width - y - g)), H = Math.max(g, H), k.tooltip.left = L, k.tooltip.top = H, k.tooltip.variant = M, k.tooltip.visible = !0;
    });
  }
  const Lt = os({
    getView: () => ({ yaw: m.viewYaw, pitch: m.viewPitch, fov: m.viewFov }),
    setView: (r) => {
      m.viewYaw = Ft(Number(r.yaw || 0)), m.viewPitch = Y(Number(r.pitch || 0), -89.9, 89.9), m.viewFov = Y(Number(r.fov || m.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = I.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || I.clientWidth || 0)),
        h: Math.max(1, Number(r.height || I.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = h.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = h.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: lr,
    onInteraction: () => {
      $.backgroundDirty = !0, $.dirty = !0;
    }
  });
  I.onpointerdown = (r) => {
    const o = ni(r);
    if (za(o, !0), m.viewTween = null, Lt.state.inertia.active = !1, Lt.state.inertia.vx = 0, Lt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), m.mode === "frame")
        m.interaction = { kind: "pan_frame", last: o };
      else {
        const y = m.mode === "unwrap" ? o : ja(r);
        m.interaction = { kind: "view", last: y, lastTs: performance.now() }, Lt.startDrag(y.x, y.y, r.pointerId, performance.now());
      }
      mt(o), I.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (m.mode === "pano") {
        const y = ja(r);
        m.interaction = { kind: "view", last: y, lastTs: performance.now() }, Lt.startDrag(y.x, y.y, r.pointerId, performance.now()), mt(o), I.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (Z && !Z.hidden)
      return;
    if ((m.primaryTool === "paint" || m.primaryTool === "mask") && (ou() || Fs())) {
      const y = m.primaryTool === "mask" ? "mask" : "paint", x = m.primaryTool === "mask" ? m.maskTool : m.paintTool, N = m.mode === "frame" && Fs() ? Ke() : null, C = { kind: "ERP_GLOBAL" }, M = N ? Mn(o, N, performance.now()) : Nn(o, performance.now());
      m.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: y,
        _livePreviewToken: ci("live"),
        stroke: x === "lasso_fill" ? Kg(y, x, [M], C) : Ug(y, x, [M], C)
      }, Ci();
      const L = Kn();
      if (L)
        if (m.paintEngine.beginStroke(m.interaction.stroke, L), m.interaction.kind === "paint_stroke") {
          const H = m.paintEngine.ensureTarget(L), Q = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), K = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          m.paintEngine.appendStrokePoint(H, Q, K, m.interaction.stroke);
        } else
          m.paintEngine.updateActiveStroke(m.interaction.stroke, L);
      mt(o), I.setPointerCapture(r.pointerId), ge();
      return;
    }
    const s = wn(), c = ut(), p = s.length > 1 ? gs(s) : c ? Et(c) : null;
    if (m.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      m.interaction = { kind: "marquee_select", start: o, current: o }, mt(o), I.setPointerCapture(r.pointerId), ge({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (p != null && p.visible)) {
      if ((s.some((x) => sr(x)) ? { kind: "none" } : Vs(p, o)).kind === "move") {
        m.interaction = {
          kind: "move_multi",
          items: s.map((x) => x),
          offset: { x: o.x - p.center.x, y: o.y - p.center.y },
          startCenter: { x: p.center.x, y: p.center.y },
          stickerSnapshots: s.filter((x) => yt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var C, M;
              const N = Et(x);
              return N != null && N.visible ? { x: Number(((C = N.center) == null ? void 0 : C.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => kt(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Bt(xn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Bt(or(x.actionGroupId, x.layerKind)),
            center: (() => {
              var C, M;
              const N = Et(x);
              return N != null && N.visible ? { x: Number(((C = N.center) == null ? void 0 : C.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: ps(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => jt(x)).map((x) => ({
            id: At(x.rasterObjectId || x.id || ""),
            snapshot: Bt(Qt().find((N) => String((N == null ? void 0 : N.id) || "") === At(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var C, M;
              const N = Et(x);
              return N != null && N.visible ? { x: Number(((C = N.center) == null ? void 0 : C.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Bl(x)
          }))
        }, mt(o), I.setPointerCapture(r.pointerId);
        return;
      }
    } else if (c && (p != null && p.visible)) {
      const y = sr(c) ? { kind: "none" } : Vs(p, o);
      if (y.kind === "scale") {
        m.interaction = kt(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(o.x - p.center.x, o.y - p.center.y)),
          snapshot: Bt(xn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Bt(or(c.actionGroupId, c.layerKind)),
          cursor: y.cursor
        } : jt(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(o.x - p.center.x, o.y - p.center.y)),
          snapshot: Bt(Qt().find((x) => String((x == null ? void 0 : x.id) || "") === At(c.rasterObjectId || c.id || ""))),
          cursor: y.cursor
        } : {
          kind: "scale",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(o.x - p.center.x, o.y - p.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: y.cursor
        }, mt(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "scale_x" || y.kind === "scale_y") {
        m.interaction = {
          kind: y.kind,
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(o.x - p.center.x, o.y - p.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: y.cursor,
          edge: y.edge
        }, mt(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "rotate") {
        m.interaction = kt(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: p.center,
          startAng: Math.atan2(o.y - p.center.y, o.x - p.center.x),
          snapshot: Bt(xn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Bt(or(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: p.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(o.y - p.center.y, o.x - p.center.x)
        }, mt(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "move") {
        if (kt(c)) {
          const x = m.mode === "frame" ? (() => {
            const N = Ke();
            return N ? Mn(o, N, performance.now()) : null;
          })() : Nn(o, performance.now());
          m.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: x,
            snapshot: Bt(xn(c.actionGroupId, c.layerKind)),
            frameSnapshot: Bt(or(c.actionGroupId, c.layerKind))
          }, mt(o), I.setPointerCapture(r.pointerId);
          return;
        }
        if (jt(c)) {
          const x = m.mode === "frame" ? (() => {
            const N = Ke();
            return N ? Mn(o, N, performance.now()) : null;
          })() : Nn(o, performance.now());
          m.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: x,
            snapshot: Bt(Qt().find((N) => String((N == null ? void 0 : N.id) || "") === At(c.rasterObjectId || c.id || "")))
          }, mt(o), I.setPointerCapture(r.pointerId);
          return;
        }
        m.interaction = {
          kind: "move",
          item: c,
          offset: { x: o.x - p.center.x, y: o.y - p.center.y }
        }, mt(o), I.setPointerCapture(r.pointerId);
        return;
      }
    }
    const g = lu(o);
    if (g) {
      const y = m.selectedId !== g.item.id;
      if (y && m.selectedId && (dt(), mn()), Nr(g.item), t === "cutout" && y && (m.cutoutAspectOpen = !1), y && je(), $e(), ge(), sr(g.item)) {
        mt(o);
        return;
      }
      m.interaction = {
        kind: kt(g.item) ? "move_stroke_group" : jt(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: o.x - g.geom.center.x, y: o.y - g.geom.center.y },
        startUv: kt(g.item) || jt(g.item) ? m.mode === "frame" ? (() => {
          const x = Ke();
          return x ? Mn(o, x, performance.now()) : null;
        })() : Nn(o, performance.now()) : null,
        snapshot: kt(g.item) ? Bt(xn(g.item.actionGroupId, g.item.layerKind)) : jt(g.item) ? Bt(Qt().find((x) => String((x == null ? void 0 : x.id) || "") === At(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: kt(g.item) ? Bt(or(g.item.actionGroupId, g.item.layerKind)) : null
      }, mt(o), I.setPointerCapture(r.pointerId);
      return;
    }
    const _ = !!m.selectedId;
    if (_ && (dt(), mn()), qr(), _ && je(), $e(), ge(), m.mode === "pano") {
      const y = ja(r);
      m.interaction = { kind: "view", last: y, lastTs: performance.now() }, Lt.startDrag(y.x, y.y, r.pointerId, performance.now()), mt(o), I.setPointerCapture(r.pointerId);
    }
  }, I.onpointermove = (r) => {
    var c, p, g, _, y, x, N, C, M, L, H, Q, K, q, oe, me, le, be, Pe, Fe;
    const o = ni(r);
    if (za(o, !0), !m.interaction) {
      mt(o);
      return;
    }
    mt(o);
    const s = m.interaction;
    if (s.kind === "paint_stroke") {
      const Se = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      Se.forEach((se) => {
        const _e = ni(se);
        Gg(s, _e, performance.now()) && (X = !0);
      }), X && ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const Se = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      if (Se.forEach((se) => {
        const _e = ni(se);
        Wg(s, _e, performance.now()) && (X = !0);
      }), X) {
        const se = Kn();
        se && m.paintEngine.updateActiveStroke(s.stroke, se), ge({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const Se = performance.now(), X = m.mode === "unwrap" ? o : ja(r);
      Lt.moveDrag(X.x, X.y, m.mode === "unwrap" ? "unwrap" : "pano", Se), s.lastTs = Se, s.last = X, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      m.frameView.panX += o.x - s.last.x, m.frameView.panY += o.y - s.last.y, s.last = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const Se = o.x - s.offset.x, X = o.y - s.offset.y;
      if (m.mode === "frame" && t === "cutout") {
        const se = Ke(), _e = $t(se);
        if (!se || !_e) return;
        const Ne = {
          x: Y((Se - _e.x) / Math.max(1, _e.w), 0, 1),
          y: Y((X - _e.y) / Math.max(1, _e.h), 0, 1)
        }, ze = Is(se, Ne);
        if (!ze) return;
        const Ve = so(ze);
        s.item.yaw_deg = Ve.yaw, s.item.pitch_deg = Ve.pitch;
      } else if (m.mode === "unwrap") {
        const se = lr(), _e = Y((Se - se.x) / Math.max(se.w, 1), 0, 1), Ne = Y((X - se.y) / Math.max(se.h, 1), 0, 1);
        s.item.yaw_deg = Ft(_e * 360 - 180), s.item.pitch_deg = Y(90 - Ne * 180, -90, 90);
      } else {
        const se = ws(Se, X), _e = so(se);
        s.item.yaw_deg = _e.yaw, s.item.pitch_deg = _e.pitch;
      }
      yt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const Se = m.mode === "frame" ? (() => {
        const _e = Ke();
        return _e ? Mn(o, _e, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!Se || !s.startUv) return;
      const X = gn(Number(Se.u || 0), Number(s.startUv.u || 0)), se = Number(Se.v || 0) - Number(s.startUv.v || 0);
      wl((c = s.item) == null ? void 0 : c.actionGroupId, X, se, s.snapshot, (p = s.item) == null ? void 0 : p.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const Se = m.mode === "frame" ? (() => {
        const _e = Ke();
        return _e ? Mn(o, _e, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!Se || !s.startUv) return;
      const X = gn(Number(Se.u || 0), Number(s.startUv.u || 0)), se = Number(Se.v || 0) - Number(s.startUv.v || 0);
      Nl(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", X, se, s.snapshot) && (ti(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Uh(((y = s.item) == null ? void 0 : y.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", X, s.snapshot) && (ti(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const Se = o.x - Number(((N = s.offset) == null ? void 0 : N.x) || 0), X = o.y - Number(((C = s.offset) == null ? void 0 : C.y) || 0);
      let se = !1, _e = !1, Ne = !1;
      const ze = Se - Number(((M = s.startCenter) == null ? void 0 : M.x) || Se), Ve = X - Number(((L = s.startCenter) == null ? void 0 : L.y) || X);
      for (const Be of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const qe = (t === "cutout" ? hs() : et()).find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === String(Be.id || ""));
        if (!qe || !yt(qe)) continue;
        const Ge = {
          x: Number(((H = Be.center) == null ? void 0 : H.x) || 0) + ze,
          y: Number(((Q = Be.center) == null ? void 0 : Q.y) || 0) + Ve
        };
        if (m.mode === "frame" && t === "cutout") {
          const Ze = Ke(), Mt = $t(Ze);
          if (!Ze || !Mt) continue;
          const kr = {
            x: Y((Ge.x - Mt.x) / Math.max(1, Mt.w), 0, 1),
            y: Y((Ge.y - Mt.y) / Math.max(1, Mt.h), 0, 1)
          }, Nu = Is(Ze, kr);
          if (!Nu) continue;
          const Mu = so(Nu);
          qe.yaw_deg = Mu.yaw, qe.pitch_deg = Mu.pitch;
        } else if (m.mode === "unwrap") {
          const Ze = lr(), Mt = Y((Ge.x - Ze.x) / Math.max(Ze.w, 1), 0, 1), kr = Y((Ge.y - Ze.y) / Math.max(Ze.h, 1), 0, 1);
          qe.yaw_deg = Ft(Mt * 360 - 180), qe.pitch_deg = Y(90 - kr * 180, -90, 90);
        } else {
          const Ze = ws(Ge.x, Ge.y), Mt = so(Ze);
          qe.yaw_deg = Mt.yaw, qe.pitch_deg = Mt.pitch;
        }
        se = !0;
      }
      for (const Be of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const qe = {
          x: Number(((K = Be.center) == null ? void 0 : K.x) || 0) + ze,
          y: Number(((q = Be.center) == null ? void 0 : q.y) || 0) + Ve
        }, Ge = m.mode === "frame" ? (() => {
          const Mt = Ke();
          return Mt ? Mn(qe, Mt, performance.now()) : null;
        })() : Nn(qe, performance.now()), Ze = Be.centerUv || null;
        if (Ge && Ze) {
          const Mt = gn(Number(Ge.u || 0), Number(Ze.u || 0)), kr = Number(Ge.v || 0) - Number(Ze.v || 0);
          wl(Be.id, Mt, kr, Be.snapshot, Be.layerKind, Be.frameSnapshot) && (se = !0, _e = !0);
        }
      }
      for (const Be of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const qe = {
          x: Number(((oe = Be.center) == null ? void 0 : oe.x) || 0) + ze,
          y: Number(((me = Be.center) == null ? void 0 : me.y) || 0) + Ve
        }, Ge = m.mode === "frame" ? (() => {
          const Mt = Ke();
          return Mt ? Mn(qe, Mt, performance.now()) : null;
        })() : Nn(qe, performance.now()), Ze = Be.centerUv || null;
        if (Ge && Ze) {
          const Mt = gn(Number(Ge.u || 0), Number(Ze.u || 0)), kr = Number(Ge.v || 0) - Number(Ze.v || 0);
          Nl(Be.id, Mt, kr, Be.snapshot) && (se = !0, Ne = !0);
        }
      }
      se && (_e ? Sn({ rebuildPaintEngine: !1 }) : Ne ? ti() : Dt(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Sl((le = s.item) == null ? void 0 : le.actionGroupId, X, 0, s.snapshot, (be = s.item) == null ? void 0 : be.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let Se = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * mr;
      r.shiftKey && (Se = Math.round(Se / 45) * 45), Sl((Pe = s.item) == null ? void 0 : Pe.actionGroupId, 1, Se, s.snapshot, (Fe = s.item) == null ? void 0 : Fe.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = Y(s.startHFOV * X, 1, 179), s.item.vFOV_deg = Y(s.startVFOV * X, 1, 179), s.item.aspect_id = Dr(s.item), yt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = Y(s.startHFOV * X, 1, 179), s.item.aspect_id = Dr(s.item), yt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = Y(s.startVFOV * X, 1, 179), s.item.aspect_id = Dr(s.item), yt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let X = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * mr, se = s.startRot - X;
      r.shiftKey && (se = Math.round(se / 45) * 45);
      const _e = yt(s.item) ? "rot_deg" : "roll_deg";
      s.item[_e] = se, yt(s.item) && Dt(), ge({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var o, s, c, p, g, _;
    const r = m.interaction;
    if (((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = m.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (Ci(), qg(m.interaction)) {
        Sn();
        const y = String(((c = m.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
        if (y) {
          const N = Xe().find((C) => String((C == null ? void 0 : C.actionGroupId) || "") === y);
          N && (N.frame = null);
        }
        const x = Kn();
        x && (String(((p = m.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (m.paintEngine.cancelActiveStroke(x), ql()) : m.paintEngine.commitActiveStroke(m.interaction.stroke, x)), dt(), mn(), je(), $e(), e.setDirtyCanvas(!0, !0), ge();
      } else {
        const y = Kn();
        y && m.paintEngine.cancelActiveStroke(y);
      }
    else if (((g = m.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const y = uu(m.interaction.start, m.interaction.current), N = [
        ...t === "cutout" ? As().filter((C) => !sn(C)) : [...et()],
        ...jh(),
        ...zh()
      ].filter((C) => Zg(y, Et(C)));
      Yh(N, ((_ = N[N.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && N.length && (m.cutoutAspectOpen = !1), je(), $e(), ge();
    } else if (m.interaction && m.interaction.kind !== "view" && m.interaction.kind !== "pan_frame") {
      let y = !1;
      (m.interaction.kind === "move_stroke_group" || m.interaction.kind === "scale_stroke_group" || m.interaction.kind === "rotate_stroke_group") && (y = !0), (m.interaction.kind === "move_raster_object" || m.interaction.kind === "scale_raster_object") && (y = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length && (y = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.rasterSnapshots) && m.interaction.rasterSnapshots.length && (y = !0), y && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(m.interaction.kind) || m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length ? Sn({ rebuildPaintEngine: !0 }) : ti()), dt(), mn(), e.setDirtyCanvas(!0, !0), Rs(), m.hqFrames = 1, $e(), ge();
    }
    m.interaction = null, Ci(), r && r.kind === "view" && Lt.endDrag(performance.now()), Pa(), $e(), mt(m.pointerPos), ge();
  }, I.onpointercancel = () => {
    var r, o, s;
    if (((r = m.interaction) == null ? void 0 : r.kind) === "view" && Lt.endDrag(performance.now()), ((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = m.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Ci();
      const c = Kn();
      c && m.paintEngine.cancelActiveStroke(c);
    }
    m.interaction = null, Ci(), Pa(), mt(m.pointerPos), ge({ localOnly: !0 });
  }, I.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, I.onmousemove = (r) => {
    const o = ni(r);
    za(o, !0), !m.interaction && mt(o);
  }, I.onmouseleave = () => {
    za(m.pointerPos, !1), mt(m.pointerPos);
  }, I.onwheel = (r) => {
    if (m.mode === "frame") {
      const o = ni(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Hg(o, s) && ge({ localOnly: !0 }), r.preventDefault();
      return;
    }
    m.mode === "pano" && (Lt.applyWheelEvent(r) && ge({ localOnly: !0 }), r.preventDefault());
  }, I.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), lt(!0));
  }, I.ondrop = (r) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), ne.depth = 0, lt(!1);
    const s = Array.from(((c = r.dataTransfer) == null ? void 0 : c.files) || []).find((p) => Va(p));
    s && tu(s);
  };
  const fu = (r) => {
    t !== "stickers" && t !== "cutout" || i || ke(r) && (ne.depth += 1, lt(!0), r.preventDefault());
  }, du = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!ne.active && ke(r) && lt(!0), ne.active && r.preventDefault());
  }, hu = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !ne.active) return;
    ne.depth = Math.max(0, ne.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (ne.depth === 0 || o) && lt(!1);
  }, pu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (ne.depth = 0, lt(!1), ke(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", fu, !0), window.addEventListener("dragover", du, !0), window.addEventListener("dragleave", hu, !0), window.addEventListener("drop", pu, !0);
  function Hs() {
    const { canUndo: r, canRedo: o } = eu();
    ji(k.toolButtons, "value", "undo", { disabled: !r }), ji(k.toolButtons, "value", "redo", { disabled: !o });
  }
  const gu = (r, o, s = !1) => {
    var y;
    const c = ut(), p = Ma();
    if (!c || p === "stroke") return;
    const g = (((y = k.sidePanel) == null ? void 0 : y.params) || []).find((x) => x.key === r);
    if (!g || g.enabled === !1) return;
    let _ = Number(o);
    Number.isNaN(_) && (_ = 0), _ = Y(_, Number(g.min), Number(g.max)), r === "yaw_deg" && (_ = Ft(_)), c[r] = _, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (c.aspect_id = Dr(c)), je(), ge(), s && dt();
  };
  fe == null || fe.addEventListener("click", async (r) => {
    var c, p, g, _, y, x, N, C, M;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const L = Ot(o.getAttribute("data-coverage"));
      if (L === Ot(h.coverage)) return;
      h.coverage = L, m.coverage = L, f && (f.value = String(L)), l ? $.backgroundDirty = !0 : (mn(), Vg({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), je(), $e(), ge();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((p = (c = k.sidePanel) == null ? void 0 : c.selectionPicker) != null && p.disabled) return;
      k.sidePanel.selectionPicker.open = !k.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      k.sidePanel.selectionPicker.open = !1;
      const L = String(o.getAttribute("data-selection-id") || "");
      let H = null;
      L && (t === "stickers" ? H = et().find((Q) => String((Q == null ? void 0 : Q.id) || "") === L) || null : H = ((g = Ml().find((Q) => {
        var K;
        return String(((K = Q == null ? void 0 : Q.item) == null ? void 0 : K.id) || "") === L;
      })) == null ? void 0 : g.item) || null), Nr(H || null), H && !kt(H) && hn(
        Ft(Number(H.yaw_deg || 0)),
        Y(Number(H.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), je(), $e(), ge();
      return;
    }
    if (s === "copy-state-inline") {
      const L = ut(), H = Ma();
      if (!L || H === "stroke" || wn().length > 1) return;
      const Q = JSON.stringify(t === "cutout" && H !== "image" ? Dl(L) : sp(L));
      try {
        await navigator.clipboard.writeText(Q), (_ = k.sidePanel) != null && _.copyStateButton && (k.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = k.sidePanel) != null && K.copyStateButton && (k.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const L = String(o.getAttribute("data-visibility") || "");
      L === "panorama" ? m.showPanorama = !m.showPanorama : L === "objects" ? m.showObjects = !m.showObjects : L === "mask" && (m.showMask = !m.showMask), je(), ge();
      return;
    }
    if (s === "set-invert-x") {
      h.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Ha(), je(), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), ge();
      return;
    }
    if (s === "set-invert-y") {
      h.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Ha(), je(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ge();
      return;
    }
    if (s === "toggle-quality-picker") {
      (N = k.sidePanel) != null && N.uiSettings && (k.sidePanel.uiSettings.qualityOpen = !k.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const L = String(o.getAttribute("data-quality") || "balanced");
      h.ui_settings.preview_quality = L === "draft" || L === "high" ? L : "balanced", Ha(), je(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ge();
      return;
    }
    if (s === "ui-reset-defaults") {
      h.ui_settings.invert_view_x = !1, h.ui_settings.invert_view_y = !1, h.ui_settings.preview_quality = "balanced", Ha(), je(), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0), ge();
      return;
    }
    if (s === "close-preview") {
      ai();
      return;
    }
    if (s === "cancel-close") {
      ai();
      return;
    }
    s === "save-close" && (Og(), ai());
  }), fe == null || fe.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && gu(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), fe == null || fe.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && gu(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const js = () => {
    const r = !!m.showGrid;
    ji(k.floatingButtons, "action", "toggle-grid", {
      icon: r ? Rt.eye : Rt.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  js(), T.addEventListener("click", (r) => {
    var y, x, N, C;
    if ((x = (y = r.target) == null ? void 0 : y.matches) != null && x.call(y, "[data-confirm-overlay]")) {
      const M = (N = k.confirmDialog) == null ? void 0 : N.resolve;
      k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      m.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && m.mode === "frame" && ut() && sn(ut()) && (qr({ preservePanelValues: !0 }), je(), $e()), Os(), Pa(), ge();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const M = String(s.getAttribute("data-tool-mode") || "cursor");
        m.primaryTool = M, (M === "paint" || M === "mask") && qr({ preservePanelValues: !0 }), en(), je(), $e(), ge();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const M = String(s.getAttribute("data-tool-ui-action") || "");
        if ((M === "undo" || M === "redo") && s.disabled) return;
        M === "undo" ? Ls(-1) : M === "redo" ? Ls(1) : M === "clear" ? Ag() : M === "add" || M === "add-image" ? wg() : M === "add-or-look" && kg();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        m.primaryTool = "paint";
        const M = String(s.getAttribute("data-paint-tool") || "pen");
        m.paintTool = M, qr({ preservePanelValues: !0 }), tn[M] && (m.activeBrushPresetId = M), en(), je(), $e(), ge();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        m.primaryTool = "mask", m.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), qr({ preservePanelValues: !0 }), en(), je(), $e(), ge();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const M = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Ig(M);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const M = wo.find((L) => L.id === s.getAttribute("data-paint-color-swatch"));
        if (!M) return;
        m.paintColor = cn(M.color), Ct(!0), en();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), Z && !Z.hidden ? Ct(!0) : Ht(), en();
        return;
      }
    }
    const c = String(((C = s == null ? void 0 : s.getAttribute) == null ? void 0 : C.call(s, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(z instanceof HTMLVideoElement)) return;
      if (Yr(), z.paused) {
        F.mode = "playback", F.pendingPlaybackResume = !1, F.resumeAfterScrub = !1;
        const M = Number(k.videoTransport.duration || z.duration || 0), L = Number(z.currentTime || F.editorTime || 0), H = M > 0 && L >= M - 1e-3 ? 0 : Number(F.editorTime || L || 0);
        F.editorTime = H, Math.abs(L - H) > 1e-3 ? (F.seeking = !1, F.pendingPlaybackResume = !0, bs(H)) : z.play().catch(() => {
        });
      } else
        z.pause(), F.mode = "scrub", F.resumeAfterScrub = !1, F.pendingPlaybackResume = !1, F.editorTime = Number(z.currentTime || 0), Wr();
      cr({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: !!z.getAttribute("src") && m.primaryTool !== "paint" && m.primaryTool !== "mask",
        currentTime: F.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: F.mode
      }), ge({ cause: "frame_view" });
      return;
    }
    if (c === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(z instanceof HTMLVideoElement) || !k.videoTransport.hasAudio) return;
      const M = !z.muted;
      z.muted = M, !M && Number(z.volume || 0) <= 0 && (z.volume = Math.max(0.01, Number(k.videoTransport.volume || 1))), cr({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: !!z.getAttribute("src") && m.primaryTool !== "paint" && m.primaryTool !== "mask",
        currentTime: F.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: F.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: z.muted,
        volume: Number(z.volume ?? k.videoTransport.volume ?? 1)
      });
      return;
    }
    if (!i) {
      if (c === "aspect") {
        m.cutoutAspectOpen = !m.cutoutAspectOpen, m.menuSize.measured = !1, $e(), ge();
        return;
      }
      if (c === "aspect-set") {
        const M = ut();
        if (!M) return;
        const L = String(s.getAttribute("data-aspect") || "1:1");
        Eg(M, L), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, Rs(), dt(), _t(), $e(), ge();
        return;
      }
      if (c === "rotate-90") {
        const M = ut();
        if (!M) return;
        Dg(M), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, Rs(), dt(), _t(), $e(), ge();
        return;
      }
      if (c === "bring-front") {
        Lg();
        return;
      }
      if (c === "send-back") {
        Rg();
        return;
      }
      if (c === "duplicate") {
        Tg();
        return;
      }
      if (c === "replace-image") {
        Ng();
        return;
      }
      if (c === "toggle-lock") {
        Wh();
        return;
      }
      if (c === "back-initial") {
        ep();
        return;
      }
      if (c === "toggle-visible") {
        Qh();
        return;
      }
      if (c === "delete") {
        iu();
        return;
      }
    }
    if (c === "reset-view") {
      hn(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      m.showGrid = !m.showGrid, sx(e == null ? void 0 : e.id, m.showGrid), js(), ge();
      return;
    }
    if (c === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), tm();
      return;
    }
    if (c === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const M = !m.outputPreviewExpanded;
      m.outputPreviewExpanded = M, m.outputPreviewAnimFrom = m.outputPreviewAnim, m.outputPreviewAnimTo = M ? 1 : 0, m.outputPreviewAnimStartTs = performance.now(), _u(), ge();
      return;
    }
    const p = r.target.closest("[data-paint-history-index]");
    if (!p) return;
    const g = Number(p.getAttribute("data-paint-history-index")), _ = m.customPaintHistory[g];
    _ && (m.customPaintColor = cn(_), m.paintColor = cn(_), en());
  }), T.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(z instanceof HTMLVideoElement)) return;
      Yr();
      const g = Y(Number(o.value || 0), 0, Number(k.videoTransport.duration || 0));
      F.mode = "scrub", !F.seeking && !z.paused && !z.ended && (F.resumeAfterScrub = !0, z.pause()), F.editorTime = g, ot(g), cr({
        ready: !!z.getAttribute("src"),
        playing: !1,
        visible: !!z.getAttribute("src") && m.primaryTool !== "paint" && m.primaryTool !== "mask",
        currentTime: g,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: "scrub"
      }), Number(U.__panoFrameIdx || 0) > 0 && ($.backgroundDirty = !0, $.dirty = !0, ge({ cause: "frame_view" })), bs(g);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(z instanceof HTMLVideoElement)) return;
      const g = Y(Number(s.value || 0), 0, 1);
      z.volume = g, z.muted = g <= 1e-4, cr({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: !!z.getAttribute("src") && m.primaryTool !== "paint" && m.primaryTool !== "mask",
        currentTime: F.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: F.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: z.muted,
        volume: g
      });
      return;
    }
    const c = r.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const g = Math.max(1, Math.min(120, Math.round(Number(c.value)))), _ = fr(m.primaryTool === "paint" ? m.paintTool : m.maskTool);
      m.brushSizes[_] = g, en(), Bg();
      return;
    }
    const p = r.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const g = { ...m.customPaintColor, a: Y(Number(p.value) / 100, 0, 1) };
      m.customPaintColor = cn(g), m.paintColor = cn(g), en();
    }
  }), T.addEventListener("change", (r) => {
    if (r.target.closest("[data-video-seek]")) {
      if (!(z instanceof HTMLVideoElement)) return;
      F.pendingPlaybackResume = !!F.resumeAfterScrub, F.resumeAfterScrub = !1, F.pendingPlaybackResume || (F.mode = "scrub"), F.seeking || (F.pendingPlaybackResume ? (F.pendingPlaybackResume = !1, F.mode = "playback", z.play().catch(() => {
      })) : (Wr(), ge({ cause: "frame_view" })));
      return;
    }
    r.target.closest("[data-paint-size-slider]") && $a();
  }), T.addEventListener("pointerup", (r) => {
    r.target.closest("[data-paint-size-slider]") && $a();
  }), T.addEventListener("pointercancel", (r) => {
    r.target.closest("[data-paint-size-slider]") && $a();
  }), T.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && $a();
  }), T.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !T.contains(o) || ie.target !== o && (ie.target = o, ie.timer && clearTimeout(ie.timer), ie.timer = window.setTimeout(() => {
      ie.target === o && Jg(o);
    }, 220));
  }), T.addEventListener("pointerout", (r) => {
    var c, p;
    const o = r.target.closest("[data-tip]");
    !o || ie.target !== o || (r.relatedTarget instanceof Element ? (p = (c = r.relatedTarget).closest) == null ? void 0 : p.call(c, "[data-tip]") : null) === o || Ba();
  }), T.addEventListener("pointerdown", () => {
    Ba();
  });
  const Qg = (r, o) => {
    var y;
    if (!Ae) return;
    const s = Ae.getBoundingClientRect(), c = Y((r - s.left) / Math.max(1, s.width), 0, 1), p = 1 - Y((o - s.top) / Math.max(1, s.height), 0, 1), g = pc(m.customPaintColor), _ = { ...hc(g.h, c, p), a: Number(((y = m.customPaintColor) == null ? void 0 : y.a) ?? 1) };
    m.customPaintColor = cn(_), m.paintColor = cn(_), en();
  }, em = (r) => {
    var g;
    if (!Le) return;
    const o = Le.getBoundingClientRect(), s = Y((r - o.left) / Math.max(1, o.width), 0, 1), c = pc(m.customPaintColor), p = { ...hc(s, c.s, c.v), a: Number(((g = m.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    m.customPaintColor = cn(p), m.paintColor = cn(p), en();
  }, mu = (r, o) => {
    const s = r.pointerId;
    o(r);
    const c = (g) => {
      g.pointerId === s && o(g);
    }, p = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  Ae && (Ae.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), mu(r, (o) => Qg(o.clientX, o.clientY));
  }), Le && (Le.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), mu(r, (o) => em(o.clientX));
  }), T.addEventListener("click", (r) => {
    var p;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", c = (p = k.confirmDialog) == null ? void 0 : p.resolve;
    k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(s);
  });
  const vu = () => {
    const r = !!m.fullscreen;
    ji(k.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Rt.fullscreen_close : Rt.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ua = (r) => {
    const o = !!r;
    m.fullscreen !== o && (m.fullscreen = o, T.classList.toggle("pano-modal-fullscreen", o), o ? (m.fullscreenPrevShowGrid = !!m.showGrid, m.showGrid = !1) : m.fullscreenPrevShowGrid !== null && (m.showGrid = !!m.fullscreenPrevShowGrid, m.fullscreenPrevShowGrid = null), js(), vu(), ge());
  }, bu = () => document.fullscreenElement === O, tm = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Ua(!m.fullscreen);
        return;
      }
      bu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = O.requestFullscreen) == null ? void 0 : r.call(O));
    } catch {
      Ua(!m.fullscreen);
    }
  }, yu = () => {
    document.fullscreenEnabled && Ua(bu());
  };
  document.addEventListener("fullscreenchange", yu), vu();
  const _u = () => {
    const r = !!m.outputPreviewExpanded;
    k.outputPreviewToggle.icon = r ? Rt.fullscreen_close : Rt.fullscreen, k.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", k.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  _u();
  const zs = e.onExecuted, $s = e.onConnectionsChange;
  let Bs = null, Us = null, Ks = null;
  !i && t === "stickers" && (Ks = (r = "sync") => {
    Ll(r);
  }, e.__panoExternalStickerSync = Ks, Bs = function(...o) {
    var s;
    typeof zs == "function" && zs.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Bs, Us = function(...o) {
    var s;
    typeof $s == "function" && $s.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Us), i || Af.set(String(e.id ?? "0"), () => jl());
  let ii = null;
  const ai = async () => ii || (ii = (async () => {
    var r, o, s, c, p, g, _, y, x, N, C;
    return Af.delete(String(e.id ?? "0")), i || mn(), document.fullscreenElement === O && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", yu), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (p = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || p.call(c, !0, !0), (y = (_ = (g = br) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || y.call(_, !0, !0), Ba(), xg(), z instanceof HTMLVideoElement && z.pause(), he.forEach((M) => {
      try {
        M();
      } catch {
      }
    }), (x = ve == null ? void 0 : ve.dispose) == null || x.call(ve), (N = D == null ? void 0 : D.unmount) == null || N.call(D), (C = pe == null ? void 0 : pe.dispose) == null || C.call(pe), lt(!1), window.removeEventListener("keydown", xu, !0), window.removeEventListener("keydown", wu, !0), window.removeEventListener("keydown", Ka, !0), window.removeEventListener("keyup", Ka, !0), window.removeEventListener("keydown", Su, !0), window.removeEventListener("dragenter", fu, !0), window.removeEventListener("dragover", du, !0), window.removeEventListener("dragleave", hu, !0), window.removeEventListener("drop", pu, !0), !i && t === "stickers" && (e.onExecuted === Bs && (e.onExecuted = zs), e.onConnectionsChange === Us && (e.onConnectionsChange = $s), e.__panoExternalStickerSync === Ks && (e.__panoExternalStickerSync = null)), R.unmount(), V.remove(), Fg(), ii = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), ii = null, !1)), ii), xu = (r) => {
    var o, s, c, p;
    if (r.key === "Escape") {
      if (m.fullscreen && document.fullscreenElement === O) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (m.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (c = r.stopImmediatePropagation) == null || c.call(r), Ua(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (p = r.stopImmediatePropagation) == null || p.call(r), ai();
    }
  }, wu = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), c = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || c === 46) && !(o === "Backspace" || s === "Backspace" || c === 8)) return;
    const _ = r.target, y = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    y === "INPUT" || y === "TEXTAREA" || _ != null && _.isContentEditable || !ut() || (iu(), r.preventDefault(), r.stopPropagation());
  }, Ka = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    m.marqueeModifier !== o && (m.marqueeModifier = o, mt(m.pointerPos));
  }, Su = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const c = r.target, p = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = eu();
    r.shiftKey && !_ || !r.shiftKey && !g || (Ls(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", xu, !0), window.addEventListener("keydown", wu, !0), window.addEventListener("keydown", Ka, !0), window.addEventListener("keyup", Ka, !0), window.addEventListener("keydown", Su, !0), O.addEventListener("pointerdown", (r) => {
    r.target === O && ai();
  }), up(), !i && t === "stickers" && Ll("open"), Mg(), dt(), Hs(), en(), je(), _s(), Yr(), Ql(), mt(m.pointerPos), ge(), $.rafId = requestAnimationFrame(Ds);
}
function Rf(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (v) => {
    var b, h;
    try {
      (b = v.__panoDomRestore) == null || b.call(v);
    } catch {
    }
    try {
      (h = v.__panoLegacyRestore) == null || h.call(v);
    } catch {
    }
    v.__panoDomPreview = null, v.__panoLegacyPreviewHooked = !1, v.__panoPreviewHooked = !1, v.__panoPreviewAttached = !1, v.__panoPreviewMountKey = null;
  };
  function l(v) {
    var P;
    const b = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === b) return;
    a(v), n === "PanoramaStickers" && px(v), yl(v), mx(v, Ko);
    const w = vn(v, Ko);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const k = w.callback;
      w.callback = (V) => {
        var O;
        const R = k ? k(V) : void 0;
        return (O = v.setDirtyCanvas) == null || O.call(v, !0, !1), R;
      };
    }
    const S = vn(v, "bg_color");
    if (S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (P = S.callback) == null || P.call(S, "#00ff00")), n === "PanoramaStickers") {
      Vc(v, i, () => oa(v, "stickers"));
      {
        v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = b;
        return;
      }
    }
    Vc(v, i, () => oa(v, "cutout")), bb(v, {
      buttonText: i,
      onOpen: () => oa(v, "cutout")
    }), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = b;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const v = u ? u.apply(this, arguments) : void 0;
    return l(this), v;
  };
  const d = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const v = d ? d.apply(this, arguments) : void 0;
    return this.widgets && l(this), v;
  };
  const f = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const v = f ? f.apply(this, arguments) : void 0;
    return this.widgets && l(this), v;
  };
}
function Cx(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = n ? n.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
  const i = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
}
function Ax(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    yl(e), Vc(e, "Open Preview", () => oa(e, "stickers", { readOnly: !0, hideSidebar: !1 })), vb(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (l) => oa(l, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
br.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Rf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Rf(e, t, "PanoramaCutout", "Open Cutout Editor"), Do(n) && Cx(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    yl(e), Do(t) && Ax(e);
  }
});
