! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }
    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function d(e, t) {
        const s = r(),
            i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function(e, t) {
                if ("string" != typeof e) return [e];
                const s = [],
                    a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const c = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...a)
            })), this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...a)
            })), this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            this.forEach((e => {
                a.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;

            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: l
                        }), t.addEventListener(e, l, n)
                    } else
                        for (p = 0; p < c.length; p += 1) {
                            const e = c[p];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: r,
                                proxyListener: o
                            }), t.addEventListener(e, o, n)
                        }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const i = a[e];
                            r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function() {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "),
                n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r(),
                    t = a(),
                    s = this[0],
                    i = s.getBoundingClientRect(),
                    n = t.body,
                    l = s.clientTop || n.clientTop || 0,
                    o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop,
                    c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r(),
                s = a(),
                i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function() {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (e instanceof n)
                    for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function(e) {
            return d(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function p(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function u() {
        return Date.now()
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t],
                        r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }

    function v(e, t, s) {
        e.style.setProperty(t, s)
    }

    function w(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: a
        } = e;
        const i = r(),
            n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
            p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
                l = (new Date).getTime(), null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0),
                    r = .5 - Math.cos(e * Math.PI) / 2;
                let c = n + r * (s - n);
                if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                        [a]: c
                    }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [a]: c
                    })
                })), void i.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = i.requestAnimationFrame(u)
            };
        u()
    }
    let b, x, y;

    function E() {
        return b || (b = function() {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function C(e) {
        return void 0 === e && (e = {}), x || (x = function(e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const s = E(),
                a = r(),
                i = a.navigator.platform,
                n = t || a.navigator.userAgent,
                l = {
                    ios: !1,
                    android: !1
                },
                o = a.screen.width,
                d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
        }(e)), x
    }

    function T() {
        return y || (y = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), y
    }
    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        })
    }));
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t, a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    var S = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;

            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }

            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }
            const a = e.params,
                {
                    $wrapperEl: i,
                    size: r,
                    rtlTranslate: n,
                    wrongRTL: l
                } = e,
                o = e.virtual && a.virtual.enabled,
                d = o ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`),
                p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [],
                m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
                b = e.slidesGrid.length;
            let x = a.spaceBetween,
                y = -f,
                E = 0,
                C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]),
                            l = n[0].style.transform,
                            o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else {
                            const e = s(r, "width"),
                                t = s(r, "padding-left"),
                                a = s(r, "padding-right"),
                                i = s(r, "margin-left"),
                                l = s(r, "margin-right"),
                                o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l;
                            else {
                                const {
                                    clientWidth: s,
                                    offsetWidth: r
                                } = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                    width: `${e.virtualSize + a.spaceBetween}px`
                }), a.setWrapperSize && i.css({
                    [t("width")]: `${e.virtualSize + a.spaceBetween}px`
                }), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({
                    [s]: `${x}px`
                })
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t => {
                        e += t + (a.spaceBetween ? a.spaceBetween : 0)
                    })), e -= a.spaceBetween, e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e, s) => {
                        u[s] = e - t
                    })), h.forEach(((e, s) => {
                        h[s] = e + t
                    }))
                }
            }
            if (Object.assign(e, {
                    slides: c,
                    snapGrid: u,
                    slidesGrid: h,
                    slidesSizesGrid: m
                }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`,
                    s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this,
                s = [],
                a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)(t.visibleSlides || d([])).each((e => {
                    s.push(e)
                }));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a) break;
                        s.push(n(e))
                    } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this,
                s = t.params,
                {
                    slides: a,
                    rtlTranslate: i,
                    snapGrid: r
                } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    p = -(n - o),
                    u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params,
                a = t.maxTranslate() - t.minTranslate();
            let {
                progress: i,
                isBeginning: r,
                isEnd: n
            } = t;
            const l = r,
                o = n;
            0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: s,
                    $wrapperEl: a,
                    activeIndex: i,
                    realIndex: r
                } = e,
                n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    slidesGrid: a,
                    snapGrid: i,
                    params: r,
                    activeIndex: n,
                    realIndex: l,
                    snapIndex: o
                } = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s);
            else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this,
                s = t.params,
                a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === a) {
                        r = !0, i = e;
                        break
                    }
            if (!a || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
                params: t,
                rtlTranslate: s,
                translate: a,
                $wrapperEl: i
            } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            const s = this,
                {
                    rtlTranslate: a,
                    params: i,
                    $wrapperEl: r,
                    wrapperEl: n,
                    progress: l
                } = s;
            let o, d = 0,
                c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this,
                {
                    params: n,
                    wrapperEl: l
                } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
                d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function P(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: a,
            step: i
        } = e;
        const {
            activeIndex: r,
            previousIndex: n
        } = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var k = {
        slideTo: function(e, t, s, a, i) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: m
            } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * v),
                        s = Math.floor(100 * d[e]),
                        a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(),
                    s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top"
                    }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    animating: i,
                    enabled: r,
                    params: n
                } = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    params: i,
                    animating: r,
                    snapGrid: n,
                    slidesGrid: l,
                    rtlTranslate: o,
                    enabled: d
                } = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = c(o ? a.translate : -a.translate),
                u = n.map((e => c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t, s) => {
                    p >= t && (e = s)
                })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        },
        slideReset: function(e, t, s) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: s
                } = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    $wrapperEl: i
                } = e,
                r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = [],
                o = [];
            n.each(((e, t) => {
                d(e).attr("data-swiper-slide-index", t)
            }));
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0])
            }
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const {
                activeIndex: t,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l
            } = e;
            let o;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
        },
        loopDestroy: function() {
            const {
                $wrapperEl: e,
                params: t,
                slides: s
            } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
        }
    };

    function L(e) {
        const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {
                params: l,
                touches: o,
                enabled: c
            } = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass,
            f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (v ? function(e, t) {
                return void 0 === t && (t = this),
                    function t(s) {
                        if (!s || s === a() || s === r()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const i = s.closest(e);
                        return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                    }(t)
            }(g, h[0]) : h.closest(g)[0])) return void(t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const w = o.currentX,
            b = o.currentY,
            x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
            if ("prevent" !== x) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
    }

    function O(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: o
            } = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX,
            m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void(n.startY = m);
        if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0,
            b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function I(e) {
        const t = this,
            s = t.touchEventsData,
            {
                params: a,
                touches: i,
                rtlTranslate: r,
                slidesGrid: n,
                enabled: l
            } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(),
            c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), p((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null,
            v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f,
            b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }

    function A() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function G() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let N = !1;

    function B() {}
    const H = (e, t) => {
        const s = a(),
            {
                params: i,
                touchEvents: r,
                el: n,
                wrapperEl: l,
                device: o,
                support: d
            } = e,
            c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    };
    var X = {
        attachEvents: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    support: i
                } = e;
            e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on")
        },
        detachEvents: function() {
            H(this, "off")
        }
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function() {
            const e = this,
                {
                    classNames: t,
                    params: s,
                    rtl: a,
                    $el: i,
                    device: r,
                    support: n
                } = e,
                l = function(e, t) {
                    const s = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((a => {
                            e[a] && s.push(t + a)
                        })) : "string" == typeof e && s.push(t + e)
                    })), s
                }(["initialized", s.direction, {
                    "pointer-events": !n.touch
                }, {
                    "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: r.android
                }, {
                    ios: r.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }, {
                    "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
        },
        removeClasses: function() {
            const {
                $el: e,
                classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function q(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), g(t, s)) : g(t, s)) : g(t, s)
        }
    }
    const j = {
            eventsEmitter: $,
            update: S,
            translate: M,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), P({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: k,
            loop: z,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: X,
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: a = 0,
                            params: i,
                            $el: r
                        } = e,
                        n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l) return;
                    const o = (l in n ? n[l] : void 0) || e.originalParams,
                        d = Y(e, i),
                        c = Y(e, o),
                        p = i.enabled;
                    d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = i[t] && i[t].enabled,
                            a = o[t] && o[t].enabled;
                        s && !a && e[t].disable(), !s && a && e[t].enable()
                    }));
                    const u = o.direction && o.direction !== i.direction,
                        h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), g(e.params, o);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {
                            point: r,
                            value: n
                        } = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: R,
            images: {
                loadImage: function(e, t, s, a, i, n) {
                    const l = r();
                    let o;

                    function c() {
                        n && n()
                    }
                    d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        _ = {};
    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s => {
                    const a = g({}, t, {
                        el: s
                    });
                    e.push(new V(a))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = E(), r.device = C({
                userAgent: t.userAgent
            }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e => {
                e({
                    swiper: r,
                    extendParams: q(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const l = g({}, W, n);
            return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: a,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: n,
                activeIndex: l
            } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                } else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < n && (o += 1)
                    }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children ? s.children(i()) : d(s).children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: a,
                    $el: i,
                    $wrapperEl: r,
                    slides: n
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            g(_, e)
        }
        static get extendedDefaults() {
            return _
        }
        static get defaults() {
            return W
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
        }
    }

    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }

    function U(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }

    function K(e) {
        const t = this,
            {
                $wrapperEl: s,
                params: a
            } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function Z(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function Q(e, t) {
        const s = this,
            {
                $wrapperEl: a,
                params: i,
                activeIndex: r
            } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function J(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0)
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }

    function ee() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each((e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function ae(e) {
        let {
            swiper: t,
            duration: s,
            transformEl: a,
            allSlides: i
        } = e;
        const {
            slides: r,
            activeIndex: n,
            $wrapperEl: l
        } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
            }))
        }
    }

    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r
    }
    Object.keys(j).forEach((e => {
        Object.keys(j[e]).forEach((t => {
            V.prototype[t] = j[e][t]
        }))
    })), V.use([function(e) {
        let {
            swiper: t,
            on: s,
            emit: a
        } = e;
        const i = r();
        let n = null,
            l = null;
        const o = () => {
                t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
            },
            d = () => {
                t && !t.destroyed && t.initialized && a("orientationchange")
            };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {
                        width: s,
                        height: a
                    } = t;
                    let i = s,
                        r = a;
                    e.forEach((e => {
                        let {
                            contentBoxSize: s,
                            contentRect: a,
                            target: n
                        } = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = [],
            l = r(),
            o = function(e, t) {
                void 0 === t && (t = {});
                const s = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function() {
                        i("observerUpdate", e[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
                }));
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), n.push(s)
            };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.$el[0], {
                    childList: t.params.observeSlideChildren
                }), o(t.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const re = [function(e) {
        let t, {
            swiper: s,
            extendParams: a,
            on: i,
            emit: r
        } = e;

        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
        }

        function l(e) {
            const {
                slidesPerView: t,
                slidesPerGroup: a,
                centeredSlides: i
            } = s.params, {
                addSlidesBefore: l,
                addSlidesAfter: o
            } = s.params.virtual, {
                from: d,
                to: c,
                slides: p,
                slidesGrid: u,
                offset: h
            } = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
            const w = Math.max((m || 0) - v, 0),
                b = Math.min((m || 0) + g, p.length - 1),
                x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

            function y() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
            }
            if (Object.assign(s.virtual, {
                    from: w,
                    to: b,
                    offset: x,
                    slidesGrid: s.slidesGrid
                }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: x,
                from: w,
                to: b,
                slides: function() {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(p[t]);
                    return e
                }()
            }), void(s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = [],
                C = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
            else
                for (let e = d; e <= c; e += 1)(e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
            C.forEach((e => {
                s.$wrapperEl.append(n(p[e], e))
            })), E.sort(((e, t) => t - e)).forEach((e => {
                s.$wrapperEl.prepend(n(p[e], e))
            })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y()
        }
        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, i("beforeInit", (() => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l())
        })), i("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                l()
            }), 100)) : l())
        })), i("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                else s.virtual.slides.push(e);
                l(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1,
                    i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache,
                        t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s],
                            r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                l(!0), s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);
                else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                l(!0), s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0)
            },
            update: l
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: n
        } = e;
        const l = a(),
            o = r();

        function c(e) {
            if (!t.enabled) return;
            const {
                rtlTranslate: s
            } = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode,
                r = t.params.keyboard.pageUpDown,
                d = r && 33 === i,
                c = r && 34 === i,
                p = 37 === i,
                u = 39 === i,
                h = 38 === i,
                m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el,
                        i = a[0].clientWidth,
                        r = a[0].clientHeight,
                        n = o.innerWidth,
                        l = o.innerHeight,
                        d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [
                        [d.left, d.top],
                        [d.left + i, d.top],
                        [d.left, d.top + r],
                        [d.left + i, d.top + r]
                    ];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i)
            }
        }

        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0)
        }

        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        }, s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), i("init", (() => {
            t.params.keyboard.enabled && p()
        })), i("destroy", (() => {
            t.keyboard.enabled && u()
        })), Object.assign(t.keyboard, {
            enable: p,
            disable: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {
            enabled: !1
        };
        let o, c = u();
        const h = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function f() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1)))
        }

        function v(e) {
            let s = e,
                a = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1,
                f = function(e) {
                    let t = 0,
                        s = 0,
                        a = 0,
                        i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    }
                }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                    c = -f.pixelX * m
                } else {
                    if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                    c = -f.pixelY
                }
            else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c) return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                        time: u(),
                        delta: Math.abs(c),
                        direction: Math.sign(c)
                    },
                    a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0, t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning,
                        u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0,
                            a = h[0];
                        if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0);
                        else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e, h.splice(0), l = p((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        l || (l = p((() => {
                            o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(c),
                    direction: Math.sign(c),
                    raw: e
                };
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function(e) {
                        const s = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0)
        }

        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0)
        }
        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b()
        })), a("destroy", (() => {
            t.params.cssMode && b(), t.mousewheel.enabled && x()
        })), Object.assign(t.mousewheel, {
            enable: b,
            disable: x
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;

        function r(e) {
            let s;
            return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function l() {
            if (t.params.loop) return;
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function c(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl),
                a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
        }

        function u() {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, a("init", (() => {
            !1 === t.params.navigation.enabled ? h() : (p(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            u()
        })), a("enable disable", (() => {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), a("click", ((e, s) => {
            const {
                $nextEl: a,
                $prevEl: r
            } = t.navigation, n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }));
        const h = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l()
            },
            disable: h,
            update: l,
            init: p,
            destroy: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function c(e, s) {
            const {
                bulletActiveClass: a
            } = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function p() {
            const e = t.rtl,
                s = t.params.pagination;
            if (o()) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
                    const t = d(e),
                        a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"))
                }));
                else {
                    const e = a.eq(p),
                        r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(i),
                            n = a.eq(o);
                        for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else c(e, "prev"), c(n, "next");
                        else c(e, "prev"), c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4),
                        r = (n * i - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1,
                    n = 1;
                "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function(e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s)
            })), Object.assign(t.pagination, {
                $el: s,
                el: s[0]
            }), t.enabled || s.addClass(e.lockClass))
        }

        function m() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass))
        }
        a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (h(), u(), p())
        })), a("activeIndexChange", (() => {
            (t.params.loop || void 0 === t.snapIndex) && p()
        })), a("snapIndexChange", (() => {
            t.params.loop || p()
        })), a("slidesLengthChange", (() => {
            t.params.loop && (u(), p())
        })), a("snapGridLengthChange", (() => {
            t.params.loop || (u(), p())
        })), a("destroy", (() => {
            m()
        })), a("enable disable", (() => {
            const {
                $el: e
            } = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target,
                {
                    $el: r
                } = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }));
        const f = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p()
            },
            disable: f,
            render: u,
            update: p,
            init: h,
            destroy: m
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: r
        } = e;
        const n = a();
        let l, o, c, u, h = !1,
            m = null,
            f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e,
                rtlTranslate: s,
                progress: a
            } = t, {
                $dragEl: i,
                $el: r
            } = e, n = t.params.scrollbar;
            let l = o,
                d = (c - o) * a;
            s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e
            } = t, {
                $dragEl: s,
                $el: a
            } = e;
            s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {
                scrollbar: s,
                rtlTranslate: a
            } = t, {
                $el: i
            } = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: i
                } = t,
                {
                    $el: n,
                    $dragEl: o
                } = a;
            h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function y(e) {
            const {
                scrollbar: s,
                $wrapperEl: a
            } = t, {
                $el: i,
                $dragEl: n
            } = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e))
        }

        function E(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: i
                } = t,
                {
                    $el: n
                } = a;
            h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => {
                n.css("opacity", 0), n.transition(400)
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {
                scrollbar: s,
                touchEventsTouch: a,
                touchEventsDesktop: i,
                params: r,
                support: l
            } = t, o = s.$el;
            if (!o) return;
            const d = o[0],
                c = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                },
                p = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
            if (!d) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p))
        }

        function T() {
            const {
                scrollbar: e,
                $el: s
            } = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function $() {
            const e = t.params.scrollbar,
                s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, i("init", (() => {
            !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g())
        })), i("update resize observerUpdate lock unlock", (() => {
            v()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            ! function(e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        })), i("enable disable", (() => {
            const {
                $el: e
            } = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            $()
        }));
        const S = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g()
            },
            disable: S,
            updateSize: v,
            setTranslate: g,
            init: T,
            destroy: $
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = (e, s) => {
                const {
                    rtl: a
                } = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale"),
                    p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e
                }
                if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                }
            },
            r = () => {
                const {
                    $el: e,
                    slides: s,
                    progress: a,
                    snapGrid: r
                } = t;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    i(e, a)
                })), s.each(((e, s) => {
                    let n = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        i(e, n)
                    }))
                }))
            };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && r()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && r()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {
                    $el: s
                } = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                }))
            }(s)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {
            enabled: !1
        };
        let l, o, c, p = 1,
            u = !1;
        const m = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            f = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            g = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let v = 1;

        function w(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY,
                a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }

        function b(e) {
            const s = t.support,
                a = t.params.zoom;
            if (o = !1, c = !1, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                o = !0, m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0
        }

        function x(e) {
            const s = t.support,
                a = t.params.zoom,
                i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                c = !0, m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function y(e) {
            const s = t.device,
                a = t.support,
                i = t.params.zoom,
                r = t.zoom;
            if (!a.gestures) {
                if (!o || !c) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                o = !1, c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0))
        }

        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length) return;
            if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
            const a = f.width * s.scale,
                i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void(f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void(f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }

        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0)
        }

        function T(e) {
            const s = t.zoom,
                a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function $() {
            const e = t.zoom,
                s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0)
        }

        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
        }

        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function P() {
            return `.${t.params.slideClass}`
        }

        function k(e) {
            const {
                passiveListener: s
            } = M(), a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s)
        }

        function z() {
            l || (l = !0, k("on"))
        }

        function L() {
            l && (l = !1, k("off"))
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const s = t.support,
                {
                    passiveListener: a,
                    activeListenerWithCapture: i
                } = M(),
                r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = !1;
            const {
                passiveListener: a,
                activeListenerWithCapture: i
            } = M(), r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => v,
            set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0,
                        s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            I()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function(e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void(f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let s = 300,
                    a = 300;
                const i = g.x * s,
                    r = f.currentX + i,
                    n = g.y * a,
                    l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r, f.currentY = l;
                const d = f.width * e.scale,
                    c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && C()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        })), Object.assign(t.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: $,
            toggle: S
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let n = !1,
            l = !1;

        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"),
                    c = n.attr("data-src"),
                    p = n.attr("data-srcset"),
                    u = n.attr("data-sizes"),
                    h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (() => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                                const t = d(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                })), i("lazyImageLoad", r[0], n[0])
            }))
        }

        function c() {
            const {
                $wrapperEl: e,
                params: s,
                slides: a,
                activeIndex: i
            } = t, r = t.virtual && s.virtual.enabled, n = s.lazy;
            let c = s.slidesPerView;

            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (a[t]) return !0;
                return !1
            }

            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
                o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
            }));
            else if (c > 1)
                for (let e = i; e < i + c; e += 1) p(e) && o(e);
            else o(i);
            if (n.loadPrevNext)
                if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                    const e = n.loadPrevNextAmount,
                        t = Math.ceil(c),
                        s = Math.min(i + t + Math.max(e, t), a.length),
                        r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + t; e < s; e += 1) p(e) && o(e);
                    for (let e = r; e < i; e += 1) p(e) && o(e)
                } else {
                    const t = e.children(`.${s.slideNextClass}`);
                    t.length > 0 && o(u(t));
                    const a = e.children(`.${s.slidePrevClass}`);
                    a.length > 0 && o(u(a))
                }
        }

        function p() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                a = s[0] === e,
                i = a ? e.innerWidth : s[0].offsetWidth,
                l = a ? e.innerHeight : s[0].offsetHeight,
                o = t.$el.offset(),
                {
                    rtlTranslate: u
                } = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [
                [o.left, o.top],
                [o.left + t.width, o.top],
                [o.left, o.top + t.height],
                [o.left + t.width, o.top + t.height]
            ];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f))
        }
        a("beforeInit", (() => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        })), a("init", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("scroll", (() => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionStart", (() => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionEnd", (() => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        })), a("slideChange", (() => {
            const {
                lazy: e,
                cssMode: s,
                watchSlidesProgress: a,
                touchReleaseOnEdges: i,
                resistanceRatio: r
            } = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        })), a("destroy", (() => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        })), Object.assign(t.lazy, {
            load: c,
            loadInSlide: o
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;

        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {
            control: void 0
        }, a("beforeInit", (() => {
            t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (! function(e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
                else a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor,
                    i = t.controller.control;
                let r;

                function n(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
                else i instanceof a && s !== i && n(i)
            }
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {
            clicked: !1
        };
        let i = null;

        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function n(e) {
            e.attr("tabIndex", "0")
        }

        function l(e) {
            e.attr("tabIndex", "-1")
        }

        function o(e, t) {
            e.attr("role", t)
        }

        function c(e, t) {
            e.attr("aria-roledescription", t)
        }

        function p(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function h(e) {
            e.attr("aria-disabled", !1)
        }

        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y,
                a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }

        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return f() && t.params.pagination.clickable
        }
        const v = (e, t, s) => {
                n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s),
                    function(e, t) {
                        e.attr("aria-controls", t)
                    }(e, t)
            },
            w = () => {
                t.a11y.clicked = !0
            },
            b = () => {
                requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.a11y.clicked = !1
                    }))
                }))
            },
            x = e => {
                if (t.a11y.clicked) return;
                const s = e.target.closest(`.${t.params.slideClass}`);
                if (!s || !t.slides.includes(s)) return;
                const a = t.slides.indexOf(s) === t.activeIndex,
                    i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || i || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
            },
            y = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
                const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
                e.slideLabelMessage && t.slides.each(((a, i) => {
                    const r = d(a),
                        n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                    p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
                }))
            },
            E = () => {
                const e = t.params.a11y;
                t.$el.append(i);
                const s = t.$el;
                e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
                const a = t.$wrapperEl,
                    r = e.id || a.attr("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
                var n;
                const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var o;
                let d, u;
                o = r, a.attr("id", o),
                    function(e, t) {
                        e.attr("aria-live", t)
                    }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0)
            };
        a("beforeInit", (() => {
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), a("afterInit", (() => {
            t.params.a11y.enabled && E()
        })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && y()
        })), a("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {
                    $nextEl: e,
                    $prevEl: s
                } = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)))
            }()
        })), a("paginationUpdate", (() => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s => {
                    const a = d(s);
                    t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), a("destroy", (() => {
            t.params.a11y.enabled && function() {
                let e, s;
                i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0)
            }()
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1,
            n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`
                } else n.pathname.includes(e) || (d = `${e}/${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                    value: d
                }, null, d) : a.history.pushState({
                    value: d
                }, null, d))
            },
            c = (e, s, a) => {
                if (s)
                    for (let i = 0, r = t.slides.length; i < r; i += 1) {
                        const r = t.slides.eq(i);
                        if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                            const s = r.index();
                            t.slideTo(s, e, a)
                        }
                    } else t.slideTo(0, e, a)
            },
            p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: i,
            on: n
        } = e, l = !1;
        const o = a(),
            c = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const p = () => {
                i("hashChange");
                const e = o.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                    if (void 0 === s) return;
                    t.slideTo(s)
                }
            },
            u = () => {
                if (l && t.params.hashNavigation.enabled)
                    if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet");
                    else {
                        const e = t.slides.eq(t.activeIndex),
                            s = e.attr("data-hash") || e.attr("data-history");
                        o.location.hash = s || "", i("hashSet")
                    }
            };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && u()
        })), n("slideChange", (() => {
            l && t.params.cssMode && u()
        }))
    }, function(e) {
        let t, {
            swiper: s,
            extendParams: i,
            on: r,
            emit: n
        } = e;

        function l() {
            if (!s.size) return s.autoplay.running = !1, void(s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }), a)
        }

        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0))
        }

        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0))
        }

        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].addEventListener(e, h)
            })) : (s.autoplay.paused = !1, l())))
        }

        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
        }

        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
        }

        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            }))
        }

        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l())
        }
        s.autoplay = {
            running: !1,
            paused: !1
        }, i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", (() => {
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f))
            }
        })), r("beforeTransitionStart", ((e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        })), r("sliderFirstMove", (() => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        })), r("touchEnd", (() => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        })), r("destroy", (() => {
            s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        })), Object.assign(s.autoplay, {
            pause: c,
            run: l,
            start: o,
            stop: d
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1,
            r = !1;

        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex,
                a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }

        function l() {
            const {
                thumbs: e
            } = t.params;
            if (i) return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            });
            else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper = new s(a), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
        }

        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r);
            else
                for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset,
                l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        }, a("beforeInit", (() => {
            const {
                thumbs: e
            } = t.params;
            e && e.swiper && (l(), o(!0))
        })), a("slideChange update resize observerUpdate", (() => {
            o()
        })), a("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), a("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {
            init: l,
            update: o
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: a,
            once: i
        } = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    const {
                        touchEventsData: e,
                        touches: s
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function(e) {
                    let {
                        currentPos: s
                    } = e;
                    const {
                        params: r,
                        $wrapperEl: n,
                        rtlTranslate: l,
                        snapGrid: o,
                        touchEventsData: d
                    } = t, c = u() - d.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop(),
                                    s = d.velocities.pop(),
                                    a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1)
                                    if (o[t] > -c) {
                                        e = t;
                                        break
                                    }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
                            }
                            if (f && i("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(p), n.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(e) {
        let t, s, a, {
            swiper: i,
            extendParams: r
        } = e;
        r({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), i.grid = {
            initSlides: e => {
                const {
                    slidesPerView: r
                } = i.params, {
                    rows: n,
                    fill: l
                } = i.params.grid;
                s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            },
            updateSlide: (e, r, n, l) => {
                const {
                    slidesPerGroup: o,
                    spaceBetween: d
                } = i.params, {
                    rows: c,
                    fill: p
                } = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c)),
                        a = e - c * o * s,
                        i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            },
            updateWrapperSize: (e, s, a) => {
                const {
                    spaceBetween: r,
                    centeredSlides: n,
                    roundLengths: l
                } = i.params, {
                    rows: o
                } = i.params.grid;
                if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({
                        [a("width")]: `${i.virtualSize + r}px`
                    }), n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }, function(e) {
        let {
            swiper: t
        } = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e
                } = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i, i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0))
        };
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    $el: e,
                    $wrapperEl: s,
                    slides: a,
                    width: r,
                    height: n,
                    rtlTranslate: l,
                    size: o,
                    browser: c
                } = t, p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
                    height: `${r}px`
                })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s,
                        n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0,
                        m = 0,
                        g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                    const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u)
                }
                if (s.css({
                        "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                        "transform-origin": `50% 50% -${o / 2}px`
                    }), p.shadow)
                    if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                    else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = p.shadowScale,
                            a = p.shadowScale / t,
                            i = p.shadowOffset;
                        m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                    }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {
                    $el: s,
                    slides: a
                } = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        });
        const i = (e, s, a) => {
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))
        };
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    rtlTranslate: s
                } = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l,
                        c = 0,
                        p = t.params.cssMode ? -o - t.translate : -o,
                        u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((s => {
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), te({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    width: e,
                    height: s,
                    slides: a,
                    slidesSizesGrid: i
                } = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e),
                        s = i[e],
                        l = (o - t[0].swiperSlideOffset - s / 2) / s,
                        p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0,
                        h = n ? 0 : d * p,
                        m = -c * Math.abs(p),
                        f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p,
                        v = n ? f * p : 0,
                        w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    $wrapperEl: s,
                    slidesSizesGrid: a
                } = t, r = t.params.creativeEffect, {
                    progressMultiplier: n
                } = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s),
                        o = a[0].progress,
                        d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset,
                        u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "),
                        v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({
                        opacity: b
                    }), f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }), te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    activeIndex: s
                } = t, a = t.params.cardsEffect, {
                    startTranslate: i,
                    isTouched: r
                } = t.touchEventsData, n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l),
                        d = o[0].progress,
                        c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p,
                        h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1,
                        g = -a.perSlideRotate * c,
                        v = a.perSlideOffset - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                        b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                        x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                        const e = h;
                        h = u, u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                        E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }];
    return V.use(re), V
}));
//# sourceMappingURL=swiper-bundle.min.js.map




/*!
 * @license createjs
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
this.createjs = this.createjs || {}, createjs.extend = function(a, b) {
        "use strict";

        function c() {
            this.constructor = a
        }
        return c.prototype = b.prototype, a.prototype = new c
    }, this.createjs = this.createjs || {}, createjs.promote = function(a, b) {
        "use strict";
        var c = a.prototype,
            d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;
        if (d) {
            c[(b += "_") + "constructor"] = d.constructor;
            for (var e in d) c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e])
        }
        return a
    }, this.createjs = this.createjs || {}, createjs.indexOf = function(a, b) {
        "use strict";
        for (var c = 0, d = a.length; d > c; c++)
            if (b === a[c]) return c;
        return -1
    }, this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "UID cannot be instantiated"
        }
        a._nextID = 0, a.get = function() {
            return a._nextID++
        }, createjs.UID = a
    }(), this.createjs = this.createjs || {}, createjs.deprecate = function(a, b) {
        "use strict";
        return function() {
            var c = "Deprecated property or method '" + b + "'. See docs for info.";
            return console && (console.warn ? console.warn(c) : console.log(c)), a && a.apply(this, arguments)
        }
    }, this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var b = a.prototype;
        b.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        }, b.stopPropagation = function() {
            this.propagationStopped = !0
        }, b.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, b.remove = function() {
            this.removed = !0
        }, b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable)
        }, b.set = function(a) {
            for (var b in a) this[b] = a[b];
            return this
        }, b.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this._listeners = null, this._captureListeners = null
        }
        var b = a.prototype;
        a.initialize = function(a) {
            a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
        }, b.addEventListener = function(a, b, c) {
            var d;
            d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var e = d[a];
            return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
        }, b.on = function(a, b, c, d, e, f) {
            return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
                b.call(c, a, e), d && a.remove()
            }, f)
        }, b.removeEventListener = function(a, b, c) {
            var d = c ? this._captureListeners : this._listeners;
            if (d) {
                var e = d[a];
                if (e)
                    for (var f = 0, g = e.length; g > f; f++)
                        if (e[f] == b) {
                            1 == g ? delete d[a] : e.splice(f, 1);
                            break
                        }
            }
        }, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
            a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
        }, b.dispatchEvent = function(a, b, c) {
            if ("string" == typeof a) {
                var d = this._listeners;
                if (!(b || d && d[a])) return !0;
                a = new createjs.Event(a, b, c)
            } else a.target && a.clone && (a = a.clone());
            try {
                a.target = this
            } catch (e) {}
            if (a.bubbles && this.parent) {
                for (var f = this, g = [f]; f.parent;) g.push(f = f.parent);
                var h, i = g.length;
                for (h = i - 1; h >= 0 && !a.propagationStopped; h--) g[h]._dispatchEvent(a, 1 + (0 == h));
                for (h = 1; i > h && !a.propagationStopped; h++) g[h]._dispatchEvent(a, 3)
            } else this._dispatchEvent(a, 2);
            return !a.defaultPrevented
        }, b.hasEventListener = function(a) {
            var b = this._listeners,
                c = this._captureListeners;
            return !!(b && b[a] || c && c[a])
        }, b.willTrigger = function(a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) return !0;
                b = b.parent
            }
            return !1
        }, b.toString = function() {
            return "[EventDispatcher]"
        }, b._dispatchEvent = function(a, b) {
            var c, d, e = 2 >= b ? this._captureListeners : this._listeners;
            if (a && e && (d = e[a.type]) && (c = d.length)) {
                try {
                    a.currentTarget = this
                } catch (f) {}
                try {
                    a.eventPhase = 0 | b
                } catch (f) {}
                a.removed = !1, d = d.slice();
                for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
                    var h = d[g];
                    h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1)
                }
            }
            2 === b && this._dispatchEvent(a, 2.1)
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "Ticker cannot be instantiated."
        }
        a.RAF_SYNCHED = "synched", a.RAF = "raf", a.TIMEOUT = "timeout", a.timingMode = null, a.maxDelta = 0, a.paused = !1, a.removeEventListener = null, a.removeAllEventListeners = null, a.dispatchEvent = null, a.hasEventListener = null, a._listeners = null, createjs.EventDispatcher.initialize(a), a._addEventListener = a.addEventListener, a.addEventListener = function() {
            return !a._inited && a.init(), a._addEventListener.apply(a, arguments)
        }, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._timerId = null, a._raf = !0, a._setInterval = function(b) {
            a._interval = b, a._inited && a._setupTick()
        }, a.setInterval = createjs.deprecate(a._setInterval, "Ticker.setInterval"), a._getInterval = function() {
            return a._interval
        }, a.getInterval = createjs.deprecate(a._getInterval, "Ticker.getInterval"), a._setFPS = function(b) {
            a._setInterval(1e3 / b)
        }, a.setFPS = createjs.deprecate(a._setFPS, "Ticker.setFPS"), a._getFPS = function() {
            return 1e3 / a._interval
        }, a.getFPS = createjs.deprecate(a._getFPS, "Ticker.getFPS");
        try {
            Object.defineProperties(a, {
                interval: {
                    get: a._getInterval,
                    set: a._setInterval
                },
                framerate: {
                    get: a._getFPS,
                    set: a._setFPS
                }
            })
        } catch (b) {
            console.log(b)
        }
        a.init = function() {
            a._inited || (a._inited = !0, a._times = [], a._tickTimes = [], a._startTime = a._getTime(), a._times.push(a._lastTime = 0), a.interval = a._interval)
        }, a.reset = function() {
            if (a._raf) {
                var b = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                b && b(a._timerId)
            } else clearTimeout(a._timerId);
            a.removeAllEventListeners("tick"), a._timerId = a._times = a._tickTimes = null, a._startTime = a._lastTime = a._ticks = a._pausedTime = 0, a._inited = !1
        }, a.getMeasuredTickTime = function(b) {
            var c = 0,
                d = a._tickTimes;
            if (!d || d.length < 1) return -1;
            b = Math.min(d.length, b || 0 | a._getFPS());
            for (var e = 0; b > e; e++) c += d[e];
            return c / b
        }, a.getMeasuredFPS = function(b) {
            var c = a._times;
            return !c || c.length < 2 ? -1 : (b = Math.min(c.length - 1, b || 0 | a._getFPS()), 1e3 / ((c[0] - c[b]) / b))
        }, a.getTime = function(b) {
            return a._startTime ? a._getTime() - (b ? a._pausedTime : 0) : -1
        }, a.getEventTime = function(b) {
            return a._startTime ? (a._lastTime || a._startTime) - (b ? a._pausedTime : 0) : -1
        }, a.getTicks = function(b) {
            return a._ticks - (b ? a._pausedTicks : 0)
        }, a._handleSynch = function() {
            a._timerId = null, a._setupTick(), a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
        }, a._handleRAF = function() {
            a._timerId = null, a._setupTick(), a._tick()
        }, a._handleTimeout = function() {
            a._timerId = null, a._setupTick(), a._tick()
        }, a._setupTick = function() {
            if (null == a._timerId) {
                var b = a.timingMode;
                if (b == a.RAF_SYNCHED || b == a.RAF) {
                    var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                    if (c) return a._timerId = c(b == a.RAF ? a._handleRAF : a._handleSynch), void(a._raf = !0)
                }
                a._raf = !1, a._timerId = setTimeout(a._handleTimeout, a._interval)
            }
        }, a._tick = function() {
            var b = a.paused,
                c = a._getTime(),
                d = c - a._lastTime;
            if (a._lastTime = c, a._ticks++, b && (a._pausedTicks++, a._pausedTime += d), a.hasEventListener("tick")) {
                var e = new createjs.Event("tick"),
                    f = a.maxDelta;
                e.delta = f && d > f ? f : d, e.paused = b, e.time = c, e.runTime = c - a._pausedTime, a.dispatchEvent(e)
            }
            for (a._tickTimes.unshift(a._getTime() - c); a._tickTimes.length > 100;) a._tickTimes.pop();
            for (a._times.unshift(c); a._times.length > 100;) a._times.pop()
        };
        var c = window,
            d = c.performance.now || c.performance.mozNow || c.performance.msNow || c.performance.oNow || c.performance.webkitNow;
        a._getTime = function() {
            return (d && d.call(c.performance) || (new Date).getTime()) - a._startTime
        }, createjs.Ticker = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.readyState = a.readyState, this._video = a, this._canvas = null, this._lastTime = -1, this.readyState < 2 && a.addEventListener("canplaythrough", this._videoReady.bind(this))
        }
        var b = a.prototype;
        b.getImage = function() {
            if (!(this.readyState < 2)) {
                var a = this._canvas,
                    b = this._video;
                if (a || (a = this._canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), a.width = b.videoWidth, a.height = b.videoHeight), b.readyState >= 2 && b.currentTime !== this._lastTime) {
                    var c = a.getContext("2d");
                    c.clearRect(0, 0, a.width, a.height), c.drawImage(b, 0, 0, a.width, a.height), this._lastTime = b.currentTime
                }
                return a
            }
        }, b._videoReady = function() {
            this.readyState = 2
        }, createjs.VideoBuffer = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d, e, f, g, h, i, j, k) {
            this.Event_constructor(a, b, c), this.stageX = d, this.stageY = e, this.rawX = null == i ? d : i, this.rawY = null == j ? e : j, this.nativeEvent = f, this.pointerID = g, this.primary = !!h, this.relatedTarget = k
        }
        var b = createjs.extend(a, createjs.Event);
        b._get_localX = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
        }, b._get_localY = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
        }, b._get_isTouch = function() {
            return -1 !== this.pointerID
        };
        try {
            Object.defineProperties(b, {
                localX: {
                    get: b._get_localX
                },
                localY: {
                    get: b._get_localY
                },
                isTouch: {
                    get: b._get_isTouch
                }
            })
        } catch (c) {}
        b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
        }, b.toString = function() {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
        }, createjs.MouseEvent = createjs.promote(a, "Event")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d, e, f) {
            this.setValues(a, b, c, d, e, f)
        }
        var b = a.prototype;
        a.DEG_TO_RAD = Math.PI / 180, a.identity = null, b.setValues = function(a, b, c, d, e, f) {
            return this.a = null == a ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = null == d ? 1 : d, this.tx = e || 0, this.ty = f || 0, this
        }, b.append = function(a, b, c, d, e, f) {
            var g = this.a,
                h = this.b,
                i = this.c,
                j = this.d;
            return (1 != a || 0 != b || 0 != c || 1 != d) && (this.a = g * a + i * b, this.b = h * a + j * b, this.c = g * c + i * d, this.d = h * c + j * d), this.tx = g * e + i * f + this.tx, this.ty = h * e + j * f + this.ty, this
        }, b.prepend = function(a, b, c, d, e, f) {
            var g = this.a,
                h = this.c,
                i = this.tx;
            return this.a = a * g + c * this.b, this.b = b * g + d * this.b, this.c = a * h + c * this.d, this.d = b * h + d * this.d, this.tx = a * i + c * this.ty + e, this.ty = b * i + d * this.ty + f, this
        }, b.appendMatrix = function(a) {
            return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty)
        }, b.prependMatrix = function(a) {
            return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty)
        }, b.appendTransform = function(b, c, d, e, f, g, h, i, j) {
            if (f % 360) var k = f * a.DEG_TO_RAD,
                l = Math.cos(k),
                m = Math.sin(k);
            else l = 1, m = 0;
            return g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c), this.append(l * d, m * d, -m * e, l * e, 0, 0)) : this.append(l * d, m * d, -m * e, l * e, b, c), (i || j) && (this.tx -= i * this.a + j * this.c, this.ty -= i * this.b + j * this.d), this
        }, b.prependTransform = function(b, c, d, e, f, g, h, i, j) {
            if (f % 360) var k = f * a.DEG_TO_RAD,
                l = Math.cos(k),
                m = Math.sin(k);
            else l = 1, m = 0;
            return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(l * d, m * d, -m * e, l * e, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(l * d, m * d, -m * e, l * e, b, c), this
        }, b.rotate = function(b) {
            b *= a.DEG_TO_RAD;
            var c = Math.cos(b),
                d = Math.sin(b),
                e = this.a,
                f = this.b;
            return this.a = e * c + this.c * d, this.b = f * c + this.d * d, this.c = -e * d + this.c * c, this.d = -f * d + this.d * c, this
        }, b.skew = function(b, c) {
            return b *= a.DEG_TO_RAD, c *= a.DEG_TO_RAD, this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0), this
        }, b.scale = function(a, b) {
            return this.a *= a, this.b *= a, this.c *= b, this.d *= b, this
        }, b.translate = function(a, b) {
            return this.tx += this.a * a + this.c * b, this.ty += this.b * a + this.d * b, this
        }, b.identity = function() {
            return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
        }, b.invert = function() {
            var a = this.a,
                b = this.b,
                c = this.c,
                d = this.d,
                e = this.tx,
                f = a * d - b * c;
            return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this
        }, b.isIdentity = function() {
            return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
        }, b.equals = function(a) {
            return this.tx === a.tx && this.ty === a.ty && this.a === a.a && this.b === a.b && this.c === a.c && this.d === a.d
        }, b.transformPoint = function(a, b, c) {
            return c = c || {}, c.x = a * this.a + b * this.c + this.tx, c.y = a * this.b + b * this.d + this.ty, c
        }, b.decompose = function(b) {
            null == b && (b = {}), b.x = this.tx, b.y = this.ty, b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var c = Math.atan2(-this.c, this.d),
                d = Math.atan2(this.b, this.a),
                e = Math.abs(1 - c / d);
            return 1e-5 > e ? (b.rotation = d / a.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (b.rotation += b.rotation <= 0 ? 180 : -180), b.skewX = b.skewY = 0) : (b.skewX = c / a.DEG_TO_RAD, b.skewY = d / a.DEG_TO_RAD), b
        }, b.copy = function(a) {
            return this.setValues(a.a, a.b, a.c, a.d, a.tx, a.ty)
        }, b.clone = function() {
            return new a(this.a, this.b, this.c, this.d, this.tx, this.ty)
        }, b.toString = function() {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
        }, a.identity = new a, createjs.Matrix2D = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d, e) {
            this.setValues(a, b, c, d, e)
        }
        var b = a.prototype;
        b.setValues = function(a, b, c, d, e) {
            return this.visible = null == a ? !0 : !!a, this.alpha = null == b ? 1 : b, this.shadow = c, this.compositeOperation = d, this.matrix = e || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
        }, b.append = function(a, b, c, d, e) {
            return this.alpha *= b, this.shadow = c || this.shadow, this.compositeOperation = d || this.compositeOperation, this.visible = this.visible && a, e && this.matrix.appendMatrix(e), this
        }, b.prepend = function(a, b, c, d, e) {
            return this.alpha *= b, this.shadow = this.shadow || c, this.compositeOperation = this.compositeOperation || d, this.visible = this.visible && a, e && this.matrix.prependMatrix(e), this
        }, b.identity = function() {
            return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
        }, b.clone = function() {
            return new a(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
        }, createjs.DisplayProps = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.setValues(a, b)
        }
        var b = a.prototype;
        b.setValues = function(a, b) {
            return this.x = a || 0, this.y = b || 0, this
        }, b.copy = function(a) {
            return this.x = a.x, this.y = a.y, this
        }, b.clone = function() {
            return new a(this.x, this.y)
        }, b.toString = function() {
            return "[Point (x=" + this.x + " y=" + this.y + ")]"
        }, createjs.Point = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d) {
            this.setValues(a, b, c, d)
        }
        var b = a.prototype;
        b.setValues = function(a, b, c, d) {
            return this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this
        }, b.extend = function(a, b, c, d) {
            return c = c || 0, d = d || 0, a + c > this.x + this.width && (this.width = a + c - this.x), b + d > this.y + this.height && (this.height = b + d - this.y), a < this.x && (this.width += this.x - a, this.x = a), b < this.y && (this.height += this.y - b, this.y = b), this
        }, b.pad = function(a, b, c, d) {
            return this.x -= b, this.y -= a, this.width += b + d, this.height += a + c, this
        }, b.copy = function(a) {
            return this.setValues(a.x, a.y, a.width, a.height)
        }, b.contains = function(a, b, c, d) {
            return c = c || 0, d = d || 0, a >= this.x && a + c <= this.x + this.width && b >= this.y && b + d <= this.y + this.height
        }, b.union = function(a) {
            return this.clone().extend(a.x, a.y, a.width, a.height)
        }, b.intersection = function(b) {
            var c = b.x,
                d = b.y,
                e = c + b.width,
                f = d + b.height;
            return this.x > c && (c = this.x), this.y > d && (d = this.y), this.x + this.width < e && (e = this.x + this.width), this.y + this.height < f && (f = this.y + this.height), c >= e || d >= f ? null : new a(c, d, e - c, f - d)
        }, b.intersects = function(a) {
            return a.x <= this.x + this.width && this.x <= a.x + a.width && a.y <= this.y + this.height && this.y <= a.y + a.height
        }, b.isEmpty = function() {
            return this.width <= 0 || this.height <= 0
        }, b.clone = function() {
            return new a(this.x, this.y, this.width, this.height)
        }, b.toString = function() {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
        }, createjs.Rectangle = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d, e, f, g) {
            a.addEventListener && (this.target = a, this.overLabel = null == c ? "over" : c, this.outLabel = null == b ? "out" : b, this.downLabel = null == d ? "down" : d, this.play = e, this._isPressed = !1, this._isOver = !1, this._enabled = !1, a.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), f && (g && (f.actionsEnabled = !1, f.gotoAndStop && f.gotoAndStop(g)), a.hitArea = f))
        }
        var b = a.prototype;
        b._setEnabled = function(a) {
            if (a != this._enabled) {
                var b = this.target;
                this._enabled = a, a ? (b.cursor = "pointer", b.addEventListener("rollover", this), b.addEventListener("rollout", this), b.addEventListener("mousedown", this), b.addEventListener("pressup", this), b._reset && (b.__reset = b._reset, b._reset = this._reset)) : (b.cursor = null, b.removeEventListener("rollover", this), b.removeEventListener("rollout", this), b.removeEventListener("mousedown", this), b.removeEventListener("pressup", this), b.__reset && (b._reset = b.__reset, delete b.__reset))
            }
        }, b.setEnabled = createjs.deprecate(b._setEnabled, "ButtonHelper.setEnabled"), b._getEnabled = function() {
            return this._enabled
        }, b.getEnabled = createjs.deprecate(b._getEnabled, "ButtonHelper.getEnabled");
        try {
            Object.defineProperties(b, {
                enabled: {
                    get: b._getEnabled,
                    set: b._setEnabled
                }
            })
        } catch (c) {}
        b.toString = function() {
            return "[ButtonHelper]"
        }, b.handleEvent = function(a) {
            var b, c = this.target,
                d = a.type;
            "mousedown" == d ? (this._isPressed = !0, b = this.downLabel) : "pressup" == d ? (this._isPressed = !1, b = this._isOver ? this.overLabel : this.outLabel) : "rollover" == d ? (this._isOver = !0, b = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, b = this._isPressed ? this.overLabel : this.outLabel), this.play ? c.gotoAndPlay && c.gotoAndPlay(b) : c.gotoAndStop && c.gotoAndStop(b)
        }, b._reset = function() {
            var a = this.paused;
            this.__reset(), this.paused = a
        }, createjs.ButtonHelper = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d) {
            this.color = a || "black", this.offsetX = b || 0, this.offsetY = c || 0, this.blur = d || 0
        }
        var b = a.prototype;
        a.identity = new a("transparent", 0, 0, 0), b.toString = function() {
            return "[Shadow]"
        }, b.clone = function() {
            return new a(this.color, this.offsetX, this.offsetY, this.blur)
        }, createjs.Shadow = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(a)
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        b._getAnimations = function() {
            return this._animations.slice()
        }, b.getAnimations = createjs.deprecate(b._getAnimations, "SpriteSheet.getAnimations");
        try {
            Object.defineProperties(b, {
                animations: {
                    get: b._getAnimations
                }
            })
        } catch (c) {}
        b.getNumFrames = function(a) {
            if (null == a) return this._frames ? this._frames.length : this._numFrames || 0;
            var b = this._data[a];
            return null == b ? 0 : b.frames.length
        }, b.getAnimation = function(a) {
            return this._data[a]
        }, b.getFrame = function(a) {
            var b;
            return this._frames && (b = this._frames[a]) ? b : null
        }, b.getFrameBounds = function(a, b) {
            var c = this.getFrame(a);
            return c ? (b || new createjs.Rectangle).setValues(-c.regX, -c.regY, c.rect.width, c.rect.height) : null
        }, b.toString = function() {
            return "[SpriteSheet]"
        }, b.clone = function() {
            throw "SpriteSheet cannot be cloned."
        }, b._parseData = function(a) {
            var b, c, d, e;
            if (null != a) {
                if (this.framerate = a.framerate || 0, a.images && (c = a.images.length) > 0)
                    for (e = this._images = [], b = 0; c > b; b++) {
                        var f = a.images[b];
                        if ("string" == typeof f) {
                            var g = f;
                            f = document.createElement("img"), f.src = g
                        }
                        e.push(f), f.getContext || f.naturalWidth || (this._loadCount++, this.complete = !1, function(a, b) {
                            f.onload = function() {
                                a._handleImageLoad(b)
                            }
                        }(this, g), function(a, b) {
                            f.onerror = function() {
                                a._handleImageError(b)
                            }
                        }(this, g))
                    }
                if (null == a.frames);
                else if (Array.isArray(a.frames))
                    for (this._frames = [], e = a.frames, b = 0, c = e.length; c > b; b++) {
                        var h = e[b];
                        this._frames.push({
                            image: this._images[h[4] ? h[4] : 0],
                            rect: new createjs.Rectangle(h[0], h[1], h[2], h[3]),
                            regX: h[5] || 0,
                            regY: h[6] || 0
                        })
                    } else d = a.frames, this._frameWidth = d.width, this._frameHeight = d.height, this._regX = d.regX || 0, this._regY = d.regY || 0, this._spacing = d.spacing || 0, this._margin = d.margin || 0, this._numFrames = d.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (d = a.animations)) {
                    this._data = {};
                    var i;
                    for (i in d) {
                        var j = {
                                name: i
                            },
                            k = d[i];
                        if ("number" == typeof k) e = j.frames = [k];
                        else if (Array.isArray(k))
                            if (1 == k.length) j.frames = [k[0]];
                            else
                                for (j.speed = k[3], j.next = k[2], e = j.frames = [], b = k[0]; b <= k[1]; b++) e.push(b);
                        else {
                            j.speed = k.speed, j.next = k.next;
                            var l = k.frames;
                            e = j.frames = "number" == typeof l ? [l] : l.slice(0)
                        }(j.next === !0 || void 0 === j.next) && (j.next = i), (j.next === !1 || e.length < 2 && j.next == i) && (j.next = null), j.speed || (j.speed = 1), this._animations.push(i), this._data[i] = j
                    }
                }
            }
        }, b._handleImageLoad = function(a) {
            0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
        }, b._handleImageError = function(a) {
            var b = new createjs.Event("error");
            b.src = a, this.dispatchEvent(b), 0 == --this._loadCount && this.dispatchEvent("complete")
        }, b._calculateFrames = function() {
            if (!this._frames && 0 != this._frameWidth) {
                this._frames = [];
                var a = this._numFrames || 1e5,
                    b = 0,
                    c = this._frameWidth,
                    d = this._frameHeight,
                    e = this._spacing,
                    f = this._margin;
                a: for (var g = 0, h = this._images; g < h.length; g++)
                    for (var i = h[g], j = i.width || i.naturalWidth, k = i.height || i.naturalHeight, l = f; k - f - d >= l;) {
                        for (var m = f; j - f - c >= m;) {
                            if (b >= a) break a;
                            b++, this._frames.push({
                                image: i,
                                rect: new createjs.Rectangle(m, l, c, d),
                                regX: this._regX,
                                regY: this._regY
                            }), m += c + e
                        }
                        l += d + e
                    }
                this._numFrames = b
            }
        }, createjs.SpriteSheet = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
        }
        var b = a.prototype,
            c = a;
        a.getRGB = function(a, b, c, d) {
            return null != a && null == c && (d = b, c = 255 & a, b = a >> 8 & 255, a = a >> 16 & 255), null == d ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")"
        }, a.getHSL = function(a, b, c, d) {
            return null == d ? "hsl(" + a % 360 + "," + b + "%," + c + "%)" : "hsla(" + a % 360 + "," + b + "%," + c + "%," + d + ")"
        }, a.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63
        }, a.STROKE_CAPS_MAP = ["butt", "round", "square"], a.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
        var d = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        d.getContext && (a._ctx = d.getContext("2d"), d.width = d.height = 1), b._getInstructions = function() {
            return this._updateInstructions(), this._instructions
        }, b.getInstructions = createjs.deprecate(b._getInstructions, "Graphics.getInstructions");
        try {
            Object.defineProperties(b, {
                instructions: {
                    get: b._getInstructions
                }
            })
        } catch (e) {}
        b.isEmpty = function() {
            return !(this._instructions.length || this._activeInstructions.length)
        }, b.draw = function(a, b) {
            this._updateInstructions();
            for (var c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++) c[d].exec(a, b)
        }, b.drawAsPath = function(a) {
            this._updateInstructions();
            for (var b, c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++)(b = c[d]).path !== !1 && b.exec(a)
        }, b.moveTo = function(a, b) {
            return this.append(new c.MoveTo(a, b), !0)
        }, b.lineTo = function(a, b) {
            return this.append(new c.LineTo(a, b))
        }, b.arcTo = function(a, b, d, e, f) {
            return this.append(new c.ArcTo(a, b, d, e, f))
        }, b.arc = function(a, b, d, e, f, g) {
            return this.append(new c.Arc(a, b, d, e, f, g))
        }, b.quadraticCurveTo = function(a, b, d, e) {
            return this.append(new c.QuadraticCurveTo(a, b, d, e))
        }, b.bezierCurveTo = function(a, b, d, e, f, g) {
            return this.append(new c.BezierCurveTo(a, b, d, e, f, g))
        }, b.rect = function(a, b, d, e) {
            return this.append(new c.Rect(a, b, d, e))
        }, b.closePath = function() {
            return this._activeInstructions.length ? this.append(new c.ClosePath) : this
        }, b.clear = function() {
            return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
        }, b.beginFill = function(a) {
            return this._setFill(a ? new c.Fill(a) : null)
        }, b.beginLinearGradientFill = function(a, b, d, e, f, g) {
            return this._setFill((new c.Fill).linearGradient(a, b, d, e, f, g))
        }, b.beginRadialGradientFill = function(a, b, d, e, f, g, h, i) {
            return this._setFill((new c.Fill).radialGradient(a, b, d, e, f, g, h, i))
        }, b.beginBitmapFill = function(a, b, d) {
            return this._setFill(new c.Fill(null, d).bitmap(a, b))
        }, b.endFill = function() {
            return this.beginFill()
        }, b.setStrokeStyle = function(a, b, d, e, f) {
            return this._updateInstructions(!0), this._strokeStyle = this.command = new c.StrokeStyle(a, b, d, e, f), this._stroke && (this._stroke.ignoreScale = f), this._strokeIgnoreScale = f, this
        }, b.setStrokeDash = function(a, b) {
            return this._updateInstructions(!0), this._strokeDash = this.command = new c.StrokeDash(a, b), this
        }, b.beginStroke = function(a) {
            return this._setStroke(a ? new c.Stroke(a) : null)
        }, b.beginLinearGradientStroke = function(a, b, d, e, f, g) {
            return this._setStroke((new c.Stroke).linearGradient(a, b, d, e, f, g))
        }, b.beginRadialGradientStroke = function(a, b, d, e, f, g, h, i) {
            return this._setStroke((new c.Stroke).radialGradient(a, b, d, e, f, g, h, i))
        }, b.beginBitmapStroke = function(a, b) {
            return this._setStroke((new c.Stroke).bitmap(a, b))
        }, b.endStroke = function() {
            return this.beginStroke()
        }, b.curveTo = b.quadraticCurveTo, b.drawRect = b.rect, b.drawRoundRect = function(a, b, c, d, e) {
            return this.drawRoundRectComplex(a, b, c, d, e, e, e, e)
        }, b.drawRoundRectComplex = function(a, b, d, e, f, g, h, i) {
            return this.append(new c.RoundRect(a, b, d, e, f, g, h, i))
        }, b.drawCircle = function(a, b, d) {
            return this.append(new c.Circle(a, b, d))
        }, b.drawEllipse = function(a, b, d, e) {
            return this.append(new c.Ellipse(a, b, d, e))
        }, b.drawPolyStar = function(a, b, d, e, f, g) {
            return this.append(new c.PolyStar(a, b, d, e, f, g))
        }, b.append = function(a, b) {
            return this._activeInstructions.push(a), this.command = a, b || (this._dirty = !0), this
        }, b.decodePath = function(b) {
            for (var c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], d = [2, 2, 4, 6, 0], e = 0, f = b.length, g = [], h = 0, i = 0, j = a.BASE_64; f > e;) {
                var k = b.charAt(e),
                    l = j[k],
                    m = l >> 3,
                    n = c[m];
                if (!n || 3 & l) throw "bad path data (@" + e + "): " + k;
                var o = d[m];
                m || (h = i = 0), g.length = 0, e++;
                for (var p = (l >> 2 & 1) + 2, q = 0; o > q; q++) {
                    var r = j[b.charAt(e)],
                        s = r >> 5 ? -1 : 1;
                    r = (31 & r) << 6 | j[b.charAt(e + 1)], 3 == p && (r = r << 6 | j[b.charAt(e + 2)]), r = s * r / 10, q % 2 ? h = r += h : i = r += i, g[q] = r, e += p
                }
                n.apply(this, g)
            }
            return this
        }, b.store = function() {
            return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
        }, b.unstore = function() {
            return this._storeIndex = 0, this
        }, b.clone = function() {
            var b = new a;
            return b.command = this.command, b._stroke = this._stroke, b._strokeStyle = this._strokeStyle, b._strokeDash = this._strokeDash, b._strokeIgnoreScale = this._strokeIgnoreScale, b._fill = this._fill, b._instructions = this._instructions.slice(), b._commitIndex = this._commitIndex, b._activeInstructions = this._activeInstructions.slice(), b._dirty = this._dirty, b._storeIndex = this._storeIndex, b
        }, b.toString = function() {
            return "[Graphics]"
        }, b.mt = b.moveTo, b.lt = b.lineTo, b.at = b.arcTo, b.bt = b.bezierCurveTo, b.qt = b.quadraticCurveTo, b.a = b.arc, b.r = b.rect, b.cp = b.closePath, b.c = b.clear, b.f = b.beginFill, b.lf = b.beginLinearGradientFill, b.rf = b.beginRadialGradientFill, b.bf = b.beginBitmapFill, b.ef = b.endFill, b.ss = b.setStrokeStyle, b.sd = b.setStrokeDash, b.s = b.beginStroke, b.ls = b.beginLinearGradientStroke, b.rs = b.beginRadialGradientStroke, b.bs = b.beginBitmapStroke, b.es = b.endStroke, b.dr = b.drawRect, b.rr = b.drawRoundRect, b.rc = b.drawRoundRectComplex, b.dc = b.drawCircle, b.de = b.drawEllipse, b.dp = b.drawPolyStar, b.p = b.decodePath, b._updateInstructions = function(b) {
            var c = this._instructions,
                d = this._activeInstructions,
                e = this._commitIndex;
            if (this._dirty && d.length) {
                c.length = e, c.push(a.beginCmd);
                var f = d.length,
                    g = c.length;
                c.length = g + f;
                for (var h = 0; f > h; h++) c[h + g] = d[h];
                this._fill && c.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && c.push(this._strokeDash), this._strokeStyle !== this._oldStrokeStyle && c.push(this._strokeStyle), b && (this._oldStrokeStyle = this._strokeStyle, this._oldStrokeDash = this._strokeDash), c.push(this._stroke)), this._dirty = !1
            }
            b && (d.length = 0, this._commitIndex = c.length)
        }, b._setFill = function(a) {
            return this._updateInstructions(!0), this.command = this._fill = a, this
        }, b._setStroke = function(a) {
            return this._updateInstructions(!0), (this.command = this._stroke = a) && (a.ignoreScale = this._strokeIgnoreScale), this
        }, (c.LineTo = function(a, b) {
            this.x = a, this.y = b
        }).prototype.exec = function(a) {
            a.lineTo(this.x, this.y)
        }, (c.MoveTo = function(a, b) {
            this.x = a, this.y = b
        }).prototype.exec = function(a) {
            a.moveTo(this.x, this.y)
        }, (c.ArcTo = function(a, b, c, d, e) {
            this.x1 = a, this.y1 = b, this.x2 = c, this.y2 = d, this.radius = e
        }).prototype.exec = function(a) {
            a.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
        }, (c.Arc = function(a, b, c, d, e, f) {
            this.x = a, this.y = b, this.radius = c, this.startAngle = d, this.endAngle = e, this.anticlockwise = !!f
        }).prototype.exec = function(a) {
            a.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
        }, (c.QuadraticCurveTo = function(a, b, c, d) {
            this.cpx = a, this.cpy = b, this.x = c, this.y = d
        }).prototype.exec = function(a) {
            a.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
        }, (c.BezierCurveTo = function(a, b, c, d, e, f) {
            this.cp1x = a, this.cp1y = b, this.cp2x = c, this.cp2y = d, this.x = e, this.y = f
        }).prototype.exec = function(a) {
            a.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
        }, (c.Rect = function(a, b, c, d) {
            this.x = a, this.y = b, this.w = c, this.h = d
        }).prototype.exec = function(a) {
            a.rect(this.x, this.y, this.w, this.h)
        }, (c.ClosePath = function() {}).prototype.exec = function(a) {
            a.closePath()
        }, (c.BeginPath = function() {}).prototype.exec = function(a) {
            a.beginPath()
        }, b = (c.Fill = function(a, b) {
            this.style = a, this.matrix = b
        }).prototype, b.exec = function(a) {
            if (this.style) {
                a.fillStyle = this.style;
                var b = this.matrix;
                b && (a.save(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)), a.fill(), b && a.restore()
            }
        }, b.linearGradient = function(b, c, d, e, f, g) {
            for (var h = this.style = a._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; j > i; i++) h.addColorStop(c[i], b[i]);
            return h.props = {
                colors: b,
                ratios: c,
                x0: d,
                y0: e,
                x1: f,
                y1: g,
                type: "linear"
            }, this
        }, b.radialGradient = function(b, c, d, e, f, g, h, i) {
            for (var j = this.style = a._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; l > k; k++) j.addColorStop(c[k], b[k]);
            return j.props = {
                colors: b,
                ratios: c,
                x0: d,
                y0: e,
                r0: f,
                x1: g,
                y1: h,
                r1: i,
                type: "radial"
            }, this
        }, b.bitmap = function(b, c) {
            if (b.naturalWidth || b.getContext || b.readyState >= 2) {
                var d = this.style = a._ctx.createPattern(b, c || "");
                d.props = {
                    image: b,
                    repetition: c,
                    type: "bitmap"
                }
            }
            return this
        }, b.path = !1, b = (c.Stroke = function(a, b) {
            this.style = a, this.ignoreScale = b
        }).prototype, b.exec = function(a) {
            this.style && (a.strokeStyle = this.style, this.ignoreScale && (a.save(), a.setTransform(1, 0, 0, 1, 0, 0)), a.stroke(), this.ignoreScale && a.restore())
        }, b.linearGradient = c.Fill.prototype.linearGradient, b.radialGradient = c.Fill.prototype.radialGradient, b.bitmap = c.Fill.prototype.bitmap, b.path = !1, b = (c.StrokeStyle = function(a, b, c, d, e) {
            this.width = a, this.caps = b, this.joints = c, this.miterLimit = d, this.ignoreScale = e
        }).prototype, b.exec = function(b) {
            b.lineWidth = null == this.width ? "1" : this.width, b.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : a.STROKE_CAPS_MAP[this.caps], b.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : a.STROKE_JOINTS_MAP[this.joints], b.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, b.ignoreScale = null == this.ignoreScale ? !1 : this.ignoreScale
        }, b.path = !1, (c.StrokeDash = function(a, b) {
            this.segments = a, this.offset = b || 0
        }).prototype.exec = function(a) {
            a.setLineDash && (a.setLineDash(this.segments || c.StrokeDash.EMPTY_SEGMENTS), a.lineDashOffset = this.offset || 0)
        }, c.StrokeDash.EMPTY_SEGMENTS = [], (c.RoundRect = function(a, b, c, d, e, f, g, h) {
            this.x = a, this.y = b, this.w = c, this.h = d, this.radiusTL = e, this.radiusTR = f, this.radiusBR = g, this.radiusBL = h
        }).prototype.exec = function(a) {
            var b = (j > i ? i : j) / 2,
                c = 0,
                d = 0,
                e = 0,
                f = 0,
                g = this.x,
                h = this.y,
                i = this.w,
                j = this.h,
                k = this.radiusTL,
                l = this.radiusTR,
                m = this.radiusBR,
                n = this.radiusBL;
            0 > k && (k *= c = -1), k > b && (k = b), 0 > l && (l *= d = -1), l > b && (l = b), 0 > m && (m *= e = -1), m > b && (m = b), 0 > n && (n *= f = -1), n > b && (n = b), a.moveTo(g + i - l, h), a.arcTo(g + i + l * d, h - l * d, g + i, h + l, l), a.lineTo(g + i, h + j - m), a.arcTo(g + i + m * e, h + j + m * e, g + i - m, h + j, m), a.lineTo(g + n, h + j), a.arcTo(g - n * f, h + j + n * f, g, h + j - n, n),
                a.lineTo(g, h + k), a.arcTo(g - k * c, h - k * c, g + k, h, k), a.closePath()
        }, (c.Circle = function(a, b, c) {
            this.x = a, this.y = b, this.radius = c
        }).prototype.exec = function(a) {
            a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        }, (c.Ellipse = function(a, b, c, d) {
            this.x = a, this.y = b, this.w = c, this.h = d
        }).prototype.exec = function(a) {
            var b = this.x,
                c = this.y,
                d = this.w,
                e = this.h,
                f = .5522848,
                g = d / 2 * f,
                h = e / 2 * f,
                i = b + d,
                j = c + e,
                k = b + d / 2,
                l = c + e / 2;
            a.moveTo(b, l), a.bezierCurveTo(b, l - h, k - g, c, k, c), a.bezierCurveTo(k + g, c, i, l - h, i, l), a.bezierCurveTo(i, l + h, k + g, j, k, j), a.bezierCurveTo(k - g, j, b, l + h, b, l)
        }, (c.PolyStar = function(a, b, c, d, e, f) {
            this.x = a, this.y = b, this.radius = c, this.sides = d, this.pointSize = e, this.angle = f
        }).prototype.exec = function(a) {
            var b = this.x,
                c = this.y,
                d = this.radius,
                e = (this.angle || 0) / 180 * Math.PI,
                f = this.sides,
                g = 1 - (this.pointSize || 0),
                h = Math.PI / f;
            a.moveTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
            for (var i = 0; f > i; i++) e += h, 1 != g && a.lineTo(b + Math.cos(e) * d * g, c + Math.sin(e) * d * g), e += h, a.lineTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
            a.closePath()
        }, a.beginCmd = new c.BeginPath, createjs.Graphics = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.bitmapCache = null, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null, this._webGLRenderStyle = a._StageGL_NONE
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        a._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], a.suppressCrossDomainErrors = !1, a._snapToPixelEnabled = !1, a._StageGL_NONE = 0, a._StageGL_SPRITE = 1, a._StageGL_BITMAP = 2;
        var c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        c.getContext && (a._hitTestCanvas = c, a._hitTestContext = c.getContext("2d"), c.width = c.height = 1), b._getStage = function() {
            for (var a = this, b = createjs.Stage; a.parent;) a = a.parent;
            return a instanceof b ? a : null
        }, b.getStage = createjs.deprecate(b._getStage, "DisplayObject.getStage");
        try {
            Object.defineProperties(b, {
                stage: {
                    get: b._getStage
                },
                cacheID: {
                    get: function() {
                        return this.bitmapCache && this.bitmapCache.cacheID
                    },
                    set: function(a) {
                        this.bitmapCache && (this.bitmapCache.cacheID = a)
                    }
                },
                scale: {
                    get: function() {
                        return this.scaleX
                    },
                    set: function(a) {
                        this.scaleX = this.scaleY = a
                    }
                }
            })
        } catch (d) {}
        b.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, b.draw = function(a, b) {
            var c = this.bitmapCache;
            return c && !b ? c.draw(a) : !1
        }, b.updateContext = function(b) {
            var c = this,
                d = c.mask,
                e = c._props.matrix;
            d && d.graphics && !d.graphics.isEmpty() && (d.getMatrix(e), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty), d.graphics.drawAsPath(b), b.clip(), e.invert(), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), this.getMatrix(e);
            var f = e.tx,
                g = e.ty;
            a._snapToPixelEnabled && c.snapToPixel && (f = f + (0 > f ? -.5 : .5) | 0, g = g + (0 > g ? -.5 : .5) | 0), b.transform(e.a, e.b, e.c, e.d, f, g), b.globalAlpha *= c.alpha, c.compositeOperation && (b.globalCompositeOperation = c.compositeOperation), c.shadow && this._applyShadow(b, c.shadow)
        }, b.cache = function(a, b, c, d, e, f) {
            this.bitmapCache || (this.bitmapCache = new createjs.BitmapCache), this.bitmapCache.define(this, a, b, c, d, e, f)
        }, b.updateCache = function(a) {
            if (!this.bitmapCache) throw "cache() must be called before updateCache()";
            this.bitmapCache.update(a)
        }, b.uncache = function() {
            this.bitmapCache && (this.bitmapCache.release(), this.bitmapCache = void 0)
        }, b.getCacheDataURL = function() {
            return this.bitmapCache ? this.bitmapCache.getDataURL() : null
        }, b.localToGlobal = function(a, b, c) {
            return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a, b, c || new createjs.Point)
        }, b.globalToLocal = function(a, b, c) {
            return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a, b, c || new createjs.Point)
        }, b.localToLocal = function(a, b, c, d) {
            return d = this.localToGlobal(a, b, d), c.globalToLocal(d.x, d.y, d)
        }, b.setTransform = function(a, b, c, d, e, f, g, h, i) {
            return this.x = a || 0, this.y = b || 0, this.scaleX = null == c ? 1 : c, this.scaleY = null == d ? 1 : d, this.rotation = e || 0, this.skewX = f || 0, this.skewY = g || 0, this.regX = h || 0, this.regY = i || 0, this
        }, b.getMatrix = function(a) {
            var b = this,
                c = a && a.identity() || new createjs.Matrix2D;
            return b.transformMatrix ? c.copy(b.transformMatrix) : c.appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY)
        }, b.getConcatenatedMatrix = function(a) {
            for (var b = this, c = this.getMatrix(a); b = b.parent;) c.prependMatrix(b.getMatrix(b._props.matrix));
            return c
        }, b.getConcatenatedDisplayProps = function(a) {
            a = a ? a.identity() : new createjs.DisplayProps;
            var b = this,
                c = b.getMatrix(a.matrix);
            do a.prepend(b.visible, b.alpha, b.shadow, b.compositeOperation), b != this && c.prependMatrix(b.getMatrix(b._props.matrix)); while (b = b.parent);
            return a
        }, b.hitTest = function(b, c) {
            var d = a._hitTestContext;
            d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d);
            var e = this._testHit(d);
            return d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, 2, 2), e
        }, b.set = function(a) {
            for (var b in a) this[b] = a[b];
            return this
        }, b.getBounds = function() {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var a = this.cacheCanvas;
            if (a) {
                var b = this._cacheScale;
                return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, a.width / b, a.height / b)
            }
            return null
        }, b.getTransformedBounds = function() {
            return this._getBounds()
        }, b.setBounds = function(a, b, c, d) {
            return null == a ? void(this._bounds = a) : void(this._bounds = (this._bounds || new createjs.Rectangle).setValues(a, b, c, d))
        }, b.clone = function() {
            return this._cloneProps(new a)
        }, b.toString = function() {
            return "[DisplayObject (name=" + this.name + ")]"
        }, b._updateState = null, b._cloneProps = function(a) {
            return a.alpha = this.alpha, a.mouseEnabled = this.mouseEnabled, a.tickEnabled = this.tickEnabled, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY, a.visible = this.visible, a.x = this.x, a.y = this.y, a.compositeOperation = this.compositeOperation, a.snapToPixel = this.snapToPixel, a.filters = null == this.filters ? null : this.filters.slice(0), a.mask = this.mask, a.hitArea = this.hitArea, a.cursor = this.cursor, a._bounds = this._bounds, a
        }, b._applyShadow = function(a, b) {
            b = b || Shadow.identity, a.shadowColor = b.color, a.shadowOffsetX = b.offsetX, a.shadowOffsetY = b.offsetY, a.shadowBlur = b.blur
        }, b._tick = function(a) {
            var b = this._listeners;
            b && b.tick && (a.target = null, a.propagationStopped = a.immediatePropagationStopped = !1, this.dispatchEvent(a))
        }, b._testHit = function(b) {
            try {
                var c = b.getImageData(0, 0, 1, 1).data[3] > 1
            } catch (d) {
                if (!a.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
            }
            return c
        }, b._getBounds = function(a, b) {
            return this._transformBounds(this.getBounds(), a, b)
        }, b._transformBounds = function(a, b, c) {
            if (!a) return a;
            var d = a.x,
                e = a.y,
                f = a.width,
                g = a.height,
                h = this._props.matrix;
            h = c ? h.identity() : this.getMatrix(h), (d || e) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -e), b && h.prependMatrix(b);
            var i = f * h.a,
                j = f * h.b,
                k = g * h.c,
                l = g * h.d,
                m = h.tx,
                n = h.ty,
                o = m,
                p = m,
                q = n,
                r = n;
            return (d = i + m) < o ? o = d : d > p && (p = d), (d = i + k + m) < o ? o = d : d > p && (p = d), (d = k + m) < o ? o = d : d > p && (p = d), (e = j + n) < q ? q = e : e > r && (r = e), (e = j + l + n) < q ? q = e : e > r && (r = e), (e = l + n) < q ? q = e : e > r && (r = e), a.setValues(o, q, p - o, r - q)
        }, b._hasMouseEventListener = function() {
            for (var b = a._MOUSE_EVENTS, c = 0, d = b.length; d > c; c++)
                if (this.hasEventListener(b[c])) return !0;
            return !!this.cursor
        }, createjs.DisplayObject = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b._getNumChildren = function() {
            return this.children.length
        }, b.getNumChildren = createjs.deprecate(b._getNumChildren, "Container.getNumChildren");
        try {
            Object.defineProperties(b, {
                numChildren: {
                    get: b._getNumChildren
                }
            })
        } catch (c) {}
        b.initialize = a, b.isVisible = function() {
            var a = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            for (var c = this.children.slice(), d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                f.isVisible() && (a.save(), f.updateContext(a), f.draw(a), a.restore())
            }
            return !0
        }, b.addChild = function(a) {
            if (null == a) return a;
            var b = arguments.length;
            if (b > 1) {
                for (var c = 0; b > c; c++) this.addChild(arguments[c]);
                return arguments[b - 1]
            }
            var d = a.parent,
                e = d === this;
            return d && d._removeChildAt(createjs.indexOf(d.children, a), e), a.parent = this, this.children.push(a), e || a.dispatchEvent("added"), a
        }, b.addChildAt = function(a, b) {
            var c = arguments.length,
                d = arguments[c - 1];
            if (0 > d || d > this.children.length) return arguments[c - 2];
            if (c > 2) {
                for (var e = 0; c - 1 > e; e++) this.addChildAt(arguments[e], d + e);
                return arguments[c - 2]
            }
            var f = a.parent,
                g = f === this;
            return f && f._removeChildAt(createjs.indexOf(f.children, a), g), a.parent = this, this.children.splice(b, 0, a), g || a.dispatchEvent("added"), a
        }, b.removeChild = function(a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = !0, d = 0; b > d; d++) c = c && this.removeChild(arguments[d]);
                return c
            }
            return this._removeChildAt(createjs.indexOf(this.children, a))
        }, b.removeChildAt = function(a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = [], d = 0; b > d; d++) c[d] = arguments[d];
                c.sort(function(a, b) {
                    return b - a
                });
                for (var e = !0, d = 0; b > d; d++) e = e && this._removeChildAt(c[d]);
                return e
            }
            return this._removeChildAt(a)
        }, b.removeAllChildren = function() {
            for (var a = this.children; a.length;) this._removeChildAt(0)
        }, b.getChildAt = function(a) {
            return this.children[a]
        }, b.getChildByName = function(a) {
            for (var b = this.children, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return b[c];
            return null
        }, b.sortChildren = function(a) {
            this.children.sort(a)
        }, b.getChildIndex = function(a) {
            return createjs.indexOf(this.children, a)
        }, b.swapChildrenAt = function(a, b) {
            var c = this.children,
                d = c[a],
                e = c[b];
            d && e && (c[a] = e, c[b] = d)
        }, b.swapChildren = function(a, b) {
            for (var c, d, e = this.children, f = 0, g = e.length; g > f && (e[f] == a && (c = f), e[f] == b && (d = f), null == c || null == d); f++);
            f != g && (e[c] = b, e[d] = a)
        }, b.setChildIndex = function(a, b) {
            var c = this.children,
                d = c.length;
            if (!(a.parent != this || 0 > b || b >= d)) {
                for (var e = 0; d > e && c[e] != a; e++);
                e != d && e != b && (c.splice(e, 1), c.splice(b, 0, a))
            }
        }, b.contains = function(a) {
            for (; a;) {
                if (a == this) return !0;
                a = a.parent
            }
            return !1
        }, b.hitTest = function(a, b) {
            return null != this.getObjectUnderPoint(a, b)
        }, b.getObjectsUnderPoint = function(a, b, c) {
            var d = [],
                e = this.localToGlobal(a, b);
            return this._getObjectsUnderPoint(e.x, e.y, d, c > 0, 1 == c), d
        }, b.getObjectUnderPoint = function(a, b, c) {
            var d = this.localToGlobal(a, b);
            return this._getObjectsUnderPoint(d.x, d.y, null, c > 0, 1 == c)
        }, b.getBounds = function() {
            return this._getBounds(null, !0)
        }, b.getTransformedBounds = function() {
            return this._getBounds()
        }, b.clone = function(b) {
            var c = this._cloneProps(new a);
            return b && this._cloneChildren(c), c
        }, b.toString = function() {
            return "[Container (name=" + this.name + ")]"
        }, b._tick = function(a) {
            if (this.tickChildren)
                for (var b = this.children.length - 1; b >= 0; b--) {
                    var c = this.children[b];
                    c.tickEnabled && c._tick && c._tick(a)
                }
            this.DisplayObject__tick(a)
        }, b._cloneChildren = function(a) {
            a.children.length && a.removeAllChildren();
            for (var b = a.children, c = 0, d = this.children.length; d > c; c++) {
                var e = this.children[c].clone(!0);
                e.parent = a, b.push(e)
            }
        }, b._removeChildAt = function(a, b) {
            if (0 > a || a > this.children.length - 1) return !1;
            var c = this.children[a];
            return c && (c.parent = null), this.children.splice(a, 1), b || c.dispatchEvent("removed"), !0
        }, b._getObjectsUnderPoint = function(b, c, d, e, f, g) {
            if (g = g || 0, !g && !this._testMask(this, b, c)) return null;
            var h, i = createjs.DisplayObject._hitTestContext;
            f = f || e && this._hasMouseEventListener();
            for (var j = this.children, k = j.length, l = k - 1; l >= 0; l--) {
                var m = j[l],
                    n = m.hitArea;
                if (m.visible && (n || m.isVisible()) && (!e || m.mouseEnabled) && (n || this._testMask(m, b, c)))
                    if (!n && m instanceof a) {
                        var o = m._getObjectsUnderPoint(b, c, d, e, f, g + 1);
                        if (!d && o) return e && !this.mouseChildren ? this : o
                    } else {
                        if (e && !f && !m._hasMouseEventListener()) continue;
                        var p = m.getConcatenatedDisplayProps(m._props);
                        if (h = p.matrix, n && (h.appendMatrix(n.getMatrix(n._props.matrix)), p.alpha = n.alpha), i.globalAlpha = p.alpha, i.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c), (n || m).draw(i), !this._testHit(i)) continue;
                        if (i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, 2, 2), !d) return e && !this.mouseChildren ? this : m;
                        d.push(m)
                    }
            }
            return null
        }, b._testMask = function(a, b, c) {
            var d = a.mask;
            if (!d || !d.graphics || d.graphics.isEmpty()) return !0;
            var e = this._props.matrix,
                f = a.parent;
            e = f ? f.getConcatenatedMatrix(e) : e.identity(), e = d.getMatrix(d._props.matrix).prependMatrix(e);
            var g = createjs.DisplayObject._hitTestContext;
            return g.setTransform(e.a, e.b, e.c, e.d, e.tx - b, e.ty - c), d.graphics.drawAsPath(g), g.fillStyle = "#000", g.fill(), this._testHit(g) ? (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, 2, 2), !0) : !1
        }, b._getBounds = function(a, b) {
            var c = this.DisplayObject_getBounds();
            if (c) return this._transformBounds(c, a, b);
            var d = this._props.matrix;
            d = b ? d.identity() : this.getMatrix(d), a && d.prependMatrix(a);
            for (var e = this.children.length, f = null, g = 0; e > g; g++) {
                var h = this.children[g];
                h.visible && (c = h._getBounds(d)) && (f ? f.extend(c.x, c.y, c.width, c.height) : f = c.clone())
            }
            return f
        }, createjs.Container = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof a ? document.getElementById(a) : a, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
        }
        var b = createjs.extend(a, createjs.Container);
        b._get_nextStage = function() {
            return this._nextStage
        }, b._set_nextStage = function(a) {
            this._nextStage && (this._nextStage._prevStage = null), a && (a._prevStage = this), this._nextStage = a
        };
        try {
            Object.defineProperties(b, {
                nextStage: {
                    get: b._get_nextStage,
                    set: b._set_nextStage
                }
            })
        } catch (c) {}
        b.update = function(a) {
            if (this.canvas && (this.tickOnUpdate && this.tick(a), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
                createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
                var b = this.drawRect,
                    c = this.canvas.getContext("2d");
                c.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (b ? c.clearRect(b.x, b.y, b.width, b.height) : c.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), c.save(), this.drawRect && (c.beginPath(), c.rect(b.x, b.y, b.width, b.height), c.clip()), this.updateContext(c), this.draw(c, !1), c.restore(), this.dispatchEvent("drawend")
            }
        }, b.tick = function(a) {
            if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
                var b = new createjs.Event("tick");
                if (a)
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                this._tick(b), this.dispatchEvent("tickend")
            }
        }, b.handleEvent = function(a) {
            "tick" == a.type && this.update(a)
        }, b.clear = function() {
            if (this.canvas) {
                var a = this.canvas.getContext("2d");
                a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
            }
        }, b.toDataURL = function(a, b) {
            var c, d = this.canvas.getContext("2d"),
                e = this.canvas.width,
                f = this.canvas.height;
            if (a) {
                c = d.getImageData(0, 0, e, f);
                var g = d.globalCompositeOperation;
                d.globalCompositeOperation = "destination-over", d.fillStyle = a, d.fillRect(0, 0, e, f)
            }
            var h = this.canvas.toDataURL(b || "image/png");
            return a && (d.putImageData(c, 0, 0), d.globalCompositeOperation = g), h
        }, b.enableMouseOver = function(a) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == a && this._testMouseOver(!0)), null == a) a = 20;
            else if (0 >= a) return;
            var b = this;
            this._mouseOverIntervalID = setInterval(function() {
                b._testMouseOver()
            }, 1e3 / Math.min(50, a))
        }, b.enableDOMEvents = function(a) {
            null == a && (a = !0);
            var b, c, d = this._eventListeners;
            if (!a && d) {
                for (b in d) c = d[b], c.t.removeEventListener(b, c.f, !1);
                this._eventListeners = null
            } else if (a && !d && this.canvas) {
                var e = window.addEventListener ? window : document,
                    f = this;
                d = this._eventListeners = {}, d.mouseup = {
                    t: e,
                    f: function(a) {
                        f._handleMouseUp(a)
                    }
                }, d.mousemove = {
                    t: e,
                    f: function(a) {
                        f._handleMouseMove(a)
                    }
                }, d.dblclick = {
                    t: this.canvas,
                    f: function(a) {
                        f._handleDoubleClick(a)
                    }
                }, d.mousedown = {
                    t: this.canvas,
                    f: function(a) {
                        f._handleMouseDown(a)
                    }
                };
                for (b in d) c = d[b], c.t.addEventListener(b, c.f, !1)
            }
        }, b.clone = function() {
            throw "Stage cannot be cloned."
        }, b.toString = function() {
            return "[Stage (name=" + this.name + ")]"
        }, b._getElementRect = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                b = {
                    top: a.offsetTop,
                    left: a.offsetLeft,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            }
            var d = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                e = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                f = window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle,
                g = parseInt(f.paddingLeft) + parseInt(f.borderLeftWidth),
                h = parseInt(f.paddingTop) + parseInt(f.borderTopWidth),
                i = parseInt(f.paddingRight) + parseInt(f.borderRightWidth),
                j = parseInt(f.paddingBottom) + parseInt(f.borderBottomWidth);
            return {
                left: b.left + d + g,
                right: b.right + d - i,
                top: b.top + e + h,
                bottom: b.bottom + e - j
            }
        }, b._getPointerData = function(a) {
            var b = this._pointerData[a];
            return b || (b = this._pointerData[a] = {
                x: 0,
                y: 0
            }), b
        }, b._handleMouseMove = function(a) {
            a || (a = window.event), this._handlePointerMove(-1, a, a.pageX, a.pageY)
        }, b._handlePointerMove = function(a, b, c, d, e) {
            if ((!this._prevStage || void 0 !== e) && this.canvas) {
                var f = this._nextStage,
                    g = this._getPointerData(a),
                    h = g.inBounds;
                this._updatePointerPosition(a, b, c, d), (h || g.inBounds || this.mouseMoveOutside) && (-1 === a && g.inBounds == !h && this._dispatchMouseEvent(this, h ? "mouseleave" : "mouseenter", !1, a, g, b), this._dispatchMouseEvent(this, "stagemousemove", !1, a, g, b), this._dispatchMouseEvent(g.target, "pressmove", !0, a, g, b)), f && f._handlePointerMove(a, b, c, d, null)
            }
        }, b._updatePointerPosition = function(a, b, c, d) {
            var e = this._getElementRect(this.canvas);
            c -= e.left, d -= e.top;
            var f = this.canvas.width,
                g = this.canvas.height;
            c /= (e.right - e.left) / f, d /= (e.bottom - e.top) / g;
            var h = this._getPointerData(a);
            (h.inBounds = c >= 0 && d >= 0 && f - 1 >= c && g - 1 >= d) ? (h.x = c, h.y = d) : this.mouseMoveOutside && (h.x = 0 > c ? 0 : c > f - 1 ? f - 1 : c, h.y = 0 > d ? 0 : d > g - 1 ? g - 1 : d), h.posEvtObj = b, h.rawX = c, h.rawY = d, (a === this._primaryPointerID || -1 === a) && (this.mouseX = h.x, this.mouseY = h.y, this.mouseInBounds = h.inBounds)
        }, b._handleMouseUp = function(a) {
            this._handlePointerUp(-1, a, !1)
        }, b._handlePointerUp = function(a, b, c, d) {
            var e = this._nextStage,
                f = this._getPointerData(a);
            if (!this._prevStage || void 0 !== d) {
                var g = null,
                    h = f.target;
                d || !h && !e || (g = this._getObjectsUnderPoint(f.x, f.y, null, !0)), f.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, a, f, b, g), f.down = !1), g == h && this._dispatchMouseEvent(h, "click", !0, a, f, b), this._dispatchMouseEvent(h, "pressup", !0, a, f, b), c ? (a == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[a]) : f.target = null, e && e._handlePointerUp(a, b, c, d || g && this)
            }
        }, b._handleMouseDown = function(a) {
            this._handlePointerDown(-1, a, a.pageX, a.pageY)
        }, b._handlePointerDown = function(a, b, c, d, e) {
            this.preventSelection && b.preventDefault(), (null == this._primaryPointerID || -1 === a) && (this._primaryPointerID = a), null != d && this._updatePointerPosition(a, b, c, d);
            var f = null,
                g = this._nextStage,
                h = this._getPointerData(a);
            e || (f = h.target = this._getObjectsUnderPoint(h.x, h.y, null, !0)), h.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, a, h, b, f), h.down = !0), this._dispatchMouseEvent(f, "mousedown", !0, a, h, b), g && g._handlePointerDown(a, b, c, d, e || f && this)
        }, b._testMouseOver = function(a, b, c) {
            if (!this._prevStage || void 0 !== b) {
                var d = this._nextStage;
                if (!this._mouseOverIntervalID) return void(d && d._testMouseOver(a, b, c));
                var e = this._getPointerData(-1);
                if (e && (a || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                    var f, g, h, i = e.posEvtObj,
                        j = c || i && i.target == this.canvas,
                        k = null,
                        l = -1,
                        m = "";
                    !b && (a || this.mouseInBounds && j) && (k = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                    var n = this._mouseOverTarget || [],
                        o = n[n.length - 1],
                        p = this._mouseOverTarget = [];
                    for (f = k; f;) p.unshift(f), m || (m = f.cursor), f = f.parent;
                    for (this.canvas.style.cursor = m, !b && c && (c.canvas.style.cursor = m), g = 0, h = p.length; h > g && p[g] == n[g]; g++) l = g;
                    for (o != k && this._dispatchMouseEvent(o, "mouseout", !0, -1, e, i, k), g = n.length - 1; g > l; g--) this._dispatchMouseEvent(n[g], "rollout", !1, -1, e, i, k);
                    for (g = p.length - 1; g > l; g--) this._dispatchMouseEvent(p[g], "rollover", !1, -1, e, i, o);
                    o != k && this._dispatchMouseEvent(k, "mouseover", !0, -1, e, i, o), d && d._testMouseOver(a, b || k && this, c || j && this)
                }
            }
        }, b._handleDoubleClick = function(a, b) {
            var c = null,
                d = this._nextStage,
                e = this._getPointerData(-1);
            b || (c = this._getObjectsUnderPoint(e.x, e.y, null, !0), this._dispatchMouseEvent(c, "dblclick", !0, -1, e, a)), d && d._handleDoubleClick(a, b || c && this)
        }, b._dispatchMouseEvent = function(a, b, c, d, e, f, g) {
            if (a && (c || a.hasEventListener(b))) {
                var h = new createjs.MouseEvent(b, c, !1, e.x, e.y, f, d, d === this._primaryPointerID || -1 === d, e.rawX, e.rawY, g);
                a.dispatchEvent(h)
            }
        }, createjs.Stage = createjs.promote(a, "Container")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(b, c) {
            if (this.Stage_constructor(b), void 0 !== c) {
                if ("object" != typeof c) throw "Invalid options object";
                var d = c.premultiply,
                    e = c.transparent,
                    f = c.antialias,
                    g = c.preserveBuffer,
                    h = c.autoPurge
            }
            this.vocalDebug = !1, this._preserveBuffer = g || !1, this._antialias = f || !1, this._transparent = e || !1, this._premultiply = d || !1, this._autoPurge = void 0, this.autoPurge = h, this._viewportWidth = 0, this._viewportHeight = 0, this._projectionMatrix = null, this._webGLContext = null, this._clearColor = {
                r: .5,
                g: .5,
                b: .5,
                a: 0
            }, this._maxCardsPerBatch = a.DEFAULT_MAX_BATCH_SIZE, this._activeShader = null, this._vertices = null, this._vertexPositionBuffer = null, this._uvs = null, this._uvPositionBuffer = null, this._indices = null, this._textureIndexBuffer = null, this._alphas = null, this._alphaBuffer = null, this._textureDictionary = [], this._textureIDs = {}, this._batchTextures = [], this._baseTextures = [], this._batchTextureCount = 8, this._lastTextureInsert = -1, this._batchID = 0, this._drawID = 0, this._slotBlacklist = [], this._isDrawing = 0, this._lastTrackedCanvas = 0, this.isCacheControlled = !1, this._cacheContainer = new createjs.Container, this._initializeWebGL()
        }
        var b = createjs.extend(a, createjs.Stage);
        a.buildUVRects = function(a, b, c) {
            if (!a || !a._frames) return null;
            void 0 === b && (b = -1), void 0 === c && (c = !1);
            for (var d = -1 != b && c ? b : 0, e = -1 != b && c ? b + 1 : a._frames.length, f = d; e > f; f++) {
                var g = a._frames[f];
                if (!(g.uvRect || g.image.width <= 0 || g.image.height <= 0)) {
                    var h = g.rect;
                    g.uvRect = {
                        t: h.y / g.image.height,
                        l: h.x / g.image.width,
                        b: (h.y + h.height) / g.image.height,
                        r: (h.x + h.width) / g.image.width
                    }
                }
            }
            return a._frames[-1 != b ? b : 0].uvRect || {
                t: 0,
                l: 0,
                b: 1,
                r: 1
            }
        }, a.isWebGLActive = function(a) {
            return a && a instanceof WebGLRenderingContext && "undefined" != typeof WebGLRenderingContext
        }, a.VERTEX_PROPERTY_COUNT = 6, a.INDICIES_PER_CARD = 6, a.DEFAULT_MAX_BATCH_SIZE = 1e4, a.WEBGL_MAX_INDEX_NUM = Math.pow(2, 16), a.UV_RECT = {
            t: 0,
            l: 0,
            b: 1,
            r: 1
        };
        try {
            a.COVER_VERT = new Float32Array([-1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1]), a.COVER_UV = new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]), a.COVER_UV_FLIP = new Float32Array([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0])
        } catch (c) {}
        a.REGULAR_VARYING_HEADER = "precision mediump float;varying vec2 vTextureCoord;varying lowp float indexPicker;varying lowp float alphaValue;", a.REGULAR_VERTEX_HEADER = a.REGULAR_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;attribute lowp float textureIndex;attribute lowp float objectAlpha;uniform mat4 pMatrix;", a.REGULAR_FRAGMENT_HEADER = a.REGULAR_VARYING_HEADER + "uniform sampler2D uSampler[{{count}}];", a.REGULAR_VERTEX_BODY = "void main(void) {gl_Position = vec4((vertexPosition.x * pMatrix[0][0]) + pMatrix[3][0],(vertexPosition.y * pMatrix[1][1]) + pMatrix[3][1],pMatrix[3][2],1.0);alphaValue = objectAlpha;indexPicker = textureIndex;vTextureCoord = uvPosition;}", a.REGULAR_FRAGMENT_BODY = "void main(void) {vec4 color = vec4(1.0, 0.0, 0.0, 1.0);if (indexPicker <= 0.5) {color = texture2D(uSampler[0], vTextureCoord);{{alternates}}}{{fragColor}}}", a.REGULAR_FRAG_COLOR_NORMAL = "gl_FragColor = vec4(color.rgb, color.a * alphaValue);", a.REGULAR_FRAG_COLOR_PREMULTIPLY = "if(color.a > 0.0035) {gl_FragColor = vec4(color.rgb/color.a, color.a * alphaValue);} else {gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);}", a.PARTICLE_VERTEX_BODY = a.REGULAR_VERTEX_BODY, a.PARTICLE_FRAGMENT_BODY = a.REGULAR_FRAGMENT_BODY, a.COVER_VARYING_HEADER = "precision mediump float;varying highp vec2 vRenderCoord;varying highp vec2 vTextureCoord;", a.COVER_VERTEX_HEADER = a.COVER_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;uniform float uUpright;", a.COVER_FRAGMENT_HEADER = a.COVER_VARYING_HEADER + "uniform sampler2D uSampler;", a.COVER_VERTEX_BODY = "void main(void) {gl_Position = vec4(vertexPosition.x, vertexPosition.y, 0.0, 1.0);vRenderCoord = uvPosition;vTextureCoord = vec2(uvPosition.x, abs(uUpright - uvPosition.y));}", a.COVER_FRAGMENT_BODY = "void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = color;}", b._get_isWebGL = function() {
            return !!this._webGLContext
        }, b._set_autoPurge = function(a) {
            a = isNaN(a) ? 1200 : a, -1 != a && (a = 10 > a ? 10 : a), this._autoPurge = a
        }, b._get_autoPurge = function() {
            return Number(this._autoPurge)
        };
        try {
            Object.defineProperties(b, {
                isWebGL: {
                    get: b._get_isWebGL
                },
                autoPurge: {
                    get: b._get_autoPurge,
                    set: b._set_autoPurge
                }
            })
        } catch (c) {}
        b._initializeWebGL = function() {
            if (this.canvas) {
                if (!this._webGLContext || this._webGLContext.canvas !== this.canvas) {
                    var a = {
                            depth: !1,
                            alpha: this._transparent,
                            stencil: !0,
                            antialias: this._antialias,
                            premultipliedAlpha: this._premultiply,
                            preserveDrawingBuffer: this._preserveBuffer
                        },
                        b = this._webGLContext = this._fetchWebGLContext(this.canvas, a);
                    if (!b) return null;
                    this.updateSimultaneousTextureCount(b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS)), this._maxTextureSlots = b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this._createBuffers(b), this._initTextures(b), b.disable(b.DEPTH_TEST), b.enable(b.BLEND), b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE, b.ONE_MINUS_SRC_ALPHA), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiply), this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), this.updateViewport(this._viewportWidth || this.canvas.width, this._viewportHeight || this.canvas.height)
                }
            } else this._webGLContext = null;
            return this._webGLContext
        }, b.update = function(a) {
            if (this.canvas) {
                if (this.tickOnUpdate && this.tick(a), this.dispatchEvent("drawstart"), this.autoClear && this.clear(), this._webGLContext) this._batchDraw(this, this._webGLContext), -1 == this._autoPurge || this._drawID % (this._autoPurge / 2 | 0) || this.purgeTextures(this._autoPurge);
                else {
                    var b = this.canvas.getContext("2d");
                    b.save(), this.updateContext(b), this.draw(b, !1), b.restore()
                }
                this.dispatchEvent("drawend")
            }
        }, b.clear = function() {
            if (this.canvas)
                if (a.isWebGLActive(this._webGLContext)) {
                    var b = this._webGLContext,
                        c = this._clearColor,
                        d = this._transparent ? c.a : 1;
                    this._webGLContext.clearColor(c.r * d, c.g * d, c.b * d, d), b.clear(b.COLOR_BUFFER_BIT), this._webGLContext.clearColor(c.r, c.g, c.b, c.a)
                } else this.Stage_clear()
        }, b.draw = function(b, c) {
            if (b === this._webGLContext && a.isWebGLActive(this._webGLContext)) {
                var d = this._webGLContext;
                return this._batchDraw(this, d, c), !0
            }
            return this.Stage_draw(b, c)
        }, b.cacheDraw = function(b, c, d) {
            if (a.isWebGLActive(this._webGLContext)) {
                var e = this._webGLContext;
                return this._cacheDraw(e, b, c, d), !0
            }
            return !1
        }, b.protectTextureSlot = function(a, b) {
            if (a > this._maxTextureSlots || 0 > a) throw "Slot outside of acceptable range";
            this._slotBlacklist[a] = !!b
        }, b.getTargetRenderTexture = function(a, b, c) {
            var d, e = !1,
                f = this._webGLContext;
            if (void 0 !== a.__lastRT && a.__lastRT === a.__rtA && (e = !0), e ? (void 0 === a.__rtB ? a.__rtB = this.getRenderBufferTexture(b, c) : ((b != a.__rtB._width || c != a.__rtB._height) && this.resizeTexture(a.__rtB, b, c), this.setTextureParams(f)), d = a.__rtB) : (void 0 === a.__rtA ? a.__rtA = this.getRenderBufferTexture(b, c) : ((b != a.__rtA._width || c != a.__rtA._height) && this.resizeTexture(a.__rtA, b, c), this.setTextureParams(f)), d = a.__rtA), !d) throw "Problems creating render textures, known causes include using too much VRAM by not releasing WebGL texture instances";
            return a.__lastRT = d, d
        }, b.releaseTexture = function(a) {
            var b, c;
            if (a) {
                if (a.children)
                    for (b = 0, c = a.children.length; c > b; b++) this.releaseTexture(a.children[b]);
                a.cacheCanvas && a.uncache();
                var d = void 0;
                if (void 0 !== a._storeID) {
                    if (a === this._textureDictionary[a._storeID]) return this._killTextureObject(a), void(a._storeID = void 0);
                    d = a
                } else if (2 === a._webGLRenderStyle) d = a.image;
                else if (1 === a._webGLRenderStyle) {
                    for (b = 0, c = a.spriteSheet._images.length; c > b; b++) this.releaseTexture(a.spriteSheet._images[b]);
                    return
                }
                if (void 0 === d) return void(this.vocalDebug && console.log("No associated texture found on release"));
                this._killTextureObject(this._textureDictionary[d._storeID]), d._storeID = void 0
            }
        }, b.purgeTextures = function(a) {
            void 0 == a && (a = 100);
            for (var b = this._textureDictionary, c = b.length, d = 0; c > d; d++) {
                var e = b[d];
                e && e._drawID + a <= this._drawID && this._killTextureObject(e)
            }
        }, b.updateSimultaneousTextureCount = function(a) {
            var b = this._webGLContext,
                c = !1;
            for ((1 > a || isNaN(a)) && (a = 1), this._batchTextureCount = a; !c;) try {
                this._activeShader = this._fetchShaderProgram(b), c = !0
            } catch (d) {
                if (1 == this._batchTextureCount) throw "Cannot compile shader " + d;
                this._batchTextureCount -= 4, this._batchTextureCount < 1 && (this._batchTextureCount = 1), this.vocalDebug && console.log("Reducing desired texture count due to errors: " + this._batchTextureCount)
            }
        }, b.updateViewport = function(a, b) {
            this._viewportWidth = 0 | a, this._viewportHeight = 0 | b;
            var c = this._webGLContext;
            c && (c.viewport(0, 0, this._viewportWidth, this._viewportHeight), this._projectionMatrix = new Float32Array([2 / this._viewportWidth, 0, 0, 0, 0, -2 / this._viewportHeight, 1, 0, 0, 0, 1, 0, -1, 1, .1, 0]), this._projectionMatrixFlip = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), this._projectionMatrixFlip.set(this._projectionMatrix), this._projectionMatrixFlip[5] *= -1, this._projectionMatrixFlip[13] *= -1)
        }, b.getFilterShader = function(a) {
            a || (a = this);
            var b = this._webGLContext,
                c = this._activeShader;
            if (a._builtShader) c = a._builtShader, a.shaderParamSetup && (b.useProgram(c), a.shaderParamSetup(b, this, c));
            else try {
                c = this._fetchShaderProgram(b, "filter", a.VTX_SHADER_BODY, a.FRAG_SHADER_BODY, a.shaderParamSetup && a.shaderParamSetup.bind(a)), a._builtShader = c, c._name = a.toString()
            } catch (d) {
                console && console.log("SHADER SWITCH FAILURE", d)
            }
            return c
        }, b.getBaseTexture = function(a, b) {
            var c = Math.ceil(a > 0 ? a : 1) || 1,
                d = Math.ceil(b > 0 ? b : 1) || 1,
                e = this._webGLContext,
                f = e.createTexture();
            return this.resizeTexture(f, c, d), this.setTextureParams(e, !1), f
        }, b.resizeTexture = function(a, b, c) {
            var d = this._webGLContext;
            d.bindTexture(d.TEXTURE_2D, a), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, b, c, 0, d.RGBA, d.UNSIGNED_BYTE, null), a.width = b, a.height = c
        }, b.getRenderBufferTexture = function(a, b) {
            var c = this._webGLContext,
                d = this.getBaseTexture(a, b);
            if (!d) return null;
            var e = c.createFramebuffer();
            return e ? (d.width = a, d.height = b, c.bindFramebuffer(c.FRAMEBUFFER, e), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, d, 0), e._renderTexture = d, d._frameBuffer = e, d._storeID = this._textureDictionary.length, this._textureDictionary[d._storeID] = d, c.bindFramebuffer(c.FRAMEBUFFER, null), d) : null
        }, b.setTextureParams = function(a, b) {
            b && this._antialias ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR)) : (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST)), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)
        }, b.setClearColor = function(a) {
            var b, c, d, e, f;
            "string" == typeof a ? 0 == a.indexOf("#") ? (4 == a.length && (a = "#" + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2) + a.charAt(3) + a.charAt(3)), b = Number("0x" + a.slice(1, 3)) / 255, c = Number("0x" + a.slice(3, 5)) / 255, d = Number("0x" + a.slice(5, 7)) / 255, e = Number("0x" + a.slice(7, 9)) / 255) : 0 == a.indexOf("rgba(") && (f = a.slice(5, -1).split(","), b = Number(f[0]) / 255, c = Number(f[1]) / 255, d = Number(f[2]) / 255, e = Number(f[3])) : (b = ((4278190080 & a) >>> 24) / 255, c = ((16711680 & a) >>> 16) / 255, d = ((65280 & a) >>> 8) / 255, e = (255 & a) / 255), this._clearColor.r = b || 0, this._clearColor.g = c || 0, this._clearColor.b = d || 0, this._clearColor.a = e || 0, this._webGLContext && this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a);
        }, b.toString = function() {
            return "[StageGL (name=" + this.name + ")]"
        }, b._fetchWebGLContext = function(a, b) {
            var c;
            try {
                c = a.getContext("webgl", b) || a.getContext("experimental-webgl", b)
            } catch (d) {}
            if (c) c.viewportWidth = a.width, c.viewportHeight = a.height;
            else {
                var e = "Could not initialize WebGL";
                console.error ? console.error(e) : console.log(e)
            }
            return c
        }, b._fetchShaderProgram = function(b, c, d, e, f) {
            b.useProgram(null);
            var g, h;
            switch (c) {
                case "filter":
                    h = a.COVER_VERTEX_HEADER + (d || a.COVER_VERTEX_BODY), g = a.COVER_FRAGMENT_HEADER + (e || a.COVER_FRAGMENT_BODY);
                    break;
                case "particle":
                    h = a.REGULAR_VERTEX_HEADER + a.PARTICLE_VERTEX_BODY, g = a.REGULAR_FRAGMENT_HEADER + a.PARTICLE_FRAGMENT_BODY;
                    break;
                case "override":
                    h = a.REGULAR_VERTEX_HEADER + (d || a.REGULAR_VERTEX_BODY), g = a.REGULAR_FRAGMENT_HEADER + (e || a.REGULAR_FRAGMENT_BODY);
                    break;
                case "regular":
                default:
                    h = a.REGULAR_VERTEX_HEADER + a.REGULAR_VERTEX_BODY, g = a.REGULAR_FRAGMENT_HEADER + a.REGULAR_FRAGMENT_BODY
            }
            var i = this._createShader(b, b.VERTEX_SHADER, h),
                j = this._createShader(b, b.FRAGMENT_SHADER, g),
                k = b.createProgram();
            if (b.attachShader(k, i), b.attachShader(k, j), b.linkProgram(k), k._type = c, !b.getProgramParameter(k, b.LINK_STATUS)) throw b.useProgram(this._activeShader), b.getProgramInfoLog(k);
            switch (b.useProgram(k), c) {
                case "filter":
                    k.vertexPositionAttribute = b.getAttribLocation(k, "vertexPosition"), b.enableVertexAttribArray(k.vertexPositionAttribute), k.uvPositionAttribute = b.getAttribLocation(k, "uvPosition"), b.enableVertexAttribArray(k.uvPositionAttribute), k.samplerUniform = b.getUniformLocation(k, "uSampler"), b.uniform1i(k.samplerUniform, 0), k.uprightUniform = b.getUniformLocation(k, "uUpright"), b.uniform1f(k.uprightUniform, 0), f && f(b, this, k);
                    break;
                case "override":
                case "particle":
                case "regular":
                default:
                    k.vertexPositionAttribute = b.getAttribLocation(k, "vertexPosition"), b.enableVertexAttribArray(k.vertexPositionAttribute), k.uvPositionAttribute = b.getAttribLocation(k, "uvPosition"), b.enableVertexAttribArray(k.uvPositionAttribute), k.textureIndexAttribute = b.getAttribLocation(k, "textureIndex"), b.enableVertexAttribArray(k.textureIndexAttribute), k.alphaAttribute = b.getAttribLocation(k, "objectAlpha"), b.enableVertexAttribArray(k.alphaAttribute);
                    for (var l = [], m = 0; m < this._batchTextureCount; m++) l[m] = m;
                    k.samplerData = l, k.samplerUniform = b.getUniformLocation(k, "uSampler"), b.uniform1iv(k.samplerUniform, l), k.pMatrixUniform = b.getUniformLocation(k, "pMatrix")
            }
            return b.useProgram(this._activeShader), k
        }, b._createShader = function(b, c, d) {
            d = d.replace(/{{count}}/g, this._batchTextureCount);
            for (var e = "", f = 1; f < this._batchTextureCount; f++) e += "} else if (indexPicker <= " + f + ".5) { color = texture2D(uSampler[" + f + "], vTextureCoord);";
            d = d.replace(/{{alternates}}/g, e), d = d.replace(/{{fragColor}}/g, this._premultiply ? a.REGULAR_FRAG_COLOR_PREMULTIPLY : a.REGULAR_FRAG_COLOR_NORMAL);
            var g = b.createShader(c);
            if (b.shaderSource(g, d), b.compileShader(g), !b.getShaderParameter(g, b.COMPILE_STATUS)) throw b.getShaderInfoLog(g);
            return g
        }, b._createBuffers = function(b) {
            var c, d, e, f = this._maxCardsPerBatch * a.INDICIES_PER_CARD,
                g = this._vertexPositionBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, g), c = 2;
            var h = this._vertices = new Float32Array(f * c);
            for (d = 0, e = h.length; e > d; d += c) h[d] = h[d + 1] = 0;
            b.bufferData(b.ARRAY_BUFFER, h, b.DYNAMIC_DRAW), g.itemSize = c, g.numItems = f;
            var i = this._uvPositionBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, i), c = 2;
            var j = this._uvs = new Float32Array(f * c);
            for (d = 0, e = j.length; e > d; d += c) j[d] = j[d + 1] = 0;
            b.bufferData(b.ARRAY_BUFFER, j, b.DYNAMIC_DRAW), i.itemSize = c, i.numItems = f;
            var k = this._textureIndexBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, k), c = 1;
            var l = this._indices = new Float32Array(f * c);
            for (d = 0, e = l.length; e > d; d++) l[d] = 0;
            b.bufferData(b.ARRAY_BUFFER, l, b.DYNAMIC_DRAW), k.itemSize = c, k.numItems = f;
            var m = this._alphaBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, m), c = 1;
            var n = this._alphas = new Float32Array(f * c);
            for (d = 0, e = n.length; e > d; d++) n[d] = 1;
            b.bufferData(b.ARRAY_BUFFER, n, b.DYNAMIC_DRAW), m.itemSize = c, m.numItems = f
        }, b._initTextures = function() {
            this._lastTextureInsert = -1, this._textureDictionary = [], this._textureIDs = {}, this._baseTextures = [], this._batchTextures = [];
            for (var a = 0; a < this._batchTextureCount; a++) {
                var b = this.getBaseTexture();
                if (this._baseTextures[a] = this._batchTextures[a] = b, !b) throw "Problems creating basic textures, known causes include using too much VRAM by not releasing WebGL texture instances"
            }
        }, b._loadTextureImage = function(a, b) {
            var c = b.src;
            c || (b._isCanvas = !0, c = b.src = "canvas_" + this._lastTrackedCanvas++);
            var d = this._textureIDs[c];
            void 0 === d && (d = this._textureIDs[c] = this._textureDictionary.length), void 0 === this._textureDictionary[d] && (this._textureDictionary[d] = this.getBaseTexture());
            var e = this._textureDictionary[d];
            if (e) e._batchID = this._batchID, e._storeID = d, e._imageData = b, this._insertTextureInBatch(a, e), b._storeID = d, b.complete || b.naturalWidth || b._isCanvas ? this._updateTextureImageData(a, b) : b.addEventListener("load", this._updateTextureImageData.bind(this, a, b));
            else {
                var f = "Problem creating desired texture, known causes include using too much VRAM by not releasing WebGL texture instances";
                console.error && console.error(f) || console.log(f), e = this._baseTextures[0], e._batchID = this._batchID, e._storeID = -1, e._imageData = e, this._insertTextureInBatch(a, e)
            }
            return e
        }, b._updateTextureImageData = function(a, b) {
            var c = b.width & b.width - 1 || b.height & b.height - 1,
                d = this._textureDictionary[b._storeID];
            a.activeTexture(a.TEXTURE0 + d._activeIndex), a.bindTexture(a.TEXTURE_2D, d), d.isPOT = !c, this.setTextureParams(a, d.isPOT);
            try {
                a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b)
            } catch (e) {
                var f = "\nAn error has occurred. This is most likely due to security restrictions on WebGL images with local or cross-domain origins";
                console.error ? (console.error(f), console.error(e)) : console && (console.log(f), console.log(e))
            }
            b._invalid = !1, d._w = b.width, d._h = b.height, this.vocalDebug && (c && console.warn("NPOT(Non Power of Two) Texture: " + b.src), (b.width > a.MAX_TEXTURE_SIZE || b.height > a.MAX_TEXTURE_SIZE) && console && console.error("Oversized Texture: " + b.width + "x" + b.height + " vs " + a.MAX_TEXTURE_SIZE + "max"))
        }, b._insertTextureInBatch = function(a, b) {
            if (this._batchTextures[b._activeIndex] !== b) {
                var c = -1,
                    d = (this._lastTextureInsert + 1) % this._batchTextureCount,
                    e = d;
                do {
                    if (this._batchTextures[e]._batchID != this._batchID && !this._slotBlacklist[e]) {
                        c = e;
                        break
                    }
                    e = (e + 1) % this._batchTextureCount
                } while (e !== d); - 1 === c && (this.batchReason = "textureOverflow", this._drawBuffers(a), this.batchCardCount = 0, c = d), this._batchTextures[c] = b, b._activeIndex = c;
                var f = b._imageData;
                f && f._invalid && void 0 !== b._drawID ? this._updateTextureImageData(a, f) : (a.activeTexture(a.TEXTURE0 + c), a.bindTexture(a.TEXTURE_2D, b), this.setTextureParams(a)), this._lastTextureInsert = c
            } else {
                var f = b._imageData;
                void 0 != b._storeID && f && f._invalid && this._updateTextureImageData(a, f)
            }
            b._drawID = this._drawID, b._batchID = this._batchID
        }, b._killTextureObject = function(a) {
            if (a) {
                var b = this._webGLContext;
                if (void 0 !== a._storeID && a._storeID >= 0) {
                    this._textureDictionary[a._storeID] = void 0;
                    for (var c in this._textureIDs) this._textureIDs[c] == a._storeID && delete this._textureIDs[c];
                    a._imageData && (a._imageData._storeID = void 0), a._imageData = a._storeID = void 0
                }
                void 0 !== a._activeIndex && this._batchTextures[a._activeIndex] === a && (this._batchTextures[a._activeIndex] = this._baseTextures[a._activeIndex]);
                try {
                    a._frameBuffer && b.deleteFramebuffer(a._frameBuffer), a._frameBuffer = void 0
                } catch (d) {
                    this.vocalDebug && console.log(d)
                }
                try {
                    b.deleteTexture(a)
                } catch (d) {
                    this.vocalDebug && console.log(d)
                }
            }
        }, b._backupBatchTextures = function(a, b) {
            var c = this._webGLContext;
            this._backupTextures || (this._backupTextures = []), void 0 === b && (b = this._backupTextures);
            for (var d = 0; d < this._batchTextureCount; d++) c.activeTexture(c.TEXTURE0 + d), a ? this._batchTextures[d] = b[d] : (b[d] = this._batchTextures[d], this._batchTextures[d] = this._baseTextures[d]), c.bindTexture(c.TEXTURE_2D, this._batchTextures[d]), this.setTextureParams(c, this._batchTextures[d].isPOT);
            a && b === this._backupTextures && (this._backupTextures = [])
        }, b._batchDraw = function(a, b, c) {
            this._isDrawing > 0 && this._drawBuffers(b), this._isDrawing++, this._drawID++, this.batchCardCount = 0, this.depth = 0, this._appendToBatchGroup(a, b, new createjs.Matrix2D, this.alpha, c), this.batchReason = "drawFinish", this._drawBuffers(b), this._isDrawing--
        }, b._cacheDraw = function(a, b, c, d) {
            var e, f = this._activeShader,
                g = this._slotBlacklist,
                h = this._maxTextureSlots - 1,
                i = this._viewportWidth,
                j = this._viewportHeight;
            this.protectTextureSlot(h, !0);
            var k = b.getMatrix();
            k = k.clone(), k.scale(1 / d.scale, 1 / d.scale), k = k.invert(), k.translate(-d.offX / d.scale * b.scaleX, -d.offY / d.scale * b.scaleY);
            var l = this._cacheContainer;
            l.children = [b], l.transformMatrix = k, this._backupBatchTextures(!1), c && c.length ? this._drawFilters(b, c, d) : this.isCacheControlled ? (a.clear(a.COLOR_BUFFER_BIT), this._batchDraw(l, a, !0)) : (a.activeTexture(a.TEXTURE0 + h), b.cacheCanvas = this.getTargetRenderTexture(b, d._drawWidth, d._drawHeight), e = b.cacheCanvas, a.bindFramebuffer(a.FRAMEBUFFER, e._frameBuffer), this.updateViewport(d._drawWidth, d._drawHeight), this._projectionMatrix = this._projectionMatrixFlip, a.clear(a.COLOR_BUFFER_BIT), this._batchDraw(l, a, !0), a.bindFramebuffer(a.FRAMEBUFFER, null), this.updateViewport(i, j)), this._backupBatchTextures(!0), this.protectTextureSlot(h, !1), this._activeShader = f, this._slotBlacklist = g
        }, b._drawFilters = function(a, b, c) {
            var d, e = this._webGLContext,
                f = this._maxTextureSlots - 1,
                g = this._viewportWidth,
                h = this._viewportHeight,
                i = this._cacheContainer,
                j = b.length;
            e.activeTexture(e.TEXTURE0 + f), d = this.getTargetRenderTexture(a, c._drawWidth, c._drawHeight), e.bindFramebuffer(e.FRAMEBUFFER, d._frameBuffer), this.updateViewport(c._drawWidth, c._drawHeight), e.clear(e.COLOR_BUFFER_BIT), this._batchDraw(i, e, !0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, d), this.setTextureParams(e);
            var k = !1,
                l = 0,
                m = b[l];
            do this._activeShader = this.getFilterShader(m), this._activeShader && (e.activeTexture(e.TEXTURE0 + f), d = this.getTargetRenderTexture(a, c._drawWidth, c._drawHeight), e.bindFramebuffer(e.FRAMEBUFFER, d._frameBuffer), e.viewport(0, 0, c._drawWidth, c._drawHeight), e.clear(e.COLOR_BUFFER_BIT), this._drawCover(e, k), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, d), this.setTextureParams(e), (j > 1 || b[0]._multiPass) && (k = !k), m = null !== m._multiPass ? m._multiPass : b[++l]); while (m);
            this.isCacheControlled ? (e.bindFramebuffer(e.FRAMEBUFFER, null), this.updateViewport(g, h), this._activeShader = this.getFilterShader(this), e.clear(e.COLOR_BUFFER_BIT), this._drawCover(e, k)) : (k && (e.activeTexture(e.TEXTURE0 + f), d = this.getTargetRenderTexture(a, c._drawWidth, c._drawHeight), e.bindFramebuffer(e.FRAMEBUFFER, d._frameBuffer), this._activeShader = this.getFilterShader(this), e.viewport(0, 0, c._drawWidth, c._drawHeight), e.clear(e.COLOR_BUFFER_BIT), this._drawCover(e, !k)), e.bindFramebuffer(e.FRAMEBUFFER, null), this.updateViewport(g, h), a.cacheCanvas = d)
        }, b._appendToBatchGroup = function(b, c, d, e, f) {
            b._glMtx || (b._glMtx = new createjs.Matrix2D);
            var g = b._glMtx;
            g.copy(d), b.transformMatrix ? g.appendMatrix(b.transformMatrix) : g.appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY);
            for (var h, i, j, k, l = b.children.length, m = 0; l > m; m++) {
                var n = b.children[m];
                if (n.visible && e)
                    if (n.cacheCanvas && !f || (n._updateState && n._updateState(), !n.children)) {
                        this.batchCardCount + 1 > this._maxCardsPerBatch && (this.batchReason = "vertexOverflow", this._drawBuffers(c), this.batchCardCount = 0), n._glMtx || (n._glMtx = new createjs.Matrix2D);
                        var o = n._glMtx;
                        o.copy(g), n.transformMatrix ? o.appendMatrix(n.transformMatrix) : o.appendTransform(n.x, n.y, n.scaleX, n.scaleY, n.rotation, n.skewX, n.skewY, n.regX, n.regY);
                        var p, q, r, s, t, u, v = n.cacheCanvas && !f;
                        if (2 === n._webGLRenderStyle || v) r = (f ? !1 : n.cacheCanvas) || n.image;
                        else {
                            if (1 !== n._webGLRenderStyle) continue;
                            if (s = n.spriteSheet.getFrame(n.currentFrame), null === s) continue;
                            r = s.image
                        }
                        var w = this._uvs,
                            x = this._vertices,
                            y = this._indices,
                            z = this._alphas;
                        if (r) {
                            if (void 0 === r._storeID) t = this._loadTextureImage(c, r), this._insertTextureInBatch(c, t);
                            else {
                                if (t = this._textureDictionary[r._storeID], !t) {
                                    this.vocalDebug && console.log("Texture should not be looked up while not being stored.");
                                    continue
                                }
                                t._batchID !== this._batchID && this._insertTextureInBatch(c, t)
                            }
                            if (q = t._activeIndex, 2 === n._webGLRenderStyle || v) !v && n.sourceRect ? (n._uvRect || (n._uvRect = {}), u = n.sourceRect, p = n._uvRect, p.t = u.y / r.height, p.l = u.x / r.width, p.b = (u.y + u.height) / r.height, p.r = (u.x + u.width) / r.width, h = 0, i = 0, j = u.width + h, k = u.height + i) : (p = a.UV_RECT, v ? (u = n.bitmapCache, h = u.x + u._filterOffX / u.scale, i = u.y + u._filterOffY / u.scale, j = u._drawWidth / u.scale + h, k = u._drawHeight / u.scale + i) : (h = 0, i = 0, j = r.width + h, k = r.height + i));
                            else if (1 === n._webGLRenderStyle) {
                                var A = s.rect;
                                p = s.uvRect, p || (p = a.buildUVRects(n.spriteSheet, n.currentFrame, !1)), h = -s.regX, i = -s.regY, j = A.width - s.regX, k = A.height - s.regY
                            }
                            var B = this.batchCardCount * a.INDICIES_PER_CARD,
                                C = 2 * B;
                            x[C] = h * o.a + i * o.c + o.tx, x[C + 1] = h * o.b + i * o.d + o.ty, x[C + 2] = h * o.a + k * o.c + o.tx, x[C + 3] = h * o.b + k * o.d + o.ty, x[C + 4] = j * o.a + i * o.c + o.tx, x[C + 5] = j * o.b + i * o.d + o.ty, x[C + 6] = x[C + 2], x[C + 7] = x[C + 3], x[C + 8] = x[C + 4], x[C + 9] = x[C + 5], x[C + 10] = j * o.a + k * o.c + o.tx, x[C + 11] = j * o.b + k * o.d + o.ty, w[C] = p.l, w[C + 1] = p.t, w[C + 2] = p.l, w[C + 3] = p.b, w[C + 4] = p.r, w[C + 5] = p.t, w[C + 6] = p.l, w[C + 7] = p.b, w[C + 8] = p.r, w[C + 9] = p.t, w[C + 10] = p.r, w[C + 11] = p.b, y[B] = y[B + 1] = y[B + 2] = y[B + 3] = y[B + 4] = y[B + 5] = q, z[B] = z[B + 1] = z[B + 2] = z[B + 3] = z[B + 4] = z[B + 5] = n.alpha * e, this.batchCardCount++
                        }
                    } else this._appendToBatchGroup(n, c, g, n.alpha * e)
            }
        }, b._drawBuffers = function(b) {
            if (!(this.batchCardCount <= 0)) {
                this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : " + this.batchReason);
                var c = this._activeShader,
                    d = this._vertexPositionBuffer,
                    e = this._textureIndexBuffer,
                    f = this._uvPositionBuffer,
                    g = this._alphaBuffer;
                b.useProgram(c), b.bindBuffer(b.ARRAY_BUFFER, d), b.vertexAttribPointer(c.vertexPositionAttribute, d.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._vertices), b.bindBuffer(b.ARRAY_BUFFER, e), b.vertexAttribPointer(c.textureIndexAttribute, e.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._indices), b.bindBuffer(b.ARRAY_BUFFER, f), b.vertexAttribPointer(c.uvPositionAttribute, f.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._uvs), b.bindBuffer(b.ARRAY_BUFFER, g), b.vertexAttribPointer(c.alphaAttribute, g.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._alphas), b.uniformMatrix4fv(c.pMatrixUniform, b.FALSE, this._projectionMatrix);
                for (var h = 0; h < this._batchTextureCount; h++) {
                    var i = this._batchTextures[h];
                    b.activeTexture(b.TEXTURE0 + h), b.bindTexture(b.TEXTURE_2D, i), this.setTextureParams(b, i.isPOT)
                }
                b.drawArrays(b.TRIANGLES, 0, this.batchCardCount * a.INDICIES_PER_CARD), this._batchID++
            }
        }, b._drawCover = function(b, c) {
            this._isDrawing > 0 && this._drawBuffers(b), this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : Cover");
            var d = this._activeShader,
                e = this._vertexPositionBuffer,
                f = this._uvPositionBuffer;
            b.clear(b.COLOR_BUFFER_BIT), b.useProgram(d), b.bindBuffer(b.ARRAY_BUFFER, e), b.vertexAttribPointer(d.vertexPositionAttribute, e.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, a.COVER_VERT), b.bindBuffer(b.ARRAY_BUFFER, f), b.vertexAttribPointer(d.uvPositionAttribute, f.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, c ? a.COVER_UV_FLIP : a.COVER_UV), b.uniform1i(d.samplerUniform, 0), b.uniform1f(d.uprightUniform, c ? 0 : 1), b.drawArrays(b.TRIANGLES, 0, a.INDICIES_PER_CARD)
        }, createjs.StageGL = createjs.promote(a, "Stage")
    }(), this.createjs = this.createjs || {},
    function() {
        function a(a) {
            this.DisplayObject_constructor(), "string" == typeof a ? (this.image = document.createElement("img"), this.image.src = a) : this.image = a, this.sourceRect = null, this._webGLRenderStyle = createjs.DisplayObject._StageGL_BITMAP
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.initialize = a, b.isVisible = function() {
            var a = this.image,
                b = this.cacheCanvas || a && (a.naturalWidth || a.getContext || a.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && b)
        }, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            var c = this.image,
                d = this.sourceRect;
            if (c.getImage && (c = c.getImage()), !c) return !0;
            if (d) {
                var e = d.x,
                    f = d.y,
                    g = e + d.width,
                    h = f + d.height,
                    i = 0,
                    j = 0,
                    k = c.width,
                    l = c.height;
                0 > e && (i -= e, e = 0), g > k && (g = k), 0 > f && (j -= f, f = 0), h > l && (h = l), a.drawImage(c, e, f, g - e, h - f, i, j, g - e, h - f)
            } else a.drawImage(c, 0, 0);
            return !0
        }, b.getBounds = function() {
            var a = this.DisplayObject_getBounds();
            if (a) return a;
            var b = this.image,
                c = this.sourceRect || b,
                d = b && (b.naturalWidth || b.getContext || b.readyState >= 2);
            return d ? this._rectangle.setValues(0, 0, c.width, c.height) : null
        }, b.clone = function(b) {
            var c = this.image;
            c && b && (c = c.cloneNode());
            var d = new a(c);
            return this.sourceRect && (d.sourceRect = this.sourceRect.clone()), this._cloneProps(d), d
        }, b.toString = function() {
            return "[Bitmap (name=" + this.name + ")]"
        }, createjs.Bitmap = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = a, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, this._webGLRenderStyle = createjs.DisplayObject._StageGL_SPRITE, null != b && this.gotoAndPlay(b)
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.initialize = a, b.isVisible = function() {
            var a = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            this._normalizeFrame();
            var c = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!c) return !1;
            var d = c.rect;
            return d.width && d.height && a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height), !0
        }, b.play = function() {
            this.paused = !1
        }, b.stop = function() {
            this.paused = !0
        }, b.gotoAndPlay = function(a) {
            this.paused = !1, this._skipAdvance = !0, this._goto(a)
        }, b.gotoAndStop = function(a) {
            this.paused = !0, this._goto(a)
        }, b.advance = function(a) {
            var b = this.framerate || this.spriteSheet.framerate,
                c = b && null != a ? a / (1e3 / b) : 1;
            this._normalizeFrame(c)
        }, b.getBounds = function() {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        }, b.clone = function() {
            return this._cloneProps(new a(this.spriteSheet))
        }, b.toString = function() {
            return "[Sprite (name=" + this.name + ")]"
        }, b._cloneProps = function(a) {
            return this.DisplayObject__cloneProps(a), a.currentFrame = this.currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a.currentAnimationFrame = this.currentAnimationFrame, a.framerate = this.framerate, a._animation = this._animation, a._currentFrame = this._currentFrame, a._skipAdvance = this._skipAdvance, a
        }, b._tick = function(a) {
            this.paused || (this._skipAdvance || this.advance(a && a.delta), this._skipAdvance = !1), this.DisplayObject__tick(a)
        }, b._normalizeFrame = function(a) {
            a = a || 0;
            var b, c = this._animation,
                d = this.paused,
                e = this._currentFrame;
            if (c) {
                var f = c.speed || 1,
                    g = this.currentAnimationFrame;
                if (b = c.frames.length, g + a * f >= b) {
                    var h = c.next;
                    if (this._dispatchAnimationEnd(c, e, d, h, b - 1)) return;
                    if (h) return this._goto(h, a - (b - g) / f);
                    this.paused = !0, g = c.frames.length - 1
                } else g += a * f;
                this.currentAnimationFrame = g, this._currentFrame = c.frames[0 | g]
            } else if (e = this._currentFrame += a, b = this.spriteSheet.getNumFrames(), e >= b && b > 0 && !this._dispatchAnimationEnd(c, e, d, b - 1) && (this._currentFrame -= b) >= b) return this._normalizeFrame();
            e = 0 | this._currentFrame, this.currentFrame != e && (this.currentFrame = e, this.dispatchEvent("change"))
        }, b._dispatchAnimationEnd = function(a, b, c, d, e) {
            var f = a ? a.name : null;
            if (this.hasEventListener("animationend")) {
                var g = new createjs.Event("animationend");
                g.name = f, g.next = d, this.dispatchEvent(g)
            }
            var h = this._animation != a || this._currentFrame != b;
            return h || c || !this.paused || (this.currentAnimationFrame = e, h = !0), h
        }, b._goto = function(a, b) {
            if (this.currentAnimationFrame = 0, isNaN(a)) {
                var c = this.spriteSheet.getAnimation(a);
                c && (this._animation = c, this.currentAnimation = a, this._normalizeFrame(b))
            } else this.currentAnimation = this._animation = null, this._currentFrame = a, this._normalizeFrame()
        }, createjs.Sprite = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.DisplayObject_constructor(), this.graphics = a ? a : new createjs.Graphics
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.isVisible = function() {
            var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function(a, b) {
            return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a, this), !0)
        }, b.clone = function(b) {
            var c = b && this.graphics ? this.graphics.clone() : this.graphics;
            return this._cloneProps(new a(c))
        }, b.toString = function() {
            return "[Shape (name=" + this.name + ")]"
        }, createjs.Shape = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.DisplayObject_constructor(), this.text = a, this.font = b, this.color = c, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
        }
        var b = createjs.extend(a, createjs.DisplayObject),
            c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        c.getContext && (a._workingContext = c.getContext("2d"), c.width = c.height = 1), a.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -.5,
            end: -1,
            right: -1
        }, a.V_OFFSETS = {
            top: 0,
            hanging: -.01,
            middle: -.4,
            alphabetic: -.8,
            ideographic: -.85,
            bottom: -1
        }, b.isVisible = function() {
            var a = this.cacheCanvas || null != this.text && "" !== this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function(a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            var c = this.color || "#000";
            return this.outline ? (a.strokeStyle = c, a.lineWidth = 1 * this.outline) : a.fillStyle = c, this._drawText(this._prepContext(a)), !0
        }, b.getMeasuredWidth = function() {
            return this._getMeasuredWidth(this.text)
        }, b.getMeasuredLineHeight = function() {
            return 1.2 * this._getMeasuredWidth("M")
        }, b.getMeasuredHeight = function() {
            return this._drawText(null, {}).height
        }, b.getBounds = function() {
            var b = this.DisplayObject_getBounds();
            if (b) return b;
            if (null == this.text || "" === this.text) return null;
            var c = this._drawText(null, {}),
                d = this.maxWidth && this.maxWidth < c.width ? this.maxWidth : c.width,
                e = d * a.H_OFFSETS[this.textAlign || "left"],
                f = this.lineHeight || this.getMeasuredLineHeight(),
                g = f * a.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.setValues(e, g, d, c.height)
        }, b.getMetrics = function() {
            var b = {
                lines: []
            };
            return b.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), b.vOffset = b.lineHeight * a.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, b, b.lines)
        }, b.clone = function() {
            return this._cloneProps(new a(this.text, this.font, this.color))
        }, b.toString = function() {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
        }, b._cloneProps = function(a) {
            return this.DisplayObject__cloneProps(a), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth, a
        }, b._prepContext = function(a) {
            return a.font = this.font || "10px sans-serif", a.textAlign = this.textAlign || "left", a.textBaseline = this.textBaseline || "top", a.lineJoin = "miter", a.miterLimit = 2.5, a
        }, b._drawText = function(b, c, d) {
            var e = !!b;
            e || (b = a._workingContext, b.save(), this._prepContext(b));
            for (var f = this.lineHeight || this.getMeasuredLineHeight(), g = 0, h = 0, i = String(this.text).split(/(?:\r\n|\r|\n)/), j = 0, k = i.length; k > j; j++) {
                var l = i[j],
                    m = null;
                if (null != this.lineWidth && (m = b.measureText(l).width) > this.lineWidth) {
                    var n = l.split(/(\s)/);
                    l = n[0], m = b.measureText(l).width;
                    for (var o = 1, p = n.length; p > o; o += 2) {
                        var q = b.measureText(n[o] + n[o + 1]).width;
                        m + q > this.lineWidth ? (e && this._drawTextLine(b, l, h * f), d && d.push(l), m > g && (g = m), l = n[o + 1], m = b.measureText(l).width, h++) : (l += n[o] + n[o + 1], m += q)
                    }
                }
                e && this._drawTextLine(b, l, h * f), d && d.push(l), c && null == m && (m = b.measureText(l).width), m > g && (g = m), h++
            }
            return c && (c.width = g, c.height = h * f), e || b.restore(), c
        }, b._drawTextLine = function(a, b, c) {
            this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
        }, b._getMeasuredWidth = function(b) {
            var c = a._workingContext;
            c.save();
            var d = this._prepContext(c).measureText(b).width;
            return c.restore(), d
        }, createjs.Text = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.Container_constructor(), this.text = a || "", this.spriteSheet = b, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
                text: 0,
                spriteSheet: 0,
                lineHeight: 0,
                letterSpacing: 0,
                spaceWidth: 0
            }, this._oldStage = null, this._drawAction = null
        }
        var b = createjs.extend(a, createjs.Container);
        a.maxPoolSize = 100, a._spritePool = [], b.draw = function(a, b) {
            this.DisplayObject_draw(a, b) || (this._updateState(), this.Container_draw(a, b))
        }, b.getBounds = function() {
            return this._updateText(), this.Container_getBounds()
        }, b.isVisible = function() {
            var a = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && a)
        }, b.clone = function() {
            return this._cloneProps(new a(this.text, this.spriteSheet))
        }, b.addChild = b.addChildAt = b.removeChild = b.removeChildAt = b.removeAllChildren = function() {}, b._updateState = function() {
            this._updateText()
        }, b._cloneProps = function(a) {
            return this.Container__cloneProps(a), a.lineHeight = this.lineHeight, a.letterSpacing = this.letterSpacing, a.spaceWidth = this.spaceWidth, a
        }, b._getFrameIndex = function(a, b) {
            var c, d = b.getAnimation(a);
            return d || (a != (c = a.toUpperCase()) || a != (c = a.toLowerCase()) || (c = null), c && (d = b.getAnimation(c))), d && d.frames[0]
        }, b._getFrame = function(a, b) {
            var c = this._getFrameIndex(a, b);
            return null == c ? c : b.getFrame(c)
        }, b._getLineHeight = function(a) {
            var b = this._getFrame("1", a) || this._getFrame("T", a) || this._getFrame("L", a) || a.getFrame(0);
            return b ? b.rect.height : 1
        }, b._getSpaceWidth = function(a) {
            var b = this._getFrame("1", a) || this._getFrame("l", a) || this._getFrame("e", a) || this._getFrame("a", a) || a.getFrame(0);
            return b ? b.rect.width : 1
        }, b._updateText = function() {
            var b, c = 0,
                d = 0,
                e = this._oldProps,
                f = !1,
                g = this.spaceWidth,
                h = this.lineHeight,
                i = this.spriteSheet,
                j = a._spritePool,
                k = this.children,
                l = 0,
                m = k.length;
            for (var n in e) e[n] != this[n] && (e[n] = this[n], f = !0);
            if (f) {
                var o = !!this._getFrame(" ", i);
                o || g || (g = this._getSpaceWidth(i)), h || (h = this._getLineHeight(i));
                for (var p = 0, q = this.text.length; q > p; p++) {
                    var r = this.text.charAt(p);
                    if (" " != r || o)
                        if ("\n" != r && "\r" != r) {
                            var s = this._getFrameIndex(r, i);
                            null != s && (m > l ? b = k[l] : (k.push(b = j.length ? j.pop() : new createjs.Sprite), b.parent = this, m++), b.spriteSheet = i, b.gotoAndStop(s), b.x = c, b.y = d, l++, c += b.getBounds().width + this.letterSpacing)
                        } else "\r" == r && "\n" == this.text.charAt(p + 1) && p++, c = 0, d += h;
                    else c += g
                }
                for (; m > l;) j.push(b = k.pop()), b.parent = null, m--;
                j.length > a.maxPoolSize && (j.length = a.maxPoolSize)
            }
        }, createjs.BitmapText = createjs.promote(a, "Container")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(b) {
            this.Container_constructor(), !a.inited && a.init();
            var c, d, e, f;
            b instanceof String || arguments.length > 1 ? (c = b, d = arguments[1], e = arguments[2], f = arguments[3], null == e && (e = -1), b = null) : b && (c = b.mode, d = b.startPosition, e = b.loop, f = b.labels), b || (b = {
                labels: f
            }), this.mode = c || a.INDEPENDENT, this.startPosition = d || 0, this.loop = e === !0 ? -1 : e || 0, this.currentFrame = 0, this.paused = b.paused || !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || b.frameBounds, this.framerate = null, b.useTicks = b.paused = !0, this.timeline = new createjs.Timeline(b), this._synchOffset = 0, this._rawPosition = -1, this._bound_resolveState = this._resolveState.bind(this), this._t = 0, this._managed = {}
        }

        function b() {
            throw "MovieClipPlugin cannot be instantiated."
        }
        var c = createjs.extend(a, createjs.Container);
        a.INDEPENDENT = "independent", a.SINGLE_FRAME = "single", a.SYNCHED = "synched", a.inited = !1, a.init = function() {
            a.inited || (b.install(), a.inited = !0)
        }, c._getLabels = function() {
            return this.timeline.getLabels()
        }, c.getLabels = createjs.deprecate(c._getLabels, "MovieClip.getLabels"), c._getCurrentLabel = function() {
            return this.timeline.currentLabel
        }, c.getCurrentLabel = createjs.deprecate(c._getCurrentLabel, "MovieClip.getCurrentLabel"), c._getDuration = function() {
            return this.timeline.duration
        }, c.getDuration = createjs.deprecate(c._getDuration, "MovieClip.getDuration");
        try {
            Object.defineProperties(c, {
                labels: {
                    get: c._getLabels
                },
                currentLabel: {
                    get: c._getCurrentLabel
                },
                totalFrames: {
                    get: c._getDuration
                },
                duration: {
                    get: c._getDuration
                }
            })
        } catch (d) {}
        c.initialize = a, c.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, c.draw = function(a, b) {
            return this.DisplayObject_draw(a, b) ? !0 : (this._updateState(), this.Container_draw(a, b), !0)
        }, c.play = function() {
            this.paused = !1
        }, c.stop = function() {
            this.paused = !0
        }, c.gotoAndPlay = function(a) {
            this.paused = !1, this._goto(a)
        }, c.gotoAndStop = function(a) {
            this.paused = !0, this._goto(a)
        }, c.advance = function(b) {
            var c = a.INDEPENDENT;
            if (this.mode === c) {
                for (var d = this, e = d.framerate;
                    (d = d.parent) && null === e;) d.mode === c && (e = d._framerate);
                if (this._framerate = e, !this.paused) {
                    var f = null !== e && -1 !== e && null !== b ? b / (1e3 / e) + this._t : 1,
                        g = 0 | f;
                    for (this._t = f - g; g--;) this._updateTimeline(this._rawPosition + 1, !1)
                }
            }
        }, c.clone = function() {
            throw "MovieClip cannot be cloned."
        }, c.toString = function() {
            return "[MovieClip (name=" + this.name + ")]"
        }, c._updateState = function() {
            (-1 === this._rawPosition || this.mode !== a.INDEPENDENT) && this._updateTimeline(-1)
        }, c._tick = function(a) {
            this.advance(a && a.delta), this.Container__tick(a)
        }, c._goto = function(a) {
            var b = this.timeline.resolve(a);
            null != b && (this._t = 0, this._updateTimeline(b, !0))
        }, c._reset = function() {
            this._rawPosition = -1, this._t = this.currentFrame = 0, this.paused = !1
        }, c._updateTimeline = function(b, c) {
            var d = this.mode !== a.INDEPENDENT,
                e = this.timeline;
            d && (b = this.startPosition + (this.mode === a.SINGLE_FRAME ? 0 : this._synchOffset)), 0 > b && (b = 0), (this._rawPosition !== b || d) && (this._rawPosition = b, e.loop = this.loop, e.setPosition(b, d || !this.actionsEnabled, c, this._bound_resolveState))
        }, c._renderFirstFrame = function() {
            var a = this.timeline,
                b = a.rawPosition;
            a.setPosition(0, !0, !0, this._bound_resolveState), a.rawPosition = b
        }, c._resolveState = function() {
            var a = this.timeline;
            this.currentFrame = a.position;
            for (var b in this._managed) this._managed[b] = 1;
            for (var c = a.tweens, d = 0, e = c.length; e > d; d++) {
                var f = c[d],
                    g = f.target;
                if (g !== this && !f.passive) {
                    var h = f._stepPosition;
                    g instanceof createjs.DisplayObject ? this._addManagedChild(g, h) : this._setState(g.state, h)
                }
            }
            var i = this.children;
            for (d = i.length - 1; d >= 0; d--) {
                var j = i[d].id;
                1 === this._managed[j] && (this.removeChildAt(d), delete this._managed[j])
            }
        }, c._setState = function(a, b) {
            if (a)
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c],
                        e = d.t,
                        f = d.p;
                    for (var g in f) e[g] = f[g];
                    this._addManagedChild(e, b)
                }
        }, c._addManagedChild = function(b, c) {
            b._off || (this.addChildAt(b, 0), b instanceof a && (b._synchOffset = c, b.mode === a.INDEPENDENT && b.autoReset && !this._managed[b.id] && b._reset()), this._managed[b.id] = 2)
        }, c._getBounds = function(a, b) {
            var c = this.DisplayObject_getBounds();
            return c || this.frameBounds && (c = this._rectangle.copy(this.frameBounds[this.currentFrame])), c ? this._transformBounds(c, a, b) : this.Container__getBounds(a, b)
        }, createjs.MovieClip = createjs.promote(a, "Container"), b.priority = 100, b.ID = "MovieClip", b.install = function() {
            createjs.Tween._installPlugin(b)
        }, b.init = function(c, d, e) {
            "startPosition" === d && c.target instanceof a && c._addPlugin(b)
        }, b.step = function(a, b, c) {}, b.change = function(a, b, c, d, e, f) {
            return "startPosition" === c ? 1 === e ? b.props[c] : b.prev.props[c] : void 0
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "SpriteSheetUtils cannot be instantiated"
        }
        var b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        b.getContext && (a._workingCanvas = b, a._workingContext = b.getContext("2d"), b.width = b.height = 1), a.extractFrame = function(b, c) {
            isNaN(c) && (c = b.getAnimation(c).frames[0]);
            var d = b.getFrame(c);
            if (!d) return null;
            var e = d.rect,
                f = a._workingCanvas;
            f.width = e.width, f.height = e.height, a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
            var g = document.createElement("img");
            return g.src = f.toDataURL("image/png"), g
        }, a.addFlippedFrames = createjs.deprecate(null, "SpriteSheetUtils.addFlippedFrames"), a.mergeAlpha = createjs.deprecate(null, "SpriteSheetUtils.mergeAlpha"), a._flip = function(b, c, d, e) {
            for (var f = b._images, g = a._workingCanvas, h = a._workingContext, i = f.length / c, j = 0; i > j; j++) {
                var k = f[j];
                k.__tmp = j, h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, g.width + 1, g.height + 1), g.width = k.width, g.height = k.height, h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0), h.drawImage(k, 0, 0);
                var l = document.createElement("img");
                l.src = g.toDataURL("image/png"), l.width = k.width || k.naturalWidth, l.height = k.height || k.naturalHeight,
                    f.push(l)
            }
            var m = b._frames,
                n = m.length / c;
            for (j = 0; n > j; j++) {
                k = m[j];
                var o = k.rect.clone();
                l = f[k.image.__tmp + i * c];
                var p = {
                    image: l,
                    rect: o,
                    regX: k.regX,
                    regY: k.regY
                };
                d && (o.x = (l.width || l.naturalWidth) - o.x - o.width, p.regX = o.width - k.regX), e && (o.y = (l.height || l.naturalHeight) - o.y - o.height, p.regY = o.height - k.regY), m.push(p)
            }
            var q = "_" + (d ? "h" : "") + (e ? "v" : ""),
                r = b._animations,
                s = b._data,
                t = r.length / c;
            for (j = 0; t > j; j++) {
                var u = r[j];
                k = s[u];
                var v = {
                    name: u + q,
                    speed: k.speed,
                    next: k.next,
                    frames: []
                };
                k.next && (v.next += q), m = k.frames;
                for (var w = 0, x = m.length; x > w; w++) v.frames.push(m[w] + n * c);
                s[v.name] = v, r.push(v.name)
            }
        }, createjs.SpriteSheetUtils = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = a || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", a.ERR_RUNNING = "a build is already running", b.addFrame = function(b, c, d, e, f) {
            if (this._data) throw a.ERR_RUNNING;
            var g = c || b.bounds || b.nominalBounds;
            return !g && b.getBounds && (g = b.getBounds()), g ? (d = d || 1, this._frames.push({
                source: b,
                sourceRect: g,
                scale: d,
                funct: e,
                data: f,
                index: this._frames.length,
                height: g.height * d
            }) - 1) : null
        }, b.addAnimation = function(b, c, d, e) {
            if (this._data) throw a.ERR_RUNNING;
            this._animations[b] = {
                frames: c,
                next: d,
                speed: e
            }
        }, b.addMovieClip = function(b, c, d, e, f, g) {
            if (this._data) throw a.ERR_RUNNING;
            var h = b.frameBounds,
                i = c || b.bounds || b.nominalBounds;
            if (!i && b.getBounds && (i = b.getBounds()), i || h) {
                var j, k, l = this._frames.length,
                    m = b.timeline.duration;
                for (j = 0; m > j; j++) {
                    var n = h && h[j] ? h[j] : i;
                    this.addFrame(b, n, d, this._setupMovieClipFrame, {
                        i: j,
                        f: e,
                        d: f
                    })
                }
                var o = b.timeline._labels,
                    p = [];
                for (var q in o) p.push({
                    index: o[q],
                    label: q
                });
                if (p.length)
                    for (p.sort(function(a, b) {
                            return a.index - b.index
                        }), j = 0, k = p.length; k > j; j++) {
                        for (var r = p[j].label, s = l + p[j].index, t = l + (j == k - 1 ? m : p[j + 1].index), u = [], v = s; t > v; v++) u.push(v);
                        (!g || (r = g(r, b, s, t))) && this.addAnimation(r, u, !0)
                    }
            }
        }, b.build = function() {
            if (this._data) throw a.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(););
            return this._endBuild(), this.spriteSheet
        }, b.buildAsync = function(b) {
            if (this._data) throw a.ERR_RUNNING;
            this.timeSlice = b, this._startBuild();
            var c = this;
            this._timerID = setTimeout(function() {
                c._run()
            }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
        }, b.stopAsync = function() {
            clearTimeout(this._timerID), this._data = null
        }, b.clone = function() {
            throw "SpriteSheetBuilder cannot be cloned."
        }, b.toString = function() {
            return "[SpriteSheetBuilder]"
        }, b._startBuild = function() {
            var b = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var c = [];
            this._data = {
                images: [],
                frames: c,
                framerate: this.framerate,
                animations: this._animations
            };
            var d = this._frames.slice();
            if (d.sort(function(a, b) {
                    return a.height <= b.height ? -1 : 1
                }), d[d.length - 1].height + 2 * b > this.maxHeight) throw a.ERR_DIMENSIONS;
            for (var e = 0, f = 0, g = 0; d.length;) {
                var h = this._fillRow(d, e, g, c, b);
                if (h.w > f && (f = h.w), e += h.h, !h.h || !d.length) {
                    var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                    i.width = this._getSize(f, this.maxWidth), i.height = this._getSize(e, this.maxHeight), this._data.images[g] = i, h.h || (f = e = 0, g++)
                }
            }
        }, b._setupMovieClipFrame = function(a, b) {
            var c = a.actionsEnabled;
            a.actionsEnabled = !1, a.gotoAndStop(b.i), a.actionsEnabled = c, b.f && b.f(a, b.d, b.i)
        }, b._getSize = function(a, b) {
            for (var c = 4; Math.pow(2, ++c) < a;);
            return Math.min(b, Math.pow(2, c))
        }, b._fillRow = function(b, c, d, e, f) {
            var g = this.maxWidth,
                h = this.maxHeight;
            c += f;
            for (var i = h - c, j = f, k = 0, l = b.length - 1; l >= 0; l--) {
                var m = b[l],
                    n = this._scale * m.scale,
                    o = m.sourceRect,
                    p = m.source,
                    q = Math.floor(n * o.x - f),
                    r = Math.floor(n * o.y - f),
                    s = Math.ceil(n * o.height + 2 * f),
                    t = Math.ceil(n * o.width + 2 * f);
                if (t > g) throw a.ERR_DIMENSIONS;
                s > i || j + t > g || (m.img = d, m.rect = new createjs.Rectangle(j, c, t, s), k = k || s, b.splice(l, 1), e[m.index] = [j, c, t, s, d, Math.round(-q + n * p.regX - f), Math.round(-r + n * p.regY - f)], j += t)
            }
            return {
                w: j,
                h: k
            }
        }, b._endBuild = function() {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
        }, b._run = function() {
            for (var a = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), b = (new Date).getTime() + a, c = !1; b > (new Date).getTime();)
                if (!this._drawNext()) {
                    c = !0;
                    break
                }
            if (c) this._endBuild();
            else {
                var d = this;
                this._timerID = setTimeout(function() {
                    d._run()
                }, 50 - a)
            }
            var e = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
                var f = new createjs.Event("progress");
                f.progress = e, this.dispatchEvent(f)
            }
        }, b._drawNext = function() {
            var a = this._frames[this._index],
                b = a.scale * this._scale,
                c = a.rect,
                d = a.sourceRect,
                e = this._data.images[a.img],
                f = e.getContext("2d");
            return a.funct && a.funct(a.source, a.data), f.save(), f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip(), f.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)), f.scale(b, b), a.source.draw(f), f.restore(), ++this._index < this._frames.length
        }, createjs.SpriteSheetBuilder = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.DisplayObject_constructor(), "string" == typeof a && (a = document.getElementById(a)), this.mouseEnabled = !1;
            var b = a.style;
            b.position = "absolute", b.transformOrigin = b.WebkitTransformOrigin = b.msTransformOrigin = b.MozTransformOrigin = b.OTransformOrigin = "0% 0%", this.htmlElement = a, this._oldProps = null, this._oldStage = null, this._drawAction = null
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.isVisible = function() {
            return null != this.htmlElement
        }, b.draw = function(a, b) {
            return !0
        }, b.cache = function() {}, b.uncache = function() {}, b.updateCache = function() {}, b.hitTest = function() {}, b.localToGlobal = function() {}, b.globalToLocal = function() {}, b.localToLocal = function() {}, b.clone = function() {
            throw "DOMElement cannot be cloned."
        }, b.toString = function() {
            return "[DOMElement (name=" + this.name + ")]"
        }, b._tick = function(a) {
            var b = this.stage;
            b && b !== this._oldStage && (this._drawAction && b.off("drawend", this._drawAction), this._drawAction = b.on("drawend", this._handleDrawEnd, this), this._oldStage = b), this.DisplayObject__tick(a)
        }, b._handleDrawEnd = function(a) {
            var b = this.htmlElement;
            if (b) {
                var c = b.style,
                    d = this.getConcatenatedDisplayProps(this._props),
                    e = d.matrix,
                    f = d.visible ? "visible" : "hidden";
                if (f != c.visibility && (c.visibility = f), d.visible) {
                    var g = this._oldProps,
                        h = g && g.matrix,
                        i = 1e4;
                    if (!h || !h.equals(e)) {
                        var j = "matrix(" + (e.a * i | 0) / i + "," + (e.b * i | 0) / i + "," + (e.c * i | 0) / i + "," + (e.d * i | 0) / i + "," + (e.tx + .5 | 0);
                        c.transform = c.WebkitTransform = c.OTransform = c.msTransform = j + "," + (e.ty + .5 | 0) + ")", c.MozTransform = j + "px," + (e.ty + .5 | 0) + "px)", g || (g = this._oldProps = new createjs.DisplayProps(!0, null)), g.matrix.copy(e)
                    }
                    g.alpha != d.alpha && (c.opacity = "" + (d.alpha * i | 0) / i, g.alpha = d.alpha)
                }
            }
        }, createjs.DOMElement = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.usesContext = !1, this._multiPass = null, this.VTX_SHADER_BODY = null, this.FRAG_SHADER_BODY = null
        }
        var b = a.prototype;
        b.getBounds = function(a) {
            return a
        }, b.shaderParamSetup = function(a, b, c) {}, b.applyFilter = function(a, b, c, d, e, f, g, h) {
            f = f || a, null == g && (g = b), null == h && (h = c);
            try {
                var i = a.getImageData(b, c, d, e)
            } catch (j) {
                return !1
            }
            return this._applyFilter(i) ? (f.putImageData(i, g, h), !0) : !1
        }, b.toString = function() {
            return "[Filter]"
        }, b.clone = function() {
            return new a
        }, b._applyFilter = function(a) {
            return !0
        }, createjs.Filter = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.width = void 0, this.height = void 0, this.x = void 0, this.y = void 0, this.scale = 1, this.offX = 0, this.offY = 0, this.cacheID = 0, this._filterOffX = 0, this._filterOffY = 0, this._cacheDataURLID = 0, this._cacheDataURL = null, this._drawWidth = 0, this._drawHeight = 0
        }
        var b = a.prototype;
        a.getFilterBounds = function(a, b) {
            b || (b = new createjs.Rectangle);
            var c = a.filters,
                d = c && c.length;
            if (0 >= !!d) return b;
            for (var e = 0; d > e; e++) {
                var f = c[e];
                if (f && f.getBounds) {
                    var g = f.getBounds();
                    g && (0 == e ? b.setValues(g.x, g.y, g.width, g.height) : b.extend(g.x, g.y, g.width, g.height))
                }
            }
            return b
        }, b.toString = function() {
            return "[BitmapCache]"
        }, b.define = function(a, b, c, d, e, f, g) {
            if (!a) throw "No symbol to cache";
            this._options = g, this.target = a, this.width = d >= 1 ? d : 1, this.height = e >= 1 ? e : 1, this.x = b || 0, this.y = c || 0, this.scale = f || 1, this.update()
        }, b.update = function(b) {
            if (!this.target) throw "define() must be called before update()";
            var c = a.getFilterBounds(this.target),
                d = this.target.cacheCanvas;
            this._drawWidth = Math.ceil(this.width * this.scale) + c.width, this._drawHeight = Math.ceil(this.height * this.scale) + c.height, d && this._drawWidth == d.width && this._drawHeight == d.height || this._updateSurface(), this._filterOffX = c.x, this._filterOffY = c.y, this.offX = this.x * this.scale + this._filterOffX, this.offY = this.y * this.scale + this._filterOffY, this._drawToCache(b), this.cacheID = this.cacheID ? this.cacheID + 1 : 1
        }, b.release = function() {
            if (this._webGLCache) this._webGLCache.isCacheControlled || (this.__lastRT && (this.__lastRT = void 0), this.__rtA && this._webGLCache._killTextureObject(this.__rtA), this.__rtB && this._webGLCache._killTextureObject(this.__rtB), this.target && this.target.cacheCanvas && this._webGLCache._killTextureObject(this.target.cacheCanvas)), this._webGLCache = !1;
            else {
                var a = this.target.stage;
                a instanceof createjs.StageGL && a.releaseTexture(this.target.cacheCanvas)
            }
            this.target = this.target.cacheCanvas = null, this.cacheID = this._cacheDataURLID = this._cacheDataURL = void 0, this.width = this.height = this.x = this.y = this.offX = this.offY = 0, this.scale = 1
        }, b.getCacheDataURL = function() {
            var a = this.target && this.target.cacheCanvas;
            return a ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURLID = this.cacheID, this._cacheDataURL = a.toDataURL ? a.toDataURL() : null), this._cacheDataURL) : null
        }, b.draw = function(a) {
            return this.target ? (a.drawImage(this.target.cacheCanvas, this.x + this._filterOffX / this.scale, this.y + this._filterOffY / this.scale, this._drawWidth / this.scale, this._drawHeight / this.scale), !0) : !1
        }, b._updateSurface = function() {
            if (!this._options || !this._options.useGL) {
                var a = this.target.cacheCanvas;
                return a || (a = this.target.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), a.width = this._drawWidth, void(a.height = this._drawHeight)
            }
            if (!this._webGLCache)
                if ("stage" === this._options.useGL) {
                    if (!this.target.stage || !this.target.stage.isWebGL) {
                        var b = "Cannot use 'stage' for cache because the object's parent stage is ";
                        throw b += this.target.stage ? "non WebGL." : "not set, please addChild to the correct stage."
                    }
                    this.target.cacheCanvas = !0, this._webGLCache = this.target.stage
                } else if ("new" === this._options.useGL) this.target.cacheCanvas = document.createElement("canvas"), this._webGLCache = new createjs.StageGL(this.target.cacheCanvas, {
                antialias: !0,
                transparent: !0,
                autoPurge: -1
            }), this._webGLCache.isCacheControlled = !0;
            else {
                if (!(this._options.useGL instanceof createjs.StageGL)) throw "Invalid option provided to useGL, expected ['stage', 'new', StageGL, undefined], got " + this._options.useGL;
                this.target.cacheCanvas = !0, this._webGLCache = this._options.useGL, this._webGLCache.isCacheControlled = !0
            }
            var a = this.target.cacheCanvas,
                c = this._webGLCache;
            c.isCacheControlled && (a.width = this._drawWidth, a.height = this._drawHeight, c.updateViewport(this._drawWidth, this._drawHeight)), this.target.filters ? (c.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight), c.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)) : c.isCacheControlled || c.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)
        }, b._drawToCache = function(a) {
            var b = this.target.cacheCanvas,
                c = this.target,
                d = this._webGLCache;
            if (d) d.cacheDraw(c, c.filters, this), b = this.target.cacheCanvas, b.width = this._drawWidth, b.height = this._drawHeight;
            else {
                var e = b.getContext("2d");
                a || e.clearRect(0, 0, this._drawWidth + 1, this._drawHeight + 1), e.save(), e.globalCompositeOperation = a, e.setTransform(this.scale, 0, 0, this.scale, -this._filterOffX, -this._filterOffY), e.translate(-this.x, -this.y), c.draw(e, !0), e.restore(), c.filters && c.filters.length && this._applyFilters(e)
            }
            b._invalid = !0
        }, b._applyFilters = function(a) {
            var b, c = this.target.filters,
                d = this._drawWidth,
                e = this._drawHeight,
                f = 0,
                g = c[f];
            do g.usesContext ? (b && (a.putImageData(b, 0, 0), b = null), g.applyFilter(a, 0, 0, d, e)) : (b || (b = a.getImageData(0, 0, d, e)), g._applyFilter(b)), g = null !== g._multiPass ? g._multiPass : c[++f]; while (g);
            b && a.putImageData(b, 0, 0)
        }, createjs.BitmapCache = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.Filter_constructor(), this._blurX = a, this._blurXTable = [], this._lastBlurX = null, this._blurY = b, this._blurYTable = [], this._lastBlurY = null, this._quality, this._lastQuality = null, this.FRAG_SHADER_TEMPLATE = "uniform float xWeight[{{blurX}}];uniform float yWeight[{{blurY}}];uniform vec2 textureOffset;void main(void) {vec4 color = vec4(0.0);float xAdj = ({{blurX}}.0-1.0)/2.0;float yAdj = ({{blurY}}.0-1.0)/2.0;vec2 sampleOffset;for(int i=0; i<{{blurX}}; i++) {for(int j=0; j<{{blurY}}; j++) {sampleOffset = vRenderCoord + (textureOffset * vec2(float(i)-xAdj, float(j)-yAdj));color += texture2D(uSampler, sampleOffset) * (xWeight[i] * yWeight[j]);}}gl_FragColor = color.rgba;}", (isNaN(c) || 1 > c) && (c = 1), this.setQuality(0 | c)
        }
        var b = createjs.extend(a, createjs.Filter);
        b.getBlurX = function() {
            return this._blurX
        }, b.getBlurY = function() {
            return this._blurY
        }, b.setBlurX = function(a) {
            (isNaN(a) || 0 > a) && (a = 0), this._blurX = a
        }, b.setBlurY = function(a) {
            (isNaN(a) || 0 > a) && (a = 0), this._blurY = a
        }, b.getQuality = function() {
            return this._quality
        }, b.setQuality = function(a) {
            (isNaN(a) || 0 > a) && (a = 0), this._quality = 0 | a
        }, b._getShader = function() {
            var a = this._lastBlurX !== this._blurX,
                b = this._lastBlurY !== this._blurY,
                c = this._lastQuality !== this._quality;
            return a || b || c ? ((a || c) && (this._blurXTable = this._getTable(this._blurX * this._quality)), (b || c) && (this._blurYTable = this._getTable(this._blurY * this._quality)), this._updateShader(), this._lastBlurX = this._blurX, this._lastBlurY = this._blurY, void(this._lastQuality = this._quality)) : this._compiledShader
        }, b._setShader = function() {
            this._compiledShader
        };
        try {
            Object.defineProperties(b, {
                blurX: {
                    get: b.getBlurX,
                    set: b.setBlurX
                },
                blurY: {
                    get: b.getBlurY,
                    set: b.setBlurY
                },
                quality: {
                    get: b.getQuality,
                    set: b.setQuality
                },
                _builtShader: {
                    get: b._getShader,
                    set: b._setShader
                }
            })
        } catch (c) {
            console.log(c)
        }
        b._getTable = function(a) {
            var b = 4.2;
            if (1 >= a) return [1];
            var c = [],
                d = Math.ceil(2 * a);
            d += d % 2 ? 0 : 1;
            for (var e = d / 2 | 0, f = -e; e >= f; f++) {
                var g = f / e * b;
                c.push(1 / Math.sqrt(2 * Math.PI) * Math.pow(Math.E, -(Math.pow(g, 2) / 4)))
            }
            var h = c.reduce(function(a, b) {
                return a + b
            });
            return c.map(function(a, b, c) {
                return a / h
            })
        }, b._updateShader = function() {
            if (void 0 !== this._blurX && void 0 !== this._blurY) {
                var a = this.FRAG_SHADER_TEMPLATE;
                a = a.replace(/\{\{blurX\}\}/g, this._blurXTable.length.toFixed(0)), a = a.replace(/\{\{blurY\}\}/g, this._blurYTable.length.toFixed(0)), this.FRAG_SHADER_BODY = a
            }
        }, b.shaderParamSetup = function(a, b, c) {
            a.uniform1fv(a.getUniformLocation(c, "xWeight"), this._blurXTable), a.uniform1fv(a.getUniformLocation(c, "yWeight"), this._blurYTable), a.uniform2f(a.getUniformLocation(c, "textureOffset"), 2 / (b._viewportWidth * this._quality), 2 / (b._viewportHeight * this._quality))
        }, a.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], a.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], b.getBounds = function(a) {
            var b = 0 | this.blurX,
                c = 0 | this.blurY;
            if (0 >= b && 0 >= c) return a;
            var d = Math.pow(this.quality, .2);
            return (a || new createjs.Rectangle).pad(c * d + 1, b * d + 1, c * d + 1, b * d + 1)
        }, b.clone = function() {
            return new a(this.blurX, this.blurY, this.quality)
        }, b.toString = function() {
            return "[BlurFilter]"
        }, b._applyFilter = function(b) {
            var c = this._blurX >> 1;
            if (isNaN(c) || 0 > c) return !1;
            var d = this._blurY >> 1;
            if (isNaN(d) || 0 > d) return !1;
            if (0 == c && 0 == d) return !1;
            var e = this.quality;
            (isNaN(e) || 1 > e) && (e = 1), e |= 0, e > 3 && (e = 3), 1 > e && (e = 1);
            var f = b.data,
                g = 0,
                h = 0,
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = 0,
                s = 0,
                t = 0,
                u = 0,
                v = c + c + 1 | 0,
                w = d + d + 1 | 0,
                x = 0 | b.width,
                y = 0 | b.height,
                z = x - 1 | 0,
                A = y - 1 | 0,
                B = c + 1 | 0,
                C = d + 1 | 0,
                D = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                E = D;
            for (i = 1; v > i; i++) E = E.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            E.n = D;
            var F = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                G = F;
            for (i = 1; w > i; i++) G = G.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            G.n = F;
            for (var H = null, I = 0 | a.MUL_TABLE[c], J = 0 | a.SHG_TABLE[c], K = 0 | a.MUL_TABLE[d], L = 0 | a.SHG_TABLE[d]; e-- > 0;) {
                m = l = 0;
                var M = I,
                    N = J;
                for (h = y; --h > -1;) {
                    for (n = B * (r = f[0 | l]), o = B * (s = f[l + 1 | 0]), p = B * (t = f[l + 2 | 0]), q = B * (u = f[l + 3 | 0]), E = D, i = B; --i > -1;) E.r = r, E.g = s, E.b = t, E.a = u, E = E.n;
                    for (i = 1; B > i; i++) j = l + ((i > z ? z : i) << 2) | 0, n += E.r = f[j], o += E.g = f[j + 1], p += E.b = f[j + 2], q += E.a = f[j + 3], E = E.n;
                    for (H = D, g = 0; x > g; g++) f[l++] = n * M >>> N, f[l++] = o * M >>> N, f[l++] = p * M >>> N, f[l++] = q * M >>> N, j = m + ((j = g + c + 1) < z ? j : z) << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n;
                    m += x
                }
                for (M = K, N = L, g = 0; x > g; g++) {
                    for (l = g << 2 | 0, n = C * (r = f[l]) | 0, o = C * (s = f[l + 1 | 0]) | 0, p = C * (t = f[l + 2 | 0]) | 0, q = C * (u = f[l + 3 | 0]) | 0, G = F, i = 0; C > i; i++) G.r = r, G.g = s, G.b = t, G.a = u, G = G.n;
                    for (k = x, i = 1; d >= i; i++) l = k + g << 2, n += G.r = f[l], o += G.g = f[l + 1], p += G.b = f[l + 2], q += G.a = f[l + 3], G = G.n, A > i && (k += x);
                    if (l = g, H = F, e > 0)
                        for (h = 0; y > h; h++) j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (f[j] = n * M >>> N, f[j + 1] = o * M >>> N, f[j + 2] = p * M >>> N) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x;
                    else
                        for (h = 0; y > h; h++) j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (u = 255 / u, f[j] = (n * M >>> N) * u, f[j + 1] = (o * M >>> N) * u, f[j + 2] = (p * M >>> N) * u) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x
                }
            }
            return !0
        }, createjs.BlurFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.Filter_constructor(), this.alphaMap = a, this._alphaMap = null, this._mapData = null, this._mapTexture = null, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * (alphaMap.r * ceil(alphaMap.a)));}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function(a, b, c) {
            this._mapTexture || (this._mapTexture = a.createTexture()), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this._mapTexture), b.setTextureParams(a), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, this.alphaMap), a.uniform1i(a.getUniformLocation(c, "uAlphaSampler"), 1)
        }, b.clone = function() {
            var b = new a(this.alphaMap);
            return b._alphaMap = this._alphaMap, b._mapData = this._mapData, b
        }, b.toString = function() {
            return "[AlphaMapFilter]"
        }, b._applyFilter = function(a) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            for (var b = a.data, c = this._mapData, d = 0, e = b.length; e > d; d += 4) b[d + 3] = c[d] || 0;
            return !0
        }, b._prepAlphaMap = function() {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var a, b = this._alphaMap = this.alphaMap,
                c = b;
            b instanceof HTMLCanvasElement ? a = c.getContext("2d") : (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), c.width = b.width, c.height = b.height, a = c.getContext("2d"), a.drawImage(b, 0, 0));
            try {
                var d = a.getImageData(0, 0, b.width, b.height)
            } catch (e) {
                return !1
            }
            return this._mapData = d.data, !0
        }, createjs.AlphaMapFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.Filter_constructor(), this.mask = a, this.usesContext = !0, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * alphaMap.a);}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function(a, b, c) {
            this._mapTexture || (this._mapTexture = a.createTexture()), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this._mapTexture), b.setTextureParams(a), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, this.mask), a.uniform1i(a.getUniformLocation(c, "uAlphaSampler"), 1)
        }, b.applyFilter = function(a, b, c, d, e, f, g, h) {
            return this.mask ? (f = f || a, null == g && (g = b), null == h && (h = c), f.save(), a != f ? !1 : (f.globalCompositeOperation = "destination-in", f.drawImage(this.mask, g, h), f.restore(), !0)) : !0
        }, b.clone = function() {
            return new a(this.mask)
        }, b.toString = function() {
            return "[AlphaMaskFilter]"
        }, createjs.AlphaMaskFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d, e, f, g, h) {
            this.Filter_constructor(), this.redMultiplier = null != a ? a : 1, this.greenMultiplier = null != b ? b : 1, this.blueMultiplier = null != c ? c : 1, this.alphaMultiplier = null != d ? d : 1, this.redOffset = e || 0, this.greenOffset = f || 0, this.blueOffset = g || 0, this.alphaOffset = h || 0, this.FRAG_SHADER_BODY = "uniform vec4 uColorMultiplier;uniform vec4 uColorOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = (color * uColorMultiplier) + uColorOffset;}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function(a, b, c) {
            a.uniform4f(a.getUniformLocation(c, "uColorMultiplier"), this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier), a.uniform4f(a.getUniformLocation(c, "uColorOffset"), this.redOffset / 255, this.greenOffset / 255, this.blueOffset / 255, this.alphaOffset / 255)
        }, b.toString = function() {
            return "[ColorFilter]"
        }, b.clone = function() {
            return new a(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
        }, b._applyFilter = function(a) {
            for (var b = a.data, c = b.length, d = 0; c > d; d += 4) b[d] = b[d] * this.redMultiplier + this.redOffset, b[d + 1] = b[d + 1] * this.greenMultiplier + this.greenOffset, b[d + 2] = b[d + 2] * this.blueMultiplier + this.blueOffset, b[d + 3] = b[d + 3] * this.alphaMultiplier + this.alphaOffset;
            return !0
        }, createjs.ColorFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d) {
            this.setColor(a, b, c, d)
        }
        var b = a.prototype;
        a.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], a.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], a.LENGTH = a.IDENTITY_MATRIX.length, b.setColor = function(a, b, c, d) {
            return this.reset().adjustColor(a, b, c, d)
        }, b.reset = function() {
            return this.copy(a.IDENTITY_MATRIX)
        }, b.adjustColor = function(a, b, c, d) {
            return this.adjustHue(d), this.adjustContrast(b), this.adjustBrightness(a), this.adjustSaturation(c)
        }, b.adjustBrightness = function(a) {
            return 0 == a || isNaN(a) ? this : (a = this._cleanValue(a, 255), this._multiplyMatrix([1, 0, 0, 0, a, 0, 1, 0, 0, a, 0, 0, 1, 0, a, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
        }, b.adjustContrast = function(b) {
            if (0 == b || isNaN(b)) return this;
            b = this._cleanValue(b, 100);
            var c;
            return 0 > b ? c = 127 + b / 100 * 127 : (c = b % 1, c = 0 == c ? a.DELTA_INDEX[b] : a.DELTA_INDEX[b << 0] * (1 - c) + a.DELTA_INDEX[(b << 0) + 1] * c, c = 127 * c + 127), this._multiplyMatrix([c / 127, 0, 0, 0, .5 * (127 - c), 0, c / 127, 0, 0, .5 * (127 - c), 0, 0, c / 127, 0, .5 * (127 - c), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.adjustSaturation = function(a) {
            if (0 == a || isNaN(a)) return this;
            a = this._cleanValue(a, 100);
            var b = 1 + (a > 0 ? 3 * a / 100 : a / 100),
                c = .3086,
                d = .6094,
                e = .082;
            return this._multiplyMatrix([c * (1 - b) + b, d * (1 - b), e * (1 - b), 0, 0, c * (1 - b), d * (1 - b) + b, e * (1 - b), 0, 0, c * (1 - b), d * (1 - b), e * (1 - b) + b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.adjustHue = function(a) {
            if (0 == a || isNaN(a)) return this;
            a = this._cleanValue(a, 180) / 180 * Math.PI;
            var b = Math.cos(a),
                c = Math.sin(a),
                d = .213,
                e = .715,
                f = .072;
            return this._multiplyMatrix([d + b * (1 - d) + c * -d, e + b * -e + c * -e, f + b * -f + c * (1 - f), 0, 0, d + b * -d + .143 * c, e + b * (1 - e) + .14 * c, f + b * -f + c * -.283, 0, 0, d + b * -d + c * -(1 - d), e + b * -e + c * e, f + b * (1 - f) + c * f, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.concat = function(b) {
            return b = this._fixMatrix(b), b.length != a.LENGTH ? this : (this._multiplyMatrix(b), this)
        }, b.clone = function() {
            return (new a).copy(this)
        }, b.toArray = function() {
            for (var b = [], c = 0, d = a.LENGTH; d > c; c++) b[c] = this[c];
            return b
        }, b.copy = function(b) {
            for (var c = a.LENGTH, d = 0; c > d; d++) this[d] = b[d];
            return this
        }, b.toString = function() {
            return "[ColorMatrix]"
        }, b._multiplyMatrix = function(a) {
            var b, c, d, e = [];
            for (b = 0; 5 > b; b++) {
                for (c = 0; 5 > c; c++) e[c] = this[c + 5 * b];
                for (c = 0; 5 > c; c++) {
                    var f = 0;
                    for (d = 0; 5 > d; d++) f += a[c + 5 * d] * e[d];
                    this[c + 5 * b] = f
                }
            }
        }, b._cleanValue = function(a, b) {
            return Math.min(b, Math.max(-b, a))
        }, b._fixMatrix = function(b) {
            return b instanceof a && (b = b.toArray()), b.length < a.LENGTH ? b = b.slice(0, b.length).concat(a.IDENTITY_MATRIX.slice(b.length, a.LENGTH)) : b.length > a.LENGTH && (b = b.slice(0, a.LENGTH)), b
        }, createjs.ColorMatrix = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.Filter_constructor(), this.matrix = a, this.FRAG_SHADER_BODY = "uniform mat4 uColorMatrix;uniform vec4 uColorMatrixOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);mat4 m = uColorMatrix;vec4 newColor = vec4(0,0,0,0);newColor.r = color.r*m[0][0] + color.g*m[0][1] + color.b*m[0][2] + color.a*m[0][3];newColor.g = color.r*m[1][0] + color.g*m[1][1] + color.b*m[1][2] + color.a*m[1][3];newColor.b = color.r*m[2][0] + color.g*m[2][1] + color.b*m[2][2] + color.a*m[2][3];newColor.a = color.r*m[3][0] + color.g*m[3][1] + color.b*m[3][2] + color.a*m[3][3];gl_FragColor = newColor + uColorMatrixOffset;}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function(a, b, c) {
            var d = this.matrix,
                e = new Float32Array([d[0], d[1], d[2], d[3], d[5], d[6], d[7], d[8], d[10], d[11], d[12], d[13], d[15], d[16], d[17], d[18]]);
            a.uniformMatrix4fv(a.getUniformLocation(c, "uColorMatrix"), !1, e), a.uniform4f(a.getUniformLocation(c, "uColorMatrixOffset"), d[4] / 255, d[9] / 255, d[14] / 255, d[19] / 255)
        }, b.toString = function() {
            return "[ColorMatrixFilter]"
        }, b.clone = function() {
            return new a(this.matrix)
        }, b._applyFilter = function(a) {
            for (var b, c, d, e, f = a.data, g = f.length, h = this.matrix, i = h[0], j = h[1], k = h[2], l = h[3], m = h[4], n = h[5], o = h[6], p = h[7], q = h[8], r = h[9], s = h[10], t = h[11], u = h[12], v = h[13], w = h[14], x = h[15], y = h[16], z = h[17], A = h[18], B = h[19], C = 0; g > C; C += 4) b = f[C], c = f[C + 1], d = f[C + 2], e = f[C + 3], f[C] = b * i + c * j + d * k + e * l + m, f[C + 1] = b * n + c * o + d * p + e * q + r, f[C + 2] = b * s + c * t + d * u + e * v + w, f[C + 3] = b * x + c * y + d * z + e * A + B;
            return !0
        }, createjs.ColorMatrixFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "Touch cannot be instantiated"
        }
        a.isSupported = function() {
            return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
        }, a.enable = function(b, c, d) {
            return b && b.canvas && a.isSupported() ? b.__touch ? !0 : (b.__touch = {
                pointers: {},
                multitouch: !c,
                preventDefault: !d,
                count: 0
            }, "ontouchstart" in window ? a._IOS_enable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_enable(b), !0) : !1
        }, a.disable = function(b) {
            b && ("ontouchstart" in window ? a._IOS_disable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_disable(b), delete b.__touch)
        }, a._IOS_enable = function(b) {
            var c = b.canvas,
                d = b.__touch.f = function(c) {
                    a._IOS_handleEvent(b, c)
                };
            c.addEventListener("touchstart", d, !1), c.addEventListener("touchmove", d, !1), c.addEventListener("touchend", d, !1), c.addEventListener("touchcancel", d, !1)
        }, a._IOS_disable = function(a) {
            var b = a.canvas;
            if (b) {
                var c = a.__touch.f;
                b.removeEventListener("touchstart", c, !1), b.removeEventListener("touchmove", c, !1), b.removeEventListener("touchend", c, !1), b.removeEventListener("touchcancel", c, !1)
            }
        }, a._IOS_handleEvent = function(a, b) {
            if (a) {
                a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                for (var c = b.changedTouches, d = b.type, e = 0, f = c.length; f > e; e++) {
                    var g = c[e],
                        h = g.identifier;
                    g.target == a.canvas && ("touchstart" == d ? this._handleStart(a, h, b, g.pageX, g.pageY) : "touchmove" == d ? this._handleMove(a, h, b, g.pageX, g.pageY) : ("touchend" == d || "touchcancel" == d) && this._handleEnd(a, h, b))
                }
            }
        }, a._IE_enable = function(b) {
            var c = b.canvas,
                d = b.__touch.f = function(c) {
                    a._IE_handleEvent(b, c)
                };
            void 0 === window.navigator.pointerEnabled ? (c.addEventListener("MSPointerDown", d, !1), window.addEventListener("MSPointerMove", d, !1), window.addEventListener("MSPointerUp", d, !1), window.addEventListener("MSPointerCancel", d, !1), b.__touch.preventDefault && (c.style.msTouchAction = "none")) : (c.addEventListener("pointerdown", d, !1), window.addEventListener("pointermove", d, !1), window.addEventListener("pointerup", d, !1), window.addEventListener("pointercancel", d, !1), b.__touch.preventDefault && (c.style.touchAction = "none")), b.__touch.activeIDs = {}
        }, a._IE_disable = function(a) {
            var b = a.__touch.f;
            void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", b, !1), window.removeEventListener("MSPointerUp", b, !1), window.removeEventListener("MSPointerCancel", b, !1), a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1)) : (window.removeEventListener("pointermove", b, !1), window.removeEventListener("pointerup", b, !1), window.removeEventListener("pointercancel", b, !1), a.canvas && a.canvas.removeEventListener("pointerdown", b, !1))
        }, a._IE_handleEvent = function(a, b) {
            if (a) {
                a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                var c = b.type,
                    d = b.pointerId,
                    e = a.__touch.activeIDs;
                if ("MSPointerDown" == c || "pointerdown" == c) {
                    if (b.srcElement != a.canvas) return;
                    e[d] = !0, this._handleStart(a, d, b, b.pageX, b.pageY)
                } else e[d] && ("MSPointerMove" == c || "pointermove" == c ? this._handleMove(a, d, b, b.pageX, b.pageY) : ("MSPointerUp" == c || "MSPointerCancel" == c || "pointerup" == c || "pointercancel" == c) && (delete e[d], this._handleEnd(a, d, b)))
            }
        }, a._handleStart = function(a, b, c, d, e) {
            var f = a.__touch;
            if (f.multitouch || !f.count) {
                var g = f.pointers;
                g[b] || (g[b] = !0, f.count++, a._handlePointerDown(b, c, d, e))
            }
        }, a._handleMove = function(a, b, c, d, e) {
            a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e)
        }, a._handleEnd = function(a, b, c) {
            var d = a.__touch,
                e = d.pointers;
            e[b] && (d.count--, a._handlePointerUp(b, c, !0), delete e[b])
        }, createjs.Touch = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = createjs.EaselJS = createjs.EaselJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:10 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = createjs.PreloadJS = createjs.PreloadJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:05 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.Event_constructor("error"), this.title = a, this.message = b, this.data = c
        }
        var b = createjs.extend(a, createjs.Event);
        b.clone = function() {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(a, "Event")
    }(), this.createjs = this.createjs || {},
    function(a) {
        "use strict";

        function b(a, b) {
            this.Event_constructor("progress"), this.loaded = a, this.total = null == b ? 1 : b, this.progress = 0 == b ? 0 : this.loaded / this.total;
        }
        var c = createjs.extend(b, createjs.Event);
        c.clone = function() {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(b, "Event")
    }(window),
    function() {
        function a(b, d) {
            function f(a) {
                if (f[a] !== q) return f[a];
                var b;
                if ("bug-string-char-index" == a) b = "a" != "a" [0];
                else if ("json" == a) b = f("json-stringify") && f("json-parse");
                else {
                    var c, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == a) {
                        var i = d.stringify,
                            k = "function" == typeof i && t;
                        if (k) {
                            (c = function() {
                                return 1
                            }).toJSON = c;
                            try {
                                k = "0" === i(0) && "0" === i(new g) && '""' == i(new h) && i(s) === q && i(q) === q && i() === q && "1" === i(c) && "[1]" == i([c]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({
                                    a: [c, !0, !1, null, "\x00\b\n\f\r	"]
                                }) == e && "1" === i(null, c) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
                            } catch (l) {
                                k = !1
                            }
                        }
                        b = k
                    }
                    if ("json-parse" == a) {
                        var m = d.parse;
                        if ("function" == typeof m) try {
                            if (0 === m("0") && !m(!1)) {
                                c = m(e);
                                var n = 5 == c.a.length && 1 === c.a[0];
                                if (n) {
                                    try {
                                        n = !m('"	"')
                                    } catch (l) {}
                                    if (n) try {
                                        n = 1 !== m("01")
                                    } catch (l) {}
                                    if (n) try {
                                        n = 1 !== m("1.")
                                    } catch (l) {}
                                }
                            }
                        } catch (l) {
                            n = !1
                        }
                        b = n
                    }
                }
                return f[a] = !!b
            }
            b || (b = e.Object()), d || (d = e.Object());
            var g = b.Number || e.Number,
                h = b.String || e.String,
                i = b.Object || e.Object,
                j = b.Date || e.Date,
                k = b.SyntaxError || e.SyntaxError,
                l = b.TypeError || e.TypeError,
                m = b.Math || e.Math,
                n = b.JSON || e.JSON;
            "object" == typeof n && n && (d.stringify = n.stringify, d.parse = n.parse);
            var o, p, q, r = i.prototype,
                s = r.toString,
                t = new j(-0xc782b5b800cec);
            try {
                t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
            } catch (u) {}
            if (!f("json")) {
                var v = "[object Function]",
                    w = "[object Date]",
                    x = "[object Number]",
                    y = "[object String]",
                    z = "[object Array]",
                    A = "[object Boolean]",
                    B = f("bug-string-char-index");
                if (!t) var C = m.floor,
                    D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    E = function(a, b) {
                        return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400)
                    };
                if ((o = r.hasOwnProperty) || (o = function(a) {
                        var b, c = {};
                        return (c.__proto__ = null, c.__proto__ = {
                            toString: 1
                        }, c).toString != s ? o = function(a) {
                            var b = this.__proto__,
                                c = a in (this.__proto__ = null, this);
                            return this.__proto__ = b, c
                        } : (b = c.constructor, o = function(a) {
                            var c = (this.constructor || b).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        }), c = null, o.call(this, a)
                    }), p = function(a, b) {
                        var d, e, f, g = 0;
                        (d = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, e = new d;
                        for (f in e) o.call(e, f) && g++;
                        return d = e = null, g ? p = 2 == g ? function(a, b) {
                            var c, d = {},
                                e = s.call(a) == v;
                            for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
                        } : function(a, b) {
                            var c, d, e = s.call(a) == v;
                            for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
                            (d || o.call(a, c = "constructor")) && b(c)
                        } : (e = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function(a, b) {
                            var d, f, g = s.call(a) == v,
                                h = !g && "function" != typeof a.constructor && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                            for (d in a) g && "prototype" == d || !h.call(a, d) || b(d);
                            for (f = e.length; d = e[--f]; h.call(a, d) && b(d));
                        }), p(a, b)
                    }, !f("json-stringify")) {
                    var F = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        G = "000000",
                        H = function(a, b) {
                            return (G + (b || 0)).slice(-a)
                        },
                        I = "\\u00",
                        J = function(a) {
                            for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a); d > c; c++) {
                                var g = a.charCodeAt(c);
                                switch (g) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        b += F[g];
                                        break;
                                    default:
                                        if (32 > g) {
                                            b += I + H(2, g.toString(16));
                                            break
                                        }
                                        b += e ? f[c] : a.charAt(c)
                                }
                            }
                            return b + '"'
                        },
                        K = function(a, b, c, d, e, f, g) {
                            var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
                            try {
                                h = b[a]
                            } catch (M) {}
                            if ("object" == typeof h && h)
                                if (i = s.call(h), i != w || o.call(h, "toJSON")) "function" == typeof h.toJSON && (i != x && i != y && i != z || o.call(h, "toJSON")) && (h = h.toJSON(a));
                                else if (h > -1 / 0 && 1 / 0 > h) {
                                if (E) {
                                    for (m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1; E(j + 1, 0) <= m; j++);
                                    for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++);
                                    m = 1 + m - E(j, k), n = (h % 864e5 + 864e5) % 864e5, r = C(n / 36e5) % 24, t = C(n / 6e4) % 60, u = C(n / 1e3) % 60, v = n % 1e3
                                } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();
                                h = (0 >= j || j >= 1e4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z"
                            } else h = null;
                            if (c && (h = c.call(b, a, h)), null === h) return "null";
                            if (i = s.call(h), i == A) return "" + h;
                            if (i == x) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
                            if (i == y) return J("" + h);
                            if ("object" == typeof h) {
                                for (G = g.length; G--;)
                                    if (g[G] === h) throw l();
                                if (g.push(h), B = [], I = f, f += e, i == z) {
                                    for (F = 0, G = h.length; G > F; F++) D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
                                    L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]"
                                } else p(d || h, function(a) {
                                    var b = K(a, h, c, d, e, f, g);
                                    b !== q && B.push(J(a) + ":" + (e ? " " : "") + b)
                                }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";
                                return g.pop(), L
                            }
                        };
                    d.stringify = function(a, b, d) {
                        var e, f, g, h;
                        if (c[typeof b] && b)
                            if ((h = s.call(b)) == v) f = b;
                            else if (h == z) {
                            g = {};
                            for (var i, j = 0, k = b.length; k > j; i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1));
                        }
                        if (d)
                            if ((h = s.call(d)) == x) {
                                if ((d -= d % 1) > 0)
                                    for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
                            } else h == y && (e = d.length <= 10 ? d : d.slice(0, 10));
                        return K("", (i = {}, i[""] = a, i), f, g, e, "", [])
                    }
                }
                if (!f("json-parse")) {
                    var L, M, N = h.fromCharCode,
                        O = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        P = function() {
                            throw L = M = null, k()
                        },
                        Q = function() {
                            for (var a, b, c, d, e, f = M, g = f.length; g > L;) switch (e = f.charCodeAt(L)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    L++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return a = B ? f.charAt(L) : f[L], L++, a;
                                case 34:
                                    for (a = "@", L++; g > L;)
                                        if (e = f.charCodeAt(L), 32 > e) P();
                                        else if (92 == e) switch (e = f.charCodeAt(++L)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            a += O[e], L++;
                                            break;
                                        case 117:
                                            for (b = ++L, c = L + 4; c > L; L++) e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                                            a += N("0x" + f.slice(b, L));
                                            break;
                                        default:
                                            P()
                                    } else {
                                        if (34 == e) break;
                                        for (e = f.charCodeAt(L), b = L; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++L);
                                        a += f.slice(b, L)
                                    }
                                    if (34 == f.charCodeAt(L)) return L++, a;
                                    P();
                                default:
                                    if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                                        for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1; g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e); L++);
                                        if (46 == f.charCodeAt(L)) {
                                            for (c = ++L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                            c == L && P(), L = c
                                        }
                                        if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                                            for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++, c = L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                            c == L && P(), L = c
                                        }
                                        return +f.slice(b, L)
                                    }
                                    if (d && P(), "true" == f.slice(L, L + 4)) return L += 4, !0;
                                    if ("false" == f.slice(L, L + 5)) return L += 5, !1;
                                    if ("null" == f.slice(L, L + 4)) return L += 4, null;
                                    P()
                            }
                            return "$"
                        },
                        R = function(a) {
                            var b, c;
                            if ("$" == a && P(), "string" == typeof a) {
                                if ("@" == (B ? a.charAt(0) : a[0])) return a.slice(1);
                                if ("[" == a) {
                                    for (b = []; a = Q(), "]" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
                                    return b
                                }
                                if ("{" == a) {
                                    for (b = {}; a = Q(), "}" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
                                    return b
                                }
                                P()
                            }
                            return a
                        },
                        S = function(a, b, c) {
                            var d = T(a, b, c);
                            d === q ? delete a[b] : a[b] = d
                        },
                        T = function(a, b, c) {
                            var d, e = a[b];
                            if ("object" == typeof e && e)
                                if (s.call(e) == z)
                                    for (d = e.length; d--;) S(e, d, c);
                                else p(e, function(a) {
                                    S(e, a, c)
                                });
                            return c.call(a, b, e)
                        };
                    d.parse = function(a, b) {
                        var c, d;
                        return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c
                    }
                }
            }
            return d.runInContext = a, d
        }
        var b = "function" == typeof define && define.amd,
            c = {
                "function": !0,
                object: !0
            },
            d = c[typeof exports] && exports && !exports.nodeType && exports,
            e = c[typeof window] && window || this,
            f = d && c[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) a(e, d);
        else {
            var g = e.JSON,
                h = e.JSON3,
                i = !1,
                j = a(e, e.JSON3 = {
                    noConflict: function() {
                        return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j
                    }
                });
            e.JSON = {
                parse: j.parse,
                stringify: j.stringify
            }
        }
        b && define(function() {
            return j
        })
    }.call(this),
    function() {
        var a = {};
        a.a = function() {
            return a.el("a")
        }, a.svg = function() {
            return a.el("svg")
        }, a.object = function() {
            return a.el("object")
        }, a.image = function() {
            return a.el("image")
        }, a.img = function() {
            return a.el("img")
        }, a.style = function() {
            return a.el("style")
        }, a.link = function() {
            return a.el("link")
        }, a.script = function() {
            return a.el("script")
        }, a.audio = function() {
            return a.el("audio")
        }, a.video = function() {
            return a.el("video")
        }, a.text = function(a) {
            return document.createTextNode(a)
        }, a.el = function(a) {
            return document.createElement(a)
        }, createjs.Elements = a
    }(),
    function() {
        var a = {};
        a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function(b) {
            var c = {
                absolute: !1,
                relative: !1,
                protocol: null,
                hostname: null,
                port: null,
                pathname: null,
                search: null,
                hash: null,
                host: null
            };
            if (null == b) return c;
            var d = createjs.Elements.a();
            d.href = b;
            for (var e in c) e in d && (c[e] = d[e]);
            var f = b.indexOf("?");
            f > -1 && (b = b.substr(0, f));
            var g;
            return a.ABSOLUTE_PATT.test(b) ? c.absolute = !0 : a.RELATIVE_PATT.test(b) && (c.relative = !0), (g = b.match(a.EXTENSION_PATT)) && (c.extension = g[1].toLowerCase()), c
        }, a.formatQueryString = function(a, b) {
            if (null == a) throw new Error("You must specify data.");
            var c = [];
            for (var d in a) c.push(d + "=" + escape(a[d]));
            return b && (c = c.concat(b)), c.join("&")
        }, a.buildURI = function(a, b) {
            if (null == b) return a;
            var c = [],
                d = a.indexOf("?");
            if (-1 != d) {
                var e = a.slice(d + 1);
                c = c.concat(e.split("&"))
            }
            return -1 != d ? a.slice(0, d) + "?" + this.formatQueryString(b, c) : a + "?" + this.formatQueryString(b, c)
        }, a.isCrossDomain = function(a) {
            var b = createjs.Elements.a();
            b.href = a.src;
            var c = createjs.Elements.a();
            c.href = location.href;
            var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
            return d
        }, a.isLocal = function(a) {
            var b = createjs.Elements.a();
            return b.href = a.src, "" == b.hostname && "file:" == b.protocol
        }, createjs.URLUtils = a
    }(),
    function() {
        var a = {
            container: null
        };
        a.appendToHead = function(b) {
            a.getHead().appendChild(b)
        }, a.appendToBody = function(b) {
            if (null == a.container) {
                a.container = document.createElement("div"), a.container.id = "preloadjs-container";
                var c = a.container.style;
                c.visibility = "hidden", c.position = "absolute", c.width = a.container.style.height = "10px", c.overflow = "hidden", c.transform = c.msTransform = c.webkitTransform = c.oTransform = "translate(-10px, -10px)", a.getBody().appendChild(a.container)
            }
            a.container.appendChild(b)
        }, a.getHead = function() {
            return document.head || document.getElementsByTagName("head")[0]
        }, a.getBody = function() {
            return document.body || document.getElementsByTagName("body")[0]
        }, a.removeChild = function(a) {
            a.parent && a.parent.removeChild(a)
        }, a.isImageTag = function(a) {
            return a instanceof HTMLImageElement
        }, a.isAudioTag = function(a) {
            return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1
        }, a.isVideoTag = function(a) {
            return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1
        }, createjs.DomUtils = a
    }(),
    function() {
        var a = {};
        a.parseXML = function(a) {
            var b = null;
            try {
                if (window.DOMParser) {
                    var c = new DOMParser;
                    b = c.parseFromString(a, "text/xml")
                }
            } catch (d) {}
            if (!b) try {
                b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a)
            } catch (d) {
                b = null
            }
            return b
        }, a.parseJSON = function(a) {
            if (null == a) return null;
            try {
                return JSON.parse(a)
            } catch (b) {
                throw b
            }
        }, createjs.DataUtils = a
    }(), this.createjs = this.createjs || {},
    function() {
        var a = {};
        a.BINARY = "binary", a.CSS = "css", a.FONT = "font", a.FONTCSS = "fontcss", a.IMAGE = "image", a.JAVASCRIPT = "javascript", a.JSON = "json", a.JSONP = "jsonp", a.MANIFEST = "manifest", a.SOUND = "sound", a.VIDEO = "video", a.SPRITESHEET = "spritesheet", a.SVG = "svg", a.TEXT = "text", a.XML = "xml", createjs.Types = a
    }(), this.createjs = this.createjs || {},
    function() {
        var a = {};
        a.POST = "POST", a.GET = "GET", createjs.Methods = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.Methods.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = c.LOAD_TIMEOUT_DEFAULT
        }
        var b = a.prototype = {},
            c = a;
        c.LOAD_TIMEOUT_DEFAULT = 8e3, c.create = function(b) {
            if ("string" == typeof b) {
                var d = new a;
                return d.src = b, d
            }
            if (b instanceof c) return b;
            if (b instanceof Object && b.src) return null == b.loadTimeout && (b.loadTimeout = c.LOAD_TIMEOUT_DEFAULT), b;
            throw new Error("Type not recognized.")
        }, b.set = function(a) {
            for (var b in a) this[b] = a[b];
            return this
        }, createjs.LoadItem = c
    }(),
    function() {
        var a = {};
        a.isBinary = function(a) {
            switch (a) {
                case createjs.Types.IMAGE:
                case createjs.Types.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, a.isText = function(a) {
            switch (a) {
                case createjs.Types.TEXT:
                case createjs.Types.JSON:
                case createjs.Types.MANIFEST:
                case createjs.Types.XML:
                case createjs.Types.CSS:
                case createjs.Types.SVG:
                case createjs.Types.JAVASCRIPT:
                case createjs.Types.SPRITESHEET:
                    return !0;
                default:
                    return !1
            }
        }, a.getTypeByExtension = function(a) {
            if (null == a) return createjs.Types.TEXT;
            switch (a.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.Types.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.Types.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.Types.VIDEO;
                case "json":
                    return createjs.Types.JSON;
                case "xml":
                    return createjs.Types.XML;
                case "css":
                    return createjs.Types.CSS;
                case "js":
                    return createjs.Types.JAVASCRIPT;
                case "svg":
                    return createjs.Types.SVG;
                default:
                    return createjs.Types.TEXT
            }
        }, createjs.RequestUtils = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, a ? this._item = createjs.LoadItem.create(a) : this._item = null, this._preferXHR = b, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var b = createjs.extend(a, createjs.EventDispatcher),
            c = a;
        try {
            Object.defineProperties(c, {
                POST: {
                    get: createjs.deprecate(function() {
                        return createjs.Methods.POST
                    }, "AbstractLoader.POST")
                },
                GET: {
                    get: createjs.deprecate(function() {
                        return createjs.Methods.GET
                    }, "AbstractLoader.GET")
                },
                BINARY: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.BINARY
                    }, "AbstractLoader.BINARY")
                },
                CSS: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.CSS
                    }, "AbstractLoader.CSS")
                },
                FONT: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.FONT
                    }, "AbstractLoader.FONT")
                },
                FONTCSS: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.FONTCSS
                    }, "AbstractLoader.FONTCSS")
                },
                IMAGE: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.IMAGE
                    }, "AbstractLoader.IMAGE")
                },
                JAVASCRIPT: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.JAVASCRIPT
                    }, "AbstractLoader.JAVASCRIPT")
                },
                JSON: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.JSON
                    }, "AbstractLoader.JSON")
                },
                JSONP: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.JSONP
                    }, "AbstractLoader.JSONP")
                },
                MANIFEST: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.MANIFEST
                    }, "AbstractLoader.MANIFEST")
                },
                SOUND: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.SOUND
                    }, "AbstractLoader.SOUND")
                },
                VIDEO: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.VIDEO
                    }, "AbstractLoader.VIDEO")
                },
                SPRITESHEET: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.SPRITESHEET
                    }, "AbstractLoader.SPRITESHEET")
                },
                SVG: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.SVG
                    }, "AbstractLoader.SVG")
                },
                TEXT: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.TEXT
                    }, "AbstractLoader.TEXT")
                },
                XML: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.XML
                    }, "AbstractLoader.XML")
                }
            })
        } catch (d) {}
        b.getItem = function() {
            return this._item
        }, b.getResult = function(a) {
            return a ? this._rawResult : this._result
        }, b.getTag = function() {
            return this._tag
        }, b.setTag = function(a) {
            this._tag = a
        }, b.load = function() {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var a = new createjs.Event("initialize");
            a.loader = this._request, this.dispatchEvent(a), this._request.load()
        }, b.cancel = function() {
            this.canceled = !0, this.destroy()
        }, b.destroy = function() {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, b.getLoadedItems = function() {
            return this._loadedItems
        }, b._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, b._createTag = function(a) {
            return null
        }, b._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, b._sendProgress = function(a) {
            if (!this._isCanceled()) {
                var b = null;
                "number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(b)
            }
        }, b._sendComplete = function() {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var a = new createjs.Event("complete");
                a.rawResult = this._rawResult, null != this._result && (a.result = this._result), this.dispatchEvent(a)
            }
        }, b._sendError = function(a) {
            !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a))
        }, b._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, b.resultFormatter = null, b.handleEvent = function(a) {
            switch (a.type) {
                case "complete":
                    this._rawResult = a.target._response;
                    var b = this.resultFormatter && this.resultFormatter(this);
                    b instanceof Function ? b.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = b || this._rawResult, this._sendComplete());
                    break;
                case "progress":
                    this._sendProgress(a);
                    break;
                case "error":
                    this._sendError(a);
                    break;
                case "loadstart":
                    this._sendLoadStart();
                    break;
                case "abort":
                case "timeout":
                    this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + a.type.toUpperCase() + "_ERROR"))
            }
        }, b._resultFormatSuccess = function(a) {
            this._result = a, this._sendComplete()
        }, b._resultFormatFailed = function(a) {
            this._sendError(a)
        }, b.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.AbstractLoader_constructor(a, b, c), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
        }
        var b = createjs.extend(a, createjs.AbstractLoader);
        b.load = function() {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, b._createTag = function() {}, b._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, b._updateXHR = function(a) {
            a.loader.setResponseType && a.loader.setResponseType("blob")
        }, b._formatResult = function(a) {
            if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
                var b = window.URL || window.webkitURL,
                    c = a.getResult(!0);
                a.getTag().src = b.createObjectURL(c)
            }
            return a.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this._item = a
            },
            b = createjs.extend(a, createjs.EventDispatcher);
        b.load = function() {}, b.destroy = function() {}, b.cancel = function() {}, createjs.AbstractRequest = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1
        }
        var b = createjs.extend(a, createjs.AbstractRequest);
        b.load = function() {
            this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
            var a = new createjs.Event("initialize");
            a.loader = this._tag, this.dispatchEvent(a), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (createjs.DomUtils.appendToBody(this._tag), this._addedToDOM = !0)
        }, b.destroy = function() {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, b._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var a = this._tag;
            ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete()
        }, b._handleError = function() {
            this._clean(), this.dispatchEvent("error")
        }, b._handleTagComplete = function() {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this.dispatchEvent("complete")
        }, b._handleTimeout = function() {
            this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
        }, b._clean = function() {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
        }, b._handleStalled = function() {}, createjs.TagRequest = createjs.promote(a, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var b = createjs.extend(a, createjs.TagRequest);
        b.load = function() {
            var a = createjs.proxy(this._handleStalled, this);
            this._stalledCallback = a;
            var b = createjs.proxy(this._handleProgress, this);
            this._handleProgress = b, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", b), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, b._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var a = this._tag;
            ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete()
        }, b._handleStalled = function() {}, b._handleProgress = function(a) {
            if (a && !(a.loaded > 0 && 0 == a.total)) {
                var b = new createjs.ProgressEvent(a.loaded, a.total);
                this.dispatchEvent(b)
            }
        }, b._clean = function() {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(a, "TagRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(a)
        }
        var b = createjs.extend(a, createjs.AbstractRequest);
        a.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b.getResult = function(a) {
            return a && this._rawResponse ? this._rawResponse : this._response
        }, b.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, b.load = function() {
            if (null == this._request) return void this._handleError();
            null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (a) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a))
            }
        }, b.setResponseType = function(a) {
            "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a
        }, b.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, b.getResponseHeader = function(a) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
        }, b._handleProgress = function(a) {
            if (a && !(a.loaded > 0 && 0 == a.total)) {
                var b = new createjs.ProgressEvent(a.loaded, a.total);
                this.dispatchEvent(b)
            }
        }, b._handleLoadStart = function(a) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, b._handleAbort = function(a) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a))
        }, b._handleError = function(a) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message))
        }, b._handleReadyStateChange = function(a) {
            4 == this._request.readyState && this._handleLoad()
        }, b._handleLoad = function(a) {
            if (!this.loaded) {
                this.loaded = !0;
                var b = this._checkError();
                if (b) return void this._handleError(b);
                if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
                    this._response = new Blob([this._response])
                } catch (c) {
                    if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === c.name && window.BlobBuilder) {
                        var d = new BlobBuilder;
                        d.append(this._response), this._response = d.getBlob()
                    }
                }
                this._clean(), this.dispatchEvent(new createjs.Event("complete"))
            }
        }, b._handleTimeout = function(a) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a))
        }, b._checkError = function() {
            var a = parseInt(this._request.status);
            return a >= 400 && 599 >= a ? new Error(a) : 0 == a && /^https?:/.test(location.protocol) ? new Error(0) : null
        }, b._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (a) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (a) {}
            return null
        }, b._createXHR = function(a) {
            var b = createjs.URLUtils.isCrossDomain(a),
                c = {},
                d = null;
            if (window.XMLHttpRequest) d = new XMLHttpRequest, b && void 0 === d.withCredentials && window.XDomainRequest && (d = new XDomainRequest);
            else {
                for (var e = 0, f = s.ACTIVEX_VERSIONS.length; f > e; e++) {
                    var g = s.ACTIVEX_VERSIONS[e];
                    try {
                        d = new ActiveXObject(g);
                        break
                    } catch (h) {}
                }
                if (null == d) return !1
            }
            null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType), this._xhrLevel = "string" == typeof d.responseType ? 2 : 1;
            var i = null;
            if (i = a.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(a.src, a.values) : a.src, d.open(a.method || createjs.Methods.GET, i, !0), b && d instanceof XMLHttpRequest && 1 == this._xhrLevel && (c.Origin = location.origin), a.values && a.method == createjs.Methods.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers)
                for (var j in a.headers) c[j] = a.headers[j];
            for (j in c) d.setRequestHeader(j, c[j]);
            return d instanceof XMLHttpRequest && void 0 !== a.withCredentials && (d.withCredentials = a.withCredentials), this._request = d, !0
        }, b._clean = function() {
            clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
        }, b.toString = function() {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(a, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c) {
            this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.FontLoader, createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(a, b, c)
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        try {
            Object.defineProperties(c, {
                POST: {
                    get: createjs.deprecate(function() {
                        return createjs.Methods.POST
                    }, "AbstractLoader.POST")
                },
                GET: {
                    get: createjs.deprecate(function() {
                        return createjs.Methods.GET
                    }, "AbstractLoader.GET")
                },
                BINARY: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.BINARY
                    }, "AbstractLoader.BINARY")
                },
                CSS: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.CSS
                    }, "AbstractLoader.CSS")
                },
                FONT: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.FONT
                    }, "AbstractLoader.FONT")
                },
                FONTCSS: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.FONTCSS
                    }, "AbstractLoader.FONTCSS")
                },
                IMAGE: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.IMAGE
                    }, "AbstractLoader.IMAGE")
                },
                JAVASCRIPT: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.JAVASCRIPT
                    }, "AbstractLoader.JAVASCRIPT")
                },
                JSON: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.JSON
                    }, "AbstractLoader.JSON")
                },
                JSONP: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.JSONP
                    }, "AbstractLoader.JSONP")
                },
                MANIFEST: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.MANIFEST
                    }, "AbstractLoader.MANIFEST")
                },
                SOUND: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.SOUND
                    }, "AbstractLoader.SOUND")
                },
                VIDEO: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.VIDEO
                    }, "AbstractLoader.VIDEO")
                },
                SPRITESHEET: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.SPRITESHEET
                    }, "AbstractLoader.SPRITESHEET")
                },
                SVG: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.SVG
                    }, "AbstractLoader.SVG")
                },
                TEXT: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.TEXT
                    }, "AbstractLoader.TEXT")
                },
                XML: {
                    get: createjs.deprecate(function() {
                        return createjs.Types.XML
                    }, "AbstractLoader.XML")
                }
            })
        } catch (d) {}
        b.init = function(a, b, c) {
            this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(a), this._paused = !1, this._basePath = b, this._crossOrigin = c, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
        }, b.registerLoader = function(a) {
            if (!a || !a.canLoadItem) throw new Error("loader is of an incorrect type.");
            if (-1 != this._availableLoaders.indexOf(a)) throw new Error("loader already exists.");
            this._availableLoaders.unshift(a)
        }, b.unregisterLoader = function(a) {
            var b = this._availableLoaders.indexOf(a); - 1 != b && b < this._defaultLoaderLength - 1 && this._availableLoaders.splice(b, 1)
        }, b.setPreferXHR = function(a) {
            return this.preferXHR = 0 != a && null != window.XMLHttpRequest, this.preferXHR
        }, b.removeAll = function() {
            this.remove()
        }, b.remove = function(a) {
            var b = null;
            if (a && !Array.isArray(a)) b = [a];
            else if (a) b = a;
            else if (arguments.length > 0) return;
            var c = !1;
            if (b) {
                for (; b.length;) {
                    var d = b.pop(),
                        e = this.getResult(d);
                    for (f = this._loadQueue.length - 1; f >= 0; f--)
                        if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueue.splice(f, 1)[0].cancel();
                            break
                        }
                    for (f = this._loadQueueBackup.length - 1; f >= 0; f--)
                        if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueueBackup.splice(f, 1)[0].cancel();
                            break
                        }
                    if (e) this._disposeItem(this.getItem(d));
                    else
                        for (var f = this._currentLoads.length - 1; f >= 0; f--) {
                            var g = this._currentLoads[f].getItem();
                            if (g.id == d || g.src == d) {
                                this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
                                break
                            }
                        }
                }
                c && this._loadNext()
            } else {
                this.close();
                for (var h in this._loadItemsById) this._disposeItem(this._loadItemsById[h]);
                this.init(this.preferXHR, this._basePath)
            }
        }, b.reset = function() {
            this.close();
            for (var a in this._loadItemsById) this._disposeItem(this._loadItemsById[a]);
            for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) b.push(this._loadQueueBackup[c].getItem());
            this.loadManifest(b, !1)
        }, b.installPlugin = function(a) {
            if (null != a && null != a.getPreloadHandlers) {
                this._plugins.push(a);
                var b = a.getPreloadHandlers();
                if (b.scope = a, null != b.types)
                    for (var c = 0, d = b.types.length; d > c; c++) this._typeCallbacks[b.types[c]] = b;
                if (null != b.extensions)
                    for (c = 0, d = b.extensions.length; d > c; c++) this._extensionCallbacks[b.extensions[c]] = b
            }
        }, b.setMaxConnections = function(a) {
            this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, b.loadFile = function(a, b, c) {
            if (null == a) {
                var d = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                return void this._sendError(d)
            }
            this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.loadManifest = function(a, b, d) {
            var e = null,
                f = null;
            if (Array.isArray(a)) {
                if (0 == a.length) {
                    var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                    return void this._sendError(g)
                }
                e = a
            } else if ("string" == typeof a) e = [{
                src: a,
                type: c.MANIFEST
            }];
            else {
                if ("object" != typeof a) {
                    var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                    return void this._sendError(g)
                }
                if (void 0 !== a.src) {
                    if (null == a.type) a.type = c.MANIFEST;
                    else if (a.type != c.MANIFEST) {
                        var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                        this._sendError(g)
                    }
                    e = [a]
                } else void 0 !== a.manifest && (e = a.manifest, f = a.path)
            }
            for (var h = 0, i = e.length; i > h; h++) this._addItem(e[h], f, d);
            b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.load = function() {
            this.setPaused(!1)
        }, b.getItem = function(a) {
            return this._loadItemsById[a] || this._loadItemsBySrc[a]
        }, b.getResult = function(a, b) {
            var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
            if (null == c) return null;
            var d = c.id;
            return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d]
        }, b.getItems = function(a) {
            var b = [];
            for (var c in this._loadItemsById) {
                var d = this._loadItemsById[c],
                    e = this.getResult(c);
                (a !== !0 || null != e) && b.push({
                    item: d,
                    result: e,
                    rawResult: this.getResult(c, !0)
                })
            }
            return b
        }, b.setPaused = function(a) {
            this._paused = a, this._paused || this._loadNext()
        }, b.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
        }, b._addItem = function(a, b, c) {
            var d = this._createLoadItem(a, b, c);
            if (null != d) {
                var e = this._createLoader(d);
                null != e && ("plugins" in e && (e.plugins = this._plugins), d._loader = e, this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && d.type == createjs.Types.JAVASCRIPT || d.maintainOrder === !0) && (this._scriptOrder.push(d), this._loadedScripts.push(null)))
            }
        }, b._createLoadItem = function(a, b, c) {
            var d = createjs.LoadItem.create(a);
            if (null == d) return null;
            var e = "",
                f = c || this._basePath;
            if (d.src instanceof Object) {
                if (!d.type) return null;
                if (b) {
                    e = b;
                    var g = createjs.URLUtils.parseURI(b);
                    null == f || g.absolute || g.relative || (e = f + e)
                } else null != f && (e = f)
            } else {
                var h = createjs.URLUtils.parseURI(d.src);
                h.extension && (d.ext = h.extension), null == d.type && (d.type = createjs.RequestUtils.getTypeByExtension(d.ext));
                var i = d.src;
                if (!h.absolute && !h.relative)
                    if (b) {
                        e = b;
                        var g = createjs.URLUtils.parseURI(b);
                        i = b + i, null == f || g.absolute || g.relative || (e = f + e)
                    } else null != f && (e = f);
                d.src = e + d.src
            }
            d.path = e, (void 0 === d.id || null === d.id || "" === d.id) && (d.id = i);
            var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
            if (j) {
                var k = j.callback.call(j.scope, d, this);
                if (k === !1) return null;
                k === !0 || null != k && (d._loader = k), h = createjs.URLUtils.parseURI(d.src), null != h.extension && (d.ext = h.extension)
            }
            return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, null == d.crossOrigin && (d.crossOrigin = this._crossOrigin), d
        }, b._createLoader = function(a) {
            if (null != a._loader) return a._loader;
            for (var b = this.preferXHR, c = 0; c < this._availableLoaders.length; c++) {
                var d = this._availableLoaders[c];
                if (d && d.canLoadItem(a)) return new d(a, b)
            }
            return null
        }, b._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
                    var b = this._loadQueue[a];
                    this._canStartLoad(b) && (this._loadQueue.splice(a, 1), a--, this._loadItem(b))
                }
            }
        }, b._loadItem = function(a) {
            a.on("fileload", this._handleFileLoad, this), a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleError, this), a.on("fileerror", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load()
        }, b._handleFileLoad = function(a) {
            a.target = null, this.dispatchEvent(a)
        }, b._handleFileError = function(a) {
            var b = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.item);
            this._sendError(b)
        }, b._handleError = function(a) {
            var b = a.target;
            this._numItemsLoaded++, this._finishOrderedItem(b, !0), this._updateProgress();
            var c = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, b.getItem());
            this._sendError(c), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(b), this._cleanLoadItem(b), this._loadNext())
        }, b._handleFileComplete = function(a) {
            var b = a.target,
                c = b.getItem(),
                d = b.getResult();
            this._loadedResults[c.id] = d;
            var e = b.getResult(!0);
            null != e && e !== d && (this._loadedRawResults[c.id] = e), this._saveLoadedItems(b), this._removeLoadItem(b), this._finishOrderedItem(b) || this._processFinishedLoad(c, b), this._cleanLoadItem(b)
        }, b._saveLoadedItems = function(a) {
            var b = a.getLoadedItems();
            if (null !== b)
                for (var c = 0; c < b.length; c++) {
                    var d = b[c].item;
                    this._loadItemsBySrc[d.src] = d, this._loadItemsById[d.id] = d, this._loadedResults[d.id] = b[c].result, this._loadedRawResults[d.id] = b[c].rawResult
                }
        }, b._finishOrderedItem = function(a, b) {
            var c = a.getItem();
            if (this.maintainScriptOrder && c.type == createjs.Types.JAVASCRIPT || c.maintainOrder) {
                a instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                var d = createjs.indexOf(this._scriptOrder, c);
                return -1 == d ? !1 : (this._loadedScripts[d] = b === !0 ? !0 : c, this._checkScriptLoadOrder(), !0)
            }
            return !1
        }, b._checkScriptLoadOrder = function() {
            for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
                var c = this._loadedScripts[b];
                if (null === c) break;
                if (c !== !0) {
                    var d = this._loadedResults[c.id];
                    c.type == createjs.Types.JAVASCRIPT && createjs.DomUtils.appendToHead(d);
                    var e = c._loader;
                    this._processFinishedLoad(c, e), this._loadedScripts[b] = !0
                }
            }
        }, b._processFinishedLoad = function(a, b) {
            if (this._numItemsLoaded++, !this.maintainScriptOrder && a.type == createjs.Types.JAVASCRIPT) {
                var c = b.getTag();
                createjs.DomUtils.appendToHead(c)
            }
            this._updateProgress(), this._sendFileComplete(a, b), this._loadNext()
        }, b._canStartLoad = function(a) {
            if (!this.maintainScriptOrder || a.preferXHR) return !0;
            var b = a.getItem();
            if (b.type != createjs.Types.JAVASCRIPT) return !0;
            if (this._currentlyLoadingScript) return !1;
            for (var c = this._scriptOrder.indexOf(b), d = 0; c > d;) {
                var e = this._loadedScripts[d];
                if (null == e) return !1;
                d++
            }
            return this._currentlyLoadingScript = !0, !0
        }, b._removeLoadItem = function(a) {
            for (var b = this._currentLoads.length, c = 0; b > c; c++)
                if (this._currentLoads[c] == a) {
                    this._currentLoads.splice(c, 1);
                    break
                }
        }, b._cleanLoadItem = function(a) {
            var b = a.getItem();
            b && delete b._loader
        }, b._handleProgress = function(a) {
            var b = a.target;
            this._sendFileProgress(b.getItem(), b.progress), this._updateProgress()
        }, b._updateProgress = function() {
            var a = this._numItemsLoaded / this._numItems,
                b = this._numItems - this._numItemsLoaded;
            if (b > 0) {
                for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) c += this._currentLoads[d].progress;
                a += c / b * (b / this._numItems)
            }
            this._lastProgress != a && (this._sendProgress(a), this._lastProgress = a)
        }, b._disposeItem = function(a) {
            delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src]
        }, b._sendFileProgress = function(a, b) {
            if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
                var c = new createjs.Event("fileprogress");
                c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c)
            }
        }, b._sendFileComplete = function(a, b) {
            if (!this._isCanceled() && !this._paused) {
                var c = new createjs.Event("fileload");
                c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c)
            }
        }, b._sendFileStart = function(a) {
            var b = new createjs.Event("filestart");
            b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b)
        }, b.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.TEXT)
        }
        var b = (createjs.extend(a, createjs.AbstractLoader), a);
        b.canLoadItem = function(a) {
            return a.type == createjs.Types.TEXT
        }, createjs.TextLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.BINARY), this.on("initialize", this._updateXHR, this)
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.BINARY
        }, b._updateXHR = function(a) {
            a.loader.setResponseType("arraybuffer")
        }, createjs.BinaryLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", b ? this._tag = createjs.Elements.style() : this._tag = createjs.Elements.link(), this._tag.rel = "stylesheet", this._tag.type = "text/css"
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.CSS
        }, b._formatResult = function(a) {
            if (this._preferXHR) {
                var b = a.getTag();
                if (b.styleSheet) b.styleSheet.cssText = a.getResult(!0);
                else {
                    var c = createjs.Elements.text(a.getResult(!0));
                    b.appendChild(c)
                }
            } else b = this._tag;
            return createjs.DomUtils.appendToHead(b), b
        }, createjs.CSSLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, a.type), this._faces = {}, this._watched = [], this._count = 0, this._watchInterval = null, this._loadTimeout = null, this._injectCSS = void 0 === a.injectCSS ? !0 : a.injectCSS, this.dispatchEvent("initialize")
        }
        var b = createjs.extend(a, createjs.AbstractLoader);
        a.canLoadItem = function(a) {
            return a.type == createjs.Types.FONT || a.type == createjs.Types.FONTCSS
        }, a.sampleText = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ", a._ctx = document.createElement("canvas").getContext("2d"), a._referenceFonts = ["serif", "monospace"], a.WEIGHT_REGEX = /[- ._]*(thin|normal|book|regular|medium|black|heavy|[1-9]00|(?:extra|ultra|semi|demi)?[- ._]*(?:light|bold))[- ._]*/gi, a.STYLE_REGEX = /[- ._]*(italic|oblique)[- ._]*/gi, a.FONT_FORMAT = {
            woff2: "woff2",
            woff: "woff",
            ttf: "truetype",
            otf: "truetype"
        }, a.FONT_WEIGHT = {
            thin: 100,
            extralight: 200,
            ultralight: 200,
            light: 300,
            semilight: 300,
            demilight: 300,
            book: "normal",
            regular: "normal",
            semibold: 600,
            demibold: 600,
            extrabold: 800,
            ultrabold: 800,
            black: 900,
            heavy: 900
        }, a.WATCH_DURATION = 10, b.load = function() {
            if (this.type == createjs.Types.FONTCSS) {
                var a = this._watchCSS();
                if (!a) return void this.AbstractLoader_load()
            } else if (this._item.src instanceof Array) this._watchFontArray();
            else {
                var b = this._defFromSrc(this._item.src);
                this._watchFont(b), this._injectStyleTag(this._cssFromDef(b))
            }
            this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this.dispatchEvent("loadstart")
        }, b._handleTimeout = function() {
            this._stopWatching(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT"))
        }, b._createRequest = function() {
            return this._request
        }, b.handleEvent = function(a) {
            switch (a.type) {
                case "complete":
                    this._rawResult = a.target._response, this._result = !0, this._parseCSS(this._rawResult);
                    break;
                case "error":
                    this._stopWatching(), this.AbstractLoader_handleEvent(a)
            }
        }, b._watchCSS = function() {
            var a = this._item.src;
            return a instanceof HTMLStyleElement && (this._injectCSS && !a.parentNode && (document.head || document.getElementsByTagName("head")[0]).appendChild(a), this._injectCSS = !1, a = "\n" + a.textContent), -1 !== a.search(/\n|\r|@font-face/i) ? (this._parseCSS(a), !0) : (this._request = new createjs.XHRRequest(this._item), !1)
        }, b._parseCSS = function(a) {
            for (var b = /@font-face\s*\{([^}]+)}/g;;) {
                var c = b.exec(a);
                if (!c) break;
                this._watchFont(this._parseFontFace(c[1]))
            }
            this._injectStyleTag(a)
        }, b._watchFontArray = function() {
            for (var a, b = this._item.src, c = "", d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                a = "string" == typeof e ? this._defFromSrc(e) : this._defFromObj(e), this._watchFont(a), c += this._cssFromDef(a) + "\n"
            }
            this._injectStyleTag(c)
        }, b._injectStyleTag = function(a) {
            if (this._injectCSS) {
                var b = document.head || document.getElementsByTagName("head")[0],
                    c = document.createElement("style");
                c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), b.appendChild(c)
            }
        }, b._parseFontFace = function(a) {
            var b = this._getCSSValue(a, "font-family"),
                c = this._getCSSValue(a, "src");
            return b && c ? this._defFromObj({
                family: b,
                src: c,
                style: this._getCSSValue(a, "font-style"),
                weight: this._getCSSValue(a, "font-weight")
            }) : null
        }, b._watchFont = function(a) {
            a && !this._faces[a.id] && (this._faces[a.id] = a, this._watched.push(a), this._count++, this._calculateReferenceSizes(a), this._startWatching())
        }, b._startWatching = function() {
            null == this._watchInterval && (this._watchInterval = setInterval(createjs.proxy(this._watch, this), a.WATCH_DURATION))
        }, b._stopWatching = function() {
            clearInterval(this._watchInterval), clearTimeout(this._loadTimeout), this._watchInterval = null
        }, b._watch = function() {
            for (var b = this._watched, c = a._referenceFonts, d = b.length, e = d - 1; e >= 0; e--)
                for (var f = b[e], g = f.refs, h = g.length - 1; h >= 0; h--) {
                    var i = this._getTextWidth(f.family + "," + c[h], f.weight, f.style);
                    if (i != g[h]) {
                        var j = new createjs.Event("fileload");
                        f.type = "font-family", j.item = f, this.dispatchEvent(j), b.splice(e, 1);
                        break
                    }
                }
            if (d !== b.length) {
                var j = new createjs.ProgressEvent(this._count - b.length, this._count);
                this.dispatchEvent(j)
            }
            0 === d && (this._stopWatching(), this._sendComplete())
        }, b._calculateReferenceSizes = function(b) {
            for (var c = a._referenceFonts, d = b.refs = [], e = 0; e < c.length; e++) d[e] = this._getTextWidth(c[e], b.weight, b.style)
        }, b._defFromSrc = function(b) {
            var c, d = /[- ._]+/g,
                e = b,
                f = null;
            c = e.search(/[?#]/), -1 !== c && (e = e.substr(0, c)), c = e.lastIndexOf("."), -1 !== c && (f = e.substr(c + 1), e = e.substr(0, c)), c = e.lastIndexOf("/"), -1 !== c && (e = e.substr(c + 1));
            var g = e,
                h = g.match(a.WEIGHT_REGEX);
            h && (h = h[0], g = g.replace(h, ""), h = h.replace(d, "").toLowerCase());
            var i = e.match(a.STYLE_REGEX);
            i && (g = g.replace(i[0], ""), i = "italic"), g = g.replace(d, "");
            var j = "local('" + e.replace(d, " ") + "'), url('" + b + "')",
                k = a.FONT_FORMAT[f];
            return k && (j += " format('" + k + "')"), this._defFromObj({
                family: g,
                weight: a.FONT_WEIGHT[h] || h,
                style: i,
                src: j
            })
        }, b._defFromObj = function(a) {
            var b = {
                family: a.family,
                src: a.src,
                style: a.style || "normal",
                weight: a.weight || "normal"
            };
            return b.id = b.family + ";" + b.style + ";" + b.weight, b
        }, b._cssFromDef = function(a) {
            return "@font-face {\n	font-family: '" + a.family + "';\n	font-style: " + a.style + ";\n	font-weight: " + a.weight + ";\n	src: " + a.src + ";\n}"
        }, b._getTextWidth = function(b, c, d) {
            var e = a._ctx;
            return e.font = d + " " + c + " 72px " + b, e.measureText(a.sampleText).width
        }, b._getCSSValue = function(a, b) {
            var c = new RegExp(b + ":s*([^;}]+?)s*[;}]"),
                d = c.exec(a);
            return d && d[1] ? d[1] : null
        }, createjs.FontLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.DomUtils.isImageTag(a) ? this._tag = a : createjs.DomUtils.isImageTag(a.src) ? this._tag = a.src : createjs.DomUtils.isImageTag(a.tag) && (this._tag = a.tag), null != this._tag ? this._preferXHR = !1 : this._tag = createjs.Elements.img(), this.on("initialize", this._updateXHR, this)
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.IMAGE
        }, b.load = function() {
            if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();
            var a = this._item.crossOrigin;
            1 == a && (a = "Anonymous"), null == a || createjs.URLUtils.isLocal(this._item) || (this._tag.crossOrigin = a), this.AbstractLoader_load()
        }, b._updateXHR = function(a) {
            a.loader.mimeType = "text/plain; charset=x-user-defined-binary", a.loader.setResponseType && a.loader.setResponseType("blob")
        }, b._formatResult = function(a) {
            return this._formatImage
        }, b._formatImage = function(a, b) {
            var c = this._tag,
                d = window.URL || window.webkitURL;
            if (this._preferXHR)
                if (d) {
                    var e = d.createObjectURL(this.getResult(!0));
                    c.src = e, c.addEventListener("load", this._cleanUpURL, !1), c.addEventListener("error", this._cleanUpURL, !1)
                } else c.src = this._item.src;
            else;
            c.complete ? a(c) : (c.onload = createjs.proxy(function() {
                a(this._tag), c.onload = c.onerror = null
            }, this), c.onerror = createjs.proxy(function(a) {
                b(new createjs.ErrorEvent("IMAGE_FORMAT", null, a)), c.onload = c.onerror = null
            }, this))
        }, b._cleanUpURL = function(a) {
            var b = window.URL || window.webkitURL;
            b.revokeObjectURL(a.target.src)
        }, createjs.ImageLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(createjs.Elements.script())
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.JAVASCRIPT
        }, b._formatResult = function(a) {
            var b = a.getTag();
            return this._preferXHR && (b.text = a.getResult(!0)), b
        }, createjs.JavaScriptLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.JSON), this.resultFormatter = this._formatResult
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.JSON
        }, b._formatResult = function(a) {
            var b = null;
            try {
                b = createjs.DataUtils.parseJSON(a.getResult(!0))
            } catch (c) {
                var d = new createjs.ErrorEvent("JSON_FORMAT", null, c);
                return this._sendError(d), c
            }
            return b
        }, createjs.JSONLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !1, createjs.Types.JSONP), this.setTag(createjs.Elements.script()), this.getTag().type = "text/javascript"
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.JSONP
        }, b.cancel = function() {
            this.AbstractLoader_cancel(), this._dispose()
        }, b.load = function() {
            if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
            if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
            window[this._item.callback] = createjs.proxy(this._handleLoad, this), createjs.DomUtils.appendToBody(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
        }, b._handleLoad = function(a) {
            this._result = this._rawResult = a, this._sendComplete(), this._dispose()
        }, b._handleTimeout = function() {
            this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
        }, b._dispose = function() {
            createjs.DomUtils.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
        }, createjs.JSONPLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.MANIFEST), this.plugins = null, this._manifestQueue = null
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.MANIFEST_PROGRESS = .25, c.canLoadItem = function(a) {
            return a.type == createjs.Types.MANIFEST
        }, b.load = function() {
            this.AbstractLoader_load()
        }, b._createRequest = function() {
            var a = this._item.callback;
            null != a ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, b.handleEvent = function(a) {
            switch (a.type) {
                case "complete":
                    return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.MANIFEST_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return a.loaded *= c.MANIFEST_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
            }
            this.AbstractLoader_handleEvent(a)
        }, b.destroy = function() {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, b._loadManifest = function(a) {
            if (a && a.manifest) {
                var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR);
                b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("complete", this._handleManifestComplete, this, !0), b.on("error", this._handleManifestError, this, !0);
                for (var c = 0, d = this.plugins.length; d > c; c++) b.installPlugin(this.plugins[c]);
                b.loadManifest(a)
            } else this._sendComplete()
        }, b._handleManifestFileLoad = function(a) {
            a.target = null, this.dispatchEvent(a)
        }, b._handleManifestComplete = function(a) {
            this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, b._handleManifestProgress = function(a) {
            this.progress = a.progress * (1 - c.MANIFEST_PROGRESS) + c.MANIFEST_PROGRESS, this._sendProgress(this.progress)
        }, b._handleManifestError = function(a) {
            var b = new createjs.Event("fileerror");
            b.item = a.data, this.dispatchEvent(b)
        }, createjs.ManifestLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractMediaLoader_constructor(a, b, createjs.Types.SOUND), createjs.DomUtils.isAudioTag(a) ? this._tag = a : createjs.DomUtils.isAudioTag(a.src) ? this._tag = a : createjs.DomUtils.isAudioTag(a.tag) && (this._tag = createjs.DomUtils.isAudioTag(a) ? a : a.src), null != this._tag && (this._preferXHR = !1)
        }
        var b = createjs.extend(a, createjs.AbstractMediaLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.SOUND
        }, b._createTag = function(a) {
            var b = createjs.Elements.audio();
            return b.autoplay = !1, b.preload = "none", b.src = a, b
        }, createjs.SoundLoader = createjs.promote(a, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractMediaLoader_constructor(a, b, createjs.Types.VIDEO), createjs.DomUtils.isVideoTag(a) || createjs.DomUtils.isVideoTag(a.src) ? (this.setTag(createjs.DomUtils.isVideoTag(a) ? a : a.src), this._preferXHR = !1) : this.setTag(this._createTag())
        }
        var b = createjs.extend(a, createjs.AbstractMediaLoader),
            c = a;
        b._createTag = function() {
            return createjs.Elements.video()
        }, c.canLoadItem = function(a) {
            return a.type == createjs.Types.VIDEO
        }, createjs.VideoLoader = createjs.promote(a, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.SPRITESHEET), this._manifestQueue = null
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.SPRITESHEET_PROGRESS = .25, c.canLoadItem = function(a) {
            return a.type == createjs.Types.SPRITESHEET
        }, b.destroy = function() {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, b._createRequest = function() {
            var a = this._item.callback;
            null != a ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, b.handleEvent = function(a) {
            switch (a.type) {
                case "complete":
                    return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return a.loaded *= c.SPRITESHEET_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
            }
            this.AbstractLoader_handleEvent(a)
        }, b._loadManifest = function(a) {
            if (a && a.images) {
                var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
                b.on("complete", this._handleManifestComplete, this, !0), b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("error", this._handleManifestError, this, !0), b.loadManifest(a.images)
            }
        }, b._handleManifestFileLoad = function(a) {
            var b = a.result;
            if (null != b) {
                var c = this.getResult().images,
                    d = c.indexOf(a.item.src);
                c[d] = b
            }
        }, b._handleManifestComplete = function(a) {
            this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, b._handleManifestProgress = function(a) {
            this.progress = a.progress * (1 - c.SPRITESHEET_PROGRESS) + c.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
        }, b._handleManifestError = function(a) {
            var b = new createjs.Event("fileerror");
            b.item = a.data, this.dispatchEvent(b)
        }, createjs.SpriteSheetLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", b ? this.setTag(createjs.Elements.svg()) : (this.setTag(createjs.Elements.object()), this.getTag().type = "image/svg+xml")
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.SVG
        }, b._formatResult = function(a) {
            var b = createjs.DataUtils.parseXML(a.getResult(!0)),
                c = a.getTag();
            if (!this._preferXHR && document.body.contains(c) && document.body.removeChild(c), null != b.documentElement) {
                var d = b.documentElement;
                return document.importNode && (d = document.importNode(d, !0)), c.appendChild(d), c
            }
            return b
        }, createjs.SVGLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.XML), this.resultFormatter = this._formatResult
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function(a) {
            return a.type == createjs.Types.XML
        }, b._formatResult = function(a) {
            return createjs.DataUtils.parseXML(a.getResult(!0))
        }, createjs.XMLLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        var a = createjs.SoundJS = createjs.SoundJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:05 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "BrowserDetect cannot be instantiated"
        }
        var b = a.agent = window.navigator.userAgent;
        a.isWindowPhone = b.indexOf("IEMobile") > -1 || b.indexOf("Windows Phone") > -1, a.isFirefox = b.indexOf("Firefox") > -1, a.isOpera = null != window.opera, a.isChrome = b.indexOf("Chrome") > -1, a.isIOS = (b.indexOf("iPod") > -1 || b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1) && !a.isWindowPhone, a.isAndroid = b.indexOf("Android") > -1 && !a.isWindowPhone, a.isBlackberry = b.indexOf("Blackberry") > -1, createjs.BrowserDetect = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
                this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
            },
            b = a.prototype = {},
            c = a;
        c.create = function(a) {
            if ("string" == typeof a) return console && (console.warn || console.log)("Deprecated behaviour. Sound.play takes a configuration object instead of individual arguments. See docs for info."), (new createjs.PlayPropsConfig).set({
                interrupt: a
            });
            if (null == a || a instanceof c || a instanceof Object) return (new createjs.PlayPropsConfig).set(a);
            if (null == a) throw new Error("PlayProps configuration not recognized.")
        }, b.set = function(a) {
            if (null != a)
                for (var b in a) this[b] = a[b];
            return this
        }, b.toString = function() {
            return "[PlayPropsConfig]"
        }, createjs.PlayPropsConfig = c
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "Sound cannot be instantiated"
        }

        function b(a, b) {
            this.init(a, b)
        }
        var c = a;
        c.INTERRUPT_ANY = "any", c.INTERRUPT_EARLY = "early", c.INTERRUPT_LATE = "late", c.INTERRUPT_NONE = "none", c.PLAY_INITED = "playInited", c.PLAY_SUCCEEDED = "playSucceeded", c.PLAY_INTERRUPTED = "playInterrupted", c.PLAY_FINISHED = "playFinished", c.PLAY_FAILED = "playFailed", c.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], c.EXTENSION_MAP = {
            m4a: "mp4"
        }, c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.defaultInterruptBehavior = c.INTERRUPT_NONE, c.alternateExtensions = [], c.activePlugin = null, c._masterVolume = 1, c._getMasterVolume = function() {
            return this._masterVolume
        }, c.getVolume = createjs.deprecate(c._getMasterVolume, "Sound.getVolume"), c._setMasterVolume = function(a) {
            if (null != Number(a) && (a = Math.max(0, Math.min(1, a)), c._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a)))
                for (var b = this._instances, d = 0, e = b.length; e > d; d++) b[d].setMasterVolume(a)
        }, c.setVolume = createjs.deprecate(c._setMasterVolume, "Sound.setVolume"), c._masterMute = !1, c._getMute = function() {
            return this._masterMute
        }, c.getMute = createjs.deprecate(c._getMute, "Sound.getMute"), c._setMute = function(a) {
            if (null != a && (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a)))
                for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterMute(a)
        }, c.setMute = createjs.deprecate(c._setMute, "Sound.setMute"), c._getCapabilities = function() {
            return null == c.activePlugin ? null : c.activePlugin._capabilities
        }, c.getCapabilities = createjs.deprecate(c._getCapabilities, "Sound.getCapabilities"), Object.defineProperties(c, {
            volume: {
                get: c._getMasterVolume,
                set: c._setMasterVolume
            },
            muted: {
                get: c._getMute,
                set: c._setMute
            },
            capabilities: {
                get: c._getCapabilities
            }
        }), c._pluginsRegistered = !1, c._lastID = 0, c._instances = [], c._idHash = {}, c._preloadHash = {}, c._defaultPlayPropsHash = {}, c.addEventListener = null, c.removeEventListener = null, c.removeAllEventListeners = null, c.dispatchEvent = null, c.hasEventListener = null, c._listeners = null, createjs.EventDispatcher.initialize(c), c.getPreloadHandlers = function() {
            return {
                callback: createjs.proxy(c.initLoad, c),
                types: ["sound"],
                extensions: c.SUPPORTED_EXTENSIONS
            }
        }, c._handleLoadComplete = function(a) {
            var b = a.target.getItem().src;
            if (c._preloadHash[b])
                for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
                    var f = c._preloadHash[b][d];
                    if (c._preloadHash[b][d] = !0, c.hasEventListener("fileload")) {
                        var a = new createjs.Event("fileload");
                        a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, c.dispatchEvent(a)
                    }
                }
        }, c._handleLoadError = function(a) {
            var b = a.target.getItem().src;
            if (c._preloadHash[b])
                for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
                    var f = c._preloadHash[b][d];
                    if (c._preloadHash[b][d] = !1, c.hasEventListener("fileerror")) {
                        var a = new createjs.Event("fileerror");
                        a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, c.dispatchEvent(a)
                    }
                }
        }, c._registerPlugin = function(a) {
            return a.isSupported() ? (c.activePlugin = new a, !0) : !1
        }, c.registerPlugins = function(a) {
            c._pluginsRegistered = !0;
            for (var b = 0, d = a.length; d > b; b++)
                if (c._registerPlugin(a[b])) return !0;
            return !1
        }, c.initializeDefaultPlugins = function() {
            return null != c.activePlugin ? !0 : c._pluginsRegistered ? !1 : c.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
        }, c.isReady = function() {
            return null != c.activePlugin
        }, c.initLoad = function(a) {
            return "video" == a.type ? !0 : c._registerSound(a)
        }, c._registerSound = function(a) {
            if (!c.initializeDefaultPlugins()) return !1;
            var d;
            if (a.src instanceof Object ? (d = c._parseSrc(a.src),
                    d.src = a.path + d.src) : d = c._parsePath(a.src), null == d) return !1;
            a.src = d.src, a.type = "sound";
            var e = a.data,
                f = null;
            if (null != e && (isNaN(e.channels) ? isNaN(e) || (f = parseInt(e)) : f = parseInt(e.channels), e.audioSprite))
                for (var g, h = e.audioSprite.length; h--;) g = e.audioSprite[h], c._idHash[g.id] = {
                    src: a.src,
                    startTime: parseInt(g.startTime),
                    duration: parseInt(g.duration)
                }, g.defaultPlayProps && (c._defaultPlayPropsHash[g.id] = createjs.PlayPropsConfig.create(g.defaultPlayProps));
            null != a.id && (c._idHash[a.id] = {
                src: a.src
            });
            var i = c.activePlugin.register(a);
            return b.create(a.src, f), null != e && isNaN(e) ? a.data.channels = f || b.maxPerChannel() : a.data = f || b.maxPerChannel(), i.type && (a.type = i.type), a.defaultPlayProps && (c._defaultPlayPropsHash[a.src] = createjs.PlayPropsConfig.create(a.defaultPlayProps)), i
        }, c.registerSound = function(a, b, d, e, f) {
            var g = {
                src: a,
                id: b,
                data: d,
                defaultPlayProps: f
            };
            a instanceof Object && a.src && (e = b, g = a), g = createjs.LoadItem.create(g), g.path = e, null == e || g.src instanceof Object || (g.src = e + g.src);
            var h = c._registerSound(g);
            if (!h) return !1;
            if (c._preloadHash[g.src] || (c._preloadHash[g.src] = []), c._preloadHash[g.src].push(g), 1 == c._preloadHash[g.src].length) h.on("complete", this._handleLoadComplete, this), h.on("error", this._handleLoadError, this), c.activePlugin.preload(h);
            else if (1 == c._preloadHash[g.src][0]) return !0;
            return g
        }, c.registerSounds = function(a, b) {
            var c = [];
            a.path && (b ? b += a.path : b = a.path, a = a.manifest);
            for (var d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, b, a[d].defaultPlayProps);
            return c
        }, c.removeSound = function(a, d) {
            if (null == c.activePlugin) return !1;
            a instanceof Object && a.src && (a = a.src);
            var e;
            if (a instanceof Object ? e = c._parseSrc(a) : (a = c._getSrcById(a).src, e = c._parsePath(a)), null == e) return !1;
            a = e.src, null != d && (a = d + a);
            for (var f in c._idHash) c._idHash[f].src == a && delete c._idHash[f];
            return b.removeSrc(a), delete c._preloadHash[a], c.activePlugin.removeSound(a), !0
        }, c.removeSounds = function(a, b) {
            var c = [];
            a.path && (b ? b += a.path : b = a.path, a = a.manifest);
            for (var d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.removeSound(a[d].src, b);
            return c
        }, c.removeAllSounds = function() {
            c._idHash = {}, c._preloadHash = {}, b.removeAll(), c.activePlugin && c.activePlugin.removeAllSounds()
        }, c.loadComplete = function(a) {
            if (!c.isReady()) return !1;
            var b = c._parsePath(a);
            return a = b ? c._getSrcById(b.src).src : c._getSrcById(a).src, void 0 == c._preloadHash[a] ? !1 : 1 == c._preloadHash[a][0]
        }, c._parsePath = function(a) {
            "string" != typeof a && (a = a.toString());
            var b = a.match(c.FILE_PATTERN);
            if (null == b) return !1;
            for (var d = b[4], e = b[5], f = c.capabilities, g = 0; !f[e];)
                if (e = c.alternateExtensions[g++], g > c.alternateExtensions.length) return null;
            a = a.replace("." + b[5], "." + e);
            var h = {
                name: d,
                src: a,
                extension: e
            };
            return h
        }, c._parseSrc = function(a) {
            var b = {
                    name: void 0,
                    src: void 0,
                    extension: void 0
                },
                d = c.capabilities;
            for (var e in a)
                if (a.hasOwnProperty(e) && d[e]) {
                    b.src = a[e], b.extension = e;
                    break
                }
            if (!b.src) return !1;
            var f = b.src.lastIndexOf("/");
            return -1 != f ? b.name = b.src.slice(f + 1) : b.name = b.src, b
        }, c.play = function(a, b) {
            var d = createjs.PlayPropsConfig.create(b),
                e = c.createInstance(a, d.startTime, d.duration),
                f = c._playInstance(e, d);
            return f || e._playFailed(), e
        }, c.createInstance = function(a, d, e) {
            if (!c.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(a, d, e);
            var f = c._defaultPlayPropsHash[a];
            a = c._getSrcById(a);
            var g = c._parsePath(a.src),
                h = null;
            return null != g && null != g.src ? (b.create(g.src), null == d && (d = a.startTime), h = c.activePlugin.create(g.src, d, e || a.duration), f = f || c._defaultPlayPropsHash[g.src], f && h.applyPlayProps(f)) : h = new createjs.DefaultSoundInstance(a, d, e), h.uniqueId = c._lastID++, h
        }, c.stop = function() {
            for (var a = this._instances, b = a.length; b--;) a[b].stop()
        }, c.setDefaultPlayProps = function(a, b) {
            a = c._getSrcById(a), c._defaultPlayPropsHash[c._parsePath(a.src).src] = createjs.PlayPropsConfig.create(b)
        }, c.getDefaultPlayProps = function(a) {
            return a = c._getSrcById(a), c._defaultPlayPropsHash[c._parsePath(a.src).src]
        }, c._playInstance = function(a, b) {
            var d = c._defaultPlayPropsHash[a.src] || {};
            if (null == b.interrupt && (b.interrupt = d.interrupt || c.defaultInterruptBehavior), null == b.delay && (b.delay = d.delay || 0), null == b.offset && (b.offset = a.position), null == b.loop && (b.loop = a.loop), null == b.volume && (b.volume = a.volume), null == b.pan && (b.pan = a.pan), 0 == b.delay) {
                var e = c._beginPlaying(a, b);
                if (!e) return !1
            } else {
                var f = setTimeout(function() {
                    c._beginPlaying(a, b)
                }, b.delay);
                a.delayTimeoutId = f
            }
            return this._instances.push(a), !0
        }, c._beginPlaying = function(a, c) {
            if (!b.add(a, c.interrupt)) return !1;
            var d = a._beginPlaying(c);
            if (!d) {
                var e = createjs.indexOf(this._instances, a);
                return e > -1 && this._instances.splice(e, 1), !1
            }
            return !0
        }, c._getSrcById = function(a) {
            return c._idHash[a] || {
                src: a
            }
        }, c._playFinished = function(a) {
            b.remove(a);
            var c = createjs.indexOf(this._instances, a);
            c > -1 && this._instances.splice(c, 1)
        }, createjs.Sound = a, b.channels = {}, b.create = function(a, c) {
            var d = b.get(a);
            return null == d ? (b.channels[a] = new b(a, c), !0) : !1
        }, b.removeSrc = function(a) {
            var c = b.get(a);
            return null == c ? !1 : (c._removeAll(), delete b.channels[a], !0)
        }, b.removeAll = function() {
            for (var a in b.channels) b.channels[a]._removeAll();
            b.channels = {}
        }, b.add = function(a, c) {
            var d = b.get(a.src);
            return null == d ? !1 : d._add(a, c)
        }, b.remove = function(a) {
            var c = b.get(a.src);
            return null == c ? !1 : (c._remove(a), !0)
        }, b.maxPerChannel = function() {
            return d.maxDefault
        }, b.get = function(a) {
            return b.channels[a]
        };
        var d = b.prototype;
        d.constructor = b, d.src = null, d.max = null, d.maxDefault = 100, d.length = 0, d.init = function(a, b) {
            this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
        }, d._get = function(a) {
            return this._instances[a]
        }, d._add = function(a, b) {
            return this._getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1
        }, d._remove = function(a) {
            var b = createjs.indexOf(this._instances, a);
            return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0)
        }, d._removeAll = function() {
            for (var a = this.length - 1; a >= 0; a--) this._instances[a].stop()
        }, d._getSlot = function(b, c) {
            var d, e;
            if (b != a.INTERRUPT_NONE && (e = this._get(0), null == e)) return !0;
            for (var f = 0, g = this.max; g > f; f++) {
                if (d = this._get(f), null == d) return !0;
                if (d.playState == a.PLAY_FINISHED || d.playState == a.PLAY_INTERRUPTED || d.playState == a.PLAY_FAILED) {
                    e = d;
                    break
                }
                b != a.INTERRUPT_NONE && (b == a.INTERRUPT_EARLY && d.position < e.position || b == a.INTERRUPT_LATE && d.position > e.position) && (e = d)
            }
            return null != e ? (e._interrupt(), this._remove(e), !0) : !1
        }, d.toString = function() {
            return "[Sound SoundChannel]"
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c, d) {
                this.EventDispatcher_constructor(), this.src = a, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
                    get: this._getVolume,
                    set: this._setVolume
                }), this.getVolume = createjs.deprecate(this._getVolume, "AbstractSoundInstance.getVolume"), this.setVolume = createjs.deprecate(this._setVolume, "AbstractSoundInstance.setVolume"), this._pan = 0, Object.defineProperty(this, "pan", {
                    get: this._getPan,
                    set: this._setPan
                }), this.getPan = createjs.deprecate(this._getPan, "AbstractSoundInstance.getPan"), this.setPan = createjs.deprecate(this._setPan, "AbstractSoundInstance.setPan"), this._startTime = Math.max(0, b || 0), Object.defineProperty(this, "startTime", {
                    get: this._getStartTime,
                    set: this._setStartTime
                }), this.getStartTime = createjs.deprecate(this._getStartTime, "AbstractSoundInstance.getStartTime"), this.setStartTime = createjs.deprecate(this._setStartTime, "AbstractSoundInstance.setStartTime"), this._duration = Math.max(0, c || 0), Object.defineProperty(this, "duration", {
                    get: this._getDuration,
                    set: this._setDuration
                }), this.getDuration = createjs.deprecate(this._getDuration, "AbstractSoundInstance.getDuration"), this.setDuration = createjs.deprecate(this._setDuration, "AbstractSoundInstance.setDuration"), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
                    get: this._getPlaybackResource,
                    set: this._setPlaybackResource
                }), d !== !1 && d !== !0 && this._setPlaybackResource(d), this.getPlaybackResource = createjs.deprecate(this._getPlaybackResource, "AbstractSoundInstance.getPlaybackResource"), this.setPlaybackResource = createjs.deprecate(this._setPlaybackResource, "AbstractSoundInstance.setPlaybackResource"), this._position = 0, Object.defineProperty(this, "position", {
                    get: this._getPosition,
                    set: this._setPosition
                }), this.getPosition = createjs.deprecate(this._getPosition, "AbstractSoundInstance.getPosition"), this.setPosition = createjs.deprecate(this._setPosition, "AbstractSoundInstance.setPosition"), this._loop = 0, Object.defineProperty(this, "loop", {
                    get: this._getLoop,
                    set: this._setLoop
                }), this.getLoop = createjs.deprecate(this._getLoop, "AbstractSoundInstance.getLoop"), this.setLoop = createjs.deprecate(this._setLoop, "AbstractSoundInstance.setLoop"), this._muted = !1, Object.defineProperty(this, "muted", {
                    get: this._getMuted,
                    set: this._setMuted
                }), this.getMuted = createjs.deprecate(this._getMuted, "AbstractSoundInstance.getMuted"), this.setMuted = createjs.deprecate(this._setMuted, "AbstractSoundInstance.setMuted"), this._paused = !1, Object.defineProperty(this, "paused", {
                    get: this._getPaused,
                    set: this._setPaused
                }), this.getPaused = createjs.deprecate(this._getPaused, "AbstractSoundInstance.getPaused"), this.setPaused = createjs.deprecate(this._setPaused, "AbstractSoundInstance.setPaused")
            },
            b = createjs.extend(a, createjs.EventDispatcher);
        b.play = function(a) {
            var b = createjs.PlayPropsConfig.create(a);
            return this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(b), void(this._paused && this._setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, b), this)
        }, b.stop = function() {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
        }, b.destroy = function() {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
        }, b.applyPlayProps = function(a) {
            return null != a.offset && this._setPosition(a.offset), null != a.loop && this._setLoop(a.loop), null != a.volume && this._setVolume(a.volume), null != a.pan && this._setPan(a.pan), null != a.startTime && (this._setStartTime(a.startTime), this._setDuration(a.duration)), this
        }, b.toString = function() {
            return "[AbstractSoundInstance]"
        }, b._getPaused = function() {
            return this._paused
        }, b._setPaused = function(a) {
            return a !== !0 && a !== !1 || this._paused == a || 1 == a && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = a, a ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
        }, b._setVolume = function(a) {
            return a == this._volume ? this : (this._volume = Math.max(0, Math.min(1, a)), this._muted || this._updateVolume(), this)
        }, b._getVolume = function() {
            return this._volume
        }, b._setMuted = function(a) {
            return a === !0 || a === !1 ? (this._muted = a, this._updateVolume(), this) : void 0
        }, b._getMuted = function() {
            return this._muted
        }, b._setPan = function(a) {
            return a == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, a)), this._updatePan(), this)
        }, b._getPan = function() {
            return this._pan
        }, b._getPosition = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
        }, b._setPosition = function(a) {
            return this._position = Math.max(0, a), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
        }, b._getStartTime = function() {
            return this._startTime
        }, b._setStartTime = function(a) {
            return a == this._startTime ? this : (this._startTime = Math.max(0, a || 0), this._updateStartTime(), this)
        }, b._getDuration = function() {
            return this._duration
        }, b._setDuration = function(a) {
            return a == this._duration ? this : (this._duration = Math.max(0, a || 0), this._updateDuration(), this)
        }, b._setPlaybackResource = function(a) {
            return this._playbackResource = a, 0 == this._duration && this._playbackResource && this._setDurationFromSource(), this
        }, b._getPlaybackResource = function() {
            return this._playbackResource
        }, b._getLoop = function() {
            return this._loop
        }, b._setLoop = function(a) {
            null != this._playbackResource && (0 != this._loop && 0 == a ? this._removeLooping(a) : 0 == this._loop && 0 != a && this._addLooping(a)), this._loop = a
        }, b._sendEvent = function(a) {
            var b = new createjs.Event(a);
            this.dispatchEvent(b)
        }, b._cleanUp = function() {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
        }, b._interrupt = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
        }, b._beginPlaying = function(a) {
            return this._setPosition(a.offset), this._setLoop(a.loop), this._setVolume(a.volume), this._setPan(a.pan), null != a.startTime && (this._setStartTime(a.startTime), this._setDuration(a.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
        }, b._playFailed = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
        }, b._handleSoundComplete = function(a) {
            return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
        }, b._handleSoundReady = function() {}, b._updateVolume = function() {}, b._updatePan = function() {}, b._updateStartTime = function() {}, b._updateDuration = function() {}, b._setDurationFromSource = function() {}, b._calculateCurrentPosition = function() {}, b._updatePosition = function() {}, b._removeLooping = function(a) {}, b._addLooping = function(a) {}, b._pause = function() {}, b._resume = function() {}, b._handleStop = function() {}, b._handleCleanUp = function() {}, b._handleLoop = function() {}, createjs.AbstractSoundInstance = createjs.promote(a, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
                this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
            },
            b = a.prototype;
        a._capabilities = null, a.isSupported = function() {
            return !0
        }, b.register = function(a) {
            var b = this._loaders[a.src];
            return b && !b.canceled ? this._loaders[a.src] : (this._audioSources[a.src] = !0, this._soundInstances[a.src] = [], b = new this._loaderClass(a), b.on("complete", this._handlePreloadComplete, this), this._loaders[a.src] = b, b)
        }, b.preload = function(a) {
            a.on("error", this._handlePreloadError, this), a.load()
        }, b.isPreloadStarted = function(a) {
            return null != this._audioSources[a]
        }, b.isPreloadComplete = function(a) {
            return !(null == this._audioSources[a] || 1 == this._audioSources[a])
        }, b.removeSound = function(a) {
            if (this._soundInstances[a]) {
                for (var b = this._soundInstances[a].length; b--;) {
                    var c = this._soundInstances[a][b];
                    c.destroy()
                }
                delete this._soundInstances[a], delete this._audioSources[a], this._loaders[a] && this._loaders[a].destroy(), delete this._loaders[a]
            }
        }, b.removeAllSounds = function() {
            for (var a in this._audioSources) this.removeSound(a)
        }, b.create = function(a, b, c) {
            this.isPreloadStarted(a) || this.preload(this.register(a));
            var d = new this._soundInstanceClass(a, b, c, this._audioSources[a]);
            return this._soundInstances[a] && this._soundInstances[a].push(d), d.setMasterVolume && d.setMasterVolume(createjs.Sound.volume), d.setMasterMute && d.setMasterMute(createjs.Sound.muted), d
        }, b.setVolume = function(a) {
            return this._volume = a, this._updateVolume(), !0
        }, b.getVolume = function() {
            return this._volume
        }, b.setMute = function(a) {
            return this._updateVolume(), !0
        }, b.toString = function() {
            return "[AbstractPlugin]"
        }, b._handlePreloadComplete = function(a) {
            var b = a.target.getItem().src;
            this._audioSources[b] = a.result;
            for (var c = 0, d = this._soundInstances[b].length; d > c; c++) {
                var e = this._soundInstances[b][c];
                e.playbackResource = this._audioSources[b], this._soundInstances[b] = null
            }
        }, b._handlePreloadError = function(a) {}, b._updateVolume = function() {}, createjs.AbstractPlugin = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.SOUND)
        }
        var b = createjs.extend(a, createjs.AbstractLoader);
        a.context = null, b.toString = function() {
            return "[WebAudioLoader]"
        }, b._createRequest = function() {
            this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
        }, b._sendComplete = function(b) {
            a.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
        }, b._handleAudioDecoded = function(a) {
            this._result = a, this.AbstractLoader__sendComplete()
        }, createjs.WebAudioLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, d, e) {
            this.AbstractSoundInstance_constructor(a, b, d, e), this.gainNode = c.context.createGain(), this.panNode = c.context.createPanner(), this.panNode.panningModel = c._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }
        var b = createjs.extend(a, createjs.AbstractSoundInstance),
            c = a;
        c.context = null, c._scratchBuffer = null, c.destinationNode = null, c._panningModel = "equalpower", b.destroy = function() {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
        }, b.toString = function() {
            return "[WebAudioSoundInstance]"
        }, b._updatePan = function() {
            this.panNode.setPosition(this._pan, 0, -.5)
        }, b._removeLooping = function(a) {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
        }, b._addLooping = function(a) {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, b._setDurationFromSource = function() {
            this._duration = 1e3 * this.playbackResource.duration
        }, b._handleCleanUp = function() {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
        }, b._cleanUpAudioNode = function(a) {
            if (a) {
                if (a.stop(0), a.disconnect(0), createjs.BrowserDetect.isIOS) try {
                    a.buffer = c._scratchBuffer
                } catch (b) {}
                a = null
            }
            return a
        }, b._handleSoundReady = function(a) {
            this.gainNode.connect(c.destinationNode);
            var b = .001 * this._duration,
                d = Math.min(.001 * Math.max(0, this._position), b);
            this.sourceNode = this._createAndPlayAudioNode(c.context.currentTime - b, d), this._playbackStartTime = this.sourceNode.startTime - d, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (b - d)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, b._createAndPlayAudioNode = function(a, b) {
            var d = c.context.createBufferSource();
            d.buffer = this.playbackResource, d.connect(this.panNode);
            var e = .001 * this._duration;
            return d.startTime = a + e, d.start(d.startTime, b + .001 * this._startTime, e - b), d
        }, b._pause = function() {
            this._position = 1e3 * (c.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
        }, b._resume = function() {
            this._handleSoundReady()
        }, b._updateVolume = function() {
            var a = this._muted ? 0 : this._volume;
            a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
        }, b._calculateCurrentPosition = function() {
            return 1e3 * (c.context.currentTime - this._playbackStartTime)
        }, b._updatePosition = function() {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
        }, b._handleLoop = function() {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
        }, b._updateDuration = function() {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
        }, createjs.WebAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.AbstractPlugin_constructor(), this._panningModel = c._panningModel, this.context = c.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = c._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
        }
        var b = createjs.extend(a, createjs.AbstractPlugin),
            c = a;
        c._capabilities = null, c._panningModel = "equalpower", c.context = null, c._scratchBuffer = null, c._unlocked = !1, c.DEFAULT_SAMPLE_RATE = 44100, c.isSupported = function() {
            var a = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return "file:" != location.protocol || a || this._isFileXHRSupported() ? (c._generateCapabilities(), null == c.context ? !1 : !0) : !1
        }, c.playEmptySound = function() {
            if (null != c.context) {
                var a = c.context.createBufferSource();
                a.buffer = c._scratchBuffer, a.connect(c.context.destination), a.start(0, 0, 0)
            }
        }, c._isFileXHRSupported = function() {
            var a = !0,
                b = new XMLHttpRequest;
            try {
                b.open("GET", "WebAudioPluginTest.fail", !1)
            } catch (c) {
                return a = !1
            }
            b.onerror = function() {
                a = !1
            }, b.onload = function() {
                a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                b.send()
            } catch (c) {
                a = !1
            }
            return a
        }, c._generateCapabilities = function() {
            if (null == c._capabilities) {
                var a = document.createElement("audio");
                if (null == a.canPlayType) return null;
                if (null == c.context && (c.context = c._createAudioContext(), null == c.context)) return null;
                null == c._scratchBuffer && (c._scratchBuffer = c.context.createBuffer(1, 1, 22050)), c._compatibilitySetUp(), "ontouchstart" in window && "running" != c.context.state && (c._unlock(), document.addEventListener("mousedown", c._unlock, !0), document.addEventListener("touchstart", c._unlock, !0), document.addEventListener("touchend", c._unlock, !0)), c._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var b = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = d[g] || g;
                    c._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
                }
                c.context.destination.numberOfChannels < 2 && (c._capabilities.panning = !1)
            }
        }, c._createAudioContext = function() {
            var a = window.AudioContext || window.webkitAudioContext;
            if (null == a) return null;
            var b = new a;
            if (/(iPhone|iPad)/i.test(navigator.userAgent) && b.sampleRate !== c.DEFAULT_SAMPLE_RATE) {
                var d = b.createBuffer(1, 1, c.DEFAULT_SAMPLE_RATE),
                    e = b.createBufferSource();
                e.buffer = d, e.connect(b.destination), e.start(0), e.disconnect(), b.close(), b = new a
            }
            return b
        }, c._compatibilitySetUp = function() {
            if (c._panningModel = "equalpower", !c.context.createGain) {
                c.context.createGain = c.context.createGainNode;
                var a = c.context.createBufferSource();
                a.__proto__.start = a.__proto__.noteGrainOn, a.__proto__.stop = a.__proto__.noteOff, c._panningModel = 0
            }
        }, c._unlock = function() {
            c._unlocked || (c.playEmptySound(), "running" == c.context.state && (document.removeEventListener("mousedown", c._unlock, !0), document.removeEventListener("touchend", c._unlock, !0), document.removeEventListener("touchstart", c._unlock, !0), c._unlocked = !0))
        }, b.toString = function() {
            return "[WebAudioPlugin]"
        }, b._addPropsToClasses = function() {
            var a = this._soundInstanceClass;
            a.context = this.context, a._scratchBuffer = c._scratchBuffer, a.destinationNode = this.gainNode, a._panningModel = this._panningModel, this._loaderClass.context = this.context
        }, b._updateVolume = function() {
            var a = createjs.Sound._masterMute ? 0 : this._volume;
            a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
        }, createjs.WebAudioPlugin = createjs.promote(a, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "HTMLAudioTagPool cannot be instantiated"
        }

        function b(a) {
            this._tags = []
        }
        var c = a;
        c._tags = {}, c._tagPool = new b, c._tagUsed = {}, c.get = function(a) {
            var b = c._tags[a];
            return null == b ? (b = c._tags[a] = c._tagPool.get(), b.src = a) : c._tagUsed[a] ? (b = c._tagPool.get(), b.src = a) : c._tagUsed[a] = !0, b
        }, c.set = function(a, b) {
            b == c._tags[a] ? c._tagUsed[a] = !1 : c._tagPool.set(b)
        }, c.remove = function(a) {
            var b = c._tags[a];
            return null == b ? !1 : (c._tagPool.set(b), delete c._tags[a], delete c._tagUsed[a], !0)
        }, c.getDuration = function(a) {
            var b = c._tags[a];
            return null != b && b.duration ? 1e3 * b.duration : 0
        }, createjs.HTMLAudioTagPool = a;
        var d = b.prototype;
        d.constructor = b, d.get = function() {
            var a;
            return a = 0 == this._tags.length ? this._createTag() : this._tags.pop(), null == a.parentNode && document.body.appendChild(a), a
        }, d.set = function(a) {
            var b = createjs.indexOf(this._tags, a); - 1 == b && (this._tags.src = null, this._tags.push(a))
        }, d.toString = function() {
            return "[TagPool]"
        }, d._createTag = function() {
            var a = document.createElement("audio");
            return a.autoplay = !1, a.preload = "none", a
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a, b, c, d) {
            this.AbstractSoundInstance_constructor(a, b, c, d), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), c ? this._audioSpriteStopTime = .001 * (b + c) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
        }
        var b = createjs.extend(a, createjs.AbstractSoundInstance);
        b.setMasterVolume = function(a) {
            this._updateVolume()
        }, b.setMasterMute = function(a) {
            this._updateVolume()
        }, b.toString = function() {
            return "[HTMLAudioSoundInstance]"
        }, b._removeLooping = function() {
            null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, b._addLooping = function() {
            null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
        }, b._handleCleanUp = function() {
            var a = this._playbackResource;
            if (null != a) {
                a.pause(), a.loop = !1, a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
                try {
                    a.currentTime = this._startTime
                } catch (b) {}
                createjs.HTMLAudioTagPool.set(this.src, a), this._playbackResource = null
            }
        }, b._beginPlaying = function(a) {
            return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(a)
        }, b._handleSoundReady = function(a) {
            if (4 !== this._playbackResource.readyState) {
                var b = this._playbackResource;
                return b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), b.preload = "auto", void b.load()
            }
            this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
        }, b._handleTagReady = function(a) {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
        }, b._pause = function() {
            this._playbackResource.pause()
        }, b._resume = function() {
            this._playbackResource.play()
        }, b._updateVolume = function() {
            if (null != this._playbackResource) {
                var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                a != this._playbackResource.volume && (this._playbackResource.volume = a)
            }
        }, b._calculateCurrentPosition = function() {
            return 1e3 * this._playbackResource.currentTime - this._startTime
        }, b._updatePosition = function() {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
                this._playbackResource.currentTime = .001 * (this._position + this._startTime)
            } catch (a) {
                this._handleSetPositionSeek(null)
            }
        }, b._handleSetPositionSeek = function(a) {
            null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, b._handleAudioSpriteLoop = function(a) {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
        }, b._handleLoop = function(a) {
            0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, b._updateStartTime = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, b._updateDuration = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, b._setDurationFromSource = function() {
            this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
        }, createjs.HTMLAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.AbstractPlugin_constructor(), this._capabilities = c._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
        }
        var b = createjs.extend(a, createjs.AbstractPlugin),
            c = a;
        c.MAX_INSTANCES = 30, c._AUDIO_READY = "canplaythrough", c._AUDIO_ENDED = "ended", c._AUDIO_SEEKED = "seeked", c._AUDIO_STALLED = "stalled", c._TIME_UPDATE = "timeupdate", c._capabilities = null, c.isSupported = function() {
            return c._generateCapabilities(), null != c._capabilities
        }, c._generateCapabilities = function() {
            if (null == c._capabilities) {
                var a = document.createElement("audio");
                if (null == a.canPlayType) return null;
                c._capabilities = {
                    panning: !1,
                    volume: !0,
                    tracks: -1
                };
                for (var b = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = d[g] || g;
                    c._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
                }
            }
        }, b.register = function(a) {
            var b = createjs.HTMLAudioTagPool.get(a.src),
                c = this.AbstractPlugin_register(a);
            return c.setTag(b), c
        }, b.removeSound = function(a) {
            this.AbstractPlugin_removeSound(a), createjs.HTMLAudioTagPool.remove(a)
        }, b.create = function(a, b, c) {
            var d = this.AbstractPlugin_create(a, b, c);
            return d.playbackResource = null, d
        }, b.toString = function() {
            return "[HTMLAudioPlugin]"
        }, b.setVolume = b.getVolume = b.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(a, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.loop = 0, this.useTicks = !1, this.reversed = !1, this.bounce = !1, this.timeScale = 1, this.duration = 0, this.position = 0, this.rawPosition = -1, this._paused = !0, this._next = null,
                this._prev = null, this._parent = null, this._labels = null, this._labelList = null, a && (this.useTicks = !!a.useTicks, this.ignoreGlobalPause = !!a.ignoreGlobalPause, this.loop = a.loop === !0 ? -1 : a.loop || 0, this.reversed = !!a.reversed, this.bounce = !!a.bounce, this.timeScale = a.timeScale || 1, a.onChange && this.addEventListener("change", a.onChange), a.onComplete && this.addEventListener("complete", a.onComplete))
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        b._setPaused = function(a) {
            return createjs.Tween._register(this, a), this
        }, b.setPaused = createjs.deprecate(b._setPaused, "AbstractTween.setPaused"), b._getPaused = function() {
            return this._paused
        }, b.getPaused = createjs.deprecate(b._getPaused, "AbstactTween.getPaused"), b._getCurrentLabel = function(a) {
            var b = this.getLabels();
            null == a && (a = this.position);
            for (var c = 0, d = b.length; d > c && !(a < b[c].position); c++);
            return 0 === c ? null : b[c - 1].label
        }, b.getCurrentLabel = createjs.deprecate(b._getCurrentLabel, "AbstractTween.getCurrentLabel");
        try {
            Object.defineProperties(b, {
                paused: {
                    set: b._setPaused,
                    get: b._getPaused
                },
                currentLabel: {
                    get: b._getCurrentLabel
                }
            })
        } catch (c) {}
        b.advance = function(a, b) {
            this.setPosition(this.rawPosition + a * this.timeScale, b)
        }, b.setPosition = function(a, b, c, d) {
            var e = this.duration,
                f = this.loop,
                g = this.rawPosition,
                h = 0,
                i = 0,
                j = !1;
            if (0 > a && (a = 0), 0 === e) {
                if (j = !0, -1 !== g) return j
            } else {
                if (h = a / e | 0, i = a - h * e, j = -1 !== f && a >= f * e + e, j && (a = (i = e) * (h = f) + e), a === g) return j;
                var k = !this.reversed != !(this.bounce && h % 2);
                k && (i = e - i)
            }
            this.position = i, this.rawPosition = a, this._updatePosition(c, j), j && (this.paused = !0), d && d(this), b || this._runActions(g, a, c, !c && -1 === g), this.dispatchEvent("change"), j && this.dispatchEvent("complete")
        }, b.calculatePosition = function(a) {
            var b = this.duration,
                c = this.loop,
                d = 0,
                e = 0;
            if (0 === b) return 0; - 1 !== c && a >= c * b + b ? (e = b, d = c) : 0 > a ? e = 0 : (d = a / b | 0, e = a - d * b);
            var f = !this.reversed != !(this.bounce && d % 2);
            return f ? b - e : e
        }, b.getLabels = function() {
            var a = this._labelList;
            if (!a) {
                a = this._labelList = [];
                var b = this._labels;
                for (var c in b) a.push({
                    label: c,
                    position: b[c]
                });
                a.sort(function(a, b) {
                    return a.position - b.position
                })
            }
            return a
        }, b.setLabels = function(a) {
            this._labels = a, this._labelList = null
        }, b.addLabel = function(a, b) {
            this._labels || (this._labels = {}), this._labels[a] = b;
            var c = this._labelList;
            if (c) {
                for (var d = 0, e = c.length; e > d && !(b < c[d].position); d++);
                c.splice(d, 0, {
                    label: a,
                    position: b
                })
            }
        }, b.gotoAndPlay = function(a) {
            this.paused = !1, this._goto(a)
        }, b.gotoAndStop = function(a) {
            this.paused = !0, this._goto(a)
        }, b.resolve = function(a) {
            var b = Number(a);
            return isNaN(b) && (b = this._labels && this._labels[a]), b
        }, b.toString = function() {
            return "[AbstractTween]"
        }, b.clone = function() {
            throw "AbstractTween can not be cloned."
        }, b._init = function(a) {
            a && a.paused || (this.paused = !1), a && null != a.position && this.setPosition(a.position)
        }, b._updatePosition = function(a, b) {}, b._goto = function(a) {
            var b = this.resolve(a);
            null != b && this.setPosition(b, !1, !0)
        }, b._runActions = function(a, b, c, d) {
            if (this._actionHead || this.tweens) {
                var e, f, g, h, i = this.duration,
                    j = this.reversed,
                    k = this.bounce,
                    l = this.loop;
                if (0 === i ? (e = f = g = h = 0, j = k = !1) : (e = a / i | 0, f = b / i | 0, g = a - e * i, h = b - f * i), -1 !== l && (f > l && (h = i, f = l), e > l && (g = i, e = l)), c) return this._runActionsRange(h, h, c, d);
                if (e !== f || g !== h || c || d) {
                    -1 === e && (e = g = 0);
                    var m = b >= a,
                        n = e;
                    do {
                        var o = !j != !(k && n % 2),
                            p = n === e ? g : m ? 0 : i,
                            q = n === f ? h : m ? i : 0;
                        if (o && (p = i - p, q = i - q), k && n !== e && p === q);
                        else if (this._runActionsRange(p, q, c, d || n !== e && !k)) return !0;
                        d = !1
                    } while (m && ++n <= f || !m && --n >= f)
                }
            }
        }, b._runActionsRange = function(a, b, c, d) {}, createjs.AbstractTween = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(c, d) {
            this.AbstractTween_constructor(d), this.pluginData = null, this.target = c, this.passive = !1, this._stepHead = new b(null, 0, 0, {}, null, !0), this._stepTail = this._stepHead, this._stepPosition = 0, this._actionHead = null, this._actionTail = null, this._plugins = null, this._pluginIds = null, this._injected = null, d && (this.pluginData = d.pluginData, d.override && a.removeTweens(c)), this.pluginData || (this.pluginData = {}), this._init(d)
        }

        function b(a, b, c, d, e, f) {
            this.next = null, this.prev = a, this.t = b, this.d = c, this.props = d, this.ease = e, this.passive = f, this.index = a ? a.index + 1 : 0
        }

        function c(a, b, c, d, e) {
            this.next = null, this.prev = a, this.t = b, this.d = 0, this.scope = c, this.funct = d, this.params = e
        }
        var d = createjs.extend(a, createjs.AbstractTween);
        a.IGNORE = {}, a._tweens = [], a._plugins = null, a._tweenHead = null, a._tweenTail = null, a.get = function(b, c) {
            return new a(b, c)
        }, a.tick = function(b, c) {
            for (var d = a._tweenHead; d;) {
                var e = d._next;
                c && !d.ignoreGlobalPause || d._paused || d.advance(d.useTicks ? 1 : b), d = e
            }
        }, a.handleEvent = function(a) {
            "tick" === a.type && this.tick(a.delta, a.paused)
        }, a.removeTweens = function(b) {
            if (b.tweenjs_count) {
                for (var c = a._tweenHead; c;) {
                    var d = c._next;
                    c.target === b && a._register(c, !0), c = d
                }
                b.tweenjs_count = 0
            }
        }, a.removeAllTweens = function() {
            for (var b = a._tweenHead; b;) {
                var c = b._next;
                b._paused = !0, b.target && (b.target.tweenjs_count = 0), b._next = b._prev = null, b = c
            }
            a._tweenHead = a._tweenTail = null
        }, a.hasActiveTweens = function(b) {
            return b ? !!b.tweenjs_count : !!a._tweenHead
        }, a._installPlugin = function(b) {
            for (var c = b.priority = b.priority || 0, d = a._plugins = a._plugins || [], e = 0, f = d.length; f > e && !(c < d[e].priority); e++);
            d.splice(e, 0, b)
        }, a._register = function(b, c) {
            var d = b.target;
            if (!c && b._paused) {
                d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1);
                var e = a._tweenTail;
                e ? (a._tweenTail = e._next = b, b._prev = e) : a._tweenHead = a._tweenTail = b, !a._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", a), a._inited = !0)
            } else if (c && !b._paused) {
                d && d.tweenjs_count--;
                var f = b._next,
                    g = b._prev;
                f ? f._prev = g : a._tweenTail = g, g ? g._next = f : a._tweenHead = f, b._next = b._prev = null
            }
            b._paused = c
        }, d.wait = function(a, b) {
            return a > 0 && this._addStep(+a, this._stepTail.props, null, b), this
        }, d.to = function(a, b, c) {
            (null == b || 0 > b) && (b = 0);
            var d = this._addStep(+b, null, c);
            return this._appendProps(a, d), this
        }, d.label = function(a) {
            return this.addLabel(a, this.duration), this
        }, d.call = function(a, b, c) {
            return this._addAction(c || this.target, a, b || [this])
        }, d.set = function(a, b) {
            return this._addAction(b || this.target, this._set, [a])
        }, d.play = function(a) {
            return this._addAction(a || this, this._set, [{
                paused: !1
            }])
        }, d.pause = function(a) {
            return this._addAction(a || this, this._set, [{
                paused: !0
            }])
        }, d.w = d.wait, d.t = d.to, d.c = d.call, d.s = d.set, d.toString = function() {
            return "[Tween]"
        }, d.clone = function() {
            throw "Tween can not be cloned."
        }, d._addPlugin = function(a) {
            var b = this._pluginIds || (this._pluginIds = {}),
                c = a.ID;
            if (c && !b[c]) {
                b[c] = !0;
                for (var d = this._plugins || (this._plugins = []), e = a.priority || 0, f = 0, g = d.length; g > f; f++)
                    if (e < d[f].priority) return void d.splice(f, 0, a);
                d.push(a)
            }
        }, d._updatePosition = function(a, b) {
            var c = this._stepHead.next,
                d = this.position,
                e = this.duration;
            if (this.target && c) {
                for (var f = c.next; f && f.t <= d;) c = c.next, f = c.next;
                var g = b ? 0 === e ? 1 : d / e : (d - c.t) / c.d;
                this._updateTargetProps(c, g, b)
            }
            this._stepPosition = c ? d - c.t : 0
        }, d._updateTargetProps = function(b, c, d) {
            if (!(this.passive = !!b.passive)) {
                var e, f, g, h, i = b.prev.props,
                    j = b.props;
                (h = b.ease) && (c = h(c, 0, 1, 1));
                var k = this._plugins;
                a: for (var l in i) {
                    if (f = i[l], g = j[l], e = f !== g && "number" == typeof f ? f + (g - f) * c : c >= 1 ? g : f, k)
                        for (var m = 0, n = k.length; n > m; m++) {
                            var o = k[m].change(this, b, l, e, c, d);
                            if (o === a.IGNORE) continue a;
                            void 0 !== o && (e = o)
                        }
                    this.target[l] = e
                }
            }
        }, d._runActionsRange = function(a, b, c, d) {
            var e = a > b,
                f = e ? this._actionTail : this._actionHead,
                g = b,
                h = a;
            e && (g = a, h = b);
            for (var i = this.position; f;) {
                var j = f.t;
                if ((j === b || j > h && g > j || d && j === a) && (f.funct.apply(f.scope, f.params), i !== this.position)) return !0;
                f = e ? f.prev : f.next
            }
        }, d._appendProps = function(b, c, d) {
            var e, f, g, h, i, j = this._stepHead.props,
                k = this.target,
                l = a._plugins,
                m = c.prev,
                n = m.props,
                o = c.props || (c.props = this._cloneProps(n)),
                p = {};
            for (e in b)
                if (b.hasOwnProperty(e) && (p[e] = o[e] = b[e], void 0 === j[e])) {
                    if (h = void 0, l)
                        for (f = l.length - 1; f >= 0; f--)
                            if (g = l[f].init(this, e, h), void 0 !== g && (h = g), h === a.IGNORE) {
                                delete o[e], delete p[e];
                                break
                            }
                    h !== a.IGNORE && (void 0 === h && (h = k[e]), n[e] = void 0 === h ? null : h)
                }
            for (e in p) {
                g = b[e];
                for (var q, r = m;
                    (q = r) && (r = q.prev);)
                    if (r.props !== q.props) {
                        if (void 0 !== r.props[e]) break;
                        r.props[e] = n[e]
                    }
            }
            if (d !== !1 && (l = this._plugins))
                for (f = l.length - 1; f >= 0; f--) l[f].step(this, c, p);
            (i = this._injected) && (this._injected = null, this._appendProps(i, c, !1))
        }, d._injectProp = function(a, b) {
            var c = this._injected || (this._injected = {});
            c[a] = b
        }, d._addStep = function(a, c, d, e) {
            var f = new b(this._stepTail, this.duration, a, c, d, e || !1);
            return this.duration += a, this._stepTail = this._stepTail.next = f
        }, d._addAction = function(a, b, d) {
            var e = new c(this._actionTail, this.duration, a, b, d);
            return this._actionTail ? this._actionTail.next = e : this._actionHead = e, this._actionTail = e, this
        }, d._set = function(a) {
            for (var b in a) this[b] = a[b]
        }, d._cloneProps = function(a) {
            var b = {};
            for (var c in a) b[c] = a[c];
            return b
        }, createjs.Tween = createjs.promote(a, "AbstractTween")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(a) {
            var b, c;
            a instanceof Array || null == a && arguments.length > 1 ? (b = a, c = arguments[1], a = arguments[2]) : a && (b = a.tweens, c = a.labels), this.AbstractTween_constructor(a), this.tweens = [], b && this.addTween.apply(this, b), this.setLabels(c), this._init(a)
        }
        var b = createjs.extend(a, createjs.AbstractTween);
        b.addTween = function(a) {
            a._parent && a._parent.removeTween(a);
            var b = arguments.length;
            if (b > 1) {
                for (var c = 0; b > c; c++) this.addTween(arguments[c]);
                return arguments[b - 1]
            }
            if (0 === b) return null;
            this.tweens.push(a), a._parent = this, a.paused = !0;
            var d = a.duration;
            return a.loop > 0 && (d *= a.loop + 1), d > this.duration && (this.duration = d), this.rawPosition >= 0 && a.setPosition(this.rawPosition), a
        }, b.removeTween = function(a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = !0, d = 0; b > d; d++) c = c && this.removeTween(arguments[d]);
                return c
            }
            if (0 === b) return !0;
            for (var e = this.tweens, d = e.length; d--;)
                if (e[d] === a) return e.splice(d, 1), a._parent = null, a.duration >= this.duration && this.updateDuration(), !0;
            return !1
        }, b.updateDuration = function() {
            this.duration = 0;
            for (var a = 0, b = this.tweens.length; b > a; a++) {
                var c = this.tweens[a],
                    d = c.duration;
                c.loop > 0 && (d *= c.loop + 1), d > this.duration && (this.duration = d)
            }
        }, b.toString = function() {
            return "[Timeline]"
        }, b.clone = function() {
            throw "Timeline can not be cloned."
        }, b._updatePosition = function(a, b) {
            for (var c = this.position, d = 0, e = this.tweens.length; e > d; d++) this.tweens[d].setPosition(c, !0, a)
        }, b._runActionsRange = function(a, b, c, d) {
            for (var e = this.position, f = 0, g = this.tweens.length; g > f; f++)
                if (this.tweens[f]._runActions(a, b, c, d), e !== this.position) return !0
        }, createjs.Timeline = createjs.promote(a, "AbstractTween")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "Ease cannot be instantiated."
        }
        a.linear = function(a) {
            return a
        }, a.none = a.linear, a.get = function(a) {
            return -1 > a ? a = -1 : a > 1 && (a = 1),
                function(b) {
                    return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
                }
        }, a.getPowIn = function(a) {
            return function(b) {
                return Math.pow(b, a)
            }
        }, a.getPowOut = function(a) {
            return function(b) {
                return 1 - Math.pow(1 - b, a)
            }
        }, a.getPowInOut = function(a) {
            return function(b) {
                return (b *= 2) < 1 ? .5 * Math.pow(b, a) : 1 - .5 * Math.abs(Math.pow(2 - b, a))
            }
        }, a.quadIn = a.getPowIn(2), a.quadOut = a.getPowOut(2), a.quadInOut = a.getPowInOut(2), a.cubicIn = a.getPowIn(3), a.cubicOut = a.getPowOut(3), a.cubicInOut = a.getPowInOut(3), a.quartIn = a.getPowIn(4), a.quartOut = a.getPowOut(4), a.quartInOut = a.getPowInOut(4), a.quintIn = a.getPowIn(5), a.quintOut = a.getPowOut(5), a.quintInOut = a.getPowInOut(5), a.sineIn = function(a) {
            return 1 - Math.cos(a * Math.PI / 2)
        }, a.sineOut = function(a) {
            return Math.sin(a * Math.PI / 2)
        }, a.sineInOut = function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        }, a.getBackIn = function(a) {
            return function(b) {
                return b * b * ((a + 1) * b - a)
            }
        }, a.backIn = a.getBackIn(1.7), a.getBackOut = function(a) {
            return function(b) {
                return --b * b * ((a + 1) * b + a) + 1
            }
        }, a.backOut = a.getBackOut(1.7), a.getBackInOut = function(a) {
            return a *= 1.525,
                function(b) {
                    return (b *= 2) < 1 ? .5 * (b * b * ((a + 1) * b - a)) : .5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
                }
        }, a.backInOut = a.getBackInOut(1.7), a.circIn = function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }, a.circOut = function(a) {
            return Math.sqrt(1 - --a * a)
        }, a.circInOut = function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }, a.bounceIn = function(b) {
            return 1 - a.bounceOut(1 - b)
        }, a.bounceOut = function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, a.bounceInOut = function(b) {
            return .5 > b ? .5 * a.bounceIn(2 * b) : .5 * a.bounceOut(2 * b - 1) + .5
        }, a.getElasticIn = function(a, b) {
            var c = 2 * Math.PI;
            return function(d) {
                if (0 == d || 1 == d) return d;
                var e = b / c * Math.asin(1 / a);
                return -(a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b))
            }
        }, a.elasticIn = a.getElasticIn(1, .3), a.getElasticOut = function(a, b) {
            var c = 2 * Math.PI;
            return function(d) {
                if (0 == d || 1 == d) return d;
                var e = b / c * Math.asin(1 / a);
                return a * Math.pow(2, -10 * d) * Math.sin((d - e) * c / b) + 1
            }
        }, a.elasticOut = a.getElasticOut(1, .3), a.getElasticInOut = function(a, b) {
            var c = 2 * Math.PI;
            return function(d) {
                var e = b / c * Math.asin(1 / a);
                return (d *= 2) < 1 ? -.5 * (a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b)) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * c / b) * .5 + 1
            }
        }, a.elasticInOut = a.getElasticInOut(1, .3 * 1.5), createjs.Ease = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "MotionGuidePlugin cannot be instantiated."
        }
        var b = a;
        b.priority = 0, b.ID = "MotionGuide", b.install = function() {
            return createjs.Tween._installPlugin(a), createjs.Tween.IGNORE
        }, b.init = function(a, c, d) {
            "guide" == c && a._addPlugin(b)
        }, b.step = function(a, c, d) {
            for (var e in d)
                if ("guide" === e) {
                    var f = c.props.guide,
                        g = b._solveGuideData(d.guide, f);
                    f.valid = !g;
                    var h = f.endData;
                    if (a._injectProp("x", h.x), a._injectProp("y", h.y), g || !f.orient) break;
                    var i = void 0 === c.prev.props.rotation ? a.target.rotation || 0 : c.prev.props.rotation;
                    if (f.startOffsetRot = i - f.startData.rotation, "fixed" == f.orient) f.endAbsRot = h.rotation + f.startOffsetRot, f.deltaRotation = 0;
                    else {
                        var j = void 0 === d.rotation ? a.target.rotation || 0 : d.rotation,
                            k = j - f.endData.rotation - f.startOffsetRot,
                            l = k % 360;
                        switch (f.endAbsRot = j, f.orient) {
                            case "auto":
                                f.deltaRotation = k;
                                break;
                            case "cw":
                                f.deltaRotation = (l + 360) % 360 + 360 * Math.abs(k / 360 | 0);
                                break;
                            case "ccw":
                                f.deltaRotation = (l - 360) % 360 + -360 * Math.abs(k / 360 | 0)
                        }
                    }
                    a._injectProp("rotation", f.endAbsRot)
                }
        }, b.change = function(a, c, d, e, f, g) {
            var h = c.props.guide;
            if (h && c.props !== c.prev.props && h !== c.prev.props.guide) return "guide" === d && !h.valid || "x" == d || "y" == d || "rotation" === d && h.orient ? createjs.Tween.IGNORE : void b._ratioToPositionData(f, h, a.target)
        }, b.debug = function(a, c, d) {
            a = a.guide || a;
            var e = b._findPathProblems(a);
            if (e && console.error("MotionGuidePlugin Error found: \n" + e), !c) return e;
            var f, g = a.path,
                h = g.length,
                i = 3,
                j = 9;
            for (c.save(), c.lineCap = "round", c.lineJoin = "miter", c.beginPath(), c.moveTo(g[0], g[1]), f = 2; h > f; f += 4) c.quadraticCurveTo(g[f], g[f + 1], g[f + 2], g[f + 3]);
            c.strokeStyle = "black", c.lineWidth = 1.5 * i, c.stroke(), c.strokeStyle = "white", c.lineWidth = i, c.stroke(), c.closePath();
            var k = d.length;
            if (d && k) {
                var l = {},
                    m = {};
                b._solveGuideData(a, l);
                for (var f = 0; k > f; f++) l.orient = "fixed", b._ratioToPositionData(d[f], l, m), c.beginPath(), c.moveTo(m.x, m.y), c.lineTo(m.x + Math.cos(.0174533 * m.rotation) * j, m.y + Math.sin(.0174533 * m.rotation) * j), c.strokeStyle = "black", c.lineWidth = 1.5 * i, c.stroke(), c.strokeStyle = "red", c.lineWidth = i, c.stroke(), c.closePath()
            }
            return c.restore(), e
        }, b._solveGuideData = function(a, c) {
            var d = void 0;
            if (d = b.debug(a)) return d;
            var e = c.path = a.path;
            c.orient = a.orient;
            c.subLines = [], c.totalLength = 0, c.startOffsetRot = 0, c.deltaRotation = 0, c.startData = {
                ratio: 0
            }, c.endData = {
                ratio: 1
            }, c.animSpan = 1;
            var f, g, h, i, j, k, l, m, n, o = e.length,
                p = 10,
                q = {};
            for (f = e[0], g = e[1], l = 2; o > l; l += 4) {
                h = e[l], i = e[l + 1], j = e[l + 2], k = e[l + 3];
                var r = {
                        weightings: [],
                        estLength: 0,
                        portion: 0
                    },
                    s = f,
                    t = g;
                for (m = 1; p >= m; m++) {
                    b._getParamsForCurve(f, g, h, i, j, k, m / p, !1, q);
                    var u = q.x - s,
                        v = q.y - t;
                    n = Math.sqrt(u * u + v * v), r.weightings.push(n), r.estLength += n, s = q.x, t = q.y
                }
                for (c.totalLength += r.estLength, m = 0; p > m; m++) n = r.estLength, r.weightings[m] = r.weightings[m] / n;
                c.subLines.push(r), f = j, g = k
            }
            n = c.totalLength;
            var w = c.subLines.length;
            for (l = 0; w > l; l++) c.subLines[l].portion = c.subLines[l].estLength / n;
            var x = isNaN(a.start) ? 0 : a.start,
                y = isNaN(a.end) ? 1 : a.end;
            b._ratioToPositionData(x, c, c.startData), b._ratioToPositionData(y, c, c.endData), c.startData.ratio = x, c.endData.ratio = y, c.animSpan = c.endData.ratio - c.startData.ratio
        }, b._ratioToPositionData = function(a, c, d) {
            var e, f, g, h, i, j = c.subLines,
                k = 0,
                l = 10,
                m = a * c.animSpan + c.startData.ratio;
            for (f = j.length, e = 0; f > e; e++) {
                if (h = j[e].portion, k + h >= m) {
                    i = e;
                    break
                }
                k += h
            }
            void 0 === i && (i = f - 1, k -= h);
            var n = j[i].weightings,
                o = h;
            for (f = n.length, e = 0; f > e && (h = n[e] * o, !(k + h >= m)); e++) k += h;
            i = 4 * i + 2, g = e / l + (m - k) / h * (1 / l);
            var p = c.path;
            return b._getParamsForCurve(p[i - 2], p[i - 1], p[i], p[i + 1], p[i + 2], p[i + 3], g, c.orient, d), c.orient && (a >= .99999 && 1.00001 >= a && void 0 !== c.endAbsRot ? d.rotation = c.endAbsRot : d.rotation += c.startOffsetRot + a * c.deltaRotation), d
        }, b._getParamsForCurve = function(a, b, c, d, e, f, g, h, i) {
            var j = 1 - g;
            i.x = j * j * a + 2 * j * g * c + g * g * e, i.y = j * j * b + 2 * j * g * d + g * g * f, h && (i.rotation = 57.2957795 * Math.atan2((d - b) * j + (f - d) * g, (c - a) * j + (e - c) * g))
        }, b._findPathProblems = function(a) {
            var b = a.path,
                c = b && b.length || 0;
            if (6 > c || (c - 2) % 4) {
                var d = "	Cannot parse 'path' array due to invalid number of entries in path. ";
                return d += "There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). ", d += "See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.\n\n", d += "Only [ " + c + " ] values found. Expected: " + Math.max(4 * Math.ceil((c - 2) / 4) + 2, 6)
            }
            for (var e = 0; c > e; e++)
                if (isNaN(b[e])) return "All data in path array must be numeric";
            var f = a.start;
            if (isNaN(f) && void 0 !== f) return "'start' out of bounds. Expected 0 to 1, got: " + f;
            var g = a.end;
            if (isNaN(g) && void 0 !== g) return "'end' out of bounds. Expected 0 to 1, got: " + g;
            var h = a.orient;
            return h && "fixed" != h && "auto" != h && "cw" != h && "ccw" != h ? 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + h : void 0
        }, createjs.MotionGuidePlugin = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = createjs.TweenJS = createjs.TweenJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:05 GMT"
    }();








! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            r = n(1),
            a = (o(r), n(6)),
            u = o(a),
            c = n(7),
            s = o(c),
            f = n(8),
            d = o(f),
            l = n(9),
            p = o(l),
            m = n(10),
            b = o(m),
            v = n(11),
            y = o(v),
            g = n(14),
            h = o(g),
            w = [],
            k = !1,
            x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w
            },
            O = function() {
                w = (0, h.default)(), j()
            },
            M = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            },
            S = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
            },
            _ = function(e) {
                x = i(x, e), w = (0, h.default)();
                var t = document.all && !window.atob;
                return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    j(!0)
                }) : document.addEventListener(x.startEvent, function() {
                    j(!0)
                }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, x.once)
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w)
            };
        e.exports = {
            init: _,
            refresh: j,
            refreshHard: O
        }
    }, function(e, t) {}, , , , , function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function o(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, k = t, g = e.apply(o, n)
                }

                function r(e) {
                    return k = e, h = setTimeout(f, t), M ? o(e) : g
                }

                function a(e) {
                    var n = e - w,
                        o = e - k,
                        i = t - n;
                    return S ? j(i, y - o) : i
                }

                function c(e) {
                    var n = e - w,
                        o = e - k;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }

                function f() {
                    var e = O();
                    return c(e) ? d(e) : void(h = setTimeout(f, a(e)))
                }

                function d(e) {
                    return h = void 0, _ && b ? o(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(O())
                }

                function m() {
                    var e = O(),
                        n = c(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (S) return h = setTimeout(f, t), o(w)
                    }
                    return void 0 === h && (h = setTimeout(f, t)), g
                }
                var b, v, y, g, h, w, k = 0,
                    M = !1,
                    S = !1,
                    _ = !0;
                if ("function" != typeof e) throw new TypeError(s);
                return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m
            }

            function o(e, t, o) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(s);
                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }

            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }

            function u(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return f;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = "Expected a function",
                f = NaN,
                d = "[object Symbol]",
                l = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                b = /^0o[0-7]+$/i,
                v = parseInt,
                y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                h = y || g || Function("return this")(),
                w = Object.prototype,
                k = w.toString,
                x = Math.max,
                j = Math.min,
                O = function() {
                    return h.Date.now()
                };
            e.exports = o
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function i(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, O = t, g = e.apply(o, n)
                }

                function r(e) {
                    return O = e, h = setTimeout(f, t), M ? i(e) : g
                }

                function u(e) {
                    var n = e - w,
                        o = e - O,
                        i = t - n;
                    return S ? x(i, y - o) : i
                }

                function s(e) {
                    var n = e - w,
                        o = e - O;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }

                function f() {
                    var e = j();
                    return s(e) ? d(e) : void(h = setTimeout(f, u(e)))
                }

                function d(e) {
                    return h = void 0, _ && b ? i(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(j())
                }

                function m() {
                    var e = j(),
                        n = s(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (S) return h = setTimeout(f, t), i(w)
                    }
                    return void 0 === h && (h = setTimeout(f, t)), g
                }
                var b, v, y, g, h, w, O = 0,
                    M = !1,
                    S = !1,
                    _ = !0;
                if ("function" != typeof e) throw new TypeError(c);
                return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m
            }

            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }

            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return s;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                c = "Expected a function",
                s = NaN,
                f = "[object Symbol]",
                d = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                b = parseInt,
                v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                g = v || y || Function("return this")(),
                h = Object.prototype,
                w = h.toString,
                k = Math.max,
                x = Math.min,
                j = function() {
                    return g.Date.now()
                };
            e.exports = n
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = void 0,
                o = void 0,
                i = void 0;
            for (t = 0; t < e.length; t += 1) {
                if (o = e[t], o.dataset && o.dataset.aos) return !0;
                if (i = o.children && n(o.children)) return !0
            }
            return !1
        }

        function o() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function i() {
            return !!o()
        }

        function r(e, t) {
            var n = window.document,
                i = o(),
                r = new i(a);
            u = t, r.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }

        function a(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    o = Array.prototype.slice.call(e.removedNodes),
                    i = t.concat(o);
                if (n(i)) return u()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {};
        t.default = {
            isSupported: i,
            ready: r
        }
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            s = function() {
                function e() {
                    n(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = o();
                        return !(!u.test(e) && !c.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new s
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
            },
            o = function(e, t) {
                var o = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t)
                })
            };
        t.default = o
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12),
            r = o(i),
            a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
                }), e
            };
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13),
            r = o(i),
            a = function(e, t) {
                var n = 0,
                    o = 0,
                    i = window.innerHeight,
                    a = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
            };
        t.default = a
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        };
        t.default = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        };
        t.default = n
    }])
});



(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];


    (lib.AnMovieClip = function() {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        }
        this.play = function() {
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        }
        this.stop = function() {
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:



    (lib.Image = function() {
        this.initialize(img.Image);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 231);


    (lib.Image_1 = function() {
        this.initialize(img.Image_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 231);


    (lib.Image_2 = function() {
        this.initialize(img.Image_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 231);


    (lib.Image_3 = function() {
        this.initialize(img.Image_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 231);


    (lib.Image_4 = function() {
        this.initialize(img.Image_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 231);


    (lib.Image_5 = function() {
        this.initialize(img.Image_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 232, 232);


    (lib.Image_6 = function() {
        this.initialize(img.Image_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 231);


    (lib.Image_7 = function() {
        this.initialize(img.Image_7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 230); // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.Group = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#5C5C5C").s().p("EgBHA/aQgGgBABgGIAgiyQABgMgFgKIAAAAIgJgRQgHgNAEgNQAFgOANgHQAQgJAUgBMAAAh6aIAMAAMAAAB6aQAUABAQAJQANAHAFAOQAEANgHANIgJASQgFAKABAKIAgCzQABAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgGABgBgGIggiyQgCgOAHgOIAJgSQAFgIgDgJQgDgJgJgFQgNgHgSgBIAAAIQAAAHgGgBQgGABAAgHIAAgIQgPABgQAHQgIAFgDAJQgDAJAEAIIAJASQAHAOgCAPIggCyQgBAFgEAAg");
        this.shape.setTransform(7.6506, 405.75);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 15.3, 811.5), null);


    (lib.Group_1 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1B1C20").s().p("EABHA/aQgEAAgBgFIggiyQgDgOAIgPIAJgRQAEgJgDgJQgDgJgJgFQgNgHgRgCIAAAJQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgDACgCAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgJQgRACgNAHQgJAFgDAJQgDAJAEAJIAKARQAHAPgCANIAAABIggCyQgCAFgFgBQgGgBABgFIAhiyQABgLgFgKIgKgSQgGgNAEgOQAFgNANgHQAOgIAWgCMAAAh6aIAMAAMAAAB6aQAUABAQAJQANAHAFANQAEAOgHANIgJARIAAAAQgGALACALIAgCyQABAGgGABg");
        this.shape_1.setTransform(7.6755, 405.775);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 15.4, 811.6), null);


    (lib.Group_2 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#5C5C5C").s().p("EgBHA9BQgGgBABgFIAgiyQABgMgFgKIAAAAIgJgRQgHgNAEgOQAFgNANgHQAQgJAUgBMAAAh1qIAMAAMAAAB1qQAUABAQAJQANAHAFANQAEAOgHANIgJARQgFALABALIAgCxQACAFgGACQgGABgBgGIggixIAAgBQgCgOAHgOIAJgSQAFgIgDgJQgDgJgJgFQgOgHgRgCIAAAJQAAAGgGAAQAAAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIAAgJQgRACgOAHQgIAFgDAJQgDAJAEAIIAJASQAHANgCAQIggCyQgBAFgEAAg");
        this.shape_2.setTransform(7.6573, 198.875);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0, -191.7, 15.4, 781.2), null);


    (lib.Group_3 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#1B1C20").s().p("EABBAt+IgfiyQgDgOAIgPIAJgRQAEgJgDgJQgDgJgJgFQgNgHgSgBIAAAIQAAAHgGAAQgGAAAAgHIAAgIQgRABgNAHQgJAFgDAJQgDAJAEAJIAKASQAHANgCAPIAAAAIghCyQgBAGgFgBQgFgCAAgFIAhiyQABgMgFgJIgKgSQgGgNAEgNQAFgOANgHQAPgIAUgCMAAAhXsIANAAMAAABXsQAUACAQAIQANAHAFAOQAEANgHANIgJASIAAgBQgGAMACAKIAgCyQABAGgGABIgBAAQgFAAgBgFg");
        this.shape_3.setTransform(7.6804, 294.725);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0, 0, 15.4, 589.5), null);


    (lib.Group_4 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#5C5C5C").s().p("EgBHAm/QgGgBABgGIAgiyQABgMgFgKIAAAAIgJgRQgHgNAEgNQAFgOANgHQAQgJAUgBMAAAhJkIAMAAMAAABJkQAUACAQAIQANAHAFAOQAEANgHANIgJASQgFAKABALIAgCyQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgGABgBgFIggiyQgCgOAHgPIAJgRQAFgJgDgJQgDgJgJgFQgOgHgRgBIAAAIQAAAHgGAAQgGAAAAgHIAAgJQgRACgOAHQgIAFgDAJQgDAJAEAJIAJARQAHANgCAQIggCyQgBAFgEAAg");
        this.shape_4.setTransform(7.6506, 145.925);

        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0, -103.5, 15.3, 498.9), null);


    (lib.Group_5 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#5C5C5C").s().p("AhHV/QgGgBABgGIAgiyQACgLgGgLIAAAAIgJgRQgHgNAEgNQAFgOANgHQAQgJAUgBIAAvXIANAAIgNAAIAA4NIANAAIAAYNIAAPXQAUACAPAIQANAHAFAOQAEANgGANIgKASQgFAJABAMIAhCyQABAFgGABQgFABgCgFIggiyQgCgOAHgPIAKgRQAEgJgDgJQgDgJgJgFQgNgHgRgBIAAAIQAAAHgHAAQgFAAAAgHIAAgJQgTACgMAHQgJAFgDAJQgDAJAEAJIAJARQAIANgDAQIggCyQAAAFgFAAg");
        this.shape_5.setTransform(7.675, 42.525);

        this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0, -98.1, 15.4, 281.29999999999995), null);


    (lib.Group_6 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#1B1C20").s().p("EABHAmxQgEABgBgFIggiyQgDgPAIgOIAJgRQAEgJgDgJQgDgKgJgEQgMgIgSgBIAAAJQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgDABgCAAQgGAAAAgGIAAgJQgRACgNAGQgJAGgDAJQgDAJAEAJIAKARQAHAOgCAPIggCyQgCAFgFgBQgGgBABgFIAhiyQABgLgFgLIgKgSQgGgNAEgMQAFgPANgGQAPgJAVgBMAAAhJJIAMAAMAAABJJQAUABAQAJQANAHAFAOQAEAMgHANIgJASIAAAAQgGAKACAMIAgCyQABAGgGAAg");
        this.shape_6.setTransform(7.6755, 147.25);

        this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0, -100.9, 15.4, 496.29999999999995), null);


    (lib.Group_7 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1B1C20").s().p("EABHAkLQgFAAgBgEIgfiyQgDgQAIgOIAJgRQAEgIgDgKQgDgJgJgEQgMgIgTgBIAAAJQAAAGgGAAQgGAAAAgGIAAgJQgRABgNAHQgJAFgDAJQgDAKAEAIIAKASQAGANgBAPIghCyQgBAGgFgBQgGgBABgGIAgiyQACgLgFgKIgKgSQgGgMAEgOQAFgNANgHQAPgJAUgBMAAAhD9IANAAMAAABD9QATABARAJQANAHAEANQAFANgHANIgJASIAAAAQgGAKACAMIAgCyQABAFgGABg");
        this.shape_7.setTransform(7.6745, -48.325);

        this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0, -279.8, 15.4, 463), null);


    (lib.Symbol16 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image_1();
        this.instance.setTransform(-115.5, 819.2);

        this.instance_1 = new lib.Group();
        this.instance_1.setTransform(1.3, 405.8, 1, 1, 0, 0, 0, 7.7, 405.8);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#282828").s().p("AgTgvIAAgBQgCgHAFgIIAMAAQgFAHABAHIAdBxIgGAAIgGABg");
        this.shape.setTransform(6.5942, 803.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#282828").s().p("AgSA/IgBAAIAbhwQACgJgFgGIAMAAQAEAIgBAIIgcBxQgFgCgFAAg");
        this.shape_1.setTransform(-4.1295, 803.575);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABbBLIAAgBQAAgJgHgGQgGgGgJAAQgJAAgGAGQgHAGAAAJIAAABIhhAAIAAgBQAAgJgGgGQgHgGgIAAQgKAAgGAGQgHAGAAAJIAAABIgfAAQgDAAgDgCQgCgDAAgDIAAiFIAAAAQAAgIAIAAID7AAQAJAAAAAIIAACFQAAAIgJAAg");
        this.shape_2.setTransform(1.2, 804.575);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], 174.1, 139.6, -164.9, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(0.025, 934.725);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-131.6, 0, 263.29999999999995, 1066.4), null);


    (lib.Symbol15 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image_2();
        this.instance.setTransform(-115.5, 818.1);

        this.instance_1 = new lib.Group_1();
        this.instance_1.setTransform(-1.2, 406.4, 1, 1, 0, 0, 0, 7.7, 406.4);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#16171C").s().p("AgPBAIgFAAIAdhxQABgHgFgHIAAgBIAMAAQAFAJgCAIIgcBwIgHgBg");
        this.shape.setTransform(-6.5442, 803.5127);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#16171C").s().p("AgTgvQgBgKAEgIIAMAAQgFAJACAHIAbBwIgBAAQgGAAgEADg");
        this.shape_1.setTransform(4.1545, 803.5877);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABeBMIAAgBQAAgJgFgHQgHgGgJAAQgJAAgGAGQgHAHABAJIAAABIhiAAIAAgBQAAgJgHgHQgGgGgJAAQgJAAgGAGQgGAHAAAJIAAABIgkAAQgEgBgCgCQgCgDgBgDIAAiFQABgDACgDQACgCAEgBID7AAQAEABACACQACADABADIAACFQgBADgCADQgCACgEABg");
        this.shape_2.setTransform(-1.2, 804.5877);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], -174, 139.6, 165, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(0.025, 933.9358);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-131.6, 0, 263.29999999999995, 1065.7), null);


    (lib.Symbol14 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image_4();
        this.instance.setTransform(-115.5, 595.95);

        this.instance_1 = new lib.Group_3();
        this.instance_1.setTransform(-0.6, 294.7, 1, 1, 0, 0, 0, 7.7, 294.7);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#16171C").s().p("AgOA/IgFABIAchxQACgHgGgHIANAAQAEAHgCAJIgcBvg");
        this.shape.setTransform(-5.9545, 581.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#16171C").s().p("AgSgwQgCgIAEgIIAMAAQgFAIACAHIAbBwIAAAAQgGAAgEACg");
        this.shape_1.setTransform(4.7442, 581.475);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABeBLIAAgBQAAgIgFgHQgHgGgJAAQgJAAgGAGQgHAHABAIIAAABIhiAAIAAgBQgBgIgGgHQgGgGgJAAQgJAAgGAGQgGAHAAAIIAAABIgkAAQgIAAgBgIIAAiFQABgDACgDQACgCAEAAID7AAQADAAADACQACADABADIAACFQAAAIgJAAg");
        this.shape_2.setTransform(-0.6, 582.475);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], -174, 139.6, 165, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(0, 711.475);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-131.7, 0, 263.4, 843.2), null);


    (lib.Symbol13 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image_5();
        this.instance.setTransform(-115.95, 290.15);

        this.instance_1 = new lib.Group_5();
        this.instance_1.setTransform(1.3, 189.75, 1, 1, 0, 0, 0, 7.7, 91.6);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#282828").s().p("AAQBAIgHAAIgchvQgCgIAFgIIAMAAIAAAAQgFAHABAIIAdBwg");
        this.shape.setTransform(6.5942, 273.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#282828").s().p("AgSA/IgBAAIAbhwQACgHgFgIIAMAAIAAAAQAEAHgBAKIgcBwQgEgCgGAAg");
        this.shape_1.setTransform(-4.1045, 273.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABbBMIAAgBQAAgKgHgFQgHgHgIAAQgJAAgHAHQgGAFAAAKIAAABIhhAAIAAgBQAAgKgHgFQgGgHgJAAQgJAAgGAHQgGAFgBAKIAAABIgfAAQgDAAgDgDQgCgDAAgDIAAiEQAAgEACgDQADgDAEABID6AAQADgBADADQADADAAAEIAACEQAAADgDADQgDADgDAAg");
        this.shape_2.setTransform(1.25, 274.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], 174.1, 139.6, -164.9, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(0.025, 403.75);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-131.6, 0, 263.29999999999995, 535.5), null);


    (lib.Symbol12 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image();
        this.instance.setTransform(-116.6, 508.15);

        this.instance_1 = new lib.Group_4();
        this.instance_1.setTransform(1.3, 301.25, 1, 1, 0, 0, 0, 7.7, 197.7);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#282828").s().p("AgTgvQgCgIAFgJIAMAAIAAABQgFAHABAHIAdBxIgGAAIgGABg");
        this.shape.setTransform(6.5942, 490.925);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#282828").s().p("AgSA/IgBAAIAbhwQACgIgFgHIAMAAIAAAAQAEAIgBAJIgcBwQgFgCgFAAg");
        this.shape_1.setTransform(-4.1295, 491);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABbBLIAAgBQAAgIgHgGQgGgHgJAAQgJAAgGAHQgHAGAAAIIAAABIhhAAIAAgBQAAgIgGgGQgHgHgIAAQgKAAgGAHQgHAGAAAIIAAABIgfAAQgDAAgDgCQgCgDAAgEIAAiDIAAAAQAAgJAIAAID7AAQAJAAAAAJIAACDQAAAJgJAAg");
        this.shape_2.setTransform(1.2, 492);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], 174.1, 139.6, -164.9, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(0.025, 621.35);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-131.6, 0, 263.29999999999995, 753.1), null);


    (lib.Symbol11 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image_6();
        this.instance.setTransform(-116.7, 504.45);

        this.instance_1 = new lib.Group_6();
        this.instance_1.setTransform(-1.2, 298.6, 1, 1, 0, 0, 0, 7.7, 197.7);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#16171C").s().p("AgPBAIgFAAIAdhxQABgHgFgHIAAgBIAMAAQAFAJgCAIIgcBwIgHgBg");
        this.shape.setTransform(-6.5442, 488.275);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#16171C").s().p("AgTgvQgBgKAEgHIAAAAIAMAAQgGAHADAIIAbBwIgBAAQgFAAgFACg");
        this.shape_1.setTransform(4.1545, 488.35);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABeBLIAAgBQAAgIgFgGQgHgHgJAAQgJAAgGAHQgHAGABAIIAAABIhiAAIAAgBQAAgIgHgGQgGgHgJAAQgJAAgGAHQgGAGAAAIIAAABIgkAAQgEAAgCgCQgCgDgBgEIAAiDQABgEACgDQACgCAEAAID7AAQAEAAACACQACADABAEIAACDQgBAEgCADQgCACgEAAg");
        this.shape_2.setTransform(-1.2, 489.35);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], -174, 139.6, 165, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(0.025, 618.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-131.6, 0, 263.29999999999995, 750.4), null);


    (lib.Symbol6 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image_3();
        this.instance.setTransform(16.2, 596.35);

        this.instance_1 = new lib.Group_2();
        this.instance_1.setTransform(132.95, 294.7, 1, 1, 0, 0, 0, 7.7, 294.7);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#282828").s().p("AAQA/IgHABIgchvQgCgJAFgHIAMAAQgFAHABAHIAdBxg");
        this.shape.setTransform(138.2333, 581.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#282828").s().p("AgSA/IgBAAIAbhwQACgHgFgIIAMAAQAEAHgBAJIgcBxQgFgCgFAAg");
        this.shape_1.setTransform(127.5205, 581.475);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABaBLIAAgBQAAgIgFgHQgHgGgJAAQgJAAgHAGQgGAHAAAIIAAABIhhAAIAAgBQAAgIgHgHQgGgGgJAAQgJAAgGAGQgGAHgBAIIAAABIgfAAQgJAAAAgIIAAiFQAAgDADgDQADgCADAAID7AAQADAAADACQACADAAADIAACFQABAIgJAAg");
        this.shape_2.setTransform(132.9, 582.475);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], 174.1, 139.6, -164.9, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(131.675, 711.825);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0, -191.7, 263.4, 1035.2), null);


    (lib.Symbol1 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Image_7();
        this.instance.setTransform(15.9, 190.6);

        this.instance_1 = new lib.Group_7();
        this.instance_1.setTransform(131.5, 91.6, 1, 1, 0, 0, 0, 7.7, 91.6);
        this.instance_1.alpha = 0.8008;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#16171C").s().p("AgOBAIgFAAIAchwQABgIgFgHIAAAAIANAAQAEAIgCAIIgcBvg");
        this.shape.setTransform(126.1455, 175.15);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#16171C").s().p("AgSgvQgCgJAEgIIAAAAIAMAAQgFAGACAJIAbBwIgBAAQgFAAgFACg");
        this.shape_1.setTransform(136.8442, 175.25);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#626161", "#000000", "#2A2929"], [0, 0.729, 0.988], 0, 7.1, 0, -7.4).s().p("ABeBMIAAgBQAAgKgFgFQgHgHgJAAQgJAAgGAHQgHAFABAKIAAABIhiAAIAAgBQgBgKgFgFQgHgHgJAAQgJAAgGAHQgGAFAAAKIAAABIgkAAQgIgBgBgIIAAiEQABgKAIABID7AAQAIgBAAAKIABAAIAACEQgBAEgCACQgDADgDAAg");
        this.shape_2.setTransform(131.5, 176.25);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "#EDEDED"], [0, 1], -174.1, 139.6, 165, -147.2).s().p("A0kUlMAAAgpJMApJAAAMAAAApJg");
        this.shape_3.setTransform(131.7, 305.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0, -279.8, 263.4, 717.1), null);


    (lib.image7 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage7: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // Layer_1
        this.instance = new lib.Symbol16();
        this.instance.setTransform(131.65, 248, 1, 1, 0, 0, 0, 0, 248);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 0.1,
            rotation: 2.9976,
            x: 131.6,
            y: 248.05
        }, 11).to({
            regX: 0.2,
            regY: 248.1,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -2.497,
            x: 131.5,
            y: 248
        }, 19).to({
            regX: 0.5,
            regY: 248.2,
            rotation: 1.1971,
            x: 131.55,
            y: 248.05
        }, 14).to({
            regY: 248.1,
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: 0,
            x: 131.5,
            y: 248
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.7, -0.2, 341.2, 1072.4);


    (lib.image6 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage6: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // Layer_1
        this.instance = new lib.Symbol15();
        this.instance.setTransform(131.65, 247.8, 1, 1, 0, 0, 0, 0, 247.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 0.1,
            rotation: 2.9976,
            x: 131.6,
            y: 247.85
        }, 11).to({
            regX: 0.2,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -2.497,
            x: 131.5,
            y: 247.7
        }, 19).to({
            regX: 0.5,
            regY: 248,
            rotation: 1.1971,
            x: 131.55,
            y: 247.85
        }, 14).to({
            regY: 247.9,
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: 0,
            x: 131.5,
            y: 247.8
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.7, -0.2, 341.2, 1071.7);


    (lib.image5 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage5: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // Layer_1
        this.instance = new lib.Symbol14();
        this.instance.setTransform(131.7, 196, 1, 1, 0, 0, 0, 0, 196);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 0.1,
            rotation: 2.9976,
            x: 131.65,
            y: 195.95
        }, 11).to({
            regX: 0.2,
            regY: 196.2,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -2.497,
            x: 131.55,
            y: 196.05
        }, 19).to({
            regX: 0.5,
            rotation: 1.1971,
            x: 131.6,
            y: 196
        }, 14).to({
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: 0,
            x: 131.55
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-33.8, -0.3, 324.90000000000003, 849.4);


    (lib.image4 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage4: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // Layer_1
        this.instance = new lib.Symbol13();
        this.instance.setTransform(131.65, 26.35, 1, 1, 0, 0, 0, 0, 124.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 0.1,
            regY: 124.4,
            rotation: 2.9976,
            x: 131.6
        }, 11).to({
            regX: 0.3,
            regY: 124.2,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -2.497,
            x: 131.55
        }, 19).to({
            regX: 0.5,
            regY: 124.1,
            rotation: 1.1971,
            x: 131.5,
            y: 26.45
        }, 14).to({
            regY: 124,
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: 0,
            y: 26.4
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.4, -98.1, 302.2, 541.9);


    (lib.image3 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage3: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // Layer_1
        this.instance = new lib.Symbol12();
        this.instance.setTransform(0.1, -201.45, 1, 1, 0, 0, 0, 0, 175.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 0.1,
            regY: 175,
            rotation: 2.9976,
            y: -201.4
        }, 11).to({
            regY: 174.8,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -2.497,
            x: 0.05,
            y: -201.45
        }, 19).to({
            regY: 174.7,
            rotation: 1.1971,
            x: -0.05,
            y: -201.35
        }, 14).to({
            regY: 174.6,
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: 0
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-161.7, -376.5, 318.4, 759.3);


    (lib.image2 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage2: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // Layer_1
        this.instance = new lib.Symbol11();
        this.instance.setTransform(131.65, 73.6, 1, 1, 0, 0, 0, 0, 174.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 0.1,
            regY: 174.3,
            rotation: 2.9976,
            y: 73.55
        }, 11).to({
            regX: 0.2,
            regY: 174.2,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -2.497,
            x: 131.55,
            y: 73.6
        }, 19).to({
            regX: 0.4,
            regY: 174.1,
            rotation: 1.1971,
            x: 131.5,
            y: 73.65
        }, 14).to({
            regX: 0.5,
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: 0,
            x: 131.55,
            y: 73.7
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30, -100.9, 318, 756.6999999999999);


    (lib.image1 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage1: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // rectImageOne
        this.instance = new lib.Symbol1();
        this.instance.setTransform(0, 0, 1, 1, 0, 0, 0, 131.7, -113.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regY: -113,
            rotation: 2.9861,
            y: 0.05
        }, 11).to({
            rotation: -2.5161,
            y: 0
        }, 19).to({
            regX: 131.6,
            rotation: 1.2285,
            x: -0.15
        }, 14).to({
            rotation: 0.0026,
            y: -0.05
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-160.2, -167, 316, 723.5);


    (lib.Symbol17 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Symbol6();
        this.instance.setTransform(0.05, 0, 1, 1, 0, 0, 0, 131.7, -191.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-131.6, 0, 263.29999999999995, 1035.2), null);


    (lib.image8 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {
            playImage8: 0
        };
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_1 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(54));

        // Layer_1
        this.instance = new lib.Symbol17();
        this.instance.setTransform(822.6, 240.7, 1, 1, 0, 0, 0, 0, 240.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 0.1,
            rotation: 2.9976,
            x: 822.55,
            y: 240.8
        }, 11).to({
            regX: 0.2,
            regY: 240.8,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -2.497,
            x: 822.5,
            y: 240.7
        }, 19).to({
            regX: 0.5,
            regY: 241,
            rotation: 1.1971,
            x: 822.55,
            y: 240.85
        }, 14).to({
            regY: 240.9,
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: 0,
            x: 822.4,
            y: 240.8
        }, 9).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(649.5, -0.3, 339, 1041.3);


    // stage content:
    (lib.Lifeatsoftprodigy = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = false;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        this.actionFrames = [0];
        // timeline functions:
        this.frame_1 = function() {
            // stop main timeline

            this.stop();

            // check timeout handle

            var chkTimer;

            var inview = false;

            // only check visibility when scrolling has stopped

            function scheduleVisCheck() {

                clearTimeout(chkTimer);

                chkTimer = setTimeout(checkCanvasVis, 250);

            }

            // play main timeline when canvas has scrolled (vertically) into view

            function checkCanvasVis() {

                var rect = canvas.getBoundingClientRect();

                if (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 150 || (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 150)) {

                    if (inview == false) exportRoot.play(0);

                    inview = true;

                } else {

                    inview = false;

                }

            }

            // hook event listener to window scrolling

            window.addEventListener("scroll", scheduleVisCheck);

            // just in case canvas starts already visible

            checkCanvasVis();

            let root = this;
            var frequency = 3;
            stage.enableMouseOver(frequency);

            this.image1.addEventListener("mouseover", playImage1);

            function playImage1() {

                root.image1.gotoAndPlay("playRed");


                setTimeout(function() {

                    root.image1.addEventListener("click", image1);

                }, 500);

            }

            this.image2.addEventListener("mouseover", playImage2);

            function playImage2() {

                root.image2.gotoAndPlay("playRed");


                setTimeout(function() {

                    root.image2.addEventListener("click", image2);

                }, 500);

            }


            this.image3.addEventListener("mouseover", playImage3);

            function playImage3() {
                root.image3.gotoAndPlay("playRed");

                setTimeout(function() {

                    root.image3.addEventListener("click", image3);

                }, 500);

            }

            this.image4.addEventListener("mouseover", playImage4);

            function playImage4() {
                root.image4.gotoAndPlay("playRed");

                setTimeout(function() {

                    root.image4.addEventListener("click", image4);

                }, 500);

            }

            this.image5.addEventListener("mouseover", playImage5);

            function playImage5() {

                root.image5.gotoAndPlay("playRed");


                setTimeout(function() {

                    root.image5.addEventListener("click", image5);

                }, 500);

            }

            this.image6.addEventListener("mouseover", playImage6);

            function playImage6() {

                root.image6.gotoAndPlay("playRed");


                setTimeout(function() {

                    root.image6.addEventListener("click", image6);

                }, 500);

            }

            this.image7.addEventListener("mouseover", playImage7);

            function playImage7() {
                root.image7.gotoAndPlay("playRed");

                setTimeout(function() {

                    root.image7.addEventListener("click", image7);

                }, 500);

            }

            this.image8.addEventListener("mouseover", playImage8);

            function playImage8() {
                root.image8.gotoAndPlay("playRed");

                setTimeout(function() {

                    root.image8.addEventListener("click", image8);

                }, 500);

            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(130));

        // Frame_3
        this.image3 = new lib.image3();
        this.image3.name = "image3";
        this.image3.setTransform(661.55, -492.7);
        this.image3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.image3).wait(10).to({
            _off: false
        }, 0).wait(1).to({
            regX: -2.5,
            regY: -0.2,
            x: 659.05,
            y: -468.75
        }, 0).wait(1).to({
            y: -444.6
        }, 0).wait(1).to({
            y: -420.45
        }, 0).wait(1).to({
            y: -396.3
        }, 0).wait(1).to({
            y: -372.15
        }, 0).wait(1).to({
            y: -348
        }, 0).wait(1).to({
            y: -323.85
        }, 0).wait(1).to({
            y: -299.7
        }, 0).wait(1).to({
            y: -275.55
        }, 0).wait(1).to({
            y: -251.4
        }, 0).wait(1).to({
            y: -227.25
        }, 0).wait(1).to({
            y: -203.1
        }, 0).wait(1).to({
            y: -178.95
        }, 0).wait(1).to({
            y: -154.85
        }, 0).wait(1).to({
            y: -130.7
        }, 0).wait(1).to({
            y: -106.55
        }, 0).wait(1).to({
            y: -82.4
        }, 0).wait(1).to({
            y: -58.25
        }, 0).wait(1).to({
            y: -34.1
        }, 0).wait(1).to({
            y: -9.95
        }, 0).wait(1).to({
            y: 14.15
        }, 0).wait(1).to({
            y: 38.3
        }, 0).wait(1).to({
            y: 62.45
        }, 0).wait(1).to({
            y: 86.6
        }, 0).wait(1).to({
            y: 110.75
        }, 0).wait(1).to({
            y: 134.9
        }, 0).wait(1).to({
            y: 159.05
        }, 0).wait(1).to({
            y: 183.15
        }, 0).wait(1).to({
            y: 207.3
        }, 0).wait(1).to({
            y: 231.45
        }, 0).wait(1).to({
            y: 255.6
        }, 0).wait(1).to({
            y: 279.75
        }, 0).wait(1).to({
            y: 303.9
        }, 0).wait(1).to({
            y: 328.05
        }, 0).wait(1).to({
            y: 352.2
        }, 0).wait(1).to({
            y: 376.35
        }, 0).wait(1).to({
            y: 367.75
        }, 0).wait(1).to({
            y: 359.2
        }, 0).wait(1).to({
            y: 350.6
        }, 0).wait(1).to({
            y: 342.05
        }, 0).wait(1).to({
            y: 333.45
        }, 0).wait(1).to({
            y: 324.9
        }, 0).wait(1).to({
            y: 316.3
        }, 0).wait(1).to({
            y: 307.75
        }, 0).wait(1).to({
            y: 299.15
        }, 0).wait(1).to({
            y: 290.6
        }, 0).wait(1).to({
            y: 282
        }, 0).wait(1).to({
            y: 273.45
        }, 0).wait(72));

        // Frame_1
        this.image1 = new lib.image1();
        this.image1.name = "image1";
        this.image1.setTransform(172.5, -604.7);

        this.timeline.addTween(cjs.Tween.get(this.image1).wait(1).to({
            regX: -2.2,
            regY: 191.5,
            x: 170.3,
            y: -397
        }, 0).wait(1).to({
            y: -380.85
        }, 0).wait(1).to({
            y: -364.7
        }, 0).wait(1).to({
            y: -348.55
        }, 0).wait(1).to({
            y: -332.4
        }, 0).wait(1).to({
            y: -316.25
        }, 0).wait(1).to({
            y: -300.1
        }, 0).wait(1).to({
            y: -283.95
        }, 0).wait(1).to({
            y: -267.8
        }, 0).wait(1).to({
            y: -251.6
        }, 0).wait(1).to({
            y: -235.45
        }, 0).wait(1).to({
            y: -219.3
        }, 0).wait(1).to({
            y: -203.15
        }, 0).wait(1).to({
            y: -187
        }, 0).wait(1).to({
            y: -170.85
        }, 0).wait(1).to({
            y: -154.7
        }, 0).wait(1).to({
            y: -138.55
        }, 0).wait(1).to({
            y: -122.4
        }, 0).wait(1).to({
            y: -106.2
        }, 0).wait(1).to({
            y: -90.05
        }, 0).wait(1).to({
            y: -73.9
        }, 0).wait(1).to({
            y: -57.75
        }, 0).wait(1).to({
            y: -41.6
        }, 0).wait(1).to({
            y: -25.45
        }, 0).wait(1).to({
            y: -9.3
        }, 0).wait(1).to({
            y: 6.85
        }, 0).wait(1).to({
            y: 23
        }, 0).wait(1).to({
            y: 39.2
        }, 0).wait(1).to({
            y: 55.35
        }, 0).wait(1).to({
            y: 71.5
        }, 0).wait(1).to({
            y: 87.65
        }, 0).wait(1).to({
            y: 103.8
        }, 0).wait(1).to({
            y: 119.95
        }, 0).wait(1).to({
            y: 136.1
        }, 0).wait(1).to({
            y: 152.25
        }, 0).wait(1).to({
            y: 168.4
        }, 0).wait(1).to({
            y: 184.55
        }, 0).wait(1).to({
            y: 200.7
        }, 0).wait(1).to({
            y: 216.85
        }, 0).wait(1).to({
            y: 205.25
        }, 0).wait(1).to({
            y: 193.7
        }, 0).wait(1).to({
            y: 182.15
        }, 0).wait(1).to({
            y: 170.55
        }, 0).wait(1).to({
            y: 159
        }, 0).wait(1).to({
            y: 147.4
        }, 0).wait(1).to({
            y: 135.8
        }, 0).wait(1).to({
            y: 124.25
        }, 0).wait(1).to({
            y: 112.65
        }, 0).wait(1).to({
            y: 101.1
        }, 0).wait(1).to({
            y: 89.5
        }, 0).wait(1).to({
            y: 77.9
        }, 0).wait(79));

        // Frame_2
        this.image2 = new lib.image2();
        this.image2.name = "image2";
        this.image2.setTransform(334.4, -488.9, 1, 1, 0, 0, 0, 131.7, 324.8);
        this.image2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.image2).wait(19).to({
            _off: false
        }, 0).wait(1).to({
            regX: 129,
            regY: 274.2,
            x: 331.7,
            y: -512
        }, 0).wait(1).to({
            y: -484.5
        }, 0).wait(1).to({
            y: -457
        }, 0).wait(1).to({
            y: -429.5
        }, 0).wait(1).to({
            y: -402.05
        }, 0).wait(1).to({
            y: -374.55
        }, 0).wait(1).to({
            y: -347.05
        }, 0).wait(1).to({
            y: -319.55
        }, 0).wait(1).to({
            y: -292.1
        }, 0).wait(1).to({
            y: -264.6
        }, 0).wait(1).to({
            y: -237.1
        }, 0).wait(1).to({
            y: -209.6
        }, 0).wait(1).to({
            y: -182.15
        }, 0).wait(1).to({
            y: -154.65
        }, 0).wait(1).to({
            y: -127.15
        }, 0).wait(1).to({
            y: -99.65
        }, 0).wait(1).to({
            y: -72.15
        }, 0).wait(1).to({
            y: -44.7
        }, 0).wait(1).to({
            y: -17.2
        }, 0).wait(1).to({
            y: 10.3
        }, 0).wait(1).to({
            y: 37.8
        }, 0).wait(1).to({
            y: 65.25
        }, 0).wait(1).to({
            y: 92.75
        }, 0).wait(1).to({
            y: 120.25
        }, 0).wait(1).to({
            y: 147.75
        }, 0).wait(1).to({
            y: 175.2
        }, 0).wait(1).to({
            y: 202.7
        }, 0).wait(1).to({
            y: 230.2
        }, 0).wait(1).to({
            y: 257.7
        }, 0).wait(1).to({
            y: 285.15
        }, 0).wait(1).to({
            y: 312.6
        }, 0).wait(1).to({
            y: 340.1
        }, 0).wait(1).to({
            y: 367.6
        }, 0).wait(1).to({
            y: 359.15
        }, 0).wait(1).to({
            y: 350.75
        }, 0).wait(1).to({
            y: 342.3
        }, 0).wait(1).to({
            y: 333.85
        }, 0).wait(1).to({
            y: 325.45
        }, 0).wait(1).to({
            y: 317
        }, 0).wait(1).to({
            y: 308.55
        }, 0).wait(1).to({
            y: 300.15
        }, 0).wait(1).to({
            y: 291.7
        }, 0).wait(1).to({
            y: 283.25
        }, 0).wait(1).to({
            y: 274.85
        }, 0).wait(67));

        // Frame_4
        this.image4 = new lib.image4();
        this.image4.name = "image4";
        this.image4.setTransform(824.35, -304.4, 1, 1, 0, 0, 0, 131.7, 218.7);
        this.image4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.image4).wait(14).to({
            _off: false
        }, 0).wait(1).to({
            regX: 129.6,
            regY: 169.5,
            x: 822.25,
            y: -335.45
        }, 0).wait(1).to({
            y: -317.3
        }, 0).wait(1).to({
            y: -299.15
        }, 0).wait(1).to({
            y: -281
        }, 0).wait(1).to({
            y: -262.85
        }, 0).wait(1).to({
            y: -244.7
        }, 0).wait(1).to({
            y: -226.6
        }, 0).wait(1).to({
            y: -208.45
        }, 0).wait(1).to({
            y: -190.3
        }, 0).wait(1).to({
            y: -172.15
        }, 0).wait(1).to({
            y: -154
        }, 0).wait(1).to({
            y: -135.85
        }, 0).wait(1).to({
            y: -117.7
        }, 0).wait(1).to({
            y: -99.6
        }, 0).wait(1).to({
            y: -81.45
        }, 0).wait(1).to({
            y: -63.3
        }, 0).wait(1).to({
            y: -45.15
        }, 0).wait(1).to({
            y: -27
        }, 0).wait(1).to({
            y: -8.85
        }, 0).wait(1).to({
            y: 9.3
        }, 0).wait(1).to({
            y: 27.4
        }, 0).wait(1).to({
            y: 45.55
        }, 0).wait(1).to({
            y: 63.7
        }, 0).wait(1).to({
            y: 81.85
        }, 0).wait(1).to({
            y: 100
        }, 0).wait(1).to({
            y: 118.15
        }, 0).wait(1).to({
            y: 136.3
        }, 0).wait(1).to({
            y: 154.4
        }, 0).wait(1).to({
            y: 172.5
        }, 0).wait(1).to({
            y: 190.65
        }, 0).wait(1).to({
            y: 208.8
        }, 0).wait(1).to({
            y: 226.95
        }, 0).wait(1).to({
            y: 245.1
        }, 0).wait(1).to({
            y: 263.25
        }, 0).wait(1).to({
            y: 255.6
        }, 0).wait(1).to({
            y: 247.95
        }, 0).wait(1).to({
            y: 240.3
        }, 0).wait(1).to({
            y: 232.65
        }, 0).wait(1).to({
            y: 225
        }, 0).wait(1).to({
            y: 217.35
        }, 0).wait(1).to({
            y: 209.7
        }, 0).wait(1).to({
            y: 202.05
        }, 0).wait(1).to({
            y: 194.4
        }, 0).wait(1).to({
            y: 186.75
        }, 0).wait(1).to({
            y: 179.1
        }, 0).wait(1).to({
            y: 171.45
        }, 0).wait(70));

        // Frame_5
        this.image5 = new lib.image5();
        this.image5.name = "image5";
        this.image5.setTransform(149.85, -644.8, 1, 1, 0, 0, 0, 131.7, 421.6);
        this.image5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.image5).wait(20).to({
            _off: false
        }, 0).wait(1).to({
            regX: 128.6,
            regY: 421.2,
            x: 146.75,
            y: -610.2
        }, 0).wait(1).to({
            y: -575.25
        }, 0).wait(1).to({
            y: -540.3
        }, 0).wait(1).to({
            y: -505.35
        }, 0).wait(1).to({
            y: -470.4
        }, 0).wait(1).to({
            y: -435.45
        }, 0).wait(1).to({
            y: -400.5
        }, 0).wait(1).to({
            y: -365.55
        }, 0).wait(1).to({
            y: -330.6
        }, 0).wait(1).to({
            y: -295.65
        }, 0).wait(1).to({
            y: -260.7
        }, 0).wait(1).to({
            y: -225.75
        }, 0).wait(1).to({
            y: -190.8
        }, 0).wait(1).to({
            y: -155.85
        }, 0).wait(1).to({
            y: -120.9
        }, 0).wait(1).to({
            y: -85.9
        }, 0).wait(1).to({
            y: -50.95
        }, 0).wait(1).to({
            y: -16
        }, 0).wait(1).to({
            y: 18.95
        }, 0).wait(1).to({
            y: 53.9
        }, 0).wait(1).to({
            y: 88.85
        }, 0).wait(1).to({
            y: 123.8
        }, 0).wait(1).to({
            y: 158.75
        }, 0).wait(1).to({
            y: 193.7
        }, 0).wait(1).to({
            y: 228.65
        }, 0).wait(1).to({
            y: 263.6
        }, 0).wait(1).to({
            y: 298.55
        }, 0).wait(1).to({
            y: 333.5
        }, 0).wait(1).to({
            y: 368.45
        }, 0).wait(1).to({
            y: 403.4
        }, 0).wait(1).to({
            y: 438.35
        }, 0).wait(1).to({
            y: 473.3
        }, 0).wait(1).to({
            y: 508.25
        }, 0).wait(1).to({
            y: 500.4
        }, 0).wait(1).to({
            y: 492.55
        }, 0).wait(1).to({
            y: 484.7
        }, 0).wait(1).to({
            y: 476.85
        }, 0).wait(1).to({
            y: 469
        }, 0).wait(1).to({
            y: 461.15
        }, 0).wait(1).to({
            y: 453.3
        }, 0).wait(1).to({
            y: 445.45
        }, 0).wait(1).to({
            y: 437.6
        }, 0).wait(1).to({
            y: 429.75
        }, 0).wait(1).to({
            y: 421.95
        }, 0).wait(66));

        // Frame_6
        this.image6 = new lib.image6();
        this.image6.name = "image6";
        this.image6.setTransform(336.15, -665.2, 1, 1, 0, 0, 0, 131.7, 532.8);
        this.image6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.image6).wait(25).to({
            _off: false
        }, 0).wait(1).to({
            regX: 127.9,
            regY: 532.5,
            x: 331.2,
            y: -623.35
        }, 0).wait(1).to({
            x: 330.55,
            y: -581.2
        }, 0).wait(1).to({
            x: 330.6,
            y: -539.05
        }, 0).wait(1).to({
            y: -496.9
        }, 0).wait(1).to({
            y: -454.75
        }, 0).wait(1).to({
            y: -412.65
        }, 0).wait(1).to({
            y: -370.5
        }, 0).wait(1).to({
            y: -328.35
        }, 0).wait(1).to({
            y: -286.2
        }, 0).wait(1).to({
            y: -244.05
        }, 0).wait(1).to({
            y: -201.9
        }, 0).wait(1).to({
            y: -159.8
        }, 0).wait(1).to({
            y: -117.65
        }, 0).wait(1).to({
            y: -75.5
        }, 0).wait(1).to({
            y: -33.35
        }, 0).wait(1).to({
            y: 8.8
        }, 0).wait(1).to({
            y: 50.9
        }, 0).wait(1).to({
            y: 93.05
        }, 0).wait(1).to({
            y: 135.2
        }, 0).wait(1).to({
            y: 177.35
        }, 0).wait(1).to({
            y: 219.5
        }, 0).wait(1).to({
            y: 261.65
        }, 0).wait(1).to({
            y: 303.75
        }, 0).wait(1).to({
            y: 345.9
        }, 0).wait(1).to({
            y: 388.05
        }, 0).wait(1).to({
            y: 430.2
        }, 0).wait(1).to({
            y: 472.35
        }, 0).wait(1).to({
            y: 514.45
        }, 0).wait(1).to({
            y: 556.55
        }, 0).wait(1).to({
            y: 598.7
        }, 0).wait(1).to({
            y: 640.85
        }, 0).wait(1).to({
            y: 631.05
        }, 0).wait(1).to({
            y: 621.3
        }, 0).wait(1).to({
            y: 611.5
        }, 0).wait(1).to({
            y: 601.7
        }, 0).wait(1).to({
            y: 591.95
        }, 0).wait(1).to({
            y: 582.15
        }, 0).wait(1).to({
            y: 572.35
        }, 0).wait(1).to({
            y: 562.6
        }, 0).wait(1).to({
            y: 552.8
        }, 0).wait(1).to({
            y: 543
        }, 0).wait(1).to({
            y: 533.25
        }, 0).wait(63));

        // Frame_7
        this.image7 = new lib.image7();
        this.image7.name = "image7";
        this.image7.setTransform(624.6, -615.7, 1, 1, 0, 0, 0, 131.7, 533.2);
        this.image7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.image7).wait(30).to({
            _off: false
        }, 0).wait(1).to({
            regX: 127.9,
            regY: 532.9,
            x: 644.9,
            y: -575.75
        }, 0).wait(1).to({
            x: 657.9,
            y: -535.5
        }, 0).wait(1).to({
            y: -495.3
        }, 0).wait(1).to({
            y: -455.05
        }, 0).wait(1).to({
            y: -414.85
        }, 0).wait(1).to({
            y: -374.6
        }, 0).wait(1).to({
            y: -334.4
        }, 0).wait(1).to({
            y: -294.15
        }, 0).wait(1).to({
            y: -253.95
        }, 0).wait(1).to({
            y: -213.7
        }, 0).wait(1).to({
            y: -173.5
        }, 0).wait(1).to({
            y: -133.25
        }, 0).wait(1).to({
            y: -93.05
        }, 0).wait(1).to({
            y: -52.8
        }, 0).wait(1).to({
            y: -12.6
        }, 0).wait(1).to({
            y: 27.65
        }, 0).wait(1).to({
            y: 67.9
        }, 0).wait(1).to({
            y: 108.1
        }, 0).wait(1).to({
            y: 148.35
        }, 0).wait(1).to({
            y: 188.55
        }, 0).wait(1).to({
            y: 228.8
        }, 0).wait(1).to({
            y: 269
        }, 0).wait(1).to({
            y: 309.25
        }, 0).wait(1).to({
            y: 349.45
        }, 0).wait(1).to({
            y: 389.7
        }, 0).wait(1).to({
            y: 429.9
        }, 0).wait(1).to({
            y: 470.15
        }, 0).wait(1).to({
            y: 510.35
        }, 0).wait(1).to({
            y: 550.55
        }, 0).wait(1).to({
            y: 590.8
        }, 0).wait(1).to({
            y: 585
        }, 0).wait(1).to({
            y: 579.2
        }, 0).wait(1).to({
            y: 573.4
        }, 0).wait(1).to({
            y: 567.6
        }, 0).wait(1).to({
            y: 561.85
        }, 0).wait(1).to({
            y: 556.05
        }, 0).wait(1).to({
            y: 550.25
        }, 0).wait(1).to({
            y: 544.45
        }, 0).wait(1).to({
            y: 538.65
        }, 0).wait(1).to({
            y: 532.9
        }, 0).wait(60));

        // Frame_8
        this.image8 = new lib.image8();
        this.image8.name = "image8";
        this.image8.setTransform(495.5, -369.4, 1, 1, 0, 0, 0, 477.2, 780.6);
        this.image8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.image8).wait(14).to({
            _off: false
        }, 0).wait(1).to({
            regX: 819,
            regY: 517.3,
            x: 837.2,
            y: -602.3
        }, 0).wait(1).to({
            x: 837.15,
            y: -571.95
        }, 0).wait(1).to({
            y: -541.6
        }, 0).wait(1).to({
            y: -511.2
        }, 0).wait(1).to({
            y: -480.85
        }, 0).wait(1).to({
            y: -450.5
        }, 0).wait(1).to({
            y: -420.15
        }, 0).wait(1).to({
            y: -389.75
        }, 0).wait(1).to({
            y: -359.4
        }, 0).wait(1).to({
            y: -329.05
        }, 0).wait(1).to({
            y: -298.65
        }, 0).wait(1).to({
            y: -268.3
        }, 0).wait(1).to({
            y: -237.95
        }, 0).wait(1).to({
            y: -207.6
        }, 0).wait(1).to({
            y: -177.2
        }, 0).wait(1).to({
            y: -146.85
        }, 0).wait(1).to({
            y: -116.5
        }, 0).wait(1).to({
            y: -86.15
        }, 0).wait(1).to({
            y: -55.75
        }, 0).wait(1).to({
            y: -25.4
        }, 0).wait(1).to({
            y: 4.95
        }, 0).wait(1).to({
            y: 35.35
        }, 0).wait(1).to({
            y: 65.7
        }, 0).wait(1).to({
            y: 96.05
        }, 0).wait(1).to({
            y: 126.4
        }, 0).wait(1).to({
            y: 156.8
        }, 0).wait(1).to({
            y: 187.15
        }, 0).wait(1).to({
            y: 217.5
        }, 0).wait(1).to({
            y: 247.9
        }, 0).wait(1).to({
            y: 278.25
        }, 0).wait(1).to({
            y: 308.6
        }, 0).wait(1).to({
            y: 338.95
        }, 0).wait(1).to({
            y: 369.35
        }, 0).wait(1).to({
            y: 399.7
        }, 0).wait(1).to({
            y: 393.65
        }, 0).wait(1).to({
            y: 387.55
        }, 0).wait(1).to({
            y: 381.5
        }, 0).wait(1).to({
            y: 375.45
        }, 0).wait(1).to({
            y: 369.35
        }, 0).wait(1).to({
            y: 363.3
        }, 0).wait(1).to({
            y: 357.25
        }, 0).wait(1).to({
            y: 351.2
        }, 0).wait(1).to({
            y: 345.1
        }, 0).wait(1).to({
            y: 339.05
        }, 0).wait(1).to({
            y: 333
        }, 0).wait(1).to({
            y: 326.9
        }, 0).wait(70));

        this._renderFirstFrame();

    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(518.2, -603, 454.4, 1777);
    // library properties:
    lib.properties = {
        id: 'A30A45C9E4A6574685344228A70F1A88',
        width: 1000,
        height: 1190,
        fps: 29,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image.jpg",
                id: "Image"
            },
            {
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image_1.jpg",
                id: "Image_1"
            },
            {
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image_2.jpg",
                id: "Image_2"
            },
            {
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image_3.jpg",
                id: "Image_3"
            },
            {
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image_4.jpg",
                id: "Image_4"
            },
            {
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image_5.jpg",
                id: "Image_5"
            },
            {
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image_6.jpg",
                id: "Image_6"
            },
            {
                src: "https://softprodigy.com/wp-content/themes/twenty-twenty-one-child/canvas/images/Image_7.jpg",
                id: "Image_7"
            }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['A30A45C9E4A6574685344228A70F1A88'] = {
        getStage: function() {
            return exportRoot.stage;
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }


    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }

        }
    }
    an.handleSoundStreamOnTick = function(event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused || stageChild.ignorePause) {
                stageChild.syncStreamSounds();
            }
        }
    }
    an.handleFilterCache = function(event) {
        if (!event.paused) {
            var target = event.target;
            if (target) {
                if (target.filterCacheList) {
                    for (var index = 0; index < target.filterCacheList.length; index++) {
                        var cacheInst = target.filterCacheList[index];
                        if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                            cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                        }
                    }
                }
            }
        }
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;

// get form phone field

//  remove header inner class from 404 page 
if (document.body.classList.contains('error404')) {
    document.querySelector('.header').classList.remove('header-inner');
}


function twentytwentyoneCollapseMenuOnClickOutside(event) {
    if (!document.getElementById('site-navigation').contains(event.target)) {
        document.getElementById('site-navigation').querySelectorAll('.sub-menu-toggle').forEach(function(button) {
            button.setAttribute('aria-expanded', 'false');
        });
    }
}

var fields = document.getElementsByClassName('iti__active');

const code = document.getElementById("phone");
if (code) {
    code.addEventListener("change", (e) => {
        var result = 0;
        for (var i = 0; i < fields.length; i++) {
            result += parseInt(fields[i].getAttribute('data-dial-code'));
        }
        const val = document.getElementById("phone").value;
        const phone = document.getElementById("phone").value;

        form = document.getElementById("form");
        var y = document.createElement("input");
        y.setAttribute("type", "hidden");
        y.setAttribute("placeholder", "Name");
        y.setAttribute("Name", "full_phone");
        y.setAttribute("value", "+" + result + phone);
        form.appendChild(y);
    });
}


var canvastech, stageeeee, exportRootCustom, anim_container, dom_overlay_container22, fnStartAnimation;


var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function life() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("A30A45C9E4A6574685344228A70F1A88");
    var life = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt) {
        handleFileLoad(evt, comp)
    });
    loader.addEventListener("complete", function(evt) {
        handleComplete(evt, comp)
    });
    var life = comp.getLibrary();
    loader.loadManifest(life.properties.manifest);
}

function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var life = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = life.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            "images": [queue.getResult(ssMetadata[i].name)],
            "frames": ssMetadata[i].frames
        })
    }
    exportRoot = new life.Lifeatsoftprodigy();
    stage = new life.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = life.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(life.properties.id);
    fnStartAnimation();
}

//captcha value
/*window.onload = function () {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if ($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }

};
*/
// phone input validation
var input = document.querySelector("#phone"),
    errorMsg = document.querySelector("#error-msg"),
    validMsg = document.querySelector("#valid-msg");
errorIcon = document.querySelector("#error-icon");
var errorMap = ["Phone number is Invalid ", "Invalid country code", "The phone number is Too short", "The phone number is Too long", "The phone number is not valid"];
var iti = window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function(success) {
        // Get your api-key at https://ipdata.co/
        fetch("https://api.ipdata.co/?api-key=f94788538dc5171568787523ef69608c5809b667e70044b64a8a7fe7")
            .then(function(response) {
                if (!response.ok) return success("");
                return response.json();
            })
            .then(function(ipdata) {
                success(ipdata.country_code);
            });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});


// Form validation code
function ValidationEvent() {
    document.getElementById('form-spinner').style.visibility = 'visible';
    var email = document.forms["form"]["vemail"].value
    var name = document.forms["form"]["vname"].value
    var phone = document.forms["form"]["phone"].value
    var comment = document.forms["form"]["msg"].value
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var regex = /^[a-zA-Z\s]+$/;
    var reg = /^[A-Za-z]+/;
    // var recaptchaRes = grecaptcha.getResponse();
    var comment = document.forms["form"]["msg"].value
    var phoneValue = document.getElementById('phone');
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    outlookRegex = /^[\w-.]+@(hotmail|live|outlook)\.[a-z]{2,}$/i;


    if (name == "" && email == "" && phone == "") {
        document.getElementById('error').style.display = 'block';
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errorphone').style.display = 'block';
        document.getElementById('error').innerHTML = 'Name is required!';
        document.getElementById('errormail').innerHTML = ' Email is required!';
        document.getElementById('errorphone').innerHTML = 'Phone Number is required!';
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;
    }
    if (name != "" && email == "" && phone == "") {
        document.getElementById('error').style.display = 'none';
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errorphone').style.display = 'block';
        document.getElementById('error').innerHTML = '';
        document.getElementById('errormail').innerHTML = ' Email is required!';
        document.getElementById('errorphone').innerHTML = 'Phone Number is required!';
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;
    }
    if (name != "" && email != "" && phone == "") {
        document.getElementById('error').style.display = 'none';
        document.getElementById('errormail').style.display = 'none';
        document.getElementById('errorphone').style.display = 'block';
        document.getElementById('error').innerHTML = '';
        document.getElementById('errormail').innerHTML = '';
        document.getElementById('errorphone').innerHTML = 'Phone Number is required!';
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;
    }
    if (name == "" && email != "" && phone != "") {
        document.getElementById('error').style.display = 'block';
        document.getElementById('errormail').style.display = 'none';
        document.getElementById('errorphone').style.display = 'none';
        document.getElementById('error').innerHTML = 'Name is required!';
        document.getElementById('errormail').innerHTML = '';
        document.getElementById('errorphone').innerHTML = '';
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;
    }
    if (name != "" && email != "" && phone == "") {
        document.getElementById('error').style.display = 'none';
        document.getElementById('errormail').style.display = 'none';
        document.getElementById('errorphone').style.display = 'block';
        document.getElementById('error').innerHTML = '';
        document.getElementById('errormail').innerHTML = '';
        document.getElementById('errorphone').innerHTML = 'Phone Number is required!';
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;

    }
    if (name != "" && email == "" && phone != "") {
        document.getElementById('error').style.display = 'none';
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errorphone').style.display = 'none';
        document.getElementById('error').innerHTML = '';
        document.getElementById('errormail').innerHTML = 'Email is required!';
        document.getElementById('errorphone').innerHTML = '';
        return false;

    }
    if (name != "" && email == "" && phone != "") {
        document.getElementById('error').style.display = 'none';
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errorphone').style.display = 'none';
        document.getElementById('error').innerHTML = '';
        document.getElementById('errormail').innerHTML = 'Email is required!';
        document.getElementById('errorphone').innerHTML = '';
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;

    }
    if (name == "" && email != "" && phone != "") {
        document.getElementById('error').style.display = 'block';
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errorphone').style.display = 'none';
        document.getElementById('error').innerHTML = 'Name is required!';
        document.getElementById('errormail').innerHTML = 'Email is required!';
        document.getElementById('errorphone').innerHTML = '';
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;
    }
    if (email != "") {
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            document.getElementById('errormail').style.display = 'block';
            document.getElementById('errormail').innerHTML = 'Please enter a valid email address!';
            document.getElementById('form-spinner').style.visibility = 'hidden';
            return false;
        }
    }
    if (email != "") {
        isOutlook = outlookRegex.test(email);
        if (isOutlook) {
            document.getElementById('errormail').style.display = 'block';
            document.getElementById('errormail').innerHTML = 'This mail domain is not valid!';
            document.getElementById('form-spinner').style.visibility = 'hidden';

            return false;
        }

    }
    if (name != "") {
        if (regex.test(name) === false) {
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = 'Please enter a valid name!';
            document.getElementById('form-spinner').style.visibility = 'hidden';
            return false;
        }
    }
    if (name != "") {
        if (reg.test(name) === false) {
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = 'Please remove space before name!';
            document.getElementById('form-spinner').style.visibility = 'hidden';
            return false;
        }
    }
    if (comment != '' && comment.length <= 10) {
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;
    }

    if (phoneValue.classList.contains('error')) {
        document.getElementById('form-spinner').style.visibility = 'hidden';
        return false;
    }
}

function emailCheckoutlook() {
    var email = document.forms["form"]["vemail"].value;
    var outlookemail = email.includes("outlook.com");
    if (outlookemail == true) {
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errormail').innerHTML = 'outlook email not allowed!';
        return false;
    }
}

function emailCheck() {
    var email = document.forms["form"]["vemail"].value
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errormail').innerHTML = 'Please enter a valid email address!';
        return false;
    } else {
        document.getElementById('errormail').style.display = 'none';
        document.getElementById('errormail').innerHTML = '';

    }
}

function namecheck() {
    var name = document.forms["form"]["vname"].value
    var regex = /^[a-zA-Z\s]+$/;
    var reg = /^[A-Za-z]+/;
    if (regex.test(name) === false) {
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = 'Please enter a valid name!';
        return false;
    } else {
        document.getElementById('error').style.display = 'none';
        document.getElementById('error').innerHTML = '';

    }

    if (reg.test(name) === false) {
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = 'Please remove space before name!';
        return false;
    } else {
        document.getElementById('error').style.display = 'none';
        document.getElementById('error').innerHTML = '';

    }
}

function phonecheck() {
    document.getElementById('errorphone').style.display = 'none';
    reset();
    if (input.value.trim()) {
        if (iti.isValidNumber()) {
            validMsg.classList.remove("hide");
            return false;
        } else {
            input.classList.add("error");
            var errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
            errorIcon.classList.remove("hide");
            return false;
        }
    }
}

function comentcheck() {
    var comment = document.forms["form"]["msg"].value;
    var regx = /\s+/g;
    var reg = /^[A-Za-z]+/;
    if (comment.length <= 10) {
        document.getElementById('errorcomment').style.display = 'block';
        document.getElementById('errorcomment').innerHTML = 'Message length should be more than 10';
        return false;
    } else if (comment.length >= 200) {
        document.getElementById('errorcomment').style.display = 'block';
        document.getElementById('errorcomment').innerHTML = 'Message length should be less than 200';
        return false;
    } else {
        document.getElementById('errorcomment').style.display = 'none';
        document.getElementById('errorcomment').innerHTML = '';

    }
    if (reg.test(comment) === false) {
        document.getElementById('errorcomment').style.display = 'block';
        document.getElementById('errorcomment').innerHTML = 'Please remove space before message!';
        return false;
    } else {
        document.getElementById('error').style.display = 'none';
        document.getElementById('error').innerHTML = '';

    }
}

function emaildownCheck() {
    var email = document.forms["form"]["vemail"].value
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById('errormail').style.display = 'block';
        document.getElementById('errormail').innerHTML = 'Please enter a valid email address!';
        return false;
    } else {
        document.getElementById('errormail').style.display = 'none';
        document.getElementById('errormail').innerHTML = '';

    }
}

var reset = function() {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
    errorIcon.classList.add("hide");
};



// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);



// function setResponse(response) {
//     document.getElementById('captcha-response').value = response;
// }
jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll > 0) {
        jQuery("body").addClass("header-fixed");
    } else {
        jQuery("body").removeClass("header-fixed");
    }
});

var swiper = new Swiper(".mySwiper", {
    speed: 900,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".video-testimonail, .text-testimonail", {
    loop: true,
    autoplay: {
        delay: 5000, // 3 seconds delay between slides
        disableOnInteraction: false, // Continues autoplay after user interaction
    },
    navigation: {
        nextEl: ".swiper-button-next-test",
        prevEl: ".swiper-button-prev-test",
    },
});
var swiper = new Swiper(".howExcute2", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".howExcute", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

/* FOR MOBILE*/
(function() {
    "use strict";
    const breakpoint = window.matchMedia("(min-width:768px)");
    let mySwiper;
    const breakpointChecker = function() {
        if (breakpoint.matches === true) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };
    const enableSwiper = function() {
        var menu = ["Slide 1", "Slide 2", "Slide 3"];
        mySwiper = new Swiper(".swiper-container, .swiper-logo", {
            loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
            centeredSlides: true,
            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            paginationClickable: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + menu[index] + "</span>";
                },
            },
        });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
})(); /* IIFE end */

AOS.init({
    duration: 1200,
});

function openModal(modal, clicked_id) {
    var modal = document.getElementById(modal);
    modal.style.display = "block";
    var span = document.querySelector("#" + modal.id + " .close");
    var pattern = /^((http|https|ftp):\/\/)/;
    if (!pattern.test(clicked_id)) {
        document.getElementById("frame").style.display = "block";
        document.getElementById("video-short").style.display = "none";
        var scrVal = "https://www.youtube.com/embed/" + clicked_id;
        $("#frame").attr("src", scrVal);
    } else {
        document.getElementById("frame").style.display = "none";
        document.getElementById("video-short").style.display = "block";
        $("#video-short").find('source').attr("src", clicked_id);
        $("#video-short").attr("src", clicked_id);
    }
    span.onclick = function() {
        modal.style.display = "none";
        $("#video-short").find('source').attr("src", '');
        $("#video-short").attr("src", '');
        $("#frame").attr("src", '');

    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $("#video-short").find('source').attr("src", '');
            $("#video-short").attr("src", '');
            $("#frame").attr("src", '');
        }
    };
}
// for gototopbtn

window.onscroll = function(ev) {
    if (this.pageYOffset > 300) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// port slider
var swiper = new Swiper(".project-swiper", {
    direction: "horizontal",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            direction: "horizontal",
            slidesPerView: 1.1,
            spaceBetween: 5,
        },
        600: {
            direction: "horizontal",
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

/* tab fuction service page*/
(function() {
    "use strict";

    const keyboardSupport = function(container, hasTabs) {
        const tablist = container.querySelectorAll('[role="tablist"]')[0];
        let tabs;
        let panels;

        const generateArrays = function() {
            panels = container.querySelectorAll('[role="tabpanel"]');
            tabs = container.querySelectorAll('[role="tab"]');
        };

        generateArrays();

        // For easy reference
        const keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46,
            enter: 13,
            space: 32,
        };

        // Add or subtract depending on key pressed
        const direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1,
        };

        // Deactivate all tabs and tab panels
        const deactivateTabs = function() {
            for (let t = 0; t < tabs.length; t++) {
                tabs[t].setAttribute("tabindex", "-1");
                tabs[t].setAttribute("aria-selected", "false");
            }
        };

        // Activates any given tab panel
        const activateTab = function(tab, setFocus) {
            setFocus = setFocus || true;
            // Deactivate all other tabs
            deactivateTabs();

            // Remove tabindex attribute
            tab.removeAttribute("tabindex");

            // Set the tab as selected
            tab.setAttribute("aria-selected", "true");

            // Set focus when required
            if (setFocus) {
                tab.focus();
            }
        };

        const triggerTabClick = function(e) {
            const clickedId = e.target.getAttribute("id");
            if (clickedId) {
                const clickedTab = container.querySelector(
                    '[aria-controls="' + clickedId + '"]'
                );
                clickedTab.click();
                document.getElementById(clickedId).scrollIntoView({
                    behavior: "smooth",
                });
            }
        };

        const accordionClickEventListener = function(event) {
            triggerTabClick(event);
        };

        // When a tab is clicked, activateTab is fired to activate it
        const clickEventListener = function(event) {
            const tab = event.target;
            activateTab(tab, false);
        };

        // Make a guess
        const focusFirstTab = function() {
            const target = hasTabs ? tabs : panels;
            target[0].focus();
        };

        // Make a guess
        const focusLastTab = function() {
            const target = hasTabs ? tabs : panels;
            target[target.length - 1].focus();
        };

        // Either focus the next, previous, first, or last tab
        // depending on key pressed
        const switchTabOnArrowPress = function(event) {
            const pressed = event.keyCode;

            if (direction[pressed]) {
                const target = event.target;
                const targetElems = hasTabs ? tabs : panels;
                if (target.index !== undefined) {
                    if (targetElems[target.index + direction[pressed]]) {
                        targetElems[target.index + direction[pressed]].focus();
                    } else if (pressed === keys.left || pressed === keys.up) {
                        focusLastTab();
                    } else if (pressed === keys.right || pressed == keys.down) {
                        focusFirstTab();
                    }
                }
            }
        };

        // When a tablist's aria-orientation is set to vertical,
        // only up and down arrow should function.
        // In all other cases only left and right arrow function.
        const determineOrientation = function(event) {
            const key = event.keyCode;
            const vertical = tablist ?
                tablist.getAttribute("aria-orientation") === "vertical" :
                null;
            let proceed = false;

            if (vertical || !hasTabs) {
                if (key === keys.up || key === keys.down) {
                    event.preventDefault();
                    proceed = true;
                }
            } else {
                if (key === keys.left || key === keys.right) {
                    proceed = true;
                }
            }

            if (proceed) {
                switchTabOnArrowPress(event);
            }
        };

        // Handle keydown on tabs
        const keydownEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.end:
                    event.preventDefault();
                    // Activate last tab
                    focusLastTab();
                    break;
                case keys.home:
                    event.preventDefault();
                    // Activate first tab
                    focusFirstTab();
                    break;

                    // Up and down are in keydown
                    // because we need to prevent page scroll >:)
                case keys.up:
                case keys.down:
                    determineOrientation(event);
                    break;
            }
        };

        // Handle keyup on tabs
        const keyupEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.left:
                case keys.right:
                    determineOrientation(event);
                    break;
                case keys.enter:
                case keys.space:
                    if (hasTabs) {
                        activateTab(event.target);
                    } else {
                        triggerTabClick(event);
                    }
                    break;
            }
        };

        const addListeners = function(index) {
            const target = hasTabs ? tabs[index] : panels[index];
            tabs[index].addEventListener("click", clickEventListener);
            if (target) {
                if (!hasTabs) {
                    target.addEventListener("click", accordionClickEventListener);
                }
                target.addEventListener("keydown", keydownEventListener);
                target.addEventListener("keyup", keyupEventListener);
                // Build an array with all tabs (<button>s) in it
                target.index = index;
            }
        };

        // Bind listeners
        for (let i = 0; i < tabs.length; ++i) {
            addListeners(i);
        }

        // Accordion mode
        if (!hasTabs) {
            for (const panel of panels) {
                panel.onclick = function(e) {
                    triggerTabClick(e);
                };
            }
        }
    };

    const toggleClass = function(otherElems, thisELem, className = "is-active") {
        for (const otherElem of otherElems) {
            otherElem.classList.remove(className);
        }
        thisELem.classList.add(className);
    };

    const toggleVerticalTabs = function(tabContainer, tabs, items, item) {
        item.onclick = function(e) {
            const currId = item.getAttribute("id");
            const tab = tabContainer.querySelector(
                '.ootb-tabcordion--tabs [aria-controls="' + currId + '"]'
            );
            toggleClass(tabs, tab);
            toggleClass(items, item);
        };
    };

    const toggleTabs = function(tabContainer) {
        const tabs = tabContainer.querySelectorAll(".ootb-tabcordion--tabs .tab");
        const items = tabContainer.querySelectorAll(".ootb-tabcordion--entry");
        for (const tab of tabs) {
            tab.onclick = function() {
                const target = tab.getAttribute("aria-controls");
                const content = document.getElementById(target);
                toggleClass(tabs, tab);
                toggleClass(items, content);
            };
        }
        for (const item of items) {
            toggleVerticalTabs(tabContainer, tabs, items, item);
        }
    };

    const hasTabs = function(container) {
        return container.classList.contains("has-tabs");
    };

    const modeSwitcher = function(tabContainer, containerWidth) {
        const tabs = tabContainer.querySelectorAll(".tab");
        const container = tabs[0].closest(".ootb-tabcordion");
        let totalW = 0;
        for (const tab of tabs) {
            totalW += tab.offsetWidth;
        }
        if (totalW >= containerWidth) {
            container.classList.remove("has-tabs");
        } else {
            container.classList.add("has-tabs");
        }
        keyboardSupport(tabContainer, hasTabs(container));
    };

    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            modeSwitcher(entry.target, entry.contentRect.width);
        }
    });

    const tabContainers = document.querySelectorAll(".ootb-tabcordion");
    for (const tabContainer of tabContainers) {
        const tabList = tabContainer.querySelector(".ootb-tabcordion--tabs");
        resizeObserver.observe(tabList);
        toggleTabs(tabContainer);
        keyboardSupport(tabContainer, hasTabs(tabContainer));
    }
})();

/*Service page scroll*/
var swiper = new Swiper(".service-scroll", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
});

/* tab fuction service page*/
(function() {
    "use strict";

    const keyboardSupport = function(container, hasTabs) {
        const tablist = container.querySelectorAll('[role="tablist"]')[0];
        let tabs;
        let panels;

        const generateArrays = function() {
            panels = container.querySelectorAll('[role="tabpanel"]');
            tabs = container.querySelectorAll('[role="tab"]');
        };

        generateArrays();

        // For easy reference
        const keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46,
            enter: 13,
            space: 32,
        };

        // Add or subtract depending on key pressed
        const direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1,
        };

        // Deactivate all tabs and tab panels
        const deactivateTabs = function() {
            for (let t = 0; t < tabs.length; t++) {
                tabs[t].setAttribute("tabindex", "-1");
                tabs[t].setAttribute("aria-selected", "false");
            }
        };

        // Activates any given tab panel
        const activateTab = function(tab, setFocus) {
            setFocus = setFocus || true;
            // Deactivate all other tabs
            deactivateTabs();

            // Remove tabindex attribute
            tab.removeAttribute("tabindex");

            // Set the tab as selected
            tab.setAttribute("aria-selected", "true");

            // Set focus when required
            if (setFocus) {
                tab.focus();
            }
        };

        const triggerTabClick = function(e) {
            const clickedId = e.target.getAttribute("id");
            if (clickedId) {
                const clickedTab = container.querySelector(
                    '[aria-controls="' + clickedId + '"]'
                );
                clickedTab.click();
                document.getElementById(clickedId).scrollIntoView({
                    behavior: "smooth",
                });
            }
        };

        const accordionClickEventListener = function(event) {
            triggerTabClick(event);
        };

        // When a tab is clicked, activateTab is fired to activate it
        const clickEventListener = function(event) {
            const tab = event.target;
            activateTab(tab, false);
        };

        // Make a guess
        const focusFirstTab = function() {
            const target = hasTabs ? tabs : panels;
            target[0].focus();
        };

        // Make a guess
        const focusLastTab = function() {
            const target = hasTabs ? tabs : panels;
            target[target.length - 1].focus();
        };

        // Either focus the next, previous, first, or last tab
        // depending on key pressed
        const switchTabOnArrowPress = function(event) {
            const pressed = event.keyCode;

            if (direction[pressed]) {
                const target = event.target;
                const targetElems = hasTabs ? tabs : panels;
                if (target.index !== undefined) {
                    if (targetElems[target.index + direction[pressed]]) {
                        targetElems[target.index + direction[pressed]].focus();
                    } else if (pressed === keys.left || pressed === keys.up) {
                        focusLastTab();
                    } else if (pressed === keys.right || pressed == keys.down) {
                        focusFirstTab();
                    }
                }
            }
        };

        // When a tablist's aria-orientation is set to vertical,
        // only up and down arrow should function.
        // In all other cases only left and right arrow function.
        const determineOrientation = function(event) {
            const key = event.keyCode;
            const vertical = tablist ?
                tablist.getAttribute("aria-orientation") === "vertical" :
                null;
            let proceed = false;

            if (vertical || !hasTabs) {
                if (key === keys.up || key === keys.down) {
                    event.preventDefault();
                    proceed = true;
                }
            } else {
                if (key === keys.left || key === keys.right) {
                    proceed = true;
                }
            }

            if (proceed) {
                switchTabOnArrowPress(event);
            }
        };

        // Handle keydown on tabs
        const keydownEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.end:
                    event.preventDefault();
                    // Activate last tab
                    focusLastTab();
                    break;
                case keys.home:
                    event.preventDefault();
                    // Activate first tab
                    focusFirstTab();
                    break;

                    // Up and down are in keydown
                    // because we need to prevent page scroll >:)
                case keys.up:
                case keys.down:
                    determineOrientation(event);
                    break;
            }
        };

        // Handle keyup on tabs
        const keyupEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.left:
                case keys.right:
                    determineOrientation(event);
                    break;
                case keys.enter:
                case keys.space:
                    if (hasTabs) {
                        activateTab(event.target);
                    } else {
                        triggerTabClick(event);
                    }
                    break;
            }
        };

        const addListeners = function(index) {
            const target = hasTabs ? tabs[index] : panels[index];
            tabs[index].addEventListener("click", clickEventListener);
            if (target) {
                if (!hasTabs) {
                    target.addEventListener("click", accordionClickEventListener);
                }
                target.addEventListener("keydown", keydownEventListener);
                target.addEventListener("keyup", keyupEventListener);
                // Build an array with all tabs (<button>s) in it
                target.index = index;
            }
        };

        // Bind listeners
        for (let i = 0; i < tabs.length; ++i) {
            addListeners(i);
        }

        // Accordion mode
        if (!hasTabs) {
            for (const panel of panels) {
                panel.onclick = function(e) {
                    triggerTabClick(e);
                };
            }
        }
    };

    const toggleClass = function(otherElems, thisELem, className = "is-active") {
        for (const otherElem of otherElems) {
            otherElem.classList.remove(className);
        }
        thisELem.classList.add(className);
    };

    const toggleVerticalTabs = function(tabContainer, tabs, items, item) {
        item.onclick = function(e) {
            const currId = item.getAttribute("id");
            const tab = tabContainer.querySelector(
                '.ootb-tabcordion--tabs [aria-controls="' + currId + '"]'
            );
            toggleClass(tabs, tab);
            toggleClass(items, item);
        };
    };

    const toggleTabs = function(tabContainer) {
        const tabs = tabContainer.querySelectorAll(".ootb-tabcordion--tabs .tab");
        const items = tabContainer.querySelectorAll(".ootb-tabcordion--entry");
        for (const tab of tabs) {
            tab.onclick = function() {
                const target = tab.getAttribute("aria-controls");
                const content = document.getElementById(target);
                toggleClass(tabs, tab);
                toggleClass(items, content);
            };
        }
        for (const item of items) {
            toggleVerticalTabs(tabContainer, tabs, items, item);
        }
    };

    const hasTabs = function(container) {
        return container.classList.contains("has-tabs");
    };

    const modeSwitcher = function(tabContainer, containerWidth) {
        const tabs = tabContainer.querySelectorAll(".tab");
        const container = tabs[0].closest(".ootb-tabcordion");
        let totalW = 0;
        for (const tab of tabs) {
            totalW += tab.offsetWidth;
        }
        if (totalW >= containerWidth) {
            container.classList.remove("has-tabs");
        } else {
            container.classList.add("has-tabs");
        }
        keyboardSupport(tabContainer, hasTabs(container));
    };

    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            modeSwitcher(entry.target, entry.contentRect.width);
        }
    });

    const tabContainers = document.querySelectorAll(".ootb-tabcordion");
    for (const tabContainer of tabContainers) {
        const tabList = tabContainer.querySelector(".ootb-tabcordion--tabs");
        resizeObserver.observe(tabList);
        toggleTabs(tabContainer);
        keyboardSupport(tabContainer, hasTabs(tabContainer));
    }
})();

// tools
var swiper2 = new Swiper(".tools-swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    freeMode: true,
    breakpoints: {
        320: {
            slidesPerView: 3.1,
            spaceBetween: 5,
        },
        600: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
        900: {
            slidesPerView: "auto",
        },
    },
});

/* case study */
var swiper2 = new Swiper(".bottom-case-study-slider", {
    spaceBetween: 10,
    breakpoints: {
        900: {
            slidesPerView: 4.4,
        },
    },
});
$(document).ready(function() {
    // service toggle
    $(".icon-minus").hide();
    $(".icon-minus").click(function() {
        $(".sub-menu-parent").hide();
        $(".icon-plus").show();
        $(".icon-minus").hide();
        $(".sub-menu-opened").removeClass("sub-menu-opened");
    });
    $(".icon-plus").click(function() {
        $(".sub-menu-parent").show();
        $(".icon-minus").show();
        $(".icon-plus").hide();
    });

    $(".menu-item-has-children").click(function() {
        $(this)
            .toggleClass("sub-menu-opened")
            .siblings()
            .removeClass("sub-menu-opened");
    });
    $(".menu-check").change(function() {
        if ($(this).is(":checked")) {
            $(this).parent().parent().addClass("checked");
        } else {
            $(this).parent().parent().removeClass("checked");
        }
    });

    $('.tab input[type="checkbox"]').on("change", function() {
        $('.tab input[type="checkbox"]').not(this).prop("checked", false);
    });

});


// Search field check if empty hit 
$(document).on("click", ".search-submit", function(e) {
    searchInputVal = $('.search-form').find("input[type='search']").val().trim();
    if (searchInputVal == '') {
        $('.search-form').find("input[type='search']").val("");
        $('.search-form').find("input[type='search']").attr("placeholder", "Oops! You forgot to enter a search query");
        $('.search-form').find("input[type='search']").addClass("submit-error");
        return false;
    } else {
        $('.search-form').find("input[type='search']").removeClass("submit-error");
        return true;
    }
})