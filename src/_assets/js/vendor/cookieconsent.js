/*!
 * CookieConsent v2.9.0
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */
!(function () {
  "use strict";
  var n = "initCookieConsent";
  "undefined" != typeof window &&
    "function" != typeof window[n] &&
    (window[n] = function (n) {
      var t,
        e,
        o,
        i,
        r,
        a,
        c,
        f,
        u,
        d,
        v,
        l,
        s,
        p,
        b,
        m,
        y,
        g,
        h,
        _,
        w,
        k,
        x,
        S,
        J,
        O,
        j,
        N,
        T,
        D,
        C,
        U,
        z,
        E,
        I,
        L = {
          mode: "opt-in",
          current_lang: "en",
          auto_language: null,
          autorun: !0,
          page_scripts: !0,
          hide_from_bots: !0,
          cookie_name: "cc_cookie",
          cookie_expiration: 182,
          cookie_domain: location.hostname,
          cookie_path: "/",
          cookie_same_site: "Lax",
          use_rfc_cookie: !1,
          autoclear_cookies: !0,
          revision: 0,
          script_selector: "data-cookiecategory",
        },
        M = {},
        R = {},
        A = null,
        G = !0,
        H = !1,
        P = !1,
        q = !1,
        B = !1,
        F = !0,
        K = [],
        Q = !1,
        V = [],
        W = [],
        X = [],
        Y = !1,
        Z = [],
        $ = [],
        nn = [],
        tn = [],
        en = [],
        on = document.documentElement,
        rn = function (n) {
          "number" == typeof (t = n).cookie_expiration &&
            (L.cookie_expiration = t.cookie_expiration),
            "number" == typeof t.cookie_necessary_only_expiration &&
              (L.cookie_necessary_only_expiration =
                t.cookie_necessary_only_expiration),
            "boolean" == typeof t.autorun && (L.autorun = t.autorun),
            "string" == typeof t.cookie_domain &&
              (L.cookie_domain = t.cookie_domain),
            "string" == typeof t.cookie_same_site &&
              (L.cookie_same_site = t.cookie_same_site),
            "string" == typeof t.cookie_path && (L.cookie_path = t.cookie_path),
            "string" == typeof t.cookie_name && (L.cookie_name = t.cookie_name),
            "function" == typeof t.onAccept && (v = t.onAccept),
            "function" == typeof t.onFirstAction && (s = t.onFirstAction),
            "function" == typeof t.onChange && (l = t.onChange),
            "opt-out" === t.mode && (L.mode = "opt-out"),
            "number" == typeof t.revision &&
              (t.revision > -1 && (L.revision = t.revision), (B = !0)),
            "boolean" == typeof t.autoclear_cookies &&
              (L.autoclear_cookies = t.autoclear_cookies),
            !0 === t.use_rfc_cookie && (L.use_rfc_cookie = !0),
            "boolean" == typeof t.hide_from_bots &&
              (L.hide_from_bots = t.hide_from_bots),
            L.hide_from_bots &&
              (Y =
                navigator &&
                ((navigator.userAgent &&
                  /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)) ||
                  navigator.webdriver)),
            (L.page_scripts = !0 === t.page_scripts),
            "browser" === t.auto_language || !0 === t.auto_language
              ? (L.auto_language = "browser")
              : "document" === t.auto_language &&
                (L.auto_language = "document"),
            L.auto_language,
            (L.current_lang = sn(t.languages, t.current_lang));
        },
        an = function (n) {
          for (
            var t = "accept-",
              e = c("c-settings"),
              o = c(t + "all"),
              i = c(t + "necessary"),
              r = c(t + "custom"),
              a = 0;
            a < e.length;
            a++
          )
            e[a].setAttribute("aria-haspopup", "dialog"),
              wn(e[a], "click", function (n) {
                n.preventDefault(), M.showSettings(0);
              });
          for (a = 0; a < o.length; a++)
            wn(o[a], "click", function (n) {
              f(n, "all");
            });
          for (a = 0; a < r.length; a++)
            wn(r[a], "click", function (n) {
              f(n);
            });
          for (a = 0; a < i.length; a++)
            wn(i[a], "click", function (n) {
              f(n, []);
            });
          function c(t) {
            return (n || document).querySelectorAll('[data-cc="' + t + '"]');
          }
          function f(n, t) {
            n.preventDefault(), M.accept(t), M.hideSettings(), M.hide();
          }
        },
        cn = function (n, t) {
          return t.hasOwnProperty(n)
            ? n
            : kn(t).length > 0
            ? t.hasOwnProperty(L.current_lang)
              ? L.current_lang
              : kn(t)[0]
            : void 0;
        },
        fn = function (n) {
          if ((!0 === t.force_consent && xn(on, "force--consent"), !h)) {
            h = ln("div");
            var e = ln("div"),
              o = ln("div");
            (h.id = "cm"),
              (e.id = "c-inr-i"),
              (o.id = "cm-ov"),
              (h.tabIndex = -1),
              h.setAttribute("role", "dialog"),
              h.setAttribute("aria-modal", "true"),
              h.setAttribute("aria-hidden", "false"),
              h.setAttribute("aria-labelledby", "c-ttl"),
              h.setAttribute("aria-describedby", "c-txt"),
              g.appendChild(h),
              g.appendChild(o),
              (h.style.visibility = o.style.visibility = "hidden"),
              (o.style.opacity = 0);
          }
          var i = t.languages[n].consent_modal.title;
          i &&
            (_ ||
              (((_ = ln("div")).id = "c-ttl"),
              _.setAttribute("role", "heading"),
              _.setAttribute("aria-level", "2"),
              e.appendChild(_)),
            (_.innerHTML = i));
          var r = t.languages[n].consent_modal.description;
          B &&
            (r = F
              ? r.replace("{{revision_message}}", "")
              : r.replace(
                  "{{revision_message}}",
                  t.languages[n].consent_modal.revision_message || ""
                )),
            w || (((w = ln("div")).id = "c-txt"), e.appendChild(w)),
            (w.innerHTML = r);
          var a,
            c = t.languages[n].consent_modal.primary_btn,
            f = t.languages[n].consent_modal.secondary_btn;
          c &&
            (k ||
              (((k = ln("button")).id = "c-p-bn"),
              (k.className = "c-bn"),
              k.appendChild(On(1)),
              "accept_all" === c.role && (a = "all"),
              wn(k, "click", function () {
                M.hide(), M.accept(a);
              })),
            (k.firstElementChild.innerHTML =
              t.languages[n].consent_modal.primary_btn.text)),
            f &&
              (x ||
                (((x = ln("button")).id = "c-s-bn"),
                (x.className = "c-bn c_link"),
                x.appendChild(On(1)),
                "accept_necessary" === f.role
                  ? wn(x, "click", function () {
                      M.hide(), M.accept([]);
                    })
                  : wn(x, "click", function () {
                      M.showSettings(0);
                    })),
              (x.firstElementChild.innerHTML =
                t.languages[n].consent_modal.secondary_btn.text));
          var u = t.gui_options;
          J || (((J = ln("div")).id = "c-inr"), J.appendChild(e)),
            S ||
              (((S = ln("div")).id = "c-bns"),
              u && u.consent_modal && !0 === u.consent_modal.swap_buttons
                ? (f && S.appendChild(x),
                  c && S.appendChild(k),
                  (S.className = "swap"))
                : (c && S.appendChild(k), f && S.appendChild(x)),
              (c || f) && J.appendChild(S),
              h.appendChild(J)),
            (H = !0),
            an(J);
        },
        un = function (n) {
          if (O) (C = ln("div")).id = "s-bl";
          else {
            (O = ln("div")).tabIndex = -1;
            var e = ln("div"),
              o = ln("div"),
              i = ln("div");
            (j = ln("div")), (N = ln("div"));
            var r = ln("div");
            (T = ln("button")).appendChild(On(2));
            var a = ln("div");
            D = ln("div");
            var c = ln("div");
            wn(
              i,
              "click",
              function (n) {
                q && !j.contains(n.target) && M.hideSettings();
              },
              !0
            ),
              (O.id = "s-cnt"),
              (e.id = "c-vln"),
              (i.id = "c-s-in"),
              (o.id = "cs"),
              (N.id = "s-ttl"),
              (j.id = "s-inr"),
              (r.id = "s-hdr"),
              (D.id = "s-bl"),
              (T.id = "s-c-bn"),
              (c.id = "cs-ov"),
              (a.id = "s-c-bnc"),
              (T.className = "c-bn"),
              O.setAttribute("role", "dialog"),
              O.setAttribute("aria-modal", "true"),
              O.setAttribute("aria-hidden", "true"),
              O.setAttribute("aria-labelledby", "s-ttl"),
              N.setAttribute("role", "heading"),
              (O.style.visibility = c.style.visibility = "hidden"),
              (c.style.opacity = 0),
              a.appendChild(T),
              wn(
                document,
                "keydown",
                function (n) {
                  27 === n.keyCode && q && M.hideSettings();
                },
                !0
              ),
              wn(T, "click", function () {
                M.hideSettings();
              });
          }
          var f = t.languages[n].settings_modal;
          T.setAttribute("aria-label", f.close_btn_label || "Close"),
            (d = f.blocks),
            (u = f.cookie_table_headers);
          var v = f.cookie_table_caption,
            l = d.length;
          N.innerHTML = f.title;
          for (var s = 0; s < l; ++s) {
            var p = d[s].title,
              b = d[s].description,
              m = d[s].toggle,
              y = d[s].cookie_table,
              h = !0 === t.remove_cookie_tables,
              _ = !!b || (!h && !!y),
              w = ln("div"),
              k = ln("div");
            if (b) {
              var x = ln("div");
              (x.className = "p"), x.insertAdjacentHTML("beforeend", b);
            }
            var S = ln("div");
            if (
              ((S.className = "title"),
              (w.className = "c-bl"),
              (k.className = "desc"),
              void 0 !== m)
            ) {
              var J = "c-ac-" + s,
                L = ln(_ ? "button" : "div"),
                A = ln("label"),
                H = ln("input"),
                P = ln("span"),
                B = ln("span"),
                F = ln("span"),
                K = ln("span");
              (L.className = _ ? "b-tl exp" : "b-tl"),
                (A.className = "b-tg"),
                (H.className = "c-tgl"),
                (F.className = "on-i"),
                (K.className = "off-i"),
                (P.className = "c-tg"),
                (B.className = "t-lb"),
                _ &&
                  (L.setAttribute("aria-expanded", "false"),
                  L.setAttribute("aria-controls", J)),
                (H.type = "checkbox"),
                P.setAttribute("aria-hidden", "true");
              var Q = m.value;
              (H.value = Q),
                (B.textContent = p),
                L.insertAdjacentHTML("beforeend", p),
                S.appendChild(L),
                P.appendChild(F),
                P.appendChild(K),
                G
                  ? m.enabled
                    ? ((H.checked = !0),
                      !C && nn.push(!0),
                      m.enabled && !C && X.push(Q))
                    : !C && nn.push(!1)
                  : vn(R.categories, Q) > -1
                  ? ((H.checked = !0), !C && nn.push(!0))
                  : !C && nn.push(!1),
                !C && tn.push(Q),
                m.readonly &&
                  ((H.disabled = !0), xn(P, "c-ro"), !C && en.push(Q)),
                xn(k, "b-acc"),
                xn(S, "b-bn"),
                xn(w, "b-ex"),
                (k.id = J),
                k.setAttribute("aria-hidden", "true"),
                A.appendChild(H),
                A.appendChild(P),
                A.appendChild(B),
                S.appendChild(A),
                _ &&
                  (function (n, t, e) {
                    wn(
                      L,
                      "click",
                      function () {
                        Jn(t, "act")
                          ? (Sn(t, "act"),
                            e.setAttribute("aria-expanded", "false"),
                            n.setAttribute("aria-hidden", "true"))
                          : (xn(t, "act"),
                            e.setAttribute("aria-expanded", "true"),
                            n.setAttribute("aria-hidden", "false"));
                      },
                      !1
                    );
                  })(k, w, L);
            } else if (p) {
              var V = ln("div");
              (V.className = "b-tl"),
                V.setAttribute("role", "heading"),
                V.setAttribute("aria-level", "3"),
                V.insertAdjacentHTML("beforeend", p),
                S.appendChild(V);
            }
            if (
              (p && w.appendChild(S), b && k.appendChild(x), !h && void 0 !== y)
            ) {
              for (
                var W = document.createDocumentFragment(), Y = 0;
                Y < u.length;
                ++Y
              ) {
                var Z = ln("th"),
                  $ = u[Y];
                if ((Z.setAttribute("scope", "col"), $)) {
                  var on = $ && kn($)[0];
                  (Z.textContent = u[Y][on]), W.appendChild(Z);
                }
              }
              var rn = ln("tr");
              rn.appendChild(W);
              var an = ln("thead");
              an.appendChild(rn);
              var cn = ln("table");
              if (v) {
                var fn = ln("caption");
                (fn.innerHTML = v), cn.appendChild(fn);
              }
              cn.appendChild(an);
              for (
                var un = document.createDocumentFragment(), dn = 0;
                dn < y.length;
                dn++
              ) {
                for (var sn = ln("tr"), pn = 0; pn < u.length; ++pn)
                  if (($ = u[pn])) {
                    on = kn($)[0];
                    var bn = ln("td");
                    bn.insertAdjacentHTML("beforeend", y[dn][on]),
                      bn.setAttribute("data-column", $[on]),
                      sn.appendChild(bn);
                  }
                un.appendChild(sn);
              }
              var mn = ln("tbody");
              mn.appendChild(un), cn.appendChild(mn), k.appendChild(cn);
            }
            ((m && p) || (!m && (p || b))) &&
              (w.appendChild(k), C ? C.appendChild(w) : D.appendChild(w));
          }
          U || ((U = ln("div")).id = "s-bns"),
            E ||
              (((E = ln("button")).id = "s-all-bn"),
              (E.className = "c-bn"),
              U.appendChild(E),
              wn(E, "click", function () {
                M.accept("all"), M.hideSettings(), M.hide();
              })),
            (E.innerHTML = f.accept_all_btn);
          var yn = f.reject_all_btn;
          if (
            (yn &&
              (I ||
                (((I = ln("button")).id = "s-rall-bn"),
                (I.className = "c-bn"),
                wn(I, "click", function () {
                  M.accept([]), M.hideSettings(), M.hide();
                }),
                (j.className = "bns-t"),
                U.appendChild(I)),
              (I.innerHTML = yn)),
            z ||
              (((z = ln("button")).id = "s-sv-bn"),
              (z.className = "c-bn"),
              U.appendChild(z),
              wn(z, "click", function () {
                M.accept(), M.hideSettings(), M.hide();
              })),
            (z.innerHTML = f.save_settings_btn),
            C)
          )
            return j.replaceChild(C, D), void (D = C);
          r.appendChild(N),
            r.appendChild(a),
            j.appendChild(r),
            j.appendChild(D),
            j.appendChild(U),
            i.appendChild(j),
            o.appendChild(i),
            e.appendChild(o),
            O.appendChild(e),
            g.appendChild(O),
            g.appendChild(c);
        };
      M.updateLanguage = function (n, e) {
        if ("string" == typeof n) {
          var o = cn(n, t.languages);
          return (
            (o !== L.current_lang || !0 === e) &&
            ((L.current_lang = o), H && fn(o), un(o), !0)
          );
        }
      };
      var dn = function (n) {
          var t = d.length,
            e = -1;
          Q = !1;
          var o = hn("", "all"),
            i = [L.cookie_domain, "." + L.cookie_domain];
          if ("www." === L.cookie_domain.slice(0, 4)) {
            var r = L.cookie_domain.substr(4);
            i.push(r), i.push("." + r);
          }
          for (var a = 0; a < t; a++) {
            var c = d[a];
            if (c.hasOwnProperty("toggle")) {
              var f = vn(K, c.toggle.value) > -1;
              if (!nn[++e] && c.hasOwnProperty("cookie_table") && (n || f)) {
                var v = c.cookie_table,
                  l = kn(u[0])[0],
                  s = v.length;
                "on_disable" === c.toggle.reload && f && (Q = !0);
                for (var p = 0; p < s; p++) {
                  var b = i,
                    m = v[p],
                    y = [],
                    g = m[l],
                    h = m.is_regex || !1,
                    _ = m.domain || null,
                    w = m.path || !1;
                  if ((_ && (b = [_, "." + _]), h))
                    for (var k = 0; k < o.length; k++)
                      o[k].match(g) && y.push(o[k]);
                  else {
                    var x = vn(o, g);
                    x > -1 && y.push(o[x]);
                  }
                  y.length > 0 &&
                    (_n(y, w, b), "on_clear" === c.toggle.reload && (Q = !0));
                }
              }
            }
          }
        },
        vn = function (n, t) {
          return n.indexOf(t);
        },
        ln = function (n) {
          var t = document.createElement(n);
          return "button" === n && t.setAttribute("type", n), t;
        },
        sn = function (n, t) {
          return "browser" === L.auto_language
            ? cn(pn(), n)
            : "document" === L.auto_language
            ? cn(document.documentElement.lang, n)
            : "string" == typeof t
            ? (L.current_lang = cn(t, n))
            : (L.current_lang, L.current_lang);
        },
        pn = function () {
          var n = navigator.language || navigator.browserLanguage;
          return n.length > 2 && (n = n[0] + n[1]), n.toLowerCase();
        };
      (M.allowedCategory = function (n) {
        if (G && "opt-in" !== L.mode) t = X;
        else
          var t =
            JSON.parse(hn(L.cookie_name, "one", !0) || "{}").categories || [];
        return vn(t, n) > -1;
      }),
        (M.run = function (t) {
          if (!document.getElementById("cc_div")) {
            if ((rn(t), Y)) return;
            R = JSON.parse(hn(L.cookie_name, "one", !0) || "{}");
            var c = void 0 !== (i = R.consent_uuid);
            if (
              ((e = R.consent_date) && (e = new Date(e)),
              (o = R.last_consent_update) && (o = new Date(o)),
              (A = void 0 !== R.data ? R.data : null),
              B && R.revision !== L.revision && (F = !1),
              (H = G = !(c && F && e && o && i)),
              (function () {
                ((y = ln("div")).id = "cc--main"),
                  (y.style.position = "fixed"),
                  (y.innerHTML = '<div id="cc_div" class="cc_div"></div>'),
                  (g = y.children[0]);
                var t = L.current_lang;
                H && fn(t), un(t), (n || document.body).appendChild(y);
              })(),
              (function () {
                var n = [
                  "[href]",
                  "button",
                  "input",
                  "details",
                  '[tabindex="0"]',
                ];
                function t(t, e) {
                  var o = !1,
                    i = !1;
                  try {
                    for (
                      var r,
                        a = t.querySelectorAll(
                          n.join(':not([tabindex="-1"]), ')
                        ),
                        c = a.length,
                        f = 0;
                      f < c;

                    )
                      (r = a[f].getAttribute("data-focus")),
                        i || "1" !== r
                          ? "0" === r &&
                            ((o = a[f]),
                            i ||
                              "0" === a[f + 1].getAttribute("data-focus") ||
                              (i = a[f + 1]))
                          : (i = a[f]),
                        f++;
                  } catch (e) {
                    return t.querySelectorAll(n.join(", "));
                  }
                  (e[0] = a[0]),
                    (e[1] = a[a.length - 1]),
                    (e[2] = o),
                    (e[3] = i);
                }
                t(j, $), H && t(h, Z);
              })(),
              (function (n, t) {
                if ("object" == typeof n) {
                  var e = n.consent_modal,
                    o = n.settings_modal;
                  H &&
                    e &&
                    i(
                      h,
                      ["box", "bar", "cloud"],
                      ["top", "middle", "bottom"],
                      ["zoom", "slide"],
                      e.layout,
                      e.position,
                      e.transition
                    ),
                    o &&
                      i(
                        O,
                        ["bar"],
                        ["left", "right"],
                        ["zoom", "slide"],
                        o.layout,
                        o.position,
                        o.transition
                      );
                }
                function i(n, t, e, o, i, r, a) {
                  if (
                    ((r = (r && r.split(" ")) || []),
                    vn(t, i) > -1 &&
                      (xn(n, i),
                      ("bar" !== i || "middle" !== r[0]) && vn(e, r[0]) > -1))
                  )
                    for (var c = 0; c < r.length; c++) xn(n, r[c]);
                  vn(o, a) > -1 && xn(n, a);
                }
              })(t.gui_options),
              an(),
              L.autorun && H && M.show(t.delay || 0),
              setTimeout(function () {
                xn(y, "c--anim");
              }, 30),
              setTimeout(function () {
                wn(document, "keydown", function (n) {
                  if ("Tab" === n.key && (P || q) && r) {
                    var t = Tn();
                    n.shiftKey
                      ? (t !== r[0] && a.contains(t)) ||
                        (n.preventDefault(), jn(r[1]))
                      : (t !== r[1] && a.contains(t)) ||
                        (n.preventDefault(), jn(r[0]));
                  }
                });
              }, 100),
              G)
            )
              "opt-out" === L.mode && (L.mode, bn(X));
            else {
              var f = "boolean" == typeof R.rfc_cookie;
              (!f || (f && R.rfc_cookie !== L.use_rfc_cookie)) &&
                ((R.rfc_cookie = L.use_rfc_cookie),
                gn(L.cookie_name, JSON.stringify(R))),
                (p = yn(mn())),
                bn(),
                "function" == typeof v && v(R);
            }
          }
        });
      var bn = function (n) {
        if (L.page_scripts) {
          var t = document.querySelectorAll(
              "script[" + L.script_selector + "]"
            ),
            e = n || R.categories || [],
            o = function (n, t) {
              if (t < n.length) {
                var i = n[t],
                  r = i.getAttribute(L.script_selector);
                if (vn(e, r) > -1) {
                  (i.type = i.getAttribute("data-type") || "text/javascript"),
                    i.removeAttribute(L.script_selector);
                  var a = i.getAttribute("data-src");
                  a && i.removeAttribute("data-src");
                  var c = ln("script");
                  if (
                    ((c.textContent = i.innerHTML),
                    (function (n, t) {
                      for (
                        var e = t.attributes, o = e.length, i = 0;
                        i < o;
                        i++
                      ) {
                        var r = e[i].nodeName;
                        n.setAttribute(r, t[r] || t.getAttribute(r));
                      }
                    })(c, i),
                    a ? (c.src = a) : (a = i.src),
                    a &&
                      (c.readyState
                        ? (c.onreadystatechange = function () {
                            ("loaded" !== c.readyState &&
                              "complete" !== c.readyState) ||
                              ((c.onreadystatechange = null), o(n, ++t));
                          })
                        : (c.onload = function () {
                            (c.onload = null), o(n, ++t);
                          })),
                    i.parentNode.replaceChild(c, i),
                    a)
                  )
                    return;
                }
                o(n, ++t);
              }
            };
          o(t, 0);
        }
      };
      (M.set = function (n, t) {
        return (
          "data" === n &&
          (function (n, t) {
            var e = !1;
            if ("update" === t) {
              var o = typeof (A = M.get("data")) == typeof n;
              if (o && "object" == typeof A)
                for (var i in (!A && (A = {}), n))
                  A[i] !== n[i] && ((A[i] = n[i]), (e = !0));
              else (!o && A) || A === n || ((A = n), (e = !0));
            } else (A = n), (e = !0);
            return e && ((R.data = A), gn(L.cookie_name, JSON.stringify(R))), e;
          })(t.value, t.mode)
        );
      }),
        (M.get = function (n, t) {
          return JSON.parse(hn(t || L.cookie_name, "one", !0) || "{}")[n];
        }),
        (M.getConfig = function (n) {
          return L[n] || t[n];
        });
      var mn = function () {
          return (
            (V = R.categories || []),
            (W = tn.filter(function (n) {
              return -1 === vn(V, n);
            })),
            { accepted: V, rejected: W }
          );
        },
        yn = function (n) {
          var t = "custom",
            e = en.length;
          return (
            n.accepted.length === tn.length
              ? (t = "all")
              : n.accepted.length === e && (t = "necessary"),
            t
          );
        };
      (M.getUserPreferences = function () {
        var n = mn();
        return {
          accept_type: yn(n),
          accepted_categories: n.accepted,
          rejected_categories: n.rejected,
        };
      }),
        (M.loadScript = function (n, t, e) {
          var o = "function" == typeof t;
          if (document.querySelector('script[src="' + n + '"]')) o && t();
          else {
            var i = ln("script");
            if (e && e.length > 0)
              for (var r = 0; r < e.length; ++r)
                e[r] && i.setAttribute(e[r].name, e[r].value);
            o && (i.onload = t), (i.src = n), document.head.appendChild(i);
          }
        }),
        (M.updateScripts = function () {
          bn();
        }),
        (M.show = function (n, t) {
          !0 === t && fn(L.current_lang),
            H &&
              ((b = Tn()),
              (r = Z),
              (a = h),
              (P = !0),
              h.removeAttribute("aria-hidden"),
              setTimeout(
                function () {
                  xn(on, "show--consent");
                },
                n > 0 ? n : t ? 30 : 0
              ));
        }),
        (M.hide = function () {
          H &&
            ((P = !1),
            jn(c),
            h.setAttribute("aria-hidden", "true"),
            Sn(on, "show--consent"),
            jn(b),
            (b = null));
        }),
        (M.showSettings = function (n) {
          (q = !0),
            O.removeAttribute("aria-hidden"),
            P ? (m = Tn()) : (b = Tn()),
            (a = O),
            (r = $),
            setTimeout(
              function () {
                xn(on, "show--settings");
              },
              n > 0 ? n : 0
            );
        }),
        (M.hideSettings = function () {
          (q = !1),
            Nn(),
            jn(f),
            O.setAttribute("aria-hidden", "true"),
            Sn(on, "show--settings"),
            P ? (jn(m), (m = null), (a = h), (r = Z)) : (jn(b), (b = null));
        }),
        (M.accept = function (n, t) {
          var r = n || void 0,
            a = t || [],
            c = [];
          if (r)
            if ("object" == typeof r && "number" == typeof r.length)
              for (var f = 0; f < r.length; f++)
                -1 !== vn(tn, r[f]) && c.push(r[f]);
            else
              "string" == typeof r &&
                ("all" === r
                  ? (c = tn.slice())
                  : -1 !== vn(tn, r) && c.push(r));
          else
            c = (function () {
              for (
                var n = document.querySelectorAll(".c-tgl") || [],
                  t = [],
                  e = 0;
                e < n.length;
                e++
              )
                n[e].checked && t.push(n[e].value);
              return t;
            })();
          if (a.length >= 1)
            for (f = 0; f < a.length; f++)
              c = c.filter(function (n) {
                return n !== a[f];
              });
          for (f = 0; f < tn.length; f++)
            !0 === en.includes(tn[f]) && -1 === vn(c, tn[f]) && c.push(tn[f]);
          !(function (n) {
            K = [];
            var t = O.querySelectorAll(".c-tgl") || [];
            if (t.length > 0)
              for (var r = 0; r < t.length; r++)
                -1 !== vn(n, tn[r])
                  ? ((t[r].checked = !0),
                    nn[r] || (K.push(tn[r]), (nn[r] = !0)))
                  : ((t[r].checked = !1),
                    nn[r] && (K.push(tn[r]), (nn[r] = !1)));
            !G && L.autoclear_cookies && K.length > 0 && dn(),
              e || (e = new Date()),
              i ||
                (i = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  function (n) {
                    try {
                      return (
                        n ^
                        ((window.crypto || window.msCrypto).getRandomValues(
                          new Uint8Array(1)
                        )[0] &
                          (15 >> (n / 4)))
                      ).toString(16);
                    } catch (n) {
                      return "";
                    }
                  }
                )),
              (R = {
                categories: n,
                level: n,
                revision: L.revision,
                data: A,
                rfc_cookie: L.use_rfc_cookie,
                consent_date: e.toISOString(),
                consent_uuid: i,
              }),
              (G || K.length > 0) &&
                ((F = !0),
                (o = o ? new Date() : e),
                (R.last_consent_update = o.toISOString()),
                (p = yn(mn())),
                gn(L.cookie_name, JSON.stringify(R)),
                bn()),
              (G &&
                (L.autoclear_cookies && dn(!0),
                "function" == typeof s && s(M.getUserPreferences(), R),
                "function" == typeof v && v(R),
                (G = !1),
                "opt-in" === L.mode)) ||
                ("function" == typeof l && K.length > 0 && l(R, K),
                Q && location.reload());
          })(c);
        }),
        (M.eraseCookies = function (n, t, e) {
          var o = [],
            i = e ? [e, "." + e] : [L.cookie_domain, "." + L.cookie_domain];
          if ("object" == typeof n && n.length > 0)
            for (var r = 0; r < n.length; r++)
              this.validCookie(n[r]) && o.push(n[r]);
          else this.validCookie(n) && o.push(n);
          _n(o, t, i);
        });
      var gn = function (n, t) {
          var e = L.cookie_expiration;
          "number" == typeof L.cookie_necessary_only_expiration &&
            "necessary" === p &&
            (e = L.cookie_necessary_only_expiration),
            (t = L.use_rfc_cookie ? encodeURIComponent(t) : t);
          var o = new Date();
          o.setTime(o.getTime() + 24 * e * 60 * 60 * 1e3);
          var i =
            n +
            "=" +
            (t || "") +
            "; expires=" +
            o.toUTCString() +
            "; Path=" +
            L.cookie_path +
            ";";
          (i += " SameSite=" + L.cookie_same_site + ";"),
            location.hostname.indexOf(".") > -1 &&
              L.cookie_domain &&
              (i += " Domain=" + L.cookie_domain + ";"),
            "https:" === location.protocol && (i += " Secure;"),
            (document.cookie = i);
        },
        hn = function (n, t, e) {
          var o;
          if ("one" === t) {
            if (
              (o = (o = document.cookie.match(
                "(^|;)\\s*" + n + "\\s*=\\s*([^;]+)"
              ))
                ? e
                  ? o.pop()
                  : n
                : "") &&
              n === L.cookie_name
            ) {
              try {
                o = JSON.parse(o);
              } catch (n) {
                try {
                  o = JSON.parse(decodeURIComponent(o));
                } catch (n) {
                  o = {};
                }
              }
              o = JSON.stringify(o);
            }
          } else if ("all" === t) {
            var i = document.cookie.split(/;\s*/);
            o = [];
            for (var r = 0; r < i.length; r++) o.push(i[r].split("=")[0]);
          }
          return o;
        },
        _n = function (n, t, e) {
          for (var o = t || "/", i = 0; i < n.length; i++) {
            for (var r = 0; r < e.length; r++)
              document.cookie =
                n[i] +
                "=; path=" +
                o +
                (0 == e[r].indexOf(".") ? "; domain=" + e[r] : "") +
                "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            n[i];
          }
        };
      M.validCookie = function (n) {
        return "" !== hn(n, "one", !0);
      };
      var wn = function (n, t, e, o) {
          n.addEventListener(t, e, !0 === o && { passive: !0 });
        },
        kn = function (n) {
          if ("object" == typeof n) return Object.keys(n);
        },
        xn = function (n, t) {
          n.classList.add(t);
        },
        Sn = function (n, t) {
          n.classList.remove(t);
        },
        Jn = function (n, t) {
          return n.classList.contains(t);
        },
        On = function (n) {
          var t = ln("span");
          return (t.tabIndex = -1), 1 === n ? (c = t) : (f = t), t;
        },
        jn = function (n) {
          n && n instanceof HTMLElement && n.focus();
        },
        Nn = function () {
          for (var n = j.querySelectorAll(".c-tgl"), t = 0; t < n.length; t++) {
            var e = n[t].value,
              o = en.includes(e);
            n[t].checked = o || M.allowedCategory(e);
          }
        },
        Tn = function () {
          return document.activeElement;
        };
      return M;
    });
})();
