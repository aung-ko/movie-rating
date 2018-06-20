var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && "object" == _typeof2(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof2(e);
  }var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof2(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
          a.unshift(n);
        }n = t;while (n = n.parentNode) {
          s.unshift(n);
        }while (a[r] === s[r]) {
          r++;
        }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return G.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = pe(t);
    }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }i(null, v = [], l, u);
            }c = v.length;while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }p.push(n);
        }
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);break;
              }
            }c && (T = E);
          }n && ((f = !y && f) && v--, _o && x.push(f));
        }if (v += m, n && m !== v) {
          h = 0;while (y = t[h++]) {
            y(x, b, a, s);
          }if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }b = we(b);
          }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;r.push(e);
      }
    }return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
        $(i[n], s(n), a.reject);
      }return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
            delete r[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }i = n.apply(e, r || []);for (o in t) {
      e.style[o] = a[o];
    }return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
          a = a.lastChild;
        }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }f.textContent = "", d = 0;while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof2(t))) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
        De(e, s, n, r, t[s], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && s.push({ elem: l, handlers: o });
        }
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof2(e))) {
        for (i in e) {
          this.off(i, t, e[i]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }n[J.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Ie(this, e, !0);
    }, remove: function remove(e) {
      return Ie(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof2(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
        }d[r] = y && y[r] || w.style(e, r);
      }
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    }, prefilters: [ct], prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    } }), dt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof2(e),
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;s.push(t);
            }
          }return s;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof2(i)) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);break;
      }
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
          }
        }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n2, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
          s.setRequestHeader(a, i[a]);
        }_n2 = function n(e) {
          return function () {
            _n2 && (_n2 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n2(), r = s.onerror = s.ontimeout = _n2("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n2 && r();
          });
        }, _n2 = _n2("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n2) throw e;
        }
      }, abort: function abort() {
        _n2 && _n2();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n3;return { send: function send(i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n3 = function n(e) {
            t.remove(), _n3 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function abort() {
          _n3 && _n3();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }function t(e, t) {
    if (1 !== e.nodeType) return [];var o = getComputedStyle(e, null);return t ? o[t] : o;
  }function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }function n(e) {
    if (!e) return document.body;switch (e.nodeName) {case 'HTML':case 'BODY':
        return e.ownerDocument.body;case '#document':
        return e.body;}var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;return (/(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    );
  }function r(e) {
    var o = e && e.offsetParent,
        i = o && o.nodeName;return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement;
  }function p(e) {
    var t = e.nodeName;return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
  }function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = o ? e : t,
        n = o ? t : e,
        a = document.createRange();a.setStart(i, 0), a.setEnd(n, 0);var l = a.commonAncestorContainer;if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);var f = s(e);return f.host ? d(f.host, t) : d(e, s(t).host);
  }function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        i = e.nodeName;if ('BODY' === i || 'HTML' === i) {
      var n = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || n;return r[o];
    }return e[o];
  }function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = a(t, 'top'),
        n = a(t, 'left'),
        r = o ? -1 : 1;return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
  }function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == o ? 'Right' : 'Bottom';return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
  }function m(e, t, o, i) {
    return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }function h() {
    var e = document.body,
        t = document.documentElement,
        o = ie() && getComputedStyle(t);return { height: m('Height', e, t, o), width: m('Width', e, t, o) };
  }function c(e) {
    return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function g(e) {
    var o = {};if (ie()) try {
      o = e.getBoundingClientRect();var i = a(e, 'top'),
          n = a(e, 'left');o.top += i, o.left += n, o.bottom += i, o.right += n;
    } catch (e) {} else o = e.getBoundingClientRect();var r = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
        p = 'HTML' === e.nodeName ? h() : {},
        s = p.width || e.clientWidth || r.right - r.left,
        d = p.height || e.clientHeight || r.bottom - r.top,
        l = e.offsetWidth - s,
        m = e.offsetHeight - d;if (l || m) {
      var g = t(e);l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m;
    }return c(r);
  }function u(e, o) {
    var i = ie(),
        r = 'HTML' === o.nodeName,
        p = g(e),
        s = g(o),
        d = n(e),
        a = t(o),
        f = parseFloat(a.borderTopWidth, 10),
        m = parseFloat(a.borderLeftWidth, 10),
        h = c({ top: p.top - s.top - f, left: p.left - s.left - m, width: p.width, height: p.height });if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = parseFloat(a.marginTop, 10),
          b = parseFloat(a.marginLeft, 10);h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b;
    }return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h;
  }function b(e) {
    var t = e.ownerDocument.documentElement,
        o = u(e, t),
        i = J(t.clientWidth, window.innerWidth || 0),
        n = J(t.clientHeight, window.innerHeight || 0),
        r = a(t),
        p = a(t, 'left'),
        s = { top: r - o.top + o.marginTop, left: p - o.left + o.marginLeft, width: i, height: n };return c(s);
  }function w(e) {
    var i = e.nodeName;return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e));
  }function y(e, t, i, r) {
    var p = { top: 0, left: 0 },
        s = d(e, t);if ('viewport' === r) p = b(s);else {
      var a;'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;var l = u(a, s);if ('HTML' === a.nodeName && !w(s)) {
        var f = h(),
            m = f.height,
            c = f.width;p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left;
      } else p = l;
    }return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
  }function E(e) {
    var t = e.width,
        o = e.height;return t * o;
  }function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf('auto')) return e;var p = y(o, i, r, n),
        s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
        d = Object.keys(s).map(function (e) {
      return se({ key: e }, s[e], { area: E(s[e]) });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          i = e.height;return t >= o.clientWidth && i >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];return l + (f ? '-' + f : '');
  }function O(e, t, o) {
    var i = d(t, o);return u(o, i);
  }function L(e) {
    var t = getComputedStyle(e),
        o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
        n = { width: e.offsetWidth + i, height: e.offsetHeight + o };return n;
  }function x(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function S(e, t, o) {
    o = o.split('-')[0];var i = L(e),
        n = { width: i.width, height: i.height },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n;
  }function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function D(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });var i = T(e, function (e) {
      return e[t] === o;
    });return e.indexOf(i);
  }function C(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));return n.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i = t['function'] || t.fn;t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t));
    }), o;
  }function N() {
    if (!this.state.isDestroyed) {
      var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }function k(e, t) {
    return e.some(function (e) {
      var o = e.name,
          i = e.enabled;return i && o === t;
    });
  }function W(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;if ('undefined' != typeof document.body.style[r]) return r;
    }return null;
  }function P() {
    return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }function B(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;p.addEventListener(t, o, { passive: !0 }), r || H(n(p.parentNode), t, o, i), i.push(p);
  }function A(e, t, o, i) {
    o.updateBound = i, B(e).addEventListener('resize', o.updateBound, { passive: !0 });var r = n(e);return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }function I() {
    this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate));
  }function M(e, t) {
    return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }function R() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }function U(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
    });
  }function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];!1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }function F(e, t, o) {
    var i = T(e, function (e) {
      var o = e.name;return o === t;
    }),
        n = !!i && e.some(function (e) {
      return e.name === o && e.enabled && e.order < i.order;
    });if (!n) {
      var r = '`' + t + '`';console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }return n;
  }function K(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }function q(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ae.indexOf(e),
        i = ae.slice(o + 1).concat(ae.slice(0, o));return t ? i.reverse() : i;
  }function V(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +n[1],
        p = n[2];if (!r) return e;if (0 === p.indexOf('%')) {
      var s;switch (p) {case '%p':
          s = o;break;case '%':case '%r':default:
          s = i;}var d = c(s);return d[t] / 100 * r;
    }if ('vh' === p || 'vw' === p) {
      var a;return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }return r;
  }function z(e, t, o, i) {
    var n = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(i),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(T(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
          p = !1;return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return V(e, n, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
      });
    }), n;
  }function G(e, t) {
    var o,
        i = t.offset,
        n = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = n.split('-')[0];return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1) {
    if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;break;
    }
  }var i,
      te = Q && window.Promise,
      oe = te ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, $));
    };
  },
      ie = function ie() {
    return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
  },
      ne = function ne(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      re = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, o, i) {
      return o && e(t.prototype, o), i && e(t, i), t;
    };
  }(),
      pe = function pe(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
  },
      se = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var i in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
    }return e;
  },
      de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ae = de.slice(3),
      le = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
      fe = function () {
    function t(o, i) {
      var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};ne(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return se({ name: e }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();var p = this.options.eventsEnabled;p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }return re(t, [{ key: 'update', value: function value() {
        return N.call(this);
      } }, { key: 'destroy', value: function value() {
        return P.call(this);
      } }, { key: 'enableEventListeners', value: function value() {
        return I.call(this);
      } }, { key: 'disableEventListeners', value: function value() {
        return R.call(this);
      } }]), t;
  }();return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = { placement: 'bottom', eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = t.split('-')[1];if (i) {
            var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = { start: pe({}, d, r[d]), end: pe({}, d, r[d] + r[a] - p[a]) };e.offsets.popper = se({}, p, l[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: G, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var o = t.boundariesElement || r(e.instance.popper);e.instance.reference === o && (o = r(o));var i = y(e.instance.popper, e.instance.reference, t.padding, o);t.boundaries = i;var n = t.priority,
              p = e.offsets.popper,
              s = { primary: function primary(e) {
              var o = p[e];return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o);
            }, secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = p[o];return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n);
            } };return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';p = se({}, p, s[t](e));
          }), e.offsets.popper = p, e;
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split('-')[0],
              r = X,
              p = -1 !== ['top', 'bottom'].indexOf(n),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, o) {
          var i;if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;var n = o.element;if ('string' == typeof n) {
            if (n = e.instance.popper.querySelector(n), !n) return e;
          } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              g = a ? 'bottom' : 'right',
              u = L(n)[l];d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e;
        }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (k(e.instance.modifiers, 'inner')) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
              i = e.placement.split('-')[0],
              n = x(i),
              r = e.placement.split('-')[1] || '',
              p = [];switch (t.behavior) {case le.FLIP:
              p = [i, n];break;case le.CLOCKWISE:
              p = q(i);break;case le.COUNTERCLOCKWISE:
              p = q(i, !0);break;default:
              p = t.behavior;}return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;i = e.placement.split('-')[0], n = x(i);var a = e.offsets.popper,
                l = e.offsets.reference,
                f = X,
                m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                w = -1 !== ['top', 'bottom'].indexOf(i),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);(m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'));
          }), e;
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = { position: n.position },
              h = { left: X(n.left), top: X(n.top), bottom: X(n.bottom), right: X(n.right) },
              c = 'bottom' === o ? 'top' : 'bottom',
              u = 'right' === i ? 'left' : 'right',
              b = W('transform');if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == u ? -1 : 1;m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u;
          }var E = { "x-placement": e.placement };return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, o, i, n) {
          var r = O(n, t, e),
              p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);return t.setAttribute('x-placement', p), Y(t, { position: 'absolute' }), o;
        }, gpuAcceleration: void 0 } } }, fe;
});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }return t;
    }).apply(this, arguments);
  }e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;var o,
      a,
      l,
      h,
      c,
      u,
      f,
      d,
      _,
      g,
      p,
      m,
      v,
      E,
      T,
      y,
      C,
      I,
      A,
      b,
      D,
      S,
      w,
      N,
      O,
      k,
      P = function (t) {
    var e = !1;function n(e) {
      var n = this,
          s = !1;return t(this).one(i.TRANSITION_END, function () {
        s = !0;
      }), setTimeout(function () {
        s || i.triggerTransitionEnd(n);
      }, e), this;
    }var i = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));return t;
      }, getSelectorFromElement: function getSelectorFromElement(e) {
        var n,
            i = e.getAttribute("data-target");i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));try {
          return t(document).find(i).length > 0 ? i : null;
        } catch (t) {
          return null;
        }
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e.end);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }, isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var s in n) {
          if (Object.prototype.hasOwnProperty.call(n, s)) {
            var r = n[s],
                o = e[s],
                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".');
          }
        }var l;
      } };return e = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      } }), i;
  }(e),
      L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function () {
    function t(t) {
      this._element = t;
    }var e = t.prototype;return e.close = function (t) {
      t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, e.dispose = function () {
      o.removeData(this._element, l), this._element = null;
    }, e._getRootElement = function (t) {
      var e = P.getSelectorFromElement(t),
          n = !1;return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (t) {
      var e = o.Event(u.CLOSE);return o(t).trigger(e), e;
    }, e._removeElement = function (t) {
      var e = this;o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
        return e._destroyElement(t, n);
      }).emulateTransitionEnd(150) : this._destroyElement(t);
    }, e._destroyElement = function (t) {
      o(t).detach().trigger(u.CLOSED).remove();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = o(this),
            i = n.data(l);i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(t, null, [{ key: "VERSION", get: function get() {
        return "4.0.0";
      } }]), t;
  }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
    return o.fn[a] = c, g._jQueryInterface;
  }, g),
      R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + T, FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T }, k = function () {
    function t(t) {
      this._element = t;
    }var e = t.prototype;return e.toggle = function () {
      var t = !0,
          e = !0,
          n = p(this._element).closest(D)[0];if (n) {
        var i = p(this._element).find(S)[0];if (i) {
          if ("radio" === i.type) if (i.checked && p(this._element).hasClass(C)) t = !1;else {
            var s = p(n).find(w)[0];s && p(s).removeClass(C);
          }if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !p(this._element).hasClass(C), p(i).trigger("change");
          }i.focus(), e = !1;
        }
      }e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C);
    }, e.dispose = function () {
      p.removeData(this._element, v), this._element = null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = p(this).data(v);n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]();
      });
    }, s(t, null, [{ key: "VERSION", get: function get() {
        return "4.0.0";
      } }]), t;
  }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
    t.preventDefault();var e = t.target;p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
    var e = p(t.target).closest(N)[0];p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
    return p.fn[m] = y, k._jQueryInterface;
  }, k),
      j = function (t) {
    var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = t.fn[e],
        a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        h = "next",
        c = "prev",
        u = "left",
        f = "right",
        d = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load" + i + ".data-api", CLICK_DATA_API: "click" + i + ".data-api" },
        _ = "carousel",
        g = "active",
        p = "slide",
        m = "carousel-item-right",
        v = "carousel-item-left",
        E = "carousel-item-next",
        T = "carousel-item-prev",
        y = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        C = function () {
      function o(e, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners();
      }var C = o.prototype;return C.next = function () {
        this._isSliding || this._slide(h);
      }, C.nextWhenVisible = function () {
        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
      }, C.prev = function () {
        this._isSliding || this._slide(c);
      }, C.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, C.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, C.to = function (e) {
        var n = this;this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
          return n.to(e);
        });else {
          if (i === e) return this.pause(), void this.cycle();var s = e > i ? h : c;this._slide(s, this._items[e]);
        }
      }, C.dispose = function () {
        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, C._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, C._addEventListeners = function () {
        var e = this;this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(d.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, C._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
            t.preventDefault(), this.prev();break;case 39:
            t.preventDefault(), this.next();}
      }, C._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e);
      }, C._getItemByDirection = function (t, e) {
        var n = t === h,
            i = t === c,
            s = this._getItemIndex(e),
            r = this._items.length - 1;if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;var o = (s + (t === c ? -1 : 1)) % this._items.length;return -1 === o ? this._items[this._items.length - 1] : this._items[o];
      }, C._triggerSlideEvent = function (e, n) {
        var i = this._getItemIndex(e),
            s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
            r = t.Event(d.SLIDE, { relatedTarget: e, direction: n, from: s, to: i });return t(this._element).trigger(r), r;
      }, C._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n = this._indicatorsElement.children[this._getItemIndex(e)];n && t(n).addClass(g);
        }
      }, C._slide = function (e, n) {
        var i,
            s,
            r,
            o = this,
            a = t(this._element).find(y.ACTIVE_ITEM)[0],
            l = this._getItemIndex(a),
            c = n || a && this._getItemByDirection(e, a),
            _ = this._getItemIndex(c),
            C = Boolean(this._interval);if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
          this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);var I = t.Event(d.SLID, { relatedTarget: c, direction: r, from: l, to: _ });P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
            t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
              return t(o._element).trigger(I);
            }, 0);
          }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle();
        }
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = r({}, a, t(this).data());"object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) && (s = r({}, s, e));var l = "string" == typeof e ? e : s.slide;if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof l) {
            if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');i[l]();
          } else s.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (e) {
        var i = P.getSelectorFromElement(this);if (i) {
          var s = t(i)[0];if (s && t(s).hasClass(_)) {
            var a = r({}, t(s).data(), t(this).data()),
                l = this.getAttribute("data-slide-to");l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault();
          }
        }
      }, s(o, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }]), o;
    }();return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
      t(y.DATA_RIDE).each(function () {
        var e = t(this);C._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
      return t.fn[e] = o, C._jQueryInterface;
    }, C;
  }(e),
      H = function (t) {
    var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        o = t.fn[e],
        a = { toggle: !0, parent: "" },
        l = { toggle: "boolean", parent: "(string|element)" },
        h = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api" },
        c = "show",
        u = "collapse",
        f = "collapsing",
        d = "collapsed",
        _ = "width",
        g = "height",
        p = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        m = function () {
      function i(e, n) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
          var r = i[s],
              o = P.getSelectorFromElement(r);null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var o = i.prototype;return o.toggle = function () {
        t(this._element).hasClass(c) ? this.hide() : this.show();
      }, o.show = function () {
        var e,
            s,
            r = this;if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
          var o = t.Event(h.SHOW);if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
            e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));var a = this._getDimension();t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);var l = function l() {
              t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN);
            };if (P.supportsTransitionEnd()) {
              var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px";
            } else l();
          }
        }
      }, o.hide = function () {
        var e = this;if (!this._isTransitioning && t(this._element).hasClass(c)) {
          var n = t.Event(h.HIDE);if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0) for (var s = 0; s < this._triggerArray.length; s++) {
              var r = this._triggerArray[s],
                  o = P.getSelectorFromElement(r);if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1);
            }this.setTransitioning(!0);var a = function a() {
              e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN);
            };this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a();
          }
        }
      }, o.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, o.dispose = function () {
        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, o._getConfig = function (t) {
        return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t;
      }, o._getDimension = function () {
        return t(this._element).hasClass(_) ? _ : g;
      }, o._getParent = function () {
        var e = this,
            n = null;P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return t(n).find(s).each(function (t, n) {
          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, o._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(c);n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (e) {
        var n = P.getSelectorFromElement(e);return n ? t(n)[0] : null;
      }, i._jQueryInterface = function (e) {
        return this.each(function () {
          var s = t(this),
              o = s.data(n),
              l = r({}, a, s.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) && e);if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');o[e]();
          }
        });
      }, s(i, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }]), i;
    }();return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();var i = t(this),
          s = P.getSelectorFromElement(this);t(s).each(function () {
        var e = t(this),
            s = e.data(n) ? "toggle" : i.data();m._jQueryInterface.call(e, s);
      });
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = o, m._jQueryInterface;
    }, m;
  }(e),
      W = function (t) {
    var e = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = ".data-api",
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click" + o + a, KEYDOWN_DATA_API: "keydown" + o + a, KEYUP_DATA_API: "keyup" + o + a },
        u = "disabled",
        f = "show",
        d = "dropup",
        _ = "dropright",
        g = "dropleft",
        p = "dropdown-menu-right",
        m = "dropdown-menu-left",
        v = "position-static",
        E = '[data-toggle="dropdown"]',
        T = ".dropdown form",
        y = ".dropdown-menu",
        C = ".navbar-nav",
        I = ".dropdown-menu .dropdown-item:not(.disabled)",
        A = "top-start",
        b = "top-end",
        D = "bottom-start",
        S = "bottom-end",
        w = "right-start",
        N = "left-start",
        O = { offset: 0, flip: !0, boundary: "scrollParent" },
        k = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
        L = function () {
      function a(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var l = a.prototype;return l.toggle = function () {
        if (!this._element.disabled && !t(this._element).hasClass(u)) {
          var e = a._getParentFromElement(this._element),
              i = t(this._menu).hasClass(f);if (a._clearMenus(), !i) {
            var s = { relatedTarget: this._element },
                r = t.Event(c.SHOW, s);if (t(e).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o = this._element;t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig());
              }"ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
            }
          }
        }
      }, l.dispose = function () {
        t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, l.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, l._addEventListeners = function () {
        var e = this;t(this._element).on(c.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, l._getConfig = function (n) {
        return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, l._getMenuElement = function () {
        if (!this._menu) {
          var e = a._getParentFromElement(this._element);this._menu = t(e).find(y)[0];
        }return this._menu;
      }, l._getPlacement = function () {
        var e = t(this._element).parent(),
            n = D;return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n;
      }, l._detectNavbar = function () {
        return t(this._element).closest(".navbar").length > 0;
      }, l._getPopperConfig = function () {
        var t = this,
            e = {};return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
        } : e.offset = this._config.offset, { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i);if (n || (n = new a(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) ? e : null), t(this).data(i, n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, a._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
          var r = a._getParentFromElement(n[s]),
              o = t(n[s]).data(i),
              l = { relatedTarget: n[s] };if (o) {
            var h = o._menu;if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
              var u = t.Event(c.HIDE, l);t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
            }
          }
        }
      }, a._getParentFromElement = function (e) {
        var n,
            i = P.getSelectorFromElement(e);return i && (n = t(i)[0]), n || e.parentNode;
      }, a._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
          var n = a._getParentFromElement(this),
              i = t(n).hasClass(f);if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
            var s = t(n).find(I).get();if (0 !== s.length) {
              var r = s.indexOf(e.target);38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
            }
          } else {
            if (27 === e.which) {
              var o = t(n).find(E)[0];t(o).trigger("focus");
            }t(this).trigger("click");
          }
        }
      }, s(a, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }, { key: "Default", get: function get() {
          return O;
        } }, { key: "DefaultType", get: function get() {
          return k;
        } }]), a;
    }();return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
      e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle");
    }).on(c.CLICK_DATA_API, T, function (t) {
      t.stopPropagation();
    }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
      return t.fn[e] = l, L._jQueryInterface;
    }, L;
  }(e),
      M = function (t) {
    var e = "modal",
        n = "bs.modal",
        i = "." + n,
        o = t.fn.modal,
        a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        h = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click" + i + ".data-api" },
        c = "modal-scrollbar-measure",
        u = "modal-backdrop",
        f = "modal-open",
        d = "fade",
        _ = "show",
        g = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
        p = function () {
      function o(e, n) {
        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }var p = o.prototype;return p.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, p.show = function (e) {
        var n = this;if (!this._isTransitioning && !this._isShown) {
          P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);var i = t.Event(h.SHOW, { relatedTarget: e });t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, p.hide = function (e) {
        var n = this;if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = t.Event(h.HIDE);if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(300) : this._hideModal();
          }
        }
      }, p.dispose = function () {
        t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, p.handleUpdate = function () {
        this._adjustDialog();
      }, p._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, p._showElement = function (e) {
        var n = this,
            i = P.supportsTransitionEnd() && t(this._element).hasClass(d);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();var s = t.Event(h.SHOWN, { relatedTarget: e }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s);
        };i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r();
      }, p._enforceFocus = function () {
        var e = this;t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
        });
      }, p._setEscapeEvent = function () {
        var e = this;this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
      }, p._setResizeEvent = function () {
        var e = this;this._isShown ? t(window).on(h.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(h.RESIZE);
      }, p._hideModal = function () {
        var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN);
        });
      }, p._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, p._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(d) ? d : "";if (this._isShown && this._config.backdrop) {
          var s = P.supportsTransitionEnd() && i;if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;if (!s) return void e();t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(_);var r = function r() {
            n._removeBackdrop(), e && e();
          };P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r();
        } else e && e();
      }, p._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, p._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, p._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, p._setScrollbar = function () {
        var e = this;if (this._isBodyOverflowing) {
          t(g.FIXED_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.paddingRight,
                r = t(i).css("padding-right");t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
          }), t(g.STICKY_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
          }), t(g.NAVBAR_TOGGLER).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
          });var n = document.body.style.paddingRight,
              i = t("body").css("padding-right");t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, p._resetScrollbar = function () {
        t(g.FIXED_CONTENT).each(function (e, n) {
          var i = t(n).data("padding-right");"undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
        }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
          var i = t(n).data("margin-right");"undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
        });var e = t("body").data("padding-right");"undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
      }, p._getScrollbarWidth = function () {
        var t = document.createElement("div");t.className = c, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
      }, o._jQueryInterface = function (e, i) {
        return this.each(function () {
          var s = t(this).data(n),
              a = r({}, o.Default, t(this).data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) && e);if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
            if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');s[e](i);
          } else a.show && s.show(i);
        });
      }, s(o, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }]), o;
    }();return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
      var i,
          s = this,
          o = P.getSelectorFromElement(this);o && (i = t(o)[0]);var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var l = t(i).one(h.SHOW, function (e) {
        e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
          t(s).is(":visible") && s.focus();
        });
      });p._jQueryInterface.call(t(i), a, this);
    }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
      return t.fn.modal = o, p._jQueryInterface;
    }, p;
  }(e),
      U = function (t) {
    var e = "tooltip",
        i = "bs.tooltip",
        o = "." + i,
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
        c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        u = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
        f = "show",
        d = "out",
        _ = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, INSERTED: "inserted" + o, CLICK: "click" + o, FOCUSIN: "focusin" + o, FOCUSOUT: "focusout" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o },
        g = "fade",
        p = "show",
        m = ".tooltip-inner",
        v = ".arrow",
        E = "hover",
        T = "focus",
        y = "click",
        C = "manual",
        I = function () {
      function a(t, e) {
        if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }var I = a.prototype;return I.enable = function () {
        this._isEnabled = !0;
      }, I.disable = function () {
        this._isEnabled = !1;
      }, I.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, I.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);this._enter(null, this);
        }
      }, I.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, I.show = function () {
        var e = this;if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");var i = t.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(i);var s = t.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !s) return;var r = this.getTipElement(),
              o = P.getUID(this.constructor.NAME);r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              h = this._getAttachment(l);this.addAttachmentClass(h);var c = !1 === this.config.container ? document.body : t(this.config.container);t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, { placement: h, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: v }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            }, onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            } }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);var u = function u() {
            e.config.animation && e._fixTransition();var n = e._hoverState;e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e);
          };P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
        }
      }, I.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            s = t.Event(this.constructor.Event.HIDE),
            r = function r() {
          n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "");
      }, I.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, I.isWithContent = function () {
        return Boolean(this.getTitle());
      }, I.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-tooltip-" + e);
      }, I.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, I.setContent = function () {
        var e = t(this.getTipElement());this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p);
      }, I.setElementContent = function (e, n) {
        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof2(n)) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
      }, I.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, I._getAttachment = function (t) {
        return c[t.toUpperCase()];
      }, I._setListeners = function () {
        var e = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== C) {
            var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(s, e.config.selector, function (t) {
              return e._leave(t);
            });
          }t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, I._fixTitle = function () {
        var t = _typeof2(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, I._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.show();
        }, n.config.delay.show) : n.show());
      }, I._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === d && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, I._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }return !1;
      }, I._getConfig = function (n) {
        return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, I._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }return t;
      }, I._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(l);null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, I._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, I._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i),
              s = "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) && e;if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, s(a, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }, { key: "Default", get: function get() {
          return u;
        } }, { key: "NAME", get: function get() {
          return e;
        } }, { key: "DATA_KEY", get: function get() {
          return i;
        } }, { key: "Event", get: function get() {
          return _;
        } }, { key: "EVENT_KEY", get: function get() {
          return o;
        } }, { key: "DefaultType", get: function get() {
          return h;
        } }]), a;
    }();return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
      return t.fn[e] = a, I._jQueryInterface;
    }, I;
  }(e),
      x = function (t) {
    var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, U.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        h = r({}, U.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        d = ".popover-body",
        _ = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
        g = function (r) {
      var o, g;function p() {
        return r.apply(this, arguments) || this;
      }g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;var m = p.prototype;return m.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, m.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-popover-" + e);
      }, m.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, m.setContent = function () {
        var e = t(this.getTipElement());this.setElementContent(e.find(f), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u);
      }, m._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, m._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(a);null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, p._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) ? e : null;if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
          }
        });
      }, s(p, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }, { key: "Default", get: function get() {
          return l;
        } }, { key: "NAME", get: function get() {
          return e;
        } }, { key: "DATA_KEY", get: function get() {
          return n;
        } }, { key: "Event", get: function get() {
          return _;
        } }, { key: "EVENT_KEY", get: function get() {
          return i;
        } }, { key: "DefaultType", get: function get() {
          return h;
        } }]), p;
    }(U);return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      K = function (t) {
    var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        o = t.fn[e],
        a = { offset: 10, method: "auto", target: "" },
        l = { offset: "number", method: "string", target: "(string|element)" },
        h = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api" },
        c = "dropdown-item",
        u = "active",
        f = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        d = "offset",
        _ = "position",
        g = function () {
      function o(e, n) {
        var i = this;this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
          return i._process(t);
        }), this.refresh(), this._process();
      }var g = o.prototype;return g.refresh = function () {
        var e = this,
            n = this._scrollElement === this._scrollElement.window ? d : _,
            i = "auto" === this._config.method ? n : this._config.method,
            s = i === _ ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
          var n,
              r = P.getSelectorFromElement(e);if (r && (n = t(r)[0]), n) {
            var o = n.getBoundingClientRect();if (o.width || o.height) return [t(n)[i]().top + s, r];
          }return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, g.dispose = function () {
        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, g._getConfig = function (n) {
        if ("string" != typeof (n = r({}, a, n)).target) {
          var i = t(n.target).attr("id");i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }return P.typeCheckConfig(e, n, l), n;
      }, g._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, g._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, g._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, g._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var s = this._offsets.length; s--;) {
            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
          }
        }
      }, g._activate = function (e) {
        this._activeTarget = e, this._clear();var n = this._selector.split(",");n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });var i = t(n.join(","));i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, { relatedTarget: e });
      }, g._clear = function () {
        t(this._selector).filter(f.ACTIVE).removeClass(u);
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n);if (i || (i = new o(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) && e), t(this).data(n, i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
          }
        });
      }, s(o, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }]), o;
    }();return t(window).on(h.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);g._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      V = function (t) {
    var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, CLICK_DATA_API: "click.bs.tab.data-api" },
        o = "dropdown-menu",
        a = "active",
        l = "disabled",
        h = "fade",
        c = "show",
        u = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        _ = "> li > .active",
        g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        v = function () {
      function n(t) {
        this._element = t;
      }var i = n.prototype;return i.show = function () {
        var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
          var n,
              i,
              s = t(this._element).closest(f)[0],
              o = P.getSelectorFromElement(this._element);if (s) {
            var h = "UL" === s.nodeName ? _ : d;i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
          }var c = t.Event(r.HIDE, { relatedTarget: this._element }),
              u = t.Event(r.SHOW, { relatedTarget: i });if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
            o && (n = t(o)[0]), this._activate(this._element, s);var g = function g() {
              var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                  s = t.Event(r.SHOWN, { relatedTarget: i });t(i).trigger(n), t(e._element).trigger(s);
            };n ? this._activate(n, n.parentNode, g) : g();
          }
        }
      }, i.dispose = function () {
        t.removeData(this._element, e), this._element = null;
      }, i._activate = function (e, n, i) {
        var s = this,
            r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
            o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
            a = function a() {
          return s._transitionComplete(e, r, i);
        };r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a();
      }, i._transitionComplete = function (e, n, i) {
        if (n) {
          t(n).removeClass(c + " " + a);var s = t(n.parentNode).find(m)[0];s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
          var r = t(e).closest(u)[0];r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0);
        }i && i();
      }, n._jQueryInterface = function (i) {
        return this.each(function () {
          var s = t(this),
              r = s.data(e);if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
            if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');r[i]();
          }
        });
      }, s(n, null, [{ key: "VERSION", get: function get() {
          return "4.0.0";
        } }]), n;
    }();return t(document).on(r.CLICK_DATA_API, g, function (e) {
      e.preventDefault(), v._jQueryInterface.call(t(this), "show");
    }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
      return t.fn.tab = i, v._jQueryInterface;
    }, v;
  }(e);!function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
$(function () {
  'use strict';

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  });
});

