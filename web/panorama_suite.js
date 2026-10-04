import * as nl from "../../scripts/app.js";
import { app as qn } from "../../scripts/app.js";
import { api as en } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ed(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const jt = {}, Lo = [], Rr = () => {
}, yg = () => !1, tc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), nc = (e) => e.startsWith("onUpdate:"), Nn = Object.assign, Od = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, P_ = Object.prototype.hasOwnProperty, Dt = (e, t) => P_.call(e, t), pt = Array.isArray, Ro = (e) => fs(e) === "[object Map]", bg = (e) => fs(e) === "[object Set]", Mh = (e) => fs(e) === "[object Date]", yt = (e) => typeof e == "function", an = (e) => typeof e == "string", jr = (e) => typeof e == "symbol", zt = (e) => e !== null && typeof e == "object", vg = (e) => (zt(e) || yt(e)) && yt(e.then) && yt(e.catch), _g = Object.prototype.toString, fs = (e) => _g.call(e), A_ = (e) => fs(e).slice(8, -1), Sg = (e) => fs(e) === "[object Object]", Td = (e) => an(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $a = /* @__PURE__ */ Ed(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), rc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, C_ = /-\w/g, En = rc(
  (e) => e.replace(C_, (t) => t.slice(1).toUpperCase())
), I_ = /\B([A-Z])/g, so = rc(
  (e) => e.replace(I_, "-$1").toLowerCase()
), ic = rc((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xc = rc(
  (e) => e ? `on${ic(e)}` : ""
), Dr = (e, t) => !Object.is(e, t), rl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, wg = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Fd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Nh;
const oc = () => Nh || (Nh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $t(e) {
  if (pt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = an(r) ? F_(r) : $t(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (an(e) || zt(e))
    return e;
}
const E_ = /;(?![^(]*\))/g, O_ = /:([^]+)/, T_ = /\/\*[^]*?\*\//g;
function F_(e) {
  const t = {};
  return e.replace(T_, "").split(E_).forEach((n) => {
    if (n) {
      const r = n.split(O_);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function xt(e) {
  let t = "";
  if (an(e))
    t = e;
  else if (pt(e))
    for (let n = 0; n < e.length; n++) {
      const r = xt(e[n]);
      r && (t += r + " ");
    }
  else if (zt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const D_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", L_ = /* @__PURE__ */ Ed(D_);
function xg(e) {
  return !!e || e === "";
}
function R_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Dd(e[r], t[r]);
  return n;
}
function Dd(e, t) {
  if (e === t) return !0;
  let n = Mh(e), r = Mh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = jr(e), r = jr(t), n || r)
    return e === t;
  if (n = pt(e), r = pt(t), n || r)
    return n && r ? R_(e, t) : !1;
  if (n = zt(e), r = zt(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), c = t.hasOwnProperty(a);
      if (s && !c || !s && c || !Dd(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const kg = (e) => !!(e && e.__v_isRef === !0), gt = (e) => an(e) ? e : e == null ? "" : pt(e) || zt(e) && (e.toString === _g || !yt(e.toString)) ? kg(e) ? gt(e.value) : JSON.stringify(e, Mg, 2) : String(e), Mg = (e, t) => kg(t) ? Mg(e, t.value) : Ro(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[qc(r, o) + " =>"] = i, n),
    {}
  )
} : bg(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qc(n))
} : jr(t) ? qc(t) : zt(t) && !pt(t) && !Sg(t) ? String(t) : t, qc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    jr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vn;
class V_ {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Vn, !t && Vn && (this.index = (Vn.scopes || (Vn.scopes = [])).push(
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
      const n = Vn;
      try {
        return Vn = this, t();
      } finally {
        Vn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Vn, Vn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Vn = this.prevScope, this.prevScope = void 0);
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
function $_() {
  return Vn;
}
let Ht;
const Jc = /* @__PURE__ */ new WeakSet();
class Ng {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Vn && Vn.active && Vn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jc.has(this) && (Jc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ag(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ph(this), Cg(this);
    const t = Ht, n = vr;
    Ht = this, vr = !0;
    try {
      return this.fn();
    } finally {
      Ig(this), Ht = t, vr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Vd(t);
      this.deps = this.depsTail = void 0, Ph(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let Pg = 0, za, ja;
function Ag(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ja, ja = e;
    return;
  }
  e.next = za, za = e;
}
function Ld() {
  Pg++;
}
function Rd() {
  if (--Pg > 0)
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
function Cg(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ig(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Vd(r), z_(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function $u(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Eg(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Eg(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qa) || (e.globalVersion = qa, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$u(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ht, r = vr;
  Ht = e, vr = !0;
  try {
    Cg(e);
    const i = e.fn(e._value);
    (t.version === 0 || Dr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ht = n, vr = r, Ig(e), e.flags &= -3;
  }
}
function Vd(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Vd(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function z_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let vr = !0;
const Og = [];
function ai() {
  Og.push(vr), vr = !1;
}
function si() {
  const e = Og.pop();
  vr = e === void 0 ? !0 : e;
}
function Ph(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ht;
    Ht = void 0;
    try {
      t();
    } finally {
      Ht = n;
    }
  }
}
let qa = 0;
class j_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $d {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ht || !vr || Ht === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ht)
      n = this.activeLink = new j_(Ht, this), Ht.deps ? (n.prevDep = Ht.depsTail, Ht.depsTail.nextDep = n, Ht.depsTail = n) : Ht.deps = Ht.depsTail = n, Tg(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ht.depsTail, n.nextDep = void 0, Ht.depsTail.nextDep = n, Ht.depsTail = n, Ht.deps === n && (Ht.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, qa++, this.notify(t);
  }
  notify(t) {
    Ld();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Rd();
    }
  }
}
function Tg(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Tg(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const zu = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ Symbol(
  ""
), ju = /* @__PURE__ */ Symbol(
  ""
), Ja = /* @__PURE__ */ Symbol(
  ""
);
function Sn(e, t, n) {
  if (vr && Ht) {
    let r = zu.get(e);
    r || zu.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new $d()), i.map = r, i.key = n), i.track();
  }
}
function ei(e, t, n, r, i, o) {
  const a = zu.get(e);
  if (!a) {
    qa++;
    return;
  }
  const s = (c) => {
    c && c.trigger();
  };
  if (Ld(), t === "clear")
    a.forEach(s);
  else {
    const c = pt(e), p = c && Td(n);
    if (c && n === "length") {
      const f = Number(r);
      a.forEach((h, g) => {
        (g === "length" || g === Ja || !jr(g) && g >= f) && s(h);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)), p && s(a.get(Ja)), t) {
        case "add":
          c ? p && s(a.get("length")) : (s(a.get(Zi)), Ro(e) && s(a.get(ju)));
          break;
        case "delete":
          c || (s(a.get(Zi)), Ro(e) && s(a.get(ju)));
          break;
        case "set":
          Ro(e) && s(a.get(Zi));
          break;
      }
  }
  Rd();
}
function xo(e) {
  const t = /* @__PURE__ */ Ft(e);
  return t === e ? t : (Sn(t, "iterate", Ja), /* @__PURE__ */ sr(e) ? t : t.map(wr));
}
function ac(e) {
  return Sn(e = /* @__PURE__ */ Ft(e), "iterate", Ja), e;
}
function Tr(e, t) {
  return /* @__PURE__ */ li(e) ? Bo(/* @__PURE__ */ Qi(e) ? wr(t) : t) : wr(t);
}
const H_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zc(this, Symbol.iterator, (e) => Tr(this, e));
  },
  concat(...e) {
    return xo(this).concat(
      ...e.map((t) => pt(t) ? xo(t) : t)
    );
  },
  entries() {
    return Zc(this, "entries", (e) => (e[1] = Tr(this, e[1]), e));
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
      (n) => n.map((r) => Tr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Yr(
      this,
      "find",
      e,
      t,
      (n) => Tr(this, n),
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
      (n) => Tr(this, n),
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
    return Qc(this, "includes", e);
  },
  indexOf(...e) {
    return Qc(this, "indexOf", e);
  },
  join(e) {
    return xo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wa(this, "pop");
  },
  push(...e) {
    return wa(this, "push", e);
  },
  reduce(e, ...t) {
    return Ah(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ah(this, "reduceRight", e, t);
  },
  shift() {
    return wa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wa(this, "splice", e);
  },
  toReversed() {
    return xo(this).toReversed();
  },
  toSorted(e) {
    return xo(this).toSorted(e);
  },
  toSpliced(...e) {
    return xo(this).toSpliced(...e);
  },
  unshift(...e) {
    return wa(this, "unshift", e);
  },
  values() {
    return Zc(this, "values", (e) => Tr(this, e));
  }
};
function Zc(e, t, n) {
  const r = ac(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ sr(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const G_ = Array.prototype;
function Yr(e, t, n, r, i, o) {
  const a = ac(e), s = a !== e && !/* @__PURE__ */ sr(e), c = a[t];
  if (c !== G_[t]) {
    const h = c.apply(e, o);
    return s ? wr(h) : h;
  }
  let p = n;
  a !== e && (s ? p = function(h, g) {
    return n.call(this, Tr(e, h), g, e);
  } : n.length > 2 && (p = function(h, g) {
    return n.call(this, h, g, e);
  }));
  const f = c.call(a, p, r);
  return s && i ? i(f) : f;
}
function Ah(e, t, n, r) {
  const i = ac(e), o = i !== e && !/* @__PURE__ */ sr(e);
  let a = n, s = !1;
  i !== e && (o ? (s = r.length === 0, a = function(p, f, h) {
    return s && (s = !1, p = Tr(e, p)), n.call(this, p, Tr(e, f), h, e);
  }) : n.length > 3 && (a = function(p, f, h) {
    return n.call(this, p, f, h, e);
  }));
  const c = i[t](a, ...r);
  return s ? Tr(e, c) : c;
}
function Qc(e, t, n) {
  const r = /* @__PURE__ */ Ft(e);
  Sn(r, "iterate", Ja);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Hd(n[0]) ? (n[0] = /* @__PURE__ */ Ft(n[0]), r[t](...n)) : i;
}
function wa(e, t, n = []) {
  ai(), Ld();
  const r = (/* @__PURE__ */ Ft(e))[t].apply(e, n);
  return Rd(), si(), r;
}
const W_ = /* @__PURE__ */ Ed("__proto__,__v_isRef,__isVue"), Fg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(jr)
);
function K_(e) {
  jr(e) || (e = String(e));
  const t = /* @__PURE__ */ Ft(this);
  return Sn(t, "has", e), t.hasOwnProperty(e);
}
class Dg {
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
      return r === (i ? o ? tS : $g : o ? Vg : Rg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = pt(t);
    if (!i) {
      let c;
      if (a && (c = H_[n]))
        return c;
      if (n === "hasOwnProperty")
        return K_;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ kn(t) ? t : r
    );
    if ((jr(n) ? Fg.has(n) : W_(n)) || (i || Sn(t, "get", n), o))
      return s;
    if (/* @__PURE__ */ kn(s)) {
      const c = a && Td(n) ? s : s.value;
      return i && zt(c) ? /* @__PURE__ */ Gu(c) : c;
    }
    return zt(s) ? i ? /* @__PURE__ */ Gu(s) : /* @__PURE__ */ Qo(s) : s;
  }
}
class Lg extends Dg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const a = pt(t) && Td(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ li(o);
      if (!/* @__PURE__ */ sr(r) && !/* @__PURE__ */ li(r) && (o = /* @__PURE__ */ Ft(o), r = /* @__PURE__ */ Ft(r)), !a && /* @__PURE__ */ kn(o) && !/* @__PURE__ */ kn(r))
        return p || (o.value = r), !0;
    }
    const s = a ? Number(n) < t.length : Dt(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ kn(t) ? t : i
    );
    return t === /* @__PURE__ */ Ft(i) && (s ? Dr(r, o) && ei(t, "set", n, r) : ei(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = Dt(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && ei(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!jr(n) || !Fg.has(n)) && Sn(t, "has", n), r;
  }
  ownKeys(t) {
    return Sn(
      t,
      "iterate",
      pt(t) ? "length" : Zi
    ), Reflect.ownKeys(t);
  }
}
class B_ extends Dg {
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
const U_ = /* @__PURE__ */ new Lg(), Y_ = /* @__PURE__ */ new B_(), X_ = /* @__PURE__ */ new Lg(!0);
const Hu = (e) => e, $s = (e) => Reflect.getPrototypeOf(e);
function q_(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ Ft(i), a = Ro(o), s = e === "entries" || e === Symbol.iterator && a, c = e === "keys" && a, p = i[e](...r), f = n ? Hu : t ? Bo : wr;
    return !t && Sn(
      o,
      "iterate",
      c ? ju : Zi
    ), Nn(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: h, done: g } = p.next();
          return g ? { value: h, done: g } : {
            value: s ? [f(h[0]), f(h[1])] : f(h),
            done: g
          };
        }
      }
    );
  };
}
function zs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function J_(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Ft(o), s = /* @__PURE__ */ Ft(i);
      e || (Dr(i, s) && Sn(a, "get", i), Sn(a, "get", s));
      const { has: c } = $s(a), p = t ? Hu : e ? Bo : wr;
      if (c.call(a, i))
        return p(o.get(i));
      if (c.call(a, s))
        return p(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Sn(/* @__PURE__ */ Ft(i), "iterate", Zi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Ft(o), s = /* @__PURE__ */ Ft(i);
      return e || (Dr(i, s) && Sn(a, "has", i), Sn(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, c = /* @__PURE__ */ Ft(s), p = t ? Hu : e ? Bo : wr;
      return !e && Sn(c, "iterate", Zi), s.forEach((f, h) => i.call(o, p(f), p(h), a));
    }
  };
  return Nn(
    n,
    e ? {
      add: zs("add"),
      set: zs("set"),
      delete: zs("delete"),
      clear: zs("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ Ft(this), a = $s(o), s = /* @__PURE__ */ Ft(i), c = !t && !/* @__PURE__ */ sr(i) && !/* @__PURE__ */ li(i) ? s : i;
        return a.has.call(o, c) || Dr(i, c) && a.has.call(o, i) || Dr(s, c) && a.has.call(o, s) || (o.add(c), ei(o, "add", c, c)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ sr(o) && !/* @__PURE__ */ li(o) && (o = /* @__PURE__ */ Ft(o));
        const a = /* @__PURE__ */ Ft(this), { has: s, get: c } = $s(a);
        let p = s.call(a, i);
        p || (i = /* @__PURE__ */ Ft(i), p = s.call(a, i));
        const f = c.call(a, i);
        return a.set(i, o), p ? Dr(o, f) && ei(a, "set", i, o) : ei(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ Ft(this), { has: a, get: s } = $s(o);
        let c = a.call(o, i);
        c || (i = /* @__PURE__ */ Ft(i), c = a.call(o, i)), s && s.call(o, i);
        const p = o.delete(i);
        return c && ei(o, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ Ft(this), o = i.size !== 0, a = i.clear();
        return o && ei(
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
    n[i] = q_(i, e, t);
  }), n;
}
function zd(e, t) {
  const n = J_(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Dt(n, i) && i in r ? n : r,
    i,
    o
  );
}
const Z_ = {
  get: /* @__PURE__ */ zd(!1, !1)
}, Q_ = {
  get: /* @__PURE__ */ zd(!1, !0)
}, eS = {
  get: /* @__PURE__ */ zd(!0, !1)
};
const Rg = /* @__PURE__ */ new WeakMap(), Vg = /* @__PURE__ */ new WeakMap(), $g = /* @__PURE__ */ new WeakMap(), tS = /* @__PURE__ */ new WeakMap();
function nS(e) {
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
function rS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : nS(A_(e));
}
// @__NO_SIDE_EFFECTS__
function Qo(e) {
  return /* @__PURE__ */ li(e) ? e : jd(
    e,
    !1,
    U_,
    Z_,
    Rg
  );
}
// @__NO_SIDE_EFFECTS__
function iS(e) {
  return jd(
    e,
    !1,
    X_,
    Q_,
    Vg
  );
}
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  return jd(
    e,
    !0,
    Y_,
    eS,
    $g
  );
}
function jd(e, t, n, r, i) {
  if (!zt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = rS(e);
  if (o === 0)
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  return /* @__PURE__ */ li(e) ? /* @__PURE__ */ Qi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function li(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Hd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ft(t) : e;
}
function oS(e) {
  return !Dt(e, "__v_skip") && Object.isExtensible(e) && wg(e, "__v_skip", !0), e;
}
const wr = (e) => zt(e) ? /* @__PURE__ */ Qo(e) : e, Bo = (e) => zt(e) ? /* @__PURE__ */ Gu(e) : e;
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return zg(e, !1);
}
// @__NO_SIDE_EFFECTS__
function xl(e) {
  return zg(e, !0);
}
function zg(e, t) {
  return /* @__PURE__ */ kn(e) ? e : new aS(e, t);
}
class aS {
  constructor(t, n) {
    this.dep = new $d(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ft(t), this._value = n ? t : wr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ sr(t) || /* @__PURE__ */ li(t);
    t = r ? t : /* @__PURE__ */ Ft(t), Dr(t, n) && (this._rawValue = t, this._value = r ? t : wr(t), this.dep.trigger());
  }
}
function ft(e) {
  return /* @__PURE__ */ kn(e) ? e.value : e;
}
const sS = {
  get: (e, t, n) => t === "__v_raw" ? e : ft(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ kn(i) && !/* @__PURE__ */ kn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function jg(e) {
  return /* @__PURE__ */ Qi(e) ? e : new Proxy(e, sS);
}
class lS {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new $d(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ht !== this)
      return Ag(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Eg(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function cS(e, t, n = !1) {
  let r, i;
  return yt(e) ? r = e : (r = e.get, i = e.set), new lS(r, i, n);
}
const js = {}, kl = /* @__PURE__ */ new WeakMap();
let Bi;
function uS(e, t = !1, n = Bi) {
  if (n) {
    let r = kl.get(n);
    r || kl.set(n, r = []), r.push(e);
  }
}
function dS(e, t, n = jt) {
  const { immediate: r, deep: i, once: o, scheduler: a, augmentJob: s, call: c } = n, p = ($) => i ? $ : /* @__PURE__ */ sr($) || i === !1 || i === 0 ? ti($, 1) : ti($);
  let f, h, g, _, v = !1, S = !1;
  if (/* @__PURE__ */ kn(e) ? (h = () => e.value, v = /* @__PURE__ */ sr(e)) : /* @__PURE__ */ Qi(e) ? (h = () => p(e), v = !0) : pt(e) ? (S = !0, v = e.some(($) => /* @__PURE__ */ Qi($) || /* @__PURE__ */ sr($)), h = () => e.map(($) => {
    if (/* @__PURE__ */ kn($))
      return $.value;
    if (/* @__PURE__ */ Qi($))
      return p($);
    if (yt($))
      return c ? c($, 2) : $();
  })) : yt(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (g) {
      ai();
      try {
        g();
      } finally {
        si();
      }
    }
    const $ = Bi;
    Bi = f;
    try {
      return c ? c(e, 3, [_]) : e(_);
    } finally {
      Bi = $;
    }
  } : h = Rr, t && i) {
    const $ = h, y = i === !0 ? 1 / 0 : i;
    h = () => ti($(), y);
  }
  const M = $_(), C = () => {
    f.stop(), M && M.active && Od(M.effects, f);
  };
  if (o && t) {
    const $ = t;
    t = (...y) => {
      $(...y), C();
    };
  }
  let W = S ? new Array(e.length).fill(js) : js;
  const V = ($) => {
    if (!(!(f.flags & 1) || !f.dirty && !$))
      if (t) {
        const y = f.run();
        if (i || v || (S ? y.some((j, G) => Dr(j, W[G])) : Dr(y, W))) {
          g && g();
          const j = Bi;
          Bi = f;
          try {
            const G = [
              y,
              // pass undefined as the old value when it's changed for the first time
              W === js ? void 0 : S && W[0] === js ? [] : W,
              _
            ];
            W = y, c ? c(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            Bi = j;
          }
        }
      } else
        f.run();
  };
  return s && s(V), f = new Ng(h), f.scheduler = a ? () => a(V, !1) : V, _ = ($) => uS($, !1, f), g = f.onStop = () => {
    const $ = kl.get(f);
    if ($) {
      if (c)
        c($, 4);
      else
        for (const y of $) y();
      kl.delete(f);
    }
  }, t ? r ? V(!0) : W = f.run() : a ? a(V.bind(null, !0), !0) : f.run(), C.pause = f.pause.bind(f), C.resume = f.resume.bind(f), C.stop = C, C;
}
function ti(e, t = 1 / 0, n) {
  if (t <= 0 || !zt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ kn(e))
    ti(e.value, t, n);
  else if (pt(e))
    for (let r = 0; r < e.length; r++)
      ti(e[r], t, n);
  else if (bg(e) || Ro(e))
    e.forEach((r) => {
      ti(r, t, n);
    });
  else if (Sg(e)) {
    for (const r in e)
      ti(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ti(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ps(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    sc(i, t, n);
  }
}
function Hr(e, t, n, r) {
  if (yt(e)) {
    const i = ps(e, t, n, r);
    return i && vg(i) && i.catch((o) => {
      sc(o, t, n);
    }), i;
  }
  if (pt(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Hr(e[o], t, n, r));
    return i;
  }
}
function sc(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || jt;
  if (t) {
    let s = t.parent;
    const c = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, c, p) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      ai(), ps(o, null, 10, [
        e,
        c,
        p
      ]), si();
      return;
    }
  }
  fS(e, n, i, r, a);
}
function fS(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const In = [];
let Or = -1;
const Vo = [];
let gi = null, Ao = 0;
const Hg = /* @__PURE__ */ Promise.resolve();
let Ml = null;
function lc(e) {
  const t = Ml || Hg;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pS(e) {
  let t = Or + 1, n = In.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = In[r], o = Za(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Gd(e) {
  if (!(e.flags & 1)) {
    const t = Za(e), n = In[In.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Za(n) ? In.push(e) : In.splice(pS(t), 0, e), e.flags |= 1, Gg();
  }
}
function Gg() {
  Ml || (Ml = Hg.then(Kg));
}
function hS(e) {
  pt(e) ? Vo.push(...e) : gi && e.id === -1 ? gi.splice(Ao + 1, 0, e) : e.flags & 1 || (Vo.push(e), e.flags |= 1), Gg();
}
function Ch(e, t, n = Or + 1) {
  for (; n < In.length; n++) {
    const r = In[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      In.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Wg(e) {
  if (Vo.length) {
    const t = [...new Set(Vo)].sort(
      (n, r) => Za(n) - Za(r)
    );
    if (Vo.length = 0, gi) {
      gi.push(...t);
      return;
    }
    for (gi = t, Ao = 0; Ao < gi.length; Ao++) {
      const n = gi[Ao];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    gi = null, Ao = 0;
  }
}
const Za = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Kg(e) {
  try {
    for (Or = 0; Or < In.length; Or++) {
      const t = In[Or];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ps(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Or < In.length; Or++) {
      const t = In[Or];
      t && (t.flags &= -2);
    }
    Or = -1, In.length = 0, Wg(), Ml = null, (In.length || Vo.length) && Kg();
  }
}
let Jn = null, Bg = null;
function Nl(e) {
  const t = Jn;
  return Jn = e, Bg = e && e.type.__scopeId || null, t;
}
function Ug(e, t = Jn, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && jh(-1);
    const o = Nl(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Nl(o), r._d && jh(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ii(e, t) {
  if (Jn === null)
    return e;
  const n = pc(Jn), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, c = jt] = t[i];
    o && (yt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ti(a), r.push({
      dir: o,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: c
    }));
  }
  return e;
}
function $i(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let c = s.dir[r];
    c && (ai(), Hr(c, n, 8, [
      e.el,
      s,
      e,
      t
    ]), si());
  }
}
function mS(e, t) {
  if (wn) {
    let n = wn.provides;
    const r = wn.parent && wn.parent.provides;
    r === n && (n = wn.provides = Object.create(r)), n[e] = t;
  }
}
function il(e, t, n = !1) {
  const r = pw();
  if (r || $o) {
    let i = $o ? $o._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && yt(t) ? t.call(r && r.proxy) : t;
  }
}
const gS = /* @__PURE__ */ Symbol.for("v-scx"), yS = () => il(gS);
function eo(e, t, n) {
  return Yg(e, t, n);
}
function Yg(e, t, n = jt) {
  const { immediate: r, deep: i, flush: o, once: a } = n, s = Nn({}, n), c = t && r || !t && o !== "post";
  let p;
  if (es) {
    if (o === "sync") {
      const _ = yS();
      p = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {
      };
      return _.stop = Rr, _.resume = Rr, _.pause = Rr, _;
    }
  }
  const f = wn;
  s.call = (_, v, S) => Hr(_, f, v, S);
  let h = !1;
  o === "post" ? s.scheduler = (_) => {
    Rn(_, f && f.suspense);
  } : o !== "sync" && (h = !0, s.scheduler = (_, v) => {
    v ? _() : Gd(_);
  }), s.augmentJob = (_) => {
    t && (_.flags |= 4), h && (_.flags |= 2, f && (_.id = f.uid, _.i = f));
  };
  const g = dS(e, t, s);
  return es && (p ? p.push(g) : c && g()), g;
}
function bS(e, t, n) {
  const r = this.proxy, i = an(e) ? e.includes(".") ? Xg(r, e) : () => r[e] : e.bind(r, r);
  let o;
  yt(t) ? o = t : (o = t.handler, n = t);
  const a = ms(this), s = Yg(i, o.bind(r), n);
  return a(), s;
}
function Xg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const vS = /* @__PURE__ */ Symbol("_vte"), _S = (e) => e.__isTeleport, SS = /* @__PURE__ */ Symbol("_leaveCb");
function Wd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Wd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function qg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ih(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Pl = /* @__PURE__ */ new WeakMap();
function Ha(e, t, n, r, i = !1) {
  if (pt(e)) {
    e.forEach(
      (S, M) => Ha(
        S,
        t && (pt(t) ? t[M] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Ga(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ha(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? pc(r.component) : r.el, a = i ? null : o, { i: s, r: c } = e, p = t && t.r, f = s.refs === jt ? s.refs = {} : s.refs, h = s.setupState, g = /* @__PURE__ */ Ft(h), _ = h === jt ? yg : (S) => Ih(f, S) ? !1 : Dt(g, S), v = (S, M) => !(M && Ih(f, M));
  if (p != null && p !== c) {
    if (Eh(t), an(p))
      f[p] = null, _(p) && (h[p] = null);
    else if (/* @__PURE__ */ kn(p)) {
      const S = t;
      v(p, S.k) && (p.value = null), S.k && (f[S.k] = null);
    }
  }
  if (yt(c))
    ps(c, s, 12, [a, f]);
  else {
    const S = an(c), M = /* @__PURE__ */ kn(c);
    if (S || M) {
      const C = () => {
        if (e.f) {
          const W = S ? _(c) ? h[c] : f[c] : v() || !e.k ? c.value : f[e.k];
          if (i)
            pt(W) && Od(W, o);
          else if (pt(W))
            W.includes(o) || W.push(o);
          else if (S)
            f[c] = [o], _(c) && (h[c] = f[c]);
          else {
            const V = [o];
            v(c, e.k) && (c.value = V), e.k && (f[e.k] = V);
          }
        } else S ? (f[c] = a, _(c) && (h[c] = a)) : M && (v(c, e.k) && (c.value = a), e.k && (f[e.k] = a));
      };
      if (a) {
        const W = () => {
          C(), Pl.delete(e);
        };
        W.id = -1, Pl.set(e, W), Rn(W, n);
      } else
        Eh(e), C();
    }
  }
}
function Eh(e) {
  const t = Pl.get(e);
  t && (t.flags |= 8, Pl.delete(e));
}
oc().requestIdleCallback;
oc().cancelIdleCallback;
const Ga = (e) => !!e.type.__asyncLoader, Jg = (e) => e.type.__isKeepAlive;
function wS(e, t) {
  Zg(e, "a", t);
}
function xS(e, t) {
  Zg(e, "da", t);
}
function Zg(e, t, n = wn) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (cc(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Jg(i.parent.vnode) && kS(r, t, n, i), i = i.parent;
  }
}
function kS(e, t, n, r) {
  const i = cc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Qg(() => {
    Od(r[t], i);
  }, n);
}
function cc(e, t, n = wn, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...a) => {
      ai();
      const s = ms(n), c = Hr(t, n, e, a);
      return s(), si(), c;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const ci = (e) => (t, n = wn) => {
  (!es || e === "sp") && cc(e, (...r) => t(...r), n);
}, MS = ci("bm"), uc = ci("m"), NS = ci(
  "bu"
), PS = ci("u"), hs = ci(
  "bum"
), Qg = ci("um"), AS = ci(
  "sp"
), CS = ci("rtg"), IS = ci("rtc");
function ES(e, t = wn) {
  cc("ec", e, t);
}
const OS = "components", e0 = /* @__PURE__ */ Symbol.for("v-ndc");
function TS(e) {
  return an(e) ? FS(OS, e, !1) || e : e || e0;
}
function FS(e, t, n = !0, r = !1) {
  const i = Jn || wn;
  if (i) {
    const o = i.type;
    {
      const s = bw(
        o,
        !1
      );
      if (s && (s === t || s === En(t) || s === ic(En(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Oh(i[e] || o[e], t) || // global registration
      Oh(i.appContext[e], t)
    );
    return !a && r ? o : a;
  }
}
function Oh(e, t) {
  return e && (e[t] || e[En(t)] || e[ic(En(t))]);
}
function Rt(e, t, n, r) {
  let i;
  const o = n, a = pt(e);
  if (a || an(e)) {
    const s = a && /* @__PURE__ */ Qi(e);
    let c = !1, p = !1;
    s && (c = !/* @__PURE__ */ sr(e), p = /* @__PURE__ */ li(e), e = ac(e)), i = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      i[f] = t(
        c ? p ? Bo(wr(e[f])) : wr(e[f]) : e[f],
        f,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (zt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, c) => t(s, c, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let c = 0, p = s.length; c < p; c++) {
        const f = s[c];
        i[c] = t(e[f], f, c, o);
      }
    }
  else
    i = [];
  return i;
}
const Wu = (e) => e ? S0(e) ? pc(e) : Wu(e.parent) : null, Wa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Nn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Wu(e.parent),
    $root: (e) => Wu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => n0(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lc.bind(e.proxy)),
    $watch: (e) => bS.bind(e)
  })
), eu = (e, t) => e !== jt && !e.__isScriptSetup && Dt(e, t), DS = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: a, type: s, appContext: c } = e;
    if (t[0] !== "$") {
      const g = a[t];
      if (g !== void 0)
        switch (g) {
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
        if (eu(r, t))
          return a[t] = 1, r[t];
        if (i !== jt && Dt(i, t))
          return a[t] = 2, i[t];
        if (Dt(o, t))
          return a[t] = 3, o[t];
        if (n !== jt && Dt(n, t))
          return a[t] = 4, n[t];
        Ku && (a[t] = 0);
      }
    }
    const p = Wa[t];
    let f, h;
    if (p)
      return t === "$attrs" && Sn(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (f = s.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== jt && Dt(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, Dt(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return eu(i, t) ? (i[t] = n, !0) : r !== jt && Dt(r, t) ? (r[t] = n, !0) : Dt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: a }
  }, s) {
    let c;
    return !!(n[s] || e !== jt && s[0] !== "$" && Dt(e, s) || eu(t, s) || Dt(o, s) || Dt(r, s) || Dt(Wa, s) || Dt(i.config.globalProperties, s) || (c = a.__cssModules) && c[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Dt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Th(e) {
  return pt(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ku = !0;
function LS(e) {
  const t = n0(e), n = e.proxy, r = e.ctx;
  Ku = !1, t.beforeCreate && Fh(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: c,
    inject: p,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: g,
    beforeUpdate: _,
    updated: v,
    activated: S,
    deactivated: M,
    beforeDestroy: C,
    beforeUnmount: W,
    destroyed: V,
    unmounted: $,
    render: y,
    renderTracked: j,
    renderTriggered: G,
    errorCaptured: re,
    serverPrefetch: se,
    // public API
    expose: I,
    inheritAttrs: H,
    // assets
    components: J,
    directives: de,
    filters: xe
  } = t;
  if (p && RS(p, r, null), a)
    for (const te in a) {
      const R = a[te];
      yt(R) && (r[te] = R.bind(n));
    }
  if (i) {
    const te = i.call(n, n);
    zt(te) && (e.data = /* @__PURE__ */ Qo(te));
  }
  if (Ku = !0, o)
    for (const te in o) {
      const R = o[te], O = yt(R) ? R.bind(n, n) : yt(R.get) ? R.get.bind(n, n) : Rr, ue = !yt(R) && yt(R.set) ? R.set.bind(n) : Rr, Me = vt({
        get: O,
        set: ue
      });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (ze) => Me.value = ze
      });
    }
  if (s)
    for (const te in s)
      t0(s[te], r, n, te);
  if (c) {
    const te = yt(c) ? c.call(n) : c;
    Reflect.ownKeys(te).forEach((R) => {
      mS(R, te[R]);
    });
  }
  f && Fh(f, e, "c");
  function he(te, R) {
    pt(R) ? R.forEach((O) => te(O.bind(n))) : R && te(R.bind(n));
  }
  if (he(MS, h), he(uc, g), he(NS, _), he(PS, v), he(wS, S), he(xS, M), he(ES, re), he(IS, j), he(CS, G), he(hs, W), he(Qg, $), he(AS, se), pt(I))
    if (I.length) {
      const te = e.exposed || (e.exposed = {});
      I.forEach((R) => {
        Object.defineProperty(te, R, {
          get: () => n[R],
          set: (O) => n[R] = O,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === Rr && (e.render = y), H != null && (e.inheritAttrs = H), J && (e.components = J), de && (e.directives = de), se && qg(e);
}
function RS(e, t, n = Rr) {
  pt(e) && (e = Bu(e));
  for (const r in e) {
    const i = e[r];
    let o;
    zt(i) ? "default" in i ? o = il(
      i.from || r,
      i.default,
      !0
    ) : o = il(i.from || r) : o = il(i), /* @__PURE__ */ kn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[r] = o;
  }
}
function Fh(e, t, n) {
  Hr(
    pt(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function t0(e, t, n, r) {
  let i = r.includes(".") ? Xg(n, r) : () => n[r];
  if (an(e)) {
    const o = t[e];
    yt(o) && eo(i, o);
  } else if (yt(e))
    eo(i, e.bind(n));
  else if (zt(e))
    if (pt(e))
      e.forEach((o) => t0(o, t, n, r));
    else {
      const o = yt(e.handler) ? e.handler.bind(n) : t[e.handler];
      yt(o) && eo(i, o, e);
    }
}
function n0(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let c;
  return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach(
    (p) => Al(c, p, a, !0)
  ), Al(c, t, a)), zt(t) && o.set(t, c), c;
}
function Al(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Al(e, o, n, !0), i && i.forEach(
    (a) => Al(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = VS[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const VS = {
  data: Dh,
  props: Lh,
  emits: Lh,
  // objects
  methods: Ia,
  computed: Ia,
  // lifecycle
  beforeCreate: Cn,
  created: Cn,
  beforeMount: Cn,
  mounted: Cn,
  beforeUpdate: Cn,
  updated: Cn,
  beforeDestroy: Cn,
  beforeUnmount: Cn,
  destroyed: Cn,
  unmounted: Cn,
  activated: Cn,
  deactivated: Cn,
  errorCaptured: Cn,
  serverPrefetch: Cn,
  // assets
  components: Ia,
  directives: Ia,
  // watch
  watch: zS,
  // provide / inject
  provide: Dh,
  inject: $S
};
function Dh(e, t) {
  return t ? e ? function() {
    return Nn(
      yt(e) ? e.call(this, this) : e,
      yt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $S(e, t) {
  return Ia(Bu(e), Bu(t));
}
function Bu(e) {
  if (pt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Cn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ia(e, t) {
  return e ? Nn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lh(e, t) {
  return e ? pt(e) && pt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Nn(
    /* @__PURE__ */ Object.create(null),
    Th(e),
    Th(t ?? {})
  ) : t;
}
function zS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Nn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Cn(e[r], t[r]);
  return n;
}
function r0() {
  return {
    app: null,
    config: {
      isNativeTag: yg,
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
let jS = 0;
function HS(e, t) {
  return function(r, i = null) {
    yt(r) || (r = Nn({}, r)), i != null && !zt(i) && (i = null);
    const o = r0(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let c = !1;
    const p = o.app = {
      _uid: jS++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: _w,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return a.has(f) || (f && yt(f.install) ? (a.add(f), f.install(p, ...h)) : yt(f) && (a.add(f), f(p, ...h))), p;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), p;
      },
      component(f, h) {
        return h ? (o.components[f] = h, p) : o.components[f];
      },
      directive(f, h) {
        return h ? (o.directives[f] = h, p) : o.directives[f];
      },
      mount(f, h, g) {
        if (!c) {
          const _ = p._ceVNode || et(r, i);
          return _.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(_, f, g), c = !0, p._container = f, f.__vue_app__ = p, pc(_.component);
        }
      },
      onUnmount(f) {
        s.push(f);
      },
      unmount() {
        c && (Hr(
          s,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(f, h) {
        return o.provides[f] = h, p;
      },
      runWithContext(f) {
        const h = $o;
        $o = p;
        try {
          return f();
        } finally {
          $o = h;
        }
      }
    };
    return p;
  };
}
let $o = null;
const GS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${En(t)}Modifiers`] || e[`${so(t)}Modifiers`];
function WS(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || jt;
  let i = n;
  const o = t.startsWith("update:"), a = o && GS(r, t.slice(7));
  a && (a.trim && (i = n.map((f) => an(f) ? f.trim() : f)), a.number && (i = n.map(Fd)));
  let s, c = r[s = Xc(t)] || // also try camelCase event handler (#2249)
  r[s = Xc(En(t))];
  !c && o && (c = r[s = Xc(so(t))]), c && Hr(
    c,
    e,
    6,
    i
  );
  const p = r[s + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Hr(
      p,
      e,
      6,
      i
    );
  }
}
const KS = /* @__PURE__ */ new WeakMap();
function i0(e, t, n = !1) {
  const r = n ? KS : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!yt(e)) {
    const c = (p) => {
      const f = i0(p, t, !0);
      f && (s = !0, Nn(a, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !s ? (zt(e) && r.set(e, null), null) : (pt(o) ? o.forEach((c) => a[c] = null) : Nn(a, o), zt(e) && r.set(e, a), a);
}
function dc(e, t) {
  return !e || !tc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Dt(e, t[0].toLowerCase() + t.slice(1)) || Dt(e, so(t)) || Dt(e, t));
}
function Rh(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: c,
    render: p,
    renderCache: f,
    props: h,
    data: g,
    setupState: _,
    ctx: v,
    inheritAttrs: S
  } = e, M = Nl(e);
  let C, W;
  try {
    if (n.shapeFlag & 4) {
      const $ = i || r, y = $;
      C = Fr(
        p.call(
          y,
          $,
          f,
          h,
          _,
          g,
          v
        )
      ), W = s;
    } else {
      const $ = t;
      C = Fr(
        $.length > 1 ? $(
          h,
          { attrs: s, slots: a, emit: c }
        ) : $(
          h,
          null
        )
      ), W = t.props ? s : BS(s);
    }
  } catch ($) {
    Ka.length = 0, sc($, e, 1), C = et(vi);
  }
  let V = C;
  if (W && S !== !1) {
    const $ = Object.keys(W), { shapeFlag: y } = V;
    $.length && y & 7 && (o && $.some(nc) && (W = US(
      W,
      o
    )), V = Uo(V, W, !1, !0));
  }
  return n.dirs && (V = Uo(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && Wd(V, n.transition), C = V, Nl(M), C;
}
const BS = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || tc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, US = (e, t) => {
  const n = {};
  for (const r in e)
    (!nc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function YS(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: a, children: s, patchFlag: c } = t, p = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Vh(r, a, p) : !!a;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const g = f[h];
        if (o0(a, r, g) && !dc(p, g))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? Vh(r, a, p) : !0 : !!a;
  return !1;
}
function Vh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (o0(t, e, o) && !dc(n, o))
      return !0;
  }
  return !1;
}
function o0(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && zt(r) && zt(i) ? !Dd(r, i) : r !== i;
}
function XS({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const a0 = {}, s0 = () => Object.create(a0), l0 = (e) => Object.getPrototypeOf(e) === a0;
function qS(e, t, n, r = !1) {
  const i = {}, o = s0();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), c0(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ iS(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function JS(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ Ft(i), [c] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let g = f[h];
        if (dc(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (c)
          if (Dt(o, g))
            _ !== o[g] && (o[g] = _, p = !0);
          else {
            const v = En(g);
            i[v] = Uu(
              c,
              s,
              v,
              _,
              e,
              !1
            );
          }
        else
          _ !== o[g] && (o[g] = _, p = !0);
      }
    }
  } else {
    c0(e, t, i, o) && (p = !0);
    let f;
    for (const h in s)
      (!t || // for camelCase
      !Dt(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = so(h)) === h || !Dt(t, f))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (i[h] = Uu(
        c,
        s,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (o !== s)
      for (const h in o)
        (!t || !Dt(t, h)) && (delete o[h], p = !0);
  }
  p && ei(e.attrs, "set", "");
}
function c0(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let c in t) {
      if ($a(c))
        continue;
      const p = t[c];
      let f;
      i && Dt(i, f = En(c)) ? !o || !o.includes(f) ? n[f] = p : (s || (s = {}))[f] = p : dc(e.emitsOptions, c) || (!(c in r) || p !== r[c]) && (r[c] = p, a = !0);
    }
  if (o) {
    const c = /* @__PURE__ */ Ft(n), p = s || jt;
    for (let f = 0; f < o.length; f++) {
      const h = o[f];
      n[h] = Uu(
        i,
        c,
        h,
        p[h],
        e,
        !Dt(p, h)
      );
    }
  }
  return a;
}
function Uu(e, t, n, r, i, o) {
  const a = e[n];
  if (a != null) {
    const s = Dt(a, "default");
    if (s && r === void 0) {
      const c = a.default;
      if (a.type !== Function && !a.skipFactory && yt(c)) {
        const { propsDefaults: p } = i;
        if (n in p)
          r = p[n];
        else {
          const f = ms(i);
          r = p[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        r = c;
      i.ce && i.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === so(n)) && (r = !0));
  }
  return r;
}
const ZS = /* @__PURE__ */ new WeakMap();
function u0(e, t, n = !1) {
  const r = n ? ZS : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let c = !1;
  if (!yt(e)) {
    const f = (h) => {
      c = !0;
      const [g, _] = u0(h, t, !0);
      Nn(a, g), _ && s.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !c)
    return zt(e) && r.set(e, Lo), Lo;
  if (pt(o))
    for (let f = 0; f < o.length; f++) {
      const h = En(o[f]);
      $h(h) && (a[h] = jt);
    }
  else if (o)
    for (const f in o) {
      const h = En(f);
      if ($h(h)) {
        const g = o[f], _ = a[h] = pt(g) || yt(g) ? { type: g } : Nn({}, g), v = _.type;
        let S = !1, M = !0;
        if (pt(v))
          for (let C = 0; C < v.length; ++C) {
            const W = v[C], V = yt(W) && W.name;
            if (V === "Boolean") {
              S = !0;
              break;
            } else V === "String" && (M = !1);
          }
        else
          S = yt(v) && v.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = S, _[
          1
          /* shouldCastTrue */
        ] = M, (S || Dt(_, "default")) && s.push(h);
      }
    }
  const p = [a, s];
  return zt(e) && r.set(e, p), p;
}
function $h(e) {
  return e[0] !== "$" && !$a(e);
}
const Kd = (e) => e === "_" || e === "_ctx" || e === "$stable", Bd = (e) => pt(e) ? e.map(Fr) : [Fr(e)], QS = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ug((...i) => Bd(t(...i)), n);
  return r._c = !1, r;
}, d0 = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Kd(i)) continue;
    const o = e[i];
    if (yt(o))
      t[i] = QS(i, o, r);
    else if (o != null) {
      const a = Bd(o);
      t[i] = () => a;
    }
  }
}, f0 = (e, t) => {
  const n = Bd(t);
  e.slots.default = () => n;
}, p0 = (e, t, n) => {
  for (const r in t)
    (n || !Kd(r)) && (e[r] = t[r]);
}, ew = (e, t, n) => {
  const r = e.slots = s0();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (p0(r, t, n), n && wg(r, "_", i, !0)) : d0(t, r);
  } else t && f0(e, t);
}, tw = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, a = jt;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? o = !1 : p0(i, t, n) : (o = !t.$stable, d0(t, i)), a = t;
  } else t && (f0(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !Kd(s) && a[s] == null && delete i[s];
}, Rn = aw;
function nw(e) {
  return rw(e);
}
function rw(e, t) {
  const n = oc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: c,
    setText: p,
    setElementText: f,
    parentNode: h,
    nextSibling: g,
    setScopeId: _ = Rr,
    insertStaticContent: v
  } = e, S = (P, D, Y, fe = null, L = null, Z = null, ae = void 0, T = null, B = !!D.dynamicChildren) => {
    if (P === D)
      return;
    P && !xa(P, D) && (fe = pe(P), ze(P, L, Z, !0), P = null), D.patchFlag === -2 && (B = !1, D.dynamicChildren = null);
    const { type: U, ref: Q, shapeFlag: ie } = D;
    switch (U) {
      case fc:
        M(P, D, Y, fe);
        break;
      case vi:
        C(P, D, Y, fe);
        break;
      case nu:
        P == null && W(D, Y, fe, ae);
        break;
      case ct:
        J(
          P,
          D,
          Y,
          fe,
          L,
          Z,
          ae,
          T,
          B
        );
        break;
      default:
        ie & 1 ? y(
          P,
          D,
          Y,
          fe,
          L,
          Z,
          ae,
          T,
          B
        ) : ie & 6 ? de(
          P,
          D,
          Y,
          fe,
          L,
          Z,
          ae,
          T,
          B
        ) : (ie & 64 || ie & 128) && U.process(
          P,
          D,
          Y,
          fe,
          L,
          Z,
          ae,
          T,
          B,
          oe
        );
    }
    Q != null && L ? Ha(Q, P && P.ref, Z, D || P, !D) : Q == null && P && P.ref != null && Ha(P.ref, null, Z, P, !0);
  }, M = (P, D, Y, fe) => {
    if (P == null)
      r(
        D.el = s(D.children),
        Y,
        fe
      );
    else {
      const L = D.el = P.el;
      D.children !== P.children && p(L, D.children);
    }
  }, C = (P, D, Y, fe) => {
    P == null ? r(
      D.el = c(D.children || ""),
      Y,
      fe
    ) : D.el = P.el;
  }, W = (P, D, Y, fe) => {
    [P.el, P.anchor] = v(
      P.children,
      D,
      Y,
      fe,
      P.el,
      P.anchor
    );
  }, V = ({ el: P, anchor: D }, Y, fe) => {
    let L;
    for (; P && P !== D; )
      L = g(P), r(P, Y, fe), P = L;
    r(D, Y, fe);
  }, $ = ({ el: P, anchor: D }) => {
    let Y;
    for (; P && P !== D; )
      Y = g(P), i(P), P = Y;
    i(D);
  }, y = (P, D, Y, fe, L, Z, ae, T, B) => {
    if (D.type === "svg" ? ae = "svg" : D.type === "math" && (ae = "mathml"), P == null)
      j(
        D,
        Y,
        fe,
        L,
        Z,
        ae,
        T,
        B
      );
    else {
      const U = P.el && P.el._isVueCE ? P.el : null;
      try {
        U && U._beginPatch(), se(
          P,
          D,
          L,
          Z,
          ae,
          T,
          B
        );
      } finally {
        U && U._endPatch();
      }
    }
  }, j = (P, D, Y, fe, L, Z, ae, T) => {
    let B, U;
    const { props: Q, shapeFlag: ie, transition: Se, dirs: we } = P;
    if (B = P.el = a(
      P.type,
      Z,
      Q && Q.is,
      Q
    ), ie & 8 ? f(B, P.children) : ie & 16 && re(
      P.children,
      B,
      null,
      fe,
      L,
      tu(P, Z),
      ae,
      T
    ), we && $i(P, null, fe, "created"), G(B, P, P.scopeId, ae, fe), Q) {
      for (const Fe in Q)
        Fe !== "value" && !$a(Fe) && o(B, Fe, null, Q[Fe], Z, fe);
      "value" in Q && o(B, "value", null, Q.value, Z), (U = Q.onVnodeBeforeMount) && Cr(U, fe, P);
    }
    we && $i(P, null, fe, "beforeMount");
    const Ae = iw(L, Se);
    Ae && Se.beforeEnter(B), r(B, D, Y), ((U = Q && Q.onVnodeMounted) || Ae || we) && Rn(() => {
      try {
        U && Cr(U, fe, P), Ae && Se.enter(B), we && $i(P, null, fe, "mounted");
      } finally {
      }
    }, L);
  }, G = (P, D, Y, fe, L) => {
    if (Y && _(P, Y), fe)
      for (let Z = 0; Z < fe.length; Z++)
        _(P, fe[Z]);
    if (L) {
      let Z = L.subTree;
      if (D === Z || y0(Z.type) && (Z.ssContent === D || Z.ssFallback === D)) {
        const ae = L.vnode;
        G(
          P,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          L.parent
        );
      }
    }
  }, re = (P, D, Y, fe, L, Z, ae, T, B = 0) => {
    for (let U = B; U < P.length; U++) {
      const Q = P[U] = T ? Zr(P[U]) : Fr(P[U]);
      S(
        null,
        Q,
        D,
        Y,
        fe,
        L,
        Z,
        ae,
        T
      );
    }
  }, se = (P, D, Y, fe, L, Z, ae) => {
    const T = D.el = P.el;
    let { patchFlag: B, dynamicChildren: U, dirs: Q } = D;
    B |= P.patchFlag & 16;
    const ie = P.props || jt, Se = D.props || jt;
    let we;
    if (Y && zi(Y, !1), (we = Se.onVnodeBeforeUpdate) && Cr(we, Y, D, P), Q && $i(D, P, Y, "beforeUpdate"), Y && zi(Y, !0), (ie.innerHTML && Se.innerHTML == null || ie.textContent && Se.textContent == null) && f(T, ""), U ? I(
      P.dynamicChildren,
      U,
      T,
      Y,
      fe,
      tu(D, L),
      Z
    ) : ae || R(
      P,
      D,
      T,
      null,
      Y,
      fe,
      tu(D, L),
      Z,
      !1
    ), B > 0) {
      if (B & 16)
        H(T, ie, Se, Y, L);
      else if (B & 2 && ie.class !== Se.class && o(T, "class", null, Se.class, L), B & 4 && o(T, "style", ie.style, Se.style, L), B & 8) {
        const Ae = D.dynamicProps;
        for (let Fe = 0; Fe < Ae.length; Fe++) {
          const Ye = Ae[Fe], Le = ie[Ye], je = Se[Ye];
          (je !== Le || Ye === "value") && o(T, Ye, Le, je, L, Y);
        }
      }
      B & 1 && P.children !== D.children && f(T, D.children);
    } else !ae && U == null && H(T, ie, Se, Y, L);
    ((we = Se.onVnodeUpdated) || Q) && Rn(() => {
      we && Cr(we, Y, D, P), Q && $i(D, P, Y, "updated");
    }, fe);
  }, I = (P, D, Y, fe, L, Z, ae) => {
    for (let T = 0; T < D.length; T++) {
      const B = P[T], U = D[T], Q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === ct || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xa(B, U) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 198) ? h(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      S(
        B,
        U,
        Q,
        null,
        fe,
        L,
        Z,
        ae,
        !0
      );
    }
  }, H = (P, D, Y, fe, L) => {
    if (D !== Y) {
      if (D !== jt)
        for (const Z in D)
          !$a(Z) && !(Z in Y) && o(
            P,
            Z,
            D[Z],
            null,
            L,
            fe
          );
      for (const Z in Y) {
        if ($a(Z)) continue;
        const ae = Y[Z], T = D[Z];
        ae !== T && Z !== "value" && o(P, Z, T, ae, L, fe);
      }
      "value" in Y && o(P, "value", D.value, Y.value, L);
    }
  }, J = (P, D, Y, fe, L, Z, ae, T, B) => {
    const U = D.el = P ? P.el : s(""), Q = D.anchor = P ? P.anchor : s("");
    let { patchFlag: ie, dynamicChildren: Se, slotScopeIds: we } = D;
    we && (T = T ? T.concat(we) : we), P == null ? (r(U, Y, fe), r(Q, Y, fe), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      Y,
      Q,
      L,
      Z,
      ae,
      T,
      B
    )) : ie > 0 && ie & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    P.dynamicChildren && P.dynamicChildren.length === Se.length ? (I(
      P.dynamicChildren,
      Se,
      Y,
      L,
      Z,
      ae,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (D.key != null || L && D === L.subTree) && h0(
      P,
      D,
      !0
      /* shallow */
    )) : R(
      P,
      D,
      Y,
      Q,
      L,
      Z,
      ae,
      T,
      B
    );
  }, de = (P, D, Y, fe, L, Z, ae, T, B) => {
    D.slotScopeIds = T, P == null ? D.shapeFlag & 512 ? L.ctx.activate(
      D,
      Y,
      fe,
      ae,
      B
    ) : xe(
      D,
      Y,
      fe,
      L,
      Z,
      ae,
      B
    ) : _e(P, D, B);
  }, xe = (P, D, Y, fe, L, Z, ae) => {
    const T = P.component = fw(
      P,
      fe,
      L
    );
    if (Jg(P) && (T.ctx.renderer = oe), hw(T, !1, ae), T.asyncDep) {
      if (L && L.registerDep(T, he, ae), !P.el) {
        const B = T.subTree = et(vi);
        C(null, B, D, Y), P.placeholder = B.el;
      }
    } else
      he(
        T,
        P,
        D,
        Y,
        L,
        Z,
        ae
      );
  }, _e = (P, D, Y) => {
    const fe = D.component = P.component;
    if (YS(P, D, Y))
      if (fe.asyncDep && !fe.asyncResolved) {
        te(fe, D, Y);
        return;
      } else
        fe.next = D, fe.update();
    else
      D.el = P.el, fe.vnode = D;
  }, he = (P, D, Y, fe, L, Z, ae) => {
    const T = () => {
      if (P.isMounted) {
        let { next: ie, bu: Se, u: we, parent: Ae, vnode: Fe } = P;
        {
          const k = m0(P);
          if (k) {
            ie && (ie.el = Fe.el, te(P, ie, ae)), k.asyncDep.then(() => {
              Rn(() => {
                P.isUnmounted || U();
              }, L);
            });
            return;
          }
        }
        let Ye = ie, Le;
        zi(P, !1), ie ? (ie.el = Fe.el, te(P, ie, ae)) : ie = Fe, Se && rl(Se), (Le = ie.props && ie.props.onVnodeBeforeUpdate) && Cr(Le, Ae, ie, Fe), zi(P, !0);
        const je = Rh(P), tt = P.subTree;
        P.subTree = je, S(
          tt,
          je,
          // parent may have changed if it's in a teleport
          h(tt.el),
          // anchor may have changed if it's in a fragment
          pe(tt),
          P,
          L,
          Z
        ), ie.el = je.el, Ye === null && XS(P, je.el), we && Rn(we, L), (Le = ie.props && ie.props.onVnodeUpdated) && Rn(
          () => Cr(Le, Ae, ie, Fe),
          L
        );
      } else {
        let ie;
        const { el: Se, props: we } = D, { bm: Ae, m: Fe, parent: Ye, root: Le, type: je } = P, tt = Ga(D);
        zi(P, !1), Ae && rl(Ae), !tt && (ie = we && we.onVnodeBeforeMount) && Cr(ie, Ye, D), zi(P, !0);
        {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle(
            je,
            P.parent ? P.parent.type : void 0
          );
          const k = P.subTree = Rh(P);
          S(
            null,
            k,
            Y,
            fe,
            P,
            L,
            Z
          ), D.el = k.el;
        }
        if (Fe && Rn(Fe, L), !tt && (ie = we && we.onVnodeMounted)) {
          const k = D;
          Rn(
            () => Cr(ie, Ye, k),
            L
          );
        }
        (D.shapeFlag & 256 || Ye && Ga(Ye.vnode) && Ye.vnode.shapeFlag & 256) && P.a && Rn(P.a, L), P.isMounted = !0, D = Y = fe = null;
      }
    };
    P.scope.on();
    const B = P.effect = new Ng(T);
    P.scope.off();
    const U = P.update = B.run.bind(B), Q = P.job = B.runIfDirty.bind(B);
    Q.i = P, Q.id = P.uid, B.scheduler = () => Gd(Q), zi(P, !0), U();
  }, te = (P, D, Y) => {
    D.component = P;
    const fe = P.vnode.props;
    P.vnode = D, P.next = null, JS(P, D.props, fe, Y), tw(P, D.children, Y), ai(), Ch(P), si();
  }, R = (P, D, Y, fe, L, Z, ae, T, B = !1) => {
    const U = P && P.children, Q = P ? P.shapeFlag : 0, ie = D.children, { patchFlag: Se, shapeFlag: we } = D;
    if (Se > 0) {
      if (Se & 128) {
        ue(
          U,
          ie,
          Y,
          fe,
          L,
          Z,
          ae,
          T,
          B
        );
        return;
      } else if (Se & 256) {
        O(
          U,
          ie,
          Y,
          fe,
          L,
          Z,
          ae,
          T,
          B
        );
        return;
      }
    }
    we & 8 ? (Q & 16 && w(U, L, Z), ie !== U && f(Y, ie)) : Q & 16 ? we & 16 ? ue(
      U,
      ie,
      Y,
      fe,
      L,
      Z,
      ae,
      T,
      B
    ) : w(U, L, Z, !0) : (Q & 8 && f(Y, ""), we & 16 && re(
      ie,
      Y,
      fe,
      L,
      Z,
      ae,
      T,
      B
    ));
  }, O = (P, D, Y, fe, L, Z, ae, T, B) => {
    P = P || Lo, D = D || Lo;
    const U = P.length, Q = D.length, ie = Math.min(U, Q);
    let Se;
    for (Se = 0; Se < ie; Se++) {
      const we = D[Se] = B ? Zr(D[Se]) : Fr(D[Se]);
      S(
        P[Se],
        we,
        Y,
        null,
        L,
        Z,
        ae,
        T,
        B
      );
    }
    U > Q ? w(
      P,
      L,
      Z,
      !0,
      !1,
      ie
    ) : re(
      D,
      Y,
      fe,
      L,
      Z,
      ae,
      T,
      B,
      ie
    );
  }, ue = (P, D, Y, fe, L, Z, ae, T, B) => {
    let U = 0;
    const Q = D.length;
    let ie = P.length - 1, Se = Q - 1;
    for (; U <= ie && U <= Se; ) {
      const we = P[U], Ae = D[U] = B ? Zr(D[U]) : Fr(D[U]);
      if (xa(we, Ae))
        S(
          we,
          Ae,
          Y,
          null,
          L,
          Z,
          ae,
          T,
          B
        );
      else
        break;
      U++;
    }
    for (; U <= ie && U <= Se; ) {
      const we = P[ie], Ae = D[Se] = B ? Zr(D[Se]) : Fr(D[Se]);
      if (xa(we, Ae))
        S(
          we,
          Ae,
          Y,
          null,
          L,
          Z,
          ae,
          T,
          B
        );
      else
        break;
      ie--, Se--;
    }
    if (U > ie) {
      if (U <= Se) {
        const we = Se + 1, Ae = we < Q ? D[we].el : fe;
        for (; U <= Se; )
          S(
            null,
            D[U] = B ? Zr(D[U]) : Fr(D[U]),
            Y,
            Ae,
            L,
            Z,
            ae,
            T,
            B
          ), U++;
      }
    } else if (U > Se)
      for (; U <= ie; )
        ze(P[U], L, Z, !0), U++;
    else {
      const we = U, Ae = U, Fe = /* @__PURE__ */ new Map();
      for (U = Ae; U <= Se; U++) {
        const ne = D[U] = B ? Zr(D[U]) : Fr(D[U]);
        ne.key != null && Fe.set(ne.key, U);
      }
      let Ye, Le = 0;
      const je = Se - Ae + 1;
      let tt = !1, k = 0;
      const q = new Array(je);
      for (U = 0; U < je; U++) q[U] = 0;
      for (U = we; U <= ie; U++) {
        const ne = P[U];
        if (Le >= je) {
          ze(ne, L, Z, !0);
          continue;
        }
        let A;
        if (ne.key != null)
          A = Fe.get(ne.key);
        else
          for (Ye = Ae; Ye <= Se; Ye++)
            if (q[Ye - Ae] === 0 && xa(ne, D[Ye])) {
              A = Ye;
              break;
            }
        A === void 0 ? ze(ne, L, Z, !0) : (q[A - Ae] = U + 1, A >= k ? k = A : tt = !0, S(
          ne,
          D[A],
          Y,
          null,
          L,
          Z,
          ae,
          T,
          B
        ), Le++);
      }
      const u = tt ? ow(q) : Lo;
      for (Ye = u.length - 1, U = je - 1; U >= 0; U--) {
        const ne = Ae + U, A = D[ne], ee = D[ne + 1], ke = ne + 1 < Q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ee.el || g0(ee)
        ) : fe;
        q[U] === 0 ? S(
          null,
          A,
          Y,
          ke,
          L,
          Z,
          ae,
          T,
          B
        ) : tt && (Ye < 0 || U !== u[Ye] ? Me(A, Y, ke, 2) : Ye--);
      }
    }
  }, Me = (P, D, Y, fe, L = null) => {
    const { el: Z, type: ae, transition: T, children: B, shapeFlag: U } = P;
    if (U & 6) {
      Me(P.component.subTree, D, Y, fe);
      return;
    }
    if (U & 128) {
      P.suspense.move(D, Y, fe);
      return;
    }
    if (U & 64) {
      ae.move(P, D, Y, oe);
      return;
    }
    if (ae === ct) {
      r(Z, D, Y);
      for (let ie = 0; ie < B.length; ie++)
        Me(B[ie], D, Y, fe);
      r(P.anchor, D, Y);
      return;
    }
    if (ae === nu) {
      V(P, D, Y);
      return;
    }
    if (fe !== 2 && U & 1 && T)
      if (fe === 0)
        T.beforeEnter(Z), r(Z, D, Y), Rn(() => T.enter(Z), L);
      else {
        const { leave: ie, delayLeave: Se, afterLeave: we } = T, Ae = () => {
          P.ctx.isUnmounted ? i(Z) : r(Z, D, Y);
        }, Fe = () => {
          Z._isLeaving && Z[SS](
            !0
            /* cancelled */
          ), ie(Z, () => {
            Ae(), we && we();
          });
        };
        Se ? Se(Z, Ae, Fe) : Fe();
      }
    else
      r(Z, D, Y);
  }, ze = (P, D, Y, fe = !1, L = !1) => {
    const {
      type: Z,
      props: ae,
      ref: T,
      children: B,
      dynamicChildren: U,
      shapeFlag: Q,
      patchFlag: ie,
      dirs: Se,
      cacheIndex: we,
      memo: Ae
    } = P;
    if (ie === -2 && (L = !1), T != null && (ai(), Ha(T, null, Y, P, !0), si()), we != null && (D.renderCache[we] = void 0), Q & 256) {
      D.ctx.deactivate(P);
      return;
    }
    const Fe = Q & 1 && Se, Ye = !Ga(P);
    let Le;
    if (Ye && (Le = ae && ae.onVnodeBeforeUnmount) && Cr(Le, D, P), Q & 6)
      z(P.component, Y, fe);
    else {
      if (Q & 128) {
        P.suspense.unmount(Y, fe);
        return;
      }
      Fe && $i(P, null, D, "beforeUnmount"), Q & 64 ? P.type.remove(
        P,
        D,
        Y,
        oe,
        fe
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Z !== ct || ie > 0 && ie & 64) ? w(
        U,
        D,
        Y,
        !1,
        !0
      ) : (Z === ct && ie & 384 || !L && Q & 16) && w(B, D, Y), fe && Xe(P);
    }
    const je = Ae != null && we == null;
    (Ye && (Le = ae && ae.onVnodeUnmounted) || Fe || je) && Rn(() => {
      Le && Cr(Le, D, P), Fe && $i(P, null, D, "unmounted"), je && (P.el = null);
    }, Y);
  }, Xe = (P) => {
    const { type: D, el: Y, anchor: fe, transition: L } = P;
    if (D === ct) {
      ce(Y, fe);
      return;
    }
    if (D === nu) {
      $(P);
      return;
    }
    const Z = () => {
      i(Y), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (P.shapeFlag & 1 && L && !L.persisted) {
      const { leave: ae, delayLeave: T } = L, B = () => ae(Y, Z);
      T ? T(P.el, Z, B) : B();
    } else
      Z();
  }, ce = (P, D) => {
    let Y;
    for (; P !== D; )
      Y = g(P), i(P), P = Y;
    i(D);
  }, z = (P, D, Y) => {
    const { bum: fe, scope: L, job: Z, subTree: ae, um: T, m: B, a: U } = P;
    zh(B), zh(U), fe && rl(fe), L.stop(), Z && (Z.flags |= 8, ze(ae, P, D, Y)), T && Rn(T, D), Rn(() => {
      P.isUnmounted = !0;
    }, D);
  }, w = (P, D, Y, fe = !1, L = !1, Z = 0) => {
    for (let ae = Z; ae < P.length; ae++)
      ze(P[ae], D, Y, fe, L);
  }, pe = (P) => {
    if (P.shapeFlag & 6)
      return pe(P.component.subTree);
    if (P.shapeFlag & 128)
      return P.suspense.next();
    const D = g(P.anchor || P.el), Y = D && D[vS];
    return Y ? g(Y) : D;
  };
  let Ne = !1;
  const De = (P, D, Y) => {
    let fe;
    P == null ? D._vnode && (ze(D._vnode, null, null, !0), fe = D._vnode.component) : S(
      D._vnode || null,
      P,
      D,
      null,
      null,
      null,
      Y
    ), D._vnode = P, Ne || (Ne = !0, Ch(fe), Wg(), Ne = !1);
  }, oe = {
    p: S,
    um: ze,
    m: Me,
    r: Xe,
    mt: xe,
    mc: re,
    pc: R,
    pbc: I,
    n: pe,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: HS(De)
  };
}
function tu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function zi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function iw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function h0(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (pt(r) && pt(i))
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Zr(i[o]), s.el = a.el), !n && s.patchFlag !== -2 && h0(a, s)), s.type === fc && (s.patchFlag === -1 && (s = i[o] = Zr(s)), s.el = a.el), s.type === vi && !s.el && (s.el = a.el);
    }
}
function ow(e) {
  const t = e.slice(), n = [0];
  let r, i, o, a, s;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const p = e[r];
    if (p !== 0) {
      if (i = n[n.length - 1], e[i] < p) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, a = n.length - 1; o < a; )
        s = o + a >> 1, e[n[s]] < p ? o = s + 1 : a = s;
      p < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; )
    n[o] = a, a = t[a];
  return n;
}
function m0(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : m0(t);
}
function zh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function g0(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? g0(t.subTree) : null;
}
const y0 = (e) => e.__isSuspense;
function aw(e, t) {
  t && t.pendingBranch ? pt(e) ? t.effects.push(...e) : t.effects.push(e) : hS(e);
}
const ct = /* @__PURE__ */ Symbol.for("v-fgt"), fc = /* @__PURE__ */ Symbol.for("v-txt"), vi = /* @__PURE__ */ Symbol.for("v-cmt"), nu = /* @__PURE__ */ Symbol.for("v-stc"), Ka = [];
let Zn = null;
function Te(e = !1) {
  Ka.push(Zn = e ? null : []);
}
function sw() {
  Ka.pop(), Zn = Ka[Ka.length - 1] || null;
}
let Qa = 1;
function jh(e, t = !1) {
  Qa += e, e < 0 && Zn && t && (Zn.hasOnce = !0);
}
function b0(e) {
  return e.dynamicChildren = Qa > 0 ? Zn || Lo : null, sw(), Qa > 0 && Zn && Zn.push(e), e;
}
function Ve(e, t, n, r, i, o) {
  return b0(
    ve(
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
function cr(e, t, n, r, i) {
  return b0(
    et(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function v0(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const _0 = ({ key: e }) => e ?? null, ol = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? an(e) || /* @__PURE__ */ kn(e) || yt(e) ? { i: Jn, r: e, k: t, f: !!n } : e : null);
function ve(e, t = null, n = null, r = 0, i = null, o = e === ct ? 0 : 1, a = !1, s = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _0(t),
    ref: t && ol(t),
    scopeId: Bg,
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
    ctx: Jn
  };
  return s ? (Ud(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= an(n) ? 8 : 16), Qa > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Zn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Zn.push(c), c;
}
const et = lw;
function lw(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === e0) && (e = vi), v0(e)) {
    const s = Uo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ud(s, n), Qa > 0 && !o && Zn && (s.shapeFlag & 6 ? Zn[Zn.indexOf(e)] = s : Zn.push(s)), s.patchFlag = -2, s;
  }
  if (vw(e) && (e = e.__vccOpts), t) {
    t = cw(t);
    let { class: s, style: c } = t;
    s && !an(s) && (t.class = xt(s)), zt(c) && (/* @__PURE__ */ Hd(c) && !pt(c) && (c = Nn({}, c)), t.style = $t(c));
  }
  const a = an(e) ? 1 : y0(e) ? 128 : _S(e) ? 64 : zt(e) ? 4 : yt(e) ? 2 : 0;
  return ve(
    e,
    t,
    n,
    r,
    i,
    a,
    o,
    !0
  );
}
function cw(e) {
  return e ? /* @__PURE__ */ Hd(e) || l0(e) ? Nn({}, e) : e : null;
}
function Uo(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: c } = e, p = t ? Qr(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && _0(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? pt(o) ? o.concat(ol(t)) : [o, ol(t)] : ol(t)
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
    patchFlag: t && e.type !== ct ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Uo(e.ssContent),
    ssFallback: e.ssFallback && Uo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Wd(
    f,
    c.clone(f)
  ), f;
}
function Ea(e = " ", t = 0) {
  return et(fc, null, e, t);
}
function kt(e = "", t = !1) {
  return t ? (Te(), cr(vi, null, e)) : et(vi, null, e);
}
function Fr(e) {
  return e == null || typeof e == "boolean" ? et(vi) : pt(e) ? et(
    ct,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : v0(e) ? Zr(e) : et(fc, null, String(e));
}
function Zr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Uo(e);
}
function Ud(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (pt(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ud(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !l0(t) ? t._ctx = Jn : i === 3 && Jn && (Jn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else yt(t) ? (t = { default: t, _ctx: Jn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ea(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Qr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = xt([t.class, r.class]));
      else if (i === "style")
        t.style = $t([t.style, r.style]);
      else if (tc(i)) {
        const o = t[i], a = r[i];
        a && o !== a && !(pt(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !nc(i) && (t[i] = a);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Cr(e, t, n, r = null) {
  Hr(e, t, 7, [
    n,
    r
  ]);
}
const uw = r0();
let dw = 0;
function fw(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || uw, o = {
    uid: dw++,
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
    scope: new V_(
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
    propsOptions: u0(r, i),
    emitsOptions: i0(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: jt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: jt,
    data: jt,
    props: jt,
    attrs: jt,
    slots: jt,
    refs: jt,
    setupState: jt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = WS.bind(null, o), e.ce && e.ce(o), o;
}
let wn = null;
const pw = () => wn || Jn;
let Cl, Yu;
{
  const e = oc(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Cl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wn = n
  ), Yu = t(
    "__VUE_SSR_SETTERS__",
    (n) => es = n
  );
}
const ms = (e) => {
  const t = wn;
  return Cl(e), e.scope.on(), () => {
    e.scope.off(), Cl(t);
  };
}, Hh = () => {
  wn && wn.scope.off(), Cl(null);
};
function S0(e) {
  return e.vnode.shapeFlag & 4;
}
let es = !1;
function hw(e, t = !1, n = !1) {
  t && Yu(t);
  const { props: r, children: i } = e.vnode, o = S0(e);
  qS(e, r, o, t), ew(e, i, n || t);
  const a = o ? mw(e, t) : void 0;
  return t && Yu(!1), a;
}
function mw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, DS);
  const { setup: r } = n;
  if (r) {
    ai();
    const i = e.setupContext = r.length > 1 ? yw(e) : null, o = ms(e), a = ps(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = vg(a);
    if (si(), o(), (s || e.sp) && !Ga(e) && qg(e), s) {
      if (a.then(Hh, Hh), t)
        return a.then((c) => {
          Gh(e, c);
        }).catch((c) => {
          sc(c, e, 0);
        });
      e.asyncDep = a;
    } else
      Gh(e, a);
  } else
    w0(e);
}
function Gh(e, t, n) {
  yt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : zt(t) && (e.setupState = jg(t)), w0(e);
}
function w0(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Rr);
  {
    const i = ms(e);
    ai();
    try {
      LS(e);
    } finally {
      si(), i();
    }
  }
}
const gw = {
  get(e, t) {
    return Sn(e, "get", ""), e[t];
  }
};
function yw(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, gw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function pc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(jg(oS(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Wa)
        return Wa[n](e);
    },
    has(t, n) {
      return n in t || n in Wa;
    }
  })) : e.proxy;
}
function bw(e, t = !0) {
  return yt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function vw(e) {
  return yt(e) && "__vccOpts" in e;
}
const vt = (e, t) => /* @__PURE__ */ cS(e, t, es), _w = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xu;
const Wh = typeof window < "u" && window.trustedTypes;
if (Wh)
  try {
    Xu = /* @__PURE__ */ Wh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const x0 = Xu ? (e) => Xu.createHTML(e) : (e) => e, Sw = "http://www.w3.org/2000/svg", ww = "http://www.w3.org/1998/Math/MathML", qr = typeof document < "u" ? document : null, Kh = qr && /* @__PURE__ */ qr.createElement("template"), xw = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? qr.createElementNS(Sw, e) : t === "mathml" ? qr.createElementNS(ww, e) : n ? qr.createElement(e, { is: n }) : qr.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => qr.createTextNode(e),
  createComment: (e) => qr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const a = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Kh.innerHTML = x0(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Kh.content;
      if (r === "svg" || r === "mathml") {
        const c = s.firstChild;
        for (; c.firstChild; )
          s.appendChild(c.firstChild);
        s.removeChild(c);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, kw = /* @__PURE__ */ Symbol("_vtc");
function Mw(e, t, n) {
  const r = e[kw];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Il = /* @__PURE__ */ Symbol("_vod"), k0 = /* @__PURE__ */ Symbol("_vsh"), oo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Il] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ka(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ka(e, !0), r.enter(e)) : r.leave(e, () => {
      ka(e, !1);
    }) : ka(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ka(e, t);
  }
};
function ka(e, t) {
  e.style.display = t ? e[Il] : "none", e[k0] = !t;
}
const Nw = /* @__PURE__ */ Symbol(""), Pw = /(?:^|;)\s*display\s*:/;
function Aw(e, t, n) {
  const r = e.style, i = an(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (an(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && al(r, s, "");
        }
      else
        for (const a in t)
          n[a] == null && al(r, a, "");
    for (const a in n)
      a === "display" && (o = !0), al(r, a, n[a]);
  } else if (i) {
    if (t !== n) {
      const a = r[Nw];
      a && (n += ";" + a), r.cssText = n, o = Pw.test(n);
    }
  } else t && e.removeAttribute("style");
  Il in e && (e[Il] = o ? r.display : "", e[k0] && (r.display = "none"));
}
const Bh = /\s*!important$/;
function al(e, t, n) {
  if (pt(n))
    n.forEach((r) => al(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Cw(e, t);
    Bh.test(n) ? e.setProperty(
      so(r),
      n.replace(Bh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Uh = ["Webkit", "Moz", "ms"], ru = {};
function Cw(e, t) {
  const n = ru[t];
  if (n)
    return n;
  let r = En(t);
  if (r !== "filter" && r in e)
    return ru[t] = r;
  r = ic(r);
  for (let i = 0; i < Uh.length; i++) {
    const o = Uh[i] + r;
    if (o in e)
      return ru[t] = o;
  }
  return t;
}
const Yh = "http://www.w3.org/1999/xlink";
function Xh(e, t, n, r, i, o = L_(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Yh, t.slice(6, t.length)) : e.setAttributeNS(Yh, t, n) : n == null || o && !xg(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : jr(n) ? String(n) : n
  );
}
function qh(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? x0(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = xg(n) : n == null && s === "string" ? (n = "", a = !0) : s === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Co(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Iw(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Jh = /* @__PURE__ */ Symbol("_vei");
function Ew(e, t, n, r, i = null) {
  const o = e[Jh] || (e[Jh] = {}), a = o[t];
  if (r && a)
    a.value = r;
  else {
    const [s, c] = Ow(t);
    if (r) {
      const p = o[t] = Dw(
        r,
        i
      );
      Co(e, s, p, c);
    } else a && (Iw(e, s, a, c), o[t] = void 0);
  }
}
const Zh = /(?:Once|Passive|Capture)$/;
function Ow(e) {
  let t;
  if (Zh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Zh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : so(e.slice(2)), t];
}
let iu = 0;
const Tw = /* @__PURE__ */ Promise.resolve(), Fw = () => iu || (Tw.then(() => iu = 0), iu = Date.now());
function Dw(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Hr(
      Lw(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Fw(), n;
}
function Lw(e, t) {
  if (pt(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const Qh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rw = (e, t, n, r, i, o) => {
  const a = i === "svg";
  t === "class" ? Mw(e, r, a) : t === "style" ? Aw(e, n, r) : tc(t) ? nc(t) || Ew(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vw(e, t, r, a)) ? (qh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xh(e, t, r, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  ($w(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !an(r))) ? qh(e, En(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xh(e, t, r, a));
};
function Vw(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qh(t) && yt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Qh(t) && an(n) ? !1 : t in e;
}
function $w(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = En(t);
  return Array.isArray(n) ? n.some((i) => En(i) === r) : Object.keys(n).some((i) => En(i) === r);
}
const em = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return pt(t) ? (n) => rl(t, n) : t;
};
function zw(e) {
  e.target.composing = !0;
}
function tm(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ou = /* @__PURE__ */ Symbol("_assign");
function nm(e, t, n) {
  return t && (e = e.trim()), n && (e = Fd(e)), e;
}
const rm = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[ou] = em(i);
    const o = r || i.props && i.props.type === "number";
    Co(e, t ? "change" : "input", (a) => {
      a.target.composing || e[ou](nm(e.value, n, o));
    }), (n || o) && Co(e, "change", () => {
      e.value = nm(e.value, n, o);
    }), t || (Co(e, "compositionstart", zw), Co(e, "compositionend", tm), Co(e, "change", tm));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, a) {
    if (e[ou] = em(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? Fd(e.value) : e.value, c = t ?? "";
    if (s === c)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
  }
}, jw = ["ctrl", "shift", "alt", "meta"], Hw = {
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
  exact: (e, t) => jw.some((n) => e[`${n}Key`] && !t.includes(n))
}, Gt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = Hw[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Gw = /* @__PURE__ */ Nn({ patchProp: Rw }, xw);
let im;
function Ww() {
  return im || (im = nw(Gw));
}
const Yd = ((...e) => {
  const t = Ww().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = Bw(r);
    if (!i) return;
    const o = t._component;
    !yt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = n(i, !1, Kw(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function Kw(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bw(e) {
  return an(e) ? document.querySelector(e) : e;
}
const Uw = "PanoramaSuite.Debug.Diagnostics", Yw = "PanoramaSuite.Debug.ExportDiagnostics", au = "pano_suite.diagnostics.v1", om = "pano_suite.diagnostics.previous.v1", Xw = 300, qw = 2e5, Jw = 100, Zw = 20, Qw = 1e3, ex = 2, Hs = 1024 * 1024;
function hi(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function tx() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function nx() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: tx,
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
function rx(e = {}) {
  const t = { ...nx(), ...e };
  let n = !1, r = !1, i = null, o = null, a = 0, s = null, c = 0, p = 0;
  const f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = { created: 0, released: 0, collected: 0 }, _ = { created: 0, collected: 0 }, v = t.FinalizationRegistry ? new t.FinalizationRegistry((oe) => {
    f.delete(oe), g.collected += 1;
  }) : null, S = t.FinalizationRegistry ? new t.FinalizationRegistry((oe) => {
    h.delete(oe), _.collected += 1;
  }) : null, M = /* @__PURE__ */ new Set(), C = { created: 0, lost: 0, restored: 0, disposed: 0 }, W = [], V = /* @__PURE__ */ new Map();
  let $ = { count: 0, maxMs: 0 }, y = /* @__PURE__ */ new Map(), j = { count: 0, maxMs: 0 };
  const G = [];
  function re(oe, Pe, P = void 0) {
    W.push(P === void 0 ? { t: t.clock(), type: oe, label: Pe } : { t: t.clock(), type: oe, label: Pe, detail: P }), W.length > Jw && W.shift();
  }
  function se(oe, Pe, P, D, Y) {
    if (!n || !D || !t.WeakRef) return D;
    const fe = { ref: new t.WeakRef(D), label: Y };
    return oe.add(fe), Pe == null || Pe.register(D, fe), P.created += 1, D;
  }
  function I(oe, Pe = "") {
    return se(f, v, g, oe, Pe);
  }
  function H(oe, Pe = "") {
    return se(h, S, _, oe, Pe);
  }
  function J({ label: oe = "", width: Pe, height: P, offscreen: D = !1 } = {}) {
    const Y = globalThis.OffscreenCanvas;
    let fe;
    return D && typeof Y < "u" ? fe = new Y(Pe, P) : (fe = t.document().createElement("canvas"), Pe !== void 0 && P !== void 0 && (fe.width = Pe, fe.height = P)), I(fe, oe);
  }
  function de(oe) {
    oe.width = 0, oe.height = 0, n && (g.released += 1);
  }
  function xe(oe = t.document(), Pe = "") {
    var P;
    return H(((P = oe == null ? void 0 : oe.createElement) == null ? void 0 : P.call(oe, "video")) || null, Pe);
  }
  function _e(oe, Pe) {
    if (!n || !oe) return () => {
    };
    const P = { label: Pe, lost: !1, disposed: !1 };
    M.add(P), C.created += 1, re("webgl-created", Pe);
    const D = () => {
      P.disposed || (P.lost = !0, C.lost += 1, re("webglcontextlost", Pe));
    }, Y = () => {
      P.disposed || (P.lost = !1, C.restored += 1, re("webglcontextrestored", Pe));
    };
    return oe.addEventListener("webglcontextlost", D), oe.addEventListener("webglcontextrestored", Y), () => {
      P.disposed || (P.disposed = !0, M.delete(P), C.disposed += 1, re("webgl-disposed", Pe));
    };
  }
  function he(oe, Pe) {
    return V.set(oe, Pe), () => {
      V.get(oe) === Pe && V.delete(oe);
    };
  }
  function te() {
    return n ? t.now() : -1;
  }
  function R(oe) {
    if (oe < 0 || !n) return;
    const Pe = t.now() - oe;
    $.count += 1, $.maxMs = Math.max($.maxMs, Pe);
  }
  function O(oe, Pe) {
    if (Pe < 0 || !n) return;
    const P = t.now() - Pe, D = y.get(oe) ?? { count: 0, maxMs: 0 };
    D.count += 1, D.maxMs = Math.max(D.maxMs, P), y.set(oe, D);
  }
  function ue() {
    let oe = 0, Pe = 0, P = 0, D = [0, 0];
    const Y = {};
    for (const fe of f) {
      const L = fe.ref.deref();
      if (!L) continue;
      oe += 1;
      const Z = L.width * L.height;
      Z > 0 && (Pe += 1), P += Z, Z > D[0] * D[1] && (D = [L.width, L.height]);
      const ae = Y[fe.label] ?? (Y[fe.label] = [0, 0]);
      ae[0] += 1, ae[1] += Z;
    }
    return { ...g, alive: oe, sized: Pe, pixels: P, mb: hi(P * 4 / Hs, 1), largest: D, byLabel: Y };
  }
  function Me() {
    const oe = [];
    let Pe = 0, P = 0;
    for (const D of h) {
      const Y = D.ref.deref();
      if (!Y) continue;
      Pe += 1;
      const fe = !Y.paused && !Y.ended;
      fe && (P += 1), oe.length < Zw && oe.push({
        label: D.label,
        playing: fe,
        src: !!(Y.currentSrc || Y.src),
        size: [Y.videoWidth || 0, Y.videoHeight || 0],
        ready: Y.readyState ?? 0,
        connected: !!Y.isConnected
      });
    }
    return { ..._, alive: Pe, playing: P, list: oe };
  }
  function ze() {
    const oe = t.now(), Pe = t.memory(), P = {
      t: t.clock(),
      heap: Pe ? { used: hi(Pe.usedJSHeapSize / Hs, 1), total: hi(Pe.totalJSHeapSize / Hs, 1), limit: hi(Pe.jsHeapSizeLimit / Hs, 1) } : null,
      canvas: ue(),
      webgl: { ...C, alive: [...M].filter((D) => !D.lost).length },
      video: Me(),
      frame: { count: $.count, maxMs: hi($.maxMs), longTasks: j.count, longTaskMaxMs: hi(j.maxMs) },
      renders: Object.fromEntries([...y].map(([D, Y]) => [D, { count: Y.count, maxMs: hi(Y.maxMs) }])),
      sources: Object.fromEntries([...V].map(([D, Y]) => [D, Y()])),
      costMs: hi(p, 3)
    };
    return $ = { count: 0, maxMs: 0 }, y = /* @__PURE__ */ new Map(), j = { count: 0, maxMs: 0 }, G.push({ record: P, text: JSON.stringify(P) }), G.length > Xw && G.shift(), c += 1, c % ex === 0 && ce(), p = t.now() - oe, P;
  }
  function Xe(oe = qw) {
    const Pe = JSON.stringify({ ...o, events: W }).slice(0, -1);
    let P = oe - Pe.length - 14, D = G.length;
    for (; D > 0 && P - G[D - 1].text.length - 1 >= 0; )
      D -= 1, P -= G[D].text.length + 1;
    return `${Pe},"records":[${G.slice(D).map((Y) => Y.text).join(",")}]}`;
  }
  function ce() {
    if (!o) return;
    const oe = t.storage();
    if (oe) {
      o.savedAt = t.clock();
      try {
        oe.setItem(au, Xe());
      } catch {
      }
    }
  }
  function z() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", ce();
  }
  function w() {
    var Y;
    if (r) return i;
    r = !0;
    const oe = t.storage();
    if (!oe) return null;
    let Pe = null;
    try {
      if (Pe = oe.getItem(au), Pe === null) {
        const fe = oe.getItem(om);
        return i = fe === null ? null : JSON.parse(fe), i;
      }
      oe.setItem(om, Pe), oe.removeItem(au), i = JSON.parse(Pe);
    } catch {
      return i;
    }
    const P = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], D = P.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${P.length} records kept. Its last records:`,
      JSON.stringify(D)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((Y = P.at(-1)) == null ? void 0 : Y.t) || 0).toISOString()}; ${P.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(D)
    ), i;
  }
  function pe(oe) {
    const Pe = oe === !0;
    if (w(), Pe !== n) {
      if (n = Pe, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, c = 0, G.length = 0, s = t.observeLongTasks((P) => {
          for (const D of P)
            j.count += 1, j.maxMs = Math.max(j.maxMs, D.duration);
        }), t.addUnload(z), a = t.setInterval(ze, Qw), ce();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(z), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", ce();
    }
  }
  function Ne() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...W], records: G.map((oe) => oe.record) } : null,
      previous: i
    };
  }
  function De() {
    const oe = t.document(), Pe = new Blob([JSON.stringify(Ne(), null, 1)], { type: "application/json" }), P = URL.createObjectURL(Pe), D = oe.createElement("a");
    D.href = P, D.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, D.click(), setTimeout(() => URL.revokeObjectURL(P), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: J,
    releaseCanvas: de,
    trackCanvas: I,
    createVideo: xe,
    trackVideo: H,
    watchContext: _e,
    addSource: he,
    frameStart: te,
    frameEnd: R,
    renderEnd: O,
    sample: ze,
    serialize: Xe,
    recoverPrevious: w,
    setEnabled: pe,
    exportData: Ne,
    download: De
  };
}
const Hn = rx(), Mn = Hn.createCanvas, qu = Hn.releaseCanvas, su = Hn.trackCanvas, hc = Hn.createVideo, am = Hn.trackVideo, ix = Hn.addSource, ox = Hn.frameStart, ax = Hn.frameEnd;
function M0(e, t) {
  const n = Hn.watchContext(e.canvas, t), r = Hn.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = Hn.frameStart(), c = o(a);
    return Hn.renderEnd(t, s), c;
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
const sx = {
  id: Uw,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Hn.setEnabled(e === !0)
}, sm = {
  id: Yw,
  label: "Export Panorama Suite diagnostics",
  function: () => Hn.download()
};
function Io(e, t) {
  const n = Mn({ label: "paint.surface" });
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
function lm(e, t = 8) {
  var f;
  const n = (f = e == null ? void 0 : e.getContext) == null ? void 0 : f.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || i < 1) return null;
  const o = n.getImageData(0, 0, r, i).data;
  let a = r, s = i, c = -1, p = -1;
  for (let h = 0; h < i; h += 1)
    for (let g = 0; g < r; g += 1)
      o[(h * r + g) * 4 + 3] <= t || (g < a && (a = g), h < s && (s = h), g > c && (c = g), h > p && (p = h));
  return c < a || p < s ? null : {
    minX: a,
    minY: s,
    maxX: c,
    maxY: p,
    width: c - a + 1,
    height: p - s + 1,
    aspect: Number(((c - a + 1) / Math.max(1, p - s + 1)).toFixed(4))
  };
}
function Xd(e, t) {
  return Mn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function yi(e, t, n) {
  if (!e) return Io(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Qt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function _n(e) {
  e.displayDirty = !0, e.revision += 1;
}
let lu = null, cu = null, cm = null, um = null, Zt = null, Ma = null;
function cx() {
  if (cu) return cu;
  const e = 6, t = 17, n = Mn({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), cu = n, n;
}
function uu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  lu = yi(lu, n, r);
  const i = lu;
  Qt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", um !== i.ctx && (cm = i.ctx.createPattern(cx(), "repeat"), um = i.ctx), i.ctx.fillStyle = cm, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function ux(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function dx(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function fx(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function px(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ut = /* @__PURE__ */ new Map(), qd = 128;
function hx(e, t, n, r, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), c = `${a}:${s.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if (Ut.has(c)) {
    const W = Ut.get(c);
    return Ut.delete(c), Ut.set(c, W), W;
  }
  Ut.size >= qd && Ut.delete(Ut.keys().next().value);
  const p = a * 2 + 2, f = a + 1, h = Xd(p, p), g = h.getContext("2d"), _ = s * a, v = a + 1, S = `rgba(${n},${r},${i},${o})`, M = `rgba(${n},${r},${i},0)`, C = g.createRadialGradient(f, f, _, f, f, v);
  return C.addColorStop(0, S), C.addColorStop(1, M), g.fillStyle = C, g.fillRect(0, 0, p, p), Ut.set(c, h), h;
}
function mx(e, t, n, r, i, o, a) {
  const { r: s, g: c, b: p, a: f } = r, h = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, i), v = Math.max(0, Math.min(0.99, o)), S = Math.max(0, Math.min(1, a ?? 0)), M = `chisel:${h}:${g}:${n.toFixed(2)}:${s}:${c}:${p}:${f.toFixed(3)}:${_.toFixed(2)}:${v.toFixed(2)}:${S.toFixed(2)}`;
  if (Ut.has(M)) {
    const re = Ut.get(M);
    return Ut.delete(M), Ut.set(M, re), re;
  }
  Ut.size >= qd && Ut.delete(Ut.keys().next().value);
  const C = Xd(h, g), W = C.getContext("2d"), V = W.createImageData(h, g), $ = V.data, y = Math.max(0, e - t), j = Math.max(0, Math.min(1, n)), G = 1 + _;
  for (let re = 0; re < g; re++)
    for (let se = 0; se < h; se++) {
      const I = se + 0.5 - e, H = re + 0.5 - t, J = Math.max(Math.abs(I) - y, 0), xe = Math.hypot(J, H) / t;
      if (xe >= 1) continue;
      const _e = xe <= j ? 1 : Math.max(0, (1 - xe) / Math.max(1e-4, 1 - j)), he = 1 - xe, te = 1 + _ * (1 - he) * (1 - he), R = 1 - v * he * he, O = te * R / G;
      let ue = 1;
      if (S > 0) {
        const Xe = Math.floor((H + t) / 1.5), ce = Math.floor((I + e) / 8), z = to(zo(Xe * 41 + 500, ce * 19 + 300));
        ue = 1 - S * 0.42 * z;
      }
      const Me = Math.round(255 * Math.min(1, f * _e * O * ue));
      if (Me <= 0) continue;
      const ze = (re * h + se) * 4;
      $[ze] = s, $[ze + 1] = c, $[ze + 2] = p, $[ze + 3] = Me;
    }
  return W.putImageData(V, 0, 0), Ut.set(M, C), C;
}
function zo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function to(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function gx(e, t, n, r, i, o, a) {
  const s = e + 0.5 - n, c = t + 0.5 - r, p = Math.max(0, n - r), f = Math.max(Math.abs(s) - p, 0), h = Math.hypot(f, c) / r;
  if (h >= 1) return 0;
  const g = to(zo(e * 17 + 3, t * 13 + 7)), _ = h + o * 0.22 * (g - 0.5);
  if (_ >= 1) return 0;
  const v = _ <= i ? 1 : Math.max(0, (1 - _) / Math.max(1e-4, 1 - i)), S = yx(e, t, s, c, n, r), M = o * 0.55;
  if (S < M) return 0;
  const W = 0.45 + 0.55 * ((S - M) / Math.max(1e-4, 1 - M));
  return Math.round(255 * Math.min(1, a * v * W));
}
function yx(e, t, n, r, i, o) {
  const a = Math.floor((n + i) / 3), s = Math.floor((r + o) / 2), c = to(zo(a * 13 + 700, s * 17 + 400)), p = Math.floor((n + i) / 1.5), f = Math.floor((r + o) / 1.5), h = to(zo(p * 23 + 800, f * 29 + 500)), g = to(zo(e * 3 + 100, t * 5 + 200));
  return c * 0.55 + h * 0.3 + g * 0.15;
}
function bx(e, t, n, r, i) {
  const { r: o, g: a, b: s, a: c } = r, p = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, Math.min(1, i)), g = `crayon:${p}:${f}:${n.toFixed(2)}:${o}:${a}:${s}:${c.toFixed(3)}:${h.toFixed(2)}`;
  if (Ut.has(g)) {
    const W = Ut.get(g);
    return Ut.delete(g), Ut.set(g, W), W;
  }
  Ut.size >= qd && Ut.delete(Ut.keys().next().value);
  const _ = Xd(p, f), v = _.getContext("2d"), S = v.createImageData(p, f), M = S.data, C = Math.max(0, Math.min(1, n));
  for (let W = 0; W < f; W++)
    for (let V = 0; V < p; V++) {
      const $ = gx(V, W, e, t, C, h, c);
      if ($ <= 0) continue;
      const y = (W * p + V) * 4;
      M[y] = o, M[y + 1] = a, M[y + 2] = s, M[y + 3] = $;
    }
  return v.putImageData(S, 0, 0), Ut.set(g, _), _;
}
function N0(e, t, n) {
  var S, M;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = fx(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = vx(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), c = Number(((S = t == null ? void 0 : t.angle) == null ? void 0 : S.value) ?? 0), p = px(t, i), f = String(((M = t == null ? void 0 : t.targetSpace) == null ? void 0 : M.viewMode) || ""), h = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && f !== "unwrap", g = t == null ? void 0 : t.scatter, _ = g ? { radius: Number(g.radius ?? 1.5), count: Math.max(1, Math.round(g.count ?? 6)) } : null;
  let v;
  if (r === "chisel") {
    const C = i * s, W = i, V = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), $ = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), y = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = mx(C, W, o, a, V, $, y);
  } else if (r === "crayon") {
    const C = i * s, W = i, V = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = bx(C, W, o, a, V);
  } else
    v = hx(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: v, radiusPx: i, spacingPx: p, desc: n, aspect: s, angle: c, stampKind: r, scatter: _, latitudeCorrection: h };
}
function vx(e) {
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
function _x(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function dm(e, t, n, r, i) {
  const o = e.angle, a = e.desc.width;
  function s(p, f) {
    o === 0 ? e.ctx.drawImage(e.stampTex, p - i, f - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(p, f), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  s(t, n);
  const c = o === 0 ? i : i * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - c < 0 && s(t + a, n), t + c > a && s(t - a, n);
}
function Jd(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: p, count: f } = e.scatter, h = p * e.radiusPx * i, g = zo(t, n);
    for (let _ = 0; _ < f; _++) {
      const v = to(g + _ * 2) * Math.PI * 2, S = Math.sqrt(to(g + _ * 2 + 1)) * h, M = t + Math.cos(v) * S, C = n + Math.sin(v) * S, W = Math.max(0.5, e.radiusPx * i * 0.48), V = (0.5 - C / Math.max(1, e.desc.height)) * Math.PI, $ = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, y = W * e.aspect * $;
      dm(e, M, C, W, y);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, c = o * e.aspect * s;
  dm(e, t, n, o, c);
}
function fm(e, t, n) {
  const r = dx(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, a = N0(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let g = 0; g < r.length; g++) {
    let _ = Number(r[g].u || 0) * i;
    const v = Number(r[g].v || 0) * o;
    g > 0 && Math.abs(_ - s[g - 1].x) > i * 0.5 && (_ += _ < s[g - 1].x ? i : -i), s.push({ x: _, y: v });
  }
  if (Jd(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let c = s[0], p = s[0], f = s[0], h = 0;
  for (let g = 1; g < s.length; g++) {
    const _ = s[g], v = { x: (p.x + _.x) * 0.5, y: (p.y + _.y) * 0.5 };
    g === 1 ? h = ts(a, f.x, f.y, v.x, v.y, h) : h = El(a, c, f, v, _, h), c = p, p = _, f = v;
  }
  s.length === 2 ? ts(a, f.x, f.y, p.x, p.y, h) : El(a, c, f, p, p, h), e.restore();
}
function sl(e, t, n) {
  var h;
  const r = Array.isArray((h = t == null ? void 0 : t.geometry) == null ? void 0 : h.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, a = _x(t), s = [];
  let c = 1 / 0, p = -1 / 0;
  for (let g = 0; g < r.length; g++) {
    const _ = ux(r[g]);
    let v = Number(_.x || 0) * i;
    g > 0 && Math.abs(v - s[g - 1].x) > i * 0.5 && (v += v < s[g - 1].x ? i : -i), s.push({ x: v, y: Number(_.y || 0) * o }), v < c && (c = v), v > p && (p = v);
  }
  function f(g) {
    e.beginPath(), e.moveTo(s[0].x + g, s[0].y);
    for (let _ = 1; _ < s.length; _++) e.lineTo(s[_].x + g, s[_].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, f(0), c < 0 && f(i), p > i && f(-i), e.restore();
}
function Gs(e, t, n) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    sl(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? fm(e, t, n) : (Ma = yi(Ma, n.width, n.height), Qt(Ma), fm(Ma.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Ma.canvas, 0, 0), e.restore());
}
function ji(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ts(e, t, n, r, i, o) {
  const a = r - t, s = i - n, c = Math.hypot(a, s);
  if (c < 1e-9) return o;
  let p = e.spacingPx - o;
  for (; p <= c; ) {
    const f = p / c;
    Jd(e, t + a * f, n + s * f, 1), p += e.spacingPx;
  }
  return c - p + e.spacingPx;
}
function El(e, t, n, r, i, o) {
  const s = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, c = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, f = 0, h = s, g = h + c, _ = g + p, v = g - h, S = 16;
  let M = o, C = n.x, W = n.y;
  for (let V = 1; V <= S; V++) {
    const $ = h + v * V / S, y = ((h - $) * t.x + ($ - f) * n.x) / (h - f), j = ((h - $) * t.y + ($ - f) * n.y) / (h - f), G = ((g - $) * n.x + ($ - h) * r.x) / (g - h), re = ((g - $) * n.y + ($ - h) * r.y) / (g - h), se = ((_ - $) * r.x + ($ - g) * i.x) / (_ - g), I = ((_ - $) * r.y + ($ - g) * i.y) / (_ - g), H = ((g - $) * y + ($ - f) * G) / (g - f), J = ((g - $) * j + ($ - f) * re) / (g - f), de = ((_ - $) * G + ($ - h) * se) / (_ - h), xe = ((_ - $) * re + ($ - h) * I) / (_ - h), _e = ((g - $) * H + ($ - h) * de) / (g - h), he = ((g - $) * J + ($ - h) * xe) / (g - h);
    M = ts(e, C, W, _e, he, M), C = _e, W = he;
  }
  return M;
}
function Sx(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = n * o.height, c = e.activeStroke;
  let p = t * a;
  if (c && Math.abs(p - c.prev.x) > a * 0.5 && (p += p < c.prev.x ? a : -a), !c) {
    const _ = N0(i, r, o), v = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), S = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), M = String((r == null ? void 0 : r.toolKind) || "") === "eraser", C = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Jd(_, p, s, 1), e.activeStroke = {
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
      isEraser: M,
      layerKind: C,
      pointCount: 1
    }, _n(e);
    return;
  }
  const f = (c.prev.x + p) * 0.5, h = (c.prev.y + s) * 0.5;
  i.globalCompositeOperation = "source-over";
  const g = {
    ctx: i,
    stampTex: c.stampTex,
    radiusPx: c.radiusPx,
    spacingPx: c.spacingPx,
    desc: o,
    aspect: c.aspect,
    angle: c.angle,
    stampKind: c.stampKind,
    scatter: c.scatter,
    latitudeCorrection: c.latitudeCorrection
  };
  c.pointCount === 1 ? c.distSinceStamp = ts(g, c.lastMidX, c.lastMidY, f, h, c.distSinceStamp) : c.distSinceStamp = El(
    g,
    c.pprev,
    { x: c.lastMidX, y: c.lastMidY },
    { x: f, y: h },
    { x: p, y: s },
    c.distSinceStamp
  ), c.pprev = c.prev, c.prev = { x: p, y: s }, c.lastMidX = f, c.lastMidY = h, c.pointCount++, _n(e);
}
function Zd(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), o = Io(t, n), a = {
    descriptor: r,
    committedMask: Io(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, s = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Io(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, c = Io(t, n);
  let p = null, f = "", h = null;
  const g = /* @__PURE__ */ new Map();
  let _ = null;
  function v(de) {
    return {
      actionGroupId: de,
      descriptor: r,
      committedPaint: Io(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function S(de) {
    let xe = i.get(de);
    return xe || (xe = v(de), i.set(de, xe)), xe;
  }
  function M(de) {
    return f === "mask" ? a : p ? S(p) : s;
  }
  function C(de) {
    var O;
    const xe = !h || h.length !== de.length || de.some((ue, Me) => ue !== h[Me]), _e = f === "paint" && ((O = p ? i.get(p) : s) == null ? void 0 : O.activeStroke) || null;
    let he = a.displayDirty || s.displayDirty || xe;
    for (const ue of de) {
      const Me = i.get(ue);
      if (Me != null && Me.displayDirty) {
        he = !0;
        break;
      }
    }
    if (_e && (he = !0), !he) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const ue of de) {
      const Me = i.get(ue);
      Me && (Me.displayDirty = !1);
    }
    h = [...de];
    const te = c.ctx;
    Qt(c);
    const R = !!(_e != null && _e.isEraser);
    for (const ue of de) {
      const Me = i.get(ue);
      if (!Me) continue;
      const Xe = p === Me.actionGroupId && f === "paint" ? Me.activeStroke : null;
      if (R)
        Zt = yi(Zt, t, n), Qt(Zt), Zt.ctx.drawImage(Me.committedPaint.canvas, 0, 0), ji(Zt.ctx, o.canvas), te.drawImage(Zt.canvas, 0, 0);
      else if (te.drawImage(Me.committedPaint.canvas, 0, 0), Xe) {
        const ce = Me.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Xe.strokeOpacity ?? 1));
        te.save(), te.globalAlpha = ce, te.drawImage(o.canvas, 0, 0), te.restore();
      }
    }
  }
  function W(de) {
    var _e, he, te, R, O;
    for (const ue of i.values())
      Qt(ue.committedPaint), Qt(ue.currentStroke), ue.activeStroke = null, _n(ue);
    Qt(a.committedMask), Qt(a.currentStroke), a.activeStroke = null, a.painted = !1, g.clear(), _n(a), _n(s), h = null;
    const xe = [
      ...Array.isArray((he = (_e = de == null ? void 0 : de.painting) == null ? void 0 : _e.paint) == null ? void 0 : he.strokes) ? de.painting.paint.strokes : [],
      ...Array.isArray((R = (te = de == null ? void 0 : de.painting) == null ? void 0 : te.mask) == null ? void 0 : R.strokes) ? de.painting.mask.strokes : []
    ];
    for (const ue of xe) {
      if (((O = ue == null ? void 0 : ue.targetSpace) == null ? void 0 : O.kind) !== "ERP_GLOBAL") continue;
      const Me = String((ue == null ? void 0 : ue.layerKind) || "paint"), Xe = String((ue == null ? void 0 : ue.toolKind) || "pen") === "eraser";
      if (Me === "mask") {
        const ce = a.descriptor;
        Xe ? (Zt = yi(Zt, ce.width, ce.height), Qt(Zt), Gs(Zt.ctx, ue, ce), ji(a.committedMask.ctx, Zt.canvas)) : (Gs(a.committedMask.ctx, ue, ce), a.painted = !0);
        continue;
      }
      if (Xe) {
        Zt = yi(Zt, r.width, r.height), Qt(Zt), Gs(Zt.ctx, ue, r);
        for (const ce of i.values())
          ji(ce.committedPaint.ctx, Zt.canvas), _n(ce);
      } else {
        const ce = String((ue == null ? void 0 : ue.actionGroupId) || "__default__"), z = S(ce), w = z.descriptor;
        Gs(z.committedPaint.ctx, ue, w), _n(z);
      }
    }
    C([...i.keys()]);
  }
  function V(de, xe) {
    f = String((de == null ? void 0 : de.layerKind) || "");
    const _e = String((de == null ? void 0 : de.toolKind) || "") === "eraser";
    if (f === "mask")
      p = null, Qt(a.currentStroke), a.activeStroke = null, _n(a);
    else {
      const he = _e ? s : S(String((de == null ? void 0 : de.actionGroupId) || "__default__"));
      p = _e ? "" : String((de == null ? void 0 : de.actionGroupId) || "__default__"), Qt(he.currentStroke), he.activeStroke = null, _n(he);
    }
  }
  function $(de, xe) {
    var Me;
    const _e = String((de == null ? void 0 : de.layerKind) || "paint"), he = String((de == null ? void 0 : de.toolKind) || "") === "eraser", te = _e === "mask" ? a : he ? s : S(String((de == null ? void 0 : de.actionGroupId) || p || "__default__")), R = te.activeStroke, O = te.descriptor;
    if (R && R.pointCount > 1) {
      const ze = te.currentStroke.ctx;
      ze.globalCompositeOperation = "source-over";
      const Xe = {
        ctx: ze,
        stampTex: R.stampTex,
        radiusPx: R.radiusPx,
        spacingPx: R.spacingPx,
        desc: O,
        aspect: R.aspect,
        angle: R.angle,
        stampKind: R.stampKind,
        scatter: R.scatter,
        latitudeCorrection: R.latitudeCorrection
      };
      R.pointCount === 2 ? ts(Xe, R.lastMidX, R.lastMidY, R.prev.x, R.prev.y, R.distSinceStamp) : El(Xe, R.pprev, { x: R.lastMidX, y: R.lastMidY }, R.prev, R.prev, R.distSinceStamp);
    }
    te.lassoPreviewActive && (Qt(te.currentStroke), sl(te.currentStroke.ctx, de, O), te.lassoPreviewActive = !1);
    const ue = _e === "mask" ? a.committedMask : te.committedPaint;
    if (he && _e === "paint")
      for (const ze of i.values())
        ji(ze.committedPaint.ctx, te.currentStroke.canvas), _n(ze);
    else if (he)
      ji(ue.ctx, te.currentStroke.canvas);
    else {
      _e === "mask" && (a.painted = !0);
      const ze = Math.max(0, Math.min(1, (R == null ? void 0 : R.strokeOpacity) ?? 1));
      ue.ctx.save(), ue.ctx.globalAlpha = ze, ue.ctx.drawImage(te.currentStroke.canvas, 0, 0), ue.ctx.restore();
    }
    lx() && (String((de == null ? void 0 : de.toolKind) || ""), String((O == null ? void 0 : O.kind) || ""), Number((O == null ? void 0 : O.width) || 0), Number((O == null ? void 0 : O.height) || 0), String(((Me = de == null ? void 0 : de.targetSpace) == null ? void 0 : Me.viewMode) || ""), Number((de == null ? void 0 : de.aspect) ?? 1), lm(te.currentStroke.canvas), lm(ue.canvas), void 0), Qt(te.currentStroke), te.activeStroke = null, _n(te), g.clear(), p = null, f = "", C([...i.keys()]);
  }
  function y(de) {
    if (f === "mask")
      Qt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, _n(a);
    else if (f === "paint" && !p)
      Qt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, _n(s);
    else if (p) {
      const xe = i.get(p);
      xe && (Qt(xe.currentStroke), xe.activeStroke = null, xe.lassoPreviewActive = !1, _n(xe));
    }
    g.clear(), p = null, f = "", C([...i.keys()]);
  }
  function j(de, xe) {
    var he;
    if (f = String((de == null ? void 0 : de.layerKind) || ""), String(((he = de == null ? void 0 : de.geometry) == null ? void 0 : he.geometryKind) || "") === "lasso_fill") {
      if (f === "mask")
        Qt(a.currentStroke), sl(a.currentStroke.ctx, de, a.descriptor), a.lassoPreviewActive = !0, _n(a);
      else {
        const te = String((de == null ? void 0 : de.toolKind) || "") === "eraser", R = te ? s : S(String((de == null ? void 0 : de.actionGroupId) || p || "__default__"));
        p = te ? "" : String((de == null ? void 0 : de.actionGroupId) || p || "__default__"), Qt(R.currentStroke), sl(R.currentStroke.ctx, de, R.descriptor), R.lassoPreviewActive = !0, _n(R);
      }
      C([...i.keys()]);
    }
  }
  function G(de) {
    return C(de ?? [...i.keys()]), {
      displayPaint: c,
      committedMask: a.committedMask,
      descriptor: r
    };
  }
  function re(de) {
    return i.get(String(de)) ?? null;
  }
  function se() {
    return [...i.keys()];
  }
  function I(de) {
    var ze;
    const xe = i.get(String(de));
    if (!xe) return null;
    const _e = f === "paint" && p === xe.actionGroupId, he = f === "paint" && ((ze = p ? i.get(p) : s) == null ? void 0 : ze.activeStroke) || null, te = !!(he != null && he.isEraser), R = _e ? xe.activeStroke : null;
    if (!te && !R) return xe.committedPaint.canvas;
    const O = `${xe.revision}:${s.revision}:${te}`, ue = g.get(xe.actionGroupId);
    if ((ue == null ? void 0 : ue.key) === O) return ue.surface.canvas;
    const Me = yi((ue == null ? void 0 : ue.surface) ?? null, t, n);
    return Qt(Me), Me.ctx.drawImage(xe.committedPaint.canvas, 0, 0), te ? ji(Me.ctx, o.canvas) : (Me.ctx.save(), Me.ctx.globalAlpha = xe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, R.strokeOpacity ?? 1)), Me.ctx.drawImage(o.canvas, 0, 0), Me.ctx.restore()), g.set(xe.actionGroupId, { key: O, surface: Me }), Me.canvas;
  }
  function H() {
    const de = f === "mask" ? a.activeStroke : null;
    return !a.painted && (!de || de.isEraser) ? null : `${a.revision}:${!!de}`;
  }
  function J() {
    const de = H();
    if (de === null)
      return _ = null, null;
    if ((_ == null ? void 0 : _.key) === de) return _.surface.canvas;
    const xe = yi((_ == null ? void 0 : _.surface) ?? null, t, n);
    Qt(xe);
    const _e = f === "mask" ? a.activeStroke : null;
    return _e != null && _e.isEraser ? (Zt = yi(Zt, t, n), Qt(Zt), Zt.ctx.drawImage(a.committedMask.canvas, 0, 0), ji(Zt.ctx, o.canvas), uu(xe.ctx, Zt.canvas)) : (uu(xe.ctx, a.committedMask.canvas), _e && uu(xe.ctx, o.canvas)), _ = { key: de, surface: xe }, xe.canvas;
  }
  return {
    rebuildCommitted: W,
    beginStroke: V,
    appendStrokePoint: Sx,
    updateActiveStroke: j,
    commitActiveStroke: $,
    cancelActiveStroke: y,
    getErpTarget: G,
    ensureTarget: M,
    getGroupTarget: re,
    getGroupDisplayCanvas: I,
    getMaskDisplayCanvas: J,
    getMaskDisplayRevision: H,
    getAllGroupIds: se
  };
}
function Ie(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Bt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Qd(e, t) {
  let n = Bt(t) - Bt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Ju = 3;
function Na(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ol(e, t = 0) {
  const n = Na(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Na(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = Na(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Na(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Na(t) || 0);
}
function P0(e) {
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
const pm = Math.PI / 180, hm = 0.12, wx = Ju, xx = 35, kx = 140, Oa = 100, Mx = 20, mm = 0.8;
function Nx(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Ie(Number(e || Oa), 1, 179) * pm;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / pm;
}
function ef(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Oa })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, c = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function p(W, V = null) {
    s && s(W, V);
  }
  function f(W, V, $ = null, y = performance.now()) {
    return c.drag.active = !0, c.drag.lastX = Number(W || 0), c.drag.lastY = Number(V || 0), c.drag.lastTs = Number(y || performance.now()), c.drag.pointerId = $, c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, c.inertia.lastTs = c.drag.lastTs, c.velHistory = [], p("drag", { phase: "start", x: c.drag.lastX, y: c.drag.lastY, pointerId: $ }), !0;
  }
  function h(W, V, $ = "pano", y = performance.now()) {
    if (!c.drag.active) return !1;
    const j = Number(y || performance.now()), G = Number(W), re = Number(V), se = G - c.drag.lastX, I = re - c.drag.lastY;
    c.drag.lastX = G, c.drag.lastY = re, c.drag.lastTs = j;
    const H = r() || { x: 1, y: 1 }, J = Number(H.x || 1), de = Number(H.y || 1), xe = { ...t() };
    let _e = 0, he = 0;
    if ($ === "unwrap") {
      const R = i() || { w: 1, h: 1 }, O = Math.max(1, Number(R.w || 1)), ue = Math.max(1, Number(R.h || 1)), Me = se / O, ze = I / ue;
      _e = -Me * 360 * J, he = ze * 180 * de;
    } else {
      const R = o() || { w: 0, h: 0 }, O = Math.max(1, Number(R.w || 0)), ue = Math.max(1, Number(R.h || 0));
      if (O > 1 && ue > 1) {
        const Me = Ie(Number(xe.fov || Oa), 1, 179), ze = Ie(Nx(Me, O, ue), 0.1, 179);
        _e = -(se / O) * Me * J, he = I / ue * ze * de;
      } else
        _e = -se * hm * J, he = I * hm * de;
    }
    xe.yaw = Bt(Number(xe.yaw || 0) + _e), xe.pitch = Ie(Number(xe.pitch || 0) + he, -89.9, 89.9), n(xe), c.velHistory.push({ ts: j, yaw: xe.yaw, pitch: xe.pitch });
    let te = 0;
    for (; te < c.velHistory.length - 1 && c.velHistory[te].ts < j - 100; ) te++;
    return te > 0 && c.velHistory.splice(0, te), c.inertia.active = !1, c.inertia.lastTs = j, a(), p("drag", { phase: "move", dx: se, dy: I, dYaw: _e, dPitch: he }), !0;
  }
  function g(W = performance.now()) {
    if (!c.drag.active) return !1;
    c.drag.active = !1;
    const V = Number(W || performance.now());
    c.drag.lastTs = V;
    const $ = c.velHistory.filter((j) => V - j.ts <= 80);
    if ($.length >= 2) {
      const j = $[0], G = $.at(-1), re = Math.max(1e-3, (G.ts - j.ts) / 1e3);
      let se = G.yaw - j.yaw;
      se > 180 && (se -= 360), se < -180 && (se += 360), c.inertia.vx = se / re, c.inertia.vy = (G.pitch - j.pitch) / re;
    } else
      c.inertia.vx = 0, c.inertia.vy = 0;
    c.velHistory = [];
    const y = Math.hypot(c.inertia.vx, c.inertia.vy);
    return c.inertia.active = y > Mx, c.inertia.lastTs = V, p("drag", { phase: "end", speed: y, inertiaActive: c.inertia.active }), !0;
  }
  function _(W = performance.now()) {
    if (!c.inertia.active) return !1;
    const V = Number(W || performance.now()), $ = Math.max(1e-3, (V - (c.inertia.lastTs || V)) / 1e3);
    c.inertia.lastTs = V;
    const y = { ...t() };
    y.yaw = Bt(Number(y.yaw || 0) + c.inertia.vx * $), y.pitch = Ie(Number(y.pitch || 0) + c.inertia.vy * $, -89.9, 89.9);
    const j = Math.exp(-5.5 * $);
    return c.inertia.vx *= j, c.inertia.vy *= j, Math.abs(c.inertia.vx) < mm && Math.abs(c.inertia.vy) < mm && (c.inertia.vx = 0, c.inertia.vy = 0, c.inertia.active = !1), n(y), a(), c.inertia.active;
  }
  function v() {
    const W = c.drag.active || c.inertia.active || c.inertia.vx !== 0 || c.inertia.vy !== 0;
    return c.drag.active = !1, c.drag.pointerId = null, c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, c.velHistory = [], W;
  }
  function S(W) {
    const V = Math.sign(Number(W || 0));
    if (!V) return !1;
    const $ = { ...t() }, y = Number($.fov || Oa);
    return $.fov = Ie(y + V * wx, xx, kx), n($), a(), p("wheel", { deltaSign: V, fovBefore: y, fovAfter: $.fov }), !0;
  }
  function M(W, V = 0) {
    return S(Ol(W, V));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: Oa }), c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, a();
  }
  return {
    state: c,
    startDrag: f,
    moveDrag: h,
    endDrag: g,
    stepInertia: _,
    stopMotion: v,
    applyWheel: S,
    applyWheelEvent: M,
    resetView: C
  };
}
const Lt = Math.PI / 180, dn = 180 / Math.PI;
function lr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Tl(e, t) {
  return lr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Fl(e, t) {
  return lr(e.x * t, e.y * t, e.z * t);
}
function du(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function tf(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return lr(e.x / t, e.y / t, e.z / t);
}
function jn(e, t) {
  const n = e * Lt, r = t * Lt, i = Math.cos(r);
  return lr(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function ea(e, t, n = 0) {
  const r = Number(e || 0) * Lt, i = Number(t || 0) * Lt, o = n * Lt, a = Math.cos(r), s = Math.sin(r), c = Math.cos(i), p = Math.sin(i), f = Math.cos(o), h = Math.sin(o);
  return {
    right: lr(
      a * f - s * p * h,
      c * h,
      -s * f - a * p * h
    ),
    up: lr(
      -a * h - s * p * f,
      c * f,
      s * h - a * p * f
    ),
    fwd: lr(s * c, p, a * c)
  };
}
function Dl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Vt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Px() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Ax(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const i = String(r.actionGroupId || r.id || "").trim();
    if (!i || n.has(i)) continue;
    n.add(i);
    const o = Vt(r.z_index ?? r.zIndex, t.length);
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
function Cx(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Ix(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = Vt(e.t, 0), r = Vt(e.widthScale, null), i = Vt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Vt(e.u, null), a = Vt(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, a)),
      t: n
    };
    return r != null && (s.widthScale = Math.max(0, r)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = Vt(e.u, null), a = Vt(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: a,
      t: n
    };
    return r != null && (s.widthScale = Math.max(0, r)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  return null;
}
function Ws(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = Ix(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function Ex(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const c = Ws(e.points, t, 3);
    return c ? { geometryKind: i, points: c } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const o = Ws(e.points, t, 1);
  if (!o) return null;
  const a = Ws(e.rawPoints, t, 1), s = Ws(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((c) => ({ ...c })),
    processedPoints: s || o.map((c) => ({ ...c }))
  };
}
function Ox(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Cx(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = Ex(e.geometry, n, r, t === "paint");
  if (!i) return null;
  const o = Vt(e.size, null), a = Vt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), c = String(e.actionGroupId || "").trim();
  if (!s || !c) return null;
  const p = Vt(e.radiusValue, null), f = String(e.radiusModel || "").trim() || null;
  let h = null;
  if (t === "paint") {
    const g = e.color;
    if (!g || typeof g != "object") return null;
    h = {
      r: Math.max(0, Math.min(1, Vt(g.r, 0))),
      g: Math.max(0, Math.min(1, Vt(g.g, 0))),
      b: Math.max(0, Math.min(1, Vt(g.b, 0))),
      a: Math.max(0, Math.min(1, Vt(g.a, 1)))
    };
  }
  return {
    id: s,
    actionGroupId: c,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, a)),
    hardness: Vt(e.hardness, null),
    flow: Vt(e.flow, null),
    spacing: Vt(e.spacing, null),
    createdAt: Math.trunc(Vt(e.createdAt, 0)),
    color: h,
    radiusModel: f,
    radiusValue: p == null ? null : Math.max(0, p),
    geometry: i
  };
}
function gm(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = Ox(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function Tx(e) {
  if (!e || typeof e != "object") return null;
  const t = Vt(e.u0, null), n = Vt(e.v0, null), r = Vt(e.u1, null), i = Vt(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function Fx(e) {
  const t = e || {};
  return {
    du: Vt(t.du, 0) ?? 0,
    dv: Vt(t.dv, 0) ?? 0,
    rot_deg: Vt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Vt(t.scale, 1) ?? 1)
  };
}
function Dx(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Tx(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Vt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: Fx(e.transform)
  } : null;
}
function Lx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = Dx(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function Yo(e) {
  const t = Px();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Ax(e.groups),
    paint: gm(e.paint, "paint"),
    mask: gm(e.mask, "mask"),
    raster_objects: Lx(e.raster_objects)
  };
}
const ur = 1, dr = 179, Zu = 85;
function mc(e) {
  const t = ((mt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function A0(e, t) {
  let n = mt(e, 0) - mt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function C0(e, t, { shiftKey: n = !1 } = {}) {
  let r = mt(e, 0) + mt(t, 0) * dn;
  return n && (r = Math.round(r / 15) * 15), mc(r);
}
function mt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function wi(e = {}) {
  const t = Ie(mt(e.hFOV_deg || 90, 90), ur, dr), n = Ie(mt(e.vFOV_deg || 60, 60), ur, dr), r = Math.tan(t * Lt * 0.5), i = Math.tan(n * Lt * 0.5);
  return {
    yawDeg: mt(e.yaw_deg, 0),
    pitchDeg: mt(e.pitch_deg, 0),
    rollDeg: mt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: i,
    aspect: r / Math.max(1e-12, i)
  };
}
function no(e, t) {
  const n = Math.max(1, mt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, mt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = wi(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function nf(e, t) {
  const n = Math.max(1, mt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, mt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, mt(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function rf(e, t) {
  const n = Math.max(1e-12, mt(t, 1)), r = Math.max(1e-6, mt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, mt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(r / (2 * n)) * dn, ur, dr), a = Ie(2 * Math.atan(i / (2 * n)) * dn, ur, dr);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Rx(e, t, n) {
  const r = mt(e == null ? void 0 : e.x, 0), i = mt(e == null ? void 0 : e.y, 0), o = Math.max(1, mt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, mt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = wi(t), c = Math.max(1e-12, mt(n, 1)), p = 2 * c * s.tanHalfX, f = 2 * c * s.tanHalfY;
  return {
    x: r + (o - p) * 0.5,
    y: i + (a - f) * 0.5,
    w: p,
    h: f,
    focalPx: c
  };
}
function of(e, t, n = Zu) {
  const r = Math.max(1e-12, mt(t, 1)), i = Ie(mt(n, Zu), 1, 89.999), o = r * Math.tan(i * Lt), a = Math.max(1, mt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, mt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function I0(e, t, n) {
  const r = Math.max(1e-12, mt(t, 1));
  return {
    x: (mt(n == null ? void 0 : n.x, 0) - mt(e == null ? void 0 : e.x, 0)) / r,
    y: -(mt(n == null ? void 0 : n.y, 0) - mt(e == null ? void 0 : e.y, 0)) / r
  };
}
function Vx(e, t) {
  const n = Ie(mt(e, 90), ur, dr), r = Math.max(1e-6, mt(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(n * Lt * 0.5) / r) * dn,
    ur,
    dr
  );
}
function ll(e, t) {
  const n = Ie(mt(e, 60), ur, dr), r = Math.max(1e-6, mt(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(n * Lt * 0.5) * r) * dn,
    ur,
    dr
  );
}
function ym(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function $x(e, t) {
  const n = ym(e, 1), r = ym(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), a = Math.max(1, Math.round(r * i)), s = (p, f) => f ? s(f, p % f) : p, c = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / c))}:${Math.max(1, Math.round(a / c))}`;
}
function ao(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Lt, n = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Lt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Xi(e) {
  const t = ao(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || $x(t, 1);
}
function af(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Xi(t), t;
}
function E0({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ie(a, ur, dr) : Ie(Math.min(42, mt(i, 100) * 0.42), 8, 96);
  return af({
    id: String(e),
    label: "Frame 1",
    yaw_deg: mt(t, 0),
    pitch_deg: Ie(mt(n, 0), -89.9, 89.9),
    roll_deg: mc(r),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function ni(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Xi(e);
}
function O0(e, t) {
  const n = wi(e), r = mt(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * dn, o = 2 * Math.atan(n.tanHalfY * r) * dn;
  return i < ur || i > dr || o < ur || o > dr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function T0(e, t, n = Ju) {
  const r = Math.sign(mt(t, 0)), i = Math.abs(mt(n, Ju));
  if (!r || !(i > 0)) return null;
  const o = wi(e), a = o.hFovDeg + r * i;
  if (a < ur || a > dr) return null;
  const s = Math.tan(a * Lt * 0.5);
  return O0(e, s / o.tanHalfX);
}
function F0(e, t) {
  const n = wi(e), r = ea(n.yawDeg, n.pitchDeg, n.rollDeg), i = mt(t == null ? void 0 : t.x, 0), o = mt(t == null ? void 0 : t.y, 0);
  return tf(Tl(Tl(r.fwd, Fl(r.right, i)), Fl(r.up, o)));
}
function zx(e) {
  return lr(e.x, e.y, -e.z);
}
function cl(e) {
  return lr(e.x, e.y, -e.z);
}
function Wn(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = ea(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function D0(e) {
  const t = cl(lr(e[0][0], e[1][0], e[2][0])), n = cl(lr(e[0][1], e[1][1], e[2][1])), r = cl(lr(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), a = Math.cos(i), s = Math.sin(i), c = Math.atan2(s * n.z - a * n.x, a * t.x - s * t.z);
  return { yawDeg: i * dn, pitchDeg: o * dn, rollDeg: c * dn };
}
function ns(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function lo(e) {
  const [[t, n, r], [i, o, a], [s, c, p]] = e, f = t + o + p;
  if (f > 0) {
    const g = 0.5 / Math.sqrt(f + 1);
    return { x: (c - a) * g, y: (r - s) * g, z: (i - n) * g, w: 0.25 / g };
  }
  if (t > o && t > p) {
    const g = 2 * Math.sqrt(1 + t - o - p);
    return { x: 0.25 * g, y: (n + i) / g, z: (r + s) / g, w: (c - a) / g };
  }
  if (o > p) {
    const g = 2 * Math.sqrt(1 + o - t - p);
    return { x: (n + i) / g, y: 0.25 * g, z: (a + c) / g, w: (r - s) / g };
  }
  const h = 2 * Math.sqrt(1 + p - t - o);
  return { x: (r + s) / h, y: (a + c) / h, z: 0.25 * h, w: (i - n) / h };
}
function Ks(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const qi = 1e-6, Qu = 1e-6, jx = 1e-9;
function rs(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function Hx(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let a = 0, s = 1;
  for (let c = 0; c < 50; c += 1) {
    const p = 0.5 * (a + s);
    rs(0, n, i, 1, p) < t ? a = p : s = p;
  }
  return rs(0, r, o, 1, 0.5 * (a + s));
}
function Xo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function qo(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = n.map((g) => -g / i), s = r.map((g) => g / o);
  if (a.reduce((g, _, v) => g + _ * s[v], 0) < 0) return n.map(() => 0);
  const c = a.map((g, _) => (g * o + s[_] * i) / (i + o)), p = (g) => Math.sqrt(g.reduce((_, v) => _ + v * v, 0)), f = 3 * Math.min(p(a), p(s)), h = p(c);
  return h <= f ? c : c.map((g) => g * f / h);
}
function L0(e, t, n, r) {
  const i = n[r], o = n[r + 1], a = t[r + 1] - t[r], s = i.map((f, h) => o[h] - f);
  let c = s;
  Xo(e, r) && (c = qo(t, r, n[r - 1].map((f, h) => f - i[h]), s).map((f) => f * a));
  let p = s;
  return Xo(e, r + 1) && (p = qo(t, r + 1, s.map((f) => -f), n[r + 2].map((f, h) => f - o[h])).map((f) => f * a)), [c.map((f) => f / 3), p.map((f) => -f / 3)];
}
function R0(e, t, n, r, i) {
  const [[o], [a]] = L0(e, t, n.map((s) => [s]), r);
  return rs(n[r], n[r] + o, n[r + 1] + a, n[r + 1], i);
}
function Gx(e, t, n, r) {
  var p, f;
  const i = e.map((h) => h.value);
  let [o, a] = L0(e, t, i, n);
  o = ((p = e[n].handles) == null ? void 0 : p.out) ?? o, a = ((f = e[n + 1].handles) == null ? void 0 : f.in) ?? a;
  const s = i[n], c = i[n + 1];
  return [0, 1, 2].map((h) => rs(s[h], s[h] + o[h], c[h] + a[h], c[h], r));
}
function Ll([e, t, n, r], [i, o, a, s]) {
  return [
    r * i + e * s + t * a - n * o,
    r * o - e * a + t * s + n * i,
    r * a + e * o - t * i + n * s,
    r * s - e * i - t * o - n * a
  ];
}
function Wx(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function fu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Kx([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function ed(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Do(e, t) {
  return Kx(Ll([-e[0], -e[1], -e[2], e[3]], t));
}
function pu(e, t, n) {
  return Ll(e, ed(Do(e, t).map((r) => n * r)));
}
function hu(e, t) {
  const n = Wx(e, t);
  if (Math.abs(n) > Qu) return n < 0;
  const [r, i, o] = Do(e, t);
  for (const a of [-i, r, o])
    if (Math.abs(a) > Qu) return a < 0;
  return !1;
}
function Bs(e) {
  const { x: t, y: n, z: r, w: i } = lo(Wn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function td(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function Bx(e, t, n, r) {
  const i = Bs(e[n].value);
  let o = Bs(e[n + 1].value);
  hu(i, o) && (o = fu(o));
  const a = t[n + 1] - t[n], s = Do(i, o);
  let c = s;
  if (Xo(e, n)) {
    let y = Bs(e[n - 1].value);
    hu(y, i) && (y = fu(y)), c = qo(t, n, Do(i, y), s).map((j) => j * a);
  }
  let p = s;
  if (Xo(e, n + 1)) {
    let y = Bs(e[n + 2].value);
    hu(o, y) && (y = fu(y)), p = qo(t, n + 1, Do(o, i), Do(o, y)).map((j) => j * a);
  }
  const f = Ll(i, ed(c.map((y, j) => 0.5 * (y - s[j])))), h = Ll(o, ed(s.map((y, j) => 0.5 * (y - p[j])))), [g, _, v, S] = pu(pu(i, o, r), pu(f, h, r), 2 * r * (1 - r)), { yawDeg: M, pitchDeg: C, rollDeg: W } = D0(ns({ x: g, y: _, z: v, w: S })), V = e[n].value, $ = e[n + 1].value;
  return {
    yaw_deg: td(M, V.yaw_deg, $.yaw_deg, r),
    pitch_deg: C,
    roll_deg: td(W, V.roll_deg, $.roll_deg, r)
  };
}
function is(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function Rl(e) {
  return Math.sqrt(is(e, e));
}
function Vl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function V0(e, t) {
  const n = is(e, t), r = t.map((a, s) => a - n * e[s]), i = Rl(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((a) => a * o);
}
function Eo(e, t) {
  const n = Rl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function Us(e, t, n) {
  return Eo(e, V0(e, t).map((r) => n * r));
}
function mu(e, t) {
  const n = Vl(e[t].value), r = Vl(e[t + 1].value), i = is(n, r), o = i < 0 && Rl(r.map((c, p) => c - i * n[p])) <= Qu;
  let a;
  if (o) {
    const c = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(c), 0, -Math.PI * Math.sin(c)];
  } else
    a = V0(n, r);
  const s = Rl(a);
  return [a, a.map((c, p) => Math.cos(s) * c - s * Math.sin(s) * n[p]), o];
}
function Ux(e, t, n, r) {
  const i = Vl(e[n].value), o = Vl(e[n + 1].value), [a, s, c] = mu(e, n);
  let p = a, f = s;
  const h = t[n + 1] - t[n];
  Xo(e, n) && (p = qo(t, n, mu(e, n - 1)[1].map((V) => -V), p).map((V) => V * h)), Xo(e, n + 1) && (f = qo(t, n + 1, f.map((V) => -V), mu(e, n + 1)[0]).map((V) => V * h));
  let g, _, v;
  if (c) {
    const V = Math.PI, $ = rs(0, is(p, a) / V / 3, V - is(f, s) / V / 3, V, r);
    [g, _, v] = Eo(i, a.map((y) => $ * y / V));
  } else {
    const V = Us(Eo(i, p.map((j) => j / 3)), Eo(o, f.map((j) => -j / 3)), r), $ = Us(Eo(i, p.map((j) => r * j / 3)), V, r), y = Us(V, Eo(o, f.map((j) => -(1 - r) * j / 3)), r);
    [g, _, v] = Us($, y, r);
  }
  const S = Math.hypot(g, v), M = e[n].value.yaw_deg, C = e[n + 1].value.yaw_deg;
  return { yaw_deg: S <= jx ? M + (C - M) * r : td(Math.atan2(g, v) * 180 / Math.PI, M, C, r), pitch_deg: Math.atan2(_, S) * 180 / Math.PI };
}
function Yx(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = R0(e, t, e.map((a) => a.value[o]), n, r);
  return i;
}
function Xx(e, t, n, r) {
  return R0(e, t, e.map((i) => i.value), n, r);
}
const qx = { position: Gx, rotation: Bx, direction: Ux, size: Yx };
function qt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Ks(e[t].value);
  if (n <= r[0].frame + qi) return Ks(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - qi) return Ks(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + qi; ) o += 1;
  const a = r[o];
  if (Math.abs(n - a.frame) <= qi || a.easing === "hold") return Ks(a.value);
  const s = r.map((p) => p.frame), c = Hx(a.easing, (n - s[o]) / (s[o + 1] - s[o]));
  return (qx[t] ?? Xx)(r, s, o, c);
}
function nd(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Jx(e) {
  return Math.min(1, Math.max(0, e));
}
function $0(e) {
  return Math.max(1e-6, e);
}
function z0(e, t) {
  return t - (e.start - e.in);
}
function Jo(e, t) {
  return t >= e.start - qi && (e.duration === null || t < e.start + e.duration - qi);
}
function sf(e, t) {
  return {
    position: qt(e, "position", t),
    ...qt(e, "rotation", t),
    hFOV_deg: nd(qt(e, "fov", t)),
    aspect: e.aspect
  };
}
function gc(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = z0(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : sf(r, n),
    scene: {
      active: i.visible && Jo(i.clip, n),
      clip_frame: o,
      position: qt(i, "position", o),
      ...qt(i, "rotation", o),
      scale: $0(qt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => ro(a, n))
  };
}
function Zx(e, t) {
  if (e.placement === "world")
    return {
      position: qt(e, "position", t),
      ...qt(e, "rotation", t),
      scale: $0(qt(e, "scale", t))
    };
  const n = qt(e, "size", t);
  return {
    ...qt(e, "direction", t),
    roll_deg: qt(e, "roll", t),
    hFOV_deg: nd(n.hFOV_deg),
    vFOV_deg: nd(n.vFOV_deg)
  };
}
function ro(e, t) {
  const n = z0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Jo(e.clip, t),
    clip_frame: n,
    ...Zx(e, n),
    opacity: Jx(qt(e, "opacity", n))
  };
}
const Qx = 2, ek = ["sky", "world"], rd = ["perspective", "erp"], tk = ["input", "output", "temp"], j0 = [0.42, 0, 0.58, 1], H0 = 1, lf = 1e3, id = 1e7, cf = id;
function fn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function nn(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function uf(e, t) {
  const n = nn(e, t);
  return n !== null && n > 0 ? n : t;
}
function Gn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function yc(e) {
  const t = nn(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ul(e) {
  const t = yc(e);
  return t === null ? null : Gn(t, -id, id);
}
function ta(e) {
  const t = uf(e, null);
  return t === null ? null : Gn(t, H0, lf);
}
function G0(e) {
  const t = yc(e);
  return t !== null && t >= 1 ? Math.min(t, cf) : null;
}
function os(e, t) {
  return typeof e == "boolean" ? e : t;
}
function W0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => nn(n, null));
  return t.includes(null) ? null : t;
}
function K0(e) {
  return W0(e) || [0, 0, 0];
}
function B0(e) {
  const t = fn(e) ? e : {};
  return {
    yaw_deg: nn(t.yaw_deg, 0),
    pitch_deg: Gn(nn(t.pitch_deg, 0), -90, 90),
    roll_deg: nn(t.roll_deg, 0)
  };
}
function nk(e) {
  return Gn(nn(e, 90), 0.1, 179);
}
function rk(e) {
  return uf(e, 1);
}
function ik(e) {
  const t = fn(e) ? e : {};
  return {
    yaw_deg: nn(t.yaw_deg, 0),
    pitch_deg: Gn(nn(t.pitch_deg, 0), -90, 90)
  };
}
function ok(e) {
  return nn(e, 0);
}
function ak(e) {
  const t = fn(e) ? e : {};
  return {
    hFOV_deg: Gn(nn(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Gn(nn(t.vFOV_deg, 20), 0.1, 179)
  };
}
function U0(e) {
  return Gn(nn(e, 1), 0, 1);
}
const df = [["position", K0], ["rotation", B0], ["fov", nk]], bc = [["position", K0], ["rotation", B0], ["scale", rk]], ff = [["direction", ik], ["roll", ok], ["size", ak], ["opacity", U0]], pf = [...bc, ["opacity", U0]];
function sk(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => nn(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...j0];
}
function lk(e) {
  if (!fn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = W0(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function ck(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!fn(i)) continue;
    const o = ul(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: sk(i.easing) }, s = n ? lk(i.handles) : null;
    s && (a.handles = s), r.set(o, a);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function hf(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = fn(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: ck(o.keyframes, i, r === "position") };
  }
  return n;
}
function Y0(e) {
  const t = fn(e) ? e : {}, n = ul(t.start), r = ul(t.in), i = ul(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function uk(e) {
  const t = fn(e) ? e : {}, n = Gn(nn(t.x0, 0), 0, 1), r = Gn(nn(t.y0, 0), 0, 1), i = Gn(nn(t.x1, 1), 0, 1), o = Gn(nn(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function dk(e) {
  if (!fn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: tk.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function fk(e) {
  const t = dk(e.source);
  if (!t) return null;
  const n = ek.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: Y0(e.clip),
    visible: os(e.visible, !0),
    locked: os(e.locked, !1),
    crop: uk(e.crop),
    ...hf(e, r ? pf : ff)
  };
  return r || (i.z_index = yc(e.z_index) ?? 0), i;
}
function pk(e) {
  const t = [];
  let n = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = fn(o) ? fk(o) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(a);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !r.has(o.id) ? r.add(o.id) : o.id = null;
  let i = 1;
  for (const o of t)
    if (o.id === null) {
      for (; r.has(`sticker_${i}`); ) i += 1;
      o.id = `sticker_${i}`, r.add(o.id);
    }
  return t;
}
function X0(e) {
  if (!fn(e)) return null;
  const t = rd.includes(e.projection) ? e.projection : rd[0];
  return { aspect: uf(e.aspect, 1), projection: t, visible: os(e.visible, !0), ...hf(e, df) };
}
function mf() {
  return X0({});
}
function $l(e) {
  const t = fn(e.timeline) ? e.timeline : {}, n = fn(e.scene) ? e.scene : {};
  return {
    version: Qx,
    timeline: {
      fps: ta(t.fps) ?? 24,
      length: G0(t.length)
    },
    camera: X0(e.camera),
    scene: { clip: Y0(n.clip), visible: os(n.visible, !0), ...hf(n, bc) },
    stickers: pk(e.stickers),
    painting: Yo(e.painting),
    painting_layer: fn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: os(e.painting_visible, !0)
  };
}
function hk(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!fn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function mk(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!fn(t)) return null;
  const n = Gn(nn(t.hFOV_deg, 90), 1, 179), r = Gn(nn(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function gk(e) {
  const t = fn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(fn) : [];
  return n.sort((r, i) => nn(r.z_index, 0) - nn(i.z_index, 0)), $l({
    camera: mk(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: hk(r, t),
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
function Vr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return $l({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!fn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? gk(t) : $l(t);
}
const gu = {
  state: { painting_visible: !0 },
  camera: { projection: rd[0], visible: !0 },
  scene: { visible: !0 }
};
function yu(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function od(e) {
  return JSON.stringify({
    ...yu(e, gu.state),
    camera: e.camera && yu(e.camera, gu.camera),
    scene: yu(e.scene, gu.scene)
  });
}
function bu(e, t, n, r, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: n(r + s.frame) - i }))
    };
  return o;
}
function bm(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function as(e, t) {
  const n = ta(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (s) => yc(s * r), { length: o } = e.timeline, a = bm(e.scene.clip, i);
  return $l({
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...bu(e.camera, df, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...bu(e.scene, bc, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: c, anchor: p, newAnchor: f } = bm(s.clip, i), h = s.placement === "world" ? pf : ff;
      return { ...s, clip: c, ...bu(s, h, i, p, f) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function vu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function q0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function J0(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= qi);
}
function Z0(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? q0(e.keyframes[r - 1].easing) : [...j0];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function xn(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = vu(i.value, r);
    return;
  }
  const o = J0(i, n);
  o ? o.value = vu(o.value, r) : Z0(i, n, vu(qt(e, t, n), r));
}
function na(e) {
  return e.placement === "world" ? pf.map(([t]) => t) : e.placement === "sky" ? ff.map(([t]) => t) : (e.clip ? bc : df).map(([t]) => t);
}
function yk(e, t) {
  for (const n of na(e))
    J0(e[n], t) || Z0(e[n], t, qt(e, n, t));
}
function bk(e) {
  const t = na(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function _u(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function vk(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function _k(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((c) => i.has(c.frame))) continue;
    const s = qt(e, o, r);
    a.keyframes = a.keyframes.filter((c) => !i.has(c.frame)), a.keyframes.length || (a.value = s);
  }
}
function Sk(e, t, n, r, i) {
  r = Math.max(r, Math.min(0, i - Math.min(...n)));
  const o = new Set(n);
  for (const a of t) {
    const s = e[a], c = s.keyframes.filter((f) => o.has(f.frame)).map((f) => ({ ...f, frame: f.frame + r })), p = new Set(c.map((f) => f.frame));
    s.keyframes = [
      ...s.keyframes.filter((f) => !o.has(f.frame) && !p.has(f.frame)),
      ...c
    ].sort((f, h) => f.frame - h.frame);
  }
  return r;
}
function Q0(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => n.length > 1 ? a.frame >= r && a.frame < i : a.frame === r));
}
function wk(e, t, n) {
  const r = Q0(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function xk(e, t, n, r) {
  for (const i of Q0(e, t, n)) i.easing = q0(r);
}
function kk(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Mk(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function Nk(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Pk(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function zl(e) {
  return na(e).map((t) => e[t]);
}
function Ak(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? zl(e.camera).some((r) => r.keyframes.length > 0) : ey(e, { camera: n });
}
function jl(e) {
  return zl(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Pk(e.clip);
}
function ey(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(jl);
}
const Ck = 1e5;
function ty(e, { minimum: t, frames: n = 0, openClip: r = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, n);
  if (i && e.camera)
    for (const a of zl(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === r ? s.start + 1 : s.start + s.duration);
    for (const c of zl(a))
      for (const p of c.keyframes) o = Math.max(o, s.start - s.in + p.frame + 1);
  }
  return Number.isFinite(o) ? o : Ck;
}
function Ik(e) {
  return e > 0 ? ta(Math.min(e, lf)) : null;
}
function Ek(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : G0(Math.max(1, Math.min(e, cf)));
}
const Su = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Ok = 2e3;
function Tk(e, t, n = 56) {
  const r = Su.find((o) => o * t >= n) || Su[Su.length - 1], i = [];
  for (let o = 0; o < e && i.length < Ok; o += r) i.push(o);
  return i;
}
function Fk(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Ys = { text: null, parsed: null };
function zn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Hl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Dk({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: zn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Yo(null),
    painting_layer: null,
    ui_settings: Hl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function ny(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function Lk(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function Rk(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Vk(e) {
  return Array.isArray(e) ? e.map((t) => af(t)) : [];
}
function $k(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((a) => String((a == null ? void 0 : a.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function ry(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = Dk(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let o = null;
    if (Ys.text === i ? o = Ys.parsed : (o = JSON.parse(i), Ys = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const a = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, s = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Lk(o.assets),
      stickers: Rk(o.stickers),
      shots: Vk(o.shots),
      painting: Yo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Hl(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return a && (s.ui_settings = Hl({ ...s.ui_settings, ...a })), s.output_preset = ny(
      n.outputPreset,
      Number(s.output_preset || r.output_preset)
    ), s.bg_color = String(n.backgroundColor || s.bg_color || r.bg_color), s.coverage = zn(n.coverage), delete s.editor_history, s;
  } catch {
    return Ys = { text: i, parsed: null }, r;
  }
}
function zk(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function jk(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function Hk(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function iy(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: c = !1 } = t, p = ta(t.fps);
  let f;
  try {
    f = Vr(e);
  } catch {
    f = Vr(null);
  }
  p && p !== f.timeline.fps && (f = as(f, p));
  const h = c && f.camera === null;
  if (h && (f = { ...f, camera: mf() }), s) {
    let g = Vr(s);
    p && p !== g.timeline.fps && (g = as(g, p)), f = { ...g, camera: f.camera, cutout_state: f };
  }
  return {
    ...f,
    ...h ? { default_camera: !0 } : {},
    coverage: zn(i),
    bg_color: r,
    output_preset: ny(n),
    ui_settings: Hl(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function Gk(e, t) {
  e.cutout_state && (e.cutout_state = as(e.cutout_state, t));
  const n = as(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of na(o)) o[s].keyframes = a[s].keyframes;
    }
}
function gf(e, t) {
  const n = ro(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const Wk = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function vm(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function Kk(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[Wk[n]].keyframes.length));
}
function oy(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = vm(n, ["yaw_deg", "pitch_deg"]), o = vm(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && xn(e, "direction", r, i), n.rot_deg !== void 0 && xn(e, "roll", r, n.rot_deg), Object.keys(o).length && xn(e, "size", r, o);
}
const vc = ["position_x", "position_y", "position_z"], _c = "camera";
function _m(e, t) {
  const n = sf(e, t);
  return af({
    id: _c,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: Vx(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function Bk(e) {
  return Vr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Bt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function Uk(e) {
  return e - 360 * Math.round(e / 360);
}
function Yk(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + Uk(n[o] - r[o]));
  Object.keys(i).length && xn(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && xn(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Lt * 0.5) / Math.tan(n.vFOV_deg * Lt * 0.5)), n.position.some((o, a) => o !== r.position[a]) && xn(e, "position", t, [...n.position]);
}
function Xk(e, t) {
  const n = qt(e, "position", t), r = qt(e, "rotation", t);
  return {
    ...Object.fromEntries(vc.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: qt(e, "fov", t)
  };
}
function qk(e, t, n, r) {
  const i = vc.indexOf(n);
  if (i >= 0) {
    const o = qt(e, "position", t);
    o[i] = r, xn(e, "position", t, o);
  } else n === "hFOV_deg" ? xn(e, "fov", t, r) : xn(e, "rotation", t, { [n]: r });
}
function Jk(e, t, n) {
  xn(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function Zk(e, t) {
  const n = ro(e, t);
  return {
    ...Object.fromEntries(vc.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function Qk(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = vc.indexOf(n);
  if (o >= 0) {
    const a = qt(e, "position", i);
    a[o] = r, xn(e, "position", i, a);
  } else n === "scale" ? xn(e, "scale", i, r) : n === "opacity" ? xn(e, "opacity", i, r / 100) : xn(e, "rotation", i, { [n]: r });
}
function eM(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && xn(e, i, r, n[i]);
}
function tM(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function nM(e, t, n) {
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
function dl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ay(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function yf(e, t, n, r) {
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
function rM(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Bt(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function ad(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function sy(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function ly(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function cy(e) {
  e.default_camera && JSON.stringify(Vr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(mf()) && delete e.default_camera;
}
function uy(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = Vr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(mf()) && (n.camera = null), od(n);
}
function dy(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Vr(n);
    if (od(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && od(as(i, o)) === t;
  } catch {
    return !1;
  }
}
const wu = 0.15, iM = 0.01, oM = 1e-3, aM = 0.05, sM = 4, Sm = 250, lM = 16, _r = 1, cM = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Qn(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function $r(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Sc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function ra(e, t, n = 0) {
  const r = Wn(e, t, n), i = $r(r, 2);
  return { right: $r(r, 0), up: $r(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function uM(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function sd(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function dM(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : sd(e, "3dof", n);
}
function fM(e) {
  return ra(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function pM(e) {
  return Qn(e.position, ra(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function xi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Ba(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function bf(e, t) {
  return Ba(xi(t, e.position), ra(e.yaw_deg, e.pitch_deg).forward);
}
function vf(e) {
  return Math.max(e, 1e-6) * aM;
}
function ld(e, t, n = null, r = _r) {
  if (t) return t;
  const i = vf(r);
  if (n && bf(e, n) > 0) {
    const o = xi(n, e.position), a = Math.hypot(...o);
    return a >= i ? n : Qn(e.position, o, i / a);
  }
  return Qn(e.position, ra(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function fy(e, t = _r) {
  return Math.max(e.distance, vf(t));
}
function py(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > sM ? !1 : t.time - e.time < Sm || e.cost > lM && t.time - e.wheelTime < Sm;
}
function _f(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Lt);
  return { tanX: r, tanY: r * n / t };
}
function wm(e, t, n, r, i = pM(e)) {
  const o = e.roll_deg ?? 0, [a, s] = hM(t, n, o), c = Bt(e.yaw_deg + a / r * 360), p = Ie(e.pitch_deg - s / r * 360, -89.9, 89.9), f = Wn(e.yaw_deg, e.pitch_deg, o), h = Wn(c, p, o), g = xi(e.position, i), _ = [0, 1, 2].map((S) => Ba($r(f, S), g)), v = { ...e, yaw_deg: c, pitch_deg: p, position: Qn(i, Sc(h, _)) };
  return { ...v, distance: bf(v, i) };
}
function hM(e, t, n) {
  const r = Math.cos(n * Lt), i = Math.sin(n * Lt);
  return [e * r + t * i, t * r - e * i];
}
function xm(e, t, n, r, i, o = e.distance) {
  const { right: a, up: s } = fM(e), c = 2 * o * _f(e, r, i).tanY / i;
  return { ...e, position: Qn(Qn(e.position, a, -t * c), s, n * c), distance: o };
}
function hy(e, t, n, r = _r) {
  const i = xi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const a = Math.max(r, 1e-6), s = a * iM, c = n > 0 ? Math.min(Math.max(o * wu, s), o - a * oM) : -Math.max(o * wu / (1 - wu), s);
  if (n > 0 && c <= 0) return e;
  const p = { ...e, position: Qn(e.position, i, c / o) };
  return { ...p, distance: Math.max(bf(p, t), vf(r)) };
}
function my(e, t, n, r) {
  const { tanX: i, tanY: o } = _f(e, n, r), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: c } = ra(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Qn(t.center, c, -s), distance: s };
}
function Sf(e, t, n, r = null) {
  return gy({
    quaternion: lo(Wn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(_f(e, t, n).tanY) * dn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function gy(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: _r }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: s * 2
  };
}
function ss(e, t, n, r) {
  const { right: i, up: o, forward: a } = yy(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], c = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(c > e.near)) return null;
  const p = Math.tan(e.fovY_deg * 0.5 * Lt), f = p * e.aspect, h = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], g = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: n * 0.5 * (1 + h / c / f), y: r * 0.5 * (1 - g / c / p), z: c };
}
function yy(e) {
  const t = ns(e.quaternion), n = $r(t, 2);
  return { right: $r(t, 0), up: $r(t, 1), forward: n.map((r) => -r) };
}
function km(e, t, n) {
  var i;
  const r = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((o) => o ? n(o) : null) };
}
function mM({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function by(e, t) {
  if (!e || !t.active) return null;
  const n = bM(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: cd(t),
    itemQuaternion: e.kind === "splat" ? cM : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function gM(e, t, n) {
  const r = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], a = by(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function yM(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function bM(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function cd(e) {
  return {
    position: [...e.position],
    quaternion: lo(Wn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function ud(e, t) {
  return Qn(e.position, Sc(Wn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function dd(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function fd({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function pd(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), r = t.map((o, a) => (o + n[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function vM(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...fd(t).map((o) => ud(e.scene, o)));
  for (const o of n) i.push(...wf(o));
  for (const { box: o, value: a } of r) i.push(...fd(o).map((s) => ud(a, s)));
  return i;
}
function _M(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: lo(Wn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Wn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function wf(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => Qn(e.position, Sc(e.rotation, [r, i, 0])));
}
function SM(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? pd(wf(i)) : o != null && o.box ? pd(fd(dd(o.kind, o.box)).map((a) => ud(r, a))) : { center: [...r.position], radius: r.scale };
}
const wM = 2, xM = 0.5, kM = 30;
function vy(e, t) {
  const n = xi(t, e), r = Math.atan2(n[0], -n[2]) * dn, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * dn;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function MM(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * xM : wM, o = t ? [...t] : Qn(e.position, ra(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...xi(o, e.position)), s = a > 0 ? vy(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, c = 2 * Math.max(a, 1e-3) * Math.tan(kM * 0.5 * Lt);
  return { position: o, rotation: s, scale: c };
}
function Mm(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function NM(e) {
  return [0, 1, 2].map((t) => $r(e, t));
}
function Nm(e, t, n, r) {
  if (e === "translate") return { position: Qn(t.position, xi(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * EM(n.scale, r.scale) / n.scale };
  const i = Mm(ns(r.quaternion), NM(ns(n.quaternion))), o = Mm(i, Wn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: c } = D0(o);
  return Math.abs(s) <= PM ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: c + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: AM(o, t.yaw_deg) } };
}
const PM = 89.9;
function AM(e, t) {
  const n = $r(e, 0), r = $r(e, 1), i = Math.cos(t * Lt), o = Math.sin(t * Lt);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * dn + 0;
}
const CM = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function IM(e, t, n, r, i) {
  if (!ss(e, t, r, i)) return null;
  const { right: o, up: a, forward: s } = yy(e), c = xi(t, e.position), p = Ba(c, o), f = Ba(c, a), h = Ba(c, s), g = Math.tan(e.fovY_deg * 0.5 * Lt), _ = g * e.aspect, v = Math.hypot(p, f, h) * CM[n] * Math.min(1.9 * g, 7) / 4;
  if (!(h > v)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const S = ($) => {
    const y = v * Math.sqrt($ * $ + h * h - v * v);
    return [($ * h - y) / (h * h - v * v), ($ * h + y) / (h * h - v * v)];
  }, [M, C] = S(p), [W, V] = S(f);
  return {
    minX: r * 0.5 * (1 + M / _),
    maxX: r * 0.5 * (1 + C / _),
    minY: i * 0.5 * (1 - V / g),
    maxY: i * 0.5 * (1 - W / g)
  };
}
function EM(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function OM(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function _y(e, t) {
  const n = Wn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Lt) * t, i = r / e.aspect, o = (p, f, h) => Qn(e.position, Sc(n, [p, f, h])), a = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], s = a.map((p) => [e.position, p]);
  a.forEach((p, f) => s.push([p, a[(f + 1) % 4]]));
  const c = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return s.push([c[0], c[1]], [c[1], c[2]], [c[2], c[0]]), s;
}
function TM(e, t, n, r, i, o = 6) {
  return t.some(([a, s]) => {
    const c = ss(e, a, r, i), p = ss(e, s, r, i);
    if (!c || !p) return !1;
    const f = p.x - c.x, h = p.y - c.y, g = Ie(((n.x - c.x) * f + (n.y - c.y) * h) / Math.max(f * f + h * h, 1e-12), 0, 1);
    return Math.hypot(c.x + f * g - n.x, c.y + h * g - n.y) <= o;
  });
}
function FM(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function DM(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [qt(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const c = o === 1 ? 0 : s * i / (o - 1);
    return qt(r, "position", c);
  });
}
function LM(e, t, n, r, i) {
  const o = Math.max(0, e) * n, a = Math.max(0, t) * n, s = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const Sy = 0.28;
function wy(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * Lt);
  return {
    quaternion: lo(Wn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * dn,
    aspect: r
  };
}
function Ua(e) {
  const t = wi(e);
  return {
    quaternion: lo(Wn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Pm(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = of(n, r), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * dn,
      vFOV_deg: 2 * Math.atan(o / r) * dn
    }
  };
}
function xy(e, t, n) {
  const [[r, i, o], [a, s, c], [p, f, h]] = ns(e.quaternion), g = Math.tan(e.fovY_deg * 0.5 * Lt), _ = g * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(v, S = 1e-4) {
      const M = zx(v), C = r * M.x + a * M.y + p * M.z, W = i * M.x + s * M.y + f * M.z, V = -(o * M.x + c * M.y + h * M.z), $ = Math.max(V, S);
      return {
        x: t * 0.5 * (1 + C / $ / _),
        y: n * 0.5 * (1 - W / $ / g),
        z: V
      };
    },
    // The unit direction seen at the point (x, y).
    ray(v, S) {
      const M = (v / t * 2 - 1) * _, C = (1 - S / n * 2) * g;
      return tf(cl({
        x: r * M + i * C - o,
        y: a * M + s * C - c,
        z: p * M + f * C - h
      }));
    }
  };
}
function RM(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = gc(e, t) }) {
  const a = [];
  e.stickers.forEach((s, c) => {
    const p = o.stickers[c];
    if (s.placement !== "sky") return;
    const f = s.source.kind === "port" && !s.visible;
    if (!p.active && !f) return;
    const h = n(s);
    if (!h) return;
    const g = Math.tan(p.hFOV_deg * 0.5 * Lt), _ = Math.tan(p.vFOV_deg * 0.5 * Lt), { crop: v } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: h.media,
      revision: h.revision,
      source: h.source,
      opacity: f ? Sy : p.opacity,
      zIndex: r(s),
      quaternion: lo(Wn(p.yaw_deg, p.pitch_deg, p.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * v.x0 - 1) * g,
        x1: (2 * v.x1 - 1) * g,
        y0: (1 - 2 * v.y1) * _,
        y1: (1 - 2 * v.y0) * _
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, c) => s.zIndex - c.zIndex);
}
function ky(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of n)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return RM(e, t, {
    media: (s) => {
      const c = a.get(s.id);
      return c ? r(c) : null;
    },
    zIndex: (s) => {
      var c;
      return Number(((c = a.get(s.id)) == null ? void 0 : c.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function VM(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function $M(e, t, n, { media: r, evaluated: i = gc(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of n)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, c) => {
    const p = i.stickers[c];
    if (s.placement !== "world" || !p.active) return;
    const f = o.get(s.id), h = f ? r(f) : null;
    if (!h) return;
    const { width: g, height: _ } = VM(h.media), v = _M(p, s.crop, g, _);
    v && a.push({
      id: s.id,
      media: h.media,
      revision: h.revision,
      source: h.source,
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
function zM({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((a) => a.$) }) {
  let a = null, s = null, c = !1, p = 0;
  const f = () => {
    s = M0(a.createThreeView({ onUpdate: r, createCanvas: () => e }), "editor");
  }, h = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(v) {
      return s && !h.lost ? s.render(v) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(v) {
      return s && !h.lost ? s.renderUnwrap(v) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(v, S) {
      return s && !h.lost ? s.resize(v, S) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(v, S) {
      s && !h.lost && s.clear(v, S);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(v) {
      return s ? s.sceneBox(v) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(v, S, M, C, W) {
      return s && !h.lost ? s.pick(v, S, M, C, W) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(v, S, M, C, W) {
      return s && !h.lost ? s.pickSurface(v, S, M, C, W) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(v, S, M, C, W) {
      return s && !h.lost ? s.pickSticker(v, S, M, C, W) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(v, S, M, C, W, V) {
      return s && !h.lost ? s.gizmoPointer(v, S, M, C, W, V) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return p + (s ? s.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", g), e.removeEventListener("webglcontextrestored", _), s == null || s.dispose(), s = null;
    }
  };
  function g(v) {
    v.preventDefault(), !(c || h.lost) && (h.lost = !0, h.ready = !1, s == null || s.dispose({ lost: !0 }));
  }
  function _() {
    c || !h.lost || queueMicrotask(() => {
      c || !h.lost || (s && (p += s.contentRevision() + 1), s == null || s.dispose(), s = null, h.lost = !1, a && (f(), h.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", g), e.addEventListener("webglcontextrestored", _), o().then((v) => {
    c || (a = v, !h.lost && (f(), h.ready = !0, t()));
  }).catch((v) => {
    console.error("[PanoramaStickers] three.js view is unavailable", v), h.failed = !0, n();
  }), h;
}
const My = "3D view unavailable. Check the browser console.";
function Gl(e, t, n) {
  return wy({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function jM(e) {
  let t = null, n = !1, r = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || n || r || (n = !0, e().then((a) => {
      if (n = !1, !i.size) {
        a.dispose();
        return;
      }
      t = a, i.forEach((s) => s.onChange());
    }).catch((a) => {
      n = !1, i.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", a), i.forEach((s) => s.onChange()));
    }));
  }
  return function(s) {
    const c = { onChange: s };
    let p = !1;
    return i.add(c), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(f) {
        return p ? null : (o(), t ? t.render({ ...f, owner: c }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(c);
      },
      dispose() {
        p || (p = !0, i.delete(c), t == null || t.release(c), !i.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Ny = jM(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => M0(e.createThreeView({ createCanvas: () => Mn({ label: "three.node" }) }), "node"))
), ki = ["erp_image", "bg_erp", "bg_media"], fl = ["source"], xf = ["sticker_image", "sticker"], Py = ["scene"], HM = {
  background: [...ki, ...fl],
  "external-sticker": [...xf, ...fl],
  scene: [...Py, ...fl]
};
function Ay(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function kf(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = Ay(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function GM(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Cy(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((s) => String(s == null ? void 0 : s.id) === n[o]);
    if (!a || o === n.length - 1) return { graph: r, entry: a };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function WM(e, t) {
  const { graph: n, entry: r } = Cy(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const s = Ay(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const Iy = [...ki, ...xf, ...Py, ...fl], KM = 256, Oo = /* @__PURE__ */ new Map(), xu = /* @__PURE__ */ new WeakMap();
let Ey = () => null;
function Oy(e) {
  return xu.has(e) || xu.set(e, JSON.stringify(e)), xu.get(e);
}
function BM(e) {
  Ey = e;
}
function Wl(e, t) {
  const n = Oy(e);
  Oo.delete(n), Oo.set(n, t), Oo.size > KM && Oo.delete(Oo.keys().next().value);
}
function gn(e, t) {
  var o;
  const n = e ? Ey(e) : null;
  if (!n) return !0;
  const r = kf(e);
  let i = Oo.get(Oy(n));
  if (i)
    Wl(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => Iy.includes(a == null ? void 0 : a.name)))) return !0;
    Wl(n, r), i = r;
  }
  return HM[t].every((a) => i[a] === r[a]);
}
const Kl = /* @__PURE__ */ new WeakSet();
async function hd(e, t) {
  if (Kl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Kl.add(e), n.ok && r !== void 0 ? r : null;
}
function Ty(e, t) {
  var o, a, s, c, p;
  const n = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: r } = Cy(n, t), i = (c = e == null ? void 0 : e.outputs) == null ? void 0 : c[t];
  return !i || !((p = r == null ? void 0 : r.inputs) != null && p.some((f) => Iy.includes(f == null ? void 0 : f.name))) ? null : { output: i, inputs: WM(n, t) };
}
const pl = /* @__PURE__ */ new Map();
function UM(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && pl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await hd(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = Ty(i, o);
        a && Wl(a.output, a.inputs);
      }
    });
}
const YM = 5;
function XM(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${YM}`, r = hd(e, `/jobs?${n}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, hd(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var p, f, h, g;
      const c = String(a.id);
      for (const { id: _ } of await r) {
        if (!s()) return null;
        const v = await o(_);
        if ((p = v == null ? void 0 : v.outputs) != null && p[c])
          return ((g = (h = (f = v.workflow) == null ? void 0 : f.prompt) == null ? void 0 : h[c]) == null ? void 0 : g.class_type) !== a.comfyClass ? null : Ty(v, c);
      }
      return null;
    }
  };
}
function qM(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let ko = null;
async function JM(e, t, n) {
  var s;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || Kl.has(n) || (s = pl.get(i)) != null && s.has(r) || qM(t)) return null;
  (ko == null ? void 0 : ko.workflowId) !== i && (ko = { workflowId: i, history: XM(n, i) }, queueMicrotask(() => {
    ko = null;
  }));
  const a = await ko.history.lastNodeOutput(e, o);
  return o() ? a ? (Wl(a.output, a.inputs), t.nodeOutputs[r] = a.output, a.output) : (Kl.has(n) || pl.set(i, (pl.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Am(e, t, n, r = ki) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((a == null ? void 0 : a.name) || ""));
}
const Cm = /\.(mp4|webm|mov|m4v|mkv)$/i;
function hl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Cm.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Cm.test(String((e == null ? void 0 : e.filename) || ""));
}
const ku = /* @__PURE__ */ new WeakMap();
function ZM(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function md(e) {
  return ZM(e) ? (ku.has(e) || ku.set(e, Math.random().toString(36).slice(2, 10)), ku.get(e)) : "run";
}
function Fy(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function QM(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const c = n(o, s);
      (c == null ? void 0 : c.id) == null || r.has(String(c.id)) || (r.add(String(c.id)), i(c, (Array.isArray(c.inputs) ? c.inputs : []).map((p, f) => f)));
    }
  };
  return i(e, t), r;
}
function Mf(e, t = [], n = null) {
  var i;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const c of s) {
          const p = r(c);
          if (p && (/\.mp4(\?|$)/i.test(p) || String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4"))
            return p;
        }
  }
  return "";
}
function eN({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = hc(e, "looping-preview");
  if (!r || !t) return null;
  const i = typeof n == "function" ? n : () => {
  };
  let o = !1, a = 0;
  const s = typeof r.requestVideoFrameCallback == "function", c = () => {
    o || !s || a || r.paused || r.ended || (a = r.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), c());
    }));
  }, p = () => {
    o || i();
  }, f = () => i(), h = () => {
    i(), c();
  }, g = () => i();
  let _ = !1;
  const v = () => {
    _ = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", p, { once: !0 }), r.addEventListener("loadeddata", p, { once: !0 }), s || r.addEventListener("timeupdate", f), r.addEventListener("play", h), r.addEventListener("pause", g), r.addEventListener("error", v), r.src = t, r.load();
  const S = () => {
    o || _ || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, M = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var W, V;
      o || (o = !0, a && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(a), a = 0), r.removeEventListener("loadedmetadata", p), r.removeEventListener("loadeddata", p), r.removeEventListener("timeupdate", f), r.removeEventListener("play", h), r.removeEventListener("pause", g), r.removeEventListener("error", v), r.pause(), (W = r.removeAttribute) == null || W.call(r, "src"), (V = r.load) == null || V.call(r));
    },
    failed: () => _,
    play: S,
    pause: M,
    toggle() {
      r.paused ? S() : M();
    },
    get playing() {
      return !o && !r.paused && !r.ended;
    }
  };
}
function Hi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function tN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Im(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (r = s.outputNode);
    } catch {
    }
  return !r && n != null && (r = tN(e == null ? void 0 : e.graph, n)), r;
}
function nN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function rN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function iN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Dy({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (y) => {
    if (!y) return "";
    if (typeof y == "string") return String(y || "").trim();
    if (Array.isArray(y)) {
      if (y.length === 0) return "";
      if (y.length === 1) return i(y[0]);
      const j = String(y[0] || "").trim();
      if (j)
        return Hi(t, {
          filename: j,
          subfolder: String(y[1] || "").trim(),
          type: String(y[2] || "output").trim() || "output"
        });
      for (const G of y) {
        const re = i(G);
        if (re) return re;
      }
      return "";
    }
    return typeof (y == null ? void 0 : y.src) == "string" && y.src ? y.src : typeof (y == null ? void 0 : y.url) == "string" && y.url ? y.url : Hi(t, y);
  }, o = (y) => {
    if (!y || typeof y != "object") return "";
    const j = String(y.type || "").trim().toLowerCase();
    if (j === "dataurl") return String(y.value || "");
    if (j !== "comfy_image") return "";
    const G = String(y.filename || "").trim();
    return G ? Hi(t, {
      filename: G,
      subfolder: String(y.subfolder || ""),
      type: String(y.storage || "input")
    }) : "";
  }, a = (y) => {
    const j = e == null ? void 0 : e.nodeOutputs;
    if (!j || y == null) return null;
    const G = String(y);
    return j instanceof Map ? j.get(y) || j.get(G) || j.get(Number(G)) || null : j[y] || j[G] || null;
  }, s = (y, j) => {
    var re;
    const G = a(y == null ? void 0 : y.id);
    return Array.isArray((re = G == null ? void 0 : G.ui) == null ? void 0 : re[j]) ? G.ui[j] : Array.isArray(G == null ? void 0 : G[j]) ? G[j] : [];
  }, c = (y, j) => {
    const G = a(y == null ? void 0 : y.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, j) ? G.ui[j] : G && Object.prototype.hasOwnProperty.call(G, j) ? G[j] : null;
  }, p = (y, j) => {
    const G = c(y, "pano_sticker_input_state_hash"), re = Array.isArray(G) ? G[0] : G;
    return String(re ?? "").trim() || iN(j);
  }, f = (y) => {
    const j = [], G = /* @__PURE__ */ new Set();
    for (const re of y || []) {
      const se = i(re);
      !se || G.has(se) || (G.add(se), j.push(se));
    }
    return j;
  }, h = (y, j) => {
    var se;
    const G = [];
    Array.isArray(y == null ? void 0 : y.images) && y.images.length && G.push(y.images), Array.isArray((se = y == null ? void 0 : y.ui) == null ? void 0 : se.images) && y.ui.images.length && G.push(y.ui.images);
    const re = [];
    for (const I of G)
      j >= 0 && j < I.length && re.push(I[j]), re.push(...I);
    return re;
  }, g = (y, j) => {
    var O;
    const G = String(j || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const se = (Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs : []).findIndex((ue) => String((ue == null ? void 0 : ue.name) || "") === G);
    if (se < 0) return { src: "", sourceType: "", inputName: G };
    const I = y.graph ? y.getInputLink(se) : null;
    if ((I == null ? void 0 : I.origin_id) == null) return { src: "", sourceType: "", inputName: G };
    const H = I.origin_id, J = Im(y, se, H);
    if (!J) return { src: "", sourceType: "", inputName: G };
    const de = Number(I.origin_slot ?? 0);
    let xe = [];
    try {
      xe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      xe = [];
    }
    if (Array.isArray(xe) && xe.length) {
      const ue = [];
      de >= 0 && de < xe.length && ue.push(xe[de]), ue.push(...xe);
      const Me = f(ue.filter((ze) => !hl(ze)));
      if (Me.length)
        return { src: Me[0], srcCandidates: Me, sourceType: "appNodeImageUrls", inputName: G };
    }
    const _e = a((J == null ? void 0 : J.id) ?? H), he = f(h(_e, de).filter((ue) => !hl(ue))).map((ue) => `${ue}&pano_src=${md(_e)}`);
    if (he.length)
      return { src: he[0], srcCandidates: he, sourceType: "nodeOutputs", inputName: G };
    const te = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (te.length) {
      const ue = [];
      de >= 0 && de < te.length && ue.push(te[de]), ue.push(...te);
      const Me = f(ue);
      if (Me.length)
        return { src: Me[0], srcCandidates: Me, sourceType: "nodeImgs", inputName: G };
    }
    const R = (O = J == null ? void 0 : J.widgets) == null ? void 0 : O.find((ue) => String((ue == null ? void 0 : ue.name) || "").toLowerCase() === "image");
    if (R) {
      let ue = i(R.value);
      if (ue && !ue.includes("/") && !ue.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (ue = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(ue)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(ue)}&type=input&subfolder=`), ue) return { src: ue, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, _ = (y, j = []) => {
    var re;
    const G = Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs : [];
    for (const se of j) {
      const I = G.findIndex((xe) => String((xe == null ? void 0 : xe.name) || "") === se), H = I >= 0 && y.graph ? y.getInputLink(I) : null;
      if ((H == null ? void 0 : H.origin_id) == null) continue;
      const J = a(((re = Im(y, I, H.origin_id)) == null ? void 0 : re.id) ?? H.origin_id), de = (Array.isArray(J == null ? void 0 : J.images) ? J.images : []).find(hl);
      return de ? `${Hi(t, de)}&pano_src=${md(J)}` : "";
    }
    return "";
  }, v = (y, j = []) => {
    const G = Array.isArray(j) ? j : [j];
    for (const re of G) {
      const se = g(y, re);
      if (String((se == null ? void 0 : se.src) || "").trim()) return se;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, S = (y) => {
    const j = String(y || "").trim();
    if (!j) return [];
    if (nN(j)) return [j];
    const { filename: G, subfolder: re } = rN(j);
    return G ? f([
      Hi(t, { filename: G, subfolder: re, type: "temp" }),
      Hi(t, { filename: G, subfolder: re, type: "output" }),
      Hi(t, { filename: G, subfolder: re, type: "input" }),
      j
    ]) : [j];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (y) => {
      var j, G;
      try {
        (G = (j = y == null ? void 0 : y.__panoLinkedInputImageCache) == null ? void 0 : j.forEach) == null || G.call(j, (re, se, I) => {
          var H;
          re != null && re.img && ((H = r == null ? void 0 : r.isImageLoadFailed) != null && H.call(r, re.img)) && I.delete(se);
        });
      } catch {
      }
    },
    externalStateHash: p,
    invalidateUiImage: (y, j) => {
      var G;
      (G = y == null ? void 0 : y.delete) == null || G.call(y, `__ui__${String(j || "")}`);
    },
    linkedValue: (y, j) => {
      var H, J, de, xe;
      const G = String(j || ""), re = Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs.findIndex((_e) => String((_e == null ? void 0 : _e.name) || "") === G) : -1, se = re >= 0 && y.graph ? y.getInputLink(re) : null;
      if (se) {
        const _e = a(se.origin_id), he = [
          _e == null ? void 0 : _e.output,
          _e == null ? void 0 : _e.result,
          (H = _e == null ? void 0 : _e.data) == null ? void 0 : H.output,
          (J = _e == null ? void 0 : _e.data) == null ? void 0 : J.result,
          (de = _e == null ? void 0 : _e.ui) == null ? void 0 : de.output,
          (xe = _e == null ? void 0 : _e.ui) == null ? void 0 : xe.result
        ];
        for (const te of he) {
          if (!Array.isArray(te)) continue;
          const R = te[Number(se.origin_slot || 0)];
          if (typeof R == "string" && R.trim()) return R;
        }
      }
      const I = Array.isArray(y == null ? void 0 : y.widgets) ? y.widgets.find((_e) => String((_e == null ? void 0 : _e.name) || "") === G) : null;
      return String((I == null ? void 0 : I.value) || "");
    },
    linkedVideoFile: _,
    loadPreferredExactLinkedImage: (y, j = [], G = null, re = "") => {
      var Xe;
      const se = Array.isArray(j) ? j : [j], I = v(y, se), J = (Array.isArray(I == null ? void 0 : I.srcCandidates) && I.srcCandidates.length ? I.srcCandidates : [I == null ? void 0 : I.src]).map((ce) => String(ce || "").trim()).filter(Boolean);
      if (!J.length) return null;
      const de = f(J.flatMap((ce) => S(ce)));
      if (!de.length) return null;
      y.__panoLinkedInputImageCache || (y.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const xe = String(re || se.join("|") || "image_exact"), _e = J.join(`
`), he = y.__panoLinkedInputImageCache.get(xe);
      if (he && he.srcRaw === _e && he.img) return he.img;
      const te = n || globalThis.Image;
      if (typeof te != "function") return null;
      const R = new te();
      (Xe = r == null ? void 0 : r.markImageLoading) == null || Xe.call(r, R, _e);
      const O = { srcRaw: _e, resolvedSrc: "", img: R };
      y.__panoLinkedInputImageCache.set(xe, O);
      let ue = -1;
      const Me = (ce) => {
        var z, w, pe;
        ce === "ready" ? (z = r == null ? void 0 : r.markImageReady) == null || z.call(r, R, _e) : (w = r == null ? void 0 : r.markImageFailed) == null || w.call(r, R, _e), G == null || G(R), (pe = y.setDirtyCanvas) == null || pe.call(y, !0, !0);
      }, ze = () => {
        if (ue += 1, ue >= de.length) {
          Me("failed");
          return;
        }
        O.resolvedSrc = de[ue], R.src = O.resolvedSrc;
      };
      return R.onload = () => Me("ready"), R.onerror = () => {
        if (ue + 1 < de.length) {
          ze();
          return;
        }
        Me("failed");
      }, ze(), R;
    },
    output: a,
    resolvePreferredExactLinkedSource: v,
    source: i,
    uiImage: (y, j, G, re = null) => {
      var _e, he, te;
      const se = s(y, j)[0] || null, I = i(se);
      if (!I) return null;
      const H = `__ui__${j}`, J = (_e = G == null ? void 0 : G.get) == null ? void 0 : _e.call(G, H);
      if (J && J.__panoSrc === I) return J;
      const de = n || globalThis.Image;
      if (typeof de != "function") return null;
      const xe = new de();
      return xe.__panoSrc = I, (he = r == null ? void 0 : r.markImageLoading) == null || he.call(r, xe, I), xe.onload = () => {
        var R;
        (R = r == null ? void 0 : r.markImageReady) == null || R.call(r, xe, I), re == null || re(xe);
      }, xe.onerror = () => {
        var R;
        (R = r == null ? void 0 : r.markImageFailed) == null || R.call(r, xe, I), re == null || re(xe);
      }, xe.src = I, (te = G == null ? void 0 : G.set) == null || te.call(G, H, xe), xe;
    },
    uiList: s,
    uiValue: c
  };
}
const oN = 1e-3;
function Ly(e, t, n, r) {
  if (!Jo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < r.frames ? (a + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(oN / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function Ry(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function aN(e, t) {
  return Math.floor(e * t.fps);
}
function Vy(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Em = 4;
function $y({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return r.has(a) || r.set(a, e(n[a], t)), r.get(a);
  }
  return {
    picture(a, s, c, p) {
      if ((a.length !== n.length || a.some((g, _) => g !== n[_])) && (n = a, r.clear(), i = null), s === null) return null;
      const f = aN(s, c);
      for (let g = f; g < Math.min(n.length, f + Em + 1); g += 1) o(g);
      for (const g of r.keys())
        (g < f || g > f + Em) && g !== i && r.delete(g);
      const h = r.get(f);
      return h != null && h.complete && h.naturalWidth > 0 && (i !== null && i !== f && r.delete(i), i = f), i === null ? p : r.get(i);
    }
  };
}
function zy({
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
  let a = null, s = !1, c = !1;
  const p = () => a || e(), f = () => o(n(p()));
  return {
    model: () => n(p()),
    refresh() {
      return c ? this.model() : (f(), this.model());
    },
    beginGesture() {
      return c || a ? !1 : (a = e(), s = !1, f(), !0);
    },
    updateGesture(h) {
      if (c) return !1;
      a || this.beginGesture();
      const g = t(a, h);
      return g.changed ? (a = g.state, s = !0, r(a), f(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (c || !a) return !1;
      const h = s;
      return h && i(a), a = null, s = !1, r(null), f(), h;
    },
    cancelGesture() {
      return c || !a ? !1 : (a = null, s = !1, r(null), f(), !0);
    },
    apply(h) {
      if (c) return !1;
      a && this.commitGesture();
      const g = t(e(), h);
      return g.changed ? (i(g.state), f(), !0) : !1;
    },
    destroy() {
      if (c) return;
      c = !0;
      const h = a != null;
      a = null, s = !1, h && r(null);
    }
  };
}
const ml = "sticker_image_1", jy = "external_image", Zo = 0;
function jo(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Mu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function _i(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function gd(e, t = Zo) {
  return (e == null ? void 0 : e.version) !== 2 ? _i(e) : _i(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: ro(n, t).active,
    external: n.source.kind === "port",
    ...gf(n, t)
  }));
}
function Nf(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && _i(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Hy(e) {
  return String((e == null ? void 0 : e.id) || "") === ml || String((e == null ? void 0 : e.source_kind) || "") === jy;
}
function Pf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Hy(t);
}
const Gy = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Wy(e) {
  return !Hy(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Gy.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function Ky(e) {
  const t = Wy(e);
  return t ? Gy.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function By(e, t = {}) {
  var $, y, j;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((G) => String((G == null ? void 0 : G.id) || "") === ml);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const G = String((($ = e.active) == null ? void 0 : $.selected_sticker_id) || "") === ml;
    return {
      state: {
        ...e,
        stickers: n.filter((re, se) => se !== r),
        active: G ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = r >= 0 ? n[r] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, c = Number(t.imageWidth || 0), p = Number(t.imageHeight || 0), f = c > 0 && p > 0, h = Math.max(1, c), g = Math.max(1, p), _ = t.pose && typeof t.pose == "object" ? t.pose : {}, v = s ? _.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || _.hFOV_deg || 30, S = Math.min(179, Math.max(0.1, Number(v)));
  if (!s) {
    if (!f) return { state: e, changed: !1 };
    const G = jo(S, h, g), re = Number(((y = a == null ? void 0 : a.initial_pose) == null ? void 0 : y.hFOV_deg) ?? S), se = jo(re, h, g), I = Number(((j = a == null ? void 0 : a.initial_pose) == null ? void 0 : j.vFOV_deg) ?? se);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - G) <= 1e-6 && Math.abs(I - se) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((H, J) => J === r ? {
          ...H,
          vFOV_deg: G,
          initial_pose: H.initial_pose && typeof H.initial_pose == "object" ? { ...H.initial_pose, vFOV_deg: se } : H.initial_pose
        } : H)
      },
      changed: !0
    };
  }
  const M = n.reduce((G, re) => Math.max(G, Number((re == null ? void 0 : re.z_index) || 0)), -1), C = {
    yaw_deg: Number(_.yaw_deg || 0),
    pitch_deg: Number(_.pitch_deg || 0),
    hFOV_deg: S,
    vFOV_deg: f ? jo(S, h, g) : Number(_.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || S),
    rot_deg: Number(_.rot_deg ?? _.roll_deg ?? 0)
  }, W = {
    ...a || {},
    id: ml,
    source_kind: jy,
    source_link_id: i,
    source_state_hash: o,
    ...C,
    initial_pose: { ...C },
    visible: !0,
    z_index: M + 1
  }, V = r >= 0 ? n.map((G, re) => re === r ? W : G) : [...n, W];
  return { state: { ...e, stickers: V }, changed: !0 };
}
function Om(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const sN = ["IMAGE", "VIDEO"];
function Tm(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => sN.includes(n)) ? "2d" : null;
}
function lN(e, t) {
  var i, o, a, s, c, p;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((f) => (f == null ? void 0 : f.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? Tm(r.type) ?? Tm((p = (c = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, r.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : c[r.origin_slot]) == null ? void 0 : p.type) : null;
}
function Uy(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Om(e, "sticker"),
    awaitingPose: !t && (Om(e, "sticker_state") || lN(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Fm(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Vr({ version: 2, stickers: [n] }).stickers[0];
}
function Yy(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var S;
  const a = e.stickers.findIndex((M) => Pf(e, M)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const M = ((S = e.active) == null ? void 0 : S.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((C, W) => W !== a),
        active: M ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const c = i > 0 && o > 0;
  if (s && (r == null ? void 0 : r.placement) === "world" && r.replace && s.placement === "sky") {
    const M = { ...Fm(s.id, r), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((C, W) => W === a ? M : C) }, changed: !0 };
  }
  if (s) {
    if (!c || s.placement !== "sky") return { state: e, changed: !1 };
    const M = [s.size.value, ...s.size.keyframes.map((V) => V.value)], C = M.map((V) => jo(V.hFOV_deg, i, o));
    if (M.every((V, $) => Math.abs(V.vFOV_deg - C[$]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...s.size.value, vFOV_deg: C[0] },
      keyframes: s.size.keyframes.map((V, $) => ({ ...V, value: { ...V.value, vFOV_deg: C[$ + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((V, $) => $ === a ? { ...V, size: W } : V) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const p = new Set(e.stickers.map((M) => M.id));
  let f = 1;
  for (; p.has(`sticker_${f}`); ) f += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Fm(`sticker_${f}`, r)] }, changed: !0 };
  const h = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), g = (M) => c ? jo(M, i, o) : M, _ = yf(`sticker_${f}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: h,
    vFOV_deg: g(h)
  }, _i(e).reduce((M, C) => Math.max(M, C.z_index), -1) + 1), v = (r == null ? void 0 : r.keyframes) ?? {};
  return _.direction.keyframes = v.direction ?? [], _.roll.keyframes = v.roll ?? [], _.size.keyframes = (v.size ?? []).map((M) => ({ ...M, value: { ...M.value, vFOV_deg: g(M.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, _] }, changed: !0 };
}
function Af(e) {
  const t = _i(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Mu(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Mu(o.z_index),
    item: o
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Mu(o.z_index),
    item: o
  }));
  return [...t, ...r, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Xy(e) {
  const t = Nf(e), n = Pf(e, t), r = _i(e).some((s) => s && s.visible !== !1), i = Af(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Ky(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function cN(e) {
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
function Dm(e, t) {
  const n = Nf(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = cN(e), i = String(n.id || ""), o = Af(r), a = o.findIndex((c) => c.type === "sticker" && c.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((c, p) => {
    c.item.z_index = p;
  }), { state: r, changed: !0 };
}
function uN(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function dN(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return By(e, t.value);
  if (t.type === "sync-port") return Yy(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((g) => String((g == null ? void 0 : g.id) || "") === o))
      return { state: e, changed: !1 };
    const c = Af(e).reduce((g, _) => Math.max(g, Number(_.z_index || 0)), -1), p = 30, f = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: p,
      vFOV_deg: jo(p, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, yf(o, dl(i.asset), f, c + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const h = { id: o, asset_id: a, ...f, z_index: c + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], h],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !_i(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Nf(e);
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
    const i = Wy(n);
    return !i || !Ky(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Dm(e, "front");
  if (t.type === "send-back") return Dm(e, "back");
  if (t.type === "delete-selected") {
    if (Pf(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((c) => c === n ? { ...c, visible: !1 } : c)
        },
        changed: !0
      };
    const i = e.stickers.filter((c) => c !== n), o = _i({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = uN(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? gf(n, Zo) : n, s = {};
    if (o.forEach((c) => {
      const p = Number(i[c]);
      Number.isFinite(p) && Math.abs(p - Number(a[c] || 0)) > 1e-12 && (s[c] = p);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const c = Kk(n, s);
      if (!Object.keys(c).length) return { state: e, changed: !1 };
      const p = structuredClone(n);
      return oy(p, Zo, c), { state: { ...e, stickers: e.stickers.map((f) => f === n ? p : f) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === n ? { ...c, ...s } : c)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function fN(e = {}) {
  return zy({
    ...e,
    reduce: dN,
    projectModel: Xy
  });
}
const yd = 2;
function Ui(e, t) {
  return Math.floor(e * t + 0.5);
}
function pN(e, t) {
  return Math.floor(e * t + 1e-3);
}
function qy({ video: e, clock: t, fps: n, span: r, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let c = 0, p = !1, f = !1, h = { name: "idle" }, g = [];
  const _ = () => p && !f, v = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function S() {
    for (const O of g) O();
    g = [];
  }
  function M(O, ue = {}) {
    return S(), h = { name: O, ...ue }, s(), h;
  }
  function C(O, ue, Me) {
    const ze = () => {
      h === O && Me();
    };
    e.addEventListener(ue, ze), g.push(() => e.removeEventListener(ue, ze));
  }
  function W(O, ue) {
    let Me = t.requestFrame(function ze(Xe) {
      h === O && (ue(Xe), h === O && (Me = t.requestFrame(ze)));
    });
    g.push(() => t.cancelFrame(Me));
  }
  function V(O) {
    c = O, o(c);
  }
  function $() {
    return M(f ? "error" : "idle");
  }
  function y() {
    f = !0, $();
  }
  function j() {
    const { seekable: O } = e, ue = O != null && O.length ? O.end(O.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(c / n(), Number.isFinite(ue) ? ue : 1 / 0));
  }
  function G(O) {
    if (!_()) return O === "play" ? J() : $();
    if (e.readyState < yd) {
      const ue = M("loading", { then: O });
      return C(ue, "loadeddata", () => G(ue.then)), C(ue, "error", y), ue;
    }
    return O === "play" && c / n() >= Number(e.duration) ? J() : re(O, !1);
  }
  function re(O, ue) {
    const Me = j();
    if (!e.ended && Ui(Number(e.currentTime), n()) === Ui(Me, n())) return se(O);
    const ze = M("seeking", { then: O, frame: c, retried: ue });
    return C(ze, "seeked", () => {
      const Xe = Ui(Number(e.currentTime), n()) === Ui(j(), n()), ce = c === ze.frame;
      Xe || ce && ze.retried ? se(ze.then) : re(ze.then, ce);
    }), C(ze, "error", y), e.currentTime = Me, ze;
  }
  function se(O) {
    return O === "play" ? I() : (a(), $());
  }
  function I() {
    const O = M("playingVideo", { shown: !1 });
    if (C(O, "pause", () => e.ended ? H() : _e()), C(O, "ended", H), C(O, "error", y), i() && Ui(Number(e.duration), n()) >= r()) {
      const Me = e.loop;
      e.loop = !0, g.push(() => {
        e.loop = Me;
      });
    }
    const ue = (Me, ze) => {
      ze && !O.shown && (O.shown = !0, s()), de(Ui(Me, n()));
    };
    if (v()) {
      let Me = e.requestVideoFrameCallback(function ze(Xe, ce) {
        h === O && (ue(Number(ce.mediaTime), !0), h === O && (Me = e.requestVideoFrameCallback(ze)));
      });
      g.push(() => {
        var ze;
        return (ze = e.cancelVideoFrameCallback) == null ? void 0 : ze.call(e, Me);
      });
    } else
      W(O, () => ue(Number(e.currentTime), e.readyState >= yd));
    return Promise.resolve(e.play()).catch(() => {
      h === O && _e();
    }), O;
  }
  function H() {
    a(), J();
  }
  function J() {
    const O = M("playingClock", { startTs: t.now(), startFrame: c });
    return W(O, (ue) => de(O.startFrame + Math.floor((ue - O.startTs) / 1e3 * n()))), O;
  }
  function de(O) {
    if (O < r()) {
      V(O);
      return;
    }
    if (!i()) {
      xe(r() - 1);
      return;
    }
    h.name === "playingVideo" && (S(), e.pause()), V(0), G("play");
  }
  function xe(O) {
    h.name === "playingVideo" ? (S(), e.pause(), V(Math.max(0, O)), a()) : V(Math.max(0, O)), G("still");
  }
  function _e() {
    if (h.name === "loading" || h.name === "seeking")
      h.then = "still", s();
    else if (h.name === "playingVideo") {
      S(), e.pause();
      const O = pN(Number(e.currentTime), n());
      V(Math.min(O, r() - 1)), a(), c === O ? $() : G("still");
    } else h.name === "playingClock" && xe(Math.min(c, r() - 1));
  }
  function he() {
    if (!R()) {
      if (c >= r() - 1 && V(0), h.name === "loading" || h.name === "seeking") {
        h.then = "play", s();
        return;
      }
      G("play");
    }
  }
  function te(O) {
    const ue = Math.max(0, Math.round(O));
    if (h.name === "loading" || h.name === "seeking") {
      h.then = "still", V(ue), s();
      return;
    }
    h.name === "playingVideo" && (S(), e.pause()), V(ue), G("still");
  }
  function R() {
    return h.name === "playingVideo" || h.name === "playingClock" || h.then === "play";
  }
  return {
    get frame() {
      return c;
    },
    get state() {
      return h.name;
    },
    get playing() {
      return R();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return h.name === "playingVideo" || h.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return h.name === "playingVideo" && h.shown;
    },
    play: he,
    stop: _e,
    seek: te,
    toggle() {
      R() ? _e() : he();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(O) {
      S(), p = !!O, f = !1, G("still");
    },
    dispose() {
      S(), p = !1, h = { name: "idle" };
    }
  };
}
function Jy({ video: e, onCapture: t, onChange: n }) {
  let r = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, c = !1;
  function p(S) {
    s = S, t();
  }
  function f(S) {
    a = S, e.currentTime = S;
  }
  function h() {
    const S = c;
    g(), c !== S && n();
  }
  function g() {
    if (!r || i || e.readyState < yd) return;
    const { time: S, playing: M, fps: C } = o;
    if (S === null) {
      e.pause(), c = !1;
      return;
    }
    if (M) {
      if (a !== null) return;
      const W = Number(e.duration), V = Number.isFinite(W) ? Math.min(S, W) : S, $ = Math.abs(Number(e.currentTime) - V) > 1.5 / C;
      if (e.ended && !$) return;
      $ && f(V), e.paused && (c = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), c = !1, p(NaN)), !(a !== null || s === S) && (Number(e.currentTime) === S ? p(S) : f(S));
  }
  const _ = {
    loadeddata: h,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: h,
    seeked: () => {
      const S = a;
      a = null, !o.playing && S === o.time ? p(S) : h();
    },
    playing: () => {
      !o.playing || c || (c = !0, n());
    },
    error: () => {
      r && (i = !0, n());
    }
  };
  e.muted = !0;
  for (const [S, M] of Object.entries(_)) e.addEventListener(S, M);
  function v(S) {
    r = S, i = !1, a = null, s = null, c = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: S = "", time: M = null, playing: C = !1, fps: W }) {
      S !== r && (v(S), n()), o = { time: M, playing: C, fps: W }, h();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(S, M) {
      return !r || i ? M : o.time === null ? null : o.playing && c ? e : s === null ? M : S;
    },
    dispose() {
      for (const [S, M] of Object.entries(_)) e.removeEventListener(S, M);
      v("");
    }
  };
}
function bd(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function hN({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: c, camera: p = !1 }) {
  let f = "", h = "", g = 0;
  const _ = /* @__PURE__ */ new Set();
  let v = null, S = null;
  const M = () => i().timeline.fps, C = (H) => H.stickers.find((J) => J.source.kind === "port"), W = () => {
    const H = i(), J = C(H);
    return ty(H, {
      minimum: Math.round(M() * 5),
      frames: Math.max(
        f ? Math.round(g * M()) : 0,
        v && J ? Ry(J.clip, M(), v.meta) : 0
      ),
      camera: p
    });
  }, V = qy({
    video: e,
    clock: r,
    fps: M,
    span: W,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: c
  }), $ = () => {
    h === f && Number.isFinite(e.duration) && (g = e.duration);
  }, y = () => {
    h && (_.add(h), c());
  }, j = Jy({ video: t, onCapture: s, onChange: c }), G = $y({ createImage: n, onLoad: c });
  e.muted = !0, e.addEventListener("loadedmetadata", $), e.addEventListener("error", y);
  function re(H) {
    H !== h && (h = H, e.pause(), H ? e.src = H : e.removeAttribute("src"), e.load(), V.setSource(!!H));
  }
  function se() {
    V.playing && V.stop();
  }
  function I(H) {
    const J = C(H);
    S = v && J ? Ly(J.clip, V.frame, H.timeline.fps, v.meta) : null, j.follow({
      src: (v == null ? void 0 : v.src) || "",
      time: S,
      playing: V.advancing,
      fps: H.timeline.fps
    });
  }
  return {
    get frame() {
      return V.frame;
    },
    get playing() {
      return V.playing;
    },
    get showsVideo() {
      return V.showsVideo;
    },
    get source() {
      return h;
    },
    pause: se,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return v;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(H, J) {
      return v != null && v.frames ? G.picture(v.frames, S, v.meta, J) : j.picture(H, J);
    },
    toggle() {
      V.playing ? V.stop() : V.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: H, sources: J, state: de, sticker: xe = null }) {
      if (v = H ? xe : null, !H)
        return se(), re(""), I(de), !1;
      for (const O of _)
        J.includes(O) || _.delete(O);
      const _e = J.find((O) => O && !_.has(O)) || "", he = _e !== f;
      he && (f = _e, g = 0), re(f);
      const te = ey(de, { camera: p }) || !!f && V.state !== "error" || !!v;
      return te || se(), (he || !te || !V.playing && V.frame >= W()) && V.frame !== Zo && V.seek(Zo), I(de), te;
    },
    dispose() {
      V.dispose(), j.dispose(), e.removeEventListener("loadedmetadata", $), e.removeEventListener("error", y), e.pause(), e.removeAttribute("src"), e.load(), h = "";
    }
  };
}
const Bl = Math.PI / 180, Lr = 180 / Math.PI, mN = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), gN = 260;
function Lm(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Zy(e, t) {
  return t ? Zy(t, e % t) : e;
}
function yN(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), c = Zy(a, s) || 1;
  return `${Math.round(a / c)}:${Math.round(s / c)}`;
}
function ls(e, t) {
  const n = Lm(e), r = Lm(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: yN(n, r) };
}
function io(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function Qy(e) {
  const t = io(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? ni(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Cf(e, t, n = mN) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), a = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), p = (M, C, W) => {
    const V = M + C, $ = Math.max(0, W - 1), y = V > $ && V > 0 ? $ / V : 1;
    return [M * y, C * y];
  }, [f, h] = p(c, a, r), [g, _] = p(o, s, i), v = {
    x: f,
    y: g,
    w: Math.max(1, r - f - h),
    h: Math.max(1, i - g - _)
  }, S = nf(v, t);
  return {
    x: v.x + (v.w - S.width) * 0.5,
    y: v.y + (v.h - S.height) * 0.5,
    w: S.width,
    h: S.height,
    safeRect: v
  };
}
function bN(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Cf({ width: n, height: r }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = n / (2 * Math.tan(o * Bl * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, c = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, p = F0(c, I0(
    { x: n * 0.5, y: r * 0.5 },
    a,
    s
  )), f = vN(p, ea(
    c.yaw_deg,
    c.pitch_deg,
    c.roll_deg
  ).right), h = rf({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: f.yaw,
    pitchDeg: f.pitch,
    rollDeg: f.roll,
    frameFovDeg: h.hFOV_deg
  };
}
function eb(e) {
  return {
    yaw: Bt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Lr),
    pitch: Ie(Math.asin(Ie(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Lr, -89.9, 89.9)
  };
}
function vN(e, t) {
  const n = eb(e), r = ea(n.yaw, n.pitch, 0), i = du(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, a = Math.hypot(o.x, o.y, o.z);
  if (!(a > 1e-8)) return { ...n, roll: 0 };
  const s = {
    x: o.x / a,
    y: o.y / a,
    z: o.z / a
  };
  return {
    ...n,
    roll: mc(Math.atan2(
      du(s, r.up),
      du(s, r.right)
    ) * Lr)
  };
}
function tb(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Cf({ width: n, height: r }, ao(e)), o = no(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = F0(e, I0(
    a,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), c = eb(s);
  return {
    yaw: c.yaw,
    pitch: c.pitch,
    fov: Ie(2 * Math.atan(n / (2 * o)) * Lr, 1, 179)
  };
}
function _N(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = no(t, n), c = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: p, halfH: f } = of(c, s), h = {
    x: o - p,
    y: a - f,
    w: p * 2,
    h: f * 2
  }, g = h.x <= 0 && h.y <= 0 && h.x + h.w >= r && h.y + h.h >= i, _ = r / i, v = Math.tan(Zu * Bl), S = _ >= 1 ? v : v * _, M = _ >= 1 ? v / _ : v;
  return {
    focalPx: s,
    rect: h,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(p / s) * Lr,
      vFOV_deg: 2 * Math.atan(f / s) * Lr
    },
    fallback: g ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(S) * Lr,
        vFOV_deg: 2 * Math.atan(M) * Lr
      }
    }
  };
}
function Mo(e, t) {
  const n = io(e);
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
function SN(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const a = no(n, e);
    return rf(nf(n, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ll(o, t) };
}
function Rm(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = ls(t, n);
  if (!o) return e;
  const a = ao(e) >= 1;
  r && o.ratio >= 1 !== a && (o = ls(o.height, o.width));
  const s = SN(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function nb(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (io(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = E0({
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
    const r = io(e);
    if (!r) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((a) => a !== r), o = ((n = i[0]) == null ? void 0 : n.id) == null ? null : String(i[0].id);
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
    return Mo(e, (r) => Rm(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Mo(e, (r) => {
      const o = String(ni(r) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? ls(o[1], o[2]) : ls(ao(r), 1);
      return a ? Rm(r, a.height, a.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Mo(e, (i) => {
      const o = mc(r), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Mo(e, (r) => {
    const i = O0(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? Mo(e, (r) => {
    const i = T0(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? Mo(e, (r) => {
    const i = ob(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function rb({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: a = 0.05
} = {}) {
  const s = o && i ? "alt" : r ? "shift" : "";
  if (!s || !e || !t) return null;
  const c = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, p = {
    x: c.x + c.w * 0.5,
    y: c.y + c.h * 0.5
  }, f = Math.hypot(Number(t.x || 0) - p.x, Number(t.y || 0) - p.y);
  if (s === "shift" && f < Math.min(c.w, c.h) * a) return null;
  const h = Math.atan2(Number(t.y || 0) - p.y, Number(t.x || 0) - p.x);
  return {
    source: s,
    frame: c,
    center: p,
    startRollDeg: Number(n || 0),
    lastAngle: h,
    accumulatedRad: 0
  };
}
function ib(e, t, n = {}) {
  var a, s;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + A0(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: C0(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function ob(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Bl, c = Math.cos(s), p = Math.sin(s), f = o / n, h = -a / n, g = f * c - h * p, _ = f * p + h * c, v = Number(e.pitch_deg || 0) * Bl, S = Math.max(0.25, Math.abs(Math.cos(v)));
  return {
    ...e,
    yaw_deg: Bt(Number(e.yaw_deg || 0) - Math.atan(g) / S * Lr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(_) * Lr, -90, 90)
  };
}
function wN({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return zy({
    readState: e,
    reduce: nb,
    projectModel: Qy,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ue = Object.freeze({
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
}), xN = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, kN = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: xN(t[2])
})), MN = {
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
}, Vm = Object.fromEntries(
  Object.entries(MN).map(([e, t]) => [e, {
    name: t.name,
    elements: kN(t.body)
  }])
), Yt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = vt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Vm, r) ? Vm[r] : null;
    });
    return (r, i) => n.value ? (Te(), Ve("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: xt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Te(!0), Ve(ct, null, Rt(n.value.elements, (o, a) => (Te(), Ve(ct, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (Te(), Ve("path", Qr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), Ve("circle", Qr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), Ve("rect", Qr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), Ve("line", Qr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), Ve("polyline", Qr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), Ve("polygon", Qr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : kt("", !0)
      ], 64))), 128))
    ], 2)) : kt("", !0);
  }
}, un = {
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
    const t = e, n = vt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, i) => (Te(), cr(TS(e.tag), Qr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Ug(() => [
        et(Yt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, NN = ["aria-expanded", "disabled"], PN = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, AN = ["data-aspect", "disabled", "onClick"], CN = { class: "pano-cutout-aspect-custom" }, IN = ["disabled"], EN = ["disabled"], ON = ["data-custom-width", "data-custom-height", "disabled"], ab = {
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
    ]), o = /* @__PURE__ */ tn("1"), a = /* @__PURE__ */ tn("1"), s = /* @__PURE__ */ tn(null), c = vt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), p = vt(() => {
      const S = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], M = String(n.model.aspectLabel || "");
      return S.length ? S.map((C) => {
        const W = typeof C == "string" ? C : String((C == null ? void 0 : C.value) || ""), V = typeof C == "string" ? C : String((C == null ? void 0 : C.label) || W);
        return {
          ...typeof C == "object" && C ? C : {},
          value: W,
          label: V,
          active: M ? W === M : (C == null ? void 0 : C.active) === !0
        };
      }) : i.map((C) => ({
        ...C,
        active: C.value === M
      }));
    }), f = vt(() => {
      var M;
      const S = String(n.model.aspectLabel || "").trim();
      return S || String(((M = p.value.find((C) => C.active === !0)) == null ? void 0 : M.label) || "Aspect");
    });
    eo(f, (S) => {
      const M = String(S || "").match(/^([0-9.]+):([0-9.]+)$/);
      M && (o.value = M[1], a.value = M[2]);
    }, { immediate: !0 });
    function h(S) {
      r("action", S);
    }
    function g(S) {
      var M;
      n.model.aspectOpen === !0 && ((M = s.value) != null && M.contains(S.target) || h({ type: "close-aspect" }));
    }
    uc(() => {
      document.addEventListener("pointerdown", g, !0);
    }), hs(() => {
      document.removeEventListener("pointerdown", g, !0);
    });
    function _(S) {
      const [M, C] = String(S.value || "").split(":");
      h({
        type: "set-aspect",
        width: M,
        height: C,
        preserveOrientation: !0
      });
    }
    function v() {
      h({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (S, M) => (Te(), Ve("div", {
      ref_key: "rootElement",
      ref: s,
      class: xt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), cr(un, {
        key: 0,
        icon: e.model.aspectIcon || ft(Ue).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: c.value },
        onClick: M[0] || (M[0] = (C) => h({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), Ve("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: c.value,
        onClick: M[1] || (M[1] = (C) => h({ type: "toggle-aspect" }))
      }, [
        et(Yt, {
          icon: e.model.aspectIcon || ft(Ue).aspect
        }, null, 8, ["icon"]),
        ve("span", null, gt(f.value), 1),
        et(Yt, {
          icon: ft(Ue).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, NN)),
      ii(ve("div", PN, [
        (Te(!0), Ve(ct, null, Rt(p.value, (C) => (Te(), Ve("button", {
          key: C.value,
          class: xt(["pano-btn pano-frame-aspect-choice", { active: C.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": C.value,
          disabled: c.value,
          onClick: (W) => _(C)
        }, gt(C.label), 11, AN))), 128)),
        ve("div", CN, [
          ii(ve("input", {
            "onUpdate:modelValue": M[2] || (M[2] = (C) => o.value = C),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: c.value
          }, null, 8, IN), [
            [rm, o.value]
          ]),
          M[4] || (M[4] = ve("span", { "aria-hidden": "true" }, ":", -1)),
          ii(ve("input", {
            "onUpdate:modelValue": M[3] || (M[3] = (C) => a.value = C),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: c.value
          }, null, 8, EN), [
            [rm, a.value]
          ]),
          ve("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: c.value,
            onClick: v
          }, "Apply", 8, ON)
        ])
      ], 512), [
        [oo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, TN = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, FN = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ tn(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (Te(), Ve("div", {
      class: xt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Gt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Gt(() => {
      }, ["stop"]))
    }, [
      et(un, {
        icon: ft(Ue).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Gt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ve("div", TN, [
        i[3] || (i[3] = ve("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), Ve(ct, null, Rt(ft(n), (o) => (Te(), Ve("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          ve("kbd", null, gt(o[0]), 1),
          ve("span", null, gt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, DN = {
  class: "pano-view-unavailable",
  role: "status"
}, If = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (Te(), Ve("div", DN, gt(ft(My)), 1));
  }
}, LN = { class: "pano-cutout-node-surface" }, RN = ["title", "disabled"], VN = { class: "value" }, $N = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, zN = {
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
    return (r, i) => (Te(), Ve("div", LN, [
      ve("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Gt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Gt(() => {
        }, ["stop"]))
      }, [
        ve("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => n({ type: "open-editor" }))
        }, [
          et(Yt, {
            icon: ft(Ue).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = ve("span", { class: "label" }, "Full Editor", -1))
        ]),
        et(un, {
          icon: e.model.hasShot ? ft(Ue).delete : ft(Ue).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        et(ab, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        ve("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Gt((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          et(Yt, {
            icon: ft(Ue).roll
          }, null, 8, ["icon"]),
          ve("span", VN, gt(e.model.rollLabel || "0.0°"), 1)
        ], 40, RN),
        et(un, {
          icon: ft(Ue).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        et(FN)
      ], 32),
      e.model.hasShot === !1 ? (Te(), Ve("div", $N, " Choose a view · + Add Frame ")) : kt("", !0),
      e.model.viewUnavailable ? (Te(), cr(If, { key: 1 })) : kt("", !0)
    ]));
  }
}, sb = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ tn(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const h = o;
      return o = void 0, a = !1, { active: !0, intent: h };
    }
    function c(h) {
      const g = i.value;
      return g instanceof HTMLInputElement ? (o = h, a = !0, g.value = "", g.click(), !0) : !1;
    }
    function p(h) {
      var S, M;
      const { active: g, intent: _ } = s();
      if (!g) return;
      const v = ((M = (S = h.target) == null ? void 0 : S.files) == null ? void 0 : M[0]) || null;
      if (v) {
        r("file-selected", { intent: _, file: v });
        return;
      }
      r("file-cancelled", { intent: _ });
    }
    function f() {
      const { active: h, intent: g } = s();
      h && r("file-cancelled", { intent: g });
    }
    return t({ open: c }), (h, g) => (Te(), Ve("input", {
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
}, jN = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, HN = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ tn(!1), n = Object.freeze([
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
    return (r, i) => (Te(), Ve("div", {
      class: xt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Gt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Gt(() => {
      }, ["stop"]))
    }, [
      et(un, {
        icon: ft(Ue).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Gt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ve("div", jN, [
        i[3] || (i[3] = ve("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), Ve(ct, null, Rt(ft(n), (o) => (Te(), Ve("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          ve("kbd", null, gt(o[0]), 1),
          ve("span", null, gt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, GN = { class: "pano-stickers-node-surface" }, WN = ["disabled"], KN = ["aria-label", "data-tip"], BN = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, UN = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, YN = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ tn(null);
    function r(a) {
      var s;
      (s = t.onAction) == null || s.call(t, a);
    }
    function i() {
      var a, s;
      (s = (a = n.value) == null ? void 0 : a.open) == null || s.call(a, "add");
    }
    function o(a) {
      r({ type: "add-image-file", file: (a == null ? void 0 : a.file) || null });
    }
    return (a, s) => (Te(), Ve("div", GN, [
      ve("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Gt(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Gt(() => {
        }, ["stop"]))
      }, [
        ve("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (c) => r({ type: "open-editor" }))
        }, [
          et(Yt, {
            icon: ft(Ue).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = ve("span", { class: "label" }, "Full Editor", -1))
        ]),
        ve("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          et(Yt, {
            icon: ft(Ue).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = ve("span", { class: "label" }, "Add Image", -1))
        ], 8, WN),
        et(un, {
          icon: e.model.locked ? ft(Ue).lock_closed : ft(Ue).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (c) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        et(un, {
          icon: ft(Ue).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (c) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        et(un, {
          icon: ft(Ue).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (c) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        et(un, {
          icon: e.model.isExternalSelection ? ft(Ue).back_initial : ft(Ue).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (c) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        et(HN)
      ], 32),
      e.model.playable === !0 ? (Te(), Ve("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Gt(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Gt(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (c) => r({ type: "toggle-playback" }))
      }, [
        et(Yt, {
          icon: e.model.playing ? ft(Ue).pause : ft(Ue).play
        }, null, 8, ["icon"])
      ], 40, KN)) : kt("", !0),
      e.model.hasStickers === !1 ? (Te(), Ve("div", BN, " Add Image to place a sticker ")) : kt("", !0),
      e.model.dropActive === !0 ? (Te(), Ve("div", UN, "Drop image to add")) : kt("", !0),
      et(sb, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), cr(If, { key: 3 })) : kt("", !0)
    ]));
  }
}, $m = 24;
function XN(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ya(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function lb(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function vd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Ya(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ya(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : lb(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function qN(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => Ya(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = r ? e.corners.findIndex((a) => Ya(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, c = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * c >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ya(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : lb(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Ef(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function cb(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Pa(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Ie(n.x, -r, t.width + r),
    y: Ie(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function JN(e) {
  const t = ea(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Lt * 0.5),
    tanY: Math.tan(Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Lt * 0.5)
  };
}
function Gi(e, t, n) {
  return tf(Tl(
    Tl(e.centerDir, Fl(e.right, t)),
    Fl(e.up, n)
  ));
}
function Of(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = JN(e), r = Pa(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    Gi(n, -n.tanX, n.tanY),
    Gi(n, n.tanX, n.tanY),
    Gi(n, n.tanX, -n.tanY),
    Gi(n, -n.tanX, -n.tanY)
  ].map((g) => Pa(g, t)), o = Array.from({ length: 4 }, (g, _) => {
    const v = [];
    for (let S = 0; S <= 28; S += 1) {
      const M = S / 28;
      let C, W;
      _ === 0 ? (C = -n.tanX + 2 * n.tanX * M, W = n.tanY) : _ === 1 ? (C = n.tanX, W = n.tanY - 2 * n.tanY * M) : _ === 2 ? (C = n.tanX - 2 * n.tanX * M, W = -n.tanY) : (C = -n.tanX, W = -n.tanY + 2 * n.tanY * M);
      const V = Pa(Gi(n, C, W), t);
      V && v.push({ x: V.x, y: V.y });
    }
    return v;
  }), a = Pa(Gi(n, 0, n.tanY), t), s = Pa(
    Gi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), c = [r, ...i, a, s];
  if (c.some((g) => !g || !Number.isFinite(g.x) || !Number.isFinite(g.y)))
    return { visible: !1 };
  if (!c.some((g) => g.rawZ > 1e-4)) return { visible: !1 };
  const p = s.x - a.x, f = s.y - a.y, h = Math.hypot(p, f) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: i.map((g) => ({ x: g.x, y: g.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + p / h * $m,
      y: a.y + f / h * $m
    },
    visible: !0
  };
}
function zm(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: Of(a, r) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var c, p;
    return Number(((c = s.item) == null ? void 0 : c.z_index) || 0) - Number(((p = a.item) == null ? void 0 : p.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = vd(o.geometry, n);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = vd(a.geometry, n);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function ZN(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Bt(Math.atan2(r.x, r.z) * dn),
    pitch_deg: Math.asin(Ie(r.y, -1, 1)) * dn
  };
}
function QN(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function eP(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * dn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Xs = null;
function Tf() {
  return Xs || (Xs = new Promise((e) => {
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
  }), Xs);
}
function ir(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function tP(e, t = 1024) {
  const n = Math.max(1, Math.round(ir(e, 2048))), r = Math.min(n, Math.max(1, Math.round(ir(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function nP(e, t, n) {
  const r = ir(t), i = ir(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || i < 1) return null;
  const a = ir(o.u0), s = ir(o.v0), c = ir(o.u1), p = ir(o.v1);
  if (c <= a || p <= s) return null;
  const f = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + c) * 0.5 + ir(f.du)) * r,
    centerY: ((s + p) * 0.5 + ir(f.dv)) * i,
    width: (c - a) * r,
    height: (p - s) * i,
    rotationRad: ir(f.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, ir(f.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function rP(e, t, n) {
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
function iP() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, a] of e) {
        if (e.size <= 16) break;
        a.settled && (a.image.onload = null, a.image.onerror = null, e.delete(o));
      }
  }
  function r(o, a) {
    let s = e.get(o);
    if (s)
      return e.delete(o), e.set(o, s), !s.settled && typeof a == "function" && s.listeners.add(a), s.image;
    const c = new Image();
    s = { image: c, listeners: new Set(typeof a == "function" ? [a] : []), settled: !1 }, e.set(o, s);
    const p = () => {
      s.settled = !0;
      const f = [...s.listeners];
      s.listeners.clear(), f.forEach((h) => h()), n();
    };
    return c.onload = p, c.onerror = p, c.src = o, n(), c;
  }
  function i(o, a, s, c = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const p = String(o.rasterDataUrl || "").trim(), f = nP(o, a, s);
    if (!p.startsWith("data:") || !f) return null;
    const h = rP(o, a, s), g = String((o == null ? void 0 : o.id) || "").trim() || h, _ = t.get(g);
    if ((_ == null ? void 0 : _.revision) === h) return { source: _.source, revision: h };
    const v = r(p, c), S = Number(v.naturalWidth || v.width || 0), M = Number(v.naturalHeight || v.height || 0);
    if (!v.complete || S < 1 || M < 1) return null;
    const C = Mn({ label: "raster-object" });
    C.width = Math.max(1, Math.round(a)), C.height = Math.max(1, Math.round(s));
    const W = C.getContext("2d");
    return W ? (f.wrapOffsets.forEach((V) => {
      W.save(), W.translate(f.centerX + V, f.centerY), W.rotate(f.rotationRad), W.scale(f.scale, f.scale), W.drawImage(
        v,
        -f.width * 0.5,
        -f.height * 0.5,
        f.width,
        f.height
      ), W.restore();
    }), t.set(g, { revision: h, source: C }), { source: C, revision: h }) : null;
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
function oP(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function aP(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function sP({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(h) {
    if (!h) return;
    h.entry.listeners.delete(h);
    const g = r.get(h.owner);
    (g == null ? void 0 : g.get(h.key)) === h && g.delete(h.key);
  }
  function a(h, g, _, v) {
    if (!h || typeof v != "function" || _.settled) return;
    let S = r.get(h);
    S || (S = /* @__PURE__ */ new Map(), r.set(h, S));
    const M = S.get(g);
    if ((M == null ? void 0 : M.entry) === _) {
      M.callback = v;
      return;
    }
    o(M);
    const C = { owner: h, key: g, entry: _, callback: v };
    S.set(g, C), _.listeners.add(C);
  }
  function s(h, g) {
    h.settled || (h.settled = !0, h.image.onload = null, h.image.onerror = null, !g && n.get(h.key) === h && n.delete(h.key), [...h.listeners].forEach((_) => {
      o(_);
      try {
        _.callback(h.image, g);
      } catch {
      }
    }), c(i));
  }
  function c(h) {
    if (!(n.size <= h))
      for (const [g, _] of n) {
        if (n.size <= h) break;
        !_.settled || _.listeners.size > 0 || (_.image.onload = null, _.image.onerror = null, n.delete(g));
      }
  }
  function p(h, g, _, v = null) {
    const S = String(g || ""), M = String(_ || "");
    if (!S || !M) return null;
    let C = n.get(S);
    if (C)
      n.delete(S), n.set(S, C);
    else {
      c(i - 1);
      const V = e || globalThis.Image;
      if (typeof V != "function") return null;
      const $ = new V();
      C = { key: S, image: $, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(S, C), $.onload = () => s(C, !0), $.onerror = () => s(C, !1), $.src = M;
    }
    return C.settled || C.image.complete && Number(C.image.naturalWidth || C.image.width || 0) > 0 || a(h, S, C, v), C.image;
  }
  function f(h) {
    const g = r.get(h);
    g && ([...g.values()].forEach(o), r.delete(h), c(i));
  }
  return { get: p, disposeOwner: f };
}
const Ta = /* @__PURE__ */ new WeakMap();
function ub(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Ta.get(e);
  r || (r = [], Ta.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = Ta.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && Ta.delete(e);
  };
}
function oi(e, ...t) {
  const n = Ta.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const gl = Object.freeze({
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
}), db = "PanoramaSuite.Editor.ViewControls", lP = {
  id: db,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(gl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function cP(e) {
  return Object.hasOwn(gl, e) ? gl[e] : gl.default;
}
function uP(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === n && !!s.alt === r);
  return (a == null ? void 0 : a.action) ?? null;
}
function dP(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Ul = "state_json";
function ri(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function fP(e) {
  var a, s;
  const t = ri(e, Ul);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = ry(n, {
    coverage: (a = ri(e, "coverage")) == null ? void 0 : a.value
  }), i = nb(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function Ff(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ri(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var a, s, c, p, f, h, g, _, v;
    const o = r ? r(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (p = (c = e.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || p.call(c), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0), (g = (h = e.graph) == null ? void 0 : h.setDirtyCanvas) == null || g.call(h, !0, !0), (v = (_ = t == null ? void 0 : t.canvas) == null ? void 0 : _.setDirty) == null || v.call(_, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function pP(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function jm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function hP(e) {
  var f, h, g, _, v, S;
  if (!e) return;
  const t = ri(e, "coverage"), n = ri(e, "bg_color"), r = ri(e, Ul), i = ri(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), a = String(n.value ?? "").trim(), s = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && pP(o) && (jm(a) || a === ""))) return;
  let p = "360";
  if (jm(a))
    try {
      p = String(zn((f = JSON.parse(a)) == null ? void 0 : f.coverage));
    } catch {
      p = "360";
    }
  t.value = p, (h = t.callback) == null || h.call(t, p), n.value = o, (g = n.callback) == null || g.call(n, o), r.value = a, (_ = r.callback) == null || _.call(r, a), i && (i.value = s, (v = i.callback) == null || v.call(i, s)), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
}
function yl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, a;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (a = r.parentEl) != null && a.style && (r.parentEl.style.display = "none")));
  });
}
function _d(e, t, n) {
  var o, a;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((s) => String((s == null ? void 0 : s.name) || "") === String(t));
  if (i) {
    i.callback = n, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (a = i.parentEl) != null && a.style && (i.parentEl.style.display = "");
    const s = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(s) || Number(s[0] || 0) <= 0 || Number(s[1] || 0) <= 0) && (i.computeSize = () => {
      var c;
      return [Math.max(120, Number(((c = e == null ? void 0 : e.size) == null ? void 0 : c[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, n), i && (i.serialize = !1), i;
}
async function mP(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, i]) => i)) : await Promise.all(r.map(([, i]) => i)), r.forEach(([i, o]) => {
        n.get(i) === o && n.delete(i);
      });
    }
}
function Fa(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), a = o.catch(() => {
  });
  e.__panoStickerOperationTail = a, e.__panoPendingStickerUploads.set(t, o);
  const s = () => {
    var c, p;
    ((p = (c = e.__panoPendingStickerUploads) == null ? void 0 : c.get) == null ? void 0 : p.call(c, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function fb(e, t = {}) {
  var r;
  await mP(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of n) await i();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function gP(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await fb(e), n ? n.apply(this, r) : this.value;
  };
}
function yP(e) {
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
function bP(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Aa(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: c = !1,
  studio: p = !1
}) {
  if (!(e != null && e.prototype)) return;
  function f(h) {
    var v;
    const g = `editor_btn|${n}`;
    if (h.__panoPreviewAttached === !0 && h.__panoPreviewMountKey === g) return;
    yP(h), Ff(h, t), yl(h, Ul);
    const _ = ri(h, Ul);
    if (gP(h, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const S = _.callback;
      _.callback = (M) => {
        var W;
        const C = S ? S(M) : void 0;
        return (W = h.setDirtyCanvas) == null || W.call(h, !0, !1), C;
      };
    }
    if (n === "PanoramaStickers") {
      h.__panoSceneStateV2 = c, h.__panoStudio = p;
      const S = ri(h, "bg_color");
      !c && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (v = S.callback) == null || v.call(S, "#00ff00")), _d(h, r, () => i(h, "stickers")), s && (o(h, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(h, "stickers")
      }), h.__panoStickersNodeSurface && yl(h, r), (!Array.isArray(h.size) || h.size[0] < 10 || h.size[1] < 10) && (h.size = [360, 260])), h.__panoPreviewAttached = !0, h.__panoPreviewMountKey = g;
      return;
    }
    h.__panoSceneStateV2 = c, _d(h, r, () => i(h, "cutout")), c || a(h, {
      buttonText: r,
      onOpen: () => i(h, "cutout")
    }), h.__panoCutoutNodeSurface && yl(h, r), (!Array.isArray(h.size) || h.size[0] < 10 || h.size[1] < 10) && (h.size = [360, 260]), h.__panoPreviewAttached = !0, h.__panoPreviewMountKey = g;
  }
  for (const h of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const g = e.prototype[h];
    e.prototype[h] = function() {
      const _ = g ? g.apply(this, arguments) : void 0;
      h === "onNodeCreated" && n === "PanoramaCutout" && !c && fP(this), h === "onConfigure" && n === "PanoramaStickers" && !c && this.widgets && hP(this);
      const v = !!this.__panoPreviewAttached;
      return (h === "onNodeCreated" || this.widgets) && f(this), h === "onAdded" && v && oi(this, "attach"), _;
    };
  }
}
function vP(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return bP(this), r;
  };
}
function _P(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
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
    Ff(e, t);
    const c = (p = e) => n(p, "stickers", { readOnly: !0, hideSidebar: !1 });
    _d(e, "Open Preview", () => c(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), e.__panoPreviewNodeSurface && yl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function SP({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: a,
  enableStickersPreview: s = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [lP, sx],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [sm],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [sm.id] }],
    beforeRegisterNodeDef(c, p) {
      const f = String((p == null ? void 0 : p.name) || "");
      (f === "PanoramaStickers" || f === "Panorama Stickers") && Aa(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s
      }), f === "PanoramaStickersNode" && Aa(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), f === "PanoramaStudio" && Aa(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (f === "PanoramaCutout" || f === "Panorama Cutout") && Aa(c, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s
      }), f === "PanoramaCutoutNode" && Aa(c, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Dl(f) && vP(c);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(c) {
      c.__panoPreviewAttached && o(c);
    },
    nodeCreated(c) {
      const p = String((c == null ? void 0 : c.comfyClass) || (c == null ? void 0 : c.type) || (c == null ? void 0 : c.title) || "");
      Ff(c, e), Dl(p) && _P(c, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const wP = /\.(png|jpe?g|webp|gif|bmp)$/i;
function br(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : wP.test(String(e.name || "")) : !1;
}
function Df(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => br(n)) : !1;
}
function xP(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (c) => {
    var p, f, h;
    (p = c == null ? void 0 : c.preventDefault) == null || p.call(c), (f = c == null ? void 0 : c.stopPropagation) == null || f.call(c), (h = c == null ? void 0 : c.stopImmediatePropagation) == null || h.call(c);
  }, o = (c) => {
    if (Df(c == null ? void 0 : c.dataTransfer)) {
      i(c);
      try {
        c.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, a = (c) => {
    var p;
    c != null && c.relatedTarget && ((p = e.contains) != null && p.call(e, c.relatedTarget)) || n(!1);
  }, s = (c) => {
    var f;
    const p = Array.from(((f = c == null ? void 0 : c.dataTransfer) == null ? void 0 : f.files) || []).find((h) => br(h));
    if (!p) {
      n(!1);
      return;
    }
    i(c), n(!1), r(p);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), n(!1);
  };
}
async function Da(e, t = {}) {
  var a, s, c, p;
  if (!br(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((p = (c = globalThis.URL) == null ? void 0 : c.revokeObjectURL) == null ? void 0 : p.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const f = await new Promise((h, g) => {
      const _ = new n();
      _.onload = () => h(_), _.onerror = () => g(new Error("image load failed")), _.src = o;
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
async function Yi(e, { fetchApi: t } = {}) {
  if (!br(e)) throw new TypeError("A supported image file is required.");
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
const Hm = /* @__PURE__ */ new WeakSet(), Gm = /* @__PURE__ */ new WeakSet();
let Wm = 0;
function Sd(e) {
  if (!e || typeof e != "object" || Gm.has(e)) return e;
  const t = String(e.type || "preview");
  return Wm += 1, e.type = `${t}:pano-${Wm}`, Gm.add(e), e;
}
function Yl(e) {
  if (!e || typeof e != "object" || Hm.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Hm.add(e), e;
}
function pb(e, t) {
  var r, i;
  if (!t || ((i = (r = Yl(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function kP({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (c) => o || r || typeof e != "function" ? !1 : (i = c, r = e(() => {
    r = 0;
    const p = i;
    i = null, o || n == null || n(p);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: Xt } = nl;
BM((e) => Si(e.id));
UM(en);
const Lf = sP(), { linkedVideoFile: MP } = Dy({ app: Xt, api: en });
function wd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (nl == null ? void 0 : nl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const NP = "pano_suite.ui_settings.v1", PP = 120, AP = 2048;
function Km() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(NP)) || "").trim();
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
function CP() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ca(e) {
  var n, r, i, o, a;
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
    styleTransform: String(((a = e.style) == null ? void 0 : a.transform) || "")
  };
}
function IP() {
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
function xd(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, i) => {
    const o = Number(r), a = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(a) ? null : [o, a];
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
function hb(e) {
  const t = xd(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function EP(e, t, n) {
  hb(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function kd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Rf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function mb(e) {
  return Dl(Rf(e));
}
function Bm(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Xt == null ? void 0 : Xt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, r, n, i].join("|");
}
function gb(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = kd(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, c = n.noPreview === !0;
      if (o === i && o !== "none" && a === r && s === c) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = c, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && bl(e), w2(e, { ...n, mode: r, __panoForcedPath: i }), this.activeBackend = kd(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      bl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      bl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function OP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function bl(e, t = {}) {
  var r, i, o, a, s;
  if (!e) return;
  Md.unregister(e), OP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const n = e.__panoDomPreview;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (i = e.__panoLegacyRestore) == null || i.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, n) {
    try {
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (s = (a = n.root) == null ? void 0 : a.remove) == null || s.call(a);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !0;
      const f = String((p == null ? void 0 : p.name) || ""), h = String((p == null ? void 0 : p.type) || ""), g = wd();
      return f === g || h === g || f === "pano_preview" || h === "pano_preview" ? !0 : f === "preview" && h === "pano_preview";
    }).forEach((p) => QP(e, p));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function TP(e, t = "#00ff00") {
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
function FP(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Ho(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Ln(e) {
  var s, c;
  const t = FP(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((s = Ho(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((c = Ho(e, "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? iy(t, { backgroundColor: r, coverage: i, active: sy(e) }) : TP(t, r);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: i, parsed: a }, a;
}
function Ho(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function DP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function yb(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (r = s.outputNode);
    } catch {
    }
  return !r && n != null && (r = DP(e == null ? void 0 : e.graph, n)), r;
}
function LP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function bb(e, t = []) {
  const n = LP(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    ki.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function Um(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Xl(e, t) {
  const n = Um(e), r = Um(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function RP(e, t) {
  var n;
  return yb(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function VP(e, t = ki) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = bb(e, t).map((s) => n.findIndex((c) => String((c == null ? void 0 : c.name) || "") === String(s))).filter((s) => s >= 0), o = n.map((s, c) => ({ input: s, idx: c })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return QM(e, a, RP);
}
const Md = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = en) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var c, p, f, h, g;
        if (!o) return;
        const a = Xl(r, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...VP(o)].some((_) => Xl(r, _)) || Fy(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (vb(o), (p = (c = o.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || p.call(c), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (g = (h = o.graph) == null ? void 0 : h.setDirtyCanvas) == null || g.call(h, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, en.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = en) != null && e.removeEventListener) || (en.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function ql(e) {
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
  return typeof ((o = en) == null ? void 0 : o.apiURL) == "function" ? en.apiURL(i) : i;
}
function $P(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function zP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function jP(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function HP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if ($P(t)) return [t];
  const { filename: n, subfolder: r } = zP(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => ql({
    filename: n,
    subfolder: r,
    type: o
  }));
  return jP([...i, t]);
}
function GP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? ql({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Si(e) {
  const t = Xt == null ? void 0 : Xt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Xl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Xl(a, i)) return t[a];
  }
  return null;
}
function Xa(e, t, n = null) {
  const r = n || Si(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
}
function Xn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Xn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return ql({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Xn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ql(e);
}
function Jl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Nu(e) {
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
function Vf(e, t) {
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
function WP(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function KP(e, t) {
  try {
    e.__panoOwnOutputRev = oP(e.__panoOwnOutputRev);
    const n = WP(t);
    let r = "";
    for (const i of n)
      if (r = Xn(i), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Vf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Go(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function BP(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!gn(e, "background"))
    return Go(e), null;
  const i = Si(r), o = Mf(i, t, Xn);
  if (!o)
    return Go(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = Vf(o, a), c = `${t.join("|")}:${s}`, p = e.__panoOwnOutputVideoCache;
  if (p && p.key === c) return p.player.failed() ? null : p.player.video;
  Go(e);
  const f = eN({
    documentRef: document,
    src: s,
    onFrame: n
  });
  return f ? (e.__panoOwnOutputVideoCache = { key: c, player: f }, f.video) : null;
}
function UP(e, t = []) {
  var p, f;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = bb(e, t).map((h) => n.findIndex((g) => String((g == null ? void 0 : g.name) || "") === String(h))).filter((h) => h >= 0), o = n.map((h, g) => ({ input: h, idx: g })).filter(({ input: h }) => String((h == null ? void 0 : h.type) || "").toUpperCase() === "IMAGE").map(({ idx: h }) => h), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const h of a) {
    const g = n[h], _ = e.graph ? e.getInputLink(h) : null;
    if ((_ == null ? void 0 : _.origin_id) == null) continue;
    const v = _.origin_id, S = yb(e, h, v);
    if (!S) continue;
    const M = Number(_.origin_slot ?? 0), C = Si((S == null ? void 0 : S.id) ?? v), W = Array.isArray(C == null ? void 0 : C.images) ? C.images : [];
    if (W.length) {
      const j = [];
      M >= 0 && M < W.length && j.push(W[M]), j.push(...W);
      for (const G of j.filter((re) => !hl(re))) {
        const re = Xn(G);
        if (re)
          return String((g == null ? void 0 : g.name) || ""), { src: `${re}&pano_src=${md(C)}`, sourceType: "nodeOutputs", inputName: String((g == null ? void 0 : g.name) || "") };
      }
    }
    let V = [];
    try {
      V = typeof (Xt == null ? void 0 : Xt.getNodeImageUrls) == "function" ? Xt.getNodeImageUrls(S) || [] : [];
    } catch {
      V = [];
    }
    if (Array.isArray(V) && V.length) {
      const j = [];
      M >= 0 && M < V.length && j.push(V[M]), j.push(...V);
      for (const G of j) {
        const re = Xn(G);
        if (re)
          return String((g == null ? void 0 : g.name) || ""), { src: re, sourceType: "appNodeImageUrls", inputName: String((g == null ? void 0 : g.name) || "") };
      }
    }
    const $ = Array.isArray(S == null ? void 0 : S.imgs) ? S.imgs : [];
    if ($.length) {
      const j = [];
      M >= 0 && M < $.length && j.push($[M]), j.push(...$);
      for (const G of j) {
        const re = Xn(G);
        if (re)
          return String((g == null ? void 0 : g.name) || ""), { src: re, sourceType: "nodeImgs", inputName: String((g == null ? void 0 : g.name) || "") };
      }
    }
    const y = (p = S == null ? void 0 : S.widgets) == null ? void 0 : p.find((j) => String((j == null ? void 0 : j.name) || "").toLowerCase() === "image");
    if (y) {
      let j = Xn(y.value);
      if (j && !j.includes("/") && !j.includes(":") && (S.comfyClass === "LoadImage" || S.type === "LoadImage") && (j = en.apiURL(`/view?filename=${encodeURIComponent(j)}&type=input&subfolder=`)), j)
        return String((g == null ? void 0 : g.name) || ""), { src: j, sourceType: "widget", inputName: String((g == null ? void 0 : g.name) || "") };
    }
  }
  const s = gn(e, "background") ? Si(e == null ? void 0 : e.id) : null, c = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && c.push(...s.pano_input_images), Array.isArray((f = s == null ? void 0 : s.ui) == null ? void 0 : f.pano_input_images) && c.push(...s.ui.pano_input_images), c.length > 0)
    for (const h of c) {
      const g = Xn(h);
      if (g)
        return { src: g, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function YP(e, t = [], n = {}) {
  const r = UP(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = HP(i);
  if (!o.length) return null;
  const a = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", c = e.__panoLinkedInputImageCache.get(s);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return a && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const p = new Image(), f = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  f.pendingSrcRaw = i, f.pendingResolvedSrc = "", f.pendingImg = p, e.__panoLinkedInputImageCache.set(s, f);
  let h = -1;
  const g = () => {
    var v, S, M, C;
    if (h += 1, h >= o.length) {
      if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === f && f.pendingImg === p && (f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null, !f.img))
        try {
          (C = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || C.call(M, s);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const _ = o[h];
    f.pendingResolvedSrc = _, p.src = _;
  };
  return p.onload = () => {
    var _, v, S;
    ((v = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : v.call(_, s)) === f && f.pendingImg === p && (f.srcRaw = i, f.resolvedSrc = String(f.pendingResolvedSrc || p.src || ""), f.img = p, f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null), String(f.pendingResolvedSrc || f.resolvedSrc || p.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = (_) => {
    var v, S, M, C;
    if (h + 1 < o.length) {
      g();
      return;
    }
    if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === f && f.pendingImg === p && (f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null, !f.img))
      try {
        (C = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || C.call(M, s);
      } catch {
      }
    String(f.pendingResolvedSrc || f.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((_ == null ? void 0 : _.type) || "error");
  }, g(), a && f.img && (f.img.complete || f.img.naturalWidth || f.img.width) ? f.img : p;
}
function XP(e, t = [], n = null, r = {}) {
  const i = YP(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function vb(e) {
  var t, n;
  if (e) {
    Lf.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Go(e), e.__panoWrappedErpCache = null;
  }
}
function qP(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Go(e), e.__panoWrappedErpCache = null;
  }
}
function _b(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function qs(e, t, n = "") {
  const r = _b(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < PP ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Ym(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), a = n / i, s = r / o, c = Math.min(a, s);
  return Number.isFinite(c) && c > 0 ? c : 1;
}
function JP(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * n)), c = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), p = Math.max(Math.round(34 * n), s + Math.round(14 * n)), f = r + (o - c) * 0.5, h = i + (a - p) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(f, h, c, p, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", f + c * 0.5, h + p * 0.5 + 0.5), e.restore();
}
function Pu(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function ZP(e) {
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
function QP(e, t) {
  return pb(e, t);
}
function cs(e, t, n, r = null) {
  var g;
  if (!String(t || "")) return null;
  let o = GP(n);
  if (!o && (r != null && r.external)) {
    if (!gn(e, "external-sticker")) return null;
    const _ = Si(e == null ? void 0 : e.id), v = ((g = _ == null ? void 0 : _.ui) == null ? void 0 : g.pano_sticker_input_images) || (_ == null ? void 0 : _.pano_sticker_input_images) || [];
    for (const S of Array.isArray(v) ? v : [v])
      if (o = Xn(S), o) break;
  }
  if (!o) return null;
  const a = Xa(e, "pano_sticker_input_state_hash"), s = r != null && r.external ? String(a ?? "") : "", c = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, p = r != null && r.external ? Vf(o, c) : o, f = aP(o, s, c);
  return Lf.get(e, f, p, (_, v) => {
    var S, M;
    v && (r != null && r.external && e.__panoOutputFromRun && oi(e, "image-loaded"), (M = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || M.call(S));
  }) || null;
}
function e2(e, t) {
  var h, g, _, v;
  const n = o2(e, t), r = a2(t), i = Array.isArray((h = t == null ? void 0 : t.painting) == null ? void 0 : h.groups) ? t.painting.groups : [], o = new Map(
    i.filter((S) => S && typeof S == "object").map((S) => [String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim(), Number((S == null ? void 0 : S.z_index) || 0)])
  ), a = n ? r.map((S) => {
    const M = n.getGroupDisplayCanvas(S);
    return M ? {
      id: `paint_group:${S}`,
      source: M,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${S}`,
      zIndex: Number(o.get(S) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (v = (_ = e.__panoRasterObjectSurfaceCache) == null ? void 0 : _.retain) == null || v.call(_, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = iP()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var S, M;
    return (M = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null ? void 0 : M.call(S);
  });
  const c = tP(t == null ? void 0 : t.output_preset), p = s.filter((S) => (S == null ? void 0 : S.visible) !== !1 && String((S == null ? void 0 : S.layerKind) || "paint") === "paint").map((S) => String((S == null ? void 0 : S.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(p);
  const f = s.map((S) => {
    const M = e.__panoRasterObjectSurfaceCache.get(
      S,
      c.width,
      c.height,
      e.__panoRasterObjectReady
    );
    return M ? {
      id: `raster:${String((S == null ? void 0 : S.id) || "")}`,
      source: M.source,
      revision: M.revision,
      zIndex: Number((S == null ? void 0 : S.z_index) || 0),
      opacity: 1,
      visible: (S == null ? void 0 : S.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...f];
}
function t2(e, t, n, r) {
  var o, a, s, c, p, f;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const h = r.convertEventToCanvasOffset(t);
      if (Array.isArray(h) && h.length >= 2)
        return {
          x: Number(h[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(h[1]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[0]) || 0),
      y: Number(t.canvasY) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[1]) || 0)
    };
  const i = r2(e, t, r);
  return i || null;
}
function n2(e, t) {
  var h, g;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (h = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : h.call(i), a = (t == null ? void 0 : t.ds) || ((g = Xt == null ? void 0 : Xt.canvas) == null ? void 0 : g.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const c = Array.isArray(a.offset) ? a.offset : [0, 0], p = (n - Number(o.left || 0)) / s - Number(c[0] || 0), f = (r - Number(o.top || 0)) / s - Number(c[1] || 0);
  return !Number.isFinite(p) || !Number.isFinite(f) ? null : { x: p, y: f };
}
function r2(e, t, n) {
  var i, o;
  const r = n2(t, n || (Xt == null ? void 0 : Xt.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function i2(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function o2(e, t) {
  var p, f, h, g, _, v, S, M, C, W, V, $;
  const n = (f = (p = t == null ? void 0 : t.painting) == null ? void 0 : p.paint) == null ? void 0 : f.strokes, r = (g = (h = t == null ? void 0 : t.painting) == null ? void 0 : h.mask) == null ? void 0 : g.strokes, i = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!i && !o) return null;
  const a = i2(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = Zd(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const c = {
    paint: n || null,
    mask: r || null,
    groups: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((S = e.__panoPreviewPaintRevision) == null ? void 0 : S.paint) !== c.paint || ((M = e.__panoPreviewPaintRevision) == null ? void 0 : M.mask) !== c.mask || ((C = e.__panoPreviewPaintRevision) == null ? void 0 : C.groups) !== c.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== c.rasterObjects) && (e.__panoPreviewPaintRevision = c, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.groups) ? t.painting.groups.length : 0),
    String(Array.isArray(($ = t == null ? void 0 : t.painting) == null ? void 0 : $.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function a2(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, i) => Number((r == null ? void 0 : r.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function s2(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function l2(e, t, n) {
  const r = Of(t, n);
  r.visible && Ef(e, r.boundaryEdges, { selected: !1 });
}
function c2(e, t, n) {
  const r = Of(t, n);
  r.visible && (e.save(), Ef(e, r.boundaryEdges, { selected: !0 }), cb(e, r, { accent: XN(t) }), e.restore());
}
function Nd(e, t, n) {
  return xy(Gl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Zl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Zo;
}
function u2(e) {
  return [gn(e, "background") ? Mf(Si(e.id), ["pano_input_videos"], Xn) : "", MP(e, ki)];
}
function d2(e) {
  var o;
  if (!gn(e, "external-sticker")) return null;
  const t = Si(e.id), n = Xa(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Xn), meta: n };
  const i = Mf(t, ["pano_sticker_input_videos"], Xn);
  return i ? { src: i, meta: n } : null;
}
function f2({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Xm(e, t, n) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Vr({ ...t, painting: null }) });
  const r = (a) => {
    var c;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = cs(e, a.id, ay(a.source), { external: a.source.kind === "port" });
      const p = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && p) {
        const f = p.playback.stickerPicture(p.stickerStill, s), h = Vy(p.playback.stickerMedia, s);
        return f ? { media: f, revision: Nu(f), source: h } : null;
      }
    } else {
      const p = a.type === "external_image" || a.source_kind === "external_image", f = String(a.asset_id || "") || (p ? String(a.id || "") : "");
      s = cs(e, f, (c = t.assets) == null ? void 0 : c[a.asset_id], { external: p });
    }
    return Jl(s) ? { media: s, revision: Nu(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : e2(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: Jl(n) ? { media: n, revision: Nu(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: ky(e.__panoSurfaceScene.sceneState, Zl(e), t.stickers, { media: r, paintLayers: i })
  };
}
function p2(e, t, n) {
  var $, y, j, G, re, se, I;
  const r = String(e.__panoPreviewMode || "stickers");
  _b(e, r);
  const i = Ln(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (j = (y = ($ = e.__panoCutoutNodeSurface) == null ? void 0 : $.session) == null ? void 0 : y.refresh) == null || j.call(y)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (se = (re = (G = e.__panoStickersNodeSurface) == null ? void 0 : G.session) == null ? void 0 : re.refresh) == null || se.call(re));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), c = t.getContext("2d");
  if (!c) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const p = { x: 0, y: 0, w: a, h: s };
  c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "#070707", c.fillRect(0, 0, a, s);
  const f = (e.__panoSurfacePlayback ? f2(e.__panoSurfacePlayback) : BP(e, ["pano_input_videos"], () => {
    var H, J;
    return (J = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : J.call(H);
  })) || XP(
    e,
    ki,
    () => {
      var H, J;
      return (J = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : J.call(H);
    },
    { preserveReadyWhilePending: !1 }
  ), h = Jl(f);
  let g = null;
  const _ = (H, J) => {
    g || (g = Xm(e, i, f));
    const de = n.render({ width: H.w, height: H.h, camera: J, ...g });
    return de && c.drawImage(de.canvas, de.x, de.y, de.width, de.height, H.x, H.y, H.w, H.h), !!de;
  };
  if (r === "cutout") {
    const H = ZP(i), J = s2(f), de = H ? Ie(wi(H).aspect, 0.1, 10) : h ? Ie(Number(J.width / J.height), 0.05, 20) : 1, xe = Cf(p, de);
    e.__panoCutoutNodeFrame = xe;
    let _e = "none";
    const he = String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "");
    if (H)
      if (f && !h)
        _e = "loading";
      else if (h) {
        const te = _N({ width: a, height: s }, xe, H);
        [
          !te.fallback || _(te.fallback.rect, Ua(te.fallback.shot)),
          _(te.rect, Ua(te.shot)),
          !te.fallback || _(xe, Ua(H))
        ].every(Boolean) || (_e = "loading");
      } else
        _e = "empty";
    else {
      const te = e.__panoLastCutoutShot;
      te ? (e.__panoPreviewView = tb(te, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), h ? _(p, Gl(e.__panoPreviewView, a, s)) || (_e = "loading") : f ? _e = "loading" : _e = "empty";
    }
    h || n.release(), n.failed && _e === "loading" && (_e = "none"), H && (e.__panoLastCutoutShot = { ...H }, c.save(), c.fillStyle = "rgba(0,0,0,0.58)", c.beginPath(), c.rect(0, 0, a, s), c.rect(xe.x, xe.y, xe.w, xe.h), c.fill("evenodd"), c.restore(), c.save(), c.strokeStyle = "rgba(255,221,87,0.72)", c.lineWidth = 2, c.strokeRect(xe.x + 0.5, xe.y + 0.5, Math.max(0, xe.w - 1), Math.max(0, xe.h - 1)), c.restore()), _e === "loading" ? (Pu(e, !1), qs(e, !0, he)) : _e === "empty" ? (Pu(e, !0), qs(e, !1, "")) : (Pu(e, !1), qs(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let v = !1;
  (!f || h) && (g = Xm(e, i, f), !g.background && !g.layers.length ? (n.release(), v = !0) : v = _(p, Gl(e.__panoPreviewView, a, s)));
  const S = !v && !n.failed;
  qs(e, S, S ? String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "") : ""), S && JP(c, p, Ym(t, p));
  const M = Nd(e, a, s);
  !f && v && h2(c, M, Ym(t, p));
  const C = String(((I = i == null ? void 0 : i.active) == null ? void 0 : I.selected_sticker_id) || ""), W = gd(i, Zl(e)), V = v ? W.find((H) => String((H == null ? void 0 : H.id) || "") === C && (H == null ? void 0 : H.visible) !== !1) : null;
  v && W.filter((H) => H !== V && (H == null ? void 0 : H.visible) !== !1 && (H.external || H.source_kind === "external_image")).filter((H) => !Jl(cs(e, H.id, null, { external: !0 }))).forEach((H) => l2(c, H, M)), V && c2(c, V, M);
}
function qm(e, t, n, r, i = 1) {
  let o = !1;
  e.strokeStyle = r, e.lineWidth = i, e.beginPath();
  for (const a of t) {
    const s = n.project(a);
    if (s.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), o = !0);
  }
  e.stroke();
}
function h2(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const c = [];
    for (let p = -180; p <= 180; p += 4) c.push(jn(p, s));
    qm(e, c, t, s === 0 ? i : r, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const c = [];
    for (let p = -89; p <= 89; p += 4) c.push(jn(s, p));
    qm(e, c, t, r, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: jn(0, 0) },
    { name: "Right", dir: jn(90, 0) },
    { name: "Back", dir: jn(180, 0) },
    { name: "Left", dir: jn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * n));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const c = t.project(s.dir);
    c.z > 1e-4 && e.fillText(s.name, c.x, c.y + 24 * n);
  }), e.restore();
}
function Pd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function m2(e, t, n = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function rr(e, t) {
  return m2(e, t) ? !1 : (Pd(e), !0);
}
function Jm() {
  var n;
  const e = (n = Xt == null ? void 0 : Xt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function g2(e) {
  var n;
  if (!e) return;
  const t = (n = Xt == null ? void 0 : Xt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function y2(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !hb(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function b2(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Zm(e, t = null, n = 0, r = 0, i = !0) {
  const o = Math.max(0, Number(r || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(n || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(n || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), i && v2(e, 180, t);
    }
  };
}
function v2(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function La(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const _2 = /* @__PURE__ */ new WeakMap();
function Sb(e, t) {
  return Fy(_2, e, t) ? !1 : (KP(e, t), vb(e), La(e), !0);
}
async function S2(e) {
  var n, r;
  const t = await JM(e, Xt, en);
  t && (Sb(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function w2(e, t = {}) {
  var He;
  const n = t.__allowStandalone === !0, r = mb(e);
  if (r && !n) {
    Rf(e);
    return;
  }
  r && y2(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: Bm(e)
  }, s = "dom", c = a.signature || Bm(e);
  if (Number(e.__panoRebindGeneration || 0), kd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, xd(e), e.__panoFrontendSig = c, e.__panoStickersPath = s, (He = e.__panoDomPreview) != null && He.widget || (e.__panoLegacyPreviewHooked && bl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const p = t.noPreview === !0, f = p ? 0 : 56, h = p ? 0 : gN, g = document.createElement("div");
  if (IP(), g.className = "pano-node-preview-dom", g.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
    "width:100%",
    p ? "height:auto" : "height:100%",
    h > 0 ? `min-height:${h}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), p) {
    const F = Yl(Sd(
      e.addDOMWidget(wd(), "preview", g, Zm(e, null))
    ));
    La(e), e.__panoDomPreview = { widget: F, root: g, requestDraw: () => {
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
  const v = Mn({ label: "node.surface" });
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
  ].join(";"), S.textContent = "Connect ERP image", _.appendChild(v), _.appendChild(S), g.appendChild(_);
  const M = P0(g), C = document.createElement("div");
  C && (C.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", C.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(C)), EP(e, 120, 120), La(e);
  let W = null;
  try {
    b2(e, f, () => {
      var F, be;
      return (be = (F = e.__panoDomPreview) == null ? void 0 : F.requestDraw) == null ? void 0 : be.call(F);
    }), W = Yl(Sd(e.addDOMWidget(
      wd(),
      "preview",
      g,
      Zm(
        e,
        () => {
          var F, be;
          return (be = (F = e.__panoDomPreview) == null ? void 0 : F.requestDraw) == null ? void 0 : be.call(F);
        },
        f,
        h,
        !1
      )
    )));
  } catch {
    return;
  }
  const V = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, $ = () => {
    V.destroyed || (V.needsDraw = !0, !V.inTick && !V.raf && (V.raf = requestAnimationFrame(Ne)));
  }, y = Ny($), j = /* @__PURE__ */ Qo(i ? { ...Xy(Ln(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Qy(Ln(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((F) => ({ value: F, label: F }))
  });
  let G = null;
  if (i && e.__panoSceneStateV2) {
    const [F, be] = [0, 1].map(() => {
      const We = hc(document, "node.playback");
      return We.playsInline = !0, We.preload = "auto", We.crossOrigin = "anonymous", We.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", _.appendChild(We), We;
    }), ge = Mn({ label: "node.still" });
    ge.__panoFrameIdx = 0;
    const Re = Mn({ label: "node.port-still" });
    Re.__panoFrameIdx = 0;
    const Ke = hN({
      video: F,
      stickerVideo: be,
      createImage: (We, qe) => {
        const nt = new Image();
        return nt.onload = qe, nt.onerror = qe, nt.src = We, nt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (We) => requestAnimationFrame(We),
        cancelFrame: (We) => cancelAnimationFrame(We)
      },
      readState: () => Ln(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: $,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var qe;
        if (!(F.videoWidth > 0 && F.videoHeight > 0)) return;
        const We = Math.min(1, AP / F.videoWidth);
        ge.width = Math.round(F.videoWidth * We), ge.height = Math.round(F.videoHeight * We), (qe = ge.getContext("2d")) == null || qe.drawImage(F, 0, 0, ge.width, ge.height), ge.__panoFrameIdx += 1, $();
      },
      onStickerCapture: () => {
        var We;
        be.videoWidth > 0 && be.videoHeight > 0 && (Re.width = be.videoWidth, Re.height = be.videoHeight, (We = Re.getContext("2d")) == null || We.drawImage(be, 0, 0), Re.__panoFrameIdx += 1, $());
      },
      onChange: () => {
        j.playing = Ke.playing, $();
      }
    });
    G = { playback: Ke, video: F, still: ge, stickerVideo: be, stickerStill: Re, stickerSource: "" }, e.__panoSurfacePlayback = G;
  }
  const re = () => {
    var nt;
    const { playback: F, still: be, stickerStill: ge } = G, Re = bd(_, !!((nt = e.flags) != null && nt.collapsed)), Ke = F.source, We = Re ? d2(e) : null, qe = F.follow({
      shown: Re,
      sources: Re ? u2(e) : [],
      state: Ln(e),
      sticker: We
    });
    ((We == null ? void 0 : We.src) || "") !== G.stickerSource && (G.stickerSource = (We == null ? void 0 : We.src) || "", qu(ge)), F.source !== Ke && (qu(be), be.__panoFrameIdx = 0), j.playable = qe, j.playing = F.playing;
  }, se = () => {
    var be, ge;
    const F = ((be = e.__panoOwnOutputVideoCache) == null ? void 0 : be.player) ?? null;
    F && !bd(_, !!((ge = e.flags) != null && ge.collapsed)) && F.pause(), i && (j.playable = !!F && !F.failed(), j.playing = !!(F != null && F.playing));
  }, I = () => {
    var F;
    G == null || G.playback.pause(), (F = e.__panoOwnOutputVideoCache) == null || F.player.pause();
  };
  let H = null;
  const J = (i ? fN : wN)({
    readState: () => Ln(e),
    publishLiveState: (F) => {
      F ? (H = F, e.__panoLiveStateOverride = F) : (e.__panoLiveStateOverride === H && (e.__panoLiveStateOverride = null), H = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, $();
    },
    commitState: (F) => {
      var Re, Ke, We, qe;
      const be = Ho(e, "state_json");
      if (!be) return;
      ly(e, F.active);
      const ge = uy(e, F);
      dy(e, ge, String(be.value ?? "")) || (be.value = ge, (Re = be.callback) == null || Re.call(be, ge), e.__panoStateCache = null, (Ke = e.setDirtyCanvas) == null || Ke.call(e, !0, !0), (qe = (We = e.graph) == null ? void 0 : We.setDirtyCanvas) == null || qe.call(We, !0, !0));
    },
    onChange: (F) => Object.assign(j, F)
  }), xe = i ? ub(e, (F = "sync", be = null) => {
    var pn;
    if (!i || !e.graph || !J || J.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const rn = gn(e, "external-sticker"), Mi = Ln(e).stickers.find((Ni) => Ni.source.kind === "port");
      return J.apply({
        type: "sync-port",
        value: Uy(e, {
          pose: rn ? Xa(e, "pano_sticker_input_pose", be) : null,
          image: Mi ? cs(e, Mi.id, null, { external: !0 }) : null
        })
      });
    }
    const ge = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((rn) => String((rn == null ? void 0 : rn.name) || "") === "sticker_image") : -1, Re = ge >= 0 ? ((pn = e.getInputLink(ge)) == null ? void 0 : pn.id) ?? null : null;
    if (Re == null)
      return J.apply({ type: "sync-external", value: { connected: !1 } });
    if (!gn(e, "external-sticker")) return !1;
    const Ke = Xa(e, "pano_sticker_input_pose", be), We = Array.isArray(Ke) ? Ke[0] : Ke, qe = String(Xa(e, "pano_sticker_input_state_hash", be) ?? ""), nt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Et = Ln(e), ht = (Array.isArray(Et == null ? void 0 : Et.stickers) ? Et.stickers : []).find((rn) => String((rn == null ? void 0 : rn.id) || "") === "sticker_image_1"), St = cs(e, "sticker_image_1", null, { external: !0 }), Wt = We && typeof We == "object" ? We : ht || { yaw_deg: nt.yaw, pitch_deg: nt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return J.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Re,
        stateHash: qe,
        pose: Wt,
        imageWidth: Number((St == null ? void 0 : St.naturalWidth) || (St == null ? void 0 : St.width) || 0),
        imageHeight: Number((St == null ? void 0 : St.naturalHeight) || (St == null ? void 0 : St.height) || 0)
      }
    });
  }) : () => {
  };
  let _e = 0;
  const he = async (F) => {
    if (!i || !J || !br(F)) return !1;
    I();
    const be = `asset_${Math.random().toString(16).slice(2, 10)}`, ge = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    _e += 1, j.importing = !0;
    const Ke = Fa(e, `add:${be}`, async () => {
      const We = await Da(F), qe = await Yi(F, {
        fetchApi: (nt, Et) => en.fetchApi(nt, Et)
      });
      return ze(), J.apply({
        type: "add-sticker",
        value: {
          stickerId: ge,
          assetId: be,
          asset: qe,
          imageWidth: We.width,
          imageHeight: We.height,
          yaw_deg: Number(Re.yaw || 0),
          pitch_deg: Number(Re.pitch || 0)
        }
      });
    });
    try {
      return await Ke;
    } catch {
      return !1;
    } finally {
      _e = Math.max(0, _e - 1), j.importing = _e > 0, $();
    }
  };
  let te = null, R = null, O = null, ue = !1;
  const Me = () => {
    var F;
    return O && (clearTimeout(O), O = null), ue ? (ue = !1, ((F = J == null ? void 0 : J.commitGesture) == null ? void 0 : F.call(J)) ?? !1) : !1;
  }, ze = () => {
    var Re, Ke, We;
    const F = Me(), be = (te == null ? void 0 : te.pointerId) ?? (R == null ? void 0 : R.pointerId);
    if (te = null, R = null, be != null) {
      try {
        (Re = v.hasPointerCapture) != null && Re.call(v, be) && ((Ke = v.releasePointerCapture) == null || Ke.call(v, be));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const ge = ((We = J == null ? void 0 : J.commitGesture) == null ? void 0 : We.call(J)) ?? !1;
    return F || ge;
  }, Xe = () => {
    var Re, Ke, We;
    const F = Me(), be = te == null ? void 0 : te.pointerId;
    if (te = null, be != null) {
      try {
        (Re = v.hasPointerCapture) != null && Re.call(v, be) && ((Ke = v.releasePointerCapture) == null || Ke.call(v, be));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const ge = ((We = J == null ? void 0 : J.cancelGesture) == null ? void 0 : We.call(J)) ?? !1;
    return F || ge;
  }, ce = () => ze();
  J && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ce));
  let z = null, w = !1;
  if (C && J)
    try {
      Tf(), z = Yd(i ? YN : zN, {
        model: j,
        onAction: (F) => {
          var Re, Ke, We;
          if ((F == null ? void 0 : F.type) === "toggle-playback") {
            ze(), G ? G.playback.toggle() : (Re = e.__panoOwnOutputVideoCache) == null || Re.player.toggle(), $();
            return;
          }
          if (I(), (F == null ? void 0 : F.type) === "open-editor") {
            ze(), i || (j.aspectOpen = !1), (Ke = e.__panoOpenEditor) == null || Ke.call(e);
            return;
          }
          if (i) {
            if ((F == null ? void 0 : F.type) === "add-image-file") {
              he(F.file);
              return;
            }
            J.apply(F) && $();
            return;
          }
          if ((F == null ? void 0 : F.type) === "toggle-aspect") {
            j.aspectOpen = !j.aspectOpen;
            return;
          }
          if ((F == null ? void 0 : F.type) === "close-aspect") {
            j.aspectOpen = !1;
            return;
          }
          let be = F;
          if ((F == null ? void 0 : F.type) === "add-frame") {
            const qe = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            be = {
              ...F,
              ...bN(qe, {
                width: v.width,
                height: v.height
              })
            };
          } else if ((F == null ? void 0 : F.type) === "delete-frame") {
            const qe = io(Ln(e));
            qe && (e.__panoPreviewView = tb(qe, {
              width: v.width,
              height: v.height
            }));
          }
          const ge = ((We = e.__panoCutoutNodeFrame) == null ? void 0 : We.safeRect) || null;
          j.aspectOpen = !1, J.apply({ ...be, safeRect: ge }) && $();
        }
      }), z.mount(C), w = !0;
    } catch {
      z = null, w = !1;
    }
  const pe = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    G && re(), $();
  }) : null;
  pe == null || pe.observe(_);
  const Ne = (F) => {
    var ge, Re;
    V.raf = 0, V.inTick = !0;
    let be = !1;
    try {
      be = De.stepInertia(F), (V.needsDraw || be) && (V.needsDraw = !1, G ? re() : se(), (ge = e.flags) != null && ge.collapsed || p2(e, v, y), j.viewUnavailable = y.failed);
    } finally {
      V.inTick = !1;
    }
    (be || V.needsDraw) && !V.raf && (V.raf = requestAnimationFrame(Ne)), CP() && (!e.__panoDebugLastTs || F - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = F, e.__panoPreviewMode, xd(e), Ca(g), Ca(_), Ca(v), Ca(g.parentElement), Ca((Re = g.parentElement) == null ? void 0 : Re.parentElement), Number(v.width || 0), Number(v.height || 0), void 0);
  }, De = ef({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (F) => {
      e.__panoPreviewView = F;
    },
    getViewportSize: () => {
      const F = v.getBoundingClientRect();
      return {
        w: Math.max(1, Number(F.width || v.clientWidth || 0)),
        h: Math.max(1, Number(F.height || v.clientHeight || 0))
      };
    },
    getInvert: () => {
      const F = Km();
      return {
        x: F.invert_view_x ? -1 : 1,
        y: F.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      $();
    }
  }), oe = i ? _ : g, Pe = (F) => {
    const be = v.getBoundingClientRect();
    return {
      x: (Number(F.clientX) - be.left) * (v.width / Math.max(1, be.width)),
      y: (Number(F.clientY) - be.top) * (v.height / Math.max(1, be.height))
    };
  }, P = (F) => {
    var Re, Ke;
    if (!i || !o) return;
    const be = Ln(e), ge = zm(
      gd(be, Zl(e)),
      String(((Re = be == null ? void 0 : be.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      Pe(F),
      Nd(e, v.width, v.height)
    );
    if (!ge) {
      v.style.cursor = "grab";
      return;
    }
    if (((Ke = ge.item) == null ? void 0 : Ke.locked) === !0) {
      v.style.cursor = "default";
      return;
    }
    v.style.cursor = ge.hit.cursor || "default";
  };
  v.addEventListener("pointerdown", (F) => {
    var nt, Et, ht, St, Wt, Ot, pn, rn, Mi, Ni, ia;
    if (!rr(F, oe) || F.button !== 0) return;
    if (!i) {
      const Pn = io(Ln(e)), fr = e.__panoCutoutNodeFrame;
      if (!Pn) {
        (nt = g.focus) == null || nt.call(g, { preventScroll: !0 }), (Et = v.setPointerCapture) == null || Et.call(v, F.pointerId), v.style.cursor = "grabbing", De.startDrag(F.clientX, F.clientY, F.pointerId);
        return;
      }
      if (Pn.locked === !0 || !fr || !J) return;
      const oa = Pe(F);
      let aa;
      if (F.shiftKey) {
        const Pi = rb({
          frame: fr,
          point: oa,
          startRollDeg: Number(Pn.roll_deg ?? Pn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Pi) return;
        aa = { kind: "roll", pointerId: F.pointerId, rollGesture: Pi };
      } else {
        const Pi = ((ht = Ln(e)) == null ? void 0 : ht.ui_settings) || Km();
        aa = {
          kind: "pan",
          pointerId: F.pointerId,
          startPoint: oa,
          startShot: { ...Pn },
          focalPx: no(fr, Pn),
          invertX: Pi.invert_view_x === !0,
          invertY: Pi.invert_view_y === !0
        };
      }
      ze(), (St = g.focus) == null || St.call(g, { preventScroll: !0 }), (Wt = v.setPointerCapture) == null || Wt.call(v, F.pointerId), v.style.cursor = "grabbing", J.beginGesture(), te = aa;
      return;
    }
    if (!o) return;
    const be = Pe(F), ge = Ln(e), Re = String(((Ot = ge == null ? void 0 : ge.active) == null ? void 0 : Ot.selected_sticker_id) || ""), Ke = Nd(e, v.width, v.height);
    (pn = g.focus) == null || pn.call(g, { preventScroll: !0 });
    const We = () => zm(gd(ge, Zl(e)), Re, be, Ke);
    let qe = We();
    if (qe && (G != null && G.playback.playing) && (I(), qe = We()), qe && J) {
      if (De.stopMotion(), ze(), String(((rn = qe.item) == null ? void 0 : rn.id) || "") !== Re && J.apply({ type: "select-sticker", id: qe.item.id }), ((Mi = qe.item) == null ? void 0 : Mi.locked) === !0) {
        $();
        return;
      }
      const Pn = be, fr = qe.geometry.center;
      R = {
        active: !0,
        kind: qe.hit.kind,
        pointerId: F.pointerId,
        startPoint: Pn,
        startCenter: { ...fr },
        startSticker: { ...qe.item },
        startDistance: Math.max(1, Math.hypot(Pn.x - fr.x, Pn.y - fr.y)),
        startAngle: Math.atan2(Pn.y - fr.y, Pn.x - fr.x),
        projection: Ke
      }, J.beginGesture(), (Ni = v.setPointerCapture) == null || Ni.call(v, F.pointerId), v.style.cursor = qe.hit.kind === "rotate" ? "grabbing" : qe.hit.kind === "move" ? "move" : qe.hit.cursor, $();
      return;
    }
    (ia = v.setPointerCapture) == null || ia.call(v, F.pointerId), v.style.cursor = "grabbing", De.startDrag(F.clientX, F.clientY, F.pointerId);
  }), v.addEventListener("pointermove", (F) => {
    if (!i) {
      if (!te) {
        if (!De.state.drag.active) return;
        rr(F, oe), De.moveDrag(F.clientX, F.clientY, "pano");
        return;
      }
      if (te.pointerId !== F.pointerId || !J) return;
      if (rr(F, oe), te.kind === "pan") {
        const ge = Pe(F);
        J.updateGesture({
          type: "pan-camera",
          startShot: te.startShot,
          dx: ge.x - te.startPoint.x,
          dy: ge.y - te.startPoint.y,
          focalPx: te.focalPx,
          invertX: te.invertX,
          invertY: te.invertY
        });
        return;
      }
      const be = ib(te.rollGesture, Pe(F), F);
      if (!be) return;
      te.rollGesture = be.gesture, J.updateGesture({ type: "set-roll", value: be.rollDeg });
      return;
    }
    if (!R && !De.state.drag.active) {
      P(F);
      return;
    }
    if (R) {
      if (R.pointerId !== F.pointerId || !J) return;
      rr(F, oe);
      const be = Pe(F);
      let ge = R.startSticker;
      if (R.kind === "move")
        ge = ZN(
          R.startSticker,
          {
            x: R.startCenter.x + be.x - R.startPoint.x,
            y: R.startCenter.y + be.y - R.startPoint.y
          },
          R.projection
        );
      else if (R.kind === "scale") {
        const Re = Math.hypot(be.x - R.startCenter.x, be.y - R.startCenter.y);
        ge = QN(R.startSticker, R.startDistance, Re);
      } else if (R.kind === "rotate") {
        const Re = Math.atan2(be.y - R.startCenter.y, be.x - R.startCenter.x);
        ge = eP(R.startSticker, R.startAngle, Re, F.shiftKey === !0);
      }
      J.updateGesture({ type: "set-transform", value: ge }), $();
      return;
    }
    !o || !De.state.drag.active || (rr(F, oe), De.moveDrag(F.clientX, F.clientY, "pano"));
  });
  const D = () => {
    var be, ge;
    if (!te && !R) {
      if (!De.state.drag.active) return;
      De.endDrag(), v.style.cursor = "grab", $();
      return;
    }
    if (!J) return;
    const F = (te == null ? void 0 : te.pointerId) ?? (R == null ? void 0 : R.pointerId);
    te = null, R = null;
    try {
      (be = v.hasPointerCapture) != null && be.call(v, F) && ((ge = v.releasePointerCapture) == null || ge.call(v, F));
    } catch {
    }
    J.cancelGesture(), v.style.cursor = "grab", $();
  }, Y = (F, be = !1) => {
    var ge, Re, Ke, We;
    if (!i) {
      if (!te) {
        if (!De.state.drag.active) return;
        rr(F, oe), (ge = v.releasePointerCapture) == null || ge.call(v, F.pointerId), v.style.cursor = "grab", De.endDrag(), $();
        return;
      }
      if (te.pointerId !== F.pointerId || !J) return;
      rr(F, oe), te = null, (Re = v.releasePointerCapture) == null || Re.call(v, F.pointerId), v.style.cursor = "grab", be ? J.cancelGesture() : J.commitGesture(), P(F), $();
      return;
    }
    if (R) {
      if (R.pointerId !== F.pointerId || !J) return;
      rr(F, oe), R = null, (Ke = v.releasePointerCapture) == null || Ke.call(v, F.pointerId), v.style.cursor = "grab", be ? J.cancelGesture() : J.commitGesture(), $();
      return;
    }
    !o || !De.state.drag.active || (rr(F, oe), (We = v.releasePointerCapture) == null || We.call(v, F.pointerId), v.style.cursor = "grab", De.endDrag(), $());
  };
  v.addEventListener("pointerup", Y), v.addEventListener("pointercancel", (F) => Y(F, !0)), v.addEventListener("lostpointercapture", D), v.addEventListener("pointerleave", (F) => {
    !i && te || R || De.state.drag.active && Y(F);
  });
  const fe = (F) => {
    const be = document.activeElement;
    if (be !== g && !g.contains(be)) return;
    if (F.key === "Escape" && (te || R) && J) {
      D(), Pd(F);
      return;
    }
    if (!i || F.key !== "Delete" && F.key !== "Backspace" || !J) return;
    const ge = F.target, Re = String((ge == null ? void 0 : ge.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || ge != null && ge.isContentEditable || j.canDelete === !0 && (I(), ze(), J.apply({ type: "delete-selected" }) && $(), Pd(F));
  };
  window.addEventListener("keydown", fe, !0);
  const L = kP({
    requestFrame: (F) => requestAnimationFrame(F),
    cancelFrame: (F) => cancelAnimationFrame(F),
    restore: (F) => g2(F)
  }), Z = (F) => {
    var ge, Re, Ke, We, qe, nt;
    if (!rr(F, oe)) return;
    if (!i) {
      const Et = io(Ln(e));
      if (Et && Et.locked !== !0 && J) {
        const ht = Ol(F);
        ht !== 0 && (ue || (ze(), J.beginGesture(), ue = !0), J.updateGesture({
          type: "step-fov",
          direction: ht
        }) ? (O && clearTimeout(O), O = setTimeout(Me, 180), $()) : J.hasGestureChanges() || (J.cancelGesture(), ue = !1));
      } else if (!Et) {
        const ht = Jm();
        De.applyWheelEvent(F) && $(), L.schedule(ht);
      }
      (ge = F.preventDefault) == null || ge.call(F), (Re = F.stopPropagation) == null || Re.call(F), (Ke = F.stopImmediatePropagation) == null || Ke.call(F);
      return;
    }
    if (!o) return;
    const be = Jm();
    De.applyWheelEvent(F) && $(), (We = F.preventDefault) == null || We.call(F), (qe = F.stopPropagation) == null || qe.call(F), (nt = F.stopImmediatePropagation) == null || nt.call(F), L.schedule(be);
  }, ae = i ? [_, v] : [_];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((F) => {
    ae.forEach((be) => be.addEventListener(F, Z, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((F) => {
    v.addEventListener(F, (be) => rr(be, oe)), _.addEventListener(F, (be) => rr(be, oe));
  });
  const T = Ho(e, "state_json");
  let B = null, U = null;
  T && !T.__panoPreviewPatchedCb && (B = T.callback, U = (F) => {
    const be = B ? B(F) : void 0;
    return $(), be;
  }, T.callback = U, T.__panoPreviewPatchedCb = U);
  const Q = Ho(e, "bg_color");
  let ie = null, Se = null;
  Q && !Q.__panoPreviewPatchedCb && (ie = Q.callback, Se = (F) => {
    const be = ie ? ie(F) : void 0;
    return $(), be;
  }, Q.callback = Se, Q.__panoPreviewPatchedCb = Se);
  const we = e.onRemoved, Ae = e.onResize, Fe = e.onExecuted, Ye = e.onDragOver, Le = e.onDragDrop;
  let je = null;
  const tt = () => {
    i && (j.dropActive = !0, je && clearTimeout(je), je = setTimeout(() => {
      je = null, j.dropActive = !1;
    }, 140));
  }, k = i ? function(F) {
    return (Ye ? Ye.apply(this, arguments) : !1) === !0 ? !0 : Df(F == null ? void 0 : F.dataTransfer) ? (tt(), !0) : !1;
  } : null, q = i ? function(F) {
    var Re;
    if ((Le ? Le.apply(this, arguments) : !1) === !0) return !0;
    const ge = Array.from(((Re = F == null ? void 0 : F.dataTransfer) == null ? void 0 : Re.files) || []).find((Ke) => br(Ke));
    return ge ? (je && clearTimeout(je), je = null, j.dropActive = !1, he(ge), !0) : !1;
  } : null;
  i && (e.onDragOver = k, e.onDragDrop = q);
  const u = i ? xP(g, {
    onActive: (F) => {
      if (F) {
        tt();
        return;
      }
      je && clearTimeout(je), je = null, j.dropActive = !1;
    },
    onDrop: (F) => {
      he(F);
    }
  }) : () => {
  }, ne = function(F) {
    e.__panoOutputFromRun = !0;
    const be = Sb(e, F);
    oi(e, be ? "executed" : "sync", F), $();
    const ge = Fe ? Fe.apply(this, arguments) : void 0;
    return La(e), ge;
  };
  e.onExecuted = ne;
  const A = e.onConnectionsChange, ee = function(F, be) {
    const ge = Am(e, F, be, xf), Re = Am(e, F, be, ki), Ke = arguments, We = A ? A.apply(this, Ke) : void 0, qe = () => {
      V.destroyed || (Re && qP(e), ge && oi(e, "connection-change"), La(e), $());
    };
    return qe(), queueMicrotask(qe), We;
  };
  e.onConnectionsChange = ee;
  const ke = function() {
    const F = Ae ? Ae.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, $(), F;
  };
  e.onResize = ke;
  const me = function() {
    return $e(), Md.unregister(this), we ? we.apply(this, arguments) : void 0;
  };
  e.onRemoved = me;
  const $e = () => {
    var F, be, ge, Re, Ke, We, qe, nt, Et;
    V.destroyed = !0, (F = pe == null ? void 0 : pe.disconnect) == null || F.call(pe), i ? ze() : Xe(), v.removeEventListener("lostpointercapture", D), u(), M(), window.removeEventListener("keydown", fe, !0), (ge = (be = e.__panoStateFlushers) == null ? void 0 : be.delete) == null || ge.call(be, ce), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Re = J == null ? void 0 : J.destroy) == null || Re.call(J), (Ke = z == null ? void 0 : z.unmount) == null || Ke.call(z), G && (G.playback.dispose(), G.video.remove(), G.stickerVideo.remove(), e.__panoSurfacePlayback === G && (e.__panoSurfacePlayback = null)), y.dispose(), e.__panoSurfaceScene = null, (qe = (We = e.__panoRasterObjectSurfaceCache) == null ? void 0 : We.dispose) == null || qe.call(We), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, xe(), L.dispose(), je && clearTimeout(je), je = null, Lf.disposeOwner(e), Go(e), V.raf && cancelAnimationFrame(V.raf), V.raf = 0, ((nt = e.__panoCutoutNodeSurface) == null ? void 0 : nt.session) === J && (e.__panoCutoutNodeSurface = null), ((Et = e.__panoStickersNodeSurface) == null ? void 0 : Et.session) === J && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ke && (e.onResize = Ae), e.onExecuted === ne && (e.onExecuted = Fe), e.onConnectionsChange === ee && (e.onConnectionsChange = A), U && (T == null ? void 0 : T.callback) === U && (T.callback = B), U && (T == null ? void 0 : T.__panoPreviewPatchedCb) === U && delete T.__panoPreviewPatchedCb, Se && (Q == null ? void 0 : Q.callback) === Se && (Q.callback = ie), Se && (Q == null ? void 0 : Q.__panoPreviewPatchedCb) === Se && delete Q.__panoPreviewPatchedCb, e.onDragOver === k && (e.onDragOver = Ye), e.onDragDrop === q && (e.onDragDrop = Le), e.onRemoved === me && (e.onRemoved = we);
  };
  e.__panoDomRestore = $e, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = J && w && !i ? { session: J, model: j } : null, e.__panoStickersNodeSurface = J && w && i ? { session: J, model: j } : null, e.__panoDomPreview = {
    widget: W,
    root: g,
    canvas: v,
    requestDraw: $,
    state: V,
    emptyHintEl: S,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Md.register(e), e.graph && oi(e, "attach"), $();
}
function Qm(e, t = {}) {
  gb(e).attach({
    ...t,
    mode: "cutout"
  });
}
function eg(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (mb(e) && !n) {
    Rf(e);
    return;
  }
  gb(e).attach(t);
}
function x2(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function k2(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), c = Math.max(0, Number.isFinite(a) ? a : 0) * o, p = Math.max(0, Number.isFinite(s) ? s : 0) * o, f = Number(n), h = f > 0 ? f : 1 / 0, g = Math.max(c, p);
  let _ = g > 0 ? Math.min(1, h / g) : 1;
  return r && c > 0 && p > 0 && (_ = Math.min(_, r.width * o / c, r.height * o / p)), {
    width: Math.max(1, Math.round(c * _)),
    height: Math.max(1, Math.round(p * _))
  };
}
function M2({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var _;
  const i = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let a = !1, s = null;
  const c = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, p = () => {
    const v = c();
    return v === s || (s = v, i(v)), v;
  }, f = () => p();
  return (_ = t == null ? void 0 : t.addEventListener) == null || _.call(t, "fullscreenchange", f), p(), { toggle: async () => {
    var v;
    if (a || !e || !t) return !1;
    if (c()) {
      try {
        await ((v = t.exitFullscreen) == null ? void 0 : v.call(t));
      } catch {
      }
      return a ? !1 : (p(), c());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (c())
          return p(), !0;
      } catch {
      }
    return a || (o(), p()), !1;
  }, isActive: c, destroy: () => {
    var v, S, M;
    if (!a) {
      if (a = !0, (v = t == null ? void 0 : t.removeEventListener) == null || v.call(t, "fullscreenchange", f), c())
        try {
          const C = (S = t.exitFullscreen) == null ? void 0 : S.call(t);
          (M = C == null ? void 0 : C.catch) == null || M.call(C, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const N2 = { class: "pano-preview-node-surface" }, P2 = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Te(), Ve("div", N2, [
      et(un, {
        icon: e.model.fullscreen ? ft(Ue).fullscreen_close : ft(Ue).fullscreen,
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
      e.model.viewUnavailable ? (Te(), cr(If, { key: 0 })) : kt("", !0)
    ]));
  }
}, Js = 140, A2 = 180, tg = 40, Au = 10;
function ng(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function rg(e, t) {
  const n = ng(e), r = ng(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ig(e) {
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
  return typeof ((o = en) == null ? void 0 : o.apiURL) == "function" ? en.apiURL(i) : i;
}
function Wo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Wo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return ig({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Wo(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ig(e);
}
function wb(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function C2(e) {
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
function Ad(e) {
  var i;
  const t = (i = qn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (rg(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (rg(o, n)) return t[o];
  return null;
}
function I2(e) {
  var r, i;
  const t = Ad(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Wo(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function E2(e, t = "erp_image") {
  var _, v, S, M, C, W, V;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex(($) => String(($ == null ? void 0 : $.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex(($, y) => String(($ == null ? void 0 : $.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(y))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (S = (v = (_ = qn) == null ? void 0 : _.graph) == null ? void 0 : v.getNodeById) == null ? void 0 : S.call(v, o), s = Ad(o), c = Ad(e == null ? void 0 : e.id), p = [
    (M = c == null ? void 0 : c.ui) == null ? void 0 : M.pano_input_images,
    c == null ? void 0 : c.pano_input_images,
    s == null ? void 0 : s.images,
    (C = s == null ? void 0 : s.ui) == null ? void 0 : C.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const $ of p)
    if (Array.isArray($))
      for (const y of $) {
        const j = Wo(y);
        if (j) return j;
      }
  let f = [];
  try {
    f = typeof ((W = qn) == null ? void 0 : W.getNodeImageUrls) == "function" ? qn.getNodeImageUrls(a) || [] : [];
  } catch {
    f = [];
  }
  if (Array.isArray(f) && f.length > 0)
    for (const $ of f) {
      const y = Wo($);
      if (y) return y;
    }
  if (a) {
    const $ = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const y of $) {
      const j = Wo(y);
      if (j) return j;
    }
  }
  const h = (V = a == null ? void 0 : a.widgets) == null ? void 0 : V.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image"), g = String((h == null ? void 0 : h.value) || "").trim();
  return g ? en.apiURL(`/view?filename=${encodeURIComponent(g)}&type=input&subfolder=`) : "";
}
function Cu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function og(e, t, n, r, i, o, a) {
  var p, f, h;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !wb(o) || n <= 1 || r <= 1) {
    Cu(t, n, r);
    return;
  }
  if (a.failed) {
    Cu(t, n, r);
    return;
  }
  const s = Number(((h = (f = (p = e == null ? void 0 : e.widgets) == null ? void 0 : p.find) == null ? void 0 : f.call(p, (g) => (g == null ? void 0 : g.name) === "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, c = a.render({
    width: n,
    height: r,
    camera: Gl(i, n, r),
    background: { media: o, revision: C2(o), coverage: s },
    layers: []
  });
  c ? t.drawImage(c.canvas, c.x, c.y, c.width, c.height, 0, 0, n, r) : Cu(t, n, r);
}
function ag(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class O2 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Ny(() => this.requestDraw()), this.controller = ef({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Bt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Ie(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Ie(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, a, s;
        const r = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((a = this.canvas) == null ? void 0 : a.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((s = this.canvas) == null ? void 0 : s.clientHeight) || 0))
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
    const n = ((o = (i = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (a) => (a == null ? void 0 : a.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...a) => {
      const s = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...a) : void 0;
      return t.requestDraw(), s;
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
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${Js}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = Mn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Js;
        },
        getHeight() {
          return Js;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Yl(Sd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Js, Number(o.minHeight || 0)),
            minWidth: Math.max(A2, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, i, o, a;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Tf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Qo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = M2({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, c;
          return (c = (s = this.options).onOpen) == null ? void 0 : c.call(s, this.node);
        }
      }), this.surfaceApp = Yd(P2, {
        model: this.surfaceModel,
        onAction: (s) => {
          var c, p;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((p = (c = this.fullscreenController) == null ? void 0 : c.toggle) == null || p.call(c));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var s, c;
          return (c = (s = this.fullscreenController) == null ? void 0 : s.toggle) == null ? void 0 : c.call(s);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = P0(n), t.addEventListener("pointerdown", (o) => {
      var a, s, c;
      o.button === 0 && ((a = n.focus) == null || a.call(n, { preventScroll: !0 }), (s = t.setPointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var a;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
    const r = (o) => {
      var a, s;
      this.controller.state.drag.active && ((a = t.releasePointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var a;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var a;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }), n.addEventListener("keydown", (o) => {
      var a;
      x2(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !wb(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? bd(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = qn.canvas) != null && r.graph) || this.node.graph === qn.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var a;
      const i = t.localPoint(r);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return ag(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var a;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(r);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, i) {
      var c, p, f, h, g, _;
      const o = t2(this, n, r, i), a = t.getLegacyPreviewRect();
      if (!o || !ag(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((c = t.view) == null ? void 0 : c.fov) || 100);
      const s = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((p = t.view) == null ? void 0 : p.fov) || 100), s && ((f = this.setDirtyCanvas) == null || f.call(this, !0, !1)), (h = n == null ? void 0 : n.preventDefault) == null || h.call(n), (g = n == null ? void 0 : n.stopPropagation) == null || g.call(n), (_ = n == null ? void 0 : n.stopImmediatePropagation) == null || _.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, i, o, a;
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - Au * 2), n = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - tg - Au);
    return { x: Au, y: tg, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), og(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? My : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = k2(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = I2(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = hc(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const c = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, p = () => this.requestDraw();
      s.addEventListener("loadedmetadata", c), s.addEventListener("loadeddata", c), s.addEventListener("timeupdate", p), s.addEventListener("play", p), s.addEventListener("pause", p), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", c), s.removeEventListener("loadeddata", c), s.removeEventListener("timeupdate", p), s.removeEventListener("play", p), s.removeEventListener("pause", p), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const n = E2(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), og(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, a, s, c, p, f, h, g, _, v, S, M, C;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (p = (c = this.surfaceApp) == null ? void 0 : c.unmount) == null || p.call(c), this.surfaceApp = null, (h = (f = this.surfaceHost) == null ? void 0 : f.remove) == null || h.call(f), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (g = this.mediaCleanup) == null || g.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (v = (_ = this.root) == null ? void 0 : _.remove) == null || v.call(_);
    } catch {
    }
    try {
      pb(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((C = (M = (S = this.node) == null ? void 0 : S.widgets) == null ? void 0 : M.find) == null ? void 0 : C.call(M, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function T2(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new O2(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function xb(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const s = i ? i.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const s = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
  const a = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const s = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
}
function $f(e) {
  return !!(e != null && e.prototype);
}
function us(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function F2(e, t = {}) {
  $f(e) || T2(e, {
    ...t,
    onOpen: us(e, t.onOpen)
  });
}
function D2(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!$f(e)) {
    eg(e, {
      ...r,
      onOpen: us(e, t.onOpen)
    });
    return;
  }
  xb(e, "stickers_node_preview", (i) => {
    eg(i, {
      ...r,
      onOpen: us(i, t.onOpen)
    });
  });
}
function L2(e, t = {}) {
  if (!$f(e)) {
    Qm(e, {
      ...t,
      onOpen: us(e, t.onOpen)
    });
    return;
  }
  xb(e, "cutout_preview", (n) => {
    Qm(n, {
      ...t,
      onOpen: us(n, t.onOpen)
    });
  });
}
const $n = {
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
}, Jr = "pen";
function sg(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function R2({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [a, s] of Object.entries(n))
      r.delete(a) && s();
  }
  return {
    request(a) {
      r.add(a), i ?? (i = e(o));
    },
    cancel() {
      r.clear(), i !== null && t(i), i = null;
    }
  };
}
const Pt = Object.freeze({
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
}), V2 = new Set(Object.values(Pt));
function $2({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, c = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), f = 1, h = 0;
  function g(S) {
    try {
      S();
    } catch (M) {
      i(M);
    }
  }
  function _() {
    !o && !a && !s && (o = e(v));
  }
  function v(S) {
    o = 0, a = !0;
    try {
      const M = p;
      p = /* @__PURE__ */ new Map();
      for (const W of M.values()) g(() => W(S));
      if (s) return;
      const C = c;
      c = /* @__PURE__ */ new Set(), (C.size || r()) && g(() => n(S, C));
    } finally {
      a = !1;
    }
    (c.size || p.size || r()) && _();
  }
  return {
    requestDraw(S) {
      if (!V2.has(S)) throw new Error(`Unknown draw reason: ${S}`);
      S === Pt.STATE && (h += 1), c.add(S), _();
    },
    requestFrame(S) {
      const M = f++;
      return p.set(M, S), _(), M;
    },
    cancelFrame(S) {
      p.delete(S);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      _();
    },
    get stateRevision() {
      return h;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      s = !0, o && t(o), o = 0, p.clear(), c.clear();
    }
  };
}
const z2 = 250, j2 = 600, H2 = 180, G2 = 2;
function W2(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ra(e, t, n) {
  return e + (t - e) * n;
}
function K2(e, t, n = 1) {
  const r = Math.max(
    Math.abs(Qd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(n, 1e-6), o = Math.min(1, r / H2 + i / G2);
  return Math.round(Ra(z2, j2, o));
}
function B2(e, t, n) {
  const r = W2(Ie(n, 0, 1));
  return {
    position: e.position.map((i, o) => Ra(i, t.position[o], r)),
    yaw_deg: Bt(e.yaw_deg + Qd(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: Ra(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: Ra(e.hFOV_deg, t.hFOV_deg, r),
    distance: Ra(e.distance, t.distance, r)
  };
}
function U2(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(Qd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function Y2(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return U2(e, t) ? null : { from: e, to: t, startTs: n, durationMs: K2(e, t, r), end: i };
}
function X2(e, t) {
  const n = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: B2(e.from, e.to, n), done: !1 };
}
function vl(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function q2(e, t, n) {
  const r = vl(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function No(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function J2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function Z2({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: a,
  getBrushPresetIdForTool: s,
  isActiveLassoTool: c
}) {
  var V, $;
  const p = e.primaryTool === "paint" || e.primaryTool === "mask", f = {
    visible: p,
    activePane: p ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: p ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (y, j) => ({ index: j, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!p) return f;
  const h = ((V = t.find((y) => i(e.paintColor, y.color))) == null ? void 0 : V.id) || "", g = !h, _ = o(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number((($ = e.customPaintColor) == null ? void 0 : $.a) ?? 1))) * 100), S = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), M = e.brushSizes[S] ?? 10, C = c(), W = Array.from({ length: 8 }, (y, j) => e.customPaintHistory[j] || null);
  return {
    ...f,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: h,
    customColorActive: g,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...a(_.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, _.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, _.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, _.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, _.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, _.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, _.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: W.map((y, j) => ({
      index: j,
      color: y ? { cssColor: r(y, 1) } : null
    })),
    sizeValue: M,
    sizeText: String(M),
    sizeFill: `${Math.max(0, Math.min(100, (M - 1) / 119 * 100))}%`,
    sizeDisabled: C,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Q2({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const eA = {
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
function tA(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = eA[n.key] || [], a = t[t.length - 1];
    r && (a != null && a.grouped) && a.label === r ? a.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function Iu(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function nA({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
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
        icon: o ? Ue.eye : Ue.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function rA({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function iA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Ko = "erp", oA = ["1:1", "4:3", "3:2", "16:9"];
function kb(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...oA.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: Ko, label: Number(n) === 180 ? "180°" : "360°", active: e === Ko }] : []
  ];
}
function aA({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
  uiSettings: c,
  normalizeCoverageValue: p
}) {
  return {
    coverage: { value: p(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: tA(a),
    notes: s,
    paramsDisabled: !r,
    uiSettings: t ? null : c,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function sA({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: c,
  cutoutAspectOpen: p,
  isExternalSticker: f,
  isStickerHidden: h,
  canRestoreSelectedToInitial: g,
  iconSet: _,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: v = !1,
  cameraDeletable: S = !1,
  erpChoice: M = !1,
  coverage: C = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let W = [];
  if (n.length > 1)
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: _.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: _.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? _.lock_open : _.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!a }
    ];
  else if (r === "stroke")
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: _.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: _.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? _.lock_open : _.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!s }
    ];
  else if (r === "image") {
    if (W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: _.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: _.send_back, disabled: !!s }
    ], f(t) || (W.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: _.duplicate }), W.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: _.replace_image })), f(t)) {
      const V = g(), $ = h(t);
      W.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: V ? "Back to initial position" : "Already at initial position",
        icon: _.back_initial,
        disabled: !V
      }), W.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: $ ? "Show" : "Hide",
        tip: $ ? "Show input image" : "Hide input image",
        icon: $ ? _.eye : _.eye_dashed
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
        choices: kb(c, { erp: M, coverage: C })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: _.rotate_90, disabled: c === Ko }
    ], v ? S && W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete }) : W.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? _.lock_open : _.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!s }
    );
  return Mb(i.corners, W);
}
const lg = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function lA({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = r ? lg.filter((s) => s.cameraTip) : lg;
  return Mb([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: c, tip: p, cameraTip: f }) => ({ key: s, label: c, tip: r ? f : p, pressed: s === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ue.delete }] : []
  ]);
}
function cA(e, t, n, r, i) {
  const { minX: s, maxX: c, minY: p, maxY: f } = e || {};
  if (![s, c, p, f].every(Number.isFinite)) return null;
  const h = Math.min(Math.max((s + c) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), g = Math.max(14, i - n - 14), _ = f + 18, v = p - 18 - n;
  let S;
  return _ <= g ? S = Math.max(_, 14) : v >= 14 ? S = Math.min(v, g) : S = Math.min(Math.max(_, 14), g), { left: h, top: S };
}
function Mb(e, t) {
  const n = e.map((p) => ({ x: Number(p == null ? void 0 : p.x), y: Number(p == null ? void 0 : p.y) })).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((p) => p.x), i = n.map((p) => p.y), o = Math.min(...r), a = Math.max(...r), s = Math.min(...i), c = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: c + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: c }
  };
}
const Nb = "painting";
function uA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const dA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function fA(e, { span: t, selection: n, selectedId: r, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: c = !1, cameraHideable: p = !1, stickers: f = !0, scene: h = !1, sceneLocked: g = !1 }) {
  const _ = (W, V, $, y, j, G, { keyable: re = !0, hideable: se = !0 } = {}) => {
    const I = (H) => (n == null ? void 0 : n.owner) === W && n.lane === H ? n.frames.map((J) => J + G) : [];
    return {
      id: W,
      label: $,
      icon: y,
      clip: j,
      selected: W === r,
      hideable: se,
      visible: V.visible,
      keyable: re,
      open: re && o.has(W),
      keys: bk(V).map((H) => ({ frame: H.frame + G, full: H.full })),
      selectedFrames: I(null),
      lanes: (re ? na(V) : []).map((H) => ({
        key: `${W}:${H}`,
        lane: H,
        label: dA[H],
        frames: V[H].keyframes.map((J) => J.frame + G),
        selectedFrames: I(H)
      }))
    };
  }, v = f ? e.stickers : [], S = v.filter((W) => W.placement === "sky").sort((W, V) => V.z_index - W.z_index), M = v.filter((W) => W.placement === "world"), C = ({ start: W, in: V, duration: $ }) => ({ clip: { start: W, end: $ === null ? null : W + $ }, offset: W - V });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s || g,
    lengthLocked: g,
    lockTip: g ? "Set by the scene" : "Set by the video input",
    length: g ? t : e.timeline.length,
    rows: [
      ...c ? [_("camera", e.camera, "Camera", Ue.camera, null, 0, { hideable: p })] : [],
      ...[...S, ...M].map((W) => {
        const { clip: V, offset: $ } = C(W.clip);
        return _(W.id, W, ad(W), Ue.image, V, $);
      }),
      ...f && (uA(e.painting) || !e.painting_visible) ? [{
        id: Nb,
        label: "Paint",
        icon: Ue.paintbrush_vertical_tool,
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
      ...f && (h || jl(e.scene)) ? [(() => {
        const { clip: W, offset: V } = C(e.scene.clip);
        return _("scene", e.scene, "Scene", Ue.box, W, V, { keyable: !1 });
      })()] : []
    ]
  };
}
function pA(e, t, n, r) {
  const i = wk(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, a = Math.max(...n) + r;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
const hA = { class: "pano-floating-right" }, mA = {
  key: 0,
  class: "pano-floating-space"
}, gA = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, yA = ["data-settled"], bA = ["data-ready", "data-settled"], vA = ["aria-label", "data-tip"], _A = {
  key: 1,
  class: "pano-camera-preview-label"
}, SA = {
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
    return (t, n) => (Te(), Ve(ct, null, [
      ve("div", hA, [
        e.space ? ii((Te(), Ve("div", mA, [
          ve("div", gA, [
            (Te(!0), Ve(ct, null, Rt(e.space.modes, (r) => (Te(), cr(un, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          et(un, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [oo, e.space.visible]
        ]) : kt("", !0),
        (Te(!0), Ve(ct, null, Rt(e.buttons, (r) => (Te(), cr(un, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      ii(ve("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ve("div", {
          class: xt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: $t({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ve("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            ve("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Te(), Ve("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            et(Yt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, vA)) : kt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), Ve("div", _A, gt(e.preview.label || "Preview unavailable"), 1)) : kt("", !0)
        ], 14, bA)
      ], 8, yA), [
        [oo, e.preview.visible]
      ])
    ], 64));
  }
}, wA = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, xA = ["y2", "transform"], kA = ["transform"], MA = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = vt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => ii((Te(), Ve("div", {
      class: xt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), Ve("svg", wA, [
        o[1] || (o[1] = ve("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), Ve(ct, null, Rt(ft(n), (a) => (Te(), Ve("line", {
          key: a,
          class: xt(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, xA))), 128)),
        ve("g", { transform: r.value }, [...o[0] || (o[0] = [
          ve("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, kA),
        o[2] || (o[2] = ve("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [oo, e.model.visible === !0]
    ]);
  }
}, NA = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Te(), Ve("div", {
      class: xt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      et(ab, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      et(un, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      et(MA, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, PA = ["aria-label"], AA = { class: "pano-canvas-confirm-title" }, CA = { class: "pano-canvas-confirm-text" }, IA = { class: "pano-canvas-confirm-actions" }, EA = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, OA = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ tn(null), r = /* @__PURE__ */ tn(null);
    let i = null;
    function o() {
      const h = r.value;
      return h ? Array.from(h.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((g) => g instanceof HTMLElement ? !g.hidden && g.tabIndex >= 0 && g.offsetParent !== null : !1) : [];
    }
    function a(h) {
      const g = r.value;
      if (!g) return;
      const _ = g.querySelector(`[data-action='${h}']`);
      _ instanceof HTMLButtonElement && _.click();
    }
    function s() {
      var S;
      const h = r.value;
      if (!h) return;
      const g = h.querySelector("[data-action='confirm-accept']");
      if (g instanceof HTMLElement) {
        g.focus();
        return;
      }
      const v = o()[0] || h;
      (S = v == null ? void 0 : v.focus) == null || S.call(v);
    }
    function c() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function p(h) {
      var C;
      if (h.defaultPrevented) return;
      if (h.key === "Escape") {
        h.preventDefault(), h.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (h.key !== "Tab") return;
      const g = o(), _ = r.value;
      if (!g.length) {
        h.preventDefault(), (C = _ == null ? void 0 : _.focus) == null || C.call(_);
        return;
      }
      const v = g[0], S = g[g.length - 1], M = document.activeElement;
      if (h.shiftKey) {
        (M === v || M === _ || !(_ != null && _.contains(M))) && (h.preventDefault(), S.focus());
        return;
      }
      (M === S || !(_ != null && _.contains(M))) && (h.preventDefault(), v.focus());
    }
    function f(h) {
      h.target === n.value && a("confirm-cancel");
    }
    return eo(() => t.model.visible, (h, g) => {
      if (h) {
        i = document.activeElement, lc(() => {
          s();
        });
        return;
      }
      g && c();
    }, { immediate: !0 }), hs(() => {
      c();
    }), (h, g) => e.model.visible === !0 ? (Te(), Ve("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Gt(f, ["self"])
    }, [
      ve("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: p
      }, [
        ve("div", AA, gt(e.model.title), 1),
        ve("div", CA, gt(e.model.text), 1),
        ve("div", IA, [
          g[0] || (g[0] = ve("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ve("button", EA, gt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, PA)
    ], 512)) : kt("", !0);
  }
}, TA = ["data-paint-pane"], FA = ["hidden"], DA = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], LA = ["aria-pressed", "disabled"], RA = ["hidden"], VA = { class: "pano-paint-color-pop-head" }, $A = { class: "pano-paint-color-field" }, zA = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, jA = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, HA = { class: "pano-paint-color-field" }, GA = { class: "pano-paint-alpha-wrap" }, WA = ["value"], KA = { "data-paint-alpha-value": "" }, BA = ["hidden"], UA = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, YA = ["data-paint-history-index", "aria-label", "disabled"], XA = ["data-paint-footer"], qA = ["data-paint-group"], JA = ["hidden"], ZA = ["value", "disabled"], QA = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, eC = ["hidden"], tC = {
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
    return (r, i) => (Te(), Ve("div", {
      class: xt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Te(!0), Ve(ct, null, Rt(e.panes, (o) => {
        var a;
        return Te(), Ve("div", {
          key: o.key,
          class: xt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Te(), Ve("div", {
            key: 0,
            class: xt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Te(!0), Ve(ct, null, Rt(e.paintSwatches, (s) => (Te(), Ve("button", {
              key: s.id,
              class: xt(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: $t(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, DA))), 128)),
            ve("button", {
              class: xt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: $t({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, LA),
            ve("div", {
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
              ve("div", VA, [
                ve("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: $t({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = ve("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ve("div", $A, [
                ve("div", zA, [
                  ve("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: $t({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ve("div", jA, [
                  ve("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: $t({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ve("label", HA, [
                i[1] || (i[1] = ve("span", null, "Opacity", -1)),
                ve("div", GA, [
                  ve("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, WA),
                  ve("span", KA, gt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ve("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ve("div", UA, [
                  (Te(!0), Ve(ct, null, Rt(e.state.historyEntries || [], (s) => (Te(), Ve("button", {
                    key: s.index,
                    class: xt(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: $t(n(s.color))
                  }, null, 14, YA))), 128))
                ])
              ], 8, BA)
            ], 12, RA)
          ], 10, FA)) : kt("", !0),
          ve("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            ve("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), Ve(ct, null, Rt(o.tools, (s) => {
                var c;
                return Te(), cr(un, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((c = e.state.activeTools) == null ? void 0 : c[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, qA),
            ve("div", {
              class: xt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ve("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: $t({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, ZA),
              ve("span", QA, gt(e.state.sizeText || "10"), 1)
            ], 10, JA),
            ve("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              et(un, {
                icon: ft(Ue).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, eC)
          ], 8, XA)
        ], 10, TA);
      }), 128))
    ], 2));
  }
}, nC = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ tn(null), r = /* @__PURE__ */ tn(null), i = /* @__PURE__ */ tn(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Te(), Ve(ct, null, [
      ve("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      ve("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        ve("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, rC = ["aria-label"], iC = ["data-tip", "aria-pressed"], oC = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = vt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => (Te(), Ve("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: $t({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (Te(!0), Ve(ct, null, Rt(e.buttons, (o) => (Te(), Ve("button", Qr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), gt(o.label), 17, iC))), 128))
    ], 12, rC));
  }
}, aC = {
  key: 0,
  class: "pano-cutout-menu"
}, sC = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, lC = ["data-aspect"], cC = ["data-action", "aria-label", "data-tip", "disabled"], uC = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Te(), Ve("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: $t({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), Ve(ct, null, Rt(e.model.items || [], (r) => (Te(), Ve(ct, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Te(), Ve("div", aC, [
          ve("button", sC, [
            et(Yt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          ve("div", {
            class: xt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), Ve(ct, null, Rt(r.choices || [], (i) => (Te(), Ve("button", {
              key: i.value,
              class: xt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, gt(i.label), 11, lC))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (Te(), cr(oC, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (Te(), Ve("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          et(Yt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, cC))
      ], 64))), 128))
    ], 4));
  }
}, dC = {
  key: 0,
  class: "pano-easing"
}, fC = { class: "pano-section-title" }, pC = { class: "pano-easing-range" }, hC = { class: "pano-easing-modes" }, mC = ["aria-pressed", "onClick"], gC = ["viewBox"], yC = ["x", "y"], bC = ["x1", "y1", "x2", "y2"], vC = ["d"], _C = ["x1", "y1", "x2", "y2"], SC = ["x1", "y1", "x2", "y2"], wC = ["cx", "cy"], xC = ["cx", "cy"], kC = { class: "pano-easing-note" }, Xr = 132, Wi = 14, MC = {
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
    ], o = /* @__PURE__ */ tn(null), a = vt(() => {
      var v;
      return Array.isArray((v = n.model) == null ? void 0 : v.easing) ? n.model.easing : null;
    }), s = (v) => Wi + v * Xr, c = (v) => Wi + (1 - v) * Xr, p = vt(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${s(0)} ${c(0)} H${s(1)} V${c(1)}`;
      const [v, S, M, C] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${c(0)} C${s(v)} ${c(S)} ${s(M)} ${c(C)} ${s(1)} ${c(1)}`;
    }), f = vt(() => a.value ? a.value.map((v) => v.toFixed(2)).join(", ") : "");
    function h(v) {
      var S;
      return JSON.stringify(v.easing) === JSON.stringify((S = n.model) == null ? void 0 : S.easing);
    }
    function g(v, S) {
      r("timeline", { type: "easing", easing: v, commit: S });
    }
    function _(v, S) {
      var $;
      if (v.button !== 0 || !a.value) return;
      const M = v.currentTarget;
      ($ = M.setPointerCapture) == null || $.call(M, v.pointerId);
      let C = null;
      const W = (y) => {
        const j = o.value.getBoundingClientRect(), G = j.width / (Xr + Wi * 2), re = ((y.clientX - j.left) / G - Wi) / Xr, se = 1 - ((y.clientY - j.top) / G - Wi) / Xr;
        C = [...C || a.value], C[S] = Math.round(Math.min(1, Math.max(0, re)) * 100) / 100, C[S + 1] = Math.round(Math.min(1, Math.max(0, se)) * 100) / 100, g(C, !1);
      }, V = () => {
        M.removeEventListener("pointermove", W), M.removeEventListener("pointerup", V), M.removeEventListener("pointercancel", V), C && g(C, !0);
      };
      M.addEventListener("pointermove", W), M.addEventListener("pointerup", V), M.addEventListener("pointercancel", V);
    }
    return (v, S) => e.model ? (Te(), Ve("div", dC, [
      ve("div", fC, [
        S[2] || (S[2] = ve("span", null, "Easing", -1)),
        ve("span", pC, gt(e.model.label), 1)
      ]),
      ve("div", hC, [
        (Te(), Ve(ct, null, Rt(i, (M) => ve("button", {
          key: M.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": h(M) ? "true" : "false",
          onClick: (C) => g(M.easing, !0)
        }, gt(M.label), 9, mC)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Te(), Ve("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Xr + Wi * 2} ${Xr + Wi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        ve("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: c(1),
          width: Xr,
          height: Xr
        }, null, 8, yC),
        ve("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: c(0),
          x2: s(1),
          y2: c(1)
        }, null, 8, bC),
        ve("path", {
          class: "pano-easing-curve",
          d: p.value
        }, null, 8, vC),
        a.value ? (Te(), Ve(ct, { key: 0 }, [
          ve("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: c(0),
            x2: s(a.value[0]),
            y2: c(a.value[1])
          }, null, 8, _C),
          ve("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: c(1),
            x2: s(a.value[2]),
            y2: c(a.value[3])
          }, null, 8, SC),
          ve("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: c(a.value[1]),
            r: "6",
            onPointerdown: S[0] || (S[0] = (M) => _(M, 0))
          }, null, 40, wC),
          ve("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: c(a.value[3]),
            r: "6",
            onPointerdown: S[1] || (S[1] = (M) => _(M, 2))
          }, null, 40, xC)
        ], 64)) : kt("", !0)
      ], 8, gC)) : kt("", !0),
      ve("div", kC, [
        e.model.mixed ? (Te(), Ve(ct, { key: 0 }, [
          Ea("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), Ve(ct, { key: 1 }, [
          Ea("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), Ve(ct, { key: 2 }, [
          Ea("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Te(), Ve(ct, { key: 3 }, [
          Ea("cubic-bezier(" + gt(f.value) + ")", 1)
        ], 64)) : kt("", !0)
      ])
    ])) : kt("", !0);
  }
}, NC = {
  class: "pano-side",
  "data-side": ""
}, PC = { class: "pano-side-head" }, AC = { class: "pano-side-title" }, CC = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, IC = {
  key: 0,
  class: "pano-side-scroll"
}, EC = { class: "pano-inspector" }, OC = { class: "pano-ui-row pano-coverage-row" }, TC = ["data-selected"], FC = ["aria-pressed", "disabled"], DC = ["aria-pressed", "disabled"], LC = {
  key: 0,
  class: "pano-section-title"
}, RC = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, VC = {
  class: "pano-picker",
  "data-picker": "selection"
}, $C = ["disabled"], zC = { class: "pano-picker-label" }, jC = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, HC = ["hidden"], GC = ["data-selection-id"], WC = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, KC = {
  key: 2,
  class: "pano-state-actions"
}, BC = ["disabled"], UC = ["data-key"], YC = { class: "pano-field-group-values" }, XC = ["title", "onPointerdown"], qC = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], JC = ["data-key"], ZC = ["min", "max", "step", "value", "disabled", "data-param-key"], QC = ["min", "max", "step", "value", "disabled", "data-param-key"], eI = ["open"], tI = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, nI = { class: "pano-ui-settings-body" }, rI = { class: "pano-ui-row" }, iI = ["data-selected"], oI = ["aria-pressed"], aI = ["aria-pressed"], sI = { class: "pano-ui-row" }, lI = ["data-selected"], cI = ["aria-pressed"], uI = ["aria-pressed"], dI = {
  key: 1,
  class: "pano-side-footer"
}, fI = ["data-action"], pI = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = vt(() => {
      const p = n.model;
      return !p || typeof p != "object" ? !1 : Object.keys(p).length > 0 && !!p.coverage;
    });
    function o(p) {
      return { "--v": `${Number((p == null ? void 0 : p.fillPct) || 0)}%` };
    }
    function a(p, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (p == null ? void 0 : p.enabled) === !1;
    }
    const s = {};
    function c(p, f) {
      const h = s[f.key];
      if (p.button !== 0 || !h || a(f, n.model)) return;
      p.preventDefault();
      const g = p.currentTarget, _ = p.clientX, v = Number(h.value) || 0;
      let S = !1;
      g.setPointerCapture(p.pointerId);
      const M = (W) => {
        if (!S && Math.abs(W.clientX - _) < 3) return;
        S = !0;
        const V = v + (W.clientX - _) * f.drag * (W.shiftKey ? 0.1 : 1);
        h.value = String(Number(V.toFixed(3))), h.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, C = () => {
        g.removeEventListener("pointermove", M), g.removeEventListener("pointerup", C), g.removeEventListener("pointercancel", C), g.removeEventListener("lostpointercapture", C), S ? h.dispatchEvent(new Event("change", { bubbles: !0 })) : h.focus();
      };
      g.addEventListener("pointermove", M), g.addEventListener("pointerup", C), g.addEventListener("pointercancel", C), g.addEventListener("lostpointercapture", C);
    }
    return (p, f) => {
      var h, g, _, v, S;
      return Te(), Ve("div", NC, [
        ve("div", PC, [
          ve("div", AC, [
            ve("span", CC, [
              et(Yt, {
                icon: ft(Ue).globe
              }, null, 8, ["icon"])
            ]),
            ve("span", null, gt(e.nodeTitle), 1)
          ]),
          f[1] || (f[1] = ve("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[10] || (f[10] = ve("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), Ve("div", IC, [
          ve("div", EC, [
            f[9] || (f[9] = ve("div", { class: "pano-section-title" }, [
              ve("span", null, "Scene")
            ], -1)),
            ve("div", OC, [
              f[2] || (f[2] = ve("label", null, "Coverage", -1)),
              ve("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((h = e.model.coverage) == null ? void 0 : h.value) === 180 ? "1" : "0"
              }, [
                ve("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 360 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "360", 8, FC),
                ve("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((S = e.model.coverage) == null ? void 0 : S.disabled) === !0
                }, "180", 8, DC)
              ], 8, TC)
            ]),
            e.model.transformTitle !== !1 ? (Te(), Ve("div", LC, [...f[3] || (f[3] = [
              ve("span", null, "Transform", -1)
            ])])) : kt("", !0),
            e.model.selectionPicker ? (Te(), Ve("div", RC, [
              ve("label", null, gt(e.model.selectionPicker.label), 1),
              ve("div", VC, [
                ve("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ve("span", zC, [
                    e.model.selectionPicker.currentIcon ? (Te(), Ve("span", jC, [
                      et(Yt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : kt("", !0),
                    ve("span", null, gt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  f[4] || (f[4] = ve("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, $C),
                ve("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), Ve(ct, null, Rt(e.model.selectionPicker.items || [], (M) => (Te(), Ve("button", {
                    key: M.id,
                    type: "button",
                    class: xt(["pano-picker-item", { active: M.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": M.id
                  }, [
                    M.icon ? (Te(), Ve("span", WC, [
                      et(Yt, {
                        icon: M.icon
                      }, null, 8, ["icon"])
                    ])) : kt("", !0),
                    ve("span", null, gt(M.label), 1)
                  ], 10, GC))), 128))
                ], 8, HC)
              ])
            ])) : kt("", !0),
            e.model.copyStateButton ? (Te(), Ve("div", KC, [
              ve("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                et(Yt, {
                  icon: ft(Ue).copy
                }, null, 8, ["icon"]),
                ve("span", null, gt(e.model.copyStateButton.label), 1)
              ], 8, BC)
            ])) : kt("", !0),
            ve("div", {
              class: xt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), Ve(ct, { key: 0 }, Rt(e.model.notes, (M) => (Te(), Ve("div", {
                key: M,
                class: "pano-param-note"
              }, gt(M), 1))), 128)) : (Te(!0), Ve(ct, { key: 1 }, Rt(e.model.rows || [], (M) => (Te(), Ve(ct, {
                key: M.key
              }, [
                M.grouped ? (Te(), Ve("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": M.key
                }, [
                  ve("label", null, gt(M.label), 1),
                  ve("div", YC, [
                    (Te(!0), Ve(ct, null, Rt(M.fields, (C) => (Te(), Ve("div", {
                      key: C.key,
                      class: "pano-axis-field"
                    }, [
                      ve("span", {
                        class: xt(["pano-axis", { disabled: a(C, e.model) }]),
                        title: C.label,
                        onPointerdown: (W) => c(W, C)
                      }, gt(C.short), 43, XC),
                      ve("input", {
                        ref_for: !0,
                        ref: (W) => {
                          s[C.key] = W;
                        },
                        type: "number",
                        min: C.min,
                        max: C.max,
                        step: C.step,
                        value: C.displayValue,
                        disabled: a(C, e.model),
                        "aria-label": `${M.label} ${C.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": C.key
                      }, null, 8, qC)
                    ]))), 128))
                  ])
                ], 8, UC)) : (Te(), Ve("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": M.key
                }, [
                  ve("label", null, gt(M.label), 1),
                  ve("input", {
                    type: "range",
                    min: M.fields[0].min,
                    max: M.fields[0].max,
                    step: M.fields[0].step,
                    value: M.fields[0].value,
                    disabled: a(M.fields[0], e.model),
                    style: $t(o(M.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": M.fields[0].key
                  }, null, 12, ZC),
                  ve("input", {
                    type: "number",
                    min: M.fields[0].min,
                    max: M.fields[0].max,
                    step: M.fields[0].step,
                    value: M.fields[0].displayValue,
                    disabled: a(M.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": M.fields[0].key
                  }, null, 8, QC)
                ], 8, JC))
              ], 64))), 128))
            ], 2),
            et(MC, {
              model: e.easing,
              onTimeline: f[0] || (f[0] = (M) => r("timeline", M))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), Ve("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ve("summary", null, [
                f[5] || (f[5] = ve("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ve("span", tI, [
                  et(Yt, {
                    icon: ft(Ue).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ve("div", nI, [
                ve("div", rI, [
                  f[6] || (f[6] = ve("label", null, "Drag X", -1)),
                  ve("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ve("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, oI),
                    ve("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, aI)
                  ], 8, iI)
                ]),
                ve("div", sI, [
                  f[7] || (f[7] = ve("label", null, "Drag Y", -1)),
                  ve("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ve("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, cI),
                    ve("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, uI)
                  ], 8, lI)
                ]),
                f[8] || (f[8] = ve("div", { class: "pano-ui-row" }, [
                  ve("span"),
                  ve("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, eI)) : kt("", !0)
          ])
        ])) : kt("", !0),
        (e.model.footerButtons || []).length ? (Te(), Ve("div", dI, [
          (Te(!0), Ve(ct, null, Rt(e.model.footerButtons, (M) => (Te(), Ve("button", {
            key: M.action,
            class: xt(["pano-btn", { "pano-btn-primary": M.primary === !0 }]),
            type: "button",
            "data-action": M.action
          }, gt(M.label), 11, fI))), 128))
        ])) : kt("", !0)
      ]);
    };
  }
}, hI = { class: "pano-timeline-bar" }, mI = ["aria-label", "data-tip"], gI = ["aria-label", "data-tip"], yI = { class: "pano-timeline-time" }, bI = ["data-tip"], vI = { key: 0 }, _I = ["min", "max", "value"], SI = ["data-tip"], wI = { key: 0 }, xI = ["max", "value"], kI = ["aria-expanded"], MI = ["inert"], NI = { class: "pano-timeline-name" }, PI = ["aria-pressed", "aria-label", "data-tip", "onClick"], AI = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, CI = ["disabled", "aria-expanded", "aria-label", "onClick"], II = ["title", "aria-current", "onClick"], EI = ["data-keyed", "aria-label", "onClick"], OI = ["onPointerdown"], TI = ["onPointerdown"], FI = ["onPointerdown"], DI = ["onPointerdown"], LI = ["aria-label", "data-tip", "onPointerdown"], RI = { key: 0 }, VI = ["onPointerdown"], $I = ["aria-label", "data-tip", "onPointerdown"], zI = { key: 0 }, jI = 10, HI = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ xl(0), playing: /* @__PURE__ */ xl(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ tn(null), o = /* @__PURE__ */ tn(null), a = /* @__PURE__ */ tn(1), s = /* @__PURE__ */ tn(0), c = /* @__PURE__ */ tn(!1);
    let p = null, f = null, h = null;
    uc(() => {
      p = new ResizeObserver(([he]) => {
        a.value = Math.max(1, he.contentRect.width);
      }), i.value && p.observe(i.value), f = new ResizeObserver(([he]) => {
        s.value = he.contentRect.height;
      }), o.value && f.observe(o.value);
    }), hs(() => {
      p == null || p.disconnect(), f == null || f.disconnect(), h == null || h();
    });
    const g = vt(() => Math.max(1, Number(n.model.span || 1))), _ = vt(() => n.playhead.frame.value), v = vt(() => n.playhead.playing.value), S = vt(() => vk(_.value, Number(n.model.fps || 1))), M = vt(() => a.value / g.value), C = (he) => `${he / g.value * 100}%`, W = vt(() => Tk(g.value, M.value));
    function V(he) {
      const te = i.value.getBoundingClientRect(), R = Math.floor((he - te.left) / Math.max(1, te.width) * g.value);
      return Math.min(g.value - 1, Math.max(0, R));
    }
    function $(he, te, R) {
      const O = Math.ceil(jI / Math.max(1e-6, M.value)), ue = new Map(te.map((Me) => [Me.frame, Me.full]));
      return Fk(te.map((Me) => Me.frame), O).map((Me, ze) => ({
        ...Me,
        key: `${he}:${ze}`,
        partial: Me.frames.some((Xe) => !ue.get(Xe)),
        selected: Me.frames.some((Xe) => R.includes(Xe))
      }));
    }
    const y = vt(() => {
      const he = /* @__PURE__ */ new Map();
      for (const te of n.model.rows || []) {
        he.set(te.id, $(te.id, te.keys, te.selectedFrames));
        for (const R of te.lanes) he.set(R.key, $(R.key, R.frames.map((O) => ({ frame: O, full: !0 })), R.selectedFrames));
      }
      return he;
    });
    function j(he) {
      const te = he.end === null ? g.value : he.end;
      return { left: C(he.start), width: C(Math.max(0, te - he.start)) };
    }
    function G(he, te) {
      const R = he.clientX, O = Math.max(1e-6, M.value);
      let ue = 0;
      te("start", 0, he);
      const Me = (Xe) => {
        if (Xe.pointerId !== he.pointerId) return;
        const ce = Math.round((Xe.clientX - R) / O);
        ce !== ue && (ue = ce, te("move", ue, Xe));
      }, ze = (Xe) => {
        Xe.pointerId === he.pointerId && (h(), te("end", ue, Xe));
      };
      h == null || h(), h = () => {
        window.removeEventListener("pointermove", Me), window.removeEventListener("pointerup", ze), window.removeEventListener("pointercancel", ze), h = null;
      }, window.addEventListener("pointermove", Me), window.addEventListener("pointerup", ze), window.addEventListener("pointercancel", ze);
    }
    function re(he) {
      he.button === 0 && G(he, (te, R, O) => r("action", { type: "seek", frame: V(O.clientX), phase: te }));
    }
    function se(he, te, R) {
      he.button === 0 && (r("action", { type: "select-row", id: te.id }), G(he, (O, ue) => r("action", { type: "clip", id: te.id, mode: R, delta: ue, phase: O })));
    }
    function I(he, te, R, O, ue) {
      if (he.button === 0) {
        if (he.shiftKey) {
          r("action", { type: "select-keys", owner: te.id, lane: R, frames: O.frames, additive: !0 });
          return;
        }
        O.frames.every((Me) => ue.includes(Me)) || r("action", { type: "select-keys", owner: te.id, lane: R, frames: O.frames, additive: !1 }), G(he, (Me, ze) => r("action", { type: "move-keys", delta: ze, phase: Me }));
      }
    }
    const H = vt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function J(he, te, R) {
      r("action", te), await lc(), he.target.value = R();
    }
    function de(he) {
      J(he, { type: "fps", fps: Number(he.target.value) }, () => H.value);
    }
    function xe(he) {
      const te = he.target.value.trim();
      J(he, { type: "length", length: te ? Number(te) : null }, () => n.model.length ?? "");
    }
    function _e(he, te, R) {
      he.button !== 0 || he.target !== he.currentTarget || r("action", { type: "select-keys", owner: te.id, lane: R, frames: [], additive: !1 });
    }
    return (he, te) => ii((Te(), Ve("section", {
      class: xt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      ve("div", hI, [
        ve("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": v.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": v.value ? "Pause (Space)" : "Play (Space)",
          onClick: te[0] || (te[0] = (R) => r("action", { type: "play" }))
        }, [
          et(Yt, {
            icon: v.value ? ft(Ue).pause : ft(Ue).play
          }, null, 8, ["icon"])
        ], 8, mI),
        e.model.hasAudio ? (Te(), Ve("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: te[1] || (te[1] = (R) => r("action", { type: "mute" }))
        }, [
          et(Yt, {
            icon: e.model.muted ? ft(Ue).volume_muted : ft(Ue).volume2
          }, null, 8, ["icon"])
        ], 8, gI)) : kt("", !0),
        ve("span", yI, gt(S.value), 1),
        ve("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), Ve("span", vI, gt(H.value), 1)) : (Te(), Ve("input", {
            key: 1,
            type: "number",
            min: ft(H0),
            max: ft(lf),
            step: "any",
            value: H.value,
            "aria-label": "Timeline fps",
            onChange: de
          }, null, 40, _I)),
          te[6] || (te[6] = ve("span", null, "fps", -1))
        ], 8, bI),
        ve("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          te[7] || (te[7] = ve("span", null, "Length", -1)),
          e.model.lengthLocked ? (Te(), Ve("span", wI, gt(e.model.length), 1)) : (Te(), Ve("input", {
            key: 1,
            type: "number",
            min: "1",
            max: ft(cf),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: xe
          }, null, 40, xI))
        ], 8, SI),
        ve("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: te[2] || (te[2] = (R) => r("action", { type: "toggle-expanded" }))
        }, [
          te[8] || (te[8] = ve("span", null, "Timeline", -1)),
          et(Yt, {
            icon: ft(Ue).chevron
          }, null, 8, ["icon"])
        ], 8, kI)
      ]),
      ve("div", {
        class: xt(["pano-timeline-body", { open: e.model.expanded, sliding: c.value }]),
        style: $t({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: te[3] || (te[3] = Gt((R) => c.value = !0, ["self"])),
        onTransitionend: te[4] || (te[4] = Gt((R) => c.value = !1, ["self"])),
        onTransitioncancel: te[5] || (te[5] = Gt((R) => c.value = !1, ["self"]))
      }, [
        ve("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          te[9] || (te[9] = ve("div", { class: "pano-timeline-corner" }, null, -1)),
          ve("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: re
          }, [
            (Te(!0), Ve(ct, null, Rt(W.value, (R) => (Te(), Ve("span", {
              key: R,
              class: "pano-timeline-tick",
              style: $t({ left: C(R) })
            }, gt(R), 5))), 128)),
            ve("span", {
              class: "pano-timeline-playhead",
              style: $t({ left: C(_.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), Ve(ct, null, Rt(e.model.rows || [], (R) => (Te(), Ve(ct, {
            key: R.id
          }, [
            ve("div", {
              class: xt(["pano-timeline-head", { selected: R.selected, "is-hidden": !R.visible }])
            }, [
              ve("div", NI, [
                R.hideable ? (Te(), Ve("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": R.visible ? "true" : "false",
                  "aria-label": `${R.label} visible`,
                  "data-tip": R.visible ? "Hide" : "Show",
                  onClick: Gt((O) => r("action", { type: "toggle-visible", id: R.id }), ["stop"])
                }, [
                  et(Yt, {
                    icon: R.visible ? ft(Ue).eye : ft(Ue).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, PI)) : (Te(), Ve("span", AI)),
                ve("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !R.keyable,
                  "aria-expanded": R.open ? "true" : "false",
                  "aria-label": R.open ? `Hide ${R.label} parameters` : `Show ${R.label} parameters`,
                  onClick: Gt((O) => r("action", { type: "toggle-row", id: R.id }), ["stop"])
                }, [
                  et(Yt, {
                    icon: ft(Ue).chevron
                  }, null, 8, ["icon"])
                ], 8, CI),
                ve("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: R.label,
                  "aria-current": R.selected ? "true" : void 0,
                  onClick: (O) => r("action", { type: "select-row", id: R.id })
                }, [
                  et(Yt, {
                    icon: R.icon
                  }, null, 8, ["icon"]),
                  ve("span", null, gt(R.label), 1)
                ], 8, II),
                R.keyable ? (Te(), Ve("button", {
                  key: 2,
                  class: xt(["pano-timeline-key", { keyed: ft(_u)(R.keys, _.value) }]),
                  type: "button",
                  "data-keyed": ft(_u)(R.keys, _.value) ? "true" : "false",
                  "aria-label": ft(_u)(R.keys, _.value) ? `Every ${R.label} parameter has a keyframe here; update them` : `Add keyframes for every ${R.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Gt((O) => r("action", { type: "key-row", owner: R.id }), ["stop"])
                }, [
                  et(Yt, {
                    icon: ft(Ue).keyframe
                  }, null, 8, ["icon"])
                ], 10, EI)) : kt("", !0)
              ]),
              R.open ? (Te(!0), Ve(ct, { key: 0 }, Rt(R.lanes, (O) => (Te(), Ve("div", {
                key: O.key,
                class: "pano-timeline-lane-head"
              }, gt(O.label), 1))), 128)) : kt("", !0)
            ], 2),
            ve("div", {
              class: xt(["pano-timeline-track", { selected: R.selected }])
            }, [
              ve("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (O) => _e(O, R, null)
              }, [
                R.clip ? (Te(), Ve("div", {
                  key: 0,
                  class: xt(["pano-timeline-clip", { open: R.clip.end === null }]),
                  style: $t(j(R.clip)),
                  onPointerdown: Gt((O) => se(O, R, "move"), ["stop"])
                }, [
                  ve("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Gt((O) => se(O, R, "start"), ["stop"])
                  }, null, 40, FI),
                  ve("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Gt((O) => se(O, R, "end"), ["stop"])
                  }, null, 40, DI)
                ], 46, TI)) : kt("", !0),
                (Te(!0), Ve(ct, null, Rt(y.value.get(R.id), (O) => (Te(), Ve("button", {
                  key: O.key,
                  type: "button",
                  class: xt(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1, partial: O.partial }]),
                  style: $t({ left: C(O.frame + 0.5) }),
                  "aria-label": `${R.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Gt((ue) => I(ue, R, null, O, R.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (Te(), Ve("span", RI, gt(O.frames.length), 1)) : kt("", !0)
                ], 46, LI))), 128))
              ], 40, OI),
              R.open ? (Te(!0), Ve(ct, { key: 0 }, Rt(R.lanes, (O) => (Te(), Ve("div", {
                key: O.key,
                class: "pano-timeline-lane",
                onPointerdown: (ue) => _e(ue, R, O.lane)
              }, [
                (Te(!0), Ve(ct, null, Rt(y.value.get(O.key), (ue) => (Te(), Ve("button", {
                  key: ue.key,
                  type: "button",
                  class: xt(["pano-timeline-pin", { selected: ue.selected, cluster: ue.frames.length > 1 }]),
                  style: $t({ left: C(ue.frame + 0.5) }),
                  "aria-label": `${O.label}: ${ue.frames.length > 1 ? `${ue.frames.length} keyframes` : `keyframe at frame ${ue.frames[0]}`}`,
                  "data-tip": ue.frames.length > 1 ? `${ue.frames.length} keyframes` : `Frame ${ue.frames[0]}`,
                  onPointerdown: Gt((Me) => I(Me, R, O.lane, ue, O.selectedFrames), ["stop"])
                }, [
                  ue.frames.length > 1 ? (Te(), Ve("span", zI, gt(ue.frames.length), 1)) : kt("", !0)
                ], 46, $I))), 128))
              ], 40, VI))), 128)) : kt("", !0),
              ve("span", {
                class: "pano-timeline-playhead",
                style: $t({ left: C(_.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, MI)
    ], 2)), [
      [oo, e.model.visible]
    ]);
  }
}, GI = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Te(), Ve("div", {
      class: xt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: $t({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, gt(e.model.text || ""), 7));
  }
}, WI = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, KI = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Te(), Ve("div", WI, [
      (Te(!0), Ve(ct, null, Rt(e.buttons, (r) => ii((Te(), cr(un, {
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
        [oo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, BI = ["data-video-ready"], UI = { class: "pano-video-transport-shell" }, YI = { class: "pano-video-controls-left" }, XI = { class: "pano-video-filmstrip" }, qI = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, JI = ["src", "onLoad"], ZI = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, QI = ["max", "value", "disabled"], eE = { class: "pano-video-controls-right" }, tE = ["data-has-audio"], nE = { class: "pano-video-volume-pop" }, rE = ["value", "disabled"], iE = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = vt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? "Pause" : "Play";
    }), r = vt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? "Pause video" : "Play video";
    }), i = vt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? Ue.pause : Ue.play;
    }), o = vt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = vt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = vt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? Ue.loop_off : Ue.loop;
    }), c = vt(() => {
      var y, j;
      return ((y = t.state) == null ? void 0 : y.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), p = vt(() => {
      var y, j, G;
      return ((y = t.state) == null ? void 0 : y.hasAudio) !== !0 ? Ue.volume : ((j = t.state) == null ? void 0 : j.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? Ue.volume_muted : Ue.volume2;
    }), f = vt(() => {
      var y;
      return Math.max(0, Math.min(100, Number(((y = t.state) == null ? void 0 : y.progressPct) || 0)));
    }), h = vt(() => ({ left: `${f.value}%` })), g = vt(() => {
      var re, se;
      const y = (re = t.state) == null ? void 0 : re.volumePct, j = Number(((se = t.state) == null ? void 0 : se.volume) ?? 1) * 100, G = Number(y ?? j ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, G))}%`
      };
    }), _ = vt(() => {
      var G, re;
      const j = [
        String(((G = t.state) == null ? void 0 : G.currentTimeLabel) || "0:00"),
        String(((re = t.state) == null ? void 0 : re.durationLabel) || "0:00")
      ].reduce((se, I) => Math.max(se, I.length), 4);
      return `${Math.max(4, j)}ch`;
    }), v = vt(() => ({ "--pano-video-time-ch": _.value })), S = vt(() => {
      var G, re;
      const y = Array.isArray((G = t.state) == null ? void 0 : G.thumbnails) ? t.state.thumbnails : [];
      if (y.length) return y;
      const j = Math.max(7, Number(((re = t.state) == null ? void 0 : re.thumbnailCount) || 9));
      return Array.from({ length: j }, (se, I) => ({
        id: `placeholder-${I}`,
        src: "",
        label: ""
      }));
    }), M = /* @__PURE__ */ tn(/* @__PURE__ */ new Set()), C = (y) => String((y == null ? void 0 : y.id) || (y == null ? void 0 : y.src) || (y == null ? void 0 : y.label) || ""), W = (y) => M.value.has(C(y)), V = (y) => {
      const j = new Set(M.value);
      j.add(C(y)), M.value = j;
    };
    eo(S, (y) => {
      const j = new Set(y.map(C)), G = /* @__PURE__ */ new Set();
      for (const re of M.value)
        j.has(re) && G.add(re);
      M.value = G;
    }, { immediate: !0 });
    const $ = vt(() => {
      var y;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((y = t.state) == null ? void 0 : y.shellMaxWidthPx) || 640))}px`
      };
    });
    return (y, j) => (Te(), Ve("div", {
      class: xt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: $t($.value)
    }, [
      j[1] || (j[1] = ve("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      j[2] || (j[2] = ve("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ve("div", UI, [
        ve("div", YI, [
          et(un, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ve("div", {
            class: "pano-video-time pano-video-time-start",
            style: $t(v.value)
          }, gt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ve("div", XI, [
          ve("div", qI, [
            (Te(!0), Ve(ct, null, Rt(S.value, (G) => (Te(), Ve("div", {
              key: C(G),
              class: xt(["pano-video-thumb", {
                "is-placeholder": !G.src,
                "is-loaded": G.src && W(G)
              }])
            }, [
              G.src ? (Te(), Ve("img", {
                key: 0,
                src: G.src,
                alt: "",
                draggable: "false",
                onLoad: (re) => V(G)
              }, null, 40, JI)) : (Te(), Ve("span", ZI))
            ], 2))), 128))
          ]),
          ve("div", {
            class: "pano-video-playhead",
            style: $t(h.value),
            "aria-hidden": "true"
          }, [...j[0] || (j[0] = [
            ve("span", { class: "pano-video-playhead-line" }, null, -1),
            ve("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ve("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, QI)
        ]),
        ve("div", eE, [
          ve("div", {
            class: "pano-video-time pano-video-time-end",
            style: $t(v.value)
          }, gt(e.state.durationLabel || "0:00"), 5),
          et(un, {
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
          ve("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ve("div", nE, [
              ve("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: $t(g.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, rE)
            ]),
            et(un, {
              "extra-class": "pano-video-control",
              icon: p.value,
              label: c.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, tE)
        ])
      ])
    ], 14, BI));
  }
}, oE = { class: "pano-floating-top" }, aE = ["data-selected", "data-view-count"], sE = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], lE = { class: "label" }, cE = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Te(), Ve("div", oE, [
        ve("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), Ve(ct, null, Rt(e.buttons, (i) => ii((Te(), Ve("button", {
            key: i.key,
            class: xt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            et(Yt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            ve("span", lE, gt(i.label), 1)
          ], 10, sE)), [
            [oo, i.visible !== !1]
          ])), 128))
        ], 8, aE)
      ]);
    };
  }
};
function Pb(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ue.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ue.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Ue.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ue.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ue.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ue.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ue.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ue.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ue.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ue.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ue.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ue.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ue.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ue.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ue.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ue.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ue.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ue.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ue.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ue.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ue.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ue.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ue.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ue.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ue.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ue.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ue.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ue.lasso_tool }
        ]
      }
    ]
  };
}
const uE = ["aria-label"], dE = { class: "pano-stage-column" }, fE = { class: "pano-stage-wrap" }, pE = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, hE = {
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
    let o = "", a = !1, s = null;
    const c = /* @__PURE__ */ tn(null), p = /* @__PURE__ */ tn(null), f = /* @__PURE__ */ tn(null);
    function h() {
      var I, H;
      return ((H = (I = f.value) == null ? void 0 : I.getRefs) == null ? void 0 : H.call(I)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function g(I) {
      var H, J;
      return ((J = (H = p.value) == null ? void 0 : H.open) == null ? void 0 : J.call(H, I)) === !0;
    }
    function _(I) {
      i("image-file-selected", I);
    }
    function v(I) {
      i("image-file-cancelled", I);
    }
    t({ getPaintOverlayRefs: h, openImagePicker: g });
    const S = vt(() => r.readOnly === !0), M = vt(() => r.shellPreset || Pb(r.type)), C = vt(() => {
      var H, J, de;
      const I = String((((H = r.uiState) == null ? void 0 : H.stageStatus) === "failed" ? (J = r.uiState) == null ? void 0 : J.stageStatusDetail : (de = r.uiState) == null ? void 0 : de.stageWarningDetail) ?? "");
      return I === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : I === "stickers" ? "One or more sticker previews are unavailable." : I === "frame" ? "The editor hit a rendering error. Check the browser console for details." : I === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : I.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = vt(() => {
      var H;
      const I = Array.isArray((H = M.value) == null ? void 0 : H.floatingButtons) ? M.value.floatingButtons.slice() : [];
      return S.value && I.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ue.fullscreen
      }), I;
    });
    function V() {
      const I = c.value;
      return I ? Array.from(I.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((H) => H instanceof HTMLElement ? !H.hidden && H.tabIndex >= 0 && H.offsetParent !== null : !1) : [];
    }
    function $() {
      var J;
      const H = V()[0] || c.value;
      (J = H == null ? void 0 : H.focus) == null || J.call(H);
    }
    function y() {
      var I;
      s != null && s.isConnected && ((I = s.focus) == null || I.call(s)), s = null;
    }
    function j(I) {
      var H, J, de, xe;
      if (!I.defaultPrevented) {
        if (I.key === "Tab") {
          const _e = V();
          if (!_e.length) {
            I.preventDefault(), (J = (H = c.value) == null ? void 0 : H.focus) == null || J.call(H);
            return;
          }
          const he = _e[0], te = _e[_e.length - 1], R = document.activeElement;
          if (I.shiftKey) {
            (R === he || R === c.value || !((de = c.value) != null && de.contains(R))) && (I.preventDefault(), te.focus());
            return;
          }
          (R === te || !((xe = c.value) != null && xe.contains(R))) && (I.preventDefault(), he.focus());
          return;
        }
        I.key === "Escape" && i("close");
      }
    }
    function G() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function re() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function se(I) {
      document.removeEventListener("keydown", j), I ? (s || (s = document.activeElement), G(), document.addEventListener("keydown", j), lc(() => {
        $();
      })) : (re(), y());
    }
    return uc(() => {
      se(r.open);
    }), hs(() => {
      re(), document.removeEventListener("keydown", j), y();
    }), eo(() => r.open, (I) => {
      se(I);
    }), (I, H) => e.open ? (Te(), Ve("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: H[2] || (H[2] = Gt((J) => i("close"), ["self"]))
    }, [
      ve("section", {
        ref_key: "modalRef",
        ref: c,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ve("div", dE, [
          ve("div", fE, [
            H[3] || (H[3] = ve("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            H[4] || (H[4] = ve("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            H[5] || (H[5] = ve("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Te(), Ve("div", pE, gt(C.value), 1)) : kt("", !0),
            H[6] || (H[6] = ve("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              ve("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            et(nC, {
              ref_key: "paintOverlaysRef",
              ref: f
            }, null, 512),
            et(sb, {
              ref_key: "imageFilePickerRef",
              ref: p,
              onFileSelected: _,
              onFileCancelled: v
            }, null, 512),
            S.value ? kt("", !0) : (Te(), Ve(ct, { key: 1 }, [
              et(KI, {
                buttons: e.uiState.toolButtons || M.value.toolButtons || []
              }, null, 8, ["buttons"]),
              et(NA, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              et(tC, {
                "paint-swatches": e.paintSwatches,
                panes: M.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            et(iE, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            et(cE, {
              buttons: e.uiState.viewButtons || M.value.viewButtons || []
            }, null, 8, ["buttons"]),
            et(SA, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            et(uC, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            et(GI, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            et(OA, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          et(HI, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: H[0] || (H[0] = (J) => i("timeline", J))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? kt("", !0) : (Te(), cr(pI, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: H[1] || (H[1] = (J) => i("timeline", J))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, uE)
    ])) : kt("", !0);
  }
}, yr = "loading", ds = "ready", ar = "failed";
function Ab(e, t = "") {
  return e && (e.__panoLoadState = yr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Cb(e, t = "") {
  return e && (e.__panoLoadState = ds, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Ib(e, t = "") {
  return e && (e.__panoLoadState = ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Cd(e, t) {
  return e ? e.__panoLoadState === ar ? ar : typeof t == "function" && t(e) ? ds : yr : ds;
}
function Id(e) {
  return Cd(e) === ar;
}
function mE({ presented: e, background: t = ds, stickers: n = [] } = {}) {
  if (!e) return { status: yr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === yr, o = r.includes(yr);
  if (i && o) return { status: yr, detail: "mixed" };
  if (i) return { status: yr, detail: "background" };
  if (o) return { status: yr, detail: "stickers" };
  const a = t === ar, s = r.includes(ar);
  return a && s ? { status: ar, detail: "mixed" } : a ? { status: ar, detail: "background" } : s ? { status: ar, detail: "stickers" } : { status: ds, detail: "" };
}
const gE = "state_json", yE = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), zf = "sticker_image_1", bE = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), cg = 0.01, vE = "external_image", Ql = "pano_sticker_input_images", _E = "pano_sticker_input_videos", SE = "pano_sticker_input_frames", wE = "pano_sticker_input_video_meta", xE = !0, _l = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], zr = Math.PI / 180, Ji = 180 / Math.PI, Eu = 1, Eb = "rgb(255, 221, 87)", kE = "rgb(228, 228, 231)", ME = "rgb(180, 150, 60)", NE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, PE = 64, ug = 40, Ou = 16, AE = 0.45, dg = 180, CE = 160, ec = 24, IE = 4, EE = 4, OE = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function Tu(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function TE(e) {
  return 1 - Math.pow(1 - e, 3);
}
function FE(e, t, n) {
  const r = Ie((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function DE(e) {
  return e * e * e;
}
function wc(e, t, n) {
  return { x: e, y: t, z: n };
}
function fg(e, t) {
  return wc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function pg(e, t) {
  return wc(e.x * t, e.y * t, e.z * t);
}
function Fu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function LE(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return wc(e.x / t, e.y / t, e.z / t);
}
function Zs(e) {
  return {
    yaw: Bt(Math.atan2(e.x, e.z) * Ji),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * Ji, -90, 90)
  };
}
function mi(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, a = t[r].y, s = t[i].x, c = t[i].y;
    a > e.y != c > e.y && e.x < (s - o) * (e.y - a) / (c - a || 1e-6) + o && (n = !n);
  }
  return n;
}
function Va(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Du(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = r * r + i * i;
  if (s <= 1e-6) return Va(e, t);
  const c = Ie((o * r + a * i) / s, 0, 1), p = Number(t.x || 0) + r * c, f = Number(t.y || 0) + i * c, h = Number(e.x || 0) - p, g = Number(e.y || 0) - f;
  return h * h + g * g;
}
function or(e, t, n) {
  return e + (t - e) * n;
}
function Ir(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ie(n, 0, 1)})`;
}
function RE(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Qs = { fillStyle: "", url: "" };
function VE(e, t, n) {
  if (Qs.url && Qs.fillStyle === String(e || ""))
    return Qs.url;
  const r = RE(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ec}" height="${ec}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Qs = { fillStyle: String(e || ""), url: r }, r;
}
function Sl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Yn(e) {
  return {
    r: Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ie(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function vn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function $E(e) {
  return _l.some((t) => Sl(e, t.color));
}
function Lu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = Ie(Number(t), 0, 1), o = Ie(Number(n), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(r * 6), s = r * 6 - a, c = o * (1 - i), p = o * (1 - s * i), f = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: f, b: c };
    case 1:
      return { r: p, g: o, b: c };
    case 2:
      return { r: c, g: o, b: f };
    case 3:
      return { r: c, g: p, b: o };
    case 4:
      return { r: f, g: c, b: o };
    default:
      return { r: o, g: c, b: p };
  }
}
function Ru(e) {
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((n - r) / a + (n < r ? 6 : 0)) / 6 : i === n ? s = ((r - t) / a + 2) / 6 : s = ((t - n) / a + 4) / 6);
  const c = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: c, v: i };
}
function Po(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function zE(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function hg(e) {
  const { paintCount: t, maskCount: n } = zE(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return r.forEach((a) => {
    String((a == null ? void 0 : a.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: n + o
  };
}
function To(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function el(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function jE(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Ki(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function HE(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function GE(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function WE(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Ob = "pano_suite.ui_settings.v1", Tb = "pano_suite.node_grid_visibility.v1";
let Fo = null, Er = null;
function wl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function KE() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ob)) || "").trim();
    if (!t) return Fo ? wl(Fo) : null;
    const n = JSON.parse(t), r = wl(n);
    return Fo = r, r;
  } catch {
    return Fo ? wl(Fo) : null;
  }
}
function BE(e) {
  var n;
  const t = wl(e);
  Fo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Ob, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Fb() {
  var e;
  if (Er && typeof Er == "object")
    return Er;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Tb)) || "").trim();
    if (!t)
      return Er = {}, Er;
    const n = JSON.parse(t);
    return Er = n && typeof n == "object" ? n : {}, Er;
  } catch {
    return Er = {}, Er;
  }
}
function UE(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = Fb()[n];
  return typeof i == "boolean" ? i : !!t;
}
function YE(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = Fb();
  r[n] = !!t, Er = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Tb, JSON.stringify(r));
  } catch {
  }
}
function XE(e, t) {
  const n = { ...e }, r = t.map((i) => i(e));
  for (const { connect: i, ...o } of r) {
    for (const a of Object.keys(o))
      if (a in n) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(n, o);
  }
  for (const i of r) i.connect(n);
  return n;
}
const bi = /* @__PURE__ */ new Map(), qE = 12;
function JE(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = bi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (bi.delete(t), bi.set(t, n), n);
}
function ZE(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (bi.delete(n), bi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); bi.size > qE; ) {
      const i = bi.keys().next().value;
      if (!i) break;
      bi.delete(i);
    }
}
function QE(e) {
  const {
    comfyMedia: t,
    cutoutV2: n,
    editor: r,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: c,
    mediaSource: p,
    mediaUiImage: f,
    node: h,
    portStillCanvas: g,
    portVideoEl: _,
    readOnly: v,
    runtime: S,
    scheduler: M,
    stageWrap: C,
    state: W,
    stateV2: V,
    stillCanvas: $,
    timelinePlayhead: y,
    type: j,
    uiState: G,
    videoEl: re
  } = e;
  let se, I, H, J, de, xe;
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
  }, he = 9, te = [];
  let R = 0;
  const O = () => {
    var Re, Ke;
    const A = (Re = C == null ? void 0 : C.getBoundingClientRect) == null ? void 0 : Re.call(C), ee = (Ke = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ke.call(o), ke = Math.max(0, Number((A == null ? void 0 : A.width) || 0)), me = ee ? Math.max(0, Number(ee.width || 0)) : 0, F = me > 0 ? me + 14 + 12 : 72, be = Math.max(280, Math.floor(ke - F * 2)), ge = r.fullscreen ? Math.min(1200, be) : be;
    G.videoTransport.shellMaxWidthPx = ge;
  }, ue = () => {
    R || (R = M.requestFrame(() => {
      R = 0, O();
    }));
  }, Me = (A) => {
    if (!(A instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(A.audioTracks) && A.audioTracks.length > 0 || A.audioTracks && typeof A.audioTracks.length == "number" && A.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof A.mozHasAudio == "boolean") return A.mozHasAudio;
    } catch {
    }
    try {
      if (Number(A.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!G.videoTransport.hasAudio;
  }, ze = typeof ResizeObserver < "u" ? new ResizeObserver(() => ue()) : null;
  ze == null || ze.observe(C), o && (ze == null || ze.observe(o)), te.push(() => {
    var A;
    R && (M.cancelFrame(R), R = 0), (A = ze == null ? void 0 : ze.disconnect) == null || A.call(ze);
  }), ue();
  const Xe = () => {
    _e.thumbnailJobId += 1, _e.thumbnailSrc = "", G.videoTransport.thumbnails = [], G.videoTransport.thumbnailCount = he;
  }, ce = async (A, ee, ke) => {
    const me = String(A || "").trim();
    if (!me) {
      Xe();
      return;
    }
    const $e = JE(me);
    if ($e) {
      _e.thumbnailSrc = me, G.videoTransport.thumbnails = $e.thumbnails, G.videoTransport.thumbnailCount = $e.thumbnailCount;
      return;
    }
    const He = ++_e.thumbnailJobId;
    _e.thumbnailSrc = me, G.videoTransport.thumbnails = [], G.videoTransport.thumbnailCount = he;
    const F = hc(document, "editor.thumbnails");
    F.preload = "auto", F.muted = !0, F.playsInline = !0, F.crossOrigin = "anonymous";
    const be = Mn({ label: "editor.thumbnail" });
    try {
      const ge = await new Promise((Wt) => {
        let Ot = !1;
        const pn = (rn) => {
          Ot || (Ot = !0, Wt(rn));
        };
        F.addEventListener("loadedmetadata", () => pn(!0), { once: !0 }), F.addEventListener("canplay", () => pn(!0), { once: !0 }), F.addEventListener("error", () => pn(!1), { once: !0 }), F.src = me, F.load();
      });
      if (_e.thumbnailJobId !== He) return;
      const Re = Number(F.videoWidth || 0), Ke = Number(F.videoHeight || 0);
      if (!ge || Re < 1 || Ke < 1) {
        _e.thumbnailFailedSrcs.add(me);
        return;
      }
      const We = Math.max(0, Number(F.duration || ee || 0)), qe = 46, nt = Math.max(72, Math.round(Re / Ke * qe));
      be.width = nt, be.height = qe;
      const Et = be.getContext("2d");
      if (!Et) return;
      const ht = [], St = (Wt) => new Promise((Ot) => {
        let pn = !1;
        const rn = () => {
          pn || (pn = !0, Ot());
        };
        F.addEventListener("seeked", rn, { once: !0 }), F.addEventListener("error", rn, { once: !0 });
        try {
          F.currentTime = Wt;
        } catch {
          rn();
        }
      });
      for (let Wt = 0; Wt < he; Wt += 1) {
        if (_e.thumbnailJobId !== He) return;
        const Ot = he <= 1 ? 0 : Wt / (he - 1), pn = We > 0 ? Math.max(0, Math.min(We - Math.max(1e-3, 0.5 / Math.max(1, Number(ke || 24))), We * Ot)) : 0;
        if (await St(pn), _e.thumbnailJobId !== He) return;
        Et.clearRect(0, 0, nt, qe), Et.drawImage(F, 0, 0, nt, qe), ht.push({
          id: `thumb-${Wt}`,
          src: be.toDataURL("image/jpeg", 0.72),
          time: pn,
          label: D(pn)
        });
      }
      if (_e.thumbnailJobId !== He) return;
      G.videoTransport.thumbnails = ht, G.videoTransport.thumbnailCount = ht.length || he, ZE(me, {
        thumbnails: ht,
        thumbnailCount: ht.length || he,
        duration: We,
        fps: ke
      });
    } finally {
      F.removeAttribute("src"), F.load(), qu(be);
    }
  };
  te.push(() => {
    Xe();
  });
  const z = qy({
    video: re instanceof HTMLVideoElement ? re : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (A) => M.requestFrame(A),
      cancelFrame: (A) => M.cancelFrame(A)
    },
    fps: Y,
    span: () => {
      if (V) return xe();
      const A = Math.round(Number(G.videoTransport.duration || 0) * Y());
      return re.loop || !(A > 0) ? 1 / 0 : A;
    },
    loop: () => V,
    onFrame: (A) => {
      V ? H(A) : fe(), I({ cause: "frame_view", localOnly: !0, reason: Pt.PLAYHEAD });
    },
    onCapture: () => {
      T() && (S.backgroundDirty = !0);
    },
    onChange: () => {
      fe(), y.playing.value = z.playing, de(), I({ cause: "frame_view", localOnly: !0, reason: Pt.PLAYHEAD });
    }
  });
  te.push(() => z.dispose());
  const w = V && _ instanceof HTMLVideoElement ? Jy({
    video: _,
    onCapture: () => {
      var ke;
      const A = Number(_.videoWidth || 0), ee = Number(_.videoHeight || 0);
      A < 1 || ee < 1 || (g.width = A, g.height = ee, (ke = g.getContext("2d")) == null || ke.drawImage(_, 0, 0), g.__panoFrameIdx += 1, I({ cause: "frame_view", localOnly: !0, reason: Pt.MEDIA }));
    },
    onChange: () => I({ cause: "frame_view", localOnly: !0, reason: Pt.MEDIA })
  }) : null;
  w && te.push(() => w.dispose());
  const pe = V ? $y({
    createImage: (A, ee) => {
      const ke = new Image();
      return ke.onload = ee, ke.onerror = ee, ke.src = A, ke;
    },
    onLoad: () => I({ cause: "frame_view", localOnly: !0, reason: Pt.MEDIA })
  }) : null;
  if (re instanceof HTMLVideoElement) {
    const A = () => {
      Q(), I({ cause: "frame_view", localOnly: !0 });
    }, ee = () => {
      fe({
        hasAudio: G.videoTransport.hasAudio,
        muted: re.muted,
        volume: Number(re.volume ?? G.videoTransport.volume ?? 1)
      });
    }, ke = () => {
      const me = re.dataset.panoSrc;
      me && (_e.failedSrcs.add(me), Q(), I());
    };
    for (const [me, $e] of [
      ["loadedmetadata", A],
      ["loadeddata", A],
      ["canplay", A],
      ["volumechange", ee],
      ["error", ke]
    ])
      re.addEventListener(me, $e), te.push(() => re.removeEventListener(me, $e));
  }
  function Ne(A) {
    return t.uiList(h, A);
  }
  function De(A) {
    return t.uiValue(h, A);
  }
  function oe() {
    const A = String((h == null ? void 0 : h.comfyClass) || (h == null ? void 0 : h.type) || (h == null ? void 0 : h.title) || "");
    return Dl(A) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : j === "stickers" || j === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Pe() {
    const { metaKey: A } = oe(), ee = De(A);
    return Array.isArray(ee) && ee.length > 0 && ee[0] && typeof ee[0] == "object" ? ee[0] : ee && typeof ee == "object" ? ee : null;
  }
  function P(A) {
    return A ? A instanceof HTMLVideoElement ? [
      String(A.currentSrc || A.src || ""),
      Number(A.videoWidth || 0),
      Number(A.videoHeight || 0)
    ].join("|") : A instanceof HTMLCanvasElement ? [
      "canvas",
      Number(A.width || 0),
      Number(A.height || 0),
      String(A.__panoFrameIdx || 0)
    ].join("|") : [
      String(A.currentSrc || A.src || ""),
      Number(A.naturalWidth || A.width || 0),
      Number(A.naturalHeight || A.height || 0)
    ].join("|") : "none";
  }
  function D(A) {
    const ee = Math.max(0, Math.floor(Number(A || 0))), ke = Math.floor(ee / 60), me = ee % 60;
    return `${ke}:${String(me).padStart(2, "0")}`;
  }
  function Y() {
    return V ? W.timeline.fps : _e.metaFps || 1e3;
  }
  function fe(A = {}) {
    const ee = Number(A.duration ?? G.videoTransport.duration ?? 0), ke = Math.max(1, Number(A.fps ?? G.videoTransport.fps ?? 24)), me = z.frame / Y(), $e = Object.prototype.hasOwnProperty.call(A, "ready") ? !!A.ready : !!G.videoTransport.ready, He = z.playing, F = Object.prototype.hasOwnProperty.call(A, "visible") ? !!A.visible : !!G.videoTransport.visible, be = Object.prototype.hasOwnProperty.call(A, "muted") ? !!A.muted : !!(re instanceof HTMLVideoElement ? re.muted : G.videoTransport.muted), ge = Number(
      Object.prototype.hasOwnProperty.call(A, "volume") ? A.volume : re instanceof HTMLVideoElement ? re.volume : G.videoTransport.volume
    ), Re = Object.prototype.hasOwnProperty.call(A, "hasAudio") ? !!A.hasAudio : Me(re), Ke = Object.prototype.hasOwnProperty.call(A, "loop") ? !!A.loop : !!G.videoTransport.loop;
    Object.assign(G.videoTransport, {
      ready: $e,
      playing: He,
      visible: F,
      loop: Ke,
      currentTime: Number.isFinite(me) ? me : 0,
      duration: Number.isFinite(ee) ? ee : 0,
      progressPct: ee > 1e-6 ? Math.max(0, Math.min(100, me / ee * 100)) : 0,
      currentTimeLabel: D(me),
      durationLabel: D(ee),
      frameCount: Math.max(0, Number(A.frameCount ?? G.videoTransport.frameCount ?? 0)),
      fps: ke,
      hasAudio: Re,
      muted: be,
      volume: Math.max(0, Math.min(1, Number.isFinite(ge) ? ge : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(ge) ? ge : 1)) * 100),
      thumbnails: Array.isArray(A.thumbnails) ? A.thumbnails : G.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(A.thumbnailCount ?? G.videoTransport.thumbnailCount ?? he))
    });
  }
  function L() {
    return !!(re instanceof HTMLVideoElement && !V && re.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function Z() {
    if (!(re instanceof HTMLVideoElement) || !G.videoTransport.hasAudio) return;
    const A = !re.muted;
    re.muted = A, !A && Number(re.volume || 0) <= 0 && (re.volume = Math.max(0.01, Number(G.videoTransport.volume || 1))), fe({
      hasAudio: G.videoTransport.hasAudio,
      muted: re.muted,
      volume: Number(re.volume ?? G.videoTransport.volume ?? 1)
    });
  }
  function ae() {
    fe({
      visible: L()
    });
  }
  function T() {
    if (!(re instanceof HTMLVideoElement) || Number(re.videoWidth || 0) < 1 || Number(re.videoHeight || 0) < 1) return !1;
    const A = Number(re.videoWidth || 0), ee = Number(re.videoHeight || 0);
    ($.width !== A || $.height !== ee) && ($.width = A, $.height = ee);
    const ke = $.getContext("2d");
    return ke ? (ke.clearRect(0, 0, A, ee), ke.drawImage(re, 0, 0, A, ee), $.__panoFrameIdx = Number($.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function B() {
    return !z.showsVideo && Number($.width || 0) > 0 && Number($.height || 0) > 0 && Number($.__panoFrameIdx || 0) > 0 ? $ : re instanceof HTMLVideoElement && Number(re.videoWidth || 0) > 0 && Number(re.videoHeight || 0) > 0 && Number(re.readyState || 0) >= 2 ? re : null;
  }
  function U() {
    $.__panoFrameIdx = 0, S.backgroundDirty = !0;
  }
  function Q() {
    if (!(re instanceof HTMLVideoElement)) return null;
    const { videoKey: A } = oe(), ee = gn(h, "background") && Ne(A)[0] || null, ke = p(ee), me = [ke, t.linkedVideoFile(h, q())].filter(Boolean), $e = me.find((We) => !_e.failedSrcs.has(We)) || "";
    _e.videoFailed = !$e && me.length > 0;
    const He = $e && $e === ke ? Pe() : null;
    _e.metaFps = Number(He == null ? void 0 : He.fps) > 0 ? Number(He.fps) : 0;
    const F = Math.max(1, Number((He == null ? void 0 : He.fps) || (V ? W.timeline.fps : 24))), be = re.dataset.panoSrc === $e && Number.isFinite(re.duration) ? re.duration : 0, ge = Number((He == null ? void 0 : He.duration) || ((He == null ? void 0 : He.frames) > 0 ? He.frames / F : be)), Re = Math.max(0, Number((He == null ? void 0 : He.frames) || Math.round(ge * F))), Ke = !!(He != null && He.has_audio) || Me(re);
    return $e && re.dataset.panoSrc !== $e ? (re.pause(), U(), re.dataset.panoSrc = $e, re.loop = !V && !!G.videoTransport.loop, re.muted = !!G.videoTransport.muted, re.volume = Math.max(0, Math.min(1, Number(G.videoTransport.volume ?? 1))), re.src = $e, re.load(), z.setSource(!0), V || z.seek(0)) : !$e && re.getAttribute("src") && (re.pause(), re.removeAttribute("src"), delete re.dataset.panoSrc, re.load(), U(), Xe(), z.setSource(!1)), V || (re.loop = !!G.videoTransport.loop), $e && !V && _e.thumbnailSrc !== $e && !_e.thumbnailFailedSrcs.has($e) && ce($e, ge, F), $e || Xe(), fe({
      ready: !!$e,
      visible: !!$e && L(),
      duration: ge,
      frameCount: Re,
      fps: F,
      hasAudio: Ke,
      loop: !!re.loop,
      muted: !!re.muted,
      volume: Number(re.volume ?? G.videoTransport.volume ?? 1),
      thumbnailCount: G.videoTransport.thumbnailCount
    }), $e || null;
  }
  function ie(A, ee = null) {
    return f(h, A, a, ee || (() => I()));
  }
  function Se(A = null) {
    return gn(h, "external-sticker") ? ie(Ql, A) : null;
  }
  function we() {
    if (!gn(h, "external-sticker")) return null;
    const A = Ne(wE)[0];
    if (!A || typeof A != "object") return null;
    const ee = Ne(SE).map(p).filter(Boolean);
    if (ee.length) return { frames: ee, meta: A };
    const ke = p(Ne(_E)[0] || null);
    return ke ? { src: ke, meta: A } : null;
  }
  function Ae() {
    const A = W.stickers.find(se), ee = A ? we() : null, ke = ee ? Ly(A.clip, r.frame, W.timeline.fps, ee.meta) : null;
    w.follow({ src: (ee == null ? void 0 : ee.src) || "", time: ke, playing: z.advancing, fps: W.timeline.fps });
    const me = A ? Le(A) : null, $e = ee != null && ee.frames ? pe.picture(ee.frames, ke, ee.meta, me) : w.picture(g, me);
    return $e ? { media: $e, revision: P($e), source: Vy(ee, me) } : null;
  }
  function Fe() {
    return !V || !gn(h, "scene") ? null : km(Ne("pano_scene_files"), Ne("pano_scene_meta"), p);
  }
  function Ye() {
    return !V || !gn(h, "external-sticker") ? null : km(Ne("pano_sticker_files"), Ne("pano_sticker_meta"), p);
  }
  function Le(A) {
    var F;
    if (A && typeof A == "object" && (se(A) || A.external === !0))
      return Se(() => {
        oi(h, "image-loaded");
      });
    const ee = V ? je(A) : String(A && typeof A == "object" ? A.asset_id || A.assetId || "" : A || "");
    if (!ee) return null;
    const ke = a.get(ee);
    if (ke) return ke;
    const me = V ? ay(A.source) : (F = W.assets) == null ? void 0 : F[ee], $e = c(me);
    if (!$e) return null;
    const He = new Image();
    return Ab(He, $e), He.onload = () => {
      Cb(He, $e), I();
    }, He.onerror = () => {
      Ib(He, $e), I();
    }, He.src = $e, a.set(ee, He), He;
  }
  function je(A) {
    const { source: ee } = A;
    return ee.filename ? `file:${ee.storage}:${ee.subfolder}:${ee.filename}` : `sticker:${A.id}`;
  }
  function tt() {
    if (j === "cutout" && !n) {
      const $e = B();
      if ($e) return $e;
      const He = s(
        h,
        ["erp_image", "bg_erp"],
        () => I(),
        "background:cutout:erp_image|bg_erp"
      );
      return He && !Id(He) ? He : f(h, "pano_input_images", a, () => I()) || He || null;
    }
    const A = B();
    if (A) return A;
    const ee = gn(h, "background") ? f(h, "pano_input_images", a, () => I()) : null;
    if (ee && !Id(ee)) return ee;
    if (re instanceof HTMLVideoElement && re.dataset.panoSrc) return re;
    const ke = q();
    return s(h, ke, () => I(), `background:${ke.join("|")}`) || ee || null;
  }
  function k() {
    var ee;
    const A = (Array.isArray(h == null ? void 0 : h.inputs) ? h.inputs : []).findIndex((ke) => (ke == null ? void 0 : ke.name) === "source");
    return A >= 0 && h.graph ? String(((ee = h.getInputLink(A)) == null ? void 0 : ee.type) || "") : "";
  }
  function q() {
    if (j === "cutout") return n ? k() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const A = Array.isArray(h == null ? void 0 : h.inputs) ? h.inputs.map((me) => String((me == null ? void 0 : me.name) || "")) : [], ee = A.includes("erp_image"), ke = A.includes("bg_erp");
    return v && (ee || ke) ? ee ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : j === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function u(A) {
    return A ? A instanceof HTMLImageElement ? !!A.complete && Number(A.naturalWidth || A.width || 0) > 0 && Number(A.naturalHeight || A.height || 0) > 0 : A instanceof HTMLVideoElement ? Number(A.videoWidth || 0) > 0 && Number(A.videoHeight || 0) > 0 && Number(A.readyState || 0) >= 2 : Number(A.width || A.naturalWidth || 0) > 0 && Number(A.height || A.naturalHeight || 0) > 0 : !1;
  }
  function ne() {
    if (i.failed) return { status: ar, detail: "renderer" };
    if (!i.ready) return { status: yr, detail: "boot" };
    const A = tt(), ee = _e.videoFailed ? ar : Cd(A, u), ke = [];
    for (const me of J()) {
      if ((me == null ? void 0 : me.visible) === !1) continue;
      const $e = Le(me);
      ke.push(Cd($e, u));
    }
    return mE({
      presented: S.hasPresentedFrame,
      background: ee,
      stickers: ke
    });
  }
  return {
    connect(A) {
      ({
        isExternalSticker: se,
        requestDraw: I,
        setTimelineFrame: H,
        skyStickers: J,
        syncTimeline: de,
        timelineSpanFrames: xe
      } = A);
    },
    videoState: _e,
    videoCleanupFns: te,
    queueVideoTransportLayout: ue,
    playback: z,
    portVideo: w,
    getNodeUiValue: De,
    getMediaRevisionToken: P,
    playbackFps: Y,
    syncVideoTransportState: fe,
    toggleVideoMuted: Z,
    syncVideoTransportVisibility: ae,
    refreshModalVideoSource: Q,
    getStickerUiImage: ie,
    getExternalStickerPreviewImage: Se,
    getPortMedia: we,
    followPortSticker: Ae,
    getStickerImage: Le,
    stickerImageKey: je,
    getConnectedErpImage: tt,
    isDecodedImageReady: u,
    getStageImageStatus: ne,
    sceneFiles: Fe,
    stickerFiles: Ye
  };
}
function eO(e = 80, t = null, n = 8) {
  const r = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(n || 8));
  function s(p) {
    if (r.splice(0, r.length), i = -1, !p || typeof p != "object" || !Array.isArray(p.entries) || (p.entries.forEach((h) => {
      r.push(String(h || ""));
    }), !r.length)) return;
    const f = Number(p.index);
    Number.isInteger(f) ? f === -1 ? i = -1 : i = Math.max(0, Math.min(r.length - 1, f)) : i = r.length - 1;
  }
  function c(p) {
    r[i] !== p && (r.splice(i + 1), r.push(p), r.length > o && r.shift(), i = r.length - 1);
  }
  return s(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(p) {
      c(String(p || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const p = i - 1;
      return p < 0 || p >= r.length ? null : (i = p, r[i]);
    },
    redo() {
      const p = i + 1;
      return p < 0 || p >= r.length ? null : (i = p, r[i]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const p = r.length, f = Math.max(0, p - a), h = i >= 0 ? Math.max(0, Math.min(i, f)) : f, g = r.slice(h, h + a), _ = i < 0 ? -1 : Math.max(-1, Math.min(g.length - 1, i - h));
      return {
        version: 1,
        entries: g,
        index: _
      };
    },
    hydrate: s
  };
}
const tO = 80;
function Db(e) {
  return JSON.stringify(zk(e));
}
function nO(e) {
  return eO(tO, { entries: [Db(e)], index: 0 });
}
function rO(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let c, p, f, h, g, _, v, S, M, C, W, V, $, y;
  function j() {
    n || (W(), cy(i), !(o && i.stickers.some(h)) && (t.historyController.commitActionGroup(Db(i)), $()));
  }
  function G(se) {
    var de, xe;
    if (n) return;
    C();
    const I = se < 0 ? t.historyController.undo() : t.historyController.redo();
    if ($(), !I) return;
    const H = jk(i, I), J = (de = i.timeline) == null ? void 0 : de.fps;
    Object.keys(i).forEach((_e) => delete i[_e]), Object.assign(i, H.state), W(!1), o && i.timeline.fps !== J && v.seek(Math.round(t.frame * i.timeline.fps / J)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((xe = f()) == null ? void 0 : xe.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && c(), S(), r.backgroundDirty = !0, H.paintingChanged ? _() : g(), V(), y(), p(), M({ cause: "cutout_frame" });
  }
  function re() {
    var H, J;
    const se = Array.isArray((H = t.historyController) == null ? void 0 : H.entries) ? t.historyController.entries : [], I = Number((J = t.historyController) == null ? void 0 : J.index);
    return {
      canUndo: !n && se.length > 1 && I > 0,
      canRedo: !n && se.length > 1 && I >= 0 && I < se.length - 1
    };
  }
  return {
    connect(se) {
      ({
        clearWorldSelection: c,
        commitState: p,
        getActiveCutoutShot: f,
        isUploadingSticker: h,
        markObjectVisualsDirty: g,
        markPaintStrokeVisualsDirty: _,
        playback: v,
        releaseHiddenSelection: S,
        requestDraw: M,
        stopTimelinePlayback: C,
        syncCutoutShot: W,
        syncPaintUi: V,
        syncUndoRedoButtons: $,
        updateSidePanel: y
      } = se);
    },
    pushHistory: j,
    restoreHistory: G,
    getHistoryCapabilities: re
  };
}
function iO(e) {
  const {
    canvas: t,
    cutoutV2: n,
    editor: r,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let c, p, f, h, g, _, v;
  function S() {
    return s === "stickers" ? M() : o.shots;
  }
  function M() {
    return i ? o.stickers.filter((k) => k.placement === "sky") : o.stickers;
  }
  function C(k) {
    return i && w(k);
  }
  function W(k) {
    return k.source.kind === "file" && !k.source.filename && !k.source.data_url;
  }
  function V(k) {
    return C(k) ? gf(k, r.frame) : k;
  }
  function $(k, q) {
    C(k) ? oy(k, r.frame, q) : Object.assign(k, q);
  }
  function y() {
    const k = o.painting || (o.painting = Yo(null));
    return Array.isArray(k.groups) || (k.groups = []), k.groups;
  }
  function j(k = "paint") {
    var A, ee;
    const q = Array.isArray((ee = (A = o.painting) == null ? void 0 : A[k]) == null ? void 0 : ee.strokes) ? o.painting[k].strokes : [], u = [], ne = /* @__PURE__ */ new Set();
    for (const ke of q) {
      const me = String((ke == null ? void 0 : ke.actionGroupId) || "").trim();
      !me || ne.has(me) || (ne.add(me), u.push(me));
    }
    return u;
  }
  function G() {
    return j("paint");
  }
  function re(k, q) {
    const u = String(q || "").trim();
    return u ? `${k === "mask" ? "mask" : "paint"}:${u}` : "";
  }
  function se(k) {
    const q = String(k || "").trim();
    return q ? `raster:${q}` : "";
  }
  function I(k) {
    const q = String(k || "").trim();
    if (!q) return "";
    const u = q.match(/^raster:(.*)$/);
    return String(u ? u[1] || "" : q).trim();
  }
  function H(k, q = null) {
    const u = String(k || "").trim();
    if (!u) return { layerKind: "paint", actionGroupId: "" };
    const ne = u.match(/^(paint|mask):(.*)$/);
    return ne ? { layerKind: ne[1] === "mask" ? "mask" : "paint", actionGroupId: String(ne[2] || "").trim() } : { layerKind: q === "mask" ? "mask" : "paint", actionGroupId: u };
  }
  function J() {
    var q;
    let k = -1;
    for (const u of M())
      k = Math.max(k, Number((u == null ? void 0 : u.z_index) || 0));
    for (const u of y())
      k = Math.max(k, Number((u == null ? void 0 : u.z_index) || 0));
    for (const u of Array.isArray((q = o.painting) == null ? void 0 : q.raster_objects) ? o.painting.raster_objects : [])
      String((u == null ? void 0 : u.layerKind) || "paint") === "paint" && (k = Math.max(k, Number((u == null ? void 0 : u.z_index) || 0)));
    return k + 1;
  }
  function de(k, q = null) {
    const u = String(k || "").trim();
    if (!u) return null;
    const ne = y();
    let A = ne.find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === u);
    return A ? q != null && (A.z_index = Math.max(0, Number(q || 0))) : (A = {
      id: u,
      type: "strokeGroup",
      actionGroupId: u,
      z_index: q == null ? J() : Math.max(0, Number(q || 0)),
      locked: !1,
      frame: null
    }, ne.push(A)), A;
  }
  function xe(k) {
    if (!(k != null && k.centerUv)) return [];
    const q = Number(k.centerUv.u || 0), u = Number(k.centerUv.v || 0), ne = Number(k.halfW || 0), A = Number(k.halfH || 0);
    return [
      {
        u: ((q - ne) % 1 + 1) % 1,
        v: Ie(u - A, 0, 1)
      },
      {
        u: ((q + ne) % 1 + 1) % 1,
        v: Ie(u - A, 0, 1)
      },
      {
        u: ((q + ne) % 1 + 1) % 1,
        v: Ie(u + A, 0, 1)
      },
      {
        u: ((q - ne) % 1 + 1) % 1,
        v: Ie(u + A, 0, 1)
      }
    ];
  }
  function _e() {
    const k = new Set(G()), u = y().filter((ne) => k.has(String((ne == null ? void 0 : ne.actionGroupId) || "")));
    return k.forEach((ne) => {
      u.some((A) => String((A == null ? void 0 : A.actionGroupId) || "") === ne) || u.push({
        id: ne,
        type: "strokeGroup",
        actionGroupId: ne,
        z_index: J(),
        locked: !1,
        frame: null
      });
    }), u.sort((ne, A) => Number((ne == null ? void 0 : ne.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0)), o.painting.groups = u, u;
  }
  function he(k, q, u) {
    var We;
    const ne = (qe) => (Number(qe || 0) % 1 + 1) % 1, A = [];
    for (const qe of u) {
      const nt = qe == null ? void 0 : qe.geometry, Et = (nt == null ? void 0 : nt.geometryKind) === "lasso_fill" ? nt == null ? void 0 : nt.points : (nt == null ? void 0 : nt.processedPoints) || (nt == null ? void 0 : nt.rawPoints) || (nt == null ? void 0 : nt.points) || [];
      Array.isArray(Et) && A.push(...Et);
    }
    if (!A.length) return null;
    const ee = ne(((We = A[0]) == null ? void 0 : We.u) || 0);
    let ke = 0, me = 0;
    A.forEach((qe) => {
      const nt = ne((qe == null ? void 0 : qe.u) || 0);
      ke += ee + fe(nt, ee), me += Number((qe == null ? void 0 : qe.v) || 0);
    });
    const $e = (ke / A.length % 1 + 1) % 1;
    let He = 1 / 0, F = -1 / 0, be = 1 / 0, ge = -1 / 0;
    A.forEach((qe) => {
      const nt = ne((qe == null ? void 0 : qe.u) || 0), Et = fe(nt, $e);
      He = Math.min(He, Et), F = Math.max(F, Et);
      const ht = Number((qe == null ? void 0 : qe.v) || 0);
      be = Math.min(be, ht), ge = Math.max(ge, ht);
    });
    const Re = u.reduce((qe, nt) => {
      const Et = p(String((nt == null ? void 0 : nt.toolKind) || "pen")), ht = $n[Et] || $n[Jr], St = Math.max(1, Number((nt == null ? void 0 : nt.size) || 10)) * Math.max(0.1, Number((ht == null ? void 0 : ht.sizeScale) ?? 1));
      return Math.max(qe, St);
    }, 0), Ke = Math.max(35e-4, Re / 2048);
    return {
      centerUv: { u: (($e + (He + F) * 0.5) % 1 + 1) % 1, v: Ie((be + ge) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (F - He) * 0.5 + Ke,
      halfH: (ge - be) * 0.5 + Ke,
      uvPad: Ke
    };
  }
  function te(k, q, u) {
    const ne = String(k || "").trim();
    if (!ne) return null;
    const A = y().find((ke) => String((ke == null ? void 0 : ke.actionGroupId) || "") === ne);
    if (!A) return null;
    const ee = u || P(ne, q);
    return A.frame = he(ne, q, ee), A.frame;
  }
  function R() {
    var ne;
    const k = M().map((A) => ({
      type: "sticker",
      id: String((A == null ? void 0 : A.id) || ""),
      z_index: Number((A == null ? void 0 : A.z_index) || 0),
      item: A
    })), q = _e().map((A) => ({
      type: "strokeGroup",
      id: String((A == null ? void 0 : A.id) || (A == null ? void 0 : A.actionGroupId) || ""),
      actionGroupId: String((A == null ? void 0 : A.actionGroupId) || ""),
      z_index: Number((A == null ? void 0 : A.z_index) || 0),
      item: A
    })), u = (Array.isArray((ne = o.painting) == null ? void 0 : ne.raster_objects) ? o.painting.raster_objects : []).filter((A) => String((A == null ? void 0 : A.layerKind) || "paint") === "paint").map((A) => ({
      type: "rasterObject",
      id: String((A == null ? void 0 : A.id) || ""),
      z_index: Number((A == null ? void 0 : A.z_index) || 0),
      item: A
    }));
    return [...k, ...q, ...u].sort((A, ee) => Number(A.z_index || 0) - Number(ee.z_index || 0));
  }
  function O(k = !0) {
    var u, ne, A, ee, ke, me;
    const q = R().filter(($e) => $e.type === "strokeGroup").map(($e) => String($e.actionGroupId || "")).filter(($e) => !!$e);
    if (k) {
      const $e = String(((ne = (u = r.interaction) == null ? void 0 : u.stroke) == null ? void 0 : ne.actionGroupId) || "").trim(), He = String(((ee = (A = r.interaction) == null ? void 0 : A.stroke) == null ? void 0 : ee.layerKind) || "").trim(), F = String(((me = (ke = r.interaction) == null ? void 0 : ke.stroke) == null ? void 0 : me.toolKind) || "").trim();
      $e && He === "paint" && F !== "eraser" && !q.includes($e) && q.push($e);
    }
    return q;
  }
  function ue(k = !0) {
    var me, $e, He, F, be, ge;
    const q = R();
    if (!k) return q;
    const u = String((($e = (me = r.interaction) == null ? void 0 : me.stroke) == null ? void 0 : $e.actionGroupId) || "").trim(), ne = String(((F = (He = r.interaction) == null ? void 0 : He.stroke) == null ? void 0 : F.layerKind) || "").trim(), A = String(((ge = (be = r.interaction) == null ? void 0 : be.stroke) == null ? void 0 : ge.toolKind) || "").trim();
    if (!u || ne !== "paint" || A === "eraser" || q.some((Re) => Re.type === "strokeGroup" && String(Re.actionGroupId || "") === u))
      return q;
    const ee = _();
    let ke = q.reduce((Re, Ke) => Math.max(Re, Number((Ke == null ? void 0 : Ke.z_index) || 0)), -1) + 1;
    return ee && Pe(ee) && String(ee.actionGroupId || "") === u && (ke = Number(ee.z_index || 0)), [
      ...q,
      {
        type: "strokeGroup",
        id: u,
        actionGroupId: u,
        z_index: ke,
        item: null
      }
    ].sort((Re, Ke) => Number((Re == null ? void 0 : Re.z_index) || 0) - Number((Ke == null ? void 0 : Ke.z_index) || 0));
  }
  function Me() {
    return y().slice().sort((k, q) => Number((k == null ? void 0 : k.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0)).map((k) => oe(re("paint", (k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || ""))).filter(Boolean);
  }
  function ze() {
    var k;
    return (Array.isArray((k = o.painting) == null ? void 0 : k.raster_objects) ? o.painting.raster_objects : []).filter((q) => String((q == null ? void 0 : q.layerKind) || "paint") === "paint").slice().sort((q, u) => Number((q == null ? void 0 : q.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((q) => Ne(se((q == null ? void 0 : q.id) || ""))).filter(Boolean);
  }
  function Xe() {
    return n || !Array.isArray(o.stickers) ? [] : M();
  }
  function ce() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Xe()];
  }
  function z(k) {
    return !!k && Array.isArray(o.shots) && o.shots.includes(k);
  }
  function w(k) {
    return !!k && Array.isArray(o.stickers) && o.stickers.includes(k);
  }
  function pe() {
    var k;
    return Array.isArray((k = o.painting) == null ? void 0 : k.raster_objects) ? o.painting.raster_objects : [];
  }
  function Ne(k) {
    const q = I(k);
    if (!q) return null;
    const u = pe().find((ne) => String((ne == null ? void 0 : ne.id) || "").trim() === q);
    return !u || String((u == null ? void 0 : u.layerKind) || "paint") !== "paint" ? null : {
      ...u,
      id: se(q),
      type: "rasterObject",
      rasterObjectId: q
    };
  }
  function De(k) {
    if (!k || typeof k != "object" || String(k.type || "") !== "rasterObject") return !1;
    const q = I(k.rasterObjectId || k.id || "");
    return !!q && !!Ne(se(q));
  }
  function oe(k) {
    const q = H(k), u = String(q.actionGroupId || "").trim();
    if (!u) return null;
    const ne = y().find((A) => String((A == null ? void 0 : A.id) || (A == null ? void 0 : A.actionGroupId) || "") === u || String((A == null ? void 0 : A.actionGroupId) || "") === u);
    return ne ? {
      ...ne,
      id: re("paint", u),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: u
    } : null;
  }
  function Pe(k) {
    if (!k || typeof k != "object" || String(k.type || "") !== "strokeGroup") return !1;
    const q = String(k.actionGroupId || "").trim(), u = String(k.layerKind || "paint").trim() || "paint";
    return !!q && !!oe(re(u, q));
  }
  function P(k, q = null) {
    const u = H(k, q), ne = String(u.actionGroupId || "").trim();
    return ne ? h(u.layerKind).filter((A) => String((A == null ? void 0 : A.actionGroupId) || "").trim() === ne) : [];
  }
  function D(k, q = "paint") {
    const u = String(k || "").trim(), A = `geomv5:${String(q || "paint").trim() || "paint"}:${u}:${r.mode}:${g()}`;
    if (r.mode === "frame") {
      const ee = c(), ke = String((ee == null ? void 0 : ee.id) || ""), me = ee ? f(ee) : null;
      return `${A}:frame:${ke}:${Math.round(Number((ee == null ? void 0 : ee.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.roll_deg) ?? (ee == null ? void 0 : ee.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((me == null ? void 0 : me.x) || 0))}:${Math.round(Number((me == null ? void 0 : me.y) || 0))}:${Math.round(Number((me == null ? void 0 : me.w) || 0))}:${Math.round(Number((me == null ? void 0 : me.h) || 0))}`;
    }
    return `${A}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Y(k, q, u) {
    return !k || typeof k != "object" ? k : {
      ...k,
      u: ((Number(k.u || 0) + Number(q || 0)) % 1 + 1) % 1,
      v: Ie(Number(k.v || 0) + Number(u || 0), 0, 1)
    };
  }
  function fe(k, q) {
    let u = Number(k || 0) - Number(q || 0);
    for (; u > 0.5; ) u -= 1;
    for (; u < -0.5; ) u += 1;
    return u;
  }
  function L(k, q = null, u = null) {
    var He;
    const ne = H(k, q), A = Array.isArray(u) ? u : P(ne.actionGroupId, ne.layerKind), ee = [];
    if (A.forEach((F) => {
      const be = (F == null ? void 0 : F.geometry) || null, ge = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [];
      Array.isArray(ge) && ee.push(...ge);
    }), !ee.length) return { u: 0.5, v: 0.5 };
    const ke = Number(((He = ee[0]) == null ? void 0 : He.u) || 0);
    let me = 0, $e = 0;
    return ee.forEach((F) => {
      me += ke + fe(Number((F == null ? void 0 : F.u) || 0), ke), $e += Number((F == null ? void 0 : F.v) || 0);
    }), {
      u: (me / ee.length % 1 + 1) % 1,
      v: Ie($e / ee.length, 0, 1)
    };
  }
  function Z(k, q, u = 1, ne = 0) {
    if (!k || typeof k != "object") return k;
    const A = Number((q == null ? void 0 : q.u) || 0), ee = Number((q == null ? void 0 : q.v) || 0), ke = fe(Number(k.u || 0), A), me = Number(k.v || 0) - ee, $e = Number(ne || 0) * zr, He = Math.cos($e), F = Math.sin($e), be = Math.max(0.02, Number(u || 1)), ge = (ke * He - me * F) * be, Re = (ke * F + me * He) * be;
    return {
      ...k,
      u: ((A + ge) % 1 + 1) % 1,
      v: Ie(ee + Re, 0, 1)
    };
  }
  function ae(k, q, u, ne = null, A = null, ee = null) {
    const ke = H(k, A), me = String(ke.actionGroupId || "").trim();
    if (!me) return !1;
    const $e = h(ke.layerKind), He = Array.isArray(ne) ? new Map(ne.map((be) => [String((be == null ? void 0 : be.id) || ""), be])) : null;
    let F = !1;
    if ($e.forEach((be) => {
      if (String((be == null ? void 0 : be.actionGroupId) || "").trim() !== me) return;
      const ge = (He == null ? void 0 : He.get(String((be == null ? void 0 : be.id) || ""))) || be, Re = be == null ? void 0 : be.geometry, Ke = ge == null ? void 0 : ge.geometry;
      !Re || !Ke || (Array.isArray(Ke.points) && (Re.points = Ke.points.map((We) => Y(We, q, u)), F = !0), Array.isArray(Ke.rawPoints) && (Re.rawPoints = Ke.rawPoints.map((We) => Y(We, q, u)), F = !0), Array.isArray(Ke.processedPoints) && (Re.processedPoints = Ke.processedPoints.map((We) => Y(We, q, u)), F = !0));
    }), F && ee) {
      const be = y().find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === me);
      be && (be.frame = null);
    }
    return F;
  }
  function T(k, q = 1, u = 0, ne = null, A = null, ee = null) {
    const ke = H(k, A), me = String(ke.actionGroupId || "").trim();
    if (!me) return !1;
    const $e = h(ke.layerKind), He = Array.isArray(ne) ? ne : P(me, ke.layerKind), F = Array.isArray(He) ? new Map(He.map((Re) => [String((Re == null ? void 0 : Re.id) || ""), Re])) : null, be = (ee == null ? void 0 : ee.centerUv) ?? L(me, ke.layerKind, He);
    let ge = !1;
    if ($e.forEach((Re) => {
      if (String((Re == null ? void 0 : Re.actionGroupId) || "").trim() !== me) return;
      const Ke = (F == null ? void 0 : F.get(String((Re == null ? void 0 : Re.id) || ""))) || Re, We = Re == null ? void 0 : Re.geometry, qe = Ke == null ? void 0 : Ke.geometry;
      !We || !qe || (Array.isArray(qe.points) && (We.points = qe.points.map((nt) => Z(nt, be, q, u)), ge = !0), Array.isArray(qe.rawPoints) && (We.rawPoints = qe.rawPoints.map((nt) => Z(nt, be, q, u)), ge = !0), Array.isArray(qe.processedPoints) && (We.processedPoints = qe.processedPoints.map((nt) => Z(nt, be, q, u)), ge = !0));
    }), ge && ee) {
      const Re = y().find((Ke) => String((Ke == null ? void 0 : Ke.actionGroupId) || "") === me);
      Re && (Re.frame = null);
    }
    return ge;
  }
  function B(k, q, u, ne = null) {
    const A = I(k);
    if (!A) return !1;
    const ee = pe().find((F) => String((F == null ? void 0 : F.id) || "").trim() === A);
    if (!ee) return !1;
    const ke = ne && typeof ne == "object" ? ne : ee, me = (ke == null ? void 0 : ke.transform) || {}, $e = Number(me.du || 0) + Number(q || 0), He = Ie(Number(me.dv || 0) + Number(u || 0), -1, 1);
    return ee.transform || (ee.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ee.transform.du = $e, ee.transform.dv = He, !0;
  }
  function U(k, q = 1, u = null) {
    const ne = I(k);
    if (!ne) return !1;
    const A = pe().find((He) => String((He == null ? void 0 : He.id) || "").trim() === ne);
    if (!A) return !1;
    const ee = u && typeof u == "object" ? u : A, ke = (ee == null ? void 0 : ee.transform) || {}, me = Math.max(0.01, Number(ke.scale || 1)), $e = Ie(me * Math.max(0.01, Number(q || 1)), 0.01, 100);
    return A.transform || (A.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), A.transform.scale = $e, !0;
  }
  function Q() {
    return J();
  }
  function ie(k) {
    var q;
    return !k || typeof k != "object" ? !1 : a ? ((q = k.source) == null ? void 0 : q.kind) === "port" : String(k.id || "") === zf || String(k.source_kind || "") === vE;
  }
  function Se(k) {
    return !!(k && typeof k == "object" && k.visible === !1);
  }
  function we(k) {
    return ie(k) && Se(k) ? Sy : 1;
  }
  function Ae(k, q, u = 1, ne = 0) {
    if (!k || typeof k != "object") return k;
    const A = Number((q == null ? void 0 : q.u) || 0), ee = Number((q == null ? void 0 : q.v) || 0), ke = fe(Number(k.u || 0), A), me = Number(k.v || 0) - ee, $e = Math.max(0.02, Number(u || 1)), He = Number(ne || 0) * zr, F = Math.cos(He), be = Math.sin(He), ge = ke / $e, Re = me / $e, Ke = ge * F + Re * be, We = -ge * be + Re * F;
    return {
      ...k,
      u: ((A + Ke) % 1 + 1) % 1,
      v: ee + We
    };
  }
  function Fe(k) {
    const q = (k == null ? void 0 : k.bbox) || null, u = (k == null ? void 0 : k.transform) || {};
    return q ? {
      u: (((Number(q.u0 || 0) + Number(q.u1 || 0)) * 0.5 + Number(u.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(q.v0 || 0) + Number(q.v1 || 0)) * 0.5 + Number(u.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ye(k) {
    var $e, He, F, be;
    const q = (k == null ? void 0 : k.bbox) || null;
    if (!q) return [];
    const u = {
      u: (Number(q.u0 || 0) + Number(q.u1 || 0)) * 0.5,
      v: (Number(q.v0 || 0) + Number(q.v1 || 0)) * 0.5
    }, ne = Math.max(0.01, Number((($e = k == null ? void 0 : k.transform) == null ? void 0 : $e.scale) || 1)), A = Number(((He = k == null ? void 0 : k.transform) == null ? void 0 : He.rot_deg) || 0), ee = Number(((F = k == null ? void 0 : k.transform) == null ? void 0 : F.du) || 0), ke = Number(((be = k == null ? void 0 : k.transform) == null ? void 0 : be.dv) || 0);
    return [
      { u: Number(q.u0 || 0), v: Number(q.v0 || 0) },
      { u: Number(q.u1 || 0), v: Number(q.v0 || 0) },
      { u: Number(q.u1 || 0), v: Number(q.v1 || 0) },
      { u: Number(q.u0 || 0), v: Number(q.v1 || 0) }
    ].map((ge) => Y(Z(ge, u, ne, A), ee, ke));
  }
  function Le(k) {
    const q = I((k == null ? void 0 : k.rasterObjectId) || (k == null ? void 0 : k.id) || ""), u = (k == null ? void 0 : k.transform) || {}, ne = (k == null ? void 0 : k.bbox) || {}, A = `${q}:${r.mode}:${g()}:${ne.u0}:${ne.v0}:${ne.u1}:${ne.v1}:${u.du}:${u.dv}:${u.rot_deg}:${u.scale}`;
    if (r.mode === "frame") {
      const ee = c(), ke = ee ? f(ee) : null;
      return `${A}:frame:${String((ee == null ? void 0 : ee.id) || "")}:${Math.round(Number((ke == null ? void 0 : ke.x) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.y) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.w) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.h) || 0))}`;
    }
    return `${A}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function je(k) {
    const q = String((k == null ? void 0 : k.id) || ""), u = z(k) ? "frame" : w(k) ? "sticker" : "item", ne = V(k), A = [
      u,
      q,
      r.mode,
      Number((ne == null ? void 0 : ne.yaw_deg) || 0).toFixed(4),
      Number((ne == null ? void 0 : ne.pitch_deg) || 0).toFixed(4),
      Number((ne == null ? void 0 : ne.hFOV_deg) || 0).toFixed(4),
      Number((ne == null ? void 0 : ne.vFOV_deg) || 0).toFixed(4),
      Number((ne == null ? void 0 : ne.rot_deg) || 0).toFixed(4),
      Number((ne == null ? void 0 : ne.roll_deg) || 0).toFixed(4),
      ni(ne),
      C(k) && v(k)
    ].join(":");
    if (r.mode === "frame") {
      const ee = c(), ke = ee ? f(ee) : null;
      return `${A}:frame:${String((ee == null ? void 0 : ee.id) || "")}:${Math.round(Number((ke == null ? void 0 : ke.x) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.y) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.w) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.h) || 0))}`;
    }
    return `${A}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function tt() {
    R().forEach((q, u) => {
      q.type === "sticker" && q.item && (q.item.z_index = u), q.type === "strokeGroup" && q.item && (q.item.z_index = u), q.type === "rasterObject" && q.item && (q.item.z_index = u);
    });
  }
  return {
    connect(k) {
      ({
        getActiveCutoutShot: c,
        getBrushPresetIdForTool: p,
        getFrameViewRect: f,
        getPaintingLayerList: h,
        getPaintingRevisionKey: g,
        getSelected: _,
        sceneStickerShown: v
      } = k);
    },
    getList: S,
    skyStickers: M,
    isSceneSticker: C,
    isUploadingSticker: W,
    poseOf: V,
    writePose: $,
    getPaintingGroupList: y,
    makeStrokeGroupSelectionId: re,
    makeRasterObjectSelectionId: se,
    parseRasterObjectSelectionId: I,
    ensurePaintingGroupEntry: de,
    getFrameCornersUv: xe,
    ensureGroupFrame: te,
    getDisplayListObjects: R,
    getOrderedPaintGroupIds: O,
    getOrderedDisplayListObjects: ue,
    getSelectableStrokeGroupItems: Me,
    getSelectableRasterObjectItems: ze,
    cutoutStickers: Xe,
    getCutoutSelectableItems: ce,
    isShotItem: z,
    isStickerItem: w,
    getRasterObjectList: pe,
    getRasterObjectItem: Ne,
    isRasterObjectItem: De,
    getStrokeGroupItem: oe,
    isStrokeGroupItem: Pe,
    getStrokeGroupStrokes: P,
    getStrokeGeomCacheKey: D,
    shortestWrappedDelta: fe,
    getStrokeGroupCenterUv: L,
    applyStrokeGroupOffset: ae,
    applyStrokeGroupTransform: T,
    applyRasterObjectOffset: B,
    applyRasterObjectTransform: U,
    getNextStickerZIndex: Q,
    isExternalSticker: ie,
    isStickerHidden: Se,
    getStickerDisplayAlpha: we,
    inverseTransformErpPointAround: Ae,
    getRasterObjectCenterUv: Fe,
    getRasterObjectTransformedErpPoints: Ye,
    getRasterObjectGeomCacheKey: Le,
    getSceneItemGeomCacheKey: je,
    normalizeDisplayZIndices: tt
  };
}
function oO(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    sceneV2: i,
    shotEditor: o,
    state: a,
    timeline: s,
    type: c
  } = e;
  let p, f, h, g, _, v, S, M, C, W, V, $, y, j, G, re, se, I, H, J, de, xe, _e, he, te, R, O, ue, Me, ze, Xe, ce;
  function z() {
    const k = String(t.selectedId || "");
    if (!k) return null;
    const q = y(k);
    if (q) return q;
    const u = W(k);
    return u || (o ? v().find((ne) => String((ne == null ? void 0 : ne.id) || "") === k) || null : M().find((ne) => String((ne == null ? void 0 : ne.id) || "") === k) || null);
  }
  function w() {
    const k = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], q = [], u = /* @__PURE__ */ new Set();
    return k.forEach((ne) => {
      const A = String(ne || "").trim();
      if (!A || u.has(A)) return;
      u.add(A);
      const ee = A === String(t.selectedId || "") ? z() : y(A) || W(A) || (o ? v().find((ke) => String((ke == null ? void 0 : ke.id) || "") === A) : M().find((ke) => String((ke == null ? void 0 : ke.id) || "") === A));
      ee && q.push(ee);
    }), q;
  }
  function pe(k = null) {
    const q = Array.isArray(k) ? k : w();
    if (!q || q.length < 2) return null;
    const u = q.map((He) => he(He)).filter((He) => (He == null ? void 0 : He.visible) && Array.isArray(He.corners) && He.corners.length);
    if (!u.length) return null;
    const ne = u.flatMap((He) => He.corners.map((F) => Number((F == null ? void 0 : F.x) || 0))), A = u.flatMap((He) => He.corners.map((F) => Number((F == null ? void 0 : F.y) || 0))), ee = Math.min(...ne), ke = Math.max(...ne), me = Math.min(...A), $e = Math.max(...A);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ee + ke) * 0.5, y: (me + $e) * 0.5 },
      corners: [
        { x: ee, y: me },
        { x: ke, y: me },
        { x: ke, y: $e },
        { x: ee, y: $e }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ee + ke) * 0.5, y: me, a: { x: ee, y: me }, b: { x: ke, y: me } },
        { edge: "right", x: ke, y: (me + $e) * 0.5, a: { x: ke, y: me }, b: { x: ke, y: $e } },
        { edge: "bottom", x: (ee + ke) * 0.5, y: $e, a: { x: ke, y: $e }, b: { x: ee, y: $e } },
        { edge: "left", x: ee, y: (me + $e) * 0.5, a: { x: ee, y: $e }, b: { x: ee, y: me } }
      ],
      rotateStemBase: { x: (ee + ke) * 0.5, y: me },
      rotateHandle: { x: (ee + ke) * 0.5, y: me - 30 }
    };
  }
  function Ne(k) {
    const q = String((k == null ? void 0 : k.id) || "").trim();
    return !!q && Array.isArray(t.selectedIds) && t.selectedIds.includes(q);
  }
  function De() {
    const k = z();
    return k ? de(k) || re(k) ? "stroke" : I(k) ? "frame" : "image" : null;
  }
  function oe(k) {
    if (!k || typeof k != "object") return !1;
    if (de(k)) {
      const q = String(k.actionGroupId || k.id || "").trim(), u = C().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || (ne == null ? void 0 : ne.id) || "").trim() === q);
      return (u == null ? void 0 : u.locked) === !0;
    }
    if (re(k)) {
      const q = R(k.rasterObjectId || k.id || ""), u = V().find((ne) => String((ne == null ? void 0 : ne.id) || "").trim() === q);
      return (u == null ? void 0 : u.locked) === !0;
    }
    return k.locked === !0;
  }
  function Pe(k = null) {
    const q = Array.isArray(k) ? k : w();
    return q.length > 0 && q.every((u) => oe(u));
  }
  function P(k, q) {
    const u = q === !0;
    if (!k || typeof k != "object") return !1;
    if (de(k)) {
      const ne = String(k.actionGroupId || k.id || "").trim(), A = C().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || (ee == null ? void 0 : ee.id) || "").trim() === ne);
      return !A || A.locked === u ? !1 : (A.locked = u, !0);
    }
    if (re(k)) {
      const ne = R(k.rasterObjectId || k.id || ""), A = V().find((ee) => String((ee == null ? void 0 : ee.id) || "").trim() === ne);
      return !A || A.locked === u ? !1 : (A.locked = u, !0);
    }
    return k.locked === u ? !1 : (k.locked = u, !0);
  }
  function D() {
    if (n) return;
    const k = w();
    if (!k.length) return;
    const q = !Pe(k);
    let u = !1;
    k.forEach((ne) => {
      P(ne, q) && (u = !0);
    }), u && (ue(), f(), Xe(), ce(), Me());
  }
  function Y(k) {
    Ae(), s.selection = null, t.selectedId = (k == null ? void 0 : k.id) || null, t.selectedIds = k != null && k.id ? [k.id] : [], k && J(k) ? a.active.selected_sticker_id = k.id || null : a.active.selected_sticker_id = null, k && I(k) ? a.active.selected_shot_id = k.id || null : k ? I(k) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function fe(k, q = null) {
    const u = [], ne = /* @__PURE__ */ new Set();
    (Array.isArray(k) ? k : []).forEach((ke) => {
      const me = String((ke == null ? void 0 : ke.id) || "").trim();
      !me || ne.has(me) || (ne.add(me), u.push(me));
    }), t.selectedIds = u, Ae(), s.selection = null;
    const A = String(q || "").trim();
    t.selectedId = A && u.includes(A) ? A : u[u.length - 1] || null;
    const ee = z();
    a.active.selected_sticker_id = ee && J(ee) && ee.id || null, ee && I(ee) ? a.active.selected_shot_id = ee.id || null : u.length || (a.active.selected_shot_id = null);
  }
  function L() {
    const k = (Array.isArray(a.shots) ? a.shots : []).map((u, ne) => ({
      kind: "frame",
      item: u,
      label: String((u == null ? void 0 : u.label) || `Frame ${ne + 1}`)
    })), q = g().map((u, ne) => {
      var ee, ke;
      const A = G(u) ? String(u.id || zf) : String(((ke = (ee = a.assets) == null ? void 0 : ee[u.asset_id]) == null ? void 0 : ke.name) || u.asset_id || u.id || `Image ${ne + 1}`);
      return {
        kind: "image",
        item: u,
        label: A
      };
    });
    return [...k, ...q];
  }
  function Z(k) {
    return k === "frame" ? Ue.camera : k === "stroke" ? Ue.paintbrush_vertical_tool : Ue.image;
  }
  function ae(k) {
    return !k || !k.item ? {
      label: String((k == null ? void 0 : k.label) || ""),
      icon: null
    } : {
      label: String(k.label || ""),
      icon: Z(k.kind)
    };
  }
  function T() {
    if (n) return;
    const k = z();
    !k || !G(k) || (k.visible = H(k), Le(), xe(), ue(), f(), ce(), Xe(), Me());
  }
  function B() {
    if (n || c !== "stickers") return;
    const k = z();
    if (!k || !G(k)) return;
    const q = k.initial_pose;
    if (!q || typeof q != "object") return;
    k.yaw_deg = Number(q.yaw_deg ?? k.yaw_deg ?? 0), k.pitch_deg = Number(q.pitch_deg ?? k.pitch_deg ?? 0), k.hFOV_deg = Number(q.hFOV_deg ?? k.hFOV_deg ?? 30);
    const u = $(Ql, () => {
      Me();
    });
    u && (u.complete || u.naturalWidth || u.width) ? k.vFOV_deg = h(
      Number(q.hFOV_deg ?? k.hFOV_deg ?? 30),
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    ) : k.vFOV_deg = Number(q.vFOV_deg ?? k.vFOV_deg ?? 30), k.rot_deg = Number(q.rot_deg ?? k.rot_deg ?? 0), ue(), f(), ce(), Xe(), Me();
  }
  function U(k) {
    if (!k || !G(k)) return null;
    const q = k.initial_pose;
    if (!q || typeof q != "object") return null;
    const u = {
      yaw_deg: Number(q.yaw_deg ?? k.yaw_deg ?? 0),
      pitch_deg: Number(q.pitch_deg ?? k.pitch_deg ?? 0),
      hFOV_deg: Number(q.hFOV_deg ?? k.hFOV_deg ?? 30),
      vFOV_deg: Number(q.vFOV_deg ?? k.vFOV_deg ?? 30),
      rot_deg: Number(q.rot_deg ?? k.rot_deg ?? 0)
    }, ne = $(Ql, () => {
      Me();
    });
    return ne && (ne.complete || ne.naturalWidth || ne.width) && (u.vFOV_deg = h(
      u.hFOV_deg,
      Number(ne.naturalWidth || ne.width || 1),
      Number(ne.naturalHeight || ne.height || 1)
    )), u;
  }
  function Q() {
    const k = z();
    if (!k || !G(k)) return !1;
    const q = U(k);
    if (!q) return !1;
    const u = (ne, A) => Math.abs(Number(ne || 0) - Number(A || 0)) <= 1e-4;
    return !(u(k.yaw_deg, q.yaw_deg) && u(k.pitch_deg, q.pitch_deg) && u(k.hFOV_deg, q.hFOV_deg) && u(k.vFOV_deg, q.vFOV_deg) && u(k.rot_deg, q.rot_deg));
  }
  function ie(k = {}) {
    const u = k.preservePanelValues !== !1 ? O(z()) : null;
    u && (t.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (c === "stickers" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (c === "stickers" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: ni(u)
    }), t.selectedId = null, t.selectedIds = [], Ae(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function Se() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((k) => k.id === t.worldSelectedId && k.placement === "world") || null;
  }
  function we(k) {
    Y(null), t.worldSelectedId = k, r.backgroundDirty = !0;
  }
  function Ae() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function Fe(k) {
    return !!k && !n && !k.locked;
  }
  function Ye() {
    if (c !== "cutout") return;
    const k = _();
    k && (t.selectedId = String(k.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function Le() {
    var q;
    const k = z();
    (se(k) && !ze(k) || t.selectedId === _c && j() && !p() || De() === "stroke" && !te()) && Y(null), ((q = Se()) == null ? void 0 : q.visible) === !1 && Ae();
  }
  function je() {
    if (n) return;
    const k = w();
    if (!z() || k.length === 0 || k.some((me) => oe(me))) return;
    _e();
    const u = S(), ne = new Set(k.map((me) => J(me) ? `sticker:${String(me.id || "")}` : re(me) ? `rasterObject:${R(me.rasterObjectId || me.id || "")}` : `strokeGroup:${String(me.actionGroupId || me.id || "")}`)), A = [], ee = [];
    if (u.forEach((me) => {
      var He, F;
      const $e = me.type === "sticker" ? `sticker:${String(((He = me.item) == null ? void 0 : He.id) || "")}` : me.type === "rasterObject" ? `rasterObject:${String(((F = me.item) == null ? void 0 : F.id) || me.id || "")}` : `strokeGroup:${String(me.actionGroupId || "")}`;
      ne.has($e) ? A.push(me) : ee.push(me);
    }), !A.length || A[A.length - 1] === u[u.length - 1]) return;
    [...ee, ...A].forEach((me, $e) => {
      me.type === "sticker" && me.item && (me.item.z_index = $e), me.type === "strokeGroup" && me.item && (me.item.z_index = $e), me.type === "rasterObject" && me.item && (me.item.z_index = $e);
    }), xe(), ue(), f(), Xe(), Me();
  }
  function tt() {
    if (n) return;
    const k = w();
    if (!z() || k.length === 0 || k.some((me) => oe(me))) return;
    _e();
    const u = S(), ne = new Set(k.map((me) => J(me) ? `sticker:${String(me.id || "")}` : re(me) ? `rasterObject:${R(me.rasterObjectId || me.id || "")}` : `strokeGroup:${String(me.actionGroupId || me.id || "")}`)), A = [], ee = [];
    if (u.forEach((me) => {
      var He, F;
      const $e = me.type === "sticker" ? `sticker:${String(((He = me.item) == null ? void 0 : He.id) || "")}` : me.type === "rasterObject" ? `rasterObject:${String(((F = me.item) == null ? void 0 : F.id) || me.id || "")}` : `strokeGroup:${String(me.actionGroupId || "")}`;
      ne.has($e) ? A.push(me) : ee.push(me);
    }), !A.length || A[0] === u[0]) return;
    [...A, ...ee].forEach((me, $e) => {
      me.type === "sticker" && me.item && (me.item.z_index = $e), me.type === "strokeGroup" && me.item && (me.item.z_index = $e), me.type === "rasterObject" && me.item && (me.item.z_index = $e);
    }), xe(), ue(), f(), Xe(), Me();
  }
  return {
    connect(k) {
      ({
        cameraShoots: p,
        commitAndRefreshNode: f,
        computeStickerVFov: h,
        cutoutStickers: g,
        getActiveCutoutShot: _,
        getCutoutSelectableItems: v,
        getDisplayListObjects: S,
        getList: M,
        getPaintingGroupList: C,
        getRasterObjectItem: W,
        getRasterObjectList: V,
        getStickerUiImage: $,
        getStrokeGroupItem: y,
        hasCamera: j,
        isExternalSticker: G,
        isRasterObjectItem: re,
        isSceneSticker: se,
        isShotItem: I,
        isStickerHidden: H,
        isStickerItem: J,
        isStrokeGroupItem: de,
        markObjectVisualsDirty: xe,
        normalizeDisplayZIndices: _e,
        objectGeom: he,
        paintingShown: te,
        parseRasterObjectSelectionId: R,
        poseOf: O,
        pushHistory: ue,
        requestDraw: Me,
        sceneStickerShown: ze,
        updateSelectionMenu: Xe,
        updateSidePanel: ce
      } = k);
    },
    getSelected: z,
    getSelectedItems: w,
    getMultiSelectionGeom: pe,
    isItemSelected: Ne,
    getSelectedKind: De,
    isItemLocked: oe,
    areAllSelectedItemsLocked: Pe,
    toggleSelectedLock: D,
    setSelectedItem: Y,
    setSelectedItems: fe,
    getCutoutInspectorItems: L,
    getSelectionItemIcon: Z,
    getSelectionItemLabelData: ae,
    toggleSelectedExternalStickerVisibility: T,
    restoreSelectedToInitialPose: B,
    canRestoreSelectedToInitial: Q,
    clearSelection: ie,
    selectedWorldSticker: Se,
    selectWorldSticker: we,
    clearWorldSelection: Ae,
    worldStickerEditable: Fe,
    applyInitialCutoutFocus: Ye,
    releaseHiddenSelection: Le,
    bringSelectedToFront: je,
    sendSelectedToBack: tt
  };
}
function aO(e) {
  const {
    backgroundCanvas: t,
    canvas: n,
    editor: r,
    state: i,
    studio: o
  } = e;
  let a, s, c, p, f, h, g = { key: [], projection: null };
  function _() {
    return o && a() && i.camera.projection === "erp";
  }
  function v() {
    const w = re({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !w || w.length !== 4 ? !1 : w[0].y >= w[3].y;
  }
  function S() {
    return wy({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function M() {
    const z = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return z.some((w, pe) => w !== g.key[pe]) && (g = { key: z, projection: xy(S(), n.width, n.height) }), g.projection;
  }
  function C(z) {
    const w = M().project(z);
    return w.z > 1e-4 ? w : null;
  }
  function W(z, w) {
    return M().ray(z, w);
  }
  function V() {
    const z = n.width, w = n.height, pe = 2;
    if (z / Math.max(w, 1) >= pe) {
      const P = w, D = P * pe;
      return { x: (z - D) * 0.5, y: 0, w: D, h: P };
    }
    const De = z, oe = De / pe;
    return { x: 0, y: (w - oe) * 0.5, w: De, h: oe };
  }
  function $(z) {
    return {
      lon: Math.atan2(z.x, z.z),
      lat: Math.asin(Ie(z.y, -1, 1))
    };
  }
  function y(z, w = null) {
    const { lon: pe, lat: Ne } = $(z), De = V();
    let oe = De.x + (pe / (2 * Math.PI) + 0.5) * De.w;
    const Pe = De.y + (0.5 - Ne / Math.PI) * De.h;
    if (w !== null) {
      for (; oe - w > De.w / 2; ) oe -= De.w;
      for (; oe - w < -De.w / 2; ) oe += De.w;
    }
    return { x: oe, y: Pe, z: 1 };
  }
  function j(z) {
    const w = p(z), pe = ea(
      Number(w.yaw_deg || 0),
      Number(w.pitch_deg || 0),
      Number(w.rot_deg || w.roll_deg || 0)
    ), Ne = Math.tan(Ie(Number(w.hFOV_deg || 20), 0.1, 179) * 0.5 * zr), De = Math.tan(Ie(Number(w.vFOV_deg || 20), 0.1, 179) * 0.5 * zr);
    return {
      centerDir: pe.fwd,
      right: pe.right,
      up: pe.up,
      tanX: Ne,
      tanY: De
    };
  }
  function G(z, w, pe) {
    return LE(fg(fg(z.centerDir, pg(z.right, w)), pg(z.up, pe)));
  }
  function re(z) {
    const w = j(z);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Ne, v: De }) => G(w, Ne * w.tanX, De * w.tanY));
  }
  function se(z, w, pe) {
    const Ne = j(z), De = (w * 2 - 1) * Ne.tanX, oe = (1 - pe * 2) * Ne.tanY;
    return G(Ne, De, oe);
  }
  function I(z) {
    const w = t.width / Math.max(1, n.width), pe = t.height / Math.max(1, n.height);
    return { x: z.x * w, y: z.y * pe, w: z.w * w, h: z.h * pe };
  }
  function H(z, w = null, pe = null, Ne = null) {
    if (r.mode === "frame") {
      const De = w || s();
      if (!De) return [];
      const oe = pe || c(De);
      return ue(z, De, oe);
    }
    return te(z, Ne);
  }
  function J(z, w = null, pe = null, Ne = null, De = null) {
    if (!z) return null;
    if (r.mode === "unwrap") {
      const Pe = te([z], De);
      return Pe[0] ? { x: Pe[0].x, y: Pe[0].y, z: 1 } : null;
    }
    const oe = xe(z);
    return oe ? f(oe, w, pe, Ne) : null;
  }
  function de(z, w) {
    if (!z || !w) return null;
    const pe = Number(w.x || 0), Ne = Number(w.y || 0);
    return se(z, pe, Ne);
  }
  function xe(z) {
    if (!z) return null;
    const w = (Number(z.u || 0) - 0.5) * (2 * Math.PI), pe = (0.5 - Number(z.v || 0)) * Math.PI, Ne = Math.cos(pe);
    return wc(Ne * Math.sin(w), Math.sin(pe), Ne * Math.cos(w));
  }
  function _e(z, w) {
    if (!z || !w) return null;
    const pe = j(z), Ne = Fu(w, pe.centerDir);
    if (!Number.isFinite(Ne) || Ne <= 1e-6) return null;
    const De = Fu(w, pe.right) / Ne, oe = Fu(w, pe.up) / Ne;
    return {
      x: (De / Math.max(1e-6, pe.tanX) + 1) * 0.5,
      y: (1 - oe / Math.max(1e-6, pe.tanY)) * 0.5
    };
  }
  function he(z) {
    if (!Array.isArray(z) || z.length < 3) return [];
    if (r.mode === "unwrap") {
      const pe = V();
      return z.map((Ne) => ({
        x: pe.x + Number(Ne.u || 0) * pe.w,
        y: pe.y + Number(Ne.v || 0) * pe.h
      }));
    }
    const w = z.map((pe) => C(xe(pe))).filter(Boolean);
    return w.every((pe) => Number(pe.z || 0) > 0) ? w.map((pe) => ({ x: Number(pe.x || 0), y: Number(pe.y || 0) })) : [];
  }
  function te(z, w = null) {
    if (!Array.isArray(z) || z.length < 1) return [];
    if (r.mode === "unwrap") {
      const Ne = V();
      return z.map((De) => {
        const oe = (Number(De.u || 0) % 1 + 1) % 1, Pe = w == null ? oe : Number(w || 0) + h(oe, w);
        return {
          x: Ne.x + Pe * Ne.w,
          y: Ne.y + Number(De.v || 0) * Ne.h
        };
      });
    }
    const pe = z.map((Ne) => C(xe(Ne))).filter(Boolean);
    return pe.every((Ne) => Number(Ne.z || 0) > 0) ? pe.map((Ne) => ({ x: Number(Ne.x || 0), y: Number(Ne.y || 0) })) : [];
  }
  function R(z, w = 160) {
    if (!Array.isArray(z) || z.length < 3) return !1;
    for (let pe = 0; pe < z.length; pe += 1) {
      const Ne = z[pe], De = z[(pe + 1) % z.length];
      if (!Ne || !De || !Number.isFinite(Ne.x) || !Number.isFinite(Ne.y) || !Number.isFinite(De.x) || !Number.isFinite(De.y) || Math.hypot(Number(De.x) - Number(Ne.x), Number(De.y) - Number(Ne.y)) > w) return !1;
    }
    return !0;
  }
  function O(z, w, pe) {
    if (!Array.isArray(z) || z.length < 3 || !w || !pe) return [];
    const Ne = [];
    for (const De of z) {
      const oe = xe(De), Pe = _e(w, oe);
      if (!Pe) return [];
      Ne.push({
        x: Number(pe.x || 0) + Number(Pe.x || 0) * Number(pe.w || 0),
        y: Number(pe.y || 0) + Number(Pe.y || 0) * Number(pe.h || 0)
      });
    }
    return R(Ne, Math.max(80, Math.max(pe.w, pe.h) * 0.75)) ? Ne : [];
  }
  function ue(z, w, pe) {
    if (!Array.isArray(z) || z.length < 1 || !w || !pe) return [];
    const Ne = [];
    for (const De of z) {
      const oe = xe(De), Pe = _e(w, oe);
      Pe && Ne.push({
        x: Number(pe.x || 0) + Number(Pe.x || 0) * Number(pe.w || 0),
        y: Number(pe.y || 0) + Number(Pe.y || 0) * Number(pe.h || 0)
      });
    }
    return Ne;
  }
  function Me(z) {
    const w = n.getBoundingClientRect();
    return {
      x: (z.clientX - w.left) / w.width * n.width,
      y: (z.clientY - w.top) / w.height * n.height
    };
  }
  function ze(z) {
    const w = n.getBoundingClientRect();
    return {
      x: Number(z.clientX) - Number(w.left || 0),
      y: Number(z.clientY) - Number(w.top || 0)
    };
  }
  function Xe(z, w = performance.now()) {
    if (r.mode === "unwrap") {
      const oe = V(), Pe = (z.x - oe.x) / Math.max(1, oe.w), P = (z.y - oe.y) / Math.max(1, oe.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (Pe % 1 + 1) % 1,
        v: Ie(P, 0, 1),
        t: Number(w || 0)
      };
    }
    const pe = W(z.x, z.y), { lon: Ne, lat: De } = $(pe);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ne / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - De / Math.PI, 0, 1),
      t: Number(w || 0)
    };
  }
  function ce(z, w, pe = performance.now()) {
    const Ne = c(w);
    if (!Ne) return null;
    const De = {
      x: (Number(z.x) - Ne.x) / Math.max(1, Ne.w),
      y: (Number(z.y) - Ne.y) / Math.max(1, Ne.h)
    };
    if (De.x < 0 || De.x > 1 || De.y < 0 || De.y > 1) return null;
    const oe = de(w, De);
    if (!oe) return null;
    const { lon: Pe, lat: P } = $(oe);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Pe / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - P / Math.PI, 0, 1),
      t: Number(pe || 0)
    };
  }
  return {
    connect(z) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: c,
        poseOf: p,
        projectSceneItemDir: f,
        shortestWrappedDelta: h
      } = z);
    },
    isErpCamera: _,
    currentViewCamera: S,
    currentViewProjection: M,
    projectDir: C,
    screenToWorldDir: W,
    getUnwrapRect: V,
    projectDirUnwrap: y,
    getStickerFrame: j,
    stickerDirFromFrame: G,
    stickerCornersDir: re,
    stickerSampleDir: se,
    stickerCornerOrderSanity: v,
    projectEditorPoints: H,
    projectErpPointToEditor: J,
    frameLocalPointToWorldDir: de,
    erpPointToWorldDir: xe,
    worldDirToFrameLocalPoint: _e,
    projectLassoPointsToCurrentView: he,
    projectErpLassoPointsToFrameRect: O,
    screenPos: Me,
    screenPosCss: ze,
    screenPosToErpPoint: Xe,
    screenPosToFrameAsErpPoint: ce,
    deviceRect: I
  };
}
function sO(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, a, s, c, p, f, h, g, _, v, S, M, C, W, V, $, y, j, G, re, se, I, H, J, de, xe, _e, he, te, R, O, ue;
  function Me(oe, Pe) {
    const P = String(oe.actionGroupId || oe.id || "").trim(), D = V(P, oe.layerKind), Y = s(P, oe.layerKind, D), fe = (Y == null ? void 0 : Y.centerUv) || W(P, oe.layerKind, D), L = r.mode === "unwrap" ? Number((fe == null ? void 0 : fe.u) || 0) : null, Z = [], ae = r.mode === "frame" ? c() : null, T = ae ? h(ae) : null;
    for (const Le of D) {
      const je = (Le == null ? void 0 : Le.geometry) || null, tt = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [], k = xe(tt, ae, T, L).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y));
      if (!k.length) continue;
      const q = p(String((Le == null ? void 0 : Le.toolKind) || "pen")), u = $n[q] || $n[Jr];
      Z.push({
        points: k,
        closed: String((je == null ? void 0 : je.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((Le == null ? void 0 : Le.size) || 10) * Math.max(0.1, Number((u == null ? void 0 : u.sizeScale) ?? 1)) + 10),
        layerKind: String((Le == null ? void 0 : Le.layerKind) || oe.layerKind || "paint")
      });
    }
    const B = _e(fe, null, ae, T, L);
    if (!B) {
      const Le = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Pe, Le), Le;
    }
    const Q = f(Y).map((Le) => _e(Le, B.x, ae, T, L)).filter((Le) => Number.isFinite(Le == null ? void 0 : Le.x) && Number.isFinite(Le == null ? void 0 : Le.y)).map((Le) => ({ x: Number(Le.x || 0), y: Number(Le.y || 0) }));
    if (Q.length < 4) {
      const Le = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Pe, Le), Le;
    }
    const ie = (Le, je) => ({
      x: (Number((Le == null ? void 0 : Le.x) || 0) + Number((je == null ? void 0 : je.x) || 0)) * 0.5,
      y: (Number((Le == null ? void 0 : Le.y) || 0) + Number((je == null ? void 0 : je.y) || 0)) * 0.5,
      a: Le,
      b: je
    }), Se = ie(Q[0], Q[1]), we = ie(Q[1], Q[2]), Ae = ie(Q[2], Q[3]), Fe = ie(Q[3], Q[0]), Ye = {
      kind: "strokeGroup",
      center: { x: Number(B.x || 0), y: Number(B.y || 0) },
      corners: Q,
      edgeMidpoints: [
        { edge: "top", ...Se },
        { edge: "right", ...we },
        { edge: "bottom", ...Ae },
        { edge: "left", ...Fe }
      ],
      rotateStemBase: { x: Se.x, y: Se.y },
      rotateHandle: { x: Se.x, y: Se.y - 30 },
      strokePaths: Z,
      visible: !0
    };
    return r._strokeGeomCache.set(Pe, Ye), Ye;
  }
  function ze(oe, Pe) {
    const P = r.mode === "frame" ? c() : null, D = P ? h(P) : null, Y = g(oe), fe = r.mode === "unwrap" ? Number((Y == null ? void 0 : Y.u) || 0) : null, L = _e(Y, null, P, D, fe), ae = v(oe).map((Q) => _e(Q, (L == null ? void 0 : L.x) ?? null, P, D, fe)).filter((Q) => Number.isFinite(Q == null ? void 0 : Q.x) && Number.isFinite(Q == null ? void 0 : Q.y));
    if (!Array.isArray(ae) || ae.length < 4) {
      const Q = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(Pe, Q), Q;
    }
    const T = ae.slice(0, 4).map((Q) => ({ x: Number((Q == null ? void 0 : Q.x) || 0), y: Number((Q == null ? void 0 : Q.y) || 0) })), U = {
      kind: "rasterObject",
      center: {
        x: T.reduce((Q, ie) => Q + Number(ie.x || 0), 0) / T.length,
        y: T.reduce((Q, ie) => Q + Number(ie.y || 0), 0) / T.length
      },
      corners: T,
      visible: !0
    };
    return r._strokeGeomCache.set(Pe, U), U;
  }
  function Xe(oe, Pe = null, P = null, D = null, Y = {}) {
    if (r.mode === "frame") {
      const B = P || c(), U = D || h(B);
      if (!B || !U) return null;
      const Q = B ? ue(B, oe) : null;
      return Q ? {
        x: Number(U.x || 0) + Number(Q.x || 0) * Number(U.w || 0),
        y: Number(U.y || 0) + Number(Q.y || 0) * Number(U.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return de(oe, Pe);
    const fe = 1e-4, L = o().project(oe, fe);
    if (!Number.isFinite(L.z) || L.z <= fe && !(Y != null && Y.clipBehind)) return null;
    const Z = n.width, ae = n.height, T = Math.max(Z, ae) * 2;
    return {
      x: Ie(L.x, -T, Z + T),
      y: Ie(L.y, -T, ae + T),
      z: Math.max(L.z, fe),
      rawZ: L.z,
      clipped: L.z <= fe
    };
  }
  function ce(oe, Pe = []) {
    if (r.mode !== "pano" || re(oe)) return 1;
    const P = Pe.map((D) => Number((D == null ? void 0 : D.rawZ) ?? (D == null ? void 0 : D.z))).filter((D) => Number.isFinite(D));
    return P.length ? FE(0.035, 0.2, Math.min(...P)) : 1;
  }
  function z(oe) {
    if (j(oe) && !he(oe)) return { visible: !1 };
    const Pe = H(oe), P = jn(Number(Pe.yaw_deg || 0), Number(Pe.pitch_deg || 0)), D = r.mode === "frame" ? c() : null, Y = D ? h(D) : null, fe = r.mode === "pano" && (re(oe) || G(oe)), L = fe ? { clipBehind: !0 } : null, Z = Xe(P, null, D, Y, L);
    if (!Z) return { visible: !1 };
    const ae = M(oe), B = te(oe).map((A) => Xe(A, Z.x, D, Y, L)).filter((A) => Number.isFinite(A == null ? void 0 : A.x) && Number.isFinite(A == null ? void 0 : A.y));
    if (B.length < 4) return { visible: !1 };
    const U = R(ae, 0, ae.tanY), Q = R(ae, 0, ae.tanY + Math.max(ae.tanY * 0.43, 0.053)), ie = Xe(U, Z.x, D, Y, L);
    if (!ie) return { visible: !1 };
    const Se = Xe(Q, (ie == null ? void 0 : ie.x) ?? Z.x, D, Y, L), we = ((Se == null ? void 0 : Se.x) ?? ie.x) - ie.x, Ae = ((Se == null ? void 0 : Se.y) ?? ie.y) - ie.y, Fe = Math.hypot(we, Ae) || 1, Ye = {
      x: ie.x + we / Fe * 30,
      y: ie.y + Ae / Fe * 30
    }, Le = Xe(R(ae, 0, ae.tanY), Z.x, D, Y, L), je = Xe(R(ae, ae.tanX, 0), Z.x, D, Y, L), tt = Xe(R(ae, 0, -ae.tanY), Z.x, D, Y, L), k = Xe(R(ae, -ae.tanX, 0), Z.x, D, Y, L);
    if (!Le || !je || !tt || !k) return { visible: !1 };
    const q = [
      Z,
      ...B,
      ie,
      Se,
      Le,
      je,
      tt,
      k
    ];
    if (fe && !q.some((A) => Number((A == null ? void 0 : A.rawZ) ?? (A == null ? void 0 : A.z)) > 1e-4)) return { visible: !1 };
    const u = ce(oe, q), ne = [
      {
        edge: "top",
        x: Le.x,
        y: Le.y,
        a: { x: B[0].x, y: B[0].y },
        b: { x: B[1].x, y: B[1].y }
      },
      {
        edge: "right",
        x: je.x,
        y: je.y,
        a: { x: B[1].x, y: B[1].y },
        b: { x: B[2].x, y: B[2].y }
      },
      {
        edge: "bottom",
        x: tt.x,
        y: tt.y,
        a: { x: B[2].x, y: B[2].y },
        b: { x: B[3].x, y: B[3].y }
      },
      {
        edge: "left",
        x: k.x,
        y: k.y,
        a: { x: B[3].x, y: B[3].y },
        b: { x: B[0].x, y: B[0].y }
      }
    ];
    return {
      center: { x: Z.x, y: Z.y },
      corners: B.map((A) => ({ x: A.x, y: A.y })),
      edgeMidpoints: ne,
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: Ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: u,
      visible: !0
    };
  }
  function w(oe) {
    if (t && G(oe) && $()) return { visible: !1 };
    if (!I() && (se(oe) || y(oe))) return { visible: !1 };
    if (se(oe)) {
      const Y = String(oe.actionGroupId || oe.id || "").trim(), fe = C(Y, oe.layerKind), L = r._strokeGeomCache.get(fe);
      return L || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), Me(oe, fe));
    }
    if (y(oe)) {
      const Y = _(oe), fe = r._strokeGeomCache.get(Y);
      return fe || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), ze(oe, Y));
    }
    const Pe = S(oe), P = r._strokeGeomCache.get(Pe);
    if (P) return P;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const D = z(oe);
    return r._strokeGeomCache.set(Pe, D), D;
  }
  function pe(oe, Pe, P, D = null) {
    const Y = [];
    for (let fe = 0; fe <= P; fe += 1) {
      const L = fe / P;
      let Z = 0, ae = 0;
      Pe === 0 ? (Z = L, ae = 0) : Pe === 1 ? (Z = 1, ae = L) : Pe === 2 ? (Z = 1 - L, ae = 1) : (Z = 0, ae = 1 - L);
      const T = O(oe, Z, ae), B = r.mode === "unwrap" ? de(T, D) : J(T);
      B && Y.push(B);
    }
    return Y;
  }
  function Ne() {
    const oe = [...Array.isArray(i.shots) ? i.shots : []], Pe = [...a()].sort((P, D) => Number(P.z_index || 0) - Number(D.z_index || 0));
    return [...oe, ...Pe];
  }
  function De() {
    const oe = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((P, D) => Number(D.z_index || 0) - Number(P.z_index || 0)), ...oe];
  }
  return {
    connect(oe) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: c,
        getBrushPresetIdForTool: p,
        getFrameCornersUv: f,
        getFrameViewRect: h,
        getRasterObjectCenterUv: g,
        getRasterObjectGeomCacheKey: _,
        getRasterObjectTransformedErpPoints: v,
        getSceneItemGeomCacheKey: S,
        getStickerFrame: M,
        getStrokeGeomCacheKey: C,
        getStrokeGroupCenterUv: W,
        getStrokeGroupStrokes: V,
        isFreeSpaceView: $,
        isRasterObjectItem: y,
        isSceneSticker: j,
        isShotItem: G,
        isStickerItem: re,
        isStrokeGroupItem: se,
        paintingShown: I,
        poseOf: H,
        projectDir: J,
        projectDirUnwrap: de,
        projectEditorPoints: xe,
        projectErpPointToEditor: _e,
        sceneStickerShown: he,
        stickerCornersDir: te,
        stickerDirFromFrame: R,
        stickerSampleDir: O,
        worldDirToFrameLocalPoint: ue
      } = oe);
    },
    projectSceneItemDir: Xe,
    objectGeom: w,
    sampleStickerEdge: pe,
    getCutoutSelectableItemsForDisplay: Ne,
    getCutoutSelectableItemsForHit: De
  };
}
const tl = /* @__PURE__ */ new Map();
function lO(e) {
  const {
    api: t,
    cutoutV2: n,
    editor: r,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: a,
    rasterImageCache: s,
    state: c
  } = e;
  let p, f, h, g, _, v, S, M, C, W, V, $, y, j, G, re, se, I, H, J;
  function de(L = r.interaction) {
    const Z = String((L == null ? void 0 : L.kind) || "");
    if (Z === "paint_stroke" || Z === "paint_lasso_fill" || Z === "move_stroke_group" || Z === "scale_stroke_group" || Z === "rotate_stroke_group" || Z === "move_raster_object" || Z === "scale_raster_object") return !0;
    if (Z === "move_multi") {
      const ae = Array.isArray(L == null ? void 0 : L.strokeSnapshots) && L.strokeSnapshots.length > 0, T = Array.isArray(L == null ? void 0 : L.rasterSnapshots) && L.rasterSnapshots.length > 0;
      return ae || T;
    }
    return !1;
  }
  function xe() {
    var Z, ae, T, B;
    let L = null;
    try {
      const U = M(), Q = ((B = (T = (ae = (Z = r.paintEngine) == null ? void 0 : Z.getErpTarget) == null ? void 0 : ae.call(Z, U)) == null ? void 0 : T.displayPaint) == null ? void 0 : B.canvas) || null;
      Q && (L = {
        source: Q,
        revision: `${C()}:${_e()}`
      });
    } catch {
      L = null;
    }
    return L;
  }
  function _e() {
    var B, U, Q, ie, Se, we, Ae;
    const L = r.interaction, Z = String((L == null ? void 0 : L.kind) || "");
    if (!de(L)) return "";
    if (Z === "paint_stroke" || Z === "paint_lasso_fill") {
      const Fe = ((B = L == null ? void 0 : L.stroke) == null ? void 0 : B.geometry) || null, Ye = String(((U = L == null ? void 0 : L.stroke) == null ? void 0 : U.layerKind) || ""), Le = ((Q = Fe == null ? void 0 : Fe.rawPoints) == null ? void 0 : Q.length) ?? ((ie = Fe == null ? void 0 : Fe.points) == null ? void 0 : ie.length) ?? 0, je = String((L == null ? void 0 : L._livePreviewToken) || "");
      return `_${Ye || "paint"}_${Z}_live${je}_${Le}_${r.livePaintInteractionRevision}`;
    }
    const ae = String(((Se = L == null ? void 0 : L.item) == null ? void 0 : Se.actionGroupId) || ""), T = String(((we = L == null ? void 0 : L.item) == null ? void 0 : we.rasterObjectId) || ((Ae = L == null ? void 0 : L.item) == null ? void 0 : Ae.id) || "");
    return `_${Z}_${ae || T || "active"}_${r.livePaintInteractionRevision}`;
  }
  function he(L, Z = null) {
    const ae = String((L == null ? void 0 : L.rasterDataUrl) || "").trim();
    if (!ae) return null;
    const T = s.get(ae);
    if (T)
      return T.complete || T.width || T.naturalWidth, T;
    const B = new Image();
    return B.onload = () => {
      typeof Z == "function" && Z();
    }, B.src = ae, s.set(ae, B), B;
  }
  function te(L) {
    const Z = String((L == null ? void 0 : L.rasterDataUrl) || "").trim();
    if (!Z) return null;
    const ae = a.get(Z);
    if (ae) return ae.ready ? ae : null;
    const T = he(L, () => {
      const Ae = a.get(Z);
      Ae && (Ae.ready = !1), I({ localOnly: !0 });
    });
    if (!T || !(T.complete || T.width || T.naturalWidth)) return null;
    const B = Number(T.naturalWidth || T.width || 0), U = Number(T.naturalHeight || T.height || 0);
    if (B < 1 || U < 1) return null;
    const Q = Mn({ label: "editor.image-pixels" });
    Q.width = B, Q.height = U;
    const ie = Q.getContext("2d", { willReadFrequently: !0 });
    if (!ie) return null;
    ie.clearRect(0, 0, B, U), ie.drawImage(T, 0, 0, B, U);
    const Se = ie.getImageData(0, 0, B, U).data, we = { canvas: Q, width: B, height: U, alpha: Se, ready: !0 };
    return a.set(Z, we), we;
  }
  function R(L, Z) {
    if (!L || !Z) return null;
    const ae = (L == null ? void 0 : L.bbox) || null;
    if (!ae) return null;
    const T = (L == null ? void 0 : L.transform) || {}, B = {
      u: (Number(ae.u0 || 0) + Number(ae.u1 || 0)) * 0.5,
      v: (Number(ae.v0 || 0) + Number(ae.v1 || 0)) * 0.5
    }, U = {
      u: ((Number(Z.u || 0) - Number(T.du || 0)) % 1 + 1) % 1,
      v: Number(Z.v || 0) - Number(T.dv || 0)
    }, Q = $(
      U,
      B,
      Number(T.scale || 1),
      Number(T.rot_deg || 0)
    ), ie = Number(ae.u1 || 0) - Number(ae.u0 || 0), Se = Number(ae.v1 || 0) - Number(ae.v0 || 0);
    if (!(ie > 1e-6) || !(Se > 1e-6)) return null;
    const we = J(Number(Q.u || 0), Number(ae.u0 || 0)) / ie, Ae = (Number(Q.v || 0) - Number(ae.v0 || 0)) / Se;
    if (we < 0 || we > 1 || Ae < 0 || Ae > 1) return 0;
    const Fe = te(L);
    if (!Fe) return null;
    const Ye = Ie(Math.floor(we * Fe.width), 0, Fe.width - 1), Le = Ie(Math.floor(Ae * Fe.height), 0, Fe.height - 1);
    return Number(Fe.alpha[(Le * Fe.width + Ye) * 4 + 3] || 0);
  }
  function O(L, Z, ae, T = null) {
    if (!(Z != null && Z.visible) || !mi(ae, Z.corners)) return !1;
    const B = T || H(ae, performance.now()), U = R(L, B);
    return U === null ? !0 : U > 8;
  }
  function ue() {
    var T, B, U, Q, ie, Se, we, Ae;
    const L = ((B = (T = r.paintEngine) == null ? void 0 : T.getErpTarget) == null ? void 0 : B.call(T, M(!1))) || null, Z = Math.max(1, Number(((U = L == null ? void 0 : L.descriptor) == null ? void 0 : U.width) || ((ie = (Q = L == null ? void 0 : L.displayPaint) == null ? void 0 : Q.canvas) == null ? void 0 : ie.width) || 2048)), ae = Math.max(1, Number(((Se = L == null ? void 0 : L.descriptor) == null ? void 0 : Se.height) || ((Ae = (we = L == null ? void 0 : L.displayPaint) == null ? void 0 : we.canvas) == null ? void 0 : Ae.height) || 1024));
    return { width: Z, height: ae };
  }
  function Me() {
    var Le, je, tt;
    const L = r.interaction;
    if ((L == null ? void 0 : L.kind) !== "paint_stroke") return null;
    const Z = (L == null ? void 0 : L.stroke) || null;
    if (!Z || String((Z == null ? void 0 : Z.layerKind) || "") !== "paint" || String((Z == null ? void 0 : Z.toolKind) || "") !== "eraser") return null;
    const ae = g(), T = `${_e()}:${ae.width}:${ae.height}`;
    if (((Le = r._activePaintEraserPreviewInfo) == null ? void 0 : Le.cacheKey) === T)
      return r._activePaintEraserPreviewInfo.value || null;
    const B = vn(Z), U = (B == null ? void 0 : B.geometry) || null;
    if (U && String(U.geometryKind || "") !== "lasso_fill") {
      const k = Array.isArray(U.rawPoints) && U.rawPoints.length ? U.rawPoints : Array.isArray(U.points) ? U.points : [];
      U.processedPoints = G(k, B.targetSpace, !0);
    }
    const Q = f(ae.width, ae.height, { readback: !0 });
    if (!re(Q, B, { w: ae.width, h: ae.height })) return null;
    const ie = ((tt = (je = Q.ctx) == null ? void 0 : je.getImageData(0, 0, ae.width, ae.height)) == null ? void 0 : tt.data) || null;
    if (!ie) return null;
    let Se = ae.width, we = ae.height, Ae = -1, Fe = -1;
    for (let k = 0; k < ae.height; k += 1)
      for (let q = 0; q < ae.width; q += 1)
        ie[(k * ae.width + q) * 4 + 3] <= 8 || (q < Se && (Se = q), k < we && (we = k), q > Ae && (Ae = q), k > Fe && (Fe = k));
    if (Ae < Se || Fe < we)
      return r._activePaintEraserPreviewInfo = { cacheKey: T, value: null }, null;
    const Ye = {
      surface: Q,
      bounds: { minX: Se, minY: we, maxX: Ae, maxY: Fe },
      key: `${T}:${Se}:${we}:${Ae}:${Fe}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: T, value: Ye }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Ye;
  }
  function ze() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function Xe(L, Z, ae) {
    var T, B;
    if (!L) return null;
    if (L.type === "rasterObject" && ((T = L.item) != null && T.bbox)) {
      const U = L.item.bbox, Q = ((B = L.item) == null ? void 0 : B.transform) || {}, ie = Number(U.u0 || 0) + Number(Q.du || 0), Se = Number(U.u1 || 0) + Number(Q.du || 0), we = Number(U.v0 || 0) + Number(Q.dv || 0), Ae = Number(U.v1 || 0) + Number(Q.dv || 0);
      return {
        minX: Math.floor((ie % 1 + 1) % 1 * Z),
        maxX: Math.ceil((Se % 1 + 1) % 1 * Z),
        minY: Math.floor(Ie(we, 0, 1) * ae),
        maxY: Math.ceil(Ie(Ae, 0, 1) * ae),
        wraps: Se - ie >= 1 || ie < 0 || Se > 1
      };
    }
    if (L.type === "strokeGroup") {
      const U = V(L.actionGroupId, "paint"), Q = h(L.actionGroupId, "paint", U);
      if (!Q) return null;
      const ie = Q.centerUv.u - Q.halfW, Se = Q.centerUv.u + Q.halfW, we = Q.centerUv.v - Q.halfH, Ae = Q.centerUv.v + Q.halfH;
      return {
        minX: Math.floor((ie % 1 + 1) % 1 * Z),
        maxX: Math.ceil((Se % 1 + 1) % 1 * Z),
        minY: Math.floor(Ie(we, 0, 1) * ae),
        maxY: Math.ceil(Ie(Ae, 0, 1) * ae),
        wraps: Se - ie >= 1 || ie < 0 || Se > 1
      };
    }
    return null;
  }
  function ce(L, Z, ae) {
    if (!L || !Z) return !1;
    const T = (Q) => Q.wraps ? [
      { minX: 0, maxX: Q.maxX, minY: Q.minY, maxY: Q.maxY, wraps: !1 },
      { minX: Q.minX, maxX: ae - 1, minY: Q.minY, maxY: Q.maxY, wraps: !1 }
    ] : [Q], B = T(L), U = T(Z);
    return B.some((Q) => U.some((ie) => !(Q.maxX < ie.minX || ie.maxX < Q.minX || Q.maxY < ie.minY || ie.maxY < Q.minY)));
  }
  function z(L, Z, ae) {
    var A, ee, ke, me, $e, He, F;
    if (!L || !Z || !((A = ae == null ? void 0 : ae.surface) != null && A.canvas) || Z.type !== "rasterObject") return L;
    const T = Number(L.width || ae.surface.canvas.width || 0), B = Number(L.height || ae.surface.canvas.height || 0);
    if (T < 1 || B < 1) return L;
    const U = Xe(Z, T, B);
    if (U && !ce(U, ae.bounds, T)) return L;
    const Q = String(((ee = Z.item) == null ? void 0 : ee.id) || Z.id || ""), ie = ((ke = Z.item) == null ? void 0 : ke.transform) || {}, Se = `${ae.key}:${Q}:${T}:${B}:${Number(ie.du || 0).toFixed(6)}:${Number(ie.dv || 0).toFixed(6)}:${Number(ie.rot_deg || 0).toFixed(3)}:${Number(ie.scale || 1).toFixed(4)}`, we = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (we.has(Se)) return we.get(Se);
    const Ae = Ie(Math.floor(Number(((me = ae.bounds) == null ? void 0 : me.minX) || 0)), 0, Math.max(0, T - 1)), Fe = Ie(Math.floor(Number((($e = ae.bounds) == null ? void 0 : $e.minY) || 0)), 0, Math.max(0, B - 1)), Ye = Ie(Math.ceil(Number(((He = ae.bounds) == null ? void 0 : He.maxX) || 0)), Ae, Math.max(0, T - 1)), Le = Ie(Math.ceil(Number(((F = ae.bounds) == null ? void 0 : F.maxY) || 0)), Fe, Math.max(0, B - 1)), je = Math.max(1, Ye - Ae + 1), tt = Math.max(1, Le - Fe + 1), k = f(T, B, { readback: !0 });
    k.ctx.clearRect(0, 0, T, B), k.ctx.drawImage(L, 0, 0);
    const q = k.ctx.getImageData(Ae, Fe, je, tt);
    k.ctx.save(), k.ctx.globalCompositeOperation = "destination-out", k.ctx.drawImage(ae.surface.canvas, 0, 0), k.ctx.restore();
    const u = k.ctx.getImageData(Ae, Fe, je, tt);
    let ne = !1;
    for (let be = 0; be < je * tt; be += 1) {
      const ge = q.data[be * 4 + 3], Re = u.data[be * 4 + 3];
      if (ge > Re) {
        ne = !0;
        break;
      }
    }
    return ne ? (we.size > 64 && we.clear(), we.set(Se, k.canvas), k.canvas) : (we.set(Se, L), L);
  }
  function w(L, Z = null) {
    const ae = j((L == null ? void 0 : L.rasterObjectId) || (L == null ? void 0 : L.id) || ""), T = (L == null ? void 0 : L.bbox) || null;
    if (!ae || !T) return null;
    const B = he(L, Z);
    if (!B || !(B.complete || B.width || B.naturalWidth)) return null;
    const { width: U, height: Q } = ue(), ie = (L == null ? void 0 : L.transform) || {}, Se = [
      ae,
      U,
      Q,
      T.u0,
      T.v0,
      T.u1,
      T.v1,
      ie.du,
      ie.dv,
      ie.rot_deg,
      ie.scale,
      W()
    ].join(":"), we = o.get(Se);
    if (we) return we;
    o.size > 64 && o.clear();
    const Ae = Mn({ label: "editor.raster-erp" });
    Ae.width = U, Ae.height = Q;
    const Fe = Ae.getContext("2d");
    if (!Fe) return null;
    const Ye = Number(T.u0 || 0) * U, Le = Number(T.v0 || 0) * Q, je = Math.max(1, (Number(T.u1 || 0) - Number(T.u0 || 0)) * U), tt = Math.max(1, (Number(T.v1 || 0) - Number(T.v0 || 0)) * Q), k = Ye + je * 0.5 + Number(ie.du || 0) * U, q = Le + tt * 0.5 + Number(ie.dv || 0) * Q, u = Number(ie.rot_deg || 0) * zr, ne = Math.max(0.01, Number(ie.scale || 1));
    for (const A of [-U, 0, U])
      Fe.save(), Fe.translate(k + A, q), Fe.rotate(u), Fe.scale(ne, ne), Fe.drawImage(B, -je * 0.5, -tt * 0.5, je, tt), Fe.restore();
    return o.set(Se, Ae), Ae;
  }
  async function pe(L, Z) {
    const ae = await new Promise((ie) => L.toBlob(ie, "image/png")), T = new FormData();
    T.append("image", ae, Z), T.append("type", "input"), T.append("subfolder", "panorama_stickers"), T.append("overwrite", "1");
    const B = await t.fetchApi("/upload/image", { method: "POST", body: T });
    if (!B || B.status !== 200) throw new Error(`upload failed (${B == null ? void 0 : B.status})`);
    const U = await B.json(), Q = String((U == null ? void 0 : U.name) || "").trim();
    if (!Q) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: Q,
      subfolder: String((U == null ? void 0 : U.subfolder) || "panorama_stickers"),
      storage: String((U == null ? void 0 : U.type) || "input")
    };
  }
  let Ne = null, De = !1;
  function oe() {
    if (n) return !1;
    const L = hg(c.painting), { width: Z, height: ae } = _();
    return Hk(c.painting_layer, { paintCount: L.totalPaintCount, maskCount: L.totalMaskCount, width: Z, height: ae, nodeId: String(i.id ?? "0") });
  }
  function Pe() {
    const L = String(i.id ?? "0"), Z = tl.get(L);
    if (De && Z) return Z;
    const ae = (async () => {
      var U, Q, ie, Se, we, Ae, Fe, Ye, Le, je, tt, k;
      const T = C(), B = hg(c.painting);
      if (B.totalPaintCount <= 0 && B.totalMaskCount <= 0) {
        c.painting_layer !== null && (c.painting_layer = null, Ne = T, p());
        return;
      }
      if (Ne !== T && !De) {
        De = !0;
        try {
          se();
          const q = M(!1), u = ((Q = (U = r.paintEngine) == null ? void 0 : U.getErpTarget) == null ? void 0 : Q.call(U, q)) || null, ne = ((ie = u == null ? void 0 : u.displayPaint) == null ? void 0 : ie.canvas) || null, A = ((Se = u == null ? void 0 : u.committedMask) == null ? void 0 : Se.canvas) || null, ee = Math.max(1, Number(((we = u == null ? void 0 : u.descriptor) == null ? void 0 : we.width) || (ne == null ? void 0 : ne.width) || (A == null ? void 0 : A.width) || 2048)), ke = Math.max(1, Number(((Ae = u == null ? void 0 : u.descriptor) == null ? void 0 : Ae.height) || (ne == null ? void 0 : ne.height) || (A == null ? void 0 : A.height) || 1024));
          (!ne && B.totalPaintCount > 0 || !A && B.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((Fe = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Fe.width) || 0) !== ee || Number(((Ye = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Ye.height) || 0) !== ke) && (r._paintLayerSyncBlankSurface = f(ee, ke)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ee, ke));
          const me = ne || B.totalPaintCount > 0 && ((Le = r._paintLayerSyncBlankSurface) == null ? void 0 : Le.canvas) || null, $e = A || B.totalMaskCount > 0 && ((je = r._paintLayerSyncBlankSurface) == null ? void 0 : je.canvas) || null;
          if (!me && !$e) return;
          let He = null, F = null;
          const be = [];
          if (B.totalPaintCount > 0) {
            He = await pe(me, `pano_paint_${L}.png`);
            for (const ge of q) {
              const Re = String(ge || "").trim();
              if (!Re) continue;
              const Ke = ((k = (tt = r.paintEngine) == null ? void 0 : tt.getGroupDisplayCanvas) == null ? void 0 : k.call(tt, Re)) || null;
              if (!Ke) continue;
              const We = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await pe(Ke, `pano_group_${L}_${We}.png`);
              qe && be.push({
                id: Re,
                actionGroupId: Re,
                image: qe
              });
            }
          }
          B.totalMaskCount > 0 && (F = await pe($e, `pano_mask_${L}.png`)), T === C() && (c.painting_layer = {
            paint: He,
            mask: F,
            groups: be,
            revision: T
          }, Ne = T, p());
        } catch (q) {
          throw q;
        } finally {
          De = !1;
        }
      }
    })();
    return tl.set(L, ae), ae.finally(() => {
      tl.get(L) === ae && tl.delete(L);
    }), ae;
  }
  function P(L) {
    var Q;
    const Z = ((Q = r.paintEngine) == null ? void 0 : Q.getMaskDisplayCanvas()) || null;
    if (!Z) return L;
    const ae = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, T = L.reduce((ie, Se) => Math.max(ie, Number((Se == null ? void 0 : Se.zIndex) || 0)), -1), B = (Array.isArray(c.stickers) ? c.stickers : []).reduce((ie, Se) => Math.max(ie, Number((Se == null ? void 0 : Se.z_index) || 0)), -1), U = Math.max(T, B);
    return L.push({
      id: "mask_display",
      source: Z,
      revision: ae,
      zIndex: U + 1,
      opacity: 1,
      visible: !0
    }), L;
  }
  function D() {
    var T, B;
    const L = S(!0), Z = Me(), ae = [];
    for (const U of L) {
      if ((U == null ? void 0 : U.type) === "strokeGroup") {
        const Q = String(U.actionGroupId || U.id || "");
        if (!Q) continue;
        const ie = ((B = (T = r.paintEngine) == null ? void 0 : T.getGroupDisplayCanvas) == null ? void 0 : B.call(T, Q)) || null;
        if (!ie) continue;
        ae.push({
          id: `paint_group:${Q}`,
          source: ie,
          revision: `${v()}:${Q}`,
          zIndex: Number((U == null ? void 0 : U.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((U == null ? void 0 : U.type) === "rasterObject") {
        const Q = U.item || null, ie = j((Q == null ? void 0 : Q.id) || U.id || "");
        if (!ie) continue;
        const Se = w(Q, () => I());
        if (!Se) continue;
        const we = z(Se, U, Z), Ae = (Q == null ? void 0 : Q.transform) || {};
        ae.push({
          id: `raster:${ie}`,
          source: we,
          revision: [
            C(),
            (Z == null ? void 0 : Z.key) || "",
            ie,
            Number(Ae.du || 0).toFixed(6),
            Number(Ae.dv || 0).toFixed(6),
            Number(Ae.rot_deg || 0).toFixed(3),
            Number(Ae.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((U == null ? void 0 : U.z_index) || 0),
          opacity: 1,
          visible: (Q == null ? void 0 : Q.visible) !== !1
        });
      }
    }
    return P(ae);
  }
  function Y() {
    return y() ? D().filter((L) => L.visible !== !1).map((L) => ({ id: L.id, media: L.source, revision: L.revision, opacity: L.opacity, zIndex: L.zIndex })) : [];
  }
  function fe() {
    c.painting_layer !== null && (c.painting_layer = null), Ne = "";
  }
  return {
    connect(L) {
      ({
        commitState: p,
        createRasterSurface: f,
        ensureGroupFrame: h,
        getActivePaintTargetDescriptor: g,
        getDesiredPaintTargetDescriptor: _,
        getDisplayPaintRevisionKey: v,
        getOrderedDisplayListObjects: S,
        getOrderedPaintGroupIds: M,
        getPaintingCompositeRevisionKey: C,
        getPaintingRevisionKey: W,
        getStrokeGroupStrokes: V,
        inverseTransformErpPointAround: $,
        paintingShown: y,
        parseRasterObjectSelectionId: j,
        processFreehandPoints: G,
        rasterizeStrokeToSurface: re,
        rebuildPaintEngineIfNeeded: se,
        requestDraw: I,
        screenPosToErpPoint: H,
        shortestWrappedDelta: J
      } = L);
    },
    getSharedLivePaintSurface: xe,
    getLivePaintRevisionSuffix: _e,
    isPaintCompositeInteraction: de,
    hitRasterObjectAt: O,
    invalidateLivePaintPreviewCaches: ze,
    buildRasterObjectEditCanvas: w,
    needsPaintingLayerSync: oe,
    syncPaintingLayerAsync: Pe,
    invalidatePaintingLayerState: fe,
    buildEditorViewPaintLayers: Y
  };
}
function cO(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, a, s;
  function c(ce) {
    return !ce || typeof ce != "object" ? { x: 0, y: 0 } : { x: Number((ce == null ? void 0 : ce.u) || 0), y: Number((ce == null ? void 0 : ce.v) || 0) };
  }
  function p(ce, z, w, pe = {}) {
    return { ...{
      ...ce,
      t: Number((ce == null ? void 0 : ce.t) || 0),
      widthScale: g(ce, "widthScale", 1),
      pressureLike: g(ce, "pressureLike", 1)
    }, ...pe, u: z, v: w };
  }
  function f(ce, z = !1) {
    return z ? 12e-4 : 18e-4;
  }
  function h(ce, z, w = !1) {
    if (!Array.isArray(ce) || !ce.length) return [];
    const pe = String((z == null ? void 0 : z.kind) || "") === "ERP_GLOBAL", Ne = /* @__PURE__ */ new WeakMap();
    if (pe) {
      let T = null;
      ce.forEach((B) => {
        const U = Number((B == null ? void 0 : B.u) || 0), Q = Number((B == null ? void 0 : B.v) || 0), ie = (U % 1 + 1) % 1, Se = T == null ? ie : T + s(ie, (T % 1 + 1) % 1);
        Ne.set(B, { x: Se, y: Q }), T = Se;
      });
    }
    const De = (T) => !T || typeof T != "object" ? { x: 0, y: 0 } : Ne.get(T) || c(T), oe = (T, B, U, Q = {}) => {
      const ie = pe ? (Number(B) % 1 + 1) % 1 : Number(B), Se = p(T, ie, U, Q);
      return Ne.set(Se, { x: Number(B), y: Number(U) }), Se;
    }, Pe = (T, B, U) => {
      const Q = De(T), ie = De(B);
      return oe(T, or(Q.x, ie.x, U), or(Q.y, ie.y, U), {
        t: or(Number((T == null ? void 0 : T.t) || 0), Number((B == null ? void 0 : B.t) || 0), U),
        widthScale: or(g(T, "widthScale", 1), g(B, "widthScale", 1), U),
        pressureLike: or(g(T, "pressureLike", 1), g(B, "pressureLike", 1), U)
      });
    };
    if (ce.length === 1) {
      const T = De(ce[0]);
      return [oe(ce[0], T.x, T.y)];
    }
    const P = f(z, w), D = (T, B) => {
      const U = [0];
      for (let Le = 1; Le < T.length; Le += 1) {
        const je = De(T[Le - 1]), tt = De(T[Le]);
        U.push(U[Le - 1] + Math.hypot(tt.x - je.x, tt.y - je.y));
      }
      const Q = U[U.length - 1] || 0;
      if (Q <= 1e-8) {
        const Le = T[0], je = De(Le);
        return [oe(Le, je.x, je.y)];
      }
      const ie = [];
      let Se = 0;
      for (let Le = 0; Le <= Q + 1e-9; Le += B) {
        for (; Se < U.length - 2 && U[Se + 1] < Le; ) Se += 1;
        const je = U[Se], tt = U[Se + 1], k = Math.max(1e-8, tt - je);
        ie.push(Pe(T[Se], T[Se + 1], Ie((Le - je) / k, 0, 1)));
      }
      const we = T[T.length - 1], Ae = De(we), Fe = ie[ie.length - 1], Ye = Fe ? De(Fe) : null;
      return (!Ye || Math.hypot(Ye.x - Ae.x, Ye.y - Ae.y) > B * 0.35) && ie.push(oe(we, Ae.x, Ae.y)), ie;
    }, Y = (T) => {
      if (!Array.isArray(T) || T.length < 3) return T ? T.slice() : [];
      const B = De(T[0]), U = [oe(T[0], B.x, B.y)];
      for (let Se = 0; Se < T.length - 1; Se += 1) {
        const we = T[Se], Ae = T[Se + 1], Fe = De(we), Ye = De(Ae), Le = oe(
          we,
          Fe.x * 0.75 + Ye.x * 0.25,
          Fe.y * 0.75 + Ye.y * 0.25,
          {
            t: Number(we.t || 0) * 0.75 + Number(Ae.t || 0) * 0.25,
            widthScale: g(we, "widthScale", 1) * 0.75 + g(Ae, "widthScale", 1) * 0.25,
            pressureLike: g(we, "pressureLike", 1) * 0.75 + g(Ae, "pressureLike", 1) * 0.25
          }
        ), je = oe(
          we,
          Fe.x * 0.25 + Ye.x * 0.75,
          Fe.y * 0.25 + Ye.y * 0.75,
          {
            t: Number(we.t || 0) * 0.25 + Number(Ae.t || 0) * 0.75,
            widthScale: g(we, "widthScale", 1) * 0.25 + g(Ae, "widthScale", 1) * 0.75,
            pressureLike: g(we, "pressureLike", 1) * 0.25 + g(Ae, "pressureLike", 1) * 0.75
          }
        );
        U.push(Le, je);
      }
      const Q = T[T.length - 1], ie = De(Q);
      return U.push(oe(Q, ie.x, ie.y)), U;
    }, fe = D(ce, P);
    if (fe.length < 3) return fe;
    const L = w ? 2 : 1;
    let Z = fe.slice();
    for (let T = 0; T < L; T += 1) Z = Y(Z);
    return D(Z, Math.max(P * 0.75, 55e-5));
  }
  function g(ce, z, w = 1) {
    const pe = Number(ce == null ? void 0 : ce[z]);
    return Number.isFinite(pe) ? Math.max(0, pe) : w;
  }
  function _(ce) {
    const z = Number(ce == null ? void 0 : ce.radiusValue);
    if (Number.isFinite(z) && z > 0) {
      const w = String((ce == null ? void 0 : ce.radiusModel) || "").trim() || "erp_uv_norm";
      return w === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((ce == null ? void 0 : ce.size) || 10) * 0.5 / 2048)
      } : {
        model: w,
        value: z
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((ce == null ? void 0 : ce.size) || 10) * 0.5 / 2048)
    };
  }
  function v(ce, z, w = {}) {
    const pe = Mn({ label: "editor.raster-surface" });
    pe.width = Math.max(1, Math.round(ce)), pe.height = Math.max(1, Math.round(z));
    const Ne = pe.getContext("2d", w.readback ? { willReadFrequently: !0 } : void 0);
    return Ne && (Ne.clearRect(0, 0, pe.width, pe.height), Ne.imageSmoothingEnabled = !0), { canvas: pe, ctx: Ne };
  }
  function S() {
    const ce = I();
    return `${String(t.paintStrokeRevision)}:${ce.width}x${ce.height}`;
  }
  function M() {
    const ce = I();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${ce.width}x${ce.height}`;
  }
  function C() {
    const ce = i(), z = M();
    return ce ? `${z}:${ce}` : z;
  }
  function W() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function V() {
    t.paintCompositeRevision += 1;
  }
  function $() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function y() {
    var ce, z;
    t.paintEngineRevisionKey = null, (z = (ce = t.paintEngine) == null ? void 0 : ce.rebuildCommitted) == null || z.call(ce, r), t.paintEngineRevisionKey = S();
  }
  function j() {
    $(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function G({ rebuildPaintEngine: ce = !1 } = {}) {
    o(), W(), j(), ce && y();
  }
  function re() {
    o(), V(), j();
  }
  function se() {
    var pe;
    const ce = I(), z = `${ce.width}x${ce.height}`;
    t.paintEngineDescriptorKey !== z && (t.paintEngine = Zd(ce), t.paintEngineDescriptorKey = z, t.paintEngineRevisionKey = "");
    const w = S();
    t.paintEngineRevisionKey !== w && (t.paintEngineRevisionKey = w, (pe = t.paintEngine) == null || pe.rebuildCommitted(r));
  }
  function I() {
    const ce = Math.max(1, a(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: ce,
      height: Math.max(1, Math.round(ce * 0.5))
    };
  }
  function H() {
    return I();
  }
  function J(ce, z, w, pe, Ne = null) {
    const De = _(ce), oe = g(z, "widthScale", 1) * g(z, "pressureLike", 1);
    return De.model === "erp_uv_norm" ? Math.max(0.5, De.value * w * oe) : De.model === "world_angle" ? Ne ? Math.max(0.5, De.value / Math.max(1e-6, Number(Ne.hFOV_deg || 90) * zr) * w * oe) : Math.max(0.5, De.value / (2 * Math.PI) * w * oe) : Math.max(0.5, Number((ce == null ? void 0 : ce.size) || 10) * 0.5 * oe);
  }
  function de(ce, z, w = {}) {
    const pe = String((z == null ? void 0 : z.layerKind) || "paint"), Ne = String((z == null ? void 0 : z.toolKind) || "pen"), De = w.preview === !0, oe = De ? 0.78 : 1;
    if (ce.globalAlpha = Ne === "marker" ? 0.7 * oe : 1, pe === "mask") {
      ce.fillStyle = De ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Ne === "eraser") {
      ce.globalCompositeOperation = "destination-out", ce.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const Pe = String((z == null ? void 0 : z.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (z == null ? void 0 : z.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, P = De ? Math.max(0.28, Number(Pe.a ?? 1) * 0.88) : Math.max(0.12, Number(Pe.a ?? 1));
    ce.fillStyle = `rgba(${Math.round(Number(Pe.r || 0) * 255)}, ${Math.round(Number(Pe.g || 0) * 255)}, ${Math.round(Number(Pe.b || 0) * 255)}, ${P})`;
  }
  function xe(ce, z, w) {
    const pe = Math.max(0.5, Math.min(w, Number((z == null ? void 0 : z.radiusPx) || 0.5)));
    !Number.isFinite(z == null ? void 0 : z.x) || !Number.isFinite(z == null ? void 0 : z.y) || !Number.isFinite(pe) || (ce.beginPath(), ce.arc(Number(z.x || 0), Number(z.y || 0), pe, 0, Math.PI * 2), ce.fill());
  }
  function _e(ce, z, w, pe, Ne = {}) {
    if (!ce || !Array.isArray(z) || !z.length) return;
    const De = Math.max(pe.w, pe.h) * 0.25;
    ce.save(), de(ce, w, Ne);
    const oe = (Pe) => xe(ce, Pe, De);
    if (z.length === 1) {
      oe(z[0]), ce.restore();
      return;
    }
    for (let Pe = 0; Pe < z.length - 1; Pe += 1) {
      const P = z[Pe], D = z[Pe + 1];
      if (!P || !D) continue;
      const Y = Number(P.x || 0), fe = Number(P.y || 0), L = Number(D.x || 0), Z = Number(D.y || 0), ae = Math.max(0.5, Math.min(De, Number(P.radiusPx || 0.5))), T = Math.max(0.5, Math.min(De, Number(D.radiusPx || 0.5)));
      if (!Number.isFinite(Y) || !Number.isFinite(fe) || !Number.isFinite(L) || !Number.isFinite(Z) || !Number.isFinite(ae) || !Number.isFinite(T)) continue;
      const B = L - Y, U = Z - fe, Q = Math.hypot(B, U);
      if (!Number.isFinite(Q) || Q < 1e-6) {
        oe(P);
        continue;
      }
      if (Q > Math.max(pe.w, pe.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(ae, T)), Se = Math.max(0.35, Math.min(ie * 0.4, 2.25)), we = Math.max(1, Math.ceil(Q / Se));
      for (let Ae = 0; Ae <= we; Ae += 1) {
        const Fe = Ae / we;
        oe({
          x: or(Y, L, Fe),
          y: or(fe, Z, Fe),
          radiusPx: or(ae, T, Fe)
        });
      }
    }
    oe(z[z.length - 1]), ce.restore();
  }
  function he(ce, z, w, pe) {
    _e(ce, z, w, pe, { preview: !1 });
  }
  function te(ce, z, w, pe, Ne) {
    var Pe, P, D, Y;
    if (!ce || !Array.isArray(z) || z.length < 3) return;
    const De = "u", oe = "v";
    if (ce.save(), String((w == null ? void 0 : w.layerKind) || "") === "mask")
      ce.fillStyle = "rgba(255,255,255,1)";
    else if (String((w == null ? void 0 : w.toolKind) || "") === "eraser")
      ce.globalCompositeOperation = "destination-out", ce.fillStyle = "rgba(0,0,0,1)";
    else {
      const fe = (w == null ? void 0 : w.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      ce.fillStyle = `rgba(${Math.round(Number(fe.r || 0) * 255)}, ${Math.round(Number(fe.g || 0) * 255)}, ${Math.round(Number(fe.b || 0) * 255)}, ${Number(fe.a ?? 1)})`;
    }
    ce.beginPath(), ce.moveTo(Number(((Pe = z[0]) == null ? void 0 : Pe[De]) || 0) * pe.w, Number(((P = z[0]) == null ? void 0 : P[oe]) || 0) * pe.h);
    for (let fe = 1; fe < z.length; fe += 1)
      ce.lineTo(Number(((D = z[fe]) == null ? void 0 : D[De]) || 0) * pe.w, Number(((Y = z[fe]) == null ? void 0 : Y[oe]) || 0) * pe.h);
    ce.closePath(), ce.fill(), ce.restore();
  }
  function R(ce) {
    const z = (ce == null ? void 0 : ce.geometry) || null;
    return z ? String(z.geometryKind || "") === "lasso_fill" ? Array.isArray(z.points) ? z.points : [] : Array.isArray(z.processedPoints) && z.processedPoints.length ? z.processedPoints : Array.isArray(z.rawPoints) && z.rawPoints.length ? z.rawPoints : Array.isArray(z.points) ? z.points : [] : [];
  }
  function O(ce, z) {
    const w = R(ce);
    return !Array.isArray(w) || !w.length ? [] : w.map((pe) => ({
      x: Number((pe == null ? void 0 : pe.u) || 0) * Number((z == null ? void 0 : z.w) || 1),
      y: Number((pe == null ? void 0 : pe.v) || 0) * Number((z == null ? void 0 : z.h) || 1),
      radiusPx: J(ce, pe, Number((z == null ? void 0 : z.w) || 1), Number((z == null ? void 0 : z.h) || 1))
    }));
  }
  function ue(ce, z, w = null) {
    var Pe, P, D, Y;
    if (!(ce != null && ce.ctx) || !z) return !1;
    const pe = w || { w: Number(((Pe = ce.canvas) == null ? void 0 : Pe.width) || 0), h: Number(((P = ce.canvas) == null ? void 0 : P.height) || 0) }, Ne = String((z == null ? void 0 : z.toolKind) || "") === "eraser" ? {
      ...z,
      layerKind: "mask",
      toolKind: String(((D = z == null ? void 0 : z.geometry) == null ? void 0 : D.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : z;
    if (String(((Y = z == null ? void 0 : z.geometry) == null ? void 0 : Y.geometryKind) || "") === "lasso_fill")
      return te(ce.ctx, R(Ne), Ne, pe), !0;
    const oe = O(Ne, pe);
    return oe.length ? (he(ce.ctx, oe, Ne, pe), !0) : !1;
  }
  function Me(ce, z, w, pe = 8) {
    const Ne = new Uint8Array(z * w), De = [], oe = new Int32Array(z * w), Pe = new Int32Array(z * w);
    for (let P = 0; P < w; P += 1)
      for (let D = 0; D < z; D += 1) {
        const Y = P * z + D;
        if (Ne[Y] || ce[Y] <= pe) continue;
        let fe = 0, L = 0;
        oe[L] = D, Pe[L] = P, L += 1, Ne[Y] = 1;
        const Z = [];
        let ae = D, T = P, B = D, U = P;
        for (; fe < L; ) {
          const Q = oe[fe], ie = Pe[fe];
          fe += 1, Z.push({ x: Q, y: ie }), Q < ae && (ae = Q), ie < T && (T = ie), Q > B && (B = Q), ie > U && (U = ie);
          const Se = [
            [(Q - 1 + z) % z, ie],
            [(Q + 1) % z, ie],
            [Q, ie - 1],
            [Q, ie + 1]
          ];
          for (const [we, Ae] of Se) {
            if (Ae < 0 || Ae >= w) continue;
            const Fe = Ae * z + we;
            Ne[Fe] || ce[Fe] <= pe || (Ne[Fe] = 1, oe[L] = we, Pe[L] = Ae, L += 1);
          }
        }
        De.push({ pixels: Z, minX: ae, minY: T, maxX: B, maxY: U });
      }
    return De;
  }
  function ze(ce, z) {
    const w = [...new Set((Array.isArray(ce == null ? void 0 : ce.pixels) ? ce.pixels : []).map((P) => Number((P == null ? void 0 : P.x) || 0)).filter((P) => Number.isFinite(P)))].sort((P, D) => P - D);
    if (!w.length) return null;
    if (w.length === 1)
      return { startX: w[0], widthPx: 1 };
    let pe = -1, Ne = 0;
    for (let P = 0; P < w.length; P += 1) {
      const D = w[P], fe = (P === w.length - 1 ? w[0] + z : w[P + 1]) - D - 1;
      fe > pe && (pe = fe, Ne = P);
    }
    const De = (w[(Ne + 1) % w.length] + z) % z;
    let oe = 1 / 0, Pe = -1 / 0;
    for (const P of w) {
      const D = (P - De + z) % z;
      oe = Math.min(oe, D), Pe = Math.max(Pe, D);
    }
    return {
      startX: De,
      widthPx: Math.max(1, Pe - oe + 1)
    };
  }
  function Xe(ce, z, w = {}) {
    var D;
    const pe = Number((ce == null ? void 0 : ce.width) || 0), Ne = Number((ce == null ? void 0 : ce.height) || 0), De = (D = ce == null ? void 0 : ce.getContext) == null ? void 0 : D.call(ce, "2d");
    if (!De || pe < 1 || Ne < 1) return [];
    const oe = De.getImageData(0, 0, pe, Ne), Pe = new Uint8Array(pe * Ne);
    for (let Y = 0; Y < Pe.length; Y += 1) Pe[Y] = oe.data[Y * 4 + 3];
    return Me(Pe, pe, Ne, 8).map((Y, fe) => {
      const L = ze(Y, pe);
      if (!L) return null;
      const Z = Number(L.widthPx || 0), ae = Y.maxY - Y.minY + 1, T = Number(L.startX || 0), B = Mn({ label: "editor.lasso-fill" });
      B.width = Z, B.height = ae;
      const U = B.getContext("2d");
      if (!U) return null;
      const Q = U.createImageData(Z, ae);
      return Y.pixels.forEach(({ x: ie, y: Se }) => {
        const we = (Se * pe + ie) * 4, Ae = (Number(ie || 0) - T + pe) % pe, Fe = ((Se - Y.minY) * Z + Ae) * 4;
        Q.data[Fe + 0] = oe.data[we + 0], Q.data[Fe + 1] = oe.data[we + 1], Q.data[Fe + 2] = oe.data[we + 2], Q.data[Fe + 3] = oe.data[we + 3];
      }), U.putImageData(Q, 0, 0), {
        id: To("raster"),
        type: "raster_frozen",
        layerKind: z === "mask" ? "mask" : "paint",
        z_index: Number((w == null ? void 0 : w.z_index) || 0) + fe * 1e-3,
        locked: (w == null ? void 0 : w.locked) === !0,
        bbox: {
          u0: 0,
          v0: Y.minY / Ne,
          u1: Z / pe,
          v1: (Y.maxY + 1) / Ne
        },
        rasterDataUrl: B.toDataURL("image/png"),
        transform: {
          du: T / pe,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(ce) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = ce);
    },
    processFreehandPoints: h,
    createRasterSurface: v,
    getPaintingRevisionKey: S,
    getPaintingCompositeRevisionKey: M,
    getDisplayPaintRevisionKey: C,
    refreshPaintEngineRevisionCache: y,
    markObjectVisualsDirty: j,
    markPaintStrokeVisualsDirty: G,
    markPaintCompositeVisualsDirty: re,
    rebuildPaintEngineIfNeeded: se,
    getDesiredPaintTargetDescriptor: I,
    getActivePaintTargetDescriptor: H,
    rasterizeStrokeToSurface: ue,
    createRasterFrozenObjectsFromCanvas: Xe
  };
}
function uO(e) {
  const {
    comfyMedia: t,
    editor: n,
    node: r,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, c, p, f, h, g, _;
  function v(se, I = null) {
    var H;
    if (se && typeof se == "object" && !Array.isArray(se)) return se;
    if (Array.isArray(se) && se.length > 0) {
      const J = se[0];
      if (J && typeof J == "object" && !Array.isArray(J)) return J;
    }
    if (Array.isArray(I) && I.length > 0) {
      const J = (H = I[0]) == null ? void 0 : H.parsed_state;
      if (J && typeof J == "object" && !Array.isArray(J))
        return {
          yaw_deg: Number(J.yaw_deg || 0),
          pitch_deg: Number(J.pitch_deg || 0),
          hFOV_deg: Number(J.hFOV_deg || 30),
          rot_deg: Number(J.roll_deg || 0)
        };
    }
    return null;
  }
  function S(se, I, H) {
    const J = Math.max(1, Number(I || 1)), de = Math.max(1, Number(H || 1)), xe = Ie(Number(se || 30), 0.1, 179) * zr, _e = 2 * Math.atan(Math.tan(xe * 0.5) * (de / J));
    return Ie(_e * Ji, 0.1, 179);
  }
  function M(se) {
    const I = String(se || "").trim();
    if (!I) return null;
    try {
      const H = JSON.parse(I);
      if (!H || typeof H != "object" || String(H.kind || "") !== "pano_sticker_state") return null;
      const J = H.version;
      let de = null;
      if (typeof J == "number" && Number.isInteger(J) ? de = J : typeof J == "string" && /^\d+$/.test(J) && (de = Number.parseInt(J, 10)), de !== 1) return null;
      const xe = H.pose;
      if (!xe || typeof xe != "object") return null;
      const _e = Number(xe.yaw_deg), he = Number(xe.pitch_deg), te = Number(xe.roll_deg), R = Number(xe.hFOV_deg);
      if (![_e, he, te, R].every((ze) => Number.isFinite(ze))) return null;
      let O = ((_e + 180) % 360 + 360) % 360 - 180;
      Object.is(O, -0) && (O = 0);
      const ue = {
        yaw_deg: O,
        pitch_deg: Ie(he, -89.9, 89.9),
        roll_deg: te,
        hFOV_deg: Ie(R, 0.1, 179)
      }, Me = Number(H.source_aspect);
      return Number.isFinite(Me) && Me > 0 && (ue.source_aspect = Me), ue;
    } catch {
      return null;
    }
  }
  function C(se) {
    const I = Number(se == null ? void 0 : se.yaw_deg), H = Number(se == null ? void 0 : se.pitch_deg), J = Number((se == null ? void 0 : se.roll_deg) ?? (se == null ? void 0 : se.rot_deg)), de = Number(se == null ? void 0 : se.hFOV_deg), xe = ao(se);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(I) ? I : 0),
        pitch_deg: Ie(Number.isFinite(H) ? H : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(J) ? J : 0,
        hFOV_deg: Ie(Number.isFinite(de) ? de : 90, 0.1, 179)
      },
      source_aspect: xe
    };
  }
  function W(se) {
    var he;
    if (!se || typeof se != "object") return C(null);
    const I = Number(se == null ? void 0 : se.yaw_deg), H = Number(se == null ? void 0 : se.pitch_deg), J = Number((se == null ? void 0 : se.roll_deg) ?? (se == null ? void 0 : se.rot_deg)), de = Number(se == null ? void 0 : se.hFOV_deg), xe = Number(se == null ? void 0 : se.vFOV_deg);
    let _e = 1;
    if (Number.isFinite(de) && Number.isFinite(xe)) {
      const te = Ie(de, 0.1, 179) * zr, R = Ie(xe, 0.1, 179) * zr, O = Math.tan(R * 0.5);
      if (Math.abs(O) > 1e-6) {
        const ue = Math.tan(te * 0.5) / O;
        Number.isFinite(ue) && ue > 0 && (_e = ue);
      }
    }
    if (se != null && se.asset_id && ((he = o == null ? void 0 : o.assets) != null && he[se.asset_id])) {
      const te = o.assets[se.asset_id], R = Number((te == null ? void 0 : te.w) || 0), O = Number((te == null ? void 0 : te.h) || 0);
      R > 0 && O > 0 && (_e = R / O);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(I) ? I : 0),
        pitch_deg: Ie(Number.isFinite(H) ? H : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(J) ? J : 0,
        hFOV_deg: Ie(Number.isFinite(de) ? de : 30, 0.1, 179)
      },
      source_aspect: _e
    };
  }
  function V(se) {
    return t.linkedValue(r, se);
  }
  function $(se, I, H) {
    const J = se && typeof se == "object" ? {
      yaw_deg: Number(se.yaw_deg || 0),
      pitch_deg: Number(se.pitch_deg || 0),
      roll_deg: Number(se.rot_deg ?? se.roll_deg ?? 0),
      hFOV_deg: Number(se.hFOV_deg || 30)
    } : M(I);
    if (J) {
      const _e = Number((H == null ? void 0 : H.naturalWidth) || (H == null ? void 0 : H.width) || J.source_aspect || 1), he = Number((H == null ? void 0 : H.naturalHeight) || (H == null ? void 0 : H.height) || 1);
      return {
        yaw_deg: Number(J.yaw_deg || 0),
        pitch_deg: Number(J.pitch_deg || 0),
        hFOV_deg: Number(J.hFOV_deg || 30),
        vFOV_deg: S(J.hFOV_deg, _e, he),
        rot_deg: Number(J.roll_deg || 0)
      };
    }
    const de = Number((H == null ? void 0 : H.naturalWidth) || (H == null ? void 0 : H.width) || 1), xe = Number((H == null ? void 0 : H.naturalHeight) || (H == null ? void 0 : H.height) || 1);
    return {
      yaw_deg: Number(n.viewYaw || 0),
      pitch_deg: Number(n.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: S(30, de, xe),
      rot_deg: 0
    };
  }
  function y() {
    const se = c(() => {
      oi(r, "image-loaded");
    }), I = gn(r, "external-sticker") ? v(p("pano_sticker_input_pose"), null) : null;
    return Yy(o, Uy(r, { pose: I, image: se }));
  }
  function j() {
    var he;
    const se = Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs.findIndex((te) => String((te == null ? void 0 : te.name) || "") === "sticker_image") : -1, I = se >= 0 ? ((he = r.getInputLink(se)) == null ? void 0 : he.id) ?? null : null, H = c(() => {
      oi(r, "image-loaded");
    }), J = v(p("pano_sticker_input_pose"), null), de = V("sticker_state"), xe = t.externalStateHash(r, de), _e = I == null ? null : $(J, de, H);
    return By(o, {
      connected: I != null,
      linkId: I,
      stateHash: xe,
      pose: _e,
      imageWidth: Number((H == null ? void 0 : H.naturalWidth) || (H == null ? void 0 : H.width) || 0),
      imageHeight: Number((H == null ? void 0 : H.naturalHeight) || (H == null ? void 0 : H.height) || 0)
    });
  }
  function G(se = "sync") {
    if (a !== "stickers" || i) return;
    const I = r.__panoSceneStateV2 ? y() : j();
    if (I.changed) {
      const H = o.stickers.find(f);
      o.stickers = I.state.stickers, o.active = I.state.active, H && n.selectedId === H.id && !o.stickers.some((J) => J.id === H.id) && (n.selectedId = null, n.selectedIds = []), s(), _(), g();
    }
    h();
  }
  function re() {
    const se = Array.isArray(o.stickers) ? o.stickers : [], I = [];
    for (const H of se)
      f(H) && (H.visible = !1, I.push(H));
    return I;
  }
  return {
    connect(se) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: c,
        getNodeUiValue: p,
        isExternalSticker: f,
        requestDraw: h,
        updateSelectionMenu: g,
        updateSidePanel: _
      } = se);
    },
    computeStickerVFov: S,
    buildCanonicalCutoutStickerState: C,
    buildCanonicalSelectedStickerState: W,
    reconcileExternalStickerFromInputs: G,
    collectExternalStickersForClearAll: re
  };
}
function dO(e) {
  const {
    app: t,
    cameraV2: n,
    canvas: r,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: c,
    state: p,
    stateV2: f,
    studio: h,
    viewController: g
  } = e;
  let _, v, S, M, C, W, V, $, y, j = null;
  function G(T, B = null) {
    const U = O();
    V(() => {
      i.viewTransition = Y2(U, T, performance.now(), { scale: Ne(), end: B });
    }), !i.viewTransition && B && re(B), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0, $(), C({ localOnly: !0, reason: Pt.VIEW });
  }
  function re(T) {
    te(sd({ ...he(), moved: T.moved }, T.mode, ue())), s.backgroundDirty = !0;
  }
  function se() {
    i.viewTransition && (i.viewTransition = null, $());
  }
  function I(T, B) {
    G({ ...O(), yaw_deg: T, pitch_deg: B });
  }
  function H() {
    return !h || ze() && !M();
  }
  function J() {
    return i.mode === "pano" && de();
  }
  function de() {
    return f && mM({ sceneLinked: c && !!kf(a).scene, files: W(), stickers: p.stickers });
  }
  function xe() {
    return i.spaceMode === "6dof" && J();
  }
  function _e() {
    var T, B, U;
    return cP((U = (B = (T = t.ui) == null ? void 0 : T.settings) == null ? void 0 : B.getSettingValue) == null ? void 0 : U.call(B, db));
  }
  function he() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function te(T) {
    i.spaceMode = T.mode, i.viewPosition = T.position, i.viewMoved = T.moved;
  }
  function R(T) {
    var U;
    const B = q2(i.spaceMode, i.viewTransition, T);
    if (B !== "keep") {
      if (B === "return") {
        G({ ...O(), position: ue(), distance: ((U = w()) == null ? void 0 : U.radius) || _r }, { mode: T, moved: !1 });
        return;
      }
      se(), te(sd({ ...he(), position: O().position }, T, ue())), s.backgroundDirty = !0, $(), C({ localOnly: !0, reason: Pt.VIEW });
    }
  }
  function O() {
    var U;
    const T = i.viewMoved ? i.viewDistance : ((U = w()) == null ? void 0 : U.radius) || _r, B = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: T };
    return uM(i.spaceMode, B, ue());
  }
  function ue() {
    return ze() ? z().position : [0, 0, 0];
  }
  function Me() {
    return n && p.camera !== null;
  }
  function ze() {
    return Me() && (!h || p.camera.visible);
  }
  function Xe() {
    return p.painting_visible !== !1;
  }
  function ce(T) {
    return T.visible && Jo(T.clip, i.frame);
  }
  function z() {
    return sf(p.camera, i.frame);
  }
  function w() {
    var B;
    const T = _();
    return ((B = T.space ?? T.content) == null ? void 0 : B.sphere) ?? null;
  }
  function pe(T) {
    i.viewPosition = T.position, i.viewYaw = T.yaw_deg, i.viewPitch = T.pitch_deg, i.viewDistance = T.distance, i.viewMoved = !0, s.backgroundDirty = !0, C({ localOnly: !0, reason: Pt.VIEW });
  }
  function Ne() {
    var T;
    return ((T = w()) == null ? void 0 : T.radius) || _r;
  }
  function De() {
    var Ae;
    const T = _().space, B = v(), U = i.worldSelectedId || i.selectedId, Q = B.stickers.findIndex((Fe) => Fe.id === U), ie = Q < 0 ? null : {
      sticker: B.stickers[Q],
      value: gc(B, i.frame).stickers[Q],
      plane: T.stickers.find((Fe) => Fe.id === U) ?? null,
      item: ((Ae = T.sticker) == null ? void 0 : Ae.id) === U && T.sticker.url ? { kind: T.sticker.kind, box: o.sceneBox(T.sticker.url) } : null
    }, Se = S() ? L() : SM(w(), ie);
    if (!Se) return;
    const we = O();
    i.viewDistance = we.distance, i.viewMoved = !0, G(my(we, Se, r.width, r.height));
  }
  function oe(T) {
    return o.pickSurface(ae(), T.x, T.y, r.width, r.height);
  }
  function Pe(T, B) {
    var U;
    return ld(T, B, i.viewMoved ? null : (U = w()) == null ? void 0 : U.center, Ne());
  }
  function P() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function D(T, B) {
    const U = performance.now(), Q = { x: T.x, y: T.y, time: U, key: o.contentRevision(), view: P() };
    if (!py(j, Q)) {
      const Se = oe(T);
      j = { ...Q, cost: performance.now() - U, hit: Se };
    }
    const ie = O();
    pe(hy(ie, Pe(ie, j.hit), B, Ne())), j.view = P(), j.wheelTime = U;
  }
  function Y(T, B, U) {
    const Q = O();
    i.interaction = T === "orbit" ? { kind: "space_orbit", last: B, pivot: Pe(Q, oe(B)) } : { kind: "space_pan", last: B, depth: fy(Q, Ne()) }, y(B), r.setPointerCapture(U);
  }
  function fe(T) {
    return T * 0.2;
  }
  function L() {
    return { center: z().position, radius: fe(Ne()) };
  }
  function Z(T, B) {
    const { yaw_deg: U, pitch_deg: Q } = vy(T.position, B);
    return { ...T, yaw_deg: U, pitch_deg: Q };
  }
  function ae() {
    return Sf(O(), r.width, r.height, w());
  }
  return {
    connect(T) {
      ({
        editorViewInput: _,
        editorViewSceneState: v,
        isCameraSelected: S,
        isErpCamera: M,
        requestDraw: C,
        sceneFiles: W,
        startAnimation: V,
        syncFloatingViewButtonState: $,
        updateCursor: y
      } = T);
    },
    transitionView: G,
    applyViewTransitionEnd: re,
    cancelViewTransition: se,
    turnViewTo: I,
    cameraPreviewShown: H,
    isSpaceView: J,
    hasSpaceContent: de,
    isFreeSpaceView: xe,
    viewControls: _e,
    spaceModeState: he,
    applySpaceMode: te,
    setSpaceMode: R,
    spaceViewState: O,
    spaceOrigin: ue,
    hasCamera: Me,
    cameraShoots: ze,
    paintingShown: Xe,
    sceneStickerShown: ce,
    cutoutCamera: z,
    contentSphere: w,
    setSpaceView: pe,
    spaceScale: Ne,
    frameSpaceContent: De,
    zoomSpaceAt: D,
    startSpaceDrag: Y,
    currentSpaceCamera: ae,
    cameraFrustumLength: fe,
    cameraSphere: L,
    lookingAt: Z
  };
}
function fO(e) {
  const {
    canvas: t,
    editor: n,
    editorView: r,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: c,
    stillCanvas: p,
    videoEl: f
  } = e;
  let h, g, _, v, S, M, C, W, V, $, y, j, G, re, se, I, H, J, de, xe, _e, he, te, R, O, ue, Me, ze, Xe, ce, z, w, pe = { revision: -1, sceneState: null }, Ne = null;
  function De() {
    return Ne || (Ne = P()), Ne;
  }
  function oe() {
    Ne = null;
  }
  function Pe() {
    return pe.sceneState;
  }
  function P() {
    const we = y(), Ae = g(), Fe = { ...s.assets };
    for (const me of c ? [] : s.stickers) {
      const $e = String((me == null ? void 0 : me.asset_id) || "");
      $e && !Fe[$e] && i.has($e) && (Fe[$e] = { type: "comfy_image", filename: $e });
    }
    const Ye = c ? s.stickers.map((me) => de(me) ? { ...me, source: { kind: "file", filename: ze(me) } } : me) : s.stickers;
    pe.revision !== a.stateRevision && (pe = { revision: a.stateRevision, sceneState: Vr({ ...s, stickers: Ye, assets: Fe, painting: null }) }), c && D(pe.sceneState);
    const Le = gc(pe.sceneState, n.frame), je = _e ? V() : null, tt = (me) => {
      if (c && !me.visible) return null;
      if (_e && I(me)) return je;
      const $e = G(me);
      return $e ? { media: $e, revision: j($e) } : null;
    }, k = ky(pe.sceneState, n.frame, s.stickers, { media: tt, paintLayers: Ae, evaluated: Le }), q = we && (we === f || we === p) ? f.dataset.panoSrc : we, u = se(we) ? { media: we, revision: j(we), coverage: zn(s.coverage), source: q } : null, ne = re(), A = dM(R(), ne, O());
    A.mode !== n.spaceMode && S(), h(A);
    const ee = ne ? Y(pe.sceneState, Le, tt) : null, ke = J() ? { ...ee, ...fe(ee) } : null;
    return { background: u, layers: k, space: ke, content: ee };
  }
  function D(we) {
    const Ae = new Map(s.stickers.map((Fe) => [Fe.id, Fe.clip]));
    we.scene.clip = { ...s.scene.clip };
    for (const Fe of we.stickers) {
      const Ye = Ae.get(Fe.id);
      Ye && (Fe.clip = { ...Ye });
    }
  }
  function Y(we, Ae, Fe) {
    const Ye = he(), Le = by(Ye, Ae.scene), je = Le != null && Le.url ? r.sceneBox(Le.url) : null, tt = je && dd(Le.kind, je), k = Me(), q = gM(k, we, Ae), u = q != null && q.url ? r.sceneBox(q.url) : null, ne = u ? [{ box: dd(q.kind, u), value: q.value }] : [], A = $M(we, n.frame, s.stickers, { media: Fe, evaluated: Ae }), ee = pd(vM(Ae, tt, A, ne));
    return {
      evaluated: Ae,
      sceneUrls: Ye ? Ye.urls.filter(Boolean) : [],
      scene: Le,
      stickerUrls: yM(k, we),
      sticker: q,
      stickers: A,
      sphere: ee
    };
  }
  function fe(we) {
    var Fe;
    const Ae = ((Fe = we.sphere) == null ? void 0 : Fe.radius) || _r;
    return {
      gizmo: Z() ? B() : L(we.evaluated),
      grid: n.showGrid && !n.fullscreen ? OM(Ae) : null,
      lines: v() ? T(Ae) : []
    };
  }
  function L(we) {
    const Ae = te(), Fe = we.stickers.find((Ye) => Ye.id === (Ae == null ? void 0 : Ae.id));
    return !w(Ae) || !(Fe != null && Fe.active) ? null : { mode: n.gizmoMode, transform: cd(Fe) };
  }
  function Z() {
    return v() && n.selectedId === _c;
  }
  let ae = { revision: -1, span: -1, segments: [] };
  function T(we) {
    const Ae = ce();
    (ae.revision !== a.stateRevision || ae.span !== Ae) && (ae = { revision: a.stateRevision, span: Ae, segments: FM(DM(s, Ae)) });
    const { segments: Fe } = ae, Ye = Fe.length ? [{ segments: Fe, color: ME }] : [];
    if (!H()) return Ye;
    const Le = Z() ? Eb : kE;
    return [...Ye, { segments: _y(C(), _(we)), color: Le }];
  }
  function B() {
    return !H() || !Z() || o ? null : { mode: n.gizmoMode === "rotate" ? "rotate" : "translate", transform: cd({ ...C(), scale: 1 }) };
  }
  function U() {
    const { background: we, layers: Ae, space: Fe } = De(), Ye = t.width, Le = t.height, je = W({ x: 0, y: 0, w: Ye, h: Le });
    let tt = !1;
    return !we && !Ae.length && !Fe ? (r.clear(460551), tt = r.ready) : (r.clear(), tt = !!r.render({
      rect: je,
      camera: Fe ? Sf(ue(), Ye, Le, Fe.sphere) : M(),
      background: we,
      layers: Ae,
      space: Fe
    })), Xe(), (n.worldSelectedId || Z() || xe()) && z(), tt;
  }
  function Q(we) {
    const { content: Ae } = De();
    return !Ae || !we.position ? Ua(we) : gy(Ua(we), we.position, $(), Ae.sphere);
  }
  function ie(we, Ae, Fe, Ye = null) {
    const { background: Le, layers: je, content: tt } = De();
    if (!Le && !je.length && !tt) return null;
    const k = tt && Ae.position ? tt : null;
    return r.render({ rect: we, camera: Q(Ae), background: Le, layers: je, space: k, owner: Fe, clearColor: Ye });
  }
  function Se(we) {
    return r.clear(460551), !!r.renderUnwrap({ rect: W(we), ...De() });
  }
  return {
    connect(we) {
      ({
        applySpaceMode: h,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: _,
        cameraShoots: v,
        cancelViewTransition: S,
        currentViewCamera: M,
        cutoutCamera: C,
        deviceRect: W,
        followPortSticker: V,
        frameViewDistance: $,
        getConnectedErpImage: y,
        getMediaRevisionToken: j,
        getStickerImage: G,
        hasSpaceContent: re,
        isDecodedImageReady: se,
        isExternalSticker: I,
        isFreeSpaceView: H,
        isSpaceView: J,
        isUploadingSticker: de,
        isWorldMenuShown: xe,
        portVideo: _e,
        sceneFiles: he,
        selectedWorldSticker: te,
        spaceModeState: R,
        spaceOrigin: O,
        spaceViewState: ue,
        stickerFiles: Me,
        stickerImageKey: ze,
        syncFloatingViewButtonState: Xe,
        timelineSpanFrames: ce,
        updateSelectionMenu: z,
        worldStickerEditable: w
      } = we);
    },
    editorViewInput: De,
    endEditorViewFrame: oe,
    editorViewSceneState: Pe,
    isCameraSelected: Z,
    renderEditorView: U,
    shotViewCamera: Q,
    drawEditorViewShot: ie,
    renderEditorViewUnwrap: Se
  };
}
const mg = /* @__PURE__ */ new Map(), Sr = Dy({
  app: qn,
  api: en,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Id,
    markImageFailed: Ib,
    markImageLoading: Ab,
    markImageReady: Cb
  }
});
function Vu(e) {
  if (!gn(e, "background") || !gn(e, "external-sticker")) return null;
  const t = Sr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? ta(t[0]) : null;
}
function pO(e) {
  if (!gn(e, "background")) return null;
  const [t] = Sr.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = Sr.uiValue(e, "pano_timeline_frames") || [], [r] = Sr.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: zn(r) };
}
const hO = Sr.assetSource, mO = Sr.source, gO = Sr.uiImage, yO = Sr.invalidateUiImage, gg = Sr.loadPreferredExactLinkedImage;
async function bO(e, t, n = {}) {
  var Sh, wh;
  await fb(e, { tolerateOperationFailure: !0 }), Sr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, a = jE(e, t);
  await Tf();
  const s = el(e, "output_preset"), c = el(e, "coverage"), p = el(e, "bg_color"), f = el(e, gE), h = () => {
    const l = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return gg(
      e,
      l,
      () => Ge(),
      `background:size:${l.join("|")}`
    );
  }, g = () => {
    const l = h();
    return WE(l);
  }, _ = (l = 2048) => {
    const d = s == null ? void 0 : s.value;
    return GE(d) ? g() || Math.max(1, Math.round(Number(l || 2048))) : HE(d, l);
  }, v = e.__panoSceneStateV2 === !0, S = t === "stickers" && v, M = t === "cutout" && v, C = S && e.__panoStudio === !0, W = M || C, V = t === "cutout" || C, $ = M ? pO(e) : null, y = (v ? iy : ry)(String((f == null ? void 0 : f.value) || ""), {
    outputPreset: _(2048),
    backgroundColor: String((p == null ? void 0 : p.value) || "#00ff00"),
    coverage: $ ? $.coverage : zn(c == null ? void 0 : c.value),
    sharedUiSettings: KE(),
    active: sy(e),
    fps: v ? Vu(e) : null,
    scene: ($ == null ? void 0 : $.state) ?? null,
    camera: M
  });
  e.__panoLiveStateOverride = y, e.__panoLiveStateVersion = 0;
  let j = null;
  W ? (j = y.camera && (!C || y.camera.visible !== !1) ? _m(y.camera, 0) : null, y.shots = j ? [{ ...j, position: [...j.position] }] : [], y.active.selected_shot_id = j && M ? _c : null) : t === "cutout" && (y.shots = Array.isArray(y.shots) ? y.shots.slice(0, 1) : [], y.shots.length || (y.active.selected_shot_id = null));
  const G = t === "cutout" ? (() => {
    var m;
    const l = Array.isArray(y.shots) ? y.shots : [], d = String(((m = y == null ? void 0 : y.active) == null ? void 0 : m.selected_shot_id) || "");
    return l.find((b) => String((b == null ? void 0 : b.id) || "") === d) || l[0] || null;
  })() : null, re = G ? mp(G, !1) : { width: 220, height: 132 }, se = Pb(C ? "studio" : t), I = /* @__PURE__ */ Qo({
    stageStatus: yr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (se.viewButtons || []).map((l) => ({ ...l, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Sh = se.spaceButtons) != null && Sh.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: se.spaceButtons, frame: se.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (se.toolButtons || []).map((l) => ({
      ...l,
      disabled: !1,
      ...l.key === "add-world" ? { visible: S } : {},
      ...M && OE.has(l.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(se.floatingButtons || []).map((l) => ({ ...l, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ue.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ue.aspect,
      rotateIcon: Ue.rotate_90,
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
      icon: Ue.fullscreen,
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
      historyEntries: Array.from({ length: 8 }, (l, d) => ({ index: d, color: null })),
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
      label: G ? "Loading preview" : "Add Frame to preview"
    }
  }), H = { frame: /* @__PURE__ */ xl(0), playing: /* @__PURE__ */ xl(!1) }, J = document.createElement("div");
  document.body.appendChild(J);
  const de = ({ intent: l, file: d } = {}) => {
    if (br(d)) {
      if (l === "add") {
        Ap(d);
        return;
      }
      if (l === "add-world") {
        pv(d);
        return;
      }
      l === "replace" && gv(d);
    }
  }, xe = ({ intent: l } = {}) => {
  }, _e = Yd(hE, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: se,
    paintSwatches: _l.map((l) => ({
      id: l.id,
      label: l.label,
      cssColor: Ir(l.color, 1)
    })),
    uiState: I,
    playhead: H,
    onClose: () => {
      wo();
    },
    onTimeline: (l) => uv(l),
    onImageFileSelected: de,
    onImageFileCancelled: xe
  });
  let he = null;
  try {
    he = _e.mount(J);
  } catch (l) {
    try {
      _e.unmount();
    } catch {
    }
    throw J.remove(), l;
  }
  const te = J.querySelector(".pano-modal-overlay"), R = J.querySelector(".pano-modal"), O = R == null ? void 0 : R.querySelector("[data-stage-overlay]"), ue = R == null ? void 0 : R.querySelector("[data-stage-background]"), Me = R == null ? void 0 : R.querySelector(".pano-stage-wrap"), ze = ((wh = he == null ? void 0 : he.getPaintOverlayRefs) == null ? void 0 : wh.call(he)) || {}, Xe = ze.cursor || null, ce = ze.sizePreview || null, z = ze.sizeSample || null;
  if (!te || !R || !O || !ue || !Me || !Xe || !ce || !z)
    throw _e.unmount(), J.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const w = O.getContext("2d"), pe = R.querySelector("[data-side]"), Ne = R.querySelector("[data-video-element]"), De = R.querySelector("[data-port-video-element]");
  su(O, "editor.stage-overlay"), su(ue, "editor.stage-background"), am(Ne, "editor.video"), am(De, "editor.port-video");
  const oe = R.querySelector(".pano-floating-right"), Pe = R.querySelector(".pano-floating-top"), P = R.querySelector("[data-tool-rail]"), D = R.querySelector("[data-frame-rail]"), Y = R.querySelector("[data-frame-roll-knob]"), fe = R.querySelector("[data-paint-dock]"), L = R.querySelector(".pano-video-transport"), Z = R.querySelector("[data-selection-menu]");
  let ae = !1;
  const T = R.querySelector("[data-tooltip]"), B = R.querySelector("[data-camera-preview-host]"), U = R.querySelector("[data-camera-preview-canvas]");
  su(U, "editor.camera-preview");
  const Q = R.querySelector("[data-paint-color-row]"), ie = R.querySelector("[data-paint-color-pop]"), Se = R.querySelector("[data-paint-color-sv]"), we = R.querySelector("[data-paint-color-sv-cursor]"), Ae = R.querySelector("[data-paint-hue-strip]"), Fe = R.querySelector("[data-paint-hue-handle]");
  let Ye = 0, Le = 0;
  Me == null || Me.removeAttribute("data-stage-ready"), Me == null || Me.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", ue.style.opacity = "0", i && (pe == null || pe.remove(), R.classList.add("pano-modal-readonly"));
  const je = () => {
    if (!u.customPaintSessionStart) return;
    if (Sl(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if ($E(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const l = [
      Yn(u.customPaintColor),
      ...u.customPaintHistory.filter((d) => !Sl(d, u.customPaintColor))
    ];
    u.customPaintHistory = l.slice(0, 8), u.customPaintSessionStart = null;
  }, tt = (l = !1) => {
    !ie || ie.hidden || (l ? je() : u.customPaintSessionStart = null, ie.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, k = () => {
    ie && (ie.hidden && (u.customPaintSessionStart = Yn(u.customPaintColor)), ie.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  R.addEventListener("pointerdown", () => Re.wake(), !0), R.addEventListener("pointerdown", (l) => {
    var d;
    l.target.closest("[data-frame-roll-knob]") || Fi(), !l.target.closest(".pano-picker") && (l.target.closest("[data-paint-color-row]") || (R.querySelectorAll(".pano-picker-pop").forEach((m) => {
      m.hidden = !0;
    }), tt(!0), V && u.cutoutAspectOpen && !l.target.closest(".pano-aspect-popover") && !l.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, ut(), Ge()), (d = I.frameRail) != null && d.aspectOpen && !l.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
  });
  const u = {
    mode: "pano",
    selectedId: t === "stickers" ? y.active.selected_sticker_id : y.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: _r,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: zn(y.coverage),
    historyController: nO(y),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Jr,
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
    showGrid: UE(e == null ? void 0 : e.id, !0),
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
    paintEngine: Zd(),
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
  }, ne = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let A = null;
  t === "stickers" && (u.selectedId = null, y.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const ee = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), He = Mn({ label: "editor.still" });
  He.__panoFrameIdx = 0;
  const F = Mn({ label: "editor.port-still" });
  F.__panoFrameIdx = 0;
  let be = () => {
  };
  const ge = {
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
  }, Re = $2({
    requestAnimationFrame: (l) => requestAnimationFrame(l),
    cancelAnimationFrame: (l) => cancelAnimationFrame(l),
    draw: (l, d) => nv(l, d),
    animating: () => ev()
  }), Ke = R2({
    requestFrame: (l) => Re.requestFrame(l),
    cancelFrame: (l) => Re.cancelFrame(l),
    tasks: {
      seek: () => tr.seek(ne.scrubFrame),
      timeline: () => Nr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        nr(), Ge({ localOnly: !0, reason: Pt.STATE });
      },
      sidePanel: () => it()
    }
  }), We = zM({
    canvas: ue,
    onReady: () => {
      Is(), Ge({ reason: Pt.CONTEXT });
    },
    onFailed: () => Ge(),
    onUpdate: () => Ge({ localOnly: !0, reason: Pt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      qe = null, Is(), Ge({ reason: Pt.CONTEXT });
    }
  });
  let qe = null, nt = null;
  const Et = Number.parseFloat(
    getComputedStyle(R).getPropertyValue("--pano-float-radius")
  ) || 10, ht = (l) => {
    const d = String(l || "default");
    O.style.cursor !== d && (O.style.cursor = d);
  }, St = {
    timer: 0,
    target: null
  }, Wt = {
    active: !1,
    depth: 0
  }, Ot = ef({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (l) => {
      u.viewYaw = Bt(Number(l.yaw || 0)), u.viewPitch = Ie(Number(l.pitch || 0), -89.9, 89.9), u.viewFov = Ie(Number(l.fov || u.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const l = O.getBoundingClientRect();
      return {
        w: Math.max(1, Number(l.width || O.clientWidth || 0)),
        h: Math.max(1, Number(l.height || O.clientHeight || 0))
      };
    },
    getInvert: () => {
      var l, d;
      return {
        x: (l = y.ui_settings) != null && l.invert_view_x ? -1 : 1,
        y: (d = y.ui_settings) != null && d.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Ss(),
    onInteraction: () => Re.requestDraw(Pt.VIEW)
  }), {
    applyInitialCutoutFocus: pn,
    applyRasterObjectOffset: rn,
    applyRasterObjectTransform: Mi,
    applySpaceMode: Ni,
    applyStrokeGroupOffset: ia,
    applyStrokeGroupTransform: Pn,
    applyViewTransitionEnd: fr,
    areAllSelectedItemsLocked: oa,
    bringSelectedToFront: aa,
    buildCanonicalCutoutStickerState: Pi,
    buildCanonicalSelectedStickerState: Lb,
    buildRasterObjectEditCanvas: Rb,
    cameraFrustumLength: Vb,
    cameraPreviewShown: jf,
    cameraShoots: gs,
    cameraSphere: $b,
    canRestoreSelectedToInitial: zb,
    cancelViewTransition: xc,
    clearSelection: sa,
    clearWorldSelection: Hf,
    collectExternalStickersForClearAll: jb,
    computeStickerVFov: ys,
    contentSphere: bs,
    createRasterFrozenObjectsFromCanvas: Hb,
    createRasterSurface: Gf,
    currentSpaceCamera: la,
    cutoutCamera: kc,
    deviceRect: Gb,
    drawEditorViewShot: Wf,
    editorViewInput: ca,
    endEditorViewFrame: Wb,
    ensureGroupFrame: co,
    ensurePaintingGroupEntry: Kf,
    erpPointToWorldDir: Kb,
    frameLocalPointToWorldDir: Bf,
    frameSpaceContent: Bb,
    getActivePaintTargetDescriptor: er,
    getConnectedErpImage: Ub,
    getCutoutInspectorItems: Uf,
    getCutoutSelectableItems: Yb,
    getCutoutSelectableItemsForDisplay: Xb,
    getCutoutSelectableItemsForHit: Mc,
    getDisplayListObjects: qb,
    getHistoryCapabilities: Yf,
    getList: Ai,
    getMultiSelectionGeom: ua,
    getNextStickerZIndex: vs,
    getOrderedDisplayListObjects: Xf,
    getPaintingGroupList: uo,
    getPortMedia: Jb,
    getRasterObjectCenterUv: Zb,
    getRasterObjectItem: qf,
    getRasterObjectList: Gr,
    getSelectableRasterObjectItems: Qb,
    getSelectableStrokeGroupItems: e1,
    getSelected: An,
    getSelectedItems: ui,
    getSelectedKind: _s,
    getSelectionItemIcon: t1,
    getSelectionItemLabelData: Nc,
    getSharedLivePaintSurface: n1,
    getStageImageStatus: r1,
    getStickerDisplayAlpha: i1,
    getStrokeGroupCenterUv: o1,
    getStrokeGroupItem: Jf,
    getStrokeGroupStrokes: fo,
    getUnwrapRect: Ss,
    hasCamera: po,
    hasSpaceContent: Pc,
    hitRasterObjectAt: Zf,
    invalidateLivePaintPreviewCaches: ho,
    isCameraSelected: Ci,
    isErpCamera: mo,
    isExternalSticker: pr,
    isFreeSpaceView: Wr,
    isItemLocked: On,
    isItemSelected: Qf,
    isPaintCompositeInteraction: a1,
    isRasterObjectItem: xr,
    isSceneSticker: Kr,
    isShotItem: Kn,
    isSpaceView: da,
    isStickerHidden: ws,
    isStickerItem: sn,
    isStrokeGroupItem: Tn,
    isUploadingSticker: s1,
    lookingAt: l1,
    makeRasterObjectSelectionId: ep,
    makeStrokeGroupSelectionId: tp,
    markObjectVisualsDirty: hn,
    markPaintCompositeVisualsDirty: go,
    markPaintStrokeVisualsDirty: kr,
    needsPaintingLayerSync: c1,
    objectGeom: ln,
    paintingShown: u1,
    parseRasterObjectSelectionId: Ii,
    playback: tr,
    playbackFps: d1,
    poseOf: yn,
    processFreehandPoints: np,
    projectDir: rp,
    projectDirUnwrap: f1,
    projectErpLassoPointsToFrameRect: p1,
    projectLassoPointsToCurrentView: h1,
    pushHistory: bt,
    queueVideoTransportLayout: m1,
    rasterizeStrokeToSurface: g1,
    rebuildPaintEngineIfNeeded: xs,
    reconcileExternalStickerFromInputs: ip,
    refreshModalVideoSource: yo,
    refreshPaintEngineRevisionCache: y1,
    releaseHiddenSelection: Ac,
    renderEditorView: b1,
    renderEditorViewUnwrap: v1,
    restoreHistory: Cc,
    restoreSelectedToInitialPose: _1,
    sampleStickerEdge: ks,
    sceneStickerShown: S1,
    screenPos: di,
    screenPosCss: Ms,
    screenPosToErpPoint: Mr,
    screenPosToFrameAsErpPoint: hr,
    screenToWorldDir: op,
    selectWorldSticker: Ic,
    selectedWorldSticker: fa,
    sendSelectedToBack: w1,
    setSelectedItem: Bn,
    setSelectedItems: x1,
    setSpaceMode: k1,
    setSpaceView: M1,
    shortestWrappedDelta: Ns,
    shotViewCamera: N1,
    spaceOrigin: P1,
    spaceScale: pa,
    spaceViewState: fi,
    startSpaceDrag: ap,
    stickerCornerOrderSanity: A1,
    stickerImageKey: Ec,
    syncPaintingLayerAsync: sp,
    syncVideoTransportState: lp,
    syncVideoTransportVisibility: C1,
    toggleSelectedExternalStickerVisibility: I1,
    toggleSelectedLock: E1,
    toggleVideoMuted: cp,
    transitionView: Ps,
    turnViewTo: up,
    videoCleanupFns: O1,
    videoState: As,
    viewControls: Oc,
    worldDirToFrameLocalPoint: dp,
    worldStickerEditable: Tc,
    writePose: mr,
    zoomSpaceAt: T1
  } = XE({
    api: en,
    app: qn,
    backgroundCanvas: ue,
    cameraV2: W,
    canvas: O,
    comfyMedia: Sr,
    commitAndRefreshNode: At,
    commitState: Un,
    cutoutV2: M,
    editor: u,
    editorView: We,
    floatingRightEl: oe,
    frameViewDistance: $p,
    getActiveCutoutShot: st,
    getBrushPresetIdForTool: Ti,
    getFrameViewRect: gr,
    getPaintingLayerList: Ls,
    imageCache: ee,
    isWorldMenuShown: qv,
    loadPreferredExactLinkedImage: gg,
    mediaAssetSource: hO,
    mediaSource: mO,
    mediaUiImage: gO,
    node: e,
    portStillCanvas: F,
    portVideoEl: De,
    rasterErpCanvasCache: $e,
    rasterImageAlphaCache: me,
    rasterImageCache: ke,
    readOnly: r,
    requestDraw: Ge,
    resolveEditorOutputPresetWidth: _,
    runtime: ge,
    sceneV2: S,
    scheduler: Re,
    setTimelineFrame: ov,
    shotEditor: V,
    stageWrap: Me,
    startAnimation: ha,
    state: y,
    stateV2: v,
    stillCanvas: He,
    stopTimelinePlayback: mn,
    studio: C,
    syncCutoutShot: nr,
    syncFloatingViewButtonState: Oi,
    syncPaintUi: Fn,
    syncTimeline: Nr,
    syncUndoRedoButtons: ah,
    timeline: ne,
    timelinePlayhead: H,
    timelineSpanFrames: Vc,
    type: t,
    uiState: I,
    updateCursor: It,
    updateSelectionMenu: ut,
    updateSidePanel: it,
    videoEl: Ne,
    viewController: Ot
  }, [
    QE,
    rO,
    iO,
    oO,
    aO,
    sO,
    lO,
    cO,
    uO,
    dO,
    fO
  ]);
  function F1() {
    I.toolButtons.forEach((l) => {
      const d = l.attr === "data-tool-mode", m = l.attr === "data-paint-tool", b = l.attr === "data-mask-tool";
      l.active = d ? l.value === u.primaryTool : m ? l.key === u.paintTool : b ? l.key === u.maskTool : !1, l.pressed = l.active ? "true" : l.pressed == null ? null : "false";
    });
  }
  function Fc(l) {
    return Df(l == null ? void 0 : l.dataTransfer);
  }
  function Ei(l) {
    const d = !!l;
    Wt.active !== d && (Wt.active = d, Me.classList.toggle("drop-active", d));
  }
  A1();
  function D1() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function L1() {
    return String(D1() || "") === "lasso_fill";
  }
  function Dc() {
    if (C && No(I.toolButtons, "value", "add-camera", { disabled: po() }), t !== "cutout") return;
    const l = st();
    No(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: l ? "Look At Frame" : "Add Frame",
      tip: l ? "Look at frame" : "Add frame",
      icon: l ? Ue.camera : Ue.plus_circle
    });
  }
  function Oi() {
    const l = nA({
      spaceView: da(),
      spaceMode: vl(u.spaceMode, u.viewTransition),
      readOnly: r,
      frameMode: V && u.mode === "frame",
      showGrid: u.showGrid
    });
    I.space && Object.assign(I.space, l.space);
    for (const [d, m] of Object.entries(l.buttons)) No(I.floatingButtons, "action", d, m);
  }
  function Br() {
    var m;
    const l = rA({ hasShot: !!st(), erp: mo(), hidden: po() && !gs(), studio: C });
    u.mode === "frame" && l.disabled && (C ? Rp(st()) : u.mode = "pano"), u.outputPreviewRect = null, I.viewButtons.forEach((b) => {
      const x = b.key === u.mode;
      b.pressed = x ? "true" : "false", b.visible = !(b.key === "frame" && !V), b.key === "frame" ? Object.assign(b, l) : b.disabled = !1;
    });
    const d = V && u.mode === "frame" ? st() : null;
    I.frameRail.visible = !!d, I.frameRail.disabled = r || (d == null ? void 0 : d.locked) === !0, I.frameRollKnob.visible = !!d && !r && d.locked !== !0, I.frameRollKnob.disabled = r || (d == null ? void 0 : d.locked) === !0, I.frameRollKnob.rollDeg = Number((d == null ? void 0 : d.roll_deg) ?? (d == null ? void 0 : d.rot_deg) ?? 0), I.frameRollKnob.displayValue = Po(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((m = u.interaction) == null ? void 0 : m.kind) === "roll_frame", I.frameRollKnob.armed = !!d && u.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = d ? ni(d) : "", I.frameRail.aspectChoices = kb(d ? String(ni(d)) : null, { erp: C, coverage: y.coverage }), d || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && u.mode !== "frame" && !!st(), V && I.cameraPreview && (I.cameraPreview.visible = u.mode !== "frame" && jf(), I.cameraPreview.expanded = !!u.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && ge.pendingStableLayoutFrames <= 0 && ge.hasPresentedFrame), Oi(), Kp() ? It(u.pointerPos) : ht(u.mode === "pano" ? "grab" : "default");
  }
  function bo() {
    const l = new Set(
      (y.stickers || []).map((d) => String((d == null ? void 0 : d.asset_id) || "")).filter((d) => !!d)
    );
    Object.keys(y.assets || {}).forEach((d) => {
      l.has(d) || (delete y.assets[d], ee.delete(d));
    });
  }
  function R1(l, d) {
    var x;
    const m = (x = ca().space) == null ? void 0 : x.gizmo;
    if (Ci() && m && Di("hover", d) !== null && Di("down", d))
      return u.interaction = { kind: "world_gizmo", camera: !0, mode: m.mode, start: m.transform, base: kc(), changed: !1 }, O.setPointerCapture(l.pointerId), It(d), !0;
    const b = _y(kc(), Vb(pa()));
    return TM(la(), b, d, O.width, O.height) ? (Ci() || (Bn(st()), it(), ut(), Ge()), u.interaction = { kind: "world_select" }, O.setPointerCapture(l.pointerId), !0) : !1;
  }
  function V1(l) {
    const d = O.width, m = O.height, b = Ss();
    if (w.globalAlpha = 1, w.lineWidth = 1, w.clearRect(0, 0, d, m), xs(), l && (ge.backgroundDirty = !v1(b)), u.showGrid && !u.fullscreen) {
      w.strokeStyle = "#3f3f46";
      for (let N = 0; N <= 16; N += 1) {
        const E = b.x + b.w * N / 16;
        w.beginPath(), w.moveTo(E, b.y), w.lineTo(E, b.y + b.h), w.stroke();
      }
      for (let N = 0; N <= 8; N += 1) {
        const E = b.y + b.h * N / 8;
        w.beginPath(), w.moveTo(b.x, E), w.lineTo(b.x + b.w, E), w.stroke();
      }
      w.strokeStyle = "rgba(250, 250, 250, 0.86)", w.lineWidth = 1.2, w.beginPath(), w.moveTo(b.x, b.y + b.h / 2), w.lineTo(b.x + b.w, b.y + b.h / 2), w.stroke(), w.fillStyle = "rgba(250, 250, 250, 0.42)", w.font = "500 11px Geist, sans-serif", w.textAlign = "center";
      const x = b.y + b.h * 0.57;
      w.fillText("Left", b.x + b.w * 0.25, x), w.fillText("Front", b.x + b.w * 0.5, x), w.fillText("Right", b.x + b.w * 0.75, x), w.fillText("Back", b.x + 38, x), w.fillText("Back", b.x + b.w - 38, x);
    }
  }
  function fp(l, d, m = 1) {
    let b = !1;
    w.strokeStyle = d, w.lineWidth = m, w.beginPath();
    for (const x of l) {
      const N = rp(x);
      if (!N) {
        b = !1;
        continue;
      }
      b ? w.lineTo(N.x, N.y) : (w.moveTo(N.x, N.y), b = !0);
    }
    w.stroke();
  }
  function $1(l) {
    const d = O.width, m = O.height;
    if (w.clearRect(0, 0, d, m), xs(), l && (ge.backgroundDirty = !b1()), u.showGrid && !u.fullscreen && ca().space)
      z1();
    else if (u.showGrid && !u.fullscreen) {
      for (let x = -180; x <= 180; x += 15) {
        const N = [];
        for (let E = -89; E <= 89; E += 4) N.push(jn(x, E));
        fp(N, "#3f3f46", x % 90 === 0 ? 1.3 : 1);
      }
      for (let x = -75; x <= 75; x += 15) {
        const N = [];
        for (let E = -180; E <= 180; E += 4) N.push(jn(E, x));
        fp(N, x === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", x === 0 ? 1.5 : 1);
      }
      const b = [
        { name: "Left", dir: jn(-90, 0) },
        { name: "Front", dir: jn(0, 0) },
        { name: "Right", dir: jn(90, 0) },
        { name: "Back", dir: jn(180, 0) }
      ];
      w.fillStyle = "rgba(250, 250, 250, 0.42)", w.font = "500 11px Geist, sans-serif", w.textAlign = "center", b.forEach((x) => {
        const N = rp(x.dir);
        N && w.fillText(x.name, N.x, N.y + 24);
      });
    }
  }
  function z1() {
    const l = Sf(fi(), O.width, O.height, bs()), d = ss(l, [0, 0, 0], O.width, O.height);
    d && (w.fillStyle = "rgba(255, 221, 87, 0.9)", w.font = "500 11px Geist, sans-serif", w.textAlign = "center", w.fillText("ERP origin", d.x, d.y - 12));
  }
  function j1(l, d) {
    const m = yn(l), b = jn(Number(m.yaw_deg || 0), Number(m.pitch_deg || 0)), x = u.mode === "unwrap" ? f1(b) : null, N = x ? x.x : null, E = u.mode === "pano" ? 28 : 20, K = [
      ks(l, 0, E, N),
      ks(l, 1, E, N),
      ks(l, 2, E, N),
      ks(l, 3, E, N)
    ];
    Ef(w, K, { selected: d });
  }
  function Cs(l, d = []) {
    if (!(!l || !Array.isArray(d) || d.length < 4)) {
      l.beginPath(), l.moveTo(d[0].x, d[0].y);
      for (let m = 1; m < 4; m += 1) l.lineTo(d[m].x, d[m].y);
      l.closePath();
    }
  }
  function pp(l, d, m) {
    const b = Array.isArray(l == null ? void 0 : l.corners) ? l.corners : [];
    if (b.length < 4) return;
    const x = Ie(Number((l == null ? void 0 : l.visibilityAlpha) ?? 1), 0, 1);
    if (x <= 0.01) return;
    const N = w.globalAlpha;
    w.globalAlpha = N * x;
    const E = m ? "rgba(255, 116, 116, 0.96)" : d ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", K = m ? "rgba(255, 89, 89, 0.08)" : d ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", X = d ? 3.2 : 2.6;
    Cs(w, b), w.fillStyle = K, w.fill(), w.strokeStyle = E, w.lineWidth = X, w.stroke(), w.save(), w.strokeStyle = E, w.lineWidth = d ? 3.2 : 2.6, w.lineCap = "round";
    const Ce = Array.isArray(l == null ? void 0 : l.edgeMidpoints) && l.edgeMidpoints.length >= 4 ? l.edgeMidpoints : [
      { edge: "top", x: (b[0].x + b[1].x) * 0.5, y: (b[0].y + b[1].y) * 0.5 },
      { edge: "right", x: (b[1].x + b[2].x) * 0.5, y: (b[1].y + b[2].y) * 0.5 },
      { edge: "bottom", x: (b[2].x + b[3].x) * 0.5, y: (b[2].y + b[3].y) * 0.5 },
      { edge: "left", x: (b[3].x + b[0].x) * 0.5, y: (b[3].y + b[0].y) * 0.5 }
    ], le = { top: "bottom", right: "left", bottom: "top", left: "right" }, ye = d ? 12 : 9;
    Ce.forEach((Ee) => {
      const Oe = Ce.find((dt) => (dt == null ? void 0 : dt.edge) === le[Ee == null ? void 0 : Ee.edge]) || {
        x: (b[0].x + b[1].x + b[2].x + b[3].x) * 0.25,
        y: (b[0].y + b[1].y + b[2].y + b[3].y) * 0.25
      }, ot = Oe.x - Ee.x, rt = Oe.y - Ee.y, wt = Math.hypot(ot, rt) || 1;
      w.beginPath(), w.moveTo(Ee.x, Ee.y), w.lineTo(Ee.x + ot / wt * ye, Ee.y + rt / wt * ye), w.stroke();
    }), w.restore(), w.globalAlpha = N;
  }
  function H1(l, d, m, b) {
    const x = Ie(Number((d == null ? void 0 : d.visibilityAlpha) ?? 1), 0, 1);
    if (x <= 0.01) return;
    if (Kn(l)) {
      pp(d, m, b);
      return;
    }
    if (sn(l)) {
      const E = w.globalAlpha;
      w.globalAlpha = E * i1(l) * x, u.mode === "frame" ? (w.strokeStyle = m ? "rgba(250, 250, 250, 0.9)" : b ? "rgba(255, 89, 89, 0.72)" : "#71717a", w.lineWidth = m ? 2 : 1, Cs(w, d.corners), w.stroke()) : j1(l, m), w.globalAlpha = E;
      return;
    }
    const N = w.globalAlpha;
    w.globalAlpha = N * x, w.fillStyle = m ? "rgba(0, 112, 243, 0.24)" : b ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Cs(w, d.corners), w.fill(), w.strokeStyle = m ? "rgba(255, 255, 255, 1)" : b ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", w.lineWidth = m ? 2.8 : 1.9, Cs(w, d.corners), w.stroke(), w.globalAlpha = N;
  }
  function hp(l, d, m) {
    if (sn(l)) {
      cb(w, d, { accent: m });
      return;
    }
    const b = !(Kn(l) && mo());
    w.fillStyle = m, b && d.corners.forEach((x) => {
      w.beginPath(), w.arc(x.x, x.y, 6.5, 0, Math.PI * 2), w.fill();
    }), b && Kn(l) && (w.strokeStyle = m, w.lineCap = "round", w.lineWidth = 4, d.edgeMidpoints.forEach((x) => {
      var ye, Ee, Je, Oe;
      const N = (((ye = x.b) == null ? void 0 : ye.x) ?? x.x) - (((Ee = x.a) == null ? void 0 : Ee.x) ?? x.x), E = (((Je = x.b) == null ? void 0 : Je.y) ?? x.y) - (((Oe = x.a) == null ? void 0 : Oe.y) ?? x.y), K = Math.hypot(N, E) || 1, X = N / K, Ce = E / K, le = 10;
      w.beginPath(), w.moveTo(x.x - X * le, x.y - Ce * le), w.lineTo(x.x + X * le, x.y + Ce * le), w.stroke();
    }), w.lineCap = "butt"), Tn(l) || (w.strokeStyle = "rgba(250, 250, 250, 0.9)", w.lineWidth = 1.8, w.beginPath(), w.moveTo(d.rotateStemBase.x, d.rotateStemBase.y), w.lineTo(d.rotateHandle.x, d.rotateHandle.y), w.stroke(), w.fillStyle = m, w.beginPath(), w.arc(d.rotateHandle.x, d.rotateHandle.y, 10, 0, Math.PI * 2), w.fill());
  }
  function G1() {
    var N;
    const l = u.mode === "frame" ? [] : ui(), d = l.length > 1, m = V ? Xb() : Ai(), b = m.map((E) => `${String((E == null ? void 0 : E.id) || "")}:${Kn(E) ? "frame" : Number((E == null ? void 0 : E.z_index) || 0)}`).join("|");
    (!u._sortedItemsCache || u._sortedItemsCache.src !== m || u._sortedItemsCache.orderKey !== b) && (u._sortedItemsCache = {
      src: m,
      orderKey: b,
      sorted: [...m]
    });
    const x = u._sortedItemsCache.sorted;
    for (const E of x) {
      const K = u.mode !== "frame" && !d && Qf(E);
      if (u.mode === "frame" && !K) continue;
      const X = sn(E), Ce = Kn(E), le = On(E);
      if (!X && !Ce || Kr(E) && !S1(E)) continue;
      const ye = ln(E);
      if (t !== "stickers" && !ye.visible)
        continue;
      const Ee = Ie(Number((ye == null ? void 0 : ye.visibilityAlpha) ?? 1), 0, 1);
      if (Ee <= 0.01) continue;
      const Je = Ce && V && u.mode === "pano" ? Ie(Number(u.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (w.save(), w.globalAlpha *= Je, H1(E, ye, K, le), K && ye.visible) {
        const Oe = le ? "#ff4d4f" : X && pr(E) ? "#f59e0b" : "#0070f3", ot = w.globalAlpha;
        w.globalAlpha = ot * Ee, hp(E, ye, Oe), w.globalAlpha = ot;
      }
      w.restore();
    }
    if (V && u.mode === "pano" && !st() && u.cutoutPanoFrameVisual && u.cutoutPanoFrameAlpha > 1e-4) {
      const E = u.cutoutPanoFrameVisual, K = Ie(Number(u.cutoutPanoFrameAlpha || 0), 0, 1);
      w.save(), w.globalAlpha *= K, pp(E.geom, E.selected, E.locked), E.selected && hp(
        E.item,
        E.geom,
        E.locked ? "#ff4d4f" : "#0070f3"
      ), w.restore();
    }
    if (d) {
      const E = ua(l);
      if (E != null && E.visible) {
        const K = oa(l) ? "#ff4d4f" : "#0070f3";
        w.save(), w.strokeStyle = "rgba(255, 255, 255, 0.95)", w.lineWidth = 2, w.setLineDash([6, 4]), w.beginPath(), w.moveTo(E.corners[0].x, E.corners[0].y);
        for (let X = 1; X < E.corners.length; X += 1) w.lineTo(E.corners[X].x, E.corners[X].y);
        w.closePath(), w.stroke(), w.setLineDash([]), w.fillStyle = K, E.corners.forEach((X) => {
          w.beginPath(), w.arc(X.x, X.y, 6.5, 0, Math.PI * 2), w.fill();
        }), w.restore();
      }
    } else
      l.forEach((E) => {
        if (!Tn(E) && !xr(E)) return;
        const K = ln(E);
        if (!(K != null && K.visible)) return;
        const X = On(E) ? "#ff4d4f" : "#0070f3";
        w.save(), w.strokeStyle = "rgba(255, 255, 255, 0.95)", w.lineWidth = 2, w.setLineDash([6, 4]), w.beginPath(), w.moveTo(K.corners[0].x, K.corners[0].y);
        for (let Ce = 1; Ce < K.corners.length; Ce += 1) w.lineTo(K.corners[Ce].x, K.corners[Ce].y);
        w.closePath(), w.stroke(), w.setLineDash([]), w.fillStyle = X, K.corners.forEach((Ce) => {
          w.beginPath(), w.arc(Ce.x, Ce.y, 6.5, 0, Math.PI * 2), w.fill();
        }), w.restore();
      });
    if (((N = u.interaction) == null ? void 0 : N.kind) === "marquee_select") {
      const E = qp(u.interaction.start, u.interaction.current);
      w.save(), w.strokeStyle = "rgba(255, 255, 255, 0.9)", w.fillStyle = "rgba(255, 255, 255, 0.08)", w.lineWidth = 1, w.setLineDash([5, 4]), w.beginPath(), w.rect(E.x0, E.y0, E.x1 - E.x0, E.y1 - E.y0), w.fill(), w.stroke(), w.restore();
    }
  }
  function mp(l, d = !1) {
    const m = Ie(ao(l), 0.05, 20), b = d ? 320 : 220;
    return m >= 1 ? { width: b, height: Math.max(1, Math.round(b / m)) } : { width: Math.max(1, Math.round(b * m)), height: b };
  }
  function W1(l) {
    if (!B || !l) return !1;
    const d = B.closest(".pano-camera-preview");
    if (!d) return !1;
    const m = Math.round(Number(d.clientWidth || B.clientWidth || 0)), b = Math.round(Number(d.clientHeight || B.clientHeight || 0));
    return Math.abs(m - Number(l.width || 0)) <= 1 && Math.abs(b - Number(l.height || 0)) <= 1;
  }
  function K1(l, d) {
    if (u.outputPreviewRect = null, I.outputPreviewToggle.visible = u.mode !== "frame" && !!st(), C && (I.outputPreviewToggle.visible = !1), !V || !I.cameraPreview) return;
    if (u.mode === "frame" || !jf()) {
      I.cameraPreview.visible = !1, I.cameraPreview.settled = !1, qe = null;
      return;
    }
    const m = st();
    if (I.cameraPreview.visible = !0, I.cameraPreview.expanded = !!u.outputPreviewExpanded, !m || !U) {
      I.cameraPreview.ready = !1, I.cameraPreview.settled = !1, I.cameraPreview.width = 220, I.cameraPreview.height = 132, I.cameraPreview.label = m ? "Preview unavailable" : "Add Frame to preview", qe = null;
      return;
    }
    const b = mp(m, !!u.outputPreviewExpanded);
    I.cameraPreview.width = b.width, I.cameraPreview.height = b.height;
    const x = window.devicePixelRatio || 1, N = Math.max(1, b.width * x), E = Math.max(1, b.height * x), K = Math.min(1, ue.width / N, ue.height / E), X = { width: Math.max(1, Math.floor(N * K)), height: Math.max(1, Math.floor(E * K)) }, Ce = [...d].some((Ee) => Ee !== Pt.VIEW && Ee !== Pt.OVERLAY), le = !qe || qe.width !== X.width || qe.height !== X.height || Ce;
    if (l && le) {
      const Ee = Wf({ x: 0, y: ue.height - X.height, w: X.width, h: X.height }, m, "camera_preview");
      qe = Ee ? X : null, Ee && B1(Ee);
    }
    if (!qe) {
      I.cameraPreview.ready = !1, I.cameraPreview.label = Ub() ? "Loading preview" : "Connect ERP image", I.cameraPreview.settled = !1;
      return;
    }
    const ye = W1(b);
    I.cameraPreview.ready = !0, I.cameraPreview.label = ye ? "" : "Loading preview", I.cameraPreview.settled = ye && ge.pendingStableLayoutFrames <= 0 && ge.hasPresentedFrame;
  }
  let gp = 0, yp = !1;
  function B1(l) {
    const d = ++gp;
    createImageBitmap(l.canvas, l.x, l.y, l.width, l.height).then((m) => {
      var b;
      if (d !== gp || !ge.running) {
        m.close();
        return;
      }
      (b = U.getContext("bitmaprenderer")) == null || b.transferFromImageBitmap(m);
    }).catch((m) => {
      yp || (yp = !0, console.error("[PanoramaStickers] camera preview frame failed", m));
    });
  }
  function U1(l) {
    const d = st(), m = Ts(d);
    if (!d || !m)
      return w.clearRect(0, 0, O.width, O.height), l && We.clear(657930), !1;
    const b = { x: m.x, y: m.y, w: m.w, h: m.h }, { rect: x, shot: N } = Pm(d, m, { width: O.width, height: O.height }), E = Y1(b);
    if (w.clearRect(0, 0, O.width, O.height), l) {
      We.clear(657930);
      const K = Gb(x), X = !!Wf(K, N, void 0, 657930);
      X || We.clear(1118481, K), ge.backgroundDirty = !X;
    }
    return w.save(), w.fillStyle = "rgba(0, 0, 0, 0.58)", w.beginPath(), w.rect(0, 0, O.width, O.height), w.roundRect(b.x, b.y, b.w, b.h, E), w.fill("evenodd"), w.restore(), w.save(), w.strokeStyle = Eb, w.globalAlpha = 0.62, w.lineWidth = 2, w.beginPath(), w.roundRect(b.x + 1, b.y + 1, b.w - 2, b.h - 2, Math.max(0, E - 1)), w.stroke(), w.restore(), !0;
  }
  function Y1(l) {
    const d = Math.max(1e-6, Number(ge.frameCanvasScale || 1));
    return Math.min(Et * d, Number((l == null ? void 0 : l.w) || 0) * 0.5, Number((l == null ? void 0 : l.h) || 0) * 0.5);
  }
  function Ur() {
    var d;
    const l = u.mode === "frame" ? st() : null;
    I.frameRollKnob.visible = !!l && !r && l.locked !== !0, I.frameRollKnob.rollDeg = Number((l == null ? void 0 : l.roll_deg) ?? (l == null ? void 0 : l.rot_deg) ?? 0), I.frameRollKnob.displayValue = Po(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((d = u.interaction) == null ? void 0 : d.kind) === "roll_frame", I.frameRollKnob.armed = !!l && u.altModifier === !0;
  }
  function X1() {
    var X, Ce;
    if (((X = u.interaction) == null ? void 0 : X.kind) !== "paint_lasso_fill") return;
    const l = u.interaction.stroke, d = (Ce = l == null ? void 0 : l.geometry) == null ? void 0 : Ce.points;
    let m;
    if (u.mode === "frame") {
      const le = st(), ye = gr(le);
      m = p1(d, le, ye);
    } else
      m = h1(d);
    if (!Array.isArray(m) || m.length < 3) return;
    const b = String((l == null ? void 0 : l.layerKind) || "") === "mask", x = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25 }, N = Math.round(Number(x.r || 0) * 255), E = Math.round(Number(x.g || 0) * 255), K = Math.round(Number(x.b || 0) * 255);
    w.save(), w.beginPath(), w.moveTo(Number(m[0].x || 0), Number(m[0].y || 0));
    for (let le = 1; le < m.length; le++) w.lineTo(Number(m[le].x || 0), Number(m[le].y || 0));
    w.closePath(), b ? (w.lineWidth = 2, w.setLineDash([6, 6]), w.lineDashOffset = 0, w.strokeStyle = "rgba(0,0,0,0.96)", w.stroke(), w.lineDashOffset = -6, w.strokeStyle = "rgba(255,255,255,0.96)", w.stroke(), w.setLineDash([]), w.lineDashOffset = 0) : (w.lineWidth = 1.5, w.setLineDash([6, 4]), w.strokeStyle = `rgba(${N},${E},${K},1)`, w.stroke(), w.setLineDash([])), w.restore();
  }
  function q1() {
    const l = u.frameRollOverlayVisual, d = Ie(Number(u.frameRollOverlayAlpha || 0), 0, 1);
    if (u.mode !== "frame" || !(l != null && l.shot) || d <= 1e-4) return;
    const m = gr(l.shot);
    if (!m) return;
    const b = { x: m.x + m.w * 0.5, y: m.y + m.h * 0.5 }, x = Number(l.shot.roll_deg ?? l.shot.rot_deg ?? 0) * zr, N = Math.hypot(m.w, m.h) * 0.55, E = Math.cos(x) * N, K = Math.sin(x) * N;
    w.save(), w.globalAlpha *= d, w.beginPath(), w.rect(m.x, m.y, m.w, m.h), w.clip(), w.translate(b.x, b.y), w.rotate(x);
    const X = Math.max(12, Math.min(m.w, m.h) / 6);
    w.beginPath();
    for (let Ce = -N; Ce <= N; Ce += X)
      w.moveTo(Ce, -N), w.lineTo(Ce, N);
    for (let Ce = -N; Ce <= N; Ce += X)
      w.moveTo(-N, Ce), w.lineTo(N, Ce);
    w.lineWidth = 1, w.strokeStyle = "rgba(255, 255, 255, 0.22)", w.stroke(), w.setTransform(1, 0, 0, 1, 0, 0), w.beginPath(), w.moveTo(b.x - E, b.y - K), w.lineTo(b.x + E, b.y + K), w.lineWidth = 1.5, w.setLineDash([8, 6]), w.strokeStyle = "rgba(255, 255, 255, 0.92)", w.shadowColor = "rgba(0, 0, 0, 0.8)", w.shadowBlur = 3, w.stroke(), w.setLineDash([]), w.restore();
  }
  function J1() {
    return !V || !st() || W && Wr() || C && !Ci() ? 0 : AE;
  }
  function Z1() {
    const l = Ie(Number(u.cutoutPanoDimAlpha || 0), 0, 1);
    if (l <= 1e-4 || !V || u.mode !== "pano") return;
    const d = st(), m = d ? ln(d) : null, b = Array.isArray(m == null ? void 0 : m.corners) && m.corners.length >= 4 ? m.corners.map((E) => ({ x: Number(E.x || 0), y: Number(E.y || 0) })) : null;
    m != null && m.visible && b && (u.cutoutPanoDimCorners = b), d && (m != null && m.visible) && b && (u.cutoutPanoFrameVisual = {
      item: d,
      geom: m,
      selected: Qf(d),
      locked: On(d)
    });
    const x = Number(u.cutoutPanoDimTarget || 0) <= 1e-6, N = m != null && m.visible ? b : x ? u.cutoutPanoDimCorners || [] : [];
    if (w.save(), w.fillStyle = `rgba(0, 0, 0, ${l})`, w.beginPath(), w.rect(0, 0, O.width, O.height), N.length >= 4) {
      w.moveTo(N[0].x, N[0].y);
      for (let E = 1; E < 4; E += 1) w.lineTo(N[E].x, N[E].y);
      w.closePath();
    }
    w.fill("evenodd"), w.restore();
  }
  function bp(l = /* @__PURE__ */ new Set()) {
    Wb();
    const d = ge.backgroundDirty;
    V && (xs(), K1(d, l)), u.mode === "frame" ? (ge.frameSafeRect = Tv(), U1(d)) : u.mode === "unwrap" ? V1(d) : $1(d), Z1(), G1(), Ur(), X1(), q1(), I.fovValue = `${Math.round(u.viewFov)}°`, Math.abs(Number(u.outputPreviewAnim || 0) - Number(u.outputPreviewAnimTo || 0)) < 1e-6 && ut(), ge.hasPresentedFrame || (ge.hasPresentedFrame = !0, ue.style.opacity = "1"), V && I.cameraPreview && (I.cameraPreview.settled = ge.pendingStableLayoutFrames <= 0 && ge.hasPresentedFrame && u.mode !== "frame");
    const m = r1();
    I.stageStatus = m.status, I.stageStatusDetail = m.detail, m.status === yr ? (Me == null || Me.removeAttribute("data-stage-ready"), Me == null || Me.setAttribute("data-stage-loading-kind", m.detail)) : (Me == null || Me.setAttribute("data-stage-ready", ""), Me == null || Me.removeAttribute("data-stage-loading-kind"));
  }
  function Q1(l = u.interaction) {
    if (t !== "stickers" || u.mode !== "pano") return !1;
    const d = String((l == null ? void 0 : l.kind) || "");
    return d === "move" || d === "scale" || d === "scale_x" || d === "scale_y" || d === "rotate" ? !0 : d === "move_multi" ? Array.isArray(l == null ? void 0 : l.stickerSnapshots) && l.stickerSnapshots.length > 0 : !1;
  }
  function Lc() {
    return !!u.interaction || !!ne.drag;
  }
  function vp() {
    ge.nodePreviewPending = !1, e.__panoLiveStateOverride = y, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = n1();
  }
  function Ge(l = {}) {
    var X, Ce, le, ye, Ee, Je, Oe, ot, rt;
    const d = l.reason ?? Pt.STATE, m = !!l.localOnly, b = l.externalSync === !0, x = String(l.cause || ""), N = String(((X = u.interaction) == null ? void 0 : X.kind) || "");
    (!m || N === "view" || N === "pan_frame" || Q1() || !!u.viewTransition || x === "mode" || x === "frame_view" || x === "cutout_frame") && (ge.backgroundDirty = !0), m && a1() && (u.livePaintInteractionRevision += 1, ge.backgroundDirty = !0), (!m || x === "selection" || x === "mode" || x === "cutout_frame") && (Dc(), Br()), Lc() ? ge.nodePreviewPending = !0 : vp(), b && ((le = (Ce = e.__panoDomPreview) == null ? void 0 : Ce.requestDraw) == null || le.call(Ce), (ye = e.setDirtyCanvas) == null || ye.call(e, !0, !1)), b && !m && ((Je = (Ee = e.graph) == null ? void 0 : Ee.setDirtyCanvas) == null || Je.call(Ee, !0, !0), (rt = (ot = (Oe = qn) == null ? void 0 : Oe.canvas) == null ? void 0 : ot.setDirty) == null || rt.call(ot, !0, !0)), Re.requestDraw(d);
  }
  function Is() {
    const l = O.getBoundingClientRect(), d = Math.max(2, Math.round(l.width)), m = Math.max(2, Math.round(l.height)), b = window.devicePixelRatio || 1, x = [O.width, O.height, ue.width, ue.height].join("x");
    (O.width !== d || O.height !== m) && (O.width = d, O.height = m);
    const N = LM(l.width || d, l.height || m, b, window.innerWidth || l.width, window.innerHeight || l.height);
    return We.resize(N.width, N.height), [O.width, O.height, ue.width, ue.height].join("x") === x ? !1 : (ge.backgroundDirty = !0, ge.dirty = !0, V && ha(() => {
      ge.pendingStableLayoutFrames = Math.max(Number(ge.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function ha(l) {
    l(), Re.wake();
  }
  function ev() {
    return !!u.viewTransition || !!Ot.state.inertia.active || ge.pendingStableLayoutFrames > 0 || Math.abs(Number(u.frameRollOverlayAlpha || 0) - Number(u.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(u.cutoutPanoDimAlpha || 0) - Number(u.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(u.cutoutPanoFrameAlpha || 0) - Number(u.cutoutPanoFrameTarget || 0)) > 1e-6 || u.outputPreviewAnim !== u.outputPreviewAnimTo || Lc();
  }
  function tv(l = performance.now(), d = /* @__PURE__ */ new Set()) {
    var E;
    ge.nodePreviewPending && !Lc() && vp(), d.forEach((K) => ge.reasons.add(K)), d.size && (ge.dirty = !0), [...d].some((K) => K !== Pt.OVERLAY) && (ge.backgroundDirty = !0), nr(), ge.lastTickTs > 0 ? Math.max(1e-3, (l - ge.lastTickTs) / 1e3) : 1 / 60, ge.lastTickTs = l;
    const m = u.mode === "frame" && ((E = u.interaction) == null ? void 0 : E.kind) === "roll_frame" ? u.interaction : null;
    m != null && m.shot && (u.frameRollOverlayVisual = { shot: m.shot });
    const b = m ? 1 : 0;
    if (Math.abs(b - Number(u.frameRollOverlayTarget || 0)) > 1e-6 && (u.frameRollOverlayFrom = Number(u.frameRollOverlayAlpha || 0), u.frameRollOverlayTarget = b, u.frameRollOverlayStartTs = l), Math.abs(Number(u.frameRollOverlayAlpha || 0) - b) > 1e-6) {
      const K = Ie(
        (l - Number(u.frameRollOverlayStartTs || l)) / CE,
        0,
        1
      );
      u.frameRollOverlayAlpha = or(
        Number(u.frameRollOverlayFrom || 0),
        b,
        Tu(K)
      ), K >= 1 && (u.frameRollOverlayAlpha = b, b === 0 && (u.frameRollOverlayVisual = null)), ge.dirty = !0;
    }
    const x = J1();
    if (Math.abs(x - Number(u.cutoutPanoDimTarget || 0)) > 1e-6 && (u.cutoutPanoDimFrom = Number(u.cutoutPanoDimAlpha || 0), u.cutoutPanoDimTarget = x, u.cutoutPanoDimStartTs = l), Math.abs(Number(u.cutoutPanoDimAlpha || 0) - x) > 1e-6) {
      const K = Ie(
        (l - Number(u.cutoutPanoDimStartTs || l)) / dg,
        0,
        1
      );
      u.cutoutPanoDimAlpha = or(
        Number(u.cutoutPanoDimFrom || 0),
        x,
        Tu(K)
      ), K >= 1 && (u.cutoutPanoDimAlpha = x), K >= 1 && x === 0 && (u.cutoutPanoDimCorners = null), ge.dirty = !0;
    }
    const N = V && st() ? 1 : 0;
    if (Math.abs(N - Number(u.cutoutPanoFrameTarget || 0)) > 1e-6 && (u.cutoutPanoFrameFrom = Number(u.cutoutPanoFrameAlpha || 0), u.cutoutPanoFrameTarget = N, u.cutoutPanoFrameStartTs = l), Math.abs(Number(u.cutoutPanoFrameAlpha || 0) - N) > 1e-6) {
      const K = Ie(
        (l - Number(u.cutoutPanoFrameStartTs || l)) / dg,
        0,
        1
      );
      u.cutoutPanoFrameAlpha = or(
        Number(u.cutoutPanoFrameFrom || 0),
        N,
        Tu(K)
      ), K >= 1 && (u.cutoutPanoFrameAlpha = N, N === 0 && (u.cutoutPanoFrameVisual = null)), ge.dirty = !0;
    }
    if (u.outputPreviewAnim !== u.outputPreviewAnimTo) {
      const K = Math.max(1, Number(u.outputPreviewAnimDurationMs || 180)), X = Ie((l - Number(u.outputPreviewAnimStartTs || 0)) / K, 0, 1), le = u.outputPreviewAnimTo > u.outputPreviewAnimFrom ? TE(X) : DE(X);
      u.outputPreviewAnim = or(u.outputPreviewAnimFrom, u.outputPreviewAnimTo, le), ge.dirty = !0, X >= 1 && (u.outputPreviewAnim = u.outputPreviewAnimTo);
    }
    if (u.viewTransition) {
      const { view: K, done: X } = X2(u.viewTransition, l);
      if (u.viewPosition = K.position, u.viewYaw = K.yaw_deg, u.viewPitch = K.pitch_deg, u.viewFov = K.hFOV_deg, u.viewDistance = K.distance, X) {
        const { end: Ce } = u.viewTransition;
        u.viewTransition = null, Ce && fr(Ce), Oi();
      }
      ge.backgroundDirty = !0, ge.dirty = !0;
    }
    if (u.viewInertia.vx = Number(Ot.state.inertia.vx || 0), u.viewInertia.vy = Number(Ot.state.inertia.vy || 0), u.viewInertia.active = !!Ot.state.inertia.active, Ot.stepInertia(l) && (u.viewInertia.vx = Number(Ot.state.inertia.vx || 0), u.viewInertia.vy = Number(Ot.state.inertia.vy || 0), u.viewInertia.active = !!Ot.state.inertia.active, ge.backgroundDirty = !0, ge.dirty = !0), ge.pendingStableLayoutFrames > 0 && (ge.pendingStableLayoutFrames -= 1, ge.dirty = !0), ge.dirty) {
      if (ge.pendingStableLayoutFrames > 0)
        return;
      ge.dirty = !1;
      const K = ge.reasons;
      ge.reasons = /* @__PURE__ */ new Set(), bp(K);
    }
  }
  function _p(l) {
    try {
      l();
    } catch (d) {
      const m = String((d == null ? void 0 : d.stack) || (d == null ? void 0 : d.message) || d || "unknown editor frame error");
      ge.tickErrorSignature !== m && (ge.tickErrorSignature = m, console.error("[PanoramaStickers] editor frame failed", d)), I.stageStatus = ar, I.stageStatusDetail = "frame", Me == null || Me.setAttribute("data-stage-ready", ""), Me == null || Me.removeAttribute("data-stage-loading-kind");
    }
  }
  function nv(l = performance.now(), d = /* @__PURE__ */ new Set()) {
    if (!ge.running) return;
    const m = ox();
    _p(() => tv(l, d)), ax(m);
  }
  function Sp() {
    !ge.running || !Is() || _p(() => {
      ge.dirty = !1, bp(/* @__PURE__ */ new Set([Pt.RESIZE]));
    });
  }
  const wp = new ResizeObserver(Sp);
  wp.observe(O);
  let vo = null;
  function xp() {
    vo == null || vo.removeEventListener("change", Rc), vo = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), vo.addEventListener("change", Rc);
  }
  function Rc() {
    xp(), Sp();
  }
  xp();
  function rv() {
    be(), ge.running = !1, Re.stop(), wp.disconnect(), vo.removeEventListener("change", Rc);
  }
  function Fn() {
    F1();
    const l = Z2({
      editor: u,
      swatches: _l,
      paintColorPopOpen: ie ? !ie.hidden : !1,
      colorToCss: Ir,
      colorsApproximatelyEqual: Sl,
      rgb01ToHsv: Ru,
      hsv01ToRgb: Lu,
      getBrushPresetIdForTool: Ti,
      isActiveLassoTool: L1
    });
    if (Object.assign(I.paintDock, l), C1(), !l.visible) {
      ie && (ie.hidden = !0);
      return;
    }
    Le && (clearTimeout(Le), Le = 0), Q && (!l.colorEnabled && ie && !ie.hidden && (Le = window.setTimeout(() => {
      ie.hidden = !0, I.paintDock.colorPopOpen = !1, Le = 0;
    }, 170)), ie && (ie.style.setProperty("--picker-hue-color", l.pickerHueColor), ie.style.setProperty("--picker-sat", l.pickerSat), ie.style.setProperty("--picker-val", l.pickerVal), ie.style.setProperty("--picker-hue", l.pickerHue)), we && (we.style.left = l.pickerSvLeft, we.style.top = l.pickerSvTop), Fe && (Fe.style.left = l.pickerHueLeft));
  }
  function _o() {
    const l = yn(V && u.mode === "frame" ? st() : An());
    l && (u.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: ni(l)
    }, it());
  }
  function it() {
    nr(), Nr(), kp();
  }
  function iv() {
    const l = V && u.mode === "frame" ? st() : null;
    return [...ui(), fa(), l].some((d) => Kr(d) ? jl(d) : Kn(d) && po() && jl(y.camera));
  }
  function kp() {
    if (i) return;
    y.ui_settings = y.ui_settings || {};
    const l = J2(y.ui_settings);
    if (o) {
      I.sidePanel = Q2({
        coverage: y.coverage,
        uiSettings: l,
        normalizeCoverageValue: zn
      });
      return;
    }
    const d = An(), m = V && u.mode === "frame" ? st() : null, b = m || d, x = m ? [m] : ui(), N = m ? "shot" : _s();
    if (x.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), b && N !== "stroke") {
      const rt = yn(b);
      u.panelLastValues = {
        yaw_deg: Number(rt.yaw_deg || 0),
        pitch_deg: Number(rt.pitch_deg || 0),
        hFOV_deg: Number(rt.hFOV_deg || (N === "image" ? 30 : 90)),
        vFOV_deg: Number(rt.vFOV_deg || (N === "image" ? 30 : 60)),
        rot_deg: Number(rt.rot_deg || 0),
        roll_deg: Number(rt.roll_deg || 0),
        aspect_id: ni(rt)
      }, Kr(b) && (u.panelLastValues.opacity = ro(b, u.frame).opacity * 100);
    }
    const E = u.panelLastValues || (t === "stickers" || N === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), K = N === "stroke" ? null : b, X = fa(), Ce = W && (N === "shot" || N === "frame") && Pc(), le = X ? Zk(X, u.frame) : Ce ? { ...K, ...Xk(y.camera, u.frame), vFOV_deg: K.vFOV_deg } : Kr(K) ? u.panelLastValues : K || E, ye = X ? Tc(X) : !!K && !On(K);
    u.panelWasEnabled = ye, Dc();
    let Ee = null;
    if (m) {
      const rt = Nc({ item: m, kind: "shot", label: "Frame" });
      Ee = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: rt.label,
        currentIcon: rt.icon || null,
        items: [{
          id: String(m.id || ""),
          label: rt.label,
          icon: rt.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const rt = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const _t = st();
        _t && rt.push({ id: _t.id, label: "Camera", icon: t1("frame"), item: _t, kind: "frame" }), Ai().forEach((Tt, bn) => {
          var Be, Qe;
          if (!Tt || Kr(Tt) && !Tt.visible) return;
          const Li = S ? ad(Tt) : pr(Tt) ? String(Tt.id || zf) : String(((Qe = (Be = y.assets) == null ? void 0 : Be[Tt.asset_id]) == null ? void 0 : Qe.name) || Tt.asset_id || Tt.id), Ri = `${bn + 1}. ${Li}${pr(Tt) && ws(Tt) ? " (hidden)" : ""}`, Ze = Nc({ item: Tt, label: Ri, kind: "image" });
          rt.push({ id: Tt.id, label: Ze.label, icon: Ze.icon, item: Tt, kind: "image" });
        });
      } else
        Uf().forEach((_t) => {
          if (!(_t != null && _t.item)) return;
          const Tt = Nc(_t);
          rt.push({ id: _t.item.id, label: Tt.label, icon: Tt.icon, item: _t.item, kind: _t.kind });
        });
      const wt = (K == null ? void 0 : K.id) || "", dt = X ? { label: ad(X), icon: Ue.globe } : rt.find((_t) => _t.id === wt) || rt[0];
      Ee = {
        label: "Selection",
        open: !1,
        disabled: rt.length <= 1,
        currentLabel: dt.label,
        currentIcon: dt.icon || null,
        items: rt.map((_t) => ({
          id: _t.id,
          label: _t.label,
          icon: _t.icon || null,
          active: _t.id === wt
        }))
      };
    }
    const Je = [], Oe = (rt, wt, dt, _t, Tt) => {
      const bn = Ie(Number(le[rt] || 0), dt, _t);
      Je.push({
        key: rt,
        label: wt,
        min: dt,
        max: _t,
        step: Tt,
        value: bn,
        displayValue: Po(bn),
        fillPct: Ie((bn - dt) / Math.max(1e-6, _t - dt) * 100, 0, 100),
        enabled: ye && !r
      });
    }, ot = [];
    if (X) {
      for (const [rt, wt] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const dt = Iu(le[rt]);
        Oe(rt, wt, -dt, dt, 0.01);
      }
      Oe("yaw_deg", "Yaw", -180, 180, 0.1), Oe("pitch_deg", "Pitch", -90, 90, 0.1), Oe("roll_deg", "Roll", -180, 180, 0.1), Oe("scale", "Scale", cg, Iu(le.scale), 0.01), Oe("opacity", "Opacity", 0, 100, 1);
    } else if (x.length > 1)
      ot.push(`Selected objects: ${x.length}`), ot.push("Multi-selection supports z-order and delete.");
    else {
      const rt = N === "shot" || N === "frame";
      if (Ce)
        for (const [wt, dt] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const _t = Iu(le[wt]);
          Oe(wt, dt, -_t, _t, 0.01);
        }
      Oe("yaw_deg", "Yaw", -180, 180, 0.1), Oe("pitch_deg", "Pitch", -90, 90, 0.1), Oe(N === "image" || t === "stickers" && !rt ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Oe("hFOV_deg", "H FOV", 1, 179, 0.1), Oe("vFOV_deg", "V FOV", 1, 179, 0.1), rt && Je.forEach((wt) => {
        wt.enabled = wt.enabled && iA(wt.key, { erp: mo() });
      }), S && !rt && Oe("opacity", "Opacity", 0, 100, 1);
    }
    I.sidePanel = aA({
      coverage: y.coverage,
      readOnly: r,
      selectionPicker: Ee,
      enabled: ye,
      selectedKind: X ? "world" : N,
      selectedItems: x,
      params: Je,
      notes: ot,
      uiSettings: l,
      normalizeCoverageValue: zn
    });
  }
  function Nr() {
    if (!v || r) return;
    const l = Vc(), d = ne.selection, m = d && Pr(d.owner);
    if (d) {
      const b = m ? ma(d) : [];
      d.frames = d.frames.filter((x) => b.some((N) => m[N].keyframes.some((E) => E.frame === x))), d.frames.length || (ne.selection = null);
    }
    I.timeline = fA(y, {
      span: l,
      selection: ne.selection,
      selectedId: u.worldSelectedId || u.selectedId,
      expanded: ne.expanded ?? Mp(),
      openRows: ne.openRows,
      audio: av() && I.videoTransport.hasAudio ? { muted: Ne.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Vu(e) !== null || GM(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: po(),
      cameraHideable: C,
      stickers: !M,
      scene: S && !!kf(e).scene,
      sceneLocked: !!$
    }), I.easing = ne.selection ? pA(m, ma(ne.selection), ne.selection.frames, ga(ne.selection.owner)) : null;
  }
  function Mp() {
    return Ak(y, { cameraOnly: M, camera: C });
  }
  function Vc(l = null) {
    if ($ != null && $.frames) return $.frames;
    const d = y.timeline.fps, m = y.stickers.find(pr), b = m ? Jb() : null, x = Math.max(
      I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * d) : 0,
      b ? Ry(m.clip, d, b.meta) : 0
    );
    return ty(y, { minimum: Math.round(d * 5), frames: x, openClip: l, camera: M && !$ || C });
  }
  function Pr(l) {
    return l === "camera" ? po() ? y.camera : null : l === "scene" ? S ? y.scene : null : y.stickers.find((d) => d.id === l) || null;
  }
  function ma(l) {
    return l.lane ? [l.lane] : na(Pr(l.owner));
  }
  function ga(l) {
    if (l === "camera") return 0;
    const { clip: d } = Pr(l);
    return d.start - d.in;
  }
  function Np(l) {
    return `${Jo(l, u.frame)}:${l.start - l.in}`;
  }
  function Es(l) {
    const d = Pr(l);
    return !!d && d.locked !== !0;
  }
  function ov(l) {
    const d = Math.max(0, Math.round(l));
    if (d === u.frame) return;
    nr(), u.frame = d, H.frame.value = d, nr();
    const m = [u.selectedId, u.worldSelectedId];
    Ac(), hn(), m[0] !== u.selectedId || m[1] !== u.worldSelectedId ? it() : iv() && kp(), ut(), Ge({ reason: Pt.PLAYHEAD });
  }
  function av() {
    return Ne instanceof HTMLVideoElement && !!Ne.getAttribute("src");
  }
  function sv(l) {
    yo(), tr.seek(l);
  }
  function mn() {
    v && tr.stop();
  }
  function $c() {
    yo(), tr.toggle();
  }
  function Os() {
    nr(), hn(), it(), ut(), Ge();
  }
  function pi() {
    bt(), At(), Os();
  }
  function lv() {
    const { selection: l } = ne;
    Es(l.owner) && (mn(), _k(Pr(l.owner), ma(l), l.frames, u.frame - ga(l.owner)), ne.selection = null, pi());
  }
  function Pp(l) {
    const d = ta(l);
    if (d === null || d === y.timeline.fps) return;
    mn();
    const m = Math.round(u.frame * d / y.timeline.fps);
    Gk(y, d), ne.selection = null, tr.seek(m), pi();
  }
  function cv() {
    const l = Vu(e);
    l !== null && l !== y.timeline.fps && Pp(l);
  }
  function uv(l) {
    if (!(r || !v)) {
      if (l.type === "seek") {
        if (l.phase === "move") {
          ne.scrubFrame = l.frame, Ke.request("seek");
          return;
        }
        Ke.cancel(), l.phase === "start" && yo(), tr.seek(l.frame);
        return;
      }
      if (l.type === "play") {
        $c();
        return;
      }
      if (l.type === "mute") {
        cp(), Nr();
        return;
      }
      if (l.type === "toggle-expanded") {
        ne.expanded = !(ne.expanded ?? Mp()), ne.selection = null, Nr();
        return;
      }
      if (l.type === "toggle-row") {
        ne.openRows.has(l.id) ? ne.openRows.delete(l.id) : ne.openRows.add(l.id), Nr();
        return;
      }
      if (l.type === "toggle-visible") {
        if (l.id === Nb) y.painting_visible = !y.painting_visible;
        else {
          const d = Pr(l.id);
          if (!d || l.id === "camera" && !C) return;
          d.visible = !d.visible;
        }
        Ac(), pi();
        return;
      }
      if (l.type === "select-row") {
        const d = y.stickers.find((m) => m.id === l.id);
        if (d && !d.visible || l.id === "camera" && !gs()) return;
        d && !Jo(d.clip, u.frame) && sv(d.clip.start), (d == null ? void 0 : d.placement) === "world" ? Ic(d.id) : l.id === "camera" ? Bn(st()) : Bn(Ai().find((m) => m.id === l.id) || null), Oi(), ne.selection = null, it(), ut(), Ge();
        return;
      }
      if (l.type === "select-keys") {
        const d = ga(l.owner), m = l.frames.map((N) => N - d), b = ne.selection, x = (b == null ? void 0 : b.owner) === l.owner && b.lane === l.lane;
        if (l.additive && x) {
          const N = new Set(b.frames);
          for (const E of m)
            N.has(E) ? N.delete(E) : N.add(E);
          b.frames = [...N].sort((E, K) => E - K);
        } else
          ne.selection = m.length ? { owner: l.owner, lane: l.lane, frames: m } : null;
        Nr();
        return;
      }
      if (l.type === "move-keys") {
        const d = ne.selection;
        if (!d || !Es(d.owner)) return;
        const m = Pr(d.owner), b = ma(d);
        if (l.phase === "start") {
          mn(), ne.drag = { keyframes: b.map((E) => structuredClone(m[E].keyframes)), frames: d.frames };
          return;
        }
        const { drag: x } = ne;
        if (!(x != null && x.keyframes)) return;
        b.forEach((E, K) => {
          m[E].keyframes = structuredClone(x.keyframes[K]);
        });
        const N = Sk(m, b, x.frames, l.delta, -ga(d.owner));
        if (d.frames = x.frames.map((E) => E + N), l.phase !== "end") {
          Ke.request("timeline"), Ke.request("view");
          return;
        }
        Ke.cancel(), ne.drag = null, N ? pi() : Os();
        return;
      }
      if (l.type === "clip") {
        const d = l.id === "scene" ? Pr("scene") : y.stickers.find((N) => N.id === l.id);
        if (!d || d.locked) return;
        if (l.phase === "start") {
          mn(), ne.drag = { clip: { ...d.clip }, span: Vc(d.clip) };
          return;
        }
        const { drag: m } = ne;
        if (!(m != null && m.clip)) return;
        const b = m.clip, x = Np(d.clip);
        if (d.clip = { ...b }, l.delta && l.mode === "move" ? kk(d.clip, l.delta) : l.delta && l.mode === "start" ? Mk(d.clip, b.start + l.delta) : l.delta && Nk(d.clip, (b.duration === null ? m.span : b.start + b.duration) + l.delta, m.span), l.phase !== "end") {
          Ke.request("timeline"), Np(d.clip) !== x && Ke.request("view");
          return;
        }
        Ke.cancel(), ne.drag = null, Ac(), JSON.stringify(d.clip) !== JSON.stringify(b) ? pi() : Os();
        return;
      }
      if (l.type === "key-row") {
        if (l.owner === "scene" || !Es(l.owner)) return;
        mn(), yk(Pr(l.owner), u.frame - ga(l.owner)), pi();
        return;
      }
      if (l.type === "fps") {
        const d = Ik(l.fps);
        if (d === null || d === y.timeline.fps || I.timeline.fpsLocked) {
          Nr();
          return;
        }
        Pp(d);
        return;
      }
      if (l.type === "length") {
        const d = Ek(l.length);
        if (d === void 0 || d === y.timeline.length) {
          Nr();
          return;
        }
        mn(), y.timeline.length = d, pi();
        return;
      }
      if (l.type === "easing") {
        const d = ne.selection;
        if (!d || !Es(d.owner)) return;
        mn(), xk(Pr(d.owner), ma(d), d.frames, l.easing), l.commit ? pi() : Os();
      }
    }
  }
  async function Ap(l) {
    if (r || M || t !== "stickers" && t !== "cutout" || !br(l)) return;
    if (S) {
      mn(), await Cp(l);
      return;
    }
    const d = Ki("asset"), m = Fa(e, `add:${d}`, async () => {
      try {
        const { image: b } = await Da(l);
        ee.set(d, b);
        const x = Ki("st");
        y.stickers.push({
          id: x,
          asset_id: d,
          yaw_deg: u.viewYaw,
          pitch_deg: u.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ys(30, Number(b.naturalWidth || b.width || 1), Number(b.naturalHeight || b.height || 1)),
          rot_deg: 0,
          z_index: vs()
        }), Bn(y.stickers[y.stickers.length - 1]), ya(), it(), ut(), Ge();
        const N = await Yi(l, {
          fetchApi: (X, Ce) => en.fetchApi(X, Ce)
        });
        if (!(Array.isArray(y.stickers) ? y.stickers : []).filter((X) => String((X == null ? void 0 : X.asset_id) || "") === d).length) return;
        y.assets[d] = N, bo(), bt(), At(), it(), ut(), Ge();
      } catch (b) {
        delete y.assets[d], ee.delete(d);
        const x = Array.isArray(y.stickers) ? y.stickers : [], N = x.filter((E) => String((E == null ? void 0 : E.asset_id) || "") === d);
        throw N.length && (y.stickers = x.filter((E) => String((E == null ? void 0 : E.asset_id) || "") !== d), N.some((E) => String((E == null ? void 0 : E.id) || "") === String(u.selectedId || "")) && Bn(null), it(), ut(), Ge(), At()), b;
      }
    });
    try {
      await m;
    } catch {
    }
  }
  function dv() {
    var l;
    r || t !== "stickers" && t !== "cutout" || (l = he == null ? void 0 : he.openImagePicker) == null || l.call(he, "add");
  }
  function fv() {
    var l;
    r || !S || (l = he == null ? void 0 : he.openImagePicker) == null || l.call(he, "add-world");
  }
  async function pv(l) {
    r || !S || !br(l) || (mn(), await Cp(l, "world"));
  }
  function hv() {
    const l = { x: O.width / 2, y: O.height / 2 }, d = da() ? We.pick(la(), l.x, l.y, O.width, O.height) : null;
    return MM(fi(), d, bs());
  }
  async function Cp(l, d = "sky") {
    const m = Ki("st"), b = Fa(e, `add:${m}`, async () => {
      const { image: x } = await Da(l), N = {
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: ys(30, Number(x.naturalWidth || x.width || 1), Number(x.naturalHeight || x.height || 1)),
        rot_deg: 0
      }, E = { kind: "file", filename: "" }, K = d === "world" ? nM(m, E, hv()) : yf(m, E, N, vs());
      ee.set(Ec(K), x), y.stickers.push(K), d === "world" ? Ic(m) : Bn(K), ya(), it(), ut(), Ge();
      try {
        const X = await Yi(l, {
          fetchApi: (le, ye) => en.fetchApi(le, ye)
        }), Ce = y.stickers.find((le) => le.id === m);
        if (!Ce) return;
        Ce.source = dl(X), ee.set(Ec(Ce), x), bt(), At();
      } catch (X) {
        throw y.stickers = y.stickers.filter((Ce) => Ce.id !== m), u.selectedId === m && Bn(null), u.worldSelectedId === m && Hf(), bt(), At(), X;
      } finally {
        it(), ut(), Ge();
      }
    });
    try {
      await b;
    } catch {
    }
  }
  async function mv(l, d) {
    const m = Fa(e, `replace:${d}:${Ki("asset")}`, async () => {
      const { image: b } = await Da(l), x = await Yi(l, {
        fetchApi: (E, K) => en.fetchApi(E, K)
      }), N = y.stickers.find((E) => E.id === d);
      if (N) {
        N.source = dl(x), N.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const E of [N.size.value, ...N.size.keyframes.map((K) => K.value)])
          E.vFOV_deg = ys(E.hFOV_deg, Number(b.naturalWidth || b.width || 1), Number(b.naturalHeight || b.height || 1));
        ee.set(Ec(N), b), hn(), bt(), At(), it(), ut(), Ge();
      }
    });
    try {
      await m;
    } catch {
    }
  }
  async function gv(l) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const d = An();
    if (!d || !sn(d) || pr(d) || !br(l)) return;
    if (S) {
      await mv(l, d.id);
      return;
    }
    const m = String(d.id || ""), b = Ki("asset"), x = Fa(e, `replace:${m}:${b}`, async () => {
      var le;
      const N = (Array.isArray(y.stickers) ? y.stickers : []).find((ye) => String((ye == null ? void 0 : ye.id) || "") === m) || null;
      if (!N || !sn(N) || pr(N)) return;
      const E = String(N.asset_id || ""), K = E ? vn(((le = y.assets) == null ? void 0 : le[E]) || null) : null, X = Number(N.vFOV_deg || 0), Ce = N.crop && typeof N.crop == "object" ? { ...N.crop } : null;
      try {
        const { image: ye } = await Da(l);
        ee.set(b, ye), N.asset_id = b, N.vFOV_deg = ys(
          Number(N.hFOV_deg || 30),
          Number(ye.naturalWidth || ye.width || 1),
          Number(ye.naturalHeight || ye.height || 1)
        ), N.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, hn(), it(), ut(), Ge();
        const Ee = await Yi(l, {
          fetchApi: (Oe, ot) => en.fetchApi(Oe, ot)
        }), Je = (Array.isArray(y.stickers) ? y.stickers : []).find((Oe) => String((Oe == null ? void 0 : Oe.id) || "") === m) || null;
        if (!Je || String(Je.asset_id || "") !== b) return;
        y.assets[b] = Ee, bo(), bt(), At(), it(), ut(), Ge();
      } catch (ye) {
        delete y.assets[b], ee.delete(b);
        const Ee = (Array.isArray(y.stickers) ? y.stickers : []).find((Je) => String((Je == null ? void 0 : Je.id) || "") === m) || null;
        throw Ee && String(Ee.asset_id || "") === b && (E && K && (y.assets[E] = K), Ee.asset_id = E, Ee.vFOV_deg = X, Ee.crop = Ce ? { ...Ce } : null), hn(), At(), it(), ut(), Ge(), ye;
      }
    });
    try {
      await x;
    } catch {
    }
  }
  function yv() {
    var d;
    if (r) return;
    const l = An();
    !l || !sn(l) || pr(l) || (d = he == null ? void 0 : he.openImagePicker) == null || d.call(he, "replace");
  }
  async function bv() {
    if (r || t !== "stickers") return;
    if (S) {
      await vv();
      return;
    }
    const l = y.assets && typeof y.assets == "object" ? y.assets : {}, d = Object.entries(l).filter(([, b]) => {
      const x = String((b == null ? void 0 : b.type) || "").toLowerCase(), N = String((b == null ? void 0 : b.value) || "");
      return x === "dataurl" && N.startsWith("data:image");
    });
    if (!d.length) return;
    let m = !1;
    for (const [b, x] of d)
      try {
        const N = String((x == null ? void 0 : x.value) || "");
        if (!N) continue;
        const E = await fetch(N).then((ye) => ye.blob()), K = String(E.type || "image/png").split("/")[1] || "png", X = String((x == null ? void 0 : x.name) || `${b}.${K}`), Ce = new File([E], X, { type: E.type || "image/png" }), le = await Yi(Ce, {
          fetchApi: (ye, Ee) => en.fetchApi(ye, Ee)
        });
        y.assets[b] = {
          ...le,
          w: Number((x == null ? void 0 : x.w) || 0),
          h: Number((x == null ? void 0 : x.h) || 0)
        }, m = !0;
      } catch {
      }
    m && (At(), Ge());
  }
  async function vv() {
    let l = !1;
    for (const d of y.stickers) {
      const m = d.source.data_url;
      if (m)
        try {
          const b = await fetch(m).then((K) => K.blob()), x = String(b.type || "image/png").split("/")[1] || "png", N = new File([b], `${d.id}.${x}`, { type: b.type || "image/png" }), E = await Yi(N, {
            fetchApi: (K, X) => en.fetchApi(K, X)
          });
          d.source = dl(E), l = !0;
        } catch {
        }
    }
    l && (At(), Ge());
  }
  function _v() {
    if (r || t !== "cutout") return;
    const l = st();
    if (l) {
      Bn(l), u.mode = "pano", M && Wr() ? Ps(my(l1(fi(), l.position), $b(), O.width, O.height)) : up(Bt(Number(l.yaw_deg || 0)), Ie(Number(l.pitch_deg || 0), -89.9, 89.9)), it(), ut(), Ge({ cause: "cutout_frame" });
      return;
    }
    const d = E0({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Bt(Number(u.viewYaw || 0)),
      pitchDeg: Number(u.viewPitch || 0),
      viewFovDeg: Number(u.viewFov || 90)
    });
    y.shots = [d], Bn(d), ya(), u.mode = "pano", bt(), At(), it(), ut(), Ge({ cause: "cutout_frame" });
  }
  function Sv() {
    r || !C || po() || (mn(), y.camera = Bk(fi()), nr(), Bn(st()), ya(), bt(), At(), it(), ut(), Ge({ cause: "cutout_frame" }));
  }
  function wv() {
    mn(), y.camera = null, Bn(null), nr(), bt(), At(), it(), ut(), Ge({ cause: "cutout_frame" });
  }
  function Ip(l, d) {
    C && Kn(l) && (y.camera.projection = d === Ko ? "erp" : "perspective", d === Ko) || Av(l, d);
  }
  function xv() {
    r || t !== "cutout" || (y.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, y.active.selected_shot_id = null, bt(), At(), it(), ut(), Ge());
  }
  function Ep(l, d, m = "Clear") {
    return new Promise((b) => {
      I.confirmDialog = {
        visible: !0,
        title: String(l || ""),
        text: String(d || ""),
        confirmLabel: String(m || "Confirm"),
        resolve: b
      };
    });
  }
  async function kv() {
    var m, b;
    if (r || !await Ep(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    y.painting = Yo(null), kr();
    const d = jb();
    if (t === "stickers")
      y.stickers = S ? y.stickers.filter((x) => x.placement === "world" || d.includes(x)) : d, S || (y.assets = {}), u.selectedId = ((m = d[0]) == null ? void 0 : m.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = ((b = d[0]) == null ? void 0 : b.id) || null, bo();
    else {
      const x = $k(y.shots, y.active.selected_shot_id);
      y.stickers = d, y.assets = {}, y.shots = x.shots, u.selectedId = x.selectedShotId, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = null, y.active.selected_shot_id = x.selectedShotId, !x.selectedShotId && u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, bo();
    }
    bt(), At(), it(), ut(), Ge();
  }
  async function Mv(l) {
    var N, E, K, X;
    if (r) return;
    const d = l === "mask" ? "mask" : "paint", m = d === "mask" ? "Mask" : "Paint", b = Ls(d);
    if (!(!b.length && !(((N = u.interaction) == null ? void 0 : N.kind) === "draw" && ((E = u.interaction) == null ? void 0 : E.layerKind) === d) || !await Ep(
      `Clear ${m}`,
      `This will remove all ${d} strokes in the current node.`,
      `Clear ${m}`
    ))) {
      if (((K = u.interaction) == null ? void 0 : K.kind) === "draw" && ((X = u.interaction) == null ? void 0 : X.layerKind) === d) {
        const Ce = er(u.interaction);
        Ce && u.paintEngine.cancelActiveStroke(Ce), u.interaction = null;
      }
      b.length = 0, y.painting.raster_objects = Gr().filter((Ce) => String((Ce == null ? void 0 : Ce.layerKind) || "paint") !== d), d === "paint" && (uo().length = 0), kr(), bt(), At(), it(), ut(), Fn(), Ge();
    }
  }
  function Nv() {
    if (r) return;
    const l = An();
    if (!l || !sn(l) || pr(l) || S && s1(l)) return;
    let d;
    S ? d = rM(l, Ki("st"), vs()) : (d = JSON.parse(JSON.stringify(l)), d.id = Ki("st"), d.yaw_deg = Bt((d.yaw_deg || 0) + 8), d.z_index = vs()), y.stickers.push(d), y.active.selected_sticker_id = d.id, u.selectedId = d.id, u.selectedIds = [d.id], hn(), bt(), At(), ut(), it(), Ge();
  }
  function Pv() {
    const l = fa();
    return l ? (Tc(l) && (mn(), tM(y, l.id), Hf(), hn(), bt(), At(), it(), ut(), Oi(), Ge()), !0) : !1;
  }
  function Op() {
    var m, b, x, N, E;
    if (r || M) return;
    const l = ui(), d = An();
    if (!(!d && l.length === 0) && !l.some((K) => On(K))) {
      if (mn(), l.length > 1) {
        const K = new Set(l.filter((le) => Tn(le)).map((le) => String(le.actionGroupId || le.id || ""))), X = new Set(l.filter((le) => xr(le)).map((le) => Ii(le.rasterObjectId || le.id || ""))), Ce = new Set(l.filter(sn).map((le) => String(le.id || "")));
        K.size > 0 && (y.painting.paint.strokes = (Array.isArray((b = (m = y.painting) == null ? void 0 : m.paint) == null ? void 0 : b.strokes) ? y.painting.paint.strokes : []).filter((le) => !K.has(String((le == null ? void 0 : le.actionGroupId) || ""))), y.painting.groups = uo().filter((le) => !K.has(String((le == null ? void 0 : le.actionGroupId) || (le == null ? void 0 : le.id) || ""))), kr()), X.size > 0 && (y.painting.raster_objects = Gr().filter((le) => !X.has(String((le == null ? void 0 : le.id) || ""))), go()), Ce.size > 0 && (y.stickers = (Array.isArray(y.stickers) ? y.stickers : []).filter((le) => Ce.has(String((le == null ? void 0 : le.id) || "")) ? pr(le) ? (ws(le) || (le.visible = !1), !0) : !1 : !0), bo(), hn()), u.selectedId = null, u.selectedIds = [], bt(), At(), it(), ut(), Ge();
        return;
      }
      if (Tn(d)) {
        const K = String(d.actionGroupId || d.id || "").trim();
        y.painting.paint.strokes = (Array.isArray((N = (x = y.painting) == null ? void 0 : x.paint) == null ? void 0 : N.strokes) ? y.painting.paint.strokes : []).filter((X) => String((X == null ? void 0 : X.actionGroupId) || "").trim() !== K), y.painting.groups = uo().filter((X) => String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim() !== K), kr(), u.selectedId = null, u.selectedIds = [], bt(), At(), it(), ut(), Ge();
        return;
      }
      if (xr(d)) {
        const K = Ii(d.rasterObjectId || d.id || "");
        y.painting.raster_objects = Gr().filter((X) => String((X == null ? void 0 : X.id) || "").trim() !== K), go(), u.selectedId = null, u.selectedIds = [], bt(), At(), it(), ut(), Ge();
        return;
      }
      if (C && Kn(d)) {
        wv();
        return;
      }
      if (t === "stickers" || sn(d)) {
        if (pr(d)) {
          if (ws(d)) return;
          d.visible = !1, hn(), bt(), At(), it(), ut(), Ge();
          return;
        }
        y.stickers = y.stickers.filter((K) => K.id !== d.id), bo(), hn(), u.selectedId = ((E = Ai()[0]) == null ? void 0 : E.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = u.selectedId, bt(), At(), it(), ut(), Ge();
        return;
      }
      xv();
    }
  }
  function zc(l, d) {
    const m = ge.frameSafeRect;
    if (!l || !m || u.mode !== "frame") return !1;
    const b = Eu * no(m, l), x = rf(nf(m, d), b);
    return l.hFOV_deg = x.hFOV_deg, l.vFOV_deg = x.vFOV_deg, !0;
  }
  function Av(l, d) {
    if (!l || l.locked === !0) return;
    const m = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, b = (() => {
      const K = String(l.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(K)) {
        const [le, ye] = K.split(":").map((Ee) => Number(Ee));
        if (Number.isFinite(le) && Number.isFinite(ye)) return le >= ye;
      }
      const X = Number(l.hFOV_deg || 64), Ce = Number(l.vFOV_deg || 40);
      return Math.abs(X - Ce) > 1e-6 ? X >= Ce : ao(l) >= 1;
    })();
    let [x, N] = m[String(d)] || m["1:1"];
    x >= N !== b && ([x, N] = [N, x]);
    const E = x / N;
    if (!zc(l, E)) {
      const K = Ie(Number(l.vFOV_deg || 40), 1, 179);
      l.vFOV_deg = K, l.hFOV_deg = ll(K, E);
    }
    l.aspect_id = `${x}:${N}`;
  }
  function Cv(l, d, m) {
    if (!l || l.locked === !0) return !1;
    const b = ls(d, m);
    if (!b) return !1;
    const x = b.ratio;
    if (!zc(l, x)) {
      const N = Ie(Number(l.vFOV_deg || 40), 1, 179);
      l.vFOV_deg = N, l.hFOV_deg = ll(N, x);
    }
    return l.aspect_id = b.label, !0;
  }
  function Tp(l) {
    if (!l || l.locked === !0) return;
    const d = String(l.aspect_id || "").trim(), m = wi(l), b = m.tanHalfX / Math.max(1e-12, m.tanHalfY), x = 1 / Math.max(1e-12, b);
    if (!zc(l, x)) {
      const N = Ie(Number(l.vFOV_deg || 60), 1, 179);
      l.vFOV_deg = N, l.hFOV_deg = ll(N, x);
    }
    if (/^\d+:\d+$/.test(d)) {
      const [N, E] = d.split(":");
      l.aspect_id = `${E}:${N}`;
    } else
      l.aspect_id = Xi(l);
  }
  function Iv() {
    r || (y.projection_model = "pinhole_rectilinear", y.alpha_mode = "straight", s && (y.output_preset = _(Number(y.output_preset || 2048))), c && (y.coverage = zn(c.value)), p && (y.bg_color = String(p.value || y.bg_color || "#00ff00")), Un(), e.setDirtyCanvas(!0, !0));
  }
  function Un() {
    var d;
    if (r) return;
    nr(), cy(y), y.coverage = zn(y.coverage), ly(e, y.active);
    const l = uy(e, y);
    f && !dy(e, l, String(f.value ?? ""), { rebased: W }) && (f.value = l, (d = f.callback) == null || d.call(f, l));
  }
  const Fp = () => Un();
  r || (e.__panoFlushStateBeforeQueue = Fp);
  function jc() {
    y.ui_settings = BE(y.ui_settings), r || Un();
  }
  function At() {
    var l;
    r || (Un(), (l = e.setDirtyCanvas) == null || l.call(e, !0, !0));
  }
  function Ev() {
    r || c1() && sp().catch((l) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", l);
    });
  }
  function Ov(l = {}) {
    var b, x, N, E, K, X, Ce, le, ye, Ee;
    const d = l.syncPreview !== !1, m = l.syncGraph !== !1;
    d && ((x = (b = e.__panoPreviewNodeRuntime) == null ? void 0 : b.requestDraw) == null || x.call(b), (E = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || E.call(N), (K = e.setDirtyCanvas) == null || K.call(e, !0, !1)), m && ((Ce = (X = e.graph) == null ? void 0 : X.setDirtyCanvas) == null || Ce.call(X, !0, !0), (Ee = (ye = (le = qn) == null ? void 0 : le.canvas) == null ? void 0 : ye.setDirty) == null || Ee.call(ye, !0, !0));
  }
  function ya() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", Fn(), it());
  }
  function Dp() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function nr(l = !0) {
    var b, x;
    if (!W) return;
    const d = j;
    if (!gs()) {
      j = null, (b = y.shots) != null && b.length && (y.shots = []), d && Lp(d, null);
      return;
    }
    const m = (x = y.shots) == null ? void 0 : x[0];
    l && m && j && Yk(y.camera, u.frame, m, j), j = _m(y.camera, u.frame), m ? Object.assign(m, j, { position: [...j.position] }) : y.shots = [{ ...j, position: [...j.position] }], d || Lp(null, j);
  }
  function Lp(l, d) {
    var N, E;
    !d && u.mode === "frame" && Rp(l);
    const m = (d == null ? void 0 : d.position) ?? [0, 0, 0];
    if (((E = (N = u.viewTransition) == null ? void 0 : N.end) == null ? void 0 : E.mode) === "3dof") {
      Ps({ ...fi(), position: m }, u.viewTransition.end);
      return;
    }
    if (u.mode !== "pano" || u.spaceMode !== "3dof" || !Pc()) return;
    const b = (l == null ? void 0 : l.position) ?? [0, 0, 0];
    if (b.every((K, X) => K === m[X])) return;
    const x = { ...fi(), position: b };
    Ni({ mode: "6dof", position: b, moved: !0 }), u.viewDistance = x.distance, Ps({ ...x, position: m }, { mode: "3dof", moved: !1 });
  }
  function Rp(l) {
    if (u.mode = "pano", !l) return;
    xc();
    const d = fi().distance;
    u.viewYaw = Bt(l.yaw_deg), u.viewPitch = Ie(l.pitch_deg, -89.9, 89.9), u.viewFov = Ie(l.hFOV_deg, 35, 140), u.spaceMode === "6dof" && Ni({ mode: "6dof", position: [...l.position], moved: !0 }), u.viewDistance = d, ge.backgroundDirty = !0;
  }
  function st() {
    if (!V) return null;
    const l = Array.isArray(y.shots) ? y.shots : [];
    if (!l.length) return null;
    const d = String(y.active.selected_shot_id || "");
    return l.find((m) => String((m == null ? void 0 : m.id) || "") === d) || l[0] || null;
  }
  function Tv() {
    var Je, Oe, ot, rt, wt;
    if (!O) return null;
    const l = (Je = O.getBoundingClientRect) == null ? void 0 : Je.call(O), d = Number((l == null ? void 0 : l.width) || 0) > 0 ? O.width / l.width : 1, m = Number((l == null ? void 0 : l.height) || 0) > 0 ? O.height / l.height : 1;
    ge.frameCanvasScale = Math.min(d, m);
    let b = 24, x = 24;
    const N = Math.max(b + 1, O.width - 24);
    let E = Math.max(x + 1, O.height - 24);
    const K = (Oe = P == null ? void 0 : P.getBoundingClientRect) == null ? void 0 : Oe.call(P), X = (ot = D == null ? void 0 : D.getBoundingClientRect) == null ? void 0 : ot.call(D);
    let Ce = 24;
    K && l && K.width > 0 && K.height > 0 && (Ce = Math.max(Ce, (K.right - l.left) * d + ug)), X && l && X.width > 0 && X.height > 0 && ((rt = I.frameRail) == null ? void 0 : rt.visible) === !0 && (Ce = Math.max(Ce, (l.right - X.left) * d + ug)), b = Math.max(b, Ce);
    const le = Math.min(N, O.width - Ce);
    let ye = 24;
    const Ee = (wt = Pe == null ? void 0 : Pe.getBoundingClientRect) == null ? void 0 : wt.call(Pe);
    if (Ee && l && Ee.width > 0 && Ee.height > 0 && (ye = Math.max(ye, (Ee.bottom - l.top) * m + Ou)), [fe, L].forEach((dt) => {
      var bn;
      if (!dt || !l) return;
      const _t = getComputedStyle(dt);
      if (_t.display === "none" || _t.visibility === "hidden" || Number(_t.opacity) <= 0) return;
      const Tt = (bn = dt.getBoundingClientRect) == null ? void 0 : bn.call(dt);
      !Tt || Tt.width <= 0 || Tt.height <= 0 || (ye = Math.max(ye, (l.bottom - Tt.top) * m + Ou));
    }), oe && l) {
      const dt = getComputedStyle(oe);
      dt.display !== "none" && dt.visibility !== "hidden" && Number(dt.opacity) > 0 && (ye = Math.max(ye, (PE + Ou) * m));
    }
    return x = Math.max(x, ye), E = Math.max(x + 1, Math.min(E, O.height - ye)), {
      x: b,
      y: x,
      w: Math.max(1, le - b),
      h: Math.max(1, E - x)
    };
  }
  function Ts(l = st()) {
    if (!l || !O) return null;
    const d = ge.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return Rx(d, l, Eu * no(d, l));
  }
  function gr(l = st()) {
    const d = Ts(l);
    return d ? { x: d.x, y: d.y, w: d.w, h: d.h } : null;
  }
  function Hc() {
    return V && !!st();
  }
  function Fv(l, d) {
    const m = st();
    if (!m || m.locked === !0) return !1;
    const b = Number(d) > 0, x = T0(m, d);
    if (!x) return !1;
    if (b) {
      const N = Eu * no(
        ge.frameSafeRect || { w: O.width, h: O.height },
        x
      ), E = of({ width: O.width, height: O.height }, N);
      if (E.halfW < O.width * 0.5 - 1e-6 || E.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return m.hFOV_deg = x.hFOV_deg, m.vFOV_deg = x.vFOV_deg, Vp(), it(), !0;
  }
  function Vp() {
    u.frameWheelChanged = !0, u.frameWheelCommitTimer && window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = window.setTimeout(() => {
      u.frameWheelCommitTimer = 0, u.frameWheelChanged && (u.frameWheelChanged = !1, bt(), At(), it());
    }, 180);
  }
  function Gc() {
    return W && u.mode === "frame" && Pc();
  }
  function ba() {
    const l = st(), d = Ts(l);
    return l && d ? Pm(l, d, { width: O.width, height: O.height }) : null;
  }
  function $p() {
    var l;
    return ((l = bs()) == null ? void 0 : l.radius) || _r;
  }
  function va(l) {
    const { position: d, yaw_deg: m, pitch_deg: b, roll_deg: x, hFOV_deg: N } = l.shot;
    return { position: d, yaw_deg: m, pitch_deg: b, roll_deg: x, hFOV_deg: N, distance: $p() };
  }
  function zp(l, d) {
    const { rect: m } = l;
    return We.pickSurface(N1(l.shot), d.x - m.x, d.y - m.y, m.w, m.h);
  }
  function jp(l, d, m) {
    return ld(d, zp(l, m), null, pa());
  }
  function Hp(l) {
    return JSON.stringify([va(l), l.rect]);
  }
  function Gp(l) {
    const d = st();
    d.position = [...l.position], d.yaw_deg = l.yaw_deg, d.pitch_deg = l.pitch_deg;
  }
  function Wp(l, d) {
    const m = st();
    !m || r || m.locked === !0 || (u.interaction = {
      kind: "pan_frame",
      shot: m,
      last: l,
      start: { yaw_deg: Number(m.yaw_deg || 0), pitch_deg: Number(m.pitch_deg || 0) },
      changed: !1
    }, It(l), O.setPointerCapture(d));
  }
  function Dv(l, d, m) {
    const b = ba();
    if (!b || r) return;
    const x = va(b);
    u.interaction = l === "orbit" ? { kind: "frame_orbit", last: d, pivot: jp(b, x, d), changed: !1 } : { kind: "frame_pan", last: d, depth: fy(x, pa()), changed: !1 }, It(d), O.setPointerCapture(m);
  }
  function Lv(l, d) {
    const m = ba();
    if (!m) return;
    const b = va(m), x = d.x - l.last.x, N = d.y - l.last.y;
    Gp(l.kind === "frame_pan" ? xm(b, x, N, m.rect.w, m.rect.h, l.depth) : wm(b, x, N, O.height, l.pivot)), l.changed = l.changed || x !== 0 || N !== 0, l.last = d, Ge({ localOnly: !0, cause: "frame_view" });
  }
  function Rv(l, d) {
    const m = ba();
    if (!m || r) return;
    const b = va(m), x = performance.now(), N = { x: l.x, y: l.y, time: x, key: We.contentRevision(), view: Hp(m) };
    if (!py(nt, N)) {
      const E = zp(m, l);
      nt = { ...N, cost: performance.now() - x, hit: E };
    }
    Gp(hy(b, ld(b, nt.hit, null, pa()), d, pa())), nt.view = Hp(ba() ?? m), nt.wheelTime = x, Vp(), it(), Ge({ localOnly: !0, cause: "frame_view" });
  }
  function Vv() {
    return u.frameWheelCommitTimer && (window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = 0), u.frameWheelChanged ? (u.frameWheelChanged = !1, bt(), At(), it(), !0) : !1;
  }
  function _a() {
    const l = u.interaction;
    if (!(l != null && l.shot) || !l.start || l.kind !== "pan_frame" && l.kind !== "roll_frame") return !1;
    const d = l.kind === "roll_frame";
    return l.kind === "pan_frame" ? (l.shot.yaw_deg = l.start.yaw_deg, l.shot.pitch_deg = l.start.pitch_deg) : l.shot.roll_deg = l.start.roll_deg, d && Fi(), u.interaction = null, ho(), Br(), it(), It(u.pointerPos), Ge({ localOnly: !0 }), !0;
  }
  function $v(l, d) {
    const m = Number(d || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, m / 2048)
    };
  }
  function Ti(l) {
    const d = String(l || "").trim();
    return d === "eraser" ? Jr : $n[d] ? d : u.activeBrushPresetId || Jr;
  }
  function Kp() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (Dp() || Hc());
  }
  function Bp() {
    var l;
    return Kp() && ((l = u.pointerPos) == null ? void 0 : l.inside) === !0;
  }
  function Fs(l, d = !0) {
    const m = Number((l == null ? void 0 : l.x) || 0), b = Number((l == null ? void 0 : l.y) || 0), x = d !== !1, N = u.pointerPos || { x: 0, y: 0, inside: !1 }, E = N.inside !== x || Math.abs(N.x - m) > 0.01 || Math.abs(N.y - b) > 0.01;
    return u.pointerPos = { x: m, y: b, inside: x }, E;
  }
  function zv() {
    var le, ye;
    if (!Bp()) return null;
    const l = u.primaryTool === "mask" ? "mask" : "paint", d = l === "mask" ? u.maskTool : u.paintTool, m = Ti(d), b = $n[m] || $n[Jr], x = Number(u.brushSizes[m] ?? 10), N = Math.max(1, x) * Math.max(0.1, Number(b.sizeScale ?? 1)), E = Math.max(3, N * 0.5), K = l === "mask" ? d === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : d === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Yn(u.paintColor), X = l === "mask" ? d === "lasso_fill" ? 0.18 : 0.2 : d === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(K.a ?? 1) * 0.3), 0.16, 0.52), Ce = l === "mask" ? 0.95 : d === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(K.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: l,
      toolKind: d,
      preset: b,
      radius: E,
      fillStyle: Ir(K, X),
      strokeStyle: Ir(K, Ce),
      x: Number(((le = u.pointerPos) == null ? void 0 : le.x) || 0),
      y: Number(((ye = u.pointerPos) == null ? void 0 : ye.y) || 0),
      hotspotX: E,
      hotspotY: E
    };
  }
  function jv() {
    var Ee, Je, Oe;
    const l = zv();
    if (!Xe) return;
    if (!l) {
      Xe.style.display = "none";
      return;
    }
    let d = l.radius * 2, m = l.radius * 2, b = "999px", x = 0, N = l.fillStyle, E = "1px solid rgba(222, 222, 222, 0.72)", K = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const X = "rgba(222, 222, 222, 0.72)", Ce = "rgba(52, 52, 52, 0.72)";
    let le = Number(l.hotspotX ?? d * 0.5), ye = Number(l.hotspotY ?? m * 0.5);
    if (l.toolKind === "lasso_fill")
      d = ec, m = ec, b = "0", E = "0", K = "none", le = IE, ye = EE, N = VE(l.fillStyle, Ce, X);
    else if (l.layerKind === "mask")
      N = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (l.toolKind === "marker") {
      const ot = Math.max(1, Number(((Ee = l.preset) == null ? void 0 : Ee.aspect) ?? 1));
      d = Math.max(10, l.radius * 2 * ot), m = Math.max(6, l.radius * 2), b = `${Math.min(6, m * 0.42)}px`, x = Number(((Oe = (Je = l.preset) == null ? void 0 : Je.angle) == null ? void 0 : Oe.value) || 0) * Ji;
    } else l.toolKind === "brush" ? N = `radial-gradient(circle at 50% 50%, ${l.strokeStyle} 0%, ${l.fillStyle} 45%, rgba(0,0,0,0) 100%)` : l.toolKind === "eraser" && (N = "rgba(255,255,255,0.14)");
    Xe.style.display = "block", Xe.style.width = `${Math.round(d)}px`, Xe.style.height = `${Math.round(m)}px`, Xe.style.borderRadius = b, Xe.style.border = E, Xe.style.boxShadow = K, Xe.style.background = N, Xe.style.backgroundRepeat = "no-repeat", Xe.style.backgroundPosition = "center", Xe.style.backgroundSize = "contain", Xe.style.transform = `translate(${Math.round(l.x - le)}px, ${Math.round(l.y - ye)}px) rotate(${x}deg)`;
  }
  function Hv() {
    var dt;
    if (!ce || !z) return;
    const l = u.primaryTool === "mask" ? "mask" : "paint", d = l === "mask" ? u.maskTool : u.paintTool;
    if (d === "lasso_fill") return;
    const m = Ti(d), b = $n[m] || $n[Jr], x = Number(u.brushSizes[m] ?? 10), N = Math.max(1, x) * Math.max(0.1, Number(b.sizeScale ?? 1)), E = Math.max(6, N * 0.5), K = d === "eraser", X = l === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : K ? { r: 1, g: 1, b: 1, a: 0.22 } : Yn(u.paintColor), Ce = l === "mask" ? Ir(X, 0.22) : K ? "rgba(255,255,255,0.14)" : Ir(X, Ie(Math.max(0.18, Number(X.a ?? 1) * 0.34), 0.18, 0.56)), le = l === "mask" ? Ir(X, 0.96) : K ? "rgba(255,255,255,0.72)" : Ir(X, Ie(Math.max(0.56, Number(X.a ?? 1) * 0.96), 0.56, 1));
    let ye = E * 2, Ee = E * 2, Je = "999px", Oe = 0, ot = Ce;
    const rt = "rgba(222, 222, 222, 0.72)", wt = "rgba(52, 52, 52, 0.72)";
    if (l === "mask")
      ot = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (d === "marker") {
      const _t = Math.max(1, Number((b == null ? void 0 : b.aspect) ?? 1));
      ye = Math.max(16, E * 2 * _t), Ee = Math.max(10, E * 2), Je = `${Math.min(8, Ee * 0.42)}px`, Oe = Number(((dt = b == null ? void 0 : b.angle) == null ? void 0 : dt.value) || 0) * Ji;
    } else d === "brush" ? ot = `radial-gradient(circle at 50% 50%, ${le} 0%, ${Ce} 48%, rgba(0,0,0,0) 100%)` : d === "lasso_fill" ? (ye = Math.max(18, E * 1.8), Ee = ye, ot = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${le} 43%, ${le} 58%, rgba(0,0,0,0) 59%)`) : K && (ot = "rgba(255,255,255,0.12)");
    z.style.width = `${Math.round(ye)}px`, z.style.height = `${Math.round(Ee)}px`, z.style.borderRadius = Je, z.style.background = ot, z.style.border = `1px solid ${rt}`, z.style.boxShadow = `0 0 0 1px ${wt}`, z.style.transform = `rotate(${Oe}deg)`, Ye && (clearTimeout(Ye), Ye = 0), ce.classList.remove("fade-out"), ce.classList.add("show");
  }
  function Ds() {
    !ce || !ce.classList.contains("show") || (ce.classList.add("fade-out"), Ye && clearTimeout(Ye), Ye = window.setTimeout(() => {
      ce.classList.remove("show", "fade-out"), Ye = 0;
    }, 180));
  }
  function Up(l, d, m, b) {
    const x = Ti(d), N = $n[x] || $n[Jr], E = u.brushSizes[x] ?? 10, K = Math.max(1, E) * Math.max(0.1, N.sizeScale ?? 1), X = $v(b, K), Ce = m.map((ye) => ({
      ...ye,
      t: Number((ye == null ? void 0 : ye.t) || 0),
      widthScale: Number.isFinite(Number(ye == null ? void 0 : ye.widthScale)) ? Math.max(0, Number(ye.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(ye == null ? void 0 : ye.pressureLike)) ? Math.max(0, Number(ye.pressureLike)) : 1
    })), le = {
      id: To(l),
      actionGroupId: To("ag"),
      targetSpace: b && typeof b == "object" ? { ...b, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: l,
      toolKind: d,
      size: K,
      createdAt: Date.now(),
      color: l === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: X.radiusModel,
      radiusValue: X.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: Ce.map((ye) => ({ ...ye })),
        points: Ce.map((ye) => ({ ...ye }))
      }
    };
    return sg(le, N), u.mode, Number(N.aspect ?? 1), Number(le.aspect ?? 1), String(le.stampKind || ""), Number(le.size || 0), String(le.radiusModel || ""), Number(le.radiusValue || 0), { ...le.targetSpace }, le;
  }
  function Yp(l, d, m, b) {
    const x = m.map((X) => ({
      ...X,
      t: Number((X == null ? void 0 : X.t) || 0),
      widthScale: Number.isFinite(Number(X == null ? void 0 : X.widthScale)) ? Math.max(0, Number(X.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(X == null ? void 0 : X.pressureLike)) ? Math.max(0, Number(X.pressureLike)) : 1
    })), N = Ti(d), E = $n[N] || $n[Jr], K = {
      id: To(l),
      actionGroupId: To("ag"),
      targetSpace: b && typeof b == "object" ? { ...b, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: l,
      toolKind: d,
      size: 10,
      createdAt: Date.now(),
      color: l === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: x.map((X) => ({ ...X }))
      }
    };
    return sg(K, E), u.mode, Number(E.aspect ?? 1), Number(K.aspect ?? 1), String(K.stampKind || ""), { ...K.targetSpace }, K;
  }
  function Ls(l) {
    const d = y.painting || (y.painting = Yo(null)), m = d[l] || (d[l] = { strokes: [] });
    return Array.isArray(m.strokes) || (m.strokes = []), m.strokes;
  }
  function Gv(l, d, m = performance.now()) {
    let b;
    if (u.mode === "frame") {
      const Ce = st();
      if (!Ce || (b = hr(d, Ce, m), !b)) return !1;
    } else
      b = Mr(d, m);
    if (!b) return !1;
    const x = l.stroke.geometry.rawPoints || l.stroke.geometry.points, N = l.stroke.geometry.points, E = x[x.length - 1];
    if (E) {
      const Ce = Math.abs(Number(b.u ?? b.x ?? 0) - Number(E.u ?? E.x ?? 0)), le = Math.abs(Number(b.v ?? b.y ?? 0) - Number(E.v ?? E.y ?? 0));
      if (Ce < 15e-4 && le < 15e-4) return !1;
    }
    const K = {
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    x.push({ ...K }), N.push({ ...K });
    const X = er(l);
    if (X) {
      const Ce = u.paintEngine.ensureTarget(X);
      u.paintEngine.appendStrokePoint(Ce, Number(K.u ?? 0), Number(K.v ?? 0), l.stroke);
    }
    return !0;
  }
  function Wv(l, d, m = performance.now()) {
    var E, K;
    let b;
    if (u.mode === "frame") {
      const X = st();
      if (!X) return !1;
      b = hr(d, X, m);
    } else
      b = Mr(d, m);
    const x = (K = (E = l == null ? void 0 : l.stroke) == null ? void 0 : E.geometry) == null ? void 0 : K.points;
    if (!b || !Array.isArray(x)) return !1;
    const N = x[x.length - 1];
    if (N) {
      const X = Math.abs(Number(b.u ?? b.x ?? 0) - Number(N.u ?? N.x ?? 0)), Ce = Math.abs(Number(b.v ?? b.y ?? 0) - Number(N.v ?? N.y ?? 0));
      if (X < 15e-4 && Ce < 15e-4) return !1;
    }
    return x.push({
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Kv(l) {
    var _t, Tt, bn, Li, Ri;
    const d = (l == null ? void 0 : l.stroke) || null;
    if (!d || (l == null ? void 0 : l.layerKind) !== "paint" || String((d == null ? void 0 : d.toolKind) || "") !== "eraser") return !1;
    xs();
    const m = er(), b = Gf(m.width, m.height);
    if (!g1(b, d, { w: m.width, h: m.height })) return !1;
    const x = ((Tt = (_t = b.ctx) == null ? void 0 : _t.getImageData(0, 0, m.width, m.height)) == null ? void 0 : Tt.data) || null;
    if (!x) return !1;
    const N = new Map(uo().map((Ze) => [String((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "").trim(), Ze ? { ...Ze } : null])), E = [], K = [], X = [...Gr().filter((Ze) => String((Ze == null ? void 0 : Ze.layerKind) || "paint") !== "paint")];
    let Ce = !1, le = qb().reduce((Ze, Be) => Math.max(Ze, Number((Be == null ? void 0 : Be.z_index) || 0)), -1) + 1;
    function ye(Ze, Be, Qe, lt = 8) {
      let at = Be, Ct = Qe, Mt = -1, Kt = -1;
      for (let Nt = 0; Nt < Qe; Nt += 1)
        for (let on = 0; on < Be; on += 1)
          Ze[(Nt * Be + on) * 4 + 3] <= lt || (on < at && (at = on), Nt < Ct && (Ct = Nt), on > Mt && (Mt = on), Nt > Kt && (Kt = Nt));
      return Mt < at || Kt < Ct ? null : { minX: at, minY: Ct, maxX: Mt, maxY: Kt };
    }
    const Ee = ye(x, m.width, m.height, 8);
    if (!Ee) return !1;
    function Je(Ze, Be) {
      return !Ze || !Be ? !1 : !(Ze.maxX < Be.minX || Be.maxX < Ze.minX || Ze.maxY < Be.minY || Be.maxY < Ze.minY);
    }
    function Oe(Ze, Be) {
      const Qe = co((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "", "paint", Be);
      if (!Qe) return null;
      const lt = Qe.centerUv.u - Qe.halfW, at = Qe.centerUv.u + Qe.halfW, Ct = Qe.centerUv.v - Qe.halfH, Mt = Qe.centerUv.v + Qe.halfH, Kt = m.width, Nt = m.height;
      return {
        minX: Math.floor((lt % 1 + 1) % 1 * Kt),
        maxX: Math.ceil((at % 1 + 1) % 1 * Kt),
        minY: Math.floor(Ie(Ct, 0, 1) * Nt),
        maxY: Math.ceil(Ie(Mt, 0, 1) * Nt),
        wraps: at - lt >= 1 || lt < 0 || at > 1
      };
    }
    function ot(Ze) {
      const Be = (Ze == null ? void 0 : Ze.bbox) || null;
      if (!Be) return null;
      const Qe = (Ze == null ? void 0 : Ze.transform) || {}, lt = m.width, at = m.height, Ct = Number(Be.u0 || 0) + Number(Qe.du || 0), Mt = Number(Be.u1 || 0) + Number(Qe.du || 0), Kt = Number(Be.v0 || 0) + Number(Qe.dv || 0), Nt = Number(Be.v1 || 0) + Number(Qe.dv || 0);
      return {
        minX: Math.floor((Ct % 1 + 1) % 1 * lt),
        maxX: Math.ceil((Mt % 1 + 1) % 1 * lt),
        minY: Math.floor(Ie(Kt, 0, 1) * at),
        maxY: Math.ceil(Ie(Nt, 0, 1) * at),
        wraps: Mt - Ct >= 1 || Ct < 0 || Mt > 1
      };
    }
    function rt(Ze) {
      return Ze ? Ze.wraps ? Je(Ee, { minX: 0, maxX: Ze.maxX, minY: Ze.minY, maxY: Ze.maxY }) || Je(Ee, { minX: Ze.minX, maxX: m.width - 1, minY: Ze.minY, maxY: Ze.maxY }) : Je(Ee, Ze) : !0;
    }
    function wt(Ze) {
      if (!Ze) return { touched: !1, canvas: null };
      const Be = Gf(m.width, m.height, { readback: !0 });
      Be.ctx.drawImage(Ze, 0, 0);
      const Qe = Be.ctx.getImageData(0, 0, m.width, m.height);
      Be.ctx.save(), Be.ctx.globalCompositeOperation = "destination-out", Be.ctx.drawImage(b.canvas, 0, 0), Be.ctx.restore();
      const lt = Be.ctx.getImageData(0, 0, m.width, m.height);
      for (let at = 0; at < m.width * m.height; at += 1) {
        if (x[at * 4 + 3] <= 8) continue;
        const Mt = Qe.data[at * 4 + 3], Kt = lt.data[at * 4 + 3];
        if (Mt > Kt)
          return { touched: !0, canvas: Be.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function dt(Ze, Be, Qe) {
      const lt = Number(Qe == null ? void 0 : Qe.z_index), at = Hb(Ze, Be, Qe).map((Ct, Mt) => ({
        ...Ct,
        z_index: Number.isFinite(lt) ? lt + Mt * 1e-3 : le + Mt * 1e-3
      }));
      return at.length && (le = Math.max(le, ...at.map((Ct) => Number((Ct == null ? void 0 : Ct.z_index) || 0))) + 1), at;
    }
    for (const Ze of uo()) {
      const Be = String((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "").trim();
      if (!Be) continue;
      const Qe = fo(Be, "paint");
      if (!rt(Oe(Ze, Qe))) {
        K.push(Ze), E.push(...Qe);
        continue;
      }
      const lt = ((Li = (bn = u.paintEngine) == null ? void 0 : bn.getGroupTarget) == null ? void 0 : Li.call(bn, Be)) || null, at = ((Ri = lt == null ? void 0 : lt.committedPaint) == null ? void 0 : Ri.canvas) || null;
      if (!at) {
        K.push(Ze), E.push(...Qe);
        continue;
      }
      const Ct = wt(at);
      if (!Ct.touched || !Ct.canvas) {
        K.push(Ze), E.push(...Qe);
        continue;
      }
      Ce = !0;
      const Mt = dt(Ct.canvas, "paint", N.get(Be) || Ze || {});
      X.push(...Mt);
    }
    for (const Ze of Gr().filter((Be) => String((Be == null ? void 0 : Be.layerKind) || "paint") === "paint")) {
      if (!rt(ot(Ze))) {
        X.push(Ze);
        continue;
      }
      const Be = Rb(Ze, null);
      if (!Be) {
        X.push(Ze);
        continue;
      }
      const Qe = wt(Be);
      if (!Qe.touched || !Qe.canvas) {
        X.push(Ze);
        continue;
      }
      Ce = !0;
      const lt = dt(Qe.canvas, "paint", Ze);
      X.push(...lt);
    }
    return Ce ? (y.painting.paint.strokes = E, y.painting.groups = K.sort((Ze, Be) => Number((Ze == null ? void 0 : Ze.z_index) || 0) - Number((Be == null ? void 0 : Be.z_index) || 0)), y.painting.raster_objects = X.sort((Ze, Be) => Number((Ze == null ? void 0 : Ze.z_index) || 0) - Number((Be == null ? void 0 : Be.z_index) || 0)), sa({ preservePanelValues: !1 }), !0) : !1;
  }
  function Bv(l) {
    var E, K, X, Ce, le;
    if ((((K = (E = l.stroke) == null ? void 0 : E.geometry) == null ? void 0 : K.rawPoints) || ((Ce = (X = l.stroke) == null ? void 0 : X.geometry) == null ? void 0 : Ce.points) || []).length >= 1) {
      Wc(l);
      const ye = er(l);
      ye && (String(((le = l.stroke) == null ? void 0 : le.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(ye) : u.paintEngine.commitActiveStroke(l.stroke, ye)), l._hasCommittedSegments = !0;
    }
    const m = l.stroke, b = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, x = Up(l.layerKind, m.toolKind, [], b);
    x.actionGroupId = m.actionGroupId, l.stroke = x;
    const N = er(l);
    N && u.paintEngine.beginStroke(x, N);
  }
  function Uv(l) {
    var E, K;
    if ((((K = (E = l.stroke) == null ? void 0 : E.geometry) == null ? void 0 : K.points) || []).length >= 3) {
      Wc(l);
      const X = er(l);
      X && u.paintEngine.commitActiveStroke(l.stroke, X), l._hasCommittedSegments = !0;
    }
    const m = l.stroke, b = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, x = Yp(l.layerKind, m.toolKind, [], b);
    x.actionGroupId = m.actionGroupId, l.stroke = x;
    const N = er(l);
    N && u.paintEngine.beginStroke(x, N);
  }
  function Wc(l) {
    var N, E, K, X;
    const d = ((N = l == null ? void 0 : l.stroke) == null ? void 0 : N.geometry) || null;
    if (!d) return !1;
    const m = String(((E = l == null ? void 0 : l.stroke) == null ? void 0 : E.toolKind) || "pen");
    if (l.layerKind === "paint" && m === "eraser")
      return d.geometryKind !== "lasso_fill" && (d.processedPoints = np(d.rawPoints || d.points || [], l.stroke.targetSpace, !0)), Kv(l);
    const b = l.layerKind === "paint" && m !== "eraser";
    if (d.geometryKind === "lasso_fill")
      return (Array.isArray(d.points) ? d.points : []).length < 3 ? !1 : (b && Kf((K = l.stroke) == null ? void 0 : K.actionGroupId), Ls(l.layerKind).push(l.stroke), !0);
    const x = d.rawPoints || d.points || [];
    return x.length < 1 ? !1 : (d.processedPoints = np(x, l.stroke.targetSpace, !0), b && Kf((X = l.stroke) == null ? void 0 : X.actionGroupId), Ls(l.layerKind).push(l.stroke), !0);
  }
  function Xp(l) {
    var m;
    if (V && u.mode === "frame") {
      const b = st(), x = gr(b);
      if (!b || !x || !(Number((l == null ? void 0 : l.x) || 0) >= Number(x.x || 0) && Number((l == null ? void 0 : l.x) || 0) <= Number(x.x || 0) + Number(x.w || 0) && Number((l == null ? void 0 : l.y) || 0) >= Number(x.y || 0) && Number((l == null ? void 0 : l.y) || 0) <= Number(x.y || 0) + Number(x.h || 0))) return null;
      const E = hr(l, b, performance.now()), K = E ? Kb(E) : null;
      if (K)
        for (const Ce of Mc()) {
          if (!sn(Ce)) continue;
          const le = dp(Ce, K);
          if (le && Number(le.x) >= 0 && Number(le.x) <= 1 && Number(le.y) >= 0 && Number(le.y) <= 1) {
            const ye = ln(Ce);
            if (ye != null && ye.visible) return { item: Ce, geom: ye };
          }
        }
      const X = Xf(!1).slice().sort((Ce, le) => Number((le == null ? void 0 : le.z_index) || 0) - Number((Ce == null ? void 0 : Ce.z_index) || 0));
      for (const Ce of X) {
        if (Ce.type === "strokeGroup") {
          const Ee = Jf(tp("paint", Ce.actionGroupId || Ce.id || ""));
          if (!Ee) continue;
          const Je = ln(Ee);
          if (!(Je != null && Je.visible)) continue;
          const Oe = Array.isArray(Je.strokePaths) ? Je.strokePaths : [];
          for (const ot of Oe) {
            const rt = Array.isArray(ot == null ? void 0 : ot.points) ? ot.points : [];
            if (!rt.length) continue;
            if (ot.closed && rt.length >= 3 && mi(l, rt)) return { item: Ee, geom: Je };
            const wt = Math.max(8, Number((ot == null ? void 0 : ot.lineWidth) || 0) * 0.5 + 6);
            for (let dt = 0; dt < rt.length - 1; dt += 1)
              if (Du(l, rt[dt], rt[dt + 1]) <= wt * wt) return { item: Ee, geom: Je };
            if (rt.length === 1 && Va(l, rt[0]) <= wt * wt) return { item: Ee, geom: Je };
          }
          continue;
        }
        if (Ce.type === "rasterObject") {
          const Ee = qf(ep(((m = Ce.item) == null ? void 0 : m.id) || Ce.id || ""));
          if (!Ee) continue;
          const Je = ln(Ee);
          if (Zf(Ee, Je, l, E)) return { item: Ee, geom: Je };
          continue;
        }
        const le = Ce.item;
        if (!le || !sn(le) || !K) continue;
        const ye = dp(le, K);
        if (ye && Number(ye.x) >= 0 && Number(ye.x) <= 1 && Number(ye.y) >= 0 && Number(ye.y) <= 1) {
          const Ee = ln(le);
          if (Ee != null && Ee.visible) return { item: le, geom: Ee };
        }
      }
      return null;
    }
    const d = [
      ...Xf(!1).slice().sort((b, x) => Number((x == null ? void 0 : x.z_index) || 0) - Number((b == null ? void 0 : b.z_index) || 0)).map((b) => {
        var x;
        return b.type === "strokeGroup" ? Jf(tp("paint", b.actionGroupId || b.id || "")) : b.type === "rasterObject" ? qf(ep(((x = b.item) == null ? void 0 : x.id) || b.id || "")) : b.item;
      }).filter(Boolean),
      ...V ? Mc().filter((b) => Kn(b)) : []
    ];
    for (const b of d) {
      if (Tn(b)) {
        const N = ln(b);
        if (!(N != null && N.visible)) continue;
        const E = Array.isArray(N.strokePaths) ? N.strokePaths : [];
        for (const K of E) {
          const X = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
          if (!X.length) continue;
          if (K.closed && X.length >= 3 && mi(l, X)) return { item: b, geom: N };
          const Ce = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
          for (let le = 0; le < X.length - 1; le += 1)
            if (Du(l, X[le], X[le + 1]) <= Ce * Ce) return { item: b, geom: N };
          if (X.length === 1 && Va(l, X[0]) <= Ce * Ce) return { item: b, geom: N };
        }
        continue;
      }
      if (xr(b)) {
        const N = ln(b);
        if (!(N != null && N.visible)) continue;
        if (Zf(b, N, l)) return { item: b, geom: N };
        continue;
      }
      const x = ln(b);
      if (x.visible && mi(l, x.corners))
        return { item: b, geom: x };
    }
    return null;
  }
  function Sa(l, d, m = null) {
    if (!l || !l.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (sn(m)) return vd(l, d);
    if (l.kind === "strokeGroup") {
      const b = l.corners.findIndex((N) => Va(N, d) <= 121);
      if (b >= 0) {
        const N = l.corners[b], E = N.x - l.center.x, K = N.y - l.center.y, X = E * K >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: b, cursor: X };
      }
      const x = Array.isArray(l.strokePaths) ? l.strokePaths : [];
      for (const N of x) {
        const E = Array.isArray(N == null ? void 0 : N.points) ? N.points : [];
        if (N.closed && E.length >= 3 && mi(d, E)) return { kind: "move", cursor: "default" };
        const K = Math.max(8, Number((N == null ? void 0 : N.lineWidth) || 0) * 0.5 + 6);
        for (let X = 0; X < E.length - 1; X += 1)
          if (Du(d, E[X], E[X + 1]) <= K * K) return { kind: "move", cursor: "default" };
      }
      return mi(d, l.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (l.kind === "rasterObject") {
      const b = l.corners.findIndex((x) => Va(x, d) <= 121);
      if (b >= 0) {
        const x = l.corners[b], N = x.x - l.center.x, E = x.y - l.center.y, K = N * E >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: b, cursor: K };
      }
      return mi(d, l.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    return qN(l, d, {
      edges: t === "cutout" || Kn(m),
      resize: !(Kn(m) && mo()),
      emptyCursor: u.mode === "pano" ? "grab" : "default"
    });
  }
  function qp(l, d) {
    return {
      x0: Math.min(Number((l == null ? void 0 : l.x) || 0), Number((d == null ? void 0 : d.x) || 0)),
      y0: Math.min(Number((l == null ? void 0 : l.y) || 0), Number((d == null ? void 0 : d.y) || 0)),
      x1: Math.max(Number((l == null ? void 0 : l.x) || 0), Number((d == null ? void 0 : d.x) || 0)),
      y1: Math.max(Number((l == null ? void 0 : l.y) || 0), Number((d == null ? void 0 : d.y) || 0))
    };
  }
  function Yv(l, d) {
    return !!l && !!d && Number(d.x) >= Number(l.x0) && Number(d.x) <= Number(l.x1) && Number(d.y) >= Number(l.y0) && Number(d.y) <= Number(l.y1);
  }
  function Xv(l, d) {
    if (!l || !(d != null && d.visible) || !Array.isArray(d.corners)) return !1;
    if (d.corners.some((x) => Yv(l, x))) return !0;
    const m = (Number(l.x0) + Number(l.x1)) * 0.5, b = (Number(l.y0) + Number(l.y1)) * 0.5;
    return !!mi({ x: m, y: b }, d.corners);
  }
  function It(l) {
    if (jv(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? ht("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? ht("grabbing") : u.interaction.kind === "space_pan" || u.interaction.kind === "frame_pan" ? ht("move") : u.interaction.kind === "space_orbit" || u.interaction.kind === "frame_orbit" || u.interaction.kind === "world_gizmo" || u.interaction.kind === "roll_frame" ? ht("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? ht("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? ht(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? ht("grabbing") : ht("default");
      return;
    }
    if (Bp()) {
      ht("none");
      return;
    }
    if (u.mode === "frame") {
      if (u.altModifier && !r) {
        ht(NE);
        return;
      }
      if (u.primaryTool !== "cursor") {
        ht("default");
        return;
      }
      ht("grab");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      ht("default");
      return;
    }
    if (u.gizmoAxis) {
      ht("grab");
      return;
    }
    const d = An(), m = d ? ln(d) : null, b = d ? On(d) : !1, x = b ? { kind: "none", cursor: "default" } : Sa(m, l, d);
    if (!b && x.kind !== "none") {
      ht(x.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && Xp(l)) {
      ht("default");
      return;
    }
    ht(u.mode === "pano" ? "grab" : "default");
  }
  function qv() {
    return ae;
  }
  function ut() {
    if (!Z) return;
    if (ae = !1, u.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (u.worldSelectedId || Ci() && Wr()) {
      const x = Jv();
      ae = x.visible, Jp(x);
      return;
    }
    const l = An(), d = ui();
    if (!l && d.length === 0 || u.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const m = _s(), b = sA({
      type: t,
      selected: l,
      selectedItems: d,
      selectedKind: m,
      geom: d.length > 1 ? ua(d) : ln(l),
      allLocked: oa(d),
      anyLocked: d.some((x) => On(x)),
      selectedLocked: On(l),
      activeAspect: Kn(l) && mo() ? Ko : ni(l),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: pr,
      isStickerHidden: ws,
      canRestoreSelectedToInitial: zb,
      iconSet: Ue,
      cameraShot: W,
      cameraDeletable: C,
      erpChoice: C,
      coverage: y.coverage
    });
    Jp(b);
  }
  function Jv() {
    const l = da() && !u.interaction ? ca().space : null;
    if (!(l != null && l.gizmo)) return { visible: !1 };
    const d = la(), m = l.stickers.find((E) => E.id === u.worldSelectedId), x = (m ? wf(m) : [l.gizmo.transform.position]).map((E) => ss(d, E, O.width, O.height)).filter(Boolean), N = IM(d, l.gizmo.transform.position, l.gizmo.mode, O.width, O.height);
    return lA({ corners: x, gizmoBox: N, gizmoMode: l.gizmo.mode, camera: Ci(), deletable: C && Ci() });
  }
  function Jp(l) {
    var N, E;
    if (!l.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const d = (K, X) => cA(l.anchor, K, X, O.width, O.height), m = Math.max(1, Number(((N = u.menuSize) == null ? void 0 : N.w) || 220)), b = Math.max(1, Number(((E = u.menuSize) == null ? void 0 : E.h) || 40)), x = d(m, b);
    if (!x) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    I.selectionMenu = {
      visible: !0,
      left: x.left,
      top: x.top,
      items: l.items
    }, Re.requestFrame(() => {
      if (!Z || I.selectionMenu.visible !== !0) return;
      const K = Z.getBoundingClientRect(), X = Math.round(Number((K == null ? void 0 : K.width) || 0)) || 220, Ce = Math.round(Number((K == null ? void 0 : K.height) || 0)) || 40;
      u.menuSize = { w: X, h: Ce, measured: !0 };
      const le = d(X, Ce);
      le && (I.selectionMenu.left = le.left, I.selectionMenu.top = le.top);
    });
  }
  function Fi() {
    St.timer && (clearTimeout(St.timer), St.timer = 0), St.target = null, I.tooltip.visible = !1;
  }
  function Zv(l) {
    if (!T || !l || !l.isConnected) return;
    const d = String(l.getAttribute("data-tip") || "").trim();
    if (!d) return;
    I.tooltip.text = d, I.tooltip.visible = !0;
    const m = l;
    Re.requestFrame(() => {
      var ot, rt;
      if (St.target !== m || !T || !(m != null && m.isConnected)) return;
      const b = Me.getBoundingClientRect(), x = m.getBoundingClientRect(), N = 8, E = 12, K = Math.round(Number(((ot = T.getBoundingClientRect()) == null ? void 0 : ot.width) || 0)) || 100, X = Math.round(Number(((rt = T.getBoundingClientRect()) == null ? void 0 : rt.height) || 0)) || 24, Ce = !!m.closest(".pano-floating-left"), le = !!m.closest(".pano-frame-rail"), ye = !!m.closest(".pano-paint-footer") || !!m.closest(".pano-paint-color-float");
      let Ee = "", Je = x.left - b.left + x.width * 0.5 - K * 0.5, Oe = x.top - b.top - X - E;
      if (m.closest(".pano-floating-top") && (Oe = x.bottom - b.top + E), Ce)
        Ee = "tool-rail", Je = x.right - b.left + 10, Oe = x.top - b.top + x.height * 0.5 - X * 0.5, Je = Ie(Je, N, Math.max(N, b.width - K - N)), Oe = Ie(Oe, N, Math.max(N, b.height - X - N));
      else if (le)
        Ee = "frame-rail", Je = x.left - b.left - K - 10, Oe = x.top - b.top + x.height * 0.5 - X * 0.5, Je = Ie(Je, N, Math.max(N, b.width - K - N)), Oe = Ie(Oe, N, Math.max(N, b.height - X - N));
      else if (ye) {
        Ee = "footer";
        const wt = m.closest(".pano-paint-footer"), dt = wt ? wt.getBoundingClientRect() : x;
        Je = dt.left - b.left + dt.width * 0.5 - K * 0.5, Oe = dt.bottom - b.top + 5, Je = Ie(Je, N, Math.max(N, b.width - K - N)), Oe = Math.max(N, Oe);
      }
      Je = Ie(Je, N, Math.max(N, b.width - K - N)), Oe = Math.max(N, Oe), I.tooltip.left = Je, I.tooltip.top = Oe, I.tooltip.variant = Ee, I.tooltip.visible = !0;
    });
  }
  function Qv(l, d, m = {}) {
    var N;
    if ((l == null ? void 0 : l.kind) !== "roll_frame" || !l.shot) return;
    l.accumulatedRad += A0(d, l.lastAngle), l.lastAngle = d;
    const b = C0(l.start.roll_deg, l.accumulatedRad, {
      shiftKey: m.shiftKey,
      altKey: l.altStarted ? !1 : m.altKey
    });
    l.shot.roll_deg = b, l.changed = l.changed || Math.abs(l.accumulatedRad) > 1e-9;
    const x = (((N = I.sidePanel) == null ? void 0 : N.params) || []).find((E) => E.key === "roll_deg");
    x && (x.value = b, x.displayValue = Po(b), x.fillPct = (b + 180) / 360 * 100), Ur(), Kc(l), Ge({ localOnly: !0 });
  }
  function e_(l, d, m = {}) {
    var N;
    if ((l == null ? void 0 : l.kind) !== "roll_frame" || !l.shot || !l.rollGesture) return;
    const b = ib(l.rollGesture, d, m);
    if (!b) return;
    l.rollGesture = b.gesture, l.center = b.gesture.center, l.lastAngle = b.gesture.lastAngle, l.accumulatedRad = b.gesture.accumulatedRad, l.shot.roll_deg = b.rollDeg, l.changed = l.changed || Math.abs(b.gesture.accumulatedRad) > 1e-9;
    const x = (((N = I.sidePanel) == null ? void 0 : N.params) || []).find((E) => E.key === "roll_deg");
    x && (x.value = b.rollDeg, x.displayValue = Po(b.rollDeg), x.fillPct = (b.rollDeg + 180) / 360 * 100), Ur(), Kc(l), Ge({ localOnly: !0 });
  }
  function Zp(l, d) {
    const m = di(l);
    return Math.atan2(m.y - d.y, m.x - d.x);
  }
  function Kc(l) {
    var E, K;
    if ((l == null ? void 0 : l.kind) !== "roll_frame" || !l.shot) return;
    St.timer && (clearTimeout(St.timer), St.timer = 0), St.target = null;
    const d = gr(l.shot), m = (E = O.getBoundingClientRect) == null ? void 0 : E.call(O), b = (K = Me.getBoundingClientRect) == null ? void 0 : K.call(Me);
    if (!d || !m || !b || O.width <= 0 || O.height <= 0) return;
    const x = m.width / O.width, N = m.height / O.height;
    I.tooltip.text = `${Po(l.shot.roll_deg)}°`, I.tooltip.left = m.left - b.left + (d.x + d.w * 0.5) * x, I.tooltip.top = m.top - b.top + (d.y + d.h * 0.5) * N + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  function t_(l) {
    var N;
    if (l.button !== 0 || r || u.mode !== "frame") return;
    const d = st();
    if (!d || d.locked === !0) return;
    const m = gr(d);
    if (!m) return;
    const b = { x: m.x + m.w * 0.5, y: m.y + m.h * 0.5 }, x = Zp(l, b);
    u.interaction = {
      kind: "roll_frame",
      shot: d,
      center: b,
      lastAngle: x,
      accumulatedRad: 0,
      start: { roll_deg: Number(d.roll_deg ?? d.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (N = Y.setPointerCapture) == null || N.call(Y, l.pointerId), l.preventDefault(), Ur(), Kc(u.interaction), Ge({ localOnly: !0 });
  }
  Y == null || Y.addEventListener("pointerdown", t_);
  function n_(l) {
    var d;
    ((d = u.interaction) == null ? void 0 : d.kind) !== "roll_frame" || u.interaction.source !== "knob" || Qv(
      u.interaction,
      Zp(l, u.interaction.center),
      l
    );
  }
  Y == null || Y.addEventListener("pointermove", n_);
  function r_() {
    const l = u.interaction;
    (l == null ? void 0 : l.kind) !== "roll_frame" || l.source !== "knob" || (l.changed && (bt(), At(), it()), u.interaction = null, Fi(), Br(), Ur(), Ge());
  }
  Y == null || Y.addEventListener("pointerup", r_), Y == null || Y.addEventListener("pointercancel", () => _a()), Y == null || Y.addEventListener("lostpointercapture", () => {
    var l;
    ((l = u.interaction) == null ? void 0 : l.source) === "knob" && _a();
  });
  function i_(l) {
    const d = u.mode === "frame" && !r ? st() : null;
    !d || d.locked === !0 || Math.abs(Number(d.roll_deg ?? d.rot_deg ?? 0)) <= 1e-9 || (d.roll_deg = 0, bt(), At(), it(), Ur(), Ge(), l.preventDefault());
  }
  Y == null || Y.addEventListener("dblclick", i_);
  function o_(l) {
    ne.selection && (ne.selection = null, Nr());
    const d = di(l);
    A = d, Fs(d, !0), xc(), Ot.state.inertia.active = !1, Ot.state.inertia.vx = 0, Ot.state.inertia.vy = 0;
    const m = Wr(), b = Gc(), x = m || b ? uP(Oc(), l) : null;
    if (b && x) {
      l.preventDefault(), x === "look" ? Wp(d, l.pointerId) : Dv(x, d, l.pointerId);
      return;
    }
    if (x === "look") {
      l.preventDefault();
      const le = Ms(l);
      u.interaction = { kind: "view", last: le, lastTs: performance.now() }, Ot.startDrag(le.x, le.y, l.pointerId, performance.now()), It(d), O.setPointerCapture(l.pointerId);
      return;
    }
    if (x) {
      l.preventDefault(), ap(x, d, l.pointerId);
      return;
    }
    if ((m || b) && l.button !== 0) {
      l.preventDefault();
      return;
    }
    if (l.button === 1) {
      if (l.preventDefault(), u.mode === "frame") {
        const le = st();
        if (!le || r || le.locked === !0) return;
        u.interaction = {
          kind: "pan_frame",
          shot: le,
          last: d,
          start: {
            yaw_deg: Number(le.yaw_deg || 0),
            pitch_deg: Number(le.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const le = u.mode === "unwrap" ? d : Ms(l);
        u.interaction = { kind: "view", last: le, lastTs: performance.now() }, Ot.startDrag(le.x, le.y, l.pointerId, performance.now());
      }
      It(d), O.setPointerCapture(l.pointerId);
      return;
    }
    if (l.button !== 0) return;
    if (u.mode === "frame" && (l.altKey || l.shiftKey) && !r) {
      const le = st(), ye = gr(le);
      if (!le || le.locked === !0 || !ye) return;
      const Ee = rb({
        frame: ye,
        point: d,
        startRollDeg: Number(le.roll_deg ?? le.rot_deg ?? 0),
        shiftKey: l.shiftKey,
        altKey: l.altKey,
        allowAlt: !0
      });
      if (!Ee) return;
      u.interaction = {
        kind: "roll_frame",
        shot: le,
        center: Ee.center,
        lastAngle: Ee.lastAngle,
        accumulatedRad: Ee.accumulatedRad,
        rollGesture: Ee,
        start: { roll_deg: Number(le.roll_deg ?? le.rot_deg ?? 0) },
        changed: !1,
        altStarted: Ee.source === "alt",
        source: Ee.source
      }, O.setPointerCapture(l.pointerId), l.preventDefault(), Ur(), Ge({ localOnly: !0 });
      return;
    }
    if (u.mode === "frame" && u.primaryTool === "cursor") {
      Wp(d, l.pointerId), l.preventDefault();
      return;
    }
    if (r) {
      u.mode === "pano" && th(l, d);
      return;
    }
    if (ie && !ie.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (Dp() || Hc())) {
      if (!u1()) return;
      mn();
      const le = u.primaryTool === "mask" ? "mask" : "paint", ye = u.primaryTool === "mask" ? u.maskTool : u.paintTool, Ee = u.mode === "frame" && Hc() ? st() : null, Je = { kind: "ERP_GLOBAL" }, Oe = Ee ? hr(d, Ee, performance.now()) : Mr(d, performance.now());
      if (!Oe) {
        It(d);
        return;
      }
      u.interaction = {
        kind: ye === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: le,
        _livePreviewToken: To("live"),
        stroke: ye === "lasso_fill" ? Yp(le, ye, [Oe], Je) : Up(le, ye, [Oe], Je)
      }, ho();
      const ot = er(u.interaction);
      if (ot)
        if (u.paintEngine.beginStroke(u.interaction.stroke, ot), u.interaction.kind === "paint_stroke") {
          const rt = u.paintEngine.ensureTarget(ot), wt = Number((Oe == null ? void 0 : Oe.u) ?? (Oe == null ? void 0 : Oe.x) ?? 0), dt = Number((Oe == null ? void 0 : Oe.v) ?? (Oe == null ? void 0 : Oe.y) ?? 0);
          u.paintEngine.appendStrokePoint(rt, wt, dt, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, ot);
      It(d), O.setPointerCapture(l.pointerId), Ge();
      return;
    }
    const N = ui(), E = An(), K = N.length > 1 ? ua(N) : E ? ln(E) : null;
    if (u.primaryTool === "cursor" && (l.ctrlKey || l.metaKey)) {
      u.interaction = { kind: "marquee_select", start: d, current: d }, It(d), O.setPointerCapture(l.pointerId), Ge({ localOnly: !0, reason: Pt.OVERLAY });
      return;
    }
    if (u.primaryTool === "cursor" && gs() && Wr() && R1(l, d) || u.primaryTool === "cursor" && S && da() && a_(l, d)) return;
    if (N.length > 1 && (K != null && K.visible)) {
      if ((N.some((ye) => On(ye)) ? { kind: "none" } : Sa(K, d)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: N.map((ye) => ye),
          offset: { x: d.x - K.center.x, y: d.y - K.center.y },
          startCenter: { x: K.center.x, y: K.center.y },
          stickerSnapshots: N.filter((ye) => sn(ye)).map((ye) => ({
            id: String(ye.id || ""),
            yaw_deg: Number(yn(ye).yaw_deg || 0),
            pitch_deg: Number(yn(ye).pitch_deg || 0),
            center: (() => {
              var Je, Oe;
              const Ee = ln(ye);
              return Ee != null && Ee.visible ? { x: Number(((Je = Ee.center) == null ? void 0 : Je.x) || 0), y: Number(((Oe = Ee.center) == null ? void 0 : Oe.y) || 0) } : { x: d.x, y: d.y };
            })()
          })),
          strokeSnapshots: N.filter((ye) => Tn(ye)).map((ye) => ({
            id: String(ye.actionGroupId || ye.id || ""),
            layerKind: String(ye.layerKind || "paint"),
            snapshot: vn(fo(ye.actionGroupId, ye.layerKind)),
            frameSnapshot: vn(co(ye.actionGroupId, ye.layerKind)),
            center: (() => {
              var Je, Oe;
              const Ee = ln(ye);
              return Ee != null && Ee.visible ? { x: Number(((Je = Ee.center) == null ? void 0 : Je.x) || 0), y: Number(((Oe = Ee.center) == null ? void 0 : Oe.y) || 0) } : { x: d.x, y: d.y };
            })(),
            centerUv: o1(ye.actionGroupId, ye.layerKind)
          })),
          rasterSnapshots: N.filter((ye) => xr(ye)).map((ye) => ({
            id: Ii(ye.rasterObjectId || ye.id || ""),
            snapshot: vn(Gr().find((Ee) => String((Ee == null ? void 0 : Ee.id) || "") === Ii(ye.rasterObjectId || ye.id || ""))),
            center: (() => {
              var Je, Oe;
              const Ee = ln(ye);
              return Ee != null && Ee.visible ? { x: Number(((Je = Ee.center) == null ? void 0 : Je.x) || 0), y: Number(((Oe = Ee.center) == null ? void 0 : Oe.y) || 0) } : { x: d.x, y: d.y };
            })(),
            centerUv: Zb(ye)
          }))
        }, It(d), O.setPointerCapture(l.pointerId);
        return;
      }
    } else if (E && (K != null && K.visible)) {
      const le = On(E) ? { kind: "none" } : Sa(K, d, E);
      if (le.kind === "scale") {
        u.interaction = Tn(E) ? {
          kind: "scale_stroke_group",
          item: E,
          center: K.center,
          startDist: Math.max(1, Math.hypot(d.x - K.center.x, d.y - K.center.y)),
          snapshot: vn(fo(E.actionGroupId, E.layerKind)),
          frameSnapshot: vn(co(E.actionGroupId, E.layerKind)),
          cursor: le.cursor
        } : xr(E) ? {
          kind: "scale_raster_object",
          item: E,
          center: K.center,
          startDist: Math.max(1, Math.hypot(d.x - K.center.x, d.y - K.center.y)),
          snapshot: vn(Gr().find((ye) => String((ye == null ? void 0 : ye.id) || "") === Ii(E.rasterObjectId || E.id || ""))),
          cursor: le.cursor
        } : {
          kind: "scale",
          item: E,
          center: K.center,
          startDist: Math.max(1, Math.hypot(d.x - K.center.x, d.y - K.center.y)),
          startHFOV: Number(yn(E).hFOV_deg || 20),
          startVFOV: Number(yn(E).vFOV_deg || 20),
          cursor: le.cursor
        }, It(d), O.setPointerCapture(l.pointerId);
        return;
      }
      if (le.kind === "scale_x" || le.kind === "scale_y") {
        u.interaction = {
          kind: le.kind,
          item: E,
          center: K.center,
          startDist: Math.max(1, Math.hypot(d.x - K.center.x, d.y - K.center.y)),
          startHFOV: Number(yn(E).hFOV_deg || 20),
          startVFOV: Number(yn(E).vFOV_deg || 20),
          cursor: le.cursor,
          edge: le.edge
        }, It(d), O.setPointerCapture(l.pointerId);
        return;
      }
      if (le.kind === "rotate") {
        u.interaction = Tn(E) ? {
          kind: "rotate_stroke_group",
          item: E,
          center: K.center,
          startAng: Math.atan2(d.y - K.center.y, d.x - K.center.x),
          snapshot: vn(fo(E.actionGroupId, E.layerKind)),
          frameSnapshot: vn(co(E.actionGroupId, E.layerKind))
        } : {
          kind: "rotate",
          item: E,
          center: K.center,
          startRot: Number(yn(E).rot_deg || yn(E).roll_deg || 0),
          startAng: Math.atan2(d.y - K.center.y, d.x - K.center.x)
        }, It(d), O.setPointerCapture(l.pointerId);
        return;
      }
      if (le.kind === "move") {
        if (Tn(E)) {
          const ye = u.mode === "frame" ? (() => {
            const Ee = st();
            return Ee ? hr(d, Ee, performance.now()) : null;
          })() : Mr(d, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: E,
            startUv: ye,
            snapshot: vn(fo(E.actionGroupId, E.layerKind)),
            frameSnapshot: vn(co(E.actionGroupId, E.layerKind))
          }, It(d), O.setPointerCapture(l.pointerId);
          return;
        }
        if (xr(E)) {
          const ye = u.mode === "frame" ? (() => {
            const Ee = st();
            return Ee ? hr(d, Ee, performance.now()) : null;
          })() : Mr(d, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: E,
            startUv: ye,
            snapshot: vn(Gr().find((Ee) => String((Ee == null ? void 0 : Ee.id) || "") === Ii(E.rasterObjectId || E.id || "")))
          }, It(d), O.setPointerCapture(l.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: E,
          offset: { x: d.x - K.center.x, y: d.y - K.center.y }
        }, It(d), O.setPointerCapture(l.pointerId);
        return;
      }
    }
    const X = Xp(d);
    if (X) {
      const le = u.selectedId !== X.item.id;
      if (le && u.selectedId && (bt(), Un()), Bn(X.item), V && le && (u.cutoutAspectOpen = !1), le && it(), ut(), Ge(), On(X.item)) {
        It(d);
        return;
      }
      u.interaction = {
        kind: Tn(X.item) ? "move_stroke_group" : xr(X.item) ? "move_raster_object" : "move",
        item: X.item,
        offset: { x: d.x - X.geom.center.x, y: d.y - X.geom.center.y },
        startUv: Tn(X.item) || xr(X.item) ? u.mode === "frame" ? (() => {
          const ye = st();
          return ye ? hr(d, ye, performance.now()) : null;
        })() : Mr(d, performance.now()) : null,
        snapshot: Tn(X.item) ? vn(fo(X.item.actionGroupId, X.item.layerKind)) : xr(X.item) ? vn(Gr().find((ye) => String((ye == null ? void 0 : ye.id) || "") === Ii(X.item.rasterObjectId || X.item.id || ""))) : null,
        frameSnapshot: Tn(X.item) ? vn(co(X.item.actionGroupId, X.item.layerKind)) : null
      }, It(d), O.setPointerCapture(l.pointerId);
      return;
    }
    const Ce = !!u.selectedId;
    Ce && (bt(), Un()), sa(), Ce && it(), ut(), Ge(), u.mode === "pano" && th(l, d);
  }
  O.onpointerdown = o_;
  function Di(l, d) {
    return We.gizmoPointer(l, la(), d.x, d.y, O.width, O.height);
  }
  function a_(l, d) {
    var K;
    const m = (K = ca().space) == null ? void 0 : K.gizmo;
    if (m && Di("hover", d) !== null && Di("down", d))
      return u.interaction = {
        kind: "world_gizmo",
        id: u.worldSelectedId,
        mode: m.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: m.transform,
        base: ro(fa(), u.frame),
        changed: !1
      }, O.setPointerCapture(l.pointerId), It(d), !0;
    const b = ui(), x = An(), N = b.length > 1 ? b.some((X) => On(X)) ? "none" : Sa(ua(b), d).kind : x && !On(x) ? Sa(ln(x), d, x).kind : "none";
    if (N !== "none" && N !== "move") return !1;
    const E = We.pickSticker(la(), d.x, d.y, O.width, O.height);
    return y.stickers.some((X) => X.id === E && X.placement === "world") ? (u.worldSelectedId !== E && (u.selectedId && (bt(), Un()), Ic(E), it(), ut(), Oi(), Ge()), u.interaction = { kind: "world_select" }, O.setPointerCapture(l.pointerId), !0) : !1;
  }
  function Qp(l) {
    var b;
    const m = !!(u.worldSelectedId || Ci()) && u.primaryTool === "cursor" && da() && !!((b = ca().space) != null && b.gizmo) ? Di("hover", l) : null;
    m !== u.gizmoAxis && (u.gizmoAxis = m, ge.backgroundDirty = !0, Ge({ localOnly: !0, reason: Pt.VIEW }));
  }
  function s_(l, d) {
    const m = Di("move", d);
    if (m && l.camera) {
      for (const [x, N] of Object.entries(Nm(l.mode, l.base, l.start, m))) xn(y.camera, x, u.frame, N);
      nr(), l.changed = !0, Ke.request("sidePanel"), Ge({ localOnly: !0 });
      return;
    }
    const b = y.stickers.find((x) => x.id === l.id);
    !m || !b || (eM(b, u.frame, Nm(l.mode, l.base, l.start, m)), l.changed = !0, hn(), Ke.request("sidePanel"), Ge({ localOnly: !0 }));
  }
  function eh(l) {
    u.interaction = null, u.gizmoAxis = null, l.kind === "world_gizmo" && (Di("up", u.pointerPos), ge.backgroundDirty = !0, l.changed && (bt(), At(), it())), It(u.pointerPos), Ge();
  }
  function th(l, d) {
    if (Wr()) {
      const b = Oc().emptyLeft;
      b && ap(b, d, l.pointerId);
      return;
    }
    const m = Ms(l);
    u.interaction = { kind: "view", last: m, lastTs: performance.now() }, Ot.startDrag(m.x, m.y, l.pointerId, performance.now()), It(d), O.setPointerCapture(l.pointerId);
  }
  function l_(l, d) {
    if (!v || !tr.playing || (tr.stop(), l.kind === "frame_pan")) return;
    if (l.kind === "frame_orbit") {
      const x = ba();
      x && (l.pivot = jp(x, va(x), d));
      return;
    }
    if (l.kind === "world_gizmo") {
      const x = y.stickers.find((N) => N.id === l.id);
      l.camera ? l.base = kc() : x && (l.base = ro(x, u.frame));
      return;
    }
    if (l.kind === "move_multi") {
      const x = ua(l.items);
      if (!(x != null && x.visible)) return;
      l.offset = { x: d.x - x.center.x, y: d.y - x.center.y }, l.startCenter = { x: x.center.x, y: x.center.y };
      for (const N of l.stickerSnapshots) {
        const E = l.items.find((X) => String((X == null ? void 0 : X.id) || "") === N.id), K = E ? ln(E) : null;
        K != null && K.visible && (N.yaw_deg = Number(yn(E).yaw_deg || 0), N.pitch_deg = Number(yn(E).pitch_deg || 0), N.center = { x: K.center.x, y: K.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(l.kind)) return;
    const m = ln(l.item);
    if (!(m != null && m.visible)) return;
    const b = yn(l.item);
    if (l.kind === "move") {
      l.offset = { x: d.x - m.center.x, y: d.y - m.center.y };
      return;
    }
    if (l.center = m.center, l.kind === "rotate") {
      l.startRot = Number(b.rot_deg || b.roll_deg || 0), l.startAng = Math.atan2(d.y - m.center.y, d.x - m.center.x);
      return;
    }
    l.startDist = Math.max(1, Math.hypot(d.x - m.center.x, d.y - m.center.y)), l.startHFOV = Number(b.hFOV_deg || 20), l.startVFOV = Number(b.vFOV_deg || 20);
  }
  function c_(l) {
    var b, x, N, E, K, X, Ce, le, ye, Ee, Je, Oe, ot, rt, wt, dt, _t, Tt, bn, Li, Ri, Ze;
    const d = di(l);
    if (Fs(d, !0), !u.interaction) {
      Qp(d), It(d);
      return;
    }
    It(d);
    const m = u.interaction;
    if (A && (d.x !== A.x || d.y !== A.y)) {
      const Be = A;
      A = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(m.kind) || l_(m, Be);
    }
    if (m.kind !== "world_select") {
      if (m.kind === "world_gizmo") {
        s_(m, d);
        return;
      }
      if (m.kind === "paint_stroke") {
        const Be = typeof l.getCoalescedEvents == "function" ? l.getCoalescedEvents() : [l];
        let Qe = !1;
        Be.forEach((lt) => {
          const at = di(lt);
          if (u.mode === "frame") {
            const Ct = st(), Mt = Ct ? gr(Ct) : null;
            if (Mt) {
              const Kt = (at.x - Mt.x) / Math.max(1, Mt.w), Nt = (at.y - Mt.y) / Math.max(1, Mt.h);
              if (!(Kt >= 0 && Kt <= 1 && Nt >= 0 && Nt <= 1)) {
                m._outOfFrame = !0;
                return;
              }
              m._outOfFrame && (m._outOfFrame = !1, Bv(m));
            }
          }
          Gv(m, at, performance.now()) && (Qe = !0);
        }), Qe && Ge({ localOnly: !0, reason: Pt.PAINT });
        return;
      }
      if (m.kind === "paint_lasso_fill") {
        const Be = typeof l.getCoalescedEvents == "function" ? l.getCoalescedEvents() : [l];
        let Qe = !1;
        if (Be.forEach((lt) => {
          const at = di(lt);
          if (u.mode === "frame") {
            const Ct = st(), Mt = Ct ? gr(Ct) : null;
            if (Mt) {
              const Kt = (at.x - Mt.x) / Math.max(1, Mt.w), Nt = (at.y - Mt.y) / Math.max(1, Mt.h);
              if (!(Kt >= 0 && Kt <= 1 && Nt >= 0 && Nt <= 1)) {
                m._outOfFrame = !0;
                return;
              }
              m._outOfFrame && (m._outOfFrame = !1, Uv(m));
            }
          }
          Wv(m, at, performance.now()) && (Qe = !0);
        }), Qe) {
          const lt = er(m);
          lt && u.paintEngine.updateActiveStroke(m.stroke, lt), Ge({ localOnly: !0, reason: Pt.PAINT });
        }
        return;
      }
      if (m.kind === "view") {
        const Be = performance.now(), Qe = u.mode === "unwrap" ? d : Ms(l);
        Ot.moveDrag(Qe.x, Qe.y, u.mode === "unwrap" ? "unwrap" : "pano", Be), m.lastTs = Be, m.last = Qe, Ge({ localOnly: !0, reason: Pt.VIEW });
        return;
      }
      if (m.kind === "frame_pan" || m.kind === "frame_orbit") {
        Lv(m, d);
        return;
      }
      if (m.kind === "space_pan" || m.kind === "space_orbit") {
        const Be = fi();
        M1(m.kind === "space_pan" ? xm(Be, d.x - m.last.x, d.y - m.last.y, O.width, O.height, m.depth) : wm(Be, d.x - m.last.x, d.y - m.last.y, O.height, m.pivot)), m.last = d;
        return;
      }
      if (m.kind === "pan_frame") {
        const Be = Ts(m.shot);
        if (!Be || !m.shot) return;
        const Qe = d.x - m.last.x, lt = d.y - m.last.y, at = ob(m.shot, {
          dx: Qe,
          dy: lt,
          focalPx: Be.focalPx,
          invertX: ((b = y.ui_settings) == null ? void 0 : b.invert_view_x) === !0,
          invertY: ((x = y.ui_settings) == null ? void 0 : x.invert_view_y) === !0
        });
        m.shot.yaw_deg = at.yaw_deg, m.shot.pitch_deg = at.pitch_deg, m.changed = m.changed || Math.abs(Qe) > 0 || Math.abs(lt) > 0, m.last = d, Ge({ localOnly: !0 });
        return;
      }
      if (m.kind === "roll_frame") {
        if (m.source === "knob") return;
        e_(m, d, l);
        return;
      }
      if (m.kind === "move") {
        const Be = d.x - m.offset.x, Qe = d.y - m.offset.y;
        if (u.mode === "frame" && V) {
          const lt = st(), at = gr(lt);
          if (!lt || !at) return;
          const Ct = {
            x: Ie((Be - at.x) / Math.max(1, at.w), 0, 1),
            y: Ie((Qe - at.y) / Math.max(1, at.h), 0, 1)
          }, Mt = Bf(lt, Ct);
          if (!Mt) return;
          const Kt = Zs(Mt);
          mr(m.item, { yaw_deg: Kt.yaw, pitch_deg: Kt.pitch });
        } else if (u.mode === "unwrap") {
          const lt = Ss(), at = Ie((Be - lt.x) / Math.max(lt.w, 1), 0, 1), Ct = Ie((Qe - lt.y) / Math.max(lt.h, 1), 0, 1);
          mr(m.item, { yaw_deg: Bt(at * 360 - 180), pitch_deg: Ie(90 - Ct * 180, -90, 90) });
        } else {
          const lt = op(Be, Qe), at = Zs(lt);
          mr(m.item, { yaw_deg: at.yaw, pitch_deg: at.pitch });
        }
        sn(m.item) && hn(), Ge({ localOnly: !0 });
        return;
      }
      if (m.kind === "move_stroke_group") {
        const Be = u.mode === "frame" ? (() => {
          const at = st();
          return at ? hr(d, at, performance.now()) : null;
        })() : Mr(d, performance.now());
        if (!Be || !m.startUv) return;
        const Qe = Ns(Number(Be.u || 0), Number(m.startUv.u || 0)), lt = Number(Be.v || 0) - Number(m.startUv.v || 0);
        ia((N = m.item) == null ? void 0 : N.actionGroupId, Qe, lt, m.snapshot, (E = m.item) == null ? void 0 : E.layerKind, m.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), Ge({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (m.kind === "move_raster_object") {
        const Be = u.mode === "frame" ? (() => {
          const at = st();
          return at ? hr(d, at, performance.now()) : null;
        })() : Mr(d, performance.now());
        if (!Be || !m.startUv) return;
        const Qe = Ns(Number(Be.u || 0), Number(m.startUv.u || 0)), lt = Number(Be.v || 0) - Number(m.startUv.v || 0);
        rn(((K = m.item) == null ? void 0 : K.rasterObjectId) || ((X = m.item) == null ? void 0 : X.id) || "", Qe, lt, m.snapshot) && (go(), Ge({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (m.kind === "scale_raster_object") {
        const Qe = Math.max(1, Math.hypot(d.x - m.center.x, d.y - m.center.y)) / Math.max(1, Number(m.startDist || 1));
        Mi(((Ce = m.item) == null ? void 0 : Ce.rasterObjectId) || ((le = m.item) == null ? void 0 : le.id) || "", Qe, m.snapshot) && (go(), Ge({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (m.kind === "move_multi") {
        const Be = d.x - Number(((ye = m.offset) == null ? void 0 : ye.x) || 0), Qe = d.y - Number(((Ee = m.offset) == null ? void 0 : Ee.y) || 0);
        let lt = !1, at = !1, Ct = !1;
        const Mt = Be - Number(((Je = m.startCenter) == null ? void 0 : Je.x) || Be), Kt = Qe - Number(((Oe = m.startCenter) == null ? void 0 : Oe.y) || Qe);
        for (const Nt of Array.isArray(m.stickerSnapshots) ? m.stickerSnapshots : []) {
          const on = (t === "cutout" ? Yb() : Ai()).find((Jt) => String((Jt == null ? void 0 : Jt.id) || "") === String(Nt.id || ""));
          if (!on || !sn(on)) continue;
          const Dn = {
            x: Number(((ot = Nt.center) == null ? void 0 : ot.x) || 0) + Mt,
            y: Number(((rt = Nt.center) == null ? void 0 : rt.y) || 0) + Kt
          };
          if (u.mode === "frame" && V) {
            const Jt = st(), cn = gr(Jt);
            if (!Jt || !cn) continue;
            const Vi = {
              x: Ie((Dn.x - cn.x) / Math.max(1, cn.w), 0, 1),
              y: Ie((Dn.y - cn.y) / Math.max(1, cn.h), 0, 1)
            }, xh = Bf(Jt, Vi);
            if (!xh) continue;
            const kh = Zs(xh);
            mr(on, { yaw_deg: kh.yaw, pitch_deg: kh.pitch });
          } else if (u.mode === "unwrap") {
            const Jt = Ss(), cn = Ie((Dn.x - Jt.x) / Math.max(Jt.w, 1), 0, 1), Vi = Ie((Dn.y - Jt.y) / Math.max(Jt.h, 1), 0, 1);
            mr(on, { yaw_deg: Bt(cn * 360 - 180), pitch_deg: Ie(90 - Vi * 180, -90, 90) });
          } else {
            const Jt = op(Dn.x, Dn.y), cn = Zs(Jt);
            mr(on, { yaw_deg: cn.yaw, pitch_deg: cn.pitch });
          }
          lt = !0;
        }
        for (const Nt of Array.isArray(m.strokeSnapshots) ? m.strokeSnapshots : []) {
          const on = {
            x: Number(((wt = Nt.center) == null ? void 0 : wt.x) || 0) + Mt,
            y: Number(((dt = Nt.center) == null ? void 0 : dt.y) || 0) + Kt
          }, Dn = u.mode === "frame" ? (() => {
            const cn = st();
            return cn ? hr(on, cn, performance.now()) : null;
          })() : Mr(on, performance.now()), Jt = Nt.centerUv || null;
          if (Dn && Jt) {
            const cn = Ns(Number(Dn.u || 0), Number(Jt.u || 0)), Vi = Number(Dn.v || 0) - Number(Jt.v || 0);
            ia(Nt.id, cn, Vi, Nt.snapshot, Nt.layerKind, Nt.frameSnapshot) && (lt = !0, at = !0);
          }
        }
        for (const Nt of Array.isArray(m.rasterSnapshots) ? m.rasterSnapshots : []) {
          const on = {
            x: Number(((_t = Nt.center) == null ? void 0 : _t.x) || 0) + Mt,
            y: Number(((Tt = Nt.center) == null ? void 0 : Tt.y) || 0) + Kt
          }, Dn = u.mode === "frame" ? (() => {
            const cn = st();
            return cn ? hr(on, cn, performance.now()) : null;
          })() : Mr(on, performance.now()), Jt = Nt.centerUv || null;
          if (Dn && Jt) {
            const cn = Ns(Number(Dn.u || 0), Number(Jt.u || 0)), Vi = Number(Dn.v || 0) - Number(Jt.v || 0);
            rn(Nt.id, cn, Vi, Nt.snapshot) && (lt = !0, Ct = !0);
          }
        }
        lt && (at ? kr({ rebuildPaintEngine: !1 }) : Ct ? go() : hn(), Ge({ localOnly: !0 }));
        return;
      }
      if (m.kind === "scale_stroke_group") {
        const Qe = Math.max(1, Math.hypot(d.x - m.center.x, d.y - m.center.y)) / Math.max(1, Number(m.startDist || 1));
        Pn((bn = m.item) == null ? void 0 : bn.actionGroupId, Qe, 0, m.snapshot, (Li = m.item) == null ? void 0 : Li.layerKind, m.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), Ge({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (m.kind === "rotate_stroke_group") {
        let Be = (Math.atan2(d.y - m.center.y, d.x - m.center.x) - Number(m.startAng || 0)) * Ji;
        l.shiftKey && (Be = Math.round(Be / 45) * 45), Pn((Ri = m.item) == null ? void 0 : Ri.actionGroupId, 1, Be, m.snapshot, (Ze = m.item) == null ? void 0 : Ze.layerKind, m.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), Ge({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (m.kind === "marquee_select") {
        m.current = d, Ge({ localOnly: !0, reason: Pt.OVERLAY });
        return;
      }
      if (m.kind === "scale") {
        const Qe = Math.max(1, Math.hypot(d.x - m.center.x, d.y - m.center.y)) / m.startDist;
        mr(m.item, { hFOV_deg: Ie(m.startHFOV * Qe, 1, 179), vFOV_deg: Ie(m.startVFOV * Qe, 1, 179) }), Kr(m.item) || (m.item.aspect_id = Xi(m.item)), sn(m.item) && hn(), Ge({ localOnly: !0 });
        return;
      }
      if (m.kind === "scale_x") {
        const Qe = Math.max(1, Math.hypot(d.x - m.center.x, d.y - m.center.y)) / m.startDist;
        mr(m.item, { hFOV_deg: Ie(m.startHFOV * Qe, 1, 179) }), Kr(m.item) || (m.item.aspect_id = Xi(m.item)), sn(m.item) && hn(), Ge({ localOnly: !0 });
        return;
      }
      if (m.kind === "scale_y") {
        const Qe = Math.max(1, Math.hypot(d.x - m.center.x, d.y - m.center.y)) / m.startDist;
        mr(m.item, { vFOV_deg: Ie(m.startVFOV * Qe, 1, 179) }), Kr(m.item) || (m.item.aspect_id = Xi(m.item)), sn(m.item) && hn(), Ge({ localOnly: !0 });
        return;
      }
      if (m.kind === "rotate") {
        let Qe = (Math.atan2(d.y - m.center.y, d.x - m.center.x) - m.startAng) * Ji, lt = m.startRot - Qe;
        l.shiftKey && (lt = Math.round(lt / 45) * 45), mr(m.item, { [sn(m.item) ? "rot_deg" : "roll_deg"]: lt }), sn(m.item) && hn(), Ge({ localOnly: !0 });
      }
    }
  }
  O.onpointermove = c_;
  function u_() {
    var d, m, b, x, N, E, K;
    const l = u.interaction;
    if (!((l == null ? void 0 : l.kind) === "roll_frame" && l.source === "knob")) {
      if ((l == null ? void 0 : l.kind) === "space_pan" || (l == null ? void 0 : l.kind) === "space_orbit") {
        u.interaction = null, It(u.pointerPos), ut();
        return;
      }
      if ((l == null ? void 0 : l.kind) === "world_select" || (l == null ? void 0 : l.kind) === "world_gizmo") {
        eh(l);
        return;
      }
      if (((d = u.interaction) == null ? void 0 : d.kind) === "paint_stroke" || ((m = u.interaction) == null ? void 0 : m.kind) === "paint_lasso_fill") {
        ho();
        const X = Wc(u.interaction), Ce = !!u.interaction._hasCommittedSegments;
        if (X || Ce) {
          kr();
          const le = String(((b = u.interaction.stroke) == null ? void 0 : b.actionGroupId) || "").trim();
          if (le) {
            const Ee = uo().find((Je) => String((Je == null ? void 0 : Je.actionGroupId) || "") === le);
            Ee && (Ee.frame = null);
          }
          const ye = er(u.interaction);
          ye && (X ? String(((x = u.interaction.stroke) == null ? void 0 : x.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(ye), y1()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, ye) : u.paintEngine.cancelActiveStroke(ye)), bt(), Un(), it(), ut(), e.setDirtyCanvas(!0, !0), Ge();
        } else {
          const le = er(u.interaction);
          le && u.paintEngine.cancelActiveStroke(le);
        }
      } else if (((N = u.interaction) == null ? void 0 : N.kind) === "marquee_select") {
        const X = qp(u.interaction.start, u.interaction.current), le = [
          ...t === "cutout" ? Mc().filter((ye) => !Kn(ye)) : [...Ai()],
          ...e1(),
          ...Qb()
        ].filter((ye) => Xv(X, ln(ye)));
        x1(le, ((E = le[le.length - 1]) == null ? void 0 : E.id) || null), V && le.length && (u.cutoutAspectOpen = !1), it(), ut(), Ge();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((K = u.interaction) == null ? void 0 : K.kind))
        u.interaction.changed && (bt(), At(), it());
      else if (u.interaction && u.interaction.kind !== "view") {
        let X = !1;
        (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (X = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (X = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (X = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (X = !0), X && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? kr({ rebuildPaintEngine: !0 }) : go()), bt(), Un(), e.setDirtyCanvas(!0, !0), _o(), ut(), Ge();
      }
      u.interaction = null, (l == null ? void 0 : l.kind) === "roll_frame" && Fi(), ho(), l && l.kind === "view" && ha(() => Ot.endDrag(performance.now())), Br(), ut(), It(u.pointerPos), Ge();
    }
  }
  O.onpointerup = u_;
  function d_() {
    var l, d, m, b, x;
    if (!_a()) {
      if (((l = u.interaction) == null ? void 0 : l.kind) === "world_select" || ((d = u.interaction) == null ? void 0 : d.kind) === "world_gizmo") {
        eh(u.interaction);
        return;
      }
      if (((m = u.interaction) == null ? void 0 : m.kind) === "view" && ha(() => Ot.endDrag(performance.now())), ((b = u.interaction) == null ? void 0 : b.kind) === "paint_stroke" || ((x = u.interaction) == null ? void 0 : x.kind) === "paint_lasso_fill") {
        ho();
        const N = er(u.interaction);
        N && u.paintEngine.cancelActiveStroke(N);
      }
      u.interaction = null, ho(), Br(), It(u.pointerPos), Ge({ localOnly: !0 });
    }
  }
  O.onpointercancel = d_, O.onlostpointercapture = () => {
    _a();
  }, O.onauxclick = (l) => {
    l.button === 1 && l.preventDefault();
  }, O.oncontextmenu = (l) => {
    (Wr() || Gc()) && dP(Oc(), 2) && l.preventDefault();
  };
  function f_(l) {
    const d = di(l), m = Fs(d, !0);
    u.interaction || (It(d), m && u.mode === "frame" && u.primaryTool === "cursor" && Ge({ localOnly: !0, reason: Pt.OVERLAY }));
  }
  O.onmousemove = f_, O.onpointerleave = () => {
    u.interaction || Qp({ x: -1e6, y: -1e6 });
  }, O.onmouseleave = () => {
    Fs(u.pointerPos, !1), It(u.pointerPos), u.mode === "frame" && u.primaryTool === "cursor" && Ge({ localOnly: !0, reason: Pt.OVERLAY });
  };
  function p_(l) {
    if (u.mode === "frame") {
      const d = di(l), m = Ol(l);
      m && mn(), m && Gc() ? Rv(d, -m) : m && Fv(d, m) && Ge({ localOnly: !0 }), l.preventDefault();
      return;
    }
    if (u.mode === "pano") {
      if (xc(), Wr()) {
        const d = Ol(l);
        d && T1(di(l), -d);
      } else Ot.applyWheelEvent(l) && Ge({ localOnly: !0, reason: Pt.VIEW });
      l.preventDefault();
    }
  }
  O.onwheel = p_;
  function h_(l) {
    t !== "stickers" && t !== "cutout" || r || (l.preventDefault(), Ei(!0));
  }
  O.ondragover = h_;
  function m_(l) {
    var b;
    if (t !== "stickers" && t !== "cutout" || r) return;
    l.preventDefault(), l.stopPropagation(), Wt.depth = 0, Ei(!1);
    const m = Array.from(((b = l.dataTransfer) == null ? void 0 : b.files) || []).find((x) => br(x));
    m && Ap(m);
  }
  O.ondrop = m_;
  function nh(l) {
    t !== "stickers" && t !== "cutout" || r || Fc(l) && (Wt.depth += 1, Ei(!0), l.preventDefault());
  }
  function rh(l) {
    t !== "stickers" && t !== "cutout" || r || (!Wt.active && Fc(l) && Ei(!0), Wt.active && l.preventDefault());
  }
  function ih(l) {
    if (t !== "stickers" && t !== "cutout" || r || !Wt.active) return;
    Wt.depth = Math.max(0, Wt.depth - 1);
    const d = Number(l.clientX) <= 0 && Number(l.clientY) <= 0;
    (Wt.depth === 0 || d) && Ei(!1);
  }
  function oh(l) {
    t !== "stickers" && t !== "cutout" || r || (Wt.depth = 0, Ei(!1), Fc(l) && l.preventDefault());
  }
  window.addEventListener("dragenter", nh, !0), window.addEventListener("dragover", rh, !0), window.addEventListener("dragleave", ih, !0), window.addEventListener("drop", oh, !0);
  function ah() {
    const { canUndo: l, canRedo: d } = Yf();
    No(I.toolButtons, "value", "undo", { disabled: !l }), No(I.toolButtons, "value", "redo", { disabled: !d });
  }
  function sh(l, d, m = !1) {
    var Ce;
    mn();
    const b = V && u.mode === "frame" ? st() : null, x = b || An(), N = b ? "shot" : _s(), E = fa();
    if (E && !Tc(E) || !E && (!x || N === "stroke" || On(x))) return;
    const K = (((Ce = I.sidePanel) == null ? void 0 : Ce.params) || []).find((le) => le.key === l);
    if (!K || K.enabled === !1) return;
    let X = Number(d);
    if (Number.isNaN(X) && (X = 0), (E || W) && bE.has(l) ? X = l === "scale" ? Math.max(X, cg) : X : X = Ie(X, Number(K.min), Number(K.max)), l === "yaw_deg" && (X = Bt(X)), !E && W && l.startsWith("position_")) {
      nr(), qk(y.camera, u.frame, l, X), it(), Ge(), m && bt();
      return;
    }
    if (E) {
      Qk(E, u.frame, l, X), hn(), it(), Ge(), m && bt();
      return;
    }
    l === "opacity" ? Jk(x, u.frame, X / 100) : mr(x, { [l]: X }), V && !Kr(x) && (l === "hFOV_deg" || l === "vFOV_deg") && (x.aspect_id = Xi(x)), it(), Ge(), m && bt();
  }
  async function g_(l) {
    var b, x, N, E, K, X, Ce;
    const d = l.target.closest("[data-action]");
    if (!d) return;
    const m = String(d.getAttribute("data-action") || "");
    if (m === "coverage-set") {
      const le = zn(d.getAttribute("data-coverage"));
      if (le === zn(y.coverage)) return;
      y.coverage = le, u.coverage = le, c && (c.value = String(le)), o ? ge.backgroundDirty = !0 : (Un(), Ov({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), it(), ut(), Ge();
      return;
    }
    if (m === "toggle-selection-picker") {
      if ((x = (b = I.sidePanel) == null ? void 0 : b.selectionPicker) != null && x.disabled) return;
      I.sidePanel.selectionPicker.open = !I.sidePanel.selectionPicker.open;
      return;
    }
    if (m === "select-picker-item") {
      I.sidePanel.selectionPicker.open = !1;
      const le = String(d.getAttribute("data-selection-id") || "");
      let ye = null;
      if (le && (t === "stickers" ? ye = [...Ai(), ...C ? y.shots : []].find((Ee) => String((Ee == null ? void 0 : Ee.id) || "") === le) || null : ye = ((N = Uf().find((Ee) => {
        var Je;
        return String(((Je = Ee == null ? void 0 : Ee.item) == null ? void 0 : Je.id) || "") === le;
      })) == null ? void 0 : N.item) || null), Bn(ye || null), ye && !Tn(ye)) {
        const Ee = yn(ye);
        up(Bt(Number(Ee.yaw_deg || 0)), Ie(Number(Ee.pitch_deg || 0), -89.9, 89.9));
      }
      it(), ut(), Ge();
      return;
    }
    if (m === "copy-state-inline") {
      const le = An(), ye = _s();
      if (!le || ye === "stroke" || ui().length > 1) return;
      const Ee = JSON.stringify(V && ye !== "image" ? Pi(le) : Lb(yn(le)));
      try {
        await navigator.clipboard.writeText(Ee), (E = I.sidePanel) != null && E.copyStateButton && (I.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Je;
          (Je = I.sidePanel) != null && Je.copyStateButton && (I.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (m === "set-invert-x") {
      y.ui_settings.invert_view_x = d.getAttribute("data-value") === "1", jc(), it(), (K = e.setDirtyCanvas) == null || K.call(e, !0, !0), Ge();
      return;
    }
    if (m === "set-invert-y") {
      y.ui_settings.invert_view_y = d.getAttribute("data-value") === "1", jc(), it(), (X = e.setDirtyCanvas) == null || X.call(e, !0, !0), Ge();
      return;
    }
    if (m === "ui-reset-defaults") {
      y.ui_settings.invert_view_x = !1, y.ui_settings.invert_view_y = !1, jc(), it(), (Ce = e.setDirtyCanvas) == null || Ce.call(e, !0, !0), Ge();
      return;
    }
    if (m === "close-preview") {
      wo();
      return;
    }
    if (m === "cancel-close") {
      wo();
      return;
    }
    m === "save-close" && (Iv(), wo());
  }
  pe == null || pe.addEventListener("click", g_);
  function y_(l) {
    const d = l.target.closest("[data-action='param-input']");
    d && sh(String(d.getAttribute("data-param-key") || ""), d.value, !1);
  }
  pe == null || pe.addEventListener("input", y_);
  function b_(l) {
    const d = l.target.closest("[data-action='param-input']");
    d && sh(String(d.getAttribute("data-param-key") || ""), d.value, !0);
  }
  pe == null || pe.addEventListener("change", b_);
  const Bc = () => Oi();
  Bc();
  function v_(l) {
    var Ce, le, ye, Ee, Je;
    if ((le = (Ce = l.target) == null ? void 0 : Ce.matches) != null && le.call(Ce, "[data-confirm-overlay]")) {
      const Oe = (ye = I.confirmDialog) == null ? void 0 : ye.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Oe == null || Oe(!1);
      return;
    }
    const d = l.target.closest("[data-space-mode]");
    if (d) {
      k1(d.getAttribute("data-space-mode"));
      return;
    }
    const m = l.target.closest("[data-gizmo-mode]");
    if (m) {
      u.gizmoMode = m.getAttribute("data-gizmo-mode"), ge.backgroundDirty = !0, ut(), Ge({ localOnly: !0, reason: Pt.VIEW });
      return;
    }
    const b = l.target.closest("[data-view]");
    if (b) {
      if (b.getAttribute("aria-disabled") === "true") return;
      const Oe = u.mode;
      u.mode = String(b.getAttribute("data-view") || "pano"), V && u.mode === "frame" && (Oe !== "frame" && (ge.frameSafeRect = null), it(), ut()), ya(), Br(), Ge();
      return;
    }
    const x = l.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (x && !r) {
      if (x.matches("[data-tool-mode]")) {
        const Oe = String(x.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = Oe, (Oe === "paint" || Oe === "mask") && sa({ preservePanelValues: !0 }), Fn(), it(), ut(), Ge();
        return;
      }
      if (x.matches("[data-tool-ui-action]")) {
        const Oe = String(x.getAttribute("data-tool-ui-action") || "");
        if ((Oe === "undo" || Oe === "redo") && x.disabled) return;
        Oe === "undo" ? Cc(-1) : Oe === "redo" ? Cc(1) : Oe === "clear" ? kv() : Oe === "add" || Oe === "add-image" ? dv() : Oe === "add-world" ? fv() : Oe === "add-or-look" ? _v() : Oe === "add-camera" && Sv();
        return;
      }
      if (x.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const Oe = String(x.getAttribute("data-paint-tool") || "pen");
        u.paintTool = Oe, sa({ preservePanelValues: !0 }), $n[Oe] && (u.activeBrushPresetId = Oe), Fn(), it(), ut(), Ge();
        return;
      }
      if (x.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(x.getAttribute("data-mask-tool") || "pen"), sa({ preservePanelValues: !0 }), Fn(), it(), ut(), Ge();
        return;
      }
      if (x.matches("[data-paint-layer-clear-current]")) {
        const Oe = String(x.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Mv(Oe);
        return;
      }
      if (x.matches("[data-paint-color-swatch]")) {
        const Oe = _l.find((ot) => ot.id === x.getAttribute("data-paint-color-swatch"));
        if (!Oe) return;
        u.paintColor = Yn(Oe.color), tt(!0), Fn();
        return;
      }
      if (x.matches("[data-paint-color-custom]")) {
        l.preventDefault(), l.stopPropagation(), ie && !ie.hidden ? tt(!0) : k(), Fn();
        return;
      }
    }
    const N = String(((Ee = x == null ? void 0 : x.getAttribute) == null ? void 0 : Ee.call(x, "data-action")) || "");
    if (N === "video-play-toggle") {
      if (l.preventDefault(), l.stopPropagation(), !(Ne instanceof HTMLVideoElement)) return;
      As.resumeAfterScrub = !1, $c();
      return;
    }
    if (N === "video-audio-toggle") {
      l.preventDefault(), l.stopPropagation(), cp(), typeof (x == null ? void 0 : x.blur) == "function" && x.blur();
      return;
    }
    if (N === "video-loop-toggle") {
      if (l.preventDefault(), l.stopPropagation(), !(Ne instanceof HTMLVideoElement)) return;
      const Oe = !I.videoTransport.loop;
      I.videoTransport.loop = Oe, Ne.loop = Oe, lp({
        hasAudio: I.videoTransport.hasAudio,
        loop: Oe,
        muted: Ne.muted,
        volume: Number(Ne.volume ?? I.videoTransport.volume ?? 1)
      }), typeof (x == null ? void 0 : x.blur) == "function" && x.blur();
      return;
    }
    if (!r) {
      if (N === "frame-aspect") {
        I.frameRail.aspectOpen = !I.frameRail.aspectOpen;
        return;
      }
      if (N === "frame-aspect-set") {
        const Oe = u.mode === "frame" ? st() : null;
        if (!Oe || Oe.locked === !0) return;
        Ip(Oe, String(x.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, _o(), bt(), At(), Br(), it(), ut(), Ge();
        return;
      }
      if (N === "frame-aspect-custom") {
        const Oe = u.mode === "frame" ? st() : null, ot = x.getAttribute("data-custom-width"), rt = x.getAttribute("data-custom-height");
        if (!Oe || !Cv(Oe, ot, rt)) return;
        I.frameRail.aspectOpen = !1, _o(), bt(), At(), Br(), Ge();
        return;
      }
      if (N === "frame-rotate-90") {
        const Oe = u.mode === "frame" ? st() : null;
        if (!Oe || Oe.locked === !0) return;
        Tp(Oe), I.frameRail.aspectOpen = !1, _o(), bt(), At(), Br(), Ge();
        return;
      }
      if (N === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, ut(), Ge();
        return;
      }
      if (N === "aspect-set") {
        const Oe = An();
        if (!Oe) return;
        const ot = String(x.getAttribute("data-aspect") || "1:1");
        Ip(Oe, ot), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, _o(), bt(), At(), ut(), Ge();
        return;
      }
      if (N === "rotate-90") {
        const Oe = An();
        if (!Oe || mo()) return;
        Tp(Oe), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, _o(), bt(), At(), ut(), Ge();
        return;
      }
      if (N === "bring-front") {
        aa();
        return;
      }
      if (N === "send-back") {
        w1();
        return;
      }
      if (N === "duplicate") {
        Nv();
        return;
      }
      if (N === "replace-image") {
        yv();
        return;
      }
      if (N === "toggle-lock") {
        E1();
        return;
      }
      if (N === "back-initial") {
        _1();
        return;
      }
      if (N === "toggle-visible") {
        I1();
        return;
      }
      if (N === "delete") {
        Op();
        return;
      }
    }
    if (N === "reset-view") {
      if (u.mode === "frame") return;
      Ps(
        { position: P1(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Je = bs()) == null ? void 0 : Je.radius) || _r },
        { mode: vl(u.spaceMode, u.viewTransition), moved: !1 }
      );
      return;
    }
    if (N === "frame-view") {
      if (!Wr() || vl(u.spaceMode, u.viewTransition) !== "6dof") return;
      Bb();
      return;
    }
    if (N === "toggle-grid") {
      if (u.mode === "frame") return;
      u.showGrid = !u.showGrid, YE(e == null ? void 0 : e.id, u.showGrid), Bc(), Ge();
      return;
    }
    if (N === "toggle-fullscreen") {
      l.preventDefault(), l.stopPropagation(), N_();
      return;
    }
    if (N === "toggle-output-preview-size") {
      l.preventDefault(), l.stopPropagation();
      const Oe = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = Oe, ha(() => {
        u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = Oe ? 1 : 0, u.outputPreviewAnimStartTs = performance.now();
      }), fh(), Ge();
      return;
    }
    const E = l.target.closest("[data-paint-history-index]");
    if (!E) return;
    const K = Number(E.getAttribute("data-paint-history-index")), X = u.customPaintHistory[K];
    X && (u.customPaintColor = Yn(X), u.paintColor = Yn(X), Fn());
  }
  R.addEventListener("click", v_);
  function __(l) {
    const d = l.target.closest("[data-video-seek]");
    if (d) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      tr.playing && (As.resumeAfterScrub = !0), tr.seek(Ui(Number(d.value || 0), d1()));
      return;
    }
    const m = l.target.closest("[data-video-volume]");
    if (m) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      const N = Ie(Number(m.value || 0), 0, 1);
      Ne.volume = N, Ne.muted = N <= 1e-4, lp({
        hasAudio: I.videoTransport.hasAudio,
        muted: Ne.muted,
        volume: N
      });
      return;
    }
    const b = l.target.closest("[data-paint-size-slider]");
    if (b) {
      if (b.disabled) return;
      const N = Math.max(1, Math.min(120, Math.round(Number(b.value)))), E = Ti(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[E] = N, Fn(), Hv();
      return;
    }
    const x = l.target.closest("[data-paint-alpha-slider]");
    if (x) {
      const N = { ...u.customPaintColor, a: Ie(Number(x.value) / 100, 0, 1) };
      u.customPaintColor = Yn(N), u.paintColor = Yn(N), Fn();
    }
  }
  R.addEventListener("input", __);
  function S_(l) {
    var d;
    if (l.target.closest("[data-video-seek]")) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      As.resumeAfterScrub && tr.play(), As.resumeAfterScrub = !1;
      return;
    }
    if (l.target.closest("[data-video-volume]")) {
      typeof ((d = l.target) == null ? void 0 : d.blur) == "function" && l.target.blur();
      return;
    }
    l.target.closest("[data-paint-size-slider]") && Ds();
  }
  R.addEventListener("change", S_), R.addEventListener("pointerup", (l) => {
    var d;
    if (l.target.closest("[data-video-volume]")) {
      typeof ((d = l.target) == null ? void 0 : d.blur) == "function" && l.target.blur();
      return;
    }
    l.target.closest("[data-paint-size-slider]") && Ds();
  }), R.addEventListener("pointercancel", (l) => {
    var d;
    if (l.target.closest("[data-video-volume]")) {
      typeof ((d = l.target) == null ? void 0 : d.blur) == "function" && l.target.blur();
      return;
    }
    l.target.closest("[data-paint-size-slider]") && Ds();
  }), R.addEventListener("focusout", (l) => {
    l.target.closest("[data-paint-size-slider]") && Ds();
  });
  function w_(l) {
    const d = l.target.closest("[data-tip]");
    !d || !R.contains(d) || St.target !== d && (St.target = d, St.timer && clearTimeout(St.timer), St.timer = window.setTimeout(() => {
      St.target === d && Zv(d);
    }, 220));
  }
  R.addEventListener("pointerover", w_);
  function x_(l) {
    var b, x;
    const d = l.target.closest("[data-tip]");
    !d || St.target !== d || (l.relatedTarget instanceof Element ? (x = (b = l.relatedTarget).closest) == null ? void 0 : x.call(b, "[data-tip]") : null) === d || Fi();
  }
  R.addEventListener("pointerout", x_), R.addEventListener("pointerdown", (l) => {
    l.target.closest("[data-frame-roll-knob]") || Fi();
  });
  function k_(l, d) {
    var K;
    if (!Se) return;
    const m = Se.getBoundingClientRect(), b = Ie((l - m.left) / Math.max(1, m.width), 0, 1), x = 1 - Ie((d - m.top) / Math.max(1, m.height), 0, 1), N = Ru(u.customPaintColor), E = { ...Lu(N.h, b, x), a: Number(((K = u.customPaintColor) == null ? void 0 : K.a) ?? 1) };
    u.customPaintColor = Yn(E), u.paintColor = Yn(E), Fn();
  }
  function M_(l) {
    var N;
    if (!Ae) return;
    const d = Ae.getBoundingClientRect(), m = Ie((l - d.left) / Math.max(1, d.width), 0, 1), b = Ru(u.customPaintColor), x = { ...Lu(m, b.s, b.v), a: Number(((N = u.customPaintColor) == null ? void 0 : N.a) ?? 1) };
    u.customPaintColor = Yn(x), u.paintColor = Yn(x), Fn();
  }
  function lh(l, d) {
    const m = l.pointerId;
    d(l);
    const b = (N) => {
      N.pointerId === m && d(N);
    }, x = (N) => {
      N.pointerId === m && (window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", x));
    };
    window.addEventListener("pointermove", b), window.addEventListener("pointerup", x), window.addEventListener("pointercancel", x);
  }
  Se && (Se.onpointerdown = (l) => {
    l.preventDefault(), l.stopPropagation(), lh(l, (d) => k_(d.clientX, d.clientY));
  }), Ae && (Ae.onpointerdown = (l) => {
    l.preventDefault(), l.stopPropagation(), lh(l, (d) => M_(d.clientX));
  }), R.addEventListener("click", (l) => {
    var x;
    const d = l.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!d) return;
    const m = d.getAttribute("data-action") === "confirm-accept", b = (x = I.confirmDialog) == null ? void 0 : x.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, b == null || b(m);
  });
  function ch() {
    const l = !!u.fullscreen;
    No(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: l ? Ue.fullscreen_close : Ue.fullscreen,
      label: l ? "Exit Fullscreen" : "Fullscreen",
      tip: l ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Rs(l) {
    const d = !!l;
    u.fullscreen !== d && (u.fullscreen = d, R.classList.toggle("pano-modal-fullscreen", d), d ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), Bc(), ch(), m1(), Ge());
  }
  const uh = () => document.fullscreenElement === te;
  async function N_() {
    var l, d;
    try {
      if (!document.fullscreenEnabled) {
        Rs(!u.fullscreen);
        return;
      }
      uh() ? await ((d = document.exitFullscreen) == null ? void 0 : d.call(document)) : await ((l = te.requestFullscreen) == null ? void 0 : l.call(te));
    } catch {
      Rs(!u.fullscreen);
    }
  }
  function dh() {
    document.fullscreenEnabled && Rs(uh());
  }
  document.addEventListener("fullscreenchange", dh), ch();
  function fh() {
    const l = !!u.outputPreviewExpanded;
    I.outputPreviewToggle.icon = l ? Ue.fullscreen_close : Ue.fullscreen, I.outputPreviewToggle.label = l ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = l ? "Reduce preview" : "Expand preview";
  }
  fh();
  const Uc = e.onConnectionsChange;
  let Yc = null, ph = () => {
  };
  !r && t === "stickers" && (ph = ub(e, (l = "sync") => {
    l === "executed" && (yO(ee, Ql), yo(), S && cv()), ip(l);
  }, { editor: !0 }), Yc = function(...d) {
    typeof Uc == "function" && Uc.apply(this, d), yo(), oi(this, "connections");
  }, e.onConnectionsChange = Yc), !r && !M && mg.set(String(e.id ?? "0"), () => sp());
  let So = null;
  async function wo() {
    return So || (So = (async () => {
      var l, d, m, b, x, N, E, K;
      return mg.delete(String(e.id ?? "0")), Vv(), r || Un(), document.fullscreenElement === te && ((l = document.exitFullscreen) == null || l.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", dh), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Fp && (e.__panoFlushStateBeforeQueue = null), (m = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || m.call(d), (x = (b = e.graph) == null ? void 0 : b.setDirtyCanvas) == null || x.call(b, !0, !0), (K = (E = (N = qn) == null ? void 0 : N.canvas) == null ? void 0 : E.setDirty) == null || K.call(E, !0, !0), Fi(), Ke.cancel(), rv(), Ne instanceof HTMLVideoElement && Ne.pause(), O1.forEach((X) => {
        try {
          X();
        } catch {
        }
      }), We.dispose(), Ei(!1), window.removeEventListener("keydown", hh, !0), window.removeEventListener("keydown", mh, !0), window.removeEventListener("keydown", yh, !0), window.removeEventListener("keyup", bh, !0), window.removeEventListener("keydown", Vs, !0), window.removeEventListener("keyup", Vs, !0), window.removeEventListener("blur", vh), window.removeEventListener("keydown", _h, !0), window.removeEventListener("dragenter", nh, !0), window.removeEventListener("dragover", rh, !0), window.removeEventListener("dragleave", ih, !0), window.removeEventListener("drop", oh, !0), !r && t === "stickers" && (e.onConnectionsChange === Yc && (e.onConnectionsChange = Uc), ph()), _e.unmount(), J.remove(), Ev(), So = null, !0;
    })().catch((l) => (console.error("[PanoramaCutoutSync] closeEditor failed", l), So = null, !1)), So);
  }
  function hh(l) {
    var d, m, b, x, N;
    if (l.key === "Escape") {
      if (_a()) {
        l.preventDefault(), l.stopPropagation(), (d = l.stopImmediatePropagation) == null || d.call(l);
        return;
      }
      if (u.fullscreen && document.fullscreenElement === te) {
        l.preventDefault(), l.stopPropagation(), (m = l.stopImmediatePropagation) == null || m.call(l), (b = document.exitFullscreen) == null || b.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        l.preventDefault(), l.stopPropagation(), (x = l.stopImmediatePropagation) == null || x.call(l), Rs(!1);
        return;
      }
      l.preventDefault(), l.stopPropagation(), (N = l.stopImmediatePropagation) == null || N.call(l), wo();
    }
  }
  function mh(l) {
    const d = String(l.key || ""), m = String(l.code || ""), b = Number(l.keyCode || 0);
    if (!(d === "Delete" || m === "Delete" || b === 46) && !(d === "Backspace" || m === "Backspace" || b === 8)) return;
    const E = l.target, K = ((E == null ? void 0 : E.tagName) || "").toUpperCase();
    if (K === "INPUT" || K === "TEXTAREA" || E != null && E.isContentEditable) return;
    if (ne.selection) {
      lv(), l.preventDefault(), l.stopPropagation();
      return;
    }
    if (Pv()) {
      l.preventDefault(), l.stopPropagation();
      return;
    }
    An() && (Op(), l.preventDefault(), l.stopPropagation());
  }
  function gh(l) {
    if (l.code !== "Space" || l.ctrlKey || l.metaKey || l.altKey || r || !v || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const d = l.composedPath()[0];
    if (d !== document.body && d !== document.documentElement && !te.contains(d)) return !1;
    const m = ((d == null ? void 0 : d.tagName) || "").toUpperCase();
    return m === "INPUT" ? !yE.has(String(d.type || "text").toLowerCase()) : m !== "TEXTAREA" && m !== "SELECT" && !(d != null && d.isContentEditable);
  }
  function yh(l) {
    gh(l) && (l.preventDefault(), l.stopPropagation(), l.repeat || $c());
  }
  function bh(l) {
    gh(l) && (l.preventDefault(), l.stopPropagation());
  }
  function Vs(l) {
    const d = !!(l.ctrlKey || l.metaKey), m = !!l.altKey;
    u.marqueeModifier === d && u.altModifier === m || (u.marqueeModifier = d, u.altModifier = m, Ur(), It(u.pointerPos));
  }
  function vh() {
    u.marqueeModifier = !1, u.altModifier = !1, Ur(), It(u.pointerPos);
  }
  function _h(l) {
    if (r || !l.ctrlKey && !l.metaKey) return;
    const d = String(l.key || "").toLowerCase(), m = String(l.code || "");
    if (d !== "z" && m !== "KeyZ") return;
    const b = l.target, x = ((b == null ? void 0 : b.tagName) || "").toUpperCase();
    if (x === "INPUT" || x === "TEXTAREA" || b != null && b.isContentEditable) return;
    const { canUndo: N, canRedo: E } = Yf();
    l.shiftKey && !E || !l.shiftKey && !N || (Cc(l.shiftKey ? 1 : -1), l.preventDefault(), l.stopPropagation());
  }
  window.addEventListener("keydown", hh, !0), window.addEventListener("keydown", mh, !0), window.addEventListener("keydown", yh, !0), window.addEventListener("keyup", bh, !0), window.addEventListener("keydown", Vs, !0), window.addEventListener("keyup", Vs, !0), window.addEventListener("blur", vh), window.addEventListener("keydown", _h, !0), te.addEventListener("pointerdown", (l) => {
    l.target === te && wo();
  });
  function Ar(l, d, { rollbackState: m = !1 } = {}) {
    let b = "";
    try {
      m && (b = JSON.stringify(y)), d();
    } catch (x) {
      if (b)
        try {
          const N = JSON.parse(b);
          Object.keys(y).forEach((E) => delete y[E]), Object.assign(y, N), r || Un();
        } catch (N) {
          console.error(`[PanoramaStickers] editor boot step "${l}" rollback failed`, N);
        }
      I.stageWarningDetail = `boot:${l}`, console.error(`[PanoramaStickers] editor boot step "${l}" failed`, x);
    }
  }
  Ar("cutout-focus", pn), !r && t === "stickers" && Ar("external-sticker-sync", () => ip("open"), { rollbackState: !0 }), bv().catch((l) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', l);
  }), Ar("history", bt), Ar("undo-redo", ah), Ar("paint-ui", Fn), Ar("side-panel", it), Ar("look-at-frame", Dc), Ar("video-source", yo), Ar("canvas-size", Is), Ar("cursor", () => It(u.pointerPos)), Ge(), be = ix("editor", () => {
    var l;
    return {
      type: t,
      readOnly: r,
      mode: u.mode,
      interaction: ((l = u.interaction) == null ? void 0 : l.kind) ?? null,
      timelineDrag: !!ne.drag,
      playing: !!tr.playing
    };
  });
}
qn.registerExtension(SP({
  app: qn,
  openEditor: bO,
  attachStickers: D2,
  attachCutout: L2,
  attachPreview: F2,
  restoreOutput: S2,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: xE
}));
