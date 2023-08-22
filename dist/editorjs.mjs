var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ve(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function ye() {
}
Object.assign(ye, {
  default: ye,
  register: ye,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
  const e = (this.document || this.ownerDocument).querySelectorAll(s);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(s) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(s))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    const n = o instanceof Node;
    t.appendChild(n ? o : document.createTextNode(o));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(s) {
  s = arguments.length === 0 ? !0 : !!s;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), n = parseInt(t.getPropertyValue("border-left-width")), i = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - n > e.scrollLeft + e.clientWidth, c = i && !r;
  (i || r) && s && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && s && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - n + this.clientWidth / 2), (i || r || a || l) && !s && this.scrollIntoView(c);
});
window.requestIdleCallback = window.requestIdleCallback || function(s) {
  const e = Date.now();
  return setTimeout(function() {
    s({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(s) {
  clearTimeout(s);
};
let Lt = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var tt = /* @__PURE__ */ ((s) => (s.VERBOSE = "VERBOSE", s.INFO = "INFO", s.WARN = "WARN", s.ERROR = "ERROR", s))(tt || {});
const B = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91
}, _t = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function ge(s, e, t = "log", o, n = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const i = ["info", "log", "warn", "error"].includes(t), r = [];
  switch (ge.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!i || s)
        return;
      break;
  }
  o && r.push(o);
  const a = "Editor.js 2.28.0-rc.3", l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  s && (i ? (r.unshift(l, n), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    i ? o ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
  } catch {
  }
}
ge.logLevel = "VERBOSE";
function Ot(s) {
  ge.logLevel = s;
}
const L = ge.bind(window, !1), Y = ge.bind(window, !0);
function oe(s) {
  return Object.prototype.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function D(s) {
  return oe(s) === "function" || oe(s) === "asyncfunction";
}
function j(s) {
  return oe(s) === "object";
}
function J(s) {
  return oe(s) === "string";
}
function At(s) {
  return oe(s) === "boolean";
}
function Ze(s) {
  return oe(s) === "number";
}
function Ke(s) {
  return oe(s) === "undefined";
}
function K(s) {
  return s ? Object.keys(s).length === 0 && s.constructor === Object : !0;
}
function ot(s) {
  return s > 47 && s < 58 || // number keys
  s === 32 || s === 13 || // Space bar & return key(s)
  s === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  s > 64 && s < 91 || // letter keys
  s > 95 && s < 112 || // Numpad keys
  s > 185 && s < 193 || // ;=,-./` (in order)
  s > 218 && s < 223;
}
async function Nt(s, e = () => {
}, t = () => {
}) {
  async function o(n, i, r) {
    try {
      await n.function(n.data), await i(Ke(n.data) ? {} : n.data);
    } catch {
      r(Ke(n.data) ? {} : n.data);
    }
  }
  return s.reduce(async (n, i) => (await n, o(i, e, t)), Promise.resolve());
}
function nt(s) {
  return Array.prototype.slice.call(s);
}
function re(s, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => s.apply(t, o), e);
  };
}
function Rt(s) {
  return s.name.split(".").pop();
}
function Dt(s) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(s);
}
function Pt(s, e, t) {
  let o;
  return (...n) => {
    const i = this, r = () => {
      o = null, t || s.apply(i, n);
    }, a = t && !o;
    window.clearTimeout(o), o = window.setTimeout(r, e), a && s.apply(i, n);
  };
}
function Ee(s, e, t = void 0) {
  let o, n, i, r = null, a = 0;
  t || (t = {});
  const l = function() {
    a = t.leading === !1 ? 0 : Date.now(), r = null, i = s.apply(o, n), r || (o = n = null);
  };
  return function() {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const u = e - (c - a);
    return o = this, n = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), a = c, i = s.apply(o, n), r || (o = n = null)) : !r && t.trailing !== !1 && (r = setTimeout(l, u)), i;
  };
}
function Ht() {
  const s = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(s).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (s[e] = !0), s;
}
function ae(s) {
  return s[0].toUpperCase() + s.slice(1);
}
function Te(s, ...e) {
  if (!e.length)
    return s;
  const t = e.shift();
  if (j(s) && j(t))
    for (const o in t)
      j(t[o]) ? (s[o] || Object.assign(s, { [o]: {} }), Te(s[o], t[o])) : Object.assign(s, { [o]: t[o] });
  return Te(s, ...e);
}
function Ne(s) {
  const e = Ht();
  return s = s.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? s = s.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : s = s.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), s;
}
function Ft(s) {
  try {
    return new URL(s).href;
  } catch {
  }
  return s.substring(0, 2) === "//" ? window.location.protocol + s : window.location.origin + s;
}
function jt() {
  return Lt(10);
}
function zt(s) {
  window.open(s, "_blank");
}
function Ut(s = "") {
  return `${s}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Se(s, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  s && Y(o, "warn");
}
function ce(s, e, t) {
  const o = t.value ? "value" : "get", n = t[o], i = `#${e}Cache`;
  if (t[o] = function(...r) {
    return this[i] === void 0 && (this[i] = n.apply(this, ...r)), this[i];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function(a) {
      delete s[i], r.apply(this, a);
    };
  }
  return t;
}
const it = 200;
function te() {
  return window.matchMedia(`(max-width: ${it}px)`).matches;
}
const Xe = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function $t(s, e) {
  const t = Array.isArray(s) || j(s), o = Array.isArray(e) || j(e);
  return t || o ? JSON.stringify(s) === JSON.stringify(e) : s === e;
}
class d {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const n = document.createElement(e);
    Array.isArray(t) ? n.classList.add(...t) : t && n.classList.add(t);
    for (const i in o)
      Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    return n;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), n = e.parentNode;
    n.insertBefore(o, e), n.insertBefore(e, t), n.insertBefore(t, o), n.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return nt(e.querySelectorAll(d.allInputsSelector)).reduce((t, o) => d.isNativeInput(o) || d.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...d.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", n = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let i = e[o];
      if (d.isSingleTag(i) && !d.isNativeInput(i) && !d.isLineBreakTag(i))
        if (i[n])
          i = i[n];
        else if (i.parentNode[n])
          i = i.parentNode[n];
        else
          return i.parentNode;
      return this.getDeepestNode(i, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return Ze(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return Ze(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (d.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = d.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e) {
    let t;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? t = e.value : t = e.textContent.replace("​", ""), t.trim().length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isEmpty(e) {
    e.normalize();
    const t = [e];
    for (; t.length > 0; )
      if (e = t.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e))
          return !1;
        e.childNodes && t.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = d.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    J(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (n) => !d.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...d.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return J(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, n = window.pageYOffset || document.documentElement.scrollTop, i = t.top + n, r = t.left + o;
    return {
      top: i,
      left: r,
      bottom: i + t.height,
      right: r + t.width
    };
  }
}
const Wt = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": ""
  }
}, Vt = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, Yt = {
  link: {
    "Add a link": "Add a link",
    Remove: "Remove"
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, Zt = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, st = {
  ui: Wt,
  toolNames: Vt,
  tools: Yt,
  blockTunes: Zt
}, ne = class {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(s, e) {
    return ne._t(s, e);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(s, e) {
    return ne._t(s, e);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(s) {
    ne.currentDictionary = s;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(s, e) {
    const t = ne.getNamespace(s);
    return !t || !t[e] ? e : t[e];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(s) {
    return s.split(".").reduce((t, o) => !t || !Object.keys(t).length ? {} : t[o], ne.currentDictionary);
  }
};
let W = ne;
W.currentDictionary = st;
class rt extends Error {
}
class xe {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (n) => {
      const i = t(n), r = this.subscribers[e].indexOf(o);
      return r !== -1 && this.subscribers[e].splice(r, 1), i;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    K(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, n) => {
      const i = n(o);
      return i !== void 0 ? i : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function ee(s) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return s.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return s.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return s.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return s.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return s.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return s.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(t) {
      s.stretched = t;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return s.stretched;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(t, o) {
      return s.call(t, o);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return s.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(t) {
      return s.validate(t);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      s.dispatchChange();
    }
  });
}
class at {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, n = !1) {
    const i = Ut("l"), r = {
      id: i,
      element: e,
      eventType: t,
      handler: o,
      options: n
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(r), e.addEventListener(t, o, n), i;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, n) {
    const i = this.findAll(e, t, o);
    i.forEach((r, a) => {
      const l = this.allListeners.indexOf(i[a]);
      l > -1 && (this.allListeners.splice(l, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const n = this.findAll(e, t, o);
    return n.length > 0 ? n[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let n;
    const i = e ? this.findByEventTarget(e) : [];
    return e && t && o ? n = i.filter((r) => r.eventType === t && r.handler === o) : e && t ? n = i.filter((r) => r.eventType === t) : n = i, n;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}
class T {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new at(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, n, i, r = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, n, i, r)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === T)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}
class k {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? d.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(k.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${k.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${k.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!k.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return L("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return L("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const n = document.createElement("span");
      if (n.getBoundingClientRect) {
        n.appendChild(document.createTextNode("​")), t.insertNode(n), o = n.getBoundingClientRect();
        const i = n.parentNode;
        i.removeChild(n), i.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), n = window.getSelection();
    return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), n.removeAllRanges(), n.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = k.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = k.range;
    if (e === null)
      return;
    const t = d.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return d.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = d.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = k.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const n = window.getSelection();
    let i = null;
    return !n || !n.anchorNode || !n.focusNode ? null : ([
      /** the Node in which the selection begins */
      n.anchorNode,
      /** the Node in which the selection ends */
      n.focusNode
    ].forEach((a) => {
      let l = o;
      for (; l > 0 && a.parentNode && !(a.tagName === e && (i = a, t && a.classList && !a.classList.contains(t) && (i = null), i)); )
        a = a.parentNode, l--;
    }), i);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
}
function Kt(s, e) {
  const { type: t, target: o, addedNodes: n, removedNodes: i } = s;
  if (o === e)
    return !0;
  if (["characterData", "attributes"].includes(t)) {
    const l = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
    return e.contains(l);
  }
  const r = Array.from(n).some((l) => e.contains(l)), a = Array.from(i).some((l) => e.contains(l));
  return r || a;
}
const Ie = "redactor dom changed", lt = "block changed", ct = "fake cursor is about to be toggled", dt = "fake cursor have been set";
function qe(s, e) {
  return s.mergeable && s.name === e.name;
}
function Xt(s, e) {
  const t = e == null ? void 0 : e.export;
  return D(t) ? t(s) : J(t) ? s[t] : (t !== void 0 && L("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function qt(s, e) {
  const t = e == null ? void 0 : e.import;
  return D(t) ? t(s) : J(t) ? {
    [t]: s
  } : (t !== void 0 && L("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var X = /* @__PURE__ */ ((s) => (s.APPEND_CALLBACK = "appendCallback", s.RENDERED = "rendered", s.MOVED = "moved", s.UPDATED = "updated", s.REMOVED = "removed", s.ON_PASTE = "onPaste", s))(X || {});
class H extends xe {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = jt(),
    data: t,
    tool: o,
    api: n,
    readOnly: i,
    tunesData: r
  }, a) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (l = void 0) => {
      const c = l === void 0, u = l instanceof InputEvent;
      !c && !u && this.detectToolRootChange(l);
      let h;
      c || u ? h = !0 : h = !(l.length > 0 && l.every((m) => {
        const { addedNodes: p, removedNodes: v, target: O } = m;
        return [
          ...Array.from(p),
          ...Array.from(v),
          O
        ].some((A) => d.isElement(A) ? A.dataset.mutationFree === "true" : !1);
      })), h && (this.dropInputsCache(), this.updateCurrentInput(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.api = n, this.editorEventBus = a || null, this.blockAPI = new ee(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, i), this.tunes = o.tunes, this.composeTunes(r), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      focused: "ce-block--focused",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = d.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o) => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !K(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return D(this.toolInstance.merge);
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = d.isEmpty(this.pluginsContent), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set focused state
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set focused(e) {
    this.holder.classList.toggle(H.CSS.focused, e);
  }
  /**
   * Get Block's focused state
   */
  get focused() {
    return this.holder.classList.contains(H.CSS.focused);
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var n, i;
    this.holder.classList.toggle(H.CSS.selected, e);
    const t = e === !0 && k.isRangeInsideContainer(this.holder), o = e === !1 && k.isFakeCursorInsideContainer(this.holder);
    (t || o) && ((n = this.editorEventBus) == null || n.emit(ct, { state: e }), t ? k.addFakeCursor() : k.removeFakeCursor(this.holder), (i = this.editorEventBus) == null || i.emit(dt, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(H.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(H.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(H.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(H.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (D(this.toolInstance[e])) {
      e === "appendCallback" && L(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        L(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([i, r]) => {
      if (D(r.save))
        try {
          t[i] = r.save();
        } catch (a) {
          L(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const o = window.performance.now();
    let n;
    return Promise.resolve(e).then((i) => (n = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: i,
      tunes: t,
      time: n - o
    })).catch((i) => {
      L(`Saving process for ${this.name} tool failed due to the ${i}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in tunes menu.
   * Splits block tunes settings into 2 groups: popover items and custom html.
   */
  getTunes() {
    const e = document.createElement("div"), t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], n = [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((i) => i.render());
    return [o, n].flat().forEach((i) => {
      d.isElement(i) ? e.appendChild(i) : Array.isArray(i) ? t.push(...i) : t.push(i);
    }), [t, e];
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = d.isNativeInput(document.activeElement) || !k.anchorNode ? document.activeElement : k.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), D(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data;
    return e.find((n) => Object.entries(n.data).some(([i, r]) => t[i] && $t(t[i], r)));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return Xt(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = d.make("div", H.CSS.wrapper), t = d.make("div", H.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let n = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((i) => {
      if (D(i.wrap))
        try {
          n = i.wrap(n);
        } catch (r) {
          L(`Tune ${i.constructor.name} wrap method throws an Error %o`, "warn", r);
        }
    }), e.appendChild(n), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((i) => Kt(i, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(Ie, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(Ie, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const n = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = n;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
}
class Gt extends T {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, n, i, r, a) => {
      const l = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: n,
        needToFocus: i,
        replace: r
      });
      return new ee(l);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new H({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t) => {
      const { BlockManager: o } = this.Editor, n = o.getBlockById(e);
      if (n === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const i = await o.update(n, t);
      return new ee(i);
    }, this.convert = (e, t, o) => {
      var h, f;
      const { BlockManager: n, Tools: i } = this.Editor, r = n.getBlockById(e);
      if (!r)
        throw new Error(`Block with id "${e}" not found`);
      const a = i.blockTools.get(r.name), l = i.blockTools.get(t);
      if (!l)
        throw new Error(`Block Tool with type "${t}" not found`);
      const c = ((h = a == null ? void 0 : a.conversionConfig) == null ? void 0 : h.export) !== void 0, u = ((f = l.conversionConfig) == null ? void 0 : f.import) !== void 0;
      if (c && u)
        n.convert(r, t, o);
      else {
        const m = [
          c ? !1 : ae(r.name),
          u ? !1 : ae(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${r.name}" to "${t}" is not possible. ${m} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: n, type: i, data: r }) => this.Editor.BlockManager.composeBlock({
        id: n,
        tool: i || this.config.defaultBlock,
        data: r
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((n) => new ee(n));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      Y("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      Y("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new ee(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (Y("There is no block with id `" + e + "`", "warn"), null) : new ee(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    L(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      Y(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  clear() {
    this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    return await this.Editor.BlockManager.clear(), this.Editor.Renderer.render(e.blocks);
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  renderFromHTML(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    Se(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    L("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
class Jt extends T {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t, o), !0) : !1, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class Qt extends T {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
class Re extends T {
  /**
   * Return namespace section for tool or block tune
   *
   * @param tool - tool object
   */
  static getNamespace(e) {
    return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        Y("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param tool - Tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        t: (t) => W.t(Re.getNamespace(e), t)
      }
    );
  }
}
class eo extends T {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param tool - tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e)
      }
    );
  }
}
class to extends T {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class oo extends T {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, n) => this.on(e, t, o, n),
      off: (e, t, o, n) => this.off(e, t, o, n),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, n) {
    return this.listeners.on(e, t, o, n);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, n) {
    this.listeners.off(e, t, o, n);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var Me = {}, no = {
  get exports() {
    return Me;
  },
  set exports(s) {
    Me = s;
  }
};
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var r = o[i] = { i, l: !1, exports: {} };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, r, a) {
        n.o(i, r) || Object.defineProperty(i, r, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, r) {
        if (1 & r && (i = n(i)), 8 & r || 4 & r && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & r && typeof i != "string")
          for (var l in i)
            n.d(a, l, function(c) {
              return i[c];
            }.bind(null, l));
        return a;
      }, n.n = function(i) {
        var r = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(r, "a", r), r;
      }, n.o = function(i, r) {
        return Object.prototype.hasOwnProperty.call(i, r);
      }, n.p = "/", n(n.s = 0);
    }([function(t, o, n) {
      n(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */
      t.exports = function() {
        var i = n(6), r = "cdx-notify--bounce-in", a = null;
        return { show: function(l) {
          if (l.message) {
            (function() {
              if (a)
                return !0;
              a = i.getWrapper(), document.body.appendChild(a);
            })();
            var c = null, u = l.time || 8e3;
            switch (l.type) {
              case "confirm":
                c = i.confirm(l);
                break;
              case "prompt":
                c = i.prompt(l);
                break;
              default:
                c = i.alert(l), window.setTimeout(function() {
                  c.remove();
                }, u);
            }
            a.appendChild(c), c.classList.add(r);
          }
        } };
      }();
    }, function(t, o, n) {
      var i = n(2);
      typeof i == "string" && (i = [[t.i, i, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(4)(i, r), i.locals && (t.exports = i.locals);
    }, function(t, o, n) {
      (t.exports = n(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(n) {
        var i = [];
        return i.toString = function() {
          return this.map(function(r) {
            var a = function(l, c) {
              var u = l[1] || "", h = l[3];
              if (!h)
                return u;
              if (c && typeof btoa == "function") {
                var f = (p = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(p)))) + " */"), m = h.sources.map(function(v) {
                  return "/*# sourceURL=" + h.sourceRoot + v + " */";
                });
                return [u].concat(m).concat([f]).join(`
`);
              }
              var p;
              return [u].join(`
`);
            }(r, n);
            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
          }).join("");
        }, i.i = function(r, a) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var l = {}, c = 0; c < this.length; c++) {
            var u = this[c][0];
            typeof u == "number" && (l[u] = !0);
          }
          for (c = 0; c < r.length; c++) {
            var h = r[c];
            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), i.push(h));
          }
        }, i;
      };
    }, function(t, o, n) {
      var i, r, a = {}, l = (i = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return r === void 0 && (r = i.apply(this, arguments)), r;
      }), c = function(b) {
        var g = {};
        return function(y) {
          if (typeof y == "function")
            return y();
          if (g[y] === void 0) {
            var E = function(_) {
              return document.querySelector(_);
            }.call(this, y);
            if (window.HTMLIFrameElement && E instanceof window.HTMLIFrameElement)
              try {
                E = E.contentDocument.head;
              } catch {
                E = null;
              }
            g[y] = E;
          }
          return g[y];
        };
      }(), u = null, h = 0, f = [], m = n(5);
      function p(b, g) {
        for (var y = 0; y < b.length; y++) {
          var E = b[y], _ = a[E.id];
          if (_) {
            _.refs++;
            for (var S = 0; S < _.parts.length; S++)
              _.parts[S](E.parts[S]);
            for (; S < E.parts.length; S++)
              _.parts.push(x(E.parts[S], g));
          } else {
            var F = [];
            for (S = 0; S < E.parts.length; S++)
              F.push(x(E.parts[S], g));
            a[E.id] = { id: E.id, refs: 1, parts: F };
          }
        }
      }
      function v(b, g) {
        for (var y = [], E = {}, _ = 0; _ < b.length; _++) {
          var S = b[_], F = g.base ? S[0] + g.base : S[0], M = { css: S[1], media: S[2], sourceMap: S[3] };
          E[F] ? E[F].parts.push(M) : y.push(E[F] = { id: F, parts: [M] });
        }
        return y;
      }
      function O(b, g) {
        var y = c(b.insertInto);
        if (!y)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var E = f[f.length - 1];
        if (b.insertAt === "top")
          E ? E.nextSibling ? y.insertBefore(g, E.nextSibling) : y.appendChild(g) : y.insertBefore(g, y.firstChild), f.push(g);
        else if (b.insertAt === "bottom")
          y.appendChild(g);
        else {
          if (typeof b.insertAt != "object" || !b.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var _ = c(b.insertInto + " " + b.insertAt.before);
          y.insertBefore(g, _);
        }
      }
      function N(b) {
        if (b.parentNode === null)
          return !1;
        b.parentNode.removeChild(b);
        var g = f.indexOf(b);
        g >= 0 && f.splice(g, 1);
      }
      function A(b) {
        var g = document.createElement("style");
        return b.attrs.type === void 0 && (b.attrs.type = "text/css"), C(g, b.attrs), O(b, g), g;
      }
      function C(b, g) {
        Object.keys(g).forEach(function(y) {
          b.setAttribute(y, g[y]);
        });
      }
      function x(b, g) {
        var y, E, _, S;
        if (g.transform && b.css) {
          if (!(S = g.transform(b.css)))
            return function() {
            };
          b.css = S;
        }
        if (g.singleton) {
          var F = h++;
          y = u || (u = A(g)), E = R.bind(null, y, F, !1), _ = R.bind(null, y, F, !0);
        } else
          b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (y = function(M) {
            var V = document.createElement("link");
            return M.attrs.type === void 0 && (M.attrs.type = "text/css"), M.attrs.rel = "stylesheet", C(V, M.attrs), O(M, V), V;
          }(g), E = function(M, V, de) {
            var Q = de.css, Ce = de.sourceMap, St = V.convertToAbsoluteUrls === void 0 && Ce;
            (V.convertToAbsoluteUrls || St) && (Q = m(Q)), Ce && (Q += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Ce)))) + " */");
            var It = new Blob([Q], { type: "text/css" }), Ye = M.href;
            M.href = URL.createObjectURL(It), Ye && URL.revokeObjectURL(Ye);
          }.bind(null, y, g), _ = function() {
            N(y), y.href && URL.revokeObjectURL(y.href);
          }) : (y = A(g), E = function(M, V) {
            var de = V.css, Q = V.media;
            if (Q && M.setAttribute("media", Q), M.styleSheet)
              M.styleSheet.cssText = de;
            else {
              for (; M.firstChild; )
                M.removeChild(M.firstChild);
              M.appendChild(document.createTextNode(de));
            }
          }.bind(null, y), _ = function() {
            N(y);
          });
        return E(b), function(M) {
          if (M) {
            if (M.css === b.css && M.media === b.media && M.sourceMap === b.sourceMap)
              return;
            E(b = M);
          } else
            _();
        };
      }
      t.exports = function(b, g) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (g = g || {}).attrs = typeof g.attrs == "object" ? g.attrs : {}, g.singleton || typeof g.singleton == "boolean" || (g.singleton = l()), g.insertInto || (g.insertInto = "head"), g.insertAt || (g.insertAt = "bottom");
        var y = v(b, g);
        return p(y, g), function(E) {
          for (var _ = [], S = 0; S < y.length; S++) {
            var F = y[S];
            (M = a[F.id]).refs--, _.push(M);
          }
          for (E && p(v(E, g), g), S = 0; S < _.length; S++) {
            var M;
            if ((M = _[S]).refs === 0) {
              for (var V = 0; V < M.parts.length; V++)
                M.parts[V]();
              delete a[M.id];
            }
          }
        };
      };
      var w, I = (w = [], function(b, g) {
        return w[b] = g, w.filter(Boolean).join(`
`);
      });
      function R(b, g, y, E) {
        var _ = y ? "" : E.css;
        if (b.styleSheet)
          b.styleSheet.cssText = I(g, _);
        else {
          var S = document.createTextNode(_), F = b.childNodes;
          F[g] && b.removeChild(F[g]), F.length ? b.insertBefore(S, F[g]) : b.appendChild(S);
        }
      }
    }, function(t, o) {
      t.exports = function(n) {
        var i = typeof window < "u" && window.location;
        if (!i)
          throw new Error("fixUrls requires window.location");
        if (!n || typeof n != "string")
          return n;
        var r = i.protocol + "//" + i.host, a = r + i.pathname.replace(/\/[^\/]*$/, "/");
        return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, c) {
          var u, h = c.trim().replace(/^"(.*)"$/, function(f, m) {
            return m;
          }).replace(/^'(.*)'$/, function(f, m) {
            return m;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
        });
      };
    }, function(t, o, n) {
      var i, r, a, l, c, u, h, f, m;
      t.exports = (i = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", f = "cdx-notify__btns-wrapper", { alert: m = function(p) {
        var v = document.createElement("DIV"), O = document.createElement("DIV"), N = p.message, A = p.style;
        return v.classList.add(r), A && v.classList.add(r + "--" + A), v.innerHTML = N, O.classList.add(a), O.addEventListener("click", v.remove.bind(v)), v.appendChild(O), v;
      }, confirm: function(p) {
        var v = m(p), O = document.createElement("div"), N = document.createElement("button"), A = document.createElement("button"), C = v.querySelector("." + a), x = p.cancelHandler, w = p.okHandler;
        return O.classList.add(f), N.innerHTML = p.okText || "Confirm", A.innerHTML = p.cancelText || "Cancel", N.classList.add(h), A.classList.add(h), N.classList.add(l), A.classList.add(c), x && typeof x == "function" && (A.addEventListener("click", x), C.addEventListener("click", x)), w && typeof w == "function" && N.addEventListener("click", w), N.addEventListener("click", v.remove.bind(v)), A.addEventListener("click", v.remove.bind(v)), O.appendChild(N), O.appendChild(A), v.appendChild(O), v;
      }, prompt: function(p) {
        var v = m(p), O = document.createElement("div"), N = document.createElement("button"), A = document.createElement("input"), C = v.querySelector("." + a), x = p.cancelHandler, w = p.okHandler;
        return O.classList.add(f), N.innerHTML = p.okText || "Ok", N.classList.add(h), N.classList.add(l), A.classList.add(u), p.placeholder && A.setAttribute("placeholder", p.placeholder), p.default && (A.value = p.default), p.inputType && (A.type = p.inputType), x && typeof x == "function" && C.addEventListener("click", x), w && typeof w == "function" && N.addEventListener("click", function() {
          w(A.value);
        }), N.addEventListener("click", v.remove.bind(v)), O.appendChild(A), O.appendChild(N), v.appendChild(O), v;
      }, getWrapper: function() {
        var p = document.createElement("DIV");
        return p.classList.add(i), p;
      } });
    }]);
  });
})(no);
const io = /* @__PURE__ */ ve(Me);
class so {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    io.show(e);
  }
}
class ro extends T {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new so();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class ao extends T {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var Le = {}, lo = {
  get exports() {
    return Le;
  },
  set exports(s) {
    Le = s;
  }
};
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(Mt, function() {
    function t(h) {
      var f = h.tags, m = Object.keys(f), p = m.map(function(v) {
        return typeof f[v];
      }).every(function(v) {
        return v === "object" || v === "boolean" || v === "function";
      });
      if (!p)
        throw new Error("The configuration was invalid");
      this.config = h;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function n(h) {
      return o.indexOf(h.nodeName) !== -1;
    }
    var i = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r(h) {
      return i.indexOf(h.nodeName) !== -1;
    }
    t.prototype.clean = function(h) {
      const f = document.implementation.createHTMLDocument(), m = f.createElement("div");
      return m.innerHTML = h, this._sanitize(f, m), m.innerHTML;
    }, t.prototype._sanitize = function(h, f) {
      var m = a(h, f), p = m.firstChild();
      if (p)
        do {
          if (p.nodeType === Node.TEXT_NODE)
            if (p.data.trim() === "" && (p.previousElementSibling && n(p.previousElementSibling) || p.nextElementSibling && n(p.nextElementSibling))) {
              f.removeChild(p), this._sanitize(h, f);
              break;
            } else
              continue;
          if (p.nodeType === Node.COMMENT_NODE) {
            f.removeChild(p), this._sanitize(h, f);
            break;
          }
          var v = r(p), O;
          v && (O = Array.prototype.some.call(p.childNodes, n));
          var N = !!f.parentNode, A = n(f) && n(p) && N, C = p.nodeName.toLowerCase(), x = l(this.config, C, p), w = v && O;
          if (w || c(p, x) || !this.config.keepNestedBlockElements && A) {
            if (!(p.nodeName === "SCRIPT" || p.nodeName === "STYLE"))
              for (; p.childNodes.length > 0; )
                f.insertBefore(p.childNodes[0], p);
            f.removeChild(p), this._sanitize(h, f);
            break;
          }
          for (var I = 0; I < p.attributes.length; I += 1) {
            var R = p.attributes[I];
            u(R, x, p) && (p.removeAttribute(R.name), I = I - 1);
          }
          this._sanitize(h, p);
        } while (p = m.nextSibling());
    };
    function a(h, f) {
      return h.createTreeWalker(
        f,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function l(h, f, m) {
      return typeof h.tags[f] == "function" ? h.tags[f](m) : h.tags[f];
    }
    function c(h, f) {
      return typeof f > "u" ? !0 : typeof f == "boolean" ? !f : !1;
    }
    function u(h, f, m) {
      var p = h.name.toLowerCase();
      return f === !0 ? !1 : typeof f[p] == "function" ? !f[p](h.value, m) : typeof f[p] > "u" || f[p] === !1 ? !0 : typeof f[p] == "string" ? f[p] !== h.value : !1;
    }
    return t;
  });
})(lo);
const co = Le;
function ht(s, e) {
  return s.map((t) => {
    const o = D(e) ? e(t.tool) : e;
    return K(o) || (t.data = De(t.data, o)), t;
  });
}
function q(s, e = {}) {
  const t = {
    tags: e
  };
  return new co(t).clean(s);
}
function De(s, e) {
  return Array.isArray(s) ? ho(s, e) : j(s) ? uo(s, e) : J(s) ? po(s, e) : s;
}
function ho(s, e) {
  return s.map((t) => De(t, e));
}
function uo(s, e) {
  const t = {};
  for (const o in s) {
    if (!Object.prototype.hasOwnProperty.call(s, o))
      continue;
    const n = s[o], i = fo(e[o]) ? e[o] : e;
    t[o] = De(n, i);
  }
  return t;
}
function po(s, e) {
  return j(e) ? q(s, e) : e === !1 ? q(s, {}) : s;
}
function fo(s) {
  return j(s) || At(s) || D(s);
}
class go extends T {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return q(e, t);
  }
}
class bo extends T {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (Y(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class mo extends T {
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e)
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return new k().findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    new k().expandToTag(e);
  }
}
class ko extends T {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class vo extends T {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Y("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Y("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var _e = {}, xo = {
  get exports() {
    return _e;
  },
  set exports(s) {
    _e = s;
  }
};
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var r = o[i] = { i, l: !1, exports: {} };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, r, a) {
        n.o(i, r) || Object.defineProperty(i, r, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, r) {
        if (1 & r && (i = n(i)), 8 & r || 4 & r && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & r && typeof i != "string")
          for (var l in i)
            n.d(a, l, function(c) {
              return i[c];
            }.bind(null, l));
        return a;
      }, n.n = function(i) {
        var r = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(r, "a", r), r;
      }, n.o = function(i, r) {
        return Object.prototype.hasOwnProperty.call(i, r);
      }, n.p = "", n(n.s = 0);
    }([function(t, o, n) {
      t.exports = n(1);
    }, function(t, o, n) {
      n.r(o), n.d(o, "default", function() {
        return i;
      });
      class i {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, l, c) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const u = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c);
          if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string")
            this.nodes.content.appendChild(document.createTextNode(l));
          else {
            if (!(l instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof l + " given.");
            this.nodes.content.appendChild(l);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement) {
            case "top":
              this.placeTop(a, u);
              break;
            case "left":
              this.placeLeft(a, u);
              break;
            case "right":
              this.placeRight(a, u);
              break;
            case "bottom":
            default:
              this.placeBottom(a, u);
          }
          u && u.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, l, c) {
          a.addEventListener("mouseenter", () => {
            this.show(a, l, c);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const l = n(2), c = this.make("style", null, { textContent: l.toString(), id: a });
          this.prepend(document.head, c);
        }
        placeBottom(a, l) {
          const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
          this.applyPlacement("bottom", u, h);
        }
        placeTop(a, l) {
          const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", u, h);
        }
        placeLeft(a, l) {
          const c = a.getBoundingClientRect(), u = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", u, h);
        }
        placeRight(a, l) {
          const c = a.getBoundingClientRect(), u = c.right + this.offsetRight + l.marginRight, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", u, h);
        }
        applyPlacement(a, l, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(a, l = null, c = {}) {
          const u = document.createElement(a);
          Array.isArray(l) ? u.classList.add(...l) : l && u.classList.add(l);
          for (const h in c)
            c.hasOwnProperty(h) && (u[h] = c[h]);
          return u;
        }
        append(a, l) {
          Array.isArray(l) ? l.forEach((c) => a.appendChild(c)) : a.appendChild(l);
        }
        prepend(a, l) {
          Array.isArray(l) ? (l = l.reverse()).forEach((c) => a.prepend(c)) : a.prepend(l);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(xo);
const wo = /* @__PURE__ */ ve(_e);
class Pe {
  constructor() {
    this.lib = new wo();
  }
  /**
   * Release the library
   */
  destroy() {
    this.lib.destroy();
  }
  /**
   * Shows tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */
  show(e, t, o) {
    this.lib.show(e, t, o);
  }
  /**
   * Hides tooltip
   *
   * @param skipHidingDelay — pass true to immediately hide the tooltip
   */
  hide(e = !1) {
    this.lib.hide(e);
  }
  /**
   * Binds 'mouseenter' and 'mouseleave' events that shows/hides the Tooltip
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */
  onHover(e, t, o) {
    this.lib.onHover(e, t, o);
  }
}
class Co extends T {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.tooltip = new Pe();
  }
  /**
   * Destroy Module
   */
  destroy() {
    this.tooltip.destroy();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    this.tooltip.show(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    this.tooltip.hide();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    this.tooltip.onHover(e, t, o);
  }
}
class yo extends T {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function ut(s, e) {
  const t = {};
  return Object.entries(s).forEach(([o, n]) => {
    if (j(n)) {
      const i = e ? `${e}.${o}` : o;
      Object.values(n).every((a) => J(a)) ? t[o] = i : t[o] = ut(n, i);
      return;
    }
    t[o] = n;
  }), t;
}
const Z = ut(st);
function Bo(s, e) {
  const t = {};
  return Object.keys(s).forEach((o) => {
    const n = e[o];
    n !== void 0 ? t[n] = s[o] : t[o] = s[o];
  }), t;
}
const Eo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', To = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
class P {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   */
  constructor(e) {
    this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      this.nodes.root.classList.remove(P.CSS.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      this.nodes.root.classList.remove(P.CSS.noHover);
    }, this.onErrorAnimationEnd = () => {
      this.nodes.icon.classList.remove(P.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.params = e, this.nodes.root = this.make(e);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params.closeOnActivate;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root.classList.contains(P.CSS.focused);
  }
  /**
   * Popover item CSS classes
   */
  static get CSS() {
    return {
      container: "ce-popover-item",
      title: "ce-popover-item__title",
      secondaryTitle: "ce-popover-item__secondary-title",
      icon: "ce-popover-item__icon",
      active: "ce-popover-item--active",
      disabled: "ce-popover-item--disabled",
      focused: "ce-popover-item--focused",
      hidden: "ce-popover-item--hidden",
      confirmationState: "ce-popover-item--confirmation",
      noHover: "ce-popover-item--no-hover",
      noFocus: "ce-popover-item--no-focus",
      wobbleAnimation: "wobble"
    };
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    this.nodes.root.classList.toggle(P.CSS.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    this.nodes.root.classList.toggle(P.CSS.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   */
  make(e) {
    const t = d.make("div", P.CSS.container);
    return e.name && (t.dataset.itemName = e.name), this.nodes.icon = d.make("div", P.CSS.icon, {
      innerHTML: e.icon || Eo
    }), t.appendChild(this.nodes.icon), t.appendChild(d.make("div", P.CSS.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && t.appendChild(d.make("div", P.CSS.secondaryTitle, {
      textContent: e.secondaryLabel
    })), e.isActive && t.classList.add(P.CSS.active), e.isDisabled && t.classList.add(P.CSS.disabled), t;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    const t = {
      ...this.params,
      ...e,
      confirmation: e.confirmation
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(P.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(P.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    this.nodes.root.classList.add(P.CSS.noHover), this.nodes.root.classList.add(P.CSS.noFocus), this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    if (e.confirmation === void 0)
      try {
        e.onActivate(e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    this.nodes.icon.classList.contains(P.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(P.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const he = class {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(s, e) {
    this.cursor = -1, this.items = [], this.items = s || [], this.focusedCssClass = e;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(s) {
    s < this.items.length && s >= -1 && (this.dropCursor(), this.cursor = s, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(s) {
    this.items = s;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(he.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(he.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(s) {
    if (this.items.length === 0)
      return this.cursor;
    let e = this.cursor;
    return e === -1 ? e = s === he.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), s === he.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, d.canSetCaret(this.items[e]) && re(() => k.setCursor(this.items[e]), 50)(), this.items[e].classList.add(this.focusedCssClass), e;
  }
};
let ie = he;
ie.directions = {
  RIGHT: "right",
  LEFT: "left"
};
class G {
  /**
   * @param {FlipperOptions} options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (this.isEventReadyForHandling(t))
        switch (G.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case B.TAB:
            this.handleTabPress(t);
            break;
          case B.LEFT:
          case B.UP:
            this.flipLeft();
            break;
          case B.RIGHT:
          case B.DOWN:
            this.flipRight();
            break;
          case B.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new ie(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || G.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      B.TAB,
      B.LEFT,
      B.RIGHT,
      B.ENTER,
      B.UP,
      B.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? ie.directions.LEFT : ie.directions.RIGHT) {
      case ie.directions.RIGHT:
        this.flipRight();
        break;
      case ie.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), D(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
const ue = class {
  /**
   * Locks body element scroll
   */
  lock() {
    Xe ? this.lockHard() : document.body.classList.add(ue.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    Xe ? this.unlockHard() : document.body.classList.remove(ue.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(ue.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(ue.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
let pt = ue;
pt.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
var So = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, Mo = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Io(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && So(e, t, n), n;
}, fe = /* @__PURE__ */ ((s) => (s.Close = "close", s))(fe || {});
const z = class extends xe {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   */
  constructor(s) {
    super(), this.scopeElement = document.body, this.listeners = new at(), this.scrollLocker = new pt(), this.nodes = {
      wrapper: null,
      popover: null,
      nothingFoundMessage: null,
      customContent: null,
      items: null,
      overlay: null
    }, this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.onFlip = () => {
      this.items.find((t) => t.isFocused).onFocus();
    }, this.items = s.items.map((e) => new P(e)), s.scopeElement !== void 0 && (this.scopeElement = s.scopeElement), s.messages && (this.messages = {
      ...this.messages,
      ...s.messages
    }), s.customContentFlippableItems && (this.customContentFlippableItems = s.customContentFlippableItems), this.make(), s.customContent && this.addCustomContent(s.customContent), this.initializeFlipper();
  }
  /**
   * Popover CSS classes
   */
  static get CSS() {
    return {
      popover: "ce-popover",
      popoverOpenTop: "ce-popover--open-top",
      popoverOpened: "ce-popover--opened",
      search: "ce-popover__search",
      nothingFoundMessage: "ce-popover__nothing-found-message",
      nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
      customContent: "ce-popover__custom-content",
      customContentHidden: "ce-popover__custom-content--hidden",
      items: "ce-popover__items",
      overlay: "ce-popover__overlay",
      overlayHidden: "ce-popover__overlay--hidden"
    };
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper.hasFocus();
  }
  /**
   * Open popover
   */
  show() {
    this.shouldOpenBottom || (this.nodes.popover.style.setProperty(
      "--popover-height",
      this.height + "px"
    ), this.nodes.popover.classList.add(z.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(z.CSS.overlayHidden), this.nodes.popover.classList.add(z.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && setTimeout(() => {
      this.search.focus();
    }, 100), te() && this.scrollLocker.lock();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(z.CSS.popoverOpened), this.nodes.popover.classList.remove(z.CSS.popoverOpenTop), this.nodes.overlay.classList.add(z.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((s) => s.reset()), this.search !== void 0 && this.search.clear(), te() && this.scrollLocker.unlock(), this.emit(
      "close"
      /* Close */
    );
  }
  /**
   * Clears memory
   */
  destroy() {
    this.flipper.deactivate(), this.listeners.removeAll(), te() && this.scrollLocker.unlock();
  }
  /**
   * Constructs HTML element corresponding to popover
   */
  make() {
    this.nodes.popover = d.make("div", [z.CSS.popover]), this.nodes.nothingFoundMessage = d.make(
      "div",
      [z.CSS.nothingFoundMessage],
      {
        textContent: this.messages.nothingFound
      }
    ), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [z.CSS.items]), this.items.forEach((s) => {
      this.nodes.items.appendChild(s.getElement());
    }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (s) => {
      const e = this.getTargetItem(s);
      e !== void 0 && this.handleItemClick(e);
    }), this.nodes.wrapper = d.make("div"), this.nodes.overlay = d.make("div", [
      z.CSS.overlay,
      z.CSS.overlayHidden
    ]), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
  }
  /**
   * Adds search to the popover
   */
  // private addSearch(): void {
  //   this.search = new SearchInput({
  //     items: this.items,
  //     placeholder: this.messages.search,
  //     onSearch: (query: string, result: PopoverItem[]): void => {
  //       this.items.forEach((item) => {
  //         const isHidden = !result.includes(item);
  //         item.toggleHidden(isHidden);
  //       });
  //       this.toggleNothingFoundMessage(result.length === 0);
  //       this.toggleCustomContent(query !== "");
  //       /** List of elements available for keyboard navigation considering search query applied */
  //       const flippableElements =
  //         query === ""
  //           ? this.flippableElements
  //           : result.map((item) => item.getElement());
  //       if (this.flipper.isActivated) {
  //         /** Update flipper items with only visible */
  //         this.flipper.deactivate();
  //         this.flipper.activate(flippableElements);
  //       }
  //     },
  //   });
  //   const searchElement = this.search.getElement();
  //   searchElement.classList.add(Popover.CSS.search);
  //   this.nodes.popover.insertBefore(
  //     searchElement,
  //     this.nodes.popover.firstChild
  //   );
  // }
  /**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */
  addCustomContent(s) {
    this.nodes.customContent = s, this.nodes.customContent.classList.add(z.CSS.customContent), this.nodes.popover.insertBefore(s, this.nodes.popover.firstChild);
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(s) {
    return this.items.find(
      (e) => s.composedPath().includes(e.getElement())
    );
  }
  /**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */
  handleItemClick(s) {
    s.isDisabled || (this.items.filter((e) => e !== s).forEach((e) => e.reset()), s.handleClick(), this.toggleItemActivenessIfNeeded(s), s.closeOnActivate && this.hide());
  }
  /**
   * Creates Flipper instance which allows to navigate between popover items via keyboard
   */
  initializeFlipper() {
    this.flipper = new G({
      items: this.flippableElements,
      focusedItemClass: P.CSS.focused,
      allowedKeys: [B.TAB, B.UP, B.DOWN, B.ENTER]
    }), this.flipper.onFlip(this.onFlip);
  }
  /**
   * Returns list of elements available for keyboard navigation.
   * Contains both usual popover items elements and custom html content.
   */
  get flippableElements() {
    const s = this.items.map((t) => t.getElement());
    return (this.customContentFlippableItems || []).concat(s);
  }
  get height() {
    let s = 0;
    if (this.nodes.popover === null)
      return s;
    const e = this.nodes.popover.cloneNode(!0);
    return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(z.CSS.popoverOpened), document.body.appendChild(e), s = e.offsetHeight, e.remove(), s;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    const s = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t = this.height, o = s.top + t, n = s.top - t, i = Math.min(
      window.innerHeight,
      e.bottom
    );
    return n < e.top || o <= i;
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(s) {
    this.nodes.nothingFoundMessage.classList.toggle(
      z.CSS.nothingFoundMessageDisplayed,
      s
    );
  }
  /**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */
  toggleCustomContent(s) {
    var e;
    (e = this.nodes.customContent) == null || e.classList.toggle(
      z.CSS.customContentHidden,
      s
    );
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(s) {
    if (s.toggle === !0 && s.toggleActive(), typeof s.toggle == "string") {
      const e = this.items.filter(
        (t) => t.toggle === s.toggle
      );
      if (e.length === 1) {
        s.toggleActive();
        return;
      }
      e.forEach((t) => {
        t.toggleActive(t === s);
      });
    }
  }
};
let He = z;
Mo([
  ce
], He.prototype, "height", 1);
class Lo extends T {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new k(), this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   *
   * @returns {{opened: string, closed: string}}
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    return (e = this.popover) == null ? void 0 : e.flipper;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = d.make("div", [this.CSS.settings]);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes();
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  open(e = this.Editor.BlockManager.currentBlock) {
    this.opened = !0, this.selection.save(), e.selected = !0, this.Editor.BlockSelection.clearCache();
    const [t, o] = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened), this.popover = new He({
      searchable: !0,
      items: t.map((n) => this.resolveTuneAliases(n)),
      customContent: o,
      customContentFlippableItems: this.getControls(o),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: W.ui(Z.ui.popover, "Nothing found"),
        search: W.ui(Z.ui.popover, "Filter")
      }
    }), this.popover.on(fe.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Close Block Settings pane
   */
  close() {
    this.opened = !1, k.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(fe.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null);
  }
  /**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */
  getControls(e) {
    const { StylesAPI: t } = this.Editor, o = e.querySelectorAll(
      `.${t.classes.settingsButton}, ${d.allInputsSelector}`
    );
    return Array.from(o);
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    const t = Bo(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
class $ extends T {
  constructor() {
    super(...arguments), this.opened = !1, this.tools = [], this.flipper = null, this.togglingCallback = null;
  }
  /**
   * CSS getter
   */
  static get CSS() {
    return {
      conversionToolbarWrapper: "ce-conversion-toolbar",
      conversionToolbarShowed: "ce-conversion-toolbar--showed",
      conversionToolbarTools: "ce-conversion-toolbar__tools",
      conversionToolbarLabel: "ce-conversion-toolbar__label",
      conversionTool: "ce-conversion-tool",
      conversionToolCurrent: "ce-conversion-tool--current",
      conversionToolIcon: "ce-conversion-tool__icon",
      conversionToolCheckIcon: "ce-conversion-tool__check-icon",
      conversionToolSecondaryLabel: "ce-conversion-tool__secondary-label",
      conversionToolFocused: "ce-conversion-tool--focused",
      conversionToolActive: "ce-conversion-tool--active"
    };
  }
  /**
   * Create UI of Conversion Toolbar
   */
  make() {
    this.nodes.wrapper = d.make("div", [
      $.CSS.conversionToolbarWrapper,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.tools = d.make(
      "div",
      $.CSS.conversionToolbarTools
    );
    const e = d.make("div", $.CSS.conversionToolbarLabel, {
      textContent: W.ui(
        Z.ui.inlineToolbar.converter,
        "Convert to"
      )
    });
    return this.addTools(), this.enableFlipper(), d.append(this.nodes.wrapper, e), d.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
  }
  /**
   * Deactivates flipper and removes all nodes
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
  }
  /**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */
  toggle(e) {
    this.opened ? this.close() : this.open(), D(e) && (this.togglingCallback = e);
  }
  /**
   * Shows Conversion Toolbar
   */
  open() {
    this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(
      $.CSS.conversionToolbarShowed
    ), window.requestAnimationFrame(() => {
      this.flipper.activate(
        this.tools.map((e) => e.button).filter((e) => !e.classList.contains(
          $.CSS.conversionToolHidden
        ))
      ), this.flipper.focusFirst(), D(this.togglingCallback) && this.togglingCallback(!0);
    });
  }
  /**
   * Closes Conversion Toolbar
   */
  close() {
    this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(
      $.CSS.conversionToolbarShowed
    ), D(this.togglingCallback) && this.togglingCallback(!1);
  }
  /**
   * Returns true if it has more than one tool available for convert in
   */
  hasTools() {
    return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : !0;
  }
  /**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   * @param blockDataOverrides - If this conversion fired by the one of multiple Toolbox items, extend converted data with this item's "data" overrides
   */
  async replaceWithBlock(e, t) {
    const { BlockManager: o, BlockSelection: n, InlineToolbar: i, Caret: r } = this.Editor;
    o.convert(
      this.Editor.BlockManager.currentBlock,
      e,
      t
    ), n.clearSelection(), this.close(), i.close(), window.requestAnimationFrame(() => {
      r.setToBlock(
        this.Editor.BlockManager.currentBlock,
        r.positions.END
      );
    });
  }
  /**
   * Iterates existing Tools and inserts to the ConversionToolbar
   * if tools have ability to import
   */
  addTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.entries()).forEach(([t, o]) => {
      var i;
      const n = o.conversionConfig;
      !n || !n.import || (i = o.toolbox) == null || i.forEach(
        (r) => this.addToolIfValid(t, r)
      );
    });
  }
  /**
   * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
   *
   * @param name - tool's name
   * @param toolboxSettings - tool's single toolbox setting
   */
  addToolIfValid(e, t) {
    K(t) || !t.icon || this.addTool(e, t);
  }
  /**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */
  addTool(e, t) {
    var a;
    const o = d.make("div", [$.CSS.conversionTool]), n = d.make("div", [$.CSS.conversionToolIcon]), i = d.make("div", [
      $.CSS.conversionToolCheckIcon
    ]);
    switch (o.dataset.tool = e, e) {
      case "paragraph":
        n.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H6H11.5C11.7761 0.5 12 0.723858 12 1V2.5C12 2.77614 11.7761 3 11.5 3C11.2238 3 11 2.77614 11 2.5V1.5H6.5V10.5H8.11107C8.38721 10.5 8.61107 10.7239 8.61107 11C8.61107 11.2761 8.38721 11.5 8.11107 11.5H6H3.66663C3.39048 11.5 3.16663 11.2761 3.16663 11C3.16663 10.7239 3.39048 10.5 3.66663 10.5H5.5V1.5H1V2.5C1 2.77614 0.776142 3 0.5 3C0.223858 3 0 2.77614 0 2.5V1Z" />
        </svg>`;
        break;
      case "header1":
        n.innerHTML = '<svg width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5V9.5C0 9.77614 0.223858 10 0.5 10C0.776142 10 1 9.77614 1 9.5V5.5H7V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V4.5H1V0.5ZM13 2.5C13 2.3156 12.8985 2.14617 12.7359 2.05916C12.5733 1.97215 12.3761 1.98169 12.2226 2.08398L10.7226 3.08398C10.4929 3.23715 10.4308 3.54759 10.584 3.77735C10.7371 4.00712 11.0476 4.0692 11.2773 3.91603L12 3.43426V9.5C12 9.77614 12.2239 10 12.5 10C12.7761 10 13 9.77614 13 9.5V2.5Z" /></svg>';
        break;
      case "header2":
        n.innerHTML = '<svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5V9.5C0 9.77614 0.223858 10 0.5 10C0.776142 10 1 9.77614 1 9.5V5.5H7V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V4.5H1V0.5ZM11.5334 4.11564C11.7372 4.00803 11.9718 3.97417 12.1977 4.01976C12.4235 4.06535 12.6268 4.18761 12.773 4.36593C12.9192 4.54426 12.9994 4.76771 13 4.99847L13 4.9995C13.0009 5.19384 12.9438 5.38392 12.8361 5.54544L10.0998 9.20034C9.98629 9.35188 9.96815 9.55451 10.0529 9.7238C10.1376 9.89308 10.3107 10 10.5 10H13.5C13.7761 10 14 9.77614 14 9.5C14 9.22386 13.7761 9 13.5 9H11.499L13.644 6.13492C13.6484 6.12897 13.6528 6.12292 13.6569 6.11678C13.8821 5.78634 14.0017 5.39536 14 4.99551C13.9987 4.53462 13.8385 4.08826 13.5463 3.73187C13.2539 3.37535 12.8475 3.13075 12.3956 3.03953C11.9437 2.94831 11.4741 3.01608 11.0665 3.23136C10.6588 3.44663 10.338 3.79616 10.1583 4.22077C10.0507 4.47507 10.1696 4.76848 10.4239 4.8761C10.6782 4.98373 10.9716 4.86482 11.0792 4.61051C11.1691 4.39805 11.3296 4.22326 11.5334 4.11564Z" /></svg>';
        break;
      case "header3":
        n.innerHTML = '<svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5V9.5C0 9.77614 0.223858 10 0.5 10C0.776142 10 1 9.77614 1 9.5V5.5H7V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V4.5H1V0.5ZM10.5 3C10.2239 3 10 3.22386 10 3.5C10 3.77614 10.2239 4 10.5 4H12.5397L11.3404 5.71327C11.2335 5.866 11.2204 6.06553 11.3065 6.23089C11.3926 6.39625 11.5635 6.49999 11.75 6.5C11.9555 6.50001 12.1579 6.55072 12.3392 6.64763C12.5205 6.74454 12.675 6.88466 12.7892 7.05558C12.9034 7.2265 12.9737 7.42294 12.9939 7.62751C13.014 7.83208 12.9834 8.03846 12.9047 8.22837C12.8261 8.41827 12.7018 8.58585 12.5429 8.71626C12.384 8.84666 12.1954 8.93587 11.9938 8.97598C11.7922 9.01608 11.5838 9.00585 11.3871 8.94619C11.1904 8.88652 11.0114 8.77927 10.866 8.63393C10.6708 8.43868 10.3542 8.43869 10.1589 8.63396C9.96368 8.82924 9.96369 9.14582 10.159 9.34107C10.4206 9.60269 10.7427 9.79574 11.0968 9.90314C11.4509 10.0105 11.826 10.0289 12.1889 9.95676C12.5518 9.88457 12.8913 9.724 13.1773 9.48927C13.4633 9.25454 13.687 8.9529 13.8286 8.61106C13.9702 8.26922 14.0253 7.89774 13.989 7.52952C13.9528 7.1613 13.8263 6.8077 13.6207 6.50004C13.4152 6.19239 13.1369 5.94017 12.8106 5.76574C12.7404 5.7282 12.6684 5.69451 12.595 5.66475L13.9096 3.78673C14.0165 3.634 14.0296 3.43446 13.9435 3.26909C13.8574 3.10373 13.6864 3 13.5 3H10.5Z" /></svg>';
        break;
      case "unorderedList":
        n.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.5C2 2.05228 1.55228 2.5 1 2.5C0.447715 2.5 0 2.05228 0 1.5C0 0.947715 0.447715 0.5 1 0.5C1.55228 0.5 2 0.947715 2 1.5ZM2 6C2 6.55228 1.55228 7 1 7C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5C1.55228 5 2 5.44772 2 6ZM1 11.5C1.55228 11.5 2 11.0523 2 10.5C2 9.94771 1.55228 9.5 1 9.5C0.447715 9.5 0 9.94771 0 10.5C0 11.0523 0.447715 11.5 1 11.5ZM4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H11.5C11.7761 2 12 1.77614 12 1.5C12 1.22386 11.7761 1 11.5 1H4.5ZM4 6C4 5.72386 4.22386 5.5 4.5 5.5H11.5C11.7761 5.5 12 5.72386 12 6C12 6.27614 11.7761 6.5 11.5 6.5H4.5C4.22386 6.5 4 6.27614 4 6ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H11.5C11.7761 11 12 10.7761 12 10.5C12 10.2239 11.7761 10 11.5 10H4.5Z" /></svg>';
        break;
      case "orderedList":
        n.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.74245 0.0626789C1.90143 0.150792 2.00007 0.318238 2.00007 0.5V4.5C2.00007 4.77614 1.77621 5 1.50007 5C1.22392 5 1.00007 4.77614 1.00007 4.5V1.40212L0.765066 1.549C0.530898 1.69535 0.222423 1.62417 0.0760678 1.39C-0.0702874 1.15583 0.000899193 0.847356 0.235067 0.701001L1.23507 0.0760011C1.3892 -0.0203329 1.58347 -0.0254338 1.74245 0.0626789ZM4 1.5C4 1.22386 4.22386 1 4.5 1H11.5C11.7761 1 12 1.22386 12 1.5C12 1.77614 11.7761 2 11.5 2H4.5C4.22386 2 4 1.77614 4 1.5ZM4 6C4 5.72386 4.22386 5.5 4.5 5.5H11.5C11.7761 5.5 12 5.72386 12 6C12 6.27614 11.7761 6.5 11.5 6.5H4.5C4.22386 6.5 4 6.27614 4 6ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H11.5C11.7761 11 12 10.7761 12 10.5C12 10.2239 11.7761 10 11.5 10H4.5ZM1.35604 8.02953C1.42178 8.00579 1.49179 7.9962 1.56149 8.00136C1.63119 8.00652 1.69902 8.02632 1.76056 8.05948C1.8221 8.09264 1.87595 8.1384 1.91861 8.19379C1.96126 8.24917 1.99176 8.31294 2.00811 8.38092C2.02388 8.44647 2.02614 8.51453 2.0148 8.58094C2.01397 8.58393 2.01228 8.58991 2.00939 8.59919C2.00337 8.61846 1.99479 8.64356 1.98437 8.6706C1.97388 8.69782 1.96284 8.72363 1.95229 8.74541C1.9471 8.75613 1.9426 8.76467 1.93898 8.77108C1.93556 8.77716 1.93378 8.77982 1.93378 8.77982C1.9232 8.79514 1.91348 8.81103 1.90467 8.82744L0.059498 11.2634C-0.0237152 11.4184 -0.0193906 11.6057 0.0708864 11.7566C0.161163 11.9076 0.324114 12 0.5 12H2.49421C2.77035 12 2.99421 11.7761 2.99421 11.5C2.99421 11.2239 2.77035 11 2.49421 11H1.33604L2.77479 9.32082C2.83921 9.22067 2.88712 9.10899 2.91752 9.0301C2.94992 8.94598 2.9828 8.84533 2.99656 8.7715C3.03512 8.56454 3.02962 8.35178 2.98039 8.14709C2.93117 7.94241 2.83933 7.7504 2.71088 7.58361C2.58242 7.41683 2.42024 7.279 2.23491 7.17914C2.04958 7.07928 1.84528 7.01963 1.63533 7.00409C1.42538 6.98854 1.21452 7.01745 1.0165 7.08893C0.818487 7.16041 0.637775 7.27285 0.486163 7.41891C0.33455 7.56496 0.215443 7.74135 0.136616 7.93656C0.0332176 8.19261 0.156969 8.484 0.413022 8.5874C0.669076 8.6908 0.960469 8.56705 1.06387 8.311C1.09005 8.24617 1.1296 8.18759 1.17995 8.13909C1.23029 8.09059 1.2903 8.05326 1.35604 8.02953Z" /></svg>';
        break;
      case "blockChecklist":
        n.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.86941 0.158694C4.05818 0.360241 4.04782 0.676654 3.84627 0.865422L2.01274 2.8229C1.82026 3.00318 1.52085 3.00297 1.32862 2.82241L0.157681 1.57218C-0.0435939 1.38312 -0.053497 1.0667 0.135562 0.865422C0.32462 0.664148 0.641048 0.654245 0.842322 0.843303L1.67144 1.77246L3.16268 0.135557C3.36423 -0.0532111 3.68064 -0.0428523 3.86941 0.158694ZM5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H11.5C11.7761 2 12 1.77614 12 1.5C12 1.22386 11.7761 1 11.5 1H5.5ZM5.5 5.5C5.22386 5.5 5 5.72386 5 6C5 6.27615 5.22386 6.5 5.5 6.5H11.5C11.7761 6.5 12 6.27615 12 6C12 5.72386 11.7761 5.5 11.5 5.5H5.5ZM5 10.5C5 10.2238 5.22386 9.99999 5.5 9.99999H11.5C11.7761 9.99999 12 10.2238 12 10.5C12 10.7761 11.7761 11 11.5 11H5.5C5.22386 11 5 10.7761 5 10.5ZM3.84627 5.36493C4.04782 5.17617 4.05818 4.85975 3.86941 4.65821C3.68064 4.45666 3.36423 4.4463 3.16268 4.63507L1.67144 6.27197L0.842322 5.34281C0.641048 5.15376 0.32462 5.16366 0.135562 5.36493C-0.053497 5.56621 -0.0435939 5.88264 0.157681 6.07169L1.32862 7.32192C1.52085 7.50248 1.82026 7.50269 2.01274 7.32241L3.84627 5.36493ZM3.84627 9.86542C4.04782 9.67665 4.05818 9.36024 3.86941 9.15869C3.68064 8.95715 3.36423 8.94679 3.16268 9.13556L1.67144 10.7725L0.842322 9.8433C0.641048 9.65424 0.32462 9.66415 0.135562 9.86542C-0.053497 10.0667 -0.0435939 10.3831 0.157681 10.5722L1.32862 11.8224C1.52085 12.003 1.82026 12.0032 2.01274 11.8229L3.84627 9.86542Z" /></svg>';
        break;
      default:
        n.innerHTML = t.icon;
    }
    i.innerHTML = '<svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1919 0.278013C11.5907 0.660142 11.6041 1.29316 11.222 1.69191L5.47199 7.69191C5.09491 8.08539 4.47219 8.10446 4.07172 7.73481L0.821725 4.7348C0.415904 4.3602 0.390598 3.72754 0.765202 3.32172C1.13981 2.9159 1.77246 2.89059 2.17829 3.2652L4.7071 5.59949L9.77802 0.308096C10.1601 -0.090647 10.7932 -0.104116 11.1919 0.278013Z" /></svg>', d.append(o, n), d.append(
      o,
      d.text(
        W.t(
          Z.toolNames,
          t.title || ae(e)
        )
      )
    ), d.append(o, i);
    const r = (a = this.Editor.Tools.blockTools.get(e)) == null ? void 0 : a.shortcut;
    if (r) {
      const l = d.make(
        "span",
        $.CSS.conversionToolSecondaryLabel,
        {
          innerText: Ne(r)
        }
      );
      d.append(o, l);
    }
    d.append(this.nodes.tools, o), this.tools.push({
      name: e,
      button: o,
      toolboxItem: t
    }), this.listeners.on(o, "click", async () => {
      await this.replaceWithBlock(e, t.data);
    });
  }
  /**
   * Get current tool button and add icon
   */
  async filterTools() {
    const { currentBlock: e } = this.Editor.BlockManager, t = await e.getActiveToolboxEntry();
    function o(n, i) {
      return n.icon === i.icon && n.title === i.title;
    }
    this.tools.forEach((n) => {
      let i = !1;
      if (t) {
        const r = o(
          t,
          n.toolboxItem
        );
        i = n.button.dataset.tool === e.name && r;
      }
      n.button.classList.toggle(
        $.CSS.conversionToolCurrent,
        i
      );
    });
  }
  /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */
  enableFlipper() {
    this.flipper = new G({
      focusedItemClass: $.CSS.conversionToolFocused
    });
  }
}
var Oe = {}, _o = {
  get exports() {
    return Oe;
  },
  set exports(s) {
    Oe = s;
  }
};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var r = o[i] = { i, l: !1, exports: {} };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, r, a) {
        n.o(i, r) || Object.defineProperty(i, r, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, r) {
        if (1 & r && (i = n(i)), 8 & r || 4 & r && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & r && typeof i != "string")
          for (var l in i)
            n.d(a, l, function(c) {
              return i[c];
            }.bind(null, l));
        return a;
      }, n.n = function(i) {
        var r = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(r, "a", r), r;
      }, n.o = function(i, r) {
        return Object.prototype.hasOwnProperty.call(i, r);
      }, n.p = "", n(n.s = 0);
    }([function(t, o, n) {
      function i(l, c) {
        for (var u = 0; u < c.length; u++) {
          var h = c[u];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      function r(l, c, u) {
        return c && i(l.prototype, c), u && i(l, u), l;
      }
      n.r(o);
      var a = function() {
        function l(c) {
          var u = this;
          (function(h, f) {
            if (!(h instanceof f))
              throw new TypeError("Cannot call a class as a function");
          })(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function(h) {
            u.execute(h);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return r(l, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), r(l, [{ key: "parseShortcutName", value: function(c) {
          c = c.split("+");
          for (var u = 0; u < c.length; u++) {
            c[u] = c[u].toUpperCase();
            var h = !1;
            for (var f in l.supportedCommands)
              if (l.supportedCommands[f].includes(c[u])) {
                h = this.commands[f] = !0;
                break;
              }
            h || (this.keys[c[u]] = !0);
          }
          for (var m in l.supportedCommands)
            this.commands[m] || (this.commands[m] = !1);
        } }, { key: "execute", value: function(c) {
          var u, h = { CMD: c.ctrlKey || c.metaKey, SHIFT: c.shiftKey, ALT: c.altKey }, f = !0;
          for (u in this.commands)
            this.commands[u] !== h[u] && (f = !1);
          var m, p = !0;
          for (m in this.keys)
            p = p && c.keyCode === l.keyCodes[m];
          f && p && this.callback(c);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), l;
      }();
      o.default = a;
    }]).default;
  });
})(_o);
const Oo = /* @__PURE__ */ ve(Oe);
class Ao {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const o = new Oo({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), n = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...n, o]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const n = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, n.filter((i) => i !== o));
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: n }) => n === t);
  }
}
const le = new Ao();
var No = Object.defineProperty, Ro = Object.getOwnPropertyDescriptor, ft = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Ro(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && No(e, t, n), n;
}, be = /* @__PURE__ */ ((s) => (s.Opened = "toolbox-opened", s.Closed = "toolbox-closed", s.BlockAdded = "toolbox-block-added", s))(be || {});
const gt = class extends xe {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: s, tools: e, i18nLabels: t }) {
    super(), this.opened = !1, this.nodes = {
      toolbox: null
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = s, this.tools = e, this.i18nLabels = t;
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   *
   * @returns {Object<string, string>}
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Makes the Toolbox
   */
  make() {
    return this.popover = new He({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(fe.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(gt.CSS.toolbox), this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    var s;
    return (s = this.popover) == null ? void 0 : s.hasFocus();
  }
  /**
   * Destroy Module
   */
  destroy() {
    var s;
    super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (s = this.popover) == null || s.off(fe.Close, this.onPopoverClose);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(s, e) {
    this.insertNewBlock(s, e);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var s;
    this.isEmpty || ((s = this.popover) == null || s.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var s;
    (s = this.popover) == null || s.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  get toolsToBeDisplayed() {
    const s = [];
    return this.tools.forEach((e) => {
      e.toolbox && s.push(e);
    }), s;
  }
  get toolboxItemsToBeDisplayed() {
    const s = (e, t) => ({
      icon: e.icon,
      title: W.t(Z.toolNames, e.title || ae(t.name)),
      name: t.name,
      onActivate: () => {
        this.toolButtonActivated(t.name, e.data);
      },
      secondaryLabel: t.shortcut ? Ne(t.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((e, t) => (Array.isArray(t.toolbox) ? t.toolbox.forEach((o) => {
      e.push(s(o, t));
    }) : t.toolbox !== void 0 && e.push(s(t.toolbox, t)), e), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((s) => {
      const e = s.shortcut;
      e && this.enableShortcutForTool(s.name, e);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(s, e) {
    le.add({
      name: e,
      on: this.api.ui.nodes.redactor,
      handler: (t) => {
        t.preventDefault();
        const o = this.api.blocks.getCurrentBlockIndex(), n = this.api.blocks.getBlockByIndex(o);
        if (n)
          try {
            this.api.blocks.convert(n.id, s), window.requestAnimationFrame(() => {
              this.api.caret.setToBlock(o, "end");
            });
            return;
          } catch {
          }
        this.insertNewBlock(s);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((s) => {
      const e = s.shortcut;
      e && le.remove(this.api.ui.nodes.redactor, e);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(s, e) {
    const t = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(t);
    if (!o)
      return;
    const n = o.isEmpty ? t : t + 1;
    let i;
    if (e) {
      const a = await this.api.blocks.composeBlockData(s);
      i = Object.assign(a, e);
    }
    const r = this.api.blocks.insert(
      s,
      i,
      void 0,
      n,
      void 0,
      o.isEmpty
    );
    r.call(X.APPEND_CALLBACK), this.api.caret.setToBlock(n), this.emit("toolbox-block-added", {
      block: r
    }), this.api.toolbar.close();
  }
};
let Fe = gt;
ft([
  ce
], Fe.prototype, "toolsToBeDisplayed", 1);
ft([
  ce
], Fe.prototype, "toolboxItemsToBeDisplayed", 1);
const bt = "block hovered", Do = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g transform="translate(4 1.5)" fill-rule="evenodd"><circle cx="1.3" cy="1.3" r="1.3"/><circle cx="6.5" cy="1.3" r="1.3"/><circle cx="6.5" cy="6.5" r="1.3"/><circle cx="1.3" cy="6.5" r="1.3"/><circle cx="6.5" cy="11.7" r="1.3"/><circle cx="1.3" cy="11.7" r="1.3"/></g></svg>', Po = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g transform="translate(1 1.5)" fill-rule="evenodd"><rect x="6" width="2" height="13" rx="1"/><rect x=".5" y="5.5" width="13" height="2" rx="1"/></g></svg>';
class Ho extends T {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null, this.tooltip = new Pe();
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          L(
            "toolbox.open() called before initialization is finished",
            "warn"
          );
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          L(
            "toolbox.toggle() called before initialization is finished",
            "warn"
          );
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(
        this.CSS.settingsTogglerHidden
      ),
      show: () => this.nodes.settingsToggler.classList.remove(
        this.CSS.settingsTogglerHidden
      )
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(
      () => {
        this.drawUI(), this.enableModuleBindings();
      },
      { timeout: 2e3 }
    );
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      L(
        "Can't open Toolbar since Editor initialization is not finished yet",
        "warn"
      );
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI, n = e.pluginsContent, i = window.getComputedStyle(n), r = parseInt(
      i.paddingTop,
      10
    ), a = t.offsetHeight;
    let l;
    o ? l = t.offsetTop + a : l = t.offsetTop + r, this.nodes.wrapper.style.top = `${Math.floor(l)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e;
    this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (e = this.toolboxInstance) == null || e.close(), this.Editor.BlockSettings.close());
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    re(() => {
      this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
    }, 50)();
  }
  /**
   * Draws Toolbar elements
   */
  make() {
    this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach((t) => {
      this.nodes[t] = d.make("div", this.CSS[t]);
    }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
      innerHTML: Po
    }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(
      this.nodes.plusButton,
      "click",
      () => {
        this.tooltip.hide(!0), this.plusButtonClicked();
      },
      !1
    );
    const e = d.make("div");
    e.appendChild(
      document.createTextNode(W.ui(Z.ui.toolbar.toolbox, "Add"))
    ), e.appendChild(
      d.make("div", this.CSS.plusButtonShortcut, {
        textContent: "⇥ Tab"
      })
    ), this.tooltip.onHover(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
      innerHTML: Do
    }), d.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(
      this.nodes.settingsToggler,
      W.ui(Z.ui.blockTunes.toggler, "Click to tune"),
      {
        hidingDelay: 400
      }
    ), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new Fe({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: W.ui(Z.ui.popover, "Filter"),
        nothingFound: W.ui(Z.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(be.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(
        this.CSS.openedToolboxHolderModifier
      );
    }), this.toolboxInstance.on(be.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(
        this.CSS.openedToolboxHolderModifier
      );
    }), this.toolboxInstance.on(be.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, n = t.getBlockById(e.id);
      n.inputs.length === 0 && (n === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.make();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      this.nodes.settingsToggler,
      "mousedown",
      (e) => {
        var t;
        e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), this.tooltip.hide(!0);
      },
      !0
    ), te() || this.eventsDispatcher.on(bt, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
  }
}
var we = /* @__PURE__ */ ((s) => (s[s.Block = 0] = "Block", s[s.Inline = 1] = "Inline", s[s.Tune = 2] = "Tune", s))(we || {}), me = /* @__PURE__ */ ((s) => (s.Shortcut = "shortcut", s.Toolbox = "toolbox", s.EnabledInlineTools = "inlineToolbar", s.EnabledBlockTunes = "tunes", s.Config = "config", s))(me || {}), mt = /* @__PURE__ */ ((s) => (s.Shortcut = "shortcut", s.SanitizeConfig = "sanitize", s))(mt || {}), se = /* @__PURE__ */ ((s) => (s.IsEnabledLineBreaks = "enableLineBreaks", s.Toolbox = "toolbox", s.ConversionConfig = "conversionConfig", s.IsReadOnlySupported = "isReadOnlySupported", s.PasteConfig = "pasteConfig", s))(se || {}), je = /* @__PURE__ */ ((s) => (s.IsInline = "isInline", s.Title = "title", s))(je || {}), kt = /* @__PURE__ */ ((s) => (s.IsTune = "isTune", s))(kt || {});
class ze {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: n,
    isDefault: i,
    isInternal: r = !1,
    defaultPlaceholder: a
  }) {
    this.api = n, this.name = e, this.constructable = t, this.config = o, this.isDefault = i, this.isInternal = r, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (D(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (D(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === 1;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === 0;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === 2;
  }
}
const Fo = `<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.35355 0.146447C1.15829 -0.0488155 0.841709 -0.0488155 0.646447 0.146447C0.451184 0.341709 0.451184 0.658291 0.646447 0.853553L1.35355 0.146447ZM4 3.5L3.64645 3.85355C3.84171 4.04882 4.15829 4.04882 4.35355 3.85355L4 3.5ZM7.35355 0.853553C7.54882 0.658291 7.54882 0.341709 7.35355 0.146447C7.15829 -0.0488155 6.84171 -0.0488155 6.64645 0.146447L7.35355 0.853553ZM0.646447 0.853553L3.64645 3.85355L4.35355 3.14645L1.35355 0.146447L0.646447 0.853553ZM4.35355 3.85355L7.35355 0.853553L6.64645 0.146447L3.64645 3.14645L4.35355 3.85355Z" fill="#ADB5BD"/>
</svg>`;
class jo extends T {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar",
      inlineToolbarShowed: "ce-inline-toolbar--showed",
      inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
      inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
      inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
      buttonsWrapper: "ce-inline-toolbar__buttons",
      actionsWrapper: "ce-inline-toolbar__actions",
      inlineToolButton: "ce-inline-tool",
      inputField: "cdx-input",
      focusedButton: "ce-inline-tool--focused",
      conversionToggler: "ce-inline-toolbar__dropdown",
      conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
      conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
      conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
      togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
    }, this.opened = !1, this.toolbarVerticalMargin = te() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null, this.tooltip = new Pe();
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */
  tryToShow(e = !1, t = !0) {
    if (!this.allowedToShow()) {
      e && this.close();
      return;
    }
    this.move(), this.open(t), this.Editor.Toolbar.close();
  }
  /**
   * Move Toolbar to the selected text
   */
  move() {
    const e = k.rect, t = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = {
      x: e.x - t.left + 145,
      y: e.y - t.top - 40
    }, n = document.getElementsByClassName("ce-inline-toolbar")[0].clientWidth, i = document.getElementsByClassName("ce-block__content")[0].getBoundingClientRect();
    i.width < 650 && t.right - e.x < n ? o.x = o.x - (n - (t.right - e.x)) : i.width >= 650 && i.right - e.x < n && (o.x -= n - (i.right - e.x)), this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px";
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(
      ([e, t]) => {
        const o = this.getToolShortcut(e);
        o && le.remove(this.Editor.UI.nodes.redactor, o), D(t.clear) && t.clear();
      }
    ), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
  }
  /**
   * Shows Inline Toolbar
   *
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */
  open(e = !0) {
    if (this.opened)
      return;
    this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(
      `.${this.CSS.inlineToolButton}`
    ), this.opened = !0, e && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
    let t = Array.from(this.buttonsList);
    t.unshift(this.nodes.conversionToggler), t = t.filter((o) => !o.hidden), this.flipper.activate(t);
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = d.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.togglerAndButtonsWrapper = d.make(
      "div",
      this.CSS.togglerAndButtonsWrapper
    ), this.nodes.buttons = d.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e) => {
      e.target.closest(
        `.${this.CSS.actionsWrapper}`
      ) || e.preventDefault();
    }), d.append(this.nodes.wrapper, [
      this.nodes.togglerAndButtonsWrapper,
      this.nodes.actions
    ]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), window.requestAnimationFrame(() => {
      this.recalculateWidth();
    }), this.enableFlipper();
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = k.get(), o = k.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const n = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (t && e.includes(n.tagName) || n.closest('[contenteditable="true"]') === null)
      return !1;
    const r = this.Editor.BlockManager.getBlock(
      t.anchorNode
    );
    return r ? r.tool.inlineTools.size !== 0 : !1;
  }
  /**
   * Recalculate inline toolbar width
   */
  recalculateWidth() {
    this.width = this.nodes.wrapper.offsetWidth;
  }
  /**
   * Create a toggler for Conversion Dropdown
   * and prepend it to the buttons list
   */
  addConversionToggler() {
    this.nodes.conversionToggler = d.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d.make(
      "div",
      this.CSS.conversionTogglerContent
    );
    const e = d.make("div", this.CSS.conversionTogglerArrow, {
      innerHTML: Fo
    });
    this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(
      this.nodes.conversionToggler
    ), this.listeners.on(this.nodes.conversionToggler, "click", () => {
      this.Editor.ConversionToolbar.toggle((t) => {
        !t && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
      });
    }), te() === !1 && this.tooltip.onHover(this.nodes.conversionToggler, W.ui(Z.ui.inlineToolbar.converter, "Convert to"), {
      placement: "top",
      hidingDelay: 100
    });
  }
  /**
   * Changes Conversion Dropdown content for current block's Tool
   */
  async setConversionTogglerContent() {
    const { BlockManager: e } = this.Editor, { currentBlock: t } = e, o = t.name, n = t.tool.conversionConfig, i = n && n.export;
    this.nodes.conversionToggler.hidden = !i, this.nodes.conversionToggler.classList.toggle(
      this.CSS.conversionTogglerHidden,
      !i
    );
    const r = await t.getActiveToolboxEntry() || {};
    this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || ae(o);
  }
  /**
   * Makes the Conversion Dropdown
   */
  prepareConversionToolbar() {
    const e = this.Editor.ConversionToolbar.make();
    d.append(this.nodes.wrapper, e);
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Append only allowed Tools
   */
  addToolsFiltered() {
    const e = k.get(), t = this.Editor.BlockManager.getBlock(
      e.anchorNode
    );
    this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(t.tool.inlineTools.values()).forEach((o) => {
      this.addTool(o);
    }), this.recalculateWidth();
  }
  /**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */
  addTool(e) {
    const t = e.create(), o = t.render();
    if (!o) {
      L("Render method must return an instance of Node", "warn", e.name);
      return;
    }
    if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t), D(t.renderActions)) {
      const a = t.renderActions();
      this.nodes.actions.appendChild(a);
    }
    this.listeners.on(o, "click", (a) => {
      this.toolClicked(t), a.preventDefault();
    });
    const n = this.getToolShortcut(e.name);
    if (n)
      try {
        this.enableShortcuts(t, n);
      } catch {
      }
    const i = d.make("div"), r = W.t(
      Z.toolNames,
      e.title || ae(e.name)
    );
    i.appendChild(d.text(r)), n && i.appendChild(
      d.make("div", this.CSS.inlineToolbarShortcut, {
        textContent: Ne(n)
      })
    ), te() === !1 && this.tooltip.onHover(o, i, {
      placement: "top",
      hidingDelay: 100
    }), t.checkState(k.get());
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), n = t.internal.inlineTools;
    return Array.from(n.keys()).includes(e) ? this.inlineTools[e][mt.Shortcut] : o.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    le.add({
      name: t,
      handler: (o) => {
        const { currentBlock: n } = this.Editor.BlockManager;
        n && n.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param {InlineTool} tool - Tool's instance
   */
  toolClicked(e) {
    const t = k.range;
    e.surround(t), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    this.toolsInstances.forEach((e) => {
      e.checkState(k.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(
      ([t, o]) => {
        e[t] = o.create();
      }
    ), e;
  }
  /**
   * Allow to leaf buttons by arrows / tab
   * Buttons will be filled on opening
   */
  enableFlipper() {
    this.flipper = new G({
      focusedItemClass: this.CSS.focusedButton,
      allowedKeys: [
        B.ENTER,
        B.TAB
      ]
    });
  }
}
class zo extends T {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case B.BACKSPACE:
        this.backspace(e);
        break;
      case B.DELETE:
        this.delete(e);
        break;
      case B.ENTER:
        this.enter(e);
        break;
      case B.DOWN:
      case B.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case B.UP:
      case B.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case B.TAB:
        this.tabPressed(e);
        break;
    }
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && ot(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(e)));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Open Toolbox to leaf Tools
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  tabPressed(e) {
    this.Editor.BlockSelection.clearSelection(e);
    const { BlockManager: t, InlineToolbar: o, ConversionToolbar: n } = this.Editor, i = t.currentBlock;
    if (!i)
      return;
    const r = i.isEmpty, a = i.tool.isDefault && r, l = !r && n.opened, c = !r && !k.isCollapsed && o.opened;
    a ? this.activateToolbox() : !l && !c && this.activateBlockSettings();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: n } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const i = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(i, !0);
      n.setToBlock(r, n.positions.START), t.clearSelection(e);
    });
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor;
    if (t.currentBlock.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey)
      return;
    let i = this.Editor.BlockManager.currentBlock;
    this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : this.Editor.Caret.isAtEnd ? i = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : i = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(i), this.Editor.Toolbar.moveAndOpen(i), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: n, previousBlock: i } = t;
    if (!k.isCollapsed || !o.isAtStart)
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(n.currentInput === n.firstInput)) {
      o.navigatePrevious();
      return;
    }
    if (i === null)
      return;
    if (i.isEmpty) {
      t.removeBlock(i);
      return;
    }
    if (n.isEmpty) {
      t.removeBlock(n);
      const l = t.currentBlock;
      o.setToBlock(l, o.positions.END);
      return;
    }
    qe(n, i) ? this.mergeBlocks(i, n) : o.setToBlock(i, o.positions.END);
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: n, nextBlock: i } = t;
    if (!k.isCollapsed || !o.isAtEnd)
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(n.currentInput === n.lastInput)) {
      o.navigateNext();
      return;
    }
    if (i === null)
      return;
    if (i.isEmpty) {
      t.removeBlock(i);
      return;
    }
    if (n.isEmpty) {
      t.removeBlock(n), o.setToBlock(i, o.positions.START);
      return;
    }
    qe(n, i) ? this.mergeBlocks(n, i) : o.setToBlock(i, o.positions.START);
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Caret: n, Toolbar: i } = this.Editor;
    n.createShadow(e.pluginsContent), o.mergeBlocks(e, t).then(() => {
      window.requestAnimationFrame(() => {
        n.restoreCaret(e.pluginsContent), e.pluginsContent.normalize(), i.close();
      });
    });
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
    const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === B.DOWN && o) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    (e.keyCode === B.DOWN || e.keyCode === B.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? e.preventDefault() : re(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
    const t = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === B.UP && t) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    (e.keyCode === B.UP || e.keyCode === B.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? e.preventDefault() : re(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === B.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === B.ENTER && this.Editor.BlockSettings.opened, n = e.keyCode === B.ENTER && this.Editor.InlineToolbar.opened, i = e.keyCode === B.ENTER && this.Editor.ConversionToolbar.opened, r = e.keyCode === B.TAB;
    return !(e.shiftKey || r || t || o || n || i);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class Be {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return nt(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    d.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], n = e - 1, i = Math.max(0, n), r = this.blocks[i];
    e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(X.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(X.REMOVED));
    const n = o ? 1 : 0;
    if (this.blocks.splice(e, n, t), e > 0) {
      const i = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", i);
    } else {
      const i = this.blocks[e + 1];
      i ? this.insertToDOM(t, "beforebegin", i) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const n of e)
      o.appendChild(n.holder);
    if (this.length > 0) {
      if (t > 0) {
        const n = Math.min(t - 1, this.length - 1);
        this.blocks[n].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((n) => n.call(X.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(X.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(X.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(X.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
}
const Ge = "block-removed", Je = "block-added", Uo = "block-moved", Qe = "block-changed";
class $o {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
class Wo extends T {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new Be(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: Be.set,
      get: Be.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: n = {}
  }) {
    const i = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new H(
      {
        id: o,
        data: t,
        tool: r,
        api: this.Editor.API,
        readOnly: i,
        tunesData: n
      },
      this.eventsDispatcher
    );
    return i || window.requestIdleCallback(
      () => {
        this.bindBlockEvents(a);
      },
      { timeout: 2e3 }
    ), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: n,
    needToFocus: i = !0,
    replace: r = !1,
    tunes: a = {}
  } = {}) {
    let l = n;
    l === void 0 && (l = this.currentBlockIndex + (r ? 0 : 1));
    const c = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return r && this.blockDidMutated(
      Ge,
      this.getBlockByIndex(l),
      {
        index: l
      }
    ), this._blocks.insert(l, c, r), this.blockDidMutated(Je, c, {
      index: l
    }), i ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, c;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events
   *
   * @param block - block to update
   * @param data - new data
   */
  async update(e, t) {
    const o = await e.data, n = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, o, t),
      tunes: e.tunes
    }), i = this.getBlockIndex(e);
    return this._blocks.replace(i, n), this.blockDidMutated(Qe, n, {
      index: i
    }), n;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const n = this.getBlockIndex(e);
    this.insert({
      tool: t,
      data: o,
      index: n,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const n = this.insert({
      tool: e,
      replace: o
    });
    try {
      n.call(X.ON_PASTE, t);
    } catch (i) {
      L(`${e}: onPaste callback call is failed`, "error", i);
    }
    return n;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1) {
    const o = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o, this.blockDidMutated(Je, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    const o = await t.data;
    K(o) || await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e);
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const n = this._blocks.indexOf(e);
      if (!this.validateIndex(n))
        throw new Error("Can't find a Block to remove");
      e.destroy(), this._blocks.remove(n), this.blockDidMutated(Ge, e, {
        index: n
      }), this.currentBlockIndex >= n && this.currentBlockIndex--, this.blocks.length ? n === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, t && this.insert()), o();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = d.make("div");
    e && t.appendChild(e);
    const o = {
      text: d.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${H.CSS.wrapper}`), n = t.indexOf(o);
    if (n >= 0)
      return this._blocks[n];
  }
  /**
   * Remove selection from all Blocks then highlight only Current Block
   */
  highlightCurrentNode() {
    this.clearFocused(), this.currentBlock.focused = !0;
  }
  /**
   * Remove selection from all Blocks
   */
  clearFocused() {
    this.blocks.forEach((e) => {
      e.focused = !1;
    });
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = e.closest(
      `.${H.CSS.wrapper}`
    );
    if (!t)
      return;
    const o = t.closest(
      `.${this.Editor.UI.CSS.editorWrapper}`
    );
    if (o != null && o.isEqualNode(
      this.Editor.UI.nodes.wrapper
    ))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(
        t
      ), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = e.closest(
      `.${H.CSS.wrapper}`
    );
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      L("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      L(
        "Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.",
        "warn"
      );
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Uo, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o) {
    if (!await e.save())
      throw new Error(
        "Could not convert Block. Failed to extract original Block data."
      );
    const i = this.Editor.Tools.blockTools.get(t);
    if (!i)
      throw new Error(
        `Could not convert Block. Tool «${t}» not found.`
      );
    const r = await e.exportDataAsString(), a = q(r, i.sanitizeConfig);
    let l = qt(
      a,
      i.conversionConfig
    );
    o && (l = Object.assign(l, o)), this.replace(e, i.name, l);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  dropPointer() {
    this.currentBlockIndex = -1, this.clearFocused();
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new $o();
    this.blocks.forEach((o) => {
      t.add(async () => {
        await this.removeBlock(o, !1);
      });
    }), await t.completed, this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(
      this.blocks.map((e) => e.destroy())
    );
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(
      e.holder,
      "keydown",
      (o) => {
        t.keydown(o);
      }
    ), this.readOnlyMutableListeners.on(
      e.holder,
      "keyup",
      (o) => {
        t.keyup(o);
      }
    ), this.readOnlyMutableListeners.on(
      e.holder,
      "dragover",
      (o) => {
        t.dragOver(o);
      }
    ), this.readOnlyMutableListeners.on(
      e.holder,
      "dragleave",
      (o) => {
        t.dragLeave(o);
      }
    ), e.on("didMutated", (o) => this.blockDidMutated(Qe, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const n = new CustomEvent(e, {
      detail: {
        target: new ee(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(lt, {
      event: n
    }), t;
  }
}
class Vo extends T {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new k(), le.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    k.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: n, RectangleSelection: i } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const r = e && e instanceof KeyboardEvent, a = r && ot(e.keyCode);
    if (this.anyBlockSelected && r && a && !k.isSelectionExists) {
      const l = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(l, !0), n.setToBlock(o.currentBlock), re(() => {
        const c = e.key;
        n.insertContentAtCaretPosition(c.length > 1 ? "" : c);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || i.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = d.make("div");
    this.selectedBlocks.forEach((i) => {
      const r = q(i.holder.innerHTML, this.sanitizerConfig), a = d.make("p");
      a.innerHTML = r, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((i) => i.textContent).join(`

`), n = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", n), Promise.all(this.selectedBlocks.map((i) => i.save())).then((i) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(i));
      } catch {
      }
    });
  }
  /**
   * select Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    t.clearFocused();
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), this.selection.save(), k.get().removeAllRanges(), o.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    le.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const o = this.Editor.BlockManager.getBlock(e.target).inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), k.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class ke extends T {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Get's deepest first node and checks if offset is zero
   *
   * @returns {boolean}
   */
  get isAtStart() {
    const e = k.get(), t = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);
    let o = e.focusNode;
    if (d.isNativeInput(t))
      return t.selectionEnd === 0;
    if (!e.anchorNode)
      return !1;
    let n = o.textContent.search(/\S/);
    n === -1 && (n = 0);
    let i = e.focusOffset;
    return o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[i] ? (o = o.childNodes[i], i = 0) : (o = o.childNodes[i - 1], i = o.textContent.length)), (d.isLineBreakTag(t) || d.isEmpty(t)) && this.getHigherLevelSiblings(o, "left").every((l) => {
      const c = d.isLineBreakTag(l), u = l.children.length === 1 && d.isLineBreakTag(l.children[0]), h = c || u;
      return d.isEmpty(l) && !h;
    }) && i === n ? !0 : t === null || o === t && i <= n;
  }
  /**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */
  get isAtEnd() {
    const e = k.get();
    let t = e.focusNode;
    const o = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
    if (d.isNativeInput(o))
      return o.selectionEnd === o.value.length;
    if (!e.focusNode)
      return !1;
    let n = e.focusOffset;
    if (t.nodeType !== Node.TEXT_NODE && t.childNodes.length && (t.childNodes[n - 1] ? (t = t.childNodes[n - 1], n = t.textContent.length) : (t = t.childNodes[0], n = 0)), d.isLineBreakTag(o) || d.isEmpty(o)) {
      const r = this.getHigherLevelSiblings(t, "right");
      if (r.every((l, c) => c === r.length - 1 && d.isLineBreakTag(l) || d.isEmpty(l) && !d.isLineBreakTag(l)) && n === t.textContent.length)
        return !0;
    }
    const i = o.textContent.replace(/\s+$/, "");
    return t === o && n >= i.length;
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    const { BlockManager: n } = this.Editor;
    let i;
    switch (t) {
      case this.positions.START:
        i = e.firstInput;
        break;
      case this.positions.END:
        i = e.lastInput;
        break;
      default:
        i = e.currentInput;
    }
    if (!i)
      return;
    const r = d.getDeepestNode(i, t === this.positions.END), a = d.getContentLength(r);
    switch (!0) {
      case t === this.positions.START:
        o = 0;
        break;
      case t === this.positions.END:
      case o > a:
        o = a;
        break;
    }
    re(() => {
      this.set(r, o);
    }, 20)(), n.setCurrentBlockByChildNode(e.holder), n.currentBlock.currentInput = i;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: n } = this.Editor.BlockManager, i = d.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(i, 0);
        break;
      case this.positions.END:
        this.set(i, d.getContentLength(i));
        break;
      default:
        o && this.set(i, o);
    }
    n.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: o, bottom: n } = k.setCursor(e, t), { innerHeight: i } = window;
    o < 0 && window.scrollBy(0, o), n > i && window.scrollBy(0, n - i);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = k.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (d.isNativeInput(o)) {
          const n = o, i = document.createDocumentFragment(), r = n.value.substring(0, n.selectionStart), a = n.value.substring(n.selectionStart);
          return i.textContent = a, n.value = r, i;
        } else {
          const n = t.cloneRange();
          return n.selectNodeContents(o), n.setStart(t.endContainer, t.endOffset), n.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */
  navigateNext() {
    const { BlockManager: e } = this.Editor, { currentBlock: t, nextContentfulBlock: o } = e, { nextInput: n } = t, i = this.isAtEnd;
    let r = o;
    if (!r && !n) {
      if (t.tool.isDefault || !i)
        return !1;
      r = e.insertAtEnd();
    }
    return i ? (n ? this.setToInput(n, this.positions.START) : this.setToBlock(r, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */
  navigatePrevious() {
    const { currentBlock: e, previousContentfulBlock: t } = this.Editor.BlockManager;
    if (!e)
      return !1;
    const { previousInput: o } = e;
    return !t && !o ? !1 : this.isAtStart ? (o ? this.setToInput(o, this.positions.END) : this.setToBlock(t, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(ke.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${ke.CSS.shadowCaret}`);
    if (!t)
      return;
    new k().expandToTag(t);
    const n = document.createRange();
    n.selectNode(t), n.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), n = k.get(), i = k.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((c) => t.appendChild(c)), t.childNodes.length === 0 && t.appendChild(new Text());
    const r = t.lastChild;
    i.deleteContents(), i.insertNode(t);
    const a = document.createRange(), l = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
    l !== null && l.textContent !== null && a.setStart(l, l.textContent.length), n.removeAllRanges(), n.addRange(a);
  }
  /**
   * Get all first-level (first child of [contenteditable]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */
  getHigherLevelSiblings(e, t) {
    let o = e;
    const n = [];
    for (; o.parentNode && o.parentNode.contentEditable !== "true"; )
      o = o.parentNode;
    const i = t === "left" ? "previousSibling" : "nextSibling";
    for (; o[i]; )
      o = o[i], n.push(o);
    return n;
  }
}
class Yo extends T {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor, n = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, i = t.getBlockByChildNode(e.target);
      if (!(!n || !i) && i !== n) {
        if (n === this.firstSelectedBlock) {
          k.get().removeAllRanges(), n.selected = !0, i.selected = !0, o.clearCache();
          return;
        }
        if (i === this.firstSelectedBlock) {
          n.selected = !1, i.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(n, i), this.lastSelectedBlock = i;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== _t.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * return boolean is cross block selection started
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), k.get().removeAllRanges());
    const n = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), i = t.blocks[n];
    i && (this.lastSelectedBlock.selected !== i.selected ? (i.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = i, this.Editor.InlineToolbar.close(), i.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: n } = this.Editor, i = t.blocks.indexOf(this.firstSelectedBlock), r = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && i > -1 && r > -1)
      if (e && e instanceof KeyboardEvent)
        switch (e.keyCode) {
          case B.DOWN:
          case B.RIGHT:
            n.setToBlock(t.blocks[Math.max(i, r)], n.positions.END);
            break;
          case B.UP:
          case B.LEFT:
            n.setToBlock(t.blocks[Math.min(i, r)], n.positions.START);
            break;
          default:
            n.setToBlock(t.blocks[Math.max(i, r)], n.positions.END);
        }
      else
        n.setToBlock(t.blocks[Math.max(i, r)], n.positions.END);
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    k.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: n } = this.Editor, i = o.blocks.indexOf(e), r = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let l = Math.min(i, r); l <= Math.max(i, r); l++) {
      const c = o.blocks[l];
      c !== this.firstSelectedBlock && c !== (a ? e : t) && (o.blocks[l].selected = !o.blocks[l].selected, n.clearCache());
    }
  }
}
class Zo extends T {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Caret: o,
      Paste: n
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((r) => {
      r.dropTarget = !1;
    }), k.isAtEditor && !k.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const i = t.setCurrentBlockByChildNode(e.target);
    if (i)
      this.Editor.Caret.setToBlock(i, o.positions.END);
    else {
      const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(r, o.positions.END);
    }
    await n.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    k.isAtEditor && !k.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
class Ko extends T {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = 400, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on(lt, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(ct, () => {
      this.disable();
    }), this.eventsDispatcher.on(dt, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !D(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(Ie, {
      mutations: e
    });
  }
}
const vt = class extends T {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (s) => {
      try {
        const e = s.create({}, {}, !1);
        if (s.pasteConfig === !1) {
          this.exceptionList.push(s.name);
          return;
        }
        if (!D(e.onPaste))
          return;
        this.getTagsConfig(s), this.getFilesConfig(s), this.getPatternsConfig(s);
      } catch (e) {
        L(
          `Paste handling for «${s.name}» Tool hasn't been set up because of the error`,
          "warn",
          e
        );
      }
    }, this.handlePasteEvent = async (s) => {
      const { BlockManager: e, Toolbar: t } = this.Editor, o = e.setCurrentBlockByChildNode(s.target);
      !o || this.isNativeBehaviour(s.target) && !s.clipboardData.types.includes("Files") || o && this.exceptionList.includes(o.name) || (s.preventDefault(), this.processDataTransfer(s.clipboardData), e.clearFocused(), t.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(s) {
    s ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(s, e = !1) {
    const { Tools: t } = this.Editor, o = s.types;
    if ((o.includes ? o.includes("Files") : o.contains("Files")) && !K(this.toolsFiles)) {
      await this.processFiles(s.files);
      return;
    }
    const i = s.getData(this.MIME_TYPE), r = s.getData("text/plain");
    let a = s.getData("text/html");
    const l = document.createElement("div");
    if (l.innerHTML = a, l.querySelectorAll("*").forEach((m) => {
      m instanceof HTMLElement && (m.style.fontFamily = "inherit", m.style.color = "inherit", m.style.fontSize = "inherit", m.style.backgroundColor = "initial");
    }), a = l.innerHTML, i)
      try {
        this.insertEditorJSData(JSON.parse(i));
        return;
      } catch {
      }
    e && r.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : r) + "</p>");
    const u = Object.keys(this.toolsTags).reduce((m, p) => (m[p.toLowerCase()] = this.toolsTags[p].sanitizationConfig ?? {}, m), {}), h = Object.assign({}, u, t.getAllInlineToolsSanitizeConfig(), { br: {} }), f = q(a, h);
    !f.trim() || f.trim() === r || !d.isHTMLString(f) ? await this.processText(r) : await this.processText(f, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(s, e = !1) {
    const { Caret: t, BlockManager: o } = this.Editor, n = e ? this.processHTML(s) : this.processPlain(s);
    if (!n.length)
      return;
    if (n.length === 1) {
      n[0].isBlock ? this.processSingleBlock(n.pop()) : this.processInlinePaste(n.pop());
      return;
    }
    const r = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
    n.map(
      async (a, l) => this.insertBlock(a, l === 0 && r)
    ), o.currentBlock && t.setToBlock(o.currentBlock, t.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const s = this.Editor.Tools.blockTools;
    Array.from(s.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(s) {
    return J(s) ? [s] : j(s) ? Object.keys(s) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(s) {
    if (s.pasteConfig === !1)
      return;
    const e = s.pasteConfig.tags || [], t = [];
    e.forEach((o) => {
      const n = this.collectTagNames(o);
      t.push(...n), n.forEach((i) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, i)) {
          L(
            `Paste handler for «${s.name}» Tool on «${i}» tag is skipped because it is already used by «${this.toolsTags[i].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const r = j(o) ? o[i] : null;
        this.toolsTags[i.toUpperCase()] = {
          tool: s,
          sanitizationConfig: r
        };
      });
    }), this.tagsByTool[s.name] = t.map((o) => o.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(s) {
    if (s.pasteConfig === !1)
      return;
    const { files: e = {} } = s.pasteConfig;
    let { extensions: t, mimeTypes: o } = e;
    !t && !o || (t && !Array.isArray(t) && (L(`«extensions» property of the onDrop config for «${s.name}» Tool should be an array`), t = []), o && !Array.isArray(o) && (L(`«mimeTypes» property of the onDrop config for «${s.name}» Tool should be an array`), o = []), o && (o = o.filter((n) => Dt(n) ? !0 : (L(`MIME type value «${n}» for the «${s.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[s.name] = {
      extensions: t || [],
      mimeTypes: o || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(s) {
    s.pasteConfig === !1 || !s.pasteConfig.patterns || K(s.pasteConfig.patterns) || Object.entries(s.pasteConfig.patterns).forEach(([e, t]) => {
      t instanceof RegExp || L(
        `Pattern ${t} for «${s.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: e,
        pattern: t,
        tool: s
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(s) {
    return d.isNativeInput(s);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(s) {
    const { BlockManager: e } = this.Editor;
    let t;
    t = await Promise.all(
      Array.from(s).map((i) => this.processFile(i))
    ), t = t.filter((i) => !!i);
    const n = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
    t.forEach(
      (i, r) => {
        e.paste(i.type, i.event, r === 0 && n);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(s) {
    const e = Rt(s), t = Object.entries(this.toolsFiles).find(([i, { mimeTypes: r, extensions: a }]) => {
      const [l, c] = s.type.split("/"), u = a.find((f) => f.toLowerCase() === e.toLowerCase()), h = r.find((f) => {
        const [m, p] = f.split("/");
        return m === l && (p === c || p === "*");
      });
      return !!u || !!h;
    });
    if (!t)
      return;
    const [o] = t;
    return {
      event: this.composePasteEvent("file", {
        file: s
      }),
      type: o
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(s) {
    const { Tools: e } = this.Editor, t = d.make("DIV");
    return t.innerHTML = s, this.getNodes(t).map((n) => {
      let i, r = e.defaultTool, a = !1;
      switch (n.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          i = d.make("div"), i.appendChild(n);
          break;
        case Node.ELEMENT_NODE:
          i = n, a = !0, this.toolsTags[i.tagName] && (r = this.toolsTags[i.tagName].tool);
          break;
      }
      const { tags: l } = r.pasteConfig || { tags: [] }, c = l.reduce((f, m) => (this.collectTagNames(m).forEach((v) => {
        const O = j(m) ? m[v] : null;
        f[v.toLowerCase()] = O || {};
      }), f), {}), u = Object.assign({}, c, r.baseSanitizeConfig);
      if (i.tagName.toLowerCase() === "table") {
        const f = q(i.outerHTML, u);
        i = d.make("div", void 0, {
          innerHTML: f
        }).firstChild;
      } else
        i.innerHTML = q(i.innerHTML, u);
      const h = this.composePasteEvent("tag", {
        data: i
      });
      return {
        content: i,
        isBlock: a,
        tool: r.name,
        event: h
      };
    }).filter((n) => {
      const i = d.isEmpty(n.content), r = d.isSingleTag(n.content);
      return !i || r;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(s) {
    const { defaultBlock: e } = this.config;
    if (!s)
      return [];
    const t = e;
    return s.split(/\r?\n/).filter((o) => o.trim()).map((o) => {
      const n = d.make("div");
      n.textContent = o;
      const i = this.composePasteEvent("tag", {
        data: n
      });
      return {
        content: n,
        tool: t,
        isBlock: !1,
        event: i
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(s) {
    const { Caret: e, BlockManager: t } = this.Editor, { currentBlock: o } = t;
    if (!o || s.tool !== o.name || !d.containsOnlyInlineElements(s.content.innerHTML)) {
      this.insertBlock(s, (o == null ? void 0 : o.tool.isDefault) && o.isEmpty);
      return;
    }
    e.insertContentAtCaretPosition(s.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(s) {
    const { BlockManager: e, Caret: t } = this.Editor, { content: o } = s;
    if (e.currentBlock && e.currentBlock.tool.isDefault && o.textContent.length < vt.PATTERN_PROCESSING_MAX_LENGTH) {
      const i = await this.processPattern(o.textContent);
      if (i) {
        const r = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, a = e.paste(i.tool, i.event, r);
        t.setToBlock(a, t.positions.END);
        return;
      }
    }
    if (e.currentBlock && e.currentBlock.currentInput) {
      const i = e.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        q(o.innerHTML, i)
      );
    } else
      this.insertBlock(s);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(s) {
    const e = this.toolsPatterns.find((o) => {
      const n = o.pattern.exec(s);
      return n ? s === n.shift() : !1;
    });
    return e ? {
      event: this.composePasteEvent("pattern", {
        key: e.key,
        data: s
      }),
      tool: e.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(s, e = !1) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: n } = t;
    let i;
    if (e && n && n.isEmpty) {
      i = t.paste(s.tool, s.event, !0), o.setToBlock(i, o.positions.END);
      return;
    }
    i = t.paste(s.tool, s.event), o.setToBlock(i, o.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(s) {
    const { BlockManager: e, Caret: t, Tools: o } = this.Editor;
    ht(
      s,
      (i) => o.blockTools.get(i).sanitizeConfig
    ).forEach(({ tool: i, data: r }, a) => {
      let l = !1;
      a === 0 && (l = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
      const c = e.insert({
        tool: i,
        data: r,
        replace: l
      });
      t.setToBlock(c, t.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(s, e, t) {
    const o = Object.keys(this.toolsTags), n = s, { tool: i } = this.toolsTags[n.tagName] || {}, r = this.tagsByTool[i == null ? void 0 : i.name] || [], a = o.includes(n.tagName), l = d.blockElements.includes(n.tagName.toLowerCase()), c = Array.from(n.children).some(
      ({ tagName: h }) => o.includes(h) && !r.includes(h)
    ), u = Array.from(n.children).some(
      ({ tagName: h }) => d.blockElements.includes(h.toLowerCase())
    );
    if (!l && !a && !c)
      return t.appendChild(n), [...e, t];
    if (a && !c || l && !u && !c)
      return [...e, t, n];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(s) {
    const e = Array.from(s.childNodes);
    let t;
    const o = (n, i) => {
      if (d.isEmpty(i) && !d.isSingleTag(i))
        return n;
      const r = n[n.length - 1];
      let a = new DocumentFragment();
      switch (r && d.isFragment(r) && (a = n.pop()), i.nodeType) {
        case Node.ELEMENT_NODE:
          if (t = this.processElementNode(i, n, a), t)
            return t;
          break;
        case Node.TEXT_NODE:
          return a.appendChild(i), [...n, a];
        default:
          return [...n, a];
      }
      return [...n, ...Array.from(i.childNodes).reduce(o, [])];
    };
    return e.reduce(o, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(s, e) {
    return new CustomEvent(s, {
      detail: e
    });
  }
};
let xt = vt;
xt.PATTERN_PROCESSING_MAX_LENGTH = 450;
class Xo extends T {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([n, i]) => {
      i.isReadOnlySupported || o.push(n);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param {boolean} state - (optional) read-only state or toggle
   */
  async toggle(e = !this.readOnlyEnabled) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const t = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const n in this.Editor)
      this.Editor[n].toggleReadOnly && this.Editor[n].toggleReadOnly(e);
    if (t === e)
      return this.readOnlyEnabled;
    const o = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new rt(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class pe extends T {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const i = [
      `.${H.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), a = i.some((l) => !!o.closest(l));
    !r || a || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, !1), this.listeners.on(document.body, "mousemove", Ee((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", Ee((t) => {
      this.processScroll(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    if (e.button !== this.MAIN_MOUSE_BUTTON)
      return;
    e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = d.make("div", pe.CSS.overlay, {}), n = d.make("div", pe.CSS.overlayContainer, {}), i = d.make("div", pe.CSS.rect, {});
    return n.appendChild(i), o.appendChild(n), t.appendChild(o), this.overlayRectangle = i, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: n } = this.genInfoForMouseSelection(), i = this.startX > t && this.mouseX > t, r = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(i || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), n !== void 0 && (this.trySelectNextBlock(n), this.inverseSelection(), k.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const t = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, n = document.elementFromPoint(t, o), i = this.Editor.BlockManager.getBlockByChildNode(n);
    let r;
    i !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h) => h.holder === i.holder));
    const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + H.CSS.content), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, c = t - l, u = t + l;
    return {
      index: r,
      leftPos: c,
      rightPos: u
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, n = 1, i = -1, r = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let l = r;
    o > 1 && (l = a ? n : i);
    const c = e > this.stackOfSelected[o - 1] && l === n, u = e < this.stackOfSelected[o - 1] && l === i, f = !(c || u || l === r);
    if (!f && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let v = this.stackOfSelected[o - 1] + 1 || e;
      for (v; v <= e; v++)
        this.addBlockInSelection(v);
      return;
    }
    if (!f && e < this.stackOfSelected[o - 1]) {
      for (let v = this.stackOfSelected[o - 1] - 1; v >= e; v--)
        this.addBlockInSelection(v);
      return;
    }
    if (!f)
      return;
    let m = o - 1, p;
    for (e > this.stackOfSelected[o - 1] ? p = () => e > this.stackOfSelected[m] : p = () => e < this.stackOfSelected[m]; p(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[m]), this.stackOfSelected.pop(), m--;
  }
}
class qo extends T {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: n } = this.Editor, i = e.map(({ type: r, data: a, tunes: l, id: c }) => {
        o.available.has(r) === !1 && (Y(`Tool «${r}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(r, a, c), r = o.stubTool);
        let u;
        try {
          u = n.composeBlock({
            id: c,
            tool: r,
            data: a,
            tunes: l
          });
        } catch (h) {
          L(`Block «${r}» skipped because of plugins error`, "error", {
            data: a,
            error: h
          }), a = this.composeStubDataForTool(r, a, c), r = o.stubTool, u = n.composeBlock({
            id: c,
            tool: r,
            data: a,
            tunes: l
          });
        }
        return u;
      });
      n.insertMany(i), window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o) {
    const { Tools: n } = this.Editor;
    let i = e;
    if (n.unavailable.has(e)) {
      const r = n.unavailable.get(e).toolbox;
      r !== void 0 && r[0].title !== void 0 && (i = r[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: i
    };
  }
}
class Go extends T {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, n = [];
    try {
      o.forEach((a) => {
        n.push(this.getSavedData(a));
      });
      const i = await Promise.all(n), r = await ht(i, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(r);
    } catch (i) {
      Y("Saving failed due to the Error %o", "error", i);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: n, data: i, tunes: r, isValid: a }) => {
      if (!a) {
        L(`Block «${n}» skipped because saved data is invalid`);
        return;
      }
      if (n === this.Editor.Tools.stubTool) {
        t.push(i);
        return;
      }
      const l = {
        id: o,
        type: n,
        data: i,
        ...!K(r) && {
          tunes: r
        }
      };
      t.push(l);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.28.0-rc.3"
    };
  }
}
var Ae = {}, Jo = {
  get exports() {
    return Ae;
  },
  set exports(s) {
    Ae = s;
  }
};
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var r = o[i] = { i, l: !1, exports: {} };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, r, a) {
        n.o(i, r) || Object.defineProperty(i, r, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, r) {
        if (1 & r && (i = n(i)), 8 & r || 4 & r && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & r && typeof i != "string")
          for (var l in i)
            n.d(a, l, function(c) {
              return i[c];
            }.bind(null, l));
        return a;
      }, n.n = function(i) {
        var r = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(r, "a", r), r;
      }, n.o = function(i, r) {
        return Object.prototype.hasOwnProperty.call(i, r);
      }, n.p = "/", n(n.s = 4);
    }([function(t, o, n) {
      var i = n(1), r = n(2);
      typeof (r = r.__esModule ? r.default : r) == "string" && (r = [[t.i, r, ""]]);
      var a = { insert: "head", singleton: !1 };
      i(r, a), t.exports = r.locals || {};
    }, function(t, o, n) {
      var i, r = function() {
        return i === void 0 && (i = !!(window && document && document.all && !window.atob)), i;
      }, a = function() {
        var C = {};
        return function(x) {
          if (C[x] === void 0) {
            var w = document.querySelector(x);
            if (window.HTMLIFrameElement && w instanceof window.HTMLIFrameElement)
              try {
                w = w.contentDocument.head;
              } catch {
                w = null;
              }
            C[x] = w;
          }
          return C[x];
        };
      }(), l = [];
      function c(C) {
        for (var x = -1, w = 0; w < l.length; w++)
          if (l[w].identifier === C) {
            x = w;
            break;
          }
        return x;
      }
      function u(C, x) {
        for (var w = {}, I = [], R = 0; R < C.length; R++) {
          var b = C[R], g = x.base ? b[0] + x.base : b[0], y = w[g] || 0, E = "".concat(g, " ").concat(y);
          w[g] = y + 1;
          var _ = c(E), S = { css: b[1], media: b[2], sourceMap: b[3] };
          _ !== -1 ? (l[_].references++, l[_].updater(S)) : l.push({ identifier: E, updater: A(S, x), references: 1 }), I.push(E);
        }
        return I;
      }
      function h(C) {
        var x = document.createElement("style"), w = C.attributes || {};
        if (w.nonce === void 0) {
          var I = n.nc;
          I && (w.nonce = I);
        }
        if (Object.keys(w).forEach(function(b) {
          x.setAttribute(b, w[b]);
        }), typeof C.insert == "function")
          C.insert(x);
        else {
          var R = a(C.insert || "head");
          if (!R)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          R.appendChild(x);
        }
        return x;
      }
      var f, m = (f = [], function(C, x) {
        return f[C] = x, f.filter(Boolean).join(`
`);
      });
      function p(C, x, w, I) {
        var R = w ? "" : I.media ? "@media ".concat(I.media, " {").concat(I.css, "}") : I.css;
        if (C.styleSheet)
          C.styleSheet.cssText = m(x, R);
        else {
          var b = document.createTextNode(R), g = C.childNodes;
          g[x] && C.removeChild(g[x]), g.length ? C.insertBefore(b, g[x]) : C.appendChild(b);
        }
      }
      function v(C, x, w) {
        var I = w.css, R = w.media, b = w.sourceMap;
        if (R ? C.setAttribute("media", R) : C.removeAttribute("media"), b && btoa && (I += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(b)))), " */")), C.styleSheet)
          C.styleSheet.cssText = I;
        else {
          for (; C.firstChild; )
            C.removeChild(C.firstChild);
          C.appendChild(document.createTextNode(I));
        }
      }
      var O = null, N = 0;
      function A(C, x) {
        var w, I, R;
        if (x.singleton) {
          var b = N++;
          w = O || (O = h(x)), I = p.bind(null, w, b, !1), R = p.bind(null, w, b, !0);
        } else
          w = h(x), I = v.bind(null, w, x), R = function() {
            (function(g) {
              if (g.parentNode === null)
                return !1;
              g.parentNode.removeChild(g);
            })(w);
          };
        return I(C), function(g) {
          if (g) {
            if (g.css === C.css && g.media === C.media && g.sourceMap === C.sourceMap)
              return;
            I(C = g);
          } else
            R();
        };
      }
      t.exports = function(C, x) {
        (x = x || {}).singleton || typeof x.singleton == "boolean" || (x.singleton = r());
        var w = u(C = C || [], x);
        return function(I) {
          if (I = I || [], Object.prototype.toString.call(I) === "[object Array]") {
            for (var R = 0; R < w.length; R++) {
              var b = c(w[R]);
              l[b].references--;
            }
            for (var g = u(I, x), y = 0; y < w.length; y++) {
              var E = c(w[y]);
              l[E].references === 0 && (l[E].updater(), l.splice(E, 1));
            }
            w = g;
          }
        };
      };
    }, function(t, o, n) {
      (o = n(3)(!1)).push([t.i, `.ce-paragraph {
    line-height: 1.6em;
    outline: none;
}

.ce-paragraph[data-placeholder]:empty::before{
  content: attr(data-placeholder);
  color: #707684;
  font-weight: normal;
  opacity: 0;
}

/** Show placeholder at the first paragraph if Editor is empty */
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {
  opacity: 1;
}

.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: 0;
}

.ce-paragraph p:first-of-type{
    margin-top: 0;
}

.ce-paragraph p:last-of-type{
    margin-bottom: 0;
}
`, ""]), t.exports = o;
    }, function(t, o, n) {
      t.exports = function(i) {
        var r = [];
        return r.toString = function() {
          return this.map(function(a) {
            var l = function(c, u) {
              var h = c[1] || "", f = c[3];
              if (!f)
                return h;
              if (u && typeof btoa == "function") {
                var m = (v = f, O = btoa(unescape(encodeURIComponent(JSON.stringify(v)))), N = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(O), "/*# ".concat(N, " */")), p = f.sources.map(function(A) {
                  return "/*# sourceURL=".concat(f.sourceRoot || "").concat(A, " */");
                });
                return [h].concat(p).concat([m]).join(`
`);
              }
              var v, O, N;
              return [h].join(`
`);
            }(a, i);
            return a[2] ? "@media ".concat(a[2], " {").concat(l, "}") : l;
          }).join("");
        }, r.i = function(a, l, c) {
          typeof a == "string" && (a = [[null, a, ""]]);
          var u = {};
          if (c)
            for (var h = 0; h < this.length; h++) {
              var f = this[h][0];
              f != null && (u[f] = !0);
            }
          for (var m = 0; m < a.length; m++) {
            var p = [].concat(a[m]);
            c && u[p[0]] || (l && (p[2] ? p[2] = "".concat(l, " and ").concat(p[2]) : p[2] = l), r.push(p));
          }
        }, r;
      };
    }, function(t, o, n) {
      n.r(o), n.d(o, "default", function() {
        return a;
      }), n(0);
      function i(l, c) {
        for (var u = 0; u < c.length; u++) {
          var h = c[u];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      function r(l, c, u) {
        return c && i(l.prototype, c), u && i(l, u), l;
      }
      /**
       * Base Paragraph Block for the Editor.js.
       * Represents a regular text block
       *
       * @author CodeX (team@codex.so)
       * @copyright CodeX 2018
       * @license The MIT License (MIT)
       */
      var a = function() {
        function l(c) {
          var u = c.data, h = c.config, f = c.api, m = c.readOnly;
          (function(p, v) {
            if (!(p instanceof v))
              throw new TypeError("Cannot call a class as a function");
          })(this, l), this.api = f, this.readOnly = m, this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = h.placeholder ? h.placeholder : l.DEFAULT_PLACEHOLDER, this._data = {}, this._element = null, this._preserveBlank = h.preserveBlank !== void 0 && h.preserveBlank, this.data = u;
        }
        return r(l, null, [{ key: "DEFAULT_PLACEHOLDER", get: function() {
          return "";
        } }]), r(l, [{ key: "onKeyUp", value: function(c) {
          c.code !== "Backspace" && c.code !== "Delete" || this._element.textContent === "" && (this._element.innerHTML = "");
        } }, { key: "drawView", value: function() {
          var c = document.createElement("DIV");
          return c.classList.add(this._CSS.wrapper, this._CSS.block), c.contentEditable = !1, c.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (c.contentEditable = !0, c.addEventListener("keyup", this.onKeyUp)), c;
        } }, { key: "render", value: function() {
          return this._element === null && (this._element = this.drawView()), this.hydrate(), this._element;
        } }, { key: "merge", value: function(c) {
          var u = { text: this.data.text + c.text };
          this.data = u;
        } }, { key: "validate", value: function(c) {
          return !(c.text.trim() === "" && !this._preserveBlank);
        } }, { key: "save", value: function(c) {
          return { text: c.innerHTML };
        } }, { key: "onPaste", value: function(c) {
          var u = { text: c.detail.data.innerHTML };
          this.data = u;
        } }, { key: "hydrate", value: function() {
          var c = this;
          window.requestAnimationFrame(function() {
            c._element.innerHTML = c._data.text || "";
          });
        } }, { key: "data", get: function() {
          if (this._element !== null) {
            var c = this._element.innerHTML;
            this._data.text = c;
          }
          return this._data;
        }, set: function(c) {
          this._data = c || {}, this._element !== null && this.hydrate();
        } }], [{ key: "conversionConfig", get: function() {
          return { export: "text", import: "text" };
        } }, { key: "sanitize", get: function() {
          return { text: { br: !0 } };
        } }, { key: "isReadOnlySupported", get: function() {
          return !0;
        } }, { key: "pasteConfig", get: function() {
          return { tags: ["P"] };
        } }, { key: "toolbox", get: function() {
          return { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', title: "Text" };
        } }]), l;
      }();
    }]).default;
  });
})(Jo);
const Qo = /* @__PURE__ */ ve(Ae), en = `<svg width="12" height="14" viewBox="0 0 12 14"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H6.9375C7.95201 0 8.92286 0.407321 9.63704 1.12901C10.3508 1.85033 10.75 2.82645 10.75 3.84208C10.75 4.71323 10.4563 5.5553 9.92233 6.23245C10.2393 6.41511 10.5334 6.64083 10.7955 6.90571C11.5679 7.68626 12 8.7427 12 9.84208C12 10.9415 11.5679 11.9979 10.7955 12.7784C10.0228 13.5593 8.97243 14 7.875 14H1C0.447715 14 0 13.5523 0 13V1ZM2 7.68421V12H7.875C8.43517 12 8.97456 11.7752 9.37391 11.3717C9.7736 10.9678 10 10.4178 10 9.84208C10 9.26641 9.7736 8.7164 9.37391 8.31251C8.97459 7.90898 8.43521 7.68421 7.875 7.68421H2ZM6.9375 5.68421H2V2H6.9375C7.41483 2 7.87472 2.1915 8.21544 2.5358C8.55653 2.88048 8.75 3.35016 8.75 3.84208C8.75 4.33399 8.55652 4.80368 8.21544 5.14836C7.87469 5.49269 7.41478 5.68421 6.9375 5.68421Z" />
</svg>`;
class Ue {
  constructor() {
    this.commandName = "bold", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--bold"
    }, this.nodes = {
      button: void 0
    };
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = en, this.nodes.button;
  }
  /**
   * Wrap range with <b> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
Ue.isInline = !0;
Ue.title = "Bold";
const tn = `<svg width="11" height="14" viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.3125 0.4375C4.03636 0.4375 3.8125 0.661358 3.8125 0.9375C3.8125 1.21364 4.03636 1.4375 4.3125 1.4375H6.4649L3.37115 12.4375H0.9375C0.661358 12.4375 0.4375 12.6614 0.4375 12.9375C0.4375 13.2136 0.661358 13.4375 0.9375 13.4375H3.73424C3.74488 13.4378 3.75549 13.4378 3.76606 13.4375H6.5625C6.83864 13.4375 7.0625 13.2136 7.0625 12.9375C7.0625 12.6614 6.83864 12.4375 6.5625 12.4375H4.40994L7.50369 1.4375H9.9375C10.2136 1.4375 10.4375 1.21364 10.4375 0.9375C10.4375 0.661358 10.2136 0.4375 9.9375 0.4375H7.12462H4.3125Z" />
</svg>`;
class $e {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = tn, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
$e.isInline = !0;
$e.title = "Italic";
const et = `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.35302 3.30511L8.6548 1.95705C9.1144 1.52715 9.71219 1.29848 10.3249 1.31317C10.9412 1.32794 11.5319 1.58801 11.9731 2.04493C12.4149 2.50237 12.6722 3.12189 12.6868 3.77565C12.7014 4.42552 12.4748 5.0535 12.0583 5.5311L10.1943 7.45447L10.1931 7.45578C9.9688 7.6889 9.70323 7.8729 9.41209 7.99811C9.121 8.1233 8.80955 8.1875 8.49545 8.1875C8.18135 8.1875 7.8699 8.1233 7.57881 7.99811C7.28767 7.8729 7.0221 7.6889 6.79782 7.45578C6.60637 7.25678 6.28985 7.25066 6.09085 7.44211C5.89185 7.63356 5.88573 7.95009 6.07718 8.14909C6.39268 8.47703 6.76855 8.73821 7.18372 8.91676C7.59893 9.09533 8.04475 9.1875 8.49545 9.1875C8.94614 9.1875 9.39196 9.09533 9.80718 8.91676C10.2221 8.73833 10.5977 8.47737 10.9131 8.14974L10.9137 8.14909L12.7851 6.21802C12.7907 6.21228 12.7961 6.2064 12.8014 6.2004C13.3913 5.53016 13.7067 4.6536 13.6866 3.7533C13.6665 2.85297 13.3122 1.99203 12.6925 1.35027C12.0722 0.70799 11.2333 0.334658 10.3488 0.313455C9.46437 0.29225 8.60915 0.625022 7.96035 1.23739C7.95474 1.24269 7.94924 1.24812 7.94388 1.25368L6.63367 2.61045C6.44185 2.8091 6.44738 3.12563 6.64602 3.31745C6.84466 3.50928 7.16119 3.50375 7.35302 3.30511ZM4.58791 6.00189C4.879 5.8767 5.19045 5.8125 5.50455 5.8125C5.81865 5.8125 6.1301 5.8767 6.4212 6.00189C6.71233 6.1271 6.9779 6.3111 7.20218 6.54422C7.39363 6.74322 7.71015 6.74934 7.90915 6.55789C8.10815 6.36644 8.11427 6.04991 7.92282 5.85091C7.60732 5.52297 7.23145 5.26179 6.81628 5.08324C6.40107 4.90467 5.95525 4.8125 5.50455 4.8125C5.05386 4.8125 4.60804 4.90467 4.19282 5.08324C3.77794 5.26167 3.4023 5.52262 3.08693 5.85024L3.08628 5.85091L1.21488 7.78198C1.20932 7.78773 1.20389 7.7936 1.19861 7.7996C0.608683 8.46985 0.29328 9.3464 0.313407 10.2467C0.333536 11.147 0.687817 12.008 1.30754 12.6497C1.92778 13.292 2.76674 13.6653 3.65116 13.6865C4.53563 13.7078 5.39085 13.375 6.03965 12.7626C6.04526 12.7573 6.05076 12.7519 6.05612 12.7463L7.36633 11.3895C7.55815 11.1909 7.55262 10.8744 7.35398 10.6825C7.15534 10.4907 6.83881 10.4963 6.64698 10.6949L5.3452 12.0429C4.8856 12.4729 4.28781 12.7015 3.67513 12.6868C3.05881 12.6721 2.46812 12.412 2.02689 11.9551C1.58515 11.4976 1.32777 10.8781 1.31316 10.2244C1.29863 9.57448 1.52524 8.94649 1.94172 8.4689L3.80566 6.54553L3.80692 6.54422C4.0312 6.3111 4.29677 6.1271 4.58791 6.00189Z"/>
</svg>`, on = `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.35302 3.30511L8.6548 1.95705C9.1144 1.52715 9.71219 1.29848 10.3249 1.31317C10.9412 1.32794 11.5319 1.58801 11.9731 2.04493C12.4149 2.50237 12.6722 3.12189 12.6868 3.77565C12.7014 4.42552 12.4748 5.0535 12.0583 5.5311L10.1943 7.45447L10.1931 7.45578C9.9688 7.6889 9.70323 7.8729 9.41209 7.99811C9.121 8.1233 8.80955 8.1875 8.49545 8.1875C8.18135 8.1875 7.8699 8.1233 7.57881 7.99811C7.28767 7.8729 7.0221 7.6889 6.79782 7.45578C6.60637 7.25678 6.28985 7.25066 6.09085 7.44211C5.89185 7.63356 5.88573 7.95009 6.07718 8.14909C6.39268 8.47703 6.76855 8.73821 7.18372 8.91676C7.59893 9.09533 8.04475 9.1875 8.49545 9.1875C8.94614 9.1875 9.39196 9.09533 9.80718 8.91676C10.2221 8.73833 10.5977 8.47737 10.9131 8.14974L10.9137 8.14909L12.7851 6.21802C12.7907 6.21228 12.7961 6.2064 12.8014 6.2004C13.3913 5.53016 13.7067 4.6536 13.6866 3.7533C13.6665 2.85297 13.3122 1.99203 12.6925 1.35027C12.0722 0.70799 11.2333 0.334658 10.3488 0.313455C9.46437 0.29225 8.60915 0.625022 7.96035 1.23739C7.95474 1.24269 7.94924 1.24812 7.94388 1.25368L6.63367 2.61045C6.44185 2.8091 6.44738 3.12563 6.64602 3.31745C6.84466 3.50928 7.16119 3.50375 7.35302 3.30511ZM4.58791 6.00189C4.879 5.8767 5.19045 5.8125 5.50455 5.8125C5.81865 5.8125 6.1301 5.8767 6.4212 6.00189C6.71233 6.1271 6.9779 6.3111 7.20218 6.54422C7.39363 6.74322 7.71015 6.74934 7.90915 6.55789C8.10815 6.36644 8.11427 6.04991 7.92282 5.85091C7.60732 5.52297 7.23145 5.26179 6.81628 5.08324C6.40107 4.90467 5.95525 4.8125 5.50455 4.8125C5.05386 4.8125 4.60804 4.90467 4.19282 5.08324C3.77794 5.26167 3.4023 5.52262 3.08693 5.85024L3.08628 5.85091L1.21488 7.78198C1.20932 7.78773 1.20389 7.7936 1.19861 7.7996C0.608683 8.46985 0.29328 9.3464 0.313407 10.2467C0.333536 11.147 0.687817 12.008 1.30754 12.6497C1.92778 13.292 2.76674 13.6653 3.65116 13.6865C4.53563 13.7078 5.39085 13.375 6.03965 12.7626C6.04526 12.7573 6.05076 12.7519 6.05612 12.7463L7.36633 11.3895C7.55815 11.1909 7.55262 10.8744 7.35398 10.6825C7.15534 10.4907 6.83881 10.4963 6.64698 10.6949L5.3452 12.0429C4.8856 12.4729 4.28781 12.7015 3.67513 12.6868C3.05881 12.6721 2.46812 12.412 2.02689 11.9551C1.58515 11.4976 1.32777 10.8781 1.31316 10.2244C1.29863 9.57448 1.52524 8.94649 1.94172 8.4689L3.80566 6.54553L3.80692 6.54422C4.0312 6.3111 4.29677 6.1271 4.58791 6.00189Z"/>
</svg>`;
class We {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new k();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = et, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        const o = document.getElementsByClassName("unlink-button")[0];
        this.selection.expandToTag(t), this.unlink(), this.nodes.input.value = "", this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive), o.remove(), this.inlineToolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A"), t = document.createElement("button");
    if (e) {
      this.nodes.button.innerHTML = on, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions(), t.classList.add("unlink-button"), t.textContent = this.i18n.t("Remove"), t.addEventListener("click", () => {
        this.selection.expandToTag(e), this.unlink(), this.nodes.input.value = "", this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive), t.remove(), this.inlineToolbar.close();
      });
      const o = e.getAttribute("href");
      this.nodes.input.value = o !== "null" ? o : "", this.nodes.input.value !== "" && !document.querySelector(".unlink-button") && document.querySelector(".ce-inline-toolbar__actions").appendChild(t), this.selection.save();
    } else
      this.nodes.button.innerHTML = et, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    const t = document.getElementsByClassName(
      "ce-inline-toolbar"
    )[0];
    this.nodes.input.classList.add(this.CSS.inputShowed), t.style.transform = "translate(-50%, -33px)", e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    const t = document.getElementsByClassName(
      "ce-inline-toolbar"
    )[0];
    if (this.selection.isFakeBackgroundEnabled) {
      const o = new k();
      o.save(), this.selection.restore(), this.selection.removeFakeBackground(), o.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), t.style.transform = "", this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), L("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", n = /^\/\/[^/\s]/.test(e);
    return !t && !o && !n && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e), this.selection.findParentTag("A").setAttribute("target", "_blank");
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
We.isInline = !0;
We.title = "Link";
class wt {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = d.make("div", this.CSS.wrapper), t = To, o = d.make("div", this.CSS.info), n = d.make("div", this.CSS.title, {
      textContent: this.title
    }), i = d.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(n), o.appendChild(i), e.appendChild(o), e;
  }
}
wt.isReadOnlySupported = !0;
class nn extends ze {
  constructor() {
    super(...arguments), this.type = we.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[je.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
}
class sn extends ze {
  constructor() {
    super(...arguments), this.type = we.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings,
      block: t,
      data: e
    });
  }
}
class U extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new U(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new U(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new U(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new U(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new U(e);
  }
}
var rn = Object.defineProperty, an = Object.getOwnPropertyDescriptor, Ct = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? an(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && rn(e, t, n), n;
};
class Ve extends ze {
  constructor() {
    super(...arguments), this.type = we.Block, this.inlineTools = new U(), this.tunes = new U();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[se.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[se.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[se.Toolbox], t = this.config[me.Toolbox];
    if (!K(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, n) => {
        const i = e[n];
        return i ? {
          ...i,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[se.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[me.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[me.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[se.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (K(e))
      return t;
    const o = {};
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        const i = e[n];
        j(i) ? o[n] = Object.assign({}, t, i) : o[n] = i;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
Ct([
  ce
], Ve.prototype, "sanitizeConfig", 1);
Ct([
  ce
], Ve.prototype, "baseSanitizeConfig", 1);
class ln {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...n } = this.config[e], i = this.getConstructor(t);
    return new i({
      name: e,
      constructable: t,
      config: n,
      api: this.api,
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[je.IsInline]:
        return nn;
      case e[kt.IsTune]:
        return sn;
      default:
        return Ve;
    }
  }
}
const cn = `<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 15.2071C5.68342 15.5976 6.31658 15.5976 6.70711 15.2071L11.8536 10.0607C12.0488 9.8654 12.0488 9.54882 11.8536 9.35355C11.6583 9.15829 11.3417 9.15829 11.1464 9.35355L6.5 14L6.5 1.20703C6.5 0.930889 6.27614 0.707031 6 0.707031C5.72386 0.707031 5.5 0.930889 5.5 1.20703L5.5 14L0.853554 9.35355C0.658291 9.15829 0.34171 9.15829 0.146447 9.35355C-0.0488152 9.54881 -0.0488152 9.8654 0.146447 10.0607L5.29289 15.2071Z" fill="currentColor"/>
</svg>`;
class yt {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: cn,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, n = o.getBoundingClientRect();
    let i = Math.abs(
      window.innerHeight - o.offsetHeight
    );
    n.top < window.innerHeight && (i = window.scrollY + o.offsetHeight), window.scrollTo(0, i), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
yt.isTune = !0;
const dn = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.5C5 1.22386 5.22386 1 5.5 1H10.5C10.7761 1 11 1.22386 11 1.5V3H5V1.5ZM4 3V1.5C4 0.671573 4.67157 0 5.5 0H10.5C11.3284 0 12 0.671573 12 1.5V3H13.5H15C15.2761 3 15.5 3.22386 15.5 3.5C15.5 3.77614 15.2761 4 15 4H14V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V4H1C0.723858 4 0.5 3.77614 0.5 3.5C0.5 3.22386 0.723858 3 1 3H2.5H4ZM11.5 4H4.5H3V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V4H11.5ZM6.5 6.5C6.77614 6.5 7 6.72386 7 7V12C7 12.2761 6.77614 12.5 6.5 12.5C6.22386 12.5 6 12.2761 6 12V7C6 6.72386 6.22386 6.5 6.5 6.5ZM10 7C10 6.72386 9.77614 6.5 9.5 6.5C9.22386 6.5 9 6.72386 9 7V12C9 12.2761 9.22386 12.5 9.5 12.5C9.77614 12.5 10 12.2761 10 12V7Z" fill="currentColor"/>
</svg>`;
class Bt {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: dn,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      onActivate: () => this.handleClick()
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
Bt.isTune = !0;
const hn = `<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 0.999924C6.31658 0.6094 5.68342 0.609401 5.29289 0.999924L0.146447 6.14637C-0.0488156 6.34163 -0.0488156 6.65822 0.146447 6.85348C0.341709 7.04874 0.658291 7.04874 0.853553 6.85348L5.5 2.20703V15C5.5 15.2761 5.72386 15.5 6 15.5C6.27614 15.5 6.5 15.2761 6.5 15V2.20703L11.1464 6.85348C11.3417 7.04874 11.6583 7.04874 11.8536 6.85348C12.0488 6.65822 12.0488 6.34163 11.8536 6.14637L6.70711 0.999924Z" fill="currentColor"/>
</svg>`;
class Et {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: hn,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(
      e - 1
    );
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const n = t.holder, i = o.holder, r = n.getBoundingClientRect(), a = i.getBoundingClientRect();
    let l;
    a.top > 0 ? l = Math.abs(r.top) - Math.abs(a.top) : l = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Et.isTune = !0;
var un = Object.defineProperty, pn = Object.getOwnPropertyDescriptor, fn = (s, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? pn(e, t) : e, i = s.length - 1, r; i >= 0; i--)
    (r = s[i]) && (n = (o ? r(e, t, n) : r(n)) || n);
  return o && n && un(e, t, n), n;
};
class Tt extends T {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new U(), this.toolsUnavailable = new U();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = Te({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new ln(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await Nt(
      t,
      (o) => {
        this.toolPrepareMethodSuccess(o);
      },
      (o) => {
        this.toolPrepareMethodFallback(o);
      }
    ), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      D(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      bold: {
        class: Ue,
        isInternal: !0
      },
      italic: {
        class: $e,
        isInternal: !0
      },
      link: {
        class: We,
        isInternal: !0
      },
      paragraph: {
        class: Qo,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: wt,
        isInternal: !0
      },
      moveUp: {
        class: Et,
        isInternal: !0
      },
      moveDown: {
        class: yt,
        isInternal: !0
      },
      delete: {
        class: Bt,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const n = ["render", "surround", "checkState"].filter(
        (i) => !t.create()[i]
      );
      if (n.length) {
        L(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          n
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, n]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: D(n.class.prepare) ? n.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: n.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new U(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [
            t,
            this.inlineTools.get(t)
          ]) : (
            /**
             * If common settings is 'true' or not specified (will be set as true at core.ts), get the default order
             */
            Array.from(this.inlineTools.entries())
          )
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new U(
        e.enabledInlineTools.map((t) => [
          t,
          this.inlineTools.get(t)
        ])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new U(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new U([
          ...t,
          ...this.blockTunes.internalTools
        ]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new U(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new U([
          ...t,
          ...this.blockTunes.internalTools
        ]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!D(t) && !D(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      j(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = {
        class: this.config.tools[t]
      };
    return e;
  }
}
fn([
  ce
], Tt.prototype, "getAllInlineToolsSanitizeConfig", 1);
const gn = `:root{--boxShadow1: 0 2px 8px rgb(0, 0, 0, .1);--boxShadow2: 0 8px 24px rgb(0, 0, 0, .1);--boxShadow3: 0 12px 40px rgb(0, 0, 0, .1);--blue0: #e7f5ff;--blue1: #d0ebff;--blue2: #afd8fb;--blue3: #84bff7;--blue4: #64abf1;--blue5: #4593fc;--blue6: #3182f6;--blue7: #1b64da;--blue8: #1f58b2;--blue9: #1a4aa6;--gray0: #f8f9fa;--gray1: #f1f3f5;--gray2: #e9ecef;--gray3: #dee2e6;--gray4: #ced4da;--gray5: #adb5bd;--gray6: #868e96;--gray7: #495057;--gray8: #343a40;--gray9: #212529;--red_12: rgb(249, 61, 63, .12);--redCloudy: #d78582;--red: #f93d3f;--redDark: #cb0101;--orange_12: rgb(255, 99, 60, .12);--orangeCloudy: #ed8e6a;--orange: #ff633c;--orangeDark: #e94600;--yellow_12: rgb(255, 202, 60, .12);--yellowCloudy: #f9e079;--yellow: #ffca3c;--yellowDark: #ba6100;--green_12: rgb(14, 184, 122, .12);--greenCloudy: #67c1a0;--green: #0eb87a;--greenDark: #00796e;--purple_12: rgb(115, 84, 230, .12);--purpleCloudy: #8e82d7;--purple: #7354e6;--purpleDark: #4f3292;--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1d202b;--color-active-icon: #388ae5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 12px;--icon-size--mobile: 12px;--block-padding-vertical: .4em;--color-line-gray: #eff0f1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 201px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 201px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 201px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}@media (max-width: 200px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width: 200px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:100%}}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0;height:100%}@media (max-width: 200px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{visibility:hidden}@media (max-width: 200px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}.ce-toolbar__plus{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a;border-radius:8px;z-index:2;position:static}@media (max-width: 200px){.ce-toolbar__plus{-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a}}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;height:26px}@media (max-width: 200px){.ce-toolbar__actions{position:absolute;right:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 200px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;width:18px;height:100%;cursor:pointer;user-select:none}@media (max-width: 200px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 201px){.ce-toolbar__settings-btn{width:18px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 200px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a;border-radius:8px;z-index:2;position:static}@media (max-width: 200px){.ce-toolbar__settings-btn{-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a}}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:16px;height:16px}@media (min-width: 201px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 201px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{border-radius:4px!important}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a;border-radius:8px;z-index:2;border:none;-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translate(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}@media (max-width: 200px){.ce-inline-toolbar{-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a}}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translate(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.94);transform:translate(-23px) translateY(8px) scale(.94)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translate(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.94);transform:translate(-100%) translateY(8px) scale(.94);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translate(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.ce-inline-toolbar__buttons,.ce-inline-toolbar__actions{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__actions .unlink-button{font-size:11px!important}.ce-inline-toolbar__actions .unlink-button{background:inherit;border:none;-webkit-box-shadow:none;box-shadow:none;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;outline-style:none;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:end;font-weight:400;line-height:16px;color:#868e96;padding:8px 10px 8px 0;cursor:pointer;white-space:nowrap;min-width:60px}.ce-inline-toolbar__actions .unlink-button:focus{outline:0}.ce-inline-toolbar__actions input,.ce-inline-toolbar__actions .unlink-button{border-top:1px solid #dee2e6}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;padding:0 10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid #dee2e6;border-radius:4px 0 0 4px}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#e9ecef}}.ce-inline-toolbar__dropdown:active{background:#f1f3f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{font-size:14px!important}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{padding:0 10px!important}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px;line-height:32px;text-align:center;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal;width:auto;min-width:24px}.ce-inline-tool svg{width:12px;height:12px}@media (max-width: 200px){.ce-inline-tool svg{width:12px;height:12px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#4593fc}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool .icon{height:12px}.ce-inline-tool:last-child{border-radius:0 4px 4px 0}.ce-inline-tool:hover{background:#e9ecef}.ce-inline-tool:active{background:#f1f3f5}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{font-size:11px!important}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;line-height:16px;padding:8px 5px 8px 10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;color:#212529}.ce-inline-tool-input::-webkit-input-placeholder{color:#adb5bd}.ce-inline-tool-input::-moz-placeholder{color:#adb5bd}.ce-inline-tool-input:-ms-input-placeholder{color:#adb5bd}.ce-inline-tool-input::-ms-input-placeholder{color:#adb5bd}.ce-inline-tool-input::placeholder{color:#adb5bd}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:160px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box;padding-bottom:8px;border-radius:4px;border:none}@media (max-width: 200px){.ce-conversion-toolbar{-webkit-box-shadow:0 8px 24px rgb(0,0,0,.1);box-shadow:0 8px 24px #0000001a}}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#868e96;font-size:11px;line-height:16px;padding:12px 12px 4px}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:4px 14.5px 4px 12px;font-size:13px;line-height:18px;color:#343a40;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#e9ecef}.ce-conversion-tool:active{background:#f1f3f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:.5px solid #dee2e6;border-radius:2px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:4px;background:#fff}.ce-conversion-tool__icon svg{color:#343a40}.ce-conversion-tool__check-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;opacity:0;width:12px;height:8px}.ce-conversion-tool--current .ce-conversion-tool__check-icon{opacity:1}.ce-conversion-tool--current .ce-conversion-tool__check-icon svg{fill:#343a40}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#4593fc!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 200px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{padding:8px 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer}.ce-settings__button:hover{background-color:#e9ecef}.ce-settings__button:active{background-color:#f1f3f5}.ce-settings__button-icon-container{width:20px;height:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-settings__button-icon-container svg{fill:#868e96}.ce-settings__button-text{font-size:13px!important}.ce-settings__button-text{line-height:18px;color:#343a40;margin-left:4px;white-space:nowrap}.ce-settings__button-shortcut-text{font-size:11px!important}.ce-settings__button-shortcut-text{line-height:16px;color:#adb5bd;margin-left:auto}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#4593fc}@media (min-width: 201px){.codex-editor--narrow .ce-settings{left:44px}.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #4593fc;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#4593fc;background:repeating-linear-gradient(90deg,#4593fc,#4593fc 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width: 201px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{padding:0!important}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px;line-height:32px;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0}.cdx-settings-button svg{width:12px;height:12px}@media (max-width: 200px){.cdx-settings-button svg{width:12px;height:12px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--active{color:#4593fc}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n + 3)){margin-right:3px}.cdx-settings-button:nth-child(n + 4){margin-top:3px}.cdx-settings-button--active svg{fill:#4593fc}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 200px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#4593fc;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #eff0f1;color:#707684;font-size:14px}.ce-stub svg{width:12px;height:12px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 200px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n + 3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 201px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 201px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{color:#707684}.cdx-search-field__input{font-size:14px!important}.cdx-search-field__input{outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 8px;--width: 220px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(0, 0, 0, .1);--color-background: white;--color-text-primary: var(--gray8);--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #eff0f1;--color-text-icon-active: #388ae5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #e24a4a;--color-background-item-confirm-hover: #ce4343;min-width:var(--width);width:var(--width);border-radius:var(--border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 8px 24px var(--color-shadow);box-shadow:0 8px 24px var(--color-shadow);position:absolute;left:44px;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;padding:8px 0}@media (max-width: 200px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}@media (max-width: 200px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1d202b;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 200px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 201px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--icon-size: 20px;--icon-size-mobile: 28px;padding:8px 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer}@media (max-width: 200px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:20px;height:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:4px}.ce-popover-item__icon svg{color:#868e96}@media (max-width: 200px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{color:#868e96}}.ce-popover-item__title{font-size:13px!important}.ce-popover-item__title{line-height:18px;color:#343a40;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 200px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer;background-color:#e9ecef}.ce-popover-item:hover:active{background-color:#f1f3f5}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
class bn extends T {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = Pt(() => {
      this.windowResize();
    }, 200);
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${H.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.checkIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(
      this.CSS.editorEmpty,
      e.isEditorEmpty
    );
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: n } = this.Editor;
    return t.opened || o.opened || n.opened || e.toolbox.opened;
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof G).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "";
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: n } = this.Editor;
    t.close(), o.close(), n.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and cache a result
   */
  checkIsMobile() {
    this.isMobile = window.innerWidth < it;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (d.get(e))
      return;
    const t = d.make("style", null, {
      id: e,
      textContent: gn.toString()
    });
    d.prepend(document.head, t);
  }
  /**
   * Bind events on the Editor.js interface
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "click",
      (e) => {
        this.redactorClicked(e);
      },
      !1
    ), this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "mousedown",
      (e) => {
        this.documentTouched(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "touchstart",
      (e) => {
        this.documentTouched(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      document,
      "keydown",
      (e) => {
        this.documentKeydown(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      document,
      "mousedown",
      (e) => {
        this.documentClicked(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      document,
      "selectionchange",
      () => {
        this.selectionChanged();
      },
      !0
    ), this.readOnlyMutableListeners.on(
      window,
      "resize",
      () => {
        this.resizeDebouncer();
      },
      {
        passive: !0
      }
    ), this.watchBlockHoveredEvents();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "mousemove",
      Ee((t) => {
        const o = t.target.closest(".ce-block");
        this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(bt, {
          block: this.Editor.BlockManager.getBlockByChildNode(o)
        }));
      }, 20),
      {
        passive: !0
      }
    );
  }
  /**
   * Unbind events on the Editor.js interface
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.checkIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case B.ENTER:
        this.enterPressed(e);
        break;
      case B.BACKSPACE:
      case B.DELETE:
        this.backspacePressed(e);
        break;
      case B.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(
      `.${this.CSS.editorWrapper}`
    ), n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && n || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: n } = this.Editor;
    if (o.anyBlockSelected && !k.isSelectionExists) {
      const i = t.removeSelectedBlocks();
      n.setToBlock(
        t.insertDefaultBlockAtIndex(i, !0),
        n.positions.START
      ), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor, n = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !k.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && n && e.target.tagName === "BODY") {
      const i = this.Editor.BlockManager.insert();
      this.Editor.Caret.setToBlock(i), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(i);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    if (!e.isTrusted)
      return;
    const t = e.target;
    this.nodes.holder.contains(t) || k.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    const n = this.Editor.BlockSettings.nodes.wrapper.contains(t), i = this.Editor.Toolbar.nodes.settingsToggler.contains(t), r = n || i;
    if (this.Editor.BlockSettings.opened && !r) {
      this.Editor.BlockSettings.close();
      const a = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(a);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, n = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, n);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t), this.Editor.BlockManager.highlightCurrentNode();
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    const { BlockSelection: t } = this.Editor;
    if (!k.isCollapsed)
      return;
    const o = () => {
      e.stopImmediatePropagation(), e.stopPropagation();
    }, n = e.target, i = e.metaKey || e.ctrlKey;
    if (d.isAnchor(n) && i) {
      o();
      const u = n.getAttribute("href"), h = Ft(u);
      zt(h);
      return;
    }
    const r = this.Editor.BlockManager.getBlockByIndex(-1), a = d.offset(r.holder).bottom, l = e.pageY;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !t.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    a < l) {
      o();
      const { BlockManager: u, Caret: h, Toolbar: f } = this.Editor;
      (!u.lastBlock.tool.isDefault || !u.lastBlock.isEmpty) && u.insertAtEnd(), h.setToTheLastBlock(), f.moveAndOpen(u.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = k.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && k.get().removeAllRanges(), !o) {
      k.range || this.Editor.InlineToolbar.close();
      return;
    }
    const n = o.closest(`.${H.CSS.content}`) === null;
    if (n && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true")))
      return;
    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
    const i = n !== !0;
    this.Editor.InlineToolbar.tryToShow(!0, i);
  }
}
const mn = {
  // API Modules
  BlocksAPI: Gt,
  CaretAPI: Jt,
  EventsAPI: Qt,
  I18nAPI: Re,
  API: eo,
  InlineToolbarAPI: to,
  ListenersAPI: oo,
  NotifierAPI: ro,
  ReadOnlyAPI: ao,
  SanitizerAPI: go,
  SaverAPI: bo,
  SelectionAPI: mo,
  StylesAPI: ko,
  ToolbarAPI: vo,
  TooltipAPI: Co,
  UiAPI: yo,
  // Toolbar Modules
  BlockSettings: Lo,
  ConversionToolbar: $,
  Toolbar: Ho,
  InlineToolbar: jo,
  // Modules
  BlockEvents: zo,
  BlockManager: Wo,
  BlockSelection: Vo,
  Caret: ke,
  CrossBlockSelection: Yo,
  DragNDrop: Zo,
  ModificationsObserver: Ko,
  Paste: xt,
  ReadOnly: Xo,
  RectangleSelection: pe,
  Renderer: qo,
  Saver: Go,
  Tools: Tt,
  UI: bn
};
class kn {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new xe();
    let t, o;
    this.isReady = new Promise((n, i) => {
      t = n, o = i;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: n, Caret: i, UI: r, ModificationsObserver: a } = this.moduleInstances;
      r.checkEmptiness(), a.enable(), this.configuration.autofocus && (i.setToBlock(n.blocks[0], i.positions.START), n.highlightCurrentNode()), t();
    }).catch((n) => {
      L(`Editor.js is not ready because of ${n}`, "error"), o(n);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o, n;
    j(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, Se(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = tt.VERBOSE), Ot(this.config.logLevel), Se(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (K(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && W.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((n = this.config.i18n) == null ? void 0 : n.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (J(t) && !d.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && j(t) && !d.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (t, o) => t.then(async () => {
        try {
          await this.moduleInstances[o].prepare();
        } catch (n) {
          if (n instanceof rt)
            throw new Error(n.message);
          L(`Module ${o} was skipped because of %o`, "warn", n);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(mn).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        L("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class vn {
  /** Editor version */
  static get version() {
    return "2.28.0-rc.3";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    j(e) && D(e.onReady) && (t = e.onReady);
    const o = new kn(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((i) => {
        D(i.destroy) && i.destroy(), i.listeners.removeAll();
      }), e = null;
      for (const i in this)
        Object.prototype.hasOwnProperty.call(this, i) && delete this[i];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((i) => {
      this[i] = e[i];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([i, r]) => {
      Object.entries(r).forEach(([a, l]) => {
        this[l] = e.moduleInstances.API.methods[i][a];
      });
    });
  }
}
export {
  vn as default
};