/*! jQuery & Zepto Lazy v1.7.4 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2016 Daniel 'Eisbehr' Kern */
!function (t, e) {
  "use strict";
  function r(r, a, i, l, u) {
    function f() {
      L = t.devicePixelRatio > 1, c(i), a.delay >= 0 && setTimeout(function () {
        s(!0);
      }, a.delay), (a.delay < 0 || a.combined) && (l.e = v(a.throttle, function (t) {
        "resize" === t.type && (w = B = -1), s(t.all);
      }), l.a = function (t) {
        c(t), i.push.apply(i, t);
      }, l.g = function () {
        return i = n(i).filter(function () {
          return !n(this).data(a.loadedName);
        });
      }, l.f = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = i.filter(t[e]);r.length && s(!1, r);
        }
      }, s(), n(a.appendScroll).on("scroll." + u + " resize." + u, l.e));
    }function c(t) {
      var i = a.defaultImage,
          o = a.placeholder,
          l = a.imageBase,
          u = a.srcsetAttribute,
          f = a.loaderAttribute,
          c = a._f || {};t = n(t).filter(function () {
        var t = n(this),
            r = m(this);return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(u) || t.attr(f) || c[r] !== e);
      }).data("plugin_" + a.name, r);for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
            g = m(t[s]),
            h = A.attr(a.imageBaseAttribute) || l;g == N && h && A.attr(u) && A.attr(u, b(A.attr(u), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g == N && i && !A.attr(E) ? A.attr(E, i) : g == N || !o || A.css(O) && "none" != A.css(O) || A.css(O, "url('" + o + "')");
      }
    }function s(t, e) {
      if (!i.length) return void (a.autoDestroy && r.destroy());for (var o = e || i, l = !1, u = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++) {
        if (t || e || A(o[s])) {
          var g = n(o[s]),
              h = m(o[s]),
              b = g.attr(a.attribute),
              v = g.attr(a.imageBaseAttribute) || u,
              p = g.attr(a.loaderAttribute);g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h == N && (v + b != g.attr(E) || g.attr(f) != g.attr(F)) || h != N && v + b != g.css(O)) || p) || (l = !0, g.data(c, !0), d(g, h, v, p));
        }
      }l && (i = n(i).filter(function () {
        return !n(this).data(c);
      }));
    }function d(t, e, r, i) {
      ++z;var _o2 = function o() {
        y("onError", t), p(), _o2 = n.noop;
      };y("beforeLoad", t);var l = a.attribute,
          u = a.srcsetAttribute,
          f = a.sizesAttribute,
          c = a.retinaAttribute,
          s = a.removeAttribute,
          d = a.loadedName,
          A = t.attr(c);if (i) {
        var _g = function g() {
          s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), _g = n.noop;
        };t.off(I).one(I, _o2).one(D, _g), y(i, t, function (e) {
          e ? (t.off(D), _g()) : (t.off(I), _o2());
        }) || t.trigger(I);
      } else {
        var h = n(new Image());h.one(I, _o2).one(D, function () {
          t.hide(), e == N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(l + " " + u + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p();
        });var m = (L && A ? A : t.attr(l)) || "";h.attr(C, t.attr(f)).attr(F, t.attr(u)).attr(E, m ? r + m : null), h.complete && h.trigger(D);
      }
    }function A(t) {
      var e = t.getBoundingClientRect(),
          r = a.scrollDirection,
          n = a.threshold,
          i = h() + n > e.top && -n < e.bottom,
          o = g() + n > e.left && -n < e.right;return "vertical" == r ? i : "horizontal" == r ? o : i && o;
    }function g() {
      return w >= 0 ? w : w = n(t).width();
    }function h() {
      return B >= 0 ? B : B = n(t).height();
    }function m(t) {
      return t.tagName.toLowerCase();
    }function b(t, e) {
      if (e) {
        var r = t.split(",");t = "";for (var a = 0, n = r.length; a < n; a++) {
          t += e + r[a].trim() + (a !== n - 1 ? "," : "");
        }
      }return t;
    }function v(t, e) {
      var n,
          i = 0;return function (o, l) {
        function u() {
          i = +new Date(), e.call(r, o);
        }var f = +new Date() - i;n && clearTimeout(n), f > t || !a.enableThrottle || l ? u() : n = setTimeout(u, t - f);
      };
    }function p() {
      --z, i.length || z || y("onFinishedAll");
    }function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0);
    }var z = 0,
        w = -1,
        B = -1,
        L = !1,
        T = "afterLoad",
        D = "load",
        I = "error",
        N = "img",
        E = "src",
        F = "srcset",
        C = "sizes",
        O = "background-image";"event" == a.bind || o ? f() : n(t).on(D + "." + u, f);
  }function a(a, o) {
    var l = this,
        u = n.extend({}, l.config, o),
        f = {},
        c = u.name + "-" + ++i;return l.config = function (t, r) {
      return r === e ? u[t] : (u[t] = r, l);
    }, l.addItems = function (t) {
      return f.a && f.a("string" === n.type(t) ? n(t) : t), l;
    }, l.getItems = function () {
      return f.g ? f.g() : {};
    }, l.update = function (t) {
      return f.e && f.e({}, !t), l;
    }, l.force = function (t) {
      return f.f && f.f("string" === n.type(t) ? n(t) : t), l;
    }, l.loadAll = function () {
      return f.e && f.e({ all: !0 }, !0), l;
    }, l.destroy = function () {
      return n(u.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e;
    }, r(l, u, a, f, c), u.chainable ? a : l;
  }var n = t.jQuery || t.Zepto,
      i = 0,
      o = !1;n.fn.Lazy = n.fn.lazy = function (t) {
    return new a(this, t);
  }, n.Lazy = n.lazy = function (t, r, i) {
    if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
      t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];for (var o = a.prototype.config, l = o._f || (o._f = {}), u = 0, f = t.length; u < f; u++) {
        (o[t[u]] === e || n.isFunction(o[t[u]])) && (o[t[u]] = i);
      }for (var c = 0, s = r.length; c < s; c++) {
        l[r[c]] = t[0];
      }
    }
  }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function () {
    o = !0;
  });
}(window);
/*!

Holder - client side image placeholders
Version 2.9.4+cabil
© 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function (e) {
  if (e.document) {
    var t = e.document;t.querySelectorAll || (t.querySelectorAll = function (n) {
      var r,
          i = t.createElement("style"),
          o = [];for (t.documentElement.firstChild.appendChild(i), t._qsa = [], i.styleSheet.cssText = n + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", e.scrollBy(0, 0), i.parentNode.removeChild(i); t._qsa.length;) {
        r = t._qsa.shift(), r.style.removeAttribute("x-qsa"), o.push(r);
      }return t._qsa = null, o;
    }), t.querySelector || (t.querySelector = function (e) {
      var n = t.querySelectorAll(e);return n.length ? n[0] : null;
    }), t.getElementsByClassName || (t.getElementsByClassName = function (e) {
      return e = String(e).replace(/^|\s+/g, "."), t.querySelectorAll(e);
    }), Object.keys || (Object.keys = function (e) {
      if (e !== Object(e)) throw TypeError("Object.keys called on non-object");var t,
          n = [];for (t in e) {
        Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
      }return n;
    }), Array.prototype.forEach || (Array.prototype.forEach = function (e) {
      if (void 0 === this || null === this) throw TypeError();var t = Object(this),
          n = t.length >>> 0;if ("function" != typeof e) throw TypeError();var r,
          i = arguments[1];for (r = 0; r < n; r++) {
        r in t && e.call(i, t[r], r, t);
      }
    }), function (e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.atob = e.atob || function (e) {
        e = String(e);var n,
            r = 0,
            i = [],
            o = 0,
            a = 0;if (e = e.replace(/\s/g, ""), e.length % 4 === 0 && (e = e.replace(/=+$/, "")), e.length % 4 === 1) throw Error("InvalidCharacterError");if (/[^+\/0-9A-Za-z]/.test(e)) throw Error("InvalidCharacterError");for (; r < e.length;) {
          n = t.indexOf(e.charAt(r)), o = o << 6 | n, a += 6, 24 === a && (i.push(String.fromCharCode(o >> 16 & 255)), i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o)), a = 0, o = 0), r += 1;
        }return 12 === a ? (o >>= 4, i.push(String.fromCharCode(255 & o))) : 18 === a && (o >>= 2, i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o))), i.join("");
      }, e.btoa = e.btoa || function (e) {
        e = String(e);var n,
            r,
            i,
            o,
            a,
            s,
            l,
            h = 0,
            u = [];if (/[^\x00-\xFF]/.test(e)) throw Error("InvalidCharacterError");for (; h < e.length;) {
          n = e.charCodeAt(h++), r = e.charCodeAt(h++), i = e.charCodeAt(h++), o = n >> 2, a = (3 & n) << 4 | r >> 4, s = (15 & r) << 2 | i >> 6, l = 63 & i, h === e.length + 2 ? (s = 64, l = 64) : h === e.length + 1 && (l = 64), u.push(t.charAt(o), t.charAt(a), t.charAt(s), t.charAt(l));
        }return u.join("");
      };
    }(e), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function (e) {
      var t = this.__proto__ || this.constructor.prototype;return e in this && (!(e in t) || t[e] !== this[e]);
    }), function () {
      if ("performance" in e == !1 && (e.performance = {}), Date.now = Date.now || function () {
        return new Date().getTime();
      }, "now" in e.performance == !1) {
        var t = Date.now();performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart), e.performance.now = function () {
          return Date.now() - t;
        };
      }
    }(), e.requestAnimationFrame || (e.webkitRequestAnimationFrame && e.webkitCancelAnimationFrame ? !function (e) {
      e.requestAnimationFrame = function (t) {
        return webkitRequestAnimationFrame(function () {
          t(e.performance.now());
        });
      }, e.cancelAnimationFrame = e.webkitCancelAnimationFrame;
    }(e) : e.mozRequestAnimationFrame && e.mozCancelAnimationFrame ? !function (e) {
      e.requestAnimationFrame = function (t) {
        return mozRequestAnimationFrame(function () {
          t(e.performance.now());
        });
      }, e.cancelAnimationFrame = e.mozCancelAnimationFrame;
    }(e) : !function (e) {
      e.requestAnimationFrame = function (t) {
        return e.setTimeout(t, 1e3 / 60);
      }, e.cancelAnimationFrame = e.clearTimeout;
    }(e));
  }
}(this), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports.Holder = t() : e.Holder = t();
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    (function (t) {
      function r(e, t, n, r) {
        var a = i(n.substr(n.lastIndexOf(e.domain)), e);a && o({ mode: null, el: r, flags: a, engineSettings: t });
      }function i(e, t) {
        var n = { theme: k(O.settings.themes.gray, null), stylesheets: t.stylesheets, instanceOptions: t },
            r = e.indexOf("?"),
            i = [e];r !== -1 && (i = [e.slice(0, r), e.slice(r + 1)]);var o = i[0].split("/");n.holderURL = e;var a = o[1],
            s = a.match(/([\d]+p?)x([\d]+p?)/);if (!s) return !1;if (n.fluid = a.indexOf("p") !== -1, n.dimensions = { width: s[1].replace("p", "%"), height: s[2].replace("p", "%") }, 2 === i.length) {
          var l = v.parse(i[1]);if (w.truthy(l.ratio)) {
            n.fluid = !0;var h = parseFloat(n.dimensions.width.replace("%", "")),
                u = parseFloat(n.dimensions.height.replace("%", ""));u = Math.floor(100 * (u / h)), h = 100, n.dimensions.width = h + "%", n.dimensions.height = u + "%";
          }if (n.auto = w.truthy(l.auto), l.bg && (n.theme.bg = w.parseColor(l.bg)), l.fg && (n.theme.fg = w.parseColor(l.fg)), l.bg && !l.fg && (n.autoFg = !0), l.theme && n.instanceOptions.themes.hasOwnProperty(l.theme) && (n.theme = k(n.instanceOptions.themes[l.theme], null)), l.text && (n.text = l.text), l.textmode && (n.textmode = l.textmode), l.size && (n.size = l.size), l.font && (n.font = l.font), l.align && (n.align = l.align), l.lineWrap && (n.lineWrap = l.lineWrap), n.nowrap = w.truthy(l.nowrap), n.outline = w.truthy(l.outline), w.truthy(l.random)) {
            O.vars.cache.themeKeys = O.vars.cache.themeKeys || Object.keys(n.instanceOptions.themes);var c = O.vars.cache.themeKeys[0 | Math.random() * O.vars.cache.themeKeys.length];n.theme = k(n.instanceOptions.themes[c], null);
          }
        }return n;
      }function o(e) {
        var t = e.mode,
            n = e.el,
            r = e.flags,
            i = e.engineSettings,
            o = r.dimensions,
            s = r.theme,
            l = o.width + "x" + o.height;t = null == t ? r.fluid ? "fluid" : "image" : t;var c = /holder_([a-z]+)/g,
            d = !1;if (null != r.text && (s.text = r.text, "object" === n.nodeName.toLowerCase())) {
          for (var f = s.text.split("\\n"), p = 0; p < f.length; p++) {
            f[p] = w.encodeHtmlEntity(f[p]);
          }s.text = f.join("\\n");
        }if (s.text) {
          var g = s.text.match(c);null !== g && g.forEach(function (e) {
            "holder_dimensions" === e && (s.text = s.text.replace(e, l));
          });
        }var m = r.holderURL,
            v = k(i, null);if (r.font && (s.font = r.font, !v.noFontFallback && "img" === n.nodeName.toLowerCase() && O.setup.supportsCanvas && "svg" === v.renderer && (v = k(v, { renderer: "canvas" }))), r.font && "canvas" == v.renderer && (v.reRender = !0), "background" == t) null == n.getAttribute("data-background-src") && x.setAttr(n, { "data-background-src": m });else {
          var y = {};y[O.vars.dataAttr] = m, x.setAttr(n, y);
        }r.theme = s, n.holderData = { flags: r, engineSettings: v }, "image" != t && "fluid" != t || x.setAttr(n, { alt: s.text ? d ? s.text : s.text + " [" + l + "]" : l });var b = { mode: t, el: n, holderSettings: { dimensions: o, theme: s, flags: r }, engineSettings: v };"image" == t ? (r.auto || (n.style.width = o.width + "px", n.style.height = o.height + "px"), "html" == v.renderer ? n.style.backgroundColor = s.bg : (a(b), "exact" == r.textmode && (n.holderData.resizeUpdate = !0, O.vars.resizableImages.push(n), h(n)))) : "background" == t && "html" != v.renderer ? a(b) : "fluid" == t && (n.holderData.resizeUpdate = !0, "%" == o.height.slice(-1) ? n.style.height = o.height : null != r.auto && r.auto || (n.style.height = o.height + "px"), "%" == o.width.slice(-1) ? n.style.width = o.width : null != r.auto && r.auto || (n.style.width = o.width + "px"), "inline" != n.style.display && "" !== n.style.display && "none" != n.style.display || (n.style.display = "block"), u(n), "html" == v.renderer ? n.style.backgroundColor = s.bg : (O.vars.resizableImages.push(n), h(n)));
      }function a(e) {
        function n() {
          var t = null;switch (l.renderer) {case "canvas":
              t = E(u, e);break;case "svg":
              t = C(u, e);break;default:
              throw "Holder: invalid renderer: " + l.renderer;}return t;
        }var r = null,
            i = e.mode,
            o = e.el,
            a = e.holderSettings,
            l = e.engineSettings;switch (l.renderer) {case "svg":
            if (!O.setup.supportsSVG) return;break;case "canvas":
            if (!O.setup.supportsCanvas) return;break;default:
            return;}var h = { width: a.dimensions.width, height: a.dimensions.height, theme: a.theme, flags: a.flags },
            u = s(h);if (r = n(), null == r) throw "Holder: couldn't render placeholder";"background" == i ? (o.style.backgroundImage = "url(" + r + ")", l.noBackgroundSize || (o.style.backgroundSize = h.width + "px " + h.height + "px")) : ("img" === o.nodeName.toLowerCase() ? x.setAttr(o, { src: r }) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, { data: r, type: "image/svg+xml" }), l.reRender && t.setTimeout(function () {
          var e = n();if (null == e) throw "Holder: couldn't render placeholder";"img" === o.nodeName.toLowerCase() ? x.setAttr(o, { src: e }) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, { data: e, type: "image/svg+xml" });
        }, 150)), x.setAttr(o, { "data-holder-rendered": !0 });
      }function s(e) {
        function t(e, t, n, r) {
          t.width = n, t.height = r, e.width = Math.max(e.width, t.width), e.height += t.height;
        }var n = O.defaults.size;switch (parseFloat(e.theme.size) ? n = e.theme.size : parseFloat(e.flags.size) && (n = e.flags.size), e.font = { family: e.theme.font ? e.theme.font : "Arial, Helvetica, Open Sans, sans-serif", size: l(e.width, e.height, n, O.defaults.scale), units: e.theme.units ? e.theme.units : O.defaults.units, weight: e.theme.fontweight ? e.theme.fontweight : "bold" }, e.text = e.theme.text || Math.floor(e.width) + "x" + Math.floor(e.height), e.noWrap = e.theme.nowrap || e.flags.nowrap, e.align = e.theme.align || e.flags.align || "center", e.flags.textmode) {case "literal":
            e.text = e.flags.dimensions.width + "x" + e.flags.dimensions.height;break;case "exact":
            if (!e.flags.exactDimensions) break;e.text = Math.floor(e.flags.exactDimensions.width) + "x" + Math.floor(e.flags.exactDimensions.height);}var r = e.flags.lineWrap || O.setup.lineWrapRatio,
            i = e.width * r,
            o = i,
            a = new y({ width: e.width, height: e.height }),
            s = a.Shape,
            h = new s.Rect("holderBg", { fill: e.theme.bg });if (h.resize(e.width, e.height), a.root.add(h), e.flags.outline) {
          var u = new S(h.properties.fill);u = u.lighten(u.lighterThan("7f7f7f") ? -.1 : .1), h.properties.outline = { fill: u.toHex(!0), width: 2 };
        }var c = e.theme.fg;if (e.flags.autoFg) {
          var d = new S(h.properties.fill),
              f = new S("fff"),
              p = new S("000", { alpha: .285714 });c = d.blendAlpha(d.lighterThan("7f7f7f") ? p : f).toHex(!0);
        }var g = new s.Group("holderTextGroup", { text: e.text, align: e.align, font: e.font, fill: c });g.moveTo(null, null, 1), a.root.add(g);var m = g.textPositionData = z(a);if (!m) throw "Holder: staging fallback not supported yet.";g.properties.leading = m.boundingBox.height;var v = null,
            w = null;if (m.lineCount > 1) {
          var b,
              x = 0,
              A = 0,
              C = 0;w = new s.Group("line" + C), "left" !== e.align && "right" !== e.align || (o = e.width * (1 - 2 * (1 - r)));for (var E = 0; E < m.words.length; E++) {
            var k = m.words[E];v = new s.Text(k.text);var T = "\\n" == k.text;!e.noWrap && (x + k.width >= o || T === !0) && (t(g, w, x, g.properties.leading), g.add(w), x = 0, A += g.properties.leading, C += 1, w = new s.Group("line" + C), w.y = A), T !== !0 && (v.moveTo(x, 0), x += m.spaceWidth + k.width, w.add(v));
          }if (t(g, w, x, g.properties.leading), g.add(w), "left" === e.align) g.moveTo(e.width - i, null, null);else if ("right" === e.align) {
            for (b in g.children) {
              w = g.children[b], w.moveTo(e.width - w.width, null, null);
            }g.moveTo(0 - (e.width - i), null, null);
          } else {
            for (b in g.children) {
              w = g.children[b], w.moveTo((g.width - w.width) / 2, null, null);
            }g.moveTo((e.width - g.width) / 2, null, null);
          }g.moveTo(null, (e.height - g.height) / 2, null), (e.height - g.height) / 2 < 0 && g.moveTo(null, 0, null);
        } else v = new s.Text(e.text), w = new s.Group("line0"), w.add(v), g.add(w), "left" === e.align ? g.moveTo(e.width - i, null, null) : "right" === e.align ? g.moveTo(0 - (e.width - i), null, null) : g.moveTo((e.width - m.boundingBox.width) / 2, null, null), g.moveTo(null, (e.height - m.boundingBox.height) / 2, null);return a;
      }function l(e, t, n, r) {
        var i = parseInt(e, 10),
            o = parseInt(t, 10),
            a = Math.max(i, o),
            s = Math.min(i, o),
            l = .8 * Math.min(s, a * r);return Math.round(Math.max(n, l));
      }function h(e) {
        var t;t = null == e || null == e.nodeType ? O.vars.resizableImages : [e];for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];if (i.holderData) {
            var o = i.holderData.flags,
                s = T(i);if (s) {
              if (!i.holderData.resizeUpdate) continue;if (o.fluid && o.auto) {
                var l = i.holderData.fluidConfig;switch (l.mode) {case "width":
                    s.height = s.width / l.ratio;break;case "height":
                    s.width = s.height * l.ratio;}
              }var h = { mode: "image", holderSettings: { dimensions: s, theme: o.theme, flags: o }, el: i, engineSettings: i.holderData.engineSettings };"exact" == o.textmode && (o.exactDimensions = s, h.holderSettings.dimensions = o.dimensions), a(h);
            } else f(i);
          }
        }
      }function u(e) {
        if (e.holderData) {
          var t = T(e);if (t) {
            var n = e.holderData.flags,
                r = { fluidHeight: "%" == n.dimensions.height.slice(-1), fluidWidth: "%" == n.dimensions.width.slice(-1), mode: null, initialDimensions: t };r.fluidWidth && !r.fluidHeight ? (r.mode = "width", r.ratio = r.initialDimensions.width / parseFloat(n.dimensions.height)) : !r.fluidWidth && r.fluidHeight && (r.mode = "height", r.ratio = parseFloat(n.dimensions.width) / r.initialDimensions.height), e.holderData.fluidConfig = r;
          } else f(e);
        }
      }function c() {
        var e,
            n = [],
            r = Object.keys(O.vars.invisibleImages);r.forEach(function (t) {
          e = O.vars.invisibleImages[t], T(e) && "img" == e.nodeName.toLowerCase() && (n.push(e), delete O.vars.invisibleImages[t]);
        }), n.length && F.run({ images: n }), setTimeout(function () {
          t.requestAnimationFrame(c);
        }, 10);
      }function d() {
        O.vars.visibilityCheckStarted || (t.requestAnimationFrame(c), O.vars.visibilityCheckStarted = !0);
      }function f(e) {
        e.holderData.invisibleId || (O.vars.invisibleId += 1, O.vars.invisibleImages["i" + O.vars.invisibleId] = e, e.holderData.invisibleId = O.vars.invisibleId);
      }function p(e) {
        O.vars.debounceTimer || e.call(this), O.vars.debounceTimer && t.clearTimeout(O.vars.debounceTimer), O.vars.debounceTimer = t.setTimeout(function () {
          O.vars.debounceTimer = null, e.call(this);
        }, O.setup.debounce);
      }function g() {
        p(function () {
          h(null);
        });
      }var m = n(2),
          v = n(3),
          y = n(6),
          w = n(7),
          b = n(8),
          x = n(9),
          S = n(10),
          A = n(11),
          C = n(12),
          E = n(15),
          k = w.extend,
          T = w.dimensionCheck,
          j = A.svg_ns,
          F = { version: A.version, addTheme: function addTheme(e, t) {
          return null != e && null != t && (O.settings.themes[e] = t), delete O.vars.cache.themeKeys, this;
        }, addImage: function addImage(e, t) {
          var n = x.getNodeArray(t);return n.forEach(function (t) {
            var n = x.newEl("img"),
                r = {};r[O.setup.dataAttr] = e, x.setAttr(n, r), t.appendChild(n);
          }), this;
        }, setResizeUpdate: function setResizeUpdate(e, t) {
          e.holderData && (e.holderData.resizeUpdate = !!t, e.holderData.resizeUpdate && h(e));
        }, run: function run(e) {
          e = e || {};var n = {},
              a = k(O.settings, e);O.vars.preempted = !0, O.vars.dataAttr = a.dataAttr || O.setup.dataAttr, n.renderer = a.renderer ? a.renderer : O.setup.renderer, O.setup.renderers.join(",").indexOf(n.renderer) === -1 && (n.renderer = O.setup.supportsSVG ? "svg" : O.setup.supportsCanvas ? "canvas" : "html");var s = x.getNodeArray(a.images),
              l = x.getNodeArray(a.bgnodes),
              h = x.getNodeArray(a.stylenodes),
              u = x.getNodeArray(a.objects);return n.stylesheets = [], n.svgXMLStylesheet = !0, n.noFontFallback = !!a.noFontFallback, n.noBackgroundSize = !!a.noBackgroundSize, h.forEach(function (e) {
            if (e.attributes.rel && e.attributes.href && "stylesheet" == e.attributes.rel.value) {
              var t = e.attributes.href.value,
                  r = x.newEl("a");r.href = t;var i = r.protocol + "//" + r.host + r.pathname + r.search;n.stylesheets.push(i);
            }
          }), l.forEach(function (e) {
            if (t.getComputedStyle) {
              var r = t.getComputedStyle(e, null).getPropertyValue("background-image"),
                  s = e.getAttribute("data-background-src"),
                  l = s || r,
                  h = null,
                  u = a.domain + "/",
                  c = l.indexOf(u);if (0 === c) h = l;else if (1 === c && "?" === l[0]) h = l.slice(1);else {
                var d = l.substr(c).match(/([^\"]*)"?\)/);if (null !== d) h = d[1];else if (0 === l.indexOf("url(")) throw "Holder: unable to parse background URL: " + l;
              }if (h) {
                var f = i(h, a);f && o({ mode: "background", el: e, flags: f, engineSettings: n });
              }
            }
          }), u.forEach(function (e) {
            var t = {};try {
              t.data = e.getAttribute("data"), t.dataSrc = e.getAttribute(O.vars.dataAttr);
            } catch (i) {}var o = null != t.data && 0 === t.data.indexOf(a.domain),
                s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain);o ? r(a, n, t.data, e) : s && r(a, n, t.dataSrc, e);
          }), s.forEach(function (e) {
            var t = {};try {
              t.src = e.getAttribute("src"), t.dataSrc = e.getAttribute(O.vars.dataAttr), t.rendered = e.getAttribute("data-holder-rendered");
            } catch (i) {}var o = null != t.src,
                s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain),
                l = null != t.rendered && "true" == t.rendered;o ? 0 === t.src.indexOf(a.domain) ? r(a, n, t.src, e) : s && (l ? r(a, n, t.dataSrc, e) : !function (e, t, n, i, o) {
              w.imageExists(e, function (e) {
                e || r(t, n, i, o);
              });
            }(t.src, a, n, t.dataSrc, e)) : s && r(a, n, t.dataSrc, e);
          }), this;
        } },
          O = { settings: { domain: "holder.js", images: "img", objects: "object", bgnodes: "body .holderjs", stylenodes: "head link.holderjs", themes: { gray: { bg: "#EEEEEE", fg: "#AAAAAA" }, social: { bg: "#3a5a97", fg: "#FFFFFF" }, industrial: { bg: "#434A52", fg: "#C2F200" }, sky: { bg: "#0D8FDB", fg: "#FFFFFF" }, vine: { bg: "#39DBAC", fg: "#1E292C" }, lava: { bg: "#F8591A", fg: "#1C2846" } } }, defaults: { size: 10, units: "pt", scale: 1 / 16 } },
          z = function () {
        var e = null,
            t = null,
            n = null;return function (r) {
          var i = r.root;if (O.setup.supportsSVG) {
            var o = !1,
                a = function a(e) {
              return document.createTextNode(e);
            };null != e && e.parentNode === document.body || (o = !0), e = b.initSVG(e, i.properties.width, i.properties.height), e.style.display = "block", o && (t = x.newEl("text", j), n = a(null), x.setAttr(t, { x: 0 }), t.appendChild(n), e.appendChild(t), document.body.appendChild(e), e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-100%", e.style.left = "-100%");var s = i.children.holderTextGroup,
                l = s.properties;x.setAttr(t, { y: l.font.size, style: w.cssProps({ "font-weight": l.font.weight, "font-size": l.font.size + l.font.units, "font-family": l.font.family }) }), n.nodeValue = l.text;var h = t.getBBox(),
                u = Math.ceil(h.width / i.properties.width),
                c = l.text.split(" "),
                d = l.text.match(/\\n/g);u += null == d ? 0 : d.length, n.nodeValue = l.text.replace(/[ ]+/g, "");var f = t.getComputedTextLength(),
                p = h.width - f,
                g = Math.round(p / Math.max(1, c.length - 1)),
                m = [];if (u > 1) {
              n.nodeValue = "";for (var v = 0; v < c.length; v++) {
                if (0 !== c[v].length) {
                  n.nodeValue = w.decodeHtmlEntity(c[v]);var y = t.getBBox();m.push({ text: c[v], width: y.width });
                }
              }
            }return e.style.display = "none", { spaceWidth: g, lineCount: u, boundingBox: h, words: m };
          }return !1;
        };
      }();for (var D in O.flags) {
        O.flags.hasOwnProperty(D) && (O.flags[D].match = function (e) {
          return e.match(this.regex);
        });
      }O.setup = { renderer: "html", debounce: 100, ratio: 1, supportsCanvas: !1, supportsSVG: !1, lineWrapRatio: .9, dataAttr: "data-src", renderers: ["html", "canvas", "svg"] }, O.vars = { preempted: !1, resizableImages: [], invisibleImages: {}, invisibleId: 0, visibilityCheckStarted: !1, debounceTimer: null, cache: {} }, function () {
        var e = x.newEl("canvas");e.getContext && e.toDataURL("image/png").indexOf("data:image/png") != -1 && (O.setup.renderer = "canvas", O.setup.supportsCanvas = !0), document.createElementNS && document.createElementNS(j, "svg").createSVGRect && (O.setup.renderer = "svg", O.setup.supportsSVG = !0);
      }(), d(), m && m(function () {
        O.vars.preempted || F.run(), t.addEventListener ? (t.addEventListener("resize", g, !1), t.addEventListener("orientationchange", g, !1)) : t.attachEvent("onresize", g), "object" == _typeof2(t.Turbolinks) && t.document.addEventListener("page:change", function () {
          F.run();
        });
      }), e.exports = F;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    function n(e) {
      function t(e) {
        if (!x) {
          if (!a.body) return i(t);for (x = !0; e = S.shift();) {
            i(e);
          }
        }
      }function n(e) {
        (w || e.type === l || a[d] === c) && (r(), t());
      }function r() {
        w ? (a[y](m, n, h), e[y](l, n, h)) : (a[p](v, n), e[p](u, n));
      }function i(e, t) {
        setTimeout(e, +t >= 0 ? t : 1);
      }function o(e) {
        x ? i(e) : S.push(e);
      }null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function C() {
        document.removeEventListener("DOMContentLoaded", C, !1), document.readyState = "complete";
      }, !1), document.readyState = "loading");var a = e.document,
          s = a.documentElement,
          l = "load",
          h = !1,
          u = "on" + l,
          c = "complete",
          d = "readyState",
          f = "attachEvent",
          p = "detachEvent",
          g = "addEventListener",
          m = "DOMContentLoaded",
          v = "onreadystatechange",
          y = "removeEventListener",
          w = g in a,
          b = h,
          x = h,
          S = [];if (a[d] === c) i(t);else if (w) a[g](m, n, h), e[g](l, n, h);else {
        a[f](v, n), e[f](u, n);try {
          b = null == e.frameElement && s;
        } catch (A) {}b && b.doScroll && !function E() {
          if (!x) {
            try {
              b.doScroll("left");
            } catch (e) {
              return i(E, 50);
            }r(), t();
          }
        }();
      }return o.version = "1.4.0", o.isReady = function () {
        return x;
      }, o;
    }e.exports = "undefined" != typeof window && n(window);
  }, function (e, t, n) {
    var r = encodeURIComponent,
        i = decodeURIComponent,
        o = n(4),
        a = n(5),
        s = /(\w+)\[(\d+)\]/,
        l = /\w+\.\w+/;t.parse = function (e) {
      if ("string" != typeof e) return {};if (e = o(e), "" === e) return {};"?" === e.charAt(0) && (e = e.slice(1));for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
        var a,
            h,
            u,
            c = n[r].split("="),
            d = i(c[0]);if (a = s.exec(d)) t[a[1]] = t[a[1]] || [], t[a[1]][a[2]] = i(c[1]);else if (a = l.test(d)) {
          for (a = d.split("."), h = t; a.length;) {
            if (u = a.shift(), u.length) {
              if (h[u]) {
                if (h[u] && "object" != _typeof2(h[u])) break;
              } else h[u] = {};a.length || (h[u] = i(c[1])), h = h[u];
            }
          }
        } else t[c[0]] = null == c[1] ? "" : i(c[1]);
      }return t;
    }, t.stringify = function (e) {
      if (!e) return "";var t = [];for (var n in e) {
        var i = e[n];if ("array" != a(i)) t.push(r(n) + "=" + r(e[n]));else for (var o = 0; o < i.length; ++o) {
          t.push(r(n + "[" + o + "]") + "=" + r(i[o]));
        }
      }return t.join("&");
    };
  }, function (e, t) {
    function n(e) {
      return e.replace(/^\s*|\s*$/g, "");
    }t = e.exports = n, t.left = function (e) {
      return e.replace(/^\s*/, "");
    }, t.right = function (e) {
      return e.replace(/\s*$/, "");
    };
  }, function (e, t) {
    function n(e) {
      return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)));
    }var r = Object.prototype.toString;e.exports = function (e) {
      switch (r.call(e)) {case "[object Date]":
          return "date";case "[object RegExp]":
          return "regexp";case "[object Arguments]":
          return "arguments";case "[object Array]":
          return "array";case "[object Error]":
          return "error";}return null === e ? "null" : void 0 === e ? "undefined" : e !== e ? "nan" : e && 1 === e.nodeType ? "element" : n(e) ? "buffer" : (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e), typeof e === "undefined" ? "undefined" : _typeof2(e));
    };
  }, function (e, t) {
    var n = function n(e) {
      function t(e, t) {
        for (var n in t) {
          e[n] = t[n];
        }return e;
      }var n = 1,
          r = function r(e) {
        n++, this.parent = null, this.children = {}, this.id = n, this.name = "n" + n, "undefined" != typeof e && (this.name = e), this.x = this.y = this.z = 0, this.width = this.height = 0;
      };r.prototype.resize = function (e, t) {
        null != e && (this.width = e), null != t && (this.height = t);
      }, r.prototype.moveTo = function (e, t, n) {
        this.x = null != e ? e : this.x, this.y = null != t ? t : this.y, this.z = null != n ? n : this.z;
      }, r.prototype.add = function (e) {
        var t = e.name;if ("undefined" != typeof this.children[t]) throw "SceneGraph: child already exists: " + t;this.children[t] = e, e.parent = this;
      };var i = function i() {
        r.call(this, "root"), this.properties = e;
      };i.prototype = new r();var o = function o(e, n) {
        if (r.call(this, e), this.properties = { fill: "#000000" }, "undefined" != typeof n) t(this.properties, n);else if ("undefined" != typeof e && "string" != typeof e) throw "SceneGraph: invalid node name";
      };o.prototype = new r();var a = function a() {
        o.apply(this, arguments), this.type = "group";
      };a.prototype = new o();var s = function s() {
        o.apply(this, arguments), this.type = "rect";
      };s.prototype = new o();var l = function l(e) {
        o.call(this), this.type = "text", this.properties.text = e;
      };l.prototype = new o();var h = new i();return this.Shape = { Rect: s, Text: l, Group: a }, this.root = h, this;
    };e.exports = n;
  }, function (e, t) {
    (function (e) {
      t.extend = function (e, t) {
        var n = {};for (var r in e) {
          e.hasOwnProperty(r) && (n[r] = e[r]);
        }if (null != t) for (var i in t) {
          t.hasOwnProperty(i) && (n[i] = t[i]);
        }return n;
      }, t.cssProps = function (e) {
        var t = [];for (var n in e) {
          e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
        }return t.join(";");
      }, t.encodeHtmlEntity = function (e) {
        for (var t = [], n = 0, r = e.length - 1; r >= 0; r--) {
          n = e.charCodeAt(r), n > 128 ? t.unshift(["&#", n, ";"].join("")) : t.unshift(e[r]);
        }return t.join("");
      }, t.imageExists = function (e, t) {
        var n = new Image();n.onerror = function () {
          t.call(this, !1);
        }, n.onload = function () {
          t.call(this, !0);
        }, n.src = e;
      }, t.decodeHtmlEntity = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
          return String.fromCharCode(t);
        });
      }, t.dimensionCheck = function (e) {
        var t = { height: e.clientHeight, width: e.clientWidth };return !(!t.height || !t.width) && t;
      }, t.truthy = function (e) {
        return "string" == typeof e ? "true" === e || "yes" === e || "1" === e || "on" === e || "✓" === e : !!e;
      }, t.parseColor = function (e) {
        var t,
            n = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,
            r = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
            i = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,
            o = e.match(n);return null !== o ? (t = o[1] || o[2], "#" !== t[0] ? "#" + t : t) : (o = e.match(r), null !== o ? t = "rgb(" + o.slice(1).join(",") + ")" : (o = e.match(i), null !== o ? t = "rgba(" + o.slice(1).join(",") + ")" : null));
      }, t.canvasRatio = function () {
        var t = 1,
            n = 1;if (e.document) {
          var r = e.document.createElement("canvas");if (r.getContext) {
            var i = r.getContext("2d");t = e.devicePixelRatio || 1, n = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1;
          }
        }return t / n;
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t, n) {
    (function (e) {
      var r = n(9),
          i = "http://www.w3.org/2000/svg",
          o = 8;t.initSVG = function (e, t, n) {
        var a,
            s,
            l = !1;e && e.querySelector ? (s = e.querySelector("style"), null === s && (l = !0)) : (e = r.newEl("svg", i), l = !0), l && (a = r.newEl("defs", i), s = r.newEl("style", i), r.setAttr(s, { type: "text/css" }), a.appendChild(s), e.appendChild(a)), e.webkitMatchesSelector && e.setAttribute("xmlns", i);for (var h = 0; h < e.childNodes.length; h++) {
          e.childNodes[h].nodeType === o && e.removeChild(e.childNodes[h]);
        }for (; s.childNodes.length;) {
          s.removeChild(s.childNodes[0]);
        }return r.setAttr(e, { width: t, height: n, viewBox: "0 0 " + t + " " + n, preserveAspectRatio: "none" }), e;
      }, t.svgStringToDataURI = function () {
        var t = "data:image/svg+xml;charset=UTF-8,",
            n = "data:image/svg+xml;charset=UTF-8;base64,";return function (r, i) {
          return i ? n + btoa(e.unescape(encodeURIComponent(r))) : t + encodeURIComponent(r);
        };
      }(), t.serializeSVG = function (t, n) {
        if (e.XMLSerializer) {
          var i = new XMLSerializer(),
              o = "",
              a = n.stylesheets;if (n.svgXMLStylesheet) {
            for (var s = r.createXML(), l = a.length - 1; l >= 0; l--) {
              var h = s.createProcessingInstruction("xml-stylesheet", 'href="' + a[l] + '" rel="stylesheet"');s.insertBefore(h, s.firstChild);
            }s.removeChild(s.documentElement), o = i.serializeToString(s);
          }var u = i.serializeToString(t);return u = u.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), o + u;
        }
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (e) {
      t.newEl = function (t, n) {
        if (e.document) return null == n ? e.document.createElement(t) : e.document.createElementNS(n, t);
      }, t.setAttr = function (e, t) {
        for (var n in t) {
          e.setAttribute(n, t[n]);
        }
      }, t.createXML = function () {
        if (e.DOMParser) return new DOMParser().parseFromString("<xml />", "application/xml");
      }, t.getNodeArray = function (t) {
        var n = null;return "string" == typeof t ? n = document.querySelectorAll(t) : e.NodeList && t instanceof e.NodeList ? n = t : e.Node && t instanceof e.Node ? n = [t] : e.HTMLCollection && t instanceof e.HTMLCollection ? n = t : t instanceof Array ? n = t : null === t && (n = []), n = Array.prototype.slice.call(n);
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    var n = function n(e, t) {
      "string" == typeof e && (this.original = e, "#" === e.charAt(0) && (e = e.slice(1)), /[^a-f0-9]+/i.test(e) || (3 === e.length && (e = e.replace(/./g, "$&$&")), 6 === e.length && (this.alpha = 1, t && t.alpha && (this.alpha = t.alpha), this.set(parseInt(e, 16)))));
    };n.rgb2hex = function (e, t, n) {
      function r(e) {
        var t = (0 | e).toString(16);return e < 16 && (t = "0" + t), t;
      }return [e, t, n].map(r).join("");
    }, n.hsl2rgb = function (e, t, n) {
      var r = e / 60,
          i = (1 - Math.abs(2 * n - 1)) * t,
          o = i * (1 - Math.abs(parseInt(r) % 2 - 1)),
          a = n - i / 2,
          s = 0,
          l = 0,
          h = 0;return r >= 0 && r < 1 ? (s = i, l = o) : r >= 1 && r < 2 ? (s = o, l = i) : r >= 2 && r < 3 ? (l = i, h = o) : r >= 3 && r < 4 ? (l = o, h = i) : r >= 4 && r < 5 ? (s = o, h = i) : r >= 5 && r < 6 && (s = i, h = o), s += a, l += a, h += a, s = parseInt(255 * s), l = parseInt(255 * l), h = parseInt(255 * h), [s, l, h];
    }, n.prototype.set = function (e) {
      this.raw = e;var t = (16711680 & this.raw) >> 16,
          n = (65280 & this.raw) >> 8,
          r = 255 & this.raw,
          i = .2126 * t + .7152 * n + .0722 * r,
          o = -.09991 * t - .33609 * n + .436 * r,
          a = .615 * t - .55861 * n - .05639 * r;return this.rgb = { r: t, g: n, b: r }, this.yuv = { y: i, u: o, v: a }, this;
    }, n.prototype.lighten = function (e) {
      var t = Math.min(1, Math.max(0, Math.abs(e))) * (e < 0 ? -1 : 1),
          r = 255 * t | 0,
          i = Math.min(255, Math.max(0, this.rgb.r + r)),
          o = Math.min(255, Math.max(0, this.rgb.g + r)),
          a = Math.min(255, Math.max(0, this.rgb.b + r)),
          s = n.rgb2hex(i, o, a);return new n(s);
    }, n.prototype.toHex = function (e) {
      return (e ? "#" : "") + this.raw.toString(16);
    }, n.prototype.lighterThan = function (e) {
      return e instanceof n || (e = new n(e)), this.yuv.y > e.yuv.y;
    }, n.prototype.blendAlpha = function (e) {
      e instanceof n || (e = new n(e));var t = e,
          r = this,
          i = t.alpha * t.rgb.r + (1 - t.alpha) * r.rgb.r,
          o = t.alpha * t.rgb.g + (1 - t.alpha) * r.rgb.g,
          a = t.alpha * t.rgb.b + (1 - t.alpha) * r.rgb.b;return new n(n.rgb2hex(i, o, a));
    }, e.exports = n;
  }, function (e, t) {
    e.exports = { version: "2.9.4", svg_ns: "http://www.w3.org/2000/svg" };
  }, function (e, t, n) {
    function r(e, t) {
      return c.element({ tag: t, width: e.width, height: e.height, fill: e.properties.fill });
    }function i(e) {
      return h.cssProps({ fill: e.fill, "font-weight": e.font.weight, "font-family": e.font.family + ", monospace", "font-size": e.font.size + e.font.units });
    }function o(e, t, n) {
      var r = n / 2;return ["M", r, r, "H", e - r, "V", t - r, "H", r, "V", 0, "M", 0, r, "L", e, t - r, "M", 0, t - r, "L", e, r].join(" ");
    }var a = n(13),
        s = n(8),
        l = n(11),
        h = n(7),
        u = l.svg_ns,
        c = { element: function element(e) {
        var t = e.tag,
            n = e.content || "";return delete e.tag, delete e.content, [t, n, e];
      } };e.exports = function (e, t) {
      var n = t.engineSettings,
          l = n.stylesheets,
          h = l.map(function (e) {
        return '<?xml-stylesheet rel="stylesheet" href="' + e + '"?>';
      }).join("\n"),
          d = "holder_" + Number(new Date()).toString(16),
          f = e.root,
          p = f.children.holderTextGroup,
          g = "#" + d + " text { " + i(p.properties) + " } ";p.y += .8 * p.textPositionData.boundingBox.height;var m = [];Object.keys(p.children).forEach(function (e) {
        var t = p.children[e];Object.keys(t.children).forEach(function (e) {
          var n = t.children[e],
              r = p.x + t.x + n.x,
              i = p.y + t.y + n.y,
              o = c.element({ tag: "text", content: n.properties.text, x: r, y: i });m.push(o);
        });
      });var v = c.element({ tag: "g", content: m }),
          y = null;if (f.children.holderBg.properties.outline) {
        var w = f.children.holderBg.properties.outline;y = c.element({ tag: "path", d: o(f.children.holderBg.width, f.children.holderBg.height, w.width), "stroke-width": w.width, stroke: w.fill, fill: "none" });
      }var b = r(f.children.holderBg, "rect"),
          x = [];x.push(b), w && x.push(y), x.push(v);var S = c.element({ tag: "g", id: d, content: x }),
          A = c.element({ tag: "style", content: g, type: "text/css" }),
          C = c.element({ tag: "defs", content: A }),
          E = c.element({ tag: "svg", content: [C, S], width: f.properties.width, height: f.properties.height, xmlns: u, viewBox: [0, 0, f.properties.width, f.properties.height].join(" "), preserveAspectRatio: "none" }),
          k = a(E);k = h + k[0];var T = s.svgStringToDataURI(k, "background" === t.mode);return T;
    };
  }, function (e, t, n) {
    n(14);e.exports = function r(e, t, n) {
      "use strict";
      function i(e) {
        var t = e.match(/^[\w-]+/),
            r = { tag: t ? t[0] : "div", attr: {}, children: [] },
            i = e.match(/#([\w-]+)/),
            o = e.match(/\$([\w-]+)/),
            a = e.match(/\.[\w-]+/g);return i && (r.attr.id = i[1], n[i[1]] = r), o && (n[o[1]] = r), a && (r.attr["class"] = a.join(" ").replace(/\./g, "")), e.match(/&$/g) && (f = !1), r;
      }function o(e, t) {
        if (null !== t && t !== !1 && void 0 !== t) return "string" != typeof t && "object" != (typeof t === "undefined" ? "undefined" : _typeof2(t)) ? String(t) : t;
      }function a(e) {
        return e || 0 === e ? String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;") : "";
      }function s(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }var l,
          h,
          u,
          c,
          d = 1,
          f = !0;if (n = n || {}, "string" == typeof e[0]) e[0] = i(e[0]);else {
        if (!Array.isArray(e[0])) throw new Error("First element of array must be a string, or an array and not " + JSON.stringify(e[0]));d = 0;
      }for (; d < e.length; d++) {
        if (e[d] === !1 || null === e[d]) {
          e[0] = !1;break;
        }if (void 0 !== e[d] && e[d] !== !0) if ("string" == typeof e[d]) f && (e[d] = s(e[d])), e[0].children.push(e[d]);else if ("number" == typeof e[d]) e[0].children.push(e[d]);else if (Array.isArray(e[d])) {
          if (Array.isArray(e[d][0])) {
            if (e[d].reverse().forEach(function (t) {
              e.splice(d + 1, 0, t);
            }), 0 !== d) continue;d++;
          }r(e[d], t, n), e[d][0] && e[0].children.push(e[d][0]);
        } else if ("function" == typeof e[d]) u = e[d];else {
          if ("object" != _typeof2(e[d])) throw new TypeError('"' + e[d] + '" is not allowed as a value.');for (h in e[d]) {
            e[d].hasOwnProperty(h) && null !== e[d][h] && e[d][h] !== !1 && ("style" === h && "object" == _typeof2(e[d][h]) ? e[0].attr[h] = JSON.stringify(e[d][h], o).slice(2, -2).replace(/","/g, ";").replace(/":"/g, ":").replace(/\\"/g, "'") : e[0].attr[h] = e[d][h]);
          }
        }
      }if (e[0] !== !1) {
        l = "<" + e[0].tag;for (c in e[0].attr) {
          e[0].attr.hasOwnProperty(c) && (l += " " + c + '="' + a(e[0].attr[c]) + '"');
        }l += ">", e[0].children.forEach(function (e) {
          l += e;
        }), l += "</" + e[0].tag + ">", e[0] = l;
      }return n[0] = e[0], u && u(e[0]), n;
    };
  }, function (e, t) {
    "use strict";
    function n(e) {
      var t = "" + e,
          n = r.exec(t);if (!n) return t;var i,
          o = "",
          a = 0,
          s = 0;for (a = n.index; a < t.length; a++) {
        switch (t.charCodeAt(a)) {case 34:
            i = "&quot;";break;case 38:
            i = "&amp;";break;case 39:
            i = "&#39;";break;case 60:
            i = "&lt;";break;case 62:
            i = "&gt;";break;default:
            continue;}s !== a && (o += t.substring(s, a)), s = a + 1, o += i;
      }return s !== a ? o + t.substring(s, a) : o;
    }var r = /["'&<>]/;e.exports = n;
  }, function (e, t, n) {
    var r = n(9),
        i = n(7);e.exports = function () {
      var e = r.newEl("canvas"),
          t = null;return function (n) {
        null == t && (t = e.getContext("2d"));var r = i.canvasRatio(),
            o = n.root;e.width = r * o.properties.width, e.height = r * o.properties.height, t.textBaseline = "middle";var a = o.children.holderBg,
            s = r * a.width,
            l = r * a.height,
            h = 2,
            u = h / 2;t.fillStyle = a.properties.fill, t.fillRect(0, 0, s, l), a.properties.outline && (t.strokeStyle = a.properties.outline.fill, t.lineWidth = a.properties.outline.width, t.moveTo(u, u), t.lineTo(s - u, u), t.lineTo(s - u, l - u), t.lineTo(u, l - u), t.lineTo(u, u), t.moveTo(0, u), t.lineTo(s, l - u), t.moveTo(0, l - u), t.lineTo(s, u), t.stroke());var c = o.children.holderTextGroup;t.font = c.properties.font.weight + " " + r * c.properties.font.size + c.properties.font.units + " " + c.properties.font.family + ", monospace", t.fillStyle = c.properties.fill;for (var d in c.children) {
          var f = c.children[d];for (var p in f.children) {
            var g = f.children[p],
                m = r * (c.x + f.x + g.x),
                v = r * (c.y + f.y + g.y + c.properties.leading / 2);t.fillText(g.properties.text, m, v);
          }
        }return e.toDataURL("image/png");
      };
    }();
  }]);
}), function (e, t) {
  t && (Holder = e.Holder);
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function (i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};e = function () {
    function e(e, o) {
      var s,
          n = this;n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(e), appendDots: i(e), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    }var t = 0;return e;
  }(), e.prototype.activateADA = function () {
    var i = this;i.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({ height: e }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function step(i) {
        i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      }, complete: function complete() {
        t && t.call();
      } })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this,
        o = t.getNavTarget();null !== o && "object" == (typeof o === "undefined" ? "undefined" : _typeof2(o)) && o.each(function () {
      var t = i(this).slick("getSlick");t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);n.get(c) && a.appendChild(n.get(c));
          }d.appendChild(a);
        }o.appendChild(d);
      }l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);break;case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);break;case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");break;default:
        return;}
  }, e.prototype.checkNavigable = function (i) {
    var e,
        t,
        o = this;if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var s in e) {
      if (i < e[s]) {
        i = t;break;
      }t = e[s];
    }return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    var e = this;e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;t.cssTransitions === !1 ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;e.cssTransitions === !1 ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (t) {
      var o = i(this);setTimeout(function () {
        e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay());
      }, 0);
    }).on("blur.slick", "*", function (t) {
      i(this);e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay());
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    var i = this;return i.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;if (i.options.infinite === !0) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (i.options.centerMode === !0) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    var e = this;return e.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o,
        s,
        n = this;return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
      var r, l, d;if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1;
    }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    var t = this;t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
  }, e.prototype.init = function (e) {
    var t = this;i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);if (i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), s !== -1) {
        var n = "slick-slide-control" + e.instanceUid + s;i("#" + n).length && i(this).attr({ "aria-describedby": n });
      }
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
    }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.options.focusOnChange ? e.$slides.eq(s).attr({ tabindex: "0" }) : e.$slides.eq(s).removeAttr("tabindex");
    }e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({ data: { message: e.options.rtl === !0 ? "next" : "previous" } }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({ data: { message: e.options.rtl === !0 ? "previous" : "next" } }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");n.onload = function () {
          e.animate({ opacity: 0 }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), r.$slider.trigger("lazyLoaded", [r, e, t]);
          });
        }, n.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]);
        }, n.src = t;
      });
    }var t,
        o,
        s,
        n,
        r = this;if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad) for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) {
      l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
    }e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o));
  }, e.prototype.loadSlider = function () {
    var i = this;i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    var i = this;i.changeSlide({ data: { message: "next" } });
  }, e.prototype.orientationChange = function () {
    var i = this;i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
      var o = i(t.$slides.get(t.currentSlide));o.attr("tabindex", 0).focus();
    }
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    var i = this;i.changeSlide({ data: { message: "previous" } });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit());
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
    }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
  }, e.prototype.setHeight = function () {
    var i = this;if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }r.options.responsive.push(s[t]);
      }
    }l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
      var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));"ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
      a.postSlide(s);
    })) : a.postSlide(s), void a.animateHeight()) : void (t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function () {
      a.postSlide(s);
    }) : a.postSlide(s)));
  }, e.prototype.startLoad = function () {
    var i = this;i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {case "left":case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;break;case "right":case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;}"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {case "start":
        e.swipeStart(i);break;case "move":
        e.swipeMove(i);break;case "end":
        e.swipeEnd(i);}
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void (t.dragging = !0));
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i,
        e = this;i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;for (i = 0; i < r; i++) {
      if ("object" == (typeof s === "undefined" ? "undefined" : _typeof2(s)) || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
    }return o;
  };
});
"object" == (typeof navigator === "undefined" ? "undefined" : _typeof2(navigator)) && function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t();
}(this, function () {
  "use strict";
  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;var e,
      t,
      i = (function (e, t) {
    var i;i = function i() {
      var e = function e() {},
          t = {},
          i = {},
          n = {};function s(e, t) {
        if (e) {
          var s = n[e];if (i[e] = t, s) for (; s.length;) {
            s[0](e, t), s.splice(0, 1);
          }
        }
      }function a(t, i) {
        t.call && (t = { success: t }), i.length ? (t.error || e)(i) : (t.success || e)(t);
      }function r(t, i, n, s) {
        var a,
            l,
            o = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            p = t.replace(/^(css|img)!/, "");s = s || 0, /(^css!|\.css$)/.test(t) ? (a = !0, (l = o.createElement("link")).rel = "stylesheet", l.href = p) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (l = o.createElement("img")).src = p : ((l = o.createElement("script")).src = t, l.async = void 0 === c || c), l.onload = l.onerror = l.onbeforeload = function (e) {
          var o = e.type[0];if (a && "hideFocus" in l) try {
            l.sheet.cssText.length || (o = "e");
          } catch (e) {
            o = "e";
          }if ("e" == o && (s += 1) < u) return r(t, i, n, s);i(t, o, e.defaultPrevented);
        }, !1 !== d(t, l) && o.head.appendChild(l);
      }function l(e, i, n) {
        var l, o;if (i && i.trim && (l = i), o = (l ? n : i) || {}, l) {
          if (l in t) throw "LoadJS";t[l] = !0;
        }!function (e, t, i) {
          var n,
              s,
              a = (e = e.push ? e : [e]).length,
              l = a,
              o = [];for (n = function n(e, i, _n4) {
            if ("e" == i && o.push(e), "b" == i) {
              if (!_n4) return;o.push(e);
            }--a || t(o);
          }, s = 0; s < l; s++) {
            r(e[s], n, i);
          }
        }(e, function (e) {
          a(o, e), s(l, e);
        }, o);
      }return l.ready = function (e, t) {
        return function (e, t) {
          e = e.push ? e : [e];var s,
              a,
              r,
              l = [],
              o = e.length,
              c = o;for (s = function s(e, i) {
            i.length && l.push(e), --c || t(l);
          }; o--;) {
            a = e[o], (r = i[a]) ? s(a, r) : (n[a] = n[a] || []).push(s);
          }
        }(e, function (e) {
          a(t, e);
        }), l;
      }, l.done = function (e) {
        s(e, []);
      }, l.reset = function () {
        t = {}, i = {}, n = {};
      }, l.isDefined = function (e) {
        return e in t;
      }, l;
    }, e.exports = i();
  }(e = { exports: {} }, e.exports), e.exports),
      n = function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      s = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }return function (t, i, n) {
      return i && e(t.prototype, i), n && e(t, n), t;
    };
  }(),
      a = function a(e, t, i) {
    return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
  },
      r = function () {
    return function (e, t) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, t) {
        var i = [],
            n = !0,
            s = !1,
            a = void 0;try {
          for (var r, l = e[Symbol.iterator](); !(n = (r = l.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0) {}
        } catch (e) {
          s = !0, a = e;
        } finally {
          try {
            !n && l.return && l.return();
          } finally {
            if (s) throw a;
          }
        }return i;
      }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      l = function () {
    function e(t) {
      n(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
    }return s(e, [{ key: "get", value: function value(t) {
        if (!e.supported || !this.enabled) return null;var i = window.localStorage.getItem(this.key);if (u.is.empty(i)) return null;var n = JSON.parse(i);return u.is.string(t) && t.length ? n[t] : n;
      } }, { key: "set", value: function value(t) {
        if (e.supported && this.enabled && u.is.object(t)) {
          var i = this.get();u.is.empty(i) && (i = {}), u.extend(i, t), window.localStorage.setItem(this.key, JSON.stringify(i));
        }
      } }], [{ key: "supported", get: function get() {
        try {
          if (!("localStorage" in window)) return !1;return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      } }]), e;
  }(),
      o = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      c = { audio: "audio", video: "video" },
      u = { is: { object: function object(e) {
        return this.getConstructor(e) === Object;
      }, number: function number(e) {
        return this.getConstructor(e) === Number && !Number.isNaN(e);
      }, string: function string(e) {
        return this.getConstructor(e) === String;
      }, boolean: function boolean(e) {
        return this.getConstructor(e) === Boolean;
      }, function: function _function(e) {
        return this.getConstructor(e) === Function;
      }, array: function array(e) {
        return !this.nullOrUndefined(e) && Array.isArray(e);
      }, weakMap: function weakMap(e) {
        return this.instanceof(e, WeakMap);
      }, nodeList: function nodeList(e) {
        return this.instanceof(e, NodeList);
      }, element: function element(e) {
        return this.instanceof(e, Element);
      }, textNode: function textNode(e) {
        return this.getConstructor(e) === Text;
      }, event: function event(e) {
        return this.instanceof(e, Event);
      }, cue: function cue(e) {
        return this.instanceof(e, window.TextTrackCue) || this.instanceof(e, window.VTTCue);
      }, track: function track(e) {
        return this.instanceof(e, TextTrack) || !this.nullOrUndefined(e) && this.string(e.kind);
      }, url: function url(e) {
        return !this.nullOrUndefined(e) && /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(e);
      }, nullOrUndefined: function nullOrUndefined(e) {
        return null == e;
      }, empty: function empty(e) {
        return this.nullOrUndefined(e) || (this.string(e) || this.array(e) || this.nodeList(e)) && !e.length || this.object(e) && !Object.keys(e).length;
      }, instanceof: function _instanceof(e, t) {
        return Boolean(e && t && e instanceof t);
      }, getConstructor: function getConstructor(e) {
        return this.nullOrUndefined(e) ? null : e.constructor;
      } }, getBrowser: function getBrowser() {
      return { isIE: !!document.documentMode, isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform) };
    }, fetch: function fetch(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";return new Promise(function (i, n) {
        try {
          var s = new XMLHttpRequest();if (!("withCredentials" in s)) return;s.addEventListener("load", function () {
            if ("text" === t) try {
              i(JSON.parse(s.responseText));
            } catch (e) {
              i(s.responseText);
            } else i(s.response);
          }), s.addEventListener("error", function () {
            throw new Error(s.statusText);
          }), s.open("GET", e, !0), s.responseType = t, s.send();
        } catch (e) {
          n(e);
        }
      });
    }, loadImage: function loadImage(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;return new Promise(function (i, n) {
        var s = new Image(),
            a = function a() {
          delete s.onload, delete s.onerror, (s.naturalWidth >= t ? i : n)(s);
        };Object.assign(s, { onload: a, onerror: a, src: e });
      });
    }, loadScript: function loadScript(e) {
      return new Promise(function (t, n) {
        i(e, { success: t, error: n });
      });
    }, loadSprite: function loadSprite(e, t) {
      if (u.is.string(e)) {
        var i = u.is.string(t),
            n = function n() {
          return document.querySelectorAll("#" + t).length;
        };if (!i || !n()) {
          var s = l.supported,
              a = document.createElement("div");if (u.toggleHidden(a, !0), i && a.setAttribute("id", t), s) {
            var r = window.localStorage.getItem("cache-" + t);if (null !== r) {
              var o = JSON.parse(r);return void c.call(a, o.content);
            }
          }u.fetch(e).then(function (e) {
            u.is.empty(e) || (s && window.localStorage.setItem("cache-" + t, JSON.stringify({ content: e })), c.call(a, e));
          }).catch(function () {});
        }
      }function c(e) {
        i && n() || (this.innerHTML = e, document.body.insertBefore(this, document.body.childNodes[0]));
      }
    }, generateId: function generateId(e) {
      return e + "-" + Math.floor(1e4 * Math.random());
    }, wrap: function wrap(e, t) {
      var i = e.length ? e : [e];Array.from(i).reverse().forEach(function (e, i) {
        var n = i > 0 ? t.cloneNode(!0) : t,
            s = e.parentNode,
            a = e.nextSibling;n.appendChild(e), a ? s.insertBefore(n, a) : s.appendChild(n);
      });
    }, createElement: function createElement(e, t, i) {
      var n = document.createElement(e);return u.is.object(t) && u.setAttributes(n, t), u.is.string(i) && (n.innerText = i), n;
    }, insertAfter: function insertAfter(e, t) {
      t.parentNode.insertBefore(e, t.nextSibling);
    }, insertElement: function insertElement(e, t, i, n) {
      t.appendChild(u.createElement(e, i, n));
    }, removeElement: function removeElement(e) {
      u.is.nodeList(e) || u.is.array(e) ? Array.from(e).forEach(u.removeElement) : u.is.element(e) && u.is.element(e.parentNode) && e.parentNode.removeChild(e);
    }, emptyElement: function emptyElement(e) {
      for (var t = e.childNodes.length; t > 0;) {
        e.removeChild(e.lastChild), t -= 1;
      }
    }, replaceElement: function replaceElement(e, t) {
      return u.is.element(t) && u.is.element(t.parentNode) && u.is.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
    }, setAttributes: function setAttributes(e, t) {
      u.is.element(e) && !u.is.empty(t) && Object.entries(t).forEach(function (t) {
        var i = r(t, 2),
            n = i[0],
            s = i[1];e.setAttribute(n, s);
      });
    }, getAttributesFromSelector: function getAttributesFromSelector(e, t) {
      if (!u.is.string(e) || u.is.empty(e)) return {};var i = {},
          n = t;return e.split(",").forEach(function (e) {
        var t = e.trim(),
            s = t.replace(".", ""),
            a = t.replace(/[[\]]/g, "").split("="),
            r = a[0],
            l = a.length > 1 ? a[1].replace(/["']/g, "") : "";switch (t.charAt(0)) {case ".":
            u.is.object(n) && u.is.string(n.class) && (n.class += " " + s), i.class = s;break;case "#":
            i.id = t.replace("#", "");break;case "[":
            i[r] = l;}
      }), i;
    }, toggleHidden: function toggleHidden(e, t) {
      if (u.is.element(e)) {
        var i = t;u.is.boolean(i) || (i = !e.hasAttribute("hidden")), i ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
      }
    }, toggleClass: function toggleClass(e, t, i) {
      if (u.is.element(e)) {
        var n = "toggle";return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t);
      }return null;
    }, hasClass: function hasClass(e, t) {
      return u.is.element(e) && e.classList.contains(t);
    }, matches: function matches(e, t) {
      var i = { Element: Element };var n = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      };return n.call(e, t);
    }, getElements: function getElements(e) {
      return this.elements.container.querySelectorAll(e);
    }, getElement: function getElement(e) {
      return this.elements.container.querySelector(e);
    }, getFocusElement: function getFocusElement() {
      var e = document.activeElement;return e = e && e !== document.body ? document.querySelector(":focus") : null;
    }, trapFocus: function trapFocus() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (u.is.element(e)) {
        var i = u.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
            n = i[0],
            s = i[i.length - 1],
            a = function a(e) {
          if ("Tab" === e.key && 9 === e.keyCode) {
            var t = u.getFocusElement();t !== s || e.shiftKey ? t === n && e.shiftKey && (s.focus(), e.preventDefault()) : (n.focus(), e.preventDefault());
          }
        };t ? u.on(this.elements.container, "keydown", a, !1) : u.off(this.elements.container, "keydown", a, !1);
      }
    }, toggleListener: function toggleListener(e, t, i) {
      var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];if (!u.is.empty(e) && !u.is.empty(t) && u.is.function(i)) if (u.is.nodeList(e) || u.is.array(e)) Array.from(e).forEach(function (e) {
        e instanceof Node && u.toggleListener.call(null, e, t, i, n, s, a);
      });else {
        var r = t.split(" "),
            l = a;d.passiveListeners && (l = { passive: s, capture: a }), r.forEach(function (t) {
          e[n ? "addEventListener" : "removeEventListener"](t, i, l);
        });
      }
    }, on: function on(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments[2],
          n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];u.toggleListener(e, t, i, !0, n, s);
    }, off: function off(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments[2],
          n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];u.toggleListener(e, t, i, !1, n, s);
    }, dispatchEvent: function dispatchEvent(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};if (u.is.element(e) && !u.is.empty(t)) {
        var s = new CustomEvent(t, { bubbles: i, detail: Object.assign({}, n, { plyr: this }) });e.dispatchEvent(s);
      }
    }, toggleState: function toggleState(e, t) {
      if (u.is.array(e) || u.is.nodeList(e)) Array.from(e).forEach(function (e) {
        return u.toggleState(e, t);
      });else if (u.is.element(e)) {
        var i = "true" === e.getAttribute("aria-pressed"),
            n = u.is.boolean(t) ? t : !i;e.setAttribute("aria-pressed", n);
      }
    }, format: function format(e) {
      for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        i[n - 1] = arguments[n];
      }return u.is.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
        return u.is.string(i[t]) ? i[t] : "";
      });
    }, getPercentage: function getPercentage(e, t) {
      return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2);
    }, getHours: function getHours(e) {
      return parseInt(e / 60 / 60 % 60, 10);
    }, getMinutes: function getMinutes(e) {
      return parseInt(e / 60 % 60, 10);
    }, getSeconds: function getSeconds(e) {
      return parseInt(e % 60, 10);
    }, formatTime: function formatTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (!u.is.number(e)) return this.formatTime(null, t, i);var n = function n(e) {
        return ("0" + e).slice(-2);
      },
          s = this.getHours(e),
          a = this.getMinutes(e),
          r = this.getSeconds(e);return t || s > 0 ? s += ":" : s = "", (i ? "-" : "") + s + n(a) + ":" + n(r);
    }, replaceAll: function replaceAll() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
    }, toTitleCase: function toTitleCase() {
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
      });
    }, toPascalCase: function toPascalCase() {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return e = u.replaceAll(e, "-", " "), e = u.replaceAll(e, "_", " "), e = u.toTitleCase(e), u.replaceAll(e, " ", "");
    }, toCamelCase: function toCamelCase() {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();return (e = u.toPascalCase(e)).charAt(0).toLowerCase() + e.slice(1);
    }, extend: function extend() {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        i[n - 1] = arguments[n];
      }if (!i.length) return e;var s = i.shift();return u.is.object(s) ? (Object.keys(s).forEach(function (t) {
        u.is.object(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, a({}, t, {})), u.extend(e[t], s[t])) : Object.assign(e, a({}, t, s[t]));
      }), u.extend.apply(u, [e].concat(function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = Array(e.length); t < e.length; t++) {
            i[t] = e[t];
          }return i;
        }return Array.from(e);
      }(i)))) : e;
    }, dedupe: function dedupe(e) {
      return u.is.array(e) ? e.filter(function (t, i) {
        return e.indexOf(t) === i;
      }) : e;
    }, cloneDeep: function cloneDeep(e) {
      return JSON.parse(JSON.stringify(e));
    }, getDeep: function getDeep(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e);
    }, closest: function closest(e, t) {
      return u.is.array(e) && e.length ? e.reduce(function (e, i) {
        return Math.abs(i - t) < Math.abs(e - t) ? i : e;
      }) : null;
    }, getProviderByUrl: function getProviderByUrl(e) {
      return (/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? o.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? o.vimeo : null
      );
    }, parseYouTubeId: function parseYouTubeId(e) {
      if (u.is.empty(e)) return null;return e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e;
    }, parseVimeoId: function parseVimeoId(e) {
      if (u.is.empty(e)) return null;if (u.is.number(Number(e))) return e;return e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e;
    }, parseUrl: function parseUrl(e) {
      var t = document.createElement("a");return t.href = e, t;
    }, getUrlParams: function getUrlParams(e) {
      var t = e;(e.startsWith("http://") || e.startsWith("https://")) && (t = this.parseUrl(e).search);return this.is.empty(t) ? null : t.slice(t.indexOf("?") + 1).split("&").reduce(function (e, t) {
        var i = t.split("="),
            n = r(i, 2),
            s = n[0],
            l = n[1];return Object.assign(e, a({}, s, decodeURIComponent(l)));
      }, {});
    }, buildUrlParams: function buildUrlParams(e) {
      return u.is.object(e) ? Object.keys(e).map(function (t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
      }).join("&") : "";
    }, stripHTML: function stripHTML(e) {
      var t = document.createDocumentFragment(),
          i = document.createElement("div");return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
    }, getAspectRatio: function getAspectRatio(e, t) {
      var i = function e(t, i) {
        return 0 === i ? t : e(i, t % i);
      }(e, t);return e / i + ":" + t / i;
    }, get transitionEndEvent() {
      var e = document.createElement("span"),
          t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
          i = Object.keys(t).find(function (t) {
        return void 0 !== e.style[t];
      });return !!u.is.string(i) && t[i];
    }, repaint: function repaint(e) {
      setTimeout(function () {
        u.toggleHidden(e, !0), e.offsetHeight, u.toggleHidden(e, !1);
      }, 0);
    } },
      d = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check: function check(e, t, i) {
      var n = !1,
          s = !1,
          a = u.getBrowser(),
          r = a.isIPhone && i && d.playsinline;switch (t + ":" + e) {case "html5:video":
          s = (n = d.video) && d.rangeInput && (!a.isIPhone || r);break;case "html5:audio":
          s = (n = d.audio) && d.rangeInput;break;case "youtube:video":case "vimeo:video":
          n = !0, s = d.rangeInput && (!a.isIPhone || r);break;default:
          s = (n = d.audio && d.video) && d.rangeInput;}return { api: n, ui: s };
    }, pip: !u.getBrowser().isIPhone && u.is.function(u.createElement("video").webkitSetPresentationMode), airplay: u.is.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime: function mime(e) {
      var t = this.media;try {
        if (!this.isHTML5 || !u.is.function(t.canPlayType)) return !1;if (e.includes("codecs=")) return t.canPlayType(e).replace(/no/, "");if (this.isVideo) switch (e) {case "video/webm":
            return t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "");case "video/mp4":
            return t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "");case "video/ogg":
            return t.canPlayType('video/ogg; codecs="theora"').replace(/no/, "");default:
            return !1;} else if (this.isAudio) switch (e) {case "audio/mpeg":
            return t.canPlayType("audio/mpeg;").replace(/no/, "");case "audio/ogg":
            return t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "");case "audio/wav":
            return t.canPlayType('audio/wav; codecs="1"').replace(/no/, "");default:
            return !1;}
      } catch (e) {
        return !1;
      }return !1;
    }, textTracks: "textTracks" in document.createElement("video"), passiveListeners: function () {
      var e = !1;try {
        var t = Object.defineProperty({}, "passive", { get: function get() {
            return e = !0, null;
          } });window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
      } catch (e) {}return e;
    }(), rangeInput: (t = document.createElement("input"), t.type = "range", "range" === t.type), touch: "ontouchstart" in document.documentElement, transitions: !1 !== u.transitionEndEvent, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches },
      p = { getSources: function getSources() {
      return this.isHTML5 ? this.media.querySelectorAll("source") : null;
    }, getQualityOptions: function getQualityOptions() {
      if (!this.isHTML5) return null;var e = p.getSources.call(this);if (u.is.empty(e)) return null;var t = Array.from(e).filter(function (e) {
        return !u.is.empty(e.getAttribute("size"));
      });return u.is.empty(t) ? null : u.dedupe(t.map(function (e) {
        return Number(e.getAttribute("size"));
      }));
    }, extend: function extend() {
      if (this.isHTML5) {
        var e = this;Object.defineProperty(e.media, "quality", { get: function get() {
            var t = p.getSources.call(e);if (u.is.empty(t)) return null;var i = Array.from(t).filter(function (t) {
              return t.getAttribute("src") === e.source;
            });return u.is.empty(i) ? null : Number(i[0].getAttribute("size"));
          }, set: function set(t) {
            var i = p.getSources.call(e);if (!u.is.empty(i)) {
              var n = Array.from(i).filter(function (e) {
                return Number(e.getAttribute("size")) === t;
              });if (!u.is.empty(n)) {
                var s = n.filter(function (t) {
                  return d.mime.call(e, t.getAttribute("type"));
                });if (!u.is.empty(s)) {
                  u.dispatchEvent.call(e, e.media, "qualityrequested", !1, { quality: t });var a = e.currentTime,
                      r = e.playing;e.media.src = s[0].getAttribute("src");e.on("loadedmetadata", function t() {
                    e.currentTime = a, e.off("loadedmetadata", t);
                  }), e.media.load(), r && e.play(), u.dispatchEvent.call(e, e.media, "qualitychange", !1, { quality: t });
                }
              }
            }
          } });
      }
    }, cancelRequests: function cancelRequests() {
      this.isHTML5 && (u.removeElement(p.getSources()), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    } },
      h = function h() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (u.is.empty(e) || u.is.empty(t)) return "";var i = u.getDeep(t.i18n, e);if (u.is.empty(i)) return "";var n = { "{seektime}": t.seekTime, "{title}": t.title };return Object.entries(n).forEach(function (e) {
      var t = r(e, 2),
          n = t[0],
          s = t[1];i = u.replaceAll(i, n, s);
    }), i;
  },
      m = u.getBrowser(),
      g = { getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || m.isIE && !window.svg4everybody;return { url: this.config.iconUrl, cors: e };
    }, findElements: function findElements() {
      try {
        return this.elements.controls = u.getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: u.getElements.call(this, this.config.selectors.buttons.play), pause: u.getElement.call(this, this.config.selectors.buttons.pause), restart: u.getElement.call(this, this.config.selectors.buttons.restart), rewind: u.getElement.call(this, this.config.selectors.buttons.rewind), fastForward: u.getElement.call(this, this.config.selectors.buttons.fastForward), mute: u.getElement.call(this, this.config.selectors.buttons.mute), pip: u.getElement.call(this, this.config.selectors.buttons.pip), airplay: u.getElement.call(this, this.config.selectors.buttons.airplay), settings: u.getElement.call(this, this.config.selectors.buttons.settings), captions: u.getElement.call(this, this.config.selectors.buttons.captions), fullscreen: u.getElement.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = u.getElement.call(this, this.config.selectors.progress), this.elements.inputs = { seek: u.getElement.call(this, this.config.selectors.inputs.seek), volume: u.getElement.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: u.getElement.call(this, this.config.selectors.display.buffer), currentTime: u.getElement.call(this, this.config.selectors.display.currentTime), duration: u.getElement.call(this, this.config.selectors.display.duration) }, u.is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    }, createIcon: function createIcon(e, t) {
      var i = g.getIconUrl.call(this),
          n = (i.cors ? "" : i.url) + "#" + this.config.iconPrefix,
          s = document.createElementNS("http://www.w3.org/2000/svg", "svg");u.setAttributes(s, u.extend(t, { role: "presentation", focusable: "false" }));var a = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          r = n + "-" + e;return "href" in a ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r) : a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), s.appendChild(a), s;
    }, createLabel: function createLabel(e, t) {
      var i = h(e, this.config),
          n = Object.assign({}, t);switch (e) {case "pip":
          i = "PIP";break;case "airplay":
          i = "AirPlay";}return "class" in n ? n.class += " " + this.config.classNames.hidden : n.class = this.config.classNames.hidden, u.createElement("span", n, i);
    }, createBadge: function createBadge(e) {
      if (u.is.empty(e)) return null;var t = u.createElement("span", { class: this.config.classNames.menu.value });return t.appendChild(u.createElement("span", { class: this.config.classNames.menu.badge }, e)), t;
    }, createButton: function createButton(e, t) {
      var i = u.createElement("button"),
          n = Object.assign({}, t),
          s = u.toCamelCase(e),
          a = !1,
          r = void 0,
          l = void 0,
          o = void 0,
          c = void 0;switch ("type" in n || (n.type = "button"), "class" in n ? n.class.includes(this.config.classNames.control) && (n.class += " " + this.config.classNames.control) : n.class = this.config.classNames.control, e) {case "play":
          a = !0, r = "play", o = "pause", l = "play", c = "pause";break;case "mute":
          a = !0, r = "mute", o = "unmute", l = "volume", c = "muted";break;case "captions":
          a = !0, r = "enableCaptions", o = "disableCaptions", l = "captions-off", c = "captions-on";break;case "fullscreen":
          a = !0, r = "enterFullscreen", o = "exitFullscreen", l = "enter-fullscreen", c = "exit-fullscreen";break;case "play-large":
          n.class += " " + this.config.classNames.control + "--overlaid", s = "play", r = "play", l = "play";break;default:
          r = s, l = e;}return a ? (i.appendChild(g.createIcon.call(this, c, { class: "icon--pressed" })), i.appendChild(g.createIcon.call(this, l, { class: "icon--not-pressed" })), i.appendChild(g.createLabel.call(this, o, { class: "label--pressed" })), i.appendChild(g.createLabel.call(this, r, { class: "label--not-pressed" })), n["aria-pressed"] = !1) : (i.appendChild(g.createIcon.call(this, l)), i.appendChild(g.createLabel.call(this, r))), u.extend(n, u.getAttributesFromSelector(this.config.selectors.buttons[s], n)), u.setAttributes(i, n), "play" === s ? (u.is.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(i)) : this.elements.buttons[s] = i, i;
    }, createRange: function createRange(e, t) {
      var i = u.createElement("label", { for: t.id, id: t.id + "-label", class: this.config.classNames.hidden }, h(e, this.config)),
          n = u.createElement("input", u.extend(u.getAttributesFromSelector(this.config.selectors.inputs[e]), { type: "range", min: 0, max: 100, step: .01, value: 0, autocomplete: "off", role: "slider", "aria-labelledby": t.id + "-label", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t));return this.elements.inputs[e] = n, g.updateRangeFill.call(this, n), { label: i, input: n };
    }, createProgress: function createProgress(e, t) {
      var i = u.createElement("progress", u.extend(u.getAttributesFromSelector(this.config.selectors.display[e]), { min: 0, max: 100, value: 0, role: "presentation", "aria-hidden": !0 }, t));if ("volume" !== e) {
        i.appendChild(u.createElement("span", null, "0"));var n = "";switch (e) {case "played":
            n = h("played", this.config);break;case "buffer":
            n = h("buffered", this.config);}i.innerText = "% " + n.toLowerCase();
      }return this.elements.display[e] = i, i;
    }, createTime: function createTime(e) {
      var t = u.getAttributesFromSelector(this.config.selectors.display[e]),
          i = u.createElement("div", u.extend(t, { class: "plyr__time " + t.class, "aria-label": h(e, this.config) }), "00:00");return this.elements.display[e] = i, i;
    }, createMenuItem: function createMenuItem(e, t, i, n) {
      var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          r = u.createElement("li"),
          l = u.createElement("label", { class: this.config.classNames.control }),
          o = u.createElement("input", u.extend(u.getAttributesFromSelector(this.config.selectors.inputs[i]), { type: "radio", name: "plyr-" + i, value: e, checked: a, class: "plyr__sr-only" })),
          c = u.createElement("span", { hidden: "" });l.appendChild(o), l.appendChild(c), l.insertAdjacentHTML("beforeend", n), u.is.element(s) && l.appendChild(s), r.appendChild(l), t.appendChild(r);
    }, updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (u.is.element(e) && u.is.number(t)) {
        var n = u.getHours(this.duration) > 0;e.innerText = u.formatTime(t, n, i);
      }
    }, updateVolume: function updateVolume() {
      this.supported.ui && (u.is.element(this.elements.inputs.volume) && g.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), u.is.element(this.elements.buttons.mute) && u.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume));
    }, setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;u.is.element(e) && (e.value = t, g.updateRangeFill.call(this, e));
    }, updateProgress: function updateProgress(e) {
      var t = this;if (this.supported.ui && u.is.event(e)) {
        var i = 0;if (e) switch (e.type) {case "timeupdate":case "seeking":case "seeked":
            i = u.getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && g.setRange.call(this, this.elements.inputs.seek, i);break;case "playing":case "progress":
            !function (e, i) {
              var n = u.is.number(i) ? i : 0,
                  s = u.is.element(e) ? e : t.elements.display.buffer;if (u.is.element(s)) {
                s.value = n;var a = s.getElementsByTagName("span")[0];u.is.element(a) && (a.childNodes[0].nodeValue = n);
              }
            }(this.elements.display.buffer, 100 * this.buffered);}
      }
    }, updateRangeFill: function updateRangeFill(e) {
      var t = u.is.event(e) ? e.target : e;u.is.element(t) && "range" === t.getAttribute("type") && (t.setAttribute("aria-valuenow", t.value), m.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%"));
    }, updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;if (this.config.tooltips.seek && u.is.element(this.elements.inputs.seek) && u.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var i = 0,
            n = this.elements.progress.getBoundingClientRect(),
            s = this.config.classNames.tooltip + "--visible",
            a = function a(e) {
          u.toggleClass(t.elements.display.seekTooltip, s, e);
        };if (this.touch) a(!1);else {
          if (u.is.event(e)) i = 100 / n.width * (e.pageX - n.left);else {
            if (!u.hasClass(this.elements.display.seekTooltip, s)) return;i = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }i < 0 ? i = 0 : i > 100 && (i = 100), g.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i), this.elements.display.seekTooltip.style.left = i + "%", u.is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && a("mouseenter" === e.type);
        }
      }
    }, timeUpdate: function timeUpdate(e) {
      var t = !u.is.element(this.elements.display.duration) && this.config.invertTime;g.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || g.updateProgress.call(this, e);
    }, durationUpdate: function durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        var e = u.is.element(this.elements.display.duration);!e && this.config.displayDuration && this.paused && g.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && g.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), g.updateSeekTooltip.call(this);
      }
    }, toggleTab: function toggleTab(e, t) {
      u.toggleHidden(this.elements.settings.tabs[e], !t);
    }, setQualityMenu: function setQualityMenu(e) {
      var t = this;if (u.is.element(this.elements.settings.panes.quality)) {
        var i = this.elements.settings.panes.quality.querySelector("ul");u.is.array(e) && (this.options.quality = e.filter(function (e) {
          return t.config.quality.options.includes(e);
        }));var n = !u.is.empty(this.options.quality) && this.options.quality.length > 1;if (g.toggleTab.call(this, "quality", n), g.checkMenu.call(this), n) {
          u.emptyElement(i);this.options.quality.sort(function (e, i) {
            var n = t.config.quality.options;return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
          }).forEach(function (e) {
            var n = g.getLabel.call(t, "quality", e);g.createMenuItem.call(t, e, i, "quality", n, function (e) {
              var i = h("qualityBadge." + e, t.config);return i.length ? g.createBadge.call(t, i) : null;
            }(e));
          }), g.updateSetting.call(this, "quality", i);
        }
      }
    }, getLabel: function getLabel(e, t) {
      switch (e) {case "speed":
          return 1 === t ? h("normal", this.config) : t + "&times;";case "quality":
          if (u.is.number(t)) {
            var i = h("qualityLabel." + t, this.config);return i.length ? i : t + "p";
          }return u.toTitleCase(t);case "captions":
          return f.getLabel.call(this);default:
          return null;}
    }, updateSetting: function updateSetting(e, t, i) {
      var n = this.elements.settings.panes[e],
          s = null,
          a = t;switch (e) {case "captions":
          s = this.captions.active ? this.options.captions.length > 2 || !this.options.captions.some(function (e) {
            return "enabled" === e;
          }) ? this.captions.language : "enabled" : "";break;default:
          if (s = u.is.empty(i) ? this[e] : i, u.is.empty(s) && (s = this.config[e].default), !u.is.empty(this.options[e]) && !this.options[e].includes(s)) return void this.debug.warn("Unsupported value of '" + s + "' for " + e);if (!this.config[e].options.includes(s)) return void this.debug.warn("Disabled value of '" + s + "' for " + e);}if (u.is.element(a) || (a = n && n.querySelector("ul")), u.is.element(a)) {
        this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = g.getLabel.call(this, e, s);var r = a && a.querySelector('input[value="' + s + '"]');u.is.element(r) && (r.checked = !0);
      }
    }, setCaptionsMenu: function setCaptionsMenu() {
      var e = this,
          t = this.elements.settings.panes.captions.querySelector("ul"),
          i = f.getTracks.call(this).length;if (g.toggleTab.call(this, "captions", i), u.emptyElement(t), g.checkMenu.call(this), i) {
        var n = f.getTracks.call(this).map(function (t) {
          return { language: u.is.empty(t.language) ? "enabled" : t.language, label: f.getLabel.call(e, t) };
        });n.unshift({ language: "", label: h("disabled", this.config) }), n.forEach(function (i) {
          g.createMenuItem.call(e, i.language, t, "language", i.label, "enabled" !== i.language ? g.createBadge.call(e, i.language.toUpperCase()) : null, i.language.toLowerCase() === e.language);
        }), g.updateSetting.call(this, "captions", t);
      }
    }, setSpeedMenu: function setSpeedMenu(e) {
      var t = this;if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && u.is.element(this.elements.settings.panes.speed)) {
        u.is.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
          return t.config.speed.options.includes(e);
        });var i = !u.is.empty(this.options.speed) && this.options.speed.length > 1;if (g.toggleTab.call(this, "speed", i), g.checkMenu.call(this), i) {
          var n = this.elements.settings.panes.speed.querySelector("ul");u.emptyElement(n), this.options.speed.forEach(function (e) {
            var i = g.getLabel.call(t, "speed", e);g.createMenuItem.call(t, e, n, "speed", i);
          }), g.updateSetting.call(this, "speed", n);
        }
      }
    }, checkMenu: function checkMenu() {
      var e = this.elements.settings.tabs,
          t = !u.is.empty(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });u.toggleHidden(this.elements.settings.menu, !t);
    }, toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.form,
          i = this.elements.buttons.settings;if (u.is.element(t) && u.is.element(i)) {
        var n = u.is.boolean(e) ? e : u.is.element(t) && t.hasAttribute("hidden");if (u.is.event(e)) {
          var s = u.is.element(t) && t.contains(e.target),
              a = e.target === this.elements.buttons.settings;if (s || !s && !a && n) return;a && e.stopPropagation();
        }u.is.element(i) && i.setAttribute("aria-expanded", n), u.is.element(t) && (u.toggleHidden(t, !n), u.toggleClass(this.elements.container, this.config.classNames.menu.open, n), n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1));
      }
    }, getTabSize: function getTabSize(e) {
      var t = e.cloneNode(!0);t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function (e) {
        var t = e.getAttribute("name");e.setAttribute("name", t + "-clone");
      }), e.parentNode.appendChild(t);var i = t.scrollWidth,
          n = t.scrollHeight;return u.removeElement(t), { width: i, height: n };
    }, showTab: function showTab() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = this.elements.settings.menu,
          i = document.getElementById(e);if (u.is.element(i) && "tabpanel" === i.getAttribute("role")) {
        var n = t.querySelector('[role="tabpanel"]:not([hidden])'),
            s = n.parentNode;if (Array.from(t.querySelectorAll('[aria-controls="' + n.getAttribute("id") + '"]')).forEach(function (e) {
          e.setAttribute("aria-expanded", !1);
        }), d.transitions && !d.reducedMotion) {
          s.style.width = n.scrollWidth + "px", s.style.height = n.scrollHeight + "px";var a = g.getTabSize.call(this, i);u.on(s, u.transitionEndEvent, function e(t) {
            t.target === s && ["width", "height"].includes(t.propertyName) && (s.style.width = "", s.style.height = "", u.off(s, u.transitionEndEvent, e));
          }), s.style.width = a.width + "px", s.style.height = a.height + "px";
        }u.toggleHidden(n, !0), n.setAttribute("tabindex", -1), u.toggleHidden(i, !1);var r = u.getElements.call(this, '[aria-controls="' + e + '"]');Array.from(r).forEach(function (e) {
          e.setAttribute("aria-expanded", !0);
        }), i.removeAttribute("tabindex"), i.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus();
      }
    }, create: function create(e) {
      var t = this;if (u.is.empty(this.config.controls)) return null;var i = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.controls.wrapper));if (this.config.controls.includes("restart") && i.appendChild(g.createButton.call(this, "restart")), this.config.controls.includes("rewind") && i.appendChild(g.createButton.call(this, "rewind")), this.config.controls.includes("play") && i.appendChild(g.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && i.appendChild(g.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
        var n = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.progress)),
            s = g.createRange.call(this, "seek", { id: "plyr-seek-" + e.id });if (n.appendChild(s.label), n.appendChild(s.input), n.appendChild(g.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
          var a = u.createElement("span", { class: this.config.classNames.tooltip }, "00:00");n.appendChild(a), this.elements.display.seekTooltip = a;
        }this.elements.progress = n, i.appendChild(this.elements.progress);
      }if (this.config.controls.includes("current-time") && i.appendChild(g.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && i.appendChild(g.createTime.call(this, "duration")), this.config.controls.includes("mute") && i.appendChild(g.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
        var r = u.createElement("div", { class: "plyr__volume" }),
            l = { max: 1, step: .05, value: this.config.volume },
            o = g.createRange.call(this, "volume", u.extend(l, { id: "plyr-volume-" + e.id }));r.appendChild(o.label), r.appendChild(o.input), this.elements.volume = r, i.appendChild(r);
      }if (this.config.controls.includes("captions") && i.appendChild(g.createButton.call(this, "captions")), this.config.controls.includes("settings") && !u.is.empty(this.config.settings)) {
        var c = u.createElement("div", { class: "plyr__menu", hidden: "" });c.appendChild(g.createButton.call(this, "settings", { id: "plyr-settings-toggle-" + e.id, "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id, "aria-expanded": !1 }));var m = u.createElement("form", { class: "plyr__menu__container", id: "plyr-settings-" + e.id, hidden: "", "aria-labelled-by": "plyr-settings-toggle-" + e.id, role: "tablist", tabindex: -1 }),
            f = u.createElement("div"),
            y = u.createElement("div", { id: "plyr-settings-" + e.id + "-home", "aria-labelled-by": "plyr-settings-toggle-" + e.id, role: "tabpanel" }),
            v = u.createElement("ul", { role: "tablist" });this.config.settings.forEach(function (i) {
          var n = u.createElement("li", { role: "tab", hidden: "" }),
              s = u.createElement("button", u.extend(u.getAttributesFromSelector(t.config.selectors.buttons.settings), { type: "button", class: t.config.classNames.control + " " + t.config.classNames.control + "--forward", id: "plyr-settings-" + e.id + "-" + i + "-tab", "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id + "-" + i, "aria-expanded": !1 }), h(i, t.config)),
              a = u.createElement("span", { class: t.config.classNames.menu.value });a.innerHTML = e[i], s.appendChild(a), n.appendChild(s), v.appendChild(n), t.elements.settings.tabs[i] = n;
        }), y.appendChild(v), f.appendChild(y), this.config.settings.forEach(function (i) {
          var n = u.createElement("div", { id: "plyr-settings-" + e.id + "-" + i, hidden: "", "aria-labelled-by": "plyr-settings-" + e.id + "-" + i + "-tab", role: "tabpanel", tabindex: -1 }),
              s = u.createElement("button", { type: "button", class: t.config.classNames.control + " " + t.config.classNames.control + "--back", "aria-haspopup": !0, "aria-controls": "plyr-settings-" + e.id + "-home", "aria-expanded": !1 }, h(i, t.config));n.appendChild(s);var a = u.createElement("ul");n.appendChild(a), f.appendChild(n), t.elements.settings.panes[i] = n;
        }), m.appendChild(f), c.appendChild(m), i.appendChild(c), this.elements.settings.form = m, this.elements.settings.menu = c;
      }return this.config.controls.includes("pip") && d.pip && i.appendChild(g.createButton.call(this, "pip")), this.config.controls.includes("airplay") && d.airplay && i.appendChild(g.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && i.appendChild(g.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(g.createButton.call(this, "play-large")), this.elements.controls = i, this.isHTML5 && g.setQualityMenu.call(this, p.getQualityOptions.call(this)), g.setSpeedMenu.call(this), i;
    }, inject: function inject() {
      var e = this;if (this.config.loadSprite) {
        var t = g.getIconUrl.call(this);t.cors && u.loadSprite(t.url, "sprite-plyr");
      }this.id = Math.floor(1e4 * Math.random());var i = null;this.elements.controls = null;var n = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
          s = !0;u.is.string(this.config.controls) || u.is.element(this.config.controls) ? i = this.config.controls : u.is.function(this.config.controls) ? i = this.config.controls.call(this, n) : (i = g.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: f.getLabel.call(this) }), s = !1);var a = function a(e) {
        var t = e;return Object.entries(n).forEach(function (e) {
          var i = r(e, 2),
              n = i[0],
              s = i[1];t = u.replaceAll(t, "{" + n + "}", s);
        }), t;
      };s && (u.is.string(this.config.controls) ? i = a(i) : u.is.element(i) && (i.innerHTML = a(i.innerHTML)));var l = void 0;if (u.is.string(this.config.selectors.controls.container) && (l = document.querySelector(this.config.selectors.controls.container)), u.is.element(l) || (l = this.elements.container), u.is.element(i) ? l.appendChild(i) : i && l.insertAdjacentHTML("beforeend", i), u.is.element(this.elements.controls) || g.findElements.call(this), window.navigator.userAgent.includes("Edge") && u.repaint(l), this.config.tooltips.controls) {
        var o = u.getElements.call(this, [this.config.selectors.controls.wrapper, " ", this.config.selectors.labels, " .", this.config.classNames.hidden].join(""));Array.from(o).forEach(function (t) {
          u.toggleClass(t, e.config.classNames.hidden, !1), u.toggleClass(t, e.config.classNames.tooltip, !0), t.setAttribute("role", "tooltip");
        });
      }
    } },
      f = { setup: function setup() {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !d.textTracks) u.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && g.setCaptionsMenu.call(this);else {
        if (u.is.element(this.elements.captions) || (this.elements.captions = u.createElement("div", u.getAttributesFromSelector(this.config.selectors.captions)), u.insertAfter(this.elements.captions, this.elements.wrapper)), u.getBrowser().isIE && window.URL) {
          var e = this.media.querySelectorAll("track");Array.from(e).forEach(function (e) {
            var t = e.getAttribute("src"),
                i = u.parseUrl(t);i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && u.fetch(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            }).catch(function () {
              u.removeElement(e);
            });
          });
        }var t = this.storage.get("captions");u.is.boolean(t) || (t = this.config.captions.active), this.toggleCaptions(t), this.config.captions.update && u.on(this.media.textTracks, "addtrack removetrack", f.update.bind(this)), setTimeout(f.update.bind(this), 0);
      }
    }, update: function update() {
      var e = f.getTracks.call(this);if (this.options.captions = e.map(function (e) {
        return e.language;
      }), !this.language) {
        var t = this.config.captions.language;if ("auto" === t) {
          var i = (navigator.language || navigator.userLanguage).split("-");t = r(i, 1)[0];
        }this.language = this.storage.get("language") || (t || "").toLowerCase();
      }u.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !u.is.empty(f.getTracks.call(this))), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && g.setCaptionsMenu.call(this);
    }, setLanguage: function setLanguage() {
      var e = this;if (this.isHTML5 && this.isVideo) {
        f.getTracks.call(this).forEach(function (t) {
          u.on(t, "cuechange", function (t) {
            return f.setCue.call(e, t);
          }), t.mode = "hidden";
        });var t = f.getCurrentTrack.call(this);u.is.track(t) && Array.from(t.activeCues || []).length && f.setCue.call(this, t);
      } else this.isVimeo && this.captions.active && this.embed.enableTextTrack(this.language);
    }, getTracks: function getTracks() {
      return u.is.nullOrUndefined(this.media) ? [] : Array.from(this.media.textTracks || []).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    }, getCurrentTrack: function getCurrentTrack() {
      var e = this,
          t = f.getTracks.call(this);if (!t.length) return null;var i = t.find(function (t) {
        return t.language.toLowerCase() === e.language;
      });(i || (i = u.getElement.call(this, "track[default]")), i) || (i = r(t, 1)[0]);return i;
    }, getLabel: function getLabel(e) {
      var t = e;return !u.is.track(t) && d.textTracks && this.captions.active && (t = f.getCurrentTrack.call(this)), u.is.track(t) ? u.is.empty(t.label) ? u.is.empty(t.language) ? h("enabled", this.config) : e.language.toUpperCase() : t.label : h("disabled", this.config);
    }, setCue: function setCue(e) {
      var t = u.is.event(e) ? e.target : e,
          i = t.activeCues,
          n = i.length && i[0];t === f.getCurrentTrack.call(this) && (u.is.cue(n) ? f.setText.call(this, n.getCueAsHTML()) : f.setText.call(this, null), u.dispatchEvent.call(this, this.media, "cuechange"));
    }, setText: function setText(e) {
      if (this.supported.ui) if (u.is.element(this.elements.captions)) {
        var t = u.createElement("span");u.emptyElement(this.elements.captions);var i = u.is.nullOrUndefined(e) ? "" : e;u.is.string(i) ? t.innerText = i.trim() : t.appendChild(i), this.elements.captions.appendChild(t);
      } else this.debug.warn("No captions element to render to");
    } },
      y = function y() {},
      v = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];n(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled");
    }return s(e, [{ key: "log", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : y;
      } }, { key: "warn", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : y;
      } }, { key: "error", get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : y;
      } }]), e;
  }(),
      b = { enabled: !0, title: "", debug: !1, autoplay: !1, autopause: !0, seekTime: 10, volume: 1, muted: !1, duration: null, displayDuration: !0, invertTime: !0, toggleInvert: !0, ratio: "16:9", clickToPlay: !0, hideControls: !0, resetOnEnd: !1, disableContextMenu: !0, loadSprite: !0, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.3.10/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, "default"] }, loop: { active: !1 }, speed: { selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2] }, keyboard: { focused: !0, global: !1 }, tooltips: { controls: !1, seek: !0 }, captions: { active: !1, language: "auto", update: !1 }, fullscreen: { enabled: !0, fallback: !0, iosNative: !1 }, storage: { enabled: !0, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/v2/video/{0}.json" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", menu: { quality: ".js-plyr__menu__list--quality" } }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus" }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, keys: { google: null }, ads: { enabled: !1, publisherId: "" } },
      k = u.getBrowser();function w() {
    if (this.enabled) {
      var e = this.player.elements.buttons.fullscreen;u.is.element(e) && u.toggleState(e, this.active), u.dispatchEvent.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), k.isIos || u.trapFocus.call(this.player, this.target, this.active);
    }
  }function E() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];e ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", u.toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, e), w.call(this);
  }var T = function () {
    function e(t) {
      var i = this;n(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = { x: 0, y: 0 }, u.on(document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function () {
        w.call(i);
      }), u.on(this.player.elements.container, "dblclick", function (e) {
        u.is.element(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle();
      }), this.update();
    }return s(e, [{ key: "update", value: function value() {
        this.enabled ? this.player.debug.log((e.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), u.toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      } }, { key: "enter", value: function value() {
        this.enabled && (k.isIos && this.player.config.fullscreen.iosNative ? this.player.playing && this.target.webkitEnterFullscreen() : e.native ? this.prefix ? u.is.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : E.call(this, !0));
      } }, { key: "exit", value: function value() {
        if (this.enabled) if (k.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();else if (e.native) {
          if (this.prefix) {
            if (!u.is.empty(this.prefix)) {
              var t = "moz" === this.prefix ? "Cancel" : "Exit";document["" + this.prefix + t + this.property]();
            }
          } else (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else E.call(this, !1);
      } }, { key: "toggle", value: function value() {
        this.active ? this.exit() : this.enter();
      } }, { key: "enabled", get: function get() {
        return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      } }, { key: "active", get: function get() {
        return !!this.enabled && (e.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : u.hasClass(this.target, this.player.config.classNames.fullscreen.fallback));
      } }, { key: "target", get: function get() {
        return k.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
      } }], [{ key: "native", get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      } }, { key: "prefix", get: function get() {
        if (u.is.function(document.exitFullscreen)) return "";var e = "";return ["webkit", "moz", "ms"].some(function (t) {
          return !(!u.is.function(document[t + "ExitFullscreen"]) && !u.is.function(document[t + "CancelFullScreen"])) && (e = t, !0);
        }), e;
      } }, { key: "property", get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      } }]), e;
  }(),
      A = u.getBrowser(),
      C = { addStyleHook: function addStyleHook() {
      u.toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), !0), u.toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    }, toggleNativeControls: function toggleNativeControls() {
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    }, build: function build() {
      var e = this;if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void C.toggleNativeControls.call(this, !0);u.is.element(this.elements.controls) || (g.inject.call(this), this.listeners.controls()), C.toggleNativeControls.call(this), this.isHTML5 && f.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, g.updateVolume.call(this), g.timeUpdate.call(this), C.checkPlaying.call(this), u.toggleClass(this.elements.container, this.config.classNames.pip.supported, d.pip && this.isHTML5 && this.isVideo), u.toggleClass(this.elements.container, this.config.classNames.airplay.supported, d.airplay && this.isHTML5), u.toggleClass(this.elements.container, this.config.classNames.isIos, A.isIos), u.toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        u.dispatchEvent.call(e, e.media, "ready");
      }, 0), C.setTitle.call(this), this.poster && this.elements.poster && !this.elements.poster.style.backgroundImage && C.setPoster.call(this, this.poster), this.config.duration && g.durationUpdate.call(this);
    }, setTitle: function setTitle() {
      var e = h("play", this.config);if (u.is.string(this.config.title) && !u.is.empty(this.config.title) && (e += ", " + this.config.title, this.elements.container.setAttribute("aria-label", this.config.title)), u.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = u.getElement.call(this, "iframe");if (!u.is.element(t)) return;var i = u.is.empty(this.config.title) ? "video" : this.config.title,
            n = h("frameTitle", this.config);t.setAttribute("title", n.replace("{title}", i));
      }
    }, togglePoster: function togglePoster(e) {
      u.toggleClass(this.elements.container, this.config.classNames.posterEnabled, e);
    }, setPoster: function setPoster(e) {
      var t = this;if (this.media.setAttribute("poster", e), !u.is.element(this.elements.poster)) return Promise.reject();var i = u.loadImage(e).then(function () {
        return t.elements.poster.style.backgroundImage = "url('" + e + "')", Object.assign(t.elements.poster.style, { backgroundImage: "url('" + e + "')", backgroundSize: "" }), C.togglePoster.call(t, !0), e;
      });return i.catch(function () {
        return C.togglePoster.call(t, !1);
      }), i;
    }, checkPlaying: function checkPlaying(e) {
      u.toggleClass(this.elements.container, this.config.classNames.playing, this.playing), u.toggleClass(this.elements.container, this.config.classNames.paused, this.paused), u.toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped), u.toggleState(this.elements.buttons.play, this.playing), u.is.event(e) && "timeupdate" === e.type || C.toggleControls.call(this);
    }, checkLoading: function checkLoading(e) {
      var t = this;this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        u.toggleClass(t.elements.container, t.config.classNames.loading, t.loading), C.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    }, toggleControls: function toggleControls(e) {
      var t = this.elements.controls;t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover));
    } },
      S = u.getBrowser(),
      P = function () {
    function e(t) {
      n(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }return s(e, [{ key: "handleKey", value: function value(e) {
        var t = this,
            i = e.keyCode ? e.keyCode : e.which,
            n = "keydown" === e.type,
            s = n && i === this.lastKey;if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && u.is.number(i)) {
          if (n) {
            var a = u.getFocusElement();if (u.is.element(a) && u.matches(a, this.player.config.selectors.editable)) return;switch ([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
                s || (t.player.currentTime = t.player.duration / 10 * (i - 48));break;case 32:case 75:
                s || this.player.togglePlay();break;case 38:
                this.player.increaseVolume(.1);break;case 40:
                this.player.decreaseVolume(.1);break;case 77:
                s || (this.player.muted = !this.player.muted);break;case 39:
                this.player.forward();break;case 37:
                this.player.rewind();break;case 70:
                this.player.fullscreen.toggle();break;case 67:
                s || this.player.toggleCaptions();break;case 76:
                this.player.loop = !this.player.loop;}!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === i && this.player.fullscreen.toggle(), this.lastKey = i;
          } else this.lastKey = null;
        }
      } }, { key: "toggleMenu", value: function value(e) {
        g.toggleMenu.call(this.player, e);
      } }, { key: "firstTouch", value: function value() {
        this.player.touch = !0, u.toggleClass(this.player.elements.container, this.player.config.classNames.isTouch, !0), u.off(document.body, "touchstart", this.firstTouch);
      } }, { key: "global", value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];this.player.config.keyboard.global && u.toggleListener(window, "keydown keyup", this.handleKey, e, !1), u.toggleListener(document.body, "click", this.toggleMenu, e), u.on(document.body, "touchstart", this.firstTouch);
      } }, { key: "container", value: function value() {
        var e = this;!this.player.config.keyboard.global && this.player.config.keyboard.focused && u.on(this.player.elements.container, "keydown keyup", this.handleKey, !1), u.on(this.player.elements.container, "focusout", function (t) {
          u.toggleClass(t.target, e.player.config.classNames.tabFocus, !1);
        }), u.on(this.player.elements.container, "keydown", function (t) {
          9 === t.keyCode && setTimeout(function () {
            u.toggleClass(u.getFocusElement(), e.player.config.classNames.tabFocus, !0);
          }, 0);
        }), u.on(this.player.elements.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
          var i = e.player.elements.controls;"enterfullscreen" === t.type && (i.pressed = !1, i.hover = !1);var n = 0;["touchstart", "touchmove", "mousemove"].includes(t.type) && (C.toggleControls.call(e.player, !0), n = e.player.touch ? 3e3 : 2e3), clearTimeout(e.player.timers.controls), e.player.timers.controls = setTimeout(function () {
            return C.toggleControls.call(e.player, !1);
          }, n);
        });
      } }, { key: "media", value: function value() {
        var e = this;if (u.on(this.player.media, "timeupdate seeking seeked", function (t) {
          return g.timeUpdate.call(e.player, t);
        }), u.on(this.player.media, "durationchange loadeddata loadedmetadata", function (t) {
          return g.durationUpdate.call(e.player, t);
        }), u.on(this.player.media, "loadeddata", function () {
          u.toggleHidden(e.player.elements.volume, !e.player.hasAudio), u.toggleHidden(e.player.elements.buttons.mute, !e.player.hasAudio);
        }), u.on(this.player.media, "ended", function () {
          e.player.isHTML5 && e.player.isVideo && e.player.config.resetOnEnd && e.player.restart();
        }), u.on(this.player.media, "progress playing seeking seeked", function (t) {
          return g.updateProgress.call(e.player, t);
        }), u.on(this.player.media, "volumechange", function (t) {
          return g.updateVolume.call(e.player, t);
        }), u.on(this.player.media, "playing play pause ended emptied timeupdate", function (t) {
          return C.checkPlaying.call(e.player, t);
        }), u.on(this.player.media, "waiting canplay seeked playing", function (t) {
          return C.checkLoading.call(e.player, t);
        }), u.on(this.player.media, "playing", function () {
          e.player.ads && e.player.ads.enabled && !e.player.ads.initialized && e.player.ads.managerPromise.then(function () {
            return e.player.ads.play();
          }).catch(function () {
            return e.player.play();
          });
        }), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
          var t = u.getElement.call(this.player, "." + this.player.config.classNames.video);if (!u.is.element(t)) return;u.on(t, "click", function () {
            e.player.config.hideControls && e.player.touch && !e.player.paused || (e.player.paused ? e.player.play() : e.player.ended ? (e.player.restart(), e.player.play()) : e.player.pause());
          });
        }this.player.supported.ui && this.player.config.disableContextMenu && u.on(this.player.elements.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), u.on(this.player.media, "volumechange", function () {
          e.player.storage.set({ volume: e.player.volume, muted: e.player.muted });
        }), u.on(this.player.media, "ratechange", function () {
          g.updateSetting.call(e.player, "speed"), e.player.storage.set({ speed: e.player.speed });
        }), u.on(this.player.media, "qualityrequested", function (t) {
          e.player.storage.set({ quality: t.detail.quality });
        }), u.on(this.player.media, "qualitychange", function (t) {
          g.updateSetting.call(e.player, "quality", null, t.detail.quality);
        }), u.on(this.player.media, "languagechange", function () {
          g.updateSetting.call(e.player, "captions"), e.player.storage.set({ language: e.player.language });
        }), u.on(this.player.media, "captionsenabled captionsdisabled", function () {
          g.updateSetting.call(e.player, "captions"), e.player.storage.set({ captions: e.player.captions.active });
        }), u.on(this.player.media, this.player.config.events.concat(["keyup", "keydown"]).join(" "), function (t) {
          var i = {};"error" === t.type && (i = e.player.media.error), u.dispatchEvent.call(e.player, e.player.elements.container, t.type, !0, i);
        });
      } }, { key: "controls", value: function value() {
        var e = this,
            t = S.isIE ? "change" : "input",
            i = function i(t, _i4, n) {
          var s = e.player.config.listeners[n],
              a = !0;u.is.function(s) && (a = s.call(e.player, t)), a && u.is.function(_i4) && _i4.call(e.player, t);
        },
            n = function n(t, _n5, s, a) {
          var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              l = e.player.config.listeners[a],
              o = u.is.function(l);u.on(t, _n5, function (e) {
            return i(e, s, a);
          }, r && !o);
        };n(this.player.elements.buttons.play, "click", this.player.togglePlay, "play"), n(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), n(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), n(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), n(this.player.elements.buttons.mute, "click", function () {
          e.player.muted = !e.player.muted;
        }, "mute"), n(this.player.elements.buttons.captions, "click", this.player.toggleCaptions), n(this.player.elements.buttons.fullscreen, "click", function () {
          e.player.fullscreen.toggle();
        }, "fullscreen"), n(this.player.elements.buttons.pip, "click", function () {
          e.player.pip = "toggle";
        }, "pip"), n(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), n(this.player.elements.buttons.settings, "click", function (t) {
          g.toggleMenu.call(e.player, t);
        }), n(this.player.elements.settings.form, "click", function (t) {
          t.stopPropagation();var n = function n() {
            var t = "plyr-settings-" + e.player.id + "-home";g.showTab.call(e.player, t);
          };if (u.matches(t.target, e.player.config.selectors.inputs.language)) i(t, function () {
            e.player.language = t.target.value, n();
          }, "language");else if (u.matches(t.target, e.player.config.selectors.inputs.quality)) i(t, function () {
            e.player.quality = t.target.value, n();
          }, "quality");else if (u.matches(t.target, e.player.config.selectors.inputs.speed)) i(t, function () {
            e.player.speed = parseFloat(t.target.value), n();
          }, "speed");else {
            var s = t.target;g.showTab.call(e.player, s.getAttribute("aria-controls"));
          }
        }), n(this.player.elements.inputs.seek, "mousedown mousemove", function (t) {
          var i = e.player.elements.progress.getBoundingClientRect(),
              n = 100 / i.width * (t.pageX - i.left);t.currentTarget.setAttribute("seek-value", n);
        }), n(this.player.elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
          var i = t.currentTarget,
              n = i.hasAttribute("play-on-seeked"),
              s = ["mouseup", "touchend", "keyup"].includes(t.type);n && s ? (i.removeAttribute("play-on-seeked"), e.player.play()) : !s && e.player.playing && (i.setAttribute("play-on-seeked", ""), e.player.pause());
        }), n(this.player.elements.inputs.seek, t, function (t) {
          var i = t.currentTarget,
              n = i.getAttribute("seek-value");u.is.empty(n) && (n = i.value), i.removeAttribute("seek-value"), e.player.currentTime = n / i.max * e.player.duration;
        }, "seek"), this.player.config.toggleInvert && !u.is.element(this.player.elements.display.duration) && n(this.player.elements.display.currentTime, "click", function () {
          0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, g.timeUpdate.call(e.player));
        }), n(this.player.elements.inputs.volume, t, function (t) {
          e.player.volume = t.target.value;
        }, "volume"), S.isWebkit && n(u.getElements.call(this.player, 'input[type="range"]'), "input", function (t) {
          g.updateRangeFill.call(e.player, t.target);
        }), n(this.player.elements.progress, "mouseenter mouseleave mousemove", function (t) {
          return g.updateSeekTooltip.call(e.player, t);
        }), n(this.player.elements.controls, "mouseenter mouseleave", function (t) {
          e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type;
        }), n(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function (t) {
          e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type);
        }), n(this.player.elements.controls, "focusin focusout", function (t) {
          var i = e.player,
              n = i.config,
              s = i.elements,
              a = i.timers;if (u.toggleClass(s.controls, n.classNames.noTransition, "focusin" === t.type), C.toggleControls.call(e.player, "focusin" === t.type), "focusin" === t.type) {
            setTimeout(function () {
              u.toggleClass(s.controls, n.classNames.noTransition, !1);
            }, 0);var r = e.touch ? 3e3 : 4e3;clearTimeout(a.controls), a.controls = setTimeout(function () {
              return C.toggleControls.call(e.player, !1);
            }, r);
          }
        }), n(this.player.elements.inputs.volume, "wheel", function (t) {
          var i = t.webkitDirectionInvertedFromDevice,
              n = 0;(t.deltaY < 0 || t.deltaX > 0) && (i ? (e.player.decreaseVolume(.02), n = -1) : (e.player.increaseVolume(.02), n = 1)), (t.deltaY > 0 || t.deltaX < 0) && (i ? (e.player.increaseVolume(.02), n = 1) : (e.player.decreaseVolume(.02), n = -1)), (1 === n && e.player.media.volume < 1 || -1 === n && e.player.media.volume > 0) && t.preventDefault();
        }, "volume", !1);
      } }, { key: "clear", value: function value() {
        this.global(!1);
      } }]), e;
  }();function x(e) {
    this.media.paused === e && (this.media.paused = !e, u.dispatchEvent.call(this, this.media, e ? "play" : "pause"));
  }var N = { setup: function setup() {
      var e = this;u.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), N.setAspectRatio.call(this), u.is.object(window.Vimeo) ? N.ready.call(this) : u.loadScript(this.config.urls.vimeo.sdk).then(function () {
        N.ready.call(e);
      }).catch(function (t) {
        e.debug.warn("Vimeo API failed to load", t);
      });
    }, setAspectRatio: function setAspectRatio(e) {
      var t = u.is.string(e) ? e.split(":") : this.config.ratio.split(":"),
          i = 100 / t[0] * t[1];if (this.elements.wrapper.style.paddingBottom = i + "%", this.supported.ui) {
        var n = (240 - i) / 4.8;this.media.style.transform = "translateY(-" + n + "%)";
      }
    }, ready: function ready() {
      var e = this,
          t = this,
          i = { loop: t.config.loop.active, autoplay: t.autoplay, byline: !1, portrait: !1, title: !1, speed: !0, transparent: 0, gesture: "media", playsinline: !this.config.fullscreen.iosNative },
          n = u.buildUrlParams(i),
          s = t.media.getAttribute("src");u.is.empty(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));var a = u.parseVimeoId(s),
          r = u.createElement("iframe"),
          l = u.format(t.config.urls.vimeo.iframe, a, n);r.setAttribute("src", l), r.setAttribute("allowfullscreen", ""), r.setAttribute("allowtransparency", ""), r.setAttribute("allow", "autoplay");var o = u.createElement("div", { class: t.config.classNames.embedContainer });o.appendChild(r), t.media = u.replaceElement(o, t.media), u.fetch(u.format(t.config.urls.vimeo.api, a), "json").then(function (e) {
        if (!u.is.empty(e)) {
          var i = new URL(e[0].thumbnail_large);i.pathname = i.pathname.split("_")[0] + ".jpg", C.setPoster.call(t, i.href);
        }
      }), t.embed = new window.Vimeo.Player(r, { autopause: t.config.autopause, muted: t.muted }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return x.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return x.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };var c = t.media.currentTime;Object.defineProperty(t.media, "currentTime", { get: function get() {
          return c;
        }, set: function set(e) {
          var i = t.embed,
              n = t.media,
              s = t.paused,
              a = t.volume;n.seeking = !0, u.dispatchEvent.call(t, n, "seeking"), Promise.resolve(s && i.setVolume(0)).then(function () {
            return i.setCurrentTime(e);
          }).then(function () {
            return s && i.pause();
          }).then(function () {
            return s && i.setVolume(a);
          }).catch(function () {});
        } });var d = t.config.speed.selected;Object.defineProperty(t.media, "playbackRate", { get: function get() {
          return d;
        }, set: function set(e) {
          t.embed.setPlaybackRate(e).then(function () {
            d = e, u.dispatchEvent.call(t, t.media, "ratechange");
          }).catch(function (e) {
            "Error" === e.name && g.setSpeedMenu.call(t, []);
          });
        } });var p = t.config.volume;Object.defineProperty(t.media, "volume", { get: function get() {
          return p;
        }, set: function set(e) {
          t.embed.setVolume(e).then(function () {
            p = e, u.dispatchEvent.call(t, t.media, "volumechange");
          });
        } });var h = t.config.muted;Object.defineProperty(t.media, "muted", { get: function get() {
          return h;
        }, set: function set(e) {
          var i = !!u.is.boolean(e) && e;t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
            h = i, u.dispatchEvent.call(t, t.media, "volumechange");
          });
        } });var m = t.config.loop;Object.defineProperty(t.media, "loop", { get: function get() {
          return m;
        }, set: function set(e) {
          var i = u.is.boolean(e) ? e : t.config.loop.active;t.embed.setLoop(i).then(function () {
            m = i;
          });
        } });var y = void 0;t.embed.getVideoUrl().then(function (e) {
        y = e;
      }).catch(function (t) {
        e.debug.warn(t);
      }), Object.defineProperty(t.media, "currentSrc", { get: function get() {
          return y;
        } }), Object.defineProperty(t.media, "ended", { get: function get() {
          return t.currentTime === t.duration;
        } }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (t) {
        var i = u.getAspectRatio(t[0], t[1]);N.setAspectRatio.call(e, i);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (i) {
        t.config.title = i, C.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        c = e, u.dispatchEvent.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, u.dispatchEvent.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, f.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var i = null;e.cues.length && (i = u.stripHTML(e.cues[0].text)), f.setText.call(t, i);
      }), t.embed.on("loaded", function () {
        u.is.element(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("play", function () {
        x.call(t, !0), u.dispatchEvent.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        x.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, c = e.seconds, u.dispatchEvent.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, u.dispatchEvent.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && u.dispatchEvent.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, u.dispatchEvent.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, u.dispatchEvent.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, u.dispatchEvent.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, u.dispatchEvent.call(t, t.media, "error");
      }), setTimeout(function () {
        return C.build.call(t);
      }, 0);
    } };function L(e) {
    switch (e) {case "hd2160":
        return 2160;case 2160:
        return "hd2160";case "hd1440":
        return 1440;case 1440:
        return "hd1440";case "hd1080":
        return 1080;case 1080:
        return "hd1080";case "hd720":
        return 720;case 720:
        return "hd720";case "large":
        return 480;case 480:
        return "large";case "medium":
        return 360;case 360:
        return "medium";case "small":
        return 240;case 240:
        return "small";default:
        return "default";}
  }function M(e) {
    this.media.paused === e && (this.media.paused = !e, u.dispatchEvent.call(this, this.media, e ? "play" : "pause"));
  }var I = { setup: function setup() {
      var e = this;u.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), I.setAspectRatio.call(this), u.is.object(window.YT) && u.is.function(window.YT.Player) ? I.ready.call(this) : (u.loadScript(this.config.urls.youtube.sdk).catch(function (t) {
        e.debug.warn("YouTube API failed to load", t);
      }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
        I.ready.call(e);
      }), window.onYouTubeIframeAPIReady = function () {
        window.onYouTubeReadyCallbacks.forEach(function (e) {
          e();
        });
      });
    }, getTitle: function getTitle(e) {
      var t = this;if (u.is.function(this.embed.getVideoData)) {
        var i = this.embed.getVideoData().title;if (u.is.empty(i)) return this.config.title = i, void C.setTitle.call(this);
      }var n = this.config.keys.google;if (u.is.string(n) && !u.is.empty(n)) {
        var s = u.format(this.config.urls.youtube.api, e, n);u.fetch(s).then(function (e) {
          u.is.object(e) && (t.config.title = e.items[0].snippet.title, C.setTitle.call(t));
        }).catch(function () {});
      }
    }, setAspectRatio: function setAspectRatio() {
      var e = this.config.ratio.split(":");this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%";
    }, ready: function ready() {
      var e = this,
          t = e.media.getAttribute("id");if (u.is.empty(t) || !t.startsWith("youtube-")) {
        var i = e.media.getAttribute("src");u.is.empty(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));var n = u.parseYouTubeId(i),
            s = u.generateId(e.provider),
            a = u.createElement("div", { id: s });e.media = u.replaceElement(a, e.media);var r = function r(e) {
          return "https://img.youtube.com/vi/" + n + "/" + e + "default.jpg";
        };u.loadImage(r("maxres"), 121).catch(function () {
          return u.loadImage(r("sd"), 121);
        }).catch(function () {
          return u.loadImage(r("hq"));
        }).then(function (t) {
          return C.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        }), e.embed = new window.YT.Player(s, { videoId: n, playerVars: { autoplay: e.config.autoplay ? 1 : 0, controls: e.supported.ui ? 0 : 1, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, disablekb: 1, playsinline: 1, widget_referrer: window ? window.location.href : null, cc_load_policy: e.captions.active ? 1 : 0, cc_lang_pref: e.config.captions.language }, events: { onError: function onError(t) {
              if (!u.is.object(e.media.error)) {
                var i = { code: t.data };switch (t.data) {case 2:
                    i.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";break;case 5:
                    i.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";break;case 100:
                    i.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";break;case 101:case 150:
                    i.message = "The owner of the requested video does not allow it to be played in embedded players.";break;default:
                    i.message = "An unknown error occured";}e.media.error = i, u.dispatchEvent.call(e, e.media, "error");
              }
            }, onPlaybackQualityChange: function onPlaybackQualityChange() {
              u.dispatchEvent.call(e, e.media, "qualitychange", !1, { quality: e.media.quality });
            }, onPlaybackRateChange: function onPlaybackRateChange(t) {
              var i = t.target;e.media.playbackRate = i.getPlaybackRate(), u.dispatchEvent.call(e, e.media, "ratechange");
            }, onReady: function onReady(t) {
              var i = t.target;I.getTitle.call(e, n), e.media.play = function () {
                M.call(e, !0), i.playVideo();
              }, e.media.pause = function () {
                M.call(e, !1), i.pauseVideo();
              }, e.media.stop = function () {
                i.stopVideo();
              }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", { get: function get() {
                  return Number(i.getCurrentTime());
                }, set: function set(t) {
                  e.paused && e.embed.mute(), e.media.seeking = !0, u.dispatchEvent.call(e, e.media, "seeking"), i.seekTo(t);
                } }), Object.defineProperty(e.media, "playbackRate", { get: function get() {
                  return i.getPlaybackRate();
                }, set: function set(e) {
                  i.setPlaybackRate(e);
                } }), Object.defineProperty(e.media, "quality", { get: function get() {
                  return L(i.getPlaybackQuality());
                }, set: function set(t) {
                  var n = t;i.setPlaybackQuality(L(n)), u.dispatchEvent.call(e, e.media, "qualityrequested", !1, { quality: n });
                } });var s = e.config.volume;Object.defineProperty(e.media, "volume", { get: function get() {
                  return s;
                }, set: function set(t) {
                  s = t, i.setVolume(100 * s), u.dispatchEvent.call(e, e.media, "volumechange");
                } });var a = e.config.muted;Object.defineProperty(e.media, "muted", { get: function get() {
                  return a;
                }, set: function set(t) {
                  var n = u.is.boolean(t) ? t : a;a = n, i[n ? "mute" : "unMute"](), u.dispatchEvent.call(e, e.media, "volumechange");
                } }), Object.defineProperty(e.media, "currentSrc", { get: function get() {
                  return i.getVideoUrl();
                } }), Object.defineProperty(e.media, "ended", { get: function get() {
                  return e.currentTime === e.duration;
                } }), e.options.speed = i.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), u.dispatchEvent.call(e, e.media, "timeupdate"), u.dispatchEvent.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && u.dispatchEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), u.dispatchEvent.call(e, e.media, "canplaythrough"));
              }, 200), setTimeout(function () {
                return C.build.call(e);
              }, 50);
            }, onStateChange: function onStateChange(t) {
              var i,
                  n = t.target;switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, u.dispatchEvent.call(e, e.media, "seeked")), t.data) {case -1:
                  u.dispatchEvent.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), u.dispatchEvent.call(e, e.media, "progress");break;case 0:
                  M.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : u.dispatchEvent.call(e, e.media, "ended");break;case 1:
                  e.media.paused ? e.media.pause() : (M.call(e, !0), u.dispatchEvent.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    u.dispatchEvent.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), u.dispatchEvent.call(e, e.media, "durationchange")), g.setQualityMenu.call(e, (i = n.getAvailableQualityLevels(), u.is.empty(i) ? i : u.dedupe(i.map(function (e) {
                    return L(e);
                  })))));break;case 2:
                  e.muted || e.embed.unMute(), M.call(e, !1);}u.dispatchEvent.call(e, e.elements.container, "statechange", !1, { code: t.data });
            } } });
      }
    } },
      q = { setup: function setup() {
      if (this.media) {
        if (u.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), u.toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && u.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = u.createElement("div", { class: this.config.classNames.video }), u.wrap(this.media, this.elements.wrapper), this.elements.poster = u.createElement("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isEmbed) switch (this.provider) {case "youtube":
            I.setup.call(this);break;case "vimeo":
            N.setup.call(this);} else this.isHTML5 && p.extend.call(this);
      } else this.debug.warn("No media element found!");
    } },
      _ = function () {
    function e(t) {
      var i = this;n(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        i.on("loaded", e), i.on("error", t);
      }), this.load();
    }return s(e, [{ key: "load", value: function value() {
        var e = this;this.enabled && (u.is.object(window.google) && u.is.object(window.google.ima) ? this.ready() : u.loadScript(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        }).catch(function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      } }, { key: "ready", value: function value() {
        var e = this;this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          e.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      } }, { key: "setupIMA", value: function value() {
        this.elements.container = u.createElement("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds();
      } }, { key: "requestAds", value: function value() {
        var e = this,
            t = this.player.elements.container;try {
          this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
            return e.onAdsManagerLoaded(t);
          }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
            return e.onAdError(t);
          }, !1);var i = new google.ima.AdsRequest();i.adTagUrl = this.tagUrl, i.linearAdSlotWidth = t.offsetWidth, i.linearAdSlotHeight = t.offsetHeight, i.nonLinearAdSlotWidth = t.offsetWidth, i.nonLinearAdSlotHeight = t.offsetHeight, i.forceNonLinearFullSlot = !1, i.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(i);
        } catch (e) {
          this.onAdError(e);
        }
      } }, { key: "pollCountdown", value: function value() {
        var e = this;if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer = setInterval(function () {
          var t = u.formatTime(Math.max(e.manager.getRemainingTime(), 0)),
              i = h("advertisement", e.player.config) + " - " + t;e.elements.container.setAttribute("data-badge-text", i);
        }, 100);
      } }, { key: "onAdsManagerLoaded", value: function value(e) {
        var t = this,
            i = new google.ima.AdsRenderingSettings();i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), u.is.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
          if (0 !== e && -1 !== e && e < t.player.duration) {
            var i = t.player.elements.progress;if (u.is.element(i)) {
              var n = 100 / t.player.duration * e,
                  s = u.createElement("span", { class: t.player.config.classNames.cues });s.style.left = n.toString() + "%", i.appendChild(s);
            }
          }
        }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
          return t.onAdError(e);
        }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
          t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
            return t.onAdEvent(e);
          });
        }), this.trigger("loaded");
      } }, { key: "onAdEvent", value: function value(e) {
        var t = this,
            i = this.player.elements.container,
            n = e.getAd(),
            s = function s(e) {
          var i = "ads" + e.replace(/_/g, "").toLowerCase();u.dispatchEvent.call(t.player, t.player.media, i);
        };switch (e.type) {case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), s(e.type), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            s(e.type), this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            s(e.type), this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            s(e.type), this.pollCountdown(), this.resumeContent();break;case google.ima.AdEvent.Type.STARTED:case google.ima.AdEvent.Type.MIDPOINT:case google.ima.AdEvent.Type.COMPLETE:case google.ima.AdEvent.Type.IMPRESSION:case google.ima.AdEvent.Type.CLICK:
            s(e.type);}
      } }, { key: "onAdError", value: function value(e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      } }, { key: "listeners", value: function value() {
        var e = this,
            t = this.player.elements.container,
            i = void 0;this.player.on("ended", function () {
          e.loader.contentComplete();
        }), this.player.on("seeking", function () {
          return i = e.player.currentTime;
        }), this.player.on("seeked", function () {
          var t = e.player.currentTime;u.is.empty(e.cuePoints) || e.cuePoints.forEach(function (n, s) {
            i < n && n < t && (e.manager.discardAdBreak(), e.cuePoints.splice(s, 1));
          });
        }), window.addEventListener("resize", function () {
          e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL);
        });
      } }, { key: "play", value: function value() {
        var e = this,
            t = this.player.elements.container;this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
          e.elements.displayContainer.initialize();try {
            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0;
          } catch (t) {
            e.onAdError(t);
          }
        }).catch(function () {});
      } }, { key: "resumeContent", value: function value() {
        this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play();
      } }, { key: "pauseContent", value: function value() {
        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause();
      } }, { key: "cancel", value: function value() {
        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
      } }, { key: "loadAds", value: function value() {
        var e = this;this.managerPromise.then(function () {
          e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
            e.on("loaded", t), e.player.debug.log(e.manager);
          }), e.requestAds();
        }).catch(function () {});
      } }, { key: "trigger", value: function value(e) {
        for (var t = this, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
          n[s - 1] = arguments[s];
        }var a = this.events[e];u.is.array(a) && a.forEach(function (e) {
          u.is.function(e) && e.apply(t, n);
        });
      } }, { key: "on", value: function value(e, t) {
        return u.is.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      } }, { key: "startSafetyTimer", value: function value(e, t) {
        var i = this;this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function () {
          i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
        }, e);
      } }, { key: "clearSafetyTimer", value: function value(e) {
        u.is.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      } }, { key: "enabled", get: function get() {
        return this.player.isVideo && this.player.config.ads.enabled && !u.is.empty(this.publisherId);
      } }, { key: "tagUrl", get: function get() {
        var e = { AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: this.publisherId };return "https://go.aniview.com/api/adserver6/vast/?" + u.buildUrlParams(e);
      } }]), e;
  }(),
      O = { insertElements: function insertElements(e, t) {
      var i = this;u.is.string(t) ? u.insertElement(e, this.media, { src: t }) : u.is.array(t) && t.forEach(function (t) {
        u.insertElement(e, i.media, t);
      });
    }, change: function change(e) {
      var t = this;u.is.object(e) && "sources" in e && e.sources.length ? (p.cancelRequests.call(this), this.destroy.call(this, function () {
        switch (t.options.quality = [], u.removeElement(t.media), t.media = null, u.is.element(t.elements.container) && t.elements.container.removeAttribute("class"), t.type = e.type, t.provider = u.is.empty(e.sources[0].provider) ? o.html5 : e.sources[0].provider, t.supported = d.check(t.type, t.provider, t.config.playsinline), t.provider + ":" + t.type) {case "html5:video":
            t.media = u.createElement("video");break;case "html5:audio":
            t.media = u.createElement("audio");break;case "youtube:video":case "vimeo:video":
            t.media = u.createElement("div", { src: e.sources[0].src });}t.elements.container.appendChild(t.media), u.is.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), u.is.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), C.addStyleHook.call(t), t.isHTML5 && O.insertElements.call(t, "source", e.sources), t.config.title = e.title, q.setup.call(t), t.isHTML5 && ("tracks" in e && O.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && C.build.call(t), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    } },
      j = function () {
    function e(t, i) {
      var s = this;if (n(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = d.touch, this.media = t, u.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || u.is.nodeList(this.media) || u.is.array(this.media)) && (this.media = this.media[0]), this.config = u.extend({}, b, e.defaults, i || {}, function () {
        try {
          return JSON.parse(s.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = { container: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { menu: null, panes: {}, tabs: {} }, captions: null }, this.captions = { active: null, currentTrack: null }, this.fullscreen = { active: !1 }, this.options = { speed: [], quality: [], captions: [] }, this.debug = new v(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", d), !u.is.nullOrUndefined(this.media) && u.is.element(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (d.check().api) {
            var a = this.media.cloneNode(!0);a.autoplay = !1, this.elements.original = a;var r = this.media.tagName.toLowerCase(),
                p = null,
                h = null,
                m = null;switch (r) {case "div":
                if (p = this.media.querySelector("iframe"), u.is.element(p)) {
                  if (h = p.getAttribute("src"), this.provider = u.getProviderByUrl(h), this.elements.container = this.media, this.media = p, this.elements.container.className = "", m = u.getUrlParams(h), !u.is.empty(m)) {
                    var g = ["1", "true"];g.includes(m.autoplay) && (this.config.autoplay = !0), g.includes(m.loop) && (this.config.loop.active = !0), this.isYouTube ? this.config.playsinline = g.includes(m.playsinline) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);if (u.is.empty(this.provider) || !Object.keys(o).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");this.type = c.video;break;case "video":case "audio":
                this.type = r, this.provider = o.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);break;default:
                return void this.debug.error("Setup failed: unsupported type");}this.supported = d.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.listeners = new P(this), this.storage = new l(this), this.media.plyr = this, u.is.element(this.elements.container) || (this.elements.container = u.createElement("div"), u.wrap(this.media, this.elements.container)), this.elements.container.setAttribute("tabindex", 0), C.addStyleHook.call(this), q.setup.call(this), this.config.debug && u.on(this.elements.container, this.config.events.join(" "), function (e) {
              s.debug.log("event: " + e.type);
            }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && C.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new T(this), this.ads = new _(this), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }return s(e, [{ key: "play", value: function value() {
        return u.is.function(this.media.play) ? this.media.play() : null;
      } }, { key: "pause", value: function value() {
        this.playing && u.is.function(this.media.pause) && this.media.pause();
      } }, { key: "togglePlay", value: function value(e) {
        (u.is.boolean(e) ? e : !this.playing) ? this.play() : this.pause();
      } }, { key: "stop", value: function value() {
        this.isHTML5 ? (this.pause(), this.restart()) : u.is.function(this.media.stop) && this.media.stop();
      } }, { key: "restart", value: function value() {
        this.currentTime = 0;
      } }, { key: "rewind", value: function value(e) {
        this.currentTime = this.currentTime - (u.is.number(e) ? e : this.config.seekTime);
      } }, { key: "forward", value: function value(e) {
        this.currentTime = this.currentTime + (u.is.number(e) ? e : this.config.seekTime);
      } }, { key: "increaseVolume", value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;this.volume = t + (u.is.number(e) ? e : 1);
      } }, { key: "decreaseVolume", value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;this.volume = t - (u.is.number(e) ? e : 1);
      } }, { key: "toggleCaptions", value: function value(e) {
        if (this.supported.ui) {
          var t = u.is.boolean(e) ? e : !this.elements.container.classList.contains(this.config.classNames.captions.active);u.toggleState(this.elements.buttons.captions, t), u.toggleClass(this.elements.container, this.config.classNames.captions.active, t), t !== this.captions.active && (this.captions.active = t, u.dispatchEvent.call(this, this.media, this.captions.active ? "captionsenabled" : "captionsdisabled"));
        }
      } }, { key: "airplay", value: function value() {
        d.airplay && this.media.webkitShowPlaybackTargetPicker();
      } }, { key: "toggleControls", value: function value(e) {
        if (this.supported.ui && !this.isAudio) {
          var t = u.hasClass(this.elements.container, this.config.classNames.hideControls),
              i = void 0 === e ? void 0 : !e,
              n = u.toggleClass(this.elements.container, this.config.classNames.hideControls, i);if (n && this.config.controls.includes("settings") && !u.is.empty(this.config.settings) && g.toggleMenu.call(this, !1), n !== t) {
            var s = n ? "controlshidden" : "controlsshown";u.dispatchEvent.call(this, this.media, s);
          }return !n;
        }return !1;
      } }, { key: "on", value: function value(e, t) {
        u.on(this.elements.container, e, t);
      } }, { key: "off", value: function value(e, t) {
        u.off(this.elements.container, e, t);
      } }, { key: "destroy", value: function value(e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (this.ready) {
          var n = function n() {
            document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (u.removeElement(t.elements.buttons.play), u.removeElement(t.elements.captions), u.removeElement(t.elements.controls), u.removeElement(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), u.is.function(e) && e()) : (t.listeners.clear(), u.replaceElement(t.elements.original, t.elements.container), u.dispatchEvent.call(t, t.elements.original, "destroyed", !0), u.is.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };switch (this.stop(), this.provider + ":" + this.type) {case "html5:video":case "html5:audio":
              clearTimeout(this.timers.loading), C.toggleNativeControls.call(this, !0), n();break;case "youtube:video":
              clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && u.is.function(this.embed.destroy) && this.embed.destroy(), n();break;case "vimeo:video":
              null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200);}
        }
      } }, { key: "supports", value: function value(e) {
        return d.mime.call(this, e);
      } }, { key: "isHTML5", get: function get() {
        return Boolean(this.provider === o.html5);
      } }, { key: "isEmbed", get: function get() {
        return Boolean(this.isYouTube || this.isVimeo);
      } }, { key: "isYouTube", get: function get() {
        return Boolean(this.provider === o.youtube);
      } }, { key: "isVimeo", get: function get() {
        return Boolean(this.provider === o.vimeo);
      } }, { key: "isVideo", get: function get() {
        return Boolean(this.type === c.video);
      } }, { key: "isAudio", get: function get() {
        return Boolean(this.type === c.audio);
      } }, { key: "playing", get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      } }, { key: "paused", get: function get() {
        return Boolean(this.media.paused);
      } }, { key: "stopped", get: function get() {
        return Boolean(this.paused && 0 === this.currentTime);
      } }, { key: "ended", get: function get() {
        return Boolean(this.media.ended);
      } }, { key: "currentTime", set: function set(e) {
        if (this.duration) {
          var t = u.is.number(e) && e > 0;this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to " + this.currentTime + " seconds");
        }
      }, get: function get() {
        return Number(this.media.currentTime);
      } }, { key: "buffered", get: function get() {
        var e = this.media.buffered;return u.is.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      } }, { key: "seeking", get: function get() {
        return Boolean(this.media.seeking);
      } }, { key: "duration", get: function get() {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration || 0;return e || t;
      } }, { key: "volume", set: function set(e) {
        var t = e;u.is.string(t) && (t = Number(t)), u.is.number(t) || (t = this.storage.get("volume")), u.is.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !u.is.empty(e) && this.muted && t > 0 && (this.muted = !1);
      }, get: function get() {
        return Number(this.media.volume);
      } }, { key: "muted", set: function set(e) {
        var t = e;u.is.boolean(t) || (t = this.storage.get("muted")), u.is.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      }, get: function get() {
        return Boolean(this.media.muted);
      } }, { key: "hasAudio", get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      } }, { key: "speed", set: function set(e) {
        var t = null;u.is.number(e) && (t = e), u.is.number(t) || (t = this.storage.get("speed")), u.is.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")");
      }, get: function get() {
        return Number(this.media.playbackRate);
      } }, { key: "quality", set: function set(e) {
        var t = null;if (u.is.empty(e) || (t = Number(e)), u.is.number(t) || (t = this.storage.get("quality")), u.is.number(t) || (t = this.config.quality.selected), u.is.number(t) || (t = this.config.quality.default), this.options.quality.length) {
          if (!this.options.quality.includes(t)) {
            var i = u.closest(this.options.quality, t);this.debug.warn("Unsupported quality option: " + t + ", using " + i + " instead"), t = i;
          }this.config.quality.selected = t, this.media.quality = t;
        }
      }, get: function get() {
        return this.media.quality;
      } }, { key: "loop", set: function set(e) {
        var t = u.is.boolean(e) ? e : this.config.loop.active;this.config.loop.active = t, this.media.loop = t;
      }, get: function get() {
        return Boolean(this.media.loop);
      } }, { key: "source", set: function set(e) {
        O.change.call(this, e);
      }, get: function get() {
        return this.media.currentSrc;
      } }, { key: "poster", set: function set(e) {
        this.isVideo ? C.setPoster.call(this, e) : this.debug.warn("Poster can only be set for video");
      }, get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") : null;
      } }, { key: "autoplay", set: function set(e) {
        var t = u.is.boolean(e) ? e : this.config.autoplay;this.config.autoplay = t;
      }, get: function get() {
        return Boolean(this.config.autoplay);
      } }, { key: "language", set: function set(e) {
        if (u.is.string(e)) if (u.is.empty(e)) this.toggleCaptions(!1);else {
          var t = e.toLowerCase();this.options.captions.includes(t) ? (this.toggleCaptions(!0), "enabled" !== t && this.language !== t && (this.captions.language = t, f.setText.call(this, null), f.setLanguage.call(this), u.dispatchEvent.call(this, this.media, "languagechange"))) : this.debug.warn("Unsupported language option: " + t);
        }
      }, get: function get() {
        return this.captions.language;
      } }, { key: "pip", set: function set(e) {
        var t = "picture-in-picture",
            i = "inline";if (d.pip) {
          var n = u.is.boolean(e) ? e : this.pip === i;this.media.webkitSetPresentationMode(n ? t : i);
        }
      }, get: function get() {
        return d.pip ? this.media.webkitPresentationMode : null;
      } }], [{ key: "supported", value: function value(e, t, i) {
        return d.check(e, t, i);
      } }, { key: "loadSprite", value: function value(e, t) {
        return u.loadSprite(e, t);
      } }, { key: "setup", value: function value(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = null;return u.is.string(t) ? n = Array.from(document.querySelectorAll(t)) : u.is.nodeList(t) ? n = Array.from(t) : u.is.array(t) && (n = t.filter(function (e) {
          return u.is.element(e);
        })), u.is.empty(n) ? null : n.map(function (t) {
          return new e(t, i);
        });
      } }]), e;
  }();return j.defaults = u.cloneDeep(b), j;
});
//# sourceMappingURL=plyr.min.js.map

/*!
* sweetalert2 v7.18.0
* Released under the MIT License.
*/
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Sweetalert2 = factory();
})(this, function () {
  'use strict';

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var consolePrefix = 'SweetAlert2:';

  /**
   * Filter the unique values into a new array
   * @param arr
   */
  var uniqueArray = function uniqueArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */
  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        result.push([key, value]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        result.push([key, inputOptions[key]]);
      });
    }
    return result;
  };

  /**
   * Standardise console warnings
   * @param message
   */
  var warn = function warn(message) {
    console.warn(consolePrefix + ' ' + message);
  };

  /**
   * Standardise console errors
   * @param message
   */
  var error = function error(message) {
    console.error(consolePrefix + ' ' + message);
  };

  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */
  var previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */
  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */
  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };

  var isThenable = function isThenable(arg) {
    return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.then === 'function';
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'overlay',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var version = "7.18.0";

  var argsToParams = function argsToParams(args) {
    var params = {};
    switch (_typeof(args[0])) {
      case 'string':
        ['title', 'html', 'type'].forEach(function (name, index) {
          if (args[index] !== undefined) {
            params[name] = args[index];
          }
        });
        break;

      case 'object':
        _extends(params, args[0]);
        break;

      default:
        error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
        return false;
    }
    return params;
  };

  /**
   * Adapt a legacy inputValidator for use with expectRejections=false
   */
  var adaptInputValidator = function adaptInputValidator(legacyValidator) {
    return function adaptedInputValidator(inputValue, extraParams) {
      return legacyValidator.call(this, inputValue, extraParams).then(function () {
        return undefined;
      }, function (validationError) {
        return validationError;
      });
    };
  };

  var swalPrefix = 'swal2-';

  var prefix = function prefix(items) {
    var result = {};
    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }
    return result;
  };

  var swalClasses = prefix(['container', 'shown', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  // Remember state in cases where opening and handling a modal will fiddle with it.
  var states = {
    previousActiveElement: null,
    previousBodyPadding: null
  };

  var hasClass = function hasClass(elem, className) {
    if (elem.classList) {
      return elem.classList.contains(className);
    }
    return false;
  };

  var focusInput = function focusInput(input) {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915/1331425
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          add ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        add ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  var addClass = function addClass(target, classList) {
    addOrRemoveClass(target, classList, true);
  };

  var removeClass = function removeClass(target, classList) {
    addOrRemoveClass(target, classList, false);
  };

  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };

  var show = function show(elem) {
    elem.style.opacity = '';
    elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
  };

  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };

  var empty = function empty(elem) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  };

  // borrowed from jquery $(elem).is(':visible') implementation
  var isVisible = function isVisible(elem) {
    return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  var removeStyleProperty = function removeStyleProperty(elem, property) {
    if (elem.style.removeProperty) {
      elem.style.removeProperty(property);
    } else {
      elem.style.removeAttribute(property);
    }
  };

  // Reset previous window keydown handler and focued element
  var resetPrevState = function resetPrevState() {
    if (states.previousActiveElement && states.previousActiveElement.focus) {
      var x = window.scrollX;
      var y = window.scrollY;
      states.previousActiveElement.focus();
      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    }
  };

  var getContainer = function getContainer() {
    return document.body.querySelector('.' + swalClasses.container);
  };

  var elementByClass = function elementByClass(className) {
    var container = getContainer();
    return container ? container.querySelector('.' + className) : null;
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };

  var getIcons = function getIcons() {
    var popup = getPopup();
    return popup.querySelectorAll('.' + swalClasses.icon);
  };

  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };

  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };

  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };

  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses.progresssteps);
  };

  var getValidationError = function getValidationError() {
    return elementByClass(swalClasses.validationerror);
  };

  var getConfirmButton = function getConfirmButton() {
    return elementByClass(swalClasses.confirm);
  };

  var getCancelButton = function getCancelButton() {
    return elementByClass(swalClasses.cancel);
  };

  var getButtonsWrapper = function getButtonsWrapper() {
    warnOnce('swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead');
    return elementByClass(swalClasses.actions);
  };

  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };

  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };

  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  };

  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = Array.prototype.slice.call(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
    // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    });

    // https://github.com/jkup/focusable/blob/master/index.js
    var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));

    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
  };

  var isModal = function isModal() {
    return !document.body.classList.contains(swalClasses['toast-shown']);
  };

  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };

  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = ('\n <div aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <div class="' + swalClasses.header + '">\n     <ul class="' + swalClasses.progresssteps + '"></ul>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">\n       <span class="' + swalClasses['icon-text'] + '">?</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">\n       <span class="' + swalClasses['icon-text'] + '">!</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">\n       <span class="' + swalClasses['icon-text'] + '">i</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + swalClasses.image + '" />\n     <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n     <button type="button" class="' + swalClasses.close + '">\xD7</button>\n   </div>\n   <div class="' + swalClasses.content + '">\n     <div id="' + swalClasses.content + '"></div>\n     <input class="' + swalClasses.input + '" />\n     <input type="file" class="' + swalClasses.file + '" />\n     <div class="' + swalClasses.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + swalClasses.select + '"></select>\n     <div class="' + swalClasses.radio + '"></div>\n     <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + swalClasses.textarea + '"></textarea>\n     <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   </div>\n   <div class="' + swalClasses.actions + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <div class="' + swalClasses.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, '');

  /*
   * Add modal + backdrop to DOM
   */
  var init = function init(params) {
    // Clean up the old popup if it exists
    var c = getContainer();
    if (c) {
      c.parentNode.removeChild(c);
      removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);
    }

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;
    container.innerHTML = sweetHTML;

    var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
    targetElement.appendChild(container);

    var popup = getPopup();
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector('.' + swalClasses.range + ' input');
    var rangeOutput = content.querySelector('.' + swalClasses.range + ' output');
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector('.' + swalClasses.checkbox + ' input');
    var textarea = getChildByClass(content, swalClasses.textarea);

    // a11y
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }

    var resetValidationError = function resetValidationError() {
      SweetAlert.isVisible() && SweetAlert.resetValidationError();
    };

    input.oninput = resetValidationError;
    file.onchange = resetValidationError;
    select.onchange = resetValidationError;
    checkbox.onchange = resetValidationError;
    textarea.oninput = resetValidationError;

    range.oninput = function () {
      resetValidationError();
      rangeOutput.value = range.value;
    };

    range.onchange = function () {
      resetValidationError();
      range.nextSibling.value = range.value;
    };

    return popup;
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    if (!param) {
      return hide(target);
    }

    if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') {
      target.innerHTML = '';
      if (0 in param) {
        for (var i = 0; i in param; i++) {
          target.appendChild(param[i].cloneNode(true));
        }
      } else {
        target.appendChild(param.cloneNode(true));
      }
    } else if (param) {
      target.innerHTML = param;
    } else {}
    show(target);
  };

  var animationEndEvent = function () {
    // Prevent run in Node env
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'OAnimation': 'oAnimationEnd oanimationend',
      'animation': 'animationend'
    };
    for (var i in transEndEventNames) {
      if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // Measure width of scrollbar
  // https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
  var measureScrollbar = function measureScrollbar() {
    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (supportsTouch) {
      return 0;
    }
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = document.body.style.paddingRight;
      document.body.style.paddingRight = measureScrollbar() + 'px';
    }
  };

  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = states.previousBodyPadding;
      states.previousBodyPadding = null;
    }
  };

  // Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = offset * -1 + 'px';
      addClass(document.body, swalClasses.iosfix);
    }
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    type: null,
    toast: false,
    customClass: '',
    target: 'body',
    backdrop: true,
    animation: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: null,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: null,
    confirmButtonClass: null,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: null,
    cancelButtonClass: null,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    imageAlt: '',
    imageClass: null,
    timer: null,
    width: null,
    padding: null,
    background: null,
    input: null,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputClass: null,
    inputAttributes: {},
    inputValidator: null,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: null,
    progressStepsDistance: null,
    onBeforeOpen: null,
    onAfterClose: null,
    onOpen: null,
    onClose: null,
    useRejections: false,
    expectRejections: false
  };

  var deprecatedParams = ['useRejections', 'expectRejections'];

  /**
   * Is valid parameter
   * @param {String} paramName
   */
  var isValidParameter = function isValidParameter(paramName) {
    return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
  };

  /**
   * Is deprecated parameter
   * @param {String} paramName
   */
  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams.indexOf(paramName) !== -1;
  };

  /**
   * Show relevant warnings for given params
   *
   * @param params
   */
  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      if (!isValidParameter(param)) {
        warn('Unknown parameter "' + param + '"');
      }
      if (isDeprecatedParameter(param)) {
        warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
      }
    }
  };

  var globalState = {
    popupParams: _extends({}, defaultParams)
  };

  /*
   * Global function to close sweetAlert
   */
  var close = function close(onClose, onAfterClose) {
    var container = getContainer();
    var popup = getPopup();
    if (!popup) {
      return;
    }

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    removeClass(popup, swalClasses.show);
    addClass(popup, swalClasses.hide);
    clearTimeout(popup.timeout);

    if (!isToast()) {
      resetPrevState();
      window.onkeydown = globalState.previousWindowKeyDown;
      globalState.windowOnkeydownOverridden = false;
    }

    var removePopupAndResetState = function removePopupAndResetState() {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
      removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);

      if (isModal()) {
        undoScrollbar();
        undoIOSfix();
      }

      if (onAfterClose !== null && typeof onAfterClose === 'function') {
        setTimeout(function () {
          onAfterClose();
        });
      }
    };

    // If animation is supported, animate
    if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
      popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
        popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
        if (hasClass(popup, swalClasses.hide)) {
          removePopupAndResetState();
        }
      });
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState();
    }
  };

  /*
   * Global function to determine if swal2 popup is shown
   */
  var isVisible$1 = function isVisible() {
    return !!getPopup();
  };

  /*
   * Global function to click 'Confirm' button
   */
  var clickConfirm = function clickConfirm() {
    return getConfirmButton().click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  var clickCancel = function clickCancel() {
    return getCancelButton().click();
  };

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt.fire('What is your first name?')
   * const {value: lastName} = await TextPrompt.fire('What is your last name?')
   *
   * @param params
   */
  function mixin(mixinParams) {
    var Swal = this;
    return function (_Swal) {
      inherits(MixinSwal, _Swal);

      function MixinSwal() {
        classCallCheck(this, MixinSwal);
        return possibleConstructorReturn(this, (MixinSwal.__proto__ || Object.getPrototypeOf(MixinSwal)).apply(this, arguments));
      }

      createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return get(MixinSwal.prototype.__proto__ || Object.getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);
      return MixinSwal;
    }(Swal);
  }

  // private global state for the queue feature
  var currentSteps = [];

  /*
   * Global function for chaining sweetAlert popups
   */
  var queue = function queue(steps) {
    var swal = this;
    currentSteps = steps;
    var resetQueue = function resetQueue() {
      currentSteps = [];
      document.body.removeAttribute('data-swal2-queue-step');
    };
    var queueResult = [];
    return new Promise(function (resolve, reject) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);

          swal(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetQueue();
              resolve({ dismiss: result.dismiss });
            }
          });
        } else {
          resetQueue();
          resolve({ value: queueResult });
        }
      })(0);
    });
  };

  /*
   * Global function for getting the index of current popup in queue
   */
  var getQueueStep = function getQueueStep() {
    return document.body.getAttribute('data-swal2-queue-step');
  };

  /*
   * Global function for inserting a popup to the queue
   */
  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }
    return currentSteps.push(step);
  };

  /*
   * Global function for deleting a popup from the queue
   */
  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  /**
   * Set default params for each popup
   * @param {Object} userParams
   */
  var setDefaults = function setDefaults(userParams) {
    if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
      return error('the argument for setDefaults() is required and has to be a object');
    }

    showWarningsForParams(userParams);

    // assign valid params from userParams to popupParams
    for (var param in userParams) {
      if (isValidParameter(param)) {
        globalState.popupParams[param] = userParams[param];
      }
    }
  };

  /**
   * Reset default params for each popup
   */
  var resetDefaults = function resetDefaults() {
    globalState.popupParams = _extends({}, defaultParams);
  };

  /**
   * Show spinner instead of Confirm button and disable Cancel button
   */
  var showLoading = function showLoading() {
    var popup = getPopup();
    if (!popup) {
      SweetAlert('');
    }
    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    show(actions);
    show(confirmButton);
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    cancelButton.disabled = true;

    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(Swal, [null].concat(args)))();
  }

  var staticMethods = Object.freeze({
    isValidParameter: isValidParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    adaptInputValidator: adaptInputValidator,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getTitle: getTitle,
    getContent: getContent,
    getImage: getImage,
    getButtonsWrapper: getButtonsWrapper,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getFooter: getFooter,
    isLoading: isLoading,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    setDefaults: setDefaults,
    resetDefaults: resetDefaults,
    showLoading: showLoading,
    enableLoading: showLoading,
    fire: fire
  });

  /**
   * Show spinner instead of Confirm button and disable Cancel button
   */
  function hideLoading() {
    var domCache = this._domCache;
    if (!this.params.showConfirmButton) {
      hide(domCache.confirmButton);
      if (!this.params.showCancelButton) {
        hide(domCache.actions);
      }
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  // Get input element by specified type or, if type isn't specified, by params.input
  function getInput(inputType) {
    var domCache = this._domCache;
    inputType = inputType || this.params.input;
    if (!inputType) {
      return null;
    }
    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(domCache.content, swalClasses[inputType]);
      case 'checkbox':
        return domCache.popup.querySelector('.' + swalClasses.checkbox + ' input');
      case 'radio':
        return domCache.popup.querySelector('.' + swalClasses.radio + ' input:checked') || domCache.popup.querySelector('.' + swalClasses.radio + ' input:first-child');
      case 'range':
        return domCache.popup.querySelector('.' + swalClasses.range + ' input');
      default:
        return getChildByClass(domCache.content, swalClasses.input);
    }
  }

  function enableButtons() {
    this._domCache.confirmButton.disabled = false;
    this._domCache.cancelButton.disabled = false;
  }

  function disableButtons() {
    this._domCache.confirmButton.disabled = true;
    this._domCache.cancelButton.disabled = true;
  }

  function enableConfirmButton() {
    this._domCache.confirmButton.disabled = false;
  }

  function disableConfirmButton() {
    this._domCache.confirmButton.disabled = true;
  }

  function enableInput() {
    var input = this.getInput();
    if (!input) {
      return false;
    }
    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');
      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
      }
    } else {
      input.disabled = false;
    }
  }

  function disableInput() {
    var input = this.getInput();
    if (!input) {
      return false;
    }
    if (input && input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');
      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = true;
      }
    } else {
      input.disabled = true;
    }
  }

  // Show block with validation error
  function showValidationError(error) {
    var domCache = this._domCache;
    domCache.validationError.innerHTML = error;
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationError.style.marginLeft = '-' + popupComputedStyle.getPropertyValue('padding-left');
    domCache.validationError.style.marginRight = '-' + popupComputedStyle.getPropertyValue('padding-right');
    show(domCache.validationError);

    var input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses.validationerror);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  // Hide block with validation error
  function resetValidationError() {
    var domCache = this._domCache;
    if (domCache.validationError) {
      hide(domCache.validationError);
    }

    var input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  var defaultInputValidators = {
    email: function email(string) {
      return (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject('Invalid email address')
      );
    },
    url: function url(string) {
      // taken from https://stackoverflow.com/a/3809435/1331425
      return (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject('Invalid URL')
      );
    }
  };

  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */
  function setParameters(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = params.expectRejections ? defaultInputValidators[key] : SweetAlert.adaptInputValidator(defaultInputValidators[key]);
        }
      });
    }

    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }

    var popup = void 0;
    var oldPopup = getPopup();
    var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
    // If the model target has changed, refresh the popup
    if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
      popup = init(params);
    } else {
      popup = oldPopup || init(params);
    }

    // Set popup width
    if (params.width) {
      popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
    }

    // Set popup padding
    if (params.padding) {
      popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
    }

    // Set popup background
    if (params.background) {
      popup.style.background = params.background;
    }
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }

    var container = getContainer();
    var title = getTitle();
    var content = getContent().querySelector('#' + swalClasses.content);
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();
    var closeButton = getCloseButton();
    var footer = getFooter();

    // Title
    if (params.titleText) {
      title.innerText = params.titleText;
    } else if (params.title) {
      title.innerHTML = params.title.split('\n').join('<br />');
    }

    if (typeof params.backdrop === 'string') {
      getContainer().style.background = params.backdrop;
    } else if (!params.backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, content);

      // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content);
    } else {
      hide(content);
    }

    // Position
    if (params.position in swalClasses) {
      addClass(container, swalClasses[params.position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }

    // Grow
    if (params.grow && typeof params.grow === 'string') {
      var growClass = 'grow-' + params.grow;
      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }

    // Animation
    if (typeof params.animation === 'function') {
      params.animation = params.animation.call();
    }

    // Close button
    if (params.showCloseButton) {
      closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
      show(closeButton);
    } else {
      hide(closeButton);
    }

    // Default Class
    popup.className = swalClasses.popup;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom Class
    if (params.customClass) {
      addClass(popup, params.customClass);
    }

    // Progress steps
    var progressStepsContainer = getProgressSteps();
    var currentProgressStep = parseInt(params.currentProgressStep === null ? SweetAlert.getQueueStep() : params.currentProgressStep, 10);
    if (params.progressSteps && params.progressSteps.length) {
      show(progressStepsContainer);
      empty(progressStepsContainer);
      if (currentProgressStep >= params.progressSteps.length) {
        warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
      }
      params.progressSteps.forEach(function (step, index) {
        var circle = document.createElement('li');
        addClass(circle, swalClasses.progresscircle);
        circle.innerHTML = step;
        if (index === currentProgressStep) {
          addClass(circle, swalClasses.activeprogressstep);
        }
        progressStepsContainer.appendChild(circle);
        if (index !== params.progressSteps.length - 1) {
          var line = document.createElement('li');
          addClass(line, swalClasses.progressline);
          if (params.progressStepsDistance) {
            line.style.width = params.progressStepsDistance;
          }
          progressStepsContainer.appendChild(line);
        }
      });
    } else {
      hide(progressStepsContainer);
    }

    // Icon
    var icons = getIcons();
    for (var _i = 0; _i < icons.length; _i++) {
      hide(icons[_i]);
    }
    if (params.type) {
      var validType = false;
      for (var iconType in iconTypes) {
        if (params.type === iconType) {
          validType = true;
          break;
        }
      }
      if (!validType) {
        error('Unknown alert type: ' + params.type);
        return false;
      }
      var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
      show(icon);

      // Animate icon
      if (params.animation) {
        addClass(icon, 'swal2-animate-' + params.type + '-icon');
      }
    }

    // Custom image
    var image = getImage();
    if (params.imageUrl) {
      image.setAttribute('src', params.imageUrl);
      image.setAttribute('alt', params.imageAlt);
      show(image);

      if (params.imageWidth) {
        image.setAttribute('width', params.imageWidth);
      } else {
        image.removeAttribute('width');
      }

      if (params.imageHeight) {
        image.setAttribute('height', params.imageHeight);
      } else {
        image.removeAttribute('height');
      }

      image.className = swalClasses.image;
      if (params.imageClass) {
        addClass(image, params.imageClass);
      }
    } else {
      hide(image);
    }

    // Cancel button
    if (params.showCancelButton) {
      cancelButton.style.display = 'inline-block';
    } else {
      hide(cancelButton);
    }

    // Confirm button
    if (params.showConfirmButton) {
      removeStyleProperty(confirmButton, 'display');
    } else {
      hide(confirmButton);
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Edit text on confirm and cancel buttons
    confirmButton.innerHTML = params.confirmButtonText;
    cancelButton.innerHTML = params.cancelButtonText;

    // ARIA labels for confirm and cancel buttons
    confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
    cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

    // Add buttons custom classes
    confirmButton.className = swalClasses.confirm;
    addClass(confirmButton, params.confirmButtonClass);
    cancelButton.className = swalClasses.cancel;
    addClass(cancelButton, params.cancelButtonClass);

    // Buttons styling
    if (params.buttonsStyling) {
      addClass([confirmButton, cancelButton], swalClasses.styled);

      // Buttons background colors
      if (params.confirmButtonColor) {
        confirmButton.style.backgroundColor = params.confirmButtonColor;
      }
      if (params.cancelButtonColor) {
        cancelButton.style.backgroundColor = params.cancelButtonColor;
      }

      // Loading state
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);

      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    // Footer
    parseHtmlToContainer(params.footer, footer);

    // CSS animation
    if (params.animation === true) {
      removeClass(popup, swalClasses.noanimation);
    } else {
      addClass(popup, swalClasses.noanimation);
    }

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
  }

  /**
   * Animations
   *
   * @param animation
   * @param onBeforeOpen
   * @param onComplete
   */
  var openPopup = function openPopup(animation, onBeforeOpen, onOpen) {
    var container = getContainer();
    var popup = getPopup();

    if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
      onBeforeOpen(popup);
    }

    if (animation) {
      addClass(popup, swalClasses.show);
      addClass(container, swalClasses.fade);
      removeClass(popup, swalClasses.hide);
    } else {
      removeClass(popup, swalClasses.fade);
    }
    show(popup);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    container.style.overflowY = 'hidden';
    if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
      popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
        popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
        container.style.overflowY = 'auto';
      });
    } else {
      container.style.overflowY = 'auto';
    }

    addClass([document.documentElement, document.body, container], swalClasses.shown);
    if (isModal()) {
      fixScrollbar();
      iOSfix();
    }
    states.previousActiveElement = document.activeElement;
    if (onOpen !== null && typeof onOpen === 'function') {
      setTimeout(function () {
        onOpen(popup);
      });
    }
  };

  function _main(userParams) {
    var _this = this;

    showWarningsForParams(userParams);

    var params = this.params = _extends({}, globalState.popupParams, userParams);
    setParameters(params);
    Object.freeze(params);

    var domCache = this._domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationError: getValidationError(),
      progressSteps: getProgressSteps()
    };

    var constructor = this.constructor;

    return new Promise(function (resolve, reject) {
      // functions to handle all resolving/rejecting/settling
      var succeedWith = function succeedWith(value) {
        constructor.closePopup(params.onClose, params.onAfterClose); // TODO: make closePopup an *instance* method
        if (params.useRejections) {
          resolve(value);
        } else {
          resolve({ value: value });
        }
      };
      var dismissWith = function dismissWith(dismiss) {
        constructor.closePopup(params.onClose, params.onAfterClose);
        if (params.useRejections) {
          reject(dismiss);
        } else {
          resolve({ dismiss: dismiss });
        }
      };
      var errorWith = function errorWith(error$$1) {
        constructor.closePopup(params.onClose, params.onAfterClose);
        reject(error$$1);
      };

      // Close on timer
      if (params.timer) {
        domCache.popup.timeout = setTimeout(function () {
          return dismissWith('timer');
        }, params.timer);
      }

      // Get the value of the popup input
      var getInputValue = function getInputValue() {
        var input = _this.getInput();
        if (!input) {
          return null;
        }
        switch (params.input) {
          case 'checkbox':
            return input.checked ? 1 : 0;
          case 'radio':
            return input.checked ? input.value : null;
          case 'file':
            return input.files.length ? input.files[0] : null;
          default:
            return params.inputAutoTrim ? input.value.trim() : input.value;
        }
      };

      // input autofocus
      if (params.input) {
        setTimeout(function () {
          var input = _this.getInput();
          if (input) {
            focusInput(input);
          }
        }, 0);
      }

      var confirm = function confirm(value) {
        if (params.showLoaderOnConfirm) {
          constructor.showLoading(); // TODO: make showLoading an *instance* method
        }

        if (params.preConfirm) {
          _this.resetValidationError();
          var preConfirmPromise = Promise.resolve().then(function () {
            return params.preConfirm(value, params.extraParams);
          });
          if (params.expectRejections) {
            preConfirmPromise.then(function (preConfirmValue) {
              return succeedWith(preConfirmValue || value);
            }, function (validationError) {
              _this.hideLoading();
              if (validationError) {
                _this.showValidationError(validationError);
              }
            });
          } else {
            preConfirmPromise.then(function (preConfirmValue) {
              if (isVisible(domCache.validationError) || preConfirmValue === false) {
                _this.hideLoading();
              } else {
                succeedWith(preConfirmValue || value);
              }
            }, function (error$$1) {
              return errorWith(error$$1);
            });
          }
        } else {
          succeedWith(value);
        }
      };

      // Mouse interactions
      var onButtonEvent = function onButtonEvent(event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var confirmButton = domCache.confirmButton,
            cancelButton = domCache.cancelButton;

        var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
        var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

        switch (e.type) {
          case 'click':
            // Clicked 'confirm'
            if (targetedConfirm && constructor.isVisible()) {
              _this.disableButtons();
              if (params.input) {
                var inputValue = getInputValue();

                if (params.inputValidator) {
                  _this.disableInput();
                  var validationPromise = Promise.resolve().then(function () {
                    return params.inputValidator(inputValue, params.extraParams);
                  });
                  if (params.expectRejections) {
                    validationPromise.then(function () {
                      _this.enableButtons();
                      _this.enableInput();
                      confirm(inputValue);
                    }, function (validationError) {
                      _this.enableButtons();
                      _this.enableInput();
                      if (validationError) {
                        _this.showValidationError(validationError);
                      }
                    });
                  } else {
                    validationPromise.then(function (validationError) {
                      _this.enableButtons();
                      _this.enableInput();
                      if (validationError) {
                        _this.showValidationError(validationError);
                      } else {
                        confirm(inputValue);
                      }
                    }, function (error$$1) {
                      return errorWith(error$$1);
                    });
                  }
                } else {
                  confirm(inputValue);
                }
              } else {
                confirm(true);
              }

              // Clicked 'cancel'
            } else if (targetedCancel && constructor.isVisible()) {
              _this.disableButtons();
              dismissWith(constructor.DismissReason.cancel);
            }
            break;
          default:
        }
      };

      var buttons = domCache.popup.querySelectorAll('button');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = onButtonEvent;
        buttons[i].onmouseover = onButtonEvent;
        buttons[i].onmouseout = onButtonEvent;
        buttons[i].onmousedown = onButtonEvent;
      }

      // Closing popup by close button
      domCache.closeButton.onclick = function () {
        dismissWith(constructor.DismissReason.close);
      };

      if (params.toast) {
        // Closing popup by internal click
        domCache.popup.onclick = function (e) {
          if (params.showConfirmButton || params.showCancelButton || params.showCloseButton || params.input) {
            return;
          }
          constructor.closePopup(params.onClose, params.onAfterClose);
          dismissWith(constructor.DismissReason.close);
        };
      } else {
        var ignoreOutsideClick = false;

        // Ignore click events that had mousedown on the popup but mouseup on the container
        // This can happen when the user drags a slider
        domCache.popup.onmousedown = function () {
          domCache.container.onmouseup = function (e) {
            domCache.container.onmouseup = undefined;
            // We only check if the mouseup target is the container because usually it doesn't
            // have any other direct children aside of the popup
            if (e.target === domCache.container) {
              ignoreOutsideClick = true;
            }
          };
        };

        // Ignore click events that had mousedown on the container but mouseup on the popup
        domCache.container.onmousedown = function () {
          domCache.popup.onmouseup = function (e) {
            domCache.popup.onmouseup = undefined;
            // We also need to check if the mouseup target is a child of the popup
            if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
              ignoreOutsideClick = true;
            }
          };
        };

        domCache.container.onclick = function (e) {
          if (ignoreOutsideClick) {
            ignoreOutsideClick = false;
            return;
          }
          if (e.target !== domCache.container) {
            return;
          }
          if (callIfFunction(params.allowOutsideClick)) {
            dismissWith(constructor.DismissReason.backdrop);
          }
        };
      }

      // Reverse buttons (Confirm on the right side)
      if (params.reverseButtons) {
        domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
      } else {
        domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
      }

      // Focus handling
      var setFocus = function setFocus(index, increment) {
        var focusableElements = getFocusableElements(params.focusCancel);
        // search for visible elements and select the next possible match
        for (var _i = 0; _i < focusableElements.length; _i++) {
          index = index + increment;

          // rollover to first item
          if (index === focusableElements.length) {
            index = 0;

            // go to last item
          } else if (index === -1) {
            index = focusableElements.length - 1;
          }

          // determine if element is visible
          var el = focusableElements[index];
          if (isVisible(el)) {
            return el.focus();
          }
        }
      };

      var handleKeyDown = function handleKeyDown(event) {
        var e = event || window.event;

        var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
        ];

        if (e.key === 'Enter' && !e.isComposing) {
          if (e.target === _this.getInput()) {
            if (['textarea', 'file'].indexOf(params.input) !== -1) {
              return; // do not submit
            }

            constructor.clickConfirm();
            e.preventDefault();
          }

          // TAB
        } else if (e.key === 'Tab') {
          var targetElement = e.target || e.srcElement;

          var focusableElements = getFocusableElements(params.focusCancel);
          var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
          for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
            if (targetElement === focusableElements[_i2]) {
              btnIndex = _i2;
              break;
            }
          }

          if (!e.shiftKey) {
            // Cycle to the next button
            setFocus(btnIndex, 1);
          } else {
            // Cycle to the prev button
            setFocus(btnIndex, -1);
          }
          e.stopPropagation();
          e.preventDefault();

          // ARROWS - switch focus between buttons
        } else if (arrowKeys.indexOf(e.key) !== -1) {
          // focus Cancel button if Confirm button is currently focused
          if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            // and vice versa
          } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
            domCache.confirmButton.focus();
          }

          // ESC
        } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(params.allowEscapeKey) === true) {
          dismissWith(constructor.DismissReason.esc);
        }
      };

      if (params.toast && globalState.windowOnkeydownOverridden) {
        window.onkeydown = globalState.previousWindowKeyDown;
        globalState.windowOnkeydownOverridden = false;
      }

      if (!params.toast && !globalState.windowOnkeydownOverridden) {
        globalState.previousWindowKeyDown = window.onkeydown;
        globalState.windowOnkeydownOverridden = true;
        window.onkeydown = handleKeyDown;
      }

      _this.enableButtons();
      _this.hideLoading();
      _this.resetValidationError();

      if (params.input) {
        addClass(document.body, swalClasses['has-input']);
      }

      // inputs
      var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
      var input = void 0;
      for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
        var inputClass = swalClasses[inputTypes[_i3]];
        var inputContainer = getChildByClass(domCache.content, inputClass);
        input = _this.getInput(inputTypes[_i3]);

        // set attributes
        if (input) {
          for (var j in input.attributes) {
            if (input.attributes.hasOwnProperty(j)) {
              var attrName = input.attributes[j].name;
              if (attrName !== 'type' && attrName !== 'value') {
                input.removeAttribute(attrName);
              }
            }
          }
          for (var attr in params.inputAttributes) {
            input.setAttribute(attr, params.inputAttributes[attr]);
          }
        }

        // set class
        inputContainer.className = inputClass;
        if (params.inputClass) {
          addClass(inputContainer, params.inputClass);
        }

        hide(inputContainer);
      }

      var populateInputOptions = void 0;
      switch (params.input) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
        case 'tel':
        case 'url':
          input = getChildByClass(domCache.content, swalClasses.input);
          input.value = params.inputValue;
          input.placeholder = params.inputPlaceholder;
          input.type = params.input;
          show(input);
          break;
        case 'file':
          input = getChildByClass(domCache.content, swalClasses.file);
          input.placeholder = params.inputPlaceholder;
          input.type = params.input;
          show(input);
          break;
        case 'range':
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = params.inputValue;
          rangeInput.type = params.input;
          rangeOutput.value = params.inputValue;
          show(range);
          break;
        case 'select':
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';
          if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = params.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }
          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (_ref) {
              var _ref2 = slicedToArray(_ref, 2),
                  optionValue = _ref2[0],
                  optionLabel = _ref2[1];

              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;
              if (params.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }
              select.appendChild(option);
            });
            show(select);
            select.focus();
          };
          break;
        case 'radio':
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';
          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (_ref3) {
              var _ref4 = slicedToArray(_ref3, 2),
                  radioValue = _ref4[0],
                  radioLabel = _ref4[1];

              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;
              if (params.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }
              radioLabelElement.innerHTML = radioLabel;
              radioLabelElement.insertBefore(radioInput, radioLabelElement.firstChild);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');
            if (radios.length) {
              radios[0].focus();
            }
          };
          break;
        case 'checkbox':
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);
          var checkboxInput = _this.getInput('checkbox');
          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(params.inputValue);
          var label = checkbox.getElementsByTagName('span');
          if (label.length) {
            checkbox.removeChild(label[0]);
          }
          label = document.createElement('span');
          label.innerHTML = params.inputPlaceholder;
          checkbox.appendChild(label);
          show(checkbox);
          break;
        case 'textarea':
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = params.inputValue;
          textarea.placeholder = params.inputPlaceholder;
          show(textarea);
          break;
        case null:
          break;
        default:
          error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
          break;
      }

      if (params.input === 'select' || params.input === 'radio') {
        var processInputOptions = function processInputOptions(inputOptions) {
          return populateInputOptions(formatInputOptions(inputOptions));
        };
        if (isThenable(params.inputOptions)) {
          constructor.showLoading();
          params.inputOptions.then(function (inputOptions) {
            _this.hideLoading();
            processInputOptions(inputOptions);
          });
        } else if (_typeof(params.inputOptions) === 'object') {
          processInputOptions(params.inputOptions);
        } else {
          error('Unexpected type of inputOptions! Expected object, Map or Promise, got ' + _typeof(params.inputOptions));
        }
      } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isThenable(params.inputValue)) {
        constructor.showLoading();
        hide(input);
        params.inputValue.then(function (inputValue) {
          input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
          show(input);
          _this.hideLoading();
        }).catch(function (err) {
          error('Error in inputValue promise: ' + err);
          input.value = '';
          show(input);
          _this.hideLoading();
        });
      }

      openPopup(params.animation, params.onBeforeOpen, params.onOpen);

      if (!params.toast) {
        if (!callIfFunction(params.allowEnterKey)) {
          if (document.activeElement) {
            document.activeElement.blur();
          }
        } else if (params.focusCancel && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus();
        } else if (params.focusConfirm && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } else {
          setFocus(-1, 1);
        }
      }

      // fix scroll
      domCache.container.scrollTop = 0;
    });
  }

  var instanceMethods = Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableConfirmButton: enableConfirmButton,
    disableConfirmButton: disableConfirmButton,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationError: showValidationError,
    resetValidationError: resetValidationError,
    _main: _main
  });

  var currentInstance = void 0;

  // SweetAlert constructor
  function SweetAlert() {
    // Prevent run in Node env
    if (typeof window === 'undefined') {
      return;
    }

    // Check for the existence of Promise
    if (typeof Promise === 'undefined') {
      error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
    }

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      error('SweetAlert2 expects at least 1 attribute!');
      return false;
    }

    // handle things when constructor is invoked without the `new` keyword
    if (!(this instanceof SweetAlert)) {
      return new (Function.prototype.bind.apply(SweetAlert, [null].concat(args)))();
    }

    currentInstance = this;

    this._promise = this._main(this.constructor.argsToParams(args));
  }

  // `catch` cannot be the name of a module export, so we define our thenable methods here instead
  SweetAlert.prototype.then = function (onFulfilled, onRejected) {
    return this._promise.then(onFulfilled, onRejected);
  };
  SweetAlert.prototype.catch = function (onRejected) {
    return this._promise.catch(onRejected);
  };
  SweetAlert.prototype.finally = function (onFinally) {
    return this._promise.finally(onFinally);
  };

  // Assign instance methods from src/instanceMethods/*.js to prototype
  _extends(SweetAlert.prototype, instanceMethods);

  // Assign static methods from src/staticMethods/*.js to constructor
  _extends(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });

  SweetAlert.DismissReason = DismissReason;

  SweetAlert.noop = function () {};

  SweetAlert.version = version;

  SweetAlert.default = SweetAlert;

  /**
   * Set default params if `window._swalDefaults` is an object
   */
  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SweetAlert.setDefaults(window._swalDefaults);
  }

  return SweetAlert;
});
if (typeof window !== 'undefined' && window.Sweetalert2) {
  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2;
}

