import * as Ps from "../../scripts/app.js";
import { app as zn } from "../../scripts/app.js";
import { api as Yt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Yc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, Ai = [], Qn = () => {
}, Ap = () => !1, Ia = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ea = (e) => e.startsWith("onUpdate:"), Jt = Object.assign, qc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gy = Object.prototype.hasOwnProperty, ft = (e, t) => gy.call(e, t), Ze = Array.isArray, Ci = (e) => Yo(e) === "[object Map]", Cp = (e) => Yo(e) === "[object Set]", Dd = (e) => Yo(e) === "[object Date]", rt = (e) => typeof e == "function", Lt = (e) => typeof e == "string", nr = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Ip = (e) => (vt(e) || rt(e)) && rt(e.then) && rt(e.catch), Ep = Object.prototype.toString, Yo = (e) => Ep.call(e), yy = (e) => Yo(e).slice(8, -1), Op = (e) => Yo(e) === "[object Object]", Xc = (e) => Lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, mo = /* @__PURE__ */ Yc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Oa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, by = /-\w/g, on = Oa(
  (e) => e.replace(by, (t) => t.slice(1).toUpperCase())
), vy = /\B([A-Z])/g, ai = Oa(
  (e) => e.replace(vy, "-$1").toLowerCase()
), Fa = Oa((e) => e.charAt(0).toUpperCase() + e.slice(1)), al = Oa(
  (e) => e ? `on${Fa(e)}` : ""
), Jn = (e, t) => !Object.is(e, t), Ns = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Fp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Jc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Rd;
const Ta = () => Rd || (Rd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yt(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Lt(r) ? ky(r) : yt(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Lt(e) || vt(e))
    return e;
}
const Sy = /;(?![^(]*\))/g, _y = /:([^]+)/, wy = /\/\*[^]*?\*\//g;
function ky(e) {
  const t = {};
  return e.replace(wy, "").split(Sy).forEach((n) => {
    if (n) {
      const r = n.split(_y);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ot(e) {
  let t = "";
  if (Lt(e))
    t = e;
  else if (Ze(e))
    for (let n = 0; n < e.length; n++) {
      const r = ot(e[n]);
      r && (t += r + " ");
    }
  else if (vt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", My = /* @__PURE__ */ Yc(xy);
function Tp(e) {
  return !!e || e === "";
}
function Py(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Zc(e[r], t[r]);
  return n;
}
function Zc(e, t) {
  if (e === t) return !0;
  let n = Dd(e), r = Dd(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = nr(e), r = nr(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? Py(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Zc(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Dp = (e) => !!(e && e.__v_isRef === !0), Xe = (e) => Lt(e) ? e : e == null ? "" : Ze(e) || vt(e) && (e.toString === Ep || !rt(e.toString)) ? Dp(e) ? Xe(e.value) : JSON.stringify(e, Rp, 2) : String(e), Rp = (e, t) => Dp(t) ? Rp(e, t.value) : Ci(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[ll(r, o) + " =>"] = i, n),
    {}
  )
} : Cp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ll(n))
} : nr(t) ? ll(t) : vt(t) && !Ze(t) && !Op(t) ? String(t) : t, ll = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
class Ny {
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
function Ay() {
  return dn;
}
let kt;
const cl = /* @__PURE__ */ new WeakSet();
class Lp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dn && dn.active && dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cl.has(this) && (cl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $p(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ld(this), zp(this);
    const t = kt, n = jn;
    kt = this, jn = !0;
    try {
      return this.fn();
    } finally {
      jp(this), kt = t, jn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        tu(t);
      this.deps = this.depsTail = void 0, Ld(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ql(this) && this.run();
  }
  get dirty() {
    return Ql(this);
  }
}
let Vp = 0, ho, go;
function $p(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = go, go = e;
    return;
  }
  e.next = ho, ho = e;
}
function Qc() {
  Vp++;
}
function eu() {
  if (--Vp > 0)
    return;
  if (go) {
    let t = go;
    for (go = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ho; ) {
    let t = ho;
    for (ho = void 0; t; ) {
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
function zp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), tu(r), Cy(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ql(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Hp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Hp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Co) || (e.globalVersion = Co, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ql(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = kt, r = jn;
  kt = e, jn = !0;
  try {
    zp(e);
    const i = e.fn(e._value);
    (t.version === 0 || Jn(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    kt = n, jn = r, jp(e), e.flags &= -3;
  }
}
function tu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      tu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Cy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let jn = !0;
const Gp = [];
function gr() {
  Gp.push(jn), jn = !1;
}
function yr() {
  const e = Gp.pop();
  jn = e === void 0 ? !0 : e;
}
function Ld(e) {
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
let Co = 0;
class Iy {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!kt || !jn || kt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== kt)
      n = this.activeLink = new Iy(kt, this), kt.deps ? (n.prevDep = kt.depsTail, kt.depsTail.nextDep = n, kt.depsTail = n) : kt.deps = kt.depsTail = n, Kp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = kt.depsTail, n.nextDep = void 0, kt.depsTail.nextDep = n, kt.depsTail = n, kt.deps === n && (kt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Co++, this.notify(t);
  }
  notify(t) {
    Qc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      eu();
    }
  }
}
function Kp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Kp(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ec = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ Symbol(
  ""
), tc = /* @__PURE__ */ Symbol(
  ""
), Io = /* @__PURE__ */ Symbol(
  ""
);
function Ut(e, t, n) {
  if (jn && kt) {
    let r = ec.get(e);
    r || ec.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new nu()), i.map = r, i.key = n), i.track();
  }
}
function ur(e, t, n, r, i, o) {
  const s = ec.get(e);
  if (!s) {
    Co++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Qc(), t === "clear")
    s.forEach(a);
  else {
    const l = Ze(e), c = l && Xc(n);
    if (l && n === "length") {
      const d = Number(r);
      s.forEach((u, f) => {
        (f === "length" || f === Io || !nr(f) && f >= d) && a(u);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(Io)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Zr)), Ci(e) && a(s.get(tc)));
          break;
        case "delete":
          l || (a(s.get(Zr)), Ci(e) && a(s.get(tc)));
          break;
        case "set":
          Ci(e) && a(s.get(Zr));
          break;
      }
  }
  eu();
}
function gi(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (Ut(t, "iterate", Io), /* @__PURE__ */ An(e) ? t : t.map(Gn));
}
function Da(e) {
  return Ut(e = /* @__PURE__ */ dt(e), "iterate", Io), e;
}
function Yn(e, t) {
  return /* @__PURE__ */ br(e) ? Li(/* @__PURE__ */ Qr(e) ? Gn(t) : t) : Gn(t);
}
const Ey = {
  __proto__: null,
  [Symbol.iterator]() {
    return ul(this, Symbol.iterator, (e) => Yn(this, e));
  },
  concat(...e) {
    return gi(this).concat(
      ...e.map((t) => Ze(t) ? gi(t) : t)
    );
  },
  entries() {
    return ul(this, "entries", (e) => (e[1] = Yn(this, e[1]), e));
  },
  every(e, t) {
    return ir(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ir(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Yn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return ir(
      this,
      "find",
      e,
      t,
      (n) => Yn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ir(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ir(
      this,
      "findLast",
      e,
      t,
      (n) => Yn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ir(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ir(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return dl(this, "includes", e);
  },
  indexOf(...e) {
    return dl(this, "indexOf", e);
  },
  join(e) {
    return gi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return dl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ir(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yi(this, "pop");
  },
  push(...e) {
    return Yi(this, "push", e);
  },
  reduce(e, ...t) {
    return Vd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Vd(this, "reduceRight", e, t);
  },
  shift() {
    return Yi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ir(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yi(this, "splice", e);
  },
  toReversed() {
    return gi(this).toReversed();
  },
  toSorted(e) {
    return gi(this).toSorted(e);
  },
  toSpliced(...e) {
    return gi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yi(this, "unshift", e);
  },
  values() {
    return ul(this, "values", (e) => Yn(this, e));
  }
};
function ul(e, t, n) {
  const r = Da(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ An(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Oy = Array.prototype;
function ir(e, t, n, r, i, o) {
  const s = Da(e), a = s !== e && !/* @__PURE__ */ An(e), l = s[t];
  if (l !== Oy[t]) {
    const u = l.apply(e, o);
    return a ? Gn(u) : u;
  }
  let c = n;
  s !== e && (a ? c = function(u, f) {
    return n.call(this, Yn(e, u), f, e);
  } : n.length > 2 && (c = function(u, f) {
    return n.call(this, u, f, e);
  }));
  const d = l.call(s, c, r);
  return a && i ? i(d) : d;
}
function Vd(e, t, n, r) {
  const i = Da(e), o = i !== e && !/* @__PURE__ */ An(e);
  let s = n, a = !1;
  i !== e && (o ? (a = r.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = Yn(e, c)), n.call(this, c, Yn(e, d), u, e);
  }) : n.length > 3 && (s = function(c, d, u) {
    return n.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...r);
  return a ? Yn(e, l) : l;
}
function dl(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  Ut(r, "iterate", Io);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ou(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : i;
}
function Yi(e, t, n = []) {
  gr(), Qc();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return eu(), yr(), r;
}
const Fy = /* @__PURE__ */ Yc("__proto__,__v_isRef,__isVue"), Wp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nr)
);
function Ty(e) {
  nr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class Up {
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
      return r === (i ? o ? Ky : Xp : o ? qp : Yp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = Ze(t);
    if (!i) {
      let l;
      if (s && (l = Ey[n]))
        return l;
      if (n === "hasOwnProperty")
        return Ty;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Xt(t) ? t : r
    );
    if ((nr(n) ? Wp.has(n) : Fy(n)) || (i || Ut(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Xt(a)) {
      const l = s && Xc(n) ? a : a.value;
      return i && vt(l) ? /* @__PURE__ */ rc(l) : l;
    }
    return vt(a) ? i ? /* @__PURE__ */ rc(a) : /* @__PURE__ */ Ki(a) : a;
  }
}
class Bp extends Up {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = Ze(t) && Xc(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ br(o);
      if (!/* @__PURE__ */ An(r) && !/* @__PURE__ */ br(r) && (o = /* @__PURE__ */ dt(o), r = /* @__PURE__ */ dt(r)), !s && /* @__PURE__ */ Xt(o) && !/* @__PURE__ */ Xt(r))
        return c || (o.value = r), !0;
    }
    const a = s ? Number(n) < t.length : ft(t, n), l = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Xt(t) ? t : i
    );
    return t === /* @__PURE__ */ dt(i) && (a ? Jn(r, o) && ur(t, "set", n, r) : ur(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = ft(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && ur(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!nr(n) || !Wp.has(n)) && Ut(t, "has", n), r;
  }
  ownKeys(t) {
    return Ut(
      t,
      "iterate",
      Ze(t) ? "length" : Zr
    ), Reflect.ownKeys(t);
  }
}
class Dy extends Up {
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
const Ry = /* @__PURE__ */ new Bp(), Ly = /* @__PURE__ */ new Dy(), Vy = /* @__PURE__ */ new Bp(!0);
const nc = (e) => e, us = (e) => Reflect.getPrototypeOf(e);
function $y(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ dt(i), s = Ci(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...r), d = n ? nc : t ? Li : Gn;
    return !t && Ut(
      o,
      "iterate",
      l ? tc : Zr
    ), Jt(
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
function ds(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zy(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ dt(o), a = /* @__PURE__ */ dt(i);
      e || (Jn(i, a) && Ut(s, "get", i), Ut(s, "get", a));
      const { has: l } = us(s), c = t ? nc : e ? Li : Gn;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ut(/* @__PURE__ */ dt(i), "iterate", Zr), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ dt(o), a = /* @__PURE__ */ dt(i);
      return e || (Jn(i, a) && Ut(s, "has", i), Ut(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ dt(a), c = t ? nc : e ? Li : Gn;
      return !e && Ut(l, "iterate", Zr), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return Jt(
    n,
    e ? {
      add: ds("add"),
      set: ds("set"),
      delete: ds("delete"),
      clear: ds("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ dt(this), s = us(o), a = /* @__PURE__ */ dt(i), l = !t && !/* @__PURE__ */ An(i) && !/* @__PURE__ */ br(i) ? a : i;
        return s.has.call(o, l) || Jn(i, l) && s.has.call(o, i) || Jn(a, l) && s.has.call(o, a) || (o.add(l), ur(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ An(o) && !/* @__PURE__ */ br(o) && (o = /* @__PURE__ */ dt(o));
        const s = /* @__PURE__ */ dt(this), { has: a, get: l } = us(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ dt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? Jn(o, d) && ur(s, "set", i, o) : ur(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ dt(this), { has: s, get: a } = us(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ dt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && ur(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ dt(this), o = i.size !== 0, s = i.clear();
        return o && ur(
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
    n[i] = $y(i, e, t);
  }), n;
}
function ru(e, t) {
  const n = zy(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    ft(n, i) && i in r ? n : r,
    i,
    o
  );
}
const jy = {
  get: /* @__PURE__ */ ru(!1, !1)
}, Hy = {
  get: /* @__PURE__ */ ru(!1, !0)
}, Gy = {
  get: /* @__PURE__ */ ru(!0, !1)
};
const Yp = /* @__PURE__ */ new WeakMap(), qp = /* @__PURE__ */ new WeakMap(), Xp = /* @__PURE__ */ new WeakMap(), Ky = /* @__PURE__ */ new WeakMap();
function Wy(e) {
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
function Uy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Wy(yy(e));
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return /* @__PURE__ */ br(e) ? e : iu(
    e,
    !1,
    Ry,
    jy,
    Yp
  );
}
// @__NO_SIDE_EFFECTS__
function By(e) {
  return iu(
    e,
    !1,
    Vy,
    Hy,
    qp
  );
}
// @__NO_SIDE_EFFECTS__
function rc(e) {
  return iu(
    e,
    !0,
    Ly,
    Gy,
    Xp
  );
}
function iu(e, t, n, r, i) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Uy(e);
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
function Qr(e) {
  return /* @__PURE__ */ br(e) ? /* @__PURE__ */ Qr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ou(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function Yy(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Fp(e, "__v_skip", !0), e;
}
const Gn = (e) => vt(e) ? /* @__PURE__ */ Ki(e) : e, Li = (e) => vt(e) ? /* @__PURE__ */ rc(e) : e;
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return Jp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  return Jp(e, !0);
}
function Jp(e, t) {
  return /* @__PURE__ */ Xt(e) ? e : new qy(e, t);
}
class qy {
  constructor(t, n) {
    this.dep = new nu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : Gn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ An(t) || /* @__PURE__ */ br(t);
    t = r ? t : /* @__PURE__ */ dt(t), Jn(t, n) && (this._rawValue = t, this._value = r ? t : Gn(t), this.dep.trigger());
  }
}
function Je(e) {
  return /* @__PURE__ */ Xt(e) ? e.value : e;
}
const Xy = {
  get: (e, t, n) => t === "__v_raw" ? e : Je(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Xt(i) && !/* @__PURE__ */ Xt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Zp(e) {
  return /* @__PURE__ */ Qr(e) ? e : new Proxy(e, Xy);
}
class Jy {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new nu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Co - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    kt !== this)
      return $p(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Hp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Zy(e, t, n = !1) {
  let r, i;
  return rt(e) ? r = e : (r = e.get, i = e.set), new Jy(r, i, n);
}
const fs = {}, Ys = /* @__PURE__ */ new WeakMap();
let Br;
function Qy(e, t = !1, n = Br) {
  if (n) {
    let r = Ys.get(n);
    r || Ys.set(n, r = []), r.push(e);
  }
}
function eb(e, t, n = _t) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = n, c = (D) => i ? D : /* @__PURE__ */ An(D) || i === !1 || i === 0 ? dr(D, 1) : dr(D);
  let d, u, f, m, S = !1, g = !1;
  if (/* @__PURE__ */ Xt(e) ? (u = () => e.value, S = /* @__PURE__ */ An(e)) : /* @__PURE__ */ Qr(e) ? (u = () => c(e), S = !0) : Ze(e) ? (g = !0, S = e.some((D) => /* @__PURE__ */ Qr(D) || /* @__PURE__ */ An(D)), u = () => e.map((D) => {
    if (/* @__PURE__ */ Xt(D))
      return D.value;
    if (/* @__PURE__ */ Qr(D))
      return c(D);
    if (rt(D))
      return l ? l(D, 2) : D();
  })) : rt(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      gr();
      try {
        f();
      } finally {
        yr();
      }
    }
    const D = Br;
    Br = d;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Br = D;
    }
  } : u = Qn, t && i) {
    const D = u, N = i === !0 ? 1 / 0 : i;
    u = () => dr(D(), N);
  }
  const b = Ay(), y = () => {
    d.stop(), b && b.active && qc(b.effects, d);
  };
  if (o && t) {
    const D = t;
    t = (...N) => {
      D(...N), y();
    };
  }
  let K = g ? new Array(e.length).fill(fs) : fs;
  const H = (D) => {
    if (!(!(d.flags & 1) || !d.dirty && !D))
      if (t) {
        const N = d.run();
        if (i || S || (g ? N.some(($, V) => Jn($, K[V])) : Jn(N, K))) {
          f && f();
          const $ = Br;
          Br = d;
          try {
            const V = [
              N,
              // pass undefined as the old value when it's changed for the first time
              K === fs ? void 0 : g && K[0] === fs ? [] : K,
              m
            ];
            K = N, l ? l(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            Br = $;
          }
        }
      } else
        d.run();
  };
  return a && a(H), d = new Lp(u), d.scheduler = s ? () => s(H, !1) : H, m = (D) => Qy(D, !1, d), f = d.onStop = () => {
    const D = Ys.get(d);
    if (D) {
      if (l)
        l(D, 4);
      else
        for (const N of D) N();
      Ys.delete(d);
    }
  }, t ? r ? H(!0) : K = d.run() : s ? s(H.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function dr(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Xt(e))
    dr(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      dr(e[r], t, n);
  else if (Cp(e) || Ci(e))
    e.forEach((r) => {
      dr(r, t, n);
    });
  else if (Op(e)) {
    for (const r in e)
      dr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && dr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qo(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Ra(i, t, n);
  }
}
function rr(e, t, n, r) {
  if (rt(e)) {
    const i = qo(e, t, n, r);
    return i && Ip(i) && i.catch((o) => {
      Ra(o, t, n);
    }), i;
  }
  if (Ze(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(rr(e[o], t, n, r));
    return i;
  }
}
function Ra(e, t, n, r = !0) {
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
      gr(), qo(o, null, 10, [
        e,
        l,
        c
      ]), yr();
      return;
    }
  }
  tb(e, n, i, r, s);
}
function tb(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const tn = [];
let Bn = -1;
const Ii = [];
let Mr = null, vi = 0;
const Qp = /* @__PURE__ */ Promise.resolve();
let qs = null;
function La(e) {
  const t = qs || Qp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nb(e) {
  let t = Bn + 1, n = tn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = tn[r], o = Eo(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function su(e) {
  if (!(e.flags & 1)) {
    const t = Eo(e), n = tn[tn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Eo(n) ? tn.push(e) : tn.splice(nb(t), 0, e), e.flags |= 1, em();
  }
}
function em() {
  qs || (qs = Qp.then(nm));
}
function rb(e) {
  Ze(e) ? Ii.push(...e) : Mr && e.id === -1 ? Mr.splice(vi + 1, 0, e) : e.flags & 1 || (Ii.push(e), e.flags |= 1), em();
}
function $d(e, t, n = Bn + 1) {
  for (; n < tn.length; n++) {
    const r = tn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      tn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function tm(e) {
  if (Ii.length) {
    const t = [...new Set(Ii)].sort(
      (n, r) => Eo(n) - Eo(r)
    );
    if (Ii.length = 0, Mr) {
      Mr.push(...t);
      return;
    }
    for (Mr = t, vi = 0; vi < Mr.length; vi++) {
      const n = Mr[vi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mr = null, vi = 0;
  }
}
const Eo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function nm(e) {
  try {
    for (Bn = 0; Bn < tn.length; Bn++) {
      const t = tn[Bn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Bn < tn.length; Bn++) {
      const t = tn[Bn];
      t && (t.flags &= -2);
    }
    Bn = -1, tn.length = 0, tm(), qs = null, (tn.length || Ii.length) && nm();
  }
}
let Sn = null, rm = null;
function Xs(e) {
  const t = Sn;
  return Sn = e, rm = e && e.type.__scopeId || null, t;
}
function im(e, t = Sn, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Jd(-1);
    const o = Xs(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Xs(o), r._d && Jd(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function hr(e, t) {
  if (Sn === null)
    return e;
  const n = Ha(Sn), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = _t] = t[i];
    o && (rt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && dr(s), r.push({
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
function jr(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[r];
    l && (gr(), rr(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), yr());
  }
}
function ib(e, t) {
  if (Bt) {
    let n = Bt.provides;
    const r = Bt.parent && Bt.parent.provides;
    r === n && (n = Bt.provides = Object.create(r)), n[e] = t;
  }
}
function As(e, t, n = !1) {
  const r = nv();
  if (r || Ei) {
    let i = Ei ? Ei._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && rt(t) ? t.call(r && r.proxy) : t;
  }
}
const ob = /* @__PURE__ */ Symbol.for("v-scx"), sb = () => As(ob);
function ei(e, t, n) {
  return om(e, t, n);
}
function om(e, t, n = _t) {
  const { immediate: r, deep: i, flush: o, once: s } = n, a = Jt({}, n), l = t && r || !t && o !== "post";
  let c;
  if (Fo) {
    if (o === "sync") {
      const m = sb();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = Qn, m.resume = Qn, m.pause = Qn, m;
    }
  }
  const d = Bt;
  a.call = (m, S, g) => rr(m, d, S, g);
  let u = !1;
  o === "post" ? a.scheduler = (m) => {
    un(m, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (m, S) => {
    S ? m() : su(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const f = eb(e, t, a);
  return Fo && (c ? c.push(f) : l && f()), f;
}
function ab(e, t, n) {
  const r = this.proxy, i = Lt(e) ? e.includes(".") ? sm(r, e) : () => r[e] : e.bind(r, r);
  let o;
  rt(t) ? o = t : (o = t.handler, n = t);
  const s = Jo(this), a = om(i, o.bind(r), n);
  return s(), a;
}
function sm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const lb = /* @__PURE__ */ Symbol("_vte"), cb = (e) => e.__isTeleport, ub = /* @__PURE__ */ Symbol("_leaveCb");
function au(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, au(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function am(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function zd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Js = /* @__PURE__ */ new WeakMap();
function yo(e, t, n, r, i = !1) {
  if (Ze(e)) {
    e.forEach(
      (g, b) => yo(
        g,
        t && (Ze(t) ? t[b] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (bo(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && yo(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Ha(r.component) : r.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === _t ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ dt(u), m = u === _t ? Ap : (g) => zd(d, g) ? !1 : ft(f, g), S = (g, b) => !(b && zd(d, b));
  if (c != null && c !== l) {
    if (jd(t), Lt(c))
      d[c] = null, m(c) && (u[c] = null);
    else if (/* @__PURE__ */ Xt(c)) {
      const g = t;
      S(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (rt(l))
    qo(l, a, 12, [s, d]);
  else {
    const g = Lt(l), b = /* @__PURE__ */ Xt(l);
    if (g || b) {
      const y = () => {
        if (e.f) {
          const K = g ? m(l) ? u[l] : d[l] : S() || !e.k ? l.value : d[e.k];
          if (i)
            Ze(K) && qc(K, o);
          else if (Ze(K))
            K.includes(o) || K.push(o);
          else if (g)
            d[l] = [o], m(l) && (u[l] = d[l]);
          else {
            const H = [o];
            S(l, e.k) && (l.value = H), e.k && (d[e.k] = H);
          }
        } else g ? (d[l] = s, m(l) && (u[l] = s)) : b && (S(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const K = () => {
          y(), Js.delete(e);
        };
        K.id = -1, Js.set(e, K), un(K, n);
      } else
        jd(e), y();
    }
  }
}
function jd(e) {
  const t = Js.get(e);
  t && (t.flags |= 8, Js.delete(e));
}
Ta().requestIdleCallback;
Ta().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, lm = (e) => e.type.__isKeepAlive;
function db(e, t) {
  cm(e, "a", t);
}
function fb(e, t) {
  cm(e, "da", t);
}
function cm(e, t, n = Bt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Va(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      lm(i.parent.vnode) && pb(r, t, n, i), i = i.parent;
  }
}
function pb(e, t, n, r) {
  const i = Va(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  um(() => {
    qc(r[t], i);
  }, n);
}
function Va(e, t, n = Bt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      gr();
      const a = Jo(n), l = rr(t, n, e, s);
      return a(), yr(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Sr = (e) => (t, n = Bt) => {
  (!Fo || e === "sp") && Va(e, (...r) => t(...r), n);
}, mb = Sr("bm"), $a = Sr("m"), hb = Sr(
  "bu"
), gb = Sr("u"), Xo = Sr(
  "bum"
), um = Sr("um"), yb = Sr(
  "sp"
), bb = Sr("rtg"), vb = Sr("rtc");
function Sb(e, t = Bt) {
  Va("ec", e, t);
}
const _b = "components", dm = /* @__PURE__ */ Symbol.for("v-ndc");
function wb(e) {
  return Lt(e) ? kb(_b, e, !1) || e : e || dm;
}
function kb(e, t, n = !0, r = !1) {
  const i = Sn || Bt;
  if (i) {
    const o = i.type;
    {
      const a = av(
        o,
        !1
      );
      if (a && (a === t || a === on(t) || a === Fa(on(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Hd(i[e] || o[e], t) || // global registration
      Hd(i.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function Hd(e, t) {
  return e && (e[t] || e[on(t)] || e[Fa(on(t))]);
}
function mt(e, t, n, r) {
  let i;
  const o = n, s = Ze(e);
  if (s || Lt(e)) {
    const a = s && /* @__PURE__ */ Qr(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ An(e), c = /* @__PURE__ */ br(e), e = Da(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? Li(Gn(e[d])) : Gn(e[d]) : e[d],
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
const ic = (e) => e ? Om(e) ? Ha(e) : ic(e.parent) : null, vo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Jt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ic(e.parent),
    $root: (e) => ic(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => pm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      su(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = La.bind(e.proxy)),
    $watch: (e) => ab.bind(e)
  })
), fl = (e, t) => e !== _t && !e.__isScriptSetup && ft(e, t), xb = {
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
        if (fl(r, t))
          return s[t] = 1, r[t];
        if (i !== _t && ft(i, t))
          return s[t] = 2, i[t];
        if (ft(o, t))
          return s[t] = 3, o[t];
        if (n !== _t && ft(n, t))
          return s[t] = 4, n[t];
        oc && (s[t] = 0);
      }
    }
    const c = vo[t];
    let d, u;
    if (c)
      return t === "$attrs" && Ut(e.attrs, "get", ""), c(e);
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
    return fl(i, t) ? (i[t] = n, !0) : r !== _t && ft(r, t) ? (r[t] = n, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(n[a] || e !== _t && a[0] !== "$" && ft(e, a) || fl(t, a) || ft(o, a) || ft(r, a) || ft(vo, a) || ft(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ft(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Gd(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let oc = !0;
function Mb(e) {
  const t = pm(e), n = e.proxy, r = e.ctx;
  oc = !1, t.beforeCreate && Kd(t.beforeCreate, e, "bc");
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
    deactivated: b,
    beforeDestroy: y,
    beforeUnmount: K,
    destroyed: H,
    unmounted: D,
    render: N,
    renderTracked: $,
    renderTriggered: V,
    errorCaptured: W,
    serverPrefetch: ye,
    // public API
    expose: Se,
    inheritAttrs: me,
    // assets
    components: ie,
    directives: ke,
    filters: de
  } = t;
  if (c && Pb(c, r, null), s)
    for (const he in s) {
      const ne = s[he];
      rt(ne) && (r[he] = ne.bind(n));
    }
  if (i) {
    const he = i.call(n, n);
    vt(he) && (e.data = /* @__PURE__ */ Ki(he));
  }
  if (oc = !0, o)
    for (const he in o) {
      const ne = o[he], T = rt(ne) ? ne.bind(n, n) : rt(ne.get) ? ne.get.bind(n, n) : Qn, G = !rt(ne) && rt(ne.set) ? ne.set.bind(n) : Qn, A = nt({
        get: T,
        set: G
      });
      Object.defineProperty(r, he, {
        enumerable: !0,
        configurable: !0,
        get: () => A.value,
        set: (pe) => A.value = pe
      });
    }
  if (a)
    for (const he in a)
      fm(a[he], r, n, he);
  if (l) {
    const he = rt(l) ? l.call(n) : l;
    Reflect.ownKeys(he).forEach((ne) => {
      ib(ne, he[ne]);
    });
  }
  d && Kd(d, e, "c");
  function B(he, ne) {
    Ze(ne) ? ne.forEach((T) => he(T.bind(n))) : ne && he(ne.bind(n));
  }
  if (B(mb, u), B($a, f), B(hb, m), B(gb, S), B(db, g), B(fb, b), B(Sb, W), B(vb, $), B(bb, V), B(Xo, K), B(um, D), B(yb, ye), Ze(Se))
    if (Se.length) {
      const he = e.exposed || (e.exposed = {});
      Se.forEach((ne) => {
        Object.defineProperty(he, ne, {
          get: () => n[ne],
          set: (T) => n[ne] = T,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === Qn && (e.render = N), me != null && (e.inheritAttrs = me), ie && (e.components = ie), ke && (e.directives = ke), ye && am(e);
}
function Pb(e, t, n = Qn) {
  Ze(e) && (e = sc(e));
  for (const r in e) {
    const i = e[r];
    let o;
    vt(i) ? "default" in i ? o = As(
      i.from || r,
      i.default,
      !0
    ) : o = As(i.from || r) : o = As(i), /* @__PURE__ */ Xt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function Kd(e, t, n) {
  rr(
    Ze(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fm(e, t, n, r) {
  let i = r.includes(".") ? sm(n, r) : () => n[r];
  if (Lt(e)) {
    const o = t[e];
    rt(o) && ei(i, o);
  } else if (rt(e))
    ei(i, e.bind(n));
  else if (vt(e))
    if (Ze(e))
      e.forEach((o) => fm(o, t, n, r));
    else {
      const o = rt(e.handler) ? e.handler.bind(n) : t[e.handler];
      rt(o) && ei(i, o, e);
    }
}
function pm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (c) => Zs(l, c, s, !0)
  ), Zs(l, t, s)), vt(t) && o.set(t, l), l;
}
function Zs(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Zs(e, o, n, !0), i && i.forEach(
    (s) => Zs(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const a = Nb[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Nb = {
  data: Wd,
  props: Ud,
  emits: Ud,
  // objects
  methods: ro,
  computed: ro,
  // lifecycle
  beforeCreate: Qt,
  created: Qt,
  beforeMount: Qt,
  mounted: Qt,
  beforeUpdate: Qt,
  updated: Qt,
  beforeDestroy: Qt,
  beforeUnmount: Qt,
  destroyed: Qt,
  unmounted: Qt,
  activated: Qt,
  deactivated: Qt,
  errorCaptured: Qt,
  serverPrefetch: Qt,
  // assets
  components: ro,
  directives: ro,
  // watch
  watch: Cb,
  // provide / inject
  provide: Wd,
  inject: Ab
};
function Wd(e, t) {
  return t ? e ? function() {
    return Jt(
      rt(e) ? e.call(this, this) : e,
      rt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ab(e, t) {
  return ro(sc(e), sc(t));
}
function sc(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ro(e, t) {
  return e ? Jt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ud(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Jt(
    /* @__PURE__ */ Object.create(null),
    Gd(e),
    Gd(t ?? {})
  ) : t;
}
function Cb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Jt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Qt(e[r], t[r]);
  return n;
}
function mm() {
  return {
    app: null,
    config: {
      isNativeTag: Ap,
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
let Ib = 0;
function Eb(e, t) {
  return function(r, i = null) {
    rt(r) || (r = Jt({}, r)), i != null && !vt(i) && (i = null);
    const o = mm(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Ib++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: cv,
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
          const m = c._ceVNode || Ue(r, i);
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, d, f), l = !0, c._container = d, d.__vue_app__ = c, Ha(m.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (rr(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Ei;
        Ei = c;
        try {
          return d();
        } finally {
          Ei = u;
        }
      }
    };
    return c;
  };
}
let Ei = null;
const Ob = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${on(t)}Modifiers`] || e[`${ai(t)}Modifiers`];
function Fb(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let i = n;
  const o = t.startsWith("update:"), s = o && Ob(r, t.slice(7));
  s && (s.trim && (i = n.map((d) => Lt(d) ? d.trim() : d)), s.number && (i = n.map(Jc)));
  let a, l = r[a = al(t)] || // also try camelCase event handler (#2249)
  r[a = al(on(t))];
  !l && o && (l = r[a = al(ai(t))]), l && rr(
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
    e.emitted[a] = !0, rr(
      c,
      e,
      6,
      i
    );
  }
}
const Tb = /* @__PURE__ */ new WeakMap();
function hm(e, t, n = !1) {
  const r = n ? Tb : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!rt(e)) {
    const l = (c) => {
      const d = hm(c, t, !0);
      d && (a = !0, Jt(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (vt(e) && r.set(e, null), null) : (Ze(o) ? o.forEach((l) => s[l] = null) : Jt(s, o), vt(e) && r.set(e, s), s);
}
function za(e, t) {
  return !e || !Ia(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, ai(t)) || ft(e, t));
}
function Bd(e) {
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
  } = e, b = Xs(e);
  let y, K;
  try {
    if (n.shapeFlag & 4) {
      const D = i || r, N = D;
      y = qn(
        c.call(
          N,
          D,
          d,
          u,
          m,
          f,
          S
        )
      ), K = a;
    } else {
      const D = t;
      y = qn(
        D.length > 1 ? D(
          u,
          { attrs: a, slots: s, emit: l }
        ) : D(
          u,
          null
        )
      ), K = t.props ? a : Db(a);
    }
  } catch (D) {
    So.length = 0, Ra(D, e, 1), y = Ue(Ir);
  }
  let H = y;
  if (K && g !== !1) {
    const D = Object.keys(K), { shapeFlag: N } = H;
    D.length && N & 7 && (o && D.some(Ea) && (K = Rb(
      K,
      o
    )), H = Vi(H, K, !1, !0));
  }
  return n.dirs && (H = Vi(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && au(H, n.transition), y = H, Xs(b), y;
}
const Db = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ia(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rb = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ea(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Lb(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Yd(r, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (gm(s, r, f) && !za(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? Yd(r, s, c) : !0 : !!s;
  return !1;
}
function Yd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (gm(t, e, o) && !za(n, o))
      return !0;
  }
  return !1;
}
function gm(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && vt(r) && vt(i) ? !Zc(r, i) : r !== i;
}
function Vb({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const ym = {}, bm = () => Object.create(ym), vm = (e) => Object.getPrototypeOf(e) === ym;
function $b(e, t, n, r = !1) {
  const i = {}, o = bm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sm(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ By(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function zb(e, t, n, r) {
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
        if (za(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (ft(o, f))
            m !== o[f] && (o[f] = m, c = !0);
          else {
            const S = on(f);
            i[S] = ac(
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
    Sm(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !ft(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = ai(u)) === u || !ft(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[u] = ac(
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
  c && ur(e.attrs, "set", "");
}
function Sm(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (mo(l))
        continue;
      const c = t[l];
      let d;
      i && ft(i, d = on(l)) ? !o || !o.includes(d) ? n[d] = c : (a || (a = {}))[d] = c : za(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ dt(n), c = a || _t;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      n[u] = ac(
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
function ac(e, t, n, r, i, o) {
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
          const d = Jo(i);
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
    ] && (r === "" || r === ai(n)) && (r = !0));
  }
  return r;
}
const jb = /* @__PURE__ */ new WeakMap();
function _m(e, t, n = !1) {
  const r = n ? jb : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!rt(e)) {
    const d = (u) => {
      l = !0;
      const [f, m] = _m(u, t, !0);
      Jt(s, f), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return vt(e) && r.set(e, Ai), Ai;
  if (Ze(o))
    for (let d = 0; d < o.length; d++) {
      const u = on(o[d]);
      qd(u) && (s[u] = _t);
    }
  else if (o)
    for (const d in o) {
      const u = on(d);
      if (qd(u)) {
        const f = o[d], m = s[u] = Ze(f) || rt(f) ? { type: f } : Jt({}, f), S = m.type;
        let g = !1, b = !0;
        if (Ze(S))
          for (let y = 0; y < S.length; ++y) {
            const K = S[y], H = rt(K) && K.name;
            if (H === "Boolean") {
              g = !0;
              break;
            } else H === "String" && (b = !1);
          }
        else
          g = rt(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = b, (g || ft(m, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return vt(e) && r.set(e, c), c;
}
function qd(e) {
  return e[0] !== "$" && !mo(e);
}
const lu = (e) => e === "_" || e === "_ctx" || e === "$stable", cu = (e) => Ze(e) ? e.map(qn) : [qn(e)], Hb = (e, t, n) => {
  if (t._n)
    return t;
  const r = im((...i) => cu(t(...i)), n);
  return r._c = !1, r;
}, wm = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (lu(i)) continue;
    const o = e[i];
    if (rt(o))
      t[i] = Hb(i, o, r);
    else if (o != null) {
      const s = cu(o);
      t[i] = () => s;
    }
  }
}, km = (e, t) => {
  const n = cu(t);
  e.slots.default = () => n;
}, xm = (e, t, n) => {
  for (const r in t)
    (n || !lu(r)) && (e[r] = t[r]);
}, Gb = (e, t, n) => {
  const r = e.slots = bm();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (xm(r, t, n), n && Fp(r, "_", i, !0)) : wm(t, r);
  } else t && km(e, t);
}, Kb = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, s = _t;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : xm(i, t, n) : (o = !t.$stable, wm(t, i)), s = t;
  } else t && (km(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !lu(a) && s[a] == null && delete i[a];
}, un = qb;
function Wb(e) {
  return Ub(e);
}
function Ub(e, t) {
  const n = Ta();
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
    setScopeId: m = Qn,
    insertStaticContent: S
  } = e, g = (p, h, x, F = null, L = null, J = null, le = void 0, k = null, j = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !qi(p, h) && (F = ae(p), pe(p, L, J, !0), p = null), h.patchFlag === -2 && (j = !1, h.dynamicChildren = null);
    const { type: _, ref: O, shapeFlag: Y } = h;
    switch (_) {
      case ja:
        b(p, h, x, F);
        break;
      case Ir:
        y(p, h, x, F);
        break;
      case ml:
        p == null && K(h, x, F, le);
        break;
      case qe:
        ie(
          p,
          h,
          x,
          F,
          L,
          J,
          le,
          k,
          j
        );
        break;
      default:
        Y & 1 ? N(
          p,
          h,
          x,
          F,
          L,
          J,
          le,
          k,
          j
        ) : Y & 6 ? ke(
          p,
          h,
          x,
          F,
          L,
          J,
          le,
          k,
          j
        ) : (Y & 64 || Y & 128) && _.process(
          p,
          h,
          x,
          F,
          L,
          J,
          le,
          k,
          j,
          v
        );
    }
    O != null && L ? yo(O, p && p.ref, J, h || p, !h) : O == null && p && p.ref != null && yo(p.ref, null, J, p, !0);
  }, b = (p, h, x, F) => {
    if (p == null)
      r(
        h.el = a(h.children),
        x,
        F
      );
    else {
      const L = h.el = p.el;
      h.children !== p.children && c(L, h.children);
    }
  }, y = (p, h, x, F) => {
    p == null ? r(
      h.el = l(h.children || ""),
      x,
      F
    ) : h.el = p.el;
  }, K = (p, h, x, F) => {
    [p.el, p.anchor] = S(
      p.children,
      h,
      x,
      F,
      p.el,
      p.anchor
    );
  }, H = ({ el: p, anchor: h }, x, F) => {
    let L;
    for (; p && p !== h; )
      L = f(p), r(p, x, F), p = L;
    r(h, x, F);
  }, D = ({ el: p, anchor: h }) => {
    let x;
    for (; p && p !== h; )
      x = f(p), i(p), p = x;
    i(h);
  }, N = (p, h, x, F, L, J, le, k, j) => {
    if (h.type === "svg" ? le = "svg" : h.type === "math" && (le = "mathml"), p == null)
      $(
        h,
        x,
        F,
        L,
        J,
        le,
        k,
        j
      );
    else {
      const _ = p.el && p.el._isVueCE ? p.el : null;
      try {
        _ && _._beginPatch(), ye(
          p,
          h,
          L,
          J,
          le,
          k,
          j
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, $ = (p, h, x, F, L, J, le, k) => {
    let j, _;
    const { props: O, shapeFlag: Y, transition: ve, dirs: _e } = p;
    if (j = p.el = s(
      p.type,
      J,
      O && O.is,
      O
    ), Y & 8 ? d(j, p.children) : Y & 16 && W(
      p.children,
      j,
      null,
      F,
      L,
      pl(p, J),
      le,
      k
    ), _e && jr(p, null, F, "created"), V(j, p, p.scopeId, le, F), O) {
      for (const Z in O)
        Z !== "value" && !mo(Z) && o(j, Z, null, O[Z], J, F);
      "value" in O && o(j, "value", null, O.value, J), (_ = O.onVnodeBeforeMount) && Wn(_, F, p);
    }
    _e && jr(p, null, F, "beforeMount");
    const xe = Bb(L, ve);
    xe && ve.beforeEnter(j), r(j, h, x), ((_ = O && O.onVnodeMounted) || xe || _e) && un(() => {
      try {
        _ && Wn(_, F, p), xe && ve.enter(j), _e && jr(p, null, F, "mounted");
      } finally {
      }
    }, L);
  }, V = (p, h, x, F, L) => {
    if (x && m(p, x), F)
      for (let J = 0; J < F.length; J++)
        m(p, F[J]);
    if (L) {
      let J = L.subTree;
      if (h === J || Am(J.type) && (J.ssContent === h || J.ssFallback === h)) {
        const le = L.vnode;
        V(
          p,
          le,
          le.scopeId,
          le.slotScopeIds,
          L.parent
        );
      }
    }
  }, W = (p, h, x, F, L, J, le, k, j = 0) => {
    for (let _ = j; _ < p.length; _++) {
      const O = p[_] = k ? ar(p[_]) : qn(p[_]);
      g(
        null,
        O,
        h,
        x,
        F,
        L,
        J,
        le,
        k
      );
    }
  }, ye = (p, h, x, F, L, J, le) => {
    const k = h.el = p.el;
    let { patchFlag: j, dynamicChildren: _, dirs: O } = h;
    j |= p.patchFlag & 16;
    const Y = p.props || _t, ve = h.props || _t;
    let _e;
    if (x && Hr(x, !1), (_e = ve.onVnodeBeforeUpdate) && Wn(_e, x, h, p), O && jr(h, p, x, "beforeUpdate"), x && Hr(x, !0), (Y.innerHTML && ve.innerHTML == null || Y.textContent && ve.textContent == null) && d(k, ""), _ ? Se(
      p.dynamicChildren,
      _,
      k,
      x,
      F,
      pl(h, L),
      J
    ) : le || ne(
      p,
      h,
      k,
      null,
      x,
      F,
      pl(h, L),
      J,
      !1
    ), j > 0) {
      if (j & 16)
        me(k, Y, ve, x, L);
      else if (j & 2 && Y.class !== ve.class && o(k, "class", null, ve.class, L), j & 4 && o(k, "style", Y.style, ve.style, L), j & 8) {
        const xe = h.dynamicProps;
        for (let Z = 0; Z < xe.length; Z++) {
          const be = xe[Z], z = Y[be], oe = ve[be];
          (oe !== z || be === "value") && o(k, be, z, oe, L, x);
        }
      }
      j & 1 && p.children !== h.children && d(k, h.children);
    } else !le && _ == null && me(k, Y, ve, x, L);
    ((_e = ve.onVnodeUpdated) || O) && un(() => {
      _e && Wn(_e, x, h, p), O && jr(h, p, x, "updated");
    }, F);
  }, Se = (p, h, x, F, L, J, le) => {
    for (let k = 0; k < h.length; k++) {
      const j = p[k], _ = h[k], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qi(j, _) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 198) ? u(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      g(
        j,
        _,
        O,
        null,
        F,
        L,
        J,
        le,
        !0
      );
    }
  }, me = (p, h, x, F, L) => {
    if (h !== x) {
      if (h !== _t)
        for (const J in h)
          !mo(J) && !(J in x) && o(
            p,
            J,
            h[J],
            null,
            L,
            F
          );
      for (const J in x) {
        if (mo(J)) continue;
        const le = x[J], k = h[J];
        le !== k && J !== "value" && o(p, J, k, le, L, F);
      }
      "value" in x && o(p, "value", h.value, x.value, L);
    }
  }, ie = (p, h, x, F, L, J, le, k, j) => {
    const _ = h.el = p ? p.el : a(""), O = h.anchor = p ? p.anchor : a("");
    let { patchFlag: Y, dynamicChildren: ve, slotScopeIds: _e } = h;
    _e && (k = k ? k.concat(_e) : _e), p == null ? (r(_, x, F), r(O, x, F), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      x,
      O,
      L,
      J,
      le,
      k,
      j
    )) : Y > 0 && Y & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === ve.length ? (Se(
      p.dynamicChildren,
      ve,
      x,
      L,
      J,
      le,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || L && h === L.subTree) && Mm(
      p,
      h,
      !0
      /* shallow */
    )) : ne(
      p,
      h,
      x,
      O,
      L,
      J,
      le,
      k,
      j
    );
  }, ke = (p, h, x, F, L, J, le, k, j) => {
    h.slotScopeIds = k, p == null ? h.shapeFlag & 512 ? L.ctx.activate(
      h,
      x,
      F,
      le,
      j
    ) : de(
      h,
      x,
      F,
      L,
      J,
      le,
      j
    ) : ue(p, h, j);
  }, de = (p, h, x, F, L, J, le) => {
    const k = p.component = tv(
      p,
      F,
      L
    );
    if (lm(p) && (k.ctx.renderer = v), rv(k, !1, le), k.asyncDep) {
      if (L && L.registerDep(k, B, le), !p.el) {
        const j = k.subTree = Ue(Ir);
        y(null, j, h, x), p.placeholder = j.el;
      }
    } else
      B(
        k,
        p,
        h,
        x,
        L,
        J,
        le
      );
  }, ue = (p, h, x) => {
    const F = h.component = p.component;
    if (Lb(p, h, x))
      if (F.asyncDep && !F.asyncResolved) {
        he(F, h, x);
        return;
      } else
        F.next = h, F.update();
    else
      h.el = p.el, F.vnode = h;
  }, B = (p, h, x, F, L, J, le) => {
    const k = () => {
      if (p.isMounted) {
        let { next: Y, bu: ve, u: _e, parent: xe, vnode: Z } = p;
        {
          const re = Pm(p);
          if (re) {
            Y && (Y.el = Z.el, he(p, Y, le)), re.asyncDep.then(() => {
              un(() => {
                p.isUnmounted || _();
              }, L);
            });
            return;
          }
        }
        let be = Y, z;
        Hr(p, !1), Y ? (Y.el = Z.el, he(p, Y, le)) : Y = Z, ve && Ns(ve), (z = Y.props && Y.props.onVnodeBeforeUpdate) && Wn(z, xe, Y, Z), Hr(p, !0);
        const oe = Bd(p), q = p.subTree;
        p.subTree = oe, g(
          q,
          oe,
          // parent may have changed if it's in a teleport
          u(q.el),
          // anchor may have changed if it's in a fragment
          ae(q),
          p,
          L,
          J
        ), Y.el = oe.el, be === null && Vb(p, oe.el), _e && un(_e, L), (z = Y.props && Y.props.onVnodeUpdated) && un(
          () => Wn(z, xe, Y, Z),
          L
        );
      } else {
        let Y;
        const { el: ve, props: _e } = h, { bm: xe, m: Z, parent: be, root: z, type: oe } = p, q = bo(h);
        Hr(p, !1), xe && Ns(xe), !q && (Y = _e && _e.onVnodeBeforeMount) && Wn(Y, be, h), Hr(p, !0);
        {
          z.ce && z.ce._hasShadowRoot() && z.ce._injectChildStyle(
            oe,
            p.parent ? p.parent.type : void 0
          );
          const re = p.subTree = Bd(p);
          g(
            null,
            re,
            x,
            F,
            p,
            L,
            J
          ), h.el = re.el;
        }
        if (Z && un(Z, L), !q && (Y = _e && _e.onVnodeMounted)) {
          const re = h;
          un(
            () => Wn(Y, be, re),
            L
          );
        }
        (h.shapeFlag & 256 || be && bo(be.vnode) && be.vnode.shapeFlag & 256) && p.a && un(p.a, L), p.isMounted = !0, h = x = F = null;
      }
    };
    p.scope.on();
    const j = p.effect = new Lp(k);
    p.scope.off();
    const _ = p.update = j.run.bind(j), O = p.job = j.runIfDirty.bind(j);
    O.i = p, O.id = p.uid, j.scheduler = () => su(O), Hr(p, !0), _();
  }, he = (p, h, x) => {
    h.component = p;
    const F = p.vnode.props;
    p.vnode = h, p.next = null, zb(p, h.props, F, x), Kb(p, h.children, x), gr(), $d(p), yr();
  }, ne = (p, h, x, F, L, J, le, k, j = !1) => {
    const _ = p && p.children, O = p ? p.shapeFlag : 0, Y = h.children, { patchFlag: ve, shapeFlag: _e } = h;
    if (ve > 0) {
      if (ve & 128) {
        G(
          _,
          Y,
          x,
          F,
          L,
          J,
          le,
          k,
          j
        );
        return;
      } else if (ve & 256) {
        T(
          _,
          Y,
          x,
          F,
          L,
          J,
          le,
          k,
          j
        );
        return;
      }
    }
    _e & 8 ? (O & 16 && M(_, L, J), Y !== _ && d(x, Y)) : O & 16 ? _e & 16 ? G(
      _,
      Y,
      x,
      F,
      L,
      J,
      le,
      k,
      j
    ) : M(_, L, J, !0) : (O & 8 && d(x, ""), _e & 16 && W(
      Y,
      x,
      F,
      L,
      J,
      le,
      k,
      j
    ));
  }, T = (p, h, x, F, L, J, le, k, j) => {
    p = p || Ai, h = h || Ai;
    const _ = p.length, O = h.length, Y = Math.min(_, O);
    let ve;
    for (ve = 0; ve < Y; ve++) {
      const _e = h[ve] = j ? ar(h[ve]) : qn(h[ve]);
      g(
        p[ve],
        _e,
        x,
        null,
        L,
        J,
        le,
        k,
        j
      );
    }
    _ > O ? M(
      p,
      L,
      J,
      !0,
      !1,
      Y
    ) : W(
      h,
      x,
      F,
      L,
      J,
      le,
      k,
      j,
      Y
    );
  }, G = (p, h, x, F, L, J, le, k, j) => {
    let _ = 0;
    const O = h.length;
    let Y = p.length - 1, ve = O - 1;
    for (; _ <= Y && _ <= ve; ) {
      const _e = p[_], xe = h[_] = j ? ar(h[_]) : qn(h[_]);
      if (qi(_e, xe))
        g(
          _e,
          xe,
          x,
          null,
          L,
          J,
          le,
          k,
          j
        );
      else
        break;
      _++;
    }
    for (; _ <= Y && _ <= ve; ) {
      const _e = p[Y], xe = h[ve] = j ? ar(h[ve]) : qn(h[ve]);
      if (qi(_e, xe))
        g(
          _e,
          xe,
          x,
          null,
          L,
          J,
          le,
          k,
          j
        );
      else
        break;
      Y--, ve--;
    }
    if (_ > Y) {
      if (_ <= ve) {
        const _e = ve + 1, xe = _e < O ? h[_e].el : F;
        for (; _ <= ve; )
          g(
            null,
            h[_] = j ? ar(h[_]) : qn(h[_]),
            x,
            xe,
            L,
            J,
            le,
            k,
            j
          ), _++;
      }
    } else if (_ > ve)
      for (; _ <= Y; )
        pe(p[_], L, J, !0), _++;
    else {
      const _e = _, xe = _, Z = /* @__PURE__ */ new Map();
      for (_ = xe; _ <= ve; _++) {
        const X = h[_] = j ? ar(h[_]) : qn(h[_]);
        X.key != null && Z.set(X.key, _);
      }
      let be, z = 0;
      const oe = ve - xe + 1;
      let q = !1, re = 0;
      const Q = new Array(oe);
      for (_ = 0; _ < oe; _++) Q[_] = 0;
      for (_ = _e; _ <= Y; _++) {
        const X = p[_];
        if (z >= oe) {
          pe(X, L, J, !0);
          continue;
        }
        let C;
        if (X.key != null)
          C = Z.get(X.key);
        else
          for (be = xe; be <= ve; be++)
            if (Q[be - xe] === 0 && qi(X, h[be])) {
              C = be;
              break;
            }
        C === void 0 ? pe(X, L, J, !0) : (Q[C - xe] = _ + 1, C >= re ? re = C : q = !0, g(
          X,
          h[C],
          x,
          null,
          L,
          J,
          le,
          k,
          j
        ), z++);
      }
      const te = q ? Yb(Q) : Ai;
      for (be = te.length - 1, _ = oe - 1; _ >= 0; _--) {
        const X = xe + _, C = h[X], se = h[X + 1], fe = X + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          se.el || Nm(se)
        ) : F;
        Q[_] === 0 ? g(
          null,
          C,
          x,
          fe,
          L,
          J,
          le,
          k,
          j
        ) : q && (be < 0 || _ !== te[be] ? A(C, x, fe, 2) : be--);
      }
    }
  }, A = (p, h, x, F, L = null) => {
    const { el: J, type: le, transition: k, children: j, shapeFlag: _ } = p;
    if (_ & 6) {
      A(p.component.subTree, h, x, F);
      return;
    }
    if (_ & 128) {
      p.suspense.move(h, x, F);
      return;
    }
    if (_ & 64) {
      le.move(p, h, x, v);
      return;
    }
    if (le === qe) {
      r(J, h, x);
      for (let Y = 0; Y < j.length; Y++)
        A(j[Y], h, x, F);
      r(p.anchor, h, x);
      return;
    }
    if (le === ml) {
      H(p, h, x);
      return;
    }
    if (F !== 2 && _ & 1 && k)
      if (F === 0)
        k.beforeEnter(J), r(J, h, x), un(() => k.enter(J), L);
      else {
        const { leave: Y, delayLeave: ve, afterLeave: _e } = k, xe = () => {
          p.ctx.isUnmounted ? i(J) : r(J, h, x);
        }, Z = () => {
          J._isLeaving && J[ub](
            !0
            /* cancelled */
          ), Y(J, () => {
            xe(), _e && _e();
          });
        };
        ve ? ve(J, xe, Z) : Z();
      }
    else
      r(J, h, x);
  }, pe = (p, h, x, F = !1, L = !1) => {
    const {
      type: J,
      props: le,
      ref: k,
      children: j,
      dynamicChildren: _,
      shapeFlag: O,
      patchFlag: Y,
      dirs: ve,
      cacheIndex: _e,
      memo: xe
    } = p;
    if (Y === -2 && (L = !1), k != null && (gr(), yo(k, null, x, p, !0), yr()), _e != null && (h.renderCache[_e] = void 0), O & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const Z = O & 1 && ve, be = !bo(p);
    let z;
    if (be && (z = le && le.onVnodeBeforeUnmount) && Wn(z, h, p), O & 6)
      w(p.component, x, F);
    else {
      if (O & 128) {
        p.suspense.unmount(x, F);
        return;
      }
      Z && jr(p, null, h, "beforeUnmount"), O & 64 ? p.type.remove(
        p,
        h,
        x,
        v,
        F
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (J !== qe || Y > 0 && Y & 64) ? M(
        _,
        h,
        x,
        !1,
        !0
      ) : (J === qe && Y & 384 || !L && O & 16) && M(j, h, x), F && P(p);
    }
    const oe = xe != null && _e == null;
    (be && (z = le && le.onVnodeUnmounted) || Z || oe) && un(() => {
      z && Wn(z, h, p), Z && jr(p, null, h, "unmounted"), oe && (p.el = null);
    }, x);
  }, P = (p) => {
    const { type: h, el: x, anchor: F, transition: L } = p;
    if (h === qe) {
      I(x, F);
      return;
    }
    if (h === ml) {
      D(p);
      return;
    }
    const J = () => {
      i(x), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (p.shapeFlag & 1 && L && !L.persisted) {
      const { leave: le, delayLeave: k } = L, j = () => le(x, J);
      k ? k(p.el, J, j) : j();
    } else
      J();
  }, I = (p, h) => {
    let x;
    for (; p !== h; )
      x = f(p), i(p), p = x;
    i(h);
  }, w = (p, h, x) => {
    const { bum: F, scope: L, job: J, subTree: le, um: k, m: j, a: _ } = p;
    Xd(j), Xd(_), F && Ns(F), L.stop(), J && (J.flags |= 8, pe(le, p, h, x)), k && un(k, h), un(() => {
      p.isUnmounted = !0;
    }, h);
  }, M = (p, h, x, F = !1, L = !1, J = 0) => {
    for (let le = J; le < p.length; le++)
      pe(p[le], h, x, F, L);
  }, ae = (p) => {
    if (p.shapeFlag & 6)
      return ae(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), x = h && h[lb];
    return x ? f(x) : h;
  };
  let ee = !1;
  const R = (p, h, x) => {
    let F;
    p == null ? h._vnode && (pe(h._vnode, null, null, !0), F = h._vnode.component) : g(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      x
    ), h._vnode = p, ee || (ee = !0, $d(F), tm(), ee = !1);
  }, v = {
    p: g,
    um: pe,
    m: A,
    r: P,
    mt: de,
    mc: W,
    pc: ne,
    pbc: Se,
    n: ae,
    o: e
  };
  return {
    render: R,
    hydrate: void 0,
    createApp: Eb(R)
  };
}
function pl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Hr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mm(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Ze(r) && Ze(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = ar(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && Mm(s, a)), a.type === ja && (a.patchFlag === -1 && (a = i[o] = ar(a)), a.el = s.el), a.type === Ir && !a.el && (a.el = s.el);
    }
}
function Yb(e) {
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
function Pm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pm(t);
}
function Xd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Nm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Nm(t.subTree) : null;
}
const Am = (e) => e.__isSuspense;
function qb(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : rb(e);
}
const qe = /* @__PURE__ */ Symbol.for("v-fgt"), ja = /* @__PURE__ */ Symbol.for("v-txt"), Ir = /* @__PURE__ */ Symbol.for("v-cmt"), ml = /* @__PURE__ */ Symbol.for("v-stc"), So = [];
let _n = null;
function Oe(e = !1) {
  So.push(_n = e ? null : []);
}
function Xb() {
  So.pop(), _n = So[So.length - 1] || null;
}
let Oo = 1;
function Jd(e, t = !1) {
  Oo += e, e < 0 && _n && t && (_n.hasOnce = !0);
}
function Cm(e) {
  return e.dynamicChildren = Oo > 0 ? _n || Ai : null, Xb(), Oo > 0 && _n && _n.push(e), e;
}
function De(e, t, n, r, i, o) {
  return Cm(
    Me(
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
  return Cm(
    Ue(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function Im(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Em = ({ key: e }) => e ?? null, Cs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Lt(e) || /* @__PURE__ */ Xt(e) || rt(e) ? { i: Sn, r: e, k: t, f: !!n } : e : null);
function Me(e, t = null, n = null, r = 0, i = null, o = e === qe ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Em(t),
    ref: t && Cs(t),
    scopeId: rm,
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
    ctx: Sn
  };
  return a ? (uu(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Lt(n) ? 8 : 16), Oo > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  _n && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && _n.push(l), l;
}
const Ue = Jb;
function Jb(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === dm) && (e = Ir), Im(e)) {
    const a = Vi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && uu(a, n), Oo > 0 && !o && _n && (a.shapeFlag & 6 ? _n[_n.indexOf(e)] = a : _n.push(a)), a.patchFlag = -2, a;
  }
  if (lv(e) && (e = e.__vccOpts), t) {
    t = Zb(t);
    let { class: a, style: l } = t;
    a && !Lt(a) && (t.class = ot(a)), vt(l) && (/* @__PURE__ */ ou(l) && !Ze(l) && (l = Jt({}, l)), t.style = yt(l));
  }
  const s = Lt(e) ? 1 : Am(e) ? 128 : cb(e) ? 64 : vt(e) ? 4 : rt(e) ? 2 : 0;
  return Me(
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
function Zb(e) {
  return e ? /* @__PURE__ */ ou(e) || vm(e) ? Jt({}, e) : e : null;
}
function Vi(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? lr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Em(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Ze(o) ? o.concat(Cs(t)) : [o, Cs(t)] : Cs(t)
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
    ssContent: e.ssContent && Vi(e.ssContent),
    ssFallback: e.ssFallback && Vi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && au(
    d,
    l.clone(d)
  ), d;
}
function io(e = " ", t = 0) {
  return Ue(ja, null, e, t);
}
function tt(e = "", t = !1) {
  return t ? (Oe(), gn(Ir, null, e)) : Ue(Ir, null, e);
}
function qn(e) {
  return e == null || typeof e == "boolean" ? Ue(Ir) : Ze(e) ? Ue(
    qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Im(e) ? ar(e) : Ue(ja, null, String(e));
}
function ar(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vi(e);
}
function uu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), uu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !vm(t) ? t._ctx = Sn : i === 3 && Sn && (Sn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else rt(t) ? (t = { default: t, _ctx: Sn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [io(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = ot([t.class, r.class]));
      else if (i === "style")
        t.style = yt([t.style, r.style]);
      else if (Ia(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(Ze(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ea(i) && (t[i] = s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Wn(e, t, n, r = null) {
  rr(e, t, 7, [
    n,
    r
  ]);
}
const Qb = mm();
let ev = 0;
function tv(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Qb, o = {
    uid: ev++,
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
    scope: new Ny(
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
    propsOptions: _m(r, i),
    emitsOptions: hm(r, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fb.bind(null, o), e.ce && e.ce(o), o;
}
let Bt = null;
const nv = () => Bt || Sn;
let Qs, lc;
{
  const e = Ta(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Qs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Bt = n
  ), lc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fo = n
  );
}
const Jo = (e) => {
  const t = Bt;
  return Qs(e), e.scope.on(), () => {
    e.scope.off(), Qs(t);
  };
}, Zd = () => {
  Bt && Bt.scope.off(), Qs(null);
};
function Om(e) {
  return e.vnode.shapeFlag & 4;
}
let Fo = !1;
function rv(e, t = !1, n = !1) {
  t && lc(t);
  const { props: r, children: i } = e.vnode, o = Om(e);
  $b(e, r, o, t), Gb(e, i, n || t);
  const s = o ? iv(e, t) : void 0;
  return t && lc(!1), s;
}
function iv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xb);
  const { setup: r } = n;
  if (r) {
    gr();
    const i = e.setupContext = r.length > 1 ? sv(e) : null, o = Jo(e), s = qo(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Ip(s);
    if (yr(), o(), (a || e.sp) && !bo(e) && am(e), a) {
      if (s.then(Zd, Zd), t)
        return s.then((l) => {
          Qd(e, l);
        }).catch((l) => {
          Ra(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Qd(e, s);
  } else
    Fm(e);
}
function Qd(e, t, n) {
  rt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = Zp(t)), Fm(e);
}
function Fm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Qn);
  {
    const i = Jo(e);
    gr();
    try {
      Mb(e);
    } finally {
      yr(), i();
    }
  }
}
const ov = {
  get(e, t) {
    return Ut(e, "get", ""), e[t];
  }
};
function sv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ov),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ha(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zp(Yy(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vo)
        return vo[n](e);
    },
    has(t, n) {
      return n in t || n in vo;
    }
  })) : e.proxy;
}
function av(e, t = !0) {
  return rt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function lv(e) {
  return rt(e) && "__vccOpts" in e;
}
const nt = (e, t) => /* @__PURE__ */ Zy(e, t, Fo), cv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cc;
const ef = typeof window < "u" && window.trustedTypes;
if (ef)
  try {
    cc = /* @__PURE__ */ ef.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Tm = cc ? (e) => cc.createHTML(e) : (e) => e, uv = "http://www.w3.org/2000/svg", dv = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, tf = sr && /* @__PURE__ */ sr.createElement("template"), fv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? sr.createElementNS(uv, e) : t === "mathml" ? sr.createElementNS(dv, e) : n ? sr.createElement(e, { is: n }) : sr.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => sr.createTextNode(e),
  createComment: (e) => sr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => sr.querySelector(e),
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
      tf.innerHTML = Tm(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = tf.content;
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
}, pv = /* @__PURE__ */ Symbol("_vtc");
function mv(e, t, n) {
  const r = e[pv];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ea = /* @__PURE__ */ Symbol("_vod"), Dm = /* @__PURE__ */ Symbol("_vsh"), ii = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ea] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Xi(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Xi(e, !0), r.enter(e)) : r.leave(e, () => {
      Xi(e, !1);
    }) : Xi(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Xi(e, t);
  }
};
function Xi(e, t) {
  e.style.display = t ? e[ea] : "none", e[Dm] = !t;
}
const hv = /* @__PURE__ */ Symbol(""), gv = /(?:^|;)\s*display\s*:/;
function yv(e, t, n) {
  const r = e.style, i = Lt(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Lt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Is(r, a, "");
        }
      else
        for (const s in t)
          n[s] == null && Is(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), Is(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[hv];
      s && (n += ";" + s), r.cssText = n, o = gv.test(n);
    }
  } else t && e.removeAttribute("style");
  ea in e && (e[ea] = o ? r.display : "", e[Dm] && (r.display = "none"));
}
const nf = /\s*!important$/;
function Is(e, t, n) {
  if (Ze(n))
    n.forEach((r) => Is(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = bv(e, t);
    nf.test(n) ? e.setProperty(
      ai(r),
      n.replace(nf, ""),
      "important"
    ) : e[r] = n;
  }
}
const rf = ["Webkit", "Moz", "ms"], hl = {};
function bv(e, t) {
  const n = hl[t];
  if (n)
    return n;
  let r = on(t);
  if (r !== "filter" && r in e)
    return hl[t] = r;
  r = Fa(r);
  for (let i = 0; i < rf.length; i++) {
    const o = rf[i] + r;
    if (o in e)
      return hl[t] = o;
  }
  return t;
}
const of = "http://www.w3.org/1999/xlink";
function sf(e, t, n, r, i, o = My(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(of, t.slice(6, t.length)) : e.setAttributeNS(of, t, n) : n == null || o && !Tp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : nr(n) ? String(n) : n
  );
}
function af(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Tm(n) : n);
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
    a === "boolean" ? n = Tp(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Si(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function vv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const lf = /* @__PURE__ */ Symbol("_vei");
function Sv(e, t, n, r, i = null) {
  const o = e[lf] || (e[lf] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [a, l] = _v(t);
    if (r) {
      const c = o[t] = xv(
        r,
        i
      );
      Si(e, a, c, l);
    } else s && (vv(e, a, s, l), o[t] = void 0);
  }
}
const cf = /(?:Once|Passive|Capture)$/;
function _v(e) {
  let t;
  if (cf.test(e)) {
    t = {};
    let r;
    for (; r = e.match(cf); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ai(e.slice(2)), t];
}
let gl = 0;
const wv = /* @__PURE__ */ Promise.resolve(), kv = () => gl || (wv.then(() => gl = 0), gl = Date.now());
function xv(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    rr(
      Mv(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = kv(), n;
}
function Mv(e, t) {
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
const uf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Pv = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? mv(e, r, s) : t === "style" ? yv(e, n, r) : Ia(t) ? Ea(t) || Sv(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nv(e, t, r, s)) ? (af(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && sf(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Av(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Lt(r))) ? af(e, on(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), sf(e, t, r, s));
};
function Nv(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && uf(t) && rt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return uf(t) && Lt(n) ? !1 : t in e;
}
function Av(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = on(t);
  return Array.isArray(n) ? n.some((i) => on(i) === r) : Object.keys(n).some((i) => on(i) === r);
}
const df = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => Ns(t, n) : t;
};
function Cv(e) {
  e.target.composing = !0;
}
function ff(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const yl = /* @__PURE__ */ Symbol("_assign");
function pf(e, t, n) {
  return t && (e = e.trim()), n && (e = Jc(e)), e;
}
const mf = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[yl] = df(i);
    const o = r || i.props && i.props.type === "number";
    Si(e, t ? "change" : "input", (s) => {
      s.target.composing || e[yl](pf(e.value, n, o));
    }), (n || o) && Si(e, "change", () => {
      e.value = pf(e.value, n, o);
    }), t || (Si(e, "compositionstart", Cv), Si(e, "compositionend", ff), Si(e, "change", ff));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[yl] = df(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Jc(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, Iv = ["ctrl", "shift", "alt", "meta"], Ev = {
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
  exact: (e, t) => Iv.some((n) => e[`${n}Key`] && !t.includes(n))
}, pt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Ev[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Ov = /* @__PURE__ */ Jt({ patchProp: Pv }, fv);
let hf;
function Fv() {
  return hf || (hf = Wb(Ov));
}
const du = ((...e) => {
  const t = Fv().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = Dv(r);
    if (!i) return;
    const o = t._component;
    !rt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Tv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Tv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Dv(e) {
  return Lt(e) ? document.querySelector(e) : e;
}
function Fe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Et(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function fu(e, t) {
  let n = Et(t) - Et(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const uc = 3;
function Ji(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function ta(e, t = 0) {
  const n = Ji(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ji(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = Ji(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Ji(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Ji(t) || 0);
}
function Rm(e) {
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
const gf = Math.PI / 180, yf = 0.12, Rv = uc, Lv = 35, Vv = 140, oo = 100, $v = 20, bf = 0.8;
function zv(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Fe(Number(e || oo), 1, 179) * gf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / gf;
}
function pu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: oo })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(K, H = null) {
    a && a(K, H);
  }
  function d(K, H, D = null, N = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(K || 0), l.drag.lastY = Number(H || 0), l.drag.lastTs = Number(N || performance.now()), l.drag.pointerId = D, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: D }), !0;
  }
  function u(K, H, D = "pano", N = performance.now()) {
    if (!l.drag.active) return !1;
    const $ = Number(N || performance.now()), V = Number(K), W = Number(H), ye = V - l.drag.lastX, Se = W - l.drag.lastY;
    l.drag.lastX = V, l.drag.lastY = W, l.drag.lastTs = $;
    const me = r() || { x: 1, y: 1 }, ie = Number(me.x || 1), ke = Number(me.y || 1), de = { ...t() };
    let ue = 0, B = 0;
    if (D === "unwrap") {
      const ne = i() || { w: 1, h: 1 }, T = Math.max(1, Number(ne.w || 1)), G = Math.max(1, Number(ne.h || 1)), A = ye / T, pe = Se / G;
      ue = -A * 360 * ie, B = pe * 180 * ke;
    } else {
      const ne = o() || { w: 0, h: 0 }, T = Math.max(1, Number(ne.w || 0)), G = Math.max(1, Number(ne.h || 0));
      if (T > 1 && G > 1) {
        const A = Fe(Number(de.fov || oo), 1, 179), pe = Fe(zv(A, T, G), 0.1, 179);
        ue = -(ye / T) * A * ie, B = Se / G * pe * ke;
      } else
        ue = -ye * yf * ie, B = Se * yf * ke;
    }
    de.yaw = Et(Number(de.yaw || 0) + ue), de.pitch = Fe(Number(de.pitch || 0) + B, -89.9, 89.9), n(de), l.velHistory.push({ ts: $, yaw: de.yaw, pitch: de.pitch });
    let he = 0;
    for (; he < l.velHistory.length - 1 && l.velHistory[he].ts < $ - 100; ) he++;
    return he > 0 && l.velHistory.splice(0, he), l.inertia.active = !1, l.inertia.lastTs = $, s(), c("drag", { phase: "move", dx: ye, dy: Se, dYaw: ue, dPitch: B }), !0;
  }
  function f(K = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const H = Number(K || performance.now());
    l.drag.lastTs = H;
    const D = l.velHistory.filter(($) => H - $.ts <= 80);
    if (D.length >= 2) {
      const $ = D[0], V = D.at(-1), W = Math.max(1e-3, (V.ts - $.ts) / 1e3);
      let ye = V.yaw - $.yaw;
      ye > 180 && (ye -= 360), ye < -180 && (ye += 360), l.inertia.vx = ye / W, l.inertia.vy = (V.pitch - $.pitch) / W;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const N = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = N > $v, l.inertia.lastTs = H, c("drag", { phase: "end", speed: N, inertiaActive: l.inertia.active }), !0;
  }
  function m(K = performance.now()) {
    if (!l.inertia.active) return !1;
    const H = Number(K || performance.now()), D = Math.max(1e-3, (H - (l.inertia.lastTs || H)) / 1e3);
    l.inertia.lastTs = H;
    const N = { ...t() };
    N.yaw = Et(Number(N.yaw || 0) + l.inertia.vx * D), N.pitch = Fe(Number(N.pitch || 0) + l.inertia.vy * D, -89.9, 89.9);
    const $ = Math.exp(-5.5 * D);
    return l.inertia.vx *= $, l.inertia.vy *= $, Math.abs(l.inertia.vx) < bf && Math.abs(l.inertia.vy) < bf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), n(N), s(), l.inertia.active;
  }
  function S() {
    const K = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], K;
  }
  function g(K) {
    const H = Math.sign(Number(K || 0));
    if (!H) return !1;
    const D = { ...t() }, N = Number(D.fov || oo);
    return D.fov = Fe(N + H * Rv, Lv, Vv), n(D), s(), c("wheel", { deltaSign: H, fovBefore: N, fovAfter: D.fov }), !0;
  }
  function b(K, H = 0) {
    return g(ta(K, H));
  }
  function y() {
    n({ yaw: 0, pitch: 0, fov: oo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: m,
    stopMotion: S,
    applyWheel: g,
    applyWheelEvent: b,
    resetView: y
  };
}
const jv = "PanoramaSuite.Debug.Diagnostics", Hv = "PanoramaSuite.Debug.ExportDiagnostics", bl = "pano_suite.diagnostics.v1", vf = "pano_suite.diagnostics.previous.v1", Gv = 300, Kv = 2e5, Wv = 100, Uv = 20, Bv = 1e3, Yv = 2, ps = 1024 * 1024;
function kr(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function qv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Xv() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: qv,
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
function Jv(e = {}) {
  const t = { ...Xv(), ...e };
  let n = !1, r = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, m = { created: 0, collected: 0 }, S = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    d.delete(v), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    u.delete(v), m.collected += 1;
  }) : null, b = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, K = [], H = /* @__PURE__ */ new Map();
  let D = { count: 0, maxMs: 0 }, N = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 };
  const V = [];
  function W(v, U, p = void 0) {
    K.push(p === void 0 ? { t: t.clock(), type: v, label: U } : { t: t.clock(), type: v, label: U, detail: p }), K.length > Wv && K.shift();
  }
  function ye(v, U, p, h, x) {
    if (!n || !h || !t.WeakRef) return h;
    const F = { ref: new t.WeakRef(h), label: x };
    return v.add(F), U == null || U.register(h, F), p.created += 1, h;
  }
  function Se(v, U = "") {
    return ye(d, S, f, v, U);
  }
  function me(v, U = "") {
    return ye(u, g, m, v, U);
  }
  function ie({ label: v = "", width: U, height: p, offscreen: h = !1 } = {}) {
    const x = globalThis.OffscreenCanvas;
    let F;
    return h && typeof x < "u" ? F = new x(U, p) : (F = t.document().createElement("canvas"), U !== void 0 && p !== void 0 && (F.width = U, F.height = p)), Se(F, v);
  }
  function ke(v) {
    v.width = 0, v.height = 0, n && (f.released += 1);
  }
  function de(v = t.document(), U = "") {
    var p;
    return me(((p = v == null ? void 0 : v.createElement) == null ? void 0 : p.call(v, "video")) || null, U);
  }
  function ue(v, U) {
    if (!n || !v) return () => {
    };
    const p = { label: U, lost: !1, disposed: !1 };
    b.add(p), y.created += 1, W("webgl-created", U);
    const h = () => {
      p.disposed || (p.lost = !0, y.lost += 1, W("webglcontextlost", U));
    }, x = () => {
      p.disposed || (p.lost = !1, y.restored += 1, W("webglcontextrestored", U));
    };
    return v.addEventListener("webglcontextlost", h), v.addEventListener("webglcontextrestored", x), () => {
      p.disposed || (p.disposed = !0, b.delete(p), y.disposed += 1, W("webgl-disposed", U));
    };
  }
  function B(v, U) {
    return H.set(v, U), () => {
      H.get(v) === U && H.delete(v);
    };
  }
  function he() {
    return n ? t.now() : -1;
  }
  function ne(v) {
    if (v < 0 || !n) return;
    const U = t.now() - v;
    D.count += 1, D.maxMs = Math.max(D.maxMs, U);
  }
  function T(v, U) {
    if (U < 0 || !n) return;
    const p = t.now() - U, h = N.get(v) ?? { count: 0, maxMs: 0 };
    h.count += 1, h.maxMs = Math.max(h.maxMs, p), N.set(v, h);
  }
  function G() {
    let v = 0, U = 0, p = 0, h = [0, 0];
    const x = {};
    for (const F of d) {
      const L = F.ref.deref();
      if (!L) continue;
      v += 1;
      const J = L.width * L.height;
      J > 0 && (U += 1), p += J, J > h[0] * h[1] && (h = [L.width, L.height]);
      const le = x[F.label] ?? (x[F.label] = [0, 0]);
      le[0] += 1, le[1] += J;
    }
    return { ...f, alive: v, sized: U, pixels: p, mb: kr(p * 4 / ps, 1), largest: h, byLabel: x };
  }
  function A() {
    const v = [];
    let U = 0, p = 0, h = 0;
    for (const x of u) {
      const F = x.ref.deref();
      if (!F) continue;
      U += 1;
      const L = !!(F.currentSrc || F.src);
      L && (p += 1);
      const J = !F.paused && !F.ended;
      J && (h += 1), v.length < Uv && v.push({
        label: x.label,
        playing: J,
        src: L,
        size: [F.videoWidth || 0, F.videoHeight || 0],
        ready: F.readyState ?? 0,
        connected: !!F.isConnected
      });
    }
    return { ...m, alive: U, loaded: p, playing: h, list: v };
  }
  function pe() {
    const v = t.now(), U = t.memory(), p = {
      t: t.clock(),
      heap: U ? { used: kr(U.usedJSHeapSize / ps, 1), total: kr(U.totalJSHeapSize / ps, 1), limit: kr(U.jsHeapSizeLimit / ps, 1) } : null,
      canvas: G(),
      webgl: { ...y, alive: [...b].filter((h) => !h.lost).length },
      video: A(),
      frame: { count: D.count, maxMs: kr(D.maxMs), longTasks: $.count, longTaskMaxMs: kr($.maxMs) },
      renders: Object.fromEntries([...N].map(([h, x]) => [h, { count: x.count, maxMs: kr(x.maxMs) }])),
      sources: Object.fromEntries([...H].map(([h, x]) => [h, x()])),
      costMs: kr(c, 3)
    };
    return D = { count: 0, maxMs: 0 }, N = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 }, V.push({ record: p, text: JSON.stringify(p) }), V.length > Gv && V.shift(), l += 1, l % Yv === 0 && I(), c = t.now() - v, p;
  }
  function P(v = Kv) {
    const U = JSON.stringify({ ...o, events: K }).slice(0, -1);
    let p = v - U.length - 14, h = V.length;
    for (; h > 0 && p - V[h - 1].text.length - 1 >= 0; )
      h -= 1, p -= V[h].text.length + 1;
    return `${U},"records":[${V.slice(h).map((x) => x.text).join(",")}]}`;
  }
  function I() {
    if (!o) return;
    const v = t.storage();
    if (v) {
      o.savedAt = t.clock();
      try {
        v.setItem(bl, P());
      } catch {
      }
    }
  }
  function w() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", I();
  }
  function M() {
    var x;
    if (r) return i;
    r = !0;
    const v = t.storage();
    if (!v) return null;
    let U = null;
    try {
      if (U = v.getItem(bl), U === null) {
        const F = v.getItem(vf);
        return i = F === null ? null : JSON.parse(F), i;
      }
      v.setItem(vf, U), v.removeItem(bl), i = JSON.parse(U);
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
  function ae(v) {
    const U = v === !0;
    if (M(), U !== n) {
      if (n = U, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, V.length = 0, a = t.observeLongTasks((p) => {
          for (const h of p)
            $.count += 1, $.maxMs = Math.max($.maxMs, h.duration);
        }), t.addUnload(w), s = t.setInterval(pe, Bv), I();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(w), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", I();
    }
  }
  function ee() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...K], records: V.map((v) => v.record) } : null,
      previous: i
    };
  }
  function R() {
    const v = t.document(), U = new Blob([JSON.stringify(ee(), null, 1)], { type: "application/json" }), p = URL.createObjectURL(U), h = v.createElement("a");
    h.href = p, h.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, h.click(), setTimeout(() => URL.revokeObjectURL(p), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: ie,
    releaseCanvas: ke,
    trackCanvas: Se,
    createVideo: de,
    trackVideo: me,
    watchContext: ue,
    addSource: B,
    frameStart: he,
    frameEnd: ne,
    renderEnd: T,
    sample: pe,
    serialize: P,
    recoverPrevious: M,
    setEnabled: ae,
    exportData: ee,
    download: R
  };
}
const hn = Jv(), zt = hn.createCanvas, Xr = hn.releaseCanvas, vl = hn.trackCanvas, Zo = hn.createVideo, Sf = hn.trackVideo, Zv = hn.addSource, Qv = hn.frameStart, e1 = hn.frameEnd;
function Lm(e, t) {
  const n = hn.watchContext(e.canvas, t), r = hn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = hn.frameStart(), l = o(s);
    return hn.renderEnd(t, a), l;
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
const t1 = {
  id: jv,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => hn.setEnabled(e === !0)
}, _f = {
  id: Hv,
  label: "Export Panorama Suite diagnostics",
  function: () => hn.download()
}, ut = Math.PI / 180, $t = 180 / Math.PI;
function Cn(e, t, n) {
  return { x: e, y: t, z: n };
}
function na(e, t) {
  return Cn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ra(e, t) {
  return Cn(e.x * t, e.y * t, e.z * t);
}
function Sl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function mu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Cn(e.x / t, e.y / t, e.z / t);
}
function mn(e, t) {
  const n = e * ut, r = t * ut, i = Math.cos(r);
  return Cn(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function Wi(e, t, n = 0) {
  const r = Number(e || 0) * ut, i = Number(t || 0) * ut, o = n * ut, s = Math.cos(r), a = Math.sin(r), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Cn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Cn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Cn(a * l, c, s * l)
  };
}
function ia(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function gt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function n1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function r1(e) {
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
function i1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function o1(e, t) {
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
function ms(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = o1(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function s1(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const l = ms(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const o = ms(e.points, t, 1);
  if (!o) return null;
  const s = ms(e.rawPoints, t, 1), a = ms(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function a1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = i1(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = s1(e.geometry, n, r, t === "paint");
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
function wf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = a1(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function l1(e) {
  if (!e || typeof e != "object") return null;
  const t = gt(e.u0, null), n = gt(e.v0, null), r = gt(e.u1, null), i = gt(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function c1(e) {
  const t = e || {};
  return {
    du: gt(t.du, 0) ?? 0,
    dv: gt(t.dv, 0) ?? 0,
    rot_deg: gt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, gt(t.scale, 1) ?? 1)
  };
}
function u1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = l1(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, gt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: c1(e.transform)
  } : null;
}
function d1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = u1(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function li(e) {
  const t = n1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: r1(e.groups),
    paint: wf(e.paint, "paint"),
    mask: wf(e.mask, "mask"),
    raster_objects: d1(e.raster_objects)
  };
}
const En = 1, On = 179, dc = 85;
function Ga(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Vm(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function $m(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * $t;
  return n && (r = Math.round(r / 15) * 15), Ga(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Tr(e = {}) {
  const t = Fe(Qe(e.hFOV_deg || 90, 90), En, On), n = Fe(Qe(e.vFOV_deg || 60, 60), En, On), r = Math.tan(t * ut * 0.5), i = Math.tan(n * ut * 0.5);
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
function oi(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Tr(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function hu(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, Qe(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function gu(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Fe(2 * Math.atan(r / (2 * n)) * $t, En, On), s = Fe(2 * Math.atan(i / (2 * n)) * $t, En, On);
  return { hFOV_deg: o, vFOV_deg: s };
}
function f1(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), i = Qe(e == null ? void 0 : e.y, 0), o = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Tr(t), l = Math.max(1e-12, Qe(n, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: r + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function yu(e, t, n = dc) {
  const r = Math.max(1e-12, Qe(t, 1)), i = Fe(Qe(n, dc), 1, 89.999), o = r * Math.tan(i * ut), s = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function zm(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function p1(e, t) {
  const n = Fe(Qe(e, 90), En, On), r = Math.max(1e-6, Qe(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * ut * 0.5) / r) * $t,
    En,
    On
  );
}
function Es(e, t) {
  const n = Fe(Qe(e, 60), En, On), r = Math.max(1e-6, Qe(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * ut * 0.5) * r) * $t,
    En,
    On
  );
}
function kf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function m1(e, t) {
  const n = kf(e, 1), r = kf(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), s = Math.max(1, Math.round(r * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function ci(e) {
  const t = Fe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * ut, n = Fe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * ut;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Qo(e) {
  const t = ci(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || m1(t, 1);
}
function bu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Qo(t), t;
}
function jm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Fe(s, En, On) : Fe(Math.min(42, Qe(i, 100) * 0.42), 8, 96);
  return bu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: Fe(Qe(n, 0), -89.9, 89.9),
    roll_deg: Ga(r),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function fr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Qo(e);
}
function Hm(e, t) {
  const n = Tr(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * $t, o = 2 * Math.atan(n.tanHalfY * r) * $t;
  return i < En || i > On || o < En || o > On ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Gm(e, t, n = uc) {
  const r = Math.sign(Qe(t, 0)), i = Math.abs(Qe(n, uc));
  if (!r || !(i > 0)) return null;
  const o = Tr(e), s = o.hFovDeg + r * i;
  if (s < En || s > On) return null;
  const a = Math.tan(s * ut * 0.5);
  return Hm(e, a / o.tanHalfX);
}
function Km(e, t) {
  const n = Tr(e), r = Wi(n.yawDeg, n.pitchDeg, n.rollDeg), i = Qe(t == null ? void 0 : t.x, 0), o = Qe(t == null ? void 0 : t.y, 0);
  return mu(na(na(r.fwd, ra(r.right, i)), ra(r.up, o)));
}
function h1(e) {
  return Cn(e.x, e.y, -e.z);
}
function Os(e) {
  return Cn(e.x, e.y, -e.z);
}
function sn(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = Wi(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function Wm(e) {
  const t = Os(Cn(e[0][0], e[1][0], e[2][0])), n = Os(Cn(e[0][1], e[1][1], e[2][1])), r = Os(Cn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * n.z - s * n.x, s * t.x - a * t.z);
  return { yawDeg: i * $t, pitchDeg: o * $t, rollDeg: l * $t };
}
function To(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function Dr(e) {
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
function hs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Jr = 1e-6, fc = 1e-6, g1 = 1e-9;
function Do(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function y1(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    Do(0, n, i, 1, c) < t ? s = c : a = c;
  }
  return Do(0, r, o, 1, 0.5 * (s + a));
}
function $i(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function zi(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = n.map((f) => -f / i), a = r.map((f) => f / o);
  if (s.reduce((f, m, S) => f + m * a[S], 0) < 0) return n.map(() => 0);
  const l = s.map((f, m) => (f * o + a[m] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((m, S) => m + S * S, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function Um(e, t, n, r) {
  const i = n[r], o = n[r + 1], s = t[r + 1] - t[r], a = i.map((d, u) => o[u] - d);
  let l = a;
  $i(e, r) && (l = zi(t, r, n[r - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return $i(e, r + 1) && (c = zi(t, r + 1, a.map((d) => -d), n[r + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function Bm(e, t, n, r, i) {
  const [[o], [s]] = Um(e, t, n.map((a) => [a]), r);
  return Do(n[r], n[r] + o, n[r + 1] + s, n[r + 1], i);
}
function b1(e, t, n, r) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = Um(e, t, i, n);
  o = ((c = e[n].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[n + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[n], l = i[n + 1];
  return [0, 1, 2].map((u) => Do(a[u], a[u] + o[u], l[u] + s[u], l[u], r));
}
function oa([e, t, n, r], [i, o, s, a]) {
  return [
    r * i + e * a + t * s - n * o,
    r * o - e * s + t * a + n * i,
    r * s + e * o - t * i + n * a,
    r * a - e * i - t * o - n * s
  ];
}
function v1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function _l(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function S1([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function pc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Pi(e, t) {
  return S1(oa([-e[0], -e[1], -e[2], e[3]], t));
}
function wl(e, t, n) {
  return oa(e, pc(Pi(e, t).map((r) => n * r)));
}
function kl(e, t) {
  const n = v1(e, t);
  if (Math.abs(n) > fc) return n < 0;
  const [r, i, o] = Pi(e, t);
  for (const s of [-i, r, o])
    if (Math.abs(s) > fc) return s < 0;
  return !1;
}
function gs(e) {
  const { x: t, y: n, z: r, w: i } = Dr(sn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function mc(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function _1(e, t, n, r) {
  const i = gs(e[n].value);
  let o = gs(e[n + 1].value);
  kl(i, o) && (o = _l(o));
  const s = t[n + 1] - t[n], a = Pi(i, o);
  let l = a;
  if ($i(e, n)) {
    let N = gs(e[n - 1].value);
    kl(N, i) && (N = _l(N)), l = zi(t, n, Pi(i, N), a).map(($) => $ * s);
  }
  let c = a;
  if ($i(e, n + 1)) {
    let N = gs(e[n + 2].value);
    kl(o, N) && (N = _l(N)), c = zi(t, n + 1, Pi(o, i), Pi(o, N)).map(($) => $ * s);
  }
  const d = oa(i, pc(l.map((N, $) => 0.5 * (N - a[$])))), u = oa(o, pc(a.map((N, $) => 0.5 * (N - c[$])))), [f, m, S, g] = wl(wl(i, o, r), wl(d, u, r), 2 * r * (1 - r)), { yawDeg: b, pitchDeg: y, rollDeg: K } = Wm(To({ x: f, y: m, z: S, w: g })), H = e[n].value, D = e[n + 1].value;
  return {
    yaw_deg: mc(b, H.yaw_deg, D.yaw_deg, r),
    pitch_deg: y,
    roll_deg: mc(K, H.roll_deg, D.roll_deg, r)
  };
}
function Ro(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function sa(e) {
  return Math.sqrt(Ro(e, e));
}
function aa(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function Ym(e, t) {
  const n = Ro(e, t), r = t.map((s, a) => s - n * e[a]), i = sa(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((s) => s * o);
}
function _i(e, t) {
  const n = sa(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function ys(e, t, n) {
  return _i(e, Ym(e, t).map((r) => n * r));
}
function xl(e, t) {
  const n = aa(e[t].value), r = aa(e[t + 1].value), i = Ro(n, r), o = i < 0 && sa(r.map((l, c) => l - i * n[c])) <= fc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = Ym(n, r);
  const a = sa(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * n[c]), o];
}
function w1(e, t, n, r) {
  const i = aa(e[n].value), o = aa(e[n + 1].value), [s, a, l] = xl(e, n);
  let c = s, d = a;
  const u = t[n + 1] - t[n];
  $i(e, n) && (c = zi(t, n, xl(e, n - 1)[1].map((H) => -H), c).map((H) => H * u)), $i(e, n + 1) && (d = zi(t, n + 1, d.map((H) => -H), xl(e, n + 1)[0]).map((H) => H * u));
  let f, m, S;
  if (l) {
    const H = Math.PI, D = Do(0, Ro(c, s) / H / 3, H - Ro(d, a) / H / 3, H, r);
    [f, m, S] = _i(i, s.map((N) => D * N / H));
  } else {
    const H = ys(_i(i, c.map(($) => $ / 3)), _i(o, d.map(($) => -$ / 3)), r), D = ys(_i(i, c.map(($) => r * $ / 3)), H, r), N = ys(H, _i(o, d.map(($) => -(1 - r) * $ / 3)), r);
    [f, m, S] = ys(D, N, r);
  }
  const g = Math.hypot(f, S), b = e[n].value.yaw_deg, y = e[n + 1].value.yaw_deg;
  return { yaw_deg: g <= g1 ? b + (y - b) * r : mc(Math.atan2(f, S) * 180 / Math.PI, b, y, r), pitch_deg: Math.atan2(m, g) * 180 / Math.PI };
}
function k1(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Bm(e, t, e.map((s) => s.value[o]), n, r);
  return i;
}
function x1(e, t, n, r) {
  return Bm(e, t, e.map((i) => i.value), n, r);
}
const M1 = { position: b1, rotation: _1, direction: w1, size: k1 };
function Ct(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return hs(e[t].value);
  if (n <= r[0].frame + Jr) return hs(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - Jr) return hs(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + Jr; ) o += 1;
  const s = r[o];
  if (Math.abs(n - s.frame) <= Jr || s.easing === "hold") return hs(s.value);
  const a = r.map((c) => c.frame), l = y1(s.easing, (n - a[o]) / (a[o + 1] - a[o]));
  return (M1[t] ?? x1)(r, a, o, l);
}
function hc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function P1(e) {
  return Math.min(1, Math.max(0, e));
}
function qm(e) {
  return Math.max(1e-6, e);
}
function Xm(e, t) {
  return t - (e.start - e.in);
}
function ui(e, t) {
  return t >= e.start - Jr && (e.duration === null || t < e.start + e.duration - Jr);
}
function Ka(e, t) {
  return {
    position: Ct(e, "position", t),
    ...Ct(e, "rotation", t),
    hFOV_deg: hc(Ct(e, "fov", t)),
    aspect: e.aspect
  };
}
function es(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = Xm(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : Ka(r, n),
    scene: {
      active: i.visible && ui(i.clip, n),
      clip_frame: o,
      position: Ct(i, "position", o),
      ...Ct(i, "rotation", o),
      scale: qm(Ct(i, "scale", o))
    },
    stickers: e.stickers.map((s) => _r(s, n))
  };
}
function N1(e, t) {
  if (e.placement === "world")
    return {
      position: Ct(e, "position", t),
      ...Ct(e, "rotation", t),
      scale: qm(Ct(e, "scale", t))
    };
  const n = Ct(e, "size", t);
  return {
    ...Ct(e, "direction", t),
    roll_deg: Ct(e, "roll", t),
    hFOV_deg: hc(n.hFOV_deg),
    vFOV_deg: hc(n.vFOV_deg)
  };
}
function _r(e, t) {
  const n = Xm(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ui(e.clip, t),
    clip_frame: n,
    ...N1(e, n),
    opacity: P1(Ct(e, "opacity", n))
  };
}
const A1 = 2, Jm = ["sky", "world"], gc = ["perspective", "erp"], C1 = ["input", "output", "temp"], Zm = [0.42, 0, 0.58, 1], Qm = 1, vu = 1e3, yc = 1e7, Su = yc, _u = Number.MAX_SAFE_INTEGER, I1 = /^sticker_([0-9]{1,16})$/;
function wt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Rt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function wu(e, t) {
  const n = Rt(e, t);
  return n !== null && n > 0 ? n : t;
}
function rn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Er(e) {
  const t = Rt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Fs(e) {
  const t = Er(e);
  return t === null ? null : rn(t, -yc, yc);
}
function Rr(e) {
  const t = wu(e, null);
  return t === null ? null : rn(t, Qm, vu);
}
function eh(e) {
  const t = Er(e);
  return t !== null && t >= 1 ? Math.min(t, Su) : null;
}
function Lo(e, t) {
  return typeof e == "boolean" ? e : t;
}
function th(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Rt(n, null));
  return t.includes(null) ? null : t;
}
function nh(e) {
  return th(e) || [0, 0, 0];
}
function rh(e) {
  const t = wt(e) ? e : {};
  return {
    yaw_deg: Rt(t.yaw_deg, 0),
    pitch_deg: rn(Rt(t.pitch_deg, 0), -90, 90),
    roll_deg: Rt(t.roll_deg, 0)
  };
}
function E1(e) {
  return rn(Rt(e, 90), 0.1, 179);
}
function O1(e) {
  return wu(e, 1);
}
function F1(e) {
  const t = wt(e) ? e : {};
  return {
    yaw_deg: Rt(t.yaw_deg, 0),
    pitch_deg: rn(Rt(t.pitch_deg, 0), -90, 90)
  };
}
function T1(e) {
  return Rt(e, 0);
}
function D1(e) {
  const t = wt(e) ? e : {};
  return {
    hFOV_deg: rn(Rt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: rn(Rt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function ih(e) {
  return rn(Rt(e, 1), 0, 1);
}
const ku = [["position", nh], ["rotation", rh], ["fov", E1]], Wa = [["position", nh], ["rotation", rh], ["scale", O1]], Lr = [["direction", F1], ["roll", T1], ["size", D1], ["opacity", ih]], Vr = [...Wa, ["opacity", ih]];
function R1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Rt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Zm];
}
function L1(e) {
  if (!wt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = th(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function V1(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!wt(i)) continue;
    const o = Fs(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: R1(i.easing) }, a = n ? L1(i.handles) : null;
    a && (s.handles = a), r.set(o, s);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function Ua(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = wt(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: V1(o.keyframes, i, r === "position") };
  }
  return n;
}
function ts(e) {
  const t = wt(e) ? e : {}, n = Fs(t.start), r = Fs(t.in), i = Fs(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Ba(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function oh(e) {
  const t = wt(e) ? e : {}, n = rn(Rt(t.x0, 0), 0, 1), r = rn(Rt(t.y0, 0), 0, 1), i = rn(Rt(t.x1, 1), 0, 1), o = rn(Rt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function $1(e) {
  if (!wt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: C1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function z1(e) {
  const t = $1(e.source);
  if (!t) return null;
  const n = Jm.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: ts(e.clip),
    visible: Lo(e.visible, !0),
    locked: Lo(e.locked, !1),
    crop: oh(e.crop),
    ...Ua(e, r ? Vr : Lr)
  };
  return r || (i.z_index = Er(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = j1(e.handoff_overrides, n)), i;
}
function j1(e, t) {
  const n = Array.isArray(e) ? e : [];
  return (t === "world" ? Vr : Lr).map(([r]) => r).filter((r) => n.includes(r));
}
function H1(e, t) {
  const n = [];
  let r = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = wt(s) ? z1(s) : null;
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
  let o = K1(t, n);
  for (const s of n)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: n, next: Math.min(o, _u) };
}
function G1(e) {
  const t = typeof e == "string" ? I1.exec(e) : null, n = t ? Number(t[1]) : 0;
  return n < _u ? n : 0;
}
function sh(e) {
  return e.reduce((t, n) => Math.max(t, G1(n.id)), 0) + 1;
}
function K1(e, t) {
  const n = Er(e), r = sh(t);
  return rn(n === null ? r : Math.max(n, r), 1, _u);
}
function W1(e) {
  if (!wt(e)) return null;
  const t = gc.includes(e.projection) ? e.projection : gc[0];
  return { aspect: wu(e.aspect, 1), projection: t, visible: Lo(e.visible, !0), ...Ua(e, ku) };
}
function la(e) {
  return typeof e == "string" && e ? e : null;
}
function ah(e, t) {
  const n = new Map(e.map((r, i) => [t(r), i]));
  return e.filter((r, i) => n.get(t(r)) === i);
}
function U1(e) {
  if (!wt(e) || la(e.id) === null || !Jm.includes(e.placement)) return null;
  const t = e.placement === "world", n = {};
  wt(e.clip) && (n.clip = ts(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (n[i] = e[i]);
  wt(e.crop) && (n.crop = oh(e.crop)), Object.assign(n, Ua(e, (t ? Vr : Lr).filter(([i]) => wt(e[i]))));
  const r = t ? null : Er(e.z_index);
  return r !== null && (n.z_index = r), Object.keys(n).length ? { id: e.id, placement: e.placement, ...n } : null;
}
function lh(e) {
  const t = wt(e) ? Rr(e.fps) : null;
  if (t === null || la(e.layer) === null) return null;
  const n = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => la(c) !== null))] : [], r = (Array.isArray(e.stickers) ? e.stickers : []).map(U1).filter((c) => c !== null), i = ah(r, (c) => c.id).filter((c) => !n.includes(c.id)), o = wt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), wt(o.clip) && (s.clip = ts(o.clip));
  const a = { layer: e.layer, fps: t, deleted: n, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !n.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function B1(e) {
  const t = (Array.isArray(e) ? e : []).map(lh).filter((n) => n !== null);
  return ah(t, (n) => n.layer);
}
function ca(e) {
  const t = wt(e.timeline) ? e.timeline : {}, n = wt(e.scene) ? e.scene : {}, { stickers: r, next: i } = H1(e.stickers, e.next_sticker_id);
  return {
    version: A1,
    id: la(e.id),
    timeline: {
      fps: Rr(t.fps) ?? 24,
      length: eh(t.length)
    },
    camera: W1(e.camera),
    scene: { clip: ts(n.clip), visible: Lo(n.visible, !0), ...Ua(n, Wa) },
    stickers: r,
    next_sticker_id: i,
    painting: li(e.painting),
    painting_layer: wt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Lo(e.painting_visible, !0),
    upstream: B1(e.upstream),
    background: Y1(e.background)
  };
}
function Y1(e) {
  return { clip: ts(wt(e) ? e.clip : void 0) };
}
function q1(e, t) {
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
function X1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!wt(t)) return null;
  const n = rn(Rt(t.hFOV_deg, 90), 1, 179), r = rn(Rt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function J1(e) {
  const t = wt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(wt) : [];
  return n.sort((r, i) => Rt(r.z_index, 0) - Rt(i.z_index, 0)), ca({
    camera: X1(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: q1(r, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return ca({});
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
  return n === 1 ? J1(t) : ca(t);
}
const Ml = {
  state: { painting_visible: !0 },
  camera: { projection: gc[0], visible: !0 },
  scene: { visible: !0 }
};
function Pl(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function bc(e) {
  const t = Pl(e, Ml.state);
  return t.id === null && delete t.id, t.next_sticker_id === sh(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, Ba(t.background.clip) && delete t.background, JSON.stringify({
    ...t,
    camera: e.camera && Pl(e.camera, Ml.camera),
    scene: Pl(e.scene, Ml.scene),
    stickers: e.stickers.map((n) => Object.fromEntries(Object.entries(n).filter(([r, i]) => r !== "handoff_overrides" || i.length)))
  });
}
function _o(e, t, n, r, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: n(r + a.frame) - i }))
    };
  return o;
}
function wo(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function Ui(e, t) {
  const n = Rr(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (a) => Er(a * r), { length: o } = e.timeline, s = wo(e.scene.clip, i);
  return ca({
    id: e.id,
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ..._o(e.camera, ku, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ..._o(e.scene, Wa, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = wo(a.clip, i), u = a.placement === "world" ? Vr : Lr;
      return { ...a, clip: l, ..._o(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream,
    background: { clip: wo(e.background.clip, i).clip }
  });
}
function ch(e, t) {
  const { fps: n } = t.timeline, r = n / e.fps, i = (l) => Er(l * r), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? Vr : Lr).filter(([m]) => Object.hasOwn(l, m));
    if (!Object.hasOwn(l, "clip")) {
      const m = o.get(l.id) ?? 0, S = Er(m * (e.fps / n));
      return { ...l, ..._o(l, c, i, S, m) };
    }
    const { clip: d, anchor: u, newAnchor: f } = wo(l.clip, i);
    return { ...l, clip: d, ..._o(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: wo(e.scene.clip, i).clip } : e.scene;
  return lh({ ...e, fps: n, stickers: s, scene: a });
}
const Z1 = 1e-3;
function xu(e, t, n, r) {
  if (!ui(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < r.frames ? (s + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(Z1 / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function Mu(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function uh(e, t, n, r = !1) {
  return e.start - e.in + (n.video && r ? n.duration * t : n.frames);
}
function dh(e, t, n) {
  const r = n / t;
  return { start: e.start * r, in: e.in * r, duration: e.duration === null ? null : e.duration * r };
}
function fh(e) {
  return Ba(e) ? null : { origin: e.start - e.in, start: e.start, end: e.duration === null ? 1 / 0 : e.start + e.duration };
}
function vc(e, t, n, r = null, i = !1) {
  return ui(e, t) ? !(r != null && r.video || (r == null ? void 0 : r.frames) > 1) || t < uh(e, n, r, i) : !1;
}
const Zi = /* @__PURE__ */ new Map(), Q1 = 8;
function ph(e) {
  let t = Zi.get(e);
  if (!t) {
    const n = zt({ label: "background.color", width: 2, height: 1 }), r = n.getContext("2d");
    r.fillStyle = e, r.fillRect(0, 0, n.width, n.height), t = { media: n, revision: e, coverage: 360, source: `bg_color:${e}` }, Zi.size >= Q1 && Zi.delete(Zi.keys().next().value), Zi.set(e, t);
  }
  return t;
}
function Vo(e) {
  const t = e("pano_sticker_input_video_meta")[0];
  if (t && typeof t == "object") return t;
  const n = e("pano_sticker_files").length;
  return n > 1 ? { kind: "IMAGE", frames: n } : null;
}
function eS(e, t) {
  return Math.floor(e * t.fps);
}
function Pu(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const xf = 4;
function Nu({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return r.has(s) || r.set(s, e(n[s], t)), r.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== n.length || s.some((f, m) => f !== n[m])) && (n = s, r.clear(), i = null), a === null) return null;
      const d = eS(a, l);
      for (let f = d; f < Math.min(n.length, d + xf + 1); f += 1) o(f);
      for (const f of r.keys())
        (f < d || f > d + xf) && f !== i && r.delete(f);
      const u = r.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && r.delete(i), i = d), i === null ? c : r.get(i);
    }
  };
}
function Nl(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function mh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function hh(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Jr);
}
function gh(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? mh(e.keyframes[r - 1].easing) : [...Zm];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function qt(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Nl(i.value, r);
    return;
  }
  const o = hh(i, n);
  o ? o.value = Nl(o.value, r) : gh(i, n, Nl(Ct(e, t, n), r));
}
function Bi(e) {
  return e.placement === "world" ? Vr.map(([t]) => t) : e.placement === "sky" ? Lr.map(([t]) => t) : e.clip && !e.position ? [] : (e.clip ? Wa : ku).map(([t]) => t);
}
function tS(e, t) {
  for (const n of Bi(e))
    hh(e[n], t) || gh(e[n], t, Ct(e, n, t));
}
function nS(e) {
  const t = Bi(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function Al(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function rS(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function iS(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Ct(e, o, r);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function oS(e, t, n, r, i, o = 1 / 0) {
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
function yh(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => n.length > 1 ? s.frame >= r && s.frame < i : s.frame === r));
}
function sS(e, t, n) {
  const r = yh(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function aS(e, t, n, r) {
  for (const i of yh(e, t, n)) i.easing = mh(r);
}
function Mf(e, t) {
  e.start = Math.max(0, e.start + t);
}
function lS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function cS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function bh(e) {
  return Bi(e).map((t) => e[t]);
}
function ua(e) {
  return bh(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Ba(e.clip);
}
function vh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.background, e.scene, ...e.stickers].some(ua);
}
const Sh = 1e5;
function Au(e, t = {}) {
  const { length: n } = e.timeline, r = n ? Math.max(1, Math.round(n)) : uS(e, t);
  return Number.isFinite(r) ? r : Sh;
}
function uS(e, { bg: t = null, port: n = null, sceneItems: r = 0, upstream: i = null, openClip: o = null, camera: s = !1 } = {}) {
  const a = e.timeline.fps, l = (g) => g.duration === null || g === o, c = [e.scene.clip, ...e.stickers.map((g) => g.clip)].filter((g) => !l(g)).map((g) => g.start + g.duration), d = e.stickers.find((g) => g.source.kind === "port");
  n && d && l(d.clip) && c.push(Mu({ ...d.clip, duration: null }, a, n));
  const u = e.scene.clip;
  r > 1 && l(u) && c.push(u.start - u.in + r);
  const f = e.background.clip;
  (t == null ? void 0 : t.frames) === 1 && !t.video && !l(f) && c.push(f.start + f.duration);
  const m = s && e.camera ? bh(e.camera).flatMap((g) => g.keyframes.map((b) => b.frame)) : [];
  let S = 1;
  return t != null && t.video ? S = i ? Math.max(1, Math.round(t.duration * a)) : t.frames : (t == null ? void 0 : t.frames) > 1 ? S = t.frames : c.length ? S = Math.max(1, Math.round(Math.max(...c))) : m.length && (S = Math.max(1, Math.round(Math.max(...m)) + 1)), i && (S = Math.max(S, i.frames, ...i.ends.map(Math.round))), S;
}
function dS(e) {
  return e > 0 ? Rr(Math.min(e, vu)) : null;
}
function fS(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : eh(Math.max(1, Math.min(e, Su)));
}
const Cl = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], pS = 2e3;
function mS(e, t, n = 56) {
  const r = Cl.find((o) => o * t >= n) || Cl[Cl.length - 1], i = [];
  for (let o = 0; o < e && i.length < pS; o += r) i.push(o);
  return i;
}
function hS(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let bs = { text: null, parsed: null };
function yn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function da(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function gS({
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
    painting: li(null),
    painting_layer: null,
    ui_settings: da(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function _h(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function yS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function bS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function vS(e) {
  return Array.isArray(e) ? e.map((t) => bu(t)) : [];
}
function SS(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((s) => String((s == null ? void 0 : s.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function wh(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = gS(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let o = null;
    if (bs.text === i ? o = bs.parsed : (o = JSON.parse(i), bs = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const s = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, a = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: yS(o.assets),
      stickers: bS(o.stickers),
      shots: vS(o.shots),
      painting: li(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: da(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return s && (a.ui_settings = da({ ...a.ui_settings, ...s })), a.output_preset = _h(
      n.outputPreset,
      Number(a.output_preset || r.output_preset)
    ), a.bg_color = String(n.backgroundColor || a.bg_color || r.bg_color), a.coverage = yn(n.coverage), delete a.editor_history, a;
  } catch {
    return bs = { text: i, parsed: null }, r;
  }
}
function _S(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function wS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), e.next_sticker_id > n.next_sticker_id && (n.next_sticker_id = e.next_sticker_id), e.id && !n.id && (n.id = e.id), { state: n, paintingChanged: r };
}
function kS(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function kh(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = Rr(t.fps);
  let l;
  try {
    l = an(e);
  } catch {
    l = an(null);
  }
  return a && a !== l.timeline.fps && (l = Ui(l, a)), {
    ...l,
    coverage: yn(i),
    bg_color: r,
    output_preset: _h(n),
    ui_settings: da(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function xS(e, t) {
  const n = Ui(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.background, n.background], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of Bi(o)) o[a].keyframes = s[a].keyframes;
    }
}
function xh(e, t, n) {
  if (e.source.kind !== "port" || !((n == null ? void 0 : n.width) > 0 && (n == null ? void 0 : n.height) > 0)) return t.vFOV_deg;
  const r = Math.min(179, Math.max(0.1, t.hFOV_deg)) * ut, i = 2 * Math.atan(Math.tan(r * 0.5) * (n.height / n.width)) / ut;
  return Math.min(179, Math.max(0.1, i));
}
function Cu(e, t, n = null) {
  const r = _r(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: xh(e, r, n), rot_deg: r.roll_deg };
}
const MS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Pf(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function PS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[MS[n]].keyframes.length));
}
function Mh(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = Pf(n, ["yaw_deg", "pitch_deg"]), o = Pf(n, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && qt(e, "direction", r, i), n.rot_deg !== void 0 && qt(e, "roll", r, n.rot_deg), Object.keys(o).length && qt(e, "size", r, o);
}
const Ya = ["position_x", "position_y", "position_z"], Iu = "camera";
function Ph(e, t) {
  const n = Ka(e, t);
  return bu({
    id: Iu,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: p1(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function NS(e) {
  return an({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Et(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function AS(e) {
  return e - 360 * Math.round(e / 360);
}
function CS(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + AS(n[o] - r[o]));
  Object.keys(i).length && qt(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && qt(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * ut * 0.5) / Math.tan(n.vFOV_deg * ut * 0.5)), n.position.some((o, s) => o !== r.position[s]) && qt(e, "position", t, [...n.position]);
}
function IS(e, t) {
  const n = Ct(e, "position", t), r = Ct(e, "rotation", t);
  return {
    ...Object.fromEntries(Ya.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Ct(e, "fov", t)
  };
}
function ES(e, t, n, r) {
  const i = Ya.indexOf(n);
  if (i >= 0) {
    const o = Ct(e, "position", t);
    o[i] = r, qt(e, "position", t, o);
  } else n === "hFOV_deg" ? qt(e, "fov", t, r) : qt(e, "rotation", t, { [n]: r });
}
function OS(e, t, n) {
  qt(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function FS(e, t) {
  const n = _r(e, t);
  return {
    ...Object.fromEntries(Ya.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function TS(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = Ya.indexOf(n);
  if (o >= 0) {
    const s = Ct(e, "position", i);
    s[o] = r, qt(e, "position", i, s);
  } else n === "scale" ? qt(e, "scale", i, r) : n === "opacity" ? qt(e, "opacity", i, r / 100) : qt(e, "rotation", i, { [n]: r });
}
function DS(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && qt(e, i, r, n[i]);
}
function RS(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function LS(e, t, n) {
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
function Ts(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function fa(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function qa(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Eu(e, t, n, r) {
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
function VS(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Et(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function Nh(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Ah(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Ch(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Nf(e, t) {
  return e != null && e.__panoSceneStateV2 ? bc(an(t)) : JSON.stringify(t);
}
const $S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function zS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => $S[e & 63]).join("");
}
function Ih(e, t, n, r) {
  const i = Nf(e, t);
  return jS(e, i, n, r) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = zS(), Nf(e, t));
}
function jS(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = an(n);
    if (bc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && bc(Ui(i, o)) === t;
  } catch {
    return !1;
  }
}
function wi(e, t) {
  const n = zt({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function HS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Af(e, t = 8) {
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
function Ou(e, t) {
  return zt({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Pr(e, t, n) {
  if (!e) return wi(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Tt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Wt(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Il = null, El = null, Cf = null, If = null, Ft = null, Qi = null;
function GS() {
  if (El) return El;
  const e = 6, t = 17, n = zt({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), El = n, n;
}
function Ol(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Il = Pr(Il, n, r);
  const i = Il;
  Tt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", If !== i.ctx && (Cf = i.ctx.createPattern(GS(), "repeat"), If = i.ctx), i.ctx.fillStyle = Cf, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function KS(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function WS(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function US(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function BS(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Nt = /* @__PURE__ */ new Map(), Fu = 128;
function YS(e, t, n, r, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if (Nt.has(l)) {
    const K = Nt.get(l);
    return Nt.delete(l), Nt.set(l, K), K;
  }
  Nt.size >= Fu && Nt.delete(Nt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Ou(c, c), f = u.getContext("2d"), m = a * s, S = s + 1, g = `rgba(${n},${r},${i},${o})`, b = `rgba(${n},${r},${i},0)`, y = f.createRadialGradient(d, d, m, d, d, S);
  return y.addColorStop(0, g), y.addColorStop(1, b), f.fillStyle = y, f.fillRect(0, 0, c, c), Nt.set(l, u), u;
}
function qS(e, t, n, r, i, o, s) {
  const { r: a, g: l, b: c, a: d } = r, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), m = Math.max(0, i), S = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), b = `chisel:${u}:${f}:${n.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${m.toFixed(2)}:${S.toFixed(2)}:${g.toFixed(2)}`;
  if (Nt.has(b)) {
    const W = Nt.get(b);
    return Nt.delete(b), Nt.set(b, W), W;
  }
  Nt.size >= Fu && Nt.delete(Nt.keys().next().value);
  const y = Ou(u, f), K = y.getContext("2d"), H = K.createImageData(u, f), D = H.data, N = Math.max(0, e - t), $ = Math.max(0, Math.min(1, n)), V = 1 + m;
  for (let W = 0; W < f; W++)
    for (let ye = 0; ye < u; ye++) {
      const Se = ye + 0.5 - e, me = W + 0.5 - t, ie = Math.max(Math.abs(Se) - N, 0), de = Math.hypot(ie, me) / t;
      if (de >= 1) continue;
      const ue = de <= $ ? 1 : Math.max(0, (1 - de) / Math.max(1e-4, 1 - $)), B = 1 - de, he = 1 + m * (1 - B) * (1 - B), ne = 1 - S * B * B, T = he * ne / V;
      let G = 1;
      if (g > 0) {
        const P = Math.floor((me + t) / 1.5), I = Math.floor((Se + e) / 8), w = ti(Oi(P * 41 + 500, I * 19 + 300));
        G = 1 - g * 0.42 * w;
      }
      const A = Math.round(255 * Math.min(1, d * ue * T * G));
      if (A <= 0) continue;
      const pe = (W * u + ye) * 4;
      D[pe] = a, D[pe + 1] = l, D[pe + 2] = c, D[pe + 3] = A;
    }
  return K.putImageData(H, 0, 0), Nt.set(b, y), y;
}
function Oi(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function ti(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function XS(e, t, n, r, i, o, s) {
  const a = e + 0.5 - n, l = t + 0.5 - r, c = Math.max(0, n - r), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / r;
  if (u >= 1) return 0;
  const f = ti(Oi(e * 17 + 3, t * 13 + 7)), m = u + o * 0.22 * (f - 0.5);
  if (m >= 1) return 0;
  const S = m <= i ? 1 : Math.max(0, (1 - m) / Math.max(1e-4, 1 - i)), g = JS(e, t, a, l, n, r), b = o * 0.55;
  if (g < b) return 0;
  const K = 0.45 + 0.55 * ((g - b) / Math.max(1e-4, 1 - b));
  return Math.round(255 * Math.min(1, s * S * K));
}
function JS(e, t, n, r, i, o) {
  const s = Math.floor((n + i) / 3), a = Math.floor((r + o) / 2), l = ti(Oi(s * 13 + 700, a * 17 + 400)), c = Math.floor((n + i) / 1.5), d = Math.floor((r + o) / 1.5), u = ti(Oi(c * 23 + 800, d * 29 + 500)), f = ti(Oi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function ZS(e, t, n, r, i) {
  const { r: o, g: s, b: a, a: l } = r, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${n.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (Nt.has(f)) {
    const K = Nt.get(f);
    return Nt.delete(f), Nt.set(f, K), K;
  }
  Nt.size >= Fu && Nt.delete(Nt.keys().next().value);
  const m = Ou(c, d), S = m.getContext("2d"), g = S.createImageData(c, d), b = g.data, y = Math.max(0, Math.min(1, n));
  for (let K = 0; K < d; K++)
    for (let H = 0; H < c; H++) {
      const D = XS(H, K, e, t, y, u, l);
      if (D <= 0) continue;
      const N = (K * c + H) * 4;
      b[N] = o, b[N + 1] = s, b[N + 2] = a, b[N + 3] = D;
    }
  return S.putImageData(g, 0, 0), Nt.set(f, m), m;
}
function Eh(e, t, n) {
  var g, b;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = US(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = QS(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = BS(t, i), d = String(((b = t == null ? void 0 : t.targetSpace) == null ? void 0 : b.viewMode) || ""), u = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, m = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const y = i * a, K = i, H = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), N = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = qS(y, K, o, s, H, D, N);
  } else if (r === "crayon") {
    const y = i * a, K = i, H = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = ZS(y, K, o, s, H);
  } else
    S = YS(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: S, radiusPx: i, spacingPx: c, desc: n, aspect: a, angle: l, stampKind: r, scatter: m, latitudeCorrection: u };
}
function QS(e) {
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
function e_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function Ef(e, t, n, r, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  a(t, n);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, n), t + l > s && a(t - s, n);
}
function Tu(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = Oi(t, n);
    for (let m = 0; m < d; m++) {
      const S = ti(f + m * 2) * Math.PI * 2, g = Math.sqrt(ti(f + m * 2 + 1)) * u, b = t + Math.cos(S) * g, y = n + Math.sin(S) * g, K = Math.max(0.5, e.radiusPx * i * 0.48), H = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(H)) : 1, N = K * e.aspect * D;
      Ef(e, b, y, K, N);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Ef(e, t, n, o, l);
}
function Of(e, t, n) {
  const r = WS(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, s = Eh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < r.length; f++) {
    let m = Number(r[f].u || 0) * i;
    const S = Number(r[f].v || 0) * o;
    f > 0 && Math.abs(m - a[f - 1].x) > i * 0.5 && (m += m < a[f - 1].x ? i : -i), a.push({ x: m, y: S });
  }
  if (Tu(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const m = a[f], S = { x: (c.x + m.x) * 0.5, y: (c.y + m.y) * 0.5 };
    f === 1 ? u = $o(s, d.x, d.y, S.x, S.y, u) : u = pa(s, l, d, S, m, u), l = c, c = m, d = S;
  }
  a.length === 2 ? $o(s, d.x, d.y, c.x, c.y, u) : pa(s, l, d, c, c, u), e.restore();
}
function Ds(e, t, n) {
  var u;
  const r = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, s = e_(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < r.length; f++) {
    const m = KS(r[f]);
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
function vs(e, t, n) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    Ds(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Of(e, t, n) : (Qi = Pr(Qi, n.width, n.height), Tt(Qi), Of(Qi.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Qi.canvas, 0, 0), e.restore());
}
function Gr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function $o(e, t, n, r, i, o) {
  const s = r - t, a = i - n, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Tu(e, t + s * d, n + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function pa(e, t, n, r, i, o) {
  const a = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, d = 0, u = a, f = u + l, m = f + c, S = f - u, g = 16;
  let b = o, y = n.x, K = n.y;
  for (let H = 1; H <= g; H++) {
    const D = u + S * H / g, N = ((u - D) * t.x + (D - d) * n.x) / (u - d), $ = ((u - D) * t.y + (D - d) * n.y) / (u - d), V = ((f - D) * n.x + (D - u) * r.x) / (f - u), W = ((f - D) * n.y + (D - u) * r.y) / (f - u), ye = ((m - D) * r.x + (D - f) * i.x) / (m - f), Se = ((m - D) * r.y + (D - f) * i.y) / (m - f), me = ((f - D) * N + (D - d) * V) / (f - d), ie = ((f - D) * $ + (D - d) * W) / (f - d), ke = ((m - D) * V + (D - u) * ye) / (m - u), de = ((m - D) * W + (D - u) * Se) / (m - u), ue = ((f - D) * me + (D - u) * ke) / (f - u), B = ((f - D) * ie + (D - u) * de) / (f - u);
    b = $o(e, y, K, ue, B, b), y = ue, K = B;
  }
  return b;
}
function t_(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = n * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const m = Eh(i, r, o), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), g = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), b = String((r == null ? void 0 : r.toolKind) || "") === "eraser", y = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Tu(m, c, a, 1), e.activeStroke = {
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
      isEraser: b,
      layerKind: y,
      pointCount: 1
    }, Wt(e);
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
  l.pointCount === 1 ? l.distSinceStamp = $o(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = pa(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, Wt(e);
}
function Xa(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), o = wi(t, n), s = {
    descriptor: r,
    committedMask: wi(t, n),
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
    committedPaint: wi(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = wi(t, n);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let m = null;
  function S(ie) {
    return {
      actionGroupId: ie,
      descriptor: r,
      committedPaint: wi(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(ie) {
    let ke = i.get(ie);
    return ke || (ke = S(ie), i.set(ie, ke)), ke;
  }
  function b(ie) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function y(ie) {
    var ne;
    const ke = !u || u.length !== ie.length || ie.some((T, G) => T !== u[G]), de = d === "paint" && ((ne = c ? i.get(c) : a) == null ? void 0 : ne.activeStroke) || null;
    let ue = s.displayDirty || a.displayDirty || ke;
    for (const T of ie) {
      const G = i.get(T);
      if (G != null && G.displayDirty) {
        ue = !0;
        break;
      }
    }
    if (de && (ue = !0), !ue) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const T of ie) {
      const G = i.get(T);
      G && (G.displayDirty = !1);
    }
    u = [...ie];
    const B = l.ctx;
    Tt(l);
    const he = !!(de != null && de.isEraser);
    for (const T of ie) {
      const G = i.get(T);
      if (!G) continue;
      const pe = c === G.actionGroupId && d === "paint" ? G.activeStroke : null;
      if (he)
        Ft = Pr(Ft, t, n), Tt(Ft), Ft.ctx.drawImage(G.committedPaint.canvas, 0, 0), Gr(Ft.ctx, o.canvas), B.drawImage(Ft.canvas, 0, 0);
      else if (B.drawImage(G.committedPaint.canvas, 0, 0), pe) {
        const P = G.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, pe.strokeOpacity ?? 1));
        B.save(), B.globalAlpha = P, B.drawImage(o.canvas, 0, 0), B.restore();
      }
    }
  }
  function K(ie) {
    var de, ue, B, he, ne;
    for (const T of i.values())
      Tt(T.committedPaint), Tt(T.currentStroke), T.activeStroke = null, Wt(T);
    Tt(s.committedMask), Tt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), Wt(s), Wt(a), u = null;
    const ke = [
      ...Array.isArray((ue = (de = ie == null ? void 0 : ie.painting) == null ? void 0 : de.paint) == null ? void 0 : ue.strokes) ? ie.painting.paint.strokes : [],
      ...Array.isArray((he = (B = ie == null ? void 0 : ie.painting) == null ? void 0 : B.mask) == null ? void 0 : he.strokes) ? ie.painting.mask.strokes : []
    ];
    for (const T of ke) {
      if (((ne = T == null ? void 0 : T.targetSpace) == null ? void 0 : ne.kind) !== "ERP_GLOBAL") continue;
      const G = String((T == null ? void 0 : T.layerKind) || "paint"), pe = String((T == null ? void 0 : T.toolKind) || "pen") === "eraser";
      if (G === "mask") {
        const P = s.descriptor;
        pe ? (Ft = Pr(Ft, P.width, P.height), Tt(Ft), vs(Ft.ctx, T, P), Gr(s.committedMask.ctx, Ft.canvas)) : (vs(s.committedMask.ctx, T, P), s.painted = !0);
        continue;
      }
      if (pe) {
        Ft = Pr(Ft, r.width, r.height), Tt(Ft), vs(Ft.ctx, T, r);
        for (const P of i.values())
          Gr(P.committedPaint.ctx, Ft.canvas), Wt(P);
      } else {
        const P = String((T == null ? void 0 : T.actionGroupId) || "__default__"), I = g(P), w = I.descriptor;
        vs(I.committedPaint.ctx, T, w), Wt(I);
      }
    }
    y([...i.keys()]);
  }
  function H(ie, ke) {
    d = String((ie == null ? void 0 : ie.layerKind) || "");
    const de = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Tt(s.currentStroke), s.activeStroke = null, Wt(s);
    else {
      const ue = de ? a : g(String((ie == null ? void 0 : ie.actionGroupId) || "__default__"));
      c = de ? "" : String((ie == null ? void 0 : ie.actionGroupId) || "__default__"), Tt(ue.currentStroke), ue.activeStroke = null, Wt(ue);
    }
  }
  function D(ie, ke) {
    var G;
    const de = String((ie == null ? void 0 : ie.layerKind) || "paint"), ue = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", B = de === "mask" ? s : ue ? a : g(String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__")), he = B.activeStroke, ne = B.descriptor;
    if (he && he.pointCount > 1) {
      const A = B.currentStroke.ctx;
      A.globalCompositeOperation = "source-over";
      const pe = {
        ctx: A,
        stampTex: he.stampTex,
        radiusPx: he.radiusPx,
        spacingPx: he.spacingPx,
        desc: ne,
        aspect: he.aspect,
        angle: he.angle,
        stampKind: he.stampKind,
        scatter: he.scatter,
        latitudeCorrection: he.latitudeCorrection
      };
      he.pointCount === 2 ? $o(pe, he.lastMidX, he.lastMidY, he.prev.x, he.prev.y, he.distSinceStamp) : pa(pe, he.pprev, { x: he.lastMidX, y: he.lastMidY }, he.prev, he.prev, he.distSinceStamp);
    }
    B.lassoPreviewActive && (Tt(B.currentStroke), Ds(B.currentStroke.ctx, ie, ne), B.lassoPreviewActive = !1);
    const T = de === "mask" ? s.committedMask : B.committedPaint;
    if (ue && de === "paint")
      for (const A of i.values())
        Gr(A.committedPaint.ctx, B.currentStroke.canvas), Wt(A);
    else if (ue)
      Gr(T.ctx, B.currentStroke.canvas);
    else {
      de === "mask" && (s.painted = !0);
      const A = Math.max(0, Math.min(1, (he == null ? void 0 : he.strokeOpacity) ?? 1));
      T.ctx.save(), T.ctx.globalAlpha = A, T.ctx.drawImage(B.currentStroke.canvas, 0, 0), T.ctx.restore();
    }
    HS() && (String((ie == null ? void 0 : ie.toolKind) || ""), String((ne == null ? void 0 : ne.kind) || ""), Number((ne == null ? void 0 : ne.width) || 0), Number((ne == null ? void 0 : ne.height) || 0), String(((G = ie == null ? void 0 : ie.targetSpace) == null ? void 0 : G.viewMode) || ""), Number((ie == null ? void 0 : ie.aspect) ?? 1), Af(B.currentStroke.canvas), Af(T.canvas), void 0), Tt(B.currentStroke), B.activeStroke = null, Wt(B), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function N(ie) {
    if (d === "mask")
      Tt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, Wt(s);
    else if (d === "paint" && !c)
      Tt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, Wt(a);
    else if (c) {
      const ke = i.get(c);
      ke && (Tt(ke.currentStroke), ke.activeStroke = null, ke.lassoPreviewActive = !1, Wt(ke));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function $(ie, ke) {
    var ue;
    if (d = String((ie == null ? void 0 : ie.layerKind) || ""), String(((ue = ie == null ? void 0 : ie.geometry) == null ? void 0 : ue.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Tt(s.currentStroke), Ds(s.currentStroke.ctx, ie, s.descriptor), s.lassoPreviewActive = !0, Wt(s);
      else {
        const B = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", he = B ? a : g(String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__"));
        c = B ? "" : String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__"), Tt(he.currentStroke), Ds(he.currentStroke.ctx, ie, he.descriptor), he.lassoPreviewActive = !0, Wt(he);
      }
      y([...i.keys()]);
    }
  }
  function V(ie) {
    return y(ie ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: r
    };
  }
  function W(ie) {
    return i.get(String(ie)) ?? null;
  }
  function ye(ie) {
    var A;
    const ke = i.get(String(ie));
    if (!ke) return null;
    const de = d === "paint" && c === ke.actionGroupId, ue = d === "paint" && ((A = c ? i.get(c) : a) == null ? void 0 : A.activeStroke) || null, B = !!(ue != null && ue.isEraser), he = de ? ke.activeStroke : null;
    if (!B && !he) return ke.committedPaint.canvas;
    const ne = `${ke.revision}:${a.revision}:${B}`, T = f.get(ke.actionGroupId);
    if ((T == null ? void 0 : T.key) === ne) return T.surface.canvas;
    const G = Pr((T == null ? void 0 : T.surface) ?? null, t, n);
    return Tt(G), G.ctx.drawImage(ke.committedPaint.canvas, 0, 0), B ? Gr(G.ctx, o.canvas) : (G.ctx.save(), G.ctx.globalAlpha = ke.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, he.strokeOpacity ?? 1)), G.ctx.drawImage(o.canvas, 0, 0), G.ctx.restore()), f.set(ke.actionGroupId, { key: ne, surface: G }), G.canvas;
  }
  function Se() {
    const ie = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!ie || ie.isEraser) ? null : `${s.revision}:${!!ie}`;
  }
  function me() {
    const ie = Se();
    if (ie === null)
      return m = null, null;
    if ((m == null ? void 0 : m.key) === ie) return m.surface.canvas;
    const ke = Pr((m == null ? void 0 : m.surface) ?? null, t, n);
    Tt(ke);
    const de = d === "mask" ? s.activeStroke : null;
    return de != null && de.isEraser ? (Ft = Pr(Ft, t, n), Tt(Ft), Ft.ctx.drawImage(s.committedMask.canvas, 0, 0), Gr(Ft.ctx, o.canvas), Ol(ke.ctx, Ft.canvas)) : (Ol(ke.ctx, s.committedMask.canvas), de && Ol(ke.ctx, o.canvas)), m = { key: ie, surface: ke }, ke.canvas;
  }
  return {
    rebuildCommitted: K,
    beginStroke: H,
    appendStrokePoint: t_,
    updateActiveStroke: $,
    commitActiveStroke: D,
    cancelActiveStroke: N,
    getErpTarget: V,
    ensureTarget: b,
    getGroupTarget: W,
    getGroupDisplayCanvas: ye,
    getMaskDisplayCanvas: me,
    getMaskDisplayRevision: Se
  };
}
function Du(e, { group: t, raster: n, mask: r = () => null }) {
  if (e.painting_visible === !1) return [];
  const { groups: i, paint: o, raster_objects: s } = e.painting, a = new Set(i.map(Fl)), l = [
    ...i.map((m) => ({ id: `paint_group:${Fl(m)}`, zIndex: Tl(m), shown: () => t(Fl(m)) })),
    ...s.filter((m) => m.layerKind === "paint").map((m) => ({ id: `raster:${m.id}`, zIndex: Tl(m), shown: () => n(m) }))
  ].sort((m, S) => m.zIndex - S.zIndex), c = [], d = (m, S, g) => {
    g && c.push({ id: m, media: g.media, revision: g.revision, opacity: 1, zIndex: S });
  };
  for (const m of l) d(m.id, m.zIndex, m.shown());
  const u = Math.max(-1, ...c.map((m) => m.zIndex), ...e.stickers.map(Tl)) + 1, f = new Set(o.strokes.map((m) => m.actionGroupId).filter((m) => !a.has(m)));
  for (const m of f) d(`paint_group:${m}`, u, t(m));
  return d("mask_display", u, r()), c;
}
function Oh(e) {
  const t = (e == null ? void 0 : e.getMaskDisplayCanvas()) ?? null;
  return t && { media: t, revision: `mask_display:${e.getMaskDisplayRevision()}` };
}
function Fl(e) {
  return String(e.actionGroupId || e.id || "");
}
function Tl(e) {
  return Math.trunc(Number(e.z_index) || 0);
}
function Mn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function n_(e, t = 1024) {
  const n = Math.max(1, Math.round(Mn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Mn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function r_(e, t, n) {
  const r = Mn(t), i = Mn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || i < 1) return null;
  const s = Mn(o.u0), a = Mn(o.v0), l = Mn(o.u1), c = Mn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Mn(d.du)) * r,
    centerY: ((a + c) * 0.5 + Mn(d.dv)) * i,
    width: (l - s) * r,
    height: (c - a) * i,
    rotationRad: Mn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Mn(d.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function i_(e, t, n) {
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
function o_() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = r_(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = i_(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, m = t.get(f);
    if ((m == null ? void 0 : m.revision) === u) return { source: m.source, revision: u };
    const S = r(c, l), g = Number(S.naturalWidth || S.width || 0), b = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || g < 1 || b < 1) return null;
    const y = zt({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const K = y.getContext("2d");
    return K ? (d.wrapOffsets.forEach((H) => {
      K.save(), K.translate(d.centerX + H, d.centerY), K.rotate(d.rotationRad), K.scale(d.scale, d.scale), K.drawImage(
        S,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), K.restore();
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
function s_(e, t, n = Xa) {
  var l;
  const r = { ...t, painting: a_(e, t.painting) }, i = n_(t.output_preset), o = [];
  let s = null;
  const a = Du(r, {
    group: (c) => {
      s ?? (s = l_(e, r, n));
      const d = s == null ? void 0 : s.getGroupDisplayCanvas(c);
      return d && { media: d, revision: `${e.paintRevisionKey}:${c}` };
    },
    raster: (c) => {
      e.rasterCache ?? (e.rasterCache = o_()), e.rasterReady ?? (e.rasterReady = () => {
        var u, f;
        return (f = (u = e.dom) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
      }), o.push(c.id);
      const d = e.rasterCache.get(c, i.width, i.height, e.rasterReady);
      return d && { media: d.source, revision: d.revision };
    }
  });
  return (l = e.rasterCache) == null || l.retain(o), a;
}
function a_(e, t) {
  return (!e.paintState || e.paintState.painting !== t) && (e.paintState = { painting: t, normalized: li(t) }), e.paintState.normalized;
}
function l_(e, t, n) {
  const { painting: r } = t;
  if (!r.paint.strokes.length && !r.mask.strokes.length) return null;
  const i = Math.max(1, Number(t.output_preset || 2048)), o = { kind: "ERP_GLOBAL", width: i, height: Math.max(1, Math.round(i * 0.5)) }, s = `${o.width}x${o.height}`;
  return (!e.paintEngine || e.paintDescriptorKey !== s) && (e.paintEngine = n(o), e.paintDescriptorKey = s, e.paintRevision = null), e.paintRevision !== r && (e.paintRevision = r, e.paintRevisionKey = String((Number(e.paintRevisionKey) || 0) + 1), e.paintEngine.rebuildCommitted(t)), e.paintEngine;
}
const Dl = 0.15, c_ = 0.01, u_ = 1e-3, d_ = 0.05, f_ = 4, Ff = 250, p_ = 16, Hn = 1, m_ = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function kn(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function er(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Ja(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function di(e, t, n = 0) {
  const r = sn(e, t, n), i = er(r, 2);
  return { right: er(r, 0), up: er(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function h_(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function Sc(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function g_(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Sc(e, "3dof", n);
}
function y_(e) {
  return di(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function b_(e) {
  return kn(e.position, di(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function $r(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ko(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ru(e, t) {
  return ko($r(t, e.position), di(e.yaw_deg, e.pitch_deg).forward);
}
function Lu(e) {
  return Math.max(e, 1e-6) * d_;
}
function _c(e, t, n = null, r = Hn) {
  if (t) return t;
  const i = Lu(r);
  if (n && Ru(e, n) > 0) {
    const o = $r(n, e.position), s = Math.hypot(...o);
    return s >= i ? n : kn(e.position, o, i / s);
  }
  return kn(e.position, di(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Fh(e, t = Hn) {
  return Math.max(e.distance, Lu(t));
}
function Th(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > f_ ? !1 : t.time - e.time < Ff || e.cost > p_ && t.time - e.wheelTime < Ff;
}
function Vu(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * ut);
  return { tanX: r, tanY: r * n / t };
}
function Dh(e, t, n, r, i = b_(e)) {
  const o = e.roll_deg ?? 0, [s, a] = v_(t, n, o), l = Et(e.yaw_deg + s / r * 360), c = Fe(e.pitch_deg - a / r * 360, -89.9, 89.9), d = sn(e.yaw_deg, e.pitch_deg, o), u = sn(l, c, o), f = $r(e.position, i), m = [0, 1, 2].map((g) => ko(er(d, g), f)), S = { ...e, yaw_deg: l, pitch_deg: c, position: kn(i, Ja(u, m)) };
  return { ...S, distance: Ru(S, i) };
}
function v_(e, t, n) {
  const r = Math.cos(n * ut), i = Math.sin(n * ut);
  return [e * r + t * i, t * r - e * i];
}
function Rh(e, t, n, r, i, o = e.distance) {
  const { right: s, up: a } = y_(e), l = 2 * o * Vu(e, r, i).tanY / i;
  return { ...e, position: kn(kn(e.position, s, -t * l), a, n * l), distance: o };
}
function Lh(e, t, n, r = Hn) {
  const i = $r(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const s = Math.max(r, 1e-6), a = s * c_, l = n > 0 ? Math.min(Math.max(o * Dl, a), o - s * u_) : -Math.max(o * Dl / (1 - Dl), a);
  if (n > 0 && l <= 0) return e;
  const c = { ...e, position: kn(e.position, i, l / o) };
  return { ...c, distance: Math.max(Ru(c, t), Lu(r)) };
}
function S_(e, t, n, r) {
  const { tanX: i, tanY: o } = Vu(e, n, r), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = di(e.yaw_deg, e.pitch_deg);
  return { ...e, position: kn(t.center, l, -a), distance: a };
}
function $u(e, t, n, r = null) {
  return Vh({
    quaternion: Dr(sn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Vu(e, t, n).tanY) * $t,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Vh(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: Hn }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: a * 2
  };
}
function zo(e, t, n, r) {
  const { right: i, up: o, forward: s } = $h(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * ut), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: n * 0.5 * (1 + u / l / d), y: r * 0.5 * (1 - f / l / c), z: l };
}
function $h(e) {
  const t = To(e.quaternion), n = er(t, 2);
  return { right: er(t, 0), up: er(t, 1), forward: n.map((r) => -r) };
}
function ma(e, t, n) {
  var i;
  const r = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((o) => o ? n(o) : null) };
}
function __({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function zu(e, t) {
  if (!e || !t.active) return null;
  const n = w_(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: wc(t),
    itemQuaternion: e.kind === "splat" ? m_ : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function zh(e, t, n) {
  const r = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], s = zu(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function jh(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function w_(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function wc(e) {
  return {
    position: [...e.position],
    quaternion: Dr(sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function kc(e, t) {
  return kn(e.position, Ja(sn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Rs(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function xc({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function Mc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), r = t.map((o, s) => (o + n[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function k_(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...xc(t).map((o) => kc(e.scene, o)));
  for (const o of n) i.push(...ju(o));
  for (const { box: o, value: s } of r) i.push(...xc(o).map((a) => kc(s, a)));
  return i;
}
function x_(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: Dr(sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: sn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function ju(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => kn(e.position, Ja(e.rotation, [r, i, 0])));
}
function M_(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? Mc(ju(i)) : o != null && o.box ? Mc(xc(Rs(o.kind, o.box)).map((s) => kc(r, s))) : { center: [...r.position], radius: r.scale };
}
const P_ = 2, N_ = 0.5, A_ = 30;
function Hh(e, t) {
  const n = $r(t, e), r = Math.atan2(n[0], -n[2]) * $t, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * $t;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function C_(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * N_ : P_, o = t ? [...t] : kn(e.position, di(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...$r(o, e.position)), a = s > 0 ? Hh(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(A_ * 0.5 * ut);
  return { position: o, rotation: a, scale: l };
}
function Tf(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function I_(e) {
  return [0, 1, 2].map((t) => er(e, t));
}
function Df(e, t, n, r) {
  if (e === "translate") return { position: kn(t.position, $r(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * D_(n.scale, r.scale) / n.scale };
  const i = Tf(To(r.quaternion), I_(To(n.quaternion))), o = Tf(i, sn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = Wm(o);
  return Math.abs(a) <= E_ ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: O_(o, t.yaw_deg) } };
}
const E_ = 89.9;
function O_(e, t) {
  const n = er(e, 0), r = er(e, 1), i = Math.cos(t * ut), o = Math.sin(t * ut);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * $t + 0;
}
const F_ = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function T_(e, t, n, r, i) {
  if (!zo(e, t, r, i)) return null;
  const { right: o, up: s, forward: a } = $h(e), l = $r(t, e.position), c = ko(l, o), d = ko(l, s), u = ko(l, a), f = Math.tan(e.fovY_deg * 0.5 * ut), m = f * e.aspect, S = Math.hypot(c, d, u) * F_[n] * Math.min(1.9 * f, 7) / 4;
  if (!(u > S)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const g = (D) => {
    const N = S * Math.sqrt(D * D + u * u - S * S);
    return [(D * u - N) / (u * u - S * S), (D * u + N) / (u * u - S * S)];
  }, [b, y] = g(c), [K, H] = g(d);
  return {
    minX: r * 0.5 * (1 + b / m),
    maxX: r * 0.5 * (1 + y / m),
    minY: i * 0.5 * (1 - H / f),
    maxY: i * 0.5 * (1 - K / f)
  };
}
function D_(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function R_(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Gh(e, t) {
  const n = sn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * ut) * t, i = r / e.aspect, o = (c, d, u) => kn(e.position, Ja(n, [c, d, u])), s = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function L_(e, t, n, r, i, o = 6) {
  return t.some(([s, a]) => {
    const l = zo(e, s, r, i), c = zo(e, a, r, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Fe(((n.x - l.x) * d + (n.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - n.x, l.y + u * f - n.y) <= o;
  });
}
function V_(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function $_(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Ct(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Ct(r, "position", l);
  });
}
function z_(e, t, n, r, i) {
  const o = Math.max(0, e) * n, s = Math.max(0, t) * n, a = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const Kh = 0.28;
function Wh(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * ut);
  return {
    quaternion: Dr(sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * $t,
    aspect: r
  };
}
function xo(e) {
  const t = Tr(e);
  return {
    quaternion: Dr(sn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Uh(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = yu(n, r), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * $t,
      vFOV_deg: 2 * Math.atan(o / r) * $t
    }
  };
}
function Bh(e, t, n) {
  const [[r, i, o], [s, a, l], [c, d, u]] = To(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * ut), m = f * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, g = 1e-4) {
      const b = h1(S), y = r * b.x + s * b.y + c * b.z, K = i * b.x + a * b.y + d * b.z, H = -(o * b.x + l * b.y + u * b.z), D = Math.max(H, g);
      return {
        x: t * 0.5 * (1 + y / D / m),
        y: n * 0.5 * (1 - K / D / f),
        z: H
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, g) {
      const b = (S / t * 2 - 1) * m, y = (1 - g / n * 2) * f;
      return mu(Os({
        x: r * b + i * y - o,
        y: s * b + a * y - l,
        z: c * b + d * y - u
      }));
    }
  };
}
function Yh(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = es(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = n(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * ut), m = Math.tan(xh(a, c, Xh(u.media)) * 0.5 * ut), { crop: S } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Kh : c.opacity,
      zIndex: r(a),
      quaternion: Dr(sn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
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
function qh(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return Yh(e, t, {
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
function Xh(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Jh(e, t, n, { media: r, evaluated: i = es(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? r(d) : null;
    if (!u) return;
    const { width: f, height: m } = Xh(u.media), S = x_(c, a.crop, f, m);
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
function j_({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BLWoTAPg.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Lm(a.createThreeView({ onUpdate: r, onSplats: i, createCanvas: () => e }), "editor");
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
    resize(g, b) {
      return l && !f.lost ? l.resize(g, b) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(g, b) {
      l && !f.lost && l.clear(g, b);
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
    pick(g, b, y, K, H) {
      return l && !f.lost ? l.pick(g, b, y, K, H) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, b, y, K, H) {
      return l && !f.lost ? l.pickSurface(g, b, y, K, H) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, b, y, K, H) {
      return l && !f.lost ? l.pickSticker(g, b, y, K, H) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, b, y, K, H, D) {
      return l && !f.lost ? l.gizmoPointer(g, b, y, K, H, D) : null;
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
const Zh = "3D view unavailable. Check the browser console.";
function ha(e, t, n) {
  return Wh({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function H_(e) {
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
const Qh = H_(
  () => import("./.lazy/pano_three_view-BLWoTAPg.js").then((e) => e.$).then((e) => Lm(e.createThreeView({ createCanvas: () => zt({ label: "three.node" }) }), "node"))
), In = ["erp_image", "bg_erp", "bg_media"], Hu = ["sticker_image", "sticker"], eg = ["scene"], Gu = ["sticker", "sticker_state"], G_ = {
  background: In,
  "external-sticker": Hu,
  scene: eg,
  "sticker-handoff": Gu
};
function tg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Fi(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = tg(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function Mo(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Rf(e, t) {
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
function ng(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((a) => String(a == null ? void 0 : a.id) === n[o]);
    if (!s || o === n.length - 1) return { graph: r, entry: s };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function K_(e, t) {
  const { graph: n, entry: r } = ng(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const a = tg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const rg = [...In, ...Hu, ...eg, ...Gu], W_ = 256, ki = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new WeakMap();
let ig = () => null;
function og(e) {
  return Rl.has(e) || Rl.set(e, JSON.stringify(e)), Rl.get(e);
}
function U_(e) {
  ig = e;
}
function ga(e, t) {
  const n = og(e);
  ki.delete(n), ki.set(n, t), ki.size > W_ && ki.delete(ki.keys().next().value);
}
function bt(e, t) {
  var o;
  const n = e ? ig(e) : null;
  if (!n) return !0;
  const r = Fi(e);
  let i = ki.get(og(n));
  if (i)
    ga(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => rg.includes(s == null ? void 0 : s.name)))) return !0;
    ga(n, r), i = r;
  }
  return G_[t].every((s) => i[s] === r[s]);
}
const ya = /* @__PURE__ */ new WeakSet();
async function Pc(e, t) {
  if (ya.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && ya.add(e), n.ok && r !== void 0 ? r : null;
}
function sg(e, t) {
  var o, s, a, l, c;
  const n = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: r } = ng(n, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = r == null ? void 0 : r.inputs) != null && c.some((d) => rg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: K_(n, t) };
}
const Ls = /* @__PURE__ */ new Map();
function B_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Ls.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await Pc(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = sg(i, o);
        s && ga(s.output, s.inputs);
      }
    });
}
const Y_ = 5;
function q_(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Y_}`, r = Pc(e, `/jobs?${n}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, Pc(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: m } of await r) {
        if (!a()) return null;
        const S = await o(m);
        if ((c = S == null ? void 0 : S.outputs) != null && c[l])
          return ((f = (u = (d = S.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : sg(S, l);
      }
      return null;
    }
  };
}
function X_(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let yi = null;
async function J_(e, t, n) {
  var a;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || ya.has(n) || (a = Ls.get(i)) != null && a.has(r) || X_(t)) return null;
  (yi == null ? void 0 : yi.workflowId) !== i && (yi = { workflowId: i, history: q_(n, i) }, queueMicrotask(() => {
    yi = null;
  }));
  const s = await yi.history.lastNodeOutput(e, o);
  return o() ? s ? (ga(s.output, s.inputs), t.nodeOutputs[r] = s.output, s.output) : (ya.has(n) || Ls.set(i, (Ls.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Lf(e, t, n, r = In) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((s == null ? void 0 : s.name) || ""));
}
const Vf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Vs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Vf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Vf.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ll = /* @__PURE__ */ new WeakMap();
function Z_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Nc(e) {
  return Z_(e) ? (Ll.has(e) || Ll.set(e, Math.random().toString(36).slice(2, 10)), Ll.get(e)) : "run";
}
function ag(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Q_(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = n(o, a);
      (l == null ? void 0 : l.id) == null || r.has(String(l.id)) || (r.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), r;
}
function Ku(e, t = [], n = null) {
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
function ew({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = Zo(e, "looping-preview");
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
  }, b = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var K, H;
      o || (o = !0, s && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(s), s = 0), r.removeEventListener("loadedmetadata", c), r.removeEventListener("loadeddata", c), r.removeEventListener("timeupdate", d), r.removeEventListener("play", u), r.removeEventListener("pause", f), r.removeEventListener("error", S), r.pause(), (K = r.removeAttribute) == null || K.call(r, "src"), (H = r.load) == null || H.call(r));
    },
    failed: () => m,
    play: g,
    pause: b,
    toggle() {
      r.paused ? g() : b();
    },
    get playing() {
      return !o && !r.paused && !r.ended;
    }
  };
}
const jo = /* @__PURE__ */ new WeakMap(), lg = {
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
function ns(e, t) {
  if (!e || typeof e != "object") return null;
  let n = jo.get(e);
  return n || (n = {}, jo.set(e, n)), n[t] ?? (n[t] = lg[t]());
}
function rs(e, t) {
  var n;
  return e && typeof e == "object" && ((n = jo.get(e)) == null ? void 0 : n[t]) || null;
}
const Ho = (e) => ns(e, "editorSession"), lt = (e) => ns(e, "nodeSurface"), pr = (e) => ns(e, "previewNode"), ln = (e) => ns(e, "mediaCache"), wn = (e) => ns(e, "stateSync"), tw = (e) => rs(e, "editorSession"), Ac = (e) => rs(e, "nodeSurface"), cg = (e) => rs(e, "previewNode"), Vl = (e) => {
  var t;
  return ((t = rs(e, "editorSession")) == null ? void 0 : t.open) === !0;
};
function $l(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const nw = {
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
      $l(o == null ? void 0 : o.img), $l(o == null ? void 0 : o.pendingImg);
    }), (r = (n = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : n.destroy) == null || r.call(n), $l((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function rw(e, t) {
  const n = rs(e, t);
  if (n)
    try {
      nw[t](n);
    } finally {
      delete jo.get(e)[t];
    }
}
function iw(e) {
  for (const t of Object.keys(lg))
    try {
      rw(e, t);
    } catch (n) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, n);
    }
  e && typeof e == "object" && jo.delete(e);
}
function Kr(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function ow(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function $f(e, t, n = null) {
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
  return !r && n != null && (r = ow(e == null ? void 0 : e.graph, n)), r;
}
function sw(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function aw(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function lw(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function ug({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (N) => {
    if (!N) return "";
    if (typeof N == "string") return String(N || "").trim();
    if (Array.isArray(N)) {
      if (N.length === 0) return "";
      if (N.length === 1) return i(N[0]);
      const $ = String(N[0] || "").trim();
      if ($)
        return Kr(t, {
          filename: $,
          subfolder: String(N[1] || "").trim(),
          type: String(N[2] || "output").trim() || "output"
        });
      for (const V of N) {
        const W = i(V);
        if (W) return W;
      }
      return "";
    }
    return typeof (N == null ? void 0 : N.src) == "string" && N.src ? N.src : typeof (N == null ? void 0 : N.url) == "string" && N.url ? N.url : Kr(t, N);
  }, o = (N) => {
    if (!N || typeof N != "object") return "";
    const $ = String(N.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(N.value || "");
    if ($ !== "comfy_image") return "";
    const V = String(N.filename || "").trim();
    return V ? Kr(t, {
      filename: V,
      subfolder: String(N.subfolder || ""),
      type: String(N.storage || "input")
    }) : "";
  }, s = (N) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || N == null) return null;
    const V = String(N);
    return $ instanceof Map ? $.get(N) || $.get(V) || $.get(Number(V)) || null : $[N] || $[V] || null;
  }, a = (N, $) => {
    var W;
    const V = s(N == null ? void 0 : N.id);
    return Array.isArray((W = V == null ? void 0 : V.ui) == null ? void 0 : W[$]) ? V.ui[$] : Array.isArray(V == null ? void 0 : V[$]) ? V[$] : [];
  }, l = (N, $) => {
    const V = s(N == null ? void 0 : N.id);
    return V != null && V.ui && Object.prototype.hasOwnProperty.call(V.ui, $) ? V.ui[$] : V && Object.prototype.hasOwnProperty.call(V, $) ? V[$] : null;
  }, c = (N, $) => {
    const V = l(N, "pano_sticker_input_state_hash"), W = Array.isArray(V) ? V[0] : V;
    return String(W ?? "").trim() || lw($);
  }, d = (N) => {
    const $ = [], V = /* @__PURE__ */ new Set();
    for (const W of N || []) {
      const ye = i(W);
      !ye || V.has(ye) || (V.add(ye), $.push(ye));
    }
    return $;
  }, u = (N, $) => {
    var ye;
    const V = [];
    Array.isArray(N == null ? void 0 : N.images) && N.images.length && V.push(N.images), Array.isArray((ye = N == null ? void 0 : N.ui) == null ? void 0 : ye.images) && N.ui.images.length && V.push(N.ui.images);
    const W = [];
    for (const Se of V)
      $ >= 0 && $ < Se.length && W.push(Se[$]), W.push(...Se);
    return W;
  }, f = (N, $) => {
    var T;
    const V = String($ || "").trim();
    if (!V) return { src: "", sourceType: "", inputName: "" };
    const ye = (Array.isArray(N == null ? void 0 : N.inputs) ? N.inputs : []).findIndex((G) => String((G == null ? void 0 : G.name) || "") === V);
    if (ye < 0) return { src: "", sourceType: "", inputName: V };
    const Se = N.graph ? N.getInputLink(ye) : null;
    if ((Se == null ? void 0 : Se.origin_id) == null) return { src: "", sourceType: "", inputName: V };
    const me = Se.origin_id, ie = $f(N, ye, me);
    if (!ie) return { src: "", sourceType: "", inputName: V };
    const ke = Number(Se.origin_slot ?? 0);
    let de = [];
    try {
      de = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ie) || [] : [];
    } catch {
      de = [];
    }
    if (Array.isArray(de) && de.length) {
      const G = [];
      ke >= 0 && ke < de.length && G.push(de[ke]), G.push(...de);
      const A = d(G.filter((pe) => !Vs(pe)));
      if (A.length)
        return { src: A[0], srcCandidates: A, sourceType: "appNodeImageUrls", inputName: V };
    }
    const ue = s((ie == null ? void 0 : ie.id) ?? me), B = d(u(ue, ke).filter((G) => !Vs(G))).map((G) => `${G}&pano_src=${Nc(ue)}`);
    if (B.length)
      return { src: B[0], srcCandidates: B, sourceType: "nodeOutputs", inputName: V };
    const he = Array.isArray(ie == null ? void 0 : ie.imgs) ? ie.imgs : [];
    if (he.length) {
      const G = [];
      ke >= 0 && ke < he.length && G.push(he[ke]), G.push(...he);
      const A = d(G);
      if (A.length)
        return { src: A[0], srcCandidates: A, sourceType: "nodeImgs", inputName: V };
    }
    const ne = (T = ie == null ? void 0 : ie.widgets) == null ? void 0 : T.find((G) => String((G == null ? void 0 : G.name) || "").toLowerCase() === "image");
    if (ne) {
      let G = i(ne.value);
      if (G && !G.includes("/") && !G.includes(":") && (ie.comfyClass === "LoadImage" || ie.type === "LoadImage") && (G = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(G)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(G)}&type=input&subfolder=`), G) return { src: G, sourceType: "widget", inputName: V };
    }
    return { src: "", sourceType: "", inputName: V };
  }, m = (N, $ = []) => {
    var W;
    const V = Array.isArray(N == null ? void 0 : N.inputs) ? N.inputs : [];
    for (const ye of $) {
      const Se = V.findIndex((de) => String((de == null ? void 0 : de.name) || "") === ye), me = Se >= 0 && N.graph ? N.getInputLink(Se) : null;
      if ((me == null ? void 0 : me.origin_id) == null) continue;
      const ie = s(((W = $f(N, Se, me.origin_id)) == null ? void 0 : W.id) ?? me.origin_id), ke = (Array.isArray(ie == null ? void 0 : ie.images) ? ie.images : []).find(Vs);
      return ke ? `${Kr(t, ke)}&pano_src=${Nc(ie)}` : "";
    }
    return "";
  }, S = (N, $ = []) => {
    const V = Array.isArray($) ? $ : [$];
    for (const W of V) {
      const ye = f(N, W);
      if (String((ye == null ? void 0 : ye.src) || "").trim()) return ye;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (N) => {
    const $ = String(N || "").trim();
    if (!$) return [];
    if (sw($)) return [$];
    const { filename: V, subfolder: W } = aw($);
    return V ? d([
      Kr(t, { filename: V, subfolder: W, type: "temp" }),
      Kr(t, { filename: V, subfolder: W, type: "output" }),
      Kr(t, { filename: V, subfolder: W, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (N) => {
      var $;
      try {
        ($ = ln(N)) == null || $.linkedImages.forEach((V, W, ye) => {
          var Se;
          V != null && V.img && ((Se = r == null ? void 0 : r.isImageLoadFailed) != null && Se.call(r, V.img)) && ye.delete(W);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (N, $) => {
      var V;
      (V = N == null ? void 0 : N.delete) == null || V.call(N, `__ui__${String($ || "")}`);
    },
    linkedValue: (N, $) => {
      var me, ie, ke, de;
      const V = String($ || ""), W = Array.isArray(N == null ? void 0 : N.inputs) ? N.inputs.findIndex((ue) => String((ue == null ? void 0 : ue.name) || "") === V) : -1, ye = W >= 0 && N.graph ? N.getInputLink(W) : null;
      if (ye) {
        const ue = s(ye.origin_id), B = [
          ue == null ? void 0 : ue.output,
          ue == null ? void 0 : ue.result,
          (me = ue == null ? void 0 : ue.data) == null ? void 0 : me.output,
          (ie = ue == null ? void 0 : ue.data) == null ? void 0 : ie.result,
          (ke = ue == null ? void 0 : ue.ui) == null ? void 0 : ke.output,
          (de = ue == null ? void 0 : ue.ui) == null ? void 0 : de.result
        ];
        for (const he of B) {
          if (!Array.isArray(he)) continue;
          const ne = he[Number(ye.origin_slot || 0)];
          if (typeof ne == "string" && ne.trim()) return ne;
        }
      }
      const Se = Array.isArray(N == null ? void 0 : N.widgets) ? N.widgets.find((ue) => String((ue == null ? void 0 : ue.name) || "") === V) : null;
      return String((Se == null ? void 0 : Se.value) || "");
    },
    linkedVideoFile: m,
    loadPreferredExactLinkedImage: (N, $ = [], V = null, W = "") => {
      var I;
      const ye = Array.isArray($) ? $ : [$], Se = S(N, ye), ie = (Array.isArray(Se == null ? void 0 : Se.srcCandidates) && Se.srcCandidates.length ? Se.srcCandidates : [Se == null ? void 0 : Se.src]).map((w) => String(w || "").trim()).filter(Boolean);
      if (!ie.length) return null;
      const ke = d(ie.flatMap((w) => g(w)));
      if (!ke.length) return null;
      const de = ln(N).linkedImages, ue = String(W || ye.join("|") || "image_exact"), B = ie.join(`
`), he = de.get(ue);
      if (he && he.srcRaw === B && he.img) return he.img;
      const ne = n || globalThis.Image;
      if (typeof ne != "function") return null;
      const T = new ne();
      (I = r == null ? void 0 : r.markImageLoading) == null || I.call(r, T, B);
      const G = { srcRaw: B, resolvedSrc: "", img: T };
      de.set(ue, G);
      let A = -1;
      const pe = (w) => {
        var M, ae, ee;
        w === "ready" ? (M = r == null ? void 0 : r.markImageReady) == null || M.call(r, T, B) : (ae = r == null ? void 0 : r.markImageFailed) == null || ae.call(r, T, B), V == null || V(T), (ee = N.setDirtyCanvas) == null || ee.call(N, !0, !0);
      }, P = () => {
        if (A += 1, A >= ke.length) {
          pe("failed");
          return;
        }
        G.resolvedSrc = ke[A], T.src = G.resolvedSrc;
      };
      return T.onload = () => pe("ready"), T.onerror = () => {
        if (A + 1 < ke.length) {
          P();
          return;
        }
        pe("failed");
      }, P(), T;
    },
    output: s,
    resolvePreferredExactLinkedSource: S,
    source: i,
    uiImage: (N, $, V, W = null) => {
      var ue, B, he;
      const ye = a(N, $)[0] || null, Se = i(ye);
      if (!Se) return null;
      const me = `__ui__${$}`, ie = (ue = V == null ? void 0 : V.get) == null ? void 0 : ue.call(V, me);
      if (ie && ie.__panoSrc === Se) return ie;
      const ke = n || globalThis.Image;
      if (typeof ke != "function") return null;
      const de = new ke();
      return de.__panoSrc = Se, (B = r == null ? void 0 : r.markImageLoading) == null || B.call(r, de, Se), de.onload = () => {
        var ne;
        (ne = r == null ? void 0 : r.markImageReady) == null || ne.call(r, de, Se), W == null || W(de);
      }, de.onerror = () => {
        var ne;
        (ne = r == null ? void 0 : r.markImageFailed) == null || ne.call(r, de, Se), W == null || W(de);
      }, de.src = Se, (he = V == null ? void 0 : V.set) == null || he.call(V, me, de), de;
    },
    uiList: a,
    uiValue: l
  };
}
function dg({
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
const ji = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, cw = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function fg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !ji[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: Rr(t.fps) };
}
function Nr(e) {
  return structuredClone(e);
}
function uw(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function dw(e, t, n) {
  const r = e.fps ?? t;
  if (r === t) return e.lanes;
  const i = n.start - n.in, o = Math.floor(i * r / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / r + 0.5) - i }))
  }]));
}
function Wu(e, t, n) {
  const r = dw(n, e.timeline.fps, t.clip);
  let i;
  if (t.placement === n.placement) {
    i = { ...t };
    for (const o of ji[n.placement]) t.handoff_overrides.includes(o) || (i[o] = r[o]);
  } else
    i = { ...Object.fromEntries(cw.map((o) => [o, t[o]])), placement: n.placement, ...r }, n.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return Nr(an({ version: 2, stickers: [i] }).stickers[0]);
}
function fw(e, t) {
  const n = e.stickers.findIndex((r) => r.source.kind === "port");
  return !t || n < 0 ? e : { ...e, stickers: e.stickers.map((r, i) => i === n ? Wu(e, r, t) : r) };
}
function pw(e, t) {
  const n = ji[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const r = n.filter((i) => !uw(e[i], t[i]));
  if (r.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...r]);
    e.handoff_overrides = [...n, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function mw(e, t) {
  if (!t || t.id !== e.id) return Nr(e);
  if (e.placement === t.placement) {
    const r = Nr(e);
    for (const i of ji[e.placement]) e.handoff_overrides.includes(i) || (r[i] = Nr(t[i]));
    return r;
  }
  if (e.handoff_overrides.some((r) => ji[e.placement].includes(r))) return Nr(e);
  const n = Nr(t);
  for (const r of ["clip", "visible", "locked", "crop", "opacity"]) n[r] = Nr(e[r]);
  return n;
}
function hw(e, t, n, r) {
  return !t.handoff_overrides.includes(r) || t.placement !== n.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== r), t[r] = Nr(Wu(e, t, n)[r]), !0);
}
const $s = "sticker_image_1", pg = "external_image", Hi = 0;
function zs(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function zl(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Or(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Cc(e, t = Hi) {
  return (e == null ? void 0 : e.version) !== 2 ? Or(e) : Or(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: _r(n, t).active,
    external: n.source.kind === "port",
    ...Cu(n, t)
  }));
}
function Uu(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Or(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function mg(e) {
  return String((e == null ? void 0 : e.id) || "") === $s || String((e == null ? void 0 : e.source_kind) || "") === pg;
}
function Bu(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : mg(t);
}
const hg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function gg(e) {
  return !mg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(hg.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function yg(e) {
  const t = gg(e);
  return t ? hg.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function bg(e, t = {}) {
  var D, N, $;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((V) => String((V == null ? void 0 : V.id) || "") === $s);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const V = String(((D = e.active) == null ? void 0 : D.selected_sticker_id) || "") === $s;
    return {
      state: {
        ...e,
        stickers: n.filter((W, ye) => ye !== r),
        active: V ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = r >= 0 ? n[r] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), m = t.pose && typeof t.pose == "object" ? t.pose : {}, S = a ? m.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || m.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(S)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const V = zs(g, u, f), W = Number(((N = s == null ? void 0 : s.initial_pose) == null ? void 0 : N.hFOV_deg) ?? g), ye = zs(W, u, f), Se = Number((($ = s == null ? void 0 : s.initial_pose) == null ? void 0 : $.vFOV_deg) ?? ye);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - V) <= 1e-6 && Math.abs(Se - ye) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((me, ie) => ie === r ? {
          ...me,
          vFOV_deg: V,
          initial_pose: me.initial_pose && typeof me.initial_pose == "object" ? { ...me.initial_pose, vFOV_deg: ye } : me.initial_pose
        } : me)
      },
      changed: !0
    };
  }
  const b = n.reduce((V, W) => Math.max(V, Number((W == null ? void 0 : W.z_index) || 0)), -1), y = {
    yaw_deg: Number(m.yaw_deg || 0),
    pitch_deg: Number(m.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? zs(g, u, f) : Number(m.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(m.rot_deg ?? m.roll_deg ?? 0)
  }, K = {
    ...s || {},
    id: $s,
    source_kind: pg,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: b + 1
  }, H = r >= 0 ? n.map((V, W) => W === r ? K : V) : [...n, K];
  return { state: { ...e, stickers: H }, changed: !0 };
}
function ba(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const gw = ["IMAGE", "VIDEO"];
function zf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => gw.includes(n)) ? "2d" : null;
}
function yw(e, t) {
  var i, o, s, a, l, c;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? zf(r.type) ?? zf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, r.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[r.origin_slot]) == null ? void 0 : c.type) : null;
}
function vg(e, { pose: t = null, handoff: n = null } = {}) {
  return {
    connected: ba(e, "sticker"),
    awaitingPose: !t && (ba(e, "sticker_state") || yw(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!n
  };
}
function Sg(e) {
  return ba(e, "sticker") && ba(e, "sticker_state");
}
function bw(e, t) {
  return Sg(e) ? fg(t) : null;
}
function vw(e, t, n) {
  return fw(kh(e, t), fg(n));
}
function jf(e, t, n = {}) {
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
function _g(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((m) => Bu(e, m)), s = o >= 0 ? e.stickers[o] : null;
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
    const m = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), S = jf(s.id, r, m);
    return { state: { ...e, stickers: e.stickers.map((g, b) => b === o ? S : g) }, changed: !0 };
  }
  if (s || n) return { state: e, changed: !1 };
  const a = { ...e }, l = qa(a);
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, jf(l, r)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), d = Eu(l, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, Or(e).reduce((m, S) => Math.max(m, S.z_index), -1) + 1), u = (r == null ? void 0 : r.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((m) => ({ ...m, value: { ...m.value, vFOV_deg: m.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Yu(e) {
  const t = Or(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: zl(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: zl(o.z_index),
    item: o
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: zl(o.z_index),
    item: o
  }));
  return [...t, ...r, ...i].sort((o, s) => o.z_index - s.z_index);
}
function wg(e) {
  const t = Uu(e), n = Bu(e, t), r = Or(e).some((a) => a && a.visible !== !1), i = Yu(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: yg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function Sw(e) {
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
function Hf(e, t) {
  const n = Uu(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Sw(e), i = String(n.id || ""), o = Yu(r), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: r, changed: !0 };
}
function _w(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function ww(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return bg(e, t.value);
  if (t.type === "sync-port") return _g(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Yu(e).reduce((f, m) => Math.max(f, Number(m.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: zs(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, m = qa(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Eu(m, Ts(i.asset), d, l + 1)],
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
    return !i || !Or(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Uu(e);
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
    const i = gg(n);
    return !i || !yg(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Hf(e, "front");
  if (t.type === "send-back") return Hf(e, "back");
  if (t.type === "delete-selected") {
    if (Bu(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === n ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== n), o = Or({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = _w(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Cu(n, Hi) : n, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = PS(n, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(n);
      return Mh(c, Hi, l), { state: { ...e, stickers: e.stickers.map((d) => d === n ? c : d) }, changed: !0 };
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
function kw(e = {}) {
  return dg({
    ...e,
    reduce: ww,
    projectModel: wg
  });
}
const js = 2;
function Yr(e, t) {
  return Math.floor(e * t + 0.5);
}
function xw(e, t) {
  return Math.floor(e * t + 1e-3);
}
function kg({ video: e, clock: t, fps: n, span: r, loop: i, place: o = () => null, onFrame: s, onCapture: a, onChange: l }) {
  let c = 0, d = !1, u = !1, f = { name: "idle" }, m = [];
  const S = () => d && !u, g = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function b() {
    for (const P of m) P();
    m = [];
  }
  function y(P, I = {}) {
    return b(), f = { name: P, ...I }, l(), f;
  }
  function K(P, I, w) {
    const M = () => {
      f === P && w();
    };
    e.addEventListener(I, M), m.push(() => e.removeEventListener(I, M));
  }
  function H(P, I) {
    let w = t.requestFrame(function M(ae) {
      f === P && (I(ae), f === P && (w = t.requestFrame(M)));
    });
    m.push(() => t.cancelFrame(w));
  }
  function D(P) {
    c = P, s(c);
  }
  function N() {
    return y(u ? "error" : "idle");
  }
  const $ = () => {
    var P;
    return ((P = o()) == null ? void 0 : P.origin) ?? 0;
  }, V = (P) => (P - $()) / n();
  function W(P) {
    const { start: I = 0, end: w = 1 / 0 } = o() ?? {};
    return P >= I && P < w && !(V(P) >= Number(e.duration));
  }
  function ye() {
    u = !0, N();
  }
  function Se() {
    const { seekable: P } = e, I = P != null && P.length ? P.end(P.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(V(c), Number.isFinite(I) ? I : 1 / 0));
  }
  function me(P) {
    if (!S()) return P === "play" ? B() : N();
    if (e.readyState < js && !e.seeking) {
      const I = y("loading", { then: P });
      return K(I, "loadeddata", () => me(I.then)), K(I, "error", ye), I;
    }
    return P === "play" && !W(c) ? B() : o() && !W(c) ? N() : ie(P, !1);
  }
  function ie(P, I) {
    const w = Se(), M = Yr(Number(e.currentTime), n()) === Yr(w, n());
    if (!e.ended && !e.seeking && M) return ke(P);
    const ae = y("seeking", { then: P, target: w, retried: I });
    return K(ae, "seeked", () => {
      const ee = Yr(Number(e.currentTime), n()) === Yr(Se(), n()), R = Se() === ae.target;
      ee || R && ae.retried ? ke(ae.then) : ie(ae.then, R);
    }), K(ae, "error", ye), e.seeking && M || (e.currentTime = w), ae;
  }
  function ke(P) {
    return P === "play" ? de() : (a(), N());
  }
  function de() {
    const P = y("playingVideo", { shown: !1 });
    if (K(P, "pause", () => e.ended ? ue() : T()), K(P, "ended", ue), K(P, "error", ye), i() && !o() && Yr(Number(e.duration), n()) >= r()) {
      const w = e.loop;
      e.loop = !0, m.push(() => {
        e.loop = w;
      });
    }
    const I = (w, M) => {
      M && !P.shown && (P.shown = !0, l()), he(Yr(w + $() / n(), n()));
    };
    if (g()) {
      let w = e.requestVideoFrameCallback(function M(ae, ee) {
        f === P && (I(Number(ee.mediaTime), !0), f === P && (w = e.requestVideoFrameCallback(M)));
      });
      m.push(() => {
        var M;
        return (M = e.cancelVideoFrameCallback) == null ? void 0 : M.call(e, w);
      });
    } else
      H(P, () => I(Number(e.currentTime), e.readyState >= js));
    return Promise.resolve(e.play()).catch(() => {
      f === P && T();
    }), P;
  }
  function ue() {
    a(), B();
  }
  function B() {
    var w;
    const P = y("playingClock", { startTs: t.now(), startFrame: c }), I = ((w = o()) == null ? void 0 : w.start) ?? 0;
    return S() && c < I && e.readyState >= js && (e.currentTime = Math.max(0, V(I))), H(P, (M) => he(P.startFrame + Math.floor(Math.max(0, M - P.startTs) / 1e3 * n()))), P;
  }
  function he(P) {
    if (P < r()) {
      if (o() && f.name === "playingVideo" && !W(P)) {
        b(), e.pause(), D(P), B();
        return;
      }
      const I = o() && f.name === "playingClock" && S() && P > c && !W(c) && W(P);
      D(P), I && me("play");
      return;
    }
    if (!i() || r() <= 1) {
      ne(r() - 1);
      return;
    }
    f.name === "playingVideo" && (b(), e.pause()), D(0), me("play");
  }
  function ne(P) {
    f.name === "playingVideo" ? (b(), e.pause(), D(Math.max(0, P)), a()) : D(Math.max(0, P)), me("still");
  }
  function T() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", l();
    else if (f.name === "playingVideo") {
      b(), e.pause();
      const P = xw(Number(e.currentTime) + $() / n(), n());
      D(Math.min(P, r() - 1)), a(), c === P ? N() : me("still");
    } else f.name === "playingClock" && ne(Math.min(c, r() - 1));
  }
  function G() {
    if (!(pe() || r() <= 1)) {
      if (c >= r() - 1 && D(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", l();
        return;
      }
      me("play");
    }
  }
  function A(P) {
    const I = Math.max(0, Math.min(Math.round(P), r() - 1));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", D(I), l();
      return;
    }
    f.name === "playingVideo" && (b(), e.pause()), D(I), me("still");
  }
  function pe() {
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
      return pe();
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
    stop: T,
    seek: A,
    toggle() {
      pe() ? T() : G();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(P) {
      b(), d = !!P, u = !1, me("still");
    },
    dispose() {
      b(), d = !1, f = { name: "idle" };
    }
  };
}
function qu({ video: e, onCapture: t, onChange: n }) {
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
    if (!r || i || e.readyState < js) return;
    const { time: g, playing: b, fps: y } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (b) {
      if (s !== null) return;
      const K = Number(e.duration), H = Number.isFinite(K) ? Math.min(g, K) : g, D = Math.abs(Number(e.currentTime) - H) > 1.5 / y;
      if (e.ended && !D) return;
      D && d(H), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
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
  for (const [g, b] of Object.entries(m)) e.addEventListener(g, b);
  function S(g) {
    r = g, i = !1, s = null, a = null, l = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: b = null, playing: y = !1, fps: K }) {
      g !== r && (S(g), n()), o = { time: b, playing: y, fps: K }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, b) {
      return !r || i ? b : o.time === null ? null : o.playing && l ? e : a === null ? b : g;
    },
    dispose() {
      for (const [g, b] of Object.entries(m)) e.removeEventListener(g, b);
      S("");
    }
  };
}
function Hs(e, t, n = !1) {
  return !t && !n && e.isConnected && e.clientWidth > 0;
}
function Mw({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const m = /* @__PURE__ */ new Set();
  let S = null, g = null, b = {};
  const y = () => i().timeline.fps, K = (de) => de.stickers.find((ue) => ue.source.kind === "port"), H = () => b.bg !== void 0 ? b.bg : d && f > 0 ? { video: !0, frames: Math.round(f * y()), duration: f } : null, D = () => b.bg === null ? b.upstreamClip ?? { start: 0, in: 0, duration: null } : i().background.clip, N = () => Au(i(), {
    ...b,
    bg: H(),
    port: (S == null ? void 0 : S.meta) ?? b.port ?? null,
    camera: c
  }), $ = kg({
    video: e,
    clock: r,
    fps: y,
    span: N,
    loop: () => !0,
    place: () => {
      const de = D();
      return de ? fh(de) : null;
    },
    onFrame: o,
    onCapture: s,
    onChange: l
  }), V = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, W = () => {
    u && (m.add(u), l());
  }, ye = qu({ video: t, onCapture: a, onChange: l }), Se = Nu({ createImage: n, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", V), e.addEventListener("error", W);
  function me(de) {
    de !== u && (u = de, e.pause(), de ? e.src = de : e.removeAttribute("src"), e.load(), $.setSource(!!de));
  }
  function ie() {
    $.playing && $.stop();
  }
  function ke(de) {
    const ue = K(de);
    g = S && ue ? xu(ue.clip, $.frame, de.timeline.fps, S.meta) : null, ye.follow({
      src: (S == null ? void 0 : S.src) || "",
      time: g,
      playing: $.advancing,
      fps: de.timeline.fps
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
      const de = D();
      return b.bg === null ? !de || vc(de, $.frame, y(), b.upstreamMedia ?? null, !0) : !de || vc(de, $.frame, y(), H(), !!b.upstream);
    },
    pause: ie,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return S;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(de, ue) {
      return S != null && S.frames ? Se.picture(S.frames, g, S.meta, ue) : ye.picture(de, ue);
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
    follow({ shown: de, sources: ue, state: B, sticker: he = null, media: ne = {} }) {
      if (S = de ? he : null, b = ne, !de)
        return ie(), me(""), ke(B), !1;
      for (const P of m)
        ue.includes(P) || m.delete(P);
      const T = ue.find((P) => P && !m.has(P)) || "", G = T !== d;
      G && (d = T, f = 0), me(d);
      const A = vh(B, { camera: c }) || !!d && $.state !== "error" || !!S;
      return A || ie(), (G || !A || !$.playing && $.frame >= N()) && $.frame !== Hi && $.seek(Hi), ke(B), A;
    },
    dispose() {
      $.dispose(), ye.dispose(), e.removeEventListener("loadedmetadata", V), e.removeEventListener("error", W), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
function Pw(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const n = t.fps === e.timeline.fps ? t : ch(t, e), r = new Set(n.deleted), i = new Map(n.stickers.map((a) => [a.id, a]));
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
const xg = "PANO_SCENE";
function Mg(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: an(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function Xu(e) {
  if (!e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length) return null;
  const t = e("pano_upstream_bg_color")[0], n = e("pano_upstream_bg_clip")[0], r = an({ version: 2, background: { clip: n == null ? void 0 : n.clip } }).background.clip;
  return {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: yn(e("pano_upstream_coverage")[0]),
    color: Array.isArray(t) && t.length === 3 ? `#${t.map((i) => Math.round(Math.min(1, Math.max(0, Number(i) || 0)) * 255).toString(16).padStart(2, "0")).join("")}` : null,
    clip: Ba(r) || !(Number(n == null ? void 0 : n.fps) > 0) ? null : { clip: r, fps: Number(n.fps) }
  };
}
const Nw = "bg_media is not used";
function Aw(e, t) {
  return e === xg && t === null;
}
function fn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function Pg(e) {
  return e.map(({ sceneState: { id: t } }, n) => t && !e.slice(n + 1).some((r) => r.sceneState.id === t) ? t : `#${n}`);
}
function Ng(e, t, n) {
  const r = Pg(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && r[s] === i.id ? t.find((m) => m.layer === i.id) ?? null : null, c = Pw(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === n ? u : { ...Ui(u, n), painting: d };
    for (const m of f.stickers)
      m.origin = { layer: r[s], id: m.id }, m.id = Ju(r[s], m.id);
    return { key: r[s], sceneState: f, ui: o, received: i };
  });
}
function Ju(e, t) {
  return `upstream:${e}:${t}`;
}
function Ic(e, t) {
  return Ju(e, t);
}
function It(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function va(e) {
  return Go(e.origin.layer);
}
function Go(e) {
  return !e.startsWith("#");
}
function Ag(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? Vr : Lr).map(([r]) => r), ...t ? [] : ["z_index"]];
}
function Cw(e) {
  return Object.fromEntries(Ag(e).map((t) => [t, JSON.stringify(e[t])]));
}
function Cg(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function Zu(e) {
  return `layer:${e}`;
}
function Gf(e) {
  return new Map(e.flatMap(({ key: t, sceneState: n }) => [
    [Zu(t), Cg(n)],
    ...n.stickers.map((r) => [r.id, Cw(r)])
  ]));
}
function Iw(e, t, n, r, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = ch(o[d], u.timeline.fps === i ? u : Ui(u, i));
    }
    return d;
  };
  return n.forEach(({ key: l, sceneState: c }, d) => {
    if (!Go(l)) return;
    const u = r.get(Zu(l));
    if (u) {
      const f = Cg(c), m = ["visible", "clip"].filter((S) => f[S] !== u[S]);
      if (m.length) {
        const S = a(l, d), g = { ...o[S].scene };
        for (const b of m) g[b] = structuredClone(c.scene[b]);
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
      const S = Ag(f).filter((D) => JSON.stringify(f[D]) !== m[D]);
      if (!S.length) continue;
      const g = a(l, d), { id: b } = f.origin, y = [...o[g].stickers], K = y.findIndex((D) => D.id === b), H = K >= 0 && y[K].placement === f.placement ? { ...y[K] } : { id: b, placement: f.placement };
      for (const D of S) H[D] = structuredClone(f[D]);
      K >= 0 ? y[K] = H : y.push(H), o[g] = { ...o[g], stickers: y };
    }
  }), s ? an({ version: 2, upstream: o }).upstream : e;
}
function Ew(e, t, n) {
  const r = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!Go(i)) return;
    const a = t.find((d) => d.layer === i), l = n.get(Zu(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && r.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((m) => m.id === d.origin.id && m.placement === d.placement && Object.hasOwn(m, "clip")), f = n.has(d.id) && n.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && r.push({ index: s, clip: d.clip, sticker: d });
    }
  }), r;
}
function Ig(e, t, n, r, i, o = null) {
  return Ew(e, t, n).flatMap(({ index: s, clip: a, sticker: l }) => {
    if (a.duration !== null && a !== o) return [a.start + a.duration];
    const c = (l == null ? void 0 : l.source.kind) === "port" ? r(s) : null;
    return c ? [Mu({ ...a, duration: null }, i, c)] : [];
  });
}
function Za(e, t, n, r) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(r({ layer: t, fps: n, deleted: [], stickers: [], scene: {} })) : o[i] = r(o[i]), an({ version: 2, upstream: o }).upstream;
}
function Ow(e, t, n) {
  return t.reduce((r, { layer: i, id: o }) => Za(r, i, n, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const Fw = new Set([...Lr, ...Vr].map(([e]) => e));
function Eg(e, { layer: t, id: n }) {
  var r;
  return ((r = e.find((i) => i.layer === t)) == null ? void 0 : r.stickers.find((i) => i.id === n)) ?? null;
}
function Tw(e, t, n = null) {
  const { origin: r } = t, i = Eg(e, r);
  return !i || n !== null && !(Fw.has(n) && i.placement === t.placement && Object.hasOwn(i, n)) ? e : Za(e, r.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== r.id) return [s];
      if (n === null) return [];
      const a = { ...s };
      return delete a[n], [a];
    })
  }));
}
function Dw(e, t) {
  var r;
  const n = new Set((r = e.find((i) => i.layer === t.key)) == null ? void 0 : r.deleted);
  return t.received.stickers.filter((i) => n.has(i.id)).length;
}
function Rw(e, t) {
  var n;
  return (n = e.find((r) => r.layer === t)) != null && n.deleted.length ? Za(e, t, null, (r) => ({ ...r, deleted: [] })) : e;
}
function Og(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function Lw(e, t) {
  return Og(e.find((n) => n.layer === t)) ? Za(e, t, null, ({ painting_visible: n, ...r }) => ({ ...r, scene: {} })) : e;
}
function Vw(e, t) {
  const n = Pg(t), r = new Map(t.flatMap(({ sceneState: s }, a) => n[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = r.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? an({ version: 2, upstream: o }).upstream : e;
}
function $w(e, t, n, { media: r, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a, received: l } = e, c = es(s, n), d = (b) => b.visible ? r(b) : null, u = Yh(s, n, { media: d, zIndex: (b) => b.z_index, paintLayers: i, evaluated: c }).map((b) => b.kind === "erp" ? { ...b, id: Ju(t, b.id) } : b), f = Jh(s, n, s.stickers, { media: d, evaluated: c }), m = [], S = ma(fn(a, "pano_scene_files"), fn(a, "pano_scene_meta"), o);
  S && m.push({ slot: `${t}:scene`, urls: S.urls.filter(Boolean), request: zu(S, c.scene), value: c.scene, opacity: 1 });
  const g = ma(fn(a, "pano_sticker_files"), fn(a, "pano_sticker_meta"), o);
  if (g) {
    const b = zh(g, s, c);
    m.push({ slot: `${t}:sticker`, urls: jh(g, l), request: b, value: (b == null ? void 0 : b.value) ?? null, opacity: (b == null ? void 0 : b.opacity) ?? 1 });
  }
  return { evaluated: c, sky: u, stickers: f, items: m };
}
const Sa = Math.PI / 180, Zn = 180 / Math.PI, zw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), jw = 260;
function Kf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Fg(e, t) {
  return t ? Fg(t, e % t) : e;
}
function Hw(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Fg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function Ko(e, t) {
  const n = Kf(e), r = Kf(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: Hw(n, r) };
}
function ni(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function Tg(e) {
  const t = ni(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? fr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Qu(e, t, n = zw) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), a = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), c = (b, y, K) => {
    const H = b + y, D = Math.max(0, K - 1), N = H > D && H > 0 ? D / H : 1;
    return [b * N, y * N];
  }, [d, u] = c(l, s, r), [f, m] = c(o, a, i), S = {
    x: d,
    y: f,
    w: Math.max(1, r - d - u),
    h: Math.max(1, i - f - m)
  }, g = hu(S, t);
  return {
    x: S.x + (S.w - g.width) * 0.5,
    y: S.y + (S.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: S
  };
}
function Gw(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Qu({ width: n, height: r }, 1), o = Fe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = n / (2 * Math.tan(o * Sa * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Km(l, zm(
    { x: n * 0.5, y: r * 0.5 },
    s,
    a
  )), d = Kw(c, Wi(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = gu({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Dg(e) {
  return {
    yaw: Et(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Zn),
    pitch: Fe(Math.asin(Fe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Zn, -89.9, 89.9)
  };
}
function Kw(e, t) {
  const n = Dg(e), r = Wi(n.yaw, n.pitch, 0), i = Sl(t, e), o = {
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
    roll: Ga(Math.atan2(
      Sl(a, r.up),
      Sl(a, r.right)
    ) * Zn)
  };
}
function Rg(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Qu({ width: n, height: r }, ci(e)), o = oi(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Km(e, zm(
    s,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), l = Dg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Fe(2 * Math.atan(n / (2 * o)) * Zn, 1, 179)
  };
}
function Ww(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = oi(t, n), l = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = yu(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= r && u.y + u.h >= i, m = r / i, S = Math.tan(dc * Sa), g = m >= 1 ? S : S * m, b = m >= 1 ? S / m : S;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(c / a) * Zn,
      vFOV_deg: 2 * Math.atan(d / a) * Zn
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(g) * Zn,
        vFOV_deg: 2 * Math.atan(b) * Zn
      }
    }
  };
}
function bi(e, t) {
  const n = ni(e);
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
function Uw(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const s = oi(n, e);
    return gu(hu(n, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Es(o, t) };
}
function Wf(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = Ko(t, n);
  if (!o) return e;
  const s = ci(e) >= 1;
  r && o.ratio >= 1 !== s && (o = Ko(o.height, o.width));
  const a = Uw(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Lg(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ni(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = jm({
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
    const r = ni(e);
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
    return bi(e, (r) => Wf(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return bi(e, (r) => {
      const o = String(fr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? Ko(o[1], o[2]) : Ko(ci(r), 1);
      return s ? Wf(r, s.height, s.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? bi(e, (i) => {
      const o = Ga(r), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? bi(e, (r) => {
    const i = Hm(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? bi(e, (r) => {
    const i = Gm(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? bi(e, (r) => {
    const i = zg(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Vg({
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
function $g(e, t, n = {}) {
  var s, a;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Vm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: $m(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function zg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * Sa, l = Math.cos(a), c = Math.sin(a), d = o / n, u = -s / n, f = d * l - u * c, m = d * c + u * l, S = Number(e.pitch_deg || 0) * Sa, g = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Et(Number(e.yaw_deg || 0) - Math.atan(f) / g * Zn),
    pitch_deg: Fe(Number(e.pitch_deg || 0) - Math.atan(m) * Zn, -90, 90)
  };
}
function Bw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return dg({
    readState: e,
    reduce: Lg,
    projectModel: Tg,
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
}), Yw = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, qw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Yw(t[2])
})), Xw = {
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
}, Uf = Object.fromEntries(
  Object.entries(Xw).map(([e, t]) => [e, {
    name: t.name,
    elements: qw(t.body)
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
      return Object.prototype.hasOwnProperty.call(Uf, r) ? Uf[r] : null;
    });
    return (r, i) => n.value ? (Oe(), De("svg", {
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
      (Oe(!0), De(qe, null, mt(n.value.elements, (o, s) => (Oe(), De(qe, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Oe(), De("path", lr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Oe(), De("circle", lr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Oe(), De("rect", lr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Oe(), De("line", lr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Oe(), De("polyline", lr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Oe(), De("polygon", lr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : tt("", !0)
      ], 64))), 128))
    ], 2)) : tt("", !0);
  }
}, Vt = {
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
    return (r, i) => (Oe(), gn(wb(e.tag), lr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: im(() => [
        Ue(xt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Jw = ["aria-expanded", "disabled"], Zw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Qw = ["data-aspect", "disabled", "onClick"], ek = { class: "pano-cutout-aspect-custom" }, tk = ["disabled"], nk = ["disabled"], rk = ["data-custom-width", "data-custom-height", "disabled"], jg = {
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
    ]), o = /* @__PURE__ */ Dt("1"), s = /* @__PURE__ */ Dt("1"), a = /* @__PURE__ */ Dt(null), l = nt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), c = nt(() => {
      const g = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], b = String(n.model.aspectLabel || "");
      return g.length ? g.map((y) => {
        const K = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), H = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || K);
        return {
          ...typeof y == "object" && y ? y : {},
          value: K,
          label: H,
          active: b ? K === b : (y == null ? void 0 : y.active) === !0
        };
      }) : i.map((y) => ({
        ...y,
        active: y.value === b
      }));
    }), d = nt(() => {
      var b;
      const g = String(n.model.aspectLabel || "").trim();
      return g || String(((b = c.value.find((y) => y.active === !0)) == null ? void 0 : b.label) || "Aspect");
    });
    ei(d, (g) => {
      const b = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      b && (o.value = b[1], s.value = b[2]);
    }, { immediate: !0 });
    function u(g) {
      r("action", g);
    }
    function f(g) {
      var b;
      n.model.aspectOpen === !0 && ((b = a.value) != null && b.contains(g.target) || u({ type: "close-aspect" }));
    }
    $a(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Xo(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function m(g) {
      const [b, y] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: b,
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
    return (g, b) => (Oe(), De("div", {
      ref_key: "rootElement",
      ref: a,
      class: ot(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Oe(), gn(Vt, {
        key: 0,
        icon: e.model.aspectIcon || Je(He).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: b[0] || (b[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Oe(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: b[1] || (b[1] = (y) => u({ type: "toggle-aspect" }))
      }, [
        Ue(xt, {
          icon: e.model.aspectIcon || Je(He).aspect
        }, null, 8, ["icon"]),
        Me("span", null, Xe(d.value), 1),
        Ue(xt, {
          icon: Je(He).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Jw)),
      hr(Me("div", Zw, [
        (Oe(!0), De(qe, null, mt(c.value, (y) => (Oe(), De("button", {
          key: y.value,
          class: ot(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (K) => m(y)
        }, Xe(y.label), 11, Qw))), 128)),
        Me("div", ek, [
          hr(Me("input", {
            "onUpdate:modelValue": b[2] || (b[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, tk), [
            [mf, o.value]
          ]),
          b[4] || (b[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          hr(Me("input", {
            "onUpdate:modelValue": b[3] || (b[3] = (y) => s.value = y),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, nk), [
            [mf, s.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: S
          }, "Apply", 8, rk)
        ])
      ], 512), [
        [ii, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, ik = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, ok = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Dt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (Oe(), De("div", {
      class: ot(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = pt(() => {
      }, ["stop"]))
    }, [
      Ue(Vt, {
        icon: Je(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", ik, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Oe(!0), De(qe, null, mt(Je(n), (o) => (Oe(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, Xe(o[0]), 1),
          Me("span", null, Xe(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, sk = {
  class: "pano-view-unavailable",
  role: "status"
}, Qa = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (Oe(), De("div", sk, Xe(Je(Zh)), 1));
  }
}, ak = { class: "pano-cutout-node-surface" }, lk = ["title", "disabled"], ck = { class: "value" }, uk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, dk = {
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
    return (r, i) => (Oe(), De("div", ak, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = pt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = pt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => n({ type: "open-editor" }))
        }, [
          Ue(xt, {
            icon: Je(He).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ue(Vt, {
          icon: e.model.hasShot ? Je(He).delete : Je(He).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ue(jg, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        Me("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = pt((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ue(xt, {
            icon: Je(He).roll
          }, null, 8, ["icon"]),
          Me("span", ck, Xe(e.model.rollLabel || "0.0°"), 1)
        ], 40, lk),
        Ue(Vt, {
          icon: Je(He).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(ok)
      ], 32),
      e.model.hasShot === !1 ? (Oe(), De("div", uk, " Choose a view · + Add Frame ")) : tt("", !0),
      e.model.viewUnavailable ? (Oe(), gn(Qa, { key: 1 })) : tt("", !0)
    ]));
  }
}, Hg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ Dt(null);
    let o, s = !1;
    function a() {
      if (!s) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, s = !1, { active: !0, intent: u };
    }
    function l(u) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = u, s = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(u) {
      var g, b;
      const { active: f, intent: m } = a();
      if (!f) return;
      const S = ((b = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : b[0]) || null;
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
}, fk = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, pk = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Dt(!1), n = Object.freeze([
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
      class: ot(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = pt(() => {
      }, ["stop"]))
    }, [
      Ue(Vt, {
        icon: Je(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", fk, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Oe(!0), De(qe, null, mt(Je(n), (o) => (Oe(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, Xe(o[0]), 1),
          Me("span", null, Xe(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, mk = { class: "pano-stickers-node-surface" }, hk = ["disabled"], gk = ["aria-label", "data-tip"], yk = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, bk = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, vk = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Dt(null);
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
    return (s, a) => (Oe(), De("div", mk, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = pt(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = pt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => r({ type: "open-editor" }))
        }, [
          Ue(xt, {
            icon: Je(He).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Ue(xt, {
            icon: Je(He).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, hk),
        Ue(Vt, {
          icon: e.model.locked ? Je(He).lock_closed : Je(He).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ue(Vt, {
          icon: Je(He).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(Vt, {
          icon: Je(He).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(Vt, {
          icon: e.model.isExternalSelection ? Je(He).back_initial : Je(He).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ue(pk)
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
        Ue(xt, {
          icon: e.model.playing ? Je(He).pause : Je(He).play
        }, null, 8, ["icon"])
      ], 40, gk)) : tt("", !0),
      e.model.hasStickers === !1 ? (Oe(), De("div", yk, " Add Image to place a sticker ")) : tt("", !0),
      e.model.dropActive === !0 ? (Oe(), De("div", bk, "Drop image to add")) : tt("", !0),
      Ue(Hg, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Oe(), gn(Qa, { key: 3 })) : tt("", !0)
    ]));
  }
}, Sk = { class: "pano-studio-node-surface" }, _k = {
  class: "pano-studio-node-status",
  role: "status"
}, wk = { class: "pano-studio-node-shot" }, kk = { class: "pano-studio-node-size" }, xk = { class: "pano-studio-node-note" }, Mk = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Oe(), De("div", Sk, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: r[1] || (r[1] = pt(() => {
        }, ["stop"])),
        onWheel: r[2] || (r[2] = pt(() => {
        }, ["stop"]))
      }, [
        Me("div", _k, [
          Me("span", wk, Xe(e.model.status.shot), 1),
          Me("span", kk, Xe(e.model.status.size), 1),
          Me("span", xk, Xe(e.model.status.note), 1)
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: r[0] || (r[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Ue(xt, {
            icon: Je(He).fullscreen
          }, null, 8, ["icon"]),
          r[3] || (r[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Oe(), gn(Qa, { key: 0 })) : tt("", !0)
    ]));
  }
}, Pk = 2048, Ec = 4096, Nk = (e) => Math.floor(e + 0.5), Ss = (e) => Math.max(2, 2 * Nk(e / 2));
function Gg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function Ak(e) {
  const t = Au(e, { camera: !0 });
  return t === Sh ? [] : Array.from({ length: t }, (n, r) => r);
}
function Ck(e, t, n, r, i) {
  const o = n === "auto" && i == null;
  let s;
  n !== "auto" ? s = Number(n) : o ? s = Pk : s = Math.floor(i * 360 / r);
  const a = Gg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * r / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((m) => Ka(a, m).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [Ss(c), Ss(d)];
  if (Math.max(...u) <= Ec) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Ec / Math.max(c, d);
  return { width: Ss(c * f), height: Ss(d * f), reducedFrom: u, defaulted: o };
}
function Kg(e, t, n, r) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${n}\0${r}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function Ik({ stateText: e = "", outputSize: t, coverage: n, bgColor: r = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === Kg(e, t, String(n), r) } : null;
}
function Ek(e) {
  return e ? Dr(sn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const jl = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Ok(e, { stateText: t = "", outputSize: n, coverage: r, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = Gg(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${r}°` : "Camera · Perspective");
  let d;
  if (s && s.key === Kg(t, n, String(r), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: n === "auto" && o === null };
  else {
    if (n === "auto" && o === void 0)
      return { shot: c, size: "auto", note: jl[a] };
    d = Ck(e, Ak(e), n, r, o);
  }
  const u = jl[a] ? [jl[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Ec} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function Fk() {
  let e = null;
  return (t, n) => {
    const r = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", r === void 0 ? "pending" : r, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Ok(n(), { ...t, bgWidth: r }));
  };
}
const Bf = 24;
function Tk(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Po(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function Wg(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Oc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Po(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Po(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Wg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Dk(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => Po(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = r ? e.corners.findIndex((s) => Po(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Po(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Wg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function ed(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Ug(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function eo(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Fe(n.x, -r, t.width + r),
    y: Fe(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function Rk(e) {
  const t = Wi(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * ut * 0.5),
    tanY: Math.tan(Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * ut * 0.5)
  };
}
function Wr(e, t, n) {
  return mu(na(
    na(e.centerDir, ra(e.right, t)),
    ra(e.up, n)
  ));
}
function td(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = Rk(e), r = eo(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    Wr(n, -n.tanX, n.tanY),
    Wr(n, n.tanX, n.tanY),
    Wr(n, n.tanX, -n.tanY),
    Wr(n, -n.tanX, -n.tanY)
  ].map((f) => eo(f, t)), o = Array.from({ length: 4 }, (f, m) => {
    const S = [];
    for (let g = 0; g <= 28; g += 1) {
      const b = g / 28;
      let y, K;
      m === 0 ? (y = -n.tanX + 2 * n.tanX * b, K = n.tanY) : m === 1 ? (y = n.tanX, K = n.tanY - 2 * n.tanY * b) : m === 2 ? (y = n.tanX - 2 * n.tanX * b, K = -n.tanY) : (y = -n.tanX, K = -n.tanY + 2 * n.tanY * b);
      const H = eo(Wr(n, y, K), t);
      H && S.push({ x: H.x, y: H.y });
    }
    return S;
  }), s = eo(Wr(n, 0, n.tanY), t), a = eo(
    Wr(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * Bf,
      y: s.y + d / u * Bf
    },
    visible: !0
  };
}
function Yf(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: td(s, r) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = Oc(o.geometry, n);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = Oc(s.geometry, n);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function Lk(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Et(Math.atan2(r.x, r.z) * $t),
    pitch_deg: Math.asin(Fe(r.y, -1, 1)) * $t
  };
}
function Vk(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function $k(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * $t;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let _s = null;
function nd() {
  return _s || (_s = new Promise((e) => {
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
  }), _s);
}
function zk(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function jk(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function Hk({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
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
    const b = g.get(f);
    if ((b == null ? void 0 : b.entry) === m) {
      b.callback = S;
      return;
    }
    o(b);
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
    const g = String(f || ""), b = String(m || "");
    if (!g || !b) return null;
    let y = n.get(g);
    if (y)
      n.delete(g), n.set(g, y);
    else {
      l(i - 1);
      const H = e || globalThis.Image;
      if (typeof H != "function") return null;
      const D = new H();
      y = { key: g, image: D, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(g, y), D.onload = () => a(y, !0), D.onerror = () => a(y, !1), D.src = b;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, g, y, S), y.image;
  }
  function d(u) {
    const f = r.get(u);
    f && ([...f.values()].forEach(o), r.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const so = /* @__PURE__ */ new WeakMap();
function Bg(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = so.get(e);
  r || (r = [], so.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = so.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && so.delete(e);
  };
}
function Cr(e, ...t) {
  const n = so.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Gs = Object.freeze({
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
}), Yg = "PanoramaSuite.Editor.ViewControls", Gk = {
  id: Yg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Gs).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Kk(e) {
  return Object.hasOwn(Gs, e) ? Gs[e] : Gs.default;
}
function Wk(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === n && !!a.alt === r);
  return (s == null ? void 0 : s.action) ?? null;
}
function Uk(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const _a = "state_json";
function mr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function Bk(e) {
  var s, a;
  const t = mr(e, _a);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = wh(n, {
    coverage: (s = mr(e, "coverage")) == null ? void 0 : s.value
  }), i = Lg(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function rd(e, t) {
  if (!e || wn(e).coverageSyncInstalled) return;
  const n = mr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var a, l, c, d, u, f, m, S, g;
    const o = r ? r(...i) : void 0, s = wn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = pr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = lt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (m = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || m.call(f, !0, !0), (g = (S = t == null ? void 0 : t.canvas) == null ? void 0 : S.setDirty) == null || g.call(S, !0, !0), o;
  }, wn(e).coverageSyncInstalled = !0;
}
function Yk(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function qf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function qk(e) {
  var d, u, f, m, S, g;
  if (!e) return;
  const t = mr(e, "coverage"), n = mr(e, "bg_color"), r = mr(e, _a), i = mr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), s = String(n.value ?? "").trim(), a = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Yk(o) && (qf(s) || s === ""))) return;
  let c = "360";
  if (qf(s))
    try {
      c = String(yn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), n.value = o, (f = n.callback) == null || f.call(n, o), r.value = s, (m = r.callback) == null || m.call(r, s), i && (i.value = a, (S = i.callback) == null || S.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Ks(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, s;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (s = r.parentEl) != null && s.style && (r.parentEl.style.display = "none")));
  });
}
function Fc(e, t, n) {
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
async function Xk(e, { tolerateOperationFailure: t = !1 } = {}) {
  var r;
  const n = (r = wn(e)) == null ? void 0 : r.pendingStickerUploads;
  if (n)
    for (; n.size > 0; ) {
      const i = Array.from(n.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        n.get(o) === s && n.delete(o);
      });
    }
}
function ao(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const r = wn(e), i = r.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
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
async function qg(e, t = {}) {
  var r, i, o;
  await Xk(e, t);
  const n = Array.from(((r = wn(e)) == null ? void 0 : r.flushers) ?? []);
  for (const s of n) await s();
  await ((o = (i = Ho(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function Jk(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await qg(e), n ? n.apply(this, r) : this.value;
  };
}
function Zk(e) {
  var n;
  const t = lt(e);
  try {
    (n = t.restore) == null || n.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function Xg(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return iw(this), n;
  };
}
function Qk(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Hl(e, {
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
    Zk(u), rd(u, t), Ks(u, _a);
    const S = mr(u, _a);
    if (Jk(u, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const b = S.callback;
      S.callback = (y) => {
        var H;
        const K = b ? b(y) : void 0;
        return (H = u.setDirtyCanvas) == null || H.call(u, !0, !1), K;
      };
    }
    if (n === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const b = mr(u, "bg_color");
      !l && b && (b.value == null || String(b.value).trim() === "" || String(b.value).toLowerCase() === "#000000") && (b.value = "#00ff00", (g = b.callback) == null || g.call(b, "#00ff00")), Fc(u, r, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(u, "stickers")
      }), m.stickers && Ks(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), m.attached = !0, m.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, Fc(u, r, () => i(u, "cutout")), s(u, {
      buttonText: r,
      onOpen: () => i(u, "cutout")
    }), m.cutout && Ks(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), m.attached = !0, m.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const m = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && n === "PanoramaCutout" && Bk(this), u === "onConfigure" && n === "PanoramaStickers" && !l && this.widgets && qk(this);
      const S = lt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && S && Cr(this, "attach"), m;
    };
  }
  Xg(e);
}
function ex(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return Qk(this), r;
  }, Xg(e);
}
function tx(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: i
}) {
  const o = pr(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if (pr(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    rd(e, t);
    const c = (d = e) => n(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Fc(e, "Open Preview", () => c(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ks(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function nx({
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
    settings: [Gk, t1],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [_f],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [_f.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Hl(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Hl(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Hl(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), ia(d) && ex(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      lt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      rd(l, e), ia(c) && tx(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const rx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Ln(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : rx.test(String(e.name || "")) : !1;
}
function id(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Ln(n)) : !1;
}
function ix(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (id(l == null ? void 0 : l.dataTransfer)) {
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
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => Ln(u));
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
async function lo(e, t = {}) {
  var s, a, l, c;
  if (!Ln(e)) throw new TypeError("A supported image file is required.");
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
async function qr(e, { fetchApi: t } = {}) {
  if (!Ln(e)) throw new TypeError("A supported image file is required.");
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
const Xf = /* @__PURE__ */ new WeakSet(), Jf = /* @__PURE__ */ new WeakSet();
let Zf = 0;
function Tc(e) {
  if (!e || typeof e != "object" || Jf.has(e)) return e;
  const t = String(e.type || "preview");
  return Zf += 1, e.type = `${t}:pano-${Zf}`, Jf.add(e), e;
}
function wa(e) {
  if (!e || typeof e != "object" || Xf.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Xf.add(e), e;
}
function Jg(e, t) {
  var r, i;
  if (!t || ((i = (r = wa(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function ox({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (l) => o || r || typeof e != "function" ? !1 : (i = l, r = e(() => {
    r = 0;
    const c = i;
    i = null, o || n == null || n(c);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: At } = Ps;
U_((e) => vr(e.id));
B_(Yt);
const od = Hk(), { linkedVideoFile: Zg } = ug({ app: At, api: Yt });
function Dc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ps == null ? void 0 : Ps.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const sx = "pano_suite.ui_settings.v1", ax = 120, lx = 2048;
function Qf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(sx)) || "").trim();
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
function cx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function to(e) {
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
function ux() {
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
function Rc(e) {
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
function Qg(e) {
  const t = Rc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function dx(e, t, n) {
  Qg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Lc(e) {
  var t, n;
  return (n = (t = lt(e)) == null ? void 0 : t.dom) != null && n.widget ? "dom" : "none";
}
function sd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function e0(e) {
  return ia(sd(e));
}
function ep(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = At == null ? void 0 : At.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, r, n, i].join("|");
}
function t0(e) {
  const t = lt(e);
  if (t.controller) return t.controller;
  const n = {
    activeBackend: "none",
    attach(r = {}) {
      const i = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Lc(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = r.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof r.onOpen == "function" ? r.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Gl(e), rM(e, { ...r, mode: i }), this.activeBackend = Lc(e);
    },
    rebind(r = {}) {
      const i = String(r.mode || lt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Gl(e), this.activeBackend = "none", this.attach({ ...r, mode: i });
    },
    teardown() {
      Gl(e), this.activeBackend = "none";
    }
  };
  return t.controller = n, n;
}
function Gl(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Vc.unregister(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = Dc();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Ex(e, c));
  } catch {
  }
  n.dom = null, n.noPreview = !1, n.bootMinHeightTimer && (clearTimeout(n.bootMinHeightTimer), n.bootMinHeightTimer = null), n.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function fx(e, t = "#00ff00") {
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
function px(e) {
  var n, r;
  const t = (n = wn(e)) == null ? void 0 : n.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = Vn(e, "state_json")) == null ? void 0 : r.value) || "");
}
function en(e) {
  var d, u;
  const t = wn(e), n = px(e), r = t.liveStateVersion, i = String(((d = Vn(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = Vn(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof n == "string", a = s && Sg(e) && bt(e, "sticker-handoff") ? $n(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === n && l.liveVersion === r && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? vw(n, { backgroundColor: i, coverage: o, active: Ah(e) }, a) : fx(n, i);
  return c.coverage = o, t.parsedState = { source: n, liveVersion: r, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function Vn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function mx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function n0(e, t, n = null) {
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
  return !r && n != null && (r = mx(e == null ? void 0 : e.graph, n)), r;
}
function hx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function r0(e, t = []) {
  const n = hx(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    In.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function tp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function ka(e, t) {
  const n = tp(e), r = tp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function gx(e, t) {
  var n;
  return n0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function yx(e, t = In) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = r0(e, t).map((a) => n.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = n.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Q_(e, s, gx);
}
const Vc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Yt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, m, S;
        if (!o) return;
        const s = ka(r, o == null ? void 0 : o.id);
        String(lt(o).mode || "") === "cutout" && !s || !s && ![...yx(o)].some((g) => ka(r, g)) || (s && (ld(o), (c = (l = lt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !ag(ln(o).executedOutputs, r, n.output) && (o0(o), (u = (d = lt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (S = (m = o.graph) == null ? void 0 : m.setDirtyCanvas) == null || S.call(m, !0, !0), String(lt(o).mode || ""), String(lt(o).mode || ""), void 0));
      });
    }, Yt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Yt) != null && e.removeEventListener) || (Yt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function xa(e) {
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
  return typeof ((o = Yt) == null ? void 0 : o.apiURL) == "function" ? Yt.apiURL(i) : i;
}
function bx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function vx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function Sx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function _x(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (bx(t)) return [t];
  const { filename: n, subfolder: r } = vx(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => xa({
    filename: n,
    subfolder: r,
    type: o
  }));
  return Sx([...i, t]);
}
function wx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? xa({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function vr(e) {
  const t = At == null ? void 0 : At.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (ka(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (ka(s, i)) return t[s];
  }
  return null;
}
function $n(e, t, n = null) {
  const r = n || vr(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
}
function nn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return nn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return xa({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = nn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : xa(e);
}
function Wo(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Ws(e) {
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
function ad(e, t) {
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
function kx(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function xx(e, t) {
  try {
    const n = ln(e);
    n.ownOutputRev = zk(n.ownOutputRev);
    const r = kx(t);
    let i = "";
    for (const o of r)
      if (i = nn(o), i) break;
    i ? (ad(String(i || ""), n.ownOutputRev), n.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ti(e) {
  var n;
  const t = ln(e);
  t && ((n = t.ownOutputVideo) == null || n.player.destroy(), t.ownOutputVideo = null);
}
function Mx(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!bt(e, "background"))
    return Ti(e), null;
  const i = vr(r), o = Ku(i, t, nn);
  if (!o)
    return Ti(e), null;
  const s = ln(e), a = ad(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Ti(e);
  const d = ew({
    documentRef: document,
    src: a,
    onFrame: n
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Px(e, t = []) {
  var c, d;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = r0(e, t).map((u) => n.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = n.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = n[u], m = e.graph ? e.getInputLink(u) : null;
    if ((m == null ? void 0 : m.origin_id) == null) continue;
    const S = m.origin_id, g = n0(e, u, S);
    if (!g) continue;
    const b = Number(m.origin_slot ?? 0), y = vr((g == null ? void 0 : g.id) ?? S), K = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (K.length) {
      const $ = [];
      b >= 0 && b < K.length && $.push(K[b]), $.push(...K);
      for (const V of $.filter((W) => !Vs(W))) {
        const W = nn(V);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: `${W}&pano_src=${Nc(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let H = [];
    try {
      H = typeof (At == null ? void 0 : At.getNodeImageUrls) == "function" ? At.getNodeImageUrls(g) || [] : [];
    } catch {
      H = [];
    }
    if (Array.isArray(H) && H.length) {
      const $ = [];
      b >= 0 && b < H.length && $.push(H[b]), $.push(...H);
      for (const V of $) {
        const W = nn(V);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const D = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (D.length) {
      const $ = [];
      b >= 0 && b < D.length && $.push(D[b]), $.push(...D);
      for (const V of $) {
        const W = nn(V);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const N = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image");
    if (N) {
      let $ = nn(N.value);
      if ($ && !$.includes("/") && !$.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && ($ = Yt.apiURL(`/view?filename=${encodeURIComponent($)}&type=input&subfolder=`)), $)
        return String((f == null ? void 0 : f.name) || ""), { src: $, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = bt(e, "background") ? vr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = nn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Nx(e, t = [], n = {}) {
  const r = Px(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = _x(i);
  if (!o.length) return null;
  const s = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1, a = ln(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
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
function i0(e, t = [], n = null, r = {}) {
  const i = Nx(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function o0(e) {
  e && (od.disposeOwner(e), ln(e).linkedImages.clear(), Ti(e));
}
function Ax(e) {
  e && (ln(e).linkedImages.clear(), Ti(e));
}
function s0(e, t) {
  const n = lt(e);
  n.renderCache ?? (n.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = n.renderCache, i = String(t || "");
  return r.mode !== i && (r.mode = i, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function no(e, t, n = "") {
  var s;
  const r = s0(e, ((s = lt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < ax ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function np(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), s = n / i, a = r / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Cx(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * n)), l = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), c = Math.max(Math.round(34 * n), a + Math.round(14 * n)), d = r + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Kl(e, t) {
  var r, i;
  const n = (i = (r = lt(e)) == null ? void 0 : r.dom) == null ? void 0 : i.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function Ix(e) {
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
function Ex(e, t) {
  return Jg(e, t);
}
function Ma(e, t, n, r = null) {
  var f;
  if (!String(t || "")) return null;
  let o = wx(n);
  if (!o && (r != null && r.external)) {
    if (!bt(e, "external-sticker")) return null;
    const m = vr(e == null ? void 0 : e.id), S = ((f = m == null ? void 0 : m.ui) == null ? void 0 : f.pano_sticker_input_images) || (m == null ? void 0 : m.pano_sticker_input_images) || [];
    for (const g of Array.isArray(S) ? S : [S])
      if (o = nn(g), o) break;
  }
  if (!o) return null;
  const s = $n(e, "pano_sticker_input_state_hash"), a = r != null && r.external ? String(s ?? "") : "", l = r != null && r.external ? ln(e).ownOutputRev : 0, c = r != null && r.external ? ad(o, l) : o, d = jk(o, a, l);
  return od.get(e, d, c, (m, S) => {
    var g, b;
    S && (r != null && r.external && ln(e).outputFromRun && Cr(e, "image-loaded"), (b = (g = lt(e).dom) == null ? void 0 : g.requestDraw) == null || b.call(g));
  }) || null;
}
function Ox(e, t, n, r) {
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
  const i = Tx(e, t, r);
  return i || null;
}
function Fx(e, t) {
  var u, f;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = At == null ? void 0 : At.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (n - Number(o.left || 0)) / a - Number(l[0] || 0), d = (r - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Tx(e, t, n) {
  var i, o;
  const r = Fx(t, n || (At == null ? void 0 : At.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function rp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Dx(e, t, n) {
  const r = td(t, n);
  r.visible && ed(e, r.boundaryEdges, { selected: !1 });
}
function Rx(e, t, n) {
  const r = td(t, n);
  r.visible && (e.save(), ed(e, r.boundaryEdges, { selected: !0 }), Ug(e, r, { accent: Tk(t) }), e.restore());
}
function $c(e, t, n) {
  return Bh(ha(lt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Pa(e) {
  var t;
  return ((t = lt(e).playback) == null ? void 0 : t.playback.frame) ?? Hi;
}
function Lx(e) {
  return [bt(e, "background") ? Ku(vr(e.id), ["pano_input_videos"], nn) : "", Zg(e, In)];
}
function Vx(e) {
  var o;
  if (!bt(e, "external-sticker")) return null;
  const t = vr(e.id), n = $n(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(nn), meta: n };
  const i = Ku(t, ["pano_sticker_input_videos"], nn);
  return i ? { src: i, meta: n } : null;
}
function a0(e, t) {
  const n = vr(e.id), r = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(r) ? r : [];
}
function $x(e, t) {
  var a;
  const n = {}, r = (l) => a0(e, l), i = bt(e, "scene"), o = i ? r("pano_upstream_layers") : [], s = i ? Xu(r) : null;
  if (s) {
    n.bg = null;
    const { clip: l } = s;
    n.upstreamClip = l && dh(l.clip, l.fps, t.timeline.fps);
    const c = r(s.metaKey)[0];
    c && typeof c == "object" && (n.upstreamMedia = { video: !0, frames: Number(c.frames), duration: Number(c.duration) });
  } else if (bt(e, "background")) {
    const l = r("pano_input_video_meta")[0];
    l && typeof l == "object" && (n.bg = { video: Mo(e, In), frames: Number(l.frames), duration: Number(l.duration) });
  }
  if (bt(e, "external-sticker") && (n.port = Vo(r)), o.length) {
    const l = lt(e);
    if (((a = l.upstreamLength) == null ? void 0 : a.layers) !== o || l.upstreamLength.state !== t) {
      const d = Mg(o), u = Ng(d, t.upstream, t.timeline.fps), f = (m) => Vo((S) => fn(d[m].ui, S));
      l.upstreamLength = { layers: o, state: t, ends: Ig(u, t.upstream, /* @__PURE__ */ new Map(), f, t.timeline.fps) };
    }
    const [c] = r("pano_upstream_frames").length ? r("pano_upstream_frames") : r("pano_timeline_frames");
    n.upstream = { frames: Number(c) > 0 ? Number(c) : 0, ends: l.upstreamLength.ends };
  } else i && (n.sceneItems = r("pano_scene_files").length);
  return n;
}
function zx({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function l0(e, t) {
  var r;
  const n = lt(e);
  return ((r = n.scene) == null ? void 0 : r.state) !== t && (n.scene = { state: t, sceneState: an({ ...t, painting: null }) }), n.scene.sceneState;
}
function jx(e, t) {
  const n = Fi(e), r = !!n.bg_media;
  if (!r && !n.scene) return null;
  if (bt(e, "background")) {
    const o = $n(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!r) return;
  if (Mo(e, In)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === Zg(e, In) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = i0(e, In, null, { preserveReadyWhilePending: !1 });
  return Wo(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Hx(e, t) {
  var i, o, s;
  const n = String(((i = Vn(e, "output_size")) == null ? void 0 : i.value) ?? ""), r = ["background", "external-sticker", "scene"].every((a) => bt(e, a));
  return {
    stateText: String(((o = Vn(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: n,
    coverage: en(e).coverage,
    bgColor: String(((s = Vn(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: n === "auto" ? jx(e, t) : null,
    run: r && $n(e, "pano_output_size") || null,
    erp: $n(e, "pano_output_erp") || null,
    frame: $n(e, "pano_output_frame") || null
  };
}
const Gx = 38;
function ld(e) {
  const t = ln(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function Kx(e, t) {
  const n = ln(e).studioRunImage;
  return t && (n == null ? void 0 : n.src) === nn(t.entry) ? n : null;
}
function Wx(e, t) {
  const n = ln(e), r = lt(e), i = t ? nn(t.entry) : "";
  if (n.studioRunImage && n.studioRunImage.src !== i && ld(e), !i) return null;
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
      revision: Ws(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: Ek(t.entry.rotation)
    }
  } : null;
}
function Ux(e, t) {
  var n;
  return t ? (n = Kx(e, t)) != null && n.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function Bx(e, t, n) {
  var l, c, d;
  const r = l0(e, t), i = (u) => {
    var m;
    if (u.visible === !1) return null;
    let f;
    if (t.version === 2) {
      f = Ma(e, u.id, fa(u.source), { external: u.source.kind === "port" });
      const S = lt(e).playback;
      if (u.source.kind === "port" && S) {
        const g = S.playback.stickerPicture(S.stickerStill, f), b = Pu(S.playback.stickerMedia, f);
        return g ? { media: g, revision: Ws(g), source: b } : null;
      }
    } else {
      const S = u.type === "external_image" || u.source_kind === "external_image", g = String(u.asset_id || "") || (S ? String(u.id || "") : "");
      f = Ma(e, g, (m = t.assets) == null ? void 0 : m[u.asset_id], { external: S });
    }
    return Wo(f) ? { media: f, revision: Ws(f) } : null;
  }, o = s_(lt(e), t), s = bt(e, "scene") ? (l = Xu((u) => a0(e, u))) == null ? void 0 : l.color : null;
  return {
    background: ((c = lt(e).playback) == null ? void 0 : c.playback.backgroundShows) === !1 ? ph(s || String(((d = Vn(e, "bg_color")) == null ? void 0 : d.value) || "#000000")) : Wo(n) ? { media: n, revision: Ws(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: qh(r, Pa(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Yx(e, t, n, r = null) {
  var W, ye, Se, me, ie, ke, de;
  const i = lt(e), o = String(i.mode || "stickers");
  s0(e, o);
  const s = en(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (Se = (ye = (W = i.cutout) == null ? void 0 : W.session) == null ? void 0 : ye.refresh) == null || Se.call(ye)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (ke = (ie = (me = i.stickers) == null ? void 0 : me.session) == null ? void 0 : ie.refresh) == null || ke.call(ie));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), r != null && r.frame) {
    n.release(), no(e, !1, "");
    const { width: ue, height: B } = rp(r.frame), he = Gx, ne = Math.min(l / ue, (c - he) / B);
    d.drawImage(r.frame, (l - ue * ne) / 2, he + (c - he - B * ne) / 2, ue * ne, B * ne);
    return;
  }
  const f = (r == null ? void 0 : r.background) || null, m = (f == null ? void 0 : f.media) || (i.playback ? zx(i.playback) : Mx(e, ["pano_input_videos"], () => {
    var ue, B;
    return (B = (ue = i.dom) == null ? void 0 : ue.requestDraw) == null ? void 0 : B.call(ue);
  })) || i0(
    e,
    In,
    () => {
      var ue, B;
      return (B = (ue = i.dom) == null ? void 0 : ue.requestDraw) == null ? void 0 : B.call(ue);
    },
    { preserveReadyWhilePending: !1 }
  ), S = Wo(m);
  let g = null;
  const b = () => f ? { background: f, layers: [] } : Bx(e, s, m), y = (ue, B) => {
    g || (g = b());
    const he = n.render({ width: ue.w, height: ue.h, camera: B, ...g });
    return he && d.drawImage(he.canvas, he.x, he.y, he.width, he.height, ue.x, ue.y, ue.w, ue.h), !!he;
  };
  if (o === "cutout") {
    const ue = Ix(s), B = rp(m), he = ue ? Fe(Tr(ue).aspect, 0.1, 10) : S ? Fe(Number(B.width / B.height), 0.05, 20) : 1, ne = Qu(u, he);
    i.cutoutFrame = ne;
    let T = "none";
    const G = String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "");
    if (ue)
      if (m && !S)
        T = "loading";
      else if (S) {
        const A = Ww({ width: l, height: c }, ne, ue);
        [
          !A.fallback || y(A.fallback.rect, xo(A.fallback.shot)),
          y(A.rect, xo(A.shot)),
          !A.fallback || y(ne, xo(ue))
        ].every(Boolean) || (T = "loading");
      } else
        T = "empty";
    else {
      const A = i.lastCutoutShot;
      A ? (i.view = Rg(A, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), S ? y(u, ha(i.view, l, c)) || (T = "loading") : m ? T = "loading" : T = "empty";
    }
    S || n.release(), n.failed && T === "loading" && (T = "none"), ue && (i.lastCutoutShot = { ...ue }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(ne.x, ne.y, ne.w, ne.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(ne.x + 0.5, ne.y + 0.5, Math.max(0, ne.w - 1), Math.max(0, ne.h - 1)), d.restore()), T === "loading" ? (Kl(e, !1), no(e, !0, G)) : T === "empty" ? (Kl(e, !0), no(e, !1, "")) : (Kl(e, !1), no(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let K = !1;
  (!m || S) && (g = b(), !g.background && !g.layers.length ? (n.release(), K = !0) : K = y(u, ha(i.view, l, c)));
  const H = !K && !n.failed;
  no(e, H, H ? String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "") : ""), H && Cx(d, u, np(t, u));
  const D = $c(e, l, c);
  !m && K && qx(d, D, np(t, u));
  const N = String(((de = s == null ? void 0 : s.active) == null ? void 0 : de.selected_sticker_id) || ""), $ = Cc(s, Pa(e)), V = K && e.__panoStudio !== !0 ? $.find((ue) => String((ue == null ? void 0 : ue.id) || "") === N && (ue == null ? void 0 : ue.visible) !== !1) : null;
  K && !f && $.filter((ue) => ue !== V && (ue == null ? void 0 : ue.visible) !== !1 && (ue.external || ue.source_kind === "external_image")).filter((ue) => !Wo(Ma(e, ue.id, null, { external: !0 }))).forEach((ue) => Dx(d, ue, D)), V && Rx(d, V, D);
}
function ip(e, t, n, r, i = 1) {
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
function qx(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(mn(c, a));
    ip(e, l, t, a === 0 ? i : r, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(mn(a, c));
    ip(e, l, t, r, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: mn(0, 0) },
    { name: "Right", dir: mn(90, 0) },
    { name: "Back", dir: mn(180, 0) },
    { name: "Left", dir: mn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * n));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * n);
  }), e.restore();
}
function zc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Xx(e, t, n = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function xn(e, t) {
  return Xx(e, t) ? !1 : (zc(e), !0);
}
function op() {
  var n;
  const e = (n = At == null ? void 0 : At.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Jx(e) {
  var n;
  if (!e) return;
  const t = (n = At == null ? void 0 : At.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Zx(e, t = 360, n = 260) {
  const r = lt(e);
  if (!r || r.userResized === !0 || r.standaloneBootSized === !0 || !Qg(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, r.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function Qx(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0)), o = lt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, n == null || n(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function sp(e, t = null, n = 0, r = 0, i = !0) {
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
      s.userResized = !0, t == null || t(), i && eM(e, 180, t);
    }
  };
}
function eM(e, t = 180, n = null) {
  if (!e) return;
  const r = lt(e);
  r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.resizeSettleTimer = setTimeout(() => {
    var i;
    r.resizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function co(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const tM = /* @__PURE__ */ new WeakMap();
function c0(e, t) {
  return ag(tM, e, t) ? !1 : (xx(e, t), o0(e), co(e), !0);
}
async function nM(e) {
  var n, r;
  const t = await J_(e, At, Yt);
  t && (c0(e, t), (r = (n = lt(e).dom) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function rM(e, t = {}) {
  var $e;
  const n = t.__allowStandalone === !0, r = lt(e), i = ln(e), o = wn(e), s = e0(e);
  if (s && !n) {
    sd(e);
    return;
  }
  s && Zx(e), r.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = r.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = r.mode !== "cutout";
  if (r.noPreview = t.noPreview === !0, r.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: ep(e)
  }.signature || ep(e), Lc(e), e == null || e.id, r.mode, e.addDOMWidget, Rc(e), ($e = r.dom) != null && $e.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, m = f ? 0 : 56, S = f ? 0 : jw, g = document.createElement("div");
  if (ux(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
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
    const ce = wa(Tc(
      e.addDOMWidget(Dc(), "preview", g, sp(e, null))
    ));
    co(e), r.dom = { widget: ce, root: g, requestDraw: () => {
    } };
    return;
  }
  const b = document.createElement("div");
  b.className = "pano-node-frame", b.style.cssText = [
    "position:absolute",
    "inset:0",
    "overflow:hidden"
  ].join(";");
  const y = zt({ label: "node.surface" });
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
  const K = document.createElement("div");
  K.style.cssText = [
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
  ].join(";"), K.textContent = "Connect ERP image", b.appendChild(y), b.appendChild(K), g.appendChild(b);
  const H = Rm(g), D = document.createElement("div");
  D && (D.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", D.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(D)), dx(e, 120, 120), co(e);
  let N = null;
  try {
    Qx(e, m, () => {
      var ce, Ne;
      return (Ne = (ce = r.dom) == null ? void 0 : ce.requestDraw) == null ? void 0 : Ne.call(ce);
    }), N = wa(Tc(e.addDOMWidget(
      Dc(),
      "preview",
      g,
      sp(
        e,
        () => {
          var ce, Ne;
          return (Ne = (ce = r.dom) == null ? void 0 : ce.requestDraw) == null ? void 0 : Ne.call(ce);
        },
        m,
        S,
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
  }, V = Fk(), W = () => {
    $.destroyed || ($.needsDraw = !0, !$.inTick && !$.raf && ($.raf = requestAnimationFrame(p)));
  }, ye = Qh(W), Se = /* @__PURE__ */ Ki(a ? {
    ...wg(en(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Tg(en(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ce) => ({ value: ce, label: ce }))
  });
  let me = null;
  if (a && e.__panoSceneStateV2) {
    const [ce, Ne] = [0, 1].map(() => {
      const Ge = Zo(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", b.appendChild(Ge), Ge;
    }), Ie = zt({ label: "node.still" });
    Ie.__panoFrameIdx = 0;
    const Ee = zt({ label: "node.port-still" });
    Ee.__panoFrameIdx = 0;
    const je = Mw({
      video: ce,
      stickerVideo: Ne,
      createImage: (Ge, Be) => {
        const ct = new Image();
        return ct.onload = Be, ct.onerror = Be, ct.src = Ge, ct;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => en(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: W,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Be;
        if (!(ce.videoWidth > 0 && ce.videoHeight > 0)) return;
        const Ge = Math.min(1, lx / ce.videoWidth);
        Ie.width = Math.round(ce.videoWidth * Ge), Ie.height = Math.round(ce.videoHeight * Ge), (Be = Ie.getContext("2d")) == null || Be.drawImage(ce, 0, 0, Ie.width, Ie.height), Ie.__panoFrameIdx += 1, W();
      },
      onStickerCapture: () => {
        var Ge;
        Ne.videoWidth > 0 && Ne.videoHeight > 0 && (Ee.width = Ne.videoWidth, Ee.height = Ne.videoHeight, (Ge = Ee.getContext("2d")) == null || Ge.drawImage(Ne, 0, 0), Ee.__panoFrameIdx += 1, W());
      },
      onChange: () => {
        Se.playing = je.playing, W();
      }
    });
    me = { playback: je, video: ce, still: Ie, stickerVideo: Ne, stickerStill: Ee, stickerSource: "" }, r.playback = me;
  }
  const ie = () => {
    var at;
    const { playback: ce, still: Ne, stickerStill: Ie } = me, Ee = Hs(b, !!((at = e.flags) != null && at.collapsed), Vl(e)), je = ce.source, Ge = Ee ? Vx(e) : null, Be = en(e), ct = ce.follow({
      shown: Ee,
      sources: Ee ? Lx(e) : [],
      state: Be,
      sticker: Ge,
      media: Ee ? $x(e, Be) : {}
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== me.stickerSource && (me.stickerSource = (Ge == null ? void 0 : Ge.src) || "", Xr(Ie)), ce.source !== je && (Xr(Ne), Ne.__panoFrameIdx = 0), Se.playable = ct, Se.playing = ce.playing;
  }, ke = () => {
    var Ne, Ie;
    const ce = ((Ne = i.ownOutputVideo) == null ? void 0 : Ne.player) ?? null;
    ce && !Hs(b, !!((Ie = e.flags) != null && Ie.collapsed)) && ce.pause(), a && (Se.playable = !!ce && !ce.failed(), Se.playing = !!(ce != null && ce.playing));
  }, de = () => {
    var ce;
    me == null || me.playback.pause(), (ce = i.ownOutputVideo) == null || ce.player.pause();
  };
  let ue = null;
  const B = (a ? kw : Bw)({
    readState: () => en(e),
    publishLiveState: (ce) => {
      ce ? (ue = ce, o.liveState = ce) : (o.liveState === ue && (o.liveState = null), ue = null), o.liveStateVersion += 1, o.parsedState = null, W();
    },
    commitState: (ce) => {
      var Ee, je, Ge, Be;
      const Ne = Vn(e, "state_json");
      if (!Ne) return;
      Ch(e, ce.active);
      const Ie = Ih(e, ce, String(Ne.value ?? ""));
      Ie !== null && (Ne.value = Ie, (Ee = Ne.callback) == null || Ee.call(Ne, Ie), o.parsedState = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Be = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || Be.call(Ge, !0, !0));
    },
    onChange: (ce) => Object.assign(Se, ce)
  }), ne = a ? Bg(e, (ce = "sync", Ne = null) => {
    var Zt;
    if (!a || !e.graph || !B || B.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const jt = bt(e, "external-sticker");
      return B.apply({
        type: "sync-port",
        value: vg(e, {
          pose: jt ? $n(e, "pano_sticker_input_pose", Ne) : null,
          handoff: bt(e, "sticker-handoff") ? $n(e, "pano_sticker_handoff", Ne) : null
        })
      });
    }
    const Ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((jt) => String((jt == null ? void 0 : jt.name) || "") === "sticker_image") : -1, Ee = Ie >= 0 ? ((Zt = e.getInputLink(Ie)) == null ? void 0 : Zt.id) ?? null : null;
    if (Ee == null)
      return B.apply({ type: "sync-external", value: { connected: !1 } });
    if (!bt(e, "external-sticker")) return !1;
    const je = $n(e, "pano_sticker_input_pose", Ne), Ge = Array.isArray(je) ? je[0] : je, Be = String($n(e, "pano_sticker_input_state_hash", Ne) ?? ""), ct = r.view || { yaw: 0, pitch: 0 }, at = en(e), St = (Array.isArray(at == null ? void 0 : at.stickers) ? at.stickers : []).find((jt) => String((jt == null ? void 0 : jt.id) || "") === "sticker_image_1"), st = Ma(e, "sticker_image_1", null, { external: !0 }), Mt = Ge && typeof Ge == "object" ? Ge : St || { yaw_deg: ct.yaw, pitch_deg: ct.pitch, hFOV_deg: 30, rot_deg: 0 };
    return B.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ee,
        stateHash: Be,
        pose: Mt,
        imageWidth: Number((st == null ? void 0 : st.naturalWidth) || (st == null ? void 0 : st.width) || 0),
        imageHeight: Number((st == null ? void 0 : st.naturalHeight) || (st == null ? void 0 : st.height) || 0)
      }
    });
  }) : () => {
  };
  let T = 0;
  const G = async (ce) => {
    if (!a || !B || !Ln(ce)) return !1;
    de();
    const Ne = `asset_${Math.random().toString(16).slice(2, 10)}`, Ie = `st_${Math.random().toString(16).slice(2, 10)}`, Ee = { ...r.view || { yaw: 0, pitch: 0 } };
    T += 1, Se.importing = !0;
    const je = ao(e, `add:${Ne}`, async () => {
      const Ge = await lo(ce), Be = await qr(ce, {
        fetchApi: (ct, at) => Yt.fetchApi(ct, at)
      });
      return M(), B.apply({
        type: "add-sticker",
        value: {
          stickerId: Ie,
          assetId: Ne,
          asset: Be,
          imageWidth: Ge.width,
          imageHeight: Ge.height,
          yaw_deg: Number(Ee.yaw || 0),
          pitch_deg: Number(Ee.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      T = Math.max(0, T - 1), Se.importing = T > 0, W();
    }
  };
  let A = null, pe = null, P = null, I = !1;
  const w = () => {
    var ce;
    return P && (clearTimeout(P), P = null), I ? (I = !1, ((ce = B == null ? void 0 : B.commitGesture) == null ? void 0 : ce.call(B)) ?? !1) : !1;
  }, M = () => {
    var Ee, je, Ge;
    const ce = w(), Ne = (A == null ? void 0 : A.pointerId) ?? (pe == null ? void 0 : pe.pointerId);
    if (A = null, pe = null, Ne != null) {
      try {
        (Ee = y.hasPointerCapture) != null && Ee.call(y, Ne) && ((je = y.releasePointerCapture) == null || je.call(y, Ne));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ie = ((Ge = B == null ? void 0 : B.commitGesture) == null ? void 0 : Ge.call(B)) ?? !1;
    return ce || Ie;
  }, ae = () => {
    var Ee, je, Ge;
    const ce = w(), Ne = A == null ? void 0 : A.pointerId;
    if (A = null, Ne != null) {
      try {
        (Ee = y.hasPointerCapture) != null && Ee.call(y, Ne) && ((je = y.releasePointerCapture) == null || je.call(y, Ne));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ie = ((Ge = B == null ? void 0 : B.cancelGesture) == null ? void 0 : Ge.call(B)) ?? !1;
    return ce || Ie;
  }, ee = () => M();
  B && o.flushers.add(ee);
  let R = null, v = !1;
  if (D && B)
    try {
      nd(), R = du(l ? Mk : a ? vk : dk, {
        model: Se,
        onAction: (ce) => {
          var Ee, je, Ge;
          if ((ce == null ? void 0 : ce.type) === "toggle-playback") {
            M(), me ? me.playback.toggle() : (Ee = i.ownOutputVideo) == null || Ee.player.toggle(), W();
            return;
          }
          if (de(), (ce == null ? void 0 : ce.type) === "open-editor") {
            M(), a || (Se.aspectOpen = !1), (je = r.openEditor) == null || je.call(r);
            return;
          }
          if (a) {
            if ((ce == null ? void 0 : ce.type) === "add-image-file") {
              G(ce.file);
              return;
            }
            B.apply(ce) && W();
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
          let Ne = ce;
          if ((ce == null ? void 0 : ce.type) === "add-frame") {
            const Be = r.view || { yaw: 0, pitch: 0, fov: 100 };
            Ne = {
              ...ce,
              ...Gw(Be, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((ce == null ? void 0 : ce.type) === "delete-frame") {
            const Be = ni(en(e));
            Be && (r.view = Rg(Be, {
              width: y.width,
              height: y.height
            }));
          }
          const Ie = ((Ge = r.cutoutFrame) == null ? void 0 : Ge.safeRect) || null;
          Se.aspectOpen = !1, B.apply({ ...Ne, safeRect: Ie }) && W();
        }
      }), R.mount(D), v = !0;
    } catch {
      R = null, v = !1;
    }
  const U = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    me && ie(), W();
  }) : null;
  U == null || U.observe(b);
  const p = (ce) => {
    var Ie, Ee, je;
    $.raf = 0, $.inTick = !0;
    let Ne = !1;
    try {
      if (Ne = h.stepInertia(ce), $.needsDraw || Ne) {
        $.needsDraw = !1, me ? ie() : ke();
        const Ge = l ? Hx(e, me) : null, Be = Ge ? Ik(Ge) : null, ct = () => l0(e, en(e)), at = Ge && Hs(b, !!((Ie = e.flags) != null && Ie.collapsed), Vl(e)) ? Wx(e, Be) : null;
        if (!((Ee = e.flags) != null && Ee.collapsed) && !Vl(e) ? Yx(e, y, ye, at) : ye.release(), Se.viewUnavailable = ye.failed, l) {
          const St = V({ ...Ge, display: Ux(e, Be) }, ct);
          St && (Se.status = St);
        }
      }
    } finally {
      $.inTick = !1;
    }
    (Ne || $.needsDraw) && !$.raf && ($.raf = requestAnimationFrame(p)), cx() && (!r.debugLastTs || ce - r.debugLastTs > 1200) && (r.debugLastTs = ce, r.mode, Rc(e), to(g), to(b), to(y), to(g.parentElement), to((je = g.parentElement) == null ? void 0 : je.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, h = pu({
    getView: () => (r.view || (r.view = { yaw: 0, pitch: 0, fov: 100 }), r.view),
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
      const ce = Qf();
      return {
        x: ce.invert_view_x ? -1 : 1,
        y: ce.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      W();
    }
  }), x = a ? b : g, F = (ce) => {
    const Ne = y.getBoundingClientRect();
    return {
      x: (Number(ce.clientX) - Ne.left) * (y.width / Math.max(1, Ne.width)),
      y: (Number(ce.clientY) - Ne.top) * (y.height / Math.max(1, Ne.height))
    };
  }, L = (ce) => {
    var Ee, je;
    if (!a || l || !d) return;
    const Ne = en(e), Ie = Yf(
      Cc(Ne, Pa(e)),
      String(((Ee = Ne == null ? void 0 : Ne.active) == null ? void 0 : Ee.selected_sticker_id) || ""),
      F(ce),
      $c(e, y.width, y.height)
    );
    if (!Ie) {
      y.style.cursor = "grab";
      return;
    }
    if (((je = Ie.item) == null ? void 0 : je.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Ie.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (ce) => {
    var ct, at, St, st, Mt, Ye, Zt, jt, fi, pi, mi;
    if (!xn(ce, x) || ce.button !== 0) return;
    if (!a) {
      const Gt = ni(en(e)), Re = r.cutoutFrame;
      if (!Gt) {
        (ct = g.focus) == null || ct.call(g, { preventScroll: !0 }), (at = y.setPointerCapture) == null || at.call(y, ce.pointerId), y.style.cursor = "grabbing", h.startDrag(ce.clientX, ce.clientY, ce.pointerId);
        return;
      }
      if (Gt.locked === !0 || !Re || !B) return;
      const Ke = F(ce);
      let We;
      if (ce.shiftKey) {
        const Pt = Vg({
          frame: Re,
          point: Ke,
          startRollDeg: Number(Gt.roll_deg ?? Gt.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Pt) return;
        We = { kind: "roll", pointerId: ce.pointerId, rollGesture: Pt };
      } else {
        const Pt = ((St = en(e)) == null ? void 0 : St.ui_settings) || Qf();
        We = {
          kind: "pan",
          pointerId: ce.pointerId,
          startPoint: Ke,
          startShot: { ...Gt },
          focalPx: oi(Re, Gt),
          invertX: Pt.invert_view_x === !0,
          invertY: Pt.invert_view_y === !0
        };
      }
      M(), (st = g.focus) == null || st.call(g, { preventScroll: !0 }), (Mt = y.setPointerCapture) == null || Mt.call(y, ce.pointerId), y.style.cursor = "grabbing", B.beginGesture(), A = We;
      return;
    }
    if (!d) return;
    const Ne = F(ce), Ie = en(e), Ee = String(((Ye = Ie == null ? void 0 : Ie.active) == null ? void 0 : Ye.selected_sticker_id) || ""), je = $c(e, y.width, y.height);
    (Zt = g.focus) == null || Zt.call(g, { preventScroll: !0 });
    const Ge = () => Yf(Cc(Ie, Pa(e)), Ee, Ne, je);
    let Be = l ? null : Ge();
    if (Be && (me != null && me.playback.playing) && (de(), Be = Ge()), Be && B) {
      if (h.stopMotion(), M(), String(((jt = Be.item) == null ? void 0 : jt.id) || "") !== Ee && B.apply({ type: "select-sticker", id: Be.item.id }), ((fi = Be.item) == null ? void 0 : fi.locked) === !0) {
        W();
        return;
      }
      const Gt = Ne, Re = Be.geometry.center;
      pe = {
        active: !0,
        kind: Be.hit.kind,
        pointerId: ce.pointerId,
        startPoint: Gt,
        startCenter: { ...Re },
        startSticker: { ...Be.item },
        startDistance: Math.max(1, Math.hypot(Gt.x - Re.x, Gt.y - Re.y)),
        startAngle: Math.atan2(Gt.y - Re.y, Gt.x - Re.x),
        projection: je
      }, B.beginGesture(), (pi = y.setPointerCapture) == null || pi.call(y, ce.pointerId), y.style.cursor = Be.hit.kind === "rotate" ? "grabbing" : Be.hit.kind === "move" ? "move" : Be.hit.cursor, W();
      return;
    }
    (mi = y.setPointerCapture) == null || mi.call(y, ce.pointerId), y.style.cursor = "grabbing", h.startDrag(ce.clientX, ce.clientY, ce.pointerId);
  }), y.addEventListener("pointermove", (ce) => {
    if (!a) {
      if (!A) {
        if (!h.state.drag.active) return;
        xn(ce, x), h.moveDrag(ce.clientX, ce.clientY, "pano");
        return;
      }
      if (A.pointerId !== ce.pointerId || !B) return;
      if (xn(ce, x), A.kind === "pan") {
        const Ie = F(ce);
        B.updateGesture({
          type: "pan-camera",
          startShot: A.startShot,
          dx: Ie.x - A.startPoint.x,
          dy: Ie.y - A.startPoint.y,
          focalPx: A.focalPx,
          invertX: A.invertX,
          invertY: A.invertY
        });
        return;
      }
      const Ne = $g(A.rollGesture, F(ce), ce);
      if (!Ne) return;
      A.rollGesture = Ne.gesture, B.updateGesture({ type: "set-roll", value: Ne.rollDeg });
      return;
    }
    if (!pe && !h.state.drag.active) {
      L(ce);
      return;
    }
    if (pe) {
      if (pe.pointerId !== ce.pointerId || !B) return;
      xn(ce, x);
      const Ne = F(ce);
      let Ie = pe.startSticker;
      if (pe.kind === "move")
        Ie = Lk(
          pe.startSticker,
          {
            x: pe.startCenter.x + Ne.x - pe.startPoint.x,
            y: pe.startCenter.y + Ne.y - pe.startPoint.y
          },
          pe.projection
        );
      else if (pe.kind === "scale") {
        const Ee = Math.hypot(Ne.x - pe.startCenter.x, Ne.y - pe.startCenter.y);
        Ie = Vk(pe.startSticker, pe.startDistance, Ee);
      } else if (pe.kind === "rotate") {
        const Ee = Math.atan2(Ne.y - pe.startCenter.y, Ne.x - pe.startCenter.x);
        Ie = $k(pe.startSticker, pe.startAngle, Ee, ce.shiftKey === !0);
      }
      B.updateGesture({ type: "set-transform", value: Ie }), W();
      return;
    }
    !d || !h.state.drag.active || (xn(ce, x), h.moveDrag(ce.clientX, ce.clientY, "pano"));
  });
  const J = () => {
    var Ne, Ie;
    if (!A && !pe) {
      if (!h.state.drag.active) return;
      h.endDrag(), y.style.cursor = "grab", W();
      return;
    }
    if (!B) return;
    const ce = (A == null ? void 0 : A.pointerId) ?? (pe == null ? void 0 : pe.pointerId);
    A = null, pe = null;
    try {
      (Ne = y.hasPointerCapture) != null && Ne.call(y, ce) && ((Ie = y.releasePointerCapture) == null || Ie.call(y, ce));
    } catch {
    }
    B.cancelGesture(), y.style.cursor = "grab", W();
  }, le = (ce, Ne = !1) => {
    var Ie, Ee, je, Ge;
    if (!a) {
      if (!A) {
        if (!h.state.drag.active) return;
        xn(ce, x), (Ie = y.releasePointerCapture) == null || Ie.call(y, ce.pointerId), y.style.cursor = "grab", h.endDrag(), W();
        return;
      }
      if (A.pointerId !== ce.pointerId || !B) return;
      xn(ce, x), A = null, (Ee = y.releasePointerCapture) == null || Ee.call(y, ce.pointerId), y.style.cursor = "grab", Ne ? B.cancelGesture() : B.commitGesture(), L(ce), W();
      return;
    }
    if (pe) {
      if (pe.pointerId !== ce.pointerId || !B) return;
      xn(ce, x), pe = null, (je = y.releasePointerCapture) == null || je.call(y, ce.pointerId), y.style.cursor = "grab", Ne ? B.cancelGesture() : B.commitGesture(), W();
      return;
    }
    !d || !h.state.drag.active || (xn(ce, x), (Ge = y.releasePointerCapture) == null || Ge.call(y, ce.pointerId), y.style.cursor = "grab", h.endDrag(), W());
  };
  y.addEventListener("pointerup", le), y.addEventListener("pointercancel", (ce) => le(ce, !0)), y.addEventListener("lostpointercapture", J), y.addEventListener("pointerleave", (ce) => {
    !a && A || pe || h.state.drag.active && le(ce);
  });
  const k = (ce) => {
    const Ne = document.activeElement;
    if (Ne !== g && !g.contains(Ne)) return;
    if (ce.key === "Escape" && (A || pe) && B) {
      J(), zc(ce);
      return;
    }
    if (!a || l || ce.key !== "Delete" && ce.key !== "Backspace" || !B) return;
    const Ie = ce.target, Ee = String((Ie == null ? void 0 : Ie.tagName) || "").toUpperCase();
    Ee === "INPUT" || Ee === "TEXTAREA" || Ie != null && Ie.isContentEditable || Se.canDelete === !0 && (de(), M(), B.apply({ type: "delete-selected" }) && W(), zc(ce));
  };
  window.addEventListener("keydown", k, !0);
  const j = ox({
    requestFrame: (ce) => requestAnimationFrame(ce),
    cancelFrame: (ce) => cancelAnimationFrame(ce),
    restore: (ce) => Jx(ce)
  }), _ = (ce) => {
    var Ie, Ee, je, Ge, Be, ct;
    if (!xn(ce, x)) return;
    if (!a) {
      const at = ni(en(e));
      if (at && at.locked !== !0 && B) {
        const St = ta(ce);
        St !== 0 && (I || (M(), B.beginGesture(), I = !0), B.updateGesture({
          type: "step-fov",
          direction: St
        }) ? (P && clearTimeout(P), P = setTimeout(w, 180), W()) : B.hasGestureChanges() || (B.cancelGesture(), I = !1));
      } else if (!at) {
        const St = op();
        h.applyWheelEvent(ce) && W(), j.schedule(St);
      }
      (Ie = ce.preventDefault) == null || Ie.call(ce), (Ee = ce.stopPropagation) == null || Ee.call(ce), (je = ce.stopImmediatePropagation) == null || je.call(ce);
      return;
    }
    if (!d) return;
    const Ne = op();
    h.applyWheelEvent(ce) && W(), (Ge = ce.preventDefault) == null || Ge.call(ce), (Be = ce.stopPropagation) == null || Be.call(ce), (ct = ce.stopImmediatePropagation) == null || ct.call(ce), j.schedule(Ne);
  }, O = a ? [b, y] : [b];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ce) => {
    O.forEach((Ne) => Ne.addEventListener(ce, _, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ce) => {
    y.addEventListener(ce, (Ne) => xn(Ne, x)), b.addEventListener(ce, (Ne) => xn(Ne, x));
  });
  const Y = Vn(e, "state_json");
  let ve = null, _e = null;
  Y && !Y.__panoPreviewPatchedCb && (ve = Y.callback, _e = (ce) => {
    const Ne = ve ? ve(ce) : void 0;
    return W(), Ne;
  }, Y.callback = _e, Y.__panoPreviewPatchedCb = _e);
  const xe = Vn(e, "bg_color");
  let Z = null, be = null;
  xe && !xe.__panoPreviewPatchedCb && (Z = xe.callback, be = (ce) => {
    const Ne = Z ? Z(ce) : void 0;
    return W(), Ne;
  }, xe.callback = be, xe.__panoPreviewPatchedCb = be);
  const z = l ? Vn(e, "output_size") : null, oe = z == null ? void 0 : z.callback, q = z ? (ce) => {
    const Ne = oe ? oe(ce) : void 0;
    return W(), Ne;
  } : null;
  z && (z.callback = q);
  const re = e.onRemoved, Q = e.onResize, te = e.onExecuted, X = e.onDragOver, C = e.onDragDrop;
  let se = null;
  const fe = () => {
    a && (Se.dropActive = !0, se && clearTimeout(se), se = setTimeout(() => {
      se = null, Se.dropActive = !1;
    }, 140));
  }, we = c ? function(ce) {
    return (X ? X.apply(this, arguments) : !1) === !0 ? !0 : id(ce == null ? void 0 : ce.dataTransfer) ? (fe(), !0) : !1;
  } : null, E = c ? function(ce) {
    var Ee;
    if ((C ? C.apply(this, arguments) : !1) === !0) return !0;
    const Ie = Array.from(((Ee = ce == null ? void 0 : ce.dataTransfer) == null ? void 0 : Ee.files) || []).find((je) => Ln(je));
    return Ie ? (se && clearTimeout(se), se = null, Se.dropActive = !1, G(Ie), !0) : !1;
  } : null;
  c && (e.onDragOver = we, e.onDragDrop = E);
  const ge = c ? ix(g, {
    onActive: (ce) => {
      if (ce) {
        fe();
        return;
      }
      se && clearTimeout(se), se = null, Se.dropActive = !1;
    },
    onDrop: (ce) => {
      G(ce);
    }
  }) : () => {
  }, Pe = function(ce) {
    i.outputFromRun = !0;
    const Ne = c0(e, ce);
    Cr(e, Ne ? "executed" : "sync", ce), W();
    const Ie = te ? te.apply(this, arguments) : void 0;
    return co(e), Ie;
  };
  e.onExecuted = Pe;
  const Ce = e.onConnectionsChange, Te = function(ce, Ne) {
    const Ie = Lf(e, ce, Ne, [...Hu, ...Gu]), Ee = Lf(e, ce, Ne, In), je = arguments, Ge = Ce ? Ce.apply(this, je) : void 0, Be = () => {
      $.destroyed || (Ee && Ax(e), Ie && Cr(e, "connection-change"), co(e), W());
    };
    return Be(), queueMicrotask(Be), Ge;
  };
  e.onConnectionsChange = Te;
  const Le = function() {
    const ce = Q ? Q.apply(this, arguments) : void 0;
    return lt(this).userResized = !0, W(), ce;
  };
  e.onResize = Le;
  const ze = function() {
    return Ae(), Vc.unregister(this), re ? re.apply(this, arguments) : void 0;
  };
  e.onRemoved = ze;
  const Ae = () => {
    var ce, Ne, Ie, Ee, je, Ge, Be;
    $.destroyed = !0, (ce = U == null ? void 0 : U.disconnect) == null || ce.call(U), a ? M() : ae(), y.removeEventListener("lostpointercapture", J), ge(), H(), window.removeEventListener("keydown", k, !0), o.flushers.delete(ee), (Ne = B == null ? void 0 : B.destroy) == null || Ne.call(B), (Ie = R == null ? void 0 : R.unmount) == null || Ie.call(R), me && (me.playback.dispose(), me.video.remove(), me.stickerVideo.remove(), Xr(me.still), Xr(me.stickerStill), r.playback === me && (r.playback = null)), ye.dispose(), r.scene = null, (je = (Ee = r.rasterCache) == null ? void 0 : Ee.dispose) == null || je.call(Ee), r.rasterCache = null, r.rasterReady = null, r.paintEngine = null, r.paintState = null, r.paintRevision = null, ne(), j.dispose(), se && clearTimeout(se), se = null, od.disposeOwner(e), Ti(e), ld(e), $.raf && cancelAnimationFrame($.raf), $.raf = 0, ((Ge = r.cutout) == null ? void 0 : Ge.session) === B && (r.cutout = null), ((Be = r.stickers) == null ? void 0 : Be.session) === B && (r.stickers = null), r.cutoutState = null, r.stickersState = null, r.cutoutFrame = null, r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.dom = null, r.restore = null, e.onResize === Le && (e.onResize = Q), e.onExecuted === Pe && (e.onExecuted = te), e.onConnectionsChange === Te && (e.onConnectionsChange = Ce), _e && (Y == null ? void 0 : Y.callback) === _e && (Y.callback = ve), _e && (Y == null ? void 0 : Y.__panoPreviewPatchedCb) === _e && delete Y.__panoPreviewPatchedCb, be && (xe == null ? void 0 : xe.callback) === be && (xe.callback = Z), be && (xe == null ? void 0 : xe.__panoPreviewPatchedCb) === be && delete xe.__panoPreviewPatchedCb, q && z.callback === q && (z.callback = oe), e.onDragOver === we && (e.onDragOver = X), e.onDragDrop === E && (e.onDragDrop = C), e.onRemoved === ze && (e.onRemoved = re);
  };
  r.restore = Ae, r.cutout = B && v && !a ? { session: B, model: Se } : null, r.stickers = B && v && a ? { session: B, model: Se } : null, r.dom = {
    widget: N,
    root: g,
    canvas: y,
    requestDraw: W,
    state: $,
    emptyHintEl: K,
    nodeSurface: r.cutout
  }, Vc.register(e), e.graph && Cr(e, "attach"), W();
}
function ap(e, t = {}) {
  t0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function lp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (e0(e) && !n) {
    sd(e);
    return;
  }
  t0(e).attach(t);
}
function iM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function oM(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(n), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let m = f > 0 ? Math.min(1, u / f) : 1;
  return r && l > 0 && c > 0 && (m = Math.min(m, r.width * o / l, r.height * o / c)), {
    width: Math.max(1, Math.round(l * m)),
    height: Math.max(1, Math.round(c * m))
  };
}
function sM({
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
    var S, g, b;
    if (!s) {
      if (s = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", d), l())
        try {
          const y = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (b = y == null ? void 0 : y.catch) == null || b.call(y, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const aM = { class: "pano-preview-node-surface" }, lM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Oe(), De("div", aM, [
      Ue(Vt, {
        icon: e.model.fullscreen ? Je(He).fullscreen_close : Je(He).fullscreen,
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
      e.model.viewUnavailable ? (Oe(), gn(Qa, { key: 0 })) : tt("", !0)
    ]));
  }
}, ws = 140, cM = 180, cp = 40, Wl = 10;
function up(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function dp(e, t) {
  const n = up(e), r = up(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function fp(e) {
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
  return typeof ((o = Yt) == null ? void 0 : o.apiURL) == "function" ? Yt.apiURL(i) : i;
}
function Di(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Di(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return fp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Di(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : fp(e);
}
function u0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function uM(e) {
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
function jc(e) {
  var i;
  const t = (i = zn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (dp(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (dp(o, n)) return t[o];
  return null;
}
function dM(e) {
  var r, i;
  const t = jc(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const s of o) {
        const a = Di(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function fM(e, t = "erp_image") {
  var m, S, g, b, y, K, H;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((D) => String((D == null ? void 0 : D.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((D, N) => String((D == null ? void 0 : D.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(N))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (S = (m = zn) == null ? void 0 : m.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : g.call(S, o), a = jc(o), l = jc(e == null ? void 0 : e.id), c = [
    (b = l == null ? void 0 : l.ui) == null ? void 0 : b.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const D of c)
    if (Array.isArray(D))
      for (const N of D) {
        const $ = Di(N);
        if ($) return $;
      }
  let d = [];
  try {
    d = typeof ((K = zn) == null ? void 0 : K.getNodeImageUrls) == "function" ? zn.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const D of d) {
      const N = Di(D);
      if (N) return N;
    }
  if (s) {
    const D = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const N of D) {
      const $ = Di(N);
      if ($) return $;
    }
  }
  const u = (H = s == null ? void 0 : s.widgets) == null ? void 0 : H.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? Yt.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Ul(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function pp(e, t, n, r, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !u0(o) || n <= 1 || r <= 1) {
    Ul(t, n, r);
    return;
  }
  if (s.failed) {
    Ul(t, n, r);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: n,
    height: r,
    camera: ha(i, n, r),
    background: { media: o, revision: uM(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, n, r) : Ul(t, n, r);
}
function mp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class pM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Qh(() => this.requestDraw()), this.controller = pu({
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
        `min-height:${ws}px`,
        "position:relative",
        "display:block",
        "overflow:hidden"
      ].join(";"), this.canvas = zt({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return ws;
        },
        getHeight() {
          return ws;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = wa(Tc(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(ws, Number(o.minHeight || 0)),
            minWidth: Math.max(cM, Number(o.minWidth || 0))
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
      return nd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Ki({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = sM({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = du(lM, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), pr(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, pr(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Rm(n), t.addEventListener("pointerdown", (o) => {
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
      iM(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !u0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Hs(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = zn.canvas) != null && r.graph) || this.node.graph === zn.canvas.graph);
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
      return mp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const o = Ox(this, n, r, i), s = t.getLegacyPreviewRect();
      if (!o || !mp(o.x, o.y, s))
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
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - Wl * 2), n = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - cp - Wl);
    return { x: Wl, y: cp, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), pp(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Zh : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = oM(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = dM(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Zo(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const n = fM(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), pp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, s, a, l, c, d, u, f, m, S, g, b, y;
    if (((n = cg(this.node)) == null ? void 0 : n.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, pr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (m = this.root) == null ? void 0 : m.remove) == null || S.call(m);
    } catch {
    }
    try {
      Jg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (b = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), pr(this.node).runtime = null;
  }
}
function mM(e, t = {}) {
  if (!e || pr(e).runtime) return;
  const n = new pM(e, t);
  pr(e).runtime = n, n.attach();
}
function d0(e, t, n) {
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
function cd(e) {
  return !!(e != null && e.prototype);
}
function Uo(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function hM(e, t = {}) {
  cd(e) || mM(e, {
    ...t,
    onOpen: Uo(e, t.onOpen)
  });
}
function gM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!cd(e)) {
    lp(e, {
      ...r,
      onOpen: Uo(e, t.onOpen)
    });
    return;
  }
  d0(e, "stickers_node_preview", (i) => {
    lp(i, {
      ...r,
      onOpen: Uo(i, t.onOpen)
    });
  });
}
function yM(e, t = {}) {
  if (!cd(e)) {
    ap(e, {
      ...t,
      onOpen: Uo(e, t.onOpen)
    });
    return;
  }
  d0(e, "cutout_preview", (n) => {
    ap(n, {
      ...t,
      onOpen: Uo(n, t.onOpen)
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
}, cr = "pen";
function hp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function bM({ requestFrame: e, cancelFrame: t, tasks: n }) {
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
const it = Object.freeze({
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
}), vM = new Set(Object.values(it));
function SM({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (b) {
      i(b);
    }
  }
  function m() {
    !o && !s && !a && (o = e(S));
  }
  function S(g) {
    o = 0, s = !0;
    try {
      const b = c;
      c = /* @__PURE__ */ new Map();
      for (const K of b.values()) f(() => K(g));
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
      if (!vM.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === it.STATE && (u += 1), l.add(g), m();
    },
    requestFrame(g) {
      const b = d++;
      return c.set(b, g), m(), b;
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
const _M = { class: "pano-floating-right" }, wM = {
  key: 0,
  class: "pano-floating-space"
}, kM = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, xM = ["data-settled"], MM = ["data-ready", "data-settled"], PM = ["aria-label", "data-tip"], NM = {
  key: 1,
  class: "pano-camera-preview-label"
}, AM = {
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
      Me("div", _M, [
        e.space ? hr((Oe(), De("div", wM, [
          Me("div", kM, [
            (Oe(!0), De(qe, null, mt(e.space.modes, (r) => (Oe(), gn(Vt, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ue(Vt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [ii, e.space.visible]
        ]) : tt("", !0),
        (Oe(!0), De(qe, null, mt(e.buttons, (r) => (Oe(), gn(Vt, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      hr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: ot(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: yt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = Me("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Me("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Oe(), De("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ue(xt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, PM)) : tt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Oe(), De("div", NM, Xe(e.preview.label || "Preview unavailable"), 1)) : tt("", !0)
        ], 14, MM)
      ], 8, xM), [
        [ii, e.preview.visible]
      ])
    ], 64));
  }
}, CM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, IM = ["y2", "transform"], EM = ["transform"], OM = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = nt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => hr((Oe(), De("div", {
      class: ot(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Oe(), De("svg", CM, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Oe(!0), De(qe, null, mt(Je(n), (s) => (Oe(), De("line", {
          key: s,
          class: ot(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, IM))), 128)),
        Me("g", { transform: r.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, EM),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [ii, e.model.visible === !0]
    ]);
  }
}, FM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Oe(), De("div", {
      class: ot(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ue(jg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ue(Vt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ue(OM, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, TM = ["aria-label"], DM = { class: "pano-canvas-confirm-title" }, RM = { class: "pano-canvas-confirm-text" }, LM = { class: "pano-canvas-confirm-actions" }, VM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, $M = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Dt(null), r = /* @__PURE__ */ Dt(null);
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
      const S = f[0], g = f[f.length - 1], b = document.activeElement;
      if (u.shiftKey) {
        (b === S || b === m || !(m != null && m.contains(b))) && (u.preventDefault(), g.focus());
        return;
      }
      (b === g || !(m != null && m.contains(b))) && (u.preventDefault(), S.focus());
    }
    function d(u) {
      u.target === n.value && s("confirm-cancel");
    }
    return ei(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, La(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Xo(() => {
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
      Me("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Me("div", DM, Xe(e.model.title), 1),
        Me("div", RM, Xe(e.model.text), 1),
        Me("div", LM, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", VM, Xe(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, TM)
    ], 512)) : tt("", !0);
  }
}, zM = ["data-paint-pane"], jM = ["hidden"], HM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], GM = ["aria-pressed", "disabled"], KM = ["hidden"], WM = { class: "pano-paint-color-pop-head" }, UM = { class: "pano-paint-color-field" }, BM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, YM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, qM = { class: "pano-paint-color-field" }, XM = { class: "pano-paint-alpha-wrap" }, JM = ["value"], ZM = { "data-paint-alpha-value": "" }, QM = ["hidden"], eP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, tP = ["data-paint-history-index", "aria-label", "disabled"], nP = ["data-paint-footer"], rP = ["data-paint-group"], iP = ["hidden"], oP = ["value", "disabled"], sP = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, aP = ["hidden"], lP = {
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
      class: ot(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Oe(!0), De(qe, null, mt(e.panes, (o) => {
        var s;
        return Oe(), De("div", {
          key: o.key,
          class: ot(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Oe(), De("div", {
            key: 0,
            class: ot(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Oe(!0), De(qe, null, mt(e.paintSwatches, (a) => (Oe(), De("button", {
              key: a.id,
              class: ot(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: yt(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, HM))), 128)),
            Me("button", {
              class: ot(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: yt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, GM),
            Me("div", {
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
              Me("div", WM, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: yt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", UM, [
                Me("div", BM, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: yt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", YM, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: yt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", qM, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", XM, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, JM),
                  Me("span", ZM, Xe(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", eP, [
                  (Oe(!0), De(qe, null, mt(e.state.historyEntries || [], (a) => (Oe(), De("button", {
                    key: a.index,
                    class: ot(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: yt(n(a.color))
                  }, null, 14, tP))), 128))
                ])
              ], 8, QM)
            ], 12, KM)
          ], 10, jM)) : tt("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Oe(!0), De(qe, null, mt(o.tools, (a) => {
                var l;
                return Oe(), gn(Vt, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, rP),
            Me("div", {
              class: ot(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: yt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, oP),
              Me("span", sP, Xe(e.state.sizeText || "10"), 1)
            ], 10, iP),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Ue(Vt, {
                icon: Je(He).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, aP)
          ], 8, nP)
        ], 10, zM);
      }), 128))
    ], 2));
  }
}, cP = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Dt(null), r = /* @__PURE__ */ Dt(null), i = /* @__PURE__ */ Dt(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Oe(), De(qe, null, [
      Me("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Me("div", {
        ref_key: "sizePreviewRef",
        ref: r,
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
}, uP = ["aria-label"], dP = ["data-tip", "aria-pressed"], fP = {
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
      (Oe(!0), De(qe, null, mt(e.buttons, (o) => (Oe(), De("button", lr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), Xe(o.label), 17, dP))), 128))
    ], 12, uP));
  }
}, pP = {
  key: 0,
  class: "pano-cutout-menu"
}, mP = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, hP = ["data-aspect"], gP = ["data-action", "aria-label", "data-tip", "disabled"], yP = {
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
        r.kind === "aspect" ? (Oe(), De("div", pP, [
          Me("button", mP, [
            Ue(xt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: ot(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Oe(!0), De(qe, null, mt(r.choices || [], (i) => (Oe(), De("button", {
              key: i.value,
              class: ot(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, Xe(i.label), 11, hP))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (Oe(), gn(fP, {
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
          Ue(xt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, gP))
      ], 64))), 128))
    ], 4));
  }
}, bP = {
  key: 0,
  class: "pano-easing"
}, vP = { class: "pano-section-title" }, SP = { class: "pano-easing-range" }, _P = { class: "pano-easing-modes" }, wP = ["aria-pressed", "onClick"], kP = ["viewBox"], xP = ["x", "y"], MP = ["x1", "y1", "x2", "y2"], PP = ["d"], NP = ["x1", "y1", "x2", "y2"], AP = ["x1", "y1", "x2", "y2"], CP = ["cx", "cy"], IP = ["cx", "cy"], EP = { class: "pano-easing-note" }, or = 132, Ur = 14, OP = {
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
    ], o = /* @__PURE__ */ Dt(null), s = nt(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), a = (S) => Ur + S * or, l = (S) => Ur + (1 - S) * or, c = nt(() => {
      var K;
      if (((K = n.model) == null ? void 0 : K.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [S, g, b, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(S)} ${l(g)} ${a(b)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = nt(() => s.value ? s.value.map((S) => S.toFixed(2)).join(", ") : "");
    function u(S) {
      var g;
      return JSON.stringify(S.easing) === JSON.stringify((g = n.model) == null ? void 0 : g.easing);
    }
    function f(S, g) {
      r("timeline", { type: "easing", easing: S, commit: g });
    }
    function m(S, g) {
      var D;
      if (S.button !== 0 || !s.value) return;
      const b = S.currentTarget;
      (D = b.setPointerCapture) == null || D.call(b, S.pointerId);
      let y = null;
      const K = (N) => {
        const $ = o.value.getBoundingClientRect(), V = $.width / (or + Ur * 2), W = ((N.clientX - $.left) / V - Ur) / or, ye = 1 - ((N.clientY - $.top) / V - Ur) / or;
        y = [...y || s.value], y[g] = Math.round(Math.min(1, Math.max(0, W)) * 100) / 100, y[g + 1] = Math.round(Math.min(1, Math.max(0, ye)) * 100) / 100, f(y, !1);
      }, H = () => {
        b.removeEventListener("pointermove", K), b.removeEventListener("pointerup", H), b.removeEventListener("pointercancel", H), y && f(y, !0);
      };
      b.addEventListener("pointermove", K), b.addEventListener("pointerup", H), b.addEventListener("pointercancel", H);
    }
    return (S, g) => e.model ? (Oe(), De("div", bP, [
      Me("div", vP, [
        g[2] || (g[2] = Me("span", null, "Easing", -1)),
        Me("span", SP, Xe(e.model.label), 1)
      ]),
      Me("div", _P, [
        (Oe(), De(qe, null, mt(i, (b) => Me("button", {
          key: b.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(b) ? "true" : "false",
          onClick: (y) => f(b.easing, !0)
        }, Xe(b.label), 9, wP)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Oe(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${or + Ur * 2} ${or + Ur * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: or,
          height: or
        }, null, 8, xP),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, MP),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, PP),
        s.value ? (Oe(), De(qe, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, NP),
          Me("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, AP),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (b) => m(b, 0))
          }, null, 40, CP),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (b) => m(b, 2))
          }, null, 40, IP)
        ], 64)) : tt("", !0)
      ], 8, kP)) : tt("", !0),
      Me("div", EP, [
        e.model.mixed ? (Oe(), De(qe, { key: 0 }, [
          io("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Oe(), De(qe, { key: 1 }, [
          io("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Oe(), De(qe, { key: 2 }, [
          io("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Oe(), De(qe, { key: 3 }, [
          io("cubic-bezier(" + Xe(d.value) + ")", 1)
        ], 64)) : tt("", !0)
      ])
    ])) : tt("", !0);
  }
}, FP = ["title"], TP = { class: "pano-ui-row" }, DP = ["disabled"], RP = { class: "pano-upstream-lanes" }, LP = ["data-action", "data-lane", "disabled", "title"], VP = {
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
      Me("div", TP, [
        n[0] || (n[0] = Me("label", null, "Revert to upstream", -1)),
        Me("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, DP)
      ]),
      Me("div", RP, [
        (Oe(!0), De(qe, null, mt(e.model.lanes, (r) => (Oe(), De("button", {
          key: r.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": r.action,
          "data-lane": r.name,
          disabled: r.disabled,
          title: `Revert ${r.label} to upstream`
        }, Xe(r.label), 9, LP))), 128))
      ])
    ], 8, FP)) : tt("", !0);
  }
}, $P = {
  class: "pano-side",
  "data-side": ""
}, zP = { class: "pano-side-head" }, jP = { class: "pano-side-title" }, HP = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, GP = {
  key: 0,
  class: "pano-side-scroll"
}, KP = { class: "pano-inspector" }, WP = { class: "pano-ui-row pano-coverage-row" }, UP = ["data-selected"], BP = ["aria-pressed", "disabled"], YP = ["aria-pressed", "disabled"], qP = {
  key: 0,
  class: "pano-section-title"
}, XP = { class: "meta" }, JP = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, ZP = {
  class: "pano-picker",
  "data-picker": "selection"
}, QP = ["disabled"], eN = { class: "pano-picker-label" }, tN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, nN = ["hidden"], rN = ["data-selection-id"], iN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, oN = {
  key: 2,
  class: "pano-state-actions"
}, sN = ["disabled"], aN = ["data-key"], lN = { class: "pano-field-group-values" }, cN = ["title", "onPointerdown"], uN = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], dN = ["data-key"], fN = ["min", "max", "step", "value", "disabled", "data-param-key"], pN = ["min", "max", "step", "value", "disabled", "data-param-key"], mN = ["open"], hN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, gN = { class: "pano-ui-settings-body" }, yN = { class: "pano-ui-row" }, bN = ["data-selected"], vN = ["aria-pressed"], SN = ["aria-pressed"], _N = { class: "pano-ui-row" }, wN = ["data-selected"], kN = ["aria-pressed"], xN = ["aria-pressed"], MN = {
  key: 1,
  class: "pano-side-footer"
}, PN = ["data-action"], NN = {
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
      const b = (K) => {
        if (!g && Math.abs(K.clientX - m) < 3) return;
        g = !0;
        const H = S + (K.clientX - m) * d.drag * (K.shiftKey ? 0.1 : 1);
        u.value = String(Number(H.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", b), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", b), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, m, S, g, b;
      return Oe(), De("div", $P, [
        Me("div", zP, [
          Me("div", jP, [
            Me("span", HP, [
              Ue(xt, {
                icon: Je(He).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, Xe(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Oe(), De("div", GP, [
          Me("div", KP, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", WP, [
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
                }, "360", 8, BP),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, YP)
              ], 8, UP)
            ]),
            e.model.transformTitle !== !1 ? (Oe(), De("div", qP, [
              d[3] || (d[3] = Me("span", null, "Transform", -1)),
              Me("span", XP, Xe(((b = e.model.upstream) == null ? void 0 : b.origin) || ""), 1)
            ])) : tt("", !0),
            e.model.selectionPicker ? (Oe(), De("div", JP, [
              Me("label", null, Xe(e.model.selectionPicker.label), 1),
              Me("div", ZP, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", eN, [
                    e.model.selectionPicker.currentIcon ? (Oe(), De("span", tN, [
                      Ue(xt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : tt("", !0),
                    Me("span", null, Xe(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, QP),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Oe(!0), De(qe, null, mt(e.model.selectionPicker.items || [], (y) => (Oe(), De("button", {
                    key: y.id,
                    type: "button",
                    class: ot(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Oe(), De("span", iN, [
                      Ue(xt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : tt("", !0),
                    Me("span", null, Xe(y.label), 1)
                  ], 10, rN))), 128))
                ], 8, nN)
              ])
            ])) : tt("", !0),
            e.model.copyStateButton ? (Oe(), De("div", oN, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ue(xt, {
                  icon: Je(He).copy
                }, null, 8, ["icon"]),
                Me("span", null, Xe(e.model.copyStateButton.label), 1)
              ], 8, sN)
            ])) : tt("", !0),
            Me("div", {
              class: ot(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
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
                  Me("label", null, Xe(y.label), 1),
                  Me("div", lN, [
                    (Oe(!0), De(qe, null, mt(y.fields, (K) => (Oe(), De("div", {
                      key: K.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: ot(["pano-axis", { disabled: s(K, e.model) }]),
                        title: K.label,
                        onPointerdown: (H) => l(H, K)
                      }, Xe(K.short), 43, cN),
                      Me("input", {
                        ref_for: !0,
                        ref: (H) => {
                          a[K.key] = H;
                        },
                        type: "number",
                        min: K.min,
                        max: K.max,
                        step: K.step,
                        value: K.displayValue,
                        disabled: s(K, e.model),
                        "aria-label": `${y.label} ${K.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": K.key
                      }, null, 8, uN)
                    ]))), 128))
                  ])
                ], 8, aN)) : (Oe(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Me("label", null, Xe(y.label), 1),
                  Me("input", {
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
                  }, null, 12, fN),
                  Me("input", {
                    type: "number",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].displayValue,
                    disabled: s(y.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": y.fields[0].key
                  }, null, 8, pN)
                ], 8, dN))
              ], 64))), 128))
            ], 2),
            Ue(VP, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Ue(OP, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => r("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Oe(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", hN, [
                  Ue(xt, {
                    icon: Je(He).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", gN, [
                Me("div", yN, [
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
                    }, "Normal", 8, vN),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, SN)
                  ], 8, bN)
                ]),
                Me("div", _N, [
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
                    }, "Normal", 8, kN),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, xN)
                  ], 8, wN)
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
            ], 8, mN)) : tt("", !0)
          ])
        ])) : tt("", !0),
        (e.model.footerButtons || []).length ? (Oe(), De("div", MN, [
          (Oe(!0), De(qe, null, mt(e.model.footerButtons, (y) => (Oe(), De("button", {
            key: y.action,
            class: ot(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, Xe(y.label), 11, PN))), 128))
        ])) : tt("", !0)
      ]);
    };
  }
}, AN = { class: "pano-timeline-group" }, CN = ["title"], IN = ["disabled"], EN = ["disabled"], ON = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, i) => (Oe(), De("div", AN, [
      Me("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, Xe(e.group.label), 9, CN),
      Me("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = pt((o) => n("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, IN),
      Me("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = pt((o) => n("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, Xe(e.group.restore.label), 9, EN)
    ]));
  }
}, FN = { class: "pano-timeline-bar" }, TN = ["disabled", "aria-label", "data-tip"], DN = ["aria-label", "data-tip"], RN = { class: "pano-timeline-time" }, LN = ["data-tip"], VN = { key: 0 }, $N = ["min", "max", "value"], zN = {
  class: "pano-timeline-setting pano-timeline-length",
  "data-tip": "Output length in frames"
}, jN = ["max", "value"], HN = ["disabled"], GN = ["aria-expanded"], KN = ["inert"], WN = { class: "pano-timeline-name" }, UN = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], BN = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, YN = ["disabled", "aria-expanded", "aria-label", "onClick"], qN = ["title", "aria-current", "onClick"], XN = ["role", "aria-label", "data-tip"], JN = ["disabled", "data-keyed", "aria-label", "onClick"], ZN = ["onPointerdown"], QN = ["onPointerdown"], e2 = ["onPointerdown"], t2 = ["onPointerdown"], n2 = ["aria-label", "data-tip", "onPointerdown"], r2 = { key: 0 }, i2 = ["onPointerdown"], o2 = ["aria-label", "data-tip", "onPointerdown"], s2 = { key: 0 }, a2 = 10, l2 = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Bs(0), playing: /* @__PURE__ */ Bs(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ Dt(null), o = /* @__PURE__ */ Dt(null), s = /* @__PURE__ */ Dt(1), a = /* @__PURE__ */ Dt(0), l = /* @__PURE__ */ Dt(!1);
    let c = null, d = null, u = null;
    $a(() => {
      c = new ResizeObserver(([ne]) => {
        s.value = Math.max(1, ne.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([ne]) => {
        a.value = ne.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Xo(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = nt(() => Math.max(1, Number(n.model.span || 1))), m = nt(() => n.playhead.frame.value), S = nt(() => n.playhead.playing.value), g = nt(() => rS(m.value, Number(n.model.fps || 1))), b = nt(() => s.value / f.value), y = (ne) => `${ne / f.value * 100}%`, K = nt(() => mS(f.value, b.value));
    function H(ne) {
      const T = i.value.getBoundingClientRect(), G = Math.floor((ne - T.left) / Math.max(1, T.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, G));
    }
    function D(ne, T, G) {
      const A = Math.ceil(a2 / Math.max(1e-6, b.value)), pe = T.filter((I) => I.frame < f.value), P = new Map(pe.map((I) => [I.frame, I.full]));
      return hS(pe.map((I) => I.frame), A).map((I, w) => ({
        ...I,
        key: `${ne}:${w}`,
        partial: I.frames.some((M) => !P.get(M)),
        selected: I.frames.some((M) => G.includes(M))
      }));
    }
    const N = nt(() => [
      ...(n.model.rows || []).map((ne) => ({ key: ne.id, row: ne })),
      ...(n.model.groups || []).flatMap((ne) => [
        { key: `group:${ne.key}`, group: ne },
        ...ne.rows.map((T) => ({ key: T.id, row: T }))
      ])
    ]), $ = nt(() => {
      const ne = /* @__PURE__ */ new Map();
      for (const { row: T } of N.value)
        if (T) {
          ne.set(T.id, D(T.id, T.keys, T.selectedFrames));
          for (const G of T.lanes) ne.set(G.key, D(G.key, G.frames.map((A) => ({ frame: A, full: !0 })), G.selectedFrames));
        }
      return ne;
    });
    function V(ne) {
      const T = ne.end === null ? f.value : Math.min(ne.end, f.value);
      return { left: y(ne.start), width: y(Math.max(0, T - ne.start)) };
    }
    function W(ne, T) {
      const G = ne.clientX, A = Math.max(1e-6, b.value);
      let pe = 0;
      T("start", 0, ne);
      const P = (w) => {
        if (w.pointerId !== ne.pointerId) return;
        const M = Math.round((w.clientX - G) / A);
        M !== pe && (pe = M, T("move", pe, w));
      }, I = (w) => {
        w.pointerId === ne.pointerId && (u(), T("end", pe, w));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", P), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), u = null;
      }, window.addEventListener("pointermove", P), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
    }
    function ye(ne) {
      ne.button === 0 && W(ne, (T, G, A) => r("action", { type: "seek", frame: H(A.clientX), phase: T }));
    }
    function Se(ne, T, G) {
      ne.button === 0 && (r("action", { type: "select-row", id: T.id }), W(ne, (A, pe) => r("action", { type: "clip", id: T.id, mode: G, delta: pe, phase: A })));
    }
    function me(ne, T, G, A, pe) {
      if (ne.button === 0) {
        if (ne.shiftKey) {
          r("action", { type: "select-keys", owner: T.id, lane: G, frames: A.frames, additive: !0 });
          return;
        }
        A.frames.every((P) => pe.includes(P)) || r("action", { type: "select-keys", owner: T.id, lane: G, frames: A.frames, additive: !1 }), W(ne, (P, I) => r("action", { type: "move-keys", delta: I, phase: P }));
      }
    }
    const ie = nt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function ke(ne, T, G) {
      r("action", T), await La(), ne.target.value = G();
    }
    function de(ne) {
      ke(ne, { type: "fps", fps: Number(ne.target.value) }, () => ie.value);
    }
    const ue = nt(() => String(n.model.length ?? f.value));
    function B(ne) {
      const T = ne.target.value.trim();
      if (!T) {
        ne.target.value = ue.value;
        return;
      }
      ke(ne, { type: "length", length: Number(T) }, () => ue.value);
    }
    function he(ne, T, G) {
      ne.button !== 0 || ne.target !== ne.currentTarget || r("action", { type: "select-keys", owner: T.id, lane: G, frames: [], additive: !1 });
    }
    return (ne, T) => hr((Oe(), De("section", {
      class: ot(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", FN, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          disabled: !e.model.playable,
          "aria-label": S.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": S.value ? "Pause (Space)" : "Play (Space)",
          onClick: T[0] || (T[0] = (G) => r("action", { type: "play" }))
        }, [
          Ue(xt, {
            icon: S.value ? Je(He).pause : Je(He).play
          }, null, 8, ["icon"])
        ], 8, TN),
        e.model.hasAudio ? (Oe(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: T[1] || (T[1] = (G) => r("action", { type: "mute" }))
        }, [
          Ue(xt, {
            icon: e.model.muted ? Je(He).volume_muted : Je(He).volume2
          }, null, 8, ["icon"])
        ], 8, DN)) : tt("", !0),
        Me("span", RN, Xe(g.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Oe(), De("span", VN, Xe(ie.value), 1)) : (Oe(), De("input", {
            key: 1,
            type: "number",
            min: Je(Qm),
            max: Je(vu),
            step: "any",
            value: ie.value,
            "aria-label": "Timeline fps",
            onChange: de
          }, null, 40, $N)),
          T[8] || (T[8] = Me("span", null, "fps", -1))
        ], 8, LN),
        Me("label", zN, [
          T[9] || (T[9] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: Je(Su),
            step: "1",
            value: ue.value,
            "aria-label": "Output length in frames",
            onChange: B
          }, null, 40, jN)
        ]),
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-length-reset",
          type: "button",
          disabled: e.model.length == null,
          "aria-label": "Reset length to the inputs",
          "data-tip": "Reset length to the inputs",
          onClick: T[2] || (T[2] = (G) => r("action", { type: "length", length: null }))
        }, [
          Ue(xt, {
            icon: Je(He).reset
          }, null, 8, ["icon"])
        ], 8, HN),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: T[3] || (T[3] = (G) => r("action", { type: "toggle-expanded" }))
        }, [
          T[10] || (T[10] = Me("span", null, "Timeline", -1)),
          Ue(xt, {
            icon: Je(He).chevron
          }, null, 8, ["icon"])
        ], 8, GN)
      ]),
      Me("div", {
        class: ot(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: yt({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: T[5] || (T[5] = pt((G) => l.value = !0, ["self"])),
        onTransitionend: T[6] || (T[6] = pt((G) => l.value = !1, ["self"])),
        onTransitioncancel: T[7] || (T[7] = pt((G) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          T[11] || (T[11] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ye
          }, [
            (Oe(!0), De(qe, null, mt(K.value, (G) => (Oe(), De("span", {
              key: G,
              class: "pano-timeline-tick",
              style: yt({ left: y(G) })
            }, Xe(G), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: yt({ left: y(m.value + 0.5) })
            }, null, 4)
          ], 544),
          (Oe(!0), De(qe, null, mt(N.value, ({ key: G, row: A, group: pe }) => (Oe(), De(qe, { key: G }, [
            pe ? (Oe(), gn(ON, {
              key: 0,
              group: pe,
              onAction: T[4] || (T[4] = (P) => r("action", P))
            }, null, 8, ["group"])) : tt("", !0),
            A ? (Oe(), De("div", {
              key: 1,
              class: ot(["pano-timeline-head", { selected: A.selected, "is-hidden": !A.visible }])
            }, [
              Me("div", WN, [
                A.hideable ? (Oe(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": A.visible ? "true" : "false",
                  disabled: !A.editable,
                  "aria-label": `${A.label} visible`,
                  "data-tip": A.editable ? A.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: pt((P) => r("action", { type: "toggle-visible", id: A.id }), ["stop"])
                }, [
                  Ue(xt, {
                    icon: A.visible ? Je(He).eye : Je(He).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, UN)) : (Oe(), De("span", BN)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !A.keyable,
                  "aria-expanded": A.open ? "true" : "false",
                  "aria-label": A.open ? `Hide ${A.label} parameters` : `Show ${A.label} parameters`,
                  onClick: pt((P) => r("action", { type: "toggle-row", id: A.id }), ["stop"])
                }, [
                  Ue(xt, {
                    icon: Je(He).chevron
                  }, null, 8, ["icon"])
                ], 8, YN),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: A.label,
                  "aria-current": A.selected ? "true" : void 0,
                  onClick: (P) => r("action", { type: "select-row", id: A.id })
                }, [
                  Ue(xt, {
                    icon: A.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, Xe(A.label), 1)
                ], 8, qN),
                A.upstream ? (Oe(), De("span", {
                  key: 2,
                  class: ot(["pano-timeline-override", { on: A.overridden }]),
                  role: A.overridden ? "img" : void 0,
                  "aria-label": A.overridden ? "Overridden in this node" : void 0,
                  "data-tip": A.overridden ? "Overridden in this node" : null
                }, null, 10, XN)) : tt("", !0),
                A.keyable ? (Oe(), De("button", {
                  key: 3,
                  class: ot(["pano-timeline-key", { keyed: Je(Al)(A.keys, m.value) }]),
                  type: "button",
                  disabled: !A.editable,
                  "data-keyed": Je(Al)(A.keys, m.value) ? "true" : "false",
                  "aria-label": Je(Al)(A.keys, m.value) ? `Every ${A.label} parameter has a keyframe here; update them` : `Add keyframes for every ${A.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: pt((P) => r("action", { type: "key-row", owner: A.id }), ["stop"])
                }, [
                  Ue(xt, {
                    icon: Je(He).keyframe
                  }, null, 8, ["icon"])
                ], 10, JN)) : tt("", !0)
              ]),
              A.open ? (Oe(!0), De(qe, { key: 0 }, mt(A.lanes, (P) => (Oe(), De("div", {
                key: P.key,
                class: "pano-timeline-lane-head"
              }, Xe(P.label), 1))), 128)) : tt("", !0)
            ], 2)) : tt("", !0),
            A ? (Oe(), De("div", {
              key: 2,
              class: ot(["pano-timeline-track", { selected: A.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (P) => he(P, A, null)
              }, [
                A.clip && A.clip.start < f.value ? (Oe(), De("div", {
                  key: 0,
                  class: ot(["pano-timeline-clip", { open: A.clip.end === null }]),
                  style: yt(V(A.clip)),
                  onPointerdown: pt((P) => Se(P, A, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: pt((P) => Se(P, A, "start"), ["stop"])
                  }, null, 40, e2),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: pt((P) => Se(P, A, "end"), ["stop"])
                  }, null, 40, t2)
                ], 46, QN)) : tt("", !0),
                (Oe(!0), De(qe, null, mt($.value.get(A.id), (P) => (Oe(), De("button", {
                  key: P.key,
                  type: "button",
                  class: ot(["pano-timeline-pin", { selected: P.selected, cluster: P.frames.length > 1, partial: P.partial }]),
                  style: yt({ left: y(P.frame + 0.5) }),
                  "aria-label": `${A.label}: ${P.frames.length > 1 ? `${P.frames.length} keyframes` : `keyframe at frame ${P.frames[0]}`}`,
                  "data-tip": P.frames.length > 1 ? `${P.frames.length} keyframes` : `Frame ${P.frames[0]}`,
                  onPointerdown: pt((I) => me(I, A, null, P, A.selectedFrames), ["stop"])
                }, [
                  P.frames.length > 1 ? (Oe(), De("span", r2, Xe(P.frames.length), 1)) : tt("", !0)
                ], 46, n2))), 128))
              ], 40, ZN),
              A.open ? (Oe(!0), De(qe, { key: 0 }, mt(A.lanes, (P) => (Oe(), De("div", {
                key: P.key,
                class: "pano-timeline-lane",
                onPointerdown: (I) => he(I, A, P.lane)
              }, [
                (Oe(!0), De(qe, null, mt($.value.get(P.key), (I) => (Oe(), De("button", {
                  key: I.key,
                  type: "button",
                  class: ot(["pano-timeline-pin", { selected: I.selected, cluster: I.frames.length > 1 }]),
                  style: yt({ left: y(I.frame + 0.5) }),
                  "aria-label": `${P.label}: ${I.frames.length > 1 ? `${I.frames.length} keyframes` : `keyframe at frame ${I.frames[0]}`}`,
                  "data-tip": I.frames.length > 1 ? `${I.frames.length} keyframes` : `Frame ${I.frames[0]}`,
                  onPointerdown: pt((w) => me(w, A, P.lane, I, P.selectedFrames), ["stop"])
                }, [
                  I.frames.length > 1 ? (Oe(), De("span", s2, Xe(I.frames.length), 1)) : tt("", !0)
                ], 46, o2))), 128))
              ], 40, i2))), 128)) : tt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: yt({ left: y(m.value + 0.5) })
              }, null, 4)
            ], 2)) : tt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, KN)
    ], 2)), [
      [ii, e.model.visible]
    ]);
  }
}, c2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Oe(), De("div", {
      class: ot(["pano-tooltip", {
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
}, u2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, d2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Oe(), De("div", u2, [
      (Oe(!0), De(qe, null, mt(e.buttons, (r) => hr((Oe(), gn(Vt, {
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
        [ii, r.visible !== !1]
      ])), 128))
    ]));
  }
}, f2 = ["data-video-ready"], p2 = { class: "pano-video-transport-shell" }, m2 = { class: "pano-video-controls-left" }, h2 = { class: "pano-video-filmstrip" }, g2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, y2 = ["src", "onLoad"], b2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, v2 = ["max", "value", "disabled"], S2 = { class: "pano-video-controls-right" }, _2 = ["data-has-audio"], w2 = { class: "pano-video-volume-pop" }, k2 = ["value", "disabled"], x2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = nt(() => {
      var N;
      return ((N = t.state) == null ? void 0 : N.playing) === !0 ? "Pause" : "Play";
    }), r = nt(() => {
      var N;
      return ((N = t.state) == null ? void 0 : N.playing) === !0 ? "Pause video" : "Play video";
    }), i = nt(() => {
      var N;
      return ((N = t.state) == null ? void 0 : N.playing) === !0 ? He.pause : He.play;
    }), o = nt(() => {
      var N;
      return ((N = t.state) == null ? void 0 : N.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = nt(() => {
      var N;
      return ((N = t.state) == null ? void 0 : N.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = nt(() => {
      var N;
      return ((N = t.state) == null ? void 0 : N.loop) === !1 ? He.loop_off : He.loop;
    }), l = nt(() => {
      var N, $;
      return ((N = t.state) == null ? void 0 : N.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = nt(() => {
      var N, $, V;
      return ((N = t.state) == null ? void 0 : N.hasAudio) !== !0 ? He.volume : (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((V = t.state) == null ? void 0 : V.volume) ?? 1) <= 0 ? He.volume_muted : He.volume2;
    }), d = nt(() => {
      var N;
      return Math.max(0, Math.min(100, Number(((N = t.state) == null ? void 0 : N.progressPct) || 0)));
    }), u = nt(() => ({ left: `${d.value}%` })), f = nt(() => {
      var W, ye;
      const N = (W = t.state) == null ? void 0 : W.volumePct, $ = Number(((ye = t.state) == null ? void 0 : ye.volume) ?? 1) * 100, V = Number(N ?? $ ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, V))}%`
      };
    }), m = nt(() => {
      var V, W;
      const $ = [
        String(((V = t.state) == null ? void 0 : V.currentTimeLabel) || "0:00"),
        String(((W = t.state) == null ? void 0 : W.durationLabel) || "0:00")
      ].reduce((ye, Se) => Math.max(ye, Se.length), 4);
      return `${Math.max(4, $)}ch`;
    }), S = nt(() => ({ "--pano-video-time-ch": m.value })), g = nt(() => {
      var V, W;
      const N = Array.isArray((V = t.state) == null ? void 0 : V.thumbnails) ? t.state.thumbnails : [];
      if (N.length) return N;
      const $ = Math.max(7, Number(((W = t.state) == null ? void 0 : W.thumbnailCount) || 9));
      return Array.from({ length: $ }, (ye, Se) => ({
        id: `placeholder-${Se}`,
        src: "",
        label: ""
      }));
    }), b = /* @__PURE__ */ Dt(/* @__PURE__ */ new Set()), y = (N) => String((N == null ? void 0 : N.id) || (N == null ? void 0 : N.src) || (N == null ? void 0 : N.label) || ""), K = (N) => b.value.has(y(N)), H = (N) => {
      const $ = new Set(b.value);
      $.add(y(N)), b.value = $;
    };
    ei(g, (N) => {
      const $ = new Set(N.map(y)), V = /* @__PURE__ */ new Set();
      for (const W of b.value)
        $.has(W) && V.add(W);
      b.value = V;
    }, { immediate: !0 });
    const D = nt(() => {
      var N;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((N = t.state) == null ? void 0 : N.shellMaxWidthPx) || 640))}px`
      };
    });
    return (N, $) => (Oe(), De("div", {
      class: ot(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: yt(D.value)
    }, [
      $[1] || ($[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      $[2] || ($[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", p2, [
        Me("div", m2, [
          Ue(Vt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Me("div", {
            class: "pano-video-time pano-video-time-start",
            style: yt(S.value)
          }, Xe(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", h2, [
          Me("div", g2, [
            (Oe(!0), De(qe, null, mt(g.value, (V) => (Oe(), De("div", {
              key: y(V),
              class: ot(["pano-video-thumb", {
                "is-placeholder": !V.src,
                "is-loaded": V.src && K(V)
              }])
            }, [
              V.src ? (Oe(), De("img", {
                key: 0,
                src: V.src,
                alt: "",
                draggable: "false",
                onLoad: (W) => H(V)
              }, null, 40, y2)) : (Oe(), De("span", b2))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: yt(u.value),
            "aria-hidden": "true"
          }, [...$[0] || ($[0] = [
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
          }, null, 8, v2)
        ]),
        Me("div", S2, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: yt(S.value)
          }, Xe(e.state.durationLabel || "0:00"), 5),
          Ue(Vt, {
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
          Me("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Me("div", w2, [
              Me("input", {
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
              }, null, 12, k2)
            ]),
            Ue(Vt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, _2)
        ])
      ])
    ], 14, f2));
  }
}, M2 = { class: "pano-floating-top" }, P2 = ["data-selected", "data-view-count"], N2 = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], A2 = { class: "label" }, C2 = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Oe(), De("div", M2, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Oe(!0), De(qe, null, mt(e.buttons, (i) => hr((Oe(), De("button", {
            key: i.key,
            class: ot(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ue(xt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Me("span", A2, Xe(i.label), 1)
          ], 10, N2)), [
            [ii, i.visible !== !1]
          ])), 128))
        ], 8, P2)
      ]);
    };
  }
};
function f0(e = "stickers") {
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
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: He.globe, pressed: null, visible: !1 },
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
const I2 = ["aria-label"], E2 = { class: "pano-stage-column" }, O2 = { class: "pano-stage-wrap" }, F2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, T2 = {
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
    const l = /* @__PURE__ */ Dt(null), c = /* @__PURE__ */ Dt(null), d = /* @__PURE__ */ Dt(null);
    function u() {
      var me, ie;
      return ((ie = (me = d.value) == null ? void 0 : me.getRefs) == null ? void 0 : ie.call(me)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(me) {
      var ie, ke;
      return ((ke = (ie = c.value) == null ? void 0 : ie.open) == null ? void 0 : ke.call(ie, me)) === !0;
    }
    function m(me) {
      i("image-file-selected", me);
    }
    function S(me) {
      i("image-file-cancelled", me);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = nt(() => r.readOnly === !0), b = nt(() => r.shellPreset || f0(r.type)), y = nt(() => {
      var ie, ke, de;
      const me = String((((ie = r.uiState) == null ? void 0 : ie.stageStatus) === "failed" ? (ke = r.uiState) == null ? void 0 : ke.stageStatusDetail : (de = r.uiState) == null ? void 0 : de.stageWarningDetail) ?? "");
      return me === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : me === "stickers" ? "One or more sticker previews are unavailable." : me === "frame" ? "The editor hit a rendering error. Check the browser console for details." : me === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : me.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = nt(() => {
      var me, ie, ke;
      return ((me = r.uiState) == null ? void 0 : me.stageStatus) === "failed" || (ie = r.uiState) != null && ie.stageWarningDetail ? y.value : (ke = r.uiState) == null ? void 0 : ke.stageNotice;
    }), H = nt(() => {
      var ie;
      const me = Array.isArray((ie = b.value) == null ? void 0 : ie.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return g.value && me.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: He.fullscreen
      }), me;
    });
    function D() {
      const me = l.value;
      return me ? Array.from(me.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ie) => ie instanceof HTMLElement ? !ie.hidden && ie.tabIndex >= 0 && ie.offsetParent !== null : !1) : [];
    }
    function N() {
      var ke;
      const ie = D()[0] || l.value;
      (ke = ie == null ? void 0 : ie.focus) == null || ke.call(ie);
    }
    function $() {
      var me;
      a != null && a.isConnected && ((me = a.focus) == null || me.call(a)), a = null;
    }
    function V(me) {
      var ie, ke, de, ue;
      if (!me.defaultPrevented) {
        if (me.key === "Tab") {
          const B = D();
          if (!B.length) {
            me.preventDefault(), (ke = (ie = l.value) == null ? void 0 : ie.focus) == null || ke.call(ie);
            return;
          }
          const he = B[0], ne = B[B.length - 1], T = document.activeElement;
          if (me.shiftKey) {
            (T === he || T === l.value || !((de = l.value) != null && de.contains(T))) && (me.preventDefault(), ne.focus());
            return;
          }
          (T === ne || !((ue = l.value) != null && ue.contains(T))) && (me.preventDefault(), he.focus());
          return;
        }
        me.key === "Escape" && i("close");
      }
    }
    function W() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ye() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function Se(me) {
      document.removeEventListener("keydown", V), me ? (a || (a = document.activeElement), W(), document.addEventListener("keydown", V), La(() => {
        N();
      })) : (ye(), $());
    }
    return $a(() => {
      Se(r.open);
    }), Xo(() => {
      ye(), document.removeEventListener("keydown", V), $();
    }), ei(() => r.open, (me) => {
      Se(me);
    }), (me, ie) => e.open ? (Oe(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ie[2] || (ie[2] = pt((ke) => i("close"), ["self"]))
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
        Me("div", E2, [
          Me("div", O2, [
            ie[3] || (ie[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ie[4] || (ie[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ie[5] || (ie[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Oe(), De("div", F2, Xe(K.value), 1)) : tt("", !0),
            ie[6] || (ie[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ue(cP, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ue(Hg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: m,
              onFileCancelled: S
            }, null, 512),
            g.value ? tt("", !0) : (Oe(), De(qe, { key: 1 }, [
              Ue(d2, {
                buttons: e.uiState.toolButtons || b.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ue(FM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ue(lP, {
                "paint-swatches": e.paintSwatches,
                panes: b.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ue(x2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ue(C2, {
              buttons: e.uiState.viewButtons || b.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ue(AM, {
              buttons: e.uiState.floatingButtons || H.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ue(yP, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ue(c2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ue($M, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ue(l2, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ie[0] || (ie[0] = (ke) => i("timeline", ke))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? tt("", !0) : (Oe(), gn(NN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ie[1] || (ie[1] = (ke) => i("timeline", ke))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, I2)
    ])) : tt("", !0);
  }
}, Rn = "loading", Bo = "ready", Nn = "failed";
function p0(e, t = "") {
  return e && (e.__panoLoadState = Rn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function m0(e, t = "") {
  return e && (e.__panoLoadState = Bo, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function h0(e, t = "") {
  return e && (e.__panoLoadState = Nn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Hc(e, t) {
  return e ? e.__panoLoadState === Nn ? Nn : typeof t == "function" && t(e) ? Bo : Rn : Bo;
}
function Gc(e) {
  return Hc(e) === Nn;
}
function D2({ presented: e, background: t = Bo, stickers: n = [] } = {}) {
  if (!e) return { status: Rn, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === Rn, o = r.includes(Rn);
  if (i && o) return { status: Rn, detail: "mixed" };
  if (i) return { status: Rn, detail: "background" };
  if (o) return { status: Rn, detail: "stickers" };
  const s = t === Nn, a = r.includes(Nn);
  return s && a ? { status: Nn, detail: "mixed" } : s ? { status: Nn, detail: "background" } : a ? { status: Nn, detail: "stickers" } : { status: Bo, detail: "" };
}
const R2 = "state_json", L2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), ud = "sticker_image_1", V2 = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), g0 = 0.01, $2 = "external_image", ri = "pano_sticker_input_images", y0 = "pano_sticker_input_videos", b0 = "pano_sticker_input_frames", v0 = "pano_sticker_input_video_meta", z2 = !0, el = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], tr = Math.PI / 180, si = 180 / Math.PI, Kc = 1, S0 = "rgb(255, 221, 87)", j2 = "rgb(228, 228, 231)", H2 = "rgb(180, 150, 60)", G2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, K2 = 64, gp = 40, Bl = 16, W2 = 0.45, yp = 180, U2 = 160, Na = 24, B2 = 4, Y2 = 4;
function Yl(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function q2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function X2(e, t, n) {
  const r = Fe((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function J2(e) {
  return e * e * e;
}
function tl(e, t, n) {
  return { x: e, y: t, z: n };
}
function bp(e, t) {
  return tl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function vp(e, t) {
  return tl(e.x * t, e.y * t, e.z * t);
}
function ql(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Z2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return tl(e.x / t, e.y / t, e.z / t);
}
function Sp(e) {
  return {
    yaw: Et(Math.atan2(e.x, e.z) * si),
    pitch: Fe(Math.asin(Fe(e.y, -1, 1)) * si, -90, 90)
  };
}
function xr(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, s = t[r].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (n = !n);
  }
  return n;
}
function uo(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Xl(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = r * r + i * i;
  if (a <= 1e-6) return uo(e, t);
  const l = Fe((o * r + s * i) / a, 0, 1), c = Number(t.x || 0) + r * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Pn(e, t, n) {
  return e + (t - e) * n;
}
function Xn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Fe(n, 0, 1)})`;
}
function Q2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ks = { fillStyle: "", url: "" };
function eA(e, t, n) {
  if (ks.url && ks.fillStyle === String(e || ""))
    return ks.url;
  const r = Q2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Na}" height="${Na}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ks = { fillStyle: String(e || ""), url: r }, r;
}
function Aa(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function vn(e) {
  return {
    r: Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Fe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function No(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function tA(e) {
  return el.some((t) => Aa(e, t.color));
}
function Wc(e, t, n) {
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
function Uc(e) {
  const t = Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((n - r) / s + (n < r ? 6 : 0)) / 6 : i === n ? a = ((r - t) / s + 2) / 6 : a = ((t - n) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function Ri(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function nA(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function _p(e) {
  const { paintCount: t, maskCount: n } = nA(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function _0(e, t, n, r, i) {
  const o = n.bbox, s = n.transform || {}, a = Number(o.u0 || 0) * r, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * r), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * r, f = l + d * 0.5 + Number(s.dv || 0) * i, m = Number(s.rot_deg || 0) * tr, S = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-r, 0, r])
    e.save(), e.translate(u + g, f), e.rotate(m), e.scale(S, S), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Ni(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function xs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function rA(e, t) {
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
function fo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function iA(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function oA(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function sA(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const w0 = "pano_suite.ui_settings.v1", k0 = "pano_suite.node_grid_visibility.v1";
let xi = null, Un = null;
function Us(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function aA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(w0)) || "").trim();
    if (!t) return xi ? Us(xi) : null;
    const n = JSON.parse(t), r = Us(n);
    return xi = r, r;
  } catch {
    return xi ? Us(xi) : null;
  }
}
function lA(e) {
  var n;
  const t = Us(e);
  xi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(w0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function x0() {
  var e;
  if (Un && typeof Un == "object")
    return Un;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(k0)) || "").trim();
    if (!t)
      return Un = {}, Un;
    const n = JSON.parse(t);
    return Un = n && typeof n == "object" ? n : {}, Un;
  } catch {
    return Un = {}, Un;
  }
}
function cA(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = x0()[n];
  return typeof i == "boolean" ? i : !!t;
}
function uA(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = x0();
  r[n] = !!t, Un = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(k0, JSON.stringify(r));
  } catch {
  }
}
function dA(e, t) {
  const n = { ...e }, r = t.map((i) => i(Jl(e, i.name)));
  for (const { connect: i, ...o } of r) {
    for (const s of Object.keys(o))
      if (s in n) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(n, o);
  }
  return r.forEach((i, o) => i.connect(Jl(n, t[o].name))), Jl(n, "showEditor");
}
function Jl(e, t) {
  return new Proxy(e, {
    get(n, r) {
      if (!(r in n)) throw new Error(`Panorama editor: ${t} takes ${String(r)}, which nothing provides`);
      return n[r];
    }
  });
}
const Ar = /* @__PURE__ */ new Map(), fA = 12;
function pA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ar.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ar.delete(t), Ar.set(t, n), n);
}
function mA(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Ar.delete(n), Ar.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ar.size > fA; ) {
      const i = Ar.keys().next().value;
      if (!i) break;
      Ar.delete(i);
    }
}
function hA(e) {
  const {
    comfyMedia: t,
    editor: n,
    editorView: r,
    floatingRightEl: i,
    imageCache: o,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: a,
    mediaSource: l,
    mediaUiImage: c,
    node: d,
    portStillCanvas: u,
    portVideoEl: f,
    readOnly: m,
    runtime: S,
    scheduler: g,
    stageWrap: b,
    state: y,
    stateV2: K,
    stillCanvas: H,
    studio: D,
    timelinePlayhead: N,
    type: $,
    uiState: V,
    videoEl: W
  } = e;
  let ye, Se, me, ie, ke, de, ue;
  const B = {
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
  }, he = 9, ne = [];
  let T = 0;
  const G = () => {
    var ce, Ne;
    const E = (ce = b == null ? void 0 : b.getBoundingClientRect) == null ? void 0 : ce.call(b), ge = (Ne = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : Ne.call(i), Pe = Math.max(0, Number((E == null ? void 0 : E.width) || 0)), Ce = ge ? Math.max(0, Number(ge.width || 0)) : 0, ze = Ce > 0 ? Ce + 14 + 12 : 72, Ae = Math.max(280, Math.floor(Pe - ze * 2)), $e = n.fullscreen ? Math.min(1200, Ae) : Ae;
    V.videoTransport.shellMaxWidthPx = $e;
  }, A = () => {
    T || (T = g.requestFrame(() => {
      T = 0, G();
    }));
  }, pe = (E) => {
    if (!(E instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(E.audioTracks) && E.audioTracks.length > 0 || E.audioTracks && typeof E.audioTracks.length == "number" && E.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof E.mozHasAudio == "boolean") return E.mozHasAudio;
    } catch {
    }
    try {
      if (Number(E.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!V.videoTransport.hasAudio;
  }, P = typeof ResizeObserver < "u" ? new ResizeObserver(() => A()) : null;
  P == null || P.observe(b), i && (P == null || P.observe(i)), ne.push(() => {
    var E;
    T && (g.cancelFrame(T), T = 0), (E = P == null ? void 0 : P.disconnect) == null || E.call(P);
  }), A();
  const I = () => {
    B.thumbnailJobId += 1, B.thumbnailSrc = "", V.videoTransport.thumbnails = [], V.videoTransport.thumbnailCount = he;
  }, w = async (E, ge, Pe) => {
    const Ce = String(E || "").trim();
    if (!Ce) {
      I();
      return;
    }
    const Te = pA(Ce);
    if (Te) {
      B.thumbnailSrc = Ce, V.videoTransport.thumbnails = Te.thumbnails, V.videoTransport.thumbnailCount = Te.thumbnailCount;
      return;
    }
    const Le = ++B.thumbnailJobId;
    B.thumbnailSrc = Ce, V.videoTransport.thumbnails = [], V.videoTransport.thumbnailCount = he;
    const ze = Zo(document, "editor.thumbnails");
    ze.preload = "auto", ze.muted = !0, ze.playsInline = !0, ze.crossOrigin = "anonymous";
    const Ae = zt({ label: "editor.thumbnail" });
    try {
      const $e = await new Promise((at) => {
        let St = !1;
        const st = (Mt) => {
          St || (St = !0, at(Mt));
        };
        ze.addEventListener("loadedmetadata", () => st(!0), { once: !0 }), ze.addEventListener("canplay", () => st(!0), { once: !0 }), ze.addEventListener("error", () => st(!1), { once: !0 }), ze.src = Ce, ze.load();
      });
      if (B.thumbnailJobId !== Le) return;
      const ce = Number(ze.videoWidth || 0), Ne = Number(ze.videoHeight || 0);
      if (!$e || ce < 1 || Ne < 1) {
        B.thumbnailFailedSrcs.add(Ce);
        return;
      }
      const Ie = Math.max(0, Number(ze.duration || ge || 0)), Ee = 46, je = Math.max(72, Math.round(ce / Ne * Ee));
      Ae.width = je, Ae.height = Ee;
      const Ge = Ae.getContext("2d");
      if (!Ge) return;
      const Be = [], ct = (at) => new Promise((St) => {
        let st = !1;
        const Mt = () => {
          st || (st = !0, St());
        };
        ze.addEventListener("seeked", Mt, { once: !0 }), ze.addEventListener("error", Mt, { once: !0 });
        try {
          ze.currentTime = at;
        } catch {
          Mt();
        }
      });
      for (let at = 0; at < he; at += 1) {
        if (B.thumbnailJobId !== Le) return;
        const St = he <= 1 ? 0 : at / (he - 1), st = Ie > 0 ? Math.max(0, Math.min(Ie - Math.max(1e-3, 0.5 / Math.max(1, Number(Pe || 24))), Ie * St)) : 0;
        if (await ct(st), B.thumbnailJobId !== Le) return;
        Ge.clearRect(0, 0, je, Ee), Ge.drawImage(ze, 0, 0, je, Ee), Be.push({
          id: `thumb-${at}`,
          src: Ae.toDataURL("image/jpeg", 0.72),
          time: st,
          label: x(st)
        });
      }
      if (B.thumbnailJobId !== Le) return;
      V.videoTransport.thumbnails = Be, V.videoTransport.thumbnailCount = Be.length || he, mA(Ce, {
        thumbnails: Be,
        thumbnailCount: Be.length || he,
        duration: Ie,
        fps: Pe
      });
    } finally {
      ze.removeAttribute("src"), ze.load(), Xr(Ae);
    }
  };
  ne.push(() => {
    I();
  });
  const M = kg({
    video: W instanceof HTMLVideoElement ? W : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (E) => g.requestFrame(E),
      cancelFrame: (E) => g.cancelFrame(E)
    },
    fps: F,
    span: () => {
      if (K) return ue();
      const E = Math.round(Number(V.videoTransport.duration || 0) * F());
      return W.loop || !(E > 0) ? 1 / 0 : E;
    },
    loop: () => K,
    // Panorama Studio's background VIDEO is where its Clip range puts it (state.background).
    place: () => ye(),
    onFrame: (E) => {
      K ? ie(E) : L(), me({ cause: "frame_view", localOnly: !0, reason: it.PLAYHEAD });
    },
    onCapture: () => {
      j() && (S.backgroundDirty = !0);
    },
    onChange: () => {
      L(), N.playing.value = M.playing, de(), me({ cause: "frame_view", localOnly: !0, reason: it.PLAYHEAD });
    }
  });
  ne.push(() => M.dispose());
  const ae = K && f instanceof HTMLVideoElement ? qu({
    video: f,
    onCapture: () => {
      var Pe;
      const E = Number(f.videoWidth || 0), ge = Number(f.videoHeight || 0);
      E < 1 || ge < 1 || (u.width = E, u.height = ge, (Pe = u.getContext("2d")) == null || Pe.drawImage(f, 0, 0), u.__panoFrameIdx += 1, me({ cause: "frame_view", localOnly: !0, reason: it.MEDIA }));
    },
    onChange: () => me({ cause: "frame_view", localOnly: !0, reason: it.MEDIA })
  }) : null;
  ae && ne.push(() => ae.dispose());
  const ee = K ? Nu({
    createImage: (E, ge) => {
      const Pe = new Image();
      return Pe.onload = ge, Pe.onerror = ge, Pe.src = E, Pe;
    },
    onLoad: () => me({ cause: "frame_view", localOnly: !0, reason: it.MEDIA })
  }) : null;
  if (W instanceof HTMLVideoElement) {
    const E = () => {
      Y(), me({ cause: "frame_view", localOnly: !0 });
    }, ge = () => {
      L({
        hasAudio: V.videoTransport.hasAudio,
        muted: W.muted,
        volume: Number(W.volume ?? V.videoTransport.volume ?? 1)
      });
    }, Pe = () => {
      const Ce = W.dataset.panoSrc;
      Ce && (B.failedSrcs.add(Ce), Y(), me());
    };
    for (const [Ce, Te] of [
      ["loadedmetadata", E],
      ["loadeddata", E],
      ["canplay", E],
      ["volumechange", ge],
      ["error", Pe]
    ])
      W.addEventListener(Ce, Te), ne.push(() => W.removeEventListener(Ce, Te));
  }
  function R(E) {
    return t.uiList(d, E);
  }
  function v(E) {
    return t.uiValue(d, E);
  }
  function U() {
    const E = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (ia(E))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ge = te();
    return ge ? { videoKey: ge.videoKey, metaKey: ge.metaKey } : $ === "stickers" || $ === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function p() {
    const { metaKey: E } = U(), ge = v(E);
    return Array.isArray(ge) && ge.length > 0 && ge[0] && typeof ge[0] == "object" ? ge[0] : ge && typeof ge == "object" ? ge : null;
  }
  function h(E) {
    return E ? E instanceof HTMLVideoElement ? [
      String(E.currentSrc || E.src || ""),
      Number(E.videoWidth || 0),
      Number(E.videoHeight || 0)
    ].join("|") : E instanceof HTMLCanvasElement ? [
      "canvas",
      Number(E.width || 0),
      Number(E.height || 0),
      String(E.__panoFrameIdx || 0)
    ].join("|") : [
      String(E.currentSrc || E.src || ""),
      Number(E.naturalWidth || E.width || 0),
      Number(E.naturalHeight || E.height || 0)
    ].join("|") : "none";
  }
  function x(E) {
    const ge = Math.max(0, Math.floor(Number(E || 0))), Pe = Math.floor(ge / 60), Ce = ge % 60;
    return `${Pe}:${String(Ce).padStart(2, "0")}`;
  }
  function F() {
    return K ? y.timeline.fps : B.metaFps || 1e3;
  }
  function L(E = {}) {
    const ge = Number(E.duration ?? V.videoTransport.duration ?? 0), Pe = Math.max(1, Number(E.fps ?? V.videoTransport.fps ?? 24)), Ce = M.frame / F(), Te = Object.prototype.hasOwnProperty.call(E, "ready") ? !!E.ready : !!V.videoTransport.ready, Le = M.playing, ze = Object.prototype.hasOwnProperty.call(E, "visible") ? !!E.visible : !!V.videoTransport.visible, Ae = Object.prototype.hasOwnProperty.call(E, "muted") ? !!E.muted : !!(W instanceof HTMLVideoElement ? W.muted : V.videoTransport.muted), $e = Number(
      Object.prototype.hasOwnProperty.call(E, "volume") ? E.volume : W instanceof HTMLVideoElement ? W.volume : V.videoTransport.volume
    ), ce = Object.prototype.hasOwnProperty.call(E, "hasAudio") ? !!E.hasAudio : pe(W), Ne = Object.prototype.hasOwnProperty.call(E, "loop") ? !!E.loop : !!V.videoTransport.loop;
    Object.assign(V.videoTransport, {
      ready: Te,
      playing: Le,
      visible: ze,
      loop: Ne,
      currentTime: Number.isFinite(Ce) ? Ce : 0,
      duration: Number.isFinite(ge) ? ge : 0,
      progressPct: ge > 1e-6 ? Math.max(0, Math.min(100, Ce / ge * 100)) : 0,
      currentTimeLabel: x(Ce),
      durationLabel: x(ge),
      frameCount: Math.max(0, Number(E.frameCount ?? V.videoTransport.frameCount ?? 0)),
      fps: Pe,
      hasAudio: ce,
      muted: Ae,
      volume: Math.max(0, Math.min(1, Number.isFinite($e) ? $e : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite($e) ? $e : 1)) * 100),
      thumbnails: Array.isArray(E.thumbnails) ? E.thumbnails : V.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(E.thumbnailCount ?? V.videoTransport.thumbnailCount ?? he))
    });
  }
  function J() {
    return !!(W instanceof HTMLVideoElement && !K && W.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function le() {
    if (!(W instanceof HTMLVideoElement) || !V.videoTransport.hasAudio) return;
    const E = !W.muted;
    W.muted = E, !E && Number(W.volume || 0) <= 0 && (W.volume = Math.max(0.01, Number(V.videoTransport.volume || 1))), L({
      hasAudio: V.videoTransport.hasAudio,
      muted: W.muted,
      volume: Number(W.volume ?? V.videoTransport.volume ?? 1)
    });
  }
  function k() {
    L({
      visible: J()
    });
  }
  function j() {
    if (!(W instanceof HTMLVideoElement) || Number(W.videoWidth || 0) < 1 || Number(W.videoHeight || 0) < 1) return !1;
    const E = Number(W.videoWidth || 0), ge = Number(W.videoHeight || 0);
    (H.width !== E || H.height !== ge) && (H.width = E, H.height = ge);
    const Pe = H.getContext("2d");
    return Pe ? (Pe.clearRect(0, 0, E, ge), Pe.drawImage(W, 0, 0, E, ge), H.__panoFrameIdx = Number(H.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function _() {
    return !M.showsVideo && Number(H.width || 0) > 0 && Number(H.height || 0) > 0 && Number(H.__panoFrameIdx || 0) > 0 ? H : W instanceof HTMLVideoElement && Number(W.videoWidth || 0) > 0 && Number(W.videoHeight || 0) > 0 && Number(W.readyState || 0) >= 2 ? W : null;
  }
  function O() {
    H.__panoFrameIdx = 0, S.backgroundDirty = !0;
  }
  function Y() {
    if (!(W instanceof HTMLVideoElement)) return null;
    const { videoKey: E } = U(), ge = (te() || bt(d, "background")) && R(E)[0] || null, Pe = l(ge), Ce = [Pe, t.linkedVideoFile(d, C())].filter(Boolean), Te = Ce.find((Ie) => !B.failedSrcs.has(Ie)) || "";
    B.videoFailed = !Te && Ce.length > 0;
    const Le = Te && Te === Pe ? p() : null;
    B.metaFps = Number(Le == null ? void 0 : Le.fps) > 0 ? Number(Le.fps) : 0;
    const ze = Math.max(1, Number((Le == null ? void 0 : Le.fps) || (K ? y.timeline.fps : 24))), Ae = W.dataset.panoSrc === Te && Number.isFinite(W.duration) ? W.duration : 0, $e = Number((Le == null ? void 0 : Le.duration) || ((Le == null ? void 0 : Le.frames) > 0 ? Le.frames / ze : Ae)), ce = Math.max(0, Number((Le == null ? void 0 : Le.frames) || Math.round($e * ze))), Ne = !!(Le != null && Le.has_audio) || pe(W);
    return Te && W.dataset.panoSrc !== Te ? (W.pause(), O(), W.dataset.panoSrc = Te, W.loop = !K && !!V.videoTransport.loop, W.muted = !!V.videoTransport.muted, W.volume = Math.max(0, Math.min(1, Number(V.videoTransport.volume ?? 1))), W.src = Te, W.load(), M.setSource(!0), K || M.seek(0)) : !Te && W.getAttribute("src") && (W.pause(), W.removeAttribute("src"), delete W.dataset.panoSrc, W.load(), O(), I(), M.setSource(!1)), K || (W.loop = !!V.videoTransport.loop), Te && !K && B.thumbnailSrc !== Te && !B.thumbnailFailedSrcs.has(Te) && w(Te, $e, ze), Te || I(), L({
      ready: !!Te,
      visible: !!Te && J(),
      duration: $e,
      frameCount: ce,
      fps: ze,
      hasAudio: Ne,
      loop: !!W.loop,
      muted: !!W.muted,
      volume: Number(W.volume ?? V.videoTransport.volume ?? 1),
      thumbnailCount: V.videoTransport.thumbnailCount
    }), Te || null;
  }
  function ve(E, ge = null) {
    return c(d, E, o, ge || (() => me()));
  }
  function _e(E = null) {
    return bt(d, "external-sticker") ? ve(ri, E) : null;
  }
  function xe() {
    if (!bt(d, "external-sticker")) return null;
    const E = R(v0)[0];
    if (!E || typeof E != "object") return null;
    const ge = R(b0).map(l).filter(Boolean);
    if (ge.length) return { frames: ge, meta: E };
    const Pe = l(R(y0)[0] || null);
    return Pe ? { src: Pe, meta: E } : null;
  }
  function Z() {
    return bt(d, "external-sticker") ? Vo(R) : null;
  }
  function be() {
    const E = y.stickers.find(Se), ge = E ? xe() : null, Pe = ge ? xu(E.clip, n.frame, y.timeline.fps, ge.meta) : null;
    ae.follow({ src: (ge == null ? void 0 : ge.src) || "", time: Pe, playing: M.advancing, fps: y.timeline.fps });
    const Ce = E ? q(E) : null, Te = ge != null && ge.frames ? ee.picture(ge.frames, Pe, ge.meta, Ce) : ae.picture(u, Ce);
    return Te ? { media: Te, revision: h(Te), source: Pu(ge, Ce) } : null;
  }
  function z() {
    return !K || !bt(d, "scene") ? null : ma(R("pano_scene_files"), R("pano_scene_meta"), l);
  }
  function oe() {
    return !K || !bt(d, "external-sticker") ? null : ma(R("pano_sticker_files"), R("pano_sticker_meta"), l);
  }
  function q(E) {
    var ze;
    if (E && typeof E == "object" && (Se(E) || E.external === !0))
      return _e(() => {
        Cr(d, "image-loaded");
      });
    const ge = K ? re(E) : String(E && typeof E == "object" ? E.asset_id || E.assetId || "" : E || "");
    if (!ge) return null;
    const Pe = o.get(ge);
    if (Pe) return Pe;
    const Ce = K ? fa(E.source) : (ze = y.assets) == null ? void 0 : ze[ge], Te = a(Ce);
    if (!Te) return null;
    const Le = new Image();
    return p0(Le, Te), Le.onload = () => {
      m0(Le, Te), me();
    }, Le.onerror = () => {
      h0(Le, Te), me();
    }, Le.src = Te, o.set(ge, Le), Le;
  }
  function re(E) {
    const { source: ge } = E;
    return ge.filename ? `file:${ge.storage}:${ge.subfolder}:${ge.filename}` : `sticker:${E.id}`;
  }
  function Q() {
    if ($ === "cutout") {
      const Le = _();
      if (Le) return Le;
      const ze = s(
        d,
        ["erp_image", "bg_erp"],
        () => me(),
        "background:cutout:erp_image|bg_erp"
      );
      return ze && !Gc(ze) ? ze : c(d, "pano_input_images", o, () => me()) || ze || null;
    }
    const E = _();
    if (E) return E;
    const ge = te(), Pe = ge || bt(d, "background") ? c(d, (ge == null ? void 0 : ge.imageKey) ?? "pano_input_images", o, () => me()) : null;
    if (Pe && !Gc(Pe)) return Pe;
    if (W instanceof HTMLVideoElement && W.dataset.panoSrc) return W;
    if (ge) return Pe;
    const Ce = C();
    return s(d, Ce, () => me(), `background:${Ce.join("|")}`) || Pe || null;
  }
  function te() {
    return !D || !bt(d, "scene") ? null : Xu(R);
  }
  function X() {
    var E;
    return ((E = te()) == null ? void 0 : E.coverage) ?? yn(y.coverage);
  }
  function C() {
    if (te()) return [];
    if ($ === "cutout") return ["erp_image", "bg_erp"];
    const E = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((Ce) => String((Ce == null ? void 0 : Ce.name) || "")) : [], ge = E.includes("erp_image"), Pe = E.includes("bg_erp");
    return m && (ge || Pe) ? ge ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : $ === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function se(E) {
    return E ? E instanceof HTMLImageElement ? !!E.complete && Number(E.naturalWidth || E.width || 0) > 0 && Number(E.naturalHeight || E.height || 0) > 0 : E instanceof HTMLVideoElement ? Number(E.videoWidth || 0) > 0 && Number(E.videoHeight || 0) > 0 && Number(E.readyState || 0) >= 2 : Number(E.width || E.naturalWidth || 0) > 0 && Number(E.height || E.naturalHeight || 0) > 0 : !1;
  }
  function fe() {
    if (r.failed) return { status: Nn, detail: "renderer" };
    if (!r.ready) return { status: Rn, detail: "boot" };
    const E = Q(), ge = B.videoFailed ? Nn : Hc(E, se), Pe = [];
    for (const Ce of ke()) {
      if ((Ce == null ? void 0 : Ce.visible) === !1) continue;
      const Te = q(Ce);
      Pe.push(Hc(Te, se));
    }
    return D2({
      presented: S.hasPresentedFrame,
      background: ge,
      stickers: Pe
    });
  }
  function we() {
    W instanceof HTMLVideoElement && W.pause(), ne.forEach((E) => {
      try {
        E();
      } catch {
      }
    });
  }
  return {
    connect(E) {
      ({
        backgroundVideoPlace: ye,
        isExternalSticker: Se,
        requestDraw: me,
        setTimelineFrame: ie,
        skyStickers: ke,
        syncTimeline: de,
        timelineSpanFrames: ue
      } = E);
    },
    videoState: B,
    queueVideoTransportLayout: A,
    playback: M,
    portVideo: ae,
    getNodeUiValue: v,
    getMediaRevisionToken: h,
    playbackFps: F,
    syncVideoTransportState: L,
    toggleVideoMuted: le,
    syncVideoTransportVisibility: k,
    refreshModalVideoSource: Y,
    getStickerUiImage: ve,
    getExternalStickerPreviewImage: _e,
    getPortMediaMeta: Z,
    followPortSticker: be,
    getStickerImage: q,
    stickerImageKey: re,
    getConnectedErpImage: Q,
    backgroundCoverage: X,
    upstreamBackground: te,
    isDecodedImageReady: se,
    getStageImageStatus: fe,
    sceneFiles: z,
    stickerFiles: oe,
    disposeMediaSession: we
  };
}
function gA(e = 80, t = null, n = 8) {
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
const yA = 80;
function M0(e) {
  return JSON.stringify(_S(e));
}
function bA(e) {
  return gA(yA, { entries: [M0(e)], index: 0 });
}
function P0(e, t) {
  var n, r;
  return (e === "stickers" ? (n = t.active) == null ? void 0 : n.selected_sticker_id : (r = t.active) == null ? void 0 : r.selected_shot_id) ?? null;
}
function vA(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se;
  function me({ initial: de = !1 } = {}) {
    n || (N(), V(), ye(), de || g(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(M0(D())), W()));
  }
  function ie(de) {
    var T, G, A;
    if (n) return;
    H();
    const ue = de < 0 ? t.historyController.undo() : t.historyController.redo();
    if (W(), !ue) return;
    const B = wS(i, ue), he = (T = i.timeline) == null ? void 0 : T.fps, ne = JSON.stringify((G = i.background) == null ? void 0 : G.clip);
    Object.keys(i).forEach((pe) => delete i[pe]), Object.assign(i, B.state), N(!1), V({ restored: !0 }), o && b(), o && i.timeline.fps !== he ? S.seek(Math.round(t.frame * i.timeline.fps / he)) : o && JSON.stringify(i.background.clip) !== ne && S.seek(t.frame), t.selectedId = P0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((A = d()) == null ? void 0 : A.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), r.backgroundDirty = !0, B.paintingChanged ? m() : f(), $(), Se(), c(), K({ cause: "cutout_frame" });
  }
  function ke() {
    var B, he;
    const de = Array.isArray((B = t.historyController) == null ? void 0 : B.entries) ? t.historyController.entries : [], ue = Number((he = t.historyController) == null ? void 0 : he.index);
    return {
      canUndo: !n && de.length > 1 && ue > 0,
      canRedo: !n && de.length > 1 && ue >= 0 && ue < de.length - 1
    };
  }
  return {
    connect(de) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: m,
        playback: S,
        pruneUpstreamRecords: g,
        rebuildUpstreamWorking: b,
        releaseHiddenSelection: y,
        requestDraw: K,
        stopTimelinePlayback: H,
        storedEditorState: D,
        syncCutoutShot: N,
        syncPaintUi: $,
        syncPortHandoff: V,
        syncUndoRedoButtons: W,
        syncUpstreamEdits: ye,
        updateSidePanel: Se
      } = de);
    },
    pushHistory: me,
    restoreHistory: ie,
    getHistoryCapabilities: ke
  };
}
function SA(e) {
  const {
    canvas: t,
    editor: n,
    sceneV2: r,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, S, g, b;
  function y() {
    return s !== "stickers" ? i.shots : r ? [...K(), ...H()] : K();
  }
  function K() {
    return r ? i.stickers.filter((C) => C.placement === "sky") : i.stickers;
  }
  function H() {
    if (!r) return [];
    const C = b(), se = [...new Set(C.map((fe) => fe.origin.layer))];
    return C.filter((fe) => fe.placement === "sky").sort((fe, we) => se.indexOf(fe.origin.layer) - se.indexOf(we.origin.layer) || fe.z_index - we.z_index);
  }
  function D(C) {
    return i.stickers.find((se) => se.id === C) || b().find((se) => se.id === C) || null;
  }
  function N(C) {
    return r && v(C);
  }
  function $(C) {
    return C.source.kind === "file" && !C.source.filename && !C.source.data_url;
  }
  function V(C) {
    if (!N(C)) return C;
    const se = Z(C) ? It(C) ? g(C) : m(C) : null;
    return Cu(C, n.frame, se && { width: se.naturalWidth || se.width, height: se.naturalHeight || se.height });
  }
  function W(C, se) {
    N(C) ? Mh(C, n.frame, se) : Object.assign(C, se);
  }
  function ye() {
    const C = i.painting || (i.painting = li(null));
    return Array.isArray(C.groups) || (C.groups = []), C.groups;
  }
  function Se(C = "paint") {
    var E, ge;
    const se = Array.isArray((ge = (E = i.painting) == null ? void 0 : E[C]) == null ? void 0 : ge.strokes) ? i.painting[C].strokes : [], fe = [], we = /* @__PURE__ */ new Set();
    for (const Pe of se) {
      const Ce = String((Pe == null ? void 0 : Pe.actionGroupId) || "").trim();
      !Ce || we.has(Ce) || (we.add(Ce), fe.push(Ce));
    }
    return fe;
  }
  function me() {
    return Se("paint");
  }
  function ie(C, se) {
    const fe = String(se || "").trim();
    return fe ? `${C === "mask" ? "mask" : "paint"}:${fe}` : "";
  }
  function ke(C) {
    const se = String(C || "").trim();
    return se ? `raster:${se}` : "";
  }
  function de(C) {
    const se = String(C || "").trim();
    if (!se) return "";
    const fe = se.match(/^raster:(.*)$/);
    return String(fe ? fe[1] || "" : se).trim();
  }
  function ue(C, se = null) {
    const fe = String(C || "").trim();
    if (!fe) return { layerKind: "paint", actionGroupId: "" };
    const we = fe.match(/^(paint|mask):(.*)$/);
    return we ? { layerKind: we[1] === "mask" ? "mask" : "paint", actionGroupId: String(we[2] || "").trim() } : { layerKind: se === "mask" ? "mask" : "paint", actionGroupId: fe };
  }
  function B() {
    var se;
    let C = -1;
    for (const fe of K())
      C = Math.max(C, Number((fe == null ? void 0 : fe.z_index) || 0));
    for (const fe of ye())
      C = Math.max(C, Number((fe == null ? void 0 : fe.z_index) || 0));
    for (const fe of Array.isArray((se = i.painting) == null ? void 0 : se.raster_objects) ? i.painting.raster_objects : [])
      String((fe == null ? void 0 : fe.layerKind) || "paint") === "paint" && (C = Math.max(C, Number((fe == null ? void 0 : fe.z_index) || 0)));
    return C + 1;
  }
  function he(C, se = null) {
    const fe = String(C || "").trim();
    if (!fe) return null;
    const we = ye();
    let E = we.find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === fe);
    return E ? se != null && (E.z_index = Math.max(0, Number(se || 0))) : (E = {
      id: fe,
      type: "strokeGroup",
      actionGroupId: fe,
      z_index: se == null ? B() : Math.max(0, Number(se || 0)),
      locked: !1,
      frame: null
    }, we.push(E)), E;
  }
  function ne(C) {
    if (!(C != null && C.centerUv)) return [];
    const se = Number(C.centerUv.u || 0), fe = Number(C.centerUv.v || 0), we = Number(C.halfW || 0), E = Number(C.halfH || 0);
    return [
      {
        u: ((se - we) % 1 + 1) % 1,
        v: Fe(fe - E, 0, 1)
      },
      {
        u: ((se + we) % 1 + 1) % 1,
        v: Fe(fe - E, 0, 1)
      },
      {
        u: ((se + we) % 1 + 1) % 1,
        v: Fe(fe + E, 0, 1)
      },
      {
        u: ((se - we) % 1 + 1) % 1,
        v: Fe(fe + E, 0, 1)
      }
    ];
  }
  function T() {
    const C = new Set(me()), fe = ye().filter((we) => C.has(String((we == null ? void 0 : we.actionGroupId) || "")));
    return C.forEach((we) => {
      fe.some((E) => String((E == null ? void 0 : E.actionGroupId) || "") === we) || fe.push({
        id: we,
        type: "strokeGroup",
        actionGroupId: we,
        z_index: B(),
        locked: !1,
        frame: null
      });
    }), fe.sort((we, E) => Number((we == null ? void 0 : we.z_index) || 0) - Number((E == null ? void 0 : E.z_index) || 0)), i.painting.groups = fe, fe;
  }
  function G(C, se, fe) {
    var Ie;
    const we = (Ee) => (Number(Ee || 0) % 1 + 1) % 1, E = [];
    for (const Ee of fe) {
      const je = Ee == null ? void 0 : Ee.geometry, Ge = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(Ge) && E.push(...Ge);
    }
    if (!E.length) return null;
    const ge = we(((Ie = E[0]) == null ? void 0 : Ie.u) || 0);
    let Pe = 0, Ce = 0;
    E.forEach((Ee) => {
      const je = we((Ee == null ? void 0 : Ee.u) || 0);
      Pe += ge + k(je, ge), Ce += Number((Ee == null ? void 0 : Ee.v) || 0);
    });
    const Te = (Pe / E.length % 1 + 1) % 1;
    let Le = 1 / 0, ze = -1 / 0, Ae = 1 / 0, $e = -1 / 0;
    E.forEach((Ee) => {
      const je = we((Ee == null ? void 0 : Ee.u) || 0), Ge = k(je, Te);
      Le = Math.min(Le, Ge), ze = Math.max(ze, Ge);
      const Be = Number((Ee == null ? void 0 : Ee.v) || 0);
      Ae = Math.min(Ae, Be), $e = Math.max($e, Be);
    });
    const ce = fe.reduce((Ee, je) => {
      const Ge = l(String((je == null ? void 0 : je.toolKind) || "pen")), Be = pn[Ge] || pn[cr], ct = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number((Be == null ? void 0 : Be.sizeScale) ?? 1));
      return Math.max(Ee, ct);
    }, 0), Ne = Math.max(35e-4, ce / 2048);
    return {
      centerUv: { u: ((Te + (Le + ze) * 0.5) % 1 + 1) % 1, v: Fe((Ae + $e) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (ze - Le) * 0.5 + Ne,
      halfH: ($e - Ae) * 0.5 + Ne,
      uvPad: Ne
    };
  }
  function A(C, se, fe) {
    const we = String(C || "").trim();
    if (!we) return null;
    const E = ye().find((Pe) => String((Pe == null ? void 0 : Pe.actionGroupId) || "") === we);
    if (!E) return null;
    const ge = fe || L(we, se);
    return E.frame = G(we, se, ge), E.frame;
  }
  function pe() {
    var we;
    const C = K().map((E) => ({
      type: "sticker",
      id: String((E == null ? void 0 : E.id) || ""),
      z_index: Number((E == null ? void 0 : E.z_index) || 0),
      item: E
    })), se = T().map((E) => ({
      type: "strokeGroup",
      id: String((E == null ? void 0 : E.id) || (E == null ? void 0 : E.actionGroupId) || ""),
      actionGroupId: String((E == null ? void 0 : E.actionGroupId) || ""),
      z_index: Number((E == null ? void 0 : E.z_index) || 0),
      item: E
    })), fe = (Array.isArray((we = i.painting) == null ? void 0 : we.raster_objects) ? i.painting.raster_objects : []).filter((E) => String((E == null ? void 0 : E.layerKind) || "paint") === "paint").map((E) => ({
      type: "rasterObject",
      id: String((E == null ? void 0 : E.id) || ""),
      z_index: Number((E == null ? void 0 : E.z_index) || 0),
      item: E
    }));
    return [...C, ...se, ...fe].sort((E, ge) => Number(E.z_index || 0) - Number(ge.z_index || 0));
  }
  function P(C = !0) {
    var fe, we, E, ge, Pe, Ce;
    const se = pe().filter((Te) => Te.type === "strokeGroup").map((Te) => String(Te.actionGroupId || "")).filter((Te) => !!Te);
    if (C) {
      const Te = String(((we = (fe = n.interaction) == null ? void 0 : fe.stroke) == null ? void 0 : we.actionGroupId) || "").trim(), Le = String(((ge = (E = n.interaction) == null ? void 0 : E.stroke) == null ? void 0 : ge.layerKind) || "").trim(), ze = String(((Ce = (Pe = n.interaction) == null ? void 0 : Pe.stroke) == null ? void 0 : Ce.toolKind) || "").trim();
      Te && Le === "paint" && ze !== "eraser" && !se.includes(Te) && se.push(Te);
    }
    return se;
  }
  function I(C = !0) {
    var Ce, Te, Le, ze, Ae, $e;
    const se = pe();
    if (!C) return se;
    const fe = String(((Te = (Ce = n.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : Te.actionGroupId) || "").trim(), we = String(((ze = (Le = n.interaction) == null ? void 0 : Le.stroke) == null ? void 0 : ze.layerKind) || "").trim(), E = String((($e = (Ae = n.interaction) == null ? void 0 : Ae.stroke) == null ? void 0 : $e.toolKind) || "").trim();
    if (!fe || we !== "paint" || E === "eraser" || se.some((ce) => ce.type === "strokeGroup" && String(ce.actionGroupId || "") === fe))
      return se;
    const ge = f();
    let Pe = se.reduce((ce, Ne) => Math.max(ce, Number((Ne == null ? void 0 : Ne.z_index) || 0)), -1) + 1;
    return ge && F(ge) && String(ge.actionGroupId || "") === fe && (Pe = Number(ge.z_index || 0)), [
      ...se,
      {
        type: "strokeGroup",
        id: fe,
        actionGroupId: fe,
        z_index: Pe,
        item: null
      }
    ].sort((ce, Ne) => Number((ce == null ? void 0 : ce.z_index) || 0) - Number((Ne == null ? void 0 : Ne.z_index) || 0));
  }
  function w() {
    return ye().slice().sort((C, se) => Number((C == null ? void 0 : C.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)).map((C) => x(ie("paint", (C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || ""))).filter(Boolean);
  }
  function M() {
    var C;
    return (Array.isArray((C = i.painting) == null ? void 0 : C.raster_objects) ? i.painting.raster_objects : []).filter((se) => String((se == null ? void 0 : se.layerKind) || "paint") === "paint").slice().sort((se, fe) => Number((se == null ? void 0 : se.z_index) || 0) - Number((fe == null ? void 0 : fe.z_index) || 0)).map((se) => p(ke((se == null ? void 0 : se.id) || ""))).filter(Boolean);
  }
  function ae() {
    return Array.isArray(i.stickers) ? K() : [];
  }
  function ee() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ae(), ...H()];
  }
  function R(C) {
    return !!C && Array.isArray(i.shots) && i.shots.includes(C);
  }
  function v(C) {
    return !!C && (Array.isArray(i.stickers) && i.stickers.includes(C) || It(C));
  }
  function U() {
    var C;
    return Array.isArray((C = i.painting) == null ? void 0 : C.raster_objects) ? i.painting.raster_objects : [];
  }
  function p(C) {
    const se = de(C);
    if (!se) return null;
    const fe = U().find((we) => String((we == null ? void 0 : we.id) || "").trim() === se);
    return !fe || String((fe == null ? void 0 : fe.layerKind) || "paint") !== "paint" ? null : {
      ...fe,
      id: ke(se),
      type: "rasterObject",
      rasterObjectId: se
    };
  }
  function h(C) {
    if (!C || typeof C != "object" || String(C.type || "") !== "rasterObject") return !1;
    const se = de(C.rasterObjectId || C.id || "");
    return !!se && !!p(ke(se));
  }
  function x(C) {
    const se = ue(C), fe = String(se.actionGroupId || "").trim();
    if (!fe) return null;
    const we = ye().find((E) => String((E == null ? void 0 : E.id) || (E == null ? void 0 : E.actionGroupId) || "") === fe || String((E == null ? void 0 : E.actionGroupId) || "") === fe);
    return we ? {
      ...we,
      id: ie("paint", fe),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: fe
    } : null;
  }
  function F(C) {
    if (!C || typeof C != "object" || String(C.type || "") !== "strokeGroup") return !1;
    const se = String(C.actionGroupId || "").trim(), fe = String(C.layerKind || "paint").trim() || "paint";
    return !!se && !!x(ie(fe, se));
  }
  function L(C, se = null) {
    const fe = ue(C, se), we = String(fe.actionGroupId || "").trim();
    return we ? d(fe.layerKind).filter((E) => String((E == null ? void 0 : E.actionGroupId) || "").trim() === we) : [];
  }
  function J(C, se = "paint") {
    const fe = String(C || "").trim(), E = `geomv5:${String(se || "paint").trim() || "paint"}:${fe}:${n.mode}:${u()}`;
    if (n.mode === "frame") {
      const ge = a(), Pe = String((ge == null ? void 0 : ge.id) || ""), Ce = ge ? c(ge) : null;
      return `${E}:frame:${Pe}:${Math.round(Number((ge == null ? void 0 : ge.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.roll_deg) ?? (ge == null ? void 0 : ge.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Ce == null ? void 0 : Ce.x) || 0))}:${Math.round(Number((Ce == null ? void 0 : Ce.y) || 0))}:${Math.round(Number((Ce == null ? void 0 : Ce.w) || 0))}:${Math.round(Number((Ce == null ? void 0 : Ce.h) || 0))}`;
    }
    return `${E}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function le(C, se, fe) {
    return !C || typeof C != "object" ? C : {
      ...C,
      u: ((Number(C.u || 0) + Number(se || 0)) % 1 + 1) % 1,
      v: Fe(Number(C.v || 0) + Number(fe || 0), 0, 1)
    };
  }
  function k(C, se) {
    let fe = Number(C || 0) - Number(se || 0);
    for (; fe > 0.5; ) fe -= 1;
    for (; fe < -0.5; ) fe += 1;
    return fe;
  }
  function j(C, se = null, fe = null) {
    var Le;
    const we = ue(C, se), E = Array.isArray(fe) ? fe : L(we.actionGroupId, we.layerKind), ge = [];
    if (E.forEach((ze) => {
      const Ae = (ze == null ? void 0 : ze.geometry) || null, $e = (Ae == null ? void 0 : Ae.geometryKind) === "lasso_fill" ? Ae == null ? void 0 : Ae.points : (Ae == null ? void 0 : Ae.processedPoints) || (Ae == null ? void 0 : Ae.rawPoints) || (Ae == null ? void 0 : Ae.points) || [];
      Array.isArray($e) && ge.push(...$e);
    }), !ge.length) return { u: 0.5, v: 0.5 };
    const Pe = Number(((Le = ge[0]) == null ? void 0 : Le.u) || 0);
    let Ce = 0, Te = 0;
    return ge.forEach((ze) => {
      Ce += Pe + k(Number((ze == null ? void 0 : ze.u) || 0), Pe), Te += Number((ze == null ? void 0 : ze.v) || 0);
    }), {
      u: (Ce / ge.length % 1 + 1) % 1,
      v: Fe(Te / ge.length, 0, 1)
    };
  }
  function _(C, se, fe = 1, we = 0) {
    if (!C || typeof C != "object") return C;
    const E = Number((se == null ? void 0 : se.u) || 0), ge = Number((se == null ? void 0 : se.v) || 0), Pe = k(Number(C.u || 0), E), Ce = Number(C.v || 0) - ge, Te = Number(we || 0) * tr, Le = Math.cos(Te), ze = Math.sin(Te), Ae = Math.max(0.02, Number(fe || 1)), $e = (Pe * Le - Ce * ze) * Ae, ce = (Pe * ze + Ce * Le) * Ae;
    return {
      ...C,
      u: ((E + $e) % 1 + 1) % 1,
      v: Fe(ge + ce, 0, 1)
    };
  }
  function O(C, se, fe, we = null, E = null, ge = null) {
    const Pe = ue(C, E), Ce = String(Pe.actionGroupId || "").trim();
    if (!Ce) return !1;
    const Te = d(Pe.layerKind), Le = Array.isArray(we) ? new Map(we.map((Ae) => [String((Ae == null ? void 0 : Ae.id) || ""), Ae])) : null;
    let ze = !1;
    if (Te.forEach((Ae) => {
      if (String((Ae == null ? void 0 : Ae.actionGroupId) || "").trim() !== Ce) return;
      const $e = (Le == null ? void 0 : Le.get(String((Ae == null ? void 0 : Ae.id) || ""))) || Ae, ce = Ae == null ? void 0 : Ae.geometry, Ne = $e == null ? void 0 : $e.geometry;
      !ce || !Ne || (Array.isArray(Ne.points) && (ce.points = Ne.points.map((Ie) => le(Ie, se, fe)), ze = !0), Array.isArray(Ne.rawPoints) && (ce.rawPoints = Ne.rawPoints.map((Ie) => le(Ie, se, fe)), ze = !0), Array.isArray(Ne.processedPoints) && (ce.processedPoints = Ne.processedPoints.map((Ie) => le(Ie, se, fe)), ze = !0));
    }), ze && ge) {
      const Ae = ye().find(($e) => String(($e == null ? void 0 : $e.actionGroupId) || "") === Ce);
      Ae && (Ae.frame = null);
    }
    return ze;
  }
  function Y(C, se = 1, fe = 0, we = null, E = null, ge = null) {
    const Pe = ue(C, E), Ce = String(Pe.actionGroupId || "").trim();
    if (!Ce) return !1;
    const Te = d(Pe.layerKind), Le = Array.isArray(we) ? we : L(Ce, Pe.layerKind), ze = Array.isArray(Le) ? new Map(Le.map((ce) => [String((ce == null ? void 0 : ce.id) || ""), ce])) : null, Ae = (ge == null ? void 0 : ge.centerUv) ?? j(Ce, Pe.layerKind, Le);
    let $e = !1;
    if (Te.forEach((ce) => {
      if (String((ce == null ? void 0 : ce.actionGroupId) || "").trim() !== Ce) return;
      const Ne = (ze == null ? void 0 : ze.get(String((ce == null ? void 0 : ce.id) || ""))) || ce, Ie = ce == null ? void 0 : ce.geometry, Ee = Ne == null ? void 0 : Ne.geometry;
      !Ie || !Ee || (Array.isArray(Ee.points) && (Ie.points = Ee.points.map((je) => _(je, Ae, se, fe)), $e = !0), Array.isArray(Ee.rawPoints) && (Ie.rawPoints = Ee.rawPoints.map((je) => _(je, Ae, se, fe)), $e = !0), Array.isArray(Ee.processedPoints) && (Ie.processedPoints = Ee.processedPoints.map((je) => _(je, Ae, se, fe)), $e = !0));
    }), $e && ge) {
      const ce = ye().find((Ne) => String((Ne == null ? void 0 : Ne.actionGroupId) || "") === Ce);
      ce && (ce.frame = null);
    }
    return $e;
  }
  function ve(C, se, fe, we = null) {
    const E = de(C);
    if (!E) return !1;
    const ge = U().find((ze) => String((ze == null ? void 0 : ze.id) || "").trim() === E);
    if (!ge) return !1;
    const Pe = we && typeof we == "object" ? we : ge, Ce = (Pe == null ? void 0 : Pe.transform) || {}, Te = Number(Ce.du || 0) + Number(se || 0), Le = Fe(Number(Ce.dv || 0) + Number(fe || 0), -1, 1);
    return ge.transform || (ge.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ge.transform.du = Te, ge.transform.dv = Le, !0;
  }
  function _e(C, se = 1, fe = null) {
    const we = de(C);
    if (!we) return !1;
    const E = U().find((Le) => String((Le == null ? void 0 : Le.id) || "").trim() === we);
    if (!E) return !1;
    const ge = fe && typeof fe == "object" ? fe : E, Pe = (ge == null ? void 0 : ge.transform) || {}, Ce = Math.max(0.01, Number(Pe.scale || 1)), Te = Fe(Ce * Math.max(0.01, Number(se || 1)), 0.01, 100);
    return E.transform || (E.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), E.transform.scale = Te, !0;
  }
  function xe() {
    return B();
  }
  function Z(C) {
    var se;
    return !C || typeof C != "object" ? !1 : o ? ((se = C.source) == null ? void 0 : se.kind) === "port" : String(C.id || "") === ud || String(C.source_kind || "") === $2;
  }
  function be(C) {
    return !!(C && typeof C == "object" && C.visible === !1);
  }
  function z(C) {
    return Z(C) && be(C) ? Kh : 1;
  }
  function oe(C, se, fe = 1, we = 0) {
    if (!C || typeof C != "object") return C;
    const E = Number((se == null ? void 0 : se.u) || 0), ge = Number((se == null ? void 0 : se.v) || 0), Pe = k(Number(C.u || 0), E), Ce = Number(C.v || 0) - ge, Te = Math.max(0.02, Number(fe || 1)), Le = Number(we || 0) * tr, ze = Math.cos(Le), Ae = Math.sin(Le), $e = Pe / Te, ce = Ce / Te, Ne = $e * ze + ce * Ae, Ie = -$e * Ae + ce * ze;
    return {
      ...C,
      u: ((E + Ne) % 1 + 1) % 1,
      v: ge + Ie
    };
  }
  function q(C) {
    const se = (C == null ? void 0 : C.bbox) || null, fe = (C == null ? void 0 : C.transform) || {};
    return se ? {
      u: (((Number(se.u0 || 0) + Number(se.u1 || 0)) * 0.5 + Number(fe.du || 0)) % 1 + 1) % 1,
      v: Fe((Number(se.v0 || 0) + Number(se.v1 || 0)) * 0.5 + Number(fe.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function re(C) {
    var Te, Le, ze, Ae;
    const se = (C == null ? void 0 : C.bbox) || null;
    if (!se) return [];
    const fe = {
      u: (Number(se.u0 || 0) + Number(se.u1 || 0)) * 0.5,
      v: (Number(se.v0 || 0) + Number(se.v1 || 0)) * 0.5
    }, we = Math.max(0.01, Number(((Te = C == null ? void 0 : C.transform) == null ? void 0 : Te.scale) || 1)), E = Number(((Le = C == null ? void 0 : C.transform) == null ? void 0 : Le.rot_deg) || 0), ge = Number(((ze = C == null ? void 0 : C.transform) == null ? void 0 : ze.du) || 0), Pe = Number(((Ae = C == null ? void 0 : C.transform) == null ? void 0 : Ae.dv) || 0);
    return [
      { u: Number(se.u0 || 0), v: Number(se.v0 || 0) },
      { u: Number(se.u1 || 0), v: Number(se.v0 || 0) },
      { u: Number(se.u1 || 0), v: Number(se.v1 || 0) },
      { u: Number(se.u0 || 0), v: Number(se.v1 || 0) }
    ].map(($e) => le(_($e, fe, we, E), ge, Pe));
  }
  function Q(C) {
    const se = de((C == null ? void 0 : C.rasterObjectId) || (C == null ? void 0 : C.id) || ""), fe = (C == null ? void 0 : C.transform) || {}, we = (C == null ? void 0 : C.bbox) || {}, E = `${se}:${n.mode}:${u()}:${we.u0}:${we.v0}:${we.u1}:${we.v1}:${fe.du}:${fe.dv}:${fe.rot_deg}:${fe.scale}`;
    if (n.mode === "frame") {
      const ge = a(), Pe = ge ? c(ge) : null;
      return `${E}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((Pe == null ? void 0 : Pe.x) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.y) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.w) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.h) || 0))}`;
    }
    return `${E}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function te(C) {
    const se = String((C == null ? void 0 : C.id) || ""), fe = R(C) ? "frame" : v(C) ? "sticker" : "item", we = V(C), E = [
      fe,
      se,
      n.mode,
      Number((we == null ? void 0 : we.yaw_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.pitch_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.hFOV_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.vFOV_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.rot_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.roll_deg) || 0).toFixed(4),
      fr(we),
      N(C) && S(C)
    ].join(":");
    if (n.mode === "frame") {
      const ge = a(), Pe = ge ? c(ge) : null;
      return `${E}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((Pe == null ? void 0 : Pe.x) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.y) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.w) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.h) || 0))}`;
    }
    return `${E}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function X() {
    pe().forEach((se, fe) => {
      se.type === "sticker" && se.item && (se.item.z_index = fe), se.type === "strokeGroup" && se.item && (se.item.z_index = fe), se.type === "rasterObject" && se.item && (se.item.z_index = fe);
    });
  }
  return {
    connect(C) {
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
        upstreamStickers: b
      } = C);
    },
    getList: y,
    skyStickers: K,
    upstreamSkyStickers: H,
    stickerById: D,
    isSceneSticker: N,
    isUploadingSticker: $,
    poseOf: V,
    writePose: W,
    getPaintingGroupList: ye,
    makeStrokeGroupSelectionId: ie,
    makeRasterObjectSelectionId: ke,
    parseRasterObjectSelectionId: de,
    ensurePaintingGroupEntry: he,
    getFrameCornersUv: ne,
    ensureGroupFrame: A,
    getDisplayListObjects: pe,
    getOrderedPaintGroupIds: P,
    getOrderedDisplayListObjects: I,
    getSelectableStrokeGroupItems: w,
    getSelectableRasterObjectItems: M,
    cutoutStickers: ae,
    getCutoutSelectableItems: ee,
    isShotItem: R,
    isStickerItem: v,
    getRasterObjectList: U,
    getRasterObjectItem: p,
    isRasterObjectItem: h,
    getStrokeGroupItem: x,
    isStrokeGroupItem: F,
    getStrokeGroupStrokes: L,
    getStrokeGeomCacheKey: J,
    shortestWrappedDelta: k,
    getStrokeGroupCenterUv: j,
    applyStrokeGroupOffset: O,
    applyStrokeGroupTransform: Y,
    applyRasterObjectOffset: ve,
    applyRasterObjectTransform: _e,
    getNextStickerZIndex: xe,
    isExternalSticker: Z,
    isStickerHidden: be,
    getStickerDisplayAlpha: z,
    inverseTransformErpPointAround: oe,
    getRasterObjectCenterUv: q,
    getRasterObjectTransformedErpPoints: re,
    getRasterObjectGeomCacheKey: Q,
    getSceneItemGeomCacheKey: te,
    normalizeDisplayZIndices: X
  };
}
function _A(e) {
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
  let c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w;
  function M() {
    const Q = String(t.selectedId || "");
    if (!Q) return null;
    const te = N(Q);
    if (te) return te;
    const X = K(Q);
    return X || (o ? S().find((C) => String((C == null ? void 0 : C.id) || "") === Q) || null : b().find((C) => String((C == null ? void 0 : C.id) || "") === Q) || null);
  }
  function ae() {
    const Q = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], te = [], X = /* @__PURE__ */ new Set();
    return Q.forEach((C) => {
      const se = String(C || "").trim();
      if (!se || X.has(se)) return;
      X.add(se);
      const fe = se === String(t.selectedId || "") ? M() : N(se) || K(se) || (o ? S().find((we) => String((we == null ? void 0 : we.id) || "") === se) : b().find((we) => String((we == null ? void 0 : we.id) || "") === se));
      fe && te.push(fe);
    }), te;
  }
  function ee(Q = null) {
    const te = Array.isArray(Q) ? Q : ae();
    if (!te || te.length < 2) return null;
    const X = te.map((Pe) => B(Pe)).filter((Pe) => (Pe == null ? void 0 : Pe.visible) && Array.isArray(Pe.corners) && Pe.corners.length);
    if (!X.length) return null;
    const C = X.flatMap((Pe) => Pe.corners.map((Ce) => Number((Ce == null ? void 0 : Ce.x) || 0))), se = X.flatMap((Pe) => Pe.corners.map((Ce) => Number((Ce == null ? void 0 : Ce.y) || 0))), fe = Math.min(...C), we = Math.max(...C), E = Math.min(...se), ge = Math.max(...se);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (fe + we) * 0.5, y: (E + ge) * 0.5 },
      corners: [
        { x: fe, y: E },
        { x: we, y: E },
        { x: we, y: ge },
        { x: fe, y: ge }
      ],
      edgeMidpoints: [
        { edge: "top", x: (fe + we) * 0.5, y: E, a: { x: fe, y: E }, b: { x: we, y: E } },
        { edge: "right", x: we, y: (E + ge) * 0.5, a: { x: we, y: E }, b: { x: we, y: ge } },
        { edge: "bottom", x: (fe + we) * 0.5, y: ge, a: { x: we, y: ge }, b: { x: fe, y: ge } },
        { edge: "left", x: fe, y: (E + ge) * 0.5, a: { x: fe, y: ge }, b: { x: fe, y: E } }
      ],
      rotateStemBase: { x: (fe + we) * 0.5, y: E },
      rotateHandle: { x: (fe + we) * 0.5, y: E - 30 }
    };
  }
  function R(Q) {
    const te = String((Q == null ? void 0 : Q.id) || "").trim();
    return !!te && Array.isArray(t.selectedIds) && t.selectedIds.includes(te);
  }
  function v() {
    const Q = M();
    return Q ? ke(Q) || W(Q) ? "stroke" : Se(Q) ? "frame" : "image" : null;
  }
  function U(Q) {
    if (!Q || typeof Q != "object") return !1;
    if (ke(Q)) {
      const te = String(Q.actionGroupId || Q.id || "").trim(), X = y().find((C) => String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "").trim() === te);
      return (X == null ? void 0 : X.locked) === !0;
    }
    if (W(Q)) {
      const te = ne(Q.rasterObjectId || Q.id || ""), X = H().find((C) => String((C == null ? void 0 : C.id) || "").trim() === te);
      return (X == null ? void 0 : X.locked) === !0;
    }
    return It(Q) && !va(Q) ? !0 : Q.locked === !0;
  }
  function p(Q = null) {
    const te = Array.isArray(Q) ? Q : ae();
    return te.length > 0 && te.every((X) => U(X));
  }
  function h(Q, te) {
    const X = te === !0;
    if (!Q || typeof Q != "object") return !1;
    if (ke(Q)) {
      const C = String(Q.actionGroupId || Q.id || "").trim(), se = y().find((fe) => String((fe == null ? void 0 : fe.actionGroupId) || (fe == null ? void 0 : fe.id) || "").trim() === C);
      return !se || se.locked === X ? !1 : (se.locked = X, !0);
    }
    if (W(Q)) {
      const C = ne(Q.rasterObjectId || Q.id || ""), se = H().find((fe) => String((fe == null ? void 0 : fe.id) || "").trim() === C);
      return !se || se.locked === X ? !1 : (se.locked = X, !0);
    }
    return Q.locked === X || It(Q) && !va(Q) ? !1 : (Q.locked = X, !0);
  }
  function x() {
    if (n) return;
    const Q = ae();
    if (!Q.length) return;
    const te = !p(Q);
    let X = !1;
    Q.forEach((C) => {
      h(C, te) && (X = !0);
    }), X && (G(), d(), I(), w(), A());
  }
  function F(Q) {
    Z(), a.selection = null, t.selectedId = (Q == null ? void 0 : Q.id) || null, t.selectedIds = Q != null && Q.id ? [Q.id] : [], Q && ie(Q) && !It(Q) ? s.active.selected_sticker_id = Q.id || null : s.active.selected_sticker_id = null, Q && Se(Q) ? s.active.selected_shot_id = Q.id || null : Q ? Se(Q) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function L(Q, te = null) {
    const X = [], C = /* @__PURE__ */ new Set();
    (Array.isArray(Q) ? Q : []).forEach((we) => {
      const E = String((we == null ? void 0 : we.id) || "").trim();
      !E || C.has(E) || (C.add(E), X.push(E));
    }), t.selectedIds = X, Z(), a.selection = null;
    const se = String(te || "").trim();
    t.selectedId = se && X.includes(se) ? se : X[X.length - 1] || null;
    const fe = M();
    s.active.selected_sticker_id = fe && ie(fe) && !It(fe) && fe.id || null, fe && Se(fe) ? s.active.selected_shot_id = fe.id || null : X.length || (s.active.selected_shot_id = null);
  }
  function J() {
    const Q = (Array.isArray(s.shots) ? s.shots : []).map((X, C) => ({
      kind: "frame",
      item: X,
      label: String((X == null ? void 0 : X.label) || `Frame ${C + 1}`)
    })), te = f().map((X, C) => {
      var fe, we;
      const se = V(X) ? String(X.id || ud) : String(((we = (fe = s.assets) == null ? void 0 : fe[X.asset_id]) == null ? void 0 : we.name) || X.asset_id || X.id || `Image ${C + 1}`);
      return {
        kind: "image",
        item: X,
        label: se
      };
    });
    return [...Q, ...te];
  }
  function le(Q) {
    return Q === "frame" ? He.camera : Q === "stroke" ? He.paintbrush_vertical_tool : He.image;
  }
  function k(Q) {
    return !Q || !Q.item ? {
      label: String((Q == null ? void 0 : Q.label) || ""),
      icon: null
    } : {
      label: String(Q.label || ""),
      icon: le(Q.kind)
    };
  }
  function j() {
    if (n) return;
    const Q = M();
    !Q || !V(Q) || (Q.visible = me(Q), oe(), de(), G(), d(), w(), I(), A());
  }
  function _() {
    if (n || l !== "stickers") return;
    const Q = M();
    if (!Q || !V(Q)) return;
    const te = Q.initial_pose;
    if (!te || typeof te != "object") return;
    Q.yaw_deg = Number(te.yaw_deg ?? Q.yaw_deg ?? 0), Q.pitch_deg = Number(te.pitch_deg ?? Q.pitch_deg ?? 0), Q.hFOV_deg = Number(te.hFOV_deg ?? Q.hFOV_deg ?? 30);
    const X = D(ri, () => {
      A();
    });
    X && (X.complete || X.naturalWidth || X.width) ? Q.vFOV_deg = u(
      Number(te.hFOV_deg ?? Q.hFOV_deg ?? 30),
      Number(X.naturalWidth || X.width || 1),
      Number(X.naturalHeight || X.height || 1)
    ) : Q.vFOV_deg = Number(te.vFOV_deg ?? Q.vFOV_deg ?? 30), Q.rot_deg = Number(te.rot_deg ?? Q.rot_deg ?? 0), G(), d(), w(), I(), A();
  }
  function O(Q) {
    if (!Q || !V(Q)) return null;
    const te = Q.initial_pose;
    if (!te || typeof te != "object") return null;
    const X = {
      yaw_deg: Number(te.yaw_deg ?? Q.yaw_deg ?? 0),
      pitch_deg: Number(te.pitch_deg ?? Q.pitch_deg ?? 0),
      hFOV_deg: Number(te.hFOV_deg ?? Q.hFOV_deg ?? 30),
      vFOV_deg: Number(te.vFOV_deg ?? Q.vFOV_deg ?? 30),
      rot_deg: Number(te.rot_deg ?? Q.rot_deg ?? 0)
    }, C = D(ri, () => {
      A();
    });
    return C && (C.complete || C.naturalWidth || C.width) && (X.vFOV_deg = u(
      X.hFOV_deg,
      Number(C.naturalWidth || C.width || 1),
      Number(C.naturalHeight || C.height || 1)
    )), X;
  }
  function Y() {
    const Q = M();
    if (!Q || !V(Q)) return !1;
    const te = O(Q);
    if (!te) return !1;
    const X = (C, se) => Math.abs(Number(C || 0) - Number(se || 0)) <= 1e-4;
    return !(X(Q.yaw_deg, te.yaw_deg) && X(Q.pitch_deg, te.pitch_deg) && X(Q.hFOV_deg, te.hFOV_deg) && X(Q.vFOV_deg, te.vFOV_deg) && X(Q.rot_deg, te.rot_deg));
  }
  function ve(Q = {}) {
    const X = Q.preservePanelValues !== !1 ? T(M()) : null;
    X && (t.panelLastValues = {
      yaw_deg: Number(X.yaw_deg || 0),
      pitch_deg: Number(X.pitch_deg || 0),
      hFOV_deg: Number(X.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(X.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(X.rot_deg || 0),
      roll_deg: Number(X.roll_deg || 0),
      aspect_id: fr(X)
    }), t.selectedId = null, t.selectedIds = [], Z(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function _e() {
    if (!i || !t.worldSelectedId) return null;
    const Q = P(t.worldSelectedId);
    return (Q == null ? void 0 : Q.placement) === "world" ? Q : null;
  }
  function xe(Q) {
    F(null), t.worldSelectedId = Q, r.backgroundDirty = !0;
  }
  function Z() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function be(Q) {
    return !!Q && !n && !U(Q);
  }
  function z() {
    if (l !== "cutout") return;
    const Q = m();
    Q && (t.selectedId = String(Q.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function oe() {
    var te;
    const Q = M();
    (ye(Q) && !pe(Q) || t.selectedId === Iu && $() && !c() || v() === "stroke" && !he()) && F(null), ((te = _e()) == null ? void 0 : te.visible) === !1 && Z();
  }
  function q() {
    if (n) return;
    const Q = ae();
    if (!M() || Q.length === 0 || Q.some(It) || Q.some((E) => U(E))) return;
    ue();
    const X = g(), C = new Set(Q.map((E) => ie(E) ? `sticker:${String(E.id || "")}` : W(E) ? `rasterObject:${ne(E.rasterObjectId || E.id || "")}` : `strokeGroup:${String(E.actionGroupId || E.id || "")}`)), se = [], fe = [];
    if (X.forEach((E) => {
      var Pe, Ce;
      const ge = E.type === "sticker" ? `sticker:${String(((Pe = E.item) == null ? void 0 : Pe.id) || "")}` : E.type === "rasterObject" ? `rasterObject:${String(((Ce = E.item) == null ? void 0 : Ce.id) || E.id || "")}` : `strokeGroup:${String(E.actionGroupId || "")}`;
      C.has(ge) ? se.push(E) : fe.push(E);
    }), !se.length || se[se.length - 1] === X[X.length - 1]) return;
    [...fe, ...se].forEach((E, ge) => {
      E.type === "sticker" && E.item && (E.item.z_index = ge), E.type === "strokeGroup" && E.item && (E.item.z_index = ge), E.type === "rasterObject" && E.item && (E.item.z_index = ge);
    }), de(), G(), d(), I(), A();
  }
  function re() {
    if (n) return;
    const Q = ae();
    if (!M() || Q.length === 0 || Q.some(It) || Q.some((E) => U(E))) return;
    ue();
    const X = g(), C = new Set(Q.map((E) => ie(E) ? `sticker:${String(E.id || "")}` : W(E) ? `rasterObject:${ne(E.rasterObjectId || E.id || "")}` : `strokeGroup:${String(E.actionGroupId || E.id || "")}`)), se = [], fe = [];
    if (X.forEach((E) => {
      var Pe, Ce;
      const ge = E.type === "sticker" ? `sticker:${String(((Pe = E.item) == null ? void 0 : Pe.id) || "")}` : E.type === "rasterObject" ? `rasterObject:${String(((Ce = E.item) == null ? void 0 : Ce.id) || E.id || "")}` : `strokeGroup:${String(E.actionGroupId || "")}`;
      C.has(ge) ? se.push(E) : fe.push(E);
    }), !se.length || se[0] === X[0]) return;
    [...se, ...fe].forEach((E, ge) => {
      E.type === "sticker" && E.item && (E.item.z_index = ge), E.type === "strokeGroup" && E.item && (E.item.z_index = ge), E.type === "rasterObject" && E.item && (E.item.z_index = ge);
    }), de(), G(), d(), I(), A();
  }
  return {
    connect(Q) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: m,
        getCutoutSelectableItems: S,
        getDisplayListObjects: g,
        getList: b,
        getPaintingGroupList: y,
        getRasterObjectItem: K,
        getRasterObjectList: H,
        getStickerUiImage: D,
        getStrokeGroupItem: N,
        hasCamera: $,
        isExternalSticker: V,
        isRasterObjectItem: W,
        isSceneSticker: ye,
        isShotItem: Se,
        isStickerHidden: me,
        isStickerItem: ie,
        isStrokeGroupItem: ke,
        markObjectVisualsDirty: de,
        normalizeDisplayZIndices: ue,
        objectGeom: B,
        paintingShown: he,
        parseRasterObjectSelectionId: ne,
        poseOf: T,
        pushHistory: G,
        requestDraw: A,
        sceneStickerShown: pe,
        stickerById: P,
        updateSelectionMenu: I,
        updateSidePanel: w
      } = Q);
    },
    getSelected: M,
    getSelectedItems: ae,
    getMultiSelectionGeom: ee,
    isItemSelected: R,
    getSelectedKind: v,
    isItemLocked: U,
    areAllSelectedItemsLocked: p,
    toggleSelectedLock: x,
    setSelectedItem: F,
    setSelectedItems: L,
    getCutoutInspectorItems: J,
    getSelectionItemIcon: le,
    getSelectionItemLabelData: k,
    toggleSelectedExternalStickerVisibility: j,
    restoreSelectedToInitialPose: _,
    canRestoreSelectedToInitial: Y,
    clearSelection: ve,
    selectedWorldSticker: _e,
    selectWorldSticker: xe,
    clearWorldSelection: Z,
    worldStickerEditable: be,
    applyInitialCutoutFocus: z,
    releaseHiddenSelection: oe,
    bringSelectedToFront: q,
    sendSelectedToBack: re
  };
}
function wA(e) {
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
    const M = W({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !M || M.length !== 4 ? !1 : M[0].y >= M[3].y;
  }
  function g() {
    return Wh({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function b() {
    const w = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return w.some((M, ae) => M !== f.key[ae]) && (f = { key: w, projection: Bh(g(), n.width, n.height) }), f.projection;
  }
  function y(w) {
    const M = b().project(w);
    return M.z > 1e-4 ? M : null;
  }
  function K(w, M) {
    return b().ray(w, M);
  }
  function H() {
    const w = n.width, M = n.height, ae = 2;
    if (w / Math.max(M, 1) >= ae) {
      const p = M, h = p * ae;
      return { x: (w - h) * 0.5, y: 0, w: h, h: p };
    }
    const R = w, v = R / ae;
    return { x: 0, y: (M - v) * 0.5, w: R, h: v };
  }
  function D(w) {
    return {
      lon: Math.atan2(w.x, w.z),
      lat: Math.asin(Fe(w.y, -1, 1))
    };
  }
  function N(w, M = null) {
    const { lon: ae, lat: ee } = D(w), R = H();
    let v = R.x + (ae / (2 * Math.PI) + 0.5) * R.w;
    const U = R.y + (0.5 - ee / Math.PI) * R.h;
    if (M !== null) {
      for (; v - M > R.w / 2; ) v -= R.w;
      for (; v - M < -R.w / 2; ) v += R.w;
    }
    return { x: v, y: U, z: 1 };
  }
  function $(w) {
    const M = c(w), ae = Wi(
      Number(M.yaw_deg || 0),
      Number(M.pitch_deg || 0),
      Number(M.rot_deg || M.roll_deg || 0)
    ), ee = Math.tan(Fe(Number(M.hFOV_deg || 20), 0.1, 179) * 0.5 * tr), R = Math.tan(Fe(Number(M.vFOV_deg || 20), 0.1, 179) * 0.5 * tr);
    return {
      centerDir: ae.fwd,
      right: ae.right,
      up: ae.up,
      tanX: ee,
      tanY: R
    };
  }
  function V(w, M, ae) {
    return Z2(bp(bp(w.centerDir, vp(w.right, M)), vp(w.up, ae)));
  }
  function W(w) {
    const M = $(w);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: ee, v: R }) => V(M, ee * M.tanX, R * M.tanY));
  }
  function ye(w, M, ae) {
    const ee = $(w), R = (M * 2 - 1) * ee.tanX, v = (1 - ae * 2) * ee.tanY;
    return V(ee, R, v);
  }
  function Se(w) {
    const M = t.width / Math.max(1, n.width), ae = t.height / Math.max(1, n.height);
    return { x: w.x * M, y: w.y * ae, w: w.w * M, h: w.h * ae };
  }
  function me(w, M = null, ae = null, ee = null) {
    if (r.mode === "frame") {
      const R = M || a();
      if (!R) return [];
      const v = ae || l(R);
      return G(w, R, v);
    }
    return he(w, ee);
  }
  function ie(w, M = null, ae = null, ee = null, R = null) {
    if (!w) return null;
    if (r.mode === "unwrap") {
      const U = he([w], R);
      return U[0] ? { x: U[0].x, y: U[0].y, z: 1 } : null;
    }
    const v = de(w);
    return v ? d(v, M, ae, ee) : null;
  }
  function ke(w, M) {
    if (!w || !M) return null;
    const ae = Number(M.x || 0), ee = Number(M.y || 0);
    return ye(w, ae, ee);
  }
  function de(w) {
    if (!w) return null;
    const M = (Number(w.u || 0) - 0.5) * (2 * Math.PI), ae = (0.5 - Number(w.v || 0)) * Math.PI, ee = Math.cos(ae);
    return tl(ee * Math.sin(M), Math.sin(ae), ee * Math.cos(M));
  }
  function ue(w, M) {
    if (!w || !M) return null;
    const ae = $(w), ee = ql(M, ae.centerDir);
    if (!Number.isFinite(ee) || ee <= 1e-6) return null;
    const R = ql(M, ae.right) / ee, v = ql(M, ae.up) / ee;
    return {
      x: (R / Math.max(1e-6, ae.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, ae.tanY)) * 0.5
    };
  }
  function B(w) {
    if (!Array.isArray(w) || w.length < 3) return [];
    if (r.mode === "unwrap") {
      const ae = H();
      return w.map((ee) => ({
        x: ae.x + Number(ee.u || 0) * ae.w,
        y: ae.y + Number(ee.v || 0) * ae.h
      }));
    }
    const M = w.map((ae) => y(de(ae))).filter(Boolean);
    return M.every((ae) => Number(ae.z || 0) > 0) ? M.map((ae) => ({ x: Number(ae.x || 0), y: Number(ae.y || 0) })) : [];
  }
  function he(w, M = null) {
    if (!Array.isArray(w) || w.length < 1) return [];
    if (r.mode === "unwrap") {
      const ee = H();
      return w.map((R) => {
        const v = (Number(R.u || 0) % 1 + 1) % 1, U = M == null ? v : Number(M || 0) + u(v, M);
        return {
          x: ee.x + U * ee.w,
          y: ee.y + Number(R.v || 0) * ee.h
        };
      });
    }
    const ae = w.map((ee) => y(de(ee))).filter(Boolean);
    return ae.every((ee) => Number(ee.z || 0) > 0) ? ae.map((ee) => ({ x: Number(ee.x || 0), y: Number(ee.y || 0) })) : [];
  }
  function ne(w, M = 160) {
    if (!Array.isArray(w) || w.length < 3) return !1;
    for (let ae = 0; ae < w.length; ae += 1) {
      const ee = w[ae], R = w[(ae + 1) % w.length];
      if (!ee || !R || !Number.isFinite(ee.x) || !Number.isFinite(ee.y) || !Number.isFinite(R.x) || !Number.isFinite(R.y) || Math.hypot(Number(R.x) - Number(ee.x), Number(R.y) - Number(ee.y)) > M) return !1;
    }
    return !0;
  }
  function T(w, M, ae) {
    if (!Array.isArray(w) || w.length < 3 || !M || !ae) return [];
    const ee = [];
    for (const R of w) {
      const v = de(R), U = ue(M, v);
      if (!U) return [];
      ee.push({
        x: Number(ae.x || 0) + Number(U.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(U.y || 0) * Number(ae.h || 0)
      });
    }
    return ne(ee, Math.max(80, Math.max(ae.w, ae.h) * 0.75)) ? ee : [];
  }
  function G(w, M, ae) {
    if (!Array.isArray(w) || w.length < 1 || !M || !ae) return [];
    const ee = [];
    for (const R of w) {
      const v = de(R), U = ue(M, v);
      U && ee.push({
        x: Number(ae.x || 0) + Number(U.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(U.y || 0) * Number(ae.h || 0)
      });
    }
    return ee;
  }
  function A(w) {
    const M = n.getBoundingClientRect();
    return {
      x: (w.clientX - M.left) / M.width * n.width,
      y: (w.clientY - M.top) / M.height * n.height
    };
  }
  function pe(w) {
    const M = n.getBoundingClientRect();
    return {
      x: Number(w.clientX) - Number(M.left || 0),
      y: Number(w.clientY) - Number(M.top || 0)
    };
  }
  function P(w, M = performance.now()) {
    if (r.mode === "unwrap") {
      const v = H(), U = (w.x - v.x) / Math.max(1, v.w), p = (w.y - v.y) / Math.max(1, v.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (U % 1 + 1) % 1,
        v: Fe(p, 0, 1),
        t: Number(M || 0)
      };
    }
    const ae = K(w.x, w.y), { lon: ee, lat: R } = D(ae);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ee / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - R / Math.PI, 0, 1),
      t: Number(M || 0)
    };
  }
  function I(w, M, ae = performance.now()) {
    const ee = l(M);
    if (!ee) return null;
    const R = {
      x: (Number(w.x) - ee.x) / Math.max(1, ee.w),
      y: (Number(w.y) - ee.y) / Math.max(1, ee.h)
    };
    if (R.x < 0 || R.x > 1 || R.y < 0 || R.y > 1) return null;
    const v = ke(M, R);
    if (!v) return null;
    const { lon: U, lat: p } = D(v);
    return {
      targetKind: "ERP_GLOBAL",
      u: (U / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - p / Math.PI, 0, 1),
      t: Number(ae || 0)
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
    currentViewProjection: b,
    projectDir: y,
    screenToWorldDir: K,
    getUnwrapRect: H,
    projectDirUnwrap: N,
    getStickerFrame: $,
    stickerDirFromFrame: V,
    stickerCornersDir: W,
    stickerSampleDir: ye,
    stickerCornerOrderSanity: S,
    projectEditorPoints: me,
    projectErpPointToEditor: ie,
    frameLocalPointToWorldDir: ke,
    erpPointToWorldDir: de,
    worldDirToFrameLocalPoint: ue,
    projectLassoPointsToCurrentView: B,
    projectErpLassoPointsToFrameRect: T,
    screenPos: A,
    screenPosCss: pe,
    screenPosToErpPoint: P,
    screenPosToFrameAsErpPoint: I,
    deviceRect: Se
  };
}
function kA(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G;
  function A(v, U) {
    const p = String(v.actionGroupId || v.id || "").trim(), h = H(p, v.layerKind), x = a(p, v.layerKind, h), F = (x == null ? void 0 : x.centerUv) || K(p, v.layerKind, h), L = r.mode === "unwrap" ? Number((F == null ? void 0 : F.u) || 0) : null, J = [], le = r.mode === "frame" ? l() : null, k = le ? u(le) : null;
    for (const z of h) {
      const oe = (z == null ? void 0 : z.geometry) || null, q = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [], re = de(q, le, k, L).filter((X) => Number.isFinite(X == null ? void 0 : X.x) && Number.isFinite(X == null ? void 0 : X.y));
      if (!re.length) continue;
      const Q = c(String((z == null ? void 0 : z.toolKind) || "pen")), te = pn[Q] || pn[cr];
      J.push({
        points: re,
        closed: String((oe == null ? void 0 : oe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((z == null ? void 0 : z.size) || 10) * Math.max(0.1, Number((te == null ? void 0 : te.sizeScale) ?? 1)) + 10),
        layerKind: String((z == null ? void 0 : z.layerKind) || v.layerKind || "paint")
      });
    }
    const j = ue(F, null, le, k, L);
    if (!j) {
      const z = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(U, z), z;
    }
    const O = d(x).map((z) => ue(z, j.x, le, k, L)).filter((z) => Number.isFinite(z == null ? void 0 : z.x) && Number.isFinite(z == null ? void 0 : z.y)).map((z) => ({ x: Number(z.x || 0), y: Number(z.y || 0) }));
    if (O.length < 4) {
      const z = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(U, z), z;
    }
    const Y = (z, oe) => ({
      x: (Number((z == null ? void 0 : z.x) || 0) + Number((oe == null ? void 0 : oe.x) || 0)) * 0.5,
      y: (Number((z == null ? void 0 : z.y) || 0) + Number((oe == null ? void 0 : oe.y) || 0)) * 0.5,
      a: z,
      b: oe
    }), ve = Y(O[0], O[1]), _e = Y(O[1], O[2]), xe = Y(O[2], O[3]), Z = Y(O[3], O[0]), be = {
      kind: "strokeGroup",
      center: { x: Number(j.x || 0), y: Number(j.y || 0) },
      corners: O,
      edgeMidpoints: [
        { edge: "top", ...ve },
        { edge: "right", ..._e },
        { edge: "bottom", ...xe },
        { edge: "left", ...Z }
      ],
      rotateStemBase: { x: ve.x, y: ve.y },
      rotateHandle: { x: ve.x, y: ve.y - 30 },
      strokePaths: J,
      visible: !0
    };
    return r._strokeGeomCache.set(U, be), be;
  }
  function pe(v, U) {
    const p = r.mode === "frame" ? l() : null, h = p ? u(p) : null, x = f(v), F = r.mode === "unwrap" ? Number((x == null ? void 0 : x.u) || 0) : null, L = ue(x, null, p, h, F), le = S(v).map((O) => ue(O, (L == null ? void 0 : L.x) ?? null, p, h, F)).filter((O) => Number.isFinite(O == null ? void 0 : O.x) && Number.isFinite(O == null ? void 0 : O.y));
    if (!Array.isArray(le) || le.length < 4) {
      const O = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(U, O), O;
    }
    const k = le.slice(0, 4).map((O) => ({ x: Number((O == null ? void 0 : O.x) || 0), y: Number((O == null ? void 0 : O.y) || 0) })), _ = {
      kind: "rasterObject",
      center: {
        x: k.reduce((O, Y) => O + Number(Y.x || 0), 0) / k.length,
        y: k.reduce((O, Y) => O + Number(Y.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return r._strokeGeomCache.set(U, _), _;
  }
  function P(v, U = null, p = null, h = null, x = {}) {
    if (r.mode === "frame") {
      const j = p || l(), _ = h || u(j);
      if (!j || !_) return null;
      const O = j ? G(j, v) : null;
      return O ? {
        x: Number(_.x || 0) + Number(O.x || 0) * Number(_.w || 0),
        y: Number(_.y || 0) + Number(O.y || 0) * Number(_.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return ke(v, U);
    const F = 1e-4, L = o().project(v, F);
    if (!Number.isFinite(L.z) || L.z <= F && !(x != null && x.clipBehind)) return null;
    const J = n.width, le = n.height, k = Math.max(J, le) * 2;
    return {
      x: Fe(L.x, -k, J + k),
      y: Fe(L.y, -k, le + k),
      z: Math.max(L.z, F),
      rawZ: L.z,
      clipped: L.z <= F
    };
  }
  function I(v, U = []) {
    if (r.mode !== "pano" || W(v)) return 1;
    const p = U.map((h) => Number((h == null ? void 0 : h.rawZ) ?? (h == null ? void 0 : h.z))).filter((h) => Number.isFinite(h));
    return p.length ? X2(0.035, 0.2, Math.min(...p)) : 1;
  }
  function w(v) {
    if ($(v) && !B(v)) return { visible: !1 };
    const U = me(v), p = mn(Number(U.yaw_deg || 0), Number(U.pitch_deg || 0)), h = r.mode === "frame" ? l() : null, x = h ? u(h) : null, F = r.mode === "pano" && (W(v) || V(v)), L = F ? { clipBehind: !0 } : null, J = P(p, null, h, x, L);
    if (!J) return { visible: !1 };
    const le = b(v), j = he(v).map((C) => P(C, J.x, h, x, L)).filter((C) => Number.isFinite(C == null ? void 0 : C.x) && Number.isFinite(C == null ? void 0 : C.y));
    if (j.length < 4) return { visible: !1 };
    const _ = ne(le, 0, le.tanY), O = ne(le, 0, le.tanY + Math.max(le.tanY * 0.43, 0.053)), Y = P(_, J.x, h, x, L);
    if (!Y) return { visible: !1 };
    const ve = P(O, (Y == null ? void 0 : Y.x) ?? J.x, h, x, L), _e = ((ve == null ? void 0 : ve.x) ?? Y.x) - Y.x, xe = ((ve == null ? void 0 : ve.y) ?? Y.y) - Y.y, Z = Math.hypot(_e, xe) || 1, be = {
      x: Y.x + _e / Z * 30,
      y: Y.y + xe / Z * 30
    }, z = P(ne(le, 0, le.tanY), J.x, h, x, L), oe = P(ne(le, le.tanX, 0), J.x, h, x, L), q = P(ne(le, 0, -le.tanY), J.x, h, x, L), re = P(ne(le, -le.tanX, 0), J.x, h, x, L);
    if (!z || !oe || !q || !re) return { visible: !1 };
    const Q = [
      J,
      ...j,
      Y,
      ve,
      z,
      oe,
      q,
      re
    ];
    if (F && !Q.some((C) => Number((C == null ? void 0 : C.rawZ) ?? (C == null ? void 0 : C.z)) > 1e-4)) return { visible: !1 };
    const te = I(v, Q), X = [
      {
        edge: "top",
        x: z.x,
        y: z.y,
        a: { x: j[0].x, y: j[0].y },
        b: { x: j[1].x, y: j[1].y }
      },
      {
        edge: "right",
        x: oe.x,
        y: oe.y,
        a: { x: j[1].x, y: j[1].y },
        b: { x: j[2].x, y: j[2].y }
      },
      {
        edge: "bottom",
        x: q.x,
        y: q.y,
        a: { x: j[2].x, y: j[2].y },
        b: { x: j[3].x, y: j[3].y }
      },
      {
        edge: "left",
        x: re.x,
        y: re.y,
        a: { x: j[3].x, y: j[3].y },
        b: { x: j[0].x, y: j[0].y }
      }
    ];
    return {
      center: { x: J.x, y: J.y },
      corners: j.map((C) => ({ x: C.x, y: C.y })),
      edgeMidpoints: X,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: be,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: te,
      visible: !0
    };
  }
  function M(v) {
    if (t && V(v) && D()) return { visible: !1 };
    if (!Se() && (ye(v) || N(v))) return { visible: !1 };
    if (ye(v)) {
      const x = String(v.actionGroupId || v.id || "").trim(), F = y(x, v.layerKind), L = r._strokeGeomCache.get(F);
      return L || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), A(v, F));
    }
    if (N(v)) {
      const x = m(v), F = r._strokeGeomCache.get(x);
      return F || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), pe(v, x));
    }
    const U = g(v), p = r._strokeGeomCache.get(U);
    if (p) return p;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const h = w(v);
    return r._strokeGeomCache.set(U, h), h;
  }
  function ae(v, U, p, h = null) {
    const x = [];
    for (let F = 0; F <= p; F += 1) {
      const L = F / p;
      let J = 0, le = 0;
      U === 0 ? (J = L, le = 0) : U === 1 ? (J = 1, le = L) : U === 2 ? (J = 1 - L, le = 1) : (J = 0, le = 1 - L);
      const k = T(v, J, le), j = r.mode === "unwrap" ? ke(k, h) : ie(k);
      j && x.push(j);
    }
    return x;
  }
  function ee() {
    const v = [...Array.isArray(i.shots) ? i.shots : []], U = [...s()].sort((p, h) => Number(p.z_index || 0) - Number(h.z_index || 0));
    return [...v, ...U];
  }
  function R() {
    const v = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((p, h) => Number(h.z_index || 0) - Number(p.z_index || 0)), ...v];
  }
  return {
    connect(v) {
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
        getStickerFrame: b,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: K,
        getStrokeGroupStrokes: H,
        isFreeSpaceView: D,
        isRasterObjectItem: N,
        isSceneSticker: $,
        isShotItem: V,
        isStickerItem: W,
        isStrokeGroupItem: ye,
        paintingShown: Se,
        poseOf: me,
        projectDir: ie,
        projectDirUnwrap: ke,
        projectEditorPoints: de,
        projectErpPointToEditor: ue,
        sceneStickerShown: B,
        stickerCornersDir: he,
        stickerDirFromFrame: ne,
        stickerSampleDir: T,
        worldDirToFrameLocalPoint: G
      } = v);
    },
    projectSceneItemDir: P,
    objectGeom: M,
    sampleStickerEdge: ae,
    getCutoutSelectableItemsForDisplay: ee,
    getCutoutSelectableItemsForHit: R
  };
}
const Ms = /* @__PURE__ */ new Map();
function xA(e) {
  const {
    api: t,
    editor: n,
    node: r,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se;
  function me(p = n.interaction) {
    const h = String((p == null ? void 0 : p.kind) || "");
    if (h === "paint_stroke" || h === "paint_lasso_fill" || h === "move_stroke_group" || h === "scale_stroke_group" || h === "rotate_stroke_group" || h === "move_raster_object" || h === "scale_raster_object") return !0;
    if (h === "move_multi") {
      const x = Array.isArray(p == null ? void 0 : p.strokeSnapshots) && p.strokeSnapshots.length > 0, F = Array.isArray(p == null ? void 0 : p.rasterSnapshots) && p.rasterSnapshots.length > 0;
      return x || F;
    }
    return !1;
  }
  function ie() {
    var h, x, F, L;
    let p = null;
    try {
      const J = g(), le = ((L = (F = (x = (h = n.paintEngine) == null ? void 0 : h.getErpTarget) == null ? void 0 : x.call(h, J)) == null ? void 0 : F.displayPaint) == null ? void 0 : L.canvas) || null;
      le && (p = {
        source: le,
        revision: `${b()}:${ke()}`
      });
    } catch {
      p = null;
    }
    return p;
  }
  function ke() {
    var L, J, le, k, j, _, O;
    const p = n.interaction, h = String((p == null ? void 0 : p.kind) || "");
    if (!me(p)) return "";
    if (h === "paint_stroke" || h === "paint_lasso_fill") {
      const Y = ((L = p == null ? void 0 : p.stroke) == null ? void 0 : L.geometry) || null, ve = String(((J = p == null ? void 0 : p.stroke) == null ? void 0 : J.layerKind) || ""), _e = ((le = Y == null ? void 0 : Y.rawPoints) == null ? void 0 : le.length) ?? ((k = Y == null ? void 0 : Y.points) == null ? void 0 : k.length) ?? 0, xe = String((p == null ? void 0 : p._livePreviewToken) || "");
      return `_${ve || "paint"}_${h}_live${xe}_${_e}_${n.livePaintInteractionRevision}`;
    }
    const x = String(((j = p == null ? void 0 : p.item) == null ? void 0 : j.actionGroupId) || ""), F = String(((_ = p == null ? void 0 : p.item) == null ? void 0 : _.rasterObjectId) || ((O = p == null ? void 0 : p.item) == null ? void 0 : O.id) || "");
    return `_${h}_${x || F || "active"}_${n.livePaintInteractionRevision}`;
  }
  function de(p, h = null) {
    const x = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!x) return null;
    const F = s.get(x);
    if (F)
      return F.complete || F.width || F.naturalWidth, F;
    const L = new Image();
    return L.onload = () => {
      typeof h == "function" && h();
    }, L.src = x, s.set(x, L), L;
  }
  function ue(p) {
    const h = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!h) return null;
    const x = o.get(h);
    if (x) return x.ready ? x : null;
    const F = de(p, () => {
      const O = o.get(h);
      O && (O.ready = !1), W({ localOnly: !0 });
    });
    if (!F || !(F.complete || F.width || F.naturalWidth)) return null;
    const L = Number(F.naturalWidth || F.width || 0), J = Number(F.naturalHeight || F.height || 0);
    if (L < 1 || J < 1) return null;
    const le = zt({ label: "editor.image-pixels" });
    le.width = L, le.height = J;
    const k = le.getContext("2d", { willReadFrequently: !0 });
    if (!k) return null;
    k.clearRect(0, 0, L, J), k.drawImage(F, 0, 0, L, J);
    const j = k.getImageData(0, 0, L, J).data, _ = { canvas: le, width: L, height: J, alpha: j, ready: !0 };
    return o.set(h, _), _;
  }
  function B(p, h) {
    if (!p || !h) return null;
    const x = (p == null ? void 0 : p.bbox) || null;
    if (!x) return null;
    const F = (p == null ? void 0 : p.transform) || {}, L = {
      u: (Number(x.u0 || 0) + Number(x.u1 || 0)) * 0.5,
      v: (Number(x.v0 || 0) + Number(x.v1 || 0)) * 0.5
    }, J = {
      u: ((Number(h.u || 0) - Number(F.du || 0)) % 1 + 1) % 1,
      v: Number(h.v || 0) - Number(F.dv || 0)
    }, le = H(
      J,
      L,
      Number(F.scale || 1),
      Number(F.rot_deg || 0)
    ), k = Number(x.u1 || 0) - Number(x.u0 || 0), j = Number(x.v1 || 0) - Number(x.v0 || 0);
    if (!(k > 1e-6) || !(j > 1e-6)) return null;
    const _ = Se(Number(le.u || 0), Number(x.u0 || 0)) / k, O = (Number(le.v || 0) - Number(x.v0 || 0)) / j;
    if (_ < 0 || _ > 1 || O < 0 || O > 1) return 0;
    const Y = ue(p);
    if (!Y) return null;
    const ve = Fe(Math.floor(_ * Y.width), 0, Y.width - 1), _e = Fe(Math.floor(O * Y.height), 0, Y.height - 1);
    return Number(Y.alpha[(_e * Y.width + ve) * 4 + 3] || 0);
  }
  function he(p, h, x, F = null) {
    if (!(h != null && h.visible) || !xr(x, h.corners)) return !1;
    const L = F || ye(x, performance.now()), J = B(p, L);
    return J === null ? !0 : J > 8;
  }
  function ne() {
    var F, L, J, le, k, j, _, O;
    const p = ((L = (F = n.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : L.call(F, g(!1))) || null, h = Math.max(1, Number(((J = p == null ? void 0 : p.descriptor) == null ? void 0 : J.width) || ((k = (le = p == null ? void 0 : p.displayPaint) == null ? void 0 : le.canvas) == null ? void 0 : k.width) || 2048)), x = Math.max(1, Number(((j = p == null ? void 0 : p.descriptor) == null ? void 0 : j.height) || ((O = (_ = p == null ? void 0 : p.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : O.height) || 1024));
    return { width: h, height: x };
  }
  function T() {
    var _e, xe, Z;
    const p = n.interaction;
    if ((p == null ? void 0 : p.kind) !== "paint_stroke") return null;
    const h = (p == null ? void 0 : p.stroke) || null;
    if (!h || String((h == null ? void 0 : h.layerKind) || "") !== "paint" || String((h == null ? void 0 : h.toolKind) || "") !== "eraser") return null;
    const x = u(), F = `${ke()}:${x.width}:${x.height}`;
    if (((_e = n._activePaintEraserPreviewInfo) == null ? void 0 : _e.cacheKey) === F)
      return n._activePaintEraserPreviewInfo.value || null;
    const L = No(h), J = (L == null ? void 0 : L.geometry) || null;
    if (J && String(J.geometryKind || "") !== "lasso_fill") {
      const be = Array.isArray(J.rawPoints) && J.rawPoints.length ? J.rawPoints : Array.isArray(J.points) ? J.points : [];
      J.processedPoints = N(be, L.targetSpace, !0);
    }
    const le = c(x.width, x.height, { readback: !0 });
    if (!$(le, L, { w: x.width, h: x.height })) return null;
    const k = ((Z = (xe = le.ctx) == null ? void 0 : xe.getImageData(0, 0, x.width, x.height)) == null ? void 0 : Z.data) || null;
    if (!k) return null;
    let j = x.width, _ = x.height, O = -1, Y = -1;
    for (let be = 0; be < x.height; be += 1)
      for (let z = 0; z < x.width; z += 1)
        k[(be * x.width + z) * 4 + 3] <= 8 || (z < j && (j = z), be < _ && (_ = be), z > O && (O = z), be > Y && (Y = be));
    if (O < j || Y < _)
      return n._activePaintEraserPreviewInfo = { cacheKey: F, value: null }, null;
    const ve = {
      surface: le,
      bounds: { minX: j, minY: _, maxX: O, maxY: Y },
      key: `${F}:${j}:${_}:${O}:${Y}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: F, value: ve }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), ve;
  }
  function G() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function A(p, h, x) {
    var F, L;
    if (!p) return null;
    if ((F = p.item) != null && F.bbox) {
      const J = p.item.bbox, le = ((L = p.item) == null ? void 0 : L.transform) || {}, k = Number(J.u0 || 0) + Number(le.du || 0), j = Number(J.u1 || 0) + Number(le.du || 0), _ = Number(J.v0 || 0) + Number(le.dv || 0), O = Number(J.v1 || 0) + Number(le.dv || 0);
      return {
        minX: Math.floor((k % 1 + 1) % 1 * h),
        maxX: Math.ceil((j % 1 + 1) % 1 * h),
        minY: Math.floor(Fe(_, 0, 1) * x),
        maxY: Math.ceil(Fe(O, 0, 1) * x),
        wraps: j - k >= 1 || k < 0 || j > 1
      };
    }
    return null;
  }
  function pe(p, h, x) {
    if (!p || !h) return !1;
    const F = (le) => le.wraps ? [
      { minX: 0, maxX: le.maxX, minY: le.minY, maxY: le.maxY, wraps: !1 },
      { minX: le.minX, maxX: x - 1, minY: le.minY, maxY: le.maxY, wraps: !1 }
    ] : [le], L = F(p), J = F(h);
    return L.some((le) => J.some((k) => !(le.maxX < k.minX || k.maxX < le.minX || le.maxY < k.minY || k.maxY < le.minY)));
  }
  function P(p, h, x) {
    var re, Q, te, X, C, se, fe;
    if (!p || !h || !((re = x == null ? void 0 : x.surface) != null && re.canvas)) return p;
    const F = Number(p.width || x.surface.canvas.width || 0), L = Number(p.height || x.surface.canvas.height || 0);
    if (F < 1 || L < 1) return p;
    const J = A(h, F, L);
    if (J && !pe(J, x.bounds, F)) return p;
    const le = String(((Q = h.item) == null ? void 0 : Q.id) || h.id || ""), k = ((te = h.item) == null ? void 0 : te.transform) || {}, j = `${x.key}:${le}:${F}:${L}:${Number(k.du || 0).toFixed(6)}:${Number(k.dv || 0).toFixed(6)}:${Number(k.rot_deg || 0).toFixed(3)}:${Number(k.scale || 1).toFixed(4)}`, _ = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (_.has(j)) return _.get(j);
    const O = Fe(Math.floor(Number(((X = x.bounds) == null ? void 0 : X.minX) || 0)), 0, Math.max(0, F - 1)), Y = Fe(Math.floor(Number(((C = x.bounds) == null ? void 0 : C.minY) || 0)), 0, Math.max(0, L - 1)), ve = Fe(Math.ceil(Number(((se = x.bounds) == null ? void 0 : se.maxX) || 0)), O, Math.max(0, F - 1)), _e = Fe(Math.ceil(Number(((fe = x.bounds) == null ? void 0 : fe.maxY) || 0)), Y, Math.max(0, L - 1)), xe = Math.max(1, ve - O + 1), Z = Math.max(1, _e - Y + 1), be = c(F, L, { readback: !0 });
    be.ctx.clearRect(0, 0, F, L), be.ctx.drawImage(p, 0, 0);
    const z = be.ctx.getImageData(O, Y, xe, Z);
    be.ctx.save(), be.ctx.globalCompositeOperation = "destination-out", be.ctx.drawImage(x.surface.canvas, 0, 0), be.ctx.restore();
    const oe = be.ctx.getImageData(O, Y, xe, Z);
    let q = !1;
    for (let we = 0; we < xe * Z; we += 1) {
      const E = z.data[we * 4 + 3], ge = oe.data[we * 4 + 3];
      if (E > ge) {
        q = !0;
        break;
      }
    }
    return q ? (_.size > 64 && _.clear(), _.set(j, be.canvas), be.canvas) : (_.set(j, p), p);
  }
  function I(p, h = null) {
    const x = D((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), F = (p == null ? void 0 : p.bbox) || null;
    if (!x || !F) return null;
    const L = de(p, h);
    if (!L || !(L.complete || L.width || L.naturalWidth)) return null;
    const { width: J, height: le } = ne(), k = (p == null ? void 0 : p.transform) || {}, j = [
      x,
      J,
      le,
      F.u0,
      F.v0,
      F.u1,
      F.v1,
      k.du,
      k.dv,
      k.rot_deg,
      k.scale,
      y()
    ].join(":"), _ = i.get(j);
    if (_) return _;
    i.size > 64 && i.clear();
    const O = zt({ label: "editor.raster-erp" });
    O.width = J, O.height = le;
    const Y = O.getContext("2d");
    return Y ? (_0(Y, L, p, J, le), i.set(j, O), O) : null;
  }
  async function w(p, h) {
    const x = await new Promise((k) => p.toBlob(k, "image/png")), F = new FormData();
    F.append("image", x, h), F.append("type", "input"), F.append("subfolder", "panorama_stickers"), F.append("overwrite", "1");
    const L = await t.fetchApi("/upload/image", { method: "POST", body: F });
    if (!L || L.status !== 200) throw new Error(`upload failed (${L == null ? void 0 : L.status})`);
    const J = await L.json(), le = String((J == null ? void 0 : J.name) || "").trim();
    if (!le) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: le,
      subfolder: String((J == null ? void 0 : J.subfolder) || "panorama_stickers"),
      storage: String((J == null ? void 0 : J.type) || "input")
    };
  }
  let M = null, ae = !1;
  function ee() {
    const p = _p(a.painting), { width: h, height: x } = f();
    return kS(a.painting_layer, { paintCount: p.totalPaintCount, maskCount: p.totalMaskCount, width: h, height: x, nodeId: String(r.id ?? "0") });
  }
  function R() {
    const p = String(r.id ?? "0"), h = Ms.get(p);
    if (ae && h) return h;
    const x = (async () => {
      var J, le, k, j, _, O, Y, ve, _e, xe, Z, be;
      const F = b(), L = _p(a.painting);
      if (L.totalPaintCount <= 0 && L.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, M = F, l());
        return;
      }
      if (M !== F && !ae) {
        ae = !0;
        try {
          V();
          const z = g(!1), oe = ((le = (J = n.paintEngine) == null ? void 0 : J.getErpTarget) == null ? void 0 : le.call(J, z)) || null, q = ((k = oe == null ? void 0 : oe.displayPaint) == null ? void 0 : k.canvas) || null, re = ((j = oe == null ? void 0 : oe.committedMask) == null ? void 0 : j.canvas) || null, Q = Math.max(1, Number(((_ = oe == null ? void 0 : oe.descriptor) == null ? void 0 : _.width) || (q == null ? void 0 : q.width) || (re == null ? void 0 : re.width) || 2048)), te = Math.max(1, Number(((O = oe == null ? void 0 : oe.descriptor) == null ? void 0 : O.height) || (q == null ? void 0 : q.height) || (re == null ? void 0 : re.height) || 1024));
          (!q && L.totalPaintCount > 0 || !re && L.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((Y = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Y.width) || 0) !== Q || Number(((ve = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ve.height) || 0) !== te) && (n._paintLayerSyncBlankSurface = c(Q, te)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Q, te));
          const X = q || L.totalPaintCount > 0 && ((_e = n._paintLayerSyncBlankSurface) == null ? void 0 : _e.canvas) || null, C = re || L.totalMaskCount > 0 && ((xe = n._paintLayerSyncBlankSurface) == null ? void 0 : xe.canvas) || null;
          if (!X && !C) return;
          let se = null, fe = null;
          const we = [];
          if (L.totalPaintCount > 0) {
            se = await w(X, `pano_paint_${p}.png`);
            for (const E of z) {
              const ge = String(E || "").trim();
              if (!ge) continue;
              const Pe = ((be = (Z = n.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : be.call(Z, ge)) || null;
              if (!Pe) continue;
              const Ce = ge.replace(/[^a-zA-Z0-9_-]+/g, "_"), Te = await w(Pe, `pano_group_${p}_${Ce}.png`);
              Te && we.push({
                id: ge,
                actionGroupId: ge,
                image: Te
              });
            }
          }
          L.totalMaskCount > 0 && (fe = await w(C, `pano_mask_${p}.png`)), F === b() && (a.painting_layer = {
            paint: se,
            mask: fe,
            groups: we,
            revision: F
          }, M = F, l());
        } catch (z) {
          throw z;
        } finally {
          ae = !1;
        }
      }
    })();
    return Ms.set(p, x), x.finally(() => {
      Ms.get(p) === x && Ms.delete(p);
    }), x;
  }
  function v() {
    const p = S(!0).filter((L) => L.type === "strokeGroup").map((L) => ({ actionGroupId: L.actionGroupId, z_index: L.z_index })), h = n.paintEngine, x = m(), F = T();
    return Du({ ...a, painting: { ...a.painting, groups: p } }, {
      group: (L) => {
        const J = h == null ? void 0 : h.getGroupDisplayCanvas(L);
        return J && { media: J, revision: `${x}:${L}` };
      },
      raster: (L) => {
        const J = I(L, () => W());
        if (!J) return null;
        const le = L.transform || {};
        return {
          media: P(J, { item: L }, F),
          revision: [
            b(),
            (F == null ? void 0 : F.key) || "",
            L.id,
            Number(le.du || 0).toFixed(6),
            Number(le.dv || 0).toFixed(6),
            Number(le.rot_deg || 0).toFixed(3),
            Number(le.scale || 1).toFixed(4)
          ].join(":")
        };
      },
      mask: () => Oh(h)
    });
  }
  function U() {
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
        getOrderedDisplayListObjects: S,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: b,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: K,
        inverseTransformErpPointAround: H,
        parseRasterObjectSelectionId: D,
        processFreehandPoints: N,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: V,
        requestDraw: W,
        screenPosToErpPoint: ye,
        shortestWrappedDelta: Se
      } = p);
    },
    getSharedLivePaintSurface: ie,
    getLivePaintRevisionSuffix: ke,
    isPaintCompositeInteraction: me,
    hitRasterObjectAt: he,
    invalidateLivePaintPreviewCaches: G,
    buildRasterObjectEditCanvas: I,
    needsPaintingLayerSync: ee,
    syncPaintingLayerAsync: R,
    invalidatePaintingLayerState: U,
    buildEditorViewPaintLayers: v
  };
}
function MA(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, s, a;
  function l(I) {
    return !I || typeof I != "object" ? { x: 0, y: 0 } : { x: Number((I == null ? void 0 : I.u) || 0), y: Number((I == null ? void 0 : I.v) || 0) };
  }
  function c(I, w, M, ae = {}) {
    return { ...{
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: f(I, "widthScale", 1),
      pressureLike: f(I, "pressureLike", 1)
    }, ...ae, u: w, v: M };
  }
  function d(I, w = !1) {
    return w ? 12e-4 : 18e-4;
  }
  function u(I, w, M = !1) {
    if (!Array.isArray(I) || !I.length) return [];
    const ae = String((w == null ? void 0 : w.kind) || "") === "ERP_GLOBAL", ee = /* @__PURE__ */ new WeakMap();
    if (ae) {
      let k = null;
      I.forEach((j) => {
        const _ = Number((j == null ? void 0 : j.u) || 0), O = Number((j == null ? void 0 : j.v) || 0), Y = (_ % 1 + 1) % 1, ve = k == null ? Y : k + a(Y, (k % 1 + 1) % 1);
        ee.set(j, { x: ve, y: O }), k = ve;
      });
    }
    const R = (k) => !k || typeof k != "object" ? { x: 0, y: 0 } : ee.get(k) || l(k), v = (k, j, _, O = {}) => {
      const Y = ae ? (Number(j) % 1 + 1) % 1 : Number(j), ve = c(k, Y, _, O);
      return ee.set(ve, { x: Number(j), y: Number(_) }), ve;
    }, U = (k, j, _) => {
      const O = R(k), Y = R(j);
      return v(k, Pn(O.x, Y.x, _), Pn(O.y, Y.y, _), {
        t: Pn(Number((k == null ? void 0 : k.t) || 0), Number((j == null ? void 0 : j.t) || 0), _),
        widthScale: Pn(f(k, "widthScale", 1), f(j, "widthScale", 1), _),
        pressureLike: Pn(f(k, "pressureLike", 1), f(j, "pressureLike", 1), _)
      });
    };
    if (I.length === 1) {
      const k = R(I[0]);
      return [v(I[0], k.x, k.y)];
    }
    const p = d(w, M), h = (k, j) => {
      const _ = [0];
      for (let z = 1; z < k.length; z += 1) {
        const oe = R(k[z - 1]), q = R(k[z]);
        _.push(_[z - 1] + Math.hypot(q.x - oe.x, q.y - oe.y));
      }
      const O = _[_.length - 1] || 0;
      if (O <= 1e-8) {
        const z = k[0], oe = R(z);
        return [v(z, oe.x, oe.y)];
      }
      const Y = [];
      let ve = 0;
      for (let z = 0; z <= O + 1e-9; z += j) {
        for (; ve < _.length - 2 && _[ve + 1] < z; ) ve += 1;
        const oe = _[ve], q = _[ve + 1], re = Math.max(1e-8, q - oe);
        Y.push(U(k[ve], k[ve + 1], Fe((z - oe) / re, 0, 1)));
      }
      const _e = k[k.length - 1], xe = R(_e), Z = Y[Y.length - 1], be = Z ? R(Z) : null;
      return (!be || Math.hypot(be.x - xe.x, be.y - xe.y) > j * 0.35) && Y.push(v(_e, xe.x, xe.y)), Y;
    }, x = (k) => {
      if (!Array.isArray(k) || k.length < 3) return k ? k.slice() : [];
      const j = R(k[0]), _ = [v(k[0], j.x, j.y)];
      for (let ve = 0; ve < k.length - 1; ve += 1) {
        const _e = k[ve], xe = k[ve + 1], Z = R(_e), be = R(xe), z = v(
          _e,
          Z.x * 0.75 + be.x * 0.25,
          Z.y * 0.75 + be.y * 0.25,
          {
            t: Number(_e.t || 0) * 0.75 + Number(xe.t || 0) * 0.25,
            widthScale: f(_e, "widthScale", 1) * 0.75 + f(xe, "widthScale", 1) * 0.25,
            pressureLike: f(_e, "pressureLike", 1) * 0.75 + f(xe, "pressureLike", 1) * 0.25
          }
        ), oe = v(
          _e,
          Z.x * 0.25 + be.x * 0.75,
          Z.y * 0.25 + be.y * 0.75,
          {
            t: Number(_e.t || 0) * 0.25 + Number(xe.t || 0) * 0.75,
            widthScale: f(_e, "widthScale", 1) * 0.25 + f(xe, "widthScale", 1) * 0.75,
            pressureLike: f(_e, "pressureLike", 1) * 0.25 + f(xe, "pressureLike", 1) * 0.75
          }
        );
        _.push(z, oe);
      }
      const O = k[k.length - 1], Y = R(O);
      return _.push(v(O, Y.x, Y.y)), _;
    }, F = h(I, p);
    if (F.length < 3) return F;
    const L = M ? 2 : 1;
    let J = F.slice();
    for (let k = 0; k < L; k += 1) J = x(J);
    return h(J, Math.max(p * 0.75, 55e-5));
  }
  function f(I, w, M = 1) {
    const ae = Number(I == null ? void 0 : I[w]);
    return Number.isFinite(ae) ? Math.max(0, ae) : M;
  }
  function m(I) {
    const w = Number(I == null ? void 0 : I.radiusValue);
    if (Number.isFinite(w) && w > 0) {
      const M = String((I == null ? void 0 : I.radiusModel) || "").trim() || "erp_uv_norm";
      return M === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((I == null ? void 0 : I.size) || 10) * 0.5 / 2048)
      } : {
        model: M,
        value: w
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((I == null ? void 0 : I.size) || 10) * 0.5 / 2048)
    };
  }
  function S(I, w, M = {}) {
    const ae = zt({ label: "editor.raster-surface" });
    ae.width = Math.max(1, Math.round(I)), ae.height = Math.max(1, Math.round(w));
    const ee = ae.getContext("2d", M.readback ? { willReadFrequently: !0 } : void 0);
    return ee && (ee.clearRect(0, 0, ae.width, ae.height), ee.imageSmoothingEnabled = !0), { canvas: ae, ctx: ee };
  }
  function g() {
    const I = Se();
    return `${String(t.paintStrokeRevision)}:${I.width}x${I.height}`;
  }
  function b() {
    const I = Se();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${I.width}x${I.height}`;
  }
  function y() {
    const I = i(), w = b();
    return I ? `${w}:${I}` : w;
  }
  function K() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function H() {
    t.paintCompositeRevision += 1;
  }
  function D() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function N() {
    var I, w;
    t.paintEngineRevisionKey = null, (w = (I = t.paintEngine) == null ? void 0 : I.rebuildCommitted) == null || w.call(I, r), t.paintEngineRevisionKey = g();
  }
  function $() {
    D(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function V({ rebuildPaintEngine: I = !1 } = {}) {
    o(), K(), $(), I && N();
  }
  function W() {
    o(), H(), $();
  }
  function ye() {
    var ae;
    const I = Se(), w = `${I.width}x${I.height}`;
    t.paintEngineDescriptorKey !== w && (t.paintEngine = Xa(I), t.paintEngineDescriptorKey = w, t.paintEngineRevisionKey = "");
    const M = g();
    t.paintEngineRevisionKey !== M && (t.paintEngineRevisionKey = M, (ae = t.paintEngine) == null || ae.rebuildCommitted(r));
  }
  function Se() {
    const I = Math.max(1, s(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: I,
      height: Math.max(1, Math.round(I * 0.5))
    };
  }
  function me() {
    return Se();
  }
  function ie(I, w, M, ae, ee = null) {
    const R = m(I), v = f(w, "widthScale", 1) * f(w, "pressureLike", 1);
    return R.model === "erp_uv_norm" ? Math.max(0.5, R.value * M * v) : R.model === "world_angle" ? ee ? Math.max(0.5, R.value / Math.max(1e-6, Number(ee.hFOV_deg || 90) * tr) * M * v) : Math.max(0.5, R.value / (2 * Math.PI) * M * v) : Math.max(0.5, Number((I == null ? void 0 : I.size) || 10) * 0.5 * v);
  }
  function ke(I, w, M = {}) {
    const ae = String((w == null ? void 0 : w.layerKind) || "paint"), ee = String((w == null ? void 0 : w.toolKind) || "pen"), R = M.preview === !0, v = R ? 0.78 : 1;
    if (I.globalAlpha = ee === "marker" ? 0.7 * v : 1, ae === "mask") {
      I.fillStyle = R ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (ee === "eraser") {
      I.globalCompositeOperation = "destination-out", I.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const U = String((w == null ? void 0 : w.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (w == null ? void 0 : w.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, p = R ? Math.max(0.28, Number(U.a ?? 1) * 0.88) : Math.max(0.12, Number(U.a ?? 1));
    I.fillStyle = `rgba(${Math.round(Number(U.r || 0) * 255)}, ${Math.round(Number(U.g || 0) * 255)}, ${Math.round(Number(U.b || 0) * 255)}, ${p})`;
  }
  function de(I, w, M) {
    const ae = Math.max(0.5, Math.min(M, Number((w == null ? void 0 : w.radiusPx) || 0.5)));
    !Number.isFinite(w == null ? void 0 : w.x) || !Number.isFinite(w == null ? void 0 : w.y) || !Number.isFinite(ae) || (I.beginPath(), I.arc(Number(w.x || 0), Number(w.y || 0), ae, 0, Math.PI * 2), I.fill());
  }
  function ue(I, w, M, ae, ee = {}) {
    if (!I || !Array.isArray(w) || !w.length) return;
    const R = Math.max(ae.w, ae.h) * 0.25;
    I.save(), ke(I, M, ee);
    const v = (U) => de(I, U, R);
    if (w.length === 1) {
      v(w[0]), I.restore();
      return;
    }
    for (let U = 0; U < w.length - 1; U += 1) {
      const p = w[U], h = w[U + 1];
      if (!p || !h) continue;
      const x = Number(p.x || 0), F = Number(p.y || 0), L = Number(h.x || 0), J = Number(h.y || 0), le = Math.max(0.5, Math.min(R, Number(p.radiusPx || 0.5))), k = Math.max(0.5, Math.min(R, Number(h.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(F) || !Number.isFinite(L) || !Number.isFinite(J) || !Number.isFinite(le) || !Number.isFinite(k)) continue;
      const j = L - x, _ = J - F, O = Math.hypot(j, _);
      if (!Number.isFinite(O) || O < 1e-6) {
        v(p);
        continue;
      }
      if (O > Math.max(ae.w, ae.h) * 0.5) continue;
      const Y = Math.max(0.5, Math.min(le, k)), ve = Math.max(0.35, Math.min(Y * 0.4, 2.25)), _e = Math.max(1, Math.ceil(O / ve));
      for (let xe = 0; xe <= _e; xe += 1) {
        const Z = xe / _e;
        v({
          x: Pn(x, L, Z),
          y: Pn(F, J, Z),
          radiusPx: Pn(le, k, Z)
        });
      }
    }
    v(w[w.length - 1]), I.restore();
  }
  function B(I, w, M, ae) {
    ue(I, w, M, ae, { preview: !1 });
  }
  function he(I, w, M, ae, ee) {
    var U, p, h, x;
    if (!I || !Array.isArray(w) || w.length < 3) return;
    const R = "u", v = "v";
    if (I.save(), String((M == null ? void 0 : M.layerKind) || "") === "mask")
      I.fillStyle = "rgba(255,255,255,1)";
    else if (String((M == null ? void 0 : M.toolKind) || "") === "eraser")
      I.globalCompositeOperation = "destination-out", I.fillStyle = "rgba(0,0,0,1)";
    else {
      const F = (M == null ? void 0 : M.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      I.fillStyle = `rgba(${Math.round(Number(F.r || 0) * 255)}, ${Math.round(Number(F.g || 0) * 255)}, ${Math.round(Number(F.b || 0) * 255)}, ${Number(F.a ?? 1)})`;
    }
    I.beginPath(), I.moveTo(Number(((U = w[0]) == null ? void 0 : U[R]) || 0) * ae.w, Number(((p = w[0]) == null ? void 0 : p[v]) || 0) * ae.h);
    for (let F = 1; F < w.length; F += 1)
      I.lineTo(Number(((h = w[F]) == null ? void 0 : h[R]) || 0) * ae.w, Number(((x = w[F]) == null ? void 0 : x[v]) || 0) * ae.h);
    I.closePath(), I.fill(), I.restore();
  }
  function ne(I) {
    const w = (I == null ? void 0 : I.geometry) || null;
    return w ? String(w.geometryKind || "") === "lasso_fill" ? Array.isArray(w.points) ? w.points : [] : Array.isArray(w.processedPoints) && w.processedPoints.length ? w.processedPoints : Array.isArray(w.rawPoints) && w.rawPoints.length ? w.rawPoints : Array.isArray(w.points) ? w.points : [] : [];
  }
  function T(I, w) {
    const M = ne(I);
    return !Array.isArray(M) || !M.length ? [] : M.map((ae) => ({
      x: Number((ae == null ? void 0 : ae.u) || 0) * Number((w == null ? void 0 : w.w) || 1),
      y: Number((ae == null ? void 0 : ae.v) || 0) * Number((w == null ? void 0 : w.h) || 1),
      radiusPx: ie(I, ae, Number((w == null ? void 0 : w.w) || 1), Number((w == null ? void 0 : w.h) || 1))
    }));
  }
  function G(I, w, M = null) {
    var U, p, h, x;
    if (!(I != null && I.ctx) || !w) return !1;
    const ae = M || { w: Number(((U = I.canvas) == null ? void 0 : U.width) || 0), h: Number(((p = I.canvas) == null ? void 0 : p.height) || 0) }, ee = String((w == null ? void 0 : w.toolKind) || "") === "eraser" ? {
      ...w,
      layerKind: "mask",
      toolKind: String(((h = w == null ? void 0 : w.geometry) == null ? void 0 : h.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : w;
    if (String(((x = w == null ? void 0 : w.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return he(I.ctx, ne(ee), ee, ae), !0;
    const v = T(ee, ae);
    return v.length ? (B(I.ctx, v, ee, ae), !0) : !1;
  }
  function A(I, w, M, ae = 8) {
    const ee = new Uint8Array(w * M), R = [], v = new Int32Array(w * M), U = new Int32Array(w * M);
    for (let p = 0; p < M; p += 1)
      for (let h = 0; h < w; h += 1) {
        const x = p * w + h;
        if (ee[x] || I[x] <= ae) continue;
        let F = 0, L = 0;
        v[L] = h, U[L] = p, L += 1, ee[x] = 1;
        const J = [];
        let le = h, k = p, j = h, _ = p;
        for (; F < L; ) {
          const O = v[F], Y = U[F];
          F += 1, J.push({ x: O, y: Y }), O < le && (le = O), Y < k && (k = Y), O > j && (j = O), Y > _ && (_ = Y);
          const ve = [
            [(O - 1 + w) % w, Y],
            [(O + 1) % w, Y],
            [O, Y - 1],
            [O, Y + 1]
          ];
          for (const [_e, xe] of ve) {
            if (xe < 0 || xe >= M) continue;
            const Z = xe * w + _e;
            ee[Z] || I[Z] <= ae || (ee[Z] = 1, v[L] = _e, U[L] = xe, L += 1);
          }
        }
        R.push({ pixels: J, minX: le, minY: k, maxX: j, maxY: _ });
      }
    return R;
  }
  function pe(I, w) {
    const M = [...new Set((Array.isArray(I == null ? void 0 : I.pixels) ? I.pixels : []).map((p) => Number((p == null ? void 0 : p.x) || 0)).filter((p) => Number.isFinite(p)))].sort((p, h) => p - h);
    if (!M.length) return null;
    if (M.length === 1)
      return { startX: M[0], widthPx: 1 };
    let ae = -1, ee = 0;
    for (let p = 0; p < M.length; p += 1) {
      const h = M[p], F = (p === M.length - 1 ? M[0] + w : M[p + 1]) - h - 1;
      F > ae && (ae = F, ee = p);
    }
    const R = (M[(ee + 1) % M.length] + w) % w;
    let v = 1 / 0, U = -1 / 0;
    for (const p of M) {
      const h = (p - R + w) % w;
      v = Math.min(v, h), U = Math.max(U, h);
    }
    return {
      startX: R,
      widthPx: Math.max(1, U - v + 1)
    };
  }
  function P(I, w, M = {}) {
    var h;
    const ae = Number((I == null ? void 0 : I.width) || 0), ee = Number((I == null ? void 0 : I.height) || 0), R = (h = I == null ? void 0 : I.getContext) == null ? void 0 : h.call(I, "2d");
    if (!R || ae < 1 || ee < 1) return [];
    const v = R.getImageData(0, 0, ae, ee), U = new Uint8Array(ae * ee);
    for (let x = 0; x < U.length; x += 1) U[x] = v.data[x * 4 + 3];
    return A(U, ae, ee, 8).map((x, F) => {
      const L = pe(x, ae);
      if (!L) return null;
      const J = Number(L.widthPx || 0), le = x.maxY - x.minY + 1, k = Number(L.startX || 0), j = zt({ label: "editor.lasso-fill" });
      j.width = J, j.height = le;
      const _ = j.getContext("2d");
      if (!_) return null;
      const O = _.createImageData(J, le);
      return x.pixels.forEach(({ x: Y, y: ve }) => {
        const _e = (ve * ae + Y) * 4, xe = (Number(Y || 0) - k + ae) % ae, Z = ((ve - x.minY) * J + xe) * 4;
        O.data[Z + 0] = v.data[_e + 0], O.data[Z + 1] = v.data[_e + 1], O.data[Z + 2] = v.data[_e + 2], O.data[Z + 3] = v.data[_e + 3];
      }), _.putImageData(O, 0, 0), {
        id: Ni("raster"),
        type: "raster_frozen",
        layerKind: w === "mask" ? "mask" : "paint",
        z_index: Number((M == null ? void 0 : M.z_index) || 0) + F * 1e-3,
        locked: (M == null ? void 0 : M.locked) === !0,
        bbox: {
          u0: 0,
          v0: x.minY / ee,
          u1: J / ae,
          v1: (x.maxY + 1) / ee
        },
        rasterDataUrl: j.toDataURL("image/png"),
        transform: {
          du: k / ae,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(I) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = I);
    },
    processFreehandPoints: u,
    createRasterSurface: S,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: b,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: N,
    markObjectVisualsDirty: $,
    markPaintStrokeVisualsDirty: V,
    markPaintCompositeVisualsDirty: W,
    rebuildPaintEngineIfNeeded: ye,
    getDesiredPaintTargetDescriptor: Se,
    getActivePaintTargetDescriptor: me,
    rasterizeStrokeToSurface: G,
    createRasterFrozenObjectsFromCanvas: P
  };
}
function PA(e) {
  const {
    comfyMedia: t,
    editor: n,
    node: r,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, S, g, b = { stored: null, shown: null, handoff: null, fps: null };
  function y(T, G = null) {
    var A;
    if (T && typeof T == "object" && !Array.isArray(T)) return T;
    if (Array.isArray(T) && T.length > 0) {
      const pe = T[0];
      if (pe && typeof pe == "object" && !Array.isArray(pe)) return pe;
    }
    if (Array.isArray(G) && G.length > 0) {
      const pe = (A = G[0]) == null ? void 0 : A.parsed_state;
      if (pe && typeof pe == "object" && !Array.isArray(pe))
        return {
          yaw_deg: Number(pe.yaw_deg || 0),
          pitch_deg: Number(pe.pitch_deg || 0),
          hFOV_deg: Number(pe.hFOV_deg || 30),
          rot_deg: Number(pe.roll_deg || 0)
        };
    }
    return null;
  }
  function K(T, G, A) {
    const pe = Math.max(1, Number(G || 1)), P = Math.max(1, Number(A || 1)), I = Fe(Number(T || 30), 0.1, 179) * tr, w = 2 * Math.atan(Math.tan(I * 0.5) * (P / pe));
    return Fe(w * si, 0.1, 179);
  }
  function H(T) {
    const G = String(T || "").trim();
    if (!G) return null;
    try {
      const A = JSON.parse(G);
      if (!A || typeof A != "object" || String(A.kind || "") !== "pano_sticker_state") return null;
      const pe = A.version;
      let P = null;
      if (typeof pe == "number" && Number.isInteger(pe) ? P = pe : typeof pe == "string" && /^\d+$/.test(pe) && (P = Number.parseInt(pe, 10)), P !== 1) return null;
      const I = A.pose;
      if (!I || typeof I != "object") return null;
      const w = Number(I.yaw_deg), M = Number(I.pitch_deg), ae = Number(I.roll_deg), ee = Number(I.hFOV_deg);
      if (![w, M, ae, ee].every((p) => Number.isFinite(p))) return null;
      let R = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(R, -0) && (R = 0);
      const v = {
        yaw_deg: R,
        pitch_deg: Fe(M, -89.9, 89.9),
        roll_deg: ae,
        hFOV_deg: Fe(ee, 0.1, 179)
      }, U = Number(A.source_aspect);
      return Number.isFinite(U) && U > 0 && (v.source_aspect = U), v;
    } catch {
      return null;
    }
  }
  function D(T) {
    const G = Number(T == null ? void 0 : T.yaw_deg), A = Number(T == null ? void 0 : T.pitch_deg), pe = Number((T == null ? void 0 : T.roll_deg) ?? (T == null ? void 0 : T.rot_deg)), P = Number(T == null ? void 0 : T.hFOV_deg), I = ci(T);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Et(Number.isFinite(G) ? G : 0),
        pitch_deg: Fe(Number.isFinite(A) ? A : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(pe) ? pe : 0,
        hFOV_deg: Fe(Number.isFinite(P) ? P : 90, 0.1, 179)
      },
      source_aspect: I
    };
  }
  function N(T) {
    var M;
    if (!T || typeof T != "object") return D(null);
    const G = Number(T == null ? void 0 : T.yaw_deg), A = Number(T == null ? void 0 : T.pitch_deg), pe = Number((T == null ? void 0 : T.roll_deg) ?? (T == null ? void 0 : T.rot_deg)), P = Number(T == null ? void 0 : T.hFOV_deg), I = Number(T == null ? void 0 : T.vFOV_deg);
    let w = 1;
    if (Number.isFinite(P) && Number.isFinite(I)) {
      const ae = Fe(P, 0.1, 179) * tr, ee = Fe(I, 0.1, 179) * tr, R = Math.tan(ee * 0.5);
      if (Math.abs(R) > 1e-6) {
        const v = Math.tan(ae * 0.5) / R;
        Number.isFinite(v) && v > 0 && (w = v);
      }
    }
    if (T != null && T.asset_id && ((M = o == null ? void 0 : o.assets) != null && M[T.asset_id])) {
      const ae = o.assets[T.asset_id], ee = Number((ae == null ? void 0 : ae.w) || 0), R = Number((ae == null ? void 0 : ae.h) || 0);
      ee > 0 && R > 0 && (w = ee / R);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Et(Number.isFinite(G) ? G : 0),
        pitch_deg: Fe(Number.isFinite(A) ? A : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(pe) ? pe : 0,
        hFOV_deg: Fe(Number.isFinite(P) ? P : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function $(T) {
    return t.linkedValue(r, T);
  }
  function V(T, G, A) {
    const pe = T && typeof T == "object" ? {
      yaw_deg: Number(T.yaw_deg || 0),
      pitch_deg: Number(T.pitch_deg || 0),
      roll_deg: Number(T.rot_deg ?? T.roll_deg ?? 0),
      hFOV_deg: Number(T.hFOV_deg || 30)
    } : H(G);
    if (pe) {
      const w = Number((A == null ? void 0 : A.naturalWidth) || (A == null ? void 0 : A.width) || pe.source_aspect || 1), M = Number((A == null ? void 0 : A.naturalHeight) || (A == null ? void 0 : A.height) || 1);
      return {
        yaw_deg: Number(pe.yaw_deg || 0),
        pitch_deg: Number(pe.pitch_deg || 0),
        hFOV_deg: Number(pe.hFOV_deg || 30),
        vFOV_deg: K(pe.hFOV_deg, w, M),
        rot_deg: Number(pe.roll_deg || 0)
      };
    }
    const P = Number((A == null ? void 0 : A.naturalWidth) || (A == null ? void 0 : A.width) || 1), I = Number((A == null ? void 0 : A.naturalHeight) || (A == null ? void 0 : A.height) || 1);
    return {
      yaw_deg: Number(n.viewYaw || 0),
      pitch_deg: Number(n.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: K(30, P, I),
      rot_deg: 0
    };
  }
  function W() {
    const T = bt(r, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return _g(o, vg(r, { pose: T, handoff: ye() }));
  }
  function ye() {
    return bt(r, "sticker-handoff") ? bw(r, c("pano_sticker_handoff")) : null;
  }
  function Se() {
    return s === "stickers" && !i && r.__panoSceneStateV2 === !0;
  }
  function me(T, G, A) {
    return structuredClone(Ui(an({ version: 2, timeline: { fps: G }, stickers: [T] }), A).stickers[0]);
  }
  function ie({ record: T = !0, restored: G = !1 } = {}) {
    var ae;
    if (!Se()) return !1;
    const A = o.stickers.find((ee) => {
      var R;
      return ((R = ee.source) == null ? void 0 : R.kind) === "port";
    });
    if (!A)
      return b = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: pe } = o.timeline;
    let P;
    if (G || !b.handoff || ((ae = b.stored) == null ? void 0 : ae.id) !== A.id)
      P = structuredClone(A);
    else {
      const ee = (R) => b.fps === pe ? R : me(R, b.fps, pe);
      T && pw(A, ee(b.shown)), P = mw(A, ee(b.stored));
    }
    const I = ye(), w = I ? Wu(o, P, I) : structuredClone(P), M = JSON.stringify(w) !== JSON.stringify(A);
    if (M) {
      for (const ee of Object.keys(A)) delete A[ee];
      Object.assign(A, w);
    }
    return b = { stored: P, shown: structuredClone(w), handoff: I, fps: pe }, M;
  }
  function ke() {
    return b.handoff ? { ...o, stickers: o.stickers.map((T) => {
      var G;
      return ((G = T.source) == null ? void 0 : G.kind) === "port" ? b.stored : T;
    }) } : o;
  }
  function de(T) {
    var pe;
    if (!Se() || ((pe = T == null ? void 0 : T.source) == null ? void 0 : pe.kind) !== "port") return null;
    const { handoff: G } = b, A = !!G && G.placement === T.placement;
    return ji[T.placement].map((P) => ({ name: P, overridden: A && T.handoff_overrides.includes(P) }));
  }
  function ue(T) {
    ie();
    const G = o.stickers.find((A) => {
      var pe;
      return ((pe = A.source) == null ? void 0 : pe.kind) === "port";
    });
    !G || G.locked || !b.handoff || !hw(o, G, b.handoff, T) || (b.shown = structuredClone(G), b.stored[T] = structuredClone(G[T]), f(), a(), u(), g(), m());
  }
  function B() {
    var M;
    const T = Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs.findIndex((ae) => String((ae == null ? void 0 : ae.name) || "") === "sticker_image") : -1, G = T >= 0 ? ((M = r.getInputLink(T)) == null ? void 0 : M.id) ?? null : null, A = l(() => {
      Cr(r, "image-loaded");
    }), pe = y(c("pano_sticker_input_pose"), null), P = $("sticker_state"), I = t.externalStateHash(r, P), w = G == null ? null : V(pe, P, A);
    return bg(o, {
      connected: G != null,
      linkId: G,
      stateHash: I,
      pose: w,
      imageWidth: Number((A == null ? void 0 : A.naturalWidth) || (A == null ? void 0 : A.width) || 0),
      imageHeight: Number((A == null ? void 0 : A.naturalHeight) || (A == null ? void 0 : A.height) || 0)
    });
  }
  function he(T = "sync") {
    if (s !== "stickers" || i) return;
    const G = r.__panoSceneStateV2 ? W() : B();
    if (G.changed) {
      const A = o.stickers.find(d);
      o.stickers = G.state.stickers, o.active = G.state.active, A && n.selectedId === A.id && !o.stickers.some((pe) => pe.id === A.id) && (n.selectedId = null, n.selectedIds = []), a(), g(), S();
    } else ie({ restored: T === "open" }) ? (u(), g()) : T === "image-loaded" && g();
    m();
  }
  function ne() {
    const T = Array.isArray(o.stickers) ? o.stickers : [], G = [];
    for (const A of T)
      d(A) && (A.visible = !1, G.push(A));
    return G;
  }
  return {
    connect(T) {
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
      } = T);
    },
    computeStickerVFov: K,
    buildCanonicalCutoutStickerState: D,
    buildCanonicalSelectedStickerState: N,
    reconcileExternalStickerFromInputs: he,
    collectExternalStickersForClearAll: ne,
    syncPortHandoff: ie,
    storedEditorState: ke,
    portHandoffLanes: de,
    revertPortHandoffLane: ue
  };
}
function Mi(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function NA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function AA({
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
  var H, D;
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
    historyEntries: Array.from({ length: 8 }, (N, $) => ({ index: $, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((H = t.find((N) => i(e.paintColor, N.color))) == null ? void 0 : H.id) || "", f = !u, m = o(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), b = e.brushSizes[g] ?? 10, y = l(), K = Array.from({ length: 8 }, (N, $) => e.customPaintHistory[$] || null);
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
    historyEntries: K.map((N, $) => ({
      index: $,
      color: N ? { cssColor: r(N, 1) } : null
    })),
    sizeValue: b,
    sizeText: String(b),
    sizeFill: `${Math.max(0, Math.min(100, (b - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function CA({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const IA = {
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
function EA(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = IA[n.key] || [], s = t[t.length - 1];
    r && (s != null && s.grouped) && s.label === r ? s.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function Zl(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function OA({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
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
function N0({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function FA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function TA(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const Gi = "erp", DA = ["1:1", "4:3", "3:2", "16:9"];
function A0(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...DA.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: Gi, label: Number(n) === 180 ? "180°" : "360°", active: e === Gi }] : []
  ];
}
const RA = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, LA = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, VA = { ...RA, opacity: "Opacity" };
function dd(e) {
  return `Upstream · ${e}`;
}
function $A({ layer: e, editable: t, locked: n, readOnly: r, placement: i, override: o = null, handoff: s = null }) {
  const a = e !== null && !t, l = e !== null && !r && t && !n && !!o, c = (d) => !r && !n && !!(s != null && s.some((u) => u.name === d && u.overridden));
  return {
    origin: e === null ? "" : `${dd(e)}${a ? " · inherited only" : ""}`,
    note: a ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !l },
    lanes: LA[i].map((d) => ({
      name: d,
      label: VA[d],
      action: e === null && s ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !c(d) : !l || o.placement !== i || !Object.hasOwn(o, d)
    }))
  };
}
function zA({
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
    rows: EA(s),
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
function jA({
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
  upstream: b = null
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
      const K = f(), H = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: K ? "Back to initial position" : "Already at initial position",
        icon: m.back_initial,
        disabled: !K
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: H ? "Show" : "Hide",
        tip: H ? "Show input image" : "Hide input image",
        icon: H ? m.eye : m.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed }), (!d(t) || b) && y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: m.aspect,
        open: !!c,
        choices: A0(l, { erp: S, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: m.rotate_90, disabled: l === Gi }
    ], S ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    );
  return b && (y = y.map((K) => ({
    ...K,
    disabled: K.key === "toggle-lock" ? !b.editable : K.key === "delete" ? !b.editable || !!K.disabled : !0
  }))), C0(i.corners, y);
}
const wp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function HA({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = r ? wp.filter((s) => s.cameraTip) : wp;
  return C0([...e, ...i], [
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
function GA(e, t, n, r, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), f = Math.max(14, i - n - 14), m = d + 18, S = c - 18 - n;
  let g;
  return m <= f ? g = Math.max(m, 14) : S >= 14 ? g = Math.min(S, f) : g = Math.min(Math.max(m, 14), f), { left: u, top: g };
}
function C0(e, t) {
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
const I0 = "painting", Ao = "background";
function KA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const WA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function UA(e, { span: t, portBarEnd: n = () => null, selection: r, selectedId: i, expanded: o, openRows: s, audio: a = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: d = !1, scene: u = !1, upstream: f = [], background: m = null }) {
  const S = (y, K, H, D, N, $, { keyable: V = !0, hideable: W = !0, origin: ye = null } = {}) => {
    const Se = (me) => (r == null ? void 0 : r.owner) === y && r.lane === me ? r.frames.map((ie) => ie + $) : [];
    return {
      id: y,
      label: H,
      icon: D,
      clip: N,
      selected: y === i,
      hideable: W,
      // The background has no eye and always shows.
      visible: K.visible !== !1,
      ...kp(ye),
      keyable: V,
      open: V && s.has(y),
      keys: nS(K).map((me) => ({ frame: me.frame + $, full: me.full })),
      selectedFrames: Se(null),
      lanes: (V ? Bi(K) : []).map((me) => ({
        key: `${y}:${me}`,
        lane: me,
        label: WA[me],
        frames: K[me].keyframes.map((ie) => ie.frame + $),
        selectedFrames: Se(me)
      }))
    };
  }, g = ({ start: y, in: K, duration: H }, D = null) => ({ clip: { start: y, end: H === null ? D : y + H }, offset: y - K }), b = (y, { idOf: K = (N) => N, sceneRow: H, origin: D = null }) => {
    const N = y.stickers.filter((V) => V.placement === "sky").sort((V, W) => W.z_index - V.z_index), $ = y.stickers.filter((V) => V.placement === "world");
    return [
      ...[...N, ...$].map((V) => {
        const { clip: W, offset: ye } = g(V.clip, n(V)), Se = Nh(D ? { ...V, id: V.origin.id } : V);
        return S(V.id, V, Se, He.image, W, ye, { origin: D && { ...D, overridden: D.stickerOverridden(V) } });
      }),
      ...KA(y.painting) || !y.painting_visible ? [{
        id: K(I0),
        label: "Paint",
        icon: He.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: y.painting_visible,
        ...kp(D && { ...D, overridden: D.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...H || ua(y.scene) ? [(() => {
        const { clip: V, offset: W } = g(y.scene.clip);
        return S(K("scene"), y.scene, "Scene", He.box, V, W, {
          keyable: !1,
          origin: D && { ...D, overridden: D.sceneOverridden }
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
        const { clip: y, offset: K } = g(e.background.clip, m.end);
        return S(Ao, e.background, "Background", He.unwrap, y, K, { keyable: !1, hideable: !1 });
      })()] : [],
      ...c ? [S("camera", e.camera, "Camera", He.camera, null, 0, { hideable: d })] : [],
      ...b(e, { sceneRow: u })
    ],
    groups: f.map(({ key: y, sceneState: K, editable: H, record: D, scene: N, deleted: $ }) => ({
      key: y,
      label: `${dd(y)}${H ? "" : " · inherited only"}`,
      revert: { disabled: !H || !Og(D) },
      restore: { label: `Restore deleted (${$})`, disabled: !H || $ === 0 },
      rows: b(K, {
        idOf: (V) => Ic(y, V),
        sceneRow: N || !K.scene.visible,
        origin: {
          editable: H,
          stickerOverridden: (V) => !!(D != null && D.stickers.some((W) => W.id === V.origin.id && W.placement === V.placement)),
          paintingOverridden: !!D && Object.hasOwn(D, "painting_visible"),
          sceneOverridden: !!D && Object.keys(D.scene).length > 0
        }
      })
    }))
  };
}
function kp(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function BA(e, t, n, r) {
  const i = sS(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, s = Math.max(...n) + r;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const YA = 4, qA = 0.25, E0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function O0(e) {
  return Object.hasOwn(E0, e);
}
function F0(e, t, n) {
  const { forward: r, right: i } = di(e.yaw_deg, 0), o = [0, 1, 2].map((a) => r[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(n > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * n / s) };
}
function XA() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = !1, r = 0;
  function i() {
    e.clear(), t = !1, n = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return O0(o) ? (e.size || (r = s), e.add(o), !0) : !1;
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
        const [a, l] = E0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? YA : 1) * (n ? qA : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - r) / 1e3;
      return r = Math.max(r, o), s;
    }
  };
}
const JA = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), ZA = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function QA(e) {
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
function xp(e, t, n) {
  return Number.isFinite(e) && e >= t && e <= n;
}
function eC(e, { frame: t }) {
  if (!e) return null;
  const { mode: n, spaceMode: r, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return JA.has(n) && (n !== "frame" || t) && ZA.has(r) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && xp(s, -89.9, 89.9) && xp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const tC = 250, nC = 600, rC = 180, iC = 2;
function oC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function po(e, t, n) {
  return e + (t - e) * n;
}
function sC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(fu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(n, 1e-6), o = Math.min(1, r / rC + i / iC);
  return Math.round(po(tC, nC, o));
}
function aC(e, t, n) {
  const r = oC(Fe(n, 0, 1));
  return {
    position: e.position.map((i, o) => po(i, t.position[o], r)),
    yaw_deg: Et(e.yaw_deg + fu(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: po(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: po(e.hFOV_deg, t.hFOV_deg, r),
    distance: po(e.distance, t.distance, r)
  };
}
function lC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(fu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function cC(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return lC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: sC(e, t, r), end: i };
}
function uC(e, t) {
  const n = Fe((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: aC(e.from, e.to, n), done: !1 };
}
function Ca(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function dC(e, t, n) {
  const r = Ca(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function fC(e) {
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
  let S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie = null;
  function ke(z, oe = null) {
    const q = w();
    W(() => {
      i.viewTransition = cC(q, z, performance.now(), { scale: x(), end: oe });
    }), !i.viewTransition && oe && de(oe), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0, Se(), $({ localOnly: !0, reason: it.VIEW });
  }
  function de(z) {
    P(Sc({ ...pe(), moved: z.moved }, z.mode, M())), a.backgroundDirty = !0;
  }
  function ue() {
    i.viewTransition && (i.viewTransition = null, Se());
  }
  function B(z, oe) {
    ke({ ...w(), yaw_deg: z, pitch_deg: oe });
  }
  function he() {
    return !f || ee() && !K();
  }
  function ne() {
    return i.mode === "pano" && T();
  }
  function T() {
    return u && __({ sceneLinked: l && !!Fi(s).scene, files: V(), stickers: d.stickers });
  }
  function G() {
    return i.spaceMode === "6dof" && ne();
  }
  function A() {
    var z, oe, q;
    return Kk((q = (oe = (z = t.ui) == null ? void 0 : z.settings) == null ? void 0 : oe.getSettingValue) == null ? void 0 : q.call(oe, Yg));
  }
  function pe() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function P(z) {
    i.spaceMode = z.mode, i.viewPosition = z.position, i.viewMoved = z.moved;
  }
  function I(z) {
    var q;
    const oe = dC(i.spaceMode, i.viewTransition, z);
    if (oe !== "keep") {
      if (oe === "return") {
        ke({ ...w(), position: M(), distance: ((q = p()) == null ? void 0 : q.radius) || Hn }, { mode: z, moved: !1 });
        return;
      }
      ue(), P(Sc({ ...pe(), position: w().position }, z, M())), a.backgroundDirty = !0, Se(), $({ localOnly: !0, reason: it.VIEW });
    }
  }
  function w() {
    var q;
    const z = i.viewMoved ? i.viewDistance : ((q = p()) == null ? void 0 : q.radius) || Hn, oe = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: z };
    return h_(i.spaceMode, oe, M());
  }
  function M() {
    return ee() ? U().position : [0, 0, 0];
  }
  function ae() {
    return n && d.camera !== null;
  }
  function ee() {
    return ae() && d.camera.visible;
  }
  function R() {
    return d.painting_visible !== !1;
  }
  function v(z) {
    return z.visible && ui(z.clip, i.frame);
  }
  function U() {
    return Ka(d.camera, i.frame);
  }
  function p() {
    var oe;
    const z = S();
    return ((oe = z.space ?? z.content) == null ? void 0 : oe.sphere) ?? null;
  }
  function h(z) {
    i.viewPosition = z.position, i.viewYaw = z.yaw_deg, i.viewPitch = z.pitch_deg, i.viewDistance = z.distance, i.viewMoved = !0, a.backgroundDirty = !0, $({ localOnly: !0, reason: it.VIEW });
  }
  function x() {
    var z;
    return ((z = p()) == null ? void 0 : z.radius) || Hn;
  }
  function F() {
    var fe;
    const z = S().space, oe = g(), q = i.worldSelectedId || i.selectedId, re = oe.stickers.findIndex((we) => we.id === q), Q = re < 0 ? ye(q) : null, te = re < 0 ? (fe = z.upstreamItems.find((we) => {
      var E;
      return ((E = we.request) == null ? void 0 : E.id) === q;
    })) == null ? void 0 : fe.request : z.sticker, X = re < 0 && !It(Q) ? null : {
      sticker: Q ?? oe.stickers[re],
      value: Q ? _r(Q, i.frame) : es(oe, i.frame).stickers[re],
      plane: [...z.stickers, ...z.upstreamStickers].find((we) => we.id === q) ?? null,
      item: (te == null ? void 0 : te.id) === q && te.url ? { kind: te.kind, box: o.sceneBox(te.url) } : null
    }, C = y() ? xe() : M_(p(), X);
    if (!C) return;
    const se = w();
    i.viewDistance = se.distance, i.viewMoved = !0, ke(S_(se, C, r.width, r.height));
  }
  function L(z) {
    return o.pickSurface(be(), z.x, z.y, r.width, r.height);
  }
  function J(z, oe) {
    var q;
    return _c(z, oe, i.viewMoved ? null : (q = p()) == null ? void 0 : q.center, x());
  }
  function le() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function k(z, oe) {
    const q = performance.now(), re = { x: z.x, y: z.y, time: q, key: o.contentRevision(), view: le() };
    if (!Th(ie, re)) {
      const te = L(z);
      ie = { ...re, cost: performance.now() - q, hit: te };
    }
    const Q = w();
    h(Lh(Q, J(Q, ie.hit), oe, x())), ie.view = le(), ie.wheelTime = q;
  }
  function j(z, oe, q) {
    const re = w();
    i.interaction = z === "orbit" ? { kind: "space_orbit", last: oe, pivot: J(re, L(oe)) } : { kind: "space_pan", last: oe, depth: Fh(re, x()) }, me(oe), r.setPointerCapture(q);
  }
  function _() {
    return G() || H();
  }
  function O(z) {
    const oe = N.elapsed(z);
    if (!oe || i.viewTransition) return !1;
    const q = N.speed(x()) * oe;
    if (H()) return D(N.direction(), q);
    if (!G()) return !1;
    const re = w(), Q = F0(re, N.direction(), q);
    return Q === re ? !1 : (i.viewPosition = Q.position, i.viewDistance = re.distance, i.viewMoved = !0, !0);
  }
  function Y() {
    Ho(s).view = QA(i);
  }
  function ve() {
    const z = c && !N0({ hasShot: !!b(), erp: K() }).disabled, oe = eC(Ho(s).view, { frame: z });
    oe && Object.assign(i, oe);
  }
  function _e(z) {
    return z * 0.2;
  }
  function xe() {
    return { center: U().position, radius: _e(x()) };
  }
  function Z(z, oe) {
    const { yaw_deg: q, pitch_deg: re } = Hh(z.position, oe);
    return { ...z, yaw_deg: q, pitch_deg: re };
  }
  function be() {
    return $u(w(), r.width, r.height, p());
  }
  return {
    connect(z) {
      ({
        editorViewInput: S,
        editorViewSceneState: g,
        getActiveCutoutShot: b,
        isCameraSelected: y,
        isErpCamera: K,
        isFreeFrameView: H,
        moveFrameByKeys: D,
        moveKeys: N,
        requestDraw: $,
        sceneFiles: V,
        startAnimation: W,
        stickerById: ye,
        syncFloatingViewButtonState: Se,
        updateCursor: me
      } = z);
    },
    transitionView: ke,
    applyViewTransitionEnd: de,
    cancelViewTransition: ue,
    turnViewTo: B,
    cameraPreviewShown: he,
    isSpaceView: ne,
    hasSpaceContent: T,
    isFreeSpaceView: G,
    viewControls: A,
    spaceModeState: pe,
    applySpaceMode: P,
    setSpaceMode: I,
    spaceViewState: w,
    spaceOrigin: M,
    hasCamera: ae,
    cameraShoots: ee,
    paintingShown: R,
    sceneStickerShown: v,
    cutoutCamera: U,
    contentSphere: p,
    setSpaceView: h,
    spaceScale: x,
    frameSpaceContent: F,
    zoomSpaceAt: k,
    startSpaceDrag: j,
    canKeyMove: _,
    stepKeyMove: O,
    saveView: Y,
    restoreView: ve,
    currentSpaceCamera: be,
    cameraFrustumLength: _e,
    cameraSphere: xe,
    lookingAt: Z
  };
}
function pC(e) {
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
  let u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee, R, v, U = { revision: -1, sceneState: null }, p = null;
  function h() {
    return p || (p = L()), p;
  }
  function x() {
    p = null;
  }
  function F() {
    return U.sceneState;
  }
  function L() {
    const z = W(), oe = g(), q = { ...a.assets };
    for (const Te of l ? [] : a.stickers) {
      const Le = String((Te == null ? void 0 : Te.asset_id) || "");
      Le && !q[Le] && i.has(Le) && (q[Le] = { type: "comfy_image", filename: Le });
    }
    const re = l ? a.stickers.map((Te) => B(Te) ? { ...Te, source: { kind: "file", filename: w(Te) } } : Te) : a.stickers;
    U.revision !== s.stateRevision && (U = { revision: s.stateRevision, sceneState: an({ ...a, stickers: re, assets: q, painting: null }) }), l && J(U.sceneState);
    const Q = es(U.sceneState, n.frame), te = ne ? $() : null, X = (Te) => {
      if (l && !Te.visible) return null;
      if (ne && ke(Te)) return te;
      const Le = Se(Te);
      return Le ? { media: Le, revision: ye(Le) } : null;
    }, C = R(), se = [...C.sky, ...qh(U.sceneState, n.frame, a.stickers, { media: X, paintLayers: oe, evaluated: Q })], fe = z && (z === d || z === c) ? d.dataset.panoSrc : z;
    let we = ie(z) ? { media: z, revision: ye(z), coverage: m(), source: fe } : null;
    S(n.frame) || (we = ph(f()));
    const E = me(), ge = g_(A(), E, pe());
    ge.mode !== n.spaceMode && K(), u(ge);
    const Pe = E ? le(U.sceneState, Q, X, C) : null, Ce = ue() ? { ...Pe, ...k(Pe) } : null;
    return { background: we, layers: se, space: Ce, content: Pe };
  }
  function J(z) {
    const oe = new Map(a.stickers.map((q) => [q.id, q.clip]));
    z.scene.clip = { ...a.scene.clip };
    for (const q of z.stickers) {
      const re = oe.get(q.id);
      re && (q.clip = { ...re });
    }
  }
  function le(z, oe, q, re) {
    const Q = T(), te = zu(Q, oe.scene), X = te != null && te.url ? r.sceneBox(te.url) : null, C = X && Rs(te.kind, X), se = I(), fe = zh(se, z, oe), we = fe != null && fe.url ? r.sceneBox(fe.url) : null, E = we ? [{ box: Rs(fe.kind, we), value: fe.value }] : [], ge = Jh(z, n.frame, a.stickers, { media: q, evaluated: oe });
    for (const { request: Ce, value: Te } of re.items) {
      const Le = Ce != null && Ce.url ? r.sceneBox(Ce.url) : null;
      Le && E.push({ box: Rs(Ce.kind, Le), value: Te });
    }
    const Pe = Mc(k_(oe, C, [...ge, ...re.stickers], E));
    return {
      evaluated: oe,
      sceneUrls: Q ? Q.urls.filter(Boolean) : [],
      scene: te,
      stickerUrls: jh(se, z),
      sticker: fe,
      stickers: ge,
      upstreamStickers: re.stickers,
      upstreamItems: re.items,
      sphere: Pe
    };
  }
  function k(z) {
    var q;
    const oe = ((q = z.sphere) == null ? void 0 : q.radius) || Hn;
    return {
      gizmo: _() ? ve() : j(z.evaluated),
      grid: n.showGrid && !n.fullscreen ? R_(oe) : null,
      lines: y() ? Y(oe) : []
    };
  }
  function j(z) {
    const oe = G(), q = It(oe) ? _r(oe, n.frame) : z.stickers.find((re) => re.id === (oe == null ? void 0 : oe.id));
    return !v(oe) || !(q != null && q.active) ? null : { mode: n.gizmoMode, transform: wc(q) };
  }
  function _() {
    return y() && n.selectedId === Iu;
  }
  let O = { revision: -1, span: -1, segments: [] };
  function Y(z) {
    const oe = ae();
    (O.revision !== s.stateRevision || O.span !== oe) && (O = { revision: s.stateRevision, span: oe, segments: V_($_(a, oe)) });
    const { segments: q } = O, re = q.length ? [{ segments: q, color: H2 }] : [];
    if (!de()) return re;
    const Q = _() ? S0 : j2;
    return [...re, { segments: Gh(D(), b(z)), color: Q }];
  }
  function ve() {
    return !de() || !_() || o ? null : { mode: n.gizmoMode === "rotate" ? "rotate" : "translate", transform: wc({ ...D(), scale: 1 }) };
  }
  function _e() {
    const { background: z, layers: oe, space: q } = h(), re = t.width, Q = t.height, te = N({ x: 0, y: 0, w: re, h: Q });
    let X = !1;
    return !z && !oe.length && !q ? (r.clear(460551), X = r.ready) : (r.clear(), X = !!r.render({
      rect: te,
      camera: q ? $u(P(), re, Q, q.sphere) : H(),
      background: z,
      layers: oe,
      space: q
    })), M(), (n.worldSelectedId || _() || he()) && ee(), X;
  }
  function xe(z) {
    const { content: oe } = h();
    return !oe || !z.position ? xo(z) : Vh(xo(z), z.position, V(), oe.sphere);
  }
  function Z(z, oe, q, re = null) {
    const { background: Q, layers: te, content: X } = h();
    if (!Q && !te.length && !X) return null;
    const C = X && oe.position ? X : null;
    return r.render({ rect: z, camera: xe(oe), background: Q, layers: te, space: C, owner: q, clearColor: re });
  }
  function be(z) {
    return r.clear(460551), !!r.renderUnwrap({ rect: N(z), ...h() });
  }
  return {
    connect(z) {
      ({
        applySpaceMode: u,
        backgroundColor: f,
        backgroundCoverage: m,
        backgroundShowsAt: S,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: b,
        cameraShoots: y,
        cancelViewTransition: K,
        currentViewCamera: H,
        cutoutCamera: D,
        deviceRect: N,
        followPortSticker: $,
        frameViewDistance: V,
        getConnectedErpImage: W,
        getMediaRevisionToken: ye,
        getStickerImage: Se,
        hasSpaceContent: me,
        isDecodedImageReady: ie,
        isExternalSticker: ke,
        isFreeSpaceView: de,
        isSpaceView: ue,
        isUploadingSticker: B,
        isWorldMenuShown: he,
        portVideo: ne,
        sceneFiles: T,
        selectedWorldSticker: G,
        spaceModeState: A,
        spaceOrigin: pe,
        spaceViewState: P,
        stickerFiles: I,
        stickerImageKey: w,
        syncFloatingViewButtonState: M,
        timelineSpanFrames: ae,
        updateSelectionMenu: ee,
        upstreamViewInput: R,
        worldStickerEditable: v
      } = z);
    },
    editorViewInput: h,
    endEditorViewFrame: x,
    editorViewSceneState: F,
    isCameraSelected: _,
    renderEditorView: _e,
    shotViewCamera: xe,
    drawEditorViewShot: Z,
    renderEditorViewUnwrap: be
  };
}
function mC(e) {
  const {
    comfyMedia: t,
    editor: n,
    mediaAssetSource: r,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [], fps: null }, m = /* @__PURE__ */ new Map();
  const S = /* @__PURE__ */ new Map(), g = () => u({ cause: "frame_view", localOnly: !0, reason: it.MEDIA });
  function b(ee) {
    if (!ee) return null;
    let R = S.get(ee);
    return R || (R = new Image(), R.onload = g, R.onerror = g, R.src = ee, S.set(ee, R)), R;
  }
  function y({ sceneState: ee, ui: R }) {
    return [
      ...ee.stickers.filter((v) => v.source.kind !== "port").map((v) => r(fa(v.source))),
      i(fn(R, ri)[0] || null),
      ...ee.painting.raster_objects.map((v) => v.rasterDataUrl)
    ].filter(Boolean);
  }
  function K() {
    return a && (Rf(o, "scene") === xg || !!H());
  }
  function H() {
    const ee = a && bt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, R = Array.isArray(ee) ? ee : null;
    if (f.list !== R) {
      f.entries.forEach(M), f = { list: R, entries: R ? Mg(R).map((U) => ({ layer: U })) : [], fps: null };
      const v = new Set(f.entries.flatMap((U) => y(U.layer)));
      for (const U of [...S.keys()]) v.has(U) || S.delete(U);
    }
    return R && f.fps !== s.timeline.fps && D(), R && f.entries;
  }
  function D() {
    if (!f.list) return;
    const ee = Ng(f.entries.map((R) => R.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((R, v) => {
      R.working = ee[v];
    }), f.fps = s.timeline.fps, m = Gf(ee);
  }
  function N() {
    if (!f.list) return;
    const ee = f.entries.map((v) => v.working), R = Iw(s.upstream, f.entries.map((v) => v.layer), ee, m, f.fps);
    R !== s.upstream && (s.upstream = R, m = Gf(ee));
  }
  function $() {
    const ee = H();
    ee && (s.upstream = Vw(s.upstream, ee.map((R) => R.layer)));
  }
  function V(ee) {
    N();
    const R = ee(s.upstream);
    return R === s.upstream ? !1 : (s.upstream = R, D(), !0);
  }
  function W(ee) {
    const R = ee.map((v) => v.origin);
    return V((v) => Ow(v, R, s.timeline.fps));
  }
  function ye(ee, R = null) {
    return V((v) => Tw(v, ee, R));
  }
  function Se(ee) {
    return V((R) => Lw(R, ee));
  }
  function me(ee) {
    return V((R) => Rw(R, ee));
  }
  function ie() {
    return (H() ?? []).flatMap((ee) => ee.working.sceneState.stickers);
  }
  function ke(ee) {
    const R = f.entries.find((v) => {
      var U;
      return ((U = v.working) == null ? void 0 : U.key) === ee.origin.layer;
    });
    return R ? b(i(fn(R.layer.ui, ri)[0] || null)) : null;
  }
  function de(ee = null) {
    const R = H();
    if (!R) return null;
    const [v] = t.uiValue(o, "pano_upstream_frames") || t.uiValue(o, "pano_timeline_frames") || [], U = R.map((h) => h.working), p = (h) => Vo((x) => fn(R[h].layer.ui, x));
    return {
      frames: Number(v) > 0 ? Number(v) : 0,
      ends: Ig(U, s.upstream, m, p, s.timeline.fps, ee)
    };
  }
  function ue(ee) {
    const R = f.entries.find((v) => {
      var U;
      return ((U = v.working) == null ? void 0 : U.key) === ee.origin.layer;
    });
    return R ? Vo((v) => fn(R.layer.ui, v)) : null;
  }
  function B() {
    return (H() ?? []).map(({ layer: ee, working: R }) => {
      const v = Go(R.key);
      return {
        key: R.key,
        sceneState: R.sceneState,
        editable: v,
        record: v ? s.upstream.find((U) => U.layer === R.key) ?? null : null,
        scene: fn(ee.ui, "pano_scene_files").length > 0,
        deleted: v ? Dw(s.upstream, R) : 0
      };
    });
  }
  function he(ee) {
    for (const { working: R } of H() ?? []) {
      const { key: v, sceneState: U } = R, p = Go(v);
      if (ee === Ic(v, "scene")) return { editable: p, part: "scene", owner: U.scene, sceneState: U };
      if (ee === Ic(v, "painting")) return { editable: p, part: "painting", owner: null, sceneState: U };
      const h = U.stickers.find((x) => x.id === ee);
      if (h) return { editable: p, part: "sticker", owner: h, sceneState: U };
    }
    return null;
  }
  function ne() {
    if (!a) return "";
    const ee = H();
    if (Aw(Rf(o, "scene"), ee)) return "Run the workflow to show the upstream scene.";
    if (!ee) return "";
    const R = t.uiList(o, "pano_sticker_warnings");
    return String(R.find((v) => String(v).startsWith(Nw)) ?? "");
  }
  function T(ee, R, v) {
    const { ui: U } = ee.layer, p = s.timeline.fps, h = fn(U, v0)[0], x = fn(U, b0).map(i).filter(Boolean), F = i(fn(U, y0)[0] || null), L = h && typeof h == "object" ? x.length ? { frames: x, meta: h } : F ? { src: F, meta: h } : null : null, J = b(i(fn(U, ri)[0] || null)), le = L ? xu(R.clip, v, p, L.meta) : null;
    let k = J;
    if (L != null && L.frames)
      ee.frames || (ee.frames = Nu({
        createImage: (j, _) => {
          const O = new Image();
          return O.onload = _, O.onerror = _, O.src = j, O;
        },
        onLoad: g
      })), k = ee.frames.picture(L.frames, le, L.meta, J);
    else if (L != null && L.src) {
      const j = G(ee);
      j.follow({ src: L.src, time: le, playing: d.advancing, fps: p }), k = j.picture(ee.still, J);
    }
    return k ? { media: k, revision: c(k), source: Pu(L, J) } : null;
  }
  function G(ee) {
    if (ee.follower) return ee.follower;
    const R = Zo(document, "editor.upstream-port-video");
    R.playsInline = !0, R.preload = "auto";
    const v = zt({ label: "editor.upstream-port-still" });
    return v.__panoFrameIdx = 0, ee.video = R, ee.still = v, ee.follower = qu({
      video: R,
      onCapture: () => {
        var h;
        const U = Number(R.videoWidth || 0), p = Number(R.videoHeight || 0);
        U < 1 || p < 1 || (v.width = U, v.height = p, (h = v.getContext("2d")) == null || h.drawImage(R, 0, 0), v.__panoFrameIdx += 1, g());
      },
      onChange: g
    }), ee.follower;
  }
  function A(ee, R, v) {
    if (R.source.kind === "port") return T(ee, R, v);
    const U = b(r(fa(R.source)));
    return U ? { media: U, revision: c(U) } : null;
  }
  function pe(ee) {
    var F;
    const { sceneState: R } = ee.working, { painting: v } = R, U = v.paint.strokes.length + v.mask.strokes.length;
    if (!R.painting_visible || !U && !v.raster_objects.length) return [];
    const p = l(), h = `${p.width}x${p.height}`;
    ee.paintSize !== h && (I(ee), ee.paintSize = h, ee.paintEngine = U ? Xa(p) : null, (F = ee.paintEngine) == null || F.rebuildCommitted({ painting: v }), ee.rasters = /* @__PURE__ */ new Map());
    const x = ee.paintEngine;
    return Du(R, {
      // A painting with groups but no strokes has no engine, and its groups show nothing.
      group: (L) => {
        const J = x == null ? void 0 : x.getGroupDisplayCanvas(L);
        return J && { media: J, revision: h };
      },
      raster: (L) => {
        const J = P(ee, L, p);
        return J && { media: J, revision: h };
      },
      mask: () => Oh(x)
    });
  }
  function P(ee, R, { width: v, height: U }) {
    if (ee.rasters.has(R.id)) return ee.rasters.get(R.id);
    const p = b(R.rasterDataUrl);
    if (!p.complete || !p.naturalWidth) return null;
    const h = zt({ label: "editor.upstream-raster-erp", width: v, height: U }), x = h.getContext("2d");
    return x ? (_0(x, p, R, v, U), ee.rasters.set(R.id, h), h) : null;
  }
  function I(ee) {
    var R;
    (R = ee.rasters) == null || R.forEach((v) => Xr(v)), ee.rasters = null, ee.paintEngine = null, ee.paintSize = null;
  }
  function w() {
    const ee = H() ?? [], R = { sky: [], stickers: [], items: [] }, v = n.frame;
    return ee.forEach((U) => {
      const p = $w(U.working, U.working.key, v, {
        media: (h) => A(U, h, v),
        paintLayers: pe(U),
        source: i
      });
      R.sky.push(...p.sky), R.stickers.push(...p.stickers), R.items.push(...p.items);
    }), R;
  }
  function M(ee) {
    var R;
    (R = ee.follower) == null || R.dispose(), ee.still && Xr(ee.still), I(ee);
  }
  function ae() {
    f.entries.forEach(M), f = { list: null, entries: [], fps: null }, m = /* @__PURE__ */ new Map(), S.clear();
  }
  return {
    connect(ee) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = ee);
    },
    upstreamEntries: H,
    upstreamLinked: K,
    upstreamNotice: ne,
    upstreamOutput: de,
    upstreamPortMeta: ue,
    upstreamViewInput: w,
    rebuildUpstreamWorking: D,
    syncUpstreamEdits: N,
    pruneUpstreamRecords: $,
    deleteUpstreamStickers: W,
    revertUpstreamSticker: ye,
    revertUpstreamLayer: Se,
    restoreUpstreamDeleted: me,
    upstreamStickers: ie,
    upstreamStickerImage: ke,
    upstreamTimelineLayers: B,
    upstreamRow: he,
    disposeUpstream: ae
  };
}
const Bc = "camera_preview";
function hC(e) {
  return e === Bc ? it.SPLAT_PREVIEW : it.SPLAT_STAGE;
}
function gC(e) {
  return [...e].some((t) => t !== it.VIEW && t !== it.OVERLAY && t !== it.SPLAT_STAGE);
}
function T0(e, t = !1) {
  const n = Fe(ci(e), 0.05, 20), r = t ? 320 : 220;
  return n >= 1 ? { width: r, height: Math.max(1, Math.round(r / n)) } : { width: Math.max(1, Math.round(r * n)), height: r };
}
function yC(e) {
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
  let d, u, f, m, S = null, g = !1, b = !1;
  function y() {
    g && (g = !1, o.releaseSplats(Bc));
  }
  function K() {
    S = null, b = !1, y();
  }
  function H(ye) {
    if (!r || !ye) return !1;
    const Se = r.closest(".pano-camera-preview");
    if (!Se) return !1;
    const me = Math.round(Number(Se.clientWidth || r.clientWidth || 0)), ie = Math.round(Number(Se.clientHeight || r.clientHeight || 0));
    return Math.abs(me - Number(ye.width || 0)) <= 1 && Math.abs(ie - Number(ye.height || 0)) <= 1;
  }
  function D(ye, Se) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, K();
      return;
    }
    const me = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !me || !n) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = me ? "Preview unavailable" : "Add Frame to preview", K();
      return;
    }
    const ie = T0(me, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ie.width, c.cameraPreview.height = ie.height, b) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const ke = window.devicePixelRatio || 1, de = Math.max(1, ie.width * ke), ue = Math.max(1, ie.height * ke), B = Math.min(1, t.width / de, t.height / ue), he = { width: Math.max(1, Math.floor(de * B)), height: Math.max(1, Math.floor(ue * B)) }, ne = !S || S.width !== he.width || S.height !== he.height || gC(Se);
    if (ye && ne) {
      g = !0;
      const G = u({ x: 0, y: t.height - he.height, w: he.width, h: he.height }, me, Bc);
      S = G ? he : null, G && W(G);
    }
    if (!S) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const T = H(ie);
    c.cameraPreview.ready = !0, c.cameraPreview.label = T ? "" : "Loading preview", c.cameraPreview.settled = T && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function N() {
    S = null, b = !1;
  }
  let $ = 0, V = !1;
  function W(ye) {
    const Se = ++$;
    createImageBitmap(ye.canvas, ye.x, ye.y, ye.width, ye.height).then((me) => {
      var ie;
      if (Se !== $ || !s.running) {
        me.close();
        return;
      }
      (ie = n.getContext("bitmaprenderer")) == null || ie.transferFromImageBitmap(me);
    }).catch((me) => {
      Se !== $ || !s.running || (b = !0, S = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !V && (V = !0, console.error("[PanoramaStickers] camera preview frame failed", me)));
    });
  }
  return {
    connect(ye) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: m
      } = ye);
    },
    drawCutoutOutputPreview: D,
    forgetCameraPreviewFrame: N
  };
}
function bC(e) {
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
  let u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee, R, v, U, p;
  function h(z) {
    const oe = n.width, q = n.height, re = W();
    if (r.globalAlpha = 1, r.lineWidth = 1, r.clearRect(0, 0, oe, q), M(), z && (a.backgroundDirty = !R(re)), i.showGrid && !i.fullscreen) {
      r.strokeStyle = "#3f3f46";
      for (let te = 0; te <= 16; te += 1) {
        const X = re.x + re.w * te / 16;
        r.beginPath(), r.moveTo(X, re.y), r.lineTo(X, re.y + re.h), r.stroke();
      }
      for (let te = 0; te <= 8; te += 1) {
        const X = re.y + re.h * te / 8;
        r.beginPath(), r.moveTo(re.x, X), r.lineTo(re.x + re.w, X), r.stroke();
      }
      r.strokeStyle = "rgba(250, 250, 250, 0.86)", r.lineWidth = 1.2, r.beginPath(), r.moveTo(re.x, re.y + re.h / 2), r.lineTo(re.x + re.w, re.y + re.h / 2), r.stroke(), r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center";
      const Q = re.y + re.h * 0.57;
      r.fillText("Left", re.x + re.w * 0.25, Q), r.fillText("Front", re.x + re.w * 0.5, Q), r.fillText("Right", re.x + re.w * 0.75, Q), r.fillText("Back", re.x + 38, Q), r.fillText("Back", re.x + re.w - 38, Q);
    }
  }
  function x(z, oe, q = 1) {
    let re = !1;
    r.strokeStyle = oe, r.lineWidth = q, r.beginPath();
    for (const Q of z) {
      const te = pe(Q);
      if (!te) {
        re = !1;
        continue;
      }
      re ? r.lineTo(te.x, te.y) : (r.moveTo(te.x, te.y), re = !0);
    }
    r.stroke();
  }
  function F(z) {
    const oe = n.width, q = n.height;
    if (r.clearRect(0, 0, oe, q), M(), z && (a.backgroundDirty = !ee()), i.showGrid && !i.fullscreen && g().space)
      L();
    else if (i.showGrid && !i.fullscreen) {
      for (let Q = -180; Q <= 180; Q += 15) {
        const te = [];
        for (let X = -89; X <= 89; X += 4) te.push(mn(Q, X));
        x(te, "#3f3f46", Q % 90 === 0 ? 1.3 : 1);
      }
      for (let Q = -75; Q <= 75; Q += 15) {
        const te = [];
        for (let X = -180; X <= 180; X += 4) te.push(mn(X, Q));
        x(te, Q === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", Q === 0 ? 1.5 : 1);
      }
      const re = [
        { name: "Left", dir: mn(-90, 0) },
        { name: "Front", dir: mn(0, 0) },
        { name: "Right", dir: mn(90, 0) },
        { name: "Back", dir: mn(180, 0) }
      ];
      r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", re.forEach((Q) => {
        const te = pe(Q.dir);
        te && r.fillText(Q.name, te.x, te.y + 24);
      });
    }
  }
  function L() {
    const z = $u(p(), n.width, n.height, f()), oe = zo(z, [0, 0, 0], n.width, n.height);
    oe && (r.fillStyle = "rgba(255, 221, 87, 0.9)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", r.fillText("ERP origin", oe.x, oe.y - 12));
  }
  function J(z, oe) {
    const q = A(z), re = mn(Number(q.yaw_deg || 0), Number(q.pitch_deg || 0)), Q = i.mode === "unwrap" ? P(re) : null, te = Q ? Q.x : null, X = i.mode === "pano" ? 28 : 20, C = [
      v(z, 0, X, te),
      v(z, 1, X, te),
      v(z, 2, X, te),
      v(z, 3, X, te)
    ];
    ed(r, C, { selected: oe });
  }
  function le(z, oe = []) {
    if (!(!z || !Array.isArray(oe) || oe.length < 4)) {
      z.beginPath(), z.moveTo(oe[0].x, oe[0].y);
      for (let q = 1; q < 4; q += 1) z.lineTo(oe[q].x, oe[q].y);
      z.closePath();
    }
  }
  function k(z, oe, q) {
    const re = Array.isArray(z == null ? void 0 : z.corners) ? z.corners : [];
    if (re.length < 4) return;
    const Q = Fe(Number((z == null ? void 0 : z.visibilityAlpha) ?? 1), 0, 1);
    if (Q <= 0.01) return;
    const te = r.globalAlpha;
    r.globalAlpha = te * Q;
    const X = q ? "rgba(255, 116, 116, 0.96)" : oe ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", C = q ? "rgba(255, 89, 89, 0.08)" : oe ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", se = oe ? 3.2 : 2.6;
    le(r, re), r.fillStyle = C, r.fill(), r.strokeStyle = X, r.lineWidth = se, r.stroke(), r.save(), r.strokeStyle = X, r.lineWidth = oe ? 3.2 : 2.6, r.lineCap = "round";
    const fe = Array.isArray(z == null ? void 0 : z.edgeMidpoints) && z.edgeMidpoints.length >= 4 ? z.edgeMidpoints : [
      { edge: "top", x: (re[0].x + re[1].x) * 0.5, y: (re[0].y + re[1].y) * 0.5 },
      { edge: "right", x: (re[1].x + re[2].x) * 0.5, y: (re[1].y + re[2].y) * 0.5 },
      { edge: "bottom", x: (re[2].x + re[3].x) * 0.5, y: (re[2].y + re[3].y) * 0.5 },
      { edge: "left", x: (re[3].x + re[0].x) * 0.5, y: (re[3].y + re[0].y) * 0.5 }
    ], we = { top: "bottom", right: "left", bottom: "top", left: "right" }, E = oe ? 12 : 9;
    fe.forEach((ge) => {
      const Ce = fe.find((Ae) => (Ae == null ? void 0 : Ae.edge) === we[ge == null ? void 0 : ge.edge]) || {
        x: (re[0].x + re[1].x + re[2].x + re[3].x) * 0.25,
        y: (re[0].y + re[1].y + re[2].y + re[3].y) * 0.25
      }, Te = Ce.x - ge.x, Le = Ce.y - ge.y, ze = Math.hypot(Te, Le) || 1;
      r.beginPath(), r.moveTo(ge.x, ge.y), r.lineTo(ge.x + Te / ze * E, ge.y + Le / ze * E), r.stroke();
    }), r.restore(), r.globalAlpha = te;
  }
  function j(z, oe, q, re) {
    const Q = Fe(Number((oe == null ? void 0 : oe.visibilityAlpha) ?? 1), 0, 1);
    if (Q <= 0.01) return;
    if (he(z)) {
      k(oe, q, re);
      return;
    }
    if (ne(z)) {
      const X = r.globalAlpha;
      r.globalAlpha = X * V(z) * Q, i.mode === "frame" ? (r.strokeStyle = q ? "rgba(250, 250, 250, 0.9)" : re ? "rgba(255, 89, 89, 0.72)" : "#71717a", r.lineWidth = q ? 2 : 1, le(r, oe.corners), r.stroke()) : J(z, q), r.globalAlpha = X;
      return;
    }
    const te = r.globalAlpha;
    r.globalAlpha = te * Q, r.fillStyle = q ? "rgba(0, 112, 243, 0.24)" : re ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", le(r, oe.corners), r.fill(), r.strokeStyle = q ? "rgba(255, 255, 255, 1)" : re ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", r.lineWidth = q ? 2.8 : 1.9, le(r, oe.corners), r.stroke(), r.globalAlpha = te;
  }
  function _(z, oe, q) {
    if (ne(z)) {
      Ug(r, oe, { accent: q });
      return;
    }
    const re = !(he(z) && Se());
    r.fillStyle = q, re && oe.corners.forEach((Q) => {
      r.beginPath(), r.arc(Q.x, Q.y, 6.5, 0, Math.PI * 2), r.fill();
    }), re && he(z) && (r.strokeStyle = q, r.lineCap = "round", r.lineWidth = 4, oe.edgeMidpoints.forEach((Q) => {
      var E, ge, Pe, Ce;
      const te = (((E = Q.b) == null ? void 0 : E.x) ?? Q.x) - (((ge = Q.a) == null ? void 0 : ge.x) ?? Q.x), X = (((Pe = Q.b) == null ? void 0 : Pe.y) ?? Q.y) - (((Ce = Q.a) == null ? void 0 : Ce.y) ?? Q.y), C = Math.hypot(te, X) || 1, se = te / C, fe = X / C, we = 10;
      r.beginPath(), r.moveTo(Q.x - se * we, Q.y - fe * we), r.lineTo(Q.x + se * we, Q.y + fe * we), r.stroke();
    }), r.lineCap = "butt"), T(z) || (r.strokeStyle = "rgba(250, 250, 250, 0.9)", r.lineWidth = 1.8, r.beginPath(), r.moveTo(oe.rotateStemBase.x, oe.rotateStemBase.y), r.lineTo(oe.rotateHandle.x, oe.rotateHandle.y), r.stroke(), r.fillStyle = q, r.beginPath(), r.arc(oe.rotateHandle.x, oe.rotateHandle.y, 10, 0, Math.PI * 2), r.fill());
  }
  function O() {
    var te;
    const z = i.mode === "frame" ? [] : $(), oe = z.length > 1, q = l ? y() : D(), re = q.map((X) => `${String((X == null ? void 0 : X.id) || "")}:${he(X) ? "frame" : Number((X == null ? void 0 : X.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== q || i._sortedItemsCache.orderKey !== re) && (i._sortedItemsCache = {
      src: q,
      orderKey: re,
      sorted: [...q]
    });
    const Q = [...z.filter(It), ...i._sortedItemsCache.sorted];
    for (const X of Q) {
      const C = i.mode !== "frame" && !oe && de(X);
      if (i.mode === "frame" && !C) continue;
      const se = ne(X), fe = he(X), we = ke(X);
      if (!se && !fe || B(X) && !U(X)) continue;
      const E = G(X);
      if (d !== "stickers" && !E.visible)
        continue;
      const ge = Fe(Number((E == null ? void 0 : E.visibilityAlpha) ?? 1), 0, 1);
      if (ge <= 0.01) continue;
      const Pe = fe && l && i.mode === "pano" ? Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (r.save(), r.globalAlpha *= Pe, j(X, E, C, we), C && E.visible) {
        const Ce = we ? "#ff4d4f" : se && me(X) ? "#f59e0b" : "#0070f3", Te = r.globalAlpha;
        r.globalAlpha = Te * ge, _(X, E, Ce), r.globalAlpha = Te;
      }
      r.restore();
    }
    if (l && i.mode === "pano" && !b() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const X = i.cutoutPanoFrameVisual, C = Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      r.save(), r.globalAlpha *= C, k(X.geom, X.selected, X.locked), X.selected && _(
        X.item,
        X.geom,
        X.locked ? "#ff4d4f" : "#0070f3"
      ), r.restore();
    }
    if (oe) {
      const X = N(z);
      if (X != null && X.visible) {
        const C = u(z) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(X.corners[0].x, X.corners[0].y);
        for (let se = 1; se < X.corners.length; se += 1) r.lineTo(X.corners[se].x, X.corners[se].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = C, X.corners.forEach((se) => {
          r.beginPath(), r.arc(se.x, se.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      }
    } else
      z.forEach((X) => {
        if (!T(X) && !ue(X)) return;
        const C = G(X);
        if (!(C != null && C.visible)) return;
        const se = ke(X) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(C.corners[0].x, C.corners[0].y);
        for (let fe = 1; fe < C.corners.length; fe += 1) r.lineTo(C.corners[fe].x, C.corners[fe].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = se, C.corners.forEach((fe) => {
          r.beginPath(), r.arc(fe.x, fe.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      });
    if (((te = i.interaction) == null ? void 0 : te.kind) === "marquee_select") {
      const X = ae(i.interaction.start, i.interaction.current);
      r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.9)", r.fillStyle = "rgba(255, 255, 255, 0.08)", r.lineWidth = 1, r.setLineDash([5, 4]), r.beginPath(), r.rect(X.x0, X.y0, X.x1 - X.x0, X.y1 - X.y0), r.fill(), r.stroke(), r.restore();
    }
  }
  function Y(z) {
    const oe = b(), q = K(oe);
    if (!oe || !q)
      return r.clearRect(0, 0, n.width, n.height), z && o.clear(657930), !1;
    const re = { x: q.x, y: q.y, w: q.w, h: q.h }, { rect: Q, shot: te } = Uh(oe, q, { width: n.width, height: n.height }), X = ve(re);
    if (r.clearRect(0, 0, n.width, n.height), z) {
      o.clear(657930);
      const C = m(Q), se = !!S(C, te, void 0, 657930);
      se || o.clear(1118481, C), a.backgroundDirty = !se;
    }
    return r.save(), r.fillStyle = "rgba(0, 0, 0, 0.58)", r.beginPath(), r.rect(0, 0, n.width, n.height), r.roundRect(re.x, re.y, re.w, re.h, X), r.fill("evenodd"), r.restore(), r.save(), r.strokeStyle = S0, r.globalAlpha = 0.62, r.lineWidth = 2, r.beginPath(), r.roundRect(re.x + 1, re.y + 1, re.w - 2, re.h - 2, Math.max(0, X - 1)), r.stroke(), r.restore(), !0;
  }
  function ve(z) {
    const oe = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * oe, Number((z == null ? void 0 : z.w) || 0) * 0.5, Number((z == null ? void 0 : z.h) || 0) * 0.5);
  }
  function _e() {
    var se, fe;
    if (((se = i.interaction) == null ? void 0 : se.kind) !== "paint_lasso_fill") return;
    const z = i.interaction.stroke, oe = (fe = z == null ? void 0 : z.geometry) == null ? void 0 : fe.points;
    let q;
    if (i.mode === "frame") {
      const we = b(), E = H(we);
      q = I(oe, we, E);
    } else
      q = w(oe);
    if (!Array.isArray(q) || q.length < 3) return;
    const re = String((z == null ? void 0 : z.layerKind) || "") === "mask", Q = (z == null ? void 0 : z.color) || { r: 1, g: 0.25, b: 0.25 }, te = Math.round(Number(Q.r || 0) * 255), X = Math.round(Number(Q.g || 0) * 255), C = Math.round(Number(Q.b || 0) * 255);
    r.save(), r.beginPath(), r.moveTo(Number(q[0].x || 0), Number(q[0].y || 0));
    for (let we = 1; we < q.length; we++) r.lineTo(Number(q[we].x || 0), Number(q[we].y || 0));
    r.closePath(), re ? (r.lineWidth = 2, r.setLineDash([6, 6]), r.lineDashOffset = 0, r.strokeStyle = "rgba(0,0,0,0.96)", r.stroke(), r.lineDashOffset = -6, r.strokeStyle = "rgba(255,255,255,0.96)", r.stroke(), r.setLineDash([]), r.lineDashOffset = 0) : (r.lineWidth = 1.5, r.setLineDash([6, 4]), r.strokeStyle = `rgba(${te},${X},${C},1)`, r.stroke(), r.setLineDash([])), r.restore();
  }
  function xe() {
    const z = i.frameRollOverlayVisual, oe = Fe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(z != null && z.shot) || oe <= 1e-4) return;
    const q = H(z.shot);
    if (!q) return;
    const re = { x: q.x + q.w * 0.5, y: q.y + q.h * 0.5 }, Q = Number(z.shot.roll_deg ?? z.shot.rot_deg ?? 0) * tr, te = Math.hypot(q.w, q.h) * 0.55, X = Math.cos(Q) * te, C = Math.sin(Q) * te;
    r.save(), r.globalAlpha *= oe, r.beginPath(), r.rect(q.x, q.y, q.w, q.h), r.clip(), r.translate(re.x, re.y), r.rotate(Q);
    const se = Math.max(12, Math.min(q.w, q.h) / 6);
    r.beginPath();
    for (let fe = -te; fe <= te; fe += se)
      r.moveTo(fe, -te), r.lineTo(fe, te);
    for (let fe = -te; fe <= te; fe += se)
      r.moveTo(-te, fe), r.lineTo(te, fe);
    r.lineWidth = 1, r.strokeStyle = "rgba(255, 255, 255, 0.22)", r.stroke(), r.setTransform(1, 0, 0, 1, 0, 0), r.beginPath(), r.moveTo(re.x - X, re.y - C), r.lineTo(re.x + X, re.y + C), r.lineWidth = 1.5, r.setLineDash([8, 6]), r.strokeStyle = "rgba(255, 255, 255, 0.92)", r.shadowColor = "rgba(0, 0, 0, 0.8)", r.shadowBlur = 3, r.stroke(), r.setLineDash([]), r.restore();
  }
  function Z() {
    return !l || !b() || t && ie() || c && !ye() ? 0 : W2;
  }
  function be() {
    const z = Fe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (z <= 1e-4 || !l || i.mode !== "pano") return;
    const oe = b(), q = oe ? G(oe) : null, re = Array.isArray(q == null ? void 0 : q.corners) && q.corners.length >= 4 ? q.corners.map((X) => ({ x: Number(X.x || 0), y: Number(X.y || 0) })) : null;
    q != null && q.visible && re && (i.cutoutPanoDimCorners = re), oe && (q != null && q.visible) && re && (i.cutoutPanoFrameVisual = {
      item: oe,
      geom: q,
      selected: de(oe),
      locked: ke(oe)
    });
    const Q = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, te = q != null && q.visible ? re : Q ? i.cutoutPanoDimCorners || [] : [];
    if (r.save(), r.fillStyle = `rgba(0, 0, 0, ${z})`, r.beginPath(), r.rect(0, 0, n.width, n.height), te.length >= 4) {
      r.moveTo(te[0].x, te[0].y);
      for (let X = 1; X < 4; X += 1) r.lineTo(te[X].x, te[X].y);
      r.closePath();
    }
    r.fill("evenodd"), r.restore();
  }
  return {
    connect(z) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: m,
        drawEditorViewShot: S,
        editorViewInput: g,
        getActiveCutoutShot: b,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: K,
        getFrameViewRect: H,
        getList: D,
        getMultiSelectionGeom: N,
        getSelectedItems: $,
        getStickerDisplayAlpha: V,
        getUnwrapRect: W,
        isCameraSelected: ye,
        isErpCamera: Se,
        isExternalSticker: me,
        isFreeSpaceView: ie,
        isItemLocked: ke,
        isItemSelected: de,
        isRasterObjectItem: ue,
        isSceneSticker: B,
        isShotItem: he,
        isStickerItem: ne,
        isStrokeGroupItem: T,
        objectGeom: G,
        poseOf: A,
        projectDir: pe,
        projectDirUnwrap: P,
        projectErpLassoPointsToFrameRect: I,
        projectLassoPointsToCurrentView: w,
        rebuildPaintEngineIfNeeded: M,
        rectFromPoints: ae,
        renderEditorView: ee,
        renderEditorViewUnwrap: R,
        sampleStickerEdge: v,
        sceneStickerShown: U,
        spaceViewState: p
      } = z);
    },
    drawGridUnwrap: h,
    drawGridPano: F,
    drawObjects: O,
    drawFrameViewBackground: Y,
    drawLassoOutlineOverlay: _e,
    drawFrameRollOverlay: xe,
    getCutoutPanoDimTarget: Z,
    drawCutoutPanoPassepartout: be
  };
}
function vC(e) {
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
    viewController: b
  } = e;
  let y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee = () => {
  };
  function R(Z = /* @__PURE__ */ new Set()) {
    Se();
    const be = l.backgroundDirty;
    d && (T(), K(be, Z)), i.mode === "frame" ? (l.frameSafeRect = B(), N(be)) : i.mode === "unwrap" ? V(be) : $(be), H(), ye(), P(), W(), D(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && M(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, n.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const z = de();
    g.stageStatus = z.status, g.stageStatusDetail = z.detail, g.stageNotice = ae(), z.status === Rn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", z.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function v(Z = i.interaction) {
    if (S !== "stickers" || i.mode !== "pano") return !1;
    const be = String((Z == null ? void 0 : Z.kind) || "");
    return be === "move" || be === "scale" || be === "scale_x" || be === "scale_y" || be === "rotate" ? !0 : be === "move_multi" ? Array.isArray(Z == null ? void 0 : Z.stickerSnapshots) && Z.stickerSnapshots.length > 0 : !1;
  }
  function U() {
    return !!i.interaction || !!m.drag;
  }
  function p() {
    l.nodePreviewPending = !1;
    const Z = wn(s);
    Z.liveState = f, Z.liveStateVersion += 1, ke();
  }
  function h(Z = {}) {
    var X, C, se, fe, we, E, ge, Pe;
    const be = Z.reason ?? it.STATE, z = !!Z.localOnly, oe = Z.externalSync === !0, q = String(Z.cause || ""), re = String(((X = i.interaction) == null ? void 0 : X.kind) || "");
    (!z || re === "view" || re === "pan_frame" || v() || !!i.viewTransition || q === "mode" || q === "frame_view" || q === "cutout_frame") && (l.backgroundDirty = !0), z && ue() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!z || q === "selection" || q === "mode" || q === "cutout_frame") && (I(), w()), U() ? l.nodePreviewPending = !0 : p(), oe && ((se = (C = lt(s).dom) == null ? void 0 : C.requestDraw) == null || se.call(C), (fe = s.setDirtyCanvas) == null || fe.call(s, !0, !1)), oe && !z && ((E = (we = s.graph) == null ? void 0 : we.setDirtyCanvas) == null || E.call(we, !0, !0), (Pe = (ge = t == null ? void 0 : t.canvas) == null ? void 0 : ge.setDirty) == null || Pe.call(ge, !0, !0)), c.requestDraw(be);
  }
  function x() {
    const Z = r.getBoundingClientRect(), be = Math.max(2, Math.round(Z.width)), z = Math.max(2, Math.round(Z.height)), oe = window.devicePixelRatio || 1, q = [r.width, r.height, n.width, n.height].join("x");
    (r.width !== be || r.height !== z) && (r.width = be, r.height = z);
    const re = z_(Z.width || be, Z.height || z, oe, window.innerWidth || Z.width, window.innerHeight || Z.height);
    return o.resize(re.width, re.height), [r.width, r.height, n.width, n.height].join("x") === q ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && F(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function F(Z) {
    Z(), c.wake();
  }
  function L() {
    return !!i.viewTransition || he.held || !!b.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || U();
  }
  function J(Z = performance.now(), be = /* @__PURE__ */ new Set()) {
    var Q;
    l.nodePreviewPending && !U() && p(), be.forEach((te) => l.reasons.add(te)), be.size && (l.dirty = !0), [...be].some((te) => te !== it.OVERLAY) && (l.backgroundDirty = !0), A(), l.lastTickTs > 0 ? Math.max(1e-3, (Z - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Z;
    const z = i.mode === "frame" && ((Q = i.interaction) == null ? void 0 : Q.kind) === "roll_frame" ? i.interaction : null;
    z != null && z.shot && (i.frameRollOverlayVisual = { shot: z.shot });
    const oe = z ? 1 : 0;
    if (Math.abs(oe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = oe, i.frameRollOverlayStartTs = Z), Math.abs(Number(i.frameRollOverlayAlpha || 0) - oe) > 1e-6) {
      const te = Fe(
        (Z - Number(i.frameRollOverlayStartTs || Z)) / U2,
        0,
        1
      );
      i.frameRollOverlayAlpha = Pn(
        Number(i.frameRollOverlayFrom || 0),
        oe,
        Yl(te)
      ), te >= 1 && (i.frameRollOverlayAlpha = oe, oe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const q = ie();
    if (Math.abs(q - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = q, i.cutoutPanoDimStartTs = Z), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - q) > 1e-6) {
      const te = Fe(
        (Z - Number(i.cutoutPanoDimStartTs || Z)) / yp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Pn(
        Number(i.cutoutPanoDimFrom || 0),
        q,
        Yl(te)
      ), te >= 1 && (i.cutoutPanoDimAlpha = q), te >= 1 && q === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const re = d && me() ? 1 : 0;
    if (Math.abs(re - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = re, i.cutoutPanoFrameStartTs = Z), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - re) > 1e-6) {
      const te = Fe(
        (Z - Number(i.cutoutPanoFrameStartTs || Z)) / yp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Pn(
        Number(i.cutoutPanoFrameFrom || 0),
        re,
        Yl(te)
      ), te >= 1 && (i.cutoutPanoFrameAlpha = re, re === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const te = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), X = Fe((Z - Number(i.outputPreviewAnimStartTs || 0)) / te, 0, 1), se = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? q2(X) : J2(X);
      i.outputPreviewAnim = Pn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, se), l.dirty = !0, X >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: te, done: X } = uC(i.viewTransition, Z);
      if (i.viewPosition = te.position, i.viewYaw = te.yaw_deg, i.viewPitch = te.pitch_deg, i.viewFov = te.hFOV_deg, i.viewDistance = te.distance, X) {
        const { end: C } = i.viewTransition;
        i.viewTransition = null, C && y(C), pe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (G(Z) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, b.stepInertia(Z) && (i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const te = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), R(te);
    }
  }
  function le(Z) {
    try {
      Z();
    } catch (be) {
      const z = String((be == null ? void 0 : be.stack) || (be == null ? void 0 : be.message) || be || "unknown editor frame error");
      l.tickErrorSignature !== z && (l.tickErrorSignature = z, console.error("[PanoramaStickers] editor frame failed", be)), g.stageStatus = Nn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function k(Z = performance.now(), be = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const z = Qv();
    le(() => J(Z, be)), e1(z);
  }
  function j() {
    !l.running || !x() || le(() => {
      l.dirty = !1, R(/* @__PURE__ */ new Set([it.RESIZE]));
    });
  }
  const _ = new ResizeObserver(j);
  let O = null;
  function Y() {
    O == null || O.removeEventListener("change", ve), O = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), O.addEventListener("change", ve);
  }
  function ve() {
    Y(), j();
  }
  function _e() {
    ee = Zv("editor", () => {
      var Z;
      return {
        type: S,
        readOnly: a,
        mode: i.mode,
        interaction: ((Z = i.interaction) == null ? void 0 : Z.kind) ?? null,
        timelineDrag: !!m.drag,
        playing: !!ne.playing
      };
    });
  }
  function xe() {
    ee(), l.running = !1, c.stop(), _.disconnect(), O.removeEventListener("change", ve);
  }
  return {
    connect(Z) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: K,
        drawCutoutPanoPassepartout: H,
        drawFrameRollOverlay: D,
        drawFrameViewBackground: N,
        drawGridPano: $,
        drawGridUnwrap: V,
        drawLassoOutlineOverlay: W,
        drawObjects: ye,
        endEditorViewFrame: Se,
        getActiveCutoutShot: me,
        getCutoutPanoDimTarget: ie,
        getSharedLivePaintSurface: ke,
        getStageImageStatus: de,
        isPaintCompositeInteraction: ue,
        measureFrameSafeRect: B,
        moveKeys: he,
        playback: ne,
        rebuildPaintEngineIfNeeded: T,
        stepKeyMove: G,
        syncCutoutShot: A,
        syncFloatingViewButtonState: pe,
        syncFrameRollKnob: P,
        syncLookAtFrameButtonState: I,
        syncViewToggleState: w,
        updateSelectionMenu: M,
        upstreamNotice: ae
      } = Z);
    },
    requestDraw: h,
    syncCanvasSize: x,
    startAnimation: F,
    editorAnimating: L,
    tick: k,
    stageResizeObserver: _,
    watchPixelRatio: Y,
    sampleEditorDiagnostics: _e,
    stopRenderLoop: xe
  };
}
function SC(e) {
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
    uiState: b
  } = e;
  let y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee, R, v, U, p, h, x = 0;
  function F() {
    b.toolButtons.forEach((Z) => {
      const be = Z.attr === "data-tool-mode", z = Z.attr === "data-paint-tool", oe = Z.attr === "data-mask-tool";
      Z.active = be ? Z.value === n.primaryTool : z ? Z.key === n.paintTool : oe ? Z.key === n.maskTool : !1, Z.pressed = Z.active ? "true" : Z.pressed == null ? null : "false";
    });
  }
  function L() {
    if (S && Mi(b.toolButtons, "value", "add-camera", { disabled: ke() }), g !== "cutout") return;
    const Z = H();
    Mi(b.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: Z ? "Look At Frame" : "Add Frame",
      tip: Z ? "Look at frame" : "Add frame",
      icon: Z ? He.camera : He.plus_circle
    });
  }
  function J() {
    const Z = OA({
      spaceView: pe(),
      spaceMode: Ca(n.spaceMode, n.viewTransition),
      readOnly: c,
      frameMode: f && n.mode === "frame",
      showGrid: n.showGrid
    });
    b.space && Object.assign(b.space, Z.space);
    for (const [be, z] of Object.entries(Z.buttons)) Mi(b.floatingButtons, "action", be, z);
  }
  function le() {
    var z;
    const Z = N0({ hasShot: !!H(), erp: B(), hidden: ke() && !K(), studio: S });
    n.mode === "frame" && Z.disabled && (S ? I(H()) : n.mode = "pano"), n.outputPreviewRect = null, b.viewButtons.forEach((oe) => {
      const q = oe.key === n.mode;
      oe.pressed = q ? "true" : "false", oe.visible = !(oe.key === "frame" && !f), oe.key === "frame" ? Object.assign(oe, Z) : oe.disabled = !1;
    });
    const be = f && n.mode === "frame" ? H() : null;
    b.frameRail.visible = !!be, b.frameRail.disabled = c || (be == null ? void 0 : be.locked) === !0, b.frameRollKnob.visible = !!be && !c && be.locked !== !0, b.frameRollKnob.disabled = c || (be == null ? void 0 : be.locked) === !0, b.frameRollKnob.rollDeg = Number((be == null ? void 0 : be.roll_deg) ?? (be == null ? void 0 : be.rot_deg) ?? 0), b.frameRollKnob.displayValue = Ri(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((z = n.interaction) == null ? void 0 : z.kind) === "roll_frame", b.frameRollKnob.armed = !!be && n.altModifier === !0, b.frameRail.rollKnob = b.frameRollKnob, b.frameRail.aspectLabel = be ? fr(be) : "", b.frameRail.aspectChoices = A0(be ? String(fr(be)) : null, { erp: S, coverage: m.coverage }), be || (b.frameRail.aspectOpen = !1), b.outputPreviewToggle.visible = g === "cutout" && n.mode !== "frame" && !!H(), f && b.cameraPreview && (b.cameraPreview.visible = n.mode !== "frame" && y(), b.cameraPreview.expanded = !!n.outputPreviewExpanded, b.cameraPreview.settled = b.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), J(), T() ? p(n.pointerPos) : ee(n.mode === "pano" ? "grab" : "default");
  }
  function k() {
    var be;
    const Z = n.mode === "frame" ? H() : null;
    b.frameRollKnob.visible = !!Z && !c && Z.locked !== !0, b.frameRollKnob.rollDeg = Number((Z == null ? void 0 : Z.roll_deg) ?? (Z == null ? void 0 : Z.rot_deg) ?? 0), b.frameRollKnob.displayValue = Ri(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((be = n.interaction) == null ? void 0 : be.kind) === "roll_frame", b.frameRollKnob.armed = !!Z && n.altModifier === !0;
  }
  function j() {
    F();
    const Z = AA({
      editor: n,
      swatches: el,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: Xn,
      colorsApproximatelyEqual: Aa,
      rgb01ToHsv: Uc,
      hsv01ToRgb: Wc,
      getBrushPresetIdForTool: D,
      isActiveLassoTool: ue
    });
    if (Object.assign(b.paintDock, Z), U(), !Z.visible) {
      i && (i.hidden = !0);
      return;
    }
    x && (clearTimeout(x), x = 0), o && (!Z.colorEnabled && i && !i.hidden && (x = window.setTimeout(() => {
      i.hidden = !0, b.paintDock.colorPopOpen = !1, x = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", Z.pickerHueColor), i.style.setProperty("--picker-sat", Z.pickerSat), i.style.setProperty("--picker-val", Z.pickerVal), i.style.setProperty("--picker-hue", Z.pickerHue)), s && (s.style.left = Z.pickerSvLeft, s.style.top = Z.pickerSvTop), a && (a.style.left = Z.pickerHueLeft));
  }
  function _() {
    const Z = M(f && n.mode === "frame" ? H() : W());
    Z && (n.panelLastValues = {
      yaw_deg: Number(Z.yaw_deg || 0),
      pitch_deg: Number(Z.pitch_deg || 0),
      hFOV_deg: Number(Z.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(Z.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(Z.rot_deg || 0),
      roll_deg: Number(Z.roll_deg || 0),
      aspect_id: fr(Z)
    }, O());
  }
  function O() {
    R(), v(), ve();
  }
  function Y() {
    const Z = f && n.mode === "frame" ? H() : null;
    return [...ye(), ae(), Z].some((be) => G(be) ? ua(be) : A(be) && ke() && ua(m.camera));
  }
  function ve() {
    if (r) return;
    m.ui_settings = m.ui_settings || {};
    const Z = NA(m.ui_settings);
    if (l) {
      b.sidePanel = CA({
        coverage: m.coverage,
        uiSettings: Z,
        normalizeCoverageValue: yn
      });
      return;
    }
    const be = W(), z = f && n.mode === "frame" ? H() : null, oe = z || be, q = z ? [z] : ye(), re = z ? "shot" : Se();
    if (q.length > 1 && (n.panelLastValues = n.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), oe && re !== "stroke") {
      const Te = M(oe);
      n.panelLastValues = {
        yaw_deg: Number(Te.yaw_deg || 0),
        pitch_deg: Number(Te.pitch_deg || 0),
        hFOV_deg: Number(Te.hFOV_deg || (re === "image" ? 30 : 90)),
        vFOV_deg: Number(Te.vFOV_deg || (re === "image" ? 30 : 60)),
        rot_deg: Number(Te.rot_deg || 0),
        roll_deg: Number(Te.roll_deg || 0),
        aspect_id: fr(Te)
      }, G(oe) && (n.panelLastValues.opacity = _r(oe, n.frame).opacity * 100);
    }
    const Q = n.panelLastValues || (g === "stickers" || re === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), te = re === "stroke" ? null : oe, X = ae(), C = t && (re === "shot" || re === "frame") && de(), se = X ? FS(X, n.frame) : C ? { ...te, ...IS(m.camera, n.frame), vFOV_deg: te.vFOV_deg } : G(te) ? n.panelLastValues : te || Q, fe = X ? h(X) : !!te && !ne(te);
    n.panelWasEnabled = fe, L();
    let we = null;
    if (z) {
      const Te = ie({ item: z, kind: "shot", label: "Frame" });
      we = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Te.label,
        currentIcon: Te.icon || null,
        items: [{
          id: String(z.id || ""),
          label: Te.label,
          icon: Te.icon || null,
          active: !0
        }]
      };
    } else if (g === "stickers" || g === "cutout") {
      const Te = [{
        id: "",
        label: g === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (g === "stickers") {
        const Ae = H();
        Ae && Te.push({ id: Ae.id, label: "Camera", icon: me("frame"), item: Ae, kind: "frame" }), V().forEach(($e, ce) => {
          var je, Ge;
          if (!$e || G($e) && !$e.visible) return;
          const Ne = u ? _e($e) : he($e) ? String($e.id || ud) : String(((Ge = (je = m.assets) == null ? void 0 : je[$e.asset_id]) == null ? void 0 : Ge.name) || $e.asset_id || $e.id), Ie = `${ce + 1}. ${Ne}${he($e) && P($e) ? " (hidden)" : ""}`, Ee = ie({ item: $e, label: Ie, kind: "image" });
          Te.push({ id: $e.id, label: Ee.label, icon: Ee.icon, item: $e, kind: "image" });
        });
      } else
        N().forEach((Ae) => {
          if (!(Ae != null && Ae.item)) return;
          const $e = ie(Ae);
          Te.push({ id: Ae.item.id, label: $e.label, icon: $e.icon, item: Ae.item, kind: Ae.kind });
        });
      const Le = (te == null ? void 0 : te.id) || "", ze = X ? { label: _e(X), icon: He.globe } : Te.find((Ae) => Ae.id === Le) || Te[0];
      we = {
        label: "Selection",
        open: !1,
        disabled: Te.length <= 1,
        currentLabel: ze.label,
        currentIcon: ze.icon || null,
        items: Te.map((Ae) => ({
          id: Ae.id,
          label: Ae.label,
          icon: Ae.icon || null,
          active: Ae.id === Le
        }))
      };
    }
    const E = [], ge = (Te, Le, ze, Ae, $e) => {
      const ce = Fe(Number(se[Te] || 0), ze, Ae);
      E.push({
        key: Te,
        label: Le,
        min: ze,
        max: Ae,
        step: $e,
        value: ce,
        displayValue: Ri(ce),
        fillPct: Fe((ce - ze) / Math.max(1e-6, Ae - ze) * 100, 0, 100),
        enabled: fe && !c
      });
    }, Pe = [];
    if (X) {
      for (const [Te, Le] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const ze = Zl(se[Te]);
        ge(Te, Le, -ze, ze, 0.01);
      }
      ge("yaw_deg", "Yaw", -180, 180, 0.1), ge("pitch_deg", "Pitch", -90, 90, 0.1), ge("roll_deg", "Roll", -180, 180, 0.1), ge("scale", "Scale", g0, Zl(se.scale), 0.01), ge("opacity", "Opacity", 0, 100, 1);
    } else if (q.length > 1)
      Pe.push(`Selected objects: ${q.length}`), Pe.push("Multi-selection supports z-order and delete.");
    else {
      const Te = re === "shot" || re === "frame";
      if (C)
        for (const [Le, ze] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ae = Zl(se[Le]);
          ge(Le, ze, -Ae, Ae, 0.01);
        }
      ge("yaw_deg", "Yaw", -180, 180, 0.1), ge("pitch_deg", "Pitch", -90, 90, 0.1), ge(re === "image" || g === "stickers" && !Te ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ge("hFOV_deg", "H FOV", 1, 179, 0.1), ge("vFOV_deg", "V FOV", 1, 179, 0.1), Te && E.forEach((Le) => {
        Le.enabled = Le.enabled && FA(Le.key, { erp: B() });
      }), G(te) && !Te && E.forEach((Le) => {
        Le.enabled = Le.enabled && TA(Le.key, { port: he(te) });
      }), u && !Te && ge("opacity", "Opacity", 0, 100, 1);
    }
    const Ce = q.length > 1 ? null : X || te;
    b.sidePanel = zA({
      coverage: m.coverage,
      readOnly: c,
      selectionPicker: we,
      enabled: fe,
      selectedKind: X ? "world" : re,
      selectedItems: q,
      params: E,
      notes: Pe,
      uiSettings: Z,
      normalizeCoverageValue: yn,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: S && Ce && (Ce === X || G(Ce)) ? $A({
        layer: It(Ce) ? Ce.origin.layer : null,
        editable: It(Ce) && va(Ce),
        locked: Ce.locked === !0,
        readOnly: c,
        placement: Ce.placement,
        override: It(Ce) ? Eg(m.upstream, Ce.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: It(Ce) ? null : w(Ce)
      }) : null
    });
  }
  function _e(Z) {
    const be = Nh(Z);
    return It(Z) ? `${dd(Z.origin.layer)} · ${be}` : be;
  }
  function xe() {
    const { canUndo: Z, canRedo: be } = $();
    Mi(b.toolButtons, "value", "undo", { disabled: !Z }), Mi(b.toolButtons, "value", "redo", { disabled: !be });
  }
  return {
    connect(Z) {
      ({
        cameraPreviewShown: y,
        cameraShoots: K,
        getActiveCutoutShot: H,
        getBrushPresetIdForTool: D,
        getCutoutInspectorItems: N,
        getHistoryCapabilities: $,
        getList: V,
        getSelected: W,
        getSelectedItems: ye,
        getSelectedKind: Se,
        getSelectionItemIcon: me,
        getSelectionItemLabelData: ie,
        hasCamera: ke,
        hasSpaceContent: de,
        isActiveLassoTool: ue,
        isErpCamera: B,
        isExternalSticker: he,
        isItemLocked: ne,
        isPaintCursorEnabled: T,
        isSceneSticker: G,
        isShotItem: A,
        isSpaceView: pe,
        isStickerHidden: P,
        leaveFrameView: I,
        portHandoffLanes: w,
        poseOf: M,
        selectedWorldSticker: ae,
        setCanvasCursor: ee,
        syncCutoutShot: R,
        syncTimeline: v,
        syncVideoTransportVisibility: U,
        updateCursor: p,
        worldStickerEditable: h
      } = Z);
    },
    syncLookAtFrameButtonState: L,
    syncFloatingViewButtonState: J,
    syncViewToggleState: le,
    syncFrameRollKnob: k,
    syncPaintUi: j,
    syncSidePanelControls: _,
    updateSidePanel: O,
    inspectorTimed: Y,
    syncSidePanelModel: ve,
    syncUndoRedoButtons: xe
  };
}
function _C(e) {
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
  let m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T;
  function G() {
    var oe;
    if (!s || r) return;
    const Z = ((oe = l.drag) == null ? void 0 : oe.limit) ?? pe();
    !l.drag && H.frame > Z - 1 && H.seek(Z - 1);
    const be = l.selection, z = be && U(be.owner);
    if (be) {
      const q = z ? h(be) : [], re = x(be.owner);
      be.frames = be.frames.filter((Q) => Q + re < Z && q.some((te) => z[te].keyframes.some((X) => X.frame === Q))), be.frames.length || (l.selection = null);
    }
    d.timeline = UA(o, {
      span: Z,
      portBarEnd: v,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? A(),
      openRows: l.openRows,
      audio: le() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(n) !== null || Mo(n, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!Fi(n).scene && !ue(),
      upstream: T(),
      background: w() ? { end: v(o.background) } : null
    }), d.easing = l.selection && L(l.selection.owner) ? BA(z, h(l.selection), l.selection.frames, x(l.selection.owner)) : null;
  }
  function A() {
    return vh(o, { camera: a });
  }
  function pe(Z = null) {
    var be;
    return Au(o, {
      bg: P(),
      port: S(),
      sceneItems: ue() ? 0 : ((be = W()) == null ? void 0 : be.urls.length) ?? 0,
      upstream: B(Z),
      openClip: Z,
      camera: a
    });
  }
  function P() {
    return de() ? null : I() ?? (Fi(n).bg_media && !Mo(n, ["bg_media"]) ? { frames: 1 } : null);
  }
  function I() {
    const Z = d.videoTransport;
    return Z.ready && Z.frameCount > 0 ? { video: !!de() || Mo(n, ["bg_media"]), frames: Z.frameCount, duration: Number(Z.duration || 0) } : null;
  }
  function w() {
    return i && !!Fi(n).bg_media && !de();
  }
  function M() {
    const Z = de();
    return Z ? Z.clip ? dh(Z.clip.clip, Z.clip.fps, o.timeline.fps) : { start: 0, in: 0, duration: null } : w() ? o.background.clip : null;
  }
  function ae() {
    const Z = M();
    return Z ? fh(Z) : null;
  }
  function ee(Z) {
    const be = M();
    if (!be) return !0;
    const z = !!de();
    return vc(be, Z, o.timeline.fps, z ? I() : P(), z || ue());
  }
  function R() {
    var Z;
    return ((Z = de()) == null ? void 0 : Z.color) ?? o.bg_color;
  }
  function v(Z) {
    var z;
    if (Z === o.background) {
      const oe = Z.clip.duration === null ? P() : null;
      return oe != null && oe.video || (oe == null ? void 0 : oe.frames) > 1 ? uh(Z.clip, o.timeline.fps, oe, ue()) : null;
    }
    if (((z = Z.source) == null ? void 0 : z.kind) !== "port" || Z.clip.duration !== null) return null;
    const be = Z.origin ? he(Z) : y(Z) ? S() : null;
    return be ? Mu(Z.clip, o.timeline.fps, be) : null;
  }
  function U(Z) {
    if (Z === "camera") return g() ? o.camera : null;
    if (Z === "scene") return i ? o.scene : null;
    if (Z === Ao) return w() ? o.background : null;
    const be = ne(Z);
    return be ? be.owner : Se(Z);
  }
  function p(Z) {
    var be;
    return ((be = ne(Z)) == null ? void 0 : be.editable) ?? !0;
  }
  function h(Z) {
    return Z.lane ? [Z.lane] : Bi(U(Z.owner));
  }
  function x(Z) {
    var z;
    if (Z === "camera") return 0;
    const be = (z = U(Z)) == null ? void 0 : z.clip;
    return be ? be.start - be.in : 0;
  }
  function F(Z) {
    return `${ui(Z, t.frame)}:${Z.start - Z.in}`;
  }
  function L(Z) {
    var z;
    const be = U(Z);
    return !!be && be.locked !== !0 && p(Z) && ((z = ne(Z)) == null ? void 0 : z.part) !== "scene";
  }
  function J(Z) {
    const be = Math.max(0, Math.round(Z));
    if (be === t.frame) return;
    ye(), t.frame = be, c.frame.value = be, ye();
    const z = [t.selectedId, t.worldSelectedId];
    $(), K(), z[0] !== t.selectedId || z[1] !== t.worldSelectedId ? ke() : b() && me(), ie(), V({ reason: it.PLAYHEAD });
  }
  function le() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function k(Z) {
    N(), H.seek(Z);
  }
  function j() {
    s && H.stop();
  }
  function _() {
    N(), H.toggle();
  }
  function O() {
    ye(), K(), ke(), ie(), V();
  }
  function Y() {
    D(), m(), O();
  }
  function ve() {
    const { selection: Z } = l;
    L(Z.owner) && (j(), iS(U(Z.owner), h(Z), Z.frames, t.frame - x(Z.owner)), l.selection = null, Y());
  }
  function _e(Z) {
    const be = Rr(Z);
    if (be === null || be === o.timeline.fps) return;
    j();
    const z = Math.round(t.frame * be / o.timeline.fps);
    xS(o, be), l.selection = null, H.seek(z), Y();
  }
  function xe() {
    const Z = f(n);
    Z !== null && Z !== o.timeline.fps && _e(Z);
  }
  return {
    connect(Z) {
      ({
        commitAndRefreshNode: m,
        getPortMediaMeta: S,
        hasCamera: g,
        inspectorTimed: b,
        isExternalSticker: y,
        markObjectVisualsDirty: K,
        playback: H,
        pushHistory: D,
        refreshModalVideoSource: N,
        releaseHiddenSelection: $,
        requestDraw: V,
        sceneFiles: W,
        syncCutoutShot: ye,
        stickerById: Se,
        syncSidePanelModel: me,
        updateSelectionMenu: ie,
        updateSidePanel: ke,
        upstreamBackground: de,
        upstreamLinked: ue,
        upstreamOutput: B,
        upstreamPortMeta: he,
        upstreamRow: ne,
        upstreamTimelineLayers: T
      } = Z);
    },
    syncTimeline: G,
    timelineTimed: A,
    timelineSpanFrames: pe,
    backgroundShown: w,
    backgroundShowsAt: ee,
    backgroundVideoPlace: ae,
    backgroundColor: R,
    portBarEnd: v,
    timelineOwner: U,
    selectedLanes: h,
    timelineOffset: x,
    clipView: F,
    timelineEditable: L,
    rowEditable: p,
    setTimelineFrame: J,
    jumpTimelineTo: k,
    stopTimelinePlayback: j,
    togglePlayback: _,
    refreshTimelineEdit: O,
    commitTimelineEdit: Y,
    deleteSelectedKeyframes: ve,
    changeTimelineFps: _e,
    applyVideoTimelineFps: xe
  };
}
function wC(e) {
  const {
    dragFrames: t,
    editor: n,
    readOnly: r,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I;
  function w(M) {
    var ae, ee;
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
        A(), de();
        return;
      }
      if (M.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? T()), s.selection = null, de();
        return;
      }
      if (M.type === "restore-upstream-deleted" || M.type === "revert-upstream-layer") {
        const R = (ee = (ae = a.timeline) == null ? void 0 : ae.groups) == null ? void 0 : ee.find((U) => U.key === M.key), v = M.type === "restore-upstream-deleted" ? R == null ? void 0 : R.restore : R == null ? void 0 : R.revert;
        if (!v || v.disabled) return;
        M.type === "restore-upstream-deleted" ? N(M.key) : $(M.key), de();
        return;
      }
      if (M.type === "toggle-row") {
        s.openRows.has(M.id) ? s.openRows.delete(M.id) : s.openRows.add(M.id), de();
        return;
      }
      if (M.type === "toggle-visible") {
        if (!V(M.id)) return;
        const R = I(M.id);
        if (M.id === I0) i.painting_visible = !i.painting_visible;
        else if ((R == null ? void 0 : R.part) === "painting") R.sceneState.painting_visible = !R.sceneState.painting_visible;
        else {
          const v = he(M.id);
          if (!v) return;
          v.visible = !v.visible;
        }
        H(), u();
        return;
      }
      if (M.type === "select-row") {
        const R = me(M.id);
        if (R && !R.visible || M.id === "camera" && !l()) return;
        R && !ui(R.clip, n.frame) && S(R.clip.start), (R == null ? void 0 : R.placement) === "world" ? W(R.id) : M.id === "camera" ? Se(f()) : Se(m().find((v) => v.id === M.id) || null), ke(), s.selection = null, P(), pe(), D();
        return;
      }
      if (M.type === "select-keys") {
        const R = B(M.owner), v = M.frames.map((h) => h - R), U = s.selection, p = (U == null ? void 0 : U.owner) === M.owner && U.lane === M.lane;
        if (M.additive && p) {
          const h = new Set(U.frames);
          for (const x of v)
            h.has(x) ? h.delete(x) : h.add(x);
          U.frames = [...h].sort((x, F) => x - F);
        } else
          s.selection = v.length ? { owner: M.owner, lane: M.lane, frames: v } : null;
        de();
        return;
      }
      if (M.type === "move-keys") {
        const R = s.selection;
        if (!R || !ue(R.owner)) return;
        const v = he(R.owner), U = ye(R);
        if (M.phase === "start") {
          ie(), s.drag = { keyframes: U.map((F) => structuredClone(v[F].keyframes)), frames: R.frames, limit: ne() };
          return;
        }
        const { drag: p } = s;
        if (!(p != null && p.keyframes)) return;
        U.forEach((F, L) => {
          v[F].keyframes = structuredClone(p.keyframes[L]);
        });
        const h = B(R.owner), x = oS(v, U, p.frames, M.delta, -h, p.limit - 1 - h);
        if (R.frames = p.frames.map((F) => F + x), M.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, x ? u() : K();
        return;
      }
      if (M.type === "clip") {
        const R = he(M.id);
        if (!(R != null && R.clip) || R.locked || !V(M.id)) return;
        if (M.phase === "start") {
          ie();
          const { clip: x } = R, F = ne(), L = x.duration === null ? b(R) ?? F : x.start + x.duration;
          s.drag = { clip: { ...x }, span: ne(x), limit: F, end: L };
          return;
        }
        const { drag: v } = s;
        if (!(v != null && v.clip)) return;
        const U = v.clip, p = d(R.clip);
        if (R.clip = { ...U }, M.delta && M.mode === "move") {
          Mf(R.clip, Math.min(M.delta, Math.max(0, v.limit - 1 - U.start)));
          const x = ne() - v.limit;
          x > 0 && Mf(R.clip, -x);
        } else M.delta && M.mode === "start" ? lS(R.clip, Math.min(U.start + M.delta, Math.max(v.limit - 1, U.start))) : M.delta && cS(R.clip, Math.min(v.end + M.delta, Math.max(v.limit, v.end)), v.span);
        if (M.phase !== "end") {
          t.request("timeline"), d(R.clip) !== p && (t.request("view"), M.id === Ao && t.request("background"));
          return;
        }
        t.cancel(), s.drag = null, H();
        const h = JSON.stringify(R.clip) !== JSON.stringify(U);
        h && M.id === Ao && g.seek(n.frame), h ? u() : K();
        return;
      }
      if (M.type === "key-row") {
        if (M.owner === "scene" || M.owner === Ao || !ue(M.owner)) return;
        ie(), tS(he(M.owner), n.frame - B(M.owner)), u();
        return;
      }
      if (M.type === "fps") {
        const R = dS(M.fps);
        if (R === null || R === i.timeline.fps || a.timeline.fpsLocked) {
          de();
          return;
        }
        c(R);
        return;
      }
      if (M.type === "length") {
        const R = fS(M.length);
        if (R === void 0 || R === i.timeline.length) {
          de();
          return;
        }
        ie(), i.timeline.length = R, u();
        return;
      }
      if (M.type === "easing") {
        const R = s.selection;
        if (!R || !ue(R.owner)) return;
        ie(), aS(he(R.owner), ye(R), R.frames, M.easing), M.commit ? u() : K();
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
        jumpTimelineTo: S,
        playback: g,
        portBarEnd: b,
        refreshModalVideoSource: y,
        refreshTimelineEdit: K,
        releaseHiddenSelection: H,
        requestDraw: D,
        restoreUpstreamDeletedCommand: N,
        revertUpstreamLayerCommand: $,
        rowEditable: V,
        selectWorldSticker: W,
        selectedLanes: ye,
        setSelectedItem: Se,
        stickerById: me,
        stopTimelinePlayback: ie,
        syncFloatingViewButtonState: ke,
        syncTimeline: de,
        timelineEditable: ue,
        timelineOffset: B,
        timelineOwner: he,
        timelineSpanFrames: ne,
        timelineTimed: T,
        togglePlayback: G,
        toggleVideoMuted: A,
        updateSelectionMenu: pe,
        updateSidePanel: P,
        upstreamRow: I
      } = M);
    },
    onTimelineAction: w
  };
}
function kC(e) {
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
  let d, u, f, m, S, g, b;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = yn(i.value)), n && (l.bg_color = String(n.value || l.bg_color || "#00ff00")), K(), o.setDirtyCanvas(!0, !0));
  }
  function K() {
    var ye;
    if (a || (m(), g(), b(), l.coverage = yn(l.coverage), Ch(o, l.active), !c)) return;
    const V = f(), W = Ih(o, V, String(c.value ?? ""), { rebased: r });
    W !== null && (V !== l && (l.id = V.id), c.value = W, (ye = c.callback) == null || ye.call(c, W));
  }
  function H() {
    l.ui_settings = lA(l.ui_settings), a || K();
  }
  function D() {
    var V;
    a || (K(), (V = o.setDirtyCanvas) == null || V.call(o, !0, !0));
  }
  function N() {
    a || d() && S().catch((V) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", V);
    });
  }
  function $(V = {}) {
    var Se, me, ie, ke, de, ue, B, he, ne, T, G;
    const W = V.syncPreview !== !1, ye = V.syncGraph !== !1;
    W && ((ie = (me = (Se = cg(o)) == null ? void 0 : Se.runtime) == null ? void 0 : me.requestDraw) == null || ie.call(me), (ue = (de = (ke = Ac(o)) == null ? void 0 : ke.dom) == null ? void 0 : de.requestDraw) == null || ue.call(de), (B = o.setDirtyCanvas) == null || B.call(o, !0, !1)), ye && ((ne = (he = o.graph) == null ? void 0 : he.setDirtyCanvas) == null || ne.call(he, !0, !0), (G = (T = t == null ? void 0 : t.canvas) == null ? void 0 : T.setDirty) == null || G.call(T, !0, !0));
  }
  return {
    connect(V) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: m,
        syncPaintingLayerAsync: S,
        syncPortHandoff: g,
        syncUpstreamEdits: b
      } = V);
    },
    apply: y,
    commitState: K,
    persistUiSettings: H,
    commitAndRefreshNode: D,
    triggerBackgroundPersistenceOnClose: N,
    syncCoverageChangeToNodePreviews: $
  };
}
function xC(e) {
  const {
    editor: t,
    readOnly: n,
    sceneV2: r,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee, R, v;
  function U(_, O, Y = "Clear") {
    return new Promise((ve) => {
      a.confirmDialog = {
        visible: !0,
        title: String(_ || ""),
        text: String(O || ""),
        confirmLabel: String(Y || "Confirm"),
        resolve: ve
      };
    });
  }
  async function p() {
    var Y, ve;
    if (n || !await U(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = li(null), B();
    const O = d();
    if (s === "stickers")
      i.stickers = r ? i.stickers.filter((_e) => _e.placement === "world" || O.includes(_e)) : O, r || (i.assets = {}), t.selectedId = ((Y = O[0]) == null ? void 0 : Y.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((ve = O[0]) == null ? void 0 : ve.id) || null, ne();
    else {
      const _e = SS(i.shots, i.active.selected_shot_id);
      i.stickers = O, i.assets = {}, i.shots = _e.shots, t.selectedId = _e.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = _e.selectedShotId, !_e.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, ne();
    }
    T(), u(), R(), ee(), A();
  }
  async function h(_) {
    var xe, Z, be, z;
    if (n) return;
    const O = _ === "mask" ? "mask" : "paint", Y = O === "mask" ? "Mask" : "Paint", ve = K(O);
    if (!(!ve.length && !(((xe = t.interaction) == null ? void 0 : xe.kind) === "draw" && ((Z = t.interaction) == null ? void 0 : Z.layerKind) === O) || !await U(
      `Clear ${Y}`,
      `This will remove all ${O} strokes in the current node.`,
      `Clear ${Y}`
    ))) {
      if (((be = t.interaction) == null ? void 0 : be.kind) === "draw" && ((z = t.interaction) == null ? void 0 : z.layerKind) === O) {
        const oe = S(t.interaction);
        oe && t.paintEngine.cancelActiveStroke(oe), t.interaction = null;
      }
      ve.length = 0, i.painting.raster_objects = H().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") !== O), O === "paint" && (y().length = 0), B(), T(), u(), R(), ee(), ae(), A();
    }
  }
  function x() {
    if (n) return;
    const _ = D();
    if (!_ || !me(_) || $(_) || It(_) || r && ke(_)) return;
    let O;
    r ? O = VS(_, qa(i), b()) : (O = JSON.parse(JSON.stringify(_)), O.id = fo("st"), O.yaw_deg = Et((O.yaw_deg || 0) + 8), O.z_index = b()), i.stickers.push(O), i.active.selected_sticker_id = O.id, t.selectedId = O.id, t.selectedIds = [O.id], de(), T(), u(), ee(), R(), A();
  }
  function F() {
    const _ = I();
    return _ ? (v(_) && (w(), It(_) ? m([_]) : RS(i, _.id), c(), de(), T(), u(), R(), ee(), M(), A()), !0) : !1;
  }
  function L() {
    var ve, _e, xe, Z, be;
    if (n) return;
    const _ = N(), O = D();
    if (!O && _.length === 0 || _.some((z) => V(z))) return;
    w();
    const Y = _.filter(It);
    if (Y.length && (m(Y), de()), _.length > 1 || Y.length) {
      const z = new Set(_.filter((re) => ie(re)).map((re) => String(re.actionGroupId || re.id || ""))), oe = new Set(_.filter((re) => W(re)).map((re) => he(re.rasterObjectId || re.id || ""))), q = new Set(_.filter(me).map((re) => String(re.id || "")));
      z.size > 0 && (i.painting.paint.strokes = (Array.isArray((_e = (ve = i.painting) == null ? void 0 : ve.paint) == null ? void 0 : _e.strokes) ? i.painting.paint.strokes : []).filter((re) => !z.has(String((re == null ? void 0 : re.actionGroupId) || ""))), i.painting.groups = y().filter((re) => !z.has(String((re == null ? void 0 : re.actionGroupId) || (re == null ? void 0 : re.id) || ""))), B()), oe.size > 0 && (i.painting.raster_objects = H().filter((re) => !oe.has(String((re == null ? void 0 : re.id) || ""))), ue()), q.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((re) => q.has(String((re == null ? void 0 : re.id) || "")) ? $(re) ? (Se(re) || (re.visible = !1), !0) : !1 : !0), ne(), de()), t.selectedId = null, t.selectedIds = [], T(), u(), R(), ee(), A();
      return;
    }
    if (ie(O)) {
      const z = String(O.actionGroupId || O.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((Z = (xe = i.painting) == null ? void 0 : xe.paint) == null ? void 0 : Z.strokes) ? i.painting.paint.strokes : []).filter((oe) => String((oe == null ? void 0 : oe.actionGroupId) || "").trim() !== z), i.painting.groups = y().filter((oe) => String((oe == null ? void 0 : oe.actionGroupId) || (oe == null ? void 0 : oe.id) || "").trim() !== z), B(), t.selectedId = null, t.selectedIds = [], T(), u(), R(), ee(), A();
      return;
    }
    if (W(O)) {
      const z = he(O.rasterObjectId || O.id || "");
      i.painting.raster_objects = H().filter((oe) => String((oe == null ? void 0 : oe.id) || "").trim() !== z), ue(), t.selectedId = null, t.selectedIds = [], T(), u(), R(), ee(), A();
      return;
    }
    if (o && ye(O)) {
      f();
      return;
    }
    if (s === "stickers" || me(O)) {
      if ($(O)) {
        if (Se(O)) return;
        O.visible = !1, de(), T(), u(), R(), ee(), A();
        return;
      }
      i.stickers = i.stickers.filter((z) => z.id !== O.id), ne(), de(), t.selectedId = ((be = g()[0]) == null ? void 0 : be.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, T(), u(), R(), ee(), A();
      return;
    }
    l();
  }
  function J(_, O) {
    n || (w(), _(O) && (G(), de(), T(), u(), R(), ee(), A()));
  }
  function le(_) {
    J(pe, _);
  }
  function k(_) {
    J(P, _);
  }
  function j() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", ae(), R());
  }
  return {
    connect(_) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: m,
        getActivePaintTargetDescriptor: S,
        getList: g,
        getNextStickerZIndex: b,
        getPaintingGroupList: y,
        getPaintingLayerList: K,
        getRasterObjectList: H,
        getSelected: D,
        getSelectedItems: N,
        isExternalSticker: $,
        isItemLocked: V,
        isRasterObjectItem: W,
        isShotItem: ye,
        isStickerHidden: Se,
        isStickerItem: me,
        isStrokeGroupItem: ie,
        isUploadingSticker: ke,
        markObjectVisualsDirty: de,
        markPaintCompositeVisualsDirty: ue,
        markPaintStrokeVisualsDirty: B,
        parseRasterObjectSelectionId: he,
        pruneUnusedAssets: ne,
        pushHistory: T,
        releaseHiddenSelection: G,
        requestDraw: A,
        restoreUpstreamDeleted: pe,
        revertUpstreamLayer: P,
        selectedWorldSticker: I,
        stopTimelinePlayback: w,
        syncFloatingViewButtonState: M,
        syncPaintUi: ae,
        updateSelectionMenu: ee,
        updateSidePanel: R,
        worldStickerEditable: v
      } = _);
    },
    clearAll: p,
    clearPaintingLayer: h,
    duplicateSelected: x,
    deleteSelectedWorldSticker: F,
    deleteSelected: L,
    restoreUpstreamDeletedCommand: le,
    revertUpstreamLayerCommand: k,
    forceCursorTool: j
  };
}
function MC(e) {
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
  let S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne;
  function T(k) {
    return id(k == null ? void 0 : k.dataTransfer);
  }
  function G(k) {
    const j = !!k;
    r.active !== j && (r.active = j, d.classList.toggle("drop-active", j));
  }
  function A() {
    const k = new Set(
      (u.stickers || []).map((j) => String((j == null ? void 0 : j.asset_id) || "")).filter((j) => !!j)
    );
    Object.keys(u.assets || {}).forEach((j) => {
      k.has(j) || (delete u.assets[j], s.delete(j));
    });
  }
  async function pe(k) {
    if (l || f !== "stickers" && f !== "cutout" || !Ln(k)) return;
    if (c) {
      B(), await ae(k);
      return;
    }
    const j = fo("asset"), _ = ao(a, `add:${j}`, async () => {
      try {
        const { image: O } = await lo(k);
        s.set(j, O);
        const Y = fo("st");
        u.stickers.push({
          id: Y,
          asset_id: j,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: b(30, Number(O.naturalWidth || O.width || 1), Number(O.naturalHeight || O.height || 1)),
          rot_deg: 0,
          z_index: D()
        }), ke(u.stickers[u.stickers.length - 1]), H(), ne(), he(), me();
        const ve = await qr(k, {
          fetchApi: (Z, be) => t.fetchApi(Z, be)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((Z) => String((Z == null ? void 0 : Z.asset_id) || "") === j).length) return;
        u.assets[j] = ve, A(), Se(), g(), ne(), he(), me();
      } catch (O) {
        delete u.assets[j], s.delete(j);
        const Y = Array.isArray(u.stickers) ? u.stickers : [], ve = Y.filter((_e) => String((_e == null ? void 0 : _e.asset_id) || "") === j);
        throw ve.length && (u.stickers = Y.filter((_e) => String((_e == null ? void 0 : _e.asset_id) || "") !== j), ve.some((_e) => String((_e == null ? void 0 : _e.id) || "") === String(i.selectedId || "")) && ke(null), ne(), he(), me(), g()), O;
      }
    });
    try {
      await _;
    } catch {
    }
  }
  function P() {
    var k;
    l || f !== "stickers" && f !== "cutout" || (k = m == null ? void 0 : m.openImagePicker) == null || k.call(m, "add");
  }
  function I() {
    var k;
    l || !c || (k = m == null ? void 0 : m.openImagePicker) == null || k.call(m, "add-world");
  }
  async function w(k) {
    l || !c || !Ln(k) || (B(), await ae(k, "world"));
  }
  function M() {
    const k = { x: n.width / 2, y: n.height / 2 }, j = V() ? o.pick(K(), k.x, k.y, n.width, n.height) : null;
    return C_(de(), j, y());
  }
  async function ae(k, j = "sky") {
    const _ = qa(u), O = ao(a, `add:${_}`, async () => {
      const { image: Y } = await lo(k), ve = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: b(30, Number(Y.naturalWidth || Y.width || 1), Number(Y.naturalHeight || Y.height || 1)),
        rot_deg: 0
      }, _e = { kind: "file", filename: "" }, xe = j === "world" ? LS(_, _e, M()) : Eu(_, _e, ve, D());
      s.set(ue(xe), Y), u.stickers.push(xe), j === "world" ? ie(_) : ke(xe), H(), ne(), he(), me();
      try {
        const Z = await qr(k, {
          fetchApi: (z, oe) => t.fetchApi(z, oe)
        }), be = u.stickers.find((z) => z.id === _);
        if (!be) return;
        be.source = Ts(Z), s.set(ue(be), Y), Se(), g();
      } catch (Z) {
        throw u.stickers = u.stickers.filter((be) => be.id !== _), i.selectedId === _ && ke(null), i.worldSelectedId === _ && S(), Se(), g(), Z;
      } finally {
        ne(), he(), me();
      }
    });
    try {
      await O;
    } catch {
    }
  }
  async function ee(k, j) {
    const _ = ao(a, `replace:${j}:${fo("asset")}`, async () => {
      const { image: O } = await lo(k), Y = await qr(k, {
        fetchApi: (_e, xe) => t.fetchApi(_e, xe)
      }), ve = u.stickers.find((_e) => _e.id === j);
      if (ve) {
        ve.source = Ts(Y), ve.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const _e of [ve.size.value, ...ve.size.keyframes.map((xe) => xe.value)])
          _e.vFOV_deg = b(_e.hFOV_deg, Number(O.naturalWidth || O.width || 1), Number(O.naturalHeight || O.height || 1));
        s.set(ue(ve), O), ye(), Se(), g(), ne(), he(), me();
      }
    });
    try {
      await _;
    } catch {
    }
  }
  async function R(k) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const j = N();
    if (!j || !W(j) || $(j) || It(j) || !Ln(k)) return;
    if (c) {
      await ee(k, j.id);
      return;
    }
    const _ = String(j.id || ""), O = fo("asset"), Y = ao(a, `replace:${_}:${O}`, async () => {
      var z;
      const ve = (Array.isArray(u.stickers) ? u.stickers : []).find((oe) => String((oe == null ? void 0 : oe.id) || "") === _) || null;
      if (!ve || !W(ve) || $(ve)) return;
      const _e = String(ve.asset_id || ""), xe = _e ? No(((z = u.assets) == null ? void 0 : z[_e]) || null) : null, Z = Number(ve.vFOV_deg || 0), be = ve.crop && typeof ve.crop == "object" ? { ...ve.crop } : null;
      try {
        const { image: oe } = await lo(k);
        s.set(O, oe), ve.asset_id = O, ve.vFOV_deg = b(
          Number(ve.hFOV_deg || 30),
          Number(oe.naturalWidth || oe.width || 1),
          Number(oe.naturalHeight || oe.height || 1)
        ), ve.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ye(), ne(), he(), me();
        const q = await qr(k, {
          fetchApi: (Q, te) => t.fetchApi(Q, te)
        }), re = (Array.isArray(u.stickers) ? u.stickers : []).find((Q) => String((Q == null ? void 0 : Q.id) || "") === _) || null;
        if (!re || String(re.asset_id || "") !== O) return;
        u.assets[O] = q, A(), Se(), g(), ne(), he(), me();
      } catch (oe) {
        delete u.assets[O], s.delete(O);
        const q = (Array.isArray(u.stickers) ? u.stickers : []).find((re) => String((re == null ? void 0 : re.id) || "") === _) || null;
        throw q && String(q.asset_id || "") === O && (_e && xe && (u.assets[_e] = xe), q.asset_id = _e, q.vFOV_deg = Z, q.crop = be ? { ...be } : null), ye(), g(), ne(), he(), me(), oe;
      }
    });
    try {
      await Y;
    } catch {
    }
  }
  function v() {
    var j;
    if (l) return;
    const k = N();
    !k || !W(k) || $(k) || It(k) || (j = m == null ? void 0 : m.openImagePicker) == null || j.call(m, "replace");
  }
  async function U() {
    if (l || f !== "stickers") return;
    if (c) {
      await p();
      return;
    }
    const k = u.assets && typeof u.assets == "object" ? u.assets : {}, j = Object.entries(k).filter(([, O]) => {
      const Y = String((O == null ? void 0 : O.type) || "").toLowerCase(), ve = String((O == null ? void 0 : O.value) || "");
      return Y === "dataurl" && ve.startsWith("data:image");
    });
    if (!j.length) return;
    let _ = !1;
    for (const [O, Y] of j)
      try {
        const ve = String((Y == null ? void 0 : Y.value) || "");
        if (!ve) continue;
        const _e = await fetch(ve).then((oe) => oe.blob()), xe = String(_e.type || "image/png").split("/")[1] || "png", Z = String((Y == null ? void 0 : Y.name) || `${O}.${xe}`), be = new File([_e], Z, { type: _e.type || "image/png" }), z = await qr(be, {
          fetchApi: (oe, q) => t.fetchApi(oe, q)
        });
        u.assets[O] = {
          ...z,
          w: Number((Y == null ? void 0 : Y.w) || 0),
          h: Number((Y == null ? void 0 : Y.h) || 0)
        }, _ = !0;
      } catch {
      }
    _ && (g(), me());
  }
  async function p() {
    let k = !1;
    for (const j of u.stickers) {
      const _ = j.source.data_url;
      if (_)
        try {
          const O = await fetch(_).then((xe) => xe.blob()), Y = String(O.type || "image/png").split("/")[1] || "png", ve = new File([O], `${j.id}.${Y}`, { type: O.type || "image/png" }), _e = await qr(ve, {
            fetchApi: (xe, Z) => t.fetchApi(xe, Z)
          });
          j.source = Ts(_e), k = !0;
        } catch {
        }
    }
    k && (g(), me());
  }
  function h(k) {
    f !== "stickers" && f !== "cutout" || l || (k.preventDefault(), G(!0));
  }
  function x(k) {
    var O;
    if (f !== "stickers" && f !== "cutout" || l) return;
    k.preventDefault(), k.stopPropagation(), r.depth = 0, G(!1);
    const _ = Array.from(((O = k.dataTransfer) == null ? void 0 : O.files) || []).find((Y) => Ln(Y));
    _ && pe(_);
  }
  function F(k) {
    f !== "stickers" && f !== "cutout" || l || T(k) && (r.depth += 1, G(!0), k.preventDefault());
  }
  function L(k) {
    f !== "stickers" && f !== "cutout" || l || (!r.active && T(k) && G(!0), r.active && k.preventDefault());
  }
  function J(k) {
    if (f !== "stickers" && f !== "cutout" || l || !r.active) return;
    r.depth = Math.max(0, r.depth - 1);
    const j = Number(k.clientX) <= 0 && Number(k.clientY) <= 0;
    (r.depth === 0 || j) && G(!1);
  }
  function le(k) {
    f !== "stickers" && f !== "cutout" || l || (r.depth = 0, G(!1), T(k) && k.preventDefault());
  }
  return {
    connect(k) {
      ({
        clearWorldSelection: S,
        commitAndRefreshNode: g,
        computeStickerVFov: b,
        contentSphere: y,
        currentSpaceCamera: K,
        forceCursorTool: H,
        getNextStickerZIndex: D,
        getSelected: N,
        isExternalSticker: $,
        isSpaceView: V,
        isStickerItem: W,
        markObjectVisualsDirty: ye,
        pushHistory: Se,
        requestDraw: me,
        selectWorldSticker: ie,
        setSelectedItem: ke,
        spaceViewState: de,
        stickerImageKey: ue,
        stopTimelinePlayback: B,
        updateSelectionMenu: he,
        updateSidePanel: ne
      } = k);
    },
    addImageStickerFromFile: pe,
    addImageSticker: P,
    addWorldImageSticker: I,
    addWorldStickerFromFile: w,
    replaceSelectedImageFromFile: R,
    replaceSelectedImage: v,
    migrateLegacyEmbeddedAssets: U,
    pruneUnusedAssets: A,
    setDropCue: G,
    onCanvasDragOver: h,
    onCanvasDrop: x,
    onWindowDragEnter: F,
    onWindowDragOver: L,
    onWindowDragLeave: J,
    onWindowDrop: le
  };
}
function PC(e) {
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
  let g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee, R = o;
  function v(q, re) {
    var X;
    const Q = (X = N().space) == null ? void 0 : X.gizmo;
    if (me() && Q && ee("hover", re) !== null && ee("down", re))
      return r.interaction = { kind: "world_gizmo", camera: !0, mode: Q.mode, start: Q.transform, base: D(), changed: !1 }, n.setPointerCapture(q.pointerId), w(re), !0;
    const te = Gh(D(), b(ne()));
    return L_(H(), te, re, n.width, n.height) ? (me() || (he(O()), ae(), M(), ue()), r.interaction = { kind: "world_select" }, n.setPointerCapture(q.pointerId), !0) : !1;
  }
  function U() {
    if (s || m !== "cutout") return;
    const q = O();
    if (q) {
      he(q), r.mode = "pano", I(Et(Number(q.yaw_deg || 0)), Fe(Number(q.pitch_deg || 0), -89.9, 89.9)), ae(), M(), ue({ cause: "cutout_frame" });
      return;
    }
    const re = jm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Et(Number(r.viewYaw || 0)),
      pitchDeg: Number(r.viewPitch || 0),
      viewFovDeg: Number(r.viewFov || 90)
    });
    d.shots = [re], he(re), $(), r.mode = "pano", de(), K(), ae(), M(), ue({ cause: "cutout_frame" });
  }
  function p() {
    s || !u || W() || (G(), d.camera = NS(T()), j(), he(O()), $(), de(), K(), ae(), M(), ue({ cause: "cutout_frame" }));
  }
  function h() {
    G(), d.camera = null, he(null), j(), de(), K(), ae(), M(), ue({ cause: "cutout_frame" });
  }
  function x(q, re) {
    u && ie(q) && (d.camera.projection = re === Gi ? "erp" : "perspective", re === Gi) || J(q, re);
  }
  function F() {
    s || m !== "cutout" || (d.shots = [], r.selectedId = null, r.selectedIds = [], r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, d.active.selected_shot_id = null, de(), K(), ae(), M(), ue());
  }
  function L(q, re) {
    const Q = a.frameSafeRect;
    if (!q || !Q || r.mode !== "frame") return !1;
    const te = Kc * oi(Q, q), X = gu(hu(Q, re), te);
    return q.hFOV_deg = X.hFOV_deg, q.vFOV_deg = X.vFOV_deg, !0;
  }
  function J(q, re) {
    if (!q || q.locked === !0) return;
    const Q = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, te = (() => {
      const fe = String(q.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(fe)) {
        const [ge, Pe] = fe.split(":").map((Ce) => Number(Ce));
        if (Number.isFinite(ge) && Number.isFinite(Pe)) return ge >= Pe;
      }
      const we = Number(q.hFOV_deg || 64), E = Number(q.vFOV_deg || 40);
      return Math.abs(we - E) > 1e-6 ? we >= E : ci(q) >= 1;
    })();
    let [X, C] = Q[String(re)] || Q["1:1"];
    X >= C !== te && ([X, C] = [C, X]);
    const se = X / C;
    if (!L(q, se)) {
      const fe = Fe(Number(q.vFOV_deg || 40), 1, 179);
      q.vFOV_deg = fe, q.hFOV_deg = Es(fe, se);
    }
    q.aspect_id = `${X}:${C}`;
  }
  function le(q, re, Q) {
    if (!q || q.locked === !0) return !1;
    const te = Ko(re, Q);
    if (!te) return !1;
    const X = te.ratio;
    if (!L(q, X)) {
      const C = Fe(Number(q.vFOV_deg || 40), 1, 179);
      q.vFOV_deg = C, q.hFOV_deg = Es(C, X);
    }
    return q.aspect_id = te.label, !0;
  }
  function k(q) {
    if (!q || q.locked === !0) return;
    const re = String(q.aspect_id || "").trim(), Q = Tr(q), te = Q.tanHalfX / Math.max(1e-12, Q.tanHalfY), X = 1 / Math.max(1e-12, te);
    if (!L(q, X)) {
      const C = Fe(Number(q.vFOV_deg || 60), 1, 179);
      q.vFOV_deg = C, q.hFOV_deg = Es(C, X);
    }
    if (/^\d+:\d+$/.test(re)) {
      const [C, se] = re.split(":");
      q.aspect_id = `${se}:${C}`;
    } else
      q.aspect_id = Qo(q);
  }
  function j(q = !0) {
    var te, X;
    if (!t) return;
    const re = R;
    if (!y()) {
      R = null, (te = d.shots) != null && te.length && (d.shots = []), re && _(re, null);
      return;
    }
    const Q = (X = d.shots) == null ? void 0 : X[0];
    q && Q && R && CS(d.camera, r.frame, Q, R), R = Ph(d.camera, r.frame), Q ? Object.assign(Q, R, { position: [...R.position] }) : d.shots = [{ ...R, position: [...R.position] }], re || _(null, R);
  }
  function _(q, re) {
    var C, se;
    !re && r.mode === "frame" && ke(q);
    const Q = (re == null ? void 0 : re.position) ?? [0, 0, 0];
    if (((se = (C = r.viewTransition) == null ? void 0 : C.end) == null ? void 0 : se.mode) === "3dof") {
      P({ ...T(), position: Q }, r.viewTransition.end);
      return;
    }
    if (r.mode !== "pano" || r.spaceMode !== "3dof" || !ye()) return;
    const te = (q == null ? void 0 : q.position) ?? [0, 0, 0];
    if (te.every((fe, we) => fe === Q[we])) return;
    const X = { ...T(), position: te };
    g({ mode: "6dof", position: te, moved: !0 }), r.viewDistance = X.distance, P({ ...X, position: Q }, { mode: "3dof", moved: !1 });
  }
  function O() {
    if (!l) return null;
    const q = Array.isArray(d.shots) ? d.shots : [];
    if (!q.length) return null;
    const re = String(d.active.selected_shot_id || "");
    return q.find((Q) => String((Q == null ? void 0 : Q.id) || "") === re) || q[0] || null;
  }
  function Y(q, re, Q = {}) {
    var C;
    if ((q == null ? void 0 : q.kind) !== "roll_frame" || !q.shot) return;
    q.accumulatedRad += Vm(re, q.lastAngle), q.lastAngle = re;
    const te = $m(q.start.roll_deg, q.accumulatedRad, {
      shiftKey: Q.shiftKey,
      altKey: q.altStarted ? !1 : Q.altKey
    });
    q.shot.roll_deg = te, q.changed = q.changed || Math.abs(q.accumulatedRad) > 1e-9;
    const X = (((C = S.sidePanel) == null ? void 0 : C.params) || []).find((se) => se.key === "roll_deg");
    X && (X.value = te, X.displayValue = Ri(te), X.fillPct = (te + 180) / 360 * 100), A(), xe(q), ue({ localOnly: !0 });
  }
  function ve(q, re, Q = {}) {
    var C;
    if ((q == null ? void 0 : q.kind) !== "roll_frame" || !q.shot || !q.rollGesture) return;
    const te = $g(q.rollGesture, re, Q);
    if (!te) return;
    q.rollGesture = te.gesture, q.center = te.gesture.center, q.lastAngle = te.gesture.lastAngle, q.accumulatedRad = te.gesture.accumulatedRad, q.shot.roll_deg = te.rollDeg, q.changed = q.changed || Math.abs(te.gesture.accumulatedRad) > 1e-9;
    const X = (((C = S.sidePanel) == null ? void 0 : C.params) || []).find((se) => se.key === "roll_deg");
    X && (X.value = te.rollDeg, X.displayValue = Ri(te.rollDeg), X.fillPct = (te.rollDeg + 180) / 360 * 100), A(), xe(q), ue({ localOnly: !0 });
  }
  function _e(q, re) {
    const Q = B(q);
    return Math.atan2(Q.y - re.y, Q.x - re.x);
  }
  function xe(q) {
    var se, fe;
    if ((q == null ? void 0 : q.kind) !== "roll_frame" || !q.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const re = V(q.shot), Q = (se = n.getBoundingClientRect) == null ? void 0 : se.call(n), te = (fe = c.getBoundingClientRect) == null ? void 0 : fe.call(c);
    if (!re || !Q || !te || n.width <= 0 || n.height <= 0) return;
    const X = Q.width / n.width, C = Q.height / n.height;
    S.tooltip.text = `${Ri(q.shot.roll_deg)}°`, S.tooltip.left = Q.left - te.left + (re.x + re.w * 0.5) * X, S.tooltip.top = Q.top - te.top + (re.y + re.h * 0.5) * C + 12, S.tooltip.variant = "roll", S.tooltip.visible = !0;
  }
  function Z(q) {
    var C;
    if (q.button !== 0 || s || r.mode !== "frame") return;
    const re = O();
    if (!re || re.locked === !0) return;
    const Q = V(re);
    if (!Q) return;
    const te = { x: Q.x + Q.w * 0.5, y: Q.y + Q.h * 0.5 }, X = _e(q, te);
    r.interaction = {
      kind: "roll_frame",
      shot: re,
      center: te,
      lastAngle: X,
      accumulatedRad: 0,
      start: { roll_deg: Number(re.roll_deg ?? re.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (C = i.setPointerCapture) == null || C.call(i, q.pointerId), q.preventDefault(), A(), xe(r.interaction), ue({ localOnly: !0 });
  }
  function be(q) {
    var re;
    ((re = r.interaction) == null ? void 0 : re.kind) !== "roll_frame" || r.interaction.source !== "knob" || Y(
      r.interaction,
      _e(q, r.interaction.center),
      q
    );
  }
  function z() {
    const q = r.interaction;
    (q == null ? void 0 : q.kind) !== "roll_frame" || q.source !== "knob" || (q.changed && (de(), K(), ae()), r.interaction = null, Se(), pe(), A(), ue());
  }
  function oe(q) {
    const re = r.mode === "frame" && !s ? O() : null;
    !re || re.locked === !0 || Math.abs(Number(re.roll_deg ?? re.rot_deg ?? 0)) <= 1e-9 || (re.roll_deg = 0, de(), K(), ae(), A(), ue(), q.preventDefault());
  }
  return {
    connect(q) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: b,
        cameraShoots: y,
        commitAndRefreshNode: K,
        currentSpaceCamera: H,
        cutoutCamera: D,
        editorViewInput: N,
        forceCursorTool: $,
        getFrameViewRect: V,
        hasCamera: W,
        hasSpaceContent: ye,
        hideTooltip: Se,
        isCameraSelected: me,
        isShotItem: ie,
        leaveFrameView: ke,
        pushHistory: de,
        requestDraw: ue,
        screenPos: B,
        setSelectedItem: he,
        spaceScale: ne,
        spaceViewState: T,
        stopTimelinePlayback: G,
        syncFrameRollKnob: A,
        syncViewToggleState: pe,
        transitionView: P,
        turnViewTo: I,
        updateCursor: w,
        updateSelectionMenu: M,
        updateSidePanel: ae,
        worldGizmoPointer: ee
      } = q);
    },
    addCutoutFrame: U,
    addStudioCamera: p,
    deleteStudioCamera: h,
    setShotAspect: x,
    clearCutoutFrame: F,
    applyCutoutAspectCustom: le,
    rotateCutoutAspect90: k,
    syncCutoutShot: j,
    getActiveCutoutShot: O,
    startCameraPress: v,
    applySharedRollInteractionPoint: ve,
    onFrameRollKnobPointerDown: Z,
    onFrameRollKnobPointerMove: be,
    finishKnobRoll: z,
    onFrameRollKnobDoubleClick: oe
  };
}
function NC(e) {
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
  let g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B = null, he = !1;
  function ne(_) {
    if (r.mode = "pano", !_) return;
    b();
    const O = me().distance;
    r.viewYaw = Et(_.yaw_deg), r.viewPitch = Fe(_.pitch_deg, -89.9, 89.9), r.viewFov = Fe(_.hFOV_deg, 35, 140), r.spaceMode === "6dof" && g({ mode: "6dof", position: [..._.position], moved: !0 }), r.viewDistance = O, d.backgroundDirty = !0;
  }
  function T() {
    var te, X, C, se, fe;
    if (!n) return null;
    const _ = (te = n.getBoundingClientRect) == null ? void 0 : te.call(n), O = Number((_ == null ? void 0 : _.width) || 0) > 0 ? n.width / _.width : 1, Y = Number((_ == null ? void 0 : _.height) || 0) > 0 ? n.height / _.height : 1;
    d.frameCanvasScale = Math.min(O, Y);
    let ve = 24, _e = 24;
    const xe = Math.max(ve + 1, n.width - 24);
    let Z = Math.max(_e + 1, n.height - 24);
    const be = (X = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : X.call(f), z = (C = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : C.call(a);
    let oe = 24;
    be && _ && be.width > 0 && be.height > 0 && (oe = Math.max(oe, (be.right - _.left) * O + gp)), z && _ && z.width > 0 && z.height > 0 && ((se = m.frameRail) == null ? void 0 : se.visible) === !0 && (oe = Math.max(oe, (_.right - z.left) * O + gp)), ve = Math.max(ve, oe);
    const q = Math.min(xe, n.width - oe);
    let re = 24;
    const Q = (fe = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : fe.call(s);
    if (Q && _ && Q.width > 0 && Q.height > 0 && (re = Math.max(re, (Q.bottom - _.top) * Y + Bl)), [l, S].forEach((we) => {
      var Pe;
      if (!we || !_) return;
      const E = getComputedStyle(we);
      if (E.display === "none" || E.visibility === "hidden" || Number(E.opacity) <= 0) return;
      const ge = (Pe = we.getBoundingClientRect) == null ? void 0 : Pe.call(we);
      !ge || ge.width <= 0 || ge.height <= 0 || (re = Math.max(re, (_.bottom - ge.top) * Y + Bl));
    }), o && _) {
      const we = getComputedStyle(o);
      we.display !== "none" && we.visibility !== "hidden" && Number(we.opacity) > 0 && (re = Math.max(re, (K2 + Bl) * Y));
    }
    return _e = Math.max(_e, re), Z = Math.max(_e + 1, Math.min(Z, n.height - re)), {
      x: ve,
      y: _e,
      w: Math.max(1, q - ve),
      h: Math.max(1, Z - _e)
    };
  }
  function G(_ = H()) {
    if (!_ || !n) return null;
    const O = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, n.width - 48),
      h: Math.max(1, n.height - 48)
    };
    return f1(O, _, Kc * oi(O, _));
  }
  function A(_ = H()) {
    const O = G(_);
    return O ? { x: O.x, y: O.y, w: O.w, h: O.h } : null;
  }
  function pe() {
    return u && !!H();
  }
  function P(_, O) {
    const Y = H();
    if (!Y || Y.locked === !0) return !1;
    const ve = Number(O) > 0, _e = Gm(Y, O);
    if (!_e) return !1;
    if (ve) {
      const xe = Kc * oi(
        d.frameSafeRect || { w: n.width, h: n.height },
        _e
      ), Z = yu({ width: n.width, height: n.height }, xe);
      if (Z.halfW < n.width * 0.5 - 1e-6 || Z.halfH < n.height * 0.5 - 1e-6) return !1;
    }
    return Y.hFOV_deg = _e.hFOV_deg, Y.vFOV_deg = _e.vFOV_deg, I(), ue(), !0;
  }
  function I() {
    r.frameWheelChanged = !0, r.frameWheelCommitTimer && window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = window.setTimeout(() => {
      r.frameWheelCommitTimer = 0, r.frameWheelChanged && (r.frameWheelChanged = !1, V(), y(), ue());
    }, 180);
  }
  function w() {
    return t && r.mode === "frame" && D();
  }
  function M() {
    const _ = H(), O = G(_);
    return _ && O ? Uh(_, O, { width: n.width, height: n.height }) : null;
  }
  function ae() {
    var _;
    return ((_ = K()) == null ? void 0 : _.radius) || Hn;
  }
  function ee(_) {
    const { position: O, yaw_deg: Y, pitch_deg: ve, roll_deg: _e, hFOV_deg: xe } = _.shot;
    return { position: O, yaw_deg: Y, pitch_deg: ve, roll_deg: _e, hFOV_deg: xe, distance: ae() };
  }
  function R(_, O) {
    const { rect: Y } = _;
    return i.pickSurface(ye(_.shot), O.x - Y.x, O.y - Y.y, Y.w, Y.h);
  }
  function v(_, O, Y) {
    return _c(O, R(_, Y), null, Se());
  }
  function U(_) {
    return JSON.stringify([ee(_), _.rect]);
  }
  function p(_) {
    const O = H();
    O.position = [..._.position], O.yaw_deg = _.yaw_deg, O.pitch_deg = _.pitch_deg;
  }
  function h(_, O) {
    const Y = H();
    !Y || c || Y.locked === !0 || (r.interaction = {
      kind: "pan_frame",
      shot: Y,
      last: _,
      start: { yaw_deg: Number(Y.yaw_deg || 0), pitch_deg: Number(Y.pitch_deg || 0) },
      changed: !1
    }, de(_), n.setPointerCapture(O));
  }
  function x(_, O, Y) {
    const ve = M();
    if (!ve || c) return;
    const _e = ee(ve);
    r.interaction = _ === "orbit" ? { kind: "frame_orbit", last: O, pivot: v(ve, _e, O), changed: !1 } : { kind: "frame_pan", last: O, depth: Fh(_e, Se()), changed: !1 }, de(O), n.setPointerCapture(Y);
  }
  function F(_, O) {
    const Y = M();
    if (!Y) return;
    const ve = ee(Y), _e = O.x - _.last.x, xe = O.y - _.last.y;
    p(_.kind === "frame_pan" ? Rh(ve, _e, xe, Y.rect.w, Y.rect.h, _.depth) : Dh(ve, _e, xe, n.height, _.pivot)), _.changed = _.changed || _e !== 0 || xe !== 0, _.last = O, W({ localOnly: !0, cause: "frame_view" });
  }
  function L(_, O) {
    const Y = M();
    if (!Y || c) return;
    const ve = ee(Y), _e = performance.now(), xe = { x: _.x, y: _.y, time: _e, key: i.contentRevision(), view: U(Y) };
    if (!Th(B, xe)) {
      const Z = R(Y, _);
      B = { ...xe, cost: performance.now() - _e, hit: Z };
    }
    p(Lh(ve, _c(ve, B.hit, null, Se()), O, Se())), B.view = U(M() ?? Y), B.wheelTime = _e, I(), ue(), W({ localOnly: !0, cause: "frame_view" });
  }
  function J(_, O) {
    const Y = H();
    if (!Y || c || Y.locked === !0) return !1;
    const ve = F0(Y, _, O);
    return ve === Y ? !1 : (ie(), Y.position = ve.position, he = !0, !0);
  }
  function le() {
    return he ? (he = !1, V(), y(), ue(), !0) : !1;
  }
  function k() {
    return r.frameWheelCommitTimer && (window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = 0), r.frameWheelChanged ? (r.frameWheelChanged = !1, V(), y(), ue(), !0) : !1;
  }
  function j() {
    const _ = r.interaction;
    if (!(_ != null && _.shot) || !_.start || _.kind !== "pan_frame" && _.kind !== "roll_frame") return !1;
    const O = _.kind === "roll_frame";
    return _.kind === "pan_frame" ? (_.shot.yaw_deg = _.start.yaw_deg, _.shot.pitch_deg = _.start.pitch_deg) : _.shot.roll_deg = _.start.roll_deg, O && N(), r.interaction = null, $(), ke(), ue(), de(r.pointerPos), W({ localOnly: !0 }), !0;
  }
  return {
    connect(_) {
      ({
        applySpaceMode: g,
        cancelViewTransition: b,
        commitAndRefreshNode: y,
        contentSphere: K,
        getActiveCutoutShot: H,
        hasSpaceContent: D,
        hideTooltip: N,
        invalidateLivePaintPreviewCaches: $,
        pushHistory: V,
        requestDraw: W,
        shotViewCamera: ye,
        spaceScale: Se,
        spaceViewState: me,
        stopTimelinePlayback: ie,
        syncViewToggleState: ke,
        updateCursor: de,
        updateSidePanel: ue
      } = _);
    },
    leaveFrameView: ne,
    measureFrameSafeRect: T,
    getFrameViewLayout: G,
    getFrameViewRect: A,
    supportsFramePainting: pe,
    zoomFrameViewAt: P,
    isFreeFrameView: w,
    frameContext: M,
    frameViewDistance: ae,
    frameSpaceView: ee,
    frameTarget: v,
    startPanFrame: h,
    startFrameDrag: x,
    dragFrame: F,
    zoomFrameAt: L,
    flushFrameWheelCommit: k,
    cancelFrameCameraGesture: j,
    moveFrameByKeys: J,
    endFrameKeyMove: le
  };
}
function AC(e) {
  const {
    editor: t,
    paintCursorEl: n,
    paintSizePreviewEl: r,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W = 0;
  function ye() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function Se() {
    return String(ye() || "") === "lasso_fill";
  }
  function me() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ie(v, U) {
    const p = Number(U || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, p / 2048)
    };
  }
  function ke(v) {
    const U = String(v || "").trim();
    return U === "eraser" ? cr : pn[U] ? U : t.activeBrushPresetId || cr;
  }
  function de() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (me() || V());
  }
  function ue() {
    var v;
    return de() && ((v = t.pointerPos) == null ? void 0 : v.inside) === !0;
  }
  function B(v, U = !0) {
    const p = Number((v == null ? void 0 : v.x) || 0), h = Number((v == null ? void 0 : v.y) || 0), x = U !== !1, F = t.pointerPos || { x: 0, y: 0, inside: !1 }, L = F.inside !== x || Math.abs(F.x - p) > 0.01 || Math.abs(F.y - h) > 0.01;
    return t.pointerPos = { x: p, y: h, inside: x }, L;
  }
  function he() {
    var j, _;
    if (!ue()) return null;
    const v = t.primaryTool === "mask" ? "mask" : "paint", U = v === "mask" ? t.maskTool : t.paintTool, p = ke(U), h = pn[p] || pn[cr], x = Number(t.brushSizes[p] ?? 10), F = Math.max(1, x) * Math.max(0.1, Number(h.sizeScale ?? 1)), L = Math.max(3, F * 0.5), J = v === "mask" ? U === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : U === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : vn(t.paintColor), le = v === "mask" ? U === "lasso_fill" ? 0.18 : 0.2 : U === "eraser" ? 0.06 : Fe(Math.max(0.16, Number(J.a ?? 1) * 0.3), 0.16, 0.52), k = v === "mask" ? 0.95 : U === "eraser" ? 0.75 : Fe(Math.max(0.46, Number(J.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: v,
      toolKind: U,
      preset: h,
      radius: L,
      fillStyle: Xn(J, le),
      strokeStyle: Xn(J, k),
      x: Number(((j = t.pointerPos) == null ? void 0 : j.x) || 0),
      y: Number(((_ = t.pointerPos) == null ? void 0 : _.y) || 0),
      hotspotX: L,
      hotspotY: L
    };
  }
  function ne() {
    var O, Y, ve;
    const v = he();
    if (!n) return;
    if (!v) {
      n.style.display = "none";
      return;
    }
    let U = v.radius * 2, p = v.radius * 2, h = "999px", x = 0, F = v.fillStyle, L = "1px solid rgba(222, 222, 222, 0.72)", J = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const le = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let j = Number(v.hotspotX ?? U * 0.5), _ = Number(v.hotspotY ?? p * 0.5);
    if (v.toolKind === "lasso_fill")
      U = Na, p = Na, h = "0", L = "0", J = "none", j = B2, _ = Y2, F = eA(v.fillStyle, k, le);
    else if (v.layerKind === "mask")
      F = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (v.toolKind === "marker") {
      const _e = Math.max(1, Number(((O = v.preset) == null ? void 0 : O.aspect) ?? 1));
      U = Math.max(10, v.radius * 2 * _e), p = Math.max(6, v.radius * 2), h = `${Math.min(6, p * 0.42)}px`, x = Number(((ve = (Y = v.preset) == null ? void 0 : Y.angle) == null ? void 0 : ve.value) || 0) * si;
    } else v.toolKind === "brush" ? F = `radial-gradient(circle at 50% 50%, ${v.strokeStyle} 0%, ${v.fillStyle} 45%, rgba(0,0,0,0) 100%)` : v.toolKind === "eraser" && (F = "rgba(255,255,255,0.14)");
    n.style.display = "block", n.style.width = `${Math.round(U)}px`, n.style.height = `${Math.round(p)}px`, n.style.borderRadius = h, n.style.border = L, n.style.boxShadow = J, n.style.background = F, n.style.backgroundRepeat = "no-repeat", n.style.backgroundPosition = "center", n.style.backgroundSize = "contain", n.style.transform = `translate(${Math.round(v.x - j)}px, ${Math.round(v.y - _)}px) rotate(${x}deg)`;
  }
  function T() {
    var be;
    if (!r || !i) return;
    const v = t.primaryTool === "mask" ? "mask" : "paint", U = v === "mask" ? t.maskTool : t.paintTool;
    if (U === "lasso_fill") return;
    const p = ke(U), h = pn[p] || pn[cr], x = Number(t.brushSizes[p] ?? 10), F = Math.max(1, x) * Math.max(0.1, Number(h.sizeScale ?? 1)), L = Math.max(6, F * 0.5), J = U === "eraser", le = v === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : J ? { r: 1, g: 1, b: 1, a: 0.22 } : vn(t.paintColor), k = v === "mask" ? Xn(le, 0.22) : J ? "rgba(255,255,255,0.14)" : Xn(le, Fe(Math.max(0.18, Number(le.a ?? 1) * 0.34), 0.18, 0.56)), j = v === "mask" ? Xn(le, 0.96) : J ? "rgba(255,255,255,0.72)" : Xn(le, Fe(Math.max(0.56, Number(le.a ?? 1) * 0.96), 0.56, 1));
    let _ = L * 2, O = L * 2, Y = "999px", ve = 0, _e = k;
    const xe = "rgba(222, 222, 222, 0.72)", Z = "rgba(52, 52, 52, 0.72)";
    if (v === "mask")
      _e = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (U === "marker") {
      const z = Math.max(1, Number((h == null ? void 0 : h.aspect) ?? 1));
      _ = Math.max(16, L * 2 * z), O = Math.max(10, L * 2), Y = `${Math.min(8, O * 0.42)}px`, ve = Number(((be = h == null ? void 0 : h.angle) == null ? void 0 : be.value) || 0) * si;
    } else U === "brush" ? _e = `radial-gradient(circle at 50% 50%, ${j} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : U === "lasso_fill" ? (_ = Math.max(18, L * 1.8), O = _, _e = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${j} 43%, ${j} 58%, rgba(0,0,0,0) 59%)`) : J && (_e = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(_)}px`, i.style.height = `${Math.round(O)}px`, i.style.borderRadius = Y, i.style.background = _e, i.style.border = `1px solid ${xe}`, i.style.boxShadow = `0 0 0 1px ${Z}`, i.style.transform = `rotate(${ve}deg)`, W && (clearTimeout(W), W = 0), r.classList.remove("fade-out"), r.classList.add("show");
  }
  function G() {
    !r || !r.classList.contains("show") || (r.classList.add("fade-out"), W && clearTimeout(W), W = window.setTimeout(() => {
      r.classList.remove("show", "fade-out"), W = 0;
    }, 180));
  }
  function A(v, U, p, h) {
    const x = ke(U), F = pn[x] || pn[cr], L = t.brushSizes[x] ?? 10, J = Math.max(1, L) * Math.max(0.1, F.sizeScale ?? 1), le = ie(h, J), k = p.map((_) => ({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: Number.isFinite(Number(_ == null ? void 0 : _.widthScale)) ? Math.max(0, Number(_.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(_ == null ? void 0 : _.pressureLike)) ? Math.max(0, Number(_.pressureLike)) : 1
    })), j = {
      id: Ni(v),
      actionGroupId: Ni("ag"),
      targetSpace: h && typeof h == "object" ? { ...h, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: U,
      size: J,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: le.radiusModel,
      radiusValue: le.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((_) => ({ ..._ })),
        points: k.map((_) => ({ ..._ }))
      }
    };
    return hp(j, F), t.mode, Number(F.aspect ?? 1), Number(j.aspect ?? 1), String(j.stampKind || ""), Number(j.size || 0), String(j.radiusModel || ""), Number(j.radiusValue || 0), { ...j.targetSpace }, j;
  }
  function pe(v, U, p, h) {
    const x = p.map((le) => ({
      ...le,
      t: Number((le == null ? void 0 : le.t) || 0),
      widthScale: Number.isFinite(Number(le == null ? void 0 : le.widthScale)) ? Math.max(0, Number(le.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(le == null ? void 0 : le.pressureLike)) ? Math.max(0, Number(le.pressureLike)) : 1
    })), F = ke(U), L = pn[F] || pn[cr], J = {
      id: Ni(v),
      actionGroupId: Ni("ag"),
      targetSpace: h && typeof h == "object" ? { ...h, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: U,
      size: 10,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: x.map((le) => ({ ...le }))
      }
    };
    return hp(J, L), t.mode, Number(L.aspect ?? 1), Number(J.aspect ?? 1), String(J.stampKind || ""), { ...J.targetSpace }, J;
  }
  function P(v) {
    const U = o.painting || (o.painting = li(null)), p = U[v] || (U[v] = { strokes: [] });
    return Array.isArray(p.strokes) || (p.strokes = []), p.strokes;
  }
  function I(v, U, p = performance.now()) {
    let h;
    if (t.mode === "frame") {
      const k = f();
      if (!k || (h = $(U, k, p), !h)) return !1;
    } else
      h = N(U, p);
    if (!h) return !1;
    const x = v.stroke.geometry.rawPoints || v.stroke.geometry.points, F = v.stroke.geometry.points, L = x[x.length - 1];
    if (L) {
      const k = Math.abs(Number(h.u ?? h.x ?? 0) - Number(L.u ?? L.x ?? 0)), j = Math.abs(Number(h.v ?? h.y ?? 0) - Number(L.v ?? L.y ?? 0));
      if (k < 15e-4 && j < 15e-4) return !1;
    }
    const J = {
      ...h,
      t: Number((h == null ? void 0 : h.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    x.push({ ...J }), F.push({ ...J });
    const le = m(v);
    if (le) {
      const k = t.paintEngine.ensureTarget(le);
      t.paintEngine.appendStrokePoint(k, Number(J.u ?? 0), Number(J.v ?? 0), v.stroke);
    }
    return !0;
  }
  function w(v, U, p = performance.now()) {
    var L, J;
    let h;
    if (t.mode === "frame") {
      const le = f();
      if (!le) return !1;
      h = $(U, le, p);
    } else
      h = N(U, p);
    const x = (J = (L = v == null ? void 0 : v.stroke) == null ? void 0 : L.geometry) == null ? void 0 : J.points;
    if (!h || !Array.isArray(x)) return !1;
    const F = x[x.length - 1];
    if (F) {
      const le = Math.abs(Number(h.u ?? h.x ?? 0) - Number(F.u ?? F.x ?? 0)), k = Math.abs(Number(h.v ?? h.y ?? 0) - Number(F.v ?? F.y ?? 0));
      if (le < 15e-4 && k < 15e-4) return !1;
    }
    return x.push({
      ...h,
      t: Number((h == null ? void 0 : h.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function M(v) {
    var z, oe, q, re, Q;
    const U = (v == null ? void 0 : v.stroke) || null;
    if (!U || (v == null ? void 0 : v.layerKind) !== "paint" || String((U == null ? void 0 : U.toolKind) || "") !== "eraser") return !1;
    D();
    const p = m(), h = c(p.width, p.height);
    if (!H(h, U, { w: p.width, h: p.height })) return !1;
    const x = ((oe = (z = h.ctx) == null ? void 0 : z.getImageData(0, 0, p.width, p.height)) == null ? void 0 : oe.data) || null;
    if (!x) return !1;
    const F = new Map(g().map((te) => [String((te == null ? void 0 : te.actionGroupId) || (te == null ? void 0 : te.id) || "").trim(), te ? { ...te } : null])), L = [], J = [], le = [...b().filter((te) => String((te == null ? void 0 : te.layerKind) || "paint") !== "paint")];
    let k = !1, j = S().reduce((te, X) => Math.max(te, Number((X == null ? void 0 : X.z_index) || 0)), -1) + 1;
    function _(te, X, C, se = 8) {
      let fe = X, we = C, E = -1, ge = -1;
      for (let Pe = 0; Pe < C; Pe += 1)
        for (let Ce = 0; Ce < X; Ce += 1)
          te[(Pe * X + Ce) * 4 + 3] <= se || (Ce < fe && (fe = Ce), Pe < we && (we = Pe), Ce > E && (E = Ce), Pe > ge && (ge = Pe));
      return E < fe || ge < we ? null : { minX: fe, minY: we, maxX: E, maxY: ge };
    }
    const O = _(x, p.width, p.height, 8);
    if (!O) return !1;
    function Y(te, X) {
      return !te || !X ? !1 : !(te.maxX < X.minX || X.maxX < te.minX || te.maxY < X.minY || X.maxY < te.minY);
    }
    function ve(te, X) {
      const C = d((te == null ? void 0 : te.actionGroupId) || (te == null ? void 0 : te.id) || "", "paint", X);
      if (!C) return null;
      const se = C.centerUv.u - C.halfW, fe = C.centerUv.u + C.halfW, we = C.centerUv.v - C.halfH, E = C.centerUv.v + C.halfH, ge = p.width, Pe = p.height;
      return {
        minX: Math.floor((se % 1 + 1) % 1 * ge),
        maxX: Math.ceil((fe % 1 + 1) % 1 * ge),
        minY: Math.floor(Fe(we, 0, 1) * Pe),
        maxY: Math.ceil(Fe(E, 0, 1) * Pe),
        wraps: fe - se >= 1 || se < 0 || fe > 1
      };
    }
    function _e(te) {
      const X = (te == null ? void 0 : te.bbox) || null;
      if (!X) return null;
      const C = (te == null ? void 0 : te.transform) || {}, se = p.width, fe = p.height, we = Number(X.u0 || 0) + Number(C.du || 0), E = Number(X.u1 || 0) + Number(C.du || 0), ge = Number(X.v0 || 0) + Number(C.dv || 0), Pe = Number(X.v1 || 0) + Number(C.dv || 0);
      return {
        minX: Math.floor((we % 1 + 1) % 1 * se),
        maxX: Math.ceil((E % 1 + 1) % 1 * se),
        minY: Math.floor(Fe(ge, 0, 1) * fe),
        maxY: Math.ceil(Fe(Pe, 0, 1) * fe),
        wraps: E - we >= 1 || we < 0 || E > 1
      };
    }
    function xe(te) {
      return te ? te.wraps ? Y(O, { minX: 0, maxX: te.maxX, minY: te.minY, maxY: te.maxY }) || Y(O, { minX: te.minX, maxX: p.width - 1, minY: te.minY, maxY: te.maxY }) : Y(O, te) : !0;
    }
    function Z(te) {
      if (!te) return { touched: !1, canvas: null };
      const X = c(p.width, p.height, { readback: !0 });
      X.ctx.drawImage(te, 0, 0);
      const C = X.ctx.getImageData(0, 0, p.width, p.height);
      X.ctx.save(), X.ctx.globalCompositeOperation = "destination-out", X.ctx.drawImage(h.canvas, 0, 0), X.ctx.restore();
      const se = X.ctx.getImageData(0, 0, p.width, p.height);
      for (let fe = 0; fe < p.width * p.height; fe += 1) {
        if (x[fe * 4 + 3] <= 8) continue;
        const E = C.data[fe * 4 + 3], ge = se.data[fe * 4 + 3];
        if (E > ge)
          return { touched: !0, canvas: X.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function be(te, X, C) {
      const se = Number(C == null ? void 0 : C.z_index), fe = l(te, X, C).map((we, E) => ({
        ...we,
        z_index: Number.isFinite(se) ? se + E * 1e-3 : j + E * 1e-3
      }));
      return fe.length && (j = Math.max(j, ...fe.map((we) => Number((we == null ? void 0 : we.z_index) || 0))) + 1), fe;
    }
    for (const te of g()) {
      const X = String((te == null ? void 0 : te.actionGroupId) || (te == null ? void 0 : te.id) || "").trim();
      if (!X) continue;
      const C = y(X, "paint");
      if (!xe(ve(te, C))) {
        J.push(te), L.push(...C);
        continue;
      }
      const se = ((re = (q = t.paintEngine) == null ? void 0 : q.getGroupTarget) == null ? void 0 : re.call(q, X)) || null, fe = ((Q = se == null ? void 0 : se.committedPaint) == null ? void 0 : Q.canvas) || null;
      if (!fe) {
        J.push(te), L.push(...C);
        continue;
      }
      const we = Z(fe);
      if (!we.touched || !we.canvas) {
        J.push(te), L.push(...C);
        continue;
      }
      k = !0;
      const E = be(we.canvas, "paint", F.get(X) || te || {});
      le.push(...E);
    }
    for (const te of b().filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") === "paint")) {
      if (!xe(_e(te))) {
        le.push(te);
        continue;
      }
      const X = s(te, null);
      if (!X) {
        le.push(te);
        continue;
      }
      const C = Z(X);
      if (!C.touched || !C.canvas) {
        le.push(te);
        continue;
      }
      k = !0;
      const se = be(C.canvas, "paint", te);
      le.push(...se);
    }
    return k ? (o.painting.paint.strokes = L, o.painting.groups = J.sort((te, X) => Number((te == null ? void 0 : te.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0)), o.painting.raster_objects = le.sort((te, X) => Number((te == null ? void 0 : te.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ae(v) {
    var L, J, le, k, j;
    if ((((J = (L = v.stroke) == null ? void 0 : L.geometry) == null ? void 0 : J.rawPoints) || ((k = (le = v.stroke) == null ? void 0 : le.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      R(v);
      const _ = m(v);
      _ && (String(((j = v.stroke) == null ? void 0 : j.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(_) : t.paintEngine.commitActiveStroke(v.stroke, _)), v._hasCommittedSegments = !0;
    }
    const p = v.stroke, h = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, x = A(v.layerKind, p.toolKind, [], h);
    x.actionGroupId = p.actionGroupId, v.stroke = x;
    const F = m(v);
    F && t.paintEngine.beginStroke(x, F);
  }
  function ee(v) {
    var L, J;
    if ((((J = (L = v.stroke) == null ? void 0 : L.geometry) == null ? void 0 : J.points) || []).length >= 3) {
      R(v);
      const le = m(v);
      le && t.paintEngine.commitActiveStroke(v.stroke, le), v._hasCommittedSegments = !0;
    }
    const p = v.stroke, h = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, x = pe(v.layerKind, p.toolKind, [], h);
    x.actionGroupId = p.actionGroupId, v.stroke = x;
    const F = m(v);
    F && t.paintEngine.beginStroke(x, F);
  }
  function R(v) {
    var F, L, J, le;
    const U = ((F = v == null ? void 0 : v.stroke) == null ? void 0 : F.geometry) || null;
    if (!U) return !1;
    const p = String(((L = v == null ? void 0 : v.stroke) == null ? void 0 : L.toolKind) || "pen");
    if (v.layerKind === "paint" && p === "eraser")
      return U.geometryKind !== "lasso_fill" && (U.processedPoints = K(U.rawPoints || U.points || [], v.stroke.targetSpace, !0)), M(v);
    const h = v.layerKind === "paint" && p !== "eraser";
    if (U.geometryKind === "lasso_fill")
      return (Array.isArray(U.points) ? U.points : []).length < 3 ? !1 : (h && u((J = v.stroke) == null ? void 0 : J.actionGroupId), P(v.layerKind).push(v.stroke), !0);
    const x = U.rawPoints || U.points || [];
    return x.length < 1 ? !1 : (U.processedPoints = K(x, v.stroke.targetSpace, !0), h && u((le = v.stroke) == null ? void 0 : le.actionGroupId), P(v.layerKind).push(v.stroke), !0);
  }
  return {
    connect(v) {
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
        getRasterObjectList: b,
        getStrokeGroupStrokes: y,
        processFreehandPoints: K,
        rasterizeStrokeToSurface: H,
        rebuildPaintEngineIfNeeded: D,
        screenPosToErpPoint: N,
        screenPosToFrameAsErpPoint: $,
        supportsFramePainting: V
      } = v);
    },
    isActiveLassoTool: Se,
    supportsErpPainting: me,
    getBrushPresetIdForTool: ke,
    isPaintCursorEnabled: de,
    isActivePaintCursorVisible: ue,
    setPointerPos: B,
    syncPaintCursorElement: ne,
    showPaintSizePreview: T,
    hidePaintSizePreview: G,
    buildFreehandStrokeRecord: A,
    buildLassoFillStrokeRecord: pe,
    getPaintingLayerList: P,
    appendPaintPoint: I,
    appendLassoPoint: w,
    _segmentFrameStroke: ae,
    _segmentFrameLassoFill: ee,
    commitPaintInteraction: R
  };
}
function CC(e) {
  const {
    editor: t,
    readOnly: n,
    shotEditor: r,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie;
  function ke() {
    return me().reverse();
  }
  function de(G) {
    var pe;
    if (r && t.mode === "frame") {
      const P = s(), I = l(P);
      if (!P || !I || !(Number((G == null ? void 0 : G.x) || 0) >= Number(I.x || 0) && Number((G == null ? void 0 : G.x) || 0) <= Number(I.x || 0) + Number(I.w || 0) && Number((G == null ? void 0 : G.y) || 0) >= Number(I.y || 0) && Number((G == null ? void 0 : G.y) || 0) <= Number(I.y || 0) + Number(I.h || 0))) return null;
      const M = W(G, P, performance.now()), ae = M ? o(M) : null;
      if (ae)
        for (const R of a()) {
          if (!H(R)) continue;
          const v = ie(R, ae);
          if (v && Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1) {
            const U = V(R);
            if (U != null && U.visible) return { item: R, geom: U };
          }
        }
      const ee = c(!1).slice().sort((R, v) => Number((v == null ? void 0 : v.z_index) || 0) - Number((R == null ? void 0 : R.z_index) || 0));
      for (const R of ee) {
        if (R.type === "strokeGroup") {
          const p = f($("paint", R.actionGroupId || R.id || ""));
          if (!p) continue;
          const h = V(p);
          if (!(h != null && h.visible)) continue;
          const x = Array.isArray(h.strokePaths) ? h.strokePaths : [];
          for (const F of x) {
            const L = Array.isArray(F == null ? void 0 : F.points) ? F.points : [];
            if (!L.length) continue;
            if (F.closed && L.length >= 3 && xr(G, L)) return { item: p, geom: h };
            const J = Math.max(8, Number((F == null ? void 0 : F.lineWidth) || 0) * 0.5 + 6);
            for (let le = 0; le < L.length - 1; le += 1)
              if (Xl(G, L[le], L[le + 1]) <= J * J) return { item: p, geom: h };
            if (L.length === 1 && uo(G, L[0]) <= J * J) return { item: p, geom: h };
          }
          continue;
        }
        if (R.type === "rasterObject") {
          const p = d(N(((pe = R.item) == null ? void 0 : pe.id) || R.id || ""));
          if (!p) continue;
          const h = V(p);
          if (m(p, h, G, M)) return { item: p, geom: h };
          continue;
        }
        const v = R.item;
        if (!v || !H(v) || !ae) continue;
        const U = ie(v, ae);
        if (U && Number(U.x) >= 0 && Number(U.x) <= 1 && Number(U.y) >= 0 && Number(U.y) <= 1) {
          const p = V(v);
          if (p != null && p.visible) return { item: v, geom: p };
        }
      }
      if (!ae) return null;
      for (const R of ke()) {
        const v = ie(R, ae);
        if (!v || !(Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1)) continue;
        const U = V(R);
        if (U != null && U.visible) return { item: R, geom: U };
      }
      return null;
    }
    const A = [
      ...c(!1).slice().sort((P, I) => Number((I == null ? void 0 : I.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)).map((P) => {
        var I;
        return P.type === "strokeGroup" ? f($("paint", P.actionGroupId || P.id || "")) : P.type === "rasterObject" ? d(N(((I = P.item) == null ? void 0 : I.id) || P.id || "")) : P.item;
      }).filter(Boolean),
      ...ke(),
      ...r ? a().filter((P) => K(P)) : []
    ];
    for (const P of A) {
      if (D(P)) {
        const w = V(P);
        if (!(w != null && w.visible)) continue;
        const M = Array.isArray(w.strokePaths) ? w.strokePaths : [];
        for (const ae of M) {
          const ee = Array.isArray(ae == null ? void 0 : ae.points) ? ae.points : [];
          if (!ee.length) continue;
          if (ae.closed && ee.length >= 3 && xr(G, ee)) return { item: P, geom: w };
          const R = Math.max(8, Number((ae == null ? void 0 : ae.lineWidth) || 0) * 0.5 + 6);
          for (let v = 0; v < ee.length - 1; v += 1)
            if (Xl(G, ee[v], ee[v + 1]) <= R * R) return { item: P, geom: w };
          if (ee.length === 1 && uo(G, ee[0]) <= R * R) return { item: P, geom: w };
        }
        continue;
      }
      if (y(P)) {
        const w = V(P);
        if (!(w != null && w.visible)) continue;
        if (m(P, w, G)) return { item: P, geom: w };
        continue;
      }
      const I = V(P);
      if (I.visible && xr(G, I.corners))
        return { item: P, geom: I };
    }
    return null;
  }
  function ue(G, A, pe = null) {
    if (!G || !G.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (H(pe)) return Oc(G, A);
    if (G.kind === "strokeGroup") {
      const P = G.corners.findIndex((w) => uo(w, A) <= 121);
      if (P >= 0) {
        const w = G.corners[P], M = w.x - G.center.x, ae = w.y - G.center.y, ee = M * ae >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: P, cursor: ee };
      }
      const I = Array.isArray(G.strokePaths) ? G.strokePaths : [];
      for (const w of I) {
        const M = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
        if (w.closed && M.length >= 3 && xr(A, M)) return { kind: "move", cursor: "default" };
        const ae = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
        for (let ee = 0; ee < M.length - 1; ee += 1)
          if (Xl(A, M[ee], M[ee + 1]) <= ae * ae) return { kind: "move", cursor: "default" };
      }
      return xr(A, G.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (G.kind === "rasterObject") {
      const P = G.corners.findIndex((I) => uo(I, A) <= 121);
      if (P >= 0) {
        const I = G.corners[P], w = I.x - G.center.x, M = I.y - G.center.y, ae = w * M >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: P, cursor: ae };
      }
      return xr(A, G.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return Dk(G, A, {
      edges: i === "cutout" || K(pe),
      resize: !(K(pe) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function B(G, A) {
    return {
      x0: Math.min(Number((G == null ? void 0 : G.x) || 0), Number((A == null ? void 0 : A.x) || 0)),
      y0: Math.min(Number((G == null ? void 0 : G.y) || 0), Number((A == null ? void 0 : A.y) || 0)),
      x1: Math.max(Number((G == null ? void 0 : G.x) || 0), Number((A == null ? void 0 : A.x) || 0)),
      y1: Math.max(Number((G == null ? void 0 : G.y) || 0), Number((A == null ? void 0 : A.y) || 0))
    };
  }
  function he(G, A) {
    return !!G && !!A && Number(A.x) >= Number(G.x0) && Number(A.x) <= Number(G.x1) && Number(A.y) >= Number(G.y0) && Number(A.y) <= Number(G.y1);
  }
  function ne(G, A) {
    if (!G || !(A != null && A.visible) || !Array.isArray(A.corners)) return !1;
    if (A.corners.some((I) => he(G, I))) return !0;
    const pe = (Number(G.x0) + Number(G.x1)) * 0.5, P = (Number(G.y0) + Number(G.y1)) * 0.5;
    return !!xr({ x: pe, y: P }, A.corners);
  }
  function T(G) {
    if (Se(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ye("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ye("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ye("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ye("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ye("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ye(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ye("grabbing") : ye("default");
      return;
    }
    if (S()) {
      ye("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !n) {
        ye(G2);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ye("default");
        return;
      }
      ye("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ye("default");
      return;
    }
    if (t.gizmoAxis) {
      ye("grab");
      return;
    }
    const A = u(), pe = A ? V(A) : null, P = A ? b(A) : !1, I = P ? { kind: "none", cursor: "default" } : ue(pe, G, A);
    if (!P && I.kind !== "none") {
      ye(I.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && de(G)) {
      ye("default");
      return;
    }
    ye(t.mode === "pano" ? "grab" : "default");
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
        hitRasterObjectAt: m,
        isActivePaintCursorVisible: S,
        isErpCamera: g,
        isItemLocked: b,
        isRasterObjectItem: y,
        isShotItem: K,
        isStickerItem: H,
        isStrokeGroupItem: D,
        makeRasterObjectSelectionId: N,
        makeStrokeGroupSelectionId: $,
        objectGeom: V,
        screenPosToFrameAsErpPoint: W,
        setCanvasCursor: ye,
        syncPaintCursorElement: Se,
        upstreamSkyStickers: me,
        worldDirToFrameLocalPoint: ie
      } = G);
    },
    hitObjectAt: de,
    handleHit: ue,
    rectFromPoints: B,
    rectIntersectsGeom: ne,
    updateCursor: T
  };
}
function IC(e) {
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
  let f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke = !1;
  function de() {
    return ke;
  }
  function ue() {
    if (!o) return;
    if (ke = !1, r.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (r.worldSelectedId || D() && V()) {
      const w = he();
      ke = w.visible, ne(w);
      return;
    }
    const A = y(), pe = K();
    if (!A && pe.length === 0 || r.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const P = H(), I = jA({
      type: d,
      selected: A,
      selectedItems: pe,
      selectedKind: P,
      geom: pe.length > 1 ? b(pe) : ie(A),
      allLocked: f(pe),
      anyLocked: pe.some((w) => W(w)),
      selectedLocked: W(A),
      activeAspect: ye(A) && N() ? Gi : fr(A),
      cutoutAspectOpen: r.cutoutAspectOpen,
      isExternalSticker: $,
      isStickerHidden: me,
      canRestoreSelectedToInitial: m,
      iconSet: He,
      cameraShot: t,
      coverage: a.coverage,
      upstream: B(pe)
    });
    ne(I);
  }
  function B(A) {
    const pe = A.filter(It);
    return pe.length ? { editable: pe.every(va) } : null;
  }
  function he() {
    const A = Se() && !r.interaction ? g().space : null;
    if (!(A != null && A.gizmo)) return { visible: !1 };
    const pe = S(), P = [...A.stickers, ...A.upstreamStickers].find((ae) => ae.id === r.worldSelectedId), w = (P ? ju(P) : [A.gizmo.transform.position]).map((ae) => zo(pe, ae, n.width, n.height)).filter(Boolean), M = T_(pe, A.gizmo.transform.position, A.gizmo.mode, n.width, n.height);
    return HA({ corners: w, gizmoBox: M, gizmoMode: A.gizmo.mode, camera: D() });
  }
  function ne(A) {
    var M, ae;
    if (!A.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const pe = (ee, R) => GA(A.anchor, ee, R, n.width, n.height), P = Math.max(1, Number(((M = r.menuSize) == null ? void 0 : M.w) || 220)), I = Math.max(1, Number(((ae = r.menuSize) == null ? void 0 : ae.h) || 40)), w = pe(P, I);
    if (!w) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: w.left,
      top: w.top,
      items: A.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const ee = o.getBoundingClientRect(), R = Math.round(Number((ee == null ? void 0 : ee.width) || 0)) || 220, v = Math.round(Number((ee == null ? void 0 : ee.height) || 0)) || 40;
      r.menuSize = { w: R, h: v, measured: !0 };
      const U = pe(R, v);
      U && (u.selectionMenu.left = U.left, u.selectionMenu.top = U.top);
    });
  }
  function T() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function G(A) {
    if (!c || !A || !A.isConnected) return;
    const pe = String(A.getAttribute("data-tip") || "").trim();
    if (!pe) return;
    u.tooltip.text = pe, u.tooltip.visible = !0;
    const P = A;
    i.requestFrame(() => {
      var L, J;
      if (l.target !== P || !c || !(P != null && P.isConnected)) return;
      const I = s.getBoundingClientRect(), w = P.getBoundingClientRect(), M = 8, ae = 12, ee = Math.round(Number(((L = c.getBoundingClientRect()) == null ? void 0 : L.width) || 0)) || 100, R = Math.round(Number(((J = c.getBoundingClientRect()) == null ? void 0 : J.height) || 0)) || 24, v = !!P.closest(".pano-floating-left"), U = !!P.closest(".pano-frame-rail"), p = !!P.closest(".pano-paint-footer") || !!P.closest(".pano-paint-color-float");
      let h = "", x = w.left - I.left + w.width * 0.5 - ee * 0.5, F = w.top - I.top - R - ae;
      if (P.closest(".pano-floating-top") && (F = w.bottom - I.top + ae), v)
        h = "tool-rail", x = w.right - I.left + 10, F = w.top - I.top + w.height * 0.5 - R * 0.5, x = Fe(x, M, Math.max(M, I.width - ee - M)), F = Fe(F, M, Math.max(M, I.height - R - M));
      else if (U)
        h = "frame-rail", x = w.left - I.left - ee - 10, F = w.top - I.top + w.height * 0.5 - R * 0.5, x = Fe(x, M, Math.max(M, I.width - ee - M)), F = Fe(F, M, Math.max(M, I.height - R - M));
      else if (p) {
        h = "footer";
        const le = P.closest(".pano-paint-footer"), k = le ? le.getBoundingClientRect() : w;
        x = k.left - I.left + k.width * 0.5 - ee * 0.5, F = k.bottom - I.top + 5, x = Fe(x, M, Math.max(M, I.width - ee - M)), F = Math.max(M, F);
      }
      x = Fe(x, M, Math.max(M, I.width - ee - M)), F = Math.max(M, F), u.tooltip.left = x, u.tooltip.top = F, u.tooltip.variant = h, u.tooltip.visible = !0;
    });
  }
  return {
    connect(A) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: m,
        currentSpaceCamera: S,
        editorViewInput: g,
        getMultiSelectionGeom: b,
        getSelected: y,
        getSelectedItems: K,
        getSelectedKind: H,
        isCameraSelected: D,
        isErpCamera: N,
        isExternalSticker: $,
        isFreeSpaceView: V,
        isItemLocked: W,
        isShotItem: ye,
        isSpaceView: Se,
        isStickerHidden: me,
        objectGeom: ie
      } = A);
    },
    isWorldMenuShown: de,
    updateSelectionMenu: ue,
    hideTooltip: T,
    showTooltipFor: G
  };
}
function EC(e) {
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
  let d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee, R, v, U, p, h, x, F, L, J, le, k, j, _, O, Y, ve, _e, xe, Z, be, z, oe, q, re, Q, te, X, C, se, fe, we, E, ge, Pe, Ce, Te, Le, ze, Ae, $e, ce, Ne, Ie, Ee, je, Ge, Be, ct, at, St, st, Mt = null;
  function Ye(Re) {
    l.selection && (l.selection = null, Ie());
    const Ke = Z(Re);
    Mt = Ke, z(Ke, !0), m(), c.state.inertia.active = !1, c.state.inertia.vx = 0, c.state.inertia.vy = 0;
    const We = pe(), Pt = A(), ht = We || Pt ? Wk(ct(), Re) : null;
    if (Pt && ht) {
      Re.preventDefault(), ht === "look" ? Pe(Ke, Re.pointerId) : te(ht, Ke, Re.pointerId);
      return;
    }
    if (ht === "look") {
      Re.preventDefault(), se(Re, Ke, be(Re));
      return;
    }
    if (ht) {
      Re.preventDefault(), Le(ht, Ke, Re.pointerId);
      return;
    }
    if ((We || Pt) && Re.button !== 0) {
      Re.preventDefault();
      return;
    }
    if (Re.button === 1) {
      Re.preventDefault(), n.mode === "frame" ? fe(Re, Ke) : se(Re, Ke, n.mode === "unwrap" ? Ke : be(Re));
      return;
    }
    if (Re.button !== 0) return;
    if (n.mode === "frame" && (Re.altKey || Re.shiftKey) && !i) {
      X(Re, Ke);
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      Pe(Ke, Re.pointerId), Re.preventDefault();
      return;
    }
    if (i) {
      n.mode === "pano" && Q(Re, Ke);
      return;
    }
    if (r && !r.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ce() || Ne())) {
      if (!J()) return;
      $e(), ge(Re, Ke);
      return;
    }
    const bn = ue(), Ht = de(), Ot = bn.length > 1 ? ke(bn) : Ht ? L(Ht) : null;
    if (n.primaryTool === "cursor" && (Re.ctrlKey || Re.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ke, current: Ke }, je(Ke), t.setPointerCapture(Re.pointerId), _({ localOnly: !0, reason: it.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && d() && pe() && re(Re, Ke) || n.primaryTool === "cursor" && o && I() && ze(Re, Ke)) return;
    if (bn.length > 1 && (Ot != null && Ot.visible)) {
      if ((bn.some((os) => P(os)) ? { kind: "none" } : B(Ot, Ke)).kind === "move") {
        E(Re, Ke, bn, Ot);
        return;
      }
    } else if (Ht && (Ot != null && Ot.visible)) {
      const cn = P(Ht) ? { kind: "none" } : B(Ot, Ke, Ht);
      if (cn.kind === "scale") {
        Te(Re, Ke, Ht, Ot, cn);
        return;
      }
      if (cn.kind === "scale_x" || cn.kind === "scale_y") {
        q(Re, Ke, Ht, Ot, cn);
        return;
      }
      if (cn.kind === "rotate") {
        Ce(Re, Ke, Ht, Ot);
        return;
      }
      if (cn.kind === "move") {
        we(Re, Ke, Ht, Ot);
        return;
      }
    }
    const Fn = ne(Ke);
    if (Fn) {
      const cn = n.selectedId !== Fn.item.id;
      if (cn && n.selectedId && (j(), g()), oe(Fn.item), s && cn && (n.cutoutAspectOpen = !1), cn && Be(), Ge(), _(), P(Fn.item)) {
        je(Ke);
        return;
      }
      C(Re, Ke, Fn);
      return;
    }
    const is = !!n.selectedId;
    is && (j(), g()), S(), is && Be(), Ge(), _(), n.mode === "pano" && Q(Re, Ke);
  }
  function Zt(Re, Ke) {
    if (!a || !le.playing || (le.stop(), Re.kind === "frame_pan")) return;
    if (Re.kind === "frame_orbit") {
      const ht = Se();
      ht && (Re.pivot = ie(ht, me(ht), Ke));
      return;
    }
    if (Re.kind === "world_gizmo") {
      const ht = Ae(Re.id);
      Re.camera ? Re.base = b() : ht && (Re.base = _r(ht, n.frame));
      return;
    }
    if (Re.kind === "move_multi") {
      const ht = ke(Re.items);
      if (!(ht != null && ht.visible)) return;
      Re.offset = { x: Ke.x - ht.center.x, y: Ke.y - ht.center.y }, Re.startCenter = { x: ht.center.x, y: ht.center.y };
      for (const bn of Re.stickerSnapshots) {
        const Ht = Re.items.find((Fn) => String((Fn == null ? void 0 : Fn.id) || "") === bn.id), Ot = Ht ? L(Ht) : null;
        Ot != null && Ot.visible && (bn.yaw_deg = Number(k(Ht).yaw_deg || 0), bn.pitch_deg = Number(k(Ht).pitch_deg || 0), bn.center = { x: Ot.center.x, y: Ot.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Re.kind)) return;
    const We = L(Re.item);
    if (!(We != null && We.visible)) return;
    const Pt = k(Re.item);
    if (Re.kind === "move") {
      Re.offset = { x: Ke.x - We.center.x, y: Ke.y - We.center.y };
      return;
    }
    if (Re.center = We.center, Re.kind === "rotate") {
      Re.startRot = Number(Pt.rot_deg || Pt.roll_deg || 0), Re.startAng = Math.atan2(Ke.y - We.center.y, Ke.x - We.center.x);
      return;
    }
    Re.startDist = Math.max(1, Math.hypot(Ke.x - We.center.x, Ke.y - We.center.y)), Re.startHFOV = Number(Pt.hFOV_deg || 20), Re.startVFOV = Number(Pt.vFOV_deg || 20);
  }
  function jt(Re) {
    const Ke = Z(Re);
    if (z(Ke, !0), !n.interaction) {
      T(Ke), je(Ke);
      return;
    }
    je(Ke);
    const We = n.interaction;
    if (Mt && (Ke.x !== Mt.x || Ke.y !== Mt.y)) {
      const Pt = Mt;
      Mt = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(We.kind) || Zt(We, Pt);
    }
    if (We.kind !== "world_select") {
      if (We.kind === "world_gizmo") {
        K(We, Ke);
        return;
      }
      if (We.kind === "paint_stroke") {
        R(We, Re);
        return;
      }
      if (We.kind === "paint_lasso_fill") {
        w(We, Re);
        return;
      }
      if (We.kind === "view") {
        M(We, Ke, Re);
        return;
      }
      if (We.kind === "frame_pan" || We.kind === "frame_orbit") {
        y(We, Ke);
        return;
      }
      if (We.kind === "space_pan" || We.kind === "space_orbit") {
        h(We, Ke);
        return;
      }
      if (We.kind === "pan_frame") {
        v(We, Ke);
        return;
      }
      if (We.kind === "roll_frame") {
        p(We, Ke, Re);
        return;
      }
      if (We.kind === "move") {
        F(We, Ke);
        return;
      }
      if (We.kind === "move_stroke_group") {
        x(We, Ke);
        return;
      }
      if (We.kind === "move_raster_object") {
        U(We, Ke);
        return;
      }
      if (We.kind === "scale_raster_object") {
        _e(We, Ke);
        return;
      }
      if (We.kind === "move_multi") {
        ee(We, Ke);
        return;
      }
      if (We.kind === "scale_stroke_group") {
        xe(We, Ke);
        return;
      }
      if (We.kind === "rotate_stroke_group") {
        Y(We, Ke, Re);
        return;
      }
      if (We.kind === "marquee_select") {
        ae(We, Ke);
        return;
      }
      if (We.kind === "scale" || We.kind === "scale_x" || We.kind === "scale_y") {
        ve(We, Ke);
        return;
      }
      if (We.kind === "rotate") {
        O(We, Ke, Re);
        return;
      }
    }
  }
  function fi() {
    var Ke, We, Pt, ht;
    const Re = n.interaction;
    if (!((Re == null ? void 0 : Re.kind) === "roll_frame" && Re.source === "knob")) {
      if ((Re == null ? void 0 : Re.kind) === "space_pan" || (Re == null ? void 0 : Re.kind) === "space_orbit") {
        V();
        return;
      }
      if ((Re == null ? void 0 : Re.kind) === "world_select" || (Re == null ? void 0 : Re.kind) === "world_gizmo") {
        ye(Re);
        return;
      }
      ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "paint_stroke" || ((We = n.interaction) == null ? void 0 : We.kind) === "paint_lasso_fill" ? $() : ((Pt = n.interaction) == null ? void 0 : Pt.kind) === "marquee_select" ? N() : ["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((ht = n.interaction) == null ? void 0 : ht.kind) ? H() : n.interaction && n.interaction.kind !== "view" && W(), n.interaction = null, (Re == null ? void 0 : Re.kind) === "roll_frame" && he(), G(), Re && Re.kind === "view" && D(), Ee(), Ge(), je(n.pointerPos), _();
    }
  }
  function pi() {
    var Re, Ke, We, Pt, ht;
    if (!u()) {
      if (((Re = n.interaction) == null ? void 0 : Re.kind) === "world_select" || ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "world_gizmo") {
        ye(n.interaction);
        return;
      }
      ((We = n.interaction) == null ? void 0 : We.kind) === "view" && D(), (((Pt = n.interaction) == null ? void 0 : Pt.kind) === "paint_stroke" || ((ht = n.interaction) == null ? void 0 : ht.kind) === "paint_lasso_fill") && f(), n.interaction = null, G(), Ee(), je(n.pointerPos), _({ localOnly: !0 });
    }
  }
  function mi(Re) {
    const Ke = Z(Re), We = z(Ke, !0);
    n.interaction || (je(Ke), We && n.mode === "frame" && n.primaryTool === "cursor" && _({ localOnly: !0, reason: it.OVERLAY }));
  }
  function Gt(Re) {
    if (n.mode === "frame") {
      const Ke = Z(Re), We = ta(Re);
      We && $e(), We && A() ? at(Ke, -We) : We && St(Ke, We) && _({ localOnly: !0 }), Re.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (m(), pe()) {
        const Ke = ta(Re);
        Ke && st(Z(Re), -Ke);
      } else c.applyWheelEvent(Re) && _({ localOnly: !0, reason: it.VIEW });
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
        cutoutCamera: b,
        dragFrame: y,
        dragWorldGizmo: K,
        endFrameGesture: H,
        endLookDrag: D,
        endMarquee: N,
        endPaintStroke: $,
        endSpaceDrag: V,
        endTransform: W,
        endWorldStickerPress: ye,
        frameContext: Se,
        frameSpaceView: me,
        frameTarget: ie,
        getMultiSelectionGeom: ke,
        getSelected: de,
        getSelectedItems: ue,
        handleHit: B,
        hideTooltip: he,
        hitObjectAt: ne,
        hoverWorldGizmo: T,
        invalidateLivePaintPreviewCaches: G,
        isFreeFrameView: A,
        isFreeSpaceView: pe,
        isItemLocked: P,
        isSpaceView: I,
        moveLassoFill: w,
        moveLookDrag: M,
        moveMarquee: ae,
        moveMulti: ee,
        movePaintStroke: R,
        movePanFrame: v,
        moveRasterObject: U,
        moveRollFrame: p,
        moveSpaceDrag: h,
        moveStrokeGroup: x,
        moveItem: F,
        objectGeom: L,
        paintingShown: J,
        playback: le,
        poseOf: k,
        pushHistory: j,
        requestDraw: _,
        rotateItem: O,
        rotateStrokeGroup: Y,
        scaleItem: ve,
        scaleRasterObject: _e,
        scaleStrokeGroup: xe,
        screenPos: Z,
        screenPosCss: be,
        setPointerPos: z,
        setSelectedItem: oe,
        startAxisScale: q,
        startCameraPress: re,
        startEmptyDrag: Q,
        startFrameDrag: te,
        startFrameRoll: X,
        startHitMove: C,
        startLookDrag: se,
        startMiddlePanFrame: fe,
        startMove: we,
        startMultiMove: E,
        startPaintStroke: ge,
        startPanFrame: Pe,
        startRotate: Ce,
        startScale: Te,
        startSpaceDrag: Le,
        startWorldStickerPress: ze,
        stickerById: Ae,
        stopTimelinePlayback: $e,
        supportsErpPainting: ce,
        supportsFramePainting: Ne,
        syncTimeline: Ie,
        syncViewToggleState: Ee,
        updateCursor: je,
        updateSelectionMenu: Ge,
        updateSidePanel: Be,
        viewControls: ct,
        zoomFrameAt: at,
        zoomFrameViewAt: St,
        zoomSpaceAt: st
      } = Re);
    },
    onCanvasPointerDown: Ye,
    onCanvasPointerMove: jt,
    onCanvasPointerUp: fi,
    onCanvasPointerCancel: pi,
    onCanvasMouseMove: mi,
    onCanvasWheel: Gt
  };
}
function OC(e) {
  const { canvas: t, editor: n, viewController: r } = e;
  let i, o, s, a, l, c, d, u, f, m;
  function S(D, N, $) {
    n.interaction = { kind: "view", last: $, lastTs: performance.now() }, r.startDrag($.x, $.y, D.pointerId, performance.now()), u(N), t.setPointerCapture(D.pointerId);
  }
  function g(D, N) {
    if (i()) {
      const $ = m().emptyLeft;
      $ && d($, N, D.pointerId);
      return;
    }
    S(D, N, s(D));
  }
  function b(D, N, $) {
    const V = performance.now(), W = n.mode === "unwrap" ? N : s($);
    r.moveDrag(W.x, W.y, n.mode === "unwrap" ? "unwrap" : "pano", V), D.lastTs = V, D.last = W, o({ localOnly: !0, reason: it.VIEW });
  }
  function y() {
    c(() => r.endDrag(performance.now()));
  }
  function K(D, N) {
    const $ = l();
    a(D.kind === "space_pan" ? Rh($, N.x - D.last.x, N.y - D.last.y, t.width, t.height, D.depth) : Dh($, N.x - D.last.x, N.y - D.last.y, t.height, D.pivot)), D.last = N;
  }
  function H() {
    n.interaction = null, u(n.pointerPos), f();
  }
  return {
    connect(D) {
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
      } = D);
    },
    startLookDrag: S,
    startEmptyDrag: g,
    moveLookDrag: b,
    endLookDrag: y,
    moveSpaceDrag: K,
    endSpaceDrag: H
  };
}
function FC(e) {
  const { canvas: t, editor: n, readOnly: r, state: i } = e;
  let o, s, a, l, c, d, u, f, m, S;
  function g(D, N) {
    const $ = a();
    !$ || r || $.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: $,
      last: N,
      start: {
        yaw_deg: Number($.yaw_deg || 0),
        pitch_deg: Number($.pitch_deg || 0)
      },
      changed: !1
    }, m(N), t.setPointerCapture(D.pointerId));
  }
  function b(D, N) {
    const $ = a(), V = c($);
    if (!$ || $.locked === !0 || !V) return;
    const W = Vg({
      frame: V,
      point: N,
      startRollDeg: Number($.roll_deg ?? $.rot_deg ?? 0),
      shiftKey: D.shiftKey,
      altKey: D.altKey,
      allowAlt: !0
    });
    W && (n.interaction = {
      kind: "roll_frame",
      shot: $,
      center: W.center,
      lastAngle: W.lastAngle,
      accumulatedRad: W.accumulatedRad,
      rollGesture: W,
      start: { roll_deg: Number($.roll_deg ?? $.rot_deg ?? 0) },
      changed: !1,
      altStarted: W.source === "alt",
      source: W.source
    }, t.setPointerCapture(D.pointerId), D.preventDefault(), f(), u({ localOnly: !0 }));
  }
  function y(D, N) {
    var Se, me;
    const $ = l(D.shot);
    if (!$ || !D.shot) return;
    const V = N.x - D.last.x, W = N.y - D.last.y, ye = zg(D.shot, {
      dx: V,
      dy: W,
      focalPx: $.focalPx,
      invertX: ((Se = i.ui_settings) == null ? void 0 : Se.invert_view_x) === !0,
      invertY: ((me = i.ui_settings) == null ? void 0 : me.invert_view_y) === !0
    });
    D.shot.yaw_deg = ye.yaw_deg, D.shot.pitch_deg = ye.pitch_deg, D.changed = D.changed || Math.abs(V) > 0 || Math.abs(W) > 0, D.last = N, u({ localOnly: !0 });
  }
  function K(D, N, $) {
    D.source !== "knob" && o(D, N, $);
  }
  function H() {
    n.interaction.changed && (d(), s(), S());
  }
  return {
    connect(D) {
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
      } = D);
    },
    startMiddlePanFrame: g,
    startFrameRoll: b,
    movePanFrame: y,
    moveRollFrame: K,
    endFrameGesture: H
  };
}
function TC(e) {
  const { canvas: t, editor: n, node: r } = e;
  let i, o, s, a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me;
  function ie(ne, T) {
    const G = n.primaryTool === "mask" ? "mask" : "paint", A = n.primaryTool === "mask" ? n.maskTool : n.paintTool, pe = n.mode === "frame" && W() ? f() : null, P = { kind: "ERP_GLOBAL" }, I = pe ? V(T, pe, performance.now()) : $(T, performance.now());
    if (!I) {
      ye(T);
      return;
    }
    n.interaction = {
      kind: A === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
      layerKind: G,
      _livePreviewToken: Ni("live"),
      stroke: A === "lasso_fill" ? c(G, A, [I], P) : l(G, A, [I], P)
    }, b();
    const w = m(n.interaction);
    if (w)
      if (n.paintEngine.beginStroke(n.interaction.stroke, w), n.interaction.kind === "paint_stroke") {
        const M = n.paintEngine.ensureTarget(w), ae = Number((I == null ? void 0 : I.u) ?? (I == null ? void 0 : I.x) ?? 0), ee = Number((I == null ? void 0 : I.v) ?? (I == null ? void 0 : I.y) ?? 0);
        n.paintEngine.appendStrokePoint(M, ae, ee, n.interaction.stroke);
      } else
        n.paintEngine.updateActiveStroke(n.interaction.stroke, w);
    ye(T), t.setPointerCapture(ne.pointerId), D();
  }
  function ke(ne, T, G, A) {
    const pe = typeof T.getCoalescedEvents == "function" ? T.getCoalescedEvents() : [T];
    let P = !1;
    return pe.forEach((I) => {
      const w = N(I);
      if (n.mode === "frame") {
        const M = f(), ae = M ? S(M) : null;
        if (ae) {
          const ee = (w.x - ae.x) / Math.max(1, ae.w), R = (w.y - ae.y) / Math.max(1, ae.h);
          if (!(ee >= 0 && ee <= 1 && R >= 0 && R <= 1)) {
            ne._outOfFrame = !0;
            return;
          }
          ne._outOfFrame && (ne._outOfFrame = !1, G(ne));
        }
      }
      A(ne, w, performance.now()) && (P = !0);
    }), P;
  }
  function de(ne, T) {
    ke(ne, T, o, a) && D({ localOnly: !0, reason: it.PAINT });
  }
  function ue(ne, T) {
    if (ke(ne, T, i, s)) {
      const G = m(ne);
      G && n.paintEngine.updateActiveStroke(ne.stroke, G), D({ localOnly: !0, reason: it.PAINT });
    }
  }
  function B() {
    var G, A;
    b();
    const ne = d(n.interaction), T = !!n.interaction._hasCommittedSegments;
    if (ne || T) {
      y();
      const pe = String(((G = n.interaction.stroke) == null ? void 0 : G.actionGroupId) || "").trim();
      if (pe) {
        const I = g().find((w) => String((w == null ? void 0 : w.actionGroupId) || "") === pe);
        I && (I.frame = null);
      }
      const P = m(n.interaction);
      P && (ne ? String(((A = n.interaction.stroke) == null ? void 0 : A.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(P), H()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, P) : n.paintEngine.cancelActiveStroke(P)), K(), u(), me(), Se(), r.setDirtyCanvas(!0, !0), D();
    } else {
      const pe = m(n.interaction);
      pe && n.paintEngine.cancelActiveStroke(pe);
    }
  }
  function he() {
    b();
    const ne = m(n.interaction);
    ne && n.paintEngine.cancelActiveStroke(ne);
  }
  return {
    connect(ne) {
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
        invalidateLivePaintPreviewCaches: b,
        markPaintStrokeVisualsDirty: y,
        pushHistory: K,
        refreshPaintEngineRevisionCache: H,
        requestDraw: D,
        screenPos: N,
        screenPosToErpPoint: $,
        screenPosToFrameAsErpPoint: V,
        supportsFramePainting: W,
        updateCursor: ye,
        updateSelectionMenu: Se,
        updateSidePanel: me
      } = ne);
    },
    startPaintStroke: ie,
    movePaintStroke: de,
    moveLassoFill: ue,
    endPaintStroke: B,
    cancelPaintStroke: he
  };
}
function DC(e) {
  const { canvas: t, dragFrames: n, editor: r, editorView: i, runtime: o, state: s } = e;
  let a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke;
  function de(T, G) {
    return i.gizmoPointer(T, c(), G.x, G.y, t.width, t.height);
  }
  function ue(T, G) {
    var M, ae;
    const A = (M = d().space) == null ? void 0 : M.gizmo;
    if (A && de("hover", G) !== null && de("down", G))
      return r.interaction = {
        kind: "world_gizmo",
        id: r.worldSelectedId,
        mode: A.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: A.transform,
        base: _r(V(), r.frame),
        changed: !1
      }, t.setPointerCapture(T.pointerId), me(G), !0;
    const pe = m(), P = f(), I = pe.length > 1 ? pe.some((ee) => b(ee)) ? "none" : S(u(pe), G).kind : P && !b(P) ? S(H(P), G, P).kind : "none";
    if (I !== "none" && I !== "move") return !1;
    const w = i.pickSticker(c(), G.x, G.y, t.width, t.height);
    return ((ae = W(w)) == null ? void 0 : ae.placement) !== "world" ? !1 : (r.worldSelectedId !== w && (r.selectedId && (D(), l()), $(w), ke(), ie(), Se(), N()), r.interaction = { kind: "world_select" }, t.setPointerCapture(T.pointerId), !0);
  }
  function B(T) {
    var pe;
    const A = !!(r.worldSelectedId || g()) && r.primaryTool === "cursor" && y() && !!((pe = d().space) != null && pe.gizmo) ? de("hover", T) : null;
    A !== r.gizmoAxis && (r.gizmoAxis = A, o.backgroundDirty = !0, N({ localOnly: !0, reason: it.VIEW }));
  }
  function he(T, G) {
    const A = de("move", G);
    if (A && T.camera) {
      for (const [P, I] of Object.entries(Df(T.mode, T.base, T.start, A))) qt(s.camera, P, r.frame, I);
      ye(), T.changed = !0, n.request("sidePanel"), N({ localOnly: !0 });
      return;
    }
    const pe = W(T.id);
    !A || !pe || (DS(pe, r.frame, Df(T.mode, T.base, T.start, A)), T.changed = !0, K(), n.request("sidePanel"), N({ localOnly: !0 }));
  }
  function ne(T) {
    r.interaction = null, r.gizmoAxis = null, T.kind === "world_gizmo" && (de("up", r.pointerPos), o.backgroundDirty = !0, T.changed && (D(), a(), ke())), me(r.pointerPos), N();
  }
  return {
    connect(T) {
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
        isItemLocked: b,
        isSpaceView: y,
        markObjectVisualsDirty: K,
        objectGeom: H,
        pushHistory: D,
        requestDraw: N,
        selectWorldSticker: $,
        selectedWorldSticker: V,
        stickerById: W,
        syncCutoutShot: ye,
        syncFloatingViewButtonState: Se,
        updateCursor: me,
        updateSelectionMenu: ie,
        updateSidePanel: ke
      } = T);
    },
    worldGizmoPointer: de,
    startWorldStickerPress: ue,
    hoverWorldGizmo: B,
    dragWorldGizmo: he,
    endWorldStickerPress: ne
  };
}
function RC(e) {
  const { editor: t, shotEditor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, m, S, g;
  function b(K, H) {
    K.current = H, f({ localOnly: !0, reason: it.OVERLAY });
  }
  function y() {
    var N;
    const K = d(t.interaction.start, t.interaction.current), D = [
      ...r === "cutout" ? i().filter(($) => !l($)) : [...o()],
      ...a(),
      ...s()
    ].filter(($) => u(K, c($)));
    m(D, ((N = D[D.length - 1]) == null ? void 0 : N.id) || null), n && D.length && (t.cutoutAspectOpen = !1), g(), S(), f();
  }
  return {
    connect(K) {
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
      } = K);
    },
    moveMarquee: b,
    endMarquee: y
  };
}
function LC(e) {
  const { canvas: t, editor: n, node: r, shotEditor: i } = e;
  let o, s, a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T;
  function G(k) {
    return n.mode === "frame" ? (() => {
      const j = f();
      return j ? ke(k, j, performance.now()) : null;
    })() : ie(k, performance.now());
  }
  function A(k) {
    return No(g(k.actionGroupId, k.layerKind));
  }
  function pe(k) {
    return No(d(k.actionGroupId, k.layerKind));
  }
  function P(k) {
    return No(S().find((j) => String((j == null ? void 0 : j.id) || "") === W(k.rasterObjectId || k.id || "")));
  }
  function I(k, j, _) {
    if (n.mode === "frame" && i) {
      const O = f(), Y = m(O);
      if (!O || !Y) return !1;
      const ve = {
        x: Fe((j - Y.x) / Math.max(1, Y.w), 0, 1),
        y: Fe((_ - Y.y) / Math.max(1, Y.h), 0, 1)
      }, _e = u(O, ve);
      if (!_e) return !1;
      const xe = Sp(_e);
      T(k, { yaw_deg: xe.yaw, pitch_deg: xe.pitch });
    } else if (n.mode === "unwrap") {
      const O = b(), Y = Fe((j - O.x) / Math.max(O.w, 1), 0, 1), ve = Fe((_ - O.y) / Math.max(O.h, 1), 0, 1);
      T(k, { yaw_deg: Et(Y * 360 - 180), pitch_deg: Fe(90 - ve * 180, -90, 90) });
    } else {
      const O = de(j, _), Y = Sp(O);
      T(k, { yaw_deg: Y.yaw, pitch_deg: Y.pitch });
    }
    return !0;
  }
  function w(k, j, _, O, Y) {
    n.interaction = D(_) ? {
      kind: "scale_stroke_group",
      item: _,
      center: O.center,
      startDist: Math.max(1, Math.hypot(j.x - O.center.x, j.y - O.center.y)),
      snapshot: A(_),
      frameSnapshot: pe(_),
      cursor: Y.cursor
    } : y(_) ? {
      kind: "scale_raster_object",
      item: _,
      center: O.center,
      startDist: Math.max(1, Math.hypot(j.x - O.center.x, j.y - O.center.y)),
      snapshot: P(_),
      cursor: Y.cursor
    } : {
      kind: "scale",
      item: _,
      center: O.center,
      startDist: Math.max(1, Math.hypot(j.x - O.center.x, j.y - O.center.y)),
      startHFOV: Number(ye(_).hFOV_deg || 20),
      startVFOV: Number(ye(_).vFOV_deg || 20),
      cursor: Y.cursor
    }, he(j), t.setPointerCapture(k.pointerId);
  }
  function M(k, j, _, O, Y) {
    n.interaction = {
      kind: Y.kind,
      item: _,
      center: O.center,
      startDist: Math.max(1, Math.hypot(j.x - O.center.x, j.y - O.center.y)),
      startHFOV: Number(ye(_).hFOV_deg || 20),
      startVFOV: Number(ye(_).vFOV_deg || 20),
      cursor: Y.cursor,
      edge: Y.edge
    }, he(j), t.setPointerCapture(k.pointerId);
  }
  function ae(k, j, _, O) {
    n.interaction = D(_) ? {
      kind: "rotate_stroke_group",
      item: _,
      center: O.center,
      startAng: Math.atan2(j.y - O.center.y, j.x - O.center.x),
      snapshot: A(_),
      frameSnapshot: pe(_)
    } : {
      kind: "rotate",
      item: _,
      center: O.center,
      startRot: Number(ye(_).rot_deg || ye(_).roll_deg || 0),
      startAng: Math.atan2(j.y - O.center.y, j.x - O.center.x)
    }, he(j), t.setPointerCapture(k.pointerId);
  }
  function ee(k, j, _, O) {
    if (D(_)) {
      const Y = G(j);
      n.interaction = {
        kind: "move_stroke_group",
        item: _,
        startUv: Y,
        snapshot: A(_),
        frameSnapshot: pe(_)
      }, he(j), t.setPointerCapture(k.pointerId);
      return;
    }
    if (y(_)) {
      const Y = G(j);
      n.interaction = {
        kind: "move_raster_object",
        item: _,
        startUv: Y,
        snapshot: P(_)
      }, he(j), t.setPointerCapture(k.pointerId);
      return;
    }
    n.interaction = {
      kind: "move",
      item: _,
      offset: { x: j.x - O.center.x, y: j.y - O.center.y }
    }, he(j), t.setPointerCapture(k.pointerId);
  }
  function R(k, j, _) {
    n.interaction = {
      kind: D(_.item) ? "move_stroke_group" : y(_.item) ? "move_raster_object" : "move",
      item: _.item,
      offset: { x: j.x - _.geom.center.x, y: j.y - _.geom.center.y },
      startUv: D(_.item) || y(_.item) ? G(j) : null,
      snapshot: D(_.item) ? A(_.item) : y(_.item) ? P(_.item) : null,
      frameSnapshot: D(_.item) ? pe(_.item) : null
    }, he(j), t.setPointerCapture(k.pointerId);
  }
  function v(k, j) {
    const _ = j.x - k.offset.x, O = j.y - k.offset.y;
    I(k.item, _, O) && (H(k.item) && N(), me({ localOnly: !0 }));
  }
  function U(k, j) {
    var ve, _e;
    const _ = G(j);
    if (!_ || !k.startUv) return;
    const O = ue(Number(_.u || 0), Number(k.startUv.u || 0)), Y = Number(_.v || 0) - Number(k.startUv.v || 0);
    a((ve = k.item) == null ? void 0 : ve.actionGroupId, O, Y, k.snapshot, (_e = k.item) == null ? void 0 : _e.layerKind, k.frameSnapshot) && (V({ rebuildPaintEngine: !1 }), me({ localOnly: !0, reason: it.PAINT }));
  }
  function p(k, j) {
    var ve, _e;
    const _ = G(j);
    if (!_ || !k.startUv) return;
    const O = ue(Number(_.u || 0), Number(k.startUv.u || 0)), Y = Number(_.v || 0) - Number(k.startUv.v || 0);
    o(((ve = k.item) == null ? void 0 : ve.rasterObjectId) || ((_e = k.item) == null ? void 0 : _e.id) || "", O, Y, k.snapshot) && ($(), me({ localOnly: !0, reason: it.PAINT }));
  }
  function h(k, j) {
    var Y, ve;
    const O = Math.max(1, Math.hypot(j.x - k.center.x, j.y - k.center.y)) / Math.max(1, Number(k.startDist || 1));
    s(((Y = k.item) == null ? void 0 : Y.rasterObjectId) || ((ve = k.item) == null ? void 0 : ve.id) || "", O, k.snapshot) && ($(), me({ localOnly: !0, reason: it.PAINT }));
  }
  function x(k, j) {
    var Y, ve;
    const O = Math.max(1, Math.hypot(j.x - k.center.x, j.y - k.center.y)) / Math.max(1, Number(k.startDist || 1));
    l((Y = k.item) == null ? void 0 : Y.actionGroupId, O, 0, k.snapshot, (ve = k.item) == null ? void 0 : ve.layerKind, k.frameSnapshot) && (V({ rebuildPaintEngine: !1 }), me({ localOnly: !0, reason: it.PAINT }));
  }
  function F(k, j, _) {
    var Y, ve;
    let O = (Math.atan2(j.y - k.center.y, j.x - k.center.x) - Number(k.startAng || 0)) * si;
    _.shiftKey && (O = Math.round(O / 45) * 45), l((Y = k.item) == null ? void 0 : Y.actionGroupId, 1, O, k.snapshot, (ve = k.item) == null ? void 0 : ve.layerKind, k.frameSnapshot) && (V({ rebuildPaintEngine: !1 }), me({ localOnly: !0, reason: it.PAINT }));
  }
  function L(k, j) {
    const O = Math.max(1, Math.hypot(j.x - k.center.x, j.y - k.center.y)) / k.startDist;
    k.kind === "scale" ? T(k.item, { hFOV_deg: Fe(k.startHFOV * O, 1, 179), vFOV_deg: Fe(k.startVFOV * O, 1, 179) }) : k.kind === "scale_x" ? T(k.item, { hFOV_deg: Fe(k.startHFOV * O, 1, 179) }) : T(k.item, { vFOV_deg: Fe(k.startVFOV * O, 1, 179) }), K(k.item) || (k.item.aspect_id = Qo(k.item)), H(k.item) && N(), me({ localOnly: !0 });
  }
  function J(k, j, _) {
    let Y = (Math.atan2(j.y - k.center.y, j.x - k.center.x) - k.startAng) * si, ve = k.startRot - Y;
    _.shiftKey && (ve = Math.round(ve / 45) * 45), T(k.item, { [H(k.item) ? "rot_deg" : "roll_deg"]: ve }), H(k.item) && N(), me({ localOnly: !0 });
  }
  function le() {
    let k = !1;
    (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (k = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (k = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (k = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (k = !0), k && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? V({ rebuildPaintEngine: !0 }) : $()), Se(), c(), r.setDirtyCanvas(!0, !0), B(), ne(), me();
  }
  return {
    connect(k) {
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
        getUnwrapRect: b,
        isRasterObjectItem: y,
        isSceneSticker: K,
        isStickerItem: H,
        isStrokeGroupItem: D,
        markObjectVisualsDirty: N,
        markPaintCompositeVisualsDirty: $,
        markPaintStrokeVisualsDirty: V,
        parseRasterObjectSelectionId: W,
        poseOf: ye,
        pushHistory: Se,
        requestDraw: me,
        screenPosToErpPoint: ie,
        screenPosToFrameAsErpPoint: ke,
        screenToWorldDir: de,
        shortestWrappedDelta: ue,
        syncSidePanelControls: B,
        updateCursor: he,
        updateSelectionMenu: ne,
        writePose: T
      } = k);
    },
    editUvAt: G,
    strokeGroupSnapshot: A,
    strokeGroupFrameSnapshot: pe,
    rasterObjectSnapshot: P,
    writePoseAtScreenPoint: I,
    startScale: w,
    startAxisScale: M,
    startRotate: ae,
    startMove: ee,
    startHitMove: R,
    moveItem: v,
    moveStrokeGroup: U,
    moveRasterObject: p,
    scaleRasterObject: h,
    scaleStrokeGroup: x,
    rotateStrokeGroup: F,
    scaleItem: L,
    rotateItem: J,
    endTransform: le
  };
}
function VC(e) {
  const { canvas: t, editor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se;
  function me(de, ue) {
    var he, ne;
    const B = y(de);
    return B != null && B.visible ? { x: Number(((he = B.center) == null ? void 0 : he.x) || 0), y: Number(((ne = B.center) == null ? void 0 : ne.y) || 0) } : { x: ue.x, y: ue.y };
  }
  function ie(de, ue, B, he) {
    n.interaction = {
      kind: "move_multi",
      items: B.map((ne) => ne),
      offset: { x: ue.x - he.center.x, y: ue.y - he.center.y },
      startCenter: { x: he.center.x, y: he.center.y },
      stickerSnapshots: B.filter((ne) => f(ne)).map((ne) => ({
        id: String(ne.id || ""),
        yaw_deg: Number(H(ne).yaw_deg || 0),
        pitch_deg: Number(H(ne).pitch_deg || 0),
        center: me(ne, ue)
      })),
      strokeSnapshots: B.filter((ne) => m(ne)).map((ne) => ({
        id: String(ne.actionGroupId || ne.id || ""),
        layerKind: String(ne.layerKind || "paint"),
        snapshot: W(ne),
        frameSnapshot: V(ne),
        center: me(ne, ue),
        centerUv: d(ne.actionGroupId, ne.layerKind)
      })),
      rasterSnapshots: B.filter((ne) => u(ne)).map((ne) => ({
        id: K(ne.rasterObjectId || ne.id || ""),
        snapshot: D(ne),
        center: me(ne, ue),
        centerUv: c(ne)
      }))
    }, ye(ue), t.setPointerCapture(de.pointerId);
  }
  function ke(de, ue) {
    var P, I, w, M, ae, ee, R, v, U, p;
    const B = ue.x - Number(((P = de.offset) == null ? void 0 : P.x) || 0), he = ue.y - Number(((I = de.offset) == null ? void 0 : I.y) || 0);
    let ne = !1, T = !1, G = !1;
    const A = B - Number(((w = de.startCenter) == null ? void 0 : w.x) || B), pe = he - Number(((M = de.startCenter) == null ? void 0 : M.y) || he);
    for (const h of Array.isArray(de.stickerSnapshots) ? de.stickerSnapshots : []) {
      const x = (r === "cutout" ? a() : l()).find((L) => String((L == null ? void 0 : L.id) || "") === String(h.id || ""));
      if (!x || !f(x)) continue;
      const F = {
        x: Number(((ae = h.center) == null ? void 0 : ae.x) || 0) + A,
        y: Number(((ee = h.center) == null ? void 0 : ee.y) || 0) + pe
      };
      Se(x, F.x, F.y) && (ne = !0);
    }
    for (const h of Array.isArray(de.strokeSnapshots) ? de.strokeSnapshots : []) {
      const x = {
        x: Number(((R = h.center) == null ? void 0 : R.x) || 0) + A,
        y: Number(((v = h.center) == null ? void 0 : v.y) || 0) + pe
      }, F = s(x), L = h.centerUv || null;
      if (F && L) {
        const J = $(Number(F.u || 0), Number(L.u || 0)), le = Number(F.v || 0) - Number(L.v || 0);
        o(h.id, J, le, h.snapshot, h.layerKind, h.frameSnapshot) && (ne = !0, T = !0);
      }
    }
    for (const h of Array.isArray(de.rasterSnapshots) ? de.rasterSnapshots : []) {
      const x = {
        x: Number(((U = h.center) == null ? void 0 : U.x) || 0) + A,
        y: Number(((p = h.center) == null ? void 0 : p.y) || 0) + pe
      }, F = s(x), L = h.centerUv || null;
      if (F && L) {
        const J = $(Number(F.u || 0), Number(L.u || 0)), le = Number(F.v || 0) - Number(L.v || 0);
        i(h.id, J, le, h.snapshot) && (ne = !0, G = !0);
      }
    }
    ne && (T ? b({ rebuildPaintEngine: !1 }) : G ? g() : S(), N({ localOnly: !0 }));
  }
  return {
    connect(de) {
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
        markPaintStrokeVisualsDirty: b,
        objectGeom: y,
        parseRasterObjectSelectionId: K,
        poseOf: H,
        rasterObjectSnapshot: D,
        requestDraw: N,
        shortestWrappedDelta: $,
        strokeGroupFrameSnapshot: V,
        strokeGroupSnapshot: W,
        updateCursor: ye,
        writePoseAtScreenPoint: Se
      } = de);
    },
    startMultiMove: ie,
    moveMulti: ke
  };
}
function $C(e) {
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
  let f, m, S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee;
  function R(F, L, J = !1) {
    var ve;
    A();
    const le = a && r.mode === "frame" ? K() : null, k = le || N(), j = le ? "shot" : V(), _ = T();
    if (_ && !ae(_) || !_ && (!k || j === "stroke" || W(k))) return;
    const O = (((ve = u.sidePanel) == null ? void 0 : ve.params) || []).find((_e) => _e.key === F);
    if (!O || O.enabled === !1) return;
    let Y = Number(L);
    if (Number.isNaN(Y) && (Y = 0), (_ || t) && V2.has(F) ? Y = F === "scale" ? Math.max(Y, g0) : Y : Y = Fe(Y, Number(O.min), Number(O.max)), F === "yaw_deg" && (Y = Et(Y)), !_ && t && F.startsWith("position_")) {
      P(), ES(l.camera, r.frame, F, Y), M(), B(), J && de();
      return;
    }
    if (_) {
      TS(_, r.frame, F, Y), me(), M(), B(), J && de();
      return;
    }
    F === "opacity" ? OS(k, r.frame, Y / 100) : ee(k, { [F]: Y }), a && !ye(k) && (F === "hFOV_deg" || F === "vFOV_deg") && (k.aspect_id = Qo(k)), M(), B(), J && de();
  }
  function v(F, L) {
    var k;
    const J = (k = u.sidePanel) == null ? void 0 : k.upstream;
    if (!J) return !1;
    const le = L ? J.lanes.find((j) => j.name === L && j.action === F) : F === "revert-upstream" ? J.revertAll : null;
    return !!le && !le.disabled;
  }
  function U(F) {
    const L = T() || N();
    It(L) && (A(), ne(L, F) && (ue(), me(), de(), b(), M(), w(), B()));
  }
  async function p(F) {
    var le, k, j, _, O, Y, ve;
    const L = F.target.closest("[data-action]");
    if (!L) return;
    const J = String(L.getAttribute("data-action") || "");
    if (J === "coverage-set") {
      const _e = yn(L.getAttribute("data-coverage"));
      if (_e === yn(l.coverage)) return;
      l.coverage = _e, r.coverage = _e, n && (n.value = String(_e)), o ? s.backgroundDirty = !0 : (y(), pe({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), M(), w(), B();
      return;
    }
    if (J === "revert-handoff-lane" || J === "revert-upstream") {
      const _e = L.getAttribute("data-lane") || null;
      if (!v(J, _e)) return;
      J === "revert-handoff-lane" ? (A(), he(_e)) : U(_e);
      return;
    }
    if (J === "toggle-selection-picker") {
      if ((k = (le = u.sidePanel) == null ? void 0 : le.selectionPicker) != null && k.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (J === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const _e = String(L.getAttribute("data-selection-id") || "");
      let xe = null;
      if (_e && (d === "stickers" ? xe = [...D(), ...c ? l.shots : []].find((Z) => String((Z == null ? void 0 : Z.id) || "") === _e) || null : xe = ((j = H().find((Z) => {
        var be;
        return String(((be = Z == null ? void 0 : Z.item) == null ? void 0 : be.id) || "") === _e;
      })) == null ? void 0 : j.item) || null), G(xe || null), xe && !Se(xe)) {
        const Z = ke(xe);
        I(Et(Number(Z.yaw_deg || 0)), Fe(Number(Z.pitch_deg || 0), -89.9, 89.9));
      }
      M(), w(), B();
      return;
    }
    if (J === "copy-state-inline") {
      const _e = N(), xe = V();
      if (!_e || xe === "stroke" || $().length > 1) return;
      const Z = JSON.stringify(a && xe !== "image" ? m(_e) : S(ke(_e)));
      try {
        await navigator.clipboard.writeText(Z), (_ = u.sidePanel) != null && _.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var be;
          (be = u.sidePanel) != null && be.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (J === "set-invert-x") {
      l.ui_settings.invert_view_x = L.getAttribute("data-value") === "1", ie(), M(), (O = i.setDirtyCanvas) == null || O.call(i, !0, !0), B();
      return;
    }
    if (J === "set-invert-y") {
      l.ui_settings.invert_view_y = L.getAttribute("data-value") === "1", ie(), M(), (Y = i.setDirtyCanvas) == null || Y.call(i, !0, !0), B();
      return;
    }
    if (J === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, ie(), M(), (ve = i.setDirtyCanvas) == null || ve.call(i, !0, !0), B();
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
  function h(F) {
    const L = F.target.closest("[data-action='param-input']");
    L && R(String(L.getAttribute("data-param-key") || ""), L.value, !1);
  }
  function x(F) {
    const L = F.target.closest("[data-action='param-input']");
    L && R(String(L.getAttribute("data-param-key") || ""), L.value, !0);
  }
  return {
    connect(F) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: m,
        buildCanonicalSelectedStickerState: S,
        closeEditor: g,
        commitAndRefreshNode: b,
        commitState: y,
        getActiveCutoutShot: K,
        getCutoutInspectorItems: H,
        getList: D,
        getSelected: N,
        getSelectedItems: $,
        getSelectedKind: V,
        isItemLocked: W,
        isSceneSticker: ye,
        isStrokeGroupItem: Se,
        markObjectVisualsDirty: me,
        persistUiSettings: ie,
        poseOf: ke,
        pushHistory: de,
        releaseHiddenSelection: ue,
        requestDraw: B,
        revertPortHandoffLane: he,
        revertUpstreamSticker: ne,
        selectedWorldSticker: T,
        setSelectedItem: G,
        stopTimelinePlayback: A,
        syncCoverageChangeToNodePreviews: pe,
        syncCutoutShot: P,
        turnViewTo: I,
        updateSelectionMenu: w,
        updateSidePanel: M,
        worldStickerEditable: ae,
        writePose: ee
      } = F);
    },
    onSidePanelClick: p,
    onSidePanelInput: h,
    onSidePanelChange: x
  };
}
function zC(e) {
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
  let S, g, b, y, K, H, D, N, $, V, W, ye, Se, me, ie, ke, de, ue, B, he, ne, T, G, A, pe, P, I, w, M, ae, ee, R, v, U, p, h, x, F, L, J, le, k, j, _, O, Y, ve, _e, xe, Z, be;
  const z = () => {
    if (!t.customPaintSessionStart) return;
    if (Aa(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (tA(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ae = [
      vn(t.customPaintColor),
      ...t.customPaintHistory.filter(($e) => !Aa($e, t.customPaintColor))
    ];
    t.customPaintHistory = Ae.slice(0, 8), t.customPaintSessionStart = null;
  }, oe = (Ae = !1) => {
    !i || i.hidden || (Ae ? z() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, q = () => {
    i && (i.hidden && (t.customPaintSessionStart = vn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function re() {
    L();
  }
  function Q(Ae) {
    var ct, at, St, st, Mt;
    if ((at = (ct = Ae.target) == null ? void 0 : ct.matches) != null && at.call(ct, "[data-confirm-overlay]")) {
      const Ye = (St = f.confirmDialog) == null ? void 0 : St.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ye == null || Ye(!1);
      return;
    }
    const $e = Ae.target.closest("[data-space-mode]");
    if ($e) {
      U($e.getAttribute("data-space-mode"));
      return;
    }
    const ce = Ae.target.closest("[data-gizmo-mode]");
    if (ce) {
      t.gizmoMode = ce.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, xe(), w({ localOnly: !0, reason: it.VIEW });
      return;
    }
    const Ne = Ae.target.closest("[data-view]");
    if (Ne) {
      if (Ne.getAttribute("aria-disabled") === "true") return;
      const Ye = t.mode;
      t.mode = String(Ne.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (Ye !== "frame" && (c.frameSafeRect = null), Z(), xe()), me(), j(), w();
      return;
    }
    const Ie = Ae.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ie && !a) {
      if (Ie.matches("[data-tool-mode]")) {
        const Ye = String(Ie.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ye, (Ye === "paint" || Ye === "mask") && $({ preservePanelValues: !0 }), J(), Z(), xe(), w();
        return;
      }
      if (Ie.matches("[data-tool-ui-action]")) {
        const Ye = String(Ie.getAttribute("data-tool-ui-action") || "");
        if ((Ye === "undo" || Ye === "redo") && Ie.disabled) return;
        Ye === "undo" ? M(-1) : Ye === "redo" ? M(1) : Ye === "clear" ? D() : Ye === "add" || Ye === "add-image" ? g() : Ye === "add-world" ? y() : Ye === "add-or-look" ? S() : Ye === "add-camera" && b();
        return;
      }
      if (Ie.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ye = String(Ie.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ye, $({ preservePanelValues: !0 }), pn[Ye] && (t.activeBrushPresetId = Ye), J(), Z(), xe(), w();
        return;
      }
      if (Ie.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ie.getAttribute("data-mask-tool") || "pen"), $({ preservePanelValues: !0 }), J(), Z(), xe(), w();
        return;
      }
      if (Ie.matches("[data-paint-layer-clear-current]")) {
        const Ye = String(Ie.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        N(Ye);
        return;
      }
      if (Ie.matches("[data-paint-color-swatch]")) {
        const Ye = el.find((Zt) => Zt.id === Ie.getAttribute("data-paint-color-swatch"));
        if (!Ye) return;
        t.paintColor = vn(Ye.color), oe(!0), J();
        return;
      }
      if (Ie.matches("[data-paint-color-custom]")) {
        Ae.preventDefault(), Ae.stopPropagation(), i && !i.hidden ? oe(!0) : q(), J();
        return;
      }
    }
    const Ee = String(((st = Ie == null ? void 0 : Ie.getAttribute) == null ? void 0 : st.call(Ie, "data-action")) || "");
    if (Ee === "video-play-toggle") {
      if (Ae.preventDefault(), Ae.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub = !1, _();
      return;
    }
    if (Ee === "video-audio-toggle") {
      Ae.preventDefault(), Ae.stopPropagation(), ve(), typeof (Ie == null ? void 0 : Ie.blur) == "function" && Ie.blur();
      return;
    }
    if (Ee === "video-loop-toggle") {
      if (Ae.preventDefault(), Ae.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      const Ye = !f.videoTransport.loop;
      f.videoTransport.loop = Ye, m.loop = Ye, k({
        hasAudio: f.videoTransport.hasAudio,
        loop: Ye,
        muted: m.muted,
        volume: Number(m.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ie == null ? void 0 : Ie.blur) == "function" && Ie.blur();
      return;
    }
    if (!a) {
      if (Ee === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Ee === "frame-aspect-set") {
        const Ye = t.mode === "frame" ? ke() : null;
        if (!Ye || Ye.locked === !0) return;
        v(Ye, String(Ie.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, le(), pe(), V(), j(), Z(), xe(), w();
        return;
      }
      if (Ee === "frame-aspect-custom") {
        const Ye = t.mode === "frame" ? ke() : null, Zt = Ie.getAttribute("data-custom-width"), jt = Ie.getAttribute("data-custom-height");
        if (!Ye || !K(Ye, Zt, jt)) return;
        f.frameRail.aspectOpen = !1, le(), pe(), V(), j(), w();
        return;
      }
      if (Ee === "frame-rotate-90") {
        const Ye = t.mode === "frame" ? ke() : null;
        if (!Ye || Ye.locked === !0) return;
        ee(Ye), f.frameRail.aspectOpen = !1, le(), pe(), V(), j(), w();
        return;
      }
      if (Ee === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, xe(), w();
        return;
      }
      if (Ee === "aspect-set") {
        const Ye = ue();
        if (!Ye) return;
        const Zt = String(Ie.getAttribute("data-aspect") || "1:1");
        v(Ye, Zt), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, le(), pe(), V(), xe(), w();
        return;
      }
      if (Ee === "rotate-90") {
        const Ye = ue();
        if (!Ye || ne()) return;
        ee(Ye), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, le(), pe(), V(), xe(), w();
        return;
      }
      if (Ee === "bring-front") {
        H();
        return;
      }
      if (Ee === "send-back") {
        R();
        return;
      }
      if (Ee === "duplicate") {
        Se();
        return;
      }
      if (Ee === "replace-image") {
        I();
        return;
      }
      if (Ee === "toggle-lock") {
        Y();
        return;
      }
      if (Ee === "back-initial") {
        ae();
        return;
      }
      if (Ee === "toggle-visible") {
        O();
        return;
      }
      if (Ee === "delete") {
        ye();
        return;
      }
    }
    if (Ee === "reset-view") {
      if (t.mode === "frame") return;
      _e(
        { position: x(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Mt = W()) == null ? void 0 : Mt.radius) || Hn },
        { mode: Ca(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Ee === "frame-view") {
      if (!T() || Ca(t.spaceMode, t.viewTransition) !== "6dof") return;
      ie();
      return;
    }
    if (Ee === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, uA(n == null ? void 0 : n.id, t.showGrid), re(), w();
      return;
    }
    if (Ee === "toggle-fullscreen") {
      Ae.preventDefault(), Ae.stopPropagation(), Te();
      return;
    }
    if (Ee === "toggle-output-preview-size") {
      Ae.preventDefault(), Ae.stopPropagation();
      const Ye = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ye, F(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ye ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), ze(), w();
      return;
    }
    const je = Ae.target.closest("[data-paint-history-index]");
    if (!je) return;
    const Ge = Number(je.getAttribute("data-paint-history-index")), Be = t.customPaintHistory[Ge];
    Be && (t.customPaintColor = vn(Be), t.paintColor = vn(Be), J());
  }
  function te(Ae) {
    const $e = Ae.target.closest("[data-video-seek]");
    if ($e) {
      if (!(m instanceof HTMLVideoElement)) return;
      G.playing && (be.resumeAfterScrub = !0), G.seek(Yr(Number($e.value || 0), A()));
      return;
    }
    const ce = Ae.target.closest("[data-video-volume]");
    if (ce) {
      if (!(m instanceof HTMLVideoElement)) return;
      const Ee = Fe(Number(ce.value || 0), 0, 1);
      m.volume = Ee, m.muted = Ee <= 1e-4, k({
        hasAudio: f.videoTransport.hasAudio,
        muted: m.muted,
        volume: Ee
      });
      return;
    }
    const Ne = Ae.target.closest("[data-paint-size-slider]");
    if (Ne) {
      if (Ne.disabled) return;
      const Ee = Math.max(1, Math.min(120, Math.round(Number(Ne.value)))), je = de(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[je] = Ee, J(), p();
      return;
    }
    const Ie = Ae.target.closest("[data-paint-alpha-slider]");
    if (Ie) {
      const Ee = { ...t.customPaintColor, a: Fe(Number(Ie.value) / 100, 0, 1) };
      t.customPaintColor = vn(Ee), t.paintColor = vn(Ee), J();
    }
  }
  function X(Ae) {
    var $e;
    if (Ae.target.closest("[data-video-seek]")) {
      if (!(m instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub && G.play(), be.resumeAfterScrub = !1;
      return;
    }
    if (Ae.target.closest("[data-video-volume]")) {
      typeof (($e = Ae.target) == null ? void 0 : $e.blur) == "function" && Ae.target.blur();
      return;
    }
    Ae.target.closest("[data-paint-size-slider]") && B();
  }
  function C(Ae) {
    const $e = Ae.target.closest("[data-tip]");
    !$e || !l.contains($e) || u.target !== $e && (u.target = $e, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === $e && h($e);
    }, 220));
  }
  function se(Ae) {
    var Ne, Ie;
    const $e = Ae.target.closest("[data-tip]");
    !$e || u.target !== $e || (Ae.relatedTarget instanceof Element ? (Ie = (Ne = Ae.relatedTarget).closest) == null ? void 0 : Ie.call(Ne, "[data-tip]") : null) === $e || he();
  }
  function fe(Ae, $e) {
    var Ge;
    if (!o) return;
    const ce = o.getBoundingClientRect(), Ne = Fe((Ae - ce.left) / Math.max(1, ce.width), 0, 1), Ie = 1 - Fe(($e - ce.top) / Math.max(1, ce.height), 0, 1), Ee = Uc(t.customPaintColor), je = { ...Wc(Ee.h, Ne, Ie), a: Number(((Ge = t.customPaintColor) == null ? void 0 : Ge.a) ?? 1) };
    t.customPaintColor = vn(je), t.paintColor = vn(je), J();
  }
  function we(Ae) {
    var Ee;
    if (!s) return;
    const $e = s.getBoundingClientRect(), ce = Fe((Ae - $e.left) / Math.max(1, $e.width), 0, 1), Ne = Uc(t.customPaintColor), Ie = { ...Wc(ce, Ne.s, Ne.v), a: Number(((Ee = t.customPaintColor) == null ? void 0 : Ee.a) ?? 1) };
    t.customPaintColor = vn(Ie), t.paintColor = vn(Ie), J();
  }
  function E(Ae, $e) {
    const ce = Ae.pointerId;
    $e(Ae);
    const Ne = (Ee) => {
      Ee.pointerId === ce && $e(Ee);
    }, Ie = (Ee) => {
      Ee.pointerId === ce && (window.removeEventListener("pointermove", Ne), window.removeEventListener("pointerup", Ie), window.removeEventListener("pointercancel", Ie));
    };
    window.addEventListener("pointermove", Ne), window.addEventListener("pointerup", Ie), window.addEventListener("pointercancel", Ie);
  }
  function ge() {
    const Ae = !!t.fullscreen;
    Mi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ae ? He.fullscreen_close : He.fullscreen,
      label: Ae ? "Exit Fullscreen" : "Fullscreen",
      tip: Ae ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Pe(Ae) {
    const $e = !!Ae;
    t.fullscreen !== $e && (t.fullscreen = $e, l.classList.toggle("pano-modal-fullscreen", $e), $e ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), re(), ge(), P(), w());
  }
  function Ce() {
    return document.fullscreenElement === r;
  }
  async function Te() {
    var Ae, $e;
    try {
      if (!document.fullscreenEnabled) {
        Pe(!t.fullscreen);
        return;
      }
      Ce() ? await (($e = document.exitFullscreen) == null ? void 0 : $e.call(document)) : await ((Ae = r.requestFullscreen) == null ? void 0 : Ae.call(r));
    } catch {
      Pe(!t.fullscreen);
    }
  }
  function Le() {
    document.fullscreenEnabled && Pe(Ce());
  }
  function ze() {
    const Ae = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ae ? He.fullscreen_close : He.fullscreen, f.outputPreviewToggle.label = Ae ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ae ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ae) {
      ({
        addCutoutFrame: S,
        addImageSticker: g,
        addStudioCamera: b,
        addWorldImageSticker: y,
        applyCutoutAspectCustom: K,
        bringSelectedToFront: H,
        clearAll: D,
        clearPaintingLayer: N,
        clearSelection: $,
        commitAndRefreshNode: V,
        contentSphere: W,
        deleteSelected: ye,
        duplicateSelected: Se,
        forceCursorTool: me,
        frameSpaceContent: ie,
        getActiveCutoutShot: ke,
        getBrushPresetIdForTool: de,
        getSelected: ue,
        hidePaintSizePreview: B,
        hideTooltip: he,
        isErpCamera: ne,
        isFreeSpaceView: T,
        playback: G,
        playbackFps: A,
        pushHistory: pe,
        queueVideoTransportLayout: P,
        replaceSelectedImage: I,
        requestDraw: w,
        restoreHistory: M,
        restoreSelectedToInitialPose: ae,
        rotateCutoutAspect90: ee,
        sendSelectedToBack: R,
        setShotAspect: v,
        setSpaceMode: U,
        showPaintSizePreview: p,
        showTooltipFor: h,
        spaceOrigin: x,
        startAnimation: F,
        syncFloatingViewButtonState: L,
        syncPaintUi: J,
        syncSidePanelControls: le,
        syncVideoTransportState: k,
        syncViewToggleState: j,
        togglePlayback: _,
        toggleSelectedExternalStickerVisibility: O,
        toggleSelectedLock: Y,
        toggleVideoMuted: ve,
        transitionView: _e,
        updateSelectionMenu: xe,
        updateSidePanel: Z,
        videoState: be
      } = Ae);
    },
    closePaintColorPop: oe,
    syncGridToggleButton: re,
    onRootClick: Q,
    onRootInput: te,
    onRootChange: X,
    onRootPointerOver: C,
    onRootPointerOut: se,
    updatePaintColorFromSv: fe,
    updatePaintColorFromHue: we,
    bindDrag: E,
    syncFullscreenButton: ge,
    setFullscreenState: Pe,
    onFullscreenChange: Le,
    syncOutputPreviewToggleButton: ze
  };
}
function jC(e) {
  const {
    editor: t,
    overlay: n,
    readOnly: r,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, m, S, g, b, y, K, H, D, N, $;
  const V = XA();
  function W(P) {
    var I, w, M, ae, ee;
    if (P.key === "Escape") {
      if (l()) {
        P.preventDefault(), P.stopPropagation(), (I = P.stopImmediatePropagation) == null || I.call(P);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === n) {
        P.preventDefault(), P.stopPropagation(), (w = P.stopImmediatePropagation) == null || w.call(P), (M = document.exitFullscreen) == null || M.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        P.preventDefault(), P.stopPropagation(), (ae = P.stopImmediatePropagation) == null || ae.call(P), K(!1);
        return;
      }
      P.preventDefault(), P.stopPropagation(), (ee = P.stopImmediatePropagation) == null || ee.call(P), d();
    }
  }
  function ye(P) {
    const I = String(P.key || ""), w = String(P.code || ""), M = Number(P.keyCode || 0);
    if (!(I === "Delete" || w === "Delete" || M === 46) && !(I === "Backspace" || w === "Backspace" || M === 8)) return;
    const R = P.target, v = ((R == null ? void 0 : R.tagName) || "").toUpperCase();
    if (v === "INPUT" || v === "TEXTAREA" || R != null && R.isContentEditable) return;
    if (o.selection) {
      f(), P.preventDefault(), P.stopPropagation();
      return;
    }
    if (m()) {
      P.preventDefault(), P.stopPropagation();
      return;
    }
    b() && (u(), P.preventDefault(), P.stopPropagation());
  }
  function Se(P) {
    if (s.confirmDialog.visible) return !1;
    const I = P.composedPath()[0];
    if (I !== document.body && I !== document.documentElement && !n.contains(I)) return !1;
    const w = ((I == null ? void 0 : I.tagName) || "").toUpperCase();
    return w === "INPUT" ? !L2.has(String(I.type || "text").toLowerCase()) : w !== "TEXTAREA" && w !== "SELECT" && !(I != null && I.isContentEditable);
  }
  function me(P) {
    return P.code !== "Space" || P.ctrlKey || P.metaKey || P.altKey || r || !i || !s.timeline.visible ? !1 : Se(P);
  }
  function ie(P) {
    me(P) && (P.preventDefault(), P.stopPropagation(), P.repeat || N());
  }
  function ke(P) {
    me(P) && (P.preventDefault(), P.stopPropagation());
  }
  function de(P) {
    if (V.modifiers(P), !!O0(P.code)) {
      if (!Se(P)) {
        B(P.code);
        return;
      }
      P.ctrlKey || P.metaKey || (P.preventDefault(), P.stopPropagation(), a() && (V.press(P.code, P.timeStamp), P.repeat || c(), H(() => {
      })));
    }
  }
  function ue(P) {
    V.modifiers(P), P.key === "Meta" && he(), B(P.code) && (P.preventDefault(), P.stopPropagation());
  }
  function B(P) {
    return V.release(P) ? (V.held || S(), !0) : !1;
  }
  function he() {
    V.held && (V.releaseAll(), S());
  }
  function ne() {
    document.hidden && he();
  }
  function T() {
    he();
  }
  function G(P) {
    const I = !!(P.ctrlKey || P.metaKey), w = !!P.altKey;
    t.marqueeModifier === I && t.altModifier === w || (t.marqueeModifier = I, t.altModifier = w, D(), $(t.pointerPos));
  }
  function A() {
    he(), t.marqueeModifier = !1, t.altModifier = !1, D(), $(t.pointerPos);
  }
  function pe(P) {
    if (r || !P.ctrlKey && !P.metaKey) return;
    const I = String(P.key || "").toLowerCase(), w = String(P.code || "");
    if (I !== "z" && w !== "KeyZ") return;
    const M = P.target, ae = ((M == null ? void 0 : M.tagName) || "").toUpperCase();
    if (ae === "INPUT" || ae === "TEXTAREA" || M != null && M.isContentEditable) return;
    const { canUndo: ee, canRedo: R } = g();
    P.shiftKey && !R || !P.shiftKey && !ee || (y(P.shiftKey ? 1 : -1), P.preventDefault(), P.stopPropagation());
  }
  return {
    connect(P) {
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
        getSelected: b,
        restoreHistory: y,
        setFullscreenState: K,
        startAnimation: H,
        syncFrameRollKnob: D,
        togglePlayback: N,
        updateCursor: $
      } = P);
    },
    moveKeys: V,
    onEscClose: W,
    onDeleteKey: ye,
    onSpaceKey: ie,
    onSpaceKeyUp: ke,
    onMoveKeyDown: de,
    onMoveKeyUp: ue,
    onVisibilityChange: ne,
    onContextMenu: T,
    onModifierKeyChange: G,
    onWindowBlur: A,
    onUndoRedoKey: pe
  };
}
const Mp = /* @__PURE__ */ new Map(), Fr = ug({
  app: zn,
  api: Yt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Gc,
    markImageFailed: h0,
    markImageLoading: p0,
    markImageReady: m0
  }
});
function Pp(e) {
  if (!bt(e, "background") || !bt(e, "external-sticker")) return null;
  const t = Fr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Rr(t[0]) : null;
}
const HC = Fr.assetSource, GC = Fr.source, KC = Fr.uiImage, WC = Fr.invalidateUiImage, Np = Fr.loadPreferredExactLinkedImage;
async function UC(e, t, n = {}) {
  var Cd, Id, Ed, as, Od;
  await qg(e, { tolerateOperationFailure: !0 }), Fr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, s = rA(e, t);
  await nd();
  const a = xs(e, "output_preset"), l = xs(e, "coverage"), c = xs(e, "bg_color"), d = xs(e, R2), u = () => {
    const Ve = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Np(
      e,
      Ve,
      () => Kn(),
      `background:size:${Ve.join("|")}`
    );
  }, f = () => {
    const Ve = u();
    return sA(Ve);
  }, m = (Ve = 2048) => {
    const et = a == null ? void 0 : a.value;
    return oA(et) ? f() || Math.max(1, Math.round(Number(Ve || 2048))) : iA(et, Ve);
  }, S = e.__panoSceneStateV2 === !0, g = t === "stickers" && S, b = g && e.__panoStudio === !0, y = b, K = t === "cutout" || b, H = (S ? kh : wh)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: m(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: yn(l == null ? void 0 : l.value),
    sharedUiSettings: aA(),
    active: Ah(e),
    fps: S ? Pp(e) : null
  });
  wn(e).liveState = H, wn(e).liveStateVersion = 0;
  let D = null;
  y ? (D = H.camera && H.camera.visible !== !1 ? Ph(H.camera, 0) : null, H.shots = D ? [{ ...D, position: [...D.position] }] : [], H.active.selected_shot_id = null) : t === "cutout" && (H.shots = Array.isArray(H.shots) ? H.shots.slice(0, 1) : [], H.shots.length || (H.active.selected_shot_id = null));
  const N = t === "cutout" ? (() => {
    var Dn;
    const Ve = Array.isArray(H.shots) ? H.shots : [], et = String(((Dn = H == null ? void 0 : H.active) == null ? void 0 : Dn.selected_shot_id) || "");
    return Ve.find((Kt) => String((Kt == null ? void 0 : Kt.id) || "") === et) || Ve[0] || null;
  })() : null, $ = N ? T0(N, !1) : { width: 220, height: 132 }, V = f0(b ? "studio" : t), W = /* @__PURE__ */ Ki({
    stageStatus: Rn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (V.viewButtons || []).map((Ve) => ({ ...Ve, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Cd = V.spaceButtons) != null && Cd.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: V.spaceButtons, frame: V.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (V.toolButtons || []).map((Ve) => ({
      ...Ve,
      disabled: !1,
      ...Ve.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(V.floatingButtons || []).map((Ve) => ({ ...Ve, disabled: !1 })),
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
      customColorCss: Xn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Xn({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      label: N ? "Loading preview" : "Add Frame to preview"
    }
  }), ye = { frame: /* @__PURE__ */ Bs(0), playing: /* @__PURE__ */ Bs(!1) }, Se = document.createElement("div");
  document.body.appendChild(Se);
  const me = ({ intent: Ve, file: et } = {}) => {
    if (Ln(et)) {
      if (Ve === "add") {
        Ce(et);
        return;
      }
      if (Ve === "add-world") {
        Te(et);
        return;
      }
      Ve === "replace" && W0(et);
    }
  }, ie = ({ intent: Ve } = {}) => {
  }, ke = du(T2, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: V,
    paintSwatches: el.map((Ve) => ({
      id: Ve.id,
      label: Ve.label,
      cssColor: Xn(Ve.color, 1)
    })),
    uiState: W,
    playhead: ye,
    onClose: () => {
      sl();
    },
    onTimeline: (Ve) => G0(Ve),
    onImageFileSelected: me,
    onImageFileCancelled: ie
  });
  let de = null;
  try {
    de = ke.mount(Se);
  } catch (Ve) {
    try {
      ke.unmount();
    } catch {
    }
    throw Se.remove(), Ve;
  }
  const ue = Se.querySelector(".pano-modal-overlay"), B = Se.querySelector(".pano-modal"), he = B == null ? void 0 : B.querySelector("[data-stage-overlay]"), ne = B == null ? void 0 : B.querySelector("[data-stage-background]"), T = B == null ? void 0 : B.querySelector(".pano-stage-wrap"), G = ((Id = de == null ? void 0 : de.getPaintOverlayRefs) == null ? void 0 : Id.call(de)) || {}, A = G.cursor || null, pe = G.sizePreview || null, P = G.sizeSample || null;
  if (!ue || !B || !he || !ne || !T || !A || !pe || !P)
    throw ke.unmount(), Se.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const I = he.getContext("2d"), w = B.querySelector("[data-side]"), M = B.querySelector("[data-video-element]"), ae = B.querySelector("[data-port-video-element]");
  vl(he, "editor.stage-overlay"), vl(ne, "editor.stage-background"), Sf(M, "editor.video"), Sf(ae, "editor.port-video");
  const ee = B.querySelector(".pano-floating-right"), R = B.querySelector(".pano-floating-top"), v = B.querySelector("[data-tool-rail]"), U = B.querySelector("[data-frame-rail]"), p = B.querySelector("[data-frame-roll-knob]"), h = B.querySelector("[data-paint-dock]"), x = B.querySelector(".pano-video-transport"), F = B.querySelector("[data-selection-menu]"), L = B.querySelector("[data-tooltip]"), J = B.querySelector("[data-camera-preview-host]"), le = B.querySelector("[data-camera-preview-canvas]");
  vl(le, "editor.camera-preview");
  const k = B.querySelector("[data-paint-color-row]"), j = B.querySelector("[data-paint-color-pop]"), _ = B.querySelector("[data-paint-color-sv]"), O = B.querySelector("[data-paint-color-sv-cursor]"), Y = B.querySelector("[data-paint-hue-strip]"), ve = B.querySelector("[data-paint-hue-handle]");
  T == null || T.removeAttribute("data-stage-ready"), T == null || T.setAttribute("data-stage-loading-kind", "boot"), he.style.opacity = "1", ne.style.opacity = "0", i && (w == null || w.remove(), B.classList.add("pano-modal-readonly")), B.addEventListener("pointerdown", () => X.wake(), !0), B.addEventListener("pointerdown", (Ve) => {
    var et;
    Ve.target.closest("[data-frame-roll-knob]") || Mt(), !Ve.target.closest(".pano-picker") && (Ve.target.closest("[data-paint-color-row]") || (B.querySelectorAll(".pano-picker-pop").forEach((Dn) => {
      Dn.hidden = !0;
    }), ce(!0), K && xe.cutoutAspectOpen && !Ve.target.closest(".pano-aspect-popover") && !Ve.target.closest("[data-action='aspect']") && (xe.cutoutAspectOpen = !1, xe.menuMode = "", xe.menuSize.measured = !1, py(), Kn()), (et = W.frameRail) != null && et.aspectOpen && !Ve.target.closest(".pano-frame-aspect-control") && (W.frameRail.aspectOpen = !1)));
  });
  const xe = {
    mode: "pano",
    selectedId: P0(t, H),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Hn,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: yn(H.coverage),
    historyController: bA(H),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: cr,
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
    showGrid: cA(e == null ? void 0 : e.id, !0),
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
    paintEngine: Xa(),
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
  }, Z = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (xe.selectedId = null, H.active.selected_sticker_id = null), xe.selectedIds = xe.selectedId ? [xe.selectedId] : [];
  const be = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), re = zt({ label: "editor.still" });
  re.__panoFrameIdx = 0;
  const Q = zt({ label: "editor.port-still" });
  Q.__panoFrameIdx = 0;
  const te = {
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
  }, X = SM({
    requestAnimationFrame: (Ve) => requestAnimationFrame(Ve),
    cancelAnimationFrame: (Ve) => cancelAnimationFrame(Ve),
    draw: (Ve, et) => cy(Ve, et),
    animating: () => je()
  }), C = bM({
    requestFrame: (Ve) => X.requestFrame(Ve),
    cancelFrame: (Ve) => X.cancelFrame(Ve),
    tasks: {
      seek: () => kd.seek(Z.scrubFrame),
      // A drag of the background's Clip range seeks its VIDEO to the time it puts at the playhead.
      background: () => kd.seek(xe.frame),
      timeline: () => ay(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        ey(), Kn({ localOnly: !0, reason: it.STATE });
      },
      sidePanel: () => Pd()
    }
  }), se = j_({
    canvas: ne,
    onReady: () => {
      rl(), Kn({ reason: it.CONTEXT });
    },
    onFailed: () => Kn(),
    onUpdate: () => Kn({ localOnly: !0, reason: it.MEDIA }),
    onSplats: (Ve) => Kn({ localOnly: !0, reason: hC(Ve) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      at(), rl(), Kn({ reason: it.CONTEXT });
    }
  }), fe = Number.parseFloat(
    getComputedStyle(B).getPropertyValue("--pano-float-radius")
  ) || 10, we = (Ve) => {
    const et = String(Ve || "default");
    he.style.cursor !== et && (he.style.cursor = et);
  }, E = {
    timer: 0,
    target: null
  }, ge = {
    active: !1,
    depth: 0
  }, Pe = pu({
    getView: () => ({ yaw: xe.viewYaw, pitch: xe.viewPitch, fov: xe.viewFov }),
    setView: (Ve) => {
      xe.viewYaw = Et(Number(Ve.yaw || 0)), xe.viewPitch = Fe(Number(Ve.pitch || 0), -89.9, 89.9), xe.viewFov = Fe(Number(Ve.fov || xe.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Ve = he.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Ve.width || he.clientWidth || 0)),
        h: Math.max(1, Number(Ve.height || he.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Ve, et;
      return {
        x: (Ve = H.ui_settings) != null && Ve.invert_view_x ? -1 : 1,
        y: (et = H.ui_settings) != null && et.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => St(),
    onInteraction: () => X.requestDraw(it.VIEW)
  }), {
    addImageStickerFromFile: Ce,
    addWorldStickerFromFile: Te,
    applyInitialCutoutFocus: Le,
    applyVideoTimelineFps: ze,
    bindDrag: Ae,
    cancelFrameCameraGesture: $e,
    closePaintColorPop: ce,
    commitState: Ne,
    disposeMediaSession: Ie,
    disposeUpstream: Ee,
    editorAnimating: je,
    endFrameKeyMove: Ge,
    finishKnobRoll: Be,
    flushFrameWheelCommit: ct,
    forgetCameraPreviewFrame: at,
    getUnwrapRect: St,
    hidePaintSizePreview: st,
    hideTooltip: Mt,
    hoverWorldGizmo: Ye,
    isFreeFrameView: Zt,
    isFreeSpaceView: jt,
    migrateLegacyEmbeddedAssets: fi,
    onCanvasDragOver: pi,
    onCanvasDrop: mi,
    onCanvasMouseMove: Gt,
    onCanvasPointerCancel: Re,
    onCanvasPointerDown: Ke,
    onCanvasPointerMove: We,
    onCanvasPointerUp: Pt,
    onCanvasWheel: ht,
    onContextMenu: bn,
    onDeleteKey: Ht,
    onEscClose: Ot,
    onFrameRollKnobDoubleClick: Fn,
    onFrameRollKnobPointerDown: is,
    onFrameRollKnobPointerMove: cn,
    onFullscreenChange: os,
    onModifierKeyChange: ss,
    onMoveKeyDown: fd,
    onMoveKeyUp: pd,
    onRootChange: D0,
    onRootClick: R0,
    onRootInput: L0,
    onRootPointerOut: V0,
    onRootPointerOver: $0,
    onSidePanelChange: z0,
    onSidePanelClick: j0,
    onSidePanelInput: H0,
    onSpaceKey: md,
    onSpaceKeyUp: hd,
    onTimelineAction: G0,
    onUndoRedoKey: gd,
    onVisibilityChange: yd,
    onWindowBlur: bd,
    onWindowDragEnter: vd,
    onWindowDragLeave: Sd,
    onWindowDragOver: _d,
    onWindowDrop: wd,
    playback: kd,
    pushHistory: K0,
    reconcileExternalStickerFromInputs: xd,
    refreshModalVideoSource: nl,
    replaceSelectedImageFromFile: W0,
    requestDraw: Kn,
    restoreView: U0,
    sampleEditorDiagnostics: B0,
    saveView: Y0,
    setDropCue: q0,
    setPointerPos: X0,
    stageResizeObserver: J0,
    stickerCornerOrderSanity: Z0,
    stopRenderLoop: Q0,
    syncCanvasSize: rl,
    syncCutoutShot: ey,
    syncFullscreenButton: ty,
    syncGridToggleButton: ny,
    syncLookAtFrameButtonState: ry,
    syncOutputPreviewToggleButton: iy,
    syncPaintUi: oy,
    syncPaintingLayerAsync: sy,
    syncTimeline: ay,
    syncUndoRedoButtons: ly,
    tick: cy,
    triggerBackgroundPersistenceOnClose: uy,
    updateCursor: Md,
    updatePaintColorFromHue: dy,
    updatePaintColorFromSv: fy,
    updateSelectionMenu: py,
    updateSidePanel: Pd,
    viewControls: my,
    watchPixelRatio: hy
  } = dA({
    api: Yt,
    app: zn,
    backgroundCanvas: ne,
    bgWidget: c,
    cameraV2: y,
    canvas: he,
    closeEditor: sl,
    comfyMedia: Fr,
    coverageWidget: l,
    ctx: I,
    cutoutPreviewCanvas: le,
    cutoutPreviewHost: J,
    dragCue: ge,
    dragFrames: C,
    editor: xe,
    editorView: se,
    floatingRightEl: ee,
    floatingTopEl: R,
    frameGateCssRadius: fe,
    frameRailEl: U,
    frameRollKnobEl: p,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: D,
    loadPreferredExactLinkedImage: Np,
    mediaAssetSource: HC,
    mediaSource: GC,
    mediaUiImage: KC,
    node: e,
    overlay: ue,
    paintColorPop: j,
    paintColorRow: k,
    paintColorSv: _,
    paintColorSvCursor: O,
    paintCursorEl: A,
    paintDockEl: h,
    paintHueHandle: ve,
    paintHueStrip: Y,
    paintSizePreviewEl: pe,
    paintSizePreviewSampleEl: P,
    portStillCanvas: Q,
    portVideoEl: ae,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: q,
    rasterImageAlphaCache: oe,
    rasterImageCache: z,
    readOnly: r,
    resolveEditorOutputPresetWidth: m,
    root: B,
    runtime: te,
    sceneV2: g,
    scheduler: X,
    selectionMenu: F,
    setCanvasCursor: we,
    shotEditor: K,
    stageWrap: T,
    state: H,
    stateV2: S,
    stateWidget: d,
    stillCanvas: re,
    studio: b,
    timeline: Z,
    timelinePlayhead: ye,
    toolRailEl: v,
    tooltip: E,
    tooltipEl: L,
    type: t,
    uiState: W,
    videoEl: M,
    videoTimelineFps: Pp,
    videoTransportEl: x,
    viewController: Pe,
    vueModal: de
  }, [
    hA,
    vA,
    SA,
    _A,
    wA,
    kA,
    xA,
    MA,
    PA,
    fC,
    pC,
    mC,
    yC,
    bC,
    vC,
    SC,
    _C,
    wC,
    kC,
    xC,
    MC,
    PC,
    NC,
    AC,
    CC,
    IC,
    EC,
    OC,
    FC,
    TC,
    DC,
    RC,
    LC,
    VC,
    $C,
    zC,
    jC
  ]);
  Z0(), J0.observe(he), hy();
  const Nd = () => Ne();
  r || (Ho(e).flushBeforeQueue = Nd), p == null || p.addEventListener("pointerdown", is), p == null || p.addEventListener("pointermove", cn), p == null || p.addEventListener("pointerup", Be), p == null || p.addEventListener("pointercancel", () => $e()), p == null || p.addEventListener("lostpointercapture", () => {
    var Ve;
    ((Ve = xe.interaction) == null ? void 0 : Ve.source) === "knob" && $e();
  }), p == null || p.addEventListener("dblclick", Fn), he.onpointerdown = Ke, he.onpointermove = We, he.onpointerup = Pt, he.onpointercancel = Re, he.onlostpointercapture = () => {
    $e();
  }, he.onauxclick = (Ve) => {
    Ve.button === 1 && Ve.preventDefault();
  }, he.oncontextmenu = (Ve) => {
    (jt() || Zt()) && Uk(my(), 2) && Ve.preventDefault();
  }, he.onmousemove = Gt, he.onpointerleave = () => {
    xe.interaction || Ye({ x: -1e6, y: -1e6 });
  }, he.onmouseleave = () => {
    X0(xe.pointerPos, !1), Md(xe.pointerPos), xe.mode === "frame" && xe.primaryTool === "cursor" && Kn({ localOnly: !0, reason: it.OVERLAY });
  }, he.onwheel = ht, he.ondragover = pi, he.ondrop = mi, window.addEventListener("dragenter", vd, !0), window.addEventListener("dragover", _d, !0), window.addEventListener("dragleave", Sd, !0), window.addEventListener("drop", wd, !0), w == null || w.addEventListener("click", j0), w == null || w.addEventListener("input", H0), w == null || w.addEventListener("change", z0), ny(), B.addEventListener("click", R0), B.addEventListener("input", L0), B.addEventListener("change", D0), B.addEventListener("pointerup", (Ve) => {
    var et;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((et = Ve.target) == null ? void 0 : et.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && st();
  }), B.addEventListener("pointercancel", (Ve) => {
    var et;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((et = Ve.target) == null ? void 0 : et.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && st();
  }), B.addEventListener("focusout", (Ve) => {
    Ve.target.closest("[data-paint-size-slider]") && st();
  }), B.addEventListener("pointerover", $0), B.addEventListener("pointerout", V0), B.addEventListener("pointerdown", (Ve) => {
    Ve.target.closest("[data-frame-roll-knob]") || Mt();
  }), _ && (_.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), Ae(Ve, (et) => fy(et.clientX, et.clientY));
  }), Y && (Y.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), Ae(Ve, (et) => dy(et.clientX));
  }), B.addEventListener("click", (Ve) => {
    var zr;
    const et = Ve.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!et) return;
    const Dn = et.getAttribute("data-action") === "confirm-accept", Kt = (zr = W.confirmDialog) == null ? void 0 : zr.resolve;
    W.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Kt == null || Kt(Dn);
  }), document.addEventListener("fullscreenchange", os), ty(), iy();
  const il = e.onConnectionsChange;
  let ol = null, Ad = () => {
  };
  !r && t === "stickers" && (Ad = Bg(e, (Ve = "sync") => {
    Ve === "executed" && (WC(be, ri), nl(), g && ze()), xd(Ve);
  }, { editor: !0 }), ol = function(...et) {
    typeof il == "function" && il.apply(this, et), nl(), Cr(this, "connections");
  }, e.onConnectionsChange = ol), r || Mp.set(String(e.id ?? "0"), () => sy());
  let hi = null;
  async function sl() {
    return hi || (hi = (async () => {
      var et, Dn, Kt, zr, wr, ls, Fd, cs, Td;
      const Ve = tw(e);
      return Ve && (Ve.open = !1), Mp.delete(String(e.id ?? "0")), ct(), Ge(), r || Ne(), Y0(), document.fullscreenElement === ue && ((et = document.exitFullscreen) == null || et.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", os), wn(e).liveState = null, (Ve == null ? void 0 : Ve.flushBeforeQueue) === Nd && (Ve.flushBeforeQueue = null), (zr = (Kt = (Dn = Ac(e)) == null ? void 0 : Dn.dom) == null ? void 0 : Kt.requestDraw) == null || zr.call(Kt), (ls = (wr = e.graph) == null ? void 0 : wr.setDirtyCanvas) == null || ls.call(wr, !0, !0), (Td = (cs = (Fd = zn) == null ? void 0 : Fd.canvas) == null ? void 0 : cs.setDirty) == null || Td.call(cs, !0, !0), Mt(), C.cancel(), Q0(), Ie(), Ee(), se.dispose(), q0(!1), window.removeEventListener("keydown", Ot, !0), window.removeEventListener("keydown", Ht, !0), window.removeEventListener("keydown", md, !0), window.removeEventListener("keyup", hd, !0), window.removeEventListener("keydown", fd, !0), window.removeEventListener("keyup", pd, !0), document.removeEventListener("visibilitychange", yd), window.removeEventListener("contextmenu", bn, !0), window.removeEventListener("keydown", ss, !0), window.removeEventListener("keyup", ss, !0), window.removeEventListener("blur", bd), window.removeEventListener("keydown", gd, !0), window.removeEventListener("dragenter", vd, !0), window.removeEventListener("dragover", _d, !0), window.removeEventListener("dragleave", Sd, !0), window.removeEventListener("drop", wd, !0), !r && t === "stickers" && (e.onConnectionsChange === ol && (e.onConnectionsChange = il), Ad()), ke.unmount(), Se.remove(), uy(), hi = null, !0;
    })().catch((Ve) => (console.error("[PanoramaCutoutSync] closeEditor failed", Ve), hi = null, !1)), hi);
  }
  window.addEventListener("keydown", Ot, !0), window.addEventListener("keydown", Ht, !0), window.addEventListener("keydown", md, !0), window.addEventListener("keyup", hd, !0), window.addEventListener("keydown", fd, !0), window.addEventListener("keyup", pd, !0), document.addEventListener("visibilitychange", yd), window.addEventListener("contextmenu", bn, !0), window.addEventListener("keydown", ss, !0), window.addEventListener("keyup", ss, !0), window.addEventListener("blur", bd), window.addEventListener("keydown", gd, !0), ue.addEventListener("pointerdown", (Ve) => {
    Ve.target === ue && sl();
  });
  function Tn(Ve, et, { rollbackState: Dn = !1 } = {}) {
    let Kt = "";
    try {
      Dn && (Kt = JSON.stringify(H)), et();
    } catch (zr) {
      if (Kt)
        try {
          const wr = JSON.parse(Kt);
          Object.keys(H).forEach((ls) => delete H[ls]), Object.assign(H, wr), r || Ne();
        } catch (wr) {
          console.error(`[PanoramaStickers] editor boot step "${Ve}" rollback failed`, wr);
        }
      W.stageWarningDetail = `boot:${Ve}`, console.error(`[PanoramaStickers] editor boot step "${Ve}" failed`, zr);
    }
  }
  Tn("view", U0), Tn("cutout-focus", Le), !r && t === "stickers" && Tn("external-sticker-sync", () => xd("open"), { rollbackState: !0 }), fi().catch((Ve) => {
    W.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Ve);
  }), Tn("history", () => K0({ initial: !0 })), Tn("undo-redo", ly), Tn("paint-ui", oy), Tn("side-panel", Pd), Tn("look-at-frame", ry), Tn("video-source", nl), Tn("canvas-size", rl), Tn("cursor", () => Md(xe.pointerPos)), Ho(e).open = !0, (Od = (as = (Ed = Ac(e)) == null ? void 0 : Ed.dom) == null ? void 0 : as.requestDraw) == null || Od.call(as), Kn(), B0();
}
zn.registerExtension(nx({
  app: zn,
  openEditor: UC,
  attachStickers: gM,
  attachCutout: yM,
  attachPreview: hM,
  restoreOutput: nM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: z2
}));
