var ct = Object.defineProperty;
var pt = (n, t, e) => t in n ? ct(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var W = (n, t, e) => pt(n, typeof t != "symbol" ? t + "" : t, e);
const q = "ndv-viewer{display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:13px;--ndv-gap: 4px}.ndv-root{display:flex;flex-direction:column;gap:var(--ndv-gap)}.ndv-hidden{display:none!important}.ndv-info-bar{display:flex;justify-content:space-between;align-items:center;padding:2px 4px;opacity:.7;font-size:11px;min-height:18px;font-variant-numeric:tabular-nums}.ndv-info-bar span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ndv-canvas-container{border:1px solid var(--wa-color-neutral-300, #ccc);border-radius:4px;overflow:hidden;position:relative;line-height:0}.ndv-spinner{position:absolute;top:8px;right:8px;width:18px;height:18px;border:2px solid var(--wa-color-neutral-300, #ccc);border-top-color:var(--wa-color-primary-600, #3b82f6);border-radius:50%;animation:ndv-spin .8s linear infinite;display:none;z-index:10}.ndv-spinner.ndv-visible{display:block}@keyframes ndv-spin{to{transform:rotate(360deg)}}.ndv-shared-histogram{height:120px;overflow:hidden;border:1px solid var(--wa-color-neutral-200, #e2e2e2);border-radius:4px}.ndv-shared-histogram .jupyter-rfb-canvas,.ndv-shared-histogram canvas,.ndv-shared-histogram>div{width:100%!important;height:100%!important}ndv-dim-sliders{display:block}.ndv-slider-row{display:flex;align-items:center;gap:6px;padding:2px 0}.ndv-axis-label{font-size:12px;font-weight:500;min-width:24px;text-align:right;opacity:.8}ndv-dim-sliders wa-slider{flex:1;--thumb-size: 14px;--track-height: 4px}.ndv-value-label{font-size:11px;font-variant-numeric:tabular-nums;min-width:40px;text-align:right;opacity:.7}ndv-lut-row{display:block;padding:2px 0}.ndv-lut-row{display:flex;align-items:center;gap:4px}.ndv-lut-row wa-checkbox{--size: 16px;flex-shrink:0}.ndv-channel-name{font-size:11px;min-width:40px;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ndv-cmap-select{flex-shrink:0;width:90px}.ndv-cmap-select wa-select{font-size:11px}.ndv-lut-row wa-slider{flex:1;min-width:80px;--thumb-size: 12px;--track-height: 4px}.ndv-auto-btn{flex-shrink:0}.ndv-auto-btn wa-button{font-size:11px}ndv-toolbar{display:block}.ndv-toolbar{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.ndv-toolbar wa-select{width:120px;font-size:12px}.ndv-toolbar wa-button{font-size:12px}.ndv-spacer{flex:1}";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = globalThis, L = k.ShadowRoot && (k.ShadyCSS === void 0 || k.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, nt = Symbol(), V = /* @__PURE__ */ new WeakMap();
let ut = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== nt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (L && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = V.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && V.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ft = (n) => new ut(typeof n == "string" ? n : n + "", void 0, nt), $t = (n, t) => {
  if (L) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = k.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
  }
}, Z = L ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return ft(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: _t, defineProperty: mt, getOwnPropertyDescriptor: vt, getOwnPropertyNames: gt, getOwnPropertySymbols: yt, getPrototypeOf: At } = Object, _ = globalThis, F = _.trustedTypes, bt = F ? F.emptyScript : "", T = _.reactiveElementPolyfillSupport, E = (n, t) => n, j = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? bt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, ot = (n, t) => !_t(n, t), J = { attribute: !0, type: String, converter: j, reflect: !1, useDefault: !1, hasChanged: ot };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), _.litPropertyMetadata ?? (_.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let A = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = J) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && mt(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = vt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get: i, set(r) {
      const h = i == null ? void 0 : i.call(this);
      o == null || o.call(this, r), this.requestUpdate(t, h, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? J;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const t = At(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const e = this.properties, s = [...gt(e), ...yt(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(Z(i));
    } else t !== void 0 && e.push(Z(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return $t(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : j).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o, r;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const h = s.getPropertyOptions(i), a = typeof h.converter == "function" ? { fromAttribute: h.converter } : ((o = h.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? h.converter : j;
      this._$Em = i;
      const d = a.fromAttribute(e, h.type);
      this[i] = d ?? ((r = this._$Ej) == null ? void 0 : r.get(i)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, i = !1, o) {
    var r;
    if (t !== void 0) {
      const h = this.constructor;
      if (i === !1 && (o = this[t]), s ?? (s = h.getPropertyOptions(t)), !((s.hasChanged ?? ot)(o, e) || s.useDefault && s.reflect && o === ((r = this._$Ej) == null ? void 0 : r.get(t)) && !this.hasAttribute(h._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: o }, r) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, r ?? e ?? this[t]), o !== !0 || r !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, r] of this._$Ep) this[o] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, r] of i) {
        const { wrapped: h } = r, a = this[o];
        h !== !0 || this._$AL.has(o) || a === void 0 || this.C(o, void 0, r, a);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[E("elementProperties")] = /* @__PURE__ */ new Map(), A[E("finalized")] = /* @__PURE__ */ new Map(), T == null || T({ ReactiveElement: A }), (_.reactiveElementVersions ?? (_.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S = globalThis, K = (n) => n, R = S.trustedTypes, G = R ? R.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, rt = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + $, xt = `<${at}>`, y = document, P = () => y.createComment(""), U = (n) => n === null || typeof n != "object" && typeof n != "function", B = Array.isArray, wt = (n) => B(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", z = `[
\f\r]`, w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Q = /-->/g, X = />/g, m = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^
\f\r"'\`<>=]|("|')|))|$)`, "g"), Y = /'/g, tt = /"/g, ht = /^(?:script|style|textarea|title)$/i, Et = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), St = Et(1), b = Symbol.for("lit-noChange"), c = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), v = y.createTreeWalker(y, 129);
function lt(n, t) {
  if (!B(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(t) : t;
}
const Ct = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = w;
  for (let h = 0; h < e; h++) {
    const a = n[h];
    let d, p, l = -1, u = 0;
    for (; u < a.length && (r.lastIndex = u, p = r.exec(a), p !== null); ) u = r.lastIndex, r === w ? p[1] === "!--" ? r = Q : p[1] !== void 0 ? r = X : p[2] !== void 0 ? (ht.test(p[2]) && (i = RegExp("</" + p[2], "g")), r = m) : p[3] !== void 0 && (r = m) : r === m ? p[0] === ">" ? (r = i ?? w, l = -1) : p[1] === void 0 ? l = -2 : (l = r.lastIndex - p[2].length, d = p[1], r = p[3] === void 0 ? m : p[3] === '"' ? tt : Y) : r === tt || r === Y ? r = m : r === Q || r === X ? r = w : (r = m, i = void 0);
    const f = r === m && n[h + 1].startsWith("/>") ? " " : "";
    o += r === w ? a + xt : l >= 0 ? (s.push(d), a.slice(0, l) + rt + a.slice(l) + $ + f) : a + $ + (l === -2 ? h : f);
  }
  return [lt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class M {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const h = t.length - 1, a = this.parts, [d, p] = Ct(t, e);
    if (this.el = M.createElement(d, s), v.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = v.nextNode()) !== null && a.length < h; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(rt)) {
          const u = p[r++], f = i.getAttribute(l).split($), H = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: o, name: H[2], strings: f, ctor: H[1] === "." ? Ut : H[1] === "?" ? Mt : H[1] === "@" ? Ot : N }), i.removeAttribute(l);
        } else l.startsWith($) && (a.push({ type: 6, index: o }), i.removeAttribute(l));
        if (ht.test(i.tagName)) {
          const l = i.textContent.split($), u = l.length - 1;
          if (u > 0) {
            i.textContent = R ? R.emptyScript : "";
            for (let f = 0; f < u; f++) i.append(l[f], P()), v.nextNode(), a.push({ type: 2, index: ++o });
            i.append(l[u], P());
          }
        }
      } else if (i.nodeType === 8) if (i.data === at) a.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = i.data.indexOf($, l + 1)) !== -1; ) a.push({ type: 7, index: o }), l += $.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function x(n, t, e = n, s) {
  var r, h;
  if (t === b) return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const o = U(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((h = i == null ? void 0 : i._$AO) == null || h.call(i, !1), o === void 0 ? i = void 0 : (i = new o(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = x(n, i._$AS(n, t.values), i, s)), t;
}
class Pt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? y).importNode(e, !0);
    v.currentNode = i;
    let o = v.nextNode(), r = 0, h = 0, a = s[0];
    for (; a !== void 0; ) {
      if (r === a.index) {
        let d;
        a.type === 2 ? d = new O(o, o.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (d = new Ht(o, this, t)), this._$AV.push(d), a = s[++h];
      }
      r !== (a == null ? void 0 : a.index) && (o = v.nextNode(), r++);
    }
    return v.currentNode = y, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class O {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = x(this, t, e), U(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== b && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : wt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== c && U(this._$AH) ? this._$AA.nextSibling.data = t : this.T(y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = M.createElement(lt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i) this._$AH.p(e);
    else {
      const r = new Pt(i, this), h = r.u(this.options);
      r.p(e), this.T(h), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = et.get(t.strings);
    return e === void 0 && et.set(t.strings, e = new M(t)), e;
  }
  k(t) {
    B(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t) i === e.length ? e.push(s = new O(this.O(P()), this.O(P()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t !== this._$AB; ) {
      const i = K(t).nextSibling;
      K(t).remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class N {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = c;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0) t = x(this, t, e, 0), r = !U(t) || t !== this._$AH && t !== b, r && (this._$AH = t);
    else {
      const h = t;
      let a, d;
      for (t = o[0], a = 0; a < o.length - 1; a++) d = x(this, h[s + a], e, a), d === b && (d = this._$AH[a]), r || (r = !U(d) || d !== this._$AH[a]), d === c ? t = c : t !== c && (t += (d ?? "") + o[a + 1]), this._$AH[a] = d;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ut extends N {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class Mt extends N {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class Ot extends N {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = x(this, t, e, 0) ?? c) === b) return;
    const s = this._$AH, i = t === c && s !== c || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== c && (s === c || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ht {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    x(this, t);
  }
}
const I = S.litHtmlPolyfillSupport;
I == null || I(M, O), (S.litHtmlVersions ?? (S.litHtmlVersions = [])).push("3.3.2");
const kt = (n, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new O(t.insertBefore(P(), o), o, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const g = globalThis;
class C extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = kt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return b;
  }
}
var it;
C._$litElement$ = !0, C.finalized = !0, (it = g.litElementHydrateSupport) == null || it.call(g, { LitElement: C });
const D = g.litElementPolyfillSupport;
D == null || D({ LitElement: C });
(g.litElementVersions ?? (g.litElementVersions = [])).push("4.2.2");
class dt extends C {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super(), this.model = null, this._dataInfo = "", this._hoverInfo = "", this._showDataInfo = !0, this._cleanups = [];
  }
  connectedCallback() {
    super.connectedCallback(), this.model && this._bindModel();
  }
  updated(t) {
    t.has("model") && this.model && this._bindModel();
  }
  _bindModel() {
    const t = this.model, e = (s, i) => {
      this[i] = t.get(s) ?? this[i];
      const o = () => {
        this[i] = t.get(s);
      };
      t.on(`change:${s}`, o), this._cleanups.push(() => t.off(`change:${s}`, o));
    };
    e("data_info", "_dataInfo"), e("hover_info", "_hoverInfo"), e("show_data_info", "_showDataInfo");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of this._cleanups) t();
    this._cleanups = [];
  }
  render() {
    return St`
      <div class="ndv-info-bar ${this._showDataInfo ? "" : "ndv-hidden"}">
        <span>${this._dataInfo}</span>
        <span>${this._hoverInfo}</span>
      </div>
    `;
  }
}
W(dt, "properties", {
  model: { type: Object },
  _dataInfo: { state: !0 },
  _hoverInfo: { state: !0 },
  _showDataInfo: { state: !0 }
});
customElements.get("ndv-status-bar") || customElements.define("ndv-status-bar", dt);
const Rt = customElements.define.bind(customElements);
customElements.define = function(n, t, e) {
  customElements.get(n) || Rt(n, t, e);
};
let st = !1;
function Nt(n) {
  const t = n.getRootNode(), e = t instanceof ShadowRoot ? t : document.head;
  if (e.querySelector("[data-ndv-status-style]")) return;
  const s = document.createElement("style");
  if (s.setAttribute("data-ndv-status-style", ""), s.textContent = q, e.appendChild(s), e !== document.head && !st) {
    const i = document.createElement("style");
    i.setAttribute("data-ndv-status-style", ""), i.textContent = q, document.head.appendChild(i), st = !0;
  }
}
function Tt({ model: n, el: t }) {
  Nt(t);
  const e = document.createElement("ndv-status-bar");
  return e.model = n, t.appendChild(e), () => e.remove();
}
const jt = { render: Tt };
export {
  jt as default
};