"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, "@-webkit-keyframes swal2-show {\n" + "  0% {\n" + "    -webkit-transform: scale(0.7);\n" + "            transform: scale(0.7); }\n" + "  45% {\n" + "    -webkit-transform: scale(1.05);\n" + "            transform: scale(1.05); }\n" + "  80% {\n" + "    -webkit-transform: scale(0.95);\n" + "            transform: scale(0.95); }\n" + "  100% {\n" + "    -webkit-transform: scale(1);\n" + "            transform: scale(1); } }\n" + "\n" + "@keyframes swal2-show {\n" + "  0% {\n" + "    -webkit-transform: scale(0.7);\n" + "            transform: scale(0.7); }\n" + "  45% {\n" + "    -webkit-transform: scale(1.05);\n" + "            transform: scale(1.05); }\n" + "  80% {\n" + "    -webkit-transform: scale(0.95);\n" + "            transform: scale(0.95); }\n" + "  100% {\n" + "    -webkit-transform: scale(1);\n" + "            transform: scale(1); } }\n" + "\n" + "@-webkit-keyframes swal2-hide {\n" + "  0% {\n" + "    -webkit-transform: scale(1);\n" + "            transform: scale(1);\n" + "    opacity: 1; }\n" + "  100% {\n" + "    -webkit-transform: scale(0.5);\n" + "            transform: scale(0.5);\n" + "    opacity: 0; } }\n" + "\n" + "@keyframes swal2-hide {\n" + "  0% {\n" + "    -webkit-transform: scale(1);\n" + "            transform: scale(1);\n" + "    opacity: 1; }\n" + "  100% {\n" + "    -webkit-transform: scale(0.5);\n" + "            transform: scale(0.5);\n" + "    opacity: 0; } }\n" + "\n" + "@-webkit-keyframes swal2-animate-success-line-tip {\n" + "  0% {\n" + "    top: 1.1875em;\n" + "    left: .0625em;\n" + "    width: 0; }\n" + "  54% {\n" + "    top: 1.0625em;\n" + "    left: .125em;\n" + "    width: 0; }\n" + "  70% {\n" + "    top: 2.1875em;\n" + "    left: -.375em;\n" + "    width: 3.125em; }\n" + "  84% {\n" + "    top: 3em;\n" + "    left: 1.3125em;\n" + "    width: 1.0625em; }\n" + "  100% {\n" + "    top: 2.8125em;\n" + "    left: .875em;\n" + "    width: 1.5625em; } }\n" + "\n" + "@keyframes swal2-animate-success-line-tip {\n" + "  0% {\n" + "    top: 1.1875em;\n" + "    left: .0625em;\n" + "    width: 0; }\n" + "  54% {\n" + "    top: 1.0625em;\n" + "    left: .125em;\n" + "    width: 0; }\n" + "  70% {\n" + "    top: 2.1875em;\n" + "    left: -.375em;\n" + "    width: 3.125em; }\n" + "  84% {\n" + "    top: 3em;\n" + "    left: 1.3125em;\n" + "    width: 1.0625em; }\n" + "  100% {\n" + "    top: 2.8125em;\n" + "    left: .875em;\n" + "    width: 1.5625em; } }\n" + "\n" + "@-webkit-keyframes swal2-animate-success-line-long {\n" + "  0% {\n" + "    top: 3.375em;\n" + "    right: 2.875em;\n" + "    width: 0; }\n" + "  65% {\n" + "    top: 3.375em;\n" + "    right: 2.875em;\n" + "    width: 0; }\n" + "  84% {\n" + "    top: 2.1875em;\n" + "    right: 0;\n" + "    width: 3.4375em; }\n" + "  100% {\n" + "    top: 2.375em;\n" + "    right: .5em;\n" + "    width: 2.9375em; } }\n" + "\n" + "@keyframes swal2-animate-success-line-long {\n" + "  0% {\n" + "    top: 3.375em;\n" + "    right: 2.875em;\n" + "    width: 0; }\n" + "  65% {\n" + "    top: 3.375em;\n" + "    right: 2.875em;\n" + "    width: 0; }\n" + "  84% {\n" + "    top: 2.1875em;\n" + "    right: 0;\n" + "    width: 3.4375em; }\n" + "  100% {\n" + "    top: 2.375em;\n" + "    right: .5em;\n" + "    width: 2.9375em; } }\n" + "\n" + "@-webkit-keyframes swal2-rotate-success-circular-line {\n" + "  0% {\n" + "    -webkit-transform: rotate(-45deg);\n" + "            transform: rotate(-45deg); }\n" + "  5% {\n" + "    -webkit-transform: rotate(-45deg);\n" + "            transform: rotate(-45deg); }\n" + "  12% {\n" + "    -webkit-transform: rotate(-405deg);\n" + "            transform: rotate(-405deg); }\n" + "  100% {\n" + "    -webkit-transform: rotate(-405deg);\n" + "            transform: rotate(-405deg); } }\n" + "\n" + "@keyframes swal2-rotate-success-circular-line {\n" + "  0% {\n" + "    -webkit-transform: rotate(-45deg);\n" + "            transform: rotate(-45deg); }\n" + "  5% {\n" + "    -webkit-transform: rotate(-45deg);\n" + "            transform: rotate(-45deg); }\n" + "  12% {\n" + "    -webkit-transform: rotate(-405deg);\n" + "            transform: rotate(-405deg); }\n" + "  100% {\n" + "    -webkit-transform: rotate(-405deg);\n" + "            transform: rotate(-405deg); } }\n" + "\n" + "@-webkit-keyframes swal2-animate-error-x-mark {\n" + "  0% {\n" + "    margin-top: 1.625em;\n" + "    -webkit-transform: scale(0.4);\n" + "            transform: scale(0.4);\n" + "    opacity: 0; }\n" + "  50% {\n" + "    margin-top: 1.625em;\n" + "    -webkit-transform: scale(0.4);\n" + "            transform: scale(0.4);\n" + "    opacity: 0; }\n" + "  80% {\n" + "    margin-top: -.375em;\n" + "    -webkit-transform: scale(1.15);\n" + "            transform: scale(1.15); }\n" + "  100% {\n" + "    margin-top: 0;\n" + "    -webkit-transform: scale(1);\n" + "            transform: scale(1);\n" + "    opacity: 1; } }\n" + "\n" + "@keyframes swal2-animate-error-x-mark {\n" + "  0% {\n" + "    margin-top: 1.625em;\n" + "    -webkit-transform: scale(0.4);\n" + "            transform: scale(0.4);\n" + "    opacity: 0; }\n" + "  50% {\n" + "    margin-top: 1.625em;\n" + "    -webkit-transform: scale(0.4);\n" + "            transform: scale(0.4);\n" + "    opacity: 0; }\n" + "  80% {\n" + "    margin-top: -.375em;\n" + "    -webkit-transform: scale(1.15);\n" + "            transform: scale(1.15); }\n" + "  100% {\n" + "    margin-top: 0;\n" + "    -webkit-transform: scale(1);\n" + "            transform: scale(1);\n" + "    opacity: 1; } }\n" + "\n" + "@-webkit-keyframes swal2-animate-error-icon {\n" + "  0% {\n" + "    -webkit-transform: rotateX(100deg);\n" + "            transform: rotateX(100deg);\n" + "    opacity: 0; }\n" + "  100% {\n" + "    -webkit-transform: rotateX(0deg);\n" + "            transform: rotateX(0deg);\n" + "    opacity: 1; } }\n" + "\n" + "@keyframes swal2-animate-error-icon {\n" + "  0% {\n" + "    -webkit-transform: rotateX(100deg);\n" + "            transform: rotateX(100deg);\n" + "    opacity: 0; }\n" + "  100% {\n" + "    -webkit-transform: rotateX(0deg);\n" + "            transform: rotateX(0deg);\n" + "    opacity: 1; } }\n" + "\n" + "body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n" + "  flex-direction: column;\n" + "  align-items: stretch; }\n" + "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n" + "    flex: 1;\n" + "    align-self: stretch;\n" + "    justify-content: flex-end;\n" + "    height: 2.2em; }\n" + "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n" + "    justify-content: center; }\n" + "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n" + "    height: 2em;\n" + "    margin: .3125em auto;\n" + "    font-size: 1em; }\n" + "  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n" + "    font-size: 1em; }\n" + "\n" + "body.swal2-toast-shown > .swal2-container {\n" + "  position: fixed;\n" + "  background-color: transparent; }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-shown {\n" + "    background-color: transparent; }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-top {\n" + "    top: 0;\n" + "    right: auto;\n" + "    bottom: auto;\n" + "    left: 50%;\n" + "    -webkit-transform: translateX(-50%);\n" + "            transform: translateX(-50%); }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n" + "    top: 0;\n" + "    right: 0;\n" + "    bottom: auto;\n" + "    left: auto; }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n" + "    top: 0;\n" + "    right: auto;\n" + "    bottom: auto;\n" + "    left: 0; }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n" + "    top: 50%;\n" + "    right: auto;\n" + "    bottom: auto;\n" + "    left: 0;\n" + "    -webkit-transform: translateY(-50%);\n" + "            transform: translateY(-50%); }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-center {\n" + "    top: 50%;\n" + "    right: auto;\n" + "    bottom: auto;\n" + "    left: 50%;\n" + "    -webkit-transform: translate(-50%, -50%);\n" + "            transform: translate(-50%, -50%); }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n" + "    top: 50%;\n" + "    right: 0;\n" + "    bottom: auto;\n" + "    left: auto;\n" + "    -webkit-transform: translateY(-50%);\n" + "            transform: translateY(-50%); }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n" + "    top: auto;\n" + "    right: auto;\n" + "    bottom: 0;\n" + "    left: 0; }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n" + "    top: auto;\n" + "    right: auto;\n" + "    bottom: 0;\n" + "    left: 50%;\n" + "    -webkit-transform: translateX(-50%);\n" + "            transform: translateX(-50%); }\n" + "  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n" + "    top: auto;\n" + "    right: 0;\n" + "    bottom: 0;\n" + "    left: auto; }\n" + "\n" + ".swal2-popup.swal2-toast {\n" + "  flex-direction: row;\n" + "  align-items: center;\n" + "  width: auto;\n" + "  padding: 0.625em;\n" + "  box-shadow: 0 0 0.625em #d9d9d9;\n" + "  overflow-y: hidden; }\n" + "  .swal2-popup.swal2-toast .swal2-header {\n" + "    flex-direction: row; }\n" + "  .swal2-popup.swal2-toast .swal2-title {\n" + "    justify-content: flex-start;\n" + "    margin: 0 .6em;\n" + "    font-size: 1em; }\n" + "  .swal2-popup.swal2-toast .swal2-close {\n" + "    position: initial; }\n" + "  .swal2-popup.swal2-toast .swal2-content {\n" + "    justify-content: flex-start;\n" + "    font-size: 1em; }\n" + "  .swal2-popup.swal2-toast .swal2-icon {\n" + "    width: 2em;\n" + "    min-width: 2em;\n" + "    height: 2em;\n" + "    margin: 0; }\n" + "    .swal2-popup.swal2-toast .swal2-icon-text {\n" + "      font-size: 2em;\n" + "      font-weight: bold;\n" + "      line-height: 1em; }\n" + "    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n" + "      width: 2em;\n" + "      height: 2em; }\n" + "    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" + "      top: .875em;\n" + "      width: 1.375em; }\n" + "      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" + "        left: .3125em; }\n" + "      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" + "        right: .3125em; }\n" + "  .swal2-popup.swal2-toast .swal2-actions {\n" + "    height: auto;\n" + "    margin: 0 .3125em; }\n" + "  .swal2-popup.swal2-toast .swal2-styled {\n" + "    margin: 0 .3125em;\n" + "    padding: .3125em .625em;\n" + "    font-size: 1em; }\n" + "    .swal2-popup.swal2-toast .swal2-styled:focus {\n" + "      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n" + "  .swal2-popup.swal2-toast .swal2-success {\n" + "    border-color: #a5dc86; }\n" + "    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n" + "      position: absolute;\n" + "      width: 2em;\n" + "      height: 2.8125em;\n" + "      -webkit-transform: rotate(45deg);\n" + "              transform: rotate(45deg);\n" + "      border-radius: 50%; }\n" + "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" + "        top: -.25em;\n" + "        left: -.9375em;\n" + "        -webkit-transform: rotate(-45deg);\n" + "                transform: rotate(-45deg);\n" + "        -webkit-transform-origin: 2em 2em;\n" + "                transform-origin: 2em 2em;\n" + "        border-radius: 4em 0 0 4em; }\n" + "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" + "        top: -.25em;\n" + "        left: .9375em;\n" + "        -webkit-transform-origin: 0 2em;\n" + "                transform-origin: 0 2em;\n" + "        border-radius: 0 4em 4em 0; }\n" + "    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n" + "      width: 2em;\n" + "      height: 2em; }\n" + "    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n" + "      top: 0;\n" + "      left: .4375em;\n" + "      width: .4375em;\n" + "      height: 2.6875em; }\n" + "    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n" + "      height: .3125em; }\n" + "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n" + "        top: 1.125em;\n" + "        left: .1875em;\n" + "        width: .75em; }\n" + "      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n" + "        top: .9375em;\n" + "        right: .1875em;\n" + "        width: 1.375em; }\n" + "  .swal2-popup.swal2-toast.swal2-show {\n" + "    -webkit-animation: showSweetToast .5s;\n" + "            animation: showSweetToast .5s; }\n" + "  .swal2-popup.swal2-toast.swal2-hide {\n" + "    -webkit-animation: hideSweetToast .2s forwards;\n" + "            animation: hideSweetToast .2s forwards; }\n" + "  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n" + "    -webkit-animation: animate-toast-success-tip .75s;\n" + "            animation: animate-toast-success-tip .75s; }\n" + "  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n" + "    -webkit-animation: animate-toast-success-long .75s;\n" + "            animation: animate-toast-success-long .75s; }\n" + "\n" + "@-webkit-keyframes showSweetToast {\n" + "  0% {\n" + "    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" + "            transform: translateY(-0.625em) rotateZ(2deg);\n" + "    opacity: 0; }\n" + "  33% {\n" + "    -webkit-transform: translateY(0) rotateZ(-2deg);\n" + "            transform: translateY(0) rotateZ(-2deg);\n" + "    opacity: .5; }\n" + "  66% {\n" + "    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" + "            transform: translateY(0.3125em) rotateZ(2deg);\n" + "    opacity: .7; }\n" + "  100% {\n" + "    -webkit-transform: translateY(0) rotateZ(0);\n" + "            transform: translateY(0) rotateZ(0);\n" + "    opacity: 1; } }\n" + "\n" + "@keyframes showSweetToast {\n" + "  0% {\n" + "    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" + "            transform: translateY(-0.625em) rotateZ(2deg);\n" + "    opacity: 0; }\n" + "  33% {\n" + "    -webkit-transform: translateY(0) rotateZ(-2deg);\n" + "            transform: translateY(0) rotateZ(-2deg);\n" + "    opacity: .5; }\n" + "  66% {\n" + "    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" + "            transform: translateY(0.3125em) rotateZ(2deg);\n" + "    opacity: .7; }\n" + "  100% {\n" + "    -webkit-transform: translateY(0) rotateZ(0);\n" + "            transform: translateY(0) rotateZ(0);\n" + "    opacity: 1; } }\n" + "\n" + "@-webkit-keyframes hideSweetToast {\n" + "  0% {\n" + "    opacity: 1; }\n" + "  33% {\n" + "    opacity: .5; }\n" + "  100% {\n" + "    -webkit-transform: rotateZ(1deg);\n" + "            transform: rotateZ(1deg);\n" + "    opacity: 0; } }\n" + "\n" + "@keyframes hideSweetToast {\n" + "  0% {\n" + "    opacity: 1; }\n" + "  33% {\n" + "    opacity: .5; }\n" + "  100% {\n" + "    -webkit-transform: rotateZ(1deg);\n" + "            transform: rotateZ(1deg);\n" + "    opacity: 0; } }\n" + "\n" + "@-webkit-keyframes animate-toast-success-tip {\n" + "  0% {\n" + "    top: .5625em;\n" + "    left: .0625em;\n" + "    width: 0; }\n" + "  54% {\n" + "    top: .125em;\n" + "    left: .125em;\n" + "    width: 0; }\n" + "  70% {\n" + "    top: .625em;\n" + "    left: -.25em;\n" + "    width: 1.625em; }\n" + "  84% {\n" + "    top: 1.0625em;\n" + "    left: .75em;\n" + "    width: .5em; }\n" + "  100% {\n" + "    top: 1.125em;\n" + "    left: .1875em;\n" + "    width: .75em; } }\n" + "\n" + "@keyframes animate-toast-success-tip {\n" + "  0% {\n" + "    top: .5625em;\n" + "    left: .0625em;\n" + "    width: 0; }\n" + "  54% {\n" + "    top: .125em;\n" + "    left: .125em;\n" + "    width: 0; }\n" + "  70% {\n" + "    top: .625em;\n" + "    left: -.25em;\n" + "    width: 1.625em; }\n" + "  84% {\n" + "    top: 1.0625em;\n" + "    left: .75em;\n" + "    width: .5em; }\n" + "  100% {\n" + "    top: 1.125em;\n" + "    left: .1875em;\n" + "    width: .75em; } }\n" + "\n" + "@-webkit-keyframes animate-toast-success-long {\n" + "  0% {\n" + "    top: 1.625em;\n" + "    right: 1.375em;\n" + "    width: 0; }\n" + "  65% {\n" + "    top: 1.25em;\n" + "    right: .9375em;\n" + "    width: 0; }\n" + "  84% {\n" + "    top: .9375em;\n" + "    right: 0;\n" + "    width: 1.125em; }\n" + "  100% {\n" + "    top: .9375em;\n" + "    right: .1875em;\n" + "    width: 1.375em; } }\n" + "\n" + "@keyframes animate-toast-success-long {\n" + "  0% {\n" + "    top: 1.625em;\n" + "    right: 1.375em;\n" + "    width: 0; }\n" + "  65% {\n" + "    top: 1.25em;\n" + "    right: .9375em;\n" + "    width: 0; }\n" + "  84% {\n" + "    top: .9375em;\n" + "    right: 0;\n" + "    width: 1.125em; }\n" + "  100% {\n" + "    top: .9375em;\n" + "    right: .1875em;\n" + "    width: 1.375em; } }\n" + "\n" + "html.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\n" + "body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n" + "  height: auto;\n" + "  overflow-y: hidden; }\n" + "\n" + "body.swal2-no-backdrop .swal2-shown {\n" + "  top: auto;\n" + "  right: auto;\n" + "  bottom: auto;\n" + "  left: auto;\n" + "  background-color: transparent; }\n" + "  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n" + "    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-top {\n" + "    top: 0;\n" + "    left: 50%;\n" + "    -webkit-transform: translateX(-50%);\n" + "            transform: translateX(-50%); }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n" + "    top: 0;\n" + "    left: 0; }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n" + "    top: 0;\n" + "    right: 0; }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-center {\n" + "    top: 50%;\n" + "    left: 50%;\n" + "    -webkit-transform: translate(-50%, -50%);\n" + "            transform: translate(-50%, -50%); }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n" + "    top: 50%;\n" + "    left: 0;\n" + "    -webkit-transform: translateY(-50%);\n" + "            transform: translateY(-50%); }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n" + "    top: 50%;\n" + "    right: 0;\n" + "    -webkit-transform: translateY(-50%);\n" + "            transform: translateY(-50%); }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n" + "    bottom: 0;\n" + "    left: 50%;\n" + "    -webkit-transform: translateX(-50%);\n" + "            transform: translateX(-50%); }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n" + "    bottom: 0;\n" + "    left: 0; }\n" + "  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n" + "    right: 0;\n" + "    bottom: 0; }\n" + "\n" + ".swal2-container {\n" + "  display: flex;\n" + "  position: fixed;\n" + "  top: 0;\n" + "  right: 0;\n" + "  bottom: 0;\n" + "  left: 0;\n" + "  flex-direction: row;\n" + "  align-items: center;\n" + "  justify-content: center;\n" + "  padding: 10px;\n" + "  background-color: transparent;\n" + "  z-index: 1060;\n" + "  overflow-x: hidden;\n" + "  -webkit-overflow-scrolling: touch; }\n" + "  .swal2-container.swal2-top {\n" + "    align-items: flex-start; }\n" + "  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n" + "    align-items: flex-start;\n" + "    justify-content: flex-start; }\n" + "  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n" + "    align-items: flex-start;\n" + "    justify-content: flex-end; }\n" + "  .swal2-container.swal2-center {\n" + "    align-items: center; }\n" + "  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n" + "    align-items: center;\n" + "    justify-content: flex-start; }\n" + "  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n" + "    align-items: center;\n" + "    justify-content: flex-end; }\n" + "  .swal2-container.swal2-bottom {\n" + "    align-items: flex-end; }\n" + "  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n" + "    align-items: flex-end;\n" + "    justify-content: flex-start; }\n" + "  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n" + "    align-items: flex-end;\n" + "    justify-content: flex-end; }\n" + "  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n" + "    display: flex !important;\n" + "    flex: 1;\n" + "    align-self: stretch;\n" + "    justify-content: center; }\n" + "  .swal2-container.swal2-grow-row > .swal2-modal {\n" + "    display: flex !important;\n" + "    flex: 1;\n" + "    align-content: center;\n" + "    justify-content: center; }\n" + "  .swal2-container.swal2-grow-column {\n" + "    flex: 1;\n" + "    flex-direction: column; }\n" + "    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n" + "      align-items: center; }\n" + "    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n" + "      align-items: flex-start; }\n" + "    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n" + "      align-items: flex-end; }\n" + "    .swal2-container.swal2-grow-column > .swal2-modal {\n" + "      display: flex !important;\n" + "      flex: 1;\n" + "      align-content: center;\n" + "      justify-content: center; }\n" + "  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n" + "    margin: auto; }\n" + "  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" + "    .swal2-container .swal2-modal {\n" + "      margin: 0 !important; } }\n" + "  .swal2-container.swal2-fade {\n" + "    transition: background-color .1s; }\n" + "  .swal2-container.swal2-shown {\n" + "    background-color: rgba(0, 0, 0, 0.4); }\n" + "\n" + ".swal2-popup {\n" + "  display: none;\n" + "  position: relative;\n" + "  flex-direction: column;\n" + "  justify-content: center;\n" + "  width: 32em;\n" + "  max-width: 100%;\n" + "  padding: 1.25em;\n" + "  border-radius: 0.3125em;\n" + "  background: #fff;\n" + "  font-family: inherit;\n" + "  font-size: 1rem;\n" + "  box-sizing: border-box; }\n" + "  .swal2-popup:focus {\n" + "    outline: none; }\n" + "  .swal2-popup.swal2-loading {\n" + "    overflow-y: hidden; }\n" + "  .swal2-popup .swal2-header {\n" + "    display: flex;\n" + "    flex-direction: column;\n" + "    align-items: center; }\n" + "  .swal2-popup .swal2-title {\n" + "    display: block;\n" + "    position: relative;\n" + "    max-width: 100%;\n" + "    margin: 0 0 0.4em;\n" + "    padding: 0;\n" + "    color: #595959;\n" + "    font-size: 1.875em;\n" + "    font-weight: 600;\n" + "    text-align: center;\n" + "    text-transform: none;\n" + "    word-wrap: break-word; }\n" + "  .swal2-popup .swal2-actions {\n" + "    align-items: center;\n" + "    justify-content: center;\n" + "    margin: 1.25em auto 0; }\n" + "    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n" + "      opacity: .4; }\n" + "    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n" + "      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n" + "    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n" + "      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n" + "    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n" + "      width: 2.5em;\n" + "      height: 2.5em;\n" + "      margin: .46875em;\n" + "      padding: 0;\n" + "      border: .25em solid transparent;\n" + "      border-radius: 100%;\n" + "      border-color: transparent;\n" + "      background-color: transparent !important;\n" + "      color: transparent;\n" + "      cursor: default;\n" + "      box-sizing: border-box;\n" + "      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" + "              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" + "      -webkit-user-select: none;\n" + "         -moz-user-select: none;\n" + "          -ms-user-select: none;\n" + "              user-select: none; }\n" + "    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n" + "      margin-right: 30px;\n" + "      margin-left: 30px; }\n" + "    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n" + "      display: inline-block;\n" + "      width: 15px;\n" + "      height: 15px;\n" + "      margin-left: 5px;\n" + "      border: 3px solid #999999;\n" + "      border-radius: 50%;\n" + "      border-right-color: transparent;\n" + "      box-shadow: 1px 1px 1px #fff;\n" + "      content: '';\n" + "      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" + "              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n" + "  .swal2-popup .swal2-styled {\n" + "    margin: 0 .3125em;\n" + "    padding: .625em 2em;\n" + "    font-weight: 500;\n" + "    box-shadow: none; }\n" + "    .swal2-popup .swal2-styled:not([disabled]) {\n" + "      cursor: pointer; }\n" + "    .swal2-popup .swal2-styled.swal2-confirm {\n" + "      border: 0;\n" + "      border-radius: 0.25em;\n" + "      background: initial;\n" + "      background-color: #3085d6;\n" + "      color: #fff;\n" + "      font-size: 1.0625em; }\n" + "    .swal2-popup .swal2-styled.swal2-cancel {\n" + "      border: 0;\n" + "      border-radius: 0.25em;\n" + "      background: initial;\n" + "      background-color: #aaa;\n" + "      color: #fff;\n" + "      font-size: 1.0625em; }\n" + "    .swal2-popup .swal2-styled:focus {\n" + "      outline: none;\n" + "      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n" + "    .swal2-popup .swal2-styled::-moz-focus-inner {\n" + "      border: 0; }\n" + "  .swal2-popup .swal2-footer {\n" + "    justify-content: center;\n" + "    margin: 1.25em 0 0;\n" + "    padding-top: 1em;\n" + "    border-top: 1px solid #eee;\n" + "    color: #545454;\n" + "    font-size: 1em; }\n" + "  .swal2-popup .swal2-image {\n" + "    max-width: 100%;\n" + "    margin: 1.25em auto; }\n" + "  .swal2-popup .swal2-close {\n" + "    position: absolute;\n" + "    top: 0;\n" + "    right: 0;\n" + "    justify-content: center;\n" + "    width: 1.2em;\n" + "    min-width: 1.2em;\n" + "    height: 1.2em;\n" + "    margin: 0;\n" + "    padding: 0;\n" + "    transition: color 0.1s ease-out;\n" + "    border: none;\n" + "    border-radius: 0;\n" + "    background: transparent;\n" + "    color: #cccccc;\n" + "    font-family: serif;\n" + "    font-size: calc(2.5em - 0.25em);\n" + "    line-height: 1.2em;\n" + "    cursor: pointer; }\n" + "    .swal2-popup .swal2-close:hover {\n" + "      -webkit-transform: none;\n" + "              transform: none;\n" + "      color: #f27474; }\n" + "  .swal2-popup > .swal2-input,\n" + "  .swal2-popup > .swal2-file,\n" + "  .swal2-popup > .swal2-textarea,\n" + "  .swal2-popup > .swal2-select,\n" + "  .swal2-popup > .swal2-radio,\n" + "  .swal2-popup > .swal2-checkbox {\n" + "    display: none; }\n" + "  .swal2-popup .swal2-content {\n" + "    justify-content: center;\n" + "    margin: 0;\n" + "    padding: 0;\n" + "    color: #545454;\n" + "    font-size: 1.125em;\n" + "    font-weight: 300;\n" + "    line-height: normal;\n" + "    word-wrap: break-word; }\n" + "  .swal2-popup #swal2-content {\n" + "    text-align: center; }\n" + "  .swal2-popup .swal2-input,\n" + "  .swal2-popup .swal2-file,\n" + "  .swal2-popup .swal2-textarea,\n" + "  .swal2-popup .swal2-select,\n" + "  .swal2-popup .swal2-radio,\n" + "  .swal2-popup .swal2-checkbox {\n" + "    margin: 1em auto; }\n" + "  .swal2-popup .swal2-input,\n" + "  .swal2-popup .swal2-file,\n" + "  .swal2-popup .swal2-textarea {\n" + "    width: 100%;\n" + "    transition: border-color .3s, box-shadow .3s;\n" + "    border: 1px solid #d9d9d9;\n" + "    border-radius: 0.1875em;\n" + "    font-size: 1.125em;\n" + "    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n" + "    box-sizing: border-box; }\n" + "    .swal2-popup .swal2-input.swal2-inputerror,\n" + "    .swal2-popup .swal2-file.swal2-inputerror,\n" + "    .swal2-popup .swal2-textarea.swal2-inputerror {\n" + "      border-color: #f27474 !important;\n" + "      box-shadow: 0 0 2px #f27474 !important; }\n" + "    .swal2-popup .swal2-input:focus,\n" + "    .swal2-popup .swal2-file:focus,\n" + "    .swal2-popup .swal2-textarea:focus {\n" + "      border: 1px solid #b4dbed;\n" + "      outline: none;\n" + "      box-shadow: 0 0 3px #c4e6f5; }\n" + "    .swal2-popup .swal2-input::-webkit-input-placeholder,\n" + "    .swal2-popup .swal2-file::-webkit-input-placeholder,\n" + "    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n" + "      color: #cccccc; }\n" + "    .swal2-popup .swal2-input:-ms-input-placeholder,\n" + "    .swal2-popup .swal2-file:-ms-input-placeholder,\n" + "    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n" + "      color: #cccccc; }\n" + "    .swal2-popup .swal2-input::-ms-input-placeholder,\n" + "    .swal2-popup .swal2-file::-ms-input-placeholder,\n" + "    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n" + "      color: #cccccc; }\n" + "    .swal2-popup .swal2-input::placeholder,\n" + "    .swal2-popup .swal2-file::placeholder,\n" + "    .swal2-popup .swal2-textarea::placeholder {\n" + "      color: #cccccc; }\n" + "  .swal2-popup .swal2-range input {\n" + "    width: 80%; }\n" + "  .swal2-popup .swal2-range output {\n" + "    width: 20%;\n" + "    font-weight: 600;\n" + "    text-align: center; }\n" + "  .swal2-popup .swal2-range input,\n" + "  .swal2-popup .swal2-range output {\n" + "    height: 2.625em;\n" + "    margin: 1em auto;\n" + "    padding: 0;\n" + "    font-size: 1.125em;\n" + "    line-height: 2.625em; }\n" + "  .swal2-popup .swal2-input {\n" + "    height: 2.625em;\n" + "    padding: 0.75em; }\n" + "    .swal2-popup .swal2-input[type='number'] {\n" + "      max-width: 10em; }\n" + "  .swal2-popup .swal2-file {\n" + "    font-size: 1.125em; }\n" + "  .swal2-popup .swal2-textarea {\n" + "    height: 6.75em;\n" + "    padding: 0.75em; }\n" + "  .swal2-popup .swal2-select {\n" + "    min-width: 50%;\n" + "    max-width: 100%;\n" + "    padding: .375em .625em;\n" + "    color: #545454;\n" + "    font-size: 1.125em; }\n" + "  .swal2-popup .swal2-radio,\n" + "  .swal2-popup .swal2-checkbox {\n" + "    align-items: center;\n" + "    justify-content: center; }\n" + "    .swal2-popup .swal2-radio label,\n" + "    .swal2-popup .swal2-checkbox label {\n" + "      margin: 0 .6em;\n" + "      font-size: 1.125em; }\n" + "    .swal2-popup .swal2-radio input,\n" + "    .swal2-popup .swal2-checkbox input {\n" + "      margin: 0 .4em; }\n" + "  .swal2-popup .swal2-validationerror {\n" + "    display: none;\n" + "    align-items: center;\n" + "    justify-content: center;\n" + "    padding: 0.625em;\n" + "    background: #f0f0f0;\n" + "    color: #666666;\n" + "    font-size: 1em;\n" + "    font-weight: 300;\n" + "    overflow: hidden; }\n" + "    .swal2-popup .swal2-validationerror::before {\n" + "      display: inline-block;\n" + "      width: 1.5em;\n" + "      height: 1.5em;\n" + "      margin: 0 .625em;\n" + "      border-radius: 50%;\n" + "      background-color: #f27474;\n" + "      color: #fff;\n" + "      font-weight: 600;\n" + "      line-height: 1.5em;\n" + "      text-align: center;\n" + "      content: '!';\n" + "      zoom: normal; }\n" + "\n" + "@supports (-ms-accelerator: true) {\n" + "  .swal2-range input {\n" + "    width: 100% !important; }\n" + "  .swal2-range output {\n" + "    display: none; } }\n" + "\n" + "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" + "  .swal2-range input {\n" + "    width: 100% !important; }\n" + "  .swal2-range output {\n" + "    display: none; } }\n" + "\n" + ".swal2-icon {\n" + "  position: relative;\n" + "  justify-content: center;\n" + "  width: 5em;\n" + "  height: 5em;\n" + "  margin: 1.25em auto 1.875em;\n" + "  border: .25em solid transparent;\n" + "  border-radius: 50%;\n" + "  line-height: 5em;\n" + "  cursor: default;\n" + "  box-sizing: content-box;\n" + "  -webkit-user-select: none;\n" + "     -moz-user-select: none;\n" + "      -ms-user-select: none;\n" + "          user-select: none;\n" + "  zoom: normal; }\n" + "  .swal2-icon-text {\n" + "    font-size: 3.75em; }\n" + "  .swal2-icon.swal2-error {\n" + "    border-color: #f27474; }\n" + "    .swal2-icon.swal2-error .swal2-x-mark {\n" + "      position: relative;\n" + "      flex-grow: 1; }\n" + "    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" + "      display: block;\n" + "      position: absolute;\n" + "      top: 2.3125em;\n" + "      width: 2.9375em;\n" + "      height: .3125em;\n" + "      border-radius: .125em;\n" + "      background-color: #f27474; }\n" + "      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" + "        left: 1.0625em;\n" + "        -webkit-transform: rotate(45deg);\n" + "                transform: rotate(45deg); }\n" + "      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" + "        right: 1em;\n" + "        -webkit-transform: rotate(-45deg);\n" + "                transform: rotate(-45deg); }\n" + "  .swal2-icon.swal2-warning {\n" + "    border-color: #facea8;\n" + "    color: #f8bb86; }\n" + "  .swal2-icon.swal2-info {\n" + "    border-color: #9de0f6;\n" + "    color: #3fc3ee; }\n" + "  .swal2-icon.swal2-question {\n" + "    border-color: #c9dae1;\n" + "    color: #87adbd; }\n" + "  .swal2-icon.swal2-success {\n" + "    border-color: #a5dc86; }\n" + "    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n" + "      position: absolute;\n" + "      width: 3.75em;\n" + "      height: 7.5em;\n" + "      -webkit-transform: rotate(45deg);\n" + "              transform: rotate(45deg);\n" + "      border-radius: 50%; }\n" + "      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" + "        top: -.4375em;\n" + "        left: -2.0635em;\n" + "        -webkit-transform: rotate(-45deg);\n" + "                transform: rotate(-45deg);\n" + "        -webkit-transform-origin: 3.75em 3.75em;\n" + "                transform-origin: 3.75em 3.75em;\n" + "        border-radius: 7.5em 0 0 7.5em; }\n" + "      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" + "        top: -.6875em;\n" + "        left: 1.875em;\n" + "        -webkit-transform: rotate(-45deg);\n" + "                transform: rotate(-45deg);\n" + "        -webkit-transform-origin: 0 3.75em;\n" + "                transform-origin: 0 3.75em;\n" + "        border-radius: 0 7.5em 7.5em 0; }\n" + "    .swal2-icon.swal2-success .swal2-success-ring {\n" + "      position: absolute;\n" + "      top: -.25em;\n" + "      left: -.25em;\n" + "      width: 100%;\n" + "      height: 100%;\n" + "      border: 0.25em solid rgba(165, 220, 134, 0.3);\n" + "      border-radius: 50%;\n" + "      z-index: 2;\n" + "      box-sizing: content-box; }\n" + "    .swal2-icon.swal2-success .swal2-success-fix {\n" + "      position: absolute;\n" + "      top: .5em;\n" + "      left: 1.625em;\n" + "      width: .4375em;\n" + "      height: 5.625em;\n" + "      -webkit-transform: rotate(-45deg);\n" + "              transform: rotate(-45deg);\n" + "      z-index: 1; }\n" + "    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n" + "      display: block;\n" + "      position: absolute;\n" + "      height: .3125em;\n" + "      border-radius: .125em;\n" + "      background-color: #a5dc86;\n" + "      z-index: 2; }\n" + "      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n" + "        top: 2.875em;\n" + "        left: .875em;\n" + "        width: 1.5625em;\n" + "        -webkit-transform: rotate(45deg);\n" + "                transform: rotate(45deg); }\n" + "      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n" + "        top: 2.375em;\n" + "        right: .5em;\n" + "        width: 2.9375em;\n" + "        -webkit-transform: rotate(-45deg);\n" + "                transform: rotate(-45deg); }\n" + "\n" + ".swal2-progresssteps {\n" + "  align-items: center;\n" + "  margin: 0 0 1.25em;\n" + "  padding: 0;\n" + "  font-weight: 600; }\n" + "  .swal2-progresssteps li {\n" + "    display: inline-block;\n" + "    position: relative; }\n" + "  .swal2-progresssteps .swal2-progresscircle {\n" + "    width: 2em;\n" + "    height: 2em;\n" + "    border-radius: 2em;\n" + "    background: #3085d6;\n" + "    color: #fff;\n" + "    line-height: 2em;\n" + "    text-align: center;\n" + "    z-index: 20; }\n" + "    .swal2-progresssteps .swal2-progresscircle:first-child {\n" + "      margin-left: 0; }\n" + "    .swal2-progresssteps .swal2-progresscircle:last-child {\n" + "      margin-right: 0; }\n" + "    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n" + "      background: #3085d6; }\n" + "      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n" + "        background: #add8e6; }\n" + "      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n" + "        background: #add8e6; }\n" + "  .swal2-progresssteps .swal2-progressline {\n" + "    width: 2.5em;\n" + "    height: .4em;\n" + "    margin: 0 -1px;\n" + "    background: #3085d6;\n" + "    z-index: 10; }\n" + "\n" + "[class^='swal2'] {\n" + "  -webkit-tap-highlight-color: transparent; }\n" + "\n" + ".swal2-show {\n" + "  -webkit-animation: swal2-show 0.3s;\n" + "          animation: swal2-show 0.3s; }\n" + "  .swal2-show.swal2-noanimation {\n" + "    -webkit-animation: none;\n" + "            animation: none; }\n" + "\n" + ".swal2-hide {\n" + "  -webkit-animation: swal2-hide 0.15s forwards;\n" + "          animation: swal2-hide 0.15s forwards; }\n" + "  .swal2-hide.swal2-noanimation {\n" + "    -webkit-animation: none;\n" + "            animation: none; }\n" + "\n" + "[dir='rtl'] .swal2-close {\n" + "  right: auto;\n" + "  left: 0; }\n" + "\n" + ".swal2-animate-success-icon .swal2-success-line-tip {\n" + "  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n" + "          animation: swal2-animate-success-line-tip 0.75s; }\n" + "\n" + ".swal2-animate-success-icon .swal2-success-line-long {\n" + "  -webkit-animation: swal2-animate-success-line-long 0.75s;\n" + "          animation: swal2-animate-success-line-long 0.75s; }\n" + "\n" + ".swal2-animate-success-icon .swal2-success-circular-line-right {\n" + "  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n" + "          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n" + "\n" + ".swal2-animate-error-icon {\n" + "  -webkit-animation: swal2-animate-error-icon 0.5s;\n" + "          animation: swal2-animate-error-icon 0.5s; }\n" + "  .swal2-animate-error-icon .swal2-x-mark {\n" + "    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n" + "            animation: swal2-animate-error-x-mark 0.5s; }\n" + "\n" + "@-webkit-keyframes swal2-rotate-loading {\n" + "  0% {\n" + "    -webkit-transform: rotate(0deg);\n" + "            transform: rotate(0deg); }\n" + "  100% {\n" + "    -webkit-transform: rotate(360deg);\n" + "            transform: rotate(360deg); } }\n" + "\n" + "@keyframes swal2-rotate-loading {\n" + "  0% {\n" + "    -webkit-transform: rotate(0deg);\n" + "            transform: rotate(0deg); }\n" + "  100% {\n" + "    -webkit-transform: rotate(360deg);\n" + "            transform: rotate(360deg); } }");
/**
 * jQuery Bar Rating Plugin v1.2.1
 *
 * http://github.com/antennaio/jquery-bar-rating
 *
 * Copyright (c) 2012-2016 Kazik Pietruszewski
 *
 * This plugin is available under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof2(module)) === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // browser globals
    factory(jQuery);
  }
})(function ($) {

  var BarRating = function () {

    function BarRating() {
      var self = this;

      // wrap element in a wrapper div
      var wrapElement = function wrapElement() {
        var classes = ['br-wrapper'];

        if (self.options.theme !== '') {
          classes.push('br-theme-' + self.options.theme);
        }

        self.$elem.wrap($('<div />', {
          'class': classes.join(' ')
        }));
      };

      // unwrap element
      var unwrapElement = function unwrapElement() {
        self.$elem.unwrap();
      };

      // find option by value
      var findOption = function findOption(value) {
        if ($.isNumeric(value)) {
          value = Math.floor(value);
        }

        return $('option[value="' + value + '"]', self.$elem);
      };

      // get initial option
      var getInitialOption = function getInitialOption() {
        var initialRating = self.options.initialRating;

        if (!initialRating) {
          return $('option:selected', self.$elem);
        }

        return findOption(initialRating);
      };

      // get empty option
      var getEmptyOption = function getEmptyOption() {
        var $emptyOpt = self.$elem.find('option[value="' + self.options.emptyValue + '"]');

        if (!$emptyOpt.length && self.options.allowEmpty) {
          $emptyOpt = $('<option />', { 'value': self.options.emptyValue });

          return $emptyOpt.prependTo(self.$elem);
        }

        return $emptyOpt;
      };

      // get data
      var getData = function getData(key) {
        var data = self.$elem.data('barrating');

        if (typeof key !== 'undefined') {
          return data[key];
        }

        return data;
      };

      // set data
      var setData = function setData(key, value) {
        if (value !== null && (typeof value === "undefined" ? "undefined" : _typeof2(value)) === 'object') {
          self.$elem.data('barrating', value);
        } else {
          self.$elem.data('barrating')[key] = value;
        }
      };

      // save data on element
      var saveDataOnElement = function saveDataOnElement() {
        var $opt = getInitialOption();
        var $emptyOpt = getEmptyOption();

        var value = $opt.val();
        var text = $opt.data('html') ? $opt.data('html') : $opt.text();

        // if the allowEmpty option is not set let's check if empty option exists in the select field
        var allowEmpty = self.options.allowEmpty !== null ? self.options.allowEmpty : !!$emptyOpt.length;

        var emptyValue = $emptyOpt.length ? $emptyOpt.val() : null;
        var emptyText = $emptyOpt.length ? $emptyOpt.text() : null;

        setData(null, {
          userOptions: self.options,

          // initial rating based on the OPTION value
          ratingValue: value,
          ratingText: text,

          // rating will be restored by calling clear method
          originalRatingValue: value,
          originalRatingText: text,

          // allow empty ratings?
          allowEmpty: allowEmpty,

          // rating value and text of the empty OPTION
          emptyRatingValue: emptyValue,
          emptyRatingText: emptyText,

          // read-only state
          readOnly: self.options.readonly,

          // did the user already select a rating?
          ratingMade: false
        });
      };

      // remove data on element
      var removeDataOnElement = function removeDataOnElement() {
        self.$elem.removeData('barrating');
      };

      // return current rating text
      var ratingText = function ratingText() {
        return getData('ratingText');
      };

      // return current rating value
      var ratingValue = function ratingValue() {
        return getData('ratingValue');
      };

      // build widget and return jQuery element
      var buildWidget = function buildWidget() {
        var $w = $('<div />', { 'class': 'br-widget' });

        // create A elements that will replace OPTIONs
        self.$elem.find('option').each(function () {
          var val, text, html, $a;

          val = $(this).val();

          // create ratings - but only if val is not defined as empty
          if (val !== getData('emptyRatingValue')) {
            text = $(this).text();
            html = $(this).data('html');
            if (html) {
              text = html;
            }

            $a = $('<a />', {
              'href': '#',
              'data-rating-value': val,
              'data-rating-text': text,
              'html': self.options.showValues ? text : ''
            });

            $w.append($a);
          }
        });

        // append .br-current-rating div to the widget
        if (self.options.showSelectedRating) {
          $w.append($('<div />', { 'text': '', 'class': 'br-current-rating' }));
        }

        // additional classes for the widget
        if (self.options.reverse) {
          $w.addClass('br-reverse');
        }

        if (self.options.readonly) {
          $w.addClass('br-readonly');
        }

        return $w;
      };

      // return a jQuery function name depending on the 'reverse' setting
      var nextAllorPreviousAll = function nextAllorPreviousAll() {
        if (getData('userOptions').reverse) {
          return 'nextAll';
        } else {
          return 'prevAll';
        }
      };

      // set the value of the select field
      var setSelectFieldValue = function setSelectFieldValue(value) {
        // change selected option
        findOption(value).prop('selected', true);

        self.$elem.change();
      };

      // reset select field
      var resetSelectField = function resetSelectField() {
        $('option', self.$elem).prop('selected', function () {
          return this.defaultSelected;
        });

        self.$elem.change();
      };

      // display the currently selected rating
      var showSelectedRating = function showSelectedRating(text) {
        // text undefined?
        text = text ? text : ratingText();

        // special case when the selected rating is defined as empty
        if (text == getData('emptyRatingText')) {
          text = '';
        }

        // update .br-current-rating div
        if (self.options.showSelectedRating) {
          self.$elem.parent().find('.br-current-rating').text(text);
        }
      };

      // return rounded fraction of a value (14.4 -> 40, 0.99 -> 90)
      var fraction = function fraction(value) {
        return Math.round(Math.floor(value * 10) / 10 % 1 * 100);
      };

      // remove all classes from elements
      var resetStyle = function resetStyle() {
        // remove all classes starting with br-*
        self.$widget.find('a').removeClass(function (index, classes) {
          return (classes.match(/(^|\s)br-\S+/g) || []).join(' ');
        });
      };

      // apply style by setting classes on elements
      var applyStyle = function applyStyle() {
        var $a = self.$widget.find('a[data-rating-value="' + ratingValue() + '"]');
        var initialRating = getData('userOptions').initialRating;
        var baseValue = $.isNumeric(ratingValue()) ? ratingValue() : 0;
        var f = fraction(initialRating);
        var $all, $fractional;

        resetStyle();

        // add classes
        $a.addClass('br-selected br-current')[nextAllorPreviousAll()]().addClass('br-selected');

        if (!getData('ratingMade') && $.isNumeric(initialRating)) {
          if (initialRating <= baseValue || !f) {
            return;
          }

          $all = self.$widget.find('a');

          $fractional = $a.length ? $a[getData('userOptions').reverse ? 'prev' : 'next']() : $all[getData('userOptions').reverse ? 'last' : 'first']();

          $fractional.addClass('br-fractional');
          $fractional.addClass('br-fractional-' + f);
        }
      };

      // check if the element is deselectable?
      var isDeselectable = function isDeselectable($element) {
        if (!getData('allowEmpty') || !getData('userOptions').deselectable) {
          return false;
        }

        return ratingValue() == $element.attr('data-rating-value');
      };

      // handle click events
      var attachClickHandler = function attachClickHandler($elements) {
        $elements.on('click.barrating', function (event) {
          var $a = $(this),
              options = getData('userOptions'),
              value,
              text;

          event.preventDefault();

          value = $a.attr('data-rating-value');
          text = $a.attr('data-rating-text');

          // is current and deselectable?
          if (isDeselectable($a)) {
            value = getData('emptyRatingValue');
            text = getData('emptyRatingText');
          }

          // remember selected rating
          setData('ratingValue', value);
          setData('ratingText', text);
          setData('ratingMade', true);

          setSelectFieldValue(value);
          showSelectedRating(text);

          applyStyle();

          // onSelect callback
          options.onSelect.call(self, ratingValue(), ratingText(), event);

          return false;
        });
      };

      // handle mouseenter events
      var attachMouseEnterHandler = function attachMouseEnterHandler($elements) {
        $elements.on('mouseenter.barrating', function () {
          var $a = $(this);

          resetStyle();

          $a.addClass('br-active')[nextAllorPreviousAll()]().addClass('br-active');

          showSelectedRating($a.attr('data-rating-text'));
        });
      };

      // handle mouseleave events
      var attachMouseLeaveHandler = function attachMouseLeaveHandler($elements) {
        self.$widget.on('mouseleave.barrating blur.barrating', function () {
          showSelectedRating();
          applyStyle();
        });
      };

      // somewhat primitive way to remove 300ms click delay on touch devices
      // for a more advanced solution consider setting `fastClicks` option to false
      // and using a library such as fastclick (https://github.com/ftlabs/fastclick)
      var fastClicks = function fastClicks($elements) {
        $elements.on('touchstart.barrating', function (event) {
          event.preventDefault();
          event.stopPropagation();

          $(this).click();
        });
      };

      // disable clicks
      var disableClicks = function disableClicks($elements) {
        $elements.on('click.barrating', function (event) {
          event.preventDefault();
        });
      };

      var attachHandlers = function attachHandlers($elements) {
        // attach click event handler
        attachClickHandler($elements);

        if (self.options.hoverState) {
          // attach mouseenter event handler
          attachMouseEnterHandler($elements);

          // attach mouseleave event handler
          attachMouseLeaveHandler($elements);
        }
      };

      var detachHandlers = function detachHandlers($elements) {
        // remove event handlers in the ".barrating" namespace
        $elements.off('.barrating');
      };

      var setupHandlers = function setupHandlers(readonly) {
        var $elements = self.$widget.find('a');

        if (fastClicks) {
          fastClicks($elements);
        }

        if (readonly) {
          detachHandlers($elements);
          disableClicks($elements);
        } else {
          attachHandlers($elements);
        }
      };

      this.show = function () {
        // run only once
        if (getData()) return;

        // wrap element
        wrapElement();

        // save data
        saveDataOnElement();

        // build & append widget to the DOM
        self.$widget = buildWidget();
        self.$widget.insertAfter(self.$elem);

        applyStyle();

        showSelectedRating();

        setupHandlers(self.options.readonly);

        // hide the select field
        self.$elem.hide();
      };

      this.readonly = function (state) {
        if (typeof state !== 'boolean' || getData('readOnly') == state) return;

        setupHandlers(state);
        setData('readOnly', state);
        self.$widget.toggleClass('br-readonly');
      };

      this.set = function (value) {
        var options = getData('userOptions');

        if (!self.$elem.find('option[value="' + value + '"]').val()) return;

        // set data
        setData('ratingValue', value);
        setData('ratingText', self.$elem.find('option[value="' + value + '"]').text());
        setData('ratingMade', true);

        setSelectFieldValue(ratingValue());
        showSelectedRating(ratingText());

        applyStyle();

        // onSelect callback
        if (!options.silent) {
          options.onSelect.call(this, ratingValue(), ratingText());
        }
      };

      this.clear = function () {
        var options = getData('userOptions');

        // restore original data
        setData('ratingValue', getData('originalRatingValue'));
        setData('ratingText', getData('originalRatingText'));
        setData('ratingMade', false);

        resetSelectField();
        showSelectedRating(ratingText());

        applyStyle();

        // onClear callback
        options.onClear.call(this, ratingValue(), ratingText());
      };

      this.destroy = function () {
        var value = ratingValue();
        var text = ratingText();
        var options = getData('userOptions');

        // detach handlers
        detachHandlers(self.$widget.find('a'));

        // remove widget
        self.$widget.remove();

        // remove data
        removeDataOnElement();

        // unwrap the element
        unwrapElement();

        // show the element
        self.$elem.show();

        // onDestroy callback
        options.onDestroy.call(this, value, text);
      };
    }

    BarRating.prototype.init = function (options, elem) {
      this.$elem = $(elem);
      this.options = $.extend({}, $.fn.barrating.defaults, options);

      return this.options;
    };

    return BarRating;
  }();

  $.fn.barrating = function (method, options) {
    return this.each(function () {
      var plugin = new BarRating();

      // plugin works with select fields
      if (!$(this).is('select')) {
        $.error('Sorry, this plugin only works with select fields.');
      }

      // method supplied
      if (plugin.hasOwnProperty(method)) {
        plugin.init(options, this);
        if (method === 'show') {
          return plugin.show(options);
        } else {
          // plugin exists?
          if (plugin.$elem.data('barrating')) {
            plugin.$widget = $(this).next('.br-widget');
            return plugin[method](options);
          }
        }

        // no method supplied or only options supplied
      } else if ((typeof method === "undefined" ? "undefined" : _typeof2(method)) === 'object' || !method) {
        options = method;
        plugin.init(options, this);
        return plugin.show();
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.barrating');
      }
    });
  };

  $.fn.barrating.defaults = {
    theme: '',
    initialRating: null, // initial rating
    allowEmpty: null, // allow empty ratings?
    emptyValue: '', // this is the expected value of the empty rating
    showValues: false, // display rating values on the bars?
    showSelectedRating: true, // append a div with a rating to the widget?
    deselectable: true, // allow to deselect ratings?
    reverse: false, // reverse the rating?
    readonly: false, // make the rating ready-only?
    fastClicks: true, // remove 300ms click delay on touch devices?
    hoverState: true, // change state on hover?
    silent: false, // supress callbacks when controlling ratings programatically
    onSelect: function onSelect(value, text, event) {}, // callback fired when a rating is selected
    onClear: function onClear(value, text) {}, // callback fired when a rating is cleared
    onDestroy: function onDestroy(value, text) {} // callback fired when a widget is destroyed
  };

  $.fn.barrating.BarRating = BarRating;
});

$(function () {
  //'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  });
});

$(function () {
  $('.lazy').lazy();
});

$(function () {
  var min_slider = document.getElementById("min_rating");
  var output = document.getElementById("min_rateoutput");
  var max_slider = document.getElementById("max_rating");
  var output = document.getElementById("max_rateoutput");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value + ' Star';
  };
});

$(document).ready(function () {
  $(".left-first-section").click(function () {
    $('.main-section').toggleClass("open-more");
  });
});
$(document).ready(function () {
  $(".fa-minus").click(function () {
    $('.main-section').toggleClass("open-more");
  });
});
$(document).ready(function () {
  $(".fa-times").click(function () {
    $('.main-section').toggleClass("open-more");
  });
});

$(document).ready(function () {
  $('.card-list').slick({
    accessibility: true,
    centerMode: true,
    autoplay: false,
    centerPadding: '50px',
    slidesToShow: 2,
    responsive: [
    // {
    //   breakpoint: 1281,
    //   settings: {
    //     arrows: true,
    //     centerMode: true,
    //     centerPadding: '250px',
    //     slidesToShow: 1
    //   }
    // },
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }]
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  var player = new Plyr('#player');
  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', function () {
    player.play();
  });

  // Pause
  on('.js-pause', 'click', function () {
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', function () {
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', function () {
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', function () {
    player.forward();
  });
});

$(document).ready(function () {
  $('#min_rating').barrating({
    theme: 'fontawesome-stars'
  });
  $('#max_rating').barrating({
    theme: 'fontawesome-stars'
  });
  $('#rating').barrating({
    theme: 'fontawesome-stars'
  });
});