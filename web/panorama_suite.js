import * as co from "../../scripts/app.js";
import { app as ur } from "../../scripts/app.js";
import { api as Jt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Lc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const rt = {}, di = [], Fr = () => {
}, Ff = () => !1, $o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bo = (e) => e.startsWith("onUpdate:"), Kt = Object.assign, Rc = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Kp = Object.prototype.hasOwnProperty, Ze = (e, t) => Kp.call(e, t), Re = Array.isArray, hi = (e) => ha(e) === "[object Map]", Vf = (e) => ha(e) === "[object Set]", mu = (e) => ha(e) === "[object Date]", He = (e) => typeof e == "function", xt = (e) => typeof e == "string", Vr = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", Hf = (e) => (et(e) || He(e)) && He(e.then) && He(e.catch), zf = Object.prototype.toString, ha = (e) => zf.call(e), Wp = (e) => ha(e).slice(8, -1), jf = (e) => ha(e) === "[object Object]", Oc = (e) => xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gi = /* @__PURE__ */ Lc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Uo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Yp = /-\w/g, Qt = Uo(
  (e) => e.replace(Yp, (t) => t.slice(1).toUpperCase())
), qp = /\B([A-Z])/g, Vn = Uo(
  (e) => e.replace(qp, "-$1").toLowerCase()
), Go = Uo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Hs = Uo(
  (e) => e ? `on${Go(e)}` : ""
), Rr = (e, t) => !Object.is(e, t), zs = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, $f = (e, t, r, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: r
  });
}, Xp = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let yu;
const Ko = () => yu || (yu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $t(e) {
  if (Re(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const i = e[r], a = xt(i) ? e0(i) : $t(i);
      if (a)
        for (const c in a)
          t[c] = a[c];
    }
    return t;
  } else if (xt(e) || et(e))
    return e;
}
const Zp = /;(?![^(]*\))/g, Jp = /:([^]+)/, Qp = /\/\*[^]*?\*\//g;
function e0(e) {
  const t = {};
  return e.replace(Qp, "").split(Zp).forEach((r) => {
    if (r) {
      const i = r.split(Jp);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function vt(e) {
  let t = "";
  if (xt(e))
    t = e;
  else if (Re(e))
    for (let r = 0; r < e.length; r++) {
      const i = vt(e[r]);
      i && (t += i + " ");
    }
  else if (et(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const t0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", r0 = /* @__PURE__ */ Lc(t0);
function Bf(e) {
  return !!e || e === "";
}
function n0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let i = 0; r && i < e.length; i++)
    r = Fc(e[i], t[i]);
  return r;
}
function Fc(e, t) {
  if (e === t) return !0;
  let r = mu(e), i = mu(t);
  if (r || i)
    return r && i ? e.getTime() === t.getTime() : !1;
  if (r = Vr(e), i = Vr(t), r || i)
    return e === t;
  if (r = Re(e), i = Re(t), r || i)
    return r && i ? n0(e, t) : !1;
  if (r = et(e), i = et(t), r || i) {
    if (!r || !i)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(t).length;
    if (a !== c)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), g = t.hasOwnProperty(u);
      if (f && !g || !f && g || !Fc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Uf = (e) => !!(e && e.__v_isRef === !0), _t = (e) => xt(e) ? e : e == null ? "" : Re(e) || et(e) && (e.toString === zf || !He(e.toString)) ? Uf(e) ? _t(e.value) : JSON.stringify(e, Gf, 2) : String(e), Gf = (e, t) => Uf(t) ? Gf(e, t.value) : hi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [i, a], c) => (r[js(i, c) + " =>"] = a, r),
    {}
  )
} : Vf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => js(r))
} : Vr(t) ? js(t) : et(t) && !Re(t) && !jf(t) ? String(t) : t, js = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Vr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ir;
class i0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ir, !t && ir && (this.index = (ir.scopes || (ir.scopes = [])).push(
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
      const r = ir;
      try {
        return ir = this, t();
      } finally {
        ir = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ir, ir = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ir = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, i;
      for (r = 0, i = this.effects.length; r < i; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, i = this.cleanups.length; r < i; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, i = this.scopes.length; r < i; r++)
          this.scopes[r].stop(!0);
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
function a0() {
  return ir;
}
let at;
const $s = /* @__PURE__ */ new WeakSet();
class Kf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ir && ir.active && ir.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $s.has(this) && ($s.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bu(this), qf(this);
    const t = at, r = kr;
    at = this, kr = !0;
    try {
      return this.fn();
    } finally {
      Xf(this), at = t, kr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zc(t);
      this.deps = this.depsTail = void 0, bu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $s.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    uc(this) && this.run();
  }
  get dirty() {
    return uc(this);
  }
}
let Wf = 0, Ki, Wi;
function Yf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wi, Wi = e;
    return;
  }
  e.next = Ki, Ki = e;
}
function Vc() {
  Wf++;
}
function Hc() {
  if (--Wf > 0)
    return;
  if (Wi) {
    let t = Wi;
    for (Wi = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Ki; ) {
    let t = Ki;
    for (Ki = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function qf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xf(e) {
  let t, r = e.depsTail, i = r;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === r && (r = a), zc(i), o0(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = r;
}
function uc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ia) || (e.globalVersion = ia, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !uc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = at, i = kr;
  at = e, kr = !0;
  try {
    qf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Rr(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    at = r, kr = i, Xf(e), e.flags &= -3;
  }
}
function zc(e, t = !1) {
  const { dep: r, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), r.subs === e && (r.subs = i, !i && r.computed)) {
    r.computed.flags &= -5;
    for (let c = r.computed.deps; c; c = c.nextDep)
      zc(c, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function o0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let kr = !0;
const Jf = [];
function Jr() {
  Jf.push(kr), kr = !1;
}
function Qr() {
  const e = Jf.pop();
  kr = e === void 0 ? !0 : e;
}
function bu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = at;
    at = void 0;
    try {
      t();
    } finally {
      at = r;
    }
  }
}
let ia = 0;
class s0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class jc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!at || !kr || at === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== at)
      r = this.activeLink = new s0(at, this), at.deps ? (r.prevDep = at.depsTail, at.depsTail.nextDep = r, at.depsTail = r) : at.deps = at.depsTail = r, Qf(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const i = r.nextDep;
      i.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = i), r.prevDep = at.depsTail, r.nextDep = void 0, at.depsTail.nextDep = r, at.depsTail = r, at.deps === r && (at.deps = i);
    }
    return r;
  }
  trigger(t) {
    this.version++, ia++, this.notify(t);
  }
  notify(t) {
    Vc();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Hc();
    }
  }
}
function Qf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Qf(i);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const fc = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ Symbol(
  ""
), dc = /* @__PURE__ */ Symbol(
  ""
), aa = /* @__PURE__ */ Symbol(
  ""
);
function Bt(e, t, r) {
  if (kr && at) {
    let i = fc.get(e);
    i || fc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(r);
    a || (i.set(r, a = new jc()), a.map = i, a.key = r), a.track();
  }
}
function qr(e, t, r, i, a, c) {
  const u = fc.get(e);
  if (!u) {
    ia++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (Vc(), t === "clear")
    u.forEach(f);
  else {
    const g = Re(e), y = g && Oc(r);
    if (g && r === "length") {
      const v = Number(i);
      u.forEach((h, w) => {
        (w === "length" || w === aa || !Vr(w) && w >= v) && f(h);
      });
    } else
      switch ((r !== void 0 || u.has(void 0)) && f(u.get(r)), y && f(u.get(aa)), t) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get(An)), hi(e) && f(u.get(dc)));
          break;
        case "delete":
          g || (f(u.get(An)), hi(e) && f(u.get(dc)));
          break;
        case "set":
          hi(e) && f(u.get(An));
          break;
      }
  }
  Hc();
}
function ri(e) {
  const t = /* @__PURE__ */ Xe(e);
  return t === e ? t : (Bt(t, "iterate", aa), /* @__PURE__ */ br(e) ? t : t.map(Pr));
}
function Wo(e) {
  return Bt(e = /* @__PURE__ */ Xe(e), "iterate", aa), e;
}
function Dr(e, t) {
  return /* @__PURE__ */ en(e) ? vi(/* @__PURE__ */ In(e) ? Pr(t) : t) : Pr(t);
}
const c0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bs(this, Symbol.iterator, (e) => Dr(this, e));
  },
  concat(...e) {
    return ri(this).concat(
      ...e.map((t) => Re(t) ? ri(t) : t)
    );
  },
  entries() {
    return Bs(this, "entries", (e) => (e[1] = Dr(this, e[1]), e));
  },
  every(e, t) {
    return $r(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $r(
      this,
      "filter",
      e,
      t,
      (r) => r.map((i) => Dr(this, i)),
      arguments
    );
  },
  find(e, t) {
    return $r(
      this,
      "find",
      e,
      t,
      (r) => Dr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return $r(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $r(
      this,
      "findLast",
      e,
      t,
      (r) => Dr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return $r(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return $r(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Us(this, "includes", e);
  },
  indexOf(...e) {
    return Us(this, "indexOf", e);
  },
  join(e) {
    return ri(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Us(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $r(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ti(this, "pop");
  },
  push(...e) {
    return Ti(this, "push", e);
  },
  reduce(e, ...t) {
    return vu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vu(this, "reduceRight", e, t);
  },
  shift() {
    return Ti(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $r(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ti(this, "splice", e);
  },
  toReversed() {
    return ri(this).toReversed();
  },
  toSorted(e) {
    return ri(this).toSorted(e);
  },
  toSpliced(...e) {
    return ri(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ti(this, "unshift", e);
  },
  values() {
    return Bs(this, "values", (e) => Dr(this, e));
  }
};
function Bs(e, t, r) {
  const i = Wo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ br(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.done || (c.value = r(c.value)), c;
  }), a;
}
const l0 = Array.prototype;
function $r(e, t, r, i, a, c) {
  const u = Wo(e), f = u !== e && !/* @__PURE__ */ br(e), g = u[t];
  if (g !== l0[t]) {
    const h = g.apply(e, c);
    return f ? Pr(h) : h;
  }
  let y = r;
  u !== e && (f ? y = function(h, w) {
    return r.call(this, Dr(e, h), w, e);
  } : r.length > 2 && (y = function(h, w) {
    return r.call(this, h, w, e);
  }));
  const v = g.call(u, y, i);
  return f && a ? a(v) : v;
}
function vu(e, t, r, i) {
  const a = Wo(e), c = a !== e && !/* @__PURE__ */ br(e);
  let u = r, f = !1;
  a !== e && (c ? (f = i.length === 0, u = function(y, v, h) {
    return f && (f = !1, y = Dr(e, y)), r.call(this, y, Dr(e, v), h, e);
  }) : r.length > 3 && (u = function(y, v, h) {
    return r.call(this, y, v, h, e);
  }));
  const g = a[t](u, ...i);
  return f ? Dr(e, g) : g;
}
function Us(e, t, r) {
  const i = /* @__PURE__ */ Xe(e);
  Bt(i, "iterate", aa);
  const a = i[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ Uc(r[0]) ? (r[0] = /* @__PURE__ */ Xe(r[0]), i[t](...r)) : a;
}
function Ti(e, t, r = []) {
  Jr(), Vc();
  const i = (/* @__PURE__ */ Xe(e))[t].apply(e, r);
  return Hc(), Qr(), i;
}
const u0 = /* @__PURE__ */ Lc("__proto__,__v_isRef,__isVue"), ed = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vr)
);
function f0(e) {
  Vr(e) || (e = String(e));
  const t = /* @__PURE__ */ Xe(this);
  return Bt(t, "has", e), t.hasOwnProperty(e);
}
class td {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, i) {
    if (r === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, c = this._isShallow;
    if (r === "__v_isReactive")
      return !a;
    if (r === "__v_isReadonly")
      return a;
    if (r === "__v_isShallow")
      return c;
    if (r === "__v_raw")
      return i === (a ? c ? x0 : ad : c ? id : nd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = Re(t);
    if (!a) {
      let g;
      if (u && (g = c0[r]))
        return g;
      if (r === "hasOwnProperty")
        return f0;
    }
    const f = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Gt(t) ? t : i
    );
    if ((Vr(r) ? ed.has(r) : u0(r)) || (a || Bt(t, "get", r), c))
      return f;
    if (/* @__PURE__ */ Gt(f)) {
      const g = u && Oc(r) ? f : f.value;
      return a && et(g) ? /* @__PURE__ */ gc(g) : g;
    }
    return et(f) ? a ? /* @__PURE__ */ gc(f) : /* @__PURE__ */ Yo(f) : f;
  }
}
class rd extends td {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, i, a) {
    let c = t[r];
    const u = Re(t) && Oc(r);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ en(c);
      if (!/* @__PURE__ */ br(i) && !/* @__PURE__ */ en(i) && (c = /* @__PURE__ */ Xe(c), i = /* @__PURE__ */ Xe(i)), !u && /* @__PURE__ */ Gt(c) && !/* @__PURE__ */ Gt(i))
        return y || (c.value = i), !0;
    }
    const f = u ? Number(r) < t.length : Ze(t, r), g = Reflect.set(
      t,
      r,
      i,
      /* @__PURE__ */ Gt(t) ? t : a
    );
    return t === /* @__PURE__ */ Xe(a) && (f ? Rr(i, c) && qr(t, "set", r, i) : qr(t, "add", r, i)), g;
  }
  deleteProperty(t, r) {
    const i = Ze(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && i && qr(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const i = Reflect.has(t, r);
    return (!Vr(r) || !ed.has(r)) && Bt(t, "has", r), i;
  }
  ownKeys(t) {
    return Bt(
      t,
      "iterate",
      Re(t) ? "length" : An
    ), Reflect.ownKeys(t);
  }
}
class d0 extends td {
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
const h0 = /* @__PURE__ */ new rd(), g0 = /* @__PURE__ */ new d0(), p0 = /* @__PURE__ */ new rd(!0);
const hc = (e) => e, za = (e) => Reflect.getPrototypeOf(e);
function m0(e, t, r) {
  return function(...i) {
    const a = this.__v_raw, c = /* @__PURE__ */ Xe(a), u = hi(c), f = e === "entries" || e === Symbol.iterator && u, g = e === "keys" && u, y = a[e](...i), v = r ? hc : t ? vi : Pr;
    return !t && Bt(
      c,
      "iterate",
      g ? dc : An
    ), Kt(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: h, done: w } = y.next();
          return w ? { value: h, done: w } : {
            value: f ? [v(h[0]), v(h[1])] : v(h),
            done: w
          };
        }
      }
    );
  };
}
function ja(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function y0(e, t) {
  const r = {
    get(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ Xe(c), f = /* @__PURE__ */ Xe(a);
      e || (Rr(a, f) && Bt(u, "get", a), Bt(u, "get", f));
      const { has: g } = za(u), y = t ? hc : e ? vi : Pr;
      if (g.call(u, a))
        return y(c.get(a));
      if (g.call(u, f))
        return y(c.get(f));
      c !== u && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Bt(/* @__PURE__ */ Xe(a), "iterate", An), a.size;
    },
    has(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ Xe(c), f = /* @__PURE__ */ Xe(a);
      return e || (Rr(a, f) && Bt(u, "has", a), Bt(u, "has", f)), a === f ? c.has(a) : c.has(a) || c.has(f);
    },
    forEach(a, c) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ Xe(f), y = t ? hc : e ? vi : Pr;
      return !e && Bt(g, "iterate", An), f.forEach((v, h) => a.call(c, y(v), y(h), u));
    }
  };
  return Kt(
    r,
    e ? {
      add: ja("add"),
      set: ja("set"),
      delete: ja("delete"),
      clear: ja("clear")
    } : {
      add(a) {
        const c = /* @__PURE__ */ Xe(this), u = za(c), f = /* @__PURE__ */ Xe(a), g = !t && !/* @__PURE__ */ br(a) && !/* @__PURE__ */ en(a) ? f : a;
        return u.has.call(c, g) || Rr(a, g) && u.has.call(c, a) || Rr(f, g) && u.has.call(c, f) || (c.add(g), qr(c, "add", g, g)), this;
      },
      set(a, c) {
        !t && !/* @__PURE__ */ br(c) && !/* @__PURE__ */ en(c) && (c = /* @__PURE__ */ Xe(c));
        const u = /* @__PURE__ */ Xe(this), { has: f, get: g } = za(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ Xe(a), y = f.call(u, a));
        const v = g.call(u, a);
        return u.set(a, c), y ? Rr(c, v) && qr(u, "set", a, c) : qr(u, "add", a, c), this;
      },
      delete(a) {
        const c = /* @__PURE__ */ Xe(this), { has: u, get: f } = za(c);
        let g = u.call(c, a);
        g || (a = /* @__PURE__ */ Xe(a), g = u.call(c, a)), f && f.call(c, a);
        const y = c.delete(a);
        return g && qr(c, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Xe(this), c = a.size !== 0, u = a.clear();
        return c && qr(
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
    r[a] = m0(a, e, t);
  }), r;
}
function $c(e, t) {
  const r = y0(e, t);
  return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(r, a) && a in i ? r : i,
    a,
    c
  );
}
const b0 = {
  get: /* @__PURE__ */ $c(!1, !1)
}, v0 = {
  get: /* @__PURE__ */ $c(!1, !0)
}, _0 = {
  get: /* @__PURE__ */ $c(!0, !1)
};
const nd = /* @__PURE__ */ new WeakMap(), id = /* @__PURE__ */ new WeakMap(), ad = /* @__PURE__ */ new WeakMap(), x0 = /* @__PURE__ */ new WeakMap();
function w0(e) {
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
function S0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : w0(Wp(e));
}
// @__NO_SIDE_EFFECTS__
function Yo(e) {
  return /* @__PURE__ */ en(e) ? e : Bc(
    e,
    !1,
    h0,
    b0,
    nd
  );
}
// @__NO_SIDE_EFFECTS__
function N0(e) {
  return Bc(
    e,
    !1,
    p0,
    v0,
    id
  );
}
// @__NO_SIDE_EFFECTS__
function gc(e) {
  return Bc(
    e,
    !0,
    g0,
    _0,
    ad
  );
}
function Bc(e, t, r, i, a) {
  if (!et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const c = S0(e);
  if (c === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    c === 2 ? i : r
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  return /* @__PURE__ */ en(e) ? /* @__PURE__ */ In(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Uc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Xe(t) : e;
}
function M0(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && $f(e, "__v_skip", !0), e;
}
const Pr = (e) => et(e) ? /* @__PURE__ */ Yo(e) : e, vi = (e) => et(e) ? /* @__PURE__ */ gc(e) : e;
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pc(e) {
  return k0(e, !1);
}
function k0(e, t) {
  return /* @__PURE__ */ Gt(e) ? e : new P0(e, t);
}
class P0 {
  constructor(t, r) {
    this.dep = new jc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ Xe(t), this._value = r ? t : Pr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ br(t) || /* @__PURE__ */ en(t);
    t = i ? t : /* @__PURE__ */ Xe(t), Rr(t, r) && (this._rawValue = t, this._value = i ? t : Pr(t), this.dep.trigger());
  }
}
function ui(e) {
  return /* @__PURE__ */ Gt(e) ? e.value : e;
}
const C0 = {
  get: (e, t, r) => t === "__v_raw" ? e : ui(Reflect.get(e, t, r)),
  set: (e, t, r, i) => {
    const a = e[t];
    return /* @__PURE__ */ Gt(a) && !/* @__PURE__ */ Gt(r) ? (a.value = r, !0) : Reflect.set(e, t, r, i);
  }
};
function od(e) {
  return /* @__PURE__ */ In(e) ? e : new Proxy(e, C0);
}
class A0 {
  constructor(t, r, i) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new jc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ia - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    at !== this)
      return Yf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function I0(e, t, r = !1) {
  let i, a;
  return He(e) ? i = e : (i = e.get, a = e.set), new A0(i, a, r);
}
const $a = {}, xo = /* @__PURE__ */ new WeakMap();
let kn;
function T0(e, t = !1, r = kn) {
  if (r) {
    let i = xo.get(r);
    i || xo.set(r, i = []), i.push(e);
  }
}
function E0(e, t, r = rt) {
  const { immediate: i, deep: a, once: c, scheduler: u, augmentJob: f, call: g } = r, y = (I) => a ? I : /* @__PURE__ */ br(I) || a === !1 || a === 0 ? Xr(I, 1) : Xr(I);
  let v, h, w, P, C = !1, A = !1;
  if (/* @__PURE__ */ Gt(e) ? (h = () => e.value, C = /* @__PURE__ */ br(e)) : /* @__PURE__ */ In(e) ? (h = () => y(e), C = !0) : Re(e) ? (A = !0, C = e.some((I) => /* @__PURE__ */ In(I) || /* @__PURE__ */ br(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ Gt(I))
      return I.value;
    if (/* @__PURE__ */ In(I))
      return y(I);
    if (He(I))
      return g ? g(I, 2) : I();
  })) : He(e) ? t ? h = g ? () => g(e, 2) : e : h = () => {
    if (w) {
      Jr();
      try {
        w();
      } finally {
        Qr();
      }
    }
    const I = kn;
    kn = v;
    try {
      return g ? g(e, 3, [P]) : e(P);
    } finally {
      kn = I;
    }
  } : h = Fr, t && a) {
    const I = h, U = a === !0 ? 1 / 0 : a;
    h = () => Xr(I(), U);
  }
  const j = a0(), V = () => {
    v.stop(), j && j.active && Rc(j.effects, v);
  };
  if (c && t) {
    const I = t;
    t = (...U) => {
      I(...U), V();
    };
  }
  let O = A ? new Array(e.length).fill($a) : $a;
  const T = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (t) {
        const U = v.run();
        if (a || C || (A ? U.some((ne, se) => Rr(ne, O[se])) : Rr(U, O))) {
          w && w();
          const ne = kn;
          kn = v;
          try {
            const se = [
              U,
              // pass undefined as the old value when it's changed for the first time
              O === $a ? void 0 : A && O[0] === $a ? [] : O,
              P
            ];
            O = U, g ? g(t, 3, se) : (
              // @ts-expect-error
              t(...se)
            );
          } finally {
            kn = ne;
          }
        }
      } else
        v.run();
  };
  return f && f(T), v = new Kf(h), v.scheduler = u ? () => u(T, !1) : T, P = (I) => T0(I, !1, v), w = v.onStop = () => {
    const I = xo.get(v);
    if (I) {
      if (g)
        g(I, 4);
      else
        for (const U of I) U();
      xo.delete(v);
    }
  }, t ? i ? T(!0) : O = v.run() : u ? u(T.bind(null, !0), !0) : v.run(), V.pause = v.pause.bind(v), V.resume = v.resume.bind(v), V.stop = V, V;
}
function Xr(e, t = 1 / 0, r) {
  if (t <= 0 || !et(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Gt(e))
    Xr(e.value, t, r);
  else if (Re(e))
    for (let i = 0; i < e.length; i++)
      Xr(e[i], t, r);
  else if (Vf(e) || hi(e))
    e.forEach((i) => {
      Xr(i, t, r);
    });
  else if (jf(e)) {
    for (const i in e)
      Xr(e[i], t, r);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Xr(e[i], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ga(e, t, r, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    qo(a, t, r);
  }
}
function Hr(e, t, r, i) {
  if (He(e)) {
    const a = ga(e, t, r, i);
    return a && Hf(a) && a.catch((c) => {
      qo(c, t, r);
    }), a;
  }
  if (Re(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Hr(e[c], t, r, i));
    return a;
  }
}
function qo(e, t, r, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = t && t.appContext.config || rt;
  if (t) {
    let f = t.parent;
    const g = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; f; ) {
      const v = f.ec;
      if (v) {
        for (let h = 0; h < v.length; h++)
          if (v[h](e, g, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (c) {
      Jr(), ga(c, null, 10, [
        e,
        g,
        y
      ]), Qr();
      return;
    }
  }
  D0(e, r, a, i, u);
}
function D0(e, t, r, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Xt = [];
let Er = -1;
const gi = [];
let dn = null, oi = 0;
const sd = /* @__PURE__ */ Promise.resolve();
let wo = null;
function Gc(e) {
  const t = wo || sd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function L0(e) {
  let t = Er + 1, r = Xt.length;
  for (; t < r; ) {
    const i = t + r >>> 1, a = Xt[i], c = oa(a);
    c < e || c === e && a.flags & 2 ? t = i + 1 : r = i;
  }
  return t;
}
function Kc(e) {
  if (!(e.flags & 1)) {
    const t = oa(e), r = Xt[Xt.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= oa(r) ? Xt.push(e) : Xt.splice(L0(t), 0, e), e.flags |= 1, cd();
  }
}
function cd() {
  wo || (wo = sd.then(ud));
}
function R0(e) {
  Re(e) ? gi.push(...e) : dn && e.id === -1 ? dn.splice(oi + 1, 0, e) : e.flags & 1 || (gi.push(e), e.flags |= 1), cd();
}
function _u(e, t, r = Er + 1) {
  for (; r < Xt.length; r++) {
    const i = Xt[r];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Xt.splice(r, 1), r--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function ld(e) {
  if (gi.length) {
    const t = [...new Set(gi)].sort(
      (r, i) => oa(r) - oa(i)
    );
    if (gi.length = 0, dn) {
      dn.push(...t);
      return;
    }
    for (dn = t, oi = 0; oi < dn.length; oi++) {
      const r = dn[oi];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    dn = null, oi = 0;
  }
}
const oa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ud(e) {
  try {
    for (Er = 0; Er < Xt.length; Er++) {
      const t = Xt[Er];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ga(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Er < Xt.length; Er++) {
      const t = Xt[Er];
      t && (t.flags &= -2);
    }
    Er = -1, Xt.length = 0, ld(), wo = null, (Xt.length || gi.length) && ud();
  }
}
let fr = null, fd = null;
function So(e) {
  const t = fr;
  return fr = e, fd = e && e.type.__scopeId || null, t;
}
function O0(e, t = fr, r) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Eu(-1);
    const c = So(t);
    let u;
    try {
      u = e(...a);
    } finally {
      So(c), i._d && Eu(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Wc(e, t) {
  if (fr === null)
    return e;
  const r = Qo(fr), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, u, f, g = rt] = t[a];
    c && (He(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && Xr(u), i.push({
      dir: c,
      instance: r,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: g
    }));
  }
  return e;
}
function xn(e, t, r, i) {
  const a = e.dirs, c = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    c && (f.oldValue = c[u].value);
    let g = f.dir[i];
    g && (Jr(), Hr(g, r, 8, [
      e.el,
      f,
      e,
      t
    ]), Qr());
  }
}
function F0(e, t) {
  if (Ut) {
    let r = Ut.provides;
    const i = Ut.parent && Ut.parent.provides;
    i === r && (r = Ut.provides = Object.create(i)), r[e] = t;
  }
}
function lo(e, t, r = !1) {
  const i = Fm();
  if (i || pi) {
    let a = pi ? pi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && He(t) ? t.call(i && i.proxy) : t;
  }
}
const V0 = /* @__PURE__ */ Symbol.for("v-scx"), H0 = () => lo(V0);
function Yi(e, t, r) {
  return dd(e, t, r);
}
function dd(e, t, r = rt) {
  const { immediate: i, deep: a, flush: c, once: u } = r, f = Kt({}, r), g = t && i || !t && c !== "post";
  let y;
  if (ca) {
    if (c === "sync") {
      const P = H0();
      y = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!g) {
      const P = () => {
      };
      return P.stop = Fr, P.resume = Fr, P.pause = Fr, P;
    }
  }
  const v = Ut;
  f.call = (P, C, A) => Hr(P, v, C, A);
  let h = !1;
  c === "post" ? f.scheduler = (P) => {
    nr(P, v && v.suspense);
  } : c !== "sync" && (h = !0, f.scheduler = (P, C) => {
    C ? P() : Kc(P);
  }), f.augmentJob = (P) => {
    t && (P.flags |= 4), h && (P.flags |= 2, v && (P.id = v.uid, P.i = v));
  };
  const w = E0(e, t, f);
  return ca && (y ? y.push(w) : g && w()), w;
}
function z0(e, t, r) {
  const i = this.proxy, a = xt(e) ? e.includes(".") ? hd(i, e) : () => i[e] : e.bind(i, i);
  let c;
  He(t) ? c = t : (c = t.handler, r = t);
  const u = pa(this), f = dd(a, c.bind(i), r);
  return u(), f;
}
function hd(e, t) {
  const r = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < r.length && i; a++)
      i = i[r[a]];
    return i;
  };
}
const j0 = /* @__PURE__ */ Symbol("_vte"), $0 = (e) => e.__isTeleport, B0 = /* @__PURE__ */ Symbol("_leaveCb");
function Yc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function gd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xu(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const No = /* @__PURE__ */ new WeakMap();
function qi(e, t, r, i, a = !1) {
  if (Re(e)) {
    e.forEach(
      (A, j) => qi(
        A,
        t && (Re(t) ? t[j] : t),
        r,
        i,
        a
      )
    );
    return;
  }
  if (Xi(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && qi(e, t, r, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? Qo(i.component) : i.el, u = a ? null : c, { i: f, r: g } = e, y = t && t.r, v = f.refs === rt ? f.refs = {} : f.refs, h = f.setupState, w = /* @__PURE__ */ Xe(h), P = h === rt ? Ff : (A) => xu(v, A) ? !1 : Ze(w, A), C = (A, j) => !(j && xu(v, j));
  if (y != null && y !== g) {
    if (wu(t), xt(y))
      v[y] = null, P(y) && (h[y] = null);
    else if (/* @__PURE__ */ Gt(y)) {
      const A = t;
      C(y, A.k) && (y.value = null), A.k && (v[A.k] = null);
    }
  }
  if (He(g))
    ga(g, f, 12, [u, v]);
  else {
    const A = xt(g), j = /* @__PURE__ */ Gt(g);
    if (A || j) {
      const V = () => {
        if (e.f) {
          const O = A ? P(g) ? h[g] : v[g] : C() || !e.k ? g.value : v[e.k];
          if (a)
            Re(O) && Rc(O, c);
          else if (Re(O))
            O.includes(c) || O.push(c);
          else if (A)
            v[g] = [c], P(g) && (h[g] = v[g]);
          else {
            const T = [c];
            C(g, e.k) && (g.value = T), e.k && (v[e.k] = T);
          }
        } else A ? (v[g] = u, P(g) && (h[g] = u)) : j && (C(g, e.k) && (g.value = u), e.k && (v[e.k] = u));
      };
      if (u) {
        const O = () => {
          V(), No.delete(e);
        };
        O.id = -1, No.set(e, O), nr(O, r);
      } else
        wu(e), V();
    }
  }
}
function wu(e) {
  const t = No.get(e);
  t && (t.flags |= 8, No.delete(e));
}
Ko().requestIdleCallback;
Ko().cancelIdleCallback;
const Xi = (e) => !!e.type.__asyncLoader, pd = (e) => e.type.__isKeepAlive;
function U0(e, t) {
  md(e, "a", t);
}
function G0(e, t) {
  md(e, "da", t);
}
function md(e, t, r = Ut) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Xo(t, i, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      pd(a.parent.vnode) && K0(i, t, r, a), a = a.parent;
  }
}
function K0(e, t, r, i) {
  const a = Xo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  bd(() => {
    Rc(i[t], a);
  }, r);
}
function Xo(e, t, r = Ut, i = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), c = t.__weh || (t.__weh = (...u) => {
      Jr();
      const f = pa(r), g = Hr(t, r, e, u);
      return f(), Qr(), g;
    });
    return i ? a.unshift(c) : a.push(c), c;
  }
}
const tn = (e) => (t, r = Ut) => {
  (!ca || e === "sp") && Xo(e, (...i) => t(...i), r);
}, W0 = tn("bm"), yd = tn("m"), Y0 = tn(
  "bu"
), q0 = tn("u"), qc = tn(
  "bum"
), bd = tn("um"), X0 = tn(
  "sp"
), Z0 = tn("rtg"), J0 = tn("rtc");
function Q0(e, t = Ut) {
  Xo("ec", e, t);
}
const em = "components", vd = /* @__PURE__ */ Symbol.for("v-ndc");
function tm(e) {
  return xt(e) ? rm(em, e, !1) || e : e || vd;
}
function rm(e, t, r = !0, i = !1) {
  const a = fr || Ut;
  if (a) {
    const c = a.type;
    {
      const f = $m(
        c,
        !1
      );
      if (f && (f === t || f === Qt(t) || f === Go(Qt(t))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Su(a[e] || c[e], t) || // global registration
      Su(a.appContext[e], t)
    );
    return !u && i ? c : u;
  }
}
function Su(e, t) {
  return e && (e[t] || e[Qt(t)] || e[Go(Qt(t))]);
}
function Zt(e, t, r, i) {
  let a;
  const c = r, u = Re(e);
  if (u || xt(e)) {
    const f = u && /* @__PURE__ */ In(e);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ br(e), y = /* @__PURE__ */ en(e), e = Wo(e)), a = new Array(e.length);
    for (let v = 0, h = e.length; v < h; v++)
      a[v] = t(
        g ? y ? vi(Pr(e[v])) : Pr(e[v]) : e[v],
        v,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, c);
  } else if (et(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, g) => t(f, g, void 0, c)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let g = 0, y = f.length; g < y; g++) {
        const v = f[g];
        a[g] = t(e[v], v, g, c);
      }
    }
  else
    a = [];
  return a;
}
const mc = (e) => e ? jd(e) ? Qo(e) : mc(e.parent) : null, Zi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Kt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mc(e.parent),
    $root: (e) => mc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Kc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Gc.bind(e.proxy)),
    $watch: (e) => z0.bind(e)
  })
), Gs = (e, t) => e !== rt && !e.__isScriptSetup && Ze(e, t), nm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: i, data: a, props: c, accessCache: u, type: f, appContext: g } = e;
    if (t[0] !== "$") {
      const w = u[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return r[t];
          case 3:
            return c[t];
        }
      else {
        if (Gs(i, t))
          return u[t] = 1, i[t];
        if (a !== rt && Ze(a, t))
          return u[t] = 2, a[t];
        if (Ze(c, t))
          return u[t] = 3, c[t];
        if (r !== rt && Ze(r, t))
          return u[t] = 4, r[t];
        yc && (u[t] = 0);
      }
    }
    const y = Zi[t];
    let v, h;
    if (y)
      return t === "$attrs" && Bt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (v = f.__cssModules) && (v = v[t])
    )
      return v;
    if (r !== rt && Ze(r, t))
      return u[t] = 4, r[t];
    if (
      // global properties
      h = g.config.globalProperties, Ze(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, r) {
    const { data: i, setupState: a, ctx: c } = e;
    return Gs(a, t) ? (a[t] = r, !0) : i !== rt && Ze(i, t) ? (i[t] = r, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (c[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: a, props: c, type: u }
  }, f) {
    let g;
    return !!(r[f] || e !== rt && f[0] !== "$" && Ze(e, f) || Gs(t, f) || Ze(c, f) || Ze(i, f) || Ze(Zi, f) || Ze(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Ze(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Nu(e) {
  return Re(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let yc = !0;
function im(e) {
  const t = xd(e), r = e.proxy, i = e.ctx;
  yc = !1, t.beforeCreate && Mu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: v,
    beforeMount: h,
    mounted: w,
    beforeUpdate: P,
    updated: C,
    activated: A,
    deactivated: j,
    beforeDestroy: V,
    beforeUnmount: O,
    destroyed: T,
    unmounted: I,
    render: U,
    renderTracked: ne,
    renderTriggered: se,
    errorCaptured: te,
    serverPrefetch: we,
    // public API
    expose: M,
    inheritAttrs: he,
    // assets
    components: fe,
    directives: ue,
    filters: G
  } = t;
  if (y && am(y, i, null), u)
    for (const ge in u) {
      const q = u[ge];
      He(q) && (i[ge] = q.bind(r));
    }
  if (a) {
    const ge = a.call(r, r);
    et(ge) && (e.data = /* @__PURE__ */ Yo(ge));
  }
  if (yc = !0, c)
    for (const ge in c) {
      const q = c[ge], ce = He(q) ? q.bind(r, r) : He(q.get) ? q.get.bind(r, r) : Fr, Ie = !He(q) && He(q.set) ? q.set.bind(r) : Fr, De = Mr({
        get: ce,
        set: Ie
      });
      Object.defineProperty(i, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (Oe) => De.value = Oe
      });
    }
  if (f)
    for (const ge in f)
      _d(f[ge], i, r, ge);
  if (g) {
    const ge = He(g) ? g.call(r) : g;
    Reflect.ownKeys(ge).forEach((q) => {
      F0(q, ge[q]);
    });
  }
  v && Mu(v, e, "c");
  function me(ge, q) {
    Re(q) ? q.forEach((ce) => ge(ce.bind(r))) : q && ge(q.bind(r));
  }
  if (me(W0, h), me(yd, w), me(Y0, P), me(q0, C), me(U0, A), me(G0, j), me(Q0, te), me(J0, ne), me(Z0, se), me(qc, O), me(bd, I), me(X0, we), Re(M))
    if (M.length) {
      const ge = e.exposed || (e.exposed = {});
      M.forEach((q) => {
        Object.defineProperty(ge, q, {
          get: () => r[q],
          set: (ce) => r[q] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === Fr && (e.render = U), he != null && (e.inheritAttrs = he), fe && (e.components = fe), ue && (e.directives = ue), we && gd(e);
}
function am(e, t, r = Fr) {
  Re(e) && (e = bc(e));
  for (const i in e) {
    const a = e[i];
    let c;
    et(a) ? "default" in a ? c = lo(
      a.from || i,
      a.default,
      !0
    ) : c = lo(a.from || i) : c = lo(a), /* @__PURE__ */ Gt(c) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : t[i] = c;
  }
}
function Mu(e, t, r) {
  Hr(
    Re(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function _d(e, t, r, i) {
  let a = i.includes(".") ? hd(r, i) : () => r[i];
  if (xt(e)) {
    const c = t[e];
    He(c) && Yi(a, c);
  } else if (He(e))
    Yi(a, e.bind(r));
  else if (et(e))
    if (Re(e))
      e.forEach((c) => _d(c, t, r, i));
    else {
      const c = He(e.handler) ? e.handler.bind(r) : t[e.handler];
      He(c) && Yi(a, c, e);
    }
}
function xd(e) {
  const t = e.type, { mixins: r, extends: i } = t, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = c.get(t);
  let g;
  return f ? g = f : !a.length && !r && !i ? g = t : (g = {}, a.length && a.forEach(
    (y) => Mo(g, y, u, !0)
  ), Mo(g, t, u)), et(t) && c.set(t, g), g;
}
function Mo(e, t, r, i = !1) {
  const { mixins: a, extends: c } = t;
  c && Mo(e, c, r, !0), a && a.forEach(
    (u) => Mo(e, u, r, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const f = om[u] || r && r[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const om = {
  data: ku,
  props: Pu,
  emits: Pu,
  // objects
  methods: zi,
  computed: zi,
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
  components: zi,
  directives: zi,
  // watch
  watch: cm,
  // provide / inject
  provide: ku,
  inject: sm
};
function ku(e, t) {
  return t ? e ? function() {
    return Kt(
      He(e) ? e.call(this, this) : e,
      He(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sm(e, t) {
  return zi(bc(e), bc(t));
}
function bc(e) {
  if (Re(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zi(e, t) {
  return e ? Kt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pu(e, t) {
  return e ? Re(e) && Re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Kt(
    /* @__PURE__ */ Object.create(null),
    Nu(e),
    Nu(t ?? {})
  ) : t;
}
function cm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Kt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    r[i] = qt(e[i], t[i]);
  return r;
}
function wd() {
  return {
    app: null,
    config: {
      isNativeTag: Ff,
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
let lm = 0;
function um(e, t) {
  return function(i, a = null) {
    He(i) || (i = Kt({}, i)), a != null && !et(a) && (a = null);
    const c = wd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = c.app = {
      _uid: lm++,
      _component: i,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: Um,
      get config() {
        return c.config;
      },
      set config(v) {
      },
      use(v, ...h) {
        return u.has(v) || (v && He(v.install) ? (u.add(v), v.install(y, ...h)) : He(v) && (u.add(v), v(y, ...h))), y;
      },
      mixin(v) {
        return c.mixins.includes(v) || c.mixins.push(v), y;
      },
      component(v, h) {
        return h ? (c.components[v] = h, y) : c.components[v];
      },
      directive(v, h) {
        return h ? (c.directives[v] = h, y) : c.directives[v];
      },
      mount(v, h, w) {
        if (!g) {
          const P = y._ceVNode || kt(i, a);
          return P.appContext = c, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(P, v, w), g = !0, y._container = v, v.__vue_app__ = y, Qo(P.component);
        }
      },
      onUnmount(v) {
        f.push(v);
      },
      unmount() {
        g && (Hr(
          f,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(v, h) {
        return c.provides[v] = h, y;
      },
      runWithContext(v) {
        const h = pi;
        pi = y;
        try {
          return v();
        } finally {
          pi = h;
        }
      }
    };
    return y;
  };
}
let pi = null;
const fm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];
function dm(e, t, ...r) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || rt;
  let a = r;
  const c = t.startsWith("update:"), u = c && fm(i, t.slice(7));
  u && (u.trim && (a = r.map((v) => xt(v) ? v.trim() : v)), u.number && (a = r.map(Xp)));
  let f, g = i[f = Hs(t)] || // also try camelCase event handler (#2249)
  i[f = Hs(Qt(t))];
  !g && c && (g = i[f = Hs(Vn(t))]), g && Hr(
    g,
    e,
    6,
    a
  );
  const y = i[f + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Hr(
      y,
      e,
      6,
      a
    );
  }
}
const hm = /* @__PURE__ */ new WeakMap();
function Sd(e, t, r = !1) {
  const i = r ? hm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let u = {}, f = !1;
  if (!He(e)) {
    const g = (y) => {
      const v = Sd(y, t, !0);
      v && (f = !0, Kt(u, v));
    };
    !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  return !c && !f ? (et(e) && i.set(e, null), null) : (Re(c) ? c.forEach((g) => u[g] = null) : Kt(u, c), et(e) && i.set(e, u), u);
}
function Zo(e, t) {
  return !e || !$o(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, Vn(t)) || Ze(e, t));
}
function Cu(e) {
  const {
    type: t,
    vnode: r,
    proxy: i,
    withProxy: a,
    propsOptions: [c],
    slots: u,
    attrs: f,
    emit: g,
    render: y,
    renderCache: v,
    props: h,
    data: w,
    setupState: P,
    ctx: C,
    inheritAttrs: A
  } = e, j = So(e);
  let V, O;
  try {
    if (r.shapeFlag & 4) {
      const I = a || i, U = I;
      V = Lr(
        y.call(
          U,
          I,
          v,
          h,
          P,
          w,
          C
        )
      ), O = f;
    } else {
      const I = t;
      V = Lr(
        I.length > 1 ? I(
          h,
          { attrs: f, slots: u, emit: g }
        ) : I(
          h,
          null
        )
      ), O = t.props ? f : gm(f);
    }
  } catch (I) {
    Ji.length = 0, qo(I, e, 1), V = kt(pn);
  }
  let T = V;
  if (O && A !== !1) {
    const I = Object.keys(O), { shapeFlag: U } = T;
    I.length && U & 7 && (c && I.some(Bo) && (O = pm(
      O,
      c
    )), T = _i(T, O, !1, !0));
  }
  return r.dirs && (T = _i(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(r.dirs) : r.dirs), r.transition && Yc(T, r.transition), V = T, So(j), V;
}
const gm = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || $o(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, pm = (e, t) => {
  const r = {};
  for (const i in e)
    (!Bo(i) || !(i.slice(9) in t)) && (r[i] = e[i]);
  return r;
};
function mm(e, t, r) {
  const { props: i, children: a, component: c } = e, { props: u, children: f, patchFlag: g } = t, y = c.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return i ? Au(i, u, y) : !!u;
    if (g & 8) {
      const v = t.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        const w = v[h];
        if (Nd(u, i, w) && !Zo(y, w))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === u ? !1 : i ? u ? Au(i, u, y) : !0 : !!u;
  return !1;
}
function Au(e, t, r) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const c = i[a];
    if (Nd(t, e, c) && !Zo(r, c))
      return !0;
  }
  return !1;
}
function Nd(e, t, r) {
  const i = e[r], a = t[r];
  return r === "style" && et(i) && et(a) ? !Fc(i, a) : i !== a;
}
function ym({ vnode: e, parent: t, suspense: r }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = i);
}
const Md = {}, kd = () => Object.create(Md), Pd = (e) => Object.getPrototypeOf(e) === Md;
function bm(e, t, r, i = !1) {
  const a = {}, c = kd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cd(e, t, a, c);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  r ? e.props = i ? a : /* @__PURE__ */ N0(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function vm(e, t, r, i) {
  const {
    props: a,
    attrs: c,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ Xe(a), [g] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const v = e.vnode.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        let w = v[h];
        if (Zo(e.emitsOptions, w))
          continue;
        const P = t[w];
        if (g)
          if (Ze(c, w))
            P !== c[w] && (c[w] = P, y = !0);
          else {
            const C = Qt(w);
            a[C] = vc(
              g,
              f,
              C,
              P,
              e,
              !1
            );
          }
        else
          P !== c[w] && (c[w] = P, y = !0);
      }
    }
  } else {
    Cd(e, t, a, c) && (y = !0);
    let v;
    for (const h in f)
      (!t || // for camelCase
      !Ze(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Vn(h)) === h || !Ze(t, v))) && (g ? r && // for camelCase
      (r[h] !== void 0 || // for kebab-case
      r[v] !== void 0) && (a[h] = vc(
        g,
        f,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (c !== f)
      for (const h in c)
        (!t || !Ze(t, h)) && (delete c[h], y = !0);
  }
  y && qr(e.attrs, "set", "");
}
function Cd(e, t, r, i) {
  const [a, c] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let g in t) {
      if (Gi(g))
        continue;
      const y = t[g];
      let v;
      a && Ze(a, v = Qt(g)) ? !c || !c.includes(v) ? r[v] = y : (f || (f = {}))[v] = y : Zo(e.emitsOptions, g) || (!(g in i) || y !== i[g]) && (i[g] = y, u = !0);
    }
  if (c) {
    const g = /* @__PURE__ */ Xe(r), y = f || rt;
    for (let v = 0; v < c.length; v++) {
      const h = c[v];
      r[h] = vc(
        a,
        g,
        h,
        y[h],
        e,
        !Ze(y, h)
      );
    }
  }
  return u;
}
function vc(e, t, r, i, a, c) {
  const u = e[r];
  if (u != null) {
    const f = Ze(u, "default");
    if (f && i === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && He(g)) {
        const { propsDefaults: y } = a;
        if (r in y)
          i = y[r];
        else {
          const v = pa(a);
          i = y[r] = g.call(
            null,
            t
          ), v();
        }
      } else
        i = g;
      a.ce && a.ce._setProp(r, i);
    }
    u[
      0
      /* shouldCast */
    ] && (c && !f ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Vn(r)) && (i = !0));
  }
  return i;
}
const _m = /* @__PURE__ */ new WeakMap();
function Ad(e, t, r = !1) {
  const i = r ? _m : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const c = e.props, u = {}, f = [];
  let g = !1;
  if (!He(e)) {
    const v = (h) => {
      g = !0;
      const [w, P] = Ad(h, t, !0);
      Kt(u, w), P && f.push(...P);
    };
    !r && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!c && !g)
    return et(e) && i.set(e, di), di;
  if (Re(c))
    for (let v = 0; v < c.length; v++) {
      const h = Qt(c[v]);
      Iu(h) && (u[h] = rt);
    }
  else if (c)
    for (const v in c) {
      const h = Qt(v);
      if (Iu(h)) {
        const w = c[v], P = u[h] = Re(w) || He(w) ? { type: w } : Kt({}, w), C = P.type;
        let A = !1, j = !0;
        if (Re(C))
          for (let V = 0; V < C.length; ++V) {
            const O = C[V], T = He(O) && O.name;
            if (T === "Boolean") {
              A = !0;
              break;
            } else T === "String" && (j = !1);
          }
        else
          A = He(C) && C.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = A, P[
          1
          /* shouldCastTrue */
        ] = j, (A || Ze(P, "default")) && f.push(h);
      }
    }
  const y = [u, f];
  return et(e) && i.set(e, y), y;
}
function Iu(e) {
  return e[0] !== "$" && !Gi(e);
}
const Xc = (e) => e === "_" || e === "_ctx" || e === "$stable", Zc = (e) => Re(e) ? e.map(Lr) : [Lr(e)], xm = (e, t, r) => {
  if (t._n)
    return t;
  const i = O0((...a) => Zc(t(...a)), r);
  return i._c = !1, i;
}, Id = (e, t, r) => {
  const i = e._ctx;
  for (const a in e) {
    if (Xc(a)) continue;
    const c = e[a];
    if (He(c))
      t[a] = xm(a, c, i);
    else if (c != null) {
      const u = Zc(c);
      t[a] = () => u;
    }
  }
}, Td = (e, t) => {
  const r = Zc(t);
  e.slots.default = () => r;
}, Ed = (e, t, r) => {
  for (const i in t)
    (r || !Xc(i)) && (e[i] = t[i]);
}, wm = (e, t, r) => {
  const i = e.slots = kd();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Ed(i, t, r), r && $f(i, "_", a, !0)) : Id(t, i);
  } else t && Td(e, t);
}, Sm = (e, t, r) => {
  const { vnode: i, slots: a } = e;
  let c = !0, u = rt;
  if (i.shapeFlag & 32) {
    const f = t._;
    f ? r && f === 1 ? c = !1 : Ed(a, t, r) : (c = !t.$stable, Id(t, a)), u = t;
  } else t && (Td(e, t), u = { default: 1 });
  if (c)
    for (const f in a)
      !Xc(f) && u[f] == null && delete a[f];
}, nr = Cm;
function Nm(e) {
  return Mm(e);
}
function Mm(e, t) {
  const r = Ko();
  r.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: c,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: v,
    parentNode: h,
    nextSibling: w,
    setScopeId: P = Fr,
    insertStaticContent: C
  } = e, A = (D, H, Z, le = null, E = null, $ = null, z = void 0, Q = null, J = !!H.dynamicChildren) => {
    if (D === H)
      return;
    D && !Ei(D, H) && (le = It(D), Oe(D, E, $, !0), D = null), H.patchFlag === -2 && (J = !1, H.dynamicChildren = null);
    const { type: R, ref: ve, shapeFlag: de } = H;
    switch (R) {
      case Jo:
        j(D, H, Z, le);
        break;
      case pn:
        V(D, H, Z, le);
        break;
      case uo:
        D == null && O(H, Z, le, z);
        break;
      case Qe:
        fe(
          D,
          H,
          Z,
          le,
          E,
          $,
          z,
          Q,
          J
        );
        break;
      default:
        de & 1 ? U(
          D,
          H,
          Z,
          le,
          E,
          $,
          z,
          Q,
          J
        ) : de & 6 ? ue(
          D,
          H,
          Z,
          le,
          E,
          $,
          z,
          Q,
          J
        ) : (de & 64 || de & 128) && R.process(
          D,
          H,
          Z,
          le,
          E,
          $,
          z,
          Q,
          J,
          sr
        );
    }
    ve != null && E ? qi(ve, D && D.ref, $, H || D, !H) : ve == null && D && D.ref != null && qi(D.ref, null, $, D, !0);
  }, j = (D, H, Z, le) => {
    if (D == null)
      i(
        H.el = f(H.children),
        Z,
        le
      );
    else {
      const E = H.el = D.el;
      H.children !== D.children && y(E, H.children);
    }
  }, V = (D, H, Z, le) => {
    D == null ? i(
      H.el = g(H.children || ""),
      Z,
      le
    ) : H.el = D.el;
  }, O = (D, H, Z, le) => {
    [D.el, D.anchor] = C(
      D.children,
      H,
      Z,
      le,
      D.el,
      D.anchor
    );
  }, T = ({ el: D, anchor: H }, Z, le) => {
    let E;
    for (; D && D !== H; )
      E = w(D), i(D, Z, le), D = E;
    i(H, Z, le);
  }, I = ({ el: D, anchor: H }) => {
    let Z;
    for (; D && D !== H; )
      Z = w(D), a(D), D = Z;
    a(H);
  }, U = (D, H, Z, le, E, $, z, Q, J) => {
    if (H.type === "svg" ? z = "svg" : H.type === "math" && (z = "mathml"), D == null)
      ne(
        H,
        Z,
        le,
        E,
        $,
        z,
        Q,
        J
      );
    else {
      const R = D.el && D.el._isVueCE ? D.el : null;
      try {
        R && R._beginPatch(), we(
          D,
          H,
          E,
          $,
          z,
          Q,
          J
        );
      } finally {
        R && R._endPatch();
      }
    }
  }, ne = (D, H, Z, le, E, $, z, Q) => {
    let J, R;
    const { props: ve, shapeFlag: de, transition: xe, dirs: Me } = D;
    if (J = D.el = u(
      D.type,
      $,
      ve && ve.is,
      ve
    ), de & 8 ? v(J, D.children) : de & 16 && te(
      D.children,
      J,
      null,
      le,
      E,
      Ks(D, $),
      z,
      Q
    ), Me && xn(D, null, le, "created"), se(J, D, D.scopeId, z, le), ve) {
      for (const Ee in ve)
        Ee !== "value" && !Gi(Ee) && c(J, Ee, null, ve[Ee], $, le);
      "value" in ve && c(J, "value", null, ve.value, $), (R = ve.onVnodeBeforeMount) && Cr(R, le, D);
    }
    Me && xn(D, null, le, "beforeMount");
    const Ae = km(E, xe);
    Ae && xe.beforeEnter(J), i(J, H, Z), ((R = ve && ve.onVnodeMounted) || Ae || Me) && nr(() => {
      try {
        R && Cr(R, le, D), Ae && xe.enter(J), Me && xn(D, null, le, "mounted");
      } finally {
      }
    }, E);
  }, se = (D, H, Z, le, E) => {
    if (Z && P(D, Z), le)
      for (let $ = 0; $ < le.length; $++)
        P(D, le[$]);
    if (E) {
      let $ = E.subTree;
      if (H === $ || Od($.type) && ($.ssContent === H || $.ssFallback === H)) {
        const z = E.vnode;
        se(
          D,
          z,
          z.scopeId,
          z.slotScopeIds,
          E.parent
        );
      }
    }
  }, te = (D, H, Z, le, E, $, z, Q, J = 0) => {
    for (let R = J; R < D.length; R++) {
      const ve = D[R] = Q ? Yr(D[R]) : Lr(D[R]);
      A(
        null,
        ve,
        H,
        Z,
        le,
        E,
        $,
        z,
        Q
      );
    }
  }, we = (D, H, Z, le, E, $, z) => {
    const Q = H.el = D.el;
    let { patchFlag: J, dynamicChildren: R, dirs: ve } = H;
    J |= D.patchFlag & 16;
    const de = D.props || rt, xe = H.props || rt;
    let Me;
    if (Z && wn(Z, !1), (Me = xe.onVnodeBeforeUpdate) && Cr(Me, Z, H, D), ve && xn(H, D, Z, "beforeUpdate"), Z && wn(Z, !0), (de.innerHTML && xe.innerHTML == null || de.textContent && xe.textContent == null) && v(Q, ""), R ? M(
      D.dynamicChildren,
      R,
      Q,
      Z,
      le,
      Ks(H, E),
      $
    ) : z || q(
      D,
      H,
      Q,
      null,
      Z,
      le,
      Ks(H, E),
      $,
      !1
    ), J > 0) {
      if (J & 16)
        he(Q, de, xe, Z, E);
      else if (J & 2 && de.class !== xe.class && c(Q, "class", null, xe.class, E), J & 4 && c(Q, "style", de.style, xe.style, E), J & 8) {
        const Ae = H.dynamicProps;
        for (let Ee = 0; Ee < Ae.length; Ee++) {
          const Le = Ae[Ee], nt = de[Le], lt = xe[Le];
          (lt !== nt || Le === "value") && c(Q, Le, nt, lt, E, Z);
        }
      }
      J & 1 && D.children !== H.children && v(Q, H.children);
    } else !z && R == null && he(Q, de, xe, Z, E);
    ((Me = xe.onVnodeUpdated) || ve) && nr(() => {
      Me && Cr(Me, Z, H, D), ve && xn(H, D, Z, "updated");
    }, le);
  }, M = (D, H, Z, le, E, $, z) => {
    for (let Q = 0; Q < H.length; Q++) {
      const J = D[Q], R = H[Q], ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === Qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ei(J, R) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? h(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Z
        )
      );
      A(
        J,
        R,
        ve,
        null,
        le,
        E,
        $,
        z,
        !0
      );
    }
  }, he = (D, H, Z, le, E) => {
    if (H !== Z) {
      if (H !== rt)
        for (const $ in H)
          !Gi($) && !($ in Z) && c(
            D,
            $,
            H[$],
            null,
            E,
            le
          );
      for (const $ in Z) {
        if (Gi($)) continue;
        const z = Z[$], Q = H[$];
        z !== Q && $ !== "value" && c(D, $, Q, z, E, le);
      }
      "value" in Z && c(D, "value", H.value, Z.value, E);
    }
  }, fe = (D, H, Z, le, E, $, z, Q, J) => {
    const R = H.el = D ? D.el : f(""), ve = H.anchor = D ? D.anchor : f("");
    let { patchFlag: de, dynamicChildren: xe, slotScopeIds: Me } = H;
    Me && (Q = Q ? Q.concat(Me) : Me), D == null ? (i(R, Z, le), i(ve, Z, le), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      Z,
      ve,
      E,
      $,
      z,
      Q,
      J
    )) : de > 0 && de & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren && D.dynamicChildren.length === xe.length ? (M(
      D.dynamicChildren,
      xe,
      Z,
      E,
      $,
      z,
      Q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || E && H === E.subTree) && Dd(
      D,
      H,
      !0
      /* shallow */
    )) : q(
      D,
      H,
      Z,
      ve,
      E,
      $,
      z,
      Q,
      J
    );
  }, ue = (D, H, Z, le, E, $, z, Q, J) => {
    H.slotScopeIds = Q, D == null ? H.shapeFlag & 512 ? E.ctx.activate(
      H,
      Z,
      le,
      z,
      J
    ) : G(
      H,
      Z,
      le,
      E,
      $,
      z,
      J
    ) : ae(D, H, J);
  }, G = (D, H, Z, le, E, $, z) => {
    const Q = D.component = Om(
      D,
      le,
      E
    );
    if (pd(D) && (Q.ctx.renderer = sr), Vm(Q, !1, z), Q.asyncDep) {
      if (E && E.registerDep(Q, me, z), !D.el) {
        const J = Q.subTree = kt(pn);
        V(null, J, H, Z), D.placeholder = J.el;
      }
    } else
      me(
        Q,
        D,
        H,
        Z,
        E,
        $,
        z
      );
  }, ae = (D, H, Z) => {
    const le = H.component = D.component;
    if (mm(D, H, Z))
      if (le.asyncDep && !le.asyncResolved) {
        ge(le, H, Z);
        return;
      } else
        le.next = H, le.update();
    else
      H.el = D.el, le.vnode = H;
  }, me = (D, H, Z, le, E, $, z) => {
    const Q = () => {
      if (D.isMounted) {
        let { next: de, bu: xe, u: Me, parent: Ae, vnode: Ee } = D;
        {
          const pt = Ld(D);
          if (pt) {
            de && (de.el = Ee.el, ge(D, de, z)), pt.asyncDep.then(() => {
              nr(() => {
                D.isUnmounted || R();
              }, E);
            });
            return;
          }
        }
        let Le = de, nt;
        wn(D, !1), de ? (de.el = Ee.el, ge(D, de, z)) : de = Ee, xe && zs(xe), (nt = de.props && de.props.onVnodeBeforeUpdate) && Cr(nt, Ae, de, Ee), wn(D, !0);
        const lt = Cu(D), ke = D.subTree;
        D.subTree = lt, A(
          ke,
          lt,
          // parent may have changed if it's in a teleport
          h(ke.el),
          // anchor may have changed if it's in a fragment
          It(ke),
          D,
          E,
          $
        ), de.el = lt.el, Le === null && ym(D, lt.el), Me && nr(Me, E), (nt = de.props && de.props.onVnodeUpdated) && nr(
          () => Cr(nt, Ae, de, Ee),
          E
        );
      } else {
        let de;
        const { el: xe, props: Me } = H, { bm: Ae, m: Ee, parent: Le, root: nt, type: lt } = D, ke = Xi(H);
        wn(D, !1), Ae && zs(Ae), !ke && (de = Me && Me.onVnodeBeforeMount) && Cr(de, Le, H), wn(D, !0);
        {
          nt.ce && nt.ce._hasShadowRoot() && nt.ce._injectChildStyle(
            lt,
            D.parent ? D.parent.type : void 0
          );
          const pt = D.subTree = Cu(D);
          A(
            null,
            pt,
            Z,
            le,
            D,
            E,
            $
          ), H.el = pt.el;
        }
        if (Ee && nr(Ee, E), !ke && (de = Me && Me.onVnodeMounted)) {
          const pt = H;
          nr(
            () => Cr(de, Le, pt),
            E
          );
        }
        (H.shapeFlag & 256 || Le && Xi(Le.vnode) && Le.vnode.shapeFlag & 256) && D.a && nr(D.a, E), D.isMounted = !0, H = Z = le = null;
      }
    };
    D.scope.on();
    const J = D.effect = new Kf(Q);
    D.scope.off();
    const R = D.update = J.run.bind(J), ve = D.job = J.runIfDirty.bind(J);
    ve.i = D, ve.id = D.uid, J.scheduler = () => Kc(ve), wn(D, !0), R();
  }, ge = (D, H, Z) => {
    H.component = D;
    const le = D.vnode.props;
    D.vnode = H, D.next = null, vm(D, H.props, le, Z), Sm(D, H.children, Z), Jr(), _u(D), Qr();
  }, q = (D, H, Z, le, E, $, z, Q, J = !1) => {
    const R = D && D.children, ve = D ? D.shapeFlag : 0, de = H.children, { patchFlag: xe, shapeFlag: Me } = H;
    if (xe > 0) {
      if (xe & 128) {
        Ie(
          R,
          de,
          Z,
          le,
          E,
          $,
          z,
          Q,
          J
        );
        return;
      } else if (xe & 256) {
        ce(
          R,
          de,
          Z,
          le,
          E,
          $,
          z,
          Q,
          J
        );
        return;
      }
    }
    Me & 8 ? (ve & 16 && Nt(R, E, $), de !== R && v(Z, de)) : ve & 16 ? Me & 16 ? Ie(
      R,
      de,
      Z,
      le,
      E,
      $,
      z,
      Q,
      J
    ) : Nt(R, E, $, !0) : (ve & 8 && v(Z, ""), Me & 16 && te(
      de,
      Z,
      le,
      E,
      $,
      z,
      Q,
      J
    ));
  }, ce = (D, H, Z, le, E, $, z, Q, J) => {
    D = D || di, H = H || di;
    const R = D.length, ve = H.length, de = Math.min(R, ve);
    let xe;
    for (xe = 0; xe < de; xe++) {
      const Me = H[xe] = J ? Yr(H[xe]) : Lr(H[xe]);
      A(
        D[xe],
        Me,
        Z,
        null,
        E,
        $,
        z,
        Q,
        J
      );
    }
    R > ve ? Nt(
      D,
      E,
      $,
      !0,
      !1,
      de
    ) : te(
      H,
      Z,
      le,
      E,
      $,
      z,
      Q,
      J,
      de
    );
  }, Ie = (D, H, Z, le, E, $, z, Q, J) => {
    let R = 0;
    const ve = H.length;
    let de = D.length - 1, xe = ve - 1;
    for (; R <= de && R <= xe; ) {
      const Me = D[R], Ae = H[R] = J ? Yr(H[R]) : Lr(H[R]);
      if (Ei(Me, Ae))
        A(
          Me,
          Ae,
          Z,
          null,
          E,
          $,
          z,
          Q,
          J
        );
      else
        break;
      R++;
    }
    for (; R <= de && R <= xe; ) {
      const Me = D[de], Ae = H[xe] = J ? Yr(H[xe]) : Lr(H[xe]);
      if (Ei(Me, Ae))
        A(
          Me,
          Ae,
          Z,
          null,
          E,
          $,
          z,
          Q,
          J
        );
      else
        break;
      de--, xe--;
    }
    if (R > de) {
      if (R <= xe) {
        const Me = xe + 1, Ae = Me < ve ? H[Me].el : le;
        for (; R <= xe; )
          A(
            null,
            H[R] = J ? Yr(H[R]) : Lr(H[R]),
            Z,
            Ae,
            E,
            $,
            z,
            Q,
            J
          ), R++;
      }
    } else if (R > xe)
      for (; R <= de; )
        Oe(D[R], E, $, !0), R++;
    else {
      const Me = R, Ae = R, Ee = /* @__PURE__ */ new Map();
      for (R = Ae; R <= xe; R++) {
        const Wt = H[R] = J ? Yr(H[R]) : Lr(H[R]);
        Wt.key != null && Ee.set(Wt.key, R);
      }
      let Le, nt = 0;
      const lt = xe - Ae + 1;
      let ke = !1, pt = 0;
      const Pt = new Array(lt);
      for (R = 0; R < lt; R++) Pt[R] = 0;
      for (R = Me; R <= de; R++) {
        const Wt = D[R];
        if (nt >= lt) {
          Oe(Wt, E, $, !0);
          continue;
        }
        let gr;
        if (Wt.key != null)
          gr = Ee.get(Wt.key);
        else
          for (Le = Ae; Le <= xe; Le++)
            if (Pt[Le - Ae] === 0 && Ei(Wt, H[Le])) {
              gr = Le;
              break;
            }
        gr === void 0 ? Oe(Wt, E, $, !0) : (Pt[gr - Ae] = R + 1, gr >= pt ? pt = gr : ke = !0, A(
          Wt,
          H[gr],
          Z,
          null,
          E,
          $,
          z,
          Q,
          J
        ), nt++);
      }
      const Ue = ke ? Pm(Pt) : di;
      for (Le = Ue.length - 1, R = lt - 1; R >= 0; R--) {
        const Wt = Ae + R, gr = H[Wt], rn = H[Wt + 1], nn = Wt + 1 < ve ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          rn.el || Rd(rn)
        ) : le;
        Pt[R] === 0 ? A(
          null,
          gr,
          Z,
          nn,
          E,
          $,
          z,
          Q,
          J
        ) : ke && (Le < 0 || R !== Ue[Le] ? De(gr, Z, nn, 2) : Le--);
      }
    }
  }, De = (D, H, Z, le, E = null) => {
    const { el: $, type: z, transition: Q, children: J, shapeFlag: R } = D;
    if (R & 6) {
      De(D.component.subTree, H, Z, le);
      return;
    }
    if (R & 128) {
      D.suspense.move(H, Z, le);
      return;
    }
    if (R & 64) {
      z.move(D, H, Z, sr);
      return;
    }
    if (z === Qe) {
      i($, H, Z);
      for (let de = 0; de < J.length; de++)
        De(J[de], H, Z, le);
      i(D.anchor, H, Z);
      return;
    }
    if (z === uo) {
      T(D, H, Z);
      return;
    }
    if (le !== 2 && R & 1 && Q)
      if (le === 0)
        Q.beforeEnter($), i($, H, Z), nr(() => Q.enter($), E);
      else {
        const { leave: de, delayLeave: xe, afterLeave: Me } = Q, Ae = () => {
          D.ctx.isUnmounted ? a($) : i($, H, Z);
        }, Ee = () => {
          $._isLeaving && $[B0](
            !0
            /* cancelled */
          ), de($, () => {
            Ae(), Me && Me();
          });
        };
        xe ? xe($, Ae, Ee) : Ee();
      }
    else
      i($, H, Z);
  }, Oe = (D, H, Z, le = !1, E = !1) => {
    const {
      type: $,
      props: z,
      ref: Q,
      children: J,
      dynamicChildren: R,
      shapeFlag: ve,
      patchFlag: de,
      dirs: xe,
      cacheIndex: Me,
      memo: Ae
    } = D;
    if (de === -2 && (E = !1), Q != null && (Jr(), qi(Q, null, Z, D, !0), Qr()), Me != null && (H.renderCache[Me] = void 0), ve & 256) {
      H.ctx.deactivate(D);
      return;
    }
    const Ee = ve & 1 && xe, Le = !Xi(D);
    let nt;
    if (Le && (nt = z && z.onVnodeBeforeUnmount) && Cr(nt, H, D), ve & 6)
      St(D.component, Z, le);
    else {
      if (ve & 128) {
        D.suspense.unmount(Z, le);
        return;
      }
      Ee && xn(D, null, H, "beforeUnmount"), ve & 64 ? D.type.remove(
        D,
        H,
        Z,
        sr,
        le
      ) : R && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !R.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== Qe || de > 0 && de & 64) ? Nt(
        R,
        H,
        Z,
        !1,
        !0
      ) : ($ === Qe && de & 384 || !E && ve & 16) && Nt(J, H, Z), le && dt(D);
    }
    const lt = Ae != null && Me == null;
    (Le && (nt = z && z.onVnodeUnmounted) || Ee || lt) && nr(() => {
      nt && Cr(nt, H, D), Ee && xn(D, null, H, "unmounted"), lt && (D.el = null);
    }, Z);
  }, dt = (D) => {
    const { type: H, el: Z, anchor: le, transition: E } = D;
    if (H === Qe) {
      ot(Z, le);
      return;
    }
    if (H === uo) {
      I(D);
      return;
    }
    const $ = () => {
      a(Z), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (D.shapeFlag & 1 && E && !E.persisted) {
      const { leave: z, delayLeave: Q } = E, J = () => z(Z, $);
      Q ? Q(D.el, $, J) : J();
    } else
      $();
  }, ot = (D, H) => {
    let Z;
    for (; D !== H; )
      Z = w(D), a(D), D = Z;
    a(H);
  }, St = (D, H, Z) => {
    const { bum: le, scope: E, job: $, subTree: z, um: Q, m: J, a: R } = D;
    Tu(J), Tu(R), le && zs(le), E.stop(), $ && ($.flags |= 8, Oe(z, D, H, Z)), Q && nr(Q, H), nr(() => {
      D.isUnmounted = !0;
    }, H);
  }, Nt = (D, H, Z, le = !1, E = !1, $ = 0) => {
    for (let z = $; z < D.length; z++)
      Oe(D[z], H, Z, le, E);
  }, It = (D) => {
    if (D.shapeFlag & 6)
      return It(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const H = w(D.anchor || D.el), Z = H && H[j0];
    return Z ? w(Z) : H;
  };
  let or = !1;
  const hr = (D, H, Z) => {
    let le;
    D == null ? H._vnode && (Oe(H._vnode, null, null, !0), le = H._vnode.component) : A(
      H._vnode || null,
      D,
      H,
      null,
      null,
      null,
      Z
    ), H._vnode = D, or || (or = !0, _u(le), ld(), or = !1);
  }, sr = {
    p: A,
    um: Oe,
    m: De,
    r: dt,
    mt: G,
    mc: te,
    pc: q,
    pbc: M,
    n: It,
    o: e
  };
  return {
    render: hr,
    hydrate: void 0,
    createApp: um(hr)
  };
}
function Ks({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function wn({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function km(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Dd(e, t, r = !1) {
  const i = e.children, a = t.children;
  if (Re(i) && Re(a))
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      let f = a[c];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[c] = Yr(a[c]), f.el = u.el), !r && f.patchFlag !== -2 && Dd(u, f)), f.type === Jo && (f.patchFlag === -1 && (f = a[c] = Yr(f)), f.el = u.el), f.type === pn && !f.el && (f.el = u.el);
    }
}
function Pm(e) {
  const t = e.slice(), r = [0];
  let i, a, c, u, f;
  const g = e.length;
  for (i = 0; i < g; i++) {
    const y = e[i];
    if (y !== 0) {
      if (a = r[r.length - 1], e[a] < y) {
        t[i] = a, r.push(i);
        continue;
      }
      for (c = 0, u = r.length - 1; c < u; )
        f = c + u >> 1, e[r[f]] < y ? c = f + 1 : u = f;
      y < e[r[c]] && (c > 0 && (t[i] = r[c - 1]), r[c] = i);
    }
  }
  for (c = r.length, u = r[c - 1]; c-- > 0; )
    r[c] = u, u = t[u];
  return r;
}
function Ld(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ld(t);
}
function Tu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Rd(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Rd(t.subTree) : null;
}
const Od = (e) => e.__isSuspense;
function Cm(e, t) {
  t && t.pendingBranch ? Re(e) ? t.effects.push(...e) : t.effects.push(e) : R0(e);
}
const Qe = /* @__PURE__ */ Symbol.for("v-fgt"), Jo = /* @__PURE__ */ Symbol.for("v-txt"), pn = /* @__PURE__ */ Symbol.for("v-cmt"), uo = /* @__PURE__ */ Symbol.for("v-stc"), Ji = [];
let dr = null;
function Ce(e = !1) {
  Ji.push(dr = e ? null : []);
}
function Am() {
  Ji.pop(), dr = Ji[Ji.length - 1] || null;
}
let sa = 1;
function Eu(e, t = !1) {
  sa += e, e < 0 && dr && t && (dr.hasOnce = !0);
}
function Fd(e) {
  return e.dynamicChildren = sa > 0 ? dr || di : null, Am(), sa > 0 && dr && dr.push(e), e;
}
function Te(e, t, r, i, a, c) {
  return Fd(
    oe(
      e,
      t,
      r,
      i,
      a,
      c,
      !0
    )
  );
}
function wi(e, t, r, i, a) {
  return Fd(
    kt(
      e,
      t,
      r,
      i,
      a,
      !0
    )
  );
}
function Vd(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ei(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hd = ({ key: e }) => e ?? null, fo = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? xt(e) || /* @__PURE__ */ Gt(e) || He(e) ? { i: fr, r: e, k: t, f: !!r } : e : null);
function oe(e, t = null, r = null, i = 0, a = null, c = e === Qe ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hd(t),
    ref: t && fo(t),
    scopeId: fd,
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
    shapeFlag: c,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: fr
  };
  return f ? (Jc(g, r), c & 128 && e.normalize(g)) : r && (g.shapeFlag |= xt(r) ? 8 : 16), sa > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  dr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && dr.push(g), g;
}
const kt = Im;
function Im(e, t = null, r = null, i = 0, a = null, c = !1) {
  if ((!e || e === vd) && (e = pn), Vd(e)) {
    const f = _i(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Jc(f, r), sa > 0 && !c && dr && (f.shapeFlag & 6 ? dr[dr.indexOf(e)] = f : dr.push(f)), f.patchFlag = -2, f;
  }
  if (Bm(e) && (e = e.__vccOpts), t) {
    t = Tm(t);
    let { class: f, style: g } = t;
    f && !xt(f) && (t.class = vt(f)), et(g) && (/* @__PURE__ */ Uc(g) && !Re(g) && (g = Kt({}, g)), t.style = $t(g));
  }
  const u = xt(e) ? 1 : Od(e) ? 128 : $0(e) ? 64 : et(e) ? 4 : He(e) ? 2 : 0;
  return oe(
    e,
    t,
    r,
    i,
    a,
    u,
    c,
    !0
  );
}
function Tm(e) {
  return e ? /* @__PURE__ */ Uc(e) || Pd(e) ? Kt({}, e) : e : null;
}
function _i(e, t, r = !1, i = !1) {
  const { props: a, ref: c, patchFlag: u, children: f, transition: g } = e, y = t ? zd(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && Hd(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && c ? Re(c) ? c.concat(fo(t)) : [c, fo(t)] : fo(t)
    ) : c,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Qe ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: g,
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
  return g && i && Yc(
    v,
    g.clone(v)
  ), v;
}
function Em(e = " ", t = 0) {
  return kt(Jo, null, e, t);
}
function Dm(e, t) {
  const r = kt(uo, null, e);
  return r.staticCount = t, r;
}
function ar(e = "", t = !1) {
  return t ? (Ce(), wi(pn, null, e)) : kt(pn, null, e);
}
function Lr(e) {
  return e == null || typeof e == "boolean" ? kt(pn) : Re(e) ? kt(
    Qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vd(e) ? Yr(e) : kt(Jo, null, String(e));
}
function Yr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _i(e);
}
function Jc(e, t) {
  let r = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Re(t))
    r = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Jc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !Pd(t) ? t._ctx = fr : a === 3 && fr && (fr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else He(t) ? (t = { default: t, _ctx: fr }, r = 32) : (t = String(t), i & 64 ? (r = 16, t = [Em(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function zd(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = vt([t.class, i.class]));
      else if (a === "style")
        t.style = $t([t.style, i.style]);
      else if ($o(a)) {
        const c = t[a], u = i[a];
        u && c !== u && !(Re(c) && c.includes(u)) ? t[a] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Bo(a) && (t[a] = u);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Cr(e, t, r, i = null) {
  Hr(e, t, 7, [
    r,
    i
  ]);
}
const Lm = wd();
let Rm = 0;
function Om(e, t, r) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Lm, c = {
    uid: Rm++,
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
    scope: new i0(
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
    propsOptions: Ad(i, a),
    emitsOptions: Sd(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: rt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: rt,
    data: rt,
    props: rt,
    attrs: rt,
    slots: rt,
    refs: rt,
    setupState: rt,
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
  return c.ctx = { _: c }, c.root = t ? t.root : c, c.emit = dm.bind(null, c), e.ce && e.ce(c), c;
}
let Ut = null;
const Fm = () => Ut || fr;
let ko, _c;
{
  const e = Ko(), t = (r, i) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(i), (c) => {
      a.length > 1 ? a.forEach((u) => u(c)) : a[0](c);
    };
  };
  ko = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Ut = r
  ), _c = t(
    "__VUE_SSR_SETTERS__",
    (r) => ca = r
  );
}
const pa = (e) => {
  const t = Ut;
  return ko(e), e.scope.on(), () => {
    e.scope.off(), ko(t);
  };
}, Du = () => {
  Ut && Ut.scope.off(), ko(null);
};
function jd(e) {
  return e.vnode.shapeFlag & 4;
}
let ca = !1;
function Vm(e, t = !1, r = !1) {
  t && _c(t);
  const { props: i, children: a } = e.vnode, c = jd(e);
  bm(e, i, c, t), wm(e, a, r || t);
  const u = c ? Hm(e, t) : void 0;
  return t && _c(!1), u;
}
function Hm(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nm);
  const { setup: i } = r;
  if (i) {
    Jr();
    const a = e.setupContext = i.length > 1 ? jm(e) : null, c = pa(e), u = ga(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = Hf(u);
    if (Qr(), c(), (f || e.sp) && !Xi(e) && gd(e), f) {
      if (u.then(Du, Du), t)
        return u.then((g) => {
          Lu(e, g);
        }).catch((g) => {
          qo(g, e, 0);
        });
      e.asyncDep = u;
    } else
      Lu(e, u);
  } else
    $d(e);
}
function Lu(e, t, r) {
  He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = od(t)), $d(e);
}
function $d(e, t, r) {
  const i = e.type;
  e.render || (e.render = i.render || Fr);
  {
    const a = pa(e);
    Jr();
    try {
      im(e);
    } finally {
      Qr(), a();
    }
  }
}
const zm = {
  get(e, t) {
    return Bt(e, "get", ""), e[t];
  }
};
function jm(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, zm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Qo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(od(M0(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Zi)
        return Zi[r](e);
    },
    has(t, r) {
      return r in t || r in Zi;
    }
  })) : e.proxy;
}
function $m(e, t = !0) {
  return He(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Bm(e) {
  return He(e) && "__vccOpts" in e;
}
const Mr = (e, t) => /* @__PURE__ */ I0(e, t, ca), Um = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xc;
const Ru = typeof window < "u" && window.trustedTypes;
if (Ru)
  try {
    xc = /* @__PURE__ */ Ru.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Bd = xc ? (e) => xc.createHTML(e) : (e) => e, Gm = "http://www.w3.org/2000/svg", Km = "http://www.w3.org/1998/Math/MathML", Kr = typeof document < "u" ? document : null, Ou = Kr && /* @__PURE__ */ Kr.createElement("template"), Wm = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, i) => {
    const a = t === "svg" ? Kr.createElementNS(Gm, e) : t === "mathml" ? Kr.createElementNS(Km, e) : r ? Kr.createElement(e, { is: r }) : Kr.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => Kr.createTextNode(e),
  createComment: (e) => Kr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, i, a, c) {
    const u = r ? r.previousSibling : t.lastChild;
    if (a && (a === c || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), r), !(a === c || !(a = a.nextSibling)); )
        ;
    else {
      Ou.innerHTML = Bd(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Ou.content;
      if (i === "svg" || i === "mathml") {
        const g = f.firstChild;
        for (; g.firstChild; )
          f.appendChild(g.firstChild);
        f.removeChild(g);
      }
      t.insertBefore(f, r);
    }
    return [
      // first
      u ? u.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Ym = /* @__PURE__ */ Symbol("_vtc");
function qm(e, t, r) {
  const i = e[Ym];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Po = /* @__PURE__ */ Symbol("_vod"), Ud = /* @__PURE__ */ Symbol("_vsh"), Qc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Po] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Di(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: i }) {
    !t != !r && (i ? t ? (i.beforeEnter(e), Di(e, !0), i.enter(e)) : i.leave(e, () => {
      Di(e, !1);
    }) : Di(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Di(e, t);
  }
};
function Di(e, t) {
  e.style.display = t ? e[Po] : "none", e[Ud] = !t;
}
const Xm = /* @__PURE__ */ Symbol(""), Zm = /(?:^|;)\s*display\s*:/;
function Jm(e, t, r) {
  const i = e.style, a = xt(r);
  let c = !1;
  if (r && !a) {
    if (t)
      if (xt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          r[f] == null && ho(i, f, "");
        }
      else
        for (const u in t)
          r[u] == null && ho(i, u, "");
    for (const u in r)
      u === "display" && (c = !0), ho(i, u, r[u]);
  } else if (a) {
    if (t !== r) {
      const u = i[Xm];
      u && (r += ";" + u), i.cssText = r, c = Zm.test(r);
    }
  } else t && e.removeAttribute("style");
  Po in e && (e[Po] = c ? i.display : "", e[Ud] && (i.display = "none"));
}
const Fu = /\s*!important$/;
function ho(e, t, r) {
  if (Re(r))
    r.forEach((i) => ho(e, t, i));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const i = Qm(e, t);
    Fu.test(r) ? e.setProperty(
      Vn(i),
      r.replace(Fu, ""),
      "important"
    ) : e[i] = r;
  }
}
const Vu = ["Webkit", "Moz", "ms"], Ws = {};
function Qm(e, t) {
  const r = Ws[t];
  if (r)
    return r;
  let i = Qt(t);
  if (i !== "filter" && i in e)
    return Ws[t] = i;
  i = Go(i);
  for (let a = 0; a < Vu.length; a++) {
    const c = Vu[a] + i;
    if (c in e)
      return Ws[t] = c;
  }
  return t;
}
const Hu = "http://www.w3.org/1999/xlink";
function zu(e, t, r, i, a, c = r0(t)) {
  i && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Hu, t.slice(6, t.length)) : e.setAttributeNS(Hu, t, r) : r == null || c && !Bf(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    c ? "" : Vr(r) ? String(r) : r
  );
}
function ju(e, t, r, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Bd(r) : r);
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const f = c === "OPTION" ? e.getAttribute("value") || "" : e.value, g = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (f !== g || !("_value" in e)) && (e.value = g), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let u = !1;
  if (r === "" || r == null) {
    const f = typeof e[t];
    f === "boolean" ? r = Bf(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function e1(e, t, r, i) {
  e.addEventListener(t, r, i);
}
function t1(e, t, r, i) {
  e.removeEventListener(t, r, i);
}
const $u = /* @__PURE__ */ Symbol("_vei");
function r1(e, t, r, i, a = null) {
  const c = e[$u] || (e[$u] = {}), u = c[t];
  if (i && u)
    u.value = i;
  else {
    const [f, g] = n1(t);
    if (i) {
      const y = c[t] = o1(
        i,
        a
      );
      e1(e, f, y, g);
    } else u && (t1(e, f, u, g), c[t] = void 0);
  }
}
const Bu = /(?:Once|Passive|Capture)$/;
function n1(e) {
  let t;
  if (Bu.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Bu); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Vn(e.slice(2)), t];
}
let Ys = 0;
const i1 = /* @__PURE__ */ Promise.resolve(), a1 = () => Ys || (i1.then(() => Ys = 0), Ys = Date.now());
function o1(e, t) {
  const r = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= r.attached)
      return;
    Hr(
      s1(i, r.value),
      t,
      5,
      [i]
    );
  };
  return r.value = e, r.attached = a1(), r;
}
function s1(e, t) {
  if (Re(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const Uu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, c1 = (e, t, r, i, a, c) => {
  const u = a === "svg";
  t === "class" ? qm(e, i, u) : t === "style" ? Jm(e, r, i) : $o(t) ? Bo(t) || r1(e, t, r, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : l1(e, t, i, u)) ? (ju(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zu(e, t, i, u, c, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (u1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xt(i))) ? ju(e, Qt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), zu(e, t, i, u));
};
function l1(e, t, r, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Uu(t) && He(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Uu(t) && xt(r) ? !1 : t in e;
}
function u1(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const i = Qt(t);
  return Array.isArray(r) ? r.some((a) => Qt(a) === i) : Object.keys(r).some((a) => Qt(a) === i);
}
const f1 = ["ctrl", "shift", "alt", "meta"], d1 = {
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
  exact: (e, t) => f1.some((r) => e[`${r}Key`] && !t.includes(r))
}, Gd = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), i = t.join(".");
  return r[i] || (r[i] = ((a, ...c) => {
    for (let u = 0; u < t.length; u++) {
      const f = d1[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...c);
  }));
}, h1 = /* @__PURE__ */ Kt({ patchProp: c1 }, Wm);
let Gu;
function g1() {
  return Gu || (Gu = Nm(h1));
}
const p1 = ((...e) => {
  const t = g1().createApp(...e), { mount: r } = t;
  return t.mount = (i) => {
    const a = y1(i);
    if (!a) return;
    const c = t._component;
    !He(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = r(a, !1, m1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function m1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function y1(e) {
  return xt(e) ? document.querySelector(e) : e;
}
const gt = Math.PI / 180, Kd = Math.PI * 2, b1 = 2048;
function tt(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function mn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Co(e, t) {
  return mn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function fi(e, t) {
  return mn(e.x * t, e.y * t, e.z * t);
}
function go(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ku(e, t) {
  return mn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ji(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return mn(e.x / t, e.y / t, e.z / t);
}
function v1(e, t) {
  const r = Number(e || 0) * gt, i = Number(t || 0) * gt, a = Math.cos(i);
  return mn(a * Math.sin(r), Math.sin(i), a * Math.cos(r));
}
function po(e, t, r = 0) {
  const i = v1(e, t);
  let a = mn(0, 1, 0);
  Math.abs(go(i, a)) > 0.999 && (a = mn(0, 0, 1));
  let c = ji(Ku(a, i)), u = ji(Ku(i, c));
  const f = Number(r || 0) * gt, g = Math.cos(f), y = Math.sin(f), v = Co(fi(c, g), fi(u, y)), h = Co(fi(c, -y), fi(u, g));
  return c = ji(v), u = ji(h), { fwd: i, right: c, up: u };
}
function _1(e, t) {
  const r = (Number(e || 0) - 0.5) * Kd, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return mn(a * Math.sin(r), Math.sin(i), a * Math.cos(r));
}
function Wu(e, t, r = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Number(r || 1)), u = Math.max(512, b1), f = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: c,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Yu(e, t, r) {
  const i = e.createShader(t);
  if (e.shaderSource(i, r), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function qs(e, t, r) {
  const i = Yu(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Yu(e, e.FRAGMENT_SHADER, r);
  } catch (u) {
    throw e.deleteShader(i), u;
  }
  const c = e.createProgram();
  if (e.attachShader(c, i), e.attachShader(c, a), e.linkProgram(c), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(c, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(c) || "program link failed";
    throw e.deleteProgram(c), new Error(u);
  }
  return c;
}
const Xs = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, x1 = `#version 300 es
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
}`, w1 = `#version 300 es
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
}`, S1 = `#version 300 es
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
function Li(e, t, r) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(tt(i, 1, 179) * gt * 0.5) * (r / Math.max(t, 1))) / gt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: tt(i, 1, 179),
    vFovDeg: tt(a, 0.1, 179)
  };
}
function N1(e) {
  const t = po(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(tt(Number(e.hFovDeg), 0.1, 179) * 0.5 * gt),
    tanY: Math.tan(tt(Number(e.vFovDeg), 0.1, 179) * 0.5 * gt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: tt(Number(e.opacity ?? 1), 0, 1)
  };
}
function M1(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let r = null, i = null, a = null, c = null, u = null, f = null, g = null, y = null, v = null, h = null, w = null, P = !1, C = Wu(1, 1, 1), A = null, j = null, V = null, O = null, T = null;
  const I = /* @__PURE__ */ new Map();
  let U = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, ne = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, se = {
    paint: !1,
    mask: !1
  };
  function te(E = null, $ = null) {
    const z = r.createTexture();
    return r.bindTexture(r.TEXTURE_2D, z), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, E ?? r.REPEAT), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, $ ?? r.CLAMP_TO_EDGE), z;
  }
  function we() {
    if (P) return !0;
    try {
      return r = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), r ? (i = qs(r, Xs, x1), a = qs(r, Xs, w1), c = qs(r, Xs, S1), A = {
        mode: r.getUniformLocation(i, "u_mode"),
        yaw: r.getUniformLocation(i, "u_yaw"),
        pitch: r.getUniformLocation(i, "u_pitch"),
        roll: r.getUniformLocation(i, "u_roll"),
        hFov: r.getUniformLocation(i, "u_hfov"),
        vFov: r.getUniformLocation(i, "u_vfov"),
        viewport: r.getUniformLocation(i, "u_viewport"),
        opacity: r.getUniformLocation(i, "u_opacity"),
        coverage: r.getUniformLocation(i, "u_coverage"),
        background: r.getUniformLocation(i, "u_background")
      }, j = {
        mode: r.getUniformLocation(a, "u_mode"),
        yaw: r.getUniformLocation(a, "u_yaw"),
        pitch: r.getUniformLocation(a, "u_pitch"),
        roll: r.getUniformLocation(a, "u_roll"),
        hFov: r.getUniformLocation(a, "u_hfov"),
        vFov: r.getUniformLocation(a, "u_vfov"),
        paintOpacity: r.getUniformLocation(a, "u_paintOpacity"),
        maskOpacity: r.getUniformLocation(a, "u_maskOpacity"),
        hasPaint: r.getUniformLocation(a, "u_hasPaint"),
        hasMask: r.getUniformLocation(a, "u_hasMask"),
        showMaskTint: r.getUniformLocation(a, "u_showMaskTint"),
        maskTint: r.getUniformLocation(a, "u_maskTint"),
        paint: r.getUniformLocation(a, "u_paint"),
        mask: r.getUniformLocation(a, "u_mask")
      }, V = {
        texture: r.getUniformLocation(c, "u_texture"),
        mode: r.getUniformLocation(c, "u_mode"),
        viewRight: r.getUniformLocation(c, "u_viewRight"),
        viewUp: r.getUniformLocation(c, "u_viewUp"),
        viewFwd: r.getUniformLocation(c, "u_viewFwd"),
        viewHfov: r.getUniformLocation(c, "u_viewHfov"),
        viewVfov: r.getUniformLocation(c, "u_viewVfov"),
        stickerRight: r.getUniformLocation(c, "u_stickerRight"),
        stickerUp: r.getUniformLocation(c, "u_stickerUp"),
        stickerFwd: r.getUniformLocation(c, "u_stickerFwd"),
        stickerTanX: r.getUniformLocation(c, "u_stickerTanX"),
        stickerTanY: r.getUniformLocation(c, "u_stickerTanY"),
        crop: r.getUniformLocation(c, "u_crop"),
        opacity: r.getUniformLocation(c, "u_opacity")
      }, u = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferData(r.ARRAY_BUFFER, new Float32Array([
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
      ]), r.STATIC_DRAW), f = te(r.REPEAT, r.CLAMP_TO_EDGE), g = te(r.REPEAT, r.CLAMP_TO_EDGE), y = te(r.REPEAT, r.CLAMP_TO_EDGE), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), P = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function M() {
    var E;
    if (r) {
      try {
        u && r.deleteBuffer(u), f && r.deleteTexture(f), g && r.deleteTexture(g), y && r.deleteTexture(y), I.forEach(($) => {
          Ie($);
        }), i && r.deleteProgram(i), a && r.deleteProgram(a), c && r.deleteProgram(c), (E = r.getExtension("WEBGL_lose_context")) == null || E.loseContext();
      } catch {
      }
      r = null, i = null, a = null, c = null, u = null, f = null, g = null, y = null, I.clear(), v = null, h = null, w = null, ne = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, se = {
        paint: !1,
        mask: !1
      }, O = null, T = null, P = !1;
    }
  }
  function he(E, $, z = 1) {
    C = Wu(E, $, z), (t.width !== C.width || t.height !== C.height) && (t.width = C.width, t.height = C.height);
  }
  function fe(E) {
    E === "background" ? v = null : E === "paint" ? h = null : w = null, ne[E] && (ne[E].width = 0, ne[E].height = 0);
  }
  function ue() {
    se.paint = !1, se.mask = !1;
  }
  function G(E) {
    ue(), E === "paint" ? se.paint = !0 : E === "mask" && (se.mask = !0);
  }
  function ae(E, $, z = [], Q = { width: 0, height: 0 }, J = !1) {
    if (!r || !E || !$) return !1;
    const R = Number($.width || $.videoWidth || $.naturalWidth || 0), ve = Number($.height || $.videoHeight || $.naturalHeight || 0);
    if (!(R > 1) || !(ve > 1)) return !1;
    const de = Array.isArray(z) ? z.filter((xe) => xe && xe.w > 0 && xe.h > 0) : [];
    if (!de.length) return !1;
    if (r.bindTexture(r.TEXTURE_2D, E), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, J ? 1 : 0), Q.width !== R || Q.height !== ve)
      return r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, $), Q.width = R, Q.height = ve, r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (O || (O = document.createElement("canvas"), T = O.getContext("2d")), !T)
      return r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, $), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const xe of de) {
      const Me = Math.max(0, Math.floor(Number(xe.x || 0))), Ae = Math.max(0, Math.floor(Number(xe.y || 0))), Ee = Math.min(R - Me, Math.ceil(Number(xe.w || 0))), Le = Math.min(ve - Ae, Math.ceil(Number(xe.h || 0)));
      if (!(Ee <= 0 || Le <= 0)) {
        if (O.width !== Ee || O.height !== Le) {
          if (O.width = Ee, O.height = Le, T = O.getContext("2d"), !T)
            return r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, $), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          T.clearRect(0, 0, Ee, Le);
        T.drawImage($, Me, Ae, Ee, Le, 0, 0, Ee, Le), r.texSubImage2D(r.TEXTURE_2D, 0, Me, Ae, r.RGBA, r.UNSIGNED_BYTE, O);
      }
    }
    return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function me(E, $, z, Q, J = null, R = !1) {
    if (!we()) return !1;
    if (!z)
      return fe(E), !1;
    const ve = String(Q ?? ""), de = E === "background" ? v : E === "paint" ? h : w, xe = ne[E], Me = Number(z.width || z.videoWidth || z.naturalWidth || 0), Ae = Number(z.height || z.videoHeight || z.naturalHeight || 0), Ee = xe.width !== Me || xe.height !== Ae;
    if (de === ve && !Ee && !(Array.isArray(J) && J.length)) return !0;
    if (!(Me > 0) || !(Ae > 0))
      return fe(E), !1;
    if (r.bindTexture(r.TEXTURE_2D, $), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, R ? 1 : 0), !(Array.isArray(J) && J.length ? ae($, z, J, xe, R) : !1)) {
      if (r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, z), r.getError() !== r.NO_ERROR)
        return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), fe(E), !1;
      xe.width = Me, xe.height = Ae;
    }
    return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), E === "background" ? v = ve : E === "paint" ? h = ve : w = ve, !0;
  }
  function ge(E, $) {
    return me("background", f, E, $, null, !0);
  }
  function q(E, $, z = null) {
    return me("paint", g, E, $, z, !0);
  }
  function ce(E, $, z = null) {
    return me("mask", y, E, $, z, !0);
  }
  function Ie(E) {
    E != null && E.texture && r && r.deleteTexture(E.texture);
  }
  function De(E = /* @__PURE__ */ new Set()) {
    I.forEach(($, z) => {
      E.has(z) || (Ie($), I.delete(z));
    });
  }
  function Oe(E) {
    if (!r || !(E != null && E.assetId) || !(E != null && E.source)) return null;
    const $ = String(E.assetId), z = String(E.revision ?? ""), Q = E.source, J = Number(Q.width || Q.naturalWidth || Q.videoWidth || 0), R = Number(Q.height || Q.naturalHeight || Q.videoHeight || 0);
    if (J <= 0 || R <= 0) return null;
    let ve = I.get($);
    if (ve || (ve = {
      texture: te(r.CLAMP_TO_EDGE, r.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, I.set($, ve)), ve.revision !== z || ve.width !== J || ve.height !== R) {
      if (r.bindTexture(r.TEXTURE_2D, ve.texture), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, Q), r.getError() !== r.NO_ERROR)
        return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ve.revision = z, ve.width = J, ve.height = R;
    }
    return ve.texture;
  }
  function dt(E = []) {
    if (!we()) return !1;
    const $ = /* @__PURE__ */ new Set();
    return E.forEach((z) => {
      !(z != null && z.assetId) || !(z != null && z.source) || ($.add(String(z.assetId)), Oe(z));
    }), De($), !0;
  }
  function ot() {
    return we() ? (r.viewport(0, 0, t.width, t.height), r.disable(r.DEPTH_TEST), r.disable(r.CULL_FACE), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), !0) : !1;
  }
  function St(E) {
    r.useProgram(E), r.bindBuffer(r.ARRAY_BUFFER, u), r.enableVertexAttribArray(0), r.vertexAttribPointer(0, 2, r.FLOAT, !1, 0, 0);
  }
  function Nt(E, $ = {}) {
    if (!v) return null;
    r.disable(r.BLEND), St(i), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, f), r.uniform1i(A.background, 0), r.uniform2f(A.viewport, Math.max(1, C.width), Math.max(1, C.height)), r.uniform1i(A.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const z = Li(E, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    r.uniform1f(A.yaw, Number(z.yawDeg || 0) * gt), r.uniform1f(A.pitch, Number(z.pitchDeg || 0) * gt), r.uniform1f(A.roll, Number(z.rollDeg || 0) * gt), r.uniform1f(A.hFov, tt(Number(z.hFovDeg || 90), 0.1, 179) * gt), r.uniform1f(A.vFov, tt(Number(z.vFovDeg || 60), 0.1, 179) * gt), r.uniform1f(A.opacity, tt(Number($.backgroundOpacity ?? 1), 0, 1));
    const Q = Number((E == null ? void 0 : E.coverageDeg) || ($ == null ? void 0 : $.coverageDeg) || 360) === 180 ? 180 : 360;
    return r.uniform1i(A.coverage, Q), r.drawArrays(r.TRIANGLES, 0, 6), t;
  }
  function It(E, $ = {}) {
    const z = se.paint && h != null, Q = se.mask && w != null;
    if (!z && !Q) return null;
    r.enable(r.BLEND), r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA), St(a), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, g), r.uniform1i(j.paint, 0), r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, y), r.uniform1i(j.mask, 1), r.uniform1i(j.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const J = Li(E, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return r.uniform1f(j.yaw, Number(J.yawDeg || 0) * gt), r.uniform1f(j.pitch, Number(J.pitchDeg || 0) * gt), r.uniform1f(j.roll, Number(J.rollDeg || 0) * gt), r.uniform1f(j.hFov, tt(Number(J.hFovDeg || 90), 0.1, 179) * gt), r.uniform1f(j.vFov, tt(Number(J.vFovDeg || 60), 0.1, 179) * gt), r.uniform1f(j.paintOpacity, tt(Number($.paintOpacity ?? 1), 0, 1)), r.uniform1f(j.maskOpacity, tt(Number($.maskOpacity ?? 0.55), 0, 1)), r.uniform1i(j.hasPaint, z ? 1 : 0), r.uniform1i(j.hasMask, Q ? 1 : 0), r.uniform1i(j.showMaskTint, $.showMaskTint === !1 ? 0 : 1), r.uniform3f(j.maskTint, 34 / 255, 197 / 255, 94 / 255), r.drawArrays(r.TRIANGLES, 0, 6), r.disable(r.BLEND), t;
  }
  function or(E, $) {
    var xe, Me, Ae, Ee, Le, nt, lt;
    const z = Array.isArray(E == null ? void 0 : E.objects) ? E.objects : [];
    if (!z.length) {
      ue(), De(/* @__PURE__ */ new Set());
      return;
    }
    const Q = ($ == null ? void 0 : $.mode) === "unwrap" ? 0 : ($ == null ? void 0 : $.mode) === "cutout" ? 2 : 1, J = Li($, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, R = po(J.yawDeg, J.pitchDeg, J.rollDeg), ve = z.slice().sort((ke, pt) => Number((ke == null ? void 0 : ke.zIndex) || 0) - Number((pt == null ? void 0 : pt.zIndex) || 0)), de = /* @__PURE__ */ new Set();
    ue();
    for (const ke of ve)
      if (!(!ke || ke.visible === !1)) {
        if (ke.type === "sticker") {
          const pt = String(((xe = ke == null ? void 0 : ke.params) == null ? void 0 : xe.assetId) || (ke == null ? void 0 : ke.id) || "");
          if (!pt) continue;
          de.add(pt);
          const Pt = Oe({
            assetId: pt,
            source: ke.source,
            revision: ke.revision
          });
          if (!Pt) continue;
          const Ue = N1({
            yawDeg: ((Me = ke == null ? void 0 : ke.transform) == null ? void 0 : Me.yawDeg) || 0,
            pitchDeg: ((Ae = ke == null ? void 0 : ke.transform) == null ? void 0 : Ae.pitchDeg) || 0,
            rollDeg: ((Ee = ke == null ? void 0 : ke.transform) == null ? void 0 : Ee.rollDeg) || 0,
            hFovDeg: ((Le = ke == null ? void 0 : ke.transform) == null ? void 0 : Le.hFovDeg) || 30,
            vFovDeg: ((nt = ke == null ? void 0 : ke.transform) == null ? void 0 : nt.vFovDeg) || 30,
            crop: ((lt = ke == null ? void 0 : ke.params) == null ? void 0 : lt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ke == null ? void 0 : ke.opacity) ?? 1
          });
          r.enable(r.BLEND), r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA), St(c), r.uniform1i(V.texture, 0), r.uniform1i(V.mode, Q), r.uniform3f(V.viewRight, R.right.x, R.right.y, R.right.z), r.uniform3f(V.viewUp, R.up.x, R.up.y, R.up.z), r.uniform3f(V.viewFwd, R.fwd.x, R.fwd.y, R.fwd.z), r.uniform1f(V.viewHfov, tt(Number(J.hFovDeg || 90), 0.1, 179) * gt), r.uniform1f(V.viewVfov, tt(Number(J.vFovDeg || 60), 0.1, 179) * gt), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, Pt), r.uniform3f(V.stickerRight, Ue.right.x, Ue.right.y, Ue.right.z), r.uniform3f(V.stickerUp, Ue.up.x, Ue.up.y, Ue.up.z), r.uniform3f(V.stickerFwd, Ue.fwd.x, Ue.fwd.y, Ue.fwd.z), r.uniform1f(V.stickerTanX, Math.max(1e-6, Ue.tanX)), r.uniform1f(V.stickerTanY, Math.max(1e-6, Ue.tanY)), r.uniform4f(
            V.crop,
            tt(Number(Ue.crop.x0 ?? 0), 0, 1),
            tt(Number(Ue.crop.y0 ?? 0), 0, 1),
            tt(Number(Ue.crop.x1 ?? 1), 0, 1),
            tt(Number(Ue.crop.y1 ?? 1), 0, 1)
          ), r.uniform1f(V.opacity, Ue.opacity), r.drawArrays(r.TRIANGLES, 0, 6), r.disable(r.BLEND);
          continue;
        }
        if (ke.type === "paint" || ke.type === "raster") {
          if (!q(ke.source, ke.revision ?? "")) continue;
          G("paint"), It($, {
            paintOpacity: Number(ke.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ke.type === "mask") {
          if (!ce(ke.source, ke.revision ?? "")) continue;
          G("mask"), It($, {
            paintOpacity: 0,
            maskOpacity: Number(ke.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    De(de), ue();
  }
  function hr(E) {
    return !ot() || !v ? null : (Nt({
      mode: "panorama",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      fovDeg: (E == null ? void 0 : E.fovDeg) || 100
    }, E), t);
  }
  function sr(E) {
    return !ot() || !v ? null : (Nt({ mode: "unwrap" }, E), t);
  }
  function m(E) {
    return !ot() || !v ? null : (Nt({
      mode: "cutout",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      rollDeg: (E == null ? void 0 : E.rollDeg) || 0,
      hFovDeg: (E == null ? void 0 : E.hFovDeg) || 90,
      vFovDeg: (E == null ? void 0 : E.vFovDeg) || 60
    }, E), t);
  }
  function D(E = {}) {
    if (!we() || (he(E.width, E.height, E.dpr || 1), !ot())) return null;
    const $ = Object.prototype.hasOwnProperty.call(E, "backgroundSource"), z = Object.prototype.hasOwnProperty.call(E, "paintSource"), Q = Object.prototype.hasOwnProperty.call(E, "maskSource"), J = Object.prototype.hasOwnProperty.call(E, "textures"), R = Object.prototype.hasOwnProperty.call(E, "scene");
    return $ && ge(E.backgroundSource, E.backgroundRevision ?? ""), z && q(E.paintSource, E.paintRevision ?? ""), Q && ce(E.maskSource, E.maskRevision ?? ""), J && (dt(E.textures || []), U.textures = E.textures || []), R && (U.scene = E.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "objectPass") && (U.objectPass = E.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "backgroundOpacity") && (U.backgroundOpacity = Number(E.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(E, "showMaskTint") && (U.showMaskTint = E.showMaskTint === !0), Object.prototype.hasOwnProperty.call(E, "coverageDeg") && (U.coverageDeg = Number(E.coverageDeg || 360) === 180 ? 180 : 360), v && Nt(E.view, {
      ...E,
      backgroundOpacity: Number(E.backgroundOpacity ?? U.backgroundOpacity ?? 1),
      coverageDeg: Number(E.coverageDeg || U.coverageDeg || 360) === 180 ? 180 : 360
    }), or(
      U.objectPass || { objects: [] },
      E.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function H(E = {}) {
    return we() ? !!D({
      ...E,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(E.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function Z(E, $, z) {
    const Q = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || C.sourceWidth || C.width || 1)), J = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || C.sourceHeight || C.height || 1)), R = Number($), ve = Number(z);
    if (!Number.isFinite(R) || !Number.isFinite(ve)) return null;
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return { u: (R / Q % 1 + 1) % 1, v: tt(ve / J, 0, 1) };
    const de = Li(E, Q, J);
    if (!de) return null;
    const xe = po(de.yawDeg, de.pitchDeg, de.rollDeg), Me = (R - Q * 0.5) / (Q * 0.5) * Math.tan(tt(de.hFovDeg, 1, 179) * gt * 0.5), Ae = (J * 0.5 - ve) / (J * 0.5) * Math.tan(tt(de.vFovDeg, 0.1, 179) * gt * 0.5), Ee = ji(Co(Co(fi(xe.right, Me), fi(xe.up, Ae)), xe.fwd));
    return {
      u: (Math.atan2(Ee.x, Ee.z) / Kd + 0.5 + 1) % 1,
      v: tt(0.5 - Math.asin(tt(Ee.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function le(E, $, z) {
    const Q = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || C.sourceWidth || C.width || 1)), J = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || C.sourceHeight || C.height || 1));
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return {
        x: (Number($ || 0) % 1 + 1) % 1 * Q,
        y: tt(Number(z || 0), 0, 1) * J,
        visible: !0
      };
    const R = Li(E, Q, J);
    if (!R)
      return { x: Q * 0.5, y: J * 0.5, visible: !1 };
    const ve = po(R.yawDeg, R.pitchDeg, R.rollDeg), de = _1($, z), xe = go(de, ve.right), Me = go(de, ve.up), Ae = go(de, ve.fwd);
    if (Ae <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ee = Q * 0.5 + xe / Ae * (Q * 0.5 / Math.tan(tt(R.hFovDeg, 1, 179) * gt * 0.5)), Le = J * 0.5 - Me / Ae * (J * 0.5 / Math.tan(tt(R.vFovDeg, 0.1, 179) * gt * 0.5));
    return { x: Ee, y: Le, visible: Ee >= 0 && Ee <= Q && Le >= 0 && Le <= J };
  }
  return {
    init: we,
    dispose: M,
    setViewport: he,
    setBackgroundErp: ge,
    setPaintErp: q,
    setMaskErp: ce,
    renderPanorama: hr,
    renderUnwrap: sr,
    renderCutout: m,
    renderScene: D,
    syncState: H,
    screenToErpUv: Z,
    erpUvToScreen: le,
    getCanvas() {
      return t;
    },
    isSupported() {
      return we();
    },
    getViewport() {
      return { ...C };
    }
  };
}
function qu(e, t = 1, r = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(r, Math.max(1, Number.isFinite(i) ? i : 1));
}
function k1() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function r(u, f, g) {
    const y = t(u);
    let v = e.get(y) || null;
    if (!v) {
      const P = document.createElement("canvas"), C = P.getContext("2d");
      if (!C) return null;
      v = {
        id: y,
        canvas: P,
        ctx: C,
        width: 0,
        height: 0
      }, e.set(y, v);
    }
    const h = qu(f), w = qu(g);
    return v.width !== h && (v.canvas.width = h, v.width = h), v.height !== w && (v.canvas.height = w, v.height = w), v;
  }
  function i(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = i(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function c() {
    e.clear();
  }
  return {
    ensureTarget: r,
    getTarget: i,
    clearTarget: a,
    dispose: c
  };
}
const P1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), C1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Wd(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function A1(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function I1(e = {}) {
  const t = C1.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", r = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(r) ? Wd(r, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function T1(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!P1.has(t)) return null;
  const r = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(r) ? Wd(r, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: A1(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function E1(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => T1(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const c = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return c !== u ? c - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function xi(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: I1((e == null ? void 0 : e.background) || {}),
    objectPass: E1((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function D1(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function el(e = {}, t = "paint") {
  const r = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${r}_layer`),
    type: r,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? D1(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function L1(e, t, r = {}) {
  return e ? el({
    id: String((r == null ? void 0 : r.id) || "paint_layer"),
    type: "paint",
    source: e,
    revision: t,
    zIndex: Number((r == null ? void 0 : r.zIndex) ?? 100),
    opacity: Number((r == null ? void 0 : r.opacity) ?? 1),
    visible: (r == null ? void 0 : r.visible) !== !1,
    params: (r == null ? void 0 : r.params) || {}
  }, "paint") : null;
}
function R1(e, t, r = {}) {
  return e ? el({
    id: String((r == null ? void 0 : r.id) || "mask_layer"),
    type: "mask",
    source: e,
    revision: t,
    zIndex: Number((r == null ? void 0 : r.zIndex) ?? 110),
    opacity: Number((r == null ? void 0 : r.opacity) ?? 1),
    visible: (r == null ? void 0 : r.visible) !== !1,
    params: (r == null ? void 0 : r.params) || {}
  }, "mask") : null;
}
function O1(e, t, r = {}) {
  return e ? el({
    id: String((r == null ? void 0 : r.id) || "raster_layer"),
    type: "raster",
    source: e,
    revision: t,
    zIndex: Number((r == null ? void 0 : r.zIndex) ?? 90),
    opacity: Number((r == null ? void 0 : r.opacity) ?? 1),
    visible: (r == null ? void 0 : r.visible) !== !1,
    transform: (r == null ? void 0 : r.transform) || null,
    params: (r == null ? void 0 : r.params) || {}
  }, "raster") : null;
}
function Yd(e = {}) {
  const t = [], r = L1(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = R1(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return r && t.push(r), i && t.push(i), a.forEach((c, u) => {
    const f = O1(
      (c == null ? void 0 : c.source) || null,
      (c == null ? void 0 : c.revision) || "",
      {
        id: String((c == null ? void 0 : c.id) || `raster_layer_${u}`),
        zIndex: Number((c == null ? void 0 : c.zIndex) ?? (c == null ? void 0 : c.z_index) ?? 90),
        opacity: Number((c == null ? void 0 : c.opacity) ?? 1),
        visible: (c == null ? void 0 : c.visible) !== !1,
        transform: (c == null ? void 0 : c.transform) || null,
        params: (c == null ? void 0 : c.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((c, u) => {
    const f = Number((c == null ? void 0 : c.zIndex) || 0), g = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== g ? f - g : String((c == null ? void 0 : c.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function tl(e, t) {
  const r = new Map(
    (Array.isArray(t) ? t : []).map((i) => [String((i == null ? void 0 : i.assetId) || ""), i]).filter(([i, a]) => i && (a == null ? void 0 : a.source))
  );
  return Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers.map((i) => {
    const a = r.get(String((i == null ? void 0 : i.assetId) || ""));
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
function es(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, r = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, c = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
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
      coverageDeg: r,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: tl(a, c)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function $i(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, r = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = tl(t, r), a = Yd({
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
function F1(e = {}) {
  var c, u, f, g, y, v, h, w;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const P = xi(e), C = Array.isArray((c = P.objectPass) == null ? void 0 : c.objects) ? P.objectPass.objects : [], A = {
      stickers: C.filter((T) => T.type === "sticker").map((T) => {
        var I, U, ne, se, te, we, M, he, fe, ue, G, ae, me;
        return {
          id: T.id,
          assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((U = T == null ? void 0 : T.params) == null ? void 0 : U.asset_id) || (T == null ? void 0 : T.id) || ""),
          yawDeg: Number(((ne = T == null ? void 0 : T.transform) == null ? void 0 : ne.yawDeg) ?? ((se = T == null ? void 0 : T.params) == null ? void 0 : se.yawDeg) ?? 0),
          pitchDeg: Number(((te = T == null ? void 0 : T.transform) == null ? void 0 : te.pitchDeg) ?? ((we = T == null ? void 0 : T.params) == null ? void 0 : we.pitchDeg) ?? 0),
          rollDeg: Number(((M = T == null ? void 0 : T.transform) == null ? void 0 : M.rollDeg) ?? ((he = T == null ? void 0 : T.params) == null ? void 0 : he.rollDeg) ?? 0),
          hFovDeg: Number(((fe = T == null ? void 0 : T.transform) == null ? void 0 : fe.hFovDeg) ?? ((ue = T == null ? void 0 : T.params) == null ? void 0 : ue.hFovDeg) ?? 30),
          vFovDeg: Number(((G = T == null ? void 0 : T.transform) == null ? void 0 : G.vFovDeg) ?? ((ae = T == null ? void 0 : T.params) == null ? void 0 : ae.vFovDeg) ?? 30),
          crop: ((me = T == null ? void 0 : T.params) == null ? void 0 : me.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((T == null ? void 0 : T.opacity) ?? 1),
          visible: (T == null ? void 0 : T.visible) !== !1,
          zIndex: Number((T == null ? void 0 : T.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = P.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = P.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, j = C.filter((T) => T.type === "sticker").map((T) => {
      var I, U;
      return {
        assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((U = T == null ? void 0 : T.params) == null ? void 0 : U.asset_id) || (T == null ? void 0 : T.id) || ""),
        source: T.source || null,
        revision: String((T == null ? void 0 : T.revision) || "")
      };
    }).filter((T) => T.assetId && T.source), V = C.find((T) => T.type === "paint") || null, O = C.find((T) => T.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((g = P.background) == null ? void 0 : g.source) || null,
      backgroundRevision: String(((y = P.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((v = P.background) == null ? void 0 : v.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (V == null ? void 0 : V.source) || null,
      paintRevision: String((V == null ? void 0 : V.revision) || ""),
      maskSource: (O == null ? void 0 : O.source) || null,
      maskRevision: String((O == null ? void 0 : O.revision) || ""),
      textures: j,
      scene: A,
      objectPass: P.objectPass,
      backgroundOpacity: Number(((h = P.background) == null ? void 0 : h.opacity) ?? 1),
      showMaskTint: ((w = e == null ? void 0 : e.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, r = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = xi({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...tl(t, r),
        ...Yd({
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
    textures: r,
    scene: t,
    objectPass: a,
    backgroundOpacity: Number(e.backgroundOpacity ?? 1),
    showMaskTint: e.showMaskTint === !0
  };
}
function V1(e) {
  let t = null;
  function r(c = {}) {
    const u = F1(c);
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
    sync: r,
    snapshot: i,
    clear: a
  };
}
function Dn(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (j) => M1(j), r = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => k1(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (j) => V1(j), a = t(e), c = (e == null ? void 0 : e.targetCanvas) || null, u = r();
  let f = null;
  const g = i({
    syncState(j = {}) {
      if (typeof a.syncState == "function") {
        const V = { ...j }, O = a.syncState(V);
        return O && (f = V, O);
      }
      return f = { ...j }, !0;
    }
  });
  function y(j = {}) {
    return g.sync(j);
  }
  function v(j = {}, V = {}) {
    return f ? a.renderScene({
      ...f,
      view: j,
      width: V.width,
      height: V.height,
      dpr: V.dpr,
      backgroundOpacity: V.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: V.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function h(j, V, O = {}, T = {}) {
    if (!V) return !1;
    const I = v(O, {
      ...T,
      width: V.w,
      height: V.h
    });
    return I ? j ? (j.canvas && I === j.canvas || j.drawImage(I, V.x, V.y, V.w, V.h), !0) : !!c && I === c : !1;
  }
  function w(j, V = {}, O = {}) {
    const T = Number(O.width || 0), I = Number(O.height || 0);
    if (!(T > 0) || !(I > 0)) return null;
    const U = u.ensureTarget(j, T, I);
    if (!U) return null;
    const ne = v(V, {
      ...O,
      width: T,
      height: I
    });
    return ne ? (U.ctx.clearRect(0, 0, U.canvas.width, U.canvas.height), U.ctx.drawImage(ne, 0, 0, U.canvas.width, U.canvas.height), U.canvas) : null;
  }
  function P(j) {
    u.clearTarget(j);
  }
  function C() {
    var j;
    u.dispose(), (j = a.dispose) == null || j.call(a), f = null;
  }
  function A() {
    f = null, g.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: v,
    renderToContext: h,
    renderToTarget: w,
    clearTarget: P,
    snapshotState: g.snapshot,
    clearState: A,
    dispose: C
  };
}
function si(e, t) {
  const r = document.createElement("canvas");
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const i = r.getContext("2d");
  return i && (i.clearRect(0, 0, r.width, r.height), i.imageSmoothingEnabled = !0), { canvas: r, ctx: i };
}
function H1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Xu(e, t = 8) {
  var v;
  const r = (v = e == null ? void 0 : e.getContext) == null ? void 0 : v.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!r || i < 1 || a < 1) return null;
  const c = r.getImageData(0, 0, i, a).data;
  let u = i, f = a, g = -1, y = -1;
  for (let h = 0; h < a; h += 1)
    for (let w = 0; w < i; w += 1)
      c[(h * i + w) * 4 + 3] <= t || (w < u && (u = w), h < f && (f = h), w > g && (g = w), h > y && (y = h));
  return g < u || y < f ? null : {
    minX: u,
    minY: f,
    maxX: g,
    maxY: y,
    width: g - u + 1,
    height: y - f + 1,
    aspect: Number(((g - u + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function rl(e, t) {
  const r = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, i);
  const a = document.createElement("canvas");
  return a.width = r, a.height = i, a;
}
function Wr(e, t, r) {
  if (!e) return si(t, r);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(r));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function ut(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Zs = null, Js = null, Zu = null, Ju = null, bt = null, Ri = null, Yt = null, un = null;
function z1() {
  if (Js) return Js;
  const e = 6, t = 17, r = document.createElement("canvas");
  r.width = t, r.height = t;
  const i = r.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), Js = r, r;
}
function Qs(e, t) {
  if (!e || !t) return;
  const r = t.width, i = t.height;
  Zs = Wr(Zs, r, i);
  const a = Zs;
  ut(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Ju !== a.ctx && (Zu = a.ctx.createPattern(z1(), "repeat"), Ju = a.ctx), a.ctx.fillStyle = Zu, a.ctx.fillRect(0, 0, r, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function j1(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function $1(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function B1(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * a) : i === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function U1(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const ft = /* @__PURE__ */ new Map(), nl = 128;
function G1(e, t, r, i, a, c) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), g = `${u}:${f.toFixed(2)}:${r}:${i}:${a}:${c.toFixed(3)}`;
  if (ft.has(g)) {
    const O = ft.get(g);
    return ft.delete(g), ft.set(g, O), O;
  }
  ft.size >= nl && ft.delete(ft.keys().next().value);
  const y = u * 2 + 2, v = u + 1, h = rl(y, y), w = h.getContext("2d"), P = f * u, C = u + 1, A = `rgba(${r},${i},${a},${c})`, j = `rgba(${r},${i},${a},0)`, V = w.createRadialGradient(v, v, P, v, v, C);
  return V.addColorStop(0, A), V.addColorStop(1, j), w.fillStyle = V, w.fillRect(0, 0, y, y), ft.set(g, h), h;
}
function K1(e, t, r, i, a, c, u) {
  const { r: f, g, b: y, a: v } = i, h = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), P = Math.max(0, a), C = Math.max(0, Math.min(0.99, c)), A = Math.max(0, Math.min(1, u ?? 0)), j = `chisel:${h}:${w}:${r.toFixed(2)}:${f}:${g}:${y}:${v.toFixed(3)}:${P.toFixed(2)}:${C.toFixed(2)}:${A.toFixed(2)}`;
  if (ft.has(j)) {
    const te = ft.get(j);
    return ft.delete(j), ft.set(j, te), te;
  }
  ft.size >= nl && ft.delete(ft.keys().next().value);
  const V = rl(h, w), O = V.getContext("2d"), T = O.createImageData(h, w), I = T.data, U = Math.max(0, e - t), ne = Math.max(0, Math.min(1, r)), se = 1 + P;
  for (let te = 0; te < w; te++)
    for (let we = 0; we < h; we++) {
      const M = we + 0.5 - e, he = te + 0.5 - t, fe = Math.max(Math.abs(M) - U, 0), G = Math.hypot(fe, he) / t;
      if (G >= 1) continue;
      const ae = G <= ne ? 1 : Math.max(0, (1 - G) / Math.max(1e-4, 1 - ne)), me = 1 - G, ge = 1 + P * (1 - me) * (1 - me), q = 1 - C * me * me, ce = ge * q / se;
      let Ie = 1;
      if (A > 0) {
        const dt = Math.floor((he + t) / 1.5), ot = Math.floor((M + e) / 8), St = Tn(mi(dt * 41 + 500, ot * 19 + 300));
        Ie = 1 - A * 0.42 * St;
      }
      const De = Math.round(255 * Math.min(1, v * ae * ce * Ie));
      if (De <= 0) continue;
      const Oe = (te * h + we) * 4;
      I[Oe] = f, I[Oe + 1] = g, I[Oe + 2] = y, I[Oe + 3] = De;
    }
  return O.putImageData(T, 0, 0), ft.set(j, V), V;
}
function mi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function Tn(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function W1(e, t, r, i, a, c, u) {
  const f = e + 0.5 - r, g = t + 0.5 - i, y = Math.max(0, r - i), v = Math.max(Math.abs(f) - y, 0), h = Math.hypot(v, g) / i;
  if (h >= 1) return 0;
  const w = Tn(mi(e * 17 + 3, t * 13 + 7)), P = h + c * 0.22 * (w - 0.5);
  if (P >= 1) return 0;
  const C = P <= a ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - a)), A = Y1(e, t, f, g, r, i), j = c * 0.55;
  if (A < j) return 0;
  const O = 0.45 + 0.55 * ((A - j) / Math.max(1e-4, 1 - j));
  return Math.round(255 * Math.min(1, u * C * O));
}
function Y1(e, t, r, i, a, c) {
  const u = Math.floor((r + a) / 3), f = Math.floor((i + c) / 2), g = Tn(mi(u * 13 + 700, f * 17 + 400)), y = Math.floor((r + a) / 1.5), v = Math.floor((i + c) / 1.5), h = Tn(mi(y * 23 + 800, v * 29 + 500)), w = Tn(mi(e * 3 + 100, t * 5 + 200));
  return g * 0.55 + h * 0.3 + w * 0.15;
}
function q1(e, t, r, i, a) {
  const { r: c, g: u, b: f, a: g } = i, y = Math.max(2, Math.ceil(e) * 2), v = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, Math.min(1, a)), w = `crayon:${y}:${v}:${r.toFixed(2)}:${c}:${u}:${f}:${g.toFixed(3)}:${h.toFixed(2)}`;
  if (ft.has(w)) {
    const O = ft.get(w);
    return ft.delete(w), ft.set(w, O), O;
  }
  ft.size >= nl && ft.delete(ft.keys().next().value);
  const P = rl(y, v), C = P.getContext("2d"), A = C.createImageData(y, v), j = A.data, V = Math.max(0, Math.min(1, r));
  for (let O = 0; O < v; O++)
    for (let T = 0; T < y; T++) {
      const I = W1(T, O, e, t, V, h, g);
      if (I <= 0) continue;
      const U = (O * y + T) * 4;
      j[U] = c, j[U + 1] = u, j[U + 2] = f, j[U + 3] = I;
    }
  return C.putImageData(A, 0, 0), ft.set(w, P), P;
}
function qd(e, t, r) {
  var A, j;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = B1(t, r), c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = X1(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), g = Number(((A = t == null ? void 0 : t.angle) == null ? void 0 : A.value) ?? 0), y = U1(t, a), v = String(((j = t == null ? void 0 : t.targetSpace) == null ? void 0 : j.viewMode) || ""), h = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && v !== "unwrap", w = t == null ? void 0 : t.scatter, P = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let C;
  if (i === "chisel") {
    const V = a * f, O = a, T = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), I = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), U = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    C = K1(V, O, c, u, T, I, U);
  } else if (i === "crayon") {
    const V = a * f, O = a, T = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    C = q1(V, O, c, u, T);
  } else
    C = G1(a, c, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: C, radiusPx: a, spacingPx: y, desc: r, aspect: f, angle: g, stampKind: i, scatter: P, latitudeCorrection: h };
}
function X1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), c = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: c
  };
}
function Z1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function Qu(e, t, r, i, a) {
  const c = e.angle, u = e.desc.width;
  function f(y, v) {
    c === 0 ? e.ctx.drawImage(e.stampTex, y - a, v - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(y, v), e.ctx.rotate(c), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  f(t, r);
  const g = c === 0 ? a : a * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  t - g < 0 && f(t + u, r), t + g > u && f(t - u, r);
}
function il(e, t, r, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: y, count: v } = e.scatter, h = y * e.radiusPx * a, w = mi(t, r);
    for (let P = 0; P < v; P++) {
      const C = Tn(w + P * 2) * Math.PI * 2, A = Math.sqrt(Tn(w + P * 2 + 1)) * h, j = t + Math.cos(C) * A, V = r + Math.sin(C) * A, O = Math.max(0.5, e.radiusPx * a * 0.48), T = (0.5 - V / Math.max(1, e.desc.height)) * Math.PI, I = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(T)) : 1, U = O * e.aspect * I;
      Qu(e, j, V, O, U);
    }
    return;
  }
  const c = Math.max(0.5, e.radiusPx * a), u = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = c * e.aspect * f;
  Qu(e, t, r, c, g);
}
function ef(e, t, r) {
  const i = $1(t);
  if (!e || i.length === 0) return;
  const a = r.width, c = r.height, u = qd(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let w = 0; w < i.length; w++) {
    let P = Number(i[w].u || 0) * a;
    const C = Number(i[w].v || 0) * c;
    w > 0 && Math.abs(P - f[w - 1].x) > a * 0.5 && (P += P < f[w - 1].x ? a : -a), f.push({ x: P, y: C });
  }
  if (il(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let g = f[0], y = f[0], v = f[0], h = 0;
  for (let w = 1; w < f.length; w++) {
    const P = f[w], C = { x: (y.x + P.x) * 0.5, y: (y.y + P.y) * 0.5 };
    w === 1 ? h = la(u, v.x, v.y, C.x, C.y, h) : h = Ao(u, g, v, C, P, h), g = y, y = P, v = C;
  }
  f.length === 2 ? la(u, v.x, v.y, y.x, y.y, h) : Ao(u, g, v, y, y, h), e.restore();
}
function mo(e, t, r) {
  var h;
  const i = Array.isArray((h = t == null ? void 0 : t.geometry) == null ? void 0 : h.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = r.width, c = r.height, u = Z1(t), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let w = 0; w < i.length; w++) {
    const P = j1(i[w]);
    let C = Number(P.x || 0) * a;
    w > 0 && Math.abs(C - f[w - 1].x) > a * 0.5 && (C += C < f[w - 1].x ? a : -a), f.push({ x: C, y: Number(P.y || 0) * c }), C < g && (g = C), C > y && (y = C);
  }
  function v(w) {
    e.beginPath(), e.moveTo(f[0].x + w, f[0].y);
    for (let P = 1; P < f.length; P++) e.lineTo(f[P].x + w, f[P].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, v(0), g < 0 && v(a), y > a && v(-a), e.restore();
}
function Ba(e, t, r) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    mo(e, t, r);
    return;
  }
  const c = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  c >= 0.999 ? ef(e, t, r) : (Ri = Wr(Ri, r.width, r.height), ut(Ri), ef(Ri.ctx, t, r), e.save(), e.globalAlpha = c, e.drawImage(Ri.canvas, 0, 0), e.restore());
}
function Sn(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function la(e, t, r, i, a, c) {
  const u = i - t, f = a - r, g = Math.hypot(u, f);
  if (g < 1e-9) return c;
  let y = e.spacingPx - c;
  for (; y <= g; ) {
    const v = y / g;
    il(e, t + u * v, r + f * v, 1), y += e.spacingPx;
  }
  return g - y + e.spacingPx;
}
function Ao(e, t, r, i, a, c) {
  const f = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, g = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, v = 0, h = f, w = h + g, P = w + y, C = w - h, A = 16;
  let j = c, V = r.x, O = r.y;
  for (let T = 1; T <= A; T++) {
    const I = h + C * T / A, U = ((h - I) * t.x + (I - v) * r.x) / (h - v), ne = ((h - I) * t.y + (I - v) * r.y) / (h - v), se = ((w - I) * r.x + (I - h) * i.x) / (w - h), te = ((w - I) * r.y + (I - h) * i.y) / (w - h), we = ((P - I) * i.x + (I - w) * a.x) / (P - w), M = ((P - I) * i.y + (I - w) * a.y) / (P - w), he = ((w - I) * U + (I - v) * se) / (w - v), fe = ((w - I) * ne + (I - v) * te) / (w - v), ue = ((P - I) * se + (I - h) * we) / (P - h), G = ((P - I) * te + (I - h) * M) / (P - h), ae = ((w - I) * he + (I - h) * ue) / (w - h), me = ((w - I) * fe + (I - h) * G) / (w - h);
    j = la(e, V, O, ae, me, j), V = ae, O = me;
  }
  return j;
}
function J1(e, t, r, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const c = e.descriptor, u = c.width, f = r * c.height, g = e.activeStroke;
  let y = t * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const P = qd(a, i, c), C = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), A = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), j = String((i == null ? void 0 : i.toolKind) || "") === "eraser", V = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", il(P, y, f, 1), e.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: P.stampTex,
      radiusPx: P.radiusPx,
      spacingPx: P.spacingPx,
      aspect: P.aspect,
      angle: P.angle,
      stampKind: P.stampKind,
      scatter: P.scatter,
      latitudeCorrection: P.latitudeCorrection,
      strokeOpacity: C,
      velocityWidthFactor: A,
      distSinceStamp: 0,
      isEraser: j,
      layerKind: V,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const v = (g.prev.x + y) * 0.5, h = (g.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const w = {
    ctx: a,
    stampTex: g.stampTex,
    radiusPx: g.radiusPx,
    spacingPx: g.spacingPx,
    desc: c,
    aspect: g.aspect,
    angle: g.angle,
    stampKind: g.stampKind,
    scatter: g.scatter,
    latitudeCorrection: g.latitudeCorrection
  };
  g.pointCount === 1 ? g.distSinceStamp = la(w, g.lastMidX, g.lastMidY, v, h, g.distSinceStamp) : g.distSinceStamp = Ao(
    w,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: v, y: h },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = v, g.lastMidY = h, g.pointCount++, e.displayDirty = !0;
}
function wc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: r }, a = /* @__PURE__ */ new Map(), c = si(t, r), u = {
    descriptor: i,
    committedMask: si(t, r),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: si(t, r),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = si(t, r);
  let y = null, v = "", h = null;
  function w(M) {
    return {
      actionGroupId: M,
      descriptor: i,
      committedPaint: si(t, r),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(M) {
    let he = a.get(M);
    return he || (he = w(M), a.set(M, he)), he;
  }
  function C(M) {
    return v === "mask" ? u : y ? P(y) : f;
  }
  function A(M) {
    var me;
    const he = !h || h.length !== M.length || M.some((ge, q) => ge !== h[q]), fe = v === "paint" && ((me = y ? a.get(y) : f) == null ? void 0 : me.activeStroke) || null;
    let ue = u.displayDirty || f.displayDirty || he;
    for (const ge of M) {
      const q = a.get(ge);
      if (q != null && q.displayDirty) {
        ue = !0;
        break;
      }
    }
    if (fe && (ue = !0), !ue) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const ge of M) {
      const q = a.get(ge);
      q && (q.displayDirty = !1);
    }
    h = [...M];
    const G = g.ctx;
    ut(g);
    const ae = !!(fe != null && fe.isEraser);
    for (const ge of M) {
      const q = a.get(ge);
      if (!q) continue;
      const Ie = y === q.actionGroupId && v === "paint" ? q.activeStroke : null;
      if (ae)
        bt = Wr(bt, t, r), ut(bt), bt.ctx.drawImage(q.committedPaint.canvas, 0, 0), Sn(bt.ctx, c.canvas), G.drawImage(bt.canvas, 0, 0);
      else if (G.drawImage(q.committedPaint.canvas, 0, 0), Ie) {
        const De = q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Ie.strokeOpacity ?? 1));
        G.save(), G.globalAlpha = De, G.drawImage(c.canvas, 0, 0), G.restore();
      }
    }
  }
  function j(M) {
    var fe, ue, G, ae, me;
    for (const ge of a.values())
      ut(ge.committedPaint), ut(ge.currentStroke), ge.activeStroke = null, ge.displayDirty = !0;
    ut(u.committedMask), ut(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, h = null;
    const he = [
      ...Array.isArray((ue = (fe = M == null ? void 0 : M.painting) == null ? void 0 : fe.paint) == null ? void 0 : ue.strokes) ? M.painting.paint.strokes : [],
      ...Array.isArray((ae = (G = M == null ? void 0 : M.painting) == null ? void 0 : G.mask) == null ? void 0 : ae.strokes) ? M.painting.mask.strokes : []
    ];
    for (const ge of he) {
      if (((me = ge == null ? void 0 : ge.targetSpace) == null ? void 0 : me.kind) !== "ERP_GLOBAL") continue;
      const q = String((ge == null ? void 0 : ge.layerKind) || "paint"), Ie = String((ge == null ? void 0 : ge.toolKind) || "pen") === "eraser";
      if (q === "mask") {
        const De = u.descriptor;
        Ie ? (bt = Wr(bt, De.width, De.height), ut(bt), Ba(bt.ctx, ge, De), Sn(u.committedMask.ctx, bt.canvas)) : Ba(u.committedMask.ctx, ge, De);
        continue;
      }
      if (Ie) {
        bt = Wr(bt, i.width, i.height), ut(bt), Ba(bt.ctx, ge, i);
        for (const De of a.values())
          Sn(De.committedPaint.ctx, bt.canvas), De.displayDirty = !0;
      } else {
        const De = String((ge == null ? void 0 : ge.actionGroupId) || "__default__"), Oe = P(De), dt = Oe.descriptor;
        Ba(Oe.committedPaint.ctx, ge, dt), Oe.displayDirty = !0;
      }
    }
    A([...a.keys()]);
  }
  function V(M, he) {
    v = String((M == null ? void 0 : M.layerKind) || "");
    const fe = String((M == null ? void 0 : M.toolKind) || "") === "eraser";
    if (v === "mask")
      y = null, ut(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const ue = fe ? f : P(String((M == null ? void 0 : M.actionGroupId) || "__default__"));
      y = fe ? "" : String((M == null ? void 0 : M.actionGroupId) || "__default__"), ut(ue.currentStroke), ue.activeStroke = null, ue.displayDirty = !0;
    }
  }
  function O(M, he) {
    var q;
    const fe = String((M == null ? void 0 : M.layerKind) || "paint"), ue = String((M == null ? void 0 : M.toolKind) || "") === "eraser", G = fe === "mask" ? u : ue ? f : P(String((M == null ? void 0 : M.actionGroupId) || y || "__default__")), ae = G.activeStroke, me = G.descriptor;
    if (ae && ae.pointCount > 1) {
      const ce = G.currentStroke.ctx;
      ce.globalCompositeOperation = "source-over";
      const Ie = {
        ctx: ce,
        stampTex: ae.stampTex,
        radiusPx: ae.radiusPx,
        spacingPx: ae.spacingPx,
        desc: me,
        aspect: ae.aspect,
        angle: ae.angle,
        stampKind: ae.stampKind,
        scatter: ae.scatter,
        latitudeCorrection: ae.latitudeCorrection
      };
      ae.pointCount === 2 ? la(Ie, ae.lastMidX, ae.lastMidY, ae.prev.x, ae.prev.y, ae.distSinceStamp) : Ao(Ie, ae.pprev, { x: ae.lastMidX, y: ae.lastMidY }, ae.prev, ae.prev, ae.distSinceStamp);
    }
    G.lassoPreviewActive && (ut(G.currentStroke), mo(G.currentStroke.ctx, M, me), G.lassoPreviewActive = !1);
    const ge = fe === "mask" ? u.committedMask : G.committedPaint;
    if (ue && fe === "paint")
      for (const ce of a.values())
        Sn(ce.committedPaint.ctx, G.currentStroke.canvas), ce.displayDirty = !0;
    else if (ue)
      Sn(ge.ctx, G.currentStroke.canvas);
    else {
      const ce = Math.max(0, Math.min(1, (ae == null ? void 0 : ae.strokeOpacity) ?? 1));
      ge.ctx.save(), ge.ctx.globalAlpha = ce, ge.ctx.drawImage(G.currentStroke.canvas, 0, 0), ge.ctx.restore();
    }
    H1() && (String((M == null ? void 0 : M.toolKind) || ""), String((me == null ? void 0 : me.kind) || ""), Number((me == null ? void 0 : me.width) || 0), Number((me == null ? void 0 : me.height) || 0), String(((q = M == null ? void 0 : M.targetSpace) == null ? void 0 : q.viewMode) || ""), Number((M == null ? void 0 : M.aspect) ?? 1), Xu(G.currentStroke.canvas), Xu(ge.canvas), void 0), ut(G.currentStroke), G.activeStroke = null, G.displayDirty = !0, y = null, v = "", A([...a.keys()]);
  }
  function T(M) {
    if (v === "mask")
      ut(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (v === "paint" && !y)
      ut(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const he = a.get(y);
      he && (ut(he.currentStroke), he.activeStroke = null, he.lassoPreviewActive = !1, he.displayDirty = !0);
    }
    y = null, v = "", A([...a.keys()]);
  }
  function I(M, he) {
    var ue;
    if (v = String((M == null ? void 0 : M.layerKind) || ""), String(((ue = M == null ? void 0 : M.geometry) == null ? void 0 : ue.geometryKind) || "") === "lasso_fill") {
      if (v === "mask")
        ut(u.currentStroke), mo(u.currentStroke.ctx, M, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const G = String((M == null ? void 0 : M.toolKind) || "") === "eraser", ae = G ? f : P(String((M == null ? void 0 : M.actionGroupId) || y || "__default__"));
        y = G ? "" : String((M == null ? void 0 : M.actionGroupId) || y || "__default__"), ut(ae.currentStroke), mo(ae.currentStroke.ctx, M, ae.descriptor), ae.lassoPreviewActive = !0, ae.displayDirty = !0;
      }
      A([...a.keys()]);
    }
  }
  function U(M) {
    return A(M ?? [...a.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function ne(M) {
    return a.get(String(M)) ?? null;
  }
  function se() {
    return [...a.keys()];
  }
  function te(M) {
    var me;
    const he = a.get(String(M));
    if (!he) return null;
    const fe = v === "paint" && y === he.actionGroupId, ue = v === "paint" && ((me = y ? a.get(y) : f) == null ? void 0 : me.activeStroke) || null;
    if (ue != null && ue.isEraser)
      return Yt = Wr(Yt, t, r), ut(Yt), Yt.ctx.drawImage(he.committedPaint.canvas, 0, 0), Sn(Yt.ctx, c.canvas), Yt.canvas;
    const G = fe ? he.activeStroke : null;
    if (!G) return he.committedPaint.canvas;
    Yt = Wr(Yt, t, r), ut(Yt), Yt.ctx.drawImage(he.committedPaint.canvas, 0, 0);
    const ae = he.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, G.strokeOpacity ?? 1));
    return Yt.ctx.save(), Yt.ctx.globalAlpha = ae, Yt.ctx.drawImage(c.canvas, 0, 0), Yt.ctx.restore(), Yt.canvas;
  }
  function we() {
    return un = Wr(un, t, r), ut(un), Qs(un.ctx, u.committedMask.canvas), v === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (bt = Wr(bt, t, r), ut(bt), bt.ctx.drawImage(u.committedMask.canvas, 0, 0), Sn(bt.ctx, c.canvas), ut(un), Qs(un.ctx, bt.canvas)) : Qs(un.ctx, c.canvas)), un.canvas;
  }
  return {
    rebuildCommitted: j,
    beginStroke: V,
    appendStrokePoint: J1,
    updateActiveStroke: I,
    commitActiveStroke: O,
    cancelActiveStroke: T,
    getErpTarget: U,
    ensureTarget: C,
    getGroupTarget: ne,
    getGroupDisplayCanvas: te,
    getMaskDisplayCanvas: we,
    getAllGroupIds: se
  };
}
function W(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ec(e, t, r) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(r), i)) : Number(t);
}
function Ft(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Q1(e, t) {
  let r = Ft(t) - Ft(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const tf = Math.PI / 180, rf = 0.12, ey = 3, ty = 35, ry = 140, Bi = 100, ny = 20, nf = 0.8;
function iy(e, t, r) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(r || 1)), c = W(Number(e || Bi), 1, 179) * tf;
  return 2 * Math.atan(Math.tan(c * 0.5) * (a / i)) / tf;
}
function ay(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function ts(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Bi })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(V, O = null) {
    f && f(V, O);
  }
  function v(V, O, T = null, I = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(V || 0), g.drag.lastY = Number(O || 0), g.drag.lastTs = Number(I || performance.now()), g.drag.pointerId = T, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: T }), !0;
  }
  function h(V, O, T = "pano", I = performance.now()) {
    if (!g.drag.active) return !1;
    const U = Number(I || performance.now()), ne = Number(V), se = Number(O), te = ne - g.drag.lastX, we = se - g.drag.lastY;
    g.drag.lastX = ne, g.drag.lastY = se, g.drag.lastTs = U;
    const M = i() || { x: 1, y: 1 }, he = Number(M.x || 1), fe = Number(M.y || 1), ue = { ...t() };
    let G = 0, ae = 0;
    if (T === "unwrap") {
      const ge = a() || { w: 1, h: 1 }, q = Math.max(1, Number(ge.w || 1)), ce = Math.max(1, Number(ge.h || 1)), Ie = te / q, De = we / ce;
      G = -Ie * 360 * he, ae = De * 180 * fe;
    } else {
      const ge = c() || { w: 0, h: 0 }, q = Math.max(1, Number(ge.w || 0)), ce = Math.max(1, Number(ge.h || 0));
      if (q > 1 && ce > 1) {
        const Ie = W(Number(ue.fov || Bi), 1, 179), De = W(iy(Ie, q, ce), 0.1, 179);
        G = -(te / q) * Ie * he, ae = we / ce * De * fe;
      } else
        G = -te * rf * he, ae = we * rf * fe;
    }
    ue.yaw = Ft(Number(ue.yaw || 0) + G), ue.pitch = W(Number(ue.pitch || 0) + ae, -89.9, 89.9), r(ue), g.velHistory.push({ ts: U, yaw: ue.yaw, pitch: ue.pitch });
    let me = 0;
    for (; me < g.velHistory.length - 1 && g.velHistory[me].ts < U - 100; ) me++;
    return me > 0 && g.velHistory.splice(0, me), g.inertia.active = !1, g.inertia.lastTs = U, u(), y("drag", { phase: "move", dx: te, dy: we, dYaw: G, dPitch: ae }), !0;
  }
  function w(V = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const O = Number(V || performance.now());
    g.drag.lastTs = O;
    const T = g.velHistory.filter((U) => O - U.ts <= 80);
    if (T.length >= 2) {
      const U = T[0], ne = T.at(-1), se = Math.max(1e-3, (ne.ts - U.ts) / 1e3);
      let te = ne.yaw - U.yaw;
      te > 180 && (te -= 360), te < -180 && (te += 360), g.inertia.vx = te / se, g.inertia.vy = (ne.pitch - U.pitch) / se;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const I = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = I > ny, g.inertia.lastTs = O, y("drag", { phase: "end", speed: I, inertiaActive: g.inertia.active }), !0;
  }
  function P(V = performance.now()) {
    if (!g.inertia.active) return !1;
    const O = Number(V || performance.now()), T = Math.max(1e-3, (O - (g.inertia.lastTs || O)) / 1e3);
    g.inertia.lastTs = O;
    const I = { ...t() };
    I.yaw = Ft(Number(I.yaw || 0) + g.inertia.vx * T), I.pitch = W(Number(I.pitch || 0) + g.inertia.vy * T, -89.9, 89.9);
    const U = Math.exp(-5.5 * T);
    return g.inertia.vx *= U, g.inertia.vy *= U, Math.abs(g.inertia.vx) < nf && Math.abs(g.inertia.vy) < nf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), r(I), u(), g.inertia.active;
  }
  function C(V) {
    const O = Math.sign(Number(V || 0));
    if (!O) return !1;
    const T = { ...t() }, I = Number(T.fov || Bi);
    return T.fov = W(I + O * ey, ty, ry), r(T), u(), y("wheel", { deltaSign: O, fovBefore: I, fovAfter: T.fov }), !0;
  }
  function A(V) {
    return C(Math.sign(ay(V)));
  }
  function j() {
    r({ yaw: 0, pitch: 0, fov: Bi }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: v,
    moveDrag: h,
    endDrag: w,
    stepInertia: P,
    applyWheel: C,
    applyWheelEvent: A,
    resetView: j
  };
}
function Io(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const af = Math.PI / 180;
function Oi(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function oy(e) {
  const t = e || {}, r = Oi(t.yaw_deg, 0), i = Oi(t.pitch_deg, 0), a = Oi(t.roll_deg ?? t.rot_deg, 0), c = ec(Oi(t.hFOV_deg, 90), 1, 179), u = ec(Oi(t.vFOV_deg, 60), 1, 179), f = Math.tan(c * af * 0.5) / Math.max(1e-6, Math.tan(u * af * 0.5)), g = ec(f, 0.1, 10);
  return {
    yaw: r,
    pitch: i,
    roll: a,
    hfov: c,
    vfov: u,
    aspect: g
  };
}
const Xd = 0.28;
function sy(e) {
  const t = e && typeof e == "object" ? e : {}, r = W(Number(t.x0 ?? 0), 0, 1), i = W(Number(t.y0 ?? 0), 0, 1), a = W(Number(t.x1 ?? 1), 0, 1), c = W(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(r, a),
    y0: Math.min(i, c),
    x1: Math.max(r, a),
    y1: Math.max(i, c)
  };
}
function cy(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const r = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = r || (i ? String(e.id || "").trim() : ""), c = t.includeHidden === !0, u = e.visible === !1, f = c && i && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: W(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: W(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: sy(e.crop),
    opacity: f ? Xd : W(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: i
  };
}
function rs(e, t = {}) {
  var c;
  const r = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: r.map((u) => cy(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((c = e == null ? void 0 : e.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function Zd(e, t, r = {}) {
  if (typeof t != "function") return [];
  const i = r.scene || rs(e, r), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var C;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const v = g ? a[g] : null, h = t(y, v, f);
    if (h instanceof HTMLImageElement && !h.complete) return;
    const w = Number((h == null ? void 0 : h.naturalWidth) || (h == null ? void 0 : h.videoWidth) || (h == null ? void 0 : h.width) || 0), P = Number((h == null ? void 0 : h.naturalHeight) || (h == null ? void 0 : h.videoHeight) || (h == null ? void 0 : h.height) || 0);
    !h || w <= 0 || P <= 0 || (u.add(y), c.push({
      assetId: y,
      source: h,
      revision: String(((C = r.revisionFor) == null ? void 0 : C.call(r, y, v, h)) ?? [
        y,
        Number(h.naturalWidth || h.videoWidth || h.width || 0),
        Number(h.naturalHeight || h.videoHeight || h.height || 0),
        String(h.currentSrc || h.src || "")
      ].join("|"))
    }));
  }), c;
}
function al(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function ly(e, t = 360) {
  return al(e, t);
}
function gn(e) {
  const t = oy(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: ct } = co;
function Sc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (co == null ? void 0 : co.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Ln = Math.PI / 180, To = {}, uy = { Nu: 24, Nv: 14 }, fy = 10, dy = 120;
function hy() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Fi(e) {
  var r, i, a, c, u;
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
    styleHeight: String(((i = e.style) == null ? void 0 : i.height) || ""),
    styleWidth: String(((a = e.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((c = e.style) == null ? void 0 : c.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function gy() {
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
function yn(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (i, a) => {
    const c = Number(i), u = Number(a);
    return !Number.isFinite(c) || !Number.isFinite(u) ? null : [c, u];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const i = r(t[0], t[1]);
      if (i) return i;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const i = r(t.width, t.height);
      if (i) return i;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const i = r(t.w, t.h);
      if (i) return i;
    }
  }
  return null;
}
function py(e) {
  const t = yn(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Jd(e, t, r) {
  py(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))]);
}
function Nc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Qd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function my(e) {
  return Io(Qd(e));
}
function En(e = null) {
  var c, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (c = ct == null ? void 0 : ct.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [t, i, r, a].join("|");
}
function eh(e, t = null) {
  const r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return r === "legacy_draw" || r === "dom" ? {
    chosenPath: r,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: En(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: En(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: En(t)
  };
}
const Qi = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = En(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = En(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, th(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function th(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const i = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : eh(i, e).chosenPath, c = Nc(e);
      this.activeBackend = c;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, g = r.noPreview === !0;
      if (c === a && c !== "none" && u === i && f === g) {
        e.__panoAttachOptions = { ...r, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = g, e.__panoPreviewButtonText = String(r.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      c !== "none" && yi(e, { keepMonitor: i === "stickers" }), ib(e, { ...r, mode: i, __panoForcedPath: a }), this.activeBackend = Nc(e);
    },
    rebind(r = {}) {
      const i = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      yi(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...r, mode: i });
    },
    teardown() {
      yi(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function yy(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function yi(e, t = {}) {
  var i, a, c, u, f;
  if (!e) return;
  Do.unregister(e), yy(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
  const r = e.__panoDomPreview;
  if (r) {
    try {
      (c = r.state) != null && c.raf && cancelAnimationFrame(r.state.raf);
    } catch {
    }
    try {
      (f = (u = r.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((g) => {
      if (g === (r == null ? void 0 : r.widget)) return !1;
      const y = String((g == null ? void 0 : g.name) || ""), v = String((g == null ? void 0 : g.type) || ""), h = Sc();
      return !(y === h || v === h || y === "pano_preview" || v === "pano_preview" || y === "preview" && v === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || Qi.unregister(e);
}
function Rn(e, t, r) {
  return { x: e, y: t, z: r };
}
function of(e, t) {
  return Rn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ua(e, t) {
  return Rn(e.x * t, e.y * t, e.z * t);
}
function tc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function sf(e, t) {
  return Rn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ga(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Rn(e.x / t, e.y / t, e.z / t);
}
function Pn(e, t) {
  const r = e * Ln, i = t * Ln, a = Math.cos(i);
  return Rn(a * Math.sin(r), Math.sin(i), a * Math.cos(r));
}
function ol(e, t, r = 0) {
  const i = Pn(e, t), a = Rn(0, 1, 0);
  let c = sf(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Rn(1, 0, 0)), c = Ga(c);
  let u = Ga(sf(i, c));
  const f = r * Ln, g = Math.cos(f), y = Math.sin(f), v = of(Ua(c, g), Ua(u, y)), h = of(Ua(c, -y), Ua(u, g));
  return { fwd: i, right: Ga(v), up: Ga(h) };
}
function by(e, t = "#00ff00") {
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
  let i = null;
  if (e && typeof e == "object")
    i = e;
  else if (typeof e == "string") {
    const a = e.trim();
    if (!a) return r;
    try {
      i = JSON.parse(a);
    } catch {
      return r;
    }
  } else
    return r;
  try {
    const a = i;
    return !a || typeof a != "object" || Array.isArray(a) ? r : {
      ...r,
      ...a,
      coverage: Number(a.coverage) === 180 ? 180 : 360,
      assets: a.assets && typeof a.assets == "object" ? a.assets : {},
      stickers: Array.isArray(a.stickers) ? a.stickers : [],
      shots: Array.isArray(a.shots) ? a.shots : [],
      active: a.active && typeof a.active == "object" ? a.active : r.active
    };
  } catch {
    return r;
  }
}
function vy(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = ua(e, "state_json")) == null ? void 0 : r.value) || "");
}
function sl(e) {
  var f, g;
  const t = vy(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((f = ua(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((g = ua(e, "coverage")) == null ? void 0 : g.value) || 360) === 180 ? 180 : 360, c = e.__panoStateCache;
  if (c && c.source === t && c.liveVersion === r && c.bg === i && c.coverage === a)
    return c.parsed;
  const u = by(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: r, bg: i, coverage: a, parsed: u }, u;
}
function ua(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((i) => i.name === t)) || null;
}
function cf(e, t, r) {
  return !!r && e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
function rh(e, t) {
  if (!e || t == null) return null;
  const r = e.links;
  return r ? r instanceof Map ? r.get(t) || r.get(Number(t)) || r.get(String(t)) || null : r[t] || r[String(t)] || null : null;
}
function _y(e, t) {
  var r, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function nh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function ih(e, t, r = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && r != null && (i = _y(e == null ? void 0 : e.graph, r)), i;
}
function xy(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function cl(e, t = []) {
  const r = xy(e), i = [];
  return t.forEach((a) => {
    r.includes(String(a)) && i.push(String(a));
  }), r.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function lf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Eo(e, t) {
  const r = lf(e), i = lf(t);
  return !r.full || !i.full ? !1 : r.full === i.full || r.tail === i.full || r.full === i.tail || r.tail === i.tail;
}
function wy(e, t = ["erp_image", "bg_erp"]) {
  var g;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return [];
  const a = cl(e, t).map((y) => r.findIndex((v) => String((v == null ? void 0 : v.name) || "") === String(y))).filter((y) => y >= 0), c = r.map((y, v) => ({ input: y, idx: v })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...c])], f = [];
  for (const y of u) {
    const v = ih(e, y);
    if ((v == null ? void 0 : v.id) != null) {
      f.push(String(v.id));
      continue;
    }
    const h = (g = r[y]) == null ? void 0 : g.link;
    if (h == null) continue;
    const w = rh(e == null ? void 0 : e.graph, h), { originId: P } = nh(w);
    P != null && f.push(String(P));
  }
  return [...new Set(f)];
}
const Do = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Jt) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, i = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var y, v, h, w, P;
        if (!c) return;
        const u = Eo(i, c == null ? void 0 : c.id);
        wy(c, ["erp_image", "bg_erp"]).some((C) => Eo(i, C)), !(String(c.__panoPreviewMode || "") === "cutout" && !u) && (kc(c), (v = (y = c.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || v.call(y), (h = c.setDirtyCanvas) == null || h.call(c, !0, !0), (P = (w = c.graph) == null ? void 0 : w.setDirtyCanvas) == null || P.call(w, !0, !0), String(c.__panoPreviewMode || ""), String(c.__panoPreviewMode || ""), void 0);
      });
    }, Jt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Jt) != null && e.removeEventListener) || (Jt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Lo(e) {
  var c;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", i), e.subfolder && r.set("subfolder", String(e.subfolder));
  const a = `/view?${r.toString()}`;
  return typeof ((c = Jt) == null ? void 0 : c.apiURL) == "function" ? Jt.apiURL(a) : a;
}
function Sy(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Ny(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const i = r.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function My(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || r.has(a) || (r.add(a), t.push(a));
  }), t;
}
function ky(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Sy(t)) return [t];
  const { filename: r, subfolder: i } = Ny(t);
  if (!r) return [t];
  const a = ["temp", "output", "input"].map((c) => Lo({
    filename: r,
    subfolder: i,
    type: c
  }));
  return My([...a, t]);
}
function Py(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Lo({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function uf(e) {
  const t = ct == null ? void 0 : ct.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(r) || t.get(Number(r)) || null : i = t[e] || t[r] || null, i) return i;
  const a = r;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (Eo(c, a)) return t.get(c);
  } else {
    const c = Object.keys(t);
    for (const u of c)
      if (Eo(u, a)) return t[u];
  }
  return null;
}
function Zr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Zr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Lo({ filename: t, subfolder: r, type: i });
    }
    for (const r of e) {
      const i = Zr(r);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Lo(e);
}
function Cy(e, t) {
  var i;
  const r = String(e || "").trim();
  if (!r) return "";
  try {
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", c = new URL(r, a);
    return t > 0 && c.searchParams.set("pano_rev", String(t)), c.toString();
  } catch {
    const a = r.includes("?") ? "&" : "?";
    return t > 0 ? `${r}${a}pano_rev=${t}` : r;
  }
}
function Ay(e) {
  const t = [], r = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((u) => t.push(u));
  }, a = (c, u = 0) => {
    !c || u > 3 || r.has(c) || typeof c == "object" && (r.add(c), i(c.images), a(c.output, u + 1), a(c.ui, u + 1), a(c.data, u + 1), a(c.result, u + 1));
  };
  return a(e, 0), t;
}
function Iy(e, t) {
  try {
    const r = Ay(t);
    let i = "";
    for (const a of r)
      if (i = Zr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Cy(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ty(e, t = []) {
  var y, v;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const a = cl(e, t).map((h) => r.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(h))).filter((h) => h >= 0), c = r.map((h, w) => ({ input: h, idx: w })).filter(({ input: h }) => String((h == null ? void 0 : h.type) || "").toUpperCase() === "IMAGE").map(({ idx: h }) => h), u = [.../* @__PURE__ */ new Set([...a, ...c])];
  for (const h of u) {
    const w = r[h], P = w == null ? void 0 : w.link;
    if (P == null) continue;
    const C = rh(e.graph, P), { originId: A, originSlot: j } = nh(C);
    if (A == null) continue;
    const V = ih(e, h, A);
    if (!V) continue;
    const O = Number(j || 0), T = uf((V == null ? void 0 : V.id) ?? A), I = Array.isArray(T == null ? void 0 : T.images) ? T.images : [];
    if (I.length) {
      const te = [];
      O >= 0 && O < I.length && te.push(I[O]), te.push(...I);
      for (const we of te) {
        const M = Zr(we);
        if (M)
          return String((w == null ? void 0 : w.name) || ""), { src: M, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let U = [];
    try {
      U = typeof (ct == null ? void 0 : ct.getNodeImageUrls) == "function" ? ct.getNodeImageUrls(V) || [] : [];
    } catch {
      U = [];
    }
    if (Array.isArray(U) && U.length) {
      const te = [];
      O >= 0 && O < U.length && te.push(U[O]), te.push(...U);
      for (const we of te) {
        const M = Zr(we);
        if (M)
          return String((w == null ? void 0 : w.name) || ""), { src: M, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const ne = Array.isArray(V == null ? void 0 : V.imgs) ? V.imgs : [];
    if (ne.length) {
      const te = [];
      O >= 0 && O < ne.length && te.push(ne[O]), te.push(...ne);
      for (const we of te) {
        const M = Zr(we);
        if (M)
          return String((w == null ? void 0 : w.name) || ""), { src: M, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const se = (y = V == null ? void 0 : V.widgets) == null ? void 0 : y.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image");
    if (se) {
      let te = Zr(se.value);
      if (te && !te.includes("/") && !te.includes(":") && (V.comfyClass === "LoadImage" || V.type === "LoadImage") && (te = Jt.apiURL(`/view?filename=${encodeURIComponent(te)}&type=input&subfolder=`)), te)
        return String((w == null ? void 0 : w.name) || ""), { src: te, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const f = uf(e == null ? void 0 : e.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((v = f == null ? void 0 : f.ui) == null ? void 0 : v.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const h of g) {
      const w = Zr(h);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Ey(e, t = [], r = {}) {
  const i = Ty(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const c = ky(a);
  if (!c.length) return null;
  const u = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", g = e.__panoLinkedInputImageCache.get(f);
  if (g && g.srcRaw === a && g.img) return g.img;
  if (g && g.pendingSrcRaw === a && g.pendingImg)
    return u && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : g.pendingImg;
  const y = new Image(), v = g || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  v.pendingSrcRaw = a, v.pendingResolvedSrc = "", v.pendingImg = y, e.__panoLinkedInputImageCache.set(f, v);
  let h = -1;
  const w = () => {
    var C, A, j, V;
    if (h += 1, h >= c.length) {
      if (((A = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.get) == null ? void 0 : A.call(C, f)) === v && v.pendingImg === y && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
        try {
          (V = (j = e.__panoLinkedInputImageCache) == null ? void 0 : j.delete) == null || V.call(j, f);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), c.length;
      return;
    }
    const P = c[h];
    v.pendingResolvedSrc = P, y.src = P;
  };
  return y.onload = () => {
    var P, C, A;
    ((C = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : C.call(P, f)) === v && v.pendingImg === y && (v.srcRaw = a, v.resolvedSrc = String(v.pendingResolvedSrc || y.src || ""), v.img = y, v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null), String(v.pendingResolvedSrc || v.resolvedSrc || y.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
  }, y.onerror = (P) => {
    var C, A, j, V;
    if (h + 1 < c.length) {
      w();
      return;
    }
    if (((A = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.get) == null ? void 0 : A.call(C, f)) === v && v.pendingImg === y && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
      try {
        (V = (j = e.__panoLinkedInputImageCache) == null ? void 0 : j.delete) == null || V.call(j, f);
      } catch {
      }
    String(v.pendingResolvedSrc || v.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((P == null ? void 0 : P.type) || "error");
  }, w(), u && v.img && (v.img.complete || v.img.naturalWidth || v.img.width) ? v.img : y;
}
function Mc(e, t = [], r = null, i = {}) {
  const a = Ey(e, t, i);
  return a ? (typeof r == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => r(), { once: !0 })), a) : null;
}
function kc(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoWrappedErpCache = null;
  }
}
function ah(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, i = String(t || "");
  return r.mode !== i && (r.mode = i, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Nn(e, t, r = "") {
  const i = ah(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < dy ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function Pc(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), c = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = r / a, f = i / c, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Dy(e, t, r = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), c = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (c <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * r)), g = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), c * 0.44)), y = Math.max(Math.round(34 * r), f + Math.round(14 * r)), v = i + (c - g) * 0.5, h = a + (u - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(v, h, g, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", v + g * 0.5, h + y * 0.5 + 0.5), e.restore();
}
function Ka(e, t, r = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(r || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function Ly(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  if (r) {
    const a = t.find((c) => String((c == null ? void 0 : c.id) || "") === r);
    if (a) return a;
  }
  return t[0] || null;
}
function oh(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), c = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let f = a, g = a / u;
  return g > c && (g = c, f = c * u), {
    x: r + (a - f) * 0.5,
    y: i + (c - g) * 0.5,
    w: f,
    h: g
  };
}
function Ry(e, t, r, i = 0) {
  if (!e || !t || !r) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || c <= 1) return !1;
  const u = oh(r, a / c);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(i) || 0));
  return f > 0 && (e.fillStyle = `rgba(0,0,0,${f})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function Oy(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((c) => {
    var f;
    if (c === t || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof c.computeSize == "function" ? c.computeSize(((f = yn(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function yo(e) {
  const r = Oy(e) + 2, i = 8, a = yn(e), c = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - r - 8);
  return u < 40 || c < 80 ? null : { x: i, y: r, w: c, h: u };
}
function sh(e, t, r) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Py(r);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(a);
  if (c != null && c.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: c.img }), c.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g, y, v;
    (y = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function Fy(e, t) {
  const r = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === r && Array.isArray(i.sorted)) return i.sorted;
  const a = [...r].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: r, sorted: a }, a;
}
function Cc(e, t) {
  return rs(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Ac(e, t, r) {
  return Zd(t, (i, a) => sh(e, i, a), { scene: r });
}
function Vy(e, t) {
  var u;
  const r = uh(e, t);
  if (!r) return [];
  const i = fh(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], c = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return i.map((f) => {
    const g = r.getGroupDisplayCanvas(f);
    return g ? {
      id: `paint_group:${f}`,
      source: g,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(c.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function Hy(e, t, r, i = 0.45) {
  const a = (e.x + t.x + r.x) / 3, c = (e.y + t.y + r.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - c, v = Math.hypot(g, y) || 1;
    return { x: f.x + g / v * i, y: f.y + y / v * i };
  };
  return [u(e), u(t), u(r)];
}
function ff(e, t, r, i, a, c, u, f) {
  const g = r.x * (i.y - a.y) + i.x * (a.y - r.y) + a.x * (r.y - i.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, v, h] = Hy(c, u, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(v.x, v.y), e.lineTo(h.x, h.y), e.closePath(), e.clip();
  const w = (c.x * (i.y - a.y) + u.x * (a.y - r.y) + f.x * (r.y - i.y)) / g, P = (c.x * (a.x - i.x) + u.x * (r.x - a.x) + f.x * (i.x - r.x)) / g, C = (c.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * r.y - r.x * a.y) + f.x * (r.x * i.y - i.x * r.y)) / g, A = (c.y * (i.y - a.y) + u.y * (a.y - r.y) + f.y * (r.y - i.y)) / g, j = (c.y * (a.x - i.x) + u.y * (r.x - a.x) + f.y * (i.x - r.x)) / g, V = (c.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * r.y - r.x * a.y) + f.y * (r.x * i.y - i.x * r.y)) / g;
  e.transform(w, A, P, j, C, V), e.drawImage(t, 0, 0), e.restore();
}
function ch(e, t, r, i) {
  const a = tc(e, t.right), c = tc(e, t.up), u = tc(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = c / u / i, g = a / u / i;
  return { x: r.x + r.w * 0.5 + g * r.h * 0.5, y: r.y + r.h * 0.5 - f * r.h * 0.5 };
}
function lh(e, t, r, i, a, c, u, f = 12, g = 9) {
  var G;
  const y = W(Number(u.hFOV_deg || 30), 1, 179) * Ln, v = W(Number(u.vFOV_deg || 30), 1, 179) * Ln, h = Math.tan(y * 0.5), w = Math.tan(v * 0.5), P = u.crop || {}, C = W(Number(P.x0 ?? 0), 0, 1), A = W(Number(P.y0 ?? 0), 0, 1), j = W(Number(P.x1 ?? 1), 0, 1), V = W(Number(P.y1 ?? 1), 0, 1), O = Math.max(1e-4, j - C), T = Math.max(1e-4, V - A), I = ol(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), U = [], ne = [], se = [], te = [];
  for (let ae = 0; ae <= g; ae++) {
    const me = ae / g, q = (1 - (A + me * T) * 2) * w;
    for (let ce = 0; ce <= f; ce++) {
      const Ie = ce / f, Oe = ((C + Ie * O) * 2 - 1) * h, dt = I.fwd.x + I.right.x * Oe + I.up.x * q, ot = I.fwd.y + I.right.y * Oe + I.up.y * q, St = I.fwd.z + I.right.z * Oe + I.up.z * q, Nt = Math.hypot(dt, ot, St) || 1e-8, It = dt / Nt, or = ot / Nt, hr = St / Nt, sr = It * i.right.x + or * i.right.y + hr * i.right.z, m = It * i.up.x + or * i.up.y + hr * i.up.z, D = It * i.fwd.x + or * i.fwd.y + hr * i.fwd.z;
      if (D <= 1e-4)
        U[ae] || (U[ae] = []), ne[ae] || (ne[ae] = []), U[ae][ce] = null, ne[ae][ce] = null;
      else {
        const H = m / D / a, Z = sr / D / a;
        U[ae] || (U[ae] = []), ne[ae] || (ne[ae] = []), U[ae][ce] = r.x + r.w * 0.5 + Z * r.h * 0.5, ne[ae][ce] = r.y + r.h * 0.5 - H * r.h * 0.5;
      }
      se[ae] || (se[ae] = []), te[ae] || (te[ae] = []), se[ae][ce] = Ie, te[ae][ce] = me;
    }
  }
  const we = (G = c.assets) == null ? void 0 : G[u.asset_id], M = sh(t, u.asset_id, we);
  if (!M || !M.complete || !M.naturalWidth) return;
  const he = Number(M.naturalWidth || M.width || 1), fe = Number(M.naturalHeight || M.height || 1), ue = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = ue;
  for (let ae = 0; ae < g; ae++)
    for (let me = 0; me < f; me++) {
      const ge = U[ae][me], q = ne[ae][me], ce = U[ae][me + 1], Ie = ne[ae][me + 1], De = U[ae + 1][me], Oe = ne[ae + 1][me], dt = U[ae + 1][me + 1], ot = ne[ae + 1][me + 1];
      if (ge === null || ce === null || De === null || dt === null) continue;
      const St = se[ae][me] * he, Nt = te[ae][me] * fe, It = se[ae][me + 1] * he, or = te[ae][me + 1] * fe, hr = se[ae + 1][me] * he, sr = te[ae + 1][me] * fe, m = se[ae + 1][me + 1] * he, D = te[ae + 1][me + 1] * fe;
      ff(e, M, { x: St, y: Nt }, { x: It, y: or }, { x: m, y: D }, { x: ge, y: q }, { x: ce, y: Ie }, { x: dt, y: ot }), ff(e, M, { x: St, y: Nt }, { x: m, y: D }, { x: hr, y: sr }, { x: ge, y: q }, { x: dt, y: ot }, { x: De, y: Oe });
    }
}
function zy(e, t, r = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = sl(e), a = yo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = ol(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * Ln * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = Mc(
    e,
    cl(e, ["erp_image", "bg_erp"]),
    () => {
      var I, U, ne;
      (U = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null || U.call(I), (ne = e.setDirtyCanvas) == null || ne.call(e, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = gh(e), v = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, h = y || v, w = To, P = Cc(e, i), C = Ac(e, i, P), A = al(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let j = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Dn()), g) {
    const I = es({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(C) ? C.map((se) => `${String((se == null ? void 0 : se.assetId) || "")}:${String((se == null ? void 0 : se.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: P,
      textures: C,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), ne = e.__panoRuntimeCore.syncState(I) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", A, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    j = !!ne, ne && t.drawImage(ne, a.x, a.y, a.w, a.h);
  }
  const V = h ? 8 : 12, O = h ? 6 : 9, T = Fy(e, i);
  if (!g || T.length === 0) {
    const I = Pc(t == null ? void 0 : t.canvas, a);
    dh(t, a, c, u, I);
  }
  !j && g && Ro(e, t, a, c, u, f, w), !j && T.length > 0 && T.forEach((I) => lh(t, e, a, c, u, i, I, V, O)), t.restore();
}
function jy(e, t, r, i, a = "preview_scene", c = "") {
  const u = String(
    c || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return es({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: u,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: r,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function bo(e, t, r, i) {
  var c, u, f, g, y, v;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const h = i.convertEventToCanvasOffset(t);
      if (Array.isArray(h) && h.length >= 2)
        return {
          x: Number(h[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(h[1]) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[1]) || 0)
    };
  const a = By(e, t, i);
  return a || null;
}
function $y(e, t) {
  var h, w;
  const r = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, c = (h = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : h.call(a), u = (t == null ? void 0 : t.ds) || ((w = ct == null ? void 0 : ct.canvas) == null ? void 0 : w.ds);
  if (!c || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (r - Number(c.left || 0)) / f - Number(g[0] || 0), v = (i - Number(c.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(v) ? null : { x: y, y: v };
}
function By(e, t, r) {
  var a, c;
  const i = $y(t, r || (ct == null ? void 0 : ct.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function Wa(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), yn(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", Jd(e, 320, 180), ci(e);
  const t = e.onDrawForeground, r = e.onResize;
  e.onDrawForeground = function() {
    var w, P;
    const h = t ? t.apply(this, arguments) : void 0;
    try {
      const C = arguments[0];
      C && !((w = this.flags) != null && w.collapsed) && (i.stepInertia(performance.now()) && ((P = this.setDirtyCanvas) == null || P.call(this, !0, !1)), zy(this, C, i));
    } catch {
    }
    return h;
  }, e.onResize = function() {
    var w;
    const h = r ? r.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Oo(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), ph(this, 220, null), h;
  };
  const i = ts({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (h) => {
      e.__panoPreviewView = h;
    },
    getViewportSize: () => {
      const h = yo(e);
      return {
        w: Math.max(1, Number((h == null ? void 0 : h.w) || 0)),
        h: Math.max(1, Number((h == null ? void 0 : h.h) || 0))
      };
    },
    onInteraction: () => {
      var h;
      hh(e), (h = e.setDirtyCanvas) == null || h.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(h, w, P) {
    var C;
    try {
      if (!((C = this.flags) != null && C.collapsed)) {
        const A = bo(this, h, w, P) || { x: 0, y: 0 }, j = yn(this), V = Number((j == null ? void 0 : j[0]) || 0), O = Number((j == null ? void 0 : j[1]) || 0);
        if (A.x >= V - 20 && A.y >= O - 20)
          return a ? a.apply(this, arguments) : void 0;
        const I = yo(this);
        if (cf(A.x, A.y, I))
          return (h == null ? void 0 : h.button) === 0 && i.startDrag(A.x, A.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const c = e.onMouseMove;
  e.onMouseMove = function(h, w, P) {
    try {
      const C = bo(this, h, w, P);
      if (i.state.drag.active) {
        if (typeof (h == null ? void 0 : h.buttons) == "number" && (h.buttons & 1) === 0)
          return i.endDrag(), !0;
        const A = C || i.state.drag;
        return i.moveDrag(A.x, A.y, "pano"), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = e.onMouseLeave;
  e.onMouseLeave = function() {
    const h = f ? f.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), h;
  };
  const g = e.onMouseWheel;
  e.onMouseWheel = function(h, w, P) {
    var C, A;
    try {
      if ((C = this.flags) != null && C.collapsed) return g ? g.apply(this, arguments) : void 0;
      const j = bo(this, h, w, P), V = yo(this);
      if (!j || !cf(j.x, j.y, V)) return g ? g.apply(this, arguments) : void 0;
      const O = Number((h == null ? void 0 : h.deltaY) ?? (h == null ? void 0 : h.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return i.applyWheel(Math.sign(O)) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), typeof (h == null ? void 0 : h.preventDefault) == "function" && h.preventDefault(), typeof (h == null ? void 0 : h.stopPropagation) == "function" && h.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, v = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = r, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = c, e.onMouseUp = u, e.onMouseLeave = f, e.onMouseWheel = g, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = v, e.onRemoved = function() {
    return v(), Qi.unregister(this), Do.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function Uy(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function uh(e, t) {
  var y, v, h, w, P, C, A, j, V, O, T, I;
  const r = (v = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : v.strokes, i = (w = (h = t == null ? void 0 : t.painting) == null ? void 0 : h.mask) == null ? void 0 : w.strokes, a = Array.isArray(r) && r.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!a && !c) return null;
  const u = Uy(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = wc(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: r || null,
    mask: i || null,
    groups: ((P = t == null ? void 0 : t.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) || null
  };
  return (((A = e.__panoPreviewPaintRevision) == null ? void 0 : A.paint) !== g.paint || ((j = e.__panoPreviewPaintRevision) == null ? void 0 : j.mask) !== g.mask || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.groups) !== g.groups || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.rasterObjects) !== g.rasterObjects) && (e.__panoPreviewPaintRevision = g, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function fh(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function Gy(e, t) {
  const r = uh(e, t);
  if (!r) return null;
  const i = fh(t);
  return r.getErpTarget(i).displayPaint.canvas;
}
function Ky(e, t, r = null) {
  var f;
  const i = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = Zr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const c = e.__panoPaintingLayerImageCache;
  if (c.img && c.src === a) return c.img;
  const u = new Image();
  return u.onload = () => {
    var g;
    r == null || r(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
  }, u.onerror = () => {
    var g;
    ((g = e.__panoPaintingLayerImageCache) == null ? void 0 : g.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function df(e, t) {
  var c, u;
  const r = e == null ? void 0 : e.__panoLivePaintSurface;
  if (r != null && r.source)
    return {
      source: r.source,
      revision: String(r.revision || "")
    };
  if (Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = Ky(e, t, () => {
      var g, y;
      return (y = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = Gy(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Wy(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Yy(e, t, r, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== r || a.height !== i) && (a = document.createElement("canvas"), a.width = r, a.height = i, e[t] = a), a;
}
function qy(e, t, r, i, a, c) {
  if (!t || !r || !(i > 0) || !(a > 0)) return;
  const u = Wy(r);
  if (u.width === i && u.height === a) {
    t.drawImage(r, 0, 0, i, a);
    return;
  }
  const g = Yy(e, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    t.drawImage(r, 0, 0, i, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(r, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, v = t.getImageData(0, 0, i, a), h = v.data, w = Math.max(0, u.width - 1), P = Math.max(0, u.height - 1);
    for (let C = 0; C < a; C += 1) {
      const A = (C + 0.5) * u.height / a - 0.5, j = W(Math.floor(A), 0, P), V = W(j + 1, 0, P), O = W(A - j, 0, 1);
      for (let T = 0; T < i; T += 1) {
        const I = (T + 0.5) * u.width / i - 0.5, U = W(Math.floor(I), 0, w), ne = W(U + 1, 0, w), se = W(I - U, 0, 1);
        let te = 0, we = 0, M = 0, he = 0;
        const fe = (ae, me, ge) => {
          const q = (me * u.width + ae) * 4, ce = (y[q + 3] || 0) / 255;
          te += ce * ge, we += (y[q] || 0) / 255 * ce * ge, M += (y[q + 1] || 0) / 255 * ce * ge, he += (y[q + 2] || 0) / 255 * ce * ge;
        };
        if (fe(U, j, (1 - se) * (1 - O)), fe(ne, j, se * (1 - O)), fe(U, V, (1 - se) * O), fe(ne, V, se * O), te <= 1e-6) continue;
        const ue = (C * i + T) * 4, G = 1 - te;
        h[ue] = Math.round(W((we + h[ue] / 255 * G) * 255, 0, 255)), h[ue + 1] = Math.round(W((M + h[ue + 1] / 255 * G) * 255, 0, 255)), h[ue + 2] = Math.round(W((he + h[ue + 2] / 255 * G) * 255, 0, 255)), h[ue + 3] = 255;
      }
    }
    t.putImageData(v, 0, 0);
  } catch {
    t.drawImage(r, 0, 0, i, a);
  }
}
function hf(e, t, r, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${c}|${i}`;
  let g = e.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== c) {
    (!g || g.width !== a || g.height !== c) && (g = document.createElement("canvas"), g.width = a, g.height = c, e.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, c), y.drawImage(t, 0, 0, a, c), qy(e, y, r, a, c, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function Xy(e, t, r, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  ah(e, a);
  const c = sl(e), u = t.parentElement, f = 1, g = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), v = Math.max(64, Math.round(g * f)), h = Math.max(64, Math.round(y * f)), w = t.getContext("2d");
  if (w)
    if (a === "cutout") {
      const P = Ly(c), C = Mc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var te, we;
          return (we = (te = e.__panoDomPreview) == null ? void 0 : te.requestDraw) == null ? void 0 : we.call(te);
        },
        { preserveReadyWhilePending: !1 }
      ), A = !!(C && C.complete && (C.naturalWidth || C.width));
      (t.width !== v || t.height !== h) && (t.width = v, t.height = h);
      const j = { x: 0, y: 0, w: v, h }, V = A ? W(Number((C.naturalWidth || C.width) / Math.max(1, Number(C.naturalHeight || C.height || 1))), 0.05, 20) : 1, O = P ? gn(P) : null, T = W(Number((O == null ? void 0 : O.aspect) || V || 1), 0.05, 20), I = oh(j, T);
      Pc(t, j), w.setTransform(1, 0, 0, 1, 0, 0), w.fillStyle = "#070707", w.fillRect(0, 0, v, h);
      let U = "none", ne = "Open editor and add frame", se = "";
      if (se = String((C == null ? void 0 : C.src) || ""), P)
        if (C && !A)
          U = "loading";
        else if (A) {
          const te = Cc(e, c), we = Ac(e, c, te), M = Vy(e, c), he = $i({
            stateRevision: [
              "runtime_cutout_scene",
              String(C.currentSrc || C.src || ""),
              Number(C.naturalWidth || C.width || 0),
              Number(C.naturalHeight || C.height || 0),
              Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
              String((P == null ? void 0 : P.id) || ""),
              Array.isArray(we) ? we.map((ue) => `${String((ue == null ? void 0 : ue.assetId) || "")}:${String((ue == null ? void 0 : ue.revision) || "")}`).join(",") : "",
              Array.isArray(M) ? M.map((ue) => `${String((ue == null ? void 0 : ue.id) || "")}:${String((ue == null ? void 0 : ue.revision) || "")}:${Number((ue == null ? void 0 : ue.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: C,
            backgroundRevision: String(C.currentSrc || C.src || ""),
            coverageDeg: Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
            scene: te,
            textures: we,
            rasterEntries: M,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Dn()), e.__panoRuntimeCore.syncState(he), e.__panoRuntimeCore.renderToContext(
            w,
            I,
            gn(P),
            { width: I.w, height: I.h, dpr: 1 }
          ) || (U = "empty", ne = "Open editor or run node");
        } else
          U = "empty", ne = "Connect ERP image";
      else {
        if (A) {
          const te = df(e, c), we = te != null && te.source ? hf(e, C, te.source, te.revision || "") : C;
          Ry(w, we, j, 0.44);
        }
        U = "empty", ne = "Open editor and add frame";
      }
      U === "loading" ? (Ka(e, !1), Nn(e, !0, se)) : U === "empty" ? (Ka(e, !0, ne), Nn(e, !1, "")) : (Ka(e, !1), Nn(e, !1, ""));
    } else {
      Ka(e, !1), (t.width !== v || t.height !== h) && (t.width = v, t.height = h);
      const P = { x: 0, y: 0, w: v, h }, C = Pc(t, P);
      w.setTransform(1, 0, 0, 1, 0, 0), w.clearRect(0, 0, v, h), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const A = ol(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), j = Math.tan(Number(e.__panoPreviewView.fov || 100) * Ln * 0.5), V = Mc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var fe, ue;
          return (ue = (fe = e.__panoDomPreview) == null ? void 0 : fe.requestDraw) == null ? void 0 : ue.call(fe);
        }
      ), O = !!(V && V.complete && (V.naturalWidth || V.width));
      w.fillStyle = "#1a1a1e", w.fillRect(0, 0, v, h);
      const T = Cc(e, c), I = Ac(e, c, T), U = al(e.__panoPreviewView, c == null ? void 0 : c.coverage), ne = df(e, c), se = (ne == null ? void 0 : ne.source) || null, te = O && se ? hf(e, V, se, (ne == null ? void 0 : ne.revision) || "") : V, we = te !== V ? String(te.__revKey || "") : V ? [
        String(V.currentSrc || V.src || ""),
        Number(V.naturalWidth || V.width || 0),
        Number(V.naturalHeight || V.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Dn());
      let M = !1;
      if (O) {
        const ue = e.__panoDomRuntimeCore.syncState(
          jy(te, c, T, I, "runtime_dom_scene", we)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", U, {
          width: P.w,
          height: P.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        ue && (w.drawImage(ue, P.x, P.y, P.w, P.h), M = !0);
      }
      const he = T.stickers;
      if (O && M)
        Nn(e, !1, "");
      else if (O)
        Ro(e, w, P, A, j, te, To), Nn(e, !1, "");
      else if (se)
        Ro(e, w, P, A, j, se, To), Nn(e, !!V && !O, String((V == null ? void 0 : V.src) || ""));
      else {
        const fe = !!V && !O;
        Nn(e, fe, String((V == null ? void 0 : V.src) || "")), fe && Dy(w, P, C);
      }
      if ((!O || he.length === 0) && dh(w, P, A, j, C), !M && he.length > 0) {
        const fe = gh(e), ue = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, G = fe || ue, ae = G ? 8 : 12, me = G ? 6 : 9;
        he.forEach((ge) => lh(w, e, P, A, j, c, ge, ae, me));
      } else if (!V || !O) {
        const fe = Math.max(14, Math.round(16 * C));
        w.fillStyle = "rgba(212,212,216,0.85)", w.font = `600 ${fe}px Plus Jakarta Sans, Geist, sans-serif`, w.textAlign = "center", w.fillText("Open editor to add stickers", v * 0.5, h * 0.5 + 24 * C);
      }
    }
}
function Ro(e, t, r, i, a, c, u = uy) {
  const f = sl(e), g = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Dn());
  const y = es({
    stateRevision: [
      "runtime_bg_only",
      String((c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || ""),
      Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0),
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: [
      String((c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || ""),
      Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    ].join("|"),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(y)) return;
  const h = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(g.yaw || 0),
    pitchDeg: Number(g.pitch || 0),
    fovDeg: Number(g.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: r.w,
    height: r.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  h && t.drawImage(h, r.x, r.y, r.w, r.h);
}
function gf(e, t, r, i, a, c, u = 1) {
  let f = !1;
  e.strokeStyle = c, e.lineWidth = u, e.beginPath();
  for (const g of t) {
    const y = ch(g, r, i, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), f = !0);
  }
  e.stroke();
}
function dh(e, t, r, i, a = 1) {
  e.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const v = [];
    for (let h = -180; h <= 180; h += 15) v.push(Pn(h, y));
    gf(e, v, r, t, i, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const v = [];
    for (let h = -89; h <= 89; h += 15) v.push(Pn(y, h));
    gf(e, v, r, t, i, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Pn(0, 0) },
    { name: "Right", dir: Pn(90, 0) },
    { name: "Back", dir: Pn(180, 0) },
    { name: "Left", dir: Pn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  e.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((y) => {
    const v = ch(y.dir, r, t, i);
    v && e.fillText(y.name, v.x, v.y + 20 * a);
  }), e.restore();
}
function Zy(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function hh(e) {
  const t = Zy(e);
  t.dragging = !1, t.hqFrames = fy;
}
function Oo(e, t = 150, r = performance.now()) {
  e && (e.__panoResizeUntil = Number(r || performance.now()) + Math.max(0, Number(t || 0)));
}
function gh(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function Jy(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Qy(e, t, r = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), c = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - r && c >= i.height - r;
}
function ni(e, t) {
  return Qy(e, t) ? !1 : (Jy(e), !0);
}
function eb() {
  var r;
  const e = (r = ct == null ? void 0 : ct.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function tb(e) {
  var r;
  if (!e) return;
  const t = (r = ct == null ? void 0 : ct.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function rb(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0) return;
  const i = yn(e), a = Number((i == null ? void 0 : i[0]) || 0), c = Number((i == null ? void 0 : i[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(c) || a >= t && c >= r) return;
  const u = [Math.max(t, a), Math.max(r, c)];
  try {
    typeof e.setSize == "function" ? e.setSize(u) : e.size = u, e.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function nb(e, t = 0, r = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    e.__panoBootMinHeightTimer = null, (c = e == null ? void 0 : e.__panoDomPreview) != null && c.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function pf(e, t = null, r = 0) {
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(r || 0)) : 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(r || 0)) : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, Oo(e, 150), t == null || t(), ph(e, 180, t);
    }
  };
}
function ph(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ci(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function ib(e, t = {}) {
  var ge;
  const r = t.__allowStandalone === !0, i = my(e);
  if (i && !r) {
    Qd(e);
    return;
  }
  i && rb(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Do.register(e);
  const a = e.__panoPreviewMode === "stickers", c = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || Qi.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), g = a ? eh(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: En(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (g.chosenPath = f, g.reason = "controller_target_backend");
  const y = a ? g.chosenPath : "dom", v = g.signature || En(e);
  if (Number(e.__panoRebindGeneration || 0), Nc(e), e == null || e.id, e.__panoPreviewMode, g.reason, g.frontendVersionRaw, e.addDOMWidget, yn(e), e.__panoFrontendSig = v, e.__panoStickersPath = y, a && Qi.register(e), a && y === "legacy_draw") {
    if (c) return;
    yi(e, { keepMonitor: !0 }), Wa(e);
    return;
  }
  if ((ge = e.__panoDomPreview) != null && ge.widget) return;
  if (e.__panoLegacyPreviewHooked && yi(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !c && Wa(e);
    return;
  }
  const h = t.noPreview === !0, w = a || h ? 0 : 56, P = document.createElement("div");
  if (gy(), P.className = "pano-node-preview-dom", P.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), h && P.classList.add("pano-node-preview--no-preview"), P.setAttribute("data-capture-wheel", "true"), P.setAttribute("tabindex", "-1"), P.style.cssText = [
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
    const q = e.addDOMWidget(Sc(), "preview", P, pf(e, null));
    ci(e), e.__panoDomPreview = { widget: q, root: P, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const C = document.createElement("div");
  C.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const A = document.createElement("canvas");
  A.style.cssText = [
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
    "font:600 15px 'Plus Jakarta Sans', Geist, sans-serif",
    "text-align:center",
    "padding:0 10px",
    "z-index:2"
  ].join(";"), j.textContent = "Open editor and add frame", C.appendChild(A), C.appendChild(j), P.appendChild(C), Jd(e, 120, 120), ci(e);
  let V = null;
  try {
    nb(e, w, () => {
      var q, ce;
      return (ce = (q = e.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : ce.call(q);
    }), V = e.addDOMWidget(
      Sc(),
      "preview",
      P,
      pf(e, () => {
        var q, ce;
        return (ce = (q = e.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : ce.call(q);
      }, w)
    );
  } catch {
    a && Wa(e);
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
    O.needsDraw = !0, O.raf || (O.raf = requestAnimationFrame(ne));
  }, I = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Oo(e, 150), T();
  }) : null;
  I == null || I.observe(C);
  const U = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const q = 3, ce = (Ie) => {
      requestAnimationFrame(() => {
        var Oe;
        const De = !!(P != null && P.isConnected && (C != null && C.isConnected) && (A != null && A.isConnected) && Number(C.clientHeight || 0) > 0 && Number(A.clientHeight || 0) > 0);
        if (!De && Ie < q) {
          ce(Ie + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((C == null ? void 0 : C.clientHeight) || 0), Number((A == null ? void 0 : A.clientHeight) || 0), !De) {
          if (c) {
            e.__panoPreviewMode, Number((C == null ? void 0 : C.clientHeight) || 0), Number((A == null ? void 0 : A.clientHeight) || 0);
            return;
          }
          yi(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Wa(e), (Oe = e.setDirtyCanvas) == null || Oe.call(e, !0, !0);
        }
      });
    };
    ce(1);
  }, ne = (q) => {
    var Ie, De, Oe;
    O.raf = 0;
    const ce = se.stepInertia(q);
    (O.needsDraw || ce) && (O.needsDraw = !1, (Ie = e.flags) != null && Ie.collapsed || Xy(e, A, null, se), (De = e.setDirtyCanvas) == null || De.call(e, !0, !1)), (ce || O.needsDraw) && (O.raf = requestAnimationFrame(ne)), hy() && (!e.__panoDebugLastTs || q - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = q, e.__panoPreviewMode, yn(e), Fi(P), Fi(C), Fi(A), Fi(P.parentElement), Fi((Oe = P.parentElement) == null ? void 0 : Oe.parentElement), Number(A.width || 0), Number(A.height || 0), void 0);
  }, se = ts({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (q) => {
      e.__panoPreviewView = q;
    },
    onInteraction: () => {
      T();
    }
  });
  A.addEventListener("pointerdown", (q) => {
    var ce, Ie;
    ni(q, C) && u && q.button === 0 && ((ce = P.focus) == null || ce.call(P), (Ie = A.setPointerCapture) == null || Ie.call(A, q.pointerId), A.style.cursor = "grabbing", se.startDrag(q.clientX, q.clientY, q.pointerId));
  }), A.addEventListener("pointermove", (q) => {
    !u || !se.state.drag.active || (ni(q, C), se.moveDrag(q.clientX, q.clientY, "pano"));
  });
  const te = (q) => {
    var ce;
    !u || !se.state.drag.active || (ni(q, C), (ce = A.releasePointerCapture) == null || ce.call(A, q.pointerId), A.style.cursor = "grab", se.endDrag(), hh(e), T());
  };
  A.addEventListener("pointerup", te), A.addEventListener("pointercancel", te), A.addEventListener("pointerleave", (q) => {
    se.state.drag.active && te(q);
  });
  const we = (q) => {
    var Ie, De, Oe;
    if (!ni(q, C) || !u) return;
    const ce = eb();
    se.applyWheelEvent(q) && T(), (Ie = q.preventDefault) == null || Ie.call(q), (De = q.stopPropagation) == null || De.call(q), (Oe = q.stopImmediatePropagation) == null || Oe.call(q), requestAnimationFrame(() => {
      var dt, ot;
      tb(ce), (ot = (dt = ct == null ? void 0 : ct.canvas) == null ? void 0 : dt.setDirty) == null || ot.call(dt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((q) => {
    C.addEventListener(q, we, { passive: !1, capture: !0 }), A.addEventListener(q, we, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((q) => {
    A.addEventListener(q, (ce) => ni(ce, C)), C.addEventListener(q, (ce) => ni(ce, C));
  });
  const M = ua(e, "state_json");
  if (M && !M.__panoPreviewPatchedCb) {
    M.__panoPreviewPatchedCb = !0;
    const q = M.callback;
    M.callback = (ce) => {
      const Ie = q ? q(ce) : void 0;
      return T(), Ie;
    };
  }
  const he = ua(e, "bg_color");
  if (he && !he.__panoPreviewPatchedCb) {
    he.__panoPreviewPatchedCb = !0;
    const q = he.callback;
    he.callback = (ce) => {
      const Ie = q ? q(ce) : void 0;
      return T(), Ie;
    };
  }
  const fe = e.onRemoved, ue = e.onResize, G = e.onExecuted;
  e.onExecuted = function(q) {
    Iy(e, q), kc(e), ci(e), T();
    const ce = G ? G.apply(this, arguments) : void 0;
    return ci(e), ce;
  };
  const ae = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return kc(e), ci(e), T(), ae ? ae.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var ce;
    const q = ue ? ue.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Oo(this, 150), T(), (ce = this.setDirtyCanvas) == null || ce.call(this, !0, !1), q;
  }, e.onRemoved = function() {
    return me(), Qi.unregister(this), Do.unregister(this), fe ? fe.apply(this, arguments) : void 0;
  };
  const me = () => {
    var q;
    O.raf && cancelAnimationFrame(O.raf), (q = I == null ? void 0 : I.disconnect) == null || q.call(I), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = ue, e.onExecuted = G, e.onConnectionsChange = ae, e.onRemoved = fe;
  };
  e.__panoDomRestore = me, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: V, root: P, canvas: A, requestDraw: T, state: O, emptyHintEl: j }, U(), T();
}
function mf(e, t = {}) {
  th(e).attach({
    ...t,
    mode: "cutout"
  });
}
const Fo = Math.PI / 180;
function On(e, t, r) {
  return { x: e, y: t, z: r };
}
function yf(e, t) {
  return On(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ya(e, t) {
  return On(e.x * t, e.y * t, e.z * t);
}
function bf(e, t) {
  return On(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function qa(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return On(e.x / t, e.y / t, e.z / t);
}
function ab(e, t) {
  const r = e * Fo, i = t * Fo, a = Math.cos(i);
  return On(a * Math.sin(r), Math.sin(i), a * Math.cos(r));
}
function ob(e, t, r = 0) {
  const i = ab(e, t), a = On(0, 1, 0);
  let c = bf(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = On(1, 0, 0)), c = qa(c);
  const u = qa(bf(i, c)), f = r * Fo, g = Math.cos(f), y = Math.sin(f), v = yf(Ya(c, g), Ya(u, y)), h = yf(Ya(c, -y), Ya(u, g));
  return { fwd: i, right: qa(v), up: qa(h) };
}
const Xa = 140, sb = 180, vf = 40, rc = 10;
function _f(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function xf(e, t) {
  const r = _f(e), i = _f(t);
  return !r.full || !i.full ? !1 : r.full === i.full || r.tail === i.full || r.full === i.tail || r.tail === i.tail;
}
function wf(e) {
  var c;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", i), e.subfolder && r.set("subfolder", String(e.subfolder));
  const a = `/view?${r.toString()}`;
  return typeof ((c = Jt) == null ? void 0 : c.apiURL) == "function" ? Jt.apiURL(a) : a;
}
function bi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return bi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return wf({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const i = bi(r);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : wf(e);
}
function mh(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function cb(e) {
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
function Ic(e) {
  var a;
  const t = (a = ur) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(r) || t.get(Number(r)) || null : i = t[e] || t[r] || null, i) return i;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (xf(c, r)) return t.get(c);
  } else
    for (const c of Object.keys(t))
      if (xf(c, r)) return t[c];
  return null;
}
function lb(e) {
  var i, a;
  const t = Ic(e == null ? void 0 : e.id), r = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const c of r)
    if (Array.isArray(c))
      for (const u of c) {
        const f = bi(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function ub(e, t = "erp_image") {
  var C, A, j, V, O, T, I, U, ne, se, te, we;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = r.find((M) => String((M == null ? void 0 : M.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const M = r.find((he) => String((he == null ? void 0 : he.type) || "").toUpperCase() === "IMAGE" && (he == null ? void 0 : he.link) != null);
    (M == null ? void 0 : M.link) != null && (i = M.link);
  }
  if (i == null) return "";
  const c = ((A = (C = e == null ? void 0 : e.graph) == null ? void 0 : C.links) == null ? void 0 : A[i]) || ((O = (V = (j = ur) == null ? void 0 : j.graph) == null ? void 0 : V.links) == null ? void 0 : O[i]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (U = (I = (T = ur) == null ? void 0 : T.graph) == null ? void 0 : I.getNodeById) == null ? void 0 : U.call(I, u), g = Ic(u), y = Ic(e == null ? void 0 : e.id), v = [
    g == null ? void 0 : g.images,
    (ne = g == null ? void 0 : g.ui) == null ? void 0 : ne.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (se = y == null ? void 0 : y.ui) == null ? void 0 : se.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const M of v)
    if (Array.isArray(M))
      for (const he of M) {
        const fe = bi(he);
        if (fe) return fe;
      }
  let h = [];
  try {
    h = typeof ((te = ur) == null ? void 0 : te.getNodeImageUrls) == "function" ? ur.getNodeImageUrls(f) || [] : [];
  } catch {
    h = [];
  }
  if (Array.isArray(h) && h.length > 0)
    for (const M of h) {
      const he = bi(M);
      if (he) return he;
    }
  if (f) {
    const M = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const he of M) {
      const fe = bi(he);
      if (fe) return fe;
    }
  }
  const w = (we = f == null ? void 0 : f.widgets) == null ? void 0 : we.find((M) => String((M == null ? void 0 : M.name) || "").toLowerCase() === "image"), P = String((w == null ? void 0 : w.value) || "").trim();
  return P ? Jt.apiURL(`/view?filename=${encodeURIComponent(P)}&type=input&subfolder=`) : "";
}
function Sf(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Nf(e, t, r, i, a, c) {
  var w, P, C;
  if (t.clearRect(0, 0, r, i), t.fillStyle = "#070707", t.fillRect(0, 0, r, i), !mh(c) || r <= 1 || i <= 1) {
    Sf(t, r, i);
    return;
  }
  const u = ob(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Fo * 0.5), g = Number(((C = (P = (w = e == null ? void 0 : e.widgets) == null ? void 0 : w.find) == null ? void 0 : P.call(w, (A) => (A == null ? void 0 : A.name) === "coverage")) == null ? void 0 : C.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = Dn());
  const y = cb(c), v = es({
    stateRevision: [
      "standalone_preview_scene",
      y,
      g
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: y,
    coverageDeg: g,
    scene: rs(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(v) && (() => {
    const A = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      ly(a, g),
      { width: r, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return A ? (t.drawImage(A, 0, 0, r, i), !0) : !1;
  })() || (Ro(e, t, { x: 0, y: 0, w: r, h: i }, u, f, c, To), Sf(t, r, i));
}
function Mf(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class fb {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ts({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Ft(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: W(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: W(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, c, u, f;
        const i = (c = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : c.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    var i, a, c;
    const t = this;
    this.node.onExecuted = function() {
      const u = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), u;
    }, this.node.onConnectionsChange = function() {
      const u = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), u;
    }, this.node.onResize = function() {
      const u = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), u;
    }, this.node.onRemoved = function() {
      const u = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), u;
    };
    const r = ((c = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : c.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      var c;
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!r || (c = this.flags) != null && c.collapsed || !t.errorText) return i;
      const a = t.getLegacyPreviewRect();
      return r.save(), r.fillStyle = "rgba(18,18,22,0.92)", r.strokeStyle = "rgba(82,82,89,1)", r.lineWidth = 1, r.beginPath(), r.roundRect(a.x, a.y, a.w, a.h, 8), r.fill(), r.stroke(), r.fillStyle = "rgba(236,236,242,0.92)", r.font = "600 12px sans-serif", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), r.restore(), i;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${Xa}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = document.createElement("canvas"), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Xa;
        },
        getHeight() {
          return Xa;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, r), this.widget) {
        this.widget.serialize = !1;
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const c = i ? i(a) || {} : {};
          return {
            ...c,
            minHeight: Math.max(Xa, Number(c.minHeight || 0)),
            minWidth: Math.max(sb, Number(c.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.onResizeDom(), this.logProbeFrames();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  bindDomInput(t, r) {
    t.addEventListener("pointerdown", (a) => {
      var c, u, f;
      a.button === 0 && ((c = r.focus) == null || c.call(r, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const i = (a) => {
      var c, u;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i), r.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), r.addEventListener("keydown", (a) => {
      var c;
      a.key !== " " && a.key !== "Spacebar" || (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !mh(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), i;
    }, this.node.onMouseDown = function(r, i) {
      var u;
      const a = t.localPoint(i);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const c = t.getLegacyPreviewRect();
      return Mf(a.x, a.y, c) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - c.x, a.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, i) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const c = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - c.x, a.y - c.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, i, a) {
      var y, v, h, w, P, C;
      const c = bo(this, r, i, a), u = t.getLegacyPreviewRect();
      if (!c || !Mf(c.x, c.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((r == null ? void 0 : r.deltaY) ?? (r == null ? void 0 : r.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((y = t.view) == null ? void 0 : y.fov) || 100);
      const g = t.controller.applyWheel(Math.sign(f));
      return Number(((v = t.view) == null ? void 0 : v.fov) || 100), g && ((h = this.setDirtyCanvas) == null || h.call(this, !0, !1)), (w = r == null ? void 0 : r.preventDefault) == null || w.call(r), (P = r == null ? void 0 : r.stopPropagation) == null || P.call(r), (C = r == null ? void 0 : r.stopImmediatePropagation) == null || C.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, c, u;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - rc * 2), r = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - vf - rc);
    return { x: rc, y: vf, w: t, h: r };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const r = this.getLegacyPreviewRect();
    r.w <= 2 || r.h <= 2 || (t.save(), t.translate(r.x, r.y), Nf(this.node, t, r.w, r.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, r.w * 0.5, r.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), r = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * r)), a = Math.max(1, Math.round(t.height * r));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, c, u;
    const t = lb(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const g = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, y = () => this.requestDraw();
      f.addEventListener("loadedmetadata", g), f.addEventListener("canplay", g), f.addEventListener("timeupdate", y), f.addEventListener("play", y), f.addEventListener("pause", y), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", g), f.removeEventListener("canplay", g), f.removeEventListener("timeupdate", y), f.removeEventListener("play", y), f.removeEventListener("pause", y);
      };
      return;
    }
    const r = ub(this.node, this.imageInputName);
    if (!r) {
      (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (u = this.mediaCleanup) == null || u.call(this), this.mediaCleanup = null, this.imgSrc = r;
    const i = new Image();
    i.onload = () => {
      this.imgSrc === r && (this.img = i, this.requestDraw());
    }, i.onerror = () => {
      this.imgSrc === r && (this.img = null, this.requestDraw());
    }, i.src = r;
  }
  requestDraw() {
    var t, r;
    if (this.needsDraw = !0, this.inTick) {
      this.queuedDuringTick = !0;
      return;
    }
    this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (r = (t = this.node).setDirtyCanvas) == null || r.call(t, !0, !1);
  }
  tick(t = performance.now()) {
    var a, c;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const r = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (Nf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (a = this.node).setDirtyCanvas) == null || c.call(a, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  logProbeFrames() {
    if (!this.root || !this.canvas) return;
    let t = 0;
    const r = () => {
      !this.root || !this.canvas || t >= 3 || (t += 1, requestAnimationFrame(r));
    };
    requestAnimationFrame(r);
  }
  teardown() {
    var r, i, a, c, u, f, g, y, v, h, w, P;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null;
    try {
      (f = (u = this.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
    if (Array.isArray((g = this.node) == null ? void 0 : g.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((C) => C !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((h = (v = (y = this.node) == null ? void 0 : y.widgets) == null ? void 0 : v.find) == null ? void 0 : h.call(v, (C) => (C == null ? void 0 : C.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (P = (w = this.node.__panoStandaloneCore) == null ? void 0 : w.dispose) == null || P.call(w), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function db(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new fb(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function hb(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const i = `__panoLifecyclePatched_${String(t)}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return f;
  };
  const c = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = c ? c.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return f;
  };
  const u = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const f = u ? u.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return f;
  };
}
function yh(e) {
  return !!(e != null && e.prototype);
}
function Tc(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function gb(e, t = {}) {
  yh(e) || db(e, {
    ...t,
    onOpen: Tc(e, t.onOpen)
  });
}
function pb(e, t = {}) {
  if (!yh(e)) {
    mf(e, {
      ...t,
      onOpen: Tc(e, t.onOpen)
    });
    return;
  }
  hb(e, "cutout_preview", (r) => {
    mf(r, {
      ...t,
      onOpen: Tc(r, t.onOpen)
    });
  });
}
const rr = {
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
}, Br = "pen";
function kf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function mb(e = 80, t = null, r = 8) {
  const i = [];
  let a = -1;
  const c = Math.max(1, Number(e || 80)), u = Math.max(1, Number(r || 8));
  function f(y) {
    if (i.splice(0, i.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((h) => {
      i.push(String(h || ""));
    }), !i.length)) return;
    const v = Number(y.index);
    Number.isInteger(v) ? v === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, v)) : a = i.length - 1;
  }
  function g(y) {
    i[a] !== y && (i.splice(a + 1), i.push(y), i.length > c && i.shift(), a = i.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      g(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = i.length, v = Math.max(0, y - u), h = a >= 0 ? Math.max(0, Math.min(a, v)) : v, w = i.slice(h, h + u), P = a < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, a - h));
      return {
        version: 1,
        entries: w,
        index: P
      };
    },
    hydrate: f
  };
}
function Je(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function yb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function bb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || r.has(a)) continue;
    r.add(a);
    const c = Je(i.z_index ?? i.zIndex, t.length);
    t.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(c ?? t.length)),
      locked: i.locked === !0
    });
  }
  return t;
}
function vb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function _b(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Je(e.t, 0), i = Je(e.widthScale, null), a = Je(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const c = Je(e.u, null), u = Je(e.v, null);
    if (c == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: r
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const c = Je(e.u, null), u = Je(e.v, null);
    if (c == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: c,
      v: u,
      t: r
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function Za(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const c = _b(a, t);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= r ? i : null;
}
function xb(e, t, r, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || r !== "lasso_fill") return null;
    const g = Za(e.points, t, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || r === "lasso_fill") return null;
  const c = Za(e.points, t, 1);
  if (!c) return null;
  const u = Za(e.rawPoints, t, 1), f = Za(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: c,
    rawPoints: u || c.map((g) => ({ ...g })),
    processedPoints: f || c.map((g) => ({ ...g }))
  };
}
function wb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = vb(e.targetSpace);
  if (!r) return null;
  const i = String(e.toolKind || "").trim(), a = xb(e.geometry, r, i, t === "paint");
  if (!a) return null;
  const c = Je(e.size, null), u = Je(e.opacity, null);
  if (c == null || u == null) return null;
  const f = String(e.id || "").trim(), g = String(e.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = Je(e.radiusValue, null), v = String(e.radiusModel || "").trim() || null;
  let h = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    h = {
      r: Math.max(0, Math.min(1, Je(w.r, 0))),
      g: Math.max(0, Math.min(1, Je(w.g, 0))),
      b: Math.max(0, Math.min(1, Je(w.b, 0))),
      a: Math.max(0, Math.min(1, Je(w.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: g,
    targetSpace: r,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: Je(e.hardness, null),
    flow: Je(e.flow, null),
    spacing: Je(e.spacing, null),
    createdAt: Math.trunc(Je(e.createdAt, 0)),
    color: h,
    radiusModel: v,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Pf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const i of e.strokes) {
    const a = wb(i, t);
    a && r.strokes.push(a);
  }
  return r;
}
function Sb(e) {
  if (!e || typeof e != "object") return null;
  const t = Je(e.u0, null), r = Je(e.v0, null), i = Je(e.u1, null), a = Je(e.v1, null);
  if (t == null || r == null || i == null || a == null) return null;
  const c = (f) => Math.max(0, Math.min(1, f)), u = { u0: c(t), v0: c(r), u1: c(i), v1: c(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Nb(e) {
  const t = e || {};
  return {
    du: Je(t.du, 0) ?? 0,
    dv: Je(t.dv, 0) ?? 0,
    rot_deg: Je(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Je(t.scale, 1) ?? 1)
  };
}
function Mb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const c = Sb(e.bbox);
  return c ? {
    id: r,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, Je(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: c,
    rasterDataUrl: a,
    transform: Nb(e.transform)
  } : null;
}
function kb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = Mb(i, t.length);
    !a || r.has(a.id) || (r.add(a.id), t.push(a));
  }
  return t;
}
function ea(e) {
  const t = yb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: bb(e.groups),
    paint: Pf(e.paint, "paint"),
    mask: Pf(e.mask, "mask"),
    raster_objects: kb(e.raster_objects)
  };
}
function Cf(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Pb(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Af(e = {}, t = 0) {
  var a;
  const r = String((e == null ? void 0 : e.type) || "");
  if (!r) return null;
  const i = {
    id: String((e == null ? void 0 : e.id) || `${r}_${t}`),
    type: r,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    zIndex: Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? t)
  };
  return r === "sticker" ? (i.transform = Pb((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Cb(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return xi({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Cf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((c, u) => Af(c, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Cf((e == null ? void 0 : e.background) || {}), r = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((c, u) => Af(c, u)).filter(Boolean);
  return xi({
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: t,
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: r
    },
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  });
}
function fa(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Vo(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Ab(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), r = (e == null ? void 0 : e.renderCore) || Dn((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function c(h) {
    var w;
    return JSON.stringify({
      stateRevision: (h == null ? void 0 : h.stateRevision) || "",
      background: (h == null ? void 0 : h.background) || null,
      objects: Array.isArray((w = h == null ? void 0 : h.objectPass) == null ? void 0 : w.objects) ? h.objectPass.objects.map((P) => ({
        id: (P == null ? void 0 : P.id) || "",
        type: (P == null ? void 0 : P.type) || "",
        revision: (P == null ? void 0 : P.revision) || "",
        visible: (P == null ? void 0 : P.visible) !== !1,
        opacity: Number((P == null ? void 0 : P.opacity) ?? 1),
        zIndex: Number((P == null ? void 0 : P.zIndex) ?? 0),
        transform: (P == null ? void 0 : P.transform) || null,
        params: (P == null ? void 0 : P.params) || null
      })) : [],
      overlay: (h == null ? void 0 : h.overlay) || {}
    });
  }
  function u(h = {}) {
    const w = Cb(h), P = c(w);
    return a === P || !r.syncState(w) ? !1 : (i = w, a = P, !0);
  }
  function f(h = {}, w = {}) {
    if (!i) return null;
    const P = fa(h), C = Vo(w);
    return r.renderToTarget(t, P, C);
  }
  function g(h, w, P = {}, C = {}) {
    if (!h || !w || !i) return !1;
    const A = fa(P), j = Vo({
      ...C,
      width: Number((w == null ? void 0 : w.w) || (C == null ? void 0 : C.width) || 1),
      height: Number((w == null ? void 0 : w.h) || (C == null ? void 0 : C.height) || 1)
    });
    return r.renderToContext(h, w, A, j);
  }
  function y() {
    var h;
    i = null, a = "", (h = r.clearState) == null || h.call(r);
  }
  function v() {
    var h;
    y(), (h = r.dispose) == null || h.call(r);
  }
  return {
    isSupported: typeof (r == null ? void 0 : r.isSupported) == "function" ? () => r.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: g,
    snapshotScene: () => i,
    clearScene: y,
    dispose: v
  };
}
function Ib(e, t, r) {
  return new Promise((i, a) => {
    e.toBlob((c) => {
      c ? i(c) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, r);
  });
}
async function Tb(e, t = {}) {
  var g, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const r = fa((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((g = t == null ? void 0 : t.camera) == null ? void 0 : g.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = Vo(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), c = e.renderFrame(r, a);
  if (!c) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Ib(c, u, f);
}
function Eb(e, t, r = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((r == null ? void 0 : r.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let c = fa((r == null ? void 0 : r.view) || {}), u = !1, f = 0;
  function g() {
    const w = Number((r == null ? void 0 : r.width) || t.clientWidth || i.clientWidth || 1), P = Number((r == null ? void 0 : r.height) || t.clientHeight || i.clientHeight || 1), C = Number((r == null ? void 0 : r.dpr) || window.devicePixelRatio || 1), A = Vo({ width: w, height: P, dpr: C });
    return i.width = Math.max(1, Math.round(A.width * A.dpr)), i.height = Math.max(1, Math.round(A.height * A.dpr)), i.style.width = `${A.width}px`, i.style.height = `${A.height}px`, A;
  }
  function y() {
    if (u || !a) return !1;
    const w = g();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      c,
      { ...w, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function v() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, y();
    }));
  }
  const h = typeof ResizeObserver == "function" ? new ResizeObserver(() => v()) : null;
  return h == null || h.observe(t), v(), {
    canvas: i,
    setView(w) {
      c = fa(w || {}), v();
    },
    getView() {
      return { ...c };
    },
    present: y,
    requestRender: v,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), h == null || h.disconnect(), i.remove();
    }
  };
}
function Db(e = {}) {
  const t = Ab({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(r, i = {}) {
      return t.renderFrame(gn(r), i);
    },
    renderShotToContext(r, i, a, c = {}) {
      return t.renderToContext(r, i, gn(a), c);
    },
    mount(r, i = {}) {
      const a = i != null && i.shot ? gn(i.shot) : i == null ? void 0 : i.view;
      return Eb(t, r, { ...i, view: a });
    },
    exportFrame(r = {}) {
      const i = r != null && r.shot ? { ...r, camera: gn(r.shot) } : r;
      return Tb(t, i);
    }
  };
}
function Vi(e, t, r, i) {
  const a = Array.isArray(e) ? e.find((c) => String((c == null ? void 0 : c[t]) || "") === String(r || "")) : null;
  a && Object.assign(a, i);
}
function Lb(e = {}) {
  const t = String(e.preview_quality || "balanced"), r = [
    { value: "draft", label: "Draft" },
    { value: "balanced", label: "Balanced" },
    { value: "high", label: "High" }
  ];
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y,
    qualityOpen: !1,
    qualityLabel: (r.find((i) => i.value === t) || r[1]).label,
    qualityOptions: r.map((i) => ({ ...i, active: i.value === t }))
  };
}
function Rb({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: c,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: g
}) {
  var T, I;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", v = {
    visible: y,
    activePane: y ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: y ? !!r : !1,
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
    historyEntries: Array.from({ length: 8 }, (U, ne) => ({ index: ne, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return v;
  const h = ((T = t.find((U) => a(e.paintColor, U.color))) == null ? void 0 : T.id) || "", w = !h, P = c(e.customPaintColor), C = Math.round(Math.max(0, Math.min(1, Number(((I = e.customPaintColor) == null ? void 0 : I.a) ?? 1))) * 100), A = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), j = e.brushSizes[A] ?? 10, V = g(), O = Array.from({ length: 8 }, (U, ne) => e.customPaintHistory[ne] || null);
  return {
    ...v,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: h,
    customColorActive: w,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...u(P.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    alphaValue: C,
    alphaText: `${C}%`,
    historyEntries: O.map((U, ne) => ({
      index: ne,
      color: U ? { cssColor: i(U, 1) } : null
    })),
    sizeValue: j,
    sizeText: String(j),
    sizeFill: `${Math.max(0, Math.min(100, (j - 1) / 119 * 100))}%`,
    sizeDisabled: V,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Ob({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
  return {
    coverage: { value: r(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    visibilityRows: [],
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
function Fb({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: i,
  selectedKind: a,
  selectedItems: c,
  params: u,
  notes: f,
  visibilityRows: g,
  uiSettings: y,
  normalizeCoverageValue: v
}) {
  return {
    coverage: { value: v(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !i || a === "stroke" || c.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: f,
    paramsDisabled: !i,
    visibilityRows: g,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function Vb({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: i,
  geom: a,
  allLocked: c,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: g,
  isExternalSticker: y,
  isStickerHidden: v,
  canRestoreSelectedToInitial: h,
  iconSet: w
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let P = [];
  if (r.length > 1)
    P = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (i === "stroke")
    P = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (P = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back }
    ], y(t) || (P.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: w.duplicate }), P.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: w.replace_image })), y(t)) {
      const T = h(), I = v(t);
      P.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: T ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !T
      }), P.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: I ? "Show" : "Hide",
        tip: I ? "Show input image" : "Hide input image",
        icon: I ? w.eye : w.eye_dashed
      });
    }
    P.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed }), y(t) || P.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete });
  } else
    P = [
      {
        key: "aspect",
        kind: "aspect",
        icon: w.aspect,
        open: !!g,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((T) => ({ value: T, label: T, active: f === T }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const C = a.corners.map((T) => T.x), A = a.corners.map((T) => T.y), j = Math.min(...C), V = Math.max(...C), O = Math.max(...A);
  return {
    visible: !0,
    left: (j + V) * 0.5,
    top: O + 18,
    items: P,
    anchor: { minX: j, maxX: V, maxY: O }
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
}, Ho = {
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
    const t = e, r = Mr(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Ce(), wi(tm(e.tag), zd({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value, { innerHTML: e.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Hb = { class: "pano-floating-right" }, zb = {
  class: "pano-fov-value",
  "data-fov-value": "",
  "aria-label": "Field of view"
}, jb = ["data-settled"], $b = ["data-ready", "data-settled"], Bb = ["aria-label", "data-tip", "innerHTML"], Ub = {
  key: 1,
  class: "pano-camera-preview-label"
}, Gb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    fovValue: { type: String, default: "100°" },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Ce(), Te(Qe, null, [
      oe("div", Hb, [
        oe("span", zb, _t(e.fovValue), 1),
        (Ce(!0), Te(Qe, null, Zt(e.buttons, (i) => (Ce(), wi(Ho, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Wc(oe("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        oe("div", {
          class: vt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: $t({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = oe("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Ce(), Te("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview",
            innerHTML: e.previewToggle.icon
          }, null, 8, Bb)) : ar("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ce(), Te("div", Ub, _t(e.preview.label || "Preview unavailable"), 1)) : ar("", !0)
        ], 14, $b)
      ], 8, jb), [
        [Qc, e.preview.visible]
      ])
    ], 64));
  }
}, Kb = ["aria-label"], Wb = { class: "pano-canvas-confirm-title" }, Yb = { class: "pano-canvas-confirm-text" }, qb = { class: "pano-canvas-confirm-actions" }, Xb = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Zb = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ pc(null), i = /* @__PURE__ */ pc(null);
    let a = null;
    function c() {
      const h = i.value;
      return h ? Array.from(h.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function u(h) {
      const w = i.value;
      if (!w) return;
      const P = w.querySelector(`[data-action='${h}']`);
      P instanceof HTMLButtonElement && P.click();
    }
    function f() {
      var A;
      const h = i.value;
      if (!h) return;
      const w = h.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const C = c()[0] || h;
      (A = C == null ? void 0 : C.focus) == null || A.call(C);
    }
    function g() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(h) {
      var V;
      if (h.defaultPrevented) return;
      if (h.key === "Escape") {
        h.preventDefault(), h.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (h.key !== "Tab") return;
      const w = c(), P = i.value;
      if (!w.length) {
        h.preventDefault(), (V = P == null ? void 0 : P.focus) == null || V.call(P);
        return;
      }
      const C = w[0], A = w[w.length - 1], j = document.activeElement;
      if (h.shiftKey) {
        (j === C || j === P || !(P != null && P.contains(j))) && (h.preventDefault(), A.focus());
        return;
      }
      (j === A || !(P != null && P.contains(j))) && (h.preventDefault(), C.focus());
    }
    function v(h) {
      h.target === r.value && u("confirm-cancel");
    }
    return Yi(() => t.model.visible, (h, w) => {
      if (h) {
        a = document.activeElement, Gc(() => {
          f();
        });
        return;
      }
      w && g();
    }, { immediate: !0 }), qc(() => {
      g();
    }), (h, w) => e.model.visible === !0 ? (Ce(), Te("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Gd(v, ["self"])
    }, [
      oe("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        oe("div", Wb, _t(e.model.title), 1),
        oe("div", Yb, _t(e.model.text), 1),
        oe("div", qb, [
          w[0] || (w[0] = oe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          oe("button", Xb, _t(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Kb)
    ], 512)) : ar("", !0);
  }
}, Jb = ["data-paint-pane"], Qb = ["hidden"], ev = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], tv = ["aria-pressed", "disabled"], rv = ["hidden"], nv = { class: "pano-paint-color-pop-head" }, iv = { class: "pano-paint-color-field" }, av = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, ov = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, sv = { class: "pano-paint-color-field" }, cv = { class: "pano-paint-alpha-wrap" }, lv = ["value"], uv = { "data-paint-alpha-value": "" }, fv = ["hidden"], dv = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, hv = ["data-paint-history-index", "aria-label", "disabled"], gv = ["data-paint-footer"], pv = ["data-paint-group"], mv = ["hidden"], yv = ["value", "disabled"], bv = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, vv = ["hidden"], _v = {
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
    function r(i) {
      return i ? { "--swatch": String(i.cssColor || "") } : {};
    }
    return (i, a) => (Ce(), Te("div", {
      class: vt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ce(!0), Te(Qe, null, Zt(e.panes, (c) => {
        var u;
        return Ce(), Te("div", {
          key: c.key,
          class: vt(["pano-paint-pane", { "is-active": e.state.activePane === c.key }]),
          "data-paint-pane": c.key
        }, [
          c.showColorFloat ? (Ce(), Te("div", {
            key: 0,
            class: vt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ce(!0), Te(Qe, null, Zt(e.paintSwatches, (f) => (Ce(), Te("button", {
              key: f.id,
              class: vt(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: $t(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, ev))), 128)),
            oe("button", {
              class: vt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: $t({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, tv),
            oe("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: $t({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              oe("div", nv, [
                oe("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: $t({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = oe("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              oe("div", iv, [
                oe("div", av, [
                  oe("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: $t({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                oe("div", ov, [
                  oe("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: $t({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              oe("label", sv, [
                a[1] || (a[1] = oe("span", null, "Opacity", -1)),
                oe("div", cv, [
                  oe("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, lv),
                  oe("span", uv, _t(e.state.alphaText || "100%"), 1)
                ])
              ]),
              oe("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                oe("div", dv, [
                  (Ce(!0), Te(Qe, null, Zt(e.state.historyEntries || [], (f) => (Ce(), Te("button", {
                    key: f.index,
                    class: vt(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: $t(r(f.color))
                  }, null, 14, hv))), 128))
                ])
              ], 8, fv)
            ], 12, rv)
          ], 10, Qb)) : ar("", !0),
          oe("div", {
            class: "pano-paint-footer",
            "data-paint-footer": c.footer
          }, [
            oe("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": c.group
            }, [
              (Ce(!0), Te(Qe, null, Zt(c.tools, (f) => {
                var g;
                return Ce(), wi(Ho, {
                  key: `${c.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((g = e.state.activeTools) == null ? void 0 : g[c.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, pv),
            oe("div", {
              class: vt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              oe("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: $t({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, yv),
              oe("span", bv, _t(e.state.sizeText || "10"), 1)
            ], 10, mv),
            oe("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[c.key]) ?? !c.clearHidden)
            }, [
              kt(Ho, {
                icon: ui(We).clear,
                label: c.clearLabel,
                tip: c.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": c.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, vv)
          ], 8, gv)
        ], 10, Jb);
      }), 128))
    ], 2));
  }
}, xv = {
  key: 0,
  class: "pano-cutout-menu"
}, wv = ["innerHTML"], Sv = ["data-aspect"], Nv = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], Mv = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Ce(), Te("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: $t({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ce(!0), Te(Qe, null, Zt(e.model.items || [], (i) => (Ce(), Te(Qe, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Ce(), Te("div", xv, [
          oe("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: i.icon
          }, null, 8, wv),
          oe("div", {
            class: vt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ce(!0), Te(Qe, null, Zt(i.choices || [], (a) => (Ce(), Te("button", {
              key: a.value,
              class: vt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, _t(a.label), 11, Sv))), 128))
          ], 2)
        ])) : (Ce(), Te("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0,
          innerHTML: i.icon
        }, null, 8, Nv))
      ], 64))), 128))
    ], 4));
  }
}, kv = {
  class: "pano-side",
  "data-side": ""
}, Pv = { class: "pano-side-head" }, Cv = ["innerHTML"], Av = {
  key: 0,
  class: "pano-side-scroll"
}, Iv = { class: "pano-inspector" }, Tv = { class: "pano-ui-row pano-coverage-row" }, Ev = ["data-selected"], Dv = ["aria-pressed", "disabled"], Lv = ["aria-pressed", "disabled"], Rv = {
  key: 0,
  class: "pano-section-title"
}, Ov = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Fv = {
  class: "pano-picker",
  "data-picker": "selection"
}, Vv = ["disabled"], Hv = ["innerHTML"], zv = ["hidden"], jv = ["data-selection-id", "innerHTML"], $v = {
  key: 2,
  class: "pano-state-actions"
}, Bv = ["disabled"], Uv = ["innerHTML"], Gv = ["data-key"], Kv = ["min", "max", "step", "value", "disabled", "data-param-key"], Wv = ["min", "max", "step", "value", "disabled", "data-param-key"], Yv = { class: "pano-visibility-section" }, qv = { class: "pano-visibility-stack" }, Xv = ["data-visibility-row"], Zv = { class: "pano-visibility-name" }, Jv = ["innerHTML"], Qv = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled", "innerHTML"], e_ = ["open"], t_ = ["innerHTML"], r_ = { class: "pano-ui-settings-body" }, n_ = { class: "pano-ui-row" }, i_ = ["data-selected"], a_ = ["aria-pressed"], o_ = ["aria-pressed"], s_ = { class: "pano-ui-row" }, c_ = ["data-selected"], l_ = ["aria-pressed"], u_ = ["aria-pressed"], f_ = { class: "pano-ui-row" }, d_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, h_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, g_ = { class: "pano-picker-label" }, p_ = ["hidden"], m_ = ["data-quality"], y_ = {
  key: 1,
  class: "pano-side-footer"
}, b_ = ["data-action"], v_ = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e;
    function r(f) {
      return String(f || "").replace(/[&<>"']/g, (g) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[g]);
    }
    const i = Mr(() => `<span class="pano-side-title-icon" aria-hidden="true">${We.globe}</span><span>${r(t.nodeTitle)}</span>`), a = Mr(() => {
      const f = t.model;
      return !f || typeof f != "object" ? !1 : Object.keys(f).length > 0 && !!f.coverage;
    });
    function c(f) {
      return { "--v": `${Number((f == null ? void 0 : f.fillPct) || 0)}%` };
    }
    function u(f, g) {
      return (g == null ? void 0 : g.paramsDisabled) === !0 || (f == null ? void 0 : f.enabled) === !1;
    }
    return (f, g) => {
      var y, v, h, w, P;
      return Ce(), Te("div", kv, [
        oe("div", Pv, [
          oe("div", {
            class: "pano-side-title",
            innerHTML: i.value
          }, null, 8, Cv),
          g[0] || (g[0] = oe("div", { class: "pano-side-actions" }, null, -1))
        ]),
        g[13] || (g[13] = oe("div", { class: "pano-divider" }, null, -1)),
        a.value ? (Ce(), Te("div", Av, [
          oe("div", Iv, [
            g[12] || (g[12] = oe("div", { class: "pano-section-title" }, [
              oe("span", null, "Scene")
            ], -1)),
            oe("div", Tv, [
              g[1] || (g[1] = oe("label", null, "Coverage", -1)),
              oe("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((y = e.model.coverage) == null ? void 0 : y.value) === 180 ? "1" : "0"
              }, [
                oe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 360 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "360", 8, Dv),
                oe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, Lv)
              ], 8, Ev)
            ]),
            e.model.transformTitle !== !1 ? (Ce(), Te("div", Rv, [...g[2] || (g[2] = [
              oe("span", null, "Transform", -1)
            ])])) : ar("", !0),
            e.model.selectionPicker ? (Ce(), Te("div", Ov, [
              oe("label", null, _t(e.model.selectionPicker.label), 1),
              oe("div", Fv, [
                oe("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  oe("span", {
                    class: "pano-picker-label",
                    innerHTML: e.model.selectionPicker.currentLabelHtml
                  }, null, 8, Hv),
                  g[3] || (g[3] = oe("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Vv),
                oe("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ce(!0), Te(Qe, null, Zt(e.model.selectionPicker.items || [], (C) => (Ce(), Te("button", {
                    key: C.id,
                    type: "button",
                    class: vt(["pano-picker-item", { active: C.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": C.id,
                    innerHTML: C.labelHtml
                  }, null, 10, jv))), 128))
                ], 8, zv)
              ])
            ])) : ar("", !0),
            e.model.copyStateButton ? (Ce(), Te("div", $v, [
              oe("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                oe("span", {
                  innerHTML: ui(We).copy
                }, null, 8, Uv),
                oe("span", null, _t(e.model.copyStateButton.label), 1)
              ], 8, Bv)
            ])) : ar("", !0),
            oe("div", {
              class: vt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ce(!0), Te(Qe, { key: 0 }, Zt(e.model.notes, (C) => (Ce(), Te("div", {
                key: C,
                class: "pano-param-note"
              }, _t(C), 1))), 128)) : (Ce(!0), Te(Qe, { key: 1 }, Zt(e.model.params || [], (C) => (Ce(), Te("div", {
                key: C.key,
                class: "pano-field",
                "data-key": C.key
              }, [
                oe("label", null, _t(C.label), 1),
                oe("input", {
                  type: "range",
                  min: C.min,
                  max: C.max,
                  step: C.step,
                  value: C.value,
                  disabled: u(C, e.model),
                  style: $t(c(C)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": C.key
                }, null, 12, Kv),
                oe("input", {
                  type: "number",
                  min: C.min,
                  max: C.max,
                  step: C.step,
                  value: C.displayValue,
                  disabled: u(C, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": C.key
                }, null, 8, Wv)
              ], 8, Gv))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Ce(), Te(Qe, { key: 3 }, [
              g[5] || (g[5] = oe("div", { class: "pano-divider" }, null, -1)),
              oe("div", Yv, [
                g[4] || (g[4] = oe("div", { class: "pano-section-title" }, [
                  oe("span", null, "Layers")
                ], -1)),
                oe("div", qv, [
                  (Ce(!0), Te(Qe, null, Zt(e.model.visibilityRows, (C) => (Ce(), Te("div", {
                    key: C.key,
                    class: vt(["pano-visibility-row", { "is-hidden": C.visible === !1, "is-disabled": C.enabled === !1 }]),
                    "data-visibility-row": C.key
                  }, [
                    oe("span", Zv, [
                      oe("span", {
                        class: "pano-visibility-name-icon",
                        "aria-hidden": "true",
                        innerHTML: C.icon
                      }, null, 8, Jv),
                      oe("span", null, _t(C.label), 1)
                    ]),
                    oe("button", {
                      class: vt(["pano-visibility-toggle", { active: C.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": C.key,
                      "aria-label": C.ariaLabel,
                      "aria-pressed": C.visible === !0 ? "true" : "false",
                      "data-tip": C.tip,
                      disabled: C.enabled === !1,
                      innerHTML: C.visible === !0 ? ui(We).eye : ui(We).eye_dashed
                    }, null, 10, Qv)
                  ], 10, Xv))), 128))
                ])
              ])
            ], 64)) : ar("", !0),
            e.model.uiSettings ? (Ce(), Te("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              oe("summary", null, [
                g[6] || (g[6] = oe("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                oe("span", {
                  class: "pano-ui-caret",
                  "aria-hidden": "true",
                  innerHTML: ui(We).chevron
                }, null, 8, t_)
              ]),
              oe("div", r_, [
                oe("div", n_, [
                  g[7] || (g[7] = oe("label", null, "Drag X", -1)),
                  oe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, a_),
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, o_)
                  ], 8, i_)
                ]),
                oe("div", s_, [
                  g[8] || (g[8] = oe("label", null, "Drag Y", -1)),
                  oe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, l_),
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, u_)
                  ], 8, c_)
                ]),
                oe("div", f_, [
                  g[10] || (g[10] = oe("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  oe("div", d_, [
                    oe("button", h_, [
                      oe("span", g_, _t(e.model.uiSettings.qualityLabel), 1),
                      g[9] || (g[9] = oe("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    oe("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Ce(!0), Te(Qe, null, Zt(e.model.uiSettings.qualityOptions || [], (C) => (Ce(), Te("button", {
                        key: C.value,
                        type: "button",
                        class: vt(["pano-picker-item", { active: C.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": C.value
                      }, _t(C.label), 11, m_))), 128))
                    ], 8, p_)
                  ])
                ]),
                g[11] || (g[11] = oe("div", { class: "pano-ui-row" }, [
                  oe("span"),
                  oe("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, e_)) : ar("", !0)
          ])
        ])) : ar("", !0),
        (e.model.footerButtons || []).length ? (Ce(), Te("div", y_, [
          (Ce(!0), Te(Qe, null, Zt(e.model.footerButtons, (C) => (Ce(), Te("button", {
            key: C.action,
            class: vt(["pano-btn", { "pano-btn-primary": C.primary === !0 }]),
            type: "button",
            "data-action": C.action
          }, _t(C.label), 11, b_))), 128))
        ])) : ar("", !0)
      ]);
    };
  }
}, __ = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Ce(), Te("div", {
      class: vt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: $t({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, _t(e.model.text || ""), 7));
  }
}, x_ = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, w_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Ce(), Te("div", x_, [
      (Ce(!0), Te(Qe, null, Zt(e.buttons, (i) => Wc((Ce(), wi(Ho, {
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
        [Qc, i.visible !== !1]
      ])), 128))
    ]));
  }
}, S_ = ["data-video-ready"], N_ = { class: "pano-video-transport-bar" }, M_ = ["aria-label", "data-tip", "disabled", "innerHTML"], k_ = { class: "pano-video-track-wrap" }, P_ = { class: "pano-video-time" }, C_ = ["max", "value", "disabled"], A_ = { class: "pano-video-time" }, I_ = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = Mr(() => {
      var u;
      return ((u = t.state) == null ? void 0 : u.playing) === !0 ? "Pause" : "Play";
    }), i = Mr(() => {
      var u;
      return ((u = t.state) == null ? void 0 : u.playing) === !0 ? "Pause video" : "Play video";
    }), a = Mr(() => {
      var u;
      return ((u = t.state) == null ? void 0 : u.playing) === !0 ? We.pause : We.play;
    }), c = Mr(() => {
      var u;
      return `${Math.max(0, Math.min(100, Number(((u = t.state) == null ? void 0 : u.progressPct) || 0)))}%`;
    });
    return (u, f) => (Ce(), Te("div", {
      class: vt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false"
    }, [
      f[0] || (f[0] = oe("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous",
        muted: ""
      }, null, -1)),
      oe("div", N_, [
        oe("button", {
          class: "pano-btn pano-btn-icon pano-video-control",
          type: "button",
          "data-action": "video-play-toggle",
          "aria-label": r.value,
          "data-tip": i.value,
          disabled: e.state.ready !== !0,
          innerHTML: a.value
        }, null, 8, M_),
        oe("div", k_, [
          oe("div", P_, _t(e.state.currentTimeLabel || "0:00"), 1),
          oe("input", {
            class: "pano-video-slider",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            style: $t({ "--v": c.value })
          }, null, 12, C_),
          oe("div", A_, _t(e.state.durationLabel || "0:00"), 1)
        ])
      ])
    ], 10, S_));
  }
}, T_ = { class: "pano-floating-top" }, E_ = ["data-selected", "data-view-count"], D_ = ["data-view", "aria-pressed", "aria-label", "disabled"], L_ = ["innerHTML"], R_ = { class: "label" }, O_ = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var i;
      return Ce(), Te("div", T_, [
        oe("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ce(!0), Te(Qe, null, Zt(e.buttons, (a) => Wc((Ce(), Te("button", {
            key: a.key,
            class: vt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            oe("span", {
              innerHTML: a.icon
            }, null, 8, L_),
            oe("span", R_, _t(a.label), 1)
          ], 10, D_)), [
            [Qc, a.visible !== !1]
          ])), 128))
        ], 8, E_)
      ]);
    };
  }
};
function bh(e = "stickers") {
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
const F_ = ["aria-label"], V_ = { class: "pano-stage-wrap" }, H_ = {
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
    const r = e, i = t;
    let a = "", c = !1, u = null;
    const f = /* @__PURE__ */ pc(null), g = Mr(() => r.readOnly === !0), y = Mr(() => r.shellPreset || bh(r.type)), v = Mr(() => {
      var T;
      const O = Array.isArray((T = y.value) == null ? void 0 : T.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && O.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: We.fullscreen
      }), O;
    });
    function h() {
      const O = f.value;
      return O ? Array.from(O.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((T) => T instanceof HTMLElement ? !T.hidden && T.tabIndex >= 0 && T.offsetParent !== null : !1) : [];
    }
    function w() {
      var I;
      const T = h()[0] || f.value;
      (I = T == null ? void 0 : T.focus) == null || I.call(T);
    }
    function P() {
      var O;
      u != null && u.isConnected && ((O = u.focus) == null || O.call(u)), u = null;
    }
    function C(O) {
      var T, I, U, ne;
      if (!O.defaultPrevented) {
        if (O.key === "Tab") {
          const se = h();
          if (!se.length) {
            O.preventDefault(), (I = (T = f.value) == null ? void 0 : T.focus) == null || I.call(T);
            return;
          }
          const te = se[0], we = se[se.length - 1], M = document.activeElement;
          if (O.shiftKey) {
            (M === te || M === f.value || !((U = f.value) != null && U.contains(M))) && (O.preventDefault(), we.focus());
            return;
          }
          (M === we || !((ne = f.value) != null && ne.contains(M))) && (O.preventDefault(), te.focus());
          return;
        }
        O.key === "Escape" && i("close");
      }
    }
    function A() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function j() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function V(O) {
      document.removeEventListener("keydown", C), O ? (u || (u = document.activeElement), A(), document.addEventListener("keydown", C), Gc(() => {
        w();
      })) : (j(), P());
    }
    return yd(() => {
      V(r.open);
    }), qc(() => {
      j(), document.removeEventListener("keydown", C), P();
    }), Yi(() => r.open, (O) => {
      V(O);
    }), (O, T) => e.open ? (Ce(), Te("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: T[0] || (T[0] = Gd((I) => i("close"), ["self"]))
    }, [
      oe("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        oe("div", V_, [
          T[1] || (T[1] = Dm('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? ar("", !0) : (Ce(), Te(Qe, { key: 0 }, [
            kt(w_, {
              buttons: e.uiState.toolButtons || y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            kt(_v, {
              "paint-swatches": e.paintSwatches,
              panes: y.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          kt(I_, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          kt(O_, {
            buttons: e.uiState.viewButtons || y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          kt(Gb, {
            buttons: e.uiState.floatingButtons || v.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          kt(Mv, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          kt(__, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          kt(Zb, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ar("", !0) : (Ce(), wi(v_, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, F_)
    ])) : ar("", !0);
  }
}, zo = "state_json", Mn = "sticker_image_1", nc = "external_image", ic = "pano_sticker_input_images", vo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], At = Math.PI / 180, hn = 180 / Math.PI, jo = 24, z_ = 4, j_ = 4, Ja = /* @__PURE__ */ new Map(), If = /* @__PURE__ */ new Map(), Qa = /* @__PURE__ */ new Map(), Rt = {
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
function $_(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function B_(e) {
  return 1 - Math.pow(1 - e, 3);
}
function U_(e) {
  return e * e * e;
}
function Or(e, t, r) {
  return { x: e, y: t, z: r };
}
function eo(e, t) {
  return Or(e.x + t.x, e.y + t.y, e.z + t.z);
}
function to(e, t) {
  return Or(e.x * t, e.y * t, e.z * t);
}
function Nr(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ro(e, t) {
  return Or(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ii(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Or(e.x / t, e.y / t, e.z / t);
}
function Ar(e, t) {
  const r = e * At, i = t * At, a = Math.cos(i);
  return Or(a * Math.sin(r), Math.sin(i), a * Math.cos(r));
}
function no(e) {
  return {
    yaw: Ft(Math.atan2(e.x, e.z) * hn),
    pitch: W(Math.asin(W(e.y, -1, 1)) * hn, -90, 90)
  };
}
function Ur(e, t) {
  let r = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i].x, u = t[i].y, f = t[a].x, g = t[a].y;
    u > e.y != g > e.y && e.x < (f - c) * (e.y - u) / (g - u || 1e-6) + c && (r = !r);
  }
  return r;
}
function fn(e, t) {
  const r = e.x - t.x, i = e.y - t.y;
  return r * r + i * i;
}
function ac(e, t, r) {
  const i = Number(r.x || 0) - Number(t.x || 0), a = Number(r.y || 0) - Number(t.y || 0), c = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return fn(e, t);
  const g = W((c * i + u * a) / f, 0, 1), y = Number(t.x || 0) + i * g, v = Number(t.y || 0) + a * g, h = Number(e.x || 0) - y, w = Number(e.y || 0) - v;
  return h * h + w * w;
}
function Gr(e, t, r) {
  return e + (t - e) * r;
}
function Ir(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${W(r, 0, 1)})`;
}
function G_(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let io = { fillStyle: "", url: "" };
function K_(e, t, r) {
  if (io.url && io.fillStyle === String(e || ""))
    return io.url;
  const i = G_(`
<svg xmlns="http://www.w3.org/2000/svg" width="${jo}" height="${jo}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return io = { fillStyle: String(e || ""), url: i }, i;
}
function _o(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function lr(e) {
  return {
    r: W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: W(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function jt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function W_(e) {
  return vo.some((t) => _o(e, t.color));
}
function oc(e, t, r) {
  const i = (Number(e) % 1 + 1) % 1, a = W(Number(t), 0, 1), c = W(Number(r), 0, 1);
  if (a <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(i * 6), f = i * 6 - u, g = c * (1 - a), y = c * (1 - f * a), v = c * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: c, g: v, b: g };
    case 1:
      return { r: y, g: c, b: g };
    case 2:
      return { r: g, g: c, b: v };
    case 3:
      return { r: g, g: y, b: c };
    case 4:
      return { r: v, g, b: c };
    default:
      return { r: c, g, b: y };
  }
}
function sc(e) {
  const t = W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, r, i), c = Math.min(t, r, i), u = a - c;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((r - i) / u + (r < i ? 6 : 0)) / 6 : a === r ? f = ((i - t) / u + 2) / 6 : f = ((t - r) / u + 4) / 6);
  const g = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: g, v: a };
}
function Y_(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Tf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function q_(e, t) {
  const r = Tf(e, 1), i = Tf(t, 1);
  if (r <= 0 || i <= 0) return "1:1";
  const a = 1e3, c = Math.max(1, Math.round(r * a)), u = Math.max(1, Math.round(i * a)), f = (h, w) => w ? f(w, h % w) : h, g = f(c, u) || 1, y = Math.max(1, Math.round(c / g)), v = Math.max(1, Math.round(u / g));
  return `${y}:${v}`;
}
function Ui(e) {
  const t = W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * At, r = W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * At;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function X_(e) {
  const t = Number(e);
  if (!Number.isFinite(t) || t <= 0) return "1:1";
  const r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ], i = 0.015;
  for (const [a, c] of r)
    if (Math.abs(t - c) <= i) return a;
  return "";
}
function Cn(e) {
  const t = Ui(e);
  return X_(t) || q_(t, 1);
}
function vh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Cn(t), t;
}
function Hi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Cn(e);
}
let ao = null;
function Z_() {
  return ao || (ao = new Promise((e) => {
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
  }), ao);
}
const _h = "pano_suite.ui_settings.v1", xh = "pano_suite.node_grid_visibility.v1";
let li = null, Tr = null, oo = { text: null, parsed: null };
function ta(e) {
  const t = e && typeof e == "object" ? e : {}, r = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: r === "draft" || r === "balanced" || r === "high" ? r : "balanced"
  };
}
function J_() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(_h)) || "").trim();
    if (!t) return li ? ta(li) : null;
    const r = JSON.parse(t), i = ta(r);
    return li = i, i;
  } catch {
    return li ? ta(li) : null;
  }
}
function Q_(e) {
  var r;
  const t = ta(e);
  li = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(_h, JSON.stringify(t));
  } catch {
  }
  return t;
}
function wh() {
  var e;
  if (Tr && typeof Tr == "object")
    return Tr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(xh)) || "").trim();
    if (!t)
      return Tr = {}, Tr;
    const r = JSON.parse(t);
    return Tr = r && typeof r == "object" ? r : {}, Tr;
  } catch {
    return Tr = {}, Tr;
  }
}
function ex(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const a = wh()[r];
  return typeof a == "boolean" ? a : !!t;
}
function tx(e, t) {
  var a;
  const r = String(e ?? "").trim();
  if (!r) return;
  const i = wh();
  i[r] = !!t, Tr = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(xh, JSON.stringify(i));
  } catch {
  }
}
function rx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, i]) => {
    t[r] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function nx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function ix(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Ef(e) {
  const { paintCount: t, maskCount: r } = ix(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, c = 0;
  return i.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? c += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: a,
    maskRasterCount: c,
    totalPaintCount: t + a,
    totalMaskCount: r + c
  };
}
function ai(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Df(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function ax(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : vh(t)) : [];
}
function ox(e, t = 2048, r = "#00ff00", i = 360) {
  const a = J_(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Ot(i),
    bg_color: r,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: ea(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(e || "").trim();
  if (!u) return c;
  try {
    let f = null;
    if (oo.text === u ? f = oo.parsed : (f = JSON.parse(u), oo = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return c;
    const g = {
      ...c,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: rx(f.assets),
      stickers: nx(f.stickers),
      shots: ax(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ea(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var v;
          const y = String(((v = f.ui_settings) == null ? void 0 : v.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...c.active }
    };
    return a && (g.ui_settings = ta({ ...g.ui_settings, ...a })), g.output_preset = Dc(t, Number(g.output_preset || c.output_preset)), g.bg_color = String(r || g.bg_color || c.bg_color), g.coverage = Ot(i), delete g.editor_history, g;
  } catch {
    return oo = { text: u, parsed: null }, c;
  }
}
function yr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((i) => i.name === t)) || null;
}
function ll(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = yr(e, "coverage");
  if (!t) return;
  const r = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var c, u, f, g, y, v, h, w, P, C;
    const a = r ? r(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (g = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (h = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || h.call(v, !0, !0), (C = (P = (w = ur) == null ? void 0 : w.canvas) == null ? void 0 : P.setDirty) == null || C.call(P, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function sx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Lf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function cx(e) {
  var P, C, A, j, V;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = yr(e, "coverage"), r = yr(e, "bg_color"), i = yr(e, zo), a = yr(e, "sticker_state");
  if (!t || !r || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const c = String(t.value ?? "").trim(), u = String(r.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && sx(c) && (Lf(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Lf(u))
    try {
      const O = JSON.parse(u);
      y = String(Ot(O == null ? void 0 : O.coverage));
    } catch {
      y = "360";
    }
  const v = c, h = u, w = f;
  t.value = y, (P = t.callback) == null || P.call(t, y), r.value = v, (C = r.callback) == null || C.call(r, v), i.value = h, (A = i.callback) == null || A.call(i, h), a && (a.value = w, (j = a.callback) == null || j.call(a, w)), (V = e.setDirtyCanvas) == null || V.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function cc(e) {
  return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function lx(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), i = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return i[r] ? i[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function ux(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var c, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.element) != null && c.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Ec(e, t, r) {
  var c, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  return a ? (a.callback = r, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (c = a.element) != null && c.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, r), a && (a.serialize = !1), a);
}
function so(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Dc(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const i = r.includes("x") ? r.split("x", 1)[0].trim() : r, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function Sh(e, t) {
  if (!e || t == null) return null;
  const r = e.links;
  return r ? r instanceof Map ? r.get(t) || r.get(Number(t)) || r.get(String(t)) || null : r[t] || r[String(t)] || null : null;
}
function fx(e, t) {
  var r, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Nh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function dx(e, t, r = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && r != null && (i = fx(e == null ? void 0 : e.graph, r)), i;
}
function da(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t), r.set("type", String(e.type || "output")), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((a = Jt) == null ? void 0 : a.apiURL) == "function" ? Jt.apiURL(i) : i;
}
function hx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function gx(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const i = r.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function px(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || r.has(a) || (r.add(a), t.push(a));
  }), t;
}
function Mh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (hx(t)) return [t];
  const { filename: r, subfolder: i } = gx(t);
  if (!r) return [t];
  const a = ["temp", "output", "input"].map((c) => da({
    filename: r,
    subfolder: i,
    type: c
  }));
  return px([...a, t]);
}
function mx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? da({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ra(e) {
  var i;
  const t = (i = ur) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  return t instanceof Map ? t.get(e) || t.get(r) || t.get(Number(r)) || null : t[e] || t[r] || null;
}
function Fn(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Fn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return da({ filename: t, subfolder: r, type: i });
    }
    for (const r of e) {
      const i = Fn(r);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : da(e);
}
function yx(e, t = -1) {
  var a;
  const r = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && r.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && r.push(e.ui.images);
  const i = [];
  for (const c of r)
    !Array.isArray(c) || !c.length || (t >= 0 && t < c.length && i.push(c[t]), i.push(...c));
  return i;
}
function lc(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = Fn(i);
    !a || r.has(a) || (r.add(a), t.push(a));
  }
  return t;
}
function bx(e, t, r, i = null) {
  var h;
  const a = ra(e == null ? void 0 : e.id), c = Array.isArray((h = a == null ? void 0 : a.ui) == null ? void 0 : h[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(c) && c.length ? c[0] : null, f = Fn(u);
  if (!f) return null;
  const g = `__ui__${t}`, y = r.get(g);
  if (y && y.__panoSrc === f) return y;
  const v = new Image();
  return v.__panoSrc = f, v.onload = () => {
    typeof i == "function" && i(v);
  }, v.src = f, r.set(g, v), v;
}
function vx(e, t) {
  var O, T;
  const r = String(t || "").trim();
  if (!r) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((I) => String((I == null ? void 0 : I.name) || "") === r);
  if (a < 0) return { src: "", sourceType: "", inputName: r };
  const c = i[a], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: r };
  const f = Sh(e.graph, u), { originId: g, originSlot: y } = Nh(f);
  if (g == null) return { src: "", sourceType: "", inputName: r };
  const v = dx(e, a, g), h = Number(y || 0);
  if (!v) return { src: "", sourceType: "", inputName: r };
  let w = [];
  try {
    w = typeof ((O = ur) == null ? void 0 : O.getNodeImageUrls) == "function" ? ur.getNodeImageUrls(v) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const I = [];
    h >= 0 && h < w.length && I.push(w[h]), I.push(...w);
    const U = lc(I);
    if (U.length) return { src: U[0], srcCandidates: U, sourceType: "appNodeImageUrls", inputName: r };
  }
  const P = ra((v == null ? void 0 : v.id) ?? g), C = yx(P, h), A = lc(C);
  if (A.length) return { src: A[0], srcCandidates: A, sourceType: "nodeOutputs", inputName: r };
  const j = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
  if (j.length) {
    const I = [];
    h >= 0 && h < j.length && I.push(j[h]), I.push(...j);
    const U = lc(I);
    if (U.length) return { src: U[0], srcCandidates: U, sourceType: "nodeImgs", inputName: r };
  }
  const V = (T = v == null ? void 0 : v.widgets) == null ? void 0 : T.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image");
  if (V) {
    let I = Fn(V.value);
    if (I && !I.includes("/") && !I.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (I = Jt.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`)), I) return { src: I, sourceType: "widget", inputName: r };
  }
  return { src: "", sourceType: "", inputName: r };
}
function _x(e, t, r, i = null) {
  const a = String(r || "").trim();
  if (!a) return null;
  const c = Mh(a);
  if (!c.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), f = e.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  e.__panoLinkedInputImageCache.set(u, y);
  let v = -1;
  const h = () => {
    var P, C;
    if (v += 1, v >= c.length) {
      try {
        (C = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || C.call(P, u);
      } catch {
      }
      return;
    }
    const w = c[v];
    y.resolvedSrc = w, g.src = w;
  };
  return g.onload = () => {
    var w;
    i == null || i(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, g.onerror = () => {
    var w, P;
    if (v + 1 < c.length) {
      h();
      return;
    }
    try {
      (P = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || P.call(w, u);
    } catch {
    }
  }, h(), g;
}
function xx(e, t, r, i = null) {
  const a = Array.isArray(r) ? r.map((C) => String(C || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(t || "image"), u = a.join(`
`), f = e.__panoLinkedInputImageCache.get(c);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((C) => {
    Mh(C).forEach((A) => {
      const j = String(A || "").trim();
      !j || y.has(j) || (y.add(j), g.push(j));
    });
  }), !g.length) return null;
  const v = new Image(), h = { srcRaw: u, resolvedSrc: "", img: v };
  e.__panoLinkedInputImageCache.set(c, h);
  let w = -1;
  const P = () => {
    var A, j;
    if (w += 1, w >= g.length) {
      try {
        (j = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || j.call(A, c);
      } catch {
      }
      return;
    }
    const C = g[w];
    h.resolvedSrc = C, v.src = C;
  };
  return v.onload = () => {
    var C;
    i == null || i(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0);
  }, v.onerror = () => {
    var C, A;
    if (w + 1 < g.length) {
      P();
      return;
    }
    try {
      (A = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || A.call(C, c);
    } catch {
    }
  }, P(), v;
}
function kh(e, t = []) {
  const r = Array.isArray(t) ? t : [t];
  for (const i of r) {
    const a = vx(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Rf(e, t = [], r = null, i = "") {
  const a = Array.isArray(t) ? t : [t], c = kh(e, a), u = String(i || a.join("|") || "image_exact"), f = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (f.length) return xx(e, u, f, r);
  const g = String((c == null ? void 0 : c.src) || "").trim();
  return g ? _x(e, u, g, r) : null;
}
async function na(e, t, r = {}) {
  const i = (r == null ? void 0 : r.readOnly) === !0, a = (r == null ? void 0 : r.hideSidebar) ?? i, c = i, u = lx(e, t);
  await Z_();
  const f = yr(e, "output_preset"), g = yr(e, "coverage"), y = yr(e, "bg_color"), v = yr(e, zo), h = ox(
    String((v == null ? void 0 : v.value) || ""),
    Dc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Ot(g == null ? void 0 : g.value)
  );
  e.__panoLiveStateOverride = h, e.__panoLiveStateVersion = 0, t === "cutout" && (h.shots = Array.isArray(h.shots) ? h.shots.slice(0, 1) : [], h.shots.length || (h.active.selected_shot_id = null));
  const w = t === "cutout" ? (() => {
    var s;
    const n = Array.isArray(h.shots) ? h.shots : [], o = String(((s = h == null ? void 0 : h.active) == null ? void 0 : s.selected_shot_id) || "");
    return n.find((l) => String((l == null ? void 0 : l.id) || "") === o) || n[0] || null;
  })() : null, P = w ? Vl(w, !1) : { width: 220, height: 132 }, C = bh(t), A = /* @__PURE__ */ Yo({
    viewButtons: (C.viewButtons || []).map((n) => ({ ...n, visible: !0, disabled: !1 })),
    toolButtons: (C.toolButtons || []).map((n) => ({ ...n, disabled: !1 })),
    floatingButtons: [
      ...(C.floatingButtons || []).map((n) => ({ ...n, disabled: !1 })),
      ...c ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Rt.fullscreen, disabled: !1 }] : []
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
      customColorCss: Ir({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Ir({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (n, o) => ({ index: o, color: null })),
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
      mode: "playback"
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
      width: P.width,
      height: P.height,
      label: w ? "Loading preview" : "Add Frame to preview"
    }
  }), j = document.createElement("div");
  document.body.appendChild(j);
  const V = p1(H_, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: C,
    paintSwatches: vo.map((n) => ({
      id: n.id,
      label: n.label,
      cssColor: Ir(n.color, 1)
    })),
    uiState: A,
    onClose: () => {
      ti();
    }
  });
  try {
    V.mount(j);
  } catch (n) {
    try {
      V.unmount();
    } catch {
    }
    throw j.remove(), n;
  }
  const O = j.querySelector(".pano-modal-overlay"), T = j.querySelector(".pano-modal"), I = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), U = T == null ? void 0 : T.querySelector("[data-stage-background]"), ne = T == null ? void 0 : T.querySelector(".pano-stage-wrap");
  if (!O || !T || !I || !U || !ne)
    throw V.unmount(), j.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const se = document.createElement("div");
  se.setAttribute("aria-hidden", "true"), se.style.position = "absolute", se.style.left = "0", se.style.top = "0", se.style.pointerEvents = "none", se.style.zIndex = "12", se.style.display = "none", se.style.willChange = "transform,width,height,background,border-radius", ne == null || ne.appendChild(se);
  const te = document.createElement("div");
  te.className = "pano-paint-size-preview", te.setAttribute("aria-hidden", "true");
  const we = document.createElement("div");
  we.className = "pano-paint-size-preview-sample", te.appendChild(we), ne == null || ne.appendChild(te);
  const M = I.getContext("2d"), he = Dn(), fe = t === "cutout" ? Db({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, ue = T.querySelector("[data-side]"), G = T.querySelector("[data-video-element]"), ae = T.querySelector("[data-selection-menu]"), me = T.querySelector("[data-tooltip]"), ge = T.querySelector("[data-camera-preview-host]"), q = T.querySelector("[data-paint-color-row]"), ce = T.querySelector("[data-paint-color-pop]"), Ie = T.querySelector("[data-paint-color-sv]"), De = T.querySelector("[data-paint-color-sv-cursor]"), Oe = T.querySelector("[data-paint-hue-strip]"), dt = T.querySelector("[data-paint-hue-handle]");
  let ot = 0, St = 0;
  ne == null || ne.removeAttribute("data-stage-ready"), ne == null || ne.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", U.style.opacity = "0", a && (ue == null || ue.remove(), T.classList.add("pano-modal-readonly"));
  const Nt = () => {
    if (!m.customPaintSessionStart) return;
    if (_o(m.customPaintSessionStart, m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    if (W_(m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    const n = [
      lr(m.customPaintColor),
      ...m.customPaintHistory.filter((o) => !_o(o, m.customPaintColor))
    ];
    m.customPaintHistory = n.slice(0, 8), m.customPaintSessionStart = null;
  }, It = (n = !1) => {
    !ce || ce.hidden || (n ? Nt() : m.customPaintSessionStart = null, ce.hidden = !0, A.paintDock.colorPopOpen = !1);
  }, or = () => {
    ce && (ce.hidden && (m.customPaintSessionStart = lr(m.customPaintColor)), ce.hidden = !1, A.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (n) => {
    Fa(), !n.target.closest(".pano-picker") && (n.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), It(!0), t === "cutout" && m.cutoutAspectOpen && !n.target.closest(".pano-aspect-popover") && !n.target.closest("[data-action='aspect']") && (m.cutoutAspectOpen = !1, m.menuMode = "", m.menuSize.measured = !1, $e(), pe())));
  });
  const hr = t === "stickers" ? h.active.selected_sticker_id : h.active.selected_shot_id, sr = JSON.stringify(Df(h)), m = {
    mode: "pano",
    selectedId: hr,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Ot(h.coverage),
    historyController: mb(80, { entries: [sr], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Br,
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
    showGrid: ex(e == null ? void 0 : e.id, !0),
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
    paintEngine: wc(),
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
  }, D = fe && ge ? fe.mount(ge, { shot: null }) : null;
  t === "stickers" && (m.selectedId = null, h.active.selected_sticker_id = null), m.selectedIds = m.selectedId ? [m.selectedId] : [];
  const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), $ = document.createElement("canvas");
  $.__panoFrameIdx = 0;
  const z = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, Q = {
    timer: 0,
    target: null
  }, J = {
    active: !1,
    depth: 0
  }, R = {
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
  }, ve = 4, de = [], xe = () => {
    const n = Math.max(1, Number(A.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / n));
  }, Me = (n) => {
    const o = Math.max(1, Number(A.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(n || 0)) * o));
  }, Ae = (n) => {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return null;
    const o = Number(G.videoWidth || 0), s = Number(G.videoHeight || 0), l = document.createElement("canvas");
    l.width = o, l.height = s, l.__panoFrameIdx = Number(l.__panoFrameIdx || 0) + 1;
    const d = l.getContext("2d");
    if (!d) return null;
    for (d.drawImage(G, 0, 0, o, s), R.frameCache.set(n, l), R.frameCacheOrder = R.frameCacheOrder.filter((p) => p !== n), R.frameCacheOrder.push(n); R.frameCacheOrder.length > ve; ) {
      const p = R.frameCacheOrder.shift();
      p != null && R.frameCache.delete(p);
    }
    return l;
  }, Ee = (n, o = null) => {
    if (!(n instanceof HTMLCanvasElement)) return !1;
    const s = Number(n.width || 0), l = Number(n.height || 0);
    if (s < 1 || l < 1) return !1;
    ($.width !== s || $.height !== l) && ($.width = s, $.height = l);
    const d = $.getContext("2d");
    return d ? (d.clearRect(0, 0, s, l), d.drawImage(n, 0, 0, s, l), $.__panoFrameIdx = Number($.__panoFrameIdx || 0) + 1, o != null && (R.presentedTime = Number(o || 0)), !0) : !1;
  }, Le = (n) => {
    const o = Me(n), s = R.frameCache.get(o) || null;
    return s ? (R.currentFrameNumber = o, Ee(s, n)) : !1;
  };
  if (G instanceof HTMLVideoElement) {
    const n = () => {
      if (typeof G.requestVideoFrameCallback != "function" || G.__panoFramePumpActive) return;
      G.__panoFramePumpActive = !0;
      const _ = (b, x) => {
        G.__panoFramePumpActive = !1;
        const S = Number((x == null ? void 0 : x.mediaTime) ?? G.currentTime ?? 0), k = Me(S), N = xe();
        R.mode === "scrub" ? Math.abs(S - Number(R.editorTime || 0)) <= N && (Ae(k), Le(R.editorTime), z.backgroundDirty = !0, z.dirty = !0, Ni({
          ready: !0,
          playing: !1,
          visible: m.primaryTool !== "paint" && m.primaryTool !== "mask",
          currentTime: R.editorTime,
          duration: A.videoTransport.duration,
          frameCount: A.videoTransport.frameCount,
          fps: A.videoTransport.fps,
          mode: "scrub"
        }), pe({ cause: "frame_view" })) : (R.editorTime = S, R.presentedTime = S, R.requestedTime = null, R.currentFrameNumber = k, Ae(k), R.frameCounter += 1, G.dataset.panoFrameIdx = String(R.frameCounter), z.backgroundDirty = !0, z.dirty = !0, Ni({
          ready: !0,
          playing: !G.paused && !G.ended,
          visible: m.primaryTool !== "paint" && m.primaryTool !== "mask",
          currentTime: S,
          duration: A.videoTransport.duration,
          frameCount: A.videoTransport.frameCount,
          fps: A.videoTransport.fps,
          mode: "playback"
        }), pe({ cause: "frame_view" })), z.running && (!G.paused || R.mode === "scrub") && n();
      };
      try {
        G.requestVideoFrameCallback(_);
      } catch {
        G.__panoFramePumpActive = !1;
      }
    }, o = () => {
      R.pendingPlaybackResume && (R.pendingPlaybackResume = !1, R.mode = "playback", R.requestedTime = null, Bn() && (z.backgroundDirty = !0, z.dirty = !0), G.play().catch(() => {
      }));
    }, s = () => {
      R.editorTime = Number(G.currentTime || 0), Number(G.readyState || 0) >= 2 && Bn() && (z.backgroundDirty = !0, z.dirty = !0), Un(), n(), pe({ cause: "frame_view" });
    }, l = () => {
      R.mode = "playback", R.seeking = !1, R.requestedTime = null, Un(), n(), pe({ cause: "frame_view" });
    }, d = () => {
      R.mode === "playback" && Bn() && (z.backgroundDirty = !0, z.dirty = !0), Un(), pe({ cause: "frame_view" });
    }, p = () => {
      const _ = R.seeking || R.pendingPlaybackResume || R.mode === "scrub";
      if (R.seeking = !1, !_) {
        R.requestedTime = null, n();
        return;
      }
      const b = Number(R.requestedTime ?? R.editorTime ?? 0), x = Number(G.currentTime || 0);
      if (Math.abs(x - b) > xe()) {
        fs(b);
        return;
      }
      R.mode === "scrub" && (Bn(), z.backgroundDirty = !0, z.dirty = !0, pe({ cause: "frame_view" })), R.requestedTime = null, o(), n();
    };
    G.addEventListener("loadedmetadata", s), G.addEventListener("loadeddata", s), G.addEventListener("canplay", s), G.addEventListener("play", l), G.addEventListener("pause", d), G.addEventListener("seeked", p), de.push(() => G.removeEventListener("loadedmetadata", s)), de.push(() => G.removeEventListener("loadeddata", s)), de.push(() => G.removeEventListener("canplay", s)), de.push(() => G.removeEventListener("play", l)), de.push(() => G.removeEventListener("pause", d)), de.push(() => G.removeEventListener("seeked", p));
  }
  function nt() {
    A.toolButtons.forEach((n) => {
      const o = n.attr === "data-tool-mode", s = n.attr === "data-paint-tool", l = n.attr === "data-mask-tool";
      n.active = o ? n.value === m.primaryTool : s ? n.key === m.paintTool : l ? n.key === m.maskTool : !1, n.pressed = n.active ? "true" : n.pressed == null ? null : "false";
    });
  }
  function lt(n) {
    const o = n == null ? void 0 : n.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const s of o.items) {
        if (!s || s.kind !== "file") continue;
        const l = String(s.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((s) => Ea(s)) : !1;
  }
  function ke(n) {
    const o = !!n;
    J.active !== o && (J.active = o, ne.classList.toggle("drop-active", o));
  }
  function pt(n, o, s = m.viewFov, l = 140, d = 620) {
    const p = Q1(m.viewYaw, n), _ = o - m.viewPitch, b = s - m.viewFov, x = Math.hypot(p, _) + Math.abs(b) * 0.6, S = Math.round(W(l + x * 2.2, l, d));
    m.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: m.viewYaw,
      startPitch: m.viewPitch,
      startFov: m.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: p
    }, m.viewInertia.active = !1, m.viewInertia.vx = 0, m.viewInertia.vy = 0, pe();
  }
  tg();
  function Pt() {
    return t === "stickers" ? h.stickers : h.shots;
  }
  function Ue() {
    const n = h.painting || (h.painting = ea(null));
    return Array.isArray(n.groups) || (n.groups = []), n.groups;
  }
  function Wt(n = "paint") {
    var d, p;
    const o = Array.isArray((p = (d = h.painting) == null ? void 0 : d[n]) == null ? void 0 : p.strokes) ? h.painting[n].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }
    return s;
  }
  function gr() {
    return Wt("paint");
  }
  function rn(n, o) {
    const s = String(o || "").trim();
    return s ? `${n === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function nn(n) {
    const o = String(n || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Ct(n) {
    const o = String(n || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function Si(n, o = null) {
    const s = String(n || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function ns() {
    var o;
    let n = -1;
    for (const s of Array.isArray(h.stickers) ? h.stickers : [])
      n = Math.max(n, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Ue())
      n = Math.max(n, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = h.painting) == null ? void 0 : o.raster_objects) ? h.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (n = Math.max(n, Number((s == null ? void 0 : s.z_index) || 0)));
    return n + 1;
  }
  function ul(n, o = null) {
    const s = String(n || "").trim();
    if (!s) return null;
    const l = Ue();
    let d = l.find((p) => String((p == null ? void 0 : p.actionGroupId) || "") === s);
    return d ? o != null && (d.z_index = Math.max(0, Number(o || 0))) : (d = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? ns() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(d)), d;
  }
  function Ph(n) {
    if (!(n != null && n.centerUv)) return [];
    const o = Number(n.centerUv.u || 0), s = Number(n.centerUv.v || 0), l = Number(n.halfW || 0), d = Number(n.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: W(s - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: W(s - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: W(s + d, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: W(s + d, 0, 1)
      }
    ];
  }
  function Ch() {
    const n = new Set(gr()), s = Ue().filter((l) => n.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return n.forEach((l) => {
      s.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: ns(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, d) => Number((l == null ? void 0 : l.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), h.painting.groups = s, s;
  }
  function Ah(n, o, s) {
    var B;
    const l = (K) => (Number(K || 0) % 1 + 1) % 1, d = [];
    for (const K of s) {
      const ee = K == null ? void 0 : K.geometry, ye = (ee == null ? void 0 : ee.geometryKind) === "lasso_fill" ? ee == null ? void 0 : ee.points : (ee == null ? void 0 : ee.processedPoints) || (ee == null ? void 0 : ee.rawPoints) || (ee == null ? void 0 : ee.points) || [];
      Array.isArray(ye) && d.push(...ye);
    }
    if (!d.length) return null;
    const p = l(((B = d[0]) == null ? void 0 : B.u) || 0);
    let _ = 0, b = 0;
    d.forEach((K) => {
      const ee = l((K == null ? void 0 : K.u) || 0);
      _ += p + pr(ee, p), b += Number((K == null ? void 0 : K.v) || 0);
    });
    const x = (_ / d.length % 1 + 1) % 1;
    let S = 1 / 0, k = -1 / 0, N = 1 / 0, L = -1 / 0;
    d.forEach((K) => {
      const ee = l((K == null ? void 0 : K.u) || 0), ye = pr(ee, x);
      S = Math.min(S, ye), k = Math.max(k, ye);
      const ie = Number((K == null ? void 0 : K.v) || 0);
      N = Math.min(N, ie), L = Math.max(L, ie);
    });
    const F = s.reduce((K, ee) => {
      const ye = ln(String((ee == null ? void 0 : ee.toolKind) || "pen")), ie = rr[ye] || rr[Br], be = Math.max(1, Number((ee == null ? void 0 : ee.size) || 10)) * Math.max(0.1, Number((ie == null ? void 0 : ie.sizeScale) ?? 1));
      return Math.max(K, be);
    }, 0), X = Math.max(35e-4, F / 2048);
    return {
      centerUv: { u: ((x + (S + k) * 0.5) % 1 + 1) % 1, v: W((N + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (k - S) * 0.5 + X,
      halfH: (L - N) * 0.5 + X,
      uvPad: X
    };
  }
  function an(n, o, s) {
    const l = String(n || "").trim();
    if (!l) return null;
    const d = Ue().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === l);
    if (!d) return null;
    const p = s || vr(l, o);
    return d.frame = Ah(l, o, p), d.frame;
  }
  function Hn() {
    var l;
    const n = (Array.isArray(h.stickers) ? h.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), o = Ch().map((d) => ({
      type: "strokeGroup",
      id: String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || ""),
      actionGroupId: String((d == null ? void 0 : d.actionGroupId) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), s = (Array.isArray((l = h.painting) == null ? void 0 : l.raster_objects) ? h.painting.raster_objects : []).filter((d) => String((d == null ? void 0 : d.layerKind) || "paint") === "paint").map((d) => ({
      type: "rasterObject",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    }));
    return [...n, ...o, ...s].sort((d, p) => Number(d.z_index || 0) - Number(p.z_index || 0));
  }
  function is(n = !0) {
    var s, l, d, p, _, b;
    const o = Hn().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (n) {
      const x = String(((l = (s = m.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((p = (d = m.interaction) == null ? void 0 : d.stroke) == null ? void 0 : p.layerKind) || "").trim(), k = String(((b = (_ = m.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      x && S === "paint" && k !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function as(n = !0) {
    var b, x, S, k, N, L;
    const o = Hn();
    if (!n) return o;
    const s = String(((x = (b = m.interaction) == null ? void 0 : b.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), l = String(((k = (S = m.interaction) == null ? void 0 : S.stroke) == null ? void 0 : k.layerKind) || "").trim(), d = String(((L = (N = m.interaction) == null ? void 0 : N.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!s || l !== "paint" || d === "eraser" || o.some((F) => F.type === "strokeGroup" && String(F.actionGroupId || "") === s))
      return o;
    const p = it();
    let _ = o.reduce((F, X) => Math.max(F, Number((X == null ? void 0 : X.z_index) || 0)), -1) + 1;
    return p && Mt(p) && String(p.actionGroupId || "") === s && (_ = Number(p.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((F, X) => Number((F == null ? void 0 : F.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0));
  }
  function Ih() {
    return Ue().slice().sort((n, o) => Number((n == null ? void 0 : n.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((n) => jn(rn("paint", (n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || ""))).filter(Boolean);
  }
  function Th() {
    var n;
    return (Array.isArray((n = h.painting) == null ? void 0 : n.raster_objects) ? h.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => zn(nn((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function fl(n = m.interaction) {
    const o = String((n == null ? void 0 : n.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(n == null ? void 0 : n.strokeSnapshots) && n.strokeSnapshots.length > 0, l = Array.isArray(n == null ? void 0 : n.rasterSnapshots) && n.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Eh() {
    var o, s, l, d;
    let n = null;
    try {
      const p = is(), _ = ((d = (l = (s = (o = m.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, p)) == null ? void 0 : l.displayPaint) == null ? void 0 : d.canvas) || null;
      _ && (n = {
        source: _,
        revision: `${Xn()}:${ma()}`
      });
    } catch {
      n = null;
    }
    return n;
  }
  function ma() {
    var d, p, _, b, x, S, k;
    const n = m.interaction, o = String((n == null ? void 0 : n.kind) || "");
    if (!fl(n)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((d = n == null ? void 0 : n.stroke) == null ? void 0 : d.geometry) || null, L = String(((p = n == null ? void 0 : n.stroke) == null ? void 0 : p.layerKind) || ""), F = ((_ = N == null ? void 0 : N.rawPoints) == null ? void 0 : _.length) ?? ((b = N == null ? void 0 : N.points) == null ? void 0 : b.length) ?? 0, X = String((n == null ? void 0 : n._livePreviewToken) || "");
      return `_${L || "paint"}_${o}_live${X}_${F}_${m.livePaintInteractionRevision}`;
    }
    const s = String(((x = n == null ? void 0 : n.item) == null ? void 0 : x.actionGroupId) || ""), l = String(((S = n == null ? void 0 : n.item) == null ? void 0 : S.rasterObjectId) || ((k = n == null ? void 0 : n.item) == null ? void 0 : k.id) || "");
    return `_${o}_${s || l || "active"}_${m.livePaintInteractionRevision}`;
  }
  function os() {
    const n = Array.isArray(h.shots) ? h.shots : [], o = Array.isArray(h.stickers) ? h.stickers : [];
    return [...n, ...o];
  }
  function cr(n) {
    return !!n && Array.isArray(h.shots) && h.shots.includes(n);
  }
  function mt(n) {
    return !!n && Array.isArray(h.stickers) && h.stickers.includes(n);
  }
  function er() {
    var n;
    return Array.isArray((n = h.painting) == null ? void 0 : n.raster_objects) ? h.painting.raster_objects : [];
  }
  function zn(n) {
    const o = Ct(n);
    if (!o) return null;
    const s = er().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: nn(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Vt(n) {
    if (!n || typeof n != "object" || String(n.type || "") !== "rasterObject") return !1;
    const o = Ct(n.rasterObjectId || n.id || "");
    return !!o && !!zn(nn(o));
  }
  function jn(n) {
    const o = Si(n), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const l = Ue().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === s || String((d == null ? void 0 : d.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: rn("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Mt(n) {
    if (!n || typeof n != "object" || String(n.type || "") !== "strokeGroup") return !1;
    const o = String(n.actionGroupId || "").trim(), s = String(n.layerKind || "paint").trim() || "paint";
    return !!o && !!jn(rn(s, o));
  }
  function vr(n, o = null) {
    const s = Si(n, o), l = String(s.actionGroupId || "").trim();
    return l ? Qn(s.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === l) : [];
  }
  function Dh(n, o = "paint") {
    var p, _, b;
    const s = String(n || "").trim(), d = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${m.mode}:${Ai()}`;
    if (m.mode === "frame") {
      const x = Ge(), S = String((x == null ? void 0 : x.id) || ""), k = x ? zt(x) : null;
      return `${d}:frame:${S}:${Math.round(Number((k == null ? void 0 : k.x) || 0))}:${Math.round(Number((k == null ? void 0 : k.y) || 0))}:${Math.round(Number((k == null ? void 0 : k.w) || 0))}:${Math.round(Number((k == null ? void 0 : k.h) || 0))}:${Math.round(Number(((p = m.frameView) == null ? void 0 : p.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = m.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = m.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function ya(n, o, s) {
    return !n || typeof n != "object" ? n : {
      ...n,
      u: ((Number(n.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: W(Number(n.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function pr(n, o) {
    let s = Number(n || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function ss(n, o = null, s = null) {
    var S;
    const l = Si(n, o), d = Array.isArray(s) ? s : vr(l.actionGroupId, l.layerKind), p = [];
    if (d.forEach((k) => {
      const N = (k == null ? void 0 : k.geometry) || null, L = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(L) && p.push(...L);
    }), !p.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((S = p[0]) == null ? void 0 : S.u) || 0);
    let b = 0, x = 0;
    return p.forEach((k) => {
      b += _ + pr(Number((k == null ? void 0 : k.u) || 0), _), x += Number((k == null ? void 0 : k.v) || 0);
    }), {
      u: (b / p.length % 1 + 1) % 1,
      v: W(x / p.length, 0, 1)
    };
  }
  function ba(n, o, s = 1, l = 0) {
    if (!n || typeof n != "object") return n;
    const d = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), _ = pr(Number(n.u || 0), d), b = Number(n.v || 0) - p, x = Number(l || 0) * At, S = Math.cos(x), k = Math.sin(x), N = Math.max(0.02, Number(s || 1)), L = (_ * S - b * k) * N, F = (_ * k + b * S) * N;
    return {
      ...n,
      u: ((d + L) % 1 + 1) % 1,
      v: W(p + F, 0, 1)
    };
  }
  function dl(n, o, s, l = null, d = null, p = null) {
    const _ = Si(n, d), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = Qn(_.layerKind), S = Array.isArray(l) ? new Map(l.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let k = !1;
    if (x.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== b) return;
      const L = (S == null ? void 0 : S.get(String((N == null ? void 0 : N.id) || ""))) || N, F = N == null ? void 0 : N.geometry, X = L == null ? void 0 : L.geometry;
      !F || !X || (Array.isArray(X.points) && (F.points = X.points.map((B) => ya(B, o, s)), k = !0), Array.isArray(X.rawPoints) && (F.rawPoints = X.rawPoints.map((B) => ya(B, o, s)), k = !0), Array.isArray(X.processedPoints) && (F.processedPoints = X.processedPoints.map((B) => ya(B, o, s)), k = !0));
    }), k && p) {
      const N = Ue().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === b);
      N && (N.frame = null);
    }
    return k;
  }
  function hl(n, o = 1, s = 0, l = null, d = null, p = null) {
    const _ = Si(n, d), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = Qn(_.layerKind), S = Array.isArray(l) ? l : vr(b, _.layerKind), k = Array.isArray(S) ? new Map(S.map((F) => [String((F == null ? void 0 : F.id) || ""), F])) : null, N = (p == null ? void 0 : p.centerUv) ?? ss(b, _.layerKind, S);
    let L = !1;
    if (x.forEach((F) => {
      if (String((F == null ? void 0 : F.actionGroupId) || "").trim() !== b) return;
      const X = (k == null ? void 0 : k.get(String((F == null ? void 0 : F.id) || ""))) || F, B = F == null ? void 0 : F.geometry, K = X == null ? void 0 : X.geometry;
      !B || !K || (Array.isArray(K.points) && (B.points = K.points.map((ee) => ba(ee, N, o, s)), L = !0), Array.isArray(K.rawPoints) && (B.rawPoints = K.rawPoints.map((ee) => ba(ee, N, o, s)), L = !0), Array.isArray(K.processedPoints) && (B.processedPoints = K.processedPoints.map((ee) => ba(ee, N, o, s)), L = !0));
    }), L && p) {
      const F = Ue().find((X) => String((X == null ? void 0 : X.actionGroupId) || "") === b);
      F && (F.frame = null);
    }
    return L;
  }
  function gl(n, o, s, l = null) {
    const d = Ct(n);
    if (!d) return !1;
    const p = er().find((k) => String((k == null ? void 0 : k.id) || "").trim() === d);
    if (!p) return !1;
    const _ = l && typeof l == "object" ? l : p, b = (_ == null ? void 0 : _.transform) || {}, x = Number(b.du || 0) + Number(o || 0), S = W(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.du = x, p.transform.dv = S, !0;
  }
  function Lh(n, o = 1, s = null) {
    const l = Ct(n);
    if (!l) return !1;
    const d = er().find((S) => String((S == null ? void 0 : S.id) || "").trim() === l);
    if (!d) return !1;
    const p = s && typeof s == "object" ? s : d, _ = (p == null ? void 0 : p.transform) || {}, b = Math.max(0.01, Number(_.scale || 1)), x = W(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return d.transform || (d.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), d.transform.scale = x, !0;
  }
  function it() {
    const n = String(m.selectedId || "");
    if (!n) return null;
    const o = jn(n);
    if (o) return o;
    const s = zn(n);
    return s || (t === "cutout" ? os().find((l) => String((l == null ? void 0 : l.id) || "") === n) || null : Pt().find((l) => String((l == null ? void 0 : l.id) || "") === n) || null);
  }
  function _r() {
    const n = Array.isArray(m.selectedIds) && m.selectedIds.length ? m.selectedIds : m.selectedId ? [m.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return n.forEach((l) => {
      const d = String(l || "").trim();
      if (!d || s.has(d)) return;
      s.add(d);
      const p = d === String(m.selectedId || "") ? it() : jn(d) || zn(d) || (t === "cutout" ? os().find((_) => String((_ == null ? void 0 : _.id) || "") === d) : Pt().find((_) => String((_ == null ? void 0 : _.id) || "") === d));
      p && o.push(p);
    }), o;
  }
  function cs(n = null) {
    const o = Array.isArray(n) ? n : _r();
    if (!o || o.length < 2) return null;
    const s = o.map((S) => Et(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((S) => S.corners.map((k) => Number((k == null ? void 0 : k.x) || 0))), d = s.flatMap((S) => S.corners.map((k) => Number((k == null ? void 0 : k.y) || 0))), p = Math.min(...l), _ = Math.max(...l), b = Math.min(...d), x = Math.max(...d);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (p + _) * 0.5, y: (b + x) * 0.5 },
      corners: [
        { x: p, y: b },
        { x: _, y: b },
        { x: _, y: x },
        { x: p, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (p + _) * 0.5, y: b, a: { x: p, y: b }, b: { x: _, y: b } },
        { edge: "right", x: _, y: (b + x) * 0.5, a: { x: _, y: b }, b: { x: _, y: x } },
        { edge: "bottom", x: (p + _) * 0.5, y: x, a: { x: _, y: x }, b: { x: p, y: x } },
        { edge: "left", x: p, y: (b + x) * 0.5, a: { x: p, y: x }, b: { x: p, y: b } }
      ],
      rotateStemBase: { x: (p + _) * 0.5, y: b },
      rotateHandle: { x: (p + _) * 0.5, y: b - 30 }
    };
  }
  function Rh(n) {
    const o = String((n == null ? void 0 : n.id) || "").trim();
    return !!o && Array.isArray(m.selectedIds) && m.selectedIds.includes(o);
  }
  function va() {
    const n = it();
    return n ? Mt(n) || Vt(n) ? "stroke" : cr(n) ? "frame" : "image" : null;
  }
  function on(n) {
    if (!n || typeof n != "object") return !1;
    if (Mt(n)) {
      const o = String(n.actionGroupId || n.id || "").trim(), s = Ue().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Vt(n)) {
      const o = Ct(n.rasterObjectId || n.id || ""), s = er().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return n.locked === !0;
  }
  function ls(n = null) {
    const o = Array.isArray(n) ? n : _r();
    return o.length > 0 && o.every((s) => on(s));
  }
  function Oh(n, o) {
    const s = o === !0;
    if (!n || typeof n != "object") return !1;
    if (Mt(n)) {
      const l = String(n.actionGroupId || n.id || "").trim(), d = Ue().find((p) => String((p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || "").trim() === l);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    if (Vt(n)) {
      const l = Ct(n.rasterObjectId || n.id || ""), d = er().find((p) => String((p == null ? void 0 : p.id) || "").trim() === l);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    return n.locked === s ? !1 : (n.locked = s, !0);
  }
  function Fh() {
    if (i) return;
    const n = _r();
    if (!n.length) return;
    const o = !ls(n);
    let s = !1;
    n.forEach((l) => {
      Oh(l, o) && (s = !0);
    }), s && (st(), yt(), $e(), pe());
  }
  function bn(n) {
    m.selectedId = (n == null ? void 0 : n.id) || null, m.selectedIds = n != null && n.id ? [n.id] : [], n && mt(n) ? h.active.selected_sticker_id = n.id || null : h.active.selected_sticker_id = null, n && cr(n) ? h.active.selected_shot_id = n.id || null : n ? cr(n) || (h.active.selected_shot_id = h.active.selected_shot_id) : h.active.selected_shot_id = null;
  }
  function Vh(n, o = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(n) ? n : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }), m.selectedIds = s;
    const d = String(o || "").trim();
    m.selectedId = d && s.includes(d) ? d : s[s.length - 1] || null;
    const p = it();
    h.active.selected_sticker_id = p && mt(p) && p.id || null, p && cr(p) ? h.active.selected_shot_id = p.id || null : s.length || (h.active.selected_shot_id = null);
  }
  function pl() {
    const n = (Array.isArray(h.shots) ? h.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(h.stickers) ? h.stickers : []).map((s, l) => {
      var p, _;
      const d = Tt(s) ? String(s.id || Mn) : String(((_ = (p = h.assets) == null ? void 0 : p[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: d
      };
    });
    return [...n, ...o];
  }
  function Hh(n) {
    return n === "frame" ? Rt.camera : n === "stroke" ? Rt.paintbrush_vertical_tool : Rt.image;
  }
  function ml(n) {
    return !n || !n.item ? cc(String((n == null ? void 0 : n.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${Hh(n.kind)}</span><span>${cc(String(n.label || ""))}</span>`;
  }
  function yl() {
    return ns();
  }
  function Tt(n) {
    return !n || typeof n != "object" ? !1 : String(n.id || "") === Mn || String(n.source_kind || "") === nc;
  }
  function $n(n) {
    return !!(n && typeof n == "object" && n.visible === !1);
  }
  function zh(n) {
    return Tt(n) && $n(n) ? Xd : 1;
  }
  function jh() {
    return m.primaryTool === "mask" ? m.maskTool : m.paintTool;
  }
  function $h() {
    return String(jh() || "") === "lasso_fill";
  }
  function Bh() {
    if (i) return;
    const n = it();
    !n || !Tt(n) || (n.visible = $n(n), Dt(), st(), yt(), ze(), $e(), pe());
  }
  function Uh() {
    if (i || t !== "stickers") return;
    const n = it();
    if (!n || !Tt(n)) return;
    const o = n.initial_pose;
    if (!o || typeof o != "object") return;
    n.yaw_deg = Number(o.yaw_deg ?? n.yaw_deg ?? 0), n.pitch_deg = Number(o.pitch_deg ?? n.pitch_deg ?? 0), n.hFOV_deg = Number(o.hFOV_deg ?? n.hFOV_deg ?? 30);
    const s = ds(ic, () => {
      pe();
    });
    s && (s.complete || s.naturalWidth || s.width) ? n.vFOV_deg = vn(
      Number(o.hFOV_deg ?? n.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : n.vFOV_deg = Number(o.vFOV_deg ?? n.vFOV_deg ?? 30), n.rot_deg = Number(o.rot_deg ?? n.rot_deg ?? 0), st(), yt(), ze(), $e(), pe();
  }
  function Gh(n) {
    if (!n || !Tt(n)) return null;
    const o = n.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? n.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? n.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? n.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? n.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? n.rot_deg ?? 0)
    }, l = ds(ic, () => {
      pe();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = vn(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function Kh() {
    const n = it();
    if (!n || !Tt(n)) return !1;
    const o = Gh(n);
    if (!o) return !1;
    const s = (l, d) => Math.abs(Number(l || 0) - Number(d || 0)) <= 1e-4;
    return !(s(n.yaw_deg, o.yaw_deg) && s(n.pitch_deg, o.pitch_deg) && s(n.hFOV_deg, o.hFOV_deg) && s(n.vFOV_deg, o.vFOV_deg) && s(n.rot_deg, o.rot_deg));
  }
  function us(n) {
    var s;
    const o = ra(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[n]) ? o.ui[n] : Array.isArray(o == null ? void 0 : o[n]) ? o[n] : [];
  }
  function bl(n) {
    const o = ra(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, n) ? o.ui[n] : o && Object.prototype.hasOwnProperty.call(o, n) ? o[n] : null;
  }
  function vl() {
    const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Io(n) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Wh() {
    const { metaKey: n } = vl(), o = bl(n);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function _a(n) {
    var o;
    return n ? n instanceof HTMLVideoElement ? [
      String(n.currentSrc || n.src || ""),
      Number(n.videoWidth || 0),
      Number(n.videoHeight || 0),
      String(((o = n.dataset) == null ? void 0 : o.panoFrameIdx) || "0")
    ].join("|") : n instanceof HTMLCanvasElement ? [
      "canvas",
      Number(n.width || 0),
      Number(n.height || 0),
      String(n.__panoFrameIdx || 0)
    ].join("|") : [
      String(n.currentSrc || n.src || ""),
      Number(n.naturalWidth || n.width || 0),
      Number(n.naturalHeight || n.height || 0)
    ].join("|") : "none";
  }
  function _l(n) {
    const o = Math.max(0, Math.floor(Number(n || 0))), s = Math.floor(o / 60), l = o % 60;
    return `${s}:${String(l).padStart(2, "0")}`;
  }
  function Ni(n = {}) {
    const o = Number(n.currentTime ?? R.editorTime ?? 0), s = Number(n.duration ?? A.videoTransport.duration ?? 0);
    Object.assign(A.videoTransport, {
      ready: !!n.ready,
      playing: !!n.playing,
      visible: !!n.visible,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: _l(o),
      durationLabel: _l(s),
      frameCount: Math.max(0, Number(n.frameCount ?? A.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(n.fps ?? A.videoTransport.fps ?? 24)),
      mode: String(n.mode || R.mode || "playback")
    });
  }
  function Bn() {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return !1;
    const n = Number(G.videoWidth || 0), o = Number(G.videoHeight || 0);
    ($.width !== n || $.height !== o) && ($.width = n, $.height = o);
    const s = $.getContext("2d");
    return s ? (s.clearRect(0, 0, n, o), s.drawImage(G, 0, 0, n, o), $.__panoFrameIdx = Number($.__panoFrameIdx || 0) + 1, R.presentedTime = Number(R.editorTime || G.currentTime || 0), !0) : !1;
  }
  function Yh() {
    return R.mode === "scrub" && Number($.width || 0) > 0 && Number($.height || 0) > 0 && Number($.__panoFrameIdx || 0) > 0 ? $ : G instanceof HTMLVideoElement && Number(G.videoWidth || 0) > 0 && Number(G.videoHeight || 0) > 0 && Number(G.readyState || 0) >= 2 ? G : null;
  }
  function fs(n) {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(n || 0));
    if (R.requestedTime = o, !R.seeking && !(Math.abs(Number(G.currentTime || 0) - o) <= 5e-4)) {
      R.seeking = !0;
      try {
        G.currentTime = o;
      } catch {
        R.seeking = !1;
      }
    }
  }
  function Un() {
    if (!(G instanceof HTMLVideoElement)) return null;
    const { videoKey: n } = vl(), o = us(n)[0] || null, s = o && typeof o == "object" ? da(o) : Fn(o), l = Wh(), d = Math.max(0, Number((l == null ? void 0 : l.frames) || 0)), p = Math.max(1, Number((l == null ? void 0 : l.fps) || 24)), _ = Number((l == null ? void 0 : l.duration) || (d > 0 ? d / p : 0));
    return s && G.dataset.panoSrc !== s ? (G.pause(), G.dataset.panoSrc = s, G.dataset.panoFrameIdx = "0", G.loop = !0, G.src = s, G.load()) : !s && G.getAttribute("src") && (G.pause(), G.removeAttribute("src"), G.load()), Ni({
      ready: !!s,
      playing: !G.paused && !G.ended,
      visible: !!s && m.primaryTool !== "paint" && m.primaryTool !== "mask",
      currentTime: R.editorTime,
      duration: _,
      frameCount: d,
      fps: p,
      mode: R.mode
    }), s || null;
  }
  function qh(n, o = null) {
    var s;
    if (n && typeof n == "object" && !Array.isArray(n)) return n;
    if (Array.isArray(n) && n.length > 0) {
      const l = n[0];
      if (l && typeof l == "object" && !Array.isArray(l)) return l;
    }
    if (Array.isArray(o) && o.length > 0) {
      const l = (s = o[0]) == null ? void 0 : s.parsed_state;
      if (l && typeof l == "object" && !Array.isArray(l))
        return {
          yaw_deg: Number(l.yaw_deg || 0),
          pitch_deg: Number(l.pitch_deg || 0),
          hFOV_deg: Number(l.hFOV_deg || 30),
          rot_deg: Number(l.roll_deg || 0)
        };
    }
    return null;
  }
  function ds(n, o = null) {
    const s = us(n), l = Array.isArray(s) && s.length ? s[0] : null, d = Fn(l);
    if (!d) return null;
    const p = `__ui__${n}`, _ = H.get(p);
    if (_ && _.__panoSrc === d) return _;
    const b = new Image();
    return b.__panoSrc = d, b.onload = () => {
      typeof o == "function" ? o(b) : pe();
    }, b.src = d, H.set(p, b), b;
  }
  function xl(n = null) {
    const o = Rf(e, ["sticker_image"], n, "sticker_image_exact");
    return o || ds(ic, n);
  }
  function wl(n) {
    const o = String(n || "");
    let s = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      s ^= o.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function vn(n, o, s) {
    const l = Math.max(1, Number(o || 1)), d = Math.max(1, Number(s || 1)), p = W(Number(n || 30), 0.1, 179) * At, _ = 2 * Math.atan(Math.tan(p * 0.5) * (d / l));
    return W(_ * hn, 0.1, 179);
  }
  function Xh(n) {
    const o = String(n || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let d = null;
      if (typeof l == "number" && Number.isInteger(l) ? d = l : typeof l == "string" && /^\d+$/.test(l) && (d = Number.parseInt(l, 10)), d !== 1) return null;
      const p = s.pose;
      if (!p || typeof p != "object") return null;
      const _ = Number(p.yaw_deg), b = Number(p.pitch_deg), x = Number(p.roll_deg), S = Number(p.hFOV_deg);
      if (![_, b, x, S].every((F) => Number.isFinite(F))) return null;
      let k = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(k, -0) && (k = 0);
      const N = {
        yaw_deg: k,
        pitch_deg: W(b, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: W(S, 0.1, 179)
      }, L = Number(s.source_aspect);
      return Number.isFinite(L) && L > 0 && (N.source_aspect = L), N;
    } catch {
      return null;
    }
  }
  function Sl(n) {
    const o = Number(n == null ? void 0 : n.yaw_deg), s = Number(n == null ? void 0 : n.pitch_deg), l = Number((n == null ? void 0 : n.roll_deg) ?? (n == null ? void 0 : n.rot_deg)), d = Number(n == null ? void 0 : n.hFOV_deg), p = Ui(n);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: p
    };
  }
  function Zh(n) {
    var b;
    if (!n || typeof n != "object") return Sl(null);
    const o = Number(n == null ? void 0 : n.yaw_deg), s = Number(n == null ? void 0 : n.pitch_deg), l = Number((n == null ? void 0 : n.roll_deg) ?? (n == null ? void 0 : n.rot_deg)), d = Number(n == null ? void 0 : n.hFOV_deg), p = Number(n == null ? void 0 : n.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(d) && Number.isFinite(p)) {
      const x = W(d, 0.1, 179) * At, S = W(p, 0.1, 179) * At, k = Math.tan(S * 0.5);
      if (Math.abs(k) > 1e-6) {
        const N = Math.tan(x * 0.5) / k;
        Number.isFinite(N) && N > 0 && (_ = N);
      }
    }
    if (n != null && n.asset_id && ((b = h == null ? void 0 : h.assets) != null && b[n.asset_id])) {
      const x = h.assets[n.asset_id], S = Number((x == null ? void 0 : x.w) || 0), k = Number((x == null ? void 0 : x.h) || 0);
      S > 0 && k > 0 && (_ = S / k);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function Jh(n) {
    var l, d, p, _, b;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(n)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = Sh(e.graph, s), { originId: S, originSlot: k } = Nh(x), N = ra(S), L = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (l = N == null ? void 0 : N.data) == null ? void 0 : l.output,
        (d = N == null ? void 0 : N.data) == null ? void 0 : d.result,
        (p = N == null ? void 0 : N.ui) == null ? void 0 : p.output,
        (_ = N == null ? void 0 : N.ui) == null ? void 0 : _.result
      ];
      for (const F of L) {
        if (!Array.isArray(F)) continue;
        const X = Number(k || 0), B = F[X];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((b = yr(e, n)) == null ? void 0 : b.value) || "");
  }
  function Qh(n, o, s) {
    const l = n && typeof n == "object" ? {
      yaw_deg: Number(n.yaw_deg || 0),
      pitch_deg: Number(n.pitch_deg || 0),
      roll_deg: Number(n.rot_deg ?? n.roll_deg ?? 0),
      hFOV_deg: Number(n.hFOV_deg || 30)
    } : Xh(o);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: vn(l.hFOV_deg, _, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const d = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), p = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(m.viewYaw || 0),
      pitch_deg: Number(m.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: vn(30, d, p),
      rot_deg: 0
    };
  }
  function Nl(n = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((F) => String((F == null ? void 0 : F.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, l = xl(() => {
      var F;
      (F = e.__panoExternalStickerSync) == null || F.call(e, "image-loaded");
    }), d = qh(bl("pano_sticker_input_pose"), null), p = Jh("sticker_state"), _ = wl(d && typeof d == "object" ? JSON.stringify(d) : p), b = Array.isArray(h.stickers) ? h.stickers : h.stickers = [], x = b.findIndex((F) => String((F == null ? void 0 : F.id) || "") === Mn);
    if (s == null) {
      x >= 0 && (b.splice(x, 1), m.selectedId === Mn && (m.selectedId = null, m.selectedIds = [], h.active.selected_sticker_id = null), yt(), ze(), $e(), pe());
      return;
    }
    const S = b.reduce((F, X) => Math.max(F, Number((X == null ? void 0 : X.z_index) || 0)), -1);
    let k = x >= 0 ? b[x] : null;
    const N = !k || Number(k.source_link_id ?? -1) !== Number(s) || String(k.source_state_hash || "") !== _;
    k || (k = {
      id: Mn,
      source_kind: nc
    }, b.push(k)), k.id = Mn, k.source_kind = nc, k.source_link_id = Number(s), k.source_state_hash = _, k.visible = k.visible !== !1;
    let L = !1;
    if (N) {
      const F = Qh(d, p, l);
      Object.assign(k, F, {
        initial_pose: { ...F },
        visible: !0,
        z_index: S + 1
      }), L = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const F = vn(
        Number(k.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(k.vFOV_deg || 0) - F) > 1e-6 && (k.vFOV_deg = F, L = !0);
    }
    L && (yt(), ze(), $e()), pe();
  }
  function Gn(n = {}) {
    const s = n.preservePanelValues !== !1 ? it() : null;
    s && (m.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Hi(s)
    }), m.selectedId = null, m.selectedIds = [], m.cutoutAspectOpen = !1, h.active.selected_sticker_id = null, h.active.selected_shot_id = null;
  }
  function eg() {
    if (t !== "cutout") return;
    const n = Ge();
    n && bn(n);
  }
  function hs() {
    if (t !== "cutout") return;
    const n = Ge();
    Vi(A.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: n ? "Look At Frame" : "Add Frame",
      tip: n ? "Look at frame" : "Add frame",
      icon: n ? Rt.camera : Rt.plus_circle
    });
  }
  function xa() {
    const n = !!Ge();
    m.mode === "frame" && !n && (m.mode = "pano"), m.outputPreviewRect = null, A.viewButtons.forEach((o) => {
      const s = o.key === m.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !n : !1;
    }), A.outputPreviewToggle.visible = t === "cutout" && !!Ge(), t === "cutout" && A.cameraPreview && (A.cameraPreview.visible = !0, A.cameraPreview.expanded = !!m.outputPreviewExpanded, A.cameraPreview.settled = A.cameraPreview.settled === !0 && z.pendingStableLayoutFrames <= 0 && z.hasPresentedFrame), Zl() ? ht(m.pointerPos) : I.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function tg() {
    const o = Tl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function gs() {
    const n = Ar(m.viewYaw, m.viewPitch);
    let o = Or(0, 1, 0);
    Math.abs(Nr(n, o)) > 0.999 && (o = Or(0, 0, 1));
    const s = ii(ro(o, n)), l = ii(ro(n, s));
    return { right: s, up: l, fwd: n };
  }
  function Mi(n) {
    const { right: o, up: s, fwd: l } = gs(), d = Nr(n, o), p = Nr(n, s), _ = Nr(n, l);
    if (_ <= 1e-5) return null;
    const b = I.width, x = I.height, S = m.viewFov * At, k = 2 * Math.atan(Math.tan(S / 2) * (x / b)), N = b / 2 / Math.tan(S / 2), L = x / 2 / Math.tan(k / 2);
    return {
      x: b / 2 + d / _ * N,
      y: x / 2 - p / _ * L,
      z: _
    };
  }
  function ps(n, o) {
    const { right: s, up: l, fwd: d } = gs(), p = I.width, _ = I.height, b = m.viewFov * At, x = 2 * Math.atan(Math.tan(b / 2) * (_ / p)), S = (n - p / 2) / (p / 2) * Math.tan(b / 2), k = (_ / 2 - o) / (_ / 2) * Math.tan(x / 2), N = eo(eo(to(s, S), to(l, k)), d);
    return ii(N);
  }
  function sn() {
    const n = I.width, o = I.height, s = 2;
    if (n / Math.max(o, 1) >= s) {
      const b = o, x = b * s;
      return { x: (n - x) * 0.5, y: 0, w: x, h: b };
    }
    const d = n, p = d / s;
    return { x: 0, y: (o - p) * 0.5, w: d, h: p };
  }
  function Ml(n) {
    var _;
    if (n && typeof n == "object" && (Tt(n) || n.external === !0))
      return xl(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const o = String(n && typeof n == "object" ? n.asset_id || n.assetId || "" : n || "");
    if (!o) return null;
    const s = H.get(o);
    if (s) return s;
    const l = (_ = h.assets) == null ? void 0 : _[o], d = mx(l);
    if (!d) return null;
    const p = new Image();
    return p.onload = () => pe(), p.src = d, H.set(o, p), p;
  }
  function kl(n, o = null) {
    const s = String((n == null ? void 0 : n.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Z.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const d = new Image();
    return d.onload = () => {
      typeof o == "function" && o();
    }, d.src = s, Z.set(s, d), d;
  }
  function rg(n) {
    const o = String((n == null ? void 0 : n.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = le.get(o);
    if (s) return s.ready ? s : null;
    const l = kl(n, () => {
      const k = le.get(o);
      k && (k.ready = !1), pe({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const d = Number(l.naturalWidth || l.width || 0), p = Number(l.naturalHeight || l.height || 0);
    if (d < 1 || p < 1) return null;
    const _ = document.createElement("canvas");
    _.width = d, _.height = p;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, d, p), b.drawImage(l, 0, 0, d, p);
    const x = b.getImageData(0, 0, d, p).data, S = { canvas: _, width: d, height: p, alpha: x, ready: !0 };
    return le.set(o, S), S;
  }
  function ng(n, o, s = 1, l = 0) {
    if (!n || typeof n != "object") return n;
    const d = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), _ = pr(Number(n.u || 0), d), b = Number(n.v || 0) - p, x = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * At, k = Math.cos(S), N = Math.sin(S), L = _ / x, F = b / x, X = L * k + F * N, B = -L * N + F * k;
    return {
      ...n,
      u: ((d + X) % 1 + 1) % 1,
      v: p + B
    };
  }
  function ig(n, o) {
    if (!n || !o) return null;
    const s = (n == null ? void 0 : n.bbox) || null;
    if (!s) return null;
    const l = (n == null ? void 0 : n.transform) || {}, d = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, p = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, _ = ng(
      p,
      d,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(x > 1e-6)) return null;
    const S = pr(Number(_.u || 0), Number(s.u0 || 0)) / b, k = (Number(_.v || 0) - Number(s.v0 || 0)) / x;
    if (S < 0 || S > 1 || k < 0 || k > 1) return 0;
    const N = rg(n);
    if (!N) return null;
    const L = W(Math.floor(S * N.width), 0, N.width - 1), F = W(Math.floor(k * N.height), 0, N.height - 1);
    return Number(N.alpha[(F * N.width + L) * 4 + 3] || 0);
  }
  function Pl(n, o, s, l = null) {
    if (!(o != null && o.visible) || !Ur(s, o.corners)) return !1;
    const d = l || wr(s, performance.now()), p = ig(n, d);
    return p === null ? !0 : p > 8;
  }
  function ag() {
    var l, d, p, _, b, x, S, k;
    const n = ((d = (l = m.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, is(!1))) || null, o = Math.max(1, Number(((p = n == null ? void 0 : n.descriptor) == null ? void 0 : p.width) || ((b = (_ = n == null ? void 0 : n.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((x = n == null ? void 0 : n.descriptor) == null ? void 0 : x.height) || ((k = (S = n == null ? void 0 : n.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : k.height) || 1024));
    return { width: o, height: s };
  }
  function og() {
    var F, X, B;
    const n = m.interaction;
    if ((n == null ? void 0 : n.kind) !== "paint_stroke") return null;
    const o = (n == null ? void 0 : n.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = jr(), l = `${ma()}:${s.width}:${s.height}`;
    if (((F = m._activePaintEraserPreviewInfo) == null ? void 0 : F.cacheKey) === l)
      return m._activePaintEraserPreviewInfo.value || null;
    const d = jt(o), p = (d == null ? void 0 : d.geometry) || null;
    if (p && String(p.geometryKind || "") !== "lasso_fill") {
      const K = Array.isArray(p.rawPoints) && p.rawPoints.length ? p.rawPoints : Array.isArray(p.points) ? p.points : [];
      p.processedPoints = Ns(K, d.targetSpace, !0);
    }
    const _ = Ci(s.width, s.height, { readback: !0 });
    if (!jl(_, d, { w: s.width, h: s.height })) return null;
    const b = ((B = (X = _.ctx) == null ? void 0 : X.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!b) return null;
    let x = s.width, S = s.height, k = -1, N = -1;
    for (let K = 0; K < s.height; K += 1)
      for (let ee = 0; ee < s.width; ee += 1)
        b[(K * s.width + ee) * 4 + 3] <= 8 || (ee < x && (x = ee), K < S && (S = K), ee > k && (k = ee), K > N && (N = K));
    if (k < x || N < S)
      return m._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const L = {
      surface: _,
      bounds: { minX: x, minY: S, maxX: k, maxY: N },
      key: `${l}:${x}:${S}:${k}:${N}`
    };
    return m._activePaintEraserPreviewInfo = { cacheKey: l, value: L }, m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function ki() {
    m._activePaintEraserPreviewInfo = null, m._liveEraserPreviewCanvasCache = null;
  }
  function sg(n, o, s) {
    var l, d;
    if (!n) return null;
    if (n.type === "rasterObject" && ((l = n.item) != null && l.bbox)) {
      const p = n.item.bbox, _ = ((d = n.item) == null ? void 0 : d.transform) || {}, b = Number(p.u0 || 0) + Number(_.du || 0), x = Number(p.u1 || 0) + Number(_.du || 0), S = Number(p.v0 || 0) + Number(_.dv || 0), k = Number(p.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(W(S, 0, 1) * s),
        maxY: Math.ceil(W(k, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    if (n.type === "strokeGroup") {
      const p = vr(n.actionGroupId, "paint"), _ = an(n.actionGroupId, "paint", p);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, x = _.centerUv.u + _.halfW, S = _.centerUv.v - _.halfH, k = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(W(S, 0, 1) * s),
        maxY: Math.ceil(W(k, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    return null;
  }
  function cg(n, o, s) {
    if (!n || !o) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], d = l(n), p = l(o);
    return d.some((_) => p.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function lg(n, o, s) {
    var be, Pe, Fe, Se, Y, re, _e;
    if (!n || !o || !((be = s == null ? void 0 : s.surface) != null && be.canvas) || o.type !== "rasterObject") return n;
    const l = Number(n.width || s.surface.canvas.width || 0), d = Number(n.height || s.surface.canvas.height || 0);
    if (l < 1 || d < 1) return n;
    const p = sg(o, l, d);
    if (p && !cg(p, s.bounds, l)) return n;
    const _ = String(((Pe = o.item) == null ? void 0 : Pe.id) || o.id || ""), b = ((Fe = o.item) == null ? void 0 : Fe.transform) || {}, x = `${s.key}:${_}:${l}:${d}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = m._liveEraserPreviewCanvasCache instanceof Map ? m._liveEraserPreviewCanvasCache : m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(x)) return S.get(x);
    const k = W(Math.floor(Number(((Se = s.bounds) == null ? void 0 : Se.minX) || 0)), 0, Math.max(0, l - 1)), N = W(Math.floor(Number(((Y = s.bounds) == null ? void 0 : Y.minY) || 0)), 0, Math.max(0, d - 1)), L = W(Math.ceil(Number(((re = s.bounds) == null ? void 0 : re.maxX) || 0)), k, Math.max(0, l - 1)), F = W(Math.ceil(Number(((_e = s.bounds) == null ? void 0 : _e.maxY) || 0)), N, Math.max(0, d - 1)), X = Math.max(1, L - k + 1), B = Math.max(1, F - N + 1), K = Ci(l, d, { readback: !0 });
    K.ctx.clearRect(0, 0, l, d), K.ctx.drawImage(n, 0, 0);
    const ee = K.ctx.getImageData(k, N, X, B);
    K.ctx.save(), K.ctx.globalCompositeOperation = "destination-out", K.ctx.drawImage(s.surface.canvas, 0, 0), K.ctx.restore();
    const ye = K.ctx.getImageData(k, N, X, B);
    let ie = !1;
    for (let Ne = 0; Ne < X * B; Ne += 1) {
      const je = ee.data[Ne * 4 + 3], Ve = ye.data[Ne * 4 + 3];
      if (je > Ve) {
        ie = !0;
        break;
      }
    }
    return ie ? (S.size > 64 && S.clear(), S.set(x, K.canvas), K.canvas) : (S.set(x, n), n);
  }
  function Cl(n, o = null) {
    const s = Ct((n == null ? void 0 : n.rasterObjectId) || (n == null ? void 0 : n.id) || ""), l = (n == null ? void 0 : n.bbox) || null;
    if (!s || !l) return null;
    const d = kl(n, o);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: p, height: _ } = ag(), b = (n == null ? void 0 : n.transform) || {}, x = [
      s,
      p,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      Ai()
    ].join(":"), S = E.get(x);
    if (S) return S;
    E.size > 64 && E.clear();
    const k = document.createElement("canvas");
    k.width = p, k.height = _;
    const N = k.getContext("2d");
    if (!N) return null;
    const L = Number(l.u0 || 0) * p, F = Number(l.v0 || 0) * _, X = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * p), B = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), K = L + X * 0.5 + Number(b.du || 0) * p, ee = F + B * 0.5 + Number(b.dv || 0) * _, ye = Number(b.rot_deg || 0) * At, ie = Math.max(0.01, Number(b.scale || 1));
    for (const be of [-p, 0, p])
      N.save(), N.translate(K + be, ee), N.rotate(ye), N.scale(ie, ie), N.drawImage(d, -X * 0.5, -B * 0.5, X, B), N.restore();
    return E.set(x, k), k;
  }
  function ug() {
    return rs(h, {
      selectedId: m.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function fg(n) {
    return Zd(
      h,
      (o, s, l) => Ml(l || o),
      { scene: n }
    );
  }
  function Al(n, o, s, l, d = "modal_object_view") {
    if (!n || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const p = Wn(l);
    if (Rl(o, s))
      return _g(
        o,
        s,
        p && m.showPanorama ? l : null,
        `${d}_bg_gl`
      );
    const b = Na(), x = Ma(b), S = m.showObjects ? ka() : Pi([]), N = $i({
      stateRevision: [
        d,
        p ? _a(l) : "no_bg",
        Array.isArray(x) ? x.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        S.length ? S.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: p && m.showPanorama ? l : null,
      backgroundRevision: p ? `${d}:${_a(l)}` : "",
      coverageDeg: Ot(h.coverage),
      scene: b,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), L = he;
    if (!L.syncState(N)) return !1;
    const X = L.renderToTarget(`${d}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return X ? (n.drawImage(X, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function ms(n, o = "sticker.png") {
    const s = new FormData();
    s.append("image", n), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await Jt.fetchApi("/upload/image", { method: "POST", body: s });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const d = await l.json(), p = String((d == null ? void 0 : d.name) || "").trim();
    if (!p)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: p,
      subfolder: String((d == null ? void 0 : d.subfolder) || "panorama_stickers"),
      storage: String((d == null ? void 0 : d.type) || "input"),
      name: String((n == null ? void 0 : n.name) || o)
    };
  }
  async function ys(n, o) {
    const s = await new Promise((b) => n.toBlob(b, "image/png")), l = new FormData();
    l.append("image", s, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const d = await Jt.fetchApi("/upload/image", { method: "POST", body: l });
    if (!d || d.status !== 200) throw new Error(`upload failed (${d == null ? void 0 : d.status})`);
    const p = await d.json(), _ = String((p == null ? void 0 : p.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((p == null ? void 0 : p.subfolder) || "panorama_stickers"),
      storage: String((p == null ? void 0 : p.type) || "input")
    };
  }
  let bs = null, wa = !1;
  function dg() {
    const n = Ef(h.painting);
    if (n.totalPaintCount <= 0 && n.totalMaskCount <= 0) return !1;
    const o = h.painting_layer, s = Xn();
    return !o || typeof o != "object" || String(o.revision || "") !== s || n.totalPaintCount > 0 && !o.paint || n.totalMaskCount > 0 && !o.mask;
  }
  function Il() {
    const n = String(e.id ?? "0"), o = Ja.get(n);
    if (wa && o) return o;
    const s = (async () => {
      var p, _, b, x, S, k, N, L, F, X, B, K;
      const l = Xn(), d = Ef(h.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        h.painting_layer !== null && (h.painting_layer = null, bs = l, mr());
        return;
      }
      if (bs !== l && !wa) {
        wa = !0;
        try {
          Ia();
          const ee = is(!1), ye = ((_ = (p = m.paintEngine) == null ? void 0 : p.getErpTarget) == null ? void 0 : _.call(p, ee)) || null, ie = ((b = ye == null ? void 0 : ye.displayPaint) == null ? void 0 : b.canvas) || null, be = ((x = ye == null ? void 0 : ye.committedMask) == null ? void 0 : x.canvas) || null, Pe = Math.max(1, Number(((S = ye == null ? void 0 : ye.descriptor) == null ? void 0 : S.width) || (ie == null ? void 0 : ie.width) || (be == null ? void 0 : be.width) || 2048)), Fe = Math.max(1, Number(((k = ye == null ? void 0 : ye.descriptor) == null ? void 0 : k.height) || (ie == null ? void 0 : ie.height) || (be == null ? void 0 : be.height) || 1024));
          (!ie && d.totalPaintCount > 0 || !be && d.totalMaskCount > 0) && ((!m._paintLayerSyncBlankSurface || Number(((N = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Pe || Number(((L = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Fe) && (m._paintLayerSyncBlankSurface = Ci(Pe, Fe)), m._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Pe, Fe));
          const Se = ie || d.totalPaintCount > 0 && ((F = m._paintLayerSyncBlankSurface) == null ? void 0 : F.canvas) || null, Y = be || d.totalMaskCount > 0 && ((X = m._paintLayerSyncBlankSurface) == null ? void 0 : X.canvas) || null;
          if (!Se && !Y) return;
          let re = null, _e = null;
          const Ne = [];
          if (d.totalPaintCount > 0) {
            re = await ys(Se, `pano_paint_${n}.png`);
            for (const je of ee) {
              const Ve = String(je || "").trim();
              if (!Ve) continue;
              const Be = ((K = (B = m.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : K.call(B, Ve)) || null;
              if (!Be) continue;
              const Ye = Ve.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ke = await ys(Be, `pano_group_${n}_${Ye}.png`);
              Ke && Ne.push({
                id: Ve,
                actionGroupId: Ve,
                image: Ke
              });
            }
          }
          d.totalMaskCount > 0 && (_e = await ys(Y, `pano_mask_${n}.png`)), l === Xn() && (h.painting_layer = {
            paint: re,
            mask: _e,
            groups: Ne,
            revision: l
          }, bs = l, mr());
        } catch (ee) {
          throw ee;
        } finally {
          wa = !1;
        }
      }
    })();
    return Ja.set(n, s), s.finally(() => {
      Ja.get(n) === s && Ja.delete(n);
    }), s;
  }
  function Kn() {
    const n = Yh();
    if (n) return n;
    const o = bx(e, "pano_input_images", H, () => pe());
    if (o) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], l = s.includes("erp_image"), d = s.includes("bg_erp");
    let p = [];
    return i && (l || d) ? p = l ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : p = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Rf(e, p, () => pe(), `background:${p.join("|")}`);
  }
  function Wn(n) {
    return n ? n instanceof HTMLImageElement ? !!n.complete && Number(n.naturalWidth || n.width || 0) > 0 && Number(n.naturalHeight || n.height || 0) > 0 : n instanceof HTMLVideoElement ? Number(n.videoWidth || 0) > 0 && Number(n.videoHeight || 0) > 0 && Number(n.readyState || 0) >= 2 : Number(n.width || n.naturalWidth || 0) > 0 && Number(n.height || n.naturalHeight || 0) > 0 : !1;
  }
  function hg() {
    if (!z.hasPresentedFrame) return "boot";
    let n = !1, o = !1;
    if (m.showPanorama) {
      const s = Kn();
      n = !!s && !Wn(s);
    }
    if (m.showObjects) {
      const s = Array.isArray(h.stickers) ? h.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const d = Ml(l);
        if (d && !Wn(d)) {
          o = !0;
          break;
        }
      }
    }
    return n && o ? "mixed" : n ? "background" : o ? "stickers" : "";
  }
  function Yn() {
    const n = new Set(
      (h.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(h.assets || {}).forEach((o) => {
      n.has(o) || (delete h.assets[o], H.delete(o));
    });
  }
  function vs(n) {
    return {
      lon: Math.atan2(n.x, n.z),
      lat: Math.asin(W(n.y, -1, 1))
    };
  }
  function _s(n, o = null) {
    const { lon: s, lat: l } = vs(n), d = sn();
    let p = d.x + (s / (2 * Math.PI) + 0.5) * d.w;
    const _ = d.y + (0.5 - l / Math.PI) * d.h;
    if (o !== null) {
      for (; p - o > d.w / 2; ) p -= d.w;
      for (; p - o < -d.w / 2; ) p += d.w;
    }
    return { x: p, y: _, z: 1 };
  }
  function Sa(n) {
    const o = Ar(Number(n.yaw_deg || 0), Number(n.pitch_deg || 0));
    let s = Or(0, 1, 0);
    Math.abs(Nr(o, s)) > 0.999 && (s = Or(0, 0, 1));
    const l = ii(ro(s, o)), d = ii(ro(o, l)), p = Math.tan(W(Number(n.hFOV_deg || 20), 0.1, 179) * 0.5 * At), _ = Math.tan(W(Number(n.vFOV_deg || 20), 0.1, 179) * 0.5 * At), b = Number(n.rot_deg || n.roll_deg || 0) * At, x = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: d,
      tanX: p,
      tanY: _,
      cr: x,
      sr: S
    };
  }
  function cn(n, o, s) {
    const l = o * n.cr - s * n.sr, d = o * n.sr + s * n.cr;
    return ii(eo(eo(n.centerDir, to(n.right, l)), to(n.up, d)));
  }
  function Tl(n) {
    const o = Sa(n);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: d }) => cn(o, l * o.tanX, d * o.tanY));
  }
  function El(n, o, s) {
    const l = Sa(n), d = (o * 2 - 1) * l.tanX, p = (1 - s * 2) * l.tanY;
    return cn(l, d, p);
  }
  function Dl(n) {
    const o = (n == null ? void 0 : n.bbox) || null, s = (n == null ? void 0 : n.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: W((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function gg(n) {
    var x, S, k, N;
    const o = (n == null ? void 0 : n.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((x = n == null ? void 0 : n.transform) == null ? void 0 : x.scale) || 1)), d = Number(((S = n == null ? void 0 : n.transform) == null ? void 0 : S.rot_deg) || 0), p = Number(((k = n == null ? void 0 : n.transform) == null ? void 0 : k.du) || 0), _ = Number(((N = n == null ? void 0 : n.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((L) => ya(ba(L, s, l, d), p, _));
  }
  function pg(n) {
    const o = Ct((n == null ? void 0 : n.rasterObjectId) || (n == null ? void 0 : n.id) || ""), s = (n == null ? void 0 : n.transform) || {}, l = (n == null ? void 0 : n.bbox) || {}, d = `${o}:${m.mode}:${Ai()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (m.mode === "frame") {
      const p = Ge(), _ = p ? zt(p) : null;
      return `${d}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function mg(n) {
    const o = String((n == null ? void 0 : n.id) || ""), l = [
      cr(n) ? "frame" : mt(n) ? "sticker" : "item",
      o,
      m.mode,
      Number((n == null ? void 0 : n.yaw_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.pitch_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.hFOV_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.vFOV_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.rot_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.roll_deg) || 0).toFixed(4),
      Hi(n)
    ].join(":");
    if (m.mode === "frame") {
      const d = Ge(), p = d ? zt(d) : null;
      return `${l}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(Number((p == null ? void 0 : p.x) || 0))}:${Math.round(Number((p == null ? void 0 : p.y) || 0))}:${Math.round(Number((p == null ? void 0 : p.w) || 0))}:${Math.round(Number((p == null ? void 0 : p.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function yg() {
    var o;
    const n = String(((o = h.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return n === "draft" ? m.hqFrames && m.hqFrames > 0 ? [28, 20] : m.interaction ? [12, 9] : [20, 14] : n === "high" ? m.hqFrames && m.hqFrames > 0 ? [48, 36] : m.interaction ? [20, 14] : [36, 26] : m.hqFrames && m.hqFrames > 0 ? [40, 30] : m.interaction ? [16, 12] : [28, 20];
  }
  function Ll() {
    var n;
    return !!U && !!((n = he == null ? void 0 : he.isSupported) != null && n.call(he));
  }
  function Rl(n, o) {
    return !Ll() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((n == null ? void 0 : n.x) || 0) === 0 && Number((n == null ? void 0 : n.y) || 0) === 0 && Math.round(Number((n == null ? void 0 : n.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((n == null ? void 0 : n.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function Na() {
    return m.showObjects ? ug() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ma(n) {
    return !m.showObjects || !Array.isArray(n == null ? void 0 : n.stickers) || n.stickers.length === 0 ? [] : fg(n);
  }
  function Ol() {
    var n, o;
    return ((o = (n = m.paintEngine) == null ? void 0 : n.getMaskDisplayCanvas) == null ? void 0 : o.call(n)) || null;
  }
  function bg() {
    return Ol() ? `${Ms()}:mask_display` : "";
  }
  function Pi(n) {
    if (!m.showMask) return n;
    const o = Ol();
    if (!o) return n;
    const s = bg(), l = n.reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.zIndex) || 0)), -1), d = (Array.isArray(h.stickers) ? h.stickers : []).reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.z_index) || 0)), -1), p = Math.max(l, d);
    return n.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: p + 1,
      opacity: 1,
      visible: !0
    }), n;
  }
  function ka() {
    var l, d;
    const n = as(!0), o = og(), s = [];
    for (const p of n) {
      if ((p == null ? void 0 : p.type) === "strokeGroup") {
        const _ = String(p.actionGroupId || p.id || "");
        if (!_) continue;
        const b = ((d = (l = m.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : d.call(l, _)) || null;
        if (!b) continue;
        s.push({
          id: `paint_group:${_}`,
          source: b,
          revision: `${Ms()}:${_}`,
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((p == null ? void 0 : p.type) === "rasterObject") {
        const _ = p.item || null, b = Ct((_ == null ? void 0 : _.id) || p.id || "");
        if (!b) continue;
        const x = Cl(_, () => pe());
        if (!x) continue;
        const S = lg(x, p, o), k = (_ == null ? void 0 : _.transform) || {};
        s.push({
          id: `raster:${b}`,
          source: S,
          revision: [
            Xn(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(k.du || 0).toFixed(6),
            Number(k.dv || 0).toFixed(6),
            Number(k.rot_deg || 0).toFixed(3),
            Number(k.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return Pi(s);
  }
  function vg(n, o = "modal_bg_gl") {
    const s = Na(), l = Ma(s), d = Wn(n), p = d ? _a(n) : "none", _ = m.showObjects ? ka() : Pi([]), b = null, x = [
      o,
      p,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((S) => String((S == null ? void 0 : S.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((S) => `${String((S == null ? void 0 : S.assetId) || "")}:${String((S == null ? void 0 : S.revision) || "")}`).join(",") : "none",
      _.length ? _.map((S) => `${String((S == null ? void 0 : S.id) || "")}:${String((S == null ? void 0 : S.revision) || "")}:${Number((S == null ? void 0 : S.zIndex) || 0)}`).join(",") : "paint:none",
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: $i({
        stateRevision: x,
        backgroundSource: d ? n : null,
        backgroundRevision: d ? `${o}:${p}` : "",
        coverageDeg: Ot(h.coverage),
        scene: s,
        textures: l,
        paintSource: b,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: d || l.length > 0 || _.length > 0
    };
  }
  function xs() {
    if (!U) return;
    const n = U.getContext("webgl2");
    if (n)
      n.viewport(0, 0, U.width, U.height), n.clearColor(0, 0, 0, 1), n.clear(n.COLOR_BUFFER_BIT);
    else {
      const o = U.getContext("2d");
      o && (o.clearRect(0, 0, U.width, U.height), o.fillStyle = "#070707", o.fillRect(0, 0, U.width, U.height));
    }
    z.backgroundWasVisible = !1, z.backgroundDirty = !1;
  }
  function _g(n, o, s, l = "modal_bg_gl") {
    var S;
    if (!Rl(n, o)) return !1;
    if (!z.backgroundDirty && z.backgroundWasVisible) return !0;
    const { descriptor: d, hasContent: p } = vg(s, l);
    if (!p || !he.syncState(d))
      return xs(), !1;
    const b = he.renderToTarget("modal_pano", o, {
      width: n.w,
      height: n.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (S = U == null ? void 0 : U.getContext) == null ? void 0 : S.call(U, "2d");
    return !b || !x ? (xs(), !1) : (x.clearRect(0, 0, U.width, U.height), x.drawImage(b, 0, 0, U.width, U.height), z.backgroundWasVisible = !0, z.backgroundDirty = !1, !0);
  }
  function xg(n = !1) {
    const o = I.width, s = I.height, l = sn();
    if (M.globalAlpha = 1, M.lineWidth = 1, n || (M.fillStyle = "#070707", M.fillRect(0, 0, o, s), M.fillStyle = "#070707", M.fillRect(l.x, l.y, l.w, l.h)), Ia(), Al(
      M,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Kn(),
      "modal_unwrap"
    ), m.showGrid && !m.fullscreen) {
      M.strokeStyle = "#3f3f46";
      for (let p = 0; p <= 16; p += 1) {
        const _ = l.x + l.w * p / 16;
        M.beginPath(), M.moveTo(_, l.y), M.lineTo(_, l.y + l.h), M.stroke();
      }
      for (let p = 0; p <= 8; p += 1) {
        const _ = l.y + l.h * p / 8;
        M.beginPath(), M.moveTo(l.x, _), M.lineTo(l.x + l.w, _), M.stroke();
      }
      M.strokeStyle = "rgba(250, 250, 250, 0.86)", M.lineWidth = 1.2, M.beginPath(), M.moveTo(l.x, l.y + l.h / 2), M.lineTo(l.x + l.w, l.y + l.h / 2), M.stroke(), M.fillStyle = "rgba(250, 250, 250, 0.42)", M.font = "500 11px Geist, sans-serif", M.textAlign = "center";
      const d = l.y + l.h * 0.57;
      M.fillText("Left", l.x + l.w * 0.25, d), M.fillText("Front", l.x + l.w * 0.5, d), M.fillText("Right", l.x + l.w * 0.75, d), M.fillText("Back", l.x + 38, d), M.fillText("Back", l.x + l.w - 38, d);
    }
  }
  function Fl(n, o, s = 1) {
    let l = !1;
    M.strokeStyle = o, M.lineWidth = s, M.beginPath();
    for (const d of n) {
      const p = Mi(d);
      if (!p) {
        l = !1;
        continue;
      }
      l ? M.lineTo(p.x, p.y) : (M.moveTo(p.x, p.y), l = !0);
    }
    M.stroke();
  }
  function wg(n = !1) {
    const o = I.width, s = I.height;
    if (n || (Ll() ? M.clearRect(0, 0, o, s) : (M.fillStyle = "#070707", M.fillRect(0, 0, o, s))), Ia(), Al(
      M,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: m.viewYaw,
        pitchDeg: m.viewPitch,
        fovDeg: m.viewFov,
        coverageDeg: Ot(h.coverage)
      },
      Kn(),
      "modal_pano"
    ), m.showGrid && !m.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const p = [];
        for (let _ = -89; _ <= 89; _ += 4) p.push(Ar(d, _));
        Fl(p, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const p = [];
        for (let _ = -180; _ <= 180; _ += 4) p.push(Ar(_, d));
        Fl(p, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Ar(-90, 0) },
        { name: "Front", dir: Ar(0, 0) },
        { name: "Right", dir: Ar(90, 0) },
        { name: "Back", dir: Ar(180, 0) }
      ];
      M.fillStyle = "rgba(250, 250, 250, 0.42)", M.font = "500 11px Geist, sans-serif", M.textAlign = "center", l.forEach((d) => {
        const p = Mi(d.dir);
        p && M.fillText(d.name, p.x, p.y + 24);
      });
    }
  }
  function Sg(n, o = null, s = null, l = null) {
    if (m.mode === "frame") {
      const d = o || Ge();
      if (!d) return [];
      const p = s || zt(d);
      return ap(n, d, p);
    }
    return $l(n, l);
  }
  function Pa(n, o = null, s = null, l = null, d = null) {
    if (!n) return null;
    if (m.mode === "unwrap") {
      const _ = $l([n], d);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const p = qn(n);
    return p ? zr(p, o, s, l) : null;
  }
  function Ng(n, o) {
    const s = String(n.actionGroupId || n.id || "").trim(), l = vr(s, n.layerKind), d = an(s, n.layerKind, l), p = (d == null ? void 0 : d.centerUv) || ss(s, n.layerKind, l), _ = m.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, b = [], x = m.mode === "frame" ? Ge() : null, S = x ? zt(x) : null;
    for (const ie of l) {
      const be = (ie == null ? void 0 : ie.geometry) || null, Pe = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], Fe = Sg(Pe, x, S, _).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y));
      if (!Fe.length) continue;
      const Se = ln(String((ie == null ? void 0 : ie.toolKind) || "pen")), Y = rr[Se] || rr[Br];
      b.push({
        points: Fe,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((Y == null ? void 0 : Y.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || n.layerKind || "paint")
      });
    }
    const k = Pa(p, null, x, S, _);
    if (!k) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, ie), ie;
    }
    const L = Ph(d).map((ie) => Pa(ie, k.x, x, S, _)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (L.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, ie), ie;
    }
    const F = (ie, be) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: ie,
      b: be
    }), X = F(L[0], L[1]), B = F(L[1], L[2]), K = F(L[2], L[3]), ee = F(L[3], L[0]), ye = {
      kind: "strokeGroup",
      center: { x: Number(k.x || 0), y: Number(k.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...X },
        { edge: "right", ...B },
        { edge: "bottom", ...K },
        { edge: "left", ...ee }
      ],
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: { x: X.x, y: X.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return m._strokeGeomCache.set(o, ye), ye;
  }
  function Mg(n, o) {
    const s = m.mode === "frame" ? Ge() : null, l = s ? zt(s) : null, d = Dl(n), p = m.mode === "unwrap" ? Number((d == null ? void 0 : d.u) || 0) : null, _ = Pa(d, null, s, l, p), x = gg(n).map((L) => Pa(L, (_ == null ? void 0 : _.x) ?? null, s, l, p)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(x) || x.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return m._strokeGeomCache.set(o, L), L;
    }
    const S = x.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: S.reduce((L, F) => L + Number(F.x || 0), 0) / S.length,
        y: S.reduce((L, F) => L + Number(F.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return m._strokeGeomCache.set(o, N), N;
  }
  function zr(n, o = null, s = null, l = null) {
    if (m.mode === "frame") {
      const ye = s || Ge(), ie = l || zt(ye);
      if (!ye || !ie) return null;
      const be = ye ? Ii(ye, n) : null;
      return be ? {
        x: Number(ie.x || 0) + Number(be.x || 0) * Number(ie.w || 0),
        y: Number(ie.y || 0) + Number(be.y || 0) * Number(ie.h || 0),
        z: 1
      } : null;
    }
    if (m.mode === "unwrap") return _s(n, o);
    const { right: d, up: p, fwd: _ } = gs(), b = Nr(n, d), x = Nr(n, p), S = Nr(n, _), k = I.width, N = I.height, L = m.viewFov * At, F = 2 * Math.atan(Math.tan(L / 2) * (N / Math.max(k, 1))), X = k / 2 / Math.tan(L / 2), B = N / 2 / Math.tan(F / 2), K = Math.max(S, 1e-4), ee = Math.max(k, N) * 2;
    return {
      x: W(k / 2 + b / K * X, -ee, k + ee),
      y: W(N / 2 - x / K * B, -ee, N + ee),
      z: K
    };
  }
  function kg(n) {
    const o = Ar(Number(n.yaw_deg || 0), Number(n.pitch_deg || 0)), s = m.mode === "frame" ? Ge() : null, l = s ? zt(s) : null, d = zr(o, null, s, l);
    if (!d) return { visible: !1 };
    const p = Sa(n), b = Tl(n).map((Pe) => zr(Pe, d.x, s, l)).filter((Pe) => Number.isFinite(Pe == null ? void 0 : Pe.x) && Number.isFinite(Pe == null ? void 0 : Pe.y));
    if (b.length < 4) return { visible: !1 };
    const x = cn(p, 0, p.tanY), S = cn(p, 0, p.tanY + Math.max(p.tanY * 0.43, 0.053)), k = zr(x, d.x, s, l);
    if (!k) return { visible: !1 };
    const N = zr(S, (k == null ? void 0 : k.x) ?? d.x, s, l), L = ((N == null ? void 0 : N.x) ?? k.x) - k.x, F = ((N == null ? void 0 : N.y) ?? k.y) - k.y, X = Math.hypot(L, F) || 1, B = {
      x: k.x + L / X * 30,
      y: k.y + F / X * 30
    }, K = zr(cn(p, 0, p.tanY), d.x, s, l), ee = zr(cn(p, p.tanX, 0), d.x, s, l), ye = zr(cn(p, 0, -p.tanY), d.x, s, l), ie = zr(cn(p, -p.tanX, 0), d.x, s, l);
    if (!K || !ee || !ye || !ie) return { visible: !1 };
    const be = [
      {
        edge: "top",
        x: K.x,
        y: K.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: ee.x,
        y: ee.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: ye.x,
        y: ye.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: ie.x,
        y: ie.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: d.x, y: d.y },
      corners: b.map((Pe) => ({ x: Pe.x, y: Pe.y })),
      edgeMidpoints: be,
      rotateStemBase: { x: k.x, y: k.y },
      rotateHandle: B,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Et(n) {
    if (Mt(n)) {
      const d = String(n.actionGroupId || n.id || "").trim(), p = Dh(d, n.layerKind), _ = m._strokeGeomCache.get(p);
      return _ || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), Ng(n, p));
    }
    if (Vt(n)) {
      const d = pg(n), p = m._strokeGeomCache.get(d);
      return p || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), Mg(n, d));
    }
    const o = mg(n), s = m._strokeGeomCache.get(o);
    if (s) return s;
    m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear();
    const l = kg(n);
    return m._strokeGeomCache.set(o, l), l;
  }
  function Ca(n, o, s, l = null) {
    const d = [];
    for (let p = 0; p <= s; p += 1) {
      const _ = p / s;
      let b = 0, x = 0;
      o === 0 ? (b = _, x = 0) : o === 1 ? (b = 1, x = _) : o === 2 ? (b = 1 - _, x = 1) : (b = 0, x = 1 - _);
      const S = El(n, b, x), k = m.mode === "unwrap" ? _s(S, l) : Mi(S);
      k && d.push(k);
    }
    return d;
  }
  function Pg(n, o) {
    const s = Ar(Number(n.yaw_deg || 0), Number(n.pitch_deg || 0)), l = m.mode === "unwrap" ? _s(s) : null, d = l ? l.x : null, p = m.mode === "pano" ? 28 : 20, _ = [
      Ca(n, 0, p, d),
      Ca(n, 1, p, d),
      Ca(n, 2, p, d),
      Ca(n, 3, p, d)
    ];
    M.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", M.lineWidth = o ? 2 : 1, M.beginPath();
    let b = !1;
    for (const x of _)
      for (const S of x)
        b ? M.lineTo(S.x, S.y) : (M.moveTo(S.x, S.y), b = !0);
    M.closePath(), M.stroke();
  }
  function Cg() {
    const n = [...Array.isArray(h.shots) ? h.shots : []], o = [...Array.isArray(h.stickers) ? h.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    return [...n, ...o];
  }
  function ws() {
    const n = [...Array.isArray(h.shots) ? h.shots : []];
    return [...[...Array.isArray(h.stickers) ? h.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0)), ...n];
  }
  function Aa(n, o = []) {
    if (!(!n || !Array.isArray(o) || o.length < 4)) {
      n.beginPath(), n.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) n.lineTo(o[s].x, o[s].y);
      n.closePath();
    }
  }
  function Ag(n, o, s) {
    const l = Array.isArray(n == null ? void 0 : n.corners) ? n.corners : [];
    if (l.length < 4) return;
    const d = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", p = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", _ = o ? 3.2 : 2.6, b = o ? 4.4 : 3.4, x = o ? 24 : 20;
    Aa(M, l), M.fillStyle = p, M.fill(), M.strokeStyle = d, M.lineWidth = _, M.stroke(), M.save(), M.strokeStyle = d, M.lineWidth = b, M.lineCap = "round";
    for (let L = 0; L < 4; L += 1) {
      const F = l[L], X = l[(L + 3) % 4], B = l[(L + 1) % 4], K = F.x - X.x, ee = F.y - X.y, ye = Math.hypot(K, ee) || 1, ie = B.x - F.x, be = B.y - F.y, Pe = Math.hypot(ie, be) || 1;
      M.beginPath(), M.moveTo(F.x, F.y), M.lineTo(F.x - K / ye * x, F.y - ee / ye * x), M.moveTo(F.x, F.y), M.lineTo(F.x + ie / Pe * x, F.y + be / Pe * x), M.stroke();
    }
    const S = Array.isArray(n == null ? void 0 : n.edgeMidpoints) && n.edgeMidpoints.length >= 4 ? n.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], k = {
      x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
      y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
    }, N = o ? 12 : 9;
    S.forEach((L) => {
      const F = k.x - L.x, X = k.y - L.y, B = Math.hypot(F, X) || 1;
      M.beginPath(), M.moveTo(L.x, L.y), M.lineTo(L.x + F / B * N, L.y + X / B * N), M.stroke();
    }), M.restore();
  }
  function Ig(n, o, s, l) {
    if (cr(n)) {
      Ag(o, s, l);
      return;
    }
    if (mt(n)) {
      const d = M.globalAlpha;
      M.globalAlpha = zh(n), m.mode === "frame" ? (M.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", M.lineWidth = s ? 2 : 1, Aa(M, o.corners), M.stroke()) : Pg(n, s), M.globalAlpha = d;
      return;
    }
    M.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Aa(M, o.corners), M.fill(), M.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", M.lineWidth = s ? 2.8 : 1.9, Aa(M, o.corners), M.stroke();
  }
  function Tg(n, o, s) {
    M.fillStyle = s, o.corners.forEach((l) => {
      M.beginPath(), M.arc(l.x, l.y, 6.5, 0, Math.PI * 2), M.fill();
    }), cr(n) && (M.strokeStyle = s, M.lineCap = "round", M.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var k, N, L, F;
      const d = (((k = l.b) == null ? void 0 : k.x) ?? l.x) - (((N = l.a) == null ? void 0 : N.x) ?? l.x), p = (((L = l.b) == null ? void 0 : L.y) ?? l.y) - (((F = l.a) == null ? void 0 : F.y) ?? l.y), _ = Math.hypot(d, p) || 1, b = d / _, x = p / _, S = 10;
      M.beginPath(), M.moveTo(l.x - b * S, l.y - x * S), M.lineTo(l.x + b * S, l.y + x * S), M.stroke();
    }), M.lineCap = "butt"), Mt(n) || (M.strokeStyle = "rgba(250, 250, 250, 0.9)", M.lineWidth = 1.8, M.beginPath(), M.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), M.lineTo(o.rotateHandle.x, o.rotateHandle.y), M.stroke(), M.fillStyle = s, M.beginPath(), M.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), M.fill());
  }
  function Eg() {
    var b;
    const [n, o] = yg(), s = _r(), l = s.length > 1, d = t === "cutout" ? Cg() : Pt(), p = d.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${cr(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!m._sortedItemsCache || m._sortedItemsCache.src !== d || m._sortedItemsCache.orderKey !== p) && (m._sortedItemsCache = {
      src: d,
      orderKey: p,
      sorted: [...d]
    });
    const _ = m._sortedItemsCache.sorted;
    for (const x of _) {
      const S = !l && Rh(x);
      if (m.mode === "frame" && !S || !m.showObjects && !cr(x)) continue;
      const k = mt(x), N = cr(x), L = on(x);
      if (!k && !N)
        continue;
      const F = Et(x);
      if (!(t !== "stickers" && !F.visible) && (Ig(x, F, S, L), S && F.visible)) {
        const X = L ? "#ff4d4f" : k && Tt(x) ? "#f59e0b" : "#0070f3";
        Tg(x, F, X);
      }
    }
    if (l) {
      const x = cs(s);
      if (x != null && x.visible) {
        const S = ls(s) ? "#ff4d4f" : "#0070f3";
        M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.95)", M.lineWidth = 2, M.setLineDash([6, 4]), M.beginPath(), M.moveTo(x.corners[0].x, x.corners[0].y);
        for (let k = 1; k < x.corners.length; k += 1) M.lineTo(x.corners[k].x, x.corners[k].y);
        M.closePath(), M.stroke(), M.setLineDash([]), M.fillStyle = S, x.corners.forEach((k) => {
          M.beginPath(), M.arc(k.x, k.y, 6.5, 0, Math.PI * 2), M.fill();
        }), M.restore();
      }
    } else
      s.forEach((x) => {
        if (!Mt(x) && !Vt(x)) return;
        const S = Et(x);
        if (!(S != null && S.visible)) return;
        const k = on(x) ? "#ff4d4f" : "#0070f3";
        M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.95)", M.lineWidth = 2, M.setLineDash([6, 4]), M.beginPath(), M.moveTo(S.corners[0].x, S.corners[0].y);
        for (let N = 1; N < S.corners.length; N += 1) M.lineTo(S.corners[N].x, S.corners[N].y);
        M.closePath(), M.stroke(), M.setLineDash([]), M.fillStyle = k, S.corners.forEach((N) => {
          M.beginPath(), M.arc(N.x, N.y, 6.5, 0, Math.PI * 2), M.fill();
        }), M.restore();
      });
    if (((b = m.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const x = eu(m.interaction.start, m.interaction.current);
      M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.9)", M.fillStyle = "rgba(255, 255, 255, 0.08)", M.lineWidth = 1, M.setLineDash([5, 4]), M.beginPath(), M.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), M.fill(), M.stroke(), M.restore();
    }
    m.hqFrames && n >= 40 && o >= 30 && (m.hqFrames -= 1, m.hqFrames > 0 && pe());
  }
  function Dg(n) {
    const o = gn(n), s = W(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Vl(n, o = !1) {
    const s = W(Ui(n), 0.05, 20), l = o ? 320 : 220;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Lg(n) {
    if (!ge || !n) return !1;
    const o = ge.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || ge.clientWidth || 0)), l = Math.round(Number(o.clientHeight || ge.clientHeight || 0));
    return Math.abs(s - Number(n.width || 0)) <= 1 && Math.abs(l - Number(n.height || 0)) <= 1;
  }
  function Rg() {
    var s;
    const n = Array.isArray(h.stickers) ? h.stickers : [], o = Array.isArray((s = h.painting) == null ? void 0 : s.raster_objects) ? h.painting.raster_objects : [];
    return JSON.stringify({
      stickers: n.map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        asset_id: String((l == null ? void 0 : l.asset_id) || (l == null ? void 0 : l.assetId) || ""),
        source_kind: String((l == null ? void 0 : l.source_kind) || ""),
        source_link_id: Number((l == null ? void 0 : l.source_link_id) ?? -1),
        source_state_hash: String((l == null ? void 0 : l.source_state_hash) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        yaw_deg: Number((l == null ? void 0 : l.yaw_deg) || 0),
        pitch_deg: Number((l == null ? void 0 : l.pitch_deg) || 0),
        hFOV_deg: Number((l == null ? void 0 : l.hFOV_deg) || 0),
        vFOV_deg: Number((l == null ? void 0 : l.vFOV_deg) || 0),
        rot_deg: Number((l == null ? void 0 : l.rot_deg) || 0),
        roll_deg: Number((l == null ? void 0 : l.roll_deg) || 0),
        crop: (l == null ? void 0 : l.crop) || null
      })),
      rasters: o.filter((l) => String((l == null ? void 0 : l.layerKind) || "paint") === "paint").map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        transform: (l == null ? void 0 : l.transform) || null,
        bbox: (l == null ? void 0 : l.bbox) || null
      }))
    });
  }
  function Og(n, o = {}) {
    if (!n) return "";
    const s = Kn(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", d = Dg(n);
    return [
      String((n == null ? void 0 : n.id) || ""),
      Ms(),
      Rg(),
      ma(),
      l,
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "mask:1" : "mask:0",
      `${d.width}x${d.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Fg() {
    var L, F, X, B;
    if (m.outputPreviewRect = null, A.outputPreviewToggle.visible = m.mode !== "frame" && !!Ge(), t !== "cutout" || !A.cameraPreview) return;
    if (m.mode === "frame") {
      A.cameraPreview.visible = !1, A.cameraPreview.settled = !1;
      return;
    }
    const n = Ge();
    if (!n) {
      A.cameraPreview.visible = !0, A.cameraPreview.ready = !1, A.cameraPreview.settled = !1, A.cameraPreview.expanded = !!m.outputPreviewExpanded, A.cameraPreview.width = 220, A.cameraPreview.height = 132, A.cameraPreview.label = "Add Frame to preview", (L = fe == null ? void 0 : fe.clearScene) == null || L.call(fe), (F = D == null ? void 0 : D.requestRender) == null || F.call(D);
      return;
    }
    A.cameraPreview.visible = !0;
    const o = Kn();
    if (!n || !fe || !D) {
      A.cameraPreview.ready = !1, A.cameraPreview.label = n ? "Preview unavailable" : "Add Frame to preview", A.cameraPreview.expanded = !!m.outputPreviewExpanded, A.cameraPreview.settled = !1, A.cameraPreview.width = 220, A.cameraPreview.height = 132, (X = fe == null ? void 0 : fe.clearScene) == null || X.call(fe), (B = D == null ? void 0 : D.requestRender) == null || B.call(D);
      return;
    }
    const s = Vl(n, !!m.outputPreviewExpanded);
    A.cameraPreview.width = s.width, A.cameraPreview.height = s.height, A.cameraPreview.expanded = !!m.outputPreviewExpanded;
    const l = Na(), d = Ma(l), p = Wn(o), _ = p ? _a(o) : "none", b = m.showObjects ? ka() : Pi([]), x = $i({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((K) => String((K == null ? void 0 : K.id) || "")).join(",") : "none",
        Array.isArray(d) ? d.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        b.length ? b.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none",
        m.showPanorama ? "panorama:1" : "panorama:0",
        m.showObjects ? "objects:1" : "objects:0",
        m.showMask ? "showMask:1" : "showMask:0",
        Ot(h.coverage)
      ].join("|"),
      backgroundSource: p && m.showPanorama ? o : null,
      backgroundRevision: p ? `cutout_preview:${_}` : "",
      coverageDeg: Ot(h.coverage),
      scene: l,
      textures: d,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(p || d.length > 0 || b.length > 0)) {
      A.cameraPreview.ready = !1, A.cameraPreview.label = "Connect ERP image", A.cameraPreview.settled = !1, fe.clearScene(), D.requestRender();
      return;
    }
    if (m.showPanorama && !p && d.length === 0 && b.length === 0) {
      A.cameraPreview.ready = !1, A.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", A.cameraPreview.settled = !1, fe.clearScene(), D.requestRender();
      return;
    }
    fe.syncScene(x), D.setView(gn(n));
    const k = Lg(s), N = k ? D.present() : !1;
    k || D.requestRender(), A.cameraPreview.ready = !0, A.cameraPreview.label = k && N ? "" : "Loading preview", A.cameraPreview.settled = k && N && z.pendingStableLayoutFrames <= 0 && z.hasPresentedFrame;
  }
  function Vg(n, o, s, l = {}) {
    if (!fe || !s) return !1;
    const d = Kn(), p = Na(), _ = Ma(p), b = Wn(d), x = m.showObjects ? ka() : Pi([]);
    return b || _.length > 0 || x.length > 0 ? (fe.syncScene($i({
      stateRevision: Og(s, l),
      backgroundSource: b && m.showPanorama ? d : null,
      backgroundRevision: b ? String(d.currentSrc || d.src || "") : "",
      coverageDeg: Ot(h.coverage),
      scene: p,
      textures: _,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), fe.renderShotToContext(n, o, s, l)) : !1;
  }
  function Ss(n, o) {
    if (!n || !o) return null;
    const s = Number(o.x || 0), l = Number(o.y || 0);
    return El(n, s, l);
  }
  function qn(n) {
    if (!n) return null;
    const o = (Number(n.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(n.v || 0)) * Math.PI, l = Math.cos(s);
    return Or(l * Math.sin(o), Math.sin(s), l * Math.cos(o));
  }
  function Hg(n) {
    return !n || typeof n != "object" ? { x: 0, y: 0 } : { x: Number((n == null ? void 0 : n.u) || 0), y: Number((n == null ? void 0 : n.v) || 0) };
  }
  function zg(n, o, s, l = {}) {
    return { ...{
      ...n,
      t: Number((n == null ? void 0 : n.t) || 0),
      widthScale: Ht(n, "widthScale", 1),
      pressureLike: Ht(n, "pressureLike", 1)
    }, ...l, u: o, v: s };
  }
  function jg(n, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Ns(n, o, s = !1) {
    if (!Array.isArray(n) || !n.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", d = /* @__PURE__ */ new WeakMap();
    if (l) {
      let B = null;
      n.forEach((K) => {
        const ee = Number((K == null ? void 0 : K.u) || 0), ye = Number((K == null ? void 0 : K.v) || 0), ie = (ee % 1 + 1) % 1, be = B == null ? ie : B + pr(ie, (B % 1 + 1) % 1);
        d.set(K, { x: be, y: ye }), B = be;
      });
    }
    const p = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : d.get(B) || Hg(B), _ = (B, K, ee, ye = {}) => {
      const ie = l ? (Number(K) % 1 + 1) % 1 : Number(K), be = zg(B, ie, ee, ye);
      return d.set(be, { x: Number(K), y: Number(ee) }), be;
    }, b = (B, K, ee) => {
      const ye = p(B), ie = p(K);
      return _(B, Gr(ye.x, ie.x, ee), Gr(ye.y, ie.y, ee), {
        t: Gr(Number((B == null ? void 0 : B.t) || 0), Number((K == null ? void 0 : K.t) || 0), ee),
        widthScale: Gr(Ht(B, "widthScale", 1), Ht(K, "widthScale", 1), ee),
        pressureLike: Gr(Ht(B, "pressureLike", 1), Ht(K, "pressureLike", 1), ee)
      });
    };
    if (n.length === 1) {
      const B = p(n[0]);
      return [_(n[0], B.x, B.y)];
    }
    const x = jg(o, s), S = (B, K) => {
      const ee = [0];
      for (let re = 1; re < B.length; re += 1) {
        const _e = p(B[re - 1]), Ne = p(B[re]);
        ee.push(ee[re - 1] + Math.hypot(Ne.x - _e.x, Ne.y - _e.y));
      }
      const ye = ee[ee.length - 1] || 0;
      if (ye <= 1e-8) {
        const re = B[0], _e = p(re);
        return [_(re, _e.x, _e.y)];
      }
      const ie = [];
      let be = 0;
      for (let re = 0; re <= ye + 1e-9; re += K) {
        for (; be < ee.length - 2 && ee[be + 1] < re; ) be += 1;
        const _e = ee[be], Ne = ee[be + 1], je = Math.max(1e-8, Ne - _e);
        ie.push(b(B[be], B[be + 1], W((re - _e) / je, 0, 1)));
      }
      const Pe = B[B.length - 1], Fe = p(Pe), Se = ie[ie.length - 1], Y = Se ? p(Se) : null;
      return (!Y || Math.hypot(Y.x - Fe.x, Y.y - Fe.y) > K * 0.35) && ie.push(_(Pe, Fe.x, Fe.y)), ie;
    }, k = (B) => {
      if (!Array.isArray(B) || B.length < 3) return B ? B.slice() : [];
      const K = p(B[0]), ee = [_(B[0], K.x, K.y)];
      for (let be = 0; be < B.length - 1; be += 1) {
        const Pe = B[be], Fe = B[be + 1], Se = p(Pe), Y = p(Fe), re = _(
          Pe,
          Se.x * 0.75 + Y.x * 0.25,
          Se.y * 0.75 + Y.y * 0.25,
          {
            t: Number(Pe.t || 0) * 0.75 + Number(Fe.t || 0) * 0.25,
            widthScale: Ht(Pe, "widthScale", 1) * 0.75 + Ht(Fe, "widthScale", 1) * 0.25,
            pressureLike: Ht(Pe, "pressureLike", 1) * 0.75 + Ht(Fe, "pressureLike", 1) * 0.25
          }
        ), _e = _(
          Pe,
          Se.x * 0.25 + Y.x * 0.75,
          Se.y * 0.25 + Y.y * 0.75,
          {
            t: Number(Pe.t || 0) * 0.25 + Number(Fe.t || 0) * 0.75,
            widthScale: Ht(Pe, "widthScale", 1) * 0.25 + Ht(Fe, "widthScale", 1) * 0.75,
            pressureLike: Ht(Pe, "pressureLike", 1) * 0.25 + Ht(Fe, "pressureLike", 1) * 0.75
          }
        );
        ee.push(re, _e);
      }
      const ye = B[B.length - 1], ie = p(ye);
      return ee.push(_(ye, ie.x, ie.y)), ee;
    }, N = S(n, x);
    if (N.length < 3) return N;
    const L = s ? 2 : 1;
    let F = N.slice();
    for (let B = 0; B < L; B += 1) F = k(F);
    return S(F, Math.max(x * 0.75, 55e-5));
  }
  function Ht(n, o, s = 1) {
    const l = Number(n == null ? void 0 : n[o]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function $g(n) {
    const o = Number(n == null ? void 0 : n.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const s = String((n == null ? void 0 : n.radiusModel) || "").trim() || "erp_uv_norm";
      return s === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((n == null ? void 0 : n.size) || 10) * 0.5 / 2048)
      } : {
        model: s,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((n == null ? void 0 : n.size) || 10) * 0.5 / 2048)
    };
  }
  function Ci(n, o, s = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(n)), l.height = Math.max(1, Math.round(o));
    const d = l.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return d && (d.clearRect(0, 0, l.width, l.height), d.imageSmoothingEnabled = !0), { canvas: l, ctx: d };
  }
  function Ai() {
    const n = Ta();
    return `${String(m.paintStrokeRevision)}:${n.width}x${n.height}`;
  }
  function Xn() {
    const n = Ta();
    return `${String(m.paintStrokeRevision)}:${String(m.paintCompositeRevision)}:${n.width}x${n.height}`;
  }
  function Ms() {
    const n = ma(), o = Xn();
    return n ? `${o}:${n}` : o;
  }
  function Bg() {
    m.paintStrokeRevision += 1, m.paintCompositeRevision += 1;
  }
  function Ug() {
    m.paintCompositeRevision += 1;
  }
  function Gg() {
    m._sortedItemsCache = null, m._strokeGeomCache.clear();
  }
  function Hl() {
    var n, o;
    m.paintEngineRevisionKey = null, (o = (n = m.paintEngine) == null ? void 0 : n.rebuildCommitted) == null || o.call(n, h), m.paintEngineRevisionKey = Ai();
  }
  function Dt() {
    m.objectVisualRevision = Number(m.objectVisualRevision || 0) + 1, Gg(), z.backgroundDirty = !0, z.dirty = !0;
  }
  function xr({ rebuildPaintEngine: n = !1 } = {}) {
    Bg(), Dt(), n && Hl();
  }
  function Zn() {
    Ug(), Dt();
  }
  function Ia() {
    var l;
    const n = Ta(), o = `${n.width}x${n.height}`;
    m.paintEngineDescriptorKey !== o && (m.paintEngine = wc(n), m.paintEngineDescriptorKey = o, m.paintEngineRevisionKey = "");
    const s = Ai();
    m.paintEngineRevisionKey !== s && (m.paintEngineRevisionKey = s, (l = m.paintEngine) == null || l.rebuildCommitted(h));
  }
  function Ta() {
    const n = Math.max(1, Number((h == null ? void 0 : h.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: n,
      height: Math.max(1, Math.round(n * 0.5))
    };
  }
  function jr() {
    return Ta();
  }
  function Kg(n, o, s, l, d = null) {
    const p = $g(n), _ = Ht(o, "widthScale", 1) * Ht(o, "pressureLike", 1);
    return p.model === "erp_uv_norm" ? Math.max(0.5, p.value * s * _) : p.model === "world_angle" ? d ? Math.max(0.5, p.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * At) * s * _) : Math.max(0.5, p.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((n == null ? void 0 : n.size) || 10) * 0.5 * _);
  }
  function Wg(n, o, s = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), d = String((o == null ? void 0 : o.toolKind) || "pen"), p = s.preview === !0, _ = p ? 0.78 : 1;
    if (n.globalAlpha = d === "marker" ? 0.7 * _ : 1, l === "mask") {
      n.fillStyle = p ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      n.globalCompositeOperation = "destination-out", n.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = p ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    n.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${x})`;
  }
  function Yg(n, o, s) {
    const l = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (n.beginPath(), n.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), n.fill());
  }
  function qg(n, o, s, l, d = {}) {
    if (!n || !Array.isArray(o) || !o.length) return;
    const p = Math.max(l.w, l.h) * 0.25;
    n.save(), Wg(n, s, d);
    const _ = (b) => Yg(n, b, p);
    if (o.length === 1) {
      _(o[0]), n.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const x = o[b], S = o[b + 1];
      if (!x || !S) continue;
      const k = Number(x.x || 0), N = Number(x.y || 0), L = Number(S.x || 0), F = Number(S.y || 0), X = Math.max(0.5, Math.min(p, Number(x.radiusPx || 0.5))), B = Math.max(0.5, Math.min(p, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(k) || !Number.isFinite(N) || !Number.isFinite(L) || !Number.isFinite(F) || !Number.isFinite(X) || !Number.isFinite(B)) continue;
      const K = L - k, ee = F - N, ye = Math.hypot(K, ee);
      if (!Number.isFinite(ye) || ye < 1e-6) {
        _(x);
        continue;
      }
      if (ye > Math.max(l.w, l.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(X, B)), be = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Pe = Math.max(1, Math.ceil(ye / be));
      for (let Fe = 0; Fe <= Pe; Fe += 1) {
        const Se = Fe / Pe;
        _({
          x: Gr(k, L, Se),
          y: Gr(N, F, Se),
          radiusPx: Gr(X, B, Se)
        });
      }
    }
    _(o[o.length - 1]), n.restore();
  }
  function Xg(n, o, s, l) {
    qg(n, o, s, l, { preview: !1 });
  }
  function Zg(n, o, s, l, d) {
    var b, x, S, k;
    if (!n || !Array.isArray(o) || o.length < 3) return;
    const p = "u", _ = "v";
    if (n.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      n.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      n.globalCompositeOperation = "destination-out", n.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      n.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    n.beginPath(), n.moveTo(Number(((b = o[0]) == null ? void 0 : b[p]) || 0) * l.w, Number(((x = o[0]) == null ? void 0 : x[_]) || 0) * l.h);
    for (let N = 1; N < o.length; N += 1)
      n.lineTo(Number(((S = o[N]) == null ? void 0 : S[p]) || 0) * l.w, Number(((k = o[N]) == null ? void 0 : k[_]) || 0) * l.h);
    n.closePath(), n.fill(), n.restore();
  }
  function zl(n) {
    const o = (n == null ? void 0 : n.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function Jg(n, o) {
    const s = zl(n);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: Kg(n, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function jl(n, o, s = null) {
    var b, x, S, k;
    if (!(n != null && n.ctx) || !o) return !1;
    const l = s || { w: Number(((b = n.canvas) == null ? void 0 : b.width) || 0), h: Number(((x = n.canvas) == null ? void 0 : x.height) || 0) }, d = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((k = o == null ? void 0 : o.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill")
      return Zg(n.ctx, zl(d), d, l), !0;
    const _ = Jg(d, l);
    return _.length ? (Xg(n.ctx, _, d, l), !0) : !1;
  }
  function Qg(n, o, s, l = 8) {
    const d = new Uint8Array(o * s), p = [], _ = new Int32Array(o * s), b = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let S = 0; S < o; S += 1) {
        const k = x * o + S;
        if (d[k] || n[k] <= l) continue;
        let N = 0, L = 0;
        _[L] = S, b[L] = x, L += 1, d[k] = 1;
        const F = [];
        let X = S, B = x, K = S, ee = x;
        for (; N < L; ) {
          const ye = _[N], ie = b[N];
          N += 1, F.push({ x: ye, y: ie }), ye < X && (X = ye), ie < B && (B = ie), ye > K && (K = ye), ie > ee && (ee = ie);
          const be = [
            [(ye - 1 + o) % o, ie],
            [(ye + 1) % o, ie],
            [ye, ie - 1],
            [ye, ie + 1]
          ];
          for (const [Pe, Fe] of be) {
            if (Fe < 0 || Fe >= s) continue;
            const Se = Fe * o + Pe;
            d[Se] || n[Se] <= l || (d[Se] = 1, _[L] = Pe, b[L] = Fe, L += 1);
          }
        }
        p.push({ pixels: F, minX: X, minY: B, maxX: K, maxY: ee });
      }
    return p;
  }
  function ep(n, o) {
    const s = [...new Set((Array.isArray(n == null ? void 0 : n.pixels) ? n.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, S) => x - S);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let l = -1, d = 0;
    for (let x = 0; x < s.length; x += 1) {
      const S = s[x], N = (x === s.length - 1 ? s[0] + o : s[x + 1]) - S - 1;
      N > l && (l = N, d = x);
    }
    const p = (s[(d + 1) % s.length] + o) % o;
    let _ = 1 / 0, b = -1 / 0;
    for (const x of s) {
      const S = (x - p + o) % o;
      _ = Math.min(_, S), b = Math.max(b, S);
    }
    return {
      startX: p,
      widthPx: Math.max(1, b - _ + 1)
    };
  }
  function tp(n, o, s = {}) {
    var S;
    const l = Number((n == null ? void 0 : n.width) || 0), d = Number((n == null ? void 0 : n.height) || 0), p = (S = n == null ? void 0 : n.getContext) == null ? void 0 : S.call(n, "2d");
    if (!p || l < 1 || d < 1) return [];
    const _ = p.getImageData(0, 0, l, d), b = new Uint8Array(l * d);
    for (let k = 0; k < b.length; k += 1) b[k] = _.data[k * 4 + 3];
    return Qg(b, l, d, 8).map((k, N) => {
      const L = ep(k, l);
      if (!L) return null;
      const F = Number(L.widthPx || 0), X = k.maxY - k.minY + 1, B = Number(L.startX || 0), K = document.createElement("canvas");
      K.width = F, K.height = X;
      const ee = K.getContext("2d");
      if (!ee) return null;
      const ye = ee.createImageData(F, X);
      return k.pixels.forEach(({ x: ie, y: be }) => {
        const Pe = (be * l + ie) * 4, Fe = (Number(ie || 0) - B + l) % l, Se = ((be - k.minY) * F + Fe) * 4;
        ye.data[Se + 0] = _.data[Pe + 0], ye.data[Se + 1] = _.data[Pe + 1], ye.data[Se + 2] = _.data[Pe + 2], ye.data[Se + 3] = _.data[Pe + 3];
      }), ee.putImageData(ye, 0, 0), {
        id: ai("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + N * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: k.minY / d,
          u1: F / l,
          v1: (k.maxY + 1) / d
        },
        rasterDataUrl: K.toDataURL("image/png"),
        transform: {
          du: B / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ii(n, o) {
    if (!n || !o) return null;
    const s = Sa(n), l = Nr(o, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const d = Nr(o, s.right) / l, p = Nr(o, s.up) / l, _ = d * s.cr + p * s.sr, b = -d * s.sr + p * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function rp(n) {
    if (!Array.isArray(n) || n.length < 3) return [];
    if (m.mode === "unwrap") {
      const s = sn();
      return n.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const o = n.map((s) => Mi(qn(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function $l(n, o = null) {
    if (!Array.isArray(n) || n.length < 1) return [];
    if (m.mode === "unwrap") {
      const l = sn();
      return n.map((d) => {
        const p = (Number(d.u || 0) % 1 + 1) % 1, _ = o == null ? p : Number(o || 0) + pr(p, o);
        return {
          x: l.x + _ * l.w,
          y: l.y + Number(d.v || 0) * l.h
        };
      });
    }
    const s = n.map((l) => Mi(qn(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function np(n, o = 160) {
    if (!Array.isArray(n) || n.length < 3) return !1;
    for (let s = 0; s < n.length; s += 1) {
      const l = n[s], d = n[(s + 1) % n.length];
      if (!l || !d || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(d.x) || !Number.isFinite(d.y) || Math.hypot(Number(d.x) - Number(l.x), Number(d.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function ip(n, o, s) {
    if (!Array.isArray(n) || n.length < 3 || !o || !s) return [];
    const l = [];
    for (const d of n) {
      const p = qn(d), _ = Ii(o, p);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return np(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function ap(n, o, s) {
    if (!Array.isArray(n) || n.length < 1 || !o || !s) return [];
    const l = [];
    for (const d of n) {
      const p = qn(d), _ = Ii(o, p);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function op() {
    var d;
    const n = Ge(), o = zt(n);
    if (!n || !o) return !1;
    M.save(), M.fillStyle = "#050505", M.fillRect(0, 0, I.width, I.height), M.shadowColor = "rgba(0, 0, 0, 0.45)", M.shadowBlur = 24, M.shadowOffsetX = 0, M.shadowOffsetY = 10, M.fillStyle = "rgba(14, 14, 14, 1)", M.fillRect(o.x, o.y, o.w, o.h), M.restore(), M.save(), M.beginPath(), M.rect(o.x, o.y, o.w, o.h), M.clip();
    const s = m.interaction ? "draft" : String(((d = h.ui_settings) == null ? void 0 : d.preview_quality) || "balanced");
    return Vg(M, o, n, { quality: s }) === !0 || (M.fillStyle = "rgba(255, 255, 255, 0.03)", M.fillRect(o.x, o.y, o.w, o.h)), M.restore(), M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.12)", M.lineWidth = 1, M.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), M.restore(), !0;
  }
  function sp() {
    var x, S;
    if (((x = m.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const n = m.interaction.stroke, o = (S = n == null ? void 0 : n.geometry) == null ? void 0 : S.points;
    let s;
    if (m.mode === "frame") {
      const k = Ge(), N = zt(k);
      s = ip(o, k, N);
    } else
      s = rp(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((n == null ? void 0 : n.layerKind) || "") === "mask", d = (n == null ? void 0 : n.color) || { r: 1, g: 0.25, b: 0.25 }, p = Math.round(Number(d.r || 0) * 255), _ = Math.round(Number(d.g || 0) * 255), b = Math.round(Number(d.b || 0) * 255);
    M.save(), M.beginPath(), M.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let k = 1; k < s.length; k++) M.lineTo(Number(s[k].x || 0), Number(s[k].y || 0));
    M.closePath(), l ? (M.lineWidth = 2, M.setLineDash([6, 6]), M.lineDashOffset = 0, M.strokeStyle = "rgba(0,0,0,0.96)", M.stroke(), M.lineDashOffset = -6, M.strokeStyle = "rgba(255,255,255,0.96)", M.stroke(), M.setLineDash([]), M.lineDashOffset = 0) : (M.lineWidth = 1.5, M.setLineDash([6, 4]), M.strokeStyle = `rgba(${p},${_},${b},1)`, M.stroke(), M.setLineDash([])), M.restore();
  }
  function cp() {
    m.mode === "frame" ? op() : m.mode === "unwrap" ? xg(!1) : wg(!1), t === "cutout" && Fg(), Eg(), sp(), A.fovValue = `${Math.round(m.viewFov)}°`, Math.abs(Number(m.outputPreviewAnim || 0) - Number(m.outputPreviewAnimTo || 0)) < 1e-6 && $e(), z.hasPresentedFrame || (z.hasPresentedFrame = !0, U.style.opacity = "1"), t === "cutout" && A.cameraPreview && (A.cameraPreview.settled = z.pendingStableLayoutFrames <= 0 && z.hasPresentedFrame && m.mode !== "frame");
    const n = hg();
    n ? (ne == null || ne.removeAttribute("data-stage-ready"), ne == null || ne.setAttribute("data-stage-loading-kind", n)) : (ne == null || ne.setAttribute("data-stage-ready", ""), ne == null || ne.removeAttribute("data-stage-loading-kind"));
  }
  function lp(n = m.interaction) {
    if (t !== "stickers" || m.mode !== "pano") return !1;
    const o = String((n == null ? void 0 : n.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(n == null ? void 0 : n.stickerSnapshots) && n.stickerSnapshots.length > 0 : !1;
  }
  function up() {
    e.__panoLiveStateOverride = h, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Eh();
  }
  function pe(n = {}) {
    var b, x, S, k, N, L, F, X, B, K;
    const o = !!n.localOnly, s = n.externalSync === !0, l = String(n.cause || ""), d = String(((b = m.interaction) == null ? void 0 : b.kind) || "");
    (!o || d === "view" || d === "pan_frame" || lp() || !!((x = m.viewTween) != null && x.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (z.backgroundDirty = !0), o && fl() && (m.livePaintInteractionRevision += 1, z.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (hs(), xa()), up(), s && ((k = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || k.call(S), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), s && !o && ((F = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || F.call(L, !0, !0), (K = (B = (X = ur) == null ? void 0 : X.canvas) == null ? void 0 : B.setDirty) == null || K.call(B, !0, !0)), z.dirty = !0;
  }
  function Bl() {
    const n = I.getBoundingClientRect(), o = Math.max(2, Math.round(n.width)), s = Math.max(2, Math.round(n.height));
    return I.width !== o || I.height !== s || U.width !== o || U.height !== s ? (I.width = o, I.height = s, U.width = o, U.height = s, z.backgroundDirty = !0, z.dirty = !0, t === "cutout" && (z.pendingStableLayoutFrames = Math.max(Number(z.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function ks(n = performance.now()) {
    var o;
    if (z.running) {
      if (z.lastTickTs = n, m.outputPreviewAnim !== m.outputPreviewAnimTo) {
        const s = Math.max(1, Number(m.outputPreviewAnimDurationMs)), l = W((n - Number(m.outputPreviewAnimStartTs || 0)) / s, 0, 1), p = m.outputPreviewAnimTo > m.outputPreviewAnimFrom ? B_(l) : U_(l);
        m.outputPreviewAnim = Gr(m.outputPreviewAnimFrom, m.outputPreviewAnimTo, p), z.dirty = !0, l >= 1 && (m.outputPreviewAnim = m.outputPreviewAnimTo);
      }
      if ((o = m.viewTween) != null && o.active) {
        const s = m.viewTween, l = W((n - s.startTs) / s.durationMs, 0, 1), d = $_(l);
        m.viewYaw = Ft(s.startYaw + s.deltaYaw * d), m.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * d, m.viewFov = s.startFov + (s.targetFov - s.startFov) * d, z.backgroundDirty = !0, z.dirty = !0, l >= 1 && (m.viewTween = null);
      }
      if (m.viewInertia.vx = Number(Lt.state.inertia.vx || 0), m.viewInertia.vy = Number(Lt.state.inertia.vy || 0), m.viewInertia.active = !!Lt.state.inertia.active, Lt.stepInertia(n) && (m.viewInertia.vx = Number(Lt.state.inertia.vx || 0), m.viewInertia.vy = Number(Lt.state.inertia.vy || 0), m.viewInertia.active = !!Lt.state.inertia.active, z.backgroundDirty = !0, z.dirty = !0), (z.dirty || n - z.lastSizeCheckTs >= 220) && (Bl(), z.lastSizeCheckTs = n), z.pendingStableLayoutFrames > 0 && (z.pendingStableLayoutFrames -= 1, z.dirty = !0), z.dirty) {
        if (z.pendingStableLayoutFrames > 0) {
          z.rafId = requestAnimationFrame(ks);
          return;
        }
        z.dirty = !1, cp();
      }
      z.rafId = requestAnimationFrame(ks);
    }
  }
  function fp() {
    z.running = !1, z.rafId && cancelAnimationFrame(z.rafId), z.rafId = 0;
  }
  function st() {
    i || (m.historyController.commitActionGroup(JSON.stringify(Df(h))), Es());
  }
  function Ps(n) {
    if (i) return;
    const o = n < 0 ? m.historyController.undo() : m.historyController.redo();
    if (Es(), !o) return;
    const s = JSON.parse(o);
    Object.keys(h).forEach((l) => delete h[l]), Object.assign(h, s), m.selectedId = t === "stickers" || t === "cutout" ? h.active.selected_sticker_id : h.active.selected_shot_id, m.selectedIds = m.selectedId ? [m.selectedId] : [], xr(), tr(), ze(), mr(), pe({ cause: "cutout_frame" });
  }
  function Ul() {
    var s, l;
    const n = Array.isArray((s = m.historyController) == null ? void 0 : s.entries) ? m.historyController.entries : [], o = Number((l = m.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && n.length > 1 && o > 0,
      canRedo: !i && n.length > 1 && o >= 0 && o < n.length - 1
    };
  }
  function tr() {
    nt();
    const n = Rb({
      editor: m,
      swatches: vo,
      paintColorPopOpen: ce ? !ce.hidden : !1,
      colorToCss: Ir,
      colorsApproximatelyEqual: _o,
      rgb01ToHsv: sc,
      hsv01ToRgb: oc,
      getBrushPresetIdForTool: ln,
      isActiveLassoTool: $h
    });
    if (Object.assign(A.paintDock, n), !n.visible) {
      ce && (ce.hidden = !0);
      return;
    }
    St && (clearTimeout(St), St = 0), q && (!n.colorEnabled && ce && !ce.hidden && (St = window.setTimeout(() => {
      ce.hidden = !0, A.paintDock.colorPopOpen = !1, St = 0;
    }, 170)), ce && (ce.style.setProperty("--picker-hue-color", n.pickerHueColor), ce.style.setProperty("--picker-sat", n.pickerSat), ce.style.setProperty("--picker-val", n.pickerVal), ce.style.setProperty("--picker-hue", n.pickerHue)), De && (De.style.left = n.pickerSvLeft, De.style.top = n.pickerSvTop), dt && (dt.style.left = n.pickerHueLeft));
  }
  function Cs() {
    const n = it();
    n && (m.panelLastValues = {
      yaw_deg: Number(n.yaw_deg || 0),
      pitch_deg: Number(n.pitch_deg || 0),
      hFOV_deg: Number(n.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(n.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(n.rot_deg || 0),
      roll_deg: Number(n.roll_deg || 0),
      aspect_id: Hi(n)
    }, ze());
  }
  function ze() {
    var be, Pe, Fe, Se;
    if (a) return;
    h.ui_settings = h.ui_settings || {};
    const n = Lb(h.ui_settings);
    if (c) {
      A.sidePanel = Ob({
        coverage: h.coverage,
        uiSettings: n,
        normalizeCoverageValue: Ot
      });
      return;
    }
    const o = it(), s = _r(), l = va();
    s.length > 1 && (m.panelLastValues = m.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && l !== "stroke" && (m.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (l === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (l === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: Hi(o)
    });
    const d = m.panelLastValues || (t === "stickers" || l === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = l === "stroke" ? null : o, _ = p || d, b = !!p;
    m.panelWasEnabled = b, hs();
    let x = null;
    if (t === "stickers" || t === "cutout") {
      const Y = [{ id: "", labelHtml: cc(t === "stickers" ? "No image" : "Nothing selected"), item: null }];
      t === "stickers" ? Pt().forEach((Ne, je) => {
        var Ye, Ke;
        const Ve = Tt(Ne) ? String(Ne.id || Mn) : String(((Ke = (Ye = h.assets) == null ? void 0 : Ye[Ne.asset_id]) == null ? void 0 : Ke.name) || Ne.asset_id || Ne.id), Be = `${je + 1}. ${Ve}${Tt(Ne) && $n(Ne) ? " (hidden)" : ""}`;
        Y.push({ id: Ne.id, labelHtml: ml({ item: Ne, label: Be, kind: "image" }), item: Ne, kind: "image" });
      }) : pl().forEach((Ne) => {
        Y.push({ id: Ne.item.id, labelHtml: ml(Ne), item: Ne.item, kind: Ne.kind });
      });
      const re = (p == null ? void 0 : p.id) || "", _e = Y.find((Ne) => Ne.id === re) || Y[0];
      x = {
        label: "Selection",
        open: !1,
        disabled: Y.length <= 1,
        currentLabelHtml: _e.labelHtml,
        items: Y.map((Ne) => ({ id: Ne.id, labelHtml: Ne.labelHtml, active: Ne.id === re }))
      };
    }
    const S = [], k = (Y, re, _e, Ne, je) => {
      const Ve = W(Number(_[Y] || 0), _e, Ne);
      S.push({
        key: Y,
        label: re,
        min: _e,
        max: Ne,
        step: je,
        value: Ve,
        displayValue: Y_(Ve),
        fillPct: W((Ve - _e) / Math.max(1e-6, Ne - _e) * 100, 0, 100),
        enabled: b && !i
      });
    }, N = [];
    s.length > 1 ? (N.push(`Selected objects: ${s.length}`), N.push("Multi-selection supports z-order and delete.")) : (k("yaw_deg", "Yaw", -180, 180, 0.1), k("pitch_deg", "Pitch", -90, 90, 0.1), k("hFOV_deg", "H FOV", 1, 179, 0.1), k("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || l === "image" ? k("rot_deg", "Rotation", -180, 180, 0.1) : k("roll_deg", "Roll", -180, 180, 0.1));
    const L = Array.isArray((Pe = (be = h == null ? void 0 : h.painting) == null ? void 0 : be.paint) == null ? void 0 : Pe.strokes) ? h.painting.paint.strokes.length : 0, F = Array.isArray((Se = (Fe = h == null ? void 0 : h.painting) == null ? void 0 : Fe.mask) == null ? void 0 : Se.strokes) ? h.painting.mask.strokes.length : 0, X = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((Y) => String((Y == null ? void 0 : Y.name) || "")) : [], B = kh(
      e,
      X.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), K = !!String((B == null ? void 0 : B.src) || "").trim() || us("pano_input_images").length > 0, ee = Array.isArray(Pt()) && Pt().length > 0 || L > 0, ye = F > 0, ie = [
      { key: "mask", label: "Mask", icon: Rt.circle_dashed_tool, visible: !!m.showMask, enabled: ye },
      { key: "objects", label: "Paint / Images", icon: Rt.image, visible: !!m.showObjects, enabled: ee },
      { key: "panorama", label: "Panorama", icon: Rt.globe, visible: !!m.showPanorama, enabled: K }
    ].map((Y) => ({
      ...Y,
      ariaLabel: `Toggle ${Y.label.toLowerCase()}`,
      tip: Y.visible ? "Hide" : "Show"
    }));
    A.sidePanel = Fb({
      coverage: h.coverage,
      readOnly: i,
      selectionPicker: x,
      enabled: b,
      selectedKind: l,
      selectedItems: s,
      params: S,
      notes: N,
      visibilityRows: ie,
      uiSettings: n,
      normalizeCoverageValue: Ot
    });
  }
  function Ea(n) {
    if (!n) return !1;
    if (String(n.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(n.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Gl(n) {
    if (i || t !== "stickers" && t !== "cutout" || !Ea(n)) return;
    const o = so("asset"), s = URL.createObjectURL(n);
    try {
      const l = await new Promise((_, b) => {
        const x = new Image();
        x.onload = () => _(x), x.onerror = () => b(new Error("image load failed")), x.src = s;
      });
      H.set(o, l);
      const d = so("st");
      h.stickers.push({
        id: d,
        asset_id: o,
        yaw_deg: m.viewYaw,
        pitch_deg: m.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: vn(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: yl()
      }), bn(h.stickers[h.stickers.length - 1]), As(), st(), ze(), $e(), pe();
      const p = (async () => {
        const _ = await ms(n, String(n.name || o));
        (Array.isArray(h.stickers) ? h.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (h.assets[o] = _, Yn(), yt(), ze(), $e(), pe());
      })();
      Qa.set(o, p);
      try {
        await p;
      } finally {
        Qa.delete(o);
      }
    } catch {
      delete h.assets[o], H.delete(o);
      const l = Array.isArray(h.stickers) ? h.stickers : [], d = l.filter((p) => String((p == null ? void 0 : p.asset_id) || "") === o);
      d.length && (h.stickers = l.filter((p) => String((p == null ? void 0 : p.asset_id) || "") !== o), d.some((p) => {
        var _;
        return String((p == null ? void 0 : p.id) || "") === String(((_ = m.selection) == null ? void 0 : _.id) || "");
      }) && bn(null), ze(), $e(), pe());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Kl(n) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const s = (l = o.files) == null ? void 0 : l[0];
      !s || typeof n != "function" || n(s);
    }, o.click();
  }
  function dp() {
    i || t !== "stickers" && t !== "cutout" || Kl((n) => {
      Gl(n);
    });
  }
  async function hp(n) {
    var S;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = it();
    if (!o || !mt(o) || Tt(o) || !Ea(n)) return;
    const s = String(o.id || ""), l = String(o.asset_id || ""), d = l ? jt(((S = h.assets) == null ? void 0 : S[l]) || null) : null, p = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = so("asset"), x = URL.createObjectURL(n);
    try {
      const k = await new Promise((L, F) => {
        const X = new Image();
        X.onload = () => L(X), X.onerror = () => F(new Error("image load failed")), X.src = x;
      });
      H.set(b, k), o.asset_id = b, o.vFOV_deg = vn(
        Number(o.hFOV_deg || 30),
        Number(k.naturalWidth || k.width || 1),
        Number(k.naturalHeight || k.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Dt(), st(), ze(), $e(), pe();
      const N = (async () => {
        const L = await ms(n, String(n.name || b));
        (Array.isArray(h.stickers) ? h.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === b) && (h.assets[b] = L, Yn(), yt(), ze(), $e(), pe());
      })();
      Qa.set(b, N);
      try {
        await N;
      } finally {
        Qa.delete(b);
      }
    } catch {
      delete h.assets[b], H.delete(b);
      const k = (Array.isArray(h.stickers) ? h.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === s) || null;
      k && String(k.asset_id || "") === b && (l && d && (h.assets[l] = d), k.asset_id = l, k.vFOV_deg = p, k.crop = _ ? { ..._ } : null), Dt(), ze(), $e(), pe();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function gp() {
    if (i) return;
    const n = it();
    !n || !mt(n) || Tt(n) || Kl((o) => {
      hp(o);
    });
  }
  async function pp() {
    if (i || t !== "stickers") return;
    const n = h.assets && typeof h.assets == "object" ? h.assets : {}, o = Object.entries(n).filter(([, l]) => {
      const d = String((l == null ? void 0 : l.type) || "").toLowerCase(), p = String((l == null ? void 0 : l.value) || "");
      return d === "dataurl" && p.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [l, d] of o)
      try {
        const p = String((d == null ? void 0 : d.value) || "");
        if (!p) continue;
        const _ = await fetch(p).then((N) => N.blob()), b = String(_.type || "image/png").split("/")[1] || "png", x = String((d == null ? void 0 : d.name) || `${l}.${b}`), S = new File([_], x, { type: _.type || "image/png" }), k = await ms(S, x);
        h.assets[l] = {
          ...k,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (yt(), pe());
  }
  function mp() {
    if (i || t !== "cutout") return;
    const n = Ge();
    if (n) {
      bn(n), m.mode = "pano", pt(
        Ft(Number(n.yaw_deg || 0)),
        W(Number(n.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), ze(), $e(), pe({ cause: "cutout_frame" });
      return;
    }
    const o = Math.max(0.1, Number((I == null ? void 0 : I.width) || 1) / Math.max(1, Number((I == null ? void 0 : I.height) || 1))), s = W(Number(m.viewFov || 90), 1, 179), l = W(Math.min(42, s * 0.42), 8, 96), d = W(hn * (2 * Math.atan(Math.tan(l * At * 0.5) / Math.max(0.1, o))), 6, 72), p = vh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Ft(Number(m.viewYaw || 0)),
      pitch_deg: W(Number(m.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: l,
      vFOV_deg: d,
      locked: !1
    });
    h.shots = [p], bn(p), As(), m.mode = "pano", st(), yt(), ze(), $e(), pe({ cause: "cutout_frame" });
  }
  function yp() {
    i || t === "cutout" && (h.shots = [], m.selectedId = null, m.selectedIds = [], m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, h.active.selected_shot_id = null, st(), yt(), ze(), pe());
  }
  function bp() {
    const n = Array.isArray(h.stickers) ? h.stickers : [], o = [];
    for (const s of n)
      Tt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function Wl(n, o, s = "Clear") {
    return new Promise((l) => {
      A.confirmDialog = {
        visible: !0,
        title: String(n || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: l
      };
    });
  }
  async function vp() {
    var s, l;
    if (i || !await Wl(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    h.painting = ea(null), xr();
    const o = bp();
    t === "stickers" ? (h.stickers = o, h.assets = {}, m.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], h.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, Yn()) : (h.stickers = o, h.assets = {}, h.shots = [], m.selectedId = null, m.selectedIds = [], h.active.selected_sticker_id = null, h.active.selected_shot_id = null, m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, Yn()), st(), yt(), ze(), $e(), pe();
  }
  async function _p(n) {
    var p, _, b, x;
    if (i) return;
    const o = n === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", l = Qn(o);
    if (!(!l.length && !(((p = m.interaction) == null ? void 0 : p.kind) === "draw" && ((_ = m.interaction) == null ? void 0 : _.layerKind) === o) || !await Wl(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = m.interaction) == null ? void 0 : b.kind) === "draw" && ((x = m.interaction) == null ? void 0 : x.layerKind) === o) {
        const S = jr();
        S && m.paintEngine.cancelActiveStroke(S), m.interaction = null;
      }
      l.length = 0, h.painting.raster_objects = er().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (Ue().length = 0), xr(), st(), yt(), ze(), $e(), tr(), pe();
    }
  }
  function xp() {
    if (i) return;
    const n = it();
    if (!n || !mt(n) || Tt(n)) return;
    const o = JSON.parse(JSON.stringify(n));
    o.id = so("st"), o.yaw_deg = Ft((o.yaw_deg || 0) + 8), o.z_index = yl(), h.stickers.push(o), h.active.selected_sticker_id = o.id, m.selectedId = o.id, m.selectedIds = [o.id], Dt(), st(), yt(), $e(), ze(), pe();
  }
  function Yl() {
    var s, l, d, p, _, b;
    if (i) return;
    const n = _r(), o = it();
    if (!(!o && n.length === 0)) {
      if (n.length > 1) {
        const x = new Set(n.filter((N) => Mt(N)).map((N) => String(N.actionGroupId || N.id || ""))), S = new Set(n.filter((N) => Vt(N)).map((N) => Ct(N.rasterObjectId || N.id || ""))), k = new Set(n.filter(mt).map((N) => String(N.id || "")));
        x.size > 0 && (h.painting.paint.strokes = (Array.isArray((l = (s = h.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? h.painting.paint.strokes : []).filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || ""))), h.painting.groups = Ue().filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), xr()), S.size > 0 && (h.painting.raster_objects = er().filter((N) => !S.has(String((N == null ? void 0 : N.id) || ""))), Zn()), k.size > 0 && (h.stickers = (Array.isArray(h.stickers) ? h.stickers : []).filter((N) => k.has(String((N == null ? void 0 : N.id) || "")) ? Tt(N) ? ($n(N) || (N.visible = !1), !0) : !1 : !0), Yn(), Dt()), m.selectedId = null, m.selectedIds = [], st(), yt(), ze(), $e(), pe();
        return;
      }
      if (Mt(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        h.painting.paint.strokes = (Array.isArray((p = (d = h.painting) == null ? void 0 : d.paint) == null ? void 0 : p.strokes) ? h.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== x), h.painting.groups = Ue().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== x), xr(), m.selectedId = null, m.selectedIds = [], st(), yt(), ze(), $e(), pe();
        return;
      }
      if (Vt(o)) {
        const x = Ct(o.rasterObjectId || o.id || "");
        h.painting.raster_objects = er().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== x), Zn(), m.selectedId = null, m.selectedIds = [], st(), yt(), ze(), $e(), pe();
        return;
      }
      if (t === "stickers" || mt(o)) {
        if (Tt(o)) {
          if ($n(o)) return;
          o.visible = !1, Dt(), st(), yt(), ze(), $e(), pe();
          return;
        }
        h.stickers = h.stickers.filter((x) => x.id !== o.id), Yn(), Dt(), m.selectedId = ((_ = h.stickers[0]) == null ? void 0 : _.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], h.active.selected_sticker_id = ((b = h.stickers[0]) == null ? void 0 : b.id) || null, st(), yt(), ze(), $e(), pe();
        return;
      }
      yp();
    }
  }
  function wp(n, o) {
    if (!n) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const L = String(n.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(L)) {
        const [B, K] = L.split(":").map((ee) => Number(ee));
        if (Number.isFinite(B) && Number.isFinite(K)) return B >= K;
      }
      const F = Number(n.hFOV_deg || 64), X = Number(n.vFOV_deg || 40);
      return Math.abs(F - X) > 1e-6 ? F >= X : Ui(n) >= 1;
    })();
    let [d, p] = s[String(o)] || s["1:1"];
    d >= p !== l && ([d, p] = [p, d]);
    const _ = d / p, b = W(Number(n.hFOV_deg || 64), 1, 179), x = W(Number(n.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * x)), k = W(S * Math.sqrt(_), 1, 179), N = W(S / Math.sqrt(_), 1, 179);
    n.hFOV_deg = k, n.vFOV_deg = N, n.aspect_id = String(o);
  }
  function Sp(n) {
    if (!n) return;
    const o = Math.max(1, Number(n.hFOV_deg || 90)), s = Math.max(1, Number(n.vFOV_deg || 60));
    n.hFOV_deg = s, n.vFOV_deg = o, n.aspect_id = Cn(n);
  }
  function ql() {
    Hn().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Np() {
    if (i) return;
    const n = _r();
    if (!it() || n.length === 0) return;
    ql();
    const s = Hn(), l = new Set(n.map((b) => mt(b) ? `sticker:${String(b.id || "")}` : Vt(b) ? `rasterObject:${Ct(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], p = [];
    if (s.forEach((b) => {
      var S, k;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((k = b.item) == null ? void 0 : k.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? d.push(b) : p.push(b);
    }), !d.length || d[d.length - 1] === s[s.length - 1]) return;
    [...p, ...d].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Dt(), st(), yt(), $e(), pe();
  }
  function Mp() {
    if (i) return;
    const n = _r();
    if (!it() || n.length === 0) return;
    ql();
    const s = Hn(), l = new Set(n.map((b) => mt(b) ? `sticker:${String(b.id || "")}` : Vt(b) ? `rasterObject:${Ct(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], p = [];
    if (s.forEach((b) => {
      var S, k;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((k = b.item) == null ? void 0 : k.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? d.push(b) : p.push(b);
    }), !d.length || d[0] === s[0]) return;
    [...d, ...p].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Dt(), st(), yt(), $e(), pe();
  }
  function kp() {
    i || (h.projection_model = "pinhole_rectilinear", h.alpha_mode = "straight", f && (h.output_preset = Dc(f.value, Number(h.output_preset || 2048))), g && (h.coverage = Ot(g.value)), y && (h.bg_color = String(y.value || h.bg_color || "#00ff00")), mr(), e.setDirtyCanvas(!0, !0));
  }
  function mr() {
    var o;
    if (i) return;
    h.coverage = Ot(h.coverage);
    const n = JSON.stringify(h);
    v && (v.value = n, (o = v.callback) == null || o.call(v, n));
  }
  function Da() {
    h.ui_settings = Q_(h.ui_settings), i || mr();
  }
  function yt() {
    var n;
    i || (mr(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0));
  }
  function Pp() {
    i || dg() && Il().catch((n) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", n);
    });
  }
  function Cp(n = {}) {
    var l, d, p, _, b, x, S, k, N, L;
    const o = n.syncPreview !== !1, s = n.syncGraph !== !1;
    o && ((d = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || d.call(l), (_ = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || _.call(p), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), s && ((S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (L = (N = (k = ur) == null ? void 0 : k.canvas) == null ? void 0 : N.setDirty) == null || L.call(N, !0, !0));
  }
  function As() {
    m.primaryTool !== "cursor" && (m.primaryTool = "cursor", tr(), ze());
  }
  function Jn(n) {
    const o = I.getBoundingClientRect();
    return {
      x: (n.clientX - o.left) / o.width * I.width,
      y: (n.clientY - o.top) / o.height * I.height
    };
  }
  function La(n) {
    const o = I.getBoundingClientRect();
    return {
      x: Number(n.clientX) - Number(o.left || 0),
      y: Number(n.clientY) - Number(o.top || 0)
    };
  }
  function Xl() {
    return m.mode === "pano" || m.mode === "unwrap";
  }
  function Ge() {
    if (t !== "cutout") return null;
    const n = Array.isArray(h.shots) ? h.shots : [];
    if (!n.length) return null;
    const o = String(h.active.selected_shot_id || "");
    return n.find((s) => String((s == null ? void 0 : s.id) || "") === o) || n[0] || null;
  }
  function zt(n = Ge()) {
    var _, b, x;
    if (!n || !I) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(I.width || 0) - 48),
      h: Math.max(1, Number(I.height || 0) - 48)
    }, s = W(Ui(n), 0.1, 10);
    let l = o.w, d = Math.max(1, Math.round(l / s));
    d > o.h && (d = o.h, l = Math.max(1, Math.round(d * s)));
    const p = Math.max(0.1, Number(((_ = m.frameView) == null ? void 0 : _.zoom) || 1));
    return l *= p, d *= p, {
      x: Math.round(o.x + (o.w - l) * 0.5 + Number(((b = m.frameView) == null ? void 0 : b.panX) || 0)),
      y: Math.round(o.y + (o.h - d) * 0.5 + Number(((x = m.frameView) == null ? void 0 : x.panY) || 0)),
      w: Math.max(1, Math.round(l)),
      h: Math.max(1, Math.round(d))
    };
  }
  function Is() {
    return t === "cutout" && !!Ge();
  }
  function wr(n, o = performance.now()) {
    if (m.mode === "unwrap") {
      const p = sn(), _ = (n.x - p.x) / Math.max(1, p.w), b = (n.y - p.y) / Math.max(1, p.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: W(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = ps(n.x, n.y), { lon: l, lat: d } = vs(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - d / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Sr(n, o, s = performance.now()) {
    const l = zt(o);
    if (!l) return null;
    const d = {
      x: (Number(n.x) - l.x) / Math.max(1, l.w),
      y: (Number(n.y) - l.y) / Math.max(1, l.h)
    }, p = Ss(o, d);
    if (!p) return null;
    const { lon: _, lat: b } = vs(p);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Ap(n, o) {
    var S;
    const s = Ge(), l = zt(s);
    if (!s || !l) return !1;
    const d = Math.max(0.1, Number(((S = m.frameView) == null ? void 0 : S.zoom) || 1)), p = W(d * Number(o), 0.25, 12);
    if (Math.abs(p - d) < 1e-6) return !1;
    const _ = (Number(n.x) - l.x) / Math.max(1e-6, l.w), b = (Number(n.y) - l.y) / Math.max(1e-6, l.h);
    m.frameView.zoom = p;
    const x = zt(s);
    return x ? (m.frameView.panX += Number(n.x) - (x.x + x.w * _), m.frameView.panY += Number(n.y) - (x.y + x.h * b), !0) : !1;
  }
  function Ip(n, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function ln(n) {
    const o = String(n || "").trim();
    return o === "eraser" ? Br : rr[o] ? o : m.activeBrushPresetId || Br;
  }
  function Zl() {
    return (m.primaryTool === "paint" || m.primaryTool === "mask") && (Xl() || Is());
  }
  function Jl() {
    var n;
    return Zl() && ((n = m.pointerPos) == null ? void 0 : n.inside) === !0;
  }
  function Ra(n, o = !0) {
    const s = Number((n == null ? void 0 : n.x) || 0), l = Number((n == null ? void 0 : n.y) || 0), d = o !== !1, p = m.pointerPos || { x: 0, y: 0, inside: !1 }, _ = p.inside !== d || Math.abs(p.x - s) > 0.01 || Math.abs(p.y - l) > 0.01;
    return m.pointerPos = { x: s, y: l, inside: d }, _;
  }
  function Tp() {
    var k, N;
    if (!Jl()) return null;
    const n = m.primaryTool === "mask" ? "mask" : "paint", o = n === "mask" ? m.maskTool : m.paintTool, s = ln(o), l = rr[s] || rr[Br], d = Number(m.brushSizes[s] ?? 10), p = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, p * 0.5), b = n === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : lr(m.paintColor), x = n === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : W(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = n === "mask" ? 0.95 : o === "eraser" ? 0.75 : W(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: n,
      toolKind: o,
      preset: l,
      radius: _,
      fillStyle: Ir(b, x),
      strokeStyle: Ir(b, S),
      x: Number(((k = m.pointerPos) == null ? void 0 : k.x) || 0),
      y: Number(((N = m.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function Ep() {
    var L, F, X;
    const n = Tp();
    if (!se) return;
    if (!n) {
      se.style.display = "none";
      return;
    }
    let o = n.radius * 2, s = n.radius * 2, l = "999px", d = 0, p = n.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let k = Number(n.hotspotX ?? o * 0.5), N = Number(n.hotspotY ?? s * 0.5);
    if (n.toolKind === "lasso_fill")
      o = jo, s = jo, l = "0", _ = "0", b = "none", k = z_, N = j_, p = K_(n.fillStyle, S, x);
    else if (n.layerKind === "mask")
      p = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (n.toolKind === "marker") {
      const B = Math.max(1, Number(((L = n.preset) == null ? void 0 : L.aspect) ?? 1));
      o = Math.max(10, n.radius * 2 * B), s = Math.max(6, n.radius * 2), l = `${Math.min(6, s * 0.42)}px`, d = Number(((X = (F = n.preset) == null ? void 0 : F.angle) == null ? void 0 : X.value) || 0) * hn;
    } else n.toolKind === "brush" ? p = `radial-gradient(circle at 50% 50%, ${n.strokeStyle} 0%, ${n.fillStyle} 45%, rgba(0,0,0,0) 100%)` : n.toolKind === "eraser" && (p = "rgba(255,255,255,0.14)");
    se.style.display = "block", se.style.width = `${Math.round(o)}px`, se.style.height = `${Math.round(s)}px`, se.style.borderRadius = l, se.style.border = _, se.style.boxShadow = b, se.style.background = p, se.style.backgroundRepeat = "no-repeat", se.style.backgroundPosition = "center", se.style.backgroundSize = "contain", se.style.transform = `translate(${Math.round(n.x - k)}px, ${Math.round(n.y - N)}px) rotate(${d}deg)`;
  }
  function Dp() {
    var ye;
    if (!te || !we) return;
    const n = m.primaryTool === "mask" ? "mask" : "paint", o = n === "mask" ? m.maskTool : m.paintTool;
    if (o === "lasso_fill") return;
    const s = ln(o), l = rr[s] || rr[Br], d = Number(m.brushSizes[s] ?? 10), p = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, p * 0.5), b = o === "eraser", x = n === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : lr(m.paintColor), S = n === "mask" ? Ir(x, 0.22) : b ? "rgba(255,255,255,0.14)" : Ir(x, W(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), k = n === "mask" ? Ir(x, 0.96) : b ? "rgba(255,255,255,0.72)" : Ir(x, W(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let N = _ * 2, L = _ * 2, F = "999px", X = 0, B = S;
    const K = "rgba(222, 222, 222, 0.72)", ee = "rgba(52, 52, 52, 0.72)";
    if (n === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ie = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      N = Math.max(16, _ * 2 * ie), L = Math.max(10, _ * 2), F = `${Math.min(8, L * 0.42)}px`, X = Number(((ye = l == null ? void 0 : l.angle) == null ? void 0 : ye.value) || 0) * hn;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${k} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, _ * 1.8), L = N, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${k} 43%, ${k} 58%, rgba(0,0,0,0) 59%)`) : b && (B = "rgba(255,255,255,0.12)");
    we.style.width = `${Math.round(N)}px`, we.style.height = `${Math.round(L)}px`, we.style.borderRadius = F, we.style.background = B, we.style.border = `1px solid ${K}`, we.style.boxShadow = `0 0 0 1px ${ee}`, we.style.transform = `rotate(${X}deg)`, ot && (clearTimeout(ot), ot = 0), te.classList.remove("fade-out"), te.classList.add("show");
  }
  function Oa() {
    !te || !te.classList.contains("show") || (te.classList.add("fade-out"), ot && clearTimeout(ot), ot = window.setTimeout(() => {
      te.classList.remove("show", "fade-out"), ot = 0;
    }, 180));
  }
  function Lp(n, o, s, l) {
    const d = ln(o), p = rr[d] || rr[Br], _ = m.brushSizes[d] ?? 10, b = Math.max(1, _) * Math.max(0.1, p.sizeScale ?? 1), x = Ip(l, b), S = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), k = {
      id: ai(n),
      actionGroupId: ai("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: n,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: n === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((N) => ({ ...N })),
        points: S.map((N) => ({ ...N }))
      }
    };
    return kf(k, p), Number(p.aspect ?? 1), Number(k.aspect ?? 1), String(k.stampKind || ""), Number(k.size || 0), String(k.radiusModel || ""), Number(k.radiusValue || 0), { ...k.targetSpace }, k;
  }
  function Rp(n, o, s, l) {
    const d = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), p = ln(o), _ = rr[p] || rr[Br], b = {
      id: ai(n),
      actionGroupId: ai("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: n,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: n === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: d.map((x) => ({ ...x }))
      }
    };
    return kf(b, _), Number(_.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function Qn(n) {
    const o = h.painting || (h.painting = ea(null)), s = o[n] || (o[n] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function Op(n, o, s = performance.now()) {
    let l;
    if (m.mode === "frame") {
      const S = Ge();
      if (!S) return !1;
      l = Sr(o, S, s);
    } else
      l = wr(o, s);
    const d = n.stroke.geometry.rawPoints || n.stroke.geometry.points, p = n.stroke.geometry.points, _ = d[d.length - 1];
    if (_) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), k = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (S < 15e-4 && k < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...b }), p.push({ ...b });
    const x = jr();
    if (x) {
      const S = m.paintEngine.ensureTarget(x);
      m.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), n.stroke);
    }
    return !0;
  }
  function Fp(n, o, s = performance.now()) {
    var _, b;
    let l;
    if (m.mode === "frame") {
      const x = Ge();
      if (!x) return !1;
      l = Sr(o, x, s);
    } else
      l = wr(o, s);
    const d = (b = (_ = n == null ? void 0 : n.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(d)) return !1;
    const p = d[d.length - 1];
    if (p) {
      const x = Math.abs(Number(l.u ?? l.x ?? 0) - Number(p.u ?? p.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(p.v ?? p.y ?? 0));
      if (x < 15e-4 && S < 15e-4) return !1;
    }
    return d.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Vp(n) {
    var ie, be, Pe, Fe, Se;
    const o = (n == null ? void 0 : n.stroke) || null;
    if (!o || (n == null ? void 0 : n.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Ia();
    const s = jr(), l = Ci(s.width, s.height);
    if (!jl(l, o, { w: s.width, h: s.height })) return !1;
    const d = ((be = (ie = l.ctx) == null ? void 0 : ie.getImageData(0, 0, s.width, s.height)) == null ? void 0 : be.data) || null;
    if (!d) return !1;
    const p = new Map(Ue().map((Y) => [String((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "").trim(), Y ? { ...Y } : null])), _ = [], b = [], x = [...er().filter((Y) => String((Y == null ? void 0 : Y.layerKind) || "paint") !== "paint")];
    let S = !1, k = Hn().reduce((Y, re) => Math.max(Y, Number((re == null ? void 0 : re.z_index) || 0)), -1) + 1;
    function N(Y, re, _e, Ne = 8) {
      let je = re, Ve = _e, Be = -1, Ye = -1;
      for (let Ke = 0; Ke < _e; Ke += 1)
        for (let qe = 0; qe < re; qe += 1)
          Y[(Ke * re + qe) * 4 + 3] <= Ne || (qe < je && (je = qe), Ke < Ve && (Ve = Ke), qe > Be && (Be = qe), Ke > Ye && (Ye = Ke));
      return Be < je || Ye < Ve ? null : { minX: je, minY: Ve, maxX: Be, maxY: Ye };
    }
    const L = N(d, s.width, s.height, 8);
    if (!L) return !1;
    function F(Y, re) {
      return !Y || !re ? !1 : !(Y.maxX < re.minX || re.maxX < Y.minX || Y.maxY < re.minY || re.maxY < Y.minY);
    }
    function X(Y, re) {
      const _e = an((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "", "paint", re);
      if (!_e) return null;
      const Ne = _e.centerUv.u - _e.halfW, je = _e.centerUv.u + _e.halfW, Ve = _e.centerUv.v - _e.halfH, Be = _e.centerUv.v + _e.halfH, Ye = s.width, Ke = s.height;
      return {
        minX: Math.floor((Ne % 1 + 1) % 1 * Ye),
        maxX: Math.ceil((je % 1 + 1) % 1 * Ye),
        minY: Math.floor(W(Ve, 0, 1) * Ke),
        maxY: Math.ceil(W(Be, 0, 1) * Ke),
        wraps: je - Ne >= 1 || Ne < 0 || je > 1
      };
    }
    function B(Y) {
      const re = (Y == null ? void 0 : Y.bbox) || null;
      if (!re) return null;
      const _e = (Y == null ? void 0 : Y.transform) || {}, Ne = s.width, je = s.height, Ve = Number(re.u0 || 0) + Number(_e.du || 0), Be = Number(re.u1 || 0) + Number(_e.du || 0), Ye = Number(re.v0 || 0) + Number(_e.dv || 0), Ke = Number(re.v1 || 0) + Number(_e.dv || 0);
      return {
        minX: Math.floor((Ve % 1 + 1) % 1 * Ne),
        maxX: Math.ceil((Be % 1 + 1) % 1 * Ne),
        minY: Math.floor(W(Ye, 0, 1) * je),
        maxY: Math.ceil(W(Ke, 0, 1) * je),
        wraps: Be - Ve >= 1 || Ve < 0 || Be > 1
      };
    }
    function K(Y) {
      return Y ? Y.wraps ? F(L, { minX: 0, maxX: Y.maxX, minY: Y.minY, maxY: Y.maxY }) || F(L, { minX: Y.minX, maxX: s.width - 1, minY: Y.minY, maxY: Y.maxY }) : F(L, Y) : !0;
    }
    function ee(Y) {
      if (!Y) return { touched: !1, canvas: null };
      const re = Ci(s.width, s.height, { readback: !0 });
      re.ctx.drawImage(Y, 0, 0);
      const _e = re.ctx.getImageData(0, 0, s.width, s.height);
      re.ctx.save(), re.ctx.globalCompositeOperation = "destination-out", re.ctx.drawImage(l.canvas, 0, 0), re.ctx.restore();
      const Ne = re.ctx.getImageData(0, 0, s.width, s.height);
      for (let je = 0; je < s.width * s.height; je += 1) {
        if (d[je * 4 + 3] <= 8) continue;
        const Be = _e.data[je * 4 + 3], Ye = Ne.data[je * 4 + 3];
        if (Be > Ye)
          return { touched: !0, canvas: re.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ye(Y, re, _e) {
      const Ne = Number(_e == null ? void 0 : _e.z_index), je = tp(Y, re, _e).map((Ve, Be) => ({
        ...Ve,
        z_index: Number.isFinite(Ne) ? Ne + Be * 1e-3 : k + Be * 1e-3
      }));
      return je.length && (k = Math.max(k, ...je.map((Ve) => Number((Ve == null ? void 0 : Ve.z_index) || 0))) + 1), je;
    }
    for (const Y of Ue()) {
      const re = String((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "").trim();
      if (!re) continue;
      const _e = vr(re, "paint");
      if (!K(X(Y, _e))) {
        b.push(Y), _.push(..._e);
        continue;
      }
      const Ne = ((Fe = (Pe = m.paintEngine) == null ? void 0 : Pe.getGroupTarget) == null ? void 0 : Fe.call(Pe, re)) || null, je = ((Se = Ne == null ? void 0 : Ne.committedPaint) == null ? void 0 : Se.canvas) || null;
      if (!je) {
        b.push(Y), _.push(..._e);
        continue;
      }
      const Ve = ee(je);
      if (!Ve.touched || !Ve.canvas) {
        b.push(Y), _.push(..._e);
        continue;
      }
      S = !0;
      const Be = ye(Ve.canvas, "paint", p.get(re) || Y || {});
      x.push(...Be);
    }
    for (const Y of er().filter((re) => String((re == null ? void 0 : re.layerKind) || "paint") === "paint")) {
      if (!K(B(Y))) {
        x.push(Y);
        continue;
      }
      const re = Cl(Y, null);
      if (!re) {
        x.push(Y);
        continue;
      }
      const _e = ee(re);
      if (!_e.touched || !_e.canvas) {
        x.push(Y);
        continue;
      }
      S = !0;
      const Ne = ye(_e.canvas, "paint", Y);
      x.push(...Ne);
    }
    return S ? (h.painting.paint.strokes = _, h.painting.groups = b.sort((Y, re) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((re == null ? void 0 : re.z_index) || 0)), h.painting.raster_objects = x.sort((Y, re) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((re == null ? void 0 : re.z_index) || 0)), Gn({ preservePanelValues: !1 }), !0) : !1;
  }
  function Hp(n) {
    var p, _, b, x;
    const o = ((p = n == null ? void 0 : n.stroke) == null ? void 0 : p.geometry) || null;
    if (!o) return !1;
    const s = String(((_ = n == null ? void 0 : n.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (n.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Ns(o.rawPoints || o.points || [], n.stroke.targetSpace, !0)), Vp(n);
    const l = n.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && ul((b = n.stroke) == null ? void 0 : b.actionGroupId), Qn(n.layerKind).push(n.stroke), !0);
    const d = o.rawPoints || o.points || [];
    return d.length < 1 ? !1 : (o.processedPoints = Ns(d, n.stroke.targetSpace, !0), l && ul((x = n.stroke) == null ? void 0 : x.actionGroupId), Qn(n.layerKind).push(n.stroke), !0);
  }
  function Ql(n) {
    var s;
    if (t === "cutout" && m.mode === "frame") {
      const l = Ge(), d = zt(l);
      if (!l || !d || !(Number((n == null ? void 0 : n.x) || 0) >= Number(d.x || 0) && Number((n == null ? void 0 : n.x) || 0) <= Number(d.x || 0) + Number(d.w || 0) && Number((n == null ? void 0 : n.y) || 0) >= Number(d.y || 0) && Number((n == null ? void 0 : n.y) || 0) <= Number(d.y || 0) + Number(d.h || 0))) return null;
      const _ = Sr(n, l, performance.now()), b = _ ? qn(_) : null;
      if (b)
        for (const S of ws()) {
          if (!mt(S)) continue;
          const k = Ii(S, b);
          if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
            const N = Et(S);
            if (N != null && N.visible) return { item: S, geom: N };
          }
        }
      const x = as(!1).slice().sort((S, k) => Number((k == null ? void 0 : k.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of x) {
        if (S.type === "strokeGroup") {
          const L = jn(rn("paint", S.actionGroupId || S.id || ""));
          if (!L) continue;
          const F = Et(L);
          if (!(F != null && F.visible)) continue;
          const X = Array.isArray(F.strokePaths) ? F.strokePaths : [];
          for (const B of X) {
            const K = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!K.length) continue;
            if (B.closed && K.length >= 3 && Ur(n, K)) return { item: L, geom: F };
            const ee = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let ye = 0; ye < K.length - 1; ye += 1)
              if (ac(n, K[ye], K[ye + 1]) <= ee * ee) return { item: L, geom: F };
            if (K.length === 1 && fn(n, K[0]) <= ee * ee) return { item: L, geom: F };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const L = zn(nn(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!L) continue;
          const F = Et(L);
          if (Pl(L, F, n, _)) return { item: L, geom: F };
          continue;
        }
        const k = S.item;
        if (!k || !mt(k) || !b) continue;
        const N = Ii(k, b);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const L = Et(k);
          if (L != null && L.visible) return { item: k, geom: L };
        }
      }
      return null;
    }
    const o = [
      ...as(!1).slice().sort((l, d) => Number((d == null ? void 0 : d.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var d;
        return l.type === "strokeGroup" ? jn(rn("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? zn(nn(((d = l.item) == null ? void 0 : d.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? ws().filter((l) => cr(l)) : []
    ];
    for (const l of o) {
      if (Mt(l)) {
        const p = Et(l);
        if (!(p != null && p.visible)) continue;
        const _ = Array.isArray(p.strokePaths) ? p.strokePaths : [];
        for (const b of _) {
          const x = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!x.length) continue;
          if (b.closed && x.length >= 3 && Ur(n, x)) return { item: l, geom: p };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let k = 0; k < x.length - 1; k += 1)
            if (ac(n, x[k], x[k + 1]) <= S * S) return { item: l, geom: p };
          if (x.length === 1 && fn(n, x[0]) <= S * S) return { item: l, geom: p };
        }
        continue;
      }
      if (Vt(l)) {
        const p = Et(l);
        if (!(p != null && p.visible)) continue;
        if (Pl(l, p, n)) return { item: l, geom: p };
        continue;
      }
      const d = Et(l);
      if (d.visible && Ur(n, d.corners))
        return { item: l, geom: d };
    }
    return null;
  }
  function Ts(n, o) {
    if (!n || !n.visible) return { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    if (n.kind === "strokeGroup") {
      const l = n.corners.findIndex((p) => fn(p, o) <= 121);
      if (l >= 0) {
        const p = n.corners[l], _ = p.x - n.center.x, b = p.y - n.center.y, x = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: x };
      }
      const d = Array.isArray(n.strokePaths) ? n.strokePaths : [];
      for (const p of d) {
        const _ = Array.isArray(p == null ? void 0 : p.points) ? p.points : [];
        if (p.closed && _.length >= 3 && Ur(o, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((p == null ? void 0 : p.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < _.length - 1; x += 1)
          if (ac(o, _[x], _[x + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return Ur(o, n.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (n.kind === "rasterObject") {
      const l = n.corners.findIndex((d) => fn(d, o) <= 121);
      if (l >= 0) {
        const d = n.corners[l], p = d.x - n.center.x, _ = d.y - n.center.y, b = p * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      return Ur(o, n.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(n.edgeMidpoints)) {
      const l = n.edgeMidpoints.find((d) => fn(d, o) <= 169);
      if (l) {
        const d = l.edge === "left" || l.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = n.corners.findIndex((l) => fn(l, o) <= 121);
    if (s >= 0) {
      const l = n.corners[s], d = l.x - n.center.x, p = l.y - n.center.y, _ = d * p >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return fn(n.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Ur(o, n.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
  }
  function eu(n, o) {
    return {
      x0: Math.min(Number((n == null ? void 0 : n.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((n == null ? void 0 : n.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((n == null ? void 0 : n.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((n == null ? void 0 : n.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function zp(n, o) {
    return !!n && !!o && Number(o.x) >= Number(n.x0) && Number(o.x) <= Number(n.x1) && Number(o.y) >= Number(n.y0) && Number(o.y) <= Number(n.y1);
  }
  function jp(n, o) {
    if (!n || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((d) => zp(n, d))) return !0;
    const s = (Number(n.x0) + Number(n.x1)) * 0.5, l = (Number(n.y0) + Number(n.y1)) * 0.5;
    return !!Ur({ x: s, y: l }, o.corners);
  }
  function ht(n) {
    if (Ep(), m.interaction) {
      m.interaction.kind === "paint_stroke" || m.interaction.kind === "paint_lasso_fill" ? I.style.cursor = "none" : m.interaction.kind === "view" || m.interaction.kind === "pan_frame" ? I.style.cursor = "grabbing" : m.interaction.kind === "move" || m.interaction.kind === "move_multi" || m.interaction.kind === "move_stroke_group" || m.interaction.kind === "move_raster_object" ? I.style.cursor = "move" : m.interaction.kind === "scale" || m.interaction.kind === "scale_x" || m.interaction.kind === "scale_y" || m.interaction.kind === "scale_raster_object" ? I.style.cursor = m.interaction.cursor || "nwse-resize" : m.interaction.kind === "rotate" ? I.style.cursor = "grabbing" : I.style.cursor = "default";
      return;
    }
    if (Jl()) {
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
    const o = it(), s = o ? Et(o) : null, l = o ? on(o) : !1, d = l ? { kind: "none", cursor: "default" } : Ts(s, n);
    if (!l && d.kind !== "none") {
      I.style.cursor = d.cursor;
      return;
    }
    if (m.primaryTool === "cursor" && Ql(n)) {
      I.style.cursor = "default";
      return;
    }
    I.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function $e() {
    var d, p;
    if (!ae) return;
    const n = it(), o = _r();
    if (!n && o.length === 0 || m.interaction) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = va(), l = Vb({
      type: t,
      selected: n,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? cs(o) : Et(n),
      allLocked: ls(o),
      selectedLocked: on(n),
      activeAspect: Hi(n),
      cutoutAspectOpen: m.cutoutAspectOpen,
      isExternalSticker: Tt,
      isStickerHidden: $n,
      canRestoreSelectedToInitial: Kh,
      iconSet: Rt
    });
    if (!l.visible) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    A.selectionMenu = {
      visible: !0,
      left: ((d = A.selectionMenu) == null ? void 0 : d.left) ?? l.left ?? 0,
      top: ((p = A.selectionMenu) == null ? void 0 : p.top) ?? l.top ?? 0,
      items: l.items
    }, requestAnimationFrame(() => {
      var L, F, X;
      if (!ae || A.selectionMenu.visible !== !0) return;
      const _ = ae.getBoundingClientRect(), b = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, x = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40, S = 14;
      let k = W((Number(((L = l.anchor) == null ? void 0 : L.minX) || 0) + Number(((F = l.anchor) == null ? void 0 : F.maxX) || 0)) * 0.5 - b * 0.5, S, I.width - b - S), N = Number(((X = l.anchor) == null ? void 0 : X.maxY) || 0) + 18;
      if (!Number.isFinite(k) || !Number.isFinite(N) || N + x > I.height - S) {
        A.selectionMenu.visible = !1;
        return;
      }
      A.selectionMenu.left = k, A.selectionMenu.top = N;
    });
  }
  function Fa() {
    Q.timer && (clearTimeout(Q.timer), Q.timer = 0), Q.target = null, A.tooltip.visible = !1, A.tooltip.text = "", A.tooltip.variant = "";
  }
  function $p(n) {
    if (!me || !n || !n.isConnected) return;
    const o = String(n.getAttribute("data-tip") || "").trim();
    if (!o) return;
    A.tooltip.text = o, A.tooltip.visible = !0;
    const s = n;
    requestAnimationFrame(() => {
      var X, B;
      if (Q.target !== s || !me || !(s != null && s.isConnected)) return;
      const l = ne.getBoundingClientRect(), d = s.getBoundingClientRect(), p = 8, _ = 12, b = Math.round(Number(((X = me.getBoundingClientRect()) == null ? void 0 : X.width) || 0)) || 100, x = Math.round(Number(((B = me.getBoundingClientRect()) == null ? void 0 : B.height) || 0)) || 24, S = !!s.closest(".pano-floating-left"), k = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let N = "", L = d.left - l.left + d.width * 0.5 - b * 0.5, F = d.top - l.top - x - _;
      if (S)
        N = "tool-rail", L = d.right - l.left + 10, F = d.top - l.top + d.height * 0.5 - x * 0.5, L = W(L, p, Math.max(p, l.width - b - p)), F = W(F, p, Math.max(p, l.height - x - p));
      else if (k) {
        N = "footer";
        const K = s.closest(".pano-paint-footer"), ee = K ? K.getBoundingClientRect() : d;
        L = ee.left - l.left + ee.width * 0.5 - b * 0.5, F = ee.bottom - l.top + 5, L = W(L, p, Math.max(p, l.width - b - p)), F = Math.max(p, F);
      }
      L = W(L, p, Math.max(p, l.width - b - p)), F = Math.max(p, F), A.tooltip.left = L, A.tooltip.top = F, A.tooltip.variant = N, A.tooltip.visible = !0;
    });
  }
  const Lt = ts({
    getView: () => ({ yaw: m.viewYaw, pitch: m.viewPitch, fov: m.viewFov }),
    setView: (n) => {
      m.viewYaw = Ft(Number(n.yaw || 0)), m.viewPitch = W(Number(n.pitch || 0), -89.9, 89.9), m.viewFov = W(Number(n.fov || m.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const n = I.getBoundingClientRect();
      return {
        w: Math.max(1, Number(n.width || I.clientWidth || 0)),
        h: Math.max(1, Number(n.height || I.clientHeight || 0))
      };
    },
    getInvert: () => {
      var n, o;
      return {
        x: (n = h.ui_settings) != null && n.invert_view_x ? -1 : 1,
        y: (o = h.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: sn,
    onInteraction: () => {
      z.backgroundDirty = !0, z.dirty = !0;
    }
  });
  I.onpointerdown = (n) => {
    const o = Jn(n);
    if (Ra(o, !0), m.viewTween = null, Lt.state.inertia.active = !1, Lt.state.inertia.vx = 0, Lt.state.inertia.vy = 0, n.button === 1) {
      if (n.preventDefault(), m.mode === "frame")
        m.interaction = { kind: "pan_frame", last: o };
      else {
        const b = m.mode === "unwrap" ? o : La(n);
        m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, n.pointerId, performance.now());
      }
      ht(o), I.setPointerCapture(n.pointerId);
      return;
    }
    if (n.button !== 0) return;
    if (i) {
      if (m.mode === "pano") {
        const b = La(n);
        m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, n.pointerId, performance.now()), ht(o), I.setPointerCapture(n.pointerId);
      }
      return;
    }
    if (ce && !ce.hidden)
      return;
    if ((m.primaryTool === "paint" || m.primaryTool === "mask") && (Xl() || Is())) {
      const b = m.primaryTool === "mask" ? "mask" : "paint", x = m.primaryTool === "mask" ? m.maskTool : m.paintTool, S = m.mode === "frame" && Is() ? Ge() : null, k = { kind: "ERP_GLOBAL" }, N = S ? Sr(o, S, performance.now()) : wr(o, performance.now());
      m.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: ai("live"),
        stroke: x === "lasso_fill" ? Rp(b, x, [N], k) : Lp(b, x, [N], k)
      }, ki();
      const L = jr();
      if (L)
        if (m.paintEngine.beginStroke(m.interaction.stroke, L), m.interaction.kind === "paint_stroke") {
          const F = m.paintEngine.ensureTarget(L), X = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), B = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          m.paintEngine.appendStrokePoint(F, X, B, m.interaction.stroke);
        } else
          m.paintEngine.updateActiveStroke(m.interaction.stroke, L);
      ht(o), I.setPointerCapture(n.pointerId), pe();
      return;
    }
    const s = _r(), l = it(), d = s.length > 1 ? cs(s) : l ? Et(l) : null;
    if (m.primaryTool === "cursor" && (n.ctrlKey || n.metaKey)) {
      m.interaction = { kind: "marquee_select", start: o, current: o }, ht(o), I.setPointerCapture(n.pointerId), pe({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (d != null && d.visible)) {
      if ((s.some((x) => on(x)) ? { kind: "none" } : Ts(d, o)).kind === "move") {
        m.interaction = {
          kind: "move_multi",
          items: s.map((x) => x),
          offset: { x: o.x - d.center.x, y: o.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: s.filter((x) => mt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var k, N;
              const S = Et(x);
              return S != null && S.visible ? { x: Number(((k = S.center) == null ? void 0 : k.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => Mt(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: jt(vr(x.actionGroupId, x.layerKind)),
            frameSnapshot: jt(an(x.actionGroupId, x.layerKind)),
            center: (() => {
              var k, N;
              const S = Et(x);
              return S != null && S.visible ? { x: Number(((k = S.center) == null ? void 0 : k.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: ss(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => Vt(x)).map((x) => ({
            id: Ct(x.rasterObjectId || x.id || ""),
            snapshot: jt(er().find((S) => String((S == null ? void 0 : S.id) || "") === Ct(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var k, N;
              const S = Et(x);
              return S != null && S.visible ? { x: Number(((k = S.center) == null ? void 0 : k.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Dl(x)
          }))
        }, ht(o), I.setPointerCapture(n.pointerId);
        return;
      }
    } else if (l && (d != null && d.visible)) {
      const b = on(l) ? { kind: "none" } : Ts(d, o);
      if (b.kind === "scale") {
        m.interaction = Mt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: jt(vr(l.actionGroupId, l.layerKind)),
          frameSnapshot: jt(an(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : Vt(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: jt(er().find((x) => String((x == null ? void 0 : x.id) || "") === Ct(l.rasterObjectId || l.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, ht(o), I.setPointerCapture(n.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        m.interaction = {
          kind: b.kind,
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, ht(o), I.setPointerCapture(n.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        m.interaction = Mt(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: d.center,
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x),
          snapshot: jt(vr(l.actionGroupId, l.layerKind)),
          frameSnapshot: jt(an(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: d.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x)
        }, ht(o), I.setPointerCapture(n.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Mt(l)) {
          const x = m.mode === "frame" ? (() => {
            const S = Ge();
            return S ? Sr(o, S, performance.now()) : null;
          })() : wr(o, performance.now());
          m.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: x,
            snapshot: jt(vr(l.actionGroupId, l.layerKind)),
            frameSnapshot: jt(an(l.actionGroupId, l.layerKind))
          }, ht(o), I.setPointerCapture(n.pointerId);
          return;
        }
        if (Vt(l)) {
          const x = m.mode === "frame" ? (() => {
            const S = Ge();
            return S ? Sr(o, S, performance.now()) : null;
          })() : wr(o, performance.now());
          m.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: x,
            snapshot: jt(er().find((S) => String((S == null ? void 0 : S.id) || "") === Ct(l.rasterObjectId || l.id || "")))
          }, ht(o), I.setPointerCapture(n.pointerId);
          return;
        }
        m.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - d.center.x, y: o.y - d.center.y }
        }, ht(o), I.setPointerCapture(n.pointerId);
        return;
      }
    }
    const p = Ql(o);
    if (p) {
      const b = m.selectedId !== p.item.id;
      if (b && m.selectedId && (st(), mr()), bn(p.item), t === "cutout" && b && (m.cutoutAspectOpen = !1), b && ze(), $e(), pe(), on(p.item)) {
        ht(o);
        return;
      }
      m.interaction = {
        kind: Mt(p.item) ? "move_stroke_group" : Vt(p.item) ? "move_raster_object" : "move",
        item: p.item,
        offset: { x: o.x - p.geom.center.x, y: o.y - p.geom.center.y },
        startUv: Mt(p.item) || Vt(p.item) ? m.mode === "frame" ? (() => {
          const x = Ge();
          return x ? Sr(o, x, performance.now()) : null;
        })() : wr(o, performance.now()) : null,
        snapshot: Mt(p.item) ? jt(vr(p.item.actionGroupId, p.item.layerKind)) : Vt(p.item) ? jt(er().find((x) => String((x == null ? void 0 : x.id) || "") === Ct(p.item.rasterObjectId || p.item.id || ""))) : null,
        frameSnapshot: Mt(p.item) ? jt(an(p.item.actionGroupId, p.item.layerKind)) : null
      }, ht(o), I.setPointerCapture(n.pointerId);
      return;
    }
    const _ = !!m.selectedId;
    if (_ && (st(), mr()), Gn(), _ && ze(), $e(), pe(), m.mode === "pano") {
      const b = La(n);
      m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, n.pointerId, performance.now()), ht(o), I.setPointerCapture(n.pointerId);
    }
  }, I.onpointermove = (n) => {
    var l, d, p, _, b, x, S, k, N, L, F, X, B, K, ee, ye, ie, be, Pe, Fe;
    const o = Jn(n);
    if (Ra(o, !0), !m.interaction) {
      ht(o);
      return;
    }
    ht(o);
    const s = m.interaction;
    if (s.kind === "paint_stroke") {
      const Se = typeof n.getCoalescedEvents == "function" ? n.getCoalescedEvents() : [n];
      let Y = !1;
      Se.forEach((re) => {
        const _e = Jn(re);
        Op(s, _e, performance.now()) && (Y = !0);
      }), Y && pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const Se = typeof n.getCoalescedEvents == "function" ? n.getCoalescedEvents() : [n];
      let Y = !1;
      if (Se.forEach((re) => {
        const _e = Jn(re);
        Fp(s, _e, performance.now()) && (Y = !0);
      }), Y) {
        const re = jr();
        re && m.paintEngine.updateActiveStroke(s.stroke, re), pe({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const Se = performance.now(), Y = m.mode === "unwrap" ? o : La(n);
      Lt.moveDrag(Y.x, Y.y, m.mode === "unwrap" ? "unwrap" : "pano", Se), s.lastTs = Se, s.last = Y, pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      m.frameView.panX += o.x - s.last.x, m.frameView.panY += o.y - s.last.y, s.last = o, pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const Se = o.x - s.offset.x, Y = o.y - s.offset.y;
      if (m.mode === "frame" && t === "cutout") {
        const re = Ge(), _e = zt(re);
        if (!re || !_e) return;
        const Ne = {
          x: W((Se - _e.x) / Math.max(1, _e.w), 0, 1),
          y: W((Y - _e.y) / Math.max(1, _e.h), 0, 1)
        }, je = Ss(re, Ne);
        if (!je) return;
        const Ve = no(je);
        s.item.yaw_deg = Ve.yaw, s.item.pitch_deg = Ve.pitch;
      } else if (m.mode === "unwrap") {
        const re = sn(), _e = W((Se - re.x) / Math.max(re.w, 1), 0, 1), Ne = W((Y - re.y) / Math.max(re.h, 1), 0, 1);
        s.item.yaw_deg = Ft(_e * 360 - 180), s.item.pitch_deg = W(90 - Ne * 180, -90, 90);
      } else {
        const re = ps(Se, Y), _e = no(re);
        s.item.yaw_deg = _e.yaw, s.item.pitch_deg = _e.pitch;
      }
      mt(s.item) && Dt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const Se = m.mode === "frame" ? (() => {
        const _e = Ge();
        return _e ? Sr(o, _e, performance.now()) : null;
      })() : wr(o, performance.now());
      if (!Se || !s.startUv) return;
      const Y = pr(Number(Se.u || 0), Number(s.startUv.u || 0)), re = Number(Se.v || 0) - Number(s.startUv.v || 0);
      dl((l = s.item) == null ? void 0 : l.actionGroupId, Y, re, s.snapshot, (d = s.item) == null ? void 0 : d.layerKind, s.frameSnapshot) && (xr({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const Se = m.mode === "frame" ? (() => {
        const _e = Ge();
        return _e ? Sr(o, _e, performance.now()) : null;
      })() : wr(o, performance.now());
      if (!Se || !s.startUv) return;
      const Y = pr(Number(Se.u || 0), Number(s.startUv.u || 0)), re = Number(Se.v || 0) - Number(s.startUv.v || 0);
      gl(((p = s.item) == null ? void 0 : p.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", Y, re, s.snapshot) && (Zn(), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Lh(((b = s.item) == null ? void 0 : b.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", Y, s.snapshot) && (Zn(), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const Se = o.x - Number(((S = s.offset) == null ? void 0 : S.x) || 0), Y = o.y - Number(((k = s.offset) == null ? void 0 : k.y) || 0);
      let re = !1, _e = !1, Ne = !1;
      const je = Se - Number(((N = s.startCenter) == null ? void 0 : N.x) || Se), Ve = Y - Number(((L = s.startCenter) == null ? void 0 : L.y) || Y);
      for (const Be of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Ye = (t === "cutout" ? os() : Pt()).find((qe) => String((qe == null ? void 0 : qe.id) || "") === String(Be.id || ""));
        if (!Ye || !mt(Ye)) continue;
        const Ke = {
          x: Number(((F = Be.center) == null ? void 0 : F.x) || 0) + je,
          y: Number(((X = Be.center) == null ? void 0 : X.y) || 0) + Ve
        };
        if (m.mode === "frame" && t === "cutout") {
          const qe = Ge(), wt = zt(qe);
          if (!qe || !wt) continue;
          const _n = {
            x: W((Ke.x - wt.x) / Math.max(1, wt.w), 0, 1),
            y: W((Ke.y - wt.y) / Math.max(1, wt.h), 0, 1)
          }, gu = Ss(qe, _n);
          if (!gu) continue;
          const pu = no(gu);
          Ye.yaw_deg = pu.yaw, Ye.pitch_deg = pu.pitch;
        } else if (m.mode === "unwrap") {
          const qe = sn(), wt = W((Ke.x - qe.x) / Math.max(qe.w, 1), 0, 1), _n = W((Ke.y - qe.y) / Math.max(qe.h, 1), 0, 1);
          Ye.yaw_deg = Ft(wt * 360 - 180), Ye.pitch_deg = W(90 - _n * 180, -90, 90);
        } else {
          const qe = ps(Ke.x, Ke.y), wt = no(qe);
          Ye.yaw_deg = wt.yaw, Ye.pitch_deg = wt.pitch;
        }
        re = !0;
      }
      for (const Be of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Ye = {
          x: Number(((B = Be.center) == null ? void 0 : B.x) || 0) + je,
          y: Number(((K = Be.center) == null ? void 0 : K.y) || 0) + Ve
        }, Ke = m.mode === "frame" ? (() => {
          const wt = Ge();
          return wt ? Sr(Ye, wt, performance.now()) : null;
        })() : wr(Ye, performance.now()), qe = Be.centerUv || null;
        if (Ke && qe) {
          const wt = pr(Number(Ke.u || 0), Number(qe.u || 0)), _n = Number(Ke.v || 0) - Number(qe.v || 0);
          dl(Be.id, wt, _n, Be.snapshot, Be.layerKind, Be.frameSnapshot) && (re = !0, _e = !0);
        }
      }
      for (const Be of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Ye = {
          x: Number(((ee = Be.center) == null ? void 0 : ee.x) || 0) + je,
          y: Number(((ye = Be.center) == null ? void 0 : ye.y) || 0) + Ve
        }, Ke = m.mode === "frame" ? (() => {
          const wt = Ge();
          return wt ? Sr(Ye, wt, performance.now()) : null;
        })() : wr(Ye, performance.now()), qe = Be.centerUv || null;
        if (Ke && qe) {
          const wt = pr(Number(Ke.u || 0), Number(qe.u || 0)), _n = Number(Ke.v || 0) - Number(qe.v || 0);
          gl(Be.id, wt, _n, Be.snapshot) && (re = !0, Ne = !0);
        }
      }
      re && (_e ? xr({ rebuildPaintEngine: !1 }) : Ne ? Zn() : Dt(), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      hl((ie = s.item) == null ? void 0 : ie.actionGroupId, Y, 0, s.snapshot, (be = s.item) == null ? void 0 : be.layerKind, s.frameSnapshot) && (xr({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let Se = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * hn;
      n.shiftKey && (Se = Math.round(Se / 45) * 45), hl((Pe = s.item) == null ? void 0 : Pe.actionGroupId, 1, Se, s.snapshot, (Fe = s.item) == null ? void 0 : Fe.layerKind, s.frameSnapshot) && (xr({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = W(s.startHFOV * Y, 1, 179), s.item.vFOV_deg = W(s.startVFOV * Y, 1, 179), s.item.aspect_id = Cn(s.item), mt(s.item) && Dt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = W(s.startHFOV * Y, 1, 179), s.item.aspect_id = Cn(s.item), mt(s.item) && Dt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = W(s.startVFOV * Y, 1, 179), s.item.aspect_id = Cn(s.item), mt(s.item) && Dt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let Y = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * hn, re = s.startRot - Y;
      n.shiftKey && (re = Math.round(re / 45) * 45);
      const _e = mt(s.item) ? "rot_deg" : "roll_deg";
      s.item[_e] = re, mt(s.item) && Dt(), pe({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var o, s, l, d, p, _;
    const n = m.interaction;
    if (((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = m.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (ki(), Hp(m.interaction)) {
        xr();
        const b = String(((l = m.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = Ue().find((k) => String((k == null ? void 0 : k.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const x = jr();
        x && (String(((d = m.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (m.paintEngine.cancelActiveStroke(x), Hl()) : m.paintEngine.commitActiveStroke(m.interaction.stroke, x)), st(), mr(), ze(), $e(), e.setDirtyCanvas(!0, !0), pe();
      } else {
        const b = jr();
        b && m.paintEngine.cancelActiveStroke(b);
      }
    else if (((p = m.interaction) == null ? void 0 : p.kind) === "marquee_select") {
      const b = eu(m.interaction.start, m.interaction.current), S = [
        ...t === "cutout" ? ws().filter((k) => !cr(k)) : [...Pt()],
        ...Ih(),
        ...Th()
      ].filter((k) => jp(b, Et(k)));
      Vh(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && S.length && (m.cutoutAspectOpen = !1), ze(), $e(), pe();
    } else if (m.interaction && m.interaction.kind !== "view" && m.interaction.kind !== "pan_frame") {
      let b = !1;
      (m.interaction.kind === "move_stroke_group" || m.interaction.kind === "scale_stroke_group" || m.interaction.kind === "rotate_stroke_group") && (b = !0), (m.interaction.kind === "move_raster_object" || m.interaction.kind === "scale_raster_object") && (b = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length && (b = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.rasterSnapshots) && m.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(m.interaction.kind) || m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length ? xr({ rebuildPaintEngine: !0 }) : Zn()), st(), mr(), e.setDirtyCanvas(!0, !0), Cs(), m.hqFrames = 1, $e(), pe();
    }
    m.interaction = null, ki(), n && n.kind === "view" && Lt.endDrag(performance.now()), xa(), $e(), ht(m.pointerPos), pe();
  }, I.onpointercancel = () => {
    var n, o, s;
    if (((n = m.interaction) == null ? void 0 : n.kind) === "view" && Lt.endDrag(performance.now()), ((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = m.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      ki();
      const l = jr();
      l && m.paintEngine.cancelActiveStroke(l);
    }
    m.interaction = null, ki(), xa(), ht(m.pointerPos), pe({ localOnly: !0 });
  }, I.onauxclick = (n) => {
    n.button === 1 && n.preventDefault();
  }, I.onmousemove = (n) => {
    const o = Jn(n);
    Ra(o, !0), !m.interaction && ht(o);
  }, I.onmouseleave = () => {
    Ra(m.pointerPos, !1), ht(m.pointerPos);
  }, I.onwheel = (n) => {
    if (m.mode === "frame") {
      const o = Jn(n), s = n.deltaY < 0 ? 1.1 : 1 / 1.1;
      Ap(o, s) && pe({ localOnly: !0 }), n.preventDefault();
      return;
    }
    m.mode === "pano" && (Lt.applyWheelEvent(n) && pe({ localOnly: !0 }), n.preventDefault());
  }, I.ondragover = (n) => {
    t !== "stickers" && t !== "cutout" || i || (n.preventDefault(), ke(!0));
  }, I.ondrop = (n) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || i) return;
    n.preventDefault(), n.stopPropagation(), J.depth = 0, ke(!1);
    const s = Array.from(((l = n.dataTransfer) == null ? void 0 : l.files) || []).find((d) => Ea(d));
    s && Gl(s);
  };
  const tu = (n) => {
    t !== "stickers" && t !== "cutout" || i || lt(n) && (J.depth += 1, ke(!0), n.preventDefault());
  }, ru = (n) => {
    t !== "stickers" && t !== "cutout" || i || (!J.active && lt(n) && ke(!0), J.active && n.preventDefault());
  }, nu = (n) => {
    if (t !== "stickers" && t !== "cutout" || i || !J.active) return;
    J.depth = Math.max(0, J.depth - 1);
    const o = Number(n.clientX) <= 0 && Number(n.clientY) <= 0;
    (J.depth === 0 || o) && ke(!1);
  }, iu = (n) => {
    t !== "stickers" && t !== "cutout" || i || (J.depth = 0, ke(!1), lt(n) && n.preventDefault());
  };
  window.addEventListener("dragenter", tu, !0), window.addEventListener("dragover", ru, !0), window.addEventListener("dragleave", nu, !0), window.addEventListener("drop", iu, !0);
  function Es() {
    const { canUndo: n, canRedo: o } = Ul();
    Vi(A.toolButtons, "value", "undo", { disabled: !n }), Vi(A.toolButtons, "value", "redo", { disabled: !o });
  }
  const au = (n, o, s = !1) => {
    var b;
    const l = it(), d = va();
    if (!l || d === "stroke") return;
    const p = (((b = A.sidePanel) == null ? void 0 : b.params) || []).find((x) => x.key === n);
    if (!p || p.enabled === !1) return;
    let _ = Number(o);
    Number.isNaN(_) && (_ = 0), _ = W(_, Number(p.min), Number(p.max)), n === "yaw_deg" && (_ = Ft(_)), l[n] = _, t === "cutout" && (n === "hFOV_deg" || n === "vFOV_deg") && (l.aspect_id = Cn(l)), ze(), pe(), s && st();
  };
  ue == null || ue.addEventListener("click", async (n) => {
    var l, d, p, _, b, x, S, k, N;
    const o = n.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const L = Ot(o.getAttribute("data-coverage"));
      if (L === Ot(h.coverage)) return;
      h.coverage = L, m.coverage = L, g && (g.value = String(L)), c ? z.backgroundDirty = !0 : (mr(), Cp({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), $e(), pe();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((d = (l = A.sidePanel) == null ? void 0 : l.selectionPicker) != null && d.disabled) return;
      A.sidePanel.selectionPicker.open = !A.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      A.sidePanel.selectionPicker.open = !1;
      const L = String(o.getAttribute("data-selection-id") || "");
      let F = null;
      L && (t === "stickers" ? F = Pt().find((X) => String((X == null ? void 0 : X.id) || "") === L) || null : F = ((p = pl().find((X) => {
        var B;
        return String(((B = X == null ? void 0 : X.item) == null ? void 0 : B.id) || "") === L;
      })) == null ? void 0 : p.item) || null), bn(F || null), F && !Mt(F) && pt(
        Ft(Number(F.yaw_deg || 0)),
        W(Number(F.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), ze(), $e(), pe();
      return;
    }
    if (s === "copy-state-inline") {
      const L = it(), F = va();
      if (!L || F === "stroke" || _r().length > 1) return;
      const X = JSON.stringify(t === "cutout" && F !== "image" ? Sl(L) : Zh(L));
      try {
        await navigator.clipboard.writeText(X), (_ = A.sidePanel) != null && _.copyStateButton && (A.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = A.sidePanel) != null && B.copyStateButton && (A.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const L = String(o.getAttribute("data-visibility") || "");
      L === "panorama" ? m.showPanorama = !m.showPanorama : L === "objects" ? m.showObjects = !m.showObjects : L === "mask" && (m.showMask = !m.showMask), ze(), pe();
      return;
    }
    if (s === "set-invert-x") {
      h.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Da(), ze(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), pe();
      return;
    }
    if (s === "set-invert-y") {
      h.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Da(), ze(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), pe();
      return;
    }
    if (s === "toggle-quality-picker") {
      (S = A.sidePanel) != null && S.uiSettings && (A.sidePanel.uiSettings.qualityOpen = !A.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const L = String(o.getAttribute("data-quality") || "balanced");
      h.ui_settings.preview_quality = L === "draft" || L === "high" ? L : "balanced", Da(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), pe();
      return;
    }
    if (s === "ui-reset-defaults") {
      h.ui_settings.invert_view_x = !1, h.ui_settings.invert_view_y = !1, h.ui_settings.preview_quality = "balanced", Da(), ze(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), pe();
      return;
    }
    if (s === "close-preview") {
      ti();
      return;
    }
    if (s === "cancel-close") {
      ti();
      return;
    }
    s === "save-close" && (kp(), ti());
  }), ue == null || ue.addEventListener("input", (n) => {
    const o = n.target.closest("[data-action='param-input']");
    o && au(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), ue == null || ue.addEventListener("change", (n) => {
    const o = n.target.closest("[data-action='param-input']");
    o && au(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Ds = () => {
    const n = !!m.showGrid;
    Vi(A.floatingButtons, "action", "toggle-grid", {
      icon: n ? Rt.eye : Rt.eye_dashed,
      pressed: n ? "true" : "false",
      label: n ? "Hide Grid" : "Show Grid",
      tip: n ? "Hide grid" : "Show grid"
    });
  };
  Ds(), T.addEventListener("click", (n) => {
    var b, x, S, k;
    if ((x = (b = n.target) == null ? void 0 : b.matches) != null && x.call(b, "[data-confirm-overlay]")) {
      const N = (S = A.confirmDialog) == null ? void 0 : S.resolve;
      A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = n.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      m.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && m.mode === "frame" && it() && cr(it()) && (Gn({ preservePanelValues: !0 }), ze(), $e()), As(), xa(), pe();
      return;
    }
    const s = n.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const N = String(s.getAttribute("data-tool-mode") || "cursor");
        m.primaryTool = N, (N === "paint" || N === "mask") && Gn({ preservePanelValues: !0 }), tr(), ze(), $e(), pe();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const N = String(s.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && s.disabled) return;
        N === "undo" ? Ps(-1) : N === "redo" ? Ps(1) : N === "clear" ? vp() : N === "add" || N === "add-image" ? dp() : N === "add-or-look" && mp();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        m.primaryTool = "paint";
        const N = String(s.getAttribute("data-paint-tool") || "pen");
        m.paintTool = N, Gn({ preservePanelValues: !0 }), rr[N] && (m.activeBrushPresetId = N), tr(), ze(), $e(), pe();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        m.primaryTool = "mask", m.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), Gn({ preservePanelValues: !0 }), tr(), ze(), $e(), pe();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const N = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        _p(N);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const N = vo.find((L) => L.id === s.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        m.paintColor = lr(N.color), It(!0), tr();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        n.preventDefault(), n.stopPropagation(), ce && !ce.hidden ? It(!0) : or(), tr();
        return;
      }
    }
    const l = String(((k = s == null ? void 0 : s.getAttribute) == null ? void 0 : k.call(s, "data-action")) || "");
    if (l === "video-play-toggle") {
      if (n.preventDefault(), n.stopPropagation(), !(G instanceof HTMLVideoElement)) return;
      if (Un(), G.paused) {
        R.mode = "playback", R.pendingPlaybackResume = !1, R.resumeAfterScrub = !1;
        const N = Number(A.videoTransport.duration || G.duration || 0), L = Number(G.currentTime || R.editorTime || 0), F = N > 0 && L >= N - 1e-3 ? 0 : Number(R.editorTime || L || 0);
        R.editorTime = F, Math.abs(L - F) > 1e-3 ? (R.seeking = !1, R.pendingPlaybackResume = !0, fs(F)) : G.play().catch(() => {
        });
      } else
        G.pause(), R.mode = "scrub", R.resumeAfterScrub = !1, R.pendingPlaybackResume = !1, R.editorTime = Number(G.currentTime || 0), Bn();
      Ni({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: !!G.getAttribute("src") && m.primaryTool !== "paint" && m.primaryTool !== "mask",
        currentTime: R.editorTime,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: R.mode
      }), pe({ cause: "frame_view" });
      return;
    }
    if (!i) {
      if (l === "aspect") {
        m.cutoutAspectOpen = !m.cutoutAspectOpen, m.menuSize.measured = !1, $e(), pe();
        return;
      }
      if (l === "aspect-set") {
        const N = it();
        if (!N) return;
        const L = String(s.getAttribute("data-aspect") || "1:1");
        wp(N, L), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, Cs(), st(), yt(), $e(), pe();
        return;
      }
      if (l === "rotate-90") {
        const N = it();
        if (!N) return;
        Sp(N), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, Cs(), st(), yt(), $e(), pe();
        return;
      }
      if (l === "bring-front") {
        Np();
        return;
      }
      if (l === "send-back") {
        Mp();
        return;
      }
      if (l === "duplicate") {
        xp();
        return;
      }
      if (l === "replace-image") {
        gp();
        return;
      }
      if (l === "toggle-lock") {
        Fh();
        return;
      }
      if (l === "back-initial") {
        Uh();
        return;
      }
      if (l === "toggle-visible") {
        Bh();
        return;
      }
      if (l === "delete") {
        Yl();
        return;
      }
    }
    if (l === "reset-view") {
      pt(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      m.showGrid = !m.showGrid, tx(e == null ? void 0 : e.id, m.showGrid), Ds(), pe();
      return;
    }
    if (l === "toggle-fullscreen") {
      n.preventDefault(), n.stopPropagation(), Gp();
      return;
    }
    if (l === "toggle-output-preview-size") {
      n.preventDefault(), n.stopPropagation();
      const N = !m.outputPreviewExpanded;
      m.outputPreviewExpanded = N, m.outputPreviewAnimFrom = m.outputPreviewAnim, m.outputPreviewAnimTo = N ? 1 : 0, m.outputPreviewAnimStartTs = performance.now(), uu(), pe();
      return;
    }
    const d = n.target.closest("[data-paint-history-index]");
    if (!d) return;
    const p = Number(d.getAttribute("data-paint-history-index")), _ = m.customPaintHistory[p];
    _ && (m.customPaintColor = lr(_), m.paintColor = lr(_), tr());
  }), T.addEventListener("input", (n) => {
    const o = n.target.closest("[data-video-seek]");
    if (o) {
      if (!(G instanceof HTMLVideoElement)) return;
      Un();
      const d = W(Number(o.value || 0), 0, Number(A.videoTransport.duration || 0));
      R.mode = "scrub", !R.seeking && !G.paused && !G.ended && (R.resumeAfterScrub = !0, G.pause()), R.editorTime = d, Le(d), Ni({
        ready: !!G.getAttribute("src"),
        playing: !1,
        visible: !!G.getAttribute("src") && m.primaryTool !== "paint" && m.primaryTool !== "mask",
        currentTime: d,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: "scrub"
      }), Number($.__panoFrameIdx || 0) > 0 && (z.backgroundDirty = !0, z.dirty = !0, pe({ cause: "frame_view" })), fs(d);
      return;
    }
    const s = n.target.closest("[data-paint-size-slider]");
    if (s) {
      if (s.disabled) return;
      const d = Math.max(1, Math.min(120, Math.round(Number(s.value)))), p = ln(m.primaryTool === "paint" ? m.paintTool : m.maskTool);
      m.brushSizes[p] = d, tr(), Dp();
      return;
    }
    const l = n.target.closest("[data-paint-alpha-slider]");
    if (l) {
      const d = { ...m.customPaintColor, a: W(Number(l.value) / 100, 0, 1) };
      m.customPaintColor = lr(d), m.paintColor = lr(d), tr();
    }
  }), T.addEventListener("change", (n) => {
    if (n.target.closest("[data-video-seek]")) {
      if (!(G instanceof HTMLVideoElement)) return;
      R.pendingPlaybackResume = !!R.resumeAfterScrub, R.resumeAfterScrub = !1, R.pendingPlaybackResume || (R.mode = "scrub"), R.seeking || (R.pendingPlaybackResume ? (R.pendingPlaybackResume = !1, R.mode = "playback", G.play().catch(() => {
      })) : (Bn(), pe({ cause: "frame_view" })));
      return;
    }
    n.target.closest("[data-paint-size-slider]") && Oa();
  }), T.addEventListener("pointerup", (n) => {
    n.target.closest("[data-paint-size-slider]") && Oa();
  }), T.addEventListener("pointercancel", (n) => {
    n.target.closest("[data-paint-size-slider]") && Oa();
  }), T.addEventListener("focusout", (n) => {
    n.target.closest("[data-paint-size-slider]") && Oa();
  }), T.addEventListener("pointerover", (n) => {
    const o = n.target.closest("[data-tip]");
    !o || !T.contains(o) || Q.target !== o && (Q.target = o, Q.timer && clearTimeout(Q.timer), Q.timer = window.setTimeout(() => {
      Q.target === o && $p(o);
    }, 220));
  }), T.addEventListener("pointerout", (n) => {
    var l, d;
    const o = n.target.closest("[data-tip]");
    !o || Q.target !== o || (n.relatedTarget instanceof Element ? (d = (l = n.relatedTarget).closest) == null ? void 0 : d.call(l, "[data-tip]") : null) === o || Fa();
  }), T.addEventListener("pointerdown", () => {
    Fa();
  });
  const Bp = (n, o) => {
    var b;
    if (!Ie) return;
    const s = Ie.getBoundingClientRect(), l = W((n - s.left) / Math.max(1, s.width), 0, 1), d = 1 - W((o - s.top) / Math.max(1, s.height), 0, 1), p = sc(m.customPaintColor), _ = { ...oc(p.h, l, d), a: Number(((b = m.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    m.customPaintColor = lr(_), m.paintColor = lr(_), tr();
  }, Up = (n) => {
    var p;
    if (!Oe) return;
    const o = Oe.getBoundingClientRect(), s = W((n - o.left) / Math.max(1, o.width), 0, 1), l = sc(m.customPaintColor), d = { ...oc(s, l.s, l.v), a: Number(((p = m.customPaintColor) == null ? void 0 : p.a) ?? 1) };
    m.customPaintColor = lr(d), m.paintColor = lr(d), tr();
  }, ou = (n, o) => {
    const s = n.pointerId;
    o(n);
    const l = (p) => {
      p.pointerId === s && o(p);
    }, d = (p) => {
      p.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  Ie && (Ie.onpointerdown = (n) => {
    n.preventDefault(), n.stopPropagation(), ou(n, (o) => Bp(o.clientX, o.clientY));
  }), Oe && (Oe.onpointerdown = (n) => {
    n.preventDefault(), n.stopPropagation(), ou(n, (o) => Up(o.clientX));
  }), T.addEventListener("click", (n) => {
    var d;
    const o = n.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", l = (d = A.confirmDialog) == null ? void 0 : d.resolve;
    A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(s);
  });
  const su = () => {
    const n = !!m.fullscreen;
    Vi(A.floatingButtons, "action", "toggle-fullscreen", {
      icon: n ? Rt.fullscreen_close : Rt.fullscreen,
      label: n ? "Exit Fullscreen" : "Fullscreen",
      tip: n ? "Exit fullscreen" : "Fullscreen"
    });
  }, Va = (n) => {
    const o = !!n;
    m.fullscreen !== o && (m.fullscreen = o, T.classList.toggle("pano-modal-fullscreen", o), o ? (m.fullscreenPrevShowGrid = !!m.showGrid, m.showGrid = !1) : m.fullscreenPrevShowGrid !== null && (m.showGrid = !!m.fullscreenPrevShowGrid, m.fullscreenPrevShowGrid = null), Ds(), su(), pe());
  }, cu = () => document.fullscreenElement === O, Gp = async () => {
    var n, o;
    try {
      if (!document.fullscreenEnabled) {
        Va(!m.fullscreen);
        return;
      }
      cu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((n = O.requestFullscreen) == null ? void 0 : n.call(O));
    } catch {
      Va(!m.fullscreen);
    }
  }, lu = () => {
    document.fullscreenEnabled && Va(cu());
  };
  document.addEventListener("fullscreenchange", lu), su();
  const uu = () => {
    const n = !!m.outputPreviewExpanded;
    A.outputPreviewToggle.icon = n ? Rt.fullscreen_close : Rt.fullscreen, A.outputPreviewToggle.label = n ? "Reduce Preview" : "Expand Preview", A.outputPreviewToggle.tip = n ? "Reduce preview" : "Expand preview";
  };
  uu();
  const Ls = e.onExecuted, Rs = e.onConnectionsChange;
  let Os = null, Fs = null, Vs = null;
  !i && t === "stickers" && (Vs = (n = "sync") => {
    Nl(n);
  }, e.__panoExternalStickerSync = Vs, Os = function(...o) {
    var s;
    typeof Ls == "function" && Ls.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Os, Fs = function(...o) {
    var s;
    typeof Rs == "function" && Rs.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Fs), i || If.set(String(e.id ?? "0"), () => Il());
  let ei = null;
  const ti = async () => ei || (ei = (async () => {
    var n, o, s, l, d, p, _, b, x, S, k;
    return If.delete(String(e.id ?? "0")), i || mr(), document.fullscreenElement === O && ((n = document.exitFullscreen) == null || n.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", lu), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (d = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || d.call(l, !0, !0), (b = (_ = (p = ur) == null ? void 0 : p.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), Fa(), fp(), G instanceof HTMLVideoElement && G.pause(), de.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (x = he == null ? void 0 : he.dispose) == null || x.call(he), (S = D == null ? void 0 : D.unmount) == null || S.call(D), (k = fe == null ? void 0 : fe.dispose) == null || k.call(fe), ke(!1), window.removeEventListener("keydown", fu, !0), window.removeEventListener("keydown", du, !0), window.removeEventListener("keydown", Ha, !0), window.removeEventListener("keyup", Ha, !0), window.removeEventListener("keydown", hu, !0), window.removeEventListener("dragenter", tu, !0), window.removeEventListener("dragover", ru, !0), window.removeEventListener("dragleave", nu, !0), window.removeEventListener("drop", iu, !0), !i && t === "stickers" && (e.onExecuted === Os && (e.onExecuted = Ls), e.onConnectionsChange === Fs && (e.onConnectionsChange = Rs), e.__panoExternalStickerSync === Vs && (e.__panoExternalStickerSync = null)), V.unmount(), j.remove(), Pp(), ei = null, !0;
  })().catch((n) => (console.error("[PanoramaCutoutSync] closeEditor failed", n), ei = null, !1)), ei), fu = (n) => {
    var o, s, l, d;
    if (n.key === "Escape") {
      if (m.fullscreen && document.fullscreenElement === O) {
        n.preventDefault(), n.stopPropagation(), (o = n.stopImmediatePropagation) == null || o.call(n), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (m.fullscreen) {
        n.preventDefault(), n.stopPropagation(), (l = n.stopImmediatePropagation) == null || l.call(n), Va(!1);
        return;
      }
      n.preventDefault(), n.stopPropagation(), (d = n.stopImmediatePropagation) == null || d.call(n), ti();
    }
  }, du = (n) => {
    const o = String(n.key || ""), s = String(n.code || ""), l = Number(n.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || l === 46) && !(o === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = n.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !it() || (Yl(), n.preventDefault(), n.stopPropagation());
  }, Ha = (n) => {
    const o = !!(n.ctrlKey || n.metaKey);
    m.marqueeModifier !== o && (m.marqueeModifier = o, ht(m.pointerPos));
  }, hu = (n) => {
    if (i || !n.ctrlKey && !n.metaKey) return;
    const o = String(n.key || "").toLowerCase(), s = String(n.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const l = n.target, d = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: p, canRedo: _ } = Ul();
    n.shiftKey && !_ || !n.shiftKey && !p || (Ps(n.shiftKey ? 1 : -1), n.preventDefault(), n.stopPropagation());
  };
  window.addEventListener("keydown", fu, !0), window.addEventListener("keydown", du, !0), window.addEventListener("keydown", Ha, !0), window.addEventListener("keyup", Ha, !0), window.addEventListener("keydown", hu, !0), O.addEventListener("pointerdown", (n) => {
    n.target === O && ti();
  }), eg(), !i && t === "stickers" && Nl("open"), pp(), st(), Es(), tr(), ze(), hs(), Un(), Bl(), ht(m.pointerPos), pe(), z.rafId = requestAnimationFrame(ks);
}
function Of(e, t, r, i) {
  if (!(e != null && e.prototype)) return;
  const a = (y) => {
    var v, h;
    try {
      (v = y.__panoDomRestore) == null || v.call(y);
    } catch {
    }
    try {
      (h = y.__panoLegacyRestore) == null || h.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function c(y) {
    var C;
    const v = `editor_btn|${r}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === v) return;
    a(y), r === "PanoramaStickers" && cx(y), ll(y), ux(y, zo);
    const w = yr(y, zo);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const A = w.callback;
      w.callback = (j) => {
        var O;
        const V = A ? A(j) : void 0;
        return (O = y.setDirtyCanvas) == null || O.call(y, !0, !1), V;
      };
    }
    const P = yr(y, "bg_color");
    if (P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (C = P.callback) == null || C.call(P, "#00ff00")), r === "PanoramaStickers") {
      Ec(y, i, () => na(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
        return;
      }
    }
    Ec(y, i, () => na(y, "cutout")), pb(y, {
      buttonText: i,
      onOpen: () => na(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return c(this), y;
  };
  const f = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
  const g = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const y = g ? g.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
}
function wx(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, r = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = r ? r.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
  const i = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
}
function Sx(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    ll(e), Ec(e, "Open Preview", () => na(e, "stickers", { readOnly: !0, hideSidebar: !1 })), gb(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => na(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
ur.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const r = String((t == null ? void 0 : t.name) || "");
    (r === "PanoramaStickers" || r === "Panorama Stickers") && Of(e, t, "PanoramaStickers", "Open Stickers Editor"), (r === "PanoramaCutout" || r === "Panorama Cutout") && Of(e, t, "PanoramaCutout", "Open Cutout Editor"), Io(r) && wx(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    ll(e), Io(t) && Sx(e);
  }
});
