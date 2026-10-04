import * as Ys from "../../scripts/app.js";
import { app as nr } from "../../scripts/app.js";
import { api as Zt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Md(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const zt = {}, To = [], Tr = () => {
}, Ym = () => !1, Ul = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yl = (e) => e.startsWith("onUpdate:"), xn = Object.assign, Nd = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Ov = Object.prototype.hasOwnProperty, Tt = (e, t) => Ov.call(e, t), ft = Array.isArray, Do = (e) => as(e) === "[object Map]", Xm = (e) => as(e) === "[object Set]", rh = (e) => as(e) === "[object Date]", yt = (e) => typeof e == "function", rn = (e) => typeof e == "string", Vr = (e) => typeof e == "symbol", $t = (e) => e !== null && typeof e == "object", qm = (e) => ($t(e) || yt(e)) && yt(e.then) && yt(e.catch), Jm = Object.prototype.toString, as = (e) => Jm.call(e), Fv = (e) => as(e).slice(8, -1), Zm = (e) => as(e) === "[object Object]", Pd = (e) => rn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fa = /* @__PURE__ */ Md(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Tv = /-\w/g, Cn = Xl(
  (e) => e.replace(Tv, (t) => t.slice(1).toUpperCase())
), Dv = /\B([A-Z])/g, ro = Xl(
  (e) => e.replace(Dv, "-$1").toLowerCase()
), ql = Xl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gc = Xl(
  (e) => e ? `on${ql(e)}` : ""
), Or = (e, t) => !Object.is(e, t), Xs = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Qm = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Ad = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ih;
const Jl = () => ih || (ih = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (ft(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = rn(n) ? $v(n) : Vt(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (rn(e) || $t(e))
    return e;
}
const Lv = /;(?![^(]*\))/g, Rv = /:([^]+)/, Vv = /\/\*[^]*?\*\//g;
function $v(e) {
  const t = {};
  return e.replace(Vv, "").split(Lv).forEach((r) => {
    if (r) {
      const n = r.split(Rv);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function St(e) {
  let t = "";
  if (rn(e))
    t = e;
  else if (ft(e))
    for (let r = 0; r < e.length; r++) {
      const n = St(e[r]);
      n && (t += n + " ");
    }
  else if ($t(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const zv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jv = /* @__PURE__ */ Md(zv);
function eg(e) {
  return !!e || e === "";
}
function Hv(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Cd(e[n], t[n]);
  return r;
}
function Cd(e, t) {
  if (e === t) return !0;
  let r = rh(e), n = rh(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Vr(e), n = Vr(t), r || n)
    return e === t;
  if (r = ft(e), n = ft(t), r || n)
    return r && n ? Hv(e, t) : !1;
  if (r = $t(e), n = $t(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !Cd(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const tg = (e) => !!(e && e.__v_isRef === !0), mt = (e) => rn(e) ? e : e == null ? "" : ft(e) || $t(e) && (e.toString === Jm || !yt(e.toString)) ? tg(e) ? mt(e.value) : JSON.stringify(e, ng, 2) : String(e), ng = (e, t) => tg(t) ? ng(e, t.value) : Do(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Wc(n, o) + " =>"] = i, r),
    {}
  )
} : Xm(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Wc(r))
} : Vr(t) ? Wc(t) : $t(t) && !ft(t) && !Zm(t) ? String(t) : t, Wc = (e, t = "") => {
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
let Dn;
class Gv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Dn, !t && Dn && (this.index = (Dn.scopes || (Dn.scopes = [])).push(
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
      const r = Dn;
      try {
        return Dn = this, t();
      } finally {
        Dn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Dn, Dn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Dn = this.prevScope, this.prevScope = void 0);
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
function Wv() {
  return Dn;
}
let jt;
const Kc = /* @__PURE__ */ new WeakSet();
class rg {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dn && Dn.active && Dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Kc.has(this) && (Kc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || og(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, oh(this), ag(this);
    const t = jt, r = gr;
    jt = this, gr = !0;
    try {
      return this.fn();
    } finally {
      sg(this), jt = t, gr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Od(t);
      this.deps = this.depsTail = void 0, oh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Kc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Fu(this) && this.run();
  }
  get dirty() {
    return Fu(this);
  }
}
let ig = 0, Ta, Da;
function og(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Da, Da = e;
    return;
  }
  e.next = Ta, Ta = e;
}
function Id() {
  ig++;
}
function Ed() {
  if (--ig > 0)
    return;
  if (Da) {
    let t = Da;
    for (Da = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Ta; ) {
    let t = Ta;
    for (Ta = void 0; t; ) {
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
function ag(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sg(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Od(n), Kv(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Fu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lg(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lg(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wa) || (e.globalVersion = Wa, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Fu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = jt, n = gr;
  jt = e, gr = !0;
  try {
    ag(e);
    const i = e.fn(e._value);
    (t.version === 0 || Or(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    jt = r, gr = n, sg(e), e.flags &= -3;
  }
}
function Od(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Od(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Kv(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let gr = !0;
const cg = [];
function ri() {
  cg.push(gr), gr = !1;
}
function ii() {
  const e = cg.pop();
  gr = e === void 0 ? !0 : e;
}
function oh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = jt;
    jt = void 0;
    try {
      t();
    } finally {
      jt = r;
    }
  }
}
let Wa = 0;
class Bv {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!jt || !gr || jt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== jt)
      r = this.activeLink = new Bv(jt, this), jt.deps ? (r.prevDep = jt.depsTail, jt.depsTail.nextDep = r, jt.depsTail = r) : jt.deps = jt.depsTail = r, ug(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = jt.depsTail, r.nextDep = void 0, jt.depsTail.nextDep = r, jt.depsTail = r, jt.deps === r && (jt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Wa++, this.notify(t);
  }
  notify(t) {
    Id();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Ed();
    }
  }
}
function ug(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ug(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Tu = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ Symbol(
  ""
), Du = /* @__PURE__ */ Symbol(
  ""
), Ka = /* @__PURE__ */ Symbol(
  ""
);
function bn(e, t, r) {
  if (gr && jt) {
    let n = Tu.get(e);
    n || Tu.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Fd()), i.map = n, i.key = r), i.track();
  }
}
function Jr(e, t, r, n, i, o) {
  const a = Tu.get(e);
  if (!a) {
    Wa++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Id(), t === "clear")
    a.forEach(s);
  else {
    const l = ft(e), p = l && Pd(r);
    if (l && r === "length") {
      const f = Number(n);
      a.forEach((d, m) => {
        (m === "length" || m === Ka || !Vr(m) && m >= f) && s(d);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), p && s(a.get(Ka)), t) {
        case "add":
          l ? p && s(a.get("length")) : (s(a.get(Xi)), Do(e) && s(a.get(Du)));
          break;
        case "delete":
          l || (s(a.get(Xi)), Do(e) && s(a.get(Du)));
          break;
        case "set":
          Do(e) && s(a.get(Xi));
          break;
      }
  }
  Ed();
}
function So(e) {
  const t = /* @__PURE__ */ Ft(e);
  return t === e ? t : (bn(t, "iterate", Ka), /* @__PURE__ */ rr(e) ? t : t.map(vr));
}
function Zl(e) {
  return bn(e = /* @__PURE__ */ Ft(e), "iterate", Ka), e;
}
function Ir(e, t) {
  return /* @__PURE__ */ oi(e) ? Wo(/* @__PURE__ */ qi(e) ? vr(t) : t) : vr(t);
}
const Uv = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bc(this, Symbol.iterator, (e) => Ir(this, e));
  },
  concat(...e) {
    return So(this).concat(
      ...e.map((t) => ft(t) ? So(t) : t)
    );
  },
  entries() {
    return Bc(this, "entries", (e) => (e[1] = Ir(this, e[1]), e));
  },
  every(e, t) {
    return Kr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Kr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Ir(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Kr(
      this,
      "find",
      e,
      t,
      (r) => Ir(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Kr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Kr(
      this,
      "findLast",
      e,
      t,
      (r) => Ir(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Kr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Kr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Uc(this, "includes", e);
  },
  indexOf(...e) {
    return Uc(this, "indexOf", e);
  },
  join(e) {
    return So(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Uc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Kr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ga(this, "pop");
  },
  push(...e) {
    return ga(this, "push", e);
  },
  reduce(e, ...t) {
    return ah(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ah(this, "reduceRight", e, t);
  },
  shift() {
    return ga(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Kr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ga(this, "splice", e);
  },
  toReversed() {
    return So(this).toReversed();
  },
  toSorted(e) {
    return So(this).toSorted(e);
  },
  toSpliced(...e) {
    return So(this).toSpliced(...e);
  },
  unshift(...e) {
    return ga(this, "unshift", e);
  },
  values() {
    return Bc(this, "values", (e) => Ir(this, e));
  }
};
function Bc(e, t, r) {
  const n = Zl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ rr(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const Yv = Array.prototype;
function Kr(e, t, r, n, i, o) {
  const a = Zl(e), s = a !== e && !/* @__PURE__ */ rr(e), l = a[t];
  if (l !== Yv[t]) {
    const d = l.apply(e, o);
    return s ? vr(d) : d;
  }
  let p = r;
  a !== e && (s ? p = function(d, m) {
    return r.call(this, Ir(e, d), m, e);
  } : r.length > 2 && (p = function(d, m) {
    return r.call(this, d, m, e);
  }));
  const f = l.call(a, p, n);
  return s && i ? i(f) : f;
}
function ah(e, t, r, n) {
  const i = Zl(e), o = i !== e && !/* @__PURE__ */ rr(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(p, f, d) {
    return s && (s = !1, p = Ir(e, p)), r.call(this, p, Ir(e, f), d, e);
  }) : r.length > 3 && (a = function(p, f, d) {
    return r.call(this, p, f, d, e);
  }));
  const l = i[t](a, ...n);
  return s ? Ir(e, l) : l;
}
function Uc(e, t, r) {
  const n = /* @__PURE__ */ Ft(e);
  bn(n, "iterate", Ka);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ld(r[0]) ? (r[0] = /* @__PURE__ */ Ft(r[0]), n[t](...r)) : i;
}
function ga(e, t, r = []) {
  ri(), Id();
  const n = (/* @__PURE__ */ Ft(e))[t].apply(e, r);
  return Ed(), ii(), n;
}
const Xv = /* @__PURE__ */ Md("__proto__,__v_isRef,__isVue"), dg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vr)
);
function qv(e) {
  Vr(e) || (e = String(e));
  const t = /* @__PURE__ */ Ft(this);
  return bn(t, "has", e), t.hasOwnProperty(e);
}
class fg {
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
      return n === (i ? o ? a_ : gg : o ? mg : hg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = ft(t);
    if (!i) {
      let l;
      if (a && (l = Uv[r]))
        return l;
      if (r === "hasOwnProperty")
        return qv;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Sn(t) ? t : n
    );
    if ((Vr(r) ? dg.has(r) : Xv(r)) || (i || bn(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ Sn(s)) {
      const l = a && Pd(r) ? s : s.value;
      return i && $t(l) ? /* @__PURE__ */ Ru(l) : l;
    }
    return $t(s) ? i ? /* @__PURE__ */ Ru(s) : /* @__PURE__ */ Jo(s) : s;
  }
}
class pg extends fg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = ft(t) && Pd(r);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ oi(o);
      if (!/* @__PURE__ */ rr(n) && !/* @__PURE__ */ oi(n) && (o = /* @__PURE__ */ Ft(o), n = /* @__PURE__ */ Ft(n)), !a && /* @__PURE__ */ Sn(o) && !/* @__PURE__ */ Sn(n))
        return p || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : Tt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Sn(t) ? t : i
    );
    return t === /* @__PURE__ */ Ft(i) && (s ? Or(n, o) && Jr(t, "set", r, n) : Jr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = Tt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Jr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Vr(r) || !dg.has(r)) && bn(t, "has", r), n;
  }
  ownKeys(t) {
    return bn(
      t,
      "iterate",
      ft(t) ? "length" : Xi
    ), Reflect.ownKeys(t);
  }
}
class Jv extends fg {
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
const Zv = /* @__PURE__ */ new pg(), Qv = /* @__PURE__ */ new Jv(), e_ = /* @__PURE__ */ new pg(!0);
const Lu = (e) => e, Es = (e) => Reflect.getPrototypeOf(e);
function t_(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ Ft(i), a = Do(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, p = i[e](...n), f = r ? Lu : t ? Wo : vr;
    return !t && bn(
      o,
      "iterate",
      l ? Du : Xi
    ), xn(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: d, done: m } = p.next();
          return m ? { value: d, done: m } : {
            value: s ? [f(d[0]), f(d[1])] : f(d),
            done: m
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
function n_(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Ft(o), s = /* @__PURE__ */ Ft(i);
      e || (Or(i, s) && bn(a, "get", i), bn(a, "get", s));
      const { has: l } = Es(a), p = t ? Lu : e ? Wo : vr;
      if (l.call(a, i))
        return p(o.get(i));
      if (l.call(a, s))
        return p(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && bn(/* @__PURE__ */ Ft(i), "iterate", Xi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Ft(o), s = /* @__PURE__ */ Ft(i);
      return e || (Or(i, s) && bn(a, "has", i), bn(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ Ft(s), p = t ? Lu : e ? Wo : vr;
      return !e && bn(l, "iterate", Xi), s.forEach((f, d) => i.call(o, p(f), p(d), a));
    }
  };
  return xn(
    r,
    e ? {
      add: Os("add"),
      set: Os("set"),
      delete: Os("delete"),
      clear: Os("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ Ft(this), a = Es(o), s = /* @__PURE__ */ Ft(i), l = !t && !/* @__PURE__ */ rr(i) && !/* @__PURE__ */ oi(i) ? s : i;
        return a.has.call(o, l) || Or(i, l) && a.has.call(o, i) || Or(s, l) && a.has.call(o, s) || (o.add(l), Jr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ rr(o) && !/* @__PURE__ */ oi(o) && (o = /* @__PURE__ */ Ft(o));
        const a = /* @__PURE__ */ Ft(this), { has: s, get: l } = Es(a);
        let p = s.call(a, i);
        p || (i = /* @__PURE__ */ Ft(i), p = s.call(a, i));
        const f = l.call(a, i);
        return a.set(i, o), p ? Or(o, f) && Jr(a, "set", i, o) : Jr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ Ft(this), { has: a, get: s } = Es(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ Ft(i), l = a.call(o, i)), s && s.call(o, i);
        const p = o.delete(i);
        return l && Jr(o, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ Ft(this), o = i.size !== 0, a = i.clear();
        return o && Jr(
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
    r[i] = t_(i, e, t);
  }), r;
}
function Td(e, t) {
  const r = n_(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Tt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const r_ = {
  get: /* @__PURE__ */ Td(!1, !1)
}, i_ = {
  get: /* @__PURE__ */ Td(!1, !0)
}, o_ = {
  get: /* @__PURE__ */ Td(!0, !1)
};
const hg = /* @__PURE__ */ new WeakMap(), mg = /* @__PURE__ */ new WeakMap(), gg = /* @__PURE__ */ new WeakMap(), a_ = /* @__PURE__ */ new WeakMap();
function s_(e) {
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
function l_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : s_(Fv(e));
}
// @__NO_SIDE_EFFECTS__
function Jo(e) {
  return /* @__PURE__ */ oi(e) ? e : Dd(
    e,
    !1,
    Zv,
    r_,
    hg
  );
}
// @__NO_SIDE_EFFECTS__
function c_(e) {
  return Dd(
    e,
    !1,
    e_,
    i_,
    mg
  );
}
// @__NO_SIDE_EFFECTS__
function Ru(e) {
  return Dd(
    e,
    !0,
    Qv,
    o_,
    gg
  );
}
function Dd(e, t, r, n, i) {
  if (!$t(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = l_(e);
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
function qi(e) {
  return /* @__PURE__ */ oi(e) ? /* @__PURE__ */ qi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function oi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ld(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ft(t) : e;
}
function u_(e) {
  return !Tt(e, "__v_skip") && Object.isExtensible(e) && Qm(e, "__v_skip", !0), e;
}
const vr = (e) => $t(e) ? /* @__PURE__ */ Jo(e) : e, Wo = (e) => $t(e) ? /* @__PURE__ */ Ru(e) : e;
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return yg(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
  return yg(e, !0);
}
function yg(e, t) {
  return /* @__PURE__ */ Sn(e) ? e : new d_(e, t);
}
class d_ {
  constructor(t, r) {
    this.dep = new Fd(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ Ft(t), this._value = r ? t : vr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ rr(t) || /* @__PURE__ */ oi(t);
    t = n ? t : /* @__PURE__ */ Ft(t), Or(t, r) && (this._rawValue = t, this._value = n ? t : vr(t), this.dep.trigger());
  }
}
function ct(e) {
  return /* @__PURE__ */ Sn(e) ? e.value : e;
}
const f_ = {
  get: (e, t, r) => t === "__v_raw" ? e : ct(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Sn(i) && !/* @__PURE__ */ Sn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function bg(e) {
  return /* @__PURE__ */ qi(e) ? e : new Proxy(e, f_);
}
class p_ {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Fd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    jt !== this)
      return og(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return lg(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function h_(e, t, r = !1) {
  let n, i;
  return yt(e) ? n = e : (n = e.get, i = e.set), new p_(n, i, r);
}
const Fs = {}, gl = /* @__PURE__ */ new WeakMap();
let Gi;
function m_(e, t = !1, r = Gi) {
  if (r) {
    let n = gl.get(r);
    n || gl.set(r, n = []), n.push(e);
  }
}
function g_(e, t, r = zt) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, p = (L) => i ? L : /* @__PURE__ */ rr(L) || i === !1 || i === 0 ? Zr(L, 1) : Zr(L);
  let f, d, m, _, v = !1, S = !1;
  if (/* @__PURE__ */ Sn(e) ? (d = () => e.value, v = /* @__PURE__ */ rr(e)) : /* @__PURE__ */ qi(e) ? (d = () => p(e), v = !0) : ft(e) ? (S = !0, v = e.some((L) => /* @__PURE__ */ qi(L) || /* @__PURE__ */ rr(L)), d = () => e.map((L) => {
    if (/* @__PURE__ */ Sn(L))
      return L.value;
    if (/* @__PURE__ */ qi(L))
      return p(L);
    if (yt(L))
      return l ? l(L, 2) : L();
  })) : yt(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (m) {
      ri();
      try {
        m();
      } finally {
        ii();
      }
    }
    const L = Gi;
    Gi = f;
    try {
      return l ? l(e, 3, [_]) : e(_);
    } finally {
      Gi = L;
    }
  } : d = Tr, t && i) {
    const L = d, g = i === !0 ? 1 / 0 : i;
    d = () => Zr(L(), g);
  }
  const w = Wv(), N = () => {
    f.stop(), w && w.active && Nd(w.effects, f);
  };
  if (o && t) {
    const L = t;
    t = (...g) => {
      L(...g), N();
    };
  }
  let W = S ? new Array(e.length).fill(Fs) : Fs;
  const R = (L) => {
    if (!(!(f.flags & 1) || !f.dirty && !L))
      if (t) {
        const g = f.run();
        if (i || v || (S ? g.some((z, H) => Or(z, W[H])) : Or(g, W))) {
          m && m();
          const z = Gi;
          Gi = f;
          try {
            const H = [
              g,
              // pass undefined as the old value when it's changed for the first time
              W === Fs ? void 0 : S && W[0] === Fs ? [] : W,
              _
            ];
            W = g, l ? l(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            Gi = z;
          }
        }
      } else
        f.run();
  };
  return s && s(R), f = new rg(d), f.scheduler = a ? () => a(R, !1) : R, _ = (L) => m_(L, !1, f), m = f.onStop = () => {
    const L = gl.get(f);
    if (L) {
      if (l)
        l(L, 4);
      else
        for (const g of L) g();
      gl.delete(f);
    }
  }, t ? n ? R(!0) : W = f.run() : a ? a(R.bind(null, !0), !0) : f.run(), N.pause = f.pause.bind(f), N.resume = f.resume.bind(f), N.stop = N, N;
}
function Zr(e, t = 1 / 0, r) {
  if (t <= 0 || !$t(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Sn(e))
    Zr(e.value, t, r);
  else if (ft(e))
    for (let n = 0; n < e.length; n++)
      Zr(e[n], t, r);
  else if (Xm(e) || Do(e))
    e.forEach((n) => {
      Zr(n, t, r);
    });
  else if (Zm(e)) {
    for (const n in e)
      Zr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Zr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ss(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Ql(i, t, r);
  }
}
function $r(e, t, r, n) {
  if (yt(e)) {
    const i = ss(e, t, r, n);
    return i && qm(i) && i.catch((o) => {
      Ql(o, t, r);
    }), i;
  }
  if (ft(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push($r(e[o], t, r, n));
    return i;
  }
}
function Ql(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || zt;
  if (t) {
    let s = t.parent;
    const l = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let d = 0; d < f.length; d++)
          if (f[d](e, l, p) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      ri(), ss(o, null, 10, [
        e,
        l,
        p
      ]), ii();
      return;
    }
  }
  y_(e, r, i, n, a);
}
function y_(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const An = [];
let Cr = -1;
const Lo = [];
let mi = null, No = 0;
const vg = /* @__PURE__ */ Promise.resolve();
let yl = null;
function ec(e) {
  const t = yl || vg;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function b_(e) {
  let t = Cr + 1, r = An.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = An[n], o = Ba(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Rd(e) {
  if (!(e.flags & 1)) {
    const t = Ba(e), r = An[An.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ba(r) ? An.push(e) : An.splice(b_(t), 0, e), e.flags |= 1, _g();
  }
}
function _g() {
  yl || (yl = vg.then(wg));
}
function v_(e) {
  ft(e) ? Lo.push(...e) : mi && e.id === -1 ? mi.splice(No + 1, 0, e) : e.flags & 1 || (Lo.push(e), e.flags |= 1), _g();
}
function sh(e, t, r = Cr + 1) {
  for (; r < An.length; r++) {
    const n = An[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      An.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Sg(e) {
  if (Lo.length) {
    const t = [...new Set(Lo)].sort(
      (r, n) => Ba(r) - Ba(n)
    );
    if (Lo.length = 0, mi) {
      mi.push(...t);
      return;
    }
    for (mi = t, No = 0; No < mi.length; No++) {
      const r = mi[No];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    mi = null, No = 0;
  }
}
const Ba = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wg(e) {
  try {
    for (Cr = 0; Cr < An.length; Cr++) {
      const t = An[Cr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ss(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Cr < An.length; Cr++) {
      const t = An[Cr];
      t && (t.flags &= -2);
    }
    Cr = -1, An.length = 0, Sg(), yl = null, (An.length || Lo.length) && wg();
  }
}
let Un = null, xg = null;
function bl(e) {
  const t = Un;
  return Un = e, xg = e && e.type.__scopeId || null, t;
}
function kg(e, t = Un, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && vh(-1);
    const o = bl(t);
    let a;
    try {
      a = e(...i);
    } finally {
      bl(o), n._d && vh(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ti(e, t) {
  if (Un === null)
    return e;
  const r = oc(Un), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = zt] = t[i];
    o && (yt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Zr(a), n.push({
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
function Li(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (ri(), $r(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), ii());
  }
}
function __(e, t) {
  if (vn) {
    let r = vn.provides;
    const n = vn.parent && vn.parent.provides;
    n === r && (r = vn.provides = Object.create(n)), r[e] = t;
  }
}
function qs(e, t, r = !1) {
  const n = bS();
  if (n || Ro) {
    let i = Ro ? Ro._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && yt(t) ? t.call(n && n.proxy) : t;
  }
}
const S_ = /* @__PURE__ */ Symbol.for("v-scx"), w_ = () => qs(S_);
function Ji(e, t, r) {
  return Mg(e, t, r);
}
function Mg(e, t, r = zt) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = xn({}, r), l = t && n || !t && o !== "post";
  let p;
  if (Ya) {
    if (o === "sync") {
      const _ = w_();
      p = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!l) {
      const _ = () => {
      };
      return _.stop = Tr, _.resume = Tr, _.pause = Tr, _;
    }
  }
  const f = vn;
  s.call = (_, v, S) => $r(_, f, v, S);
  let d = !1;
  o === "post" ? s.scheduler = (_) => {
    Tn(_, f && f.suspense);
  } : o !== "sync" && (d = !0, s.scheduler = (_, v) => {
    v ? _() : Rd(_);
  }), s.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, f && (_.id = f.uid, _.i = f));
  };
  const m = g_(e, t, s);
  return Ya && (p ? p.push(m) : l && m()), m;
}
function x_(e, t, r) {
  const n = this.proxy, i = rn(e) ? e.includes(".") ? Ng(n, e) : () => n[e] : e.bind(n, n);
  let o;
  yt(t) ? o = t : (o = t.handler, r = t);
  const a = cs(this), s = Mg(i, o.bind(n), r);
  return a(), s;
}
function Ng(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const k_ = /* @__PURE__ */ Symbol("_vte"), M_ = (e) => e.__isTeleport, N_ = /* @__PURE__ */ Symbol("_leaveCb");
function Vd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function lh(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const vl = /* @__PURE__ */ new WeakMap();
function La(e, t, r, n, i = !1) {
  if (ft(e)) {
    e.forEach(
      (S, w) => La(
        S,
        t && (ft(t) ? t[w] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Ra(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && La(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? oc(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, p = t && t.r, f = s.refs === zt ? s.refs = {} : s.refs, d = s.setupState, m = /* @__PURE__ */ Ft(d), _ = d === zt ? Ym : (S) => lh(f, S) ? !1 : Tt(m, S), v = (S, w) => !(w && lh(f, w));
  if (p != null && p !== l) {
    if (ch(t), rn(p))
      f[p] = null, _(p) && (d[p] = null);
    else if (/* @__PURE__ */ Sn(p)) {
      const S = t;
      v(p, S.k) && (p.value = null), S.k && (f[S.k] = null);
    }
  }
  if (yt(l))
    ss(l, s, 12, [a, f]);
  else {
    const S = rn(l), w = /* @__PURE__ */ Sn(l);
    if (S || w) {
      const N = () => {
        if (e.f) {
          const W = S ? _(l) ? d[l] : f[l] : v() || !e.k ? l.value : f[e.k];
          if (i)
            ft(W) && Nd(W, o);
          else if (ft(W))
            W.includes(o) || W.push(o);
          else if (S)
            f[l] = [o], _(l) && (d[l] = f[l]);
          else {
            const R = [o];
            v(l, e.k) && (l.value = R), e.k && (f[e.k] = R);
          }
        } else S ? (f[l] = a, _(l) && (d[l] = a)) : w && (v(l, e.k) && (l.value = a), e.k && (f[e.k] = a));
      };
      if (a) {
        const W = () => {
          N(), vl.delete(e);
        };
        W.id = -1, vl.set(e, W), Tn(W, r);
      } else
        ch(e), N();
    }
  }
}
function ch(e) {
  const t = vl.get(e);
  t && (t.flags |= 8, vl.delete(e));
}
Jl().requestIdleCallback;
Jl().cancelIdleCallback;
const Ra = (e) => !!e.type.__asyncLoader, Ag = (e) => e.type.__isKeepAlive;
function P_(e, t) {
  Cg(e, "a", t);
}
function A_(e, t) {
  Cg(e, "da", t);
}
function Cg(e, t, r = vn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (tc(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Ag(i.parent.vnode) && C_(n, t, r, i), i = i.parent;
  }
}
function C_(e, t, r, n) {
  const i = tc(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ig(() => {
    Nd(n[t], i);
  }, r);
}
function tc(e, t, r = vn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      ri();
      const s = cs(r), l = $r(t, r, e, a);
      return s(), ii(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const ai = (e) => (t, r = vn) => {
  (!Ya || e === "sp") && tc(e, (...n) => t(...n), r);
}, I_ = ai("bm"), nc = ai("m"), E_ = ai(
  "bu"
), O_ = ai("u"), ls = ai(
  "bum"
), Ig = ai("um"), F_ = ai(
  "sp"
), T_ = ai("rtg"), D_ = ai("rtc");
function L_(e, t = vn) {
  tc("ec", e, t);
}
const R_ = "components", Eg = /* @__PURE__ */ Symbol.for("v-ndc");
function V_(e) {
  return rn(e) ? $_(R_, e, !1) || e : e || Eg;
}
function $_(e, t, r = !0, n = !1) {
  const i = Un || vn;
  if (i) {
    const o = i.type;
    {
      const s = xS(
        o,
        !1
      );
      if (s && (s === t || s === Cn(t) || s === ql(Cn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      uh(i[e] || o[e], t) || // global registration
      uh(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function uh(e, t) {
  return e && (e[t] || e[Cn(t)] || e[ql(Cn(t))]);
}
function Lt(e, t, r, n) {
  let i;
  const o = r, a = ft(e);
  if (a || rn(e)) {
    const s = a && /* @__PURE__ */ qi(e);
    let l = !1, p = !1;
    s && (l = !/* @__PURE__ */ rr(e), p = /* @__PURE__ */ oi(e), e = Zl(e)), i = new Array(e.length);
    for (let f = 0, d = e.length; f < d; f++)
      i[f] = t(
        l ? p ? Wo(vr(e[f])) : vr(e[f]) : e[f],
        f,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if ($t(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, p = s.length; l < p; l++) {
        const f = s[l];
        i[l] = t(e[f], f, l, o);
      }
    }
  else
    i = [];
  return i;
}
const Vu = (e) => e ? Zg(e) ? oc(e) : Vu(e.parent) : null, Va = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vu(e.parent),
    $root: (e) => Vu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fg(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Rd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ec.bind(e.proxy)),
    $watch: (e) => x_.bind(e)
  })
), Yc = (e, t) => e !== zt && !e.__isScriptSetup && Tt(e, t), z_ = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const m = a[t];
      if (m !== void 0)
        switch (m) {
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
        if (Yc(n, t))
          return a[t] = 1, n[t];
        if (i !== zt && Tt(i, t))
          return a[t] = 2, i[t];
        if (Tt(o, t))
          return a[t] = 3, o[t];
        if (r !== zt && Tt(r, t))
          return a[t] = 4, r[t];
        $u && (a[t] = 0);
      }
    }
    const p = Va[t];
    let f, d;
    if (p)
      return t === "$attrs" && bn(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (f = s.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== zt && Tt(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      d = l.config.globalProperties, Tt(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Yc(i, t) ? (i[t] = r, !0) : n !== zt && Tt(n, t) ? (n[t] = r, !0) : Tt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== zt && s[0] !== "$" && Tt(e, s) || Yc(t, s) || Tt(o, s) || Tt(n, s) || Tt(Va, s) || Tt(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Tt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function dh(e) {
  return ft(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let $u = !0;
function j_(e) {
  const t = Fg(e), r = e.proxy, n = e.ctx;
  $u = !1, t.beforeCreate && fh(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: p,
    // lifecycle
    created: f,
    beforeMount: d,
    mounted: m,
    beforeUpdate: _,
    updated: v,
    activated: S,
    deactivated: w,
    beforeDestroy: N,
    beforeUnmount: W,
    destroyed: R,
    unmounted: L,
    render: g,
    renderTracked: z,
    renderTriggered: H,
    errorCaptured: ee,
    serverPrefetch: oe,
    // public API
    expose: F,
    inheritAttrs: G,
    // assets
    components: X,
    directives: ue,
    filters: Ne
  } = t;
  if (p && H_(p, n, null), a)
    for (const J in a) {
      const E = a[J];
      yt(E) && (n[J] = E.bind(r));
    }
  if (i) {
    const J = i.call(r, r);
    $t(J) && (e.data = /* @__PURE__ */ Jo(J));
  }
  if ($u = !0, o)
    for (const J in o) {
      const E = o[J], V = yt(E) ? E.bind(r, r) : yt(E.get) ? E.get.bind(r, r) : Tr, he = !yt(E) && yt(E.set) ? E.set.bind(r) : Tr, Oe = vt({
        get: V,
        set: he
      });
      Object.defineProperty(n, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (ze) => Oe.value = ze
      });
    }
  if (s)
    for (const J in s)
      Og(s[J], n, r, J);
  if (l) {
    const J = yt(l) ? l.call(r) : l;
    Reflect.ownKeys(J).forEach((E) => {
      __(E, J[E]);
    });
  }
  f && fh(f, e, "c");
  function pe(J, E) {
    ft(E) ? E.forEach((V) => J(V.bind(r))) : E && J(E.bind(r));
  }
  if (pe(I_, d), pe(nc, m), pe(E_, _), pe(O_, v), pe(P_, S), pe(A_, w), pe(L_, ee), pe(D_, z), pe(T_, H), pe(ls, W), pe(Ig, L), pe(F_, oe), ft(F))
    if (F.length) {
      const J = e.exposed || (e.exposed = {});
      F.forEach((E) => {
        Object.defineProperty(J, E, {
          get: () => r[E],
          set: (V) => r[E] = V,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  g && e.render === Tr && (e.render = g), G != null && (e.inheritAttrs = G), X && (e.components = X), ue && (e.directives = ue), oe && Pg(e);
}
function H_(e, t, r = Tr) {
  ft(e) && (e = zu(e));
  for (const n in e) {
    const i = e[n];
    let o;
    $t(i) ? "default" in i ? o = qs(
      i.from || n,
      i.default,
      !0
    ) : o = qs(i.from || n) : o = qs(i), /* @__PURE__ */ Sn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function fh(e, t, r) {
  $r(
    ft(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Og(e, t, r, n) {
  let i = n.includes(".") ? Ng(r, n) : () => r[n];
  if (rn(e)) {
    const o = t[e];
    yt(o) && Ji(i, o);
  } else if (yt(e))
    Ji(i, e.bind(r));
  else if ($t(e))
    if (ft(e))
      e.forEach((o) => Og(o, t, r, n));
    else {
      const o = yt(e.handler) ? e.handler.bind(r) : t[e.handler];
      yt(o) && Ji(i, o, e);
    }
}
function Fg(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (p) => _l(l, p, a, !0)
  ), _l(l, t, a)), $t(t) && o.set(t, l), l;
}
function _l(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && _l(e, o, r, !0), i && i.forEach(
    (a) => _l(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = G_[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const G_ = {
  data: ph,
  props: hh,
  emits: hh,
  // objects
  methods: ka,
  computed: ka,
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
  components: ka,
  directives: ka,
  // watch
  watch: K_,
  // provide / inject
  provide: ph,
  inject: W_
};
function ph(e, t) {
  return t ? e ? function() {
    return xn(
      yt(e) ? e.call(this, this) : e,
      yt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function W_(e, t) {
  return ka(zu(e), zu(t));
}
function zu(e) {
  if (ft(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Pn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ka(e, t) {
  return e ? xn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hh(e, t) {
  return e ? ft(e) && ft(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xn(
    /* @__PURE__ */ Object.create(null),
    dh(e),
    dh(t ?? {})
  ) : t;
}
function K_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = xn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Pn(e[n], t[n]);
  return r;
}
function Tg() {
  return {
    app: null,
    config: {
      isNativeTag: Ym,
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
let B_ = 0;
function U_(e, t) {
  return function(n, i = null) {
    yt(n) || (n = xn({}, n)), i != null && !$t(i) && (i = null);
    const o = Tg(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const p = o.app = {
      _uid: B_++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: MS,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...d) {
        return a.has(f) || (f && yt(f.install) ? (a.add(f), f.install(p, ...d)) : yt(f) && (a.add(f), f(p, ...d))), p;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), p;
      },
      component(f, d) {
        return d ? (o.components[f] = d, p) : o.components[f];
      },
      directive(f, d) {
        return d ? (o.directives[f] = d, p) : o.directives[f];
      },
      mount(f, d, m) {
        if (!l) {
          const _ = p._ceVNode || nt(n, i);
          return _.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(_, f, m), l = !0, p._container = f, f.__vue_app__ = p, oc(_.component);
        }
      },
      onUnmount(f) {
        s.push(f);
      },
      unmount() {
        l && ($r(
          s,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(f, d) {
        return o.provides[f] = d, p;
      },
      runWithContext(f) {
        const d = Ro;
        Ro = p;
        try {
          return f();
        } finally {
          Ro = d;
        }
      }
    };
    return p;
  };
}
let Ro = null;
const Y_ = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Cn(t)}Modifiers`] || e[`${ro(t)}Modifiers`];
function X_(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || zt;
  let i = r;
  const o = t.startsWith("update:"), a = o && Y_(n, t.slice(7));
  a && (a.trim && (i = r.map((f) => rn(f) ? f.trim() : f)), a.number && (i = r.map(Ad)));
  let s, l = n[s = Gc(t)] || // also try camelCase event handler (#2249)
  n[s = Gc(Cn(t))];
  !l && o && (l = n[s = Gc(ro(t))]), l && $r(
    l,
    e,
    6,
    i
  );
  const p = n[s + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, $r(
      p,
      e,
      6,
      i
    );
  }
}
const q_ = /* @__PURE__ */ new WeakMap();
function Dg(e, t, r = !1) {
  const n = r ? q_ : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!yt(e)) {
    const l = (p) => {
      const f = Dg(p, t, !0);
      f && (s = !0, xn(a, f));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? ($t(e) && n.set(e, null), null) : (ft(o) ? o.forEach((l) => a[l] = null) : xn(a, o), $t(e) && n.set(e, a), a);
}
function rc(e, t) {
  return !e || !Ul(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Tt(e, t[0].toLowerCase() + t.slice(1)) || Tt(e, ro(t)) || Tt(e, t));
}
function mh(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: p,
    renderCache: f,
    props: d,
    data: m,
    setupState: _,
    ctx: v,
    inheritAttrs: S
  } = e, w = bl(e);
  let N, W;
  try {
    if (r.shapeFlag & 4) {
      const L = i || n, g = L;
      N = Er(
        p.call(
          g,
          L,
          f,
          d,
          _,
          m,
          v
        )
      ), W = s;
    } else {
      const L = t;
      N = Er(
        L.length > 1 ? L(
          d,
          { attrs: s, slots: a, emit: l }
        ) : L(
          d,
          null
        )
      ), W = t.props ? s : J_(s);
    }
  } catch (L) {
    $a.length = 0, Ql(L, e, 1), N = nt(bi);
  }
  let R = N;
  if (W && S !== !1) {
    const L = Object.keys(W), { shapeFlag: g } = R;
    L.length && g & 7 && (o && L.some(Yl) && (W = Z_(
      W,
      o
    )), R = Ko(R, W, !1, !0));
  }
  return r.dirs && (R = Ko(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(r.dirs) : r.dirs), r.transition && Vd(R, r.transition), N = R, bl(w), N;
}
const J_ = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Ul(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Z_ = (e, t) => {
  const r = {};
  for (const n in e)
    (!Yl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Q_(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, p = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? gh(n, a, p) : !!a;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        const m = f[d];
        if (Lg(a, n, m) && !rc(p, m))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? gh(n, a, p) : !0 : !!a;
  return !1;
}
function gh(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Lg(t, e, o) && !rc(r, o))
      return !0;
  }
  return !1;
}
function Lg(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && $t(n) && $t(i) ? !Cd(n, i) : n !== i;
}
function eS({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Rg = {}, Vg = () => Object.create(Rg), $g = (e) => Object.getPrototypeOf(e) === Rg;
function tS(e, t, r, n = !1) {
  const i = {}, o = Vg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zg(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ c_(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function nS(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ Ft(i), [l] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const f = e.vnode.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        let m = f[d];
        if (rc(e.emitsOptions, m))
          continue;
        const _ = t[m];
        if (l)
          if (Tt(o, m))
            _ !== o[m] && (o[m] = _, p = !0);
          else {
            const v = Cn(m);
            i[v] = ju(
              l,
              s,
              v,
              _,
              e,
              !1
            );
          }
        else
          _ !== o[m] && (o[m] = _, p = !0);
      }
    }
  } else {
    zg(e, t, i, o) && (p = !0);
    let f;
    for (const d in s)
      (!t || // for camelCase
      !Tt(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = ro(d)) === d || !Tt(t, f))) && (l ? r && // for camelCase
      (r[d] !== void 0 || // for kebab-case
      r[f] !== void 0) && (i[d] = ju(
        l,
        s,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== s)
      for (const d in o)
        (!t || !Tt(t, d)) && (delete o[d], p = !0);
  }
  p && Jr(e.attrs, "set", "");
}
function zg(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (Fa(l))
        continue;
      const p = t[l];
      let f;
      i && Tt(i, f = Cn(l)) ? !o || !o.includes(f) ? r[f] = p : (s || (s = {}))[f] = p : rc(e.emitsOptions, l) || (!(l in n) || p !== n[l]) && (n[l] = p, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ Ft(r), p = s || zt;
    for (let f = 0; f < o.length; f++) {
      const d = o[f];
      r[d] = ju(
        i,
        l,
        d,
        p[d],
        e,
        !Tt(p, d)
      );
    }
  }
  return a;
}
function ju(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = Tt(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && yt(l)) {
        const { propsDefaults: p } = i;
        if (r in p)
          n = p[r];
        else {
          const f = cs(i);
          n = p[r] = l.call(
            null,
            t
          ), f();
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
    ] && (n === "" || n === ro(r)) && (n = !0));
  }
  return n;
}
const rS = /* @__PURE__ */ new WeakMap();
function jg(e, t, r = !1) {
  const n = r ? rS : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!yt(e)) {
    const f = (d) => {
      l = !0;
      const [m, _] = jg(d, t, !0);
      xn(a, m), _ && s.push(..._);
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !l)
    return $t(e) && n.set(e, To), To;
  if (ft(o))
    for (let f = 0; f < o.length; f++) {
      const d = Cn(o[f]);
      yh(d) && (a[d] = zt);
    }
  else if (o)
    for (const f in o) {
      const d = Cn(f);
      if (yh(d)) {
        const m = o[f], _ = a[d] = ft(m) || yt(m) ? { type: m } : xn({}, m), v = _.type;
        let S = !1, w = !0;
        if (ft(v))
          for (let N = 0; N < v.length; ++N) {
            const W = v[N], R = yt(W) && W.name;
            if (R === "Boolean") {
              S = !0;
              break;
            } else R === "String" && (w = !1);
          }
        else
          S = yt(v) && v.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = S, _[
          1
          /* shouldCastTrue */
        ] = w, (S || Tt(_, "default")) && s.push(d);
      }
    }
  const p = [a, s];
  return $t(e) && n.set(e, p), p;
}
function yh(e) {
  return e[0] !== "$" && !Fa(e);
}
const $d = (e) => e === "_" || e === "_ctx" || e === "$stable", zd = (e) => ft(e) ? e.map(Er) : [Er(e)], iS = (e, t, r) => {
  if (t._n)
    return t;
  const n = kg((...i) => zd(t(...i)), r);
  return n._c = !1, n;
}, Hg = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if ($d(i)) continue;
    const o = e[i];
    if (yt(o))
      t[i] = iS(i, o, n);
    else if (o != null) {
      const a = zd(o);
      t[i] = () => a;
    }
  }
}, Gg = (e, t) => {
  const r = zd(t);
  e.slots.default = () => r;
}, Wg = (e, t, r) => {
  for (const n in t)
    (r || !$d(n)) && (e[n] = t[n]);
}, oS = (e, t, r) => {
  const n = e.slots = Vg();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Wg(n, t, r), r && Qm(n, "_", i, !0)) : Hg(t, n);
  } else t && Gg(e, t);
}, aS = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = zt;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : Wg(i, t, r) : (o = !t.$stable, Hg(t, i)), a = t;
  } else t && (Gg(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !$d(s) && a[s] == null && delete i[s];
}, Tn = dS;
function sS(e) {
  return lS(e);
}
function lS(e, t) {
  const r = Jl();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: p,
    setElementText: f,
    parentNode: d,
    nextSibling: m,
    setScopeId: _ = Tr,
    insertStaticContent: v
  } = e, S = (k, O, Y, ge = null, T = null, q = null, ne = void 0, A = null, B = !!O.dynamicChildren) => {
    if (k === O)
      return;
    k && !ya(k, O) && (ge = be(k), ze(k, T, q, !0), k = null), O.patchFlag === -2 && (B = !1, O.dynamicChildren = null);
    const { type: K, ref: Z, shapeFlag: re } = O;
    switch (K) {
      case ic:
        w(k, O, Y, ge);
        break;
      case bi:
        N(k, O, Y, ge);
        break;
      case qc:
        k == null && W(O, Y, ge, ne);
        break;
      case st:
        X(
          k,
          O,
          Y,
          ge,
          T,
          q,
          ne,
          A,
          B
        );
        break;
      default:
        re & 1 ? g(
          k,
          O,
          Y,
          ge,
          T,
          q,
          ne,
          A,
          B
        ) : re & 6 ? ue(
          k,
          O,
          Y,
          ge,
          T,
          q,
          ne,
          A,
          B
        ) : (re & 64 || re & 128) && K.process(
          k,
          O,
          Y,
          ge,
          T,
          q,
          ne,
          A,
          B,
          te
        );
    }
    Z != null && T ? La(Z, k && k.ref, q, O || k, !O) : Z == null && k && k.ref != null && La(k.ref, null, q, k, !0);
  }, w = (k, O, Y, ge) => {
    if (k == null)
      n(
        O.el = s(O.children),
        Y,
        ge
      );
    else {
      const T = O.el = k.el;
      O.children !== k.children && p(T, O.children);
    }
  }, N = (k, O, Y, ge) => {
    k == null ? n(
      O.el = l(O.children || ""),
      Y,
      ge
    ) : O.el = k.el;
  }, W = (k, O, Y, ge) => {
    [k.el, k.anchor] = v(
      k.children,
      O,
      Y,
      ge,
      k.el,
      k.anchor
    );
  }, R = ({ el: k, anchor: O }, Y, ge) => {
    let T;
    for (; k && k !== O; )
      T = m(k), n(k, Y, ge), k = T;
    n(O, Y, ge);
  }, L = ({ el: k, anchor: O }) => {
    let Y;
    for (; k && k !== O; )
      Y = m(k), i(k), k = Y;
    i(O);
  }, g = (k, O, Y, ge, T, q, ne, A, B) => {
    if (O.type === "svg" ? ne = "svg" : O.type === "math" && (ne = "mathml"), k == null)
      z(
        O,
        Y,
        ge,
        T,
        q,
        ne,
        A,
        B
      );
    else {
      const K = k.el && k.el._isVueCE ? k.el : null;
      try {
        K && K._beginPatch(), oe(
          k,
          O,
          T,
          q,
          ne,
          A,
          B
        );
      } finally {
        K && K._endPatch();
      }
    }
  }, z = (k, O, Y, ge, T, q, ne, A) => {
    let B, K;
    const { props: Z, shapeFlag: re, transition: ae, dirs: ye } = k;
    if (B = k.el = a(
      k.type,
      q,
      Z && Z.is,
      Z
    ), re & 8 ? f(B, k.children) : re & 16 && ee(
      k.children,
      B,
      null,
      ge,
      T,
      Xc(k, q),
      ne,
      A
    ), ye && Li(k, null, ge, "created"), H(B, k, k.scopeId, ne, ge), Z) {
      for (const Ee in Z)
        Ee !== "value" && !Fa(Ee) && o(B, Ee, null, Z[Ee], q, ge);
      "value" in Z && o(B, "value", null, Z.value, q), (K = Z.onVnodeBeforeMount) && Nr(K, ge, k);
    }
    ye && Li(k, null, ge, "beforeMount");
    const xe = cS(T, ae);
    xe && ae.beforeEnter(B), n(B, O, Y), ((K = Z && Z.onVnodeMounted) || xe || ye) && Tn(() => {
      try {
        K && Nr(K, ge, k), xe && ae.enter(B), ye && Li(k, null, ge, "mounted");
      } finally {
      }
    }, T);
  }, H = (k, O, Y, ge, T) => {
    if (Y && _(k, Y), ge)
      for (let q = 0; q < ge.length; q++)
        _(k, ge[q]);
    if (T) {
      let q = T.subTree;
      if (O === q || Yg(q.type) && (q.ssContent === O || q.ssFallback === O)) {
        const ne = T.vnode;
        H(
          k,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          T.parent
        );
      }
    }
  }, ee = (k, O, Y, ge, T, q, ne, A, B = 0) => {
    for (let K = B; K < k.length; K++) {
      const Z = k[K] = A ? Xr(k[K]) : Er(k[K]);
      S(
        null,
        Z,
        O,
        Y,
        ge,
        T,
        q,
        ne,
        A
      );
    }
  }, oe = (k, O, Y, ge, T, q, ne) => {
    const A = O.el = k.el;
    let { patchFlag: B, dynamicChildren: K, dirs: Z } = O;
    B |= k.patchFlag & 16;
    const re = k.props || zt, ae = O.props || zt;
    let ye;
    if (Y && Ri(Y, !1), (ye = ae.onVnodeBeforeUpdate) && Nr(ye, Y, O, k), Z && Li(O, k, Y, "beforeUpdate"), Y && Ri(Y, !0), (re.innerHTML && ae.innerHTML == null || re.textContent && ae.textContent == null) && f(A, ""), K ? F(
      k.dynamicChildren,
      K,
      A,
      Y,
      ge,
      Xc(O, T),
      q
    ) : ne || E(
      k,
      O,
      A,
      null,
      Y,
      ge,
      Xc(O, T),
      q,
      !1
    ), B > 0) {
      if (B & 16)
        G(A, re, ae, Y, T);
      else if (B & 2 && re.class !== ae.class && o(A, "class", null, ae.class, T), B & 4 && o(A, "style", re.style, ae.style, T), B & 8) {
        const xe = O.dynamicProps;
        for (let Ee = 0; Ee < xe.length; Ee++) {
          const We = xe[Ee], ie = re[We], ke = ae[We];
          (ke !== ie || We === "value") && o(A, We, ie, ke, T, Y);
        }
      }
      B & 1 && k.children !== O.children && f(A, O.children);
    } else !ne && K == null && G(A, re, ae, Y, T);
    ((ye = ae.onVnodeUpdated) || Z) && Tn(() => {
      ye && Nr(ye, Y, O, k), Z && Li(O, k, Y, "updated");
    }, ge);
  }, F = (k, O, Y, ge, T, q, ne) => {
    for (let A = 0; A < O.length; A++) {
      const B = k[A], K = O[A], Z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === st || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ya(B, K) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 198) ? d(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      S(
        B,
        K,
        Z,
        null,
        ge,
        T,
        q,
        ne,
        !0
      );
    }
  }, G = (k, O, Y, ge, T) => {
    if (O !== Y) {
      if (O !== zt)
        for (const q in O)
          !Fa(q) && !(q in Y) && o(
            k,
            q,
            O[q],
            null,
            T,
            ge
          );
      for (const q in Y) {
        if (Fa(q)) continue;
        const ne = Y[q], A = O[q];
        ne !== A && q !== "value" && o(k, q, A, ne, T, ge);
      }
      "value" in Y && o(k, "value", O.value, Y.value, T);
    }
  }, X = (k, O, Y, ge, T, q, ne, A, B) => {
    const K = O.el = k ? k.el : s(""), Z = O.anchor = k ? k.anchor : s("");
    let { patchFlag: re, dynamicChildren: ae, slotScopeIds: ye } = O;
    ye && (A = A ? A.concat(ye) : ye), k == null ? (n(K, Y, ge), n(Z, Y, ge), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      Y,
      Z,
      T,
      q,
      ne,
      A,
      B
    )) : re > 0 && re & 64 && ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    k.dynamicChildren && k.dynamicChildren.length === ae.length ? (F(
      k.dynamicChildren,
      ae,
      Y,
      T,
      q,
      ne,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || T && O === T.subTree) && Kg(
      k,
      O,
      !0
      /* shallow */
    )) : E(
      k,
      O,
      Y,
      Z,
      T,
      q,
      ne,
      A,
      B
    );
  }, ue = (k, O, Y, ge, T, q, ne, A, B) => {
    O.slotScopeIds = A, k == null ? O.shapeFlag & 512 ? T.ctx.activate(
      O,
      Y,
      ge,
      ne,
      B
    ) : Ne(
      O,
      Y,
      ge,
      T,
      q,
      ne,
      B
    ) : _e(k, O, B);
  }, Ne = (k, O, Y, ge, T, q, ne) => {
    const A = k.component = yS(
      k,
      ge,
      T
    );
    if (Ag(k) && (A.ctx.renderer = te), vS(A, !1, ne), A.asyncDep) {
      if (T && T.registerDep(A, pe, ne), !k.el) {
        const B = A.subTree = nt(bi);
        N(null, B, O, Y), k.placeholder = B.el;
      }
    } else
      pe(
        A,
        k,
        O,
        Y,
        T,
        q,
        ne
      );
  }, _e = (k, O, Y) => {
    const ge = O.component = k.component;
    if (Q_(k, O, Y))
      if (ge.asyncDep && !ge.asyncResolved) {
        J(ge, O, Y);
        return;
      } else
        ge.next = O, ge.update();
    else
      O.el = k.el, ge.vnode = O;
  }, pe = (k, O, Y, ge, T, q, ne) => {
    const A = () => {
      if (k.isMounted) {
        let { next: re, bu: ae, u: ye, parent: xe, vnode: Ee } = k;
        {
          const b = Bg(k);
          if (b) {
            re && (re.el = Ee.el, J(k, re, ne)), b.asyncDep.then(() => {
              Tn(() => {
                k.isUnmounted || K();
              }, T);
            });
            return;
          }
        }
        let We = re, ie;
        Ri(k, !1), re ? (re.el = Ee.el, J(k, re, ne)) : re = Ee, ae && Xs(ae), (ie = re.props && re.props.onVnodeBeforeUpdate) && Nr(ie, xe, re, Ee), Ri(k, !0);
        const ke = mh(k), Me = k.subTree;
        k.subTree = ke, S(
          Me,
          ke,
          // parent may have changed if it's in a teleport
          d(Me.el),
          // anchor may have changed if it's in a fragment
          be(Me),
          k,
          T,
          q
        ), re.el = ke.el, We === null && eS(k, ke.el), ye && Tn(ye, T), (ie = re.props && re.props.onVnodeUpdated) && Tn(
          () => Nr(ie, xe, re, Ee),
          T
        );
      } else {
        let re;
        const { el: ae, props: ye } = O, { bm: xe, m: Ee, parent: We, root: ie, type: ke } = k, Me = Ra(O);
        Ri(k, !1), xe && Xs(xe), !Me && (re = ye && ye.onVnodeBeforeMount) && Nr(re, We, O), Ri(k, !0);
        {
          ie.ce && ie.ce._hasShadowRoot() && ie.ce._injectChildStyle(
            ke,
            k.parent ? k.parent.type : void 0
          );
          const b = k.subTree = mh(k);
          S(
            null,
            b,
            Y,
            ge,
            k,
            T,
            q
          ), O.el = b.el;
        }
        if (Ee && Tn(Ee, T), !Me && (re = ye && ye.onVnodeMounted)) {
          const b = O;
          Tn(
            () => Nr(re, We, b),
            T
          );
        }
        (O.shapeFlag & 256 || We && Ra(We.vnode) && We.vnode.shapeFlag & 256) && k.a && Tn(k.a, T), k.isMounted = !0, O = Y = ge = null;
      }
    };
    k.scope.on();
    const B = k.effect = new rg(A);
    k.scope.off();
    const K = k.update = B.run.bind(B), Z = k.job = B.runIfDirty.bind(B);
    Z.i = k, Z.id = k.uid, B.scheduler = () => Rd(Z), Ri(k, !0), K();
  }, J = (k, O, Y) => {
    O.component = k;
    const ge = k.vnode.props;
    k.vnode = O, k.next = null, nS(k, O.props, ge, Y), aS(k, O.children, Y), ri(), sh(k), ii();
  }, E = (k, O, Y, ge, T, q, ne, A, B = !1) => {
    const K = k && k.children, Z = k ? k.shapeFlag : 0, re = O.children, { patchFlag: ae, shapeFlag: ye } = O;
    if (ae > 0) {
      if (ae & 128) {
        he(
          K,
          re,
          Y,
          ge,
          T,
          q,
          ne,
          A,
          B
        );
        return;
      } else if (ae & 256) {
        V(
          K,
          re,
          Y,
          ge,
          T,
          q,
          ne,
          A,
          B
        );
        return;
      }
    }
    ye & 8 ? (Z & 16 && de(K, T, q), re !== K && f(Y, re)) : Z & 16 ? ye & 16 ? he(
      K,
      re,
      Y,
      ge,
      T,
      q,
      ne,
      A,
      B
    ) : de(K, T, q, !0) : (Z & 8 && f(Y, ""), ye & 16 && ee(
      re,
      Y,
      ge,
      T,
      q,
      ne,
      A,
      B
    ));
  }, V = (k, O, Y, ge, T, q, ne, A, B) => {
    k = k || To, O = O || To;
    const K = k.length, Z = O.length, re = Math.min(K, Z);
    let ae;
    for (ae = 0; ae < re; ae++) {
      const ye = O[ae] = B ? Xr(O[ae]) : Er(O[ae]);
      S(
        k[ae],
        ye,
        Y,
        null,
        T,
        q,
        ne,
        A,
        B
      );
    }
    K > Z ? de(
      k,
      T,
      q,
      !0,
      !1,
      re
    ) : ee(
      O,
      Y,
      ge,
      T,
      q,
      ne,
      A,
      B,
      re
    );
  }, he = (k, O, Y, ge, T, q, ne, A, B) => {
    let K = 0;
    const Z = O.length;
    let re = k.length - 1, ae = Z - 1;
    for (; K <= re && K <= ae; ) {
      const ye = k[K], xe = O[K] = B ? Xr(O[K]) : Er(O[K]);
      if (ya(ye, xe))
        S(
          ye,
          xe,
          Y,
          null,
          T,
          q,
          ne,
          A,
          B
        );
      else
        break;
      K++;
    }
    for (; K <= re && K <= ae; ) {
      const ye = k[re], xe = O[ae] = B ? Xr(O[ae]) : Er(O[ae]);
      if (ya(ye, xe))
        S(
          ye,
          xe,
          Y,
          null,
          T,
          q,
          ne,
          A,
          B
        );
      else
        break;
      re--, ae--;
    }
    if (K > re) {
      if (K <= ae) {
        const ye = ae + 1, xe = ye < Z ? O[ye].el : ge;
        for (; K <= ae; )
          S(
            null,
            O[K] = B ? Xr(O[K]) : Er(O[K]),
            Y,
            xe,
            T,
            q,
            ne,
            A,
            B
          ), K++;
      }
    } else if (K > ae)
      for (; K <= re; )
        ze(k[K], T, q, !0), K++;
    else {
      const ye = K, xe = K, Ee = /* @__PURE__ */ new Map();
      for (K = xe; K <= ae; K++) {
        const C = O[K] = B ? Xr(O[K]) : Er(O[K]);
        C.key != null && Ee.set(C.key, K);
      }
      let We, ie = 0;
      const ke = ae - xe + 1;
      let Me = !1, b = 0;
      const D = new Array(ke);
      for (K = 0; K < ke; K++) D[K] = 0;
      for (K = ye; K <= re; K++) {
        const C = k[K];
        if (ie >= ke) {
          ze(C, T, q, !0);
          continue;
        }
        let x;
        if (C.key != null)
          x = Ee.get(C.key);
        else
          for (We = xe; We <= ae; We++)
            if (D[We - xe] === 0 && ya(C, O[We])) {
              x = We;
              break;
            }
        x === void 0 ? ze(C, T, q, !0) : (D[x - xe] = K + 1, x >= b ? b = x : Me = !0, S(
          C,
          O[x],
          Y,
          null,
          T,
          q,
          ne,
          A,
          B
        ), ie++);
      }
      const u = Me ? uS(D) : To;
      for (We = u.length - 1, K = ke - 1; K >= 0; K--) {
        const C = xe + K, x = O[C], U = O[C + 1], ve = C + 1 < Z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          U.el || Ug(U)
        ) : ge;
        D[K] === 0 ? S(
          null,
          x,
          Y,
          ve,
          T,
          q,
          ne,
          A,
          B
        ) : Me && (We < 0 || K !== u[We] ? Oe(x, Y, ve, 2) : We--);
      }
    }
  }, Oe = (k, O, Y, ge, T = null) => {
    const { el: q, type: ne, transition: A, children: B, shapeFlag: K } = k;
    if (K & 6) {
      Oe(k.component.subTree, O, Y, ge);
      return;
    }
    if (K & 128) {
      k.suspense.move(O, Y, ge);
      return;
    }
    if (K & 64) {
      ne.move(k, O, Y, te);
      return;
    }
    if (ne === st) {
      n(q, O, Y);
      for (let re = 0; re < B.length; re++)
        Oe(B[re], O, Y, ge);
      n(k.anchor, O, Y);
      return;
    }
    if (ne === qc) {
      R(k, O, Y);
      return;
    }
    if (ge !== 2 && K & 1 && A)
      if (ge === 0)
        A.beforeEnter(q), n(q, O, Y), Tn(() => A.enter(q), T);
      else {
        const { leave: re, delayLeave: ae, afterLeave: ye } = A, xe = () => {
          k.ctx.isUnmounted ? i(q) : n(q, O, Y);
        }, Ee = () => {
          q._isLeaving && q[N_](
            !0
            /* cancelled */
          ), re(q, () => {
            xe(), ye && ye();
          });
        };
        ae ? ae(q, xe, Ee) : Ee();
      }
    else
      n(q, O, Y);
  }, ze = (k, O, Y, ge = !1, T = !1) => {
    const {
      type: q,
      props: ne,
      ref: A,
      children: B,
      dynamicChildren: K,
      shapeFlag: Z,
      patchFlag: re,
      dirs: ae,
      cacheIndex: ye,
      memo: xe
    } = k;
    if (re === -2 && (T = !1), A != null && (ri(), La(A, null, Y, k, !0), ii()), ye != null && (O.renderCache[ye] = void 0), Z & 256) {
      O.ctx.deactivate(k);
      return;
    }
    const Ee = Z & 1 && ae, We = !Ra(k);
    let ie;
    if (We && (ie = ne && ne.onVnodeBeforeUnmount) && Nr(ie, O, k), Z & 6)
      j(k.component, Y, ge);
    else {
      if (Z & 128) {
        k.suspense.unmount(Y, ge);
        return;
      }
      Ee && Li(k, null, O, "beforeUnmount"), Z & 64 ? k.type.remove(
        k,
        O,
        Y,
        te,
        ge
      ) : K && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !K.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== st || re > 0 && re & 64) ? de(
        K,
        O,
        Y,
        !1,
        !0
      ) : (q === st && re & 384 || !T && Z & 16) && de(B, O, Y), ge && Xe(k);
    }
    const ke = xe != null && ye == null;
    (We && (ie = ne && ne.onVnodeUnmounted) || Ee || ke) && Tn(() => {
      ie && Nr(ie, O, k), Ee && Li(k, null, O, "unmounted"), ke && (k.el = null);
    }, Y);
  }, Xe = (k) => {
    const { type: O, el: Y, anchor: ge, transition: T } = k;
    if (O === st) {
      le(Y, ge);
      return;
    }
    if (O === qc) {
      L(k);
      return;
    }
    const q = () => {
      i(Y), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (k.shapeFlag & 1 && T && !T.persisted) {
      const { leave: ne, delayLeave: A } = T, B = () => ne(Y, q);
      A ? A(k.el, q, B) : B();
    } else
      q();
  }, le = (k, O) => {
    let Y;
    for (; k !== O; )
      Y = m(k), i(k), k = Y;
    i(O);
  }, j = (k, O, Y) => {
    const { bum: ge, scope: T, job: q, subTree: ne, um: A, m: B, a: K } = k;
    bh(B), bh(K), ge && Xs(ge), T.stop(), q && (q.flags |= 8, ze(ne, k, O, Y)), A && Tn(A, O), Tn(() => {
      k.isUnmounted = !0;
    }, O);
  }, de = (k, O, Y, ge = !1, T = !1, q = 0) => {
    for (let ne = q; ne < k.length; ne++)
      ze(k[ne], O, Y, ge, T);
  }, be = (k) => {
    if (k.shapeFlag & 6)
      return be(k.component.subTree);
    if (k.shapeFlag & 128)
      return k.suspense.next();
    const O = m(k.anchor || k.el), Y = O && O[k_];
    return Y ? m(Y) : O;
  };
  let Pe = !1;
  const Fe = (k, O, Y) => {
    let ge;
    k == null ? O._vnode && (ze(O._vnode, null, null, !0), ge = O._vnode.component) : S(
      O._vnode || null,
      k,
      O,
      null,
      null,
      null,
      Y
    ), O._vnode = k, Pe || (Pe = !0, sh(ge), Sg(), Pe = !1);
  }, te = {
    p: S,
    um: ze,
    m: Oe,
    r: Xe,
    mt: Ne,
    mc: ee,
    pc: E,
    pbc: F,
    n: be,
    o: e
  };
  return {
    render: Fe,
    hydrate: void 0,
    createApp: U_(Fe)
  };
}
function Xc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Ri({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kg(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ft(n) && ft(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Xr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && Kg(a, s)), s.type === ic && (s.patchFlag === -1 && (s = i[o] = Xr(s)), s.el = a.el), s.type === bi && !s.el && (s.el = a.el);
    }
}
function uS(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const p = e[n];
    if (p !== 0) {
      if (i = r[r.length - 1], e[i] < p) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, a = r.length - 1; o < a; )
        s = o + a >> 1, e[r[s]] < p ? o = s + 1 : a = s;
      p < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; )
    r[o] = a, a = t[a];
  return r;
}
function Bg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bg(t);
}
function bh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ug(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ug(t.subTree) : null;
}
const Yg = (e) => e.__isSuspense;
function dS(e, t) {
  t && t.pendingBranch ? ft(e) ? t.effects.push(...e) : t.effects.push(e) : v_(e);
}
const st = /* @__PURE__ */ Symbol.for("v-fgt"), ic = /* @__PURE__ */ Symbol.for("v-txt"), bi = /* @__PURE__ */ Symbol.for("v-cmt"), qc = /* @__PURE__ */ Symbol.for("v-stc"), $a = [];
let Yn = null;
function Te(e = !1) {
  $a.push(Yn = e ? null : []);
}
function fS() {
  $a.pop(), Yn = $a[$a.length - 1] || null;
}
let Ua = 1;
function vh(e, t = !1) {
  Ua += e, e < 0 && Yn && t && (Yn.hasOnce = !0);
}
function Xg(e) {
  return e.dynamicChildren = Ua > 0 ? Yn || To : null, fS(), Ua > 0 && Yn && Yn.push(e), e;
}
function $e(e, t, r, n, i, o) {
  return Xg(
    we(
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
function or(e, t, r, n, i) {
  return Xg(
    nt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function qg(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ya(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jg = ({ key: e }) => e ?? null, Js = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? rn(e) || /* @__PURE__ */ Sn(e) || yt(e) ? { i: Un, r: e, k: t, f: !!r } : e : null);
function we(e, t = null, r = null, n = 0, i = null, o = e === st ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jg(t),
    ref: t && Js(t),
    scopeId: xg,
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
    ctx: Un
  };
  return s ? (jd(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= rn(r) ? 8 : 16), Ua > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Yn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Yn.push(l), l;
}
const nt = pS;
function pS(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Eg) && (e = bi), qg(e)) {
    const s = Ko(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && jd(s, r), Ua > 0 && !o && Yn && (s.shapeFlag & 6 ? Yn[Yn.indexOf(e)] = s : Yn.push(s)), s.patchFlag = -2, s;
  }
  if (kS(e) && (e = e.__vccOpts), t) {
    t = hS(t);
    let { class: s, style: l } = t;
    s && !rn(s) && (t.class = St(s)), $t(l) && (/* @__PURE__ */ Ld(l) && !ft(l) && (l = xn({}, l)), t.style = Vt(l));
  }
  const a = rn(e) ? 1 : Yg(e) ? 128 : M_(e) ? 64 : $t(e) ? 4 : yt(e) ? 2 : 0;
  return we(
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
function hS(e) {
  return e ? /* @__PURE__ */ Ld(e) || $g(e) ? xn({}, e) : e : null;
}
function Ko(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, p = t ? qr(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Jg(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ft(o) ? o.concat(Js(t)) : [o, Js(t)] : Js(t)
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
    patchFlag: t && e.type !== st ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Ko(e.ssContent),
    ssFallback: e.ssFallback && Ko(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Vd(
    f,
    l.clone(f)
  ), f;
}
function Ma(e = " ", t = 0) {
  return nt(ic, null, e, t);
}
function wt(e = "", t = !1) {
  return t ? (Te(), or(bi, null, e)) : nt(bi, null, e);
}
function Er(e) {
  return e == null || typeof e == "boolean" ? nt(bi) : ft(e) ? nt(
    st,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qg(e) ? Xr(e) : nt(ic, null, String(e));
}
function Xr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ko(e);
}
function jd(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ft(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), jd(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !$g(t) ? t._ctx = Un : i === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else yt(t) ? (t = { default: t, _ctx: Un }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Ma(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function qr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = St([t.class, n.class]));
      else if (i === "style")
        t.style = Vt([t.style, n.style]);
      else if (Ul(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(ft(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Yl(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Nr(e, t, r, n = null) {
  $r(e, t, 7, [
    r,
    n
  ]);
}
const mS = Tg();
let gS = 0;
function yS(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || mS, o = {
    uid: gS++,
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
    scope: new Gv(
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
    propsOptions: jg(n, i),
    emitsOptions: Dg(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: zt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: zt,
    data: zt,
    props: zt,
    attrs: zt,
    slots: zt,
    refs: zt,
    setupState: zt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = X_.bind(null, o), e.ce && e.ce(o), o;
}
let vn = null;
const bS = () => vn || Un;
let Sl, Hu;
{
  const e = Jl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Sl = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => vn = r
  ), Hu = t(
    "__VUE_SSR_SETTERS__",
    (r) => Ya = r
  );
}
const cs = (e) => {
  const t = vn;
  return Sl(e), e.scope.on(), () => {
    e.scope.off(), Sl(t);
  };
}, _h = () => {
  vn && vn.scope.off(), Sl(null);
};
function Zg(e) {
  return e.vnode.shapeFlag & 4;
}
let Ya = !1;
function vS(e, t = !1, r = !1) {
  t && Hu(t);
  const { props: n, children: i } = e.vnode, o = Zg(e);
  tS(e, n, o, t), oS(e, i, r || t);
  const a = o ? _S(e, t) : void 0;
  return t && Hu(!1), a;
}
function _S(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, z_);
  const { setup: n } = r;
  if (n) {
    ri();
    const i = e.setupContext = n.length > 1 ? wS(e) : null, o = cs(e), a = ss(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = qm(a);
    if (ii(), o(), (s || e.sp) && !Ra(e) && Pg(e), s) {
      if (a.then(_h, _h), t)
        return a.then((l) => {
          Sh(e, l);
        }).catch((l) => {
          Ql(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Sh(e, a);
  } else
    Qg(e);
}
function Sh(e, t, r) {
  yt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $t(t) && (e.setupState = bg(t)), Qg(e);
}
function Qg(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Tr);
  {
    const i = cs(e);
    ri();
    try {
      j_(e);
    } finally {
      ii(), i();
    }
  }
}
const SS = {
  get(e, t) {
    return bn(e, "get", ""), e[t];
  }
};
function wS(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, SS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function oc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bg(u_(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Va)
        return Va[r](e);
    },
    has(t, r) {
      return r in t || r in Va;
    }
  })) : e.proxy;
}
function xS(e, t = !0) {
  return yt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kS(e) {
  return yt(e) && "__vccOpts" in e;
}
const vt = (e, t) => /* @__PURE__ */ h_(e, t, Ya), MS = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Gu;
const wh = typeof window < "u" && window.trustedTypes;
if (wh)
  try {
    Gu = /* @__PURE__ */ wh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const e0 = Gu ? (e) => Gu.createHTML(e) : (e) => e, NS = "http://www.w3.org/2000/svg", PS = "http://www.w3.org/1998/Math/MathML", Ur = typeof document < "u" ? document : null, xh = Ur && /* @__PURE__ */ Ur.createElement("template"), AS = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Ur.createElementNS(NS, e) : t === "mathml" ? Ur.createElementNS(PS, e) : r ? Ur.createElement(e, { is: r }) : Ur.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Ur.createTextNode(e),
  createComment: (e) => Ur.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ur.querySelector(e),
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
      xh.innerHTML = e0(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = xh.content;
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
}, CS = /* @__PURE__ */ Symbol("_vtc");
function IS(e, t, r) {
  const n = e[CS];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const wl = /* @__PURE__ */ Symbol("_vod"), t0 = /* @__PURE__ */ Symbol("_vsh"), no = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[wl] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : ba(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), ba(e, !0), n.enter(e)) : n.leave(e, () => {
      ba(e, !1);
    }) : ba(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ba(e, t);
  }
};
function ba(e, t) {
  e.style.display = t ? e[wl] : "none", e[t0] = !t;
}
const ES = /* @__PURE__ */ Symbol(""), OS = /(?:^|;)\s*display\s*:/;
function FS(e, t, r) {
  const n = e.style, i = rn(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (rn(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && Zs(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && Zs(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), Zs(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[ES];
      a && (r += ";" + a), n.cssText = r, o = OS.test(r);
    }
  } else t && e.removeAttribute("style");
  wl in e && (e[wl] = o ? n.display : "", e[t0] && (n.display = "none"));
}
const kh = /\s*!important$/;
function Zs(e, t, r) {
  if (ft(r))
    r.forEach((n) => Zs(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = TS(e, t);
    kh.test(r) ? e.setProperty(
      ro(n),
      r.replace(kh, ""),
      "important"
    ) : e[n] = r;
  }
}
const Mh = ["Webkit", "Moz", "ms"], Jc = {};
function TS(e, t) {
  const r = Jc[t];
  if (r)
    return r;
  let n = Cn(t);
  if (n !== "filter" && n in e)
    return Jc[t] = n;
  n = ql(n);
  for (let i = 0; i < Mh.length; i++) {
    const o = Mh[i] + n;
    if (o in e)
      return Jc[t] = o;
  }
  return t;
}
const Nh = "http://www.w3.org/1999/xlink";
function Ph(e, t, r, n, i, o = jv(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Nh, t.slice(6, t.length)) : e.setAttributeNS(Nh, t, r) : r == null || o && !eg(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Vr(r) ? String(r) : r
  );
}
function Ah(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? e0(r) : r);
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
    s === "boolean" ? r = eg(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Po(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function DS(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ch = /* @__PURE__ */ Symbol("_vei");
function LS(e, t, r, n, i = null) {
  const o = e[Ch] || (e[Ch] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = RS(t);
    if (n) {
      const p = o[t] = zS(
        n,
        i
      );
      Po(e, s, p, l);
    } else a && (DS(e, s, a, l), o[t] = void 0);
  }
}
const Ih = /(?:Once|Passive|Capture)$/;
function RS(e) {
  let t;
  if (Ih.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Ih); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ro(e.slice(2)), t];
}
let Zc = 0;
const VS = /* @__PURE__ */ Promise.resolve(), $S = () => Zc || (VS.then(() => Zc = 0), Zc = Date.now());
function zS(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    $r(
      jS(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = $S(), r;
}
function jS(e, t) {
  if (ft(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Eh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, HS = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? IS(e, n, a) : t === "style" ? FS(e, r, n) : Ul(t) ? Yl(t) || LS(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : GS(e, t, n, a)) ? (Ah(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ph(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (WS(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !rn(n))) ? Ah(e, Cn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ph(e, t, n, a));
};
function GS(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Eh(t) && yt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Eh(t) && rn(r) ? !1 : t in e;
}
function WS(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Cn(t);
  return Array.isArray(r) ? r.some((i) => Cn(i) === n) : Object.keys(r).some((i) => Cn(i) === n);
}
const Oh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ft(t) ? (r) => Xs(t, r) : t;
};
function KS(e) {
  e.target.composing = !0;
}
function Fh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qc = /* @__PURE__ */ Symbol("_assign");
function Th(e, t, r) {
  return t && (e = e.trim()), r && (e = Ad(e)), e;
}
const Dh = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Qc] = Oh(i);
    const o = n || i.props && i.props.type === "number";
    Po(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Qc](Th(e.value, r, o));
    }), (r || o) && Po(e, "change", () => {
      e.value = Th(e.value, r, o);
    }), t || (Po(e, "compositionstart", KS), Po(e, "compositionend", Fh), Po(e, "change", Fh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Qc] = Oh(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ad(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, BS = ["ctrl", "shift", "alt", "meta"], US = {
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
  exact: (e, t) => BS.some((r) => e[`${r}Key`] && !t.includes(r))
}, Ht = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = US[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, YS = /* @__PURE__ */ xn({ patchProp: HS }, AS);
let Lh;
function XS() {
  return Lh || (Lh = sS(YS));
}
const Hd = ((...e) => {
  const t = XS().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = JS(n);
    if (!i) return;
    const o = t._component;
    !yt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, qS(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function qS(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function JS(e) {
  return rn(e) ? document.querySelector(e) : e;
}
const ZS = "PanoramaSuite.Debug.Diagnostics", QS = "PanoramaSuite.Debug.ExportDiagnostics", eu = "pano_suite.diagnostics.v1", Rh = "pano_suite.diagnostics.previous.v1", ew = 300, tw = 2e5, nw = 100, rw = 20, iw = 1e3, ow = 2, Ts = 1024 * 1024;
function pi(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function aw() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function sw() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: aw,
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
function lw(e = {}) {
  const t = { ...sw(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, p = 0;
  const f = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), m = { created: 0, released: 0, collected: 0 }, _ = { created: 0, collected: 0 }, v = t.FinalizationRegistry ? new t.FinalizationRegistry((te) => {
    f.delete(te), m.collected += 1;
  }) : null, S = t.FinalizationRegistry ? new t.FinalizationRegistry((te) => {
    d.delete(te), _.collected += 1;
  }) : null, w = /* @__PURE__ */ new Set(), N = { created: 0, lost: 0, restored: 0, disposed: 0 }, W = [], R = /* @__PURE__ */ new Map();
  let L = { count: 0, maxMs: 0 }, g = /* @__PURE__ */ new Map(), z = { count: 0, maxMs: 0 };
  const H = [];
  function ee(te, Ae, k = void 0) {
    W.push(k === void 0 ? { t: t.clock(), type: te, label: Ae } : { t: t.clock(), type: te, label: Ae, detail: k }), W.length > nw && W.shift();
  }
  function oe(te, Ae, k, O, Y) {
    if (!r || !O || !t.WeakRef) return O;
    const ge = { ref: new t.WeakRef(O), label: Y };
    return te.add(ge), Ae == null || Ae.register(O, ge), k.created += 1, O;
  }
  function F(te, Ae = "") {
    return oe(f, v, m, te, Ae);
  }
  function G(te, Ae = "") {
    return oe(d, S, _, te, Ae);
  }
  function X({ label: te = "", width: Ae, height: k, offscreen: O = !1 } = {}) {
    const Y = globalThis.OffscreenCanvas;
    let ge;
    return O && typeof Y < "u" ? ge = new Y(Ae, k) : (ge = t.document().createElement("canvas"), Ae !== void 0 && k !== void 0 && (ge.width = Ae, ge.height = k)), F(ge, te);
  }
  function ue(te) {
    te.width = 0, te.height = 0, r && (m.released += 1);
  }
  function Ne(te = t.document(), Ae = "") {
    var k;
    return G(((k = te == null ? void 0 : te.createElement) == null ? void 0 : k.call(te, "video")) || null, Ae);
  }
  function _e(te, Ae) {
    if (!r || !te) return () => {
    };
    const k = { label: Ae, lost: !1, disposed: !1 };
    w.add(k), N.created += 1, ee("webgl-created", Ae);
    const O = () => {
      k.disposed || (k.lost = !0, N.lost += 1, ee("webglcontextlost", Ae));
    }, Y = () => {
      k.disposed || (k.lost = !1, N.restored += 1, ee("webglcontextrestored", Ae));
    };
    return te.addEventListener("webglcontextlost", O), te.addEventListener("webglcontextrestored", Y), () => {
      k.disposed || (k.disposed = !0, w.delete(k), N.disposed += 1, ee("webgl-disposed", Ae));
    };
  }
  function pe(te, Ae) {
    return R.set(te, Ae), () => {
      R.get(te) === Ae && R.delete(te);
    };
  }
  function J() {
    return r ? t.now() : -1;
  }
  function E(te) {
    if (te < 0 || !r) return;
    const Ae = t.now() - te;
    L.count += 1, L.maxMs = Math.max(L.maxMs, Ae);
  }
  function V(te, Ae) {
    if (Ae < 0 || !r) return;
    const k = t.now() - Ae, O = g.get(te) ?? { count: 0, maxMs: 0 };
    O.count += 1, O.maxMs = Math.max(O.maxMs, k), g.set(te, O);
  }
  function he() {
    let te = 0, Ae = 0, k = 0, O = [0, 0];
    const Y = {};
    for (const ge of f) {
      const T = ge.ref.deref();
      if (!T) continue;
      te += 1;
      const q = T.width * T.height;
      q > 0 && (Ae += 1), k += q, q > O[0] * O[1] && (O = [T.width, T.height]);
      const ne = Y[ge.label] ?? (Y[ge.label] = [0, 0]);
      ne[0] += 1, ne[1] += q;
    }
    return { ...m, alive: te, sized: Ae, pixels: k, mb: pi(k * 4 / Ts, 1), largest: O, byLabel: Y };
  }
  function Oe() {
    const te = [];
    let Ae = 0, k = 0;
    for (const O of d) {
      const Y = O.ref.deref();
      if (!Y) continue;
      Ae += 1;
      const ge = !Y.paused && !Y.ended;
      ge && (k += 1), te.length < rw && te.push({
        label: O.label,
        playing: ge,
        src: !!(Y.currentSrc || Y.src),
        size: [Y.videoWidth || 0, Y.videoHeight || 0],
        ready: Y.readyState ?? 0,
        connected: !!Y.isConnected
      });
    }
    return { ..._, alive: Ae, playing: k, list: te };
  }
  function ze() {
    const te = t.now(), Ae = t.memory(), k = {
      t: t.clock(),
      heap: Ae ? { used: pi(Ae.usedJSHeapSize / Ts, 1), total: pi(Ae.totalJSHeapSize / Ts, 1), limit: pi(Ae.jsHeapSizeLimit / Ts, 1) } : null,
      canvas: he(),
      webgl: { ...N, alive: [...w].filter((O) => !O.lost).length },
      video: Oe(),
      frame: { count: L.count, maxMs: pi(L.maxMs), longTasks: z.count, longTaskMaxMs: pi(z.maxMs) },
      renders: Object.fromEntries([...g].map(([O, Y]) => [O, { count: Y.count, maxMs: pi(Y.maxMs) }])),
      sources: Object.fromEntries([...R].map(([O, Y]) => [O, Y()])),
      costMs: pi(p, 3)
    };
    return L = { count: 0, maxMs: 0 }, g = /* @__PURE__ */ new Map(), z = { count: 0, maxMs: 0 }, H.push({ record: k, text: JSON.stringify(k) }), H.length > ew && H.shift(), l += 1, l % ow === 0 && le(), p = t.now() - te, k;
  }
  function Xe(te = tw) {
    const Ae = JSON.stringify({ ...o, events: W }).slice(0, -1);
    let k = te - Ae.length - 14, O = H.length;
    for (; O > 0 && k - H[O - 1].text.length - 1 >= 0; )
      O -= 1, k -= H[O].text.length + 1;
    return `${Ae},"records":[${H.slice(O).map((Y) => Y.text).join(",")}]}`;
  }
  function le() {
    if (!o) return;
    const te = t.storage();
    if (te) {
      o.savedAt = t.clock();
      try {
        te.setItem(eu, Xe());
      } catch {
      }
    }
  }
  function j() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", le();
  }
  function de() {
    var Y;
    if (n) return i;
    n = !0;
    const te = t.storage();
    if (!te) return null;
    let Ae = null;
    try {
      if (Ae = te.getItem(eu), Ae === null) {
        const ge = te.getItem(Rh);
        return i = ge === null ? null : JSON.parse(ge), i;
      }
      te.setItem(Rh, Ae), te.removeItem(eu), i = JSON.parse(Ae);
    } catch {
      return i;
    }
    const k = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], O = k.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${k.length} records kept. Its last records:`,
      JSON.stringify(O)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((Y = k.at(-1)) == null ? void 0 : Y.t) || 0).toISOString()}; ${k.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(O)
    ), i;
  }
  function be(te) {
    const Ae = te === !0;
    if (de(), Ae !== r) {
      if (r = Ae, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, H.length = 0, s = t.observeLongTasks((k) => {
          for (const O of k)
            z.count += 1, z.maxMs = Math.max(z.maxMs, O.duration);
        }), t.addUnload(j), a = t.setInterval(ze, iw), le();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(j), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", le();
    }
  }
  function Pe() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...W], records: H.map((te) => te.record) } : null,
      previous: i
    };
  }
  function Fe() {
    const te = t.document(), Ae = new Blob([JSON.stringify(Pe(), null, 1)], { type: "application/json" }), k = URL.createObjectURL(Ae), O = te.createElement("a");
    O.href = k, O.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, O.click(), setTimeout(() => URL.revokeObjectURL(k), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: X,
    releaseCanvas: ue,
    trackCanvas: F,
    createVideo: Ne,
    trackVideo: G,
    watchContext: _e,
    addSource: pe,
    frameStart: J,
    frameEnd: E,
    renderEnd: V,
    sample: ze,
    serialize: Xe,
    recoverPrevious: de,
    setEnabled: be,
    exportData: Pe,
    download: Fe
  };
}
const $n = lw(), wn = $n.createCanvas, Wu = $n.releaseCanvas, tu = $n.trackCanvas, ac = $n.createVideo, Vh = $n.trackVideo, cw = $n.addSource, uw = $n.frameStart, dw = $n.frameEnd;
function n0(e, t) {
  const r = $n.watchContext(e.canvas, t), n = $n.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = $n.frameStart(), l = o(a);
    return $n.renderEnd(t, s), l;
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
const fw = {
  id: ZS,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => $n.setEnabled(e === !0)
}, $h = {
  id: QS,
  label: "Export Panorama Suite diagnostics",
  function: () => $n.download()
};
function Ao(e, t) {
  const r = wn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function pw() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function zh(e, t = 8) {
  var f;
  const r = (f = e == null ? void 0 : e.getContext) == null ? void 0 : f.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, p = -1;
  for (let d = 0; d < i; d += 1)
    for (let m = 0; m < n; m += 1)
      o[(d * n + m) * 4 + 3] <= t || (m < a && (a = m), d < s && (s = d), m > l && (l = m), d > p && (p = d));
  return l < a || p < s ? null : {
    minX: a,
    minY: s,
    maxX: l,
    maxY: p,
    width: l - a + 1,
    height: p - s + 1,
    aspect: Number(((l - a + 1) / Math.max(1, p - s + 1)).toFixed(4))
  };
}
function Gd(e, t) {
  return wn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function gi(e, t, r) {
  if (!e) return Ao(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Jt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function yn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let nu = null, ru = null, jh = null, Hh = null, qt = null, va = null;
function hw() {
  if (ru) return ru;
  const e = 6, t = 17, r = wn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), ru = r, r;
}
function iu(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  nu = gi(nu, r, n);
  const i = nu;
  Jt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Hh !== i.ctx && (jh = i.ctx.createPattern(hw(), "repeat"), Hh = i.ctx), i.ctx.fillStyle = jh, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function mw(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function gw(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function yw(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function bw(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Kt = /* @__PURE__ */ new Map(), Wd = 128;
function vw(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Kt.has(l)) {
    const W = Kt.get(l);
    return Kt.delete(l), Kt.set(l, W), W;
  }
  Kt.size >= Wd && Kt.delete(Kt.keys().next().value);
  const p = a * 2 + 2, f = a + 1, d = Gd(p, p), m = d.getContext("2d"), _ = s * a, v = a + 1, S = `rgba(${r},${n},${i},${o})`, w = `rgba(${r},${n},${i},0)`, N = m.createRadialGradient(f, f, _, f, f, v);
  return N.addColorStop(0, S), N.addColorStop(1, w), m.fillStyle = N, m.fillRect(0, 0, p, p), Kt.set(l, d), d;
}
function _w(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: p, a: f } = n, d = Math.max(2, Math.ceil(e) * 2), m = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, i), v = Math.max(0, Math.min(0.99, o)), S = Math.max(0, Math.min(1, a ?? 0)), w = `chisel:${d}:${m}:${r.toFixed(2)}:${s}:${l}:${p}:${f.toFixed(3)}:${_.toFixed(2)}:${v.toFixed(2)}:${S.toFixed(2)}`;
  if (Kt.has(w)) {
    const ee = Kt.get(w);
    return Kt.delete(w), Kt.set(w, ee), ee;
  }
  Kt.size >= Wd && Kt.delete(Kt.keys().next().value);
  const N = Gd(d, m), W = N.getContext("2d"), R = W.createImageData(d, m), L = R.data, g = Math.max(0, e - t), z = Math.max(0, Math.min(1, r)), H = 1 + _;
  for (let ee = 0; ee < m; ee++)
    for (let oe = 0; oe < d; oe++) {
      const F = oe + 0.5 - e, G = ee + 0.5 - t, X = Math.max(Math.abs(F) - g, 0), Ne = Math.hypot(X, G) / t;
      if (Ne >= 1) continue;
      const _e = Ne <= z ? 1 : Math.max(0, (1 - Ne) / Math.max(1e-4, 1 - z)), pe = 1 - Ne, J = 1 + _ * (1 - pe) * (1 - pe), E = 1 - v * pe * pe, V = J * E / H;
      let he = 1;
      if (S > 0) {
        const Xe = Math.floor((G + t) / 1.5), le = Math.floor((F + e) / 8), j = Zi(Vo(Xe * 41 + 500, le * 19 + 300));
        he = 1 - S * 0.42 * j;
      }
      const Oe = Math.round(255 * Math.min(1, f * _e * V * he));
      if (Oe <= 0) continue;
      const ze = (ee * d + oe) * 4;
      L[ze] = s, L[ze + 1] = l, L[ze + 2] = p, L[ze + 3] = Oe;
    }
  return W.putImageData(R, 0, 0), Kt.set(w, N), N;
}
function Vo(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Zi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Sw(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, p = Math.max(0, r - n), f = Math.max(Math.abs(s) - p, 0), d = Math.hypot(f, l) / n;
  if (d >= 1) return 0;
  const m = Zi(Vo(e * 17 + 3, t * 13 + 7)), _ = d + o * 0.22 * (m - 0.5);
  if (_ >= 1) return 0;
  const v = _ <= i ? 1 : Math.max(0, (1 - _) / Math.max(1e-4, 1 - i)), S = ww(e, t, s, l, r, n), w = o * 0.55;
  if (S < w) return 0;
  const W = 0.45 + 0.55 * ((S - w) / Math.max(1e-4, 1 - w));
  return Math.round(255 * Math.min(1, a * v * W));
}
function ww(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = Zi(Vo(a * 13 + 700, s * 17 + 400)), p = Math.floor((r + i) / 1.5), f = Math.floor((n + o) / 1.5), d = Zi(Vo(p * 23 + 800, f * 29 + 500)), m = Zi(Vo(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + d * 0.3 + m * 0.15;
}
function xw(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, p = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), d = Math.max(0, Math.min(1, i)), m = `crayon:${p}:${f}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${d.toFixed(2)}`;
  if (Kt.has(m)) {
    const W = Kt.get(m);
    return Kt.delete(m), Kt.set(m, W), W;
  }
  Kt.size >= Wd && Kt.delete(Kt.keys().next().value);
  const _ = Gd(p, f), v = _.getContext("2d"), S = v.createImageData(p, f), w = S.data, N = Math.max(0, Math.min(1, r));
  for (let W = 0; W < f; W++)
    for (let R = 0; R < p; R++) {
      const L = Sw(R, W, e, t, N, d, l);
      if (L <= 0) continue;
      const g = (W * p + R) * 4;
      w[g] = o, w[g + 1] = a, w[g + 2] = s, w[g + 3] = L;
    }
  return v.putImageData(S, 0, 0), Kt.set(m, _), _;
}
function r0(e, t, r) {
  var S, w;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = yw(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = kw(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((S = t == null ? void 0 : t.angle) == null ? void 0 : S.value) ?? 0), p = bw(t, i), f = String(((w = t == null ? void 0 : t.targetSpace) == null ? void 0 : w.viewMode) || ""), d = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && f !== "unwrap", m = t == null ? void 0 : t.scatter, _ = m ? { radius: Number(m.radius ?? 1.5), count: Math.max(1, Math.round(m.count ?? 6)) } : null;
  let v;
  if (n === "chisel") {
    const N = i * s, W = i, R = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), L = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), g = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = _w(N, W, o, a, R, L, g);
  } else if (n === "crayon") {
    const N = i * s, W = i, R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = xw(N, W, o, a, R);
  } else
    v = vw(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: v, radiusPx: i, spacingPx: p, desc: r, aspect: s, angle: l, stampKind: n, scatter: _, latitudeCorrection: d };
}
function kw(e) {
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
function Mw(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Gh(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(p, f) {
    o === 0 ? e.ctx.drawImage(e.stampTex, p - i, f - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(p, f), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Kd(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: p, count: f } = e.scatter, d = p * e.radiusPx * i, m = Vo(t, r);
    for (let _ = 0; _ < f; _++) {
      const v = Zi(m + _ * 2) * Math.PI * 2, S = Math.sqrt(Zi(m + _ * 2 + 1)) * d, w = t + Math.cos(v) * S, N = r + Math.sin(v) * S, W = Math.max(0.5, e.radiusPx * i * 0.48), R = (0.5 - N / Math.max(1, e.desc.height)) * Math.PI, L = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(R)) : 1, g = W * e.aspect * L;
      Gh(e, w, N, W, g);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  Gh(e, t, r, o, l);
}
function Wh(e, t, r) {
  const n = gw(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = r0(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let m = 0; m < n.length; m++) {
    let _ = Number(n[m].u || 0) * i;
    const v = Number(n[m].v || 0) * o;
    m > 0 && Math.abs(_ - s[m - 1].x) > i * 0.5 && (_ += _ < s[m - 1].x ? i : -i), s.push({ x: _, y: v });
  }
  if (Kd(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], p = s[0], f = s[0], d = 0;
  for (let m = 1; m < s.length; m++) {
    const _ = s[m], v = { x: (p.x + _.x) * 0.5, y: (p.y + _.y) * 0.5 };
    m === 1 ? d = Xa(a, f.x, f.y, v.x, v.y, d) : d = xl(a, l, f, v, _, d), l = p, p = _, f = v;
  }
  s.length === 2 ? Xa(a, f.x, f.y, p.x, p.y, d) : xl(a, l, f, p, p, d), e.restore();
}
function Qs(e, t, r) {
  var d;
  const n = Array.isArray((d = t == null ? void 0 : t.geometry) == null ? void 0 : d.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = Mw(t), s = [];
  let l = 1 / 0, p = -1 / 0;
  for (let m = 0; m < n.length; m++) {
    const _ = mw(n[m]);
    let v = Number(_.x || 0) * i;
    m > 0 && Math.abs(v - s[m - 1].x) > i * 0.5 && (v += v < s[m - 1].x ? i : -i), s.push({ x: v, y: Number(_.y || 0) * o }), v < l && (l = v), v > p && (p = v);
  }
  function f(m) {
    e.beginPath(), e.moveTo(s[0].x + m, s[0].y);
    for (let _ = 1; _ < s.length; _++) e.lineTo(s[_].x + m, s[_].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, f(0), l < 0 && f(i), p > i && f(-i), e.restore();
}
function Ds(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    Qs(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Wh(e, t, r) : (va = gi(va, r.width, r.height), Jt(va), Wh(va.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(va.canvas, 0, 0), e.restore());
}
function Vi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Xa(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let p = e.spacingPx - o;
  for (; p <= l; ) {
    const f = p / l;
    Kd(e, t + a * f, r + s * f, 1), p += e.spacingPx;
  }
  return l - p + e.spacingPx;
}
function xl(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, f = 0, d = s, m = d + l, _ = m + p, v = m - d, S = 16;
  let w = o, N = r.x, W = r.y;
  for (let R = 1; R <= S; R++) {
    const L = d + v * R / S, g = ((d - L) * t.x + (L - f) * r.x) / (d - f), z = ((d - L) * t.y + (L - f) * r.y) / (d - f), H = ((m - L) * r.x + (L - d) * n.x) / (m - d), ee = ((m - L) * r.y + (L - d) * n.y) / (m - d), oe = ((_ - L) * n.x + (L - m) * i.x) / (_ - m), F = ((_ - L) * n.y + (L - m) * i.y) / (_ - m), G = ((m - L) * g + (L - f) * H) / (m - f), X = ((m - L) * z + (L - f) * ee) / (m - f), ue = ((_ - L) * H + (L - d) * oe) / (_ - d), Ne = ((_ - L) * ee + (L - d) * F) / (_ - d), _e = ((m - L) * G + (L - d) * ue) / (m - d), pe = ((m - L) * X + (L - d) * Ne) / (m - d);
    w = Xa(e, N, W, _e, pe, w), N = _e, W = pe;
  }
  return w;
}
function Nw(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let p = t * a;
  if (l && Math.abs(p - l.prev.x) > a * 0.5 && (p += p < l.prev.x ? a : -a), !l) {
    const _ = r0(i, n, o), v = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), S = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), w = String((n == null ? void 0 : n.toolKind) || "") === "eraser", N = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Kd(_, p, s, 1), e.activeStroke = {
      pprev: { x: p, y: s },
      prev: { x: p, y: s },
      lastMidX: p,
      lastMidY: s,
      stampTex: _.stampTex,
      radiusPx: _.radiusPx,
      spacingPx: _.spacingPx,
      aspect: _.aspect,
      angle: _.angle,
      stampKind: _.stampKind,
      scatter: _.scatter,
      latitudeCorrection: _.latitudeCorrection,
      strokeOpacity: v,
      velocityWidthFactor: S,
      distSinceStamp: 0,
      isEraser: w,
      layerKind: N,
      pointCount: 1
    }, yn(e);
    return;
  }
  const f = (l.prev.x + p) * 0.5, d = (l.prev.y + s) * 0.5;
  i.globalCompositeOperation = "source-over";
  const m = {
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
  l.pointCount === 1 ? l.distSinceStamp = Xa(m, l.lastMidX, l.lastMidY, f, d, l.distSinceStamp) : l.distSinceStamp = xl(
    m,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: f, y: d },
    { x: p, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: p, y: s }, l.lastMidX = f, l.lastMidY = d, l.pointCount++, yn(e);
}
function Bd(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Ao(t, r), a = {
    descriptor: n,
    committedMask: Ao(t, r),
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
    committedPaint: Ao(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Ao(t, r);
  let p = null, f = "", d = null;
  const m = /* @__PURE__ */ new Map();
  let _ = null;
  function v(ue) {
    return {
      actionGroupId: ue,
      descriptor: n,
      committedPaint: Ao(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function S(ue) {
    let Ne = i.get(ue);
    return Ne || (Ne = v(ue), i.set(ue, Ne)), Ne;
  }
  function w(ue) {
    return f === "mask" ? a : p ? S(p) : s;
  }
  function N(ue) {
    var V;
    const Ne = !d || d.length !== ue.length || ue.some((he, Oe) => he !== d[Oe]), _e = f === "paint" && ((V = p ? i.get(p) : s) == null ? void 0 : V.activeStroke) || null;
    let pe = a.displayDirty || s.displayDirty || Ne;
    for (const he of ue) {
      const Oe = i.get(he);
      if (Oe != null && Oe.displayDirty) {
        pe = !0;
        break;
      }
    }
    if (_e && (pe = !0), !pe) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const he of ue) {
      const Oe = i.get(he);
      Oe && (Oe.displayDirty = !1);
    }
    d = [...ue];
    const J = l.ctx;
    Jt(l);
    const E = !!(_e != null && _e.isEraser);
    for (const he of ue) {
      const Oe = i.get(he);
      if (!Oe) continue;
      const Xe = p === Oe.actionGroupId && f === "paint" ? Oe.activeStroke : null;
      if (E)
        qt = gi(qt, t, r), Jt(qt), qt.ctx.drawImage(Oe.committedPaint.canvas, 0, 0), Vi(qt.ctx, o.canvas), J.drawImage(qt.canvas, 0, 0);
      else if (J.drawImage(Oe.committedPaint.canvas, 0, 0), Xe) {
        const le = Oe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Xe.strokeOpacity ?? 1));
        J.save(), J.globalAlpha = le, J.drawImage(o.canvas, 0, 0), J.restore();
      }
    }
  }
  function W(ue) {
    var _e, pe, J, E, V;
    for (const he of i.values())
      Jt(he.committedPaint), Jt(he.currentStroke), he.activeStroke = null, yn(he);
    Jt(a.committedMask), Jt(a.currentStroke), a.activeStroke = null, a.painted = !1, m.clear(), yn(a), yn(s), d = null;
    const Ne = [
      ...Array.isArray((pe = (_e = ue == null ? void 0 : ue.painting) == null ? void 0 : _e.paint) == null ? void 0 : pe.strokes) ? ue.painting.paint.strokes : [],
      ...Array.isArray((E = (J = ue == null ? void 0 : ue.painting) == null ? void 0 : J.mask) == null ? void 0 : E.strokes) ? ue.painting.mask.strokes : []
    ];
    for (const he of Ne) {
      if (((V = he == null ? void 0 : he.targetSpace) == null ? void 0 : V.kind) !== "ERP_GLOBAL") continue;
      const Oe = String((he == null ? void 0 : he.layerKind) || "paint"), Xe = String((he == null ? void 0 : he.toolKind) || "pen") === "eraser";
      if (Oe === "mask") {
        const le = a.descriptor;
        Xe ? (qt = gi(qt, le.width, le.height), Jt(qt), Ds(qt.ctx, he, le), Vi(a.committedMask.ctx, qt.canvas)) : (Ds(a.committedMask.ctx, he, le), a.painted = !0);
        continue;
      }
      if (Xe) {
        qt = gi(qt, n.width, n.height), Jt(qt), Ds(qt.ctx, he, n);
        for (const le of i.values())
          Vi(le.committedPaint.ctx, qt.canvas), yn(le);
      } else {
        const le = String((he == null ? void 0 : he.actionGroupId) || "__default__"), j = S(le), de = j.descriptor;
        Ds(j.committedPaint.ctx, he, de), yn(j);
      }
    }
    N([...i.keys()]);
  }
  function R(ue, Ne) {
    f = String((ue == null ? void 0 : ue.layerKind) || "");
    const _e = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser";
    if (f === "mask")
      p = null, Jt(a.currentStroke), a.activeStroke = null, yn(a);
    else {
      const pe = _e ? s : S(String((ue == null ? void 0 : ue.actionGroupId) || "__default__"));
      p = _e ? "" : String((ue == null ? void 0 : ue.actionGroupId) || "__default__"), Jt(pe.currentStroke), pe.activeStroke = null, yn(pe);
    }
  }
  function L(ue, Ne) {
    var Oe;
    const _e = String((ue == null ? void 0 : ue.layerKind) || "paint"), pe = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser", J = _e === "mask" ? a : pe ? s : S(String((ue == null ? void 0 : ue.actionGroupId) || p || "__default__")), E = J.activeStroke, V = J.descriptor;
    if (E && E.pointCount > 1) {
      const ze = J.currentStroke.ctx;
      ze.globalCompositeOperation = "source-over";
      const Xe = {
        ctx: ze,
        stampTex: E.stampTex,
        radiusPx: E.radiusPx,
        spacingPx: E.spacingPx,
        desc: V,
        aspect: E.aspect,
        angle: E.angle,
        stampKind: E.stampKind,
        scatter: E.scatter,
        latitudeCorrection: E.latitudeCorrection
      };
      E.pointCount === 2 ? Xa(Xe, E.lastMidX, E.lastMidY, E.prev.x, E.prev.y, E.distSinceStamp) : xl(Xe, E.pprev, { x: E.lastMidX, y: E.lastMidY }, E.prev, E.prev, E.distSinceStamp);
    }
    J.lassoPreviewActive && (Jt(J.currentStroke), Qs(J.currentStroke.ctx, ue, V), J.lassoPreviewActive = !1);
    const he = _e === "mask" ? a.committedMask : J.committedPaint;
    if (pe && _e === "paint")
      for (const ze of i.values())
        Vi(ze.committedPaint.ctx, J.currentStroke.canvas), yn(ze);
    else if (pe)
      Vi(he.ctx, J.currentStroke.canvas);
    else {
      _e === "mask" && (a.painted = !0);
      const ze = Math.max(0, Math.min(1, (E == null ? void 0 : E.strokeOpacity) ?? 1));
      he.ctx.save(), he.ctx.globalAlpha = ze, he.ctx.drawImage(J.currentStroke.canvas, 0, 0), he.ctx.restore();
    }
    pw() && (String((ue == null ? void 0 : ue.toolKind) || ""), String((V == null ? void 0 : V.kind) || ""), Number((V == null ? void 0 : V.width) || 0), Number((V == null ? void 0 : V.height) || 0), String(((Oe = ue == null ? void 0 : ue.targetSpace) == null ? void 0 : Oe.viewMode) || ""), Number((ue == null ? void 0 : ue.aspect) ?? 1), zh(J.currentStroke.canvas), zh(he.canvas), void 0), Jt(J.currentStroke), J.activeStroke = null, yn(J), m.clear(), p = null, f = "", N([...i.keys()]);
  }
  function g(ue) {
    if (f === "mask")
      Jt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, yn(a);
    else if (f === "paint" && !p)
      Jt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, yn(s);
    else if (p) {
      const Ne = i.get(p);
      Ne && (Jt(Ne.currentStroke), Ne.activeStroke = null, Ne.lassoPreviewActive = !1, yn(Ne));
    }
    m.clear(), p = null, f = "", N([...i.keys()]);
  }
  function z(ue, Ne) {
    var pe;
    if (f = String((ue == null ? void 0 : ue.layerKind) || ""), String(((pe = ue == null ? void 0 : ue.geometry) == null ? void 0 : pe.geometryKind) || "") === "lasso_fill") {
      if (f === "mask")
        Jt(a.currentStroke), Qs(a.currentStroke.ctx, ue, a.descriptor), a.lassoPreviewActive = !0, yn(a);
      else {
        const J = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser", E = J ? s : S(String((ue == null ? void 0 : ue.actionGroupId) || p || "__default__"));
        p = J ? "" : String((ue == null ? void 0 : ue.actionGroupId) || p || "__default__"), Jt(E.currentStroke), Qs(E.currentStroke.ctx, ue, E.descriptor), E.lassoPreviewActive = !0, yn(E);
      }
      N([...i.keys()]);
    }
  }
  function H(ue) {
    return N(ue ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ee(ue) {
    return i.get(String(ue)) ?? null;
  }
  function oe() {
    return [...i.keys()];
  }
  function F(ue) {
    var ze;
    const Ne = i.get(String(ue));
    if (!Ne) return null;
    const _e = f === "paint" && p === Ne.actionGroupId, pe = f === "paint" && ((ze = p ? i.get(p) : s) == null ? void 0 : ze.activeStroke) || null, J = !!(pe != null && pe.isEraser), E = _e ? Ne.activeStroke : null;
    if (!J && !E) return Ne.committedPaint.canvas;
    const V = `${Ne.revision}:${s.revision}:${J}`, he = m.get(Ne.actionGroupId);
    if ((he == null ? void 0 : he.key) === V) return he.surface.canvas;
    const Oe = gi((he == null ? void 0 : he.surface) ?? null, t, r);
    return Jt(Oe), Oe.ctx.drawImage(Ne.committedPaint.canvas, 0, 0), J ? Vi(Oe.ctx, o.canvas) : (Oe.ctx.save(), Oe.ctx.globalAlpha = Ne.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, E.strokeOpacity ?? 1)), Oe.ctx.drawImage(o.canvas, 0, 0), Oe.ctx.restore()), m.set(Ne.actionGroupId, { key: V, surface: Oe }), Oe.canvas;
  }
  function G() {
    const ue = f === "mask" ? a.activeStroke : null;
    return !a.painted && (!ue || ue.isEraser) ? null : `${a.revision}:${!!ue}`;
  }
  function X() {
    const ue = G();
    if (ue === null)
      return _ = null, null;
    if ((_ == null ? void 0 : _.key) === ue) return _.surface.canvas;
    const Ne = gi((_ == null ? void 0 : _.surface) ?? null, t, r);
    Jt(Ne);
    const _e = f === "mask" ? a.activeStroke : null;
    return _e != null && _e.isEraser ? (qt = gi(qt, t, r), Jt(qt), qt.ctx.drawImage(a.committedMask.canvas, 0, 0), Vi(qt.ctx, o.canvas), iu(Ne.ctx, qt.canvas)) : (iu(Ne.ctx, a.committedMask.canvas), _e && iu(Ne.ctx, o.canvas)), _ = { key: ue, surface: Ne }, Ne.canvas;
  }
  return {
    rebuildCommitted: W,
    beginStroke: R,
    appendStrokePoint: Nw,
    updateActiveStroke: z,
    commitActiveStroke: L,
    cancelActiveStroke: g,
    getErpTarget: H,
    ensureTarget: w,
    getGroupTarget: ee,
    getGroupDisplayCanvas: F,
    getMaskDisplayCanvas: X,
    getMaskDisplayRevision: G,
    getAllGroupIds: oe
  };
}
function Ie(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Wt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Ud(e, t) {
  let r = Wt(t) - Wt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Ku = 3;
function _a(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function kl(e, t = 0) {
  const r = _a(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = _a(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = _a(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = _a(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(_a(t) || 0);
}
function i0(e) {
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
const Kh = Math.PI / 180, Bh = 0.12, Pw = Ku, Aw = 35, Cw = 140, Na = 100, Iw = 20, Uh = 0.8;
function Ew(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ie(Number(e || Na), 1, 179) * Kh;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Kh;
}
function Yd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Na })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function p(W, R = null) {
    s && s(W, R);
  }
  function f(W, R, L = null, g = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(W || 0), l.drag.lastY = Number(R || 0), l.drag.lastTs = Number(g || performance.now()), l.drag.pointerId = L, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], p("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: L }), !0;
  }
  function d(W, R, L = "pano", g = performance.now()) {
    if (!l.drag.active) return !1;
    const z = Number(g || performance.now()), H = Number(W), ee = Number(R), oe = H - l.drag.lastX, F = ee - l.drag.lastY;
    l.drag.lastX = H, l.drag.lastY = ee, l.drag.lastTs = z;
    const G = n() || { x: 1, y: 1 }, X = Number(G.x || 1), ue = Number(G.y || 1), Ne = { ...t() };
    let _e = 0, pe = 0;
    if (L === "unwrap") {
      const E = i() || { w: 1, h: 1 }, V = Math.max(1, Number(E.w || 1)), he = Math.max(1, Number(E.h || 1)), Oe = oe / V, ze = F / he;
      _e = -Oe * 360 * X, pe = ze * 180 * ue;
    } else {
      const E = o() || { w: 0, h: 0 }, V = Math.max(1, Number(E.w || 0)), he = Math.max(1, Number(E.h || 0));
      if (V > 1 && he > 1) {
        const Oe = Ie(Number(Ne.fov || Na), 1, 179), ze = Ie(Ew(Oe, V, he), 0.1, 179);
        _e = -(oe / V) * Oe * X, pe = F / he * ze * ue;
      } else
        _e = -oe * Bh * X, pe = F * Bh * ue;
    }
    Ne.yaw = Wt(Number(Ne.yaw || 0) + _e), Ne.pitch = Ie(Number(Ne.pitch || 0) + pe, -89.9, 89.9), r(Ne), l.velHistory.push({ ts: z, yaw: Ne.yaw, pitch: Ne.pitch });
    let J = 0;
    for (; J < l.velHistory.length - 1 && l.velHistory[J].ts < z - 100; ) J++;
    return J > 0 && l.velHistory.splice(0, J), l.inertia.active = !1, l.inertia.lastTs = z, a(), p("drag", { phase: "move", dx: oe, dy: F, dYaw: _e, dPitch: pe }), !0;
  }
  function m(W = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const R = Number(W || performance.now());
    l.drag.lastTs = R;
    const L = l.velHistory.filter((z) => R - z.ts <= 80);
    if (L.length >= 2) {
      const z = L[0], H = L.at(-1), ee = Math.max(1e-3, (H.ts - z.ts) / 1e3);
      let oe = H.yaw - z.yaw;
      oe > 180 && (oe -= 360), oe < -180 && (oe += 360), l.inertia.vx = oe / ee, l.inertia.vy = (H.pitch - z.pitch) / ee;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const g = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = g > Iw, l.inertia.lastTs = R, p("drag", { phase: "end", speed: g, inertiaActive: l.inertia.active }), !0;
  }
  function _(W = performance.now()) {
    if (!l.inertia.active) return !1;
    const R = Number(W || performance.now()), L = Math.max(1e-3, (R - (l.inertia.lastTs || R)) / 1e3);
    l.inertia.lastTs = R;
    const g = { ...t() };
    g.yaw = Wt(Number(g.yaw || 0) + l.inertia.vx * L), g.pitch = Ie(Number(g.pitch || 0) + l.inertia.vy * L, -89.9, 89.9);
    const z = Math.exp(-5.5 * L);
    return l.inertia.vx *= z, l.inertia.vy *= z, Math.abs(l.inertia.vx) < Uh && Math.abs(l.inertia.vy) < Uh && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(g), a(), l.inertia.active;
  }
  function v() {
    const W = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], W;
  }
  function S(W) {
    const R = Math.sign(Number(W || 0));
    if (!R) return !1;
    const L = { ...t() }, g = Number(L.fov || Na);
    return L.fov = Ie(g + R * Pw, Aw, Cw), r(L), a(), p("wheel", { deltaSign: R, fovBefore: g, fovAfter: L.fov }), !0;
  }
  function w(W, R = 0) {
    return S(kl(W, R));
  }
  function N() {
    r({ yaw: 0, pitch: 0, fov: Na }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: f,
    moveDrag: d,
    endDrag: m,
    stepInertia: _,
    stopMotion: v,
    applyWheel: S,
    applyWheelEvent: w,
    resetView: N
  };
}
const Dt = Math.PI / 180, sn = 180 / Math.PI;
function ir(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ml(e, t) {
  return ir(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Nl(e, t) {
  return ir(e.x * t, e.y * t, e.z * t);
}
function ou(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Xd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ir(e.x / t, e.y / t, e.z / t);
}
function Vn(e, t) {
  const r = e * Dt, n = t * Dt, i = Math.cos(n);
  return ir(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function Zo(e, t, r = 0) {
  const n = Number(e || 0) * Dt, i = Number(t || 0) * Dt, o = r * Dt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), p = Math.sin(i), f = Math.cos(o), d = Math.sin(o);
  return {
    right: ir(
      a * f - s * p * d,
      l * d,
      -s * f - a * p * d
    ),
    up: ir(
      -a * d - s * p * f,
      l * f,
      s * d - a * p * f
    ),
    fwd: ir(s * l, p, a * l)
  };
}
function Pl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Rt(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Ow() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Fw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Rt(n.z_index ?? n.zIndex, t.length);
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
function Tw(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Dw(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Rt(e.t, 0), n = Rt(e.widthScale, null), i = Rt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Rt(e.u, null), a = Rt(e.v, null);
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
    const o = Rt(e.u, null), a = Rt(e.v, null);
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
function Ls(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Dw(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Lw(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Ls(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Ls(e.points, t, 1);
  if (!o) return null;
  const a = Ls(e.rawPoints, t, 1), s = Ls(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function Rw(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Tw(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Lw(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Rt(e.size, null), a = Rt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const p = Rt(e.radiusValue, null), f = String(e.radiusModel || "").trim() || null;
  let d = null;
  if (t === "paint") {
    const m = e.color;
    if (!m || typeof m != "object") return null;
    d = {
      r: Math.max(0, Math.min(1, Rt(m.r, 0))),
      g: Math.max(0, Math.min(1, Rt(m.g, 0))),
      b: Math.max(0, Math.min(1, Rt(m.b, 0))),
      a: Math.max(0, Math.min(1, Rt(m.a, 1)))
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
    hardness: Rt(e.hardness, null),
    flow: Rt(e.flow, null),
    spacing: Rt(e.spacing, null),
    createdAt: Math.trunc(Rt(e.createdAt, 0)),
    color: d,
    radiusModel: f,
    radiusValue: p == null ? null : Math.max(0, p),
    geometry: i
  };
}
function Yh(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Rw(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function Vw(e) {
  if (!e || typeof e != "object") return null;
  const t = Rt(e.u0, null), r = Rt(e.v0, null), n = Rt(e.u1, null), i = Rt(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function $w(e) {
  const t = e || {};
  return {
    du: Rt(t.du, 0) ?? 0,
    dv: Rt(t.dv, 0) ?? 0,
    rot_deg: Rt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Rt(t.scale, 1) ?? 1)
  };
}
function zw(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Vw(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Rt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: $w(e.transform)
  } : null;
}
function jw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = zw(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function Bo(e) {
  const t = Ow();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Fw(e.groups),
    paint: Yh(e.paint, "paint"),
    mask: Yh(e.mask, "mask"),
    raster_objects: jw(e.raster_objects)
  };
}
const ar = 1, sr = 179, Bu = 85;
function sc(e) {
  const t = ((ht(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function o0(e, t) {
  let r = ht(e, 0) - ht(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function a0(e, t, { shiftKey: r = !1 } = {}) {
  let n = ht(e, 0) + ht(t, 0) * sn;
  return r && (n = Math.round(n / 15) * 15), sc(n);
}
function ht(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Si(e = {}) {
  const t = Ie(ht(e.hFOV_deg || 90, 90), ar, sr), r = Ie(ht(e.vFOV_deg || 60, 60), ar, sr), n = Math.tan(t * Dt * 0.5), i = Math.tan(r * Dt * 0.5);
  return {
    yawDeg: ht(e.yaw_deg, 0),
    pitchDeg: ht(e.pitch_deg, 0),
    rollDeg: ht(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Qi(e, t) {
  const r = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Si(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function qd(e, t) {
  const r = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ht(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Jd(e, t) {
  const r = Math.max(1e-12, ht(t, 1)), n = Math.max(1e-6, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(n / (2 * r)) * sn, ar, sr), a = Ie(2 * Math.atan(i / (2 * r)) * sn, ar, sr);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Hw(e, t, r) {
  const n = ht(e == null ? void 0 : e.x, 0), i = ht(e == null ? void 0 : e.y, 0), o = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Si(t), l = Math.max(1e-12, ht(r, 1)), p = 2 * l * s.tanHalfX, f = 2 * l * s.tanHalfY;
  return {
    x: n + (o - p) * 0.5,
    y: i + (a - f) * 0.5,
    w: p,
    h: f,
    focalPx: l
  };
}
function Zd(e, t, r = Bu) {
  const n = Math.max(1e-12, ht(t, 1)), i = Ie(ht(r, Bu), 1, 89.999), o = n * Math.tan(i * Dt), a = Math.max(1, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function s0(e, t, r) {
  const n = Math.max(1e-12, ht(t, 1));
  return {
    x: (ht(r == null ? void 0 : r.x, 0) - ht(e == null ? void 0 : e.x, 0)) / n,
    y: -(ht(r == null ? void 0 : r.y, 0) - ht(e == null ? void 0 : e.y, 0)) / n
  };
}
function Gw(e, t) {
  const r = Ie(ht(e, 90), ar, sr), n = Math.max(1e-6, ht(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * Dt * 0.5) / n) * sn,
    ar,
    sr
  );
}
function el(e, t) {
  const r = Ie(ht(e, 60), ar, sr), n = Math.max(1e-6, ht(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * Dt * 0.5) * n) * sn,
    ar,
    sr
  );
}
function Xh(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Ww(e, t) {
  const r = Xh(e, 1), n = Xh(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (p, f) => f ? s(f, p % f) : p, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function io(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Dt, r = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Dt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Bi(e) {
  const t = io(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || Ww(t, 1);
}
function Qd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Bi(t), t;
}
function l0({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ie(a, ar, sr) : Ie(Math.min(42, ht(i, 100) * 0.42), 8, 96);
  return Qd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ht(t, 0),
    pitch_deg: Ie(ht(r, 0), -89.9, 89.9),
    roll_deg: sc(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Qr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Bi(e);
}
function c0(e, t) {
  const r = Si(e), n = ht(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * sn, o = 2 * Math.atan(r.tanHalfY * n) * sn;
  return i < ar || i > sr || o < ar || o > sr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function u0(e, t, r = Ku) {
  const n = Math.sign(ht(t, 0)), i = Math.abs(ht(r, Ku));
  if (!n || !(i > 0)) return null;
  const o = Si(e), a = o.hFovDeg + n * i;
  if (a < ar || a > sr) return null;
  const s = Math.tan(a * Dt * 0.5);
  return c0(e, s / o.tanHalfX);
}
function d0(e, t) {
  const r = Si(e), n = Zo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ht(t == null ? void 0 : t.x, 0), o = ht(t == null ? void 0 : t.y, 0);
  return Xd(Ml(Ml(n.fwd, Nl(n.right, i)), Nl(n.up, o)));
}
function Kw(e) {
  return ir(e.x, e.y, -e.z);
}
function tl(e) {
  return ir(e.x, e.y, -e.z);
}
function jn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = Zo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function f0(e) {
  const t = tl(ir(e[0][0], e[1][0], e[2][0])), r = tl(ir(e[0][1], e[1][1], e[2][1])), n = tl(ir(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * sn, pitchDeg: o * sn, rollDeg: l * sn };
}
function qa(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function oo(e) {
  const [[t, r, n], [i, o, a], [s, l, p]] = e, f = t + o + p;
  if (f > 0) {
    const m = 0.5 / Math.sqrt(f + 1);
    return { x: (l - a) * m, y: (n - s) * m, z: (i - r) * m, w: 0.25 / m };
  }
  if (t > o && t > p) {
    const m = 2 * Math.sqrt(1 + t - o - p);
    return { x: 0.25 * m, y: (r + i) / m, z: (n + s) / m, w: (l - a) / m };
  }
  if (o > p) {
    const m = 2 * Math.sqrt(1 + o - t - p);
    return { x: (r + i) / m, y: 0.25 * m, z: (a + l) / m, w: (n - s) / m };
  }
  const d = 2 * Math.sqrt(1 + p - t - o);
  return { x: (n + s) / d, y: (a + l) / d, z: 0.25 * d, w: (i - r) / d };
}
function Rs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ui = 1e-6, Uu = 1e-6, Bw = 1e-9;
function Ja(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function Uw(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const p = 0.5 * (a + s);
    Ja(0, r, i, 1, p) < t ? a = p : s = p;
  }
  return Ja(0, n, o, 1, 0.5 * (a + s));
}
function Uo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Yo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((m) => -m / i), s = n.map((m) => m / o);
  if (a.reduce((m, _, v) => m + _ * s[v], 0) < 0) return r.map(() => 0);
  const l = a.map((m, _) => (m * o + s[_] * i) / (i + o)), p = (m) => Math.sqrt(m.reduce((_, v) => _ + v * v, 0)), f = 3 * Math.min(p(a), p(s)), d = p(l);
  return d <= f ? l : l.map((m) => m * f / d);
}
function p0(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((f, d) => o[d] - f);
  let l = s;
  Uo(e, n) && (l = Yo(t, n, r[n - 1].map((f, d) => f - i[d]), s).map((f) => f * a));
  let p = s;
  return Uo(e, n + 1) && (p = Yo(t, n + 1, s.map((f) => -f), r[n + 2].map((f, d) => f - o[d])).map((f) => f * a)), [l.map((f) => f / 3), p.map((f) => -f / 3)];
}
function h0(e, t, r, n, i) {
  const [[o], [a]] = p0(e, t, r.map((s) => [s]), n);
  return Ja(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function Yw(e, t, r, n) {
  var p, f;
  const i = e.map((d) => d.value);
  let [o, a] = p0(e, t, i, r);
  o = ((p = e[r].handles) == null ? void 0 : p.out) ?? o, a = ((f = e[r + 1].handles) == null ? void 0 : f.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((d) => Ja(s[d], s[d] + o[d], l[d] + a[d], l[d], n));
}
function Al([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function Xw(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function au(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function qw([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Yu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Fo(e, t) {
  return qw(Al([-e[0], -e[1], -e[2], e[3]], t));
}
function su(e, t, r) {
  return Al(e, Yu(Fo(e, t).map((n) => r * n)));
}
function lu(e, t) {
  const r = Xw(e, t);
  if (Math.abs(r) > Uu) return r < 0;
  const [n, i, o] = Fo(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Uu) return a < 0;
  return !1;
}
function Vs(e) {
  const { x: t, y: r, z: n, w: i } = oo(jn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Xu(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function Jw(e, t, r, n) {
  const i = Vs(e[r].value);
  let o = Vs(e[r + 1].value);
  lu(i, o) && (o = au(o));
  const a = t[r + 1] - t[r], s = Fo(i, o);
  let l = s;
  if (Uo(e, r)) {
    let g = Vs(e[r - 1].value);
    lu(g, i) && (g = au(g)), l = Yo(t, r, Fo(i, g), s).map((z) => z * a);
  }
  let p = s;
  if (Uo(e, r + 1)) {
    let g = Vs(e[r + 2].value);
    lu(o, g) && (g = au(g)), p = Yo(t, r + 1, Fo(o, i), Fo(o, g)).map((z) => z * a);
  }
  const f = Al(i, Yu(l.map((g, z) => 0.5 * (g - s[z])))), d = Al(o, Yu(s.map((g, z) => 0.5 * (g - p[z])))), [m, _, v, S] = su(su(i, o, n), su(f, d, n), 2 * n * (1 - n)), { yawDeg: w, pitchDeg: N, rollDeg: W } = f0(qa({ x: m, y: _, z: v, w: S })), R = e[r].value, L = e[r + 1].value;
  return {
    yaw_deg: Xu(w, R.yaw_deg, L.yaw_deg, n),
    pitch_deg: N,
    roll_deg: Xu(W, R.roll_deg, L.roll_deg, n)
  };
}
function Za(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Cl(e) {
  return Math.sqrt(Za(e, e));
}
function Il(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function m0(e, t) {
  const r = Za(e, t), n = t.map((a, s) => a - r * e[s]), i = Cl(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Co(e, t) {
  const r = Cl(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function $s(e, t, r) {
  return Co(e, m0(e, t).map((n) => r * n));
}
function cu(e, t) {
  const r = Il(e[t].value), n = Il(e[t + 1].value), i = Za(r, n), o = i < 0 && Cl(n.map((l, p) => l - i * r[p])) <= Uu;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = m0(r, n);
  const s = Cl(a);
  return [a, a.map((l, p) => Math.cos(s) * l - s * Math.sin(s) * r[p]), o];
}
function Zw(e, t, r, n) {
  const i = Il(e[r].value), o = Il(e[r + 1].value), [a, s, l] = cu(e, r);
  let p = a, f = s;
  const d = t[r + 1] - t[r];
  Uo(e, r) && (p = Yo(t, r, cu(e, r - 1)[1].map((R) => -R), p).map((R) => R * d)), Uo(e, r + 1) && (f = Yo(t, r + 1, f.map((R) => -R), cu(e, r + 1)[0]).map((R) => R * d));
  let m, _, v;
  if (l) {
    const R = Math.PI, L = Ja(0, Za(p, a) / R / 3, R - Za(f, s) / R / 3, R, n);
    [m, _, v] = Co(i, a.map((g) => L * g / R));
  } else {
    const R = $s(Co(i, p.map((z) => z / 3)), Co(o, f.map((z) => -z / 3)), n), L = $s(Co(i, p.map((z) => n * z / 3)), R, n), g = $s(R, Co(o, f.map((z) => -(1 - n) * z / 3)), n);
    [m, _, v] = $s(L, g, n);
  }
  const S = Math.hypot(m, v), w = e[r].value.yaw_deg, N = e[r + 1].value.yaw_deg;
  return { yaw_deg: S <= Bw ? w + (N - w) * n : Xu(Math.atan2(m, v) * 180 / Math.PI, w, N, n), pitch_deg: Math.atan2(_, S) * 180 / Math.PI };
}
function Qw(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = h0(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function ex(e, t, r, n) {
  return h0(e, t, e.map((i) => i.value), r, n);
}
const tx = { position: Yw, rotation: Jw, direction: Zw, size: Qw };
function Yt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Rs(e[t].value);
  if (r <= n[0].frame + Ui) return Rs(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Ui) return Rs(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Ui; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= Ui || a.easing === "hold") return Rs(a.value);
  const s = n.map((p) => p.frame), l = Uw(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (tx[t] ?? ex)(n, s, o, l);
}
function qu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function nx(e) {
  return Math.min(1, Math.max(0, e));
}
function g0(e) {
  return Math.max(1e-6, e);
}
function y0(e, t) {
  return t - (e.start - e.in);
}
function Xo(e, t) {
  return t >= e.start - Ui && (e.duration === null || t < e.start + e.duration - Ui);
}
function ef(e, t) {
  return {
    position: Yt(e, "position", t),
    ...Yt(e, "rotation", t),
    hFOV_deg: qu(Yt(e, "fov", t)),
    aspect: e.aspect
  };
}
function lc(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = y0(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : ef(n, r),
    scene: {
      active: i.visible && Xo(i.clip, r),
      clip_frame: o,
      position: Yt(i, "position", o),
      ...Yt(i, "rotation", o),
      scale: g0(Yt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => eo(a, r))
  };
}
function rx(e, t) {
  if (e.placement === "world")
    return {
      position: Yt(e, "position", t),
      ...Yt(e, "rotation", t),
      scale: g0(Yt(e, "scale", t))
    };
  const r = Yt(e, "size", t);
  return {
    ...Yt(e, "direction", t),
    roll_deg: Yt(e, "roll", t),
    hFOV_deg: qu(r.hFOV_deg),
    vFOV_deg: qu(r.vFOV_deg)
  };
}
function eo(e, t) {
  const r = y0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Xo(e.clip, t),
    clip_frame: r,
    ...rx(e, r),
    opacity: nx(Yt(e, "opacity", r))
  };
}
const ix = 2, ox = ["sky", "world"], Ju = ["perspective", "erp"], ax = ["input", "output", "temp"], b0 = [0.42, 0, 0.58, 1], v0 = 1, tf = 1e3, Zu = 1e7, nf = Zu;
function ln(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function en(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function rf(e, t) {
  const r = en(e, t);
  return r !== null && r > 0 ? r : t;
}
function zn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function cc(e) {
  const t = en(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function nl(e) {
  const t = cc(e);
  return t === null ? null : zn(t, -Zu, Zu);
}
function Qo(e) {
  const t = rf(e, null);
  return t === null ? null : zn(t, v0, tf);
}
function _0(e) {
  const t = cc(e);
  return t !== null && t >= 1 ? Math.min(t, nf) : null;
}
function Qa(e, t) {
  return typeof e == "boolean" ? e : t;
}
function S0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => en(r, null));
  return t.includes(null) ? null : t;
}
function w0(e) {
  return S0(e) || [0, 0, 0];
}
function x0(e) {
  const t = ln(e) ? e : {};
  return {
    yaw_deg: en(t.yaw_deg, 0),
    pitch_deg: zn(en(t.pitch_deg, 0), -90, 90),
    roll_deg: en(t.roll_deg, 0)
  };
}
function sx(e) {
  return zn(en(e, 90), 0.1, 179);
}
function lx(e) {
  return rf(e, 1);
}
function cx(e) {
  const t = ln(e) ? e : {};
  return {
    yaw_deg: en(t.yaw_deg, 0),
    pitch_deg: zn(en(t.pitch_deg, 0), -90, 90)
  };
}
function ux(e) {
  return en(e, 0);
}
function dx(e) {
  const t = ln(e) ? e : {};
  return {
    hFOV_deg: zn(en(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: zn(en(t.vFOV_deg, 20), 0.1, 179)
  };
}
function k0(e) {
  return zn(en(e, 1), 0, 1);
}
const of = [["position", w0], ["rotation", x0], ["fov", sx]], uc = [["position", w0], ["rotation", x0], ["scale", lx]], af = [["direction", cx], ["roll", ux], ["size", dx], ["opacity", k0]], sf = [...uc, ["opacity", k0]];
function fx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => en(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...b0];
}
function px(e) {
  if (!ln(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = S0(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function hx(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!ln(i)) continue;
    const o = nl(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: fx(i.easing) }, s = r ? px(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function lf(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = ln(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: hx(o.keyframes, i, n === "position") };
  }
  return r;
}
function M0(e) {
  const t = ln(e) ? e : {}, r = nl(t.start), n = nl(t.in), i = nl(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function mx(e) {
  const t = ln(e) ? e : {}, r = zn(en(t.x0, 0), 0, 1), n = zn(en(t.y0, 0), 0, 1), i = zn(en(t.x1, 1), 0, 1), o = zn(en(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function gx(e) {
  if (!ln(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: ax.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function yx(e) {
  const t = gx(e.source);
  if (!t) return null;
  const r = ox.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: M0(e.clip),
    visible: Qa(e.visible, !0),
    locked: Qa(e.locked, !1),
    crop: mx(e.crop),
    ...lf(e, n ? sf : af)
  };
  return n || (i.z_index = cc(e.z_index) ?? 0), i;
}
function bx(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = ln(o) ? yx(o) : null;
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
function N0(e) {
  if (!ln(e)) return null;
  const t = Ju.includes(e.projection) ? e.projection : Ju[0];
  return { aspect: rf(e.aspect, 1), projection: t, visible: Qa(e.visible, !0), ...lf(e, of) };
}
function cf() {
  return N0({});
}
function El(e) {
  const t = ln(e.timeline) ? e.timeline : {}, r = ln(e.scene) ? e.scene : {};
  return {
    version: ix,
    timeline: {
      fps: Qo(t.fps) ?? 24,
      length: _0(t.length)
    },
    camera: N0(e.camera),
    scene: { clip: M0(r.clip), visible: Qa(r.visible, !0), ...lf(r, uc) },
    stickers: bx(e.stickers),
    painting: Bo(e.painting),
    painting_layer: ln(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Qa(e.painting_visible, !0)
  };
}
function vx(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!ln(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function _x(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!ln(t)) return null;
  const r = zn(en(t.hFOV_deg, 90), 1, 179), n = zn(en(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Sx(e) {
  const t = ln(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(ln) : [];
  return r.sort((n, i) => en(n.z_index, 0) - en(i.z_index, 0)), El({
    camera: _x(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: vx(n, t),
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
function Dr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return El({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!ln(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? Sx(t) : El(t);
}
const uu = {
  state: { painting_visible: !0 },
  camera: { projection: Ju[0], visible: !0 },
  scene: { visible: !0 }
};
function du(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Qu(e) {
  return JSON.stringify({
    ...du(e, uu.state),
    camera: e.camera && du(e.camera, uu.camera),
    scene: du(e.scene, uu.scene)
  });
}
function fu(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function qh(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function es(e, t) {
  const r = Qo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => cc(s * n), { length: o } = e.timeline, a = qh(e.scene.clip, i);
  return El({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...fu(e.camera, of, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...fu(e.scene, uc, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: p, newAnchor: f } = qh(s.clip, i), d = s.placement === "world" ? sf : af;
      return { ...s, clip: l, ...fu(s, d, i, p, f) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function pu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function P0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function A0(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Ui);
}
function C0(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? P0(e.keyframes[n - 1].easing) : [...b0];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function _n(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = pu(i.value, n);
    return;
  }
  const o = A0(i, r);
  o ? o.value = pu(o.value, n) : C0(i, r, pu(Yt(e, t, r), n));
}
function ea(e) {
  return e.placement === "world" ? sf.map(([t]) => t) : e.placement === "sky" ? af.map(([t]) => t) : (e.clip ? uc : of).map(([t]) => t);
}
function wx(e, t) {
  for (const r of ea(e))
    A0(e[r], t) || C0(e[r], t, Yt(e, r, t));
}
function xx(e) {
  const t = ea(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function hu(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function kx(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Mx(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Yt(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function Nx(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((f) => o.has(f.frame)).map((f) => ({ ...f, frame: f.frame + n })), p = new Set(l.map((f) => f.frame));
    s.keyframes = [
      ...s.keyframes.filter((f) => !o.has(f.frame) && !p.has(f.frame)),
      ...l
    ].sort((f, d) => f.frame - d.frame);
  }
  return n;
}
function I0(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function Px(e, t, r) {
  const n = I0(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function Ax(e, t, r, n) {
  for (const i of I0(e, t, r)) i.easing = P0(n);
}
function Cx(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Ix(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function Ex(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Ox(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Ol(e) {
  return ea(e).map((t) => e[t]);
}
function Fx(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? Ol(e.camera).some((n) => n.keyframes.length > 0) : E0(e, { camera: r });
}
function Fl(e) {
  return Ol(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Ox(e.clip);
}
function E0(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Fl);
}
const Tx = 1e5;
function O0(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of Ol(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of Ol(a))
      for (const p of l.keyframes) o = Math.max(o, s.start - s.in + p.frame + 1);
  }
  return Number.isFinite(o) ? o : Tx;
}
function Dx(e) {
  return e > 0 ? Qo(Math.min(e, tf)) : null;
}
function Lx(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : _0(Math.max(1, Math.min(e, nf)));
}
const mu = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Rx = 2e3;
function Vx(e, t, r = 56) {
  const n = mu.find((o) => o * t >= r) || mu[mu.length - 1], i = [];
  for (let o = 0; o < e && i.length < Rx; o += n) i.push(o);
  return i;
}
function $x(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let zs = { text: null, parsed: null };
function Rn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Tl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function zx({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Rn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Bo(null),
    painting_layer: null,
    ui_settings: Tl(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function F0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function jx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function Hx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function Gx(e) {
  return Array.isArray(e) ? e.map((t) => Qd(t)) : [];
}
function Wx(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function T0(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = zx(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (zs.text === i ? o = zs.parsed : (o = JSON.parse(i), zs = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: jx(o.assets),
      stickers: Hx(o.stickers),
      shots: Gx(o.shots),
      painting: Bo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Tl(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Tl({ ...s.ui_settings, ...a })), s.output_preset = F0(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = Rn(r.coverage), delete s.editor_history, s;
  } catch {
    return zs = { text: i, parsed: null }, n;
  }
}
function Kx(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Bx(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function Ux(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function D0(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, p = Qo(t.fps);
  let f;
  try {
    f = Dr(e);
  } catch {
    f = Dr(null);
  }
  p && p !== f.timeline.fps && (f = es(f, p));
  const d = l && f.camera === null;
  if (d && (f = { ...f, camera: cf() }), s) {
    let m = Dr(s);
    p && p !== m.timeline.fps && (m = es(m, p)), f = { ...m, camera: f.camera, cutout_state: f };
  }
  return {
    ...f,
    ...d ? { default_camera: !0 } : {},
    coverage: Rn(i),
    bg_color: n,
    output_preset: F0(r),
    ui_settings: Tl(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function Yx(e, t) {
  e.cutout_state && (e.cutout_state = es(e.cutout_state, t));
  const r = es(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of ea(o)) o[s].keyframes = a[s].keyframes;
    }
}
function uf(e, t) {
  const r = eo(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const Xx = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Jh(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function qx(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[Xx[r]].keyframes.length));
}
function L0(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Jh(r, ["yaw_deg", "pitch_deg"]), o = Jh(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && _n(e, "direction", n, i), r.rot_deg !== void 0 && _n(e, "roll", n, r.rot_deg), Object.keys(o).length && _n(e, "size", n, o);
}
const dc = ["position_x", "position_y", "position_z"], fc = "camera";
function Zh(e, t) {
  const r = ef(e, t);
  return Qd({
    id: fc,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: Gw(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function Jx(e) {
  return Dr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Wt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function Zx(e) {
  return e - 360 * Math.round(e / 360);
}
function Qx(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + Zx(r[o] - n[o]));
  Object.keys(i).length && _n(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && _n(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * Dt * 0.5) / Math.tan(r.vFOV_deg * Dt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && _n(e, "position", t, [...r.position]);
}
function ek(e, t) {
  const r = Yt(e, "position", t), n = Yt(e, "rotation", t);
  return {
    ...Object.fromEntries(dc.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Yt(e, "fov", t)
  };
}
function tk(e, t, r, n) {
  const i = dc.indexOf(r);
  if (i >= 0) {
    const o = Yt(e, "position", t);
    o[i] = n, _n(e, "position", t, o);
  } else r === "hFOV_deg" ? _n(e, "fov", t, n) : _n(e, "rotation", t, { [r]: n });
}
function nk(e, t, r) {
  _n(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function rk(e, t) {
  const r = eo(e, t);
  return {
    ...Object.fromEntries(dc.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function ik(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = dc.indexOf(r);
  if (o >= 0) {
    const a = Yt(e, "position", i);
    a[o] = n, _n(e, "position", i, a);
  } else r === "scale" ? _n(e, "scale", i, n) : r === "opacity" ? _n(e, "opacity", i, n / 100) : _n(e, "rotation", i, { [r]: n });
}
function ok(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && _n(e, i, n, r[i]);
}
function ak(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function sk(e, t, r) {
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
function rl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function R0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function df(e, t, r, n) {
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
function lk(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Wt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function ed(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function V0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function $0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function z0(e) {
  e.default_camera && JSON.stringify(Dr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(cf()) && delete e.default_camera;
}
function j0(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = Dr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(cf()) && (r.camera = null), Qu(r);
}
function H0(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Dr(r);
    if (Qu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Qu(es(i, o)) === t;
  } catch {
    return !1;
  }
}
const gu = 0.15, ck = 0.01, uk = 1e-3, dk = 0.05, fk = 4, Qh = 250, pk = 16, yr = 1, hk = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Xn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Lr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function pc(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function ta(e, t, r = 0) {
  const n = jn(e, t, r), i = Lr(n, 2);
  return { right: Lr(n, 0), up: Lr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function mk(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function td(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function gk(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : td(e, "3dof", r);
}
function yk(e) {
  return ta(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function bk(e) {
  return Xn(e.position, ta(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function wi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function za(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ff(e, t) {
  return za(wi(t, e.position), ta(e.yaw_deg, e.pitch_deg).forward);
}
function pf(e) {
  return Math.max(e, 1e-6) * dk;
}
function nd(e, t, r = null, n = yr) {
  if (t) return t;
  const i = pf(n);
  if (r && ff(e, r) > 0) {
    const o = wi(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Xn(e.position, o, i / a);
  }
  return Xn(e.position, ta(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function G0(e, t = yr) {
  return Math.max(e.distance, pf(t));
}
function W0(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > fk ? !1 : t.time - e.time < Qh || e.cost > pk && t.time - e.wheelTime < Qh;
}
function hf(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * Dt);
  return { tanX: n, tanY: n * r / t };
}
function em(e, t, r, n, i = bk(e)) {
  const o = e.roll_deg ?? 0, [a, s] = vk(t, r, o), l = Wt(e.yaw_deg + a / n * 360), p = Ie(e.pitch_deg - s / n * 360, -89.9, 89.9), f = jn(e.yaw_deg, e.pitch_deg, o), d = jn(l, p, o), m = wi(e.position, i), _ = [0, 1, 2].map((S) => za(Lr(f, S), m)), v = { ...e, yaw_deg: l, pitch_deg: p, position: Xn(i, pc(d, _)) };
  return { ...v, distance: ff(v, i) };
}
function vk(e, t, r) {
  const n = Math.cos(r * Dt), i = Math.sin(r * Dt);
  return [e * n + t * i, t * n - e * i];
}
function tm(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = yk(e), l = 2 * o * hf(e, n, i).tanY / i;
  return { ...e, position: Xn(Xn(e.position, a, -t * l), s, r * l), distance: o };
}
function K0(e, t, r, n = yr) {
  const i = wi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * ck, l = r > 0 ? Math.min(Math.max(o * gu, s), o - a * uk) : -Math.max(o * gu / (1 - gu), s);
  if (r > 0 && l <= 0) return e;
  const p = { ...e, position: Xn(e.position, i, l / o) };
  return { ...p, distance: Math.max(ff(p, t), pf(n)) };
}
function B0(e, t, r, n) {
  const { tanX: i, tanY: o } = hf(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = ta(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Xn(t.center, l, -s), distance: s };
}
function mf(e, t, r, n = null) {
  return U0({
    quaternion: oo(jn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(hf(e, t, r).tanY) * sn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function U0(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: yr }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function ts(e, t, r, n) {
  const { right: i, up: o, forward: a } = Y0(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const p = Math.tan(e.fovY_deg * 0.5 * Dt), f = p * e.aspect, d = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], m = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + d / l / f), y: n * 0.5 * (1 - m / l / p), z: l };
}
function Y0(e) {
  const t = qa(e.quaternion), r = Lr(t, 2);
  return { right: Lr(t, 0), up: Lr(t, 1), forward: r.map((n) => -n) };
}
function nm(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function _k({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function X0(e, t) {
  if (!e || !t.active) return null;
  const r = xk(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: rd(t),
    itemQuaternion: e.kind === "splat" ? hk : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Sk(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = X0(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function wk(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function xk(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function rd(e) {
  return {
    position: [...e.position],
    quaternion: oo(jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function id(e, t) {
  return Xn(e.position, pc(jn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function od(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function ad({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function sd(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function kk(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...ad(t).map((o) => id(e.scene, o)));
  for (const o of r) i.push(...gf(o));
  for (const { box: o, value: a } of n) i.push(...ad(o).map((s) => id(a, s)));
  return i;
}
function Mk(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: oo(jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: jn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function gf(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Xn(e.position, pc(e.rotation, [n, i, 0])));
}
function Nk(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? sd(gf(i)) : o != null && o.box ? sd(ad(od(o.kind, o.box)).map((a) => id(n, a))) : { center: [...n.position], radius: n.scale };
}
const Pk = 2, Ak = 0.5, Ck = 30;
function q0(e, t) {
  const r = wi(t, e), n = Math.atan2(r[0], -r[2]) * sn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * sn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function Ik(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * Ak : Pk, o = t ? [...t] : Xn(e.position, ta(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...wi(o, e.position)), s = a > 0 ? q0(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(Ck * 0.5 * Dt);
  return { position: o, rotation: s, scale: l };
}
function rm(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function Ek(e) {
  return [0, 1, 2].map((t) => Lr(e, t));
}
function im(e, t, r, n) {
  if (e === "translate") return { position: Xn(t.position, wi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * Lk(r.scale, n.scale) / r.scale };
  const i = rm(qa(n.quaternion), Ek(qa(r.quaternion))), o = rm(i, jn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = f0(o);
  return Math.abs(s) <= Ok ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: Fk(o, t.yaw_deg) } };
}
const Ok = 89.9;
function Fk(e, t) {
  const r = Lr(e, 0), n = Lr(e, 1), i = Math.cos(t * Dt), o = Math.sin(t * Dt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * sn + 0;
}
const Tk = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function Dk(e, t, r, n, i) {
  if (!ts(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = Y0(e), l = wi(t, e.position), p = za(l, o), f = za(l, a), d = za(l, s), m = Math.tan(e.fovY_deg * 0.5 * Dt), _ = m * e.aspect, v = Math.hypot(p, f, d) * Tk[r] * Math.min(1.9 * m, 7) / 4;
  if (!(d > v)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const S = (L) => {
    const g = v * Math.sqrt(L * L + d * d - v * v);
    return [(L * d - g) / (d * d - v * v), (L * d + g) / (d * d - v * v)];
  }, [w, N] = S(p), [W, R] = S(f);
  return {
    minX: n * 0.5 * (1 + w / _),
    maxX: n * 0.5 * (1 + N / _),
    minY: i * 0.5 * (1 - R / m),
    maxY: i * 0.5 * (1 - W / m)
  };
}
function Lk(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function Rk(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function J0(e, t) {
  const r = jn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * Dt) * t, i = n / e.aspect, o = (p, f, d) => Xn(e.position, pc(r, [p, f, d])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((p) => [e.position, p]);
  a.forEach((p, f) => s.push([p, a[(f + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function Vk(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = ts(e, a, n, i), p = ts(e, s, n, i);
    if (!l || !p) return !1;
    const f = p.x - l.x, d = p.y - l.y, m = Ie(((r.x - l.x) * f + (r.y - l.y) * d) / Math.max(f * f + d * d, 1e-12), 0, 1);
    return Math.hypot(l.x + f * m - r.x, l.y + d * m - r.y) <= o;
  });
}
function $k(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function zk(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Yt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Yt(n, "position", l);
  });
}
function jk(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const Z0 = 0.28;
function Q0(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * Dt);
  return {
    quaternion: oo(jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * sn,
    aspect: n
  };
}
function ja(e) {
  const t = Si(e);
  return {
    quaternion: oo(jn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function ey(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Zd(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * sn,
      vFOV_deg: 2 * Math.atan(o / n) * sn
    }
  };
}
function ty(e, t, r) {
  const [[n, i, o], [a, s, l], [p, f, d]] = qa(e.quaternion), m = Math.tan(e.fovY_deg * 0.5 * Dt), _ = m * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(v, S = 1e-4) {
      const w = Kw(v), N = n * w.x + a * w.y + p * w.z, W = i * w.x + s * w.y + f * w.z, R = -(o * w.x + l * w.y + d * w.z), L = Math.max(R, S);
      return {
        x: t * 0.5 * (1 + N / L / _),
        y: r * 0.5 * (1 - W / L / m),
        z: R
      };
    },
    // The unit direction seen at the point (x, y).
    ray(v, S) {
      const w = (v / t * 2 - 1) * _, N = (1 - S / r * 2) * m;
      return Xd(tl({
        x: n * w + i * N - o,
        y: a * w + s * N - l,
        z: p * w + f * N - d
      }));
    }
  };
}
function Hk(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = lc(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const p = o.stickers[l];
    if (s.placement !== "sky") return;
    const f = s.source.kind === "port" && !s.visible;
    if (!p.active && !f) return;
    const d = r(s);
    if (!d) return;
    const m = Math.tan(p.hFOV_deg * 0.5 * Dt), _ = Math.tan(p.vFOV_deg * 0.5 * Dt), { crop: v } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
      opacity: f ? Z0 : p.opacity,
      zIndex: n(s),
      quaternion: oo(jn(p.yaw_deg, p.pitch_deg, p.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * v.x0 - 1) * m,
        x1: (2 * v.x1 - 1) * m,
        y0: (1 - 2 * v.y1) * _,
        y1: (1 - 2 * v.y0) * _
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function ny(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return Hk(e, t, {
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
function Gk(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Wk(e, t, r, { media: n, evaluated: i = lc(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const p = i.stickers[l];
    if (s.placement !== "world" || !p.active) return;
    const f = o.get(s.id), d = f ? n(f) : null;
    if (!d) return;
    const { width: m, height: _ } = Gk(d.media), v = Mk(p, s.crop, m, _);
    v && a.push({
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
      opacity: p.opacity,
      position: v.position,
      quaternion: v.quaternion,
      rotation: v.rotation,
      width: v.width,
      height: v.height,
      crop: s.crop
    });
  }), a;
}
function Kk({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((a) => a.$) }) {
  let a = null, s = null, l = !1, p = 0;
  const f = () => {
    s = n0(a.createThreeView({ onUpdate: n, createCanvas: () => e }), "editor");
  }, d = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(v) {
      return s && !d.lost ? s.render(v) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(v) {
      return s && !d.lost ? s.renderUnwrap(v) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(v, S) {
      return s && !d.lost ? s.resize(v, S) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(v, S) {
      s && !d.lost && s.clear(v, S);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(v) {
      return s ? s.sceneBox(v) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(v, S, w, N, W) {
      return s && !d.lost ? s.pick(v, S, w, N, W) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(v, S, w, N, W) {
      return s && !d.lost ? s.pickSurface(v, S, w, N, W) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(v, S, w, N, W) {
      return s && !d.lost ? s.pickSticker(v, S, w, N, W) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(v, S, w, N, W, R) {
      return s && !d.lost ? s.gizmoPointer(v, S, w, N, W, R) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return p + (s ? s.contentRevision() : 0);
    },
    dispose() {
      l = !0, e.removeEventListener("webglcontextlost", m), e.removeEventListener("webglcontextrestored", _), s == null || s.dispose(), s = null;
    }
  };
  function m(v) {
    v.preventDefault(), !(l || d.lost) && (d.lost = !0, d.ready = !1, s == null || s.dispose({ lost: !0 }));
  }
  function _() {
    l || !d.lost || queueMicrotask(() => {
      l || !d.lost || (s && (p += s.contentRevision() + 1), s == null || s.dispose(), s = null, d.lost = !1, a && (f(), d.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", _), o().then((v) => {
    l || (a = v, !d.lost && (f(), d.ready = !0, t()));
  }).catch((v) => {
    console.error("[PanoramaStickers] three.js view is unavailable", v), d.failed = !0, r();
  }), d;
}
const ry = "3D view unavailable. Check the browser console.";
function Dl(e, t, r) {
  return Q0({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function Bk(e) {
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
    let p = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(f) {
        return p ? null : (o(), t ? t.render({ ...f, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        p || (p = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const iy = Bk(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => n0(e.createThreeView({ createCanvas: () => wn({ label: "three.node" }) }), "node"))
), xi = ["erp_image", "bg_erp", "bg_media"], il = ["source"], yf = ["sticker_image", "sticker"], oy = ["scene"], Uk = {
  background: [...xi, ...il],
  "external-sticker": [...yf, ...il],
  scene: [...oy, ...il]
};
function ay(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function bf(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = ay(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function Yk(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function sy(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function Xk(e, t) {
  const { graph: r, entry: n } = sy(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = ay(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const ly = [...xi, ...yf, ...oy, ...il], qk = 256, Io = /* @__PURE__ */ new Map(), yu = /* @__PURE__ */ new WeakMap();
let cy = () => null;
function uy(e) {
  return yu.has(e) || yu.set(e, JSON.stringify(e)), yu.get(e);
}
function Jk(e) {
  cy = e;
}
function Ll(e, t) {
  const r = uy(e);
  Io.delete(r), Io.set(r, t), Io.size > qk && Io.delete(Io.keys().next().value);
}
function hn(e, t) {
  var o;
  const r = e ? cy(e) : null;
  if (!r) return !0;
  const n = bf(e);
  let i = Io.get(uy(r));
  if (i)
    Ll(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => ly.includes(a == null ? void 0 : a.name)))) return !0;
    Ll(r, n), i = n;
  }
  return Uk[t].every((a) => i[a] === n[a]);
}
const Rl = /* @__PURE__ */ new WeakSet();
async function ld(e, t) {
  if (Rl.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Rl.add(e), r.ok && n !== void 0 ? n : null;
}
function dy(e, t) {
  var o, a, s, l, p;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = sy(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((p = n == null ? void 0 : n.inputs) != null && p.some((f) => ly.includes(f == null ? void 0 : f.name))) ? null : { output: i, inputs: Xk(r, t) };
}
const ol = /* @__PURE__ */ new Map();
function Zk(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ol.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await ld(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = dy(i, o);
        a && Ll(a.output, a.inputs);
      }
    });
}
const Qk = 5;
function eM(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Qk}`, n = ld(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, ld(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var p, f, d, m;
      const l = String(a.id);
      for (const { id: _ } of await n) {
        if (!s()) return null;
        const v = await o(_);
        if ((p = v == null ? void 0 : v.outputs) != null && p[l])
          return ((m = (d = (f = v.workflow) == null ? void 0 : f.prompt) == null ? void 0 : d[l]) == null ? void 0 : m.class_type) !== a.comfyClass ? null : dy(v, l);
      }
      return null;
    }
  };
}
function tM(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let wo = null;
async function nM(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Rl.has(r) || (s = ol.get(i)) != null && s.has(n) || tM(t)) return null;
  (wo == null ? void 0 : wo.workflowId) !== i && (wo = { workflowId: i, history: eM(r, i) }, queueMicrotask(() => {
    wo = null;
  }));
  const a = await wo.history.lastNodeOutput(e, o);
  return o() ? a ? (Ll(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (Rl.has(r) || ol.set(i, (ol.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function om(e, t, r, n = xi) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const am = /\.(mp4|webm|mov|m4v|mkv)$/i;
function al(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return am.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return am.test(String((e == null ? void 0 : e.filename) || ""));
}
const bu = /* @__PURE__ */ new WeakMap();
function rM(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function cd(e) {
  return rM(e) ? (bu.has(e) || bu.set(e, Math.random().toString(36).slice(2, 10)), bu.get(e)) : "run";
}
function fy(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function iM(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((p, f) => f)));
    }
  };
  return i(e, t), n;
}
function vf(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const p = n(l);
          if (p && (/\.mp4(\?|$)/i.test(p) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return p;
        }
  }
  return "";
}
function oM({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = ac(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, p = () => {
    o || i();
  }, f = () => i(), d = () => {
    i(), l();
  }, m = () => i();
  let _ = !1;
  const v = () => {
    _ = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", p, { once: !0 }), n.addEventListener("loadeddata", p, { once: !0 }), s || n.addEventListener("timeupdate", f), n.addEventListener("play", d), n.addEventListener("pause", m), n.addEventListener("error", v), n.src = t, n.load();
  const S = () => {
    o || _ || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, w = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var W, R;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", p), n.removeEventListener("loadeddata", p), n.removeEventListener("timeupdate", f), n.removeEventListener("play", d), n.removeEventListener("pause", m), n.removeEventListener("error", v), n.pause(), (W = n.removeAttribute) == null || W.call(n, "src"), (R = n.load) == null || R.call(n));
    },
    failed: () => _,
    play: S,
    pause: w,
    toggle() {
      n.paused ? S() : w();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function $i(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function aM(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function sm(e, t, r = null) {
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
  return !n && r != null && (n = aM(e == null ? void 0 : e.graph, r)), n;
}
function sM(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function lM(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function cM(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function py({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (g) => {
    if (!g) return "";
    if (typeof g == "string") return String(g || "").trim();
    if (Array.isArray(g)) {
      if (g.length === 0) return "";
      if (g.length === 1) return i(g[0]);
      const z = String(g[0] || "").trim();
      if (z)
        return $i(t, {
          filename: z,
          subfolder: String(g[1] || "").trim(),
          type: String(g[2] || "output").trim() || "output"
        });
      for (const H of g) {
        const ee = i(H);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (g == null ? void 0 : g.src) == "string" && g.src ? g.src : typeof (g == null ? void 0 : g.url) == "string" && g.url ? g.url : $i(t, g);
  }, o = (g) => {
    if (!g || typeof g != "object") return "";
    const z = String(g.type || "").trim().toLowerCase();
    if (z === "dataurl") return String(g.value || "");
    if (z !== "comfy_image") return "";
    const H = String(g.filename || "").trim();
    return H ? $i(t, {
      filename: H,
      subfolder: String(g.subfolder || ""),
      type: String(g.storage || "input")
    }) : "";
  }, a = (g) => {
    const z = e == null ? void 0 : e.nodeOutputs;
    if (!z || g == null) return null;
    const H = String(g);
    return z instanceof Map ? z.get(g) || z.get(H) || z.get(Number(H)) || null : z[g] || z[H] || null;
  }, s = (g, z) => {
    var ee;
    const H = a(g == null ? void 0 : g.id);
    return Array.isArray((ee = H == null ? void 0 : H.ui) == null ? void 0 : ee[z]) ? H.ui[z] : Array.isArray(H == null ? void 0 : H[z]) ? H[z] : [];
  }, l = (g, z) => {
    const H = a(g == null ? void 0 : g.id);
    return H != null && H.ui && Object.prototype.hasOwnProperty.call(H.ui, z) ? H.ui[z] : H && Object.prototype.hasOwnProperty.call(H, z) ? H[z] : null;
  }, p = (g, z) => {
    const H = l(g, "pano_sticker_input_state_hash"), ee = Array.isArray(H) ? H[0] : H;
    return String(ee ?? "").trim() || cM(z);
  }, f = (g) => {
    const z = [], H = /* @__PURE__ */ new Set();
    for (const ee of g || []) {
      const oe = i(ee);
      !oe || H.has(oe) || (H.add(oe), z.push(oe));
    }
    return z;
  }, d = (g, z) => {
    var oe;
    const H = [];
    Array.isArray(g == null ? void 0 : g.images) && g.images.length && H.push(g.images), Array.isArray((oe = g == null ? void 0 : g.ui) == null ? void 0 : oe.images) && g.ui.images.length && H.push(g.ui.images);
    const ee = [];
    for (const F of H)
      z >= 0 && z < F.length && ee.push(F[z]), ee.push(...F);
    return ee;
  }, m = (g, z) => {
    var V;
    const H = String(z || "").trim();
    if (!H) return { src: "", sourceType: "", inputName: "" };
    const oe = (Array.isArray(g == null ? void 0 : g.inputs) ? g.inputs : []).findIndex((he) => String((he == null ? void 0 : he.name) || "") === H);
    if (oe < 0) return { src: "", sourceType: "", inputName: H };
    const F = g.graph ? g.getInputLink(oe) : null;
    if ((F == null ? void 0 : F.origin_id) == null) return { src: "", sourceType: "", inputName: H };
    const G = F.origin_id, X = sm(g, oe, G);
    if (!X) return { src: "", sourceType: "", inputName: H };
    const ue = Number(F.origin_slot ?? 0);
    let Ne = [];
    try {
      Ne = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(X) || [] : [];
    } catch {
      Ne = [];
    }
    if (Array.isArray(Ne) && Ne.length) {
      const he = [];
      ue >= 0 && ue < Ne.length && he.push(Ne[ue]), he.push(...Ne);
      const Oe = f(he.filter((ze) => !al(ze)));
      if (Oe.length)
        return { src: Oe[0], srcCandidates: Oe, sourceType: "appNodeImageUrls", inputName: H };
    }
    const _e = a((X == null ? void 0 : X.id) ?? G), pe = f(d(_e, ue).filter((he) => !al(he))).map((he) => `${he}&pano_src=${cd(_e)}`);
    if (pe.length)
      return { src: pe[0], srcCandidates: pe, sourceType: "nodeOutputs", inputName: H };
    const J = Array.isArray(X == null ? void 0 : X.imgs) ? X.imgs : [];
    if (J.length) {
      const he = [];
      ue >= 0 && ue < J.length && he.push(J[ue]), he.push(...J);
      const Oe = f(he);
      if (Oe.length)
        return { src: Oe[0], srcCandidates: Oe, sourceType: "nodeImgs", inputName: H };
    }
    const E = (V = X == null ? void 0 : X.widgets) == null ? void 0 : V.find((he) => String((he == null ? void 0 : he.name) || "").toLowerCase() === "image");
    if (E) {
      let he = i(E.value);
      if (he && !he.includes("/") && !he.includes(":") && (X.comfyClass === "LoadImage" || X.type === "LoadImage") && (he = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(he)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(he)}&type=input&subfolder=`), he) return { src: he, sourceType: "widget", inputName: H };
    }
    return { src: "", sourceType: "", inputName: H };
  }, _ = (g, z = []) => {
    var ee;
    const H = Array.isArray(g == null ? void 0 : g.inputs) ? g.inputs : [];
    for (const oe of z) {
      const F = H.findIndex((Ne) => String((Ne == null ? void 0 : Ne.name) || "") === oe), G = F >= 0 && g.graph ? g.getInputLink(F) : null;
      if ((G == null ? void 0 : G.origin_id) == null) continue;
      const X = a(((ee = sm(g, F, G.origin_id)) == null ? void 0 : ee.id) ?? G.origin_id), ue = (Array.isArray(X == null ? void 0 : X.images) ? X.images : []).find(al);
      return ue ? `${$i(t, ue)}&pano_src=${cd(X)}` : "";
    }
    return "";
  }, v = (g, z = []) => {
    const H = Array.isArray(z) ? z : [z];
    for (const ee of H) {
      const oe = m(g, ee);
      if (String((oe == null ? void 0 : oe.src) || "").trim()) return oe;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, S = (g) => {
    const z = String(g || "").trim();
    if (!z) return [];
    if (sM(z)) return [z];
    const { filename: H, subfolder: ee } = lM(z);
    return H ? f([
      $i(t, { filename: H, subfolder: ee, type: "temp" }),
      $i(t, { filename: H, subfolder: ee, type: "output" }),
      $i(t, { filename: H, subfolder: ee, type: "input" }),
      z
    ]) : [z];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (g) => {
      var z, H;
      try {
        (H = (z = g == null ? void 0 : g.__panoLinkedInputImageCache) == null ? void 0 : z.forEach) == null || H.call(z, (ee, oe, F) => {
          var G;
          ee != null && ee.img && ((G = n == null ? void 0 : n.isImageLoadFailed) != null && G.call(n, ee.img)) && F.delete(oe);
        });
      } catch {
      }
    },
    externalStateHash: p,
    invalidateUiImage: (g, z) => {
      var H;
      (H = g == null ? void 0 : g.delete) == null || H.call(g, `__ui__${String(z || "")}`);
    },
    linkedValue: (g, z) => {
      var G, X, ue, Ne;
      const H = String(z || ""), ee = Array.isArray(g == null ? void 0 : g.inputs) ? g.inputs.findIndex((_e) => String((_e == null ? void 0 : _e.name) || "") === H) : -1, oe = ee >= 0 && g.graph ? g.getInputLink(ee) : null;
      if (oe) {
        const _e = a(oe.origin_id), pe = [
          _e == null ? void 0 : _e.output,
          _e == null ? void 0 : _e.result,
          (G = _e == null ? void 0 : _e.data) == null ? void 0 : G.output,
          (X = _e == null ? void 0 : _e.data) == null ? void 0 : X.result,
          (ue = _e == null ? void 0 : _e.ui) == null ? void 0 : ue.output,
          (Ne = _e == null ? void 0 : _e.ui) == null ? void 0 : Ne.result
        ];
        for (const J of pe) {
          if (!Array.isArray(J)) continue;
          const E = J[Number(oe.origin_slot || 0)];
          if (typeof E == "string" && E.trim()) return E;
        }
      }
      const F = Array.isArray(g == null ? void 0 : g.widgets) ? g.widgets.find((_e) => String((_e == null ? void 0 : _e.name) || "") === H) : null;
      return String((F == null ? void 0 : F.value) || "");
    },
    linkedVideoFile: _,
    loadPreferredExactLinkedImage: (g, z = [], H = null, ee = "") => {
      var Xe;
      const oe = Array.isArray(z) ? z : [z], F = v(g, oe), X = (Array.isArray(F == null ? void 0 : F.srcCandidates) && F.srcCandidates.length ? F.srcCandidates : [F == null ? void 0 : F.src]).map((le) => String(le || "").trim()).filter(Boolean);
      if (!X.length) return null;
      const ue = f(X.flatMap((le) => S(le)));
      if (!ue.length) return null;
      g.__panoLinkedInputImageCache || (g.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Ne = String(ee || oe.join("|") || "image_exact"), _e = X.join(`
`), pe = g.__panoLinkedInputImageCache.get(Ne);
      if (pe && pe.srcRaw === _e && pe.img) return pe.img;
      const J = r || globalThis.Image;
      if (typeof J != "function") return null;
      const E = new J();
      (Xe = n == null ? void 0 : n.markImageLoading) == null || Xe.call(n, E, _e);
      const V = { srcRaw: _e, resolvedSrc: "", img: E };
      g.__panoLinkedInputImageCache.set(Ne, V);
      let he = -1;
      const Oe = (le) => {
        var j, de, be;
        le === "ready" ? (j = n == null ? void 0 : n.markImageReady) == null || j.call(n, E, _e) : (de = n == null ? void 0 : n.markImageFailed) == null || de.call(n, E, _e), H == null || H(E), (be = g.setDirtyCanvas) == null || be.call(g, !0, !0);
      }, ze = () => {
        if (he += 1, he >= ue.length) {
          Oe("failed");
          return;
        }
        V.resolvedSrc = ue[he], E.src = V.resolvedSrc;
      };
      return E.onload = () => Oe("ready"), E.onerror = () => {
        if (he + 1 < ue.length) {
          ze();
          return;
        }
        Oe("failed");
      }, ze(), E;
    },
    output: a,
    resolvePreferredExactLinkedSource: v,
    source: i,
    uiImage: (g, z, H, ee = null) => {
      var _e, pe, J;
      const oe = s(g, z)[0] || null, F = i(oe);
      if (!F) return null;
      const G = `__ui__${z}`, X = (_e = H == null ? void 0 : H.get) == null ? void 0 : _e.call(H, G);
      if (X && X.__panoSrc === F) return X;
      const ue = r || globalThis.Image;
      if (typeof ue != "function") return null;
      const Ne = new ue();
      return Ne.__panoSrc = F, (pe = n == null ? void 0 : n.markImageLoading) == null || pe.call(n, Ne, F), Ne.onload = () => {
        var E;
        (E = n == null ? void 0 : n.markImageReady) == null || E.call(n, Ne, F), ee == null || ee(Ne);
      }, Ne.onerror = () => {
        var E;
        (E = n == null ? void 0 : n.markImageFailed) == null || E.call(n, Ne, F), ee == null || ee(Ne);
      }, Ne.src = F, (J = H == null ? void 0 : H.set) == null || J.call(H, G, Ne), Ne;
    },
    uiList: s,
    uiValue: l
  };
}
const uM = 1e-3;
function hy(e, t, r, n) {
  if (!Xo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(uM / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function my(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function dM(e, t) {
  return Math.floor(e * t.fps);
}
function gy(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const lm = 4;
function yy({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, p) {
      if ((a.length !== r.length || a.some((m, _) => m !== r[_])) && (r = a, n.clear(), i = null), s === null) return null;
      const f = dM(s, l);
      for (let m = f; m < Math.min(r.length, f + lm + 1); m += 1) o(m);
      for (const m of n.keys())
        (m < f || m > f + lm) && m !== i && n.delete(m);
      const d = n.get(f);
      return d != null && d.complete && d.naturalWidth > 0 && (i !== null && i !== f && n.delete(i), i = f), i === null ? p : n.get(i);
    }
  };
}
function by({
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
  const p = () => a || e(), f = () => o(r(p()));
  return {
    model: () => r(p()),
    refresh() {
      return l ? this.model() : (f(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, f(), !0);
    },
    updateGesture(d) {
      if (l) return !1;
      a || this.beginGesture();
      const m = t(a, d);
      return m.changed ? (a = m.state, s = !0, n(a), f(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const d = s;
      return d && i(a), a = null, s = !1, n(null), f(), d;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), f(), !0);
    },
    apply(d) {
      if (l) return !1;
      a && this.commitGesture();
      const m = t(e(), d);
      return m.changed ? (i(m.state), f(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const d = a != null;
      a = null, s = !1, d && n(null);
    }
  };
}
const sl = "sticker_image_1", vy = "external_image", qo = 0;
function $o(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function vu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function vi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function ud(e, t = qo) {
  return (e == null ? void 0 : e.version) !== 2 ? vi(e) : vi(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: eo(r, t).active,
    external: r.source.kind === "port",
    ...uf(r, t)
  }));
}
function _f(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && vi(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function _y(e) {
  return String((e == null ? void 0 : e.id) || "") === sl || String((e == null ? void 0 : e.source_kind) || "") === vy;
}
function Sf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : _y(t);
}
const Sy = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function wy(e) {
  return !_y(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Sy.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function xy(e) {
  const t = wy(e);
  return t ? Sy.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function ky(e, t = {}) {
  var L, g, z;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((H) => String((H == null ? void 0 : H.id) || "") === sl);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const H = String(((L = e.active) == null ? void 0 : L.selected_sticker_id) || "") === sl;
    return {
      state: {
        ...e,
        stickers: r.filter((ee, oe) => oe !== n),
        active: H ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), p = Number(t.imageHeight || 0), f = l > 0 && p > 0, d = Math.max(1, l), m = Math.max(1, p), _ = t.pose && typeof t.pose == "object" ? t.pose : {}, v = s ? _.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || _.hFOV_deg || 30, S = Math.min(179, Math.max(0.1, Number(v)));
  if (!s) {
    if (!f) return { state: e, changed: !1 };
    const H = $o(S, d, m), ee = Number(((g = a == null ? void 0 : a.initial_pose) == null ? void 0 : g.hFOV_deg) ?? S), oe = $o(ee, d, m), F = Number(((z = a == null ? void 0 : a.initial_pose) == null ? void 0 : z.vFOV_deg) ?? oe);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - H) <= 1e-6 && Math.abs(F - oe) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((G, X) => X === n ? {
          ...G,
          vFOV_deg: H,
          initial_pose: G.initial_pose && typeof G.initial_pose == "object" ? { ...G.initial_pose, vFOV_deg: oe } : G.initial_pose
        } : G)
      },
      changed: !0
    };
  }
  const w = r.reduce((H, ee) => Math.max(H, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), N = {
    yaw_deg: Number(_.yaw_deg || 0),
    pitch_deg: Number(_.pitch_deg || 0),
    hFOV_deg: S,
    vFOV_deg: f ? $o(S, d, m) : Number(_.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || S),
    rot_deg: Number(_.rot_deg ?? _.roll_deg ?? 0)
  }, W = {
    ...a || {},
    id: sl,
    source_kind: vy,
    source_link_id: i,
    source_state_hash: o,
    ...N,
    initial_pose: { ...N },
    visible: !0,
    z_index: w + 1
  }, R = n >= 0 ? r.map((H, ee) => ee === n ? W : H) : [...r, W];
  return { state: { ...e, stickers: R }, changed: !0 };
}
function cm(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const fM = ["IMAGE", "VIDEO"];
function um(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => fM.includes(r)) ? "2d" : null;
}
function pM(e, t) {
  var i, o, a, s, l, p;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((f) => (f == null ? void 0 : f.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? um(n.type) ?? um((p = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : p.type) : null;
}
function My(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: cm(e, "sticker"),
    awaitingPose: !t && (cm(e, "sticker_state") || pM(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function dm(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Dr({ version: 2, stickers: [r] }).stickers[0];
}
function Ny(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var S;
  const a = e.stickers.findIndex((w) => Sf(e, w)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const w = ((S = e.active) == null ? void 0 : S.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((N, W) => W !== a),
        active: w ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const w = { ...dm(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((N, W) => W === a ? w : N) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const w = [s.size.value, ...s.size.keyframes.map((R) => R.value)], N = w.map((R) => $o(R.hFOV_deg, i, o));
    if (w.every((R, L) => Math.abs(R.vFOV_deg - N[L]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...s.size.value, vFOV_deg: N[0] },
      keyframes: s.size.keyframes.map((R, L) => ({ ...R, value: { ...R.value, vFOV_deg: N[L + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((R, L) => L === a ? { ...R, size: W } : R) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const p = new Set(e.stickers.map((w) => w.id));
  let f = 1;
  for (; p.has(`sticker_${f}`); ) f += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, dm(`sticker_${f}`, n)] }, changed: !0 };
  const d = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), m = (w) => l ? $o(w, i, o) : w, _ = df(`sticker_${f}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: d,
    vFOV_deg: m(d)
  }, vi(e).reduce((w, N) => Math.max(w, N.z_index), -1) + 1), v = (n == null ? void 0 : n.keyframes) ?? {};
  return _.direction.keyframes = v.direction ?? [], _.roll.keyframes = v.roll ?? [], _.size.keyframes = (v.size ?? []).map((w) => ({ ...w, value: { ...w.value, vFOV_deg: m(w.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, _] }, changed: !0 };
}
function wf(e) {
  const t = vi(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: vu(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: vu(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: vu(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Py(e) {
  const t = _f(e), r = Sf(e, t), n = vi(e).some((s) => s && s.visible !== !1), i = wf(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: xy(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function hM(e) {
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
function fm(e, t) {
  const r = _f(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = hM(e), i = String(r.id || ""), o = wf(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, p) => {
    l.item.z_index = p;
  }), { state: n, changed: !0 };
}
function mM(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function gM(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return ky(e, t.value);
  if (t.type === "sync-port") return Ny(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((m) => String((m == null ? void 0 : m.id) || "") === o))
      return { state: e, changed: !1 };
    const l = wf(e).reduce((m, _) => Math.max(m, Number(_.z_index || 0)), -1), p = 30, f = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: p,
      vFOV_deg: $o(p, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, df(o, rl(i.asset), f, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const d = { id: o, asset_id: a, ...f, z_index: l + 1 };
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
    return !i || !vi(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = _f(e);
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
    const i = wy(r);
    return !i || !xy(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return fm(e, "front");
  if (t.type === "send-back") return fm(e, "back");
  if (t.type === "delete-selected") {
    if (Sf(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = vi({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = mM(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? uf(r, qo) : r, s = {};
    if (o.forEach((l) => {
      const p = Number(i[l]);
      Number.isFinite(p) && Math.abs(p - Number(a[l] || 0)) > 1e-12 && (s[l] = p);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = qx(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const p = structuredClone(r);
      return L0(p, qo, l), { state: { ...e, stickers: e.stickers.map((f) => f === r ? p : f) }, changed: !0 };
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
function yM(e = {}) {
  return by({
    ...e,
    reduce: gM,
    projectModel: Py
  });
}
const dd = 2;
function Wi(e, t) {
  return Math.floor(e * t + 0.5);
}
function bM(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Ay({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, p = !1, f = !1, d = { name: "idle" }, m = [];
  const _ = () => p && !f, v = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function S() {
    for (const V of m) V();
    m = [];
  }
  function w(V, he = {}) {
    return S(), d = { name: V, ...he }, s(), d;
  }
  function N(V, he, Oe) {
    const ze = () => {
      d === V && Oe();
    };
    e.addEventListener(he, ze), m.push(() => e.removeEventListener(he, ze));
  }
  function W(V, he) {
    let Oe = t.requestFrame(function ze(Xe) {
      d === V && (he(Xe), d === V && (Oe = t.requestFrame(ze)));
    });
    m.push(() => t.cancelFrame(Oe));
  }
  function R(V) {
    l = V, o(l);
  }
  function L() {
    return w(f ? "error" : "idle");
  }
  function g() {
    f = !0, L();
  }
  function z() {
    const { seekable: V } = e, he = V != null && V.length ? V.end(V.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(he) ? he : 1 / 0));
  }
  function H(V) {
    if (!_()) return V === "play" ? X() : L();
    if (e.readyState < dd) {
      const he = w("loading", { then: V });
      return N(he, "loadeddata", () => H(he.then)), N(he, "error", g), he;
    }
    return V === "play" && l / r() >= Number(e.duration) ? X() : ee(V, !1);
  }
  function ee(V, he) {
    const Oe = z();
    if (!e.ended && Wi(Number(e.currentTime), r()) === Wi(Oe, r())) return oe(V);
    const ze = w("seeking", { then: V, frame: l, retried: he });
    return N(ze, "seeked", () => {
      const Xe = Wi(Number(e.currentTime), r()) === Wi(z(), r()), le = l === ze.frame;
      Xe || le && ze.retried ? oe(ze.then) : ee(ze.then, le);
    }), N(ze, "error", g), e.currentTime = Oe, ze;
  }
  function oe(V) {
    return V === "play" ? F() : (a(), L());
  }
  function F() {
    const V = w("playingVideo", { shown: !1 });
    if (N(V, "pause", () => e.ended ? G() : _e()), N(V, "ended", G), N(V, "error", g), i() && Wi(Number(e.duration), r()) >= n()) {
      const Oe = e.loop;
      e.loop = !0, m.push(() => {
        e.loop = Oe;
      });
    }
    const he = (Oe, ze) => {
      ze && !V.shown && (V.shown = !0, s()), ue(Wi(Oe, r()));
    };
    if (v()) {
      let Oe = e.requestVideoFrameCallback(function ze(Xe, le) {
        d === V && (he(Number(le.mediaTime), !0), d === V && (Oe = e.requestVideoFrameCallback(ze)));
      });
      m.push(() => {
        var ze;
        return (ze = e.cancelVideoFrameCallback) == null ? void 0 : ze.call(e, Oe);
      });
    } else
      W(V, () => he(Number(e.currentTime), e.readyState >= dd));
    return Promise.resolve(e.play()).catch(() => {
      d === V && _e();
    }), V;
  }
  function G() {
    a(), X();
  }
  function X() {
    const V = w("playingClock", { startTs: t.now(), startFrame: l });
    return W(V, (he) => ue(V.startFrame + Math.floor((he - V.startTs) / 1e3 * r()))), V;
  }
  function ue(V) {
    if (V < n()) {
      R(V);
      return;
    }
    if (!i()) {
      Ne(n() - 1);
      return;
    }
    d.name === "playingVideo" && (S(), e.pause()), R(0), H("play");
  }
  function Ne(V) {
    d.name === "playingVideo" ? (S(), e.pause(), R(Math.max(0, V)), a()) : R(Math.max(0, V)), H("still");
  }
  function _e() {
    if (d.name === "loading" || d.name === "seeking")
      d.then = "still", s();
    else if (d.name === "playingVideo") {
      S(), e.pause();
      const V = bM(Number(e.currentTime), r());
      R(Math.min(V, n() - 1)), a(), l === V ? L() : H("still");
    } else d.name === "playingClock" && Ne(Math.min(l, n() - 1));
  }
  function pe() {
    if (!E()) {
      if (l >= n() - 1 && R(0), d.name === "loading" || d.name === "seeking") {
        d.then = "play", s();
        return;
      }
      H("play");
    }
  }
  function J(V) {
    const he = Math.max(0, Math.round(V));
    if (d.name === "loading" || d.name === "seeking") {
      d.then = "still", R(he), s();
      return;
    }
    d.name === "playingVideo" && (S(), e.pause()), R(he), H("still");
  }
  function E() {
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
      return E();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return d.name === "playingVideo" || d.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return d.name === "playingVideo" && d.shown;
    },
    play: pe,
    stop: _e,
    seek: J,
    toggle() {
      E() ? _e() : pe();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(V) {
      S(), p = !!V, f = !1, H("still");
    },
    dispose() {
      S(), p = !1, d = { name: "idle" };
    }
  };
}
function Cy({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function p(S) {
    s = S, t();
  }
  function f(S) {
    a = S, e.currentTime = S;
  }
  function d() {
    const S = l;
    m(), l !== S && r();
  }
  function m() {
    if (!n || i || e.readyState < dd) return;
    const { time: S, playing: w, fps: N } = o;
    if (S === null) {
      e.pause(), l = !1;
      return;
    }
    if (w) {
      if (a !== null) return;
      const W = Number(e.duration), R = Number.isFinite(W) ? Math.min(S, W) : S, L = Math.abs(Number(e.currentTime) - R) > 1.5 / N;
      if (e.ended && !L) return;
      L && f(R), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, p(NaN)), !(a !== null || s === S) && (Number(e.currentTime) === S ? p(S) : f(S));
  }
  const _ = {
    loadeddata: d,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: d,
    seeked: () => {
      const S = a;
      a = null, !o.playing && S === o.time ? p(S) : d();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [S, w] of Object.entries(_)) e.addEventListener(S, w);
  function v(S) {
    n = S, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: S = "", time: w = null, playing: N = !1, fps: W }) {
      S !== n && (v(S), r()), o = { time: w, playing: N, fps: W }, d();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(S, w) {
      return !n || i ? w : o.time === null ? null : o.playing && l ? e : s === null ? w : S;
    },
    dispose() {
      for (const [S, w] of Object.entries(_)) e.removeEventListener(S, w);
      v("");
    }
  };
}
function fd(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function vM({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: p = !1 }) {
  let f = "", d = "", m = 0;
  const _ = /* @__PURE__ */ new Set();
  let v = null, S = null;
  const w = () => i().timeline.fps, N = (G) => G.stickers.find((X) => X.source.kind === "port"), W = () => {
    const G = i(), X = N(G);
    return O0(G, {
      minimum: Math.round(w() * 5),
      frames: Math.max(
        f ? Math.round(m * w()) : 0,
        v && X ? my(X.clip, w(), v.meta) : 0
      ),
      camera: p
    });
  }, R = Ay({
    video: e,
    clock: n,
    fps: w,
    span: W,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), L = () => {
    d === f && Number.isFinite(e.duration) && (m = e.duration);
  }, g = () => {
    d && (_.add(d), l());
  }, z = Cy({ video: t, onCapture: s, onChange: l }), H = yy({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", L), e.addEventListener("error", g);
  function ee(G) {
    G !== d && (d = G, e.pause(), G ? e.src = G : e.removeAttribute("src"), e.load(), R.setSource(!!G));
  }
  function oe() {
    R.playing && R.stop();
  }
  function F(G) {
    const X = N(G);
    S = v && X ? hy(X.clip, R.frame, G.timeline.fps, v.meta) : null, z.follow({
      src: (v == null ? void 0 : v.src) || "",
      time: S,
      playing: R.advancing,
      fps: G.timeline.fps
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
      return d;
    },
    pause: oe,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return v;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(G, X) {
      return v != null && v.frames ? H.picture(v.frames, S, v.meta, X) : z.picture(G, X);
    },
    toggle() {
      R.playing ? R.stop() : R.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: G, sources: X, state: ue, sticker: Ne = null }) {
      if (v = G ? Ne : null, !G)
        return oe(), ee(""), F(ue), !1;
      for (const V of _)
        X.includes(V) || _.delete(V);
      const _e = X.find((V) => V && !_.has(V)) || "", pe = _e !== f;
      pe && (f = _e, m = 0), ee(f);
      const J = E0(ue, { camera: p }) || !!f && R.state !== "error" || !!v;
      return J || oe(), (pe || !J || !R.playing && R.frame >= W()) && R.frame !== qo && R.seek(qo), F(ue), J;
    },
    dispose() {
      R.dispose(), z.dispose(), e.removeEventListener("loadedmetadata", L), e.removeEventListener("error", g), e.pause(), e.removeAttribute("src"), e.load(), d = "";
    }
  };
}
const Vl = Math.PI / 180, Fr = 180 / Math.PI, _M = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), SM = 260;
function pm(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Iy(e, t) {
  return t ? Iy(t, e % t) : e;
}
function wM(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Iy(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function ns(e, t) {
  const r = pm(e), n = pm(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: wM(r, n) };
}
function to(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Ey(e) {
  const t = to(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Qr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function xf(e, t, r = _M) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), p = (w, N, W) => {
    const R = w + N, L = Math.max(0, W - 1), g = R > L && R > 0 ? L / R : 1;
    return [w * g, N * g];
  }, [f, d] = p(l, a, n), [m, _] = p(o, s, i), v = {
    x: f,
    y: m,
    w: Math.max(1, n - f - d),
    h: Math.max(1, i - m - _)
  }, S = qd(v, t);
  return {
    x: v.x + (v.w - S.width) * 0.5,
    y: v.y + (v.h - S.height) * 0.5,
    w: S.width,
    h: S.height,
    safeRect: v
  };
}
function xM(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = xf({ width: r, height: n }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Vl * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, p = d0(l, s0(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), f = kM(p, Zo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), d = Jd({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: f.yaw,
    pitchDeg: f.pitch,
    rollDeg: f.roll,
    frameFovDeg: d.hFOV_deg
  };
}
function Oy(e) {
  return {
    yaw: Wt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Fr),
    pitch: Ie(Math.asin(Ie(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Fr, -89.9, 89.9)
  };
}
function kM(e, t) {
  const r = Oy(e), n = Zo(r.yaw, r.pitch, 0), i = ou(t, e), o = {
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
    roll: sc(Math.atan2(
      ou(s, n.up),
      ou(s, n.right)
    ) * Fr)
  };
}
function Fy(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = xf({ width: r, height: n }, io(e)), o = Qi(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = d0(e, s0(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Oy(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ie(2 * Math.atan(r / (2 * o)) * Fr, 1, 179)
  };
}
function MM(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = Qi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: p, halfH: f } = Zd(l, s), d = {
    x: o - p,
    y: a - f,
    w: p * 2,
    h: f * 2
  }, m = d.x <= 0 && d.y <= 0 && d.x + d.w >= n && d.y + d.h >= i, _ = n / i, v = Math.tan(Bu * Vl), S = _ >= 1 ? v : v * _, w = _ >= 1 ? v / _ : v;
  return {
    focalPx: s,
    rect: d,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(p / s) * Fr,
      vFOV_deg: 2 * Math.atan(f / s) * Fr
    },
    fallback: m ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(S) * Fr,
        vFOV_deg: 2 * Math.atan(w) * Fr
      }
    }
  };
}
function xo(e, t) {
  const r = to(e);
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
function NM(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = Qi(r, e);
    return Jd(qd(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: el(o, t) };
}
function hm(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = ns(t, r);
  if (!o) return e;
  const a = io(e) >= 1;
  n && o.ratio >= 1 !== a && (o = ns(o.height, o.width));
  const s = NM(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function Ty(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (to(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = l0({
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
    const n = to(e);
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
    return xo(e, (n) => hm(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return xo(e, (n) => {
      const o = String(Qr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? ns(o[1], o[2]) : ns(io(n), 1);
      return a ? hm(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? xo(e, (i) => {
      const o = sc(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? xo(e, (n) => {
    const i = c0(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? xo(e, (n) => {
    const i = u0(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? xo(e, (n) => {
    const i = Ry(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Dy({
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
  }, p = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, f = Math.hypot(Number(t.x || 0) - p.x, Number(t.y || 0) - p.y);
  if (s === "shift" && f < Math.min(l.w, l.h) * a) return null;
  const d = Math.atan2(Number(t.y || 0) - p.y, Number(t.x || 0) - p.x);
  return {
    source: s,
    frame: l,
    center: p,
    startRollDeg: Number(r || 0),
    lastAngle: d,
    accumulatedRad: 0
  };
}
function Ly(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + o0(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: a0(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Ry(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Vl, l = Math.cos(s), p = Math.sin(s), f = o / r, d = -a / r, m = f * l - d * p, _ = f * p + d * l, v = Number(e.pitch_deg || 0) * Vl, S = Math.max(0.25, Math.abs(Math.cos(v)));
  return {
    ...e,
    yaw_deg: Wt(Number(e.yaw_deg || 0) - Math.atan(m) / S * Fr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(_) * Fr, -90, 90)
  };
}
function PM({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return by({
    readState: e,
    reduce: Ty,
    projectModel: Ey,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const qe = Object.freeze({
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
}), AM = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, CM = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: AM(t[2])
})), IM = {
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
}, mm = Object.fromEntries(
  Object.entries(IM).map(([e, t]) => [e, {
    name: t.name,
    elements: CM(t.body)
  }])
), Bt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = vt(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(mm, n) ? mm[n] : null;
    });
    return (n, i) => r.value ? (Te(), $e("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: St(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Te(!0), $e(st, null, Lt(r.value.elements, (o, a) => (Te(), $e(st, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (Te(), $e("path", qr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), $e("circle", qr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), $e("rect", qr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), $e("line", qr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), $e("polyline", qr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), $e("polygon", qr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : wt("", !0)
      ], 64))), 128))
    ], 2)) : wt("", !0);
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
    const t = e, r = vt(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Te(), or(V_(e.tag), qr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: kg(() => [
        nt(Bt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, EM = ["aria-expanded", "disabled"], OM = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, FM = ["data-aspect", "disabled", "onClick"], TM = { class: "pano-cutout-aspect-custom" }, DM = ["disabled"], LM = ["disabled"], RM = ["data-custom-width", "data-custom-height", "disabled"], Vy = {
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
    ]), o = /* @__PURE__ */ Qt("1"), a = /* @__PURE__ */ Qt("1"), s = /* @__PURE__ */ Qt(null), l = vt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), p = vt(() => {
      const S = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], w = String(r.model.aspectLabel || "");
      return S.length ? S.map((N) => {
        const W = typeof N == "string" ? N : String((N == null ? void 0 : N.value) || ""), R = typeof N == "string" ? N : String((N == null ? void 0 : N.label) || W);
        return {
          ...typeof N == "object" && N ? N : {},
          value: W,
          label: R,
          active: w ? W === w : (N == null ? void 0 : N.active) === !0
        };
      }) : i.map((N) => ({
        ...N,
        active: N.value === w
      }));
    }), f = vt(() => {
      var w;
      const S = String(r.model.aspectLabel || "").trim();
      return S || String(((w = p.value.find((N) => N.active === !0)) == null ? void 0 : w.label) || "Aspect");
    });
    Ji(f, (S) => {
      const w = String(S || "").match(/^([0-9.]+):([0-9.]+)$/);
      w && (o.value = w[1], a.value = w[2]);
    }, { immediate: !0 });
    function d(S) {
      n("action", S);
    }
    function m(S) {
      var w;
      r.model.aspectOpen === !0 && ((w = s.value) != null && w.contains(S.target) || d({ type: "close-aspect" }));
    }
    nc(() => {
      document.addEventListener("pointerdown", m, !0);
    }), ls(() => {
      document.removeEventListener("pointerdown", m, !0);
    });
    function _(S) {
      const [w, N] = String(S.value || "").split(":");
      d({
        type: "set-aspect",
        width: w,
        height: N,
        preserveOrientation: !0
      });
    }
    function v() {
      d({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (S, w) => (Te(), $e("div", {
      ref_key: "rootElement",
      ref: s,
      class: St(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), or(an, {
        key: 0,
        icon: e.model.aspectIcon || ct(qe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: w[0] || (w[0] = (N) => d({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), $e("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: w[1] || (w[1] = (N) => d({ type: "toggle-aspect" }))
      }, [
        nt(Bt, {
          icon: e.model.aspectIcon || ct(qe).aspect
        }, null, 8, ["icon"]),
        we("span", null, mt(f.value), 1),
        nt(Bt, {
          icon: ct(qe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, EM)),
      ti(we("div", OM, [
        (Te(!0), $e(st, null, Lt(p.value, (N) => (Te(), $e("button", {
          key: N.value,
          class: St(["pano-btn pano-frame-aspect-choice", { active: N.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": N.value,
          disabled: l.value,
          onClick: (W) => _(N)
        }, mt(N.label), 11, FM))), 128)),
        we("div", TM, [
          ti(we("input", {
            "onUpdate:modelValue": w[2] || (w[2] = (N) => o.value = N),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, DM), [
            [Dh, o.value]
          ]),
          w[4] || (w[4] = we("span", { "aria-hidden": "true" }, ":", -1)),
          ti(we("input", {
            "onUpdate:modelValue": w[3] || (w[3] = (N) => a.value = N),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, LM), [
            [Dh, a.value]
          ]),
          we("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: v
          }, "Apply", 8, RM)
        ])
      ], 512), [
        [no, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, VM = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, $M = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Qt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Te(), $e("div", {
      class: St(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ht(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ht(() => {
      }, ["stop"]))
    }, [
      nt(an, {
        icon: ct(qe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Ht((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      we("div", VM, [
        i[3] || (i[3] = we("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), $e(st, null, Lt(ct(r), (o) => (Te(), $e("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          we("kbd", null, mt(o[0]), 1),
          we("span", null, mt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, zM = {
  class: "pano-view-unavailable",
  role: "status"
}, kf = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), $e("div", zM, mt(ct(ry)), 1));
  }
}, jM = { class: "pano-cutout-node-surface" }, HM = ["title", "disabled"], GM = { class: "value" }, WM = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, KM = {
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
    return (n, i) => (Te(), $e("div", jM, [
      we("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Ht(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Ht(() => {
        }, ["stop"]))
      }, [
        we("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          nt(Bt, {
            icon: ct(qe).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = we("span", { class: "label" }, "Full Editor", -1))
        ]),
        nt(an, {
          icon: e.model.hasShot ? ct(qe).delete : ct(qe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        nt(Vy, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        we("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Ht((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          nt(Bt, {
            icon: ct(qe).roll
          }, null, 8, ["icon"]),
          we("span", GM, mt(e.model.rollLabel || "0.0°"), 1)
        ], 40, HM),
        nt(an, {
          icon: ct(qe).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        nt($M)
      ], 32),
      e.model.hasShot === !1 ? (Te(), $e("div", WM, " Choose a view · + Add Frame ")) : wt("", !0),
      e.model.viewUnavailable ? (Te(), or(kf, { key: 1 })) : wt("", !0)
    ]));
  }
}, $y = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Qt(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const d = o;
      return o = void 0, a = !1, { active: !0, intent: d };
    }
    function l(d) {
      const m = i.value;
      return m instanceof HTMLInputElement ? (o = d, a = !0, m.value = "", m.click(), !0) : !1;
    }
    function p(d) {
      var S, w;
      const { active: m, intent: _ } = s();
      if (!m) return;
      const v = ((w = (S = d.target) == null ? void 0 : S.files) == null ? void 0 : w[0]) || null;
      if (v) {
        n("file-selected", { intent: _, file: v });
        return;
      }
      n("file-cancelled", { intent: _ });
    }
    function f() {
      const { active: d, intent: m } = s();
      d && n("file-cancelled", { intent: m });
    }
    return t({ open: l }), (d, m) => (Te(), $e("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: p,
      onCancel: f
    }, null, 544));
  }
}, BM = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, UM = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Qt(!1), r = Object.freeze([
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
    return (n, i) => (Te(), $e("div", {
      class: St(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ht(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ht(() => {
      }, ["stop"]))
    }, [
      nt(an, {
        icon: ct(qe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Ht((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      we("div", BM, [
        i[3] || (i[3] = we("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), $e(st, null, Lt(ct(r), (o) => (Te(), $e("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          we("kbd", null, mt(o[0]), 1),
          we("span", null, mt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, YM = { class: "pano-stickers-node-surface" }, XM = ["disabled"], qM = ["aria-label", "data-tip"], JM = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, ZM = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, QM = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Qt(null);
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
    return (a, s) => (Te(), $e("div", YM, [
      we("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Ht(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Ht(() => {
        }, ["stop"]))
      }, [
        we("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          nt(Bt, {
            icon: ct(qe).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = we("span", { class: "label" }, "Full Editor", -1))
        ]),
        we("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          nt(Bt, {
            icon: ct(qe).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = we("span", { class: "label" }, "Add Image", -1))
        ], 8, XM),
        nt(an, {
          icon: e.model.locked ? ct(qe).lock_closed : ct(qe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        nt(an, {
          icon: ct(qe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        nt(an, {
          icon: ct(qe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        nt(an, {
          icon: e.model.isExternalSelection ? ct(qe).back_initial : ct(qe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        nt(UM)
      ], 32),
      e.model.playable === !0 ? (Te(), $e("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Ht(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Ht(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        nt(Bt, {
          icon: e.model.playing ? ct(qe).pause : ct(qe).play
        }, null, 8, ["icon"])
      ], 40, qM)) : wt("", !0),
      e.model.hasStickers === !1 ? (Te(), $e("div", JM, " Add Image to place a sticker ")) : wt("", !0),
      e.model.dropActive === !0 ? (Te(), $e("div", ZM, "Drop image to add")) : wt("", !0),
      nt($y, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), or(kf, { key: 3 })) : wt("", !0)
    ]));
  }
}, gm = 24;
function eN(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ha(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function zy(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function pd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => Ha(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ha(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : zy(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function tN(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => Ha(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = n ? e.corners.findIndex((a) => Ha(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, l = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ha(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : zy(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Mf(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function jy(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Sa(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ie(r.x, -n, t.width + n),
    y: Ie(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function nN(e) {
  const t = Zo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Dt * 0.5),
    tanY: Math.tan(Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Dt * 0.5)
  };
}
function zi(e, t, r) {
  return Xd(Ml(
    Ml(e.centerDir, Nl(e.right, t)),
    Nl(e.up, r)
  ));
}
function Nf(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = nN(e), n = Sa(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    zi(r, -r.tanX, r.tanY),
    zi(r, r.tanX, r.tanY),
    zi(r, r.tanX, -r.tanY),
    zi(r, -r.tanX, -r.tanY)
  ].map((m) => Sa(m, t)), o = Array.from({ length: 4 }, (m, _) => {
    const v = [];
    for (let S = 0; S <= 28; S += 1) {
      const w = S / 28;
      let N, W;
      _ === 0 ? (N = -r.tanX + 2 * r.tanX * w, W = r.tanY) : _ === 1 ? (N = r.tanX, W = r.tanY - 2 * r.tanY * w) : _ === 2 ? (N = r.tanX - 2 * r.tanX * w, W = -r.tanY) : (N = -r.tanX, W = -r.tanY + 2 * r.tanY * w);
      const R = Sa(zi(r, N, W), t);
      R && v.push({ x: R.x, y: R.y });
    }
    return v;
  }), a = Sa(zi(r, 0, r.tanY), t), s = Sa(
    zi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((m) => !m || !Number.isFinite(m.x) || !Number.isFinite(m.y)))
    return { visible: !1 };
  if (!l.some((m) => m.rawZ > 1e-4)) return { visible: !1 };
  const p = s.x - a.x, f = s.y - a.y, d = Math.hypot(p, f) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((m) => ({ x: m.x, y: m.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + p / d * gm,
      y: a.y + f / d * gm
    },
    visible: !0
  };
}
function ym(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: Nf(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, p;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((p = a.item) == null ? void 0 : p.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = pd(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = pd(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function rN(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Wt(Math.atan2(n.x, n.z) * sn),
    pitch_deg: Math.asin(Ie(n.y, -1, 1)) * sn
  };
}
function iN(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function oN(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * sn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let js = null;
function Pf() {
  return js || (js = new Promise((e) => {
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
  }), js);
}
function Qn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function aN(e, t = 1024) {
  const r = Math.max(1, Math.round(Qn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Qn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function sN(e, t, r) {
  const n = Qn(t), i = Qn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = Qn(o.u0), s = Qn(o.v0), l = Qn(o.u1), p = Qn(o.v1);
  if (l <= a || p <= s) return null;
  const f = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + Qn(f.du)) * n,
    centerY: ((s + p) * 0.5 + Qn(f.dv)) * i,
    width: (l - a) * n,
    height: (p - s) * i,
    rotationRad: Qn(f.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Qn(f.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function lN(e, t, r) {
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
function cN() {
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
    const p = () => {
      s.settled = !0;
      const f = [...s.listeners];
      s.listeners.clear(), f.forEach((d) => d()), r();
    };
    return l.onload = p, l.onerror = p, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const p = String(o.rasterDataUrl || "").trim(), f = sN(o, a, s);
    if (!p.startsWith("data:") || !f) return null;
    const d = lN(o, a, s), m = String((o == null ? void 0 : o.id) || "").trim() || d, _ = t.get(m);
    if ((_ == null ? void 0 : _.revision) === d) return { source: _.source, revision: d };
    const v = n(p, l), S = Number(v.naturalWidth || v.width || 0), w = Number(v.naturalHeight || v.height || 0);
    if (!v.complete || S < 1 || w < 1) return null;
    const N = wn({ label: "raster-object" });
    N.width = Math.max(1, Math.round(a)), N.height = Math.max(1, Math.round(s));
    const W = N.getContext("2d");
    return W ? (f.wrapOffsets.forEach((R) => {
      W.save(), W.translate(f.centerX + R, f.centerY), W.rotate(f.rotationRad), W.scale(f.scale, f.scale), W.drawImage(
        v,
        -f.width * 0.5,
        -f.height * 0.5,
        f.width,
        f.height
      ), W.restore();
    }), t.set(m, { revision: d, source: N }), { source: N, revision: d }) : null;
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
function uN(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function dN(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function fN({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(d) {
    if (!d) return;
    d.entry.listeners.delete(d);
    const m = n.get(d.owner);
    (m == null ? void 0 : m.get(d.key)) === d && m.delete(d.key);
  }
  function a(d, m, _, v) {
    if (!d || typeof v != "function" || _.settled) return;
    let S = n.get(d);
    S || (S = /* @__PURE__ */ new Map(), n.set(d, S));
    const w = S.get(m);
    if ((w == null ? void 0 : w.entry) === _) {
      w.callback = v;
      return;
    }
    o(w);
    const N = { owner: d, key: m, entry: _, callback: v };
    S.set(m, N), _.listeners.add(N);
  }
  function s(d, m) {
    d.settled || (d.settled = !0, d.image.onload = null, d.image.onerror = null, !m && r.get(d.key) === d && r.delete(d.key), [...d.listeners].forEach((_) => {
      o(_);
      try {
        _.callback(d.image, m);
      } catch {
      }
    }), l(i));
  }
  function l(d) {
    if (!(r.size <= d))
      for (const [m, _] of r) {
        if (r.size <= d) break;
        !_.settled || _.listeners.size > 0 || (_.image.onload = null, _.image.onerror = null, r.delete(m));
      }
  }
  function p(d, m, _, v = null) {
    const S = String(m || ""), w = String(_ || "");
    if (!S || !w) return null;
    let N = r.get(S);
    if (N)
      r.delete(S), r.set(S, N);
    else {
      l(i - 1);
      const R = e || globalThis.Image;
      if (typeof R != "function") return null;
      const L = new R();
      N = { key: S, image: L, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(S, N), L.onload = () => s(N, !0), L.onerror = () => s(N, !1), L.src = w;
    }
    return N.settled || N.image.complete && Number(N.image.naturalWidth || N.image.width || 0) > 0 || a(d, S, N, v), N.image;
  }
  function f(d) {
    const m = n.get(d);
    m && ([...m.values()].forEach(o), n.delete(d), l(i));
  }
  return { get: p, disposeOwner: f };
}
const Pa = /* @__PURE__ */ new WeakMap();
function Hy(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Pa.get(e);
  n || (n = [], Pa.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = Pa.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && Pa.delete(e);
  };
}
function ni(e, ...t) {
  const r = Pa.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
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
}), Gy = "PanoramaSuite.Editor.ViewControls", pN = {
  id: Gy,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(ll).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function hN(e) {
  return Object.hasOwn(ll, e) ? ll[e] : ll.default;
}
function mN(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function gN(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const $l = "state_json";
function ei(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function yN(e) {
  var a, s;
  const t = ei(e, $l);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = T0(r, {
    coverage: (a = ei(e, "coverage")) == null ? void 0 : a.value
  }), i = Ty(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function Af(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = ei(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, p, f, d, m, _, v;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (p = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || p.call(l), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0), (m = (d = e.graph) == null ? void 0 : d.setDirtyCanvas) == null || m.call(d, !0, !0), (v = (_ = t == null ? void 0 : t.canvas) == null ? void 0 : _.setDirty) == null || v.call(_, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function bN(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function bm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function vN(e) {
  var f, d, m, _, v, S;
  if (!e) return;
  const t = ei(e, "coverage"), r = ei(e, "bg_color"), n = ei(e, $l), i = ei(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && bN(o) && (bm(a) || a === ""))) return;
  let p = "360";
  if (bm(a))
    try {
      p = String(Rn((f = JSON.parse(a)) == null ? void 0 : f.coverage));
    } catch {
      p = "360";
    }
  t.value = p, (d = t.callback) == null || d.call(t, p), r.value = o, (m = r.callback) == null || m.call(r, o), n.value = a, (_ = n.callback) == null || _.call(n, a), i && (i.value = s, (v = i.callback) == null || v.call(i, s)), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
}
function cl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function hd(e, t, r) {
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
async function _N(e, { tolerateOperationFailure: t = !1 } = {}) {
  const r = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (r instanceof Map)
    for (; r.size > 0; ) {
      const n = Array.from(r.entries());
      t ? await Promise.allSettled(n.map(([, i]) => i)) : await Promise.all(n.map(([, i]) => i)), n.forEach(([i, o]) => {
        r.get(i) === o && r.delete(i);
      });
    }
}
function Aa(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const n = e.__panoStickerOperationTail, o = (n && typeof n.then == "function" ? n.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = o.catch(() => {
  });
  e.__panoStickerOperationTail = a, e.__panoPendingStickerUploads.set(t, o);
  const s = () => {
    var l, p;
    ((p = (l = e.__panoPendingStickerUploads) == null ? void 0 : l.get) == null ? void 0 : p.call(l, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function Wy(e, t = {}) {
  var n;
  await _N(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function SN(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await Wy(e), r ? r.apply(this, n) : this.value;
  };
}
function wN(e) {
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
function xN(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function wa(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: p = !1
}) {
  if (!(e != null && e.prototype)) return;
  function f(d) {
    var v;
    const m = `editor_btn|${r}`;
    if (d.__panoPreviewAttached === !0 && d.__panoPreviewMountKey === m) return;
    wN(d), Af(d, t), cl(d, $l);
    const _ = ei(d, $l);
    if (SN(d, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const S = _.callback;
      _.callback = (w) => {
        var W;
        const N = S ? S(w) : void 0;
        return (W = d.setDirtyCanvas) == null || W.call(d, !0, !1), N;
      };
    }
    if (r === "PanoramaStickers") {
      d.__panoSceneStateV2 = l, d.__panoStudio = p;
      const S = ei(d, "bg_color");
      !l && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (v = S.callback) == null || v.call(S, "#00ff00")), hd(d, n, () => i(d, "stickers")), s && (o(d, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(d, "stickers")
      }), d.__panoStickersNodeSurface && cl(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260])), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = m;
      return;
    }
    d.__panoSceneStateV2 = l, hd(d, n, () => i(d, "cutout")), l || a(d, {
      buttonText: n,
      onOpen: () => i(d, "cutout")
    }), d.__panoCutoutNodeSurface && cl(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260]), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = m;
  }
  for (const d of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const m = e.prototype[d];
    e.prototype[d] = function() {
      const _ = m ? m.apply(this, arguments) : void 0;
      d === "onNodeCreated" && r === "PanoramaCutout" && !l && yN(this), d === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && vN(this);
      const v = !!this.__panoPreviewAttached;
      return (d === "onNodeCreated" || this.widgets) && f(this), d === "onAdded" && v && ni(this, "attach"), _;
    };
  }
}
function kN(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return xN(this), n;
  };
}
function MN(e, {
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
    Af(e, t);
    const l = (p = e) => r(p, "stickers", { readOnly: !0, hideSidebar: !1 });
    hd(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && cl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function NN({
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
    settings: [pN, fw],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [$h],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [$h.id] }],
    beforeRegisterNodeDef(l, p) {
      const f = String((p == null ? void 0 : p.name) || "");
      (f === "PanoramaStickers" || f === "Panorama Stickers") && wa(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), f === "PanoramaStickersNode" && wa(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), f === "PanoramaStudio" && wa(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (f === "PanoramaCutout" || f === "Panorama Cutout") && wa(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), f === "PanoramaCutoutNode" && wa(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Pl(f) && kN(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const p = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Af(l, e), Pl(p) && MN(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const PN = /\.(png|jpe?g|webp|gif|bmp)$/i;
function mr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : PN.test(String(e.name || "")) : !1;
}
function Cf(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => mr(r)) : !1;
}
function AN(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var p, f, d;
    (p = l == null ? void 0 : l.preventDefault) == null || p.call(l), (f = l == null ? void 0 : l.stopPropagation) == null || f.call(l), (d = l == null ? void 0 : l.stopImmediatePropagation) == null || d.call(l);
  }, o = (l) => {
    if (Cf(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (l) => {
    var p;
    l != null && l.relatedTarget && ((p = e.contains) != null && p.call(e, l.relatedTarget)) || r(!1);
  }, s = (l) => {
    var f;
    const p = Array.from(((f = l == null ? void 0 : l.dataTransfer) == null ? void 0 : f.files) || []).find((d) => mr(d));
    if (!p) {
      r(!1);
      return;
    }
    i(l), r(!1), n(p);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function Ca(e, t = {}) {
  var a, s, l, p;
  if (!mr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((p = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : p.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const f = await new Promise((d, m) => {
      const _ = new r();
      _.onload = () => d(_), _.onerror = () => m(new Error("image load failed")), _.src = o;
    });
    return {
      image: f,
      width: Math.max(1, Number(f.naturalWidth || f.width || 1)),
      height: Math.max(1, Number(f.naturalHeight || f.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function Ki(e, { fetchApi: t } = {}) {
  if (!mr(e)) throw new TypeError("A supported image file is required.");
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
const vm = /* @__PURE__ */ new WeakSet(), _m = /* @__PURE__ */ new WeakSet();
let Sm = 0;
function md(e) {
  if (!e || typeof e != "object" || _m.has(e)) return e;
  const t = String(e.type || "preview");
  return Sm += 1, e.type = `${t}:pano-${Sm}`, _m.add(e), e;
}
function zl(e) {
  if (!e || typeof e != "object" || vm.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, vm.add(e), e;
}
function Ky(e, t) {
  var n, i;
  if (!t || ((i = (n = zl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function CN({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const p = i;
    i = null, o || r == null || r(p);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Ut } = Ys;
Jk((e) => _i(e.id));
Zk(Zt);
const If = fN(), { linkedVideoFile: IN } = py({ app: Ut, api: Zt });
function gd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ys == null ? void 0 : Ys.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const EN = "pano_suite.ui_settings.v1", ON = 120, FN = 2048;
function wm() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(EN)) || "").trim();
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
function TN() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function xa(e) {
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
function DN() {
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
function yd(e) {
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
function By(e) {
  const t = yd(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function LN(e, t, r) {
  By(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function bd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Ef(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Uy(e) {
  return Pl(Ef(e));
}
function xm(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Ut == null ? void 0 : Ut.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function Yy(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = bd(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && ul(e), PP(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = bd(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ul(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      ul(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function RN(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ul(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  vd.unregister(e), RN(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && e.widgets.filter((p) => {
      if (p === (r == null ? void 0 : r.widget)) return !0;
      const f = String((p == null ? void 0 : p.name) || ""), d = String((p == null ? void 0 : p.type) || ""), m = gd();
      return f === m || d === m || f === "pano_preview" || d === "pano_preview" ? !0 : f === "preview" && d === "pano_preview";
    }).forEach((p) => iP(e, p));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function VN(e, t = "#00ff00") {
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
function $N(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = zo(e, "state_json")) == null ? void 0 : r.value) || "");
}
function Fn(e) {
  var s, l;
  const t = $N(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = zo(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = zo(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? D0(t, { backgroundColor: n, coverage: i, active: V0(e) }) : VN(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function zo(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function zN(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Xy(e, t, r = null) {
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
  return !n && r != null && (n = zN(e == null ? void 0 : e.graph, r)), n;
}
function jN(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function qy(e, t = []) {
  const r = jN(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    xi.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function km(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function jl(e, t) {
  const r = km(e), n = km(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function HN(e, t) {
  var r;
  return Xy(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function GN(e, t = xi) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = qy(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return iM(e, a, HN);
}
const vd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Zt) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, p, f, d, m;
        if (!o) return;
        const a = jl(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...GN(o)].some((_) => jl(n, _)) || fy(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (Jy(o), (p = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || p.call(l), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (m = (d = o.graph) == null ? void 0 : d.setDirtyCanvas) == null || m.call(d, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, Zt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Zt) != null && e.removeEventListener) || (Zt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Hl(e) {
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
  return typeof ((o = Zt) == null ? void 0 : o.apiURL) == "function" ? Zt.apiURL(i) : i;
}
function WN(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function KN(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function BN(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function UN(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (WN(t)) return [t];
  const { filename: r, subfolder: n } = KN(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Hl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return BN([...i, t]);
}
function YN(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Hl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function _i(e) {
  const t = Ut == null ? void 0 : Ut.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (jl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (jl(a, i)) return t[a];
  }
  return null;
}
function Ga(e, t, r = null) {
  const n = r || _i(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
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
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Hl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = Bn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Hl(e);
}
function Gl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function _u(e) {
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
function Of(e, t) {
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
function XN(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function qN(e, t) {
  try {
    e.__panoOwnOutputRev = uN(e.__panoOwnOutputRev);
    const r = XN(t);
    let n = "";
    for (const i of r)
      if (n = Bn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), Of(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function jo(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function JN(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!hn(e, "background"))
    return jo(e), null;
  const i = _i(n), o = vf(i, t, Bn);
  if (!o)
    return jo(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = Of(o, a), l = `${t.join("|")}:${s}`, p = e.__panoOwnOutputVideoCache;
  if (p && p.key === l) return p.player.failed() ? null : p.player.video;
  jo(e);
  const f = oM({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return f ? (e.__panoOwnOutputVideoCache = { key: l, player: f }, f.video) : null;
}
function ZN(e, t = []) {
  var p, f;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = qy(e, t).map((d) => r.findIndex((m) => String((m == null ? void 0 : m.name) || "") === String(d))).filter((d) => d >= 0), o = r.map((d, m) => ({ input: d, idx: m })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const d of a) {
    const m = r[d], _ = e.graph ? e.getInputLink(d) : null;
    if ((_ == null ? void 0 : _.origin_id) == null) continue;
    const v = _.origin_id, S = Xy(e, d, v);
    if (!S) continue;
    const w = Number(_.origin_slot ?? 0), N = _i((S == null ? void 0 : S.id) ?? v), W = Array.isArray(N == null ? void 0 : N.images) ? N.images : [];
    if (W.length) {
      const z = [];
      w >= 0 && w < W.length && z.push(W[w]), z.push(...W);
      for (const H of z.filter((ee) => !al(ee))) {
        const ee = Bn(H);
        if (ee)
          return String((m == null ? void 0 : m.name) || ""), { src: `${ee}&pano_src=${cd(N)}`, sourceType: "nodeOutputs", inputName: String((m == null ? void 0 : m.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (Ut == null ? void 0 : Ut.getNodeImageUrls) == "function" ? Ut.getNodeImageUrls(S) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const z = [];
      w >= 0 && w < R.length && z.push(R[w]), z.push(...R);
      for (const H of z) {
        const ee = Bn(H);
        if (ee)
          return String((m == null ? void 0 : m.name) || ""), { src: ee, sourceType: "appNodeImageUrls", inputName: String((m == null ? void 0 : m.name) || "") };
      }
    }
    const L = Array.isArray(S == null ? void 0 : S.imgs) ? S.imgs : [];
    if (L.length) {
      const z = [];
      w >= 0 && w < L.length && z.push(L[w]), z.push(...L);
      for (const H of z) {
        const ee = Bn(H);
        if (ee)
          return String((m == null ? void 0 : m.name) || ""), { src: ee, sourceType: "nodeImgs", inputName: String((m == null ? void 0 : m.name) || "") };
      }
    }
    const g = (p = S == null ? void 0 : S.widgets) == null ? void 0 : p.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image");
    if (g) {
      let z = Bn(g.value);
      if (z && !z.includes("/") && !z.includes(":") && (S.comfyClass === "LoadImage" || S.type === "LoadImage") && (z = Zt.apiURL(`/view?filename=${encodeURIComponent(z)}&type=input&subfolder=`)), z)
        return String((m == null ? void 0 : m.name) || ""), { src: z, sourceType: "widget", inputName: String((m == null ? void 0 : m.name) || "") };
    }
  }
  const s = hn(e, "background") ? _i(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((f = s == null ? void 0 : s.ui) == null ? void 0 : f.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const d of l) {
      const m = Bn(d);
      if (m)
        return { src: m, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function QN(e, t = [], r = {}) {
  const n = ZN(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = UN(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const p = new Image(), f = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  f.pendingSrcRaw = i, f.pendingResolvedSrc = "", f.pendingImg = p, e.__panoLinkedInputImageCache.set(s, f);
  let d = -1;
  const m = () => {
    var v, S, w, N;
    if (d += 1, d >= o.length) {
      if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === f && f.pendingImg === p && (f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null, !f.img))
        try {
          (N = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || N.call(w, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const _ = o[d];
    f.pendingResolvedSrc = _, p.src = _;
  };
  return p.onload = () => {
    var _, v, S;
    ((v = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : v.call(_, s)) === f && f.pendingImg === p && (f.srcRaw = i, f.resolvedSrc = String(f.pendingResolvedSrc || p.src || ""), f.img = p, f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null), String(f.pendingResolvedSrc || f.resolvedSrc || p.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = (_) => {
    var v, S, w, N;
    if (d + 1 < o.length) {
      m();
      return;
    }
    if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === f && f.pendingImg === p && (f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null, !f.img))
      try {
        (N = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || N.call(w, s);
      } catch {
      }
    String(f.pendingResolvedSrc || f.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((_ == null ? void 0 : _.type) || "error");
  }, m(), a && f.img && (f.img.complete || f.img.naturalWidth || f.img.width) ? f.img : p;
}
function eP(e, t = [], r = null, n = {}) {
  const i = QN(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function Jy(e) {
  var t, r;
  if (e) {
    If.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, jo(e), e.__panoWrappedErpCache = null;
  }
}
function tP(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, jo(e), e.__panoWrappedErpCache = null;
  }
}
function Zy(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Hs(e, t, r = "") {
  const n = Zy(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < ON ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Mm(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function nP(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), p = Math.max(Math.round(34 * r), s + Math.round(14 * r)), f = n + (o - l) * 0.5, d = i + (a - p) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(f, d, l, p, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", f + l * 0.5, d + p * 0.5 + 0.5), e.restore();
}
function Su(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function rP(e) {
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
function iP(e, t) {
  return Ky(e, t);
}
function rs(e, t, r, n = null) {
  var m;
  if (!String(t || "")) return null;
  let o = YN(r);
  if (!o && (n != null && n.external)) {
    if (!hn(e, "external-sticker")) return null;
    const _ = _i(e == null ? void 0 : e.id), v = ((m = _ == null ? void 0 : _.ui) == null ? void 0 : m.pano_sticker_input_images) || (_ == null ? void 0 : _.pano_sticker_input_images) || [];
    for (const S of Array.isArray(v) ? v : [v])
      if (o = Bn(S), o) break;
  }
  if (!o) return null;
  const a = Ga(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, p = n != null && n.external ? Of(o, l) : o, f = dN(o, s, l);
  return If.get(e, f, p, (_, v) => {
    var S, w;
    v && (n != null && n.external && e.__panoOutputFromRun && ni(e, "image-loaded"), (w = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || w.call(S));
  }) || null;
}
function oP(e, t) {
  var d, m, _, v;
  const r = uP(e, t), n = dP(t), i = Array.isArray((d = t == null ? void 0 : t.painting) == null ? void 0 : d.groups) ? t.painting.groups : [], o = new Map(
    i.filter((S) => S && typeof S == "object").map((S) => [String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim(), Number((S == null ? void 0 : S.z_index) || 0)])
  ), a = r ? n.map((S) => {
    const w = r.getGroupDisplayCanvas(S);
    return w ? {
      id: `paint_group:${S}`,
      source: w,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${S}`,
      zIndex: Number(o.get(S) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (v = (_ = e.__panoRasterObjectSurfaceCache) == null ? void 0 : _.retain) == null || v.call(_, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = cN()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var S, w;
    return (w = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null ? void 0 : w.call(S);
  });
  const l = aN(t == null ? void 0 : t.output_preset), p = s.filter((S) => (S == null ? void 0 : S.visible) !== !1 && String((S == null ? void 0 : S.layerKind) || "paint") === "paint").map((S) => String((S == null ? void 0 : S.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(p);
  const f = s.map((S) => {
    const w = e.__panoRasterObjectSurfaceCache.get(
      S,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return w ? {
      id: `raster:${String((S == null ? void 0 : S.id) || "")}`,
      source: w.source,
      revision: w.revision,
      zIndex: Number((S == null ? void 0 : S.z_index) || 0),
      opacity: 1,
      visible: (S == null ? void 0 : S.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...f];
}
function aP(e, t, r, n) {
  var o, a, s, l, p, f;
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
      x: Number(t.canvasX) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[0]) || 0),
      y: Number(t.canvasY) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[1]) || 0)
    };
  const i = lP(e, t, n);
  return i || null;
}
function sP(e, t) {
  var d, m;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (d = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : d.call(i), a = (t == null ? void 0 : t.ds) || ((m = Ut == null ? void 0 : Ut.canvas) == null ? void 0 : m.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], p = (r - Number(o.left || 0)) / s - Number(l[0] || 0), f = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(p) || !Number.isFinite(f) ? null : { x: p, y: f };
}
function lP(e, t, r) {
  var i, o;
  const n = sP(t, r || (Ut == null ? void 0 : Ut.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function cP(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function uP(e, t) {
  var p, f, d, m, _, v, S, w, N, W, R, L;
  const r = (f = (p = t == null ? void 0 : t.painting) == null ? void 0 : p.paint) == null ? void 0 : f.strokes, n = (m = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.mask) == null ? void 0 : m.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = cP(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = Bd(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((S = e.__panoPreviewPaintRevision) == null ? void 0 : S.paint) !== l.paint || ((w = e.__panoPreviewPaintRevision) == null ? void 0 : w.mask) !== l.mask || ((N = e.__panoPreviewPaintRevision) == null ? void 0 : N.groups) !== l.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((L = t == null ? void 0 : t.painting) == null ? void 0 : L.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function dP(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function fP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function pP(e, t, r) {
  const n = Nf(t, r);
  n.visible && Mf(e, n.boundaryEdges, { selected: !1 });
}
function hP(e, t, r) {
  const n = Nf(t, r);
  n.visible && (e.save(), Mf(e, n.boundaryEdges, { selected: !0 }), jy(e, n, { accent: eN(t) }), e.restore());
}
function _d(e, t, r) {
  return ty(Dl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Wl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? qo;
}
function mP(e) {
  return [hn(e, "background") ? vf(_i(e.id), ["pano_input_videos"], Bn) : "", IN(e, xi)];
}
function gP(e) {
  var o;
  if (!hn(e, "external-sticker")) return null;
  const t = _i(e.id), r = Ga(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(Bn), meta: r };
  const i = vf(t, ["pano_sticker_input_videos"], Bn);
  return i ? { src: i, meta: r } : null;
}
function yP({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Nm(e, t, r) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Dr({ ...t, painting: null }) });
  const n = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = rs(e, a.id, R0(a.source), { external: a.source.kind === "port" });
      const p = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && p) {
        const f = p.playback.stickerPicture(p.stickerStill, s), d = gy(p.playback.stickerMedia, s);
        return f ? { media: f, revision: _u(f), source: d } : null;
      }
    } else {
      const p = a.type === "external_image" || a.source_kind === "external_image", f = String(a.asset_id || "") || (p ? String(a.id || "") : "");
      s = rs(e, f, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: p });
    }
    return Gl(s) ? { media: s, revision: _u(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : oP(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: Gl(r) ? { media: r, revision: _u(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: ny(e.__panoSurfaceScene.sceneState, Wl(e), t.stickers, { media: n, paintLayers: i })
  };
}
function bP(e, t, r) {
  var L, g, z, H, ee, oe, F;
  const n = String(e.__panoPreviewMode || "stickers");
  Zy(e, n);
  const i = Fn(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (z = (g = (L = e.__panoCutoutNodeSurface) == null ? void 0 : L.session) == null ? void 0 : g.refresh) == null || z.call(g)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (oe = (ee = (H = e.__panoStickersNodeSurface) == null ? void 0 : H.session) == null ? void 0 : ee.refresh) == null || oe.call(ee));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const p = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const f = (e.__panoSurfacePlayback ? yP(e.__panoSurfacePlayback) : JN(e, ["pano_input_videos"], () => {
    var G, X;
    return (X = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : X.call(G);
  })) || eP(
    e,
    xi,
    () => {
      var G, X;
      return (X = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : X.call(G);
    },
    { preserveReadyWhilePending: !1 }
  ), d = Gl(f);
  let m = null;
  const _ = (G, X) => {
    m || (m = Nm(e, i, f));
    const ue = r.render({ width: G.w, height: G.h, camera: X, ...m });
    return ue && l.drawImage(ue.canvas, ue.x, ue.y, ue.width, ue.height, G.x, G.y, G.w, G.h), !!ue;
  };
  if (n === "cutout") {
    const G = rP(i), X = fP(f), ue = G ? Ie(Si(G).aspect, 0.1, 10) : d ? Ie(Number(X.width / X.height), 0.05, 20) : 1, Ne = xf(p, ue);
    e.__panoCutoutNodeFrame = Ne;
    let _e = "none";
    const pe = String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "");
    if (G)
      if (f && !d)
        _e = "loading";
      else if (d) {
        const J = MM({ width: a, height: s }, Ne, G);
        [
          !J.fallback || _(J.fallback.rect, ja(J.fallback.shot)),
          _(J.rect, ja(J.shot)),
          !J.fallback || _(Ne, ja(G))
        ].every(Boolean) || (_e = "loading");
      } else
        _e = "empty";
    else {
      const J = e.__panoLastCutoutShot;
      J ? (e.__panoPreviewView = Fy(J, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), d ? _(p, Dl(e.__panoPreviewView, a, s)) || (_e = "loading") : f ? _e = "loading" : _e = "empty";
    }
    d || r.release(), r.failed && _e === "loading" && (_e = "none"), G && (e.__panoLastCutoutShot = { ...G }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(Ne.x, Ne.y, Ne.w, Ne.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(Ne.x + 0.5, Ne.y + 0.5, Math.max(0, Ne.w - 1), Math.max(0, Ne.h - 1)), l.restore()), _e === "loading" ? (Su(e, !1), Hs(e, !0, pe)) : _e === "empty" ? (Su(e, !0), Hs(e, !1, "")) : (Su(e, !1), Hs(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let v = !1;
  (!f || d) && (m = Nm(e, i, f), !m.background && !m.layers.length ? (r.release(), v = !0) : v = _(p, Dl(e.__panoPreviewView, a, s)));
  const S = !v && !r.failed;
  Hs(e, S, S ? String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "") : ""), S && nP(l, p, Mm(t, p));
  const w = _d(e, a, s);
  !f && v && vP(l, w, Mm(t, p));
  const N = String(((F = i == null ? void 0 : i.active) == null ? void 0 : F.selected_sticker_id) || ""), W = ud(i, Wl(e)), R = v ? W.find((G) => String((G == null ? void 0 : G.id) || "") === N && (G == null ? void 0 : G.visible) !== !1) : null;
  v && W.filter((G) => G !== R && (G == null ? void 0 : G.visible) !== !1 && (G.external || G.source_kind === "external_image")).filter((G) => !Gl(rs(e, G.id, null, { external: !0 }))).forEach((G) => pP(l, G, w)), R && hP(l, R, w);
}
function Pm(e, t, r, n, i = 1) {
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
function vP(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let p = -180; p <= 180; p += 4) l.push(Vn(p, s));
    Pm(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let p = -89; p <= 89; p += 4) l.push(Vn(s, p));
    Pm(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Vn(0, 0) },
    { name: "Right", dir: Vn(90, 0) },
    { name: "Back", dir: Vn(180, 0) },
    { name: "Left", dir: Vn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function Sd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function _P(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Zn(e, t) {
  return _P(e, t) ? !1 : (Sd(e), !0);
}
function Am() {
  var r;
  const e = (r = Ut == null ? void 0 : Ut.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function SP(e) {
  var r;
  if (!e) return;
  const t = (r = Ut == null ? void 0 : Ut.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function wP(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !By(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function xP(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Cm(e, t = null, r = 0, n = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && kP(e, 180, t);
    }
  };
}
function kP(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ia(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const MP = /* @__PURE__ */ new WeakMap();
function Qy(e, t) {
  return fy(MP, e, t) ? !1 : (qN(e, t), Jy(e), Ia(e), !0);
}
async function NP(e) {
  var r, n;
  const t = await nM(e, Ut, Zt);
  t && (Qy(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function PP(e, t = {}) {
  var je;
  const r = t.__allowStandalone === !0, n = Uy(e);
  if (n && !r) {
    Ef(e);
    return;
  }
  n && wP(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: xm(e)
  }, s = "dom", l = a.signature || xm(e);
  if (Number(e.__panoRebindGeneration || 0), bd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, yd(e), e.__panoFrontendSig = l, e.__panoStickersPath = s, (je = e.__panoDomPreview) != null && je.widget || (e.__panoLegacyPreviewHooked && ul(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const p = t.noPreview === !0, f = p ? 0 : 56, d = p ? 0 : SM, m = document.createElement("div");
  if (DN(), m.className = "pano-node-preview-dom", m.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && m.classList.add("pano-node-preview--no-preview"), m.setAttribute("data-capture-wheel", "true"), m.tabIndex = 0, m.style.cssText = [
    "width:100%",
    p ? "height:auto" : "height:100%",
    d > 0 ? `min-height:${d}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), p) {
    const I = zl(md(
      e.addDOMWidget(gd(), "preview", m, Cm(e, null))
    ));
    Ia(e), e.__panoDomPreview = { widget: I, root: m, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const _ = document.createElement("div");
  _.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const v = wn({ label: "node.surface" });
  v.style.cssText = [
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
  const S = document.createElement("div");
  S.style.cssText = [
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
  ].join(";"), S.textContent = "Connect ERP image", _.appendChild(v), _.appendChild(S), m.appendChild(_);
  const w = i0(m), N = document.createElement("div");
  N && (N.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", N.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", m.appendChild(N)), LN(e, 120, 120), Ia(e);
  let W = null;
  try {
    xP(e, f, () => {
      var I, me;
      return (me = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : me.call(I);
    }), W = zl(md(e.addDOMWidget(
      gd(),
      "preview",
      m,
      Cm(
        e,
        () => {
          var I, me;
          return (me = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : me.call(I);
        },
        f,
        d,
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
  }, L = () => {
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(Pe)));
  }, g = iy(L), z = /* @__PURE__ */ Jo(i ? { ...Py(Fn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Ey(Fn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((I) => ({ value: I, label: I }))
  });
  let H = null;
  if (i && e.__panoSceneStateV2) {
    const [I, me] = [0, 1].map(() => {
      const Be = ac(document, "node.playback");
      return Be.playsInline = !0, Be.preload = "auto", Be.crossOrigin = "anonymous", Be.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", _.appendChild(Be), Be;
    }), Le = wn({ label: "node.still" });
    Le.__panoFrameIdx = 0;
    const Re = wn({ label: "node.port-still" });
    Re.__panoFrameIdx = 0;
    const Ue = vM({
      video: I,
      stickerVideo: me,
      createImage: (Be, Ze) => {
        const Qe = new Image();
        return Qe.onload = Ze, Qe.onerror = Ze, Qe.src = Be, Qe;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Be) => requestAnimationFrame(Be),
        cancelFrame: (Be) => cancelAnimationFrame(Be)
      },
      readState: () => Fn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: L,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ze;
        if (!(I.videoWidth > 0 && I.videoHeight > 0)) return;
        const Be = Math.min(1, FN / I.videoWidth);
        Le.width = Math.round(I.videoWidth * Be), Le.height = Math.round(I.videoHeight * Be), (Ze = Le.getContext("2d")) == null || Ze.drawImage(I, 0, 0, Le.width, Le.height), Le.__panoFrameIdx += 1, L();
      },
      onStickerCapture: () => {
        var Be;
        me.videoWidth > 0 && me.videoHeight > 0 && (Re.width = me.videoWidth, Re.height = me.videoHeight, (Be = Re.getContext("2d")) == null || Be.drawImage(me, 0, 0), Re.__panoFrameIdx += 1, L());
      },
      onChange: () => {
        z.playing = Ue.playing, L();
      }
    });
    H = { playback: Ue, video: I, still: Le, stickerVideo: me, stickerStill: Re, stickerSource: "" }, e.__panoSurfacePlayback = H;
  }
  const ee = () => {
    var Qe;
    const { playback: I, still: me, stickerStill: Le } = H, Re = fd(_, !!((Qe = e.flags) != null && Qe.collapsed)), Ue = I.source, Be = Re ? gP(e) : null, Ze = I.follow({
      shown: Re,
      sources: Re ? mP(e) : [],
      state: Fn(e),
      sticker: Be
    });
    ((Be == null ? void 0 : Be.src) || "") !== H.stickerSource && (H.stickerSource = (Be == null ? void 0 : Be.src) || "", Wu(Le)), I.source !== Ue && (Wu(me), me.__panoFrameIdx = 0), z.playable = Ze, z.playing = I.playing;
  }, oe = () => {
    var me, Le;
    const I = ((me = e.__panoOwnOutputVideoCache) == null ? void 0 : me.player) ?? null;
    I && !fd(_, !!((Le = e.flags) != null && Le.collapsed)) && I.pause(), i && (z.playable = !!I && !I.failed(), z.playing = !!(I != null && I.playing));
  }, F = () => {
    var I;
    H == null || H.playback.pause(), (I = e.__panoOwnOutputVideoCache) == null || I.player.pause();
  };
  let G = null;
  const X = (i ? yM : PM)({
    readState: () => Fn(e),
    publishLiveState: (I) => {
      I ? (G = I, e.__panoLiveStateOverride = I) : (e.__panoLiveStateOverride === G && (e.__panoLiveStateOverride = null), G = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, L();
    },
    commitState: (I) => {
      var Re, Ue, Be, Ze;
      const me = zo(e, "state_json");
      if (!me) return;
      $0(e, I.active);
      const Le = j0(e, I);
      H0(e, Le, String(me.value ?? "")) || (me.value = Le, (Re = me.callback) == null || Re.call(me, Le), e.__panoStateCache = null, (Ue = e.setDirtyCanvas) == null || Ue.call(e, !0, !0), (Ze = (Be = e.graph) == null ? void 0 : Be.setDirtyCanvas) == null || Ze.call(Be, !0, !0));
    },
    onChange: (I) => Object.assign(z, I)
  }), Ne = i ? Hy(e, (I = "sync", me = null) => {
    var cn;
    if (!i || !e.graph || !X || X.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const tn = hn(e, "external-sticker"), si = Fn(e).stickers.find((ki) => ki.source.kind === "port");
      return X.apply({
        type: "sync-port",
        value: My(e, {
          pose: tn ? Ga(e, "pano_sticker_input_pose", me) : null,
          image: si ? rs(e, si.id, null, { external: !0 }) : null
        })
      });
    }
    const Le = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((tn) => String((tn == null ? void 0 : tn.name) || "") === "sticker_image") : -1, Re = Le >= 0 ? ((cn = e.getInputLink(Le)) == null ? void 0 : cn.id) ?? null : null;
    if (Re == null)
      return X.apply({ type: "sync-external", value: { connected: !1 } });
    if (!hn(e, "external-sticker")) return !1;
    const Ue = Ga(e, "pano_sticker_input_pose", me), Be = Array.isArray(Ue) ? Ue[0] : Ue, Ze = String(Ga(e, "pano_sticker_input_state_hash", me) ?? ""), Qe = e.__panoPreviewView || { yaw: 0, pitch: 0 }, ut = Fn(e), Pt = (Array.isArray(ut == null ? void 0 : ut.stickers) ? ut.stickers : []).find((tn) => String((tn == null ? void 0 : tn.id) || "") === "sticker_image_1"), Et = rs(e, "sticker_image_1", null, { external: !0 }), kn = Be && typeof Be == "object" ? Be : Pt || { yaw_deg: Qe.yaw, pitch_deg: Qe.pitch, hFOV_deg: 30, rot_deg: 0 };
    return X.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Re,
        stateHash: Ze,
        pose: kn,
        imageWidth: Number((Et == null ? void 0 : Et.naturalWidth) || (Et == null ? void 0 : Et.width) || 0),
        imageHeight: Number((Et == null ? void 0 : Et.naturalHeight) || (Et == null ? void 0 : Et.height) || 0)
      }
    });
  }) : () => {
  };
  let _e = 0;
  const pe = async (I) => {
    if (!i || !X || !mr(I)) return !1;
    F();
    const me = `asset_${Math.random().toString(16).slice(2, 10)}`, Le = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    _e += 1, z.importing = !0;
    const Ue = Aa(e, `add:${me}`, async () => {
      const Be = await Ca(I), Ze = await Ki(I, {
        fetchApi: (Qe, ut) => Zt.fetchApi(Qe, ut)
      });
      return ze(), X.apply({
        type: "add-sticker",
        value: {
          stickerId: Le,
          assetId: me,
          asset: Ze,
          imageWidth: Be.width,
          imageHeight: Be.height,
          yaw_deg: Number(Re.yaw || 0),
          pitch_deg: Number(Re.pitch || 0)
        }
      });
    });
    try {
      return await Ue;
    } catch {
      return !1;
    } finally {
      _e = Math.max(0, _e - 1), z.importing = _e > 0, L();
    }
  };
  let J = null, E = null, V = null, he = !1;
  const Oe = () => {
    var I;
    return V && (clearTimeout(V), V = null), he ? (he = !1, ((I = X == null ? void 0 : X.commitGesture) == null ? void 0 : I.call(X)) ?? !1) : !1;
  }, ze = () => {
    var Re, Ue, Be;
    const I = Oe(), me = (J == null ? void 0 : J.pointerId) ?? (E == null ? void 0 : E.pointerId);
    if (J = null, E = null, me != null) {
      try {
        (Re = v.hasPointerCapture) != null && Re.call(v, me) && ((Ue = v.releasePointerCapture) == null || Ue.call(v, me));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const Le = ((Be = X == null ? void 0 : X.commitGesture) == null ? void 0 : Be.call(X)) ?? !1;
    return I || Le;
  }, Xe = () => {
    var Re, Ue, Be;
    const I = Oe(), me = J == null ? void 0 : J.pointerId;
    if (J = null, me != null) {
      try {
        (Re = v.hasPointerCapture) != null && Re.call(v, me) && ((Ue = v.releasePointerCapture) == null || Ue.call(v, me));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const Le = ((Be = X == null ? void 0 : X.cancelGesture) == null ? void 0 : Be.call(X)) ?? !1;
    return I || Le;
  }, le = () => ze();
  X && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(le));
  let j = null, de = !1;
  if (N && X)
    try {
      Pf(), j = Hd(i ? QM : KM, {
        model: z,
        onAction: (I) => {
          var Re, Ue, Be;
          if ((I == null ? void 0 : I.type) === "toggle-playback") {
            ze(), H ? H.playback.toggle() : (Re = e.__panoOwnOutputVideoCache) == null || Re.player.toggle(), L();
            return;
          }
          if (F(), (I == null ? void 0 : I.type) === "open-editor") {
            ze(), i || (z.aspectOpen = !1), (Ue = e.__panoOpenEditor) == null || Ue.call(e);
            return;
          }
          if (i) {
            if ((I == null ? void 0 : I.type) === "add-image-file") {
              pe(I.file);
              return;
            }
            X.apply(I) && L();
            return;
          }
          if ((I == null ? void 0 : I.type) === "toggle-aspect") {
            z.aspectOpen = !z.aspectOpen;
            return;
          }
          if ((I == null ? void 0 : I.type) === "close-aspect") {
            z.aspectOpen = !1;
            return;
          }
          let me = I;
          if ((I == null ? void 0 : I.type) === "add-frame") {
            const Ze = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            me = {
              ...I,
              ...xM(Ze, {
                width: v.width,
                height: v.height
              })
            };
          } else if ((I == null ? void 0 : I.type) === "delete-frame") {
            const Ze = to(Fn(e));
            Ze && (e.__panoPreviewView = Fy(Ze, {
              width: v.width,
              height: v.height
            }));
          }
          const Le = ((Be = e.__panoCutoutNodeFrame) == null ? void 0 : Be.safeRect) || null;
          z.aspectOpen = !1, X.apply({ ...me, safeRect: Le }) && L();
        }
      }), j.mount(N), de = !0;
    } catch {
      j = null, de = !1;
    }
  const be = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    H && ee(), L();
  }) : null;
  be == null || be.observe(_);
  const Pe = (I) => {
    var Le, Re;
    R.raf = 0, R.inTick = !0;
    let me = !1;
    try {
      me = Fe.stepInertia(I), (R.needsDraw || me) && (R.needsDraw = !1, H ? ee() : oe(), (Le = e.flags) != null && Le.collapsed || bP(e, v, g), z.viewUnavailable = g.failed);
    } finally {
      R.inTick = !1;
    }
    (me || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(Pe)), TN() && (!e.__panoDebugLastTs || I - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = I, e.__panoPreviewMode, yd(e), xa(m), xa(_), xa(v), xa(m.parentElement), xa((Re = m.parentElement) == null ? void 0 : Re.parentElement), Number(v.width || 0), Number(v.height || 0), void 0);
  }, Fe = Yd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (I) => {
      e.__panoPreviewView = I;
    },
    getViewportSize: () => {
      const I = v.getBoundingClientRect();
      return {
        w: Math.max(1, Number(I.width || v.clientWidth || 0)),
        h: Math.max(1, Number(I.height || v.clientHeight || 0))
      };
    },
    getInvert: () => {
      const I = wm();
      return {
        x: I.invert_view_x ? -1 : 1,
        y: I.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      L();
    }
  }), te = i ? _ : m, Ae = (I) => {
    const me = v.getBoundingClientRect();
    return {
      x: (Number(I.clientX) - me.left) * (v.width / Math.max(1, me.width)),
      y: (Number(I.clientY) - me.top) * (v.height / Math.max(1, me.height))
    };
  }, k = (I) => {
    var Re, Ue;
    if (!i || !o) return;
    const me = Fn(e), Le = ym(
      ud(me, Wl(e)),
      String(((Re = me == null ? void 0 : me.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      Ae(I),
      _d(e, v.width, v.height)
    );
    if (!Le) {
      v.style.cursor = "grab";
      return;
    }
    if (((Ue = Le.item) == null ? void 0 : Ue.locked) === !0) {
      v.style.cursor = "default";
      return;
    }
    v.style.cursor = Le.hit.cursor || "default";
  };
  v.addEventListener("pointerdown", (I) => {
    var Qe, ut, Pt, Et, kn, Hn, cn, tn, si, ki, us;
    if (!Zn(I, te) || I.button !== 0) return;
    if (!i) {
      const In = to(Fn(e)), lr = e.__panoCutoutNodeFrame;
      if (!In) {
        (Qe = m.focus) == null || Qe.call(m, { preventScroll: !0 }), (ut = v.setPointerCapture) == null || ut.call(v, I.pointerId), v.style.cursor = "grabbing", Fe.startDrag(I.clientX, I.clientY, I.pointerId);
        return;
      }
      if (In.locked === !0 || !lr || !X) return;
      const ds = Ae(I);
      let na;
      if (I.shiftKey) {
        const Mi = Dy({
          frame: lr,
          point: ds,
          startRollDeg: Number(In.roll_deg ?? In.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Mi) return;
        na = { kind: "roll", pointerId: I.pointerId, rollGesture: Mi };
      } else {
        const Mi = ((Pt = Fn(e)) == null ? void 0 : Pt.ui_settings) || wm();
        na = {
          kind: "pan",
          pointerId: I.pointerId,
          startPoint: ds,
          startShot: { ...In },
          focalPx: Qi(lr, In),
          invertX: Mi.invert_view_x === !0,
          invertY: Mi.invert_view_y === !0
        };
      }
      ze(), (Et = m.focus) == null || Et.call(m, { preventScroll: !0 }), (kn = v.setPointerCapture) == null || kn.call(v, I.pointerId), v.style.cursor = "grabbing", X.beginGesture(), J = na;
      return;
    }
    if (!o) return;
    const me = Ae(I), Le = Fn(e), Re = String(((Hn = Le == null ? void 0 : Le.active) == null ? void 0 : Hn.selected_sticker_id) || ""), Ue = _d(e, v.width, v.height);
    (cn = m.focus) == null || cn.call(m, { preventScroll: !0 });
    const Be = () => ym(ud(Le, Wl(e)), Re, me, Ue);
    let Ze = Be();
    if (Ze && (H != null && H.playback.playing) && (F(), Ze = Be()), Ze && X) {
      if (Fe.stopMotion(), ze(), String(((tn = Ze.item) == null ? void 0 : tn.id) || "") !== Re && X.apply({ type: "select-sticker", id: Ze.item.id }), ((si = Ze.item) == null ? void 0 : si.locked) === !0) {
        L();
        return;
      }
      const In = me, lr = Ze.geometry.center;
      E = {
        active: !0,
        kind: Ze.hit.kind,
        pointerId: I.pointerId,
        startPoint: In,
        startCenter: { ...lr },
        startSticker: { ...Ze.item },
        startDistance: Math.max(1, Math.hypot(In.x - lr.x, In.y - lr.y)),
        startAngle: Math.atan2(In.y - lr.y, In.x - lr.x),
        projection: Ue
      }, X.beginGesture(), (ki = v.setPointerCapture) == null || ki.call(v, I.pointerId), v.style.cursor = Ze.hit.kind === "rotate" ? "grabbing" : Ze.hit.kind === "move" ? "move" : Ze.hit.cursor, L();
      return;
    }
    (us = v.setPointerCapture) == null || us.call(v, I.pointerId), v.style.cursor = "grabbing", Fe.startDrag(I.clientX, I.clientY, I.pointerId);
  }), v.addEventListener("pointermove", (I) => {
    if (!i) {
      if (!J) {
        if (!Fe.state.drag.active) return;
        Zn(I, te), Fe.moveDrag(I.clientX, I.clientY, "pano");
        return;
      }
      if (J.pointerId !== I.pointerId || !X) return;
      if (Zn(I, te), J.kind === "pan") {
        const Le = Ae(I);
        X.updateGesture({
          type: "pan-camera",
          startShot: J.startShot,
          dx: Le.x - J.startPoint.x,
          dy: Le.y - J.startPoint.y,
          focalPx: J.focalPx,
          invertX: J.invertX,
          invertY: J.invertY
        });
        return;
      }
      const me = Ly(J.rollGesture, Ae(I), I);
      if (!me) return;
      J.rollGesture = me.gesture, X.updateGesture({ type: "set-roll", value: me.rollDeg });
      return;
    }
    if (!E && !Fe.state.drag.active) {
      k(I);
      return;
    }
    if (E) {
      if (E.pointerId !== I.pointerId || !X) return;
      Zn(I, te);
      const me = Ae(I);
      let Le = E.startSticker;
      if (E.kind === "move")
        Le = rN(
          E.startSticker,
          {
            x: E.startCenter.x + me.x - E.startPoint.x,
            y: E.startCenter.y + me.y - E.startPoint.y
          },
          E.projection
        );
      else if (E.kind === "scale") {
        const Re = Math.hypot(me.x - E.startCenter.x, me.y - E.startCenter.y);
        Le = iN(E.startSticker, E.startDistance, Re);
      } else if (E.kind === "rotate") {
        const Re = Math.atan2(me.y - E.startCenter.y, me.x - E.startCenter.x);
        Le = oN(E.startSticker, E.startAngle, Re, I.shiftKey === !0);
      }
      X.updateGesture({ type: "set-transform", value: Le }), L();
      return;
    }
    !o || !Fe.state.drag.active || (Zn(I, te), Fe.moveDrag(I.clientX, I.clientY, "pano"));
  });
  const O = () => {
    var me, Le;
    if (!J && !E) {
      if (!Fe.state.drag.active) return;
      Fe.endDrag(), v.style.cursor = "grab", L();
      return;
    }
    if (!X) return;
    const I = (J == null ? void 0 : J.pointerId) ?? (E == null ? void 0 : E.pointerId);
    J = null, E = null;
    try {
      (me = v.hasPointerCapture) != null && me.call(v, I) && ((Le = v.releasePointerCapture) == null || Le.call(v, I));
    } catch {
    }
    X.cancelGesture(), v.style.cursor = "grab", L();
  }, Y = (I, me = !1) => {
    var Le, Re, Ue, Be;
    if (!i) {
      if (!J) {
        if (!Fe.state.drag.active) return;
        Zn(I, te), (Le = v.releasePointerCapture) == null || Le.call(v, I.pointerId), v.style.cursor = "grab", Fe.endDrag(), L();
        return;
      }
      if (J.pointerId !== I.pointerId || !X) return;
      Zn(I, te), J = null, (Re = v.releasePointerCapture) == null || Re.call(v, I.pointerId), v.style.cursor = "grab", me ? X.cancelGesture() : X.commitGesture(), k(I), L();
      return;
    }
    if (E) {
      if (E.pointerId !== I.pointerId || !X) return;
      Zn(I, te), E = null, (Ue = v.releasePointerCapture) == null || Ue.call(v, I.pointerId), v.style.cursor = "grab", me ? X.cancelGesture() : X.commitGesture(), L();
      return;
    }
    !o || !Fe.state.drag.active || (Zn(I, te), (Be = v.releasePointerCapture) == null || Be.call(v, I.pointerId), v.style.cursor = "grab", Fe.endDrag(), L());
  };
  v.addEventListener("pointerup", Y), v.addEventListener("pointercancel", (I) => Y(I, !0)), v.addEventListener("lostpointercapture", O), v.addEventListener("pointerleave", (I) => {
    !i && J || E || Fe.state.drag.active && Y(I);
  });
  const ge = (I) => {
    const me = document.activeElement;
    if (me !== m && !m.contains(me)) return;
    if (I.key === "Escape" && (J || E) && X) {
      O(), Sd(I);
      return;
    }
    if (!i || I.key !== "Delete" && I.key !== "Backspace" || !X) return;
    const Le = I.target, Re = String((Le == null ? void 0 : Le.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || Le != null && Le.isContentEditable || z.canDelete === !0 && (F(), ze(), X.apply({ type: "delete-selected" }) && L(), Sd(I));
  };
  window.addEventListener("keydown", ge, !0);
  const T = CN({
    requestFrame: (I) => requestAnimationFrame(I),
    cancelFrame: (I) => cancelAnimationFrame(I),
    restore: (I) => SP(I)
  }), q = (I) => {
    var Le, Re, Ue, Be, Ze, Qe;
    if (!Zn(I, te)) return;
    if (!i) {
      const ut = to(Fn(e));
      if (ut && ut.locked !== !0 && X) {
        const Pt = kl(I);
        Pt !== 0 && (he || (ze(), X.beginGesture(), he = !0), X.updateGesture({
          type: "step-fov",
          direction: Pt
        }) ? (V && clearTimeout(V), V = setTimeout(Oe, 180), L()) : X.hasGestureChanges() || (X.cancelGesture(), he = !1));
      } else if (!ut) {
        const Pt = Am();
        Fe.applyWheelEvent(I) && L(), T.schedule(Pt);
      }
      (Le = I.preventDefault) == null || Le.call(I), (Re = I.stopPropagation) == null || Re.call(I), (Ue = I.stopImmediatePropagation) == null || Ue.call(I);
      return;
    }
    if (!o) return;
    const me = Am();
    Fe.applyWheelEvent(I) && L(), (Be = I.preventDefault) == null || Be.call(I), (Ze = I.stopPropagation) == null || Ze.call(I), (Qe = I.stopImmediatePropagation) == null || Qe.call(I), T.schedule(me);
  }, ne = i ? [_, v] : [_];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((I) => {
    ne.forEach((me) => me.addEventListener(I, q, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((I) => {
    v.addEventListener(I, (me) => Zn(me, te)), _.addEventListener(I, (me) => Zn(me, te));
  });
  const A = zo(e, "state_json");
  let B = null, K = null;
  A && !A.__panoPreviewPatchedCb && (B = A.callback, K = (I) => {
    const me = B ? B(I) : void 0;
    return L(), me;
  }, A.callback = K, A.__panoPreviewPatchedCb = K);
  const Z = zo(e, "bg_color");
  let re = null, ae = null;
  Z && !Z.__panoPreviewPatchedCb && (re = Z.callback, ae = (I) => {
    const me = re ? re(I) : void 0;
    return L(), me;
  }, Z.callback = ae, Z.__panoPreviewPatchedCb = ae);
  const ye = e.onRemoved, xe = e.onResize, Ee = e.onExecuted, We = e.onDragOver, ie = e.onDragDrop;
  let ke = null;
  const Me = () => {
    i && (z.dropActive = !0, ke && clearTimeout(ke), ke = setTimeout(() => {
      ke = null, z.dropActive = !1;
    }, 140));
  }, b = i ? function(I) {
    return (We ? We.apply(this, arguments) : !1) === !0 ? !0 : Cf(I == null ? void 0 : I.dataTransfer) ? (Me(), !0) : !1;
  } : null, D = i ? function(I) {
    var Re;
    if ((ie ? ie.apply(this, arguments) : !1) === !0) return !0;
    const Le = Array.from(((Re = I == null ? void 0 : I.dataTransfer) == null ? void 0 : Re.files) || []).find((Ue) => mr(Ue));
    return Le ? (ke && clearTimeout(ke), ke = null, z.dropActive = !1, pe(Le), !0) : !1;
  } : null;
  i && (e.onDragOver = b, e.onDragDrop = D);
  const u = i ? AN(m, {
    onActive: (I) => {
      if (I) {
        Me();
        return;
      }
      ke && clearTimeout(ke), ke = null, z.dropActive = !1;
    },
    onDrop: (I) => {
      pe(I);
    }
  }) : () => {
  }, C = function(I) {
    e.__panoOutputFromRun = !0;
    const me = Qy(e, I);
    ni(e, me ? "executed" : "sync", I), L();
    const Le = Ee ? Ee.apply(this, arguments) : void 0;
    return Ia(e), Le;
  };
  e.onExecuted = C;
  const x = e.onConnectionsChange, U = function(I, me) {
    const Le = om(e, I, me, yf), Re = om(e, I, me, xi), Ue = arguments, Be = x ? x.apply(this, Ue) : void 0, Ze = () => {
      R.destroyed || (Re && tP(e), Le && ni(e, "connection-change"), Ia(e), L());
    };
    return Ze(), queueMicrotask(Ze), Be;
  };
  e.onConnectionsChange = U;
  const ve = function() {
    const I = xe ? xe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, L(), I;
  };
  e.onResize = ve;
  const ce = function() {
    return De(), vd.unregister(this), ye ? ye.apply(this, arguments) : void 0;
  };
  e.onRemoved = ce;
  const De = () => {
    var I, me, Le, Re, Ue, Be, Ze, Qe, ut;
    R.destroyed = !0, (I = be == null ? void 0 : be.disconnect) == null || I.call(be), i ? ze() : Xe(), v.removeEventListener("lostpointercapture", O), u(), w(), window.removeEventListener("keydown", ge, !0), (Le = (me = e.__panoStateFlushers) == null ? void 0 : me.delete) == null || Le.call(me, le), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Re = X == null ? void 0 : X.destroy) == null || Re.call(X), (Ue = j == null ? void 0 : j.unmount) == null || Ue.call(j), H && (H.playback.dispose(), H.video.remove(), H.stickerVideo.remove(), e.__panoSurfacePlayback === H && (e.__panoSurfacePlayback = null)), g.dispose(), e.__panoSurfaceScene = null, (Ze = (Be = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Be.dispose) == null || Ze.call(Be), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Ne(), T.dispose(), ke && clearTimeout(ke), ke = null, If.disposeOwner(e), jo(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, ((Qe = e.__panoCutoutNodeSurface) == null ? void 0 : Qe.session) === X && (e.__panoCutoutNodeSurface = null), ((ut = e.__panoStickersNodeSurface) == null ? void 0 : ut.session) === X && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ve && (e.onResize = xe), e.onExecuted === C && (e.onExecuted = Ee), e.onConnectionsChange === U && (e.onConnectionsChange = x), K && (A == null ? void 0 : A.callback) === K && (A.callback = B), K && (A == null ? void 0 : A.__panoPreviewPatchedCb) === K && delete A.__panoPreviewPatchedCb, ae && (Z == null ? void 0 : Z.callback) === ae && (Z.callback = re), ae && (Z == null ? void 0 : Z.__panoPreviewPatchedCb) === ae && delete Z.__panoPreviewPatchedCb, e.onDragOver === b && (e.onDragOver = We), e.onDragDrop === D && (e.onDragDrop = ie), e.onRemoved === ce && (e.onRemoved = ye);
  };
  e.__panoDomRestore = De, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = X && de && !i ? { session: X, model: z } : null, e.__panoStickersNodeSurface = X && de && i ? { session: X, model: z } : null, e.__panoDomPreview = {
    widget: W,
    root: m,
    canvas: v,
    requestDraw: L,
    state: R,
    emptyHintEl: S,
    nodeSurface: e.__panoCutoutNodeSurface
  }, vd.register(e), e.graph && ni(e, "attach"), L();
}
function Im(e, t = {}) {
  Yy(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Em(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (Uy(e) && !r) {
    Ef(e);
    return;
  }
  Yy(e).attach(t);
}
function AP(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function CP(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, p = Math.max(0, Number.isFinite(s) ? s : 0) * o, f = Number(r), d = f > 0 ? f : 1 / 0, m = Math.max(l, p);
  let _ = m > 0 ? Math.min(1, d / m) : 1;
  return n && l > 0 && p > 0 && (_ = Math.min(_, n.width * o / l, n.height * o / p)), {
    width: Math.max(1, Math.round(l * _)),
    height: Math.max(1, Math.round(p * _))
  };
}
function IP({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var _;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, p = () => {
    const v = l();
    return v === s || (s = v, i(v)), v;
  }, f = () => p();
  return (_ = t == null ? void 0 : t.addEventListener) == null || _.call(t, "fullscreenchange", f), p(), { toggle: async () => {
    var v;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((v = t.exitFullscreen) == null ? void 0 : v.call(t));
      } catch {
      }
      return a ? !1 : (p(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (l())
          return p(), !0;
      } catch {
      }
    return a || (o(), p()), !1;
  }, isActive: l, destroy: () => {
    var v, S, w;
    if (!a) {
      if (a = !0, (v = t == null ? void 0 : t.removeEventListener) == null || v.call(t, "fullscreenchange", f), l())
        try {
          const N = (S = t.exitFullscreen) == null ? void 0 : S.call(t);
          (w = N == null ? void 0 : N.catch) == null || w.call(N, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const EP = { class: "pano-preview-node-surface" }, OP = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), $e("div", EP, [
      nt(an, {
        icon: e.model.fullscreen ? ct(qe).fullscreen_close : ct(qe).fullscreen,
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
      e.model.viewUnavailable ? (Te(), or(kf, { key: 0 })) : wt("", !0)
    ]));
  }
}, Gs = 140, FP = 180, Om = 40, wu = 10;
function Fm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Tm(e, t) {
  const r = Fm(e), n = Fm(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Dm(e) {
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
  return typeof ((o = Zt) == null ? void 0 : o.apiURL) == "function" ? Zt.apiURL(i) : i;
}
function Ho(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ho(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Dm({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = Ho(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Dm(e);
}
function eb(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function TP(e) {
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
function wd(e) {
  var i;
  const t = (i = nr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Tm(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Tm(o, r)) return t[o];
  return null;
}
function DP(e) {
  var n, i;
  const t = wd(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Ho(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function LP(e, t = "erp_image") {
  var _, v, S, w, N, W, R;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((L) => String((L == null ? void 0 : L.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((L, g) => String((L == null ? void 0 : L.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(g))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (S = (v = (_ = nr) == null ? void 0 : _.graph) == null ? void 0 : v.getNodeById) == null ? void 0 : S.call(v, o), s = wd(o), l = wd(e == null ? void 0 : e.id), p = [
    (w = l == null ? void 0 : l.ui) == null ? void 0 : w.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (N = s == null ? void 0 : s.ui) == null ? void 0 : N.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const L of p)
    if (Array.isArray(L))
      for (const g of L) {
        const z = Ho(g);
        if (z) return z;
      }
  let f = [];
  try {
    f = typeof ((W = nr) == null ? void 0 : W.getNodeImageUrls) == "function" ? nr.getNodeImageUrls(a) || [] : [];
  } catch {
    f = [];
  }
  if (Array.isArray(f) && f.length > 0)
    for (const L of f) {
      const g = Ho(L);
      if (g) return g;
    }
  if (a) {
    const L = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const g of L) {
      const z = Ho(g);
      if (z) return z;
    }
  }
  const d = (R = a == null ? void 0 : a.widgets) == null ? void 0 : R.find((L) => String((L == null ? void 0 : L.name) || "").toLowerCase() === "image"), m = String((d == null ? void 0 : d.value) || "").trim();
  return m ? Zt.apiURL(`/view?filename=${encodeURIComponent(m)}&type=input&subfolder=`) : "";
}
function xu(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Lm(e, t, r, n, i, o, a) {
  var p, f, d;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !eb(o) || r <= 1 || n <= 1) {
    xu(t, r, n);
    return;
  }
  if (a.failed) {
    xu(t, r, n);
    return;
  }
  const s = Number(((d = (f = (p = e == null ? void 0 : e.widgets) == null ? void 0 : p.find) == null ? void 0 : f.call(p, (m) => (m == null ? void 0 : m.name) === "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: Dl(i, r, n),
    background: { media: o, revision: TP(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : xu(t, r, n);
}
function Rm(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class RP {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = iy(() => this.requestDraw()), this.controller = Yd({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Wt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ie(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ie(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
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
        `min-height:${Gs}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = wn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Gs;
        },
        getHeight() {
          return Gs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = zl(md(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Gs, Number(o.minHeight || 0)),
            minWidth: Math.max(FP, Number(o.minWidth || 0))
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
      return Pf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Jo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = IP({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = Hd(OP, {
        model: this.surfaceModel,
        onAction: (s) => {
          var l, p;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((p = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || p.call(l));
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = i0(r), t.addEventListener("pointerdown", (o) => {
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
      AP(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !eb(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? fd(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = nr.canvas) != null && n.graph) || this.node.graph === nr.canvas.graph);
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
      return Rm(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, p, f, d, m, _;
      const o = aP(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !Rm(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((p = t.view) == null ? void 0 : p.fov) || 100), s && ((f = this.setDirtyCanvas) == null || f.call(this, !0, !1)), (d = r == null ? void 0 : r.preventDefault) == null || d.call(r), (m = r == null ? void 0 : r.stopPropagation) == null || m.call(r), (_ = r == null ? void 0 : r.stopImmediatePropagation) == null || _.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - wu * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Om - wu);
    return { x: wu, y: Om, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Lm(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? ry : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = CP(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = DP(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = ac(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, p = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", p), s.addEventListener("play", p), s.addEventListener("pause", p), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", p), s.removeEventListener("play", p), s.removeEventListener("pause", p), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = LP(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Lm(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, p, f, d, m, _, v, S, w, N;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (p = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || p.call(l), this.surfaceApp = null, (d = (f = this.surfaceHost) == null ? void 0 : f.remove) == null || d.call(f), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (m = this.mediaCleanup) == null || m.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (v = (_ = this.root) == null ? void 0 : _.remove) == null || v.call(_);
    } catch {
    }
    try {
      Ky(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((N = (w = (S = this.node) == null ? void 0 : S.widgets) == null ? void 0 : w.find) == null ? void 0 : N.call(w, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function VP(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new RP(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function tb(e, t, r) {
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
function Ff(e) {
  return !!(e != null && e.prototype);
}
function is(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function $P(e, t = {}) {
  Ff(e) || VP(e, {
    ...t,
    onOpen: is(e, t.onOpen)
  });
}
function zP(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Ff(e)) {
    Em(e, {
      ...n,
      onOpen: is(e, t.onOpen)
    });
    return;
  }
  tb(e, "stickers_node_preview", (i) => {
    Em(i, {
      ...n,
      onOpen: is(i, t.onOpen)
    });
  });
}
function jP(e, t = {}) {
  if (!Ff(e)) {
    Im(e, {
      ...t,
      onOpen: is(e, t.onOpen)
    });
    return;
  }
  tb(e, "cutout_preview", (r) => {
    Im(r, {
      ...t,
      onOpen: is(r, t.onOpen)
    });
  });
}
const Ln = {
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
}, Yr = "pen";
function Vm(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function HP({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
const Mt = Object.freeze({
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
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item loaded, Spark sorted.
  MEDIA: "media",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), GP = new Set(Object.values(Mt));
function WP({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), f = 1, d = 0;
  function m(S) {
    try {
      S();
    } catch (w) {
      i(w);
    }
  }
  function _() {
    !o && !a && !s && (o = e(v));
  }
  function v(S) {
    o = 0, a = !0;
    try {
      const w = p;
      p = /* @__PURE__ */ new Map();
      for (const W of w.values()) m(() => W(S));
      if (s) return;
      const N = l;
      l = /* @__PURE__ */ new Set(), (N.size || n()) && m(() => r(S, N));
    } finally {
      a = !1;
    }
    (l.size || p.size || n()) && _();
  }
  return {
    requestDraw(S) {
      if (!GP.has(S)) throw new Error(`Unknown draw reason: ${S}`);
      S === Mt.STATE && (d += 1), l.add(S), _();
    },
    requestFrame(S) {
      const w = f++;
      return p.set(w, S), _(), w;
    },
    cancelFrame(S) {
      p.delete(S);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      _();
    },
    get stateRevision() {
      return d;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      s = !0, o && t(o), o = 0, p.clear(), l.clear();
    }
  };
}
const KP = 250, BP = 600, UP = 180, YP = 2;
function XP(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ea(e, t, r) {
  return e + (t - e) * r;
}
function qP(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Ud(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / UP + i / YP);
  return Math.round(Ea(KP, BP, o));
}
function JP(e, t, r) {
  const n = XP(Ie(r, 0, 1));
  return {
    position: e.position.map((i, o) => Ea(i, t.position[o], n)),
    yaw_deg: Wt(e.yaw_deg + Ud(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Ea(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Ea(e.hFOV_deg, t.hFOV_deg, n),
    distance: Ea(e.distance, t.distance, n)
  };
}
function ZP(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Ud(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function QP(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return ZP(e, t) ? null : { from: e, to: t, startTs: r, durationMs: qP(e, t, n), end: i };
}
function e2(e, t) {
  const r = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: JP(e.from, e.to, r), done: !1 };
}
function dl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function t2(e, t, r) {
  const n = dl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function ko(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function n2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function r2({
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
  var R, L;
  const p = e.primaryTool === "paint" || e.primaryTool === "mask", f = {
    visible: p,
    activePane: p ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: p ? !!r : !1,
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
    historyEntries: Array.from({ length: 8 }, (g, z) => ({ index: z, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!p) return f;
  const d = ((R = t.find((g) => i(e.paintColor, g.color))) == null ? void 0 : R.id) || "", m = !d, _ = o(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((L = e.customPaintColor) == null ? void 0 : L.a) ?? 1))) * 100), S = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), w = e.brushSizes[S] ?? 10, N = l(), W = Array.from({ length: 8 }, (g, z) => e.customPaintHistory[z] || null);
  return {
    ...f,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: d,
    customColorActive: m,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...a(_.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, _.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, _.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, _.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, _.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, _.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, _.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: W.map((g, z) => ({
      index: z,
      color: g ? { cssColor: n(g, 1) } : null
    })),
    sizeValue: w,
    sizeText: String(w),
    sizeFill: `${Math.max(0, Math.min(100, (w - 1) / 119 * 100))}%`,
    sizeDisabled: N,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function i2({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const o2 = {
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
function a2(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = o2[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function ku(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function s2({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? qe.eye : qe.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function l2({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function c2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Go = "erp", u2 = ["1:1", "4:3", "3:2", "16:9"];
function nb(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...u2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: Go, label: Number(r) === 180 ? "180°" : "360°", active: e === Go }] : []
  ];
}
function d2({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
  uiSettings: l,
  normalizeCoverageValue: p
}) {
  return {
    coverage: { value: p(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: a2(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function f2({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: p,
  isExternalSticker: f,
  isStickerHidden: d,
  canRestoreSelectedToInitial: m,
  iconSet: _,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: v = !1,
  cameraDeletable: S = !1,
  erpChoice: w = !1,
  coverage: N = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let W = [];
  if (r.length > 1)
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: _.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: _.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? _.lock_open : _.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: _.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: _.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? _.lock_open : _.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: _.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: _.send_back, disabled: !!s }
    ], f(t) || (W.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: _.duplicate }), W.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: _.replace_image })), f(t)) {
      const R = m(), L = d(t);
      W.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: _.back_initial,
        disabled: !R
      }), W.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: L ? "Show" : "Hide",
        tip: L ? "Show input image" : "Hide input image",
        icon: L ? _.eye : _.eye_dashed
      });
    }
    W.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? _.lock_open : _.lock_closed }), f(t) || W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!s });
  } else
    W = [
      {
        key: "aspect",
        kind: "aspect",
        icon: _.aspect,
        open: !!p,
        choices: nb(l, { erp: w, coverage: N })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: _.rotate_90, disabled: l === Go }
    ], v ? S && W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete }) : W.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? _.lock_open : _.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!s }
    );
  return rb(i.corners, W);
}
const $m = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function p2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? $m.filter((s) => s.cameraTip) : $m;
  return rb([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: p, cameraTip: f }) => ({ key: s, label: l, tip: n ? f : p, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: qe.delete }] : []
  ]);
}
function h2(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: p, maxY: f } = e || {};
  if (![s, l, p, f].every(Number.isFinite)) return null;
  const d = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), m = Math.max(14, i - r - 14), _ = f + 18, v = p - 18 - r;
  let S;
  return _ <= m ? S = Math.max(_, 14) : v >= 14 ? S = Math.min(v, m) : S = Math.min(Math.max(_, 14), m), { left: d, top: S };
}
function rb(e, t) {
  const r = e.map((p) => ({ x: Number(p == null ? void 0 : p.x), y: Number(p == null ? void 0 : p.y) })).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((p) => p.x), i = r.map((p) => p.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const ib = "painting";
function m2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const g2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function y2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: p = !1, stickers: f = !0, scene: d = !1, sceneLocked: m = !1 }) {
  const _ = (W, R, L, g, z, H, { keyable: ee = !0, hideable: oe = !0 } = {}) => {
    const F = (G) => (r == null ? void 0 : r.owner) === W && r.lane === G ? r.frames.map((X) => X + H) : [];
    return {
      id: W,
      label: L,
      icon: g,
      clip: z,
      selected: W === n,
      hideable: oe,
      visible: R.visible,
      keyable: ee,
      open: ee && o.has(W),
      keys: xx(R).map((G) => ({ frame: G.frame + H, full: G.full })),
      selectedFrames: F(null),
      lanes: (ee ? ea(R) : []).map((G) => ({
        key: `${W}:${G}`,
        lane: G,
        label: g2[G],
        frames: R[G].keyframes.map((X) => X.frame + H),
        selectedFrames: F(G)
      }))
    };
  }, v = f ? e.stickers : [], S = v.filter((W) => W.placement === "sky").sort((W, R) => R.z_index - W.z_index), w = v.filter((W) => W.placement === "world"), N = ({ start: W, in: R, duration: L }) => ({ clip: { start: W, end: L === null ? null : W + L }, offset: W - R });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s || m,
    lengthLocked: m,
    lockTip: m ? "Set by the scene" : "Set by the video input",
    length: m ? t : e.timeline.length,
    rows: [
      ...l ? [_("camera", e.camera, "Camera", qe.camera, null, 0, { hideable: p })] : [],
      ...[...S, ...w].map((W) => {
        const { clip: R, offset: L } = N(W.clip);
        return _(W.id, W, ed(W), qe.image, R, L);
      }),
      ...f && (m2(e.painting) || !e.painting_visible) ? [{
        id: ib,
        label: "Paint",
        icon: qe.paintbrush_vertical_tool,
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
      ...f && (d || Fl(e.scene)) ? [(() => {
        const { clip: W, offset: R } = N(e.scene.clip);
        return _("scene", e.scene, "Scene", qe.box, W, R, { keyable: !1 });
      })()] : []
    ]
  };
}
function b2(e, t, r, n) {
  const i = Px(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
const v2 = { class: "pano-floating-right" }, _2 = {
  key: 0,
  class: "pano-floating-space"
}, S2 = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, w2 = ["data-settled"], x2 = ["data-ready", "data-settled"], k2 = ["aria-label", "data-tip"], M2 = {
  key: 1,
  class: "pano-camera-preview-label"
}, N2 = {
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
    return (t, r) => (Te(), $e(st, null, [
      we("div", v2, [
        e.space ? ti((Te(), $e("div", _2, [
          we("div", S2, [
            (Te(!0), $e(st, null, Lt(e.space.modes, (n) => (Te(), or(an, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          nt(an, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [no, e.space.visible]
        ]) : wt("", !0),
        (Te(!0), $e(st, null, Lt(e.buttons, (n) => (Te(), or(an, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      ti(we("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        we("div", {
          class: St(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Vt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = we("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            we("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Te(), $e("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            nt(Bt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, k2)) : wt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), $e("div", M2, mt(e.preview.label || "Preview unavailable"), 1)) : wt("", !0)
        ], 14, x2)
      ], 8, w2), [
        [no, e.preview.visible]
      ])
    ], 64));
  }
}, P2 = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, A2 = ["y2", "transform"], C2 = ["transform"], I2 = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = vt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => ti((Te(), $e("div", {
      class: St(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), $e("svg", P2, [
        o[1] || (o[1] = we("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), $e(st, null, Lt(ct(r), (a) => (Te(), $e("line", {
          key: a,
          class: St(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, A2))), 128)),
        we("g", { transform: n.value }, [...o[0] || (o[0] = [
          we("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, C2),
        o[2] || (o[2] = we("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [no, e.model.visible === !0]
    ]);
  }
}, E2 = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), $e("div", {
      class: St(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      nt(Vy, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      nt(an, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      nt(I2, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, O2 = ["aria-label"], F2 = { class: "pano-canvas-confirm-title" }, T2 = { class: "pano-canvas-confirm-text" }, D2 = { class: "pano-canvas-confirm-actions" }, L2 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, R2 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Qt(null), n = /* @__PURE__ */ Qt(null);
    let i = null;
    function o() {
      const d = n.value;
      return d ? Array.from(d.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((m) => m instanceof HTMLElement ? !m.hidden && m.tabIndex >= 0 && m.offsetParent !== null : !1) : [];
    }
    function a(d) {
      const m = n.value;
      if (!m) return;
      const _ = m.querySelector(`[data-action='${d}']`);
      _ instanceof HTMLButtonElement && _.click();
    }
    function s() {
      var S;
      const d = n.value;
      if (!d) return;
      const m = d.querySelector("[data-action='confirm-accept']");
      if (m instanceof HTMLElement) {
        m.focus();
        return;
      }
      const v = o()[0] || d;
      (S = v == null ? void 0 : v.focus) == null || S.call(v);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function p(d) {
      var N;
      if (d.defaultPrevented) return;
      if (d.key === "Escape") {
        d.preventDefault(), d.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (d.key !== "Tab") return;
      const m = o(), _ = n.value;
      if (!m.length) {
        d.preventDefault(), (N = _ == null ? void 0 : _.focus) == null || N.call(_);
        return;
      }
      const v = m[0], S = m[m.length - 1], w = document.activeElement;
      if (d.shiftKey) {
        (w === v || w === _ || !(_ != null && _.contains(w))) && (d.preventDefault(), S.focus());
        return;
      }
      (w === S || !(_ != null && _.contains(w))) && (d.preventDefault(), v.focus());
    }
    function f(d) {
      d.target === r.value && a("confirm-cancel");
    }
    return Ji(() => t.model.visible, (d, m) => {
      if (d) {
        i = document.activeElement, ec(() => {
          s();
        });
        return;
      }
      m && l();
    }, { immediate: !0 }), ls(() => {
      l();
    }), (d, m) => e.model.visible === !0 ? (Te(), $e("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ht(f, ["self"])
    }, [
      we("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: p
      }, [
        we("div", F2, mt(e.model.title), 1),
        we("div", T2, mt(e.model.text), 1),
        we("div", D2, [
          m[0] || (m[0] = we("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          we("button", L2, mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, O2)
    ], 512)) : wt("", !0);
  }
}, V2 = ["data-paint-pane"], $2 = ["hidden"], z2 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], j2 = ["aria-pressed", "disabled"], H2 = ["hidden"], G2 = { class: "pano-paint-color-pop-head" }, W2 = { class: "pano-paint-color-field" }, K2 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, B2 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, U2 = { class: "pano-paint-color-field" }, Y2 = { class: "pano-paint-alpha-wrap" }, X2 = ["value"], q2 = { "data-paint-alpha-value": "" }, J2 = ["hidden"], Z2 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Q2 = ["data-paint-history-index", "aria-label", "disabled"], eA = ["data-paint-footer"], tA = ["data-paint-group"], nA = ["hidden"], rA = ["value", "disabled"], iA = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, oA = ["hidden"], aA = {
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
    return (n, i) => (Te(), $e("div", {
      class: St(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Te(!0), $e(st, null, Lt(e.panes, (o) => {
        var a;
        return Te(), $e("div", {
          key: o.key,
          class: St(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Te(), $e("div", {
            key: 0,
            class: St(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Te(!0), $e(st, null, Lt(e.paintSwatches, (s) => (Te(), $e("button", {
              key: s.id,
              class: St(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: Vt(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, z2))), 128)),
            we("button", {
              class: St(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Vt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, j2),
            we("div", {
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
              we("div", G2, [
                we("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Vt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = we("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              we("div", W2, [
                we("div", K2, [
                  we("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Vt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                we("div", B2, [
                  we("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Vt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              we("label", U2, [
                i[1] || (i[1] = we("span", null, "Opacity", -1)),
                we("div", Y2, [
                  we("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, X2),
                  we("span", q2, mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              we("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                we("div", Z2, [
                  (Te(!0), $e(st, null, Lt(e.state.historyEntries || [], (s) => (Te(), $e("button", {
                    key: s.index,
                    class: St(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: Vt(r(s.color))
                  }, null, 14, Q2))), 128))
                ])
              ], 8, J2)
            ], 12, H2)
          ], 10, $2)) : wt("", !0),
          we("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            we("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), $e(st, null, Lt(o.tools, (s) => {
                var l;
                return Te(), or(an, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, tA),
            we("div", {
              class: St(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              we("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Vt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, rA),
              we("span", iA, mt(e.state.sizeText || "10"), 1)
            ], 10, nA),
            we("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              nt(an, {
                icon: ct(qe).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, oA)
          ], 8, eA)
        ], 10, V2);
      }), 128))
    ], 2));
  }
}, sA = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Qt(null), n = /* @__PURE__ */ Qt(null), i = /* @__PURE__ */ Qt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Te(), $e(st, null, [
      we("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      we("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        we("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, lA = ["aria-label"], cA = ["data-tip", "aria-pressed"], uA = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = vt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Te(), $e("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Vt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Te(!0), $e(st, null, Lt(e.buttons, (o) => (Te(), $e("button", qr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), mt(o.label), 17, cA))), 128))
    ], 12, lA));
  }
}, dA = {
  key: 0,
  class: "pano-cutout-menu"
}, fA = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, pA = ["data-aspect"], hA = ["data-action", "aria-label", "data-tip", "disabled"], mA = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), $e("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Vt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), $e(st, null, Lt(e.model.items || [], (n) => (Te(), $e(st, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), $e("div", dA, [
          we("button", fA, [
            nt(Bt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          we("div", {
            class: St(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), $e(st, null, Lt(n.choices || [], (i) => (Te(), $e("button", {
              key: i.value,
              class: St(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, mt(i.label), 11, pA))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), or(uA, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Te(), $e("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          nt(Bt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, hA))
      ], 64))), 128))
    ], 4));
  }
}, gA = {
  key: 0,
  class: "pano-easing"
}, yA = { class: "pano-section-title" }, bA = { class: "pano-easing-range" }, vA = { class: "pano-easing-modes" }, _A = ["aria-pressed", "onClick"], SA = ["viewBox"], wA = ["x", "y"], xA = ["x1", "y1", "x2", "y2"], kA = ["d"], MA = ["x1", "y1", "x2", "y2"], NA = ["x1", "y1", "x2", "y2"], PA = ["cx", "cy"], AA = ["cx", "cy"], CA = { class: "pano-easing-note" }, Br = 132, ji = 14, IA = {
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
    ], o = /* @__PURE__ */ Qt(null), a = vt(() => {
      var v;
      return Array.isArray((v = r.model) == null ? void 0 : v.easing) ? r.model.easing : null;
    }), s = (v) => ji + v * Br, l = (v) => ji + (1 - v) * Br, p = vt(() => {
      var W;
      if (((W = r.model) == null ? void 0 : W.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [v, S, w, N] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(v)} ${l(S)} ${s(w)} ${l(N)} ${s(1)} ${l(1)}`;
    }), f = vt(() => a.value ? a.value.map((v) => v.toFixed(2)).join(", ") : "");
    function d(v) {
      var S;
      return JSON.stringify(v.easing) === JSON.stringify((S = r.model) == null ? void 0 : S.easing);
    }
    function m(v, S) {
      n("timeline", { type: "easing", easing: v, commit: S });
    }
    function _(v, S) {
      var L;
      if (v.button !== 0 || !a.value) return;
      const w = v.currentTarget;
      (L = w.setPointerCapture) == null || L.call(w, v.pointerId);
      let N = null;
      const W = (g) => {
        const z = o.value.getBoundingClientRect(), H = z.width / (Br + ji * 2), ee = ((g.clientX - z.left) / H - ji) / Br, oe = 1 - ((g.clientY - z.top) / H - ji) / Br;
        N = [...N || a.value], N[S] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, N[S + 1] = Math.round(Math.min(1, Math.max(0, oe)) * 100) / 100, m(N, !1);
      }, R = () => {
        w.removeEventListener("pointermove", W), w.removeEventListener("pointerup", R), w.removeEventListener("pointercancel", R), N && m(N, !0);
      };
      w.addEventListener("pointermove", W), w.addEventListener("pointerup", R), w.addEventListener("pointercancel", R);
    }
    return (v, S) => e.model ? (Te(), $e("div", gA, [
      we("div", yA, [
        S[2] || (S[2] = we("span", null, "Easing", -1)),
        we("span", bA, mt(e.model.label), 1)
      ]),
      we("div", vA, [
        (Te(), $e(st, null, Lt(i, (w) => we("button", {
          key: w.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": d(w) ? "true" : "false",
          onClick: (N) => m(w.easing, !0)
        }, mt(w.label), 9, _A)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Te(), $e("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Br + ji * 2} ${Br + ji * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        we("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: Br,
          height: Br
        }, null, 8, wA),
        we("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, xA),
        we("path", {
          class: "pano-easing-curve",
          d: p.value
        }, null, 8, kA),
        a.value ? (Te(), $e(st, { key: 0 }, [
          we("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, MA),
          we("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, NA),
          we("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: S[0] || (S[0] = (w) => _(w, 0))
          }, null, 40, PA),
          we("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: S[1] || (S[1] = (w) => _(w, 2))
          }, null, 40, AA)
        ], 64)) : wt("", !0)
      ], 8, SA)) : wt("", !0),
      we("div", CA, [
        e.model.mixed ? (Te(), $e(st, { key: 0 }, [
          Ma("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), $e(st, { key: 1 }, [
          Ma("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), $e(st, { key: 2 }, [
          Ma("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Te(), $e(st, { key: 3 }, [
          Ma("cubic-bezier(" + mt(f.value) + ")", 1)
        ], 64)) : wt("", !0)
      ])
    ])) : wt("", !0);
  }
}, EA = {
  class: "pano-side",
  "data-side": ""
}, OA = { class: "pano-side-head" }, FA = { class: "pano-side-title" }, TA = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, DA = {
  key: 0,
  class: "pano-side-scroll"
}, LA = { class: "pano-inspector" }, RA = { class: "pano-ui-row pano-coverage-row" }, VA = ["data-selected"], $A = ["aria-pressed", "disabled"], zA = ["aria-pressed", "disabled"], jA = {
  key: 0,
  class: "pano-section-title"
}, HA = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, GA = {
  class: "pano-picker",
  "data-picker": "selection"
}, WA = ["disabled"], KA = { class: "pano-picker-label" }, BA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, UA = ["hidden"], YA = ["data-selection-id"], XA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, qA = {
  key: 2,
  class: "pano-state-actions"
}, JA = ["disabled"], ZA = ["data-key"], QA = { class: "pano-field-group-values" }, eC = ["title", "onPointerdown"], tC = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], nC = ["data-key"], rC = ["min", "max", "step", "value", "disabled", "data-param-key"], iC = ["min", "max", "step", "value", "disabled", "data-param-key"], oC = ["open"], aC = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, sC = { class: "pano-ui-settings-body" }, lC = { class: "pano-ui-row" }, cC = ["data-selected"], uC = ["aria-pressed"], dC = ["aria-pressed"], fC = { class: "pano-ui-row" }, pC = ["data-selected"], hC = ["aria-pressed"], mC = ["aria-pressed"], gC = {
  key: 1,
  class: "pano-side-footer"
}, yC = ["data-action"], bC = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = vt(() => {
      const p = r.model;
      return !p || typeof p != "object" ? !1 : Object.keys(p).length > 0 && !!p.coverage;
    });
    function o(p) {
      return { "--v": `${Number((p == null ? void 0 : p.fillPct) || 0)}%` };
    }
    function a(p, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (p == null ? void 0 : p.enabled) === !1;
    }
    const s = {};
    function l(p, f) {
      const d = s[f.key];
      if (p.button !== 0 || !d || a(f, r.model)) return;
      p.preventDefault();
      const m = p.currentTarget, _ = p.clientX, v = Number(d.value) || 0;
      let S = !1;
      m.setPointerCapture(p.pointerId);
      const w = (W) => {
        if (!S && Math.abs(W.clientX - _) < 3) return;
        S = !0;
        const R = v + (W.clientX - _) * f.drag * (W.shiftKey ? 0.1 : 1);
        d.value = String(Number(R.toFixed(3))), d.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, N = () => {
        m.removeEventListener("pointermove", w), m.removeEventListener("pointerup", N), m.removeEventListener("pointercancel", N), m.removeEventListener("lostpointercapture", N), S ? d.dispatchEvent(new Event("change", { bubbles: !0 })) : d.focus();
      };
      m.addEventListener("pointermove", w), m.addEventListener("pointerup", N), m.addEventListener("pointercancel", N), m.addEventListener("lostpointercapture", N);
    }
    return (p, f) => {
      var d, m, _, v, S;
      return Te(), $e("div", EA, [
        we("div", OA, [
          we("div", FA, [
            we("span", TA, [
              nt(Bt, {
                icon: ct(qe).globe
              }, null, 8, ["icon"])
            ]),
            we("span", null, mt(e.nodeTitle), 1)
          ]),
          f[1] || (f[1] = we("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[10] || (f[10] = we("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), $e("div", DA, [
          we("div", LA, [
            f[9] || (f[9] = we("div", { class: "pano-section-title" }, [
              we("span", null, "Scene")
            ], -1)),
            we("div", RA, [
              f[2] || (f[2] = we("label", null, "Coverage", -1)),
              we("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                we("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((m = e.model.coverage) == null ? void 0 : m.value) === 360 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "360", 8, $A),
                we("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((S = e.model.coverage) == null ? void 0 : S.disabled) === !0
                }, "180", 8, zA)
              ], 8, VA)
            ]),
            e.model.transformTitle !== !1 ? (Te(), $e("div", jA, [...f[3] || (f[3] = [
              we("span", null, "Transform", -1)
            ])])) : wt("", !0),
            e.model.selectionPicker ? (Te(), $e("div", HA, [
              we("label", null, mt(e.model.selectionPicker.label), 1),
              we("div", GA, [
                we("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  we("span", KA, [
                    e.model.selectionPicker.currentIcon ? (Te(), $e("span", BA, [
                      nt(Bt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : wt("", !0),
                    we("span", null, mt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  f[4] || (f[4] = we("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, WA),
                we("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), $e(st, null, Lt(e.model.selectionPicker.items || [], (w) => (Te(), $e("button", {
                    key: w.id,
                    type: "button",
                    class: St(["pano-picker-item", { active: w.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": w.id
                  }, [
                    w.icon ? (Te(), $e("span", XA, [
                      nt(Bt, {
                        icon: w.icon
                      }, null, 8, ["icon"])
                    ])) : wt("", !0),
                    we("span", null, mt(w.label), 1)
                  ], 10, YA))), 128))
                ], 8, UA)
              ])
            ])) : wt("", !0),
            e.model.copyStateButton ? (Te(), $e("div", qA, [
              we("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                nt(Bt, {
                  icon: ct(qe).copy
                }, null, 8, ["icon"]),
                we("span", null, mt(e.model.copyStateButton.label), 1)
              ], 8, JA)
            ])) : wt("", !0),
            we("div", {
              class: St(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), $e(st, { key: 0 }, Lt(e.model.notes, (w) => (Te(), $e("div", {
                key: w,
                class: "pano-param-note"
              }, mt(w), 1))), 128)) : (Te(!0), $e(st, { key: 1 }, Lt(e.model.rows || [], (w) => (Te(), $e(st, {
                key: w.key
              }, [
                w.grouped ? (Te(), $e("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": w.key
                }, [
                  we("label", null, mt(w.label), 1),
                  we("div", QA, [
                    (Te(!0), $e(st, null, Lt(w.fields, (N) => (Te(), $e("div", {
                      key: N.key,
                      class: "pano-axis-field"
                    }, [
                      we("span", {
                        class: St(["pano-axis", { disabled: a(N, e.model) }]),
                        title: N.label,
                        onPointerdown: (W) => l(W, N)
                      }, mt(N.short), 43, eC),
                      we("input", {
                        ref_for: !0,
                        ref: (W) => {
                          s[N.key] = W;
                        },
                        type: "number",
                        min: N.min,
                        max: N.max,
                        step: N.step,
                        value: N.displayValue,
                        disabled: a(N, e.model),
                        "aria-label": `${w.label} ${N.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": N.key
                      }, null, 8, tC)
                    ]))), 128))
                  ])
                ], 8, ZA)) : (Te(), $e("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": w.key
                }, [
                  we("label", null, mt(w.label), 1),
                  we("input", {
                    type: "range",
                    min: w.fields[0].min,
                    max: w.fields[0].max,
                    step: w.fields[0].step,
                    value: w.fields[0].value,
                    disabled: a(w.fields[0], e.model),
                    style: Vt(o(w.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": w.fields[0].key
                  }, null, 12, rC),
                  we("input", {
                    type: "number",
                    min: w.fields[0].min,
                    max: w.fields[0].max,
                    step: w.fields[0].step,
                    value: w.fields[0].displayValue,
                    disabled: a(w.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": w.fields[0].key
                  }, null, 8, iC)
                ], 8, nC))
              ], 64))), 128))
            ], 2),
            nt(IA, {
              model: e.easing,
              onTimeline: f[0] || (f[0] = (w) => n("timeline", w))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), $e("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              we("summary", null, [
                f[5] || (f[5] = we("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                we("span", aC, [
                  nt(Bt, {
                    icon: ct(qe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              we("div", sC, [
                we("div", lC, [
                  f[6] || (f[6] = we("label", null, "Drag X", -1)),
                  we("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    we("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, uC),
                    we("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, dC)
                  ], 8, cC)
                ]),
                we("div", fC, [
                  f[7] || (f[7] = we("label", null, "Drag Y", -1)),
                  we("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    we("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, hC),
                    we("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, mC)
                  ], 8, pC)
                ]),
                f[8] || (f[8] = we("div", { class: "pano-ui-row" }, [
                  we("span"),
                  we("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, oC)) : wt("", !0)
          ])
        ])) : wt("", !0),
        (e.model.footerButtons || []).length ? (Te(), $e("div", gC, [
          (Te(!0), $e(st, null, Lt(e.model.footerButtons, (w) => (Te(), $e("button", {
            key: w.action,
            class: St(["pano-btn", { "pano-btn-primary": w.primary === !0 }]),
            type: "button",
            "data-action": w.action
          }, mt(w.label), 11, yC))), 128))
        ])) : wt("", !0)
      ]);
    };
  }
}, vC = { class: "pano-timeline-bar" }, _C = ["aria-label", "data-tip"], SC = ["aria-label", "data-tip"], wC = { class: "pano-timeline-time" }, xC = ["data-tip"], kC = { key: 0 }, MC = ["min", "max", "value"], NC = ["data-tip"], PC = { key: 0 }, AC = ["max", "value"], CC = ["aria-expanded"], IC = ["inert"], EC = { class: "pano-timeline-name" }, OC = ["aria-pressed", "aria-label", "data-tip", "onClick"], FC = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, TC = ["disabled", "aria-expanded", "aria-label", "onClick"], DC = ["title", "aria-current", "onClick"], LC = ["data-keyed", "aria-label", "onClick"], RC = ["onPointerdown"], VC = ["onPointerdown"], $C = ["onPointerdown"], zC = ["onPointerdown"], jC = ["aria-label", "data-tip", "onPointerdown"], HC = { key: 0 }, GC = ["onPointerdown"], WC = ["aria-label", "data-tip", "onPointerdown"], KC = { key: 0 }, BC = 10, UC = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ ml(0), playing: /* @__PURE__ */ ml(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Qt(null), o = /* @__PURE__ */ Qt(null), a = /* @__PURE__ */ Qt(1), s = /* @__PURE__ */ Qt(0), l = /* @__PURE__ */ Qt(!1);
    let p = null, f = null, d = null;
    nc(() => {
      p = new ResizeObserver(([pe]) => {
        a.value = Math.max(1, pe.contentRect.width);
      }), i.value && p.observe(i.value), f = new ResizeObserver(([pe]) => {
        s.value = pe.contentRect.height;
      }), o.value && f.observe(o.value);
    }), ls(() => {
      p == null || p.disconnect(), f == null || f.disconnect(), d == null || d();
    });
    const m = vt(() => Math.max(1, Number(r.model.span || 1))), _ = vt(() => r.playhead.frame.value), v = vt(() => r.playhead.playing.value), S = vt(() => kx(_.value, Number(r.model.fps || 1))), w = vt(() => a.value / m.value), N = (pe) => `${pe / m.value * 100}%`, W = vt(() => Vx(m.value, w.value));
    function R(pe) {
      const J = i.value.getBoundingClientRect(), E = Math.floor((pe - J.left) / Math.max(1, J.width) * m.value);
      return Math.min(m.value - 1, Math.max(0, E));
    }
    function L(pe, J, E) {
      const V = Math.ceil(BC / Math.max(1e-6, w.value)), he = new Map(J.map((Oe) => [Oe.frame, Oe.full]));
      return $x(J.map((Oe) => Oe.frame), V).map((Oe, ze) => ({
        ...Oe,
        key: `${pe}:${ze}`,
        partial: Oe.frames.some((Xe) => !he.get(Xe)),
        selected: Oe.frames.some((Xe) => E.includes(Xe))
      }));
    }
    const g = vt(() => {
      const pe = /* @__PURE__ */ new Map();
      for (const J of r.model.rows || []) {
        pe.set(J.id, L(J.id, J.keys, J.selectedFrames));
        for (const E of J.lanes) pe.set(E.key, L(E.key, E.frames.map((V) => ({ frame: V, full: !0 })), E.selectedFrames));
      }
      return pe;
    });
    function z(pe) {
      const J = pe.end === null ? m.value : pe.end;
      return { left: N(pe.start), width: N(Math.max(0, J - pe.start)) };
    }
    function H(pe, J) {
      const E = pe.clientX, V = Math.max(1e-6, w.value);
      let he = 0;
      J("start", 0, pe);
      const Oe = (Xe) => {
        if (Xe.pointerId !== pe.pointerId) return;
        const le = Math.round((Xe.clientX - E) / V);
        le !== he && (he = le, J("move", he, Xe));
      }, ze = (Xe) => {
        Xe.pointerId === pe.pointerId && (d(), J("end", he, Xe));
      };
      d == null || d(), d = () => {
        window.removeEventListener("pointermove", Oe), window.removeEventListener("pointerup", ze), window.removeEventListener("pointercancel", ze), d = null;
      }, window.addEventListener("pointermove", Oe), window.addEventListener("pointerup", ze), window.addEventListener("pointercancel", ze);
    }
    function ee(pe) {
      pe.button === 0 && H(pe, (J, E, V) => n("action", { type: "seek", frame: R(V.clientX), phase: J }));
    }
    function oe(pe, J, E) {
      pe.button === 0 && (n("action", { type: "select-row", id: J.id }), H(pe, (V, he) => n("action", { type: "clip", id: J.id, mode: E, delta: he, phase: V })));
    }
    function F(pe, J, E, V, he) {
      if (pe.button === 0) {
        if (pe.shiftKey) {
          n("action", { type: "select-keys", owner: J.id, lane: E, frames: V.frames, additive: !0 });
          return;
        }
        V.frames.every((Oe) => he.includes(Oe)) || n("action", { type: "select-keys", owner: J.id, lane: E, frames: V.frames, additive: !1 }), H(pe, (Oe, ze) => n("action", { type: "move-keys", delta: ze, phase: Oe }));
      }
    }
    const G = vt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function X(pe, J, E) {
      n("action", J), await ec(), pe.target.value = E();
    }
    function ue(pe) {
      X(pe, { type: "fps", fps: Number(pe.target.value) }, () => G.value);
    }
    function Ne(pe) {
      const J = pe.target.value.trim();
      X(pe, { type: "length", length: J ? Number(J) : null }, () => r.model.length ?? "");
    }
    function _e(pe, J, E) {
      pe.button !== 0 || pe.target !== pe.currentTarget || n("action", { type: "select-keys", owner: J.id, lane: E, frames: [], additive: !1 });
    }
    return (pe, J) => ti((Te(), $e("section", {
      class: St(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      we("div", vC, [
        we("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": v.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": v.value ? "Pause (Space)" : "Play (Space)",
          onClick: J[0] || (J[0] = (E) => n("action", { type: "play" }))
        }, [
          nt(Bt, {
            icon: v.value ? ct(qe).pause : ct(qe).play
          }, null, 8, ["icon"])
        ], 8, _C),
        e.model.hasAudio ? (Te(), $e("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: J[1] || (J[1] = (E) => n("action", { type: "mute" }))
        }, [
          nt(Bt, {
            icon: e.model.muted ? ct(qe).volume_muted : ct(qe).volume2
          }, null, 8, ["icon"])
        ], 8, SC)) : wt("", !0),
        we("span", wC, mt(S.value), 1),
        we("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), $e("span", kC, mt(G.value), 1)) : (Te(), $e("input", {
            key: 1,
            type: "number",
            min: ct(v0),
            max: ct(tf),
            step: "any",
            value: G.value,
            "aria-label": "Timeline fps",
            onChange: ue
          }, null, 40, MC)),
          J[6] || (J[6] = we("span", null, "fps", -1))
        ], 8, xC),
        we("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          J[7] || (J[7] = we("span", null, "Length", -1)),
          e.model.lengthLocked ? (Te(), $e("span", PC, mt(e.model.length), 1)) : (Te(), $e("input", {
            key: 1,
            type: "number",
            min: "1",
            max: ct(nf),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Ne
          }, null, 40, AC))
        ], 8, NC),
        we("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: J[2] || (J[2] = (E) => n("action", { type: "toggle-expanded" }))
        }, [
          J[8] || (J[8] = we("span", null, "Timeline", -1)),
          nt(Bt, {
            icon: ct(qe).chevron
          }, null, 8, ["icon"])
        ], 8, CC)
      ]),
      we("div", {
        class: St(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Vt({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: J[3] || (J[3] = Ht((E) => l.value = !0, ["self"])),
        onTransitionend: J[4] || (J[4] = Ht((E) => l.value = !1, ["self"])),
        onTransitioncancel: J[5] || (J[5] = Ht((E) => l.value = !1, ["self"]))
      }, [
        we("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          J[9] || (J[9] = we("div", { class: "pano-timeline-corner" }, null, -1)),
          we("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ee
          }, [
            (Te(!0), $e(st, null, Lt(W.value, (E) => (Te(), $e("span", {
              key: E,
              class: "pano-timeline-tick",
              style: Vt({ left: N(E) })
            }, mt(E), 5))), 128)),
            we("span", {
              class: "pano-timeline-playhead",
              style: Vt({ left: N(_.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), $e(st, null, Lt(e.model.rows || [], (E) => (Te(), $e(st, {
            key: E.id
          }, [
            we("div", {
              class: St(["pano-timeline-head", { selected: E.selected, "is-hidden": !E.visible }])
            }, [
              we("div", EC, [
                E.hideable ? (Te(), $e("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": E.visible ? "true" : "false",
                  "aria-label": `${E.label} visible`,
                  "data-tip": E.visible ? "Hide" : "Show",
                  onClick: Ht((V) => n("action", { type: "toggle-visible", id: E.id }), ["stop"])
                }, [
                  nt(Bt, {
                    icon: E.visible ? ct(qe).eye : ct(qe).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, OC)) : (Te(), $e("span", FC)),
                we("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !E.keyable,
                  "aria-expanded": E.open ? "true" : "false",
                  "aria-label": E.open ? `Hide ${E.label} parameters` : `Show ${E.label} parameters`,
                  onClick: Ht((V) => n("action", { type: "toggle-row", id: E.id }), ["stop"])
                }, [
                  nt(Bt, {
                    icon: ct(qe).chevron
                  }, null, 8, ["icon"])
                ], 8, TC),
                we("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: E.label,
                  "aria-current": E.selected ? "true" : void 0,
                  onClick: (V) => n("action", { type: "select-row", id: E.id })
                }, [
                  nt(Bt, {
                    icon: E.icon
                  }, null, 8, ["icon"]),
                  we("span", null, mt(E.label), 1)
                ], 8, DC),
                E.keyable ? (Te(), $e("button", {
                  key: 2,
                  class: St(["pano-timeline-key", { keyed: ct(hu)(E.keys, _.value) }]),
                  type: "button",
                  "data-keyed": ct(hu)(E.keys, _.value) ? "true" : "false",
                  "aria-label": ct(hu)(E.keys, _.value) ? `Every ${E.label} parameter has a keyframe here; update them` : `Add keyframes for every ${E.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ht((V) => n("action", { type: "key-row", owner: E.id }), ["stop"])
                }, [
                  nt(Bt, {
                    icon: ct(qe).keyframe
                  }, null, 8, ["icon"])
                ], 10, LC)) : wt("", !0)
              ]),
              E.open ? (Te(!0), $e(st, { key: 0 }, Lt(E.lanes, (V) => (Te(), $e("div", {
                key: V.key,
                class: "pano-timeline-lane-head"
              }, mt(V.label), 1))), 128)) : wt("", !0)
            ], 2),
            we("div", {
              class: St(["pano-timeline-track", { selected: E.selected }])
            }, [
              we("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (V) => _e(V, E, null)
              }, [
                E.clip ? (Te(), $e("div", {
                  key: 0,
                  class: St(["pano-timeline-clip", { open: E.clip.end === null }]),
                  style: Vt(z(E.clip)),
                  onPointerdown: Ht((V) => oe(V, E, "move"), ["stop"])
                }, [
                  we("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ht((V) => oe(V, E, "start"), ["stop"])
                  }, null, 40, $C),
                  we("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ht((V) => oe(V, E, "end"), ["stop"])
                  }, null, 40, zC)
                ], 46, VC)) : wt("", !0),
                (Te(!0), $e(st, null, Lt(g.value.get(E.id), (V) => (Te(), $e("button", {
                  key: V.key,
                  type: "button",
                  class: St(["pano-timeline-pin", { selected: V.selected, cluster: V.frames.length > 1, partial: V.partial }]),
                  style: Vt({ left: N(V.frame + 0.5) }),
                  "aria-label": `${E.label}: ${V.frames.length > 1 ? `${V.frames.length} keyframes` : `keyframe at frame ${V.frames[0]}`}`,
                  "data-tip": V.frames.length > 1 ? `${V.frames.length} keyframes` : `Frame ${V.frames[0]}`,
                  onPointerdown: Ht((he) => F(he, E, null, V, E.selectedFrames), ["stop"])
                }, [
                  V.frames.length > 1 ? (Te(), $e("span", HC, mt(V.frames.length), 1)) : wt("", !0)
                ], 46, jC))), 128))
              ], 40, RC),
              E.open ? (Te(!0), $e(st, { key: 0 }, Lt(E.lanes, (V) => (Te(), $e("div", {
                key: V.key,
                class: "pano-timeline-lane",
                onPointerdown: (he) => _e(he, E, V.lane)
              }, [
                (Te(!0), $e(st, null, Lt(g.value.get(V.key), (he) => (Te(), $e("button", {
                  key: he.key,
                  type: "button",
                  class: St(["pano-timeline-pin", { selected: he.selected, cluster: he.frames.length > 1 }]),
                  style: Vt({ left: N(he.frame + 0.5) }),
                  "aria-label": `${V.label}: ${he.frames.length > 1 ? `${he.frames.length} keyframes` : `keyframe at frame ${he.frames[0]}`}`,
                  "data-tip": he.frames.length > 1 ? `${he.frames.length} keyframes` : `Frame ${he.frames[0]}`,
                  onPointerdown: Ht((Oe) => F(Oe, E, V.lane, he, V.selectedFrames), ["stop"])
                }, [
                  he.frames.length > 1 ? (Te(), $e("span", KC, mt(he.frames.length), 1)) : wt("", !0)
                ], 46, WC))), 128))
              ], 40, GC))), 128)) : wt("", !0),
              we("span", {
                class: "pano-timeline-playhead",
                style: Vt({ left: N(_.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, IC)
    ], 2)), [
      [no, e.model.visible]
    ]);
  }
}, YC = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), $e("div", {
      class: St(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Vt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, mt(e.model.text || ""), 7));
  }
}, XC = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, qC = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), $e("div", XC, [
      (Te(!0), $e(st, null, Lt(e.buttons, (n) => ti((Te(), or(an, {
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
        [no, n.visible !== !1]
      ])), 128))
    ]));
  }
}, JC = ["data-video-ready"], ZC = { class: "pano-video-transport-shell" }, QC = { class: "pano-video-controls-left" }, eI = { class: "pano-video-filmstrip" }, tI = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, nI = ["src", "onLoad"], rI = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, iI = ["max", "value", "disabled"], oI = { class: "pano-video-controls-right" }, aI = ["data-has-audio"], sI = { class: "pano-video-volume-pop" }, lI = ["value", "disabled"], cI = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = vt(() => {
      var g;
      return ((g = t.state) == null ? void 0 : g.playing) === !0 ? "Pause" : "Play";
    }), n = vt(() => {
      var g;
      return ((g = t.state) == null ? void 0 : g.playing) === !0 ? "Pause video" : "Play video";
    }), i = vt(() => {
      var g;
      return ((g = t.state) == null ? void 0 : g.playing) === !0 ? qe.pause : qe.play;
    }), o = vt(() => {
      var g;
      return ((g = t.state) == null ? void 0 : g.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = vt(() => {
      var g;
      return ((g = t.state) == null ? void 0 : g.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = vt(() => {
      var g;
      return ((g = t.state) == null ? void 0 : g.loop) === !1 ? qe.loop_off : qe.loop;
    }), l = vt(() => {
      var g, z;
      return ((g = t.state) == null ? void 0 : g.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), p = vt(() => {
      var g, z, H;
      return ((g = t.state) == null ? void 0 : g.hasAudio) !== !0 ? qe.volume : ((z = t.state) == null ? void 0 : z.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? qe.volume_muted : qe.volume2;
    }), f = vt(() => {
      var g;
      return Math.max(0, Math.min(100, Number(((g = t.state) == null ? void 0 : g.progressPct) || 0)));
    }), d = vt(() => ({ left: `${f.value}%` })), m = vt(() => {
      var ee, oe;
      const g = (ee = t.state) == null ? void 0 : ee.volumePct, z = Number(((oe = t.state) == null ? void 0 : oe.volume) ?? 1) * 100, H = Number(g ?? z ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, H))}%`
      };
    }), _ = vt(() => {
      var H, ee;
      const z = [
        String(((H = t.state) == null ? void 0 : H.currentTimeLabel) || "0:00"),
        String(((ee = t.state) == null ? void 0 : ee.durationLabel) || "0:00")
      ].reduce((oe, F) => Math.max(oe, F.length), 4);
      return `${Math.max(4, z)}ch`;
    }), v = vt(() => ({ "--pano-video-time-ch": _.value })), S = vt(() => {
      var H, ee;
      const g = Array.isArray((H = t.state) == null ? void 0 : H.thumbnails) ? t.state.thumbnails : [];
      if (g.length) return g;
      const z = Math.max(7, Number(((ee = t.state) == null ? void 0 : ee.thumbnailCount) || 9));
      return Array.from({ length: z }, (oe, F) => ({
        id: `placeholder-${F}`,
        src: "",
        label: ""
      }));
    }), w = /* @__PURE__ */ Qt(/* @__PURE__ */ new Set()), N = (g) => String((g == null ? void 0 : g.id) || (g == null ? void 0 : g.src) || (g == null ? void 0 : g.label) || ""), W = (g) => w.value.has(N(g)), R = (g) => {
      const z = new Set(w.value);
      z.add(N(g)), w.value = z;
    };
    Ji(S, (g) => {
      const z = new Set(g.map(N)), H = /* @__PURE__ */ new Set();
      for (const ee of w.value)
        z.has(ee) && H.add(ee);
      w.value = H;
    }, { immediate: !0 });
    const L = vt(() => {
      var g;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((g = t.state) == null ? void 0 : g.shellMaxWidthPx) || 640))}px`
      };
    });
    return (g, z) => (Te(), $e("div", {
      class: St(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Vt(L.value)
    }, [
      z[1] || (z[1] = we("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      z[2] || (z[2] = we("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      we("div", ZC, [
        we("div", QC, [
          nt(an, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          we("div", {
            class: "pano-video-time pano-video-time-start",
            style: Vt(v.value)
          }, mt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        we("div", eI, [
          we("div", tI, [
            (Te(!0), $e(st, null, Lt(S.value, (H) => (Te(), $e("div", {
              key: N(H),
              class: St(["pano-video-thumb", {
                "is-placeholder": !H.src,
                "is-loaded": H.src && W(H)
              }])
            }, [
              H.src ? (Te(), $e("img", {
                key: 0,
                src: H.src,
                alt: "",
                draggable: "false",
                onLoad: (ee) => R(H)
              }, null, 40, nI)) : (Te(), $e("span", rI))
            ], 2))), 128))
          ]),
          we("div", {
            class: "pano-video-playhead",
            style: Vt(d.value),
            "aria-hidden": "true"
          }, [...z[0] || (z[0] = [
            we("span", { class: "pano-video-playhead-line" }, null, -1),
            we("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          we("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, iI)
        ]),
        we("div", oI, [
          we("div", {
            class: "pano-video-time pano-video-time-end",
            style: Vt(v.value)
          }, mt(e.state.durationLabel || "0:00"), 5),
          nt(an, {
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
          we("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            we("div", sI, [
              we("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Vt(m.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, lI)
            ]),
            nt(an, {
              "extra-class": "pano-video-control",
              icon: p.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, aI)
        ])
      ])
    ], 14, JC));
  }
}, uI = { class: "pano-floating-top" }, dI = ["data-selected", "data-view-count"], fI = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], pI = { class: "label" }, hI = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), $e("div", uI, [
        we("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), $e(st, null, Lt(e.buttons, (i) => ti((Te(), $e("button", {
            key: i.key,
            class: St(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            nt(Bt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            we("span", pI, mt(i.label), 1)
          ], 10, fI)), [
            [no, i.visible !== !1]
          ])), 128))
        ], 8, dI)
      ]);
    };
  }
};
function ob(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: qe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: qe.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: qe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: qe.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: qe.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: qe.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: qe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: qe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: qe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: qe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: qe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: qe.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: qe.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: qe.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: qe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: qe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: qe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: qe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: qe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: qe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: qe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: qe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: qe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: qe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: qe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: qe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: qe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: qe.lasso_tool }
        ]
      }
    ]
  };
}
const mI = ["aria-label"], gI = { class: "pano-stage-column" }, yI = { class: "pano-stage-wrap" }, bI = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, vI = {
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
    const l = /* @__PURE__ */ Qt(null), p = /* @__PURE__ */ Qt(null), f = /* @__PURE__ */ Qt(null);
    function d() {
      var F, G;
      return ((G = (F = f.value) == null ? void 0 : F.getRefs) == null ? void 0 : G.call(F)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function m(F) {
      var G, X;
      return ((X = (G = p.value) == null ? void 0 : G.open) == null ? void 0 : X.call(G, F)) === !0;
    }
    function _(F) {
      i("image-file-selected", F);
    }
    function v(F) {
      i("image-file-cancelled", F);
    }
    t({ getPaintOverlayRefs: d, openImagePicker: m });
    const S = vt(() => n.readOnly === !0), w = vt(() => n.shellPreset || ob(n.type)), N = vt(() => {
      var G, X, ue;
      const F = String((((G = n.uiState) == null ? void 0 : G.stageStatus) === "failed" ? (X = n.uiState) == null ? void 0 : X.stageStatusDetail : (ue = n.uiState) == null ? void 0 : ue.stageWarningDetail) ?? "");
      return F === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : F === "stickers" ? "One or more sticker previews are unavailable." : F === "frame" ? "The editor hit a rendering error. Check the browser console for details." : F === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : F.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = vt(() => {
      var G;
      const F = Array.isArray((G = w.value) == null ? void 0 : G.floatingButtons) ? w.value.floatingButtons.slice() : [];
      return S.value && F.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: qe.fullscreen
      }), F;
    });
    function R() {
      const F = l.value;
      return F ? Array.from(F.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((G) => G instanceof HTMLElement ? !G.hidden && G.tabIndex >= 0 && G.offsetParent !== null : !1) : [];
    }
    function L() {
      var X;
      const G = R()[0] || l.value;
      (X = G == null ? void 0 : G.focus) == null || X.call(G);
    }
    function g() {
      var F;
      s != null && s.isConnected && ((F = s.focus) == null || F.call(s)), s = null;
    }
    function z(F) {
      var G, X, ue, Ne;
      if (!F.defaultPrevented) {
        if (F.key === "Tab") {
          const _e = R();
          if (!_e.length) {
            F.preventDefault(), (X = (G = l.value) == null ? void 0 : G.focus) == null || X.call(G);
            return;
          }
          const pe = _e[0], J = _e[_e.length - 1], E = document.activeElement;
          if (F.shiftKey) {
            (E === pe || E === l.value || !((ue = l.value) != null && ue.contains(E))) && (F.preventDefault(), J.focus());
            return;
          }
          (E === J || !((Ne = l.value) != null && Ne.contains(E))) && (F.preventDefault(), pe.focus());
          return;
        }
        F.key === "Escape" && i("close");
      }
    }
    function H() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function ee() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function oe(F) {
      document.removeEventListener("keydown", z), F ? (s || (s = document.activeElement), H(), document.addEventListener("keydown", z), ec(() => {
        L();
      })) : (ee(), g());
    }
    return nc(() => {
      oe(n.open);
    }), ls(() => {
      ee(), document.removeEventListener("keydown", z), g();
    }), Ji(() => n.open, (F) => {
      oe(F);
    }), (F, G) => e.open ? (Te(), $e("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: G[2] || (G[2] = Ht((X) => i("close"), ["self"]))
    }, [
      we("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        we("div", gI, [
          we("div", yI, [
            G[3] || (G[3] = we("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            G[4] || (G[4] = we("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            G[5] || (G[5] = we("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Te(), $e("div", bI, mt(N.value), 1)) : wt("", !0),
            G[6] || (G[6] = we("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              we("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            nt(sA, {
              ref_key: "paintOverlaysRef",
              ref: f
            }, null, 512),
            nt($y, {
              ref_key: "imageFilePickerRef",
              ref: p,
              onFileSelected: _,
              onFileCancelled: v
            }, null, 512),
            S.value ? wt("", !0) : (Te(), $e(st, { key: 1 }, [
              nt(qC, {
                buttons: e.uiState.toolButtons || w.value.toolButtons || []
              }, null, 8, ["buttons"]),
              nt(E2, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              nt(aA, {
                "paint-swatches": e.paintSwatches,
                panes: w.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            nt(cI, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            nt(hI, {
              buttons: e.uiState.viewButtons || w.value.viewButtons || []
            }, null, 8, ["buttons"]),
            nt(N2, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            nt(mA, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            nt(YC, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            nt(R2, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          nt(UC, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: G[0] || (G[0] = (X) => i("timeline", X))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? wt("", !0) : (Te(), or(bC, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: G[1] || (G[1] = (X) => i("timeline", X))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, mI)
    ])) : wt("", !0);
  }
}, hr = "loading", os = "ready", tr = "failed";
function ab(e, t = "") {
  return e && (e.__panoLoadState = hr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function sb(e, t = "") {
  return e && (e.__panoLoadState = os, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function lb(e, t = "") {
  return e && (e.__panoLoadState = tr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function xd(e, t) {
  return e ? e.__panoLoadState === tr ? tr : typeof t == "function" && t(e) ? os : hr : os;
}
function kd(e) {
  return xd(e) === tr;
}
function _I({ presented: e, background: t = os, stickers: r = [] } = {}) {
  if (!e) return { status: hr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === hr, o = n.includes(hr);
  if (i && o) return { status: hr, detail: "mixed" };
  if (i) return { status: hr, detail: "background" };
  if (o) return { status: hr, detail: "stickers" };
  const a = t === tr, s = n.includes(tr);
  return a && s ? { status: tr, detail: "mixed" } : a ? { status: tr, detail: "background" } : s ? { status: tr, detail: "stickers" } : { status: os, detail: "" };
}
const SI = "state_json", wI = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Tf = "sticker_image_1", xI = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), zm = 0.01, kI = "external_image", Kl = "pano_sticker_input_images", MI = "pano_sticker_input_videos", NI = "pano_sticker_input_frames", PI = "pano_sticker_input_video_meta", AI = !0, fl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Rr = Math.PI / 180, Yi = 180 / Math.PI, Mu = 1, cb = "rgb(255, 221, 87)", CI = "rgb(228, 228, 231)", II = "rgb(180, 150, 60)", EI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, OI = 64, jm = 40, Nu = 16, FI = 0.45, Hm = 180, TI = 160, Bl = 24, DI = 4, LI = 4, RI = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function Pu(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function VI(e) {
  return 1 - Math.pow(1 - e, 3);
}
function $I(e, t, r) {
  const n = Ie((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function zI(e) {
  return e * e * e;
}
function hc(e, t, r) {
  return { x: e, y: t, z: r };
}
function Gm(e, t) {
  return hc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Wm(e, t) {
  return hc(e.x * t, e.y * t, e.z * t);
}
function Au(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function jI(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return hc(e.x / t, e.y / t, e.z / t);
}
function Ws(e) {
  return {
    yaw: Wt(Math.atan2(e.x, e.z) * Yi),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * Yi, -90, 90)
  };
}
function hi(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, a = t[n].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (r = !r);
  }
  return r;
}
function Oa(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Cu(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return Oa(e, t);
  const l = Ie((o * n + a * i) / s, 0, 1), p = Number(t.x || 0) + n * l, f = Number(t.y || 0) + i * l, d = Number(e.x || 0) - p, m = Number(e.y || 0) - f;
  return d * d + m * m;
}
function er(e, t, r) {
  return e + (t - e) * r;
}
function Pr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ie(r, 0, 1)})`;
}
function HI(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ks = { fillStyle: "", url: "" };
function GI(e, t, r) {
  if (Ks.url && Ks.fillStyle === String(e || ""))
    return Ks.url;
  const n = HI(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Bl}" height="${Bl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ks = { fillStyle: String(e || ""), url: n }, n;
}
function pl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Kn(e) {
  return {
    r: Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ie(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function gn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function WI(e) {
  return fl.some((t) => pl(e, t.color));
}
function Iu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ie(Number(t), 0, 1), o = Ie(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), p = o * (1 - s * i), f = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: f, b: l };
    case 1:
      return { r: p, g: o, b: l };
    case 2:
      return { r: l, g: o, b: f };
    case 3:
      return { r: l, g: p, b: o };
    case 4:
      return { r: f, g: l, b: o };
    default:
      return { r: o, g: l, b: p };
  }
}
function Eu(e) {
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Mo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function KI(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Km(e) {
  const { paintCount: t, maskCount: r } = KI(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Eo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Bs(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function BI(e, t) {
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
function Hi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function UI(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function YI(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function XI(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const ub = "pano_suite.ui_settings.v1", db = "pano_suite.node_grid_visibility.v1";
let Oo = null, Ar = null;
function hl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function qI() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ub)) || "").trim();
    if (!t) return Oo ? hl(Oo) : null;
    const r = JSON.parse(t), n = hl(r);
    return Oo = n, n;
  } catch {
    return Oo ? hl(Oo) : null;
  }
}
function JI(e) {
  var r;
  const t = hl(e);
  Oo = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(ub, JSON.stringify(t));
  } catch {
  }
  return t;
}
function fb() {
  var e;
  if (Ar && typeof Ar == "object")
    return Ar;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(db)) || "").trim();
    if (!t)
      return Ar = {}, Ar;
    const r = JSON.parse(t);
    return Ar = r && typeof r == "object" ? r : {}, Ar;
  } catch {
    return Ar = {}, Ar;
  }
}
function ZI(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = fb()[r];
  return typeof i == "boolean" ? i : !!t;
}
function QI(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = fb();
  n[r] = !!t, Ar = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(db, JSON.stringify(n));
  } catch {
  }
}
function eE(e, t) {
  const r = { ...e }, n = t.map((i) => i(e));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  for (const i of n) i.connect(r);
  return r;
}
const yi = /* @__PURE__ */ new Map(), tE = 12;
function nE(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = yi.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (yi.delete(t), yi.set(t, r), r);
}
function rE(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (yi.delete(r), yi.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); yi.size > tE; ) {
      const i = yi.keys().next().value;
      if (!i) break;
      yi.delete(i);
    }
}
function iE(e) {
  const {
    comfyMedia: t,
    cutoutV2: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: p,
    mediaUiImage: f,
    node: d,
    portStillCanvas: m,
    portVideoEl: _,
    readOnly: v,
    runtime: S,
    scheduler: w,
    stageWrap: N,
    state: W,
    stateV2: R,
    stillCanvas: L,
    timelinePlayhead: g,
    type: z,
    uiState: H,
    videoEl: ee
  } = e;
  let oe, F, G, X, ue, Ne;
  const _e = {
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
  }, pe = 9, J = [];
  let E = 0;
  const V = () => {
    var Re, Ue;
    const x = (Re = N == null ? void 0 : N.getBoundingClientRect) == null ? void 0 : Re.call(N), U = (Ue = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ue.call(o), ve = Math.max(0, Number((x == null ? void 0 : x.width) || 0)), ce = U ? Math.max(0, Number(U.width || 0)) : 0, I = ce > 0 ? ce + 14 + 12 : 72, me = Math.max(280, Math.floor(ve - I * 2)), Le = n.fullscreen ? Math.min(1200, me) : me;
    H.videoTransport.shellMaxWidthPx = Le;
  }, he = () => {
    E || (E = w.requestFrame(() => {
      E = 0, V();
    }));
  }, Oe = (x) => {
    if (!(x instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(x.audioTracks) && x.audioTracks.length > 0 || x.audioTracks && typeof x.audioTracks.length == "number" && x.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof x.mozHasAudio == "boolean") return x.mozHasAudio;
    } catch {
    }
    try {
      if (Number(x.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!H.videoTransport.hasAudio;
  }, ze = typeof ResizeObserver < "u" ? new ResizeObserver(() => he()) : null;
  ze == null || ze.observe(N), o && (ze == null || ze.observe(o)), J.push(() => {
    var x;
    E && (w.cancelFrame(E), E = 0), (x = ze == null ? void 0 : ze.disconnect) == null || x.call(ze);
  }), he();
  const Xe = () => {
    _e.thumbnailJobId += 1, _e.thumbnailSrc = "", H.videoTransport.thumbnails = [], H.videoTransport.thumbnailCount = pe;
  }, le = async (x, U, ve) => {
    const ce = String(x || "").trim();
    if (!ce) {
      Xe();
      return;
    }
    const De = nE(ce);
    if (De) {
      _e.thumbnailSrc = ce, H.videoTransport.thumbnails = De.thumbnails, H.videoTransport.thumbnailCount = De.thumbnailCount;
      return;
    }
    const je = ++_e.thumbnailJobId;
    _e.thumbnailSrc = ce, H.videoTransport.thumbnails = [], H.videoTransport.thumbnailCount = pe;
    const I = ac(document, "editor.thumbnails");
    I.preload = "auto", I.muted = !0, I.playsInline = !0, I.crossOrigin = "anonymous";
    const me = wn({ label: "editor.thumbnail" });
    try {
      const Le = await new Promise((kn) => {
        let Hn = !1;
        const cn = (tn) => {
          Hn || (Hn = !0, kn(tn));
        };
        I.addEventListener("loadedmetadata", () => cn(!0), { once: !0 }), I.addEventListener("canplay", () => cn(!0), { once: !0 }), I.addEventListener("error", () => cn(!1), { once: !0 }), I.src = ce, I.load();
      });
      if (_e.thumbnailJobId !== je) return;
      const Re = Number(I.videoWidth || 0), Ue = Number(I.videoHeight || 0);
      if (!Le || Re < 1 || Ue < 1) {
        _e.thumbnailFailedSrcs.add(ce);
        return;
      }
      const Be = Math.max(0, Number(I.duration || U || 0)), Ze = 46, Qe = Math.max(72, Math.round(Re / Ue * Ze));
      me.width = Qe, me.height = Ze;
      const ut = me.getContext("2d");
      if (!ut) return;
      const Pt = [], Et = (kn) => new Promise((Hn) => {
        let cn = !1;
        const tn = () => {
          cn || (cn = !0, Hn());
        };
        I.addEventListener("seeked", tn, { once: !0 }), I.addEventListener("error", tn, { once: !0 });
        try {
          I.currentTime = kn;
        } catch {
          tn();
        }
      });
      for (let kn = 0; kn < pe; kn += 1) {
        if (_e.thumbnailJobId !== je) return;
        const Hn = pe <= 1 ? 0 : kn / (pe - 1), cn = Be > 0 ? Math.max(0, Math.min(Be - Math.max(1e-3, 0.5 / Math.max(1, Number(ve || 24))), Be * Hn)) : 0;
        if (await Et(cn), _e.thumbnailJobId !== je) return;
        ut.clearRect(0, 0, Qe, Ze), ut.drawImage(I, 0, 0, Qe, Ze), Pt.push({
          id: `thumb-${kn}`,
          src: me.toDataURL("image/jpeg", 0.72),
          time: cn,
          label: O(cn)
        });
      }
      if (_e.thumbnailJobId !== je) return;
      H.videoTransport.thumbnails = Pt, H.videoTransport.thumbnailCount = Pt.length || pe, rE(ce, {
        thumbnails: Pt,
        thumbnailCount: Pt.length || pe,
        duration: Be,
        fps: ve
      });
    } finally {
      I.removeAttribute("src"), I.load(), Wu(me);
    }
  };
  J.push(() => {
    Xe();
  });
  const j = Ay({
    video: ee instanceof HTMLVideoElement ? ee : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (x) => w.requestFrame(x),
      cancelFrame: (x) => w.cancelFrame(x)
    },
    fps: Y,
    span: () => {
      if (R) return Ne();
      const x = Math.round(Number(H.videoTransport.duration || 0) * Y());
      return ee.loop || !(x > 0) ? 1 / 0 : x;
    },
    loop: () => R,
    onFrame: (x) => {
      R ? G(x) : ge(), F({ cause: "frame_view", localOnly: !0, reason: Mt.PLAYHEAD });
    },
    onCapture: () => {
      A() && (S.backgroundDirty = !0);
    },
    onChange: () => {
      ge(), g.playing.value = j.playing, ue(), F({ cause: "frame_view", localOnly: !0, reason: Mt.PLAYHEAD });
    }
  });
  J.push(() => j.dispose());
  const de = R && _ instanceof HTMLVideoElement ? Cy({
    video: _,
    onCapture: () => {
      var ve;
      const x = Number(_.videoWidth || 0), U = Number(_.videoHeight || 0);
      x < 1 || U < 1 || (m.width = x, m.height = U, (ve = m.getContext("2d")) == null || ve.drawImage(_, 0, 0), m.__panoFrameIdx += 1, F({ cause: "frame_view", localOnly: !0, reason: Mt.MEDIA }));
    },
    onChange: () => F({ cause: "frame_view", localOnly: !0, reason: Mt.MEDIA })
  }) : null;
  de && J.push(() => de.dispose());
  const be = R ? yy({
    createImage: (x, U) => {
      const ve = new Image();
      return ve.onload = U, ve.onerror = U, ve.src = x, ve;
    },
    onLoad: () => F({ cause: "frame_view", localOnly: !0, reason: Mt.MEDIA })
  }) : null;
  if (ee instanceof HTMLVideoElement) {
    const x = () => {
      Z(), F({ cause: "frame_view", localOnly: !0 });
    }, U = () => {
      ge({
        hasAudio: H.videoTransport.hasAudio,
        muted: ee.muted,
        volume: Number(ee.volume ?? H.videoTransport.volume ?? 1)
      });
    }, ve = () => {
      const ce = ee.dataset.panoSrc;
      ce && (_e.failedSrcs.add(ce), Z(), F());
    };
    for (const [ce, De] of [
      ["loadedmetadata", x],
      ["loadeddata", x],
      ["canplay", x],
      ["volumechange", U],
      ["error", ve]
    ])
      ee.addEventListener(ce, De), J.push(() => ee.removeEventListener(ce, De));
  }
  function Pe(x) {
    return t.uiList(d, x);
  }
  function Fe(x) {
    return t.uiValue(d, x);
  }
  function te() {
    const x = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    return Pl(x) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : z === "stickers" || z === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Ae() {
    const { metaKey: x } = te(), U = Fe(x);
    return Array.isArray(U) && U.length > 0 && U[0] && typeof U[0] == "object" ? U[0] : U && typeof U == "object" ? U : null;
  }
  function k(x) {
    return x ? x instanceof HTMLVideoElement ? [
      String(x.currentSrc || x.src || ""),
      Number(x.videoWidth || 0),
      Number(x.videoHeight || 0)
    ].join("|") : x instanceof HTMLCanvasElement ? [
      "canvas",
      Number(x.width || 0),
      Number(x.height || 0),
      String(x.__panoFrameIdx || 0)
    ].join("|") : [
      String(x.currentSrc || x.src || ""),
      Number(x.naturalWidth || x.width || 0),
      Number(x.naturalHeight || x.height || 0)
    ].join("|") : "none";
  }
  function O(x) {
    const U = Math.max(0, Math.floor(Number(x || 0))), ve = Math.floor(U / 60), ce = U % 60;
    return `${ve}:${String(ce).padStart(2, "0")}`;
  }
  function Y() {
    return R ? W.timeline.fps : _e.metaFps || 1e3;
  }
  function ge(x = {}) {
    const U = Number(x.duration ?? H.videoTransport.duration ?? 0), ve = Math.max(1, Number(x.fps ?? H.videoTransport.fps ?? 24)), ce = j.frame / Y(), De = Object.prototype.hasOwnProperty.call(x, "ready") ? !!x.ready : !!H.videoTransport.ready, je = j.playing, I = Object.prototype.hasOwnProperty.call(x, "visible") ? !!x.visible : !!H.videoTransport.visible, me = Object.prototype.hasOwnProperty.call(x, "muted") ? !!x.muted : !!(ee instanceof HTMLVideoElement ? ee.muted : H.videoTransport.muted), Le = Number(
      Object.prototype.hasOwnProperty.call(x, "volume") ? x.volume : ee instanceof HTMLVideoElement ? ee.volume : H.videoTransport.volume
    ), Re = Object.prototype.hasOwnProperty.call(x, "hasAudio") ? !!x.hasAudio : Oe(ee), Ue = Object.prototype.hasOwnProperty.call(x, "loop") ? !!x.loop : !!H.videoTransport.loop;
    Object.assign(H.videoTransport, {
      ready: De,
      playing: je,
      visible: I,
      loop: Ue,
      currentTime: Number.isFinite(ce) ? ce : 0,
      duration: Number.isFinite(U) ? U : 0,
      progressPct: U > 1e-6 ? Math.max(0, Math.min(100, ce / U * 100)) : 0,
      currentTimeLabel: O(ce),
      durationLabel: O(U),
      frameCount: Math.max(0, Number(x.frameCount ?? H.videoTransport.frameCount ?? 0)),
      fps: ve,
      hasAudio: Re,
      muted: me,
      volume: Math.max(0, Math.min(1, Number.isFinite(Le) ? Le : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Le) ? Le : 1)) * 100),
      thumbnails: Array.isArray(x.thumbnails) ? x.thumbnails : H.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(x.thumbnailCount ?? H.videoTransport.thumbnailCount ?? pe))
    });
  }
  function T() {
    return !!(ee instanceof HTMLVideoElement && !R && ee.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function q() {
    if (!(ee instanceof HTMLVideoElement) || !H.videoTransport.hasAudio) return;
    const x = !ee.muted;
    ee.muted = x, !x && Number(ee.volume || 0) <= 0 && (ee.volume = Math.max(0.01, Number(H.videoTransport.volume || 1))), ge({
      hasAudio: H.videoTransport.hasAudio,
      muted: ee.muted,
      volume: Number(ee.volume ?? H.videoTransport.volume ?? 1)
    });
  }
  function ne() {
    ge({
      visible: T()
    });
  }
  function A() {
    if (!(ee instanceof HTMLVideoElement) || Number(ee.videoWidth || 0) < 1 || Number(ee.videoHeight || 0) < 1) return !1;
    const x = Number(ee.videoWidth || 0), U = Number(ee.videoHeight || 0);
    (L.width !== x || L.height !== U) && (L.width = x, L.height = U);
    const ve = L.getContext("2d");
    return ve ? (ve.clearRect(0, 0, x, U), ve.drawImage(ee, 0, 0, x, U), L.__panoFrameIdx = Number(L.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function B() {
    return !j.showsVideo && Number(L.width || 0) > 0 && Number(L.height || 0) > 0 && Number(L.__panoFrameIdx || 0) > 0 ? L : ee instanceof HTMLVideoElement && Number(ee.videoWidth || 0) > 0 && Number(ee.videoHeight || 0) > 0 && Number(ee.readyState || 0) >= 2 ? ee : null;
  }
  function K() {
    L.__panoFrameIdx = 0, S.backgroundDirty = !0;
  }
  function Z() {
    if (!(ee instanceof HTMLVideoElement)) return null;
    const { videoKey: x } = te(), U = hn(d, "background") && Pe(x)[0] || null, ve = p(U), ce = [ve, t.linkedVideoFile(d, D())].filter(Boolean), De = ce.find((Be) => !_e.failedSrcs.has(Be)) || "";
    _e.videoFailed = !De && ce.length > 0;
    const je = De && De === ve ? Ae() : null;
    _e.metaFps = Number(je == null ? void 0 : je.fps) > 0 ? Number(je.fps) : 0;
    const I = Math.max(1, Number((je == null ? void 0 : je.fps) || (R ? W.timeline.fps : 24))), me = ee.dataset.panoSrc === De && Number.isFinite(ee.duration) ? ee.duration : 0, Le = Number((je == null ? void 0 : je.duration) || ((je == null ? void 0 : je.frames) > 0 ? je.frames / I : me)), Re = Math.max(0, Number((je == null ? void 0 : je.frames) || Math.round(Le * I))), Ue = !!(je != null && je.has_audio) || Oe(ee);
    return De && ee.dataset.panoSrc !== De ? (ee.pause(), K(), ee.dataset.panoSrc = De, ee.loop = !R && !!H.videoTransport.loop, ee.muted = !!H.videoTransport.muted, ee.volume = Math.max(0, Math.min(1, Number(H.videoTransport.volume ?? 1))), ee.src = De, ee.load(), j.setSource(!0), R || j.seek(0)) : !De && ee.getAttribute("src") && (ee.pause(), ee.removeAttribute("src"), delete ee.dataset.panoSrc, ee.load(), K(), Xe(), j.setSource(!1)), R || (ee.loop = !!H.videoTransport.loop), De && !R && _e.thumbnailSrc !== De && !_e.thumbnailFailedSrcs.has(De) && le(De, Le, I), De || Xe(), ge({
      ready: !!De,
      visible: !!De && T(),
      duration: Le,
      frameCount: Re,
      fps: I,
      hasAudio: Ue,
      loop: !!ee.loop,
      muted: !!ee.muted,
      volume: Number(ee.volume ?? H.videoTransport.volume ?? 1),
      thumbnailCount: H.videoTransport.thumbnailCount
    }), De || null;
  }
  function re(x, U = null) {
    return f(d, x, a, U || (() => F()));
  }
  function ae(x = null) {
    return hn(d, "external-sticker") ? re(Kl, x) : null;
  }
  function ye() {
    if (!hn(d, "external-sticker")) return null;
    const x = Pe(PI)[0];
    if (!x || typeof x != "object") return null;
    const U = Pe(NI).map(p).filter(Boolean);
    if (U.length) return { frames: U, meta: x };
    const ve = p(Pe(MI)[0] || null);
    return ve ? { src: ve, meta: x } : null;
  }
  function xe() {
    const x = W.stickers.find(oe), U = x ? ye() : null, ve = U ? hy(x.clip, n.frame, W.timeline.fps, U.meta) : null;
    de.follow({ src: (U == null ? void 0 : U.src) || "", time: ve, playing: j.advancing, fps: W.timeline.fps });
    const ce = x ? ie(x) : null, De = U != null && U.frames ? be.picture(U.frames, ve, U.meta, ce) : de.picture(m, ce);
    return De ? { media: De, revision: k(De), source: gy(U, ce) } : null;
  }
  function Ee() {
    return !R || !hn(d, "scene") ? null : nm(Pe("pano_scene_files"), Pe("pano_scene_meta"), p);
  }
  function We() {
    return !R || !hn(d, "external-sticker") ? null : nm(Pe("pano_sticker_files"), Pe("pano_sticker_meta"), p);
  }
  function ie(x) {
    var I;
    if (x && typeof x == "object" && (oe(x) || x.external === !0))
      return ae(() => {
        ni(d, "image-loaded");
      });
    const U = R ? ke(x) : String(x && typeof x == "object" ? x.asset_id || x.assetId || "" : x || "");
    if (!U) return null;
    const ve = a.get(U);
    if (ve) return ve;
    const ce = R ? R0(x.source) : (I = W.assets) == null ? void 0 : I[U], De = l(ce);
    if (!De) return null;
    const je = new Image();
    return ab(je, De), je.onload = () => {
      sb(je, De), F();
    }, je.onerror = () => {
      lb(je, De), F();
    }, je.src = De, a.set(U, je), je;
  }
  function ke(x) {
    const { source: U } = x;
    return U.filename ? `file:${U.storage}:${U.subfolder}:${U.filename}` : `sticker:${x.id}`;
  }
  function Me() {
    if (z === "cutout" && !r) {
      const De = B();
      if (De) return De;
      const je = s(
        d,
        ["erp_image", "bg_erp"],
        () => F(),
        "background:cutout:erp_image|bg_erp"
      );
      return je && !kd(je) ? je : f(d, "pano_input_images", a, () => F()) || je || null;
    }
    const x = B();
    if (x) return x;
    const U = hn(d, "background") ? f(d, "pano_input_images", a, () => F()) : null;
    if (U && !kd(U)) return U;
    if (ee instanceof HTMLVideoElement && ee.dataset.panoSrc) return ee;
    const ve = D();
    return s(d, ve, () => F(), `background:${ve.join("|")}`) || U || null;
  }
  function b() {
    var U;
    const x = (Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs : []).findIndex((ve) => (ve == null ? void 0 : ve.name) === "source");
    return x >= 0 && d.graph ? String(((U = d.getInputLink(x)) == null ? void 0 : U.type) || "") : "";
  }
  function D() {
    if (z === "cutout") return r ? b() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const x = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((ce) => String((ce == null ? void 0 : ce.name) || "")) : [], U = x.includes("erp_image"), ve = x.includes("bg_erp");
    return v && (U || ve) ? U ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : z === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function u(x) {
    return x ? x instanceof HTMLImageElement ? !!x.complete && Number(x.naturalWidth || x.width || 0) > 0 && Number(x.naturalHeight || x.height || 0) > 0 : x instanceof HTMLVideoElement ? Number(x.videoWidth || 0) > 0 && Number(x.videoHeight || 0) > 0 && Number(x.readyState || 0) >= 2 : Number(x.width || x.naturalWidth || 0) > 0 && Number(x.height || x.naturalHeight || 0) > 0 : !1;
  }
  function C() {
    if (i.failed) return { status: tr, detail: "renderer" };
    if (!i.ready) return { status: hr, detail: "boot" };
    const x = Me(), U = _e.videoFailed ? tr : xd(x, u), ve = [];
    for (const ce of X()) {
      if ((ce == null ? void 0 : ce.visible) === !1) continue;
      const De = ie(ce);
      ve.push(xd(De, u));
    }
    return _I({
      presented: S.hasPresentedFrame,
      background: U,
      stickers: ve
    });
  }
  return {
    connect(x) {
      ({
        isExternalSticker: oe,
        requestDraw: F,
        setTimelineFrame: G,
        skyStickers: X,
        syncTimeline: ue,
        timelineSpanFrames: Ne
      } = x);
    },
    videoState: _e,
    videoCleanupFns: J,
    queueVideoTransportLayout: he,
    playback: j,
    portVideo: de,
    getNodeUiValue: Fe,
    getMediaRevisionToken: k,
    playbackFps: Y,
    syncVideoTransportState: ge,
    toggleVideoMuted: q,
    syncVideoTransportVisibility: ne,
    refreshModalVideoSource: Z,
    getStickerUiImage: re,
    getExternalStickerPreviewImage: ae,
    getPortMedia: ye,
    followPortSticker: xe,
    getStickerImage: ie,
    stickerImageKey: ke,
    getConnectedErpImage: Me,
    isDecodedImageReady: u,
    getStageImageStatus: C,
    sceneFiles: Ee,
    stickerFiles: We
  };
}
function oE(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(p) {
    if (n.splice(0, n.length), i = -1, !p || typeof p != "object" || !Array.isArray(p.entries) || (p.entries.forEach((d) => {
      n.push(String(d || ""));
    }), !n.length)) return;
    const f = Number(p.index);
    Number.isInteger(f) ? f === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, f)) : i = n.length - 1;
  }
  function l(p) {
    n[i] !== p && (n.splice(i + 1), n.push(p), n.length > o && n.shift(), i = n.length - 1);
  }
  return s(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(p) {
      l(String(p || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const p = i - 1;
      return p < 0 || p >= n.length ? null : (i = p, n[i]);
    },
    redo() {
      const p = i + 1;
      return p < 0 || p >= n.length ? null : (i = p, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const p = n.length, f = Math.max(0, p - a), d = i >= 0 ? Math.max(0, Math.min(i, f)) : f, m = n.slice(d, d + a), _ = i < 0 ? -1 : Math.max(-1, Math.min(m.length - 1, i - d));
      return {
        version: 1,
        entries: m,
        index: _
      };
    },
    hydrate: s
  };
}
const aE = 80;
function pb(e) {
  return JSON.stringify(Kx(e));
}
function sE(e) {
  return oE(aE, { entries: [pb(e)], index: 0 });
}
function lE(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, p, f, d, m, _, v, S, w, N, W, R, L, g;
  function z() {
    r || (W(), z0(i), !(o && i.stickers.some(d)) && (t.historyController.commitActionGroup(pb(i)), L()));
  }
  function H(oe) {
    var ue, Ne;
    if (r) return;
    N();
    const F = oe < 0 ? t.historyController.undo() : t.historyController.redo();
    if (L(), !F) return;
    const G = Bx(i, F), X = (ue = i.timeline) == null ? void 0 : ue.fps;
    Object.keys(i).forEach((_e) => delete i[_e]), Object.assign(i, G.state), W(!1), o && i.timeline.fps !== X && v.seek(Math.round(t.frame * i.timeline.fps / X)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Ne = f()) == null ? void 0 : Ne.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), S(), n.backgroundDirty = !0, G.paintingChanged ? _() : m(), R(), g(), p(), w({ cause: "cutout_frame" });
  }
  function ee() {
    var G, X;
    const oe = Array.isArray((G = t.historyController) == null ? void 0 : G.entries) ? t.historyController.entries : [], F = Number((X = t.historyController) == null ? void 0 : X.index);
    return {
      canUndo: !r && oe.length > 1 && F > 0,
      canRedo: !r && oe.length > 1 && F >= 0 && F < oe.length - 1
    };
  }
  return {
    connect(oe) {
      ({
        clearWorldSelection: l,
        commitState: p,
        getActiveCutoutShot: f,
        isUploadingSticker: d,
        markObjectVisualsDirty: m,
        markPaintStrokeVisualsDirty: _,
        playback: v,
        releaseHiddenSelection: S,
        requestDraw: w,
        stopTimelinePlayback: N,
        syncCutoutShot: W,
        syncPaintUi: R,
        syncUndoRedoButtons: L,
        updateSidePanel: g
      } = oe);
    },
    pushHistory: z,
    restoreHistory: H,
    getHistoryCapabilities: ee
  };
}
function cE(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, p, f, d, m, _, v;
  function S() {
    return s === "stickers" ? w() : o.shots;
  }
  function w() {
    return i ? o.stickers.filter((b) => b.placement === "sky") : o.stickers;
  }
  function N(b) {
    return i && de(b);
  }
  function W(b) {
    return b.source.kind === "file" && !b.source.filename && !b.source.data_url;
  }
  function R(b) {
    return N(b) ? uf(b, n.frame) : b;
  }
  function L(b, D) {
    N(b) ? L0(b, n.frame, D) : Object.assign(b, D);
  }
  function g() {
    const b = o.painting || (o.painting = Bo(null));
    return Array.isArray(b.groups) || (b.groups = []), b.groups;
  }
  function z(b = "paint") {
    var x, U;
    const D = Array.isArray((U = (x = o.painting) == null ? void 0 : x[b]) == null ? void 0 : U.strokes) ? o.painting[b].strokes : [], u = [], C = /* @__PURE__ */ new Set();
    for (const ve of D) {
      const ce = String((ve == null ? void 0 : ve.actionGroupId) || "").trim();
      !ce || C.has(ce) || (C.add(ce), u.push(ce));
    }
    return u;
  }
  function H() {
    return z("paint");
  }
  function ee(b, D) {
    const u = String(D || "").trim();
    return u ? `${b === "mask" ? "mask" : "paint"}:${u}` : "";
  }
  function oe(b) {
    const D = String(b || "").trim();
    return D ? `raster:${D}` : "";
  }
  function F(b) {
    const D = String(b || "").trim();
    if (!D) return "";
    const u = D.match(/^raster:(.*)$/);
    return String(u ? u[1] || "" : D).trim();
  }
  function G(b, D = null) {
    const u = String(b || "").trim();
    if (!u) return { layerKind: "paint", actionGroupId: "" };
    const C = u.match(/^(paint|mask):(.*)$/);
    return C ? { layerKind: C[1] === "mask" ? "mask" : "paint", actionGroupId: String(C[2] || "").trim() } : { layerKind: D === "mask" ? "mask" : "paint", actionGroupId: u };
  }
  function X() {
    var D;
    let b = -1;
    for (const u of w())
      b = Math.max(b, Number((u == null ? void 0 : u.z_index) || 0));
    for (const u of g())
      b = Math.max(b, Number((u == null ? void 0 : u.z_index) || 0));
    for (const u of Array.isArray((D = o.painting) == null ? void 0 : D.raster_objects) ? o.painting.raster_objects : [])
      String((u == null ? void 0 : u.layerKind) || "paint") === "paint" && (b = Math.max(b, Number((u == null ? void 0 : u.z_index) || 0)));
    return b + 1;
  }
  function ue(b, D = null) {
    const u = String(b || "").trim();
    if (!u) return null;
    const C = g();
    let x = C.find((U) => String((U == null ? void 0 : U.actionGroupId) || "") === u);
    return x ? D != null && (x.z_index = Math.max(0, Number(D || 0))) : (x = {
      id: u,
      type: "strokeGroup",
      actionGroupId: u,
      z_index: D == null ? X() : Math.max(0, Number(D || 0)),
      locked: !1,
      frame: null
    }, C.push(x)), x;
  }
  function Ne(b) {
    if (!(b != null && b.centerUv)) return [];
    const D = Number(b.centerUv.u || 0), u = Number(b.centerUv.v || 0), C = Number(b.halfW || 0), x = Number(b.halfH || 0);
    return [
      {
        u: ((D - C) % 1 + 1) % 1,
        v: Ie(u - x, 0, 1)
      },
      {
        u: ((D + C) % 1 + 1) % 1,
        v: Ie(u - x, 0, 1)
      },
      {
        u: ((D + C) % 1 + 1) % 1,
        v: Ie(u + x, 0, 1)
      },
      {
        u: ((D - C) % 1 + 1) % 1,
        v: Ie(u + x, 0, 1)
      }
    ];
  }
  function _e() {
    const b = new Set(H()), u = g().filter((C) => b.has(String((C == null ? void 0 : C.actionGroupId) || "")));
    return b.forEach((C) => {
      u.some((x) => String((x == null ? void 0 : x.actionGroupId) || "") === C) || u.push({
        id: C,
        type: "strokeGroup",
        actionGroupId: C,
        z_index: X(),
        locked: !1,
        frame: null
      });
    }), u.sort((C, x) => Number((C == null ? void 0 : C.z_index) || 0) - Number((x == null ? void 0 : x.z_index) || 0)), o.painting.groups = u, u;
  }
  function pe(b, D, u) {
    var Be;
    const C = (Ze) => (Number(Ze || 0) % 1 + 1) % 1, x = [];
    for (const Ze of u) {
      const Qe = Ze == null ? void 0 : Ze.geometry, ut = (Qe == null ? void 0 : Qe.geometryKind) === "lasso_fill" ? Qe == null ? void 0 : Qe.points : (Qe == null ? void 0 : Qe.processedPoints) || (Qe == null ? void 0 : Qe.rawPoints) || (Qe == null ? void 0 : Qe.points) || [];
      Array.isArray(ut) && x.push(...ut);
    }
    if (!x.length) return null;
    const U = C(((Be = x[0]) == null ? void 0 : Be.u) || 0);
    let ve = 0, ce = 0;
    x.forEach((Ze) => {
      const Qe = C((Ze == null ? void 0 : Ze.u) || 0);
      ve += U + ge(Qe, U), ce += Number((Ze == null ? void 0 : Ze.v) || 0);
    });
    const De = (ve / x.length % 1 + 1) % 1;
    let je = 1 / 0, I = -1 / 0, me = 1 / 0, Le = -1 / 0;
    x.forEach((Ze) => {
      const Qe = C((Ze == null ? void 0 : Ze.u) || 0), ut = ge(Qe, De);
      je = Math.min(je, ut), I = Math.max(I, ut);
      const Pt = Number((Ze == null ? void 0 : Ze.v) || 0);
      me = Math.min(me, Pt), Le = Math.max(Le, Pt);
    });
    const Re = u.reduce((Ze, Qe) => {
      const ut = p(String((Qe == null ? void 0 : Qe.toolKind) || "pen")), Pt = Ln[ut] || Ln[Yr], Et = Math.max(1, Number((Qe == null ? void 0 : Qe.size) || 10)) * Math.max(0.1, Number((Pt == null ? void 0 : Pt.sizeScale) ?? 1));
      return Math.max(Ze, Et);
    }, 0), Ue = Math.max(35e-4, Re / 2048);
    return {
      centerUv: { u: ((De + (je + I) * 0.5) % 1 + 1) % 1, v: Ie((me + Le) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (I - je) * 0.5 + Ue,
      halfH: (Le - me) * 0.5 + Ue,
      uvPad: Ue
    };
  }
  function J(b, D, u) {
    const C = String(b || "").trim();
    if (!C) return null;
    const x = g().find((ve) => String((ve == null ? void 0 : ve.actionGroupId) || "") === C);
    if (!x) return null;
    const U = u || k(C, D);
    return x.frame = pe(C, D, U), x.frame;
  }
  function E() {
    var C;
    const b = w().map((x) => ({
      type: "sticker",
      id: String((x == null ? void 0 : x.id) || ""),
      z_index: Number((x == null ? void 0 : x.z_index) || 0),
      item: x
    })), D = _e().map((x) => ({
      type: "strokeGroup",
      id: String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.actionGroupId) || ""),
      actionGroupId: String((x == null ? void 0 : x.actionGroupId) || ""),
      z_index: Number((x == null ? void 0 : x.z_index) || 0),
      item: x
    })), u = (Array.isArray((C = o.painting) == null ? void 0 : C.raster_objects) ? o.painting.raster_objects : []).filter((x) => String((x == null ? void 0 : x.layerKind) || "paint") === "paint").map((x) => ({
      type: "rasterObject",
      id: String((x == null ? void 0 : x.id) || ""),
      z_index: Number((x == null ? void 0 : x.z_index) || 0),
      item: x
    }));
    return [...b, ...D, ...u].sort((x, U) => Number(x.z_index || 0) - Number(U.z_index || 0));
  }
  function V(b = !0) {
    var u, C, x, U, ve, ce;
    const D = E().filter((De) => De.type === "strokeGroup").map((De) => String(De.actionGroupId || "")).filter((De) => !!De);
    if (b) {
      const De = String(((C = (u = n.interaction) == null ? void 0 : u.stroke) == null ? void 0 : C.actionGroupId) || "").trim(), je = String(((U = (x = n.interaction) == null ? void 0 : x.stroke) == null ? void 0 : U.layerKind) || "").trim(), I = String(((ce = (ve = n.interaction) == null ? void 0 : ve.stroke) == null ? void 0 : ce.toolKind) || "").trim();
      De && je === "paint" && I !== "eraser" && !D.includes(De) && D.push(De);
    }
    return D;
  }
  function he(b = !0) {
    var ce, De, je, I, me, Le;
    const D = E();
    if (!b) return D;
    const u = String(((De = (ce = n.interaction) == null ? void 0 : ce.stroke) == null ? void 0 : De.actionGroupId) || "").trim(), C = String(((I = (je = n.interaction) == null ? void 0 : je.stroke) == null ? void 0 : I.layerKind) || "").trim(), x = String(((Le = (me = n.interaction) == null ? void 0 : me.stroke) == null ? void 0 : Le.toolKind) || "").trim();
    if (!u || C !== "paint" || x === "eraser" || D.some((Re) => Re.type === "strokeGroup" && String(Re.actionGroupId || "") === u))
      return D;
    const U = _();
    let ve = D.reduce((Re, Ue) => Math.max(Re, Number((Ue == null ? void 0 : Ue.z_index) || 0)), -1) + 1;
    return U && Ae(U) && String(U.actionGroupId || "") === u && (ve = Number(U.z_index || 0)), [
      ...D,
      {
        type: "strokeGroup",
        id: u,
        actionGroupId: u,
        z_index: ve,
        item: null
      }
    ].sort((Re, Ue) => Number((Re == null ? void 0 : Re.z_index) || 0) - Number((Ue == null ? void 0 : Ue.z_index) || 0));
  }
  function Oe() {
    return g().slice().sort((b, D) => Number((b == null ? void 0 : b.z_index) || 0) - Number((D == null ? void 0 : D.z_index) || 0)).map((b) => te(ee("paint", (b == null ? void 0 : b.actionGroupId) || (b == null ? void 0 : b.id) || ""))).filter(Boolean);
  }
  function ze() {
    var b;
    return (Array.isArray((b = o.painting) == null ? void 0 : b.raster_objects) ? o.painting.raster_objects : []).filter((D) => String((D == null ? void 0 : D.layerKind) || "paint") === "paint").slice().sort((D, u) => Number((D == null ? void 0 : D.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((D) => Pe(oe((D == null ? void 0 : D.id) || ""))).filter(Boolean);
  }
  function Xe() {
    return r || !Array.isArray(o.stickers) ? [] : w();
  }
  function le() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Xe()];
  }
  function j(b) {
    return !!b && Array.isArray(o.shots) && o.shots.includes(b);
  }
  function de(b) {
    return !!b && Array.isArray(o.stickers) && o.stickers.includes(b);
  }
  function be() {
    var b;
    return Array.isArray((b = o.painting) == null ? void 0 : b.raster_objects) ? o.painting.raster_objects : [];
  }
  function Pe(b) {
    const D = F(b);
    if (!D) return null;
    const u = be().find((C) => String((C == null ? void 0 : C.id) || "").trim() === D);
    return !u || String((u == null ? void 0 : u.layerKind) || "paint") !== "paint" ? null : {
      ...u,
      id: oe(D),
      type: "rasterObject",
      rasterObjectId: D
    };
  }
  function Fe(b) {
    if (!b || typeof b != "object" || String(b.type || "") !== "rasterObject") return !1;
    const D = F(b.rasterObjectId || b.id || "");
    return !!D && !!Pe(oe(D));
  }
  function te(b) {
    const D = G(b), u = String(D.actionGroupId || "").trim();
    if (!u) return null;
    const C = g().find((x) => String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.actionGroupId) || "") === u || String((x == null ? void 0 : x.actionGroupId) || "") === u);
    return C ? {
      ...C,
      id: ee("paint", u),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: u
    } : null;
  }
  function Ae(b) {
    if (!b || typeof b != "object" || String(b.type || "") !== "strokeGroup") return !1;
    const D = String(b.actionGroupId || "").trim(), u = String(b.layerKind || "paint").trim() || "paint";
    return !!D && !!te(ee(u, D));
  }
  function k(b, D = null) {
    const u = G(b, D), C = String(u.actionGroupId || "").trim();
    return C ? d(u.layerKind).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() === C) : [];
  }
  function O(b, D = "paint") {
    const u = String(b || "").trim(), x = `geomv5:${String(D || "paint").trim() || "paint"}:${u}:${n.mode}:${m()}`;
    if (n.mode === "frame") {
      const U = l(), ve = String((U == null ? void 0 : U.id) || ""), ce = U ? f(U) : null;
      return `${x}:frame:${ve}:${Math.round(Number((U == null ? void 0 : U.yaw_deg) || 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.pitch_deg) || 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.roll_deg) ?? (U == null ? void 0 : U.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ce == null ? void 0 : ce.x) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.y) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.w) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.h) || 0))}`;
    }
    return `${x}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Y(b, D, u) {
    return !b || typeof b != "object" ? b : {
      ...b,
      u: ((Number(b.u || 0) + Number(D || 0)) % 1 + 1) % 1,
      v: Ie(Number(b.v || 0) + Number(u || 0), 0, 1)
    };
  }
  function ge(b, D) {
    let u = Number(b || 0) - Number(D || 0);
    for (; u > 0.5; ) u -= 1;
    for (; u < -0.5; ) u += 1;
    return u;
  }
  function T(b, D = null, u = null) {
    var je;
    const C = G(b, D), x = Array.isArray(u) ? u : k(C.actionGroupId, C.layerKind), U = [];
    if (x.forEach((I) => {
      const me = (I == null ? void 0 : I.geometry) || null, Le = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [];
      Array.isArray(Le) && U.push(...Le);
    }), !U.length) return { u: 0.5, v: 0.5 };
    const ve = Number(((je = U[0]) == null ? void 0 : je.u) || 0);
    let ce = 0, De = 0;
    return U.forEach((I) => {
      ce += ve + ge(Number((I == null ? void 0 : I.u) || 0), ve), De += Number((I == null ? void 0 : I.v) || 0);
    }), {
      u: (ce / U.length % 1 + 1) % 1,
      v: Ie(De / U.length, 0, 1)
    };
  }
  function q(b, D, u = 1, C = 0) {
    if (!b || typeof b != "object") return b;
    const x = Number((D == null ? void 0 : D.u) || 0), U = Number((D == null ? void 0 : D.v) || 0), ve = ge(Number(b.u || 0), x), ce = Number(b.v || 0) - U, De = Number(C || 0) * Rr, je = Math.cos(De), I = Math.sin(De), me = Math.max(0.02, Number(u || 1)), Le = (ve * je - ce * I) * me, Re = (ve * I + ce * je) * me;
    return {
      ...b,
      u: ((x + Le) % 1 + 1) % 1,
      v: Ie(U + Re, 0, 1)
    };
  }
  function ne(b, D, u, C = null, x = null, U = null) {
    const ve = G(b, x), ce = String(ve.actionGroupId || "").trim();
    if (!ce) return !1;
    const De = d(ve.layerKind), je = Array.isArray(C) ? new Map(C.map((me) => [String((me == null ? void 0 : me.id) || ""), me])) : null;
    let I = !1;
    if (De.forEach((me) => {
      if (String((me == null ? void 0 : me.actionGroupId) || "").trim() !== ce) return;
      const Le = (je == null ? void 0 : je.get(String((me == null ? void 0 : me.id) || ""))) || me, Re = me == null ? void 0 : me.geometry, Ue = Le == null ? void 0 : Le.geometry;
      !Re || !Ue || (Array.isArray(Ue.points) && (Re.points = Ue.points.map((Be) => Y(Be, D, u)), I = !0), Array.isArray(Ue.rawPoints) && (Re.rawPoints = Ue.rawPoints.map((Be) => Y(Be, D, u)), I = !0), Array.isArray(Ue.processedPoints) && (Re.processedPoints = Ue.processedPoints.map((Be) => Y(Be, D, u)), I = !0));
    }), I && U) {
      const me = g().find((Le) => String((Le == null ? void 0 : Le.actionGroupId) || "") === ce);
      me && (me.frame = null);
    }
    return I;
  }
  function A(b, D = 1, u = 0, C = null, x = null, U = null) {
    const ve = G(b, x), ce = String(ve.actionGroupId || "").trim();
    if (!ce) return !1;
    const De = d(ve.layerKind), je = Array.isArray(C) ? C : k(ce, ve.layerKind), I = Array.isArray(je) ? new Map(je.map((Re) => [String((Re == null ? void 0 : Re.id) || ""), Re])) : null, me = (U == null ? void 0 : U.centerUv) ?? T(ce, ve.layerKind, je);
    let Le = !1;
    if (De.forEach((Re) => {
      if (String((Re == null ? void 0 : Re.actionGroupId) || "").trim() !== ce) return;
      const Ue = (I == null ? void 0 : I.get(String((Re == null ? void 0 : Re.id) || ""))) || Re, Be = Re == null ? void 0 : Re.geometry, Ze = Ue == null ? void 0 : Ue.geometry;
      !Be || !Ze || (Array.isArray(Ze.points) && (Be.points = Ze.points.map((Qe) => q(Qe, me, D, u)), Le = !0), Array.isArray(Ze.rawPoints) && (Be.rawPoints = Ze.rawPoints.map((Qe) => q(Qe, me, D, u)), Le = !0), Array.isArray(Ze.processedPoints) && (Be.processedPoints = Ze.processedPoints.map((Qe) => q(Qe, me, D, u)), Le = !0));
    }), Le && U) {
      const Re = g().find((Ue) => String((Ue == null ? void 0 : Ue.actionGroupId) || "") === ce);
      Re && (Re.frame = null);
    }
    return Le;
  }
  function B(b, D, u, C = null) {
    const x = F(b);
    if (!x) return !1;
    const U = be().find((I) => String((I == null ? void 0 : I.id) || "").trim() === x);
    if (!U) return !1;
    const ve = C && typeof C == "object" ? C : U, ce = (ve == null ? void 0 : ve.transform) || {}, De = Number(ce.du || 0) + Number(D || 0), je = Ie(Number(ce.dv || 0) + Number(u || 0), -1, 1);
    return U.transform || (U.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), U.transform.du = De, U.transform.dv = je, !0;
  }
  function K(b, D = 1, u = null) {
    const C = F(b);
    if (!C) return !1;
    const x = be().find((je) => String((je == null ? void 0 : je.id) || "").trim() === C);
    if (!x) return !1;
    const U = u && typeof u == "object" ? u : x, ve = (U == null ? void 0 : U.transform) || {}, ce = Math.max(0.01, Number(ve.scale || 1)), De = Ie(ce * Math.max(0.01, Number(D || 1)), 0.01, 100);
    return x.transform || (x.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), x.transform.scale = De, !0;
  }
  function Z() {
    return X();
  }
  function re(b) {
    var D;
    return !b || typeof b != "object" ? !1 : a ? ((D = b.source) == null ? void 0 : D.kind) === "port" : String(b.id || "") === Tf || String(b.source_kind || "") === kI;
  }
  function ae(b) {
    return !!(b && typeof b == "object" && b.visible === !1);
  }
  function ye(b) {
    return re(b) && ae(b) ? Z0 : 1;
  }
  function xe(b, D, u = 1, C = 0) {
    if (!b || typeof b != "object") return b;
    const x = Number((D == null ? void 0 : D.u) || 0), U = Number((D == null ? void 0 : D.v) || 0), ve = ge(Number(b.u || 0), x), ce = Number(b.v || 0) - U, De = Math.max(0.02, Number(u || 1)), je = Number(C || 0) * Rr, I = Math.cos(je), me = Math.sin(je), Le = ve / De, Re = ce / De, Ue = Le * I + Re * me, Be = -Le * me + Re * I;
    return {
      ...b,
      u: ((x + Ue) % 1 + 1) % 1,
      v: U + Be
    };
  }
  function Ee(b) {
    const D = (b == null ? void 0 : b.bbox) || null, u = (b == null ? void 0 : b.transform) || {};
    return D ? {
      u: (((Number(D.u0 || 0) + Number(D.u1 || 0)) * 0.5 + Number(u.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(D.v0 || 0) + Number(D.v1 || 0)) * 0.5 + Number(u.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function We(b) {
    var De, je, I, me;
    const D = (b == null ? void 0 : b.bbox) || null;
    if (!D) return [];
    const u = {
      u: (Number(D.u0 || 0) + Number(D.u1 || 0)) * 0.5,
      v: (Number(D.v0 || 0) + Number(D.v1 || 0)) * 0.5
    }, C = Math.max(0.01, Number(((De = b == null ? void 0 : b.transform) == null ? void 0 : De.scale) || 1)), x = Number(((je = b == null ? void 0 : b.transform) == null ? void 0 : je.rot_deg) || 0), U = Number(((I = b == null ? void 0 : b.transform) == null ? void 0 : I.du) || 0), ve = Number(((me = b == null ? void 0 : b.transform) == null ? void 0 : me.dv) || 0);
    return [
      { u: Number(D.u0 || 0), v: Number(D.v0 || 0) },
      { u: Number(D.u1 || 0), v: Number(D.v0 || 0) },
      { u: Number(D.u1 || 0), v: Number(D.v1 || 0) },
      { u: Number(D.u0 || 0), v: Number(D.v1 || 0) }
    ].map((Le) => Y(q(Le, u, C, x), U, ve));
  }
  function ie(b) {
    const D = F((b == null ? void 0 : b.rasterObjectId) || (b == null ? void 0 : b.id) || ""), u = (b == null ? void 0 : b.transform) || {}, C = (b == null ? void 0 : b.bbox) || {}, x = `${D}:${n.mode}:${m()}:${C.u0}:${C.v0}:${C.u1}:${C.v1}:${u.du}:${u.dv}:${u.rot_deg}:${u.scale}`;
    if (n.mode === "frame") {
      const U = l(), ve = U ? f(U) : null;
      return `${x}:frame:${String((U == null ? void 0 : U.id) || "")}:${Math.round(Number((ve == null ? void 0 : ve.x) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.y) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.w) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.h) || 0))}`;
    }
    return `${x}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ke(b) {
    const D = String((b == null ? void 0 : b.id) || ""), u = j(b) ? "frame" : de(b) ? "sticker" : "item", C = R(b), x = [
      u,
      D,
      n.mode,
      Number((C == null ? void 0 : C.yaw_deg) || 0).toFixed(4),
      Number((C == null ? void 0 : C.pitch_deg) || 0).toFixed(4),
      Number((C == null ? void 0 : C.hFOV_deg) || 0).toFixed(4),
      Number((C == null ? void 0 : C.vFOV_deg) || 0).toFixed(4),
      Number((C == null ? void 0 : C.rot_deg) || 0).toFixed(4),
      Number((C == null ? void 0 : C.roll_deg) || 0).toFixed(4),
      Qr(C),
      N(b) && v(b)
    ].join(":");
    if (n.mode === "frame") {
      const U = l(), ve = U ? f(U) : null;
      return `${x}:frame:${String((U == null ? void 0 : U.id) || "")}:${Math.round(Number((ve == null ? void 0 : ve.x) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.y) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.w) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.h) || 0))}`;
    }
    return `${x}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Me() {
    E().forEach((D, u) => {
      D.type === "sticker" && D.item && (D.item.z_index = u), D.type === "strokeGroup" && D.item && (D.item.z_index = u), D.type === "rasterObject" && D.item && (D.item.z_index = u);
    });
  }
  return {
    connect(b) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: p,
        getFrameViewRect: f,
        getPaintingLayerList: d,
        getPaintingRevisionKey: m,
        getSelected: _,
        sceneStickerShown: v
      } = b);
    },
    getList: S,
    skyStickers: w,
    isSceneSticker: N,
    isUploadingSticker: W,
    poseOf: R,
    writePose: L,
    getPaintingGroupList: g,
    makeStrokeGroupSelectionId: ee,
    makeRasterObjectSelectionId: oe,
    parseRasterObjectSelectionId: F,
    ensurePaintingGroupEntry: ue,
    getFrameCornersUv: Ne,
    ensureGroupFrame: J,
    getDisplayListObjects: E,
    getOrderedPaintGroupIds: V,
    getOrderedDisplayListObjects: he,
    getSelectableStrokeGroupItems: Oe,
    getSelectableRasterObjectItems: ze,
    cutoutStickers: Xe,
    getCutoutSelectableItems: le,
    isShotItem: j,
    isStickerItem: de,
    getRasterObjectList: be,
    getRasterObjectItem: Pe,
    isRasterObjectItem: Fe,
    getStrokeGroupItem: te,
    isStrokeGroupItem: Ae,
    getStrokeGroupStrokes: k,
    getStrokeGeomCacheKey: O,
    shortestWrappedDelta: ge,
    getStrokeGroupCenterUv: T,
    applyStrokeGroupOffset: ne,
    applyStrokeGroupTransform: A,
    applyRasterObjectOffset: B,
    applyRasterObjectTransform: K,
    getNextStickerZIndex: Z,
    isExternalSticker: re,
    isStickerHidden: ae,
    getStickerDisplayAlpha: ye,
    inverseTransformErpPointAround: xe,
    getRasterObjectCenterUv: Ee,
    getRasterObjectTransformedErpPoints: We,
    getRasterObjectGeomCacheKey: ie,
    getSceneItemGeomCacheKey: ke,
    normalizeDisplayZIndices: Me
  };
}
function uE(e) {
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
  let p, f, d, m, _, v, S, w, N, W, R, L, g, z, H, ee, oe, F, G, X, ue, Ne, _e, pe, J, E, V, he, Oe, ze, Xe, le;
  function j() {
    const b = String(t.selectedId || "");
    if (!b) return null;
    const D = g(b);
    if (D) return D;
    const u = W(b);
    return u || (o ? v().find((C) => String((C == null ? void 0 : C.id) || "") === b) || null : w().find((C) => String((C == null ? void 0 : C.id) || "") === b) || null);
  }
  function de() {
    const b = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], D = [], u = /* @__PURE__ */ new Set();
    return b.forEach((C) => {
      const x = String(C || "").trim();
      if (!x || u.has(x)) return;
      u.add(x);
      const U = x === String(t.selectedId || "") ? j() : g(x) || W(x) || (o ? v().find((ve) => String((ve == null ? void 0 : ve.id) || "") === x) : w().find((ve) => String((ve == null ? void 0 : ve.id) || "") === x));
      U && D.push(U);
    }), D;
  }
  function be(b = null) {
    const D = Array.isArray(b) ? b : de();
    if (!D || D.length < 2) return null;
    const u = D.map((je) => pe(je)).filter((je) => (je == null ? void 0 : je.visible) && Array.isArray(je.corners) && je.corners.length);
    if (!u.length) return null;
    const C = u.flatMap((je) => je.corners.map((I) => Number((I == null ? void 0 : I.x) || 0))), x = u.flatMap((je) => je.corners.map((I) => Number((I == null ? void 0 : I.y) || 0))), U = Math.min(...C), ve = Math.max(...C), ce = Math.min(...x), De = Math.max(...x);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (U + ve) * 0.5, y: (ce + De) * 0.5 },
      corners: [
        { x: U, y: ce },
        { x: ve, y: ce },
        { x: ve, y: De },
        { x: U, y: De }
      ],
      edgeMidpoints: [
        { edge: "top", x: (U + ve) * 0.5, y: ce, a: { x: U, y: ce }, b: { x: ve, y: ce } },
        { edge: "right", x: ve, y: (ce + De) * 0.5, a: { x: ve, y: ce }, b: { x: ve, y: De } },
        { edge: "bottom", x: (U + ve) * 0.5, y: De, a: { x: ve, y: De }, b: { x: U, y: De } },
        { edge: "left", x: U, y: (ce + De) * 0.5, a: { x: U, y: De }, b: { x: U, y: ce } }
      ],
      rotateStemBase: { x: (U + ve) * 0.5, y: ce },
      rotateHandle: { x: (U + ve) * 0.5, y: ce - 30 }
    };
  }
  function Pe(b) {
    const D = String((b == null ? void 0 : b.id) || "").trim();
    return !!D && Array.isArray(t.selectedIds) && t.selectedIds.includes(D);
  }
  function Fe() {
    const b = j();
    return b ? ue(b) || ee(b) ? "stroke" : F(b) ? "frame" : "image" : null;
  }
  function te(b) {
    if (!b || typeof b != "object") return !1;
    if (ue(b)) {
      const D = String(b.actionGroupId || b.id || "").trim(), u = N().find((C) => String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "").trim() === D);
      return (u == null ? void 0 : u.locked) === !0;
    }
    if (ee(b)) {
      const D = E(b.rasterObjectId || b.id || ""), u = R().find((C) => String((C == null ? void 0 : C.id) || "").trim() === D);
      return (u == null ? void 0 : u.locked) === !0;
    }
    return b.locked === !0;
  }
  function Ae(b = null) {
    const D = Array.isArray(b) ? b : de();
    return D.length > 0 && D.every((u) => te(u));
  }
  function k(b, D) {
    const u = D === !0;
    if (!b || typeof b != "object") return !1;
    if (ue(b)) {
      const C = String(b.actionGroupId || b.id || "").trim(), x = N().find((U) => String((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "").trim() === C);
      return !x || x.locked === u ? !1 : (x.locked = u, !0);
    }
    if (ee(b)) {
      const C = E(b.rasterObjectId || b.id || ""), x = R().find((U) => String((U == null ? void 0 : U.id) || "").trim() === C);
      return !x || x.locked === u ? !1 : (x.locked = u, !0);
    }
    return b.locked === u ? !1 : (b.locked = u, !0);
  }
  function O() {
    if (r) return;
    const b = de();
    if (!b.length) return;
    const D = !Ae(b);
    let u = !1;
    b.forEach((C) => {
      k(C, D) && (u = !0);
    }), u && (he(), f(), Xe(), le(), Oe());
  }
  function Y(b) {
    xe(), s.selection = null, t.selectedId = (b == null ? void 0 : b.id) || null, t.selectedIds = b != null && b.id ? [b.id] : [], b && X(b) ? a.active.selected_sticker_id = b.id || null : a.active.selected_sticker_id = null, b && F(b) ? a.active.selected_shot_id = b.id || null : b ? F(b) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function ge(b, D = null) {
    const u = [], C = /* @__PURE__ */ new Set();
    (Array.isArray(b) ? b : []).forEach((ve) => {
      const ce = String((ve == null ? void 0 : ve.id) || "").trim();
      !ce || C.has(ce) || (C.add(ce), u.push(ce));
    }), t.selectedIds = u, xe(), s.selection = null;
    const x = String(D || "").trim();
    t.selectedId = x && u.includes(x) ? x : u[u.length - 1] || null;
    const U = j();
    a.active.selected_sticker_id = U && X(U) && U.id || null, U && F(U) ? a.active.selected_shot_id = U.id || null : u.length || (a.active.selected_shot_id = null);
  }
  function T() {
    const b = (Array.isArray(a.shots) ? a.shots : []).map((u, C) => ({
      kind: "frame",
      item: u,
      label: String((u == null ? void 0 : u.label) || `Frame ${C + 1}`)
    })), D = m().map((u, C) => {
      var U, ve;
      const x = H(u) ? String(u.id || Tf) : String(((ve = (U = a.assets) == null ? void 0 : U[u.asset_id]) == null ? void 0 : ve.name) || u.asset_id || u.id || `Image ${C + 1}`);
      return {
        kind: "image",
        item: u,
        label: x
      };
    });
    return [...b, ...D];
  }
  function q(b) {
    return b === "frame" ? qe.camera : b === "stroke" ? qe.paintbrush_vertical_tool : qe.image;
  }
  function ne(b) {
    return !b || !b.item ? {
      label: String((b == null ? void 0 : b.label) || ""),
      icon: null
    } : {
      label: String(b.label || ""),
      icon: q(b.kind)
    };
  }
  function A() {
    if (r) return;
    const b = j();
    !b || !H(b) || (b.visible = G(b), ie(), Ne(), he(), f(), le(), Xe(), Oe());
  }
  function B() {
    if (r || l !== "stickers") return;
    const b = j();
    if (!b || !H(b)) return;
    const D = b.initial_pose;
    if (!D || typeof D != "object") return;
    b.yaw_deg = Number(D.yaw_deg ?? b.yaw_deg ?? 0), b.pitch_deg = Number(D.pitch_deg ?? b.pitch_deg ?? 0), b.hFOV_deg = Number(D.hFOV_deg ?? b.hFOV_deg ?? 30);
    const u = L(Kl, () => {
      Oe();
    });
    u && (u.complete || u.naturalWidth || u.width) ? b.vFOV_deg = d(
      Number(D.hFOV_deg ?? b.hFOV_deg ?? 30),
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    ) : b.vFOV_deg = Number(D.vFOV_deg ?? b.vFOV_deg ?? 30), b.rot_deg = Number(D.rot_deg ?? b.rot_deg ?? 0), he(), f(), le(), Xe(), Oe();
  }
  function K(b) {
    if (!b || !H(b)) return null;
    const D = b.initial_pose;
    if (!D || typeof D != "object") return null;
    const u = {
      yaw_deg: Number(D.yaw_deg ?? b.yaw_deg ?? 0),
      pitch_deg: Number(D.pitch_deg ?? b.pitch_deg ?? 0),
      hFOV_deg: Number(D.hFOV_deg ?? b.hFOV_deg ?? 30),
      vFOV_deg: Number(D.vFOV_deg ?? b.vFOV_deg ?? 30),
      rot_deg: Number(D.rot_deg ?? b.rot_deg ?? 0)
    }, C = L(Kl, () => {
      Oe();
    });
    return C && (C.complete || C.naturalWidth || C.width) && (u.vFOV_deg = d(
      u.hFOV_deg,
      Number(C.naturalWidth || C.width || 1),
      Number(C.naturalHeight || C.height || 1)
    )), u;
  }
  function Z() {
    const b = j();
    if (!b || !H(b)) return !1;
    const D = K(b);
    if (!D) return !1;
    const u = (C, x) => Math.abs(Number(C || 0) - Number(x || 0)) <= 1e-4;
    return !(u(b.yaw_deg, D.yaw_deg) && u(b.pitch_deg, D.pitch_deg) && u(b.hFOV_deg, D.hFOV_deg) && u(b.vFOV_deg, D.vFOV_deg) && u(b.rot_deg, D.rot_deg));
  }
  function re(b = {}) {
    const u = b.preservePanelValues !== !1 ? V(j()) : null;
    u && (t.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: Qr(u)
    }), t.selectedId = null, t.selectedIds = [], xe(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function ae() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((b) => b.id === t.worldSelectedId && b.placement === "world") || null;
  }
  function ye(b) {
    Y(null), t.worldSelectedId = b, n.backgroundDirty = !0;
  }
  function xe() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Ee(b) {
    return !!b && !r && !b.locked;
  }
  function We() {
    if (l !== "cutout") return;
    const b = _();
    b && (t.selectedId = String(b.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function ie() {
    var D;
    const b = j();
    (oe(b) && !ze(b) || t.selectedId === fc && z() && !p() || Fe() === "stroke" && !J()) && Y(null), ((D = ae()) == null ? void 0 : D.visible) === !1 && xe();
  }
  function ke() {
    if (r) return;
    const b = de();
    if (!j() || b.length === 0 || b.some((ce) => te(ce))) return;
    _e();
    const u = S(), C = new Set(b.map((ce) => X(ce) ? `sticker:${String(ce.id || "")}` : ee(ce) ? `rasterObject:${E(ce.rasterObjectId || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || ce.id || "")}`)), x = [], U = [];
    if (u.forEach((ce) => {
      var je, I;
      const De = ce.type === "sticker" ? `sticker:${String(((je = ce.item) == null ? void 0 : je.id) || "")}` : ce.type === "rasterObject" ? `rasterObject:${String(((I = ce.item) == null ? void 0 : I.id) || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || "")}`;
      C.has(De) ? x.push(ce) : U.push(ce);
    }), !x.length || x[x.length - 1] === u[u.length - 1]) return;
    [...U, ...x].forEach((ce, De) => {
      ce.type === "sticker" && ce.item && (ce.item.z_index = De), ce.type === "strokeGroup" && ce.item && (ce.item.z_index = De), ce.type === "rasterObject" && ce.item && (ce.item.z_index = De);
    }), Ne(), he(), f(), Xe(), Oe();
  }
  function Me() {
    if (r) return;
    const b = de();
    if (!j() || b.length === 0 || b.some((ce) => te(ce))) return;
    _e();
    const u = S(), C = new Set(b.map((ce) => X(ce) ? `sticker:${String(ce.id || "")}` : ee(ce) ? `rasterObject:${E(ce.rasterObjectId || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || ce.id || "")}`)), x = [], U = [];
    if (u.forEach((ce) => {
      var je, I;
      const De = ce.type === "sticker" ? `sticker:${String(((je = ce.item) == null ? void 0 : je.id) || "")}` : ce.type === "rasterObject" ? `rasterObject:${String(((I = ce.item) == null ? void 0 : I.id) || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || "")}`;
      C.has(De) ? x.push(ce) : U.push(ce);
    }), !x.length || x[0] === u[0]) return;
    [...x, ...U].forEach((ce, De) => {
      ce.type === "sticker" && ce.item && (ce.item.z_index = De), ce.type === "strokeGroup" && ce.item && (ce.item.z_index = De), ce.type === "rasterObject" && ce.item && (ce.item.z_index = De);
    }), Ne(), he(), f(), Xe(), Oe();
  }
  return {
    connect(b) {
      ({
        cameraShoots: p,
        commitAndRefreshNode: f,
        computeStickerVFov: d,
        cutoutStickers: m,
        getActiveCutoutShot: _,
        getCutoutSelectableItems: v,
        getDisplayListObjects: S,
        getList: w,
        getPaintingGroupList: N,
        getRasterObjectItem: W,
        getRasterObjectList: R,
        getStickerUiImage: L,
        getStrokeGroupItem: g,
        hasCamera: z,
        isExternalSticker: H,
        isRasterObjectItem: ee,
        isSceneSticker: oe,
        isShotItem: F,
        isStickerHidden: G,
        isStickerItem: X,
        isStrokeGroupItem: ue,
        markObjectVisualsDirty: Ne,
        normalizeDisplayZIndices: _e,
        objectGeom: pe,
        paintingShown: J,
        parseRasterObjectSelectionId: E,
        poseOf: V,
        pushHistory: he,
        requestDraw: Oe,
        sceneStickerShown: ze,
        updateSelectionMenu: Xe,
        updateSidePanel: le
      } = b);
    },
    getSelected: j,
    getSelectedItems: de,
    getMultiSelectionGeom: be,
    isItemSelected: Pe,
    getSelectedKind: Fe,
    isItemLocked: te,
    areAllSelectedItemsLocked: Ae,
    toggleSelectedLock: O,
    setSelectedItem: Y,
    setSelectedItems: ge,
    getCutoutInspectorItems: T,
    getSelectionItemIcon: q,
    getSelectionItemLabelData: ne,
    toggleSelectedExternalStickerVisibility: A,
    restoreSelectedToInitialPose: B,
    canRestoreSelectedToInitial: Z,
    clearSelection: re,
    selectedWorldSticker: ae,
    selectWorldSticker: ye,
    clearWorldSelection: xe,
    worldStickerEditable: Ee,
    applyInitialCutoutFocus: We,
    releaseHiddenSelection: ie,
    bringSelectedToFront: ke,
    sendSelectedToBack: Me
  };
}
function dE(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, p, f, d, m = { key: [], projection: null };
  function _() {
    return o && a() && i.camera.projection === "erp";
  }
  function v() {
    const de = ee({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !de || de.length !== 4 ? !1 : de[0].y >= de[3].y;
  }
  function S() {
    return Q0({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function w() {
    const j = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return j.some((de, be) => de !== m.key[be]) && (m = { key: j, projection: ty(S(), r.width, r.height) }), m.projection;
  }
  function N(j) {
    const de = w().project(j);
    return de.z > 1e-4 ? de : null;
  }
  function W(j, de) {
    return w().ray(j, de);
  }
  function R() {
    const j = r.width, de = r.height, be = 2;
    if (j / Math.max(de, 1) >= be) {
      const k = de, O = k * be;
      return { x: (j - O) * 0.5, y: 0, w: O, h: k };
    }
    const Fe = j, te = Fe / be;
    return { x: 0, y: (de - te) * 0.5, w: Fe, h: te };
  }
  function L(j) {
    return {
      lon: Math.atan2(j.x, j.z),
      lat: Math.asin(Ie(j.y, -1, 1))
    };
  }
  function g(j, de = null) {
    const { lon: be, lat: Pe } = L(j), Fe = R();
    let te = Fe.x + (be / (2 * Math.PI) + 0.5) * Fe.w;
    const Ae = Fe.y + (0.5 - Pe / Math.PI) * Fe.h;
    if (de !== null) {
      for (; te - de > Fe.w / 2; ) te -= Fe.w;
      for (; te - de < -Fe.w / 2; ) te += Fe.w;
    }
    return { x: te, y: Ae, z: 1 };
  }
  function z(j) {
    const de = p(j), be = Zo(
      Number(de.yaw_deg || 0),
      Number(de.pitch_deg || 0),
      Number(de.rot_deg || de.roll_deg || 0)
    ), Pe = Math.tan(Ie(Number(de.hFOV_deg || 20), 0.1, 179) * 0.5 * Rr), Fe = Math.tan(Ie(Number(de.vFOV_deg || 20), 0.1, 179) * 0.5 * Rr);
    return {
      centerDir: be.fwd,
      right: be.right,
      up: be.up,
      tanX: Pe,
      tanY: Fe
    };
  }
  function H(j, de, be) {
    return jI(Gm(Gm(j.centerDir, Wm(j.right, de)), Wm(j.up, be)));
  }
  function ee(j) {
    const de = z(j);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Pe, v: Fe }) => H(de, Pe * de.tanX, Fe * de.tanY));
  }
  function oe(j, de, be) {
    const Pe = z(j), Fe = (de * 2 - 1) * Pe.tanX, te = (1 - be * 2) * Pe.tanY;
    return H(Pe, Fe, te);
  }
  function F(j) {
    const de = t.width / Math.max(1, r.width), be = t.height / Math.max(1, r.height);
    return { x: j.x * de, y: j.y * be, w: j.w * de, h: j.h * be };
  }
  function G(j, de = null, be = null, Pe = null) {
    if (n.mode === "frame") {
      const Fe = de || s();
      if (!Fe) return [];
      const te = be || l(Fe);
      return he(j, Fe, te);
    }
    return J(j, Pe);
  }
  function X(j, de = null, be = null, Pe = null, Fe = null) {
    if (!j) return null;
    if (n.mode === "unwrap") {
      const Ae = J([j], Fe);
      return Ae[0] ? { x: Ae[0].x, y: Ae[0].y, z: 1 } : null;
    }
    const te = Ne(j);
    return te ? f(te, de, be, Pe) : null;
  }
  function ue(j, de) {
    if (!j || !de) return null;
    const be = Number(de.x || 0), Pe = Number(de.y || 0);
    return oe(j, be, Pe);
  }
  function Ne(j) {
    if (!j) return null;
    const de = (Number(j.u || 0) - 0.5) * (2 * Math.PI), be = (0.5 - Number(j.v || 0)) * Math.PI, Pe = Math.cos(be);
    return hc(Pe * Math.sin(de), Math.sin(be), Pe * Math.cos(de));
  }
  function _e(j, de) {
    if (!j || !de) return null;
    const be = z(j), Pe = Au(de, be.centerDir);
    if (!Number.isFinite(Pe) || Pe <= 1e-6) return null;
    const Fe = Au(de, be.right) / Pe, te = Au(de, be.up) / Pe;
    return {
      x: (Fe / Math.max(1e-6, be.tanX) + 1) * 0.5,
      y: (1 - te / Math.max(1e-6, be.tanY)) * 0.5
    };
  }
  function pe(j) {
    if (!Array.isArray(j) || j.length < 3) return [];
    if (n.mode === "unwrap") {
      const be = R();
      return j.map((Pe) => ({
        x: be.x + Number(Pe.u || 0) * be.w,
        y: be.y + Number(Pe.v || 0) * be.h
      }));
    }
    const de = j.map((be) => N(Ne(be))).filter(Boolean);
    return de.every((be) => Number(be.z || 0) > 0) ? de.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function J(j, de = null) {
    if (!Array.isArray(j) || j.length < 1) return [];
    if (n.mode === "unwrap") {
      const Pe = R();
      return j.map((Fe) => {
        const te = (Number(Fe.u || 0) % 1 + 1) % 1, Ae = de == null ? te : Number(de || 0) + d(te, de);
        return {
          x: Pe.x + Ae * Pe.w,
          y: Pe.y + Number(Fe.v || 0) * Pe.h
        };
      });
    }
    const be = j.map((Pe) => N(Ne(Pe))).filter(Boolean);
    return be.every((Pe) => Number(Pe.z || 0) > 0) ? be.map((Pe) => ({ x: Number(Pe.x || 0), y: Number(Pe.y || 0) })) : [];
  }
  function E(j, de = 160) {
    if (!Array.isArray(j) || j.length < 3) return !1;
    for (let be = 0; be < j.length; be += 1) {
      const Pe = j[be], Fe = j[(be + 1) % j.length];
      if (!Pe || !Fe || !Number.isFinite(Pe.x) || !Number.isFinite(Pe.y) || !Number.isFinite(Fe.x) || !Number.isFinite(Fe.y) || Math.hypot(Number(Fe.x) - Number(Pe.x), Number(Fe.y) - Number(Pe.y)) > de) return !1;
    }
    return !0;
  }
  function V(j, de, be) {
    if (!Array.isArray(j) || j.length < 3 || !de || !be) return [];
    const Pe = [];
    for (const Fe of j) {
      const te = Ne(Fe), Ae = _e(de, te);
      if (!Ae) return [];
      Pe.push({
        x: Number(be.x || 0) + Number(Ae.x || 0) * Number(be.w || 0),
        y: Number(be.y || 0) + Number(Ae.y || 0) * Number(be.h || 0)
      });
    }
    return E(Pe, Math.max(80, Math.max(be.w, be.h) * 0.75)) ? Pe : [];
  }
  function he(j, de, be) {
    if (!Array.isArray(j) || j.length < 1 || !de || !be) return [];
    const Pe = [];
    for (const Fe of j) {
      const te = Ne(Fe), Ae = _e(de, te);
      Ae && Pe.push({
        x: Number(be.x || 0) + Number(Ae.x || 0) * Number(be.w || 0),
        y: Number(be.y || 0) + Number(Ae.y || 0) * Number(be.h || 0)
      });
    }
    return Pe;
  }
  function Oe(j) {
    const de = r.getBoundingClientRect();
    return {
      x: (j.clientX - de.left) / de.width * r.width,
      y: (j.clientY - de.top) / de.height * r.height
    };
  }
  function ze(j) {
    const de = r.getBoundingClientRect();
    return {
      x: Number(j.clientX) - Number(de.left || 0),
      y: Number(j.clientY) - Number(de.top || 0)
    };
  }
  function Xe(j, de = performance.now()) {
    if (n.mode === "unwrap") {
      const te = R(), Ae = (j.x - te.x) / Math.max(1, te.w), k = (j.y - te.y) / Math.max(1, te.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (Ae % 1 + 1) % 1,
        v: Ie(k, 0, 1),
        t: Number(de || 0)
      };
    }
    const be = W(j.x, j.y), { lon: Pe, lat: Fe } = L(be);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Pe / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - Fe / Math.PI, 0, 1),
      t: Number(de || 0)
    };
  }
  function le(j, de, be = performance.now()) {
    const Pe = l(de);
    if (!Pe) return null;
    const Fe = {
      x: (Number(j.x) - Pe.x) / Math.max(1, Pe.w),
      y: (Number(j.y) - Pe.y) / Math.max(1, Pe.h)
    };
    if (Fe.x < 0 || Fe.x > 1 || Fe.y < 0 || Fe.y > 1) return null;
    const te = ue(de, Fe);
    if (!te) return null;
    const { lon: Ae, lat: k } = L(te);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ae / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - k / Math.PI, 0, 1),
      t: Number(be || 0)
    };
  }
  return {
    connect(j) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: p,
        projectSceneItemDir: f,
        shortestWrappedDelta: d
      } = j);
    },
    isErpCamera: _,
    currentViewCamera: S,
    currentViewProjection: w,
    projectDir: N,
    screenToWorldDir: W,
    getUnwrapRect: R,
    projectDirUnwrap: g,
    getStickerFrame: z,
    stickerDirFromFrame: H,
    stickerCornersDir: ee,
    stickerSampleDir: oe,
    stickerCornerOrderSanity: v,
    projectEditorPoints: G,
    projectErpPointToEditor: X,
    frameLocalPointToWorldDir: ue,
    erpPointToWorldDir: Ne,
    worldDirToFrameLocalPoint: _e,
    projectLassoPointsToCurrentView: pe,
    projectErpLassoPointsToFrameRect: V,
    screenPos: Oe,
    screenPosCss: ze,
    screenPosToErpPoint: Xe,
    screenPosToFrameAsErpPoint: le,
    deviceRect: F
  };
}
function fE(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, p, f, d, m, _, v, S, w, N, W, R, L, g, z, H, ee, oe, F, G, X, ue, Ne, _e, pe, J, E, V, he;
  function Oe(te, Ae) {
    const k = String(te.actionGroupId || te.id || "").trim(), O = R(k, te.layerKind), Y = s(k, te.layerKind, O), ge = (Y == null ? void 0 : Y.centerUv) || W(k, te.layerKind, O), T = n.mode === "unwrap" ? Number((ge == null ? void 0 : ge.u) || 0) : null, q = [], ne = n.mode === "frame" ? l() : null, A = ne ? d(ne) : null;
    for (const ie of O) {
      const ke = (ie == null ? void 0 : ie.geometry) || null, Me = (ke == null ? void 0 : ke.geometryKind) === "lasso_fill" ? ke == null ? void 0 : ke.points : (ke == null ? void 0 : ke.processedPoints) || (ke == null ? void 0 : ke.rawPoints) || (ke == null ? void 0 : ke.points) || [], b = Ne(Me, ne, A, T).filter((C) => Number.isFinite(C == null ? void 0 : C.x) && Number.isFinite(C == null ? void 0 : C.y));
      if (!b.length) continue;
      const D = p(String((ie == null ? void 0 : ie.toolKind) || "pen")), u = Ln[D] || Ln[Yr];
      q.push({
        points: b,
        closed: String((ke == null ? void 0 : ke.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((u == null ? void 0 : u.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || te.layerKind || "paint")
      });
    }
    const B = _e(ge, null, ne, A, T);
    if (!B) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(Ae, ie), ie;
    }
    const Z = f(Y).map((ie) => _e(ie, B.x, ne, A, T)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (Z.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(Ae, ie), ie;
    }
    const re = (ie, ke) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((ke == null ? void 0 : ke.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((ke == null ? void 0 : ke.y) || 0)) * 0.5,
      a: ie,
      b: ke
    }), ae = re(Z[0], Z[1]), ye = re(Z[1], Z[2]), xe = re(Z[2], Z[3]), Ee = re(Z[3], Z[0]), We = {
      kind: "strokeGroup",
      center: { x: Number(B.x || 0), y: Number(B.y || 0) },
      corners: Z,
      edgeMidpoints: [
        { edge: "top", ...ae },
        { edge: "right", ...ye },
        { edge: "bottom", ...xe },
        { edge: "left", ...Ee }
      ],
      rotateStemBase: { x: ae.x, y: ae.y },
      rotateHandle: { x: ae.x, y: ae.y - 30 },
      strokePaths: q,
      visible: !0
    };
    return n._strokeGeomCache.set(Ae, We), We;
  }
  function ze(te, Ae) {
    const k = n.mode === "frame" ? l() : null, O = k ? d(k) : null, Y = m(te), ge = n.mode === "unwrap" ? Number((Y == null ? void 0 : Y.u) || 0) : null, T = _e(Y, null, k, O, ge), ne = v(te).map((Z) => _e(Z, (T == null ? void 0 : T.x) ?? null, k, O, ge)).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
    if (!Array.isArray(ne) || ne.length < 4) {
      const Z = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(Ae, Z), Z;
    }
    const A = ne.slice(0, 4).map((Z) => ({ x: Number((Z == null ? void 0 : Z.x) || 0), y: Number((Z == null ? void 0 : Z.y) || 0) })), K = {
      kind: "rasterObject",
      center: {
        x: A.reduce((Z, re) => Z + Number(re.x || 0), 0) / A.length,
        y: A.reduce((Z, re) => Z + Number(re.y || 0), 0) / A.length
      },
      corners: A,
      visible: !0
    };
    return n._strokeGeomCache.set(Ae, K), K;
  }
  function Xe(te, Ae = null, k = null, O = null, Y = {}) {
    if (n.mode === "frame") {
      const B = k || l(), K = O || d(B);
      if (!B || !K) return null;
      const Z = B ? he(B, te) : null;
      return Z ? {
        x: Number(K.x || 0) + Number(Z.x || 0) * Number(K.w || 0),
        y: Number(K.y || 0) + Number(Z.y || 0) * Number(K.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ue(te, Ae);
    const ge = 1e-4, T = o().project(te, ge);
    if (!Number.isFinite(T.z) || T.z <= ge && !(Y != null && Y.clipBehind)) return null;
    const q = r.width, ne = r.height, A = Math.max(q, ne) * 2;
    return {
      x: Ie(T.x, -A, q + A),
      y: Ie(T.y, -A, ne + A),
      z: Math.max(T.z, ge),
      rawZ: T.z,
      clipped: T.z <= ge
    };
  }
  function le(te, Ae = []) {
    if (n.mode !== "pano" || ee(te)) return 1;
    const k = Ae.map((O) => Number((O == null ? void 0 : O.rawZ) ?? (O == null ? void 0 : O.z))).filter((O) => Number.isFinite(O));
    return k.length ? $I(0.035, 0.2, Math.min(...k)) : 1;
  }
  function j(te) {
    if (z(te) && !pe(te)) return { visible: !1 };
    const Ae = G(te), k = Vn(Number(Ae.yaw_deg || 0), Number(Ae.pitch_deg || 0)), O = n.mode === "frame" ? l() : null, Y = O ? d(O) : null, ge = n.mode === "pano" && (ee(te) || H(te)), T = ge ? { clipBehind: !0 } : null, q = Xe(k, null, O, Y, T);
    if (!q) return { visible: !1 };
    const ne = w(te), B = J(te).map((x) => Xe(x, q.x, O, Y, T)).filter((x) => Number.isFinite(x == null ? void 0 : x.x) && Number.isFinite(x == null ? void 0 : x.y));
    if (B.length < 4) return { visible: !1 };
    const K = E(ne, 0, ne.tanY), Z = E(ne, 0, ne.tanY + Math.max(ne.tanY * 0.43, 0.053)), re = Xe(K, q.x, O, Y, T);
    if (!re) return { visible: !1 };
    const ae = Xe(Z, (re == null ? void 0 : re.x) ?? q.x, O, Y, T), ye = ((ae == null ? void 0 : ae.x) ?? re.x) - re.x, xe = ((ae == null ? void 0 : ae.y) ?? re.y) - re.y, Ee = Math.hypot(ye, xe) || 1, We = {
      x: re.x + ye / Ee * 30,
      y: re.y + xe / Ee * 30
    }, ie = Xe(E(ne, 0, ne.tanY), q.x, O, Y, T), ke = Xe(E(ne, ne.tanX, 0), q.x, O, Y, T), Me = Xe(E(ne, 0, -ne.tanY), q.x, O, Y, T), b = Xe(E(ne, -ne.tanX, 0), q.x, O, Y, T);
    if (!ie || !ke || !Me || !b) return { visible: !1 };
    const D = [
      q,
      ...B,
      re,
      ae,
      ie,
      ke,
      Me,
      b
    ];
    if (ge && !D.some((x) => Number((x == null ? void 0 : x.rawZ) ?? (x == null ? void 0 : x.z)) > 1e-4)) return { visible: !1 };
    const u = le(te, D), C = [
      {
        edge: "top",
        x: ie.x,
        y: ie.y,
        a: { x: B[0].x, y: B[0].y },
        b: { x: B[1].x, y: B[1].y }
      },
      {
        edge: "right",
        x: ke.x,
        y: ke.y,
        a: { x: B[1].x, y: B[1].y },
        b: { x: B[2].x, y: B[2].y }
      },
      {
        edge: "bottom",
        x: Me.x,
        y: Me.y,
        a: { x: B[2].x, y: B[2].y },
        b: { x: B[3].x, y: B[3].y }
      },
      {
        edge: "left",
        x: b.x,
        y: b.y,
        a: { x: B[3].x, y: B[3].y },
        b: { x: B[0].x, y: B[0].y }
      }
    ];
    return {
      center: { x: q.x, y: q.y },
      corners: B.map((x) => ({ x: x.x, y: x.y })),
      edgeMidpoints: C,
      rotateStemBase: { x: re.x, y: re.y },
      rotateHandle: We,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: u,
      visible: !0
    };
  }
  function de(te) {
    if (t && H(te) && L()) return { visible: !1 };
    if (!F() && (oe(te) || g(te))) return { visible: !1 };
    if (oe(te)) {
      const Y = String(te.actionGroupId || te.id || "").trim(), ge = N(Y, te.layerKind), T = n._strokeGeomCache.get(ge);
      return T || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), Oe(te, ge));
    }
    if (g(te)) {
      const Y = _(te), ge = n._strokeGeomCache.get(Y);
      return ge || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ze(te, Y));
    }
    const Ae = S(te), k = n._strokeGeomCache.get(Ae);
    if (k) return k;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const O = j(te);
    return n._strokeGeomCache.set(Ae, O), O;
  }
  function be(te, Ae, k, O = null) {
    const Y = [];
    for (let ge = 0; ge <= k; ge += 1) {
      const T = ge / k;
      let q = 0, ne = 0;
      Ae === 0 ? (q = T, ne = 0) : Ae === 1 ? (q = 1, ne = T) : Ae === 2 ? (q = 1 - T, ne = 1) : (q = 0, ne = 1 - T);
      const A = V(te, q, ne), B = n.mode === "unwrap" ? ue(A, O) : X(A);
      B && Y.push(B);
    }
    return Y;
  }
  function Pe() {
    const te = [...Array.isArray(i.shots) ? i.shots : []], Ae = [...a()].sort((k, O) => Number(k.z_index || 0) - Number(O.z_index || 0));
    return [...te, ...Ae];
  }
  function Fe() {
    const te = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((k, O) => Number(O.z_index || 0) - Number(k.z_index || 0)), ...te];
  }
  return {
    connect(te) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: p,
        getFrameCornersUv: f,
        getFrameViewRect: d,
        getRasterObjectCenterUv: m,
        getRasterObjectGeomCacheKey: _,
        getRasterObjectTransformedErpPoints: v,
        getSceneItemGeomCacheKey: S,
        getStickerFrame: w,
        getStrokeGeomCacheKey: N,
        getStrokeGroupCenterUv: W,
        getStrokeGroupStrokes: R,
        isFreeSpaceView: L,
        isRasterObjectItem: g,
        isSceneSticker: z,
        isShotItem: H,
        isStickerItem: ee,
        isStrokeGroupItem: oe,
        paintingShown: F,
        poseOf: G,
        projectDir: X,
        projectDirUnwrap: ue,
        projectEditorPoints: Ne,
        projectErpPointToEditor: _e,
        sceneStickerShown: pe,
        stickerCornersDir: J,
        stickerDirFromFrame: E,
        stickerSampleDir: V,
        worldDirToFrameLocalPoint: he
      } = te);
    },
    projectSceneItemDir: Xe,
    objectGeom: de,
    sampleStickerEdge: be,
    getCutoutSelectableItemsForDisplay: Pe,
    getCutoutSelectableItemsForHit: Fe
  };
}
const Us = /* @__PURE__ */ new Map();
function pE(e) {
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
  let p, f, d, m, _, v, S, w, N, W, R, L, g, z, H, ee, oe, F, G, X;
  function ue(T = n.interaction) {
    const q = String((T == null ? void 0 : T.kind) || "");
    if (q === "paint_stroke" || q === "paint_lasso_fill" || q === "move_stroke_group" || q === "scale_stroke_group" || q === "rotate_stroke_group" || q === "move_raster_object" || q === "scale_raster_object") return !0;
    if (q === "move_multi") {
      const ne = Array.isArray(T == null ? void 0 : T.strokeSnapshots) && T.strokeSnapshots.length > 0, A = Array.isArray(T == null ? void 0 : T.rasterSnapshots) && T.rasterSnapshots.length > 0;
      return ne || A;
    }
    return !1;
  }
  function Ne() {
    var q, ne, A, B;
    let T = null;
    try {
      const K = w(), Z = ((B = (A = (ne = (q = n.paintEngine) == null ? void 0 : q.getErpTarget) == null ? void 0 : ne.call(q, K)) == null ? void 0 : A.displayPaint) == null ? void 0 : B.canvas) || null;
      Z && (T = {
        source: Z,
        revision: `${N()}:${_e()}`
      });
    } catch {
      T = null;
    }
    return T;
  }
  function _e() {
    var B, K, Z, re, ae, ye, xe;
    const T = n.interaction, q = String((T == null ? void 0 : T.kind) || "");
    if (!ue(T)) return "";
    if (q === "paint_stroke" || q === "paint_lasso_fill") {
      const Ee = ((B = T == null ? void 0 : T.stroke) == null ? void 0 : B.geometry) || null, We = String(((K = T == null ? void 0 : T.stroke) == null ? void 0 : K.layerKind) || ""), ie = ((Z = Ee == null ? void 0 : Ee.rawPoints) == null ? void 0 : Z.length) ?? ((re = Ee == null ? void 0 : Ee.points) == null ? void 0 : re.length) ?? 0, ke = String((T == null ? void 0 : T._livePreviewToken) || "");
      return `_${We || "paint"}_${q}_live${ke}_${ie}_${n.livePaintInteractionRevision}`;
    }
    const ne = String(((ae = T == null ? void 0 : T.item) == null ? void 0 : ae.actionGroupId) || ""), A = String(((ye = T == null ? void 0 : T.item) == null ? void 0 : ye.rasterObjectId) || ((xe = T == null ? void 0 : T.item) == null ? void 0 : xe.id) || "");
    return `_${q}_${ne || A || "active"}_${n.livePaintInteractionRevision}`;
  }
  function pe(T, q = null) {
    const ne = String((T == null ? void 0 : T.rasterDataUrl) || "").trim();
    if (!ne) return null;
    const A = s.get(ne);
    if (A)
      return A.complete || A.width || A.naturalWidth, A;
    const B = new Image();
    return B.onload = () => {
      typeof q == "function" && q();
    }, B.src = ne, s.set(ne, B), B;
  }
  function J(T) {
    const q = String((T == null ? void 0 : T.rasterDataUrl) || "").trim();
    if (!q) return null;
    const ne = a.get(q);
    if (ne) return ne.ready ? ne : null;
    const A = pe(T, () => {
      const xe = a.get(q);
      xe && (xe.ready = !1), F({ localOnly: !0 });
    });
    if (!A || !(A.complete || A.width || A.naturalWidth)) return null;
    const B = Number(A.naturalWidth || A.width || 0), K = Number(A.naturalHeight || A.height || 0);
    if (B < 1 || K < 1) return null;
    const Z = wn({ label: "editor.image-pixels" });
    Z.width = B, Z.height = K;
    const re = Z.getContext("2d", { willReadFrequently: !0 });
    if (!re) return null;
    re.clearRect(0, 0, B, K), re.drawImage(A, 0, 0, B, K);
    const ae = re.getImageData(0, 0, B, K).data, ye = { canvas: Z, width: B, height: K, alpha: ae, ready: !0 };
    return a.set(q, ye), ye;
  }
  function E(T, q) {
    if (!T || !q) return null;
    const ne = (T == null ? void 0 : T.bbox) || null;
    if (!ne) return null;
    const A = (T == null ? void 0 : T.transform) || {}, B = {
      u: (Number(ne.u0 || 0) + Number(ne.u1 || 0)) * 0.5,
      v: (Number(ne.v0 || 0) + Number(ne.v1 || 0)) * 0.5
    }, K = {
      u: ((Number(q.u || 0) - Number(A.du || 0)) % 1 + 1) % 1,
      v: Number(q.v || 0) - Number(A.dv || 0)
    }, Z = L(
      K,
      B,
      Number(A.scale || 1),
      Number(A.rot_deg || 0)
    ), re = Number(ne.u1 || 0) - Number(ne.u0 || 0), ae = Number(ne.v1 || 0) - Number(ne.v0 || 0);
    if (!(re > 1e-6) || !(ae > 1e-6)) return null;
    const ye = X(Number(Z.u || 0), Number(ne.u0 || 0)) / re, xe = (Number(Z.v || 0) - Number(ne.v0 || 0)) / ae;
    if (ye < 0 || ye > 1 || xe < 0 || xe > 1) return 0;
    const Ee = J(T);
    if (!Ee) return null;
    const We = Ie(Math.floor(ye * Ee.width), 0, Ee.width - 1), ie = Ie(Math.floor(xe * Ee.height), 0, Ee.height - 1);
    return Number(Ee.alpha[(ie * Ee.width + We) * 4 + 3] || 0);
  }
  function V(T, q, ne, A = null) {
    if (!(q != null && q.visible) || !hi(ne, q.corners)) return !1;
    const B = A || G(ne, performance.now()), K = E(T, B);
    return K === null ? !0 : K > 8;
  }
  function he() {
    var A, B, K, Z, re, ae, ye, xe;
    const T = ((B = (A = n.paintEngine) == null ? void 0 : A.getErpTarget) == null ? void 0 : B.call(A, w(!1))) || null, q = Math.max(1, Number(((K = T == null ? void 0 : T.descriptor) == null ? void 0 : K.width) || ((re = (Z = T == null ? void 0 : T.displayPaint) == null ? void 0 : Z.canvas) == null ? void 0 : re.width) || 2048)), ne = Math.max(1, Number(((ae = T == null ? void 0 : T.descriptor) == null ? void 0 : ae.height) || ((xe = (ye = T == null ? void 0 : T.displayPaint) == null ? void 0 : ye.canvas) == null ? void 0 : xe.height) || 1024));
    return { width: q, height: ne };
  }
  function Oe() {
    var ie, ke, Me;
    const T = n.interaction;
    if ((T == null ? void 0 : T.kind) !== "paint_stroke") return null;
    const q = (T == null ? void 0 : T.stroke) || null;
    if (!q || String((q == null ? void 0 : q.layerKind) || "") !== "paint" || String((q == null ? void 0 : q.toolKind) || "") !== "eraser") return null;
    const ne = m(), A = `${_e()}:${ne.width}:${ne.height}`;
    if (((ie = n._activePaintEraserPreviewInfo) == null ? void 0 : ie.cacheKey) === A)
      return n._activePaintEraserPreviewInfo.value || null;
    const B = gn(q), K = (B == null ? void 0 : B.geometry) || null;
    if (K && String(K.geometryKind || "") !== "lasso_fill") {
      const b = Array.isArray(K.rawPoints) && K.rawPoints.length ? K.rawPoints : Array.isArray(K.points) ? K.points : [];
      K.processedPoints = H(b, B.targetSpace, !0);
    }
    const Z = f(ne.width, ne.height, { readback: !0 });
    if (!ee(Z, B, { w: ne.width, h: ne.height })) return null;
    const re = ((Me = (ke = Z.ctx) == null ? void 0 : ke.getImageData(0, 0, ne.width, ne.height)) == null ? void 0 : Me.data) || null;
    if (!re) return null;
    let ae = ne.width, ye = ne.height, xe = -1, Ee = -1;
    for (let b = 0; b < ne.height; b += 1)
      for (let D = 0; D < ne.width; D += 1)
        re[(b * ne.width + D) * 4 + 3] <= 8 || (D < ae && (ae = D), b < ye && (ye = b), D > xe && (xe = D), b > Ee && (Ee = b));
    if (xe < ae || Ee < ye)
      return n._activePaintEraserPreviewInfo = { cacheKey: A, value: null }, null;
    const We = {
      surface: Z,
      bounds: { minX: ae, minY: ye, maxX: xe, maxY: Ee },
      key: `${A}:${ae}:${ye}:${xe}:${Ee}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: A, value: We }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), We;
  }
  function ze() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function Xe(T, q, ne) {
    var A, B;
    if (!T) return null;
    if (T.type === "rasterObject" && ((A = T.item) != null && A.bbox)) {
      const K = T.item.bbox, Z = ((B = T.item) == null ? void 0 : B.transform) || {}, re = Number(K.u0 || 0) + Number(Z.du || 0), ae = Number(K.u1 || 0) + Number(Z.du || 0), ye = Number(K.v0 || 0) + Number(Z.dv || 0), xe = Number(K.v1 || 0) + Number(Z.dv || 0);
      return {
        minX: Math.floor((re % 1 + 1) % 1 * q),
        maxX: Math.ceil((ae % 1 + 1) % 1 * q),
        minY: Math.floor(Ie(ye, 0, 1) * ne),
        maxY: Math.ceil(Ie(xe, 0, 1) * ne),
        wraps: ae - re >= 1 || re < 0 || ae > 1
      };
    }
    if (T.type === "strokeGroup") {
      const K = R(T.actionGroupId, "paint"), Z = d(T.actionGroupId, "paint", K);
      if (!Z) return null;
      const re = Z.centerUv.u - Z.halfW, ae = Z.centerUv.u + Z.halfW, ye = Z.centerUv.v - Z.halfH, xe = Z.centerUv.v + Z.halfH;
      return {
        minX: Math.floor((re % 1 + 1) % 1 * q),
        maxX: Math.ceil((ae % 1 + 1) % 1 * q),
        minY: Math.floor(Ie(ye, 0, 1) * ne),
        maxY: Math.ceil(Ie(xe, 0, 1) * ne),
        wraps: ae - re >= 1 || re < 0 || ae > 1
      };
    }
    return null;
  }
  function le(T, q, ne) {
    if (!T || !q) return !1;
    const A = (Z) => Z.wraps ? [
      { minX: 0, maxX: Z.maxX, minY: Z.minY, maxY: Z.maxY, wraps: !1 },
      { minX: Z.minX, maxX: ne - 1, minY: Z.minY, maxY: Z.maxY, wraps: !1 }
    ] : [Z], B = A(T), K = A(q);
    return B.some((Z) => K.some((re) => !(Z.maxX < re.minX || re.maxX < Z.minX || Z.maxY < re.minY || re.maxY < Z.minY)));
  }
  function j(T, q, ne) {
    var x, U, ve, ce, De, je, I;
    if (!T || !q || !((x = ne == null ? void 0 : ne.surface) != null && x.canvas) || q.type !== "rasterObject") return T;
    const A = Number(T.width || ne.surface.canvas.width || 0), B = Number(T.height || ne.surface.canvas.height || 0);
    if (A < 1 || B < 1) return T;
    const K = Xe(q, A, B);
    if (K && !le(K, ne.bounds, A)) return T;
    const Z = String(((U = q.item) == null ? void 0 : U.id) || q.id || ""), re = ((ve = q.item) == null ? void 0 : ve.transform) || {}, ae = `${ne.key}:${Z}:${A}:${B}:${Number(re.du || 0).toFixed(6)}:${Number(re.dv || 0).toFixed(6)}:${Number(re.rot_deg || 0).toFixed(3)}:${Number(re.scale || 1).toFixed(4)}`, ye = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (ye.has(ae)) return ye.get(ae);
    const xe = Ie(Math.floor(Number(((ce = ne.bounds) == null ? void 0 : ce.minX) || 0)), 0, Math.max(0, A - 1)), Ee = Ie(Math.floor(Number(((De = ne.bounds) == null ? void 0 : De.minY) || 0)), 0, Math.max(0, B - 1)), We = Ie(Math.ceil(Number(((je = ne.bounds) == null ? void 0 : je.maxX) || 0)), xe, Math.max(0, A - 1)), ie = Ie(Math.ceil(Number(((I = ne.bounds) == null ? void 0 : I.maxY) || 0)), Ee, Math.max(0, B - 1)), ke = Math.max(1, We - xe + 1), Me = Math.max(1, ie - Ee + 1), b = f(A, B, { readback: !0 });
    b.ctx.clearRect(0, 0, A, B), b.ctx.drawImage(T, 0, 0);
    const D = b.ctx.getImageData(xe, Ee, ke, Me);
    b.ctx.save(), b.ctx.globalCompositeOperation = "destination-out", b.ctx.drawImage(ne.surface.canvas, 0, 0), b.ctx.restore();
    const u = b.ctx.getImageData(xe, Ee, ke, Me);
    let C = !1;
    for (let me = 0; me < ke * Me; me += 1) {
      const Le = D.data[me * 4 + 3], Re = u.data[me * 4 + 3];
      if (Le > Re) {
        C = !0;
        break;
      }
    }
    return C ? (ye.size > 64 && ye.clear(), ye.set(ae, b.canvas), b.canvas) : (ye.set(ae, T), T);
  }
  function de(T, q = null) {
    const ne = z((T == null ? void 0 : T.rasterObjectId) || (T == null ? void 0 : T.id) || ""), A = (T == null ? void 0 : T.bbox) || null;
    if (!ne || !A) return null;
    const B = pe(T, q);
    if (!B || !(B.complete || B.width || B.naturalWidth)) return null;
    const { width: K, height: Z } = he(), re = (T == null ? void 0 : T.transform) || {}, ae = [
      ne,
      K,
      Z,
      A.u0,
      A.v0,
      A.u1,
      A.v1,
      re.du,
      re.dv,
      re.rot_deg,
      re.scale,
      W()
    ].join(":"), ye = o.get(ae);
    if (ye) return ye;
    o.size > 64 && o.clear();
    const xe = wn({ label: "editor.raster-erp" });
    xe.width = K, xe.height = Z;
    const Ee = xe.getContext("2d");
    if (!Ee) return null;
    const We = Number(A.u0 || 0) * K, ie = Number(A.v0 || 0) * Z, ke = Math.max(1, (Number(A.u1 || 0) - Number(A.u0 || 0)) * K), Me = Math.max(1, (Number(A.v1 || 0) - Number(A.v0 || 0)) * Z), b = We + ke * 0.5 + Number(re.du || 0) * K, D = ie + Me * 0.5 + Number(re.dv || 0) * Z, u = Number(re.rot_deg || 0) * Rr, C = Math.max(0.01, Number(re.scale || 1));
    for (const x of [-K, 0, K])
      Ee.save(), Ee.translate(b + x, D), Ee.rotate(u), Ee.scale(C, C), Ee.drawImage(B, -ke * 0.5, -Me * 0.5, ke, Me), Ee.restore();
    return o.set(ae, xe), xe;
  }
  async function be(T, q) {
    const ne = await new Promise((re) => T.toBlob(re, "image/png")), A = new FormData();
    A.append("image", ne, q), A.append("type", "input"), A.append("subfolder", "panorama_stickers"), A.append("overwrite", "1");
    const B = await t.fetchApi("/upload/image", { method: "POST", body: A });
    if (!B || B.status !== 200) throw new Error(`upload failed (${B == null ? void 0 : B.status})`);
    const K = await B.json(), Z = String((K == null ? void 0 : K.name) || "").trim();
    if (!Z) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: Z,
      subfolder: String((K == null ? void 0 : K.subfolder) || "panorama_stickers"),
      storage: String((K == null ? void 0 : K.type) || "input")
    };
  }
  let Pe = null, Fe = !1;
  function te() {
    if (r) return !1;
    const T = Km(l.painting), { width: q, height: ne } = _();
    return Ux(l.painting_layer, { paintCount: T.totalPaintCount, maskCount: T.totalMaskCount, width: q, height: ne, nodeId: String(i.id ?? "0") });
  }
  function Ae() {
    const T = String(i.id ?? "0"), q = Us.get(T);
    if (Fe && q) return q;
    const ne = (async () => {
      var K, Z, re, ae, ye, xe, Ee, We, ie, ke, Me, b;
      const A = N(), B = Km(l.painting);
      if (B.totalPaintCount <= 0 && B.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, Pe = A, p());
        return;
      }
      if (Pe !== A && !Fe) {
        Fe = !0;
        try {
          oe();
          const D = w(!1), u = ((Z = (K = n.paintEngine) == null ? void 0 : K.getErpTarget) == null ? void 0 : Z.call(K, D)) || null, C = ((re = u == null ? void 0 : u.displayPaint) == null ? void 0 : re.canvas) || null, x = ((ae = u == null ? void 0 : u.committedMask) == null ? void 0 : ae.canvas) || null, U = Math.max(1, Number(((ye = u == null ? void 0 : u.descriptor) == null ? void 0 : ye.width) || (C == null ? void 0 : C.width) || (x == null ? void 0 : x.width) || 2048)), ve = Math.max(1, Number(((xe = u == null ? void 0 : u.descriptor) == null ? void 0 : xe.height) || (C == null ? void 0 : C.height) || (x == null ? void 0 : x.height) || 1024));
          (!C && B.totalPaintCount > 0 || !x && B.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((Ee = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Ee.width) || 0) !== U || Number(((We = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : We.height) || 0) !== ve) && (n._paintLayerSyncBlankSurface = f(U, ve)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, U, ve));
          const ce = C || B.totalPaintCount > 0 && ((ie = n._paintLayerSyncBlankSurface) == null ? void 0 : ie.canvas) || null, De = x || B.totalMaskCount > 0 && ((ke = n._paintLayerSyncBlankSurface) == null ? void 0 : ke.canvas) || null;
          if (!ce && !De) return;
          let je = null, I = null;
          const me = [];
          if (B.totalPaintCount > 0) {
            je = await be(ce, `pano_paint_${T}.png`);
            for (const Le of D) {
              const Re = String(Le || "").trim();
              if (!Re) continue;
              const Ue = ((b = (Me = n.paintEngine) == null ? void 0 : Me.getGroupDisplayCanvas) == null ? void 0 : b.call(Me, Re)) || null;
              if (!Ue) continue;
              const Be = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ze = await be(Ue, `pano_group_${T}_${Be}.png`);
              Ze && me.push({
                id: Re,
                actionGroupId: Re,
                image: Ze
              });
            }
          }
          B.totalMaskCount > 0 && (I = await be(De, `pano_mask_${T}.png`)), A === N() && (l.painting_layer = {
            paint: je,
            mask: I,
            groups: me,
            revision: A
          }, Pe = A, p());
        } catch (D) {
          throw D;
        } finally {
          Fe = !1;
        }
      }
    })();
    return Us.set(T, ne), ne.finally(() => {
      Us.get(T) === ne && Us.delete(T);
    }), ne;
  }
  function k(T) {
    var Z;
    const q = ((Z = n.paintEngine) == null ? void 0 : Z.getMaskDisplayCanvas()) || null;
    if (!q) return T;
    const ne = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, A = T.reduce((re, ae) => Math.max(re, Number((ae == null ? void 0 : ae.zIndex) || 0)), -1), B = (Array.isArray(l.stickers) ? l.stickers : []).reduce((re, ae) => Math.max(re, Number((ae == null ? void 0 : ae.z_index) || 0)), -1), K = Math.max(A, B);
    return T.push({
      id: "mask_display",
      source: q,
      revision: ne,
      zIndex: K + 1,
      opacity: 1,
      visible: !0
    }), T;
  }
  function O() {
    var A, B;
    const T = S(!0), q = Oe(), ne = [];
    for (const K of T) {
      if ((K == null ? void 0 : K.type) === "strokeGroup") {
        const Z = String(K.actionGroupId || K.id || "");
        if (!Z) continue;
        const re = ((B = (A = n.paintEngine) == null ? void 0 : A.getGroupDisplayCanvas) == null ? void 0 : B.call(A, Z)) || null;
        if (!re) continue;
        ne.push({
          id: `paint_group:${Z}`,
          source: re,
          revision: `${v()}:${Z}`,
          zIndex: Number((K == null ? void 0 : K.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((K == null ? void 0 : K.type) === "rasterObject") {
        const Z = K.item || null, re = z((Z == null ? void 0 : Z.id) || K.id || "");
        if (!re) continue;
        const ae = de(Z, () => F());
        if (!ae) continue;
        const ye = j(ae, K, q), xe = (Z == null ? void 0 : Z.transform) || {};
        ne.push({
          id: `raster:${re}`,
          source: ye,
          revision: [
            N(),
            (q == null ? void 0 : q.key) || "",
            re,
            Number(xe.du || 0).toFixed(6),
            Number(xe.dv || 0).toFixed(6),
            Number(xe.rot_deg || 0).toFixed(3),
            Number(xe.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((K == null ? void 0 : K.z_index) || 0),
          opacity: 1,
          visible: (Z == null ? void 0 : Z.visible) !== !1
        });
      }
    }
    return k(ne);
  }
  function Y() {
    return g() ? O().filter((T) => T.visible !== !1).map((T) => ({ id: T.id, media: T.source, revision: T.revision, opacity: T.opacity, zIndex: T.zIndex })) : [];
  }
  function ge() {
    l.painting_layer !== null && (l.painting_layer = null), Pe = "";
  }
  return {
    connect(T) {
      ({
        commitState: p,
        createRasterSurface: f,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: m,
        getDesiredPaintTargetDescriptor: _,
        getDisplayPaintRevisionKey: v,
        getOrderedDisplayListObjects: S,
        getOrderedPaintGroupIds: w,
        getPaintingCompositeRevisionKey: N,
        getPaintingRevisionKey: W,
        getStrokeGroupStrokes: R,
        inverseTransformErpPointAround: L,
        paintingShown: g,
        parseRasterObjectSelectionId: z,
        processFreehandPoints: H,
        rasterizeStrokeToSurface: ee,
        rebuildPaintEngineIfNeeded: oe,
        requestDraw: F,
        screenPosToErpPoint: G,
        shortestWrappedDelta: X
      } = T);
    },
    getSharedLivePaintSurface: Ne,
    getLivePaintRevisionSuffix: _e,
    isPaintCompositeInteraction: ue,
    hitRasterObjectAt: V,
    invalidateLivePaintPreviewCaches: ze,
    buildRasterObjectEditCanvas: de,
    needsPaintingLayerSync: te,
    syncPaintingLayerAsync: Ae,
    invalidatePaintingLayerState: ge,
    buildEditorViewPaintLayers: Y
  };
}
function hE(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(le) {
    return !le || typeof le != "object" ? { x: 0, y: 0 } : { x: Number((le == null ? void 0 : le.u) || 0), y: Number((le == null ? void 0 : le.v) || 0) };
  }
  function p(le, j, de, be = {}) {
    return { ...{
      ...le,
      t: Number((le == null ? void 0 : le.t) || 0),
      widthScale: m(le, "widthScale", 1),
      pressureLike: m(le, "pressureLike", 1)
    }, ...be, u: j, v: de };
  }
  function f(le, j = !1) {
    return j ? 12e-4 : 18e-4;
  }
  function d(le, j, de = !1) {
    if (!Array.isArray(le) || !le.length) return [];
    const be = String((j == null ? void 0 : j.kind) || "") === "ERP_GLOBAL", Pe = /* @__PURE__ */ new WeakMap();
    if (be) {
      let A = null;
      le.forEach((B) => {
        const K = Number((B == null ? void 0 : B.u) || 0), Z = Number((B == null ? void 0 : B.v) || 0), re = (K % 1 + 1) % 1, ae = A == null ? re : A + s(re, (A % 1 + 1) % 1);
        Pe.set(B, { x: ae, y: Z }), A = ae;
      });
    }
    const Fe = (A) => !A || typeof A != "object" ? { x: 0, y: 0 } : Pe.get(A) || l(A), te = (A, B, K, Z = {}) => {
      const re = be ? (Number(B) % 1 + 1) % 1 : Number(B), ae = p(A, re, K, Z);
      return Pe.set(ae, { x: Number(B), y: Number(K) }), ae;
    }, Ae = (A, B, K) => {
      const Z = Fe(A), re = Fe(B);
      return te(A, er(Z.x, re.x, K), er(Z.y, re.y, K), {
        t: er(Number((A == null ? void 0 : A.t) || 0), Number((B == null ? void 0 : B.t) || 0), K),
        widthScale: er(m(A, "widthScale", 1), m(B, "widthScale", 1), K),
        pressureLike: er(m(A, "pressureLike", 1), m(B, "pressureLike", 1), K)
      });
    };
    if (le.length === 1) {
      const A = Fe(le[0]);
      return [te(le[0], A.x, A.y)];
    }
    const k = f(j, de), O = (A, B) => {
      const K = [0];
      for (let ie = 1; ie < A.length; ie += 1) {
        const ke = Fe(A[ie - 1]), Me = Fe(A[ie]);
        K.push(K[ie - 1] + Math.hypot(Me.x - ke.x, Me.y - ke.y));
      }
      const Z = K[K.length - 1] || 0;
      if (Z <= 1e-8) {
        const ie = A[0], ke = Fe(ie);
        return [te(ie, ke.x, ke.y)];
      }
      const re = [];
      let ae = 0;
      for (let ie = 0; ie <= Z + 1e-9; ie += B) {
        for (; ae < K.length - 2 && K[ae + 1] < ie; ) ae += 1;
        const ke = K[ae], Me = K[ae + 1], b = Math.max(1e-8, Me - ke);
        re.push(Ae(A[ae], A[ae + 1], Ie((ie - ke) / b, 0, 1)));
      }
      const ye = A[A.length - 1], xe = Fe(ye), Ee = re[re.length - 1], We = Ee ? Fe(Ee) : null;
      return (!We || Math.hypot(We.x - xe.x, We.y - xe.y) > B * 0.35) && re.push(te(ye, xe.x, xe.y)), re;
    }, Y = (A) => {
      if (!Array.isArray(A) || A.length < 3) return A ? A.slice() : [];
      const B = Fe(A[0]), K = [te(A[0], B.x, B.y)];
      for (let ae = 0; ae < A.length - 1; ae += 1) {
        const ye = A[ae], xe = A[ae + 1], Ee = Fe(ye), We = Fe(xe), ie = te(
          ye,
          Ee.x * 0.75 + We.x * 0.25,
          Ee.y * 0.75 + We.y * 0.25,
          {
            t: Number(ye.t || 0) * 0.75 + Number(xe.t || 0) * 0.25,
            widthScale: m(ye, "widthScale", 1) * 0.75 + m(xe, "widthScale", 1) * 0.25,
            pressureLike: m(ye, "pressureLike", 1) * 0.75 + m(xe, "pressureLike", 1) * 0.25
          }
        ), ke = te(
          ye,
          Ee.x * 0.25 + We.x * 0.75,
          Ee.y * 0.25 + We.y * 0.75,
          {
            t: Number(ye.t || 0) * 0.25 + Number(xe.t || 0) * 0.75,
            widthScale: m(ye, "widthScale", 1) * 0.25 + m(xe, "widthScale", 1) * 0.75,
            pressureLike: m(ye, "pressureLike", 1) * 0.25 + m(xe, "pressureLike", 1) * 0.75
          }
        );
        K.push(ie, ke);
      }
      const Z = A[A.length - 1], re = Fe(Z);
      return K.push(te(Z, re.x, re.y)), K;
    }, ge = O(le, k);
    if (ge.length < 3) return ge;
    const T = de ? 2 : 1;
    let q = ge.slice();
    for (let A = 0; A < T; A += 1) q = Y(q);
    return O(q, Math.max(k * 0.75, 55e-5));
  }
  function m(le, j, de = 1) {
    const be = Number(le == null ? void 0 : le[j]);
    return Number.isFinite(be) ? Math.max(0, be) : de;
  }
  function _(le) {
    const j = Number(le == null ? void 0 : le.radiusValue);
    if (Number.isFinite(j) && j > 0) {
      const de = String((le == null ? void 0 : le.radiusModel) || "").trim() || "erp_uv_norm";
      return de === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((le == null ? void 0 : le.size) || 10) * 0.5 / 2048)
      } : {
        model: de,
        value: j
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((le == null ? void 0 : le.size) || 10) * 0.5 / 2048)
    };
  }
  function v(le, j, de = {}) {
    const be = wn({ label: "editor.raster-surface" });
    be.width = Math.max(1, Math.round(le)), be.height = Math.max(1, Math.round(j));
    const Pe = be.getContext("2d", de.readback ? { willReadFrequently: !0 } : void 0);
    return Pe && (Pe.clearRect(0, 0, be.width, be.height), Pe.imageSmoothingEnabled = !0), { canvas: be, ctx: Pe };
  }
  function S() {
    const le = F();
    return `${String(t.paintStrokeRevision)}:${le.width}x${le.height}`;
  }
  function w() {
    const le = F();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${le.width}x${le.height}`;
  }
  function N() {
    const le = i(), j = w();
    return le ? `${j}:${le}` : j;
  }
  function W() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function R() {
    t.paintCompositeRevision += 1;
  }
  function L() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function g() {
    var le, j;
    t.paintEngineRevisionKey = null, (j = (le = t.paintEngine) == null ? void 0 : le.rebuildCommitted) == null || j.call(le, n), t.paintEngineRevisionKey = S();
  }
  function z() {
    L(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function H({ rebuildPaintEngine: le = !1 } = {}) {
    o(), W(), z(), le && g();
  }
  function ee() {
    o(), R(), z();
  }
  function oe() {
    var be;
    const le = F(), j = `${le.width}x${le.height}`;
    t.paintEngineDescriptorKey !== j && (t.paintEngine = Bd(le), t.paintEngineDescriptorKey = j, t.paintEngineRevisionKey = "");
    const de = S();
    t.paintEngineRevisionKey !== de && (t.paintEngineRevisionKey = de, (be = t.paintEngine) == null || be.rebuildCommitted(n));
  }
  function F() {
    const le = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: le,
      height: Math.max(1, Math.round(le * 0.5))
    };
  }
  function G() {
    return F();
  }
  function X(le, j, de, be, Pe = null) {
    const Fe = _(le), te = m(j, "widthScale", 1) * m(j, "pressureLike", 1);
    return Fe.model === "erp_uv_norm" ? Math.max(0.5, Fe.value * de * te) : Fe.model === "world_angle" ? Pe ? Math.max(0.5, Fe.value / Math.max(1e-6, Number(Pe.hFOV_deg || 90) * Rr) * de * te) : Math.max(0.5, Fe.value / (2 * Math.PI) * de * te) : Math.max(0.5, Number((le == null ? void 0 : le.size) || 10) * 0.5 * te);
  }
  function ue(le, j, de = {}) {
    const be = String((j == null ? void 0 : j.layerKind) || "paint"), Pe = String((j == null ? void 0 : j.toolKind) || "pen"), Fe = de.preview === !0, te = Fe ? 0.78 : 1;
    if (le.globalAlpha = Pe === "marker" ? 0.7 * te : 1, be === "mask") {
      le.fillStyle = Fe ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Pe === "eraser") {
      le.globalCompositeOperation = "destination-out", le.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const Ae = String((j == null ? void 0 : j.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (j == null ? void 0 : j.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = Fe ? Math.max(0.28, Number(Ae.a ?? 1) * 0.88) : Math.max(0.12, Number(Ae.a ?? 1));
    le.fillStyle = `rgba(${Math.round(Number(Ae.r || 0) * 255)}, ${Math.round(Number(Ae.g || 0) * 255)}, ${Math.round(Number(Ae.b || 0) * 255)}, ${k})`;
  }
  function Ne(le, j, de) {
    const be = Math.max(0.5, Math.min(de, Number((j == null ? void 0 : j.radiusPx) || 0.5)));
    !Number.isFinite(j == null ? void 0 : j.x) || !Number.isFinite(j == null ? void 0 : j.y) || !Number.isFinite(be) || (le.beginPath(), le.arc(Number(j.x || 0), Number(j.y || 0), be, 0, Math.PI * 2), le.fill());
  }
  function _e(le, j, de, be, Pe = {}) {
    if (!le || !Array.isArray(j) || !j.length) return;
    const Fe = Math.max(be.w, be.h) * 0.25;
    le.save(), ue(le, de, Pe);
    const te = (Ae) => Ne(le, Ae, Fe);
    if (j.length === 1) {
      te(j[0]), le.restore();
      return;
    }
    for (let Ae = 0; Ae < j.length - 1; Ae += 1) {
      const k = j[Ae], O = j[Ae + 1];
      if (!k || !O) continue;
      const Y = Number(k.x || 0), ge = Number(k.y || 0), T = Number(O.x || 0), q = Number(O.y || 0), ne = Math.max(0.5, Math.min(Fe, Number(k.radiusPx || 0.5))), A = Math.max(0.5, Math.min(Fe, Number(O.radiusPx || 0.5)));
      if (!Number.isFinite(Y) || !Number.isFinite(ge) || !Number.isFinite(T) || !Number.isFinite(q) || !Number.isFinite(ne) || !Number.isFinite(A)) continue;
      const B = T - Y, K = q - ge, Z = Math.hypot(B, K);
      if (!Number.isFinite(Z) || Z < 1e-6) {
        te(k);
        continue;
      }
      if (Z > Math.max(be.w, be.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ne, A)), ae = Math.max(0.35, Math.min(re * 0.4, 2.25)), ye = Math.max(1, Math.ceil(Z / ae));
      for (let xe = 0; xe <= ye; xe += 1) {
        const Ee = xe / ye;
        te({
          x: er(Y, T, Ee),
          y: er(ge, q, Ee),
          radiusPx: er(ne, A, Ee)
        });
      }
    }
    te(j[j.length - 1]), le.restore();
  }
  function pe(le, j, de, be) {
    _e(le, j, de, be, { preview: !1 });
  }
  function J(le, j, de, be, Pe) {
    var Ae, k, O, Y;
    if (!le || !Array.isArray(j) || j.length < 3) return;
    const Fe = "u", te = "v";
    if (le.save(), String((de == null ? void 0 : de.layerKind) || "") === "mask")
      le.fillStyle = "rgba(255,255,255,1)";
    else if (String((de == null ? void 0 : de.toolKind) || "") === "eraser")
      le.globalCompositeOperation = "destination-out", le.fillStyle = "rgba(0,0,0,1)";
    else {
      const ge = (de == null ? void 0 : de.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      le.fillStyle = `rgba(${Math.round(Number(ge.r || 0) * 255)}, ${Math.round(Number(ge.g || 0) * 255)}, ${Math.round(Number(ge.b || 0) * 255)}, ${Number(ge.a ?? 1)})`;
    }
    le.beginPath(), le.moveTo(Number(((Ae = j[0]) == null ? void 0 : Ae[Fe]) || 0) * be.w, Number(((k = j[0]) == null ? void 0 : k[te]) || 0) * be.h);
    for (let ge = 1; ge < j.length; ge += 1)
      le.lineTo(Number(((O = j[ge]) == null ? void 0 : O[Fe]) || 0) * be.w, Number(((Y = j[ge]) == null ? void 0 : Y[te]) || 0) * be.h);
    le.closePath(), le.fill(), le.restore();
  }
  function E(le) {
    const j = (le == null ? void 0 : le.geometry) || null;
    return j ? String(j.geometryKind || "") === "lasso_fill" ? Array.isArray(j.points) ? j.points : [] : Array.isArray(j.processedPoints) && j.processedPoints.length ? j.processedPoints : Array.isArray(j.rawPoints) && j.rawPoints.length ? j.rawPoints : Array.isArray(j.points) ? j.points : [] : [];
  }
  function V(le, j) {
    const de = E(le);
    return !Array.isArray(de) || !de.length ? [] : de.map((be) => ({
      x: Number((be == null ? void 0 : be.u) || 0) * Number((j == null ? void 0 : j.w) || 1),
      y: Number((be == null ? void 0 : be.v) || 0) * Number((j == null ? void 0 : j.h) || 1),
      radiusPx: X(le, be, Number((j == null ? void 0 : j.w) || 1), Number((j == null ? void 0 : j.h) || 1))
    }));
  }
  function he(le, j, de = null) {
    var Ae, k, O, Y;
    if (!(le != null && le.ctx) || !j) return !1;
    const be = de || { w: Number(((Ae = le.canvas) == null ? void 0 : Ae.width) || 0), h: Number(((k = le.canvas) == null ? void 0 : k.height) || 0) }, Pe = String((j == null ? void 0 : j.toolKind) || "") === "eraser" ? {
      ...j,
      layerKind: "mask",
      toolKind: String(((O = j == null ? void 0 : j.geometry) == null ? void 0 : O.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : j;
    if (String(((Y = j == null ? void 0 : j.geometry) == null ? void 0 : Y.geometryKind) || "") === "lasso_fill")
      return J(le.ctx, E(Pe), Pe, be), !0;
    const te = V(Pe, be);
    return te.length ? (pe(le.ctx, te, Pe, be), !0) : !1;
  }
  function Oe(le, j, de, be = 8) {
    const Pe = new Uint8Array(j * de), Fe = [], te = new Int32Array(j * de), Ae = new Int32Array(j * de);
    for (let k = 0; k < de; k += 1)
      for (let O = 0; O < j; O += 1) {
        const Y = k * j + O;
        if (Pe[Y] || le[Y] <= be) continue;
        let ge = 0, T = 0;
        te[T] = O, Ae[T] = k, T += 1, Pe[Y] = 1;
        const q = [];
        let ne = O, A = k, B = O, K = k;
        for (; ge < T; ) {
          const Z = te[ge], re = Ae[ge];
          ge += 1, q.push({ x: Z, y: re }), Z < ne && (ne = Z), re < A && (A = re), Z > B && (B = Z), re > K && (K = re);
          const ae = [
            [(Z - 1 + j) % j, re],
            [(Z + 1) % j, re],
            [Z, re - 1],
            [Z, re + 1]
          ];
          for (const [ye, xe] of ae) {
            if (xe < 0 || xe >= de) continue;
            const Ee = xe * j + ye;
            Pe[Ee] || le[Ee] <= be || (Pe[Ee] = 1, te[T] = ye, Ae[T] = xe, T += 1);
          }
        }
        Fe.push({ pixels: q, minX: ne, minY: A, maxX: B, maxY: K });
      }
    return Fe;
  }
  function ze(le, j) {
    const de = [...new Set((Array.isArray(le == null ? void 0 : le.pixels) ? le.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, O) => k - O);
    if (!de.length) return null;
    if (de.length === 1)
      return { startX: de[0], widthPx: 1 };
    let be = -1, Pe = 0;
    for (let k = 0; k < de.length; k += 1) {
      const O = de[k], ge = (k === de.length - 1 ? de[0] + j : de[k + 1]) - O - 1;
      ge > be && (be = ge, Pe = k);
    }
    const Fe = (de[(Pe + 1) % de.length] + j) % j;
    let te = 1 / 0, Ae = -1 / 0;
    for (const k of de) {
      const O = (k - Fe + j) % j;
      te = Math.min(te, O), Ae = Math.max(Ae, O);
    }
    return {
      startX: Fe,
      widthPx: Math.max(1, Ae - te + 1)
    };
  }
  function Xe(le, j, de = {}) {
    var O;
    const be = Number((le == null ? void 0 : le.width) || 0), Pe = Number((le == null ? void 0 : le.height) || 0), Fe = (O = le == null ? void 0 : le.getContext) == null ? void 0 : O.call(le, "2d");
    if (!Fe || be < 1 || Pe < 1) return [];
    const te = Fe.getImageData(0, 0, be, Pe), Ae = new Uint8Array(be * Pe);
    for (let Y = 0; Y < Ae.length; Y += 1) Ae[Y] = te.data[Y * 4 + 3];
    return Oe(Ae, be, Pe, 8).map((Y, ge) => {
      const T = ze(Y, be);
      if (!T) return null;
      const q = Number(T.widthPx || 0), ne = Y.maxY - Y.minY + 1, A = Number(T.startX || 0), B = wn({ label: "editor.lasso-fill" });
      B.width = q, B.height = ne;
      const K = B.getContext("2d");
      if (!K) return null;
      const Z = K.createImageData(q, ne);
      return Y.pixels.forEach(({ x: re, y: ae }) => {
        const ye = (ae * be + re) * 4, xe = (Number(re || 0) - A + be) % be, Ee = ((ae - Y.minY) * q + xe) * 4;
        Z.data[Ee + 0] = te.data[ye + 0], Z.data[Ee + 1] = te.data[ye + 1], Z.data[Ee + 2] = te.data[ye + 2], Z.data[Ee + 3] = te.data[ye + 3];
      }), K.putImageData(Z, 0, 0), {
        id: Eo("raster"),
        type: "raster_frozen",
        layerKind: j === "mask" ? "mask" : "paint",
        z_index: Number((de == null ? void 0 : de.z_index) || 0) + ge * 1e-3,
        locked: (de == null ? void 0 : de.locked) === !0,
        bbox: {
          u0: 0,
          v0: Y.minY / Pe,
          u1: q / be,
          v1: (Y.maxY + 1) / Pe
        },
        rasterDataUrl: B.toDataURL("image/png"),
        transform: {
          du: A / be,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(le) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = le);
    },
    processFreehandPoints: d,
    createRasterSurface: v,
    getPaintingRevisionKey: S,
    getPaintingCompositeRevisionKey: w,
    getDisplayPaintRevisionKey: N,
    refreshPaintEngineRevisionCache: g,
    markObjectVisualsDirty: z,
    markPaintStrokeVisualsDirty: H,
    markPaintCompositeVisualsDirty: ee,
    rebuildPaintEngineIfNeeded: oe,
    getDesiredPaintTargetDescriptor: F,
    getActivePaintTargetDescriptor: G,
    rasterizeStrokeToSurface: he,
    createRasterFrozenObjectsFromCanvas: Xe
  };
}
function mE(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, p, f, d, m, _;
  function v(oe, F = null) {
    var G;
    if (oe && typeof oe == "object" && !Array.isArray(oe)) return oe;
    if (Array.isArray(oe) && oe.length > 0) {
      const X = oe[0];
      if (X && typeof X == "object" && !Array.isArray(X)) return X;
    }
    if (Array.isArray(F) && F.length > 0) {
      const X = (G = F[0]) == null ? void 0 : G.parsed_state;
      if (X && typeof X == "object" && !Array.isArray(X))
        return {
          yaw_deg: Number(X.yaw_deg || 0),
          pitch_deg: Number(X.pitch_deg || 0),
          hFOV_deg: Number(X.hFOV_deg || 30),
          rot_deg: Number(X.roll_deg || 0)
        };
    }
    return null;
  }
  function S(oe, F, G) {
    const X = Math.max(1, Number(F || 1)), ue = Math.max(1, Number(G || 1)), Ne = Ie(Number(oe || 30), 0.1, 179) * Rr, _e = 2 * Math.atan(Math.tan(Ne * 0.5) * (ue / X));
    return Ie(_e * Yi, 0.1, 179);
  }
  function w(oe) {
    const F = String(oe || "").trim();
    if (!F) return null;
    try {
      const G = JSON.parse(F);
      if (!G || typeof G != "object" || String(G.kind || "") !== "pano_sticker_state") return null;
      const X = G.version;
      let ue = null;
      if (typeof X == "number" && Number.isInteger(X) ? ue = X : typeof X == "string" && /^\d+$/.test(X) && (ue = Number.parseInt(X, 10)), ue !== 1) return null;
      const Ne = G.pose;
      if (!Ne || typeof Ne != "object") return null;
      const _e = Number(Ne.yaw_deg), pe = Number(Ne.pitch_deg), J = Number(Ne.roll_deg), E = Number(Ne.hFOV_deg);
      if (![_e, pe, J, E].every((ze) => Number.isFinite(ze))) return null;
      let V = ((_e + 180) % 360 + 360) % 360 - 180;
      Object.is(V, -0) && (V = 0);
      const he = {
        yaw_deg: V,
        pitch_deg: Ie(pe, -89.9, 89.9),
        roll_deg: J,
        hFOV_deg: Ie(E, 0.1, 179)
      }, Oe = Number(G.source_aspect);
      return Number.isFinite(Oe) && Oe > 0 && (he.source_aspect = Oe), he;
    } catch {
      return null;
    }
  }
  function N(oe) {
    const F = Number(oe == null ? void 0 : oe.yaw_deg), G = Number(oe == null ? void 0 : oe.pitch_deg), X = Number((oe == null ? void 0 : oe.roll_deg) ?? (oe == null ? void 0 : oe.rot_deg)), ue = Number(oe == null ? void 0 : oe.hFOV_deg), Ne = io(oe);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Wt(Number.isFinite(F) ? F : 0),
        pitch_deg: Ie(Number.isFinite(G) ? G : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(X) ? X : 0,
        hFOV_deg: Ie(Number.isFinite(ue) ? ue : 90, 0.1, 179)
      },
      source_aspect: Ne
    };
  }
  function W(oe) {
    var pe;
    if (!oe || typeof oe != "object") return N(null);
    const F = Number(oe == null ? void 0 : oe.yaw_deg), G = Number(oe == null ? void 0 : oe.pitch_deg), X = Number((oe == null ? void 0 : oe.roll_deg) ?? (oe == null ? void 0 : oe.rot_deg)), ue = Number(oe == null ? void 0 : oe.hFOV_deg), Ne = Number(oe == null ? void 0 : oe.vFOV_deg);
    let _e = 1;
    if (Number.isFinite(ue) && Number.isFinite(Ne)) {
      const J = Ie(ue, 0.1, 179) * Rr, E = Ie(Ne, 0.1, 179) * Rr, V = Math.tan(E * 0.5);
      if (Math.abs(V) > 1e-6) {
        const he = Math.tan(J * 0.5) / V;
        Number.isFinite(he) && he > 0 && (_e = he);
      }
    }
    if (oe != null && oe.asset_id && ((pe = o == null ? void 0 : o.assets) != null && pe[oe.asset_id])) {
      const J = o.assets[oe.asset_id], E = Number((J == null ? void 0 : J.w) || 0), V = Number((J == null ? void 0 : J.h) || 0);
      E > 0 && V > 0 && (_e = E / V);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Wt(Number.isFinite(F) ? F : 0),
        pitch_deg: Ie(Number.isFinite(G) ? G : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(X) ? X : 0,
        hFOV_deg: Ie(Number.isFinite(ue) ? ue : 30, 0.1, 179)
      },
      source_aspect: _e
    };
  }
  function R(oe) {
    return t.linkedValue(n, oe);
  }
  function L(oe, F, G) {
    const X = oe && typeof oe == "object" ? {
      yaw_deg: Number(oe.yaw_deg || 0),
      pitch_deg: Number(oe.pitch_deg || 0),
      roll_deg: Number(oe.rot_deg ?? oe.roll_deg ?? 0),
      hFOV_deg: Number(oe.hFOV_deg || 30)
    } : w(F);
    if (X) {
      const _e = Number((G == null ? void 0 : G.naturalWidth) || (G == null ? void 0 : G.width) || X.source_aspect || 1), pe = Number((G == null ? void 0 : G.naturalHeight) || (G == null ? void 0 : G.height) || 1);
      return {
        yaw_deg: Number(X.yaw_deg || 0),
        pitch_deg: Number(X.pitch_deg || 0),
        hFOV_deg: Number(X.hFOV_deg || 30),
        vFOV_deg: S(X.hFOV_deg, _e, pe),
        rot_deg: Number(X.roll_deg || 0)
      };
    }
    const ue = Number((G == null ? void 0 : G.naturalWidth) || (G == null ? void 0 : G.width) || 1), Ne = Number((G == null ? void 0 : G.naturalHeight) || (G == null ? void 0 : G.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: S(30, ue, Ne),
      rot_deg: 0
    };
  }
  function g() {
    const oe = l(() => {
      ni(n, "image-loaded");
    }), F = hn(n, "external-sticker") ? v(p("pano_sticker_input_pose"), null) : null;
    return Ny(o, My(n, { pose: F, image: oe }));
  }
  function z() {
    var pe;
    const oe = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((J) => String((J == null ? void 0 : J.name) || "") === "sticker_image") : -1, F = oe >= 0 ? ((pe = n.getInputLink(oe)) == null ? void 0 : pe.id) ?? null : null, G = l(() => {
      ni(n, "image-loaded");
    }), X = v(p("pano_sticker_input_pose"), null), ue = R("sticker_state"), Ne = t.externalStateHash(n, ue), _e = F == null ? null : L(X, ue, G);
    return ky(o, {
      connected: F != null,
      linkId: F,
      stateHash: Ne,
      pose: _e,
      imageWidth: Number((G == null ? void 0 : G.naturalWidth) || (G == null ? void 0 : G.width) || 0),
      imageHeight: Number((G == null ? void 0 : G.naturalHeight) || (G == null ? void 0 : G.height) || 0)
    });
  }
  function H(oe = "sync") {
    if (a !== "stickers" || i) return;
    const F = n.__panoSceneStateV2 ? g() : z();
    if (F.changed) {
      const G = o.stickers.find(f);
      o.stickers = F.state.stickers, o.active = F.state.active, G && r.selectedId === G.id && !o.stickers.some((X) => X.id === G.id) && (r.selectedId = null, r.selectedIds = []), s(), _(), m();
    }
    d();
  }
  function ee() {
    const oe = Array.isArray(o.stickers) ? o.stickers : [], F = [];
    for (const G of oe)
      f(G) && (G.visible = !1, F.push(G));
    return F;
  }
  return {
    connect(oe) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: p,
        isExternalSticker: f,
        requestDraw: d,
        updateSelectionMenu: m,
        updateSidePanel: _
      } = oe);
    },
    computeStickerVFov: S,
    buildCanonicalCutoutStickerState: N,
    buildCanonicalSelectedStickerState: W,
    reconcileExternalStickerFromInputs: H,
    collectExternalStickersForClearAll: ee
  };
}
function gE(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: p,
    stateV2: f,
    studio: d,
    viewController: m
  } = e;
  let _, v, S, w, N, W, R, L, g, z = null;
  function H(A, B = null) {
    const K = V();
    R(() => {
      i.viewTransition = QP(K, A, performance.now(), { scale: Pe(), end: B });
    }), !i.viewTransition && B && ee(B), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0, L(), N({ localOnly: !0, reason: Mt.VIEW });
  }
  function ee(A) {
    J(td({ ...pe(), moved: A.moved }, A.mode, he())), s.backgroundDirty = !0;
  }
  function oe() {
    i.viewTransition && (i.viewTransition = null, L());
  }
  function F(A, B) {
    H({ ...V(), yaw_deg: A, pitch_deg: B });
  }
  function G() {
    return !d || ze() && !w();
  }
  function X() {
    return i.mode === "pano" && ue();
  }
  function ue() {
    return f && _k({ sceneLinked: l && !!bf(a).scene, files: W(), stickers: p.stickers });
  }
  function Ne() {
    return i.spaceMode === "6dof" && X();
  }
  function _e() {
    var A, B, K;
    return hN((K = (B = (A = t.ui) == null ? void 0 : A.settings) == null ? void 0 : B.getSettingValue) == null ? void 0 : K.call(B, Gy));
  }
  function pe() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function J(A) {
    i.spaceMode = A.mode, i.viewPosition = A.position, i.viewMoved = A.moved;
  }
  function E(A) {
    var K;
    const B = t2(i.spaceMode, i.viewTransition, A);
    if (B !== "keep") {
      if (B === "return") {
        H({ ...V(), position: he(), distance: ((K = de()) == null ? void 0 : K.radius) || yr }, { mode: A, moved: !1 });
        return;
      }
      oe(), J(td({ ...pe(), position: V().position }, A, he())), s.backgroundDirty = !0, L(), N({ localOnly: !0, reason: Mt.VIEW });
    }
  }
  function V() {
    var K;
    const A = i.viewMoved ? i.viewDistance : ((K = de()) == null ? void 0 : K.radius) || yr, B = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: A };
    return mk(i.spaceMode, B, he());
  }
  function he() {
    return ze() ? j().position : [0, 0, 0];
  }
  function Oe() {
    return r && p.camera !== null;
  }
  function ze() {
    return Oe() && (!d || p.camera.visible);
  }
  function Xe() {
    return p.painting_visible !== !1;
  }
  function le(A) {
    return A.visible && Xo(A.clip, i.frame);
  }
  function j() {
    return ef(p.camera, i.frame);
  }
  function de() {
    var B;
    const A = _();
    return ((B = A.space ?? A.content) == null ? void 0 : B.sphere) ?? null;
  }
  function be(A) {
    i.viewPosition = A.position, i.viewYaw = A.yaw_deg, i.viewPitch = A.pitch_deg, i.viewDistance = A.distance, i.viewMoved = !0, s.backgroundDirty = !0, N({ localOnly: !0, reason: Mt.VIEW });
  }
  function Pe() {
    var A;
    return ((A = de()) == null ? void 0 : A.radius) || yr;
  }
  function Fe() {
    var xe;
    const A = _().space, B = v(), K = i.worldSelectedId || i.selectedId, Z = B.stickers.findIndex((Ee) => Ee.id === K), re = Z < 0 ? null : {
      sticker: B.stickers[Z],
      value: lc(B, i.frame).stickers[Z],
      plane: A.stickers.find((Ee) => Ee.id === K) ?? null,
      item: ((xe = A.sticker) == null ? void 0 : xe.id) === K && A.sticker.url ? { kind: A.sticker.kind, box: o.sceneBox(A.sticker.url) } : null
    }, ae = S() ? T() : Nk(de(), re);
    if (!ae) return;
    const ye = V();
    i.viewDistance = ye.distance, i.viewMoved = !0, H(B0(ye, ae, n.width, n.height));
  }
  function te(A) {
    return o.pickSurface(ne(), A.x, A.y, n.width, n.height);
  }
  function Ae(A, B) {
    var K;
    return nd(A, B, i.viewMoved ? null : (K = de()) == null ? void 0 : K.center, Pe());
  }
  function k() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function O(A, B) {
    const K = performance.now(), Z = { x: A.x, y: A.y, time: K, key: o.contentRevision(), view: k() };
    if (!W0(z, Z)) {
      const ae = te(A);
      z = { ...Z, cost: performance.now() - K, hit: ae };
    }
    const re = V();
    be(K0(re, Ae(re, z.hit), B, Pe())), z.view = k(), z.wheelTime = K;
  }
  function Y(A, B, K) {
    const Z = V();
    i.interaction = A === "orbit" ? { kind: "space_orbit", last: B, pivot: Ae(Z, te(B)) } : { kind: "space_pan", last: B, depth: G0(Z, Pe()) }, g(B), n.setPointerCapture(K);
  }
  function ge(A) {
    return A * 0.2;
  }
  function T() {
    return { center: j().position, radius: ge(Pe()) };
  }
  function q(A, B) {
    const { yaw_deg: K, pitch_deg: Z } = q0(A.position, B);
    return { ...A, yaw_deg: K, pitch_deg: Z };
  }
  function ne() {
    return mf(V(), n.width, n.height, de());
  }
  return {
    connect(A) {
      ({
        editorViewInput: _,
        editorViewSceneState: v,
        isCameraSelected: S,
        isErpCamera: w,
        requestDraw: N,
        sceneFiles: W,
        startAnimation: R,
        syncFloatingViewButtonState: L,
        updateCursor: g
      } = A);
    },
    transitionView: H,
    applyViewTransitionEnd: ee,
    cancelViewTransition: oe,
    turnViewTo: F,
    cameraPreviewShown: G,
    isSpaceView: X,
    hasSpaceContent: ue,
    isFreeSpaceView: Ne,
    viewControls: _e,
    spaceModeState: pe,
    applySpaceMode: J,
    setSpaceMode: E,
    spaceViewState: V,
    spaceOrigin: he,
    hasCamera: Oe,
    cameraShoots: ze,
    paintingShown: Xe,
    sceneStickerShown: le,
    cutoutCamera: j,
    contentSphere: de,
    setSpaceView: be,
    spaceScale: Pe,
    frameSpaceContent: Fe,
    zoomSpaceAt: O,
    startSpaceDrag: Y,
    currentSpaceCamera: ne,
    cameraFrustumLength: ge,
    cameraSphere: T,
    lookingAt: q
  };
}
function yE(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: p,
    videoEl: f
  } = e;
  let d, m, _, v, S, w, N, W, R, L, g, z, H, ee, oe, F, G, X, ue, Ne, _e, pe, J, E, V, he, Oe, ze, Xe, le, j, de, be = { revision: -1, sceneState: null }, Pe = null;
  function Fe() {
    return Pe || (Pe = k()), Pe;
  }
  function te() {
    Pe = null;
  }
  function Ae() {
    return be.sceneState;
  }
  function k() {
    const ye = g(), xe = m(), Ee = { ...s.assets };
    for (const ce of l ? [] : s.stickers) {
      const De = String((ce == null ? void 0 : ce.asset_id) || "");
      De && !Ee[De] && i.has(De) && (Ee[De] = { type: "comfy_image", filename: De });
    }
    const We = l ? s.stickers.map((ce) => ue(ce) ? { ...ce, source: { kind: "file", filename: ze(ce) } } : ce) : s.stickers;
    be.revision !== a.stateRevision && (be = { revision: a.stateRevision, sceneState: Dr({ ...s, stickers: We, assets: Ee, painting: null }) }), l && O(be.sceneState);
    const ie = lc(be.sceneState, r.frame), ke = _e ? R() : null, Me = (ce) => {
      if (l && !ce.visible) return null;
      if (_e && F(ce)) return ke;
      const De = H(ce);
      return De ? { media: De, revision: z(De) } : null;
    }, b = ny(be.sceneState, r.frame, s.stickers, { media: Me, paintLayers: xe, evaluated: ie }), D = ye && (ye === f || ye === p) ? f.dataset.panoSrc : ye, u = oe(ye) ? { media: ye, revision: z(ye), coverage: Rn(s.coverage), source: D } : null, C = ee(), x = gk(E(), C, V());
    x.mode !== r.spaceMode && S(), d(x);
    const U = C ? Y(be.sceneState, ie, Me) : null, ve = X() ? { ...U, ...ge(U) } : null;
    return { background: u, layers: b, space: ve, content: U };
  }
  function O(ye) {
    const xe = new Map(s.stickers.map((Ee) => [Ee.id, Ee.clip]));
    ye.scene.clip = { ...s.scene.clip };
    for (const Ee of ye.stickers) {
      const We = xe.get(Ee.id);
      We && (Ee.clip = { ...We });
    }
  }
  function Y(ye, xe, Ee) {
    const We = pe(), ie = X0(We, xe.scene), ke = ie != null && ie.url ? n.sceneBox(ie.url) : null, Me = ke && od(ie.kind, ke), b = Oe(), D = Sk(b, ye, xe), u = D != null && D.url ? n.sceneBox(D.url) : null, C = u ? [{ box: od(D.kind, u), value: D.value }] : [], x = Wk(ye, r.frame, s.stickers, { media: Ee, evaluated: xe }), U = sd(kk(xe, Me, x, C));
    return {
      evaluated: xe,
      sceneUrls: We ? We.urls.filter(Boolean) : [],
      scene: ie,
      stickerUrls: wk(b, ye),
      sticker: D,
      stickers: x,
      sphere: U
    };
  }
  function ge(ye) {
    var Ee;
    const xe = ((Ee = ye.sphere) == null ? void 0 : Ee.radius) || yr;
    return {
      gizmo: q() ? B() : T(ye.evaluated),
      grid: r.showGrid && !r.fullscreen ? Rk(xe) : null,
      lines: v() ? A(xe) : []
    };
  }
  function T(ye) {
    const xe = J(), Ee = ye.stickers.find((We) => We.id === (xe == null ? void 0 : xe.id));
    return !de(xe) || !(Ee != null && Ee.active) ? null : { mode: r.gizmoMode, transform: rd(Ee) };
  }
  function q() {
    return v() && r.selectedId === fc;
  }
  let ne = { revision: -1, span: -1, segments: [] };
  function A(ye) {
    const xe = le();
    (ne.revision !== a.stateRevision || ne.span !== xe) && (ne = { revision: a.stateRevision, span: xe, segments: $k(zk(s, xe)) });
    const { segments: Ee } = ne, We = Ee.length ? [{ segments: Ee, color: II }] : [];
    if (!G()) return We;
    const ie = q() ? cb : CI;
    return [...We, { segments: J0(N(), _(ye)), color: ie }];
  }
  function B() {
    return !G() || !q() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: rd({ ...N(), scale: 1 }) };
  }
  function K() {
    const { background: ye, layers: xe, space: Ee } = Fe(), We = t.width, ie = t.height, ke = W({ x: 0, y: 0, w: We, h: ie });
    let Me = !1;
    return !ye && !xe.length && !Ee ? (n.clear(460551), Me = n.ready) : (n.clear(), Me = !!n.render({
      rect: ke,
      camera: Ee ? mf(he(), We, ie, Ee.sphere) : w(),
      background: ye,
      layers: xe,
      space: Ee
    })), Xe(), (r.worldSelectedId || q() || Ne()) && j(), Me;
  }
  function Z(ye) {
    const { content: xe } = Fe();
    return !xe || !ye.position ? ja(ye) : U0(ja(ye), ye.position, L(), xe.sphere);
  }
  function re(ye, xe, Ee, We = null) {
    const { background: ie, layers: ke, content: Me } = Fe();
    if (!ie && !ke.length && !Me) return null;
    const b = Me && xe.position ? Me : null;
    return n.render({ rect: ye, camera: Z(xe), background: ie, layers: ke, space: b, owner: Ee, clearColor: We });
  }
  function ae(ye) {
    return n.clear(460551), !!n.renderUnwrap({ rect: W(ye), ...Fe() });
  }
  return {
    connect(ye) {
      ({
        applySpaceMode: d,
        buildEditorViewPaintLayers: m,
        cameraFrustumLength: _,
        cameraShoots: v,
        cancelViewTransition: S,
        currentViewCamera: w,
        cutoutCamera: N,
        deviceRect: W,
        followPortSticker: R,
        frameViewDistance: L,
        getConnectedErpImage: g,
        getMediaRevisionToken: z,
        getStickerImage: H,
        hasSpaceContent: ee,
        isDecodedImageReady: oe,
        isExternalSticker: F,
        isFreeSpaceView: G,
        isSpaceView: X,
        isUploadingSticker: ue,
        isWorldMenuShown: Ne,
        portVideo: _e,
        sceneFiles: pe,
        selectedWorldSticker: J,
        spaceModeState: E,
        spaceOrigin: V,
        spaceViewState: he,
        stickerFiles: Oe,
        stickerImageKey: ze,
        syncFloatingViewButtonState: Xe,
        timelineSpanFrames: le,
        updateSelectionMenu: j,
        worldStickerEditable: de
      } = ye);
    },
    editorViewInput: Fe,
    endEditorViewFrame: te,
    editorViewSceneState: Ae,
    isCameraSelected: q,
    renderEditorView: K,
    shotViewCamera: Z,
    drawEditorViewShot: re,
    renderEditorViewUnwrap: ae
  };
}
function hb(e, t = !1) {
  const r = Ie(io(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function bE(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    runtime: o,
    shotEditor: a,
    studio: s,
    uiState: l
  } = e;
  let p, f, d, m, _ = null;
  function v(L) {
    if (!n || !L) return !1;
    const g = n.closest(".pano-camera-preview");
    if (!g) return !1;
    const z = Math.round(Number(g.clientWidth || n.clientWidth || 0)), H = Math.round(Number(g.clientHeight || n.clientHeight || 0));
    return Math.abs(z - Number(L.width || 0)) <= 1 && Math.abs(H - Number(L.height || 0)) <= 1;
  }
  function S(L, g) {
    if (i.outputPreviewRect = null, l.outputPreviewToggle.visible = i.mode !== "frame" && !!d(), s && (l.outputPreviewToggle.visible = !1), !a || !l.cameraPreview) return;
    if (i.mode === "frame" || !p()) {
      l.cameraPreview.visible = !1, l.cameraPreview.settled = !1, _ = null;
      return;
    }
    const z = d();
    if (l.cameraPreview.visible = !0, l.cameraPreview.expanded = !!i.outputPreviewExpanded, !z || !r) {
      l.cameraPreview.ready = !1, l.cameraPreview.settled = !1, l.cameraPreview.width = 220, l.cameraPreview.height = 132, l.cameraPreview.label = z ? "Preview unavailable" : "Add Frame to preview", _ = null;
      return;
    }
    const H = hb(z, !!i.outputPreviewExpanded);
    l.cameraPreview.width = H.width, l.cameraPreview.height = H.height;
    const ee = window.devicePixelRatio || 1, oe = Math.max(1, H.width * ee), F = Math.max(1, H.height * ee), G = Math.min(1, t.width / oe, t.height / F), X = { width: Math.max(1, Math.floor(oe * G)), height: Math.max(1, Math.floor(F * G)) }, ue = [...g].some((pe) => pe !== Mt.VIEW && pe !== Mt.OVERLAY), Ne = !_ || _.width !== X.width || _.height !== X.height || ue;
    if (L && Ne) {
      const pe = f({ x: 0, y: t.height - X.height, w: X.width, h: X.height }, z, "camera_preview");
      _ = pe ? X : null, pe && R(pe);
    }
    if (!_) {
      l.cameraPreview.ready = !1, l.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", l.cameraPreview.settled = !1;
      return;
    }
    const _e = v(H);
    l.cameraPreview.ready = !0, l.cameraPreview.label = _e ? "" : "Loading preview", l.cameraPreview.settled = _e && o.pendingStableLayoutFrames <= 0 && o.hasPresentedFrame;
  }
  function w() {
    _ = null;
  }
  let N = 0, W = !1;
  function R(L) {
    const g = ++N;
    createImageBitmap(L.canvas, L.x, L.y, L.width, L.height).then((z) => {
      var H;
      if (g !== N || !o.running) {
        z.close();
        return;
      }
      (H = r.getContext("bitmaprenderer")) == null || H.transferFromImageBitmap(z);
    }).catch((z) => {
      W || (W = !0, console.error("[PanoramaStickers] camera preview frame failed", z));
    });
  }
  return {
    connect(L) {
      ({
        cameraPreviewShown: p,
        drawEditorViewShot: f,
        getActiveCutoutShot: d,
        getConnectedErpImage: m
      } = L);
    },
    drawCutoutOutputPreview: S,
    forgetCameraPreviewFrame: w
  };
}
function vE(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: p,
    type: f
  } = e;
  let d, m, _, v, S, w, N, W, R, L, g, z, H, ee, oe, F, G, X, ue, Ne, _e, pe, J, E, V, he, Oe, ze, Xe, le, j, de, be, Pe, Fe, te, Ae, k;
  function O(ie) {
    const ke = r.width, Me = r.height, b = ee();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ke, Me), de(), ie && (s.backgroundDirty = !Fe(b)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let u = 0; u <= 16; u += 1) {
        const C = b.x + b.w * u / 16;
        n.beginPath(), n.moveTo(C, b.y), n.lineTo(C, b.y + b.h), n.stroke();
      }
      for (let u = 0; u <= 8; u += 1) {
        const C = b.y + b.h * u / 8;
        n.beginPath(), n.moveTo(b.x, C), n.lineTo(b.x + b.w, C), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(b.x, b.y + b.h / 2), n.lineTo(b.x + b.w, b.y + b.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const D = b.y + b.h * 0.57;
      n.fillText("Left", b.x + b.w * 0.25, D), n.fillText("Front", b.x + b.w * 0.5, D), n.fillText("Right", b.x + b.w * 0.75, D), n.fillText("Back", b.x + 38, D), n.fillText("Back", b.x + b.w - 38, D);
    }
  }
  function Y(ie, ke, Me = 1) {
    let b = !1;
    n.strokeStyle = ke, n.lineWidth = Me, n.beginPath();
    for (const D of ie) {
      const u = ze(D);
      if (!u) {
        b = !1;
        continue;
      }
      b ? n.lineTo(u.x, u.y) : (n.moveTo(u.x, u.y), b = !0);
    }
    n.stroke();
  }
  function ge(ie) {
    const ke = r.width, Me = r.height;
    if (n.clearRect(0, 0, ke, Me), de(), ie && (s.backgroundDirty = !Pe()), i.showGrid && !i.fullscreen && S().space)
      T();
    else if (i.showGrid && !i.fullscreen) {
      for (let D = -180; D <= 180; D += 15) {
        const u = [];
        for (let C = -89; C <= 89; C += 4) u.push(Vn(D, C));
        Y(u, "#3f3f46", D % 90 === 0 ? 1.3 : 1);
      }
      for (let D = -75; D <= 75; D += 15) {
        const u = [];
        for (let C = -180; C <= 180; C += 4) u.push(Vn(C, D));
        Y(u, D === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", D === 0 ? 1.5 : 1);
      }
      const b = [
        { name: "Left", dir: Vn(-90, 0) },
        { name: "Front", dir: Vn(0, 0) },
        { name: "Right", dir: Vn(90, 0) },
        { name: "Back", dir: Vn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", b.forEach((D) => {
        const u = ze(D.dir);
        u && n.fillText(D.name, u.x, u.y + 24);
      });
    }
  }
  function T() {
    const ie = mf(k(), r.width, r.height, m()), ke = ts(ie, [0, 0, 0], r.width, r.height);
    ke && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ke.x, ke.y - 12));
  }
  function q(ie, ke) {
    const Me = Oe(ie), b = Vn(Number(Me.yaw_deg || 0), Number(Me.pitch_deg || 0)), D = i.mode === "unwrap" ? Xe(b) : null, u = D ? D.x : null, C = i.mode === "pano" ? 28 : 20, x = [
      te(ie, 0, C, u),
      te(ie, 1, C, u),
      te(ie, 2, C, u),
      te(ie, 3, C, u)
    ];
    Mf(n, x, { selected: ke });
  }
  function ne(ie, ke = []) {
    if (!(!ie || !Array.isArray(ke) || ke.length < 4)) {
      ie.beginPath(), ie.moveTo(ke[0].x, ke[0].y);
      for (let Me = 1; Me < 4; Me += 1) ie.lineTo(ke[Me].x, ke[Me].y);
      ie.closePath();
    }
  }
  function A(ie, ke, Me) {
    const b = Array.isArray(ie == null ? void 0 : ie.corners) ? ie.corners : [];
    if (b.length < 4) return;
    const D = Ie(Number((ie == null ? void 0 : ie.visibilityAlpha) ?? 1), 0, 1);
    if (D <= 0.01) return;
    const u = n.globalAlpha;
    n.globalAlpha = u * D;
    const C = Me ? "rgba(255, 116, 116, 0.96)" : ke ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", x = Me ? "rgba(255, 89, 89, 0.08)" : ke ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", U = ke ? 3.2 : 2.6;
    ne(n, b), n.fillStyle = x, n.fill(), n.strokeStyle = C, n.lineWidth = U, n.stroke(), n.save(), n.strokeStyle = C, n.lineWidth = ke ? 3.2 : 2.6, n.lineCap = "round";
    const ve = Array.isArray(ie == null ? void 0 : ie.edgeMidpoints) && ie.edgeMidpoints.length >= 4 ? ie.edgeMidpoints : [
      { edge: "top", x: (b[0].x + b[1].x) * 0.5, y: (b[0].y + b[1].y) * 0.5 },
      { edge: "right", x: (b[1].x + b[2].x) * 0.5, y: (b[1].y + b[2].y) * 0.5 },
      { edge: "bottom", x: (b[2].x + b[3].x) * 0.5, y: (b[2].y + b[3].y) * 0.5 },
      { edge: "left", x: (b[3].x + b[0].x) * 0.5, y: (b[3].y + b[0].y) * 0.5 }
    ], ce = { top: "bottom", right: "left", bottom: "top", left: "right" }, De = ke ? 12 : 9;
    ve.forEach((je) => {
      const me = ve.find((Be) => (Be == null ? void 0 : Be.edge) === ce[je == null ? void 0 : je.edge]) || {
        x: (b[0].x + b[1].x + b[2].x + b[3].x) * 0.25,
        y: (b[0].y + b[1].y + b[2].y + b[3].y) * 0.25
      }, Le = me.x - je.x, Re = me.y - je.y, Ue = Math.hypot(Le, Re) || 1;
      n.beginPath(), n.moveTo(je.x, je.y), n.lineTo(je.x + Le / Ue * De, je.y + Re / Ue * De), n.stroke();
    }), n.restore(), n.globalAlpha = u;
  }
  function B(ie, ke, Me, b) {
    const D = Ie(Number((ke == null ? void 0 : ke.visibilityAlpha) ?? 1), 0, 1);
    if (D <= 0.01) return;
    if (J(ie)) {
      A(ke, Me, b);
      return;
    }
    if (E(ie)) {
      const C = n.globalAlpha;
      n.globalAlpha = C * H(ie) * D, i.mode === "frame" ? (n.strokeStyle = Me ? "rgba(250, 250, 250, 0.9)" : b ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = Me ? 2 : 1, ne(n, ke.corners), n.stroke()) : q(ie, Me), n.globalAlpha = C;
      return;
    }
    const u = n.globalAlpha;
    n.globalAlpha = u * D, n.fillStyle = Me ? "rgba(0, 112, 243, 0.24)" : b ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ne(n, ke.corners), n.fill(), n.strokeStyle = Me ? "rgba(255, 255, 255, 1)" : b ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = Me ? 2.8 : 1.9, ne(n, ke.corners), n.stroke(), n.globalAlpha = u;
  }
  function K(ie, ke, Me) {
    if (E(ie)) {
      jy(n, ke, { accent: Me });
      return;
    }
    const b = !(J(ie) && F());
    n.fillStyle = Me, b && ke.corners.forEach((D) => {
      n.beginPath(), n.arc(D.x, D.y, 6.5, 0, Math.PI * 2), n.fill();
    }), b && J(ie) && (n.strokeStyle = Me, n.lineCap = "round", n.lineWidth = 4, ke.edgeMidpoints.forEach((D) => {
      var De, je, I, me;
      const u = (((De = D.b) == null ? void 0 : De.x) ?? D.x) - (((je = D.a) == null ? void 0 : je.x) ?? D.x), C = (((I = D.b) == null ? void 0 : I.y) ?? D.y) - (((me = D.a) == null ? void 0 : me.y) ?? D.y), x = Math.hypot(u, C) || 1, U = u / x, ve = C / x, ce = 10;
      n.beginPath(), n.moveTo(D.x - U * ce, D.y - ve * ce), n.lineTo(D.x + U * ce, D.y + ve * ce), n.stroke();
    }), n.lineCap = "butt"), V(ie) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ke.rotateStemBase.x, ke.rotateStemBase.y), n.lineTo(ke.rotateHandle.x, ke.rotateHandle.y), n.stroke(), n.fillStyle = Me, n.beginPath(), n.arc(ke.rotateHandle.x, ke.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function Z() {
    var u;
    const ie = i.mode === "frame" ? [] : z(), ke = ie.length > 1, Me = l ? N() : L(), b = Me.map((C) => `${String((C == null ? void 0 : C.id) || "")}:${J(C) ? "frame" : Number((C == null ? void 0 : C.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Me || i._sortedItemsCache.orderKey !== b) && (i._sortedItemsCache = {
      src: Me,
      orderKey: b,
      sorted: [...Me]
    });
    const D = i._sortedItemsCache.sorted;
    for (const C of D) {
      const x = i.mode !== "frame" && !ke && Ne(C);
      if (i.mode === "frame" && !x) continue;
      const U = E(C), ve = J(C), ce = ue(C);
      if (!U && !ve || pe(C) && !Ae(C)) continue;
      const De = he(C);
      if (f !== "stickers" && !De.visible)
        continue;
      const je = Ie(Number((De == null ? void 0 : De.visibilityAlpha) ?? 1), 0, 1);
      if (je <= 0.01) continue;
      const I = ve && l && i.mode === "pano" ? Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= I, B(C, De, x, ce), x && De.visible) {
        const me = ce ? "#ff4d4f" : U && G(C) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * je, K(C, De, me), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !w() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const C = i.cutoutPanoFrameVisual, x = Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= x, A(C.geom, C.selected, C.locked), C.selected && K(
        C.item,
        C.geom,
        C.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ke) {
      const C = g(ie);
      if (C != null && C.visible) {
        const x = d(ie) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(C.corners[0].x, C.corners[0].y);
        for (let U = 1; U < C.corners.length; U += 1) n.lineTo(C.corners[U].x, C.corners[U].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = x, C.corners.forEach((U) => {
          n.beginPath(), n.arc(U.x, U.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      ie.forEach((C) => {
        if (!V(C) && !_e(C)) return;
        const x = he(C);
        if (!(x != null && x.visible)) return;
        const U = ue(C) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(x.corners[0].x, x.corners[0].y);
        for (let ve = 1; ve < x.corners.length; ve += 1) n.lineTo(x.corners[ve].x, x.corners[ve].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = U, x.corners.forEach((ve) => {
          n.beginPath(), n.arc(ve.x, ve.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((u = i.interaction) == null ? void 0 : u.kind) === "marquee_select") {
      const C = be(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(C.x0, C.y0, C.x1 - C.x0, C.y1 - C.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function re(ie) {
    const ke = w(), Me = W(ke);
    if (!ke || !Me)
      return n.clearRect(0, 0, r.width, r.height), ie && o.clear(657930), !1;
    const b = { x: Me.x, y: Me.y, w: Me.w, h: Me.h }, { rect: D, shot: u } = ey(ke, Me, { width: r.width, height: r.height }), C = ae(b);
    if (n.clearRect(0, 0, r.width, r.height), ie) {
      o.clear(657930);
      const x = _(D), U = !!v(x, u, void 0, 657930);
      U || o.clear(1118481, x), s.backgroundDirty = !U;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(b.x, b.y, b.w, b.h, C), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = cb, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(b.x + 1, b.y + 1, b.w - 2, b.h - 2, Math.max(0, C - 1)), n.stroke(), n.restore(), !0;
  }
  function ae(ie) {
    const ke = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * ke, Number((ie == null ? void 0 : ie.w) || 0) * 0.5, Number((ie == null ? void 0 : ie.h) || 0) * 0.5);
  }
  function ye() {
    var U, ve;
    if (((U = i.interaction) == null ? void 0 : U.kind) !== "paint_lasso_fill") return;
    const ie = i.interaction.stroke, ke = (ve = ie == null ? void 0 : ie.geometry) == null ? void 0 : ve.points;
    let Me;
    if (i.mode === "frame") {
      const ce = w(), De = R(ce);
      Me = le(ke, ce, De);
    } else
      Me = j(ke);
    if (!Array.isArray(Me) || Me.length < 3) return;
    const b = String((ie == null ? void 0 : ie.layerKind) || "") === "mask", D = (ie == null ? void 0 : ie.color) || { r: 1, g: 0.25, b: 0.25 }, u = Math.round(Number(D.r || 0) * 255), C = Math.round(Number(D.g || 0) * 255), x = Math.round(Number(D.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(Me[0].x || 0), Number(Me[0].y || 0));
    for (let ce = 1; ce < Me.length; ce++) n.lineTo(Number(Me[ce].x || 0), Number(Me[ce].y || 0));
    n.closePath(), b ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${u},${C},${x},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function xe() {
    const ie = i.frameRollOverlayVisual, ke = Ie(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(ie != null && ie.shot) || ke <= 1e-4) return;
    const Me = R(ie.shot);
    if (!Me) return;
    const b = { x: Me.x + Me.w * 0.5, y: Me.y + Me.h * 0.5 }, D = Number(ie.shot.roll_deg ?? ie.shot.rot_deg ?? 0) * Rr, u = Math.hypot(Me.w, Me.h) * 0.55, C = Math.cos(D) * u, x = Math.sin(D) * u;
    n.save(), n.globalAlpha *= ke, n.beginPath(), n.rect(Me.x, Me.y, Me.w, Me.h), n.clip(), n.translate(b.x, b.y), n.rotate(D);
    const U = Math.max(12, Math.min(Me.w, Me.h) / 6);
    n.beginPath();
    for (let ve = -u; ve <= u; ve += U)
      n.moveTo(ve, -u), n.lineTo(ve, u);
    for (let ve = -u; ve <= u; ve += U)
      n.moveTo(-u, ve), n.lineTo(u, ve);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(b.x - C, b.y - x), n.lineTo(b.x + C, b.y + x), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Ee() {
    return !l || !w() || t && X() || p && !oe() ? 0 : FI;
  }
  function We() {
    const ie = Ie(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (ie <= 1e-4 || !l || i.mode !== "pano") return;
    const ke = w(), Me = ke ? he(ke) : null, b = Array.isArray(Me == null ? void 0 : Me.corners) && Me.corners.length >= 4 ? Me.corners.map((C) => ({ x: Number(C.x || 0), y: Number(C.y || 0) })) : null;
    Me != null && Me.visible && b && (i.cutoutPanoDimCorners = b), ke && (Me != null && Me.visible) && b && (i.cutoutPanoFrameVisual = {
      item: ke,
      geom: Me,
      selected: Ne(ke),
      locked: ue(ke)
    });
    const D = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, u = Me != null && Me.visible ? b : D ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${ie})`, n.beginPath(), n.rect(0, 0, r.width, r.height), u.length >= 4) {
      n.moveTo(u[0].x, u[0].y);
      for (let C = 1; C < 4; C += 1) n.lineTo(u[C].x, u[C].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(ie) {
      ({
        areAllSelectedItemsLocked: d,
        contentSphere: m,
        deviceRect: _,
        drawEditorViewShot: v,
        editorViewInput: S,
        getActiveCutoutShot: w,
        getCutoutSelectableItemsForDisplay: N,
        getFrameViewLayout: W,
        getFrameViewRect: R,
        getList: L,
        getMultiSelectionGeom: g,
        getSelectedItems: z,
        getStickerDisplayAlpha: H,
        getUnwrapRect: ee,
        isCameraSelected: oe,
        isErpCamera: F,
        isExternalSticker: G,
        isFreeSpaceView: X,
        isItemLocked: ue,
        isItemSelected: Ne,
        isRasterObjectItem: _e,
        isSceneSticker: pe,
        isShotItem: J,
        isStickerItem: E,
        isStrokeGroupItem: V,
        objectGeom: he,
        poseOf: Oe,
        projectDir: ze,
        projectDirUnwrap: Xe,
        projectErpLassoPointsToFrameRect: le,
        projectLassoPointsToCurrentView: j,
        rebuildPaintEngineIfNeeded: de,
        rectFromPoints: be,
        renderEditorView: Pe,
        renderEditorViewUnwrap: Fe,
        sampleStickerEdge: te,
        sceneStickerShown: Ae,
        spaceViewState: k
      } = ie);
    },
    drawGridUnwrap: O,
    drawGridPano: ge,
    drawObjects: Z,
    drawFrameViewBackground: re,
    drawLassoOutlineOverlay: ye,
    drawFrameRollOverlay: xe,
    getCutoutPanoDimTarget: Ee,
    drawCutoutPanoPassepartout: We
  };
}
function _E(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: p,
    shotEditor: f,
    stageWrap: d,
    state: m,
    timeline: _,
    type: v,
    uiState: S,
    viewController: w
  } = e;
  let N, W, R, L, g, z, H, ee, oe, F, G, X, ue, Ne, _e, pe, J, E, V, he, Oe, ze, Xe, le, j = () => {
  };
  function de(ae = /* @__PURE__ */ new Set()) {
    F();
    const ye = l.backgroundDirty;
    f && (E(), W(ye, ae)), i.mode === "frame" ? (l.frameSafeRect = pe(), g(ye)) : i.mode === "unwrap" ? H(ye) : z(ye), R(), oe(), Oe(), ee(), L(), S.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && le(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), f && S.cameraPreview && (S.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const xe = Ne();
    S.stageStatus = xe.status, S.stageStatusDetail = xe.detail, xe.status === hr ? (d == null || d.removeAttribute("data-stage-ready"), d == null || d.setAttribute("data-stage-loading-kind", xe.detail)) : (d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind"));
  }
  function be(ae = i.interaction) {
    if (v !== "stickers" || i.mode !== "pano") return !1;
    const ye = String((ae == null ? void 0 : ae.kind) || "");
    return ye === "move" || ye === "scale" || ye === "scale_x" || ye === "scale_y" || ye === "rotate" ? !0 : ye === "move_multi" ? Array.isArray(ae == null ? void 0 : ae.stickerSnapshots) && ae.stickerSnapshots.length > 0 : !1;
  }
  function Pe() {
    return !!i.interaction || !!_.drag;
  }
  function Fe() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = m, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = ue();
  }
  function te(ae = {}) {
    var b, D, u, C, x, U, ve, ce;
    const ye = ae.reason ?? Mt.STATE, xe = !!ae.localOnly, Ee = ae.externalSync === !0, We = String(ae.cause || ""), ie = String(((b = i.interaction) == null ? void 0 : b.kind) || "");
    (!xe || ie === "view" || ie === "pan_frame" || be() || !!i.viewTransition || We === "mode" || We === "frame_view" || We === "cutout_frame") && (l.backgroundDirty = !0), xe && _e() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!xe || We === "selection" || We === "mode" || We === "cutout_frame") && (ze(), Xe()), Pe() ? l.nodePreviewPending = !0 : Fe(), Ee && ((u = (D = a.__panoDomPreview) == null ? void 0 : D.requestDraw) == null || u.call(D), (C = a.setDirtyCanvas) == null || C.call(a, !0, !1)), Ee && !xe && ((U = (x = a.graph) == null ? void 0 : x.setDirtyCanvas) == null || U.call(x, !0, !0), (ce = (ve = t == null ? void 0 : t.canvas) == null ? void 0 : ve.setDirty) == null || ce.call(ve, !0, !0)), p.requestDraw(ye);
  }
  function Ae() {
    const ae = n.getBoundingClientRect(), ye = Math.max(2, Math.round(ae.width)), xe = Math.max(2, Math.round(ae.height)), Ee = window.devicePixelRatio || 1, We = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== ye || n.height !== xe) && (n.width = ye, n.height = xe);
    const ie = jk(ae.width || ye, ae.height || xe, Ee, window.innerWidth || ae.width, window.innerHeight || ae.height);
    return o.resize(ie.width, ie.height), [n.width, n.height, r.width, r.height].join("x") === We ? !1 : (l.backgroundDirty = !0, l.dirty = !0, f && k(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function k(ae) {
    ae(), p.wake();
  }
  function O() {
    return !!i.viewTransition || !!w.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || Pe();
  }
  function Y(ae = performance.now(), ye = /* @__PURE__ */ new Set()) {
    var ke;
    l.nodePreviewPending && !Pe() && Fe(), ye.forEach((Me) => l.reasons.add(Me)), ye.size && (l.dirty = !0), [...ye].some((Me) => Me !== Mt.OVERLAY) && (l.backgroundDirty = !0), V(), l.lastTickTs > 0 ? Math.max(1e-3, (ae - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = ae;
    const xe = i.mode === "frame" && ((ke = i.interaction) == null ? void 0 : ke.kind) === "roll_frame" ? i.interaction : null;
    xe != null && xe.shot && (i.frameRollOverlayVisual = { shot: xe.shot });
    const Ee = xe ? 1 : 0;
    if (Math.abs(Ee - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Ee, i.frameRollOverlayStartTs = ae), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Ee) > 1e-6) {
      const Me = Ie(
        (ae - Number(i.frameRollOverlayStartTs || ae)) / TI,
        0,
        1
      );
      i.frameRollOverlayAlpha = er(
        Number(i.frameRollOverlayFrom || 0),
        Ee,
        Pu(Me)
      ), Me >= 1 && (i.frameRollOverlayAlpha = Ee, Ee === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const We = X();
    if (Math.abs(We - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = We, i.cutoutPanoDimStartTs = ae), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - We) > 1e-6) {
      const Me = Ie(
        (ae - Number(i.cutoutPanoDimStartTs || ae)) / Hm,
        0,
        1
      );
      i.cutoutPanoDimAlpha = er(
        Number(i.cutoutPanoDimFrom || 0),
        We,
        Pu(Me)
      ), Me >= 1 && (i.cutoutPanoDimAlpha = We), Me >= 1 && We === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ie = f && G() ? 1 : 0;
    if (Math.abs(ie - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ie, i.cutoutPanoFrameStartTs = ae), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ie) > 1e-6) {
      const Me = Ie(
        (ae - Number(i.cutoutPanoFrameStartTs || ae)) / Hm,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = er(
        Number(i.cutoutPanoFrameFrom || 0),
        ie,
        Pu(Me)
      ), Me >= 1 && (i.cutoutPanoFrameAlpha = ie, ie === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const Me = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), b = Ie((ae - Number(i.outputPreviewAnimStartTs || 0)) / Me, 0, 1), u = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? VI(b) : zI(b);
      i.outputPreviewAnim = er(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, u), l.dirty = !0, b >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: Me, done: b } = e2(i.viewTransition, ae);
      if (i.viewPosition = Me.position, i.viewYaw = Me.yaw_deg, i.viewPitch = Me.pitch_deg, i.viewFov = Me.hFOV_deg, i.viewDistance = Me.distance, b) {
        const { end: D } = i.viewTransition;
        i.viewTransition = null, D && N(D), he();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(w.state.inertia.vx || 0), i.viewInertia.vy = Number(w.state.inertia.vy || 0), i.viewInertia.active = !!w.state.inertia.active, w.stepInertia(ae) && (i.viewInertia.vx = Number(w.state.inertia.vx || 0), i.viewInertia.vy = Number(w.state.inertia.vy || 0), i.viewInertia.active = !!w.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const Me = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), de(Me);
    }
  }
  function ge(ae) {
    try {
      ae();
    } catch (ye) {
      const xe = String((ye == null ? void 0 : ye.stack) || (ye == null ? void 0 : ye.message) || ye || "unknown editor frame error");
      l.tickErrorSignature !== xe && (l.tickErrorSignature = xe, console.error("[PanoramaStickers] editor frame failed", ye)), S.stageStatus = tr, S.stageStatusDetail = "frame", d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind");
    }
  }
  function T(ae = performance.now(), ye = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const xe = uw();
    ge(() => Y(ae, ye)), dw(xe);
  }
  function q() {
    !l.running || !Ae() || ge(() => {
      l.dirty = !1, de(/* @__PURE__ */ new Set([Mt.RESIZE]));
    });
  }
  const ne = new ResizeObserver(q);
  let A = null;
  function B() {
    A == null || A.removeEventListener("change", K), A = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), A.addEventListener("change", K);
  }
  function K() {
    B(), q();
  }
  function Z() {
    j = cw("editor", () => {
      var ae;
      return {
        type: v,
        readOnly: s,
        mode: i.mode,
        interaction: ((ae = i.interaction) == null ? void 0 : ae.kind) ?? null,
        timelineDrag: !!_.drag,
        playing: !!J.playing
      };
    });
  }
  function re() {
    j(), l.running = !1, p.stop(), ne.disconnect(), A.removeEventListener("change", K);
  }
  return {
    connect(ae) {
      ({
        applyViewTransitionEnd: N,
        drawCutoutOutputPreview: W,
        drawCutoutPanoPassepartout: R,
        drawFrameRollOverlay: L,
        drawFrameViewBackground: g,
        drawGridPano: z,
        drawGridUnwrap: H,
        drawLassoOutlineOverlay: ee,
        drawObjects: oe,
        endEditorViewFrame: F,
        getActiveCutoutShot: G,
        getCutoutPanoDimTarget: X,
        getSharedLivePaintSurface: ue,
        getStageImageStatus: Ne,
        isPaintCompositeInteraction: _e,
        measureFrameSafeRect: pe,
        playback: J,
        rebuildPaintEngineIfNeeded: E,
        syncCutoutShot: V,
        syncFloatingViewButtonState: he,
        syncFrameRollKnob: Oe,
        syncLookAtFrameButtonState: ze,
        syncViewToggleState: Xe,
        updateSelectionMenu: le
      } = ae);
    },
    requestDraw: te,
    syncCanvasSize: Ae,
    startAnimation: k,
    editorAnimating: O,
    tick: T,
    stageResizeObserver: ne,
    watchPixelRatio: B,
    sampleEditorDiagnostics: Z,
    stopRenderLoop: re
  };
}
const Bm = /* @__PURE__ */ new Map(), br = py({
  app: nr,
  api: Zt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: kd,
    markImageFailed: lb,
    markImageLoading: ab,
    markImageReady: sb
  }
});
function Ou(e) {
  if (!hn(e, "background") || !hn(e, "external-sticker")) return null;
  const t = br.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Qo(t[0]) : null;
}
function SE(e) {
  if (!hn(e, "background")) return null;
  const [t] = br.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = br.uiValue(e, "pano_timeline_frames") || [], [n] = br.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: Rn(n) };
}
const wE = br.assetSource, xE = br.source, kE = br.uiImage, ME = br.invalidateUiImage, Um = br.loadPreferredExactLinkedImage;
async function NE(e, t, r = {}) {
  var Qp, eh;
  await Wy(e, { tolerateOperationFailure: !0 }), br.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = BI(e, t);
  await Pf();
  const s = Bs(e, "output_preset"), l = Bs(e, "coverage"), p = Bs(e, "bg_color"), f = Bs(e, SI), d = () => {
    const c = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Um(
      e,
      c,
      () => Ke(),
      `background:size:${c.join("|")}`
    );
  }, m = () => {
    const c = d();
    return XI(c);
  }, _ = (c = 2048) => {
    const h = s == null ? void 0 : s.value;
    return YI(h) ? m() || Math.max(1, Math.round(Number(c || 2048))) : UI(h, c);
  }, v = e.__panoSceneStateV2 === !0, S = t === "stickers" && v, w = t === "cutout" && v, N = S && e.__panoStudio === !0, W = w || N, R = t === "cutout" || N, L = w ? SE(e) : null, g = (v ? D0 : T0)(String((f == null ? void 0 : f.value) || ""), {
    outputPreset: _(2048),
    backgroundColor: String((p == null ? void 0 : p.value) || "#00ff00"),
    coverage: L ? L.coverage : Rn(l == null ? void 0 : l.value),
    sharedUiSettings: qI(),
    active: V0(e),
    fps: v ? Ou(e) : null,
    scene: (L == null ? void 0 : L.state) ?? null,
    camera: w
  });
  e.__panoLiveStateOverride = g, e.__panoLiveStateVersion = 0;
  let z = null;
  W ? (z = g.camera && (!N || g.camera.visible !== !1) ? Zh(g.camera, 0) : null, g.shots = z ? [{ ...z, position: [...z.position] }] : [], g.active.selected_shot_id = z && w ? fc : null) : t === "cutout" && (g.shots = Array.isArray(g.shots) ? g.shots.slice(0, 1) : [], g.shots.length || (g.active.selected_shot_id = null));
  const H = t === "cutout" ? (() => {
    var y;
    const c = Array.isArray(g.shots) ? g.shots : [], h = String(((y = g == null ? void 0 : g.active) == null ? void 0 : y.selected_shot_id) || "");
    return c.find((M) => String((M == null ? void 0 : M.id) || "") === h) || c[0] || null;
  })() : null, ee = H ? hb(H, !1) : { width: 220, height: 132 }, oe = ob(N ? "studio" : t), F = /* @__PURE__ */ Jo({
    stageStatus: hr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (oe.viewButtons || []).map((c) => ({ ...c, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Qp = oe.spaceButtons) != null && Qp.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: oe.spaceButtons, frame: oe.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (oe.toolButtons || []).map((c) => ({
      ...c,
      disabled: !1,
      ...c.key === "add-world" ? { visible: S } : {},
      ...w && RI.has(c.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(oe.floatingButtons || []).map((c) => ({ ...c, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: qe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: qe.aspect,
      rotateIcon: qe.rotate_90,
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
      icon: qe.fullscreen,
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
      customColorCss: Pr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Pr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (c, h) => ({ index: h, color: null })),
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
      width: ee.width,
      height: ee.height,
      label: H ? "Loading preview" : "Add Frame to preview"
    }
  }), G = { frame: /* @__PURE__ */ ml(0), playing: /* @__PURE__ */ ml(!1) }, X = document.createElement("div");
  document.body.appendChild(X);
  const ue = ({ intent: c, file: h } = {}) => {
    if (mr(h)) {
      if (c === "add") {
        ap(h);
        return;
      }
      if (c === "add-world") {
        b1(h);
        return;
      }
      c === "replace" && S1(h);
    }
  }, Ne = ({ intent: c } = {}) => {
  }, _e = Hd(vI, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: oe,
    paintSwatches: fl.map((c) => ({
      id: c.id,
      label: c.label,
      cssColor: Pr(c.color, 1)
    })),
    uiState: F,
    playhead: G,
    onClose: () => {
      _o();
    },
    onTimeline: (c) => m1(c),
    onImageFileSelected: ue,
    onImageFileCancelled: Ne
  });
  let pe = null;
  try {
    pe = _e.mount(X);
  } catch (c) {
    try {
      _e.unmount();
    } catch {
    }
    throw X.remove(), c;
  }
  const J = X.querySelector(".pano-modal-overlay"), E = X.querySelector(".pano-modal"), V = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), he = E == null ? void 0 : E.querySelector("[data-stage-background]"), Oe = E == null ? void 0 : E.querySelector(".pano-stage-wrap"), ze = ((eh = pe == null ? void 0 : pe.getPaintOverlayRefs) == null ? void 0 : eh.call(pe)) || {}, Xe = ze.cursor || null, le = ze.sizePreview || null, j = ze.sizeSample || null;
  if (!J || !E || !V || !he || !Oe || !Xe || !le || !j)
    throw _e.unmount(), X.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const de = V.getContext("2d"), be = E.querySelector("[data-side]"), Pe = E.querySelector("[data-video-element]"), Fe = E.querySelector("[data-port-video-element]");
  tu(V, "editor.stage-overlay"), tu(he, "editor.stage-background"), Vh(Pe, "editor.video"), Vh(Fe, "editor.port-video");
  const te = E.querySelector(".pano-floating-right"), Ae = E.querySelector(".pano-floating-top"), k = E.querySelector("[data-tool-rail]"), O = E.querySelector("[data-frame-rail]"), Y = E.querySelector("[data-frame-roll-knob]"), ge = E.querySelector("[data-paint-dock]"), T = E.querySelector(".pano-video-transport"), q = E.querySelector("[data-selection-menu]");
  let ne = !1;
  const A = E.querySelector("[data-tooltip]"), B = E.querySelector("[data-camera-preview-host]"), K = E.querySelector("[data-camera-preview-canvas]");
  tu(K, "editor.camera-preview");
  const Z = E.querySelector("[data-paint-color-row]"), re = E.querySelector("[data-paint-color-pop]"), ae = E.querySelector("[data-paint-color-sv]"), ye = E.querySelector("[data-paint-color-sv-cursor]"), xe = E.querySelector("[data-paint-hue-strip]"), Ee = E.querySelector("[data-paint-hue-handle]");
  let We = 0, ie = 0;
  Oe == null || Oe.removeAttribute("data-stage-ready"), Oe == null || Oe.setAttribute("data-stage-loading-kind", "boot"), V.style.opacity = "1", he.style.opacity = "0", i && (be == null || be.remove(), E.classList.add("pano-modal-readonly"));
  const ke = () => {
    if (!u.customPaintSessionStart) return;
    if (pl(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (WI(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const c = [
      Kn(u.customPaintColor),
      ...u.customPaintHistory.filter((h) => !pl(h, u.customPaintColor))
    ];
    u.customPaintHistory = c.slice(0, 8), u.customPaintSessionStart = null;
  }, Me = (c = !1) => {
    !re || re.hidden || (c ? ke() : u.customPaintSessionStart = null, re.hidden = !0, F.paintDock.colorPopOpen = !1);
  }, b = () => {
    re && (re.hidden && (u.customPaintSessionStart = Kn(u.customPaintColor)), re.hidden = !1, F.paintDock.colorPopOpen = !0);
  };
  E.addEventListener("pointerdown", () => Le.wake(), !0), E.addEventListener("pointerdown", (c) => {
    var h;
    c.target.closest("[data-frame-roll-knob]") || Ei(), !c.target.closest(".pano-picker") && (c.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((y) => {
      y.hidden = !0;
    }), Me(!0), R && u.cutoutAspectOpen && !c.target.closest(".pano-aspect-popover") && !c.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, lt(), Ke()), (h = F.frameRail) != null && h.aspectOpen && !c.target.closest(".pano-frame-aspect-control") && (F.frameRail.aspectOpen = !1)));
  });
  const u = {
    mode: "pano",
    selectedId: t === "stickers" ? g.active.selected_sticker_id : g.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: yr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Rn(g.coverage),
    historyController: sE(g),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Yr,
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
    showGrid: ZI(e == null ? void 0 : e.id, !0),
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
    paintEngine: Bd(),
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
  }, C = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let x = null;
  t === "stickers" && (u.selectedId = null, g.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const U = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), je = wn({ label: "editor.still" });
  je.__panoFrameIdx = 0;
  const I = wn({ label: "editor.port-still" });
  I.__panoFrameIdx = 0;
  const me = {
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
  }, Le = WP({
    requestAnimationFrame: (c) => requestAnimationFrame(c),
    cancelAnimationFrame: (c) => cancelAnimationFrame(c),
    draw: (c, h) => Qb(c, h),
    animating: () => _b()
  }), Re = HP({
    requestFrame: (c) => Le.requestFrame(c),
    cancelFrame: (c) => Le.cancelFrame(c),
    tasks: {
      seek: () => ur.seek(C.scrubFrame),
      timeline: () => xr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        pr(), Ke({ localOnly: !0, reason: Mt.STATE });
      },
      sidePanel: () => rt()
    }
  }), Ue = Kk({
    canvas: he,
    onReady: () => {
      Pc(), Ke({ reason: Mt.CONTEXT });
    },
    onFailed: () => Ke(),
    onUpdate: () => Ke({ localOnly: !0, reason: Mt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      wb(), Pc(), Ke({ reason: Mt.CONTEXT });
    }
  });
  let Be = null;
  const Ze = Number.parseFloat(
    getComputedStyle(E).getPropertyValue("--pano-float-radius")
  ) || 10, Qe = (c) => {
    const h = String(c || "default");
    V.style.cursor !== h && (V.style.cursor = h);
  }, ut = {
    timer: 0,
    target: null
  }, Pt = {
    active: !1,
    depth: 0
  }, Et = Yd({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (c) => {
      u.viewYaw = Wt(Number(c.yaw || 0)), u.viewPitch = Ie(Number(c.pitch || 0), -89.9, 89.9), u.viewFov = Ie(Number(c.fov || u.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const c = V.getBoundingClientRect();
      return {
        w: Math.max(1, Number(c.width || V.clientWidth || 0)),
        h: Math.max(1, Number(c.height || V.clientHeight || 0))
      };
    },
    getInvert: () => {
      var c, h;
      return {
        x: (c = g.ui_settings) != null && c.invert_view_x ? -1 : 1,
        y: (h = g.ui_settings) != null && h.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => _c(),
    onInteraction: () => Le.requestDraw(Mt.VIEW)
  }), {
    applyInitialCutoutFocus: kn,
    applyRasterObjectOffset: Hn,
    applyRasterObjectTransform: cn,
    applySpaceMode: tn,
    applyStrokeGroupOffset: si,
    applyStrokeGroupTransform: ki,
    areAllSelectedItemsLocked: us,
    bringSelectedToFront: In,
    buildCanonicalCutoutStickerState: lr,
    buildCanonicalSelectedStickerState: ds,
    buildRasterObjectEditCanvas: na,
    cameraFrustumLength: Mi,
    cameraPreviewShown: mb,
    cameraShoots: fs,
    cameraSphere: gb,
    canRestoreSelectedToInitial: yb,
    cancelViewTransition: mc,
    clearSelection: ra,
    clearWorldSelection: Df,
    collectExternalStickersForClearAll: bb,
    computeStickerVFov: ps,
    contentSphere: gc,
    createRasterFrozenObjectsFromCanvas: vb,
    createRasterSurface: Lf,
    currentSpaceCamera: ia,
    cutoutCamera: yc,
    editorAnimating: _b,
    editorViewInput: hs,
    ensureGroupFrame: ao,
    ensurePaintingGroupEntry: Rf,
    erpPointToWorldDir: Sb,
    forgetCameraPreviewFrame: wb,
    frameLocalPointToWorldDir: Vf,
    frameSpaceContent: xb,
    getActivePaintTargetDescriptor: qn,
    getCutoutInspectorItems: $f,
    getCutoutSelectableItems: kb,
    getCutoutSelectableItemsForHit: bc,
    getDisplayListObjects: Mb,
    getHistoryCapabilities: zf,
    getList: so,
    getMultiSelectionGeom: ms,
    getNextStickerZIndex: gs,
    getOrderedDisplayListObjects: jf,
    getPaintingGroupList: lo,
    getPortMedia: Nb,
    getRasterObjectCenterUv: Pb,
    getRasterObjectItem: Hf,
    getRasterObjectList: zr,
    getSelectableRasterObjectItems: Ab,
    getSelectableStrokeGroupItems: Cb,
    getSelected: Mn,
    getSelectedItems: Ni,
    getSelectedKind: ys,
    getSelectionItemIcon: Ib,
    getSelectionItemLabelData: vc,
    getStrokeGroupCenterUv: Eb,
    getStrokeGroupItem: Gf,
    getStrokeGroupStrokes: co,
    getUnwrapRect: _c,
    hasCamera: uo,
    hasSpaceContent: Sc,
    hitRasterObjectAt: Wf,
    invalidateLivePaintPreviewCaches: fo,
    isCameraSelected: po,
    isErpCamera: oa,
    isExternalSticker: _r,
    isFreeSpaceView: li,
    isItemLocked: cr,
    isRasterObjectItem: jr,
    isSceneSticker: ci,
    isShotItem: ui,
    isSpaceView: aa,
    isStickerHidden: bs,
    isStickerItem: dn,
    isStrokeGroupItem: Jn,
    isUploadingSticker: Ob,
    lookingAt: Fb,
    makeRasterObjectSelectionId: Kf,
    makeStrokeGroupSelectionId: Bf,
    markObjectVisualsDirty: un,
    markPaintCompositeVisualsDirty: ho,
    markPaintStrokeVisualsDirty: Sr,
    needsPaintingLayerSync: Tb,
    objectGeom: fn,
    paintingShown: Db,
    parseRasterObjectSelectionId: Pi,
    playback: ur,
    playbackFps: Lb,
    poseOf: Nn,
    processFreehandPoints: Uf,
    pushHistory: bt,
    queueVideoTransportLayout: Rb,
    rasterizeStrokeToSurface: Vb,
    rebuildPaintEngineIfNeeded: $b,
    reconcileExternalStickerFromInputs: Yf,
    refreshModalVideoSource: mo,
    refreshPaintEngineRevisionCache: zb,
    releaseHiddenSelection: wc,
    requestDraw: Ke,
    restoreHistory: xc,
    restoreSelectedToInitialPose: jb,
    sampleEditorDiagnostics: Hb,
    screenPos: di,
    screenPosCss: vs,
    screenPosToErpPoint: wr,
    screenPosToFrameAsErpPoint: dr,
    screenToWorldDir: Xf,
    selectWorldSticker: kc,
    selectedWorldSticker: sa,
    sendSelectedToBack: Gb,
    setSelectedItem: Gn,
    setSelectedItems: Wb,
    setSpaceMode: Kb,
    setSpaceView: Bb,
    shortestWrappedDelta: _s,
    shotViewCamera: Ub,
    spaceOrigin: Yb,
    spaceScale: la,
    spaceViewState: Ai,
    stageResizeObserver: Xb,
    startAnimation: Mc,
    startSpaceDrag: qf,
    stickerCornerOrderSanity: qb,
    stickerImageKey: Nc,
    stopRenderLoop: Jb,
    syncCanvasSize: Pc,
    syncPaintingLayerAsync: Jf,
    syncVideoTransportState: Zf,
    syncVideoTransportVisibility: Zb,
    tick: Qb,
    toggleSelectedExternalStickerVisibility: e1,
    toggleSelectedLock: t1,
    toggleVideoMuted: Qf,
    transitionView: Ss,
    turnViewTo: ep,
    videoCleanupFns: n1,
    videoState: ws,
    viewControls: Ac,
    watchPixelRatio: r1,
    worldDirToFrameLocalPoint: tp,
    worldStickerEditable: Cc,
    writePose: fr,
    zoomSpaceAt: i1
  } = eE({
    api: Zt,
    app: nr,
    backgroundCanvas: he,
    cameraV2: W,
    canvas: V,
    comfyMedia: br,
    commitAndRefreshNode: Nt,
    commitState: Wn,
    ctx: de,
    cutoutPreviewCanvas: K,
    cutoutPreviewHost: B,
    cutoutV2: w,
    editor: u,
    editorView: Ue,
    floatingRightEl: te,
    frameGateCssRadius: Ze,
    frameViewDistance: yp,
    getActiveCutoutShot: dt,
    getBrushPresetIdForTool: Ii,
    getFrameViewLayout: Ms,
    getFrameViewRect: Wr,
    getPaintingLayerList: As,
    imageCache: U,
    isWorldMenuShown: tv,
    loadPreferredExactLinkedImage: Um,
    measureFrameSafeRect: V1,
    mediaAssetSource: wE,
    mediaSource: xE,
    mediaUiImage: kE,
    node: e,
    portStillCanvas: I,
    portVideoEl: Fe,
    rasterErpCanvasCache: De,
    rasterImageAlphaCache: ce,
    rasterImageCache: ve,
    readOnly: n,
    rectFromPoints: Ap,
    resolveEditorOutputPresetWidth: _,
    runtime: me,
    sceneV2: S,
    scheduler: Le,
    setTimelineFrame: u1,
    shotEditor: R,
    stageWrap: Oe,
    state: g,
    stateV2: v,
    stillCanvas: je,
    stopTimelinePlayback: pn,
    studio: N,
    syncCutoutShot: pr,
    syncFloatingViewButtonState: go,
    syncFrameRollKnob: Gr,
    syncLookAtFrameButtonState: Ec,
    syncPaintUi: En,
    syncTimeline: xr,
    syncUndoRedoButtons: Vp,
    syncViewToggleState: Hr,
    timeline: C,
    timelinePlayhead: G,
    timelineSpanFrames: Oc,
    type: t,
    uiState: F,
    updateCursor: It,
    updateSelectionMenu: lt,
    updateSidePanel: rt,
    videoEl: Pe,
    viewController: Et
  }, [
    iE,
    lE,
    cE,
    uE,
    dE,
    fE,
    pE,
    hE,
    mE,
    gE,
    yE,
    bE,
    vE,
    _E
  ]);
  function o1() {
    F.toolButtons.forEach((c) => {
      const h = c.attr === "data-tool-mode", y = c.attr === "data-paint-tool", M = c.attr === "data-mask-tool";
      c.active = h ? c.value === u.primaryTool : y ? c.key === u.paintTool : M ? c.key === u.maskTool : !1, c.pressed = c.active ? "true" : c.pressed == null ? null : "false";
    });
  }
  function Ic(c) {
    return Cf(c == null ? void 0 : c.dataTransfer);
  }
  function Ci(c) {
    const h = !!c;
    Pt.active !== h && (Pt.active = h, Oe.classList.toggle("drop-active", h));
  }
  qb();
  function a1() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function s1() {
    return String(a1() || "") === "lasso_fill";
  }
  function Ec() {
    if (N && ko(F.toolButtons, "value", "add-camera", { disabled: uo() }), t !== "cutout") return;
    const c = dt();
    ko(F.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: c ? "Look At Frame" : "Add Frame",
      tip: c ? "Look at frame" : "Add frame",
      icon: c ? qe.camera : qe.plus_circle
    });
  }
  function go() {
    const c = s2({
      spaceView: aa(),
      spaceMode: dl(u.spaceMode, u.viewTransition),
      readOnly: n,
      frameMode: R && u.mode === "frame",
      showGrid: u.showGrid
    });
    F.space && Object.assign(F.space, c.space);
    for (const [h, y] of Object.entries(c.buttons)) ko(F.floatingButtons, "action", h, y);
  }
  function Hr() {
    var y;
    const c = l2({ hasShot: !!dt(), erp: oa(), hidden: uo() && !fs(), studio: N });
    u.mode === "frame" && c.disabled && (N ? mp(dt()) : u.mode = "pano"), u.outputPreviewRect = null, F.viewButtons.forEach((M) => {
      const P = M.key === u.mode;
      M.pressed = P ? "true" : "false", M.visible = !(M.key === "frame" && !R), M.key === "frame" ? Object.assign(M, c) : M.disabled = !1;
    });
    const h = R && u.mode === "frame" ? dt() : null;
    F.frameRail.visible = !!h, F.frameRail.disabled = n || (h == null ? void 0 : h.locked) === !0, F.frameRollKnob.visible = !!h && !n && h.locked !== !0, F.frameRollKnob.disabled = n || (h == null ? void 0 : h.locked) === !0, F.frameRollKnob.rollDeg = Number((h == null ? void 0 : h.roll_deg) ?? (h == null ? void 0 : h.rot_deg) ?? 0), F.frameRollKnob.displayValue = Mo(F.frameRollKnob.rollDeg), F.frameRollKnob.dragging = ((y = u.interaction) == null ? void 0 : y.kind) === "roll_frame", F.frameRollKnob.armed = !!h && u.altModifier === !0, F.frameRail.rollKnob = F.frameRollKnob, F.frameRail.aspectLabel = h ? Qr(h) : "", F.frameRail.aspectChoices = nb(h ? String(Qr(h)) : null, { erp: N, coverage: g.coverage }), h || (F.frameRail.aspectOpen = !1), F.outputPreviewToggle.visible = t === "cutout" && u.mode !== "frame" && !!dt(), R && F.cameraPreview && (F.cameraPreview.visible = u.mode !== "frame" && mb(), F.cameraPreview.expanded = !!u.outputPreviewExpanded, F.cameraPreview.settled = F.cameraPreview.settled === !0 && me.pendingStableLayoutFrames <= 0 && me.hasPresentedFrame), go(), xp() ? It(u.pointerPos) : Qe(u.mode === "pano" ? "grab" : "default");
  }
  function yo() {
    const c = new Set(
      (g.stickers || []).map((h) => String((h == null ? void 0 : h.asset_id) || "")).filter((h) => !!h)
    );
    Object.keys(g.assets || {}).forEach((h) => {
      c.has(h) || (delete g.assets[h], U.delete(h));
    });
  }
  function l1(c, h) {
    var P;
    const y = (P = hs().space) == null ? void 0 : P.gizmo;
    if (po() && y && Oi("hover", h) !== null && Oi("down", h))
      return u.interaction = { kind: "world_gizmo", camera: !0, mode: y.mode, start: y.transform, base: yc(), changed: !1 }, V.setPointerCapture(c.pointerId), It(h), !0;
    const M = J0(yc(), Mi(la()));
    return Vk(ia(), M, h, V.width, V.height) ? (po() || (Gn(dt()), rt(), lt(), Ke()), u.interaction = { kind: "world_select" }, V.setPointerCapture(c.pointerId), !0) : !1;
  }
  function Gr() {
    var h;
    const c = u.mode === "frame" ? dt() : null;
    F.frameRollKnob.visible = !!c && !n && c.locked !== !0, F.frameRollKnob.rollDeg = Number((c == null ? void 0 : c.roll_deg) ?? (c == null ? void 0 : c.rot_deg) ?? 0), F.frameRollKnob.displayValue = Mo(F.frameRollKnob.rollDeg), F.frameRollKnob.dragging = ((h = u.interaction) == null ? void 0 : h.kind) === "roll_frame", F.frameRollKnob.armed = !!c && u.altModifier === !0;
  }
  Xb.observe(V), r1();
  function En() {
    o1();
    const c = r2({
      editor: u,
      swatches: fl,
      paintColorPopOpen: re ? !re.hidden : !1,
      colorToCss: Pr,
      colorsApproximatelyEqual: pl,
      rgb01ToHsv: Eu,
      hsv01ToRgb: Iu,
      getBrushPresetIdForTool: Ii,
      isActiveLassoTool: s1
    });
    if (Object.assign(F.paintDock, c), Zb(), !c.visible) {
      re && (re.hidden = !0);
      return;
    }
    ie && (clearTimeout(ie), ie = 0), Z && (!c.colorEnabled && re && !re.hidden && (ie = window.setTimeout(() => {
      re.hidden = !0, F.paintDock.colorPopOpen = !1, ie = 0;
    }, 170)), re && (re.style.setProperty("--picker-hue-color", c.pickerHueColor), re.style.setProperty("--picker-sat", c.pickerSat), re.style.setProperty("--picker-val", c.pickerVal), re.style.setProperty("--picker-hue", c.pickerHue)), ye && (ye.style.left = c.pickerSvLeft, ye.style.top = c.pickerSvTop), Ee && (Ee.style.left = c.pickerHueLeft));
  }
  function bo() {
    const c = Nn(R && u.mode === "frame" ? dt() : Mn());
    c && (u.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Qr(c)
    }, rt());
  }
  function rt() {
    pr(), xr(), np();
  }
  function c1() {
    const c = R && u.mode === "frame" ? dt() : null;
    return [...Ni(), sa(), c].some((h) => ci(h) ? Fl(h) : ui(h) && uo() && Fl(g.camera));
  }
  function np() {
    if (i) return;
    g.ui_settings = g.ui_settings || {};
    const c = n2(g.ui_settings);
    if (o) {
      F.sidePanel = i2({
        coverage: g.coverage,
        uiSettings: c,
        normalizeCoverageValue: Rn
      });
      return;
    }
    const h = Mn(), y = R && u.mode === "frame" ? dt() : null, M = y || h, P = y ? [y] : Ni(), $ = y ? "shot" : ys();
    if (P.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), M && $ !== "stroke") {
      const it = Nn(M);
      u.panelLastValues = {
        yaw_deg: Number(it.yaw_deg || 0),
        pitch_deg: Number(it.pitch_deg || 0),
        hFOV_deg: Number(it.hFOV_deg || ($ === "image" ? 30 : 90)),
        vFOV_deg: Number(it.vFOV_deg || ($ === "image" ? 30 : 60)),
        rot_deg: Number(it.rot_deg || 0),
        roll_deg: Number(it.roll_deg || 0),
        aspect_id: Qr(it)
      }, ci(M) && (u.panelLastValues.opacity = eo(M, u.frame).opacity * 100);
    }
    const Q = u.panelLastValues || (t === "stickers" || $ === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), se = $ === "stroke" ? null : M, fe = sa(), Ge = W && ($ === "shot" || $ === "frame") && Sc(), Se = fe ? rk(fe, u.frame) : Ge ? { ...se, ...ek(g.camera, u.frame), vFOV_deg: se.vFOV_deg } : ci(se) ? u.panelLastValues : se || Q, Ce = fe ? Cc(fe) : !!se && !cr(se);
    u.panelWasEnabled = Ce, Ec();
    let He = null;
    if (y) {
      const it = vc({ item: y, kind: "shot", label: "Frame" });
      He = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: it.label,
        currentIcon: it.icon || null,
        items: [{
          id: String(y.id || ""),
          label: it.label,
          icon: it.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const it = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const _t = dt();
        _t && it.push({ id: _t.id, label: "Camera", icon: Ib("frame"), item: _t, kind: "frame" }), so().forEach((Ot, mn) => {
          var Ye, tt;
          if (!Ot || ci(Ot) && !Ot.visible) return;
          const Fi = S ? ed(Ot) : _r(Ot) ? String(Ot.id || Tf) : String(((tt = (Ye = g.assets) == null ? void 0 : Ye[Ot.asset_id]) == null ? void 0 : tt.name) || Ot.asset_id || Ot.id), Ti = `${mn + 1}. ${Fi}${_r(Ot) && bs(Ot) ? " (hidden)" : ""}`, Je = vc({ item: Ot, label: Ti, kind: "image" });
          it.push({ id: Ot.id, label: Je.label, icon: Je.icon, item: Ot, kind: "image" });
        });
      } else
        $f().forEach((_t) => {
          if (!(_t != null && _t.item)) return;
          const Ot = vc(_t);
          it.push({ id: _t.item.id, label: Ot.label, icon: Ot.icon, item: _t.item, kind: _t.kind });
        });
      const At = (se == null ? void 0 : se.id) || "", gt = fe ? { label: ed(fe), icon: qe.globe } : it.find((_t) => _t.id === At) || it[0];
      He = {
        label: "Selection",
        open: !1,
        disabled: it.length <= 1,
        currentLabel: gt.label,
        currentIcon: gt.icon || null,
        items: it.map((_t) => ({
          id: _t.id,
          label: _t.label,
          icon: _t.icon || null,
          active: _t.id === At
        }))
      };
    }
    const et = [], Ve = (it, At, gt, _t, Ot) => {
      const mn = Ie(Number(Se[it] || 0), gt, _t);
      et.push({
        key: it,
        label: At,
        min: gt,
        max: _t,
        step: Ot,
        value: mn,
        displayValue: Mo(mn),
        fillPct: Ie((mn - gt) / Math.max(1e-6, _t - gt) * 100, 0, 100),
        enabled: Ce && !n
      });
    }, pt = [];
    if (fe) {
      for (const [it, At] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const gt = ku(Se[it]);
        Ve(it, At, -gt, gt, 0.01);
      }
      Ve("yaw_deg", "Yaw", -180, 180, 0.1), Ve("pitch_deg", "Pitch", -90, 90, 0.1), Ve("roll_deg", "Roll", -180, 180, 0.1), Ve("scale", "Scale", zm, ku(Se.scale), 0.01), Ve("opacity", "Opacity", 0, 100, 1);
    } else if (P.length > 1)
      pt.push(`Selected objects: ${P.length}`), pt.push("Multi-selection supports z-order and delete.");
    else {
      const it = $ === "shot" || $ === "frame";
      if (Ge)
        for (const [At, gt] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const _t = ku(Se[At]);
          Ve(At, gt, -_t, _t, 0.01);
        }
      Ve("yaw_deg", "Yaw", -180, 180, 0.1), Ve("pitch_deg", "Pitch", -90, 90, 0.1), Ve($ === "image" || t === "stickers" && !it ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Ve("hFOV_deg", "H FOV", 1, 179, 0.1), Ve("vFOV_deg", "V FOV", 1, 179, 0.1), it && et.forEach((At) => {
        At.enabled = At.enabled && c2(At.key, { erp: oa() });
      }), S && !it && Ve("opacity", "Opacity", 0, 100, 1);
    }
    F.sidePanel = d2({
      coverage: g.coverage,
      readOnly: n,
      selectionPicker: He,
      enabled: Ce,
      selectedKind: fe ? "world" : $,
      selectedItems: P,
      params: et,
      notes: pt,
      uiSettings: c,
      normalizeCoverageValue: Rn
    });
  }
  function xr() {
    if (!v || n) return;
    const c = Oc(), h = C.selection, y = h && kr(h.owner);
    if (h) {
      const M = y ? ca(h) : [];
      h.frames = h.frames.filter((P) => M.some(($) => y[$].keyframes.some((Q) => Q.frame === P))), h.frames.length || (C.selection = null);
    }
    F.timeline = y2(g, {
      span: c,
      selection: C.selection,
      selectedId: u.worldSelectedId || u.selectedId,
      expanded: C.expanded ?? rp(),
      openRows: C.openRows,
      audio: d1() && F.videoTransport.hasAudio ? { muted: Pe.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Ou(e) !== null || Yk(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: uo(),
      cameraHideable: N,
      stickers: !w,
      scene: S && !!bf(e).scene,
      sceneLocked: !!L
    }), F.easing = C.selection ? b2(y, ca(C.selection), C.selection.frames, ua(C.selection.owner)) : null;
  }
  function rp() {
    return Fx(g, { cameraOnly: w, camera: N });
  }
  function Oc(c = null) {
    if (L != null && L.frames) return L.frames;
    const h = g.timeline.fps, y = g.stickers.find(_r), M = y ? Nb() : null, P = Math.max(
      F.videoTransport.ready ? Math.round(Number(F.videoTransport.duration || 0) * h) : 0,
      M ? my(y.clip, h, M.meta) : 0
    );
    return O0(g, { minimum: Math.round(h * 5), frames: P, openClip: c, camera: w && !L || N });
  }
  function kr(c) {
    return c === "camera" ? uo() ? g.camera : null : c === "scene" ? S ? g.scene : null : g.stickers.find((h) => h.id === c) || null;
  }
  function ca(c) {
    return c.lane ? [c.lane] : ea(kr(c.owner));
  }
  function ua(c) {
    if (c === "camera") return 0;
    const { clip: h } = kr(c);
    return h.start - h.in;
  }
  function ip(c) {
    return `${Xo(c, u.frame)}:${c.start - c.in}`;
  }
  function xs(c) {
    const h = kr(c);
    return !!h && h.locked !== !0;
  }
  function u1(c) {
    const h = Math.max(0, Math.round(c));
    if (h === u.frame) return;
    pr(), u.frame = h, G.frame.value = h, pr();
    const y = [u.selectedId, u.worldSelectedId];
    wc(), un(), y[0] !== u.selectedId || y[1] !== u.worldSelectedId ? rt() : c1() && np(), lt(), Ke({ reason: Mt.PLAYHEAD });
  }
  function d1() {
    return Pe instanceof HTMLVideoElement && !!Pe.getAttribute("src");
  }
  function f1(c) {
    mo(), ur.seek(c);
  }
  function pn() {
    v && ur.stop();
  }
  function Fc() {
    mo(), ur.toggle();
  }
  function ks() {
    pr(), un(), rt(), lt(), Ke();
  }
  function fi() {
    bt(), Nt(), ks();
  }
  function p1() {
    const { selection: c } = C;
    xs(c.owner) && (pn(), Mx(kr(c.owner), ca(c), c.frames, u.frame - ua(c.owner)), C.selection = null, fi());
  }
  function op(c) {
    const h = Qo(c);
    if (h === null || h === g.timeline.fps) return;
    pn();
    const y = Math.round(u.frame * h / g.timeline.fps);
    Yx(g, h), C.selection = null, ur.seek(y), fi();
  }
  function h1() {
    const c = Ou(e);
    c !== null && c !== g.timeline.fps && op(c);
  }
  function m1(c) {
    if (!(n || !v)) {
      if (c.type === "seek") {
        if (c.phase === "move") {
          C.scrubFrame = c.frame, Re.request("seek");
          return;
        }
        Re.cancel(), c.phase === "start" && mo(), ur.seek(c.frame);
        return;
      }
      if (c.type === "play") {
        Fc();
        return;
      }
      if (c.type === "mute") {
        Qf(), xr();
        return;
      }
      if (c.type === "toggle-expanded") {
        C.expanded = !(C.expanded ?? rp()), C.selection = null, xr();
        return;
      }
      if (c.type === "toggle-row") {
        C.openRows.has(c.id) ? C.openRows.delete(c.id) : C.openRows.add(c.id), xr();
        return;
      }
      if (c.type === "toggle-visible") {
        if (c.id === ib) g.painting_visible = !g.painting_visible;
        else {
          const h = kr(c.id);
          if (!h || c.id === "camera" && !N) return;
          h.visible = !h.visible;
        }
        wc(), fi();
        return;
      }
      if (c.type === "select-row") {
        const h = g.stickers.find((y) => y.id === c.id);
        if (h && !h.visible || c.id === "camera" && !fs()) return;
        h && !Xo(h.clip, u.frame) && f1(h.clip.start), (h == null ? void 0 : h.placement) === "world" ? kc(h.id) : c.id === "camera" ? Gn(dt()) : Gn(so().find((y) => y.id === c.id) || null), go(), C.selection = null, rt(), lt(), Ke();
        return;
      }
      if (c.type === "select-keys") {
        const h = ua(c.owner), y = c.frames.map(($) => $ - h), M = C.selection, P = (M == null ? void 0 : M.owner) === c.owner && M.lane === c.lane;
        if (c.additive && P) {
          const $ = new Set(M.frames);
          for (const Q of y)
            $.has(Q) ? $.delete(Q) : $.add(Q);
          M.frames = [...$].sort((Q, se) => Q - se);
        } else
          C.selection = y.length ? { owner: c.owner, lane: c.lane, frames: y } : null;
        xr();
        return;
      }
      if (c.type === "move-keys") {
        const h = C.selection;
        if (!h || !xs(h.owner)) return;
        const y = kr(h.owner), M = ca(h);
        if (c.phase === "start") {
          pn(), C.drag = { keyframes: M.map((Q) => structuredClone(y[Q].keyframes)), frames: h.frames };
          return;
        }
        const { drag: P } = C;
        if (!(P != null && P.keyframes)) return;
        M.forEach((Q, se) => {
          y[Q].keyframes = structuredClone(P.keyframes[se]);
        });
        const $ = Nx(y, M, P.frames, c.delta, -ua(h.owner));
        if (h.frames = P.frames.map((Q) => Q + $), c.phase !== "end") {
          Re.request("timeline"), Re.request("view");
          return;
        }
        Re.cancel(), C.drag = null, $ ? fi() : ks();
        return;
      }
      if (c.type === "clip") {
        const h = c.id === "scene" ? kr("scene") : g.stickers.find(($) => $.id === c.id);
        if (!h || h.locked) return;
        if (c.phase === "start") {
          pn(), C.drag = { clip: { ...h.clip }, span: Oc(h.clip) };
          return;
        }
        const { drag: y } = C;
        if (!(y != null && y.clip)) return;
        const M = y.clip, P = ip(h.clip);
        if (h.clip = { ...M }, c.delta && c.mode === "move" ? Cx(h.clip, c.delta) : c.delta && c.mode === "start" ? Ix(h.clip, M.start + c.delta) : c.delta && Ex(h.clip, (M.duration === null ? y.span : M.start + M.duration) + c.delta, y.span), c.phase !== "end") {
          Re.request("timeline"), ip(h.clip) !== P && Re.request("view");
          return;
        }
        Re.cancel(), C.drag = null, wc(), JSON.stringify(h.clip) !== JSON.stringify(M) ? fi() : ks();
        return;
      }
      if (c.type === "key-row") {
        if (c.owner === "scene" || !xs(c.owner)) return;
        pn(), wx(kr(c.owner), u.frame - ua(c.owner)), fi();
        return;
      }
      if (c.type === "fps") {
        const h = Dx(c.fps);
        if (h === null || h === g.timeline.fps || F.timeline.fpsLocked) {
          xr();
          return;
        }
        op(h);
        return;
      }
      if (c.type === "length") {
        const h = Lx(c.length);
        if (h === void 0 || h === g.timeline.length) {
          xr();
          return;
        }
        pn(), g.timeline.length = h, fi();
        return;
      }
      if (c.type === "easing") {
        const h = C.selection;
        if (!h || !xs(h.owner)) return;
        pn(), Ax(kr(h.owner), ca(h), h.frames, c.easing), c.commit ? fi() : ks();
      }
    }
  }
  async function ap(c) {
    if (n || w || t !== "stickers" && t !== "cutout" || !mr(c)) return;
    if (S) {
      pn(), await sp(c);
      return;
    }
    const h = Hi("asset"), y = Aa(e, `add:${h}`, async () => {
      try {
        const { image: M } = await Ca(c);
        U.set(h, M);
        const P = Hi("st");
        g.stickers.push({
          id: P,
          asset_id: h,
          yaw_deg: u.viewYaw,
          pitch_deg: u.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ps(30, Number(M.naturalWidth || M.width || 1), Number(M.naturalHeight || M.height || 1)),
          rot_deg: 0,
          z_index: gs()
        }), Gn(g.stickers[g.stickers.length - 1]), da(), rt(), lt(), Ke();
        const $ = await Ki(c, {
          fetchApi: (fe, Ge) => Zt.fetchApi(fe, Ge)
        });
        if (!(Array.isArray(g.stickers) ? g.stickers : []).filter((fe) => String((fe == null ? void 0 : fe.asset_id) || "") === h).length) return;
        g.assets[h] = $, yo(), bt(), Nt(), rt(), lt(), Ke();
      } catch (M) {
        delete g.assets[h], U.delete(h);
        const P = Array.isArray(g.stickers) ? g.stickers : [], $ = P.filter((Q) => String((Q == null ? void 0 : Q.asset_id) || "") === h);
        throw $.length && (g.stickers = P.filter((Q) => String((Q == null ? void 0 : Q.asset_id) || "") !== h), $.some((Q) => String((Q == null ? void 0 : Q.id) || "") === String(u.selectedId || "")) && Gn(null), rt(), lt(), Ke(), Nt()), M;
      }
    });
    try {
      await y;
    } catch {
    }
  }
  function g1() {
    var c;
    n || t !== "stickers" && t !== "cutout" || (c = pe == null ? void 0 : pe.openImagePicker) == null || c.call(pe, "add");
  }
  function y1() {
    var c;
    n || !S || (c = pe == null ? void 0 : pe.openImagePicker) == null || c.call(pe, "add-world");
  }
  async function b1(c) {
    n || !S || !mr(c) || (pn(), await sp(c, "world"));
  }
  function v1() {
    const c = { x: V.width / 2, y: V.height / 2 }, h = aa() ? Ue.pick(ia(), c.x, c.y, V.width, V.height) : null;
    return Ik(Ai(), h, gc());
  }
  async function sp(c, h = "sky") {
    const y = Hi("st"), M = Aa(e, `add:${y}`, async () => {
      const { image: P } = await Ca(c), $ = {
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: ps(30, Number(P.naturalWidth || P.width || 1), Number(P.naturalHeight || P.height || 1)),
        rot_deg: 0
      }, Q = { kind: "file", filename: "" }, se = h === "world" ? sk(y, Q, v1()) : df(y, Q, $, gs());
      U.set(Nc(se), P), g.stickers.push(se), h === "world" ? kc(y) : Gn(se), da(), rt(), lt(), Ke();
      try {
        const fe = await Ki(c, {
          fetchApi: (Se, Ce) => Zt.fetchApi(Se, Ce)
        }), Ge = g.stickers.find((Se) => Se.id === y);
        if (!Ge) return;
        Ge.source = rl(fe), U.set(Nc(Ge), P), bt(), Nt();
      } catch (fe) {
        throw g.stickers = g.stickers.filter((Ge) => Ge.id !== y), u.selectedId === y && Gn(null), u.worldSelectedId === y && Df(), bt(), Nt(), fe;
      } finally {
        rt(), lt(), Ke();
      }
    });
    try {
      await M;
    } catch {
    }
  }
  async function _1(c, h) {
    const y = Aa(e, `replace:${h}:${Hi("asset")}`, async () => {
      const { image: M } = await Ca(c), P = await Ki(c, {
        fetchApi: (Q, se) => Zt.fetchApi(Q, se)
      }), $ = g.stickers.find((Q) => Q.id === h);
      if ($) {
        $.source = rl(P), $.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const Q of [$.size.value, ...$.size.keyframes.map((se) => se.value)])
          Q.vFOV_deg = ps(Q.hFOV_deg, Number(M.naturalWidth || M.width || 1), Number(M.naturalHeight || M.height || 1));
        U.set(Nc($), M), un(), bt(), Nt(), rt(), lt(), Ke();
      }
    });
    try {
      await y;
    } catch {
    }
  }
  async function S1(c) {
    if (n || t !== "stickers" && t !== "cutout") return;
    const h = Mn();
    if (!h || !dn(h) || _r(h) || !mr(c)) return;
    if (S) {
      await _1(c, h.id);
      return;
    }
    const y = String(h.id || ""), M = Hi("asset"), P = Aa(e, `replace:${y}:${M}`, async () => {
      var Se;
      const $ = (Array.isArray(g.stickers) ? g.stickers : []).find((Ce) => String((Ce == null ? void 0 : Ce.id) || "") === y) || null;
      if (!$ || !dn($) || _r($)) return;
      const Q = String($.asset_id || ""), se = Q ? gn(((Se = g.assets) == null ? void 0 : Se[Q]) || null) : null, fe = Number($.vFOV_deg || 0), Ge = $.crop && typeof $.crop == "object" ? { ...$.crop } : null;
      try {
        const { image: Ce } = await Ca(c);
        U.set(M, Ce), $.asset_id = M, $.vFOV_deg = ps(
          Number($.hFOV_deg || 30),
          Number(Ce.naturalWidth || Ce.width || 1),
          Number(Ce.naturalHeight || Ce.height || 1)
        ), $.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, un(), rt(), lt(), Ke();
        const He = await Ki(c, {
          fetchApi: (Ve, pt) => Zt.fetchApi(Ve, pt)
        }), et = (Array.isArray(g.stickers) ? g.stickers : []).find((Ve) => String((Ve == null ? void 0 : Ve.id) || "") === y) || null;
        if (!et || String(et.asset_id || "") !== M) return;
        g.assets[M] = He, yo(), bt(), Nt(), rt(), lt(), Ke();
      } catch (Ce) {
        delete g.assets[M], U.delete(M);
        const He = (Array.isArray(g.stickers) ? g.stickers : []).find((et) => String((et == null ? void 0 : et.id) || "") === y) || null;
        throw He && String(He.asset_id || "") === M && (Q && se && (g.assets[Q] = se), He.asset_id = Q, He.vFOV_deg = fe, He.crop = Ge ? { ...Ge } : null), un(), Nt(), rt(), lt(), Ke(), Ce;
      }
    });
    try {
      await P;
    } catch {
    }
  }
  function w1() {
    var h;
    if (n) return;
    const c = Mn();
    !c || !dn(c) || _r(c) || (h = pe == null ? void 0 : pe.openImagePicker) == null || h.call(pe, "replace");
  }
  async function x1() {
    if (n || t !== "stickers") return;
    if (S) {
      await k1();
      return;
    }
    const c = g.assets && typeof g.assets == "object" ? g.assets : {}, h = Object.entries(c).filter(([, M]) => {
      const P = String((M == null ? void 0 : M.type) || "").toLowerCase(), $ = String((M == null ? void 0 : M.value) || "");
      return P === "dataurl" && $.startsWith("data:image");
    });
    if (!h.length) return;
    let y = !1;
    for (const [M, P] of h)
      try {
        const $ = String((P == null ? void 0 : P.value) || "");
        if (!$) continue;
        const Q = await fetch($).then((Ce) => Ce.blob()), se = String(Q.type || "image/png").split("/")[1] || "png", fe = String((P == null ? void 0 : P.name) || `${M}.${se}`), Ge = new File([Q], fe, { type: Q.type || "image/png" }), Se = await Ki(Ge, {
          fetchApi: (Ce, He) => Zt.fetchApi(Ce, He)
        });
        g.assets[M] = {
          ...Se,
          w: Number((P == null ? void 0 : P.w) || 0),
          h: Number((P == null ? void 0 : P.h) || 0)
        }, y = !0;
      } catch {
      }
    y && (Nt(), Ke());
  }
  async function k1() {
    let c = !1;
    for (const h of g.stickers) {
      const y = h.source.data_url;
      if (y)
        try {
          const M = await fetch(y).then((se) => se.blob()), P = String(M.type || "image/png").split("/")[1] || "png", $ = new File([M], `${h.id}.${P}`, { type: M.type || "image/png" }), Q = await Ki($, {
            fetchApi: (se, fe) => Zt.fetchApi(se, fe)
          });
          h.source = rl(Q), c = !0;
        } catch {
        }
    }
    c && (Nt(), Ke());
  }
  function M1() {
    if (n || t !== "cutout") return;
    const c = dt();
    if (c) {
      Gn(c), u.mode = "pano", w && li() ? Ss(B0(Fb(Ai(), c.position), gb(), V.width, V.height)) : ep(Wt(Number(c.yaw_deg || 0)), Ie(Number(c.pitch_deg || 0), -89.9, 89.9)), rt(), lt(), Ke({ cause: "cutout_frame" });
      return;
    }
    const h = l0({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Wt(Number(u.viewYaw || 0)),
      pitchDeg: Number(u.viewPitch || 0),
      viewFovDeg: Number(u.viewFov || 90)
    });
    g.shots = [h], Gn(h), da(), u.mode = "pano", bt(), Nt(), rt(), lt(), Ke({ cause: "cutout_frame" });
  }
  function N1() {
    n || !N || uo() || (pn(), g.camera = Jx(Ai()), pr(), Gn(dt()), da(), bt(), Nt(), rt(), lt(), Ke({ cause: "cutout_frame" }));
  }
  function P1() {
    pn(), g.camera = null, Gn(null), pr(), bt(), Nt(), rt(), lt(), Ke({ cause: "cutout_frame" });
  }
  function lp(c, h) {
    N && ui(c) && (g.camera.projection = h === Go ? "erp" : "perspective", h === Go) || F1(c, h);
  }
  function A1() {
    n || t !== "cutout" || (g.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, g.active.selected_shot_id = null, bt(), Nt(), rt(), lt(), Ke());
  }
  function cp(c, h, y = "Clear") {
    return new Promise((M) => {
      F.confirmDialog = {
        visible: !0,
        title: String(c || ""),
        text: String(h || ""),
        confirmLabel: String(y || "Confirm"),
        resolve: M
      };
    });
  }
  async function C1() {
    var y, M;
    if (n || !await cp(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    g.painting = Bo(null), Sr();
    const h = bb();
    if (t === "stickers")
      g.stickers = S ? g.stickers.filter((P) => P.placement === "world" || h.includes(P)) : h, S || (g.assets = {}), u.selectedId = ((y = h[0]) == null ? void 0 : y.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], g.active.selected_sticker_id = ((M = h[0]) == null ? void 0 : M.id) || null, yo();
    else {
      const P = Wx(g.shots, g.active.selected_shot_id);
      g.stickers = h, g.assets = {}, g.shots = P.shots, u.selectedId = P.selectedShotId, u.selectedIds = u.selectedId ? [u.selectedId] : [], g.active.selected_sticker_id = null, g.active.selected_shot_id = P.selectedShotId, !P.selectedShotId && u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, yo();
    }
    bt(), Nt(), rt(), lt(), Ke();
  }
  async function I1(c) {
    var $, Q, se, fe;
    if (n) return;
    const h = c === "mask" ? "mask" : "paint", y = h === "mask" ? "Mask" : "Paint", M = As(h);
    if (!(!M.length && !((($ = u.interaction) == null ? void 0 : $.kind) === "draw" && ((Q = u.interaction) == null ? void 0 : Q.layerKind) === h) || !await cp(
      `Clear ${y}`,
      `This will remove all ${h} strokes in the current node.`,
      `Clear ${y}`
    ))) {
      if (((se = u.interaction) == null ? void 0 : se.kind) === "draw" && ((fe = u.interaction) == null ? void 0 : fe.layerKind) === h) {
        const Ge = qn(u.interaction);
        Ge && u.paintEngine.cancelActiveStroke(Ge), u.interaction = null;
      }
      M.length = 0, g.painting.raster_objects = zr().filter((Ge) => String((Ge == null ? void 0 : Ge.layerKind) || "paint") !== h), h === "paint" && (lo().length = 0), Sr(), bt(), Nt(), rt(), lt(), En(), Ke();
    }
  }
  function E1() {
    if (n) return;
    const c = Mn();
    if (!c || !dn(c) || _r(c) || S && Ob(c)) return;
    let h;
    S ? h = lk(c, Hi("st"), gs()) : (h = JSON.parse(JSON.stringify(c)), h.id = Hi("st"), h.yaw_deg = Wt((h.yaw_deg || 0) + 8), h.z_index = gs()), g.stickers.push(h), g.active.selected_sticker_id = h.id, u.selectedId = h.id, u.selectedIds = [h.id], un(), bt(), Nt(), lt(), rt(), Ke();
  }
  function O1() {
    const c = sa();
    return c ? (Cc(c) && (pn(), ak(g, c.id), Df(), un(), bt(), Nt(), rt(), lt(), go(), Ke()), !0) : !1;
  }
  function up() {
    var y, M, P, $, Q;
    if (n || w) return;
    const c = Ni(), h = Mn();
    if (!(!h && c.length === 0) && !c.some((se) => cr(se))) {
      if (pn(), c.length > 1) {
        const se = new Set(c.filter((Se) => Jn(Se)).map((Se) => String(Se.actionGroupId || Se.id || ""))), fe = new Set(c.filter((Se) => jr(Se)).map((Se) => Pi(Se.rasterObjectId || Se.id || ""))), Ge = new Set(c.filter(dn).map((Se) => String(Se.id || "")));
        se.size > 0 && (g.painting.paint.strokes = (Array.isArray((M = (y = g.painting) == null ? void 0 : y.paint) == null ? void 0 : M.strokes) ? g.painting.paint.strokes : []).filter((Se) => !se.has(String((Se == null ? void 0 : Se.actionGroupId) || ""))), g.painting.groups = lo().filter((Se) => !se.has(String((Se == null ? void 0 : Se.actionGroupId) || (Se == null ? void 0 : Se.id) || ""))), Sr()), fe.size > 0 && (g.painting.raster_objects = zr().filter((Se) => !fe.has(String((Se == null ? void 0 : Se.id) || ""))), ho()), Ge.size > 0 && (g.stickers = (Array.isArray(g.stickers) ? g.stickers : []).filter((Se) => Ge.has(String((Se == null ? void 0 : Se.id) || "")) ? _r(Se) ? (bs(Se) || (Se.visible = !1), !0) : !1 : !0), yo(), un()), u.selectedId = null, u.selectedIds = [], bt(), Nt(), rt(), lt(), Ke();
        return;
      }
      if (Jn(h)) {
        const se = String(h.actionGroupId || h.id || "").trim();
        g.painting.paint.strokes = (Array.isArray(($ = (P = g.painting) == null ? void 0 : P.paint) == null ? void 0 : $.strokes) ? g.painting.paint.strokes : []).filter((fe) => String((fe == null ? void 0 : fe.actionGroupId) || "").trim() !== se), g.painting.groups = lo().filter((fe) => String((fe == null ? void 0 : fe.actionGroupId) || (fe == null ? void 0 : fe.id) || "").trim() !== se), Sr(), u.selectedId = null, u.selectedIds = [], bt(), Nt(), rt(), lt(), Ke();
        return;
      }
      if (jr(h)) {
        const se = Pi(h.rasterObjectId || h.id || "");
        g.painting.raster_objects = zr().filter((fe) => String((fe == null ? void 0 : fe.id) || "").trim() !== se), ho(), u.selectedId = null, u.selectedIds = [], bt(), Nt(), rt(), lt(), Ke();
        return;
      }
      if (N && ui(h)) {
        P1();
        return;
      }
      if (t === "stickers" || dn(h)) {
        if (_r(h)) {
          if (bs(h)) return;
          h.visible = !1, un(), bt(), Nt(), rt(), lt(), Ke();
          return;
        }
        g.stickers = g.stickers.filter((se) => se.id !== h.id), yo(), un(), u.selectedId = ((Q = so()[0]) == null ? void 0 : Q.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], g.active.selected_sticker_id = u.selectedId, bt(), Nt(), rt(), lt(), Ke();
        return;
      }
      A1();
    }
  }
  function Tc(c, h) {
    const y = me.frameSafeRect;
    if (!c || !y || u.mode !== "frame") return !1;
    const M = Mu * Qi(y, c), P = Jd(qd(y, h), M);
    return c.hFOV_deg = P.hFOV_deg, c.vFOV_deg = P.vFOV_deg, !0;
  }
  function F1(c, h) {
    if (!c || c.locked === !0) return;
    const y = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, M = (() => {
      const se = String(c.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(se)) {
        const [Se, Ce] = se.split(":").map((He) => Number(He));
        if (Number.isFinite(Se) && Number.isFinite(Ce)) return Se >= Ce;
      }
      const fe = Number(c.hFOV_deg || 64), Ge = Number(c.vFOV_deg || 40);
      return Math.abs(fe - Ge) > 1e-6 ? fe >= Ge : io(c) >= 1;
    })();
    let [P, $] = y[String(h)] || y["1:1"];
    P >= $ !== M && ([P, $] = [$, P]);
    const Q = P / $;
    if (!Tc(c, Q)) {
      const se = Ie(Number(c.vFOV_deg || 40), 1, 179);
      c.vFOV_deg = se, c.hFOV_deg = el(se, Q);
    }
    c.aspect_id = `${P}:${$}`;
  }
  function T1(c, h, y) {
    if (!c || c.locked === !0) return !1;
    const M = ns(h, y);
    if (!M) return !1;
    const P = M.ratio;
    if (!Tc(c, P)) {
      const $ = Ie(Number(c.vFOV_deg || 40), 1, 179);
      c.vFOV_deg = $, c.hFOV_deg = el($, P);
    }
    return c.aspect_id = M.label, !0;
  }
  function dp(c) {
    if (!c || c.locked === !0) return;
    const h = String(c.aspect_id || "").trim(), y = Si(c), M = y.tanHalfX / Math.max(1e-12, y.tanHalfY), P = 1 / Math.max(1e-12, M);
    if (!Tc(c, P)) {
      const $ = Ie(Number(c.vFOV_deg || 60), 1, 179);
      c.vFOV_deg = $, c.hFOV_deg = el($, P);
    }
    if (/^\d+:\d+$/.test(h)) {
      const [$, Q] = h.split(":");
      c.aspect_id = `${Q}:${$}`;
    } else
      c.aspect_id = Bi(c);
  }
  function D1() {
    n || (g.projection_model = "pinhole_rectilinear", g.alpha_mode = "straight", s && (g.output_preset = _(Number(g.output_preset || 2048))), l && (g.coverage = Rn(l.value)), p && (g.bg_color = String(p.value || g.bg_color || "#00ff00")), Wn(), e.setDirtyCanvas(!0, !0));
  }
  function Wn() {
    var h;
    if (n) return;
    pr(), z0(g), g.coverage = Rn(g.coverage), $0(e, g.active);
    const c = j0(e, g);
    f && !H0(e, c, String(f.value ?? ""), { rebased: W }) && (f.value = c, (h = f.callback) == null || h.call(f, c));
  }
  const fp = () => Wn();
  n || (e.__panoFlushStateBeforeQueue = fp);
  function Dc() {
    g.ui_settings = JI(g.ui_settings), n || Wn();
  }
  function Nt() {
    var c;
    n || (Wn(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }
  function L1() {
    n || Tb() && Jf().catch((c) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", c);
    });
  }
  function R1(c = {}) {
    var M, P, $, Q, se, fe, Ge, Se, Ce, He;
    const h = c.syncPreview !== !1, y = c.syncGraph !== !1;
    h && ((P = (M = e.__panoPreviewNodeRuntime) == null ? void 0 : M.requestDraw) == null || P.call(M), (Q = ($ = e.__panoDomPreview) == null ? void 0 : $.requestDraw) == null || Q.call($), (se = e.setDirtyCanvas) == null || se.call(e, !0, !1)), y && ((Ge = (fe = e.graph) == null ? void 0 : fe.setDirtyCanvas) == null || Ge.call(fe, !0, !0), (He = (Ce = (Se = nr) == null ? void 0 : Se.canvas) == null ? void 0 : Ce.setDirty) == null || He.call(Ce, !0, !0));
  }
  function da() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", En(), rt());
  }
  function pp() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function pr(c = !0) {
    var M, P;
    if (!W) return;
    const h = z;
    if (!fs()) {
      z = null, (M = g.shots) != null && M.length && (g.shots = []), h && hp(h, null);
      return;
    }
    const y = (P = g.shots) == null ? void 0 : P[0];
    c && y && z && Qx(g.camera, u.frame, y, z), z = Zh(g.camera, u.frame), y ? Object.assign(y, z, { position: [...z.position] }) : g.shots = [{ ...z, position: [...z.position] }], h || hp(null, z);
  }
  function hp(c, h) {
    var $, Q;
    !h && u.mode === "frame" && mp(c);
    const y = (h == null ? void 0 : h.position) ?? [0, 0, 0];
    if (((Q = ($ = u.viewTransition) == null ? void 0 : $.end) == null ? void 0 : Q.mode) === "3dof") {
      Ss({ ...Ai(), position: y }, u.viewTransition.end);
      return;
    }
    if (u.mode !== "pano" || u.spaceMode !== "3dof" || !Sc()) return;
    const M = (c == null ? void 0 : c.position) ?? [0, 0, 0];
    if (M.every((se, fe) => se === y[fe])) return;
    const P = { ...Ai(), position: M };
    tn({ mode: "6dof", position: M, moved: !0 }), u.viewDistance = P.distance, Ss({ ...P, position: y }, { mode: "3dof", moved: !1 });
  }
  function mp(c) {
    if (u.mode = "pano", !c) return;
    mc();
    const h = Ai().distance;
    u.viewYaw = Wt(c.yaw_deg), u.viewPitch = Ie(c.pitch_deg, -89.9, 89.9), u.viewFov = Ie(c.hFOV_deg, 35, 140), u.spaceMode === "6dof" && tn({ mode: "6dof", position: [...c.position], moved: !0 }), u.viewDistance = h, me.backgroundDirty = !0;
  }
  function dt() {
    if (!R) return null;
    const c = Array.isArray(g.shots) ? g.shots : [];
    if (!c.length) return null;
    const h = String(g.active.selected_shot_id || "");
    return c.find((y) => String((y == null ? void 0 : y.id) || "") === h) || c[0] || null;
  }
  function V1() {
    var et, Ve, pt, it, At;
    if (!V) return null;
    const c = (et = V.getBoundingClientRect) == null ? void 0 : et.call(V), h = Number((c == null ? void 0 : c.width) || 0) > 0 ? V.width / c.width : 1, y = Number((c == null ? void 0 : c.height) || 0) > 0 ? V.height / c.height : 1;
    me.frameCanvasScale = Math.min(h, y);
    let M = 24, P = 24;
    const $ = Math.max(M + 1, V.width - 24);
    let Q = Math.max(P + 1, V.height - 24);
    const se = (Ve = k == null ? void 0 : k.getBoundingClientRect) == null ? void 0 : Ve.call(k), fe = (pt = O == null ? void 0 : O.getBoundingClientRect) == null ? void 0 : pt.call(O);
    let Ge = 24;
    se && c && se.width > 0 && se.height > 0 && (Ge = Math.max(Ge, (se.right - c.left) * h + jm)), fe && c && fe.width > 0 && fe.height > 0 && ((it = F.frameRail) == null ? void 0 : it.visible) === !0 && (Ge = Math.max(Ge, (c.right - fe.left) * h + jm)), M = Math.max(M, Ge);
    const Se = Math.min($, V.width - Ge);
    let Ce = 24;
    const He = (At = Ae == null ? void 0 : Ae.getBoundingClientRect) == null ? void 0 : At.call(Ae);
    if (He && c && He.width > 0 && He.height > 0 && (Ce = Math.max(Ce, (He.bottom - c.top) * y + Nu)), [ge, T].forEach((gt) => {
      var mn;
      if (!gt || !c) return;
      const _t = getComputedStyle(gt);
      if (_t.display === "none" || _t.visibility === "hidden" || Number(_t.opacity) <= 0) return;
      const Ot = (mn = gt.getBoundingClientRect) == null ? void 0 : mn.call(gt);
      !Ot || Ot.width <= 0 || Ot.height <= 0 || (Ce = Math.max(Ce, (c.bottom - Ot.top) * y + Nu));
    }), te && c) {
      const gt = getComputedStyle(te);
      gt.display !== "none" && gt.visibility !== "hidden" && Number(gt.opacity) > 0 && (Ce = Math.max(Ce, (OI + Nu) * y));
    }
    return P = Math.max(P, Ce), Q = Math.max(P + 1, Math.min(Q, V.height - Ce)), {
      x: M,
      y: P,
      w: Math.max(1, Se - M),
      h: Math.max(1, Q - P)
    };
  }
  function Ms(c = dt()) {
    if (!c || !V) return null;
    const h = me.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, V.width - 48),
      h: Math.max(1, V.height - 48)
    };
    return Hw(h, c, Mu * Qi(h, c));
  }
  function Wr(c = dt()) {
    const h = Ms(c);
    return h ? { x: h.x, y: h.y, w: h.w, h: h.h } : null;
  }
  function Lc() {
    return R && !!dt();
  }
  function $1(c, h) {
    const y = dt();
    if (!y || y.locked === !0) return !1;
    const M = Number(h) > 0, P = u0(y, h);
    if (!P) return !1;
    if (M) {
      const $ = Mu * Qi(
        me.frameSafeRect || { w: V.width, h: V.height },
        P
      ), Q = Zd({ width: V.width, height: V.height }, $);
      if (Q.halfW < V.width * 0.5 - 1e-6 || Q.halfH < V.height * 0.5 - 1e-6) return !1;
    }
    return y.hFOV_deg = P.hFOV_deg, y.vFOV_deg = P.vFOV_deg, gp(), rt(), !0;
  }
  function gp() {
    u.frameWheelChanged = !0, u.frameWheelCommitTimer && window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = window.setTimeout(() => {
      u.frameWheelCommitTimer = 0, u.frameWheelChanged && (u.frameWheelChanged = !1, bt(), Nt(), rt());
    }, 180);
  }
  function Rc() {
    return W && u.mode === "frame" && Sc();
  }
  function fa() {
    const c = dt(), h = Ms(c);
    return c && h ? ey(c, h, { width: V.width, height: V.height }) : null;
  }
  function yp() {
    var c;
    return ((c = gc()) == null ? void 0 : c.radius) || yr;
  }
  function pa(c) {
    const { position: h, yaw_deg: y, pitch_deg: M, roll_deg: P, hFOV_deg: $ } = c.shot;
    return { position: h, yaw_deg: y, pitch_deg: M, roll_deg: P, hFOV_deg: $, distance: yp() };
  }
  function bp(c, h) {
    const { rect: y } = c;
    return Ue.pickSurface(Ub(c.shot), h.x - y.x, h.y - y.y, y.w, y.h);
  }
  function vp(c, h, y) {
    return nd(h, bp(c, y), null, la());
  }
  function _p(c) {
    return JSON.stringify([pa(c), c.rect]);
  }
  function Sp(c) {
    const h = dt();
    h.position = [...c.position], h.yaw_deg = c.yaw_deg, h.pitch_deg = c.pitch_deg;
  }
  function wp(c, h) {
    const y = dt();
    !y || n || y.locked === !0 || (u.interaction = {
      kind: "pan_frame",
      shot: y,
      last: c,
      start: { yaw_deg: Number(y.yaw_deg || 0), pitch_deg: Number(y.pitch_deg || 0) },
      changed: !1
    }, It(c), V.setPointerCapture(h));
  }
  function z1(c, h, y) {
    const M = fa();
    if (!M || n) return;
    const P = pa(M);
    u.interaction = c === "orbit" ? { kind: "frame_orbit", last: h, pivot: vp(M, P, h), changed: !1 } : { kind: "frame_pan", last: h, depth: G0(P, la()), changed: !1 }, It(h), V.setPointerCapture(y);
  }
  function j1(c, h) {
    const y = fa();
    if (!y) return;
    const M = pa(y), P = h.x - c.last.x, $ = h.y - c.last.y;
    Sp(c.kind === "frame_pan" ? tm(M, P, $, y.rect.w, y.rect.h, c.depth) : em(M, P, $, V.height, c.pivot)), c.changed = c.changed || P !== 0 || $ !== 0, c.last = h, Ke({ localOnly: !0, cause: "frame_view" });
  }
  function H1(c, h) {
    const y = fa();
    if (!y || n) return;
    const M = pa(y), P = performance.now(), $ = { x: c.x, y: c.y, time: P, key: Ue.contentRevision(), view: _p(y) };
    if (!W0(Be, $)) {
      const Q = bp(y, c);
      Be = { ...$, cost: performance.now() - P, hit: Q };
    }
    Sp(K0(M, nd(M, Be.hit, null, la()), h, la())), Be.view = _p(fa() ?? y), Be.wheelTime = P, gp(), rt(), Ke({ localOnly: !0, cause: "frame_view" });
  }
  function G1() {
    return u.frameWheelCommitTimer && (window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = 0), u.frameWheelChanged ? (u.frameWheelChanged = !1, bt(), Nt(), rt(), !0) : !1;
  }
  function ha() {
    const c = u.interaction;
    if (!(c != null && c.shot) || !c.start || c.kind !== "pan_frame" && c.kind !== "roll_frame") return !1;
    const h = c.kind === "roll_frame";
    return c.kind === "pan_frame" ? (c.shot.yaw_deg = c.start.yaw_deg, c.shot.pitch_deg = c.start.pitch_deg) : c.shot.roll_deg = c.start.roll_deg, h && Ei(), u.interaction = null, fo(), Hr(), rt(), It(u.pointerPos), Ke({ localOnly: !0 }), !0;
  }
  function W1(c, h) {
    const y = Number(h || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, y / 2048)
    };
  }
  function Ii(c) {
    const h = String(c || "").trim();
    return h === "eraser" ? Yr : Ln[h] ? h : u.activeBrushPresetId || Yr;
  }
  function xp() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (pp() || Lc());
  }
  function kp() {
    var c;
    return xp() && ((c = u.pointerPos) == null ? void 0 : c.inside) === !0;
  }
  function Ns(c, h = !0) {
    const y = Number((c == null ? void 0 : c.x) || 0), M = Number((c == null ? void 0 : c.y) || 0), P = h !== !1, $ = u.pointerPos || { x: 0, y: 0, inside: !1 }, Q = $.inside !== P || Math.abs($.x - y) > 0.01 || Math.abs($.y - M) > 0.01;
    return u.pointerPos = { x: y, y: M, inside: P }, Q;
  }
  function K1() {
    var Se, Ce;
    if (!kp()) return null;
    const c = u.primaryTool === "mask" ? "mask" : "paint", h = c === "mask" ? u.maskTool : u.paintTool, y = Ii(h), M = Ln[y] || Ln[Yr], P = Number(u.brushSizes[y] ?? 10), $ = Math.max(1, P) * Math.max(0.1, Number(M.sizeScale ?? 1)), Q = Math.max(3, $ * 0.5), se = c === "mask" ? h === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : h === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Kn(u.paintColor), fe = c === "mask" ? h === "lasso_fill" ? 0.18 : 0.2 : h === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(se.a ?? 1) * 0.3), 0.16, 0.52), Ge = c === "mask" ? 0.95 : h === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(se.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: c,
      toolKind: h,
      preset: M,
      radius: Q,
      fillStyle: Pr(se, fe),
      strokeStyle: Pr(se, Ge),
      x: Number(((Se = u.pointerPos) == null ? void 0 : Se.x) || 0),
      y: Number(((Ce = u.pointerPos) == null ? void 0 : Ce.y) || 0),
      hotspotX: Q,
      hotspotY: Q
    };
  }
  function B1() {
    var He, et, Ve;
    const c = K1();
    if (!Xe) return;
    if (!c) {
      Xe.style.display = "none";
      return;
    }
    let h = c.radius * 2, y = c.radius * 2, M = "999px", P = 0, $ = c.fillStyle, Q = "1px solid rgba(222, 222, 222, 0.72)", se = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const fe = "rgba(222, 222, 222, 0.72)", Ge = "rgba(52, 52, 52, 0.72)";
    let Se = Number(c.hotspotX ?? h * 0.5), Ce = Number(c.hotspotY ?? y * 0.5);
    if (c.toolKind === "lasso_fill")
      h = Bl, y = Bl, M = "0", Q = "0", se = "none", Se = DI, Ce = LI, $ = GI(c.fillStyle, Ge, fe);
    else if (c.layerKind === "mask")
      $ = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (c.toolKind === "marker") {
      const pt = Math.max(1, Number(((He = c.preset) == null ? void 0 : He.aspect) ?? 1));
      h = Math.max(10, c.radius * 2 * pt), y = Math.max(6, c.radius * 2), M = `${Math.min(6, y * 0.42)}px`, P = Number(((Ve = (et = c.preset) == null ? void 0 : et.angle) == null ? void 0 : Ve.value) || 0) * Yi;
    } else c.toolKind === "brush" ? $ = `radial-gradient(circle at 50% 50%, ${c.strokeStyle} 0%, ${c.fillStyle} 45%, rgba(0,0,0,0) 100%)` : c.toolKind === "eraser" && ($ = "rgba(255,255,255,0.14)");
    Xe.style.display = "block", Xe.style.width = `${Math.round(h)}px`, Xe.style.height = `${Math.round(y)}px`, Xe.style.borderRadius = M, Xe.style.border = Q, Xe.style.boxShadow = se, Xe.style.background = $, Xe.style.backgroundRepeat = "no-repeat", Xe.style.backgroundPosition = "center", Xe.style.backgroundSize = "contain", Xe.style.transform = `translate(${Math.round(c.x - Se)}px, ${Math.round(c.y - Ce)}px) rotate(${P}deg)`;
  }
  function U1() {
    var gt;
    if (!le || !j) return;
    const c = u.primaryTool === "mask" ? "mask" : "paint", h = c === "mask" ? u.maskTool : u.paintTool;
    if (h === "lasso_fill") return;
    const y = Ii(h), M = Ln[y] || Ln[Yr], P = Number(u.brushSizes[y] ?? 10), $ = Math.max(1, P) * Math.max(0.1, Number(M.sizeScale ?? 1)), Q = Math.max(6, $ * 0.5), se = h === "eraser", fe = c === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : se ? { r: 1, g: 1, b: 1, a: 0.22 } : Kn(u.paintColor), Ge = c === "mask" ? Pr(fe, 0.22) : se ? "rgba(255,255,255,0.14)" : Pr(fe, Ie(Math.max(0.18, Number(fe.a ?? 1) * 0.34), 0.18, 0.56)), Se = c === "mask" ? Pr(fe, 0.96) : se ? "rgba(255,255,255,0.72)" : Pr(fe, Ie(Math.max(0.56, Number(fe.a ?? 1) * 0.96), 0.56, 1));
    let Ce = Q * 2, He = Q * 2, et = "999px", Ve = 0, pt = Ge;
    const it = "rgba(222, 222, 222, 0.72)", At = "rgba(52, 52, 52, 0.72)";
    if (c === "mask")
      pt = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (h === "marker") {
      const _t = Math.max(1, Number((M == null ? void 0 : M.aspect) ?? 1));
      Ce = Math.max(16, Q * 2 * _t), He = Math.max(10, Q * 2), et = `${Math.min(8, He * 0.42)}px`, Ve = Number(((gt = M == null ? void 0 : M.angle) == null ? void 0 : gt.value) || 0) * Yi;
    } else h === "brush" ? pt = `radial-gradient(circle at 50% 50%, ${Se} 0%, ${Ge} 48%, rgba(0,0,0,0) 100%)` : h === "lasso_fill" ? (Ce = Math.max(18, Q * 1.8), He = Ce, pt = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${Se} 43%, ${Se} 58%, rgba(0,0,0,0) 59%)`) : se && (pt = "rgba(255,255,255,0.12)");
    j.style.width = `${Math.round(Ce)}px`, j.style.height = `${Math.round(He)}px`, j.style.borderRadius = et, j.style.background = pt, j.style.border = `1px solid ${it}`, j.style.boxShadow = `0 0 0 1px ${At}`, j.style.transform = `rotate(${Ve}deg)`, We && (clearTimeout(We), We = 0), le.classList.remove("fade-out"), le.classList.add("show");
  }
  function Ps() {
    !le || !le.classList.contains("show") || (le.classList.add("fade-out"), We && clearTimeout(We), We = window.setTimeout(() => {
      le.classList.remove("show", "fade-out"), We = 0;
    }, 180));
  }
  function Mp(c, h, y, M) {
    const P = Ii(h), $ = Ln[P] || Ln[Yr], Q = u.brushSizes[P] ?? 10, se = Math.max(1, Q) * Math.max(0.1, $.sizeScale ?? 1), fe = W1(M, se), Ge = y.map((Ce) => ({
      ...Ce,
      t: Number((Ce == null ? void 0 : Ce.t) || 0),
      widthScale: Number.isFinite(Number(Ce == null ? void 0 : Ce.widthScale)) ? Math.max(0, Number(Ce.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(Ce == null ? void 0 : Ce.pressureLike)) ? Math.max(0, Number(Ce.pressureLike)) : 1
    })), Se = {
      id: Eo(c),
      actionGroupId: Eo("ag"),
      targetSpace: M && typeof M == "object" ? { ...M, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: c,
      toolKind: h,
      size: se,
      createdAt: Date.now(),
      color: c === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: fe.radiusModel,
      radiusValue: fe.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: Ge.map((Ce) => ({ ...Ce })),
        points: Ge.map((Ce) => ({ ...Ce }))
      }
    };
    return Vm(Se, $), u.mode, Number($.aspect ?? 1), Number(Se.aspect ?? 1), String(Se.stampKind || ""), Number(Se.size || 0), String(Se.radiusModel || ""), Number(Se.radiusValue || 0), { ...Se.targetSpace }, Se;
  }
  function Np(c, h, y, M) {
    const P = y.map((fe) => ({
      ...fe,
      t: Number((fe == null ? void 0 : fe.t) || 0),
      widthScale: Number.isFinite(Number(fe == null ? void 0 : fe.widthScale)) ? Math.max(0, Number(fe.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(fe == null ? void 0 : fe.pressureLike)) ? Math.max(0, Number(fe.pressureLike)) : 1
    })), $ = Ii(h), Q = Ln[$] || Ln[Yr], se = {
      id: Eo(c),
      actionGroupId: Eo("ag"),
      targetSpace: M && typeof M == "object" ? { ...M, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: c,
      toolKind: h,
      size: 10,
      createdAt: Date.now(),
      color: c === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: P.map((fe) => ({ ...fe }))
      }
    };
    return Vm(se, Q), u.mode, Number(Q.aspect ?? 1), Number(se.aspect ?? 1), String(se.stampKind || ""), { ...se.targetSpace }, se;
  }
  function As(c) {
    const h = g.painting || (g.painting = Bo(null)), y = h[c] || (h[c] = { strokes: [] });
    return Array.isArray(y.strokes) || (y.strokes = []), y.strokes;
  }
  function Y1(c, h, y = performance.now()) {
    let M;
    if (u.mode === "frame") {
      const Ge = dt();
      if (!Ge || (M = dr(h, Ge, y), !M)) return !1;
    } else
      M = wr(h, y);
    if (!M) return !1;
    const P = c.stroke.geometry.rawPoints || c.stroke.geometry.points, $ = c.stroke.geometry.points, Q = P[P.length - 1];
    if (Q) {
      const Ge = Math.abs(Number(M.u ?? M.x ?? 0) - Number(Q.u ?? Q.x ?? 0)), Se = Math.abs(Number(M.v ?? M.y ?? 0) - Number(Q.v ?? Q.y ?? 0));
      if (Ge < 15e-4 && Se < 15e-4) return !1;
    }
    const se = {
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    P.push({ ...se }), $.push({ ...se });
    const fe = qn(c);
    if (fe) {
      const Ge = u.paintEngine.ensureTarget(fe);
      u.paintEngine.appendStrokePoint(Ge, Number(se.u ?? 0), Number(se.v ?? 0), c.stroke);
    }
    return !0;
  }
  function X1(c, h, y = performance.now()) {
    var Q, se;
    let M;
    if (u.mode === "frame") {
      const fe = dt();
      if (!fe) return !1;
      M = dr(h, fe, y);
    } else
      M = wr(h, y);
    const P = (se = (Q = c == null ? void 0 : c.stroke) == null ? void 0 : Q.geometry) == null ? void 0 : se.points;
    if (!M || !Array.isArray(P)) return !1;
    const $ = P[P.length - 1];
    if ($) {
      const fe = Math.abs(Number(M.u ?? M.x ?? 0) - Number($.u ?? $.x ?? 0)), Ge = Math.abs(Number(M.v ?? M.y ?? 0) - Number($.v ?? $.y ?? 0));
      if (fe < 15e-4 && Ge < 15e-4) return !1;
    }
    return P.push({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function q1(c) {
    var _t, Ot, mn, Fi, Ti;
    const h = (c == null ? void 0 : c.stroke) || null;
    if (!h || (c == null ? void 0 : c.layerKind) !== "paint" || String((h == null ? void 0 : h.toolKind) || "") !== "eraser") return !1;
    $b();
    const y = qn(), M = Lf(y.width, y.height);
    if (!Vb(M, h, { w: y.width, h: y.height })) return !1;
    const P = ((Ot = (_t = M.ctx) == null ? void 0 : _t.getImageData(0, 0, y.width, y.height)) == null ? void 0 : Ot.data) || null;
    if (!P) return !1;
    const $ = new Map(lo().map((Je) => [String((Je == null ? void 0 : Je.actionGroupId) || (Je == null ? void 0 : Je.id) || "").trim(), Je ? { ...Je } : null])), Q = [], se = [], fe = [...zr().filter((Je) => String((Je == null ? void 0 : Je.layerKind) || "paint") !== "paint")];
    let Ge = !1, Se = Mb().reduce((Je, Ye) => Math.max(Je, Number((Ye == null ? void 0 : Ye.z_index) || 0)), -1) + 1;
    function Ce(Je, Ye, tt, at = 8) {
      let ot = Ye, Ct = tt, xt = -1, Gt = -1;
      for (let kt = 0; kt < tt; kt += 1)
        for (let nn = 0; nn < Ye; nn += 1)
          Je[(kt * Ye + nn) * 4 + 3] <= at || (nn < ot && (ot = nn), kt < Ct && (Ct = kt), nn > xt && (xt = nn), kt > Gt && (Gt = kt));
      return xt < ot || Gt < Ct ? null : { minX: ot, minY: Ct, maxX: xt, maxY: Gt };
    }
    const He = Ce(P, y.width, y.height, 8);
    if (!He) return !1;
    function et(Je, Ye) {
      return !Je || !Ye ? !1 : !(Je.maxX < Ye.minX || Ye.maxX < Je.minX || Je.maxY < Ye.minY || Ye.maxY < Je.minY);
    }
    function Ve(Je, Ye) {
      const tt = ao((Je == null ? void 0 : Je.actionGroupId) || (Je == null ? void 0 : Je.id) || "", "paint", Ye);
      if (!tt) return null;
      const at = tt.centerUv.u - tt.halfW, ot = tt.centerUv.u + tt.halfW, Ct = tt.centerUv.v - tt.halfH, xt = tt.centerUv.v + tt.halfH, Gt = y.width, kt = y.height;
      return {
        minX: Math.floor((at % 1 + 1) % 1 * Gt),
        maxX: Math.ceil((ot % 1 + 1) % 1 * Gt),
        minY: Math.floor(Ie(Ct, 0, 1) * kt),
        maxY: Math.ceil(Ie(xt, 0, 1) * kt),
        wraps: ot - at >= 1 || at < 0 || ot > 1
      };
    }
    function pt(Je) {
      const Ye = (Je == null ? void 0 : Je.bbox) || null;
      if (!Ye) return null;
      const tt = (Je == null ? void 0 : Je.transform) || {}, at = y.width, ot = y.height, Ct = Number(Ye.u0 || 0) + Number(tt.du || 0), xt = Number(Ye.u1 || 0) + Number(tt.du || 0), Gt = Number(Ye.v0 || 0) + Number(tt.dv || 0), kt = Number(Ye.v1 || 0) + Number(tt.dv || 0);
      return {
        minX: Math.floor((Ct % 1 + 1) % 1 * at),
        maxX: Math.ceil((xt % 1 + 1) % 1 * at),
        minY: Math.floor(Ie(Gt, 0, 1) * ot),
        maxY: Math.ceil(Ie(kt, 0, 1) * ot),
        wraps: xt - Ct >= 1 || Ct < 0 || xt > 1
      };
    }
    function it(Je) {
      return Je ? Je.wraps ? et(He, { minX: 0, maxX: Je.maxX, minY: Je.minY, maxY: Je.maxY }) || et(He, { minX: Je.minX, maxX: y.width - 1, minY: Je.minY, maxY: Je.maxY }) : et(He, Je) : !0;
    }
    function At(Je) {
      if (!Je) return { touched: !1, canvas: null };
      const Ye = Lf(y.width, y.height, { readback: !0 });
      Ye.ctx.drawImage(Je, 0, 0);
      const tt = Ye.ctx.getImageData(0, 0, y.width, y.height);
      Ye.ctx.save(), Ye.ctx.globalCompositeOperation = "destination-out", Ye.ctx.drawImage(M.canvas, 0, 0), Ye.ctx.restore();
      const at = Ye.ctx.getImageData(0, 0, y.width, y.height);
      for (let ot = 0; ot < y.width * y.height; ot += 1) {
        if (P[ot * 4 + 3] <= 8) continue;
        const xt = tt.data[ot * 4 + 3], Gt = at.data[ot * 4 + 3];
        if (xt > Gt)
          return { touched: !0, canvas: Ye.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function gt(Je, Ye, tt) {
      const at = Number(tt == null ? void 0 : tt.z_index), ot = vb(Je, Ye, tt).map((Ct, xt) => ({
        ...Ct,
        z_index: Number.isFinite(at) ? at + xt * 1e-3 : Se + xt * 1e-3
      }));
      return ot.length && (Se = Math.max(Se, ...ot.map((Ct) => Number((Ct == null ? void 0 : Ct.z_index) || 0))) + 1), ot;
    }
    for (const Je of lo()) {
      const Ye = String((Je == null ? void 0 : Je.actionGroupId) || (Je == null ? void 0 : Je.id) || "").trim();
      if (!Ye) continue;
      const tt = co(Ye, "paint");
      if (!it(Ve(Je, tt))) {
        se.push(Je), Q.push(...tt);
        continue;
      }
      const at = ((Fi = (mn = u.paintEngine) == null ? void 0 : mn.getGroupTarget) == null ? void 0 : Fi.call(mn, Ye)) || null, ot = ((Ti = at == null ? void 0 : at.committedPaint) == null ? void 0 : Ti.canvas) || null;
      if (!ot) {
        se.push(Je), Q.push(...tt);
        continue;
      }
      const Ct = At(ot);
      if (!Ct.touched || !Ct.canvas) {
        se.push(Je), Q.push(...tt);
        continue;
      }
      Ge = !0;
      const xt = gt(Ct.canvas, "paint", $.get(Ye) || Je || {});
      fe.push(...xt);
    }
    for (const Je of zr().filter((Ye) => String((Ye == null ? void 0 : Ye.layerKind) || "paint") === "paint")) {
      if (!it(pt(Je))) {
        fe.push(Je);
        continue;
      }
      const Ye = na(Je, null);
      if (!Ye) {
        fe.push(Je);
        continue;
      }
      const tt = At(Ye);
      if (!tt.touched || !tt.canvas) {
        fe.push(Je);
        continue;
      }
      Ge = !0;
      const at = gt(tt.canvas, "paint", Je);
      fe.push(...at);
    }
    return Ge ? (g.painting.paint.strokes = Q, g.painting.groups = se.sort((Je, Ye) => Number((Je == null ? void 0 : Je.z_index) || 0) - Number((Ye == null ? void 0 : Ye.z_index) || 0)), g.painting.raster_objects = fe.sort((Je, Ye) => Number((Je == null ? void 0 : Je.z_index) || 0) - Number((Ye == null ? void 0 : Ye.z_index) || 0)), ra({ preservePanelValues: !1 }), !0) : !1;
  }
  function J1(c) {
    var Q, se, fe, Ge, Se;
    if ((((se = (Q = c.stroke) == null ? void 0 : Q.geometry) == null ? void 0 : se.rawPoints) || ((Ge = (fe = c.stroke) == null ? void 0 : fe.geometry) == null ? void 0 : Ge.points) || []).length >= 1) {
      Vc(c);
      const Ce = qn(c);
      Ce && (String(((Se = c.stroke) == null ? void 0 : Se.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(Ce) : u.paintEngine.commitActiveStroke(c.stroke, Ce)), c._hasCommittedSegments = !0;
    }
    const y = c.stroke, M = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, P = Mp(c.layerKind, y.toolKind, [], M);
    P.actionGroupId = y.actionGroupId, c.stroke = P;
    const $ = qn(c);
    $ && u.paintEngine.beginStroke(P, $);
  }
  function Z1(c) {
    var Q, se;
    if ((((se = (Q = c.stroke) == null ? void 0 : Q.geometry) == null ? void 0 : se.points) || []).length >= 3) {
      Vc(c);
      const fe = qn(c);
      fe && u.paintEngine.commitActiveStroke(c.stroke, fe), c._hasCommittedSegments = !0;
    }
    const y = c.stroke, M = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, P = Np(c.layerKind, y.toolKind, [], M);
    P.actionGroupId = y.actionGroupId, c.stroke = P;
    const $ = qn(c);
    $ && u.paintEngine.beginStroke(P, $);
  }
  function Vc(c) {
    var $, Q, se, fe;
    const h = (($ = c == null ? void 0 : c.stroke) == null ? void 0 : $.geometry) || null;
    if (!h) return !1;
    const y = String(((Q = c == null ? void 0 : c.stroke) == null ? void 0 : Q.toolKind) || "pen");
    if (c.layerKind === "paint" && y === "eraser")
      return h.geometryKind !== "lasso_fill" && (h.processedPoints = Uf(h.rawPoints || h.points || [], c.stroke.targetSpace, !0)), q1(c);
    const M = c.layerKind === "paint" && y !== "eraser";
    if (h.geometryKind === "lasso_fill")
      return (Array.isArray(h.points) ? h.points : []).length < 3 ? !1 : (M && Rf((se = c.stroke) == null ? void 0 : se.actionGroupId), As(c.layerKind).push(c.stroke), !0);
    const P = h.rawPoints || h.points || [];
    return P.length < 1 ? !1 : (h.processedPoints = Uf(P, c.stroke.targetSpace, !0), M && Rf((fe = c.stroke) == null ? void 0 : fe.actionGroupId), As(c.layerKind).push(c.stroke), !0);
  }
  function Pp(c) {
    var y;
    if (R && u.mode === "frame") {
      const M = dt(), P = Wr(M);
      if (!M || !P || !(Number((c == null ? void 0 : c.x) || 0) >= Number(P.x || 0) && Number((c == null ? void 0 : c.x) || 0) <= Number(P.x || 0) + Number(P.w || 0) && Number((c == null ? void 0 : c.y) || 0) >= Number(P.y || 0) && Number((c == null ? void 0 : c.y) || 0) <= Number(P.y || 0) + Number(P.h || 0))) return null;
      const Q = dr(c, M, performance.now()), se = Q ? Sb(Q) : null;
      if (se)
        for (const Ge of bc()) {
          if (!dn(Ge)) continue;
          const Se = tp(Ge, se);
          if (Se && Number(Se.x) >= 0 && Number(Se.x) <= 1 && Number(Se.y) >= 0 && Number(Se.y) <= 1) {
            const Ce = fn(Ge);
            if (Ce != null && Ce.visible) return { item: Ge, geom: Ce };
          }
        }
      const fe = jf(!1).slice().sort((Ge, Se) => Number((Se == null ? void 0 : Se.z_index) || 0) - Number((Ge == null ? void 0 : Ge.z_index) || 0));
      for (const Ge of fe) {
        if (Ge.type === "strokeGroup") {
          const He = Gf(Bf("paint", Ge.actionGroupId || Ge.id || ""));
          if (!He) continue;
          const et = fn(He);
          if (!(et != null && et.visible)) continue;
          const Ve = Array.isArray(et.strokePaths) ? et.strokePaths : [];
          for (const pt of Ve) {
            const it = Array.isArray(pt == null ? void 0 : pt.points) ? pt.points : [];
            if (!it.length) continue;
            if (pt.closed && it.length >= 3 && hi(c, it)) return { item: He, geom: et };
            const At = Math.max(8, Number((pt == null ? void 0 : pt.lineWidth) || 0) * 0.5 + 6);
            for (let gt = 0; gt < it.length - 1; gt += 1)
              if (Cu(c, it[gt], it[gt + 1]) <= At * At) return { item: He, geom: et };
            if (it.length === 1 && Oa(c, it[0]) <= At * At) return { item: He, geom: et };
          }
          continue;
        }
        if (Ge.type === "rasterObject") {
          const He = Hf(Kf(((y = Ge.item) == null ? void 0 : y.id) || Ge.id || ""));
          if (!He) continue;
          const et = fn(He);
          if (Wf(He, et, c, Q)) return { item: He, geom: et };
          continue;
        }
        const Se = Ge.item;
        if (!Se || !dn(Se) || !se) continue;
        const Ce = tp(Se, se);
        if (Ce && Number(Ce.x) >= 0 && Number(Ce.x) <= 1 && Number(Ce.y) >= 0 && Number(Ce.y) <= 1) {
          const He = fn(Se);
          if (He != null && He.visible) return { item: Se, geom: He };
        }
      }
      return null;
    }
    const h = [
      ...jf(!1).slice().sort((M, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)).map((M) => {
        var P;
        return M.type === "strokeGroup" ? Gf(Bf("paint", M.actionGroupId || M.id || "")) : M.type === "rasterObject" ? Hf(Kf(((P = M.item) == null ? void 0 : P.id) || M.id || "")) : M.item;
      }).filter(Boolean),
      ...R ? bc().filter((M) => ui(M)) : []
    ];
    for (const M of h) {
      if (Jn(M)) {
        const $ = fn(M);
        if (!($ != null && $.visible)) continue;
        const Q = Array.isArray($.strokePaths) ? $.strokePaths : [];
        for (const se of Q) {
          const fe = Array.isArray(se == null ? void 0 : se.points) ? se.points : [];
          if (!fe.length) continue;
          if (se.closed && fe.length >= 3 && hi(c, fe)) return { item: M, geom: $ };
          const Ge = Math.max(8, Number((se == null ? void 0 : se.lineWidth) || 0) * 0.5 + 6);
          for (let Se = 0; Se < fe.length - 1; Se += 1)
            if (Cu(c, fe[Se], fe[Se + 1]) <= Ge * Ge) return { item: M, geom: $ };
          if (fe.length === 1 && Oa(c, fe[0]) <= Ge * Ge) return { item: M, geom: $ };
        }
        continue;
      }
      if (jr(M)) {
        const $ = fn(M);
        if (!($ != null && $.visible)) continue;
        if (Wf(M, $, c)) return { item: M, geom: $ };
        continue;
      }
      const P = fn(M);
      if (P.visible && hi(c, P.corners))
        return { item: M, geom: P };
    }
    return null;
  }
  function ma(c, h, y = null) {
    if (!c || !c.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (dn(y)) return pd(c, h);
    if (c.kind === "strokeGroup") {
      const M = c.corners.findIndex(($) => Oa($, h) <= 121);
      if (M >= 0) {
        const $ = c.corners[M], Q = $.x - c.center.x, se = $.y - c.center.y, fe = Q * se >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: M, cursor: fe };
      }
      const P = Array.isArray(c.strokePaths) ? c.strokePaths : [];
      for (const $ of P) {
        const Q = Array.isArray($ == null ? void 0 : $.points) ? $.points : [];
        if ($.closed && Q.length >= 3 && hi(h, Q)) return { kind: "move", cursor: "default" };
        const se = Math.max(8, Number(($ == null ? void 0 : $.lineWidth) || 0) * 0.5 + 6);
        for (let fe = 0; fe < Q.length - 1; fe += 1)
          if (Cu(h, Q[fe], Q[fe + 1]) <= se * se) return { kind: "move", cursor: "default" };
      }
      return hi(h, c.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (c.kind === "rasterObject") {
      const M = c.corners.findIndex((P) => Oa(P, h) <= 121);
      if (M >= 0) {
        const P = c.corners[M], $ = P.x - c.center.x, Q = P.y - c.center.y, se = $ * Q >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: M, cursor: se };
      }
      return hi(h, c.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    return tN(c, h, {
      edges: t === "cutout" || ui(y),
      resize: !(ui(y) && oa()),
      emptyCursor: u.mode === "pano" ? "grab" : "default"
    });
  }
  function Ap(c, h) {
    return {
      x0: Math.min(Number((c == null ? void 0 : c.x) || 0), Number((h == null ? void 0 : h.x) || 0)),
      y0: Math.min(Number((c == null ? void 0 : c.y) || 0), Number((h == null ? void 0 : h.y) || 0)),
      x1: Math.max(Number((c == null ? void 0 : c.x) || 0), Number((h == null ? void 0 : h.x) || 0)),
      y1: Math.max(Number((c == null ? void 0 : c.y) || 0), Number((h == null ? void 0 : h.y) || 0))
    };
  }
  function Q1(c, h) {
    return !!c && !!h && Number(h.x) >= Number(c.x0) && Number(h.x) <= Number(c.x1) && Number(h.y) >= Number(c.y0) && Number(h.y) <= Number(c.y1);
  }
  function ev(c, h) {
    if (!c || !(h != null && h.visible) || !Array.isArray(h.corners)) return !1;
    if (h.corners.some((P) => Q1(c, P))) return !0;
    const y = (Number(c.x0) + Number(c.x1)) * 0.5, M = (Number(c.y0) + Number(c.y1)) * 0.5;
    return !!hi({ x: y, y: M }, h.corners);
  }
  function It(c) {
    if (B1(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? Qe("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? Qe("grabbing") : u.interaction.kind === "space_pan" || u.interaction.kind === "frame_pan" ? Qe("move") : u.interaction.kind === "space_orbit" || u.interaction.kind === "frame_orbit" || u.interaction.kind === "world_gizmo" || u.interaction.kind === "roll_frame" ? Qe("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? Qe("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? Qe(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? Qe("grabbing") : Qe("default");
      return;
    }
    if (kp()) {
      Qe("none");
      return;
    }
    if (u.mode === "frame") {
      if (u.altModifier && !n) {
        Qe(EI);
        return;
      }
      if (u.primaryTool !== "cursor") {
        Qe("default");
        return;
      }
      Qe("grab");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      Qe("default");
      return;
    }
    if (u.gizmoAxis) {
      Qe("grab");
      return;
    }
    const h = Mn(), y = h ? fn(h) : null, M = h ? cr(h) : !1, P = M ? { kind: "none", cursor: "default" } : ma(y, c, h);
    if (!M && P.kind !== "none") {
      Qe(P.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && Pp(c)) {
      Qe("default");
      return;
    }
    Qe(u.mode === "pano" ? "grab" : "default");
  }
  function tv() {
    return ne;
  }
  function lt() {
    if (!q) return;
    if (ne = !1, u.mode === "frame") {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (u.worldSelectedId || po() && li()) {
      const P = nv();
      ne = P.visible, Cp(P);
      return;
    }
    const c = Mn(), h = Ni();
    if (!c && h.length === 0 || u.interaction) {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const y = ys(), M = f2({
      type: t,
      selected: c,
      selectedItems: h,
      selectedKind: y,
      geom: h.length > 1 ? ms(h) : fn(c),
      allLocked: us(h),
      anyLocked: h.some((P) => cr(P)),
      selectedLocked: cr(c),
      activeAspect: ui(c) && oa() ? Go : Qr(c),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: _r,
      isStickerHidden: bs,
      canRestoreSelectedToInitial: yb,
      iconSet: qe,
      cameraShot: W,
      cameraDeletable: N,
      erpChoice: N,
      coverage: g.coverage
    });
    Cp(M);
  }
  function nv() {
    const c = aa() && !u.interaction ? hs().space : null;
    if (!(c != null && c.gizmo)) return { visible: !1 };
    const h = ia(), y = c.stickers.find((Q) => Q.id === u.worldSelectedId), P = (y ? gf(y) : [c.gizmo.transform.position]).map((Q) => ts(h, Q, V.width, V.height)).filter(Boolean), $ = Dk(h, c.gizmo.transform.position, c.gizmo.mode, V.width, V.height);
    return p2({ corners: P, gizmoBox: $, gizmoMode: c.gizmo.mode, camera: po(), deletable: N && po() });
  }
  function Cp(c) {
    var $, Q;
    if (!c.visible) {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (se, fe) => h2(c.anchor, se, fe, V.width, V.height), y = Math.max(1, Number((($ = u.menuSize) == null ? void 0 : $.w) || 220)), M = Math.max(1, Number(((Q = u.menuSize) == null ? void 0 : Q.h) || 40)), P = h(y, M);
    if (!P) {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    F.selectionMenu = {
      visible: !0,
      left: P.left,
      top: P.top,
      items: c.items
    }, Le.requestFrame(() => {
      if (!q || F.selectionMenu.visible !== !0) return;
      const se = q.getBoundingClientRect(), fe = Math.round(Number((se == null ? void 0 : se.width) || 0)) || 220, Ge = Math.round(Number((se == null ? void 0 : se.height) || 0)) || 40;
      u.menuSize = { w: fe, h: Ge, measured: !0 };
      const Se = h(fe, Ge);
      Se && (F.selectionMenu.left = Se.left, F.selectionMenu.top = Se.top);
    });
  }
  function Ei() {
    ut.timer && (clearTimeout(ut.timer), ut.timer = 0), ut.target = null, F.tooltip.visible = !1;
  }
  function rv(c) {
    if (!A || !c || !c.isConnected) return;
    const h = String(c.getAttribute("data-tip") || "").trim();
    if (!h) return;
    F.tooltip.text = h, F.tooltip.visible = !0;
    const y = c;
    Le.requestFrame(() => {
      var pt, it;
      if (ut.target !== y || !A || !(y != null && y.isConnected)) return;
      const M = Oe.getBoundingClientRect(), P = y.getBoundingClientRect(), $ = 8, Q = 12, se = Math.round(Number(((pt = A.getBoundingClientRect()) == null ? void 0 : pt.width) || 0)) || 100, fe = Math.round(Number(((it = A.getBoundingClientRect()) == null ? void 0 : it.height) || 0)) || 24, Ge = !!y.closest(".pano-floating-left"), Se = !!y.closest(".pano-frame-rail"), Ce = !!y.closest(".pano-paint-footer") || !!y.closest(".pano-paint-color-float");
      let He = "", et = P.left - M.left + P.width * 0.5 - se * 0.5, Ve = P.top - M.top - fe - Q;
      if (y.closest(".pano-floating-top") && (Ve = P.bottom - M.top + Q), Ge)
        He = "tool-rail", et = P.right - M.left + 10, Ve = P.top - M.top + P.height * 0.5 - fe * 0.5, et = Ie(et, $, Math.max($, M.width - se - $)), Ve = Ie(Ve, $, Math.max($, M.height - fe - $));
      else if (Se)
        He = "frame-rail", et = P.left - M.left - se - 10, Ve = P.top - M.top + P.height * 0.5 - fe * 0.5, et = Ie(et, $, Math.max($, M.width - se - $)), Ve = Ie(Ve, $, Math.max($, M.height - fe - $));
      else if (Ce) {
        He = "footer";
        const At = y.closest(".pano-paint-footer"), gt = At ? At.getBoundingClientRect() : P;
        et = gt.left - M.left + gt.width * 0.5 - se * 0.5, Ve = gt.bottom - M.top + 5, et = Ie(et, $, Math.max($, M.width - se - $)), Ve = Math.max($, Ve);
      }
      et = Ie(et, $, Math.max($, M.width - se - $)), Ve = Math.max($, Ve), F.tooltip.left = et, F.tooltip.top = Ve, F.tooltip.variant = He, F.tooltip.visible = !0;
    });
  }
  function iv(c, h, y = {}) {
    var $;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot) return;
    c.accumulatedRad += o0(h, c.lastAngle), c.lastAngle = h;
    const M = a0(c.start.roll_deg, c.accumulatedRad, {
      shiftKey: y.shiftKey,
      altKey: c.altStarted ? !1 : y.altKey
    });
    c.shot.roll_deg = M, c.changed = c.changed || Math.abs(c.accumulatedRad) > 1e-9;
    const P = ((($ = F.sidePanel) == null ? void 0 : $.params) || []).find((Q) => Q.key === "roll_deg");
    P && (P.value = M, P.displayValue = Mo(M), P.fillPct = (M + 180) / 360 * 100), Gr(), $c(c), Ke({ localOnly: !0 });
  }
  function ov(c, h, y = {}) {
    var $;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot || !c.rollGesture) return;
    const M = Ly(c.rollGesture, h, y);
    if (!M) return;
    c.rollGesture = M.gesture, c.center = M.gesture.center, c.lastAngle = M.gesture.lastAngle, c.accumulatedRad = M.gesture.accumulatedRad, c.shot.roll_deg = M.rollDeg, c.changed = c.changed || Math.abs(M.gesture.accumulatedRad) > 1e-9;
    const P = ((($ = F.sidePanel) == null ? void 0 : $.params) || []).find((Q) => Q.key === "roll_deg");
    P && (P.value = M.rollDeg, P.displayValue = Mo(M.rollDeg), P.fillPct = (M.rollDeg + 180) / 360 * 100), Gr(), $c(c), Ke({ localOnly: !0 });
  }
  function Ip(c, h) {
    const y = di(c);
    return Math.atan2(y.y - h.y, y.x - h.x);
  }
  function $c(c) {
    var Q, se;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot) return;
    ut.timer && (clearTimeout(ut.timer), ut.timer = 0), ut.target = null;
    const h = Wr(c.shot), y = (Q = V.getBoundingClientRect) == null ? void 0 : Q.call(V), M = (se = Oe.getBoundingClientRect) == null ? void 0 : se.call(Oe);
    if (!h || !y || !M || V.width <= 0 || V.height <= 0) return;
    const P = y.width / V.width, $ = y.height / V.height;
    F.tooltip.text = `${Mo(c.shot.roll_deg)}°`, F.tooltip.left = y.left - M.left + (h.x + h.w * 0.5) * P, F.tooltip.top = y.top - M.top + (h.y + h.h * 0.5) * $ + 12, F.tooltip.variant = "roll", F.tooltip.visible = !0;
  }
  function av(c) {
    var $;
    if (c.button !== 0 || n || u.mode !== "frame") return;
    const h = dt();
    if (!h || h.locked === !0) return;
    const y = Wr(h);
    if (!y) return;
    const M = { x: y.x + y.w * 0.5, y: y.y + y.h * 0.5 }, P = Ip(c, M);
    u.interaction = {
      kind: "roll_frame",
      shot: h,
      center: M,
      lastAngle: P,
      accumulatedRad: 0,
      start: { roll_deg: Number(h.roll_deg ?? h.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, ($ = Y.setPointerCapture) == null || $.call(Y, c.pointerId), c.preventDefault(), Gr(), $c(u.interaction), Ke({ localOnly: !0 });
  }
  Y == null || Y.addEventListener("pointerdown", av);
  function sv(c) {
    var h;
    ((h = u.interaction) == null ? void 0 : h.kind) !== "roll_frame" || u.interaction.source !== "knob" || iv(
      u.interaction,
      Ip(c, u.interaction.center),
      c
    );
  }
  Y == null || Y.addEventListener("pointermove", sv);
  function lv() {
    const c = u.interaction;
    (c == null ? void 0 : c.kind) !== "roll_frame" || c.source !== "knob" || (c.changed && (bt(), Nt(), rt()), u.interaction = null, Ei(), Hr(), Gr(), Ke());
  }
  Y == null || Y.addEventListener("pointerup", lv), Y == null || Y.addEventListener("pointercancel", () => ha()), Y == null || Y.addEventListener("lostpointercapture", () => {
    var c;
    ((c = u.interaction) == null ? void 0 : c.source) === "knob" && ha();
  });
  function cv(c) {
    const h = u.mode === "frame" && !n ? dt() : null;
    !h || h.locked === !0 || Math.abs(Number(h.roll_deg ?? h.rot_deg ?? 0)) <= 1e-9 || (h.roll_deg = 0, bt(), Nt(), rt(), Gr(), Ke(), c.preventDefault());
  }
  Y == null || Y.addEventListener("dblclick", cv);
  function uv(c) {
    C.selection && (C.selection = null, xr());
    const h = di(c);
    x = h, Ns(h, !0), mc(), Et.state.inertia.active = !1, Et.state.inertia.vx = 0, Et.state.inertia.vy = 0;
    const y = li(), M = Rc(), P = y || M ? mN(Ac(), c) : null;
    if (M && P) {
      c.preventDefault(), P === "look" ? wp(h, c.pointerId) : z1(P, h, c.pointerId);
      return;
    }
    if (P === "look") {
      c.preventDefault();
      const Se = vs(c);
      u.interaction = { kind: "view", last: Se, lastTs: performance.now() }, Et.startDrag(Se.x, Se.y, c.pointerId, performance.now()), It(h), V.setPointerCapture(c.pointerId);
      return;
    }
    if (P) {
      c.preventDefault(), qf(P, h, c.pointerId);
      return;
    }
    if ((y || M) && c.button !== 0) {
      c.preventDefault();
      return;
    }
    if (c.button === 1) {
      if (c.preventDefault(), u.mode === "frame") {
        const Se = dt();
        if (!Se || n || Se.locked === !0) return;
        u.interaction = {
          kind: "pan_frame",
          shot: Se,
          last: h,
          start: {
            yaw_deg: Number(Se.yaw_deg || 0),
            pitch_deg: Number(Se.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Se = u.mode === "unwrap" ? h : vs(c);
        u.interaction = { kind: "view", last: Se, lastTs: performance.now() }, Et.startDrag(Se.x, Se.y, c.pointerId, performance.now());
      }
      It(h), V.setPointerCapture(c.pointerId);
      return;
    }
    if (c.button !== 0) return;
    if (u.mode === "frame" && (c.altKey || c.shiftKey) && !n) {
      const Se = dt(), Ce = Wr(Se);
      if (!Se || Se.locked === !0 || !Ce) return;
      const He = Dy({
        frame: Ce,
        point: h,
        startRollDeg: Number(Se.roll_deg ?? Se.rot_deg ?? 0),
        shiftKey: c.shiftKey,
        altKey: c.altKey,
        allowAlt: !0
      });
      if (!He) return;
      u.interaction = {
        kind: "roll_frame",
        shot: Se,
        center: He.center,
        lastAngle: He.lastAngle,
        accumulatedRad: He.accumulatedRad,
        rollGesture: He,
        start: { roll_deg: Number(Se.roll_deg ?? Se.rot_deg ?? 0) },
        changed: !1,
        altStarted: He.source === "alt",
        source: He.source
      }, V.setPointerCapture(c.pointerId), c.preventDefault(), Gr(), Ke({ localOnly: !0 });
      return;
    }
    if (u.mode === "frame" && u.primaryTool === "cursor") {
      wp(h, c.pointerId), c.preventDefault();
      return;
    }
    if (n) {
      u.mode === "pano" && Fp(c, h);
      return;
    }
    if (re && !re.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (pp() || Lc())) {
      if (!Db()) return;
      pn();
      const Se = u.primaryTool === "mask" ? "mask" : "paint", Ce = u.primaryTool === "mask" ? u.maskTool : u.paintTool, He = u.mode === "frame" && Lc() ? dt() : null, et = { kind: "ERP_GLOBAL" }, Ve = He ? dr(h, He, performance.now()) : wr(h, performance.now());
      if (!Ve) {
        It(h);
        return;
      }
      u.interaction = {
        kind: Ce === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Se,
        _livePreviewToken: Eo("live"),
        stroke: Ce === "lasso_fill" ? Np(Se, Ce, [Ve], et) : Mp(Se, Ce, [Ve], et)
      }, fo();
      const pt = qn(u.interaction);
      if (pt)
        if (u.paintEngine.beginStroke(u.interaction.stroke, pt), u.interaction.kind === "paint_stroke") {
          const it = u.paintEngine.ensureTarget(pt), At = Number((Ve == null ? void 0 : Ve.u) ?? (Ve == null ? void 0 : Ve.x) ?? 0), gt = Number((Ve == null ? void 0 : Ve.v) ?? (Ve == null ? void 0 : Ve.y) ?? 0);
          u.paintEngine.appendStrokePoint(it, At, gt, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, pt);
      It(h), V.setPointerCapture(c.pointerId), Ke();
      return;
    }
    const $ = Ni(), Q = Mn(), se = $.length > 1 ? ms($) : Q ? fn(Q) : null;
    if (u.primaryTool === "cursor" && (c.ctrlKey || c.metaKey)) {
      u.interaction = { kind: "marquee_select", start: h, current: h }, It(h), V.setPointerCapture(c.pointerId), Ke({ localOnly: !0, reason: Mt.OVERLAY });
      return;
    }
    if (u.primaryTool === "cursor" && fs() && li() && l1(c, h) || u.primaryTool === "cursor" && S && aa() && dv(c, h)) return;
    if ($.length > 1 && (se != null && se.visible)) {
      if (($.some((Ce) => cr(Ce)) ? { kind: "none" } : ma(se, h)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: $.map((Ce) => Ce),
          offset: { x: h.x - se.center.x, y: h.y - se.center.y },
          startCenter: { x: se.center.x, y: se.center.y },
          stickerSnapshots: $.filter((Ce) => dn(Ce)).map((Ce) => ({
            id: String(Ce.id || ""),
            yaw_deg: Number(Nn(Ce).yaw_deg || 0),
            pitch_deg: Number(Nn(Ce).pitch_deg || 0),
            center: (() => {
              var et, Ve;
              const He = fn(Ce);
              return He != null && He.visible ? { x: Number(((et = He.center) == null ? void 0 : et.x) || 0), y: Number(((Ve = He.center) == null ? void 0 : Ve.y) || 0) } : { x: h.x, y: h.y };
            })()
          })),
          strokeSnapshots: $.filter((Ce) => Jn(Ce)).map((Ce) => ({
            id: String(Ce.actionGroupId || Ce.id || ""),
            layerKind: String(Ce.layerKind || "paint"),
            snapshot: gn(co(Ce.actionGroupId, Ce.layerKind)),
            frameSnapshot: gn(ao(Ce.actionGroupId, Ce.layerKind)),
            center: (() => {
              var et, Ve;
              const He = fn(Ce);
              return He != null && He.visible ? { x: Number(((et = He.center) == null ? void 0 : et.x) || 0), y: Number(((Ve = He.center) == null ? void 0 : Ve.y) || 0) } : { x: h.x, y: h.y };
            })(),
            centerUv: Eb(Ce.actionGroupId, Ce.layerKind)
          })),
          rasterSnapshots: $.filter((Ce) => jr(Ce)).map((Ce) => ({
            id: Pi(Ce.rasterObjectId || Ce.id || ""),
            snapshot: gn(zr().find((He) => String((He == null ? void 0 : He.id) || "") === Pi(Ce.rasterObjectId || Ce.id || ""))),
            center: (() => {
              var et, Ve;
              const He = fn(Ce);
              return He != null && He.visible ? { x: Number(((et = He.center) == null ? void 0 : et.x) || 0), y: Number(((Ve = He.center) == null ? void 0 : Ve.y) || 0) } : { x: h.x, y: h.y };
            })(),
            centerUv: Pb(Ce)
          }))
        }, It(h), V.setPointerCapture(c.pointerId);
        return;
      }
    } else if (Q && (se != null && se.visible)) {
      const Se = cr(Q) ? { kind: "none" } : ma(se, h, Q);
      if (Se.kind === "scale") {
        u.interaction = Jn(Q) ? {
          kind: "scale_stroke_group",
          item: Q,
          center: se.center,
          startDist: Math.max(1, Math.hypot(h.x - se.center.x, h.y - se.center.y)),
          snapshot: gn(co(Q.actionGroupId, Q.layerKind)),
          frameSnapshot: gn(ao(Q.actionGroupId, Q.layerKind)),
          cursor: Se.cursor
        } : jr(Q) ? {
          kind: "scale_raster_object",
          item: Q,
          center: se.center,
          startDist: Math.max(1, Math.hypot(h.x - se.center.x, h.y - se.center.y)),
          snapshot: gn(zr().find((Ce) => String((Ce == null ? void 0 : Ce.id) || "") === Pi(Q.rasterObjectId || Q.id || ""))),
          cursor: Se.cursor
        } : {
          kind: "scale",
          item: Q,
          center: se.center,
          startDist: Math.max(1, Math.hypot(h.x - se.center.x, h.y - se.center.y)),
          startHFOV: Number(Nn(Q).hFOV_deg || 20),
          startVFOV: Number(Nn(Q).vFOV_deg || 20),
          cursor: Se.cursor
        }, It(h), V.setPointerCapture(c.pointerId);
        return;
      }
      if (Se.kind === "scale_x" || Se.kind === "scale_y") {
        u.interaction = {
          kind: Se.kind,
          item: Q,
          center: se.center,
          startDist: Math.max(1, Math.hypot(h.x - se.center.x, h.y - se.center.y)),
          startHFOV: Number(Nn(Q).hFOV_deg || 20),
          startVFOV: Number(Nn(Q).vFOV_deg || 20),
          cursor: Se.cursor,
          edge: Se.edge
        }, It(h), V.setPointerCapture(c.pointerId);
        return;
      }
      if (Se.kind === "rotate") {
        u.interaction = Jn(Q) ? {
          kind: "rotate_stroke_group",
          item: Q,
          center: se.center,
          startAng: Math.atan2(h.y - se.center.y, h.x - se.center.x),
          snapshot: gn(co(Q.actionGroupId, Q.layerKind)),
          frameSnapshot: gn(ao(Q.actionGroupId, Q.layerKind))
        } : {
          kind: "rotate",
          item: Q,
          center: se.center,
          startRot: Number(Nn(Q).rot_deg || Nn(Q).roll_deg || 0),
          startAng: Math.atan2(h.y - se.center.y, h.x - se.center.x)
        }, It(h), V.setPointerCapture(c.pointerId);
        return;
      }
      if (Se.kind === "move") {
        if (Jn(Q)) {
          const Ce = u.mode === "frame" ? (() => {
            const He = dt();
            return He ? dr(h, He, performance.now()) : null;
          })() : wr(h, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: Q,
            startUv: Ce,
            snapshot: gn(co(Q.actionGroupId, Q.layerKind)),
            frameSnapshot: gn(ao(Q.actionGroupId, Q.layerKind))
          }, It(h), V.setPointerCapture(c.pointerId);
          return;
        }
        if (jr(Q)) {
          const Ce = u.mode === "frame" ? (() => {
            const He = dt();
            return He ? dr(h, He, performance.now()) : null;
          })() : wr(h, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: Q,
            startUv: Ce,
            snapshot: gn(zr().find((He) => String((He == null ? void 0 : He.id) || "") === Pi(Q.rasterObjectId || Q.id || "")))
          }, It(h), V.setPointerCapture(c.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: Q,
          offset: { x: h.x - se.center.x, y: h.y - se.center.y }
        }, It(h), V.setPointerCapture(c.pointerId);
        return;
      }
    }
    const fe = Pp(h);
    if (fe) {
      const Se = u.selectedId !== fe.item.id;
      if (Se && u.selectedId && (bt(), Wn()), Gn(fe.item), R && Se && (u.cutoutAspectOpen = !1), Se && rt(), lt(), Ke(), cr(fe.item)) {
        It(h);
        return;
      }
      u.interaction = {
        kind: Jn(fe.item) ? "move_stroke_group" : jr(fe.item) ? "move_raster_object" : "move",
        item: fe.item,
        offset: { x: h.x - fe.geom.center.x, y: h.y - fe.geom.center.y },
        startUv: Jn(fe.item) || jr(fe.item) ? u.mode === "frame" ? (() => {
          const Ce = dt();
          return Ce ? dr(h, Ce, performance.now()) : null;
        })() : wr(h, performance.now()) : null,
        snapshot: Jn(fe.item) ? gn(co(fe.item.actionGroupId, fe.item.layerKind)) : jr(fe.item) ? gn(zr().find((Ce) => String((Ce == null ? void 0 : Ce.id) || "") === Pi(fe.item.rasterObjectId || fe.item.id || ""))) : null,
        frameSnapshot: Jn(fe.item) ? gn(ao(fe.item.actionGroupId, fe.item.layerKind)) : null
      }, It(h), V.setPointerCapture(c.pointerId);
      return;
    }
    const Ge = !!u.selectedId;
    Ge && (bt(), Wn()), ra(), Ge && rt(), lt(), Ke(), u.mode === "pano" && Fp(c, h);
  }
  V.onpointerdown = uv;
  function Oi(c, h) {
    return Ue.gizmoPointer(c, ia(), h.x, h.y, V.width, V.height);
  }
  function dv(c, h) {
    var se;
    const y = (se = hs().space) == null ? void 0 : se.gizmo;
    if (y && Oi("hover", h) !== null && Oi("down", h))
      return u.interaction = {
        kind: "world_gizmo",
        id: u.worldSelectedId,
        mode: y.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: y.transform,
        base: eo(sa(), u.frame),
        changed: !1
      }, V.setPointerCapture(c.pointerId), It(h), !0;
    const M = Ni(), P = Mn(), $ = M.length > 1 ? M.some((fe) => cr(fe)) ? "none" : ma(ms(M), h).kind : P && !cr(P) ? ma(fn(P), h, P).kind : "none";
    if ($ !== "none" && $ !== "move") return !1;
    const Q = Ue.pickSticker(ia(), h.x, h.y, V.width, V.height);
    return g.stickers.some((fe) => fe.id === Q && fe.placement === "world") ? (u.worldSelectedId !== Q && (u.selectedId && (bt(), Wn()), kc(Q), rt(), lt(), go(), Ke()), u.interaction = { kind: "world_select" }, V.setPointerCapture(c.pointerId), !0) : !1;
  }
  function Ep(c) {
    var M;
    const y = !!(u.worldSelectedId || po()) && u.primaryTool === "cursor" && aa() && !!((M = hs().space) != null && M.gizmo) ? Oi("hover", c) : null;
    y !== u.gizmoAxis && (u.gizmoAxis = y, me.backgroundDirty = !0, Ke({ localOnly: !0, reason: Mt.VIEW }));
  }
  function fv(c, h) {
    const y = Oi("move", h);
    if (y && c.camera) {
      for (const [P, $] of Object.entries(im(c.mode, c.base, c.start, y))) _n(g.camera, P, u.frame, $);
      pr(), c.changed = !0, Re.request("sidePanel"), Ke({ localOnly: !0 });
      return;
    }
    const M = g.stickers.find((P) => P.id === c.id);
    !y || !M || (ok(M, u.frame, im(c.mode, c.base, c.start, y)), c.changed = !0, un(), Re.request("sidePanel"), Ke({ localOnly: !0 }));
  }
  function Op(c) {
    u.interaction = null, u.gizmoAxis = null, c.kind === "world_gizmo" && (Oi("up", u.pointerPos), me.backgroundDirty = !0, c.changed && (bt(), Nt(), rt())), It(u.pointerPos), Ke();
  }
  function Fp(c, h) {
    if (li()) {
      const M = Ac().emptyLeft;
      M && qf(M, h, c.pointerId);
      return;
    }
    const y = vs(c);
    u.interaction = { kind: "view", last: y, lastTs: performance.now() }, Et.startDrag(y.x, y.y, c.pointerId, performance.now()), It(h), V.setPointerCapture(c.pointerId);
  }
  function pv(c, h) {
    if (!v || !ur.playing || (ur.stop(), c.kind === "frame_pan")) return;
    if (c.kind === "frame_orbit") {
      const P = fa();
      P && (c.pivot = vp(P, pa(P), h));
      return;
    }
    if (c.kind === "world_gizmo") {
      const P = g.stickers.find(($) => $.id === c.id);
      c.camera ? c.base = yc() : P && (c.base = eo(P, u.frame));
      return;
    }
    if (c.kind === "move_multi") {
      const P = ms(c.items);
      if (!(P != null && P.visible)) return;
      c.offset = { x: h.x - P.center.x, y: h.y - P.center.y }, c.startCenter = { x: P.center.x, y: P.center.y };
      for (const $ of c.stickerSnapshots) {
        const Q = c.items.find((fe) => String((fe == null ? void 0 : fe.id) || "") === $.id), se = Q ? fn(Q) : null;
        se != null && se.visible && ($.yaw_deg = Number(Nn(Q).yaw_deg || 0), $.pitch_deg = Number(Nn(Q).pitch_deg || 0), $.center = { x: se.center.x, y: se.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(c.kind)) return;
    const y = fn(c.item);
    if (!(y != null && y.visible)) return;
    const M = Nn(c.item);
    if (c.kind === "move") {
      c.offset = { x: h.x - y.center.x, y: h.y - y.center.y };
      return;
    }
    if (c.center = y.center, c.kind === "rotate") {
      c.startRot = Number(M.rot_deg || M.roll_deg || 0), c.startAng = Math.atan2(h.y - y.center.y, h.x - y.center.x);
      return;
    }
    c.startDist = Math.max(1, Math.hypot(h.x - y.center.x, h.y - y.center.y)), c.startHFOV = Number(M.hFOV_deg || 20), c.startVFOV = Number(M.vFOV_deg || 20);
  }
  function hv(c) {
    var M, P, $, Q, se, fe, Ge, Se, Ce, He, et, Ve, pt, it, At, gt, _t, Ot, mn, Fi, Ti, Je;
    const h = di(c);
    if (Ns(h, !0), !u.interaction) {
      Ep(h), It(h);
      return;
    }
    It(h);
    const y = u.interaction;
    if (x && (h.x !== x.x || h.y !== x.y)) {
      const Ye = x;
      x = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(y.kind) || pv(y, Ye);
    }
    if (y.kind !== "world_select") {
      if (y.kind === "world_gizmo") {
        fv(y, h);
        return;
      }
      if (y.kind === "paint_stroke") {
        const Ye = typeof c.getCoalescedEvents == "function" ? c.getCoalescedEvents() : [c];
        let tt = !1;
        Ye.forEach((at) => {
          const ot = di(at);
          if (u.mode === "frame") {
            const Ct = dt(), xt = Ct ? Wr(Ct) : null;
            if (xt) {
              const Gt = (ot.x - xt.x) / Math.max(1, xt.w), kt = (ot.y - xt.y) / Math.max(1, xt.h);
              if (!(Gt >= 0 && Gt <= 1 && kt >= 0 && kt <= 1)) {
                y._outOfFrame = !0;
                return;
              }
              y._outOfFrame && (y._outOfFrame = !1, J1(y));
            }
          }
          Y1(y, ot, performance.now()) && (tt = !0);
        }), tt && Ke({ localOnly: !0, reason: Mt.PAINT });
        return;
      }
      if (y.kind === "paint_lasso_fill") {
        const Ye = typeof c.getCoalescedEvents == "function" ? c.getCoalescedEvents() : [c];
        let tt = !1;
        if (Ye.forEach((at) => {
          const ot = di(at);
          if (u.mode === "frame") {
            const Ct = dt(), xt = Ct ? Wr(Ct) : null;
            if (xt) {
              const Gt = (ot.x - xt.x) / Math.max(1, xt.w), kt = (ot.y - xt.y) / Math.max(1, xt.h);
              if (!(Gt >= 0 && Gt <= 1 && kt >= 0 && kt <= 1)) {
                y._outOfFrame = !0;
                return;
              }
              y._outOfFrame && (y._outOfFrame = !1, Z1(y));
            }
          }
          X1(y, ot, performance.now()) && (tt = !0);
        }), tt) {
          const at = qn(y);
          at && u.paintEngine.updateActiveStroke(y.stroke, at), Ke({ localOnly: !0, reason: Mt.PAINT });
        }
        return;
      }
      if (y.kind === "view") {
        const Ye = performance.now(), tt = u.mode === "unwrap" ? h : vs(c);
        Et.moveDrag(tt.x, tt.y, u.mode === "unwrap" ? "unwrap" : "pano", Ye), y.lastTs = Ye, y.last = tt, Ke({ localOnly: !0, reason: Mt.VIEW });
        return;
      }
      if (y.kind === "frame_pan" || y.kind === "frame_orbit") {
        j1(y, h);
        return;
      }
      if (y.kind === "space_pan" || y.kind === "space_orbit") {
        const Ye = Ai();
        Bb(y.kind === "space_pan" ? tm(Ye, h.x - y.last.x, h.y - y.last.y, V.width, V.height, y.depth) : em(Ye, h.x - y.last.x, h.y - y.last.y, V.height, y.pivot)), y.last = h;
        return;
      }
      if (y.kind === "pan_frame") {
        const Ye = Ms(y.shot);
        if (!Ye || !y.shot) return;
        const tt = h.x - y.last.x, at = h.y - y.last.y, ot = Ry(y.shot, {
          dx: tt,
          dy: at,
          focalPx: Ye.focalPx,
          invertX: ((M = g.ui_settings) == null ? void 0 : M.invert_view_x) === !0,
          invertY: ((P = g.ui_settings) == null ? void 0 : P.invert_view_y) === !0
        });
        y.shot.yaw_deg = ot.yaw_deg, y.shot.pitch_deg = ot.pitch_deg, y.changed = y.changed || Math.abs(tt) > 0 || Math.abs(at) > 0, y.last = h, Ke({ localOnly: !0 });
        return;
      }
      if (y.kind === "roll_frame") {
        if (y.source === "knob") return;
        ov(y, h, c);
        return;
      }
      if (y.kind === "move") {
        const Ye = h.x - y.offset.x, tt = h.y - y.offset.y;
        if (u.mode === "frame" && R) {
          const at = dt(), ot = Wr(at);
          if (!at || !ot) return;
          const Ct = {
            x: Ie((Ye - ot.x) / Math.max(1, ot.w), 0, 1),
            y: Ie((tt - ot.y) / Math.max(1, ot.h), 0, 1)
          }, xt = Vf(at, Ct);
          if (!xt) return;
          const Gt = Ws(xt);
          fr(y.item, { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch });
        } else if (u.mode === "unwrap") {
          const at = _c(), ot = Ie((Ye - at.x) / Math.max(at.w, 1), 0, 1), Ct = Ie((tt - at.y) / Math.max(at.h, 1), 0, 1);
          fr(y.item, { yaw_deg: Wt(ot * 360 - 180), pitch_deg: Ie(90 - Ct * 180, -90, 90) });
        } else {
          const at = Xf(Ye, tt), ot = Ws(at);
          fr(y.item, { yaw_deg: ot.yaw, pitch_deg: ot.pitch });
        }
        dn(y.item) && un(), Ke({ localOnly: !0 });
        return;
      }
      if (y.kind === "move_stroke_group") {
        const Ye = u.mode === "frame" ? (() => {
          const ot = dt();
          return ot ? dr(h, ot, performance.now()) : null;
        })() : wr(h, performance.now());
        if (!Ye || !y.startUv) return;
        const tt = _s(Number(Ye.u || 0), Number(y.startUv.u || 0)), at = Number(Ye.v || 0) - Number(y.startUv.v || 0);
        si(($ = y.item) == null ? void 0 : $.actionGroupId, tt, at, y.snapshot, (Q = y.item) == null ? void 0 : Q.layerKind, y.frameSnapshot) && (Sr({ rebuildPaintEngine: !1 }), Ke({ localOnly: !0, reason: Mt.PAINT }));
        return;
      }
      if (y.kind === "move_raster_object") {
        const Ye = u.mode === "frame" ? (() => {
          const ot = dt();
          return ot ? dr(h, ot, performance.now()) : null;
        })() : wr(h, performance.now());
        if (!Ye || !y.startUv) return;
        const tt = _s(Number(Ye.u || 0), Number(y.startUv.u || 0)), at = Number(Ye.v || 0) - Number(y.startUv.v || 0);
        Hn(((se = y.item) == null ? void 0 : se.rasterObjectId) || ((fe = y.item) == null ? void 0 : fe.id) || "", tt, at, y.snapshot) && (ho(), Ke({ localOnly: !0, reason: Mt.PAINT }));
        return;
      }
      if (y.kind === "scale_raster_object") {
        const tt = Math.max(1, Math.hypot(h.x - y.center.x, h.y - y.center.y)) / Math.max(1, Number(y.startDist || 1));
        cn(((Ge = y.item) == null ? void 0 : Ge.rasterObjectId) || ((Se = y.item) == null ? void 0 : Se.id) || "", tt, y.snapshot) && (ho(), Ke({ localOnly: !0, reason: Mt.PAINT }));
        return;
      }
      if (y.kind === "move_multi") {
        const Ye = h.x - Number(((Ce = y.offset) == null ? void 0 : Ce.x) || 0), tt = h.y - Number(((He = y.offset) == null ? void 0 : He.y) || 0);
        let at = !1, ot = !1, Ct = !1;
        const xt = Ye - Number(((et = y.startCenter) == null ? void 0 : et.x) || Ye), Gt = tt - Number(((Ve = y.startCenter) == null ? void 0 : Ve.y) || tt);
        for (const kt of Array.isArray(y.stickerSnapshots) ? y.stickerSnapshots : []) {
          const nn = (t === "cutout" ? kb() : so()).find((Xt) => String((Xt == null ? void 0 : Xt.id) || "") === String(kt.id || ""));
          if (!nn || !dn(nn)) continue;
          const On = {
            x: Number(((pt = kt.center) == null ? void 0 : pt.x) || 0) + xt,
            y: Number(((it = kt.center) == null ? void 0 : it.y) || 0) + Gt
          };
          if (u.mode === "frame" && R) {
            const Xt = dt(), on = Wr(Xt);
            if (!Xt || !on) continue;
            const Di = {
              x: Ie((On.x - on.x) / Math.max(1, on.w), 0, 1),
              y: Ie((On.y - on.y) / Math.max(1, on.h), 0, 1)
            }, th = Vf(Xt, Di);
            if (!th) continue;
            const nh = Ws(th);
            fr(nn, { yaw_deg: nh.yaw, pitch_deg: nh.pitch });
          } else if (u.mode === "unwrap") {
            const Xt = _c(), on = Ie((On.x - Xt.x) / Math.max(Xt.w, 1), 0, 1), Di = Ie((On.y - Xt.y) / Math.max(Xt.h, 1), 0, 1);
            fr(nn, { yaw_deg: Wt(on * 360 - 180), pitch_deg: Ie(90 - Di * 180, -90, 90) });
          } else {
            const Xt = Xf(On.x, On.y), on = Ws(Xt);
            fr(nn, { yaw_deg: on.yaw, pitch_deg: on.pitch });
          }
          at = !0;
        }
        for (const kt of Array.isArray(y.strokeSnapshots) ? y.strokeSnapshots : []) {
          const nn = {
            x: Number(((At = kt.center) == null ? void 0 : At.x) || 0) + xt,
            y: Number(((gt = kt.center) == null ? void 0 : gt.y) || 0) + Gt
          }, On = u.mode === "frame" ? (() => {
            const on = dt();
            return on ? dr(nn, on, performance.now()) : null;
          })() : wr(nn, performance.now()), Xt = kt.centerUv || null;
          if (On && Xt) {
            const on = _s(Number(On.u || 0), Number(Xt.u || 0)), Di = Number(On.v || 0) - Number(Xt.v || 0);
            si(kt.id, on, Di, kt.snapshot, kt.layerKind, kt.frameSnapshot) && (at = !0, ot = !0);
          }
        }
        for (const kt of Array.isArray(y.rasterSnapshots) ? y.rasterSnapshots : []) {
          const nn = {
            x: Number(((_t = kt.center) == null ? void 0 : _t.x) || 0) + xt,
            y: Number(((Ot = kt.center) == null ? void 0 : Ot.y) || 0) + Gt
          }, On = u.mode === "frame" ? (() => {
            const on = dt();
            return on ? dr(nn, on, performance.now()) : null;
          })() : wr(nn, performance.now()), Xt = kt.centerUv || null;
          if (On && Xt) {
            const on = _s(Number(On.u || 0), Number(Xt.u || 0)), Di = Number(On.v || 0) - Number(Xt.v || 0);
            Hn(kt.id, on, Di, kt.snapshot) && (at = !0, Ct = !0);
          }
        }
        at && (ot ? Sr({ rebuildPaintEngine: !1 }) : Ct ? ho() : un(), Ke({ localOnly: !0 }));
        return;
      }
      if (y.kind === "scale_stroke_group") {
        const tt = Math.max(1, Math.hypot(h.x - y.center.x, h.y - y.center.y)) / Math.max(1, Number(y.startDist || 1));
        ki((mn = y.item) == null ? void 0 : mn.actionGroupId, tt, 0, y.snapshot, (Fi = y.item) == null ? void 0 : Fi.layerKind, y.frameSnapshot) && (Sr({ rebuildPaintEngine: !1 }), Ke({ localOnly: !0, reason: Mt.PAINT }));
        return;
      }
      if (y.kind === "rotate_stroke_group") {
        let Ye = (Math.atan2(h.y - y.center.y, h.x - y.center.x) - Number(y.startAng || 0)) * Yi;
        c.shiftKey && (Ye = Math.round(Ye / 45) * 45), ki((Ti = y.item) == null ? void 0 : Ti.actionGroupId, 1, Ye, y.snapshot, (Je = y.item) == null ? void 0 : Je.layerKind, y.frameSnapshot) && (Sr({ rebuildPaintEngine: !1 }), Ke({ localOnly: !0, reason: Mt.PAINT }));
        return;
      }
      if (y.kind === "marquee_select") {
        y.current = h, Ke({ localOnly: !0, reason: Mt.OVERLAY });
        return;
      }
      if (y.kind === "scale") {
        const tt = Math.max(1, Math.hypot(h.x - y.center.x, h.y - y.center.y)) / y.startDist;
        fr(y.item, { hFOV_deg: Ie(y.startHFOV * tt, 1, 179), vFOV_deg: Ie(y.startVFOV * tt, 1, 179) }), ci(y.item) || (y.item.aspect_id = Bi(y.item)), dn(y.item) && un(), Ke({ localOnly: !0 });
        return;
      }
      if (y.kind === "scale_x") {
        const tt = Math.max(1, Math.hypot(h.x - y.center.x, h.y - y.center.y)) / y.startDist;
        fr(y.item, { hFOV_deg: Ie(y.startHFOV * tt, 1, 179) }), ci(y.item) || (y.item.aspect_id = Bi(y.item)), dn(y.item) && un(), Ke({ localOnly: !0 });
        return;
      }
      if (y.kind === "scale_y") {
        const tt = Math.max(1, Math.hypot(h.x - y.center.x, h.y - y.center.y)) / y.startDist;
        fr(y.item, { vFOV_deg: Ie(y.startVFOV * tt, 1, 179) }), ci(y.item) || (y.item.aspect_id = Bi(y.item)), dn(y.item) && un(), Ke({ localOnly: !0 });
        return;
      }
      if (y.kind === "rotate") {
        let tt = (Math.atan2(h.y - y.center.y, h.x - y.center.x) - y.startAng) * Yi, at = y.startRot - tt;
        c.shiftKey && (at = Math.round(at / 45) * 45), fr(y.item, { [dn(y.item) ? "rot_deg" : "roll_deg"]: at }), dn(y.item) && un(), Ke({ localOnly: !0 });
      }
    }
  }
  V.onpointermove = hv;
  function mv() {
    var h, y, M, P, $, Q, se;
    const c = u.interaction;
    if (!((c == null ? void 0 : c.kind) === "roll_frame" && c.source === "knob")) {
      if ((c == null ? void 0 : c.kind) === "space_pan" || (c == null ? void 0 : c.kind) === "space_orbit") {
        u.interaction = null, It(u.pointerPos), lt();
        return;
      }
      if ((c == null ? void 0 : c.kind) === "world_select" || (c == null ? void 0 : c.kind) === "world_gizmo") {
        Op(c);
        return;
      }
      if (((h = u.interaction) == null ? void 0 : h.kind) === "paint_stroke" || ((y = u.interaction) == null ? void 0 : y.kind) === "paint_lasso_fill") {
        fo();
        const fe = Vc(u.interaction), Ge = !!u.interaction._hasCommittedSegments;
        if (fe || Ge) {
          Sr();
          const Se = String(((M = u.interaction.stroke) == null ? void 0 : M.actionGroupId) || "").trim();
          if (Se) {
            const He = lo().find((et) => String((et == null ? void 0 : et.actionGroupId) || "") === Se);
            He && (He.frame = null);
          }
          const Ce = qn(u.interaction);
          Ce && (fe ? String(((P = u.interaction.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(Ce), zb()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, Ce) : u.paintEngine.cancelActiveStroke(Ce)), bt(), Wn(), rt(), lt(), e.setDirtyCanvas(!0, !0), Ke();
        } else {
          const Se = qn(u.interaction);
          Se && u.paintEngine.cancelActiveStroke(Se);
        }
      } else if ((($ = u.interaction) == null ? void 0 : $.kind) === "marquee_select") {
        const fe = Ap(u.interaction.start, u.interaction.current), Se = [
          ...t === "cutout" ? bc().filter((Ce) => !ui(Ce)) : [...so()],
          ...Cb(),
          ...Ab()
        ].filter((Ce) => ev(fe, fn(Ce)));
        Wb(Se, ((Q = Se[Se.length - 1]) == null ? void 0 : Q.id) || null), R && Se.length && (u.cutoutAspectOpen = !1), rt(), lt(), Ke();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((se = u.interaction) == null ? void 0 : se.kind))
        u.interaction.changed && (bt(), Nt(), rt());
      else if (u.interaction && u.interaction.kind !== "view") {
        let fe = !1;
        (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (fe = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (fe = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (fe = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (fe = !0), fe && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? Sr({ rebuildPaintEngine: !0 }) : ho()), bt(), Wn(), e.setDirtyCanvas(!0, !0), bo(), lt(), Ke();
      }
      u.interaction = null, (c == null ? void 0 : c.kind) === "roll_frame" && Ei(), fo(), c && c.kind === "view" && Mc(() => Et.endDrag(performance.now())), Hr(), lt(), It(u.pointerPos), Ke();
    }
  }
  V.onpointerup = mv;
  function gv() {
    var c, h, y, M, P;
    if (!ha()) {
      if (((c = u.interaction) == null ? void 0 : c.kind) === "world_select" || ((h = u.interaction) == null ? void 0 : h.kind) === "world_gizmo") {
        Op(u.interaction);
        return;
      }
      if (((y = u.interaction) == null ? void 0 : y.kind) === "view" && Mc(() => Et.endDrag(performance.now())), ((M = u.interaction) == null ? void 0 : M.kind) === "paint_stroke" || ((P = u.interaction) == null ? void 0 : P.kind) === "paint_lasso_fill") {
        fo();
        const $ = qn(u.interaction);
        $ && u.paintEngine.cancelActiveStroke($);
      }
      u.interaction = null, fo(), Hr(), It(u.pointerPos), Ke({ localOnly: !0 });
    }
  }
  V.onpointercancel = gv, V.onlostpointercapture = () => {
    ha();
  }, V.onauxclick = (c) => {
    c.button === 1 && c.preventDefault();
  }, V.oncontextmenu = (c) => {
    (li() || Rc()) && gN(Ac(), 2) && c.preventDefault();
  };
  function yv(c) {
    const h = di(c), y = Ns(h, !0);
    u.interaction || (It(h), y && u.mode === "frame" && u.primaryTool === "cursor" && Ke({ localOnly: !0, reason: Mt.OVERLAY }));
  }
  V.onmousemove = yv, V.onpointerleave = () => {
    u.interaction || Ep({ x: -1e6, y: -1e6 });
  }, V.onmouseleave = () => {
    Ns(u.pointerPos, !1), It(u.pointerPos), u.mode === "frame" && u.primaryTool === "cursor" && Ke({ localOnly: !0, reason: Mt.OVERLAY });
  };
  function bv(c) {
    if (u.mode === "frame") {
      const h = di(c), y = kl(c);
      y && pn(), y && Rc() ? H1(h, -y) : y && $1(h, y) && Ke({ localOnly: !0 }), c.preventDefault();
      return;
    }
    if (u.mode === "pano") {
      if (mc(), li()) {
        const h = kl(c);
        h && i1(di(c), -h);
      } else Et.applyWheelEvent(c) && Ke({ localOnly: !0, reason: Mt.VIEW });
      c.preventDefault();
    }
  }
  V.onwheel = bv;
  function vv(c) {
    t !== "stickers" && t !== "cutout" || n || (c.preventDefault(), Ci(!0));
  }
  V.ondragover = vv;
  function _v(c) {
    var M;
    if (t !== "stickers" && t !== "cutout" || n) return;
    c.preventDefault(), c.stopPropagation(), Pt.depth = 0, Ci(!1);
    const y = Array.from(((M = c.dataTransfer) == null ? void 0 : M.files) || []).find((P) => mr(P));
    y && ap(y);
  }
  V.ondrop = _v;
  function Tp(c) {
    t !== "stickers" && t !== "cutout" || n || Ic(c) && (Pt.depth += 1, Ci(!0), c.preventDefault());
  }
  function Dp(c) {
    t !== "stickers" && t !== "cutout" || n || (!Pt.active && Ic(c) && Ci(!0), Pt.active && c.preventDefault());
  }
  function Lp(c) {
    if (t !== "stickers" && t !== "cutout" || n || !Pt.active) return;
    Pt.depth = Math.max(0, Pt.depth - 1);
    const h = Number(c.clientX) <= 0 && Number(c.clientY) <= 0;
    (Pt.depth === 0 || h) && Ci(!1);
  }
  function Rp(c) {
    t !== "stickers" && t !== "cutout" || n || (Pt.depth = 0, Ci(!1), Ic(c) && c.preventDefault());
  }
  window.addEventListener("dragenter", Tp, !0), window.addEventListener("dragover", Dp, !0), window.addEventListener("dragleave", Lp, !0), window.addEventListener("drop", Rp, !0);
  function Vp() {
    const { canUndo: c, canRedo: h } = zf();
    ko(F.toolButtons, "value", "undo", { disabled: !c }), ko(F.toolButtons, "value", "redo", { disabled: !h });
  }
  function $p(c, h, y = !1) {
    var Ge;
    pn();
    const M = R && u.mode === "frame" ? dt() : null, P = M || Mn(), $ = M ? "shot" : ys(), Q = sa();
    if (Q && !Cc(Q) || !Q && (!P || $ === "stroke" || cr(P))) return;
    const se = (((Ge = F.sidePanel) == null ? void 0 : Ge.params) || []).find((Se) => Se.key === c);
    if (!se || se.enabled === !1) return;
    let fe = Number(h);
    if (Number.isNaN(fe) && (fe = 0), (Q || W) && xI.has(c) ? fe = c === "scale" ? Math.max(fe, zm) : fe : fe = Ie(fe, Number(se.min), Number(se.max)), c === "yaw_deg" && (fe = Wt(fe)), !Q && W && c.startsWith("position_")) {
      pr(), tk(g.camera, u.frame, c, fe), rt(), Ke(), y && bt();
      return;
    }
    if (Q) {
      ik(Q, u.frame, c, fe), un(), rt(), Ke(), y && bt();
      return;
    }
    c === "opacity" ? nk(P, u.frame, fe / 100) : fr(P, { [c]: fe }), R && !ci(P) && (c === "hFOV_deg" || c === "vFOV_deg") && (P.aspect_id = Bi(P)), rt(), Ke(), y && bt();
  }
  async function Sv(c) {
    var M, P, $, Q, se, fe, Ge;
    const h = c.target.closest("[data-action]");
    if (!h) return;
    const y = String(h.getAttribute("data-action") || "");
    if (y === "coverage-set") {
      const Se = Rn(h.getAttribute("data-coverage"));
      if (Se === Rn(g.coverage)) return;
      g.coverage = Se, u.coverage = Se, l && (l.value = String(Se)), o ? me.backgroundDirty = !0 : (Wn(), R1({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), rt(), lt(), Ke();
      return;
    }
    if (y === "toggle-selection-picker") {
      if ((P = (M = F.sidePanel) == null ? void 0 : M.selectionPicker) != null && P.disabled) return;
      F.sidePanel.selectionPicker.open = !F.sidePanel.selectionPicker.open;
      return;
    }
    if (y === "select-picker-item") {
      F.sidePanel.selectionPicker.open = !1;
      const Se = String(h.getAttribute("data-selection-id") || "");
      let Ce = null;
      if (Se && (t === "stickers" ? Ce = [...so(), ...N ? g.shots : []].find((He) => String((He == null ? void 0 : He.id) || "") === Se) || null : Ce = (($ = $f().find((He) => {
        var et;
        return String(((et = He == null ? void 0 : He.item) == null ? void 0 : et.id) || "") === Se;
      })) == null ? void 0 : $.item) || null), Gn(Ce || null), Ce && !Jn(Ce)) {
        const He = Nn(Ce);
        ep(Wt(Number(He.yaw_deg || 0)), Ie(Number(He.pitch_deg || 0), -89.9, 89.9));
      }
      rt(), lt(), Ke();
      return;
    }
    if (y === "copy-state-inline") {
      const Se = Mn(), Ce = ys();
      if (!Se || Ce === "stroke" || Ni().length > 1) return;
      const He = JSON.stringify(R && Ce !== "image" ? lr(Se) : ds(Nn(Se)));
      try {
        await navigator.clipboard.writeText(He), (Q = F.sidePanel) != null && Q.copyStateButton && (F.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var et;
          (et = F.sidePanel) != null && et.copyStateButton && (F.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (y === "set-invert-x") {
      g.ui_settings.invert_view_x = h.getAttribute("data-value") === "1", Dc(), rt(), (se = e.setDirtyCanvas) == null || se.call(e, !0, !0), Ke();
      return;
    }
    if (y === "set-invert-y") {
      g.ui_settings.invert_view_y = h.getAttribute("data-value") === "1", Dc(), rt(), (fe = e.setDirtyCanvas) == null || fe.call(e, !0, !0), Ke();
      return;
    }
    if (y === "ui-reset-defaults") {
      g.ui_settings.invert_view_x = !1, g.ui_settings.invert_view_y = !1, Dc(), rt(), (Ge = e.setDirtyCanvas) == null || Ge.call(e, !0, !0), Ke();
      return;
    }
    if (y === "close-preview") {
      _o();
      return;
    }
    if (y === "cancel-close") {
      _o();
      return;
    }
    y === "save-close" && (D1(), _o());
  }
  be == null || be.addEventListener("click", Sv);
  function wv(c) {
    const h = c.target.closest("[data-action='param-input']");
    h && $p(String(h.getAttribute("data-param-key") || ""), h.value, !1);
  }
  be == null || be.addEventListener("input", wv);
  function xv(c) {
    const h = c.target.closest("[data-action='param-input']");
    h && $p(String(h.getAttribute("data-param-key") || ""), h.value, !0);
  }
  be == null || be.addEventListener("change", xv);
  const zc = () => go();
  zc();
  function kv(c) {
    var Ge, Se, Ce, He, et;
    if ((Se = (Ge = c.target) == null ? void 0 : Ge.matches) != null && Se.call(Ge, "[data-confirm-overlay]")) {
      const Ve = (Ce = F.confirmDialog) == null ? void 0 : Ce.resolve;
      F.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ve == null || Ve(!1);
      return;
    }
    const h = c.target.closest("[data-space-mode]");
    if (h) {
      Kb(h.getAttribute("data-space-mode"));
      return;
    }
    const y = c.target.closest("[data-gizmo-mode]");
    if (y) {
      u.gizmoMode = y.getAttribute("data-gizmo-mode"), me.backgroundDirty = !0, lt(), Ke({ localOnly: !0, reason: Mt.VIEW });
      return;
    }
    const M = c.target.closest("[data-view]");
    if (M) {
      if (M.getAttribute("aria-disabled") === "true") return;
      const Ve = u.mode;
      u.mode = String(M.getAttribute("data-view") || "pano"), R && u.mode === "frame" && (Ve !== "frame" && (me.frameSafeRect = null), rt(), lt()), da(), Hr(), Ke();
      return;
    }
    const P = c.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (P && !n) {
      if (P.matches("[data-tool-mode]")) {
        const Ve = String(P.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = Ve, (Ve === "paint" || Ve === "mask") && ra({ preservePanelValues: !0 }), En(), rt(), lt(), Ke();
        return;
      }
      if (P.matches("[data-tool-ui-action]")) {
        const Ve = String(P.getAttribute("data-tool-ui-action") || "");
        if ((Ve === "undo" || Ve === "redo") && P.disabled) return;
        Ve === "undo" ? xc(-1) : Ve === "redo" ? xc(1) : Ve === "clear" ? C1() : Ve === "add" || Ve === "add-image" ? g1() : Ve === "add-world" ? y1() : Ve === "add-or-look" ? M1() : Ve === "add-camera" && N1();
        return;
      }
      if (P.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const Ve = String(P.getAttribute("data-paint-tool") || "pen");
        u.paintTool = Ve, ra({ preservePanelValues: !0 }), Ln[Ve] && (u.activeBrushPresetId = Ve), En(), rt(), lt(), Ke();
        return;
      }
      if (P.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(P.getAttribute("data-mask-tool") || "pen"), ra({ preservePanelValues: !0 }), En(), rt(), lt(), Ke();
        return;
      }
      if (P.matches("[data-paint-layer-clear-current]")) {
        const Ve = String(P.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        I1(Ve);
        return;
      }
      if (P.matches("[data-paint-color-swatch]")) {
        const Ve = fl.find((pt) => pt.id === P.getAttribute("data-paint-color-swatch"));
        if (!Ve) return;
        u.paintColor = Kn(Ve.color), Me(!0), En();
        return;
      }
      if (P.matches("[data-paint-color-custom]")) {
        c.preventDefault(), c.stopPropagation(), re && !re.hidden ? Me(!0) : b(), En();
        return;
      }
    }
    const $ = String(((He = P == null ? void 0 : P.getAttribute) == null ? void 0 : He.call(P, "data-action")) || "");
    if ($ === "video-play-toggle") {
      if (c.preventDefault(), c.stopPropagation(), !(Pe instanceof HTMLVideoElement)) return;
      ws.resumeAfterScrub = !1, Fc();
      return;
    }
    if ($ === "video-audio-toggle") {
      c.preventDefault(), c.stopPropagation(), Qf(), typeof (P == null ? void 0 : P.blur) == "function" && P.blur();
      return;
    }
    if ($ === "video-loop-toggle") {
      if (c.preventDefault(), c.stopPropagation(), !(Pe instanceof HTMLVideoElement)) return;
      const Ve = !F.videoTransport.loop;
      F.videoTransport.loop = Ve, Pe.loop = Ve, Zf({
        hasAudio: F.videoTransport.hasAudio,
        loop: Ve,
        muted: Pe.muted,
        volume: Number(Pe.volume ?? F.videoTransport.volume ?? 1)
      }), typeof (P == null ? void 0 : P.blur) == "function" && P.blur();
      return;
    }
    if (!n) {
      if ($ === "frame-aspect") {
        F.frameRail.aspectOpen = !F.frameRail.aspectOpen;
        return;
      }
      if ($ === "frame-aspect-set") {
        const Ve = u.mode === "frame" ? dt() : null;
        if (!Ve || Ve.locked === !0) return;
        lp(Ve, String(P.getAttribute("data-aspect") || "1:1")), F.frameRail.aspectOpen = !1, bo(), bt(), Nt(), Hr(), rt(), lt(), Ke();
        return;
      }
      if ($ === "frame-aspect-custom") {
        const Ve = u.mode === "frame" ? dt() : null, pt = P.getAttribute("data-custom-width"), it = P.getAttribute("data-custom-height");
        if (!Ve || !T1(Ve, pt, it)) return;
        F.frameRail.aspectOpen = !1, bo(), bt(), Nt(), Hr(), Ke();
        return;
      }
      if ($ === "frame-rotate-90") {
        const Ve = u.mode === "frame" ? dt() : null;
        if (!Ve || Ve.locked === !0) return;
        dp(Ve), F.frameRail.aspectOpen = !1, bo(), bt(), Nt(), Hr(), Ke();
        return;
      }
      if ($ === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, lt(), Ke();
        return;
      }
      if ($ === "aspect-set") {
        const Ve = Mn();
        if (!Ve) return;
        const pt = String(P.getAttribute("data-aspect") || "1:1");
        lp(Ve, pt), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, bo(), bt(), Nt(), lt(), Ke();
        return;
      }
      if ($ === "rotate-90") {
        const Ve = Mn();
        if (!Ve || oa()) return;
        dp(Ve), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, bo(), bt(), Nt(), lt(), Ke();
        return;
      }
      if ($ === "bring-front") {
        In();
        return;
      }
      if ($ === "send-back") {
        Gb();
        return;
      }
      if ($ === "duplicate") {
        E1();
        return;
      }
      if ($ === "replace-image") {
        w1();
        return;
      }
      if ($ === "toggle-lock") {
        t1();
        return;
      }
      if ($ === "back-initial") {
        jb();
        return;
      }
      if ($ === "toggle-visible") {
        e1();
        return;
      }
      if ($ === "delete") {
        up();
        return;
      }
    }
    if ($ === "reset-view") {
      if (u.mode === "frame") return;
      Ss(
        { position: Yb(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((et = gc()) == null ? void 0 : et.radius) || yr },
        { mode: dl(u.spaceMode, u.viewTransition), moved: !1 }
      );
      return;
    }
    if ($ === "frame-view") {
      if (!li() || dl(u.spaceMode, u.viewTransition) !== "6dof") return;
      xb();
      return;
    }
    if ($ === "toggle-grid") {
      if (u.mode === "frame") return;
      u.showGrid = !u.showGrid, QI(e == null ? void 0 : e.id, u.showGrid), zc(), Ke();
      return;
    }
    if ($ === "toggle-fullscreen") {
      c.preventDefault(), c.stopPropagation(), Ev();
      return;
    }
    if ($ === "toggle-output-preview-size") {
      c.preventDefault(), c.stopPropagation();
      const Ve = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = Ve, Mc(() => {
        u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = Ve ? 1 : 0, u.outputPreviewAnimStartTs = performance.now();
      }), Wp(), Ke();
      return;
    }
    const Q = c.target.closest("[data-paint-history-index]");
    if (!Q) return;
    const se = Number(Q.getAttribute("data-paint-history-index")), fe = u.customPaintHistory[se];
    fe && (u.customPaintColor = Kn(fe), u.paintColor = Kn(fe), En());
  }
  E.addEventListener("click", kv);
  function Mv(c) {
    const h = c.target.closest("[data-video-seek]");
    if (h) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      ur.playing && (ws.resumeAfterScrub = !0), ur.seek(Wi(Number(h.value || 0), Lb()));
      return;
    }
    const y = c.target.closest("[data-video-volume]");
    if (y) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      const $ = Ie(Number(y.value || 0), 0, 1);
      Pe.volume = $, Pe.muted = $ <= 1e-4, Zf({
        hasAudio: F.videoTransport.hasAudio,
        muted: Pe.muted,
        volume: $
      });
      return;
    }
    const M = c.target.closest("[data-paint-size-slider]");
    if (M) {
      if (M.disabled) return;
      const $ = Math.max(1, Math.min(120, Math.round(Number(M.value)))), Q = Ii(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[Q] = $, En(), U1();
      return;
    }
    const P = c.target.closest("[data-paint-alpha-slider]");
    if (P) {
      const $ = { ...u.customPaintColor, a: Ie(Number(P.value) / 100, 0, 1) };
      u.customPaintColor = Kn($), u.paintColor = Kn($), En();
    }
  }
  E.addEventListener("input", Mv);
  function Nv(c) {
    var h;
    if (c.target.closest("[data-video-seek]")) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      ws.resumeAfterScrub && ur.play(), ws.resumeAfterScrub = !1;
      return;
    }
    if (c.target.closest("[data-video-volume]")) {
      typeof ((h = c.target) == null ? void 0 : h.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && Ps();
  }
  E.addEventListener("change", Nv), E.addEventListener("pointerup", (c) => {
    var h;
    if (c.target.closest("[data-video-volume]")) {
      typeof ((h = c.target) == null ? void 0 : h.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && Ps();
  }), E.addEventListener("pointercancel", (c) => {
    var h;
    if (c.target.closest("[data-video-volume]")) {
      typeof ((h = c.target) == null ? void 0 : h.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && Ps();
  }), E.addEventListener("focusout", (c) => {
    c.target.closest("[data-paint-size-slider]") && Ps();
  });
  function Pv(c) {
    const h = c.target.closest("[data-tip]");
    !h || !E.contains(h) || ut.target !== h && (ut.target = h, ut.timer && clearTimeout(ut.timer), ut.timer = window.setTimeout(() => {
      ut.target === h && rv(h);
    }, 220));
  }
  E.addEventListener("pointerover", Pv);
  function Av(c) {
    var M, P;
    const h = c.target.closest("[data-tip]");
    !h || ut.target !== h || (c.relatedTarget instanceof Element ? (P = (M = c.relatedTarget).closest) == null ? void 0 : P.call(M, "[data-tip]") : null) === h || Ei();
  }
  E.addEventListener("pointerout", Av), E.addEventListener("pointerdown", (c) => {
    c.target.closest("[data-frame-roll-knob]") || Ei();
  });
  function Cv(c, h) {
    var se;
    if (!ae) return;
    const y = ae.getBoundingClientRect(), M = Ie((c - y.left) / Math.max(1, y.width), 0, 1), P = 1 - Ie((h - y.top) / Math.max(1, y.height), 0, 1), $ = Eu(u.customPaintColor), Q = { ...Iu($.h, M, P), a: Number(((se = u.customPaintColor) == null ? void 0 : se.a) ?? 1) };
    u.customPaintColor = Kn(Q), u.paintColor = Kn(Q), En();
  }
  function Iv(c) {
    var $;
    if (!xe) return;
    const h = xe.getBoundingClientRect(), y = Ie((c - h.left) / Math.max(1, h.width), 0, 1), M = Eu(u.customPaintColor), P = { ...Iu(y, M.s, M.v), a: Number((($ = u.customPaintColor) == null ? void 0 : $.a) ?? 1) };
    u.customPaintColor = Kn(P), u.paintColor = Kn(P), En();
  }
  function zp(c, h) {
    const y = c.pointerId;
    h(c);
    const M = ($) => {
      $.pointerId === y && h($);
    }, P = ($) => {
      $.pointerId === y && (window.removeEventListener("pointermove", M), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P));
    };
    window.addEventListener("pointermove", M), window.addEventListener("pointerup", P), window.addEventListener("pointercancel", P);
  }
  ae && (ae.onpointerdown = (c) => {
    c.preventDefault(), c.stopPropagation(), zp(c, (h) => Cv(h.clientX, h.clientY));
  }), xe && (xe.onpointerdown = (c) => {
    c.preventDefault(), c.stopPropagation(), zp(c, (h) => Iv(h.clientX));
  }), E.addEventListener("click", (c) => {
    var P;
    const h = c.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!h) return;
    const y = h.getAttribute("data-action") === "confirm-accept", M = (P = F.confirmDialog) == null ? void 0 : P.resolve;
    F.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(y);
  });
  function jp() {
    const c = !!u.fullscreen;
    ko(F.floatingButtons, "action", "toggle-fullscreen", {
      icon: c ? qe.fullscreen_close : qe.fullscreen,
      label: c ? "Exit Fullscreen" : "Fullscreen",
      tip: c ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Cs(c) {
    const h = !!c;
    u.fullscreen !== h && (u.fullscreen = h, E.classList.toggle("pano-modal-fullscreen", h), h ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), zc(), jp(), Rb(), Ke());
  }
  const Hp = () => document.fullscreenElement === J;
  async function Ev() {
    var c, h;
    try {
      if (!document.fullscreenEnabled) {
        Cs(!u.fullscreen);
        return;
      }
      Hp() ? await ((h = document.exitFullscreen) == null ? void 0 : h.call(document)) : await ((c = J.requestFullscreen) == null ? void 0 : c.call(J));
    } catch {
      Cs(!u.fullscreen);
    }
  }
  function Gp() {
    document.fullscreenEnabled && Cs(Hp());
  }
  document.addEventListener("fullscreenchange", Gp), jp();
  function Wp() {
    const c = !!u.outputPreviewExpanded;
    F.outputPreviewToggle.icon = c ? qe.fullscreen_close : qe.fullscreen, F.outputPreviewToggle.label = c ? "Reduce Preview" : "Expand Preview", F.outputPreviewToggle.tip = c ? "Reduce preview" : "Expand preview";
  }
  Wp();
  const jc = e.onConnectionsChange;
  let Hc = null, Kp = () => {
  };
  !n && t === "stickers" && (Kp = Hy(e, (c = "sync") => {
    c === "executed" && (ME(U, Kl), mo(), S && h1()), Yf(c);
  }, { editor: !0 }), Hc = function(...h) {
    typeof jc == "function" && jc.apply(this, h), mo(), ni(this, "connections");
  }, e.onConnectionsChange = Hc), !n && !w && Bm.set(String(e.id ?? "0"), () => Jf());
  let vo = null;
  async function _o() {
    return vo || (vo = (async () => {
      var c, h, y, M, P, $, Q, se;
      return Bm.delete(String(e.id ?? "0")), G1(), n || Wn(), document.fullscreenElement === J && ((c = document.exitFullscreen) == null || c.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Gp), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === fp && (e.__panoFlushStateBeforeQueue = null), (y = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || y.call(h), (P = (M = e.graph) == null ? void 0 : M.setDirtyCanvas) == null || P.call(M, !0, !0), (se = (Q = ($ = nr) == null ? void 0 : $.canvas) == null ? void 0 : Q.setDirty) == null || se.call(Q, !0, !0), Ei(), Re.cancel(), Jb(), Pe instanceof HTMLVideoElement && Pe.pause(), n1.forEach((fe) => {
        try {
          fe();
        } catch {
        }
      }), Ue.dispose(), Ci(!1), window.removeEventListener("keydown", Bp, !0), window.removeEventListener("keydown", Up, !0), window.removeEventListener("keydown", Xp, !0), window.removeEventListener("keyup", qp, !0), window.removeEventListener("keydown", Is, !0), window.removeEventListener("keyup", Is, !0), window.removeEventListener("blur", Jp), window.removeEventListener("keydown", Zp, !0), window.removeEventListener("dragenter", Tp, !0), window.removeEventListener("dragover", Dp, !0), window.removeEventListener("dragleave", Lp, !0), window.removeEventListener("drop", Rp, !0), !n && t === "stickers" && (e.onConnectionsChange === Hc && (e.onConnectionsChange = jc), Kp()), _e.unmount(), X.remove(), L1(), vo = null, !0;
    })().catch((c) => (console.error("[PanoramaCutoutSync] closeEditor failed", c), vo = null, !1)), vo);
  }
  function Bp(c) {
    var h, y, M, P, $;
    if (c.key === "Escape") {
      if (ha()) {
        c.preventDefault(), c.stopPropagation(), (h = c.stopImmediatePropagation) == null || h.call(c);
        return;
      }
      if (u.fullscreen && document.fullscreenElement === J) {
        c.preventDefault(), c.stopPropagation(), (y = c.stopImmediatePropagation) == null || y.call(c), (M = document.exitFullscreen) == null || M.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        c.preventDefault(), c.stopPropagation(), (P = c.stopImmediatePropagation) == null || P.call(c), Cs(!1);
        return;
      }
      c.preventDefault(), c.stopPropagation(), ($ = c.stopImmediatePropagation) == null || $.call(c), _o();
    }
  }
  function Up(c) {
    const h = String(c.key || ""), y = String(c.code || ""), M = Number(c.keyCode || 0);
    if (!(h === "Delete" || y === "Delete" || M === 46) && !(h === "Backspace" || y === "Backspace" || M === 8)) return;
    const Q = c.target, se = ((Q == null ? void 0 : Q.tagName) || "").toUpperCase();
    if (se === "INPUT" || se === "TEXTAREA" || Q != null && Q.isContentEditable) return;
    if (C.selection) {
      p1(), c.preventDefault(), c.stopPropagation();
      return;
    }
    if (O1()) {
      c.preventDefault(), c.stopPropagation();
      return;
    }
    Mn() && (up(), c.preventDefault(), c.stopPropagation());
  }
  function Yp(c) {
    if (c.code !== "Space" || c.ctrlKey || c.metaKey || c.altKey || n || !v || !F.timeline.visible || F.confirmDialog.visible) return !1;
    const h = c.composedPath()[0];
    if (h !== document.body && h !== document.documentElement && !J.contains(h)) return !1;
    const y = ((h == null ? void 0 : h.tagName) || "").toUpperCase();
    return y === "INPUT" ? !wI.has(String(h.type || "text").toLowerCase()) : y !== "TEXTAREA" && y !== "SELECT" && !(h != null && h.isContentEditable);
  }
  function Xp(c) {
    Yp(c) && (c.preventDefault(), c.stopPropagation(), c.repeat || Fc());
  }
  function qp(c) {
    Yp(c) && (c.preventDefault(), c.stopPropagation());
  }
  function Is(c) {
    const h = !!(c.ctrlKey || c.metaKey), y = !!c.altKey;
    u.marqueeModifier === h && u.altModifier === y || (u.marqueeModifier = h, u.altModifier = y, Gr(), It(u.pointerPos));
  }
  function Jp() {
    u.marqueeModifier = !1, u.altModifier = !1, Gr(), It(u.pointerPos);
  }
  function Zp(c) {
    if (n || !c.ctrlKey && !c.metaKey) return;
    const h = String(c.key || "").toLowerCase(), y = String(c.code || "");
    if (h !== "z" && y !== "KeyZ") return;
    const M = c.target, P = ((M == null ? void 0 : M.tagName) || "").toUpperCase();
    if (P === "INPUT" || P === "TEXTAREA" || M != null && M.isContentEditable) return;
    const { canUndo: $, canRedo: Q } = zf();
    c.shiftKey && !Q || !c.shiftKey && !$ || (xc(c.shiftKey ? 1 : -1), c.preventDefault(), c.stopPropagation());
  }
  window.addEventListener("keydown", Bp, !0), window.addEventListener("keydown", Up, !0), window.addEventListener("keydown", Xp, !0), window.addEventListener("keyup", qp, !0), window.addEventListener("keydown", Is, !0), window.addEventListener("keyup", Is, !0), window.addEventListener("blur", Jp), window.addEventListener("keydown", Zp, !0), J.addEventListener("pointerdown", (c) => {
    c.target === J && _o();
  });
  function Mr(c, h, { rollbackState: y = !1 } = {}) {
    let M = "";
    try {
      y && (M = JSON.stringify(g)), h();
    } catch (P) {
      if (M)
        try {
          const $ = JSON.parse(M);
          Object.keys(g).forEach((Q) => delete g[Q]), Object.assign(g, $), n || Wn();
        } catch ($) {
          console.error(`[PanoramaStickers] editor boot step "${c}" rollback failed`, $);
        }
      F.stageWarningDetail = `boot:${c}`, console.error(`[PanoramaStickers] editor boot step "${c}" failed`, P);
    }
  }
  Mr("cutout-focus", kn), !n && t === "stickers" && Mr("external-sticker-sync", () => Yf("open"), { rollbackState: !0 }), x1().catch((c) => {
    F.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', c);
  }), Mr("history", bt), Mr("undo-redo", Vp), Mr("paint-ui", En), Mr("side-panel", rt), Mr("look-at-frame", Ec), Mr("video-source", mo), Mr("canvas-size", Pc), Mr("cursor", () => It(u.pointerPos)), Ke(), Hb();
}
nr.registerExtension(NN({
  app: nr,
  openEditor: NE,
  attachStickers: zP,
  attachCutout: jP,
  attachPreview: $P,
  restoreOutput: NP,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: AI
}));
