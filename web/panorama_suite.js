import * as Js from "../../scripts/app.js";
import { app as Bn } from "../../scripts/app.js";
import { api as Qt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ad(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const jt = {}, Do = [], Tr = () => {
}, ig = () => !1, ql = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Jl = (e) => e.startsWith("onUpdate:"), kn = Object.assign, Cd = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, t_ = Object.prototype.hasOwnProperty, Dt = (e, t) => t_.call(e, t), pt = Array.isArray, Lo = (e) => cs(e) === "[object Map]", og = (e) => cs(e) === "[object Set]", ph = (e) => cs(e) === "[object Date]", yt = (e) => typeof e == "function", rn = (e) => typeof e == "string", Vr = (e) => typeof e == "symbol", zt = (e) => e !== null && typeof e == "object", ag = (e) => (zt(e) || yt(e)) && yt(e.then) && yt(e.catch), sg = Object.prototype.toString, cs = (e) => sg.call(e), n_ = (e) => cs(e).slice(8, -1), lg = (e) => cs(e) === "[object Object]", Id = (e) => rn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, La = /* @__PURE__ */ Ad(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, r_ = /-\w/g, Cn = Zl(
  (e) => e.replace(r_, (t) => t.slice(1).toUpperCase())
), i_ = /\B([A-Z])/g, io = Zl(
  (e) => e.replace(i_, "-$1").toLowerCase()
), Ql = Zl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bc = Zl(
  (e) => e ? `on${Ql(e)}` : ""
), Or = (e, t) => !Object.is(e, t), Zs = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, cg = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Ed = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let hh;
const ec = () => hh || (hh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $t(e) {
  if (pt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = rn(n) ? l_(n) : $t(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (rn(e) || zt(e))
    return e;
}
const o_ = /;(?![^(]*\))/g, a_ = /:([^]+)/, s_ = /\/\*[^]*?\*\//g;
function l_(e) {
  const t = {};
  return e.replace(s_, "").split(o_).forEach((r) => {
    if (r) {
      const n = r.split(a_);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function wt(e) {
  let t = "";
  if (rn(e))
    t = e;
  else if (pt(e))
    for (let r = 0; r < e.length; r++) {
      const n = wt(e[r]);
      n && (t += n + " ");
    }
  else if (zt(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const c_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", u_ = /* @__PURE__ */ Ad(c_);
function ug(e) {
  return !!e || e === "";
}
function d_(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Od(e[n], t[n]);
  return r;
}
function Od(e, t) {
  if (e === t) return !0;
  let r = ph(e), n = ph(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Vr(e), n = Vr(t), r || n)
    return e === t;
  if (r = pt(e), n = pt(t), r || n)
    return r && n ? d_(e, t) : !1;
  if (r = zt(e), n = zt(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), c = t.hasOwnProperty(a);
      if (s && !c || !s && c || !Od(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const dg = (e) => !!(e && e.__v_isRef === !0), mt = (e) => rn(e) ? e : e == null ? "" : pt(e) || zt(e) && (e.toString === sg || !yt(e.toString)) ? dg(e) ? mt(e.value) : JSON.stringify(e, fg, 2) : String(e), fg = (e, t) => dg(t) ? fg(e, t.value) : Lo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Uc(n, o) + " =>"] = i, r),
    {}
  )
} : og(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Uc(r))
} : Vr(t) ? Uc(t) : zt(t) && !pt(t) && !lg(t) ? String(t) : t, Uc = (e, t = "") => {
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
class f_ {
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
function p_() {
  return Dn;
}
let Ht;
const Yc = /* @__PURE__ */ new WeakSet();
class pg {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dn && Dn.active && Dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yc.has(this) && (Yc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mg(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, mh(this), gg(this);
    const t = Ht, r = gr;
    Ht = this, gr = !0;
    try {
      return this.fn();
    } finally {
      yg(this), Ht = t, gr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Dd(t);
      this.deps = this.depsTail = void 0, mh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Lu(this) && this.run();
  }
  get dirty() {
    return Lu(this);
  }
}
let hg = 0, Ra, Va;
function mg(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Va, Va = e;
    return;
  }
  e.next = Ra, Ra = e;
}
function Fd() {
  hg++;
}
function Td() {
  if (--hg > 0)
    return;
  if (Va) {
    let t = Va;
    for (Va = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Ra; ) {
    let t = Ra;
    for (Ra = void 0; t; ) {
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
function gg(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yg(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Dd(n), h_(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Lu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (bg(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function bg(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ua) || (e.globalVersion = Ua, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Ht, n = gr;
  Ht = e, gr = !0;
  try {
    gg(e);
    const i = e.fn(e._value);
    (t.version === 0 || Or(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ht = r, gr = n, yg(e), e.flags &= -3;
  }
}
function Dd(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Dd(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function h_(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let gr = !0;
const vg = [];
function ri() {
  vg.push(gr), gr = !1;
}
function ii() {
  const e = vg.pop();
  gr = e === void 0 ? !0 : e;
}
function mh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Ht;
    Ht = void 0;
    try {
      t();
    } finally {
      Ht = r;
    }
  }
}
let Ua = 0;
class m_ {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ld {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ht || !gr || Ht === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Ht)
      r = this.activeLink = new m_(Ht, this), Ht.deps ? (r.prevDep = Ht.depsTail, Ht.depsTail.nextDep = r, Ht.depsTail = r) : Ht.deps = Ht.depsTail = r, _g(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Ht.depsTail, r.nextDep = void 0, Ht.depsTail.nextDep = r, Ht.depsTail = r, Ht.deps === r && (Ht.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Ua++, this.notify(t);
  }
  notify(t) {
    Fd();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Td();
    }
  }
}
function _g(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        _g(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ru = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ Symbol(
  ""
), Vu = /* @__PURE__ */ Symbol(
  ""
), Ya = /* @__PURE__ */ Symbol(
  ""
);
function vn(e, t, r) {
  if (gr && Ht) {
    let n = Ru.get(e);
    n || Ru.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Ld()), i.map = n, i.key = r), i.track();
  }
}
function Jr(e, t, r, n, i, o) {
  const a = Ru.get(e);
  if (!a) {
    Ua++;
    return;
  }
  const s = (c) => {
    c && c.trigger();
  };
  if (Fd(), t === "clear")
    a.forEach(s);
  else {
    const c = pt(e), p = c && Id(r);
    if (c && r === "length") {
      const f = Number(n);
      a.forEach((h, m) => {
        (m === "length" || m === Ya || !Vr(m) && m >= f) && s(h);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), p && s(a.get(Ya)), t) {
        case "add":
          c ? p && s(a.get("length")) : (s(a.get(qi)), Lo(e) && s(a.get(Vu)));
          break;
        case "delete":
          c || (s(a.get(qi)), Lo(e) && s(a.get(Vu)));
          break;
        case "set":
          Lo(e) && s(a.get(qi));
          break;
      }
  }
  Td();
}
function wo(e) {
  const t = /* @__PURE__ */ Tt(e);
  return t === e ? t : (vn(t, "iterate", Ya), /* @__PURE__ */ or(e) ? t : t.map(vr));
}
function tc(e) {
  return vn(e = /* @__PURE__ */ Tt(e), "iterate", Ya), e;
}
function Ir(e, t) {
  return /* @__PURE__ */ oi(e) ? Ko(/* @__PURE__ */ Ji(e) ? vr(t) : t) : vr(t);
}
const g_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xc(this, Symbol.iterator, (e) => Ir(this, e));
  },
  concat(...e) {
    return wo(this).concat(
      ...e.map((t) => pt(t) ? wo(t) : t)
    );
  },
  entries() {
    return Xc(this, "entries", (e) => (e[1] = Ir(this, e[1]), e));
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
    return qc(this, "includes", e);
  },
  indexOf(...e) {
    return qc(this, "indexOf", e);
  },
  join(e) {
    return wo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return qc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Kr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return va(this, "pop");
  },
  push(...e) {
    return va(this, "push", e);
  },
  reduce(e, ...t) {
    return gh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gh(this, "reduceRight", e, t);
  },
  shift() {
    return va(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Kr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return va(this, "splice", e);
  },
  toReversed() {
    return wo(this).toReversed();
  },
  toSorted(e) {
    return wo(this).toSorted(e);
  },
  toSpliced(...e) {
    return wo(this).toSpliced(...e);
  },
  unshift(...e) {
    return va(this, "unshift", e);
  },
  values() {
    return Xc(this, "values", (e) => Ir(this, e));
  }
};
function Xc(e, t, r) {
  const n = tc(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ or(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const y_ = Array.prototype;
function Kr(e, t, r, n, i, o) {
  const a = tc(e), s = a !== e && !/* @__PURE__ */ or(e), c = a[t];
  if (c !== y_[t]) {
    const h = c.apply(e, o);
    return s ? vr(h) : h;
  }
  let p = r;
  a !== e && (s ? p = function(h, m) {
    return r.call(this, Ir(e, h), m, e);
  } : r.length > 2 && (p = function(h, m) {
    return r.call(this, h, m, e);
  }));
  const f = c.call(a, p, n);
  return s && i ? i(f) : f;
}
function gh(e, t, r, n) {
  const i = tc(e), o = i !== e && !/* @__PURE__ */ or(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(p, f, h) {
    return s && (s = !1, p = Ir(e, p)), r.call(this, p, Ir(e, f), h, e);
  }) : r.length > 3 && (a = function(p, f, h) {
    return r.call(this, p, f, h, e);
  }));
  const c = i[t](a, ...n);
  return s ? Ir(e, c) : c;
}
function qc(e, t, r) {
  const n = /* @__PURE__ */ Tt(e);
  vn(n, "iterate", Ya);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ $d(r[0]) ? (r[0] = /* @__PURE__ */ Tt(r[0]), n[t](...r)) : i;
}
function va(e, t, r = []) {
  ri(), Fd();
  const n = (/* @__PURE__ */ Tt(e))[t].apply(e, r);
  return Td(), ii(), n;
}
const b_ = /* @__PURE__ */ Ad("__proto__,__v_isRef,__isVue"), Sg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vr)
);
function v_(e) {
  Vr(e) || (e = String(e));
  const t = /* @__PURE__ */ Tt(this);
  return vn(t, "has", e), t.hasOwnProperty(e);
}
class wg {
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
      return n === (i ? o ? C_ : Ng : o ? Mg : kg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = pt(t);
    if (!i) {
      let c;
      if (a && (c = g_[r]))
        return c;
      if (r === "hasOwnProperty")
        return v_;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ wn(t) ? t : n
    );
    if ((Vr(r) ? Sg.has(r) : b_(r)) || (i || vn(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ wn(s)) {
      const c = a && Id(r) ? s : s.value;
      return i && zt(c) ? /* @__PURE__ */ zu(c) : c;
    }
    return zt(s) ? i ? /* @__PURE__ */ zu(s) : /* @__PURE__ */ Zo(s) : s;
  }
}
class xg extends wg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = pt(t) && Id(r);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ oi(o);
      if (!/* @__PURE__ */ or(n) && !/* @__PURE__ */ oi(n) && (o = /* @__PURE__ */ Tt(o), n = /* @__PURE__ */ Tt(n)), !a && /* @__PURE__ */ wn(o) && !/* @__PURE__ */ wn(n))
        return p || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : Dt(t, r), c = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ wn(t) ? t : i
    );
    return t === /* @__PURE__ */ Tt(i) && (s ? Or(n, o) && Jr(t, "set", r, n) : Jr(t, "add", r, n)), c;
  }
  deleteProperty(t, r) {
    const n = Dt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Jr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Vr(r) || !Sg.has(r)) && vn(t, "has", r), n;
  }
  ownKeys(t) {
    return vn(
      t,
      "iterate",
      pt(t) ? "length" : qi
    ), Reflect.ownKeys(t);
  }
}
class __ extends wg {
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
const S_ = /* @__PURE__ */ new xg(), w_ = /* @__PURE__ */ new __(), x_ = /* @__PURE__ */ new xg(!0);
const $u = (e) => e, Ts = (e) => Reflect.getPrototypeOf(e);
function k_(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ Tt(i), a = Lo(o), s = e === "entries" || e === Symbol.iterator && a, c = e === "keys" && a, p = i[e](...n), f = r ? $u : t ? Ko : vr;
    return !t && vn(
      o,
      "iterate",
      c ? Vu : qi
    ), kn(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = p.next();
          return m ? { value: h, done: m } : {
            value: s ? [f(h[0]), f(h[1])] : f(h),
            done: m
          };
        }
      }
    );
  };
}
function Ds(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function M_(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Tt(o), s = /* @__PURE__ */ Tt(i);
      e || (Or(i, s) && vn(a, "get", i), vn(a, "get", s));
      const { has: c } = Ts(a), p = t ? $u : e ? Ko : vr;
      if (c.call(a, i))
        return p(o.get(i));
      if (c.call(a, s))
        return p(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && vn(/* @__PURE__ */ Tt(i), "iterate", qi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Tt(o), s = /* @__PURE__ */ Tt(i);
      return e || (Or(i, s) && vn(a, "has", i), vn(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, c = /* @__PURE__ */ Tt(s), p = t ? $u : e ? Ko : vr;
      return !e && vn(c, "iterate", qi), s.forEach((f, h) => i.call(o, p(f), p(h), a));
    }
  };
  return kn(
    r,
    e ? {
      add: Ds("add"),
      set: Ds("set"),
      delete: Ds("delete"),
      clear: Ds("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ Tt(this), a = Ts(o), s = /* @__PURE__ */ Tt(i), c = !t && !/* @__PURE__ */ or(i) && !/* @__PURE__ */ oi(i) ? s : i;
        return a.has.call(o, c) || Or(i, c) && a.has.call(o, i) || Or(s, c) && a.has.call(o, s) || (o.add(c), Jr(o, "add", c, c)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ or(o) && !/* @__PURE__ */ oi(o) && (o = /* @__PURE__ */ Tt(o));
        const a = /* @__PURE__ */ Tt(this), { has: s, get: c } = Ts(a);
        let p = s.call(a, i);
        p || (i = /* @__PURE__ */ Tt(i), p = s.call(a, i));
        const f = c.call(a, i);
        return a.set(i, o), p ? Or(o, f) && Jr(a, "set", i, o) : Jr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ Tt(this), { has: a, get: s } = Ts(o);
        let c = a.call(o, i);
        c || (i = /* @__PURE__ */ Tt(i), c = a.call(o, i)), s && s.call(o, i);
        const p = o.delete(i);
        return c && Jr(o, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ Tt(this), o = i.size !== 0, a = i.clear();
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
    r[i] = k_(i, e, t);
  }), r;
}
function Rd(e, t) {
  const r = M_(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Dt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const N_ = {
  get: /* @__PURE__ */ Rd(!1, !1)
}, P_ = {
  get: /* @__PURE__ */ Rd(!1, !0)
}, A_ = {
  get: /* @__PURE__ */ Rd(!0, !1)
};
const kg = /* @__PURE__ */ new WeakMap(), Mg = /* @__PURE__ */ new WeakMap(), Ng = /* @__PURE__ */ new WeakMap(), C_ = /* @__PURE__ */ new WeakMap();
function I_(e) {
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
function E_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : I_(n_(e));
}
// @__NO_SIDE_EFFECTS__
function Zo(e) {
  return /* @__PURE__ */ oi(e) ? e : Vd(
    e,
    !1,
    S_,
    N_,
    kg
  );
}
// @__NO_SIDE_EFFECTS__
function O_(e) {
  return Vd(
    e,
    !1,
    x_,
    P_,
    Mg
  );
}
// @__NO_SIDE_EFFECTS__
function zu(e) {
  return Vd(
    e,
    !0,
    w_,
    A_,
    Ng
  );
}
function Vd(e, t, r, n, i) {
  if (!zt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = E_(e);
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
function Ji(e) {
  return /* @__PURE__ */ oi(e) ? /* @__PURE__ */ Ji(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function oi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function $d(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Tt(t) : e;
}
function F_(e) {
  return !Dt(e, "__v_skip") && Object.isExtensible(e) && cg(e, "__v_skip", !0), e;
}
const vr = (e) => zt(e) ? /* @__PURE__ */ Zo(e) : e, Ko = (e) => zt(e) ? /* @__PURE__ */ zu(e) : e;
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return Pg(e, !1);
}
// @__NO_SIDE_EFFECTS__
function bl(e) {
  return Pg(e, !0);
}
function Pg(e, t) {
  return /* @__PURE__ */ wn(e) ? e : new T_(e, t);
}
class T_ {
  constructor(t, r) {
    this.dep = new Ld(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ Tt(t), this._value = r ? t : vr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ or(t) || /* @__PURE__ */ oi(t);
    t = n ? t : /* @__PURE__ */ Tt(t), Or(t, r) && (this._rawValue = t, this._value = n ? t : vr(t), this.dep.trigger());
  }
}
function ft(e) {
  return /* @__PURE__ */ wn(e) ? e.value : e;
}
const D_ = {
  get: (e, t, r) => t === "__v_raw" ? e : ft(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ wn(i) && !/* @__PURE__ */ wn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Ag(e) {
  return /* @__PURE__ */ Ji(e) ? e : new Proxy(e, D_);
}
class L_ {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Ld(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ua - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ht !== this)
      return mg(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return bg(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function R_(e, t, r = !1) {
  let n, i;
  return yt(e) ? n = e : (n = e.get, i = e.set), new L_(n, i, r);
}
const Ls = {}, vl = /* @__PURE__ */ new WeakMap();
let Wi;
function V_(e, t = !1, r = Wi) {
  if (r) {
    let n = vl.get(r);
    n || vl.set(r, n = []), n.push(e);
  }
}
function $_(e, t, r = jt) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: c } = r, p = (D) => i ? D : /* @__PURE__ */ or(D) || i === !1 || i === 0 ? Zr(D, 1) : Zr(D);
  let f, h, m, _, v = !1, S = !1;
  if (/* @__PURE__ */ wn(e) ? (h = () => e.value, v = /* @__PURE__ */ or(e)) : /* @__PURE__ */ Ji(e) ? (h = () => p(e), v = !0) : pt(e) ? (S = !0, v = e.some((D) => /* @__PURE__ */ Ji(D) || /* @__PURE__ */ or(D)), h = () => e.map((D) => {
    if (/* @__PURE__ */ wn(D))
      return D.value;
    if (/* @__PURE__ */ Ji(D))
      return p(D);
    if (yt(D))
      return c ? c(D, 2) : D();
  })) : yt(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (m) {
      ri();
      try {
        m();
      } finally {
        ii();
      }
    }
    const D = Wi;
    Wi = f;
    try {
      return c ? c(e, 3, [_]) : e(_);
    } finally {
      Wi = D;
    }
  } : h = Tr, t && i) {
    const D = h, y = i === !0 ? 1 / 0 : i;
    h = () => Zr(D(), y);
  }
  const w = p_(), P = () => {
    f.stop(), w && w.active && Cd(w.effects, f);
  };
  if (o && t) {
    const D = t;
    t = (...y) => {
      D(...y), P();
    };
  }
  let W = S ? new Array(e.length).fill(Ls) : Ls;
  const V = (D) => {
    if (!(!(f.flags & 1) || !f.dirty && !D))
      if (t) {
        const y = f.run();
        if (i || v || (S ? y.some((z, H) => Or(z, W[H])) : Or(y, W))) {
          m && m();
          const z = Wi;
          Wi = f;
          try {
            const H = [
              y,
              // pass undefined as the old value when it's changed for the first time
              W === Ls ? void 0 : S && W[0] === Ls ? [] : W,
              _
            ];
            W = y, c ? c(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            Wi = z;
          }
        }
      } else
        f.run();
  };
  return s && s(V), f = new pg(h), f.scheduler = a ? () => a(V, !1) : V, _ = (D) => V_(D, !1, f), m = f.onStop = () => {
    const D = vl.get(f);
    if (D) {
      if (c)
        c(D, 4);
      else
        for (const y of D) y();
      vl.delete(f);
    }
  }, t ? n ? V(!0) : W = f.run() : a ? a(V.bind(null, !0), !0) : f.run(), P.pause = f.pause.bind(f), P.resume = f.resume.bind(f), P.stop = P, P;
}
function Zr(e, t = 1 / 0, r) {
  if (t <= 0 || !zt(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ wn(e))
    Zr(e.value, t, r);
  else if (pt(e))
    for (let n = 0; n < e.length; n++)
      Zr(e[n], t, r);
  else if (og(e) || Lo(e))
    e.forEach((n) => {
      Zr(n, t, r);
    });
  else if (lg(e)) {
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
function us(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    nc(i, t, r);
  }
}
function $r(e, t, r, n) {
  if (yt(e)) {
    const i = us(e, t, r, n);
    return i && ag(i) && i.catch((o) => {
      nc(o, t, r);
    }), i;
  }
  if (pt(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push($r(e[o], t, r, n));
    return i;
  }
}
function nc(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || jt;
  if (t) {
    let s = t.parent;
    const c = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${r}`;
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
      ri(), us(o, null, 10, [
        e,
        c,
        p
      ]), ii();
      return;
    }
  }
  z_(e, r, i, n, a);
}
function z_(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const An = [];
let Cr = -1;
const Ro = [];
let mi = null, Po = 0;
const Cg = /* @__PURE__ */ Promise.resolve();
let _l = null;
function rc(e) {
  const t = _l || Cg;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function j_(e) {
  let t = Cr + 1, r = An.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = An[n], o = Xa(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function zd(e) {
  if (!(e.flags & 1)) {
    const t = Xa(e), r = An[An.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xa(r) ? An.push(e) : An.splice(j_(t), 0, e), e.flags |= 1, Ig();
  }
}
function Ig() {
  _l || (_l = Cg.then(Og));
}
function H_(e) {
  pt(e) ? Ro.push(...e) : mi && e.id === -1 ? mi.splice(Po + 1, 0, e) : e.flags & 1 || (Ro.push(e), e.flags |= 1), Ig();
}
function yh(e, t, r = Cr + 1) {
  for (; r < An.length; r++) {
    const n = An[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      An.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Eg(e) {
  if (Ro.length) {
    const t = [...new Set(Ro)].sort(
      (r, n) => Xa(r) - Xa(n)
    );
    if (Ro.length = 0, mi) {
      mi.push(...t);
      return;
    }
    for (mi = t, Po = 0; Po < mi.length; Po++) {
      const r = mi[Po];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    mi = null, Po = 0;
  }
}
const Xa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Og(e) {
  try {
    for (Cr = 0; Cr < An.length; Cr++) {
      const t = An[Cr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), us(
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
    Cr = -1, An.length = 0, Eg(), _l = null, (An.length || Ro.length) && Og();
  }
}
let Un = null, Fg = null;
function Sl(e) {
  const t = Un;
  return Un = e, Fg = e && e.type.__scopeId || null, t;
}
function Tg(e, t = Un, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Ch(-1);
    const o = Sl(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Sl(o), n._d && Ch(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ti(e, t) {
  if (Un === null)
    return e;
  const r = lc(Un), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, c = jt] = t[i];
    o && (yt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Zr(a), n.push({
      dir: o,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: c
    }));
  }
  return e;
}
function Ri(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let c = s.dir[n];
    c && (ri(), $r(c, r, 8, [
      e.el,
      s,
      e,
      t
    ]), ii());
  }
}
function G_(e, t) {
  if (_n) {
    let r = _n.provides;
    const n = _n.parent && _n.parent.provides;
    n === r && (r = _n.provides = Object.create(n)), r[e] = t;
  }
}
function Qs(e, t, r = !1) {
  const n = jS();
  if (n || Vo) {
    let i = Vo ? Vo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && yt(t) ? t.call(n && n.proxy) : t;
  }
}
const W_ = /* @__PURE__ */ Symbol.for("v-scx"), K_ = () => Qs(W_);
function Zi(e, t, r) {
  return Dg(e, t, r);
}
function Dg(e, t, r = jt) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = kn({}, r), c = t && n || !t && o !== "post";
  let p;
  if (Ja) {
    if (o === "sync") {
      const _ = K_();
      p = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {
      };
      return _.stop = Tr, _.resume = Tr, _.pause = Tr, _;
    }
  }
  const f = _n;
  s.call = (_, v, S) => $r(_, f, v, S);
  let h = !1;
  o === "post" ? s.scheduler = (_) => {
    Tn(_, f && f.suspense);
  } : o !== "sync" && (h = !0, s.scheduler = (_, v) => {
    v ? _() : zd(_);
  }), s.augmentJob = (_) => {
    t && (_.flags |= 4), h && (_.flags |= 2, f && (_.id = f.uid, _.i = f));
  };
  const m = $_(e, t, s);
  return Ja && (p ? p.push(m) : c && m()), m;
}
function B_(e, t, r) {
  const n = this.proxy, i = rn(e) ? e.includes(".") ? Lg(n, e) : () => n[e] : e.bind(n, n);
  let o;
  yt(t) ? o = t : (o = t.handler, r = t);
  const a = fs(this), s = Dg(i, o.bind(n), r);
  return a(), s;
}
function Lg(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const U_ = /* @__PURE__ */ Symbol("_vte"), Y_ = (e) => e.__isTeleport, X_ = /* @__PURE__ */ Symbol("_leaveCb");
function jd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, jd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Rg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function bh(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const wl = /* @__PURE__ */ new WeakMap();
function $a(e, t, r, n, i = !1) {
  if (pt(e)) {
    e.forEach(
      (S, w) => $a(
        S,
        t && (pt(t) ? t[w] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (za(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && $a(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? lc(n.component) : n.el, a = i ? null : o, { i: s, r: c } = e, p = t && t.r, f = s.refs === jt ? s.refs = {} : s.refs, h = s.setupState, m = /* @__PURE__ */ Tt(h), _ = h === jt ? ig : (S) => bh(f, S) ? !1 : Dt(m, S), v = (S, w) => !(w && bh(f, w));
  if (p != null && p !== c) {
    if (vh(t), rn(p))
      f[p] = null, _(p) && (h[p] = null);
    else if (/* @__PURE__ */ wn(p)) {
      const S = t;
      v(p, S.k) && (p.value = null), S.k && (f[S.k] = null);
    }
  }
  if (yt(c))
    us(c, s, 12, [a, f]);
  else {
    const S = rn(c), w = /* @__PURE__ */ wn(c);
    if (S || w) {
      const P = () => {
        if (e.f) {
          const W = S ? _(c) ? h[c] : f[c] : v() || !e.k ? c.value : f[e.k];
          if (i)
            pt(W) && Cd(W, o);
          else if (pt(W))
            W.includes(o) || W.push(o);
          else if (S)
            f[c] = [o], _(c) && (h[c] = f[c]);
          else {
            const V = [o];
            v(c, e.k) && (c.value = V), e.k && (f[e.k] = V);
          }
        } else S ? (f[c] = a, _(c) && (h[c] = a)) : w && (v(c, e.k) && (c.value = a), e.k && (f[e.k] = a));
      };
      if (a) {
        const W = () => {
          P(), wl.delete(e);
        };
        W.id = -1, wl.set(e, W), Tn(W, r);
      } else
        vh(e), P();
    }
  }
}
function vh(e) {
  const t = wl.get(e);
  t && (t.flags |= 8, wl.delete(e));
}
ec().requestIdleCallback;
ec().cancelIdleCallback;
const za = (e) => !!e.type.__asyncLoader, Vg = (e) => e.type.__isKeepAlive;
function q_(e, t) {
  $g(e, "a", t);
}
function J_(e, t) {
  $g(e, "da", t);
}
function $g(e, t, r = _n) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ic(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Vg(i.parent.vnode) && Z_(n, t, r, i), i = i.parent;
  }
}
function Z_(e, t, r, n) {
  const i = ic(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  zg(() => {
    Cd(n[t], i);
  }, r);
}
function ic(e, t, r = _n, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      ri();
      const s = fs(r), c = $r(t, r, e, a);
      return s(), ii(), c;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const ai = (e) => (t, r = _n) => {
  (!Ja || e === "sp") && ic(e, (...n) => t(...n), r);
}, Q_ = ai("bm"), oc = ai("m"), eS = ai(
  "bu"
), tS = ai("u"), ds = ai(
  "bum"
), zg = ai("um"), nS = ai(
  "sp"
), rS = ai("rtg"), iS = ai("rtc");
function oS(e, t = _n) {
  ic("ec", e, t);
}
const aS = "components", jg = /* @__PURE__ */ Symbol.for("v-ndc");
function sS(e) {
  return rn(e) ? lS(aS, e, !1) || e : e || jg;
}
function lS(e, t, r = !0, n = !1) {
  const i = Un || _n;
  if (i) {
    const o = i.type;
    {
      const s = BS(
        o,
        !1
      );
      if (s && (s === t || s === Cn(t) || s === Ql(Cn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      _h(i[e] || o[e], t) || // global registration
      _h(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function _h(e, t) {
  return e && (e[t] || e[Cn(t)] || e[Ql(Cn(t))]);
}
function Rt(e, t, r, n) {
  let i;
  const o = r, a = pt(e);
  if (a || rn(e)) {
    const s = a && /* @__PURE__ */ Ji(e);
    let c = !1, p = !1;
    s && (c = !/* @__PURE__ */ or(e), p = /* @__PURE__ */ oi(e), e = tc(e)), i = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      i[f] = t(
        c ? p ? Ko(vr(e[f])) : vr(e[f]) : e[f],
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
const ju = (e) => e ? l0(e) ? lc(e) : ju(e.parent) : null, ja = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ kn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ju(e.parent),
    $root: (e) => ju(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gg(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rc.bind(e.proxy)),
    $watch: (e) => B_.bind(e)
  })
), Jc = (e, t) => e !== jt && !e.__isScriptSetup && Dt(e, t), cS = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: a, type: s, appContext: c } = e;
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
        if (Jc(n, t))
          return a[t] = 1, n[t];
        if (i !== jt && Dt(i, t))
          return a[t] = 2, i[t];
        if (Dt(o, t))
          return a[t] = 3, o[t];
        if (r !== jt && Dt(r, t))
          return a[t] = 4, r[t];
        Hu && (a[t] = 0);
      }
    }
    const p = ja[t];
    let f, h;
    if (p)
      return t === "$attrs" && vn(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (f = s.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== jt && Dt(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      h = c.config.globalProperties, Dt(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Jc(i, t) ? (i[t] = r, !0) : n !== jt && Dt(n, t) ? (n[t] = r, !0) : Dt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let c;
    return !!(r[s] || e !== jt && s[0] !== "$" && Dt(e, s) || Jc(t, s) || Dt(o, s) || Dt(n, s) || Dt(ja, s) || Dt(i.config.globalProperties, s) || (c = a.__cssModules) && c[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Dt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Sh(e) {
  return pt(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Hu = !0;
function uS(e) {
  const t = Gg(e), r = e.proxy, n = e.ctx;
  Hu = !1, t.beforeCreate && wh(t.beforeCreate, e, "bc");
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
    mounted: m,
    beforeUpdate: _,
    updated: v,
    activated: S,
    deactivated: w,
    beforeDestroy: P,
    beforeUnmount: W,
    destroyed: V,
    unmounted: D,
    render: y,
    renderTracked: z,
    renderTriggered: H,
    errorCaptured: te,
    serverPrefetch: oe,
    // public API
    expose: I,
    inheritAttrs: G,
    // assets
    components: X,
    directives: ue,
    filters: Ne
  } = t;
  if (p && dS(p, n, null), a)
    for (const Q in a) {
      const F = a[Q];
      yt(F) && (n[Q] = F.bind(r));
    }
  if (i) {
    const Q = i.call(r, r);
    zt(Q) && (e.data = /* @__PURE__ */ Zo(Q));
  }
  if (Hu = !0, o)
    for (const Q in o) {
      const F = o[Q], $ = yt(F) ? F.bind(r, r) : yt(F.get) ? F.get.bind(r, r) : Tr, de = !yt(F) && yt(F.set) ? F.set.bind(r) : Tr, Pe = _t({
        get: $,
        set: de
      });
      Object.defineProperty(n, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (Ge) => Pe.value = Ge
      });
    }
  if (s)
    for (const Q in s)
      Hg(s[Q], n, r, Q);
  if (c) {
    const Q = yt(c) ? c.call(r) : c;
    Reflect.ownKeys(Q).forEach((F) => {
      G_(F, Q[F]);
    });
  }
  f && wh(f, e, "c");
  function pe(Q, F) {
    pt(F) ? F.forEach(($) => Q($.bind(r))) : F && Q(F.bind(r));
  }
  if (pe(Q_, h), pe(oc, m), pe(eS, _), pe(tS, v), pe(q_, S), pe(J_, w), pe(oS, te), pe(iS, z), pe(rS, H), pe(ds, W), pe(zg, D), pe(nS, oe), pt(I))
    if (I.length) {
      const Q = e.exposed || (e.exposed = {});
      I.forEach((F) => {
        Object.defineProperty(Q, F, {
          get: () => r[F],
          set: ($) => r[F] = $,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === Tr && (e.render = y), G != null && (e.inheritAttrs = G), X && (e.components = X), ue && (e.directives = ue), oe && Rg(e);
}
function dS(e, t, r = Tr) {
  pt(e) && (e = Gu(e));
  for (const n in e) {
    const i = e[n];
    let o;
    zt(i) ? "default" in i ? o = Qs(
      i.from || n,
      i.default,
      !0
    ) : o = Qs(i.from || n) : o = Qs(i), /* @__PURE__ */ wn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function wh(e, t, r) {
  $r(
    pt(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Hg(e, t, r, n) {
  let i = n.includes(".") ? Lg(r, n) : () => r[n];
  if (rn(e)) {
    const o = t[e];
    yt(o) && Zi(i, o);
  } else if (yt(e))
    Zi(i, e.bind(r));
  else if (zt(e))
    if (pt(e))
      e.forEach((o) => Hg(o, t, r, n));
    else {
      const o = yt(e.handler) ? e.handler.bind(r) : t[e.handler];
      yt(o) && Zi(i, o, e);
    }
}
function Gg(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let c;
  return s ? c = s : !i.length && !r && !n ? c = t : (c = {}, i.length && i.forEach(
    (p) => xl(c, p, a, !0)
  ), xl(c, t, a)), zt(t) && o.set(t, c), c;
}
function xl(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && xl(e, o, r, !0), i && i.forEach(
    (a) => xl(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = fS[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const fS = {
  data: xh,
  props: kh,
  emits: kh,
  // objects
  methods: Pa,
  computed: Pa,
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
  components: Pa,
  directives: Pa,
  // watch
  watch: hS,
  // provide / inject
  provide: xh,
  inject: pS
};
function xh(e, t) {
  return t ? e ? function() {
    return kn(
      yt(e) ? e.call(this, this) : e,
      yt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function pS(e, t) {
  return Pa(Gu(e), Gu(t));
}
function Gu(e) {
  if (pt(e)) {
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
function Pa(e, t) {
  return e ? kn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function kh(e, t) {
  return e ? pt(e) && pt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : kn(
    /* @__PURE__ */ Object.create(null),
    Sh(e),
    Sh(t ?? {})
  ) : t;
}
function hS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = kn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Pn(e[n], t[n]);
  return r;
}
function Wg() {
  return {
    app: null,
    config: {
      isNativeTag: ig,
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
let mS = 0;
function gS(e, t) {
  return function(n, i = null) {
    yt(n) || (n = kn({}, n)), i != null && !zt(i) && (i = null);
    const o = Wg(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let c = !1;
    const p = o.app = {
      _uid: mS++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: YS,
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
      mount(f, h, m) {
        if (!c) {
          const _ = p._ceVNode || tt(n, i);
          return _.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(_, f, m), c = !0, p._container = f, f.__vue_app__ = p, lc(_.component);
        }
      },
      onUnmount(f) {
        s.push(f);
      },
      unmount() {
        c && ($r(
          s,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(f, h) {
        return o.provides[f] = h, p;
      },
      runWithContext(f) {
        const h = Vo;
        Vo = p;
        try {
          return f();
        } finally {
          Vo = h;
        }
      }
    };
    return p;
  };
}
let Vo = null;
const yS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Cn(t)}Modifiers`] || e[`${io(t)}Modifiers`];
function bS(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || jt;
  let i = r;
  const o = t.startsWith("update:"), a = o && yS(n, t.slice(7));
  a && (a.trim && (i = r.map((f) => rn(f) ? f.trim() : f)), a.number && (i = r.map(Ed)));
  let s, c = n[s = Bc(t)] || // also try camelCase event handler (#2249)
  n[s = Bc(Cn(t))];
  !c && o && (c = n[s = Bc(io(t))]), c && $r(
    c,
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
const vS = /* @__PURE__ */ new WeakMap();
function Kg(e, t, r = !1) {
  const n = r ? vS : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!yt(e)) {
    const c = (p) => {
      const f = Kg(p, t, !0);
      f && (s = !0, kn(a, f));
    };
    !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !s ? (zt(e) && n.set(e, null), null) : (pt(o) ? o.forEach((c) => a[c] = null) : kn(a, o), zt(e) && n.set(e, a), a);
}
function ac(e, t) {
  return !e || !ql(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Dt(e, t[0].toLowerCase() + t.slice(1)) || Dt(e, io(t)) || Dt(e, t));
}
function Mh(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: c,
    render: p,
    renderCache: f,
    props: h,
    data: m,
    setupState: _,
    ctx: v,
    inheritAttrs: S
  } = e, w = Sl(e);
  let P, W;
  try {
    if (r.shapeFlag & 4) {
      const D = i || n, y = D;
      P = Er(
        p.call(
          y,
          D,
          f,
          h,
          _,
          m,
          v
        )
      ), W = s;
    } else {
      const D = t;
      P = Er(
        D.length > 1 ? D(
          h,
          { attrs: s, slots: a, emit: c }
        ) : D(
          h,
          null
        )
      ), W = t.props ? s : _S(s);
    }
  } catch (D) {
    Ha.length = 0, nc(D, e, 1), P = tt(bi);
  }
  let V = P;
  if (W && S !== !1) {
    const D = Object.keys(W), { shapeFlag: y } = V;
    D.length && y & 7 && (o && D.some(Jl) && (W = SS(
      W,
      o
    )), V = Bo(V, W, !1, !0));
  }
  return r.dirs && (V = Bo(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(r.dirs) : r.dirs), r.transition && jd(V, r.transition), P = V, Sl(w), P;
}
const _S = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ql(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, SS = (e, t) => {
  const r = {};
  for (const n in e)
    (!Jl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function wS(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: c } = t, p = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Nh(n, a, p) : !!a;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const m = f[h];
        if (Bg(a, n, m) && !ac(p, m))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Nh(n, a, p) : !0 : !!a;
  return !1;
}
function Nh(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Bg(t, e, o) && !ac(r, o))
      return !0;
  }
  return !1;
}
function Bg(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && zt(n) && zt(i) ? !Od(n, i) : n !== i;
}
function xS({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Ug = {}, Yg = () => Object.create(Ug), Xg = (e) => Object.getPrototypeOf(e) === Ug;
function kS(e, t, r, n = !1) {
  const i = {}, o = Yg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qg(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ O_(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function MS(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ Tt(i), [c] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let m = f[h];
        if (ac(e.emitsOptions, m))
          continue;
        const _ = t[m];
        if (c)
          if (Dt(o, m))
            _ !== o[m] && (o[m] = _, p = !0);
          else {
            const v = Cn(m);
            i[v] = Wu(
              c,
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
    qg(e, t, i, o) && (p = !0);
    let f;
    for (const h in s)
      (!t || // for camelCase
      !Dt(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = io(h)) === h || !Dt(t, f))) && (c ? r && // for camelCase
      (r[h] !== void 0 || // for kebab-case
      r[f] !== void 0) && (i[h] = Wu(
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
  p && Jr(e.attrs, "set", "");
}
function qg(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let c in t) {
      if (La(c))
        continue;
      const p = t[c];
      let f;
      i && Dt(i, f = Cn(c)) ? !o || !o.includes(f) ? r[f] = p : (s || (s = {}))[f] = p : ac(e.emitsOptions, c) || (!(c in n) || p !== n[c]) && (n[c] = p, a = !0);
    }
  if (o) {
    const c = /* @__PURE__ */ Tt(r), p = s || jt;
    for (let f = 0; f < o.length; f++) {
      const h = o[f];
      r[h] = Wu(
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
function Wu(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = Dt(a, "default");
    if (s && n === void 0) {
      const c = a.default;
      if (a.type !== Function && !a.skipFactory && yt(c)) {
        const { propsDefaults: p } = i;
        if (r in p)
          n = p[r];
        else {
          const f = fs(i);
          n = p[r] = c.call(
            null,
            t
          ), f();
        }
      } else
        n = c;
      i.ce && i.ce._setProp(r, n);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? n = !1 : a[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === io(r)) && (n = !0));
  }
  return n;
}
const NS = /* @__PURE__ */ new WeakMap();
function Jg(e, t, r = !1) {
  const n = r ? NS : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let c = !1;
  if (!yt(e)) {
    const f = (h) => {
      c = !0;
      const [m, _] = Jg(h, t, !0);
      kn(a, m), _ && s.push(..._);
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !c)
    return zt(e) && n.set(e, Do), Do;
  if (pt(o))
    for (let f = 0; f < o.length; f++) {
      const h = Cn(o[f]);
      Ph(h) && (a[h] = jt);
    }
  else if (o)
    for (const f in o) {
      const h = Cn(f);
      if (Ph(h)) {
        const m = o[f], _ = a[h] = pt(m) || yt(m) ? { type: m } : kn({}, m), v = _.type;
        let S = !1, w = !0;
        if (pt(v))
          for (let P = 0; P < v.length; ++P) {
            const W = v[P], V = yt(W) && W.name;
            if (V === "Boolean") {
              S = !0;
              break;
            } else V === "String" && (w = !1);
          }
        else
          S = yt(v) && v.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = S, _[
          1
          /* shouldCastTrue */
        ] = w, (S || Dt(_, "default")) && s.push(h);
      }
    }
  const p = [a, s];
  return zt(e) && n.set(e, p), p;
}
function Ph(e) {
  return e[0] !== "$" && !La(e);
}
const Hd = (e) => e === "_" || e === "_ctx" || e === "$stable", Gd = (e) => pt(e) ? e.map(Er) : [Er(e)], PS = (e, t, r) => {
  if (t._n)
    return t;
  const n = Tg((...i) => Gd(t(...i)), r);
  return n._c = !1, n;
}, Zg = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Hd(i)) continue;
    const o = e[i];
    if (yt(o))
      t[i] = PS(i, o, n);
    else if (o != null) {
      const a = Gd(o);
      t[i] = () => a;
    }
  }
}, Qg = (e, t) => {
  const r = Gd(t);
  e.slots.default = () => r;
}, e0 = (e, t, r) => {
  for (const n in t)
    (r || !Hd(n)) && (e[n] = t[n]);
}, AS = (e, t, r) => {
  const n = e.slots = Yg();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (e0(n, t, r), r && cg(n, "_", i, !0)) : Zg(t, n);
  } else t && Qg(e, t);
}, CS = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = jt;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : e0(i, t, r) : (o = !t.$stable, Zg(t, i)), a = t;
  } else t && (Qg(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !Hd(s) && a[s] == null && delete i[s];
}, Tn = TS;
function IS(e) {
  return ES(e);
}
function ES(e, t) {
  const r = ec();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: c,
    setText: p,
    setElementText: f,
    parentNode: h,
    nextSibling: m,
    setScopeId: _ = Tr,
    insertStaticContent: v
  } = e, S = (M, O, Y, he = null, T = null, q = null, re = void 0, E = null, B = !!O.dynamicChildren) => {
    if (M === O)
      return;
    M && !_a(M, O) && (he = me(M), Ge(M, T, q, !0), M = null), O.patchFlag === -2 && (B = !1, O.dynamicChildren = null);
    const { type: K, ref: J, shapeFlag: ie } = O;
    switch (K) {
      case sc:
        w(M, O, Y, he);
        break;
      case bi:
        P(M, O, Y, he);
        break;
      case Qc:
        M == null && W(O, Y, he, re);
        break;
      case lt:
        X(
          M,
          O,
          Y,
          he,
          T,
          q,
          re,
          E,
          B
        );
        break;
      default:
        ie & 1 ? y(
          M,
          O,
          Y,
          he,
          T,
          q,
          re,
          E,
          B
        ) : ie & 6 ? ue(
          M,
          O,
          Y,
          he,
          T,
          q,
          re,
          E,
          B
        ) : (ie & 64 || ie & 128) && K.process(
          M,
          O,
          Y,
          he,
          T,
          q,
          re,
          E,
          B,
          ne
        );
    }
    J != null && T ? $a(J, M && M.ref, q, O || M, !O) : J == null && M && M.ref != null && $a(M.ref, null, q, M, !0);
  }, w = (M, O, Y, he) => {
    if (M == null)
      n(
        O.el = s(O.children),
        Y,
        he
      );
    else {
      const T = O.el = M.el;
      O.children !== M.children && p(T, O.children);
    }
  }, P = (M, O, Y, he) => {
    M == null ? n(
      O.el = c(O.children || ""),
      Y,
      he
    ) : O.el = M.el;
  }, W = (M, O, Y, he) => {
    [M.el, M.anchor] = v(
      M.children,
      O,
      Y,
      he,
      M.el,
      M.anchor
    );
  }, V = ({ el: M, anchor: O }, Y, he) => {
    let T;
    for (; M && M !== O; )
      T = m(M), n(M, Y, he), M = T;
    n(O, Y, he);
  }, D = ({ el: M, anchor: O }) => {
    let Y;
    for (; M && M !== O; )
      Y = m(M), i(M), M = Y;
    i(O);
  }, y = (M, O, Y, he, T, q, re, E, B) => {
    if (O.type === "svg" ? re = "svg" : O.type === "math" && (re = "mathml"), M == null)
      z(
        O,
        Y,
        he,
        T,
        q,
        re,
        E,
        B
      );
    else {
      const K = M.el && M.el._isVueCE ? M.el : null;
      try {
        K && K._beginPatch(), oe(
          M,
          O,
          T,
          q,
          re,
          E,
          B
        );
      } finally {
        K && K._endPatch();
      }
    }
  }, z = (M, O, Y, he, T, q, re, E) => {
    let B, K;
    const { props: J, shapeFlag: ie, transition: xe, dirs: ke } = M;
    if (B = M.el = a(
      M.type,
      q,
      J && J.is,
      J
    ), ie & 8 ? f(B, M.children) : ie & 16 && te(
      M.children,
      B,
      null,
      he,
      T,
      Zc(M, q),
      re,
      E
    ), ke && Ri(M, null, he, "created"), H(B, M, M.scopeId, re, he), J) {
      for (const Te in J)
        Te !== "value" && !La(Te) && o(B, Te, null, J[Te], q, he);
      "value" in J && o(B, "value", null, J.value, q), (K = J.onVnodeBeforeMount) && Nr(K, he, M);
    }
    ke && Ri(M, null, he, "beforeMount");
    const Ie = OS(T, xe);
    Ie && xe.beforeEnter(B), n(B, O, Y), ((K = J && J.onVnodeMounted) || Ie || ke) && Tn(() => {
      try {
        K && Nr(K, he, M), Ie && xe.enter(B), ke && Ri(M, null, he, "mounted");
      } finally {
      }
    }, T);
  }, H = (M, O, Y, he, T) => {
    if (Y && _(M, Y), he)
      for (let q = 0; q < he.length; q++)
        _(M, he[q]);
    if (T) {
      let q = T.subTree;
      if (O === q || i0(q.type) && (q.ssContent === O || q.ssFallback === O)) {
        const re = T.vnode;
        H(
          M,
          re,
          re.scopeId,
          re.slotScopeIds,
          T.parent
        );
      }
    }
  }, te = (M, O, Y, he, T, q, re, E, B = 0) => {
    for (let K = B; K < M.length; K++) {
      const J = M[K] = E ? Xr(M[K]) : Er(M[K]);
      S(
        null,
        J,
        O,
        Y,
        he,
        T,
        q,
        re,
        E
      );
    }
  }, oe = (M, O, Y, he, T, q, re) => {
    const E = O.el = M.el;
    let { patchFlag: B, dynamicChildren: K, dirs: J } = O;
    B |= M.patchFlag & 16;
    const ie = M.props || jt, xe = O.props || jt;
    let ke;
    if (Y && Vi(Y, !1), (ke = xe.onVnodeBeforeUpdate) && Nr(ke, Y, O, M), J && Ri(O, M, Y, "beforeUpdate"), Y && Vi(Y, !0), (ie.innerHTML && xe.innerHTML == null || ie.textContent && xe.textContent == null) && f(E, ""), K ? I(
      M.dynamicChildren,
      K,
      E,
      Y,
      he,
      Zc(O, T),
      q
    ) : re || F(
      M,
      O,
      E,
      null,
      Y,
      he,
      Zc(O, T),
      q,
      !1
    ), B > 0) {
      if (B & 16)
        G(E, ie, xe, Y, T);
      else if (B & 2 && ie.class !== xe.class && o(E, "class", null, xe.class, T), B & 4 && o(E, "style", ie.style, xe.style, T), B & 8) {
        const Ie = O.dynamicProps;
        for (let Te = 0; Te < Ie.length; Te++) {
          const Ye = Ie[Te], se = ie[Ye], we = xe[Ye];
          (we !== se || Ye === "value") && o(E, Ye, se, we, T, Y);
        }
      }
      B & 1 && M.children !== O.children && f(E, O.children);
    } else !re && K == null && G(E, ie, xe, Y, T);
    ((ke = xe.onVnodeUpdated) || J) && Tn(() => {
      ke && Nr(ke, Y, O, M), J && Ri(O, M, Y, "updated");
    }, he);
  }, I = (M, O, Y, he, T, q, re) => {
    for (let E = 0; E < O.length; E++) {
      const B = M[E], K = O[E], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === lt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_a(B, K) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 198) ? h(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      S(
        B,
        K,
        J,
        null,
        he,
        T,
        q,
        re,
        !0
      );
    }
  }, G = (M, O, Y, he, T) => {
    if (O !== Y) {
      if (O !== jt)
        for (const q in O)
          !La(q) && !(q in Y) && o(
            M,
            q,
            O[q],
            null,
            T,
            he
          );
      for (const q in Y) {
        if (La(q)) continue;
        const re = Y[q], E = O[q];
        re !== E && q !== "value" && o(M, q, E, re, T, he);
      }
      "value" in Y && o(M, "value", O.value, Y.value, T);
    }
  }, X = (M, O, Y, he, T, q, re, E, B) => {
    const K = O.el = M ? M.el : s(""), J = O.anchor = M ? M.anchor : s("");
    let { patchFlag: ie, dynamicChildren: xe, slotScopeIds: ke } = O;
    ke && (E = E ? E.concat(ke) : ke), M == null ? (n(K, Y, he), n(J, Y, he), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      Y,
      J,
      T,
      q,
      re,
      E,
      B
    )) : ie > 0 && ie & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    M.dynamicChildren && M.dynamicChildren.length === xe.length ? (I(
      M.dynamicChildren,
      xe,
      Y,
      T,
      q,
      re,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || T && O === T.subTree) && t0(
      M,
      O,
      !0
      /* shallow */
    )) : F(
      M,
      O,
      Y,
      J,
      T,
      q,
      re,
      E,
      B
    );
  }, ue = (M, O, Y, he, T, q, re, E, B) => {
    O.slotScopeIds = E, M == null ? O.shapeFlag & 512 ? T.ctx.activate(
      O,
      Y,
      he,
      re,
      B
    ) : Ne(
      O,
      Y,
      he,
      T,
      q,
      re,
      B
    ) : _e(M, O, B);
  }, Ne = (M, O, Y, he, T, q, re) => {
    const E = M.component = zS(
      M,
      he,
      T
    );
    if (Vg(M) && (E.ctx.renderer = ne), HS(E, !1, re), E.asyncDep) {
      if (T && T.registerDep(E, pe, re), !M.el) {
        const B = E.subTree = tt(bi);
        P(null, B, O, Y), M.placeholder = B.el;
      }
    } else
      pe(
        E,
        M,
        O,
        Y,
        T,
        q,
        re
      );
  }, _e = (M, O, Y) => {
    const he = O.component = M.component;
    if (wS(M, O, Y))
      if (he.asyncDep && !he.asyncResolved) {
        Q(he, O, Y);
        return;
      } else
        he.next = O, he.update();
    else
      O.el = M.el, he.vnode = O;
  }, pe = (M, O, Y, he, T, q, re) => {
    const E = () => {
      if (M.isMounted) {
        let { next: ie, bu: xe, u: ke, parent: Ie, vnode: Te } = M;
        {
          const b = n0(M);
          if (b) {
            ie && (ie.el = Te.el, Q(M, ie, re)), b.asyncDep.then(() => {
              Tn(() => {
                M.isUnmounted || K();
              }, T);
            });
            return;
          }
        }
        let Ye = ie, se;
        Vi(M, !1), ie ? (ie.el = Te.el, Q(M, ie, re)) : ie = Te, xe && Zs(xe), (se = ie.props && ie.props.onVnodeBeforeUpdate) && Nr(se, Ie, ie, Te), Vi(M, !0);
        const we = Mh(M), Oe = M.subTree;
        M.subTree = we, S(
          Oe,
          we,
          // parent may have changed if it's in a teleport
          h(Oe.el),
          // anchor may have changed if it's in a fragment
          me(Oe),
          M,
          T,
          q
        ), ie.el = we.el, Ye === null && xS(M, we.el), ke && Tn(ke, T), (se = ie.props && ie.props.onVnodeUpdated) && Tn(
          () => Nr(se, Ie, ie, Te),
          T
        );
      } else {
        let ie;
        const { el: xe, props: ke } = O, { bm: Ie, m: Te, parent: Ye, root: se, type: we } = M, Oe = za(O);
        Vi(M, !1), Ie && Zs(Ie), !Oe && (ie = ke && ke.onVnodeBeforeMount) && Nr(ie, Ye, O), Vi(M, !0);
        {
          se.ce && se.ce._hasShadowRoot() && se.ce._injectChildStyle(
            we,
            M.parent ? M.parent.type : void 0
          );
          const b = M.subTree = Mh(M);
          S(
            null,
            b,
            Y,
            he,
            M,
            T,
            q
          ), O.el = b.el;
        }
        if (Te && Tn(Te, T), !Oe && (ie = ke && ke.onVnodeMounted)) {
          const b = O;
          Tn(
            () => Nr(ie, Ye, b),
            T
          );
        }
        (O.shapeFlag & 256 || Ye && za(Ye.vnode) && Ye.vnode.shapeFlag & 256) && M.a && Tn(M.a, T), M.isMounted = !0, O = Y = he = null;
      }
    };
    M.scope.on();
    const B = M.effect = new pg(E);
    M.scope.off();
    const K = M.update = B.run.bind(B), J = M.job = B.runIfDirty.bind(B);
    J.i = M, J.id = M.uid, B.scheduler = () => zd(J), Vi(M, !0), K();
  }, Q = (M, O, Y) => {
    O.component = M;
    const he = M.vnode.props;
    M.vnode = O, M.next = null, MS(M, O.props, he, Y), CS(M, O.children, Y), ri(), yh(M), ii();
  }, F = (M, O, Y, he, T, q, re, E, B = !1) => {
    const K = M && M.children, J = M ? M.shapeFlag : 0, ie = O.children, { patchFlag: xe, shapeFlag: ke } = O;
    if (xe > 0) {
      if (xe & 128) {
        de(
          K,
          ie,
          Y,
          he,
          T,
          q,
          re,
          E,
          B
        );
        return;
      } else if (xe & 256) {
        $(
          K,
          ie,
          Y,
          he,
          T,
          q,
          re,
          E,
          B
        );
        return;
      }
    }
    ke & 8 ? (J & 16 && fe(K, T, q), ie !== K && f(Y, ie)) : J & 16 ? ke & 16 ? de(
      K,
      ie,
      Y,
      he,
      T,
      q,
      re,
      E,
      B
    ) : fe(K, T, q, !0) : (J & 8 && f(Y, ""), ke & 16 && te(
      ie,
      Y,
      he,
      T,
      q,
      re,
      E,
      B
    ));
  }, $ = (M, O, Y, he, T, q, re, E, B) => {
    M = M || Do, O = O || Do;
    const K = M.length, J = O.length, ie = Math.min(K, J);
    let xe;
    for (xe = 0; xe < ie; xe++) {
      const ke = O[xe] = B ? Xr(O[xe]) : Er(O[xe]);
      S(
        M[xe],
        ke,
        Y,
        null,
        T,
        q,
        re,
        E,
        B
      );
    }
    K > J ? fe(
      M,
      T,
      q,
      !0,
      !1,
      ie
    ) : te(
      O,
      Y,
      he,
      T,
      q,
      re,
      E,
      B,
      ie
    );
  }, de = (M, O, Y, he, T, q, re, E, B) => {
    let K = 0;
    const J = O.length;
    let ie = M.length - 1, xe = J - 1;
    for (; K <= ie && K <= xe; ) {
      const ke = M[K], Ie = O[K] = B ? Xr(O[K]) : Er(O[K]);
      if (_a(ke, Ie))
        S(
          ke,
          Ie,
          Y,
          null,
          T,
          q,
          re,
          E,
          B
        );
      else
        break;
      K++;
    }
    for (; K <= ie && K <= xe; ) {
      const ke = M[ie], Ie = O[xe] = B ? Xr(O[xe]) : Er(O[xe]);
      if (_a(ke, Ie))
        S(
          ke,
          Ie,
          Y,
          null,
          T,
          q,
          re,
          E,
          B
        );
      else
        break;
      ie--, xe--;
    }
    if (K > ie) {
      if (K <= xe) {
        const ke = xe + 1, Ie = ke < J ? O[ke].el : he;
        for (; K <= xe; )
          S(
            null,
            O[K] = B ? Xr(O[K]) : Er(O[K]),
            Y,
            Ie,
            T,
            q,
            re,
            E,
            B
          ), K++;
      }
    } else if (K > xe)
      for (; K <= ie; )
        Ge(M[K], T, q, !0), K++;
    else {
      const ke = K, Ie = K, Te = /* @__PURE__ */ new Map();
      for (K = Ie; K <= xe; K++) {
        const A = O[K] = B ? Xr(O[K]) : Er(O[K]);
        A.key != null && Te.set(A.key, K);
      }
      let Ye, se = 0;
      const we = xe - Ie + 1;
      let Oe = !1, b = 0;
      const L = new Array(we);
      for (K = 0; K < we; K++) L[K] = 0;
      for (K = ke; K <= ie; K++) {
        const A = M[K];
        if (se >= we) {
          Ge(A, T, q, !0);
          continue;
        }
        let x;
        if (A.key != null)
          x = Te.get(A.key);
        else
          for (Ye = Ie; Ye <= xe; Ye++)
            if (L[Ye - Ie] === 0 && _a(A, O[Ye])) {
              x = Ye;
              break;
            }
        x === void 0 ? Ge(A, T, q, !0) : (L[x - Ie] = K + 1, x >= b ? b = x : Oe = !0, S(
          A,
          O[x],
          Y,
          null,
          T,
          q,
          re,
          E,
          B
        ), se++);
      }
      const u = Oe ? FS(L) : Do;
      for (Ye = u.length - 1, K = we - 1; K >= 0; K--) {
        const A = Ie + K, x = O[A], U = O[A + 1], ye = A + 1 < J ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          U.el || r0(U)
        ) : he;
        L[K] === 0 ? S(
          null,
          x,
          Y,
          ye,
          T,
          q,
          re,
          E,
          B
        ) : Oe && (Ye < 0 || K !== u[Ye] ? Pe(x, Y, ye, 2) : Ye--);
      }
    }
  }, Pe = (M, O, Y, he, T = null) => {
    const { el: q, type: re, transition: E, children: B, shapeFlag: K } = M;
    if (K & 6) {
      Pe(M.component.subTree, O, Y, he);
      return;
    }
    if (K & 128) {
      M.suspense.move(O, Y, he);
      return;
    }
    if (K & 64) {
      re.move(M, O, Y, ne);
      return;
    }
    if (re === lt) {
      n(q, O, Y);
      for (let ie = 0; ie < B.length; ie++)
        Pe(B[ie], O, Y, he);
      n(M.anchor, O, Y);
      return;
    }
    if (re === Qc) {
      V(M, O, Y);
      return;
    }
    if (he !== 2 && K & 1 && E)
      if (he === 0)
        E.beforeEnter(q), n(q, O, Y), Tn(() => E.enter(q), T);
      else {
        const { leave: ie, delayLeave: xe, afterLeave: ke } = E, Ie = () => {
          M.ctx.isUnmounted ? i(q) : n(q, O, Y);
        }, Te = () => {
          q._isLeaving && q[X_](
            !0
            /* cancelled */
          ), ie(q, () => {
            Ie(), ke && ke();
          });
        };
        xe ? xe(q, Ie, Te) : Te();
      }
    else
      n(q, O, Y);
  }, Ge = (M, O, Y, he = !1, T = !1) => {
    const {
      type: q,
      props: re,
      ref: E,
      children: B,
      dynamicChildren: K,
      shapeFlag: J,
      patchFlag: ie,
      dirs: xe,
      cacheIndex: ke,
      memo: Ie
    } = M;
    if (ie === -2 && (T = !1), E != null && (ri(), $a(E, null, Y, M, !0), ii()), ke != null && (O.renderCache[ke] = void 0), J & 256) {
      O.ctx.deactivate(M);
      return;
    }
    const Te = J & 1 && xe, Ye = !za(M);
    let se;
    if (Ye && (se = re && re.onVnodeBeforeUnmount) && Nr(se, O, M), J & 6)
      j(M.component, Y, he);
    else {
      if (J & 128) {
        M.suspense.unmount(Y, he);
        return;
      }
      Te && Ri(M, null, O, "beforeUnmount"), J & 64 ? M.type.remove(
        M,
        O,
        Y,
        ne,
        he
      ) : K && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !K.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== lt || ie > 0 && ie & 64) ? fe(
        K,
        O,
        Y,
        !1,
        !0
      ) : (q === lt && ie & 384 || !T && J & 16) && fe(B, O, Y), he && qe(M);
    }
    const we = Ie != null && ke == null;
    (Ye && (se = re && re.onVnodeUnmounted) || Te || we) && Tn(() => {
      se && Nr(se, O, M), Te && Ri(M, null, O, "unmounted"), we && (M.el = null);
    }, Y);
  }, qe = (M) => {
    const { type: O, el: Y, anchor: he, transition: T } = M;
    if (O === lt) {
      le(Y, he);
      return;
    }
    if (O === Qc) {
      D(M);
      return;
    }
    const q = () => {
      i(Y), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (M.shapeFlag & 1 && T && !T.persisted) {
      const { leave: re, delayLeave: E } = T, B = () => re(Y, q);
      E ? E(M.el, q, B) : B();
    } else
      q();
  }, le = (M, O) => {
    let Y;
    for (; M !== O; )
      Y = m(M), i(M), M = Y;
    i(O);
  }, j = (M, O, Y) => {
    const { bum: he, scope: T, job: q, subTree: re, um: E, m: B, a: K } = M;
    Ah(B), Ah(K), he && Zs(he), T.stop(), q && (q.flags |= 8, Ge(re, M, O, Y)), E && Tn(E, O), Tn(() => {
      M.isUnmounted = !0;
    }, O);
  }, fe = (M, O, Y, he = !1, T = !1, q = 0) => {
    for (let re = q; re < M.length; re++)
      Ge(M[re], O, Y, he, T);
  }, me = (M) => {
    if (M.shapeFlag & 6)
      return me(M.component.subTree);
    if (M.shapeFlag & 128)
      return M.suspense.next();
    const O = m(M.anchor || M.el), Y = O && O[U_];
    return Y ? m(Y) : O;
  };
  let Ae = !1;
  const Fe = (M, O, Y) => {
    let he;
    M == null ? O._vnode && (Ge(O._vnode, null, null, !0), he = O._vnode.component) : S(
      O._vnode || null,
      M,
      O,
      null,
      null,
      null,
      Y
    ), O._vnode = M, Ae || (Ae = !0, yh(he), Eg(), Ae = !1);
  }, ne = {
    p: S,
    um: Ge,
    m: Pe,
    r: qe,
    mt: Ne,
    mc: te,
    pc: F,
    pbc: I,
    n: me,
    o: e
  };
  return {
    render: Fe,
    hydrate: void 0,
    createApp: gS(Fe)
  };
}
function Zc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Vi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function OS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function t0(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (pt(n) && pt(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Xr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && t0(a, s)), s.type === sc && (s.patchFlag === -1 && (s = i[o] = Xr(s)), s.el = a.el), s.type === bi && !s.el && (s.el = a.el);
    }
}
function FS(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const c = e.length;
  for (n = 0; n < c; n++) {
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
function n0(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : n0(t);
}
function Ah(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function r0(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? r0(t.subTree) : null;
}
const i0 = (e) => e.__isSuspense;
function TS(e, t) {
  t && t.pendingBranch ? pt(e) ? t.effects.push(...e) : t.effects.push(e) : H_(e);
}
const lt = /* @__PURE__ */ Symbol.for("v-fgt"), sc = /* @__PURE__ */ Symbol.for("v-txt"), bi = /* @__PURE__ */ Symbol.for("v-cmt"), Qc = /* @__PURE__ */ Symbol.for("v-stc"), Ha = [];
let Yn = null;
function De(e = !1) {
  Ha.push(Yn = e ? null : []);
}
function DS() {
  Ha.pop(), Yn = Ha[Ha.length - 1] || null;
}
let qa = 1;
function Ch(e, t = !1) {
  qa += e, e < 0 && Yn && t && (Yn.hasOnce = !0);
}
function o0(e) {
  return e.dynamicChildren = qa > 0 ? Yn || Do : null, DS(), qa > 0 && Yn && Yn.push(e), e;
}
function ze(e, t, r, n, i, o) {
  return o0(
    Se(
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
function sr(e, t, r, n, i) {
  return o0(
    tt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function a0(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _a(e, t) {
  return e.type === t.type && e.key === t.key;
}
const s0 = ({ key: e }) => e ?? null, el = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? rn(e) || /* @__PURE__ */ wn(e) || yt(e) ? { i: Un, r: e, k: t, f: !!r } : e : null);
function Se(e, t = null, r = null, n = 0, i = null, o = e === lt ? 0 : 1, a = !1, s = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && s0(t),
    ref: t && el(t),
    scopeId: Fg,
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
  return s ? (Wd(c, r), o & 128 && e.normalize(c)) : r && (c.shapeFlag |= rn(r) ? 8 : 16), qa > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Yn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Yn.push(c), c;
}
const tt = LS;
function LS(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === jg) && (e = bi), a0(e)) {
    const s = Bo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Wd(s, r), qa > 0 && !o && Yn && (s.shapeFlag & 6 ? Yn[Yn.indexOf(e)] = s : Yn.push(s)), s.patchFlag = -2, s;
  }
  if (US(e) && (e = e.__vccOpts), t) {
    t = RS(t);
    let { class: s, style: c } = t;
    s && !rn(s) && (t.class = wt(s)), zt(c) && (/* @__PURE__ */ $d(c) && !pt(c) && (c = kn({}, c)), t.style = $t(c));
  }
  const a = rn(e) ? 1 : i0(e) ? 128 : Y_(e) ? 64 : zt(e) ? 4 : yt(e) ? 2 : 0;
  return Se(
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
function RS(e) {
  return e ? /* @__PURE__ */ $d(e) || Xg(e) ? kn({}, e) : e : null;
}
function Bo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: c } = e, p = t ? qr(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && s0(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? pt(o) ? o.concat(el(t)) : [o, el(t)] : el(t)
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
    patchFlag: t && e.type !== lt ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Bo(e.ssContent),
    ssFallback: e.ssFallback && Bo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && jd(
    f,
    c.clone(f)
  ), f;
}
function Aa(e = " ", t = 0) {
  return tt(sc, null, e, t);
}
function xt(e = "", t = !1) {
  return t ? (De(), sr(bi, null, e)) : tt(bi, null, e);
}
function Er(e) {
  return e == null || typeof e == "boolean" ? tt(bi) : pt(e) ? tt(
    lt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : a0(e) ? Xr(e) : tt(sc, null, String(e));
}
function Xr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bo(e);
}
function Wd(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (pt(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Wd(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Xg(t) ? t._ctx = Un : i === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else yt(t) ? (t = { default: t, _ctx: Un }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Aa(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function qr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = wt([t.class, n.class]));
      else if (i === "style")
        t.style = $t([t.style, n.style]);
      else if (ql(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(pt(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Jl(i) && (t[i] = a);
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
const VS = Wg();
let $S = 0;
function zS(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || VS, o = {
    uid: $S++,
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
    scope: new f_(
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
    propsOptions: Jg(n, i),
    emitsOptions: Kg(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: jt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = bS.bind(null, o), e.ce && e.ce(o), o;
}
let _n = null;
const jS = () => _n || Un;
let kl, Ku;
{
  const e = ec(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  kl = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => _n = r
  ), Ku = t(
    "__VUE_SSR_SETTERS__",
    (r) => Ja = r
  );
}
const fs = (e) => {
  const t = _n;
  return kl(e), e.scope.on(), () => {
    e.scope.off(), kl(t);
  };
}, Ih = () => {
  _n && _n.scope.off(), kl(null);
};
function l0(e) {
  return e.vnode.shapeFlag & 4;
}
let Ja = !1;
function HS(e, t = !1, r = !1) {
  t && Ku(t);
  const { props: n, children: i } = e.vnode, o = l0(e);
  kS(e, n, o, t), AS(e, i, r || t);
  const a = o ? GS(e, t) : void 0;
  return t && Ku(!1), a;
}
function GS(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cS);
  const { setup: n } = r;
  if (n) {
    ri();
    const i = e.setupContext = n.length > 1 ? KS(e) : null, o = fs(e), a = us(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = ag(a);
    if (ii(), o(), (s || e.sp) && !za(e) && Rg(e), s) {
      if (a.then(Ih, Ih), t)
        return a.then((c) => {
          Eh(e, c);
        }).catch((c) => {
          nc(c, e, 0);
        });
      e.asyncDep = a;
    } else
      Eh(e, a);
  } else
    c0(e);
}
function Eh(e, t, r) {
  yt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : zt(t) && (e.setupState = Ag(t)), c0(e);
}
function c0(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Tr);
  {
    const i = fs(e);
    ri();
    try {
      uS(e);
    } finally {
      ii(), i();
    }
  }
}
const WS = {
  get(e, t) {
    return vn(e, "get", ""), e[t];
  }
};
function KS(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, WS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function lc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ag(F_(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ja)
        return ja[r](e);
    },
    has(t, r) {
      return r in t || r in ja;
    }
  })) : e.proxy;
}
function BS(e, t = !0) {
  return yt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function US(e) {
  return yt(e) && "__vccOpts" in e;
}
const _t = (e, t) => /* @__PURE__ */ R_(e, t, Ja), YS = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Bu;
const Oh = typeof window < "u" && window.trustedTypes;
if (Oh)
  try {
    Bu = /* @__PURE__ */ Oh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const u0 = Bu ? (e) => Bu.createHTML(e) : (e) => e, XS = "http://www.w3.org/2000/svg", qS = "http://www.w3.org/1998/Math/MathML", Ur = typeof document < "u" ? document : null, Fh = Ur && /* @__PURE__ */ Ur.createElement("template"), JS = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Ur.createElementNS(XS, e) : t === "mathml" ? Ur.createElementNS(qS, e) : r ? Ur.createElement(e, { is: r }) : Ur.createElement(e);
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
      Fh.innerHTML = u0(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Fh.content;
      if (n === "svg" || n === "mathml") {
        const c = s.firstChild;
        for (; c.firstChild; )
          s.appendChild(c.firstChild);
        s.removeChild(c);
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
}, ZS = /* @__PURE__ */ Symbol("_vtc");
function QS(e, t, r) {
  const n = e[ZS];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ml = /* @__PURE__ */ Symbol("_vod"), d0 = /* @__PURE__ */ Symbol("_vsh"), ro = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ml] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Sa(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Sa(e, !0), n.enter(e)) : n.leave(e, () => {
      Sa(e, !1);
    }) : Sa(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Sa(e, t);
  }
};
function Sa(e, t) {
  e.style.display = t ? e[Ml] : "none", e[d0] = !t;
}
const ew = /* @__PURE__ */ Symbol(""), tw = /(?:^|;)\s*display\s*:/;
function nw(e, t, r) {
  const n = e.style, i = rn(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (rn(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && tl(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && tl(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), tl(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[ew];
      a && (r += ";" + a), n.cssText = r, o = tw.test(r);
    }
  } else t && e.removeAttribute("style");
  Ml in e && (e[Ml] = o ? n.display : "", e[d0] && (n.display = "none"));
}
const Th = /\s*!important$/;
function tl(e, t, r) {
  if (pt(r))
    r.forEach((n) => tl(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = rw(e, t);
    Th.test(r) ? e.setProperty(
      io(n),
      r.replace(Th, ""),
      "important"
    ) : e[n] = r;
  }
}
const Dh = ["Webkit", "Moz", "ms"], eu = {};
function rw(e, t) {
  const r = eu[t];
  if (r)
    return r;
  let n = Cn(t);
  if (n !== "filter" && n in e)
    return eu[t] = n;
  n = Ql(n);
  for (let i = 0; i < Dh.length; i++) {
    const o = Dh[i] + n;
    if (o in e)
      return eu[t] = o;
  }
  return t;
}
const Lh = "http://www.w3.org/1999/xlink";
function Rh(e, t, r, n, i, o = u_(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Lh, t.slice(6, t.length)) : e.setAttributeNS(Lh, t, r) : r == null || o && !ug(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Vr(r) ? String(r) : r
  );
}
function Vh(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? u0(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (s !== c || !("_value" in e)) && (e.value = c), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let a = !1;
  if (r === "" || r == null) {
    const s = typeof e[t];
    s === "boolean" ? r = ug(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Ao(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function iw(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const $h = /* @__PURE__ */ Symbol("_vei");
function ow(e, t, r, n, i = null) {
  const o = e[$h] || (e[$h] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, c] = aw(t);
    if (n) {
      const p = o[t] = cw(
        n,
        i
      );
      Ao(e, s, p, c);
    } else a && (iw(e, s, a, c), o[t] = void 0);
  }
}
const zh = /(?:Once|Passive|Capture)$/;
function aw(e) {
  let t;
  if (zh.test(e)) {
    t = {};
    let n;
    for (; n = e.match(zh); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : io(e.slice(2)), t];
}
let tu = 0;
const sw = /* @__PURE__ */ Promise.resolve(), lw = () => tu || (sw.then(() => tu = 0), tu = Date.now());
function cw(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    $r(
      uw(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = lw(), r;
}
function uw(e, t) {
  if (pt(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const jh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dw = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? QS(e, n, a) : t === "style" ? nw(e, r, n) : ql(t) ? Jl(t) || ow(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fw(e, t, n, a)) ? (Vh(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rh(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (pw(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !rn(n))) ? Vh(e, Cn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Rh(e, t, n, a));
};
function fw(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && jh(t) && yt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return jh(t) && rn(r) ? !1 : t in e;
}
function pw(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Cn(t);
  return Array.isArray(r) ? r.some((i) => Cn(i) === n) : Object.keys(r).some((i) => Cn(i) === n);
}
const Hh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return pt(t) ? (r) => Zs(t, r) : t;
};
function hw(e) {
  e.target.composing = !0;
}
function Gh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const nu = /* @__PURE__ */ Symbol("_assign");
function Wh(e, t, r) {
  return t && (e = e.trim()), r && (e = Ed(e)), e;
}
const Kh = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[nu] = Hh(i);
    const o = n || i.props && i.props.type === "number";
    Ao(e, t ? "change" : "input", (a) => {
      a.target.composing || e[nu](Wh(e.value, r, o));
    }), (r || o) && Ao(e, "change", () => {
      e.value = Wh(e.value, r, o);
    }), t || (Ao(e, "compositionstart", hw), Ao(e, "compositionend", Gh), Ao(e, "change", Gh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[nu] = Hh(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ed(e.value) : e.value, c = t ?? "";
    if (s === c)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === c) || (e.value = c);
  }
}, mw = ["ctrl", "shift", "alt", "meta"], gw = {
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
  exact: (e, t) => mw.some((r) => e[`${r}Key`] && !t.includes(r))
}, Gt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = gw[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, yw = /* @__PURE__ */ kn({ patchProp: dw }, JS);
let Bh;
function bw() {
  return Bh || (Bh = IS(yw));
}
const Kd = ((...e) => {
  const t = bw().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = _w(n);
    if (!i) return;
    const o = t._component;
    !yt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, vw(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function vw(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _w(e) {
  return rn(e) ? document.querySelector(e) : e;
}
const Sw = "PanoramaSuite.Debug.Diagnostics", ww = "PanoramaSuite.Debug.ExportDiagnostics", ru = "pano_suite.diagnostics.v1", Uh = "pano_suite.diagnostics.previous.v1", xw = 300, kw = 2e5, Mw = 100, Nw = 20, Pw = 1e3, Aw = 2, Rs = 1024 * 1024;
function pi(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function Cw() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Iw() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Cw,
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
function Ew(e = {}) {
  const t = { ...Iw(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, c = 0, p = 0;
  const f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), m = { created: 0, released: 0, collected: 0 }, _ = { created: 0, collected: 0 }, v = t.FinalizationRegistry ? new t.FinalizationRegistry((ne) => {
    f.delete(ne), m.collected += 1;
  }) : null, S = t.FinalizationRegistry ? new t.FinalizationRegistry((ne) => {
    h.delete(ne), _.collected += 1;
  }) : null, w = /* @__PURE__ */ new Set(), P = { created: 0, lost: 0, restored: 0, disposed: 0 }, W = [], V = /* @__PURE__ */ new Map();
  let D = { count: 0, maxMs: 0 }, y = /* @__PURE__ */ new Map(), z = { count: 0, maxMs: 0 };
  const H = [];
  function te(ne, Ce, M = void 0) {
    W.push(M === void 0 ? { t: t.clock(), type: ne, label: Ce } : { t: t.clock(), type: ne, label: Ce, detail: M }), W.length > Mw && W.shift();
  }
  function oe(ne, Ce, M, O, Y) {
    if (!r || !O || !t.WeakRef) return O;
    const he = { ref: new t.WeakRef(O), label: Y };
    return ne.add(he), Ce == null || Ce.register(O, he), M.created += 1, O;
  }
  function I(ne, Ce = "") {
    return oe(f, v, m, ne, Ce);
  }
  function G(ne, Ce = "") {
    return oe(h, S, _, ne, Ce);
  }
  function X({ label: ne = "", width: Ce, height: M, offscreen: O = !1 } = {}) {
    const Y = globalThis.OffscreenCanvas;
    let he;
    return O && typeof Y < "u" ? he = new Y(Ce, M) : (he = t.document().createElement("canvas"), Ce !== void 0 && M !== void 0 && (he.width = Ce, he.height = M)), I(he, ne);
  }
  function ue(ne) {
    ne.width = 0, ne.height = 0, r && (m.released += 1);
  }
  function Ne(ne = t.document(), Ce = "") {
    var M;
    return G(((M = ne == null ? void 0 : ne.createElement) == null ? void 0 : M.call(ne, "video")) || null, Ce);
  }
  function _e(ne, Ce) {
    if (!r || !ne) return () => {
    };
    const M = { label: Ce, lost: !1, disposed: !1 };
    w.add(M), P.created += 1, te("webgl-created", Ce);
    const O = () => {
      M.disposed || (M.lost = !0, P.lost += 1, te("webglcontextlost", Ce));
    }, Y = () => {
      M.disposed || (M.lost = !1, P.restored += 1, te("webglcontextrestored", Ce));
    };
    return ne.addEventListener("webglcontextlost", O), ne.addEventListener("webglcontextrestored", Y), () => {
      M.disposed || (M.disposed = !0, w.delete(M), P.disposed += 1, te("webgl-disposed", Ce));
    };
  }
  function pe(ne, Ce) {
    return V.set(ne, Ce), () => {
      V.get(ne) === Ce && V.delete(ne);
    };
  }
  function Q() {
    return r ? t.now() : -1;
  }
  function F(ne) {
    if (ne < 0 || !r) return;
    const Ce = t.now() - ne;
    D.count += 1, D.maxMs = Math.max(D.maxMs, Ce);
  }
  function $(ne, Ce) {
    if (Ce < 0 || !r) return;
    const M = t.now() - Ce, O = y.get(ne) ?? { count: 0, maxMs: 0 };
    O.count += 1, O.maxMs = Math.max(O.maxMs, M), y.set(ne, O);
  }
  function de() {
    let ne = 0, Ce = 0, M = 0, O = [0, 0];
    const Y = {};
    for (const he of f) {
      const T = he.ref.deref();
      if (!T) continue;
      ne += 1;
      const q = T.width * T.height;
      q > 0 && (Ce += 1), M += q, q > O[0] * O[1] && (O = [T.width, T.height]);
      const re = Y[he.label] ?? (Y[he.label] = [0, 0]);
      re[0] += 1, re[1] += q;
    }
    return { ...m, alive: ne, sized: Ce, pixels: M, mb: pi(M * 4 / Rs, 1), largest: O, byLabel: Y };
  }
  function Pe() {
    const ne = [];
    let Ce = 0, M = 0;
    for (const O of h) {
      const Y = O.ref.deref();
      if (!Y) continue;
      Ce += 1;
      const he = !Y.paused && !Y.ended;
      he && (M += 1), ne.length < Nw && ne.push({
        label: O.label,
        playing: he,
        src: !!(Y.currentSrc || Y.src),
        size: [Y.videoWidth || 0, Y.videoHeight || 0],
        ready: Y.readyState ?? 0,
        connected: !!Y.isConnected
      });
    }
    return { ..._, alive: Ce, playing: M, list: ne };
  }
  function Ge() {
    const ne = t.now(), Ce = t.memory(), M = {
      t: t.clock(),
      heap: Ce ? { used: pi(Ce.usedJSHeapSize / Rs, 1), total: pi(Ce.totalJSHeapSize / Rs, 1), limit: pi(Ce.jsHeapSizeLimit / Rs, 1) } : null,
      canvas: de(),
      webgl: { ...P, alive: [...w].filter((O) => !O.lost).length },
      video: Pe(),
      frame: { count: D.count, maxMs: pi(D.maxMs), longTasks: z.count, longTaskMaxMs: pi(z.maxMs) },
      renders: Object.fromEntries([...y].map(([O, Y]) => [O, { count: Y.count, maxMs: pi(Y.maxMs) }])),
      sources: Object.fromEntries([...V].map(([O, Y]) => [O, Y()])),
      costMs: pi(p, 3)
    };
    return D = { count: 0, maxMs: 0 }, y = /* @__PURE__ */ new Map(), z = { count: 0, maxMs: 0 }, H.push({ record: M, text: JSON.stringify(M) }), H.length > xw && H.shift(), c += 1, c % Aw === 0 && le(), p = t.now() - ne, M;
  }
  function qe(ne = kw) {
    const Ce = JSON.stringify({ ...o, events: W }).slice(0, -1);
    let M = ne - Ce.length - 14, O = H.length;
    for (; O > 0 && M - H[O - 1].text.length - 1 >= 0; )
      O -= 1, M -= H[O].text.length + 1;
    return `${Ce},"records":[${H.slice(O).map((Y) => Y.text).join(",")}]}`;
  }
  function le() {
    if (!o) return;
    const ne = t.storage();
    if (ne) {
      o.savedAt = t.clock();
      try {
        ne.setItem(ru, qe());
      } catch {
      }
    }
  }
  function j() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", le();
  }
  function fe() {
    var Y;
    if (n) return i;
    n = !0;
    const ne = t.storage();
    if (!ne) return null;
    let Ce = null;
    try {
      if (Ce = ne.getItem(ru), Ce === null) {
        const he = ne.getItem(Uh);
        return i = he === null ? null : JSON.parse(he), i;
      }
      ne.setItem(Uh, Ce), ne.removeItem(ru), i = JSON.parse(Ce);
    } catch {
      return i;
    }
    const M = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], O = M.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${M.length} records kept. Its last records:`,
      JSON.stringify(O)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((Y = M.at(-1)) == null ? void 0 : Y.t) || 0).toISOString()}; ${M.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(O)
    ), i;
  }
  function me(ne) {
    const Ce = ne === !0;
    if (fe(), Ce !== r) {
      if (r = Ce, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, c = 0, H.length = 0, s = t.observeLongTasks((M) => {
          for (const O of M)
            z.count += 1, z.maxMs = Math.max(z.maxMs, O.duration);
        }), t.addUnload(j), a = t.setInterval(Ge, Pw), le();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(j), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", le();
    }
  }
  function Ae() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...W], records: H.map((ne) => ne.record) } : null,
      previous: i
    };
  }
  function Fe() {
    const ne = t.document(), Ce = new Blob([JSON.stringify(Ae(), null, 1)], { type: "application/json" }), M = URL.createObjectURL(Ce), O = ne.createElement("a");
    O.href = M, O.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, O.click(), setTimeout(() => URL.revokeObjectURL(M), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: X,
    releaseCanvas: ue,
    trackCanvas: I,
    createVideo: Ne,
    trackVideo: G,
    watchContext: _e,
    addSource: pe,
    frameStart: Q,
    frameEnd: F,
    renderEnd: $,
    sample: Ge,
    serialize: qe,
    recoverPrevious: fe,
    setEnabled: me,
    exportData: Ae,
    download: Fe
  };
}
const $n = Ew(), xn = $n.createCanvas, Uu = $n.releaseCanvas, iu = $n.trackCanvas, cc = $n.createVideo, Yh = $n.trackVideo, Ow = $n.addSource, Fw = $n.frameStart, Tw = $n.frameEnd;
function f0(e, t) {
  const r = $n.watchContext(e.canvas, t), n = $n.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = $n.frameStart(), c = o(a);
    return $n.renderEnd(t, s), c;
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
const Dw = {
  id: Sw,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => $n.setEnabled(e === !0)
}, Xh = {
  id: ww,
  label: "Export Panorama Suite diagnostics",
  function: () => $n.download()
};
function Co(e, t) {
  const r = xn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Lw() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function qh(e, t = 8) {
  var f;
  const r = (f = e == null ? void 0 : e.getContext) == null ? void 0 : f.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, c = -1, p = -1;
  for (let h = 0; h < i; h += 1)
    for (let m = 0; m < n; m += 1)
      o[(h * n + m) * 4 + 3] <= t || (m < a && (a = m), h < s && (s = h), m > c && (c = m), h > p && (p = h));
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
function Bd(e, t) {
  return xn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function gi(e, t, r) {
  if (!e) return Co(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Zt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function bn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let ou = null, au = null, Jh = null, Zh = null, Jt = null, wa = null;
function Rw() {
  if (au) return au;
  const e = 6, t = 17, r = xn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), au = r, r;
}
function su(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  ou = gi(ou, r, n);
  const i = ou;
  Zt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Zh !== i.ctx && (Jh = i.ctx.createPattern(Rw(), "repeat"), Zh = i.ctx), i.ctx.fillStyle = Jh, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Vw(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function $w(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function zw(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function jw(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Bt = /* @__PURE__ */ new Map(), Ud = 128;
function Hw(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), c = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Bt.has(c)) {
    const W = Bt.get(c);
    return Bt.delete(c), Bt.set(c, W), W;
  }
  Bt.size >= Ud && Bt.delete(Bt.keys().next().value);
  const p = a * 2 + 2, f = a + 1, h = Bd(p, p), m = h.getContext("2d"), _ = s * a, v = a + 1, S = `rgba(${r},${n},${i},${o})`, w = `rgba(${r},${n},${i},0)`, P = m.createRadialGradient(f, f, _, f, f, v);
  return P.addColorStop(0, S), P.addColorStop(1, w), m.fillStyle = P, m.fillRect(0, 0, p, p), Bt.set(c, h), h;
}
function Gw(e, t, r, n, i, o, a) {
  const { r: s, g: c, b: p, a: f } = n, h = Math.max(2, Math.ceil(e) * 2), m = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, i), v = Math.max(0, Math.min(0.99, o)), S = Math.max(0, Math.min(1, a ?? 0)), w = `chisel:${h}:${m}:${r.toFixed(2)}:${s}:${c}:${p}:${f.toFixed(3)}:${_.toFixed(2)}:${v.toFixed(2)}:${S.toFixed(2)}`;
  if (Bt.has(w)) {
    const te = Bt.get(w);
    return Bt.delete(w), Bt.set(w, te), te;
  }
  Bt.size >= Ud && Bt.delete(Bt.keys().next().value);
  const P = Bd(h, m), W = P.getContext("2d"), V = W.createImageData(h, m), D = V.data, y = Math.max(0, e - t), z = Math.max(0, Math.min(1, r)), H = 1 + _;
  for (let te = 0; te < m; te++)
    for (let oe = 0; oe < h; oe++) {
      const I = oe + 0.5 - e, G = te + 0.5 - t, X = Math.max(Math.abs(I) - y, 0), Ne = Math.hypot(X, G) / t;
      if (Ne >= 1) continue;
      const _e = Ne <= z ? 1 : Math.max(0, (1 - Ne) / Math.max(1e-4, 1 - z)), pe = 1 - Ne, Q = 1 + _ * (1 - pe) * (1 - pe), F = 1 - v * pe * pe, $ = Q * F / H;
      let de = 1;
      if (S > 0) {
        const qe = Math.floor((G + t) / 1.5), le = Math.floor((I + e) / 8), j = Qi($o(qe * 41 + 500, le * 19 + 300));
        de = 1 - S * 0.42 * j;
      }
      const Pe = Math.round(255 * Math.min(1, f * _e * $ * de));
      if (Pe <= 0) continue;
      const Ge = (te * h + oe) * 4;
      D[Ge] = s, D[Ge + 1] = c, D[Ge + 2] = p, D[Ge + 3] = Pe;
    }
  return W.putImageData(V, 0, 0), Bt.set(w, P), P;
}
function $o(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Qi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Ww(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, c = t + 0.5 - n, p = Math.max(0, r - n), f = Math.max(Math.abs(s) - p, 0), h = Math.hypot(f, c) / n;
  if (h >= 1) return 0;
  const m = Qi($o(e * 17 + 3, t * 13 + 7)), _ = h + o * 0.22 * (m - 0.5);
  if (_ >= 1) return 0;
  const v = _ <= i ? 1 : Math.max(0, (1 - _) / Math.max(1e-4, 1 - i)), S = Kw(e, t, s, c, r, n), w = o * 0.55;
  if (S < w) return 0;
  const W = 0.45 + 0.55 * ((S - w) / Math.max(1e-4, 1 - w));
  return Math.round(255 * Math.min(1, a * v * W));
}
function Kw(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), c = Qi($o(a * 13 + 700, s * 17 + 400)), p = Math.floor((r + i) / 1.5), f = Math.floor((n + o) / 1.5), h = Qi($o(p * 23 + 800, f * 29 + 500)), m = Qi($o(e * 3 + 100, t * 5 + 200));
  return c * 0.55 + h * 0.3 + m * 0.15;
}
function Bw(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: c } = n, p = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, Math.min(1, i)), m = `crayon:${p}:${f}:${r.toFixed(2)}:${o}:${a}:${s}:${c.toFixed(3)}:${h.toFixed(2)}`;
  if (Bt.has(m)) {
    const W = Bt.get(m);
    return Bt.delete(m), Bt.set(m, W), W;
  }
  Bt.size >= Ud && Bt.delete(Bt.keys().next().value);
  const _ = Bd(p, f), v = _.getContext("2d"), S = v.createImageData(p, f), w = S.data, P = Math.max(0, Math.min(1, r));
  for (let W = 0; W < f; W++)
    for (let V = 0; V < p; V++) {
      const D = Ww(V, W, e, t, P, h, c);
      if (D <= 0) continue;
      const y = (W * p + V) * 4;
      w[y] = o, w[y + 1] = a, w[y + 2] = s, w[y + 3] = D;
    }
  return v.putImageData(S, 0, 0), Bt.set(m, _), _;
}
function p0(e, t, r) {
  var S, w;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = zw(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = Uw(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), c = Number(((S = t == null ? void 0 : t.angle) == null ? void 0 : S.value) ?? 0), p = jw(t, i), f = String(((w = t == null ? void 0 : t.targetSpace) == null ? void 0 : w.viewMode) || ""), h = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && f !== "unwrap", m = t == null ? void 0 : t.scatter, _ = m ? { radius: Number(m.radius ?? 1.5), count: Math.max(1, Math.round(m.count ?? 6)) } : null;
  let v;
  if (n === "chisel") {
    const P = i * s, W = i, V = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), y = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = Gw(P, W, o, a, V, D, y);
  } else if (n === "crayon") {
    const P = i * s, W = i, V = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = Bw(P, W, o, a, V);
  } else
    v = Hw(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: v, radiusPx: i, spacingPx: p, desc: r, aspect: s, angle: c, stampKind: n, scatter: _, latitudeCorrection: h };
}
function Uw(e) {
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
function Yw(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Qh(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(p, f) {
    o === 0 ? e.ctx.drawImage(e.stampTex, p - i, f - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(p, f), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const c = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - c < 0 && s(t + a, r), t + c > a && s(t - a, r);
}
function Yd(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: p, count: f } = e.scatter, h = p * e.radiusPx * i, m = $o(t, r);
    for (let _ = 0; _ < f; _++) {
      const v = Qi(m + _ * 2) * Math.PI * 2, S = Math.sqrt(Qi(m + _ * 2 + 1)) * h, w = t + Math.cos(v) * S, P = r + Math.sin(v) * S, W = Math.max(0.5, e.radiusPx * i * 0.48), V = (0.5 - P / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, y = W * e.aspect * D;
      Qh(e, w, P, W, y);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, c = o * e.aspect * s;
  Qh(e, t, r, o, c);
}
function em(e, t, r) {
  const n = $w(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = p0(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let m = 0; m < n.length; m++) {
    let _ = Number(n[m].u || 0) * i;
    const v = Number(n[m].v || 0) * o;
    m > 0 && Math.abs(_ - s[m - 1].x) > i * 0.5 && (_ += _ < s[m - 1].x ? i : -i), s.push({ x: _, y: v });
  }
  if (Yd(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let c = s[0], p = s[0], f = s[0], h = 0;
  for (let m = 1; m < s.length; m++) {
    const _ = s[m], v = { x: (p.x + _.x) * 0.5, y: (p.y + _.y) * 0.5 };
    m === 1 ? h = Za(a, f.x, f.y, v.x, v.y, h) : h = Nl(a, c, f, v, _, h), c = p, p = _, f = v;
  }
  s.length === 2 ? Za(a, f.x, f.y, p.x, p.y, h) : Nl(a, c, f, p, p, h), e.restore();
}
function nl(e, t, r) {
  var h;
  const n = Array.isArray((h = t == null ? void 0 : t.geometry) == null ? void 0 : h.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = Yw(t), s = [];
  let c = 1 / 0, p = -1 / 0;
  for (let m = 0; m < n.length; m++) {
    const _ = Vw(n[m]);
    let v = Number(_.x || 0) * i;
    m > 0 && Math.abs(v - s[m - 1].x) > i * 0.5 && (v += v < s[m - 1].x ? i : -i), s.push({ x: v, y: Number(_.y || 0) * o }), v < c && (c = v), v > p && (p = v);
  }
  function f(m) {
    e.beginPath(), e.moveTo(s[0].x + m, s[0].y);
    for (let _ = 1; _ < s.length; _++) e.lineTo(s[_].x + m, s[_].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, f(0), c < 0 && f(i), p > i && f(-i), e.restore();
}
function Vs(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    nl(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? em(e, t, r) : (wa = gi(wa, r.width, r.height), Zt(wa), em(wa.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(wa.canvas, 0, 0), e.restore());
}
function $i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Za(e, t, r, n, i, o) {
  const a = n - t, s = i - r, c = Math.hypot(a, s);
  if (c < 1e-9) return o;
  let p = e.spacingPx - o;
  for (; p <= c; ) {
    const f = p / c;
    Yd(e, t + a * f, r + s * f, 1), p += e.spacingPx;
  }
  return c - p + e.spacingPx;
}
function Nl(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, c = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, f = 0, h = s, m = h + c, _ = m + p, v = m - h, S = 16;
  let w = o, P = r.x, W = r.y;
  for (let V = 1; V <= S; V++) {
    const D = h + v * V / S, y = ((h - D) * t.x + (D - f) * r.x) / (h - f), z = ((h - D) * t.y + (D - f) * r.y) / (h - f), H = ((m - D) * r.x + (D - h) * n.x) / (m - h), te = ((m - D) * r.y + (D - h) * n.y) / (m - h), oe = ((_ - D) * n.x + (D - m) * i.x) / (_ - m), I = ((_ - D) * n.y + (D - m) * i.y) / (_ - m), G = ((m - D) * y + (D - f) * H) / (m - f), X = ((m - D) * z + (D - f) * te) / (m - f), ue = ((_ - D) * H + (D - h) * oe) / (_ - h), Ne = ((_ - D) * te + (D - h) * I) / (_ - h), _e = ((m - D) * G + (D - h) * ue) / (m - h), pe = ((m - D) * X + (D - h) * Ne) / (m - h);
    w = Za(e, P, W, _e, pe, w), P = _e, W = pe;
  }
  return w;
}
function Xw(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, c = e.activeStroke;
  let p = t * a;
  if (c && Math.abs(p - c.prev.x) > a * 0.5 && (p += p < c.prev.x ? a : -a), !c) {
    const _ = p0(i, n, o), v = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), S = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), w = String((n == null ? void 0 : n.toolKind) || "") === "eraser", P = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Yd(_, p, s, 1), e.activeStroke = {
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
      layerKind: P,
      pointCount: 1
    }, bn(e);
    return;
  }
  const f = (c.prev.x + p) * 0.5, h = (c.prev.y + s) * 0.5;
  i.globalCompositeOperation = "source-over";
  const m = {
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
  c.pointCount === 1 ? c.distSinceStamp = Za(m, c.lastMidX, c.lastMidY, f, h, c.distSinceStamp) : c.distSinceStamp = Nl(
    m,
    c.pprev,
    { x: c.lastMidX, y: c.lastMidY },
    { x: f, y: h },
    { x: p, y: s },
    c.distSinceStamp
  ), c.pprev = c.prev, c.prev = { x: p, y: s }, c.lastMidX = f, c.lastMidY = h, c.pointCount++, bn(e);
}
function Xd(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Co(t, r), a = {
    descriptor: n,
    committedMask: Co(t, r),
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
    committedPaint: Co(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, c = Co(t, r);
  let p = null, f = "", h = null;
  const m = /* @__PURE__ */ new Map();
  let _ = null;
  function v(ue) {
    return {
      actionGroupId: ue,
      descriptor: n,
      committedPaint: Co(t, r),
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
  function P(ue) {
    var $;
    const Ne = !h || h.length !== ue.length || ue.some((de, Pe) => de !== h[Pe]), _e = f === "paint" && (($ = p ? i.get(p) : s) == null ? void 0 : $.activeStroke) || null;
    let pe = a.displayDirty || s.displayDirty || Ne;
    for (const de of ue) {
      const Pe = i.get(de);
      if (Pe != null && Pe.displayDirty) {
        pe = !0;
        break;
      }
    }
    if (_e && (pe = !0), !pe) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const de of ue) {
      const Pe = i.get(de);
      Pe && (Pe.displayDirty = !1);
    }
    h = [...ue];
    const Q = c.ctx;
    Zt(c);
    const F = !!(_e != null && _e.isEraser);
    for (const de of ue) {
      const Pe = i.get(de);
      if (!Pe) continue;
      const qe = p === Pe.actionGroupId && f === "paint" ? Pe.activeStroke : null;
      if (F)
        Jt = gi(Jt, t, r), Zt(Jt), Jt.ctx.drawImage(Pe.committedPaint.canvas, 0, 0), $i(Jt.ctx, o.canvas), Q.drawImage(Jt.canvas, 0, 0);
      else if (Q.drawImage(Pe.committedPaint.canvas, 0, 0), qe) {
        const le = Pe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, qe.strokeOpacity ?? 1));
        Q.save(), Q.globalAlpha = le, Q.drawImage(o.canvas, 0, 0), Q.restore();
      }
    }
  }
  function W(ue) {
    var _e, pe, Q, F, $;
    for (const de of i.values())
      Zt(de.committedPaint), Zt(de.currentStroke), de.activeStroke = null, bn(de);
    Zt(a.committedMask), Zt(a.currentStroke), a.activeStroke = null, a.painted = !1, m.clear(), bn(a), bn(s), h = null;
    const Ne = [
      ...Array.isArray((pe = (_e = ue == null ? void 0 : ue.painting) == null ? void 0 : _e.paint) == null ? void 0 : pe.strokes) ? ue.painting.paint.strokes : [],
      ...Array.isArray((F = (Q = ue == null ? void 0 : ue.painting) == null ? void 0 : Q.mask) == null ? void 0 : F.strokes) ? ue.painting.mask.strokes : []
    ];
    for (const de of Ne) {
      if ((($ = de == null ? void 0 : de.targetSpace) == null ? void 0 : $.kind) !== "ERP_GLOBAL") continue;
      const Pe = String((de == null ? void 0 : de.layerKind) || "paint"), qe = String((de == null ? void 0 : de.toolKind) || "pen") === "eraser";
      if (Pe === "mask") {
        const le = a.descriptor;
        qe ? (Jt = gi(Jt, le.width, le.height), Zt(Jt), Vs(Jt.ctx, de, le), $i(a.committedMask.ctx, Jt.canvas)) : (Vs(a.committedMask.ctx, de, le), a.painted = !0);
        continue;
      }
      if (qe) {
        Jt = gi(Jt, n.width, n.height), Zt(Jt), Vs(Jt.ctx, de, n);
        for (const le of i.values())
          $i(le.committedPaint.ctx, Jt.canvas), bn(le);
      } else {
        const le = String((de == null ? void 0 : de.actionGroupId) || "__default__"), j = S(le), fe = j.descriptor;
        Vs(j.committedPaint.ctx, de, fe), bn(j);
      }
    }
    P([...i.keys()]);
  }
  function V(ue, Ne) {
    f = String((ue == null ? void 0 : ue.layerKind) || "");
    const _e = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser";
    if (f === "mask")
      p = null, Zt(a.currentStroke), a.activeStroke = null, bn(a);
    else {
      const pe = _e ? s : S(String((ue == null ? void 0 : ue.actionGroupId) || "__default__"));
      p = _e ? "" : String((ue == null ? void 0 : ue.actionGroupId) || "__default__"), Zt(pe.currentStroke), pe.activeStroke = null, bn(pe);
    }
  }
  function D(ue, Ne) {
    var Pe;
    const _e = String((ue == null ? void 0 : ue.layerKind) || "paint"), pe = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser", Q = _e === "mask" ? a : pe ? s : S(String((ue == null ? void 0 : ue.actionGroupId) || p || "__default__")), F = Q.activeStroke, $ = Q.descriptor;
    if (F && F.pointCount > 1) {
      const Ge = Q.currentStroke.ctx;
      Ge.globalCompositeOperation = "source-over";
      const qe = {
        ctx: Ge,
        stampTex: F.stampTex,
        radiusPx: F.radiusPx,
        spacingPx: F.spacingPx,
        desc: $,
        aspect: F.aspect,
        angle: F.angle,
        stampKind: F.stampKind,
        scatter: F.scatter,
        latitudeCorrection: F.latitudeCorrection
      };
      F.pointCount === 2 ? Za(qe, F.lastMidX, F.lastMidY, F.prev.x, F.prev.y, F.distSinceStamp) : Nl(qe, F.pprev, { x: F.lastMidX, y: F.lastMidY }, F.prev, F.prev, F.distSinceStamp);
    }
    Q.lassoPreviewActive && (Zt(Q.currentStroke), nl(Q.currentStroke.ctx, ue, $), Q.lassoPreviewActive = !1);
    const de = _e === "mask" ? a.committedMask : Q.committedPaint;
    if (pe && _e === "paint")
      for (const Ge of i.values())
        $i(Ge.committedPaint.ctx, Q.currentStroke.canvas), bn(Ge);
    else if (pe)
      $i(de.ctx, Q.currentStroke.canvas);
    else {
      _e === "mask" && (a.painted = !0);
      const Ge = Math.max(0, Math.min(1, (F == null ? void 0 : F.strokeOpacity) ?? 1));
      de.ctx.save(), de.ctx.globalAlpha = Ge, de.ctx.drawImage(Q.currentStroke.canvas, 0, 0), de.ctx.restore();
    }
    Lw() && (String((ue == null ? void 0 : ue.toolKind) || ""), String(($ == null ? void 0 : $.kind) || ""), Number(($ == null ? void 0 : $.width) || 0), Number(($ == null ? void 0 : $.height) || 0), String(((Pe = ue == null ? void 0 : ue.targetSpace) == null ? void 0 : Pe.viewMode) || ""), Number((ue == null ? void 0 : ue.aspect) ?? 1), qh(Q.currentStroke.canvas), qh(de.canvas), void 0), Zt(Q.currentStroke), Q.activeStroke = null, bn(Q), m.clear(), p = null, f = "", P([...i.keys()]);
  }
  function y(ue) {
    if (f === "mask")
      Zt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, bn(a);
    else if (f === "paint" && !p)
      Zt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, bn(s);
    else if (p) {
      const Ne = i.get(p);
      Ne && (Zt(Ne.currentStroke), Ne.activeStroke = null, Ne.lassoPreviewActive = !1, bn(Ne));
    }
    m.clear(), p = null, f = "", P([...i.keys()]);
  }
  function z(ue, Ne) {
    var pe;
    if (f = String((ue == null ? void 0 : ue.layerKind) || ""), String(((pe = ue == null ? void 0 : ue.geometry) == null ? void 0 : pe.geometryKind) || "") === "lasso_fill") {
      if (f === "mask")
        Zt(a.currentStroke), nl(a.currentStroke.ctx, ue, a.descriptor), a.lassoPreviewActive = !0, bn(a);
      else {
        const Q = String((ue == null ? void 0 : ue.toolKind) || "") === "eraser", F = Q ? s : S(String((ue == null ? void 0 : ue.actionGroupId) || p || "__default__"));
        p = Q ? "" : String((ue == null ? void 0 : ue.actionGroupId) || p || "__default__"), Zt(F.currentStroke), nl(F.currentStroke.ctx, ue, F.descriptor), F.lassoPreviewActive = !0, bn(F);
      }
      P([...i.keys()]);
    }
  }
  function H(ue) {
    return P(ue ?? [...i.keys()]), {
      displayPaint: c,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function te(ue) {
    return i.get(String(ue)) ?? null;
  }
  function oe() {
    return [...i.keys()];
  }
  function I(ue) {
    var Ge;
    const Ne = i.get(String(ue));
    if (!Ne) return null;
    const _e = f === "paint" && p === Ne.actionGroupId, pe = f === "paint" && ((Ge = p ? i.get(p) : s) == null ? void 0 : Ge.activeStroke) || null, Q = !!(pe != null && pe.isEraser), F = _e ? Ne.activeStroke : null;
    if (!Q && !F) return Ne.committedPaint.canvas;
    const $ = `${Ne.revision}:${s.revision}:${Q}`, de = m.get(Ne.actionGroupId);
    if ((de == null ? void 0 : de.key) === $) return de.surface.canvas;
    const Pe = gi((de == null ? void 0 : de.surface) ?? null, t, r);
    return Zt(Pe), Pe.ctx.drawImage(Ne.committedPaint.canvas, 0, 0), Q ? $i(Pe.ctx, o.canvas) : (Pe.ctx.save(), Pe.ctx.globalAlpha = Ne.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, F.strokeOpacity ?? 1)), Pe.ctx.drawImage(o.canvas, 0, 0), Pe.ctx.restore()), m.set(Ne.actionGroupId, { key: $, surface: Pe }), Pe.canvas;
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
    Zt(Ne);
    const _e = f === "mask" ? a.activeStroke : null;
    return _e != null && _e.isEraser ? (Jt = gi(Jt, t, r), Zt(Jt), Jt.ctx.drawImage(a.committedMask.canvas, 0, 0), $i(Jt.ctx, o.canvas), su(Ne.ctx, Jt.canvas)) : (su(Ne.ctx, a.committedMask.canvas), _e && su(Ne.ctx, o.canvas)), _ = { key: ue, surface: Ne }, Ne.canvas;
  }
  return {
    rebuildCommitted: W,
    beginStroke: V,
    appendStrokePoint: Xw,
    updateActiveStroke: z,
    commitActiveStroke: D,
    cancelActiveStroke: y,
    getErpTarget: H,
    ensureTarget: w,
    getGroupTarget: te,
    getGroupDisplayCanvas: I,
    getMaskDisplayCanvas: X,
    getMaskDisplayRevision: G,
    getAllGroupIds: oe
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Kt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function qd(e, t) {
  let r = Kt(t) - Kt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Yu = 3;
function xa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Pl(e, t = 0) {
  const r = xa(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = xa(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = xa(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = xa(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(xa(t) || 0);
}
function h0(e) {
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
const tm = Math.PI / 180, nm = 0.12, qw = Yu, Jw = 35, Zw = 140, Ca = 100, Qw = 20, rm = 0.8;
function ex(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Ca), 1, 179) * tm;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / tm;
}
function Jd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ca })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, c = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function p(W, V = null) {
    s && s(W, V);
  }
  function f(W, V, D = null, y = performance.now()) {
    return c.drag.active = !0, c.drag.lastX = Number(W || 0), c.drag.lastY = Number(V || 0), c.drag.lastTs = Number(y || performance.now()), c.drag.pointerId = D, c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, c.inertia.lastTs = c.drag.lastTs, c.velHistory = [], p("drag", { phase: "start", x: c.drag.lastX, y: c.drag.lastY, pointerId: D }), !0;
  }
  function h(W, V, D = "pano", y = performance.now()) {
    if (!c.drag.active) return !1;
    const z = Number(y || performance.now()), H = Number(W), te = Number(V), oe = H - c.drag.lastX, I = te - c.drag.lastY;
    c.drag.lastX = H, c.drag.lastY = te, c.drag.lastTs = z;
    const G = n() || { x: 1, y: 1 }, X = Number(G.x || 1), ue = Number(G.y || 1), Ne = { ...t() };
    let _e = 0, pe = 0;
    if (D === "unwrap") {
      const F = i() || { w: 1, h: 1 }, $ = Math.max(1, Number(F.w || 1)), de = Math.max(1, Number(F.h || 1)), Pe = oe / $, Ge = I / de;
      _e = -Pe * 360 * X, pe = Ge * 180 * ue;
    } else {
      const F = o() || { w: 0, h: 0 }, $ = Math.max(1, Number(F.w || 0)), de = Math.max(1, Number(F.h || 0));
      if ($ > 1 && de > 1) {
        const Pe = Ee(Number(Ne.fov || Ca), 1, 179), Ge = Ee(ex(Pe, $, de), 0.1, 179);
        _e = -(oe / $) * Pe * X, pe = I / de * Ge * ue;
      } else
        _e = -oe * nm * X, pe = I * nm * ue;
    }
    Ne.yaw = Kt(Number(Ne.yaw || 0) + _e), Ne.pitch = Ee(Number(Ne.pitch || 0) + pe, -89.9, 89.9), r(Ne), c.velHistory.push({ ts: z, yaw: Ne.yaw, pitch: Ne.pitch });
    let Q = 0;
    for (; Q < c.velHistory.length - 1 && c.velHistory[Q].ts < z - 100; ) Q++;
    return Q > 0 && c.velHistory.splice(0, Q), c.inertia.active = !1, c.inertia.lastTs = z, a(), p("drag", { phase: "move", dx: oe, dy: I, dYaw: _e, dPitch: pe }), !0;
  }
  function m(W = performance.now()) {
    if (!c.drag.active) return !1;
    c.drag.active = !1;
    const V = Number(W || performance.now());
    c.drag.lastTs = V;
    const D = c.velHistory.filter((z) => V - z.ts <= 80);
    if (D.length >= 2) {
      const z = D[0], H = D.at(-1), te = Math.max(1e-3, (H.ts - z.ts) / 1e3);
      let oe = H.yaw - z.yaw;
      oe > 180 && (oe -= 360), oe < -180 && (oe += 360), c.inertia.vx = oe / te, c.inertia.vy = (H.pitch - z.pitch) / te;
    } else
      c.inertia.vx = 0, c.inertia.vy = 0;
    c.velHistory = [];
    const y = Math.hypot(c.inertia.vx, c.inertia.vy);
    return c.inertia.active = y > Qw, c.inertia.lastTs = V, p("drag", { phase: "end", speed: y, inertiaActive: c.inertia.active }), !0;
  }
  function _(W = performance.now()) {
    if (!c.inertia.active) return !1;
    const V = Number(W || performance.now()), D = Math.max(1e-3, (V - (c.inertia.lastTs || V)) / 1e3);
    c.inertia.lastTs = V;
    const y = { ...t() };
    y.yaw = Kt(Number(y.yaw || 0) + c.inertia.vx * D), y.pitch = Ee(Number(y.pitch || 0) + c.inertia.vy * D, -89.9, 89.9);
    const z = Math.exp(-5.5 * D);
    return c.inertia.vx *= z, c.inertia.vy *= z, Math.abs(c.inertia.vx) < rm && Math.abs(c.inertia.vy) < rm && (c.inertia.vx = 0, c.inertia.vy = 0, c.inertia.active = !1), r(y), a(), c.inertia.active;
  }
  function v() {
    const W = c.drag.active || c.inertia.active || c.inertia.vx !== 0 || c.inertia.vy !== 0;
    return c.drag.active = !1, c.drag.pointerId = null, c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, c.velHistory = [], W;
  }
  function S(W) {
    const V = Math.sign(Number(W || 0));
    if (!V) return !1;
    const D = { ...t() }, y = Number(D.fov || Ca);
    return D.fov = Ee(y + V * qw, Jw, Zw), r(D), a(), p("wheel", { deltaSign: V, fovBefore: y, fovAfter: D.fov }), !0;
  }
  function w(W, V = 0) {
    return S(Pl(W, V));
  }
  function P() {
    r({ yaw: 0, pitch: 0, fov: Ca }), c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, a();
  }
  return {
    state: c,
    startDrag: f,
    moveDrag: h,
    endDrag: m,
    stepInertia: _,
    stopMotion: v,
    applyWheel: S,
    applyWheelEvent: w,
    resetView: P
  };
}
const Lt = Math.PI / 180, ln = 180 / Math.PI;
function ar(e, t, r) {
  return { x: e, y: t, z: r };
}
function Al(e, t) {
  return ar(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Cl(e, t) {
  return ar(e.x * t, e.y * t, e.z * t);
}
function lu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Zd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ar(e.x / t, e.y / t, e.z / t);
}
function Vn(e, t) {
  const r = e * Lt, n = t * Lt, i = Math.cos(n);
  return ar(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function Qo(e, t, r = 0) {
  const n = Number(e || 0) * Lt, i = Number(t || 0) * Lt, o = r * Lt, a = Math.cos(n), s = Math.sin(n), c = Math.cos(i), p = Math.sin(i), f = Math.cos(o), h = Math.sin(o);
  return {
    right: ar(
      a * f - s * p * h,
      c * h,
      -s * f - a * p * h
    ),
    up: ar(
      -a * h - s * p * f,
      c * f,
      s * h - a * p * f
    ),
    fwd: ar(s * c, p, a * c)
  };
}
function Il(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Vt(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function tx() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function nx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Vt(n.z_index ?? n.zIndex, t.length);
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
function rx(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function ix(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Vt(e.t, 0), n = Vt(e.widthScale, null), i = Vt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Vt(e.u, null), a = Vt(e.v, null);
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
    const o = Vt(e.u, null), a = Vt(e.v, null);
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
function $s(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = ix(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function ox(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const c = $s(e.points, t, 3);
    return c ? { geometryKind: i, points: c } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = $s(e.points, t, 1);
  if (!o) return null;
  const a = $s(e.rawPoints, t, 1), s = $s(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((c) => ({ ...c })),
    processedPoints: s || o.map((c) => ({ ...c }))
  };
}
function ax(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = rx(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = ox(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Vt(e.size, null), a = Vt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), c = String(e.actionGroupId || "").trim();
  if (!s || !c) return null;
  const p = Vt(e.radiusValue, null), f = String(e.radiusModel || "").trim() || null;
  let h = null;
  if (t === "paint") {
    const m = e.color;
    if (!m || typeof m != "object") return null;
    h = {
      r: Math.max(0, Math.min(1, Vt(m.r, 0))),
      g: Math.max(0, Math.min(1, Vt(m.g, 0))),
      b: Math.max(0, Math.min(1, Vt(m.b, 0))),
      a: Math.max(0, Math.min(1, Vt(m.a, 1)))
    };
  }
  return {
    id: s,
    actionGroupId: c,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
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
function im(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = ax(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function sx(e) {
  if (!e || typeof e != "object") return null;
  const t = Vt(e.u0, null), r = Vt(e.v0, null), n = Vt(e.u1, null), i = Vt(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function lx(e) {
  const t = e || {};
  return {
    du: Vt(t.du, 0) ?? 0,
    dv: Vt(t.dv, 0) ?? 0,
    rot_deg: Vt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Vt(t.scale, 1) ?? 1)
  };
}
function cx(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = sx(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Vt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: lx(e.transform)
  } : null;
}
function ux(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = cx(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function Uo(e) {
  const t = tx();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: nx(e.groups),
    paint: im(e.paint, "paint"),
    mask: im(e.mask, "mask"),
    raster_objects: ux(e.raster_objects)
  };
}
const lr = 1, cr = 179, Xu = 85;
function uc(e) {
  const t = ((ht(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function m0(e, t) {
  let r = ht(e, 0) - ht(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function g0(e, t, { shiftKey: r = !1 } = {}) {
  let n = ht(e, 0) + ht(t, 0) * ln;
  return r && (n = Math.round(n / 15) * 15), uc(n);
}
function ht(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Si(e = {}) {
  const t = Ee(ht(e.hFOV_deg || 90, 90), lr, cr), r = Ee(ht(e.vFOV_deg || 60, 60), lr, cr), n = Math.tan(t * Lt * 0.5), i = Math.tan(r * Lt * 0.5);
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
function eo(e, t) {
  const r = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Si(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Qd(e, t) {
  const r = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ht(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function ef(e, t) {
  const r = Math.max(1e-12, ht(t, 1)), n = Math.max(1e-6, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * ln, lr, cr), a = Ee(2 * Math.atan(i / (2 * r)) * ln, lr, cr);
  return { hFOV_deg: o, vFOV_deg: a };
}
function dx(e, t, r) {
  const n = ht(e == null ? void 0 : e.x, 0), i = ht(e == null ? void 0 : e.y, 0), o = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Si(t), c = Math.max(1e-12, ht(r, 1)), p = 2 * c * s.tanHalfX, f = 2 * c * s.tanHalfY;
  return {
    x: n + (o - p) * 0.5,
    y: i + (a - f) * 0.5,
    w: p,
    h: f,
    focalPx: c
  };
}
function tf(e, t, r = Xu) {
  const n = Math.max(1e-12, ht(t, 1)), i = Ee(ht(r, Xu), 1, 89.999), o = n * Math.tan(i * Lt), a = Math.max(1, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function y0(e, t, r) {
  const n = Math.max(1e-12, ht(t, 1));
  return {
    x: (ht(r == null ? void 0 : r.x, 0) - ht(e == null ? void 0 : e.x, 0)) / n,
    y: -(ht(r == null ? void 0 : r.y, 0) - ht(e == null ? void 0 : e.y, 0)) / n
  };
}
function fx(e, t) {
  const r = Ee(ht(e, 90), lr, cr), n = Math.max(1e-6, ht(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * Lt * 0.5) / n) * ln,
    lr,
    cr
  );
}
function rl(e, t) {
  const r = Ee(ht(e, 60), lr, cr), n = Math.max(1e-6, ht(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * Lt * 0.5) * n) * ln,
    lr,
    cr
  );
}
function om(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function px(e, t) {
  const r = om(e, 1), n = om(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (p, f) => f ? s(f, p % f) : p, c = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / c))}:${Math.max(1, Math.round(a / c))}`;
}
function oo(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Lt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Lt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Ui(e) {
  const t = oo(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || px(t, 1);
}
function nf(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ui(t), t;
}
function b0({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, lr, cr) : Ee(Math.min(42, ht(i, 100) * 0.42), 8, 96);
  return nf({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ht(t, 0),
    pitch_deg: Ee(ht(r, 0), -89.9, 89.9),
    roll_deg: uc(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Qr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ui(e);
}
function v0(e, t) {
  const r = Si(e), n = ht(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * ln, o = 2 * Math.atan(r.tanHalfY * n) * ln;
  return i < lr || i > cr || o < lr || o > cr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function _0(e, t, r = Yu) {
  const n = Math.sign(ht(t, 0)), i = Math.abs(ht(r, Yu));
  if (!n || !(i > 0)) return null;
  const o = Si(e), a = o.hFovDeg + n * i;
  if (a < lr || a > cr) return null;
  const s = Math.tan(a * Lt * 0.5);
  return v0(e, s / o.tanHalfX);
}
function S0(e, t) {
  const r = Si(e), n = Qo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ht(t == null ? void 0 : t.x, 0), o = ht(t == null ? void 0 : t.y, 0);
  return Zd(Al(Al(n.fwd, Cl(n.right, i)), Cl(n.up, o)));
}
function hx(e) {
  return ar(e.x, e.y, -e.z);
}
function il(e) {
  return ar(e.x, e.y, -e.z);
}
function jn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = Qo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function w0(e) {
  const t = il(ar(e[0][0], e[1][0], e[2][0])), r = il(ar(e[0][1], e[1][1], e[2][1])), n = il(ar(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), c = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * ln, pitchDeg: o * ln, rollDeg: c * ln };
}
function Qa(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function ao(e) {
  const [[t, r, n], [i, o, a], [s, c, p]] = e, f = t + o + p;
  if (f > 0) {
    const m = 0.5 / Math.sqrt(f + 1);
    return { x: (c - a) * m, y: (n - s) * m, z: (i - r) * m, w: 0.25 / m };
  }
  if (t > o && t > p) {
    const m = 2 * Math.sqrt(1 + t - o - p);
    return { x: 0.25 * m, y: (r + i) / m, z: (n + s) / m, w: (c - a) / m };
  }
  if (o > p) {
    const m = 2 * Math.sqrt(1 + o - t - p);
    return { x: (r + i) / m, y: 0.25 * m, z: (a + c) / m, w: (n - s) / m };
  }
  const h = 2 * Math.sqrt(1 + p - t - o);
  return { x: (n + s) / h, y: (a + c) / h, z: 0.25 * h, w: (i - r) / h };
}
function zs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Yi = 1e-6, qu = 1e-6, mx = 1e-9;
function es(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function gx(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let c = 0; c < 50; c += 1) {
    const p = 0.5 * (a + s);
    es(0, r, i, 1, p) < t ? a = p : s = p;
  }
  return es(0, n, o, 1, 0.5 * (a + s));
}
function Yo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Xo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((m) => -m / i), s = n.map((m) => m / o);
  if (a.reduce((m, _, v) => m + _ * s[v], 0) < 0) return r.map(() => 0);
  const c = a.map((m, _) => (m * o + s[_] * i) / (i + o)), p = (m) => Math.sqrt(m.reduce((_, v) => _ + v * v, 0)), f = 3 * Math.min(p(a), p(s)), h = p(c);
  return h <= f ? c : c.map((m) => m * f / h);
}
function x0(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((f, h) => o[h] - f);
  let c = s;
  Yo(e, n) && (c = Xo(t, n, r[n - 1].map((f, h) => f - i[h]), s).map((f) => f * a));
  let p = s;
  return Yo(e, n + 1) && (p = Xo(t, n + 1, s.map((f) => -f), r[n + 2].map((f, h) => f - o[h])).map((f) => f * a)), [c.map((f) => f / 3), p.map((f) => -f / 3)];
}
function k0(e, t, r, n, i) {
  const [[o], [a]] = x0(e, t, r.map((s) => [s]), n);
  return es(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function yx(e, t, r, n) {
  var p, f;
  const i = e.map((h) => h.value);
  let [o, a] = x0(e, t, i, r);
  o = ((p = e[r].handles) == null ? void 0 : p.out) ?? o, a = ((f = e[r + 1].handles) == null ? void 0 : f.in) ?? a;
  const s = i[r], c = i[r + 1];
  return [0, 1, 2].map((h) => es(s[h], s[h] + o[h], c[h] + a[h], c[h], n));
}
function El([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function bx(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function cu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function vx([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Ju(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function To(e, t) {
  return vx(El([-e[0], -e[1], -e[2], e[3]], t));
}
function uu(e, t, r) {
  return El(e, Ju(To(e, t).map((n) => r * n)));
}
function du(e, t) {
  const r = bx(e, t);
  if (Math.abs(r) > qu) return r < 0;
  const [n, i, o] = To(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > qu) return a < 0;
  return !1;
}
function js(e) {
  const { x: t, y: r, z: n, w: i } = ao(jn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Zu(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function _x(e, t, r, n) {
  const i = js(e[r].value);
  let o = js(e[r + 1].value);
  du(i, o) && (o = cu(o));
  const a = t[r + 1] - t[r], s = To(i, o);
  let c = s;
  if (Yo(e, r)) {
    let y = js(e[r - 1].value);
    du(y, i) && (y = cu(y)), c = Xo(t, r, To(i, y), s).map((z) => z * a);
  }
  let p = s;
  if (Yo(e, r + 1)) {
    let y = js(e[r + 2].value);
    du(o, y) && (y = cu(y)), p = Xo(t, r + 1, To(o, i), To(o, y)).map((z) => z * a);
  }
  const f = El(i, Ju(c.map((y, z) => 0.5 * (y - s[z])))), h = El(o, Ju(s.map((y, z) => 0.5 * (y - p[z])))), [m, _, v, S] = uu(uu(i, o, n), uu(f, h, n), 2 * n * (1 - n)), { yawDeg: w, pitchDeg: P, rollDeg: W } = w0(Qa({ x: m, y: _, z: v, w: S })), V = e[r].value, D = e[r + 1].value;
  return {
    yaw_deg: Zu(w, V.yaw_deg, D.yaw_deg, n),
    pitch_deg: P,
    roll_deg: Zu(W, V.roll_deg, D.roll_deg, n)
  };
}
function ts(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ol(e) {
  return Math.sqrt(ts(e, e));
}
function Fl(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function M0(e, t) {
  const r = ts(e, t), n = t.map((a, s) => a - r * e[s]), i = Ol(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Io(e, t) {
  const r = Ol(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function Hs(e, t, r) {
  return Io(e, M0(e, t).map((n) => r * n));
}
function fu(e, t) {
  const r = Fl(e[t].value), n = Fl(e[t + 1].value), i = ts(r, n), o = i < 0 && Ol(n.map((c, p) => c - i * r[p])) <= qu;
  let a;
  if (o) {
    const c = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(c), 0, -Math.PI * Math.sin(c)];
  } else
    a = M0(r, n);
  const s = Ol(a);
  return [a, a.map((c, p) => Math.cos(s) * c - s * Math.sin(s) * r[p]), o];
}
function Sx(e, t, r, n) {
  const i = Fl(e[r].value), o = Fl(e[r + 1].value), [a, s, c] = fu(e, r);
  let p = a, f = s;
  const h = t[r + 1] - t[r];
  Yo(e, r) && (p = Xo(t, r, fu(e, r - 1)[1].map((V) => -V), p).map((V) => V * h)), Yo(e, r + 1) && (f = Xo(t, r + 1, f.map((V) => -V), fu(e, r + 1)[0]).map((V) => V * h));
  let m, _, v;
  if (c) {
    const V = Math.PI, D = es(0, ts(p, a) / V / 3, V - ts(f, s) / V / 3, V, n);
    [m, _, v] = Io(i, a.map((y) => D * y / V));
  } else {
    const V = Hs(Io(i, p.map((z) => z / 3)), Io(o, f.map((z) => -z / 3)), n), D = Hs(Io(i, p.map((z) => n * z / 3)), V, n), y = Hs(V, Io(o, f.map((z) => -(1 - n) * z / 3)), n);
    [m, _, v] = Hs(D, y, n);
  }
  const S = Math.hypot(m, v), w = e[r].value.yaw_deg, P = e[r + 1].value.yaw_deg;
  return { yaw_deg: S <= mx ? w + (P - w) * n : Zu(Math.atan2(m, v) * 180 / Math.PI, w, P, n), pitch_deg: Math.atan2(_, S) * 180 / Math.PI };
}
function wx(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = k0(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function xx(e, t, r, n) {
  return k0(e, t, e.map((i) => i.value), r, n);
}
const kx = { position: yx, rotation: _x, direction: Sx, size: wx };
function Xt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return zs(e[t].value);
  if (r <= n[0].frame + Yi) return zs(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Yi) return zs(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Yi; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= Yi || a.easing === "hold") return zs(a.value);
  const s = n.map((p) => p.frame), c = gx(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (kx[t] ?? xx)(n, s, o, c);
}
function Qu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Mx(e) {
  return Math.min(1, Math.max(0, e));
}
function N0(e) {
  return Math.max(1e-6, e);
}
function P0(e, t) {
  return t - (e.start - e.in);
}
function qo(e, t) {
  return t >= e.start - Yi && (e.duration === null || t < e.start + e.duration - Yi);
}
function rf(e, t) {
  return {
    position: Xt(e, "position", t),
    ...Xt(e, "rotation", t),
    hFOV_deg: Qu(Xt(e, "fov", t)),
    aspect: e.aspect
  };
}
function dc(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = P0(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : rf(n, r),
    scene: {
      active: i.visible && qo(i.clip, r),
      clip_frame: o,
      position: Xt(i, "position", o),
      ...Xt(i, "rotation", o),
      scale: N0(Xt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => to(a, r))
  };
}
function Nx(e, t) {
  if (e.placement === "world")
    return {
      position: Xt(e, "position", t),
      ...Xt(e, "rotation", t),
      scale: N0(Xt(e, "scale", t))
    };
  const r = Xt(e, "size", t);
  return {
    ...Xt(e, "direction", t),
    roll_deg: Xt(e, "roll", t),
    hFOV_deg: Qu(r.hFOV_deg),
    vFOV_deg: Qu(r.vFOV_deg)
  };
}
function to(e, t) {
  const r = P0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && qo(e.clip, t),
    clip_frame: r,
    ...Nx(e, r),
    opacity: Mx(Xt(e, "opacity", r))
  };
}
const Px = 2, Ax = ["sky", "world"], ed = ["perspective", "erp"], Cx = ["input", "output", "temp"], A0 = [0.42, 0, 0.58, 1], C0 = 1, of = 1e3, td = 1e7, af = td;
function un(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function tn(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function sf(e, t) {
  const r = tn(e, t);
  return r !== null && r > 0 ? r : t;
}
function zn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function fc(e) {
  const t = tn(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ol(e) {
  const t = fc(e);
  return t === null ? null : zn(t, -td, td);
}
function ea(e) {
  const t = sf(e, null);
  return t === null ? null : zn(t, C0, of);
}
function I0(e) {
  const t = fc(e);
  return t !== null && t >= 1 ? Math.min(t, af) : null;
}
function ns(e, t) {
  return typeof e == "boolean" ? e : t;
}
function E0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => tn(r, null));
  return t.includes(null) ? null : t;
}
function O0(e) {
  return E0(e) || [0, 0, 0];
}
function F0(e) {
  const t = un(e) ? e : {};
  return {
    yaw_deg: tn(t.yaw_deg, 0),
    pitch_deg: zn(tn(t.pitch_deg, 0), -90, 90),
    roll_deg: tn(t.roll_deg, 0)
  };
}
function Ix(e) {
  return zn(tn(e, 90), 0.1, 179);
}
function Ex(e) {
  return sf(e, 1);
}
function Ox(e) {
  const t = un(e) ? e : {};
  return {
    yaw_deg: tn(t.yaw_deg, 0),
    pitch_deg: zn(tn(t.pitch_deg, 0), -90, 90)
  };
}
function Fx(e) {
  return tn(e, 0);
}
function Tx(e) {
  const t = un(e) ? e : {};
  return {
    hFOV_deg: zn(tn(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: zn(tn(t.vFOV_deg, 20), 0.1, 179)
  };
}
function T0(e) {
  return zn(tn(e, 1), 0, 1);
}
const lf = [["position", O0], ["rotation", F0], ["fov", Ix]], pc = [["position", O0], ["rotation", F0], ["scale", Ex]], cf = [["direction", Ox], ["roll", Fx], ["size", Tx], ["opacity", T0]], uf = [...pc, ["opacity", T0]];
function Dx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => tn(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...A0];
}
function Lx(e) {
  if (!un(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = E0(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function Rx(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!un(i)) continue;
    const o = ol(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: Dx(i.easing) }, s = r ? Lx(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function df(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = un(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: Rx(o.keyframes, i, n === "position") };
  }
  return r;
}
function D0(e) {
  const t = un(e) ? e : {}, r = ol(t.start), n = ol(t.in), i = ol(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Vx(e) {
  const t = un(e) ? e : {}, r = zn(tn(t.x0, 0), 0, 1), n = zn(tn(t.y0, 0), 0, 1), i = zn(tn(t.x1, 1), 0, 1), o = zn(tn(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function $x(e) {
  if (!un(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Cx.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function zx(e) {
  const t = $x(e.source);
  if (!t) return null;
  const r = Ax.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: D0(e.clip),
    visible: ns(e.visible, !0),
    locked: ns(e.locked, !1),
    crop: Vx(e.crop),
    ...df(e, n ? uf : cf)
  };
  return n || (i.z_index = fc(e.z_index) ?? 0), i;
}
function jx(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = un(o) ? zx(o) : null;
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
function L0(e) {
  if (!un(e)) return null;
  const t = ed.includes(e.projection) ? e.projection : ed[0];
  return { aspect: sf(e.aspect, 1), projection: t, visible: ns(e.visible, !0), ...df(e, lf) };
}
function ff() {
  return L0({});
}
function Tl(e) {
  const t = un(e.timeline) ? e.timeline : {}, r = un(e.scene) ? e.scene : {};
  return {
    version: Px,
    timeline: {
      fps: ea(t.fps) ?? 24,
      length: I0(t.length)
    },
    camera: L0(e.camera),
    scene: { clip: D0(r.clip), visible: ns(r.visible, !0), ...df(r, pc) },
    stickers: jx(e.stickers),
    painting: Uo(e.painting),
    painting_layer: un(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ns(e.painting_visible, !0)
  };
}
function Hx(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!un(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function Gx(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!un(t)) return null;
  const r = zn(tn(t.hFOV_deg, 90), 1, 179), n = zn(tn(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Wx(e) {
  const t = un(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(un) : [];
  return r.sort((n, i) => tn(n.z_index, 0) - tn(i.z_index, 0)), Tl({
    camera: Gx(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: Hx(n, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return Tl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!un(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? Wx(t) : Tl(t);
}
const pu = {
  state: { painting_visible: !0 },
  camera: { projection: ed[0], visible: !0 },
  scene: { visible: !0 }
};
function hu(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function nd(e) {
  return JSON.stringify({
    ...hu(e, pu.state),
    camera: e.camera && hu(e.camera, pu.camera),
    scene: hu(e.scene, pu.scene)
  });
}
function mu(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function am(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function rs(e, t) {
  const r = ea(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => fc(s * n), { length: o } = e.timeline, a = am(e.scene.clip, i);
  return Tl({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...mu(e.camera, lf, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...mu(e.scene, pc, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: c, anchor: p, newAnchor: f } = am(s.clip, i), h = s.placement === "world" ? uf : cf;
      return { ...s, clip: c, ...mu(s, h, i, p, f) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function gu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function R0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function V0(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Yi);
}
function $0(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? R0(e.keyframes[n - 1].easing) : [...A0];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function Sn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = gu(i.value, n);
    return;
  }
  const o = V0(i, r);
  o ? o.value = gu(o.value, n) : $0(i, r, gu(Xt(e, t, r), n));
}
function ta(e) {
  return e.placement === "world" ? uf.map(([t]) => t) : e.placement === "sky" ? cf.map(([t]) => t) : (e.clip ? pc : lf).map(([t]) => t);
}
function Kx(e, t) {
  for (const r of ta(e))
    V0(e[r], t) || $0(e[r], t, Xt(e, r, t));
}
function Bx(e) {
  const t = ta(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function yu(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function Ux(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Yx(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((c) => i.has(c.frame))) continue;
    const s = Xt(e, o, n);
    a.keyframes = a.keyframes.filter((c) => !i.has(c.frame)), a.keyframes.length || (a.value = s);
  }
}
function Xx(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], c = s.keyframes.filter((f) => o.has(f.frame)).map((f) => ({ ...f, frame: f.frame + n })), p = new Set(c.map((f) => f.frame));
    s.keyframes = [
      ...s.keyframes.filter((f) => !o.has(f.frame) && !p.has(f.frame)),
      ...c
    ].sort((f, h) => f.frame - h.frame);
  }
  return n;
}
function z0(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function qx(e, t, r) {
  const n = z0(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function Jx(e, t, r, n) {
  for (const i of z0(e, t, r)) i.easing = R0(n);
}
function Zx(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Qx(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function ek(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function tk(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Dl(e) {
  return ta(e).map((t) => e[t]);
}
function nk(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? Dl(e.camera).some((n) => n.keyframes.length > 0) : j0(e, { camera: r });
}
function Ll(e) {
  return Dl(e).some((t) => t.keyframes.length > 0) || !!e.clip && !tk(e.clip);
}
function j0(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Ll);
}
const rk = 1e5;
function H0(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of Dl(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const c of Dl(a))
      for (const p of c.keyframes) o = Math.max(o, s.start - s.in + p.frame + 1);
  }
  return Number.isFinite(o) ? o : rk;
}
function ik(e) {
  return e > 0 ? ea(Math.min(e, of)) : null;
}
function ok(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : I0(Math.max(1, Math.min(e, af)));
}
const bu = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], ak = 2e3;
function sk(e, t, r = 56) {
  const n = bu.find((o) => o * t >= r) || bu[bu.length - 1], i = [];
  for (let o = 0; o < e && i.length < ak; o += n) i.push(o);
  return i;
}
function lk(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Gs = { text: null, parsed: null };
function Rn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Rl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function ck({
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
    painting: Uo(null),
    painting_layer: null,
    ui_settings: Rl(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function G0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function uk(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function dk(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function fk(e) {
  return Array.isArray(e) ? e.map((t) => nf(t)) : [];
}
function pk(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function W0(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = ck(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Gs.text === i ? o = Gs.parsed : (o = JSON.parse(i), Gs = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: uk(o.assets),
      stickers: dk(o.stickers),
      shots: fk(o.shots),
      painting: Uo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Rl(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Rl({ ...s.ui_settings, ...a })), s.output_preset = G0(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = Rn(r.coverage), delete s.editor_history, s;
  } catch {
    return Gs = { text: i, parsed: null }, n;
  }
}
function hk(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function mk(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function gk(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function K0(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: c = !1 } = t, p = ea(t.fps);
  let f;
  try {
    f = Dr(e);
  } catch {
    f = Dr(null);
  }
  p && p !== f.timeline.fps && (f = rs(f, p));
  const h = c && f.camera === null;
  if (h && (f = { ...f, camera: ff() }), s) {
    let m = Dr(s);
    p && p !== m.timeline.fps && (m = rs(m, p)), f = { ...m, camera: f.camera, cutout_state: f };
  }
  return {
    ...f,
    ...h ? { default_camera: !0 } : {},
    coverage: Rn(i),
    bg_color: n,
    output_preset: G0(r),
    ui_settings: Rl(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function yk(e, t) {
  e.cutout_state && (e.cutout_state = rs(e.cutout_state, t));
  const r = rs(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of ta(o)) o[s].keyframes = a[s].keyframes;
    }
}
function pf(e, t) {
  const r = to(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const bk = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function sm(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function vk(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[bk[r]].keyframes.length));
}
function B0(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = sm(r, ["yaw_deg", "pitch_deg"]), o = sm(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && Sn(e, "direction", n, i), r.rot_deg !== void 0 && Sn(e, "roll", n, r.rot_deg), Object.keys(o).length && Sn(e, "size", n, o);
}
const hc = ["position_x", "position_y", "position_z"], mc = "camera";
function lm(e, t) {
  const r = rf(e, t);
  return nf({
    id: mc,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: fx(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function _k(e) {
  return Dr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Kt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function Sk(e) {
  return e - 360 * Math.round(e / 360);
}
function wk(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + Sk(r[o] - n[o]));
  Object.keys(i).length && Sn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && Sn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * Lt * 0.5) / Math.tan(r.vFOV_deg * Lt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && Sn(e, "position", t, [...r.position]);
}
function xk(e, t) {
  const r = Xt(e, "position", t), n = Xt(e, "rotation", t);
  return {
    ...Object.fromEntries(hc.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Xt(e, "fov", t)
  };
}
function kk(e, t, r, n) {
  const i = hc.indexOf(r);
  if (i >= 0) {
    const o = Xt(e, "position", t);
    o[i] = n, Sn(e, "position", t, o);
  } else r === "hFOV_deg" ? Sn(e, "fov", t, n) : Sn(e, "rotation", t, { [r]: n });
}
function Mk(e, t, r) {
  Sn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function Nk(e, t) {
  const r = to(e, t);
  return {
    ...Object.fromEntries(hc.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function Pk(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = hc.indexOf(r);
  if (o >= 0) {
    const a = Xt(e, "position", i);
    a[o] = n, Sn(e, "position", i, a);
  } else r === "scale" ? Sn(e, "scale", i, n) : r === "opacity" ? Sn(e, "opacity", i, n / 100) : Sn(e, "rotation", i, { [r]: n });
}
function Ak(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && Sn(e, i, n, r[i]);
}
function Ck(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function Ik(e, t, r) {
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
function al(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function U0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function hf(e, t, r, n) {
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
function Ek(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Kt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function rd(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Y0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function X0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function q0(e) {
  e.default_camera && JSON.stringify(Dr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(ff()) && delete e.default_camera;
}
function J0(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = Dr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(ff()) && (r.camera = null), nd(r);
}
function Z0(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Dr(r);
    if (nd(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && nd(rs(i, o)) === t;
  } catch {
    return !1;
  }
}
const vu = 0.15, Ok = 0.01, Fk = 1e-3, Tk = 0.05, Dk = 4, cm = 250, Lk = 16, yr = 1, Rk = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Xn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Lr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function gc(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function na(e, t, r = 0) {
  const n = jn(e, t, r), i = Lr(n, 2);
  return { right: Lr(n, 0), up: Lr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function Vk(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function id(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function $k(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : id(e, "3dof", r);
}
function zk(e) {
  return na(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function jk(e) {
  return Xn(e.position, na(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function wi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Ga(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function mf(e, t) {
  return Ga(wi(t, e.position), na(e.yaw_deg, e.pitch_deg).forward);
}
function gf(e) {
  return Math.max(e, 1e-6) * Tk;
}
function od(e, t, r = null, n = yr) {
  if (t) return t;
  const i = gf(n);
  if (r && mf(e, r) > 0) {
    const o = wi(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Xn(e.position, o, i / a);
  }
  return Xn(e.position, na(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Q0(e, t = yr) {
  return Math.max(e.distance, gf(t));
}
function ey(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > Dk ? !1 : t.time - e.time < cm || e.cost > Lk && t.time - e.wheelTime < cm;
}
function yf(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * Lt);
  return { tanX: n, tanY: n * r / t };
}
function um(e, t, r, n, i = jk(e)) {
  const o = e.roll_deg ?? 0, [a, s] = Hk(t, r, o), c = Kt(e.yaw_deg + a / n * 360), p = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), f = jn(e.yaw_deg, e.pitch_deg, o), h = jn(c, p, o), m = wi(e.position, i), _ = [0, 1, 2].map((S) => Ga(Lr(f, S), m)), v = { ...e, yaw_deg: c, pitch_deg: p, position: Xn(i, gc(h, _)) };
  return { ...v, distance: mf(v, i) };
}
function Hk(e, t, r) {
  const n = Math.cos(r * Lt), i = Math.sin(r * Lt);
  return [e * n + t * i, t * n - e * i];
}
function dm(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = zk(e), c = 2 * o * yf(e, n, i).tanY / i;
  return { ...e, position: Xn(Xn(e.position, a, -t * c), s, r * c), distance: o };
}
function ty(e, t, r, n = yr) {
  const i = wi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * Ok, c = r > 0 ? Math.min(Math.max(o * vu, s), o - a * Fk) : -Math.max(o * vu / (1 - vu), s);
  if (r > 0 && c <= 0) return e;
  const p = { ...e, position: Xn(e.position, i, c / o) };
  return { ...p, distance: Math.max(mf(p, t), gf(n)) };
}
function ny(e, t, r, n) {
  const { tanX: i, tanY: o } = yf(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: c } = na(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Xn(t.center, c, -s), distance: s };
}
function bf(e, t, r, n = null) {
  return ry({
    quaternion: ao(jn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(yf(e, t, r).tanY) * ln,
    aspect: t / r
  }, e.position, e.distance, n);
}
function ry(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: yr }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function is(e, t, r, n) {
  const { right: i, up: o, forward: a } = iy(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], c = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(c > e.near)) return null;
  const p = Math.tan(e.fovY_deg * 0.5 * Lt), f = p * e.aspect, h = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], m = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + h / c / f), y: n * 0.5 * (1 - m / c / p), z: c };
}
function iy(e) {
  const t = Qa(e.quaternion), r = Lr(t, 2);
  return { right: Lr(t, 0), up: Lr(t, 1), forward: r.map((n) => -n) };
}
function fm(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function Gk({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function oy(e, t) {
  if (!e || !t.active) return null;
  const r = Bk(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: ad(t),
    itemQuaternion: e.kind === "splat" ? Rk : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Wk(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = oy(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function Kk(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function Bk(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function ad(e) {
  return {
    position: [...e.position],
    quaternion: ao(jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function sd(e, t) {
  return Xn(e.position, gc(jn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function ld(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function cd({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function ud(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function Uk(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...cd(t).map((o) => sd(e.scene, o)));
  for (const o of r) i.push(...vf(o));
  for (const { box: o, value: a } of n) i.push(...cd(o).map((s) => sd(a, s)));
  return i;
}
function Yk(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ao(jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: jn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function vf(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Xn(e.position, gc(e.rotation, [n, i, 0])));
}
function Xk(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? ud(vf(i)) : o != null && o.box ? ud(cd(ld(o.kind, o.box)).map((a) => sd(n, a))) : { center: [...n.position], radius: n.scale };
}
const qk = 2, Jk = 0.5, Zk = 30;
function ay(e, t) {
  const r = wi(t, e), n = Math.atan2(r[0], -r[2]) * ln, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * ln;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function Qk(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * Jk : qk, o = t ? [...t] : Xn(e.position, na(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...wi(o, e.position)), s = a > 0 ? ay(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, c = 2 * Math.max(a, 1e-3) * Math.tan(Zk * 0.5 * Lt);
  return { position: o, rotation: s, scale: c };
}
function pm(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function eM(e) {
  return [0, 1, 2].map((t) => Lr(e, t));
}
function hm(e, t, r, n) {
  if (e === "translate") return { position: Xn(t.position, wi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * oM(r.scale, n.scale) / r.scale };
  const i = pm(Qa(n.quaternion), eM(Qa(r.quaternion))), o = pm(i, jn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: c } = w0(o);
  return Math.abs(s) <= tM ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: c + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: nM(o, t.yaw_deg) } };
}
const tM = 89.9;
function nM(e, t) {
  const r = Lr(e, 0), n = Lr(e, 1), i = Math.cos(t * Lt), o = Math.sin(t * Lt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * ln + 0;
}
const rM = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function iM(e, t, r, n, i) {
  if (!is(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = iy(e), c = wi(t, e.position), p = Ga(c, o), f = Ga(c, a), h = Ga(c, s), m = Math.tan(e.fovY_deg * 0.5 * Lt), _ = m * e.aspect, v = Math.hypot(p, f, h) * rM[r] * Math.min(1.9 * m, 7) / 4;
  if (!(h > v)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const S = (D) => {
    const y = v * Math.sqrt(D * D + h * h - v * v);
    return [(D * h - y) / (h * h - v * v), (D * h + y) / (h * h - v * v)];
  }, [w, P] = S(p), [W, V] = S(f);
  return {
    minX: n * 0.5 * (1 + w / _),
    maxX: n * 0.5 * (1 + P / _),
    minY: i * 0.5 * (1 - V / m),
    maxY: i * 0.5 * (1 - W / m)
  };
}
function oM(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function aM(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function sy(e, t) {
  const r = jn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * Lt) * t, i = n / e.aspect, o = (p, f, h) => Xn(e.position, gc(r, [p, f, h])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((p) => [e.position, p]);
  a.forEach((p, f) => s.push([p, a[(f + 1) % 4]]));
  const c = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([c[0], c[1]], [c[1], c[2]], [c[2], c[0]]), s;
}
function sM(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const c = is(e, a, n, i), p = is(e, s, n, i);
    if (!c || !p) return !1;
    const f = p.x - c.x, h = p.y - c.y, m = Ee(((r.x - c.x) * f + (r.y - c.y) * h) / Math.max(f * f + h * h, 1e-12), 0, 1);
    return Math.hypot(c.x + f * m - r.x, c.y + h * m - r.y) <= o;
  });
}
function lM(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function cM(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Xt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const c = o === 1 ? 0 : s * i / (o - 1);
    return Xt(n, "position", c);
  });
}
function uM(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const ly = 0.28;
function cy(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * Lt);
  return {
    quaternion: ao(jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * ln,
    aspect: n
  };
}
function Wa(e) {
  const t = Si(e);
  return {
    quaternion: ao(jn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function uy(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = tf(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * ln,
      vFOV_deg: 2 * Math.atan(o / n) * ln
    }
  };
}
function dy(e, t, r) {
  const [[n, i, o], [a, s, c], [p, f, h]] = Qa(e.quaternion), m = Math.tan(e.fovY_deg * 0.5 * Lt), _ = m * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(v, S = 1e-4) {
      const w = hx(v), P = n * w.x + a * w.y + p * w.z, W = i * w.x + s * w.y + f * w.z, V = -(o * w.x + c * w.y + h * w.z), D = Math.max(V, S);
      return {
        x: t * 0.5 * (1 + P / D / _),
        y: r * 0.5 * (1 - W / D / m),
        z: V
      };
    },
    // The unit direction seen at the point (x, y).
    ray(v, S) {
      const w = (v / t * 2 - 1) * _, P = (1 - S / r * 2) * m;
      return Zd(il({
        x: n * w + i * P - o,
        y: a * w + s * P - c,
        z: p * w + f * P - h
      }));
    }
  };
}
function dM(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = dc(e, t) }) {
  const a = [];
  e.stickers.forEach((s, c) => {
    const p = o.stickers[c];
    if (s.placement !== "sky") return;
    const f = s.source.kind === "port" && !s.visible;
    if (!p.active && !f) return;
    const h = r(s);
    if (!h) return;
    const m = Math.tan(p.hFOV_deg * 0.5 * Lt), _ = Math.tan(p.vFOV_deg * 0.5 * Lt), { crop: v } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: h.media,
      revision: h.revision,
      source: h.source,
      opacity: f ? ly : p.opacity,
      zIndex: n(s),
      quaternion: ao(jn(p.yaw_deg, p.pitch_deg, p.roll_deg)),
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
  return a.sort((s, c) => s.zIndex - c.zIndex);
}
function fy(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return dM(e, t, {
    media: (s) => {
      const c = a.get(s.id);
      return c ? n(c) : null;
    },
    zIndex: (s) => {
      var c;
      return Number(((c = a.get(s.id)) == null ? void 0 : c.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function fM(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function pM(e, t, r, { media: n, evaluated: i = dc(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, c) => {
    const p = i.stickers[c];
    if (s.placement !== "world" || !p.active) return;
    const f = o.get(s.id), h = f ? n(f) : null;
    if (!h) return;
    const { width: m, height: _ } = fM(h.media), v = Yk(p, s.crop, m, _);
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
function hM({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((a) => a.$) }) {
  let a = null, s = null, c = !1, p = 0;
  const f = () => {
    s = f0(a.createThreeView({ onUpdate: n, createCanvas: () => e }), "editor");
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
    pick(v, S, w, P, W) {
      return s && !h.lost ? s.pick(v, S, w, P, W) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(v, S, w, P, W) {
      return s && !h.lost ? s.pickSurface(v, S, w, P, W) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(v, S, w, P, W) {
      return s && !h.lost ? s.pickSticker(v, S, w, P, W) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(v, S, w, P, W, V) {
      return s && !h.lost ? s.gizmoPointer(v, S, w, P, W, V) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return p + (s ? s.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", m), e.removeEventListener("webglcontextrestored", _), s == null || s.dispose(), s = null;
    }
  };
  function m(v) {
    v.preventDefault(), !(c || h.lost) && (h.lost = !0, h.ready = !1, s == null || s.dispose({ lost: !0 }));
  }
  function _() {
    c || !h.lost || queueMicrotask(() => {
      c || !h.lost || (s && (p += s.contentRevision() + 1), s == null || s.dispose(), s = null, h.lost = !1, a && (f(), h.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", _), o().then((v) => {
    c || (a = v, !h.lost && (f(), h.ready = !0, t()));
  }).catch((v) => {
    console.error("[PanoramaStickers] three.js view is unavailable", v), h.failed = !0, r();
  }), h;
}
const py = "3D view unavailable. Check the browser console.";
function Vl(e, t, r) {
  return cy({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function mM(e) {
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
    const c = { onChange: s };
    let p = !1;
    return i.add(c), {
      get failed() {
        return n;
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
        p || (p = !0, i.delete(c), t == null || t.release(c), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const hy = mM(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => f0(e.createThreeView({ createCanvas: () => xn({ label: "three.node" }) }), "node"))
), xi = ["erp_image", "bg_erp", "bg_media"], sl = ["source"], _f = ["sticker_image", "sticker"], my = ["scene"], gM = {
  background: [...xi, ...sl],
  "external-sticker": [..._f, ...sl],
  scene: [...my, ...sl]
};
function gy(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Sf(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = gy(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function yM(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function yy(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function bM(e, t) {
  const { graph: r, entry: n } = yy(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = gy(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const by = [...xi, ..._f, ...my, ...sl], vM = 256, Eo = /* @__PURE__ */ new Map(), _u = /* @__PURE__ */ new WeakMap();
let vy = () => null;
function _y(e) {
  return _u.has(e) || _u.set(e, JSON.stringify(e)), _u.get(e);
}
function _M(e) {
  vy = e;
}
function $l(e, t) {
  const r = _y(e);
  Eo.delete(r), Eo.set(r, t), Eo.size > vM && Eo.delete(Eo.keys().next().value);
}
function mn(e, t) {
  var o;
  const r = e ? vy(e) : null;
  if (!r) return !0;
  const n = Sf(e);
  let i = Eo.get(_y(r));
  if (i)
    $l(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => by.includes(a == null ? void 0 : a.name)))) return !0;
    $l(r, n), i = n;
  }
  return gM[t].every((a) => i[a] === n[a]);
}
const zl = /* @__PURE__ */ new WeakSet();
async function dd(e, t) {
  if (zl.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && zl.add(e), r.ok && n !== void 0 ? n : null;
}
function Sy(e, t) {
  var o, a, s, c, p;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = yy(r, t), i = (c = e == null ? void 0 : e.outputs) == null ? void 0 : c[t];
  return !i || !((p = n == null ? void 0 : n.inputs) != null && p.some((f) => by.includes(f == null ? void 0 : f.name))) ? null : { output: i, inputs: bM(r, t) };
}
const ll = /* @__PURE__ */ new Map();
function SM(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ll.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await dd(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = Sy(i, o);
        a && $l(a.output, a.inputs);
      }
    });
}
const wM = 5;
function xM(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${wM}`, n = dd(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, dd(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var p, f, h, m;
      const c = String(a.id);
      for (const { id: _ } of await n) {
        if (!s()) return null;
        const v = await o(_);
        if ((p = v == null ? void 0 : v.outputs) != null && p[c])
          return ((m = (h = (f = v.workflow) == null ? void 0 : f.prompt) == null ? void 0 : h[c]) == null ? void 0 : m.class_type) !== a.comfyClass ? null : Sy(v, c);
      }
      return null;
    }
  };
}
function kM(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let xo = null;
async function MM(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || zl.has(r) || (s = ll.get(i)) != null && s.has(n) || kM(t)) return null;
  (xo == null ? void 0 : xo.workflowId) !== i && (xo = { workflowId: i, history: xM(r, i) }, queueMicrotask(() => {
    xo = null;
  }));
  const a = await xo.history.lastNodeOutput(e, o);
  return o() ? a ? ($l(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (zl.has(r) || ll.set(i, (ll.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function mm(e, t, r, n = xi) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const gm = /\.(mp4|webm|mov|m4v|mkv)$/i;
function cl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return gm.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return gm.test(String((e == null ? void 0 : e.filename) || ""));
}
const Su = /* @__PURE__ */ new WeakMap();
function NM(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function fd(e) {
  return NM(e) ? (Su.has(e) || Su.set(e, Math.random().toString(36).slice(2, 10)), Su.get(e)) : "run";
}
function wy(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function PM(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const c = r(o, s);
      (c == null ? void 0 : c.id) == null || n.has(String(c.id)) || (n.add(String(c.id)), i(c, (Array.isArray(c.inputs) ? c.inputs : []).map((p, f) => f)));
    }
  };
  return i(e, t), n;
}
function wf(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const c of s) {
          const p = n(c);
          if (p && (/\.mp4(\?|$)/i.test(p) || String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4"))
            return p;
        }
  }
  return "";
}
function AM({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = cc(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", c = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), c());
    }));
  }, p = () => {
    o || i();
  }, f = () => i(), h = () => {
    i(), c();
  }, m = () => i();
  let _ = !1;
  const v = () => {
    _ = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", p, { once: !0 }), n.addEventListener("loadeddata", p, { once: !0 }), s || n.addEventListener("timeupdate", f), n.addEventListener("play", h), n.addEventListener("pause", m), n.addEventListener("error", v), n.src = t, n.load();
  const S = () => {
    o || _ || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, w = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var W, V;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", p), n.removeEventListener("loadeddata", p), n.removeEventListener("timeupdate", f), n.removeEventListener("play", h), n.removeEventListener("pause", m), n.removeEventListener("error", v), n.pause(), (W = n.removeAttribute) == null || W.call(n, "src"), (V = n.load) == null || V.call(n));
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
function zi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function CM(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function ym(e, t, r = null) {
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
  return !n && r != null && (n = CM(e == null ? void 0 : e.graph, r)), n;
}
function IM(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function EM(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function OM(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function xy({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (y) => {
    if (!y) return "";
    if (typeof y == "string") return String(y || "").trim();
    if (Array.isArray(y)) {
      if (y.length === 0) return "";
      if (y.length === 1) return i(y[0]);
      const z = String(y[0] || "").trim();
      if (z)
        return zi(t, {
          filename: z,
          subfolder: String(y[1] || "").trim(),
          type: String(y[2] || "output").trim() || "output"
        });
      for (const H of y) {
        const te = i(H);
        if (te) return te;
      }
      return "";
    }
    return typeof (y == null ? void 0 : y.src) == "string" && y.src ? y.src : typeof (y == null ? void 0 : y.url) == "string" && y.url ? y.url : zi(t, y);
  }, o = (y) => {
    if (!y || typeof y != "object") return "";
    const z = String(y.type || "").trim().toLowerCase();
    if (z === "dataurl") return String(y.value || "");
    if (z !== "comfy_image") return "";
    const H = String(y.filename || "").trim();
    return H ? zi(t, {
      filename: H,
      subfolder: String(y.subfolder || ""),
      type: String(y.storage || "input")
    }) : "";
  }, a = (y) => {
    const z = e == null ? void 0 : e.nodeOutputs;
    if (!z || y == null) return null;
    const H = String(y);
    return z instanceof Map ? z.get(y) || z.get(H) || z.get(Number(H)) || null : z[y] || z[H] || null;
  }, s = (y, z) => {
    var te;
    const H = a(y == null ? void 0 : y.id);
    return Array.isArray((te = H == null ? void 0 : H.ui) == null ? void 0 : te[z]) ? H.ui[z] : Array.isArray(H == null ? void 0 : H[z]) ? H[z] : [];
  }, c = (y, z) => {
    const H = a(y == null ? void 0 : y.id);
    return H != null && H.ui && Object.prototype.hasOwnProperty.call(H.ui, z) ? H.ui[z] : H && Object.prototype.hasOwnProperty.call(H, z) ? H[z] : null;
  }, p = (y, z) => {
    const H = c(y, "pano_sticker_input_state_hash"), te = Array.isArray(H) ? H[0] : H;
    return String(te ?? "").trim() || OM(z);
  }, f = (y) => {
    const z = [], H = /* @__PURE__ */ new Set();
    for (const te of y || []) {
      const oe = i(te);
      !oe || H.has(oe) || (H.add(oe), z.push(oe));
    }
    return z;
  }, h = (y, z) => {
    var oe;
    const H = [];
    Array.isArray(y == null ? void 0 : y.images) && y.images.length && H.push(y.images), Array.isArray((oe = y == null ? void 0 : y.ui) == null ? void 0 : oe.images) && y.ui.images.length && H.push(y.ui.images);
    const te = [];
    for (const I of H)
      z >= 0 && z < I.length && te.push(I[z]), te.push(...I);
    return te;
  }, m = (y, z) => {
    var $;
    const H = String(z || "").trim();
    if (!H) return { src: "", sourceType: "", inputName: "" };
    const oe = (Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs : []).findIndex((de) => String((de == null ? void 0 : de.name) || "") === H);
    if (oe < 0) return { src: "", sourceType: "", inputName: H };
    const I = y.graph ? y.getInputLink(oe) : null;
    if ((I == null ? void 0 : I.origin_id) == null) return { src: "", sourceType: "", inputName: H };
    const G = I.origin_id, X = ym(y, oe, G);
    if (!X) return { src: "", sourceType: "", inputName: H };
    const ue = Number(I.origin_slot ?? 0);
    let Ne = [];
    try {
      Ne = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(X) || [] : [];
    } catch {
      Ne = [];
    }
    if (Array.isArray(Ne) && Ne.length) {
      const de = [];
      ue >= 0 && ue < Ne.length && de.push(Ne[ue]), de.push(...Ne);
      const Pe = f(de.filter((Ge) => !cl(Ge)));
      if (Pe.length)
        return { src: Pe[0], srcCandidates: Pe, sourceType: "appNodeImageUrls", inputName: H };
    }
    const _e = a((X == null ? void 0 : X.id) ?? G), pe = f(h(_e, ue).filter((de) => !cl(de))).map((de) => `${de}&pano_src=${fd(_e)}`);
    if (pe.length)
      return { src: pe[0], srcCandidates: pe, sourceType: "nodeOutputs", inputName: H };
    const Q = Array.isArray(X == null ? void 0 : X.imgs) ? X.imgs : [];
    if (Q.length) {
      const de = [];
      ue >= 0 && ue < Q.length && de.push(Q[ue]), de.push(...Q);
      const Pe = f(de);
      if (Pe.length)
        return { src: Pe[0], srcCandidates: Pe, sourceType: "nodeImgs", inputName: H };
    }
    const F = ($ = X == null ? void 0 : X.widgets) == null ? void 0 : $.find((de) => String((de == null ? void 0 : de.name) || "").toLowerCase() === "image");
    if (F) {
      let de = i(F.value);
      if (de && !de.includes("/") && !de.includes(":") && (X.comfyClass === "LoadImage" || X.type === "LoadImage") && (de = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`), de) return { src: de, sourceType: "widget", inputName: H };
    }
    return { src: "", sourceType: "", inputName: H };
  }, _ = (y, z = []) => {
    var te;
    const H = Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs : [];
    for (const oe of z) {
      const I = H.findIndex((Ne) => String((Ne == null ? void 0 : Ne.name) || "") === oe), G = I >= 0 && y.graph ? y.getInputLink(I) : null;
      if ((G == null ? void 0 : G.origin_id) == null) continue;
      const X = a(((te = ym(y, I, G.origin_id)) == null ? void 0 : te.id) ?? G.origin_id), ue = (Array.isArray(X == null ? void 0 : X.images) ? X.images : []).find(cl);
      return ue ? `${zi(t, ue)}&pano_src=${fd(X)}` : "";
    }
    return "";
  }, v = (y, z = []) => {
    const H = Array.isArray(z) ? z : [z];
    for (const te of H) {
      const oe = m(y, te);
      if (String((oe == null ? void 0 : oe.src) || "").trim()) return oe;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, S = (y) => {
    const z = String(y || "").trim();
    if (!z) return [];
    if (IM(z)) return [z];
    const { filename: H, subfolder: te } = EM(z);
    return H ? f([
      zi(t, { filename: H, subfolder: te, type: "temp" }),
      zi(t, { filename: H, subfolder: te, type: "output" }),
      zi(t, { filename: H, subfolder: te, type: "input" }),
      z
    ]) : [z];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (y) => {
      var z, H;
      try {
        (H = (z = y == null ? void 0 : y.__panoLinkedInputImageCache) == null ? void 0 : z.forEach) == null || H.call(z, (te, oe, I) => {
          var G;
          te != null && te.img && ((G = n == null ? void 0 : n.isImageLoadFailed) != null && G.call(n, te.img)) && I.delete(oe);
        });
      } catch {
      }
    },
    externalStateHash: p,
    invalidateUiImage: (y, z) => {
      var H;
      (H = y == null ? void 0 : y.delete) == null || H.call(y, `__ui__${String(z || "")}`);
    },
    linkedValue: (y, z) => {
      var G, X, ue, Ne;
      const H = String(z || ""), te = Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs.findIndex((_e) => String((_e == null ? void 0 : _e.name) || "") === H) : -1, oe = te >= 0 && y.graph ? y.getInputLink(te) : null;
      if (oe) {
        const _e = a(oe.origin_id), pe = [
          _e == null ? void 0 : _e.output,
          _e == null ? void 0 : _e.result,
          (G = _e == null ? void 0 : _e.data) == null ? void 0 : G.output,
          (X = _e == null ? void 0 : _e.data) == null ? void 0 : X.result,
          (ue = _e == null ? void 0 : _e.ui) == null ? void 0 : ue.output,
          (Ne = _e == null ? void 0 : _e.ui) == null ? void 0 : Ne.result
        ];
        for (const Q of pe) {
          if (!Array.isArray(Q)) continue;
          const F = Q[Number(oe.origin_slot || 0)];
          if (typeof F == "string" && F.trim()) return F;
        }
      }
      const I = Array.isArray(y == null ? void 0 : y.widgets) ? y.widgets.find((_e) => String((_e == null ? void 0 : _e.name) || "") === H) : null;
      return String((I == null ? void 0 : I.value) || "");
    },
    linkedVideoFile: _,
    loadPreferredExactLinkedImage: (y, z = [], H = null, te = "") => {
      var qe;
      const oe = Array.isArray(z) ? z : [z], I = v(y, oe), X = (Array.isArray(I == null ? void 0 : I.srcCandidates) && I.srcCandidates.length ? I.srcCandidates : [I == null ? void 0 : I.src]).map((le) => String(le || "").trim()).filter(Boolean);
      if (!X.length) return null;
      const ue = f(X.flatMap((le) => S(le)));
      if (!ue.length) return null;
      y.__panoLinkedInputImageCache || (y.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Ne = String(te || oe.join("|") || "image_exact"), _e = X.join(`
`), pe = y.__panoLinkedInputImageCache.get(Ne);
      if (pe && pe.srcRaw === _e && pe.img) return pe.img;
      const Q = r || globalThis.Image;
      if (typeof Q != "function") return null;
      const F = new Q();
      (qe = n == null ? void 0 : n.markImageLoading) == null || qe.call(n, F, _e);
      const $ = { srcRaw: _e, resolvedSrc: "", img: F };
      y.__panoLinkedInputImageCache.set(Ne, $);
      let de = -1;
      const Pe = (le) => {
        var j, fe, me;
        le === "ready" ? (j = n == null ? void 0 : n.markImageReady) == null || j.call(n, F, _e) : (fe = n == null ? void 0 : n.markImageFailed) == null || fe.call(n, F, _e), H == null || H(F), (me = y.setDirtyCanvas) == null || me.call(y, !0, !0);
      }, Ge = () => {
        if (de += 1, de >= ue.length) {
          Pe("failed");
          return;
        }
        $.resolvedSrc = ue[de], F.src = $.resolvedSrc;
      };
      return F.onload = () => Pe("ready"), F.onerror = () => {
        if (de + 1 < ue.length) {
          Ge();
          return;
        }
        Pe("failed");
      }, Ge(), F;
    },
    output: a,
    resolvePreferredExactLinkedSource: v,
    source: i,
    uiImage: (y, z, H, te = null) => {
      var _e, pe, Q;
      const oe = s(y, z)[0] || null, I = i(oe);
      if (!I) return null;
      const G = `__ui__${z}`, X = (_e = H == null ? void 0 : H.get) == null ? void 0 : _e.call(H, G);
      if (X && X.__panoSrc === I) return X;
      const ue = r || globalThis.Image;
      if (typeof ue != "function") return null;
      const Ne = new ue();
      return Ne.__panoSrc = I, (pe = n == null ? void 0 : n.markImageLoading) == null || pe.call(n, Ne, I), Ne.onload = () => {
        var F;
        (F = n == null ? void 0 : n.markImageReady) == null || F.call(n, Ne, I), te == null || te(Ne);
      }, Ne.onerror = () => {
        var F;
        (F = n == null ? void 0 : n.markImageFailed) == null || F.call(n, Ne, I), te == null || te(Ne);
      }, Ne.src = I, (Q = H == null ? void 0 : H.set) == null || Q.call(H, G, Ne), Ne;
    },
    uiList: s,
    uiValue: c
  };
}
const FM = 1e-3;
function ky(e, t, r, n) {
  if (!qo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(FM / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function My(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function TM(e, t) {
  return Math.floor(e * t.fps);
}
function Ny(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const bm = 4;
function Py({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, c, p) {
      if ((a.length !== r.length || a.some((m, _) => m !== r[_])) && (r = a, n.clear(), i = null), s === null) return null;
      const f = TM(s, c);
      for (let m = f; m < Math.min(r.length, f + bm + 1); m += 1) o(m);
      for (const m of n.keys())
        (m < f || m > f + bm) && m !== i && n.delete(m);
      const h = n.get(f);
      return h != null && h.complete && h.naturalWidth > 0 && (i !== null && i !== f && n.delete(i), i = f), i === null ? p : n.get(i);
    }
  };
}
function Ay({
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
  let a = null, s = !1, c = !1;
  const p = () => a || e(), f = () => o(r(p()));
  return {
    model: () => r(p()),
    refresh() {
      return c ? this.model() : (f(), this.model());
    },
    beginGesture() {
      return c || a ? !1 : (a = e(), s = !1, f(), !0);
    },
    updateGesture(h) {
      if (c) return !1;
      a || this.beginGesture();
      const m = t(a, h);
      return m.changed ? (a = m.state, s = !0, n(a), f(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (c || !a) return !1;
      const h = s;
      return h && i(a), a = null, s = !1, n(null), f(), h;
    },
    cancelGesture() {
      return c || !a ? !1 : (a = null, s = !1, n(null), f(), !0);
    },
    apply(h) {
      if (c) return !1;
      a && this.commitGesture();
      const m = t(e(), h);
      return m.changed ? (i(m.state), f(), !0) : !1;
    },
    destroy() {
      if (c) return;
      c = !0;
      const h = a != null;
      a = null, s = !1, h && n(null);
    }
  };
}
const ul = "sticker_image_1", Cy = "external_image", Jo = 0;
function zo(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function wu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function vi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function pd(e, t = Jo) {
  return (e == null ? void 0 : e.version) !== 2 ? vi(e) : vi(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: to(r, t).active,
    external: r.source.kind === "port",
    ...pf(r, t)
  }));
}
function xf(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && vi(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Iy(e) {
  return String((e == null ? void 0 : e.id) || "") === ul || String((e == null ? void 0 : e.source_kind) || "") === Cy;
}
function kf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Iy(t);
}
const Ey = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Oy(e) {
  return !Iy(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Ey.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Fy(e) {
  const t = Oy(e);
  return t ? Ey.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Ty(e, t = {}) {
  var D, y, z;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((H) => String((H == null ? void 0 : H.id) || "") === ul);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const H = String(((D = e.active) == null ? void 0 : D.selected_sticker_id) || "") === ul;
    return {
      state: {
        ...e,
        stickers: r.filter((te, oe) => oe !== n),
        active: H ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, c = Number(t.imageWidth || 0), p = Number(t.imageHeight || 0), f = c > 0 && p > 0, h = Math.max(1, c), m = Math.max(1, p), _ = t.pose && typeof t.pose == "object" ? t.pose : {}, v = s ? _.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || _.hFOV_deg || 30, S = Math.min(179, Math.max(0.1, Number(v)));
  if (!s) {
    if (!f) return { state: e, changed: !1 };
    const H = zo(S, h, m), te = Number(((y = a == null ? void 0 : a.initial_pose) == null ? void 0 : y.hFOV_deg) ?? S), oe = zo(te, h, m), I = Number(((z = a == null ? void 0 : a.initial_pose) == null ? void 0 : z.vFOV_deg) ?? oe);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - H) <= 1e-6 && Math.abs(I - oe) <= 1e-6 ? { state: e, changed: !1 } : {
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
  const w = r.reduce((H, te) => Math.max(H, Number((te == null ? void 0 : te.z_index) || 0)), -1), P = {
    yaw_deg: Number(_.yaw_deg || 0),
    pitch_deg: Number(_.pitch_deg || 0),
    hFOV_deg: S,
    vFOV_deg: f ? zo(S, h, m) : Number(_.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || S),
    rot_deg: Number(_.rot_deg ?? _.roll_deg ?? 0)
  }, W = {
    ...a || {},
    id: ul,
    source_kind: Cy,
    source_link_id: i,
    source_state_hash: o,
    ...P,
    initial_pose: { ...P },
    visible: !0,
    z_index: w + 1
  }, V = n >= 0 ? r.map((H, te) => te === n ? W : H) : [...r, W];
  return { state: { ...e, stickers: V }, changed: !0 };
}
function vm(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const DM = ["IMAGE", "VIDEO"];
function _m(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => DM.includes(r)) ? "2d" : null;
}
function LM(e, t) {
  var i, o, a, s, c, p;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((f) => (f == null ? void 0 : f.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? _m(n.type) ?? _m((p = (c = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : c[n.origin_slot]) == null ? void 0 : p.type) : null;
}
function Dy(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: vm(e, "sticker"),
    awaitingPose: !t && (vm(e, "sticker_state") || LM(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function Sm(e, t) {
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
function Ly(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var S;
  const a = e.stickers.findIndex((w) => kf(e, w)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const w = ((S = e.active) == null ? void 0 : S.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((P, W) => W !== a),
        active: w ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const c = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const w = { ...Sm(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((P, W) => W === a ? w : P) }, changed: !0 };
  }
  if (s) {
    if (!c || s.placement !== "sky") return { state: e, changed: !1 };
    const w = [s.size.value, ...s.size.keyframes.map((V) => V.value)], P = w.map((V) => zo(V.hFOV_deg, i, o));
    if (w.every((V, D) => Math.abs(V.vFOV_deg - P[D]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...s.size.value, vFOV_deg: P[0] },
      keyframes: s.size.keyframes.map((V, D) => ({ ...V, value: { ...V.value, vFOV_deg: P[D + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((V, D) => D === a ? { ...V, size: W } : V) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const p = new Set(e.stickers.map((w) => w.id));
  let f = 1;
  for (; p.has(`sticker_${f}`); ) f += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Sm(`sticker_${f}`, n)] }, changed: !0 };
  const h = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), m = (w) => c ? zo(w, i, o) : w, _ = hf(`sticker_${f}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: h,
    vFOV_deg: m(h)
  }, vi(e).reduce((w, P) => Math.max(w, P.z_index), -1) + 1), v = (n == null ? void 0 : n.keyframes) ?? {};
  return _.direction.keyframes = v.direction ?? [], _.roll.keyframes = v.roll ?? [], _.size.keyframes = (v.size ?? []).map((w) => ({ ...w, value: { ...w.value, vFOV_deg: m(w.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, _] }, changed: !0 };
}
function Mf(e) {
  const t = vi(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: wu(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: wu(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: wu(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Ry(e) {
  const t = xf(e), r = kf(e, t), n = vi(e).some((s) => s && s.visible !== !1), i = Mf(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Fy(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function RM(e) {
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
function wm(e, t) {
  const r = xf(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = RM(e), i = String(r.id || ""), o = Mf(n), a = o.findIndex((c) => c.type === "sticker" && c.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((c, p) => {
    c.item.z_index = p;
  }), { state: n, changed: !0 };
}
function VM(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function $M(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Ty(e, t.value);
  if (t.type === "sync-port") return Ly(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((m) => String((m == null ? void 0 : m.id) || "") === o))
      return { state: e, changed: !1 };
    const c = Mf(e).reduce((m, _) => Math.max(m, Number(_.z_index || 0)), -1), p = 30, f = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: p,
      vFOV_deg: zo(p, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, hf(o, al(i.asset), f, c + 1)],
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
    return !i || !vi(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = xf(e);
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
    const i = Oy(r);
    return !i || !Fy(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return wm(e, "front");
  if (t.type === "send-back") return wm(e, "back");
  if (t.type === "delete-selected") {
    if (kf(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((c) => c === r ? { ...c, visible: !1 } : c)
        },
        changed: !0
      };
    const i = e.stickers.filter((c) => c !== r), o = vi({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = VM(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? pf(r, Jo) : r, s = {};
    if (o.forEach((c) => {
      const p = Number(i[c]);
      Number.isFinite(p) && Math.abs(p - Number(a[c] || 0)) > 1e-12 && (s[c] = p);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const c = vk(r, s);
      if (!Object.keys(c).length) return { state: e, changed: !1 };
      const p = structuredClone(r);
      return B0(p, Jo, c), { state: { ...e, stickers: e.stickers.map((f) => f === r ? p : f) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === r ? { ...c, ...s } : c)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function zM(e = {}) {
  return Ay({
    ...e,
    reduce: $M,
    projectModel: Ry
  });
}
const hd = 2;
function Ki(e, t) {
  return Math.floor(e * t + 0.5);
}
function jM(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Vy({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let c = 0, p = !1, f = !1, h = { name: "idle" }, m = [];
  const _ = () => p && !f, v = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function S() {
    for (const $ of m) $();
    m = [];
  }
  function w($, de = {}) {
    return S(), h = { name: $, ...de }, s(), h;
  }
  function P($, de, Pe) {
    const Ge = () => {
      h === $ && Pe();
    };
    e.addEventListener(de, Ge), m.push(() => e.removeEventListener(de, Ge));
  }
  function W($, de) {
    let Pe = t.requestFrame(function Ge(qe) {
      h === $ && (de(qe), h === $ && (Pe = t.requestFrame(Ge)));
    });
    m.push(() => t.cancelFrame(Pe));
  }
  function V($) {
    c = $, o(c);
  }
  function D() {
    return w(f ? "error" : "idle");
  }
  function y() {
    f = !0, D();
  }
  function z() {
    const { seekable: $ } = e, de = $ != null && $.length ? $.end($.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(c / r(), Number.isFinite(de) ? de : 1 / 0));
  }
  function H($) {
    if (!_()) return $ === "play" ? X() : D();
    if (e.readyState < hd) {
      const de = w("loading", { then: $ });
      return P(de, "loadeddata", () => H(de.then)), P(de, "error", y), de;
    }
    return $ === "play" && c / r() >= Number(e.duration) ? X() : te($, !1);
  }
  function te($, de) {
    const Pe = z();
    if (!e.ended && Ki(Number(e.currentTime), r()) === Ki(Pe, r())) return oe($);
    const Ge = w("seeking", { then: $, frame: c, retried: de });
    return P(Ge, "seeked", () => {
      const qe = Ki(Number(e.currentTime), r()) === Ki(z(), r()), le = c === Ge.frame;
      qe || le && Ge.retried ? oe(Ge.then) : te(Ge.then, le);
    }), P(Ge, "error", y), e.currentTime = Pe, Ge;
  }
  function oe($) {
    return $ === "play" ? I() : (a(), D());
  }
  function I() {
    const $ = w("playingVideo", { shown: !1 });
    if (P($, "pause", () => e.ended ? G() : _e()), P($, "ended", G), P($, "error", y), i() && Ki(Number(e.duration), r()) >= n()) {
      const Pe = e.loop;
      e.loop = !0, m.push(() => {
        e.loop = Pe;
      });
    }
    const de = (Pe, Ge) => {
      Ge && !$.shown && ($.shown = !0, s()), ue(Ki(Pe, r()));
    };
    if (v()) {
      let Pe = e.requestVideoFrameCallback(function Ge(qe, le) {
        h === $ && (de(Number(le.mediaTime), !0), h === $ && (Pe = e.requestVideoFrameCallback(Ge)));
      });
      m.push(() => {
        var Ge;
        return (Ge = e.cancelVideoFrameCallback) == null ? void 0 : Ge.call(e, Pe);
      });
    } else
      W($, () => de(Number(e.currentTime), e.readyState >= hd));
    return Promise.resolve(e.play()).catch(() => {
      h === $ && _e();
    }), $;
  }
  function G() {
    a(), X();
  }
  function X() {
    const $ = w("playingClock", { startTs: t.now(), startFrame: c });
    return W($, (de) => ue($.startFrame + Math.floor((de - $.startTs) / 1e3 * r()))), $;
  }
  function ue($) {
    if ($ < n()) {
      V($);
      return;
    }
    if (!i()) {
      Ne(n() - 1);
      return;
    }
    h.name === "playingVideo" && (S(), e.pause()), V(0), H("play");
  }
  function Ne($) {
    h.name === "playingVideo" ? (S(), e.pause(), V(Math.max(0, $)), a()) : V(Math.max(0, $)), H("still");
  }
  function _e() {
    if (h.name === "loading" || h.name === "seeking")
      h.then = "still", s();
    else if (h.name === "playingVideo") {
      S(), e.pause();
      const $ = jM(Number(e.currentTime), r());
      V(Math.min($, n() - 1)), a(), c === $ ? D() : H("still");
    } else h.name === "playingClock" && Ne(Math.min(c, n() - 1));
  }
  function pe() {
    if (!F()) {
      if (c >= n() - 1 && V(0), h.name === "loading" || h.name === "seeking") {
        h.then = "play", s();
        return;
      }
      H("play");
    }
  }
  function Q($) {
    const de = Math.max(0, Math.round($));
    if (h.name === "loading" || h.name === "seeking") {
      h.then = "still", V(de), s();
      return;
    }
    h.name === "playingVideo" && (S(), e.pause()), V(de), H("still");
  }
  function F() {
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
      return F();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return h.name === "playingVideo" || h.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return h.name === "playingVideo" && h.shown;
    },
    play: pe,
    stop: _e,
    seek: Q,
    toggle() {
      F() ? _e() : pe();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource($) {
      S(), p = !!$, f = !1, H("still");
    },
    dispose() {
      S(), p = !1, h = { name: "idle" };
    }
  };
}
function $y({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, c = !1;
  function p(S) {
    s = S, t();
  }
  function f(S) {
    a = S, e.currentTime = S;
  }
  function h() {
    const S = c;
    m(), c !== S && r();
  }
  function m() {
    if (!n || i || e.readyState < hd) return;
    const { time: S, playing: w, fps: P } = o;
    if (S === null) {
      e.pause(), c = !1;
      return;
    }
    if (w) {
      if (a !== null) return;
      const W = Number(e.duration), V = Number.isFinite(W) ? Math.min(S, W) : S, D = Math.abs(Number(e.currentTime) - V) > 1.5 / P;
      if (e.ended && !D) return;
      D && f(V), e.paused && (c = !1, Promise.resolve(e.play()).catch(() => {
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
      !o.playing || c || (c = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [S, w] of Object.entries(_)) e.addEventListener(S, w);
  function v(S) {
    n = S, i = !1, a = null, s = null, c = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: S = "", time: w = null, playing: P = !1, fps: W }) {
      S !== n && (v(S), r()), o = { time: w, playing: P, fps: W }, h();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(S, w) {
      return !n || i ? w : o.time === null ? null : o.playing && c ? e : s === null ? w : S;
    },
    dispose() {
      for (const [S, w] of Object.entries(_)) e.removeEventListener(S, w);
      v("");
    }
  };
}
function md(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function HM({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: c, camera: p = !1 }) {
  let f = "", h = "", m = 0;
  const _ = /* @__PURE__ */ new Set();
  let v = null, S = null;
  const w = () => i().timeline.fps, P = (G) => G.stickers.find((X) => X.source.kind === "port"), W = () => {
    const G = i(), X = P(G);
    return H0(G, {
      minimum: Math.round(w() * 5),
      frames: Math.max(
        f ? Math.round(m * w()) : 0,
        v && X ? My(X.clip, w(), v.meta) : 0
      ),
      camera: p
    });
  }, V = Vy({
    video: e,
    clock: n,
    fps: w,
    span: W,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: c
  }), D = () => {
    h === f && Number.isFinite(e.duration) && (m = e.duration);
  }, y = () => {
    h && (_.add(h), c());
  }, z = $y({ video: t, onCapture: s, onChange: c }), H = Py({ createImage: r, onLoad: c });
  e.muted = !0, e.addEventListener("loadedmetadata", D), e.addEventListener("error", y);
  function te(G) {
    G !== h && (h = G, e.pause(), G ? e.src = G : e.removeAttribute("src"), e.load(), V.setSource(!!G));
  }
  function oe() {
    V.playing && V.stop();
  }
  function I(G) {
    const X = P(G);
    S = v && X ? ky(X.clip, V.frame, G.timeline.fps, v.meta) : null, z.follow({
      src: (v == null ? void 0 : v.src) || "",
      time: S,
      playing: V.advancing,
      fps: G.timeline.fps
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
      V.playing ? V.stop() : V.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: G, sources: X, state: ue, sticker: Ne = null }) {
      if (v = G ? Ne : null, !G)
        return oe(), te(""), I(ue), !1;
      for (const $ of _)
        X.includes($) || _.delete($);
      const _e = X.find(($) => $ && !_.has($)) || "", pe = _e !== f;
      pe && (f = _e, m = 0), te(f);
      const Q = j0(ue, { camera: p }) || !!f && V.state !== "error" || !!v;
      return Q || oe(), (pe || !Q || !V.playing && V.frame >= W()) && V.frame !== Jo && V.seek(Jo), I(ue), Q;
    },
    dispose() {
      V.dispose(), z.dispose(), e.removeEventListener("loadedmetadata", D), e.removeEventListener("error", y), e.pause(), e.removeAttribute("src"), e.load(), h = "";
    }
  };
}
const jl = Math.PI / 180, Fr = 180 / Math.PI, GM = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), WM = 260;
function xm(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function zy(e, t) {
  return t ? zy(t, e % t) : e;
}
function KM(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), c = zy(a, s) || 1;
  return `${Math.round(a / c)}:${Math.round(s / c)}`;
}
function os(e, t) {
  const r = xm(e), n = xm(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: KM(r, n) };
}
function no(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function jy(e) {
  const t = no(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Qr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Nf(e, t, r = GM) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), c = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), p = (w, P, W) => {
    const V = w + P, D = Math.max(0, W - 1), y = V > D && V > 0 ? D / V : 1;
    return [w * y, P * y];
  }, [f, h] = p(c, a, n), [m, _] = p(o, s, i), v = {
    x: f,
    y: m,
    w: Math.max(1, n - f - h),
    h: Math.max(1, i - m - _)
  }, S = Qd(v, t);
  return {
    x: v.x + (v.w - S.width) * 0.5,
    y: v.y + (v.h - S.height) * 0.5,
    w: S.width,
    h: S.height,
    safeRect: v
  };
}
function BM(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Nf({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * jl * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, c = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, p = S0(c, y0(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), f = UM(p, Qo(
    c.yaw_deg,
    c.pitch_deg,
    c.roll_deg
  ).right), h = ef({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: f.yaw,
    pitchDeg: f.pitch,
    rollDeg: f.roll,
    frameFovDeg: h.hFOV_deg
  };
}
function Hy(e) {
  return {
    yaw: Kt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Fr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Fr, -89.9, 89.9)
  };
}
function UM(e, t) {
  const r = Hy(e), n = Qo(r.yaw, r.pitch, 0), i = lu(t, e), o = {
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
    roll: uc(Math.atan2(
      lu(s, n.up),
      lu(s, n.right)
    ) * Fr)
  };
}
function Gy(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Nf({ width: r, height: n }, oo(e)), o = eo(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = S0(e, y0(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), c = Hy(s);
  return {
    yaw: c.yaw,
    pitch: c.pitch,
    fov: Ee(2 * Math.atan(r / (2 * o)) * Fr, 1, 179)
  };
}
function YM(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = eo(t, r), c = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: p, halfH: f } = tf(c, s), h = {
    x: o - p,
    y: a - f,
    w: p * 2,
    h: f * 2
  }, m = h.x <= 0 && h.y <= 0 && h.x + h.w >= n && h.y + h.h >= i, _ = n / i, v = Math.tan(Xu * jl), S = _ >= 1 ? v : v * _, w = _ >= 1 ? v / _ : v;
  return {
    focalPx: s,
    rect: h,
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
function ko(e, t) {
  const r = no(e);
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
function XM(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = eo(r, e);
    return ef(Qd(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: rl(o, t) };
}
function km(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = os(t, r);
  if (!o) return e;
  const a = oo(e) >= 1;
  n && o.ratio >= 1 !== a && (o = os(o.height, o.width));
  const s = XM(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function Wy(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (no(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = b0({
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
    const n = no(e);
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
    return ko(e, (n) => km(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return ko(e, (n) => {
      const o = String(Qr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? os(o[1], o[2]) : os(oo(n), 1);
      return a ? km(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? ko(e, (i) => {
      const o = uc(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? ko(e, (n) => {
    const i = v0(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? ko(e, (n) => {
    const i = _0(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? ko(e, (n) => {
    const i = Uy(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Ky({
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
    startRollDeg: Number(r || 0),
    lastAngle: h,
    accumulatedRad: 0
  };
}
function By(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + m0(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: g0(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Uy(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * jl, c = Math.cos(s), p = Math.sin(s), f = o / r, h = -a / r, m = f * c - h * p, _ = f * p + h * c, v = Number(e.pitch_deg || 0) * jl, S = Math.max(0.25, Math.abs(Math.cos(v)));
  return {
    ...e,
    yaw_deg: Kt(Number(e.yaw_deg || 0) - Math.atan(m) / S * Fr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(_) * Fr, -90, 90)
  };
}
function qM({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Ay({
    readState: e,
    reduce: Wy,
    projectModel: jy,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const Xe = Object.freeze({
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
}), JM = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, ZM = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: JM(t[2])
})), QM = {
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
}, Mm = Object.fromEntries(
  Object.entries(QM).map(([e, t]) => [e, {
    name: t.name,
    elements: ZM(t.body)
  }])
), Ut = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = _t(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Mm, n) ? Mm[n] : null;
    });
    return (n, i) => r.value ? (De(), ze("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: wt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (De(!0), ze(lt, null, Rt(r.value.elements, (o, a) => (De(), ze(lt, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (De(), ze("path", qr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (De(), ze("circle", qr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (De(), ze("rect", qr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (De(), ze("line", qr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (De(), ze("polyline", qr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (De(), ze("polygon", qr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : xt("", !0)
      ], 64))), 128))
    ], 2)) : xt("", !0);
  }
}, sn = {
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
    const t = e, r = _t(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (De(), sr(sS(e.tag), qr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Tg(() => [
        tt(Ut, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, eN = ["aria-expanded", "disabled"], tN = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, nN = ["data-aspect", "disabled", "onClick"], rN = { class: "pano-cutout-aspect-custom" }, iN = ["disabled"], oN = ["disabled"], aN = ["data-custom-width", "data-custom-height", "disabled"], Yy = {
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
    ]), o = /* @__PURE__ */ en("1"), a = /* @__PURE__ */ en("1"), s = /* @__PURE__ */ en(null), c = _t(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), p = _t(() => {
      const S = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], w = String(r.model.aspectLabel || "");
      return S.length ? S.map((P) => {
        const W = typeof P == "string" ? P : String((P == null ? void 0 : P.value) || ""), V = typeof P == "string" ? P : String((P == null ? void 0 : P.label) || W);
        return {
          ...typeof P == "object" && P ? P : {},
          value: W,
          label: V,
          active: w ? W === w : (P == null ? void 0 : P.active) === !0
        };
      }) : i.map((P) => ({
        ...P,
        active: P.value === w
      }));
    }), f = _t(() => {
      var w;
      const S = String(r.model.aspectLabel || "").trim();
      return S || String(((w = p.value.find((P) => P.active === !0)) == null ? void 0 : w.label) || "Aspect");
    });
    Zi(f, (S) => {
      const w = String(S || "").match(/^([0-9.]+):([0-9.]+)$/);
      w && (o.value = w[1], a.value = w[2]);
    }, { immediate: !0 });
    function h(S) {
      n("action", S);
    }
    function m(S) {
      var w;
      r.model.aspectOpen === !0 && ((w = s.value) != null && w.contains(S.target) || h({ type: "close-aspect" }));
    }
    oc(() => {
      document.addEventListener("pointerdown", m, !0);
    }), ds(() => {
      document.removeEventListener("pointerdown", m, !0);
    });
    function _(S) {
      const [w, P] = String(S.value || "").split(":");
      h({
        type: "set-aspect",
        width: w,
        height: P,
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
    return (S, w) => (De(), ze("div", {
      ref_key: "rootElement",
      ref: s,
      class: wt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (De(), sr(sn, {
        key: 0,
        icon: e.model.aspectIcon || ft(Xe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: c.value },
        onClick: w[0] || (w[0] = (P) => h({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (De(), ze("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: c.value,
        onClick: w[1] || (w[1] = (P) => h({ type: "toggle-aspect" }))
      }, [
        tt(Ut, {
          icon: e.model.aspectIcon || ft(Xe).aspect
        }, null, 8, ["icon"]),
        Se("span", null, mt(f.value), 1),
        tt(Ut, {
          icon: ft(Xe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, eN)),
      ti(Se("div", tN, [
        (De(!0), ze(lt, null, Rt(p.value, (P) => (De(), ze("button", {
          key: P.value,
          class: wt(["pano-btn pano-frame-aspect-choice", { active: P.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": P.value,
          disabled: c.value,
          onClick: (W) => _(P)
        }, mt(P.label), 11, nN))), 128)),
        Se("div", rN, [
          ti(Se("input", {
            "onUpdate:modelValue": w[2] || (w[2] = (P) => o.value = P),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: c.value
          }, null, 8, iN), [
            [Kh, o.value]
          ]),
          w[4] || (w[4] = Se("span", { "aria-hidden": "true" }, ":", -1)),
          ti(Se("input", {
            "onUpdate:modelValue": w[3] || (w[3] = (P) => a.value = P),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: c.value
          }, null, 8, oN), [
            [Kh, a.value]
          ]),
          Se("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: c.value,
            onClick: v
          }, "Apply", 8, aN)
        ])
      ], 512), [
        [ro, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, sN = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, lN = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ en(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (De(), ze("div", {
      class: wt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Gt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Gt(() => {
      }, ["stop"]))
    }, [
      tt(sn, {
        icon: ft(Xe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Gt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Se("div", sN, [
        i[3] || (i[3] = Se("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (De(!0), ze(lt, null, Rt(ft(r), (o) => (De(), ze("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Se("kbd", null, mt(o[0]), 1),
          Se("span", null, mt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, cN = {
  class: "pano-view-unavailable",
  role: "status"
}, Pf = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (De(), ze("div", cN, mt(ft(py)), 1));
  }
}, uN = { class: "pano-cutout-node-surface" }, dN = ["title", "disabled"], fN = { class: "value" }, pN = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, hN = {
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
    return (n, i) => (De(), ze("div", uN, [
      Se("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Gt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Gt(() => {
        }, ["stop"]))
      }, [
        Se("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          tt(Ut, {
            icon: ft(Xe).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Se("span", { class: "label" }, "Full Editor", -1))
        ]),
        tt(sn, {
          icon: e.model.hasShot ? ft(Xe).delete : ft(Xe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        tt(Yy, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Se("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Gt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          tt(Ut, {
            icon: ft(Xe).roll
          }, null, 8, ["icon"]),
          Se("span", fN, mt(e.model.rollLabel || "0.0°"), 1)
        ], 40, dN),
        tt(sn, {
          icon: ft(Xe).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        tt(lN)
      ], 32),
      e.model.hasShot === !1 ? (De(), ze("div", pN, " Choose a view · + Add Frame ")) : xt("", !0),
      e.model.viewUnavailable ? (De(), sr(Pf, { key: 1 })) : xt("", !0)
    ]));
  }
}, Xy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ en(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const h = o;
      return o = void 0, a = !1, { active: !0, intent: h };
    }
    function c(h) {
      const m = i.value;
      return m instanceof HTMLInputElement ? (o = h, a = !0, m.value = "", m.click(), !0) : !1;
    }
    function p(h) {
      var S, w;
      const { active: m, intent: _ } = s();
      if (!m) return;
      const v = ((w = (S = h.target) == null ? void 0 : S.files) == null ? void 0 : w[0]) || null;
      if (v) {
        n("file-selected", { intent: _, file: v });
        return;
      }
      n("file-cancelled", { intent: _ });
    }
    function f() {
      const { active: h, intent: m } = s();
      h && n("file-cancelled", { intent: m });
    }
    return t({ open: c }), (h, m) => (De(), ze("input", {
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
}, mN = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, gN = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ en(!1), r = Object.freeze([
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
    return (n, i) => (De(), ze("div", {
      class: wt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Gt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Gt(() => {
      }, ["stop"]))
    }, [
      tt(sn, {
        icon: ft(Xe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Gt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Se("div", mN, [
        i[3] || (i[3] = Se("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (De(!0), ze(lt, null, Rt(ft(r), (o) => (De(), ze("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Se("kbd", null, mt(o[0]), 1),
          Se("span", null, mt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, yN = { class: "pano-stickers-node-surface" }, bN = ["disabled"], vN = ["aria-label", "data-tip"], _N = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, SN = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, wN = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ en(null);
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
    return (a, s) => (De(), ze("div", yN, [
      Se("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Gt(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Gt(() => {
        }, ["stop"]))
      }, [
        Se("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (c) => n({ type: "open-editor" }))
        }, [
          tt(Ut, {
            icon: ft(Xe).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = Se("span", { class: "label" }, "Full Editor", -1))
        ]),
        Se("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          tt(Ut, {
            icon: ft(Xe).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Se("span", { class: "label" }, "Add Image", -1))
        ], 8, bN),
        tt(sn, {
          icon: e.model.locked ? ft(Xe).lock_closed : ft(Xe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (c) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        tt(sn, {
          icon: ft(Xe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (c) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        tt(sn, {
          icon: ft(Xe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (c) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        tt(sn, {
          icon: e.model.isExternalSelection ? ft(Xe).back_initial : ft(Xe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (c) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        tt(gN)
      ], 32),
      e.model.playable === !0 ? (De(), ze("button", {
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
        onClick: s[9] || (s[9] = (c) => n({ type: "toggle-playback" }))
      }, [
        tt(Ut, {
          icon: e.model.playing ? ft(Xe).pause : ft(Xe).play
        }, null, 8, ["icon"])
      ], 40, vN)) : xt("", !0),
      e.model.hasStickers === !1 ? (De(), ze("div", _N, " Add Image to place a sticker ")) : xt("", !0),
      e.model.dropActive === !0 ? (De(), ze("div", SN, "Drop image to add")) : xt("", !0),
      tt(Xy, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (De(), sr(Pf, { key: 3 })) : xt("", !0)
    ]));
  }
}, Nm = 24;
function xN(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ka(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function qy(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function gd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => Ka(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ka(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : qy(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function kN(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => Ka(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = n ? e.corners.findIndex((a) => Ka(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, c = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * c >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ka(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : qy(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Af(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function Jy(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ka(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ee(r.x, -n, t.width + n),
    y: Ee(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function MN(e) {
  const t = Qo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Lt * 0.5),
    tanY: Math.tan(Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Lt * 0.5)
  };
}
function ji(e, t, r) {
  return Zd(Al(
    Al(e.centerDir, Cl(e.right, t)),
    Cl(e.up, r)
  ));
}
function Cf(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = MN(e), n = ka(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ji(r, -r.tanX, r.tanY),
    ji(r, r.tanX, r.tanY),
    ji(r, r.tanX, -r.tanY),
    ji(r, -r.tanX, -r.tanY)
  ].map((m) => ka(m, t)), o = Array.from({ length: 4 }, (m, _) => {
    const v = [];
    for (let S = 0; S <= 28; S += 1) {
      const w = S / 28;
      let P, W;
      _ === 0 ? (P = -r.tanX + 2 * r.tanX * w, W = r.tanY) : _ === 1 ? (P = r.tanX, W = r.tanY - 2 * r.tanY * w) : _ === 2 ? (P = r.tanX - 2 * r.tanX * w, W = -r.tanY) : (P = -r.tanX, W = -r.tanY + 2 * r.tanY * w);
      const V = ka(ji(r, P, W), t);
      V && v.push({ x: V.x, y: V.y });
    }
    return v;
  }), a = ka(ji(r, 0, r.tanY), t), s = ka(
    ji(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), c = [n, ...i, a, s];
  if (c.some((m) => !m || !Number.isFinite(m.x) || !Number.isFinite(m.y)))
    return { visible: !1 };
  if (!c.some((m) => m.rawZ > 1e-4)) return { visible: !1 };
  const p = s.x - a.x, f = s.y - a.y, h = Math.hypot(p, f) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((m) => ({ x: m.x, y: m.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + p / h * Nm,
      y: a.y + f / h * Nm
    },
    visible: !0
  };
}
function Pm(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: Cf(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var c, p;
    return Number(((c = s.item) == null ? void 0 : c.z_index) || 0) - Number(((p = a.item) == null ? void 0 : p.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = gd(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = gd(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function NN(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Kt(Math.atan2(n.x, n.z) * ln),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * ln
  };
}
function PN(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function AN(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * ln;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Ws = null;
function If() {
  return Ws || (Ws = new Promise((e) => {
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
  }), Ws);
}
function nr(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function CN(e, t = 1024) {
  const r = Math.max(1, Math.round(nr(e, 2048))), n = Math.min(r, Math.max(1, Math.round(nr(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function IN(e, t, r) {
  const n = nr(t), i = nr(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = nr(o.u0), s = nr(o.v0), c = nr(o.u1), p = nr(o.v1);
  if (c <= a || p <= s) return null;
  const f = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + c) * 0.5 + nr(f.du)) * n,
    centerY: ((s + p) * 0.5 + nr(f.dv)) * i,
    width: (c - a) * n,
    height: (p - s) * i,
    rotationRad: nr(f.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, nr(f.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function EN(e, t, r) {
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
function ON() {
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
    const c = new Image();
    s = { image: c, listeners: new Set(typeof a == "function" ? [a] : []), settled: !1 }, e.set(o, s);
    const p = () => {
      s.settled = !0;
      const f = [...s.listeners];
      s.listeners.clear(), f.forEach((h) => h()), r();
    };
    return c.onload = p, c.onerror = p, c.src = o, r(), c;
  }
  function i(o, a, s, c = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const p = String(o.rasterDataUrl || "").trim(), f = IN(o, a, s);
    if (!p.startsWith("data:") || !f) return null;
    const h = EN(o, a, s), m = String((o == null ? void 0 : o.id) || "").trim() || h, _ = t.get(m);
    if ((_ == null ? void 0 : _.revision) === h) return { source: _.source, revision: h };
    const v = n(p, c), S = Number(v.naturalWidth || v.width || 0), w = Number(v.naturalHeight || v.height || 0);
    if (!v.complete || S < 1 || w < 1) return null;
    const P = xn({ label: "raster-object" });
    P.width = Math.max(1, Math.round(a)), P.height = Math.max(1, Math.round(s));
    const W = P.getContext("2d");
    return W ? (f.wrapOffsets.forEach((V) => {
      W.save(), W.translate(f.centerX + V, f.centerY), W.rotate(f.rotationRad), W.scale(f.scale, f.scale), W.drawImage(
        v,
        -f.width * 0.5,
        -f.height * 0.5,
        f.width,
        f.height
      ), W.restore();
    }), t.set(m, { revision: h, source: P }), { source: P, revision: h }) : null;
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
function FN(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function TN(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function DN({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(h) {
    if (!h) return;
    h.entry.listeners.delete(h);
    const m = n.get(h.owner);
    (m == null ? void 0 : m.get(h.key)) === h && m.delete(h.key);
  }
  function a(h, m, _, v) {
    if (!h || typeof v != "function" || _.settled) return;
    let S = n.get(h);
    S || (S = /* @__PURE__ */ new Map(), n.set(h, S));
    const w = S.get(m);
    if ((w == null ? void 0 : w.entry) === _) {
      w.callback = v;
      return;
    }
    o(w);
    const P = { owner: h, key: m, entry: _, callback: v };
    S.set(m, P), _.listeners.add(P);
  }
  function s(h, m) {
    h.settled || (h.settled = !0, h.image.onload = null, h.image.onerror = null, !m && r.get(h.key) === h && r.delete(h.key), [...h.listeners].forEach((_) => {
      o(_);
      try {
        _.callback(h.image, m);
      } catch {
      }
    }), c(i));
  }
  function c(h) {
    if (!(r.size <= h))
      for (const [m, _] of r) {
        if (r.size <= h) break;
        !_.settled || _.listeners.size > 0 || (_.image.onload = null, _.image.onerror = null, r.delete(m));
      }
  }
  function p(h, m, _, v = null) {
    const S = String(m || ""), w = String(_ || "");
    if (!S || !w) return null;
    let P = r.get(S);
    if (P)
      r.delete(S), r.set(S, P);
    else {
      c(i - 1);
      const V = e || globalThis.Image;
      if (typeof V != "function") return null;
      const D = new V();
      P = { key: S, image: D, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(S, P), D.onload = () => s(P, !0), D.onerror = () => s(P, !1), D.src = w;
    }
    return P.settled || P.image.complete && Number(P.image.naturalWidth || P.image.width || 0) > 0 || a(h, S, P, v), P.image;
  }
  function f(h) {
    const m = n.get(h);
    m && ([...m.values()].forEach(o), n.delete(h), c(i));
  }
  return { get: p, disposeOwner: f };
}
const Ia = /* @__PURE__ */ new WeakMap();
function Zy(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Ia.get(e);
  n || (n = [], Ia.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = Ia.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && Ia.delete(e);
  };
}
function ni(e, ...t) {
  const r = Ia.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const dl = Object.freeze({
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
}), Qy = "PanoramaSuite.Editor.ViewControls", LN = {
  id: Qy,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(dl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function RN(e) {
  return Object.hasOwn(dl, e) ? dl[e] : dl.default;
}
function VN(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function $N(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Hl = "state_json";
function ei(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function zN(e) {
  var a, s;
  const t = ei(e, Hl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = W0(r, {
    coverage: (a = ei(e, "coverage")) == null ? void 0 : a.value
  }), i = Wy(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function Ef(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = ei(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, c, p, f, h, m, _, v;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (p = (c = e.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || p.call(c), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0), (m = (h = e.graph) == null ? void 0 : h.setDirtyCanvas) == null || m.call(h, !0, !0), (v = (_ = t == null ? void 0 : t.canvas) == null ? void 0 : _.setDirty) == null || v.call(_, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function jN(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Am(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function HN(e) {
  var f, h, m, _, v, S;
  if (!e) return;
  const t = ei(e, "coverage"), r = ei(e, "bg_color"), n = ei(e, Hl), i = ei(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && jN(o) && (Am(a) || a === ""))) return;
  let p = "360";
  if (Am(a))
    try {
      p = String(Rn((f = JSON.parse(a)) == null ? void 0 : f.coverage));
    } catch {
      p = "360";
    }
  t.value = p, (h = t.callback) == null || h.call(t, p), r.value = o, (m = r.callback) == null || m.call(r, o), n.value = a, (_ = n.callback) == null || _.call(n, a), i && (i.value = s, (v = i.callback) == null || v.call(i, s)), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
}
function fl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function yd(e, t, r) {
  var o, a;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((s) => String((s == null ? void 0 : s.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (a = i.parentEl) != null && a.style && (i.parentEl.style.display = "");
    const s = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(s) || Number(s[0] || 0) <= 0 || Number(s[1] || 0) <= 0) && (i.computeSize = () => {
      var c;
      return [Math.max(120, Number(((c = e == null ? void 0 : e.size) == null ? void 0 : c[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function GN(e, { tolerateOperationFailure: t = !1 } = {}) {
  const r = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (r instanceof Map)
    for (; r.size > 0; ) {
      const n = Array.from(r.entries());
      t ? await Promise.allSettled(n.map(([, i]) => i)) : await Promise.all(n.map(([, i]) => i)), n.forEach(([i, o]) => {
        r.get(i) === o && r.delete(i);
      });
    }
}
function Ea(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const n = e.__panoStickerOperationTail, o = (n && typeof n.then == "function" ? n.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = o.catch(() => {
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
async function eb(e, t = {}) {
  var n;
  await GN(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function WN(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await eb(e), r ? r.apply(this, n) : this.value;
  };
}
function KN(e) {
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
function BN(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Ma(e, {
  app: t,
  matchType: r,
  buttonText: n,
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
    const m = `editor_btn|${r}`;
    if (h.__panoPreviewAttached === !0 && h.__panoPreviewMountKey === m) return;
    KN(h), Ef(h, t), fl(h, Hl);
    const _ = ei(h, Hl);
    if (WN(h, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const S = _.callback;
      _.callback = (w) => {
        var W;
        const P = S ? S(w) : void 0;
        return (W = h.setDirtyCanvas) == null || W.call(h, !0, !1), P;
      };
    }
    if (r === "PanoramaStickers") {
      h.__panoSceneStateV2 = c, h.__panoStudio = p;
      const S = ei(h, "bg_color");
      !c && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (v = S.callback) == null || v.call(S, "#00ff00")), yd(h, n, () => i(h, "stickers")), s && (o(h, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(h, "stickers")
      }), h.__panoStickersNodeSurface && fl(h, n), (!Array.isArray(h.size) || h.size[0] < 10 || h.size[1] < 10) && (h.size = [360, 260])), h.__panoPreviewAttached = !0, h.__panoPreviewMountKey = m;
      return;
    }
    h.__panoSceneStateV2 = c, yd(h, n, () => i(h, "cutout")), c || a(h, {
      buttonText: n,
      onOpen: () => i(h, "cutout")
    }), h.__panoCutoutNodeSurface && fl(h, n), (!Array.isArray(h.size) || h.size[0] < 10 || h.size[1] < 10) && (h.size = [360, 260]), h.__panoPreviewAttached = !0, h.__panoPreviewMountKey = m;
  }
  for (const h of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const m = e.prototype[h];
    e.prototype[h] = function() {
      const _ = m ? m.apply(this, arguments) : void 0;
      h === "onNodeCreated" && r === "PanoramaCutout" && !c && zN(this), h === "onConfigure" && r === "PanoramaStickers" && !c && this.widgets && HN(this);
      const v = !!this.__panoPreviewAttached;
      return (h === "onNodeCreated" || this.widgets) && f(this), h === "onAdded" && v && ni(this, "attach"), _;
    };
  }
}
function UN(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return BN(this), n;
  };
}
function YN(e, {
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
    Ef(e, t);
    const c = (p = e) => r(p, "stickers", { readOnly: !0, hideSidebar: !1 });
    yd(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), e.__panoPreviewNodeSurface && fl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function XN({
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
    settings: [LN, Dw],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Xh],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Xh.id] }],
    beforeRegisterNodeDef(c, p) {
      const f = String((p == null ? void 0 : p.name) || "");
      (f === "PanoramaStickers" || f === "Panorama Stickers") && Ma(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), f === "PanoramaStickersNode" && Ma(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), f === "PanoramaStudio" && Ma(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (f === "PanoramaCutout" || f === "Panorama Cutout") && Ma(c, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), f === "PanoramaCutoutNode" && Ma(c, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Il(f) && UN(c);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(c) {
      c.__panoPreviewAttached && o(c);
    },
    nodeCreated(c) {
      const p = String((c == null ? void 0 : c.comfyClass) || (c == null ? void 0 : c.type) || (c == null ? void 0 : c.title) || "");
      Ef(c, e), Il(p) && YN(c, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const qN = /\.(png|jpe?g|webp|gif|bmp)$/i;
function mr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : qN.test(String(e.name || "")) : !1;
}
function Of(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => mr(r)) : !1;
}
function JN(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (c) => {
    var p, f, h;
    (p = c == null ? void 0 : c.preventDefault) == null || p.call(c), (f = c == null ? void 0 : c.stopPropagation) == null || f.call(c), (h = c == null ? void 0 : c.stopImmediatePropagation) == null || h.call(c);
  }, o = (c) => {
    if (Of(c == null ? void 0 : c.dataTransfer)) {
      i(c);
      try {
        c.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (c) => {
    var p;
    c != null && c.relatedTarget && ((p = e.contains) != null && p.call(e, c.relatedTarget)) || r(!1);
  }, s = (c) => {
    var f;
    const p = Array.from(((f = c == null ? void 0 : c.dataTransfer) == null ? void 0 : f.files) || []).find((h) => mr(h));
    if (!p) {
      r(!1);
      return;
    }
    i(c), r(!1), n(p);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function Oa(e, t = {}) {
  var a, s, c, p;
  if (!mr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((p = (c = globalThis.URL) == null ? void 0 : c.revokeObjectURL) == null ? void 0 : p.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const f = await new Promise((h, m) => {
      const _ = new r();
      _.onload = () => h(_), _.onerror = () => m(new Error("image load failed")), _.src = o;
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
async function Bi(e, { fetchApi: t } = {}) {
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
const Cm = /* @__PURE__ */ new WeakSet(), Im = /* @__PURE__ */ new WeakSet();
let Em = 0;
function bd(e) {
  if (!e || typeof e != "object" || Im.has(e)) return e;
  const t = String(e.type || "preview");
  return Em += 1, e.type = `${t}:pano-${Em}`, Im.add(e), e;
}
function Gl(e) {
  if (!e || typeof e != "object" || Cm.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Cm.add(e), e;
}
function tb(e, t) {
  var n, i;
  if (!t || ((i = (n = Gl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function ZN({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (c) => o || n || typeof e != "function" ? !1 : (i = c, n = e(() => {
    n = 0;
    const p = i;
    i = null, o || r == null || r(p);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Yt } = Js;
_M((e) => _i(e.id));
SM(Qt);
const Ff = DN(), { linkedVideoFile: QN } = xy({ app: Yt, api: Qt });
function vd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Js == null ? void 0 : Js.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const eP = "pano_suite.ui_settings.v1", tP = 120, nP = 2048;
function Om() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(eP)) || "").trim();
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
function rP() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Na(e) {
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
function iP() {
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
function _d(e) {
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
function nb(e) {
  const t = _d(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function oP(e, t, r) {
  nb(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Sd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Tf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function rb(e) {
  return Il(Tf(e));
}
function Fm(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Yt == null ? void 0 : Yt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function ib(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Sd(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, c = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === c) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = c, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && pl(e), qP(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = Sd(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      pl(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      pl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function aP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function pl(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  wd.unregister(e), aP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const f = String((p == null ? void 0 : p.name) || ""), h = String((p == null ? void 0 : p.type) || ""), m = vd();
      return f === m || h === m || f === "pano_preview" || h === "pano_preview" ? !0 : f === "preview" && h === "pano_preview";
    }).forEach((p) => PP(e, p));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function sP(e, t = "#00ff00") {
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
function lP(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = jo(e, "state_json")) == null ? void 0 : r.value) || "");
}
function Fn(e) {
  var s, c;
  const t = lP(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = jo(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((c = jo(e, "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? K0(t, { backgroundColor: n, coverage: i, active: Y0(e) }) : sP(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function jo(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function cP(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function ob(e, t, r = null) {
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
  return !n && r != null && (n = cP(e == null ? void 0 : e.graph, r)), n;
}
function uP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function ab(e, t = []) {
  const r = uP(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    xi.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Tm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Wl(e, t) {
  const r = Tm(e), n = Tm(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function dP(e, t) {
  var r;
  return ob(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function fP(e, t = xi) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = ab(e, t).map((s) => r.findIndex((c) => String((c == null ? void 0 : c.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, c) => ({ input: s, idx: c })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return PM(e, a, dP);
}
const wd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Qt) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var c, p, f, h, m;
        if (!o) return;
        const a = Wl(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...fP(o)].some((_) => Wl(n, _)) || wy(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (sb(o), (p = (c = o.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || p.call(c), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (m = (h = o.graph) == null ? void 0 : h.setDirtyCanvas) == null || m.call(h, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, Qt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Qt) != null && e.removeEventListener) || (Qt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Kl(e) {
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
  return typeof ((o = Qt) == null ? void 0 : o.apiURL) == "function" ? Qt.apiURL(i) : i;
}
function pP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function hP(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function mP(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function gP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (pP(t)) return [t];
  const { filename: r, subfolder: n } = hP(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Kl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return mP([...i, t]);
}
function yP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Kl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function _i(e) {
  const t = Yt == null ? void 0 : Yt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Wl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Wl(a, i)) return t[a];
  }
  return null;
}
function Ba(e, t, r = null) {
  const n = r || _i(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function Kn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Kn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Kl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = Kn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Kl(e);
}
function Bl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function xu(e) {
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
function Df(e, t) {
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
function bP(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function vP(e, t) {
  try {
    e.__panoOwnOutputRev = FN(e.__panoOwnOutputRev);
    const r = bP(t);
    let n = "";
    for (const i of r)
      if (n = Kn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), Df(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ho(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function _P(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!mn(e, "background"))
    return Ho(e), null;
  const i = _i(n), o = wf(i, t, Kn);
  if (!o)
    return Ho(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = Df(o, a), c = `${t.join("|")}:${s}`, p = e.__panoOwnOutputVideoCache;
  if (p && p.key === c) return p.player.failed() ? null : p.player.video;
  Ho(e);
  const f = AM({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return f ? (e.__panoOwnOutputVideoCache = { key: c, player: f }, f.video) : null;
}
function SP(e, t = []) {
  var p, f;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = ab(e, t).map((h) => r.findIndex((m) => String((m == null ? void 0 : m.name) || "") === String(h))).filter((h) => h >= 0), o = r.map((h, m) => ({ input: h, idx: m })).filter(({ input: h }) => String((h == null ? void 0 : h.type) || "").toUpperCase() === "IMAGE").map(({ idx: h }) => h), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const h of a) {
    const m = r[h], _ = e.graph ? e.getInputLink(h) : null;
    if ((_ == null ? void 0 : _.origin_id) == null) continue;
    const v = _.origin_id, S = ob(e, h, v);
    if (!S) continue;
    const w = Number(_.origin_slot ?? 0), P = _i((S == null ? void 0 : S.id) ?? v), W = Array.isArray(P == null ? void 0 : P.images) ? P.images : [];
    if (W.length) {
      const z = [];
      w >= 0 && w < W.length && z.push(W[w]), z.push(...W);
      for (const H of z.filter((te) => !cl(te))) {
        const te = Kn(H);
        if (te)
          return String((m == null ? void 0 : m.name) || ""), { src: `${te}&pano_src=${fd(P)}`, sourceType: "nodeOutputs", inputName: String((m == null ? void 0 : m.name) || "") };
      }
    }
    let V = [];
    try {
      V = typeof (Yt == null ? void 0 : Yt.getNodeImageUrls) == "function" ? Yt.getNodeImageUrls(S) || [] : [];
    } catch {
      V = [];
    }
    if (Array.isArray(V) && V.length) {
      const z = [];
      w >= 0 && w < V.length && z.push(V[w]), z.push(...V);
      for (const H of z) {
        const te = Kn(H);
        if (te)
          return String((m == null ? void 0 : m.name) || ""), { src: te, sourceType: "appNodeImageUrls", inputName: String((m == null ? void 0 : m.name) || "") };
      }
    }
    const D = Array.isArray(S == null ? void 0 : S.imgs) ? S.imgs : [];
    if (D.length) {
      const z = [];
      w >= 0 && w < D.length && z.push(D[w]), z.push(...D);
      for (const H of z) {
        const te = Kn(H);
        if (te)
          return String((m == null ? void 0 : m.name) || ""), { src: te, sourceType: "nodeImgs", inputName: String((m == null ? void 0 : m.name) || "") };
      }
    }
    const y = (p = S == null ? void 0 : S.widgets) == null ? void 0 : p.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image");
    if (y) {
      let z = Kn(y.value);
      if (z && !z.includes("/") && !z.includes(":") && (S.comfyClass === "LoadImage" || S.type === "LoadImage") && (z = Qt.apiURL(`/view?filename=${encodeURIComponent(z)}&type=input&subfolder=`)), z)
        return String((m == null ? void 0 : m.name) || ""), { src: z, sourceType: "widget", inputName: String((m == null ? void 0 : m.name) || "") };
    }
  }
  const s = mn(e, "background") ? _i(e == null ? void 0 : e.id) : null, c = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && c.push(...s.pano_input_images), Array.isArray((f = s == null ? void 0 : s.ui) == null ? void 0 : f.pano_input_images) && c.push(...s.ui.pano_input_images), c.length > 0)
    for (const h of c) {
      const m = Kn(h);
      if (m)
        return { src: m, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function wP(e, t = [], r = {}) {
  const n = SP(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = gP(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", c = e.__panoLinkedInputImageCache.get(s);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return a && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const p = new Image(), f = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  f.pendingSrcRaw = i, f.pendingResolvedSrc = "", f.pendingImg = p, e.__panoLinkedInputImageCache.set(s, f);
  let h = -1;
  const m = () => {
    var v, S, w, P;
    if (h += 1, h >= o.length) {
      if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === f && f.pendingImg === p && (f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null, !f.img))
        try {
          (P = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || P.call(w, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const _ = o[h];
    f.pendingResolvedSrc = _, p.src = _;
  };
  return p.onload = () => {
    var _, v, S;
    ((v = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : v.call(_, s)) === f && f.pendingImg === p && (f.srcRaw = i, f.resolvedSrc = String(f.pendingResolvedSrc || p.src || ""), f.img = p, f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null), String(f.pendingResolvedSrc || f.resolvedSrc || p.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = (_) => {
    var v, S, w, P;
    if (h + 1 < o.length) {
      m();
      return;
    }
    if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === f && f.pendingImg === p && (f.pendingSrcRaw = "", f.pendingResolvedSrc = "", f.pendingImg = null, !f.img))
      try {
        (P = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || P.call(w, s);
      } catch {
      }
    String(f.pendingResolvedSrc || f.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((_ == null ? void 0 : _.type) || "error");
  }, m(), a && f.img && (f.img.complete || f.img.naturalWidth || f.img.width) ? f.img : p;
}
function xP(e, t = [], r = null, n = {}) {
  const i = wP(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function sb(e) {
  var t, r;
  if (e) {
    Ff.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Ho(e), e.__panoWrappedErpCache = null;
  }
}
function kP(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Ho(e), e.__panoWrappedErpCache = null;
  }
}
function lb(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ks(e, t, r = "") {
  const n = lb(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < tP ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Dm(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, c = Math.min(a, s);
  return Number.isFinite(c) && c > 0 ? c : 1;
}
function MP(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), c = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), p = Math.max(Math.round(34 * r), s + Math.round(14 * r)), f = n + (o - c) * 0.5, h = i + (a - p) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(f, h, c, p, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", f + c * 0.5, h + p * 0.5 + 0.5), e.restore();
}
function ku(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function NP(e) {
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
function PP(e, t) {
  return tb(e, t);
}
function as(e, t, r, n = null) {
  var m;
  if (!String(t || "")) return null;
  let o = yP(r);
  if (!o && (n != null && n.external)) {
    if (!mn(e, "external-sticker")) return null;
    const _ = _i(e == null ? void 0 : e.id), v = ((m = _ == null ? void 0 : _.ui) == null ? void 0 : m.pano_sticker_input_images) || (_ == null ? void 0 : _.pano_sticker_input_images) || [];
    for (const S of Array.isArray(v) ? v : [v])
      if (o = Kn(S), o) break;
  }
  if (!o) return null;
  const a = Ba(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", c = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, p = n != null && n.external ? Df(o, c) : o, f = TN(o, s, c);
  return Ff.get(e, f, p, (_, v) => {
    var S, w;
    v && (n != null && n.external && e.__panoOutputFromRun && ni(e, "image-loaded"), (w = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || w.call(S));
  }) || null;
}
function AP(e, t) {
  var h, m, _, v;
  const r = FP(e, t), n = TP(t), i = Array.isArray((h = t == null ? void 0 : t.painting) == null ? void 0 : h.groups) ? t.painting.groups : [], o = new Map(
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
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = ON()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var S, w;
    return (w = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null ? void 0 : w.call(S);
  });
  const c = CN(t == null ? void 0 : t.output_preset), p = s.filter((S) => (S == null ? void 0 : S.visible) !== !1 && String((S == null ? void 0 : S.layerKind) || "paint") === "paint").map((S) => String((S == null ? void 0 : S.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(p);
  const f = s.map((S) => {
    const w = e.__panoRasterObjectSurfaceCache.get(
      S,
      c.width,
      c.height,
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
function CP(e, t, r, n) {
  var o, a, s, c, p, f;
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
      const h = n.convertEventToCanvasOffset(t);
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
  const i = EP(e, t, n);
  return i || null;
}
function IP(e, t) {
  var h, m;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (h = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : h.call(i), a = (t == null ? void 0 : t.ds) || ((m = Yt == null ? void 0 : Yt.canvas) == null ? void 0 : m.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const c = Array.isArray(a.offset) ? a.offset : [0, 0], p = (r - Number(o.left || 0)) / s - Number(c[0] || 0), f = (n - Number(o.top || 0)) / s - Number(c[1] || 0);
  return !Number.isFinite(p) || !Number.isFinite(f) ? null : { x: p, y: f };
}
function EP(e, t, r) {
  var i, o;
  const n = IP(t, r || (Yt == null ? void 0 : Yt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function OP(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function FP(e, t) {
  var p, f, h, m, _, v, S, w, P, W, V, D;
  const r = (f = (p = t == null ? void 0 : t.painting) == null ? void 0 : p.paint) == null ? void 0 : f.strokes, n = (m = (h = t == null ? void 0 : t.painting) == null ? void 0 : h.mask) == null ? void 0 : m.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = OP(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = Xd(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((S = e.__panoPreviewPaintRevision) == null ? void 0 : S.paint) !== c.paint || ((w = e.__panoPreviewPaintRevision) == null ? void 0 : w.mask) !== c.mask || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.groups) !== c.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== c.rasterObjects) && (e.__panoPreviewPaintRevision = c, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function TP(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function DP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function LP(e, t, r) {
  const n = Cf(t, r);
  n.visible && Af(e, n.boundaryEdges, { selected: !1 });
}
function RP(e, t, r) {
  const n = Cf(t, r);
  n.visible && (e.save(), Af(e, n.boundaryEdges, { selected: !0 }), Jy(e, n, { accent: xN(t) }), e.restore());
}
function xd(e, t, r) {
  return dy(Vl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Ul(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Jo;
}
function VP(e) {
  return [mn(e, "background") ? wf(_i(e.id), ["pano_input_videos"], Kn) : "", QN(e, xi)];
}
function $P(e) {
  var o;
  if (!mn(e, "external-sticker")) return null;
  const t = _i(e.id), r = Ba(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(Kn), meta: r };
  const i = wf(t, ["pano_sticker_input_videos"], Kn);
  return i ? { src: i, meta: r } : null;
}
function zP({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Lm(e, t, r) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Dr({ ...t, painting: null }) });
  const n = (a) => {
    var c;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = as(e, a.id, U0(a.source), { external: a.source.kind === "port" });
      const p = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && p) {
        const f = p.playback.stickerPicture(p.stickerStill, s), h = Ny(p.playback.stickerMedia, s);
        return f ? { media: f, revision: xu(f), source: h } : null;
      }
    } else {
      const p = a.type === "external_image" || a.source_kind === "external_image", f = String(a.asset_id || "") || (p ? String(a.id || "") : "");
      s = as(e, f, (c = t.assets) == null ? void 0 : c[a.asset_id], { external: p });
    }
    return Bl(s) ? { media: s, revision: xu(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : AP(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: Bl(r) ? { media: r, revision: xu(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: fy(e.__panoSurfaceScene.sceneState, Ul(e), t.stickers, { media: n, paintLayers: i })
  };
}
function jP(e, t, r) {
  var D, y, z, H, te, oe, I;
  const n = String(e.__panoPreviewMode || "stickers");
  lb(e, n);
  const i = Fn(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (z = (y = (D = e.__panoCutoutNodeSurface) == null ? void 0 : D.session) == null ? void 0 : y.refresh) == null || z.call(y)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (oe = (te = (H = e.__panoStickersNodeSurface) == null ? void 0 : H.session) == null ? void 0 : te.refresh) == null || oe.call(te));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), c = t.getContext("2d");
  if (!c) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const p = { x: 0, y: 0, w: a, h: s };
  c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "#070707", c.fillRect(0, 0, a, s);
  const f = (e.__panoSurfacePlayback ? zP(e.__panoSurfacePlayback) : _P(e, ["pano_input_videos"], () => {
    var G, X;
    return (X = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : X.call(G);
  })) || xP(
    e,
    xi,
    () => {
      var G, X;
      return (X = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : X.call(G);
    },
    { preserveReadyWhilePending: !1 }
  ), h = Bl(f);
  let m = null;
  const _ = (G, X) => {
    m || (m = Lm(e, i, f));
    const ue = r.render({ width: G.w, height: G.h, camera: X, ...m });
    return ue && c.drawImage(ue.canvas, ue.x, ue.y, ue.width, ue.height, G.x, G.y, G.w, G.h), !!ue;
  };
  if (n === "cutout") {
    const G = NP(i), X = DP(f), ue = G ? Ee(Si(G).aspect, 0.1, 10) : h ? Ee(Number(X.width / X.height), 0.05, 20) : 1, Ne = Nf(p, ue);
    e.__panoCutoutNodeFrame = Ne;
    let _e = "none";
    const pe = String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "");
    if (G)
      if (f && !h)
        _e = "loading";
      else if (h) {
        const Q = YM({ width: a, height: s }, Ne, G);
        [
          !Q.fallback || _(Q.fallback.rect, Wa(Q.fallback.shot)),
          _(Q.rect, Wa(Q.shot)),
          !Q.fallback || _(Ne, Wa(G))
        ].every(Boolean) || (_e = "loading");
      } else
        _e = "empty";
    else {
      const Q = e.__panoLastCutoutShot;
      Q ? (e.__panoPreviewView = Gy(Q, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), h ? _(p, Vl(e.__panoPreviewView, a, s)) || (_e = "loading") : f ? _e = "loading" : _e = "empty";
    }
    h || r.release(), r.failed && _e === "loading" && (_e = "none"), G && (e.__panoLastCutoutShot = { ...G }, c.save(), c.fillStyle = "rgba(0,0,0,0.58)", c.beginPath(), c.rect(0, 0, a, s), c.rect(Ne.x, Ne.y, Ne.w, Ne.h), c.fill("evenodd"), c.restore(), c.save(), c.strokeStyle = "rgba(255,221,87,0.72)", c.lineWidth = 2, c.strokeRect(Ne.x + 0.5, Ne.y + 0.5, Math.max(0, Ne.w - 1), Math.max(0, Ne.h - 1)), c.restore()), _e === "loading" ? (ku(e, !1), Ks(e, !0, pe)) : _e === "empty" ? (ku(e, !0), Ks(e, !1, "")) : (ku(e, !1), Ks(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let v = !1;
  (!f || h) && (m = Lm(e, i, f), !m.background && !m.layers.length ? (r.release(), v = !0) : v = _(p, Vl(e.__panoPreviewView, a, s)));
  const S = !v && !r.failed;
  Ks(e, S, S ? String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "") : ""), S && MP(c, p, Dm(t, p));
  const w = xd(e, a, s);
  !f && v && HP(c, w, Dm(t, p));
  const P = String(((I = i == null ? void 0 : i.active) == null ? void 0 : I.selected_sticker_id) || ""), W = pd(i, Ul(e)), V = v ? W.find((G) => String((G == null ? void 0 : G.id) || "") === P && (G == null ? void 0 : G.visible) !== !1) : null;
  v && W.filter((G) => G !== V && (G == null ? void 0 : G.visible) !== !1 && (G.external || G.source_kind === "external_image")).filter((G) => !Bl(as(e, G.id, null, { external: !0 }))).forEach((G) => LP(c, G, w)), V && RP(c, V, w);
}
function Rm(e, t, r, n, i = 1) {
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
function HP(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const c = [];
    for (let p = -180; p <= 180; p += 4) c.push(Vn(p, s));
    Rm(e, c, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const c = [];
    for (let p = -89; p <= 89; p += 4) c.push(Vn(s, p));
    Rm(e, c, t, n, s % 90 === 0 ? 1.3 : 1);
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
    const c = t.project(s.dir);
    c.z > 1e-4 && e.fillText(s.name, c.x, c.y + 24 * r);
  }), e.restore();
}
function kd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function GP(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function tr(e, t) {
  return GP(e, t) ? !1 : (kd(e), !0);
}
function Vm() {
  var r;
  const e = (r = Yt == null ? void 0 : Yt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function WP(e) {
  var r;
  if (!e) return;
  const t = (r = Yt == null ? void 0 : Yt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function KP(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !nb(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function BP(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function $m(e, t = null, r = 0, n = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && UP(e, 180, t);
    }
  };
}
function UP(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Fa(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const YP = /* @__PURE__ */ new WeakMap();
function cb(e, t) {
  return wy(YP, e, t) ? !1 : (vP(e, t), sb(e), Fa(e), !0);
}
async function XP(e) {
  var r, n;
  const t = await MM(e, Yt, Qt);
  t && (cb(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function qP(e, t = {}) {
  var je;
  const r = t.__allowStandalone === !0, n = rb(e);
  if (n && !r) {
    Tf(e);
    return;
  }
  n && KP(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: Fm(e)
  }, s = "dom", c = a.signature || Fm(e);
  if (Number(e.__panoRebindGeneration || 0), Sd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, _d(e), e.__panoFrontendSig = c, e.__panoStickersPath = s, (je = e.__panoDomPreview) != null && je.widget || (e.__panoLegacyPreviewHooked && pl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const p = t.noPreview === !0, f = p ? 0 : 56, h = p ? 0 : WM, m = document.createElement("div");
  if (iP(), m.className = "pano-node-preview-dom", m.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && m.classList.add("pano-node-preview--no-preview"), m.setAttribute("data-capture-wheel", "true"), m.tabIndex = 0, m.style.cssText = [
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
    const C = Gl(bd(
      e.addDOMWidget(vd(), "preview", m, $m(e, null))
    ));
    Fa(e), e.__panoDomPreview = { widget: C, root: m, requestDraw: () => {
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
  const v = xn({ label: "node.surface" });
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
  const w = h0(m), P = document.createElement("div");
  P && (P.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", P.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", m.appendChild(P)), oP(e, 120, 120), Fa(e);
  let W = null;
  try {
    BP(e, f, () => {
      var C, ge;
      return (ge = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ge.call(C);
    }), W = Gl(bd(e.addDOMWidget(
      vd(),
      "preview",
      m,
      $m(
        e,
        () => {
          var C, ge;
          return (ge = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ge.call(C);
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
  }, D = () => {
    V.destroyed || (V.needsDraw = !0, !V.inTick && !V.raf && (V.raf = requestAnimationFrame(Ae)));
  }, y = hy(D), z = /* @__PURE__ */ Zo(i ? { ...Ry(Fn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...jy(Fn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((C) => ({ value: C, label: C }))
  });
  let H = null;
  if (i && e.__panoSceneStateV2) {
    const [C, ge] = [0, 1].map(() => {
      const Ke = cc(document, "node.playback");
      return Ke.playsInline = !0, Ke.preload = "auto", Ke.crossOrigin = "anonymous", Ke.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", _.appendChild(Ke), Ke;
    }), ve = xn({ label: "node.still" });
    ve.__panoFrameIdx = 0;
    const Ve = xn({ label: "node.port-still" });
    Ve.__panoFrameIdx = 0;
    const Be = HM({
      video: C,
      stickerVideo: ge,
      createImage: (Ke, Je) => {
        const nt = new Image();
        return nt.onload = Je, nt.onerror = Je, nt.src = Ke, nt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ke) => requestAnimationFrame(Ke),
        cancelFrame: (Ke) => cancelAnimationFrame(Ke)
      },
      readState: () => Fn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: D,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Je;
        if (!(C.videoWidth > 0 && C.videoHeight > 0)) return;
        const Ke = Math.min(1, nP / C.videoWidth);
        ve.width = Math.round(C.videoWidth * Ke), ve.height = Math.round(C.videoHeight * Ke), (Je = ve.getContext("2d")) == null || Je.drawImage(C, 0, 0, ve.width, ve.height), ve.__panoFrameIdx += 1, D();
      },
      onStickerCapture: () => {
        var Ke;
        ge.videoWidth > 0 && ge.videoHeight > 0 && (Ve.width = ge.videoWidth, Ve.height = ge.videoHeight, (Ke = Ve.getContext("2d")) == null || Ke.drawImage(ge, 0, 0), Ve.__panoFrameIdx += 1, D());
      },
      onChange: () => {
        z.playing = Be.playing, D();
      }
    });
    H = { playback: Be, video: C, still: ve, stickerVideo: ge, stickerStill: Ve, stickerSource: "" }, e.__panoSurfacePlayback = H;
  }
  const te = () => {
    var nt;
    const { playback: C, still: ge, stickerStill: ve } = H, Ve = md(_, !!((nt = e.flags) != null && nt.collapsed)), Be = C.source, Ke = Ve ? $P(e) : null, Je = C.follow({
      shown: Ve,
      sources: Ve ? VP(e) : [],
      state: Fn(e),
      sticker: Ke
    });
    ((Ke == null ? void 0 : Ke.src) || "") !== H.stickerSource && (H.stickerSource = (Ke == null ? void 0 : Ke.src) || "", Uu(ve)), C.source !== Be && (Uu(ge), ge.__panoFrameIdx = 0), z.playable = Je, z.playing = C.playing;
  }, oe = () => {
    var ge, ve;
    const C = ((ge = e.__panoOwnOutputVideoCache) == null ? void 0 : ge.player) ?? null;
    C && !md(_, !!((ve = e.flags) != null && ve.collapsed)) && C.pause(), i && (z.playable = !!C && !C.failed(), z.playing = !!(C != null && C.playing));
  }, I = () => {
    var C;
    H == null || H.playback.pause(), (C = e.__panoOwnOutputVideoCache) == null || C.player.pause();
  };
  let G = null;
  const X = (i ? zM : qM)({
    readState: () => Fn(e),
    publishLiveState: (C) => {
      C ? (G = C, e.__panoLiveStateOverride = C) : (e.__panoLiveStateOverride === G && (e.__panoLiveStateOverride = null), G = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, D();
    },
    commitState: (C) => {
      var Ve, Be, Ke, Je;
      const ge = jo(e, "state_json");
      if (!ge) return;
      X0(e, C.active);
      const ve = J0(e, C);
      Z0(e, ve, String(ge.value ?? "")) || (ge.value = ve, (Ve = ge.callback) == null || Ve.call(ge, ve), e.__panoStateCache = null, (Be = e.setDirtyCanvas) == null || Be.call(e, !0, !0), (Je = (Ke = e.graph) == null ? void 0 : Ke.setDirtyCanvas) == null || Je.call(Ke, !0, !0));
    },
    onChange: (C) => Object.assign(z, C)
  }), Ne = i ? Zy(e, (C = "sync", ge = null) => {
    var cn;
    if (!i || !e.graph || !X || X.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const on = mn(e, "external-sticker"), si = Fn(e).stickers.find((ki) => ki.source.kind === "port");
      return X.apply({
        type: "sync-port",
        value: Dy(e, {
          pose: on ? Ba(e, "pano_sticker_input_pose", ge) : null,
          image: si ? as(e, si.id, null, { external: !0 }) : null
        })
      });
    }
    const ve = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((on) => String((on == null ? void 0 : on.name) || "") === "sticker_image") : -1, Ve = ve >= 0 ? ((cn = e.getInputLink(ve)) == null ? void 0 : cn.id) ?? null : null;
    if (Ve == null)
      return X.apply({ type: "sync-external", value: { connected: !1 } });
    if (!mn(e, "external-sticker")) return !1;
    const Be = Ba(e, "pano_sticker_input_pose", ge), Ke = Array.isArray(Be) ? Be[0] : Be, Je = String(Ba(e, "pano_sticker_input_state_hash", ge) ?? ""), nt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, st = Fn(e), bt = (Array.isArray(st == null ? void 0 : st.stickers) ? st.stickers : []).find((on) => String((on == null ? void 0 : on.id) || "") === "sticker_image_1"), Ot = as(e, "sticker_image_1", null, { external: !0 }), It = Ke && typeof Ke == "object" ? Ke : bt || { yaw_deg: nt.yaw, pitch_deg: nt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return X.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ve,
        stateHash: Je,
        pose: It,
        imageWidth: Number((Ot == null ? void 0 : Ot.naturalWidth) || (Ot == null ? void 0 : Ot.width) || 0),
        imageHeight: Number((Ot == null ? void 0 : Ot.naturalHeight) || (Ot == null ? void 0 : Ot.height) || 0)
      }
    });
  }) : () => {
  };
  let _e = 0;
  const pe = async (C) => {
    if (!i || !X || !mr(C)) return !1;
    I();
    const ge = `asset_${Math.random().toString(16).slice(2, 10)}`, ve = `st_${Math.random().toString(16).slice(2, 10)}`, Ve = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    _e += 1, z.importing = !0;
    const Be = Ea(e, `add:${ge}`, async () => {
      const Ke = await Oa(C), Je = await Bi(C, {
        fetchApi: (nt, st) => Qt.fetchApi(nt, st)
      });
      return Ge(), X.apply({
        type: "add-sticker",
        value: {
          stickerId: ve,
          assetId: ge,
          asset: Je,
          imageWidth: Ke.width,
          imageHeight: Ke.height,
          yaw_deg: Number(Ve.yaw || 0),
          pitch_deg: Number(Ve.pitch || 0)
        }
      });
    });
    try {
      return await Be;
    } catch {
      return !1;
    } finally {
      _e = Math.max(0, _e - 1), z.importing = _e > 0, D();
    }
  };
  let Q = null, F = null, $ = null, de = !1;
  const Pe = () => {
    var C;
    return $ && (clearTimeout($), $ = null), de ? (de = !1, ((C = X == null ? void 0 : X.commitGesture) == null ? void 0 : C.call(X)) ?? !1) : !1;
  }, Ge = () => {
    var Ve, Be, Ke;
    const C = Pe(), ge = (Q == null ? void 0 : Q.pointerId) ?? (F == null ? void 0 : F.pointerId);
    if (Q = null, F = null, ge != null) {
      try {
        (Ve = v.hasPointerCapture) != null && Ve.call(v, ge) && ((Be = v.releasePointerCapture) == null || Be.call(v, ge));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const ve = ((Ke = X == null ? void 0 : X.commitGesture) == null ? void 0 : Ke.call(X)) ?? !1;
    return C || ve;
  }, qe = () => {
    var Ve, Be, Ke;
    const C = Pe(), ge = Q == null ? void 0 : Q.pointerId;
    if (Q = null, ge != null) {
      try {
        (Ve = v.hasPointerCapture) != null && Ve.call(v, ge) && ((Be = v.releasePointerCapture) == null || Be.call(v, ge));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const ve = ((Ke = X == null ? void 0 : X.cancelGesture) == null ? void 0 : Ke.call(X)) ?? !1;
    return C || ve;
  }, le = () => Ge();
  X && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(le));
  let j = null, fe = !1;
  if (P && X)
    try {
      If(), j = Kd(i ? wN : hN, {
        model: z,
        onAction: (C) => {
          var Ve, Be, Ke;
          if ((C == null ? void 0 : C.type) === "toggle-playback") {
            Ge(), H ? H.playback.toggle() : (Ve = e.__panoOwnOutputVideoCache) == null || Ve.player.toggle(), D();
            return;
          }
          if (I(), (C == null ? void 0 : C.type) === "open-editor") {
            Ge(), i || (z.aspectOpen = !1), (Be = e.__panoOpenEditor) == null || Be.call(e);
            return;
          }
          if (i) {
            if ((C == null ? void 0 : C.type) === "add-image-file") {
              pe(C.file);
              return;
            }
            X.apply(C) && D();
            return;
          }
          if ((C == null ? void 0 : C.type) === "toggle-aspect") {
            z.aspectOpen = !z.aspectOpen;
            return;
          }
          if ((C == null ? void 0 : C.type) === "close-aspect") {
            z.aspectOpen = !1;
            return;
          }
          let ge = C;
          if ((C == null ? void 0 : C.type) === "add-frame") {
            const Je = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ge = {
              ...C,
              ...BM(Je, {
                width: v.width,
                height: v.height
              })
            };
          } else if ((C == null ? void 0 : C.type) === "delete-frame") {
            const Je = no(Fn(e));
            Je && (e.__panoPreviewView = Gy(Je, {
              width: v.width,
              height: v.height
            }));
          }
          const ve = ((Ke = e.__panoCutoutNodeFrame) == null ? void 0 : Ke.safeRect) || null;
          z.aspectOpen = !1, X.apply({ ...ge, safeRect: ve }) && D();
        }
      }), j.mount(P), fe = !0;
    } catch {
      j = null, fe = !1;
    }
  const me = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    H && te(), D();
  }) : null;
  me == null || me.observe(_);
  const Ae = (C) => {
    var ve, Ve;
    V.raf = 0, V.inTick = !0;
    let ge = !1;
    try {
      ge = Fe.stepInertia(C), (V.needsDraw || ge) && (V.needsDraw = !1, H ? te() : oe(), (ve = e.flags) != null && ve.collapsed || jP(e, v, y), z.viewUnavailable = y.failed);
    } finally {
      V.inTick = !1;
    }
    (ge || V.needsDraw) && !V.raf && (V.raf = requestAnimationFrame(Ae)), rP() && (!e.__panoDebugLastTs || C - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = C, e.__panoPreviewMode, _d(e), Na(m), Na(_), Na(v), Na(m.parentElement), Na((Ve = m.parentElement) == null ? void 0 : Ve.parentElement), Number(v.width || 0), Number(v.height || 0), void 0);
  }, Fe = Jd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (C) => {
      e.__panoPreviewView = C;
    },
    getViewportSize: () => {
      const C = v.getBoundingClientRect();
      return {
        w: Math.max(1, Number(C.width || v.clientWidth || 0)),
        h: Math.max(1, Number(C.height || v.clientHeight || 0))
      };
    },
    getInvert: () => {
      const C = Om();
      return {
        x: C.invert_view_x ? -1 : 1,
        y: C.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      D();
    }
  }), ne = i ? _ : m, Ce = (C) => {
    const ge = v.getBoundingClientRect();
    return {
      x: (Number(C.clientX) - ge.left) * (v.width / Math.max(1, ge.width)),
      y: (Number(C.clientY) - ge.top) * (v.height / Math.max(1, ge.height))
    };
  }, M = (C) => {
    var Ve, Be;
    if (!i || !o) return;
    const ge = Fn(e), ve = Pm(
      pd(ge, Ul(e)),
      String(((Ve = ge == null ? void 0 : ge.active) == null ? void 0 : Ve.selected_sticker_id) || ""),
      Ce(C),
      xd(e, v.width, v.height)
    );
    if (!ve) {
      v.style.cursor = "grab";
      return;
    }
    if (((Be = ve.item) == null ? void 0 : Be.locked) === !0) {
      v.style.cursor = "default";
      return;
    }
    v.style.cursor = ve.hit.cursor || "default";
  };
  v.addEventListener("pointerdown", (C) => {
    var nt, st, bt, Ot, It, qn, cn, on, si, ki, ra;
    if (!tr(C, ne) || C.button !== 0) return;
    if (!i) {
      const In = no(Fn(e)), ur = e.__panoCutoutNodeFrame;
      if (!In) {
        (nt = m.focus) == null || nt.call(m, { preventScroll: !0 }), (st = v.setPointerCapture) == null || st.call(v, C.pointerId), v.style.cursor = "grabbing", Fe.startDrag(C.clientX, C.clientY, C.pointerId);
        return;
      }
      if (In.locked === !0 || !ur || !X) return;
      const ps = Ce(C);
      let ia;
      if (C.shiftKey) {
        const Mi = Ky({
          frame: ur,
          point: ps,
          startRollDeg: Number(In.roll_deg ?? In.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Mi) return;
        ia = { kind: "roll", pointerId: C.pointerId, rollGesture: Mi };
      } else {
        const Mi = ((bt = Fn(e)) == null ? void 0 : bt.ui_settings) || Om();
        ia = {
          kind: "pan",
          pointerId: C.pointerId,
          startPoint: ps,
          startShot: { ...In },
          focalPx: eo(ur, In),
          invertX: Mi.invert_view_x === !0,
          invertY: Mi.invert_view_y === !0
        };
      }
      Ge(), (Ot = m.focus) == null || Ot.call(m, { preventScroll: !0 }), (It = v.setPointerCapture) == null || It.call(v, C.pointerId), v.style.cursor = "grabbing", X.beginGesture(), Q = ia;
      return;
    }
    if (!o) return;
    const ge = Ce(C), ve = Fn(e), Ve = String(((qn = ve == null ? void 0 : ve.active) == null ? void 0 : qn.selected_sticker_id) || ""), Be = xd(e, v.width, v.height);
    (cn = m.focus) == null || cn.call(m, { preventScroll: !0 });
    const Ke = () => Pm(pd(ve, Ul(e)), Ve, ge, Be);
    let Je = Ke();
    if (Je && (H != null && H.playback.playing) && (I(), Je = Ke()), Je && X) {
      if (Fe.stopMotion(), Ge(), String(((on = Je.item) == null ? void 0 : on.id) || "") !== Ve && X.apply({ type: "select-sticker", id: Je.item.id }), ((si = Je.item) == null ? void 0 : si.locked) === !0) {
        D();
        return;
      }
      const In = ge, ur = Je.geometry.center;
      F = {
        active: !0,
        kind: Je.hit.kind,
        pointerId: C.pointerId,
        startPoint: In,
        startCenter: { ...ur },
        startSticker: { ...Je.item },
        startDistance: Math.max(1, Math.hypot(In.x - ur.x, In.y - ur.y)),
        startAngle: Math.atan2(In.y - ur.y, In.x - ur.x),
        projection: Be
      }, X.beginGesture(), (ki = v.setPointerCapture) == null || ki.call(v, C.pointerId), v.style.cursor = Je.hit.kind === "rotate" ? "grabbing" : Je.hit.kind === "move" ? "move" : Je.hit.cursor, D();
      return;
    }
    (ra = v.setPointerCapture) == null || ra.call(v, C.pointerId), v.style.cursor = "grabbing", Fe.startDrag(C.clientX, C.clientY, C.pointerId);
  }), v.addEventListener("pointermove", (C) => {
    if (!i) {
      if (!Q) {
        if (!Fe.state.drag.active) return;
        tr(C, ne), Fe.moveDrag(C.clientX, C.clientY, "pano");
        return;
      }
      if (Q.pointerId !== C.pointerId || !X) return;
      if (tr(C, ne), Q.kind === "pan") {
        const ve = Ce(C);
        X.updateGesture({
          type: "pan-camera",
          startShot: Q.startShot,
          dx: ve.x - Q.startPoint.x,
          dy: ve.y - Q.startPoint.y,
          focalPx: Q.focalPx,
          invertX: Q.invertX,
          invertY: Q.invertY
        });
        return;
      }
      const ge = By(Q.rollGesture, Ce(C), C);
      if (!ge) return;
      Q.rollGesture = ge.gesture, X.updateGesture({ type: "set-roll", value: ge.rollDeg });
      return;
    }
    if (!F && !Fe.state.drag.active) {
      M(C);
      return;
    }
    if (F) {
      if (F.pointerId !== C.pointerId || !X) return;
      tr(C, ne);
      const ge = Ce(C);
      let ve = F.startSticker;
      if (F.kind === "move")
        ve = NN(
          F.startSticker,
          {
            x: F.startCenter.x + ge.x - F.startPoint.x,
            y: F.startCenter.y + ge.y - F.startPoint.y
          },
          F.projection
        );
      else if (F.kind === "scale") {
        const Ve = Math.hypot(ge.x - F.startCenter.x, ge.y - F.startCenter.y);
        ve = PN(F.startSticker, F.startDistance, Ve);
      } else if (F.kind === "rotate") {
        const Ve = Math.atan2(ge.y - F.startCenter.y, ge.x - F.startCenter.x);
        ve = AN(F.startSticker, F.startAngle, Ve, C.shiftKey === !0);
      }
      X.updateGesture({ type: "set-transform", value: ve }), D();
      return;
    }
    !o || !Fe.state.drag.active || (tr(C, ne), Fe.moveDrag(C.clientX, C.clientY, "pano"));
  });
  const O = () => {
    var ge, ve;
    if (!Q && !F) {
      if (!Fe.state.drag.active) return;
      Fe.endDrag(), v.style.cursor = "grab", D();
      return;
    }
    if (!X) return;
    const C = (Q == null ? void 0 : Q.pointerId) ?? (F == null ? void 0 : F.pointerId);
    Q = null, F = null;
    try {
      (ge = v.hasPointerCapture) != null && ge.call(v, C) && ((ve = v.releasePointerCapture) == null || ve.call(v, C));
    } catch {
    }
    X.cancelGesture(), v.style.cursor = "grab", D();
  }, Y = (C, ge = !1) => {
    var ve, Ve, Be, Ke;
    if (!i) {
      if (!Q) {
        if (!Fe.state.drag.active) return;
        tr(C, ne), (ve = v.releasePointerCapture) == null || ve.call(v, C.pointerId), v.style.cursor = "grab", Fe.endDrag(), D();
        return;
      }
      if (Q.pointerId !== C.pointerId || !X) return;
      tr(C, ne), Q = null, (Ve = v.releasePointerCapture) == null || Ve.call(v, C.pointerId), v.style.cursor = "grab", ge ? X.cancelGesture() : X.commitGesture(), M(C), D();
      return;
    }
    if (F) {
      if (F.pointerId !== C.pointerId || !X) return;
      tr(C, ne), F = null, (Be = v.releasePointerCapture) == null || Be.call(v, C.pointerId), v.style.cursor = "grab", ge ? X.cancelGesture() : X.commitGesture(), D();
      return;
    }
    !o || !Fe.state.drag.active || (tr(C, ne), (Ke = v.releasePointerCapture) == null || Ke.call(v, C.pointerId), v.style.cursor = "grab", Fe.endDrag(), D());
  };
  v.addEventListener("pointerup", Y), v.addEventListener("pointercancel", (C) => Y(C, !0)), v.addEventListener("lostpointercapture", O), v.addEventListener("pointerleave", (C) => {
    !i && Q || F || Fe.state.drag.active && Y(C);
  });
  const he = (C) => {
    const ge = document.activeElement;
    if (ge !== m && !m.contains(ge)) return;
    if (C.key === "Escape" && (Q || F) && X) {
      O(), kd(C);
      return;
    }
    if (!i || C.key !== "Delete" && C.key !== "Backspace" || !X) return;
    const ve = C.target, Ve = String((ve == null ? void 0 : ve.tagName) || "").toUpperCase();
    Ve === "INPUT" || Ve === "TEXTAREA" || ve != null && ve.isContentEditable || z.canDelete === !0 && (I(), Ge(), X.apply({ type: "delete-selected" }) && D(), kd(C));
  };
  window.addEventListener("keydown", he, !0);
  const T = ZN({
    requestFrame: (C) => requestAnimationFrame(C),
    cancelFrame: (C) => cancelAnimationFrame(C),
    restore: (C) => WP(C)
  }), q = (C) => {
    var ve, Ve, Be, Ke, Je, nt;
    if (!tr(C, ne)) return;
    if (!i) {
      const st = no(Fn(e));
      if (st && st.locked !== !0 && X) {
        const bt = Pl(C);
        bt !== 0 && (de || (Ge(), X.beginGesture(), de = !0), X.updateGesture({
          type: "step-fov",
          direction: bt
        }) ? ($ && clearTimeout($), $ = setTimeout(Pe, 180), D()) : X.hasGestureChanges() || (X.cancelGesture(), de = !1));
      } else if (!st) {
        const bt = Vm();
        Fe.applyWheelEvent(C) && D(), T.schedule(bt);
      }
      (ve = C.preventDefault) == null || ve.call(C), (Ve = C.stopPropagation) == null || Ve.call(C), (Be = C.stopImmediatePropagation) == null || Be.call(C);
      return;
    }
    if (!o) return;
    const ge = Vm();
    Fe.applyWheelEvent(C) && D(), (Ke = C.preventDefault) == null || Ke.call(C), (Je = C.stopPropagation) == null || Je.call(C), (nt = C.stopImmediatePropagation) == null || nt.call(C), T.schedule(ge);
  }, re = i ? [_, v] : [_];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((C) => {
    re.forEach((ge) => ge.addEventListener(C, q, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((C) => {
    v.addEventListener(C, (ge) => tr(ge, ne)), _.addEventListener(C, (ge) => tr(ge, ne));
  });
  const E = jo(e, "state_json");
  let B = null, K = null;
  E && !E.__panoPreviewPatchedCb && (B = E.callback, K = (C) => {
    const ge = B ? B(C) : void 0;
    return D(), ge;
  }, E.callback = K, E.__panoPreviewPatchedCb = K);
  const J = jo(e, "bg_color");
  let ie = null, xe = null;
  J && !J.__panoPreviewPatchedCb && (ie = J.callback, xe = (C) => {
    const ge = ie ? ie(C) : void 0;
    return D(), ge;
  }, J.callback = xe, J.__panoPreviewPatchedCb = xe);
  const ke = e.onRemoved, Ie = e.onResize, Te = e.onExecuted, Ye = e.onDragOver, se = e.onDragDrop;
  let we = null;
  const Oe = () => {
    i && (z.dropActive = !0, we && clearTimeout(we), we = setTimeout(() => {
      we = null, z.dropActive = !1;
    }, 140));
  }, b = i ? function(C) {
    return (Ye ? Ye.apply(this, arguments) : !1) === !0 ? !0 : Of(C == null ? void 0 : C.dataTransfer) ? (Oe(), !0) : !1;
  } : null, L = i ? function(C) {
    var Ve;
    if ((se ? se.apply(this, arguments) : !1) === !0) return !0;
    const ve = Array.from(((Ve = C == null ? void 0 : C.dataTransfer) == null ? void 0 : Ve.files) || []).find((Be) => mr(Be));
    return ve ? (we && clearTimeout(we), we = null, z.dropActive = !1, pe(ve), !0) : !1;
  } : null;
  i && (e.onDragOver = b, e.onDragDrop = L);
  const u = i ? JN(m, {
    onActive: (C) => {
      if (C) {
        Oe();
        return;
      }
      we && clearTimeout(we), we = null, z.dropActive = !1;
    },
    onDrop: (C) => {
      pe(C);
    }
  }) : () => {
  }, A = function(C) {
    e.__panoOutputFromRun = !0;
    const ge = cb(e, C);
    ni(e, ge ? "executed" : "sync", C), D();
    const ve = Te ? Te.apply(this, arguments) : void 0;
    return Fa(e), ve;
  };
  e.onExecuted = A;
  const x = e.onConnectionsChange, U = function(C, ge) {
    const ve = mm(e, C, ge, _f), Ve = mm(e, C, ge, xi), Be = arguments, Ke = x ? x.apply(this, Be) : void 0, Je = () => {
      V.destroyed || (Ve && kP(e), ve && ni(e, "connection-change"), Fa(e), D());
    };
    return Je(), queueMicrotask(Je), Ke;
  };
  e.onConnectionsChange = U;
  const ye = function() {
    const C = Ie ? Ie.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, D(), C;
  };
  e.onResize = ye;
  const ce = function() {
    return Le(), wd.unregister(this), ke ? ke.apply(this, arguments) : void 0;
  };
  e.onRemoved = ce;
  const Le = () => {
    var C, ge, ve, Ve, Be, Ke, Je, nt, st;
    V.destroyed = !0, (C = me == null ? void 0 : me.disconnect) == null || C.call(me), i ? Ge() : qe(), v.removeEventListener("lostpointercapture", O), u(), w(), window.removeEventListener("keydown", he, !0), (ve = (ge = e.__panoStateFlushers) == null ? void 0 : ge.delete) == null || ve.call(ge, le), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ve = X == null ? void 0 : X.destroy) == null || Ve.call(X), (Be = j == null ? void 0 : j.unmount) == null || Be.call(j), H && (H.playback.dispose(), H.video.remove(), H.stickerVideo.remove(), e.__panoSurfacePlayback === H && (e.__panoSurfacePlayback = null)), y.dispose(), e.__panoSurfaceScene = null, (Je = (Ke = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ke.dispose) == null || Je.call(Ke), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Ne(), T.dispose(), we && clearTimeout(we), we = null, Ff.disposeOwner(e), Ho(e), V.raf && cancelAnimationFrame(V.raf), V.raf = 0, ((nt = e.__panoCutoutNodeSurface) == null ? void 0 : nt.session) === X && (e.__panoCutoutNodeSurface = null), ((st = e.__panoStickersNodeSurface) == null ? void 0 : st.session) === X && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ye && (e.onResize = Ie), e.onExecuted === A && (e.onExecuted = Te), e.onConnectionsChange === U && (e.onConnectionsChange = x), K && (E == null ? void 0 : E.callback) === K && (E.callback = B), K && (E == null ? void 0 : E.__panoPreviewPatchedCb) === K && delete E.__panoPreviewPatchedCb, xe && (J == null ? void 0 : J.callback) === xe && (J.callback = ie), xe && (J == null ? void 0 : J.__panoPreviewPatchedCb) === xe && delete J.__panoPreviewPatchedCb, e.onDragOver === b && (e.onDragOver = Ye), e.onDragDrop === L && (e.onDragDrop = se), e.onRemoved === ce && (e.onRemoved = ke);
  };
  e.__panoDomRestore = Le, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = X && fe && !i ? { session: X, model: z } : null, e.__panoStickersNodeSurface = X && fe && i ? { session: X, model: z } : null, e.__panoDomPreview = {
    widget: W,
    root: m,
    canvas: v,
    requestDraw: D,
    state: V,
    emptyHintEl: S,
    nodeSurface: e.__panoCutoutNodeSurface
  }, wd.register(e), e.graph && ni(e, "attach"), D();
}
function zm(e, t = {}) {
  ib(e).attach({
    ...t,
    mode: "cutout"
  });
}
function jm(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (rb(e) && !r) {
    Tf(e);
    return;
  }
  ib(e).attach(t);
}
function JP(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function ZP(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), c = Math.max(0, Number.isFinite(a) ? a : 0) * o, p = Math.max(0, Number.isFinite(s) ? s : 0) * o, f = Number(r), h = f > 0 ? f : 1 / 0, m = Math.max(c, p);
  let _ = m > 0 ? Math.min(1, h / m) : 1;
  return n && c > 0 && p > 0 && (_ = Math.min(_, n.width * o / c, n.height * o / p)), {
    width: Math.max(1, Math.round(c * _)),
    height: Math.max(1, Math.round(p * _))
  };
}
function QP({
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
    var v, S, w;
    if (!a) {
      if (a = !0, (v = t == null ? void 0 : t.removeEventListener) == null || v.call(t, "fullscreenchange", f), c())
        try {
          const P = (S = t.exitFullscreen) == null ? void 0 : S.call(t);
          (w = P == null ? void 0 : P.catch) == null || w.call(P, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const e2 = { class: "pano-preview-node-surface" }, t2 = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (De(), ze("div", e2, [
      tt(sn, {
        icon: e.model.fullscreen ? ft(Xe).fullscreen_close : ft(Xe).fullscreen,
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
      e.model.viewUnavailable ? (De(), sr(Pf, { key: 0 })) : xt("", !0)
    ]));
  }
}, Bs = 140, n2 = 180, Hm = 40, Mu = 10;
function Gm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Wm(e, t) {
  const r = Gm(e), n = Gm(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Km(e) {
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
  return typeof ((o = Qt) == null ? void 0 : o.apiURL) == "function" ? Qt.apiURL(i) : i;
}
function Go(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Go(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Km({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = Go(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Km(e);
}
function ub(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function r2(e) {
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
function Md(e) {
  var i;
  const t = (i = Bn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Wm(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Wm(o, r)) return t[o];
  return null;
}
function i2(e) {
  var n, i;
  const t = Md(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Go(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function o2(e, t = "erp_image") {
  var _, v, S, w, P, W, V;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((D) => String((D == null ? void 0 : D.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((D, y) => String((D == null ? void 0 : D.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(y))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (S = (v = (_ = Bn) == null ? void 0 : _.graph) == null ? void 0 : v.getNodeById) == null ? void 0 : S.call(v, o), s = Md(o), c = Md(e == null ? void 0 : e.id), p = [
    (w = c == null ? void 0 : c.ui) == null ? void 0 : w.pano_input_images,
    c == null ? void 0 : c.pano_input_images,
    s == null ? void 0 : s.images,
    (P = s == null ? void 0 : s.ui) == null ? void 0 : P.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const D of p)
    if (Array.isArray(D))
      for (const y of D) {
        const z = Go(y);
        if (z) return z;
      }
  let f = [];
  try {
    f = typeof ((W = Bn) == null ? void 0 : W.getNodeImageUrls) == "function" ? Bn.getNodeImageUrls(a) || [] : [];
  } catch {
    f = [];
  }
  if (Array.isArray(f) && f.length > 0)
    for (const D of f) {
      const y = Go(D);
      if (y) return y;
    }
  if (a) {
    const D = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const y of D) {
      const z = Go(y);
      if (z) return z;
    }
  }
  const h = (V = a == null ? void 0 : a.widgets) == null ? void 0 : V.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image"), m = String((h == null ? void 0 : h.value) || "").trim();
  return m ? Qt.apiURL(`/view?filename=${encodeURIComponent(m)}&type=input&subfolder=`) : "";
}
function Nu(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Bm(e, t, r, n, i, o, a) {
  var p, f, h;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !ub(o) || r <= 1 || n <= 1) {
    Nu(t, r, n);
    return;
  }
  if (a.failed) {
    Nu(t, r, n);
    return;
  }
  const s = Number(((h = (f = (p = e == null ? void 0 : e.widgets) == null ? void 0 : p.find) == null ? void 0 : f.call(p, (m) => (m == null ? void 0 : m.name) === "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, c = a.render({
    width: r,
    height: n,
    camera: Vl(i, r, n),
    background: { media: o, revision: r2(o), coverage: s },
    layers: []
  });
  c ? t.drawImage(c.canvas, c.x, c.y, c.width, c.height, 0, 0, r, n) : Nu(t, r, n);
}
function Um(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class a2 {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = hy(() => this.requestDraw()), this.controller = Jd({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Kt(Number((n == null ? void 0 : n.yaw) || 0)),
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
        `min-height:${Bs}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = xn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Bs;
        },
        getHeight() {
          return Bs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Gl(bd(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Bs, Number(o.minHeight || 0)),
            minWidth: Math.max(n2, Number(o.minWidth || 0))
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
      return If(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Zo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = QP({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, c;
          return (c = (s = this.options).onOpen) == null ? void 0 : c.call(s, this.node);
        }
      }), this.surfaceApp = Kd(t2, {
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
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = h0(r), t.addEventListener("pointerdown", (o) => {
      var a, s, c;
      o.button === 0 && ((a = r.focus) == null || a.call(r, { preventScroll: !0 }), (s = t.setPointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
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
      JP(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !ub(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? md(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Bn.canvas) != null && n.graph) || this.node.graph === Bn.canvas.graph);
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
      return Um(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var c, p, f, h, m, _;
      const o = CP(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !Um(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((c = t.view) == null ? void 0 : c.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((p = t.view) == null ? void 0 : p.fov) || 100), s && ((f = this.setDirtyCanvas) == null || f.call(this, !0, !1)), (h = r == null ? void 0 : r.preventDefault) == null || h.call(r), (m = r == null ? void 0 : r.stopPropagation) == null || m.call(r), (_ = r == null ? void 0 : r.stopImmediatePropagation) == null || _.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Mu * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Hm - Mu);
    return { x: Mu, y: Hm, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Bm(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? py : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = ZP(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = i2(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = cc(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const c = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, p = () => this.requestDraw();
      s.addEventListener("loadedmetadata", c), s.addEventListener("loadeddata", c), s.addEventListener("timeupdate", p), s.addEventListener("play", p), s.addEventListener("pause", p), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", c), s.removeEventListener("loadeddata", c), s.removeEventListener("timeupdate", p), s.removeEventListener("play", p), s.removeEventListener("pause", p), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = o2(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Bm(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, c, p, f, h, m, _, v, S, w, P;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (p = (c = this.surfaceApp) == null ? void 0 : c.unmount) == null || p.call(c), this.surfaceApp = null, (h = (f = this.surfaceHost) == null ? void 0 : f.remove) == null || h.call(f), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (m = this.mediaCleanup) == null || m.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (v = (_ = this.root) == null ? void 0 : _.remove) == null || v.call(_);
    } catch {
    }
    try {
      tb(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((P = (w = (S = this.node) == null ? void 0 : S.widgets) == null ? void 0 : w.find) == null ? void 0 : P.call(w, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function s2(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new a2(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function db(e, t, r) {
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
function Lf(e) {
  return !!(e != null && e.prototype);
}
function ss(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function l2(e, t = {}) {
  Lf(e) || s2(e, {
    ...t,
    onOpen: ss(e, t.onOpen)
  });
}
function c2(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Lf(e)) {
    jm(e, {
      ...n,
      onOpen: ss(e, t.onOpen)
    });
    return;
  }
  db(e, "stickers_node_preview", (i) => {
    jm(i, {
      ...n,
      onOpen: ss(i, t.onOpen)
    });
  });
}
function u2(e, t = {}) {
  if (!Lf(e)) {
    zm(e, {
      ...t,
      onOpen: ss(e, t.onOpen)
    });
    return;
  }
  db(e, "cutout_preview", (r) => {
    zm(r, {
      ...t,
      onOpen: ss(r, t.onOpen)
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
function Ym(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function d2({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
const Nt = Object.freeze({
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
}), f2 = new Set(Object.values(Nt));
function p2({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, c = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), f = 1, h = 0;
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
      const P = c;
      c = /* @__PURE__ */ new Set(), (P.size || n()) && m(() => r(S, P));
    } finally {
      a = !1;
    }
    (c.size || p.size || n()) && _();
  }
  return {
    requestDraw(S) {
      if (!f2.has(S)) throw new Error(`Unknown draw reason: ${S}`);
      S === Nt.STATE && (h += 1), c.add(S), _();
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
const h2 = 250, m2 = 600, g2 = 180, y2 = 2;
function b2(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ta(e, t, r) {
  return e + (t - e) * r;
}
function v2(e, t, r = 1) {
  const n = Math.max(
    Math.abs(qd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / g2 + i / y2);
  return Math.round(Ta(h2, m2, o));
}
function _2(e, t, r) {
  const n = b2(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Ta(i, t.position[o], n)),
    yaw_deg: Kt(e.yaw_deg + qd(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Ta(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Ta(e.hFOV_deg, t.hFOV_deg, n),
    distance: Ta(e.distance, t.distance, n)
  };
}
function S2(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(qd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function w2(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return S2(e, t) ? null : { from: e, to: t, startTs: r, durationMs: v2(e, t, n), end: i };
}
function x2(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: _2(e.from, e.to, r), done: !1 };
}
function hl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function k2(e, t, r) {
  const n = hl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function Mo(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function M2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function N2({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: a,
  getBrushPresetIdForTool: s,
  isActiveLassoTool: c
}) {
  var V, D;
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
    historyEntries: Array.from({ length: 8 }, (y, z) => ({ index: z, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!p) return f;
  const h = ((V = t.find((y) => i(e.paintColor, y.color))) == null ? void 0 : V.id) || "", m = !h, _ = o(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), S = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), w = e.brushSizes[S] ?? 10, P = c(), W = Array.from({ length: 8 }, (y, z) => e.customPaintHistory[z] || null);
  return {
    ...f,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: h,
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
    historyEntries: W.map((y, z) => ({
      index: z,
      color: y ? { cssColor: n(y, 1) } : null
    })),
    sizeValue: w,
    sizeText: String(w),
    sizeFill: `${Math.max(0, Math.min(100, (w - 1) / 119 * 100))}%`,
    sizeDisabled: P,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function P2({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const A2 = {
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
function C2(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = A2[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Pu(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function I2({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? Xe.eye : Xe.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function E2({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function O2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Wo = "erp", F2 = ["1:1", "4:3", "3:2", "16:9"];
function fb(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...F2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: Wo, label: Number(r) === 180 ? "180°" : "360°", active: e === Wo }] : []
  ];
}
function T2({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
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
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: C2(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : c,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function D2({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: c,
  cutoutAspectOpen: p,
  isExternalSticker: f,
  isStickerHidden: h,
  canRestoreSelectedToInitial: m,
  iconSet: _,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: v = !1,
  cameraDeletable: S = !1,
  erpChoice: w = !1,
  coverage: P = 360
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
      const V = m(), D = h(t);
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
        label: D ? "Show" : "Hide",
        tip: D ? "Show input image" : "Hide input image",
        icon: D ? _.eye : _.eye_dashed
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
        choices: fb(c, { erp: w, coverage: P })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: _.rotate_90, disabled: c === Wo }
    ], v ? S && W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete }) : W.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? _.lock_open : _.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: _.delete, disabled: !!s }
    );
  return pb(i.corners, W);
}
const Xm = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function L2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? Xm.filter((s) => s.cameraTip) : Xm;
  return pb([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: c, tip: p, cameraTip: f }) => ({ key: s, label: c, tip: n ? f : p, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Xe.delete }] : []
  ]);
}
function R2(e, t, r, n, i) {
  const { minX: s, maxX: c, minY: p, maxY: f } = e || {};
  if (![s, c, p, f].every(Number.isFinite)) return null;
  const h = Math.min(Math.max((s + c) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), m = Math.max(14, i - r - 14), _ = f + 18, v = p - 18 - r;
  let S;
  return _ <= m ? S = Math.max(_, 14) : v >= 14 ? S = Math.min(v, m) : S = Math.min(Math.max(_, 14), m), { left: h, top: S };
}
function pb(e, t) {
  const r = e.map((p) => ({ x: Number(p == null ? void 0 : p.x), y: Number(p == null ? void 0 : p.y) })).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((p) => p.x), i = r.map((p) => p.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), c = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: c + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: c }
  };
}
const hb = "painting";
function V2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const $2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function z2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: c = !1, cameraHideable: p = !1, stickers: f = !0, scene: h = !1, sceneLocked: m = !1 }) {
  const _ = (W, V, D, y, z, H, { keyable: te = !0, hideable: oe = !0 } = {}) => {
    const I = (G) => (r == null ? void 0 : r.owner) === W && r.lane === G ? r.frames.map((X) => X + H) : [];
    return {
      id: W,
      label: D,
      icon: y,
      clip: z,
      selected: W === n,
      hideable: oe,
      visible: V.visible,
      keyable: te,
      open: te && o.has(W),
      keys: Bx(V).map((G) => ({ frame: G.frame + H, full: G.full })),
      selectedFrames: I(null),
      lanes: (te ? ta(V) : []).map((G) => ({
        key: `${W}:${G}`,
        lane: G,
        label: $2[G],
        frames: V[G].keyframes.map((X) => X.frame + H),
        selectedFrames: I(G)
      }))
    };
  }, v = f ? e.stickers : [], S = v.filter((W) => W.placement === "sky").sort((W, V) => V.z_index - W.z_index), w = v.filter((W) => W.placement === "world"), P = ({ start: W, in: V, duration: D }) => ({ clip: { start: W, end: D === null ? null : W + D }, offset: W - V });
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
      ...c ? [_("camera", e.camera, "Camera", Xe.camera, null, 0, { hideable: p })] : [],
      ...[...S, ...w].map((W) => {
        const { clip: V, offset: D } = P(W.clip);
        return _(W.id, W, rd(W), Xe.image, V, D);
      }),
      ...f && (V2(e.painting) || !e.painting_visible) ? [{
        id: hb,
        label: "Paint",
        icon: Xe.paintbrush_vertical_tool,
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
      ...f && (h || Ll(e.scene)) ? [(() => {
        const { clip: W, offset: V } = P(e.scene.clip);
        return _("scene", e.scene, "Scene", Xe.box, W, V, { keyable: !1 });
      })()] : []
    ]
  };
}
function j2(e, t, r, n) {
  const i = qx(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
const H2 = { class: "pano-floating-right" }, G2 = {
  key: 0,
  class: "pano-floating-space"
}, W2 = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, K2 = ["data-settled"], B2 = ["data-ready", "data-settled"], U2 = ["aria-label", "data-tip"], Y2 = {
  key: 1,
  class: "pano-camera-preview-label"
}, X2 = {
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
    return (t, r) => (De(), ze(lt, null, [
      Se("div", H2, [
        e.space ? ti((De(), ze("div", G2, [
          Se("div", W2, [
            (De(!0), ze(lt, null, Rt(e.space.modes, (n) => (De(), sr(sn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          tt(sn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [ro, e.space.visible]
        ]) : xt("", !0),
        (De(!0), ze(lt, null, Rt(e.buttons, (n) => (De(), sr(sn, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      ti(Se("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Se("div", {
          class: wt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: $t({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Se("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Se("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (De(), ze("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            tt(Ut, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, U2)) : xt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (De(), ze("div", Y2, mt(e.preview.label || "Preview unavailable"), 1)) : xt("", !0)
        ], 14, B2)
      ], 8, K2), [
        [ro, e.preview.visible]
      ])
    ], 64));
  }
}, q2 = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, J2 = ["y2", "transform"], Z2 = ["transform"], Q2 = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = _t(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => ti((De(), ze("div", {
      class: wt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (De(), ze("svg", q2, [
        o[1] || (o[1] = Se("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (De(!0), ze(lt, null, Rt(ft(r), (a) => (De(), ze("line", {
          key: a,
          class: wt(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, J2))), 128)),
        Se("g", { transform: n.value }, [...o[0] || (o[0] = [
          Se("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Z2),
        o[2] || (o[2] = Se("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [ro, e.model.visible === !0]
    ]);
  }
}, eA = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (De(), ze("div", {
      class: wt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      tt(Yy, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      tt(sn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      tt(Q2, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, tA = ["aria-label"], nA = { class: "pano-canvas-confirm-title" }, rA = { class: "pano-canvas-confirm-text" }, iA = { class: "pano-canvas-confirm-actions" }, oA = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, aA = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ en(null), n = /* @__PURE__ */ en(null);
    let i = null;
    function o() {
      const h = n.value;
      return h ? Array.from(h.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((m) => m instanceof HTMLElement ? !m.hidden && m.tabIndex >= 0 && m.offsetParent !== null : !1) : [];
    }
    function a(h) {
      const m = n.value;
      if (!m) return;
      const _ = m.querySelector(`[data-action='${h}']`);
      _ instanceof HTMLButtonElement && _.click();
    }
    function s() {
      var S;
      const h = n.value;
      if (!h) return;
      const m = h.querySelector("[data-action='confirm-accept']");
      if (m instanceof HTMLElement) {
        m.focus();
        return;
      }
      const v = o()[0] || h;
      (S = v == null ? void 0 : v.focus) == null || S.call(v);
    }
    function c() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function p(h) {
      var P;
      if (h.defaultPrevented) return;
      if (h.key === "Escape") {
        h.preventDefault(), h.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (h.key !== "Tab") return;
      const m = o(), _ = n.value;
      if (!m.length) {
        h.preventDefault(), (P = _ == null ? void 0 : _.focus) == null || P.call(_);
        return;
      }
      const v = m[0], S = m[m.length - 1], w = document.activeElement;
      if (h.shiftKey) {
        (w === v || w === _ || !(_ != null && _.contains(w))) && (h.preventDefault(), S.focus());
        return;
      }
      (w === S || !(_ != null && _.contains(w))) && (h.preventDefault(), v.focus());
    }
    function f(h) {
      h.target === r.value && a("confirm-cancel");
    }
    return Zi(() => t.model.visible, (h, m) => {
      if (h) {
        i = document.activeElement, rc(() => {
          s();
        });
        return;
      }
      m && c();
    }, { immediate: !0 }), ds(() => {
      c();
    }), (h, m) => e.model.visible === !0 ? (De(), ze("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Gt(f, ["self"])
    }, [
      Se("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: p
      }, [
        Se("div", nA, mt(e.model.title), 1),
        Se("div", rA, mt(e.model.text), 1),
        Se("div", iA, [
          m[0] || (m[0] = Se("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Se("button", oA, mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, tA)
    ], 512)) : xt("", !0);
  }
}, sA = ["data-paint-pane"], lA = ["hidden"], cA = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], uA = ["aria-pressed", "disabled"], dA = ["hidden"], fA = { class: "pano-paint-color-pop-head" }, pA = { class: "pano-paint-color-field" }, hA = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, mA = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, gA = { class: "pano-paint-color-field" }, yA = { class: "pano-paint-alpha-wrap" }, bA = ["value"], vA = { "data-paint-alpha-value": "" }, _A = ["hidden"], SA = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, wA = ["data-paint-history-index", "aria-label", "disabled"], xA = ["data-paint-footer"], kA = ["data-paint-group"], MA = ["hidden"], NA = ["value", "disabled"], PA = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, AA = ["hidden"], CA = {
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
    return (n, i) => (De(), ze("div", {
      class: wt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (De(!0), ze(lt, null, Rt(e.panes, (o) => {
        var a;
        return De(), ze("div", {
          key: o.key,
          class: wt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (De(), ze("div", {
            key: 0,
            class: wt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (De(!0), ze(lt, null, Rt(e.paintSwatches, (s) => (De(), ze("button", {
              key: s.id,
              class: wt(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: $t(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, cA))), 128)),
            Se("button", {
              class: wt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: $t({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, uA),
            Se("div", {
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
              Se("div", fA, [
                Se("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: $t({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Se("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Se("div", pA, [
                Se("div", hA, [
                  Se("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: $t({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Se("div", mA, [
                  Se("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: $t({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Se("label", gA, [
                i[1] || (i[1] = Se("span", null, "Opacity", -1)),
                Se("div", yA, [
                  Se("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, bA),
                  Se("span", vA, mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Se("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Se("div", SA, [
                  (De(!0), ze(lt, null, Rt(e.state.historyEntries || [], (s) => (De(), ze("button", {
                    key: s.index,
                    class: wt(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: $t(r(s.color))
                  }, null, 14, wA))), 128))
                ])
              ], 8, _A)
            ], 12, dA)
          ], 10, lA)) : xt("", !0),
          Se("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Se("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (De(!0), ze(lt, null, Rt(o.tools, (s) => {
                var c;
                return De(), sr(sn, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((c = e.state.activeTools) == null ? void 0 : c[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, kA),
            Se("div", {
              class: wt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Se("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: $t({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, NA),
              Se("span", PA, mt(e.state.sizeText || "10"), 1)
            ], 10, MA),
            Se("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              tt(sn, {
                icon: ft(Xe).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, AA)
          ], 8, xA)
        ], 10, sA);
      }), 128))
    ], 2));
  }
}, IA = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ en(null), n = /* @__PURE__ */ en(null), i = /* @__PURE__ */ en(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (De(), ze(lt, null, [
      Se("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Se("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Se("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, EA = ["aria-label"], OA = ["data-tip", "aria-pressed"], FA = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = _t(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (De(), ze("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: $t({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (De(!0), ze(lt, null, Rt(e.buttons, (o) => (De(), ze("button", qr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), mt(o.label), 17, OA))), 128))
    ], 12, EA));
  }
}, TA = {
  key: 0,
  class: "pano-cutout-menu"
}, DA = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, LA = ["data-aspect"], RA = ["data-action", "aria-label", "data-tip", "disabled"], VA = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (De(), ze("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: $t({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (De(!0), ze(lt, null, Rt(e.model.items || [], (n) => (De(), ze(lt, {
        key: n.key
      }, [
        n.kind === "aspect" ? (De(), ze("div", TA, [
          Se("button", DA, [
            tt(Ut, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Se("div", {
            class: wt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (De(!0), ze(lt, null, Rt(n.choices || [], (i) => (De(), ze("button", {
              key: i.value,
              class: wt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, mt(i.label), 11, LA))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (De(), sr(FA, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (De(), ze("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          tt(Ut, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, RA))
      ], 64))), 128))
    ], 4));
  }
}, $A = {
  key: 0,
  class: "pano-easing"
}, zA = { class: "pano-section-title" }, jA = { class: "pano-easing-range" }, HA = { class: "pano-easing-modes" }, GA = ["aria-pressed", "onClick"], WA = ["viewBox"], KA = ["x", "y"], BA = ["x1", "y1", "x2", "y2"], UA = ["d"], YA = ["x1", "y1", "x2", "y2"], XA = ["x1", "y1", "x2", "y2"], qA = ["cx", "cy"], JA = ["cx", "cy"], ZA = { class: "pano-easing-note" }, Br = 132, Hi = 14, QA = {
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
    ], o = /* @__PURE__ */ en(null), a = _t(() => {
      var v;
      return Array.isArray((v = r.model) == null ? void 0 : v.easing) ? r.model.easing : null;
    }), s = (v) => Hi + v * Br, c = (v) => Hi + (1 - v) * Br, p = _t(() => {
      var W;
      if (((W = r.model) == null ? void 0 : W.easing) === "hold") return `M${s(0)} ${c(0)} H${s(1)} V${c(1)}`;
      const [v, S, w, P] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${c(0)} C${s(v)} ${c(S)} ${s(w)} ${c(P)} ${s(1)} ${c(1)}`;
    }), f = _t(() => a.value ? a.value.map((v) => v.toFixed(2)).join(", ") : "");
    function h(v) {
      var S;
      return JSON.stringify(v.easing) === JSON.stringify((S = r.model) == null ? void 0 : S.easing);
    }
    function m(v, S) {
      n("timeline", { type: "easing", easing: v, commit: S });
    }
    function _(v, S) {
      var D;
      if (v.button !== 0 || !a.value) return;
      const w = v.currentTarget;
      (D = w.setPointerCapture) == null || D.call(w, v.pointerId);
      let P = null;
      const W = (y) => {
        const z = o.value.getBoundingClientRect(), H = z.width / (Br + Hi * 2), te = ((y.clientX - z.left) / H - Hi) / Br, oe = 1 - ((y.clientY - z.top) / H - Hi) / Br;
        P = [...P || a.value], P[S] = Math.round(Math.min(1, Math.max(0, te)) * 100) / 100, P[S + 1] = Math.round(Math.min(1, Math.max(0, oe)) * 100) / 100, m(P, !1);
      }, V = () => {
        w.removeEventListener("pointermove", W), w.removeEventListener("pointerup", V), w.removeEventListener("pointercancel", V), P && m(P, !0);
      };
      w.addEventListener("pointermove", W), w.addEventListener("pointerup", V), w.addEventListener("pointercancel", V);
    }
    return (v, S) => e.model ? (De(), ze("div", $A, [
      Se("div", zA, [
        S[2] || (S[2] = Se("span", null, "Easing", -1)),
        Se("span", jA, mt(e.model.label), 1)
      ]),
      Se("div", HA, [
        (De(), ze(lt, null, Rt(i, (w) => Se("button", {
          key: w.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": h(w) ? "true" : "false",
          onClick: (P) => m(w.easing, !0)
        }, mt(w.label), 9, GA)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (De(), ze("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Br + Hi * 2} ${Br + Hi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Se("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: c(1),
          width: Br,
          height: Br
        }, null, 8, KA),
        Se("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: c(0),
          x2: s(1),
          y2: c(1)
        }, null, 8, BA),
        Se("path", {
          class: "pano-easing-curve",
          d: p.value
        }, null, 8, UA),
        a.value ? (De(), ze(lt, { key: 0 }, [
          Se("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: c(0),
            x2: s(a.value[0]),
            y2: c(a.value[1])
          }, null, 8, YA),
          Se("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: c(1),
            x2: s(a.value[2]),
            y2: c(a.value[3])
          }, null, 8, XA),
          Se("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: c(a.value[1]),
            r: "6",
            onPointerdown: S[0] || (S[0] = (w) => _(w, 0))
          }, null, 40, qA),
          Se("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: c(a.value[3]),
            r: "6",
            onPointerdown: S[1] || (S[1] = (w) => _(w, 2))
          }, null, 40, JA)
        ], 64)) : xt("", !0)
      ], 8, WA)) : xt("", !0),
      Se("div", ZA, [
        e.model.mixed ? (De(), ze(lt, { key: 0 }, [
          Aa("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (De(), ze(lt, { key: 1 }, [
          Aa("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (De(), ze(lt, { key: 2 }, [
          Aa("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (De(), ze(lt, { key: 3 }, [
          Aa("cubic-bezier(" + mt(f.value) + ")", 1)
        ], 64)) : xt("", !0)
      ])
    ])) : xt("", !0);
  }
}, eC = {
  class: "pano-side",
  "data-side": ""
}, tC = { class: "pano-side-head" }, nC = { class: "pano-side-title" }, rC = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, iC = {
  key: 0,
  class: "pano-side-scroll"
}, oC = { class: "pano-inspector" }, aC = { class: "pano-ui-row pano-coverage-row" }, sC = ["data-selected"], lC = ["aria-pressed", "disabled"], cC = ["aria-pressed", "disabled"], uC = {
  key: 0,
  class: "pano-section-title"
}, dC = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, fC = {
  class: "pano-picker",
  "data-picker": "selection"
}, pC = ["disabled"], hC = { class: "pano-picker-label" }, mC = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, gC = ["hidden"], yC = ["data-selection-id"], bC = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, vC = {
  key: 2,
  class: "pano-state-actions"
}, _C = ["disabled"], SC = ["data-key"], wC = { class: "pano-field-group-values" }, xC = ["title", "onPointerdown"], kC = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], MC = ["data-key"], NC = ["min", "max", "step", "value", "disabled", "data-param-key"], PC = ["min", "max", "step", "value", "disabled", "data-param-key"], AC = ["open"], CC = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, IC = { class: "pano-ui-settings-body" }, EC = { class: "pano-ui-row" }, OC = ["data-selected"], FC = ["aria-pressed"], TC = ["aria-pressed"], DC = { class: "pano-ui-row" }, LC = ["data-selected"], RC = ["aria-pressed"], VC = ["aria-pressed"], $C = {
  key: 1,
  class: "pano-side-footer"
}, zC = ["data-action"], jC = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = _t(() => {
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
    function c(p, f) {
      const h = s[f.key];
      if (p.button !== 0 || !h || a(f, r.model)) return;
      p.preventDefault();
      const m = p.currentTarget, _ = p.clientX, v = Number(h.value) || 0;
      let S = !1;
      m.setPointerCapture(p.pointerId);
      const w = (W) => {
        if (!S && Math.abs(W.clientX - _) < 3) return;
        S = !0;
        const V = v + (W.clientX - _) * f.drag * (W.shiftKey ? 0.1 : 1);
        h.value = String(Number(V.toFixed(3))), h.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, P = () => {
        m.removeEventListener("pointermove", w), m.removeEventListener("pointerup", P), m.removeEventListener("pointercancel", P), m.removeEventListener("lostpointercapture", P), S ? h.dispatchEvent(new Event("change", { bubbles: !0 })) : h.focus();
      };
      m.addEventListener("pointermove", w), m.addEventListener("pointerup", P), m.addEventListener("pointercancel", P), m.addEventListener("lostpointercapture", P);
    }
    return (p, f) => {
      var h, m, _, v, S;
      return De(), ze("div", eC, [
        Se("div", tC, [
          Se("div", nC, [
            Se("span", rC, [
              tt(Ut, {
                icon: ft(Xe).globe
              }, null, 8, ["icon"])
            ]),
            Se("span", null, mt(e.nodeTitle), 1)
          ]),
          f[1] || (f[1] = Se("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[10] || (f[10] = Se("div", { class: "pano-divider" }, null, -1)),
        i.value ? (De(), ze("div", iC, [
          Se("div", oC, [
            f[9] || (f[9] = Se("div", { class: "pano-section-title" }, [
              Se("span", null, "Scene")
            ], -1)),
            Se("div", aC, [
              f[2] || (f[2] = Se("label", null, "Coverage", -1)),
              Se("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((h = e.model.coverage) == null ? void 0 : h.value) === 180 ? "1" : "0"
              }, [
                Se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((m = e.model.coverage) == null ? void 0 : m.value) === 360 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "360", 8, lC),
                Se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((S = e.model.coverage) == null ? void 0 : S.disabled) === !0
                }, "180", 8, cC)
              ], 8, sC)
            ]),
            e.model.transformTitle !== !1 ? (De(), ze("div", uC, [...f[3] || (f[3] = [
              Se("span", null, "Transform", -1)
            ])])) : xt("", !0),
            e.model.selectionPicker ? (De(), ze("div", dC, [
              Se("label", null, mt(e.model.selectionPicker.label), 1),
              Se("div", fC, [
                Se("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Se("span", hC, [
                    e.model.selectionPicker.currentIcon ? (De(), ze("span", mC, [
                      tt(Ut, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : xt("", !0),
                    Se("span", null, mt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  f[4] || (f[4] = Se("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, pC),
                Se("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (De(!0), ze(lt, null, Rt(e.model.selectionPicker.items || [], (w) => (De(), ze("button", {
                    key: w.id,
                    type: "button",
                    class: wt(["pano-picker-item", { active: w.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": w.id
                  }, [
                    w.icon ? (De(), ze("span", bC, [
                      tt(Ut, {
                        icon: w.icon
                      }, null, 8, ["icon"])
                    ])) : xt("", !0),
                    Se("span", null, mt(w.label), 1)
                  ], 10, yC))), 128))
                ], 8, gC)
              ])
            ])) : xt("", !0),
            e.model.copyStateButton ? (De(), ze("div", vC, [
              Se("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                tt(Ut, {
                  icon: ft(Xe).copy
                }, null, 8, ["icon"]),
                Se("span", null, mt(e.model.copyStateButton.label), 1)
              ], 8, _C)
            ])) : xt("", !0),
            Se("div", {
              class: wt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (De(!0), ze(lt, { key: 0 }, Rt(e.model.notes, (w) => (De(), ze("div", {
                key: w,
                class: "pano-param-note"
              }, mt(w), 1))), 128)) : (De(!0), ze(lt, { key: 1 }, Rt(e.model.rows || [], (w) => (De(), ze(lt, {
                key: w.key
              }, [
                w.grouped ? (De(), ze("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": w.key
                }, [
                  Se("label", null, mt(w.label), 1),
                  Se("div", wC, [
                    (De(!0), ze(lt, null, Rt(w.fields, (P) => (De(), ze("div", {
                      key: P.key,
                      class: "pano-axis-field"
                    }, [
                      Se("span", {
                        class: wt(["pano-axis", { disabled: a(P, e.model) }]),
                        title: P.label,
                        onPointerdown: (W) => c(W, P)
                      }, mt(P.short), 43, xC),
                      Se("input", {
                        ref_for: !0,
                        ref: (W) => {
                          s[P.key] = W;
                        },
                        type: "number",
                        min: P.min,
                        max: P.max,
                        step: P.step,
                        value: P.displayValue,
                        disabled: a(P, e.model),
                        "aria-label": `${w.label} ${P.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": P.key
                      }, null, 8, kC)
                    ]))), 128))
                  ])
                ], 8, SC)) : (De(), ze("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": w.key
                }, [
                  Se("label", null, mt(w.label), 1),
                  Se("input", {
                    type: "range",
                    min: w.fields[0].min,
                    max: w.fields[0].max,
                    step: w.fields[0].step,
                    value: w.fields[0].value,
                    disabled: a(w.fields[0], e.model),
                    style: $t(o(w.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": w.fields[0].key
                  }, null, 12, NC),
                  Se("input", {
                    type: "number",
                    min: w.fields[0].min,
                    max: w.fields[0].max,
                    step: w.fields[0].step,
                    value: w.fields[0].displayValue,
                    disabled: a(w.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": w.fields[0].key
                  }, null, 8, PC)
                ], 8, MC))
              ], 64))), 128))
            ], 2),
            tt(QA, {
              model: e.easing,
              onTimeline: f[0] || (f[0] = (w) => n("timeline", w))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (De(), ze("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Se("summary", null, [
                f[5] || (f[5] = Se("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Se("span", CC, [
                  tt(Ut, {
                    icon: ft(Xe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Se("div", IC, [
                Se("div", EC, [
                  f[6] || (f[6] = Se("label", null, "Drag X", -1)),
                  Se("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, FC),
                    Se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, TC)
                  ], 8, OC)
                ]),
                Se("div", DC, [
                  f[7] || (f[7] = Se("label", null, "Drag Y", -1)),
                  Se("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, RC),
                    Se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, VC)
                  ], 8, LC)
                ]),
                f[8] || (f[8] = Se("div", { class: "pano-ui-row" }, [
                  Se("span"),
                  Se("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, AC)) : xt("", !0)
          ])
        ])) : xt("", !0),
        (e.model.footerButtons || []).length ? (De(), ze("div", $C, [
          (De(!0), ze(lt, null, Rt(e.model.footerButtons, (w) => (De(), ze("button", {
            key: w.action,
            class: wt(["pano-btn", { "pano-btn-primary": w.primary === !0 }]),
            type: "button",
            "data-action": w.action
          }, mt(w.label), 11, zC))), 128))
        ])) : xt("", !0)
      ]);
    };
  }
}, HC = { class: "pano-timeline-bar" }, GC = ["aria-label", "data-tip"], WC = ["aria-label", "data-tip"], KC = { class: "pano-timeline-time" }, BC = ["data-tip"], UC = { key: 0 }, YC = ["min", "max", "value"], XC = ["data-tip"], qC = { key: 0 }, JC = ["max", "value"], ZC = ["aria-expanded"], QC = ["inert"], eI = { class: "pano-timeline-name" }, tI = ["aria-pressed", "aria-label", "data-tip", "onClick"], nI = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, rI = ["disabled", "aria-expanded", "aria-label", "onClick"], iI = ["title", "aria-current", "onClick"], oI = ["data-keyed", "aria-label", "onClick"], aI = ["onPointerdown"], sI = ["onPointerdown"], lI = ["onPointerdown"], cI = ["onPointerdown"], uI = ["aria-label", "data-tip", "onPointerdown"], dI = { key: 0 }, fI = ["onPointerdown"], pI = ["aria-label", "data-tip", "onPointerdown"], hI = { key: 0 }, mI = 10, gI = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ bl(0), playing: /* @__PURE__ */ bl(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ en(null), o = /* @__PURE__ */ en(null), a = /* @__PURE__ */ en(1), s = /* @__PURE__ */ en(0), c = /* @__PURE__ */ en(!1);
    let p = null, f = null, h = null;
    oc(() => {
      p = new ResizeObserver(([pe]) => {
        a.value = Math.max(1, pe.contentRect.width);
      }), i.value && p.observe(i.value), f = new ResizeObserver(([pe]) => {
        s.value = pe.contentRect.height;
      }), o.value && f.observe(o.value);
    }), ds(() => {
      p == null || p.disconnect(), f == null || f.disconnect(), h == null || h();
    });
    const m = _t(() => Math.max(1, Number(r.model.span || 1))), _ = _t(() => r.playhead.frame.value), v = _t(() => r.playhead.playing.value), S = _t(() => Ux(_.value, Number(r.model.fps || 1))), w = _t(() => a.value / m.value), P = (pe) => `${pe / m.value * 100}%`, W = _t(() => sk(m.value, w.value));
    function V(pe) {
      const Q = i.value.getBoundingClientRect(), F = Math.floor((pe - Q.left) / Math.max(1, Q.width) * m.value);
      return Math.min(m.value - 1, Math.max(0, F));
    }
    function D(pe, Q, F) {
      const $ = Math.ceil(mI / Math.max(1e-6, w.value)), de = new Map(Q.map((Pe) => [Pe.frame, Pe.full]));
      return lk(Q.map((Pe) => Pe.frame), $).map((Pe, Ge) => ({
        ...Pe,
        key: `${pe}:${Ge}`,
        partial: Pe.frames.some((qe) => !de.get(qe)),
        selected: Pe.frames.some((qe) => F.includes(qe))
      }));
    }
    const y = _t(() => {
      const pe = /* @__PURE__ */ new Map();
      for (const Q of r.model.rows || []) {
        pe.set(Q.id, D(Q.id, Q.keys, Q.selectedFrames));
        for (const F of Q.lanes) pe.set(F.key, D(F.key, F.frames.map(($) => ({ frame: $, full: !0 })), F.selectedFrames));
      }
      return pe;
    });
    function z(pe) {
      const Q = pe.end === null ? m.value : pe.end;
      return { left: P(pe.start), width: P(Math.max(0, Q - pe.start)) };
    }
    function H(pe, Q) {
      const F = pe.clientX, $ = Math.max(1e-6, w.value);
      let de = 0;
      Q("start", 0, pe);
      const Pe = (qe) => {
        if (qe.pointerId !== pe.pointerId) return;
        const le = Math.round((qe.clientX - F) / $);
        le !== de && (de = le, Q("move", de, qe));
      }, Ge = (qe) => {
        qe.pointerId === pe.pointerId && (h(), Q("end", de, qe));
      };
      h == null || h(), h = () => {
        window.removeEventListener("pointermove", Pe), window.removeEventListener("pointerup", Ge), window.removeEventListener("pointercancel", Ge), h = null;
      }, window.addEventListener("pointermove", Pe), window.addEventListener("pointerup", Ge), window.addEventListener("pointercancel", Ge);
    }
    function te(pe) {
      pe.button === 0 && H(pe, (Q, F, $) => n("action", { type: "seek", frame: V($.clientX), phase: Q }));
    }
    function oe(pe, Q, F) {
      pe.button === 0 && (n("action", { type: "select-row", id: Q.id }), H(pe, ($, de) => n("action", { type: "clip", id: Q.id, mode: F, delta: de, phase: $ })));
    }
    function I(pe, Q, F, $, de) {
      if (pe.button === 0) {
        if (pe.shiftKey) {
          n("action", { type: "select-keys", owner: Q.id, lane: F, frames: $.frames, additive: !0 });
          return;
        }
        $.frames.every((Pe) => de.includes(Pe)) || n("action", { type: "select-keys", owner: Q.id, lane: F, frames: $.frames, additive: !1 }), H(pe, (Pe, Ge) => n("action", { type: "move-keys", delta: Ge, phase: Pe }));
      }
    }
    const G = _t(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function X(pe, Q, F) {
      n("action", Q), await rc(), pe.target.value = F();
    }
    function ue(pe) {
      X(pe, { type: "fps", fps: Number(pe.target.value) }, () => G.value);
    }
    function Ne(pe) {
      const Q = pe.target.value.trim();
      X(pe, { type: "length", length: Q ? Number(Q) : null }, () => r.model.length ?? "");
    }
    function _e(pe, Q, F) {
      pe.button !== 0 || pe.target !== pe.currentTarget || n("action", { type: "select-keys", owner: Q.id, lane: F, frames: [], additive: !1 });
    }
    return (pe, Q) => ti((De(), ze("section", {
      class: wt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Se("div", HC, [
        Se("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": v.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": v.value ? "Pause (Space)" : "Play (Space)",
          onClick: Q[0] || (Q[0] = (F) => n("action", { type: "play" }))
        }, [
          tt(Ut, {
            icon: v.value ? ft(Xe).pause : ft(Xe).play
          }, null, 8, ["icon"])
        ], 8, GC),
        e.model.hasAudio ? (De(), ze("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: Q[1] || (Q[1] = (F) => n("action", { type: "mute" }))
        }, [
          tt(Ut, {
            icon: e.model.muted ? ft(Xe).volume_muted : ft(Xe).volume2
          }, null, 8, ["icon"])
        ], 8, WC)) : xt("", !0),
        Se("span", KC, mt(S.value), 1),
        Se("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (De(), ze("span", UC, mt(G.value), 1)) : (De(), ze("input", {
            key: 1,
            type: "number",
            min: ft(C0),
            max: ft(of),
            step: "any",
            value: G.value,
            "aria-label": "Timeline fps",
            onChange: ue
          }, null, 40, YC)),
          Q[6] || (Q[6] = Se("span", null, "fps", -1))
        ], 8, BC),
        Se("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          Q[7] || (Q[7] = Se("span", null, "Length", -1)),
          e.model.lengthLocked ? (De(), ze("span", qC, mt(e.model.length), 1)) : (De(), ze("input", {
            key: 1,
            type: "number",
            min: "1",
            max: ft(af),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Ne
          }, null, 40, JC))
        ], 8, XC),
        Se("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: Q[2] || (Q[2] = (F) => n("action", { type: "toggle-expanded" }))
        }, [
          Q[8] || (Q[8] = Se("span", null, "Timeline", -1)),
          tt(Ut, {
            icon: ft(Xe).chevron
          }, null, 8, ["icon"])
        ], 8, ZC)
      ]),
      Se("div", {
        class: wt(["pano-timeline-body", { open: e.model.expanded, sliding: c.value }]),
        style: $t({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: Q[3] || (Q[3] = Gt((F) => c.value = !0, ["self"])),
        onTransitionend: Q[4] || (Q[4] = Gt((F) => c.value = !1, ["self"])),
        onTransitioncancel: Q[5] || (Q[5] = Gt((F) => c.value = !1, ["self"]))
      }, [
        Se("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          Q[9] || (Q[9] = Se("div", { class: "pano-timeline-corner" }, null, -1)),
          Se("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: te
          }, [
            (De(!0), ze(lt, null, Rt(W.value, (F) => (De(), ze("span", {
              key: F,
              class: "pano-timeline-tick",
              style: $t({ left: P(F) })
            }, mt(F), 5))), 128)),
            Se("span", {
              class: "pano-timeline-playhead",
              style: $t({ left: P(_.value + 0.5) })
            }, null, 4)
          ], 544),
          (De(!0), ze(lt, null, Rt(e.model.rows || [], (F) => (De(), ze(lt, {
            key: F.id
          }, [
            Se("div", {
              class: wt(["pano-timeline-head", { selected: F.selected, "is-hidden": !F.visible }])
            }, [
              Se("div", eI, [
                F.hideable ? (De(), ze("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": F.visible ? "true" : "false",
                  "aria-label": `${F.label} visible`,
                  "data-tip": F.visible ? "Hide" : "Show",
                  onClick: Gt(($) => n("action", { type: "toggle-visible", id: F.id }), ["stop"])
                }, [
                  tt(Ut, {
                    icon: F.visible ? ft(Xe).eye : ft(Xe).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, tI)) : (De(), ze("span", nI)),
                Se("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !F.keyable,
                  "aria-expanded": F.open ? "true" : "false",
                  "aria-label": F.open ? `Hide ${F.label} parameters` : `Show ${F.label} parameters`,
                  onClick: Gt(($) => n("action", { type: "toggle-row", id: F.id }), ["stop"])
                }, [
                  tt(Ut, {
                    icon: ft(Xe).chevron
                  }, null, 8, ["icon"])
                ], 8, rI),
                Se("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: F.label,
                  "aria-current": F.selected ? "true" : void 0,
                  onClick: ($) => n("action", { type: "select-row", id: F.id })
                }, [
                  tt(Ut, {
                    icon: F.icon
                  }, null, 8, ["icon"]),
                  Se("span", null, mt(F.label), 1)
                ], 8, iI),
                F.keyable ? (De(), ze("button", {
                  key: 2,
                  class: wt(["pano-timeline-key", { keyed: ft(yu)(F.keys, _.value) }]),
                  type: "button",
                  "data-keyed": ft(yu)(F.keys, _.value) ? "true" : "false",
                  "aria-label": ft(yu)(F.keys, _.value) ? `Every ${F.label} parameter has a keyframe here; update them` : `Add keyframes for every ${F.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Gt(($) => n("action", { type: "key-row", owner: F.id }), ["stop"])
                }, [
                  tt(Ut, {
                    icon: ft(Xe).keyframe
                  }, null, 8, ["icon"])
                ], 10, oI)) : xt("", !0)
              ]),
              F.open ? (De(!0), ze(lt, { key: 0 }, Rt(F.lanes, ($) => (De(), ze("div", {
                key: $.key,
                class: "pano-timeline-lane-head"
              }, mt($.label), 1))), 128)) : xt("", !0)
            ], 2),
            Se("div", {
              class: wt(["pano-timeline-track", { selected: F.selected }])
            }, [
              Se("div", {
                class: "pano-timeline-row-line",
                onPointerdown: ($) => _e($, F, null)
              }, [
                F.clip ? (De(), ze("div", {
                  key: 0,
                  class: wt(["pano-timeline-clip", { open: F.clip.end === null }]),
                  style: $t(z(F.clip)),
                  onPointerdown: Gt(($) => oe($, F, "move"), ["stop"])
                }, [
                  Se("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Gt(($) => oe($, F, "start"), ["stop"])
                  }, null, 40, lI),
                  Se("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Gt(($) => oe($, F, "end"), ["stop"])
                  }, null, 40, cI)
                ], 46, sI)) : xt("", !0),
                (De(!0), ze(lt, null, Rt(y.value.get(F.id), ($) => (De(), ze("button", {
                  key: $.key,
                  type: "button",
                  class: wt(["pano-timeline-pin", { selected: $.selected, cluster: $.frames.length > 1, partial: $.partial }]),
                  style: $t({ left: P($.frame + 0.5) }),
                  "aria-label": `${F.label}: ${$.frames.length > 1 ? `${$.frames.length} keyframes` : `keyframe at frame ${$.frames[0]}`}`,
                  "data-tip": $.frames.length > 1 ? `${$.frames.length} keyframes` : `Frame ${$.frames[0]}`,
                  onPointerdown: Gt((de) => I(de, F, null, $, F.selectedFrames), ["stop"])
                }, [
                  $.frames.length > 1 ? (De(), ze("span", dI, mt($.frames.length), 1)) : xt("", !0)
                ], 46, uI))), 128))
              ], 40, aI),
              F.open ? (De(!0), ze(lt, { key: 0 }, Rt(F.lanes, ($) => (De(), ze("div", {
                key: $.key,
                class: "pano-timeline-lane",
                onPointerdown: (de) => _e(de, F, $.lane)
              }, [
                (De(!0), ze(lt, null, Rt(y.value.get($.key), (de) => (De(), ze("button", {
                  key: de.key,
                  type: "button",
                  class: wt(["pano-timeline-pin", { selected: de.selected, cluster: de.frames.length > 1 }]),
                  style: $t({ left: P(de.frame + 0.5) }),
                  "aria-label": `${$.label}: ${de.frames.length > 1 ? `${de.frames.length} keyframes` : `keyframe at frame ${de.frames[0]}`}`,
                  "data-tip": de.frames.length > 1 ? `${de.frames.length} keyframes` : `Frame ${de.frames[0]}`,
                  onPointerdown: Gt((Pe) => I(Pe, F, $.lane, de, $.selectedFrames), ["stop"])
                }, [
                  de.frames.length > 1 ? (De(), ze("span", hI, mt(de.frames.length), 1)) : xt("", !0)
                ], 46, pI))), 128))
              ], 40, fI))), 128)) : xt("", !0),
              Se("span", {
                class: "pano-timeline-playhead",
                style: $t({ left: P(_.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, QC)
    ], 2)), [
      [ro, e.model.visible]
    ]);
  }
}, yI = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (De(), ze("div", {
      class: wt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: $t({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, mt(e.model.text || ""), 7));
  }
}, bI = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, vI = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (De(), ze("div", bI, [
      (De(!0), ze(lt, null, Rt(e.buttons, (n) => ti((De(), sr(sn, {
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
        [ro, n.visible !== !1]
      ])), 128))
    ]));
  }
}, _I = ["data-video-ready"], SI = { class: "pano-video-transport-shell" }, wI = { class: "pano-video-controls-left" }, xI = { class: "pano-video-filmstrip" }, kI = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, MI = ["src", "onLoad"], NI = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, PI = ["max", "value", "disabled"], AI = { class: "pano-video-controls-right" }, CI = ["data-has-audio"], II = { class: "pano-video-volume-pop" }, EI = ["value", "disabled"], OI = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = _t(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? "Pause" : "Play";
    }), n = _t(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? "Pause video" : "Play video";
    }), i = _t(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? Xe.pause : Xe.play;
    }), o = _t(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = _t(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = _t(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? Xe.loop_off : Xe.loop;
    }), c = _t(() => {
      var y, z;
      return ((y = t.state) == null ? void 0 : y.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), p = _t(() => {
      var y, z, H;
      return ((y = t.state) == null ? void 0 : y.hasAudio) !== !0 ? Xe.volume : ((z = t.state) == null ? void 0 : z.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? Xe.volume_muted : Xe.volume2;
    }), f = _t(() => {
      var y;
      return Math.max(0, Math.min(100, Number(((y = t.state) == null ? void 0 : y.progressPct) || 0)));
    }), h = _t(() => ({ left: `${f.value}%` })), m = _t(() => {
      var te, oe;
      const y = (te = t.state) == null ? void 0 : te.volumePct, z = Number(((oe = t.state) == null ? void 0 : oe.volume) ?? 1) * 100, H = Number(y ?? z ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, H))}%`
      };
    }), _ = _t(() => {
      var H, te;
      const z = [
        String(((H = t.state) == null ? void 0 : H.currentTimeLabel) || "0:00"),
        String(((te = t.state) == null ? void 0 : te.durationLabel) || "0:00")
      ].reduce((oe, I) => Math.max(oe, I.length), 4);
      return `${Math.max(4, z)}ch`;
    }), v = _t(() => ({ "--pano-video-time-ch": _.value })), S = _t(() => {
      var H, te;
      const y = Array.isArray((H = t.state) == null ? void 0 : H.thumbnails) ? t.state.thumbnails : [];
      if (y.length) return y;
      const z = Math.max(7, Number(((te = t.state) == null ? void 0 : te.thumbnailCount) || 9));
      return Array.from({ length: z }, (oe, I) => ({
        id: `placeholder-${I}`,
        src: "",
        label: ""
      }));
    }), w = /* @__PURE__ */ en(/* @__PURE__ */ new Set()), P = (y) => String((y == null ? void 0 : y.id) || (y == null ? void 0 : y.src) || (y == null ? void 0 : y.label) || ""), W = (y) => w.value.has(P(y)), V = (y) => {
      const z = new Set(w.value);
      z.add(P(y)), w.value = z;
    };
    Zi(S, (y) => {
      const z = new Set(y.map(P)), H = /* @__PURE__ */ new Set();
      for (const te of w.value)
        z.has(te) && H.add(te);
      w.value = H;
    }, { immediate: !0 });
    const D = _t(() => {
      var y;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((y = t.state) == null ? void 0 : y.shellMaxWidthPx) || 640))}px`
      };
    });
    return (y, z) => (De(), ze("div", {
      class: wt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: $t(D.value)
    }, [
      z[1] || (z[1] = Se("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      z[2] || (z[2] = Se("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Se("div", SI, [
        Se("div", wI, [
          tt(sn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Se("div", {
            class: "pano-video-time pano-video-time-start",
            style: $t(v.value)
          }, mt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Se("div", xI, [
          Se("div", kI, [
            (De(!0), ze(lt, null, Rt(S.value, (H) => (De(), ze("div", {
              key: P(H),
              class: wt(["pano-video-thumb", {
                "is-placeholder": !H.src,
                "is-loaded": H.src && W(H)
              }])
            }, [
              H.src ? (De(), ze("img", {
                key: 0,
                src: H.src,
                alt: "",
                draggable: "false",
                onLoad: (te) => V(H)
              }, null, 40, MI)) : (De(), ze("span", NI))
            ], 2))), 128))
          ]),
          Se("div", {
            class: "pano-video-playhead",
            style: $t(h.value),
            "aria-hidden": "true"
          }, [...z[0] || (z[0] = [
            Se("span", { class: "pano-video-playhead-line" }, null, -1),
            Se("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Se("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, PI)
        ]),
        Se("div", AI, [
          Se("div", {
            class: "pano-video-time pano-video-time-end",
            style: $t(v.value)
          }, mt(e.state.durationLabel || "0:00"), 5),
          tt(sn, {
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
          Se("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Se("div", II, [
              Se("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: $t(m.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, EI)
            ]),
            tt(sn, {
              "extra-class": "pano-video-control",
              icon: p.value,
              label: c.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, CI)
        ])
      ])
    ], 14, _I));
  }
}, FI = { class: "pano-floating-top" }, TI = ["data-selected", "data-view-count"], DI = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], LI = { class: "label" }, RI = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return De(), ze("div", FI, [
        Se("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (De(!0), ze(lt, null, Rt(e.buttons, (i) => ti((De(), ze("button", {
            key: i.key,
            class: wt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            tt(Ut, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Se("span", LI, mt(i.label), 1)
          ], 10, DI)), [
            [ro, i.visible !== !1]
          ])), 128))
        ], 8, TI)
      ]);
    };
  }
};
function mb(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Xe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Xe.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: Xe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Xe.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Xe.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Xe.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Xe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Xe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Xe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Xe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Xe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Xe.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Xe.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Xe.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Xe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Xe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Xe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Xe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Xe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Xe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Xe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Xe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Xe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Xe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Xe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Xe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Xe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Xe.lasso_tool }
        ]
      }
    ]
  };
}
const VI = ["aria-label"], $I = { class: "pano-stage-column" }, zI = { class: "pano-stage-wrap" }, jI = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, HI = {
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
    const c = /* @__PURE__ */ en(null), p = /* @__PURE__ */ en(null), f = /* @__PURE__ */ en(null);
    function h() {
      var I, G;
      return ((G = (I = f.value) == null ? void 0 : I.getRefs) == null ? void 0 : G.call(I)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function m(I) {
      var G, X;
      return ((X = (G = p.value) == null ? void 0 : G.open) == null ? void 0 : X.call(G, I)) === !0;
    }
    function _(I) {
      i("image-file-selected", I);
    }
    function v(I) {
      i("image-file-cancelled", I);
    }
    t({ getPaintOverlayRefs: h, openImagePicker: m });
    const S = _t(() => n.readOnly === !0), w = _t(() => n.shellPreset || mb(n.type)), P = _t(() => {
      var G, X, ue;
      const I = String((((G = n.uiState) == null ? void 0 : G.stageStatus) === "failed" ? (X = n.uiState) == null ? void 0 : X.stageStatusDetail : (ue = n.uiState) == null ? void 0 : ue.stageWarningDetail) ?? "");
      return I === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : I === "stickers" ? "One or more sticker previews are unavailable." : I === "frame" ? "The editor hit a rendering error. Check the browser console for details." : I === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : I.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = _t(() => {
      var G;
      const I = Array.isArray((G = w.value) == null ? void 0 : G.floatingButtons) ? w.value.floatingButtons.slice() : [];
      return S.value && I.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Xe.fullscreen
      }), I;
    });
    function V() {
      const I = c.value;
      return I ? Array.from(I.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((G) => G instanceof HTMLElement ? !G.hidden && G.tabIndex >= 0 && G.offsetParent !== null : !1) : [];
    }
    function D() {
      var X;
      const G = V()[0] || c.value;
      (X = G == null ? void 0 : G.focus) == null || X.call(G);
    }
    function y() {
      var I;
      s != null && s.isConnected && ((I = s.focus) == null || I.call(s)), s = null;
    }
    function z(I) {
      var G, X, ue, Ne;
      if (!I.defaultPrevented) {
        if (I.key === "Tab") {
          const _e = V();
          if (!_e.length) {
            I.preventDefault(), (X = (G = c.value) == null ? void 0 : G.focus) == null || X.call(G);
            return;
          }
          const pe = _e[0], Q = _e[_e.length - 1], F = document.activeElement;
          if (I.shiftKey) {
            (F === pe || F === c.value || !((ue = c.value) != null && ue.contains(F))) && (I.preventDefault(), Q.focus());
            return;
          }
          (F === Q || !((Ne = c.value) != null && Ne.contains(F))) && (I.preventDefault(), pe.focus());
          return;
        }
        I.key === "Escape" && i("close");
      }
    }
    function H() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function te() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function oe(I) {
      document.removeEventListener("keydown", z), I ? (s || (s = document.activeElement), H(), document.addEventListener("keydown", z), rc(() => {
        D();
      })) : (te(), y());
    }
    return oc(() => {
      oe(n.open);
    }), ds(() => {
      te(), document.removeEventListener("keydown", z), y();
    }), Zi(() => n.open, (I) => {
      oe(I);
    }), (I, G) => e.open ? (De(), ze("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: G[2] || (G[2] = Gt((X) => i("close"), ["self"]))
    }, [
      Se("section", {
        ref_key: "modalRef",
        ref: c,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Se("div", $I, [
          Se("div", zI, [
            G[3] || (G[3] = Se("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            G[4] || (G[4] = Se("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            G[5] || (G[5] = Se("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (De(), ze("div", jI, mt(P.value), 1)) : xt("", !0),
            G[6] || (G[6] = Se("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Se("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            tt(IA, {
              ref_key: "paintOverlaysRef",
              ref: f
            }, null, 512),
            tt(Xy, {
              ref_key: "imageFilePickerRef",
              ref: p,
              onFileSelected: _,
              onFileCancelled: v
            }, null, 512),
            S.value ? xt("", !0) : (De(), ze(lt, { key: 1 }, [
              tt(vI, {
                buttons: e.uiState.toolButtons || w.value.toolButtons || []
              }, null, 8, ["buttons"]),
              tt(eA, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              tt(CA, {
                "paint-swatches": e.paintSwatches,
                panes: w.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            tt(OI, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            tt(RI, {
              buttons: e.uiState.viewButtons || w.value.viewButtons || []
            }, null, 8, ["buttons"]),
            tt(X2, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            tt(VA, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            tt(yI, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            tt(aA, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          tt(gI, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: G[0] || (G[0] = (X) => i("timeline", X))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? xt("", !0) : (De(), sr(jC, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: G[1] || (G[1] = (X) => i("timeline", X))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, VI)
    ])) : xt("", !0);
  }
}, hr = "loading", ls = "ready", ir = "failed";
function gb(e, t = "") {
  return e && (e.__panoLoadState = hr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function yb(e, t = "") {
  return e && (e.__panoLoadState = ls, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function bb(e, t = "") {
  return e && (e.__panoLoadState = ir, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Nd(e, t) {
  return e ? e.__panoLoadState === ir ? ir : typeof t == "function" && t(e) ? ls : hr : ls;
}
function Pd(e) {
  return Nd(e) === ir;
}
function GI({ presented: e, background: t = ls, stickers: r = [] } = {}) {
  if (!e) return { status: hr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === hr, o = n.includes(hr);
  if (i && o) return { status: hr, detail: "mixed" };
  if (i) return { status: hr, detail: "background" };
  if (o) return { status: hr, detail: "stickers" };
  const a = t === ir, s = n.includes(ir);
  return a && s ? { status: ir, detail: "mixed" } : a ? { status: ir, detail: "background" } : s ? { status: ir, detail: "stickers" } : { status: ls, detail: "" };
}
const WI = "state_json", KI = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Rf = "sticker_image_1", BI = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), qm = 0.01, UI = "external_image", Yl = "pano_sticker_input_images", YI = "pano_sticker_input_videos", XI = "pano_sticker_input_frames", qI = "pano_sticker_input_video_meta", JI = !0, ml = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Rr = Math.PI / 180, Xi = 180 / Math.PI, Au = 1, vb = "rgb(255, 221, 87)", ZI = "rgb(228, 228, 231)", QI = "rgb(180, 150, 60)", eE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, tE = 64, Jm = 40, Cu = 16, nE = 0.45, Zm = 180, rE = 160, Xl = 24, iE = 4, oE = 4, aE = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function Iu(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function sE(e) {
  return 1 - Math.pow(1 - e, 3);
}
function lE(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function cE(e) {
  return e * e * e;
}
function yc(e, t, r) {
  return { x: e, y: t, z: r };
}
function Qm(e, t) {
  return yc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function eg(e, t) {
  return yc(e.x * t, e.y * t, e.z * t);
}
function Eu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function uE(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return yc(e.x / t, e.y / t, e.z / t);
}
function Us(e) {
  return {
    yaw: Kt(Math.atan2(e.x, e.z) * Xi),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * Xi, -90, 90)
  };
}
function hi(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, a = t[n].y, s = t[i].x, c = t[i].y;
    a > e.y != c > e.y && e.x < (s - o) * (e.y - a) / (c - a || 1e-6) + o && (r = !r);
  }
  return r;
}
function Da(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Ou(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return Da(e, t);
  const c = Ee((o * n + a * i) / s, 0, 1), p = Number(t.x || 0) + n * c, f = Number(t.y || 0) + i * c, h = Number(e.x || 0) - p, m = Number(e.y || 0) - f;
  return h * h + m * m;
}
function rr(e, t, r) {
  return e + (t - e) * r;
}
function Pr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function dE(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ys = { fillStyle: "", url: "" };
function fE(e, t, r) {
  if (Ys.url && Ys.fillStyle === String(e || ""))
    return Ys.url;
  const n = dE(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Xl}" height="${Xl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ys = { fillStyle: String(e || ""), url: n }, n;
}
function gl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Wn(e) {
  return {
    r: Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ee(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function yn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function pE(e) {
  return ml.some((t) => gl(e, t.color));
}
function Fu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, c = o * (1 - i), p = o * (1 - s * i), f = o * (1 - (1 - s) * i);
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
function Tu(e) {
  const t = Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const c = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: c, v: i };
}
function No(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function hE(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function tg(e) {
  const { paintCount: t, maskCount: r } = hE(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Oo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Xs(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function mE(e, t) {
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
function Gi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function gE(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function yE(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function bE(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const _b = "pano_suite.ui_settings.v1", Sb = "pano_suite.node_grid_visibility.v1";
let Fo = null, Ar = null;
function yl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function vE() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(_b)) || "").trim();
    if (!t) return Fo ? yl(Fo) : null;
    const r = JSON.parse(t), n = yl(r);
    return Fo = n, n;
  } catch {
    return Fo ? yl(Fo) : null;
  }
}
function _E(e) {
  var r;
  const t = yl(e);
  Fo = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(_b, JSON.stringify(t));
  } catch {
  }
  return t;
}
function wb() {
  var e;
  if (Ar && typeof Ar == "object")
    return Ar;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Sb)) || "").trim();
    if (!t)
      return Ar = {}, Ar;
    const r = JSON.parse(t);
    return Ar = r && typeof r == "object" ? r : {}, Ar;
  } catch {
    return Ar = {}, Ar;
  }
}
function SE(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = wb()[r];
  return typeof i == "boolean" ? i : !!t;
}
function wE(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = wb();
  n[r] = !!t, Ar = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Sb, JSON.stringify(n));
  } catch {
  }
}
function xE(e, t) {
  const r = { ...e }, n = t.map((i) => i(e));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  for (const i of n) i.connect(r);
  return r;
}
const yi = /* @__PURE__ */ new Map(), kE = 12;
function ME(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = yi.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (yi.delete(t), yi.set(t, r), r);
}
function NE(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (yi.delete(r), yi.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); yi.size > kE; ) {
      const i = yi.keys().next().value;
      if (!i) break;
      yi.delete(i);
    }
}
function PE(e) {
  const {
    comfyMedia: t,
    cutoutV2: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: c,
    mediaSource: p,
    mediaUiImage: f,
    node: h,
    portStillCanvas: m,
    portVideoEl: _,
    readOnly: v,
    runtime: S,
    scheduler: w,
    stageWrap: P,
    state: W,
    stateV2: V,
    stillCanvas: D,
    timelinePlayhead: y,
    type: z,
    uiState: H,
    videoEl: te
  } = e;
  let oe, I, G, X, ue, Ne;
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
  }, pe = 9, Q = [];
  let F = 0;
  const $ = () => {
    var Ve, Be;
    const x = (Ve = P == null ? void 0 : P.getBoundingClientRect) == null ? void 0 : Ve.call(P), U = (Be = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Be.call(o), ye = Math.max(0, Number((x == null ? void 0 : x.width) || 0)), ce = U ? Math.max(0, Number(U.width || 0)) : 0, C = ce > 0 ? ce + 14 + 12 : 72, ge = Math.max(280, Math.floor(ye - C * 2)), ve = n.fullscreen ? Math.min(1200, ge) : ge;
    H.videoTransport.shellMaxWidthPx = ve;
  }, de = () => {
    F || (F = w.requestFrame(() => {
      F = 0, $();
    }));
  }, Pe = (x) => {
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
  }, Ge = typeof ResizeObserver < "u" ? new ResizeObserver(() => de()) : null;
  Ge == null || Ge.observe(P), o && (Ge == null || Ge.observe(o)), Q.push(() => {
    var x;
    F && (w.cancelFrame(F), F = 0), (x = Ge == null ? void 0 : Ge.disconnect) == null || x.call(Ge);
  }), de();
  const qe = () => {
    _e.thumbnailJobId += 1, _e.thumbnailSrc = "", H.videoTransport.thumbnails = [], H.videoTransport.thumbnailCount = pe;
  }, le = async (x, U, ye) => {
    const ce = String(x || "").trim();
    if (!ce) {
      qe();
      return;
    }
    const Le = ME(ce);
    if (Le) {
      _e.thumbnailSrc = ce, H.videoTransport.thumbnails = Le.thumbnails, H.videoTransport.thumbnailCount = Le.thumbnailCount;
      return;
    }
    const je = ++_e.thumbnailJobId;
    _e.thumbnailSrc = ce, H.videoTransport.thumbnails = [], H.videoTransport.thumbnailCount = pe;
    const C = cc(document, "editor.thumbnails");
    C.preload = "auto", C.muted = !0, C.playsInline = !0, C.crossOrigin = "anonymous";
    const ge = xn({ label: "editor.thumbnail" });
    try {
      const ve = await new Promise((It) => {
        let qn = !1;
        const cn = (on) => {
          qn || (qn = !0, It(on));
        };
        C.addEventListener("loadedmetadata", () => cn(!0), { once: !0 }), C.addEventListener("canplay", () => cn(!0), { once: !0 }), C.addEventListener("error", () => cn(!1), { once: !0 }), C.src = ce, C.load();
      });
      if (_e.thumbnailJobId !== je) return;
      const Ve = Number(C.videoWidth || 0), Be = Number(C.videoHeight || 0);
      if (!ve || Ve < 1 || Be < 1) {
        _e.thumbnailFailedSrcs.add(ce);
        return;
      }
      const Ke = Math.max(0, Number(C.duration || U || 0)), Je = 46, nt = Math.max(72, Math.round(Ve / Be * Je));
      ge.width = nt, ge.height = Je;
      const st = ge.getContext("2d");
      if (!st) return;
      const bt = [], Ot = (It) => new Promise((qn) => {
        let cn = !1;
        const on = () => {
          cn || (cn = !0, qn());
        };
        C.addEventListener("seeked", on, { once: !0 }), C.addEventListener("error", on, { once: !0 });
        try {
          C.currentTime = It;
        } catch {
          on();
        }
      });
      for (let It = 0; It < pe; It += 1) {
        if (_e.thumbnailJobId !== je) return;
        const qn = pe <= 1 ? 0 : It / (pe - 1), cn = Ke > 0 ? Math.max(0, Math.min(Ke - Math.max(1e-3, 0.5 / Math.max(1, Number(ye || 24))), Ke * qn)) : 0;
        if (await Ot(cn), _e.thumbnailJobId !== je) return;
        st.clearRect(0, 0, nt, Je), st.drawImage(C, 0, 0, nt, Je), bt.push({
          id: `thumb-${It}`,
          src: ge.toDataURL("image/jpeg", 0.72),
          time: cn,
          label: O(cn)
        });
      }
      if (_e.thumbnailJobId !== je) return;
      H.videoTransport.thumbnails = bt, H.videoTransport.thumbnailCount = bt.length || pe, NE(ce, {
        thumbnails: bt,
        thumbnailCount: bt.length || pe,
        duration: Ke,
        fps: ye
      });
    } finally {
      C.removeAttribute("src"), C.load(), Uu(ge);
    }
  };
  Q.push(() => {
    qe();
  });
  const j = Vy({
    video: te instanceof HTMLVideoElement ? te : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (x) => w.requestFrame(x),
      cancelFrame: (x) => w.cancelFrame(x)
    },
    fps: Y,
    span: () => {
      if (V) return Ne();
      const x = Math.round(Number(H.videoTransport.duration || 0) * Y());
      return te.loop || !(x > 0) ? 1 / 0 : x;
    },
    loop: () => V,
    onFrame: (x) => {
      V ? G(x) : he(), I({ cause: "frame_view", localOnly: !0, reason: Nt.PLAYHEAD });
    },
    onCapture: () => {
      E() && (S.backgroundDirty = !0);
    },
    onChange: () => {
      he(), y.playing.value = j.playing, ue(), I({ cause: "frame_view", localOnly: !0, reason: Nt.PLAYHEAD });
    }
  });
  Q.push(() => j.dispose());
  const fe = V && _ instanceof HTMLVideoElement ? $y({
    video: _,
    onCapture: () => {
      var ye;
      const x = Number(_.videoWidth || 0), U = Number(_.videoHeight || 0);
      x < 1 || U < 1 || (m.width = x, m.height = U, (ye = m.getContext("2d")) == null || ye.drawImage(_, 0, 0), m.__panoFrameIdx += 1, I({ cause: "frame_view", localOnly: !0, reason: Nt.MEDIA }));
    },
    onChange: () => I({ cause: "frame_view", localOnly: !0, reason: Nt.MEDIA })
  }) : null;
  fe && Q.push(() => fe.dispose());
  const me = V ? Py({
    createImage: (x, U) => {
      const ye = new Image();
      return ye.onload = U, ye.onerror = U, ye.src = x, ye;
    },
    onLoad: () => I({ cause: "frame_view", localOnly: !0, reason: Nt.MEDIA })
  }) : null;
  if (te instanceof HTMLVideoElement) {
    const x = () => {
      J(), I({ cause: "frame_view", localOnly: !0 });
    }, U = () => {
      he({
        hasAudio: H.videoTransport.hasAudio,
        muted: te.muted,
        volume: Number(te.volume ?? H.videoTransport.volume ?? 1)
      });
    }, ye = () => {
      const ce = te.dataset.panoSrc;
      ce && (_e.failedSrcs.add(ce), J(), I());
    };
    for (const [ce, Le] of [
      ["loadedmetadata", x],
      ["loadeddata", x],
      ["canplay", x],
      ["volumechange", U],
      ["error", ye]
    ])
      te.addEventListener(ce, Le), Q.push(() => te.removeEventListener(ce, Le));
  }
  function Ae(x) {
    return t.uiList(h, x);
  }
  function Fe(x) {
    return t.uiValue(h, x);
  }
  function ne() {
    const x = String((h == null ? void 0 : h.comfyClass) || (h == null ? void 0 : h.type) || (h == null ? void 0 : h.title) || "");
    return Il(x) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : z === "stickers" || z === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Ce() {
    const { metaKey: x } = ne(), U = Fe(x);
    return Array.isArray(U) && U.length > 0 && U[0] && typeof U[0] == "object" ? U[0] : U && typeof U == "object" ? U : null;
  }
  function M(x) {
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
    const U = Math.max(0, Math.floor(Number(x || 0))), ye = Math.floor(U / 60), ce = U % 60;
    return `${ye}:${String(ce).padStart(2, "0")}`;
  }
  function Y() {
    return V ? W.timeline.fps : _e.metaFps || 1e3;
  }
  function he(x = {}) {
    const U = Number(x.duration ?? H.videoTransport.duration ?? 0), ye = Math.max(1, Number(x.fps ?? H.videoTransport.fps ?? 24)), ce = j.frame / Y(), Le = Object.prototype.hasOwnProperty.call(x, "ready") ? !!x.ready : !!H.videoTransport.ready, je = j.playing, C = Object.prototype.hasOwnProperty.call(x, "visible") ? !!x.visible : !!H.videoTransport.visible, ge = Object.prototype.hasOwnProperty.call(x, "muted") ? !!x.muted : !!(te instanceof HTMLVideoElement ? te.muted : H.videoTransport.muted), ve = Number(
      Object.prototype.hasOwnProperty.call(x, "volume") ? x.volume : te instanceof HTMLVideoElement ? te.volume : H.videoTransport.volume
    ), Ve = Object.prototype.hasOwnProperty.call(x, "hasAudio") ? !!x.hasAudio : Pe(te), Be = Object.prototype.hasOwnProperty.call(x, "loop") ? !!x.loop : !!H.videoTransport.loop;
    Object.assign(H.videoTransport, {
      ready: Le,
      playing: je,
      visible: C,
      loop: Be,
      currentTime: Number.isFinite(ce) ? ce : 0,
      duration: Number.isFinite(U) ? U : 0,
      progressPct: U > 1e-6 ? Math.max(0, Math.min(100, ce / U * 100)) : 0,
      currentTimeLabel: O(ce),
      durationLabel: O(U),
      frameCount: Math.max(0, Number(x.frameCount ?? H.videoTransport.frameCount ?? 0)),
      fps: ye,
      hasAudio: Ve,
      muted: ge,
      volume: Math.max(0, Math.min(1, Number.isFinite(ve) ? ve : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(ve) ? ve : 1)) * 100),
      thumbnails: Array.isArray(x.thumbnails) ? x.thumbnails : H.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(x.thumbnailCount ?? H.videoTransport.thumbnailCount ?? pe))
    });
  }
  function T() {
    return !!(te instanceof HTMLVideoElement && !V && te.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function q() {
    if (!(te instanceof HTMLVideoElement) || !H.videoTransport.hasAudio) return;
    const x = !te.muted;
    te.muted = x, !x && Number(te.volume || 0) <= 0 && (te.volume = Math.max(0.01, Number(H.videoTransport.volume || 1))), he({
      hasAudio: H.videoTransport.hasAudio,
      muted: te.muted,
      volume: Number(te.volume ?? H.videoTransport.volume ?? 1)
    });
  }
  function re() {
    he({
      visible: T()
    });
  }
  function E() {
    if (!(te instanceof HTMLVideoElement) || Number(te.videoWidth || 0) < 1 || Number(te.videoHeight || 0) < 1) return !1;
    const x = Number(te.videoWidth || 0), U = Number(te.videoHeight || 0);
    (D.width !== x || D.height !== U) && (D.width = x, D.height = U);
    const ye = D.getContext("2d");
    return ye ? (ye.clearRect(0, 0, x, U), ye.drawImage(te, 0, 0, x, U), D.__panoFrameIdx = Number(D.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function B() {
    return !j.showsVideo && Number(D.width || 0) > 0 && Number(D.height || 0) > 0 && Number(D.__panoFrameIdx || 0) > 0 ? D : te instanceof HTMLVideoElement && Number(te.videoWidth || 0) > 0 && Number(te.videoHeight || 0) > 0 && Number(te.readyState || 0) >= 2 ? te : null;
  }
  function K() {
    D.__panoFrameIdx = 0, S.backgroundDirty = !0;
  }
  function J() {
    if (!(te instanceof HTMLVideoElement)) return null;
    const { videoKey: x } = ne(), U = mn(h, "background") && Ae(x)[0] || null, ye = p(U), ce = [ye, t.linkedVideoFile(h, L())].filter(Boolean), Le = ce.find((Ke) => !_e.failedSrcs.has(Ke)) || "";
    _e.videoFailed = !Le && ce.length > 0;
    const je = Le && Le === ye ? Ce() : null;
    _e.metaFps = Number(je == null ? void 0 : je.fps) > 0 ? Number(je.fps) : 0;
    const C = Math.max(1, Number((je == null ? void 0 : je.fps) || (V ? W.timeline.fps : 24))), ge = te.dataset.panoSrc === Le && Number.isFinite(te.duration) ? te.duration : 0, ve = Number((je == null ? void 0 : je.duration) || ((je == null ? void 0 : je.frames) > 0 ? je.frames / C : ge)), Ve = Math.max(0, Number((je == null ? void 0 : je.frames) || Math.round(ve * C))), Be = !!(je != null && je.has_audio) || Pe(te);
    return Le && te.dataset.panoSrc !== Le ? (te.pause(), K(), te.dataset.panoSrc = Le, te.loop = !V && !!H.videoTransport.loop, te.muted = !!H.videoTransport.muted, te.volume = Math.max(0, Math.min(1, Number(H.videoTransport.volume ?? 1))), te.src = Le, te.load(), j.setSource(!0), V || j.seek(0)) : !Le && te.getAttribute("src") && (te.pause(), te.removeAttribute("src"), delete te.dataset.panoSrc, te.load(), K(), qe(), j.setSource(!1)), V || (te.loop = !!H.videoTransport.loop), Le && !V && _e.thumbnailSrc !== Le && !_e.thumbnailFailedSrcs.has(Le) && le(Le, ve, C), Le || qe(), he({
      ready: !!Le,
      visible: !!Le && T(),
      duration: ve,
      frameCount: Ve,
      fps: C,
      hasAudio: Be,
      loop: !!te.loop,
      muted: !!te.muted,
      volume: Number(te.volume ?? H.videoTransport.volume ?? 1),
      thumbnailCount: H.videoTransport.thumbnailCount
    }), Le || null;
  }
  function ie(x, U = null) {
    return f(h, x, a, U || (() => I()));
  }
  function xe(x = null) {
    return mn(h, "external-sticker") ? ie(Yl, x) : null;
  }
  function ke() {
    if (!mn(h, "external-sticker")) return null;
    const x = Ae(qI)[0];
    if (!x || typeof x != "object") return null;
    const U = Ae(XI).map(p).filter(Boolean);
    if (U.length) return { frames: U, meta: x };
    const ye = p(Ae(YI)[0] || null);
    return ye ? { src: ye, meta: x } : null;
  }
  function Ie() {
    const x = W.stickers.find(oe), U = x ? ke() : null, ye = U ? ky(x.clip, n.frame, W.timeline.fps, U.meta) : null;
    fe.follow({ src: (U == null ? void 0 : U.src) || "", time: ye, playing: j.advancing, fps: W.timeline.fps });
    const ce = x ? se(x) : null, Le = U != null && U.frames ? me.picture(U.frames, ye, U.meta, ce) : fe.picture(m, ce);
    return Le ? { media: Le, revision: M(Le), source: Ny(U, ce) } : null;
  }
  function Te() {
    return !V || !mn(h, "scene") ? null : fm(Ae("pano_scene_files"), Ae("pano_scene_meta"), p);
  }
  function Ye() {
    return !V || !mn(h, "external-sticker") ? null : fm(Ae("pano_sticker_files"), Ae("pano_sticker_meta"), p);
  }
  function se(x) {
    var C;
    if (x && typeof x == "object" && (oe(x) || x.external === !0))
      return xe(() => {
        ni(h, "image-loaded");
      });
    const U = V ? we(x) : String(x && typeof x == "object" ? x.asset_id || x.assetId || "" : x || "");
    if (!U) return null;
    const ye = a.get(U);
    if (ye) return ye;
    const ce = V ? U0(x.source) : (C = W.assets) == null ? void 0 : C[U], Le = c(ce);
    if (!Le) return null;
    const je = new Image();
    return gb(je, Le), je.onload = () => {
      yb(je, Le), I();
    }, je.onerror = () => {
      bb(je, Le), I();
    }, je.src = Le, a.set(U, je), je;
  }
  function we(x) {
    const { source: U } = x;
    return U.filename ? `file:${U.storage}:${U.subfolder}:${U.filename}` : `sticker:${x.id}`;
  }
  function Oe() {
    if (z === "cutout" && !r) {
      const Le = B();
      if (Le) return Le;
      const je = s(
        h,
        ["erp_image", "bg_erp"],
        () => I(),
        "background:cutout:erp_image|bg_erp"
      );
      return je && !Pd(je) ? je : f(h, "pano_input_images", a, () => I()) || je || null;
    }
    const x = B();
    if (x) return x;
    const U = mn(h, "background") ? f(h, "pano_input_images", a, () => I()) : null;
    if (U && !Pd(U)) return U;
    if (te instanceof HTMLVideoElement && te.dataset.panoSrc) return te;
    const ye = L();
    return s(h, ye, () => I(), `background:${ye.join("|")}`) || U || null;
  }
  function b() {
    var U;
    const x = (Array.isArray(h == null ? void 0 : h.inputs) ? h.inputs : []).findIndex((ye) => (ye == null ? void 0 : ye.name) === "source");
    return x >= 0 && h.graph ? String(((U = h.getInputLink(x)) == null ? void 0 : U.type) || "") : "";
  }
  function L() {
    if (z === "cutout") return r ? b() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const x = Array.isArray(h == null ? void 0 : h.inputs) ? h.inputs.map((ce) => String((ce == null ? void 0 : ce.name) || "")) : [], U = x.includes("erp_image"), ye = x.includes("bg_erp");
    return v && (U || ye) ? U ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : z === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function u(x) {
    return x ? x instanceof HTMLImageElement ? !!x.complete && Number(x.naturalWidth || x.width || 0) > 0 && Number(x.naturalHeight || x.height || 0) > 0 : x instanceof HTMLVideoElement ? Number(x.videoWidth || 0) > 0 && Number(x.videoHeight || 0) > 0 && Number(x.readyState || 0) >= 2 : Number(x.width || x.naturalWidth || 0) > 0 && Number(x.height || x.naturalHeight || 0) > 0 : !1;
  }
  function A() {
    if (i.failed) return { status: ir, detail: "renderer" };
    if (!i.ready) return { status: hr, detail: "boot" };
    const x = Oe(), U = _e.videoFailed ? ir : Nd(x, u), ye = [];
    for (const ce of X()) {
      if ((ce == null ? void 0 : ce.visible) === !1) continue;
      const Le = se(ce);
      ye.push(Nd(Le, u));
    }
    return GI({
      presented: S.hasPresentedFrame,
      background: U,
      stickers: ye
    });
  }
  return {
    connect(x) {
      ({
        isExternalSticker: oe,
        requestDraw: I,
        setTimelineFrame: G,
        skyStickers: X,
        syncTimeline: ue,
        timelineSpanFrames: Ne
      } = x);
    },
    videoState: _e,
    videoCleanupFns: Q,
    queueVideoTransportLayout: de,
    playback: j,
    portVideo: fe,
    getNodeUiValue: Fe,
    getMediaRevisionToken: M,
    playbackFps: Y,
    syncVideoTransportState: he,
    toggleVideoMuted: q,
    syncVideoTransportVisibility: re,
    refreshModalVideoSource: J,
    getStickerUiImage: ie,
    getExternalStickerPreviewImage: xe,
    getPortMedia: ke,
    followPortSticker: Ie,
    getStickerImage: se,
    stickerImageKey: we,
    getConnectedErpImage: Oe,
    isDecodedImageReady: u,
    getStageImageStatus: A,
    sceneFiles: Te,
    stickerFiles: Ye
  };
}
function AE(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(p) {
    if (n.splice(0, n.length), i = -1, !p || typeof p != "object" || !Array.isArray(p.entries) || (p.entries.forEach((h) => {
      n.push(String(h || ""));
    }), !n.length)) return;
    const f = Number(p.index);
    Number.isInteger(f) ? f === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, f)) : i = n.length - 1;
  }
  function c(p) {
    n[i] !== p && (n.splice(i + 1), n.push(p), n.length > o && n.shift(), i = n.length - 1);
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
      const p = n.length, f = Math.max(0, p - a), h = i >= 0 ? Math.max(0, Math.min(i, f)) : f, m = n.slice(h, h + a), _ = i < 0 ? -1 : Math.max(-1, Math.min(m.length - 1, i - h));
      return {
        version: 1,
        entries: m,
        index: _
      };
    },
    hydrate: s
  };
}
const CE = 80;
function xb(e) {
  return JSON.stringify(hk(e));
}
function IE(e) {
  return AE(CE, { entries: [xb(e)], index: 0 });
}
function EE(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let c, p, f, h, m, _, v, S, w, P, W, V, D, y;
  function z() {
    r || (W(), q0(i), !(o && i.stickers.some(h)) && (t.historyController.commitActionGroup(xb(i)), D()));
  }
  function H(oe) {
    var ue, Ne;
    if (r) return;
    P();
    const I = oe < 0 ? t.historyController.undo() : t.historyController.redo();
    if (D(), !I) return;
    const G = mk(i, I), X = (ue = i.timeline) == null ? void 0 : ue.fps;
    Object.keys(i).forEach((_e) => delete i[_e]), Object.assign(i, G.state), W(!1), o && i.timeline.fps !== X && v.seek(Math.round(t.frame * i.timeline.fps / X)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Ne = f()) == null ? void 0 : Ne.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && c(), S(), n.backgroundDirty = !0, G.paintingChanged ? _() : m(), V(), y(), p(), w({ cause: "cutout_frame" });
  }
  function te() {
    var G, X;
    const oe = Array.isArray((G = t.historyController) == null ? void 0 : G.entries) ? t.historyController.entries : [], I = Number((X = t.historyController) == null ? void 0 : X.index);
    return {
      canUndo: !r && oe.length > 1 && I > 0,
      canRedo: !r && oe.length > 1 && I >= 0 && I < oe.length - 1
    };
  }
  return {
    connect(oe) {
      ({
        clearWorldSelection: c,
        commitState: p,
        getActiveCutoutShot: f,
        isUploadingSticker: h,
        markObjectVisualsDirty: m,
        markPaintStrokeVisualsDirty: _,
        playback: v,
        releaseHiddenSelection: S,
        requestDraw: w,
        stopTimelinePlayback: P,
        syncCutoutShot: W,
        syncPaintUi: V,
        syncUndoRedoButtons: D,
        updateSidePanel: y
      } = oe);
    },
    pushHistory: z,
    restoreHistory: H,
    getHistoryCapabilities: te
  };
}
function OE(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let c, p, f, h, m, _, v;
  function S() {
    return s === "stickers" ? w() : o.shots;
  }
  function w() {
    return i ? o.stickers.filter((b) => b.placement === "sky") : o.stickers;
  }
  function P(b) {
    return i && fe(b);
  }
  function W(b) {
    return b.source.kind === "file" && !b.source.filename && !b.source.data_url;
  }
  function V(b) {
    return P(b) ? pf(b, n.frame) : b;
  }
  function D(b, L) {
    P(b) ? B0(b, n.frame, L) : Object.assign(b, L);
  }
  function y() {
    const b = o.painting || (o.painting = Uo(null));
    return Array.isArray(b.groups) || (b.groups = []), b.groups;
  }
  function z(b = "paint") {
    var x, U;
    const L = Array.isArray((U = (x = o.painting) == null ? void 0 : x[b]) == null ? void 0 : U.strokes) ? o.painting[b].strokes : [], u = [], A = /* @__PURE__ */ new Set();
    for (const ye of L) {
      const ce = String((ye == null ? void 0 : ye.actionGroupId) || "").trim();
      !ce || A.has(ce) || (A.add(ce), u.push(ce));
    }
    return u;
  }
  function H() {
    return z("paint");
  }
  function te(b, L) {
    const u = String(L || "").trim();
    return u ? `${b === "mask" ? "mask" : "paint"}:${u}` : "";
  }
  function oe(b) {
    const L = String(b || "").trim();
    return L ? `raster:${L}` : "";
  }
  function I(b) {
    const L = String(b || "").trim();
    if (!L) return "";
    const u = L.match(/^raster:(.*)$/);
    return String(u ? u[1] || "" : L).trim();
  }
  function G(b, L = null) {
    const u = String(b || "").trim();
    if (!u) return { layerKind: "paint", actionGroupId: "" };
    const A = u.match(/^(paint|mask):(.*)$/);
    return A ? { layerKind: A[1] === "mask" ? "mask" : "paint", actionGroupId: String(A[2] || "").trim() } : { layerKind: L === "mask" ? "mask" : "paint", actionGroupId: u };
  }
  function X() {
    var L;
    let b = -1;
    for (const u of w())
      b = Math.max(b, Number((u == null ? void 0 : u.z_index) || 0));
    for (const u of y())
      b = Math.max(b, Number((u == null ? void 0 : u.z_index) || 0));
    for (const u of Array.isArray((L = o.painting) == null ? void 0 : L.raster_objects) ? o.painting.raster_objects : [])
      String((u == null ? void 0 : u.layerKind) || "paint") === "paint" && (b = Math.max(b, Number((u == null ? void 0 : u.z_index) || 0)));
    return b + 1;
  }
  function ue(b, L = null) {
    const u = String(b || "").trim();
    if (!u) return null;
    const A = y();
    let x = A.find((U) => String((U == null ? void 0 : U.actionGroupId) || "") === u);
    return x ? L != null && (x.z_index = Math.max(0, Number(L || 0))) : (x = {
      id: u,
      type: "strokeGroup",
      actionGroupId: u,
      z_index: L == null ? X() : Math.max(0, Number(L || 0)),
      locked: !1,
      frame: null
    }, A.push(x)), x;
  }
  function Ne(b) {
    if (!(b != null && b.centerUv)) return [];
    const L = Number(b.centerUv.u || 0), u = Number(b.centerUv.v || 0), A = Number(b.halfW || 0), x = Number(b.halfH || 0);
    return [
      {
        u: ((L - A) % 1 + 1) % 1,
        v: Ee(u - x, 0, 1)
      },
      {
        u: ((L + A) % 1 + 1) % 1,
        v: Ee(u - x, 0, 1)
      },
      {
        u: ((L + A) % 1 + 1) % 1,
        v: Ee(u + x, 0, 1)
      },
      {
        u: ((L - A) % 1 + 1) % 1,
        v: Ee(u + x, 0, 1)
      }
    ];
  }
  function _e() {
    const b = new Set(H()), u = y().filter((A) => b.has(String((A == null ? void 0 : A.actionGroupId) || "")));
    return b.forEach((A) => {
      u.some((x) => String((x == null ? void 0 : x.actionGroupId) || "") === A) || u.push({
        id: A,
        type: "strokeGroup",
        actionGroupId: A,
        z_index: X(),
        locked: !1,
        frame: null
      });
    }), u.sort((A, x) => Number((A == null ? void 0 : A.z_index) || 0) - Number((x == null ? void 0 : x.z_index) || 0)), o.painting.groups = u, u;
  }
  function pe(b, L, u) {
    var Ke;
    const A = (Je) => (Number(Je || 0) % 1 + 1) % 1, x = [];
    for (const Je of u) {
      const nt = Je == null ? void 0 : Je.geometry, st = (nt == null ? void 0 : nt.geometryKind) === "lasso_fill" ? nt == null ? void 0 : nt.points : (nt == null ? void 0 : nt.processedPoints) || (nt == null ? void 0 : nt.rawPoints) || (nt == null ? void 0 : nt.points) || [];
      Array.isArray(st) && x.push(...st);
    }
    if (!x.length) return null;
    const U = A(((Ke = x[0]) == null ? void 0 : Ke.u) || 0);
    let ye = 0, ce = 0;
    x.forEach((Je) => {
      const nt = A((Je == null ? void 0 : Je.u) || 0);
      ye += U + he(nt, U), ce += Number((Je == null ? void 0 : Je.v) || 0);
    });
    const Le = (ye / x.length % 1 + 1) % 1;
    let je = 1 / 0, C = -1 / 0, ge = 1 / 0, ve = -1 / 0;
    x.forEach((Je) => {
      const nt = A((Je == null ? void 0 : Je.u) || 0), st = he(nt, Le);
      je = Math.min(je, st), C = Math.max(C, st);
      const bt = Number((Je == null ? void 0 : Je.v) || 0);
      ge = Math.min(ge, bt), ve = Math.max(ve, bt);
    });
    const Ve = u.reduce((Je, nt) => {
      const st = p(String((nt == null ? void 0 : nt.toolKind) || "pen")), bt = Ln[st] || Ln[Yr], Ot = Math.max(1, Number((nt == null ? void 0 : nt.size) || 10)) * Math.max(0.1, Number((bt == null ? void 0 : bt.sizeScale) ?? 1));
      return Math.max(Je, Ot);
    }, 0), Be = Math.max(35e-4, Ve / 2048);
    return {
      centerUv: { u: ((Le + (je + C) * 0.5) % 1 + 1) % 1, v: Ee((ge + ve) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - je) * 0.5 + Be,
      halfH: (ve - ge) * 0.5 + Be,
      uvPad: Be
    };
  }
  function Q(b, L, u) {
    const A = String(b || "").trim();
    if (!A) return null;
    const x = y().find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || "") === A);
    if (!x) return null;
    const U = u || M(A, L);
    return x.frame = pe(A, L, U), x.frame;
  }
  function F() {
    var A;
    const b = w().map((x) => ({
      type: "sticker",
      id: String((x == null ? void 0 : x.id) || ""),
      z_index: Number((x == null ? void 0 : x.z_index) || 0),
      item: x
    })), L = _e().map((x) => ({
      type: "strokeGroup",
      id: String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.actionGroupId) || ""),
      actionGroupId: String((x == null ? void 0 : x.actionGroupId) || ""),
      z_index: Number((x == null ? void 0 : x.z_index) || 0),
      item: x
    })), u = (Array.isArray((A = o.painting) == null ? void 0 : A.raster_objects) ? o.painting.raster_objects : []).filter((x) => String((x == null ? void 0 : x.layerKind) || "paint") === "paint").map((x) => ({
      type: "rasterObject",
      id: String((x == null ? void 0 : x.id) || ""),
      z_index: Number((x == null ? void 0 : x.z_index) || 0),
      item: x
    }));
    return [...b, ...L, ...u].sort((x, U) => Number(x.z_index || 0) - Number(U.z_index || 0));
  }
  function $(b = !0) {
    var u, A, x, U, ye, ce;
    const L = F().filter((Le) => Le.type === "strokeGroup").map((Le) => String(Le.actionGroupId || "")).filter((Le) => !!Le);
    if (b) {
      const Le = String(((A = (u = n.interaction) == null ? void 0 : u.stroke) == null ? void 0 : A.actionGroupId) || "").trim(), je = String(((U = (x = n.interaction) == null ? void 0 : x.stroke) == null ? void 0 : U.layerKind) || "").trim(), C = String(((ce = (ye = n.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : ce.toolKind) || "").trim();
      Le && je === "paint" && C !== "eraser" && !L.includes(Le) && L.push(Le);
    }
    return L;
  }
  function de(b = !0) {
    var ce, Le, je, C, ge, ve;
    const L = F();
    if (!b) return L;
    const u = String(((Le = (ce = n.interaction) == null ? void 0 : ce.stroke) == null ? void 0 : Le.actionGroupId) || "").trim(), A = String(((C = (je = n.interaction) == null ? void 0 : je.stroke) == null ? void 0 : C.layerKind) || "").trim(), x = String(((ve = (ge = n.interaction) == null ? void 0 : ge.stroke) == null ? void 0 : ve.toolKind) || "").trim();
    if (!u || A !== "paint" || x === "eraser" || L.some((Ve) => Ve.type === "strokeGroup" && String(Ve.actionGroupId || "") === u))
      return L;
    const U = _();
    let ye = L.reduce((Ve, Be) => Math.max(Ve, Number((Be == null ? void 0 : Be.z_index) || 0)), -1) + 1;
    return U && Ce(U) && String(U.actionGroupId || "") === u && (ye = Number(U.z_index || 0)), [
      ...L,
      {
        type: "strokeGroup",
        id: u,
        actionGroupId: u,
        z_index: ye,
        item: null
      }
    ].sort((Ve, Be) => Number((Ve == null ? void 0 : Ve.z_index) || 0) - Number((Be == null ? void 0 : Be.z_index) || 0));
  }
  function Pe() {
    return y().slice().sort((b, L) => Number((b == null ? void 0 : b.z_index) || 0) - Number((L == null ? void 0 : L.z_index) || 0)).map((b) => ne(te("paint", (b == null ? void 0 : b.actionGroupId) || (b == null ? void 0 : b.id) || ""))).filter(Boolean);
  }
  function Ge() {
    var b;
    return (Array.isArray((b = o.painting) == null ? void 0 : b.raster_objects) ? o.painting.raster_objects : []).filter((L) => String((L == null ? void 0 : L.layerKind) || "paint") === "paint").slice().sort((L, u) => Number((L == null ? void 0 : L.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((L) => Ae(oe((L == null ? void 0 : L.id) || ""))).filter(Boolean);
  }
  function qe() {
    return r || !Array.isArray(o.stickers) ? [] : w();
  }
  function le() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...qe()];
  }
  function j(b) {
    return !!b && Array.isArray(o.shots) && o.shots.includes(b);
  }
  function fe(b) {
    return !!b && Array.isArray(o.stickers) && o.stickers.includes(b);
  }
  function me() {
    var b;
    return Array.isArray((b = o.painting) == null ? void 0 : b.raster_objects) ? o.painting.raster_objects : [];
  }
  function Ae(b) {
    const L = I(b);
    if (!L) return null;
    const u = me().find((A) => String((A == null ? void 0 : A.id) || "").trim() === L);
    return !u || String((u == null ? void 0 : u.layerKind) || "paint") !== "paint" ? null : {
      ...u,
      id: oe(L),
      type: "rasterObject",
      rasterObjectId: L
    };
  }
  function Fe(b) {
    if (!b || typeof b != "object" || String(b.type || "") !== "rasterObject") return !1;
    const L = I(b.rasterObjectId || b.id || "");
    return !!L && !!Ae(oe(L));
  }
  function ne(b) {
    const L = G(b), u = String(L.actionGroupId || "").trim();
    if (!u) return null;
    const A = y().find((x) => String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.actionGroupId) || "") === u || String((x == null ? void 0 : x.actionGroupId) || "") === u);
    return A ? {
      ...A,
      id: te("paint", u),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: u
    } : null;
  }
  function Ce(b) {
    if (!b || typeof b != "object" || String(b.type || "") !== "strokeGroup") return !1;
    const L = String(b.actionGroupId || "").trim(), u = String(b.layerKind || "paint").trim() || "paint";
    return !!L && !!ne(te(u, L));
  }
  function M(b, L = null) {
    const u = G(b, L), A = String(u.actionGroupId || "").trim();
    return A ? h(u.layerKind).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() === A) : [];
  }
  function O(b, L = "paint") {
    const u = String(b || "").trim(), x = `geomv5:${String(L || "paint").trim() || "paint"}:${u}:${n.mode}:${m()}`;
    if (n.mode === "frame") {
      const U = c(), ye = String((U == null ? void 0 : U.id) || ""), ce = U ? f(U) : null;
      return `${x}:frame:${ye}:${Math.round(Number((U == null ? void 0 : U.yaw_deg) || 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.pitch_deg) || 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.roll_deg) ?? (U == null ? void 0 : U.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ce == null ? void 0 : ce.x) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.y) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.w) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.h) || 0))}`;
    }
    return `${x}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Y(b, L, u) {
    return !b || typeof b != "object" ? b : {
      ...b,
      u: ((Number(b.u || 0) + Number(L || 0)) % 1 + 1) % 1,
      v: Ee(Number(b.v || 0) + Number(u || 0), 0, 1)
    };
  }
  function he(b, L) {
    let u = Number(b || 0) - Number(L || 0);
    for (; u > 0.5; ) u -= 1;
    for (; u < -0.5; ) u += 1;
    return u;
  }
  function T(b, L = null, u = null) {
    var je;
    const A = G(b, L), x = Array.isArray(u) ? u : M(A.actionGroupId, A.layerKind), U = [];
    if (x.forEach((C) => {
      const ge = (C == null ? void 0 : C.geometry) || null, ve = (ge == null ? void 0 : ge.geometryKind) === "lasso_fill" ? ge == null ? void 0 : ge.points : (ge == null ? void 0 : ge.processedPoints) || (ge == null ? void 0 : ge.rawPoints) || (ge == null ? void 0 : ge.points) || [];
      Array.isArray(ve) && U.push(...ve);
    }), !U.length) return { u: 0.5, v: 0.5 };
    const ye = Number(((je = U[0]) == null ? void 0 : je.u) || 0);
    let ce = 0, Le = 0;
    return U.forEach((C) => {
      ce += ye + he(Number((C == null ? void 0 : C.u) || 0), ye), Le += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (ce / U.length % 1 + 1) % 1,
      v: Ee(Le / U.length, 0, 1)
    };
  }
  function q(b, L, u = 1, A = 0) {
    if (!b || typeof b != "object") return b;
    const x = Number((L == null ? void 0 : L.u) || 0), U = Number((L == null ? void 0 : L.v) || 0), ye = he(Number(b.u || 0), x), ce = Number(b.v || 0) - U, Le = Number(A || 0) * Rr, je = Math.cos(Le), C = Math.sin(Le), ge = Math.max(0.02, Number(u || 1)), ve = (ye * je - ce * C) * ge, Ve = (ye * C + ce * je) * ge;
    return {
      ...b,
      u: ((x + ve) % 1 + 1) % 1,
      v: Ee(U + Ve, 0, 1)
    };
  }
  function re(b, L, u, A = null, x = null, U = null) {
    const ye = G(b, x), ce = String(ye.actionGroupId || "").trim();
    if (!ce) return !1;
    const Le = h(ye.layerKind), je = Array.isArray(A) ? new Map(A.map((ge) => [String((ge == null ? void 0 : ge.id) || ""), ge])) : null;
    let C = !1;
    if (Le.forEach((ge) => {
      if (String((ge == null ? void 0 : ge.actionGroupId) || "").trim() !== ce) return;
      const ve = (je == null ? void 0 : je.get(String((ge == null ? void 0 : ge.id) || ""))) || ge, Ve = ge == null ? void 0 : ge.geometry, Be = ve == null ? void 0 : ve.geometry;
      !Ve || !Be || (Array.isArray(Be.points) && (Ve.points = Be.points.map((Ke) => Y(Ke, L, u)), C = !0), Array.isArray(Be.rawPoints) && (Ve.rawPoints = Be.rawPoints.map((Ke) => Y(Ke, L, u)), C = !0), Array.isArray(Be.processedPoints) && (Ve.processedPoints = Be.processedPoints.map((Ke) => Y(Ke, L, u)), C = !0));
    }), C && U) {
      const ge = y().find((ve) => String((ve == null ? void 0 : ve.actionGroupId) || "") === ce);
      ge && (ge.frame = null);
    }
    return C;
  }
  function E(b, L = 1, u = 0, A = null, x = null, U = null) {
    const ye = G(b, x), ce = String(ye.actionGroupId || "").trim();
    if (!ce) return !1;
    const Le = h(ye.layerKind), je = Array.isArray(A) ? A : M(ce, ye.layerKind), C = Array.isArray(je) ? new Map(je.map((Ve) => [String((Ve == null ? void 0 : Ve.id) || ""), Ve])) : null, ge = (U == null ? void 0 : U.centerUv) ?? T(ce, ye.layerKind, je);
    let ve = !1;
    if (Le.forEach((Ve) => {
      if (String((Ve == null ? void 0 : Ve.actionGroupId) || "").trim() !== ce) return;
      const Be = (C == null ? void 0 : C.get(String((Ve == null ? void 0 : Ve.id) || ""))) || Ve, Ke = Ve == null ? void 0 : Ve.geometry, Je = Be == null ? void 0 : Be.geometry;
      !Ke || !Je || (Array.isArray(Je.points) && (Ke.points = Je.points.map((nt) => q(nt, ge, L, u)), ve = !0), Array.isArray(Je.rawPoints) && (Ke.rawPoints = Je.rawPoints.map((nt) => q(nt, ge, L, u)), ve = !0), Array.isArray(Je.processedPoints) && (Ke.processedPoints = Je.processedPoints.map((nt) => q(nt, ge, L, u)), ve = !0));
    }), ve && U) {
      const Ve = y().find((Be) => String((Be == null ? void 0 : Be.actionGroupId) || "") === ce);
      Ve && (Ve.frame = null);
    }
    return ve;
  }
  function B(b, L, u, A = null) {
    const x = I(b);
    if (!x) return !1;
    const U = me().find((C) => String((C == null ? void 0 : C.id) || "").trim() === x);
    if (!U) return !1;
    const ye = A && typeof A == "object" ? A : U, ce = (ye == null ? void 0 : ye.transform) || {}, Le = Number(ce.du || 0) + Number(L || 0), je = Ee(Number(ce.dv || 0) + Number(u || 0), -1, 1);
    return U.transform || (U.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), U.transform.du = Le, U.transform.dv = je, !0;
  }
  function K(b, L = 1, u = null) {
    const A = I(b);
    if (!A) return !1;
    const x = me().find((je) => String((je == null ? void 0 : je.id) || "").trim() === A);
    if (!x) return !1;
    const U = u && typeof u == "object" ? u : x, ye = (U == null ? void 0 : U.transform) || {}, ce = Math.max(0.01, Number(ye.scale || 1)), Le = Ee(ce * Math.max(0.01, Number(L || 1)), 0.01, 100);
    return x.transform || (x.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), x.transform.scale = Le, !0;
  }
  function J() {
    return X();
  }
  function ie(b) {
    var L;
    return !b || typeof b != "object" ? !1 : a ? ((L = b.source) == null ? void 0 : L.kind) === "port" : String(b.id || "") === Rf || String(b.source_kind || "") === UI;
  }
  function xe(b) {
    return !!(b && typeof b == "object" && b.visible === !1);
  }
  function ke(b) {
    return ie(b) && xe(b) ? ly : 1;
  }
  function Ie(b, L, u = 1, A = 0) {
    if (!b || typeof b != "object") return b;
    const x = Number((L == null ? void 0 : L.u) || 0), U = Number((L == null ? void 0 : L.v) || 0), ye = he(Number(b.u || 0), x), ce = Number(b.v || 0) - U, Le = Math.max(0.02, Number(u || 1)), je = Number(A || 0) * Rr, C = Math.cos(je), ge = Math.sin(je), ve = ye / Le, Ve = ce / Le, Be = ve * C + Ve * ge, Ke = -ve * ge + Ve * C;
    return {
      ...b,
      u: ((x + Be) % 1 + 1) % 1,
      v: U + Ke
    };
  }
  function Te(b) {
    const L = (b == null ? void 0 : b.bbox) || null, u = (b == null ? void 0 : b.transform) || {};
    return L ? {
      u: (((Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5 + Number(u.du || 0)) % 1 + 1) % 1,
      v: Ee((Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5 + Number(u.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ye(b) {
    var Le, je, C, ge;
    const L = (b == null ? void 0 : b.bbox) || null;
    if (!L) return [];
    const u = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, A = Math.max(0.01, Number(((Le = b == null ? void 0 : b.transform) == null ? void 0 : Le.scale) || 1)), x = Number(((je = b == null ? void 0 : b.transform) == null ? void 0 : je.rot_deg) || 0), U = Number(((C = b == null ? void 0 : b.transform) == null ? void 0 : C.du) || 0), ye = Number(((ge = b == null ? void 0 : b.transform) == null ? void 0 : ge.dv) || 0);
    return [
      { u: Number(L.u0 || 0), v: Number(L.v0 || 0) },
      { u: Number(L.u1 || 0), v: Number(L.v0 || 0) },
      { u: Number(L.u1 || 0), v: Number(L.v1 || 0) },
      { u: Number(L.u0 || 0), v: Number(L.v1 || 0) }
    ].map((ve) => Y(q(ve, u, A, x), U, ye));
  }
  function se(b) {
    const L = I((b == null ? void 0 : b.rasterObjectId) || (b == null ? void 0 : b.id) || ""), u = (b == null ? void 0 : b.transform) || {}, A = (b == null ? void 0 : b.bbox) || {}, x = `${L}:${n.mode}:${m()}:${A.u0}:${A.v0}:${A.u1}:${A.v1}:${u.du}:${u.dv}:${u.rot_deg}:${u.scale}`;
    if (n.mode === "frame") {
      const U = c(), ye = U ? f(U) : null;
      return `${x}:frame:${String((U == null ? void 0 : U.id) || "")}:${Math.round(Number((ye == null ? void 0 : ye.x) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.y) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.w) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.h) || 0))}`;
    }
    return `${x}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function we(b) {
    const L = String((b == null ? void 0 : b.id) || ""), u = j(b) ? "frame" : fe(b) ? "sticker" : "item", A = V(b), x = [
      u,
      L,
      n.mode,
      Number((A == null ? void 0 : A.yaw_deg) || 0).toFixed(4),
      Number((A == null ? void 0 : A.pitch_deg) || 0).toFixed(4),
      Number((A == null ? void 0 : A.hFOV_deg) || 0).toFixed(4),
      Number((A == null ? void 0 : A.vFOV_deg) || 0).toFixed(4),
      Number((A == null ? void 0 : A.rot_deg) || 0).toFixed(4),
      Number((A == null ? void 0 : A.roll_deg) || 0).toFixed(4),
      Qr(A),
      P(b) && v(b)
    ].join(":");
    if (n.mode === "frame") {
      const U = c(), ye = U ? f(U) : null;
      return `${x}:frame:${String((U == null ? void 0 : U.id) || "")}:${Math.round(Number((ye == null ? void 0 : ye.x) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.y) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.w) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.h) || 0))}`;
    }
    return `${x}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Oe() {
    F().forEach((L, u) => {
      L.type === "sticker" && L.item && (L.item.z_index = u), L.type === "strokeGroup" && L.item && (L.item.z_index = u), L.type === "rasterObject" && L.item && (L.item.z_index = u);
    });
  }
  return {
    connect(b) {
      ({
        getActiveCutoutShot: c,
        getBrushPresetIdForTool: p,
        getFrameViewRect: f,
        getPaintingLayerList: h,
        getPaintingRevisionKey: m,
        getSelected: _,
        sceneStickerShown: v
      } = b);
    },
    getList: S,
    skyStickers: w,
    isSceneSticker: P,
    isUploadingSticker: W,
    poseOf: V,
    writePose: D,
    getPaintingGroupList: y,
    makeStrokeGroupSelectionId: te,
    makeRasterObjectSelectionId: oe,
    parseRasterObjectSelectionId: I,
    ensurePaintingGroupEntry: ue,
    getFrameCornersUv: Ne,
    ensureGroupFrame: Q,
    getDisplayListObjects: F,
    getOrderedPaintGroupIds: $,
    getOrderedDisplayListObjects: de,
    getSelectableStrokeGroupItems: Pe,
    getSelectableRasterObjectItems: Ge,
    cutoutStickers: qe,
    getCutoutSelectableItems: le,
    isShotItem: j,
    isStickerItem: fe,
    getRasterObjectList: me,
    getRasterObjectItem: Ae,
    isRasterObjectItem: Fe,
    getStrokeGroupItem: ne,
    isStrokeGroupItem: Ce,
    getStrokeGroupStrokes: M,
    getStrokeGeomCacheKey: O,
    shortestWrappedDelta: he,
    getStrokeGroupCenterUv: T,
    applyStrokeGroupOffset: re,
    applyStrokeGroupTransform: E,
    applyRasterObjectOffset: B,
    applyRasterObjectTransform: K,
    getNextStickerZIndex: J,
    isExternalSticker: ie,
    isStickerHidden: xe,
    getStickerDisplayAlpha: ke,
    inverseTransformErpPointAround: Ie,
    getRasterObjectCenterUv: Te,
    getRasterObjectTransformedErpPoints: Ye,
    getRasterObjectGeomCacheKey: se,
    getSceneItemGeomCacheKey: we,
    normalizeDisplayZIndices: Oe
  };
}
function FE(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: a,
    timeline: s,
    type: c
  } = e;
  let p, f, h, m, _, v, S, w, P, W, V, D, y, z, H, te, oe, I, G, X, ue, Ne, _e, pe, Q, F, $, de, Pe, Ge, qe, le;
  function j() {
    const b = String(t.selectedId || "");
    if (!b) return null;
    const L = y(b);
    if (L) return L;
    const u = W(b);
    return u || (o ? v().find((A) => String((A == null ? void 0 : A.id) || "") === b) || null : w().find((A) => String((A == null ? void 0 : A.id) || "") === b) || null);
  }
  function fe() {
    const b = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], L = [], u = /* @__PURE__ */ new Set();
    return b.forEach((A) => {
      const x = String(A || "").trim();
      if (!x || u.has(x)) return;
      u.add(x);
      const U = x === String(t.selectedId || "") ? j() : y(x) || W(x) || (o ? v().find((ye) => String((ye == null ? void 0 : ye.id) || "") === x) : w().find((ye) => String((ye == null ? void 0 : ye.id) || "") === x));
      U && L.push(U);
    }), L;
  }
  function me(b = null) {
    const L = Array.isArray(b) ? b : fe();
    if (!L || L.length < 2) return null;
    const u = L.map((je) => pe(je)).filter((je) => (je == null ? void 0 : je.visible) && Array.isArray(je.corners) && je.corners.length);
    if (!u.length) return null;
    const A = u.flatMap((je) => je.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), x = u.flatMap((je) => je.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), U = Math.min(...A), ye = Math.max(...A), ce = Math.min(...x), Le = Math.max(...x);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (U + ye) * 0.5, y: (ce + Le) * 0.5 },
      corners: [
        { x: U, y: ce },
        { x: ye, y: ce },
        { x: ye, y: Le },
        { x: U, y: Le }
      ],
      edgeMidpoints: [
        { edge: "top", x: (U + ye) * 0.5, y: ce, a: { x: U, y: ce }, b: { x: ye, y: ce } },
        { edge: "right", x: ye, y: (ce + Le) * 0.5, a: { x: ye, y: ce }, b: { x: ye, y: Le } },
        { edge: "bottom", x: (U + ye) * 0.5, y: Le, a: { x: ye, y: Le }, b: { x: U, y: Le } },
        { edge: "left", x: U, y: (ce + Le) * 0.5, a: { x: U, y: Le }, b: { x: U, y: ce } }
      ],
      rotateStemBase: { x: (U + ye) * 0.5, y: ce },
      rotateHandle: { x: (U + ye) * 0.5, y: ce - 30 }
    };
  }
  function Ae(b) {
    const L = String((b == null ? void 0 : b.id) || "").trim();
    return !!L && Array.isArray(t.selectedIds) && t.selectedIds.includes(L);
  }
  function Fe() {
    const b = j();
    return b ? ue(b) || te(b) ? "stroke" : I(b) ? "frame" : "image" : null;
  }
  function ne(b) {
    if (!b || typeof b != "object") return !1;
    if (ue(b)) {
      const L = String(b.actionGroupId || b.id || "").trim(), u = P().find((A) => String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "").trim() === L);
      return (u == null ? void 0 : u.locked) === !0;
    }
    if (te(b)) {
      const L = F(b.rasterObjectId || b.id || ""), u = V().find((A) => String((A == null ? void 0 : A.id) || "").trim() === L);
      return (u == null ? void 0 : u.locked) === !0;
    }
    return b.locked === !0;
  }
  function Ce(b = null) {
    const L = Array.isArray(b) ? b : fe();
    return L.length > 0 && L.every((u) => ne(u));
  }
  function M(b, L) {
    const u = L === !0;
    if (!b || typeof b != "object") return !1;
    if (ue(b)) {
      const A = String(b.actionGroupId || b.id || "").trim(), x = P().find((U) => String((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "").trim() === A);
      return !x || x.locked === u ? !1 : (x.locked = u, !0);
    }
    if (te(b)) {
      const A = F(b.rasterObjectId || b.id || ""), x = V().find((U) => String((U == null ? void 0 : U.id) || "").trim() === A);
      return !x || x.locked === u ? !1 : (x.locked = u, !0);
    }
    return b.locked === u ? !1 : (b.locked = u, !0);
  }
  function O() {
    if (r) return;
    const b = fe();
    if (!b.length) return;
    const L = !Ce(b);
    let u = !1;
    b.forEach((A) => {
      M(A, L) && (u = !0);
    }), u && (de(), f(), qe(), le(), Pe());
  }
  function Y(b) {
    Ie(), s.selection = null, t.selectedId = (b == null ? void 0 : b.id) || null, t.selectedIds = b != null && b.id ? [b.id] : [], b && X(b) ? a.active.selected_sticker_id = b.id || null : a.active.selected_sticker_id = null, b && I(b) ? a.active.selected_shot_id = b.id || null : b ? I(b) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function he(b, L = null) {
    const u = [], A = /* @__PURE__ */ new Set();
    (Array.isArray(b) ? b : []).forEach((ye) => {
      const ce = String((ye == null ? void 0 : ye.id) || "").trim();
      !ce || A.has(ce) || (A.add(ce), u.push(ce));
    }), t.selectedIds = u, Ie(), s.selection = null;
    const x = String(L || "").trim();
    t.selectedId = x && u.includes(x) ? x : u[u.length - 1] || null;
    const U = j();
    a.active.selected_sticker_id = U && X(U) && U.id || null, U && I(U) ? a.active.selected_shot_id = U.id || null : u.length || (a.active.selected_shot_id = null);
  }
  function T() {
    const b = (Array.isArray(a.shots) ? a.shots : []).map((u, A) => ({
      kind: "frame",
      item: u,
      label: String((u == null ? void 0 : u.label) || `Frame ${A + 1}`)
    })), L = m().map((u, A) => {
      var U, ye;
      const x = H(u) ? String(u.id || Rf) : String(((ye = (U = a.assets) == null ? void 0 : U[u.asset_id]) == null ? void 0 : ye.name) || u.asset_id || u.id || `Image ${A + 1}`);
      return {
        kind: "image",
        item: u,
        label: x
      };
    });
    return [...b, ...L];
  }
  function q(b) {
    return b === "frame" ? Xe.camera : b === "stroke" ? Xe.paintbrush_vertical_tool : Xe.image;
  }
  function re(b) {
    return !b || !b.item ? {
      label: String((b == null ? void 0 : b.label) || ""),
      icon: null
    } : {
      label: String(b.label || ""),
      icon: q(b.kind)
    };
  }
  function E() {
    if (r) return;
    const b = j();
    !b || !H(b) || (b.visible = G(b), se(), Ne(), de(), f(), le(), qe(), Pe());
  }
  function B() {
    if (r || c !== "stickers") return;
    const b = j();
    if (!b || !H(b)) return;
    const L = b.initial_pose;
    if (!L || typeof L != "object") return;
    b.yaw_deg = Number(L.yaw_deg ?? b.yaw_deg ?? 0), b.pitch_deg = Number(L.pitch_deg ?? b.pitch_deg ?? 0), b.hFOV_deg = Number(L.hFOV_deg ?? b.hFOV_deg ?? 30);
    const u = D(Yl, () => {
      Pe();
    });
    u && (u.complete || u.naturalWidth || u.width) ? b.vFOV_deg = h(
      Number(L.hFOV_deg ?? b.hFOV_deg ?? 30),
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    ) : b.vFOV_deg = Number(L.vFOV_deg ?? b.vFOV_deg ?? 30), b.rot_deg = Number(L.rot_deg ?? b.rot_deg ?? 0), de(), f(), le(), qe(), Pe();
  }
  function K(b) {
    if (!b || !H(b)) return null;
    const L = b.initial_pose;
    if (!L || typeof L != "object") return null;
    const u = {
      yaw_deg: Number(L.yaw_deg ?? b.yaw_deg ?? 0),
      pitch_deg: Number(L.pitch_deg ?? b.pitch_deg ?? 0),
      hFOV_deg: Number(L.hFOV_deg ?? b.hFOV_deg ?? 30),
      vFOV_deg: Number(L.vFOV_deg ?? b.vFOV_deg ?? 30),
      rot_deg: Number(L.rot_deg ?? b.rot_deg ?? 0)
    }, A = D(Yl, () => {
      Pe();
    });
    return A && (A.complete || A.naturalWidth || A.width) && (u.vFOV_deg = h(
      u.hFOV_deg,
      Number(A.naturalWidth || A.width || 1),
      Number(A.naturalHeight || A.height || 1)
    )), u;
  }
  function J() {
    const b = j();
    if (!b || !H(b)) return !1;
    const L = K(b);
    if (!L) return !1;
    const u = (A, x) => Math.abs(Number(A || 0) - Number(x || 0)) <= 1e-4;
    return !(u(b.yaw_deg, L.yaw_deg) && u(b.pitch_deg, L.pitch_deg) && u(b.hFOV_deg, L.hFOV_deg) && u(b.vFOV_deg, L.vFOV_deg) && u(b.rot_deg, L.rot_deg));
  }
  function ie(b = {}) {
    const u = b.preservePanelValues !== !1 ? $(j()) : null;
    u && (t.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (c === "stickers" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (c === "stickers" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: Qr(u)
    }), t.selectedId = null, t.selectedIds = [], Ie(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function xe() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((b) => b.id === t.worldSelectedId && b.placement === "world") || null;
  }
  function ke(b) {
    Y(null), t.worldSelectedId = b, n.backgroundDirty = !0;
  }
  function Ie() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Te(b) {
    return !!b && !r && !b.locked;
  }
  function Ye() {
    if (c !== "cutout") return;
    const b = _();
    b && (t.selectedId = String(b.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function se() {
    var L;
    const b = j();
    (oe(b) && !Ge(b) || t.selectedId === mc && z() && !p() || Fe() === "stroke" && !Q()) && Y(null), ((L = xe()) == null ? void 0 : L.visible) === !1 && Ie();
  }
  function we() {
    if (r) return;
    const b = fe();
    if (!j() || b.length === 0 || b.some((ce) => ne(ce))) return;
    _e();
    const u = S(), A = new Set(b.map((ce) => X(ce) ? `sticker:${String(ce.id || "")}` : te(ce) ? `rasterObject:${F(ce.rasterObjectId || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || ce.id || "")}`)), x = [], U = [];
    if (u.forEach((ce) => {
      var je, C;
      const Le = ce.type === "sticker" ? `sticker:${String(((je = ce.item) == null ? void 0 : je.id) || "")}` : ce.type === "rasterObject" ? `rasterObject:${String(((C = ce.item) == null ? void 0 : C.id) || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || "")}`;
      A.has(Le) ? x.push(ce) : U.push(ce);
    }), !x.length || x[x.length - 1] === u[u.length - 1]) return;
    [...U, ...x].forEach((ce, Le) => {
      ce.type === "sticker" && ce.item && (ce.item.z_index = Le), ce.type === "strokeGroup" && ce.item && (ce.item.z_index = Le), ce.type === "rasterObject" && ce.item && (ce.item.z_index = Le);
    }), Ne(), de(), f(), qe(), Pe();
  }
  function Oe() {
    if (r) return;
    const b = fe();
    if (!j() || b.length === 0 || b.some((ce) => ne(ce))) return;
    _e();
    const u = S(), A = new Set(b.map((ce) => X(ce) ? `sticker:${String(ce.id || "")}` : te(ce) ? `rasterObject:${F(ce.rasterObjectId || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || ce.id || "")}`)), x = [], U = [];
    if (u.forEach((ce) => {
      var je, C;
      const Le = ce.type === "sticker" ? `sticker:${String(((je = ce.item) == null ? void 0 : je.id) || "")}` : ce.type === "rasterObject" ? `rasterObject:${String(((C = ce.item) == null ? void 0 : C.id) || ce.id || "")}` : `strokeGroup:${String(ce.actionGroupId || "")}`;
      A.has(Le) ? x.push(ce) : U.push(ce);
    }), !x.length || x[0] === u[0]) return;
    [...x, ...U].forEach((ce, Le) => {
      ce.type === "sticker" && ce.item && (ce.item.z_index = Le), ce.type === "strokeGroup" && ce.item && (ce.item.z_index = Le), ce.type === "rasterObject" && ce.item && (ce.item.z_index = Le);
    }), Ne(), de(), f(), qe(), Pe();
  }
  return {
    connect(b) {
      ({
        cameraShoots: p,
        commitAndRefreshNode: f,
        computeStickerVFov: h,
        cutoutStickers: m,
        getActiveCutoutShot: _,
        getCutoutSelectableItems: v,
        getDisplayListObjects: S,
        getList: w,
        getPaintingGroupList: P,
        getRasterObjectItem: W,
        getRasterObjectList: V,
        getStickerUiImage: D,
        getStrokeGroupItem: y,
        hasCamera: z,
        isExternalSticker: H,
        isRasterObjectItem: te,
        isSceneSticker: oe,
        isShotItem: I,
        isStickerHidden: G,
        isStickerItem: X,
        isStrokeGroupItem: ue,
        markObjectVisualsDirty: Ne,
        normalizeDisplayZIndices: _e,
        objectGeom: pe,
        paintingShown: Q,
        parseRasterObjectSelectionId: F,
        poseOf: $,
        pushHistory: de,
        requestDraw: Pe,
        sceneStickerShown: Ge,
        updateSelectionMenu: qe,
        updateSidePanel: le
      } = b);
    },
    getSelected: j,
    getSelectedItems: fe,
    getMultiSelectionGeom: me,
    isItemSelected: Ae,
    getSelectedKind: Fe,
    isItemLocked: ne,
    areAllSelectedItemsLocked: Ce,
    toggleSelectedLock: O,
    setSelectedItem: Y,
    setSelectedItems: he,
    getCutoutInspectorItems: T,
    getSelectionItemIcon: q,
    getSelectionItemLabelData: re,
    toggleSelectedExternalStickerVisibility: E,
    restoreSelectedToInitialPose: B,
    canRestoreSelectedToInitial: J,
    clearSelection: ie,
    selectedWorldSticker: xe,
    selectWorldSticker: ke,
    clearWorldSelection: Ie,
    worldStickerEditable: Te,
    applyInitialCutoutFocus: Ye,
    releaseHiddenSelection: se,
    bringSelectedToFront: we,
    sendSelectedToBack: Oe
  };
}
function TE(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, c, p, f, h, m = { key: [], projection: null };
  function _() {
    return o && a() && i.camera.projection === "erp";
  }
  function v() {
    const fe = te({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !fe || fe.length !== 4 ? !1 : fe[0].y >= fe[3].y;
  }
  function S() {
    return cy({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function w() {
    const j = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return j.some((fe, me) => fe !== m.key[me]) && (m = { key: j, projection: dy(S(), r.width, r.height) }), m.projection;
  }
  function P(j) {
    const fe = w().project(j);
    return fe.z > 1e-4 ? fe : null;
  }
  function W(j, fe) {
    return w().ray(j, fe);
  }
  function V() {
    const j = r.width, fe = r.height, me = 2;
    if (j / Math.max(fe, 1) >= me) {
      const M = fe, O = M * me;
      return { x: (j - O) * 0.5, y: 0, w: O, h: M };
    }
    const Fe = j, ne = Fe / me;
    return { x: 0, y: (fe - ne) * 0.5, w: Fe, h: ne };
  }
  function D(j) {
    return {
      lon: Math.atan2(j.x, j.z),
      lat: Math.asin(Ee(j.y, -1, 1))
    };
  }
  function y(j, fe = null) {
    const { lon: me, lat: Ae } = D(j), Fe = V();
    let ne = Fe.x + (me / (2 * Math.PI) + 0.5) * Fe.w;
    const Ce = Fe.y + (0.5 - Ae / Math.PI) * Fe.h;
    if (fe !== null) {
      for (; ne - fe > Fe.w / 2; ) ne -= Fe.w;
      for (; ne - fe < -Fe.w / 2; ) ne += Fe.w;
    }
    return { x: ne, y: Ce, z: 1 };
  }
  function z(j) {
    const fe = p(j), me = Qo(
      Number(fe.yaw_deg || 0),
      Number(fe.pitch_deg || 0),
      Number(fe.rot_deg || fe.roll_deg || 0)
    ), Ae = Math.tan(Ee(Number(fe.hFOV_deg || 20), 0.1, 179) * 0.5 * Rr), Fe = Math.tan(Ee(Number(fe.vFOV_deg || 20), 0.1, 179) * 0.5 * Rr);
    return {
      centerDir: me.fwd,
      right: me.right,
      up: me.up,
      tanX: Ae,
      tanY: Fe
    };
  }
  function H(j, fe, me) {
    return uE(Qm(Qm(j.centerDir, eg(j.right, fe)), eg(j.up, me)));
  }
  function te(j) {
    const fe = z(j);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Ae, v: Fe }) => H(fe, Ae * fe.tanX, Fe * fe.tanY));
  }
  function oe(j, fe, me) {
    const Ae = z(j), Fe = (fe * 2 - 1) * Ae.tanX, ne = (1 - me * 2) * Ae.tanY;
    return H(Ae, Fe, ne);
  }
  function I(j) {
    const fe = t.width / Math.max(1, r.width), me = t.height / Math.max(1, r.height);
    return { x: j.x * fe, y: j.y * me, w: j.w * fe, h: j.h * me };
  }
  function G(j, fe = null, me = null, Ae = null) {
    if (n.mode === "frame") {
      const Fe = fe || s();
      if (!Fe) return [];
      const ne = me || c(Fe);
      return de(j, Fe, ne);
    }
    return Q(j, Ae);
  }
  function X(j, fe = null, me = null, Ae = null, Fe = null) {
    if (!j) return null;
    if (n.mode === "unwrap") {
      const Ce = Q([j], Fe);
      return Ce[0] ? { x: Ce[0].x, y: Ce[0].y, z: 1 } : null;
    }
    const ne = Ne(j);
    return ne ? f(ne, fe, me, Ae) : null;
  }
  function ue(j, fe) {
    if (!j || !fe) return null;
    const me = Number(fe.x || 0), Ae = Number(fe.y || 0);
    return oe(j, me, Ae);
  }
  function Ne(j) {
    if (!j) return null;
    const fe = (Number(j.u || 0) - 0.5) * (2 * Math.PI), me = (0.5 - Number(j.v || 0)) * Math.PI, Ae = Math.cos(me);
    return yc(Ae * Math.sin(fe), Math.sin(me), Ae * Math.cos(fe));
  }
  function _e(j, fe) {
    if (!j || !fe) return null;
    const me = z(j), Ae = Eu(fe, me.centerDir);
    if (!Number.isFinite(Ae) || Ae <= 1e-6) return null;
    const Fe = Eu(fe, me.right) / Ae, ne = Eu(fe, me.up) / Ae;
    return {
      x: (Fe / Math.max(1e-6, me.tanX) + 1) * 0.5,
      y: (1 - ne / Math.max(1e-6, me.tanY)) * 0.5
    };
  }
  function pe(j) {
    if (!Array.isArray(j) || j.length < 3) return [];
    if (n.mode === "unwrap") {
      const me = V();
      return j.map((Ae) => ({
        x: me.x + Number(Ae.u || 0) * me.w,
        y: me.y + Number(Ae.v || 0) * me.h
      }));
    }
    const fe = j.map((me) => P(Ne(me))).filter(Boolean);
    return fe.every((me) => Number(me.z || 0) > 0) ? fe.map((me) => ({ x: Number(me.x || 0), y: Number(me.y || 0) })) : [];
  }
  function Q(j, fe = null) {
    if (!Array.isArray(j) || j.length < 1) return [];
    if (n.mode === "unwrap") {
      const Ae = V();
      return j.map((Fe) => {
        const ne = (Number(Fe.u || 0) % 1 + 1) % 1, Ce = fe == null ? ne : Number(fe || 0) + h(ne, fe);
        return {
          x: Ae.x + Ce * Ae.w,
          y: Ae.y + Number(Fe.v || 0) * Ae.h
        };
      });
    }
    const me = j.map((Ae) => P(Ne(Ae))).filter(Boolean);
    return me.every((Ae) => Number(Ae.z || 0) > 0) ? me.map((Ae) => ({ x: Number(Ae.x || 0), y: Number(Ae.y || 0) })) : [];
  }
  function F(j, fe = 160) {
    if (!Array.isArray(j) || j.length < 3) return !1;
    for (let me = 0; me < j.length; me += 1) {
      const Ae = j[me], Fe = j[(me + 1) % j.length];
      if (!Ae || !Fe || !Number.isFinite(Ae.x) || !Number.isFinite(Ae.y) || !Number.isFinite(Fe.x) || !Number.isFinite(Fe.y) || Math.hypot(Number(Fe.x) - Number(Ae.x), Number(Fe.y) - Number(Ae.y)) > fe) return !1;
    }
    return !0;
  }
  function $(j, fe, me) {
    if (!Array.isArray(j) || j.length < 3 || !fe || !me) return [];
    const Ae = [];
    for (const Fe of j) {
      const ne = Ne(Fe), Ce = _e(fe, ne);
      if (!Ce) return [];
      Ae.push({
        x: Number(me.x || 0) + Number(Ce.x || 0) * Number(me.w || 0),
        y: Number(me.y || 0) + Number(Ce.y || 0) * Number(me.h || 0)
      });
    }
    return F(Ae, Math.max(80, Math.max(me.w, me.h) * 0.75)) ? Ae : [];
  }
  function de(j, fe, me) {
    if (!Array.isArray(j) || j.length < 1 || !fe || !me) return [];
    const Ae = [];
    for (const Fe of j) {
      const ne = Ne(Fe), Ce = _e(fe, ne);
      Ce && Ae.push({
        x: Number(me.x || 0) + Number(Ce.x || 0) * Number(me.w || 0),
        y: Number(me.y || 0) + Number(Ce.y || 0) * Number(me.h || 0)
      });
    }
    return Ae;
  }
  function Pe(j) {
    const fe = r.getBoundingClientRect();
    return {
      x: (j.clientX - fe.left) / fe.width * r.width,
      y: (j.clientY - fe.top) / fe.height * r.height
    };
  }
  function Ge(j) {
    const fe = r.getBoundingClientRect();
    return {
      x: Number(j.clientX) - Number(fe.left || 0),
      y: Number(j.clientY) - Number(fe.top || 0)
    };
  }
  function qe(j, fe = performance.now()) {
    if (n.mode === "unwrap") {
      const ne = V(), Ce = (j.x - ne.x) / Math.max(1, ne.w), M = (j.y - ne.y) / Math.max(1, ne.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (Ce % 1 + 1) % 1,
        v: Ee(M, 0, 1),
        t: Number(fe || 0)
      };
    }
    const me = W(j.x, j.y), { lon: Ae, lat: Fe } = D(me);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ae / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - Fe / Math.PI, 0, 1),
      t: Number(fe || 0)
    };
  }
  function le(j, fe, me = performance.now()) {
    const Ae = c(fe);
    if (!Ae) return null;
    const Fe = {
      x: (Number(j.x) - Ae.x) / Math.max(1, Ae.w),
      y: (Number(j.y) - Ae.y) / Math.max(1, Ae.h)
    };
    if (Fe.x < 0 || Fe.x > 1 || Fe.y < 0 || Fe.y > 1) return null;
    const ne = ue(fe, Fe);
    if (!ne) return null;
    const { lon: Ce, lat: M } = D(ne);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ce / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - M / Math.PI, 0, 1),
      t: Number(me || 0)
    };
  }
  return {
    connect(j) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: c,
        poseOf: p,
        projectSceneItemDir: f,
        shortestWrappedDelta: h
      } = j);
    },
    isErpCamera: _,
    currentViewCamera: S,
    currentViewProjection: w,
    projectDir: P,
    screenToWorldDir: W,
    getUnwrapRect: V,
    projectDirUnwrap: y,
    getStickerFrame: z,
    stickerDirFromFrame: H,
    stickerCornersDir: te,
    stickerSampleDir: oe,
    stickerCornerOrderSanity: v,
    projectEditorPoints: G,
    projectErpPointToEditor: X,
    frameLocalPointToWorldDir: ue,
    erpPointToWorldDir: Ne,
    worldDirToFrameLocalPoint: _e,
    projectLassoPointsToCurrentView: pe,
    projectErpLassoPointsToFrameRect: $,
    screenPos: Pe,
    screenPosCss: Ge,
    screenPosToErpPoint: qe,
    screenPosToFrameAsErpPoint: le,
    deviceRect: I
  };
}
function DE(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, c, p, f, h, m, _, v, S, w, P, W, V, D, y, z, H, te, oe, I, G, X, ue, Ne, _e, pe, Q, F, $, de;
  function Pe(ne, Ce) {
    const M = String(ne.actionGroupId || ne.id || "").trim(), O = V(M, ne.layerKind), Y = s(M, ne.layerKind, O), he = (Y == null ? void 0 : Y.centerUv) || W(M, ne.layerKind, O), T = n.mode === "unwrap" ? Number((he == null ? void 0 : he.u) || 0) : null, q = [], re = n.mode === "frame" ? c() : null, E = re ? h(re) : null;
    for (const se of O) {
      const we = (se == null ? void 0 : se.geometry) || null, Oe = (we == null ? void 0 : we.geometryKind) === "lasso_fill" ? we == null ? void 0 : we.points : (we == null ? void 0 : we.processedPoints) || (we == null ? void 0 : we.rawPoints) || (we == null ? void 0 : we.points) || [], b = Ne(Oe, re, E, T).filter((A) => Number.isFinite(A == null ? void 0 : A.x) && Number.isFinite(A == null ? void 0 : A.y));
      if (!b.length) continue;
      const L = p(String((se == null ? void 0 : se.toolKind) || "pen")), u = Ln[L] || Ln[Yr];
      q.push({
        points: b,
        closed: String((we == null ? void 0 : we.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((se == null ? void 0 : se.size) || 10) * Math.max(0.1, Number((u == null ? void 0 : u.sizeScale) ?? 1)) + 10),
        layerKind: String((se == null ? void 0 : se.layerKind) || ne.layerKind || "paint")
      });
    }
    const B = _e(he, null, re, E, T);
    if (!B) {
      const se = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(Ce, se), se;
    }
    const J = f(Y).map((se) => _e(se, B.x, re, E, T)).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y)).map((se) => ({ x: Number(se.x || 0), y: Number(se.y || 0) }));
    if (J.length < 4) {
      const se = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(Ce, se), se;
    }
    const ie = (se, we) => ({
      x: (Number((se == null ? void 0 : se.x) || 0) + Number((we == null ? void 0 : we.x) || 0)) * 0.5,
      y: (Number((se == null ? void 0 : se.y) || 0) + Number((we == null ? void 0 : we.y) || 0)) * 0.5,
      a: se,
      b: we
    }), xe = ie(J[0], J[1]), ke = ie(J[1], J[2]), Ie = ie(J[2], J[3]), Te = ie(J[3], J[0]), Ye = {
      kind: "strokeGroup",
      center: { x: Number(B.x || 0), y: Number(B.y || 0) },
      corners: J,
      edgeMidpoints: [
        { edge: "top", ...xe },
        { edge: "right", ...ke },
        { edge: "bottom", ...Ie },
        { edge: "left", ...Te }
      ],
      rotateStemBase: { x: xe.x, y: xe.y },
      rotateHandle: { x: xe.x, y: xe.y - 30 },
      strokePaths: q,
      visible: !0
    };
    return n._strokeGeomCache.set(Ce, Ye), Ye;
  }
  function Ge(ne, Ce) {
    const M = n.mode === "frame" ? c() : null, O = M ? h(M) : null, Y = m(ne), he = n.mode === "unwrap" ? Number((Y == null ? void 0 : Y.u) || 0) : null, T = _e(Y, null, M, O, he), re = v(ne).map((J) => _e(J, (T == null ? void 0 : T.x) ?? null, M, O, he)).filter((J) => Number.isFinite(J == null ? void 0 : J.x) && Number.isFinite(J == null ? void 0 : J.y));
    if (!Array.isArray(re) || re.length < 4) {
      const J = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(Ce, J), J;
    }
    const E = re.slice(0, 4).map((J) => ({ x: Number((J == null ? void 0 : J.x) || 0), y: Number((J == null ? void 0 : J.y) || 0) })), K = {
      kind: "rasterObject",
      center: {
        x: E.reduce((J, ie) => J + Number(ie.x || 0), 0) / E.length,
        y: E.reduce((J, ie) => J + Number(ie.y || 0), 0) / E.length
      },
      corners: E,
      visible: !0
    };
    return n._strokeGeomCache.set(Ce, K), K;
  }
  function qe(ne, Ce = null, M = null, O = null, Y = {}) {
    if (n.mode === "frame") {
      const B = M || c(), K = O || h(B);
      if (!B || !K) return null;
      const J = B ? de(B, ne) : null;
      return J ? {
        x: Number(K.x || 0) + Number(J.x || 0) * Number(K.w || 0),
        y: Number(K.y || 0) + Number(J.y || 0) * Number(K.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ue(ne, Ce);
    const he = 1e-4, T = o().project(ne, he);
    if (!Number.isFinite(T.z) || T.z <= he && !(Y != null && Y.clipBehind)) return null;
    const q = r.width, re = r.height, E = Math.max(q, re) * 2;
    return {
      x: Ee(T.x, -E, q + E),
      y: Ee(T.y, -E, re + E),
      z: Math.max(T.z, he),
      rawZ: T.z,
      clipped: T.z <= he
    };
  }
  function le(ne, Ce = []) {
    if (n.mode !== "pano" || te(ne)) return 1;
    const M = Ce.map((O) => Number((O == null ? void 0 : O.rawZ) ?? (O == null ? void 0 : O.z))).filter((O) => Number.isFinite(O));
    return M.length ? lE(0.035, 0.2, Math.min(...M)) : 1;
  }
  function j(ne) {
    if (z(ne) && !pe(ne)) return { visible: !1 };
    const Ce = G(ne), M = Vn(Number(Ce.yaw_deg || 0), Number(Ce.pitch_deg || 0)), O = n.mode === "frame" ? c() : null, Y = O ? h(O) : null, he = n.mode === "pano" && (te(ne) || H(ne)), T = he ? { clipBehind: !0 } : null, q = qe(M, null, O, Y, T);
    if (!q) return { visible: !1 };
    const re = w(ne), B = Q(ne).map((x) => qe(x, q.x, O, Y, T)).filter((x) => Number.isFinite(x == null ? void 0 : x.x) && Number.isFinite(x == null ? void 0 : x.y));
    if (B.length < 4) return { visible: !1 };
    const K = F(re, 0, re.tanY), J = F(re, 0, re.tanY + Math.max(re.tanY * 0.43, 0.053)), ie = qe(K, q.x, O, Y, T);
    if (!ie) return { visible: !1 };
    const xe = qe(J, (ie == null ? void 0 : ie.x) ?? q.x, O, Y, T), ke = ((xe == null ? void 0 : xe.x) ?? ie.x) - ie.x, Ie = ((xe == null ? void 0 : xe.y) ?? ie.y) - ie.y, Te = Math.hypot(ke, Ie) || 1, Ye = {
      x: ie.x + ke / Te * 30,
      y: ie.y + Ie / Te * 30
    }, se = qe(F(re, 0, re.tanY), q.x, O, Y, T), we = qe(F(re, re.tanX, 0), q.x, O, Y, T), Oe = qe(F(re, 0, -re.tanY), q.x, O, Y, T), b = qe(F(re, -re.tanX, 0), q.x, O, Y, T);
    if (!se || !we || !Oe || !b) return { visible: !1 };
    const L = [
      q,
      ...B,
      ie,
      xe,
      se,
      we,
      Oe,
      b
    ];
    if (he && !L.some((x) => Number((x == null ? void 0 : x.rawZ) ?? (x == null ? void 0 : x.z)) > 1e-4)) return { visible: !1 };
    const u = le(ne, L), A = [
      {
        edge: "top",
        x: se.x,
        y: se.y,
        a: { x: B[0].x, y: B[0].y },
        b: { x: B[1].x, y: B[1].y }
      },
      {
        edge: "right",
        x: we.x,
        y: we.y,
        a: { x: B[1].x, y: B[1].y },
        b: { x: B[2].x, y: B[2].y }
      },
      {
        edge: "bottom",
        x: Oe.x,
        y: Oe.y,
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
      edgeMidpoints: A,
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: Ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: u,
      visible: !0
    };
  }
  function fe(ne) {
    if (t && H(ne) && D()) return { visible: !1 };
    if (!I() && (oe(ne) || y(ne))) return { visible: !1 };
    if (oe(ne)) {
      const Y = String(ne.actionGroupId || ne.id || "").trim(), he = P(Y, ne.layerKind), T = n._strokeGeomCache.get(he);
      return T || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), Pe(ne, he));
    }
    if (y(ne)) {
      const Y = _(ne), he = n._strokeGeomCache.get(Y);
      return he || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), Ge(ne, Y));
    }
    const Ce = S(ne), M = n._strokeGeomCache.get(Ce);
    if (M) return M;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const O = j(ne);
    return n._strokeGeomCache.set(Ce, O), O;
  }
  function me(ne, Ce, M, O = null) {
    const Y = [];
    for (let he = 0; he <= M; he += 1) {
      const T = he / M;
      let q = 0, re = 0;
      Ce === 0 ? (q = T, re = 0) : Ce === 1 ? (q = 1, re = T) : Ce === 2 ? (q = 1 - T, re = 1) : (q = 0, re = 1 - T);
      const E = $(ne, q, re), B = n.mode === "unwrap" ? ue(E, O) : X(E);
      B && Y.push(B);
    }
    return Y;
  }
  function Ae() {
    const ne = [...Array.isArray(i.shots) ? i.shots : []], Ce = [...a()].sort((M, O) => Number(M.z_index || 0) - Number(O.z_index || 0));
    return [...ne, ...Ce];
  }
  function Fe() {
    const ne = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((M, O) => Number(O.z_index || 0) - Number(M.z_index || 0)), ...ne];
  }
  return {
    connect(ne) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: c,
        getBrushPresetIdForTool: p,
        getFrameCornersUv: f,
        getFrameViewRect: h,
        getRasterObjectCenterUv: m,
        getRasterObjectGeomCacheKey: _,
        getRasterObjectTransformedErpPoints: v,
        getSceneItemGeomCacheKey: S,
        getStickerFrame: w,
        getStrokeGeomCacheKey: P,
        getStrokeGroupCenterUv: W,
        getStrokeGroupStrokes: V,
        isFreeSpaceView: D,
        isRasterObjectItem: y,
        isSceneSticker: z,
        isShotItem: H,
        isStickerItem: te,
        isStrokeGroupItem: oe,
        paintingShown: I,
        poseOf: G,
        projectDir: X,
        projectDirUnwrap: ue,
        projectEditorPoints: Ne,
        projectErpPointToEditor: _e,
        sceneStickerShown: pe,
        stickerCornersDir: Q,
        stickerDirFromFrame: F,
        stickerSampleDir: $,
        worldDirToFrameLocalPoint: de
      } = ne);
    },
    projectSceneItemDir: qe,
    objectGeom: fe,
    sampleStickerEdge: me,
    getCutoutSelectableItemsForDisplay: Ae,
    getCutoutSelectableItemsForHit: Fe
  };
}
const qs = /* @__PURE__ */ new Map();
function LE(e) {
  const {
    api: t,
    cutoutV2: r,
    editor: n,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: a,
    rasterImageCache: s,
    state: c
  } = e;
  let p, f, h, m, _, v, S, w, P, W, V, D, y, z, H, te, oe, I, G, X;
  function ue(T = n.interaction) {
    const q = String((T == null ? void 0 : T.kind) || "");
    if (q === "paint_stroke" || q === "paint_lasso_fill" || q === "move_stroke_group" || q === "scale_stroke_group" || q === "rotate_stroke_group" || q === "move_raster_object" || q === "scale_raster_object") return !0;
    if (q === "move_multi") {
      const re = Array.isArray(T == null ? void 0 : T.strokeSnapshots) && T.strokeSnapshots.length > 0, E = Array.isArray(T == null ? void 0 : T.rasterSnapshots) && T.rasterSnapshots.length > 0;
      return re || E;
    }
    return !1;
  }
  function Ne() {
    var q, re, E, B;
    let T = null;
    try {
      const K = w(), J = ((B = (E = (re = (q = n.paintEngine) == null ? void 0 : q.getErpTarget) == null ? void 0 : re.call(q, K)) == null ? void 0 : E.displayPaint) == null ? void 0 : B.canvas) || null;
      J && (T = {
        source: J,
        revision: `${P()}:${_e()}`
      });
    } catch {
      T = null;
    }
    return T;
  }
  function _e() {
    var B, K, J, ie, xe, ke, Ie;
    const T = n.interaction, q = String((T == null ? void 0 : T.kind) || "");
    if (!ue(T)) return "";
    if (q === "paint_stroke" || q === "paint_lasso_fill") {
      const Te = ((B = T == null ? void 0 : T.stroke) == null ? void 0 : B.geometry) || null, Ye = String(((K = T == null ? void 0 : T.stroke) == null ? void 0 : K.layerKind) || ""), se = ((J = Te == null ? void 0 : Te.rawPoints) == null ? void 0 : J.length) ?? ((ie = Te == null ? void 0 : Te.points) == null ? void 0 : ie.length) ?? 0, we = String((T == null ? void 0 : T._livePreviewToken) || "");
      return `_${Ye || "paint"}_${q}_live${we}_${se}_${n.livePaintInteractionRevision}`;
    }
    const re = String(((xe = T == null ? void 0 : T.item) == null ? void 0 : xe.actionGroupId) || ""), E = String(((ke = T == null ? void 0 : T.item) == null ? void 0 : ke.rasterObjectId) || ((Ie = T == null ? void 0 : T.item) == null ? void 0 : Ie.id) || "");
    return `_${q}_${re || E || "active"}_${n.livePaintInteractionRevision}`;
  }
  function pe(T, q = null) {
    const re = String((T == null ? void 0 : T.rasterDataUrl) || "").trim();
    if (!re) return null;
    const E = s.get(re);
    if (E)
      return E.complete || E.width || E.naturalWidth, E;
    const B = new Image();
    return B.onload = () => {
      typeof q == "function" && q();
    }, B.src = re, s.set(re, B), B;
  }
  function Q(T) {
    const q = String((T == null ? void 0 : T.rasterDataUrl) || "").trim();
    if (!q) return null;
    const re = a.get(q);
    if (re) return re.ready ? re : null;
    const E = pe(T, () => {
      const Ie = a.get(q);
      Ie && (Ie.ready = !1), I({ localOnly: !0 });
    });
    if (!E || !(E.complete || E.width || E.naturalWidth)) return null;
    const B = Number(E.naturalWidth || E.width || 0), K = Number(E.naturalHeight || E.height || 0);
    if (B < 1 || K < 1) return null;
    const J = xn({ label: "editor.image-pixels" });
    J.width = B, J.height = K;
    const ie = J.getContext("2d", { willReadFrequently: !0 });
    if (!ie) return null;
    ie.clearRect(0, 0, B, K), ie.drawImage(E, 0, 0, B, K);
    const xe = ie.getImageData(0, 0, B, K).data, ke = { canvas: J, width: B, height: K, alpha: xe, ready: !0 };
    return a.set(q, ke), ke;
  }
  function F(T, q) {
    if (!T || !q) return null;
    const re = (T == null ? void 0 : T.bbox) || null;
    if (!re) return null;
    const E = (T == null ? void 0 : T.transform) || {}, B = {
      u: (Number(re.u0 || 0) + Number(re.u1 || 0)) * 0.5,
      v: (Number(re.v0 || 0) + Number(re.v1 || 0)) * 0.5
    }, K = {
      u: ((Number(q.u || 0) - Number(E.du || 0)) % 1 + 1) % 1,
      v: Number(q.v || 0) - Number(E.dv || 0)
    }, J = D(
      K,
      B,
      Number(E.scale || 1),
      Number(E.rot_deg || 0)
    ), ie = Number(re.u1 || 0) - Number(re.u0 || 0), xe = Number(re.v1 || 0) - Number(re.v0 || 0);
    if (!(ie > 1e-6) || !(xe > 1e-6)) return null;
    const ke = X(Number(J.u || 0), Number(re.u0 || 0)) / ie, Ie = (Number(J.v || 0) - Number(re.v0 || 0)) / xe;
    if (ke < 0 || ke > 1 || Ie < 0 || Ie > 1) return 0;
    const Te = Q(T);
    if (!Te) return null;
    const Ye = Ee(Math.floor(ke * Te.width), 0, Te.width - 1), se = Ee(Math.floor(Ie * Te.height), 0, Te.height - 1);
    return Number(Te.alpha[(se * Te.width + Ye) * 4 + 3] || 0);
  }
  function $(T, q, re, E = null) {
    if (!(q != null && q.visible) || !hi(re, q.corners)) return !1;
    const B = E || G(re, performance.now()), K = F(T, B);
    return K === null ? !0 : K > 8;
  }
  function de() {
    var E, B, K, J, ie, xe, ke, Ie;
    const T = ((B = (E = n.paintEngine) == null ? void 0 : E.getErpTarget) == null ? void 0 : B.call(E, w(!1))) || null, q = Math.max(1, Number(((K = T == null ? void 0 : T.descriptor) == null ? void 0 : K.width) || ((ie = (J = T == null ? void 0 : T.displayPaint) == null ? void 0 : J.canvas) == null ? void 0 : ie.width) || 2048)), re = Math.max(1, Number(((xe = T == null ? void 0 : T.descriptor) == null ? void 0 : xe.height) || ((Ie = (ke = T == null ? void 0 : T.displayPaint) == null ? void 0 : ke.canvas) == null ? void 0 : Ie.height) || 1024));
    return { width: q, height: re };
  }
  function Pe() {
    var se, we, Oe;
    const T = n.interaction;
    if ((T == null ? void 0 : T.kind) !== "paint_stroke") return null;
    const q = (T == null ? void 0 : T.stroke) || null;
    if (!q || String((q == null ? void 0 : q.layerKind) || "") !== "paint" || String((q == null ? void 0 : q.toolKind) || "") !== "eraser") return null;
    const re = m(), E = `${_e()}:${re.width}:${re.height}`;
    if (((se = n._activePaintEraserPreviewInfo) == null ? void 0 : se.cacheKey) === E)
      return n._activePaintEraserPreviewInfo.value || null;
    const B = yn(q), K = (B == null ? void 0 : B.geometry) || null;
    if (K && String(K.geometryKind || "") !== "lasso_fill") {
      const b = Array.isArray(K.rawPoints) && K.rawPoints.length ? K.rawPoints : Array.isArray(K.points) ? K.points : [];
      K.processedPoints = H(b, B.targetSpace, !0);
    }
    const J = f(re.width, re.height, { readback: !0 });
    if (!te(J, B, { w: re.width, h: re.height })) return null;
    const ie = ((Oe = (we = J.ctx) == null ? void 0 : we.getImageData(0, 0, re.width, re.height)) == null ? void 0 : Oe.data) || null;
    if (!ie) return null;
    let xe = re.width, ke = re.height, Ie = -1, Te = -1;
    for (let b = 0; b < re.height; b += 1)
      for (let L = 0; L < re.width; L += 1)
        ie[(b * re.width + L) * 4 + 3] <= 8 || (L < xe && (xe = L), b < ke && (ke = b), L > Ie && (Ie = L), b > Te && (Te = b));
    if (Ie < xe || Te < ke)
      return n._activePaintEraserPreviewInfo = { cacheKey: E, value: null }, null;
    const Ye = {
      surface: J,
      bounds: { minX: xe, minY: ke, maxX: Ie, maxY: Te },
      key: `${E}:${xe}:${ke}:${Ie}:${Te}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: E, value: Ye }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Ye;
  }
  function Ge() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function qe(T, q, re) {
    var E, B;
    if (!T) return null;
    if (T.type === "rasterObject" && ((E = T.item) != null && E.bbox)) {
      const K = T.item.bbox, J = ((B = T.item) == null ? void 0 : B.transform) || {}, ie = Number(K.u0 || 0) + Number(J.du || 0), xe = Number(K.u1 || 0) + Number(J.du || 0), ke = Number(K.v0 || 0) + Number(J.dv || 0), Ie = Number(K.v1 || 0) + Number(J.dv || 0);
      return {
        minX: Math.floor((ie % 1 + 1) % 1 * q),
        maxX: Math.ceil((xe % 1 + 1) % 1 * q),
        minY: Math.floor(Ee(ke, 0, 1) * re),
        maxY: Math.ceil(Ee(Ie, 0, 1) * re),
        wraps: xe - ie >= 1 || ie < 0 || xe > 1
      };
    }
    if (T.type === "strokeGroup") {
      const K = V(T.actionGroupId, "paint"), J = h(T.actionGroupId, "paint", K);
      if (!J) return null;
      const ie = J.centerUv.u - J.halfW, xe = J.centerUv.u + J.halfW, ke = J.centerUv.v - J.halfH, Ie = J.centerUv.v + J.halfH;
      return {
        minX: Math.floor((ie % 1 + 1) % 1 * q),
        maxX: Math.ceil((xe % 1 + 1) % 1 * q),
        minY: Math.floor(Ee(ke, 0, 1) * re),
        maxY: Math.ceil(Ee(Ie, 0, 1) * re),
        wraps: xe - ie >= 1 || ie < 0 || xe > 1
      };
    }
    return null;
  }
  function le(T, q, re) {
    if (!T || !q) return !1;
    const E = (J) => J.wraps ? [
      { minX: 0, maxX: J.maxX, minY: J.minY, maxY: J.maxY, wraps: !1 },
      { minX: J.minX, maxX: re - 1, minY: J.minY, maxY: J.maxY, wraps: !1 }
    ] : [J], B = E(T), K = E(q);
    return B.some((J) => K.some((ie) => !(J.maxX < ie.minX || ie.maxX < J.minX || J.maxY < ie.minY || ie.maxY < J.minY)));
  }
  function j(T, q, re) {
    var x, U, ye, ce, Le, je, C;
    if (!T || !q || !((x = re == null ? void 0 : re.surface) != null && x.canvas) || q.type !== "rasterObject") return T;
    const E = Number(T.width || re.surface.canvas.width || 0), B = Number(T.height || re.surface.canvas.height || 0);
    if (E < 1 || B < 1) return T;
    const K = qe(q, E, B);
    if (K && !le(K, re.bounds, E)) return T;
    const J = String(((U = q.item) == null ? void 0 : U.id) || q.id || ""), ie = ((ye = q.item) == null ? void 0 : ye.transform) || {}, xe = `${re.key}:${J}:${E}:${B}:${Number(ie.du || 0).toFixed(6)}:${Number(ie.dv || 0).toFixed(6)}:${Number(ie.rot_deg || 0).toFixed(3)}:${Number(ie.scale || 1).toFixed(4)}`, ke = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (ke.has(xe)) return ke.get(xe);
    const Ie = Ee(Math.floor(Number(((ce = re.bounds) == null ? void 0 : ce.minX) || 0)), 0, Math.max(0, E - 1)), Te = Ee(Math.floor(Number(((Le = re.bounds) == null ? void 0 : Le.minY) || 0)), 0, Math.max(0, B - 1)), Ye = Ee(Math.ceil(Number(((je = re.bounds) == null ? void 0 : je.maxX) || 0)), Ie, Math.max(0, E - 1)), se = Ee(Math.ceil(Number(((C = re.bounds) == null ? void 0 : C.maxY) || 0)), Te, Math.max(0, B - 1)), we = Math.max(1, Ye - Ie + 1), Oe = Math.max(1, se - Te + 1), b = f(E, B, { readback: !0 });
    b.ctx.clearRect(0, 0, E, B), b.ctx.drawImage(T, 0, 0);
    const L = b.ctx.getImageData(Ie, Te, we, Oe);
    b.ctx.save(), b.ctx.globalCompositeOperation = "destination-out", b.ctx.drawImage(re.surface.canvas, 0, 0), b.ctx.restore();
    const u = b.ctx.getImageData(Ie, Te, we, Oe);
    let A = !1;
    for (let ge = 0; ge < we * Oe; ge += 1) {
      const ve = L.data[ge * 4 + 3], Ve = u.data[ge * 4 + 3];
      if (ve > Ve) {
        A = !0;
        break;
      }
    }
    return A ? (ke.size > 64 && ke.clear(), ke.set(xe, b.canvas), b.canvas) : (ke.set(xe, T), T);
  }
  function fe(T, q = null) {
    const re = z((T == null ? void 0 : T.rasterObjectId) || (T == null ? void 0 : T.id) || ""), E = (T == null ? void 0 : T.bbox) || null;
    if (!re || !E) return null;
    const B = pe(T, q);
    if (!B || !(B.complete || B.width || B.naturalWidth)) return null;
    const { width: K, height: J } = de(), ie = (T == null ? void 0 : T.transform) || {}, xe = [
      re,
      K,
      J,
      E.u0,
      E.v0,
      E.u1,
      E.v1,
      ie.du,
      ie.dv,
      ie.rot_deg,
      ie.scale,
      W()
    ].join(":"), ke = o.get(xe);
    if (ke) return ke;
    o.size > 64 && o.clear();
    const Ie = xn({ label: "editor.raster-erp" });
    Ie.width = K, Ie.height = J;
    const Te = Ie.getContext("2d");
    if (!Te) return null;
    const Ye = Number(E.u0 || 0) * K, se = Number(E.v0 || 0) * J, we = Math.max(1, (Number(E.u1 || 0) - Number(E.u0 || 0)) * K), Oe = Math.max(1, (Number(E.v1 || 0) - Number(E.v0 || 0)) * J), b = Ye + we * 0.5 + Number(ie.du || 0) * K, L = se + Oe * 0.5 + Number(ie.dv || 0) * J, u = Number(ie.rot_deg || 0) * Rr, A = Math.max(0.01, Number(ie.scale || 1));
    for (const x of [-K, 0, K])
      Te.save(), Te.translate(b + x, L), Te.rotate(u), Te.scale(A, A), Te.drawImage(B, -we * 0.5, -Oe * 0.5, we, Oe), Te.restore();
    return o.set(xe, Ie), Ie;
  }
  async function me(T, q) {
    const re = await new Promise((ie) => T.toBlob(ie, "image/png")), E = new FormData();
    E.append("image", re, q), E.append("type", "input"), E.append("subfolder", "panorama_stickers"), E.append("overwrite", "1");
    const B = await t.fetchApi("/upload/image", { method: "POST", body: E });
    if (!B || B.status !== 200) throw new Error(`upload failed (${B == null ? void 0 : B.status})`);
    const K = await B.json(), J = String((K == null ? void 0 : K.name) || "").trim();
    if (!J) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: J,
      subfolder: String((K == null ? void 0 : K.subfolder) || "panorama_stickers"),
      storage: String((K == null ? void 0 : K.type) || "input")
    };
  }
  let Ae = null, Fe = !1;
  function ne() {
    if (r) return !1;
    const T = tg(c.painting), { width: q, height: re } = _();
    return gk(c.painting_layer, { paintCount: T.totalPaintCount, maskCount: T.totalMaskCount, width: q, height: re, nodeId: String(i.id ?? "0") });
  }
  function Ce() {
    const T = String(i.id ?? "0"), q = qs.get(T);
    if (Fe && q) return q;
    const re = (async () => {
      var K, J, ie, xe, ke, Ie, Te, Ye, se, we, Oe, b;
      const E = P(), B = tg(c.painting);
      if (B.totalPaintCount <= 0 && B.totalMaskCount <= 0) {
        c.painting_layer !== null && (c.painting_layer = null, Ae = E, p());
        return;
      }
      if (Ae !== E && !Fe) {
        Fe = !0;
        try {
          oe();
          const L = w(!1), u = ((J = (K = n.paintEngine) == null ? void 0 : K.getErpTarget) == null ? void 0 : J.call(K, L)) || null, A = ((ie = u == null ? void 0 : u.displayPaint) == null ? void 0 : ie.canvas) || null, x = ((xe = u == null ? void 0 : u.committedMask) == null ? void 0 : xe.canvas) || null, U = Math.max(1, Number(((ke = u == null ? void 0 : u.descriptor) == null ? void 0 : ke.width) || (A == null ? void 0 : A.width) || (x == null ? void 0 : x.width) || 2048)), ye = Math.max(1, Number(((Ie = u == null ? void 0 : u.descriptor) == null ? void 0 : Ie.height) || (A == null ? void 0 : A.height) || (x == null ? void 0 : x.height) || 1024));
          (!A && B.totalPaintCount > 0 || !x && B.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((Te = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Te.width) || 0) !== U || Number(((Ye = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Ye.height) || 0) !== ye) && (n._paintLayerSyncBlankSurface = f(U, ye)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, U, ye));
          const ce = A || B.totalPaintCount > 0 && ((se = n._paintLayerSyncBlankSurface) == null ? void 0 : se.canvas) || null, Le = x || B.totalMaskCount > 0 && ((we = n._paintLayerSyncBlankSurface) == null ? void 0 : we.canvas) || null;
          if (!ce && !Le) return;
          let je = null, C = null;
          const ge = [];
          if (B.totalPaintCount > 0) {
            je = await me(ce, `pano_paint_${T}.png`);
            for (const ve of L) {
              const Ve = String(ve || "").trim();
              if (!Ve) continue;
              const Be = ((b = (Oe = n.paintEngine) == null ? void 0 : Oe.getGroupDisplayCanvas) == null ? void 0 : b.call(Oe, Ve)) || null;
              if (!Be) continue;
              const Ke = Ve.replace(/[^a-zA-Z0-9_-]+/g, "_"), Je = await me(Be, `pano_group_${T}_${Ke}.png`);
              Je && ge.push({
                id: Ve,
                actionGroupId: Ve,
                image: Je
              });
            }
          }
          B.totalMaskCount > 0 && (C = await me(Le, `pano_mask_${T}.png`)), E === P() && (c.painting_layer = {
            paint: je,
            mask: C,
            groups: ge,
            revision: E
          }, Ae = E, p());
        } catch (L) {
          throw L;
        } finally {
          Fe = !1;
        }
      }
    })();
    return qs.set(T, re), re.finally(() => {
      qs.get(T) === re && qs.delete(T);
    }), re;
  }
  function M(T) {
    var J;
    const q = ((J = n.paintEngine) == null ? void 0 : J.getMaskDisplayCanvas()) || null;
    if (!q) return T;
    const re = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, E = T.reduce((ie, xe) => Math.max(ie, Number((xe == null ? void 0 : xe.zIndex) || 0)), -1), B = (Array.isArray(c.stickers) ? c.stickers : []).reduce((ie, xe) => Math.max(ie, Number((xe == null ? void 0 : xe.z_index) || 0)), -1), K = Math.max(E, B);
    return T.push({
      id: "mask_display",
      source: q,
      revision: re,
      zIndex: K + 1,
      opacity: 1,
      visible: !0
    }), T;
  }
  function O() {
    var E, B;
    const T = S(!0), q = Pe(), re = [];
    for (const K of T) {
      if ((K == null ? void 0 : K.type) === "strokeGroup") {
        const J = String(K.actionGroupId || K.id || "");
        if (!J) continue;
        const ie = ((B = (E = n.paintEngine) == null ? void 0 : E.getGroupDisplayCanvas) == null ? void 0 : B.call(E, J)) || null;
        if (!ie) continue;
        re.push({
          id: `paint_group:${J}`,
          source: ie,
          revision: `${v()}:${J}`,
          zIndex: Number((K == null ? void 0 : K.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((K == null ? void 0 : K.type) === "rasterObject") {
        const J = K.item || null, ie = z((J == null ? void 0 : J.id) || K.id || "");
        if (!ie) continue;
        const xe = fe(J, () => I());
        if (!xe) continue;
        const ke = j(xe, K, q), Ie = (J == null ? void 0 : J.transform) || {};
        re.push({
          id: `raster:${ie}`,
          source: ke,
          revision: [
            P(),
            (q == null ? void 0 : q.key) || "",
            ie,
            Number(Ie.du || 0).toFixed(6),
            Number(Ie.dv || 0).toFixed(6),
            Number(Ie.rot_deg || 0).toFixed(3),
            Number(Ie.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((K == null ? void 0 : K.z_index) || 0),
          opacity: 1,
          visible: (J == null ? void 0 : J.visible) !== !1
        });
      }
    }
    return M(re);
  }
  function Y() {
    return y() ? O().filter((T) => T.visible !== !1).map((T) => ({ id: T.id, media: T.source, revision: T.revision, opacity: T.opacity, zIndex: T.zIndex })) : [];
  }
  function he() {
    c.painting_layer !== null && (c.painting_layer = null), Ae = "";
  }
  return {
    connect(T) {
      ({
        commitState: p,
        createRasterSurface: f,
        ensureGroupFrame: h,
        getActivePaintTargetDescriptor: m,
        getDesiredPaintTargetDescriptor: _,
        getDisplayPaintRevisionKey: v,
        getOrderedDisplayListObjects: S,
        getOrderedPaintGroupIds: w,
        getPaintingCompositeRevisionKey: P,
        getPaintingRevisionKey: W,
        getStrokeGroupStrokes: V,
        inverseTransformErpPointAround: D,
        paintingShown: y,
        parseRasterObjectSelectionId: z,
        processFreehandPoints: H,
        rasterizeStrokeToSurface: te,
        rebuildPaintEngineIfNeeded: oe,
        requestDraw: I,
        screenPosToErpPoint: G,
        shortestWrappedDelta: X
      } = T);
    },
    getSharedLivePaintSurface: Ne,
    getLivePaintRevisionSuffix: _e,
    isPaintCompositeInteraction: ue,
    hitRasterObjectAt: $,
    invalidateLivePaintPreviewCaches: Ge,
    buildRasterObjectEditCanvas: fe,
    needsPaintingLayerSync: ne,
    syncPaintingLayerAsync: Ce,
    invalidatePaintingLayerState: he,
    buildEditorViewPaintLayers: Y
  };
}
function RE(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function c(le) {
    return !le || typeof le != "object" ? { x: 0, y: 0 } : { x: Number((le == null ? void 0 : le.u) || 0), y: Number((le == null ? void 0 : le.v) || 0) };
  }
  function p(le, j, fe, me = {}) {
    return { ...{
      ...le,
      t: Number((le == null ? void 0 : le.t) || 0),
      widthScale: m(le, "widthScale", 1),
      pressureLike: m(le, "pressureLike", 1)
    }, ...me, u: j, v: fe };
  }
  function f(le, j = !1) {
    return j ? 12e-4 : 18e-4;
  }
  function h(le, j, fe = !1) {
    if (!Array.isArray(le) || !le.length) return [];
    const me = String((j == null ? void 0 : j.kind) || "") === "ERP_GLOBAL", Ae = /* @__PURE__ */ new WeakMap();
    if (me) {
      let E = null;
      le.forEach((B) => {
        const K = Number((B == null ? void 0 : B.u) || 0), J = Number((B == null ? void 0 : B.v) || 0), ie = (K % 1 + 1) % 1, xe = E == null ? ie : E + s(ie, (E % 1 + 1) % 1);
        Ae.set(B, { x: xe, y: J }), E = xe;
      });
    }
    const Fe = (E) => !E || typeof E != "object" ? { x: 0, y: 0 } : Ae.get(E) || c(E), ne = (E, B, K, J = {}) => {
      const ie = me ? (Number(B) % 1 + 1) % 1 : Number(B), xe = p(E, ie, K, J);
      return Ae.set(xe, { x: Number(B), y: Number(K) }), xe;
    }, Ce = (E, B, K) => {
      const J = Fe(E), ie = Fe(B);
      return ne(E, rr(J.x, ie.x, K), rr(J.y, ie.y, K), {
        t: rr(Number((E == null ? void 0 : E.t) || 0), Number((B == null ? void 0 : B.t) || 0), K),
        widthScale: rr(m(E, "widthScale", 1), m(B, "widthScale", 1), K),
        pressureLike: rr(m(E, "pressureLike", 1), m(B, "pressureLike", 1), K)
      });
    };
    if (le.length === 1) {
      const E = Fe(le[0]);
      return [ne(le[0], E.x, E.y)];
    }
    const M = f(j, fe), O = (E, B) => {
      const K = [0];
      for (let se = 1; se < E.length; se += 1) {
        const we = Fe(E[se - 1]), Oe = Fe(E[se]);
        K.push(K[se - 1] + Math.hypot(Oe.x - we.x, Oe.y - we.y));
      }
      const J = K[K.length - 1] || 0;
      if (J <= 1e-8) {
        const se = E[0], we = Fe(se);
        return [ne(se, we.x, we.y)];
      }
      const ie = [];
      let xe = 0;
      for (let se = 0; se <= J + 1e-9; se += B) {
        for (; xe < K.length - 2 && K[xe + 1] < se; ) xe += 1;
        const we = K[xe], Oe = K[xe + 1], b = Math.max(1e-8, Oe - we);
        ie.push(Ce(E[xe], E[xe + 1], Ee((se - we) / b, 0, 1)));
      }
      const ke = E[E.length - 1], Ie = Fe(ke), Te = ie[ie.length - 1], Ye = Te ? Fe(Te) : null;
      return (!Ye || Math.hypot(Ye.x - Ie.x, Ye.y - Ie.y) > B * 0.35) && ie.push(ne(ke, Ie.x, Ie.y)), ie;
    }, Y = (E) => {
      if (!Array.isArray(E) || E.length < 3) return E ? E.slice() : [];
      const B = Fe(E[0]), K = [ne(E[0], B.x, B.y)];
      for (let xe = 0; xe < E.length - 1; xe += 1) {
        const ke = E[xe], Ie = E[xe + 1], Te = Fe(ke), Ye = Fe(Ie), se = ne(
          ke,
          Te.x * 0.75 + Ye.x * 0.25,
          Te.y * 0.75 + Ye.y * 0.25,
          {
            t: Number(ke.t || 0) * 0.75 + Number(Ie.t || 0) * 0.25,
            widthScale: m(ke, "widthScale", 1) * 0.75 + m(Ie, "widthScale", 1) * 0.25,
            pressureLike: m(ke, "pressureLike", 1) * 0.75 + m(Ie, "pressureLike", 1) * 0.25
          }
        ), we = ne(
          ke,
          Te.x * 0.25 + Ye.x * 0.75,
          Te.y * 0.25 + Ye.y * 0.75,
          {
            t: Number(ke.t || 0) * 0.25 + Number(Ie.t || 0) * 0.75,
            widthScale: m(ke, "widthScale", 1) * 0.25 + m(Ie, "widthScale", 1) * 0.75,
            pressureLike: m(ke, "pressureLike", 1) * 0.25 + m(Ie, "pressureLike", 1) * 0.75
          }
        );
        K.push(se, we);
      }
      const J = E[E.length - 1], ie = Fe(J);
      return K.push(ne(J, ie.x, ie.y)), K;
    }, he = O(le, M);
    if (he.length < 3) return he;
    const T = fe ? 2 : 1;
    let q = he.slice();
    for (let E = 0; E < T; E += 1) q = Y(q);
    return O(q, Math.max(M * 0.75, 55e-5));
  }
  function m(le, j, fe = 1) {
    const me = Number(le == null ? void 0 : le[j]);
    return Number.isFinite(me) ? Math.max(0, me) : fe;
  }
  function _(le) {
    const j = Number(le == null ? void 0 : le.radiusValue);
    if (Number.isFinite(j) && j > 0) {
      const fe = String((le == null ? void 0 : le.radiusModel) || "").trim() || "erp_uv_norm";
      return fe === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((le == null ? void 0 : le.size) || 10) * 0.5 / 2048)
      } : {
        model: fe,
        value: j
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((le == null ? void 0 : le.size) || 10) * 0.5 / 2048)
    };
  }
  function v(le, j, fe = {}) {
    const me = xn({ label: "editor.raster-surface" });
    me.width = Math.max(1, Math.round(le)), me.height = Math.max(1, Math.round(j));
    const Ae = me.getContext("2d", fe.readback ? { willReadFrequently: !0 } : void 0);
    return Ae && (Ae.clearRect(0, 0, me.width, me.height), Ae.imageSmoothingEnabled = !0), { canvas: me, ctx: Ae };
  }
  function S() {
    const le = I();
    return `${String(t.paintStrokeRevision)}:${le.width}x${le.height}`;
  }
  function w() {
    const le = I();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${le.width}x${le.height}`;
  }
  function P() {
    const le = i(), j = w();
    return le ? `${j}:${le}` : j;
  }
  function W() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function V() {
    t.paintCompositeRevision += 1;
  }
  function D() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function y() {
    var le, j;
    t.paintEngineRevisionKey = null, (j = (le = t.paintEngine) == null ? void 0 : le.rebuildCommitted) == null || j.call(le, n), t.paintEngineRevisionKey = S();
  }
  function z() {
    D(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function H({ rebuildPaintEngine: le = !1 } = {}) {
    o(), W(), z(), le && y();
  }
  function te() {
    o(), V(), z();
  }
  function oe() {
    var me;
    const le = I(), j = `${le.width}x${le.height}`;
    t.paintEngineDescriptorKey !== j && (t.paintEngine = Xd(le), t.paintEngineDescriptorKey = j, t.paintEngineRevisionKey = "");
    const fe = S();
    t.paintEngineRevisionKey !== fe && (t.paintEngineRevisionKey = fe, (me = t.paintEngine) == null || me.rebuildCommitted(n));
  }
  function I() {
    const le = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: le,
      height: Math.max(1, Math.round(le * 0.5))
    };
  }
  function G() {
    return I();
  }
  function X(le, j, fe, me, Ae = null) {
    const Fe = _(le), ne = m(j, "widthScale", 1) * m(j, "pressureLike", 1);
    return Fe.model === "erp_uv_norm" ? Math.max(0.5, Fe.value * fe * ne) : Fe.model === "world_angle" ? Ae ? Math.max(0.5, Fe.value / Math.max(1e-6, Number(Ae.hFOV_deg || 90) * Rr) * fe * ne) : Math.max(0.5, Fe.value / (2 * Math.PI) * fe * ne) : Math.max(0.5, Number((le == null ? void 0 : le.size) || 10) * 0.5 * ne);
  }
  function ue(le, j, fe = {}) {
    const me = String((j == null ? void 0 : j.layerKind) || "paint"), Ae = String((j == null ? void 0 : j.toolKind) || "pen"), Fe = fe.preview === !0, ne = Fe ? 0.78 : 1;
    if (le.globalAlpha = Ae === "marker" ? 0.7 * ne : 1, me === "mask") {
      le.fillStyle = Fe ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Ae === "eraser") {
      le.globalCompositeOperation = "destination-out", le.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const Ce = String((j == null ? void 0 : j.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (j == null ? void 0 : j.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, M = Fe ? Math.max(0.28, Number(Ce.a ?? 1) * 0.88) : Math.max(0.12, Number(Ce.a ?? 1));
    le.fillStyle = `rgba(${Math.round(Number(Ce.r || 0) * 255)}, ${Math.round(Number(Ce.g || 0) * 255)}, ${Math.round(Number(Ce.b || 0) * 255)}, ${M})`;
  }
  function Ne(le, j, fe) {
    const me = Math.max(0.5, Math.min(fe, Number((j == null ? void 0 : j.radiusPx) || 0.5)));
    !Number.isFinite(j == null ? void 0 : j.x) || !Number.isFinite(j == null ? void 0 : j.y) || !Number.isFinite(me) || (le.beginPath(), le.arc(Number(j.x || 0), Number(j.y || 0), me, 0, Math.PI * 2), le.fill());
  }
  function _e(le, j, fe, me, Ae = {}) {
    if (!le || !Array.isArray(j) || !j.length) return;
    const Fe = Math.max(me.w, me.h) * 0.25;
    le.save(), ue(le, fe, Ae);
    const ne = (Ce) => Ne(le, Ce, Fe);
    if (j.length === 1) {
      ne(j[0]), le.restore();
      return;
    }
    for (let Ce = 0; Ce < j.length - 1; Ce += 1) {
      const M = j[Ce], O = j[Ce + 1];
      if (!M || !O) continue;
      const Y = Number(M.x || 0), he = Number(M.y || 0), T = Number(O.x || 0), q = Number(O.y || 0), re = Math.max(0.5, Math.min(Fe, Number(M.radiusPx || 0.5))), E = Math.max(0.5, Math.min(Fe, Number(O.radiusPx || 0.5)));
      if (!Number.isFinite(Y) || !Number.isFinite(he) || !Number.isFinite(T) || !Number.isFinite(q) || !Number.isFinite(re) || !Number.isFinite(E)) continue;
      const B = T - Y, K = q - he, J = Math.hypot(B, K);
      if (!Number.isFinite(J) || J < 1e-6) {
        ne(M);
        continue;
      }
      if (J > Math.max(me.w, me.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(re, E)), xe = Math.max(0.35, Math.min(ie * 0.4, 2.25)), ke = Math.max(1, Math.ceil(J / xe));
      for (let Ie = 0; Ie <= ke; Ie += 1) {
        const Te = Ie / ke;
        ne({
          x: rr(Y, T, Te),
          y: rr(he, q, Te),
          radiusPx: rr(re, E, Te)
        });
      }
    }
    ne(j[j.length - 1]), le.restore();
  }
  function pe(le, j, fe, me) {
    _e(le, j, fe, me, { preview: !1 });
  }
  function Q(le, j, fe, me, Ae) {
    var Ce, M, O, Y;
    if (!le || !Array.isArray(j) || j.length < 3) return;
    const Fe = "u", ne = "v";
    if (le.save(), String((fe == null ? void 0 : fe.layerKind) || "") === "mask")
      le.fillStyle = "rgba(255,255,255,1)";
    else if (String((fe == null ? void 0 : fe.toolKind) || "") === "eraser")
      le.globalCompositeOperation = "destination-out", le.fillStyle = "rgba(0,0,0,1)";
    else {
      const he = (fe == null ? void 0 : fe.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      le.fillStyle = `rgba(${Math.round(Number(he.r || 0) * 255)}, ${Math.round(Number(he.g || 0) * 255)}, ${Math.round(Number(he.b || 0) * 255)}, ${Number(he.a ?? 1)})`;
    }
    le.beginPath(), le.moveTo(Number(((Ce = j[0]) == null ? void 0 : Ce[Fe]) || 0) * me.w, Number(((M = j[0]) == null ? void 0 : M[ne]) || 0) * me.h);
    for (let he = 1; he < j.length; he += 1)
      le.lineTo(Number(((O = j[he]) == null ? void 0 : O[Fe]) || 0) * me.w, Number(((Y = j[he]) == null ? void 0 : Y[ne]) || 0) * me.h);
    le.closePath(), le.fill(), le.restore();
  }
  function F(le) {
    const j = (le == null ? void 0 : le.geometry) || null;
    return j ? String(j.geometryKind || "") === "lasso_fill" ? Array.isArray(j.points) ? j.points : [] : Array.isArray(j.processedPoints) && j.processedPoints.length ? j.processedPoints : Array.isArray(j.rawPoints) && j.rawPoints.length ? j.rawPoints : Array.isArray(j.points) ? j.points : [] : [];
  }
  function $(le, j) {
    const fe = F(le);
    return !Array.isArray(fe) || !fe.length ? [] : fe.map((me) => ({
      x: Number((me == null ? void 0 : me.u) || 0) * Number((j == null ? void 0 : j.w) || 1),
      y: Number((me == null ? void 0 : me.v) || 0) * Number((j == null ? void 0 : j.h) || 1),
      radiusPx: X(le, me, Number((j == null ? void 0 : j.w) || 1), Number((j == null ? void 0 : j.h) || 1))
    }));
  }
  function de(le, j, fe = null) {
    var Ce, M, O, Y;
    if (!(le != null && le.ctx) || !j) return !1;
    const me = fe || { w: Number(((Ce = le.canvas) == null ? void 0 : Ce.width) || 0), h: Number(((M = le.canvas) == null ? void 0 : M.height) || 0) }, Ae = String((j == null ? void 0 : j.toolKind) || "") === "eraser" ? {
      ...j,
      layerKind: "mask",
      toolKind: String(((O = j == null ? void 0 : j.geometry) == null ? void 0 : O.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : j;
    if (String(((Y = j == null ? void 0 : j.geometry) == null ? void 0 : Y.geometryKind) || "") === "lasso_fill")
      return Q(le.ctx, F(Ae), Ae, me), !0;
    const ne = $(Ae, me);
    return ne.length ? (pe(le.ctx, ne, Ae, me), !0) : !1;
  }
  function Pe(le, j, fe, me = 8) {
    const Ae = new Uint8Array(j * fe), Fe = [], ne = new Int32Array(j * fe), Ce = new Int32Array(j * fe);
    for (let M = 0; M < fe; M += 1)
      for (let O = 0; O < j; O += 1) {
        const Y = M * j + O;
        if (Ae[Y] || le[Y] <= me) continue;
        let he = 0, T = 0;
        ne[T] = O, Ce[T] = M, T += 1, Ae[Y] = 1;
        const q = [];
        let re = O, E = M, B = O, K = M;
        for (; he < T; ) {
          const J = ne[he], ie = Ce[he];
          he += 1, q.push({ x: J, y: ie }), J < re && (re = J), ie < E && (E = ie), J > B && (B = J), ie > K && (K = ie);
          const xe = [
            [(J - 1 + j) % j, ie],
            [(J + 1) % j, ie],
            [J, ie - 1],
            [J, ie + 1]
          ];
          for (const [ke, Ie] of xe) {
            if (Ie < 0 || Ie >= fe) continue;
            const Te = Ie * j + ke;
            Ae[Te] || le[Te] <= me || (Ae[Te] = 1, ne[T] = ke, Ce[T] = Ie, T += 1);
          }
        }
        Fe.push({ pixels: q, minX: re, minY: E, maxX: B, maxY: K });
      }
    return Fe;
  }
  function Ge(le, j) {
    const fe = [...new Set((Array.isArray(le == null ? void 0 : le.pixels) ? le.pixels : []).map((M) => Number((M == null ? void 0 : M.x) || 0)).filter((M) => Number.isFinite(M)))].sort((M, O) => M - O);
    if (!fe.length) return null;
    if (fe.length === 1)
      return { startX: fe[0], widthPx: 1 };
    let me = -1, Ae = 0;
    for (let M = 0; M < fe.length; M += 1) {
      const O = fe[M], he = (M === fe.length - 1 ? fe[0] + j : fe[M + 1]) - O - 1;
      he > me && (me = he, Ae = M);
    }
    const Fe = (fe[(Ae + 1) % fe.length] + j) % j;
    let ne = 1 / 0, Ce = -1 / 0;
    for (const M of fe) {
      const O = (M - Fe + j) % j;
      ne = Math.min(ne, O), Ce = Math.max(Ce, O);
    }
    return {
      startX: Fe,
      widthPx: Math.max(1, Ce - ne + 1)
    };
  }
  function qe(le, j, fe = {}) {
    var O;
    const me = Number((le == null ? void 0 : le.width) || 0), Ae = Number((le == null ? void 0 : le.height) || 0), Fe = (O = le == null ? void 0 : le.getContext) == null ? void 0 : O.call(le, "2d");
    if (!Fe || me < 1 || Ae < 1) return [];
    const ne = Fe.getImageData(0, 0, me, Ae), Ce = new Uint8Array(me * Ae);
    for (let Y = 0; Y < Ce.length; Y += 1) Ce[Y] = ne.data[Y * 4 + 3];
    return Pe(Ce, me, Ae, 8).map((Y, he) => {
      const T = Ge(Y, me);
      if (!T) return null;
      const q = Number(T.widthPx || 0), re = Y.maxY - Y.minY + 1, E = Number(T.startX || 0), B = xn({ label: "editor.lasso-fill" });
      B.width = q, B.height = re;
      const K = B.getContext("2d");
      if (!K) return null;
      const J = K.createImageData(q, re);
      return Y.pixels.forEach(({ x: ie, y: xe }) => {
        const ke = (xe * me + ie) * 4, Ie = (Number(ie || 0) - E + me) % me, Te = ((xe - Y.minY) * q + Ie) * 4;
        J.data[Te + 0] = ne.data[ke + 0], J.data[Te + 1] = ne.data[ke + 1], J.data[Te + 2] = ne.data[ke + 2], J.data[Te + 3] = ne.data[ke + 3];
      }), K.putImageData(J, 0, 0), {
        id: Oo("raster"),
        type: "raster_frozen",
        layerKind: j === "mask" ? "mask" : "paint",
        z_index: Number((fe == null ? void 0 : fe.z_index) || 0) + he * 1e-3,
        locked: (fe == null ? void 0 : fe.locked) === !0,
        bbox: {
          u0: 0,
          v0: Y.minY / Ae,
          u1: q / me,
          v1: (Y.maxY + 1) / Ae
        },
        rasterDataUrl: B.toDataURL("image/png"),
        transform: {
          du: E / me,
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
    processFreehandPoints: h,
    createRasterSurface: v,
    getPaintingRevisionKey: S,
    getPaintingCompositeRevisionKey: w,
    getDisplayPaintRevisionKey: P,
    refreshPaintEngineRevisionCache: y,
    markObjectVisualsDirty: z,
    markPaintStrokeVisualsDirty: H,
    markPaintCompositeVisualsDirty: te,
    rebuildPaintEngineIfNeeded: oe,
    getDesiredPaintTargetDescriptor: I,
    getActivePaintTargetDescriptor: G,
    rasterizeStrokeToSurface: de,
    createRasterFrozenObjectsFromCanvas: qe
  };
}
function VE(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, c, p, f, h, m, _;
  function v(oe, I = null) {
    var G;
    if (oe && typeof oe == "object" && !Array.isArray(oe)) return oe;
    if (Array.isArray(oe) && oe.length > 0) {
      const X = oe[0];
      if (X && typeof X == "object" && !Array.isArray(X)) return X;
    }
    if (Array.isArray(I) && I.length > 0) {
      const X = (G = I[0]) == null ? void 0 : G.parsed_state;
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
  function S(oe, I, G) {
    const X = Math.max(1, Number(I || 1)), ue = Math.max(1, Number(G || 1)), Ne = Ee(Number(oe || 30), 0.1, 179) * Rr, _e = 2 * Math.atan(Math.tan(Ne * 0.5) * (ue / X));
    return Ee(_e * Xi, 0.1, 179);
  }
  function w(oe) {
    const I = String(oe || "").trim();
    if (!I) return null;
    try {
      const G = JSON.parse(I);
      if (!G || typeof G != "object" || String(G.kind || "") !== "pano_sticker_state") return null;
      const X = G.version;
      let ue = null;
      if (typeof X == "number" && Number.isInteger(X) ? ue = X : typeof X == "string" && /^\d+$/.test(X) && (ue = Number.parseInt(X, 10)), ue !== 1) return null;
      const Ne = G.pose;
      if (!Ne || typeof Ne != "object") return null;
      const _e = Number(Ne.yaw_deg), pe = Number(Ne.pitch_deg), Q = Number(Ne.roll_deg), F = Number(Ne.hFOV_deg);
      if (![_e, pe, Q, F].every((Ge) => Number.isFinite(Ge))) return null;
      let $ = ((_e + 180) % 360 + 360) % 360 - 180;
      Object.is($, -0) && ($ = 0);
      const de = {
        yaw_deg: $,
        pitch_deg: Ee(pe, -89.9, 89.9),
        roll_deg: Q,
        hFOV_deg: Ee(F, 0.1, 179)
      }, Pe = Number(G.source_aspect);
      return Number.isFinite(Pe) && Pe > 0 && (de.source_aspect = Pe), de;
    } catch {
      return null;
    }
  }
  function P(oe) {
    const I = Number(oe == null ? void 0 : oe.yaw_deg), G = Number(oe == null ? void 0 : oe.pitch_deg), X = Number((oe == null ? void 0 : oe.roll_deg) ?? (oe == null ? void 0 : oe.rot_deg)), ue = Number(oe == null ? void 0 : oe.hFOV_deg), Ne = oo(oe);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(I) ? I : 0),
        pitch_deg: Ee(Number.isFinite(G) ? G : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(X) ? X : 0,
        hFOV_deg: Ee(Number.isFinite(ue) ? ue : 90, 0.1, 179)
      },
      source_aspect: Ne
    };
  }
  function W(oe) {
    var pe;
    if (!oe || typeof oe != "object") return P(null);
    const I = Number(oe == null ? void 0 : oe.yaw_deg), G = Number(oe == null ? void 0 : oe.pitch_deg), X = Number((oe == null ? void 0 : oe.roll_deg) ?? (oe == null ? void 0 : oe.rot_deg)), ue = Number(oe == null ? void 0 : oe.hFOV_deg), Ne = Number(oe == null ? void 0 : oe.vFOV_deg);
    let _e = 1;
    if (Number.isFinite(ue) && Number.isFinite(Ne)) {
      const Q = Ee(ue, 0.1, 179) * Rr, F = Ee(Ne, 0.1, 179) * Rr, $ = Math.tan(F * 0.5);
      if (Math.abs($) > 1e-6) {
        const de = Math.tan(Q * 0.5) / $;
        Number.isFinite(de) && de > 0 && (_e = de);
      }
    }
    if (oe != null && oe.asset_id && ((pe = o == null ? void 0 : o.assets) != null && pe[oe.asset_id])) {
      const Q = o.assets[oe.asset_id], F = Number((Q == null ? void 0 : Q.w) || 0), $ = Number((Q == null ? void 0 : Q.h) || 0);
      F > 0 && $ > 0 && (_e = F / $);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(I) ? I : 0),
        pitch_deg: Ee(Number.isFinite(G) ? G : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(X) ? X : 0,
        hFOV_deg: Ee(Number.isFinite(ue) ? ue : 30, 0.1, 179)
      },
      source_aspect: _e
    };
  }
  function V(oe) {
    return t.linkedValue(n, oe);
  }
  function D(oe, I, G) {
    const X = oe && typeof oe == "object" ? {
      yaw_deg: Number(oe.yaw_deg || 0),
      pitch_deg: Number(oe.pitch_deg || 0),
      roll_deg: Number(oe.rot_deg ?? oe.roll_deg ?? 0),
      hFOV_deg: Number(oe.hFOV_deg || 30)
    } : w(I);
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
  function y() {
    const oe = c(() => {
      ni(n, "image-loaded");
    }), I = mn(n, "external-sticker") ? v(p("pano_sticker_input_pose"), null) : null;
    return Ly(o, Dy(n, { pose: I, image: oe }));
  }
  function z() {
    var pe;
    const oe = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((Q) => String((Q == null ? void 0 : Q.name) || "") === "sticker_image") : -1, I = oe >= 0 ? ((pe = n.getInputLink(oe)) == null ? void 0 : pe.id) ?? null : null, G = c(() => {
      ni(n, "image-loaded");
    }), X = v(p("pano_sticker_input_pose"), null), ue = V("sticker_state"), Ne = t.externalStateHash(n, ue), _e = I == null ? null : D(X, ue, G);
    return Ty(o, {
      connected: I != null,
      linkId: I,
      stateHash: Ne,
      pose: _e,
      imageWidth: Number((G == null ? void 0 : G.naturalWidth) || (G == null ? void 0 : G.width) || 0),
      imageHeight: Number((G == null ? void 0 : G.naturalHeight) || (G == null ? void 0 : G.height) || 0)
    });
  }
  function H(oe = "sync") {
    if (a !== "stickers" || i) return;
    const I = n.__panoSceneStateV2 ? y() : z();
    if (I.changed) {
      const G = o.stickers.find(f);
      o.stickers = I.state.stickers, o.active = I.state.active, G && r.selectedId === G.id && !o.stickers.some((X) => X.id === G.id) && (r.selectedId = null, r.selectedIds = []), s(), _(), m();
    }
    h();
  }
  function te() {
    const oe = Array.isArray(o.stickers) ? o.stickers : [], I = [];
    for (const G of oe)
      f(G) && (G.visible = !1, I.push(G));
    return I;
  }
  return {
    connect(oe) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: c,
        getNodeUiValue: p,
        isExternalSticker: f,
        requestDraw: h,
        updateSelectionMenu: m,
        updateSidePanel: _
      } = oe);
    },
    computeStickerVFov: S,
    buildCanonicalCutoutStickerState: P,
    buildCanonicalSelectedStickerState: W,
    reconcileExternalStickerFromInputs: H,
    collectExternalStickersForClearAll: te
  };
}
function $E(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: c,
    state: p,
    stateV2: f,
    studio: h,
    viewController: m
  } = e;
  let _, v, S, w, P, W, V, D, y, z = null;
  function H(E, B = null) {
    const K = $();
    V(() => {
      i.viewTransition = w2(K, E, performance.now(), { scale: Ae(), end: B });
    }), !i.viewTransition && B && te(B), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0, D(), P({ localOnly: !0, reason: Nt.VIEW });
  }
  function te(E) {
    Q(id({ ...pe(), moved: E.moved }, E.mode, de())), s.backgroundDirty = !0;
  }
  function oe() {
    i.viewTransition && (i.viewTransition = null, D());
  }
  function I(E, B) {
    H({ ...$(), yaw_deg: E, pitch_deg: B });
  }
  function G() {
    return !h || Ge() && !w();
  }
  function X() {
    return i.mode === "pano" && ue();
  }
  function ue() {
    return f && Gk({ sceneLinked: c && !!Sf(a).scene, files: W(), stickers: p.stickers });
  }
  function Ne() {
    return i.spaceMode === "6dof" && X();
  }
  function _e() {
    var E, B, K;
    return RN((K = (B = (E = t.ui) == null ? void 0 : E.settings) == null ? void 0 : B.getSettingValue) == null ? void 0 : K.call(B, Qy));
  }
  function pe() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function Q(E) {
    i.spaceMode = E.mode, i.viewPosition = E.position, i.viewMoved = E.moved;
  }
  function F(E) {
    var K;
    const B = k2(i.spaceMode, i.viewTransition, E);
    if (B !== "keep") {
      if (B === "return") {
        H({ ...$(), position: de(), distance: ((K = fe()) == null ? void 0 : K.radius) || yr }, { mode: E, moved: !1 });
        return;
      }
      oe(), Q(id({ ...pe(), position: $().position }, E, de())), s.backgroundDirty = !0, D(), P({ localOnly: !0, reason: Nt.VIEW });
    }
  }
  function $() {
    var K;
    const E = i.viewMoved ? i.viewDistance : ((K = fe()) == null ? void 0 : K.radius) || yr, B = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: E };
    return Vk(i.spaceMode, B, de());
  }
  function de() {
    return Ge() ? j().position : [0, 0, 0];
  }
  function Pe() {
    return r && p.camera !== null;
  }
  function Ge() {
    return Pe() && (!h || p.camera.visible);
  }
  function qe() {
    return p.painting_visible !== !1;
  }
  function le(E) {
    return E.visible && qo(E.clip, i.frame);
  }
  function j() {
    return rf(p.camera, i.frame);
  }
  function fe() {
    var B;
    const E = _();
    return ((B = E.space ?? E.content) == null ? void 0 : B.sphere) ?? null;
  }
  function me(E) {
    i.viewPosition = E.position, i.viewYaw = E.yaw_deg, i.viewPitch = E.pitch_deg, i.viewDistance = E.distance, i.viewMoved = !0, s.backgroundDirty = !0, P({ localOnly: !0, reason: Nt.VIEW });
  }
  function Ae() {
    var E;
    return ((E = fe()) == null ? void 0 : E.radius) || yr;
  }
  function Fe() {
    var Ie;
    const E = _().space, B = v(), K = i.worldSelectedId || i.selectedId, J = B.stickers.findIndex((Te) => Te.id === K), ie = J < 0 ? null : {
      sticker: B.stickers[J],
      value: dc(B, i.frame).stickers[J],
      plane: E.stickers.find((Te) => Te.id === K) ?? null,
      item: ((Ie = E.sticker) == null ? void 0 : Ie.id) === K && E.sticker.url ? { kind: E.sticker.kind, box: o.sceneBox(E.sticker.url) } : null
    }, xe = S() ? T() : Xk(fe(), ie);
    if (!xe) return;
    const ke = $();
    i.viewDistance = ke.distance, i.viewMoved = !0, H(ny(ke, xe, n.width, n.height));
  }
  function ne(E) {
    return o.pickSurface(re(), E.x, E.y, n.width, n.height);
  }
  function Ce(E, B) {
    var K;
    return od(E, B, i.viewMoved ? null : (K = fe()) == null ? void 0 : K.center, Ae());
  }
  function M() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function O(E, B) {
    const K = performance.now(), J = { x: E.x, y: E.y, time: K, key: o.contentRevision(), view: M() };
    if (!ey(z, J)) {
      const xe = ne(E);
      z = { ...J, cost: performance.now() - K, hit: xe };
    }
    const ie = $();
    me(ty(ie, Ce(ie, z.hit), B, Ae())), z.view = M(), z.wheelTime = K;
  }
  function Y(E, B, K) {
    const J = $();
    i.interaction = E === "orbit" ? { kind: "space_orbit", last: B, pivot: Ce(J, ne(B)) } : { kind: "space_pan", last: B, depth: Q0(J, Ae()) }, y(B), n.setPointerCapture(K);
  }
  function he(E) {
    return E * 0.2;
  }
  function T() {
    return { center: j().position, radius: he(Ae()) };
  }
  function q(E, B) {
    const { yaw_deg: K, pitch_deg: J } = ay(E.position, B);
    return { ...E, yaw_deg: K, pitch_deg: J };
  }
  function re() {
    return bf($(), n.width, n.height, fe());
  }
  return {
    connect(E) {
      ({
        editorViewInput: _,
        editorViewSceneState: v,
        isCameraSelected: S,
        isErpCamera: w,
        requestDraw: P,
        sceneFiles: W,
        startAnimation: V,
        syncFloatingViewButtonState: D,
        updateCursor: y
      } = E);
    },
    transitionView: H,
    applyViewTransitionEnd: te,
    cancelViewTransition: oe,
    turnViewTo: I,
    cameraPreviewShown: G,
    isSpaceView: X,
    hasSpaceContent: ue,
    isFreeSpaceView: Ne,
    viewControls: _e,
    spaceModeState: pe,
    applySpaceMode: Q,
    setSpaceMode: F,
    spaceViewState: $,
    spaceOrigin: de,
    hasCamera: Pe,
    cameraShoots: Ge,
    paintingShown: qe,
    sceneStickerShown: le,
    cutoutCamera: j,
    contentSphere: fe,
    setSpaceView: me,
    spaceScale: Ae,
    frameSpaceContent: Fe,
    zoomSpaceAt: O,
    startSpaceDrag: Y,
    currentSpaceCamera: re,
    cameraFrustumLength: he,
    cameraSphere: T,
    lookingAt: q
  };
}
function zE(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: c,
    stillCanvas: p,
    videoEl: f
  } = e;
  let h, m, _, v, S, w, P, W, V, D, y, z, H, te, oe, I, G, X, ue, Ne, _e, pe, Q, F, $, de, Pe, Ge, qe, le, j, fe, me = { revision: -1, sceneState: null }, Ae = null;
  function Fe() {
    return Ae || (Ae = M()), Ae;
  }
  function ne() {
    Ae = null;
  }
  function Ce() {
    return me.sceneState;
  }
  function M() {
    const ke = y(), Ie = m(), Te = { ...s.assets };
    for (const ce of c ? [] : s.stickers) {
      const Le = String((ce == null ? void 0 : ce.asset_id) || "");
      Le && !Te[Le] && i.has(Le) && (Te[Le] = { type: "comfy_image", filename: Le });
    }
    const Ye = c ? s.stickers.map((ce) => ue(ce) ? { ...ce, source: { kind: "file", filename: Ge(ce) } } : ce) : s.stickers;
    me.revision !== a.stateRevision && (me = { revision: a.stateRevision, sceneState: Dr({ ...s, stickers: Ye, assets: Te, painting: null }) }), c && O(me.sceneState);
    const se = dc(me.sceneState, r.frame), we = _e ? V() : null, Oe = (ce) => {
      if (c && !ce.visible) return null;
      if (_e && I(ce)) return we;
      const Le = H(ce);
      return Le ? { media: Le, revision: z(Le) } : null;
    }, b = fy(me.sceneState, r.frame, s.stickers, { media: Oe, paintLayers: Ie, evaluated: se }), L = ke && (ke === f || ke === p) ? f.dataset.panoSrc : ke, u = oe(ke) ? { media: ke, revision: z(ke), coverage: Rn(s.coverage), source: L } : null, A = te(), x = $k(F(), A, $());
    x.mode !== r.spaceMode && S(), h(x);
    const U = A ? Y(me.sceneState, se, Oe) : null, ye = X() ? { ...U, ...he(U) } : null;
    return { background: u, layers: b, space: ye, content: U };
  }
  function O(ke) {
    const Ie = new Map(s.stickers.map((Te) => [Te.id, Te.clip]));
    ke.scene.clip = { ...s.scene.clip };
    for (const Te of ke.stickers) {
      const Ye = Ie.get(Te.id);
      Ye && (Te.clip = { ...Ye });
    }
  }
  function Y(ke, Ie, Te) {
    const Ye = pe(), se = oy(Ye, Ie.scene), we = se != null && se.url ? n.sceneBox(se.url) : null, Oe = we && ld(se.kind, we), b = Pe(), L = Wk(b, ke, Ie), u = L != null && L.url ? n.sceneBox(L.url) : null, A = u ? [{ box: ld(L.kind, u), value: L.value }] : [], x = pM(ke, r.frame, s.stickers, { media: Te, evaluated: Ie }), U = ud(Uk(Ie, Oe, x, A));
    return {
      evaluated: Ie,
      sceneUrls: Ye ? Ye.urls.filter(Boolean) : [],
      scene: se,
      stickerUrls: Kk(b, ke),
      sticker: L,
      stickers: x,
      sphere: U
    };
  }
  function he(ke) {
    var Te;
    const Ie = ((Te = ke.sphere) == null ? void 0 : Te.radius) || yr;
    return {
      gizmo: q() ? B() : T(ke.evaluated),
      grid: r.showGrid && !r.fullscreen ? aM(Ie) : null,
      lines: v() ? E(Ie) : []
    };
  }
  function T(ke) {
    const Ie = Q(), Te = ke.stickers.find((Ye) => Ye.id === (Ie == null ? void 0 : Ie.id));
    return !fe(Ie) || !(Te != null && Te.active) ? null : { mode: r.gizmoMode, transform: ad(Te) };
  }
  function q() {
    return v() && r.selectedId === mc;
  }
  let re = { revision: -1, span: -1, segments: [] };
  function E(ke) {
    const Ie = le();
    (re.revision !== a.stateRevision || re.span !== Ie) && (re = { revision: a.stateRevision, span: Ie, segments: lM(cM(s, Ie)) });
    const { segments: Te } = re, Ye = Te.length ? [{ segments: Te, color: QI }] : [];
    if (!G()) return Ye;
    const se = q() ? vb : ZI;
    return [...Ye, { segments: sy(P(), _(ke)), color: se }];
  }
  function B() {
    return !G() || !q() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: ad({ ...P(), scale: 1 }) };
  }
  function K() {
    const { background: ke, layers: Ie, space: Te } = Fe(), Ye = t.width, se = t.height, we = W({ x: 0, y: 0, w: Ye, h: se });
    let Oe = !1;
    return !ke && !Ie.length && !Te ? (n.clear(460551), Oe = n.ready) : (n.clear(), Oe = !!n.render({
      rect: we,
      camera: Te ? bf(de(), Ye, se, Te.sphere) : w(),
      background: ke,
      layers: Ie,
      space: Te
    })), qe(), (r.worldSelectedId || q() || Ne()) && j(), Oe;
  }
  function J(ke) {
    const { content: Ie } = Fe();
    return !Ie || !ke.position ? Wa(ke) : ry(Wa(ke), ke.position, D(), Ie.sphere);
  }
  function ie(ke, Ie, Te, Ye = null) {
    const { background: se, layers: we, content: Oe } = Fe();
    if (!se && !we.length && !Oe) return null;
    const b = Oe && Ie.position ? Oe : null;
    return n.render({ rect: ke, camera: J(Ie), background: se, layers: we, space: b, owner: Te, clearColor: Ye });
  }
  function xe(ke) {
    return n.clear(460551), !!n.renderUnwrap({ rect: W(ke), ...Fe() });
  }
  return {
    connect(ke) {
      ({
        applySpaceMode: h,
        buildEditorViewPaintLayers: m,
        cameraFrustumLength: _,
        cameraShoots: v,
        cancelViewTransition: S,
        currentViewCamera: w,
        cutoutCamera: P,
        deviceRect: W,
        followPortSticker: V,
        frameViewDistance: D,
        getConnectedErpImage: y,
        getMediaRevisionToken: z,
        getStickerImage: H,
        hasSpaceContent: te,
        isDecodedImageReady: oe,
        isExternalSticker: I,
        isFreeSpaceView: G,
        isSpaceView: X,
        isUploadingSticker: ue,
        isWorldMenuShown: Ne,
        portVideo: _e,
        sceneFiles: pe,
        selectedWorldSticker: Q,
        spaceModeState: F,
        spaceOrigin: $,
        spaceViewState: de,
        stickerFiles: Pe,
        stickerImageKey: Ge,
        syncFloatingViewButtonState: qe,
        timelineSpanFrames: le,
        updateSelectionMenu: j,
        worldStickerEditable: fe
      } = ke);
    },
    editorViewInput: Fe,
    endEditorViewFrame: ne,
    editorViewSceneState: Ce,
    isCameraSelected: q,
    renderEditorView: K,
    shotViewCamera: J,
    drawEditorViewShot: ie,
    renderEditorViewUnwrap: xe
  };
}
function kb(e, t = !1) {
  const r = Ee(oo(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function jE(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    runtime: o,
    shotEditor: a,
    studio: s,
    uiState: c
  } = e;
  let p, f, h, m, _ = null;
  function v(D) {
    if (!n || !D) return !1;
    const y = n.closest(".pano-camera-preview");
    if (!y) return !1;
    const z = Math.round(Number(y.clientWidth || n.clientWidth || 0)), H = Math.round(Number(y.clientHeight || n.clientHeight || 0));
    return Math.abs(z - Number(D.width || 0)) <= 1 && Math.abs(H - Number(D.height || 0)) <= 1;
  }
  function S(D, y) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!h(), s && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !p()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, _ = null;
      return;
    }
    const z = h();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !z || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = z ? "Preview unavailable" : "Add Frame to preview", _ = null;
      return;
    }
    const H = kb(z, !!i.outputPreviewExpanded);
    c.cameraPreview.width = H.width, c.cameraPreview.height = H.height;
    const te = window.devicePixelRatio || 1, oe = Math.max(1, H.width * te), I = Math.max(1, H.height * te), G = Math.min(1, t.width / oe, t.height / I), X = { width: Math.max(1, Math.floor(oe * G)), height: Math.max(1, Math.floor(I * G)) }, ue = [...y].some((pe) => pe !== Nt.VIEW && pe !== Nt.OVERLAY), Ne = !_ || _.width !== X.width || _.height !== X.height || ue;
    if (D && Ne) {
      const pe = f({ x: 0, y: t.height - X.height, w: X.width, h: X.height }, z, "camera_preview");
      _ = pe ? X : null, pe && V(pe);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const _e = v(H);
    c.cameraPreview.ready = !0, c.cameraPreview.label = _e ? "" : "Loading preview", c.cameraPreview.settled = _e && o.pendingStableLayoutFrames <= 0 && o.hasPresentedFrame;
  }
  function w() {
    _ = null;
  }
  let P = 0, W = !1;
  function V(D) {
    const y = ++P;
    createImageBitmap(D.canvas, D.x, D.y, D.width, D.height).then((z) => {
      var H;
      if (y !== P || !o.running) {
        z.close();
        return;
      }
      (H = r.getContext("bitmaprenderer")) == null || H.transferFromImageBitmap(z);
    }).catch((z) => {
      W || (W = !0, console.error("[PanoramaStickers] camera preview frame failed", z));
    });
  }
  return {
    connect(D) {
      ({
        cameraPreviewShown: p,
        drawEditorViewShot: f,
        getActiveCutoutShot: h,
        getConnectedErpImage: m
      } = D);
    },
    drawCutoutOutputPreview: S,
    forgetCameraPreviewFrame: w
  };
}
function HE(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: c,
    studio: p,
    type: f
  } = e;
  let h, m, _, v, S, w, P, W, V, D, y, z, H, te, oe, I, G, X, ue, Ne, _e, pe, Q, F, $, de, Pe, Ge, qe, le, j, fe, me, Ae, Fe, ne, Ce, M;
  function O(se) {
    const we = r.width, Oe = r.height, b = te();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, we, Oe), fe(), se && (s.backgroundDirty = !Fe(b)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let u = 0; u <= 16; u += 1) {
        const A = b.x + b.w * u / 16;
        n.beginPath(), n.moveTo(A, b.y), n.lineTo(A, b.y + b.h), n.stroke();
      }
      for (let u = 0; u <= 8; u += 1) {
        const A = b.y + b.h * u / 8;
        n.beginPath(), n.moveTo(b.x, A), n.lineTo(b.x + b.w, A), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(b.x, b.y + b.h / 2), n.lineTo(b.x + b.w, b.y + b.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const L = b.y + b.h * 0.57;
      n.fillText("Left", b.x + b.w * 0.25, L), n.fillText("Front", b.x + b.w * 0.5, L), n.fillText("Right", b.x + b.w * 0.75, L), n.fillText("Back", b.x + 38, L), n.fillText("Back", b.x + b.w - 38, L);
    }
  }
  function Y(se, we, Oe = 1) {
    let b = !1;
    n.strokeStyle = we, n.lineWidth = Oe, n.beginPath();
    for (const L of se) {
      const u = Ge(L);
      if (!u) {
        b = !1;
        continue;
      }
      b ? n.lineTo(u.x, u.y) : (n.moveTo(u.x, u.y), b = !0);
    }
    n.stroke();
  }
  function he(se) {
    const we = r.width, Oe = r.height;
    if (n.clearRect(0, 0, we, Oe), fe(), se && (s.backgroundDirty = !Ae()), i.showGrid && !i.fullscreen && S().space)
      T();
    else if (i.showGrid && !i.fullscreen) {
      for (let L = -180; L <= 180; L += 15) {
        const u = [];
        for (let A = -89; A <= 89; A += 4) u.push(Vn(L, A));
        Y(u, "#3f3f46", L % 90 === 0 ? 1.3 : 1);
      }
      for (let L = -75; L <= 75; L += 15) {
        const u = [];
        for (let A = -180; A <= 180; A += 4) u.push(Vn(A, L));
        Y(u, L === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", L === 0 ? 1.5 : 1);
      }
      const b = [
        { name: "Left", dir: Vn(-90, 0) },
        { name: "Front", dir: Vn(0, 0) },
        { name: "Right", dir: Vn(90, 0) },
        { name: "Back", dir: Vn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", b.forEach((L) => {
        const u = Ge(L.dir);
        u && n.fillText(L.name, u.x, u.y + 24);
      });
    }
  }
  function T() {
    const se = bf(M(), r.width, r.height, m()), we = is(se, [0, 0, 0], r.width, r.height);
    we && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", we.x, we.y - 12));
  }
  function q(se, we) {
    const Oe = Pe(se), b = Vn(Number(Oe.yaw_deg || 0), Number(Oe.pitch_deg || 0)), L = i.mode === "unwrap" ? qe(b) : null, u = L ? L.x : null, A = i.mode === "pano" ? 28 : 20, x = [
      ne(se, 0, A, u),
      ne(se, 1, A, u),
      ne(se, 2, A, u),
      ne(se, 3, A, u)
    ];
    Af(n, x, { selected: we });
  }
  function re(se, we = []) {
    if (!(!se || !Array.isArray(we) || we.length < 4)) {
      se.beginPath(), se.moveTo(we[0].x, we[0].y);
      for (let Oe = 1; Oe < 4; Oe += 1) se.lineTo(we[Oe].x, we[Oe].y);
      se.closePath();
    }
  }
  function E(se, we, Oe) {
    const b = Array.isArray(se == null ? void 0 : se.corners) ? se.corners : [];
    if (b.length < 4) return;
    const L = Ee(Number((se == null ? void 0 : se.visibilityAlpha) ?? 1), 0, 1);
    if (L <= 0.01) return;
    const u = n.globalAlpha;
    n.globalAlpha = u * L;
    const A = Oe ? "rgba(255, 116, 116, 0.96)" : we ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", x = Oe ? "rgba(255, 89, 89, 0.08)" : we ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", U = we ? 3.2 : 2.6;
    re(n, b), n.fillStyle = x, n.fill(), n.strokeStyle = A, n.lineWidth = U, n.stroke(), n.save(), n.strokeStyle = A, n.lineWidth = we ? 3.2 : 2.6, n.lineCap = "round";
    const ye = Array.isArray(se == null ? void 0 : se.edgeMidpoints) && se.edgeMidpoints.length >= 4 ? se.edgeMidpoints : [
      { edge: "top", x: (b[0].x + b[1].x) * 0.5, y: (b[0].y + b[1].y) * 0.5 },
      { edge: "right", x: (b[1].x + b[2].x) * 0.5, y: (b[1].y + b[2].y) * 0.5 },
      { edge: "bottom", x: (b[2].x + b[3].x) * 0.5, y: (b[2].y + b[3].y) * 0.5 },
      { edge: "left", x: (b[3].x + b[0].x) * 0.5, y: (b[3].y + b[0].y) * 0.5 }
    ], ce = { top: "bottom", right: "left", bottom: "top", left: "right" }, Le = we ? 12 : 9;
    ye.forEach((je) => {
      const ge = ye.find((Ke) => (Ke == null ? void 0 : Ke.edge) === ce[je == null ? void 0 : je.edge]) || {
        x: (b[0].x + b[1].x + b[2].x + b[3].x) * 0.25,
        y: (b[0].y + b[1].y + b[2].y + b[3].y) * 0.25
      }, ve = ge.x - je.x, Ve = ge.y - je.y, Be = Math.hypot(ve, Ve) || 1;
      n.beginPath(), n.moveTo(je.x, je.y), n.lineTo(je.x + ve / Be * Le, je.y + Ve / Be * Le), n.stroke();
    }), n.restore(), n.globalAlpha = u;
  }
  function B(se, we, Oe, b) {
    const L = Ee(Number((we == null ? void 0 : we.visibilityAlpha) ?? 1), 0, 1);
    if (L <= 0.01) return;
    if (Q(se)) {
      E(we, Oe, b);
      return;
    }
    if (F(se)) {
      const A = n.globalAlpha;
      n.globalAlpha = A * H(se) * L, i.mode === "frame" ? (n.strokeStyle = Oe ? "rgba(250, 250, 250, 0.9)" : b ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = Oe ? 2 : 1, re(n, we.corners), n.stroke()) : q(se, Oe), n.globalAlpha = A;
      return;
    }
    const u = n.globalAlpha;
    n.globalAlpha = u * L, n.fillStyle = Oe ? "rgba(0, 112, 243, 0.24)" : b ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", re(n, we.corners), n.fill(), n.strokeStyle = Oe ? "rgba(255, 255, 255, 1)" : b ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = Oe ? 2.8 : 1.9, re(n, we.corners), n.stroke(), n.globalAlpha = u;
  }
  function K(se, we, Oe) {
    if (F(se)) {
      Jy(n, we, { accent: Oe });
      return;
    }
    const b = !(Q(se) && I());
    n.fillStyle = Oe, b && we.corners.forEach((L) => {
      n.beginPath(), n.arc(L.x, L.y, 6.5, 0, Math.PI * 2), n.fill();
    }), b && Q(se) && (n.strokeStyle = Oe, n.lineCap = "round", n.lineWidth = 4, we.edgeMidpoints.forEach((L) => {
      var Le, je, C, ge;
      const u = (((Le = L.b) == null ? void 0 : Le.x) ?? L.x) - (((je = L.a) == null ? void 0 : je.x) ?? L.x), A = (((C = L.b) == null ? void 0 : C.y) ?? L.y) - (((ge = L.a) == null ? void 0 : ge.y) ?? L.y), x = Math.hypot(u, A) || 1, U = u / x, ye = A / x, ce = 10;
      n.beginPath(), n.moveTo(L.x - U * ce, L.y - ye * ce), n.lineTo(L.x + U * ce, L.y + ye * ce), n.stroke();
    }), n.lineCap = "butt"), $(se) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(we.rotateStemBase.x, we.rotateStemBase.y), n.lineTo(we.rotateHandle.x, we.rotateHandle.y), n.stroke(), n.fillStyle = Oe, n.beginPath(), n.arc(we.rotateHandle.x, we.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function J() {
    var u;
    const se = i.mode === "frame" ? [] : z(), we = se.length > 1, Oe = c ? P() : D(), b = Oe.map((A) => `${String((A == null ? void 0 : A.id) || "")}:${Q(A) ? "frame" : Number((A == null ? void 0 : A.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Oe || i._sortedItemsCache.orderKey !== b) && (i._sortedItemsCache = {
      src: Oe,
      orderKey: b,
      sorted: [...Oe]
    });
    const L = i._sortedItemsCache.sorted;
    for (const A of L) {
      const x = i.mode !== "frame" && !we && Ne(A);
      if (i.mode === "frame" && !x) continue;
      const U = F(A), ye = Q(A), ce = ue(A);
      if (!U && !ye || pe(A) && !Ce(A)) continue;
      const Le = de(A);
      if (f !== "stickers" && !Le.visible)
        continue;
      const je = Ee(Number((Le == null ? void 0 : Le.visibilityAlpha) ?? 1), 0, 1);
      if (je <= 0.01) continue;
      const C = ye && c && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= C, B(A, Le, x, ce), x && Le.visible) {
        const ge = ce ? "#ff4d4f" : U && G(A) ? "#f59e0b" : "#0070f3", ve = n.globalAlpha;
        n.globalAlpha = ve * je, K(A, Le, ge), n.globalAlpha = ve;
      }
      n.restore();
    }
    if (c && i.mode === "pano" && !w() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const A = i.cutoutPanoFrameVisual, x = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= x, E(A.geom, A.selected, A.locked), A.selected && K(
        A.item,
        A.geom,
        A.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (we) {
      const A = y(se);
      if (A != null && A.visible) {
        const x = h(se) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(A.corners[0].x, A.corners[0].y);
        for (let U = 1; U < A.corners.length; U += 1) n.lineTo(A.corners[U].x, A.corners[U].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = x, A.corners.forEach((U) => {
          n.beginPath(), n.arc(U.x, U.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      se.forEach((A) => {
        if (!$(A) && !_e(A)) return;
        const x = de(A);
        if (!(x != null && x.visible)) return;
        const U = ue(A) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(x.corners[0].x, x.corners[0].y);
        for (let ye = 1; ye < x.corners.length; ye += 1) n.lineTo(x.corners[ye].x, x.corners[ye].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = U, x.corners.forEach((ye) => {
          n.beginPath(), n.arc(ye.x, ye.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((u = i.interaction) == null ? void 0 : u.kind) === "marquee_select") {
      const A = me(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(A.x0, A.y0, A.x1 - A.x0, A.y1 - A.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function ie(se) {
    const we = w(), Oe = W(we);
    if (!we || !Oe)
      return n.clearRect(0, 0, r.width, r.height), se && o.clear(657930), !1;
    const b = { x: Oe.x, y: Oe.y, w: Oe.w, h: Oe.h }, { rect: L, shot: u } = uy(we, Oe, { width: r.width, height: r.height }), A = xe(b);
    if (n.clearRect(0, 0, r.width, r.height), se) {
      o.clear(657930);
      const x = _(L), U = !!v(x, u, void 0, 657930);
      U || o.clear(1118481, x), s.backgroundDirty = !U;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(b.x, b.y, b.w, b.h, A), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = vb, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(b.x + 1, b.y + 1, b.w - 2, b.h - 2, Math.max(0, A - 1)), n.stroke(), n.restore(), !0;
  }
  function xe(se) {
    const we = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * we, Number((se == null ? void 0 : se.w) || 0) * 0.5, Number((se == null ? void 0 : se.h) || 0) * 0.5);
  }
  function ke() {
    var U, ye;
    if (((U = i.interaction) == null ? void 0 : U.kind) !== "paint_lasso_fill") return;
    const se = i.interaction.stroke, we = (ye = se == null ? void 0 : se.geometry) == null ? void 0 : ye.points;
    let Oe;
    if (i.mode === "frame") {
      const ce = w(), Le = V(ce);
      Oe = le(we, ce, Le);
    } else
      Oe = j(we);
    if (!Array.isArray(Oe) || Oe.length < 3) return;
    const b = String((se == null ? void 0 : se.layerKind) || "") === "mask", L = (se == null ? void 0 : se.color) || { r: 1, g: 0.25, b: 0.25 }, u = Math.round(Number(L.r || 0) * 255), A = Math.round(Number(L.g || 0) * 255), x = Math.round(Number(L.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(Oe[0].x || 0), Number(Oe[0].y || 0));
    for (let ce = 1; ce < Oe.length; ce++) n.lineTo(Number(Oe[ce].x || 0), Number(Oe[ce].y || 0));
    n.closePath(), b ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${u},${A},${x},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function Ie() {
    const se = i.frameRollOverlayVisual, we = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(se != null && se.shot) || we <= 1e-4) return;
    const Oe = V(se.shot);
    if (!Oe) return;
    const b = { x: Oe.x + Oe.w * 0.5, y: Oe.y + Oe.h * 0.5 }, L = Number(se.shot.roll_deg ?? se.shot.rot_deg ?? 0) * Rr, u = Math.hypot(Oe.w, Oe.h) * 0.55, A = Math.cos(L) * u, x = Math.sin(L) * u;
    n.save(), n.globalAlpha *= we, n.beginPath(), n.rect(Oe.x, Oe.y, Oe.w, Oe.h), n.clip(), n.translate(b.x, b.y), n.rotate(L);
    const U = Math.max(12, Math.min(Oe.w, Oe.h) / 6);
    n.beginPath();
    for (let ye = -u; ye <= u; ye += U)
      n.moveTo(ye, -u), n.lineTo(ye, u);
    for (let ye = -u; ye <= u; ye += U)
      n.moveTo(-u, ye), n.lineTo(u, ye);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(b.x - A, b.y - x), n.lineTo(b.x + A, b.y + x), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Te() {
    return !c || !w() || t && X() || p && !oe() ? 0 : nE;
  }
  function Ye() {
    const se = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (se <= 1e-4 || !c || i.mode !== "pano") return;
    const we = w(), Oe = we ? de(we) : null, b = Array.isArray(Oe == null ? void 0 : Oe.corners) && Oe.corners.length >= 4 ? Oe.corners.map((A) => ({ x: Number(A.x || 0), y: Number(A.y || 0) })) : null;
    Oe != null && Oe.visible && b && (i.cutoutPanoDimCorners = b), we && (Oe != null && Oe.visible) && b && (i.cutoutPanoFrameVisual = {
      item: we,
      geom: Oe,
      selected: Ne(we),
      locked: ue(we)
    });
    const L = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, u = Oe != null && Oe.visible ? b : L ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${se})`, n.beginPath(), n.rect(0, 0, r.width, r.height), u.length >= 4) {
      n.moveTo(u[0].x, u[0].y);
      for (let A = 1; A < 4; A += 1) n.lineTo(u[A].x, u[A].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(se) {
      ({
        areAllSelectedItemsLocked: h,
        contentSphere: m,
        deviceRect: _,
        drawEditorViewShot: v,
        editorViewInput: S,
        getActiveCutoutShot: w,
        getCutoutSelectableItemsForDisplay: P,
        getFrameViewLayout: W,
        getFrameViewRect: V,
        getList: D,
        getMultiSelectionGeom: y,
        getSelectedItems: z,
        getStickerDisplayAlpha: H,
        getUnwrapRect: te,
        isCameraSelected: oe,
        isErpCamera: I,
        isExternalSticker: G,
        isFreeSpaceView: X,
        isItemLocked: ue,
        isItemSelected: Ne,
        isRasterObjectItem: _e,
        isSceneSticker: pe,
        isShotItem: Q,
        isStickerItem: F,
        isStrokeGroupItem: $,
        objectGeom: de,
        poseOf: Pe,
        projectDir: Ge,
        projectDirUnwrap: qe,
        projectErpLassoPointsToFrameRect: le,
        projectLassoPointsToCurrentView: j,
        rebuildPaintEngineIfNeeded: fe,
        rectFromPoints: me,
        renderEditorView: Ae,
        renderEditorViewUnwrap: Fe,
        sampleStickerEdge: ne,
        sceneStickerShown: Ce,
        spaceViewState: M
      } = se);
    },
    drawGridUnwrap: O,
    drawGridPano: he,
    drawObjects: J,
    drawFrameViewBackground: ie,
    drawLassoOutlineOverlay: ke,
    drawFrameRollOverlay: Ie,
    getCutoutPanoDimTarget: Te,
    drawCutoutPanoPassepartout: Ye
  };
}
const ng = /* @__PURE__ */ new Map(), br = xy({
  app: Bn,
  api: Qt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Pd,
    markImageFailed: bb,
    markImageLoading: gb,
    markImageReady: yb
  }
});
function Du(e) {
  if (!mn(e, "background") || !mn(e, "external-sticker")) return null;
  const t = br.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? ea(t[0]) : null;
}
function GE(e) {
  if (!mn(e, "background")) return null;
  const [t] = br.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = br.uiValue(e, "pano_timeline_frames") || [], [n] = br.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: Rn(n) };
}
const WE = br.assetSource, KE = br.source, BE = br.uiImage, UE = br.invalidateUiImage, rg = br.loadPreferredExactLinkedImage;
async function YE(e, t, r = {}) {
  var ch, uh;
  await eb(e, { tolerateOperationFailure: !0 }), br.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = mE(e, t);
  await If();
  const s = Xs(e, "output_preset"), c = Xs(e, "coverage"), p = Xs(e, "bg_color"), f = Xs(e, WI), h = () => {
    const l = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return rg(
      e,
      l,
      () => We(),
      `background:size:${l.join("|")}`
    );
  }, m = () => {
    const l = h();
    return bE(l);
  }, _ = (l = 2048) => {
    const d = s == null ? void 0 : s.value;
    return yE(d) ? m() || Math.max(1, Math.round(Number(l || 2048))) : gE(d, l);
  }, v = e.__panoSceneStateV2 === !0, S = t === "stickers" && v, w = t === "cutout" && v, P = S && e.__panoStudio === !0, W = w || P, V = t === "cutout" || P, D = w ? GE(e) : null, y = (v ? K0 : W0)(String((f == null ? void 0 : f.value) || ""), {
    outputPreset: _(2048),
    backgroundColor: String((p == null ? void 0 : p.value) || "#00ff00"),
    coverage: D ? D.coverage : Rn(c == null ? void 0 : c.value),
    sharedUiSettings: vE(),
    active: Y0(e),
    fps: v ? Du(e) : null,
    scene: (D == null ? void 0 : D.state) ?? null,
    camera: w
  });
  e.__panoLiveStateOverride = y, e.__panoLiveStateVersion = 0;
  let z = null;
  W ? (z = y.camera && (!P || y.camera.visible !== !1) ? lm(y.camera, 0) : null, y.shots = z ? [{ ...z, position: [...z.position] }] : [], y.active.selected_shot_id = z && w ? mc : null) : t === "cutout" && (y.shots = Array.isArray(y.shots) ? y.shots.slice(0, 1) : [], y.shots.length || (y.active.selected_shot_id = null));
  const H = t === "cutout" ? (() => {
    var g;
    const l = Array.isArray(y.shots) ? y.shots : [], d = String(((g = y == null ? void 0 : y.active) == null ? void 0 : g.selected_shot_id) || "");
    return l.find((k) => String((k == null ? void 0 : k.id) || "") === d) || l[0] || null;
  })() : null, te = H ? kb(H, !1) : { width: 220, height: 132 }, oe = mb(P ? "studio" : t), I = /* @__PURE__ */ Zo({
    stageStatus: hr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (oe.viewButtons || []).map((l) => ({ ...l, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (ch = oe.spaceButtons) != null && ch.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: oe.spaceButtons, frame: oe.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (oe.toolButtons || []).map((l) => ({
      ...l,
      disabled: !1,
      ...l.key === "add-world" ? { visible: S } : {},
      ...w && aE.has(l.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(oe.floatingButtons || []).map((l) => ({ ...l, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Xe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: Xe.aspect,
      rotateIcon: Xe.rotate_90,
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
      icon: Xe.fullscreen,
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
      width: te.width,
      height: te.height,
      label: H ? "Loading preview" : "Add Frame to preview"
    }
  }), G = { frame: /* @__PURE__ */ bl(0), playing: /* @__PURE__ */ bl(!1) }, X = document.createElement("div");
  document.body.appendChild(X);
  const ue = ({ intent: l, file: d } = {}) => {
    if (mr(d)) {
      if (l === "add") {
        gp(d);
        return;
      }
      if (l === "add-world") {
        j1(d);
        return;
      }
      l === "replace" && W1(d);
    }
  }, Ne = ({ intent: l } = {}) => {
  }, _e = Kd(HI, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: oe,
    paintSwatches: ml.map((l) => ({
      id: l.id,
      label: l.label,
      cssColor: Pr(l.color, 1)
    })),
    uiState: I,
    playhead: G,
    onClose: () => {
      So();
    },
    onTimeline: (l) => V1(l),
    onImageFileSelected: ue,
    onImageFileCancelled: Ne
  });
  let pe = null;
  try {
    pe = _e.mount(X);
  } catch (l) {
    try {
      _e.unmount();
    } catch {
    }
    throw X.remove(), l;
  }
  const Q = X.querySelector(".pano-modal-overlay"), F = X.querySelector(".pano-modal"), $ = F == null ? void 0 : F.querySelector("[data-stage-overlay]"), de = F == null ? void 0 : F.querySelector("[data-stage-background]"), Pe = F == null ? void 0 : F.querySelector(".pano-stage-wrap"), Ge = ((uh = pe == null ? void 0 : pe.getPaintOverlayRefs) == null ? void 0 : uh.call(pe)) || {}, qe = Ge.cursor || null, le = Ge.sizePreview || null, j = Ge.sizeSample || null;
  if (!Q || !F || !$ || !de || !Pe || !qe || !le || !j)
    throw _e.unmount(), X.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const fe = $.getContext("2d"), me = F.querySelector("[data-side]"), Ae = F.querySelector("[data-video-element]"), Fe = F.querySelector("[data-port-video-element]");
  iu($, "editor.stage-overlay"), iu(de, "editor.stage-background"), Yh(Ae, "editor.video"), Yh(Fe, "editor.port-video");
  const ne = F.querySelector(".pano-floating-right"), Ce = F.querySelector(".pano-floating-top"), M = F.querySelector("[data-tool-rail]"), O = F.querySelector("[data-frame-rail]"), Y = F.querySelector("[data-frame-roll-knob]"), he = F.querySelector("[data-paint-dock]"), T = F.querySelector(".pano-video-transport"), q = F.querySelector("[data-selection-menu]");
  let re = !1;
  const E = F.querySelector("[data-tooltip]"), B = F.querySelector("[data-camera-preview-host]"), K = F.querySelector("[data-camera-preview-canvas]");
  iu(K, "editor.camera-preview");
  const J = F.querySelector("[data-paint-color-row]"), ie = F.querySelector("[data-paint-color-pop]"), xe = F.querySelector("[data-paint-color-sv]"), ke = F.querySelector("[data-paint-color-sv-cursor]"), Ie = F.querySelector("[data-paint-hue-strip]"), Te = F.querySelector("[data-paint-hue-handle]");
  let Ye = 0, se = 0;
  Pe == null || Pe.removeAttribute("data-stage-ready"), Pe == null || Pe.setAttribute("data-stage-loading-kind", "boot"), $.style.opacity = "1", de.style.opacity = "0", i && (me == null || me.remove(), F.classList.add("pano-modal-readonly"));
  const we = () => {
    if (!u.customPaintSessionStart) return;
    if (gl(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (pE(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const l = [
      Wn(u.customPaintColor),
      ...u.customPaintHistory.filter((d) => !gl(d, u.customPaintColor))
    ];
    u.customPaintHistory = l.slice(0, 8), u.customPaintSessionStart = null;
  }, Oe = (l = !1) => {
    !ie || ie.hidden || (l ? we() : u.customPaintSessionStart = null, ie.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, b = () => {
    ie && (ie.hidden && (u.customPaintSessionStart = Wn(u.customPaintColor)), ie.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  F.addEventListener("pointerdown", () => Ve.wake(), !0), F.addEventListener("pointerdown", (l) => {
    var d;
    l.target.closest("[data-frame-roll-knob]") || Oi(), !l.target.closest(".pano-picker") && (l.target.closest("[data-paint-color-row]") || (F.querySelectorAll(".pano-picker-pop").forEach((g) => {
      g.hidden = !0;
    }), Oe(!0), V && u.cutoutAspectOpen && !l.target.closest(".pano-aspect-popover") && !l.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, ct(), We()), (d = I.frameRail) != null && d.aspectOpen && !l.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
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
    viewDistance: yr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Rn(y.coverage),
    historyController: IE(y),
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
    showGrid: SE(e == null ? void 0 : e.id, !0),
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
    paintEngine: Xd(),
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
  }, A = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let x = null;
  t === "stickers" && (u.selectedId = null, y.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const U = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), je = xn({ label: "editor.still" });
  je.__panoFrameIdx = 0;
  const C = xn({ label: "editor.port-still" });
  C.__panoFrameIdx = 0;
  let ge = () => {
  };
  const ve = {
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
  }, Ve = p2({
    requestAnimationFrame: (l) => requestAnimationFrame(l),
    cancelAnimationFrame: (l) => cancelAnimationFrame(l),
    draw: (l, d) => I1(l, d),
    animating: () => A1()
  }), Be = d2({
    requestFrame: (l) => Ve.requestFrame(l),
    cancelFrame: (l) => Ve.cancelFrame(l),
    tasks: {
      seek: () => Qn.seek(A.scrubFrame),
      timeline: () => xr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        er(), We({ localOnly: !0, reason: Nt.STATE });
      },
      sidePanel: () => it()
    }
  }), Ke = hM({
    canvas: de,
    onReady: () => {
      Ms(), We({ reason: Nt.CONTEXT });
    },
    onFailed: () => We(),
    onUpdate: () => We({ localOnly: !0, reason: Nt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      Hb(), Ms(), We({ reason: Nt.CONTEXT });
    }
  });
  let Je = null;
  const nt = Number.parseFloat(
    getComputedStyle(F).getPropertyValue("--pano-float-radius")
  ) || 10, st = (l) => {
    const d = String(l || "default");
    $.style.cursor !== d && ($.style.cursor = d);
  }, bt = {
    timer: 0,
    target: null
  }, Ot = {
    active: !1,
    depth: 0
  }, It = Jd({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (l) => {
      u.viewYaw = Kt(Number(l.yaw || 0)), u.viewPitch = Ee(Number(l.pitch || 0), -89.9, 89.9), u.viewFov = Ee(Number(l.fov || u.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const l = $.getBoundingClientRect();
      return {
        w: Math.max(1, Number(l.width || $.clientWidth || 0)),
        h: Math.max(1, Number(l.height || $.clientHeight || 0))
      };
    },
    getInvert: () => {
      var l, d;
      return {
        x: (l = y.ui_settings) != null && l.invert_view_x ? -1 : 1,
        y: (d = y.ui_settings) != null && d.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => xc(),
    onInteraction: () => Ve.requestDraw(Nt.VIEW)
  }), {
    applyInitialCutoutFocus: qn,
    applyRasterObjectOffset: cn,
    applyRasterObjectTransform: on,
    applySpaceMode: si,
    applyStrokeGroupOffset: ki,
    applyStrokeGroupTransform: ra,
    applyViewTransitionEnd: In,
    areAllSelectedItemsLocked: ur,
    bringSelectedToFront: ps,
    buildCanonicalCutoutStickerState: ia,
    buildCanonicalSelectedStickerState: Mi,
    buildRasterObjectEditCanvas: Mb,
    cameraFrustumLength: Nb,
    cameraPreviewShown: Pb,
    cameraShoots: hs,
    cameraSphere: Ab,
    canRestoreSelectedToInitial: Cb,
    cancelViewTransition: bc,
    clearSelection: oa,
    clearWorldSelection: Vf,
    collectExternalStickersForClearAll: Ib,
    computeStickerVFov: ms,
    contentSphere: vc,
    createRasterFrozenObjectsFromCanvas: Eb,
    createRasterSurface: $f,
    currentSpaceCamera: aa,
    cutoutCamera: _c,
    drawCutoutOutputPreview: Ob,
    drawCutoutPanoPassepartout: Fb,
    drawFrameRollOverlay: Tb,
    drawFrameViewBackground: Db,
    drawGridPano: Lb,
    drawGridUnwrap: Rb,
    drawLassoOutlineOverlay: Vb,
    drawObjects: $b,
    editorViewInput: gs,
    endEditorViewFrame: zb,
    ensureGroupFrame: so,
    ensurePaintingGroupEntry: zf,
    erpPointToWorldDir: jb,
    forgetCameraPreviewFrame: Hb,
    frameLocalPointToWorldDir: jf,
    frameSpaceContent: Gb,
    getActivePaintTargetDescriptor: Jn,
    getCutoutInspectorItems: Hf,
    getCutoutPanoDimTarget: Wb,
    getCutoutSelectableItems: Kb,
    getCutoutSelectableItemsForHit: Sc,
    getDisplayListObjects: Bb,
    getHistoryCapabilities: Gf,
    getList: lo,
    getMultiSelectionGeom: ys,
    getNextStickerZIndex: bs,
    getOrderedDisplayListObjects: Wf,
    getPaintingGroupList: co,
    getPortMedia: Ub,
    getRasterObjectCenterUv: Yb,
    getRasterObjectItem: Kf,
    getRasterObjectList: zr,
    getSelectableRasterObjectItems: Xb,
    getSelectableStrokeGroupItems: qb,
    getSelected: Mn,
    getSelectedItems: Ni,
    getSelectedKind: vs,
    getSelectionItemIcon: Jb,
    getSelectionItemLabelData: wc,
    getSharedLivePaintSurface: Zb,
    getStageImageStatus: Qb,
    getStrokeGroupCenterUv: e1,
    getStrokeGroupItem: Bf,
    getStrokeGroupStrokes: uo,
    getUnwrapRect: xc,
    hasCamera: fo,
    hasSpaceContent: kc,
    hitRasterObjectAt: Uf,
    invalidateLivePaintPreviewCaches: po,
    isCameraSelected: ho,
    isErpCamera: sa,
    isExternalSticker: _r,
    isFreeSpaceView: li,
    isItemLocked: dr,
    isPaintCompositeInteraction: t1,
    isRasterObjectItem: jr,
    isSceneSticker: ci,
    isShotItem: ui,
    isSpaceView: la,
    isStickerHidden: _s,
    isStickerItem: fn,
    isStrokeGroupItem: Zn,
    isUploadingSticker: n1,
    lookingAt: r1,
    makeRasterObjectSelectionId: Yf,
    makeStrokeGroupSelectionId: Xf,
    markObjectVisualsDirty: dn,
    markPaintCompositeVisualsDirty: mo,
    markPaintStrokeVisualsDirty: Sr,
    needsPaintingLayerSync: i1,
    objectGeom: pn,
    paintingShown: o1,
    parseRasterObjectSelectionId: Pi,
    playback: Qn,
    playbackFps: a1,
    poseOf: Nn,
    processFreehandPoints: qf,
    pushHistory: vt,
    queueVideoTransportLayout: s1,
    rasterizeStrokeToSurface: l1,
    rebuildPaintEngineIfNeeded: Jf,
    reconcileExternalStickerFromInputs: Zf,
    refreshModalVideoSource: go,
    refreshPaintEngineRevisionCache: c1,
    releaseHiddenSelection: Mc,
    restoreHistory: Nc,
    restoreSelectedToInitialPose: u1,
    screenPos: di,
    screenPosCss: Ss,
    screenPosToErpPoint: wr,
    screenPosToFrameAsErpPoint: fr,
    screenToWorldDir: Qf,
    selectWorldSticker: Pc,
    selectedWorldSticker: ca,
    sendSelectedToBack: d1,
    setSelectedItem: Hn,
    setSelectedItems: f1,
    setSpaceMode: p1,
    setSpaceView: h1,
    shortestWrappedDelta: ws,
    shotViewCamera: m1,
    spaceOrigin: g1,
    spaceScale: ua,
    spaceViewState: Ai,
    startSpaceDrag: ep,
    stickerCornerOrderSanity: y1,
    stickerImageKey: Ac,
    syncPaintingLayerAsync: tp,
    syncVideoTransportState: np,
    syncVideoTransportVisibility: b1,
    toggleSelectedExternalStickerVisibility: v1,
    toggleSelectedLock: _1,
    toggleVideoMuted: rp,
    transitionView: xs,
    turnViewTo: ip,
    videoCleanupFns: S1,
    videoState: ks,
    viewControls: Cc,
    worldDirToFrameLocalPoint: op,
    worldStickerEditable: Ic,
    writePose: pr,
    zoomSpaceAt: w1
  } = xE({
    api: Qt,
    app: Bn,
    backgroundCanvas: de,
    cameraV2: W,
    canvas: $,
    comfyMedia: br,
    commitAndRefreshNode: Pt,
    commitState: Gn,
    ctx: fe,
    cutoutPreviewCanvas: K,
    cutoutPreviewHost: B,
    cutoutV2: w,
    editor: u,
    editorView: Ke,
    floatingRightEl: ne,
    frameGateCssRadius: nt,
    frameViewDistance: Pp,
    getActiveCutoutShot: dt,
    getBrushPresetIdForTool: Ei,
    getFrameViewLayout: As,
    getFrameViewRect: Wr,
    getPaintingLayerList: Es,
    imageCache: U,
    isWorldMenuShown: kv,
    loadPreferredExactLinkedImage: rg,
    mediaAssetSource: WE,
    mediaSource: KE,
    mediaUiImage: BE,
    node: e,
    portStillCanvas: C,
    portVideoEl: Fe,
    rasterErpCanvasCache: Le,
    rasterImageAlphaCache: ce,
    rasterImageCache: ye,
    readOnly: n,
    rectFromPoints: Vp,
    requestDraw: We,
    resolveEditorOutputPresetWidth: _,
    runtime: ve,
    sceneV2: S,
    scheduler: Ve,
    setTimelineFrame: F1,
    shotEditor: V,
    stageWrap: Pe,
    startAnimation: da,
    state: y,
    stateV2: v,
    stillCanvas: je,
    stopTimelinePlayback: hn,
    studio: P,
    syncCutoutShot: er,
    syncFloatingViewButtonState: Ii,
    syncPaintUi: En,
    syncTimeline: xr,
    syncUndoRedoButtons: Yp,
    timeline: A,
    timelinePlayhead: G,
    timelineSpanFrames: Dc,
    type: t,
    uiState: I,
    updateCursor: Et,
    updateSelectionMenu: ct,
    updateSidePanel: it,
    videoEl: Ae,
    viewController: It
  }, [
    PE,
    EE,
    OE,
    FE,
    TE,
    DE,
    LE,
    RE,
    VE,
    $E,
    zE,
    jE,
    HE
  ]);
  function x1() {
    I.toolButtons.forEach((l) => {
      const d = l.attr === "data-tool-mode", g = l.attr === "data-paint-tool", k = l.attr === "data-mask-tool";
      l.active = d ? l.value === u.primaryTool : g ? l.key === u.paintTool : k ? l.key === u.maskTool : !1, l.pressed = l.active ? "true" : l.pressed == null ? null : "false";
    });
  }
  function Ec(l) {
    return Of(l == null ? void 0 : l.dataTransfer);
  }
  function Ci(l) {
    const d = !!l;
    Ot.active !== d && (Ot.active = d, Pe.classList.toggle("drop-active", d));
  }
  y1();
  function k1() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function M1() {
    return String(k1() || "") === "lasso_fill";
  }
  function Oc() {
    if (P && Mo(I.toolButtons, "value", "add-camera", { disabled: fo() }), t !== "cutout") return;
    const l = dt();
    Mo(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: l ? "Look At Frame" : "Add Frame",
      tip: l ? "Look at frame" : "Add frame",
      icon: l ? Xe.camera : Xe.plus_circle
    });
  }
  function Ii() {
    const l = I2({
      spaceView: la(),
      spaceMode: hl(u.spaceMode, u.viewTransition),
      readOnly: n,
      frameMode: V && u.mode === "frame",
      showGrid: u.showGrid
    });
    I.space && Object.assign(I.space, l.space);
    for (const [d, g] of Object.entries(l.buttons)) Mo(I.floatingButtons, "action", d, g);
  }
  function Hr() {
    var g;
    const l = E2({ hasShot: !!dt(), erp: sa(), hidden: fo() && !hs(), studio: P });
    u.mode === "frame" && l.disabled && (P ? Mp(dt()) : u.mode = "pano"), u.outputPreviewRect = null, I.viewButtons.forEach((k) => {
      const N = k.key === u.mode;
      k.pressed = N ? "true" : "false", k.visible = !(k.key === "frame" && !V), k.key === "frame" ? Object.assign(k, l) : k.disabled = !1;
    });
    const d = V && u.mode === "frame" ? dt() : null;
    I.frameRail.visible = !!d, I.frameRail.disabled = n || (d == null ? void 0 : d.locked) === !0, I.frameRollKnob.visible = !!d && !n && d.locked !== !0, I.frameRollKnob.disabled = n || (d == null ? void 0 : d.locked) === !0, I.frameRollKnob.rollDeg = Number((d == null ? void 0 : d.roll_deg) ?? (d == null ? void 0 : d.rot_deg) ?? 0), I.frameRollKnob.displayValue = No(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((g = u.interaction) == null ? void 0 : g.kind) === "roll_frame", I.frameRollKnob.armed = !!d && u.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = d ? Qr(d) : "", I.frameRail.aspectChoices = fb(d ? String(Qr(d)) : null, { erp: P, coverage: y.coverage }), d || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && u.mode !== "frame" && !!dt(), V && I.cameraPreview && (I.cameraPreview.visible = u.mode !== "frame" && Pb(), I.cameraPreview.expanded = !!u.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && ve.pendingStableLayoutFrames <= 0 && ve.hasPresentedFrame), Ii(), Fp() ? Et(u.pointerPos) : st(u.mode === "pano" ? "grab" : "default");
  }
  function yo() {
    const l = new Set(
      (y.stickers || []).map((d) => String((d == null ? void 0 : d.asset_id) || "")).filter((d) => !!d)
    );
    Object.keys(y.assets || {}).forEach((d) => {
      l.has(d) || (delete y.assets[d], U.delete(d));
    });
  }
  function N1(l, d) {
    var N;
    const g = (N = gs().space) == null ? void 0 : N.gizmo;
    if (ho() && g && Fi("hover", d) !== null && Fi("down", d))
      return u.interaction = { kind: "world_gizmo", camera: !0, mode: g.mode, start: g.transform, base: _c(), changed: !1 }, $.setPointerCapture(l.pointerId), Et(d), !0;
    const k = sy(_c(), Nb(ua()));
    return sM(aa(), k, d, $.width, $.height) ? (ho() || (Hn(dt()), it(), ct(), We()), u.interaction = { kind: "world_select" }, $.setPointerCapture(l.pointerId), !0) : !1;
  }
  function Gr() {
    var d;
    const l = u.mode === "frame" ? dt() : null;
    I.frameRollKnob.visible = !!l && !n && l.locked !== !0, I.frameRollKnob.rollDeg = Number((l == null ? void 0 : l.roll_deg) ?? (l == null ? void 0 : l.rot_deg) ?? 0), I.frameRollKnob.displayValue = No(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((d = u.interaction) == null ? void 0 : d.kind) === "roll_frame", I.frameRollKnob.armed = !!l && u.altModifier === !0;
  }
  function ap(l = /* @__PURE__ */ new Set()) {
    zb();
    const d = ve.backgroundDirty;
    V && (Jf(), Ob(d, l)), u.mode === "frame" ? (ve.frameSafeRect = sv(), Db(d)) : u.mode === "unwrap" ? Rb(d) : Lb(d), Fb(), $b(), Gr(), Vb(), Tb(), I.fovValue = `${Math.round(u.viewFov)}°`, Math.abs(Number(u.outputPreviewAnim || 0) - Number(u.outputPreviewAnimTo || 0)) < 1e-6 && ct(), ve.hasPresentedFrame || (ve.hasPresentedFrame = !0, de.style.opacity = "1"), V && I.cameraPreview && (I.cameraPreview.settled = ve.pendingStableLayoutFrames <= 0 && ve.hasPresentedFrame && u.mode !== "frame");
    const g = Qb();
    I.stageStatus = g.status, I.stageStatusDetail = g.detail, g.status === hr ? (Pe == null || Pe.removeAttribute("data-stage-ready"), Pe == null || Pe.setAttribute("data-stage-loading-kind", g.detail)) : (Pe == null || Pe.setAttribute("data-stage-ready", ""), Pe == null || Pe.removeAttribute("data-stage-loading-kind"));
  }
  function P1(l = u.interaction) {
    if (t !== "stickers" || u.mode !== "pano") return !1;
    const d = String((l == null ? void 0 : l.kind) || "");
    return d === "move" || d === "scale" || d === "scale_x" || d === "scale_y" || d === "rotate" ? !0 : d === "move_multi" ? Array.isArray(l == null ? void 0 : l.stickerSnapshots) && l.stickerSnapshots.length > 0 : !1;
  }
  function Fc() {
    return !!u.interaction || !!A.drag;
  }
  function sp() {
    ve.nodePreviewPending = !1, e.__panoLiveStateOverride = y, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Zb();
  }
  function We(l = {}) {
    var ae, He, be, Me, $e, Qe, Re, ut, rt;
    const d = l.reason ?? Nt.STATE, g = !!l.localOnly, k = l.externalSync === !0, N = String(l.cause || ""), R = String(((ae = u.interaction) == null ? void 0 : ae.kind) || "");
    (!g || R === "view" || R === "pan_frame" || P1() || !!u.viewTransition || N === "mode" || N === "frame_view" || N === "cutout_frame") && (ve.backgroundDirty = !0), g && t1() && (u.livePaintInteractionRevision += 1, ve.backgroundDirty = !0), (!g || N === "selection" || N === "mode" || N === "cutout_frame") && (Oc(), Hr()), Fc() ? ve.nodePreviewPending = !0 : sp(), k && ((be = (He = e.__panoDomPreview) == null ? void 0 : He.requestDraw) == null || be.call(He), (Me = e.setDirtyCanvas) == null || Me.call(e, !0, !1)), k && !g && ((Qe = ($e = e.graph) == null ? void 0 : $e.setDirtyCanvas) == null || Qe.call($e, !0, !0), (rt = (ut = (Re = Bn) == null ? void 0 : Re.canvas) == null ? void 0 : ut.setDirty) == null || rt.call(ut, !0, !0)), Ve.requestDraw(d);
  }
  function Ms() {
    const l = $.getBoundingClientRect(), d = Math.max(2, Math.round(l.width)), g = Math.max(2, Math.round(l.height)), k = window.devicePixelRatio || 1, N = [$.width, $.height, de.width, de.height].join("x");
    ($.width !== d || $.height !== g) && ($.width = d, $.height = g);
    const R = uM(l.width || d, l.height || g, k, window.innerWidth || l.width, window.innerHeight || l.height);
    return Ke.resize(R.width, R.height), [$.width, $.height, de.width, de.height].join("x") === N ? !1 : (ve.backgroundDirty = !0, ve.dirty = !0, V && da(() => {
      ve.pendingStableLayoutFrames = Math.max(Number(ve.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function da(l) {
    l(), Ve.wake();
  }
  function A1() {
    return !!u.viewTransition || !!It.state.inertia.active || ve.pendingStableLayoutFrames > 0 || Math.abs(Number(u.frameRollOverlayAlpha || 0) - Number(u.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(u.cutoutPanoDimAlpha || 0) - Number(u.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(u.cutoutPanoFrameAlpha || 0) - Number(u.cutoutPanoFrameTarget || 0)) > 1e-6 || u.outputPreviewAnim !== u.outputPreviewAnimTo || Fc();
  }
  function C1(l = performance.now(), d = /* @__PURE__ */ new Set()) {
    var Z;
    ve.nodePreviewPending && !Fc() && sp(), d.forEach((ee) => ve.reasons.add(ee)), d.size && (ve.dirty = !0), [...d].some((ee) => ee !== Nt.OVERLAY) && (ve.backgroundDirty = !0), er(), ve.lastTickTs > 0 ? Math.max(1e-3, (l - ve.lastTickTs) / 1e3) : 1 / 60, ve.lastTickTs = l;
    const g = u.mode === "frame" && ((Z = u.interaction) == null ? void 0 : Z.kind) === "roll_frame" ? u.interaction : null;
    g != null && g.shot && (u.frameRollOverlayVisual = { shot: g.shot });
    const k = g ? 1 : 0;
    if (Math.abs(k - Number(u.frameRollOverlayTarget || 0)) > 1e-6 && (u.frameRollOverlayFrom = Number(u.frameRollOverlayAlpha || 0), u.frameRollOverlayTarget = k, u.frameRollOverlayStartTs = l), Math.abs(Number(u.frameRollOverlayAlpha || 0) - k) > 1e-6) {
      const ee = Ee(
        (l - Number(u.frameRollOverlayStartTs || l)) / rE,
        0,
        1
      );
      u.frameRollOverlayAlpha = rr(
        Number(u.frameRollOverlayFrom || 0),
        k,
        Iu(ee)
      ), ee >= 1 && (u.frameRollOverlayAlpha = k, k === 0 && (u.frameRollOverlayVisual = null)), ve.dirty = !0;
    }
    const N = Wb();
    if (Math.abs(N - Number(u.cutoutPanoDimTarget || 0)) > 1e-6 && (u.cutoutPanoDimFrom = Number(u.cutoutPanoDimAlpha || 0), u.cutoutPanoDimTarget = N, u.cutoutPanoDimStartTs = l), Math.abs(Number(u.cutoutPanoDimAlpha || 0) - N) > 1e-6) {
      const ee = Ee(
        (l - Number(u.cutoutPanoDimStartTs || l)) / Zm,
        0,
        1
      );
      u.cutoutPanoDimAlpha = rr(
        Number(u.cutoutPanoDimFrom || 0),
        N,
        Iu(ee)
      ), ee >= 1 && (u.cutoutPanoDimAlpha = N), ee >= 1 && N === 0 && (u.cutoutPanoDimCorners = null), ve.dirty = !0;
    }
    const R = V && dt() ? 1 : 0;
    if (Math.abs(R - Number(u.cutoutPanoFrameTarget || 0)) > 1e-6 && (u.cutoutPanoFrameFrom = Number(u.cutoutPanoFrameAlpha || 0), u.cutoutPanoFrameTarget = R, u.cutoutPanoFrameStartTs = l), Math.abs(Number(u.cutoutPanoFrameAlpha || 0) - R) > 1e-6) {
      const ee = Ee(
        (l - Number(u.cutoutPanoFrameStartTs || l)) / Zm,
        0,
        1
      );
      u.cutoutPanoFrameAlpha = rr(
        Number(u.cutoutPanoFrameFrom || 0),
        R,
        Iu(ee)
      ), ee >= 1 && (u.cutoutPanoFrameAlpha = R, R === 0 && (u.cutoutPanoFrameVisual = null)), ve.dirty = !0;
    }
    if (u.outputPreviewAnim !== u.outputPreviewAnimTo) {
      const ee = Math.max(1, Number(u.outputPreviewAnimDurationMs || 180)), ae = Ee((l - Number(u.outputPreviewAnimStartTs || 0)) / ee, 0, 1), be = u.outputPreviewAnimTo > u.outputPreviewAnimFrom ? sE(ae) : cE(ae);
      u.outputPreviewAnim = rr(u.outputPreviewAnimFrom, u.outputPreviewAnimTo, be), ve.dirty = !0, ae >= 1 && (u.outputPreviewAnim = u.outputPreviewAnimTo);
    }
    if (u.viewTransition) {
      const { view: ee, done: ae } = x2(u.viewTransition, l);
      if (u.viewPosition = ee.position, u.viewYaw = ee.yaw_deg, u.viewPitch = ee.pitch_deg, u.viewFov = ee.hFOV_deg, u.viewDistance = ee.distance, ae) {
        const { end: He } = u.viewTransition;
        u.viewTransition = null, He && In(He), Ii();
      }
      ve.backgroundDirty = !0, ve.dirty = !0;
    }
    if (u.viewInertia.vx = Number(It.state.inertia.vx || 0), u.viewInertia.vy = Number(It.state.inertia.vy || 0), u.viewInertia.active = !!It.state.inertia.active, It.stepInertia(l) && (u.viewInertia.vx = Number(It.state.inertia.vx || 0), u.viewInertia.vy = Number(It.state.inertia.vy || 0), u.viewInertia.active = !!It.state.inertia.active, ve.backgroundDirty = !0, ve.dirty = !0), ve.pendingStableLayoutFrames > 0 && (ve.pendingStableLayoutFrames -= 1, ve.dirty = !0), ve.dirty) {
      if (ve.pendingStableLayoutFrames > 0)
        return;
      ve.dirty = !1;
      const ee = ve.reasons;
      ve.reasons = /* @__PURE__ */ new Set(), ap(ee);
    }
  }
  function lp(l) {
    try {
      l();
    } catch (d) {
      const g = String((d == null ? void 0 : d.stack) || (d == null ? void 0 : d.message) || d || "unknown editor frame error");
      ve.tickErrorSignature !== g && (ve.tickErrorSignature = g, console.error("[PanoramaStickers] editor frame failed", d)), I.stageStatus = ir, I.stageStatusDetail = "frame", Pe == null || Pe.setAttribute("data-stage-ready", ""), Pe == null || Pe.removeAttribute("data-stage-loading-kind");
    }
  }
  function I1(l = performance.now(), d = /* @__PURE__ */ new Set()) {
    if (!ve.running) return;
    const g = Fw();
    lp(() => C1(l, d)), Tw(g);
  }
  function cp() {
    !ve.running || !Ms() || lp(() => {
      ve.dirty = !1, ap(/* @__PURE__ */ new Set([Nt.RESIZE]));
    });
  }
  const up = new ResizeObserver(cp);
  up.observe($);
  let bo = null;
  function dp() {
    bo == null || bo.removeEventListener("change", Tc), bo = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), bo.addEventListener("change", Tc);
  }
  function Tc() {
    dp(), cp();
  }
  dp();
  function E1() {
    ge(), ve.running = !1, Ve.stop(), up.disconnect(), bo.removeEventListener("change", Tc);
  }
  function En() {
    x1();
    const l = N2({
      editor: u,
      swatches: ml,
      paintColorPopOpen: ie ? !ie.hidden : !1,
      colorToCss: Pr,
      colorsApproximatelyEqual: gl,
      rgb01ToHsv: Tu,
      hsv01ToRgb: Fu,
      getBrushPresetIdForTool: Ei,
      isActiveLassoTool: M1
    });
    if (Object.assign(I.paintDock, l), b1(), !l.visible) {
      ie && (ie.hidden = !0);
      return;
    }
    se && (clearTimeout(se), se = 0), J && (!l.colorEnabled && ie && !ie.hidden && (se = window.setTimeout(() => {
      ie.hidden = !0, I.paintDock.colorPopOpen = !1, se = 0;
    }, 170)), ie && (ie.style.setProperty("--picker-hue-color", l.pickerHueColor), ie.style.setProperty("--picker-sat", l.pickerSat), ie.style.setProperty("--picker-val", l.pickerVal), ie.style.setProperty("--picker-hue", l.pickerHue)), ke && (ke.style.left = l.pickerSvLeft, ke.style.top = l.pickerSvTop), Te && (Te.style.left = l.pickerHueLeft));
  }
  function vo() {
    const l = Nn(V && u.mode === "frame" ? dt() : Mn());
    l && (u.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Qr(l)
    }, it());
  }
  function it() {
    er(), xr(), fp();
  }
  function O1() {
    const l = V && u.mode === "frame" ? dt() : null;
    return [...Ni(), ca(), l].some((d) => ci(d) ? Ll(d) : ui(d) && fo() && Ll(y.camera));
  }
  function fp() {
    if (i) return;
    y.ui_settings = y.ui_settings || {};
    const l = M2(y.ui_settings);
    if (o) {
      I.sidePanel = P2({
        coverage: y.coverage,
        uiSettings: l,
        normalizeCoverageValue: Rn
      });
      return;
    }
    const d = Mn(), g = V && u.mode === "frame" ? dt() : null, k = g || d, N = g ? [g] : Ni(), R = g ? "shot" : vs();
    if (N.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), k && R !== "stroke") {
      const rt = Nn(k);
      u.panelLastValues = {
        yaw_deg: Number(rt.yaw_deg || 0),
        pitch_deg: Number(rt.pitch_deg || 0),
        hFOV_deg: Number(rt.hFOV_deg || (R === "image" ? 30 : 90)),
        vFOV_deg: Number(rt.vFOV_deg || (R === "image" ? 30 : 60)),
        rot_deg: Number(rt.rot_deg || 0),
        roll_deg: Number(rt.roll_deg || 0),
        aspect_id: Qr(rt)
      }, ci(k) && (u.panelLastValues.opacity = to(k, u.frame).opacity * 100);
    }
    const Z = u.panelLastValues || (t === "stickers" || R === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), ee = R === "stroke" ? null : k, ae = ca(), He = W && (R === "shot" || R === "frame") && kc(), be = ae ? Nk(ae, u.frame) : He ? { ...ee, ...xk(y.camera, u.frame), vFOV_deg: ee.vFOV_deg } : ci(ee) ? u.panelLastValues : ee || Z, Me = ae ? Ic(ae) : !!ee && !dr(ee);
    u.panelWasEnabled = Me, Oc();
    let $e = null;
    if (g) {
      const rt = wc({ item: g, kind: "shot", label: "Frame" });
      $e = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: rt.label,
        currentIcon: rt.icon || null,
        items: [{
          id: String(g.id || ""),
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
        const St = dt();
        St && rt.push({ id: St.id, label: "Camera", icon: Jb("frame"), item: St, kind: "frame" }), lo().forEach((Ft, gn) => {
          var Ue, et;
          if (!Ft || ci(Ft) && !Ft.visible) return;
          const Ti = S ? rd(Ft) : _r(Ft) ? String(Ft.id || Rf) : String(((et = (Ue = y.assets) == null ? void 0 : Ue[Ft.asset_id]) == null ? void 0 : et.name) || Ft.asset_id || Ft.id), Di = `${gn + 1}. ${Ti}${_r(Ft) && _s(Ft) ? " (hidden)" : ""}`, Ze = wc({ item: Ft, label: Di, kind: "image" });
          rt.push({ id: Ft.id, label: Ze.label, icon: Ze.icon, item: Ft, kind: "image" });
        });
      } else
        Hf().forEach((St) => {
          if (!(St != null && St.item)) return;
          const Ft = wc(St);
          rt.push({ id: St.item.id, label: Ft.label, icon: Ft.icon, item: St.item, kind: St.kind });
        });
      const At = (ee == null ? void 0 : ee.id) || "", gt = ae ? { label: rd(ae), icon: Xe.globe } : rt.find((St) => St.id === At) || rt[0];
      $e = {
        label: "Selection",
        open: !1,
        disabled: rt.length <= 1,
        currentLabel: gt.label,
        currentIcon: gt.icon || null,
        items: rt.map((St) => ({
          id: St.id,
          label: St.label,
          icon: St.icon || null,
          active: St.id === At
        }))
      };
    }
    const Qe = [], Re = (rt, At, gt, St, Ft) => {
      const gn = Ee(Number(be[rt] || 0), gt, St);
      Qe.push({
        key: rt,
        label: At,
        min: gt,
        max: St,
        step: Ft,
        value: gn,
        displayValue: No(gn),
        fillPct: Ee((gn - gt) / Math.max(1e-6, St - gt) * 100, 0, 100),
        enabled: Me && !n
      });
    }, ut = [];
    if (ae) {
      for (const [rt, At] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const gt = Pu(be[rt]);
        Re(rt, At, -gt, gt, 0.01);
      }
      Re("yaw_deg", "Yaw", -180, 180, 0.1), Re("pitch_deg", "Pitch", -90, 90, 0.1), Re("roll_deg", "Roll", -180, 180, 0.1), Re("scale", "Scale", qm, Pu(be.scale), 0.01), Re("opacity", "Opacity", 0, 100, 1);
    } else if (N.length > 1)
      ut.push(`Selected objects: ${N.length}`), ut.push("Multi-selection supports z-order and delete.");
    else {
      const rt = R === "shot" || R === "frame";
      if (He)
        for (const [At, gt] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const St = Pu(be[At]);
          Re(At, gt, -St, St, 0.01);
        }
      Re("yaw_deg", "Yaw", -180, 180, 0.1), Re("pitch_deg", "Pitch", -90, 90, 0.1), Re(R === "image" || t === "stickers" && !rt ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Re("hFOV_deg", "H FOV", 1, 179, 0.1), Re("vFOV_deg", "V FOV", 1, 179, 0.1), rt && Qe.forEach((At) => {
        At.enabled = At.enabled && O2(At.key, { erp: sa() });
      }), S && !rt && Re("opacity", "Opacity", 0, 100, 1);
    }
    I.sidePanel = T2({
      coverage: y.coverage,
      readOnly: n,
      selectionPicker: $e,
      enabled: Me,
      selectedKind: ae ? "world" : R,
      selectedItems: N,
      params: Qe,
      notes: ut,
      uiSettings: l,
      normalizeCoverageValue: Rn
    });
  }
  function xr() {
    if (!v || n) return;
    const l = Dc(), d = A.selection, g = d && kr(d.owner);
    if (d) {
      const k = g ? fa(d) : [];
      d.frames = d.frames.filter((N) => k.some((R) => g[R].keyframes.some((Z) => Z.frame === N))), d.frames.length || (A.selection = null);
    }
    I.timeline = z2(y, {
      span: l,
      selection: A.selection,
      selectedId: u.worldSelectedId || u.selectedId,
      expanded: A.expanded ?? pp(),
      openRows: A.openRows,
      audio: T1() && I.videoTransport.hasAudio ? { muted: Ae.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Du(e) !== null || yM(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: fo(),
      cameraHideable: P,
      stickers: !w,
      scene: S && !!Sf(e).scene,
      sceneLocked: !!D
    }), I.easing = A.selection ? j2(g, fa(A.selection), A.selection.frames, pa(A.selection.owner)) : null;
  }
  function pp() {
    return nk(y, { cameraOnly: w, camera: P });
  }
  function Dc(l = null) {
    if (D != null && D.frames) return D.frames;
    const d = y.timeline.fps, g = y.stickers.find(_r), k = g ? Ub() : null, N = Math.max(
      I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * d) : 0,
      k ? My(g.clip, d, k.meta) : 0
    );
    return H0(y, { minimum: Math.round(d * 5), frames: N, openClip: l, camera: w && !D || P });
  }
  function kr(l) {
    return l === "camera" ? fo() ? y.camera : null : l === "scene" ? S ? y.scene : null : y.stickers.find((d) => d.id === l) || null;
  }
  function fa(l) {
    return l.lane ? [l.lane] : ta(kr(l.owner));
  }
  function pa(l) {
    if (l === "camera") return 0;
    const { clip: d } = kr(l);
    return d.start - d.in;
  }
  function hp(l) {
    return `${qo(l, u.frame)}:${l.start - l.in}`;
  }
  function Ns(l) {
    const d = kr(l);
    return !!d && d.locked !== !0;
  }
  function F1(l) {
    const d = Math.max(0, Math.round(l));
    if (d === u.frame) return;
    er(), u.frame = d, G.frame.value = d, er();
    const g = [u.selectedId, u.worldSelectedId];
    Mc(), dn(), g[0] !== u.selectedId || g[1] !== u.worldSelectedId ? it() : O1() && fp(), ct(), We({ reason: Nt.PLAYHEAD });
  }
  function T1() {
    return Ae instanceof HTMLVideoElement && !!Ae.getAttribute("src");
  }
  function D1(l) {
    go(), Qn.seek(l);
  }
  function hn() {
    v && Qn.stop();
  }
  function Lc() {
    go(), Qn.toggle();
  }
  function Ps() {
    er(), dn(), it(), ct(), We();
  }
  function fi() {
    vt(), Pt(), Ps();
  }
  function L1() {
    const { selection: l } = A;
    Ns(l.owner) && (hn(), Yx(kr(l.owner), fa(l), l.frames, u.frame - pa(l.owner)), A.selection = null, fi());
  }
  function mp(l) {
    const d = ea(l);
    if (d === null || d === y.timeline.fps) return;
    hn();
    const g = Math.round(u.frame * d / y.timeline.fps);
    yk(y, d), A.selection = null, Qn.seek(g), fi();
  }
  function R1() {
    const l = Du(e);
    l !== null && l !== y.timeline.fps && mp(l);
  }
  function V1(l) {
    if (!(n || !v)) {
      if (l.type === "seek") {
        if (l.phase === "move") {
          A.scrubFrame = l.frame, Be.request("seek");
          return;
        }
        Be.cancel(), l.phase === "start" && go(), Qn.seek(l.frame);
        return;
      }
      if (l.type === "play") {
        Lc();
        return;
      }
      if (l.type === "mute") {
        rp(), xr();
        return;
      }
      if (l.type === "toggle-expanded") {
        A.expanded = !(A.expanded ?? pp()), A.selection = null, xr();
        return;
      }
      if (l.type === "toggle-row") {
        A.openRows.has(l.id) ? A.openRows.delete(l.id) : A.openRows.add(l.id), xr();
        return;
      }
      if (l.type === "toggle-visible") {
        if (l.id === hb) y.painting_visible = !y.painting_visible;
        else {
          const d = kr(l.id);
          if (!d || l.id === "camera" && !P) return;
          d.visible = !d.visible;
        }
        Mc(), fi();
        return;
      }
      if (l.type === "select-row") {
        const d = y.stickers.find((g) => g.id === l.id);
        if (d && !d.visible || l.id === "camera" && !hs()) return;
        d && !qo(d.clip, u.frame) && D1(d.clip.start), (d == null ? void 0 : d.placement) === "world" ? Pc(d.id) : l.id === "camera" ? Hn(dt()) : Hn(lo().find((g) => g.id === l.id) || null), Ii(), A.selection = null, it(), ct(), We();
        return;
      }
      if (l.type === "select-keys") {
        const d = pa(l.owner), g = l.frames.map((R) => R - d), k = A.selection, N = (k == null ? void 0 : k.owner) === l.owner && k.lane === l.lane;
        if (l.additive && N) {
          const R = new Set(k.frames);
          for (const Z of g)
            R.has(Z) ? R.delete(Z) : R.add(Z);
          k.frames = [...R].sort((Z, ee) => Z - ee);
        } else
          A.selection = g.length ? { owner: l.owner, lane: l.lane, frames: g } : null;
        xr();
        return;
      }
      if (l.type === "move-keys") {
        const d = A.selection;
        if (!d || !Ns(d.owner)) return;
        const g = kr(d.owner), k = fa(d);
        if (l.phase === "start") {
          hn(), A.drag = { keyframes: k.map((Z) => structuredClone(g[Z].keyframes)), frames: d.frames };
          return;
        }
        const { drag: N } = A;
        if (!(N != null && N.keyframes)) return;
        k.forEach((Z, ee) => {
          g[Z].keyframes = structuredClone(N.keyframes[ee]);
        });
        const R = Xx(g, k, N.frames, l.delta, -pa(d.owner));
        if (d.frames = N.frames.map((Z) => Z + R), l.phase !== "end") {
          Be.request("timeline"), Be.request("view");
          return;
        }
        Be.cancel(), A.drag = null, R ? fi() : Ps();
        return;
      }
      if (l.type === "clip") {
        const d = l.id === "scene" ? kr("scene") : y.stickers.find((R) => R.id === l.id);
        if (!d || d.locked) return;
        if (l.phase === "start") {
          hn(), A.drag = { clip: { ...d.clip }, span: Dc(d.clip) };
          return;
        }
        const { drag: g } = A;
        if (!(g != null && g.clip)) return;
        const k = g.clip, N = hp(d.clip);
        if (d.clip = { ...k }, l.delta && l.mode === "move" ? Zx(d.clip, l.delta) : l.delta && l.mode === "start" ? Qx(d.clip, k.start + l.delta) : l.delta && ek(d.clip, (k.duration === null ? g.span : k.start + k.duration) + l.delta, g.span), l.phase !== "end") {
          Be.request("timeline"), hp(d.clip) !== N && Be.request("view");
          return;
        }
        Be.cancel(), A.drag = null, Mc(), JSON.stringify(d.clip) !== JSON.stringify(k) ? fi() : Ps();
        return;
      }
      if (l.type === "key-row") {
        if (l.owner === "scene" || !Ns(l.owner)) return;
        hn(), Kx(kr(l.owner), u.frame - pa(l.owner)), fi();
        return;
      }
      if (l.type === "fps") {
        const d = ik(l.fps);
        if (d === null || d === y.timeline.fps || I.timeline.fpsLocked) {
          xr();
          return;
        }
        mp(d);
        return;
      }
      if (l.type === "length") {
        const d = ok(l.length);
        if (d === void 0 || d === y.timeline.length) {
          xr();
          return;
        }
        hn(), y.timeline.length = d, fi();
        return;
      }
      if (l.type === "easing") {
        const d = A.selection;
        if (!d || !Ns(d.owner)) return;
        hn(), Jx(kr(d.owner), fa(d), d.frames, l.easing), l.commit ? fi() : Ps();
      }
    }
  }
  async function gp(l) {
    if (n || w || t !== "stickers" && t !== "cutout" || !mr(l)) return;
    if (S) {
      hn(), await yp(l);
      return;
    }
    const d = Gi("asset"), g = Ea(e, `add:${d}`, async () => {
      try {
        const { image: k } = await Oa(l);
        U.set(d, k);
        const N = Gi("st");
        y.stickers.push({
          id: N,
          asset_id: d,
          yaw_deg: u.viewYaw,
          pitch_deg: u.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ms(30, Number(k.naturalWidth || k.width || 1), Number(k.naturalHeight || k.height || 1)),
          rot_deg: 0,
          z_index: bs()
        }), Hn(y.stickers[y.stickers.length - 1]), ha(), it(), ct(), We();
        const R = await Bi(l, {
          fetchApi: (ae, He) => Qt.fetchApi(ae, He)
        });
        if (!(Array.isArray(y.stickers) ? y.stickers : []).filter((ae) => String((ae == null ? void 0 : ae.asset_id) || "") === d).length) return;
        y.assets[d] = R, yo(), vt(), Pt(), it(), ct(), We();
      } catch (k) {
        delete y.assets[d], U.delete(d);
        const N = Array.isArray(y.stickers) ? y.stickers : [], R = N.filter((Z) => String((Z == null ? void 0 : Z.asset_id) || "") === d);
        throw R.length && (y.stickers = N.filter((Z) => String((Z == null ? void 0 : Z.asset_id) || "") !== d), R.some((Z) => String((Z == null ? void 0 : Z.id) || "") === String(u.selectedId || "")) && Hn(null), it(), ct(), We(), Pt()), k;
      }
    });
    try {
      await g;
    } catch {
    }
  }
  function $1() {
    var l;
    n || t !== "stickers" && t !== "cutout" || (l = pe == null ? void 0 : pe.openImagePicker) == null || l.call(pe, "add");
  }
  function z1() {
    var l;
    n || !S || (l = pe == null ? void 0 : pe.openImagePicker) == null || l.call(pe, "add-world");
  }
  async function j1(l) {
    n || !S || !mr(l) || (hn(), await yp(l, "world"));
  }
  function H1() {
    const l = { x: $.width / 2, y: $.height / 2 }, d = la() ? Ke.pick(aa(), l.x, l.y, $.width, $.height) : null;
    return Qk(Ai(), d, vc());
  }
  async function yp(l, d = "sky") {
    const g = Gi("st"), k = Ea(e, `add:${g}`, async () => {
      const { image: N } = await Oa(l), R = {
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: ms(30, Number(N.naturalWidth || N.width || 1), Number(N.naturalHeight || N.height || 1)),
        rot_deg: 0
      }, Z = { kind: "file", filename: "" }, ee = d === "world" ? Ik(g, Z, H1()) : hf(g, Z, R, bs());
      U.set(Ac(ee), N), y.stickers.push(ee), d === "world" ? Pc(g) : Hn(ee), ha(), it(), ct(), We();
      try {
        const ae = await Bi(l, {
          fetchApi: (be, Me) => Qt.fetchApi(be, Me)
        }), He = y.stickers.find((be) => be.id === g);
        if (!He) return;
        He.source = al(ae), U.set(Ac(He), N), vt(), Pt();
      } catch (ae) {
        throw y.stickers = y.stickers.filter((He) => He.id !== g), u.selectedId === g && Hn(null), u.worldSelectedId === g && Vf(), vt(), Pt(), ae;
      } finally {
        it(), ct(), We();
      }
    });
    try {
      await k;
    } catch {
    }
  }
  async function G1(l, d) {
    const g = Ea(e, `replace:${d}:${Gi("asset")}`, async () => {
      const { image: k } = await Oa(l), N = await Bi(l, {
        fetchApi: (Z, ee) => Qt.fetchApi(Z, ee)
      }), R = y.stickers.find((Z) => Z.id === d);
      if (R) {
        R.source = al(N), R.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const Z of [R.size.value, ...R.size.keyframes.map((ee) => ee.value)])
          Z.vFOV_deg = ms(Z.hFOV_deg, Number(k.naturalWidth || k.width || 1), Number(k.naturalHeight || k.height || 1));
        U.set(Ac(R), k), dn(), vt(), Pt(), it(), ct(), We();
      }
    });
    try {
      await g;
    } catch {
    }
  }
  async function W1(l) {
    if (n || t !== "stickers" && t !== "cutout") return;
    const d = Mn();
    if (!d || !fn(d) || _r(d) || !mr(l)) return;
    if (S) {
      await G1(l, d.id);
      return;
    }
    const g = String(d.id || ""), k = Gi("asset"), N = Ea(e, `replace:${g}:${k}`, async () => {
      var be;
      const R = (Array.isArray(y.stickers) ? y.stickers : []).find((Me) => String((Me == null ? void 0 : Me.id) || "") === g) || null;
      if (!R || !fn(R) || _r(R)) return;
      const Z = String(R.asset_id || ""), ee = Z ? yn(((be = y.assets) == null ? void 0 : be[Z]) || null) : null, ae = Number(R.vFOV_deg || 0), He = R.crop && typeof R.crop == "object" ? { ...R.crop } : null;
      try {
        const { image: Me } = await Oa(l);
        U.set(k, Me), R.asset_id = k, R.vFOV_deg = ms(
          Number(R.hFOV_deg || 30),
          Number(Me.naturalWidth || Me.width || 1),
          Number(Me.naturalHeight || Me.height || 1)
        ), R.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, dn(), it(), ct(), We();
        const $e = await Bi(l, {
          fetchApi: (Re, ut) => Qt.fetchApi(Re, ut)
        }), Qe = (Array.isArray(y.stickers) ? y.stickers : []).find((Re) => String((Re == null ? void 0 : Re.id) || "") === g) || null;
        if (!Qe || String(Qe.asset_id || "") !== k) return;
        y.assets[k] = $e, yo(), vt(), Pt(), it(), ct(), We();
      } catch (Me) {
        delete y.assets[k], U.delete(k);
        const $e = (Array.isArray(y.stickers) ? y.stickers : []).find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === g) || null;
        throw $e && String($e.asset_id || "") === k && (Z && ee && (y.assets[Z] = ee), $e.asset_id = Z, $e.vFOV_deg = ae, $e.crop = He ? { ...He } : null), dn(), Pt(), it(), ct(), We(), Me;
      }
    });
    try {
      await N;
    } catch {
    }
  }
  function K1() {
    var d;
    if (n) return;
    const l = Mn();
    !l || !fn(l) || _r(l) || (d = pe == null ? void 0 : pe.openImagePicker) == null || d.call(pe, "replace");
  }
  async function B1() {
    if (n || t !== "stickers") return;
    if (S) {
      await U1();
      return;
    }
    const l = y.assets && typeof y.assets == "object" ? y.assets : {}, d = Object.entries(l).filter(([, k]) => {
      const N = String((k == null ? void 0 : k.type) || "").toLowerCase(), R = String((k == null ? void 0 : k.value) || "");
      return N === "dataurl" && R.startsWith("data:image");
    });
    if (!d.length) return;
    let g = !1;
    for (const [k, N] of d)
      try {
        const R = String((N == null ? void 0 : N.value) || "");
        if (!R) continue;
        const Z = await fetch(R).then((Me) => Me.blob()), ee = String(Z.type || "image/png").split("/")[1] || "png", ae = String((N == null ? void 0 : N.name) || `${k}.${ee}`), He = new File([Z], ae, { type: Z.type || "image/png" }), be = await Bi(He, {
          fetchApi: (Me, $e) => Qt.fetchApi(Me, $e)
        });
        y.assets[k] = {
          ...be,
          w: Number((N == null ? void 0 : N.w) || 0),
          h: Number((N == null ? void 0 : N.h) || 0)
        }, g = !0;
      } catch {
      }
    g && (Pt(), We());
  }
  async function U1() {
    let l = !1;
    for (const d of y.stickers) {
      const g = d.source.data_url;
      if (g)
        try {
          const k = await fetch(g).then((ee) => ee.blob()), N = String(k.type || "image/png").split("/")[1] || "png", R = new File([k], `${d.id}.${N}`, { type: k.type || "image/png" }), Z = await Bi(R, {
            fetchApi: (ee, ae) => Qt.fetchApi(ee, ae)
          });
          d.source = al(Z), l = !0;
        } catch {
        }
    }
    l && (Pt(), We());
  }
  function Y1() {
    if (n || t !== "cutout") return;
    const l = dt();
    if (l) {
      Hn(l), u.mode = "pano", w && li() ? xs(ny(r1(Ai(), l.position), Ab(), $.width, $.height)) : ip(Kt(Number(l.yaw_deg || 0)), Ee(Number(l.pitch_deg || 0), -89.9, 89.9)), it(), ct(), We({ cause: "cutout_frame" });
      return;
    }
    const d = b0({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Kt(Number(u.viewYaw || 0)),
      pitchDeg: Number(u.viewPitch || 0),
      viewFovDeg: Number(u.viewFov || 90)
    });
    y.shots = [d], Hn(d), ha(), u.mode = "pano", vt(), Pt(), it(), ct(), We({ cause: "cutout_frame" });
  }
  function X1() {
    n || !P || fo() || (hn(), y.camera = _k(Ai()), er(), Hn(dt()), ha(), vt(), Pt(), it(), ct(), We({ cause: "cutout_frame" }));
  }
  function q1() {
    hn(), y.camera = null, Hn(null), er(), vt(), Pt(), it(), ct(), We({ cause: "cutout_frame" });
  }
  function bp(l, d) {
    P && ui(l) && (y.camera.projection = d === Wo ? "erp" : "perspective", d === Wo) || nv(l, d);
  }
  function J1() {
    n || t !== "cutout" || (y.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, y.active.selected_shot_id = null, vt(), Pt(), it(), ct(), We());
  }
  function vp(l, d, g = "Clear") {
    return new Promise((k) => {
      I.confirmDialog = {
        visible: !0,
        title: String(l || ""),
        text: String(d || ""),
        confirmLabel: String(g || "Confirm"),
        resolve: k
      };
    });
  }
  async function Z1() {
    var g, k;
    if (n || !await vp(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    y.painting = Uo(null), Sr();
    const d = Ib();
    if (t === "stickers")
      y.stickers = S ? y.stickers.filter((N) => N.placement === "world" || d.includes(N)) : d, S || (y.assets = {}), u.selectedId = ((g = d[0]) == null ? void 0 : g.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = ((k = d[0]) == null ? void 0 : k.id) || null, yo();
    else {
      const N = pk(y.shots, y.active.selected_shot_id);
      y.stickers = d, y.assets = {}, y.shots = N.shots, u.selectedId = N.selectedShotId, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = null, y.active.selected_shot_id = N.selectedShotId, !N.selectedShotId && u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, yo();
    }
    vt(), Pt(), it(), ct(), We();
  }
  async function Q1(l) {
    var R, Z, ee, ae;
    if (n) return;
    const d = l === "mask" ? "mask" : "paint", g = d === "mask" ? "Mask" : "Paint", k = Es(d);
    if (!(!k.length && !(((R = u.interaction) == null ? void 0 : R.kind) === "draw" && ((Z = u.interaction) == null ? void 0 : Z.layerKind) === d) || !await vp(
      `Clear ${g}`,
      `This will remove all ${d} strokes in the current node.`,
      `Clear ${g}`
    ))) {
      if (((ee = u.interaction) == null ? void 0 : ee.kind) === "draw" && ((ae = u.interaction) == null ? void 0 : ae.layerKind) === d) {
        const He = Jn(u.interaction);
        He && u.paintEngine.cancelActiveStroke(He), u.interaction = null;
      }
      k.length = 0, y.painting.raster_objects = zr().filter((He) => String((He == null ? void 0 : He.layerKind) || "paint") !== d), d === "paint" && (co().length = 0), Sr(), vt(), Pt(), it(), ct(), En(), We();
    }
  }
  function ev() {
    if (n) return;
    const l = Mn();
    if (!l || !fn(l) || _r(l) || S && n1(l)) return;
    let d;
    S ? d = Ek(l, Gi("st"), bs()) : (d = JSON.parse(JSON.stringify(l)), d.id = Gi("st"), d.yaw_deg = Kt((d.yaw_deg || 0) + 8), d.z_index = bs()), y.stickers.push(d), y.active.selected_sticker_id = d.id, u.selectedId = d.id, u.selectedIds = [d.id], dn(), vt(), Pt(), ct(), it(), We();
  }
  function tv() {
    const l = ca();
    return l ? (Ic(l) && (hn(), Ck(y, l.id), Vf(), dn(), vt(), Pt(), it(), ct(), Ii(), We()), !0) : !1;
  }
  function _p() {
    var g, k, N, R, Z;
    if (n || w) return;
    const l = Ni(), d = Mn();
    if (!(!d && l.length === 0) && !l.some((ee) => dr(ee))) {
      if (hn(), l.length > 1) {
        const ee = new Set(l.filter((be) => Zn(be)).map((be) => String(be.actionGroupId || be.id || ""))), ae = new Set(l.filter((be) => jr(be)).map((be) => Pi(be.rasterObjectId || be.id || ""))), He = new Set(l.filter(fn).map((be) => String(be.id || "")));
        ee.size > 0 && (y.painting.paint.strokes = (Array.isArray((k = (g = y.painting) == null ? void 0 : g.paint) == null ? void 0 : k.strokes) ? y.painting.paint.strokes : []).filter((be) => !ee.has(String((be == null ? void 0 : be.actionGroupId) || ""))), y.painting.groups = co().filter((be) => !ee.has(String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || ""))), Sr()), ae.size > 0 && (y.painting.raster_objects = zr().filter((be) => !ae.has(String((be == null ? void 0 : be.id) || ""))), mo()), He.size > 0 && (y.stickers = (Array.isArray(y.stickers) ? y.stickers : []).filter((be) => He.has(String((be == null ? void 0 : be.id) || "")) ? _r(be) ? (_s(be) || (be.visible = !1), !0) : !1 : !0), yo(), dn()), u.selectedId = null, u.selectedIds = [], vt(), Pt(), it(), ct(), We();
        return;
      }
      if (Zn(d)) {
        const ee = String(d.actionGroupId || d.id || "").trim();
        y.painting.paint.strokes = (Array.isArray((R = (N = y.painting) == null ? void 0 : N.paint) == null ? void 0 : R.strokes) ? y.painting.paint.strokes : []).filter((ae) => String((ae == null ? void 0 : ae.actionGroupId) || "").trim() !== ee), y.painting.groups = co().filter((ae) => String((ae == null ? void 0 : ae.actionGroupId) || (ae == null ? void 0 : ae.id) || "").trim() !== ee), Sr(), u.selectedId = null, u.selectedIds = [], vt(), Pt(), it(), ct(), We();
        return;
      }
      if (jr(d)) {
        const ee = Pi(d.rasterObjectId || d.id || "");
        y.painting.raster_objects = zr().filter((ae) => String((ae == null ? void 0 : ae.id) || "").trim() !== ee), mo(), u.selectedId = null, u.selectedIds = [], vt(), Pt(), it(), ct(), We();
        return;
      }
      if (P && ui(d)) {
        q1();
        return;
      }
      if (t === "stickers" || fn(d)) {
        if (_r(d)) {
          if (_s(d)) return;
          d.visible = !1, dn(), vt(), Pt(), it(), ct(), We();
          return;
        }
        y.stickers = y.stickers.filter((ee) => ee.id !== d.id), yo(), dn(), u.selectedId = ((Z = lo()[0]) == null ? void 0 : Z.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = u.selectedId, vt(), Pt(), it(), ct(), We();
        return;
      }
      J1();
    }
  }
  function Rc(l, d) {
    const g = ve.frameSafeRect;
    if (!l || !g || u.mode !== "frame") return !1;
    const k = Au * eo(g, l), N = ef(Qd(g, d), k);
    return l.hFOV_deg = N.hFOV_deg, l.vFOV_deg = N.vFOV_deg, !0;
  }
  function nv(l, d) {
    if (!l || l.locked === !0) return;
    const g = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, k = (() => {
      const ee = String(l.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(ee)) {
        const [be, Me] = ee.split(":").map(($e) => Number($e));
        if (Number.isFinite(be) && Number.isFinite(Me)) return be >= Me;
      }
      const ae = Number(l.hFOV_deg || 64), He = Number(l.vFOV_deg || 40);
      return Math.abs(ae - He) > 1e-6 ? ae >= He : oo(l) >= 1;
    })();
    let [N, R] = g[String(d)] || g["1:1"];
    N >= R !== k && ([N, R] = [R, N]);
    const Z = N / R;
    if (!Rc(l, Z)) {
      const ee = Ee(Number(l.vFOV_deg || 40), 1, 179);
      l.vFOV_deg = ee, l.hFOV_deg = rl(ee, Z);
    }
    l.aspect_id = `${N}:${R}`;
  }
  function rv(l, d, g) {
    if (!l || l.locked === !0) return !1;
    const k = os(d, g);
    if (!k) return !1;
    const N = k.ratio;
    if (!Rc(l, N)) {
      const R = Ee(Number(l.vFOV_deg || 40), 1, 179);
      l.vFOV_deg = R, l.hFOV_deg = rl(R, N);
    }
    return l.aspect_id = k.label, !0;
  }
  function Sp(l) {
    if (!l || l.locked === !0) return;
    const d = String(l.aspect_id || "").trim(), g = Si(l), k = g.tanHalfX / Math.max(1e-12, g.tanHalfY), N = 1 / Math.max(1e-12, k);
    if (!Rc(l, N)) {
      const R = Ee(Number(l.vFOV_deg || 60), 1, 179);
      l.vFOV_deg = R, l.hFOV_deg = rl(R, N);
    }
    if (/^\d+:\d+$/.test(d)) {
      const [R, Z] = d.split(":");
      l.aspect_id = `${Z}:${R}`;
    } else
      l.aspect_id = Ui(l);
  }
  function iv() {
    n || (y.projection_model = "pinhole_rectilinear", y.alpha_mode = "straight", s && (y.output_preset = _(Number(y.output_preset || 2048))), c && (y.coverage = Rn(c.value)), p && (y.bg_color = String(p.value || y.bg_color || "#00ff00")), Gn(), e.setDirtyCanvas(!0, !0));
  }
  function Gn() {
    var d;
    if (n) return;
    er(), q0(y), y.coverage = Rn(y.coverage), X0(e, y.active);
    const l = J0(e, y);
    f && !Z0(e, l, String(f.value ?? ""), { rebased: W }) && (f.value = l, (d = f.callback) == null || d.call(f, l));
  }
  const wp = () => Gn();
  n || (e.__panoFlushStateBeforeQueue = wp);
  function Vc() {
    y.ui_settings = _E(y.ui_settings), n || Gn();
  }
  function Pt() {
    var l;
    n || (Gn(), (l = e.setDirtyCanvas) == null || l.call(e, !0, !0));
  }
  function ov() {
    n || i1() && tp().catch((l) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", l);
    });
  }
  function av(l = {}) {
    var k, N, R, Z, ee, ae, He, be, Me, $e;
    const d = l.syncPreview !== !1, g = l.syncGraph !== !1;
    d && ((N = (k = e.__panoPreviewNodeRuntime) == null ? void 0 : k.requestDraw) == null || N.call(k), (Z = (R = e.__panoDomPreview) == null ? void 0 : R.requestDraw) == null || Z.call(R), (ee = e.setDirtyCanvas) == null || ee.call(e, !0, !1)), g && ((He = (ae = e.graph) == null ? void 0 : ae.setDirtyCanvas) == null || He.call(ae, !0, !0), ($e = (Me = (be = Bn) == null ? void 0 : be.canvas) == null ? void 0 : Me.setDirty) == null || $e.call(Me, !0, !0));
  }
  function ha() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", En(), it());
  }
  function xp() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function er(l = !0) {
    var k, N;
    if (!W) return;
    const d = z;
    if (!hs()) {
      z = null, (k = y.shots) != null && k.length && (y.shots = []), d && kp(d, null);
      return;
    }
    const g = (N = y.shots) == null ? void 0 : N[0];
    l && g && z && wk(y.camera, u.frame, g, z), z = lm(y.camera, u.frame), g ? Object.assign(g, z, { position: [...z.position] }) : y.shots = [{ ...z, position: [...z.position] }], d || kp(null, z);
  }
  function kp(l, d) {
    var R, Z;
    !d && u.mode === "frame" && Mp(l);
    const g = (d == null ? void 0 : d.position) ?? [0, 0, 0];
    if (((Z = (R = u.viewTransition) == null ? void 0 : R.end) == null ? void 0 : Z.mode) === "3dof") {
      xs({ ...Ai(), position: g }, u.viewTransition.end);
      return;
    }
    if (u.mode !== "pano" || u.spaceMode !== "3dof" || !kc()) return;
    const k = (l == null ? void 0 : l.position) ?? [0, 0, 0];
    if (k.every((ee, ae) => ee === g[ae])) return;
    const N = { ...Ai(), position: k };
    si({ mode: "6dof", position: k, moved: !0 }), u.viewDistance = N.distance, xs({ ...N, position: g }, { mode: "3dof", moved: !1 });
  }
  function Mp(l) {
    if (u.mode = "pano", !l) return;
    bc();
    const d = Ai().distance;
    u.viewYaw = Kt(l.yaw_deg), u.viewPitch = Ee(l.pitch_deg, -89.9, 89.9), u.viewFov = Ee(l.hFOV_deg, 35, 140), u.spaceMode === "6dof" && si({ mode: "6dof", position: [...l.position], moved: !0 }), u.viewDistance = d, ve.backgroundDirty = !0;
  }
  function dt() {
    if (!V) return null;
    const l = Array.isArray(y.shots) ? y.shots : [];
    if (!l.length) return null;
    const d = String(y.active.selected_shot_id || "");
    return l.find((g) => String((g == null ? void 0 : g.id) || "") === d) || l[0] || null;
  }
  function sv() {
    var Qe, Re, ut, rt, At;
    if (!$) return null;
    const l = (Qe = $.getBoundingClientRect) == null ? void 0 : Qe.call($), d = Number((l == null ? void 0 : l.width) || 0) > 0 ? $.width / l.width : 1, g = Number((l == null ? void 0 : l.height) || 0) > 0 ? $.height / l.height : 1;
    ve.frameCanvasScale = Math.min(d, g);
    let k = 24, N = 24;
    const R = Math.max(k + 1, $.width - 24);
    let Z = Math.max(N + 1, $.height - 24);
    const ee = (Re = M == null ? void 0 : M.getBoundingClientRect) == null ? void 0 : Re.call(M), ae = (ut = O == null ? void 0 : O.getBoundingClientRect) == null ? void 0 : ut.call(O);
    let He = 24;
    ee && l && ee.width > 0 && ee.height > 0 && (He = Math.max(He, (ee.right - l.left) * d + Jm)), ae && l && ae.width > 0 && ae.height > 0 && ((rt = I.frameRail) == null ? void 0 : rt.visible) === !0 && (He = Math.max(He, (l.right - ae.left) * d + Jm)), k = Math.max(k, He);
    const be = Math.min(R, $.width - He);
    let Me = 24;
    const $e = (At = Ce == null ? void 0 : Ce.getBoundingClientRect) == null ? void 0 : At.call(Ce);
    if ($e && l && $e.width > 0 && $e.height > 0 && (Me = Math.max(Me, ($e.bottom - l.top) * g + Cu)), [he, T].forEach((gt) => {
      var gn;
      if (!gt || !l) return;
      const St = getComputedStyle(gt);
      if (St.display === "none" || St.visibility === "hidden" || Number(St.opacity) <= 0) return;
      const Ft = (gn = gt.getBoundingClientRect) == null ? void 0 : gn.call(gt);
      !Ft || Ft.width <= 0 || Ft.height <= 0 || (Me = Math.max(Me, (l.bottom - Ft.top) * g + Cu));
    }), ne && l) {
      const gt = getComputedStyle(ne);
      gt.display !== "none" && gt.visibility !== "hidden" && Number(gt.opacity) > 0 && (Me = Math.max(Me, (tE + Cu) * g));
    }
    return N = Math.max(N, Me), Z = Math.max(N + 1, Math.min(Z, $.height - Me)), {
      x: k,
      y: N,
      w: Math.max(1, be - k),
      h: Math.max(1, Z - N)
    };
  }
  function As(l = dt()) {
    if (!l || !$) return null;
    const d = ve.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, $.width - 48),
      h: Math.max(1, $.height - 48)
    };
    return dx(d, l, Au * eo(d, l));
  }
  function Wr(l = dt()) {
    const d = As(l);
    return d ? { x: d.x, y: d.y, w: d.w, h: d.h } : null;
  }
  function $c() {
    return V && !!dt();
  }
  function lv(l, d) {
    const g = dt();
    if (!g || g.locked === !0) return !1;
    const k = Number(d) > 0, N = _0(g, d);
    if (!N) return !1;
    if (k) {
      const R = Au * eo(
        ve.frameSafeRect || { w: $.width, h: $.height },
        N
      ), Z = tf({ width: $.width, height: $.height }, R);
      if (Z.halfW < $.width * 0.5 - 1e-6 || Z.halfH < $.height * 0.5 - 1e-6) return !1;
    }
    return g.hFOV_deg = N.hFOV_deg, g.vFOV_deg = N.vFOV_deg, Np(), it(), !0;
  }
  function Np() {
    u.frameWheelChanged = !0, u.frameWheelCommitTimer && window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = window.setTimeout(() => {
      u.frameWheelCommitTimer = 0, u.frameWheelChanged && (u.frameWheelChanged = !1, vt(), Pt(), it());
    }, 180);
  }
  function zc() {
    return W && u.mode === "frame" && kc();
  }
  function ma() {
    const l = dt(), d = As(l);
    return l && d ? uy(l, d, { width: $.width, height: $.height }) : null;
  }
  function Pp() {
    var l;
    return ((l = vc()) == null ? void 0 : l.radius) || yr;
  }
  function ga(l) {
    const { position: d, yaw_deg: g, pitch_deg: k, roll_deg: N, hFOV_deg: R } = l.shot;
    return { position: d, yaw_deg: g, pitch_deg: k, roll_deg: N, hFOV_deg: R, distance: Pp() };
  }
  function Ap(l, d) {
    const { rect: g } = l;
    return Ke.pickSurface(m1(l.shot), d.x - g.x, d.y - g.y, g.w, g.h);
  }
  function Cp(l, d, g) {
    return od(d, Ap(l, g), null, ua());
  }
  function Ip(l) {
    return JSON.stringify([ga(l), l.rect]);
  }
  function Ep(l) {
    const d = dt();
    d.position = [...l.position], d.yaw_deg = l.yaw_deg, d.pitch_deg = l.pitch_deg;
  }
  function Op(l, d) {
    const g = dt();
    !g || n || g.locked === !0 || (u.interaction = {
      kind: "pan_frame",
      shot: g,
      last: l,
      start: { yaw_deg: Number(g.yaw_deg || 0), pitch_deg: Number(g.pitch_deg || 0) },
      changed: !1
    }, Et(l), $.setPointerCapture(d));
  }
  function cv(l, d, g) {
    const k = ma();
    if (!k || n) return;
    const N = ga(k);
    u.interaction = l === "orbit" ? { kind: "frame_orbit", last: d, pivot: Cp(k, N, d), changed: !1 } : { kind: "frame_pan", last: d, depth: Q0(N, ua()), changed: !1 }, Et(d), $.setPointerCapture(g);
  }
  function uv(l, d) {
    const g = ma();
    if (!g) return;
    const k = ga(g), N = d.x - l.last.x, R = d.y - l.last.y;
    Ep(l.kind === "frame_pan" ? dm(k, N, R, g.rect.w, g.rect.h, l.depth) : um(k, N, R, $.height, l.pivot)), l.changed = l.changed || N !== 0 || R !== 0, l.last = d, We({ localOnly: !0, cause: "frame_view" });
  }
  function dv(l, d) {
    const g = ma();
    if (!g || n) return;
    const k = ga(g), N = performance.now(), R = { x: l.x, y: l.y, time: N, key: Ke.contentRevision(), view: Ip(g) };
    if (!ey(Je, R)) {
      const Z = Ap(g, l);
      Je = { ...R, cost: performance.now() - N, hit: Z };
    }
    Ep(ty(k, od(k, Je.hit, null, ua()), d, ua())), Je.view = Ip(ma() ?? g), Je.wheelTime = N, Np(), it(), We({ localOnly: !0, cause: "frame_view" });
  }
  function fv() {
    return u.frameWheelCommitTimer && (window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = 0), u.frameWheelChanged ? (u.frameWheelChanged = !1, vt(), Pt(), it(), !0) : !1;
  }
  function ya() {
    const l = u.interaction;
    if (!(l != null && l.shot) || !l.start || l.kind !== "pan_frame" && l.kind !== "roll_frame") return !1;
    const d = l.kind === "roll_frame";
    return l.kind === "pan_frame" ? (l.shot.yaw_deg = l.start.yaw_deg, l.shot.pitch_deg = l.start.pitch_deg) : l.shot.roll_deg = l.start.roll_deg, d && Oi(), u.interaction = null, po(), Hr(), it(), Et(u.pointerPos), We({ localOnly: !0 }), !0;
  }
  function pv(l, d) {
    const g = Number(d || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, g / 2048)
    };
  }
  function Ei(l) {
    const d = String(l || "").trim();
    return d === "eraser" ? Yr : Ln[d] ? d : u.activeBrushPresetId || Yr;
  }
  function Fp() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (xp() || $c());
  }
  function Tp() {
    var l;
    return Fp() && ((l = u.pointerPos) == null ? void 0 : l.inside) === !0;
  }
  function Cs(l, d = !0) {
    const g = Number((l == null ? void 0 : l.x) || 0), k = Number((l == null ? void 0 : l.y) || 0), N = d !== !1, R = u.pointerPos || { x: 0, y: 0, inside: !1 }, Z = R.inside !== N || Math.abs(R.x - g) > 0.01 || Math.abs(R.y - k) > 0.01;
    return u.pointerPos = { x: g, y: k, inside: N }, Z;
  }
  function hv() {
    var be, Me;
    if (!Tp()) return null;
    const l = u.primaryTool === "mask" ? "mask" : "paint", d = l === "mask" ? u.maskTool : u.paintTool, g = Ei(d), k = Ln[g] || Ln[Yr], N = Number(u.brushSizes[g] ?? 10), R = Math.max(1, N) * Math.max(0.1, Number(k.sizeScale ?? 1)), Z = Math.max(3, R * 0.5), ee = l === "mask" ? d === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : d === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Wn(u.paintColor), ae = l === "mask" ? d === "lasso_fill" ? 0.18 : 0.2 : d === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(ee.a ?? 1) * 0.3), 0.16, 0.52), He = l === "mask" ? 0.95 : d === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(ee.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: l,
      toolKind: d,
      preset: k,
      radius: Z,
      fillStyle: Pr(ee, ae),
      strokeStyle: Pr(ee, He),
      x: Number(((be = u.pointerPos) == null ? void 0 : be.x) || 0),
      y: Number(((Me = u.pointerPos) == null ? void 0 : Me.y) || 0),
      hotspotX: Z,
      hotspotY: Z
    };
  }
  function mv() {
    var $e, Qe, Re;
    const l = hv();
    if (!qe) return;
    if (!l) {
      qe.style.display = "none";
      return;
    }
    let d = l.radius * 2, g = l.radius * 2, k = "999px", N = 0, R = l.fillStyle, Z = "1px solid rgba(222, 222, 222, 0.72)", ee = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const ae = "rgba(222, 222, 222, 0.72)", He = "rgba(52, 52, 52, 0.72)";
    let be = Number(l.hotspotX ?? d * 0.5), Me = Number(l.hotspotY ?? g * 0.5);
    if (l.toolKind === "lasso_fill")
      d = Xl, g = Xl, k = "0", Z = "0", ee = "none", be = iE, Me = oE, R = fE(l.fillStyle, He, ae);
    else if (l.layerKind === "mask")
      R = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (l.toolKind === "marker") {
      const ut = Math.max(1, Number((($e = l.preset) == null ? void 0 : $e.aspect) ?? 1));
      d = Math.max(10, l.radius * 2 * ut), g = Math.max(6, l.radius * 2), k = `${Math.min(6, g * 0.42)}px`, N = Number(((Re = (Qe = l.preset) == null ? void 0 : Qe.angle) == null ? void 0 : Re.value) || 0) * Xi;
    } else l.toolKind === "brush" ? R = `radial-gradient(circle at 50% 50%, ${l.strokeStyle} 0%, ${l.fillStyle} 45%, rgba(0,0,0,0) 100%)` : l.toolKind === "eraser" && (R = "rgba(255,255,255,0.14)");
    qe.style.display = "block", qe.style.width = `${Math.round(d)}px`, qe.style.height = `${Math.round(g)}px`, qe.style.borderRadius = k, qe.style.border = Z, qe.style.boxShadow = ee, qe.style.background = R, qe.style.backgroundRepeat = "no-repeat", qe.style.backgroundPosition = "center", qe.style.backgroundSize = "contain", qe.style.transform = `translate(${Math.round(l.x - be)}px, ${Math.round(l.y - Me)}px) rotate(${N}deg)`;
  }
  function gv() {
    var gt;
    if (!le || !j) return;
    const l = u.primaryTool === "mask" ? "mask" : "paint", d = l === "mask" ? u.maskTool : u.paintTool;
    if (d === "lasso_fill") return;
    const g = Ei(d), k = Ln[g] || Ln[Yr], N = Number(u.brushSizes[g] ?? 10), R = Math.max(1, N) * Math.max(0.1, Number(k.sizeScale ?? 1)), Z = Math.max(6, R * 0.5), ee = d === "eraser", ae = l === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : ee ? { r: 1, g: 1, b: 1, a: 0.22 } : Wn(u.paintColor), He = l === "mask" ? Pr(ae, 0.22) : ee ? "rgba(255,255,255,0.14)" : Pr(ae, Ee(Math.max(0.18, Number(ae.a ?? 1) * 0.34), 0.18, 0.56)), be = l === "mask" ? Pr(ae, 0.96) : ee ? "rgba(255,255,255,0.72)" : Pr(ae, Ee(Math.max(0.56, Number(ae.a ?? 1) * 0.96), 0.56, 1));
    let Me = Z * 2, $e = Z * 2, Qe = "999px", Re = 0, ut = He;
    const rt = "rgba(222, 222, 222, 0.72)", At = "rgba(52, 52, 52, 0.72)";
    if (l === "mask")
      ut = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (d === "marker") {
      const St = Math.max(1, Number((k == null ? void 0 : k.aspect) ?? 1));
      Me = Math.max(16, Z * 2 * St), $e = Math.max(10, Z * 2), Qe = `${Math.min(8, $e * 0.42)}px`, Re = Number(((gt = k == null ? void 0 : k.angle) == null ? void 0 : gt.value) || 0) * Xi;
    } else d === "brush" ? ut = `radial-gradient(circle at 50% 50%, ${be} 0%, ${He} 48%, rgba(0,0,0,0) 100%)` : d === "lasso_fill" ? (Me = Math.max(18, Z * 1.8), $e = Me, ut = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${be} 43%, ${be} 58%, rgba(0,0,0,0) 59%)`) : ee && (ut = "rgba(255,255,255,0.12)");
    j.style.width = `${Math.round(Me)}px`, j.style.height = `${Math.round($e)}px`, j.style.borderRadius = Qe, j.style.background = ut, j.style.border = `1px solid ${rt}`, j.style.boxShadow = `0 0 0 1px ${At}`, j.style.transform = `rotate(${Re}deg)`, Ye && (clearTimeout(Ye), Ye = 0), le.classList.remove("fade-out"), le.classList.add("show");
  }
  function Is() {
    !le || !le.classList.contains("show") || (le.classList.add("fade-out"), Ye && clearTimeout(Ye), Ye = window.setTimeout(() => {
      le.classList.remove("show", "fade-out"), Ye = 0;
    }, 180));
  }
  function Dp(l, d, g, k) {
    const N = Ei(d), R = Ln[N] || Ln[Yr], Z = u.brushSizes[N] ?? 10, ee = Math.max(1, Z) * Math.max(0.1, R.sizeScale ?? 1), ae = pv(k, ee), He = g.map((Me) => ({
      ...Me,
      t: Number((Me == null ? void 0 : Me.t) || 0),
      widthScale: Number.isFinite(Number(Me == null ? void 0 : Me.widthScale)) ? Math.max(0, Number(Me.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(Me == null ? void 0 : Me.pressureLike)) ? Math.max(0, Number(Me.pressureLike)) : 1
    })), be = {
      id: Oo(l),
      actionGroupId: Oo("ag"),
      targetSpace: k && typeof k == "object" ? { ...k, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: l,
      toolKind: d,
      size: ee,
      createdAt: Date.now(),
      color: l === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: ae.radiusModel,
      radiusValue: ae.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: He.map((Me) => ({ ...Me })),
        points: He.map((Me) => ({ ...Me }))
      }
    };
    return Ym(be, R), u.mode, Number(R.aspect ?? 1), Number(be.aspect ?? 1), String(be.stampKind || ""), Number(be.size || 0), String(be.radiusModel || ""), Number(be.radiusValue || 0), { ...be.targetSpace }, be;
  }
  function Lp(l, d, g, k) {
    const N = g.map((ae) => ({
      ...ae,
      t: Number((ae == null ? void 0 : ae.t) || 0),
      widthScale: Number.isFinite(Number(ae == null ? void 0 : ae.widthScale)) ? Math.max(0, Number(ae.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(ae == null ? void 0 : ae.pressureLike)) ? Math.max(0, Number(ae.pressureLike)) : 1
    })), R = Ei(d), Z = Ln[R] || Ln[Yr], ee = {
      id: Oo(l),
      actionGroupId: Oo("ag"),
      targetSpace: k && typeof k == "object" ? { ...k, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: l,
      toolKind: d,
      size: 10,
      createdAt: Date.now(),
      color: l === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: N.map((ae) => ({ ...ae }))
      }
    };
    return Ym(ee, Z), u.mode, Number(Z.aspect ?? 1), Number(ee.aspect ?? 1), String(ee.stampKind || ""), { ...ee.targetSpace }, ee;
  }
  function Es(l) {
    const d = y.painting || (y.painting = Uo(null)), g = d[l] || (d[l] = { strokes: [] });
    return Array.isArray(g.strokes) || (g.strokes = []), g.strokes;
  }
  function yv(l, d, g = performance.now()) {
    let k;
    if (u.mode === "frame") {
      const He = dt();
      if (!He || (k = fr(d, He, g), !k)) return !1;
    } else
      k = wr(d, g);
    if (!k) return !1;
    const N = l.stroke.geometry.rawPoints || l.stroke.geometry.points, R = l.stroke.geometry.points, Z = N[N.length - 1];
    if (Z) {
      const He = Math.abs(Number(k.u ?? k.x ?? 0) - Number(Z.u ?? Z.x ?? 0)), be = Math.abs(Number(k.v ?? k.y ?? 0) - Number(Z.v ?? Z.y ?? 0));
      if (He < 15e-4 && be < 15e-4) return !1;
    }
    const ee = {
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    N.push({ ...ee }), R.push({ ...ee });
    const ae = Jn(l);
    if (ae) {
      const He = u.paintEngine.ensureTarget(ae);
      u.paintEngine.appendStrokePoint(He, Number(ee.u ?? 0), Number(ee.v ?? 0), l.stroke);
    }
    return !0;
  }
  function bv(l, d, g = performance.now()) {
    var Z, ee;
    let k;
    if (u.mode === "frame") {
      const ae = dt();
      if (!ae) return !1;
      k = fr(d, ae, g);
    } else
      k = wr(d, g);
    const N = (ee = (Z = l == null ? void 0 : l.stroke) == null ? void 0 : Z.geometry) == null ? void 0 : ee.points;
    if (!k || !Array.isArray(N)) return !1;
    const R = N[N.length - 1];
    if (R) {
      const ae = Math.abs(Number(k.u ?? k.x ?? 0) - Number(R.u ?? R.x ?? 0)), He = Math.abs(Number(k.v ?? k.y ?? 0) - Number(R.v ?? R.y ?? 0));
      if (ae < 15e-4 && He < 15e-4) return !1;
    }
    return N.push({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function vv(l) {
    var St, Ft, gn, Ti, Di;
    const d = (l == null ? void 0 : l.stroke) || null;
    if (!d || (l == null ? void 0 : l.layerKind) !== "paint" || String((d == null ? void 0 : d.toolKind) || "") !== "eraser") return !1;
    Jf();
    const g = Jn(), k = $f(g.width, g.height);
    if (!l1(k, d, { w: g.width, h: g.height })) return !1;
    const N = ((Ft = (St = k.ctx) == null ? void 0 : St.getImageData(0, 0, g.width, g.height)) == null ? void 0 : Ft.data) || null;
    if (!N) return !1;
    const R = new Map(co().map((Ze) => [String((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "").trim(), Ze ? { ...Ze } : null])), Z = [], ee = [], ae = [...zr().filter((Ze) => String((Ze == null ? void 0 : Ze.layerKind) || "paint") !== "paint")];
    let He = !1, be = Bb().reduce((Ze, Ue) => Math.max(Ze, Number((Ue == null ? void 0 : Ue.z_index) || 0)), -1) + 1;
    function Me(Ze, Ue, et, at = 8) {
      let ot = Ue, Ct = et, kt = -1, Wt = -1;
      for (let Mt = 0; Mt < et; Mt += 1)
        for (let nn = 0; nn < Ue; nn += 1)
          Ze[(Mt * Ue + nn) * 4 + 3] <= at || (nn < ot && (ot = nn), Mt < Ct && (Ct = Mt), nn > kt && (kt = nn), Mt > Wt && (Wt = Mt));
      return kt < ot || Wt < Ct ? null : { minX: ot, minY: Ct, maxX: kt, maxY: Wt };
    }
    const $e = Me(N, g.width, g.height, 8);
    if (!$e) return !1;
    function Qe(Ze, Ue) {
      return !Ze || !Ue ? !1 : !(Ze.maxX < Ue.minX || Ue.maxX < Ze.minX || Ze.maxY < Ue.minY || Ue.maxY < Ze.minY);
    }
    function Re(Ze, Ue) {
      const et = so((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "", "paint", Ue);
      if (!et) return null;
      const at = et.centerUv.u - et.halfW, ot = et.centerUv.u + et.halfW, Ct = et.centerUv.v - et.halfH, kt = et.centerUv.v + et.halfH, Wt = g.width, Mt = g.height;
      return {
        minX: Math.floor((at % 1 + 1) % 1 * Wt),
        maxX: Math.ceil((ot % 1 + 1) % 1 * Wt),
        minY: Math.floor(Ee(Ct, 0, 1) * Mt),
        maxY: Math.ceil(Ee(kt, 0, 1) * Mt),
        wraps: ot - at >= 1 || at < 0 || ot > 1
      };
    }
    function ut(Ze) {
      const Ue = (Ze == null ? void 0 : Ze.bbox) || null;
      if (!Ue) return null;
      const et = (Ze == null ? void 0 : Ze.transform) || {}, at = g.width, ot = g.height, Ct = Number(Ue.u0 || 0) + Number(et.du || 0), kt = Number(Ue.u1 || 0) + Number(et.du || 0), Wt = Number(Ue.v0 || 0) + Number(et.dv || 0), Mt = Number(Ue.v1 || 0) + Number(et.dv || 0);
      return {
        minX: Math.floor((Ct % 1 + 1) % 1 * at),
        maxX: Math.ceil((kt % 1 + 1) % 1 * at),
        minY: Math.floor(Ee(Wt, 0, 1) * ot),
        maxY: Math.ceil(Ee(Mt, 0, 1) * ot),
        wraps: kt - Ct >= 1 || Ct < 0 || kt > 1
      };
    }
    function rt(Ze) {
      return Ze ? Ze.wraps ? Qe($e, { minX: 0, maxX: Ze.maxX, minY: Ze.minY, maxY: Ze.maxY }) || Qe($e, { minX: Ze.minX, maxX: g.width - 1, minY: Ze.minY, maxY: Ze.maxY }) : Qe($e, Ze) : !0;
    }
    function At(Ze) {
      if (!Ze) return { touched: !1, canvas: null };
      const Ue = $f(g.width, g.height, { readback: !0 });
      Ue.ctx.drawImage(Ze, 0, 0);
      const et = Ue.ctx.getImageData(0, 0, g.width, g.height);
      Ue.ctx.save(), Ue.ctx.globalCompositeOperation = "destination-out", Ue.ctx.drawImage(k.canvas, 0, 0), Ue.ctx.restore();
      const at = Ue.ctx.getImageData(0, 0, g.width, g.height);
      for (let ot = 0; ot < g.width * g.height; ot += 1) {
        if (N[ot * 4 + 3] <= 8) continue;
        const kt = et.data[ot * 4 + 3], Wt = at.data[ot * 4 + 3];
        if (kt > Wt)
          return { touched: !0, canvas: Ue.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function gt(Ze, Ue, et) {
      const at = Number(et == null ? void 0 : et.z_index), ot = Eb(Ze, Ue, et).map((Ct, kt) => ({
        ...Ct,
        z_index: Number.isFinite(at) ? at + kt * 1e-3 : be + kt * 1e-3
      }));
      return ot.length && (be = Math.max(be, ...ot.map((Ct) => Number((Ct == null ? void 0 : Ct.z_index) || 0))) + 1), ot;
    }
    for (const Ze of co()) {
      const Ue = String((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "").trim();
      if (!Ue) continue;
      const et = uo(Ue, "paint");
      if (!rt(Re(Ze, et))) {
        ee.push(Ze), Z.push(...et);
        continue;
      }
      const at = ((Ti = (gn = u.paintEngine) == null ? void 0 : gn.getGroupTarget) == null ? void 0 : Ti.call(gn, Ue)) || null, ot = ((Di = at == null ? void 0 : at.committedPaint) == null ? void 0 : Di.canvas) || null;
      if (!ot) {
        ee.push(Ze), Z.push(...et);
        continue;
      }
      const Ct = At(ot);
      if (!Ct.touched || !Ct.canvas) {
        ee.push(Ze), Z.push(...et);
        continue;
      }
      He = !0;
      const kt = gt(Ct.canvas, "paint", R.get(Ue) || Ze || {});
      ae.push(...kt);
    }
    for (const Ze of zr().filter((Ue) => String((Ue == null ? void 0 : Ue.layerKind) || "paint") === "paint")) {
      if (!rt(ut(Ze))) {
        ae.push(Ze);
        continue;
      }
      const Ue = Mb(Ze, null);
      if (!Ue) {
        ae.push(Ze);
        continue;
      }
      const et = At(Ue);
      if (!et.touched || !et.canvas) {
        ae.push(Ze);
        continue;
      }
      He = !0;
      const at = gt(et.canvas, "paint", Ze);
      ae.push(...at);
    }
    return He ? (y.painting.paint.strokes = Z, y.painting.groups = ee.sort((Ze, Ue) => Number((Ze == null ? void 0 : Ze.z_index) || 0) - Number((Ue == null ? void 0 : Ue.z_index) || 0)), y.painting.raster_objects = ae.sort((Ze, Ue) => Number((Ze == null ? void 0 : Ze.z_index) || 0) - Number((Ue == null ? void 0 : Ue.z_index) || 0)), oa({ preservePanelValues: !1 }), !0) : !1;
  }
  function _v(l) {
    var Z, ee, ae, He, be;
    if ((((ee = (Z = l.stroke) == null ? void 0 : Z.geometry) == null ? void 0 : ee.rawPoints) || ((He = (ae = l.stroke) == null ? void 0 : ae.geometry) == null ? void 0 : He.points) || []).length >= 1) {
      jc(l);
      const Me = Jn(l);
      Me && (String(((be = l.stroke) == null ? void 0 : be.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(Me) : u.paintEngine.commitActiveStroke(l.stroke, Me)), l._hasCommittedSegments = !0;
    }
    const g = l.stroke, k = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, N = Dp(l.layerKind, g.toolKind, [], k);
    N.actionGroupId = g.actionGroupId, l.stroke = N;
    const R = Jn(l);
    R && u.paintEngine.beginStroke(N, R);
  }
  function Sv(l) {
    var Z, ee;
    if ((((ee = (Z = l.stroke) == null ? void 0 : Z.geometry) == null ? void 0 : ee.points) || []).length >= 3) {
      jc(l);
      const ae = Jn(l);
      ae && u.paintEngine.commitActiveStroke(l.stroke, ae), l._hasCommittedSegments = !0;
    }
    const g = l.stroke, k = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, N = Lp(l.layerKind, g.toolKind, [], k);
    N.actionGroupId = g.actionGroupId, l.stroke = N;
    const R = Jn(l);
    R && u.paintEngine.beginStroke(N, R);
  }
  function jc(l) {
    var R, Z, ee, ae;
    const d = ((R = l == null ? void 0 : l.stroke) == null ? void 0 : R.geometry) || null;
    if (!d) return !1;
    const g = String(((Z = l == null ? void 0 : l.stroke) == null ? void 0 : Z.toolKind) || "pen");
    if (l.layerKind === "paint" && g === "eraser")
      return d.geometryKind !== "lasso_fill" && (d.processedPoints = qf(d.rawPoints || d.points || [], l.stroke.targetSpace, !0)), vv(l);
    const k = l.layerKind === "paint" && g !== "eraser";
    if (d.geometryKind === "lasso_fill")
      return (Array.isArray(d.points) ? d.points : []).length < 3 ? !1 : (k && zf((ee = l.stroke) == null ? void 0 : ee.actionGroupId), Es(l.layerKind).push(l.stroke), !0);
    const N = d.rawPoints || d.points || [];
    return N.length < 1 ? !1 : (d.processedPoints = qf(N, l.stroke.targetSpace, !0), k && zf((ae = l.stroke) == null ? void 0 : ae.actionGroupId), Es(l.layerKind).push(l.stroke), !0);
  }
  function Rp(l) {
    var g;
    if (V && u.mode === "frame") {
      const k = dt(), N = Wr(k);
      if (!k || !N || !(Number((l == null ? void 0 : l.x) || 0) >= Number(N.x || 0) && Number((l == null ? void 0 : l.x) || 0) <= Number(N.x || 0) + Number(N.w || 0) && Number((l == null ? void 0 : l.y) || 0) >= Number(N.y || 0) && Number((l == null ? void 0 : l.y) || 0) <= Number(N.y || 0) + Number(N.h || 0))) return null;
      const Z = fr(l, k, performance.now()), ee = Z ? jb(Z) : null;
      if (ee)
        for (const He of Sc()) {
          if (!fn(He)) continue;
          const be = op(He, ee);
          if (be && Number(be.x) >= 0 && Number(be.x) <= 1 && Number(be.y) >= 0 && Number(be.y) <= 1) {
            const Me = pn(He);
            if (Me != null && Me.visible) return { item: He, geom: Me };
          }
        }
      const ae = Wf(!1).slice().sort((He, be) => Number((be == null ? void 0 : be.z_index) || 0) - Number((He == null ? void 0 : He.z_index) || 0));
      for (const He of ae) {
        if (He.type === "strokeGroup") {
          const $e = Bf(Xf("paint", He.actionGroupId || He.id || ""));
          if (!$e) continue;
          const Qe = pn($e);
          if (!(Qe != null && Qe.visible)) continue;
          const Re = Array.isArray(Qe.strokePaths) ? Qe.strokePaths : [];
          for (const ut of Re) {
            const rt = Array.isArray(ut == null ? void 0 : ut.points) ? ut.points : [];
            if (!rt.length) continue;
            if (ut.closed && rt.length >= 3 && hi(l, rt)) return { item: $e, geom: Qe };
            const At = Math.max(8, Number((ut == null ? void 0 : ut.lineWidth) || 0) * 0.5 + 6);
            for (let gt = 0; gt < rt.length - 1; gt += 1)
              if (Ou(l, rt[gt], rt[gt + 1]) <= At * At) return { item: $e, geom: Qe };
            if (rt.length === 1 && Da(l, rt[0]) <= At * At) return { item: $e, geom: Qe };
          }
          continue;
        }
        if (He.type === "rasterObject") {
          const $e = Kf(Yf(((g = He.item) == null ? void 0 : g.id) || He.id || ""));
          if (!$e) continue;
          const Qe = pn($e);
          if (Uf($e, Qe, l, Z)) return { item: $e, geom: Qe };
          continue;
        }
        const be = He.item;
        if (!be || !fn(be) || !ee) continue;
        const Me = op(be, ee);
        if (Me && Number(Me.x) >= 0 && Number(Me.x) <= 1 && Number(Me.y) >= 0 && Number(Me.y) <= 1) {
          const $e = pn(be);
          if ($e != null && $e.visible) return { item: be, geom: $e };
        }
      }
      return null;
    }
    const d = [
      ...Wf(!1).slice().sort((k, N) => Number((N == null ? void 0 : N.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)).map((k) => {
        var N;
        return k.type === "strokeGroup" ? Bf(Xf("paint", k.actionGroupId || k.id || "")) : k.type === "rasterObject" ? Kf(Yf(((N = k.item) == null ? void 0 : N.id) || k.id || "")) : k.item;
      }).filter(Boolean),
      ...V ? Sc().filter((k) => ui(k)) : []
    ];
    for (const k of d) {
      if (Zn(k)) {
        const R = pn(k);
        if (!(R != null && R.visible)) continue;
        const Z = Array.isArray(R.strokePaths) ? R.strokePaths : [];
        for (const ee of Z) {
          const ae = Array.isArray(ee == null ? void 0 : ee.points) ? ee.points : [];
          if (!ae.length) continue;
          if (ee.closed && ae.length >= 3 && hi(l, ae)) return { item: k, geom: R };
          const He = Math.max(8, Number((ee == null ? void 0 : ee.lineWidth) || 0) * 0.5 + 6);
          for (let be = 0; be < ae.length - 1; be += 1)
            if (Ou(l, ae[be], ae[be + 1]) <= He * He) return { item: k, geom: R };
          if (ae.length === 1 && Da(l, ae[0]) <= He * He) return { item: k, geom: R };
        }
        continue;
      }
      if (jr(k)) {
        const R = pn(k);
        if (!(R != null && R.visible)) continue;
        if (Uf(k, R, l)) return { item: k, geom: R };
        continue;
      }
      const N = pn(k);
      if (N.visible && hi(l, N.corners))
        return { item: k, geom: N };
    }
    return null;
  }
  function ba(l, d, g = null) {
    if (!l || !l.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (fn(g)) return gd(l, d);
    if (l.kind === "strokeGroup") {
      const k = l.corners.findIndex((R) => Da(R, d) <= 121);
      if (k >= 0) {
        const R = l.corners[k], Z = R.x - l.center.x, ee = R.y - l.center.y, ae = Z * ee >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: k, cursor: ae };
      }
      const N = Array.isArray(l.strokePaths) ? l.strokePaths : [];
      for (const R of N) {
        const Z = Array.isArray(R == null ? void 0 : R.points) ? R.points : [];
        if (R.closed && Z.length >= 3 && hi(d, Z)) return { kind: "move", cursor: "default" };
        const ee = Math.max(8, Number((R == null ? void 0 : R.lineWidth) || 0) * 0.5 + 6);
        for (let ae = 0; ae < Z.length - 1; ae += 1)
          if (Ou(d, Z[ae], Z[ae + 1]) <= ee * ee) return { kind: "move", cursor: "default" };
      }
      return hi(d, l.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (l.kind === "rasterObject") {
      const k = l.corners.findIndex((N) => Da(N, d) <= 121);
      if (k >= 0) {
        const N = l.corners[k], R = N.x - l.center.x, Z = N.y - l.center.y, ee = R * Z >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: k, cursor: ee };
      }
      return hi(d, l.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    return kN(l, d, {
      edges: t === "cutout" || ui(g),
      resize: !(ui(g) && sa()),
      emptyCursor: u.mode === "pano" ? "grab" : "default"
    });
  }
  function Vp(l, d) {
    return {
      x0: Math.min(Number((l == null ? void 0 : l.x) || 0), Number((d == null ? void 0 : d.x) || 0)),
      y0: Math.min(Number((l == null ? void 0 : l.y) || 0), Number((d == null ? void 0 : d.y) || 0)),
      x1: Math.max(Number((l == null ? void 0 : l.x) || 0), Number((d == null ? void 0 : d.x) || 0)),
      y1: Math.max(Number((l == null ? void 0 : l.y) || 0), Number((d == null ? void 0 : d.y) || 0))
    };
  }
  function wv(l, d) {
    return !!l && !!d && Number(d.x) >= Number(l.x0) && Number(d.x) <= Number(l.x1) && Number(d.y) >= Number(l.y0) && Number(d.y) <= Number(l.y1);
  }
  function xv(l, d) {
    if (!l || !(d != null && d.visible) || !Array.isArray(d.corners)) return !1;
    if (d.corners.some((N) => wv(l, N))) return !0;
    const g = (Number(l.x0) + Number(l.x1)) * 0.5, k = (Number(l.y0) + Number(l.y1)) * 0.5;
    return !!hi({ x: g, y: k }, d.corners);
  }
  function Et(l) {
    if (mv(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? st("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? st("grabbing") : u.interaction.kind === "space_pan" || u.interaction.kind === "frame_pan" ? st("move") : u.interaction.kind === "space_orbit" || u.interaction.kind === "frame_orbit" || u.interaction.kind === "world_gizmo" || u.interaction.kind === "roll_frame" ? st("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? st("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? st(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? st("grabbing") : st("default");
      return;
    }
    if (Tp()) {
      st("none");
      return;
    }
    if (u.mode === "frame") {
      if (u.altModifier && !n) {
        st(eE);
        return;
      }
      if (u.primaryTool !== "cursor") {
        st("default");
        return;
      }
      st("grab");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      st("default");
      return;
    }
    if (u.gizmoAxis) {
      st("grab");
      return;
    }
    const d = Mn(), g = d ? pn(d) : null, k = d ? dr(d) : !1, N = k ? { kind: "none", cursor: "default" } : ba(g, l, d);
    if (!k && N.kind !== "none") {
      st(N.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && Rp(l)) {
      st("default");
      return;
    }
    st(u.mode === "pano" ? "grab" : "default");
  }
  function kv() {
    return re;
  }
  function ct() {
    if (!q) return;
    if (re = !1, u.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (u.worldSelectedId || ho() && li()) {
      const N = Mv();
      re = N.visible, $p(N);
      return;
    }
    const l = Mn(), d = Ni();
    if (!l && d.length === 0 || u.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const g = vs(), k = D2({
      type: t,
      selected: l,
      selectedItems: d,
      selectedKind: g,
      geom: d.length > 1 ? ys(d) : pn(l),
      allLocked: ur(d),
      anyLocked: d.some((N) => dr(N)),
      selectedLocked: dr(l),
      activeAspect: ui(l) && sa() ? Wo : Qr(l),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: _r,
      isStickerHidden: _s,
      canRestoreSelectedToInitial: Cb,
      iconSet: Xe,
      cameraShot: W,
      cameraDeletable: P,
      erpChoice: P,
      coverage: y.coverage
    });
    $p(k);
  }
  function Mv() {
    const l = la() && !u.interaction ? gs().space : null;
    if (!(l != null && l.gizmo)) return { visible: !1 };
    const d = aa(), g = l.stickers.find((Z) => Z.id === u.worldSelectedId), N = (g ? vf(g) : [l.gizmo.transform.position]).map((Z) => is(d, Z, $.width, $.height)).filter(Boolean), R = iM(d, l.gizmo.transform.position, l.gizmo.mode, $.width, $.height);
    return L2({ corners: N, gizmoBox: R, gizmoMode: l.gizmo.mode, camera: ho(), deletable: P && ho() });
  }
  function $p(l) {
    var R, Z;
    if (!l.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const d = (ee, ae) => R2(l.anchor, ee, ae, $.width, $.height), g = Math.max(1, Number(((R = u.menuSize) == null ? void 0 : R.w) || 220)), k = Math.max(1, Number(((Z = u.menuSize) == null ? void 0 : Z.h) || 40)), N = d(g, k);
    if (!N) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    I.selectionMenu = {
      visible: !0,
      left: N.left,
      top: N.top,
      items: l.items
    }, Ve.requestFrame(() => {
      if (!q || I.selectionMenu.visible !== !0) return;
      const ee = q.getBoundingClientRect(), ae = Math.round(Number((ee == null ? void 0 : ee.width) || 0)) || 220, He = Math.round(Number((ee == null ? void 0 : ee.height) || 0)) || 40;
      u.menuSize = { w: ae, h: He, measured: !0 };
      const be = d(ae, He);
      be && (I.selectionMenu.left = be.left, I.selectionMenu.top = be.top);
    });
  }
  function Oi() {
    bt.timer && (clearTimeout(bt.timer), bt.timer = 0), bt.target = null, I.tooltip.visible = !1;
  }
  function Nv(l) {
    if (!E || !l || !l.isConnected) return;
    const d = String(l.getAttribute("data-tip") || "").trim();
    if (!d) return;
    I.tooltip.text = d, I.tooltip.visible = !0;
    const g = l;
    Ve.requestFrame(() => {
      var ut, rt;
      if (bt.target !== g || !E || !(g != null && g.isConnected)) return;
      const k = Pe.getBoundingClientRect(), N = g.getBoundingClientRect(), R = 8, Z = 12, ee = Math.round(Number(((ut = E.getBoundingClientRect()) == null ? void 0 : ut.width) || 0)) || 100, ae = Math.round(Number(((rt = E.getBoundingClientRect()) == null ? void 0 : rt.height) || 0)) || 24, He = !!g.closest(".pano-floating-left"), be = !!g.closest(".pano-frame-rail"), Me = !!g.closest(".pano-paint-footer") || !!g.closest(".pano-paint-color-float");
      let $e = "", Qe = N.left - k.left + N.width * 0.5 - ee * 0.5, Re = N.top - k.top - ae - Z;
      if (g.closest(".pano-floating-top") && (Re = N.bottom - k.top + Z), He)
        $e = "tool-rail", Qe = N.right - k.left + 10, Re = N.top - k.top + N.height * 0.5 - ae * 0.5, Qe = Ee(Qe, R, Math.max(R, k.width - ee - R)), Re = Ee(Re, R, Math.max(R, k.height - ae - R));
      else if (be)
        $e = "frame-rail", Qe = N.left - k.left - ee - 10, Re = N.top - k.top + N.height * 0.5 - ae * 0.5, Qe = Ee(Qe, R, Math.max(R, k.width - ee - R)), Re = Ee(Re, R, Math.max(R, k.height - ae - R));
      else if (Me) {
        $e = "footer";
        const At = g.closest(".pano-paint-footer"), gt = At ? At.getBoundingClientRect() : N;
        Qe = gt.left - k.left + gt.width * 0.5 - ee * 0.5, Re = gt.bottom - k.top + 5, Qe = Ee(Qe, R, Math.max(R, k.width - ee - R)), Re = Math.max(R, Re);
      }
      Qe = Ee(Qe, R, Math.max(R, k.width - ee - R)), Re = Math.max(R, Re), I.tooltip.left = Qe, I.tooltip.top = Re, I.tooltip.variant = $e, I.tooltip.visible = !0;
    });
  }
  function Pv(l, d, g = {}) {
    var R;
    if ((l == null ? void 0 : l.kind) !== "roll_frame" || !l.shot) return;
    l.accumulatedRad += m0(d, l.lastAngle), l.lastAngle = d;
    const k = g0(l.start.roll_deg, l.accumulatedRad, {
      shiftKey: g.shiftKey,
      altKey: l.altStarted ? !1 : g.altKey
    });
    l.shot.roll_deg = k, l.changed = l.changed || Math.abs(l.accumulatedRad) > 1e-9;
    const N = (((R = I.sidePanel) == null ? void 0 : R.params) || []).find((Z) => Z.key === "roll_deg");
    N && (N.value = k, N.displayValue = No(k), N.fillPct = (k + 180) / 360 * 100), Gr(), Hc(l), We({ localOnly: !0 });
  }
  function Av(l, d, g = {}) {
    var R;
    if ((l == null ? void 0 : l.kind) !== "roll_frame" || !l.shot || !l.rollGesture) return;
    const k = By(l.rollGesture, d, g);
    if (!k) return;
    l.rollGesture = k.gesture, l.center = k.gesture.center, l.lastAngle = k.gesture.lastAngle, l.accumulatedRad = k.gesture.accumulatedRad, l.shot.roll_deg = k.rollDeg, l.changed = l.changed || Math.abs(k.gesture.accumulatedRad) > 1e-9;
    const N = (((R = I.sidePanel) == null ? void 0 : R.params) || []).find((Z) => Z.key === "roll_deg");
    N && (N.value = k.rollDeg, N.displayValue = No(k.rollDeg), N.fillPct = (k.rollDeg + 180) / 360 * 100), Gr(), Hc(l), We({ localOnly: !0 });
  }
  function zp(l, d) {
    const g = di(l);
    return Math.atan2(g.y - d.y, g.x - d.x);
  }
  function Hc(l) {
    var Z, ee;
    if ((l == null ? void 0 : l.kind) !== "roll_frame" || !l.shot) return;
    bt.timer && (clearTimeout(bt.timer), bt.timer = 0), bt.target = null;
    const d = Wr(l.shot), g = (Z = $.getBoundingClientRect) == null ? void 0 : Z.call($), k = (ee = Pe.getBoundingClientRect) == null ? void 0 : ee.call(Pe);
    if (!d || !g || !k || $.width <= 0 || $.height <= 0) return;
    const N = g.width / $.width, R = g.height / $.height;
    I.tooltip.text = `${No(l.shot.roll_deg)}°`, I.tooltip.left = g.left - k.left + (d.x + d.w * 0.5) * N, I.tooltip.top = g.top - k.top + (d.y + d.h * 0.5) * R + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  function Cv(l) {
    var R;
    if (l.button !== 0 || n || u.mode !== "frame") return;
    const d = dt();
    if (!d || d.locked === !0) return;
    const g = Wr(d);
    if (!g) return;
    const k = { x: g.x + g.w * 0.5, y: g.y + g.h * 0.5 }, N = zp(l, k);
    u.interaction = {
      kind: "roll_frame",
      shot: d,
      center: k,
      lastAngle: N,
      accumulatedRad: 0,
      start: { roll_deg: Number(d.roll_deg ?? d.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (R = Y.setPointerCapture) == null || R.call(Y, l.pointerId), l.preventDefault(), Gr(), Hc(u.interaction), We({ localOnly: !0 });
  }
  Y == null || Y.addEventListener("pointerdown", Cv);
  function Iv(l) {
    var d;
    ((d = u.interaction) == null ? void 0 : d.kind) !== "roll_frame" || u.interaction.source !== "knob" || Pv(
      u.interaction,
      zp(l, u.interaction.center),
      l
    );
  }
  Y == null || Y.addEventListener("pointermove", Iv);
  function Ev() {
    const l = u.interaction;
    (l == null ? void 0 : l.kind) !== "roll_frame" || l.source !== "knob" || (l.changed && (vt(), Pt(), it()), u.interaction = null, Oi(), Hr(), Gr(), We());
  }
  Y == null || Y.addEventListener("pointerup", Ev), Y == null || Y.addEventListener("pointercancel", () => ya()), Y == null || Y.addEventListener("lostpointercapture", () => {
    var l;
    ((l = u.interaction) == null ? void 0 : l.source) === "knob" && ya();
  });
  function Ov(l) {
    const d = u.mode === "frame" && !n ? dt() : null;
    !d || d.locked === !0 || Math.abs(Number(d.roll_deg ?? d.rot_deg ?? 0)) <= 1e-9 || (d.roll_deg = 0, vt(), Pt(), it(), Gr(), We(), l.preventDefault());
  }
  Y == null || Y.addEventListener("dblclick", Ov);
  function Fv(l) {
    A.selection && (A.selection = null, xr());
    const d = di(l);
    x = d, Cs(d, !0), bc(), It.state.inertia.active = !1, It.state.inertia.vx = 0, It.state.inertia.vy = 0;
    const g = li(), k = zc(), N = g || k ? VN(Cc(), l) : null;
    if (k && N) {
      l.preventDefault(), N === "look" ? Op(d, l.pointerId) : cv(N, d, l.pointerId);
      return;
    }
    if (N === "look") {
      l.preventDefault();
      const be = Ss(l);
      u.interaction = { kind: "view", last: be, lastTs: performance.now() }, It.startDrag(be.x, be.y, l.pointerId, performance.now()), Et(d), $.setPointerCapture(l.pointerId);
      return;
    }
    if (N) {
      l.preventDefault(), ep(N, d, l.pointerId);
      return;
    }
    if ((g || k) && l.button !== 0) {
      l.preventDefault();
      return;
    }
    if (l.button === 1) {
      if (l.preventDefault(), u.mode === "frame") {
        const be = dt();
        if (!be || n || be.locked === !0) return;
        u.interaction = {
          kind: "pan_frame",
          shot: be,
          last: d,
          start: {
            yaw_deg: Number(be.yaw_deg || 0),
            pitch_deg: Number(be.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const be = u.mode === "unwrap" ? d : Ss(l);
        u.interaction = { kind: "view", last: be, lastTs: performance.now() }, It.startDrag(be.x, be.y, l.pointerId, performance.now());
      }
      Et(d), $.setPointerCapture(l.pointerId);
      return;
    }
    if (l.button !== 0) return;
    if (u.mode === "frame" && (l.altKey || l.shiftKey) && !n) {
      const be = dt(), Me = Wr(be);
      if (!be || be.locked === !0 || !Me) return;
      const $e = Ky({
        frame: Me,
        point: d,
        startRollDeg: Number(be.roll_deg ?? be.rot_deg ?? 0),
        shiftKey: l.shiftKey,
        altKey: l.altKey,
        allowAlt: !0
      });
      if (!$e) return;
      u.interaction = {
        kind: "roll_frame",
        shot: be,
        center: $e.center,
        lastAngle: $e.lastAngle,
        accumulatedRad: $e.accumulatedRad,
        rollGesture: $e,
        start: { roll_deg: Number(be.roll_deg ?? be.rot_deg ?? 0) },
        changed: !1,
        altStarted: $e.source === "alt",
        source: $e.source
      }, $.setPointerCapture(l.pointerId), l.preventDefault(), Gr(), We({ localOnly: !0 });
      return;
    }
    if (u.mode === "frame" && u.primaryTool === "cursor") {
      Op(d, l.pointerId), l.preventDefault();
      return;
    }
    if (n) {
      u.mode === "pano" && Gp(l, d);
      return;
    }
    if (ie && !ie.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (xp() || $c())) {
      if (!o1()) return;
      hn();
      const be = u.primaryTool === "mask" ? "mask" : "paint", Me = u.primaryTool === "mask" ? u.maskTool : u.paintTool, $e = u.mode === "frame" && $c() ? dt() : null, Qe = { kind: "ERP_GLOBAL" }, Re = $e ? fr(d, $e, performance.now()) : wr(d, performance.now());
      if (!Re) {
        Et(d);
        return;
      }
      u.interaction = {
        kind: Me === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: be,
        _livePreviewToken: Oo("live"),
        stroke: Me === "lasso_fill" ? Lp(be, Me, [Re], Qe) : Dp(be, Me, [Re], Qe)
      }, po();
      const ut = Jn(u.interaction);
      if (ut)
        if (u.paintEngine.beginStroke(u.interaction.stroke, ut), u.interaction.kind === "paint_stroke") {
          const rt = u.paintEngine.ensureTarget(ut), At = Number((Re == null ? void 0 : Re.u) ?? (Re == null ? void 0 : Re.x) ?? 0), gt = Number((Re == null ? void 0 : Re.v) ?? (Re == null ? void 0 : Re.y) ?? 0);
          u.paintEngine.appendStrokePoint(rt, At, gt, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, ut);
      Et(d), $.setPointerCapture(l.pointerId), We();
      return;
    }
    const R = Ni(), Z = Mn(), ee = R.length > 1 ? ys(R) : Z ? pn(Z) : null;
    if (u.primaryTool === "cursor" && (l.ctrlKey || l.metaKey)) {
      u.interaction = { kind: "marquee_select", start: d, current: d }, Et(d), $.setPointerCapture(l.pointerId), We({ localOnly: !0, reason: Nt.OVERLAY });
      return;
    }
    if (u.primaryTool === "cursor" && hs() && li() && N1(l, d) || u.primaryTool === "cursor" && S && la() && Tv(l, d)) return;
    if (R.length > 1 && (ee != null && ee.visible)) {
      if ((R.some((Me) => dr(Me)) ? { kind: "none" } : ba(ee, d)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: R.map((Me) => Me),
          offset: { x: d.x - ee.center.x, y: d.y - ee.center.y },
          startCenter: { x: ee.center.x, y: ee.center.y },
          stickerSnapshots: R.filter((Me) => fn(Me)).map((Me) => ({
            id: String(Me.id || ""),
            yaw_deg: Number(Nn(Me).yaw_deg || 0),
            pitch_deg: Number(Nn(Me).pitch_deg || 0),
            center: (() => {
              var Qe, Re;
              const $e = pn(Me);
              return $e != null && $e.visible ? { x: Number(((Qe = $e.center) == null ? void 0 : Qe.x) || 0), y: Number(((Re = $e.center) == null ? void 0 : Re.y) || 0) } : { x: d.x, y: d.y };
            })()
          })),
          strokeSnapshots: R.filter((Me) => Zn(Me)).map((Me) => ({
            id: String(Me.actionGroupId || Me.id || ""),
            layerKind: String(Me.layerKind || "paint"),
            snapshot: yn(uo(Me.actionGroupId, Me.layerKind)),
            frameSnapshot: yn(so(Me.actionGroupId, Me.layerKind)),
            center: (() => {
              var Qe, Re;
              const $e = pn(Me);
              return $e != null && $e.visible ? { x: Number(((Qe = $e.center) == null ? void 0 : Qe.x) || 0), y: Number(((Re = $e.center) == null ? void 0 : Re.y) || 0) } : { x: d.x, y: d.y };
            })(),
            centerUv: e1(Me.actionGroupId, Me.layerKind)
          })),
          rasterSnapshots: R.filter((Me) => jr(Me)).map((Me) => ({
            id: Pi(Me.rasterObjectId || Me.id || ""),
            snapshot: yn(zr().find(($e) => String(($e == null ? void 0 : $e.id) || "") === Pi(Me.rasterObjectId || Me.id || ""))),
            center: (() => {
              var Qe, Re;
              const $e = pn(Me);
              return $e != null && $e.visible ? { x: Number(((Qe = $e.center) == null ? void 0 : Qe.x) || 0), y: Number(((Re = $e.center) == null ? void 0 : Re.y) || 0) } : { x: d.x, y: d.y };
            })(),
            centerUv: Yb(Me)
          }))
        }, Et(d), $.setPointerCapture(l.pointerId);
        return;
      }
    } else if (Z && (ee != null && ee.visible)) {
      const be = dr(Z) ? { kind: "none" } : ba(ee, d, Z);
      if (be.kind === "scale") {
        u.interaction = Zn(Z) ? {
          kind: "scale_stroke_group",
          item: Z,
          center: ee.center,
          startDist: Math.max(1, Math.hypot(d.x - ee.center.x, d.y - ee.center.y)),
          snapshot: yn(uo(Z.actionGroupId, Z.layerKind)),
          frameSnapshot: yn(so(Z.actionGroupId, Z.layerKind)),
          cursor: be.cursor
        } : jr(Z) ? {
          kind: "scale_raster_object",
          item: Z,
          center: ee.center,
          startDist: Math.max(1, Math.hypot(d.x - ee.center.x, d.y - ee.center.y)),
          snapshot: yn(zr().find((Me) => String((Me == null ? void 0 : Me.id) || "") === Pi(Z.rasterObjectId || Z.id || ""))),
          cursor: be.cursor
        } : {
          kind: "scale",
          item: Z,
          center: ee.center,
          startDist: Math.max(1, Math.hypot(d.x - ee.center.x, d.y - ee.center.y)),
          startHFOV: Number(Nn(Z).hFOV_deg || 20),
          startVFOV: Number(Nn(Z).vFOV_deg || 20),
          cursor: be.cursor
        }, Et(d), $.setPointerCapture(l.pointerId);
        return;
      }
      if (be.kind === "scale_x" || be.kind === "scale_y") {
        u.interaction = {
          kind: be.kind,
          item: Z,
          center: ee.center,
          startDist: Math.max(1, Math.hypot(d.x - ee.center.x, d.y - ee.center.y)),
          startHFOV: Number(Nn(Z).hFOV_deg || 20),
          startVFOV: Number(Nn(Z).vFOV_deg || 20),
          cursor: be.cursor,
          edge: be.edge
        }, Et(d), $.setPointerCapture(l.pointerId);
        return;
      }
      if (be.kind === "rotate") {
        u.interaction = Zn(Z) ? {
          kind: "rotate_stroke_group",
          item: Z,
          center: ee.center,
          startAng: Math.atan2(d.y - ee.center.y, d.x - ee.center.x),
          snapshot: yn(uo(Z.actionGroupId, Z.layerKind)),
          frameSnapshot: yn(so(Z.actionGroupId, Z.layerKind))
        } : {
          kind: "rotate",
          item: Z,
          center: ee.center,
          startRot: Number(Nn(Z).rot_deg || Nn(Z).roll_deg || 0),
          startAng: Math.atan2(d.y - ee.center.y, d.x - ee.center.x)
        }, Et(d), $.setPointerCapture(l.pointerId);
        return;
      }
      if (be.kind === "move") {
        if (Zn(Z)) {
          const Me = u.mode === "frame" ? (() => {
            const $e = dt();
            return $e ? fr(d, $e, performance.now()) : null;
          })() : wr(d, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: Z,
            startUv: Me,
            snapshot: yn(uo(Z.actionGroupId, Z.layerKind)),
            frameSnapshot: yn(so(Z.actionGroupId, Z.layerKind))
          }, Et(d), $.setPointerCapture(l.pointerId);
          return;
        }
        if (jr(Z)) {
          const Me = u.mode === "frame" ? (() => {
            const $e = dt();
            return $e ? fr(d, $e, performance.now()) : null;
          })() : wr(d, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: Z,
            startUv: Me,
            snapshot: yn(zr().find(($e) => String(($e == null ? void 0 : $e.id) || "") === Pi(Z.rasterObjectId || Z.id || "")))
          }, Et(d), $.setPointerCapture(l.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: Z,
          offset: { x: d.x - ee.center.x, y: d.y - ee.center.y }
        }, Et(d), $.setPointerCapture(l.pointerId);
        return;
      }
    }
    const ae = Rp(d);
    if (ae) {
      const be = u.selectedId !== ae.item.id;
      if (be && u.selectedId && (vt(), Gn()), Hn(ae.item), V && be && (u.cutoutAspectOpen = !1), be && it(), ct(), We(), dr(ae.item)) {
        Et(d);
        return;
      }
      u.interaction = {
        kind: Zn(ae.item) ? "move_stroke_group" : jr(ae.item) ? "move_raster_object" : "move",
        item: ae.item,
        offset: { x: d.x - ae.geom.center.x, y: d.y - ae.geom.center.y },
        startUv: Zn(ae.item) || jr(ae.item) ? u.mode === "frame" ? (() => {
          const Me = dt();
          return Me ? fr(d, Me, performance.now()) : null;
        })() : wr(d, performance.now()) : null,
        snapshot: Zn(ae.item) ? yn(uo(ae.item.actionGroupId, ae.item.layerKind)) : jr(ae.item) ? yn(zr().find((Me) => String((Me == null ? void 0 : Me.id) || "") === Pi(ae.item.rasterObjectId || ae.item.id || ""))) : null,
        frameSnapshot: Zn(ae.item) ? yn(so(ae.item.actionGroupId, ae.item.layerKind)) : null
      }, Et(d), $.setPointerCapture(l.pointerId);
      return;
    }
    const He = !!u.selectedId;
    He && (vt(), Gn()), oa(), He && it(), ct(), We(), u.mode === "pano" && Gp(l, d);
  }
  $.onpointerdown = Fv;
  function Fi(l, d) {
    return Ke.gizmoPointer(l, aa(), d.x, d.y, $.width, $.height);
  }
  function Tv(l, d) {
    var ee;
    const g = (ee = gs().space) == null ? void 0 : ee.gizmo;
    if (g && Fi("hover", d) !== null && Fi("down", d))
      return u.interaction = {
        kind: "world_gizmo",
        id: u.worldSelectedId,
        mode: g.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: g.transform,
        base: to(ca(), u.frame),
        changed: !1
      }, $.setPointerCapture(l.pointerId), Et(d), !0;
    const k = Ni(), N = Mn(), R = k.length > 1 ? k.some((ae) => dr(ae)) ? "none" : ba(ys(k), d).kind : N && !dr(N) ? ba(pn(N), d, N).kind : "none";
    if (R !== "none" && R !== "move") return !1;
    const Z = Ke.pickSticker(aa(), d.x, d.y, $.width, $.height);
    return y.stickers.some((ae) => ae.id === Z && ae.placement === "world") ? (u.worldSelectedId !== Z && (u.selectedId && (vt(), Gn()), Pc(Z), it(), ct(), Ii(), We()), u.interaction = { kind: "world_select" }, $.setPointerCapture(l.pointerId), !0) : !1;
  }
  function jp(l) {
    var k;
    const g = !!(u.worldSelectedId || ho()) && u.primaryTool === "cursor" && la() && !!((k = gs().space) != null && k.gizmo) ? Fi("hover", l) : null;
    g !== u.gizmoAxis && (u.gizmoAxis = g, ve.backgroundDirty = !0, We({ localOnly: !0, reason: Nt.VIEW }));
  }
  function Dv(l, d) {
    const g = Fi("move", d);
    if (g && l.camera) {
      for (const [N, R] of Object.entries(hm(l.mode, l.base, l.start, g))) Sn(y.camera, N, u.frame, R);
      er(), l.changed = !0, Be.request("sidePanel"), We({ localOnly: !0 });
      return;
    }
    const k = y.stickers.find((N) => N.id === l.id);
    !g || !k || (Ak(k, u.frame, hm(l.mode, l.base, l.start, g)), l.changed = !0, dn(), Be.request("sidePanel"), We({ localOnly: !0 }));
  }
  function Hp(l) {
    u.interaction = null, u.gizmoAxis = null, l.kind === "world_gizmo" && (Fi("up", u.pointerPos), ve.backgroundDirty = !0, l.changed && (vt(), Pt(), it())), Et(u.pointerPos), We();
  }
  function Gp(l, d) {
    if (li()) {
      const k = Cc().emptyLeft;
      k && ep(k, d, l.pointerId);
      return;
    }
    const g = Ss(l);
    u.interaction = { kind: "view", last: g, lastTs: performance.now() }, It.startDrag(g.x, g.y, l.pointerId, performance.now()), Et(d), $.setPointerCapture(l.pointerId);
  }
  function Lv(l, d) {
    if (!v || !Qn.playing || (Qn.stop(), l.kind === "frame_pan")) return;
    if (l.kind === "frame_orbit") {
      const N = ma();
      N && (l.pivot = Cp(N, ga(N), d));
      return;
    }
    if (l.kind === "world_gizmo") {
      const N = y.stickers.find((R) => R.id === l.id);
      l.camera ? l.base = _c() : N && (l.base = to(N, u.frame));
      return;
    }
    if (l.kind === "move_multi") {
      const N = ys(l.items);
      if (!(N != null && N.visible)) return;
      l.offset = { x: d.x - N.center.x, y: d.y - N.center.y }, l.startCenter = { x: N.center.x, y: N.center.y };
      for (const R of l.stickerSnapshots) {
        const Z = l.items.find((ae) => String((ae == null ? void 0 : ae.id) || "") === R.id), ee = Z ? pn(Z) : null;
        ee != null && ee.visible && (R.yaw_deg = Number(Nn(Z).yaw_deg || 0), R.pitch_deg = Number(Nn(Z).pitch_deg || 0), R.center = { x: ee.center.x, y: ee.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(l.kind)) return;
    const g = pn(l.item);
    if (!(g != null && g.visible)) return;
    const k = Nn(l.item);
    if (l.kind === "move") {
      l.offset = { x: d.x - g.center.x, y: d.y - g.center.y };
      return;
    }
    if (l.center = g.center, l.kind === "rotate") {
      l.startRot = Number(k.rot_deg || k.roll_deg || 0), l.startAng = Math.atan2(d.y - g.center.y, d.x - g.center.x);
      return;
    }
    l.startDist = Math.max(1, Math.hypot(d.x - g.center.x, d.y - g.center.y)), l.startHFOV = Number(k.hFOV_deg || 20), l.startVFOV = Number(k.vFOV_deg || 20);
  }
  function Rv(l) {
    var k, N, R, Z, ee, ae, He, be, Me, $e, Qe, Re, ut, rt, At, gt, St, Ft, gn, Ti, Di, Ze;
    const d = di(l);
    if (Cs(d, !0), !u.interaction) {
      jp(d), Et(d);
      return;
    }
    Et(d);
    const g = u.interaction;
    if (x && (d.x !== x.x || d.y !== x.y)) {
      const Ue = x;
      x = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(g.kind) || Lv(g, Ue);
    }
    if (g.kind !== "world_select") {
      if (g.kind === "world_gizmo") {
        Dv(g, d);
        return;
      }
      if (g.kind === "paint_stroke") {
        const Ue = typeof l.getCoalescedEvents == "function" ? l.getCoalescedEvents() : [l];
        let et = !1;
        Ue.forEach((at) => {
          const ot = di(at);
          if (u.mode === "frame") {
            const Ct = dt(), kt = Ct ? Wr(Ct) : null;
            if (kt) {
              const Wt = (ot.x - kt.x) / Math.max(1, kt.w), Mt = (ot.y - kt.y) / Math.max(1, kt.h);
              if (!(Wt >= 0 && Wt <= 1 && Mt >= 0 && Mt <= 1)) {
                g._outOfFrame = !0;
                return;
              }
              g._outOfFrame && (g._outOfFrame = !1, _v(g));
            }
          }
          yv(g, ot, performance.now()) && (et = !0);
        }), et && We({ localOnly: !0, reason: Nt.PAINT });
        return;
      }
      if (g.kind === "paint_lasso_fill") {
        const Ue = typeof l.getCoalescedEvents == "function" ? l.getCoalescedEvents() : [l];
        let et = !1;
        if (Ue.forEach((at) => {
          const ot = di(at);
          if (u.mode === "frame") {
            const Ct = dt(), kt = Ct ? Wr(Ct) : null;
            if (kt) {
              const Wt = (ot.x - kt.x) / Math.max(1, kt.w), Mt = (ot.y - kt.y) / Math.max(1, kt.h);
              if (!(Wt >= 0 && Wt <= 1 && Mt >= 0 && Mt <= 1)) {
                g._outOfFrame = !0;
                return;
              }
              g._outOfFrame && (g._outOfFrame = !1, Sv(g));
            }
          }
          bv(g, ot, performance.now()) && (et = !0);
        }), et) {
          const at = Jn(g);
          at && u.paintEngine.updateActiveStroke(g.stroke, at), We({ localOnly: !0, reason: Nt.PAINT });
        }
        return;
      }
      if (g.kind === "view") {
        const Ue = performance.now(), et = u.mode === "unwrap" ? d : Ss(l);
        It.moveDrag(et.x, et.y, u.mode === "unwrap" ? "unwrap" : "pano", Ue), g.lastTs = Ue, g.last = et, We({ localOnly: !0, reason: Nt.VIEW });
        return;
      }
      if (g.kind === "frame_pan" || g.kind === "frame_orbit") {
        uv(g, d);
        return;
      }
      if (g.kind === "space_pan" || g.kind === "space_orbit") {
        const Ue = Ai();
        h1(g.kind === "space_pan" ? dm(Ue, d.x - g.last.x, d.y - g.last.y, $.width, $.height, g.depth) : um(Ue, d.x - g.last.x, d.y - g.last.y, $.height, g.pivot)), g.last = d;
        return;
      }
      if (g.kind === "pan_frame") {
        const Ue = As(g.shot);
        if (!Ue || !g.shot) return;
        const et = d.x - g.last.x, at = d.y - g.last.y, ot = Uy(g.shot, {
          dx: et,
          dy: at,
          focalPx: Ue.focalPx,
          invertX: ((k = y.ui_settings) == null ? void 0 : k.invert_view_x) === !0,
          invertY: ((N = y.ui_settings) == null ? void 0 : N.invert_view_y) === !0
        });
        g.shot.yaw_deg = ot.yaw_deg, g.shot.pitch_deg = ot.pitch_deg, g.changed = g.changed || Math.abs(et) > 0 || Math.abs(at) > 0, g.last = d, We({ localOnly: !0 });
        return;
      }
      if (g.kind === "roll_frame") {
        if (g.source === "knob") return;
        Av(g, d, l);
        return;
      }
      if (g.kind === "move") {
        const Ue = d.x - g.offset.x, et = d.y - g.offset.y;
        if (u.mode === "frame" && V) {
          const at = dt(), ot = Wr(at);
          if (!at || !ot) return;
          const Ct = {
            x: Ee((Ue - ot.x) / Math.max(1, ot.w), 0, 1),
            y: Ee((et - ot.y) / Math.max(1, ot.h), 0, 1)
          }, kt = jf(at, Ct);
          if (!kt) return;
          const Wt = Us(kt);
          pr(g.item, { yaw_deg: Wt.yaw, pitch_deg: Wt.pitch });
        } else if (u.mode === "unwrap") {
          const at = xc(), ot = Ee((Ue - at.x) / Math.max(at.w, 1), 0, 1), Ct = Ee((et - at.y) / Math.max(at.h, 1), 0, 1);
          pr(g.item, { yaw_deg: Kt(ot * 360 - 180), pitch_deg: Ee(90 - Ct * 180, -90, 90) });
        } else {
          const at = Qf(Ue, et), ot = Us(at);
          pr(g.item, { yaw_deg: ot.yaw, pitch_deg: ot.pitch });
        }
        fn(g.item) && dn(), We({ localOnly: !0 });
        return;
      }
      if (g.kind === "move_stroke_group") {
        const Ue = u.mode === "frame" ? (() => {
          const ot = dt();
          return ot ? fr(d, ot, performance.now()) : null;
        })() : wr(d, performance.now());
        if (!Ue || !g.startUv) return;
        const et = ws(Number(Ue.u || 0), Number(g.startUv.u || 0)), at = Number(Ue.v || 0) - Number(g.startUv.v || 0);
        ki((R = g.item) == null ? void 0 : R.actionGroupId, et, at, g.snapshot, (Z = g.item) == null ? void 0 : Z.layerKind, g.frameSnapshot) && (Sr({ rebuildPaintEngine: !1 }), We({ localOnly: !0, reason: Nt.PAINT }));
        return;
      }
      if (g.kind === "move_raster_object") {
        const Ue = u.mode === "frame" ? (() => {
          const ot = dt();
          return ot ? fr(d, ot, performance.now()) : null;
        })() : wr(d, performance.now());
        if (!Ue || !g.startUv) return;
        const et = ws(Number(Ue.u || 0), Number(g.startUv.u || 0)), at = Number(Ue.v || 0) - Number(g.startUv.v || 0);
        cn(((ee = g.item) == null ? void 0 : ee.rasterObjectId) || ((ae = g.item) == null ? void 0 : ae.id) || "", et, at, g.snapshot) && (mo(), We({ localOnly: !0, reason: Nt.PAINT }));
        return;
      }
      if (g.kind === "scale_raster_object") {
        const et = Math.max(1, Math.hypot(d.x - g.center.x, d.y - g.center.y)) / Math.max(1, Number(g.startDist || 1));
        on(((He = g.item) == null ? void 0 : He.rasterObjectId) || ((be = g.item) == null ? void 0 : be.id) || "", et, g.snapshot) && (mo(), We({ localOnly: !0, reason: Nt.PAINT }));
        return;
      }
      if (g.kind === "move_multi") {
        const Ue = d.x - Number(((Me = g.offset) == null ? void 0 : Me.x) || 0), et = d.y - Number((($e = g.offset) == null ? void 0 : $e.y) || 0);
        let at = !1, ot = !1, Ct = !1;
        const kt = Ue - Number(((Qe = g.startCenter) == null ? void 0 : Qe.x) || Ue), Wt = et - Number(((Re = g.startCenter) == null ? void 0 : Re.y) || et);
        for (const Mt of Array.isArray(g.stickerSnapshots) ? g.stickerSnapshots : []) {
          const nn = (t === "cutout" ? Kb() : lo()).find((qt) => String((qt == null ? void 0 : qt.id) || "") === String(Mt.id || ""));
          if (!nn || !fn(nn)) continue;
          const On = {
            x: Number(((ut = Mt.center) == null ? void 0 : ut.x) || 0) + kt,
            y: Number(((rt = Mt.center) == null ? void 0 : rt.y) || 0) + Wt
          };
          if (u.mode === "frame" && V) {
            const qt = dt(), an = Wr(qt);
            if (!qt || !an) continue;
            const Li = {
              x: Ee((On.x - an.x) / Math.max(1, an.w), 0, 1),
              y: Ee((On.y - an.y) / Math.max(1, an.h), 0, 1)
            }, dh = jf(qt, Li);
            if (!dh) continue;
            const fh = Us(dh);
            pr(nn, { yaw_deg: fh.yaw, pitch_deg: fh.pitch });
          } else if (u.mode === "unwrap") {
            const qt = xc(), an = Ee((On.x - qt.x) / Math.max(qt.w, 1), 0, 1), Li = Ee((On.y - qt.y) / Math.max(qt.h, 1), 0, 1);
            pr(nn, { yaw_deg: Kt(an * 360 - 180), pitch_deg: Ee(90 - Li * 180, -90, 90) });
          } else {
            const qt = Qf(On.x, On.y), an = Us(qt);
            pr(nn, { yaw_deg: an.yaw, pitch_deg: an.pitch });
          }
          at = !0;
        }
        for (const Mt of Array.isArray(g.strokeSnapshots) ? g.strokeSnapshots : []) {
          const nn = {
            x: Number(((At = Mt.center) == null ? void 0 : At.x) || 0) + kt,
            y: Number(((gt = Mt.center) == null ? void 0 : gt.y) || 0) + Wt
          }, On = u.mode === "frame" ? (() => {
            const an = dt();
            return an ? fr(nn, an, performance.now()) : null;
          })() : wr(nn, performance.now()), qt = Mt.centerUv || null;
          if (On && qt) {
            const an = ws(Number(On.u || 0), Number(qt.u || 0)), Li = Number(On.v || 0) - Number(qt.v || 0);
            ki(Mt.id, an, Li, Mt.snapshot, Mt.layerKind, Mt.frameSnapshot) && (at = !0, ot = !0);
          }
        }
        for (const Mt of Array.isArray(g.rasterSnapshots) ? g.rasterSnapshots : []) {
          const nn = {
            x: Number(((St = Mt.center) == null ? void 0 : St.x) || 0) + kt,
            y: Number(((Ft = Mt.center) == null ? void 0 : Ft.y) || 0) + Wt
          }, On = u.mode === "frame" ? (() => {
            const an = dt();
            return an ? fr(nn, an, performance.now()) : null;
          })() : wr(nn, performance.now()), qt = Mt.centerUv || null;
          if (On && qt) {
            const an = ws(Number(On.u || 0), Number(qt.u || 0)), Li = Number(On.v || 0) - Number(qt.v || 0);
            cn(Mt.id, an, Li, Mt.snapshot) && (at = !0, Ct = !0);
          }
        }
        at && (ot ? Sr({ rebuildPaintEngine: !1 }) : Ct ? mo() : dn(), We({ localOnly: !0 }));
        return;
      }
      if (g.kind === "scale_stroke_group") {
        const et = Math.max(1, Math.hypot(d.x - g.center.x, d.y - g.center.y)) / Math.max(1, Number(g.startDist || 1));
        ra((gn = g.item) == null ? void 0 : gn.actionGroupId, et, 0, g.snapshot, (Ti = g.item) == null ? void 0 : Ti.layerKind, g.frameSnapshot) && (Sr({ rebuildPaintEngine: !1 }), We({ localOnly: !0, reason: Nt.PAINT }));
        return;
      }
      if (g.kind === "rotate_stroke_group") {
        let Ue = (Math.atan2(d.y - g.center.y, d.x - g.center.x) - Number(g.startAng || 0)) * Xi;
        l.shiftKey && (Ue = Math.round(Ue / 45) * 45), ra((Di = g.item) == null ? void 0 : Di.actionGroupId, 1, Ue, g.snapshot, (Ze = g.item) == null ? void 0 : Ze.layerKind, g.frameSnapshot) && (Sr({ rebuildPaintEngine: !1 }), We({ localOnly: !0, reason: Nt.PAINT }));
        return;
      }
      if (g.kind === "marquee_select") {
        g.current = d, We({ localOnly: !0, reason: Nt.OVERLAY });
        return;
      }
      if (g.kind === "scale") {
        const et = Math.max(1, Math.hypot(d.x - g.center.x, d.y - g.center.y)) / g.startDist;
        pr(g.item, { hFOV_deg: Ee(g.startHFOV * et, 1, 179), vFOV_deg: Ee(g.startVFOV * et, 1, 179) }), ci(g.item) || (g.item.aspect_id = Ui(g.item)), fn(g.item) && dn(), We({ localOnly: !0 });
        return;
      }
      if (g.kind === "scale_x") {
        const et = Math.max(1, Math.hypot(d.x - g.center.x, d.y - g.center.y)) / g.startDist;
        pr(g.item, { hFOV_deg: Ee(g.startHFOV * et, 1, 179) }), ci(g.item) || (g.item.aspect_id = Ui(g.item)), fn(g.item) && dn(), We({ localOnly: !0 });
        return;
      }
      if (g.kind === "scale_y") {
        const et = Math.max(1, Math.hypot(d.x - g.center.x, d.y - g.center.y)) / g.startDist;
        pr(g.item, { vFOV_deg: Ee(g.startVFOV * et, 1, 179) }), ci(g.item) || (g.item.aspect_id = Ui(g.item)), fn(g.item) && dn(), We({ localOnly: !0 });
        return;
      }
      if (g.kind === "rotate") {
        let et = (Math.atan2(d.y - g.center.y, d.x - g.center.x) - g.startAng) * Xi, at = g.startRot - et;
        l.shiftKey && (at = Math.round(at / 45) * 45), pr(g.item, { [fn(g.item) ? "rot_deg" : "roll_deg"]: at }), fn(g.item) && dn(), We({ localOnly: !0 });
      }
    }
  }
  $.onpointermove = Rv;
  function Vv() {
    var d, g, k, N, R, Z, ee;
    const l = u.interaction;
    if (!((l == null ? void 0 : l.kind) === "roll_frame" && l.source === "knob")) {
      if ((l == null ? void 0 : l.kind) === "space_pan" || (l == null ? void 0 : l.kind) === "space_orbit") {
        u.interaction = null, Et(u.pointerPos), ct();
        return;
      }
      if ((l == null ? void 0 : l.kind) === "world_select" || (l == null ? void 0 : l.kind) === "world_gizmo") {
        Hp(l);
        return;
      }
      if (((d = u.interaction) == null ? void 0 : d.kind) === "paint_stroke" || ((g = u.interaction) == null ? void 0 : g.kind) === "paint_lasso_fill") {
        po();
        const ae = jc(u.interaction), He = !!u.interaction._hasCommittedSegments;
        if (ae || He) {
          Sr();
          const be = String(((k = u.interaction.stroke) == null ? void 0 : k.actionGroupId) || "").trim();
          if (be) {
            const $e = co().find((Qe) => String((Qe == null ? void 0 : Qe.actionGroupId) || "") === be);
            $e && ($e.frame = null);
          }
          const Me = Jn(u.interaction);
          Me && (ae ? String(((N = u.interaction.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(Me), c1()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, Me) : u.paintEngine.cancelActiveStroke(Me)), vt(), Gn(), it(), ct(), e.setDirtyCanvas(!0, !0), We();
        } else {
          const be = Jn(u.interaction);
          be && u.paintEngine.cancelActiveStroke(be);
        }
      } else if (((R = u.interaction) == null ? void 0 : R.kind) === "marquee_select") {
        const ae = Vp(u.interaction.start, u.interaction.current), be = [
          ...t === "cutout" ? Sc().filter((Me) => !ui(Me)) : [...lo()],
          ...qb(),
          ...Xb()
        ].filter((Me) => xv(ae, pn(Me)));
        f1(be, ((Z = be[be.length - 1]) == null ? void 0 : Z.id) || null), V && be.length && (u.cutoutAspectOpen = !1), it(), ct(), We();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((ee = u.interaction) == null ? void 0 : ee.kind))
        u.interaction.changed && (vt(), Pt(), it());
      else if (u.interaction && u.interaction.kind !== "view") {
        let ae = !1;
        (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (ae = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (ae = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (ae = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (ae = !0), ae && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? Sr({ rebuildPaintEngine: !0 }) : mo()), vt(), Gn(), e.setDirtyCanvas(!0, !0), vo(), ct(), We();
      }
      u.interaction = null, (l == null ? void 0 : l.kind) === "roll_frame" && Oi(), po(), l && l.kind === "view" && da(() => It.endDrag(performance.now())), Hr(), ct(), Et(u.pointerPos), We();
    }
  }
  $.onpointerup = Vv;
  function $v() {
    var l, d, g, k, N;
    if (!ya()) {
      if (((l = u.interaction) == null ? void 0 : l.kind) === "world_select" || ((d = u.interaction) == null ? void 0 : d.kind) === "world_gizmo") {
        Hp(u.interaction);
        return;
      }
      if (((g = u.interaction) == null ? void 0 : g.kind) === "view" && da(() => It.endDrag(performance.now())), ((k = u.interaction) == null ? void 0 : k.kind) === "paint_stroke" || ((N = u.interaction) == null ? void 0 : N.kind) === "paint_lasso_fill") {
        po();
        const R = Jn(u.interaction);
        R && u.paintEngine.cancelActiveStroke(R);
      }
      u.interaction = null, po(), Hr(), Et(u.pointerPos), We({ localOnly: !0 });
    }
  }
  $.onpointercancel = $v, $.onlostpointercapture = () => {
    ya();
  }, $.onauxclick = (l) => {
    l.button === 1 && l.preventDefault();
  }, $.oncontextmenu = (l) => {
    (li() || zc()) && $N(Cc(), 2) && l.preventDefault();
  };
  function zv(l) {
    const d = di(l), g = Cs(d, !0);
    u.interaction || (Et(d), g && u.mode === "frame" && u.primaryTool === "cursor" && We({ localOnly: !0, reason: Nt.OVERLAY }));
  }
  $.onmousemove = zv, $.onpointerleave = () => {
    u.interaction || jp({ x: -1e6, y: -1e6 });
  }, $.onmouseleave = () => {
    Cs(u.pointerPos, !1), Et(u.pointerPos), u.mode === "frame" && u.primaryTool === "cursor" && We({ localOnly: !0, reason: Nt.OVERLAY });
  };
  function jv(l) {
    if (u.mode === "frame") {
      const d = di(l), g = Pl(l);
      g && hn(), g && zc() ? dv(d, -g) : g && lv(d, g) && We({ localOnly: !0 }), l.preventDefault();
      return;
    }
    if (u.mode === "pano") {
      if (bc(), li()) {
        const d = Pl(l);
        d && w1(di(l), -d);
      } else It.applyWheelEvent(l) && We({ localOnly: !0, reason: Nt.VIEW });
      l.preventDefault();
    }
  }
  $.onwheel = jv;
  function Hv(l) {
    t !== "stickers" && t !== "cutout" || n || (l.preventDefault(), Ci(!0));
  }
  $.ondragover = Hv;
  function Gv(l) {
    var k;
    if (t !== "stickers" && t !== "cutout" || n) return;
    l.preventDefault(), l.stopPropagation(), Ot.depth = 0, Ci(!1);
    const g = Array.from(((k = l.dataTransfer) == null ? void 0 : k.files) || []).find((N) => mr(N));
    g && gp(g);
  }
  $.ondrop = Gv;
  function Wp(l) {
    t !== "stickers" && t !== "cutout" || n || Ec(l) && (Ot.depth += 1, Ci(!0), l.preventDefault());
  }
  function Kp(l) {
    t !== "stickers" && t !== "cutout" || n || (!Ot.active && Ec(l) && Ci(!0), Ot.active && l.preventDefault());
  }
  function Bp(l) {
    if (t !== "stickers" && t !== "cutout" || n || !Ot.active) return;
    Ot.depth = Math.max(0, Ot.depth - 1);
    const d = Number(l.clientX) <= 0 && Number(l.clientY) <= 0;
    (Ot.depth === 0 || d) && Ci(!1);
  }
  function Up(l) {
    t !== "stickers" && t !== "cutout" || n || (Ot.depth = 0, Ci(!1), Ec(l) && l.preventDefault());
  }
  window.addEventListener("dragenter", Wp, !0), window.addEventListener("dragover", Kp, !0), window.addEventListener("dragleave", Bp, !0), window.addEventListener("drop", Up, !0);
  function Yp() {
    const { canUndo: l, canRedo: d } = Gf();
    Mo(I.toolButtons, "value", "undo", { disabled: !l }), Mo(I.toolButtons, "value", "redo", { disabled: !d });
  }
  function Xp(l, d, g = !1) {
    var He;
    hn();
    const k = V && u.mode === "frame" ? dt() : null, N = k || Mn(), R = k ? "shot" : vs(), Z = ca();
    if (Z && !Ic(Z) || !Z && (!N || R === "stroke" || dr(N))) return;
    const ee = (((He = I.sidePanel) == null ? void 0 : He.params) || []).find((be) => be.key === l);
    if (!ee || ee.enabled === !1) return;
    let ae = Number(d);
    if (Number.isNaN(ae) && (ae = 0), (Z || W) && BI.has(l) ? ae = l === "scale" ? Math.max(ae, qm) : ae : ae = Ee(ae, Number(ee.min), Number(ee.max)), l === "yaw_deg" && (ae = Kt(ae)), !Z && W && l.startsWith("position_")) {
      er(), kk(y.camera, u.frame, l, ae), it(), We(), g && vt();
      return;
    }
    if (Z) {
      Pk(Z, u.frame, l, ae), dn(), it(), We(), g && vt();
      return;
    }
    l === "opacity" ? Mk(N, u.frame, ae / 100) : pr(N, { [l]: ae }), V && !ci(N) && (l === "hFOV_deg" || l === "vFOV_deg") && (N.aspect_id = Ui(N)), it(), We(), g && vt();
  }
  async function Wv(l) {
    var k, N, R, Z, ee, ae, He;
    const d = l.target.closest("[data-action]");
    if (!d) return;
    const g = String(d.getAttribute("data-action") || "");
    if (g === "coverage-set") {
      const be = Rn(d.getAttribute("data-coverage"));
      if (be === Rn(y.coverage)) return;
      y.coverage = be, u.coverage = be, c && (c.value = String(be)), o ? ve.backgroundDirty = !0 : (Gn(), av({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), it(), ct(), We();
      return;
    }
    if (g === "toggle-selection-picker") {
      if ((N = (k = I.sidePanel) == null ? void 0 : k.selectionPicker) != null && N.disabled) return;
      I.sidePanel.selectionPicker.open = !I.sidePanel.selectionPicker.open;
      return;
    }
    if (g === "select-picker-item") {
      I.sidePanel.selectionPicker.open = !1;
      const be = String(d.getAttribute("data-selection-id") || "");
      let Me = null;
      if (be && (t === "stickers" ? Me = [...lo(), ...P ? y.shots : []].find(($e) => String(($e == null ? void 0 : $e.id) || "") === be) || null : Me = ((R = Hf().find(($e) => {
        var Qe;
        return String(((Qe = $e == null ? void 0 : $e.item) == null ? void 0 : Qe.id) || "") === be;
      })) == null ? void 0 : R.item) || null), Hn(Me || null), Me && !Zn(Me)) {
        const $e = Nn(Me);
        ip(Kt(Number($e.yaw_deg || 0)), Ee(Number($e.pitch_deg || 0), -89.9, 89.9));
      }
      it(), ct(), We();
      return;
    }
    if (g === "copy-state-inline") {
      const be = Mn(), Me = vs();
      if (!be || Me === "stroke" || Ni().length > 1) return;
      const $e = JSON.stringify(V && Me !== "image" ? ia(be) : Mi(Nn(be)));
      try {
        await navigator.clipboard.writeText($e), (Z = I.sidePanel) != null && Z.copyStateButton && (I.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Qe;
          (Qe = I.sidePanel) != null && Qe.copyStateButton && (I.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (g === "set-invert-x") {
      y.ui_settings.invert_view_x = d.getAttribute("data-value") === "1", Vc(), it(), (ee = e.setDirtyCanvas) == null || ee.call(e, !0, !0), We();
      return;
    }
    if (g === "set-invert-y") {
      y.ui_settings.invert_view_y = d.getAttribute("data-value") === "1", Vc(), it(), (ae = e.setDirtyCanvas) == null || ae.call(e, !0, !0), We();
      return;
    }
    if (g === "ui-reset-defaults") {
      y.ui_settings.invert_view_x = !1, y.ui_settings.invert_view_y = !1, Vc(), it(), (He = e.setDirtyCanvas) == null || He.call(e, !0, !0), We();
      return;
    }
    if (g === "close-preview") {
      So();
      return;
    }
    if (g === "cancel-close") {
      So();
      return;
    }
    g === "save-close" && (iv(), So());
  }
  me == null || me.addEventListener("click", Wv);
  function Kv(l) {
    const d = l.target.closest("[data-action='param-input']");
    d && Xp(String(d.getAttribute("data-param-key") || ""), d.value, !1);
  }
  me == null || me.addEventListener("input", Kv);
  function Bv(l) {
    const d = l.target.closest("[data-action='param-input']");
    d && Xp(String(d.getAttribute("data-param-key") || ""), d.value, !0);
  }
  me == null || me.addEventListener("change", Bv);
  const Gc = () => Ii();
  Gc();
  function Uv(l) {
    var He, be, Me, $e, Qe;
    if ((be = (He = l.target) == null ? void 0 : He.matches) != null && be.call(He, "[data-confirm-overlay]")) {
      const Re = (Me = I.confirmDialog) == null ? void 0 : Me.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Re == null || Re(!1);
      return;
    }
    const d = l.target.closest("[data-space-mode]");
    if (d) {
      p1(d.getAttribute("data-space-mode"));
      return;
    }
    const g = l.target.closest("[data-gizmo-mode]");
    if (g) {
      u.gizmoMode = g.getAttribute("data-gizmo-mode"), ve.backgroundDirty = !0, ct(), We({ localOnly: !0, reason: Nt.VIEW });
      return;
    }
    const k = l.target.closest("[data-view]");
    if (k) {
      if (k.getAttribute("aria-disabled") === "true") return;
      const Re = u.mode;
      u.mode = String(k.getAttribute("data-view") || "pano"), V && u.mode === "frame" && (Re !== "frame" && (ve.frameSafeRect = null), it(), ct()), ha(), Hr(), We();
      return;
    }
    const N = l.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (N && !n) {
      if (N.matches("[data-tool-mode]")) {
        const Re = String(N.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = Re, (Re === "paint" || Re === "mask") && oa({ preservePanelValues: !0 }), En(), it(), ct(), We();
        return;
      }
      if (N.matches("[data-tool-ui-action]")) {
        const Re = String(N.getAttribute("data-tool-ui-action") || "");
        if ((Re === "undo" || Re === "redo") && N.disabled) return;
        Re === "undo" ? Nc(-1) : Re === "redo" ? Nc(1) : Re === "clear" ? Z1() : Re === "add" || Re === "add-image" ? $1() : Re === "add-world" ? z1() : Re === "add-or-look" ? Y1() : Re === "add-camera" && X1();
        return;
      }
      if (N.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const Re = String(N.getAttribute("data-paint-tool") || "pen");
        u.paintTool = Re, oa({ preservePanelValues: !0 }), Ln[Re] && (u.activeBrushPresetId = Re), En(), it(), ct(), We();
        return;
      }
      if (N.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(N.getAttribute("data-mask-tool") || "pen"), oa({ preservePanelValues: !0 }), En(), it(), ct(), We();
        return;
      }
      if (N.matches("[data-paint-layer-clear-current]")) {
        const Re = String(N.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Q1(Re);
        return;
      }
      if (N.matches("[data-paint-color-swatch]")) {
        const Re = ml.find((ut) => ut.id === N.getAttribute("data-paint-color-swatch"));
        if (!Re) return;
        u.paintColor = Wn(Re.color), Oe(!0), En();
        return;
      }
      if (N.matches("[data-paint-color-custom]")) {
        l.preventDefault(), l.stopPropagation(), ie && !ie.hidden ? Oe(!0) : b(), En();
        return;
      }
    }
    const R = String((($e = N == null ? void 0 : N.getAttribute) == null ? void 0 : $e.call(N, "data-action")) || "");
    if (R === "video-play-toggle") {
      if (l.preventDefault(), l.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      ks.resumeAfterScrub = !1, Lc();
      return;
    }
    if (R === "video-audio-toggle") {
      l.preventDefault(), l.stopPropagation(), rp(), typeof (N == null ? void 0 : N.blur) == "function" && N.blur();
      return;
    }
    if (R === "video-loop-toggle") {
      if (l.preventDefault(), l.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      const Re = !I.videoTransport.loop;
      I.videoTransport.loop = Re, Ae.loop = Re, np({
        hasAudio: I.videoTransport.hasAudio,
        loop: Re,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? I.videoTransport.volume ?? 1)
      }), typeof (N == null ? void 0 : N.blur) == "function" && N.blur();
      return;
    }
    if (!n) {
      if (R === "frame-aspect") {
        I.frameRail.aspectOpen = !I.frameRail.aspectOpen;
        return;
      }
      if (R === "frame-aspect-set") {
        const Re = u.mode === "frame" ? dt() : null;
        if (!Re || Re.locked === !0) return;
        bp(Re, String(N.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, vo(), vt(), Pt(), Hr(), it(), ct(), We();
        return;
      }
      if (R === "frame-aspect-custom") {
        const Re = u.mode === "frame" ? dt() : null, ut = N.getAttribute("data-custom-width"), rt = N.getAttribute("data-custom-height");
        if (!Re || !rv(Re, ut, rt)) return;
        I.frameRail.aspectOpen = !1, vo(), vt(), Pt(), Hr(), We();
        return;
      }
      if (R === "frame-rotate-90") {
        const Re = u.mode === "frame" ? dt() : null;
        if (!Re || Re.locked === !0) return;
        Sp(Re), I.frameRail.aspectOpen = !1, vo(), vt(), Pt(), Hr(), We();
        return;
      }
      if (R === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, ct(), We();
        return;
      }
      if (R === "aspect-set") {
        const Re = Mn();
        if (!Re) return;
        const ut = String(N.getAttribute("data-aspect") || "1:1");
        bp(Re, ut), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, vo(), vt(), Pt(), ct(), We();
        return;
      }
      if (R === "rotate-90") {
        const Re = Mn();
        if (!Re || sa()) return;
        Sp(Re), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, vo(), vt(), Pt(), ct(), We();
        return;
      }
      if (R === "bring-front") {
        ps();
        return;
      }
      if (R === "send-back") {
        d1();
        return;
      }
      if (R === "duplicate") {
        ev();
        return;
      }
      if (R === "replace-image") {
        K1();
        return;
      }
      if (R === "toggle-lock") {
        _1();
        return;
      }
      if (R === "back-initial") {
        u1();
        return;
      }
      if (R === "toggle-visible") {
        v1();
        return;
      }
      if (R === "delete") {
        _p();
        return;
      }
    }
    if (R === "reset-view") {
      if (u.mode === "frame") return;
      xs(
        { position: g1(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Qe = vc()) == null ? void 0 : Qe.radius) || yr },
        { mode: hl(u.spaceMode, u.viewTransition), moved: !1 }
      );
      return;
    }
    if (R === "frame-view") {
      if (!li() || hl(u.spaceMode, u.viewTransition) !== "6dof") return;
      Gb();
      return;
    }
    if (R === "toggle-grid") {
      if (u.mode === "frame") return;
      u.showGrid = !u.showGrid, wE(e == null ? void 0 : e.id, u.showGrid), Gc(), We();
      return;
    }
    if (R === "toggle-fullscreen") {
      l.preventDefault(), l.stopPropagation(), e_();
      return;
    }
    if (R === "toggle-output-preview-size") {
      l.preventDefault(), l.stopPropagation();
      const Re = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = Re, da(() => {
        u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = Re ? 1 : 0, u.outputPreviewAnimStartTs = performance.now();
      }), eh(), We();
      return;
    }
    const Z = l.target.closest("[data-paint-history-index]");
    if (!Z) return;
    const ee = Number(Z.getAttribute("data-paint-history-index")), ae = u.customPaintHistory[ee];
    ae && (u.customPaintColor = Wn(ae), u.paintColor = Wn(ae), En());
  }
  F.addEventListener("click", Uv);
  function Yv(l) {
    const d = l.target.closest("[data-video-seek]");
    if (d) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      Qn.playing && (ks.resumeAfterScrub = !0), Qn.seek(Ki(Number(d.value || 0), a1()));
      return;
    }
    const g = l.target.closest("[data-video-volume]");
    if (g) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      const R = Ee(Number(g.value || 0), 0, 1);
      Ae.volume = R, Ae.muted = R <= 1e-4, np({
        hasAudio: I.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: R
      });
      return;
    }
    const k = l.target.closest("[data-paint-size-slider]");
    if (k) {
      if (k.disabled) return;
      const R = Math.max(1, Math.min(120, Math.round(Number(k.value)))), Z = Ei(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[Z] = R, En(), gv();
      return;
    }
    const N = l.target.closest("[data-paint-alpha-slider]");
    if (N) {
      const R = { ...u.customPaintColor, a: Ee(Number(N.value) / 100, 0, 1) };
      u.customPaintColor = Wn(R), u.paintColor = Wn(R), En();
    }
  }
  F.addEventListener("input", Yv);
  function Xv(l) {
    var d;
    if (l.target.closest("[data-video-seek]")) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      ks.resumeAfterScrub && Qn.play(), ks.resumeAfterScrub = !1;
      return;
    }
    if (l.target.closest("[data-video-volume]")) {
      typeof ((d = l.target) == null ? void 0 : d.blur) == "function" && l.target.blur();
      return;
    }
    l.target.closest("[data-paint-size-slider]") && Is();
  }
  F.addEventListener("change", Xv), F.addEventListener("pointerup", (l) => {
    var d;
    if (l.target.closest("[data-video-volume]")) {
      typeof ((d = l.target) == null ? void 0 : d.blur) == "function" && l.target.blur();
      return;
    }
    l.target.closest("[data-paint-size-slider]") && Is();
  }), F.addEventListener("pointercancel", (l) => {
    var d;
    if (l.target.closest("[data-video-volume]")) {
      typeof ((d = l.target) == null ? void 0 : d.blur) == "function" && l.target.blur();
      return;
    }
    l.target.closest("[data-paint-size-slider]") && Is();
  }), F.addEventListener("focusout", (l) => {
    l.target.closest("[data-paint-size-slider]") && Is();
  });
  function qv(l) {
    const d = l.target.closest("[data-tip]");
    !d || !F.contains(d) || bt.target !== d && (bt.target = d, bt.timer && clearTimeout(bt.timer), bt.timer = window.setTimeout(() => {
      bt.target === d && Nv(d);
    }, 220));
  }
  F.addEventListener("pointerover", qv);
  function Jv(l) {
    var k, N;
    const d = l.target.closest("[data-tip]");
    !d || bt.target !== d || (l.relatedTarget instanceof Element ? (N = (k = l.relatedTarget).closest) == null ? void 0 : N.call(k, "[data-tip]") : null) === d || Oi();
  }
  F.addEventListener("pointerout", Jv), F.addEventListener("pointerdown", (l) => {
    l.target.closest("[data-frame-roll-knob]") || Oi();
  });
  function Zv(l, d) {
    var ee;
    if (!xe) return;
    const g = xe.getBoundingClientRect(), k = Ee((l - g.left) / Math.max(1, g.width), 0, 1), N = 1 - Ee((d - g.top) / Math.max(1, g.height), 0, 1), R = Tu(u.customPaintColor), Z = { ...Fu(R.h, k, N), a: Number(((ee = u.customPaintColor) == null ? void 0 : ee.a) ?? 1) };
    u.customPaintColor = Wn(Z), u.paintColor = Wn(Z), En();
  }
  function Qv(l) {
    var R;
    if (!Ie) return;
    const d = Ie.getBoundingClientRect(), g = Ee((l - d.left) / Math.max(1, d.width), 0, 1), k = Tu(u.customPaintColor), N = { ...Fu(g, k.s, k.v), a: Number(((R = u.customPaintColor) == null ? void 0 : R.a) ?? 1) };
    u.customPaintColor = Wn(N), u.paintColor = Wn(N), En();
  }
  function qp(l, d) {
    const g = l.pointerId;
    d(l);
    const k = (R) => {
      R.pointerId === g && d(R);
    }, N = (R) => {
      R.pointerId === g && (window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N));
    };
    window.addEventListener("pointermove", k), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  xe && (xe.onpointerdown = (l) => {
    l.preventDefault(), l.stopPropagation(), qp(l, (d) => Zv(d.clientX, d.clientY));
  }), Ie && (Ie.onpointerdown = (l) => {
    l.preventDefault(), l.stopPropagation(), qp(l, (d) => Qv(d.clientX));
  }), F.addEventListener("click", (l) => {
    var N;
    const d = l.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!d) return;
    const g = d.getAttribute("data-action") === "confirm-accept", k = (N = I.confirmDialog) == null ? void 0 : N.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, k == null || k(g);
  });
  function Jp() {
    const l = !!u.fullscreen;
    Mo(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: l ? Xe.fullscreen_close : Xe.fullscreen,
      label: l ? "Exit Fullscreen" : "Fullscreen",
      tip: l ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Os(l) {
    const d = !!l;
    u.fullscreen !== d && (u.fullscreen = d, F.classList.toggle("pano-modal-fullscreen", d), d ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), Gc(), Jp(), s1(), We());
  }
  const Zp = () => document.fullscreenElement === Q;
  async function e_() {
    var l, d;
    try {
      if (!document.fullscreenEnabled) {
        Os(!u.fullscreen);
        return;
      }
      Zp() ? await ((d = document.exitFullscreen) == null ? void 0 : d.call(document)) : await ((l = Q.requestFullscreen) == null ? void 0 : l.call(Q));
    } catch {
      Os(!u.fullscreen);
    }
  }
  function Qp() {
    document.fullscreenEnabled && Os(Zp());
  }
  document.addEventListener("fullscreenchange", Qp), Jp();
  function eh() {
    const l = !!u.outputPreviewExpanded;
    I.outputPreviewToggle.icon = l ? Xe.fullscreen_close : Xe.fullscreen, I.outputPreviewToggle.label = l ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = l ? "Reduce preview" : "Expand preview";
  }
  eh();
  const Wc = e.onConnectionsChange;
  let Kc = null, th = () => {
  };
  !n && t === "stickers" && (th = Zy(e, (l = "sync") => {
    l === "executed" && (UE(U, Yl), go(), S && R1()), Zf(l);
  }, { editor: !0 }), Kc = function(...d) {
    typeof Wc == "function" && Wc.apply(this, d), go(), ni(this, "connections");
  }, e.onConnectionsChange = Kc), !n && !w && ng.set(String(e.id ?? "0"), () => tp());
  let _o = null;
  async function So() {
    return _o || (_o = (async () => {
      var l, d, g, k, N, R, Z, ee;
      return ng.delete(String(e.id ?? "0")), fv(), n || Gn(), document.fullscreenElement === Q && ((l = document.exitFullscreen) == null || l.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Qp), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === wp && (e.__panoFlushStateBeforeQueue = null), (g = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || g.call(d), (N = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || N.call(k, !0, !0), (ee = (Z = (R = Bn) == null ? void 0 : R.canvas) == null ? void 0 : Z.setDirty) == null || ee.call(Z, !0, !0), Oi(), Be.cancel(), E1(), Ae instanceof HTMLVideoElement && Ae.pause(), S1.forEach((ae) => {
        try {
          ae();
        } catch {
        }
      }), Ke.dispose(), Ci(!1), window.removeEventListener("keydown", nh, !0), window.removeEventListener("keydown", rh, !0), window.removeEventListener("keydown", oh, !0), window.removeEventListener("keyup", ah, !0), window.removeEventListener("keydown", Fs, !0), window.removeEventListener("keyup", Fs, !0), window.removeEventListener("blur", sh), window.removeEventListener("keydown", lh, !0), window.removeEventListener("dragenter", Wp, !0), window.removeEventListener("dragover", Kp, !0), window.removeEventListener("dragleave", Bp, !0), window.removeEventListener("drop", Up, !0), !n && t === "stickers" && (e.onConnectionsChange === Kc && (e.onConnectionsChange = Wc), th()), _e.unmount(), X.remove(), ov(), _o = null, !0;
    })().catch((l) => (console.error("[PanoramaCutoutSync] closeEditor failed", l), _o = null, !1)), _o);
  }
  function nh(l) {
    var d, g, k, N, R;
    if (l.key === "Escape") {
      if (ya()) {
        l.preventDefault(), l.stopPropagation(), (d = l.stopImmediatePropagation) == null || d.call(l);
        return;
      }
      if (u.fullscreen && document.fullscreenElement === Q) {
        l.preventDefault(), l.stopPropagation(), (g = l.stopImmediatePropagation) == null || g.call(l), (k = document.exitFullscreen) == null || k.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        l.preventDefault(), l.stopPropagation(), (N = l.stopImmediatePropagation) == null || N.call(l), Os(!1);
        return;
      }
      l.preventDefault(), l.stopPropagation(), (R = l.stopImmediatePropagation) == null || R.call(l), So();
    }
  }
  function rh(l) {
    const d = String(l.key || ""), g = String(l.code || ""), k = Number(l.keyCode || 0);
    if (!(d === "Delete" || g === "Delete" || k === 46) && !(d === "Backspace" || g === "Backspace" || k === 8)) return;
    const Z = l.target, ee = ((Z == null ? void 0 : Z.tagName) || "").toUpperCase();
    if (ee === "INPUT" || ee === "TEXTAREA" || Z != null && Z.isContentEditable) return;
    if (A.selection) {
      L1(), l.preventDefault(), l.stopPropagation();
      return;
    }
    if (tv()) {
      l.preventDefault(), l.stopPropagation();
      return;
    }
    Mn() && (_p(), l.preventDefault(), l.stopPropagation());
  }
  function ih(l) {
    if (l.code !== "Space" || l.ctrlKey || l.metaKey || l.altKey || n || !v || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const d = l.composedPath()[0];
    if (d !== document.body && d !== document.documentElement && !Q.contains(d)) return !1;
    const g = ((d == null ? void 0 : d.tagName) || "").toUpperCase();
    return g === "INPUT" ? !KI.has(String(d.type || "text").toLowerCase()) : g !== "TEXTAREA" && g !== "SELECT" && !(d != null && d.isContentEditable);
  }
  function oh(l) {
    ih(l) && (l.preventDefault(), l.stopPropagation(), l.repeat || Lc());
  }
  function ah(l) {
    ih(l) && (l.preventDefault(), l.stopPropagation());
  }
  function Fs(l) {
    const d = !!(l.ctrlKey || l.metaKey), g = !!l.altKey;
    u.marqueeModifier === d && u.altModifier === g || (u.marqueeModifier = d, u.altModifier = g, Gr(), Et(u.pointerPos));
  }
  function sh() {
    u.marqueeModifier = !1, u.altModifier = !1, Gr(), Et(u.pointerPos);
  }
  function lh(l) {
    if (n || !l.ctrlKey && !l.metaKey) return;
    const d = String(l.key || "").toLowerCase(), g = String(l.code || "");
    if (d !== "z" && g !== "KeyZ") return;
    const k = l.target, N = ((k == null ? void 0 : k.tagName) || "").toUpperCase();
    if (N === "INPUT" || N === "TEXTAREA" || k != null && k.isContentEditable) return;
    const { canUndo: R, canRedo: Z } = Gf();
    l.shiftKey && !Z || !l.shiftKey && !R || (Nc(l.shiftKey ? 1 : -1), l.preventDefault(), l.stopPropagation());
  }
  window.addEventListener("keydown", nh, !0), window.addEventListener("keydown", rh, !0), window.addEventListener("keydown", oh, !0), window.addEventListener("keyup", ah, !0), window.addEventListener("keydown", Fs, !0), window.addEventListener("keyup", Fs, !0), window.addEventListener("blur", sh), window.addEventListener("keydown", lh, !0), Q.addEventListener("pointerdown", (l) => {
    l.target === Q && So();
  });
  function Mr(l, d, { rollbackState: g = !1 } = {}) {
    let k = "";
    try {
      g && (k = JSON.stringify(y)), d();
    } catch (N) {
      if (k)
        try {
          const R = JSON.parse(k);
          Object.keys(y).forEach((Z) => delete y[Z]), Object.assign(y, R), n || Gn();
        } catch (R) {
          console.error(`[PanoramaStickers] editor boot step "${l}" rollback failed`, R);
        }
      I.stageWarningDetail = `boot:${l}`, console.error(`[PanoramaStickers] editor boot step "${l}" failed`, N);
    }
  }
  Mr("cutout-focus", qn), !n && t === "stickers" && Mr("external-sticker-sync", () => Zf("open"), { rollbackState: !0 }), B1().catch((l) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', l);
  }), Mr("history", vt), Mr("undo-redo", Yp), Mr("paint-ui", En), Mr("side-panel", it), Mr("look-at-frame", Oc), Mr("video-source", go), Mr("canvas-size", Ms), Mr("cursor", () => Et(u.pointerPos)), We(), ge = Ow("editor", () => {
    var l;
    return {
      type: t,
      readOnly: n,
      mode: u.mode,
      interaction: ((l = u.interaction) == null ? void 0 : l.kind) ?? null,
      timelineDrag: !!A.drag,
      playing: !!Qn.playing
    };
  });
}
Bn.registerExtension(XN({
  app: Bn,
  openEditor: YE,
  attachStickers: c2,
  attachCutout: u2,
  attachPreview: l2,
  restoreOutput: XP,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: JI
}));
